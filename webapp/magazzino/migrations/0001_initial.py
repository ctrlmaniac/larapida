# Generated by Django 4.0.5 on 2022-06-27 20:02

import uuid

import django.db.models.deletion
import magazzino.helpers.updirs
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ("contenttypes", "0002_remove_content_type_name"),
    ]

    operations = [
        migrations.CreateModel(
            name="Categoria",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("nome", models.CharField(max_length=200)),
                ("url", models.SlugField(unique=True)),
                (
                    "sito",
                    models.BooleanField(default=True, verbose_name="Mostra sul sito"),
                ),
                ("descrizione_breve", models.TextField(max_length=500)),
                ("descrizione", models.TextField(blank=True, default=None)),
                (
                    "wallpaper",
                    models.ImageField(
                        blank=True,
                        default=None,
                        upload_to=magazzino.helpers.updirs.wallpapers_dir,
                    ),
                ),
            ],
            options={
                "verbose_name": "Categoria",
                "verbose_name_plural": "Categorie",
            },
        ),
        migrations.CreateModel(
            name="CategoriaSecondaria",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("nome", models.CharField(max_length=200)),
                (
                    "sito",
                    models.BooleanField(default=True, verbose_name="Mostra sul sito"),
                ),
                (
                    "descrizione",
                    models.TextField(
                        blank=True, default=None, max_length=500, null=True
                    ),
                ),
                (
                    "categoria",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="categorie_secondarie",
                        to="magazzino.categoria",
                    ),
                ),
            ],
            options={
                "verbose_name": "Categoria Secondaria",
                "verbose_name_plural": "Categorie Secondarie",
            },
        ),
        migrations.CreateModel(
            name="Prodotto",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "uuid",
                    models.UUIDField(default=uuid.uuid4, editable=False, unique=True),
                ),
                (
                    "sito",
                    models.BooleanField(default=True, help_text="mostra sul sito"),
                ),
                (
                    "shop",
                    models.BooleanField(default=True, help_text="mostra sullo shop"),
                ),
                ("nome", models.CharField(max_length=200)),
                (
                    "descrizione_breve",
                    models.TextField(
                        blank=True, default=None, max_length=500, null=True
                    ),
                ),
                ("descrizione", models.TextField(blank=True, default=None, null=True)),
                (
                    "url",
                    models.CharField(
                        blank=True, default=None, max_length=500, null=True
                    ),
                ),
                (
                    "prezzo",
                    models.DecimalField(
                        blank=True,
                        decimal_places=2,
                        default=None,
                        max_digits=19,
                        null=True,
                    ),
                ),
                (
                    "prezzo_offerta",
                    models.DecimalField(
                        blank=True,
                        decimal_places=2,
                        default=None,
                        max_digits=19,
                        null=True,
                    ),
                ),
                ("prezzo_a_partire", models.BooleanField(default=False)),
                (
                    "servizio",
                    models.BooleanField(
                        default=False, help_text="Questo prodotto è un servizio"
                    ),
                ),
                (
                    "categoria",
                    models.ForeignKey(
                        blank=True,
                        default=None,
                        null=True,
                        on_delete=django.db.models.deletion.SET_NULL,
                        to="magazzino.categoria",
                    ),
                ),
                (
                    "categoria_secondaria",
                    models.ForeignKey(
                        blank=True,
                        default=None,
                        null=True,
                        on_delete=django.db.models.deletion.SET_NULL,
                        to="magazzino.categoriasecondaria",
                    ),
                ),
                (
                    "polymorphic_ctype",
                    models.ForeignKey(
                        editable=False,
                        null=True,
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="polymorphic_%(app_label)s.%(class)s_set+",
                        to="contenttypes.contenttype",
                    ),
                ),
            ],
            options={
                "verbose_name": "Prodotto",
                "verbose_name_plural": "Prodotti",
                "ordering": ("nome",),
            },
        ),
        migrations.CreateModel(
            name="ProdottoAttributo",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("attributo", models.CharField(max_length=100)),
            ],
            options={
                "verbose_name_plural": "Prodotto Attributi",
            },
        ),
        migrations.CreateModel(
            name="ProdottoAttributoValore",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("valore", models.CharField(max_length=100)),
                (
                    "attributo",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="magazzino.prodottoattributo",
                    ),
                ),
            ],
            options={
                "verbose_name_plural": "Prodotto Attributo Valori",
            },
        ),
        migrations.CreateModel(
            name="ProdottoVariante",
            fields=[
                (
                    "prodotto_ptr",
                    models.OneToOneField(
                        auto_created=True,
                        on_delete=django.db.models.deletion.CASCADE,
                        parent_link=True,
                        primary_key=True,
                        serialize=False,
                        to="magazzino.prodotto",
                    ),
                ),
                (
                    "prodotto",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="varianti",
                        to="magazzino.prodotto",
                    ),
                ),
            ],
            options={
                "verbose_name_plural": "Prodotto Varianti",
            },
            bases=("magazzino.prodotto",),
        ),
        migrations.CreateModel(
            name="ProdottoImmagine",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "file",
                    models.ImageField(upload_to=magazzino.helpers.updirs.art_file_dir),
                ),
                ("ogimage", models.BooleanField(default=False)),
                ("thumbnail", models.BooleanField(default=False)),
                (
                    "prodotto",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="immagini",
                        to="magazzino.prodotto",
                    ),
                ),
            ],
            options={
                "verbose_name_plural": "Prodotto Immagini",
            },
        ),
        migrations.CreateModel(
            name="ProdottoVarianteAttributo",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "attributo",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="magazzino.prodottoattributovalore",
                    ),
                ),
                (
                    "variante",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="attributi",
                        to="magazzino.prodottovariante",
                    ),
                ),
            ],
            options={
                "verbose_name_plural": "Prodotto Variante Attributi",
            },
        ),
    ]