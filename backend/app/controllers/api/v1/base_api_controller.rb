module Api::V1
  class BaseApiController < ActionController::API
    include ExceptionHandler
  end
end
