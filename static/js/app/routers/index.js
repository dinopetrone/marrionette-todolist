define(function (require, exports, module) {
    var Marionette = require('marionette');

    var Router = Marionette.AppRouter.extend({
        appRoutes:{
            '*filter':'setFilter'
        }
    });

    exports = module.exports = function (opts) {
        return new Router(opts);
    };
    exports.Router = Router;
});