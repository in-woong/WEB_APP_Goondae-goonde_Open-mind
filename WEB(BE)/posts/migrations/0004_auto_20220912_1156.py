# Generated by Django 2.2.4 on 2022-09-12 11:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('posts', '0003_post_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='image',
            field=models.ImageField(default='posts/defualt/defualt_post_img.png', upload_to='posts/img'),
        ),
    ]
