module Api::V1
  class ArticleCollectionSerializer < BaseSerializer
    def call
      object.map do |article|
        ArticleSerializer.new(article).call
      end
    end
  end
end
