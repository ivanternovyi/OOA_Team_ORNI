FROM ruby:2.6.5-alpine

RUN apk --update add --no-cache \
    build-base \
    postgresql-client \
    postgresql-dev \
    tzdata

ENV APP_PATH /app
WORKDIR $APP_PATH
COPY Gemfile $APP_PATH
COPY Gemfile.lock $APP_PATH
RUN bundle install --jobs `expr $(cat /proc/cpuinfo | grep -c "cpu cores") - 1` --retry 3
COPY . $APP_PATH
CMD $APP_PATH/docker-entrypoint.sh
EXPOSE 3000
