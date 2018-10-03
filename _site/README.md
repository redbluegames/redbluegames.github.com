Red Blue Games
==============

We host Red Blue Games' website on Github Pages. It' s a great way to have a free static website if you're willing ot get your hands into HTML.

# Maintenance Notes
Github uses Jekyll to publish these pages. You will be best served
referring to the Github and Jekyll documentation where setup and
configuration issues are concerned.

Here's [how I updated dependencies](https://github.com/github/pages-gem)

### Project Structure

Always make sure to edit the files within directories prefixed by an
underscore _ as these will not be stomped when Jekyll builds.

Always edit .less files since we use Less to compile our stylesheets
into single, minified files.

# Random Notes (Organize These)

A collection of random notes below. When in doubt, document here.

### Issues and Resolutions

**Nokogiri libxml2 error during bundle update**
```
An error occurred while installing nokogiri (1.8.4), and Bundler cannot continue.
Make sure that `gem install nokogiri -v '1.8.4' --source 'https://rubygems.org/'` succeeds before bundling.
```
Here were some things I did to try to resolve it.

```bash
gem install nokogiri -- --use-system-libraries=true --with-xml2-include=/Applications/Xcode.app/Contents/Developer/Platforms/MacOSX.platform/Developer/SDKs/MacOSX10.13.sdk/usr/include/libxml2/
```
