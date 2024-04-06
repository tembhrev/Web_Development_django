from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.PostListView.as_view(), name='pst_list'),
    path('about/', views.AboutView.as_view(), name='about'),
    path('post/<int:pk>', views.PostDetailView.as_view(), name='post_detail'),
    path('post/new/', views.CreatePostView.as_view, name='post_new'),
    path('post/<int:pk>/edit/', views.PostUpdateView.as_view(), name='post_edit'),
    path(r'post/<int:pk>/remove/', views.PostDeleteView.as_view(), name='post_remove'),
    path('draft/', views.DraftListView.as_view(), name='poat_draft_list'),
]