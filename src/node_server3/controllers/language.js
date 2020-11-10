/**
 * Created by Muhammad-ASUS on 8/10/2018.
 */



function language(  callback ) {

    callback(
        {
            "code": 200,
            "result": "ok",
            "data": {
                "okey": "تایید",
                "poker_tournament": "شروع بازی پس از نشست تمامی بازیکنان، مدت زمان بازی ۱ ساعت و آخرین نفری که دارای بالاترین مبلغ در انتهای بازی باشد برنده جایزه این تورنومنت میگیرد",
                "chat_left": " میز را ترک کرد {name} ",
                "chat_join": " وارد بازی شد {name}",
                "chat_win": " برنده شد {amount}{name} ",
                "lo_play_now": "شروع بازی",
                "lo_select_table": "انتخاب میز",
                "currency": "تومان",
                "gh_highcard": "کارت بالا",
                "gh_per": "پر",
                "gh_doper": "دو پر",
                "gh_set": "سه",
                "gh_straight": "ردیف",
                "gh_flush": "رنگ",
                "gh_full": "فول",
                "gh_four": "کاره",
                "gh_straight_flush": "ردیف رنگ",
                "gh_royal_flush": "! رویال فلاش !",
                "chat_send": "ارسال",
                "not_enough_chips": "مقدار چیپ شما برای ورود به این میز کافی نیست",
                "profile_remove_friend": "حذف از لیست دوستان",
                "profile_add_friend": "اضافه کردن به لیست دوستان",
                "profile_chips": " {amount} : كل موجودی",
                "profile_level": "{level} : رتبه",
                "profile_close": "بستن",
                "friends_offline": "آفلاین",
                "friends_online": "آنلاین",
                "friends_table": "میز",
                "friends_playing": "درحال بازی",
                "friends_watch": "شروع بازی با",
                "has_no_friends": "هیچ کاربری در لیست دوستان شما وجود ندارد",
                "poker_tournament_win": " را برنده شد {amount}برنده تورنومنت شد و مبلغ  {name} ",
                "main_disconnect": "! قطع اتصال",
                "main_connect_again": "اتصال دوباره",
                "ts_bets": "حداقل",
                "ts_min_max": "حداقل/حداکثر",
                "ts_user": "کاربر ها",
                "st_sit": "نشستن",
                "st_min": "حداقل",
                "st_max": "حداکثر",
                "st_total": "موجودی کل ",
                "friends_list": "لیست دوستان",
                "backgammon_not_found": "! حریف یافت نشد لطفا دوباره امتحان کنید",
                "error": "بروز خطا!",
                "backgammon_your_turn": ". شما بازی را شروع می کنید",
                "backgammon_opponent_turn": ". حریف بازی را شروع می کند",
                "backgammon_no_move": "! امکان این حرکت وجود ندارد",
                "backgammon_win_amount": " مبلغ {amount} را برنده شدید",
                "backgammon_exit_confirm": "! آیا از خروج مطمئن هستید ؟\nدر صورت خروج بازی را می بازید ",
                "backgammon_exit_yes": "بله",
                "backgammon_exit_no": "خیر",
                "backgammon_play": " {amount}",
                "invite_text": " دعوت می کند {amount} شما را برای بازی با مبلغ {name} ",
                "invite_accept": "قبول کردن پیشنهاد",
                "invite_decline": "رد کردن پیشنهاد",
                "landscape": "لطفا تلفن خود را در حالت افقی قرار دهید",
                "backgammon_searching": "در حال جستجوی کاربر",
                "please_wait": "لطفا صبر کنید",
                "cancel": "حذف",
                "backgammon_exit": "خروج",
                "backgammon_chat": "مکاتبه",
                "backgammon_go_back": "برگشت",
                "backgammon_loser": "بازنده شدید!",
                "backgammon_winner": "برنده شدید!",
                "backgammon_close": "بستن",
                "roulette_play": "شروع بازی",
                "roulette_win": "برنده شدید {amount}",
                "last_winner": " برنده شد {amount}{name} ",
                "roulette_spin": "چرخاندن",
                "roulette_clear": "پاک کردن",
                "roulette_exit": "خروج",
                "roulette_bet": "مبلغ شرط {amount}",
                "blackjack_rules": "! بازی با ۶ دسته کارت،<br />\nبیمه ۲ به ۱ <br />\nبلک جک ۲ به ۳ ",
                "blackjack_play": "شروع بازی",
                "blackjack_exit": "خروج",
                "blackjack_deal": "دریافت کارت",
                "blackjack_reset": "پاک کردن",
                "blackjack_insurance": "بیمه ۲۱",
                "blackjack_hit": "کارت",
                "blackjack_stand": "ایست",
                "blackjack_double": "شرط ۲ برابر تک کارت",
                "blackjack_split": "تقسیم به ۲ کارت",
                "blackjack_left_amount": "پر برتر",
                "blackjack_center_amount": "مبلغ شرط",
                "blackjack_right_amount": "21+3",
                "blackjack_rear_win": "تومان برنده شدید {amount} مبلغ",
                "blackjack_blackjack": "بلک جک",
                "blackjack_busted": "باخت با کارت",
                "blackjack_winned": "! برنده شدید",
                "blackjack_losed": "باختید",
                "blackjack_pushed": "مساوی برگشت شرط",
                "blackjack_not_blackjack": "بلک جک نشدید",
                "blackjack_win": "تومان برنده شدید {amount} ",
                "slot_jackpot": "تومان {amount} ! جک پات",
                "slot_win": "تومان  برنده شدید {amount} ",
                "slot_pay_table": "پرداخت میز",
                "slot_auto_spin": "بازی اتوماتیک",
                "slot_line": "ردیف",
                "slot_amount": "مبلغ",
                "slot_bet_max": "حداکثر",
                "slot_spin": "چرخاندن",
                "slot_total_lines": "تعداد ردیف ها",
                "slot_bet_amount": "مبلغ شرط",
                "slot_total_amount": "مجموع شرط",
                "slot_balance": "موجودی",
                "slot_free_spin": "چرخاندن  {count} ",
                "roulette_per_click": "هر کلیک",
                "balance": "موجودی : {amount}",
                "roulette_lose": "{amount} باخت",
                "baccarat_rules": "بازی با ۸ دسته کارت<br />\nبرد مساوی ۹ برابر می باشد",
                "baccarat_tie": "مساوی",
                "baccarat_player": "بازیکن",
                "baccarat_banker": "بانکدار",
                "baccarat_tie_win": "برد ۹ برابر مساوی",
                "baccarat_banker_win": "برد بانکدار",
                "baccarat_player_win": "برد بازیکن",
                "pasoor_not_found": "! حریف یافت نشد لطفا دوباره امتحان کنید",
                "pasoor_exit_confirm": "! آیا از خروج مطمئن هستید ؟\nدر صورت خروج بازی را می بازید ",
                "pasoor_exit_yes": "بله",
                "pasoor_exit_no": "خیر",
                "pasoor_win_amount": " مبلغ {amount} را برنده شدید",
                "pasoor_loser": "! بازنده شدید",
                "pasoor_play": " {amount}",
                "pasoor_searching": "در حال جستجوی کاربر",
                "pasoor_exit": "خروج",
                "pasoor_chat": "مکاتبه",
                "pasoor_winner": "! برنده شدید",
                "pasoor_close": "بستن",
                "pasoor_draw": "بازی مساوی",
                "pasoor_score": "جمع امتیاز : {amount}",
                "pasoor_soor": "امتیاز سور : {amount}",
                "pasoor_club": "خاج : {amount}",
                "double_option": "شرط دوبل",
                "double_invite_text": "{amount} شما را براى بازى دوبل دعوت مى نمايد {name}",
                "game_waiting": "{name} در انتظار مبلغ  {amount} مى باشد",
                "game_double_waiting": "{name}   در انتظار بازى دوبل مى باشد {amount}",
                "double_offer_confirm": "آيا از بازى دوبل مطمئن هستيد ؟",
                "double_offer_accept": "حريف پيشنهاد بازى دوبل را مى دهد مبلغ  {amount} در صورت تاييد مبلغ شرط دوبرابر مى شود و بازى ادامه پيدا مى كند، در صورت رد شرط بازى را مى بازيد",
                "accept": "تاييد",
                "dont_accept": "رد شرط و قبول باخت",
                "join": "بازی کن",
                "pool_sticks": "فروشگاه چوب",
                "pool_stripedballs": "توپ ۲رنگ برای شما می باشد",
                "pool_normalballs": "توپ تک رنگ برای شما می باشد",
                "pool_selecthole": "یکی را برای توپ سیاه انتخاب کنید",
                "pool_winner": "شما برنده شدید {amount}",
                "pool_power": "قدرت",
                "pool_angle": "زاویه",
                "pool_guide": "هدف",
                "pool_select": "انتخاب",
                "pool_active": "فعال",
                "zoomout": "صفحه خود را از حالت زوم یا نزدیک در بیاورید",
                "hide_empty": "نمایش میز های پر",
                "rps_total_game": " تعداد {count} دست را برای برد نهایی  .",
                "rps_rock": "سنگ",
                "rps_paper": "کاغذ",
                "rps_scissors": "قیچی",
                "rps_select_hand": "دست خود را انتخاب کنید",
                "rps_selected_hand": "انتخاب شما {name}",
                "game_hokm_waiting": "{count} تعداد بازیکنان در انتظار {amount}",
                "hokm_select": "انتخاب حکم",
                "hokm_rule": "تیمی که ۷ امتیاز بگیرد برنده میشود",
                "crash_play": "شروع بازی",
                "crash_rules": "چطور بازی کنم ؟",
                "crash_fair": "آیا این بازی منصفانه می باشد ؟",
                "crash_next": "شروع بازی S. {time}s",
                "crash_busted": "بسته شد",
                "crash_exit": "خروج",
                "crash_cashout": "برداشت",
                "crash_placebet": "ثبت شرط",
                "crash_cancel": "لغو",
                "crash_betpanel": "پنل شرط",
                "crash_amount": "مبلغ",
                "crash_autocashout": "برداشت اتوماتیک در این ضریب",
                "crash_history": "تاریخچه بازی",
                "crash_chat": "مکاتبه گروهی",
                "crash_players": "بازیکنان",
                "crash_user": "کاربری",
                "crash_bet": "مبلغ شرط",
                "crash_profit": "سود",
                "crash_crash": "انفجار",
                "crash_md5": "MD5",
                "crash_hash": "HASH",
                "crash_join_next": "( در بازی بعدی شرکت کنید)",
                "crash_top_winners": "برترین برنده ها",
                "pool_cue_list": [
                    {
                        "id": "1",
                        "photo": ""
                    },
                    {
                        "id": "2",
                        "photo": "/image/aHR0cDovL2I5MGdhbWVzLnMzLmV1LWNlbnRyYWwtMS5hbWF6b25hd3MuY29tL2Fzc2V0cy8yMDE3MTEvMTUxMTQ3NzEzNy01NzI2LTQ0ODkucG5nQGM1M2FjNThhZDQxNWMxZWU2Y2UyNzA4MTYxNDk5ZWM0"
                    },
                    {
                        "id": "3",
                        "photo": "/image/aHR0cDovL2I5MGdhbWVzLnMzLmV1LWNlbnRyYWwtMS5hbWF6b25hd3MuY29tL2Fzc2V0cy8yMDE3MTEvMTUxMTYzNTE0OS04NDc1LTg5NTQucG5nQDZmOWFmNzc5NjRjNjMwNzVlZjI2OGVjMjQ2Y2M0NmNk"
                    }
                ]
            }
        }
    );
}

module.exports = {
    language: language,
};