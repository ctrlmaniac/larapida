# Generated by Django 4.1 on 2022-09-05 17:29

from django.db import migrations, models
import magazzino.helpers.updirs


class Migration(migrations.Migration):

    dependencies = [
        ("magazzino", "0002_alter_prodotto_url"),
    ]

    operations = [
        migrations.AddField(
            model_name="categoria",
            name="wallpaper_thumbnail",
            field=models.ImageField(
                blank=True,
                default=None,
                upload_to=magazzino.helpers.updirs.wallpapers_dir,
            ),
        ),
    ]