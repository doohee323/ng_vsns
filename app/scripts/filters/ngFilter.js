'use strict';

app.filter('ngFilter', function() {
	return function(input) {
		return 'ngFilter filter: ' + input;
	};
});
