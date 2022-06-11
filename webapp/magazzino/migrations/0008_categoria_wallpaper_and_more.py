# Generated by Django 4.0.5 on 2022-06-11 19:18

from django.db import migrations, models
import django.db.models.deletion
import magazzino.helpers.updirs


class Migration(migrations.Migration):

    dependencies = [
        ('magazzino', '0007_remove_prodottovariante_attributo_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='categoria',
            name='wallpaper',
            field=models.ImageField(blank=True, default=None, upload_to=magazzino.helpers.updirs.wallpapers_dir),
        ),
        migrations.AlterField(
            model_name='categoriasecondaria',
            name='categoria',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='categorie_secondarie', to='magazzino.categoria'),
        ),
        migrations.AlterField(
            model_name='prodottovariante',
            name='prodotto',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='prodotti', to='magazzino.prodotto'),
        ),
        migrations.AlterField(
            model_name='prodottovarianteattributo',
            name='variante',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='attributi', to='magazzino.prodottovariante'),
        ),
    ]