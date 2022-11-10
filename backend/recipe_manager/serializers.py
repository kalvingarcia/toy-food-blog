from rest_framework import serializers
from .models import *

class RecipeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recipe
        fields = (
            'pk',
            'source',
            'title',
            'date',
            'body',
            'steps'
        )

class IngredientsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ingredients
        fields = (
            'pk',
            'name'
        )

class RecipeCollectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = RecipeCollection
        fields = (
            'pk',
            'name',
            'desc'
        )

class RecipeIngredientsSerializer(serializers.ModelSerializer):
    class Meta:
        model = RecipeIngredients
        fields = (
            'recipe',
            'ingredients',
            'measure',
            'unit'
        )

class TagsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tags
        fields = (
            'recipe',
            'recipe_collection',
            'name'
        )
