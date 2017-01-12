
app.controller('registCtrl', function($scope,$state) {
	//寫入Localstorage
$(document).ready(function(){
		$('.ham').click(function(){
			console.log('asd');
			$(this).toggleClass('open');
		});
	});
	function scrollNav() {
	  $('.nav a').click(function(){  
	    $('html, body').stop().animate({
	        scrollTop: $( $(this).attr('href') ).offset().top
	    }, 400);
	    return false;
	  });
	  $('.scrollTop a').scrollTop();
	}
	scrollNav();
	$('.c_button a').click(function(){  
	    $('html, body').stop().animate({
	        scrollTop: $( $(this).attr('href') ).offset().top
	    }, 400);
	    return false;
	  });

	function scroll(){
		
	};

	$scope.reserve = function(){
		$state.go('reserve');
	};

	$(document).ready(function(){

	});

	$('body').scroll(function(){
		console.log($(window).height());
	});

});