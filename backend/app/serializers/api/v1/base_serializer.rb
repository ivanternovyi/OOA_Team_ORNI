module Api::V1
  class BaseSerializer
    def initialize(object)
      @object = object
    end

    private

    attr_reader :object
  end
end
