from django.db import migrations

def create_data(apps, schema_editor):
    Tags = apps.get_model('recipe_manager', 'Tags')
    Recipe = apps.get_model('recipe_manager', 'Recipe')
    RecipeCollection = apps.get_model('recipe_manager', 'RecipeCollection')

    Tags(
        recipe = Recipe.objects.get(pk = 1),
        recipe_collection = RecipeCollection.objects.get(pk = 1),
        name = "featured"
    ).save()
    Tags(
        recipe = Recipe.objects.get(pk = 2),
        recipe_collection = RecipeCollection.objects.get(pk = 1),
        name = "featured"
    ).save()
    Tags(
        recipe = Recipe.objects.get(pk = 5),
        recipe_collection = RecipeCollection.objects.get(pk = 1),
        name = "featured"
    ).save()
    Tags(
        recipe = Recipe.objects.get(pk = 4),
        recipe_collection = RecipeCollection.objects.get(pk = 3),
        name = "hispanic"
    ).save()
    Tags(
        recipe = Recipe.objects.get(pk = 5),
        recipe_collection = RecipeCollection.objects.get(pk = 3),
        name = "hispanic"
    ).save()
    Tags(
        recipe = Recipe.objects.get(pk = 3),
        recipe_collection = RecipeCollection.objects.get(pk = 2),
        name = "fusion"
    ).save()

class Migration(migrations.Migration):

    dependencies = [
        ('recipe_manager', '0003_recipe_manager'),
    ]

    operations = [
        migrations.RunPython(create_data)
    ]
