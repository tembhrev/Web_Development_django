from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def help(request):
    my_dict = {'help_me': "I need help, I am in trouble!"}
    return render(request, 'second_app/help.html', context=my_dict)
