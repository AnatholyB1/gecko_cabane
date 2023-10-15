

# Create your views here.
from django.shortcuts import render

def home(request):
    # Votre logique de vue va ici
    return render(request, 'restaurant/home.html')
def contact(request):
    # Votre logique de vue va ici
    return render(request, 'restaurant/contact.html')
def services(request):
    # Votre logique de vue va ici
    return render(request, 'restaurant/services.html')
def about(request):
    # Votre logique de vue va ici
    return render(request, 'restaurant/about.html')
def shop(request):
    # Votre logique de vue va ici
    return render(request, 'restaurant/shop.html')