from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def index(request):
    my_dictionary = {'help_text':"Help Page"}
    return render(request, 'AppTwo/index.html', context = my_dictionary)