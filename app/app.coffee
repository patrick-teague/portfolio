# Utilities
express = require 'express'
bodyParser = require 'body-parser'
compression = require 'compression'
nconf = require 'nconf'
yml = require 'js-yaml'
fs = require 'fs'

# Configure nconf
nconf.argv().env().file
  file: __dirname + '/config.yml'
  format:
    parse: yml.safeLoad
    stringify: yml.safeDump

# Assign global variables
global.nconf = nconf

# Create app
app = express()

###
  /healthcheck - simply returns a 200 status code to prove server connectivity
  -------------------------------------------------------------------------------------
    type: POST
    returns:
      200 OK status
###
app.get '/healthcheck', (req, res) ->
  res.status(200).end()

# ###
#   /favicon.ico - simply sends back a link to the s3 bucket's favicon
#   -------------------------------------------------------------------------------------
#     type: POST
#     returns:
#       html link to favicon.ico image
# ###
# app.get '/favicon.ico', (req, res) ->
#   res.send('<link rel="icon" type="image/png" href="https://s3-us-west-1.amazonaws.com/portfolio-resources/images/favicon.ico">')

###
  /robots.txt - respond to robot requests depending on the environment
  -------------------------------------------------------------------------------------
    type: GET
    returns:
      text response for robots
###
app.get '/robots.txt', (req, res) ->
  res.set 'Content-Type', 'text/plain'
  if nconf.get('PORTFOLIO_ENVIRONMENT') is 'production'
    res.send 'User-agent: *\nDisallow:'
  else
    res.send 'User-agent: *\nDisallow: /'

if nconf.get('PORTFOLIO_USE_HTTPS') is 'true' or nconf.get('PORTFOLIO_USE_HTTPS') is true
  app.use (req, res, next) ->
    if (!req.secure) and req.get('X-Forwarded-Proto') isnt 'https'
      res.redirect 'https://' + req.get('Host') + req.url
    else
      next()

if nconf.get('PORTFOLIO_ENVIRONMENT') is 'development'
  vendorScripts = [
    "<script src='/js/vendor/development/jquery-2.1.3.js' type='text/javascript'></script>",
    "<script src='/js/vendor/development/handlebars-2.0.0.js' type='text/javascript'></script>",
    "<script src='/js/vendor/development/ember-1.9.1.js' type='text/javascript'></script>"
  ].join ''

  # Read all files in the /public/coffee/ directory and generate script tags
  scriptDirs = [
    'app',
    'models',
    'routes',
    'views',
    'components',
    'controllers'
  ]
  # scriptDirs = fs.readdirSync __dirname + '/public/coffee/'
  scripts = ''
  for dir in scriptDirs
    files = fs.readdirSync __dirname + '/public/coffee/' + dir
    if files.length > 0
      for file in files when 0 < file.indexOf '.coffee'
        fileName = file.replace '.coffee', '.js'
        scripts += "<script src='/js/" + dir + "/" + fileName + "' type='text/javascript'></script>"
else
  vendorScripts = "<script src='/js/vendor.js' type='text/javascript'></script>"
  scripts = "<script src='/js/portfolio.js' type='text/javascript'></script>"

app.use express.static __dirname + '/public'

app.get '*', (req, res) ->
  res.render 'index',
    appTitle: nconf.get 'PORTFOLIO_APP_TITLE'
    fonts: "<link href='https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,400,300' rel='stylesheet' type='text/css'/>"
    vendorStyles: ""
    styles: "<link href='/css/portfolio.css' rel='stylesheet' type='text/css'/>"
    templates: "<script src='/js/templates.js'></script>"
    vendorScripts: vendorScripts
    scripts: scripts

# Configure app
app.use express.static __dirname + '/public'
app.set 'port', process.env.PORT or nconf.get 'PORTFOLIO_PORT'
app.set 'views', __dirname + '/public/views'
app.set 'view engine', 'ejs'
app.use bodyParser.json()
app.use bodyParser.urlencoded extended: true
app.use compression()

app.listen nconf.get('PORTFOLIO_PORT'), ->
  console.log 'Portfolio Website - ' + nconf.get('PORTFOLIO_ENVIRONMENT') + ' - Listening on port: ' + nconf.get('PORTFOLIO_PORT')
