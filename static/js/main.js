require(['./config'], function(){
	require(['app/app'], function( app ){
		if( typeof app === 'function' ){
            app.start()
		}
	});
});