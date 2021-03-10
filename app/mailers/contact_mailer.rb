class ContactMailer < ApplicationMailer
    default from: "invite@contact.com"

    def contact_email(email)
        # @user = data.user
        mail(to: email, subject: 'Contact Email')
    end
end
