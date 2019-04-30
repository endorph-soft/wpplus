// ==UserScript==
// @name            Whirlpool Plus
// @namespace       WhirlpoolPlus
// @description     Adds a suite of extra optional features to the Whirlpool forums.
// @version         5.3.6
// @updateURL       https://raw.githubusercontent.com/endorph-soft/wpplus/master/whirlpool_plus.meta.js
// @downloadURL     https://raw.githubusercontent.com/endorph-soft/wpplus/master/whirlpool_plus.user.js
// @grant           unsafeWindow
// @grant           GM_addStyle
// @grant           GM_getResourceURL
// @grant           GM_getResourceText
// @grant           GM_openInTab
// @grant           GM.addStyle
// @grant           GM.getResourceUrl
// @grant           GM.openInTab
// @match           *://forums.whirlpool.net.au/*
// @match           *://bc.whirlpool.net.au/*
// @match           *://whirlpool.net.au/*
// @exclude         *://whirlpool.net.au/blog/*
// @exclude         *://whirlpool.net.au/api/*
// @exclude         *://forums.whirlpool.net.au/api/*
// @require         https://raw.githubusercontent.com/phyco1991/wpplus/master/resources/js/jquery.min.js
// @require         https://raw.githubusercontent.com/phyco1991/wpplus/master/resources/js/jquery.simplemodal.min.js
// @require         https://raw.githubusercontent.com/phyco1991/wpplus/master/resources/js/prettify.js
// @require         https://raw.githubusercontent.com/endorph-soft/wpplus/master/resources/js/tea.js
// @require         https://raw.githubusercontent.com/phyco1991/wpplus/master/resources/js/sha.js
// @require         https://raw.githubusercontent.com/greasemonkey/gm4-polyfill/master/gm4-polyfill.js
// @require         https://raw.githubusercontent.com/phyco1991/wpplus/master/resources/js/blazy.min.js
// @require         https://raw.githubusercontent.com/phyco1991/wpplus/master/resources/js/emojify.min.js
// @require         https://raw.githubusercontent.com/phyco1991/wpplus/master/resources/js/jquery.leanModal.min.js
// @resource        loader              https://raw.githubusercontent.com/endorph-soft/wpplus/master/resources/gif/loader.gif
// @resource        noavatar            https://raw.githubusercontent.com/endorph-soft/wpplus/master/resources/png/noavatar.png
// @resource        waiting             https://raw.githubusercontent.com/endorph-soft/wpplus/master/resources/gif/waiting.gif
// @resource        light_gradient      https://raw.githubusercontent.com/endorph-soft/wpplus/master/resources/png/lightgradient.png
// @resource        green_note          https://raw.githubusercontent.com/endorph-soft/wpplus/master/resources/png/greennote.png
// @resource        red_note            https://raw.githubusercontent.com/endorph-soft/wpplus/master/resources/png/rednote.png
// @resource        check               https://raw.githubusercontent.com/endorph-soft/wpplus/master/resources/png/check.png
// @resource        cross               https://raw.githubusercontent.com/endorph-soft/wpplus/master/resources/png/cross.png
// @resource        gradient            https://raw.githubusercontent.com/endorph-soft/wpplus/master/resources/png/gradient.png
// @resource        wp_plus_logo        https://raw.githubusercontent.com/phyco1991/wpplus/master/resources/png/wp_plus.png
// @resource        small_whirl_logo    https://raw.githubusercontent.com/phyco1991/wpplus/master/resources/png/whirlpool.png
// @resource        prettify            https://raw.githubusercontent.com/phyco1991/wpplus/master/resources/css/prettify.css
// @resource        oldfont             https://raw.githubusercontent.com/phyco1991/wpplus/master/resources/css/wpoldfontfix.css
// ==/UserScript==