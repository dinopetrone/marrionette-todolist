define(function (require, exports, module) {
    var $ = require('jquery'),
        Marionette = require('marionette'),
        vent = require('../vent'),
        template = require('tpl!../../templates/footer.html');

    var Footer = Marionette.ItemView.extend({
        template : template,
        events : {
            'click #clear-completed' : 'clearCompleted'
        },
        initialize : function(){
            this.listenTo(this.collection, 'add remove change', this.checkToggleVisible)
        },
        clearCompleted : function(){
            vent.trigger('todos:clear:completed')
        },
        onRender : function(){
            this.checkToggleVisible()
        },
        checkToggleVisible : function(){
            if(this.collection.length){
                this.$el.show()
            }else{
                this.$el.hide()
            }
        },
    });
    exports = module.exports = function (opts) {
        return new Footer(opts);
    };
    exports.Footer = Footer;
});