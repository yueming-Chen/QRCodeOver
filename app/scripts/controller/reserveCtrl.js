app.controller('reserveCtrl', function($scope,$state,api) {
	
	$scope.options = ["電視","冰箱","電腦","洗衣機","微波爐","掃地機器人吸塵器","冷氣","暖氣機","其他"];
	const optionsCount = 9;

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
	};

	scrollNav();
	$('.c_button a').click(function(){  
	    $('html, body').stop().animate({
	        scrollTop: $( $(this).attr('href') ).offset().top
	    }, 400);
	    return false;
	  });

	function scroll(){
		
	};

	$scope.checkCheck = function(){
		let temp = [];
		for(let count = 0; count < optionsCount;count++){
			let reservationOption = $("#reservationOption" + count).prop("checked");
			if(reservationOption) temp.push(count);
		}
		
		return temp;
	};

	$scope.submit = function(){
		let name = $("#name").val();
		let email = $("#email").val();
		let choose = $("#choose").val();
		let advice = $("#advice").val();
		let subject = name + " 預約資訊";
		let chooseOption = $scope.checkCheck();
		let content = {name:name,email:email,choose:choose,chooseOption:chooseOption,advice:advice};
		content = JSON.stringify(content);
		console.log(optionsCount);
		api.sendmail(subject,content,function(d){
			console.log(d);
			$state.go("regist");
		});
	}
});