redbluegames
==============

Website for Red Blue Games

# Maintenance Notes
Github uses Jekyll to publish these pages. You will be best served
referring to the Github and Jekyll documentation where setup and
configuration issues are concerned.

# Rough Installation Help

Since things have gotten out of sync with Github instructions, here were
roughly the steps used to run a new cloned repo.

1. Install Ruby
1. [Install Jekyll](https://jekyllrb.com/docs/installation/)
```
gem install jekyll
```
1. Make sure [jekyll is in your path](http://guides.rubygems.org/faqs/#user-install)
1. From root of project, run this command which installs any dependencies for this site.
```
bundle install
```
1. Run jekyll
```
bundle exec jekyll serve --watch
```

## Our Workflow

Always make sure to edit the files within directories prefixed by an
underscore _ as these will not be stomped when Jekyll builds.

Always edit .less files since we use Less to compile our stylesheets
into single, minified files.
