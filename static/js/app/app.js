define(function( require ){
    var $ = require('jquery'),
    Marionette = require('marionette'),
    Todos = require('./collections/todos'),
    Header = require('./views/header').Header,
    Footer = require('./views/footer').Footer,
    TodoList = require('./views/todoList').TodoList;

    var app = new Marionette.Application();
    var todos = new Todos();

    app.listenTo(todos, 'all ', function(){

    })

    app.addRegions({
        header: '#header',
        main: '#main',
        footer: '#footer'
    })

    app.addInitializer(function(){
        
    })

    var options = {
        collection:todos
    }


    app.header.show(new Header(options))
    app.main.show(new TodoList(options))
    app.footer.show(new Footer(options))
    
    return app
});
