module Api
  module V1
    class ResortsController < ApplicationController
      before_action :find_resort, only: [:show, :edit, :update, :destroy]

      def index
        render json: Resort.all, each_serializer: ResortSerializer
      end

      def new
        @resort = Resort.new
      end

      def create
        @resort = Resort.new(resort_params)
        if @resort.save
          render json: ResortSerializer.new(@resort, options).serialized_json
          redirect_to root_path
        else
          render json: { error: @resort.errors.messages }, status: 422
        end
      end

      def show
        render json: ResortSerializer.new(@resort)
      end

      def edit; end

      def update
      end

      def destroy
        if @resort.destroy
          head :no_content
        else
          render json: { error: @resort.errors.messages }, status: 422
        end
      end

      private

      def find_resort
        @resort = Resort.find_by_slug(params[:slug])
      end

      def resort_params
        params.require(:resort).permit(:name, :image_url, :slug)
      end

      def options
        @options ||= { include: %i[reviews] }
      end
    end
  end
end
