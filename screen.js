var page = require('webpage').create();
  page.open('https://tealorca.com/', function() {
  page.render('out.png');
  phantom.exit();
});