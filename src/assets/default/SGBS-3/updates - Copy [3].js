
$(document).ready(function() {
    $('.mainnav li a').removeClass("active");
    $('.mainnav li a.home').addClass("active");

	console.log('start');
    setTimeout(function() {
		console.log('first function');
        updateOdds();
    }, 3000);
	
//	prepareButtonEvents();
//    setTimeout(function() {
//        updateOtherOdds();
//    }, 3000);
//	setInterval(function() {
//        updateOtherOdds();
//    }, 3000);
//    setInterval(function() {
//        updateTimers();
//    }, 1000);
});

function updateOdds() {
    var events = "";
	console.log('updateOdds function');
//	console.log($("#page-name").val());
	var pageName = $("#page-name").val();
	if( pageName == 'inplayMe' ){
		console.log('inplay Me');
		$('.odddetails').each(function() {
			if (events.length > 0)
				events += "&";
			events += $(this).data("eventid");
		});
		updateOddsCounter = 600;
		ajaxCallUpdateOdds(events);

	}
	else if( pageName =='inplayOdds' ){
		console.log('inplay Odds');
		$('.eventodds').each(function() {
			events = $(this).data("eventid");
    	});
		updateOddsCounter = 600;
		ajaxCallUpdateOdds(events);
//		updateOddsCounter = 600;
//		ajaxCallUpdateInplayOdds(events);

	}
	else{
		console.log('not inplay odds and inplay me page');
	}
    
}

function ajaxCallUpdateOdds(events) {

//	if(events == ''){
//		console.log('empty event');
//		setTimeout(function(){
//			location.reload();
//		}, 10000);
//	}
//	else{
		console.log('events = ' + events);
		$.get(base_url+'upload/API/inPlay/lastupdate.txt', function(data) {
				var d = new Date();
				var thisTime = d.getTime();
				if( (thisTime/1000) - data > 5 ){
					console.log('update Inplay.php greater than 5 second');
					console.log((thisTime/1000) + ' - ' + data);
					updateAPI();
				}
				else{
					console.log('not update and try after 1 second');
					// go to get json file
//					setTimeout(function() {
//								ajaxCallUpdateOdds()
//							}, 1000);
				}
			updatesInplayOdds(events);

			}, 'text');
//	}	
	
	
	
	

}

function updateAPI(){
	console.log('updateAPI function');
	
	$.ajax(base_url+"php/inplay.php", {
		success: function(){
			console.log('update Inplay.php');
		},
		error: function(){
			console.log('Error Inplay.php');
		}
	});
}

function updatesInplayOdds(events){
	console.log('updatesInplayOdds function');
	
	console.log(events);
	$.ajax(base_url + "bets/updateOdds", {
			type: "POST",
			dataType: "json",
			data: {
				LastUpdate: $('#lastupdate').val(),
				Matches: events
			},
			headers: {
			},
			success: function(result) {
				console.log(result);
				console.log('get result');
				$('#lastupdate').val(result.lastUpdate);
				if (result.data == 'NoUpdate') {
					setTimeout(function() {
						updateOdds()
					}, 1000);
				}
				else if (result.data == 'inplayOdds'){
					console.log('return inplay odds means matches is undefined');
				}
				else {
					console.log(' go to sports function');
					updateInplayOdds(result.data);
					updateBetslipOdds(result.data);
					setTimeout(function() {
						updateOdds();
	//					console.log('update odds');
	//					$.ajax(base_url+"php/inplay.php");
					}, 5000);
				}
			},
			error: function() {
	//			console.log(events);
				console.log('error');
				setTimeout(function() {
					updateOdds()
				}, 500);
			}
		});
}



function ajaxCallUpdateInplayOdds(events) {
	
//	console.log(events);
//	console.log($('#lastupdate').val());
	$.get(base_url+'upload/API/inPlay/lastupdate.txt', function(data) {
		var d = new Date();
		var thisTime = d.getTime();
		if( (thisTime/1000) - data > 5 ){
			console.log('update InplayOdds.php greater than 5 second');
			console.log((thisTime/1000) + ' - ' + data);
			$.ajax(base_url+"php/inplay.php", {
				success: function(){
					console.log('update Inplay.php');

					$.ajax(base_url + "bets/updateInplayOdds", {
						type: "POST",
						dataType: "json",
						data: {
							LastUpdate: $('#lastupdate').val(),
							Matches: events
						},
						headers: {
						},
						success: function(result) {
				//			console.log(result);
							if (result.data == 'NoUpdate') {
								setTimeout(function() {
									updateOdds()
								}, 1000);
							}
							else {
								$('#lastupdate').val(result.lastUpdate);
				//				console.log(result.data);
				//				console.log(updateInplayOdds(result.data));

								console.log('go to sports function');
								updateInplayOdds(result.data);
								updateBetslipOdds(result.data);
								setTimeout(function() {
									updateOdds();
				//					console.log('inplay odds updated');
				//					$.ajax(base_url+"php/inplay.php");
								}, 30000);
							}
						},
						error: function() {
				//			console.log(events);
							console.log('error');
							setTimeout(function() {
								updateOdds()
							}, 1000);
						}
					});
				},
				error: function(){
					console.log('Error Inplay.php');
					setTimeout(function() {
						ajaxCallUpdateInplayOdds()
					}, 1000);
				}
			});
		}
		else{
			console.log('not update and try after 1 second');
			setTimeout(function() {
						ajaxCallUpdateInplayOdds()
					}, 1000);
		}
	}, 'text');
	
	
    
}