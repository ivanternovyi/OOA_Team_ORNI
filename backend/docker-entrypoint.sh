#!/usr/bin/env sh

RETRIES=5
export PGPASSWORD=${BACKEND_DATABASE_PASSWORD}
until psql -h $BACKEND_DATABASE_HOST -U $BACKEND_DATABASE_USERNAME -d $BACKEND_DATABASE_NAME -c "select 1" > /dev/null 2>&1 || [ $RETRIES -eq 0 ]; do
  echo "Waiting for postgres server, $((RETRIES-=1)) remaining attempts..."
  sleep 1
done
unset PGPASSWORD

$APP_PATH/bin/rake db:migrate

exec $APP_PATH/bin/rails s -p 3000 -b '0.0.0.0'