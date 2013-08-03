define(function( require, exports, module ){
    var Marionette = require('marionette'),
        vent = require('../vent');

    var Controller = Marionette.Controller.extend({
        initialize: function() {

        },
        setFilter : function(param) {
          param = param || '';
          vent.trigger('auctionitem:change', param.trim() || '');
        }
    });

    exports = module.exports = function( opts ){
        return new Controller( opts );
    };
    exports.Controller = Controller;
});