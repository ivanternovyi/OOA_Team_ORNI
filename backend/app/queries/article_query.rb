class ArticleQuery
  def initialize(params, relation=Article.all)
    @params = params
    @relation = relation
  end

  def call
    @relation
      .by_keyword(params[:keyword])
      .order(order_query_str)
  end

  private

  attr_reader :params

  def order_query_str
    return if params[:order_field].blank?

    "#{params[:order_field]} #{params[:order_direction]}"
  end
end
