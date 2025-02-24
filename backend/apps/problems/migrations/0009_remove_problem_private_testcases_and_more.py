# Generated by Django 5.1.6 on 2025-02-17 18:57

import django.db.models.deletion
import markdownx.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('problems', '0008_problem_private_testcases_problem_public_testcases_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='problem',
            name='private_testcases',
        ),
        migrations.RemoveField(
            model_name='problem',
            name='public_testcases',
        ),
        migrations.CreateModel(
            name='TestCase',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('input_data', models.TextField()),
                ('expected_output', models.TextField()),
                ('is_sample', models.BooleanField(default=False)),
                ('explanation', markdownx.models.MarkdownxField(blank=True, null=True)),
                ('order', models.IntegerField(default=0)),
                ('problem', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='test_cases', to='problems.problem')),
            ],
            options={
                'ordering': ['order'],
            },
        ),
    ]
