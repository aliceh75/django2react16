from django.contrib.auth.decorators import login_required
from django.http import JsonResponse
from django.shortcuts import render
from django.views.decorators.csrf import ensure_csrf_cookie
from django.views.decorators.http import require_http_methods

from django2react16.frontend.models import Counter


@login_required
@ensure_csrf_cookie
def index(request):
    counter = Counter(value=1)
    counter.save()
    return render(request, 'frontend/index.html', {
        'counter_pk': counter.pk,
        'counter_value': counter.value
    })


@require_http_methods(["POST"])
@login_required
def increase_counter(request, counter_pk):
    counter = Counter.objects.get(pk=counter_pk)
    counter.value = counter.value + 1
    counter.save()

    return JsonResponse({'value': counter.value})
