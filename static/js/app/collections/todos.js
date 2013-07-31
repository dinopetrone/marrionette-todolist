define(function( require, exports, module ){
    var Backbone = require('backbone'),
        Todo = require('../models/todo').Todo;
        require('backbone.localStorage');

    var Todos = Backbone.Collection.extend({
        localStorage: new Backbone.LocalStorage('todos-backbone'),
        model: Todo,
        initialize: function(){

        },
    });

    exports = module.exports = function( addModels, options ){
        return new Todos( addModels, options );
    };
    exports.Todos = Todos;
});