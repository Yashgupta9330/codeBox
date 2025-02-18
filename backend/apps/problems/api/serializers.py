from rest_framework import serializers
from ..models import Problem, TestCase

class ProblemSerializer(serializers.ModelSerializer):
    """
    Serializer for the Problem model.
    Converts Problem model instances to JSON format and vice versa.
    """
    class Meta:
        model = Problem
        fields = '__all__' 

class TestCaseSerializer(serializers.ModelSerializer):
    class Meta:
        model = TestCase
        fields = ['id', 'problem', 'input_data', 'expected_output', 'is_sample', 'explanation', 'order']
