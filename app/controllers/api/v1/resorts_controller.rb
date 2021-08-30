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
          render(json: { message: '', status: :created } )
        else
          render(json: { message: '', status: 401 } )
        end
      end

      def show
        render json: ResortSerializer.new(@resort)
      end

      def edit; end

      def update
      end

      def destroy
        @resort.delete
        redirect_to api_v1_resorts_path
      end

      private

      def find_resort
        @resort = Resort.find_by_slug(params[:slug])
      end

      def resort_params
        params.require(:resort).permit(:name, :image_url, :slug)
      end
    end
  end
end
