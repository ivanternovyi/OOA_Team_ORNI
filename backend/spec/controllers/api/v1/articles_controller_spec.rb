require 'rails_helper'

RSpec.describe Api::V1::ArticlesController, type: :controller do
  describe 'GET #index' do
    it 'returns a success response' do
      get :index, params: {}

      expect(response).to be_successful
    end

    describe 'orders by' do
      context 'article name' do
        let!(:article_1) { FactoryBot.create(:article, name: 'aaa') }
        let!(:article_2) { FactoryBot.create(:article, name: 'bbb') }

        it 'ASC direction' do
          get :index, params: {
                        order_field: 'name',
                        order_direction: 'ASC'
                      }
  
          parsed_response = JSON.parse(response.body)
  
          expect(parsed_response[0]['name']).to eq(article_1.name)
          expect(parsed_response[1]['name']).to eq(article_2.name)
        end
  
        it 'DESC direction' do
          get :index, params: {
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
          get :index, params: {
                        order_field: 'article_type',
                        order_direction: 'ASC'
                      }
  
          parsed_response = JSON.parse(response.body)
  
          expect(parsed_response[0]['article_type']).to eq(article_1.article_type)
          expect(parsed_response[1]['article_type']).to eq(article_2.article_type)
        end
  
        it 'DESC direction' do
          get :index, params: {
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
          get :index, params: {
                        order_field: 'text',
                        order_direction: 'ASC'
                      }
  
          parsed_response = JSON.parse(response.body)
  
          expect(parsed_response[0]['text']).to eq(article_1.text)
          expect(parsed_response[1]['text']).to eq(article_2.text)
        end
  
        it 'DESC direction' do
          get :index, params: {
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
        get :index, params: {
          keyword: article_1.name
        }

        parsed_response = JSON.parse(response.body)

        expect(parsed_response[0]['name']).to eq(article_1.name)
      end

      it 'finds record by article text' do
        get :index, params: {
          keyword: article_2.text
        }

        parsed_response = JSON.parse(response.body)

        expect(parsed_response[0]['text']).to eq(article_2.text)
      end
    end
  end
end
