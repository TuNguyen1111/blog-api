# Generated by Django 4.1.3 on 2022-11-22 17:05

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_alter_blog_image'),
    ]

    operations = [
        migrations.RenameField(
            model_name='blog',
            old_name='description',
            new_name='content',
        ),
    ]
