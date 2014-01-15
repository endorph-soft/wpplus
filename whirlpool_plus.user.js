// ==UserScript==
// @name          Whirlpool Plus
// @namespace     WhirlpoolPlus
// @description   Adds a suite of extra optional features to the Whirlpool forums.
// @version       4.2.6
// @require       http://wpplus.tristanroberts.name/js/jquery-gm.js
// @require       http://wpplus.tristanroberts.name/js/prettify.js
// @require       http://wpplus.tristanroberts.name/js/lang-css.js
// @require       http://wpplus.tristanroberts.name/js/lang-sql.js
// @require	  http://wpplus.tristanroberts.name/js/jqdnr.pjs?version=419
// @include       http://forums.whirlpool.net.au/*
// @include       http://bc.whirlpool.net.au/*
// @include       http://whirlpool.net.au/*
// @exclude       http://forums.whirlpool.net.au/whim-send*
// @exclude       http://forums.whirlpool.net.au/forum-replies.cfm*p=-2*
// @exclude       http://forums.whirlpool.net.au/forum-replies.cfm*&ux* 
// @exclude       http://forums.whirlpool.net.au/forum-replies-print.cfm*
// @exclude       http://forums.whirlpool.net.au/forum-replies-archive.cfm*
// @resource	  emoticon_angry	http://wpplus.tristanroberts.name/png/angry.png
// @resource	  emoticon_blushing	http://wpplus.tristanroberts.name/png/blushing.png
// @resource	  emoticon_confused	http://wpplus.tristanroberts.name/png/confused.png
// @resource	  emoticon_cool		http://wpplus.tristanroberts.name/png/cool.png
// @resource	  emoticon_cry		http://wpplus.tristanroberts.name/png/crying.png
// @resource	  emoticon_frown	http://wpplus.tristanroberts.name/png/frown.png
// @resource	  emoticon_gasp		http://wpplus.tristanroberts.name/png/gasp.png
// @resource	  emoticon_grin		http://wpplus.tristanroberts.name/png/grin.png
// @resource	  emoticon_kiss		http://wpplus.tristanroberts.name/png/kiss.png
// @resource	  emoticon_lips		http://wpplus.tristanroberts.name/png/lips.png
// @resource	  emoticon_shout	http://wpplus.tristanroberts.name/png/shouting.png
// @resource	  emoticon_sleep	http://wpplus.tristanroberts.name/png/sleeping.png
// @resource	  emoticon_smile	http://wpplus.tristanroberts.name/png/smile.png
// @resource	  emoticon_smirk	http://wpplus.tristanroberts.name/png/smirk.png
// @resource	  emoticon_straight	http://wpplus.tristanroberts.name/png/straight.png
// @resource	  emoticon_tongue	http://wpplus.tristanroberts.name/png/tongue.png
// @resource	  emoticon_wink		http://wpplus.tristanroberts.name/png/wink.png
// @resource	  emoticon_star		http://wpplus.tristanroberts.name/png/star.png
// @resource	  old_blue_anxious	http://wpplus.tristanroberts.name/gif/anxious.gif
// @resource	  old_blue_clown	http://wpplus.tristanroberts.name/gif/clown.gif
// @resource	  old_blue_cool		http://wpplus.tristanroberts.name/gif/cool.gif
// @resource	  old_blue_crazy	http://wpplus.tristanroberts.name/gif/crazy.gif
// @resource	  old_blue_eyes		http://wpplus.tristanroberts.name/gif/eyes.gif
// @resource	  old_blue_grin		http://wpplus.tristanroberts.name/gif/grin.gif
// @resource	  old_blue_happy	http://wpplus.tristanroberts.name/gif/happy.gif
// @resource	  old_blue_happy2	http://wpplus.tristanroberts.name/gif/happy-2.gif
// @resource	  old_blue_neutral	http://wpplus.tristanroberts.name/gif/neutral.gif
// @resource	  old_blue_ninja	http://wpplus.tristanroberts.name/gif/ninja.gif
// @resource	  old_blue_sad		http://wpplus.tristanroberts.name/gif/sad.gif
// @resource	  old_blue_sad2		http://wpplus.tristanroberts.name/gif/sad-2.gif
// @resource	  old_blue_smirk	http://wpplus.tristanroberts.name/gif/smirk.gif
// @resource	  old_blue_tongue	http://wpplus.tristanroberts.name/gif/tongue.gif
// ==/UserScript==
// Some icons from http://www.pinvoke.com/
// For information on bugs, see http://code.google.com/p/whirlpool-plus/issues/list
// ==Changes==
/***************
 changes - 3.0.4 - fixed bug where clicking the "i" link next to a users name multiple times opened multiple boxes. Fixed a bug with the auto update.
 changes - 3.0.5 - fixed an issue with the userpage/no of days feature.
 changes - 3.0.6 - fixed an issue with the userpage/no of days feature (2nd go). Fixed an issue with 'mark as read' feature. Added avatars to whims.
 changes - 3.0.7 - fixed tracking issue (i think). Fixed animated avatars issue (i think). Added smileys. Fixed Rep, Mod, Print View, Thread Archive links. 
 Fixed too many Your Links problem (overflow scroll). Fixed glitch when your own post is deleted. Fixed a glitch when the last post was deleted. Fixed a problem with the auto-update.
 changes - 3.0.8 - Fixed problem with settings box and small resolution. Added small resolution toggle feature to user page. Added whirlcode buttons to reply page.
 changes - 3.0.9 - Fixed user ignore.
 changes - 3.1.0 - Full size inline images are now shown on the same page when clicked. Spinner menu positioned just to the right of the left page menu.
 changes - 3.1.1 - Fixed a problem with external links.
 changes - 3.1.2 - Tweaked full size inline images feature. Fixed glitch with spinner menu.
 changes - 3.1.3 - Fixed spinner (2nd go).
 changes - 3.1.4 - Fixed avatars in whims.
 changes - 3.1.5 - Fixed problem with too many links in Your Links section (i think).
 changes - 3.1.6 - Fixed spinner (3rd go).
 changes - 3.1.7 - Post align option. Chatbox rules link. Mark as read fixed (i think)
 changes - 3.1.8 - Fixed userpage days glitch.
 changes - 3.1.9 - Update for Simon's changes http://forums.whirlpool.net.au/forum-replies.cfm?t=530906&p=37#r733.
 changes - 3.2.0 - Update 2 for Simon's changes http://forums.whirlpool.net.au/forum-replies.cfm?t=530906&p=37#r733.
 changes - 3.2.1 - Fixed edit in place second edit error. Made user notes text box larger and added different icon if usernote available for user. 
 Added a debug mode. Added static iced whirlcode. Fixed default userdays number. Added focused thread reminder.
 changes - 3.2.2 - Fixed Your Links glitch.
 changes - 3.2.3 - Removed some mark as read code that was causing problems.
 changes - 3.2.4 - Added an option to import user notes from older script (pre 3.0).
 changes - 3.2.5 - Fixed userpage back button issue.
 changes - 3.2.6 - Fixed mark as read feature.
 changes - 3.2.7 - Fixed users online page glitch.
 changes - 3.2.8 - Removed the shock smiley.
 changes - 3.2.9 - Focused thread opacity thingo.
 changes - 3.3.0 - Updated for Simon's url changes.
 changes - 3.4.0 - Now maintained by Troberto, Chatbox removed
 changes - 3.4.1 - Chatbox setting removed
 changes - 3.4.2 - Fixed smilies, hosted images, Spelling
 changes - 3.4.3 - Fixed Your Votes page & Dynamic Menu links.
 changes - 3.5.0 - New Features: Floating Sidebar, Sidebar Notes, Numerous bug fixes
 changes - 3.5.1 - Wide Whirlpool support w/ floating sidebar
 changes - 3.5.2 - WP Green (by Polish Dude) added, Typo fixed
 changes - 3.5.3 - Whim Whirlcode removed, Whim preview removed
 changes - 3.5.4 - Completely removed Your Links (which is now dead)
 changes - 3.5.5 - Update for Somon's (minor) URL change.  Enhanced deletedThreadCacheLink()
 changes - 3.5.6 - OK, let's try that again. Rewrote deletedThreadCacheLink() function.
 changes - 3.6.0 - Fixed overflow bug with wide whirlpool & images, fixed cursor, fixed flickR links, fixed Wikipedia links, fixed image links, enhanced Vimeo links (minor), added Long Thread link
 changes - 3.6.1 - Improved IRC links, Fixed themes, Enhanced updater
 changes - 3.6.5 - Added average posts per day. Added Watched Thread redirect. Added No Text Shadow.
 changes - 3.6.6 - Added Hide Deleted Posts. Added purple theme (by polish dude). Fixed bug with editInPlace (not rewritten).
 changes - 3.6.7 - Enhanced code prettifier (improved language support).  Improved Posts per day.
 changes - 3.6.8 - Fixed posts per day.
 changes - 3.7.0 - Added chatbox.
 changes - 3.7.1 - Added setting for the chatbox.
 changes - 3.7.2 - Fixed the lockups (due to syntax highlighting).
 changes - 3.8.0 - Added My Links. Added another option for avatars.  Improved updater.
 changes - 3.8.5 - Patched rep posts bug, Fixed Watched Threads redirect, Added notifications.
 changes - 3.8.6 - Fixed My Links
 changes - 3.8.7 - Made My Links go under chatbox (if enabled).
 changes - 3.8.8 - Fixed errors.
 changes - 3.8.9 - Fixed floating sidebar.
 changes - 3.9.0 - Increased performance, rewrote updater, fixed typos, fixed floating sidebar bugs, new emoticons, added Whim Archive sorter (by Yansky), fixed poll bug, fixed video bug, fixed avatar bug, fixed wikipedia bug, added inline pages, added simple backup.
 changes - 3.9.1 - Emoticons show on reply pages, syntax highlighting works on reply pages (improved aswell), improved emoticons (not showing in lists,etc), added Unanswered threads, added OP Only View.
 changes - 3.9.2 - Added second avatar server, removed Sidebar Notes and My Links, cleaned up settings HTML, minor code cleanups.
 changes - 3.9.3 - Added wrppaers for easier porting in the future, fixed avatar bug (thanks Micah), fixed bug with page titles (thanks Yansky), added warning regarding sidebar (thanks Nukkels).
 changes - 3.9.4 - Rewrote some code for better performance, fixed floating sidebar bug, improved posts per day
 changes - 3.9.5 - Fixed major bug with emoticons, floating sidebar, posts per day and more. Fixed floating sidebar and non-widescreen, improved settings.
 changes - 3.9.6 - Updated some settings text, fixed URLs
 changes - 3.9.7 - Fixed Whirlcode buttons, moved to jQuery 1.4.1, fixed anchors.
 changes - 3.9.8 - Changed servers, added ability to change servers, moved to jQuery 1.4.2
 changes - 3.9.9 - Fixed anchors while using widescreen mode (thanks tjetch), settings automatically reload
 changes - 4.0.0 - Fixed unread threads, improved inline images and video, rewrote edit in place
 changes - 4.0.1 - Fixed watched threads redirect (thanks tjetch), improved inline images
 changes - 4.0.2 - Fixed inline images, fixed edit in place
 changes - 4.0.3 - Fixed emoticons in usernames (when quoting), possibly fixed quick edit (thanks tjetch).
 changes - 4.0.4 - Added cancel button to quick edit, fixed quick edit after using quick reply (thanks tjetch), added blue smilies
 changes - 4.0.5 - Fixed blue smilies, fixed inline images.
 changes - 4.0.6 - Added ability to hide deleted threads in user profile (thanks Yansky).
 changes - 4.0.7 - Added ability to hide forums from the main page.
 changes - 4.0.8 - Added open watched threads in section in tabs (thanks, Yansky)
 changes - 4.0.9 - Added a quick fix for anchors, thanks tbwd.
 changes - 4.0.10- Replaced Polish Dude's green theme, w/ Chris's, removed Polish Dude's other themes
 changes - 4.0.11- Updated WP Green, added WP Wood and WP Purple (thanks Chris)
 changes - 4.0.12- tbwd's fixes (thanks)
 changes - 4.0.13- Moved to tbwd's Userscript (#85217).
 changes - 4.1.0 - Rewrote Last Read Tracker, Some changes to Whirlpool object
 changes - 4.1.1 - Forgot to allow WLR to turn off, fixed
 changes - 4.1.2 - Readded "Only color end square" option
 changes - 4.1.3 - Zapped FF4 + GM 0.9.0 bugs (thanks to jaromir for debugging help)
 changes - 4.1.4 - Added some parseInt calls to hopefully fix tracking, added "mark as read", changed tracker to always replace link on tracked threads.
 changes - 4.1.5 - Don't highlight deleted/moved threads, move the S and M links further apart, remove user notes until a replacement for eval can be found
 changes - 4.1.6 - Add mark as read link for those using "Only colour end square"
 changes - 4.1.7 - Readded user notes (Please update to Greasemonkey 0.9.1 if you are running 0.9.0). Changed position of M and S links
 changes - 4.1.8 - Fixed issue with FF4b11, Added a "reset vote" aura option
 changes - 4.1.9 - Fixed an issue with the tracker that caused threads to not track correctly
 changes - 4.2.0 - Readded popular colouring options to WLR tracker, fixed another tracker bug
 changes - 4.2.1 - Added an option to unhide a post by a hidden user
 changes - 4.2.2 - Fixed thread tracking on search pages
 changes - 4.2.3 - Fixed gap under logo with floating sidebar
 changes - 4.2.4 - Removes the troublesome (3 smiley
 changes - 4.2.5 - Fixes auto preview
 changes - 4.2.6 - New Avatar Server
 ***************/
// ==/Changes==

try {

	var version = '4.2.6';

	var server = "http://tristanroberts.name/projects/wp-plus/";

	var Whirlpool = {
		/**
		 The current page URL.
		 @var	(string)
		 */
		'url': document.location.toString(),
		/**
       The current thread number
       @var (string or false)
		 @since 4.1.0
      */
      'threadNumber' : (typeof unsafeWindow.thisThreadID != 'undefined') ? (unsafeWindow.thisThreadID) : (false),
		/**
		 Returns the stored value.
		 @param	name	(string) The name of the stored value.
		 @return	(mixed) The stored value or, on error, (default) false.
		 @see	Whirlpool.set()
		 */
		'get': function (name) {
			var value = GM_getValue(name, false);
			return (value);
		},
		'set': function (name, value) {
			GM_setValue(name, value);
		},
		/**
		 Returns a list of stored values.
		 @return	(bool) true on success, false on error.
		 */
		'list': function () {
			return GM_listValues();
		},
		/**
		 Adds CSS styles to the HEAD of the document.
		 @param	styles	(string) The CSS to insert.
		 */
		'css': function (styles) {
			GM_addStyle(styles);
		},
		/**
		 @todo	document
		 */
		'image': function (resource) {
			return (GM_getResourceURL(resource));
		},
		/**
		 Sends and XML HTTP Request with the desired configuration.
		 @param	config	(array) The configuration, see @api.
		 @api	http://wiki.greasespot.net/GM_xmlhttpRequest
		 @return	(object) The XML HTTP Request.
		 */
		'ajax': function (config) {
			return GM_xmlhttpRequest(config);
		},
		/**
		 Sends, and receives a simple XML HTTP Request.
		 @param	url		(string) The URL to send the request to.
		 @param	action	(function) The callback function.  The request data is available as a function parameter.
		 @status	DEPRECATED
		 */
		'HttpRequest': function (url, action) {
			Whirlpool.ajax({
				method: 'GET',
				url: url,
				headers: {
					'User-Agent': 'Mozilla/5.0',
					'Accept': 'text/xml'
				},
				onload: action
			});
		},
		/** 
		 Whether a notification has already been displayed.
		 @var	(bool)
		 @type	private
		 */
		'_notified': false,
		/**
		 Sends a notification to the user in a universal style.  Two display options are available depending on importance.
		 @param	message		(string) The message to display. Note: " (close)" will be appended to the message.
		 @param	important	(bool) Whether the message is important.  true = orange, false = black
		 @param	duration	(int) The duration, in seconds, to display the message for.  Note:  The user can also click the message to hide it.
		 */
		'notify': function (message, important, duration) {
			var color, background, opacity;
			if (important === true) {
				color = 'black';
				background = 'orange';
				opacity = '0.9';
			} else {
				color = 'white';
				background = 'black';
				opacity = '0.9';
			}
			if (!Wp._notified) {
				$('head').append('<style type="text/css">.wpplus_notify{ width: 85%; height: 20px; background-color: ' + background + '; opacity: ' + opacity + '; position: fixed; top: 25px; left: 7.5%; z-index: 500; -moz-border-radius: 10px; padding-top: 7px; text-align: center; color: ' + color + '} .wpplus_notify:hover{ cursor: pointer; }</style>');
				Wp._notified = true;
			}
			$('body').prepend('<div class="wpplus_notify">' + message + ' (close)</div>');
			$('.wpplus_notify').click(function (e) {
				$(this).fadeOut();
			});
			setTimeout(function () {
				$('.wpplus_notify').fadeOut();
			},
			duration);
		}
	};

	var user = {
		'name': '',
		'id': 0
	};

	if (!Whirlpool.url.match('alert')) {
		user.name = $('.userinfo dt:first').text();
		user.id = $('.userinfo dd:first').text().split('#')[1];
	}

	var Wp = Whirlpool;

	/*! Posts Per Day */
	/**
	 Calculates a posts per day statistic on a user page.
	 @author		Troberto
	 @date		2009-12-23
	 @version	3.9.4
	 @runson		User pages
	 */
	if (Whirlpool.get("postsPerDay") == "true" && !Whirlpool.url.match('action=') && Whirlpool.url.match("user")) {
		var posts = $('td:contains("Post count")').next('td').text();

		var split = $('td:contains("Joined")').next('td').text().split(' ');
		var months = {
			'January': 0,
			'February': 1,
			'March': 2,
			'April': 3,
			'May': 4,
			'June': 5,
			'July': 6,
			'August': 7,
			'September': 8,
			'October': 9,
			'November': 10,
			'December': 11
		};
		var user_date = {
			'day': split[1],
			'month': months[split[2]],
			'year': split[3]
		};

		var join_date = new Date();
		join_date.setYear(user_date.year);
		join_date.setMonth(user_date.month);
		join_date.setDate(user_date.day);

		var current = new Date();
		var difference = Math.abs(join_date.getTime() - current.getTime());
		var days = Math.round(difference / (1000 * 60 * 60 * 24));

		$('tr:contains("Post"):first').after('<tr><td align="right"><b>Posts per Day:</b></td><td>' + (Math.round($('td:contains("Post count")').next('td').text() / days * 100) / 100) + '</td></tr>');

	}

	/*! Floating Sidebar */
	/**
	 Floats the sidebar as you scroll.
	 @author		Troberto
	 @date		2009-12-23
	 @version	3.9.4
	 @runson		ALL
	 */
	if (Whirlpool.get("floatSidebar") == "true" && !Whirlpool.url.match("/alert/") ) {
		var body = $('body').css('width').toString().replace('px', '');
		var root = $('#root').css('width').toString().replace('px', '');

		var left = (Whirlpool.get("enableWideWhirlpool") == "true" ? 0 : ((body - root) / 2));

		$('#left').css({
			'position': 'fixed',
			'left': left + 'px'
		});

		$('#logo').css({
			'position': 'absolute',
			'left': '0'
		});
		$('.selected ul[style~="dashed"]').append('<li id="wpplus_undock"><a href="javascript:;"> Unfloat Sidebar (temp)</a></li>');
		$('#wpplus_undock a').click(function () {
			$('#left').css({
				'position': 'absolute',
				'left': '0'
			});
		});
		$(window).scroll(function () {
			$('#left').css('top', ((190 - window.scrollY) >= 1 ? 190 - window.scrollY : 0) + 'px');
		});
		$(window).load(function () {
			$('#left').css('top', ((190 - window.scrollY) >= 1 ? 190 - window.scrollY : 0) + 'px');
		});

	}

	/*! Inline Pages */
	/**
	 Shows the page in an iFrame for easy viewing.
	 @author		Troberto
	 @date		2009-09-24
	 @version	3.9.0
	 @runson		Forum Reply pages
	 */

	if (Whirlpool.get("inlinePages") == "true" && Whirlpool.url.match("forum-replies.cfm")) {
		$('.external').after('<sup style="cursor:pointer;" class="quick">(preview)</sup>');
		$('.quick').live('click', function (e) {
			var previewClass = ($(this).attr('id') !== '') ? $(this).attr('id') : 'quick' + Math.floor(Math.random() * 101);
			if ($('.' + previewClass).hasClass(previewClass)) {
				$(this).text('(preview)');
				$('.' + previewClass).parent().parent().remove();
			} else {
				$(this).text('(hide)');
				$(this).attr('id', previewClass);
				var link = $(this).prev('a');
				var post = $(this).closest('tr');
				$(post).after('<tr><td colspan="3" style="padding:0;height:400px;" class="tr' + previewClass + '"><iframe src="' + link.attr('href') + '" style="margin:0;display:block;border:none;width: 100%;height: 100%;" class="' + previewClass + '"></iframe><div class="handle" style="width: 100px;float:right;cursor:s-resize;">Resize</div></td></tr>');
				$('.tr' + previewClass).jqResize('.handle');
			}

		});
	}
	
	var __ids = Whirlpool.get("hideForumIDs");
	if (__ids && __ids.length > 0 && Whirlpool.url == "http://forums.whirlpool.net.au/") {
		var ids = " " + decodeURI(__ids.toString()) + " ";
		
		$("#index tr").each( function( ) {
			var url = $(this).children(".title").children(".title").children("a").attr("href").replace(/\/forum\//, "");
			if (ids.indexOf(" " + url + " ") > -1) {
				$(this).remove();
			}
		} );
		
		$("#index h3").each( function() {
			if( $(this).next("table").height().toString() == "0" ) {
				$(this).remove();
			}
		} );
	}

	/*! Smart Updater */
	/**
	 Automatically updates WP+.
	 @author		Troberto
	 @date		2009-12-23
	 @version	3.9.4
	 @runson		ALL
	 */

	if (Whirlpool.get("smartUpdater") == "true" && (Whirlpool.url.match("user") || Whirlpool.url.match("/forum/"))) {

		var date = new Date();
		var time = (date.getTime() - date.getMilliseconds()) / 1000;

		if (Whirlpool.get('updaterInterval') === false) {
			Whirlpool.set('updaterInterval', 30);
		}

		var next = Whirlpool.get('updaterInterval');

		if (Whirlpool.get('updaterChecked') === false) {
			Whirlpool.set('updaterChecked', time);
		}

		var last = Whirlpool.get('updaterChecked');

		var next_seconds = next * 60;

		if (time > last + next_seconds) {
			var url = server + '/txt/updater.txt';
			var mine = version.replace(/\./g, '');

			Whirlpool.HttpRequest(url, function (data) {
				var dataText = data.responseText;

				if (mine < dataText) {
					Whirlpool.set('updaterInterval', 30);
					Whirlpool.notify('A new version of WP+ is available.', true, 50000);
					Whirlpool.set('updaterChecked', time);
					document.location = 'http://userscripts.org/scripts/source/85217.user.js';
				} else if (next * 2 < 7690) {
					Whirlpool.set('updaterInterval', next * 2);
					Whirlpool.set('updaterChecked', time);
				}

			});

		}
	}

	/*! Chatbox */
	/**
	 Adds a chatbox to the sidebar.
	 @author		Troberto
	 @date		2009-12-23
	 @version	3.9.4
	 @runson		ALL
	 */
	if (Whirlpool.get("chatbox") == "true") {
		$('.userinfo').after('<div id="chatbox"><iframe name="cboxmain" src="http://chat.onlinelife.com/box/?boxid=2818612&boxtag=1700&sec=main" id="cboxmain"></iframe><iframe name="cboxform" src="http://chat.onlinelife.com/box/?boxid=2818612&boxtag=1700&sec=form" id="cboxform"></iframe></div>');
		$('#chatbox iframe').css({
			'border': 'none',
			'margin-left': '10px',
			'width': '190px'
		});

		$('#chatbox iframe:first').css({
			'height': '300px'
		});

		$('#chatbox iframe:last').css({
			'height': '95px',
			'overflow': 'hidden'
		});

		$('#root').css({
			'min-height': '1600px'
		});
	}

	/*! Syntax Highlighting */
	/**
	 Provides easy to read syntax highlighting on pre tags.
	 @author		Troberto
	 @date		2009-12-23
	 @version	3.9.4
	 @runson		Forum Replies and Edit page
	 */


	if (Whirlpool.get("syntaxHighlight") == "true") {
		$('pre').addClass("prettyprint");
		$('head').append('<link rel="stylesheet" type="text/css" media="screen" href="' + server + 'css/prettify.css">');
		prettyPrint();
	}

	/*! Show Unanswered Threads */
	/**
	 Provides a link to see unanswered threads.
	 @author		Troberto
	 @date		2009-12-23
	 @version	3.9.4
	 @runson		Forum Section Index
	 */
	if (Whirlpool.get("unanswered_threads") == "true" && Whirlpool.url.match("/forum/")) {
		if (Whirlpool.url.match('nr=1')) {
			var old_url = Whirlpool.url.replace('&nr=1', '');
			$('#breadcrumb li:last').html('<a href="' + old_url + '">' + $('#breadcrumb li:last').text() + '</a>');
		} else {
			var new_url = Whirlpool.url + (Whirlpool.url.indexOf('?') > -1 ? '&nr=1' : '?&nr=1');
			$('#breadcrumb li:last').append(' <a href="' + new_url + '">(unread)</a> ');
		}
	}


	/*! Emoticons */
	/**
	 Replaces emoticon text with a graphic.
	 @author		Troberto
	 @date		2009-09-24
	 @version	3.9.4
	 @runson		Forum Replies and Edit pages
	 */

	if (Whirlpool.get("emoticons") == "true" && Whirlpool.url.match("forum-repl")) {
		$( ".reference a" ).each( function( ) {
			var text = $(this).text( ).toString( ).replace( /\:/, "<span>:</span>" );
			$(this).html( text );
		} );

		var icons = {
			':angry:': Whirlpool.image('emoticon_angry'),
			':glad:': Whirlpool.image('emoticon_blushing'),
			':confused:': Whirlpool.image('emoticon_confused'),
			':cool:': Whirlpool.image('emoticon_cool'),
			':cry:': Whirlpool.image('emoticon_cry'),
			':(': Whirlpool.image('emoticon_frown'),
			':-(': Whirlpool.image('emoticon_frown'),
			':gasp:': Whirlpool.image('emoticon_gasp'),
			':D': Whirlpool.image('emoticon_grin'),
			':-D': Whirlpool.image('emoticon_grin'),
			'<3':Whirlpool.image('emoticon_kiss'),
			':X': Whirlpool.image('emoticon_lips'),
			':-X': Whirlpool.image('emoticon_lips'),
			':shout': Whirlpool.image('emoticon_shout'),
			':snore:': Whirlpool.image('emoticon_sleep'),
			':)': Whirlpool.image('emoticon_smile'),
			':-)': Whirlpool.image('emoticon_smile'),
			':\\\\': Whirlpool.image('emoticon_smirk'),
			':|': Whirlpool.image('emoticon_straight'),
			':-|': Whirlpool.image('emoticon_straight'),
			':P': Whirlpool.image('emoticon_tongue'),
			':-P': Whirlpool.image('emoticon_tongue'),
			';)': Whirlpool.image('emoticon_wink'),
			';-)': Whirlpool.image('emoticon_wink'),
			':;': Whirlpool.image('emoticon_wink'),
			':-;': Whirlpool.image('emoticon_wink'),
			':star:': Whirlpool.image('emoticon_star')
		};
		
		var blue_icons = {
			':~': Whirlpool.image('old_blue_anxious'),
			//'(3': Whirlpool.image('old_blue_clown'),
			//'(-3': Whirlpool.image('old_blue_clown'),
			'(:': Whirlpool.image('old_blue_cool'),
			'(:-': Whirlpool.image('old_blue_cool'),
			':crazy:': Whirlpool.image('old_blue_crazy'),
			'-oo-': Whirlpool.image('old_blue_eyes'),
			'-o.o-': Whirlpool.image('old_blue_eyes'),
			':D': Whirlpool.image('old_blue_grin'),
			':-D': Whirlpool.image('old_blue_grin'),
			':|)': Whirlpool.image('old_blue_happy2'),
			':)': Whirlpool.image('old_blue_happy'),
			':-)': Whirlpool.image('old_blue_happy'),
			':|(': Whirlpool.image('old_blue_sad2'),
			':(': Whirlpool.image('old_blue_sad'),
			':-(': Whirlpool.image('old_blue_sad'),
			':|': Whirlpool.image('old_blue_neutral'),
			':-|': Whirlpool.image('old_blue_neutral'),
			':ninja:': Whirlpool.image('old_blue_ninja'),
			':\\\\':Whirlpool.image('old_blue_smirk'),
			':-\\\\':Whirlpool.image('old_blue_smirk'),
			':P': Whirlpool.image('old_blue_tongue'),
			':-P': Whirlpool.image('old_blue_tongue')
		};
		
		if( Whirlpool.get("emoticonsBlue") == "true" ) {
			icons = blue_icons;
		}

		var regex = {};
		var endLine = {};
		var startLine = '<img src ="';
		for (icon in icons) {
			var regkey = icon;
			regkey = regkey.replace(/</g, "&lt;");
			regkey = regkey.replace(/>/g, "&gt;");
			regkey = regkey.replace(/\(/g, "\\(");
			regkey = regkey.replace(/\)/g, "\\)");
			regkey = regkey.replace(/\[/g, "\\[");
			regkey = regkey.replace(/\]/g, "\\]");
			regkey = regkey.replace(/\|/g, "\\|");

			var fixkey = icon.replace(/\\/g, '');

			regex[icon] = new RegExp(regkey, 'g');
			endLine[icon] = '" align="baseline" />';
		}
		textnodes = document.evaluate("//td[@class = 'bodytext']//text()", document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);

		for (var i = 0; i < textnodes.snapshotLength; i++) {
			node = textnodes.snapshotItem(i);
			var node_value = node.nodeValue;
			node_value = node_value.replace(/</g, "&lt;").replace(/>/g, "&gt;");
			var smiley = node_value;
			for (icon in icons) {
				smiley = smiley.replace(regex[icon], startLine + icons[icon] + endLine[icon]);
			}
			if (smiley.length > 1 && smiley != node_value) {
				var span = document.createElement("span");
				span.innerHTML = smiley;
				node.parentNode.replaceChild(span, node);
			}
		}

	}
	
	if (Whirlpool.get('hide_closed_profile') == "true" && Whirlpool.url.match("/user/")) {
		[].forEach.call(document.querySelectorAll('tr.closed'),function(item,index,array){
		    var pres=item.previousElementSibling;
		    var nex=pres.nextElementSibling;
		    var par=item.parentNode;
		    par.removeChild(item);
		    if(pres.className=='section' && (!nex || nex.className=='section') ){
		        par.removeChild(pres);
		    }
		});
	}

	/*! Whim Archive Sorter */
	/**
	 Sorts archived whims in alphabetical order.
	 @author		Yansky (main), Troberto (plugin)
	 @date		2009-09-03
	 @version	3.9.0
	 @runson		Whim Archive page
	 */

	if (Whirlpool.get('whim_archive_sort') == "true" && Whirlpool.url.match("action=archive")) {

		var whimTRsParent = document.querySelector('#content>table>tbody');
		var whimTRs = whimTRsParent.querySelectorAll('tr:not([bgcolor="##5566AA"])');

		var plainArr = [];

		for each(var item in whimTRs) {
			if (typeof item == "object") {
				var Name = {
					real: item.querySelector('b').textContent
				};
				Name.Sort = Name.real.toLowerCase().replace(/[^a-z,0-9]/gm, '');
				Name.tr = item;
				plainArr.push(Name);
			}
		}

		plainArr.sort(function (a, b) {
			return a.Sort < b.Sort ? -1 : 1;
		});

		plainArr.forEach(function(item,index,array) {
			whimTRsParent.appendChild(item.tr);
		});

	}
	/*! Simple Backup */
	/**
	 Backs up any input with the #body ID.
	 @author		Yansky (main), Troberto (plugin)
	 @date		2009-12-23
	 @version	3.9.4
	 @runson		Post Reply, Edit, Whims
	 */
	if (Whirlpool.get("simple_backup") == "true" && $('#body').attr('id') == 'body') {
		var existing_data = Whirlpool.get('simple_backup_data');
		$('#body').before('<span style="cursor:pointer;" id="revert_data">Revert</span><br>');
		$('#revert_data').live('click', function (e) {
			$('#body').val(existing_data);
		});
		$('#body').keyup(function (e) {
			Whirlpool.set('simple_backup_data', $('#body').val());
		});
	}

	/*! No Text Shadow */
	/**
	 Backs up any input with the #body ID.
	 @author		Troberto
	 @date		2009-12-23
	 @version	3.9.4
	 @runson		Post Reply, Edit, Whims
	 */
	if (Whirlpool.get("noTextShadow") == "true") {
		$('head').append('<style type="text/css">*{text-shadow:none!important;}</style>');
	}
	
	if (Whirlpool.url.match("forum-replies.cfm")) {
		var extensions = "bmp|gif|jpg|png".split("|");
		var width = $(".bodytext").css("width").toString( );
		
		$( ".bodytext a" ).each( function( ) {
			var link = $(this).attr('href').toString( );
			
			if ( Whirlpool.get( "inlineImages" ) == "true" ) {
				for ( key in extensions ) {
					if ( link.toLowerCase( ).indexOf( extensions[key] ) > -1 ) {
						$(this).before('<img src="' + link + '" class="wpx_img">');
					}
				}
			}
			
			if ( Whirlpool.get( "inlineVideos" ) == "true" ) {
				if ( link.indexOf( "youtube.com/watch" ) > -1 ) {
					var id = link.split("v=")[1].split("&")[0];
					var code = '<embed src="http://www.youtube.com/v/' + id + '&hl=en_US&fs=1&rel=0" type="application/x-shockwave-flash" allowfullscreen="true" width="436" height="350"></embed>';
					$(this).before(code);
				}
			}
		} );
		
		$(".wpx_img").css("max-width", width );
		$(".wpx_img").css("cursor", "pointer" );
		
		$(".wpx_img").click( function( e ) {
			if( $(this).css("max-width").toString( ) == width ) {
				$(this).css("width", "auto");
				$(this).css("max-width", "none");
			} else {
				$(this).css("max-width", width);
			}
		} );
	}

	// ! Edit In Place
	// @todo	Document	

	if ( Whirlpool.url.match( "forum-replies" ) && Whirlpool.get( "editInPlace" ) == "true" ) {
		$( ".bodypost a[href^=/forum/index.cfm?action=edit]" ).after( "<br><a class='wpp-edit'>(quick edit)</a>" );
		$( ".wpp-edit" ).css("cursor", "pointer" );
		
		$( ".wpp-edit" ).live( "click", function( e ) {
			$(this).hide( );
			$(this).after( "<a class='wpp-c-edit'>(cancel)</a>" );
			$( ".wpp-c-edit" ).css("cursor", "pointer" );
			var edit_url = $(this).prev( ).prev().attr( "href" ).toString();
			var reply_id = edit_url.split( "e=" )[1];
			var reply_html = $( "#r" + reply_id + " .bodytext" );
			var original = reply_html.html( ).toString( );
			
			$(".wpp-c-edit").live( "click", function( e ) {
				reply_html.html(original);
				$( ".wpp-edit" ).show( );
				$(this).remove( );
			} );
			
			var width = reply_html.css( "width" ).toString(),
				height = reply_html.css( "height" ).toString();
			
			reply_html.load( edit_url + " form", function( ) {
				$("#reply th, #reply tr:first, #reply .right, #reply #prev, #previewNote, #reply td div").hide( );
				$("#reply td").css( "background-color", "transparent" );
				$("#reply td").css( "padding", "0");
				$('#body').css("width", width);
				$('#body').css("height", height);
				$("#fm input[type=submit]:last").after("<button class='wpp-c-edit'>Cancel</button>");
				$( ".wpp-c-edit" ).css("cursor", "pointer" );
				
				$("input").click( function(e) {
					$( "input[name=post2]" ).val("post");
					var data = $("#fm").serialize( );
					$.post( $("#fm").attr("action"), data, function( text ) {
						if( text.indexOf( "Post edited" ) > -1 ) {
							document.location.reload();
						} else {
							alert( "Something went wrong while editing your post. Some common problems:\n - Overquoting\n - Too much text\n - Invalid characters\nTry using the normal editing function instead. Please report this bug in the WP+ thread (in Feedback)." );
						}
					} );
					return false;
				} );
			} );
		} );
	}

	
/*************************************** TBWD's code *******************************************/
   
   //Return the user who made a post. Accepts the table row that represents each post
   function getUserNumber(tr){
      return tr.find('a[href*="/user/"]').attr('href').split('/user/')[1];
   }
   
   /*! Ignore User */
	/**
	 Hides users as necessary
	 @author		tbwd
	 @date		2010-11-04
	 @version	4.0.12
	 @runson		Forum replies
	 */
	function userIgnore(trParent) {
		var tdBodyUser = trParent.children('.bodyuser');
		var uNum = getUserNumber(trParent);
      
      //add hide smiley (X)
      if($('span[title="hide user"]',tdBodyUser).length == 0){
         var hideUser = $('<span title="hide user" style="margin-right:5px;" class="voteitem">X</span>');
         
         if ($('.voteblock',tdBodyUser).length != 0) {
            //normal forum
            tdBodyUser.find('.voteblock').prepend(hideUser);
         } else {
            //in ItN, need to add voteblock
            var voteblock = $('<div class="voteblock">');
            voteblock.append(hideUser);
            tdBodyUser.append(voteblock);
         }
         
         hideUser.click(function () {
            if (!docs.hiddenUsersArr.match(uNum)) {
            
               Whirlpool.set('hiddenUsersArr', Whirlpool.get('hiddenUsersArr') + '#' + uNum);
               docs.hiddenUsersArr += '#' + uNum;
               
               //rehide ignored posts
               docs.repliesTR.each(function () {
                  userIgnore($(this));
               });
            }
         });
      }
      

      //check if this post is by a user we want to hide
		if (docs.hiddenUsersArr.length) {
			var hiddUsersArr = docs.hiddenUsersArr.split('#');
         
         if ($.inArray(uNum,hiddUsersArr) != -1) {
            //hide this post
            hideIgnoredPost(trParent,uNum);   
         }
         
      }
      
      return false;
	}
   
   //utility function to make hiding posts easier
   function hideIgnoredPost(trParent,uNum){
      //do we want to hide completely?
      if(docs.removeIgnoredUsers === 'true'){
         //bye bye
         trParent.hide();
      }else{
         //display the deleted message
         var userName = trParent.find('.bu_name').text();
         var postDate = trParent.find('.date').not('.edited').text().replace('posted ', '');
         var rowId = trParent.attr('id');
			
			trParent.hide();
			var row = $('<tr>');
			
			var showLink = $('<a href="javascript:void(0)">Unhide</a>').click(function(){
				trParent.show();
				row.hide();
			});
			
			var userNameTd = $('<td class="bodymore small" bgcolor="#e5e5e5">  User #' + uNum + ' &nbsp; <a href="/user/' + uNum + '" style="color: black;"><b>' + userName + '</b></a> </td>');
			var centerTd = $('<td class="bodymore small" bgcolor="#eeeeee"> <i>This post was hidden by you (Whirlpool Plus).</i></td>');
			var dateTd = $('<td class="bodymore small" bgcolor="#e5e5e5">' + postDate + '</td>');
			
			centerTd.append(showLink)
			
			row.append(userNameTd);
			row.append(centerTd);
			row.append(dateTd);
			
         trParent.before(row);
			
      }
   }
	
	
	var whirlpoolLastRead = {
	
		//Data stored in 'trackerData' variable, set by loadData function
		
		'init' : function(){
			this.loadData();
		},		
		
		'loadData' : function(){
			this.trackerData = JSON.parse(Whirlpool.get('whirlpoolLastReadData'));
			
			if(this.trackerData == false){
				this.trackerData = {};
			}
			
		},
		
		'saveData' : function(){
			Whirlpool.set('whirlpoolLastReadData',JSON.stringify(this.trackerData));
		},
		
		'saveThreadData' : function(threadNumber,threadReplyNumber,overallReplyNumber){
			this.loadData();
			this.trackerData[threadNumber] = {
				'threadReplyNumber' : threadReplyNumber,
				'overallReplyNumber' : overallReplyNumber
			};
			this.saveData();
		},
		
		'loadThreadData' : function(threadNumber){
			this.loadData();
			if(this.trackerData[threadNumber]){
				return this.trackerData[threadNumber];
			}else{
				return false;
			}
		},
		
		'importOldData' : function(){
			//run-once method to get all the old data
			var oldData = Whirlpool.get('lastRead0');
			
			if(oldData == false){
				//no data
				return;
			}
			
			var dataParts = oldData.split(',');
			
			for(partIndex in dataParts){
				var part = dataParts[partIndex];
				if(part.match('t=undefined') || part == ''){
					continue;
				}
			
				var threadReplyNumber = part.split('#r')[1];
				
				if(part.match('&p=')){
					var pageNumber = part.split('#r')[0].split('&p=')[1];
				}else{
					var pageNumber = '1';
				}
			
				var threadNumber = part.split('t=')[1].split('&')[0].split('#')[0];
				
				//write this data into the variable
				this.trackerData[threadNumber] = {
					'threadReplyNumber' : threadReplyNumber,
					'pageNumber' : pageNumber
				};
				
				
				
			}
			
			whirlpoolLastRead.saveData();
			
		},
		
		
		/*
		 * Records the last read reply in a thread. Should be run on forum-replies pages
		 */
		'forumReplies' : function(){
		
			//css rules
			if(Whirlpool.get('styleFlip') == 'false'){
				Whirlpool.css('#replies table tr.whirlpoolLastRead_readReply td.bodypost { background-color: ' + decodeURIComponent(Whirlpool.get('trackerPostBackgroundColour')) + '; background-image: none; }');
			}else{
				Whirlpool.css('#replies table tr.whirlpoolLastRead_unreadReply td.bodypost { background-color: ' + decodeURIComponent(Whirlpool.get('trackerPostBackgroundColour')) + '; background-image: none; }');
			}
		
			var lastReadReplyNumber = whirlpoolLastRead.loadThreadData(Whirlpool.threadNumber)['threadReplyNumber'];
			$('div#replies > table > tbody > tr').not(':hidden').each(function(){
				var reply = $(this);
				var replyNumber = $(reply.find('td:first-child > a')[0]).attr('name').split('r')[1];
				if(parseInt(replyNumber) <= parseInt(lastReadReplyNumber)){
					reply.addClass('whirlpoolLastRead_readReply');
				}else{
					reply.addClass('whirlpoolLastRead_unreadReply');
				}
			});
		
			var lowestViewHeight = window.innerHeight + window.pageYOffset;
			
			$(window).scroll(function(e){
				var currentViewHeight = window.innerHeight + window.pageYOffset;
				if(currentViewHeight > lowestViewHeight){
					lowestViewHeight = currentViewHeight;
				}
			});
			
			$(window).unload(function(){
				//need to find the last read reply
				var replies = $('div#replies > table > tbody > tr').not('#previewTR').not(':hidden');
				
				var lastReadReply;
				
				replies.each(function(){
					reply = $(this);
				
					var positionOfBottom = reply.offset().top + reply.height();
					if(positionOfBottom < lowestViewHeight){
						lastReadReply = reply;
					}else{
						return;
					}
				});
				
				if(!lastReadReply){
					//no replies read, so nothing doing
				}else{
					//record information for last read reply
					var replyNumberLinks = lastReadReply.find('td:first-child > a');
					if(replyNumberLinks.length < 2){
						alert('Sorry, something went wrong with thread tracking. If you see this message a lot, the tracker is probably broken');
					}else{
						var threadReplyNumber = parseInt($(replyNumberLinks[0]).attr('name').split('r')[1]);
						var overallReplyNumber = $(replyNumberLinks[1]).attr('name').split('r')[1];
						
						var currentData = whirlpoolLastRead.loadThreadData(Whirlpool.threadNumber);
						
						if(currentData == false || parseInt(currentData['threadReplyNumber']) <= threadReplyNumber){
							whirlpoolLastRead.saveThreadData(Whirlpool.threadNumber,threadReplyNumber,overallReplyNumber);
						}
					}
				}
				
			});
		},
		
		'forumPage' : function(){
			var threads = $('#threads > table > tbody > tr:not(.section)');
			
			threads.each(function(){
				var thread = $(this);
				var threadNumber = parseInt(thread.find('a.title').attr('href').split('t=')[1]);
				
				if(thread.is('.deleted') || thread.is('.pointer')){
					//ignore this one
					//Not deleted from database, as a thread may be undeleted in the future.
					return true;
				}
				
				var threadData = whirlpoolLastRead.loadThreadData(threadNumber);
				if((Whirlpool.get('dontTrackStickyThreads') == 'true') && (thread.is('.sticky'))){
					//leave the stickies alone
				}else{
					if(threadData){
						//we are tracking this thread
						
						var numberOfReplies = parseInt(thread.find('td.reps').not(':has(a)').text()) + 1; //need to add one, as original post is not counted as a reply here
						
						//change the end link regardless, as there might have been replies since a refresh
						//build the link
						var link;
						
						//do we have the new reply method?
						if(threadData['overallReplyNumber']){
							link = '/forum-replies.cfm?r=' +  threadData['overallReplyNumber'] + '#r' + threadData['overallReplyNumber']; //used by Simon's jumpToReplyId method, so preferred
						}else{
							//use the old page number method
							link = '/forum-replies.cfm?t=' + threadNumber + '&p=' + threadData['pageNumber'] + '#r' + threadData['threadReplyNumber'];
						}
						
						
						//change the link
						thread.find('.goend > a').attr('href',link).attr('title','Jump to last read post');
						
						//add the controls
						thread.find('.reps').not(':has(a)').append('<span class="whirlpoolLastRead_controls small"><a href="#" class="whirlpoolLastRead_stopTracking" title="Stop tracking this thread">S</a></span>');
						
						if(threadData['threadReplyNumber'] < numberOfReplies){
							//there are unread posts

							//we need to apply the unread class
							if(Whirlpool.get('onlyEndSquare') == 'true'){
								thread.find('td.goend').addClass('whirlpoolLastRead_unreadPosts');
							}else{
								thread.find('td').addClass('whirlpoolLastRead_unreadPosts');
							}
							
							if(Whirlpool.url.match('/forum/')){
								thread.find('.whirlpoolLastRead_controls').append('<br /><a href="#" class="whirlpoolLastRead_markAsRead" title="Mark this thread as read">M</a>');
							}
							
						}else{
							//all posts have been read
							if(Whirlpool.get('onlyEndSquare') == 'true'){
								thread.find('td.goend').addClass('whirlpoolLastRead_noUnreadPosts');
							}else{
								thread.find('td').addClass('whirlpoolLastRead_noUnreadPosts');
							}
						}
						

						
						
						
						thread.find('.whirlpoolLastRead_stopTracking').click(function(){
							whirlpoolLastRead.stopTracking(threadNumber);
							thread.children().removeClass('whirlpoolLastRead_unreadPosts whirlpoolLastRead_noUnreadPosts');
							thread.find('.whirlpoolLastRead_controls').remove();
							return false;
						});
						
						thread.find('.whirlpoolLastRead_markAsRead').click(function(){					
							whirlpoolLastRead.markAsRead(threadNumber);
							thread.children('.whirlpoolLastRead_unreadPosts').removeClass('whirlpoolLastRead_unreadPosts').addClass('whirlpoolLastRead_noUnreadPosts');
							thread.find('.whirlpoolLastRead_controls .whirlpoolLastRead_markAsRead').remove();
							return false;
						});
						
					}
				}
			});
			
		},
		
		'forumPageCss' : function(){
			Whirlpool.css('.whirlpoolLastRead_unreadPosts { background: url("http://tristanroberts.name/projects/wp-plus/png/gradient.png") repeat scroll 0 0 ' +  decodeURIComponent(Whirlpool.get('newPostBackgroundColour')) + ' !important;  }');
			Whirlpool.css('.whirlpoolLastRead_noUnreadPosts { background: url("http://tristanroberts.name/projects/wp-plus/png/gradient.png") repeat scroll 0 0 ' +  decodeURIComponent(Whirlpool.get('noNewPostBackgroundColour')) + ' !important;  }');
			Whirlpool.css('#content .whirlpoolLastRead_controls a { border-bottom-color:grey; border-bottom-style:dashed; font-size: 9px; margin-top: -5px; opacity:0.3; border-bottom-width:1px; float: left; }');
			Whirlpool.css('#content a.whirlpoolLastRead_markAsRead { margin-top: -8px; ');
		},
		
		'stopTracking' : function(threadNumber){
			delete this.trackerData[threadNumber];
			this.saveData();
		},
		
		
		'markAsRead' : function(threadNumber){
			//only operates on forum replies page.
			//have to use legacy pagenumber method
			
			//go get the page number
			var threadLink = $('a[href="/forum-replies.cfm?t=' + threadNumber + '"]');
			if(threadLink.length <= 0){
				//thread not on this page
				return;
			}
			
			var pageNumber;
			
			if(threadLink.parent().find('script').length <= 0){
				//no page link producing script, so only one page
				pageNumber = '1';
			}else{
				pageNumber = (threadLink.parent().find('script').text().split(',')[1]).split(')')[0];
			}
			
			//now we need to get the number of the last read reply.
			var numberOfReplies = parseInt(threadLink.closest('tr').find('.reps').text().split('S')[0]) + 1; //need to add one, as original post is not counted as a reply here
			
			//write data
			this.loadData();
			this.trackerData[threadNumber] = {
					'threadReplyNumber' : numberOfReplies,
					'pageNumber' : pageNumber
			};
			this.saveData();
			
			//change the link
			var link = '/forum-replies.cfm?t=' + threadNumber + '&p=' + pageNumber + '#r' + numberOfReplies;
			threadLink.closest('tr').find('.goend > a').attr('href',link);
			
			
			return false;
			
			
		}
		
		
		
	};
	
	
	if(Whirlpool.get('lastReadTracker') == 'true'){
		whirlpoolLastRead.init();
		
		//check to see if we need to import data from the old tracker
		if(Whirlpool.get('whirlpoolLastReadOldImported') == false){
			whirlpoolLastRead.importOldData();
			Whirlpool.set('whirlpoolLastReadOldImported',true)
		}
		
		if(Whirlpool.url.match('forum-replies')){
			whirlpoolLastRead.forumReplies();
		}
		if(Whirlpool.url.match('/forum/') || Whirlpool.url.match('/user/')){
			whirlpoolLastRead.forumPageCss()
			whirlpoolLastRead.forumPage();
		}
	}
	
	
	
	/*
	 * Add a "Reset Vote" button to aura, from http://whirlpool.net.au/wiki/reset_aura_vote
	 */
	if(Whirlpool.get('reset_aura_vote') == 'true' && Whirlpool.url.match('forum-replies')){
		$('.voteblock').each(function(){
			var block = $(this);
			var resetUser = block.attr('title');
			var replyId = $(block.closest('td.bodyuser').find('a')[1]).attr('name').split('r')[1];
			var clickFunction = 'userVote(' + replyId + ',' + resetUser + ',0,' + user.id + ');';
			block.children('span[id$="sn1"]').after(' <span class="voteitem" id="vote' + replyId + 's0" title="reset vote" onclick="' + clickFunction + '">?</span> ');
		});
	}
	

	// ! Glug (Legacy JS)
	/******************************************************* GLUG ***************************************************************************************************/


	var gmDefaults, docs = {
		d: document,
		dUrl: document.URL,
		dTitle: document.title,
		win: window,
		bt: null,
		saveOriginalHTML: null,
		lmtr: null,
		pTd3: null,
		q: null,
		eh: null,
		menuForum: $('#menu_forum ul'),
		uinfo: $('#left .userinfo'),
		checkIfSignedIn: $('#left #sign_in')[0],
		futer: $('#footer'),
		threadNumber: null,
		avatarCSS: false
	};

	function setGM() {

		gmDefaults = {
			'debugMode': 'false',
			'autoUpdateWPplus': '43200000',
			'smartUpdater': 'true',
			'installedScriptVersion': version,
			'lastScriptVersionCheck': '1232062510821',
			'dynamicMenuSystem': 'spinner',
			'quickReplybox': 'true',
			'quickReplyboxCols': '100',
			'quickReplyboxRows': '10',
			'autoPreview': 'true',
			'threadArchiveView': 'true',
			'threadView': 'true',
			'longThreadView': 'true',
			'moderatorPostView': 'true',
			'representativePostView': 'true',
			'autoSubscribe': 'false',
			'staticAvatars': 'true',
			'animatedAvatars': 'false',
			'editInPlace': 'true',
			'whirlcodeinWikiWhimNewThread': 'true',
			'noGluteusMaximus': 'false',
			'recentActivityDays': '7',
			'whIMMessageTextAreaCols': '45',
			'whIMMessageTextAreaRows': '10',
			'smilies': 'true',
			'inlineImages': 'true',
			'inlineVideos': 'true',
			'emoticonsBlue': 'true',
			'ignoreUser': 'false',
         'removeIgnoredUsers' : 'false',
			'customWPTheme': 'default',
			'whirlpoolBreadcrumbFont': 'default font',
			'whirlpoolSidemenuFont': 'default font',
			'showWhirlpoolFooterLinks': 'true',
			'enableWideWhirlpool': 'false',
			'penaltyBoxBackground': 'false',
			'userNotes': 'false',
			'hiddenUsersArr': '',
			'userNotesArr': '{}',
			'hideDRThreads': 'false',
			'hideMVThreads': 'false',
			'textareraSave': '',
			'lastReadTracker': 'true',
			//'numThreads2Track': '1000',
			'trackerPostBackgroundColour': '#CFCBBC',
			//'disableTrackerPostBackgroundColour': 'false',
			'readTheRulesYet': 'false',
			'newPostBackgroundColour': '#95b0cb',
			//'disableNewPostBackgroundColour': 'false',
			'noNewPostBackgroundColour': '#cbc095',
			//'disableNoNewPostBackgroundColour': 'false',
			'onlyEndSquare': 'false',
			'styleFlip': 'false',
			'dontTrackStickyThreads': 'false',
			//'noColourEndSquare': 'false',
			//'wlrSettingsScrollTo': 'false',
			'lastPost': 'false',
			'CSStextBox': ' ',
			'WLRfirstRun': 'true',
			'whimAlertNotice': 'false',
			'userpageInfoToggle': 'false',
			'postAlign': 'middle',
			'floatSidebar': 'true',
			'superBar': 'false',
			'ssHtml': 'Enter your notes here, even try dragging images and widgets!',
			'watchedThreadsAlert': 'default',
			'postsPerDay': 'true',
			'noTextShadow': 'false',
			'hideDelPosts': 'false',
			'syntaxHighlight': 'true',
			'chatbox': 'false',
			'my_links': 'false',
			'my_links_password': '',
			'emoticons': 'true',
			'inlinePages': 'true',
			'simple_backup': 'true',
			'unanswered_threads': 'true',
			'opOnlyView': 'false',
			'hide_closed_profile':'false',
			'hideForumIDs':'',
			'whim_archive_sort': true,
			'reset_aura_vote': 'false'
		};

		for (var k in gmDefaults) {

			if (!Whirlpool.get(k)) {

				Whirlpool.set(k, gmDefaults[k]);
				docs[k] = gmDefaults[k];

			} else {

				docs[k] = Whirlpool.get(k);

			}

		}

		if (Whirlpool.get('installedScriptVersion') != version) {
			Whirlpool.set('installedScriptVersion', version);
		}

	}

	function avatars() {
		if (docs.staticAvatars == 'true') {
			$('head').append('<link rel="stylesheet" type="text/css" href="' + server + 'css/avatars.css">');
			$('head').append('<link rel="stylesheet" type="text/css" href="http://wpplus.endorph.net/avatars/avatar.css">');
		}

		if (docs.animatedAvatars == 'true') {
			$('head').append('<link rel="stylesheet" type="text/css" href="' + server + 'css/animatedavatars.css">');
			$('head').append('<link rel="stylesheet" type="text/css" href="http://wpplus.endorph.net/avatars/animatedavatar.css">');
		}
	}

	function hideDelPosts() {
		$('.bodymore').parent().hide();
	}

	function time() {

		var xDate = new Date();
		var gF = xDate.getFullYear();
		var gM = xDate.getMonth() + 1;
		var dArr = ['' + gM + '', '' + xDate.getDate() + '', '' + xDate.getHours() + '', '' + xDate.getMinutes() + '', '' + xDate.getSeconds() + ''];

		for (var i = 0; i < dArr.length; i++) {

			if (dArr[i].length == 1) {

				dArr[i] = '0' + dArr[i];

			}

		}
		return escape(gF + "-" + dArr[0] + "-" + dArr[1] + "+" + dArr[2] + ":" + dArr[3] + ":" + dArr[4]);
	}
	var wcPrev = {

		showPreview: function () {

			if (docs.lmtr && !docs.pTd3) {

				$(docs.lmtr).after('<tr height="100" id="previewTR"><td class="bodyuser" style="vertical-align: middle;"><p style="opacity:0.3;font:2em bold Verdana">' + 'Preview</p></td><td class="bodytext"/><td class="bodypost" style="vertical-align: middle;"><p style="opacity:0.3;font:2em bold ' + 'Verdana">Preview</p></td></tr>');
				docs.pTd3 = $('#previewTR td:eq(1)');

			}

			/*** preview code by Simon Wright - http://forums.whirlpool.net.au/user/10 ***/

			var previewTimer;
			var previewWait = false;

			if (!previewWait) {

				previewWait = true;
				previewTimer = setTimeout(function () {

					docs.pTd3.html(unsafeWindow.whirlcode2(docs.q.val(), docs.eh));

					previewWait = false;

				},
				600);
			}

		}
	}
	
	var whirlC = {

		generalStyle: function () {

			Whirlpool.css('#qQuote{margin-top:20px;} #qqTextArea{background:#E5E5E5 none no-repeat scroll 50% 50%;border:1px solid gray;color:black;}' + '#qqpost{width: 150px; font-family: Arial; font-style: normal; font-variant: normal; font-weight: normal; font-size: 16px; ' + 'line-height: normal; font-size-adjust: none; font-stretch: normal; -x-system-font: none;} ' + '#qqpostclear{width: 150px; font-family: Arial; font-style: normal; font-variant: normal; font-weight: normal; font-size: 16px; ' + 'line-height: normal; font-size-adjust: none; font-stretch: normal; -x-system-font: none;} ' + '#opInputs p{float:left;margin-left:5px;}' + '#qqWCPreview{border:solid 1px grey;cursor:default;float:left;height:18px;margin-right:-80px;padding:2px;width:80px;} ' + '#qqPreview{display:none;text-align:left;padding:5px;background:#EEEEEE url(http://forums.whirlpool.net.au/img/forum/reply-eeeeee.gif) ' + 'repeat-x scroll center bottom;border:2px solid grey;margin-bottom:10px;width:60%;} ' + '#qqTooManyWords{display:none;background-color:#E8B760;height:250px;position:absolute;width:100%;font-weight:bold;z-index:6;} ' + '#aloader{display:none;}.qqwcodeButtons{font-size:0.9em;}');

		},
		code: function () {

			return {
				wc_whirlBold: {
					encloseLeft: "[*",
					encloseRight: "*]"
				},
				wc_whirlItalic: {
					encloseLeft: "[/",
					encloseRight: "/]"
				},
				wc_whirlSingleQuote: {
					encloseLeft: "['",
					encloseRight: "']"
				},
				wc_whirlDoubleQuote: {
					encloseLeft: "[\"",
					encloseRight: "\"]"
				},
				wc_whirlQuote: {
					encloseLeft: "[+",
					encloseRight: "+]"
				},
				wc_whirlSuperscript: {
					encloseLeft: "[^",
					encloseRight: "^]"
				},
				wc_whirlSubscript: {
					encloseLeft: "[\\",
					encloseRight: "\\]"
				},
				wc_whirlStrike: {
					encloseLeft: "[-",
					encloseRight: "-]"
				},
				wc_whirlCourier: {
					encloseLeft: "[#",
					encloseRight: "#]"
				},
				wc_whirlSmall: {
					encloseLeft: "[(",
					encloseRight: ")]"
				},
				wc_whirlGrey: {
					encloseLeft: "[`",
					encloseRight: "`]"
				},
				wc_whirlSerif: {
					encloseLeft: "[~",
					encloseRight: "~]"
				},
				wc_whirlGoogle: {
					encloseLeft: "[?",
					encloseRight: "?]"
				},
				wc_whirlEscape: {
					encloseLeft: "[.",
					encloseRight: ".]"
				},
				wc_whirlWiki: {
					encloseLeft: "[[",
					encloseRight: "]]"
				},
				wc_whirlSpoil: {
					encloseLeft: "[_",
					encloseRight: "_]"
				}
			}
		},
		buttons: function (id, w, c) {

			return '<div id="' + id + '" style="text-align:center;padding-bottom:10px;width:' + w + '">' + '<button type="button" class="' + c + '" title="Bold WhirlCode" accesskey="b" id="wc_whirlBold" >Bold</button>' + '<button type="button" class="' + c + '" title="Italic WhirlCode" accesskey="i" id="wc_whirlItalic" >Italic</button>' + '<button type="button" class="' + c + '" title="SingleQuote WhirlCode" accesskey="t" id="wc_whirlSingleQuote" >\'quote\'</button>' + '<button type="button" class="' + c + '" title="DoubleQuote WhirlCode" accesskey="q" id="wc_whirlDoubleQuote" >"quote"</button>' + '<button type="button" class="' + c + '" title="Quote WhirlCode" accesskey="h" id="wc_whirlQuote" >who</button>' + '<button type="button" class="' + c + '" title="Superscript WhirlCode" accesskey="p" id="wc_whirlSuperscript" >Super</button>' + '<button type="button" class="' + c + '" title="Subscript WhirlCode" accesskey="\\" id="wc_whirlSubscript" >Sub</button>' + '<button type="button" class="' + c + '" title="Strike WhirlCode" accesskey="k" id="wc_whirlStrike" >Strike</button>' + '<button type="button" class="' + c + '" title="Courier WhirlCode" accesskey="c" id="wc_whirlCourier" >Courier</button>' + '<button type="button" class="' + c + '" title="Small WhirlCode" accesskey="m" id="wc_whirlSmall" >Small</button>' + '<button type="button" class="' + c + '" title="Grey WhirlCode" accesskey="r" id="wc_whirlGrey" >Grey</button>' + '<button type="button" class="' + c + '" title="Serif WhirlCode" accesskey="s" id="wc_whirlSerif" >Serif</button>' + '<button type="button" class="' + c + '" title="Google WhirlCode" accesskey="g" id="wc_whirlGoogle" >Google</button>' + '<button type="button" class="' + c + '" title="Escape WhirlCode" accesskey="e" id="wc_whirlEscape" >Esc</button>' + '<button type="button" class="' + c + '" title="Wiki WhirlCode" accesskey="w" id="wc_whirlWiki" >Wiki</button>' + '<button type="button" class="' + c + '" title="Spoiler WhirlCode" accesskey="o" id="wc_whirlSpoil" >Spoiler</button>' + '<button type="button" class="' + c + '" title="URL Link" accesskey="u" id="wc_whirlurl" >URL</button>' + '<button type="button" class="' + c + '" title="Link" accesskey="l" id="wc_whirllink" >Link</button>' + 
			'</div>';

		},
		buttonEvents: function (c, tAr, whirlCode) {

			$('.' + c).bind('mouseup', function (evt) {

				var qqbuttonID = $(this).attr('id');
				tAr.focus(function () {}); //I don't understand it either, but tAr.focus(); without an anonymous function produces a weird error.
				var qqcurrentValue = tAr.val();
				var qqtheSelection = tAr.val().substring(tAr[0].selectionStart, tAr[0].selectionEnd);

				function insertAtCursor(qqmyField, qqmyValue) {

					if (qqmyField.selectionStart || qqmyField.selectionStart == '0') {

						var qqstartPos = qqmyField.selectionStart;
						var qqendPos = qqmyField.selectionEnd;
						qqmyField.value = qqmyField.value.substring(0, qqstartPos) + qqmyValue + qqmyField.value.substring(qqendPos, qqmyField.value.length);

					} else {

						qqmyField.value += qqmyValue;

					}

				}

				if (qqtheSelection === "") {

					if (((qqcurrentValue.split(whirlCode[qqbuttonID].encloseLeft).length + qqcurrentValue.split(whirlCode[qqbuttonID].encloseRight).length) % 2) === 0) {

						insertAtCursor(tAr[0], whirlCode[qqbuttonID].encloseLeft);

					} else {

						insertAtCursor(tAr[0], whirlCode[qqbuttonID].encloseRight);

					}

				} else if (qqbuttonID == "wc_whirlurl") {

					var uPrompt = window.prompt("Enter URL:", "http://");

					if ((uPrompt !== "http://") && (uPrompt !== "") & (uPrompt !== null)) {

						insertAtCursor(tAr[0], '<a href="' + uPrompt + '">' + qqtheSelection + '</a>');

					}

				} else if (qqbuttonID == "wc_whirllink") {
					
					var uPrompt = window.prompt("Enter Text:", "");

					if ((uPrompt !== "") & (uPrompt !== null)) {

						if (qqtheSelection.indexOf('http://') < 0) {

							qqtheSelection = 'http://' + qqtheSelection;

						}

						insertAtCursor(tAr[0], '<a href="' + qqtheSelection + '">' + uPrompt + '</a>');

					}

				} else {

					if (qqtheSelection.indexOf('\n') > -1 || qqtheSelection.indexOf('\r') > -1) {

						var tSel = qqtheSelection.replace(/^(.+)$/mg, whirlCode[qqbuttonID].encloseLeft + "$1" + whirlCode[qqbuttonID].encloseRight);

						tAr.val(tAr.val().replace(qqtheSelection, tSel));

					} else {

						insertAtCursor(tAr[0], whirlCode[qqbuttonID].encloseLeft + qqtheSelection + whirlCode[qqbuttonID].encloseRight);

					}

				}

				if (docs.pTd3) {

					wcPrev.showPreview();

				}

			});



		}

	}
	var wlrSettings = {
		set: function () {

			var l = $('<li>');
			var la = $('<a id="wPPSettingsLink" href="#">WP+ Settings</a>');
			l.append(la);
			var settingmenu = '<li id="menu_wpplus" class="even "><a class="xx" href="#" id="wpsettingslink"><span>WP+ Settings</span></a><span class="shim1"></span></li>';
			$('#menu_industry').after(settingmenu);

			if (docs.futer.text().match('The Pool Room')) {
				var uinfoName = docs.uinfo.children('dt:first').text();
				var newDDforA = $('<DD>');
				var aforDD = $('<a href="irc://au.austnet.org/tpr" target="_blank">TPR IRC Chat</a> <span style="font-size:0.7em;">(<a href="http://widget.mibbit.com/?settings=6c09163b5ce1890c08a31a91cb300b34&server=au.austnet.org&channel=%23tpr&nick=' + uinfoName + '" target="_blank">mibbit</a>)</span>');
				newDDforA.append(aforDD);
				docs.uinfo.append(newDDforA);
			}
			if (docs.futer.text().match('Lifestyle')) {
				var uinfoName = docs.uinfo.children('dt:first').text();
				var newDDforA = $('<DD>');
				var aforDD = $('<a href="irc://au.austnet.org/whirlpool" target="_blank">Whirlpool IRC</a> <span style="font-size:0.7em;">(<a href="http://widget.mibbit.com/?settings=6c09163b5ce1890c08a31a91cb300b34&server=au.austnet.org&channel=%23whirlpool&nick=' + uinfoName + '" target="_blank">mibbit</a>)</span>');
				newDDforA.append(aforDD);
				docs.uinfo.append(newDDforA);
			}

			if (docs.CSStextBox !== ' ') {
				Whirlpool.css(decodeURIComponent(docs.CSStextBox));
			}

			var updateGearsCheck = 'block';

			if (window.google) {
				updateGearsCheck = 'none';
			}

			var infoIcon = server + 'png/info.png';
			var arrowDown = server + 'png/down.png';
			var arrowUp = server + 'png/up.png';

			Whirlpool.css('#wlrSettingsDiv {' + 'background-color:#D3DAED;' + 'height:400px;' + 'left:50px;' + 'overflow-x:scroll;' + 'overflow-y:scroll;' + 'position:absolute;' + 'top:20px;' + 'width:500px;' + 'z-index:50;' + '}' + '#autoUpdateWPplus{' + '	display:' + updateGearsCheck + ';' + '}' + '#wlrSettingsDiv ul#wlrtabmenu li{' + 'border:3px solid #777;' + 'border-width:3px 3px 1px;' + 'float:left;' + 'height:20px;' + 'margin-right:10px;' + 'padding:5px;' + 'width:140px;' + 'text-align:center;' + '	color:white;' + '}' + '#wlrSettingsDiv #wlrtabmenu li.active{' + '	background-color:orange;' + '	border:3px solid #555;' + '	border-width:3px 3px 1px;' + '}' + '#wlrSettingsDiv #wlrtabmenu li:hover{' + 'cursor:pointer;' + 'border:3px solid #555;' + 'border-width:3px 3px 1px;' + '}' + '#wlrSettingsDiv .wlrsetbutDown{' + 'background:transparent url("' + arrowDown + '") no-repeat;' + 'height:21px;' + 'padding:0;' + 'width:21px;	' + 'position:relative;' + 'top:-5px;' + 'left:4px;' + '}' + '#wlrSettingsDiv .wlrsetbutUp{' + 'background:transparent url("' + arrowUp + '") no-repeat;' + 'height:21px;' + 'padding:0;' + 'width:21px;	' + 'position:relative;' + 'top:-5px;' + 'left:4px;' + '}' + '#wlrSettingsDiv p{' + '	border-bottom:1px dashed grey;' + '	margin-left:15px;' + '	padding-bottom:15px;' + '}' + '#prevContainer>*{' + //just chucking these here so can save an extra Whirlpool.css()
			'margin-left:10px;' + 'margin-right:12px;}' + '.maximumWidthImage{' + 'max-width:999999999999px !important;' + '}#wlrSettingsDiv label:hover{cursor:pointer;}');

			var wlrSettingsDivTop;
			(window.innerHeight > 560) ? wlrSettingsDivTop = '6%' : wlrSettingsDivTop = '0';
			// ! Settings HTML
			var settingsHTML = '<div id="wlrSettingsDiv" style="background-color:#999999;border:1px solid black;color:#333333;display:none;' + 'left:50%;margin-left:-400px;padding:0 12px;position:fixed;top:' + wlrSettingsDivTop + ';width:800px;overflow:hidden;height:540px;max-height:100% !important;' + 'display:block;z-index:3000;">' + '<ul id="wlrtabmenu" style="list-style:none;float:left;margin:14px 0px 0px 32px">' + '<li class="active wlrtabmenuTabs">General Settings</li>' + '<li class="wlrtabmenuTabs">Custom CSS</li>' + '<li class="wlrtabmenuTabs">Hidden Users</li>' + '</ul>		' + '<div id="setContainer" class="wlrtabmenuDivs" style="float:left;border:3px solid #555;background-color:#EEEEEE;height:440px;margin-bottom:5px;overflow-x:hidden;overflow-y:scroll;">' + '<button id="resetWLR" style="margin: 10px 10px 5px 250px;">Reset All Settings To Default Values</button>' + '<div style="margin: 10px 10px 5px 290px;opacity:0.4;">Installed Script Version: ' + docs.installedScriptVersion + '</div>' + '<hr />' + '<span style="float:right;margin-right:10px;font-size:12px;font-weight:900;">Scroll down for more settings.</span>' + '<p id="debugMode">' + '<input type="checkbox" name="enabledebugmode" id="enabledebugmode">' + '<label for="enabledebugmode">Enable Debug Mode</label>' +

			'</p>    ' + '<p id="smartUpdater">' + '<input type="checkbox" name="updater" id="updater">' + '<label for="updater">Enable automatic updater.</label>' +

			'<a href="http://userscripts.org/scripts/source/85217.user.js" id="force_update">Force Update</a> ' + '<label for="force_update">Automatically updates to the latest version</label>' +

			'</p>' + '<p id="dynamicMenuSystem">' + '<select name="dynamicMen" id="dynamicMen">' + '<option value="none">none</option>' + '<option value="rightClick">Right click</option>' + '<option value="spinner">Spinner</option>' + '</select>     ' + '<label for="dynamicMen">Dynamic Menu System</label>' + '</p>    ' + '<p id="quickReplybox">' + '<input type="checkbox" name="quickRepb" id="quickRepb">' + '<label for="quickRepb">Enable a Quick Reply Box at the bottom of threads and Quick Quote links next to posts.</label>' +

			'</p>     ' + '<p id="quickReplyboxCols">' + '<input type="text" readonly="readonly" name="quickReplyboxC" id="quickReplyboxC">' + '<button class="wlrsetbutDown" type="button"></button> ' + '<button class="wlrsetbutUp" type="button"></button> ' + '<label for="quickReplyboxC">Change the number of cols(width) of the Quick Reply Box.</label>' +

			'</p>     ' + '<p id="quickReplyboxRows">' + '<input type="text" readonly="readonly" name="quickReplyboxR" id="quickReplyboxR">' + '<button class="wlrsetbutDown" type="button"></button> ' + '<button class="wlrsetbutUp" type="button"></button> ' + '<label for="quickReplyboxR">Change the number of rows(height) of the Quick Reply Box.</label>' +

			'</p> ' + '<p id="autoPreview">' + '<input type="checkbox" name="autoPr" id="autoPr">' + '<label for="autoPr">Show a preview of what you are typing in the quick quote box</label>' +
			'</p> ' + '<p id="hide_closed_profile">' + '<input type="checkbox" name="hcp" id="hcp">' + '<label for="hcp">Hide closed threads on user profiles.</label>' +

			'</p>     ' + '<p id="unanswered_threads">' + '<input type="checkbox" name="unansweredThreads" id="unansweredThreads">' + '<label for="unansweredThreads">Provides a link to unanswered threads (threads with no replies).</label>' +

			'</p> ' + '<p id="opOnlyView">' + '<input type="checkbox" name="onlyOp" id="onlyOp">' + '<label for="onlyOp">Show only OP posts view link at top of thread.</label>' +

			'</p>       ' + '<p id="threadArchiveView">' + '<input type="checkbox" name="threadArchiveV" id="threadArchiveV">' + '<label for="threadArchiveV">Show all posts in Thread Archive View Link at top of thread.</label>' +

			'</p> ' + '<p id="longThreadView">' + '<input type="checkbox" name="longThreadV" id="longThreadV">' + '<label for="longThreadV">Show all Posts in Long Thread View Link at top of thread.</label>' +

			'</p>       ' + '</p>     ' + '<p id="moderatorPostView">' + '<input type="checkbox" name="moderatorPostV" id="moderatorPostV">' + '<label for="moderatorPostV">Show a link to view only moderator posts.</label>' +

			'</p> ' + '</p>  ' + '<p id="representativePostView">' + '<input type="checkbox" name="representativePostV" id="representativePostV">' + '<label for="representativePostV">Show a link to view only representative posts.</label>' +

			'</p>       ' + '</p>     ' + '<p id="autoSubscribe">' + '<input type="checkbox" name="autoSubs" id="autoSubs">' + '<label for="autoSubs">Automatically subscribe to a thread when you make a post.</label>' +

			'</p>' + '</p>     ' + '<p id="staticAvatars">' + '<input type="checkbox" name="staticAv" id="staticAv">' + '<label for="staticAv">Display static avatars (non-animatied).</label>' +

			'</p>     ' + '</p>     ' + '<p id="animatedAvatars">' + '<input type="checkbox" name="animatedAv" id="animatedAv">' + '<label for="animatedAv">Display animated avatars.</label>' +
			
			'</p>     ' + '</p>     ' + '<p id="hideForumIDs">' + '<input type="text" name="hfids" id="hfids">' + '<label for="hfids">The IDs of forums to hide (eg. "35 92 137")</label>' +

			'</p> ' + '<p id="editInPlace">' + '<input type="checkbox" name="editInP" id="editInP">' + '<label for="editInP">Turn on ability to edit post in thread using Ajax.</label>' +

			'</p>       ' + '</p>     ' + '<p id="simple_backup">' + '<input type="checkbox" name="simple_backup" id="simple_backup">' + '<label for="simple_backup">Stores a backup of whatever you write in a reply/whim and allows for quickly reverting back to the last version.</label>' +

			'</p> ' + '<p id="whirlcodeinWikiWhimNewThread">' + '<input type="checkbox" name="whirlcodeinWikiWhimNewT" id="whirlcodeinWikiWhimNewT">' + '<label for="whirlcodeinWikiWhimNewT">Turn this on to use Whirlcode in Wiki and New Page Thread.</label>' +

			'</p> ' + '<p id="whim_archive_sort">' + '<input type="checkbox" name="archive_sor" id="archive_sor">' + '<label for="archive_sor">Sorts the Whim Archive page into alphabetical order.</label>' + '</p> ' + '</p>       ' + '<p id="noGluteusMaximus">' + '<input type="checkbox" name="noGluteusM" id="noGluteusM">' + '<label for="noGluteusM">Removes the &p=-1#bottom from thread links on the main index page on Whirlpool</label>' +

			'</p> ' + '</p>       ' + '<p id="chatbox">' + '<input type="checkbox" name="cBox" id="cBox">' + '<label for="cBox">Turn on the Whirlpool Plus chatbox.  To use, you MUST agree with the <a href="http://whirlpool.net.au/wiki/?tag=wpplus_chatbox_rules" target="_blank">rules</a> of the chatbox.</label>' + '</p> ' + '<p id="syntaxHighlight">' + '<input type="checkbox" name="syntaxHighlight" id="syntaxHighlight">' + '<label for="syntaxHighlight">Turn on code syntax highlighting (supports most languages).</label>' + '</p> ' + '</p>       ' + '<p id="recentActivityDays">' + '<select name="recentActivityD" id="recentActivityD">' + '<option value="1">1</option>' + '<option value="3">3</option>' + '<option value="7">7</option>' + '<option value="14">14</option>' + '<option value="30">30</option>' + '<option value="60">60</option>' + '<option value="120">120</option>' + '</select>     ' + '<label for="recentActivityD">Set your default Recent Activity Days on your user page. Default is 7 - set it to 7 to disable this custom function.</label>' +

			'</p> ' + '</p>       ' + '<p id="whIMMessageTextAreaCols">' + '<input type="text" readonly="readonly" name="whIMMessageTextAreaC" id="whIMMessageTextAreaC">' + '<button class="wlrsetbutDown" type="button"></button> ' + '<button class="wlrsetbutUp" type="button"></button> ' + '<label for="whIMMessageTextAreaC">Increase/Decrease the number of columns (width) of the WhIM Message Area.</label>' +

			'</p> ' + '<p id="whIMMessageTextAreaRows">' + '<input type="text" readonly="readonly" name="whIMMessageTextAreaR" id="whIMMessageTextAreaR">' + '<button class="wlrsetbutDown" type="button"></button> ' + '<button class="wlrsetbutUp" type="button"></button> ' + '<label for="whIMMessageTextAreaR">Increase/Decrease the number of rows (height) of the WhIM Message Area.</label>' +

			'</p> ' + '</p>       ' + '<p id="emoticons">' + '<input type="checkbox" name="smile" id="smile">' + '<label for="smile">With smilies on, script will automatically change text emoticons (eg. :D) into their respective images.</label></p>' + '<p id="emoticonsBlue">' + '<input type="checkbox" name="smileb" id="smileb">' + '<label for="smileb">Use the original blue smilies instead of the yellow ones.</label>' +

			'</p>       ' + '<p id="inlineImages">' + '<input type="checkbox" name="inlineI" id="inlineI">' + '<label for="inlineI">Turns image links into images.</label>' +

			'</p>             ' + '<p id="inlineVideos">' + '<input type="checkbox" name="inlineV" id="inlineV">' + '<label for="inlineV">Turn on ability to change YouTube and google video links to embedded videos with title.</label>' +

			'</p>  ' + '<p id="inlinePages">' + '<input type="checkbox" name="inlinePages" id="inlinePages">' + '<label for="inlinePages">Adds the ability to see links inline of WP.</label>' +

			'</p> ' + '</p>             ' + '<p id="ignoreUser">' + '<input type="checkbox" name="ignoreUserB" id="ignoreUserB">' + '<label for="ignoreUserB">Adds a button next to each user\'s aura vote smilies, which when activated will prevent you from ' + 'seeing that user (you will see a post hidden message, similar to a post removed by a moderator). <strong>WARNING: Ignoring a user will cause ALL of their posts not to appear for you any more. If you want to remove someone from ' + 'being ignored, click on the "Hidden Users" tab above.</strong></label>' +
         
			'</p> ' + '</p>             ' + '<p id="removeIgnoredUsers">' + '<input type="checkbox" name="removeIgnoredUsersB" id="removeIgnoredUsersB">' + '<label for="removeIgnoredUsersB">Completely hide all indication of removed users (the hidden post bar will not be displayed). <strong>WARNING: You will see no indication that a user has been removed.</strong></label>' +
			
			'</p> ' + '</p>             ' + '<p id="reset_aura_vote">' + '<input type="checkbox" name="reset_aura_vote" id="reset_aura_vote_checkbox">' + '<label for="reset_aura_vote_checkbox">Add a reset aura smiley</label>' +

			'</p> ' + '</p>             ' + '<p id="userNotes">' + '<input type="checkbox" name="userNotesBox" id="userNotesBox">' + '<label for="userNotesBox">User Notes</label>' +

			'</p> ' + '<p id="watchedThreadsAlert">' + '<select name="s_threadalert" id="s_threadAlert">' + '<option value="default">None</option>' + '<option value="watched">Go to watched threads</option>' + '<option value="thread">Return to the thread</option>' + '</select>     ' + '<label for="s_threadAlert">Choose what action to do on the "watching thread" alert.</label>' +

			'</p> ' + '<p id="customWPTheme">' + '<select name="s_customtheme" id="s_customtheme">' + '<option value="">Default (by Simon Wright)</option>' + '<option value="http://www.members.optusnet.com.au/kev.nat/Whirlpool%20Noir/1/WP%20BLACK.css">WP Black (by =CHRIS=)</option>' + '<option value="@import url(http://members.optusnet.com.au/foonly/wpblue/1/css/core.css);">WP Blue (by Foonly)</option>' + '<option value="@import url(http://members.optusnet.com.au/whirlpoolian/classic/css/core.css);">WP Classic</option>' + '<option value="http://www.members.optusnet.com.au/kev.nat/green/WP-GREEN.css">WP Green (by =CHRIS=)</option>' + '<option value="http://www.members.optusnet.com.au/kev.nat/wood/WP-WOOD.css">WP Wood (by =CHRIS=)</option>' + '<option value="http://www.members.optusnet.com.au/kev.nat/purple/WP-PURPLE.css">WP Purple (by =CHRIS=)</option>' + '<option value="@import url(http://members.optusnet.com.au/whirlpoolian/greyscale/css/core.css);" selected="selected">WP Grey</option>' + '<option value="@import url(http://members.optusnet.com.au/whirlpoolian/steelyellow/css/core.css);">WP Steel Yellow</option>' + '</select>     ' + '<label for="s_cutomtheme">Choose a WP Theme to Use</label>' +

			'</p> ' + '<p id="noTextShadow">' + '<input type="checkbox" name="textShadow" id="textShadow">' + '<label for="textShadow">Disable all <tt>text-shadow</tt> CSS attributes (FF 3.5+ only).</label>' +

			'</p>' + '<p id="whirlpoolBreadcrumbFont">' + '<select name="whirlpoolBreadcrumbF" id="whirlpoolBreadcrumbF">' + '<option value="default font">default font</option>' + '<option value="Verdana">Verdana</option>' + '<option value="Arial">Arial</option>' + '<option value="Georgia">Georgia</option>' + '<option value="Tahoma">Tahoma</option>' + '<option value="Trebuchet MS">Trebuchet MS</option>' + '</select>     ' + '<label for="whirlpoolBreadcrumbF">Change the Breadcrumb Font.</label>' +

			'</p>' + '<p id="whirlpoolSidemenuFont">' + '<select name="whirlpoolSidemenuF" id="whirlpoolSidemenuF">' + '<option value="default font">default font</option>' + '<option value="Verdana">Verdana</option>' + '<option value="Arial">Arial</option>' + '<option value="Georgia">Georgia</option>' + '<option value="Tahoma">Tahoma</option>' + '<option value="Trebuchet MS">Trebuchet MS</option>' + '</select>     ' + '<label for="whirlpoolSidemenuF">Change the Sidemenu Font.</label>' +

			'</p>' + '<p id="showWhirlpoolFooterLinks">' + '<input type="checkbox" name="showWhirlpoolFooterL" id="showWhirlpoolFooterL">' + '<label for="showWhirlpoolFooterL">Show Whirlpool Footer Links.</label>' +

			'</p>      ' + '</p>' + '<p id="enableWideWhirlpool">' + '<input type="checkbox" name="enableWideWh" id="enableWideWh">' + '<label for="enableWideWh">Make Whirlpool Forums Wide to fit widescreen.</label>' +

			'</p>             ' + '</p>' + '<p id="penaltyBoxBackground">' + '<input type="checkbox" name="penaltyBoxB" id="penaltyBoxB">' + '<label for="penaltyBoxB">Highlight when a user is in the penalty box.</label>' +

			'</p> ' + '</p>' + '<p id="whimAlertNotice">' + '<input type="checkbox" name="wAlertNotice" id="wAlertNotice">' + '<label for="wAlertNotice">Show an alert notice at the top of the page when you have received a new WHIM</label>' +

			'</p> ' + '</p>' + '<p id="userpageInfoToggle">' + '<input type="checkbox" name="upageInfoToggle" id="upageInfoToggle">' + '<label for="upageInfoToggle">Hide/Toggle user info on user pages.</label>' +

			'</p> ' + '<p id="hideDRThreads">' + '<input type="checkbox" name="hideDRT" id="hideDRT">' + '<label for="hideDRT">Hide Deleted/Removed Threads in forum view</label>' +

			'</p>     ' + '<p id="hideMVThreads">' + '<input type="checkbox" name="hideMVT" id="hideMVT">' + '<label for="hideMVT">Hide Moved Threads in forum view</label>' +

			'</p>     ' + '<p id="hideDelPosts">' + '<input type="checkbox" name="hideDelPost" id="hideDelPost">' + '<label for="hideDelPost">Hide deleted posts in threads.</label>' +

			'</p>     ' + '<p id="floatSidebar">' + '<input type="checkbox" name="enablefloatBar" id="enablefloatBar">' + '<label for="enablefloatBar">Floats the sidebar as you scroll. <em>Note: May not work correctly with some screen resolutions without using Widescreen Mode.</em></label>' +

			'</p>    ' + '<p id="superBar">' + '<input type="checkbox" name="enablesuperBar" id="enablesuperBar">' + '<label for="enablesuperBar">Adds a Sticky notes section to the sidebar (may be buggy).</label>' +

			'</p>    ' + '<p id="postsPerDay">' + '<input type="checkbox" name="enablesuperBar" id="enablesuperBar">' + '<label for="enablesuperBar">Enable "Posts per day" statistic on user pages.</label>' +

			'</p>    ' + '<p id="postAlign">' + '<select name="postAl" id="postAl">' + '<option value="middle">middle</option>' + '<option value="top">top</option>' + '</select>     ' + '<label for="postAl">Aligns the text in a post to the top or middle.</label>' +

			'</p>' + '<p id="lastReadTracker">' + '<input type="checkbox" name="lastReadT" id="lastReadT">' + '<label for="lastReadT">Turns WLR Last Read Tracker on or off.</label>' +

//			'</p>       ' + '<p id="numThreads2Track">' + '<select name="s_numThreads2Track" id="s_numThreads2Track">' + '<option value="300">300</option>' + '<option value="500">500</option>' + '<option value="1000">1000</option>' + '<option value="2000">2000</option>' + '<option value="5000">5000</option>' + '</select>     ' + '<label for="s_numThreads2Track">Number Of Threads To Track:</label>' +

			'</p>     ' + '<p id="trackerPostBackgroundColour" class="needCpicker">' + '<input type="text" name="trackerPostBackgroundC" id="trackerPostBackgroundC">' + '<label for="trackerPostBackgroundC">Highlighted Posts Colour</label>' + '</p>     ' + //'<p id="disableTrackerPostBackgroundColour">' + '<input type="checkbox" name="disableTrackerPostBackgroundC" id="disableTrackerPostBackgroundC">' + '<label for="disableTrackerPostBackgroundC">Disable Highlighted Posts colouring</label>' +

			'</p>     ' + '<p id="newPostBackgroundColour" class="needCpicker">' + '<input type="text" name="newPostBackgroundC" id="newPostBackgroundC">' + '<label for="newPostBackgroundC">New Posts Thread Colour</label>' + '</p>     ' + //'<p id="disableNewPostBackgroundColour">' + '<input type="checkbox" name="disableNewPostBackgroundC" id="disableNewPostBackgroundC">' + '<label for="disableNewPostBackgroundC">Disable New Posts Thread colouring</label>' +

			'</p> ' + '<p id="noNewPostBackgroundColour" class="needCpicker">' + '<input type="text" name="noNewPostBackgroundC" id="noNewPostBackgroundC">' + '<label for="noNewPostBackgroundC">No New Posts Thread Colour</label>' + '</p>       ' + //'<p id="disableNoNewPostBackgroundColour">' + '<input type="checkbox" name="disableNoNewPostBackgroundC" id="disableNoNewPostBackgroundC">' + '<label for="disableNoNewPostBackgroundC">Disable No New Posts Thread colouring</label>' +

			'</p>      ' + '<p id="onlyEndSquare">' + '<input type="checkbox" name="onlyEndSq" id="onlyEndSq">' + '<label for="onlyEndSq">Only colour end square </label>' +

			'</p> ' + '<p id="styleFlip">' + '<input type="checkbox" name="styleFl" id="styleFl">' + '<label for="styleFl">Style flip - Colours unread posts in threads rather than read posts</label>' +

			'</p>       ' + '<p id="dontTrackStickyThreads">' + '<input type="checkbox" name="dontTrackStickyT" id="dontTrackStickyT">' + '<label for="dontTrackStickyT">Don\'t track sticky threads</label>' +

//			'</p>       ' + '<p id="noColourEndSquare">' + '<input type="checkbox" name="noColourEndSq" id="noColourEndSq">' + '<label for="noColourEndSq">Don\'t colour end square</label>' +

//			'</p> ' + '<p id="wlrSettingsScrollTo">' + '<input type="checkbox" name="wlrSettingsScroll2" id="wlrSettingsScroll2">' + '<label for="wlrSettingsScroll2">Scroll to anchor after page load</label>' +

			'</p>   ' + '<p id="lastPost">' + '<input type="checkbox" name="lastPos" id="lastPos">' + '<label for="lastPos">Go to the last post in the thread after posting</label>' +

			'</p>   ' + '<br/>' + '</div>' + '<div id="customCSSTab" style="display:none;float:left;border:3px solid #333;background-color:#EEEEEE;height:440px;width:795px;margin-bottom:5px;overflow:hidden;" class="wlrtabmenuDivs">' + '<p id="customCSS" style="width:100%;height:100%;float:left;overflow-x:hidden;overflow-y:scroll;">' + '<textarea id="cusCSS" style="width:760px;height:408px;float:left;"></textarea>' + '</p>   ' + '</div>' + '<div id="hiddenUsersTab" style="display:none;float:left;border:3px solid #333;background-color:#EEEEEE;height:440px;width:795px;margin-bottom:5px;overflow-x:hidden;overflow-y:scroll;" class="wlrtabmenuDivs">' + '</div>' + '<button id="saveWLR" style="float:right;margin-top:6px;">Save</button>' + '<button href="#" id="closeWlrSettingsModal" style="float:right;margin-top:6px;" title="close">Cancel</button>' + '<br />' + '</div>';

			$('#wpsettingslink').click(function () {

				$('body').append('<div id="wlrsettingsoverlay" style="height: 100%; width: 100%; position: fixed; left: 0pt; top: 0pt; z-index: 2999; opacity: 0.5; background-color:#000000;"/>').append(settingsHTML);

				var custCSS = $('#cusCSS');
				var newP = $('<p id="hiddenUsersArr">');
				var newUl = $('<ul>');
				newP.append(newUl);
				$('#hiddenUsersTab').append(newP);

				$('#wlrWikiLink').mouseup(function () {
					GM_openInTab('http://whirlpool.net.au/wiki/?tag=whirlpool_plus');
				});

				var wmT = $('.wlrtabmenuTabs');
				var wmD = $('.wlrtabmenuDivs');
				wmT.click(function () {

					wmT.removeClass('active');
					$(this).addClass('active');
					wmD.hide();
					wmD.eq(wmT.index(this)).show();
					return false;

				});


				$('#closeWlrSettingsModal').mouseup(function () {
					$('#wlrSettingsDiv, #wlrsettingsoverlay').remove();
				});
				$('.wlrInfo').click(function () { //info ...
					return false;
				});
				

				function iterOverSettings(getOrSet) {

					$('#wlrSettingsDiv p').each(function (i) {

						var spaThis = $(this);

						var inp = spaThis.children().eq(0);
						var spID = spaThis.attr('id');
						var getG = Whirlpool.get(spID);
						
						if(typeof inp[0] != 'undefined'){
							if (inp[0].nodeName === "INPUT") {

								if (inp[0].type === "checkbox") {

									if (getOrSet === 'get') {
										if (getG === 'true') {

											inp.attr('checked', 'checked');

										}
									} else {

										if (inp.attr('checked')) {
											docs[spID] = 'true';
										} else {
											docs[spID] = 'false';
										}
										Whirlpool.set(spID, docs[spID]);

									}

								} else if (inp[0].type === "password" || inp[0].type === "text") {

									if (getOrSet === 'get') {
										inp.val(decodeURIComponent(getG));
									} else {

										docs[spID] = encodeURIComponent(inp.val());
										Whirlpool.set(spID, docs[spID]);
									}

								}

							} else if (inp[0].nodeName === "SELECT") {
								inp.children('option').each(function () {
									var optThis = $(this);

									if (getOrSet === 'get') {
										if (getG === optThis.attr('value')) {

											optThis.attr('selected', 'selected');
										} else if (optThis.attr('selected')) {
											optThis.removeAttr('selected');
										}
									} else {
										if (optThis.attr('selected')) {
											docs[spID] = optThis.attr('value');
											Whirlpool.set(spID, docs[spID]);
										}
									}
								});

							} else if (inp[0].nodeName === "UL") {

								if (docs.hiddenUsersArr.length) {
									var hiddUsersArr1 = docs.hiddenUsersArr.split('#');
									hiddUsersArr1.shift();
									if (getOrSet === 'get') {
										$(hiddUsersArr1).each(function () {
											inp.append('<li>User: <a href="http://forums.whirlpool.net.au/user/' + this + '">#' + this + '</a>\'s posts are currently hidden.&nbsp;&nbsp;<input type="checkbox" ' + 'uNumNoHide="' + this + '" name="noHide" class="noHide" value="noHide">&nbsp;&nbsp; - ' + 'Unhide User</li>');

										});
									} else {

										inp.find("input:checked").each(function () {
											var toReplace = '#' + $(this).attr('uNumNoHide');
											docs.hiddenUsersArr = docs.hiddenUsersArr.replace(toReplace, '');
											Whirlpool.set('hiddenUsersArr', docs.hiddenUsersArr);

										});
									}
								}
							}
						
						}

					});
					if (getOrSet === 'get') {
						custCSS.val(decodeURIComponent(docs.CSStextBox));
					} else {
						docs.CSStextBox = encodeURIComponent(custCSS.val());
						Whirlpool.set('CSStextBox', docs.CSStextBox);
						$('#wlrSettingsDiv, #wlrsettingsoverlay').remove();
					}
				}
				iterOverSettings('get');
				$('#forceUpdate').mouseup(function () {
					autoUpdate.xhrCheck('force');
				});
				$('.wlrsetbutUp').mouseup(function () {
					var tBox1 = $(this).prev().prev();
					tBox1.val((Number(tBox1.val()) + 1).toString());
				});
				$('.wlrsetbutDown').mouseup(function () {
					var tBox2 = $(this).prev();
					var currentVal = Number(tBox2.val());
					if (currentVal > 0) {
						tBox2.val((currentVal - 1).toString());
					}
				});
				$('#resetWLR').mouseup(function () {

					for (var l in gmDefaults) {

						Whirlpool.set(l, gmDefaults[l]);
						docs[l] = gmDefaults[l];


					}
					iterOverSettings('get');

				});
				
				
				$('#saveWLR').mouseup(function () {
					iterOverSettings('set');
					location.reload( true );

				});
				return false;

			});


		},
		firstRun: function () {

			var ohHaiHTML = '<div id="ohHaiDiv" style="background-color:#EEEEEE;border:1px solid black;color:#333333;display:none;' + 'left:50%;margin-left:-300px;padding:12px;position:fixed;top:17%;width:600px;overflow:hidden;height:430px;' + 'display:block;z-index:3000;">' + '<a href="#" id="closeohHaiModal" style="float:right;font-weight:bold;font-size:2em;clear:both;color:black;">X</a><br /><br/>' + '<img src="' + server + 'png/welcome.png" alt="default.aspx2.jpg" />' + '</div>';
			$('body').append('<div id="ohHaioverlay" style="height: 100%; width: 100%; position: fixed; left: 0pt; top: 0pt; z-index: 2999; opacity: 0.5; background-color:#000000;"/>').append(ohHaiHTML);

			docs.WLRfirstRun = 'false';
			Whirlpool.set('WLRfirstRun', 'false');

			$('#closeohHaiModal').click(function () {

				$('#ohHaiDiv, #ohHaioverlay').remove();
				return false;

			});
		}
	}
	
	var scriptIdUrl = '85217'; //First change by Troberto :)
	var autoUpdate = {

		aUpRegular: function (rdt, currentVersion, getChanges) {

			if (Number(currentVersion.replace('.', '')) < Number(rdt.replace('.', ''))) {

				var upDate = confirm('The latest version of Whirlpool Plus is version ' + rdt + ' - you have version ' + currentVersion + ' installed. Changes:' + '\r\n\r\n' + getChanges + '\r\n\r\n Do you want to update now?');
				if (upDate) {
					Whirlpool.set('installedScriptVersion', rdt);
					window.location.href = "http://userscripts.org/scripts/source/" + scriptIdUrl + ".user.js";
				} else {
					var tym = '~';
					if (docs.autoUpdateWPplus === "3600000") {
						tym = '1 hour';
					} else if (docs.autoUpdateWPplus === "21600000") {
						tym = '6 hours';
					} else if (docs.autoUpdateWPplus === "43200000") {
						tym = '12 hours';
					} else if (docs.autoUpdateWPplus === "86400000") {
						tym = '24 hours';
					}
					Wp.notify('You will not received this notification again until ' + tym + ' later.', false, 5000);
				}

			}


		},
		aUpForce: function (rdt, currentVersion, getChanges) {

			var upDate = confirm('The latest version of Whirlpool Plus is version ' + rdt + ' - you have version ' + currentVersion + ' installed. ' + '\r\n\r\n changes - ' + getChanges + '\r\n\r\n Do you want to update now?');
			if (upDate) {
				Whirlpool.set('installedScriptVersion', rdt);
				window.location.href = "http://userscripts.org/scripts/source/" + scriptIdUrl + ".user.js";
			}

		},
		xhrCheck: function (regOrForce) {

			Whirlpool.ajax({
				method: 'GET',
				url: 'http://userscripts.org/scripts/review/' + scriptIdUrl,
				headers: {
					'User-agent': 'Mozilla/4.0 (compatible) Greasemonkey',
					'Accept': 'text/plain'
				},
				onload: function (responseDetails) {
					var getSNum = $.trim(responseDetails.responseText.split('==UserScript==')[1].split('// @require')[0].split('@version')[1].split('//')[0]);
					var spliterrific = responseDetails.responseText.split('==Changes==')[1].split('// ==/Changes==')[0].split('changes - ');
					var getChanges = spliterrific[spliterrific.length - 1].replace('***************/', '');
					var currentVersion = Whirlpool.get('installedScriptVersion');
					if (regOrForce === 'force') {
						autoUpdate.aUpForce(getSNum, currentVersion, getChanges);
					} else {
						autoUpdate.aUpRegular(getSNum, currentVersion, getChanges);
					}

				}
			})
		},
		regularUpdateCheck: function () {

			var lastCheck = Number(Whirlpool.get('lastScriptVersionCheck'));
			var currentTime = Date.now();

			if (currentTime > (lastCheck + Number(docs.autoUpdateWPplus))) {
				Whirlpool.set('lastScriptVersionCheck', '' + currentTime + '');
				autoUpdate.xhrCheck('regular');
			}
		}

	}

	function quickQuote() {

		var gottaPee, backImg, pReply = $('.foot_reply a');

		whirlC.generalStyle();

		if (pReply[0]) {
			$.get(pReply[0].href, function (data) {

				gottaPee = data.split('name="tinkle" value="')[1].split('">')[0];

			});
			if (document.title.match(' - Focused - The Pool Room - Whirlpool Forums')) {

				backImg = server + 'png/focusedthread.png';
				Whirlpool.css('#qqTextArea{background-image:url(' + backImg + ');}');

			}
		} else {
			backImg = server + 'png/closedthread.png';
			Whirlpool.css('#opInputs, #qqpost{display:none !important;} #qqTextArea{background-image:url(' + backImg + ');}');
		}

		var currTime = time();
		docs.lmtr = docs.repliesTR.eq(docs.repliesTR.length - 1);

		function postPost(textArtex, textOptions) {
		
			$.ajax({
				type: "POST",
				url: pReply[0].href,
				data: "version=2&post2=post&form=too+right&tinkle=" + gottaPee + "&" + "poll_enabled=false&poll_choice_size=0&pasteheader=true&timestart=%7Bts+%27" + currTime + "%27%7D&" + "body=" + encodeURIComponent(textArtex) + "&" + textOptions + "cliptemp=Paste+external+quotes+here",
				success: function (msg) {


					if ((msg.indexOf('<th><a name="preview"></a>ERROR</th>') > -1) && (msg.indexOf('You are quoting significantly more words than you have written.') > -1)) {

						$('#qqTooManyWords').css('display', 'block');

						$('#wordsOK').mouseup(function () {

							$('#qqTooManyWords').css('display', 'none');

						});
						docs.q.css('background', '#E5E5E5 none no-repeat scroll 50% 50%');

					} else {

						if ($('#lastPost').attr('checked') && (docs.dUrl.indexOf("&p=-1#bottom") < 0) && (docs.dUrl.indexOf("&p=-1&#bottom") < 0)){

							docs.d.location = "http://forums.whirlpool.net.au/forum-replies.cfm?t=" + Whirlpool.threadNumber + "&p=-1#bottom";

						} else {
						
							//Need to get the last post for the user
							docs.q.css('background', '#E5E5E5 none no-repeat scroll 50% 50%').val('');
							
							$.get(
								'http://forums.whirlpool.net.au/forum-replies.cfm',
								{
									't' : Whirlpool.threadNumber,
									'p' : '-1'
								},
								function(data){
									var removeS = data.slice(data.lastIndexOf('<tr id="'));
									$('#previewTR').remove();
									var newTR = $(removeS.split('</tr>')[0] + '</tr>');
									$('#replies tr[id^="r"]:last').after(newTR);
								}
							);
						}
						Whirlpool.set('textareraSave', '');
						$( ".bodypost a[href^=/forum/index.cfm?action=edit]:last" ).after( "<br><a class='wpp-edit'>(quick edit)</a>" );
						$( ".wpp-edit" ).css( "cursor", "pointer" );

					}

				},
				error: function (XMLHttpRequest, textStatus, errorThrown) {

					alert('something broke!  ==>' + XMLHttpRequest + textStatus + errorThrown);
					docs.q.val(Whirlpool.get('textareraSave'));

				}


			});

		}

		var wcButtons = whirlC.buttons("qqbuttonsDiv", "auto;", "qqwcodeButtons");

		$('#replies').append('<div id="qQuote" align="center">' + wcButtons + '<div id="qqPreview"></div><div id="qqTooManyWords">' + '<p style="margin:0 auto;margin-top:10px;">ZOMG! You are quoting significantly more words than you have written.<br /><br />' + '<img src="http://i27.tinypic.com/142zdi8.jpg" /></p><button type="button" id="wordsOK">OK</button>' + '</div><textarea id="qqTextArea" cols="' + docs.quickReplyboxCols + '" rows="' + docs.quickReplyboxRows + '"></textarea><br />' + '<button type="button" style="" id="qqpostclear" name="qqpost">Clear</button><button type="button" style="" id="qqpost" name="qqpost">Post Reply</button>' + '<img src="http://i28.tinypic.com/jzbn0n.gif" id="aloader" />' + '<div id="opInputs" style="height:30px;width:650px;">' + '<p><input type="checkbox" checked="checked" style="cursor: pointer;" value="true" wc2="w" id="modewc" name="modewc"/>' + '<label style="cursor: pointer;font-size:10px;" for="modewc"> Use WhirlCode</label></p>' + '<p><input type="checkbox" checked="checked" style="cursor: pointer;" value="true" wc2="b" id="modeht" name="modeht"/>' + '<label style="cursor: pointer;font-size:10px;" for="modeht"> Allow HTML</label></p>' + '<p><input type="checkbox" checked="checked" style="cursor: pointer;" value="true" id="modest" wc2="e" name="modest"/>' + '<label style="cursor: pointer;font-size:10px;" for="modest"> Auto entities </label></p>' + '<p><input checked="checked" type="checkbox" style="cursor: pointer;" value="true" id="modewl" wc2="a" name="modewl"/>' + '<label style="cursor: pointer;font-size:10px;" for="modewl"> Make links clickable</label></p>' + '<p>' + '	<input type="checkbox" name="modesu" id="autoSubscribe" wc2="t" value="true" style="cursor: pointer;"/>' + '	<label for="modesu" style="cursor: pointer; font-size: 10px;"> Watch</label>' + '</p>		' + '<p><input type="checkbox" style="cursor: pointer;" id="autoPreview" name="autoPreview"/>' + '<label style="cursor: pointer;font-size:10px;">Auto Preview</label></p>' + '<p><input type="checkbox" style="cursor: pointer;" id="lastPost" name="lastPost"/>' + '<label style="cursor: pointer;font-size:10px;">Go To Last Post</label></p>' + '</div></div>');

		docs.q = $('#qqTextArea');
		whirlC.buttonEvents("qqwcodeButtons", docs.q, whirlC.code());
		var oInpArr = $('#opInputs input');

		function getOptions(t) {

			var textOptions = "&";
			var settingStr = "pfl";
			var ret;

			oInpArr.each(function (i) {

				var opThis = $(this);

				if (opThis.attr('checked')) {

					settingStr += '' + opThis.attr('wc2');

					if (opThis.attr('name').match('mode')) {

						textOptions += '' + opThis.attr('name') + '=true&';

					}

				}

			});

			(t == 'preview') ? ret = settingStr : ret = textOptions;

			return ret;

		}

		docs.q.bind("focus keyup", function () {

			if (docs.autoPreview === 'true') {

				wcPrev.showPreview();

			}
			Whirlpool.set('textareraSave', $(this).val());
		});

		$('#qqpostclear').mouseup(function () {

			docs.q.val('');

			Whirlpool.set('textareraSave', '');

			if (docs.autoPreview === 'true') {

				wcPrev.showPreview();

			}


		});

		docs.eh = getOptions('preview');
		if (docs.autoPreview === 'true') {

			$('#autoPreview').attr('checked', 'checked');

		}
		if (docs.lastPost === 'true') {

			$('#lastPost').attr('checked', 'checked');

		}
		if (docs.autoSubscribe === 'true') {

			$('#autoSubscribe').attr('checked', 'checked');

		}
		oInpArr.click(function () {

			var oIthis = $(this);
			docs.eh = getOptions('preview');
			var w, oIid = oIthis.attr("id");

			if (oIid === 'autoPreview') {

				if (oIthis.attr('checked')) {

					Whirlpool.set('autoPreview', 'true');
					docs.autoPreview = 'true';
					wcPrev.showPreview();

				} else {

					Whirlpool.set('autoPreview', 'false');
					docs.autoPreview = 'false';
					$('#previewTR').remove();
					docs.pTd3 = null;

				}

			} else if (oIid === 'lastPost' || oIid === 'autoSubscribe') {

				($(this).attr('checked')) ? w = 'true' : w = 'false';

				Whirlpool.set(oIid, w);
				docs[oIid] = w;

			}

		});

		docs.repliesA.each(function (i) {

			var tParent = this.parentNode;

			var spanBar = document.createElement('span');
			spanBar.className = 'bar';
			spanBar.textContent = ' | ';

			var noJQqqLink = document.createElement('a');
			noJQqqLink.setAttribute('class', 'qqlink greylink');
			noJQqqLink.textContent = 'q-quote';
			noJQqqLink.href = '#';

			tParent.insertBefore(spanBar, this);
			tParent.insertBefore(noJQqqLink, spanBar);

			$(noJQqqLink).bind("click", function () {

				docs.q = $('#qqTextArea');
				/***gotta fix this***/

				if (docs.autoPreview === 'true') {

					wcPrev.showPreview();

				}

				var qqtrParent = docs.repliesTR.eq(i);
				var qqpre = qqtrParent.attr('id').split('r')[1];
				var qquNam;

				qqtrParent.find('span').each(function () {

					if ($(this).attr('class') == 'bu_name') {

						qquNam = $(this).text();

					}

				});
				var qqtSel = window.getSelection().toString().replace(/^(.+)$/mg, '["$1"]');

				if (docs.q.val().length > 0) {

					docs.q.val(docs.q.val() + '\r@' + qqpre + ' ' + qquNam + ' writes... \n' + qqtSel + '\n\n');

				} else {

					docs.q.val(docs.q.val() + '@' + qqpre + ' ' + qquNam + ' writes... \n' + qqtSel + '\n\n');

				}

				docs.q[0].focus();

				Whirlpool.set('textareraSave', docs.q.val());

				return false;

			});

		});

		function pfft() {

			Whirlpool.set('textareraSave', docs.q.val());

			if (docs.checkIfSignedIn) {

				alert('You Are Not Currently Signed Into Whirlpool');

			} else {

				docs.q.css('background', '#E5E5E5 url(http://i28.tinypic.com/jzbn0n.gif) no-repeat scroll 50% 50%');

				postPost(docs.q.val(), getOptions('post'));

			}

		}

		$('#qqpost').mouseup(function () {

			if (!gottaPee) {

				$.get(pReply[0].href, function (data) {

					gottaPee = data.split('name="tinkle" value="')[1].split('">')[0];

				});

			}

			pfft();

		});
		$(docs.d).keydown(function (event) {

			if (event.ctrlKey == 1 && event.keyCode == 13) {

				if (!gottaPee) {

					$.get(pReply[0].href, function (data) {

						gottaPee = data.split('name="tinkle" value="')[1].split('">')[0];

					});

				}

				pfft();

			}

		});

		if (docs.q.val() === '') {

			docs.q.val(Whirlpool.get('textareraSave'));

		}


	}
	
	
	var wcWikiWhimNewThread = {

		wwcButtons: whirlC.buttons("qqbuttonsDiv", "auto;", "qqwcodeButtons"),

		sendShitToPreview: function () {

			docs.q = $('#body');
			docs.q.parent().before(wcWikiWhimNewThread.wwcButtons);
			$('#wc_whirlurl, #wc_whirllink, #wc_siSearch').attr('disabled', 'disabled');
			whirlC.buttonEvents("qqwcodeButtons", docs.q, whirlC.code());
			docs.eh = 'pflwae';
			docs.q.bind("focus keyup", function () {

				wcPrev.showPreview();

			});
			if (docs.dUrl.indexOf('rt=') > -1) {

				var whimQuoteLink = document.createElement('a');
				whimQuoteLink.innerHTML = 'Quote Whim';
				whimQuoteLink.setAttribute('style', 'float:right;');
				whimQuoteLink.href = "#";

				$('td[bgcolor="#c3c9de"]').prepend(whimQuoteLink);
				$(whimQuoteLink).click(function () {

					var qqtSel = window.getSelection().toString().replace(/^(.+)$/mg, '["$1"]');
					docs.q.val(docs.q.val() + qqtSel);
					wcPrev.showPreview();
					return false;

				});

			}
		},
		whimReply: function () {

			docs.pTd3 = $('blockquote~div');
			docs.pTd3.attr('style', 'background:#EEEEEE url(/img/forum/reply-eeeeee.gif) repeat-x scroll center bottom;' + 'border-bottom:1px solid #BBBBBB;' + 'border-top:2px solid #F2F2F2;' + 'padding:8px 12px 10px;' + 'vertical-align:middle;');
			wcWikiWhimNewThread.sendShitToPreview();

		},
		uPageWhim: function () {

			var containerTable = document.evaluate('/html/body/div/div[3]/div/div[2]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
			var prevContainer = document.createElement('div');
			prevContainer.id = 'prevContainer';
			prevContainer.setAttribute('style', 'background:#EEEEEE url(/img/forum/reply-eeeeee.gif) repeat-x scroll center bottom;' + 'border-bottom:1px solid #BBBBBB;' + 'border-top:2px solid #F2F2F2;' + 'padding:8px 0px;' + 'float: left; width: 100%;' + 'vertical-align:middle;');
			containerTable.appendChild(prevContainer);
			docs.pTd3 = $(prevContainer);

			wcWikiWhimNewThread.sendShitToPreview();
		},
		wikiNewThread: function (b) {
			docs.q = $(b);
			docs.q.before(wcWikiWhimNewThread.wwcButtons);
			whirlC.buttonEvents("qqwcodeButtons", docs.q, whirlC.code());
		}

	}
	var wlrMenu = {

		generateMenu: function () {

			var lForLeft = $('#left');
			var whereMenu = lForLeft.offset().left + lForLeft.width() - 4 + "px";

			if (docs.enableWideWhirlpool === 'true') {
				window.setTimeout(function () { //need to wait for the css/theme to load
					whereMenu = lForLeft.offset().left + lForLeft.width() - 4 + "px";
					$('#pmenu')[0].style.left = whereMenu;
				},
				500);
			}

			Whirlpool.css("#pmenu {padding:0;list-style-type: none; position:fixed;z-index:50;height:19px;overflow:hidden;width:18px;left:" + whereMenu + ";}" + "#pmenu img{margin;0;padding:0;border:none;background:transparent;width:16px;}" + "#pmenu:hover {height:auto;overflow:visible;}" + "#pmenu ul {padding:0; margin:0; list-style-type: none; width:101px;}" + "#pmenu li {position:relative;z-index:51;}" + "#pmenu a{display:block;width:110px;font-weight:bold;font-size:12px; color:#FFFFFF; height:26px; line-height:26px; " + "text-decoration:none; text-indent:5px; background:#616CA3; border:1px solid orange;white-space: nowrap; }" + "#pmenu>li>ul>li>a{background:#EDEDED;color:#000;}" + "#pmenu li:hover > a {background:#dfd7ca; color:#c00;}" + "#pmenu li ul {display: none;} " + "#pmenu li:hover > ul {display:block; position:absolute; top:0; z-index:52;margin-left:111px;}");



			var spinner = server + 'png/whirlpool.png';

			var gfx = 'http://forums.whirlpool.net.au/skin/web/img/favicon.gif';
			var uNumber = docs.uinfo.find('a')[0].href.split('/user/')[1];
			var newUL2, unLi = $('<ul id="pmenu">');

			unLi.html('<img id="menuSpinner" src="' + spinner + '" />' + '<li><a href="#">WP User</a>' + '<ul> ' + '<li><a href="http://forums.whirlpool.net.au/user/' + uNumber + '">Your Posts</a></li> ' + '<li><a href="http://forums.whirlpool.net.au/user/?action=online">People Online</a></li> ' + '<li><a href="http://forums.whirlpool.net.au/whim/?action=inbox">Inbox</a></li> ' + '<li><a href="http://forums.whirlpool.net.au/whim/?action=outbox">Outbox</a></li> ' + '<li><a href="http://forums.whirlpool.net.au/whim/?action=contacts">Contacts</a></li> ' + '<li><a href="http://forums.whirlpool.net.au/forum/?action=watched">Watched Threads</a></li> ' + '<li><a href="http://forums.whirlpool.net.au/forum/?action=threads_search">Thread Search</a></li> ' + '<li><a href="http://forums.whirlpool.net.au/profile/">Account Settings</a></li> ' + '<li><a href="http://forums.whirlpool.net.au/profile/?a=logout&logout=' + uNumber + '">Log out</a></li> ' + '</ul> ' + '</li> ');

			$('.forumlist').each(function () {

				$(this).children().each(function () {

					if (this.tagName == 'DT') {
						var newLI1 = $('<li>');
						var newA1 = $('<a href="#">');
						newUL2 = $('<ul>');
						newA1.text($(this).text());
						newLI1.append(newA1);
						newLI1.append(newUL2);
						unLi.append(newLI1);
					} else {
						var newLI2 = $('<li>');
						newLI2.html($(this).html());
						newUL2.append(newLI2);
					}

				});
			});
			unLi.find('*').addClass('notarget');
			wlrMenu.unLi = unLi;

		},
		rightClickMen: function () {

			wlrMenu.generateMenu();

			document.addEventListener('mouseup', function (e) {

				if (e.which == 3 && e.target.tagName != 'A' && e.target.tagName != 'TEXTAREA') {

					wlrMenu.unLi.remove();
					$('body').prepend(wlrMenu.unLi);
					$('#menuSpinner').remove();
					wlrMenu.unLi[0].style.position = 'absolute';
					wlrMenu.unLi[0].style.left = '' + e.pageX - 250 + 'px';
					wlrMenu.unLi[0].style.top = '' + e.pageY + 'px';
					wlrMenu.unLi[0].style.overflow = 'visible';

				}
				if (e.which == 1 && $('#pmenu')[0] && e.target.className != 'notarget') {

					wlrMenu.unLi.remove();

				}


			},
			false);
		},
		spinnerMen: function () {

			wlrMenu.generateMenu();

			$('body').prepend(wlrMenu.unLi);
			wlrMenu.unLi.css('margin', '25px 0 50px 5px');

		}

	}

	function noBottom() {

		$('.threads a').each(function () {

			this.href = this.href.replace("&p=-1#bottom", "");

		});

	}

	function avatar(dreThis) {

		var bfirst = dreThis.children('td:first');
		var cDiv = bfirst.children('div');
		var uNumClass = cDiv.eq(1).children('a:first').attr('href').split('/user/')[1];
		var uClassClass = cDiv.eq(2).text().replace(/ /g, '_');
		dreThis.addClass("wlr_" + uNumClass + " " + uClassClass);
		bfirst.prepend('<div><a href="/user/' + uNumClass + '"/></div>');

		if (!docs.avatarCSS) {
			Whirlpool.css('td.bodyuser > div:first-child > a:first-child { margin:0 auto; } #replies tr .bodyuser div div:last-child:before { padding:5px 0 0; }');
			if (docs.penaltyBoxBackground === 'true') {
				Whirlpool.css('tr.In_the_penalty_box > td.bodyuser {background-image:url(' + server + 'png/tinygradient.png)!important;background-repeat:repeat !important;');
			}
			docs.avatarCSS = true;
		}

	}

	function userNotes(trParent, i) {
		var firstDiv = trParent.children('td:first').children('a:last').next();
		var uNum = firstDiv.text().split('User #')[1].split(' ')[0];
		var usrNtsPic = server + 'png/greennote.png';
		var uNJa = eval('(' + docs.userNotesArr + ')');
		if (uNJa !== '{}' && uNJa[uNum]) {
			usrNtsPic = server + 'png/rednote.png';
		}


		$('<img src="' + usrNtsPic + '"/>').attr({
			uNum: uNum,
			title: 'User Note',
			parentNum: 'parentNum' + trParent.attr('id')
		}).css({
			'padding': '0 5px',
			'cursor': 'pointer'
		}).appendTo(firstDiv[0]).bind('mouseup', function (e) {

			if (!docs.d.getElementById("uS" + uNum.split('#')[1])) {
				var modalBackground = $('<div id="wlrsettingsoverlay" style="height: 100%; width: 100%; position: fixed; left: 0pt; top: 0pt; z-index: 2999; opacity: 0.5; background-color:#000000;"/>');
				$('body').append(modalBackground);
				var key, uNJ, ithis = $(this),
					unThis = ithis.attr("uNum"),
					uN = Whirlpool.get('userNotesArr');

				if (uN !== '{}') {

					uNJ = eval('(' + uN + ')');
					key = uNJ[unThis];

				} else {

					uNJ = {};

				}

				var closer = docs.d.createElement('a');
				closer.setAttribute('style', 'left:230px;position:relative;color:grey;font-weight:bold;font-size:1.5em;text-decoration:none;');
				closer.href = "#";
				closer.innerHTML = ' X ';

				var diag = docs.d.createElement('div');
				diag.setAttribute("clickerID", ithis.attr('parentNum'));
				diag.setAttribute('title', 'User Note');
				diag.setAttribute('style', 'background-color:#FFD27D;position:absolute;top:' + e.pageY + 'px;left:' + e.pageX + 'px;width: 250px; height: 150px;z-index: 3000;');

				var diagBR = docs.d.createElement('br');
				var diagTa = docs.d.createElement('textarea');
				diagTa.setAttribute('style', 'border: none ; margin: 0pt 0pt 0pt 5px; height: 120px; width: 240px;');
				if (key && key !== '') {

					diagTa.value = key;

				}

				diag.appendChild(closer);
				diag.appendChild(diagBR);
				diag.appendChild(diagTa);
				docs.d.body.appendChild(diag);


				$(closer).bind('click', function () {

					var texValar = diagTa.value;

					if (key && texValar === '') {

						delete uNJ[unThis];
						Whirlpool.set('userNotesArr', uNJ.toSource().toString());
						$('').attr('src', server + 'png/greennote.png');


					} else if (texValar !== '') {

						uNJ[unThis] = texValar;
						Whirlpool.set('userNotesArr', uNJ.toSource().toString());
						$('').attr('src', server + 'png/greennote.png');

					}

					docs.d.body.removeChild(diag);
					$('#wlrsettingsoverlay').remove();
					return false;

				});


			}
			return false;
		});

	}
   

   
	var toggleSections = {
		links: function () {
			var ts_sections = document.getElementsByTagName('h3');
			var ts_i = 0;
			var ts_id;
			while (ts_i < ts_sections.length) {
				ts_id = 'ts_section' + ts_i;
				ts_sections[ts_i].innerHTML += ' - (<a href="#" id="' + ts_id + '">hide</a>)';
				document.getElementById(ts_id).addEventListener('click', function (e) {
					alert(ts_i);
					var id = ts_i;
					alert(id);
					document.getElementsByTagName('table')[id].style.display = 'none';
				},
				true);

				ts_i++;
			}
		}
	}
	var hideDelMov = {
		delRem: function () {
			Whirlpool.css('.threadP0, .threadP1, .threadP2, .threadP3, .deleted{display:none;}');
		},
		mv: function () {
			Whirlpool.css('.threadP0, .threadP1, .threadP2, .threadP3, .pointer{display:none;}');
		}

	}

	function extraThreadLinks() {

		var wBP = $('#watch_button').parent();
		var futSub = $('.foot_subs:first');
		var repl = $('#replies');
		if (docs.threadArchiveView == 'true') {
			wBP.append('<a class="bwatch" href="http://forums.whirlpool.net.au/archive/' + docs.threadNumber + '">Thread Archive</a>');
			futSub.append('&nbsp;&nbsp;<a href="http://forums.whirlpool.net.au/archive/' + docs.threadNumber + '">Thread Archive</a>');
			if (repl[0].style.marginTop !== '10px') {
				repl.attr('style', 'margin-Top:10px');
			}

		}
		if (docs.longThreadView == 'true') {
			wBP.append('<a class="bwatch" href="http://forums.whirlpool.net.au/forum-replies.cfm?t=' + docs.threadNumber + '&p=-2">Long Thread View</a>');
			futSub.append('&nbsp;&nbsp;<a href="http://forums.whirlpool.net.au/forum-replies.cfm?t=' + docs.threadNumber + '&p=-2">Long Thread View</a>');
			if (repl[0].style.marginTop !== '10px') {
				repl.attr('style', 'margin-Top:10px');
			}

		}
		if (docs.opOnlyView == 'true') {
			try {
				var oppost = $('.op:first').parent().parent();
				var opid = oppost.find('.bu_name').parent().attr('href').toString().replace('/user/', '');
				wBP.append('<a class="bwatch oponly" href="http://forums.whirlpool.net.au/forum-replies.cfm?t=' + docs.threadNumber + '&ux=' + opid + '">OP Only</a>');
				futSub.append('&nbsp;&nbsp;<a href="http://forums.whirlpool.net.au/forum-replies.cfm?t=' + docs.threadNumber + '&ux=' + opid + '">OP Only</a>');
				if (repl[0].style.marginTop !== '10px') {
					repl.attr('style', 'margin-Top:10px');
				}
			} catch(e) {

			}

		}
		if (docs.moderatorPostView == 'true') {
			wBP.append('<a class="bwatch" href="http://forums.whirlpool.net.au/forum-replies.cfm?um=1&amp;t=' + docs.threadNumber + '">Mod Posts</a>');
			futSub.append('&nbsp;&nbsp;<a href="http://forums.whirlpool.net.au/forum-replies.cfm?um=1&amp;t=' + docs.threadNumber + '">View moderator posts</a>');
			if (repl[0].style.marginTop !== '10px') {
				repl.attr('style', 'margin-Top:10px');
			}
		}
		if (docs.representativePostView == 'true') {
			wBP.append('<a class="bwatch" href="http://forums.whirlpool.net.au/forum-replies.cfm?ur=1&amp;t=' + docs.threadNumber + '">Rep Posts</a>');
			futSub.append('&nbsp;&nbsp;<a href="http://forums.whirlpool.net.au/forum-replies.cfm?ur=1&amp;t=' + docs.threadNumber + '">View representative posts</a>');
			if (repl[0].style.marginTop !== '10px') {
				repl.attr('style', 'margin-Top:10px');
			}
		}

	}

	function whimSize() {

		if (!docs.q) {
			docs.q = $('#body');
		}
		docs.q.css('width', 'auto').attr('rows', docs.whIMMessageTextAreaRows).attr('cols', docs.whIMMessageTextAreaCols);

	}

	function loadTheme() {
		if (docs.customWPTheme !== 'default' && docs.customWPTheme.indexOf('import') > -1) {
			Whirlpool.css(docs.customWPTheme);
		} else if (docs.customWPTheme !== 'default' && docs.customWPTheme.indexOf('import') < 0) {
			$('head').append('<link rel="stylesheet" type="text/css" media="screen" href="' + docs.customWPTheme + '">');
			setTimeout('100', function () {
				$('style:first').text('');
			});
		}
	}

	function whimAlertNotice() {

		if ($('#menu_whim').text()) {
			Wp.notify('You have an unread <a href="http://whirlpool.net.au/whim/">whim</a>.', true, 15000);
		}

	}

	function openwatchedThreadsInTabs() {
	    var openAllInT = $('<a href="#" id="openInTabs">open in tabs</a>');
	    $('a[href="/forum/?action=watched&showall=1"]').before(openAllInT);	
	    openAllInT.after('&nbsp;&nbsp;|&nbsp;&nbsp;');
	    openAllInT.click(function(){
	        $('.reads a').each(function (){
	            GM_openInTab(this.href);
	        });
	        return false;		
	    });		
	    $('.section a').each(function(i){
	        var openAllinSInT = $('<a href="#" id="openSectionInTabs" style="font-weight:bold;margin-left:35px;">open section in tabs</a>');
	        $(this).after(openAllinSInT);
	        openAllinSInT.click(function(){
	            $(this).parent().parent().nextUntil('.section').find('.reads a').each(function (){
	                GM_openInTab(this.href);
	            });
	            return false;		
	        });	
	    });
	}

	function deletedThreadsCacheLink() {
		var deletedThreadNumber = docs.dUrl.split('t=')[1].split('&')[0];
		$('h2:last').append(' <a href="http://google.com/search?q=cache:forums.whirlpool.net.au/archive/' + deletedThreadNumber + '">(Google Cache)');
	}

	function userpageInfoToggle() {

		var h2s = $('#userprofile h2:lt(2)');
		h2s.css('cursor', 'pointer').next('table').hide();
		h2s.click(function () {
			$(this).next('table').slideToggle();
		});

		h2 = $('#userprofile h2:last');
		h2.css('cursor', 'pointer').click(function () {
			$('#threads').toggle();
		});

	}

	function userpageDays() {

		if (!docs.dUrl.match('days') && !docs.dUrl.match('action') && (!unsafeWindow.sessionStorage.userpageDaysRedirectedWindowHistoryLength || window.history.length != unsafeWindow.sessionStorage.userpageDaysRedirectedWindowHistoryLength)) {

			var userNumber = docs.dUrl.split('/user/')[1].split('?')[0];
			docs.d.location = 'http://forums.whirlpool.net.au/user/' + userNumber + '?days=' + docs.recentActivityDays;

		} else if (docs.dUrl.indexOf('?days=' + docs.recentActivityDays) > -1) {
			unsafeWindow.sessionStorage.userpageDaysRedirectedWindowHistoryLength = window.history.length;

		}

	}
	/********
	 stuff that runs on every page ('cept for the first 2 if()s - no point running everything below on an alert page )
	 ********/

	setGM();

	if (docs.dUrl.indexOf('?a=subs-') > -1) {
		if (docs.watchedThreadsAlert == 'watched' ||
document.referrer.indexOf('?action=watched') > -1) {
			docs.d.location = 'http://forums.whirlpool.net.au/forum/?action=watched';
		}
		if (docs.watchedThreadsAlert == 'thread' &&
document.referrer.indexOf('?action=watched') == -1) {
			history.go(-1);
		}
	}
	if (docs.dUrl.indexOf('?a=priv-deleted') > -1) {
		deletedThreadsCacheLink();
	} else if (!docs.dUrl.match('alert')) {
		wlrSettings.set();
		loadTheme();
		if (docs.WLRfirstRun === 'true') {
			wlrSettings.firstRun();
		}
		if (docs.autoUpdateWPplus !== 'disable' && !window.google) {
			autoUpdate.regularUpdateCheck();
		}
		if (docs.whirlpoolSidemenuFont !== "default font") {
			$('#menu').css('font-family', docs.whirlpoolSidemenuFont + ' !important');
		}
		if (docs.whirlpoolBreadcrumbFont !== "default font") {
			$('#breadcrumb').css('font-family', docs.whirlpoolBreadcrumbFont + ' !important');
		}
		if (docs.dynamicMenuSystem == 'spinner') {
			wlrMenu.spinnerMen();
		} else if (docs.dynamicMenuSystem == 'rightClick') {
			wlrMenu.rightClickMen();
		}
		if (docs.showWhirlpoolFooterLinks === "false") {
			$('#footer').hide();
		}

		if (docs.enableWideWhirlpool === "true") {
			Whirlpool.css('#root, #footer {width: 99.5% !important;max-width: none !important;}' + '#content > span.shim2 {display: none !important;}body,html,#root{margin:0;padding:0;border:0;}');
		}
		if (docs.penaltyBoxBackground === "true") {
			Whirlpool.css('tr.In_the_penalty_box > td.bodyuser {background-image:url(' + server + 'png/lightgradient.png)!important;background-repeat:repeat !important;');
		}

		if (docs.whimAlertNotice === "true") {
			whimAlertNotice();
		}
	}
	var fSecText = docs.dUrl.match('whirlpool.net.au/forum/');

	if (docs.dUrl == 'http://forums.whirlpool.net.au/' || docs.dUrl == 'http://forums.whirlpool.net.au/index.cfm' || docs.dUrl == 'http://forums.whirlpool.net.au/forum/') {
		if (docs.noGluteusMaximus === 'true') {
			noBottom();
		}
	}
	if (docs.dUrl.match('forum-replies')) {
		docs.repliesTR = $('#replies tr[id^="r"]:not([id^="review"])');
		docs.repliesA = docs.repliesTR.find('a[title="a link to this specific post"]');
      
		if (docs.dUrl.match('t=')) {
			docs.threadNumber = docs.dUrl.split('t=')[1].split('&')[0].split('#')[0];
		} else {
			docs.threadNumber = docs.repliesA[0].href.split('t=')[1].split('&')[0].split('#')[0];
		}
		if (docs.quickReplybox === 'true') {
			quickQuote();
		}
		if (docs.hideDelPosts === 'true') {
			hideDelPosts();
		}
		avatars();

		docs.repliesTR.each(function (i) {

			var tdThis = $(this).children('td:eq(1)');

			if (docs.staticAvatars === 'true') {
				avatar($(this));
			}
			if (docs.ignoreUser === 'true') {
				userIgnore($(this));
			}
			if (docs.userNotes === 'true') {
				userNotes($(this), i);
			}
		});
 
		extraThreadLinks();

	} else if (fSecText && docs.dUrl.split(fSecText[0])[1].length) {
		if (docs.hideDRThreads === 'true') {
			hideDelMov.delRem();
		}
		if (docs.hideMVThreads === 'true') {
			hideDelMov.mv();
		}
	} else if (docs.dUrl.indexOf('/user/') > -1) {
		if (docs.recentActivityDays != '7') {
			userpageDays();
		}
		whimSize();
		if (docs.userpageInfoToggle === 'true') {
			userpageInfoToggle();
		}
	}
	if (docs.dUrl.indexOf('whirlpool.net.au/whim/?action=read') > -1) {
		avatars();
		if (docs.staticAvatars === 'true') {
			avatar($('tr:first'));
		}
	}


	if (docs.whirlcodeinWikiWhimNewThread === 'true') {
		if (docs.dUrl.indexOf('whirlpool.net.au/wiki/?action=edit&tag=') > -1) {
			wcWikiWhimNewThread.wikiNewThread('#f_body');
		} else if (docs.dUrl.indexOf('/forum/index.cfm?action=newthread') > -1) {
			wcWikiWhimNewThread.wikiNewThread('#body');
		} else if (docs.dUrl.indexOf('/forum/index.cfm?action=reply') > -1) {
			wcWikiWhimNewThread.wikiNewThread('#body');
		} else if (docs.dUrl.indexOf('/forum/index.cfm?action=edit') > -1) {
			wcWikiWhimNewThread.wikiNewThread('#body');
		}
	}
	if (docs.dUrl === 'http://forums.whirlpool.net.au/forum/?action=watched') {
		openwatchedThreadsInTabs();
	}
	if (docs.dUrl.indexOf('/forum/index.cfm?action=reply') > -1 && $('#breadcrumb').text().match('Greasemonkey')) {
		Wp.notify('Found a bug? Report it using the <a href="http://code.google.com/p/whirlpool-plus/issues/list">issue tracker</a> as well as posting it.', false, 9000);
	}

	
	// ! Basic fix for anchors
	if (Whirlpool.url.match("#")) {
		var anchor = "#" + Whirlpool.url.split("#")[1];
		if (anchor != '#' && $(anchor)) {
			$(anchor).focus();
		}
	}

}
catch(error) {
	if(typeof Whirlpool == 'undefined'){
		alert("Sorry, an error occured during WP+ startup.\n Information: " + error);
	}else{
		if (Whirlpool.get('debugMode') == 'true') {
			var message = 'An error (' + error.name + ') occurred. Information: ' + error.message + '.  Please <a href="">report it</a>.';
			var color = 'black';
			var background = 'orange';
			var opacity = '0.9';

			$('head').append('<style type="text/css">.wpplus_notify{ width: 85%; height: 20px; background-color: ' + background + '; opacity: ' + opacity + '; position: fixed; top: 25px; left: 7.5%; z-index: 500; -moz-border-radius: 10px; padding-top: 7px; text-align: center; color: ' + color + '} .wpplus_notify:hover{ cursor: pointer; }</style>');

			$('body').prepend('<div class="wpplus_notify">' + message + ' (close)</div>');
			$('.wpplus_notify').click(function (e) {
				$(this).fadeOut();
			});
			setTimeout(function () {
				$('.wpplus_notify').fadeOut();
			},
			5000);
		}
	}
}