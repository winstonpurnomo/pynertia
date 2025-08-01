from django.shortcuts import redirect
from inertia import render

from .forms import SignInForm, SignUpForm


def signin(request):
    if request.method == "POST":
        form = SignInForm(request.POST)
        if form.is_valid():
            return redirect(
                "dashboard",
            )
        raise ValueError("Invalid form submission")
    else:
        return render(request, "signin", {})


def signup(request):
    if request.method == "POST":
        form = SignUpForm(request.POST)
        if form.is_valid():
            return redirect("dashboard")
        raise ValueError("Invalid form submission")
    else:
        return render(request, "signup", {})
