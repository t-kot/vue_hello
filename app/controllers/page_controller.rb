class PageController < ApplicationController
  layout 'with_sidebar'

  def page1
  end

  def page2
    render layout: 'main'
  end
end