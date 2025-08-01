from inertia import inertia


@inertia("index")
def index(request):
    return {}


@inertia("dashboard")
def dashboard(request):
    return {}
