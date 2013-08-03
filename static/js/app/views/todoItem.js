define(function (require, exports, module) {
    var $ = require('jquery'),
        Marionette = require('marionette'),
        vent = require('../vent'),
        template = require('tpl!../../templates/todoItem.html');

    var TodoItem = Marionette.ItemView.extend({
        template : template,
        ui : {
            label : 'label',
            edit : '.edit'
        },
        tagName : 'li',
        events : {
            'click .destroy' : 'destroy',
            'click label' : 'toggleEditView',
            'keypress .edit' : 'onEditKeypress'
        },
        initialize : function(){
            this.listenTo(this.model, 'change', this.render, this)
            
        },
        onRender: function(){
            this.ui.edit.hide()
        },
        destroy : function(){
            this.model.destroy()
        },
        toggleEditView : function(){
            this.ui.edit.toggle();
            this.ui.label.toggle();
        },
        onEditKeypress : function(evt){
            if(evt.keyCode == 13){
                this.toggleEditView()
                this.model.save('title', evt.target.value)
            }
        }
    });
    exports = module.exports = function (opts) {
        return new TodoItem(opts);
    };
    exports.TodoItem = TodoItem;
});