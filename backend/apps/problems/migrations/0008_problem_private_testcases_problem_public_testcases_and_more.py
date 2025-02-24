# Generated by Django 5.1.6 on 2025-02-17 18:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('problems', '0007_delete_hint_remove_problem_hints_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='problem',
            name='private_testcases',
            field=models.TextField(default=''),
        ),
        migrations.AddField(
            model_name='problem',
            name='public_testcases',
            field=models.TextField(default=''),
        ),
        migrations.DeleteModel(
            name='TestCase',
        ),
    ]
