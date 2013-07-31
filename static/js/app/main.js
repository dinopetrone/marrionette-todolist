define(function( require ){
	var app = require('./app'),
    Backbone = require('backbone'),
    Router = require('./routers/index').Router,
    Controller = require('./controllers/index').Controller;

    app.start()
    new Router({
        controller: new Controller()
    })
    Backbone.history.start()
});