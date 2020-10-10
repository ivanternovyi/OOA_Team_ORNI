module Api::V1
  class ArticlesController < ActionController::API
    def index
      filtered_articles = ::ArticleQuery.new(params).call

      render json: ArticleCollectionSerializer.new(filtered_articles).call
    end
  end
end
