// ==UserScript==
// @name         Escape from travel
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Turn this script on if you need to quickly travel back to torn before getting hospitalized
// @author       Sujal Mandal
// @match        https://www.torn.com/index.php
// @require      https://code.jquery.com/jquery-3.5.1.min.js
// @run-at       document-end
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_deleteValue
// ==/UserScript==

(function() {
    'use strict';
    console.log("Torn city bot loaded!");
    //global variables
    var STATS_API_URL="https://api.torn.com/user/USER_ID?selections=bars&key=API_KEY";
    var API_KEY="YOUR_API_KEY";
    var USER_ID="YOUR_USERNAME";
    var INTERVAL_IN_SECOND=5;
    var INTERVAL=1000*INTERVAL_IN_SECOND;


    //replace and form the stat api url
    STATS_API_URL=STATS_API_URL.replace("USER_ID",USER_ID);
    STATS_API_URL=STATS_API_URL.replace("API_KEY",API_KEY);
    init();
    //main bot logic
    function init(){
        document.querySelector("#travel-home").click()
                    window.setTimeout(function(){
                        document.querySelector("#mainContainer > div.content-wrapper.logged-out.left.summer.travelling > div.travel-home-content.m-top10.m-bottom10 > div.cont-gray10.msg.bottom-round > div > div > button").click()
                    },500)
                   }

})();
