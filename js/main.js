$(document).ready(function() {


	$('.title').children('a').attr({
		href: 'standart-post.html',
	});

	$('ul.dropdown-menu li').children('a').attr({
		href : 'list-post.html',
	});

	// xử lý với slider bài viết
	// event cho btn_chevron
	
	var stt = 0;
	$('.slider-box-1 .sdd_block_module_2').hide();

	for(var i = 0; i < 4; i++) {
		$('.slider-box-1 .sdd_block_module_2').eq(i).show();
	}

	$('.box-post-2 .btn-chevron-left').click(function() {
		var a = Array();

		$('.sdd_block_module_2').each(function() {

			if($(this).is(':visible')) {
				// flagBg = $(this).attr("stt");
				a.push($(this).attr("stt")); // một mảng đang hiển thị

				// alert(a);
				// flag++;
			}
		});

		$('.slider-box-1 .sdd_block_module_2').eq(a[1]).prev().show();

		$('.slider-box-1 .sdd_block_module_2').eq(a[a.length - 1]).next().hide();
	});

	$('.box-post-2 .btn-chevron-right').click(function() {
		alert("dfsdf");
	});


	// kiểm tra nút subscribe
	var mailSub = $('#mail-subscribe');
	var flagSub = true;
	
	var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	$('#btn-subscribe').click(function() {
		if(!filter.test(mailSub.val()) || mailSub.val() == "") {
			$('#mail-subscribe').css({
				borderColor : "red",
			});

			$('#mail-subscribe').focus(function() {
				$('#mail-subscribe').css({
					borderColor : "",
				});
			})

			flagSub = false;
		}else{
			flagSub = true;
		}

		if(flagSub == true)
		{

			$('.subscribe').html("Cảm ơn bạn đã đăng ký!");
		}
	});


	// nút more stories
	$('.more-stories-content').hide();
	var flagBtnMore = true;

	$('.btn-more-stories').click(function() {
		if(flagBtnMore == true) {
			$('.btn-more-stories').html("Ẩn bớt");
			flagBtnMore = !flagBtnMore;
		}else {
			$('.btn-more-stories').html("Xem thêm nhiều hơn");
			flagBtnMore = !flagBtnMore;
		}
		$('.more-stories-content').slideToggle();
	});

	$('#main-menu').children('li').click(function() {
		$('#main-menu').children('li').removeClass('active');
		$(this).addClass('active');
	});
	// hành động khi cuộn trang
	var iScrollPos = 0;
	$(window).scroll(function() {
		var iCurSrollPos = $(this).scrollTop();

		if(iCurSrollPos > iScrollPos) {
			$('#menu-header').removeClass('navbar-fixed-top');
		}else {
			$('#menu-header').addClass('navbar-fixed-top');
		}
		iScrollPos = iCurSrollPos;

		btn_scroll_top();
	});

	// button hien them nut
	function btn_scroll_top() {
		if ($(document).scrollTop() >= ($(document).height() / 2)) {
	        $("#btn-scroll-top").show();
	        $('.checkbox-container').show();
	    } else {
	        $("#btn-scroll-top").hide();
	        $('.checkbox-container').hide();
	    }
	}
	$('#btn-scroll-top').click(function() {
    	document.body.scrollTop = 0;
	    document.documentElement.scrollTop = 0;
	    // $('body').scrollTop('0');
    	
    });
	// end hành động khi cuộn trang


	// hành động cho nút menu thu nhỏ
	var flagMenu = true;
	$('.menu-open-button').click(function() {
		if(flagMenu == true && $('.menu').css('bottom') === '-40px') {
			$('.menu').css({
				bottom: '110px',
			});


			flagMenu = !flagMenu;

		}else {
			$('.menu').css({
				bottom: '-40px',
			});

			flagMenu = !flagMenu;
		}
	});

	// $('#btn-menu-1').click(function() {
	// 	$('.bg-1').css({
	// 		background: "#669AE1 !important",
	// 	});
	// 	$('.bg-2').css({
	// 		background: "#669AE1 !important",
	// 	});
	// 	$('.bg-3').css({
	// 		background: "#669AE1 !important",
	// 	});
	// 	$('.bg-4').css({
	// 		background: "#669AE1 !important",
	// 	});
	// 	$('.bg-5').css({
	// 		background: "#669AE1 !important",
	// 	});
	// 	$('.bg-6').css({
	// 		background: "#669AE1 !important",
	// 	});
	// });
	// $('#btn-menu-2').click(function() {
	// 	$('.bg-1').css({
	// 		background: "#669AE1 !important",
	// 	});
	// 	$('.bg-2').css({
	// 		background: "#669AE1 !important",
	// 	});
	// 	$('.bg-3').css({
	// 		background: "#669AE1 !important",
	// 	});
	// 	$('.bg-4').css({
	// 		background: "#669AE1 !important",
	// 	});
	// 	$('.bg-5').css({
	// 		background: "#669AE1 !important",
	// 	});
	// 	$('.bg-6').css({
	// 		background: "#669AE1 !important",
	// 	});
	// });
	// $('#btn-menu-3').click(function() {
	// 	$('.bg-1').css({
	// 		background: "#669AE1 !important",
	// 	});
	// 	$('.bg-2').css({
	// 		background: "#669AE1 !important",
	// 	});
	// 	$('.bg-3').css({
	// 		background: "#669AE1 !important",
	// 	});
	// 	$('.bg-4').css({
	// 		background: "#669AE1 !important",
	// 	});
	// 	$('.bg-5').css({
	// 		background: "#669AE1 !important",
	// 	});
	// 	$('.bg-6').css({
	// 		background: "#669AE1 !important",
	// 	});
	// });
	// $('#btn-menu-4').click(function() {
	// 	$('.bg-1').css({
	// 		background: "#669AE1 !important",
	// 	});
	// 	$('.bg-2').css({
	// 		background: "#669AE1 !important",
	// 	});
	// 	$('.bg-3').css({
	// 		background: "#669AE1 !important",
	// 	});
	// 	$('.bg-4').css({
	// 		background: "#669AE1 !important",
	// 	});
	// 	$('.bg-5').css({
	// 		background: "#669AE1 !important",
	// 	});
	// 	$('.bg-6').css({
	// 		background: "#669AE1 !important",
	// 	});
	// });
	// $('#btn-menu-5').click(function() {
	// 	$('.bg-1').css({
	// 		background: "#669AE1 !important",
	// 	});
	// 	$('.bg-2').css({
	// 		background: "#669AE1 !important",
	// 	});
	// 	$('.bg-3').css({
	// 		background: "#669AE1 !important",
	// 	});
	// 	$('.bg-4').css({
	// 		background: "#669AE1 !important",
	// 	});
	// 	$('.bg-5').css({
	// 		background: "#669AE1 !important",
	// 	});
	// 	$('.bg-6').css({
	// 		background: "#669AE1 !important",
	// 	});
	// });
	// $('#btn-menu-6').click(function() {
	// 	$('.bg-1').css({
	// 		background: "#669AE1 !important",
	// 	});
	// 	$('.bg-2').css({
	// 		background: "#669AE1 !important",
	// 	});
	// 	$('.bg-3').css({
	// 		background: "#669AE1 !important",
	// 	});
	// 	$('.bg-4').css({
	// 		background: "#669AE1 !important",
	// 	});
	// 	$('.bg-5').css({
	// 		background: "#669AE1 !important",
	// 	});
	// 	$('.bg-6').css({
	// 		background: "#669AE1 !important",
	// 	});
	// });


	// end menu đẹp

	// hành động cho lightbox
	$(document).ready(function() {
	    var $lightbox = $('#lightbox');
	    
	    $('[data-target="#lightbox"]').on('click', function(event) {
	        var $img = $(this).find('img'), 
	            src = $img.attr('src'),
	            alt = $img.attr('alt'),
	            css = {
	                'maxWidth': $(window).width() - 100,
	                'maxHeight': $(window).height() - 100
	            };
	    
	        $lightbox.find('.close').addClass('hidden');
	        $lightbox.find('img').attr('src', src);
	        $lightbox.find('img').attr('alt', alt);
	        $lightbox.find('img').css(css);
	    });
	    
	    $lightbox.on('shown.bs.modal', function (e) {
	        var $img = $lightbox.find('img');
	            
	        $lightbox.find('.modal-dialog').css({'width': $img.width()});
	        $lightbox.find('.close').removeClass('hidden');
	    });
	});
});