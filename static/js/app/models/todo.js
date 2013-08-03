define(function( require, exports, module ){
    var Backbone = require('backbone');
    var Todo = Backbone.Model.extend({

        defaults: {
            completed:false
        },
        initialize: function() {
            this.listenTo(this, 'change', this.onChange)
        },
        onChange : function(){
            if(this.get('title') == ''){
                this.destroy()
            }
        }
    });

    exports = module.exports = function( opts ){
        return new Todo( opts );
    };
    exports.Todo = Todo;
});
