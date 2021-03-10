module ApplicationHelper
  def active_page?(path)
  	current_page?(path) || request.path.ends_with?(path)
  end
end
