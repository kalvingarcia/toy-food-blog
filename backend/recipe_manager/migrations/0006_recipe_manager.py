from django.db import migrations

def create_data(apps, schema_editor):
    Recipe = apps.get_model('recipe_manager', 'Recipe')

    r = Recipe.objects.get(pk = 4)
    r.source = "sofrito.jpg"
    r.save()


class Migration(migrations.Migration):

    dependencies = [
        ('recipe_manager', '0005_recipe_manager'),
    ]

    operations = [
        migrations.RunPython(create_data)
    ]
