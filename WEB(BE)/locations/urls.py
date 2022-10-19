from django.urls import path
from rest_framework import routers
from locations import views

router = routers.SimpleRouter()
router.register('', views.LocationViewSet, basename='location') 
router.register(r'(?P<location_id>[^/.]+)/reviews', views.ReviewViewSet, basename='review')

urlpatterns = [
    path('<int:location_id>/reviews/<int:review_id>/like/', views.like_review, name='like-review'),
]
urlpatterns += router.urls