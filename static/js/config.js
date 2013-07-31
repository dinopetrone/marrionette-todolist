/*
	the projects require.js config,
	used in build process also
	see: http://requirejs.org/docs/api.html#config
*/

/*global requirejs*/
requirejs.config({
	//tell require.js what global this lib makes
	shim: {
		'underscore': { exports: '_' },
		'backbone': { deps: ['underscore','jquery'], exports: 'Backbone' },
		'modernizr': { exports: 'Modernizr' },
		'marionette' : { deps : ['backbone'], exports : 'Backbone.Marionette'},
		'backbone.localStorage' : { deps : ['backbone'], exports : 'Backbone.Marionette'},
		'backbone.wreqr' : { deps : ['backbone'], exports : 'Backbone.Marionette'},
	},
	//re-route libs to top-level
	paths: {
		'jquery': 'libs/jquery',
		'backbone': 'libs/backbone',
		'underscore': 'libs/underscore',
		'text': 'libs/text',
		'domReady': 'libs/domReady',
		'modernizr': 'libs/modernizr',
		'marionette' : 'libs/backbone.marionette',
		'tpl' : 'libs/tpl',
		'backbone.localStorage' : 'libs/backbone-localStorage',
	}
});