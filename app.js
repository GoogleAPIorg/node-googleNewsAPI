var express = require('express')
  , app = express() 
  , cons = require('consolidate')
  , routes = require('./routes');  
     
    app.engine('html', require('ejs').renderFile);
    app.set('view engine', 'ejs');
    app.set('views', __dirname + '/public');

   	app.use(express.bodyParser());
    app.use(app.routes);
    routes(app);

    app.listen(3001);
    console.log('Express server listening on port 3001');

