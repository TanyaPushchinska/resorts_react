module Api
  module V1
    class ReviewsController < ApplicationController
      protect_from_forgery with: :null_session
      before_action :find_resort, only: :destroy

      def create
        @review = Review.new(review_params)
        if @review.save
          render json: ReviewSerializer.new(@review).serialized_json
        else
          render json: { error: @review.errors.messages }, status: 422
        end
      end

      def destroy
        if @review.destroy
          head :no_content
        else
          render json: { error: @review.errors.messages }, status: 422
        end
      end

      private

      def find_review
        @review = Review.find(params[:id])
      end

      def review_params
        params.require(:review).permit(:title, :description, :score, :resort_id)
      end
    end
  end
end
