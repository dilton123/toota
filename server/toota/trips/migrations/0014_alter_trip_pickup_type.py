# Generated by Django 5.0.2 on 2024-02-21 07:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('trips', '0013_alter_trip_pickup_type'),
    ]

    operations = [
        migrations.AlterField(
            model_name='trip',
            name='pickup_type',
            field=models.DateTimeField(),
        ),
    ]
