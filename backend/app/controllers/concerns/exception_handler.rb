module ExceptionHandler
  extend ActiveSupport::Concern

  included do
    rescue_from ActiveRecord::RecordNotFound, with: :not_found

    rescue_from ActiveRecord::RecordInvalid do |e|
      render json: { message: e.message }, status: :unprocessable_entity
    end

    rescue_from ActionController::ParameterMissing, with: :bad_request

    def not_found
      render json: {
        error_message: 'Record not found!'
      }, status: :not_found
    end

    def bad_request
      render json: {
        error_message: 'Something wrong'
      }, status: :bad_request
    end
  end
end
