define(function( require ){
    var Marionette = require('marionette')
    Todos = require('./collections/todos'),
    Header = require('./views/header').Header,
    Footer = require('./views/footer').Footer,
    TodoList = require('./views/todoList').TodoList,
    Router = require('./routers/index').Router,
    Controller = require('./controllers/index').Controller,
    vent = require('./vent');


    var app = new Marionette.Application({vent:vent});
    
    var todos = new Todos();
    todos.fetch()

    app.listenTo(vent, 'filter:change', function(filter){
        app.main.$el.attr('class', 'filter-' + filter);
    });

    app.addRegions({
        header: '#header',
        main: '#main',
        footer: '#footer'
    })

    app.addInitializer(function(){
        new Router({
            controller: new Controller()
        })
        Backbone.history.start()
    })

    var options = {
        collection:todos
    }

    
    app.header.show(new Header(options))
    app.main.show(new TodoList(options))
    app.footer.show(new Footer(options))
    
    return app
});
