from django.urls import path

from django2react16.frontend import views

urlpatterns = [
    path('', views.index),
]
