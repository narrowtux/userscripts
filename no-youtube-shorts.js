// ==UserScript==
// @name         no youtube shorts
// @namespace    http://narrowtux.com/
// @version      0.4
// @description  Automatically redirects to the good youtube player with scrubber and without stupid overlays over half the video
// @author       narrowtux
// @match        https://www.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function checkUrl() {
        console.log("Checking for Shorts player...")
        let url = window.location.href;
        let videoId = url.match(/\/shorts\/([a-zA-Z0-9_\-]{11})(\?.*)?$/)[1]
        if (videoId) {
            console.log("Replacing old player", videoId)
            window.location.replace(`https://youtube.com/watch?v=${videoId}`)
        }


    }

    let ref;
    function removeShorts() {
        console.log("Removing shorts from subscriptions list ...")
        document.querySelectorAll("span#text.ytd-thumbnail-overlay-time-status-renderer[aria-label=Shorts]").forEach(el => {
            el.closest(".ytd-grid-renderer").remove()
            !!ref && clearInterval(ref);
            ref = null
        })
    }
    ref = setInterval(removeShorts, 200)

    window.addEventListener("yt-page-data-updated", checkUrl)
    checkUrl()
})();
