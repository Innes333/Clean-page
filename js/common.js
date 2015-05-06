$(document).ready(function() {

	$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");
	
	function heightDetect() {
		$("header").css("height", $(window).height());
	};
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});
	



	//form valid
 	$("input,select,textarea").not("[type=submit]").jqBootstrapValidation();
 });


});