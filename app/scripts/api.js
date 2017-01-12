app.factory('api', function ($http,$rootScope) {
	$http.defaults.withCredentials = false;
    return{
    	sendmail:function(subject,content,onSuccess){
    		$http.post("http://218.161.38.126:5000/apis/email/target/sendmail",{mail:"s102590041@gmail.com",subject:subject,content:content}).
            success(function (data, status, headers, config) {
                (onSuccess || angular.noop)(data);
            }).
            error(function (data, status, headers, config) {
                alert("Error - Data:" + data + " status:" + status);
            });
    	}
    };
});