// ==UserScript==
// @name			Whirlpool Plus
// @namespace		WhirlpoolPlus
// @description		Adds a suite of extra optional features to the Whirlpool forums.
// @version			4.5.8
// @grant			unsafeWindow
// @grant			GM_addStyle
// @grant			GM_getResourceURL
// @grant			GM_getResourceText
// @grant			GM_xmlhttpRequest
// @include			http://forums.whirlpool.net.au/*
// @include			https://forums.whirlpool.net.au/*
// @include			http://bc.whirlpool.net.au/*
// @include			https://bc.whirlpool.net.au/*
// @include			http://whirlpool.net.au/*
// @include			https://whirlpool.net.au/*
// @exclude			http://forums.whirlpool.net.au/whim-send*
// @exclude			https://forums.whirlpool.net.au/whim-send*
// @exclude			http://forums.whirlpool.net.au/forum-replies.cfm*p=-2*
// @exclude			https://forums.whirlpool.net.au/forum-replies.cfm*p=-2*
// @exclude			http://forums.whirlpool.net.au/forum-replies.cfm*&ux* 
// @exclude			https://forums.whirlpool.net.au/forum-replies.cfm*&ux* 
// @exclude			http://forums.whirlpool.net.au/archive/*
// @exclude			https://forums.whirlpool.net.au/archive/*
// @exclude			http://whirlpool.net.au/blog/*
// @exclude			https://whirlpool.net.au/blog/*
// @require			http://code.jquery.com/jquery-2.1.1.min.js
// @require			https://simplemodal.googlecode.com/files/jquery.simplemodal.1.4.4.min.js
// @require			http://wpplus.endorph.net/resources/js/min/delayedLoad.jquery.autosize.js
// @require			http://wpplus.endorph.net/resources/js/min/delayedLoad.jquery.oembed.js
// @require			http://wpplus.endorph.net/resources/js/min/prettify.js
// @require			http://wpplus.endorph.net/resources/js/min/tea.js
// @require			http://wpplus.endorph.net/resources/js/min/lang-css.js
// @require			http://wpplus.endorph.net/resources/js/min/lang-sql.js
// @resource		emoticon_angry		http://wpplus.endorph.net/resources/png/angry.png
// @resource		emoticon_blushing	http://wpplus.endorph.net/resources/png/blushing.png
// @resource		emoticon_confused	http://wpplus.endorph.net/resources/png/confused.png
// @resource		emoticon_cool		http://wpplus.endorph.net/resources/png/cool.png
// @resource		emoticon_cry		http://wpplus.endorph.net/resources/png/crying.png
// @resource		emoticon_frown		http://wpplus.endorph.net/resources/png/frown.png
// @resource		emoticon_gasp		http://wpplus.endorph.net/resources/png/gasp.png
// @resource		emoticon_grin		http://wpplus.endorph.net/resources/png/grin.png
// @resource		emoticon_kiss		http://wpplus.endorph.net/resources/png/kiss.png
// @resource		emoticon_lips		http://wpplus.endorph.net/resources/png/lips.png
// @resource		emoticon_shout		http://wpplus.endorph.net/resources/png/shouting.png
// @resource		emoticon_sleep		http://wpplus.endorph.net/resources/png/sleeping.png
// @resource		emoticon_smile		http://wpplus.endorph.net/resources/png/smile.png
// @resource		emoticon_smirk		http://wpplus.endorph.net/resources/png/smirk.png
// @resource		emoticon_straight	http://wpplus.endorph.net/resources/png/straight.png
// @resource		emoticon_tongue		http://wpplus.endorph.net/resources/png/tongue.png
// @resource		emoticon_wink		http://wpplus.endorph.net/resources/png/wink.png
// @resource		emoticon_star		http://wpplus.endorph.net/resources/png/star.png
// @resource		old_blue_anxious	http://wpplus.endorph.net/resources/gif/anxious.gif
// @resource		old_blue_clown		http://wpplus.endorph.net/resources/gif/clown.gif
// @resource		old_blue_cool		http://wpplus.endorph.net/resources/gif/cool.gif
// @resource		old_blue_eyes		http://wpplus.endorph.net/resources/gif/eyes.gif
// @resource		old_blue_grin		http://wpplus.endorph.net/resources/gif/grin.gif
// @resource		old_blue_happy		http://wpplus.endorph.net/resources/gif/happy.gif
// @resource		old_blue_happy2		http://wpplus.endorph.net/resources/gif/happy-2.gif
// @resource		old_blue_neutral	http://wpplus.endorph.net/resources/gif/neutral.gif
// @resource		old_blue_ninja		http://wpplus.endorph.net/resources/gif/ninja.gif
// @resource		old_blue_sad		http://wpplus.endorph.net/resources/gif/sad.gif
// @resource		old_blue_sad2		http://wpplus.endorph.net/resources/gif/sad-2.gif
// @resource		old_blue_smirk		http://wpplus.endorph.net/resources/gif/smirk.gif
// @resource		old_blue_tongue		http://wpplus.endorph.net/resources/gif/tongue.gif
// @resource		loader				http://wpplus.endorph.net/resources/gif/loader.gif
// @resource		reload				http://wpplus.endorph.net/resources/png/reload.png
// @resource		wp_plus_logo		http://wpplus.endorph.net/resources/png/wp_plus.png
// @resource		prettify			http://wpplus.endorph.net/resources/css/prettify.css
// @resource		noavatar			http://wpplus.endorph.net/resources/png/noavatar.png
// @resource		waiting				http://wpplus.endorph.net/resources/gif/waiting.gif
// @resource		focusedthread		http://wpplus.endorph.net/resources/png/focusedthread.png
// @resource		small_whirl_logo	http://wpplus.endorph.net/resources/png/whirlpool.png
// @resource		light_gradient		http://wpplus.endorph.net/resources/png/lightgradient.png
// @resource		green_note			http://wpplus.endorph.net/resources/png/greennote.png
// @resource		red_note			http://wpplus.endorph.net/resources/png/rednote.png
// @resource		check				http://wpplus.endorph.net/resources/png/check.png
// @resource		cross				http://wpplus.endorph.net/resources/png/cross.png
// @resource		oembedcss			http://wpplus.endorph.net/resources/css/jquery.oembed.css
// ==/UserScript==