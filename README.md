# Textalk Arbetsprov
Started out with AngularJS-Boilerplate, removed a bunch of stuff I don't need, and finally landed on some niceties that I think made it an interesting visual design. Fun little project! :)

# Setup
npm install && bower install
- install all dependencies

Note: If npm install fails during dependency installation it will be likely caused by gulp-imagemin. In that case remove gulp-imagemin dependency from package.json, run npm install again and then install gulp-imagemin separately with following command: npm install gulp-imagemin --save-dev

# Watch files
gulp
- all SCSS/HTML will be watched for changes and injected into browser thanks to BrowserSync

# Build production version
gulp build
- this will process following tasks:
* clean _build folder
* compile SASS files, minify and uncss compiled css
* copy and optimize images
* minify and copy all HTML files into $templateCache
* build index.html
* minify and copy all JS files
* copy fonts
* show build folder size

# Start webserver without watch task
gulp server

# Start webserver from build folder
gulp server-build
