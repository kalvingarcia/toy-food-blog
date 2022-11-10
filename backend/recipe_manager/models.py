from django.db import models as dj
from django_mysql import models as mysql

# Create your models here.
class Recipe(mysql.Model):
    source = dj.CharField(max_length = 70)
    title = mysql.SizedTextField(1)
    date = dj.DateField()
    body = mysql.SizedTextField(2)
    steps = mysql.SizedTextField(2)

class Ingredients(mysql.Model):
    name = dj.CharField(max_length = 50)

class RecipeCollection(mysql.Model):
    name = dj.CharField(max_length = 50)
    desc = mysql.SizedTextField(1)

class RecipeIngredients(mysql.Model):
    recipe = dj.ForeignKey(Recipe, on_delete = dj.CASCADE)
    ingredient = dj.ForeignKey(Ingredients, on_delete = dj.CASCADE)
    measure = dj.FloatField()
    unit = dj.CharField(max_length = 20)

class Tags(mysql.Model):
    recipe = dj.ForeignKey(Recipe, on_delete = dj.CASCADE)
    recipe_collection = dj.ForeignKey(RecipeCollection, on_delete = dj.CASCADE)
    name = dj.CharField(max_length = 50)
