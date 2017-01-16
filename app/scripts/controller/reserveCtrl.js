app.controller('reserveCtrl', function($scope,$state,api) {
	$scope.options = ["電視","冰箱","電腦","洗衣機","微波爐","掃地機器人吸塵器","冷氣","暖氣機","其他"];
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
		
	}

	$scope.submit = function(){
		var name = $("#name").val();
		var email = $("#email").val();
		var choose = $("#choose").val();
		var subject = name + " 預約資訊";
		var content = {name:name,email:email,choose:choose};
		content = JSON.stringify(content);
		console.log(subject);
		api.sendmail(subject,content,function(d){
			console.log(d);
			$state.go("regist");
		});
	}
});