// ==UserScript==
// @name            Whirlpool Plus
// @namespace       WhirlpoolPlus
// @description     Adds a suite of extra optional features to the Whirlpool forums.
// @version         5.0.0pre2
// @grant           unsafeWindow
// @grant           GM_addStyle
// @grant           GM_getResourceURL
// @grant           GM_getResourceText
// @grant           GM_xmlhttpRequest
// @include         http://forums.whirlpool.net.au/*
// @include         https://forums.whirlpool.net.au/*
// @exclude         http://forums.whirlpool.net.au/whim-send*
// @exclude         https://forums.whirlpool.net.au/whim-send*
// @exclude         http://forums.whirlpool.net.au/forum-replies.cfm*p=-2*
// @exclude         https://forums.whirlpool.net.au/forum-replies.cfm*p=-2*
// @exclude         http://forums.whirlpool.net.au/forum-replies.cfm*&ux* 
// @exclude         https://forums.whirlpool.net.au/forum-replies.cfm*&ux* 
// @exclude         http://forums.whirlpool.net.au/archive/*
// @exclude         https://forums.whirlpool.net.au/archive/*
// @require         https://code.jquery.com/jquery-2.1.1.min.js
// @require         https://wpplus.endorph.net/resources/js/min/delayedLoad.jquery.simplemodal.js
// @require         https://wpplus.endorph.net/resources/js/min/delayedLoad.jquery.autosize.js
// @require         https://wpplus.endorph.net/resources/js/min/prettify.js
// @require         https://wpplus.endorph.net/resources/js/min/tea.js
// @require         https://wpplus.endorph.net/resources/js/min/lang-css.js
// @require         https://wpplus.endorph.net/resources/js/min/lang-sql.js
// @resource        emoticon_angry      https://wpplus.endorph.net/resources/png/angry.png
// @resource        emoticon_blushing   https://wpplus.endorph.net/resources/png/blushing.png
// @resource        emoticon_confused   https://wpplus.endorph.net/resources/png/confused.png
// @resource        emoticon_cool       https://wpplus.endorph.net/resources/png/cool.png
// @resource        emoticon_cry        https://wpplus.endorph.net/resources/png/crying.png
// @resource        emoticon_frown      https://wpplus.endorph.net/resources/png/frown.png
// @resource        emoticon_gasp       https://wpplus.endorph.net/resources/png/gasp.png
// @resource        emoticon_grin       https://wpplus.endorph.net/resources/png/grin.png
// @resource        emoticon_kiss       https://wpplus.endorph.net/resources/png/kiss.png
// @resource        emoticon_lips       https://wpplus.endorph.net/resources/png/lips.png
// @resource        emoticon_shout      https://wpplus.endorph.net/resources/png/shouting.png
// @resource        emoticon_sleep      https://wpplus.endorph.net/resources/png/sleeping.png
// @resource        emoticon_smile      https://wpplus.endorph.net/resources/png/smile.png
// @resource        emoticon_smirk      https://wpplus.endorph.net/resources/png/smirk.png
// @resource        emoticon_straight   https://wpplus.endorph.net/resources/png/straight.png
// @resource        emoticon_tongue     https://wpplus.endorph.net/resources/png/tongue.png
// @resource        emoticon_wink       https://wpplus.endorph.net/resources/png/wink.png
// @resource        emoticon_star       https://wpplus.endorph.net/resources/png/star.png
// @resource        old_blue_anxious    https://wpplus.endorph.net/resources/gif/anxious.gif
// @resource        old_blue_clown      https://wpplus.endorph.net/resources/gif/clown.gif
// @resource        old_blue_cool       https://wpplus.endorph.net/resources/gif/cool.gif
// @resource        old_blue_eyes       https://wpplus.endorph.net/resources/gif/eyes.gif
// @resource        old_blue_grin       https://wpplus.endorph.net/resources/gif/grin.gif
// @resource        old_blue_happy      https://wpplus.endorph.net/resources/gif/happy.gif
// @resource        old_blue_happy2     https://wpplus.endorph.net/resources/gif/happy-2.gif
// @resource        old_blue_neutral    https://wpplus.endorph.net/resources/gif/neutral.gif
// @resource        old_blue_ninja      https://wpplus.endorph.net/resources/gif/ninja.gif
// @resource        old_blue_sad        https://wpplus.endorph.net/resources/gif/sad.gif
// @resource        old_blue_sad2       https://wpplus.endorph.net/resources/gif/sad-2.gif
// @resource        old_blue_smirk      https://wpplus.endorph.net/resources/gif/smirk.gif
// @resource        old_blue_tongue     https://wpplus.endorph.net/resources/gif/tongue.gif
// @resource        loader              https://wpplus.endorph.net/resources/gif/loader.gif
// @resource        reload              https://wpplus.endorph.net/resources/png/reload.png
// @resource        wp_plus_logo        https://wpplus.endorph.net/resources/png/wp_plus.png
// @resource        prettify            https://wpplus.endorph.net/resources/css/prettify.css
// @resource        noavatar            https://wpplus.endorph.net/resources/png/noavatar.png
// @resource        waiting             https://wpplus.endorph.net/resources/gif/waiting.gif
// @resource        focusedthread       https://wpplus.endorph.net/resources/png/focusedthread.png
// @resource        small_whirl_logo    https://wpplus.endorph.net/resources/png/whirlpool.png
// @resource        light_gradient      https://wpplus.endorph.net/resources/png/lightgradient.png
// @resource        green_note          https://wpplus.endorph.net/resources/png/greennote.png
// @resource        red_note            https://wpplus.endorph.net/resources/png/rednote.png
// @resource        check               https://wpplus.endorph.net/resources/png/check.png
// @resource        cross               https://wpplus.endorph.net/resources/png/cross.png
// ==/UserScript==