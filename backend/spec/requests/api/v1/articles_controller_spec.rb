require 'rails_helper'

RSpec.describe Api::V1::ArticlesController, type: :request do
  describe 'GET /api/v1/articles' do
    it 'returns a success response' do
      get '/api/v1/articles', params: {}

      expect(response).to be_successful
    end


    describe 'orders by' do
      context 'article name' do
        let!(:article_1) { FactoryBot.create(:article, name: 'aaa') }
        let!(:article_2) { FactoryBot.create(:article, name: 'bbb') }

        it 'ASC direction' do
          get '/api/v1/articles', params: {
                                    order_field: 'name',
                                    order_direction: 'ASC'
                                  }
  
          parsed_response = JSON.parse(response.body)
  
          expect(parsed_response[0]['name']).to eq(article_1.name)
          expect(parsed_response[1]['name']).to eq(article_2.name)
        end
  
        it 'DESC direction' do
          get '/api/v1/articles', params: {
            order_field: 'name',
            order_direction: 'DESC'
          }
  
          parsed_response = JSON.parse(response.body)
  
          expect(parsed_response[0]['name']).to eq(article_2.name)
          expect(parsed_response[1]['name']).to eq(article_1.name)
        end
      end

      context 'article article_type' do
        let!(:article_1) { FactoryBot.create(:article, article_type: Article::VALID_ARTICLE_TYPES.sort.first) }
        let!(:article_2) { FactoryBot.create(:article, article_type: Article::VALID_ARTICLE_TYPES.sort.last) }

        it 'ASC direction' do
          get '/api/v1/articles', params: {
                                    order_field: 'article_type',
                                    order_direction: 'ASC'
                                  }
  
          parsed_response = JSON.parse(response.body)
  
          expect(parsed_response[0]['article_type']).to eq(article_1.article_type)
          expect(parsed_response[1]['article_type']).to eq(article_2.article_type)
        end
  
        it 'DESC direction' do
          get '/api/v1/articles', params: {
            order_field: 'article_type',
            order_direction: 'DESC'
          }
  
          parsed_response = JSON.parse(response.body)
  
          expect(parsed_response[0]['article_type']).to eq(article_2.article_type)
          expect(parsed_response[1]['article_type']).to eq(article_1.article_type)
        end
      end

      context 'article text' do
        let!(:article_1) { FactoryBot.create(:article, text: 'aaaa') }
        let!(:article_2) { FactoryBot.create(:article, text: 'bbbb') }

        it 'ASC direction' do
          get '/api/v1/articles', params: {
                                    order_field: 'text',
                                    order_direction: 'ASC'
                                  }
  
          parsed_response = JSON.parse(response.body)
  
          expect(parsed_response[0]['text']).to eq(article_1.text)
          expect(parsed_response[1]['text']).to eq(article_2.text)
        end
  
        it 'DESC direction' do
          get '/api/v1/articles', params: {
                                    order_field: 'text',
                                    order_direction: 'DESC'
                                  }
  
          parsed_response = JSON.parse(response.body)
  
          expect(parsed_response[0]['text']).to eq(article_2.text)
          expect(parsed_response[1]['text']).to eq(article_1.text)
        end
      end
    end

    describe 'search by keyword functionality' do
      let!(:article_1) { FactoryBot.create(:article, name: 'aaa', text: "ccc") }
      let!(:article_2) { FactoryBot.create(:article, name: 'bbb', text: "ddd") }

      it 'finds record by article name' do
        get '/api/v1/articles', params: {
                                  keyword: article_1.name
                                }

        parsed_response = JSON.parse(response.body)

        expect(parsed_response[0]['name']).to eq(article_1.name)
      end

      it 'finds record by article text' do
        get '/api/v1/articles', params: {
                                  keyword: article_2.text
                                }

        parsed_response = JSON.parse(response.body)

        expect(parsed_response[0]['text']).to eq(article_2.text)
      end
    end
  end

  describe 'GET /api/v1/articles/:id' do
    let!(:articles) { create_list(:article, 10) }
    let(:article_id) { articles.first.id }

    before { get "/api/v1/articles/#{article_id}" }

    context 'when the record exists' do
      it 'returns the article' do
        expect(JSON.parse(response.body)).not_to be_empty
        expect(JSON.parse(response.body)['id']).to eq(article_id)
      end

      it 'returns status code 200' do
        expect(response).to have_http_status(200)
      end
    end

    context 'when the record does not exist' do
      let(:article_id) { 100 }

      it 'returns status code 404' do
        expect(response).to have_http_status(404)
      end

      it 'returns a not found message' do
        expect(response.body).to match(/Couldn't find Article/)
      end
    end
  end

  describe 'POST /api/v1/article' do
    let!(:articles) { create_list(:article, 10) }
    let(:article_id) { articles.first.id }
    let(:valid_attributes) do
      {
        name: 'Name',
        text: 'Text',
        article_type: Article::VALID_ARTICLE_TYPES.sample
      }
    end

    context 'when the request is valid' do
      before { post '/api/v1/articles', params: valid_attributes }

      it 'creates an article' do
        expect(JSON.parse(response.body)['name']).to eq('Name')
      end

      it 'returns status code 201' do
        expect(response).to have_http_status(201)
      end
    end

    context 'when the request is invalid' do
      before { post '/api/v1/articles', params: { name: 'Name' } }

      it 'returns status code 422' do
        expect(response).to have_http_status(422)
      end

      it 'returns a validation failure message' do
        expect(response.body)
          .to match(/Validation failed: Text can't be blank/)
      end
    end
  end

  describe 'PUT /api/v1/articles/:id' do
    let!(:articles) { create_list(:article, 10) }
    let(:article_id) { articles.first.id }
    let(:valid_attributes) { { name: 'Testing' } }

    context 'when the record exists' do
      before { put "/api/v1/articles/#{article_id}", params: valid_attributes }

      it 'updates the record' do
        expect(response.body).to be_empty
      end

      it 'returns status code 204' do
        expect(response).to have_http_status(204)
      end
    end
  end

  describe 'DELETE /api/v1/articles/:id' do
    let!(:articles) { create_list(:article, 10) }
    let(:article_id) { articles.first.id }
    before { delete "/api/v1/articles/#{article_id}" }

    it 'returns status code 204' do
      expect(response).to have_http_status(204)
    end
  end
end
