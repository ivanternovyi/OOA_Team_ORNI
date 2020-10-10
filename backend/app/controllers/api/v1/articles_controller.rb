module Api::V1
  class ArticlesController < BaseApiController
    before_action :find_article, only: [:show, :update, :destroy]

    # GET /api/v1/articles
    def index
      filtered_articles = ::ArticleQuery.new(params).call

      render json: ArticleCollectionSerializer.new(filtered_articles).call, status: :ok
    end

    # GET /api/v1/articles/:id
    def show
      render json: ArticleSerializer.new(@article).call, status: :ok
    end

    # PUT /api/v1/articles/:id
    def update
      @article.update(article_params)

      head :no_content
    end

    # POST /api/v1/articles
    def create
      @article = Article.create!(article_params)

      render json: ArticleSerializer.new(@article).call, status: :created
    end

    # DELETE /api/v1/articles/:id
    def destroy
      @article.destroy

      head :no_content
    end

    private

    def find_article
      @article = Article.find(params[:id])
    end

    def article_params
      params.permit(
        :name, :text, :article_type
      )
    end
  end
end
