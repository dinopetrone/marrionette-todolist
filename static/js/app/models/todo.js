define(function( require, exports, module ){
    var Backbone = require('backbone');
    var Todo = Backbone.Model.extend({

        defaults: {
            completed:false
        },
        initialize: function() {
            
        },

    });

    exports = module.exports = function( opts ){
        return new Todo( opts );
    };
    exports.Todo = Todo;
});
