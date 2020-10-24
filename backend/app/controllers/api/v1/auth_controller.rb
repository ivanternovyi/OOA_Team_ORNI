module Api::V1
  class AuthController < BaseApiController
    skip_before_action :authenticate

    # POST /api/v1/login
    def login
      user = User.find_by(name: params[:name])

      if user && user.authenticate(params[:password])
        render json: {
          name: user.name,
          token: user.token
        }, status: :ok
      else
        not_found
      end
    end

    # POST /api/v1/signup
    def signup
      user = User.create(name: params[:name], password: params[:password])

      if user && user.errors.blank?
        render json: {
          name: user.name,
          token: user.token
        }, status: :ok
      else
        render json: {
          error_message: user.errors.messages
        }, status: :bad_request
      end
    end

    private

    def auth_params
      params.permit(
        :name, :password
      )
    end
  end
end
