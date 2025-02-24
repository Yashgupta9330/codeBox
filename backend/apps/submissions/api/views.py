import logging
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from ..models import CodeSubmission
from ..services.code_executor import CodeExecutor
from .serializers import CodeSubmissionSerializer
from rest_framework.permissions import AllowAny
from asgiref.sync import async_to_sync

logger = logging.getLogger(__name__)

class CodeSubmissionViewSet(viewsets.ModelViewSet):
    queryset = CodeSubmission.objects.all()
    serializer_class = CodeSubmissionSerializer

    @action(detail=False, methods=['post'], permission_classes=[AllowAny])
    def submit(self, request):
        submission = None  # Initialize submission to handle potential errors
        try:
            serializer = self.get_serializer(data=request.data)
            serializer.is_valid(raise_exception=True)
            submission = serializer.save()  # Save the submission

            executor = CodeExecutor(
                submission=submission,
                test_cases=submission.test_cases
            )

            # Run the code executor synchronously
            result = async_to_sync(executor.execute)()
            logger.info(f"Result generated: {result}")

            # Check if all test cases succeeded
            overall_success = all(test_case['success'] for test_case in result)
            
            # Update submission status based on overall success or failure
            submission.status = 'Accepted' if overall_success else 'Error'
            submission.save()

            # Return the result of execution
            return Response(result)

        except Exception as e:
            # Log the error for debugging
            logger.error(f"Error during code submission execution: {str(e)}")

            # Update submission status if it was already created
            if submission:
                submission.status = 'Error'
                submission.save()

            # Respond with an error message
            return Response({
                'message': f'Execution error: {str(e)}',
                'error': True,
                'success': False,
                'output_value': '',
                'input': '',
                'expected_output': ''
            }, status=500)
