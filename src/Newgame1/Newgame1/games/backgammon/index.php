<html>
<head>
	
	<?php require_once '../../api/RestApi/game.php';
	
	$game = new Game();
	
	
	$game->check_login();
	
	$game_id = $game->get_game_id('backgammon');
	$game->set_cookie('game', $game_id);
	if ( isset($_COOKIE['code']) ){
		$code = $_COOKIE['code'];
		$game->set_gamer_token( $game_id, $code );
	}
	
	?>
	
	<title>Backgammon</title>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0" />
	<meta name="apple-mobile-web-app-capable" content="yes" />
	<meta name="format-detection" content="telephone=no">
	<meta name="msapplication-tap-highlight" content="no">
    <link href="../../../attachment/setting/favicon.ico" rel="shortcut icon" type="image/x-icon" />
	<link rel="stylesheet" href="../../default/modules/games/backgammon/css/reset.css" />
	<link rel="stylesheet" href="../../default/modules/games/backgammon/css/sweetalert.css" />
	<link rel="stylesheet" href="../../default/modules/games/backgammon/css/animation.css" />
	<link rel="stylesheet" href="../../default/modules/games/backgammon/css/style.css?v1.0.9" />
	<link rel="stylesheet" href="../../default/modules/sezar/style.css" />
	
	<script type="text/javascript">
		var DEVICE_TYPE	= 'browser';
		var MONEY_FORMAT = [0,'.',','];
		var API_URL	= 'http://136.243.255.205:3001/api/';
		var GAME_FOLDER = '../../default/modules/games/backgammon/';
		var HOME_URL = '/games';
		var MAIN_URL = '../../games/backgammon/';

		var ADDITIONAL_FILES = [];
				
	</script>
    <script type="text/javascript" src="../../default/modules/games/backgammon/js/jquery.js"></script>
  	<script type="text/javascript" src="../../default/modules/games/backgammon/js/jquery-ui.js"></script>
  	<script type="text/javascript" src="../../default/modules/games/backgammon/js/jquery.ui.touch-punch.min.js"></script>
    <script type="text/javascript" src="../../default/modules/games/backgammon/js/jquery.maskedinput.js"></script>
    <script type="text/javascript" src="../../default/modules/games/backgammon/js/sweetalert.min.js"></script>
    <script type="text/javascript" src="../../default/modules/games/backgammon/js/game.min.js?000.008"></script>

	<style>
									</style>

	<style>
		.doublepassive { opacity: 0.2; filter: alpha(opacity=20); }
	</style>

</head>
<body oncontextmenu="return false">
	

	<div style="pointer-events: none; width: 100%; height: 150%; position: absolute; left: 0px; top: 0px;"></div>
	
	<div class="background"></div>
	<canvas id="canvas_holder" class="background_canvas" style="pointer-events: none;"></canvas>

	<div id="main_container" class="main_container">

		<!-- Splash screen -->
		<div id="splash_screen" class="screen">
			<table class="middle">
				<tr>
					<td><img src="../../default/modules/games/backgammon/assets/logo.png" class="logo"></td>
				</tr>
			</table>
		</div>

		<!-- Loading screen -->
		<div id="loading_screen" class="screen hidden">
			<table class="middle">
				<tr>
					<td align="center">
						<img src="../../default/modules/games/backgammon/assets/loading.png" class="loading"><br />
						<center>
							<div align="left" class="loading_bar hidden">
								<div id="loading_indicator" class="bar"></div>
							</div>
						</center>
					</td>
				</tr>
			</table>
		</div>

		<!-- Disconnect screen -->
		<div id="disconnect_screen" class="screen hidden">
			<table class="middle">
				<tr>
					<td>
						<center>
							<img src="../../default/modules/games/backgammon/assets/logo.png" height="150">
							<div class="margin_10 white_font lang_31">Bağlantınız Koptu!</div>
							<a href="javascript:;" class="refresh_button red_button lang_32">Tekrar bağlan</a>
						</center>
					</td>
				</tr>
			</table>
		</div>

		<!-- Friends screen -->
		<div id="friends_screen" class="screen hidden">
			<table class="middle">
				<tr height="50">
					<td>
						<div class="top_bar">
							<div class="left back_to_lobby clickable"><img src="../../default/modules/games/backgammon/assets/back.png"></div>
							<div class="title"><span class="lang_70">Arkadaş Listesi</span></div>
							<div class="clear"></div>
						</div>
					</td>
				</tr>
				<tr>
					<td align="center">
						<div align="center" class="form_area">
							<center id="friends_list">
								<table class="support_table">
									<tr class="black_back">
										<td>
											<div class="left margin_5">İsim</div>
											<div class="right margin_5">İsim</div>
											<div class="clear"></div>
										</td>
									</tr>
									<tr class="black_back">
										<td>
											<div class="margin_5">Hiç arkadaşınız bulunmuyor</div>
										</td>
									</tr>
								</table>
							</center>
						</div>
					</td>
				</tr>
			</table>
		</div>

		<!-- Lobby screen -->
		<div id="lobby_screen" class="screen hidden">
			<div class="landscape relative">

				<div class="top_left_panel">
					<div class="left"><img id="profile_photo" src="../../default/modules/games/backgammon/assets/placeholder.png" class="clickable settings_button" height="100%"></div>
					<div class="left margin_l10 clickable cashier_button">
						<div class="top_left_name">[Username]</div>
						<div class="top_left_chips">[Chips]</div>
					</div>
					<div class="clear"></div>
				</div>

				<div class="top_right_panel">
					<div class="right margin_r10"><img src="../../default/modules/games/backgammon/assets/home.png" height="100%" class="clickable home_button"></div>
					
<!--					<div class="right margin_r10"><img src="../../default/modules/games/backgammon/assets/friends.png" height="100%" class="clickable friends_button"></div>-->
					
					<div class="clear"></div>
				</div>
				
				<div class="center_panel">
					<table class="middle">
						<tr>
							<td>
								<center>
									<table width="70%">
										<tr>
											<td width="50"><img src="../../default/modules/games/backgammon/assets/minus.png" width="50" class="clickable bet_selector_minus"></td>
											<td>
												<center>
													<div class="bet_holder">
														<div align="left" class="bet_holder_bg round_10">
															<div class="bet_holder_bg_in round_10"></div>
														</div>
														<div align="left">
															<div class="bet_indicator round_10"></div>
														</div>
													</div>
												</center>
											</td>
											<td width="50"><img src="../../default/modules/games/backgammon/assets/plus.png" width="50" class="clickable bet_selector_plus"></td>
										</tr>
									</table>
									<!--<a href="javascript:;" id="play_button" class="clickable white_button margin_t35 medium_font">Play for 1.000 $</a>-->
									<a href="javascript:;" id="play_button" class="clickable margin_t35 medium_font myButton">Play for 1.000 $</a>
									
<!--									<div id="double_button_div"><a href="javascript:;" id="double_button" class="clickable margin_t15 myButtonDouble" style="font-size: 1.5vw !important;"><img id="double_game_image" src="../../default/modules/games/pasoor/assets/check.png" style="visibility: hidden; width: 1.5vw !important;">&nbsp;<span class="lang_71">Double Bet</span></a></div>-->
<!--
									
                                        <style>
                                            @media screen and (max-width: 1000px) {
                                                #double_button_div { display: inline-block; }
                                            }
                                        </style>
-->
									
								</center>
							</td>
						</tr>
					</table>
				</div>

				<div class="bottom_left_panel">
				</div>

				<div class="bottom_right_panel">
				</div>
				
				<center>
					<div id="waiting_players" style="position: absolute; width: 100%; height: 25%; left: 0px; bottom: 0px; color: #fff; font-size: 1.5vw !important; line-height: 150%; overflow: hidden;"></div>
				</center>	
				
			</div>
			<table class="portrait middle">
				<tr>
					<td>
						<img src="../../default/modules/games/backgammon/assets/landscape.png" class="landscape_icon">
						<div class="white_font lang_46">Lütfen telefonunuzu yatay konuma getirin.</div>
					</td>
				</tr>
			</table>
		</div>

		<!-- Searching screen -->
		<div id="searching_screen" class="screen hidden">
			<table class="middle">
				<tr>
					<td>
						<div id="cssload-contain">
							<div class="cssload-wrap" id="cssload-wrap1">
								<div class="cssload-ball" id="cssload-ball1"></div>
							</div>
							<div class="cssload-wrap" id="cssload-wrap2">
								<div class="cssload-ball" id="cssload-ball2"></div>
							</div>
							<div class="cssload-wrap" id="cssload-wrap3">
								<div class="cssload-ball" id="cssload-ball3"></div>
							</div>
							<div class="cssload-wrap" id="cssload-wrap4">
								<div class="cssload-ball" id="cssload-ball4"></div>
							</div>
						</div>
						<div class="green_font margin_t70 lang_47">Oynayacak oyuncu aranıyor</div>
						<div class="white_font margin_t7 font_12 lang_48">lütfen bekleyin</div>
						<div><a href="javascript:;" id="cancel_button" class="clickable white_button margin_t35 lang_49">İptal Et</a></div>
					</td>
				</tr>
			</table>
		</div>

		<!-- Game screen -->
		<div id="game_screen" class="screen hidden">
			<table class="landscape middle">
				<tr>
					<td id="game_container" align="center" width="86.95%">
						<!-- Container -->
					</td>
					<td id="panel_container" width="22%">
						<table class="middle">
							<tr height="10%">
								<td>
									<a href="javascript:;" id="exit_button" class="exit_button clickable round_5 lang_50">ÇIKIŞ</a>
									<img id="sound_icon" src="../../default/modules/games/backgammon/assets/sound_0.png" class="clickable" style="height: 24px; position: absolute; top: 15px; right: 15px; margin-top: 0px;">
									<div style="width: 100%; height: 24px; position: absolute; top: 0px;"><img id="double_icon" src="../../default/modules/games/backgammon/assets/double.png" class="clickable" style="height: 24px; position: absolute; top: 15px; left: 15px; margin-top: 0px; display: none;"></div>
									<div style="width: 22%; position: absolute; top: 50%; right: 0px; transform: translate(0,-50%);"><center><div id="game_amount_place" style="font-size: 1.2vw; color: #fff; display: inline-block; background: #000; padding: 4px; border-radius: 3px;">Amount</div></center></div>
								</td>
							</tr>
							<tr height="30%">
								<td>
									<div><img id="opponent_photo" class="clickable" src="../../default/modules/games/backgammon/assets/placeholder.png" width="50%"></div>
									<div id="opponent_name" class="white_font bold_font margin_t7" style="max-width: 80px; overflow: hidden;">[name]</div>
									<center>
										<div class="turn_holder">
											<div align="left" class="turn_container opponent_turn">
												<div class="turn_bar"></div>
											</div>
										</div>
									</center>
								</td>
							</tr>
							<tr height="20%">
								<td id="user_dices_area">
									<div id="last_dices">
										<img src="../../default/modules/games/backgammon/assets/dice/6.png" class="last_dices_first">&nbsp;
										<img src="../../default/modules/games/backgammon/assets/dice/6.png" class="last_dices_second">
									</div>
								</td>
								<td>
<!--
										<div class="dice_container_left">
											<section class="game_dice">
												<div class="left">
													<div class="dice first_dice" style="transform: rotateX(20deg) rotateY(92deg);">
														<div class="sf f1"></div>
														<div class="sf f2"></div>
														<div class="sf f3"></div>
														<div class="sf f4"></div>
														<div class="sf f5"></div>
														<div class="sf f6"></div>
													</div>
												</div>
												<div class="left dice_space">
													<div class="dice second_dice" style="transform: rotateX(30deg) rotateY(60deg);">
														<div class="sf f1"></div>
														<div class="sf f2"></div>
														<div class="sf f3"></div>
														<div class="sf f4"></div>
														<div class="sf f5"></div>
														<div class="sf f6"></div>
													</div>
												</div>
												<div class="clear"></div>
											</section>
										</div>
-->

								</td>
							</tr>
							<tr height="30%">
								<td>
									<div><img id="my_photo" src="../../default/modules/games/backgammon/assets/placeholder.png" width="50%"></div>
									<div id="my_name" class="white_font bold_font margin_t7" style="max-width: 80px; overflow: hidden;">[name]</div>
									<center>
										<div class="turn_holder">
											<div align="left" class="turn_container my_turn">
												<div class="turn_bar"></div>
											</div>
										</div>
									</center>
								</td>
							</tr>
							<tr height="10%">
								<td>
<!--									<a href="javascript:;" id="chat_button" class="chat_button clickable round_5 lang_51">CHAT</a>-->
								</td>
							</tr>
						</table>
					</td>
				</tr>
			</table>
			<table class="portrait middle">
				<tr>
					<td>
						<img src="../../default/modules/games/backgammon/assets/landscape.png" class="landscape_icon">
						<div class="white_font lang_46">Lütfen telefonunuzu yatay konuma getirin.</div>
					</td>
				</tr>
			</table>
			<div class="dice_container landscape">
				<!-- Zar Alanı -->		
<!--
				<div class="dice_container_left">
					<section class="game_dice">	
						<div class="left">
							<div class="dice first_dice">
								<div class="sf f1"></div>
								<div class="sf f2"></div>
								<div class="sf f3"></div>
								<div class="sf f4"></div>
								<div class="sf f5"></div>
								<div class="sf f6"></div>
							</div>
						</div>
						<div class="clear"></div>
					</section>
				</div>
				<div class="dice_container_right">
					<section class="game_dice">
						<div class="left">
							<div class="dice second_dice">
								<div class="sf f1"></div>
								<div class="sf f2"></div>
								<div class="sf f3"></div>
								<div class="sf f4"></div>
								<div class="sf f5">
								</div>
								<div class="sf f6"></div>
							</div>
						</div>
						<div class="clear"></div>
					</section>
				</div>
-->
			</div>
						
			<div class="play_again_button landscape clickable round_5 lang_52">Geri Al</div>
			<div class="message_alert landscape round_5">Message</div>
			
			<div class="game_result landscape clickable">
				<div align="center" class="game_result_border">
					<div class="result_for_loser"><img src="../../default/modules/games/backgammon/assets/logo.png" height="40%" style="max-height: 150px;"></div>
					<div class="result_for_loser game_result_title1 round_10 lang_53">KAYBETTİN!</div>
					<div class="result_for_winner game_result_title2 round_10 lang_54">TEBRİKLER!</div><span class="result_for_winner"><br /><br /></span>
					<div class="result_for_winner game_result_title3">1.500,00 $ Ödül Kazandın!</div>
					<div><a href="javascript:;" class="white_button margin_t15 medium_font lang_55">Kapat</a></div>
				</div>
			</div>

			<div class="chat_area landscape">
				<div class="chat_area_overlay clickable"></div>
				<div class="chat_table_container box">
					<table class="middle white_font">
						<tr>
							<td>
								<div class="chat_text_container clickable" style="word-break: break-all;">
								</div>
							</td>
						</tr>
						<tr height="60">
							<td class="chat_buttons_container">
								<center>
								  <form method="post" action="#" onsubmit="$('#chat_message_send').click(); return false;" style="margin: 0px; padding: 0px;">
									<div class="hidden"><input type="submit" class="hidden"></div>
									<div class="first_div"><input type="text" id="chat_message_text"></div>
									<div class="second_div"><a href="javascript:;" id="chat_message_send" class="box clickable round_5 lang_56">Yolla</a></div>
									<div class="clear"></div>
								  </form>
								</center>
							</td>
						</tr>
					</table>
				</div>
				<div class="clear"></div>
			</div>

		</div>

	</div>

	<!-- SES DOSYALARI -->
	<audio id="sound_dice" controls class="hidden"><source src="../../default/modules/games/backgammon/assets/sounds/dice.wav" type="audio/mpeg"></audio>
	<audio id="sound_pawn" controls class="hidden"><source src="../../default/modules/games/backgammon/assets/sounds/pawn.wav" type="audio/mpeg"></audio>

	<script>
		if(window.self === window.top) {
			setInterval(function() {
				$.get("/ping");
			}, 200000);
		}
	</script>
	
</body>
</html>