$(document).ready(function() {
		//$(".fancybox").fancybox();
	console.log("Document Loaded");

	$('.modal-trigger').leanModal();
	
	$(".button-collapse").sideNav();

	$('.modal-trigger').on("click", function(event) {
		event.preventDefault();
		console.log("image load");
	})
});
console.log("PAGE");


