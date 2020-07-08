# 故事汇

```
python -m venv .venv
source .venv/bin/activate
pip install django
django-admin startproject StoryHub .

python manage.py migrate
python manage.py createsuperuser

python manage.py runserver
```

Docker

```
docker run --name StoryHub -p 8000:8000 -d lbb4511/storyhub
```
