from django.db import models


class Categoria(models.Model):
    nome = models.CharField(max_length=200)

    url = models.SlugField(unique=True)

    # Decide se mostrare la categoria sul sito o no
    sito = models.BooleanField(default=True, verbose_name="Mostra sul sito")

    descrizione_breve = models.TextField(max_length=500, blank=False)
    descrizione = models.TextField(blank=True, default=None)

    def __str__(self):
        return self.nome

    class Meta:
        verbose_name = "Categoria"
        verbose_name_plural = "Categorie"