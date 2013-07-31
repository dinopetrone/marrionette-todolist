define(function( require, exports, module ){
    var Marionette = require('marionette'),
        app = require('../app');

    var Controller = Marionette.Controller.extend({
        initialize: function() {

        },
        setFilter : function(param) {
          param = param || '';
          app.vent.trigger('auctionitem:change', param.trim() || '');
        }
    });

    exports = module.exports = function( opts ){
        return new Controller( opts );
    };
    exports.Controller = Controller;
});