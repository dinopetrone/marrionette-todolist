define(function (require, exports, module) {
    var Marionette = require('marionette'),
        TodoItem = require('./todoItem').TodoItem,
        template = require('tpl!../../templates/todoList.html');

    var TodoList = Marionette.CompositeView.extend({
        template : template,
        itemView : TodoItem,
        itemViewContainer : '#todo-list',
        ui : {
            toggleAll : '.toggle-all'
        },
        events : {
            'click #toggle-all' : 'onToggleAll'
        },
        initialize : function(){
            this.listenTo(this.collection, 'add remove change', this.checkToggleVisible)
        },
        onRender : function(){
            this.checkToggleVisible()
        },
        checkToggleVisible : function(){
            if(this.collection.length){
                this.ui.toggleAll.show()
            }else{
                this.ui.toggleAll.hide()
            }
        },
        onToggleAll : function(evt){
            this.collection.invoke('save', {"completed": evt.target.checked});
        }
    });
    exports = module.exports = function (opts) {
        return new TodoList(opts);
    };
    exports.TodoList = TodoList;
});