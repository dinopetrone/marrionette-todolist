define(function (require, exports, module) {
    var $ = require('jquery'),
        Marionette = require('marionette');
        var template = require('tpl!../../templates/header.html');

    var Header = Marionette.ItemView.extend({
        template : template,
        ui : {
            input : '#new-todo'
        },
        events : {
            'keypress #new-todo': 'onInputKeyPress'
        },
        onInputKeyPress: function(evt){
            var ENTER_KEY = 13;
            var todoText = this.ui.input.val().trim();

            if ( evt.which === ENTER_KEY && todoText ) {
                this.collection.create({
                    title : todoText
                });
                this.ui.input.val('');
            }
        }
    });
    exports = module.exports = function (opts) {
        return new Header(opts);
    };
    exports.Header = Header;
});