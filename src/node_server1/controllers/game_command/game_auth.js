// JavaScript Document


var express     = require('express');
var bodyParser  = require('body-parser');
var randomstring = require("randomstring");


function check_auth_by_game_id ( data, callback){
	
	switch ( data.game_id ){
		case '1':{
			callback( auth_roulette(data) );
			break;
		}
		case '2':{
			callback( auth_baccarat(data) );
			break;
		}
		case '5':{
			callback( auth_rps(data) );
			break;
		}
		case '6':{
			callback( auth_backgammon(data) );
			break;
		}
	}
	
}


function auth_roulette ( online_gamer, users){
	
	var return_array = {
					command   	: "auth",
					uid			: online_gamer.user_id,
					token		: online_gamer.token,
					chips		: online_gamer.cash,
					name		: online_gamer.username,
					photo		: '',
					currency	: 0,
				};
	
	return return_array;
}

function auth_baccarat ( online_gamer, users){
	
	var return_array = {
					command   	: "auth",
					uid			: online_gamer.user_id,
					token		: online_gamer.token,
					chips		: online_gamer.cash,
					name		: online_gamer.username,
					photo		: '',
					currency	: 0,
				};
	
	return return_array;
}

function auth_rps ( online_gamer){
	
	var return_array = {
					command   	: "auth",
					uid			: online_gamer.user_id,
					token		: online_gamer.token,
					chips		: online_gamer.cash,
					name		: online_gamer.username,
					photo		: '',
					currency	: 0,
					friends	: 5,
					level		: 2,
					bets		: ["1000","2000","3000","4000","5000","6000","7000","8000","9000","10000"]
	};
	
		
	return return_array;
}

function auth_backgammon ( online_gamer){
	
	var return_array = {
					command   	: "auth",
					uid			: online_gamer.user_id,
					token		: online_gamer.token,
					chips		: online_gamer.cash,
					name		: online_gamer.username,
					photo		: '',
					currency	: 0,
					friends	: 5,
					level		: 2,
					bets		: ["1000","2000","3000","4000","5000","6000","7000","8000","9000","10000"]
	};
	
		
	return return_array;
}



module.exports = {
    check_auth_by_game_id: check_auth_by_game_id,
};