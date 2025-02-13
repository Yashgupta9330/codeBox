from django.urls import path
from .views import ProblemCreateView,ProblemGetView,ProblemListView, ProblemBySlugView

urlpatterns = [
    path('create/', ProblemCreateView.as_view(), name='problem-create'),
    path('get/', ProblemGetView.as_view(), name='problem-get'),
    path('problem/', ProblemBySlugView.as_view(), name='problem-get-slug'),
    path('list/', ProblemListView.as_view(), name='problem-list'),
]
