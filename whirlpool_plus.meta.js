// ==UserScript==
// @name            Whirlpool Plus
// @namespace       WhirlpoolPlus
// @description     Adds a suite of extra optional features to the Whirlpool forums.
// @version         5.0.0pre22
// @grant           unsafeWindow
// @grant           GM_addStyle
// @grant           GM_getResourceURL
// @grant           GM_openInTab
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
// @require         https://raw.githubusercontent.com/endorph-soft/wpplus/new-design/resources/js/jquery.min.js
// @require         https://raw.githubusercontent.com/endorph-soft/wpplus/new-design/resources/js/jquery.simplemodal.min.js
// @require         https://raw.githubusercontent.com/endorph-soft/wpplus/new-design/resources/js/tea.js
// @resource        emoticon_angry      https://raw.githubusercontent.com/endorph-soft/wpplus/new-design/resources/png/angry.png
// @resource        emoticon_blushing   https://raw.githubusercontent.com/endorph-soft/wpplus/new-design/resources/png/blushing.png
// @resource        emoticon_confused   https://raw.githubusercontent.com/endorph-soft/wpplus/new-design/resources/png/confused.png
// @resource        emoticon_cool       https://raw.githubusercontent.com/endorph-soft/wpplus/new-design/resources/png/cool.png
// @resource        emoticon_cry        https://raw.githubusercontent.com/endorph-soft/wpplus/new-design/resources/png/crying.png
// @resource        emoticon_frown      https://raw.githubusercontent.com/endorph-soft/wpplus/new-design/resources/png/frown.png
// @resource        emoticon_gasp       https://raw.githubusercontent.com/endorph-soft/wpplus/new-design/resources/png/gasp.png
// @resource        emoticon_grin       https://raw.githubusercontent.com/endorph-soft/wpplus/new-design/resources/png/grin.png
// @resource        emoticon_kiss       https://raw.githubusercontent.com/endorph-soft/wpplus/new-design/resources/png/kiss.png
// @resource        emoticon_lips       https://raw.githubusercontent.com/endorph-soft/wpplus/new-design/resources/png/lips.png
// @resource        emoticon_shout      https://raw.githubusercontent.com/endorph-soft/wpplus/new-design/resources/png/shouting.png
// @resource        emoticon_sleep      https://raw.githubusercontent.com/endorph-soft/wpplus/new-design/resources/png/sleeping.png
// @resource        emoticon_smile      https://raw.githubusercontent.com/endorph-soft/wpplus/new-design/resources/png/smile.png
// @resource        emoticon_smirk      https://raw.githubusercontent.com/endorph-soft/wpplus/new-design/resources/png/smirk.png
// @resource        emoticon_straight   https://raw.githubusercontent.com/endorph-soft/wpplus/new-design/resources/png/straight.png
// @resource        emoticon_tongue     https://raw.githubusercontent.com/endorph-soft/wpplus/new-design/resources/png/tongue.png
// @resource        emoticon_wink       https://raw.githubusercontent.com/endorph-soft/wpplus/new-design/resources/png/wink.png
// @resource        emoticon_star       https://raw.githubusercontent.com/endorph-soft/wpplus/new-design/resources/png/star.png
// @resource        old_blue_anxious    https://raw.githubusercontent.com/endorph-soft/wpplus/new-design/resources/gif/anxious.gif
// @resource        old_blue_clown      https://raw.githubusercontent.com/endorph-soft/wpplus/new-design/resources/gif/clown.gif
// @resource        old_blue_cool       https://raw.githubusercontent.com/endorph-soft/wpplus/new-design/resources/gif/cool.gif
// @resource        old_blue_eyes       https://raw.githubusercontent.com/endorph-soft/wpplus/new-design/resources/gif/eyes.gif
// @resource        old_blue_grin       https://raw.githubusercontent.com/endorph-soft/wpplus/new-design/resources/gif/grin.gif
// @resource        old_blue_happy      https://raw.githubusercontent.com/endorph-soft/wpplus/new-design/resources/gif/happy.gif
// @resource        old_blue_happy2     https://raw.githubusercontent.com/endorph-soft/wpplus/new-design/resources/gif/happy-2.gif
// @resource        old_blue_neutral    https://raw.githubusercontent.com/endorph-soft/wpplus/new-design/resources/gif/neutral.gif
// @resource        old_blue_ninja      https://raw.githubusercontent.com/endorph-soft/wpplus/new-design/resources/gif/ninja.gif
// @resource        old_blue_sad        https://raw.githubusercontent.com/endorph-soft/wpplus/new-design/resources/gif/sad.gif
// @resource        old_blue_sad2       https://raw.githubusercontent.com/endorph-soft/wpplus/new-design/resources/gif/sad-2.gif
// @resource        old_blue_smirk      https://raw.githubusercontent.com/endorph-soft/wpplus/new-design/resources/gif/smirk.gif
// @resource        old_blue_tongue     https://raw.githubusercontent.com/endorph-soft/wpplus/new-design/resources/gif/tongue.gif
// @resource        loader              https://raw.githubusercontent.com/endorph-soft/wpplus/new-design/resources/gif/loader.gif
// @resource        reload              https://raw.githubusercontent.com/endorph-soft/wpplus/new-design/resources/png/reload.png
// @resource        noavatar            https://raw.githubusercontent.com/endorph-soft/wpplus/new-design/resources/png/noavatar.png
// @resource        waiting             https://raw.githubusercontent.com/endorph-soft/wpplus/new-design/resources/gif/waiting.gif
// @resource        light_gradient      https://raw.githubusercontent.com/endorph-soft/wpplus/new-design/resources/png/lightgradient.png
// @resource        green_note          https://raw.githubusercontent.com/endorph-soft/wpplus/new-design/resources/png/greennote.png
// @resource        red_note            https://raw.githubusercontent.com/endorph-soft/wpplus/new-design/resources/png/rednote.png
// @resource        check               https://raw.githubusercontent.com/endorph-soft/wpplus/new-design/resources/png/check.png
// @resource        cross               https://raw.githubusercontent.com/endorph-soft/wpplus/new-design/resources/png/cross.png
// @resource        gradient            https://raw.githubusercontent.com/endorph-soft/wpplus/new-design/resources/png/gradient.png
// ==/UserScript==