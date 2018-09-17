"use strict";

$(function(){
	// Load sections
	$(".loadTemplate").each(function() {
		const fileName = $(this).attr('value');
		if (fileName != null && fileName != '') {
			$(this).load("sections/" + fileName);
		}
	});
});
