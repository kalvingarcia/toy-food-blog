"""server URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path,  re_path
from recipe_manager import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/recipe/', views.recipe_list),
    path('api/recipe/filter/<str:filters>', views.filtered_list),
    path('api/recipe/newest/', views.newest_recipe),
    path('api/recipe/featured/', views.featured_recipes),
    path('api/recipe-id/<int:pk>', views.recipe_details),
    path('api/collections/', views.collection_list)
]
