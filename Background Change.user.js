// ==UserScript==
// @name         Background Change
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://*.jstris.jezevec10.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    window.addEventListener('load', function(){
        //Jstris Custom Background Image
        document.head.getElementsByTagName("style")[0].innerHTML="";
        document.body.style.backgroundImage="url('https://i.imgur.com/n1oFStN.png')";
        //document.body.style.backgroundImage.opacity = "1";
        document.body.style.backgroundSize="100%";
        document.getElementById("app").style.backgroundColor="rgba(0, 0, 0, 0)";
        document.getElementById("app").style.height="1000px";
    });
})();