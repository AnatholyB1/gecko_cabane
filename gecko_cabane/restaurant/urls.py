from django.urls import path
from . import views

urlpatterns = [
    path('home/', views.home, name='home'),
    path('services/', views.services, name='services'),
    path('contact/', views.contact, name='contact'),
    path('about/', views.about, name='about'),
    path('shop/', views.shop, name='shop'),
]
