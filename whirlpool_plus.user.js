// ==UserScript==
// @name          Whirlpool Plus
// @namespace     WhirlpoolPlus
// @description   Adds a suite of extra optional features to the Whirlpool forums.
// @version       4.4.15
// @require       http://wpplus.endorph.net/resources/js/jquery-1.7.1.min.js
// @require       http://wpplus.endorph.net/resources/js/prettify.js
// @require       http://wpplus.endorph.net/resources/js/lang-css.js
// @require       http://wpplus.endorph.net/resources/js/lang-sql.js
// @require       http://wpplus.endorph.net/resources/js/jqdnr.pjs
// @require       http://wpplus.endorph.net/resources/js/tea.js
// @include       http://forums.whirlpool.net.au/*
// @include       https://forums.whirlpool.net.au/*
// @include       http://bc.whirlpool.net.au/*
// @include       https://bc.whirlpool.net.au/*
// @include       http://whirlpool.net.au/*
// @include       https://whirlpool.net.au/*
// @exclude       http://forums.whirlpool.net.au/whim-send*
// @exclude       https://forums.whirlpool.net.au/whim-send*
// @exclude       http://forums.whirlpool.net.au/forum-replies.cfm*p=-2*
// @exclude       https://forums.whirlpool.net.au/forum-replies.cfm*p=-2*
// @exclude       http://forums.whirlpool.net.au/forum-replies.cfm*&ux* 
// @exclude       https://forums.whirlpool.net.au/forum-replies.cfm*&ux* 
// @exclude       http://forums.whirlpool.net.au/forum-replies-print.cfm*
// @exclude       https://forums.whirlpool.net.au/forum-replies-print.cfm*
// @exclude       http://forums.whirlpool.net.au/forum-replies-archive.cfm*
// @exclude       https://forums.whirlpool.net.au/forum-replies-archive.cfm*
// @exclude       http://whirlpool.net.au/blog/*
// @exclude       https://whirlpool.net.au/blog/*
// @resource	  emoticon_angry	http://wpplus.endorph.net/resources/png/angry.png
// @resource	  emoticon_blushing	http://wpplus.endorph.net/resources/png/blushing.png
// @resource	  emoticon_confused	http://wpplus.endorph.net/resources/png/confused.png
// @resource	  emoticon_cool		http://wpplus.endorph.net/resources/png/cool.png
// @resource	  emoticon_cry		http://wpplus.endorph.net/resources/png/crying.png
// @resource	  emoticon_frown	http://wpplus.endorph.net/resources/png/frown.png
// @resource	  emoticon_gasp		http://wpplus.endorph.net/resources/png/gasp.png
// @resource	  emoticon_grin		http://wpplus.endorph.net/resources/png/grin.png
// @resource	  emoticon_kiss		http://wpplus.endorph.net/resources/png/kiss.png
// @resource	  emoticon_lips		http://wpplus.endorph.net/resources/png/lips.png
// @resource	  emoticon_shout	http://wpplus.endorph.net/resources/png/shouting.png
// @resource	  emoticon_sleep	http://wpplus.endorph.net/resources/png/sleeping.png
// @resource	  emoticon_smile	http://wpplus.endorph.net/resources/png/smile.png
// @resource	  emoticon_smirk	http://wpplus.endorph.net/resources/png/smirk.png
// @resource	  emoticon_straight	http://wpplus.endorph.net/resources/png/straight.png
// @resource	  emoticon_tongue	http://wpplus.endorph.net/resources/png/tongue.png
// @resource	  emoticon_wink		http://wpplus.endorph.net/resources/png/wink.png
// @resource	  emoticon_star		http://wpplus.endorph.net/resources/png/star.png
// @resource	  old_blue_anxious	http://wpplus.endorph.net/resources/gif/anxious.gif
// @resource	  old_blue_clown	http://wpplus.endorph.net/resources/gif/clown.gif
// @resource	  old_blue_cool		http://wpplus.endorph.net/resources/gif/cool.gif
// @resource	  old_blue_crazy	http://wpplus.endorph.net/resources/gif/crazy.gif
// @resource	  old_blue_eyes		http://wpplus.endorph.net/resources/gif/eyes.gif
// @resource	  old_blue_grin		http://wpplus.endorph.net/resources/gif/grin.gif
// @resource	  old_blue_happy	http://wpplus.endorph.net/resources/gif/happy.gif
// @resource	  old_blue_happy2	http://wpplus.endorph.net/resources/gif/happy-2.gif
// @resource	  old_blue_neutral	http://wpplus.endorph.net/resources/gif/neutral.gif
// @resource	  old_blue_ninja	http://wpplus.endorph.net/resources/gif/ninja.gif
// @resource	  old_blue_sad		http://wpplus.endorph.net/resources/gif/sad.gif
// @resource	  old_blue_sad2		http://wpplus.endorph.net/resources/gif/sad-2.gif
// @resource	  old_blue_smirk	http://wpplus.endorph.net/resources/gif/smirk.gif
// @resource	  old_blue_tongue	http://wpplus.endorph.net/resources/gif/tongue.gif
// @resource	  loader			http://wpplus.endorph.net/resources/gif/loader.gif
// @resource	  reload			http://wpplus.endorph.net/resources/png/reload.png
// @resource	  wp_plus_logo		http://wpplus.endorph.net/resources/png/wp_plus.png
// @resource	  prettify			http://wpplus.endorph.net/resources/css/prettify.css
// @resource	  kitteh			http://wpplus.endorph.net/resources/jpg/transformer.jpg
// @resource	  noavatar			http://wpplus.endorph.net/resources/png/noavatar.png
// @resource	  waiting			http://wpplus.endorph.net/resources/gif/waiting.gif
// @resource	  focusedthread		http://wpplus.endorph.net/resources/png/focusedthread.png
// @resource	  closedthread		http://wpplus.endorph.net/resources/png/closedthread.png
// @resource	  small_whirl_logo	http://wpplus.endorph.net/resources/png/whirlpool.png
// @resource	  light_gradient	http://wpplus.endorph.net/resources/png/lightgradient.png
// @resource	  green_note		http://wpplus.endorph.net/resources/png/greennote.png
// @resource	  red_note			http://wpplus.endorph.net/resources/png/rednote.png
// @resource	  check				http://wpplus.endorph.net/resources/png/check.png
// @resource	  cross				http://wpplus.endorph.net/resources/png/cross.png
// @resource	  oembedcss			http://wpplus.endorph.net/resources/css/jquery.oembed.css
// @resource	  oembedjs			http://wpplus.endorph.net/resources/js/jquery.oembed.js
// ==/UserScript==
// Some icons from http://www.pinvoke.com/
// ==Changes==
/***************
 changes - 4.3.0 - Chrome Compatability (with TamperMonkey), made avatars links again
 changes - 4.3.1 - Fixed bugs with quick edit and removing the &p=-1&#bottom options
 changes - 4.3.2 - Added Whirlcode buttons on Wiki Preview pages
 changes - 4.3.3 - New Chatbox (thanks Erwin, Chris)
 changes - 4.3.4 - Moved auto-updater to userscripts.org, Fix to recent activity days code
 changes - 4.3.5 - More quick-edit bug squashing, Remove old themes, updater tweaks
 changes - 4.3.6 - Changed resource addresses, tweaks to sidebar code
 changes - 4.3.7 - Readded the WP Classic Themes (thanks, Phyco)
 changes - 4.3.8 - Added Recent Activity Dropdown (preview)
 changes - 4.3.9 - Recent Activity Dropdown - correct location for reload image, indication of unread threads
 changes - 4.3.10 - Move all resources to endorph.net (tristanroberts.name is 404ing right now)
 changes - 4.4.0 - Added Synchronisation of WLR data, Updated jQuery (1.4.2 => 1.7.1), changed "attr" methods to "prop". Lots of small bug fixes. Incorportated Yansky's Thread Search Date Order script. Code cleanup. New settings dialog
 changes - 4.4.1 - Fixes some FF3 bugs, local storage of some resources, settings dialog auto-collapse.
 changes - 4.4.2 - More jquery related bugs, new location for WP Black Theme
 changes - 4.4.3 - Fix FF3.6 issue
 changes - 4.4.4 - Aura statistics, readded penalty box highlight
 changes - 4.4.5 - Fix for Chrome (thanks Yansky), include on https pages
 changes - 4.4.6 - Fix FF3 Quick Edit
 changes - 4.4.7 - Quick quote now correctly attributes quotes regardless of the selected button, bugfix for quick edit, spinner doesn't disappear on mouseout
 changes - 4.4.8 - Some fixes for new design. Temp release- there are still many issues
 changes - 4.4.9 - More fixes for new design
 changes - 4.4.10 - Penalty Box highlight, WLR fixes, other fixes for the new design
 changes - 4.4.11 - Spinner menu changes, Theme fixes
 changes - 4.4.12 - New Teal theme, smiley fix
 changes - 4.4.13 - Hide forums fix, Auto load WLR colours on theme change, typo correction
 changes - 4.4.14 - Temp disable tracker, rework emoticons, add emoticon buttons to quick reply (and preview), fix avatars in whims
 changes - 4.4.15 - Changed Youtube embed to more general oEmbed support
 ***************/
// ==/Changes==

try {

	if(typeof $.browser['mozilla'] != 'undefined'){
		var notFirefox = false;
	}else{
		var notFirefox = true;
	}

	var version = '4.4.15';

	var server = "http://wpplus.endorph.net/resources/";

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
			if(notFirefox){
				var value = unsafeWindow.localStorage.getItem(name);
				
				if(value == null){
					return false;
				}
				
				return (value);
			}else{		
				var value = GM_getValue(name, false);
				return (value);
			}
		},
		'set': function (name, value) {
			if(notFirefox){
				unsafeWindow.localStorage.setItem(name, value);
			}else{
				GM_setValue(name, value);
			}
		},
		'remove': function (name) {
			if(notFirefox){
				unsafeWindow.localStorage.removeItem(name);
			}else{
				GM_deleteValue(name);
			}
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
			if (!Whirlpool._notified) {
				$('head').append('<style type="text/css">.wpplus_notify{ width: 85%; height: 20px; background-color: ' + background + '; opacity: ' + opacity + '; position: fixed; top: 25px; left: 7.5%; z-index: 9999; -moz-border-radius: 10px; padding-top: 7px; text-align: center; color: ' + color + '} .wpplus_notify:hover{ cursor: pointer; }</style>');
				Whirlpool._notified = true;
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
	
	var SyncStorage = {
	
		server : decodeURIComponent(Whirlpool.get('syncServer')),
		
		user : Whirlpool.get('syncUser'),
		
		key : Whirlpool.get('syncKey'),
		
		scriptId : Whirlpool.get('sync_scriptId'),
		
		encKey : Whirlpool.get('syncEncKey'),
		
		get : function(name){
			if(typeof Whirlpool.get('sync_' + name) != 'undefined'){
				return JSON.parse(Whirlpool.get('sync_' + name));
			}
		},
		
		getTime : function(name){
			return JSON.parse(Whirlpool.get('sync_times'))[name];
		},
		
		getTimes : function(){
			return JSON.parse(Whirlpool.get('sync_times'));
		},
		
		set : function(name,value){
			this.setWithTime(name,value,Math.round(new Date().getTime() / 1000));
		},
		
		setWithTime : function(name,value,timestamp){
			timestamp = parseInt(timestamp);
					
			var times = JSON.parse(Whirlpool.get('sync_times'));
			
			times[name] = timestamp;
			
			Whirlpool.set('sync_times',JSON.stringify(times));
			
			if(timestamp > Whirlpool.get('sync_mostUpToDate')){
				Whirlpool.set('sync_mostUpToDate',timestamp);
			}
			
			Whirlpool.set('sync_' + name,JSON.stringify(value));
		},
		
		remove : function(name){
			if(this.get(name) !== false){
				this.set(name,null);
			}
		},
		
		_delete : function(name){
			var times = JSON.parse(Whirlpool.get('sync_times'));
			
			delete times[name];
			
			Whirlpool.set('sync_times',JSON.stringify(times));
			Whirlpool.remove('sync_' + name);
			
		},
		
		_sendRequest : function(request,callback){
			Whirlpool.ajax({
				headers: {"Content-Type": "application/x-www-form-urlencoded"},
				method : 'POST',
				url : this.server,
				data : 'u=' + this.user + '&k=' + this.key + '&r=' + JSON.stringify(request),
				onload : callback,
				onerror : function(response){
					SyncStorage._error(response.status);
				}
			});
		},
		
		_error : function(status){
			var message;
			switch(status){
				case null:
				case 404:
					message = 'Could not find sync server (404)';
				break;
				
				case 403:
					message = 'Incorrect user id/access key (403)';
				break;
				
				case 400:
					message = 'Bad Request (400)';
				break;
				
				case 500:
					message = 'Server Error (500)';
				break;
				
				default:
					message = 'Unknown Error (' + status + ')';
				break;
			}
			
			Whirlpool.notify('WP+ Sync Failed: ' + message,false,10*1000);
			$('#syncing').fadeOut();
		},
		
		_encrypt : function(data){
			return encodeURIComponent(Tea.encrypt(JSON.stringify(data),this.encKey));
		},
		
		_decrypt : function(data){
			return JSON.parse(Tea.decrypt(data,this.encKey));
		},
		
		sync : function(){
			if(Whirlpool.get('syncActivated') != 'true'){
				return;
			}
		
			$('#syncing').fadeIn();
			var request = {
				a : 'nu',
				id : this.scriptId,
				t : Whirlpool.get('sync_mostUpToDate'),
				ls : Whirlpool.get('sync_lastSync')
			};
						
			this._sendRequest(request,function(response){
				if(response.status != 200){
					SyncStorage._error(response.status);
				}else{
					var serverResponse = JSON.parse(response.responseText);
										
					var currentSyncTime = Math.round(new Date().getTime() / 1000);
					
					if(serverResponse.nu){
						var times = SyncStorage.getTimes();
						
						var dataForServer = {};
						
						for(var key in times){
							if(times[key] >= serverResponse.since){
								dataForServer[SyncStorage._encrypt(key)] = {
									t : times[key],
									d : (SyncStorage.get(key) === null) ? SyncStorage.get(key) : SyncStorage._encrypt(SyncStorage.get(key))
								};
							}
						}
						
						//server wants an update
						request = {
							a : 's',
							id : SyncStorage.scriptId,
							ls : Whirlpool.get('sync_lastSync'),
							ct : currentSyncTime,
							d : dataForServer
						};
																								
						SyncStorage._sendRequest(request,function(syncResponse){
							if(syncResponse.status != 200){
								SyncStorage._error(response.status);
								return;
							}
							
							syncResponse = JSON.parse(syncResponse.responseText);
							
							if(syncResponse.s){
								//data to sync
								
								var reload = false;
								
								if(typeof syncResponse.d != 'undefined'){								
									for(var key in syncResponse.d){
										decodedKey = SyncStorage._decrypt(key);										
										syncResponse.d[key]['d'] = SyncStorage._decrypt(syncResponse.d[key]['d']);
										
										if(SyncStorage.get(decodedKey) !== false){
											if(SyncStorage.getTime(decodedKey) <= syncResponse.d[key]['t']){
												SyncStorage.setWithTime(decodedKey,syncResponse.d[key]['d'],syncResponse.d[key]['t']);
											}
										}else{
											SyncStorage.setWithTime(decodedKey,syncResponse.d[key]['d'],syncResponse.d[key]['t']);
										}
										reload = true;
									}
								}
								
								if(typeof syncResponse.r != 'undefined'){
									for(var key in syncResponse.r){
										decodedKey = SyncStorage._decrypt(key);
										if(SyncStorage.get(decodedKey) !== false){
											if(SyncStorage.get(decodedKey) !== null){
												reload = true;
											}
											if(SyncStorage.getTime(decodedKey) <= syncResponse.r[key]['t']){
												SyncStorage._delete(decodedKey);
											}
										}
									}
								}
								
								if(reload && (Whirlpool.url.match('/forum/') || Whirlpool.url.match('/user/'))){
									window.location.reload();
								}
								
							}
							
							Whirlpool.set('sync_lastSync',currentSyncTime);
							$('#syncing').fadeOut();
							
						});
					}else{
						$('#syncing').fadeOut();
					}
				}
			});
			
		}
	}
	
	if(!Whirlpool.get('syncStorageInstalled')){
		Whirlpool.set('sync_lastSync',0);
		Whirlpool.set('sync_mostUpToDate',0);
		Whirlpool.set('sync_times',JSON.stringify({}));
		Whirlpool.set('sync_scriptId',Math.floor(Math.random()*100000001));
		Whirlpool.set('syncStorageInstalled',true);
	}
	
	if(Whirlpool.get('syncActivated') == 'true'){
		Whirlpool.css('#syncing { display: none; position: fixed; bottom: 0px; right: 0px; background-color: #3D3327; z-index: 10; padding: 6px 2px 2px 6px; border-top-left-radius: 15px; } #syncing img { height: 30px; width: 30px; }');
		$('body').append('<div id="syncing"><img src="' + Whirlpool.image('loader') + '" /></div>');
	
		SyncStorage.sync();
	}
	

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
	 @author		Troberto, rewrite by tbwd
	 @date		2009-12-23
	 @version	3.9.4
	 @runson		ALL
	 */
	if(Whirlpool.get('floatSidebar') == 'true' && !Whirlpool.url.match("/alert/")){
		var floating = true;
		var sidebarContent = $('div#left');
		sidebarContent.css('left','inherit');
		
		$(window).scroll(function(){
			if(floating){
				if(window.pageYOffset > 190){
					sidebarContent.css('position', 'fixed');
					sidebarContent.css('top','0px');
					
				}else{
					sidebarContent.css('position', '');
					sidebarContent.css('top', '190px');
				}
			}
		}).scroll();
		
		$('.selected ul[style~="dashed"]').append('<li id="wpplus_undock"><a href="javascript:;"> Unfloat Sidebar (temp)</a></li>');

		$('#wpplus_undock a').click(function () {
			floating = false;
			sidebarContent.css({
				'position': '',
				'top': '190px'
			});
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

	/*if (Whirlpool.get("inlinePages") == "true" && Whirlpool.url.match("forum-replies.cfm")) {
		$('.external').after('<sup style="cursor:pointer;" class="quick">(preview)</sup>');
		$('.quick').live('click', function (e) {
			var previewClass = ($(this).prop('id') !== '') ? $(this).prop('id') : 'quick' + Math.floor(Math.random() * 101);
			if ($('.' + previewClass).hasClass(previewClass)) {
				$(this).text('(preview)');
				$('.' + previewClass).parent().parent().remove();
			} else {
				$(this).text('(hide)');
				$(this).prop('id', previewClass);
				var link = $(this).prev('a');
				var post = $(this).closest('tr');
				$(post).after('<tr><td colspan="3" style="padding:0;height:400px;" class="tr' + previewClass + '"><iframe src="' + link.prop('href') + '" style="margin:0;display:block;border:none;width: 100%;height: 100%;" class="' + previewClass + '"></iframe><div class="handle" style="width: 100px;float:right;cursor:s-resize;">Resize</div></td></tr>');
				$('.tr' + previewClass).jqResize('.handle');
			}

		});
	}*/
	
	if (Whirlpool.get("inlinePages") == "true" && Whirlpool.url.match("forum-replies.cfm")) {
		$('.external').after('<sup style="cursor:pointer;" class="quick">(preview)</sup>');
		
		$(document).on('click', '.quick', function (e) {
				var previewClass = 'quick_' + $(this).parents('.reply').prop('id');
				if ($(this).text() == '(hide)') {
					$(this).text('(preview)');
					$('.' + previewClass).remove();
				} else {
					$(this).text('(hide)');
					$(this).prop('id', previewClass);
					var link = $(this).prev('a');
					var post = $(this).closest('div.reply');
					$(post).after('<div id="' + previewClass + '_div" class="' + previewClass + '"><iframe id="' + previewClass + '_iframe" class="jqDnR" src="' + link.prop('href') + '" style="margin:0;display:block;border:none;width: 100%;height: 100%;"></iframe><div class="jqResize handle" style="width: 100%;text-align:right;cursor:s-resize;">Resize</div></div>');
										
					$('#' + previewClass + '_div').jqResize('.handle');
				}

			});
	}
	
	var __ids = Whirlpool.get("hideForumIDs");
	if (__ids && __ids.length > 0 && Whirlpool.url == "http://forums.whirlpool.net.au/") {
		var ids = " " + decodeURI(__ids.toString()) + " ";
		
		$("#index tr").each( function( ) {
			var url = $(this).children(".title").children(".title").children("a").prop("href").split('/forum/')[1];
			if (ids.indexOf(url) > -1) {
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
	 @author		Troberto, Modification to work with userscripts.org by tbwd
	 @date		2009-12-23
	 @version	3.9.4, updated 4.3.4
	 @runson		ALL
	 */

	// Don't run in chrome- tampermonkey has an inbuilt updater
	if(!notFirefox){
		if (Whirlpool.get("smartUpdater") == "true" && (Whirlpool.url.match("user") || Whirlpool.url.match("/forum/"))) {

			var date = new Date();
			var currentTime = (date.getTime() - date.getMilliseconds()) / 1000;

			if (Whirlpool.get('updaterInterval') === false) {
				Whirlpool.set('updaterInterval', 30);
			}

			var next = Whirlpool.get('updaterInterval');

			if (Whirlpool.get('updaterChecked') === false) {
				Whirlpool.set('updaterChecked', currentTime);
			}

			var last = Whirlpool.get('updaterChecked');

			var next_seconds = next * 60;

			if (currentTime > last + next_seconds) {
			
				var url = 'http://userscripts.org/scripts/source/85217.meta.js';
				
				Whirlpool.HttpRequest(url, function (data) {
					var dataText = data.responseText;
					
					var newVersionText = dataText.split('// @version       ')[1].split('\r\n// @require')[0];
					
					var newVersionParts = newVersionText.split('.');
					
					var oldVersionParts = version.split('.');
					
					var newMajorVersion = parseInt(newVersionParts[0]);
					var newMiddleVersion = parseInt(newVersionParts[1]);
					var newMinorVersion = parseInt(newVersionParts[2]);
					
					var oldMajorVersion = parseInt(oldVersionParts[0]);
					var oldMiddleVersion = parseInt(oldVersionParts[1]);
					var oldMinorVersion = parseInt(oldVersionParts[2]);
					
					function update(){
						Whirlpool.notify('A new version of WP+ is available', true, 50000);
						GM_openInTab('http://userscripts.org/scripts/source/85217.user.js');
					}

					if (newMajorVersion > oldMajorVersion) {
						update();
					}else if(newMajorVersion == oldMajorVersion){
						if(newMiddleVersion > oldMiddleVersion){
							update();
						}else if(newMiddleVersion == oldMiddleVersion){
							if(newMinorVersion > oldMinorVersion){
								update();
							}
						}
					}
					
					
					Whirlpool.set('updaterChecked', currentTime);

				});

			}
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
		$('.userinfo').after('<div id="chatbox"><iframe name="cboxmain" src="http://www3.cbox.ws/box/?boxid=2818612&amp;boxtag=1700&amp;sec=main" id="cboxmain"></iframe><iframe name="cboxform" src="http://www3.cbox.ws/box/?boxid=2818612&amp;boxtag=1700&amp;sec=form" id="cboxform"></iframe></div>');
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
		Whirlpool.css(GM_getResourceText('prettify'));
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
			$('#breadcrumb li:last').append(' <a href="' + new_url + '">(show unanswered only)</a> ');
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

	var emoticons = {
		prep : function(){
			$( ".reference a" ).each( function( ) {
				var text = $(this).text( ).toString( ).replace( /\:/, "<span>:</span>" );
				$(this).html( text );
			} );
		},
		
		icons : {
			':angry:': Whirlpool.image('emoticon_angry'),
			':glad:': Whirlpool.image('emoticon_blushing'),
			':confused:': Whirlpool.image('emoticon_confused'),
			':cool:': Whirlpool.image('emoticon_cool'),
			':cry:': Whirlpool.image('emoticon_cry'),
			':(': Whirlpool.image('emoticon_frown'),
			':gasp:': Whirlpool.image('emoticon_gasp'),
			':D': Whirlpool.image('emoticon_grin'),
			'<3':Whirlpool.image('emoticon_kiss'),
			':X': Whirlpool.image('emoticon_lips'),
			':shout:': Whirlpool.image('emoticon_shout'),
			':snore:': Whirlpool.image('emoticon_sleep'),
			':)': Whirlpool.image('emoticon_smile'),
			':\\\\': Whirlpool.image('emoticon_smirk'),
			':|': Whirlpool.image('emoticon_straight'),
			':P': Whirlpool.image('emoticon_tongue'),
			';)': Whirlpool.image('emoticon_wink'),
			':star:': Whirlpool.image('emoticon_star')
		},
		
		duplicates : {
			':-(': Whirlpool.image('emoticon_frown'),
			':-D': Whirlpool.image('emoticon_grin'),
			':X': Whirlpool.image('emoticon_lips'),
			'=)': Whirlpool.image('emoticon_smile'),
			':-)': Whirlpool.image('emoticon_smile'),
			':-|': Whirlpool.image('emoticon_straight'),
			':-P': Whirlpool.image('emoticon_tongue'),
			'=P': Whirlpool.image('emoticon_tongue'),
			';-)': Whirlpool.image('emoticon_wink'),
			':;': Whirlpool.image('emoticon_wink'),
			':-;': Whirlpool.image('emoticon_wink'),
			':-\\\\': Whirlpool.image('emoticon_smirk'),
			'=\\\\': Whirlpool.image('emoticon_smirk'),
		},
		
		blue_icons : {
			':~': Whirlpool.image('old_blue_anxious'),
			//'(3': Whirlpool.image('old_blue_clown'), //confusing
			//'(-3': Whirlpool.image('old_blue_clown'), //confusing
			'(:': Whirlpool.image('old_blue_cool'),
			//':crazy:': Whirlpool.image('old_blue_crazy'), //not a blue icon...
			'-o.o-': Whirlpool.image('old_blue_eyes'),
			':D': Whirlpool.image('old_blue_grin'),
			':|)': Whirlpool.image('old_blue_happy2'),
			':)': Whirlpool.image('old_blue_happy'),
			':|(': Whirlpool.image('old_blue_sad2'),
			':(': Whirlpool.image('old_blue_sad'),
			':|': Whirlpool.image('old_blue_neutral'),
			':ninja:': Whirlpool.image('old_blue_ninja'),
			';)': Whirlpool.image('old_blue_smirk'),
			':P': Whirlpool.image('old_blue_tongue'),
			':star:': Whirlpool.image('emoticon_star')
		},
		
		blue_duplicates : {
			'(:': Whirlpool.image('old_blue_cool'),
			'-oo-': Whirlpool.image('old_blue_eyes'),
			':-D': Whirlpool.image('old_blue_grin'),
			':-)': Whirlpool.image('old_blue_happy'),
			'=)': Whirlpool.image('old_blue_happy'),
			':-(': Whirlpool.image('old_blue_sad'),
			':-|': Whirlpool.image('old_blue_neutral'),
			':ninja:': Whirlpool.image('old_blue_ninja'),
			':\\\\':Whirlpool.image('old_blue_smirk'),
			':-\\\\':Whirlpool.image('old_blue_smirk'),
			'=\\\\':Whirlpool.image('old_blue_smirk'),
			';-)': Whirlpool.image('old_blue_smirk'),
			':-P': Whirlpool.image('old_blue_tongue'),
			'=P': Whirlpool.image('old_blue_tongue'),
		},
		
		getIconSet : function(useDuplicates){
			
			mainIcons = {};
			duplicateIcons = {};
		
			if( Whirlpool.get("emoticonsBlue") == "true" ) {
				$.extend(mainIcons,emoticons.blue_icons);
				$.extend(duplicateIcons,emoticons.blue_duplicates);
			}else{
				$.extend(mainIcons,emoticons.icons);
				$.extend(duplicateIcons,emoticons.duplicates);
			}
			
			if(useDuplicates){
				$.extend(mainIcons,duplicateIcons);
			}
			
			return mainIcons;
			
		},
		
		regex : {},
		endLine : {},
		startLine : '<img src ="',
		currentIconSet : {},
		
		initialise : function(){
			emoticons.currentIconSet = emoticons.getIconSet(true);
			
			for (icon in emoticons.currentIconSet) {
				var regkey = icon;
				regkey = regkey.replace(/</g, "&lt;");
				regkey = regkey.replace(/>/g, "&gt;");
				regkey = regkey.replace(/\(/g, "\\(");
				regkey = regkey.replace(/\)/g, "\\)");
				regkey = regkey.replace(/\[/g, "\\[");
				regkey = regkey.replace(/\]/g, "\\]");
				regkey = regkey.replace(/\|/g, "\\|");
				
				regkey = '(\\s)' + regkey;
				
				emoticons.regex[icon] = new RegExp(regkey, 'g');
				emoticons.endLine[icon] = '" align="baseline" />';
			}
			

		},
		
		runOnTextNode : function(){
			node = $(this);
			
			var node_value = node.html();
			
			smiley = emoticons.run(node_value);
			
			if (smiley.length > 1 && smiley != node_value) {
				node.html(smiley);
			}
		},
		
		run : function(nodeValue){
		
			var smiley = ' ' + nodeValue;
			
			for (icon in emoticons.currentIconSet) {
				smiley = smiley.replace(emoticons.regex[icon], ' ' + emoticons.startLine + emoticons.currentIconSet[icon] + emoticons.endLine[icon]);
			}
			
			return smiley;
		}
		
		
	};
	

	if (Whirlpool.get("emoticons") == "true" && Whirlpool.url.match("forum-repl")) {

		emoticons.prep();
		emoticons.initialise();
					
		$('div.bodytext > p').each(emoticons.runOnTextNode);

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
	if (Whirlpool.get("simple_backup") == "true" && $('#body').prop('id') == 'body') {
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
	
	/* oEmbed Links */
	
	//Migrate old settings
	if(Whirlpool.get('inlineVideos',false) !== false){
		if(Whirlpool.get('inlineVideos') == 'true'){
			Whirlpool.set('oembed','true');
			Whirlpool.remove('inlineVideos');
		}else{
			Whirlpool.set('oembed','false');
			Whirlpool.remove('inlineVideos');
		}
	}
	
	if (Whirlpool.get( "oembed" ) == 'true' && Whirlpool.url.match("forum-replies.cfm")) {
		Whirlpool.css(GM_getResourceText('oembedcss'));

		//From http://stackoverflow.com/questions/2303147/injecting-js-functions-into-the-page-from-a-greasemonkey-script-on-chrome
		var injectOEmbed = unsafeWindow.document.createElement('script');
		injectOEmbed.appendChild(unsafeWindow.document.createTextNode('function injectOEmbed(){ '+ GM_getResourceText('oembedjs') +'}'));
		unsafeWindow.document.head.appendChild(injectOEmbed);
		
		unsafeWindow.injectOEmbed();
		
		try{
			var matchingRegex = new RegExp(decodeURIComponent(Whirlpool.get("oembed_types").replace('.','\.')));
			
			unsafeWindow.$('#replies .replytext a').not('.internal').each(function(){
				var link = unsafeWindow.$(this);
				
				if(matchingRegex.test(link.prop('href'))){
					link.oembed(null,{ });
				}
			});
		}catch(error){
			Whirlpool.notify('oEmbed content types is invalid! (WP+ Settings > Posts > Display and Formatting Options)',false,10000);
		}
		
	}
	
	if (Whirlpool.url.match("forum-replies.cfm")) {
		var extensions = "bmp|gif|jpg|png".split("|");
		var width = '100%'; //$(".bodytext").css("width").toString( );
		
		var displayed = {};
		
		$( ".bodytext a" ).each( function( ) {
			var link = $(this).prop('href').toString( );
			
			if ( Whirlpool.get( "inlineImages" ) == "true" ) {
				for ( key in extensions ) {
					if ( link.toLowerCase( ).indexOf( extensions[key] ) > -1 && displayed[link] != true) {
						$(this).before('<img src="' + link + '" class="wpx_img">');
						displayed[link] = true;
					}
				}
			}
			
			/*if ( Whirlpool.get( "inlineVideos" ) == "true" ) {
				if ( link.indexOf( "youtube.com/watch" ) > -1 && displayed[link] != true ) {
					var id = link.split("v=")[1];
					if(typeof id != 'undefined'){
						id = id.split("&")[0];
					}
					var code = '<embed src="http://www.youtube.com/v/' + id + '&hl=en_US&fs=1&rel=0" type="application/x-shockwave-flash" allowfullscreen="true" width="436" height="350"></embed>';
					$(this).before(code);
					displayed[link] = true;
				}
			}*/
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
		$( '.actions a[href^="/forum/index.cfm?action=edit"]' ).after( "<br><a class='wpp-edit'>(quick edit)</a>" );
		$( ".wpp-edit" ).css("cursor", "pointer" );
		
		function wpp_quickEdit(e){
			$(this).hide( );
			$(this).after( "<a class='wpp-c-edit'>(cancel)</a>" );
			$( ".wpp-c-edit" ).css("cursor", "pointer" );
			var edit_url = $(this).prev( ).prev().prop( "href" ).toString();
			var reply_id = edit_url.split( "e=" )[1];
			var reply_html = $( "#r" + reply_id + " .bodytext" );
			var original = reply_html.html( ).toString( );
			
			var width = reply_html.css( "width" ).toString(),
				height = reply_html.css( "height" ).toString();
			
			reply_html.load( edit_url + " form", function( ) {
				$("#reply th, #reply tr:first, #reply .right, #reply #prev, #previewNote, #reply td div").hide( );
				$("#reply td").css( "background-color", "transparent" );
				$("#reply td").css( "padding", "0");
				$('#body').css("width", width);
				$('#body').css("height", height);
				$("#fm input[type=submit]:last").after("<button class='wpp-c-edit' type='button'>Cancel</button>");
				$(".wpp-c-edit").on( "click", function( e ) {
					reply_html.html(original);
					$( ".wpp-edit" ).show( );
					$(".wpp-c-edit").remove( );
				} );
				$( ".wpp-c-edit" ).css("cursor", "pointer" );
				
				$("input").click( function(e) {
					$( "input[name=post2]" ).val("post");
					var data = $("#fm").serialize( );
					$.post( $("#fm").prop("action"), data, function( text ) {
						if( text.indexOf( "Edited. Returning" ) > -1 ) {
							document.location.reload();
						} else {
							alert( "WP+: Something went wrong while editing your post. Some common problems:\n - Overquoting\n - Too much text\n - Invalid characters\nTry using the normal editing function instead. Please report this bug in the WP+ thread (in Feedback)." );
						}
					} );
					return false;
				} );
			} );
		}
		
		$('#replies .wpp-edit').on('click', wpp_quickEdit );
	}   
   
   
	if($('.copyright').length == 1){
		$('.copyright').append('<dt><img src="' + Whirlpool.image('wp_plus_logo') + '" alt="Whirlpool Plus" /></dt><dd>Extra Awesomeness added  <br /> with <a href="http://whirlpool.net.au/wiki/whirlpool_plus">Whirlpool Plus ' + version + '</a></dd>');
	}
	
	if(Whirlpool.url.match('action=yourvotes')){
		var auraCount = { 1 : 0, 2 : 0, 3 : 0, 4 : 0 };
		var totalAuras = 0;
	
		$('#content table tr[bgcolor="white"]').each(function(){			
			switch($(this).find('.voteactive, .votecrusty').prop('title')){
				case 'irritating scum':
					auraCount[1]++;
				break;
				case 'typical user':
					auraCount[2]++;
				break;
				case 'constructive':
					auraCount[3]++;
				break;
				case 'top person':
					auraCount[4]++;
				break;
			}
			
			totalAuras++;
		});
		
		var auraPercentages = {
			1 : Math.floor((auraCount[1] / totalAuras) * 1000)/10,
			2 : Math.floor((auraCount[2] / totalAuras) * 1000)/10,
			3 : Math.floor((auraCount[3] / totalAuras) * 1000)/10,
			4 : Math.floor((auraCount[4] / totalAuras) * 1000)/10,
		};
		
		var voteHtml = '<p>Stats:</p><div class="voteblock"><table style="text-align: center; font: bold 10px monospace;"><tr>' + 
			'<td><span class="voteitem" style="cursor: auto;">:(</span></td>' + 
			'<td><span class="voteitem" style="cursor: auto;">:|</span></td>' + 
			'<td><span class="voteitem" style="cursor: auto;">:)</span></td>' + 
			'<td><span class="voteitem" style="cursor: auto;">:D</span></td>' + 
		'</tr>' + 
		
		'<tr>' + 
			'<td>' + auraPercentages[1] + '%</td>' + 
			'<td>' + auraPercentages[2] + '%</td>' + 
			'<td>' + auraPercentages[3] + '%</td>' + 
			'<td>' + auraPercentages[4] + '%</td>' + 
		'</tr>' + 
		
		'<tr>' + 
			'<td>' + auraCount[1] + '</td>' + 
			'<td>' + auraCount[2] + '</td>' + 
			'<td>' + auraCount[3] + '</td>' + 
			'<td>' + auraCount[4] + '</td>' + 
		'</tr>' + 

		'</table><p style="font: bold 10px monospace;">Total: ' + totalAuras + '</p></div>';
	
		$('#breadcrumb').after(voteHtml);
	}

	//Set default userpage days
	if (Whirlpool.get('recentActivityDays') != '7') {
		//have to do this twice, because there are two different ways to link to user pages used
		$('a[href*="forums.whirlpool.net.au/user/"]:not([href*="?"])').each(function(){
			var link = $(this);
			link.prop('href',link.prop('href') + '?days=' + Whirlpool.get('recentActivityDays'));
		});
		$('a[href^="/user/"]:not([href*="?"])').each(function(){
			var link = $(this);
			link.prop('href',link.prop('href') + '?days=' + Whirlpool.get('recentActivityDays'));
		});
	}
   
   //Return the user who made a post. Accepts the table row that represents each post
   function getUserNumber(tr){
		var num = tr.find('a[href*="/user/"]:not([href*="online"])').prop('href').split('/user/')[1];
		num = num.split('?');
		return parseInt(num);
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
		if(trParent.is(':hidden')){
			return;
		}
	
		var tdBodyUser = trParent.find('.replyuser-inner');
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
		 
			//need uNum as a string
			if ($.inArray('' + uNum,hiddUsersArr) != -1) {
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
         var rowId = trParent.prop('id');
			
			trParent.hide();
			
			var hiddenPostNotice = $('<div class="notice" id="' + rowId +'"><div class="replyuser">User #' + uNum + ' &nbsp; <a style="color:black" href="http://forums.whirlpool.net.au/user/' + uNum + '"><b>' + userName + '</b></a></div><div class="replytools">' + postDate + '</div><i>This post was hidden by you (Whirlpool Plus).</i></div>');
			
			var showLink = $('<a href="javascript:void(0)">Unhide</a>').click(function(){
				trParent.show();
				hiddenPostNotice.hide();
			});
			
			
			hiddenPostNotice.append(showLink);
			
			trParent.before(hiddenPostNotice);
			
      }
   }
   
   //Avatars lite
   
   var avatar = {
		
		'avatariseRow' : function(replyTr){
			var userNumber = getUserNumber(replyTr);
			replyTr.find('.replyuser-inner').prepend($('<div class="wpp_avatar wpp_avatar_' + userNumber + '"><a class="wpp_avatar_link" href="/user/' + userNumber + '" /></div>'));
			replyTr.addClass('wpp_avatar_reply_' + userNumber);
		},
		
		'avatariseWhim' : function(){
			replyTr = $(this);
		
			var userNumber = getUserNumber(replyTr);

			replyTr.find('.bodyuser').prepend($('<div class="wpp_avatar wpp_avatar_' + userNumber + '"><a class="wpp_avatar_link" href="/user/' + userNumber + '" /></div>'));
			replyTr.addClass('wpp_avatar_reply_' + userNumber);
		},
		
		'css' : function(){
			if (Whirlpool.get('staticAvatars') == 'true') {
				$('head').append('<link rel="stylesheet" type="text/css" href="http://wpplus.endorph.net/avatars/avatar_lite.css">');
			}

			if (Whirlpool.get('animatedAvatars') == 'true') {
				$('head').append('<link rel="stylesheet" type="text/css" href="http://wpplus.endorph.net/avatars/animatedavatar_lite.css">');
			}
			
			Whirlpool.css('.wpp_avatar_link { margin:0 auto; display: block; width: 100%; height: 100%; } .wpp_avatar {display: block; background-repeat: no-repeat; margin:0 auto;}');
		},
		
		'getUserAvatar' : function(id,callback){
			Whirlpool.ajax({
				method : 'GET',
				url : 'http://wpplus.endorph.net/avatars/getAvatar.php?id=' + id,
				onload : callback
			});
		},
		
		'updateAvatar' : function(apiKey,url,callback){
			var action;
			
			if(url == ''){
				action = 'remove';
			}else{
				action = 'update';
			}
			
			Whirlpool.ajax({
				method : 'POST',
				headers: {"Content-Type": "application/x-www-form-urlencoded"},
				data : 'apiKey=' + apiKey + '&action=' + action + '&url=' + url,
				url : 'http://wpplus.endorph.net/avatars/remote.php',
				onload : callback
			});
			
		}
   }
	
	//end avatars lite
		
	var whirlpoolLastRead = {
		'trackThisThread' : true,
	
		'saveThreadData' : function(threadNumber,threadReplyNumber,overallReplyNumber){
			SyncStorage.set(threadNumber,{t : threadReplyNumber, o : overallReplyNumber});
		},
		
		'loadThreadData' : function(threadNumber){
			var raw = SyncStorage.get(threadNumber);
			if(raw !== null){
				return raw;
			}else{
				return false;
			}
		},
		
		'importToSync' : function(){
			//imports data to the new sync storage
			var rawData = Whirlpool.get('whirlpoolLastReadData');
            
            if(rawData){
                var trackerData = JSON.parse(rawData);
				
				for(var key in trackerData){
					
					if(typeof trackerData[key]['pageNumber'] != 'undefined'){
						SyncStorage.setWithTime(key,{t : trackerData[key]['threadReplyNumber'], p : trackerData[key]['pageNumber']},1);
					}else{
						SyncStorage.setWithTime(key,{t : trackerData[key]['threadReplyNumber'], o : trackerData[key]['overallReplyNumber']},1);
					}
					
				}
				
            }
		},
		
		
		/*
		 * Records the last read reply in a thread. Should be run on forum-replies pages
		 */
		'forumReplies' : function(){
		
			//css rules
			if(Whirlpool.get('styleFlip') == 'false'){
				Whirlpool.css('#replies #replylist .whirlpoolLastRead_readReply .replytools { margin-top: -2px; background-color: ' + decodeURIComponent(Whirlpool.get('trackerPostBackgroundColour')) + '; background-image: none; }');
			}else{
				Whirlpool.css('#replies #replylist .whirlpoolLastRead_unreadReply .replytools { background-color: ' + decodeURIComponent(Whirlpool.get('trackerPostBackgroundColour')) + '; background-image: none; }');
			}
		
			var lastReadReplyNumber = whirlpoolLastRead.loadThreadData(Whirlpool.threadNumber)['t'];
			$('div#replies .reply').not(':hidden').each(function(){
				var reply = $(this);
				var replyNumber = $(reply.prevAll('a[name!="bottom"]')[1]).prop('name').slice(1);
				
				if(parseInt(replyNumber) <= parseInt(lastReadReplyNumber)){
					reply.addClass('whirlpoolLastRead_readReply');
				}else{
					reply.addClass('whirlpoolLastRead_unreadReply');
				}
			});
			
			// The "disable tracking" button
			
			if(Whirlpool.get('tempDisableTracker') == 'true'){
				Whirlpool.css('#wlr_disableTracker { height: 40px; width: 40px; position: fixed; top: 0px; right: 0px; border-bottom-left-radius: 30px; background-color: #3A437B; }' +
				' .wlr_disableTracker_img { width: 25px; position: relative; top: 5px; left: 10px; } ' +
				' #wlr_disableTracker_disabled { display: none; } ');
				$('body').append('<div id="wlr_disableTracker">' + 
				'<img class="wlr_disableTracker_img" id="wlr_disableTracker_enabled" src="' + Whirlpool.image('check') + '" title="WLR Tracker Enabled" />' + 
				'<img class="wlr_disableTracker_img" id="wlr_disableTracker_disabled" src="' + Whirlpool.image('cross') + '" title="WLR Tracker Disabled" />' + 
				'</div>');
				$('#wlr_disableTracker').click(function(){
					
					$('.wlr_disableTracker_img').toggle();
					
					if(whirlpoolLastRead.trackThisThread == true){
						whirlpoolLastRead.trackThisThread = false;
					}else{
						whirlpoolLastRead.trackThisThread = true;
					}
					
				});
			}
			
		
			var lowestViewHeight = window.innerHeight + window.pageYOffset;
			
			$(window).scroll(function(e){
				var currentViewHeight = window.innerHeight + window.pageYOffset;
				if(currentViewHeight > lowestViewHeight){
					lowestViewHeight = currentViewHeight;
				}
			});
			
			var unloadEvent = 'beforeunload';
			
			//firefox 3.6 does not support 'beforeunload'
			if($.browser.mozilla == true && $.browser.version.substring(0,4) == '1.9.'){
				unloadEvent = 'unload';
			}
			
			$(window).bind(unloadEvent,function(){
				if(whirlpoolLastRead.trackThisThread == false){
					return;
				}
			
				//need to find the last read reply
				var replies = $('div#replies .reply, div#replies .notice').not('#previewTR');
				
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
					var replyNumberLinks = lastReadReply.prevAll('a[name!="bottom"]');
					
					var threadReplyNumber = parseInt($(replyNumberLinks[1]).prop('name').slice(1));
					var overallReplyNumber = $(replyNumberLinks[0]).prop('name').slice(1);
					
					var currentData = whirlpoolLastRead.loadThreadData(Whirlpool.threadNumber);
											
					if(currentData == false || parseInt(currentData['t']) <= threadReplyNumber){
						whirlpoolLastRead.saveThreadData(Whirlpool.threadNumber,threadReplyNumber,overallReplyNumber);
					}
					
				}				
			});
		},
		
		'forumPage' : function(){
			var threads = $('#threads > table > tbody > tr:not(.section)');
			
			threads.each(function(){
				var thread = $(this);
				
				try{
					var threadNumber = parseInt(thread.find('a.title').prop('href').split('t=')[1]);
				}catch(e){
					return;
				}
				
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
						if(threadData['o']){
							link = '/forum-replies.cfm?r=' +  threadData['o'] + '#r' + threadData['o']; //used by Simon's jumpToReplyId method, so preferred
						}else{
							//use the old page number method
							link = '/forum-replies.cfm?t=' + threadNumber + '&p=' + threadData['p'] + '#r' + threadData['t'];
						}
						
						
						//change the link
						thread.find('.goend > a').prop('href',link).prop('title','Jump to last read post');
						
						//add the controls
						thread.find('.reps').not(':has(a)').append('<span class="whirlpoolLastRead_controls small"><a href="#" class="whirlpoolLastRead_stopTracking" title="Stop tracking this thread">S</a></span>');
						
						if(threadData['t'] < numberOfReplies){
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
			Whirlpool.css('.whirlpoolLastRead_unreadPosts { background: url("http://wpplus.endorph.net/resources/png/gradient.png") repeat scroll 0 0 ' +  decodeURIComponent(Whirlpool.get('newPostBackgroundColour')) + ' !important;  }');
			Whirlpool.css('.whirlpoolLastRead_noUnreadPosts { background: url("http://wpplus.endorph.net/resources/png/gradient.png") repeat scroll 0 0 ' +  decodeURIComponent(Whirlpool.get('noNewPostBackgroundColour')) + ' !important;  }');
			Whirlpool.css('#content .whirlpoolLastRead_controls a { border-bottom-color:grey; border-bottom-style:dashed; font-size: 9px; margin-top: -5px; opacity:0.3; border-bottom-width:1px; float: left; }');
			Whirlpool.css('#content a.whirlpoolLastRead_markAsRead { margin-top: -8px; ');
		},
		
		'stopTracking' : function(threadNumber){
			SyncStorage.remove(threadNumber);
			SyncStorage.sync();
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
			SyncStorage.set(threadNumber,{t : numberOfReplies, p : pageNumber })
			
			//change the link
			var link = '/forum-replies.cfm?t=' + threadNumber + '&p=' + pageNumber + '#r' + numberOfReplies;
			threadLink.closest('tr').find('.goend > a').prop('href',link);
			
			SyncStorage.sync();
			
			return false;
			
			
		}
		
		
		
	};
		
	
	if(Whirlpool.get('lastReadTracker') == 'true'){
		
		if(Whirlpool.get('whirlpoolLastReadSyncImported') == false){
			alert('WP+: Converting WLR Data. Please be patient, this might take some time. If the browser asks to stop the script, please allow it to continue.');
			whirlpoolLastRead.importToSync();
			Whirlpool.set('whirlpoolLastReadSyncImported',true);
			alert('Data import complete. WLR Synchronisation between computers is now available.');
		}
		
		if(Whirlpool.url.match('forum-replies')){
			
			//scroll to the post that we were actually sent to
			if(window.location.hash){
				$(window).load(function(){
					var location = $(window.location.hash);
					if(location.length > 0){
						$(window).scrollTop(location.offset().top);
					}
				});
			}
		
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
			var resetUser = block.prop('title');
			var replyId = $(block.closest('div.reply')).prop('id').split('r')[1];
			var clickFunction = 'userVote(' + replyId + ',' + resetUser + ',0,' + user.id + ');';
			block.children('span[id$="sn1"]').after(' <span class="voteitem" id="vote' + replyId + 's0" title="reset vote" onclick="' + clickFunction + '">?</span> ');
		});
	}
	
	/*
	 * Recent Activity overlay
	 */
	
	if(Whirlpool.get('recentActivityOverlay') == 'true'){
	
		var recentActivityOverlay = {
		
			'getData' : function(callback){
				
				if(Whirlpool.get('whirlpoolAPIKey') == ''){
					alert('WP+ Recent Activity Overlay\n You don\'t seem to have entered your API key in the setting dialog');
					return;
				}
			
				Whirlpool.ajax({
					method : 'GET',
					url : 'http://whirlpool.net.au/api/?key=' + Whirlpool.get('whirlpoolAPIKey') + '&output=json&get=recent&recentdays=' + Whirlpool.get('recentActivityOverlayDays'),
					onload : function(response){
										
						if(response.status == 200){
							var threads = JSON.parse(response.responseText).RECENT;
							
							Whirlpool.set('recentActivityData',JSON.stringify(threads));
							
							if(typeof callback == 'function'){
								callback();
							}
						}else{
							alert('WP+ Recent Activity Overlay \n Whirlpool API Error: ' + response.responseText);
						}
						
					},
					onerror : function(response){
						alert('WP+ Recent Activity Overlay \n Whirlpool API Error: ' + response.responseText);
					}
				});
			},
			
			'formatData' : function(){
				var threads = JSON.parse(Whirlpool.get('recentActivityData'));
				
				var unreadHtml = '';
				var readHtml = '';
				var link = '';
				var unread = false;
				var anyUnread = false;
				
				var is_wlr = Whirlpool.get('lastReadTracker') == 'true';		
					
				for(i in threads){
					unread = false;
					
					if(is_wlr){
						threadData = whirlpoolLastRead.loadThreadData(threads[i].ID);
						
						if(threadData == false){
							link = '/forum-replies.cfm?t=' + threads[i].ID;
						}else{
							if(threads[i].REPLIES + 1 > threadData['t']){
								unread = true;
							}
							
							if(threadData['o']){
								link = '/forum-replies.cfm?r=' +  threadData['o'] + '#r' + threadData['o']; //used by Simon's jumpToReplyId method, so preferred
							}else{
								link = '/forum-replies.cfm?t=' + threads[i].ID + '&p=' + threadData['p'] + '#r' + threadData['t'];
							}
						}
					}else{
						link = '/forum-replies.cfm?t=' + threads[i].ID;
					}
					
					if(unread){
						unreadHtml += '<p class="recentActivityOverlayUnread"><a href="' + link + '">' + threads[i].TITLE + '</a></p>';
						anyUnread = true;
					}else{
						readHtml += '<p><a href="' + link + '">' + threads[i].TITLE + '</a></p>';
					}
				
				}
				
				Whirlpool.set('recentActivityHtml',unreadHtml + readHtml);
				
				if(anyUnread){
					$('#recentActivityUnreadThreads').show();
				}else{
					$('#recentActivityUnreadThreads').hide();
				}
				
			},
			
			'displayOverlay' : function(){
				$('body.not_IE').append('<div id="recentActivityDropdownContainer"><div id="recentActivity"><div id="recentActivityContent">Loading...</div><img id="recentActivityReload" alt="Reload" src="' + Whirlpool.image('reload') + '" /></div><div id="recentActivityHandle">Recent Activity <img src="' + Whirlpool.image('emoticon_star') + '" alt="Unread threads" id="recentActivityUnreadThreads" /></div></div>');
				Whirlpool.css('#recentActivityDropdownContainer { position: fixed; z-index: 999; top: 0px; left: 50%; width: 20%; margin-left: -10%; color: #fff; }' +
				'#recentActivityHandle { background-color: #3A437B; text-align: center; border-bottom-right-radius: 40px 20px; border-bottom-left-radius: 40px 20px; padding-top: 5px; box-shadow: 2px; 0 8px rgba(255, 255, 255, 0.5); width: 150px; margin: 0 auto; cursor: pointer; font-family: Georgia,Cambria,Charter,\'Century Schoolbook\',serif;  height: 25px; font-weight: bold; }' +
				'#recentActivity { overflow: hidden; color: #333; max-height: 600px; display: none; background-color: #e5e5e5; text-align: center; border: solid 2px #3A437B; border-bottom-right-radius: 40px 20px; border-bottom-left-radius: 40px 20px; border-top: none; padding-top: 5px; }' +
				'#recentActivity a { color: #333; }' + 
				'.recentActivityOverlayUnread { font-weight: 900; }' + 
				'#recentActivityReload { width: 20px; height: 20px; float: right; margin-top: -30px; margin-right: 30px; cursor: pointer; }' +
				'#recentActivityUnreadThreads { width: 10px; height: 10px; display: none; }' +
				'#recentActivityContent { overflow-y: scroll; height: 200px;  margin-top: -4px; }');
				
				var activityOpen = false;
				var activityArea = $('#recentActivity');
				$('#recentActivityHandle').click(function(){
					if(activityOpen){
						activityArea.hide();
						activityOpen = false;
					}else{
						activityArea.show();
						activityOpen = true;
					}
				});
				
				$('#recentActivityReload').click(function(){
					$('#recentActivityContent').html('Loading...');
					recentActivityOverlay.updateData(function(){
						recentActivityOverlay.formatData();
						recentActivityOverlay.loadDataIntoOverlay();
					},true);
				});
			},
			
			'updateData' : function(callback,forceUpdate){
				var updateInterval = Whirlpool.get('recentActivityUpdateInterval');
				var lastUpdate = parseInt(Whirlpool.get('recentActivityLastUpdate'));
				var currentTime = (new Date).getTime();
				
				if(forceUpdate || updateInterval * 60 * 1000 + lastUpdate < currentTime){
					this.getData(callback);
					Whirlpool.set('recentActivityLastUpdate',currentTime + '');
				}else{
					if(typeof callback == 'function'){
						callback();
					}
				}
				
			},
			
			'loadDataIntoOverlay' : function(){
				$('#recentActivityContent').html(Whirlpool.get('recentActivityHtml'));
			},
			
			'run' : function(){
				this.displayOverlay();
				this.updateData(function(){
					recentActivityOverlay.formatData();
					recentActivityOverlay.loadDataIntoOverlay();
				},false);
			}
			
		}
		
		recentActivityOverlay.run();
		
	}
	
	//Sort search results by date (Thanks, Yanksy, http://userscripts.org/scripts/show/92400)
	if(Whirlpool.url.match('action=threads_search')){
		var fPA = $('<a href="#" style="color:white;" />');

		fPA.toggle(function() {
			GM_orderSearch('.oldest','down');
			return false;
		}, function() {
			GM_orderSearch('.oldest','up');
			return false;
		});

		$('td.oldest:first b').wrap(fPA);


		var fPA2 = $('<a href="#" style="color:white;" />');

		fPA2.toggle(function() {
			GM_orderSearch('.newest','down');
			return false;
		}, function() {
			GM_orderSearch('.newest','up');
			return false;
		});

		$('td.newest:first b').wrap(fPA2);

		function GM_orderSearch(firstOrLast,upOrDown){

			$('#threads td.group:first').html('<b>Forum</b>').prop('style','background-color: #937F69;color: white;font-size: 11px;padding: 4px;text-align: center;');

			var getTrs = $('#content #threads tbody tr');
			var titleTxt=true;
			var plainArr = [];
			var daysArr=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
			var daysArrStore=[];	
			
			getTrs.each(function(i){
			
					var hasC = $(this).hasClass('section');
					if(hasC){
						if($(this).css('display')!='none'){	//if it has already been run once
							titleTxt=$(this).find('a:first');
							$(this).css('display','none');
						}
						else{
							titleTxt=false;
						}
					}    
					else{
						if(titleTxt){	//if it has already been run once
							$(this).children('.group').empty().append(titleTxt.clone());
						}
						var dS, dS2, ds2Num, tymeHTML=$(this).children(firstOrLast).html().split('<br>')[1];
						
						var newDate = new Date();
						var todaysDate = newDate.getDate();
						var todaysDay = newDate.getDay();
						var currHour = newDate.getHours(); 
						var currMinute = newDate.getMinutes();
						var currMonth = newDate.getMonth();
						var currYear = newDate.getFullYear();	
						
						if(!tymeHTML.match('m')){
							newDate="Thu, 01 Jan 1970 00:00:00 GMT";
						}
						else if(tymeHTML.match('minutes ago')){		//32 minutes ago
							dS=Number(tymeHTML.split('minutes ago')[0]);
							newDate.setMinutes(currMinute-dS);		//cause it's "minutes ago"
						}
						else if(tymeHTML.match('Today at ')){		//Today at 1:23 am
							dS=tymeHTML.split('Today at ')[1].split(' ')[0];
							dS2=dS.split(':');
							newDate.setMinutes(Number(dS2[1]));
							ds2Num=Number(dS2[0]);
							if(tymeHTML.match('pm') && ds2Num!=12){
								ds2Num+=12;
							}
							newDate.setHours(ds2Num);
						}
						else if(tymeHTML.match('Yesterday at ')){		//Yesterday at 2:11 pm
							newDate.setDate((todaysDate-1));
							dS=tymeHTML.split('Yesterday at ')[1].split(' ')[0];
							dS2=dS.split(':');
							newDate.setMinutes(Number(dS2[1]));
							ds2Num=Number(dS2[0]);
							if(tymeHTML.match('pm') && ds2Num!=12){
								ds2Num+=12;
							}
							newDate.setHours(ds2Num);				
						}
						else if(tymeHTML.match(/Sunday|Monday|Tuesday|Wednesday|Thursday|Friday|Saturday/)){		//Wednesday at 5:02 pm

							dS=tymeHTML.split(' at ');
							dS2=dS[1].split(' ')[0].split(':');

							var daysArrSl=daysArr.slice(0,todaysDay);
							var daysArrS2=daysArr.slice(todaysDay);
							daysArrStore =daysArrS2.concat(daysArrSl);						

							daysArrStore.reverse();
							var theHolyIndex=null;
							for(var i=0;i<daysArrStore.length;i++){
								if(dS[0] == daysArrStore[i]){
									theHolyIndex=i+1;
									break;
								}
							}
							
							ds2Num=Number(dS2[0]);
							if(tymeHTML.match('pm') && ds2Num!=12){
								ds2Num+=12;
							}
							
							newDate.setDate((todaysDate-theHolyIndex));
							newDate.setHours(ds2Num);
							newDate.setMinutes(Number(dS2[1]));
						}
						else{		//2010-Jan-4, 3:24 pm
							dS= tymeHTML.split(',');
							dS2=dS[0].split('-');
							newDate=dS2[2]+" "+dS2[1]+" "+dS2[0]+dS[1];
						}
						var tyme = {
							ele: this,
							t:Date.parse(newDate.toString())
						};
						plainArr.push(tyme);
					}

				
			});

			plainArr.sort(function(a,b) { 
				if(upOrDown=='up'){
					return a.t < b.t ? -1 : 1; 
				}
				else{
					return a.t > b.t ? -1 : 1; 
				}
			});

			var tTB=document.querySelector('#threads tbody');
			for(var j=0;j<plainArr.length;j++){
				tTB.appendChild(plainArr[j].ele);
			}
		}
	}
	

	// ! Glug (Legacy JS)
	/******************************************************* GLUG ***************************************************************************************************/


	var gmDefaults, docs = {
		d: document,
		//dUrl: document.URL,
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
		//futer: $('#footer'),
		//threadNumber: null
	};

	function setGM() {

		gmDefaults = {
			'debugMode': 'false',
			'smartUpdater': 'true',
			'installedScriptVersion': version,
			//'lastScriptVersionCheck': '1232062510821',
			'dynamicMenuSystem': 'none',
			'dynamicMenuSystem_settingsLink': 'top',
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
			//'smilies': 'true',
			'inlineImages': 'true',
			//'inlineVideos': 'true',
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
			'trackerPostBackgroundColour': '#CFCBBC',
			//'readTheRulesYet': 'false',
			'newPostBackgroundColour': '#95b0cb',
			'noNewPostBackgroundColour': '#cbc095',
			'onlyEndSquare': 'false',
			'styleFlip': 'false',
			'dontTrackStickyThreads': 'false',
			'lastPost': 'false',
			'CSStextBox': ' ',
			'WLRfirstRun': 'true',
			'whimAlertNotice': 'false',
			'userpageInfoToggle': 'false',
			//'postAlign': 'middle',
			'floatSidebar': 'false',
			//'superBar': 'false',
			//'ssHtml': 'Enter your notes here, even try dragging images and widgets!',
			'watchedThreadsAlert': 'default',
			'postsPerDay': 'true',
			'noTextShadow': 'false',
			'hideDelPosts': 'false',
			'syntaxHighlight': 'true',
			'chatbox': 'false',
			//'my_links': 'false',
			//'my_links_password': '',
			'emoticons': 'true',
			'inlinePages': 'true',
			'simple_backup': 'true',
			'unanswered_threads': 'true',
			'opOnlyView': 'false',
			'hide_closed_profile':'false',
			'hideForumIDs':'',
			'whim_archive_sort': true,
			'reset_aura_vote': 'false',
			'recentActivityUpdateInterval' : 15, //in minutes
			'recentActivityLastUpdate' : 0, //in milliseconds
			'recentActivityHtml' : '',
			'recentActivityOverlay' : 'false',
			'whirlpoolAPIKey' : '',
			'recentActivityOverlayDays' : '7',
			'syncServer' : 'http://s.endorph.net/',
			'syncUser' : 'UID',
			'syncKey' : 'KEY',
			'syncActivated' : 'false',
			'syncEncKey' : '',
			'tempDisableTracker' : 'true',
			'quickReplyboxSmilies' : 'false',
			'oembed' : 'true',
			'oembed_types' : 'youtu|vimeo|twitter',
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

	function hideDelPosts() {
		$('.notice[id^="x"]').hide();
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

				$(docs.lmtr).after('<div class="reply" id="previewTR"><div class="replymeta"><div class="replyuser"><div class="replyuser-inner"><p style="opacity:0.3;font:2em bold Verdana">Preview</p></div></div><div class="replytools"><div class="replytools-inner"><p style="opacity:0.3;font:2em bold ' + 'Verdana">Preview</p></div></div></div><div class="replytext bodytext"></div></div>');
				docs.pTd3 = $('#previewTR .bodytext');

			}

			/*** preview code by Simon Wright - http://forums.whirlpool.net.au/user/10 ***/

			var previewTimer;
			var previewWait = false;

			if (!previewWait) {

				previewWait = true;
				previewTimer = setTimeout(function () {
								
					docs.pTd3.html(unsafeWindow.whirlcode2(docs.q.val(), docs.eh));
					$('#previewTR div.bodytext > p').each(emoticons.runOnTextNode);
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

			var emoticonString = '';
						
			if(Whirlpool.get('emoticons') === 'true' && Whirlpool.get('quickReplyboxSmilies') === 'true'){
				icons = emoticons.getIconSet(false);
				emoticonString += '<br/>';
				for (icon in icons) {
					emoticonString += '<img class="' + c + '" src="' + icons[icon] +  '" id="emoticon_' + icon.replace('\\\\','\\') + '"/>&nbsp;&nbsp;';
				}
			}
		
			return '<div id="' + id + '" style="text-align:center;padding-bottom:10px;width:' + w + '">' + '<button type="button" class="' + c + '" title="Bold WhirlCode" accesskey="b" id="wc_whirlBold" >Bold</button>' + '<button type="button" class="' + c + '" title="Italic WhirlCode" accesskey="i" id="wc_whirlItalic" >Italic</button>' + '<button type="button" class="' + c + '" title="SingleQuote WhirlCode" accesskey="t" id="wc_whirlSingleQuote" >\'quote\'</button>' + '<button type="button" class="' + c + '" title="DoubleQuote WhirlCode" accesskey="q" id="wc_whirlDoubleQuote" >"quote"</button>' + '<button type="button" class="' + c + '" title="Quote WhirlCode" accesskey="h" id="wc_whirlQuote" >who</button>' + '<button type="button" class="' + c + '" title="Superscript WhirlCode" accesskey="p" id="wc_whirlSuperscript" >Super</button>' + '<button type="button" class="' + c + '" title="Subscript WhirlCode" accesskey="\\" id="wc_whirlSubscript" >Sub</button>' + '<button type="button" class="' + c + '" title="Strike WhirlCode" accesskey="k" id="wc_whirlStrike" >Strike</button>' + '<button type="button" class="' + c + '" title="Courier WhirlCode" accesskey="c" id="wc_whirlCourier" >Courier</button>' + '<button type="button" class="' + c + '" title="Small WhirlCode" accesskey="m" id="wc_whirlSmall" >Small</button>' + '<button type="button" class="' + c + '" title="Grey WhirlCode" accesskey="r" id="wc_whirlGrey" >Grey</button>' + '<button type="button" class="' + c + '" title="Serif WhirlCode" accesskey="s" id="wc_whirlSerif" >Serif</button>' + '<button type="button" class="' + c + '" title="Google WhirlCode" accesskey="g" id="wc_whirlGoogle" >Google</button>' + '<button type="button" class="' + c + '" title="Escape WhirlCode" accesskey="e" id="wc_whirlEscape" >Esc</button>' + '<button type="button" class="' + c + '" title="Wiki WhirlCode" accesskey="w" id="wc_whirlWiki" >Wiki</button>' + '<button type="button" class="' + c + '" title="Spoiler WhirlCode" accesskey="o" id="wc_whirlSpoil" >Spoiler</button>' + '<button type="button" class="' + c + '" title="URL Link" accesskey="u" id="wc_whirlurl" >URL</button>' + '<button type="button" class="' + c + '" title="Link" accesskey="l" id="wc_whirllink" >Link</button>' + 
			emoticonString + '</div>';

		},
		buttonEvents: function (c, tAr, whirlCode) {

			$('.' + c).bind('mouseup', function (evt) {

				//id of the button selected. eg wc_whirlBold etc
				var qqbuttonID = $(this).prop('id'); 
				//focus on the quick reply text area
				tAr.focus(function () {}); //I don't understand it either, but tAr.focus(); without an anonymous function produces a weird error.
				//get current value to quick reply text area
				var qqcurrentValue = tAr.val();
				var qqtheSelection = tAr.val().substring(tAr[0].selectionStart, tAr[0].selectionEnd);
				
				var cursorPos = tAr[0].selectionStart;
				var scrollPos = $(tAr[0]).scrollTop();

				function insertAtCursor(qqmyField, qqmyValue) {

					if (qqmyField.selectionStart || qqmyField.selectionStart == '0') {

						var qqstartPos = qqmyField.selectionStart;
						var qqendPos = qqmyField.selectionEnd;
						qqmyField.value = qqmyField.value.substring(0, qqstartPos) + qqmyValue + qqmyField.value.substring(qqendPos, qqmyField.value.length);

					} else {

						qqmyField.value += qqmyValue;

					}
					
					//cursorpos = current position + (length of new value - length of original) + (selection length)
					cursorPos = cursorPos + (qqmyValue.length - qqtheSelection.length) + (qqtheSelection.length);
					
					tAr[0].focus();
					tAr[0].setSelectionRange(cursorPos,cursorPos);
					$(tAr[0]).scrollTop(scrollPos);

				}

				if (qqbuttonID == "wc_whirlurl") {

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

				} else if (/emoticon_/.test(qqbuttonID)) {
					
					insertAtCursor(tAr[0], qqbuttonID.split('emoticon_')[1]);
				
				}else if (qqtheSelection === "") {

					if (((qqcurrentValue.split(whirlCode[qqbuttonID].encloseLeft).length + qqcurrentValue.split(whirlCode[qqbuttonID].encloseRight).length) % 2) === 0) {

						insertAtCursor(tAr[0], whirlCode[qqbuttonID].encloseLeft);

					} else {

						insertAtCursor(tAr[0], whirlCode[qqbuttonID].encloseRight);

					}

				}else {

					if (qqtheSelection.indexOf('\n') > -1 || qqtheSelection.indexOf('\r') > -1) {
						var tSel = qqtheSelection.replace(/^(.+)$/mg, whirlCode[qqbuttonID].encloseLeft + "$1" + whirlCode[qqbuttonID].encloseRight);
						//tAr.val(tAr.val().replace(qqtheSelection, tSel));
						insertAtCursor(tAr[0], tSel);
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
	
		settingsHTML : '',
	
		set: function () {

			var settingmenu = '<li id="menu_wpplus" class="even "><a class="xx" href="#"><span id="wpsettingslink">WP+ Settings</span></a><span class="shim1"></span></li>';
			$('#menu_industry').after(settingmenu);

			if ($('#footer').text().match('The Pool Room')) {
				var uinfoName = docs.uinfo.children('dt:first').text();
				var newDDforA = $('<DD>');
				var aforDD = $('<a href="irc://au.austnet.org/tpr" target="_blank">TPR IRC Chat</a> <span style="font-size:0.7em;">(<a href="http://widget.mibbit.com/?settings=6c09163b5ce1890c08a31a91cb300b34&server=au.austnet.org&channel=%23tpr&nick=' + uinfoName + '" target="_blank">mibbit</a>)</span>');
				newDDforA.append(aforDD);
				docs.uinfo.append(newDDforA);
			}
			if ($('#footer').text().match('Lifestyle')) {
				var uinfoName = docs.uinfo.children('dt:first').text();
				var newDDforA = $('<DD>');
				var aforDD = $('<a href="irc://au.austnet.org/whirlpool" target="_blank">Whirlpool IRC</a> <span style="font-size:0.7em;">(<a href="http://widget.mibbit.com/?settings=6c09163b5ce1890c08a31a91cb300b34&server=au.austnet.org&channel=%23whirlpool&nick=' + uinfoName + '" target="_blank">mibbit</a>)</span>');
				newDDforA.append(aforDD);
				docs.uinfo.append(newDDforA);
			}

			if (Whirlpool.get('CSStextBox') !== ' ') {
				Whirlpool.css(decodeURIComponent(Whirlpool.get('CSStextBox')));
			}
			
			var wlrSettingsDivTop;
			(window.innerHeight > 560) ? wlrSettingsDivTop = '6%' : wlrSettingsDivTop = '0';
			
			Whirlpool.css('#wlrSettingsDiv { background-color:#999; border:1px solid #000; color:#333; height:400px; left:50%; margin-left:-400px; overflow-x:scroll; overflow-y:scroll; position:fixed; top:' + wlrSettingsDivTop + '; width:800px; overflow:hidden; height:540px; max-height:100% !important; display:block; z-index:3000; padding:0 12px; }' + 
			'#wlrSettingsDiv ul#wlrtabmenu li{ border:3px solid #777; border-width:3px 3px 1px; float:left; height:20px; margin-right:10px; padding:5px; width:140px; text-align:center; color:white; }' + 
			'#wlrSettingsDiv #wlrtabmenu li.active{ background-color:orange; border:3px solid #555; border-width:3px 3px 1px; }' + 
			'#wlrSettingsDiv #wlrtabmenu li:hover{ cursor:pointer; border:3px solid #555; border-width:3px 3px 1px; }' + 
			//'#wlrSettingsDiv .wlrsetbutDown{ background:transparent url("' + server + 'png/down.png") no-repeat; height:21px; padding:0; width:21px; position:relative; top:-5px; left:4px; }' + 
			//'#wlrSettingsDiv .wlrsetbutUp{ background:transparent url("' + server + 'png/up.png") no-repeat; height:21px; padding:0; width:21px; position:relative; top:-5px; left:4px; }' +
			'#wlrSettingsDiv p{ border-bottom:1px dashed grey; margin-left:15px; margin-right:15px; padding-bottom:15px; }' + 
			'#wlrSettingsDiv p:last-child { border-bottom: none; }' + 
			'#wlrSettingsDiv p.description { border-bottom: none; margin-left:15px; padding-bottom:5px; }' + 
			'#wlrSettingsDiv .settingDesc { font-style: italic; float: right; padding-right: 5px; }' + 
			'#wlrSettingsDiv .subSettings_heading { cursor: pointer; margin: 5px 8px; text-align:center; }' + 
			'#wlrSettingsDiv .subSettings_content { display: none; }' + 
			'#wlrSettingsDiv .subSettings { border:1px solid #777; border-radius:5px; background-color: #bbb; margin: 5px; }' + 
			'#wlrSettingsDiv .wlrtabmenuDivs { width: 794px; height:440px;  overflow-y:scroll; float:left;border:3px solid #333;background-color:#EEEEEE;margin-bottom:5px; }' + 
			'#wlrSettingsDiv .tabDescription { text-align: center; font-style: italic; }' + 
			'#currentUserAvatar { background-image: url("' + Whirlpool.image('noavatar') + '"); height: 80px; width: 80px; margin: 0 auto; }' + 
			'#prevContainer>*{margin-left:10px; margin-right:12px;} #wlrSettingsDiv label:hover{cursor:pointer;}');


			// ! Settings HTML
			
			this.settingsHTML = '<div id="wlrSettingsDiv">' +
				'<ul id="wlrtabmenu" style="list-style:none;float:left;margin:14px 0px 0px 32px">' +
					'<li class="active wlrtabmenuTabs">Forums</li>' +
					'<li class="wlrtabmenuTabs">Threads</li>' +
					'<li class="wlrtabmenuTabs">Posts</li>' +
					'<li class="wlrtabmenuTabs">Help</li>' +
				'</ul>' +

				'<div class="wlrtabmenuDivs">' +
					
					'<div class="subSettings">' +
						'<p class="subSettings_heading description"><b>Script Configuration</b></p>' +
						'<div class="subSettings_content">' +
						
						'<p id="debugMode">' +
							'<input type="checkbox" name="enabledebugmode" id="enabledebugmode">' +
							' <label for="enabledebugmode">Debug Mode</label>' +
							' <span class="settingDesc">Place the script in debug mode. All errors will be reported.</span>'+
						'</p>' +

						'<p id="smartUpdater">' +
							'<input type="checkbox" name="updater" id="updater">' +
							' <label for="updater">Automatic updater</label>' +
							' <a href="http://userscripts.org/scripts/source/85217.user.js" id="force_update">Force Update</a>' +
							' <span class="settingDesc">Automatically update the script to the newest version</span>'+
						'</p>' +
						
						'<p id="whirlpoolAPIKey">' +
							'<input type="text" name="whirlpoolAPIKey_text" id="whirlpoolAPIKey_id">' +
							' <label for="whirlpoolAPIKey_id">Whirlpool API Key</label>' +
							' <span class="settingDesc">Used for features like the Recent Activity Overlay</span>'+
						'</p>' +
							
						'</div>' +
						
					'</div>' +
					
					'<div class="subSettings">' +
						'<p class="subSettings_heading description"><b>Synchronisation</b></p>' +
						'<div class="subSettings_content">' +
						
							'<p class="description">Script data can be synchronised between script installs through the use of a sync server. You can create an account at the default server at <a href="http://s.endorph.net/account/">http://s.endorph.net/account/</a></p>' +
						
							'<p id="syncActivated">' +
								'<input type="checkbox" name="syncActivated_check" id="syncActivated_id">' +
								'<label for="syncActivated_id">Activate Synchronisation</label>' +
							'</p>' +
							
							'<p id="syncServer">' +
								'<input type="text" name="syncServer_text" id="syncServer_id" class="syncSetting"> ' +
								'<label for="syncServer_id">Server Address</label>' +
							'</p>' +
							
							'<p id="syncUser">' +
								'<input type="text" name="syncUser_text" id="syncUser_id" class="syncSetting"> ' +
								'<label for="syncUser_id">Whirlpool User ID</label>' +
							'</p>' +
							
							'<p id="syncKey">' +
								'<input type="text" name="syncKey_text" id="syncKey_id" class="syncSetting"> ' +
								'<label for="syncKey_id">Access Key</label>' +
							'</p>' +
							
							'<p id="syncEncKey">' +
								'<input type="password" name="syncEncKey_text" id="syncEncKey_id" class="syncSetting"> ' +
								'<button type="button" id="showEncKey" onclick="$(\'#syncEncKey_id\').prop(\'type\',\'text\'); $(\'#hideEncKey\').show(); $(\'#showEncKey\').hide();">Show</button> ' +
								'<button type="button" id="hideEncKey" style="display:none;" onclick="$(\'#syncEncKey_id\').prop(\'type\',\'password\'); $(\'#hideEncKey\').hide(); $(\'#showEncKey\').show();">Hide</button> ' +
								'<label for="syncEncKey_id">Encryption Password</label>' +
								' <span class="settingDesc">Must be the same for all of your WP+ installs</span>'+
							'</p>' +
							
						'</div>' +
						
					'</div>' +
						
					'<div class="subSettings">' +
						'<p class="subSettings_heading description">' +
							'<b>Forum Display</b>'+
							'<br /><i>Themes, Custom CSS, Other Formatting Options</i>'+
							'<br /><i>Chatbox, Recent Activity Overlay, Whim Notification, Dynamic Menu</i>'+
							'</p>' +
						'<div class="subSettings_content">' +
						
							'<p id="enableWideWhirlpool">' +
								'<input type="checkbox" name="enableWideWh" id="enableWideWh">' +
								'<label for="enableWideWh">Widescreen Display</label>' +
								' <span class="settingDesc">Stretch the website to fit the entire screen</span>'+
							'</p>' +
							
							'<p id="floatSidebar">' +
								'<input type="checkbox" name="enablefloatBar" id="enablefloatBar">' +
								'<label for="enablefloatBar">Float the sidebar</label>' +
							'</p>' +
							
							'<p id="customWPTheme">' +
								'<select name="s_customtheme" id="s_customtheme">' +
									'<option value="default">Default (by Simon Wright)</option>' +
									'<option value="@import url(http://members.optusnet.com.au/foonly/wpblue/1/css/core.css);">WP Blue (by Foonly)</option>' +
									'<option value="http://www.members.optusnet.com.au/kev.nat/teal/wp-teal.css">WP Teal (by =CHRIS=)</option>' +
									'<option value="http://www.members.optusnet.com.au/kev.nat/Whirlpool%20Noir/WP-BLACK.css">WP Black (by =CHRIS=)</option>' +
									'<option value="http://www.members.optusnet.com.au/kev.nat/green/WP-GREEN.css">WP Green (by =CHRIS=)</option>' +
									'<option value="http://www.members.optusnet.com.au/kev.nat/wood/WP-WOOD.css">WP Wood (by =CHRIS=)</option>' +
									'<option value="http://www.members.optusnet.com.au/kev.nat/purple/WP-PURPLE.css">WP Purple (by =CHRIS=)</option>' +
									'<option value="http://phyco.name/wpplus/wpclassic2011/css/core.css">WP Classic (by Phyco)</option>' +
								'</select>' +
								' <label for="s_cutomtheme">Custom Theme</label>' +
							'</p>' +
							
							'<p id="showWhirlpoolFooterLinks">' +
								'<input type="checkbox" name="showWhirlpoolFooterL" id="showWhirlpoolFooterL">' +
								' <label for="showWhirlpoolFooterL">Show the forum footer</label>' +
							'</p>' +
							
							'<p id="noTextShadow">' +
								'<input type="checkbox" name="textShadow" id="textShadow">' +
								' <label for="textShadow">Remove Text Shadows</label>' +
							'</p>' +
							
							'<p id="whirlpoolBreadcrumbFont">' +
								'<select name="whirlpoolBreadcrumbF" id="whirlpoolBreadcrumbF">' +
									'<option value="default font">default</option>' +
									'<option value="Verdana">Verdana</option>' +
									'<option value="Arial">Arial</option>' +
									'<option value="Georgia">Georgia</option>' +
									'<option value="Tahoma">Tahoma</option>' +
									'<option value="Trebuchet MS">Trebuchet MS</option>' +
								'</select>' +
								' <label for="whirlpoolBreadcrumbF">Choose Breadcrumb Font</label>' +
							'</p>' +
							
							'<p id="whirlpoolSidemenuFont">' +
								'<select name="whirlpoolSidemenuF" id="whirlpoolSidemenuF">' +
									'<option value="default font">default</option>' +
									'<option value="Verdana">Verdana</option>' +
									'<option value="Arial">Arial</option>' +
									'<option value="Georgia">Georgia</option>' +
									'<option value="Tahoma">Tahoma</option>' +
									'<option value="Trebuchet MS">Trebuchet MS</option>' +
									'</select>' +
								' <label for="whirlpoolSidemenuF">Choose Sidebar Font</label>' +
							'</p>' + 
						
							'<p id="chatbox">' +
								'<input type="checkbox" name="cBox" id="cBox">' +
								' <label for="cBox">Sidebar Chatbox</label>' +
								' <span class="settingDesc">You must agree to abide by the <a href="http://whirlpool.net.au/wiki/?tag=wpplus_chatbox_rules" target="_blank">chatbox rules</a></span>'+
							'</p> ' +
							
							'<p id="recentActivityOverlay">' +
								'<input type="checkbox" name="recentActivityOverlay_check" id="recentActivityOverlay_id">' +
								'<label for="recentActivityOverlay_id">Recent Activity Overlay</label>' +
								' <span class="settingDesc">Make sure you enter your API Key in the Script Configuration</span>'+
							'</p>' +
							
							
							'<p id="recentActivityOverlayDays">' +
								'<select name="recentActivityOverlayDays_select" id="recentActivityOverlayDays_id">' +
									'<option value="1">1 Day</option>' +
									'<option value="3">3 Days</option>' +
									'<option value="7">7 Days</option>' +
									'<option value="14">14 Days</option>' +
									'<option value="30">30 Days</option>' +
									'<option value="60">60 Days</option>' +
									'<option value="120">120 Days</option>' +
								'</select>' +
								' <label for="recentActivityOverlayDays_id">Recent Activity Duration</label>' +
								' <span class="settingDesc">How much of your recent activity to use for the overlay</span>'+
							'</p>' +
							
							'<p id="whimAlertNotice">' +
								'<input type="checkbox" name="wAlertNotice" id="wAlertNotice">' +
								'<label for="wAlertNotice">Whim Notification</label>' +
								' <span class="settingDesc">Display a notification when you receive a new WHIM</span>'+
							'</p> ' +
							
							'<p id="dynamicMenuSystem">' +
								'<select name="dynamicMen" id="dynamicMen">' +
									'<option value="none">none</option>' +
									'<option value="rightClick">Right Click</option>' +
									'<option value="spinner">Spinner</option>' +
								'</select>' +
								' <label for="dynamicMen">Dynamic Menu System (select type)</label>' +
								' <span class="settingDesc">Display a dropdown navigation menu for the site</span>'+
							'</p>' +
							
							'<p id="dynamicMenuSystem_settingsLink">' +
								'<select name="dynamicMenSettings" id="dynamicMenSettings_id">' +
									'<option value="none">none</option>' +
									'<option value="top">Top</option>' +
									'<option value="underuser">Under User</option>' +
									'<option value="bottom">Bottom</option>' +
								'</select>' +
								' <label for="dynamicMenSettings_id">Location of settings link in dynamic menu</label>' +
							'</p>' +
							
							'<p id="customCSS">' +
								'<span>Custom CSS</span>' +
								' <span class="settingDesc">Add custom styles to Whirlpool</span>'+
								'<br /><textarea id="cusCSS" style="width: 500px; height: 300px; margin:0 auto;"></textarea>' +
							'</p>' + 
							
						'</div>' +
						
					'</div>' +
										
					'<div class="subSettings">' +
						'<p class="subSettings_heading description"><b>Users</b></p>' +
						'<div class="subSettings_content">' +
						
							'<p id="hide_closed_profile">' +
								'<input type="checkbox" name="hcp" id="hcp">' +
								' <label for="hcp">Hide closed threads on user profiles</label>' +
							'</p>' +
							
							'<p id="postsPerDay">' +
								'<input type="checkbox" name="postsPerDay_text" id="postsPerDay_id">' +
								' <label for="postsPerDay_id">Enable "Posts per day" statistic</label>' +
							'</p>' +
							
							'<p id="userpageInfoToggle">' +
								'<input type="checkbox" name="upageInfoToggle" id="upageInfoToggle">' +
								'<label for="upageInfoToggle">Hide/Toggle user info</label>' +
							'</p> ' +
							
							'<p id="recentActivityDays">' +
								'<select name="recentActivityD" id="recentActivityD">' +
									'<option value="1">1 Day</option>' +
									'<option value="3">3 Days</option>' +
									'<option value="7">7 Days</option>' +
									'<option value="14">14 Days</option>' +
									'<option value="30">30 Days</option>' +
									'<option value="60">60 Days</option>' +
									'<option value="120">120 Days</option>' +
								'</select>' +
								' <label for="recentActivityD">Default amount of recent activity to display on a user page</label>' +
							'</p>';
							
							if(!notFirefox){
								this.settingsHTML = this.settingsHTML + '<p id="userNotes">' +
									'<input type="checkbox" name="userNotesBox" id="userNotesBox">' +
									' <label for="userNotesBox">User Notes</label>' +
								'</p> ';
							}
						
							this.settingsHTML = this.settingsHTML + '<p id="reset_aura_vote">' +
								'<input type="checkbox" name="reset_aura_vote" id="reset_aura_vote_checkbox">' +
								' <label for="reset_aura_vote_checkbox">Add an Aura Reset smiley (?)</label>' +
							'</p> ' +
							
							'<p id="whim_archive_sort">' +
								'<input type="checkbox" name="archive_sor" id="archive_sor">' +
								'<label for="archive_sor">Sort Whim archives in alphabetical order</label>' +
							'</p>' +
							
						 '</div>' +
					'</div>' +
						
				'</div>' +

				'<div style="display:none;" class="wlrtabmenuDivs">' +
				
					'<div class="subSettings">' +
						'<p class="subSettings_heading description"><b>Thread Tracker (WLR)</b></p>' +
						'<div class="subSettings_content">' +
							'<p class="description">The thread tracker highlights threads you have viewed depending on whether there are new unread posts</p>' +
						
							'<p id="lastReadTracker">' +
								'<input type="checkbox" name="lastReadT" id="lastReadT">' +
								' <label for="lastReadT">Activate tracker</label>' +
							'</p>     ' +
							
							'<p id="newPostBackgroundColour">' +
								'<input type="text" name="newPostBackgroundC" id="newPostBackgroundC">' +
								' <label for="newPostBackgroundC">Unread Posts Colour</label>' +
								' <span class="settingDesc">Used to highlight threads containing posts you haven\'t read</span>'+
							'</p>  ' +
							
							'<p id="noNewPostBackgroundColour">' +
								'<input type="text" name="noNewPostBackgroundC" id="noNewPostBackgroundC">' +
								' <label for="noNewPostBackgroundC">No Unread Posts Colour</label>' +
								' <span class="settingDesc">Used to highlight threads containing no unread posts</span>'+
							'</p>       ' +
						
							'<p id="onlyEndSquare">' +
								'<input type="checkbox" name="onlyEndSq" id="onlyEndSq">' +
								' <label for="onlyEndSq">Colour end square </label>' +
								' <span class="settingDesc">Just highlight the end square of tracked threads</span>'+
							'</p> ' +
							
							'<p id="dontTrackStickyThreads">' +
								'<input type="checkbox" name="dontTrackStickyT" id="dontTrackStickyT">' +
								' <label for="dontTrackStickyT">Don\'t highlight sticky threads</label>' +
							'</p>' +
							
							'<p id="trackerPostBackgroundColour">' +
								'<input type="text" name="trackerPostBackgroundC" id="trackerPostBackgroundC">' +
								' <label for="trackerPostBackgroundC">Post Highlight Colour (Posts Pages)</label>' +
								' <span class="settingDesc">Used to highlight posts (right most column) on posts pages</span>'+
							'</p> ' +
							
							'<p id="styleFlip">' +
								'<input type="checkbox" name="styleFl" id="styleFl">' +
								' <label for="styleFl">Highlight unread posts instead of read posts (Posts Pages)</label>' +
							'</p>    ' +	
							
							'<p id="tempDisableTracker">' +
								'<input type="checkbox" name="tempDisableTracker_check" id="tempDisableTracker_check">' +
								' <label for="tempDisableTracker_check">Add a button to temporarily disable the tracker (top right corner)</label>' +
							'</p>    ' +
							

						'</div>' +
						
					'</div>' +
					
					'<div class="subSettings">' +
						'<p class="subSettings_heading description"><b>Thread Settings</b></p>' +
						'<div class="subSettings_content">' +
						
							'<p id="hideForumIDs">' +
								'<input type="text" name="hfids" id="hfids">' +
								' <label for="hfids">Forums to hide (on front page) </label>' +
								' <span class="settingDesc">Enter the ID\'s of the forums you want to hide (eg. "35 92 137")</span>'+
							'</p> ' +

							'<p id="hideDRThreads">' +
								'<input type="checkbox" name="hideDRT" id="hideDRT">' +
								'<label for="hideDRT">Hide Deleted Threads in forums</label>' +
							'</p>  ' +
							
							'<p id="hideMVThreads">' +
								'<input type="checkbox" name="hideMVT" id="hideMVT">' +
								'<label for="hideMVT">Hide Moved Threads in forums</label>' +
							'</p> ' +
						
							'<p id="unanswered_threads">' +
								'<input type="checkbox" name="unansweredThreads" id="unansweredThreads">' +
								' <label for="unansweredThreads">Link to Unanswered Threads</label>' +
								' <span class="settingDesc">Adds a link to only display unanswered threads after the forum name</span>'+
							'</p>' +
							
							'<p id="noGluteusMaximus">' +
								'<input type="checkbox" name="noGluteusM" id="noGluteusM">' +
								'<label for="noGluteusM">Make the links on the main page of Whirlpool go to the start of the thread</label>' +
							'</p>' +
							
							'<p class="description tabDescription">These settings add links to display only posts from certain users</p>' +
							
							'<p id="opOnlyView">' +
								'<input type="checkbox" name="onlyOp" id="onlyOp">' +
								' <label for="onlyOp">OP posts</label>' +
							'</p>' +
							
							'<p id="moderatorPostView">' +
								'<input type="checkbox" name="moderatorPostV" id="moderatorPostV">' +
								' <label for="moderatorPostV">Moderator posts</label>' +
							'</p>' +
							
							'<p id="representativePostView">' +
								'<input type="checkbox" name="representativePostV" id="representativePostV">' +
								' <label for="representativePostV">Rep posts</label>' +
							'</p>' +
							
							'<p id="threadArchiveView">' +
								'<input type="checkbox" name="threadArchiveV" id="threadArchiveV">' +
								' <label for="threadArchiveV">Thread Archive View</label>' +
							'</p>' +
							
							'<p id="longThreadView">' +
								'<input type="checkbox" name="longThreadV" id="longThreadV">' +
								' <label for="longThreadV">Long Thread View</label>' +
							'</p>' +
						
						'</div>' +
					'</div>' +
					
				'</div>' +
				
				'<div style="display:none;" class="wlrtabmenuDivs">' +
					
					'<div class="subSettings">' +
						'<p class="subSettings_heading description"><b>Quick Reply and Inline Edit</b></p>' +
						'<div class="subSettings_content">' +
						
							'<p id="quickReplybox">' +
								'<input type="checkbox" name="quickRepb" id="quickRepb">' +
								' <label for="quickRepb">Quick Reply</label>' +
								' <span class="settingDesc">Adds a Quick Reply box to the bottom of each page</span>'+
							'</p>' +

							'<p id="quickReplyboxSmilies">' +
								'<input type="checkbox" name="quickReplyboxSmilies_check" id="quickReplyboxSmilies_check">' +
								' <label for="quickReplyboxSmilies_check">Quick Reply Smilies</label>' +
								' <span class="settingDesc">Display the available smilies under the whirlcode buttons</span>'+
							'</p>' +
							
							'<p id="autoPreview">' +
								'<input type="checkbox" name="autoPr" id="autoPr">' +
								' <label for="autoPr">Auto Preview</label>' +
								' <span class="settingDesc">Automatically preview what you are typing in the quick reply box</span>'+
							'</p>' +
							
							'<p id="lastPost">' +
								'<input type="checkbox" name="lastPos" id="lastPos">' +
								'<label for="lastPos">Go to the last post in the thread after posting</label>' +
							'</p>' +
							
							'<p id="autoSubscribe">' +
								'<input type="checkbox" name="autoSubs" id="autoSubs">' +
								' <label for="autoSubs">Automatically subscribe to a thread after posting</label>' +
							'</p>' +
							
							'<p id="simple_backup">' +
								'<input type="checkbox" name="simple_backup" id="simple_backup">' +
								' <label for="simple_backup">Reply backup</label>' +
								' <span class="settingDesc">Store a backup of the reply you are typing</span>'+
							'</p>' +
							
							'<p id="editInPlace">' +
								'<input type="checkbox" name="editInP" id="editInP">' +
								' <label for="editInP">Inline Edit</label>' +
								' <span class="settingDesc">Places (quick edit) links next to your posts in threads</span>'+
							'</p>' +
						
						'</div>' +
					'</div>' +
					
					'<div class="subSettings">' +
						'<p class="subSettings_heading description"><b>Display and Formatting Options</b></p>' +
						'<div class="subSettings_content">' +
						
							'<p id="penaltyBoxBackground">' +
								'<input type="checkbox" name="penaltyBoxBackground_check" id="penaltyBoxBackground_check">' +
								' <label for="penaltyBoxBackground_check">Highlight when a user is in the penalty box</label>' +
							'</p>' +
						
							'<p id="emoticons">' +
								'<input type="checkbox" name="smile" id="smile">' +
								' <label for="smile">Display Image Emoticons (Smilies)</label>' +
							'</p>' +
							
							'<p id="emoticonsBlue">' +
								'<input type="checkbox" name="smileb" id="smileb">' +
								' <label for="smileb">Use blue smilies</label>' +
							'</p>' +
							
							'<p id="oembed">' +
								'<input type="checkbox" name="oembed_check" id="oembed_check">' +
								' <label for="oembed_check">Enable oEmbed</label>' +
								' <span class="settingDesc">Embeds many common content types (see below)</span>'+
							'</p>  ' +
							
							'<p>' +
								'oEmbed allows many common types of content to be embedded within posts. To do this, it searches for urls that ' +
								' match the expression below. If the service is able to embed this content, it will attempt to do so.' +
								'<br /> In order to create a custom expression, enter parts of each url that you want to match, seperated by a ' +
								' pipe (|) symbol. For example, to match youtube.com, youtu.be and vimeo.com links, try "youtube.com|youtu.be|vimeo.com". ' +
								' You could also use "youtu|vimeo" (the first portion will match both youtube links). ' +
								'<br /> Many services are supported- for example video (youtube, vimeo), photo (flickr, photobucket), audio (soundcloud), and text (twitter, wikipedia). ' +
								'For a full list, see <a href="https://github.com/starfishmod/jquery-oembed-all#current-3rd-party-sources-include">this page</a>. ' +
								'To match everything, try "[a-z]".' +
								
								'<br /> Note: the service also supports url-shortened links like bit.ly, tinyurl.com etc' +
							'</p>  ' +
							
							'<p id="oembed_types">' +
								'<input type="text" name="oembed_types_text" id="oembed_check">' +
								' <label for="oembed_types_text">oEmbed Content Types</label>' +
								' <span class="settingDesc">Enter portions of URLs to match, separated with the | (pipe) character</span>'+
							'</p>  ' +
							
							'<p id="inlineImages">' +
								'<input type="checkbox" name="inlineI" id="inlineI">' +
								' <label for="inlineI">Inline Images</label>' +
								' <span class="settingDesc">Converts image links into images</span>'+
							'</p>' +
							
							/*'<p id="inlineVideos">' +
								'<input type="checkbox" name="inlineV" id="inlineV">' +
								' <label for="inlineV">Inline Videos</label>' +
								' <span class="settingDesc">Converts Youtube links into videos</span>'+
							'</p>  ' +*/
							
							'<p id="inlinePages">' +
								'<input type="checkbox" name="inlinePages" id="inlinePages">' +
								' <label for="inlinePages">Inline Links</label>' +
								' <span class="settingDesc">Adds an option to view a link inside the page</span>'+
							'</p> ' +
							
							'<p id="syntaxHighlight">' +
								'<input type="checkbox" name="syntaxHighlight" id="syntaxHighlight">' +
								' <label for="syntaxHighlight">Syntax Highlighting for code blocks</label>' +
							'</p> ' +
						
							'<p id="whirlcodeinWikiWhimNewThread">' +
								'<input type="checkbox" name="whirlcodeinWikiWhimNewT" id="whirlcodeinWikiWhimNewT">' +
								' <label for="whirlcodeinWikiWhimNewT">Add Whirlcode buttons when creating a new thread (also in wiki)</label>' +
							'</p>' +
							
							'<p id="hideDelPosts">' +
								'<input type="checkbox" name="hideDelPost" id="hideDelPost">' +
								' <label for="hideDelPost">Hide deleted posts</label>' +
							'</p>  ' +
									
							'<p id="watchedThreadsAlert">' +
								'<select name="s_threadalert" id="s_threadAlert">' +
									'<option value="default">None</option>' +
									'<option value="watched">Go to watched threads</option>' +
									'<option value="thread">Return to the thread</option>' +
								'</select>' +
								
								' <label for="s_threadAlert">Action to perform when watching a thread</label>' +
							'</p> ' +
						'</div>' +
					'</div>' +
					
					'<div class="subSettings">' +
						'<p class="subSettings_heading description"><b>Avatars</b></p>' +
						'<div class="subSettings_content">' +
						
							'<p class="tabDescription">To add an avatar, upload it to <a href="http://tinypic.com">tinypic.com</a>, and put the direct url in the field below.<br />To remove your avatar, set the field to blank</p>' +
							
							'<div id="currentUserAvatar"></div>' +
							
							'<p class="description" style="text-align: center; border: none;"><input style="width: 300px;" id="currentUserAvatar_url" /></p>' +
														
							'<p id="staticAvatars" style="border:none; padding:0;">' +
								'<input type="checkbox" name="staticAv" id="staticAv">' +
								' <label for="staticAv">Display Static avatars</label>' +
							'</p>' +

							'<p id="animatedAvatars" style="border:none; padding:0;">' +
								'<input type="checkbox" name="animatedAv" id="animatedAv">' +
								' <label for="animatedAv">Display Animated avatars</label>' +
							'</p>' +
								
							'</table>' + 
						'</div>' +
					'</div>' +
					
					'<div class="subSettings">' +
						'<p class="subSettings_heading description"><b>Hide Users</b></p>' +
						'<div class="subSettings_content">' +
						
							'<p id="ignoreUser">' +
								'<input type="checkbox" name="ignoreUserB" id="ignoreUserB">' +
								'<label for="ignoreUserB">Adds an option to hide posts from users (next to aura)</label>' +
							'</p>' +
							 
							'<p id="removeIgnoredUsers">' +
								'<input type="checkbox" name="removeIgnoredUsersB" id="removeIgnoredUsersB">' +
								'<label for="removeIgnoredUsersB">Remove any indication of ignored users</label>' +
							'</p>' + 

							'<p class="description">Currently Hidden Users: </p>' +
							'<p id="hiddenUsersTab"></p>' +
							
						'</div>' +
					'</div>' +
					
				'</div>' +

				'<div style="display:none;overflow:hidden;" class="wlrtabmenuDivs">' +
				
					'<p class="description"><b>Where can I get help, or report an issue?</b></p>' +
					'<p class="description">The best way to get help is to post in the <a href="http://forums.whirlpool.net.au/forum/?action=threads_search&q=WP%2B+Script&f=35">latest Whirlpool Plus thread</a> in Feedback. This is also a good place to request new features. </p>' +
					'<p class="description">Another good source of information is the <a href="http://whirlpool.net.au/wiki/whirlpool_plus">wiki article<a>.</p>' +
					'<p class="description">The script is maintained by <a href="http://forums.whirlpool.net.au/user/272563">tbwd</a>, so you can also whim him.</p>' +
				
					'<p class="description"><b>Privacy</b></p>' +
					'<p class="description">As stated in the wiki article, a user script like Whirlpool Plus could possibly be used to steal user information.  To our knowledge, there is no such code in this script. </p>' +
					'<p class="description">The script relies on an external server to run the avatars and synchronisation. This server (endorph.net) is operated by <a href="http://forums.whirlpool.net.au/user/272563">tbwd</a>. Both these services use your API key to validate your identity, but do not store this key.</p>' +

				
					'<p class="description"><b>About Whirlpool Plus</b></p>' +
					'<p class="description">Whirlpool Plus was created by various members of the Whirlpool community to add extra features to the Whirlpool Forums. Many people have contributed to the script- see the wiki article for credits.</p>' +
				
				'</div>' +
				
				'<button id="resetWLR" style="float: left; margin-top:6px; ">Reset Settings</button>'+
				
				'<div style="margin: 6px 10px 5px 197px; float: left; color: #fff;">Installed Script Version: ' + version +	'</div>' +
				
				'<button id="saveWLR" style="float:right;margin-top:6px;">Save</button>' +

				'<button href="#" id="closeWlrSettingsModal" style="float:right;margin-top:6px;" title="close">Cancel</button>' +

				'<br />' +
				
			'</div>';
			
			$('#wpsettingslink').click(function(){ wlrSettings.dialog(); return false; });

		},
		
		userAvatar : '',
		
		dialog : function() {
			$('body').append('<div id="wlrsettingsoverlay" style="height: 100%; width: 100%; position: fixed; left: 0pt; top: 0pt; z-index: 2999; opacity: 0.5; background-color:#000000;"/>').append(this.settingsHTML);

			$('#syncActivated_id').change(function(){
				if(this.checked){
					$('.syncSetting').prop('disabled','');
				}else{
					$('.syncSetting').prop('disabled','disabled');
				}
			});
			
			$('.subSettings_heading').click(function(){
				var content = $(this).parent().children('.subSettings_content');
				
				if(content.is(':visible')){
					//close every heading
					$('.subSettings_content').hide();
				}else{
					$('.subSettings_content').hide();
					content.show();
				}
				
			});
			
			var custCSS = $('#cusCSS');
			var newP = $('<p id="hiddenUsersArr">');
			var newUl = $('<ul>');
			newP.append(newUl);
			$('#hiddenUsersTab').append(newP);

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
			
			avatar.getUserAvatar(user.id,function(r){
				var url = r.responseText;
				
				if(url != ''){
					$('#currentUserAvatar').css('background-image','url("' + url + '")');
					$('#currentUserAvatar_url').val(url);
					
					wlrSettings.userAvatar = url;
					
				}
			});
			
			
			

			function iterOverSettings(getOrSet) {

				$('#wlrSettingsDiv p').not('.description').each(function (i) {

					var spaThis = $(this);

					var inp = spaThis.children().eq(0);
					var spID = spaThis.prop('id');
					var getG = Whirlpool.get(spID);
					
					if(typeof inp[0] != 'undefined'){
						if (inp[0].nodeName === "INPUT") {

							if (inp[0].type === "checkbox") {

								if (getOrSet === 'get') {
									if (getG === 'true') {

										inp.prop('checked', 'checked');

									}
								} else {

									if (inp.prop('checked')) {
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
									
									if(spID == 'syncServer' && encodeURIComponent(inp.val()) != Whirlpool.get('syncServer')){
										Whirlpool.set('sync_lastSync',0);
									}
									
									if(spID == 'syncEncKey' && encodeURIComponent(inp.val()) != Whirlpool.get('syncEncKey')){
										if(confirm('It appears you have changed your sync encryption password. Note that you must have deleted and recreated your sync account for this to work. For more information, see the wiki article.')){
											Whirlpool.set(spID, docs[spID]);
										}else{
											alert('Encryption Password reverted');
										}
									}else{
										Whirlpool.set(spID, docs[spID]);
									}
									
									
								}

							}

						} else if (inp[0].nodeName === "SELECT") {
							inp.children('option').each(function () {
								var optThis = $(this);

								if (getOrSet === 'get') {
									if (getG === optThis.val()) {

										optThis.prop('selected', 'selected');
									} else if (optThis.prop('selected')) {
										optThis.removeAttr('selected');
									}
								} else {
								
									if (optThis.prop('selected')) {
									
										if(spID == 'customWPTheme' && optThis.val() != Whirlpool.get('customWPTheme')){
											// Theme has changed
											if(confirm('You appear to have changed your WP+ theme. Would you like to load the suggested WLR highlight colours?')){
												var newPostColour, noNewPostColour, postBackgroundColour;
												
												switch(optThis.val()){
													case 'default':
														newPostColour = '#95B0CB';
														noNewPostColour = '#CBC095';
														postBackgroundColour = '#CFCBBC';
													break;
													
													case '@import url(http://members.optusnet.com.au/foonly/wpblue/1/css/core.css);':
														newPostColour = '#79A1FC';
														noNewPostColour = '#BEDBFA';
														postBackgroundColour = '#DEE6FA';
													break;

													case 'http://www.members.optusnet.com.au/kev.nat/teal/wp-teal.css':
														newPostColour = '#B2F8F8';
														noNewPostColour = '#99C5CB';
														postBackgroundColour = '#D2E5E2';
													break;
													
													case 'http://www.members.optusnet.com.au/kev.nat/Whirlpool%20Noir/WP-BLACK.css':
														newPostColour = '#FFFFFF';
														noNewPostColour = '#555555';
														postBackgroundColour = '#A1A1A1';
													break;		
													
													case 'http://www.members.optusnet.com.au/kev.nat/green/WP-GREEN.css':
														newPostColour = '#4DA255';
														noNewPostColour = '#B9E3BD';
														postBackgroundColour = '#B6FCBC';
													break;		
													
													case 'http://www.members.optusnet.com.au/kev.nat/wood/WP-WOOD.css':
														// no suggestions yet...
														newPostColour = '#95B0CB';
														noNewPostColour = '#CBC095';
														postBackgroundColour = '#CFCBBC';
													break;	
													
													case 'http://www.members.optusnet.com.au/kev.nat/purple/WP-PURPLE.css':
														newPostColour = '#B580F3';
														noNewPostColour = '#E6D1FF';
														postBackgroundColour = '#E6D1FF';
													break;		
													
													case 'http://phyco.name/wpplus/wpclassic2011/css/core.css':
														newPostColour = '#79A1FC';
														noNewPostColour = '#EAA53F';
														postBackgroundColour = '#DEE6FA';
													break;
												}
												
												$('#newPostBackgroundC').val(newPostColour);
												$('#noNewPostBackgroundC').val(noNewPostColour);
												$('#trackerPostBackgroundC').val(postBackgroundColour);
											}
										}
										
										docs[spID] = optThis.val();
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
			
			if($('#syncActivated_id').is(':checked')){
				$('.syncSetting').prop('disabled','');
			}else{
				$('.syncSetting').prop('disabled','disabled');
			}
			
			/*$('.wlrsetbutUp').mouseup(function () {
				var tBox1 = $(this).prev().prev();
				tBox1.val((Number(tBox1.val()) + 1).toString());
			});
			$('.wlrsetbutDown').mouseup(function () {
				var tBox2 = $(this).prev();
				var currentVal = Number(tBox2.val());
				if (currentVal > 0) {
					tBox2.val((currentVal - 1).toString());
				}
			});*/
			$('#resetWLR').mouseup(function () {

				if(confirm('Do you really want to reset everything? Data will be lost forever!')){
					for (var l in gmDefaults) {

						Whirlpool.set(l, gmDefaults[l]);
						docs[l] = gmDefaults[l];


					}
					iterOverSettings('get');
				}

			});
			
			
			$('#saveWLR').mouseup(function () {
				
				
				var avatarUrl = $('#currentUserAvatar_url').val();
				if(avatarUrl != wlrSettings.userAvatar){
					var apiKey = $('#whirlpoolAPIKey_id').val();
					if(apiKey == ''){
						apiKey = prompt('As you haven\'t entered an API key in the settings dialog, you\'ll need to provide one to update your avatar. It will not be stored.');
					}
					
					if(apiKey != null){
						Whirlpool.notify('Updating avatar.... Please wait',true,10000)
						
						avatar.updateAvatar(apiKey,avatarUrl,function(r){
							if(r.status == 200 && (r.responseText == 'Avatar created/updated' || r.responseText == 'Avatar Removed')){
								alert(r.responseText);
							}else{
								alert('Avatar Update Failed: ' + r.responseText)
							}
							
							iterOverSettings('set');
					
							location.reload(true);
						});
					}else{
						iterOverSettings('set');
						location.reload(true);
					}
					
				}else{
					iterOverSettings('set');
					location.reload(true);
				}
				


			});
			
			return false;

		},
		
		firstRun: function () {

			var ohHaiHTML = '<div id="ohHaiDiv" style="background-color:#EEEEEE;border:1px solid black;color:#333333;display:none;' + 'left:50%;margin-left:-300px;padding:12px;position:fixed;top:17%;width:600px;overflow:hidden;height:430px;' + 'display:block;z-index:3000;">' + '<a href="#" id="closeohHaiModal" style="float:right;font-weight:bold;font-size:2em;clear:both;color:black;">X</a><br /><br/>' + '<img src="' + server + 'png/welcome.png" alt="default.aspx2.jpg" />' + '</div>';
			$('body').append('<div id="ohHaioverlay" style="height: 100%; width: 100%; position: fixed; left: 0pt; top: 0pt; z-index: 2999; opacity: 0.5; background-color:#000000;"/>').append(ohHaiHTML);

			Whirlpool.set('WLRfirstRun', 'false');

			$('#closeohHaiModal').click(function () {

				$('#ohHaiDiv, #ohHaioverlay').remove();
				return false;

			});
		}
	}

	function quickQuote() {

		var gottaPee, backImg, pReply = $('.foot_reply a');

		whirlC.generalStyle();

		if (pReply[0]) {
			//we have the post reply link
			
			$.get(pReply[0].href, function (data) {

				gottaPee = data.split('name="tinkle" value="')[1].split('">')[0];

			});
			
			if (document.title.match(' - Focused - The Pool Room - Whirlpool Forums')) {
				Whirlpool.css('#qqTextArea{background-image:url(' + Whirlpool.image('focusedthread') + ');}');

			}
		} else {
			Whirlpool.css('#opInputs, #qqpost{display:none !important;} #qqTextArea{background-image:url(' + Whirlpool.image('closedthread') + ');}');
		}

		var currTime = time();
		docs.lmtr =  $('#replylist .reply:last');

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
					
						Whirlpool.set('textareraSave', '');
						
						if ($('#lastPost').prop('checked') && (Whirlpool.url.indexOf("&p=-1#bottom") < 0) && (Whirlpool.url.indexOf("&p=-1&#bottom") < 0)){

							docs.d.location = "http://forums.whirlpool.net.au/forum-replies.cfm?t=" + Whirlpool.threadNumber + "&p=-1&#bottom";

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
																		
									$('#previewTR').remove();
									
									var newPost = $(data).find('#replylist .reply:last');
									
									var replyNumberLinks = newPost.prevAll('a[name!="bottom"]');
									
									var quickEdit = $("<br><a class='wpp-edit'>(quick edit)</a>").css( "cursor", "pointer" ).on('click', wpp_quickEdit );
									
									newPost.find('.actions a[href^="/forum/index.cfm?action=edit"]' ).after(quickEdit);
									
									$('#replylist .reply:last').after(newPost).after(replyNumberLinks[0]).after(replyNumberLinks[1]);
									
								}
							);
						}
						

					}

				},
				error: function (XMLHttpRequest, textStatus, errorThrown) {

					alert('WP+: Something broke!  ==>' + XMLHttpRequest + ' ' + textStatus + ' ' + errorThrown);
					docs.q.val(Whirlpool.get('textareraSave'));

				}


			});

		}

		var wcButtons = whirlC.buttons("qqbuttonsDiv", "auto;", "qqwcodeButtons");

		$('#replies').append('<div id="qQuote" align="center">' + wcButtons + '<div id="qqPreview"></div><div id="qqTooManyWords">' + '<p style="margin:0 auto;margin-top:10px;">ZOMG! You are quoting significantly more words than you have written.<br /><br />' + '<img src="' + Whirlpool.image('kitteh') + '" /></p><button type="button" id="wordsOK">OK</button>' + '</div><textarea id="qqTextArea" cols="' + docs.quickReplyboxCols + '" rows="' + docs.quickReplyboxRows + '"></textarea><br />' + '<button type="button" style="" id="qqpostclear" name="qqpost">Clear</button><button type="button" style="" id="qqpost" name="qqpost">Post Reply</button>' + '<img src="' + Whirlpool.image('waiting') + '" id="aloader" />' + '<div id="opInputs" style="height:30px;width:700px;">' + '<p><input type="checkbox" checked="checked" style="cursor: pointer;" value="true" wc2="w" id="modewc" name="modewc"/>' + '<label style="cursor: pointer;font-size:10px;" for="modewc"> Use WhirlCode</label></p>' + '<p><input type="checkbox" checked="checked" style="cursor: pointer;" value="true" wc2="b" id="modeht" name="modeht"/>' + '<label style="cursor: pointer;font-size:10px;" for="modeht"> Allow HTML</label></p>' + '<p><input type="checkbox" checked="checked" style="cursor: pointer;" value="true" id="modest" wc2="e" name="modest"/>' + '<label style="cursor: pointer;font-size:10px;" for="modest"> Auto entities </label></p>' + '<p><input checked="checked" type="checkbox" style="cursor: pointer;" value="true" id="modewl" wc2="a" name="modewl"/>' + '<label style="cursor: pointer;font-size:10px;" for="modewl"> Make links clickable</label></p>' + '<p>' + '	<input type="checkbox" name="modesu" id="autoSubscribe" wc2="t" value="true" style="cursor: pointer;"/>' + '	<label for="modesu" style="cursor: pointer; font-size: 10px;"> Watch</label>' + '</p>		' + '<p><input type="checkbox" style="cursor: pointer;" id="autoPreview" name="autoPreview"/>' + '<label style="cursor: pointer;font-size:10px;">Auto Preview</label></p>' + '<p><input type="checkbox" style="cursor: pointer;" id="lastPost" name="lastPost"/>' + '<label style="cursor: pointer;font-size:10px;">Go To Last Post</label></p>' + '</div></div>');

		docs.q = $('#qqTextArea');
		whirlC.buttonEvents("qqwcodeButtons", docs.q, whirlC.code());
		var oInpArr = $('#opInputs input');

		function getOptions(t) {

			var textOptions = "&";
			var settingStr = "pfl";
			var ret;

			oInpArr.each(function (i) {

				var opThis = $(this);

				if (opThis.prop('checked')) {

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
		if (Whirlpool.get('autoPreview') === 'true') {

			$('#autoPreview').prop('checked', 'checked');

		}
		if (Whirlpool.get('lastPost') === 'true') {
			$('#lastPost').prop('checked', 'checked');
		}
		if (Whirlpool.get('autoSubscribe') === 'true') {
			$('#autoSubscribe').prop('checked', 'checked');
		}
		oInpArr.click(function () {

			var oIthis = $(this);
			docs.eh = getOptions('preview');
			var w, oIid = oIthis.prop("id");

			if (oIid === 'autoPreview') {

				if (oIthis.prop('checked')) {

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

				($(this).prop('checked')) ? w = 'true' : w = 'false';

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

				
				//If possible, get the actual selected post
				var selectionParent = $(unsafeWindow.getSelection().getRangeAt(0).commonAncestorContainer.parentNode).closest('tr');
				var qqtrParent;
				
				if(selectionParent.length == 1){
					qqtrParent = selectionParent;
				}else{
					qqtrParent = docs.repliesTR.eq(i);
				}
				
				var qqpre = qqtrParent.prop('id').split('r')[1];
				var qquNam;

				qqtrParent.find('span').each(function () {

					if ($(this).prop('class') == 'bu_name') {

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
				
				if(docs.q[0].setSelectionRange){
					docs.q[0].setSelectionRange(docs.q.val().length,docs.q.val().length);					
				}

				Whirlpool.set('textareraSave', docs.q.val());

				return false;

			});

		});

		function pfft() {

			Whirlpool.set('textareraSave', docs.q.val());

			if (docs.checkIfSignedIn) {

				alert('WP+: You Are Not Currently Signed Into Whirlpool');

			} else {

				docs.q.css('background', '#E5E5E5 url(' + Whirlpool.image('waiting') + ') no-repeat scroll 50% 50%');

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
			$('#wc_whirlurl, #wc_whirllink, #wc_siSearch').prop('disabled', 'disabled');
			whirlC.buttonEvents("qqwcodeButtons", docs.q, whirlC.code());
			docs.eh = 'pflwae';
			docs.q.bind("focus keyup", function () {

				wcPrev.showPreview();

			});
			if (Whirlpool.url.indexOf('rt=') > -1) {

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
			docs.pTd3.prop('style', 'background:#EEEEEE url(/img/forum/reply-eeeeee.gif) repeat-x scroll center bottom;' + 'border-bottom:1px solid #BBBBBB;' + 'border-top:2px solid #F2F2F2;' + 'padding:8px 12px 10px;' + 'vertical-align:middle;');
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

			Whirlpool.css("#pmenu {padding:0;list-style-type: none; position:fixed;z-index:50;height:19px;overflow:hidden;width:18px;left:" + whereMenu + ";}" + "#pmenu img{margin;0;padding:0;border:none;background:transparent;width:16px;} #pmenu ul {padding:0; margin:0; list-style-type: none; width:101px;}" + "#pmenu li {position:relative;z-index:51;}" + "#pmenu a{display:block;width:130px;font-weight:bold;font-size:12px; color:#FFFFFF; height:26px; line-height:26px; " + "text-decoration:none; text-indent:5px; background:#616CA3; border:1px solid orange;white-space: nowrap; }" + "#pmenu>li>ul>li>a{background:#EDEDED;color:#000;}" + "#pmenu li:hover > a {background:#dfd7ca; color:#c00;}" + "#pmenu li ul {display: none;} " + "#pmenu li:hover > ul {display:block; position:absolute; top:0; z-index:52;margin-left:130px;}");
			
			var spinner = Whirlpool.image('small_whirl_logo');

			var gfx = 'http://forums.whirlpool.net.au/skin/web/img/favicon.gif';
			var uNumber = docs.uinfo.find('a')[0].href.split('/user/')[1];
			var newUL2, unLi = $('<ul id="pmenu">');

			if(Whirlpool.get('dynamicMenuSystem_settingsLink') == 'top'){
				unLi.html('<img id="menuSpinner" src="' + spinner + '" />' + '<li><a href="#" id="settingsSpinnerLink">WP+ Settings</a></li><li><a href="#">WP User</a>' + '<ul> ' + '<li><a href="http://forums.whirlpool.net.au/user/' + uNumber + '">Your Posts</a></li> ' + '<li><a href="http://forums.whirlpool.net.au/user/?action=online">People Online</a></li> ' + '<li><a href="http://forums.whirlpool.net.au/whim/?action=inbox">Inbox</a></li> ' + '<li><a href="http://forums.whirlpool.net.au/whim/?action=outbox">Outbox</a></li> ' + '<li><a href="http://forums.whirlpool.net.au/whim/?action=contacts">Contacts</a></li> ' + '<li><a href="http://forums.whirlpool.net.au/forum/?action=watched">Watched Threads</a></li> ' + '<li><a href="http://forums.whirlpool.net.au/forum/?action=threads_search">Thread Search</a></li> ' + '<li><a href="http://forums.whirlpool.net.au/profile/">Account Settings</a></li> ' + '<li><a href="http://forums.whirlpool.net.au/profile/?a=logout&logout=' + uNumber + '">Log out</a></li> ' + '</ul> ' + '</li> ');
			}else if(Whirlpool.get('dynamicMenuSystem_settingsLink') == 'underuser'){
				unLi.html('<img id="menuSpinner" src="' + spinner + '" />' + '<li><a href="#">WP User</a>' + '<ul> ' + '<li><a href="http://forums.whirlpool.net.au/user/' + uNumber + '">Your Posts</a></li> ' + '<li><a href="http://forums.whirlpool.net.au/user/?action=online">People Online</a></li> ' + '<li><a href="http://forums.whirlpool.net.au/whim/?action=inbox">Inbox</a></li> ' + '<li><a href="http://forums.whirlpool.net.au/whim/?action=outbox">Outbox</a></li> ' + '<li><a href="http://forums.whirlpool.net.au/whim/?action=contacts">Contacts</a></li> ' + '<li><a href="http://forums.whirlpool.net.au/forum/?action=watched">Watched Threads</a></li> ' + '<li><a href="http://forums.whirlpool.net.au/forum/?action=threads_search">Thread Search</a></li> ' + '<li><a href="http://forums.whirlpool.net.au/profile/">Account Settings</a></li> ' + '<li><a href="http://forums.whirlpool.net.au/profile/?a=logout&logout=' + uNumber + '">Log out</a></li> ' + '</ul> ' + '</li><li><a href="#" id="settingsSpinnerLink">WP+ Settings</a></li>');
			}else {
				unLi.html('<img id="menuSpinner" src="' + spinner + '" />' + '<li><a href="#">WP User</a>' + '<ul> ' + '<li><a href="http://forums.whirlpool.net.au/user/' + uNumber + '">Your Posts</a></li> ' + '<li><a href="http://forums.whirlpool.net.au/user/?action=online">People Online</a></li> ' + '<li><a href="http://forums.whirlpool.net.au/whim/?action=inbox">Inbox</a></li> ' + '<li><a href="http://forums.whirlpool.net.au/whim/?action=outbox">Outbox</a></li> ' + '<li><a href="http://forums.whirlpool.net.au/whim/?action=contacts">Contacts</a></li> ' + '<li><a href="http://forums.whirlpool.net.au/forum/?action=watched">Watched Threads</a></li> ' + '<li><a href="http://forums.whirlpool.net.au/forum/?action=threads_search">Thread Search</a></li> ' + '<li><a href="http://forums.whirlpool.net.au/profile/">Account Settings</a></li> ' + '<li><a href="http://forums.whirlpool.net.au/profile/?a=logout&logout=' + uNumber + '">Log out</a></li> ' + '</ul> ' + '</li> ');
			}
			
			
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
			if(Whirlpool.get('dynamicMenuSystem_settingsLink') == 'bottom'){
				unLi.append('<li><a href="#" id="settingsSpinnerLink">WP+ Settings</a></li>');
			}
			unLi.find('*').addClass('notarget');
			
			var displayedMouseOver = false;
			var displayedClick = false;
			
			unLi.mouseenter(function(){
				if(!displayedClick){
					$(this).css({'height' : 'auto', 'overflow': 'visible'});
					displayedMouseOver = true;
					displayedClick = false;
				}
			});

			unLi.find('#menuSpinner').click(function(){
				$(this).css({'height' : 'auto', 'overflow': 'visible'});
				displayedMouseOver = false;
				displayedClick = true;
				
				return false;
			});
			
			unLi.find('a[href!="#"], a#settingsSpinnerLink').click(function(){

				$(unLi).css({'height' : '19px', 'overflow': 'hidden'});
				displayedMouseOver = false;
				displayedClick = false;
				return true;
			});
			
			unLi.mouseleave(function(){
				if(displayedMouseOver){
					$(unLi).css({'height' : '19px', 'overflow': 'hidden'});
					displayedMouseOver = false;
				}
				return true;
			});
			
			unLi.find('a[href="#"]').click(function(event){
				event.stopPropagation();
				return false;
			});
			
			$('html').click(function(){
				if(displayedClick){
					$(unLi).css({'height' : '19px', 'overflow': 'hidden'});
					displayedClick = false;
				}
				return true;
			});
			
			wlrMenu.unLi = unLi;
			
		},
		rightClickMen: function () {

			wlrMenu.generateMenu();

			document.addEventListener('mouseup', function (e) {

				if (e.which == 3 && e.target.tagName != 'A' && e.target.tagName != 'TEXTAREA') {

					wlrMenu.unLi.remove();
					$('body').prepend(wlrMenu.unLi);
					$('#settingsSpinnerLink').click(function(){ wlrSettings.dialog(); return false; })
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
			$('#settingsSpinnerLink').click(function(){ wlrSettings.dialog(); return false; })
			wlrMenu.unLi.css('margin', '25px 0 50px 5px');

		}

	}

	function noBottom() {

		$('.threads a').each(function () {

			this.href = this.href.replace("&p=-1&#bottom", "");

		});

	}

	function userNotes(trParent, i) {
		var firstDiv = trParent.find('.replyuser-inner div:not(.wpp_avatar)');
		var uNum = getUserNumber(trParent);
		var usrNtsPic = Whirlpool.image('green_note');
		var uNJa = eval('(' + docs.userNotesArr + ')');
		if (uNJa !== '{}' && uNJa[uNum]) {
			usrNtsPic = Whirlpool.image('red_note');
		}


		$('<img src="' + usrNtsPic + '"/>').prop({
			uNum: uNum,
			title: 'User Note',
			parentNum: 'parentNum' + trParent.prop('id')
		}).css({
			'padding': '0 5px',
			'cursor': 'pointer'
		}).appendTo(firstDiv[0]).bind('mouseup', function (e) {
			
			if (!docs.d.getElementById("uS" + uNum)) {

				var modalBackground = $('<div id="wlrsettingsoverlay" style="height: 100%; width: 100%; position: fixed; left: 0pt; top: 0pt; z-index: 2999; opacity: 0.5; background-color:#000000;"/>');
				$('body').append(modalBackground);
				var key, uNJ, ithis = $(this),
					unThis = ithis.prop("uNum"),
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
				diag.setAttribute("clickerID", ithis.prop('parentNum'));
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
						$('').prop('src', Whirlpool.image('green_note'));


					} else if (texValar !== '') {

						uNJ[unThis] = texValar;
						Whirlpool.set('userNotesArr', uNJ.toSource().toString());
						$('').prop('src', Whirlpool.image('green_note'));

					}

					docs.d.body.removeChild(diag);
					$('#wlrsettingsoverlay').remove();
					return false;

				});


			}
			return false;
		});

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
		
		repl.css('margin-top','10px');
		
		
		if (docs.threadArchiveView == 'true') {
			wBP.append('<a class="bwatch" href="http://forums.whirlpool.net.au/archive/' + Whirlpool.threadNumber + '">Thread Archive</a>');
			futSub.append('&nbsp;&nbsp;<a href="http://forums.whirlpool.net.au/archive/' + Whirlpool.threadNumber + '">Thread Archive</a>');
			if (repl[0].style.marginTop !== '10px') {
				repl.prop('style', 'margin-Top:10px');
			}

		}
		if (docs.longThreadView == 'true') {
			wBP.append('<a class="bwatch" href="http://forums.whirlpool.net.au/forum-replies.cfm?t=' + Whirlpool.threadNumber + '&p=-2">Long Thread View</a>');
			futSub.append('&nbsp;&nbsp;<a href="http://forums.whirlpool.net.au/forum-replies.cfm?t=' + Whirlpool.threadNumber + '&p=-2">Long Thread View</a>');
			if (repl[0].style.marginTop !== '10px') {
				repl.prop('style', 'margin-Top:10px');
			}

		}
		if (docs.opOnlyView == 'true') {
			try {
				var oppost = $('.op:first').parent().parent();
				var opid = getUserNumber(oppost);
				wBP.append('<a class="bwatch oponly" href="http://forums.whirlpool.net.au/forum-replies.cfm?t=' + Whirlpool.threadNumber + '&ux=' + opid + '">OP Only</a>');
				futSub.append('&nbsp;&nbsp;<a href="http://forums.whirlpool.net.au/forum-replies.cfm?t=' + Whirlpool.threadNumber + '&ux=' + opid + '">OP Only</a>');
				if (repl[0].style.marginTop !== '10px') {
					repl.prop('style', 'margin-Top:10px');
				}
			} catch(e) {

			}

		}
		if (docs.moderatorPostView == 'true') {
			wBP.append('<a class="bwatch" href="http://forums.whirlpool.net.au/forum-replies.cfm?um=1&amp;t=' + Whirlpool.threadNumber + '">Mod Posts</a>');
			futSub.append('&nbsp;&nbsp;<a href="http://forums.whirlpool.net.au/forum-replies.cfm?um=1&amp;t=' + Whirlpool.threadNumber + '">View moderator posts</a>');
			if (repl[0].style.marginTop !== '10px') {
				repl.prop('style', 'margin-Top:10px');
			}
		}
		if (docs.representativePostView == 'true') {
			wBP.append('<a class="bwatch" href="http://forums.whirlpool.net.au/forum-replies.cfm?ur=1&amp;t=' + Whirlpool.threadNumber + '">Rep Posts</a>');
			futSub.append('&nbsp;&nbsp;<a href="http://forums.whirlpool.net.au/forum-replies.cfm?ur=1&amp;t=' + Whirlpool.threadNumber + '">View representative posts</a>');
			if (repl[0].style.marginTop !== '10px') {
				repl.prop('style', 'margin-Top:10px');
			}
		}

	}

	function whimSize() {

		if (!docs.q) {
			docs.q = $('#body');
		}
		docs.q.css('width', 'auto').prop('rows', docs.whIMMessageTextAreaRows).prop('cols', docs.whIMMessageTextAreaCols);

	}

	function loadTheme() {
		if (docs.customWPTheme !== 'default' && docs.customWPTheme.indexOf('import') > -1) {
			Whirlpool.css(docs.customWPTheme);
		} else if (docs.customWPTheme !== 'default' && docs.customWPTheme.indexOf('import') < 0) {
			$('head').append('<link rel="stylesheet" type="text/css" media="screen" href="' + docs.customWPTheme + '">');
			/*setTimeout('100', function () {
				$('style:first').text('');
			});*/
		}
	}

	function whimAlertNotice() {

		if ($('#menu_whim').text()) {
			Whirlpool.notify('You have an unread <a href="http://whirlpool.net.au/whim/">whim</a>.', true, 15000);
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
		var deletedThreadNumber = Whirlpool.url.split('t=')[1].split('&')[0];
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

	/********
	 stuff that runs on every page ('cept for the first 2 if()s - no point running everything below on an alert page )
	 ********/

	setGM();

	if (Whirlpool.url.indexOf('?a=subs-') > -1) {
		if (docs.watchedThreadsAlert == 'watched' ||
document.referrer.indexOf('?action=watched') > -1) {
			docs.d.location = 'http://forums.whirlpool.net.au/forum/?action=watched';
		}
		if (docs.watchedThreadsAlert == 'thread' &&
document.referrer.indexOf('?action=watched') == -1) {
			history.go(-1);
		}
	}
	if (Whirlpool.url.indexOf('?a=priv-deleted') > -1) {
		deletedThreadsCacheLink();
	} else if (!Whirlpool.url.match('alert')) {
		wlrSettings.set();
		loadTheme();
		if (Whirlpool.get('WLRfirstRun') === 'true') {
			wlrSettings.firstRun();
		}
		if (Whirlpool.get('whirlpoolSidemenuFont') !== "default font") {
			$('#menu').css('font-family', Whirlpool.get('whirlpoolSidemenuFont') + ' !important');
		}
		if (Whirlpool.get('whirlpoolBreadcrumbFont') !== "default font") {
			$('#breadcrumb').css('font-family', Whirlpool.get('whirlpoolBreadcrumbFont') + ' !important');
		}
		if (Whirlpool.get('dynamicMenuSystem') == 'spinner') {
			wlrMenu.spinnerMen();
		} else if (Whirlpool.get('dynamicMenuSystem') == 'rightClick') {
			wlrMenu.rightClickMen();
		}
		if (Whirlpool.get('showWhirlpoolFooterLinks') === "false") {
			$('#footer').hide();
		}

		if (Whirlpool.get('enableWideWhirlpool') === "true") {
			Whirlpool.css('#root, #footer {width: 99.5% !important;max-width: none !important;}' + '#content > span.shim2 {display: none !important;}body,html,#root{margin:0;padding:0;border:0;}');
		}
		if (Whirlpool.get('penaltyBoxBackground') === "true") {
			Whirlpool.css('.penalty_box {background-image:url(' + Whirlpool.image('light_gradient') + ')!important;background-repeat:repeat !important; background-color: #fff !important; } ');
			
			$('#replies .replyuser-inner .usergroup').each(function(){	
				var userGroup = $(this).text();
				if(userGroup.indexOf('penalty box') > 0 || userGroup.indexOf('Banned') > 0){
					$(this).parents('.replyuser').addClass('penalty_box');
				}
			});
			
		}

		if (Whirlpool.get('whimAlertNotice') === "true") {
			whimAlertNotice();
		}
	}
	var fSecText = Whirlpool.url.match('whirlpool.net.au/forum/');

	if (Whirlpool.url == 'http://forums.whirlpool.net.au/' || Whirlpool.url == 'http://forums.whirlpool.net.au/index.cfm' || Whirlpool.url == 'http://forums.whirlpool.net.au/forum/') {
		if (docs.noGluteusMaximus === 'true') {
			noBottom();
		}
	}
	
	if(Whirlpool.url.match('action=newthread')){
		if (Whirlpool.get('autoSubscribe') === 'true') {
			$('#modesu').prop('checked', 'checked');
		}
	}
	
	if (Whirlpool.url.match('forum-replies')) {
		docs.repliesTR = $('#replies .reply');
		docs.repliesA = docs.repliesTR.find('a[title="a link to this specific post"]');
      
		if (Whirlpool.get('quickReplybox') === 'true') {
			quickQuote();
		}
		if (Whirlpool.get('hideDelPosts') === 'true') {
			hideDelPosts();
		}
		
		avatar.css();

		docs.repliesTR.each(function (i) {

			var tdThis = $(this).children('td:eq(1)');

			if (docs.staticAvatars === 'true' || docs.animatedAvatars === 'true') {
				avatar.avatariseRow($(this));
			}
			if (docs.ignoreUser === 'true') {
				userIgnore($(this));
			}
			if (docs.userNotes === 'true' && !notFirefox) {
				userNotes($(this), i);
			}
		});
 
		extraThreadLinks();

	} else if (fSecText && Whirlpool.url.split(fSecText[0])[1].length) {
		if (Whirlpool.get('hideDRThreads') === 'true') {
			hideDelMov.delRem();
		}
		if (Whirlpool.get('hideMVThreads') === 'true') {
			hideDelMov.mv();
		}
	} else if (Whirlpool.url.indexOf('/user/') > -1) {
		whimSize();
		if (docs.userpageInfoToggle === 'true') {
			userpageInfoToggle();
		}
	}
	
	if (Whirlpool.url.indexOf('whirlpool.net.au/whim/?action=read') > -1) {
	
		avatar.css();
		
		if (Whirlpool.get('staticAvatars') === 'true' || Whirlpool.get('animatedAvatars') === 'true' ) {
			$('#replies table tr').each(avatar.avatariseWhim);
		}
		
	}


	if (Whirlpool.get('whirlcodeinWikiWhimNewThread') === 'true') {
		if (Whirlpool.url.indexOf('/wiki/?action=edit&tag=') > -1 || Whirlpool.url.indexOf('/wiki/index.cfm') > -1) {
			if($('#f_body').length == 1){
				wcWikiWhimNewThread.wikiNewThread('#f_body');
			}
		} else if (Whirlpool.url.indexOf('/forum/index.cfm?action=newthread') > -1) {
			wcWikiWhimNewThread.wikiNewThread('#body');
		} else if (Whirlpool.url.indexOf('/forum/index.cfm?action=reply') > -1) {
			wcWikiWhimNewThread.wikiNewThread('#body');
		} else if (Whirlpool.url.indexOf('/forum/index.cfm?action=edit') > -1) {
			wcWikiWhimNewThread.wikiNewThread('#body');
		}
	}
	if (Whirlpool.url === 'http://forums.whirlpool.net.au/forum/?action=watched') {
		openwatchedThreadsInTabs();
	}
	
	// ! Basic fix for anchors
	//breaks FF3
	/*
	if (Whirlpool.url.match("#")) {
		var anchor = "#" + Whirlpool.url.split("#")[1];
		if (anchor != '#' && $(anchor)) {
			$(anchor).focus();
		}
	}
	*/

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