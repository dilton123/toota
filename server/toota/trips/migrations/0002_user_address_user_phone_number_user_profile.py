# Generated by Django 4.1.3 on 2024-02-18 18:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('trips', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='address',
            field=models.CharField(blank=True, max_length=300, null=True),
        ),
        migrations.AddField(
            model_name='user',
            name='phone_number',
            field=models.CharField(default='0781234567', max_length=15, unique=True),
        ),
        migrations.AddField(
            model_name='user',
            name='profile',
            field=models.ImageField(default='profile/default.jpg', upload_to='profile/'),
        ),
    ]
