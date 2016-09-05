$(document).ready(function() {

	if($('input.data-inputmask').length > 0) {
		$('input.data-inputmask').mask("+7 (999) 999-99-99");
	}

	var nikotinSelect = $('select').selectize();

	$('.toOrder').click(function() {
		var scrollOffer = $('.order').offset().top;
		$('body,html').animate({scrollTop:scrollOffer},800,function() {
			$('input[name=phone]').focus()
		});
		return false;
	});

	$('.submit-form').on('keyup', '.input.error' ,function() {
		$(this).removeClass('error');
	});

	$('.submit-form').on('change', '.select' ,function() {
		$('.selectize-input').removeClass('error');
	});

	$('.submit-form').submit(function() {
		var isError = false;

		if ($(this).find('input[name=phone]').val() == ""){
			isError = true;
			$(this).find('input[name=phone]').addClass('error').focus();
		}

		if ($(this).find('.select').val() == ""){
			isError = true;
			$(this).find('.selectize-input').addClass('error');
		}

		if(!isError)
			$.ajax({
				url: "send-mail.php",
				type: "POST",
				data: $(this).serialize(),
				success: function(data) {
					if(!data.error){
						$.magnificPopup.open({
							items: {
								src: '#popup-succes',
								type: 'inline'
							},
							callbacks: {
								open: function() {
									setTimeout(function() {
										$.magnificPopup.close();
									}, 3000);
								},
							}
						});
					}
				}
			});
		return false;
	});


});