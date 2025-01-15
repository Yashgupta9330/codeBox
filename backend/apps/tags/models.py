from django.db import models


class ProblemTag(models.Model):
    name = models.CharField(max_length=50, unique=True)
    problems = models.ManyToManyField('problems.Problem', related_name='tags')

    def __str__(self):
        return self.name
