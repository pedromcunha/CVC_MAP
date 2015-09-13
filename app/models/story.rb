class Story < ActiveRecord::Base
  has_attached_file :photo, styles: {large: "600x600>", medium: "300x300>", thumb: "150x150>"}
  validates_attachment_content_type :photo, :content_type => { 
                                    :content_type => "image/jpg",
                                    :content_type => "image/jpeg", 
                                    :content_type => "image/png"
                                }
  #https://fast-dawn-1609.herokuapp.com


  

  
end
