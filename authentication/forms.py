from django import forms


class SignInForm(forms.Form):
    email = forms.CharField(label="Email", max_length=255, min_length=8)
    password = forms.CharField(label="Password", max_length=255)


class SignUpForm(forms.Form):
    name = forms.CharField(label="Name", max_length=255, min_length=2)
    email = forms.CharField(label="Email", max_length=255, min_length=8)
    password = forms.CharField(label="Password", max_length=255)
