class DashboardController < ApplicationController
  # before_action :authenticate_user!
  # 2ZpUsTBkwxgR86sfRNxUJKN2rgFdQVx33lTeuRZx
  
  def invitaion_card
  end

  def create_invitation
    @invitation = Invitation.new(invitation_params)

    respond_to do |format|
      if @invitation.save
        format.html { redirect_to dashboard_download_card_path, notice: 'Invitation was successfully created.' }
      else
        format.html { render :invitaion_card }
        format.json { render json: @invitation.errors, status: :unprocessable_entity }
      end
    end
  end

  def download_card
    file = params[:commit]
    if file.present?
      send_file("#{Rails.root}/app/javascript/images/#{file}.jpeg",filename: "#{file}.jpeg", type: "application/image")
    end
  end
  

  def index
  end
  
  def image_grid
  end
  
  def day_counter
  end
  
  def contact
  end
  
  def photograpy
  end

  def contact_me
    @contact_me = params
    
    ContactMailer.contact_email("veeraryan92@gmail.com").deliver_now
    redirect_to root_path
  end

  def invitation_params
    params.permit(:name, :place, :phone)
  end
  
end
