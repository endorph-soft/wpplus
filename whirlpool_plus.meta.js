// ==UserScript==
// @name            Whirlpool Plus
// @namespace       WhirlpoolPlus
// @description     Adds a suite of extra optional features to the Whirlpool forums.
// @version         5.0.1
// @updateURL       https://raw.githubusercontent.com/endorph-soft/wpplus/master/whirlpool_plus.meta.js
// @downloadURL     https://raw.githubusercontent.com/endorph-soft/wpplus/master/whirlpool_plus.user.js
// @grant           unsafeWindow
// @grant           GM_addStyle
// @grant           GM_getResourceURL
// @grant           GM_getResourceText
// @grant           GM_openInTab
// @include         http://forums.whirlpool.net.au/*
// @include         https://forums.whirlpool.net.au/*
// @include         http://forums.whirlpool.net.au/whim-send*
// @include         https://forums.whirlpool.net.au/whim-send*
// @include         http://forums.whirlpool.net.au/forum-replies.cfm*p=-2*
// @include         https://forums.whirlpool.net.au/forum-replies.cfm*p=-2*
// @include         http://forums.whirlpool.net.au/forum-replies.cfm*&ux* 
// @include         https://forums.whirlpool.net.au/forum-replies.cfm*&ux* 
// @include         http://forums.whirlpool.net.au/archive/*
// @include         https://forums.whirlpool.net.au/archive/*
// @include         http://whirlpool.net.au/*
// @include         https://whirlpool.net.au/*
// @exclude         http://whirlpool.net.au/blog/*
// @exclude         https://whirlpool.net.au/blog/*
// @require         https://raw.githubusercontent.com/endorph-soft/wpplus/master/resources/js/jquery.min.js
// @require         https://raw.githubusercontent.com/endorph-soft/wpplus/master/resources/js/jquery.simplemodal.min.js
// @require         https://raw.githubusercontent.com/phyco1991/wpplus/master/resources/js/prettify.js
// @require         https://raw.githubusercontent.com/endorph-soft/wpplus/master/resources/js/tea.js
// @resource        emoticon_angry      https://raw.githubusercontent.com/endorph-soft/wpplus/master/resources/png/angry.png
// @resource        emoticon_blushing   https://raw.githubusercontent.com/endorph-soft/wpplus/master/resources/png/blushing.png
// @resource        emoticon_confused   https://raw.githubusercontent.com/endorph-soft/wpplus/master/resources/png/confused.png
// @resource        emoticon_cool       https://raw.githubusercontent.com/endorph-soft/wpplus/master/resources/png/cool.png
// @resource        emoticon_cry        https://raw.githubusercontent.com/endorph-soft/wpplus/master/resources/png/crying.png
// @resource        emoticon_frown      https://raw.githubusercontent.com/endorph-soft/wpplus/master/resources/png/frown.png
// @resource        emoticon_gasp       https://raw.githubusercontent.com/endorph-soft/wpplus/master/resources/png/gasp.png
// @resource        emoticon_grin       https://raw.githubusercontent.com/endorph-soft/wpplus/master/resources/png/grin.png
// @resource        emoticon_kiss       https://raw.githubusercontent.com/endorph-soft/wpplus/master/resources/png/kiss.png
// @resource        emoticon_lips       https://raw.githubusercontent.com/endorph-soft/wpplus/master/resources/png/lips.png
// @resource        emoticon_shout      https://raw.githubusercontent.com/endorph-soft/wpplus/master/resources/png/shouting.png
// @resource        emoticon_sleep      https://raw.githubusercontent.com/endorph-soft/wpplus/master/resources/png/sleeping.png
// @resource        emoticon_smile      https://raw.githubusercontent.com/endorph-soft/wpplus/master/resources/png/smile.png
// @resource        emoticon_smirk      https://raw.githubusercontent.com/endorph-soft/wpplus/master/resources/png/smirk.png
// @resource        emoticon_straight   https://raw.githubusercontent.com/endorph-soft/wpplus/master/resources/png/straight.png
// @resource        emoticon_tongue     https://raw.githubusercontent.com/endorph-soft/wpplus/master/resources/png/tongue.png
// @resource        emoticon_wink       https://raw.githubusercontent.com/endorph-soft/wpplus/master/resources/png/wink.png
// @resource        emoticon_star       https://raw.githubusercontent.com/endorph-soft/wpplus/master/resources/png/star.png
// @resource        old_blue_anxious    https://raw.githubusercontent.com/endorph-soft/wpplus/master/resources/gif/anxious.gif
// @resource        old_blue_clown      https://raw.githubusercontent.com/endorph-soft/wpplus/master/resources/gif/clown.gif
// @resource        old_blue_cool       https://raw.githubusercontent.com/endorph-soft/wpplus/master/resources/gif/cool.gif
// @resource        old_blue_eyes       https://raw.githubusercontent.com/endorph-soft/wpplus/master/resources/gif/eyes.gif
// @resource        old_blue_grin       https://raw.githubusercontent.com/endorph-soft/wpplus/master/resources/gif/grin.gif
// @resource        old_blue_happy      https://raw.githubusercontent.com/endorph-soft/wpplus/master/resources/gif/happy.gif
// @resource        old_blue_happy2     https://raw.githubusercontent.com/endorph-soft/wpplus/master/resources/gif/happy-2.gif
// @resource        old_blue_neutral    https://raw.githubusercontent.com/endorph-soft/wpplus/master/resources/gif/neutral.gif
// @resource        old_blue_ninja      https://raw.githubusercontent.com/endorph-soft/wpplus/master/resources/gif/ninja.gif
// @resource        old_blue_sad        https://raw.githubusercontent.com/endorph-soft/wpplus/master/resources/gif/sad.gif
// @resource        old_blue_sad2       https://raw.githubusercontent.com/endorph-soft/wpplus/master/resources/gif/sad-2.gif
// @resource        old_blue_smirk      https://raw.githubusercontent.com/endorph-soft/wpplus/master/resources/gif/smirk.gif
// @resource        old_blue_tongue     https://raw.githubusercontent.com/endorph-soft/wpplus/master/resources/gif/tongue.gif
// @resource        loader              https://raw.githubusercontent.com/endorph-soft/wpplus/master/resources/gif/loader.gif
// @resource        reload              https://raw.githubusercontent.com/endorph-soft/wpplus/master/resources/png/reload.png
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