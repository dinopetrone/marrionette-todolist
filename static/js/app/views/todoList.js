define(function (require, exports, module) {
    var Marionette = require('marionette'),
        TodoItem = require('./todoItem').TodoItem;
        template = require('tpl!../../templates/todoList.html');

    var TodoList = Marionette.CompositeView.extend({
        template : template,
        itemView : TodoItem,
        itemViewContainer : '#todo-list',
    });
    exports = module.exports = function (opts) {
        return new TodoList(opts);
    };
    exports.TodoList = TodoList;
});