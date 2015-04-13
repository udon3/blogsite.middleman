###
# Compass
###

# Change Compass configuration
# compass_config do |config|
#   config.output_style = :expanded
#   config.sass_options = {:debug_info => true}
# end

###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
# page "/path/to/file.html", :layout => false
#
# With alternative layout
#  page "/index.html", :layout => :otherlayout
#
# A path which all have the same layout
# with_layout :admin do
#   page "/admin/*"
# end

# Proxy pages (http://middlemanapp.com/basics/dynamic-pages/)
# proxy "/this-page-has-no-template.html", "/template-file.html", :locals => {
#  :which_fake_page => "Rendering a fake page with a local variable" }

###
# Helpers
###

# Automatic image dimensions on image_tag helper
# activate :automatic_image_sizes

# Reload the browser automatically whenever files change
configure :development do
  activate :livereload, :host => "127.0.0.1"

end

# Methods defined in the helpers block are available in templates
# helpers do
#   def some_helper
#     "Helping"
#   end
# end
helpers do
  def this_page(page)
    @page_id == page
  end
end

# set directories for helpers (stylesheet_link_tag, javascript_include_tag, image_tag)
set :css_dir, 'assets/css'

set :js_dir, 'assets/js'

set :images_dir, 'assets/images'

set :markdown, auto_ids: false

# set master template for all pages (can be overridden in directives below - c.f. blog)
page '*', :layout => '_templates/layouts/master'

#enable blogging with middleman blog ext.
activate :blog do |blog|
  # set options on blog
  blog.permalink = '/subdir/blog/{year}/{category}/{title}.html'    # this is where the file gets built to  (note: can't get the path to be absolute, so added a preceding '/' to article.path)
  blog.sources = '/subdir/blog/{year}/{title}.html'      # if the md blog file exists here, blog.article will find it
  #blog.prefix = '/subdir/blog'     # defaults to root but can be overridden by setting this to a folder name - BUT this messes with this code in the blognav partial: blog.articles.each
  blog.summary_separator = /<!--READ MORE-->/
  page 'subdir/blog/*', :layout => '_templates/layouts/post'

  #tags
  blog.taglink = '/subdir/blog/tags/:tag.html'
  blog.tag_template = 'tags.html'

  # build category pages as well - not quite there, shelved for now
  blog.custom_collections = {
   category: {
     link: '/subdir/blog/categories/{category}.html',
     template: '/category.html'
   }
  }
  

end

#enable navtree extension (https://github.com/bryanbraun/middleman-navtree)
activate :navtree 


# Build-specific configuration
configure :build do
  # For example, change the Compass output style for deployment
  activate :minify_css

  # Minify Javascript on build
  activate :minify_javascript

  # Enable cache buster
  #activate :asset_hash     #(this will add a GUID type code to asset file names - tricky if a build-independent page, e.g. search results, needs to access them.)

  

  

  # Use relative URLs
  #  activate :relative_assets

  # Or use a different image path
  # set :http_prefix, "/Content/images/"

  
end
