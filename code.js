window.onload = function() {
	$("#yearC").text((new Date).getFullYear());
}
(function(){
	$('#carousel').carousel({ interval: 5000 });
}());
(function(){
	$('.carousel .item').each(function(){
		var next = $(this).next();
		if (!next.length) {
			next = $(this).siblings(':first');
		}
		next.children(':first-child').clone().appendTo($(this));

		for (var i=0;i<1;i++) {
			next=next.next();
			if (!next.length) {
				next = $(this).siblings(':first');
			}
			next.children(':first-child').clone().appendTo($(this));
		}
	});
}());
(function(){
	$('#carousel').bind('mousewheel', function(e){
		if (e.originalEvent.wheelDelta / 120 > 0) {
			$(this).carousel('next');
		}
		else {
			$(this).carousel('prev');
		}
	});
}());

var radios = document.getElementsByName("radioGroup");
(function(){
for(var i = 0; i < radios.length; i++){
	//only attach the function for type radio
	if(radios[i].type == "radio"){
		radios[i].onclick = function(){
			// disable the tabs
			$('.multi-column-dropdown>li').attr('class', 'disabled');
			$('.multi-column-dropdown>li').click(function(event){
				if ($(this).hasClass('disabled')) {
					return false;
				}
			});
			$('.options-err').removeClass('visible');
			$('.btn-submit').prop("disabled", false);
			$('.btn-submit').addClass('animated');
		}
	}
}
}());
$(function(){
	$("#topForm").submit(function(evt) {
		if ($("input[name='radioGroup']:checked").length > 0){
			// one radio are checked
			var isChecked = jQuery("input[name='radioGroup']:checked").val();
			$("#modal-text").text(isChecked);
			$('#modal').modal('show');
			evt.preventDefault();
			$("input[name='radioGroup']").prop("disabled", true);
		}
		else{
			// no checkboxes are checked
			$('.options-err').addClass('visible');
			$('.btn-submit').prop("disabled", true);
		}
		$('.btn-submit').removeClass('animated');
	});
});

