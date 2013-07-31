define(function (require, exports, module) {
    var $ = require('jquery'),
        Marionette = require('marionette');
        var template = require('tpl!../../templates/footer.html');

    var Footer = Marionette.ItemView.extend({
        template : template,
        events : {
            
        },
    });
    exports = module.exports = function (opts) {
        return new Footer(opts);
    };
    exports.Footer = Footer;
});