class UsersController < ApplicationController

    skip_before_action :authenticate_user, only: [:create]

    def index	 
        render json: User.all	    
    end	     
    
    # GET '/me'
    def show
        if current_user
            render json: current_user, status: :ok
        else
         render json: { errors: "No active session" }, status: :unauthorized
        end
    end

    def update 
        @user.update!(user_params)
        render json: @user, status: :accepted
    end
    
    # POST '/signup'
    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end
    
    private
    
    def user_params
        params.permit(:username, :password, :password_confirmation, :location)
    end

    def find_user
        @user= User.find_by(id:params[:id])
    end

    def user_params
        params.permit(:name, :city, :profession, :background)
    end

end
