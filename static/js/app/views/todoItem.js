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
            'click label' : 'onLabelClick',
            'keypress .edit' : 'onEditKeypress',
            'click .toggle' : 'onToggle',
            'blur .edit' : 'toggleEditView'
        },
        initialize : function(){
            this.listenTo(this.model, 'change', this.render, this)
            this.listenTo(vent, 'todos:clear:completed', this.onClearCompleted)
        },
        onRender: function(){
            this.ui.edit.hide()
            if(this.model.get('completed')){
                this.$el.addClass('completed')
            }else{
                this.$el.removeClass('completed')
            }
        },
        destroy : function(){
            this.model.destroy()
        },
        onLabelClick : function(){
            this.toggleEditView()
            this.ui.edit.focus()
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
        },
        onToggle : function(evt){
            this.model.save('completed', evt.target.checked)

        },
        onClearCompleted : function(){
            if(this.model.get('completed')){
                this.model.destroy()
            }
        }
    });
    exports = module.exports = function (opts) {
        return new TodoItem(opts);
    };
    exports.TodoItem = TodoItem;
});