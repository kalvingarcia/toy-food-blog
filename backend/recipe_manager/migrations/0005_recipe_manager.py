from django.db import migrations

def create_data(apps, schema_editor):
    Recipe = apps.get_model('recipe_manager', 'Recipe')
    RecipeIngredients = apps.get_model('recipe_manager', 'RecipeIngredients')
    Ingredients = apps.get_model('recipe_manager', 'Ingredients')

    i1 = Ingredients(name = "salt")
    i1.save()
    i2 = Ingredients(name = "kidney beans")
    i2.save()
    i3 = Ingredients(name = "tomato sauce")
    i3.save()
    i4 = Ingredients(name = "cubito de pollo")
    i4.save()
    i5 = Ingredients(name = "sofrito")
    i5.save()
    i6 = Ingredients(name = "sazon")
    i6.save()
    i7 = Ingredients(name = "rice")
    i7.save()
    i8 = Ingredients(name = "canola oil")
    i8.save()
    i9 = Ingredients(name = "water")
    i9.save()
    i10 = Ingredients(name = "onion")
    i10.save()
    i11 = Ingredients(name = "cilantro")
    i11.save()
    i12 = Ingredients(name = "green bell pepper")
    i12.save()
    i13 = Ingredients(name = "celery")
    i13.save()
    i14 = Ingredients(name = "pork bones")
    i14.save()
    i15 = Ingredients(name = "bok choy cabbage")
    i15.save()
    i16 = Ingredients(name = "radish")
    i16.save()
    i17 = Ingredients(name = "dried guajillo pepper")
    i17.save()
    i18 = Ingredients(name =  "pork meat")
    i18.save()
    i19 = Ingredients(name = "hominy")
    i19.save()
    i20 = Ingredients(name = "oregano")
    i20.save()
    i21 = Ingredients(name = "garlic")
    i21.save()
    i22 = Ingredients(name = "aji verde")
    i22.save()
    i23 = Ingredients(name = "lettuce")
    i23.save()
    i24 = Ingredients(name = "ground beef")
    i24.save()
    i25 = Ingredients(name = "american cheese")
    i25.save()
    i26 = Ingredients(name = "hamburger buns")
    i26.save()
    i27 = Ingredients(name = "eggs")
    i27.save()
    i28 = Ingredients(name = "cream cheese")
    i28.save()
    i29 = Ingredients(name = "sugar")
    i29.save()
    i30 = Ingredients(name = "graham crackers")
    i30.save()

    r1 = Recipe(
        source = "habichuelas.jpg",
        title = "Habichuelas Guisadas",
        date = "2022-10-04",
        body = "This is the body text",
        steps = "This is step 1; This is step 2"
    )
    r1.save()
    r2 = Recipe.objects.get(pk = 1)
    r3 = Recipe.objects.get(pk = 2)
    r4 = Recipe.objects.get(pk = 3)
    r5 = Recipe.objects.get(pk = 4)
    r6 = Recipe.objects.get(pk = 5)

    RecipeIngredients(
        recipe = r1,
        ingredient = i1,
        measure = 0,
        unit = "cups"
    ).save()
    RecipeIngredients(
        recipe = r1,
        ingredient = i2,
        measure = 0,
        unit = "cups"
    ).save()
    RecipeIngredients(
        recipe = r1,
        ingredient = i3,
        measure = 0,
        unit = "cups"
    ).save()
    RecipeIngredients(
        recipe = r1,
        ingredient = i4,
        measure = 0,
        unit = "cups"
    ).save()
    RecipeIngredients(
        recipe = r1,
        ingredient = i5,
        measure = 0,
        unit = "cups"
    ).save()
    RecipeIngredients(
        recipe = r1,
        ingredient = i6,
        measure = 0,
        unit = "cups"
    ).save()
    RecipeIngredients(
        recipe = r1,
        ingredient = i9,
        measure = 0,
        unit = "cups"
    ).save()

    RecipeIngredients(
        recipe = r6,
        ingredient = i1,
        measure = 0,
        unit = "cups"
    ).save()
    RecipeIngredients(
        recipe = r6,
        ingredient = i7,
        measure = 0,
        unit = "cups"
    ).save()
    RecipeIngredients(
        recipe = r6,
        ingredient = i8,
        measure = 0,
        unit = "cups"
    ).save()
    RecipeIngredients(
        recipe = r6,
        ingredient = i3,
        measure = 0,
        unit = "cups"
    ).save()
    RecipeIngredients(
        recipe = r6,
        ingredient = i10,
        measure = 0,
        unit = "cups"
    ).save()
    RecipeIngredients(
        recipe = r6,
        ingredient = i9,
        measure = 0,
        unit = "cups"
    ).save()

    RecipeIngredients(
        recipe = r5,
        ingredient = i10,
        measure = 0,
        unit = "cups"
    ).save()
    RecipeIngredients(
        recipe = r5,
        ingredient = i12,
        measure = 0,
        unit = "cups"
    ).save()
    RecipeIngredients(
        recipe = r5,
        ingredient = i13,
        measure = 0,
        unit = "cups"
    ).save()
    RecipeIngredients(
        recipe = r5,
        ingredient = i22,
        measure = 0,
        unit = "cups"
    ).save()
    RecipeIngredients(
        recipe = r5,
        ingredient = i11,
        measure = 0,
        unit = "cups"
    ).save()

    RecipeIngredients(
        recipe = r5,
        ingredient = i14,
        measure = 0,
        unit = "cups"
    ).save()
    RecipeIngredients(
        recipe = r4,
        ingredient = i15,
        measure = 0,
        unit = "cups"
    ).save()
    RecipeIngredients(
        recipe = r4,
        ingredient = i13,
        measure = 0,
        unit = "cups"
    ).save()
    RecipeIngredients(
        recipe = r4,
        ingredient = i10,
        measure = 0,
        unit = "cups"
    ).save()
    RecipeIngredients(
        recipe = r4,
        ingredient = i17,
        measure = 0,
        unit = "cups"
    ).save()
    RecipeIngredients(
        recipe = r4,
        ingredient = i18,
        measure = 0,
        unit = "cups"
    ).save()
    RecipeIngredients(
        recipe = r4,
        ingredient = i19,
        measure = 0,
        unit = "cups"
    ).save()
    RecipeIngredients(
        recipe = r4,
        ingredient = i20,
        measure = 0,
        unit = "cups"
    ).save()
    RecipeIngredients(
        recipe = r4,
        ingredient = i1,
        measure = 0,
        unit = "cups"
    ).save()
    RecipeIngredients(
        recipe = r4,
        ingredient = i21,
        measure = 0,
        unit = "cups"
    ).save()
    RecipeIngredients(
        recipe = r2,
        ingredient = i23,
        measure = 0,
        unit = "cups"
    ).save()
    RecipeIngredients(
        recipe = r2,
        ingredient = i24,
        measure = 0,
        unit = "cups"
    ).save()
    RecipeIngredients(
        recipe = r2,
        ingredient = i25,
        measure = 0,
        unit = "cups"
    ).save()
    RecipeIngredients(
        recipe = r2,
        ingredient = i26,
        measure = 0,
        unit = "cups"
    ).save()
    RecipeIngredients(
        recipe = r3,
        ingredient = i27,
        measure = 0,
        unit = "cups"
    ).save()
    RecipeIngredients(
        recipe = r3,
        ingredient = i28,
        measure = 0,
        unit = "cups"
    ).save()
    RecipeIngredients(
        recipe = r3,
        ingredient = i29,
        measure = 0,
        unit = "cups"
    ).save()
    RecipeIngredients(
        recipe = r3,
        ingredient = i30,
        measure = 0,
        unit = "cups"
    ).save()


class Migration(migrations.Migration):

    dependencies = [
        ('recipe_manager', '0004_recipe_manager'),
    ]

    operations = [
        migrations.RunPython(create_data)
    ]
