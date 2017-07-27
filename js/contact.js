$(document).ready(function() {
	$('#err-name').hide();
	$('#err-email').hide();
	$('#err-sdt').hide();
	$('#err-message').hide();

	$('#contact-submit').click(function() {
		var message = $('#message-contact').val();
		var phone 	= $('#phoneNumb-contact').val();
		var name  	= $('#name-contact').val();
		var mail 	= $('#mail-contact').val();
		var flag = true;

		// kiểm tra tên
		if(!isNaN($('#name-contact').val())) {
			if($('#name-contact').val() == "") {
				flag = true;
			}else {
				$('#name-contact').css({
					borderColor : "red",
				});

				$('#err-name').show();

				$('#name-contact').focus(function() {
					$('#name-contact').css({
						borderColor : "",
					});
					$('#err-name').hide();
				});

				flag = false;
			}
		}

		// kiểm tra mail
		var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		if(!filter.test(mail) || mail == "") {
			$('#mail-contact').css({
				borderColor : "red",
			});

			$('#err-email').show();

			$('#mail-contact').focus(function() {
				$('#mail-contact').css({
					borderColor : "",
				});
				$('#err-email').hide();
			})
			flag = false;
		}
		// kiểm tra số điện thoại
		if(isNaN($('#phoneNumb-contact').val())) {
			$('#phoneNumb-contact').css({
				borderColor : "red",
			});

			$('#err-sdt').show();

			$('#phoneNumb-contact').focus(function() {
				$('#phoneNumb-contact').css({
					borderColor : "",
				});

				$('#err-sdt').hide();
			})

			flag = false;
		}

		// kiểm tra mục thông điệp
		if(message == "") {
			$('#message-contact').css({
				borderColor : "red",
			});

			$('#err-message').show();

			// $('#message-contact').attr({
			// 	placeholder: 'Bạn không được để trống message!',
			// });

			flag = false;
		}

		$('#message-contact').focus(function() {
			// $('#message-contact').attr({
			// 	placeholder: 'Nhập thông điệp bạn muốn gửi cho chúng tôi!',
			// });
			$('#message-contact').css({
				borderColor : "",
			});
			$('#err-message').hide();
			flag = false;
		});

		// nếu thành công thì submit

		if(flag == true) {

			var btnReSumit = '<button style="margin-left: 45%;" type="button" class="btn btn-success" id="reSubmit"><i class="fa fa-paper-plane" aria-hidden="true"></i>  Gửi lại</button>';
			$('.contact-section').html('<span style="text-align: center;"><h3>Cảm ơn bạn đã liên hệ cho chúng tôi! Chúng tôi sẽ đọc và gửi liên hệ lại cho bạn sớm nhất có thể!</h3> <br/>' + btnReSumit + "</span>");
		}

		// reload trang submit
		$('#reSubmit').click(function() {
			location.reload();
		});
	});
});