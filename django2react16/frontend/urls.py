from django.urls import path

from django2react16.frontend import views

urlpatterns = [
    path('', views.index),
    path('api/<int:counter_pk>', views.increase_counter)
]
