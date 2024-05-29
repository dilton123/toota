# Generated by Django 5.0.2 on 2024-05-27 14:34

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('trips', '0003_dropofflocation_pickuplocation_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='trip',
            name='dropoff_location',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='dropoff_location', to='trips.dropofflocation'),
        ),
    ]
