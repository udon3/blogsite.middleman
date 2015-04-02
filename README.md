# blogsite.middleman project

A crack at webdev with Middleman and HAML

A skeleton site to use as base for a Middleman blog site with a simple search and a contact form.

## TODOs:

- Use the navtree extension and add bread crumbs or dynamic sitemap?
- this readme needs updating for general consumption

## PRODUCTION NOTES 

Middleman (3.3.7)

- Compass
- JS/jQuery 
- Templates - HAML
- Content - Markdown
- CSS structure - SMACSS (BUT not strictly adhered!) 

- html5 shiv added for lt IE9
- jquery validate plugin for client-side form validation

- fontsquirrel for fonts (avoiding google fonts due to IE7/8 issues)
	If serving on IIS, check MIME types (SVG and WOFF may need adding)

### Responsive

- Mobile-first, 

To support IE7/8, for mediaqueries... 

- using SASS to build ie-css (http://jakearchibald.github.io/sass-ie/ - but had to add own fix).
	Enables setting old IE to a specific breakpoint - have adapted this to take second argument(bool), so styling inside any mediaquery can be applied to old IE.


### Zoom Search - the search engine used on this site (on Windows)

[http://www.wrensoft.com/zoom/index.html](http://www.wrensoft.com/zoom/index.html)

Zoom works with a preprocessor, which needs downloading and installed on your machine. It can be set to index online or offline - This example uses the offline mode, and indexes the built website (in `/build/`. It can be configured and run to index the entire site, and produces data files in a chosen location (here, `/source/search/`). This means everytime new content is added, the process needs to be repeated *after* the final build process.

- Download and install Zoom 
- In `/source/`, there are 2 config files: `zoom_for_IIS_local.zcfg` and `zoom_for_wamp_local.zcfg`. Double click one of these files to open Zoom configured with the above setup (offline mode). Update the URLs and any other settings as required for project, and run it.
- Manually copy and paste all the files in `/source/search/` (*all except* the `search.php` or `search.asp` and `search_template.html.haml` files*) from the `/source/search/` to `/build/search/` folder.

\* When the search files go through the build process, the URLs in the search results get messed up.

The search results page is here: `/source/search/search_template.html.haml` (gets built in the build process).


### Contact form: 

Using [https://getsimpleform.com/](https://getsimpleform.com/) with additional front-end validation


## LOCAL TECH SETUP FOR THIS PROJECT:

- Ruby 2.0 + DevKit (Windows)

- Middleman and Middleman-blog (see gemfile)

- Middleman-navtree extension has been activated but remains unused



### Site source folder structure

MM's default structure muddled assets, templates and content, so changed contents of `/source/` to - 

	source/
		|
		|-- _templates/
		|    |-- partials/
		|    |-- layouts/
		|    |    |-- master.haml  (the basis of every page)
		|    |    |-- post.haml  (the basis of every blog page)
		|
		|-- _markdowns 				(content for pages)
		|
		|-- assets/
		|    |-- css 	(SASS files)
		|    |-- js
		|    |-- images
		|
		|-- search/ (zoom search files go here. Included zoom search config(s) and custom-built search results template)
		| 
		|-- index.html.haml
		|-- some-page.html.haml 
		|
		|-- subdir/
		|    |-- subsection-page.html.haml 
		|    |
		|    |-- blog/ 				(content for blog)
		|     		 |-- 2015/
		etc...

Middleman still builds the site to `/build/` folder.



#### JS 

jquery 1.11.1 (because 2.x doesn't support IE 6, 7, 8)

	js
	|-- vendor
	|			|-- shivs, plugins and libraries
	|
	|-- components
	|			|-- own component js files
	|
	|-- shiv.js (loaded in HEAD)
	|-- all.js  (at end of BODY)


#### CONTENT

[Haml](http://haml.info/docs/yardoc/file.REFERENCE.html) for the html content structure 

[Markdown](https://daringfireball.net/projects/markdown/syntax) for actual content

[html to Markdown converter](http://domchristie.github.io/to-markdown/)
	

Middleman's default Markdown parser is [Kramdown](http://kramdown.gettalong.org/options.html)

	

