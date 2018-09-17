"use strict";

$(document).ready(function() {
	//$('.sidebarCollapse').on('click', function() {
	$('.sidebarCollapse').on('click', function() {
		$('#sidebar').toggleClass('active');
		$('#content').toggleClass('expanded');
		$('.collapse.in').toggleClass('in');
		$('a[aria-expanded=true]').attr('aria-expanded', 'false');
	});
});