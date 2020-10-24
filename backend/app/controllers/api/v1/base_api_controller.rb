module Api::V1
  class BaseApiController < ActionController::API
    include ActionController::HttpAuthentication::Token::ControllerMethods
    include ExceptionHandler

    # Authenticate all requests
    before_action :authenticate

    private

    def current_user
      @current_user
    end
    
    def authenticate
      authenticate_token || render_unauthorized
    end

    def authenticate_token
      authenticate_with_http_token do |token, _options|
        @current_user = User.find_by(token: token)
      end
    end

    def render_unauthorized
      render json: {
        error_message: 'Bad credentials'
      }, status: :unauthorized
    end
  end
end
