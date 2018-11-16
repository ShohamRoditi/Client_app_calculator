var getMethod = document.getElementById('getMethod');
var postMethod = document.getElementById('postMethod');
var putMethod = document.getElementById('putMethod');

// POST:
postMethod.addEventListener("click", function(){
		$.post("http://shenkar.html5-book.co.il/2018-2019/dcs/dev_43/service_calculator/dcs_43.php",
		{func:"sum",num1:10,num2:15,num3:2},
		function( data ) {

			$(".result").append(data.res);
			console.log("Return data: " + data.res);
			});
})

//GET : 
getMethod.addEventListener("click", function(){
		$.get("http://shenkar.html5-book.co.il/2018-2019/dcs/dev_43/service_calculator/dcs_43.php?num1=5&num2=2&num3=5&func=avg",
		function( data ) {

			$(".result").append(data.res);
			console.log("Return data: " + data.res);
			});
})

//PUT or DELETE :
putMethod.addEventListener("click", function(){
		var dataObj = {'func':'sum','num1':1,'num2':23,'num3':10};
		$.ajax({
			url:'http://shenkar.html5-book.co.il/2018-2019/dcs/dev_43/service_calculator/dcs_43.php',
			data:dataObj,
			dataType: 'json',
			type:'PUT',
			success:function( data ){
				$(".result").append(data.res);
				console.log( "Return data: " + data.res);
			}
		});
})

