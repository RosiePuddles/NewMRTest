$(document).ready(function() {
	let url = $("#talk1-inner").attr('src');
	$("#talk1-main").on('hide.bs.modal', function() {
		$("#talk1-inner").attr('src', '');
	}).on('show.bs.modal', function() {
		$("#talk1-inner").attr('src', url);
	});
});