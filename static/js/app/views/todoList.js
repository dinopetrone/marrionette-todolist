define(function (require, exports, module) {
    var Marionette = require('marionette'),
        TodoItem = require('./todoItem').TodoItem;
        template = require('tpl!../../templates/todoList.html');

    var TodoList = Marionette.CompositeView.extend({
        template : template,
        itemView : TodoItem,
        itemViewContainer : '#todo-list',
        initialize : function(){
            
        },
        ui : {

        },
        events : {

        },
        onRender : function(){

        },
        

    });
    exports = module.exports = function (opts) {
        return new TodoList(opts);
    };
    exports.TodoList = TodoList;
});