# README

# API written in Ruby to manage articles.

## Functionality
- search by keyword,
- order by name ASC or DESC,
- order by text ASC or DESC,
- order article_type ASC or DESC,
- order by updated_at ASC or DESC,
- order by created_at ASC or DESC
- get article
- update article
- create article
- destroy article

## Project setup
Rails version = 6.0.3.3
Ruby version = 2.6.5
PostgreSQL >= 9.5
- Check whether you have installed ruby, rails, postgresql
- run `bundle install`
- run `rails db:create` to create database
- run `rails db:migrate` to run migrations
- run `rails db:seed` to run seeds
- run `rails server -p 3000` to run

Now server should run on localhost:3000
