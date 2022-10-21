// ==UserScript==
// @name         no youtube shorts
// @namespace    http://narrowtux.com/
// @version      0.1
// @description  Automatically redirects to the good youtube player with scrubber and without stupid overlays over half the video
// @author       narrowtux
// @match        https://www.youtube.com/shorts/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let url = window.location.href;
    let videoId = url.match(/\/([a-zA-Z0-9]{11})$/)[1]
    console.log(videoId)
    window.location.href = `https://youtube.com/watch?v=${videoId}`
})();
