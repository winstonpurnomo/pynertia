from django.db import models


# Create your models here.
class Member(models.Model):
    class Meta:
        permissions = [
            ("view_issues", "Can view issues"),
            ("view_report", "Can view report"),
        ]


class Admin(models.Model):
    class Meta:
        permissions = [
            ("view_issues", "Can view issues"),
            ("view_report", "Can view report"),
            ("add_issue", "Can add issue"),
            ("change_issue", "Can change issue"),
            ("delete_issue", "Can delete issue"),
        ]


class Bot(models.Model):
    class Meta:
        permissions = [
            ("view_issues", "Can view issues"),
            ("view_report", "Can view report"),
            ("add_issue", "Can add issue"),
            ("change_issue", "Can change issue"),
        ]
