define(function (require, exports, module) {
    var $ = require('jquery'),
        Marionette = require('marionette');
        var template = require('tpl!../../templates/todoItem.html');

    var TodoItem = Marionette.ItemView.extend({
        template : template,
        events : {
            
        },
    });
    exports = module.exports = function (opts) {
        return new TodoItem(opts);
    };
    exports.TodoItem = TodoItem;
});