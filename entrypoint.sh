#!/bin/sh

if [ "$DATABASE" = "postgres" ]
then
    echo "Waiting for postgres..."

    while ! nc -z $SQL_HOST $SQL_PORT; do
      sleep 0.1
    done

    echo "PostgreSQL started"
fi

cd /home/webapp

/root/.local/bin/poetry run python manage.py collectstatic --no-input --clear
/root/.local/bin/poetry run python manage.py migrate
/root/.local/bin/poetry run gunicorn -w 2 -b :8000 webapp.wsgi:application