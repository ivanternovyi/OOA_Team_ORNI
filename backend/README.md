# README

# API written in Ruby to manage articles.

## Endpoints
- `GET /api/v1/articles?keyword=SOME_KEYWORD` to search by keyword(part of `name` or `text`)
- `GET /api/v1/articles?order_field=FIELD&order_direction=DIRECTION` to order by `name`, `text`, `article_type`, `updated_at` or `created_at` in `ASC` or `DESC` direction,
- `GET /api/v1/articles/:id` to get article
- `PUT /api/v1/articles/:id` to update article
- `POST /api/v1/articles` to create article
- `DELETE /api/v1/articles/:id` destroy article

## Project setup
Rails version = 6.0.3.3; 
Ruby version = 2.6.5; 
PostgreSQL >= 9.5;
- Check whether you have installed ruby, rails, postgresql
- run `bundle install`
- run `rails db:create` to create database
- run `rails db:migrate` to run migrations
- run `rails db:seed` to run seeds
- run `rails server -p 3000` to run

Now server should run on `localhost:3000`
