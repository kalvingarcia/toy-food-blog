from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from .models import *
from .serializers import *

# Create your views here.

@api_view(['GET'])
def recipe_list(request):
    if request.method == 'GET':
        data = Recipe.objects.all()
        serializer = RecipeSerializer(data, context = {'request': request}, many = True)
        return Response(serializer.data)
    # elif request.method == 'POST':
    #     serializer = RecipeSerializer(data = request.data)
    #     if serializer.is_valid():
    #         serializer.save()
    #         return Response(status = status.HTTP_201_CREATED)
    #     return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def filtered_list(request, filters):
    filters = filters.split('-')

    if request.method == 'GET':
        tags = []
        for filter in filters:
            tags.extend(list(Tags.objects.filter(name = filter)))

        recipes = {}
        for tag in tags:
            recipes[tag.recipe.pk] = RecipeSerializer(
                tag.recipe,
                context = {'request': request}
            ).data

        recipes = sorted(recipes.values(), key = lambda d: d['pk'])

        return Response(recipes)

@api_view(['GET'])
def newest_recipe(request):
    if request.method == 'GET':
        return Response(RecipeSerializer(
            Recipe.objects.latest('date'),
            context = {'request': request}
        ).data)

@api_view(['GET'])
def featured_recipes(request):
    if request.method == 'GET':
        tags = Tags.objects.filter(name = "featured")

        recipes = []
        for tag in tags:
            recipes.append(RecipeSerializer(
                tag.recipe,
                context = {'request': request}
            ).data)

        return Response(recipes)

@api_view(['GET'])
def recipe_details(request, pk):
    if request.method == 'GET':
        try:
            recipe = Recipe.objects.get(pk = pk)
        except Recipe.DoesNotExist:
            return Response(status = status.HTTP_404_NOT_FOUND)

        recipe = RecipeSerializer(recipe, context = {'request': request}).data

        tags = Tags.objects.filter(recipe_id = pk)
        tags = TagsSerializer(tags, context = {'request': request}, many = True).data

        recipe_ings = RecipeIngredients.objects.filter(recipe_id = pk)
        ingredients = []
        for recipe_ing in recipe_ings:
            ingredients.append({
                'measure': recipe_ing.measure,
                'unit': recipe_ing.unit,
                'name': recipe_ing.ingredient.name
            })

        return Response([recipe, ingredients, tags])

    # if request.method == 'PUT':
    #     serializer = RecipeSerializer(recipe, data = request.data, context = {'request': request})
    #     if serializer.is_valid():
    #         serializer.save()
    #         return Response(status = status.HTTP_204_NO_CONTENT)
    #     return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)
    # elif request.method == 'DELETE':
    #     recipe.delete()
    #     return Response(status = status.HTTP_204_NO_CONTENT)

@api_view(['GET'])
def collection_list(request):
    if request.method == 'GET':
        data = RecipeCollection.objects.all()
        serializer = RecipeCollectionSerializer(data, context = {'request': request}, many = True)
        return Response(serializer.data)
