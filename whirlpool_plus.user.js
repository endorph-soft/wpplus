// ==UserScript==
// @name            Whirlpool Plus
// @namespace       WhirlpoolPlus
// @description     Adds a suite of extra optional features to the Whirlpool forums.
// @version         5.1.5
// @updateURL       https://raw.githubusercontent.com/endorph-soft/wpplus/master/whirlpool_plus.meta.js
// @downloadURL     https://raw.githubusercontent.com/endorph-soft/wpplus/master/whirlpool_plus.user.js
// @grant           unsafeWindow
// @grant           GM_addStyle
// @grant           GM_getResourceURL
// @grant           GM_getResourceText
// @grant           GM_openInTab
// @match           *://forums.whirlpool.net.au/*
// @match           *://bc.whirlpool.net.au/*
// @match           *://whirlpool.net.au/*
// @exclude         *://whirlpool.net.au/blog/*
// @exclude         *://whirlpool.net.au/api/*
// @exclude         *://forums.whirlpool.net.au/api/*
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

var WhirlpoolPlus = {};

WhirlpoolPlus.about = {
    // Script Version
    version: '5.1.5',

    //Prerelease version- 0 for a standard release
    prerelease: 0,

    //Meaningless value to force the script to upgrade
    storageVersion: 65,

    //Script changelog
    changelog: {
        '5.1.5': '<ul><li>Further refinements to new notification bar. Fixed Super Profile not displaying watched threads correctly. Fixed quick edit bug causing double posts.</li></ul>',
        '5.1.4': '<ul><li>Adds post count in threads. Fixed imgur album issue. Fixed forums powered by text not displaying after Bulletproof Hosting logo removal. Changed WP Plus notification system.</li></ul>',
        '5.1.3': '<ul><li>Fixed avatar caching issue.</li></ul>',
        '5.1.2': '<ul><li>Fixed imgur issues (again). Fixed issues with the latest version of Tampermonkey. Fixed Unread Watched Threads Button opening Unread WHIMs. Added wider display for WHIMS when widescreen view is selected.</li></ul>',
        '5.1.1': '<ul><li>Tidied up code. Added function to elevate a specific forum section to the top of the Watched Threads list. Improvements to Super Profile functionality. Fixed imgur gallery and Watched Thread redirect bugs. If your WLR Tracking or Hidden Users are not working please see previous version release notes.</li></ul>',
        '5.1.0': '<ul><li>Changes to settings menu to reflect new options for Watched Threads. You can now find these under the "Threads & Posts" tab. The WLR settings have also changed and you may need to re-enable WLR if you notice it not working. Please note if you are upgrading from a version prior to 5.0.7 you will need to delete and re-add any hidden users.</li></ul>',
        '5.0.9': '<ul><li>Adds toggle to hide image/video embed URLs and option to show only Unread Watched Threads on Super Profile page. Please note if you are upgrading from a version prior to 5.0.7 you will need to delete and re-add any hidden users.</li></ul>',
        '5.0.8': '<ul><li>Fixes settings menu bug on certain resolutions, miscellaneous code tweaks</li></ul>',
        '5.0.7': '<ul><li>Adds username to hidden users view, toggles for enabling/disabling WLR on different pages, fixes Whirlcode block not appearing in Wiki after previewing updates & reworked settings menu</li></ul>',
        '5.0.6': '<ul><li>Adds toggle for enhanced Watched Threads page & toggle to reverse mark as read/stop watching buttons, fixes floating top bar background, adds toggle for return to last page after sign-in, miscellaneous code tweaks</li></ul>',
        '5.0.5': '<ul><li>Adds Super Profile option to show Watched Threads on your Profile Page, fixes bug causing random links to display as broken images, miscellaneous other fixes</li></ul>',
        '5.0.4': '<ul><li>New toggle for old user profile page layout, option to open all watched threads in tabs instead of unread only, moved whim link to correct original location</li></ul>',
        '5.0.3': '<ul><li>New toggles added for powered by text, OP/Edited text prominence in threads and reps/reads colouring, adjustments to embedded content link display, miscellaneous other fixes</li></ul>',
        '5.0.2': '<ul><li>Fixes WLR running through reps/reads columns, returns Whirlcode in Wiki, miscellaneous other fixes</li></ul>',
        '5.0.1': '<ul><li>Adds old font toggle, changes to whim link and image embeds, fixes to aura votes page</li></ul>',
        '5.0.0': '<ul><li>New version for new Whirlpool</li></ul>',
    },

    versionText: function () {
        var versionString = this.version;
        if (this.prerelease > 0) {
            versionString += 'pre' + this.prerelease;
        }
        return versionString;
    },
}

WhirlpoolPlus.install = {

    run: function () {

        //Set any undefined values to their default values
        this._setDefaults();

        var oldVersion = WhirlpoolPlus.util.get('storageVersion');

        if (oldVersion == null || oldVersion == false) {
            oldVersion = 0;
        }

        // No current update code

        //Show the update dialog (But only on a forums page)
        if (WhirlpoolPlus.util.pageType.forums) {
            this._upgradeDialog();
        }

        //Set version information
        WhirlpoolPlus.util.set('storageVersion', WhirlpoolPlus.about.storageVersion);
        WhirlpoolPlus.util.set('scriptVersion', WhirlpoolPlus.about.version);
        WhirlpoolPlus.util.set('prerelease', WhirlpoolPlus.about.prerelease);

    },

    _defaults: {
        display_theme: 'default',
        display_hideDeletedThreads: false,
        display_hideMovedThreads: false,
        display_hideDeletedPosts: false,
        display_syntaxHighlight: true,
        display_opeditlarge: false,
        display_floatSidebar: false,
        display_floatTopbar: false,
        display_emoticons_enabled: false,
        display_emoticons_blue: false,
        display_hideTheseForums: '',
        display_hideClosedThreadsOnProfile: false,
        /*display_watchedAlert : false,*/
        display_whimAlert: true,
        display_poweredby: true,
        display_widescreen: false,
        display_hideFooter: false,
        display_smallfont: false,
        display_oldfont: false,
        display_customCSS: '',
        display_penaltyBox: false,
        display_oldProfile: false,
        display_userPageInfoToggle: false,
        display_superProfile: 'default',
        avatar_static: true,
        avatar_animated: false,
        stats_postsPerDay: true,
        embed_videos: true,
        embed_images: true,
        hideembedurl: false,
        recentActivityOverlay: false,
        recentActivityOverlay_days: '7',
        recentActivityOverlay_data: '',
        recentActivityOverlay_html: '',
        recentActivityOverlay_updateInterval: 15,
        recentActivityOverlay_lastUpdated: 0,
        whirlpoolAPIKey: '',
        hiddenUsers_enabled: false,
        hiddenUsers: [],
        hiddenUsers_remove: false,
        removeLinkToLastPage: false,
        links_archive: true,
        links_longThread: true,
        links_originalPoster: true,
        links_mod: true,
        links_rep: true,
        links_unanswered: true,
        /*resetAuraVote : false,*/
        whimArchiveSort: true,
        spinnerMenu: 'none',
        spinnerMenu_settingsLocation: 'top',
        defaultRecentActivityDays: '7',
        quickEdit: true,
        wlr_display_flipStyles: false,
        wlr_display_unreadPostColour: '#CFCBBC',
        wlr_tempDisable: true,
        wlr_enabled: 'all',
        wlr_noTrackSticky: false,
        wlr_display_onlyEndSquare: false,
        wlr_display_acrosscolumns: false,
        wlr_display_unreadThreadColour: '#95B0CB',
        wlr_display_readThreadColour: '#CBC095',
        compose_quickReply: true,
        compose_quickReply_emoticons: false,
        compose_enhancedEditor: true,
        compose_movePreview: true,
        autoSubscribeToNewThread: false,
        whimLink: true,
        numberPosts: false,
        userNotes_enabled: false,
        userNotes: {},
        /* watchedThreadsUnread: '0',*/
        watchedThreadsAlert: 'default',
        watchedthreadsextra: 'improved',
        promoteWatchedForum: '',
        returnafterlogin: false,
        sync_server: '',
        sync_key: '',
        sync_user: '',
        sync_scriptId: Math.floor(Math.random() * 100000001),
        sync_encryptionKey: '',
        sync_times: {},
        sync_mostUpToDate: 0,
        sync_lastSync: 0,
        sync_enabled: false,
    },

    //These values are used for the minimal install
    _notForumValues: [
        'whirlpoolAPIKey',
        'display_theme',
        'display_floatSidebar',
        'display_floatTopbar',
        'display_widescreen',
        'display_hideFooter',
        'display_customCSS',
        'display_oldfont',
        'display_poweredby',
        'avatar_static',
        'avatar_animated',
        'spinnerMenu',
        'spinnerMenu_settingsLocation',
        'whimArchiveSort',
        'defaultRecentActivityDays',
        'compose_enhancedEditor',
        'recentActivityOverlay',
        'recentActivityOverlay_days',
        'recentActivityOverlay_data',
        'recentActivityOverlay_html',
        'recentActivityOverlay_updateInterval',
        'recentActivityOverlay_lastUpdated',
        'returnafterlogin',
    ],

    //Set any undefined values to the default value
    _setDefaults: function () {

        if (WhirlpoolPlus.util.pageType.forums) {
            for (var key in this._defaults) {
                if (!WhirlpoolPlus.util.exists(key)) {
                    WhirlpoolPlus.util.set(key, this._defaults[key]);
                }
            }
        } else {
            for (var key in this._notForumValues) {
                if (!WhirlpoolPlus.util.exists(this._notForumValues[key])) {
                    WhirlpoolPlus.util.set(this._notForumValues[key], this._defaults[this._notForumValues[key]]);
                }
            }
        }

    },

    _upgradeDialog: function () {
        var dialogHtml = '<h1>WP+</h1>' +
            '<p>Version ' + WhirlpoolPlus.about.versionText() + '</p>';

        if (WhirlpoolPlus.about.prerelease > 0) {
            dialogHtml += '<div><strong>This is a prerelease version. Please report any bugs to <a href="//forums.whirlpool.net.au/user/105852">Phyco</a>.</strong></div>';
        }

        //Check for new installs
        if (WhirlpoolPlus.util.get('scriptVersion') === false) {
            dialogHtml += '<br /><div>It looks like this is the first time you have installed the script! You can access script settings and information from the "WP+ Settings" link in the sidebar.</div>';
        }

        dialogHtml += '<br /><div style="text-align:left"><strong>New in this version: </strong>' + WhirlpoolPlus.about.changelog[WhirlpoolPlus.about.version] + '</div>';

        dialogHtml += '<br /><div>For an extended changelog, see WP+ Settings &gt; Info</div>';

        dialogHtml += '<br /><div>If you experience issues with this version of WP+ please check the latest WP+ thread under Feedback</div>';

        dialogHtml += '<br /><br /><button type="button" class="simplemodal-close">Close</button>';

        $(dialogHtml).modal({
            close: true,
            containerCss: {
                'text-align': 'center',
                'background-color': '#ddd',
                'border': '1px solid #000',
                'padding': '20px',
                'height': '500px',
                'width': '700px',
            },
            overlayCss: { backgroundColor: '#000' },
        });

    },

}

WhirlpoolPlus.util = {

    get: function (key) {
        var value = unsafeWindow.localStorage.getItem('wpp_' + key);

        if (value == null) {
            return false;
        } else {
            try {
                return JSON.parse(value);
            } catch (e) {
                alert('Error loading setting: ' + key + ' = ' + value)
            }
        }
    },

    set: function (key, value) {
        unsafeWindow.localStorage.setItem('wpp_' + key, JSON.stringify(value));
    },

    rem: function (key) {
        unsafeWindow.localStorage.removeItem('wpp_' + key);
    },

    exists: function (key) {
        return unsafeWindow.localStorage.getItem('wpp_' + key) != null;
    },

    css: function (styles) {
        GM_addStyle(styles);
    },

    image: function (resource) {
        return GM_getResourceURL(resource);
    },

    resource: function (resource) {
        return GM_getResourceText(resource);
    },

    initPageType: function () {
        for (i in WhirlpoolPlus.util.pageType) {
            WhirlpoolPlus.util.pageType[i] = (document.location.href.indexOf(WhirlpoolPlus.util.pageType[i]) >= 0);
        }
    },

    // Should not be accessed without calling initPageType
    pageType: {

        'alert': '/forum/alert/',     // An alert page
        'posts': 'forum-replies.cfm', // The page where you view posts
        'threads': '/forum/',           // The page where you view threads
        'profile': '/user/',            // User profile page
        'whimArchive': 'action=archive',    // Whim archive page
        'whimRead': 'action=read',       // Whim read page
        'whimWrite': 'action=write',      // Whim write page
        'deletedThread': 'a=priv-deleted',    // Deleted thread alert
        'auraVotes': 'action=yourvotes',  // List of all aura votes
        'newThread': 'action=newthread',  // Creating a new thread
        'reply': 'action=reply',      // Posting a reply
        'edit': 'action=edit',       // Editing a post
        'search': 'action=search',     // Thread search
        'forums': 'forums.whirlpool',  // forums.whirlpool.net.au
        'wiki': '.net.au/wiki/',     // Wiki
        'watchedThreads': 'action=watched',    // Watched threads page
        'watchedThreadAlert': '?a=subs-',          // Alert on marking a thread as read
    },

    _notified: false,

    notify: function (message, important) {
        var color = '#fff';

        if (important === true) {
            color = '#d87400';
        }

        if (!this._notified) {
            $('head').append('<style type="text/css">.wpplus_notify{ text-align: center; text-transform: capitalize; color: ' + color + ';} .wpplus_notify:hover{ cursor: pointer; }</style>');
            var tb = $('#topbar');

            WhirlpoolPlus.util.css('#topbar.notifyfloat { position: fixed; width: 100% !important; max-width: none !important; top: 0px; z-index: 999; background-color:#d87400 !important;}');

            $(window).scroll(function () {
                if (!this._notified) {
                    if (window.pageYOffset > 0) {
                        tb.addClass('notifyfloat');
                        WhirlpoolPlus.util.css('.wpplus_notify{color:#fff !important;}');
                    } else {
                        tb.removeClass('notifyfloat');
                    }
                }
            }).scroll();
            this._notified = true;
        }
        $('#ub_name').before('<span class="wpplus_notify">!!! ' + message + ' (hide) !!!    </span>');
        $('.wpplus_notify').click(function (e) {
            $(this).fadeOut();
            tb.removeClass('notifyfloat');
        });
    },

    getReplyUserId: function (reply) {
        var num = reply.find('a[href*="/user/"]:not([href*="online"])').prop('href').split('/user/')[1];
        num = num.split('?');
        return parseInt(num);
    },

    getReplyNumber: function (reply) {
        var num = reply.find('a[href*="/forum-replies.cfm?t="]').prop('href').split('#r')[1];
        num = num.split('?');
        return parseInt(num);
    },

    getThreadNumber: function () {
        return (typeof unsafeWindow.thread_id != 'undefined') ? (unsafeWindow.thread_id) : (false);
    },

    getUserId: function () {
        var uID = $('#ub_name a').prop('href');
        return uID.split('/').slice(-1)[0];
    },

    getUsername: function () {
        return $('#ub_name a').text();
    },

    sync: {

        // Initialised during init() call
        server: null,
        user: null,
        key: null,
        scriptId: null,
        encKey: null,

        css: function () {
            return '#syncing { display: none; position: fixed; bottom: 0px; right: 0px; background-color: #3D3327; z-index: 10; padding: 6px 2px 2px 6px; border-top-left-radius: 15px; } #syncing img { height: 30px; width: 30px; }';
        },

        init: function () {
            this.server = WhirlpoolPlus.util.get('sync_server');
            this.user = WhirlpoolPlus.util.get('sync_user');
            this.key = WhirlpoolPlus.util.get('sync_key');
            this.scriptId = WhirlpoolPlus.util.get('sync_scriptId');
            // In the past, this value was accidently encoded when stored. Now this is resolved,
            // it must still be encoded before use to ensure encrypted values are backwards-compatible
            this.encKey = encodeURIComponent(WhirlpoolPlus.util.get('sync_encryptionKey'));

            if (WhirlpoolPlus.util.get('sync_enabled')) {
                $('body').append('<div id="syncing"><img src="' + WhirlpoolPlus.util.image('loader') + '" /></div>');

                WhirlpoolPlus.util.sync.run();
            }
        },

        get: function (name) {
            return WhirlpoolPlus.util.get('sync_' + name);
        },

        getTime: function (name) {
            return WhirlpoolPlus.util.get('sync_times')[name];
        },

        getTimes: function () {
            return WhirlpoolPlus.util.get('sync_times');
        },

        set: function (name, value) {
            this.setWithTime(name, value, Math.round(new Date().getTime() / 1000));
        },

        setWithTime: function (name, value, timestamp) {
            timestamp = parseInt(timestamp);

            var times = WhirlpoolPlus.util.get('sync_times');

            times[name] = timestamp;

            WhirlpoolPlus.util.set('sync_times', times);

            if (timestamp > WhirlpoolPlus.util.get('sync_mostUpToDate')) {
                WhirlpoolPlus.util.set('sync_mostUpToDate', timestamp);
            }

            WhirlpoolPlus.util.set('sync_' + name, value);
        },

        remove: function (name) {
            if (this.get(name) !== false) {
                this.set(name, null);
            }
        },

        _delete: function (name) {
            var times = WhirlpoolPlus.util.get('sync_times');

            delete times[name];

            WhirlpoolPlus.util.set('sync_times', times);
            WhirlpoolPlus.util.rem('sync_' + name);

        },

        _sendRequest: function (request, callback) {
            $.ajax({
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                type: 'POST',
                url: this.server,
                data: 'u=' + this.user + '&k=' + this.key + '&r=' + JSON.stringify(request),
                success: callback,
                error: function (response) {
                    WhirlpoolPlus.util.sync._error(response.status);
                }
            });
        },

        _error: function (status) {
            if (status == 0) {
                //General request failure, usually caused by navigation whilst syncing
                $('#syncing').fadeOut();
                return;
            }

            var message;
            switch (status) {
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

            WhirlpoolPlus.util.notify('WP+ Sync Failed: ' + message, false, 10 * 1000);
            $('#syncing').fadeOut();
        },

        _encrypt: function (data) {
            return encodeURIComponent(Tea.encrypt(JSON.stringify(data), this.encKey));
        },

        _decrypt: function (data) {
            return JSON.parse(Tea.decrypt(decodeURIComponent(data), this.encKey));
        },

        run: function () {
            if (!WhirlpoolPlus.util.get('sync_enabled')) {
                return;
            }

            $('#syncing').fadeIn();
            var request = {
                a: 'nu',
                id: this.scriptId,
                t: WhirlpoolPlus.util.get('sync_mostUpToDate'),
                ls: WhirlpoolPlus.util.get('sync_lastSync')
            };


            this._sendRequest(request, function (data, statusText, response) {
                if (response.status != 200) {
                    WhirlpoolPlus.util.sync._error(response.status);
                } else {
                    var serverResponse = JSON.parse(response.responseText);

                    var currentSyncTime = Math.round(new Date().getTime() / 1000);

                    if (serverResponse.nu) {
                        var times = WhirlpoolPlus.util.sync.getTimes();

                        var dataForServer = {};

                        for (var key in times) {
                            if (times[key] >= serverResponse.since) {
                                dataForServer[WhirlpoolPlus.util.sync._encrypt(key)] = {
                                    t: times[key],
                                    d: (WhirlpoolPlus.util.sync.get(key) === null) ? null : WhirlpoolPlus.util.sync._encrypt(WhirlpoolPlus.util.sync.get(key))
                                };
                            }
                        }

                        //server wants an update
                        request = {
                            a: 's',
                            id: WhirlpoolPlus.util.sync.scriptId,
                            ls: WhirlpoolPlus.util.get('sync_lastSync'),
                            ct: currentSyncTime,
                            d: dataForServer
                        };

                        WhirlpoolPlus.util.sync._sendRequest(request, function (data, statusText, syncResponse) {
                            if (syncResponse.status != 200) {
                                WhirlpoolPlus.util.sync._error(response.status);
                                return;
                            }

                            syncResponse = JSON.parse(syncResponse.responseText);

                            if (syncResponse.s) {
                                //data to sync

                                var reload = false;

                                if (typeof syncResponse.d != 'undefined') {
                                    for (var key in syncResponse.d) {
                                        decodedKey = WhirlpoolPlus.util.sync._decrypt(key);
                                        syncResponse.d[key]['d'] = WhirlpoolPlus.util.sync._decrypt(syncResponse.d[key]['d']);

                                        if (WhirlpoolPlus.util.sync.get(decodedKey) !== false) {
                                            if (WhirlpoolPlus.util.sync.getTime(decodedKey) <= syncResponse.d[key]['t']) {
                                                WhirlpoolPlus.util.sync.setWithTime(decodedKey, syncResponse.d[key]['d'], syncResponse.d[key]['t']);
                                            }
                                        } else {
                                            WhirlpoolPlus.util.sync.setWithTime(decodedKey, syncResponse.d[key]['d'], syncResponse.d[key]['t']);
                                        }
                                        reload = true;
                                    }
                                }

                                if (typeof syncResponse.r != 'undefined') {
                                    for (var key in syncResponse.r) {
                                        decodedKey = WhirlpoolPlus.util.sync._decrypt(key);
                                        if (WhirlpoolPlus.util.sync.get(decodedKey) !== false) {
                                            if (WhirlpoolPlus.util.sync.get(decodedKey) !== null) {
                                                reload = true;
                                            }
                                            if (WhirlpoolPlus.util.sync.getTime(decodedKey) <= syncResponse.r[key]['t']) {
                                                WhirlpoolPlus.util.sync._delete(decodedKey);
                                            }
                                        }
                                    }
                                }

                                if (reload && (WhirlpoolPlus.util.pageType.threads || WhirlpoolPlus.util.pageType.profile)) {
                                    window.location.reload();
                                }

                            }

                            WhirlpoolPlus.util.set('sync_lastSync', currentSyncTime);
                            $('#syncing').fadeOut();

                        });
                    } else {
                        $('#syncing').fadeOut();
                    }
                }
            });

        }
    },

};

WhirlpoolPlus.settings = {

    css: function () {
        var styles = '#wppSettings { background-color:#999; border:1px solid #000; color:#333; padding:0 12px; height: 60%; width: 50%; min-height: 580px; min-width: 900px; }' +
        '#wppSettings #wppSettingsWrapper { overflow: hidden; width: 100%; height: 100%; }' +
        '#wppSettings #tabMenu { list-style:none; width:100%; margin: 14px 0px 0px 32px; }' +
        '#wppSettings .menuTab { border:3px solid #777; border-width:3px 3px 1px; float:left; height:20px; margin-right:10px; padding:5px; width:120px; text-align:center; color:white; }' +
        '#wppSettings .menuTab_active { background-color:orange; border:3px solid #555; border-width:3px 3px 1px; }' +
        '#wppSettings .menuTab:hover { cursor:pointer; border:3px solid #555; border-width:3px 3px 1px; }' +
        '#wppSettings p { border-bottom:1px dashed grey; margin-left:15px; margin-right:15px; padding-bottom:15px; }' +
        '#wppSettings p:last-child { border-bottom: none; }' +
        '#wppSettings p.description { border-bottom: none; margin-left:15px; padding-bottom:5px; }' +
        '#wppSettings .settingDesc { font-style: italic; float: right; padding-right: 5px; }' +
        '#wppSettings .subSettings_heading { cursor: pointer; margin: 5px 8px; text-align:center; }' +
        '#wppSettings .subSettings_content { display: none; }' +
        '#wppSettings .subSettings { border:1px solid #777; border-radius:5px; background-color: #bbb; margin: 5px; }' +
        '#wppSettings .menuDiv { width: 99.5%; height:85%; min-height:470px; min-width:894px; display: none; overflow-y:scroll; float:left;border:3px solid #333;background-color:#EEEEEE; }' +
        '#wppSettings .menuDiv_active { display: block; }' +
        '#wppSettings .tabDescription { text-align: center; font-style: italic; }' +
        '#wppSettings .wpp_settingsMessage { text-align: center; font-weight: bold; padding: 5px 10px;}' +
        '#currentUserAvatar { background-image: url("' + WhirlpoolPlus.util.image('noavatar') + '"); background-repeat: no-repeat; height: 100px; width: 100px; margin: 0 auto; }' +
        '#wppSettings #currentAvatars { width: 200px; margin: 0 auto; background: url("/img/forum/reply-e5e5e5.gif") repeat-x scroll center top #E5E5E5; padding: 5px 20px; border-radius: 4px; }' +
        '#wppSettings #currentAvatars:after { content: ""; display: table; clear: both; }' +
        '#wppSettings .avatar { background-image: url("' + WhirlpoolPlus.util.image('noavatar') + '"); background-repeat: no-repeat; height: 100px; width: 100px; margin: 0 auto; }' +
        '#wppSettings .avatarLabel { font-weight: bold; width: 100px; margin: 0 auto; text-align: center; padding-bottom: 10px; }' +
        '#wppSettings .avatarLabel { font-weight: bold; width: 100px; margin: 0 auto; text-align: center; padding-top: 10px; }' +
        '#wppSettings .bottomrow { width:98%;height:10px;bottom:4%;position:absolute;color:#fff;left:1%; }';


        if (!WhirlpoolPlus.util.pageType.forums) {
            styles += '.wpp_hideNotForum { display: none; }';
        } else {
            styles += '.wpp_showNotForum { display: none; }';
        }

        return styles;
    },

    init: function () {
        this._buildHtml();

        // Add settings link
        var settingsLink = $('<li id="menu_wpp" class="even"><a href="#"><span>WP+ Settings</span></a></li>');
        $('#menu_whim').after(settingsLink);

        settingsLink.click(function () {
            WhirlpoolPlus.settings._launch();
            return false;
        });
    },

    _launch: function () {
        //If the settings box is in minimal mode, it will show far less settings
        var minimalMode = !WhirlpoolPlus.util.pageType.forums;

        var dialog = $(this._html);

        var currentTheme = WhirlpoolPlus.util.get('display_theme');
        var currentSyncServer = WhirlpoolPlus.util.get('sync_server');
        var currentSyncEncryptionKey = WhirlpoolPlus.util.get('sync_encryptionKey');

        dialog.modal({
            close: true,
            containerId: 'wppSettings',
            overlayCss: { backgroundColor: '#000' },
            onShow: function () {
                var settings = WhirlpoolPlus.util.pageType.forums ? $('.wpp_setting') : $('.wpp_setting').not('.wpp_forumSetting');

                settings.each(function () {
                    var setting = $(this);
                    var settingValue = WhirlpoolPlus.util.get(setting.prop('id'));

                    if (setting.is('input[type="checkbox"]')) {
                        setting.prop('checked', settingValue);
                    } else {
                        setting.val(settingValue);
                    }
                });
            },
        });


        if (!minimalMode) {
            $('#sync_server').val(currentSyncServer);
            $('#sync_encryptionKey').val(currentSyncEncryptionKey);


            var hiddenUsersHTML = '';
            var hiddenUsers = WhirlpoolPlus.util.get('hiddenUsers');
            for (i = 0; i < hiddenUsers.length; i++) {
                var hurl = ("//forums.whirlpool.net.au/user/" + hiddenUsers[i]);
                hiddenUsersHTML += '<p>User <a href="' + hurl + '" target="_blank">' + hiddenUsers[i] + '</a> <button type="button" class="unhideUser" data-userid="' + hiddenUsers[i] + '">Unhide</button></p>';
            }
            $('#hiddenUsers').append(hiddenUsersHTML);
        }

        //Set up events
        $('#wppSettings .subSettings_heading').click(function () {
            var content = $(this).parent().children('.subSettings_content');

            if (content.is(':visible')) {
                $('.subSettings_content').hide();
            } else {
                $('.subSettings_content').hide();
                content.show();
            }
        });

        $('#wppSettings .menuTab').click(function () {
            var theTab = $(this);

            $('.menuDiv').removeClass('menuDiv_active');
            $('.menuTab').removeClass('menuTab_active');

            theTab.addClass('menuTab_active');
            $('#' + theTab.data('menudiv')).addClass('menuDiv_active');
        });

        $('#wppSettings_save').click(function () {

            var settings = WhirlpoolPlus.util.pageType.forums ? $('.wpp_setting') : $('.wpp_setting').not('.wpp_forumSetting');

            settings.each(function () {
                var setting = $(this);
                var settingKey = setting.prop('id');
                var settingValue;

                if (setting.is('input[type="checkbox"]')) {
                    settingValue = setting.prop('checked');
                } else {
                    settingValue = setting.val();
                }

                WhirlpoolPlus.util.set(settingKey, settingValue);
            });

            if (!minimalMode) {
                var newSyncServer = $('#sync_server').val();
                var newSyncEncryptionKey = $('#sync_encryptionKey').val();

                if (newSyncServer != currentSyncServer) {
                    WhirlpoolPlus.util.set('sync_server', newSyncServer);
                    WhirlpoolPlus.util.set('sync_lastSync', 0);
                }

                if (newSyncEncryptionKey != currentSyncEncryptionKey) {
                    if (confirm('You\'ve changed your encryption password. For this to work, make sure that no other password has been used with this account. For more information, see the wiki article.')) {
                        WhirlpoolPlus.util.set('sync_encryptionKey', newSyncEncryptionKey);
                    } else {
                        alert('Encryption Password reverted');
                    }
                }

                var newTheme = WhirlpoolPlus.util.get('display_theme');
                if (newTheme != currentTheme) {
                    if (confirm('Would you like to load the suggested WLR highlight colours for your theme?')) {
                        var newPostColour, noNewPostColour, postBackgroundColour;

                        switch (newTheme) {
                            case 'classic':
                                newPostColour = '#79A1FC';
                                noNewPostColour = '#EAA53F';
                                postBackgroundColour = '#DEE6FA';
                                break;

                            case 'black':
                                newPostColour = '#FFFFFF';
                                noNewPostColour = '#555555';
                                postBackgroundColour = '#A1A1A1';
                                break;

                            case 'teal':
                                newPostColour = '#B2F8F8';
                                noNewPostColour = '#99C5CB';
                                postBackgroundColour = '#D2E5E2';
                                break;

                            case 'electrolize':
                                newPostColour = '#002F58';
                                noNewPostColour = '#054C66';
                                postBackgroundColour = '#0C3851';
                                break;

                            case 'wood':
                                newPostColour = '#994C00';
                                noNewPostColour = '#A4672B';
                                postBackgroundColour = '#CFCBBC';
                                break;

                            case 'default':
                            default:
                                newPostColour = '#95B0CB';
                                noNewPostColour = '#CBC095';
                                postBackgroundColour = '#CFCBBC';
                                break;
                        }

                        WhirlpoolPlus.util.set('wlr_display_unreadThreadColour', newPostColour);
                        WhirlpoolPlus.util.set('wlr_display_readThreadColour', noNewPostColour);
                        WhirlpoolPlus.util.set('wlr_display_unreadPostColour', postBackgroundColour);
                    }
                }

                $.modal.close();
                document.location.reload();
            } else {
                $.modal.close();
                document.location.reload();
            }
        });

        $('#wppSettings_reset').click(function () {

            if (confirm('WP+: Do you really want to delete all data?')) {
                unsafeWindow.localStorage.clear();
                alert('WP+: Script data cleared');
                window.location.reload();
            } else {
                alert('WP+: No data cleared');
            }

        });

        //Special events


        if (!minimalMode) {
            //Sync Settings
            $('#wppSettings #sync_enabled').change(function () {
                if (this.checked) {
                    $('.syncSetting').prop('disabled', '');
                } else {
                    $('.syncSetting').prop('disabled', 'disabled');
                }
            }).change();

            function refreshAvatars() {
                //Load the two avatars
                WhirlpoolPlus.feat.avatar.getUserAvatar(WhirlpoolPlus.util.getUserId(), 'static', function (data, textStatus, r) {
                    var url = r.responseText;

                    if (url != '') {
                        $('#currentAvatar_static').css('background-image', 'url("' + url + '")');
                        $('#currentAvatar_removeStatic').prop('disabled', null);
                    } else {
                        $('#currentAvatar_static').css('background-image', '');
                        $('#currentAvatar_removeStatic').prop('disabled', 'disabled');
                    }
                });

                WhirlpoolPlus.feat.avatar.getUserAvatar(WhirlpoolPlus.util.getUserId(), 'animated', function (data, textStatus, r) {
                    var url = r.responseText;

                    if (url != '') {
                        $('#currentAvatar_animated').css('background-image', 'url("' + url + '")');
                        $('#currentAvatar_removeAnimated').prop('disabled', null);
                    } else {
                        $('#currentAvatar_animated').css('background-image', '');
                        $('#currentAvatar_removeAnimated').prop('disabled', 'disabled');
                    }
                });
            }

            refreshAvatars();

            //Avatar controls
            $('#currentAvatar_removeStatic').click(function () {
                $(this).prop('disabled', 'disabled');

                var apiKey = WhirlpoolPlus.util.get('whirlpoolAPIKey');

                if (apiKey == '') {
                    apiKey = prompt('As you haven\'t saved your API key in the settings dialog, you\'ll need to provide one to update your avatar. It will not be stored.');
                }

                if (apiKey != null) {
                    WhirlpoolPlus.util.notify('Removing Avatar', true);
                    WhirlpoolPlus.feat.avatar.removeAvatar(apiKey, 'static', function (data, statusText, r) {
                        if (r.status == 200 && (r.responseText == 'Avatar Removed')) {
                            alert('WP+: ' + r.responseText);
                        } else {
                            alert('WP+: Avatar Update Failed: ' + r.responseText)
                        }

                        //Will re-enable button
                        refreshAvatars();
                    });
                } else {
                    $(this).prop('disabled', null);
                    alert('WP+: Avatar not removed');
                }
            });

            $('#currentAvatar_removeAnimated').click(function () {
                $(this).prop('disabled', 'disabled');

                var apiKey = WhirlpoolPlus.util.get('whirlpoolAPIKey');

                if (apiKey == '') {
                    apiKey = prompt('As you haven\'t saved your API key in the settings dialog, you\'ll need to provide one to update your avatar. It will not be stored.');
                }

                if (apiKey != null) {
                    WhirlpoolPlus.util.notify('Removing Avatar', true);
                    WhirlpoolPlus.feat.avatar.removeAvatar(apiKey, 'animated', function (data, statusText, r) {
                        if (r.status == 200 && (r.responseText == 'Avatar Removed')) {
                            alert('WP+: ' + r.responseText);
                        } else {
                            alert('WP+: Avatar Update Failed: ' + r.responseText)
                        }

                        //Will re-enable button
                        refreshAvatars();
                    });
                } else {
                    $(this).prop('disabled', null);
                    alert('WP+: Avatar not removed');
                }
            });

            $('#currentAvatar_add').click(function () {
                $(this).prop('disabled', 'disabled');

                var apiKey = WhirlpoolPlus.util.get('whirlpoolAPIKey');

                if (apiKey == '') {
                    apiKey = prompt('As you haven\'t saved your API key in the settings dialog, you\'ll need to provide one to update your avatar. It will not be stored.');
                }

                if (apiKey != null) {
                    url = $('#currentAvatar_addUrl').val();

                    if (url == '') {
                        alert('WP+: Enter a url to add');
                    } else {

                        WhirlpoolPlus.util.notify('Adding Avatar', true);

                        WhirlpoolPlus.feat.avatar.updateAvatar(apiKey, url, function (data, statusText, r) {
                            if (r.status == 200 && (r.responseText == 'Avatar created/updated')) {
                                alert('WP+: ' + r.responseText);
                            } else {
                                alert('WP+: Avatar Update Failed: ' + r.responseText)
                            }

                            $('#currentAvatar_addUrl').val('');
                            refreshAvatars();

                            $('#currentAvatar_add').prop('disabled', null);
                        });

                    }
                } else {
                    $(this).prop('disabled', null);
                    alert('WP+: Avatar not updated');
                }
            });


            $('.unhideUser').click(function () {
                var theButton = $(this);
                var userID = theButton.data('userid');
                var hiddenUsers = WhirlpoolPlus.util.get('hiddenUsers');
                var idToDelete = -1;

                for (i = 0; i < hiddenUsers.length; i++) {
                    if (hiddenUsers[i] == userID) {
                        idToDelete = i;
                        break;
                    }
                }

                if (idToDelete >= 0) {
                    hiddenUsers.splice(idToDelete, 1);
                }

                WhirlpoolPlus.util.set('hiddenUsers', hiddenUsers);

                theButton.parent().remove();

            });
        }
    },

    _html: '',

    _buildHtml: function () {
        this._html = '<div id="wppSettingsWrapper">' +
            '<ul id="tabMenu">' +
                '<li class="menuTab menuTab_active" data-menudiv="menuDiv_help">Info & Config</li>' +
                '<li class="menuTab" data-menudiv="menuDiv_display">Display</li>' +
                '<li class="menuTab" data-menudiv="menuDiv_users">Users</li>' +
                '<li class="menuTab wpp_hideNotForum" data-menudiv="menuDiv_wlr">WLR & Sync</li>' +
                '<li class="menuTab wpp_hideNotForum" data-menudiv="menuDiv_posts">Threads & Posts</li>' +
            '</ul>' +

            '<div class="menuDiv menuDiv_active" id="menuDiv_help">' +

                '<p class="description"><center><h1>Whirlpool Plus</h1></center></p>' +

                '<div class="wpp_showNotForum wpp_settingsMessage">Setting made here will not apply to the forums.whirlpool.net.au subdomain</div>' +

                '<div class="subSettings">' +
                    '<p class="subSettings_heading description wpp_hide"><b>Script Configuration</b> (click to expand)</p>' +
                    '<div class="subSettings_content">' +

                        '<p>' +
                            '<input class="wpp_setting" type="text" id="whirlpoolAPIKey">' +
                            ' <label for="whirlpoolAPIKey">Whirlpool API Key</label>' +
                            ' <span class="settingDesc">Used for features like the Recent Activity Overlay, Avatars and WLR Synchronisation</span>' +
                        '</p>' +

                    '</div>' +

                '</div>' +

                '<p class="description"><b>Where can I get help, or report an issue?</b></p>' +
                '<p class="description">The best way to get help is to post in the Whirlpool Plus thread in Feedback. This is also a good place to request new features. </p>' +
                '<p class="description">Another good source of information is the <a href="//whirlpool.net.au/wiki/whirlpool_plus">wiki article<a>.</p>' +
                '<p class="description">The script is currently maintained by <a href="//forums.whirlpool.net.au/user/105852">Phyco</a>, so you can also whim him.</p>' +

                '<p class="description"><b>Privacy</b></p>' +
                '<p class="description">As stated in the wiki article, a user script like Whirlpool Plus could possibly be used to steal user information.  To our knowledge, there is no such code in this script. </p>' +
                '<p class="description">The script relies on an external server to run the avatars and synchronisation. This server (endorph.net) is operated by <a href="//forums.whirlpool.net.au/user/272563">tbwd</a>. Both these services use your API key to validate your identity, but do not store this key.</p>' +

                '<p class="description"><b>About Whirlpool Plus</b></p>' +
                '<p class="description">Whirlpool Plus was created by various members of the Whirlpool community to add extra features to the Whirlpool Forums. Many people have contributed to the script- see the wiki article for credits.</p>' +

                '<p class="description"><b>Changelog</b></p>';

        for (key in WhirlpoolPlus.about.changelog) {
            WhirlpoolPlus.settings._html += '<p class="description">Version ' + key + WhirlpoolPlus.about.changelog[key] + '</p>';
        }

        this._html += '<p class="description">Further changelogs can be viewed in the source of previous versions</p></div>' +

            '<div class="menuDiv" id="menuDiv_display">' +

'<div class="subSettings">' +
                    '<p class="subSettings_heading description">' +
                        '<b>Themes & Fonts</b>' +
                    '</p>' +
                    '<div class="subSettings_content">' +

                        '<p>' +
                            '<select class="wpp_setting" id="display_theme">' +
                                '<option value="default">Default (by Simon Wright)</option>' +
                                '<option value="classic">WP Classic (by Phyco)</option>' +
                                '<option value="black">WP Black (by =CHRIS=)</option>' +
                                '<option value="teal">WP Teal (by =CHRIS=)</option>' +
                                '<option value="electrolize">WP Electrolize (by =CHRIS=)</option>' +
                                '<option value="wood">WP Wood (by =CHRIS=)</option>' +
                            '</select>' +
                            ' <label for="display_theme">Custom Theme<br>To design and submit your own theme, follow the instructions on <a href="https://whirlpool.net.au/wiki/make_wpplus_theme" target="_blank"><b>this page</b></a></label>' +
                            ' <span class="settingDesc">A collection of styles provided by members of Whirlpool</span>' +
                        '</p>' +

                        '<p>' +
                            '<input class="wpp_setting" type="checkbox" id="display_oldfont">' +
                            ' <label for="display_oldfont">Use old Whirlpool fonts</label>' +
                            ' <span class="settingDesc">Switches to the pre-2015 re-design font styles (credit to =CHRIS=)</span>' +
                        '</p>' +

                        '<p>' +
                            '<span>Custom CSS</span>' +
                            ' <span class="settingDesc">Add custom styles to Whirlpool</span>' +
                            '<br /><textarea class="wpp_setting" id="display_customCSS" style="width: 100%; height: 100px; margin:0 auto;"></textarea>' +
                        '</p>' +

                    '</div>' +

                '</div>' +

'<div class="subSettings">' +
                    '<p class="subSettings_heading description">' +
                        '<b>Display Modifications</b>' +
                    '</p>' +
                    '<div class="subSettings_content">' +

                        '<p>' +
                            '<input class="wpp_setting" type="checkbox" id="display_widescreen">' +
                            '<label for="display_widescreen">Widescreen Display</label>' +
                            ' <span class="settingDesc">Stretch the website to fit the entire screen</span>' +
                        '</p>' +

                        '<p>' +
                            '<input class="wpp_setting" type="checkbox" id="display_floatSidebar">' +
                            '<label for="display_floatSidebar">Float the sidebar</label>' +
                            ' <span class="settingDesc">Keeps the sidebar navigation visible when scrolling</span>' +
                        '</p>' +

                        '<p>' +
                            '<input class="wpp_setting" type="checkbox" id="display_floatTopbar">' +
                            '<label for="display_floatTopbar">Float the topbar</label>' +
                            ' <span class="settingDesc">Keeps the topbar visible when scrolling</span>' +
                        '</p>' +

            '<p>' +
                    '<input class="wpp_setting" type="checkbox" id="display_hideFooter">' +
                    '<label for="display_hideFooter">Hide the forum footer</label>' +
                    ' <span class="settingDesc">Hides the footer navigation on each page</span>' +
                '</p>' +
            '<p>' +
                    '<input class="wpp_setting" type="checkbox" id="display_whimAlert">' +
                    '<label for="display_whimAlert">Whim Notification</label>' +
                    ' <span class="settingDesc">Display a banner notification when you receive a new WHIM, in addition to Whirlpool\'s inbuilt notification</span>' +
'</p> ' +

                                    '<p>' +
                            '<input class="wpp_setting " type="checkbox" id="recentActivityOverlay">' +
                            '<label for="recentActivityOverlay">Recent Activity Overlay</label>' +
                            ' <span class="settingDesc">Shows your recent forum activity in an overlay panel for easy access (make sure you enter your API Key in the Script Configuration)</span>' +
                        '</p>' +

                        '<p>' +
                            '<select class="wpp_setting" id="recentActivityOverlay_days">' +
                                '<option value="1">1 Day</option>' +
                                '<option value="3">3 Days</option>' +
                                '<option value="7">7 Days</option>' +
                                '<option value="14">14 Days</option>' +
                                '<option value="30">30 Days</option>' +
                                '<option value="60">60 Days</option>' +
                                '<option value="120">120 Days</option>' +
                                '<option value="240">240 Days</option>' +
                                '<option value="365">365 Days</option>' +
                            '</select>' +
                            ' <label for="recentActivityOverlay_days">Recent Activity Duration</label>' +
                            ' <span class="settingDesc">How much of your recent activity to use for the overlay</span>' +
                        '</p>' +

                '<p>' +
                    '<select class="wpp_setting" id="spinnerMenu">' +
                        '<option value="none">none</option>' +
                        '<option value="rightClick">Right Click</option>' +
                        '<option value="spinner">Spinner</option>' +
                    '</select>' +
                    ' <label for="spinnerMenu">Dynamic Menu System (select type)</label>' +
                    ' <span class="settingDesc">Display a dropdown navigation menu for the site</span>' +
                '</p>' +

                '<p>' +
                    '<select class="wpp_setting" id="spinnerMenu_settingsLocation">' +
                        '<option value="none">none</option>' +
                        '<option value="top">Top</option>' +
                        '<option value="underuser">Under User</option>' +
                        '<option value="bottom">Bottom</option>' +
                    '</select>' +
                    ' <label for="spinnerMenu_settingsLocation">Location of settings link in dynamic menu</label>' +
                            ' <span class="settingDesc">Adjusts where this will appear</span>' +
                '</p>' +

                        '<p>' +
                            '<input class="wpp_setting" type="checkbox" id="display_poweredby">' +
                            '<label for="display_poweredby">Display random "forums powered by" text</label>' +
                            ' <span class="settingDesc">An original Whirlpool feature resurrected, because why not?</span>' +
                        '</p>' +

                    '</div>' +

                '</div>' +

            '</div>' +

            '<div class="menuDiv" id="menuDiv_users">' +

                '<div class="wpp_showNotForum wpp_settingsMessage">Only a limited subset of features are available outside the forums.whirlpool.net.au subdomain</div>' +

                '<div class="subSettings">' +
                    '<p class="subSettings_heading description"><b>User Settings</b></p>' +
                    '<div class="subSettings_content">' +

                        '<p>' +
                            '<input class="wpp_setting" type="checkbox" id="returnafterlogin">' +
                            ' <label for="returnafterlogin">Return to previous page after logging in<br /><b>Must be enabled on both the whirlpool.net.au and forums.whirlpool.net.au domains to work correctly</b></label>' +
                            ' <span class="settingDesc">Redirects you to the last thread viewed before login</span>' +
                        '</p>' +

                        '<p class="wpp_hideNotForum">' +
                            '<input class="wpp_setting wpp_forumSetting" type="checkbox" id="display_hideClosedThreadsOnProfile">' +
                            ' <label for="display_hideClosedThreadsOnProfile">Hide closed threads on user profiles</label>' +
                            ' <span class="settingDesc">Prevents closed threads from appearing on user pages</span>' +
                        '</p>' +

                            '<p class="wpp_hideNotForum">' +
                    '<input class="wpp_setting wpp_forumSetting" type="checkbox" id="stats_postsPerDay">' +
                    ' <label for="stats_postsPerDay">Enable "Posts per day" statistic</label>' +
                            ' <span class="settingDesc">Calculates a statistic on user pages</span>' +
                '</p>' +

                            '<p class="wpp_hideNotForum">' +
                    '<input class="wpp_setting wpp_forumSetting" type="checkbox" id="display_oldProfile">' +
                    '<label for="display_oldProfile">Use old User Profile page design</label>' +
                    ' <span class="settingDesc">Shows recent thread activity below user info as per the old site design</span>' +
                '</p> ' +

                            '<p class="wpp_hideNotForum">' +
                    '<input class="wpp_setting wpp_forumSetting" type="checkbox" id="display_userPageInfoToggle">' +
                    '<label for="display_userPageInfoToggle">Toggle to show/hide user info on Profile pages</label>' +
                    ' <span class="settingDesc">Adds a toggle to show/hide the user info panel as required</span>' +
                '</p> ' +

                            '<p>' +
                            '<select class="wpp_setting" id="defaultRecentActivityDays">' +
                                '<option value="1">1 Day</option>' +
                                '<option value="3">3 Days</option>' +
                                '<option value="7">7 Days</option>' +
                                '<option value="14">14 Days</option>' +
                                '<option value="30">30 Days</option>' +
                                '<option value="60">60 Days</option>' +
                                '<option value="120">120 Days</option>' +
                                '<option value="240">240 Days</option>' +
                                '<option value="365">365 Days</option>' +
                            '</select>' +
                            ' <label for="defaultRecentActivityDays">Default amount of recent activity to display on a user page</label>' +
                            ' <span class="settingDesc">Adjusts the default variable</span>' +
                        '</p>' +

                        /*'<p class="wpp_hideNotForum">' +
                            '<input class="wpp_setting wpp_forumSetting" type="checkbox" id="resetAuraVote">' +
                            ' <label for="resetAuraVote">Add an Aura Reset smiley (?)</label>' +
                        '</p> ' +*/

                           '<p>' +
                    '<input class="wpp_setting" type="checkbox" id="whimArchiveSort">' +
                    '<label for="whimArchiveSort">Sort Whim archives in alphabetical order</label>' +
                            ' <span class="settingDesc">Sorts the page alphabetically instead of by time</span>' +
                '</p>' +

                    '</div>' +
                '</div>' +

                '<div class="subSettings">' +
                    '<p class="subSettings_heading description"><b>Avatars</b></p>' +
                    '<div class="subSettings_content">' +

                        '<p class="tabDescription wpp_hideNotForum">To add an avatar, upload it to <a href="http://tinypic.com" target="_blank">tinypic.com</a> or your preferred alternative, then paste the <b>direct url</b> (ending in .jpg or similar) in the field below.<br /><br />Your avatar <b>must</b> be 80x80 pixels or it will not work correctly.' +

                        '<div id="currentAvatars" class="wpp_hideNotForum">' +
                            '<div style="float: left;">' +
                                '<div class="avatarLabel">Static</div>' +
                                '<div id="currentAvatar_static" class="avatar wpp_hideNotForum"></div>' +
                                '<div class="avatarRemove"><button type="button" id="currentAvatar_removeStatic">Remove</button></div>' +
                            '</div>' +
                            '<div style="float: right;">' +
                                '<div class="avatarLabel">Animated</div>' +
                                '<div id="currentAvatar_animated" class="avatar wpp_hideNotForum"></div>' +
                                '<div class="avatarRemove"><button type="button" id="currentAvatar_removeAnimated">Remove</button></div>' +
                            '</div>' +
                        '</div>' +

                        '<p class="description wpp_hideNotForum" style="text-align: center; border: none;"><input style="width: 250px;" id="currentAvatar_addUrl" /> <button type="button" id="currentAvatar_add">Add</button></p>' +

                        '<p style="border:none; padding:0;">' +
                            '<input class="wpp_setting" type="checkbox" id="avatar_static">' +
                            ' <label for="avatar_static">Display Static avatars</label>' +
                        '</p>' +

                        '<p style="border:none; padding:0;">' +
                            '<input class="wpp_setting" type="checkbox" id="avatar_animated">' +
                            ' <label for="avatar_animated">Display Animated avatars</label>' +
                        '</p>' +

                    '</div>' +
                '</div>' +

                '<div class="subSettings wpp_hideNotForum">' +
                    '<p class="subSettings_heading description"><b>Hide Users</b></p>' +
                    '<div class="subSettings_content">' +

                        '<p>' +
                            '<input class="wpp_setting wpp_forumSetting" type="checkbox" id="hiddenUsers_enabled">' +
                            '<label for="hiddenUsers_enabled">Adds an option to hide posts from users (next to aura)</label>' +
                        '</p>' +

                        '<p>' +
                            '<input class="wpp_setting wpp_forumSetting" type="checkbox" id="hiddenUsers_remove">' +
                            '<label for="hiddenUsers_remove">Remove any indication of ignored users</label>' +
                        '</p>' +

                        '<p class="description">Currently Hidden Users: </p>' +
                        '<div id="hiddenUsers"></div>' +

                    '</div>' +
                '</div>' +

            '</div>' +

            '<div class="menuDiv wpp_hideNotForum" id="menuDiv_wlr">' +

                '<div class="wpp_showNotForum wpp_settingsMessage">Only a limited subset of features are available outside the forums.whirlpool.net.au subdomain</div>' +

                '<div class="subSettings">' +
                    '<p class="subSettings_heading description"><b>Thread Tracker (WLR)</b></p>' +
                    '<div class="subSettings_content">' +

                        '<p>' +
                            '<select class="wpp_setting wpp_forumSetting" id="wlr_enabled">' +
                    '<option value="none">Disabled</option>' +
                    '<option value="all">Enabled Everywhere</option>' +
                    '<option value="forums">Enabled on Forums pages only</option>' +
                    '<option value="watched">Enabled on Forums & Watched Threads pages</option>' +
                    '<option value="profile">Enabled on Forums & User Profile pages</option>' +
                            '</select>' +
                            ' <label for="wlr_enabled">Activate the WLR tracker</label>' +
                            ' <span class="settingDesc">Tracks threads/posts on Whirlpool by highlighting their unread/read status</span>' +
                        '</p>' +

                        '<p>' +
                            '<input class="wpp_setting wpp_forumSetting" type="text" id="wlr_display_unreadThreadColour">' +
                            ' <label for="wlr_display_unreadThreadColour">Unread Posts Colour</label>' +
                            ' <span class="settingDesc">Used to highlight threads containing posts you haven\'t read</span>' +
                        '</p>' +

                        '<p>' +
                            '<input class="wpp_setting wpp_forumSetting" type="text" id="wlr_display_readThreadColour">' +
                            ' <label for="wlr_display_readThreadColour">No Unread Posts Colour</label>' +
                            ' <span class="settingDesc">Used to highlight threads containing no unread posts</span>' +
                        '</p>' +

                        '<p>' +
                            '<input class="wpp_setting wpp_forumSetting" type="text" id="wlr_display_unreadPostColour">' +
                            ' <label for="wlr_display_unreadPostColour">Post Highlight Colour (Posts Pages)</label>' +
                            ' <span class="settingDesc">Used to highlight posts (right most column) on posts pages</span>' +
                        '</p>' +

                        '<p>' +
                            '<input class="wpp_setting wpp_forumSetting" type="checkbox" id="wlr_display_onlyEndSquare">' +
                            ' <label for="wlr_display_onlyEndSquare">Colour end square </label>' +
                            ' <span class="settingDesc">Just highlight the end square of tracked threads</span>' +
                        '</p> ' +

                        '<p>' +
                            '<input class="wpp_setting wpp_forumSetting" type="checkbox" id="wlr_display_acrosscolumns">' +
                            ' <label for="wlr_display_acrosscolumns">Colour across Reps/Reads Columns </label>' +
                            ' <span class="settingDesc">Highlights the reps/reads columns as well</span>' +
                        '</p> ' +

                        '<p>' +
                            '<input class="wpp_setting wpp_forumSetting" type="checkbox" id="wlr_noTrackSticky">' +
                            ' <label for="wlr_noTrackSticky">Don\'t highlight sticky threads</label>' +
                            ' <span class="settingDesc">If the thread is a sticky, WLR will not highlight it</span>' +
                        '</p>' +

                        '<p>' +
                            '<input class="wpp_setting wpp_forumSetting" type="checkbox" id="wlr_display_flipStyles">' +
                            ' <label for="wlr_display_flipStyles">Highlight unread posts instead of read posts (Posts Pages)</label>' +
                            ' <span class="settingDesc">Reverses the default highlighting</span>' +
                        '</p>' +

                        '<p>' +
                            '<input class="wpp_setting wpp_forumSetting" type="checkbox" id="wlr_tempDisable">' +
                            ' <label for="wlr_tempDisable">Add a button to temporarily disable the tracker (top right corner)</label>' +
                            ' <span class="settingDesc">When clicked it will disable the tracker until another thread is loaded</span>' +
                        '</p>' +


                    '</div>' +

                '</div>' +

                '<div class="subSettings wpp_hideNotForum">' +
                    '<p class="subSettings_heading description"><b>Synchronisation</b></p>' +
                    '<div class="subSettings_content">' +

                        '<p class="description">WLR data can be synchronised between script installs through the use of a sync server. You can create an account at the default server at <a href="https://s.endorph.net/account/">https://s.endorph.net/account/</a><br /><br /><b>Note: you must have entered your API key on the Info & Config tab for this feature to work</b></p>' +

                        '<p>' +
                            '<input class="wpp_setting wpp_forumSetting" type="checkbox" id="sync_enabled">' +
                            '<label for="sync_enabled">Activate Synchronisation</label>' +
                        '</p>' +

                        '<p>' +
                            // No wpp_setting class intentional
                            '<input class="syncSetting wpp_forumSetting" type="text" id="sync_server"> ' +
                            '<label for="sync_server">Server Address</label>' +
                            ' <span class="settingDesc">The address of the server that you are syncing your data with</span>' +
                        '</p>' +

                        '<p>' +
                            '<input class="wpp_setting syncSetting wpp_forumSetting" type="text" id="sync_user"> ' +
                            '<label for="sync_user">Whirlpool User ID</label>' +
                            ' <span class="settingDesc">Your User ID Number must be keyed in</span>' +
                        '</p>' +

                        '<p>' +
                            '<input class="wpp_setting syncSetting wpp_forumSetting" type="text" id="sync_key"> ' +
                            '<label for="sync_key">Access Key</label>' +
                            ' <span class="settingDesc">Your access key as provided by the sync server</span>' +
                        '</p>' +

                        '<p>' +
                            // No wpp_setting class intentional
                            '<input class="syncSetting wpp_forumSetting" type="password" id="sync_encryptionKey"> ' +
                            '<button type="button" id="showEncKey" onclick="$(\'#sync_encryptionKey\').prop(\'type\',\'text\'); $(\'#hideEncKey\').show(); $(\'#showEncKey\').hide();">Show</button> ' +
                            '<button type="button" id="hideEncKey" style="display:none;" onclick="$(\'#sync_encryptionKey\').prop(\'type\',\'password\'); $(\'#hideEncKey\').hide(); $(\'#showEncKey\').show();">Hide</button> ' +
                            '<label for="sync_encryptionKey">Encryption Password</label>' +
                            ' <span class="settingDesc">Must be the same for all of your WP+ installs</span>' +
                        '</p>' +

                    '</div>' +

                '</div>' +

            '</div>' +

            '<div class="menuDiv wpp_hideNotForum" id="menuDiv_posts">' +

                '<div class="wpp_showNotForum wpp_settingsMessage">Only a limited subset of features are available outside the forums.whirlpool.net.au subdomain</div>' +


                '<div class="subSettings wpp_hideNotForum">' +
                    '<p class="subSettings_heading description"><b>Thread Settings</b></p>' +
                    '<div class="subSettings_content">' +

                        '<p>' +
                            '<input class="wpp_setting wpp_forumSetting" type="text" id="display_hideTheseForums">' +
                            ' <label for="display_hideTheseForums">Forums to hide (on main forums page) </label>' +
                            ' <span class="settingDesc">Enter the ID\'s of the forums you want to hide (eg. "35 92 137")</span>' +
                        '</p> ' +

                        '<p>' +
                            '<input class="wpp_setting wpp_forumSetting" type="checkbox" id="display_hideDeletedThreads">' +
                            '<label for="display_hideDeletedThreads">Hide Deleted Threads in forums</label>' +
                            ' <span class="settingDesc">Prevents deleted threads from being seen</span>' +
                        '</p>  ' +

                        '<p>' +
                            '<input class="wpp_setting wpp_forumSetting" type="checkbox" id="display_hideMovedThreads">' +
                            '<label for="display_hideMovedThreads">Hide Moved Threads in forums</label>' +
                            ' <span class="settingDesc">Prevents moved threads from being seen</span>' +
                        '</p> ' +

                        '<p>' +
                            '<input class="wpp_setting wpp_forumSetting" type="checkbox" id="links_unanswered">' +
                            ' <label for="links_unanswered">Link to Unanswered Threads</label>' +
                            ' <span class="settingDesc">Adds a link to only display unanswered threads after the forum name</span>' +
                        '</p>' +

                        '<p>' +
                            '<input class="wpp_setting wpp_forumSetting" type="checkbox" id="removeLinkToLastPage">' +
                            '<label for="removeLinkToLastPage">Make the links on the main forums page go to the start of the thread</label>' +
                            ' <span class="settingDesc">Links take you to the end by default</span>' +
                        '</p>' +

                        '<p class="description tabDescription">These settings add links to display only posts from certain users</p>' +

                        '<p>' +
                            '<input class="wpp_setting wpp_forumSetting" type="checkbox" id="links_originalPoster">' +
                            ' <label for="links_originalPoster">OP posts</label>' +

                            '<input class="wpp_setting wpp_forumSetting" type="checkbox" id="links_mod">' +
                            ' <label for="links_mod">Mod posts</label>' +

                            '<input class="wpp_setting wpp_forumSetting" type="checkbox" id="links_rep">' +
                            ' <label for="links_rep">Rep posts</label>' +

                            '<input class="wpp_setting wpp_forumSetting" type="checkbox" id="links_archive">' +
                            ' <label for="links_archive">Archive</label>' +

                            '<input class="wpp_setting wpp_forumSetting" type="checkbox" id="links_longThread">' +
                            ' <label for="links_longThread">Single Page Version</label>' +
                        '</p>' +

                    '</div>' +
                '</div>' +

            '<div class="subSettings wpp_hideNotForum">' +
                    '<p class="subSettings_heading description"><b>Watched Threads</b></p>' +
                    '<div class="subSettings_content">' +

            '<p class="wpp_hideNotForum">' +
                    '<select class="wpp_setting wpp_forumSetting" id="display_superProfile">' +
                    '<option value="default">Disabled</option>' +
                    '<option value="all">Enabled</option>' +
                    '<option value="unread">Enabled (Unread Watched Threads Only)</option>' +
                    '</select>' +
                    ' <label for="display_superProfile">Super Profile Page</label>' +
                    ' <span class="settingDesc">Shows your Watched Threads on your User Profile page</span><br>' +

                '</p> ' +

            '<p class="wpp_hideNotForum">' +
                            '<select class="wpp_setting wpp_forumSetting" id="watchedthreadsextra">' +
                                '<option value="default">Disabled</option>' +
                                '<option value="improved">Enabled</option>' +
                                '<option value="improvedswap">Enabled with Reversed Button Layout</option>' +
            '</select>' +
                            ' <label for="watchedthreadsextra">Improved Watched Threads Page</label>' +
                            ' <span class="settingDesc">Adds options such as "Open All Threads in Tabs" and other minor tweaks</span><br>' +

                        '</p>  ' +

                                    '<p>' +
                            '<input class="wpp_setting wpp_forumSetting" type="text" id="promoteWatchedForum">' +
                            ' <label for="promoteWatchedForum">Forum ID to move to the top of watched threads list</label>' +
                            ' <span class="settingDesc">Enter the ID of the forum you want to move to the top (eg. "35")</span>' +
                        '</p> ' +

            /*'<p>' +
                    '<input class="wpp_setting wpp_forumSetting" type="checkbox" id="display_watchedAlert">' +
                    '<label for="display_watchedAlert">Watched Thread Alert</label>' +
                    ' <span class="settingDesc">Display a banner notification when you have unread Watched Threads (make sure you enter your API Key in the Script Configuration)</span>'+
            '</p> ' +*/

                        '<p class="wpp_hideNotForum">' +
                            '<select class="wpp_setting wpp_forumSetting" id="watchedThreadsAlert">' +
                                '<option value="default">None</option>' +
                                '<option value="additional">Display Additional Links</option>' +
                                '<option value="profile">Go to User Profile</option>' +
                                '<option value="watched">Go to Watched Threads</option>' +
                                '<option value="forum">Go to All Forums</option>' +
                                '<option value="thread">Return to the thread</option>' +
                            '</select>' +

                            ' <label for="watchedThreadsAlert">Mark Thread as Read Actions</label>' +
                            ' <span class="settingDesc">Choose an action to occur when you click "mark as read" at the bottom of a thread</span><br>' +
                        '</p> ' +

                    '</div>' +
                '</div>' +

            '<div class="subSettings wpp_hideNotForum">' +
                    '<p class="subSettings_heading description"><b>Posting Tools</b></p>' +
                    '<div class="subSettings_content">' +

                        '<p>' +
                            '<input class="wpp_setting wpp_forumSetting" type="checkbox" id="compose_quickReply">' +
                            ' <label for="compose_quickReply">Quick Reply</label>' +
                            ' <span class="settingDesc">Automatically open the inline reply box at the end of every thread</span>' +
                        '</p>' +

                        '<p>' +
                            '<input class="wpp_setting wpp_forumSetting" type="checkbox" id="compose_quickReply_emoticons">' +
                            ' <label for="compose_quickReply_emoticons">Quick Reply Smilies</label>' +
                            ' <span class="settingDesc">Display the available smilies under the whirlcode buttons</span>' +
                        '</p>' +

                        '<p>' +
                            '<input class="wpp_setting wpp_forumSetting" type="checkbox" id="quickEdit">' +
                            ' <label for="quickEdit">Quick Edit</label>' +
                            ' <span class="settingDesc">Allows inline editing of posts</span>' +
                        '</p>' +

                        '<p>' +
                            '<input class="wpp_setting wpp_forumSetting" type="checkbox" id="autoSubscribeToNewThread">' +
                            ' <label for="autoSubscribeToNewThread">Automatically watch/mark as read when you post</label>' +
                            ' <span class="settingDesc">When you reply to a thread, it will automatically be added to your watched threads</span>' +
                        '</p>' +

                        '<p>' +
                            '<input class="wpp_setting" type="checkbox" id="compose_enhancedEditor">' +
                            ' <label for="compose_enhancedEditor">Add Whirlcode buttons to editors</label>' +
                            ' <span class="settingDesc">Adds editing tools to new post, reply and wiki editors</span>' +
                        '</p>' +

                        '<p>' +
                            '<input class="wpp_setting" type="checkbox" id="compose_movePreview">' +
                            ' <label for="compose_movePreview">Move reply preview above inline reply box</label>' +
                            ' <span class="settingDesc">Shows the inline reply preview at the end of the thread rather than below the reply field</span>' +
                        '</p>' +

                    '</div>' +
                '</div>' +

                '<div class="subSettings wpp_hideNotForum">' +
                    '<p class="subSettings_heading description"><b>Display and Formatting Options</b></p>' +
                    '<div class="subSettings_content">' +

                        '<p class="wpp_hideNotForum">' +
                            '<input class="wpp_setting wpp_forumSetting" type="checkbox" id="userNotes_enabled">' +
                            ' <label for="userNotes_enabled">User Notes</label>' +
                            ' <span class="settingDesc">Keep notes on each user</span>' +
                        '</p> ' +

                        '<p class="wpp_hideNotForum">' +
                            '<input class="wpp_setting wpp_forumSetting" type="checkbox" id="whimLink">' +
                            ' <label for="whimLink">Whim Links</label>' +
                            ' <span class="settingDesc">Adds a Whim link next to a users post count on each post</span>' +
                        '</p> ' +

                        '<p class="wpp_hideNotForum">' +
                            '<input class="wpp_setting wpp_forumSetting" type="checkbox" id="display_penaltyBox">' +
                            ' <label for="display_penaltyBox">Highlight when a user is in the penalty box</label>' +
                            ' <span class="settingDesc">Shows a more noticeable visual indicator on previous posts made by users currently banned</span>' +
                        '</p>' +

                        '<p class="wpp_hideNotForum">' +
                            '<input class="wpp_setting wpp_forumSetting" type="checkbox" id="display_smallfont">' +
                            ' <label for="display_smallfont">Use smaller font</label>' +
                            ' <span class="settingDesc">Displays a smaller font for posts, like Whirlpool did in the past</span>' +
                        '</p>' +

                        '<p class="wpp_hideNotForum">' +
                            '<input class="wpp_setting wpp_forumSetting" type="checkbox" id="display_opeditlarge">' +
                            ' <label for="display_opeditlarge">Increase Edited or OP Post Prominence</label>' +
                            ' <span class="settingDesc">Uses larger font to indicate edited or OP posts</span>' +
                        '</p>' +

                        '<p class="wpp_hideNotForum">' +
                            '<input class="wpp_setting wpp_forumSetting" type="checkbox" id="numberPosts">' +
                            ' <label for="numberPosts">Numbered Posts</label>' +
                            ' <span class="settingDesc">Displays the current post number in a thread on each post</span>' +
                        '</p>' +

                        '<p class="wpp_hideNotForum">' +
                            '<input class="wpp_setting wpp_forumSetting" type="checkbox" id="display_emoticons_enabled">' +
                            ' <label for="display_emoticons_enabled">Display Image Emoticons (Smilies)</label>' +
                            ' <span class="settingDesc">Converts text smilies on Whirlpool into images</span>' +
                        '</p>' +

                        '<p class="wpp_hideNotForum">' +
                            '<input class="wpp_setting wpp_forumSetting" type="checkbox" id="display_emoticons_blue">' +
                            ' <label for="display_emoticons_blue">Use blue smilies</label>' +
                            ' <span class="settingDesc">Uses the original blue smilies instead of the default</span>' +
                        '</p>' +

                        '<p class="wpp_hideNotForum">' +
                            '<input class="wpp_setting wpp_forumSetting" type="checkbox" id="embed_images">' +
                            ' <label for="embed_images">Inline Images</label>' +
                            ' <span class="settingDesc">Displays images inline in threads for WP+ users</span>' +

                        '</p>' +

                        '<p class="wpp_hideNotForum">' +
                            '<input class="wpp_setting wpp_forumSetting" type="checkbox" id="embed_videos">' +
                            ' <label for="embed_videos">Inline Videos</label>' +
                            ' <span class="settingDesc">Displays videos inline in threads for WP+ users</span>' +
                        '</p>  ' +

                        '<p class="wpp_hideNotForum">' +
                            '<input class="wpp_setting wpp_forumSetting" type="checkbox" id="hideembedurl">' +
                            ' <label for="hideembedurl">Hide Embed URL</label>' +
                            ' <span class="settingDesc">Hides the URLs of embedded content</span>' +
                        '</p>  ' +

                           '<p class="wpp_hideNotForum">' +
                    '<input class="wpp_setting wpp_forumSetting" type="checkbox" id="display_syntaxHighlight">' +
                    ' <label for="display_syntaxHighlight">Syntax Highlighting for code blocks</label>' +
                            ' <span class="settingDesc">"Prettifies" data entered in "codeblock" Whirlcode</span>' +
                '</p> ' +

                        '<p class="wpp_hideNotForum">' +
                            '<input class="wpp_setting wpp_forumSetting" type="checkbox" id="display_hideDeletedPosts">' +
                            ' <label for="display_hideDeletedPosts">Hide deleted posts</label>' +
                            ' <span class="settingDesc">Hide any reference of deleted posts in threads</span>' +
                        '</p>  ' +

                    '</div>' +
                '</div>' +

            '</div>' +

            '<div class="bottomrow"><button id="wppSettings_reset" style="float: left;line-height: 1.5em;padding: 5px;border: 1px solid #CDCDCD;border-radius: 2px;">Reset Settings</button><button id="wppSettings_save" style="float:right;margin-left:6px;line-height: 1.5em;padding: 5px;border: 1px solid #CDCDCD;border-radius: 2px;">Save</button><button id="wppSettings_cancel" class="simplemodal-close" style="float:right;line-height: 1.5em;padding: 5px;border: 1px solid #CDCDCD;border-radius: 2px;">Cancel</button><center>Installed Script Version: ' + WhirlpoolPlus.about.versionText() + '</center></div>' +

            '<br />' +

        '</div>';
    }

};

WhirlpoolPlus.feat = {

    returnafterlogin: function () {
        if (WhirlpoolPlus.util.get('returnafterlogin')) {
            var sButton = document.querySelector('[href*="//whirlpool.net.au/profile/index.cfm?a=login"]');
            var dU = location.href;
            var lSc = WhirlpoolPlus.util.get('returnafterlogin_targetUrl');

            if (sButton) {
                sButton.addEventListener('mouseup', function (e) {
                    WhirlpoolPlus.util.set('returnafterlogin_targetUrl', dU);
                },
                false);
            }

            if (document.referrer.indexOf("//whirlpool.net.au/profile/index.cfm?a=login") !== -1) {
                location.href = "//forums.whirlpool.net.au";
            };

            if (dU.match('//forums.whirlpool.net.au') && document.querySelector('#ub_name') && lSc) {
                location.href = lSc;
                WhirlpoolPlus.util.rem('returnafterlogin_targetUrl');
            }
        }
    },

    watchedThreadsAlert: function () {
        if (WhirlpoolPlus.util.get('watchedThreadsAlert') == 'watched' || document.referrer.indexOf('?action=watched') >= 0) {
            document.location = '//forums.whirlpool.net.au/forum/?action=watched';
        }
        else if (WhirlpoolPlus.util.get('watchedThreadsAlert') == 'profile' ^ document.referrer.indexOf('?action=watched') >= 0) {
            document.location = '//forums.whirlpool.net.au/user';
        }
        else if (WhirlpoolPlus.util.get('watchedThreadsAlert') == 'forum' ^ document.referrer.indexOf('?action=watched') >= 0) {
            document.location = '//forums.whirlpool.net.au/';
        }
        else if (WhirlpoolPlus.util.get('watchedThreadsAlert') == 'thread' && document.referrer.indexOf('?action=watched') == -1) {
            history.go(-1);
        }
        else if (WhirlpoolPlus.util.get('watchedThreadsAlert') == 'additional' ^ document.referrer.indexOf('?action=watched') >= 0) {
            $('#alert').append('<h2><a href="/user">Or go to your user profile page</a></h2><h2><a href="//forums.whirlpool.net.au/">Or go to all forums</a></h2>');
        }
    },

    promoteWatchedForum: function () {
        var promoteThis = WhirlpoolPlus.util.get('promoteWatchedForum');
        if (promoteThis != '') {
            var promSecTitleLink = document.querySelector('#threads a[href="/forum/' + promoteThis + '"]');
            if (promSecTitleLink != null) {
                var threadsTR = document.querySelectorAll('#threads table tbody tr'),
                    threadsTB = document.querySelector('#threads table tbody'),
                    promSecTitleLink_p_p = promSecTitleLink.parentNode.parentNode,
                    isPromSection = false;


                [].forEach.call(threadsTR, function (item, index, arr) {

                    if (isPromSection) {

                        if (item.className !== 'section') {

                            threadsTB.insertBefore(item, threadsTR[0]);

                        }
                        else if (item.className === 'section') {

                            isPromSection = false;

                        }

                    }
                    if (item === promSecTitleLink_p_p) {

                        threadsTB.insertBefore(promSecTitleLink_p_p, threadsTR[0]);
                        isPromSection = true;

                    }

                });
            }
        }
    },

    openWatchedThreadsInTabs: function () {
        if (WhirlpoolPlus.util.get('watchedthreadsextra') == 'improved' || WhirlpoolPlus.util.get('watchedthreadsextra') == 'improvedswap') {
            var openAllURInT = $('<a href="#" id="openInTabs">open unread in tabs</a>');

            $('a[href="/forum/?action=watched"]').after(openAllURInT);

            openAllURInT.before('&nbsp;&nbsp;');

            openAllURInT.after('&nbsp;&nbsp;|');

            openAllURInT.click(function () {
                $('td.unread a').each(function () {
                    if (typeof GM_openInTab == 'function') {
                        GM_openInTab(this.href);
                    } else {
                        window.open(this.href);
                    }
                });
                return false;
            })

            /**Fixes spacing of buttons**/
            $("button[onclick*='selectread']").before("&nbsp;&nbsp;&nbsp;");
            $("button[onclick*='selectold']").before("&nbsp;&nbsp;&nbsp;");
            $("button[onclick*='selectall']").before("&nbsp;&nbsp;&nbsp;");

            if (WhirlpoolPlus.util.get('watchedthreadsextra') == 'improvedswap') {
                $("input[name*='stopWatchingButton']").detach().insertBefore("input[name*='markAsReadButton']");
                $("input[name*='stopWatchingButton']").after("&nbsp;&nbsp;&nbsp;");
            }
            else {
                $("input[name*='stopWatchingButton']").before("&nbsp;&nbsp;&nbsp;");
            };

            var openAllInT = $('<a href="#" id="openInTabs">open all in tabs</a>');

            $('a[href="/forum/?action=watched&showall=1"]').after(openAllInT);

            openAllInT.before('&nbsp;&nbsp;');

            openAllInT.click(function () {
                $('a.title').not(".section a.title").each(function () {
                    if (typeof GM_openInTab == 'function') {
                        GM_openInTab(this.href);
                    } else {
                        window.open(this.href);
                    }
                });
                return false;
            });

            $('.section a').each(function (i) {
                var openAllinSInT = $('<a href="#" id="openSectionInTabs" style="font-weight:bold;margin-left:35px;">open section in tabs</a>');
                $(this).after(openAllinSInT);

                openAllinSInT.click(function () {
                    $(this).parent().parent().nextUntil('.section').find('.unread a').each(function () {
                        if (typeof GM_openInTab == 'function') {
                            GM_openInTab(this.href);
                        } else {
                            window.open(this.href);
                        }
                    });
                    return false;
                });
            });
        }
    },

    yourvoteslink: function () {
        var target = $('td:contains("Aura:"):first');

        target.append('<br><a class="small" href="http://forums.whirlpool.net.au/user/?action=yourvotes" target="_blank">(Your Aura Votes)</a>');
        target.parent().css({ "vertical-align": "top" });
    },

    postsPerDay: function () {
        if (!WhirlpoolPlus.util.get('stats_postsPerDay')) {
            return;
        }

        var posts = $('td:contains("Post count:")').next('td').text();

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

        $('tr:contains("Post count"):first').after('<tr><td align="right"><b>Posts per Day:</b></td><td>' + (Math.round($('td:contains("Post count")').next('td').text() / days * 100) / 100) + '</td></tr>');
    },

    auraCount: function () {
        var auraCount = { 1: 0, 2: 0, 3: 0, 4: 0 };
        var totalAuras = 0;

        $('#content table tr td pre').each(function () {
            switch ($(this).text()) {
                case ':(      ':
                    auraCount[1]++;
                    break;
                case '  :|    ':
                    auraCount[2]++;
                    break;
                case '    :)  ':
                    auraCount[3]++;
                    break;
                case '      :D':
                    auraCount[4]++;
                    break;
            }

            totalAuras++;
        });

        var auraPercentages = {
            1: Math.round(((auraCount[1] / totalAuras) * 1000) / 10),
            2: Math.round(((auraCount[2] / totalAuras) * 1000) / 10),
            3: Math.round(((auraCount[3] / totalAuras) * 1000) / 10),
            4: Math.round(((auraCount[4] / totalAuras) * 1000) / 10),
        };

        var voteHtml = '<p style="font-weight:bold;">Stats:</p><div class="voteblock"><table style="text-align: center; font: bold 12px monospace; width: 245px; border: 2px solid #999; background-color: #fff;"><tr>' +
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

            '</table><p style="font-weight: bold; font-size: 12px;">Total Aura Given: ' + totalAuras + '</p></div>';

        $('.grid').before(voteHtml);
    },

    embed: function () {
        var imageEnabled = WhirlpoolPlus.util.get('embed_images');
        var videoEnabled = WhirlpoolPlus.util.get('embed_videos');
        var maxContentWidth = $('.replytext').width();

        var imageMatchRegex = /(?:jpe?g|gif|bmp|png)$/;
        var imgurRegex = /(https?:\/\/imgur\.com\/(.+)(?:[#\/].*|$))/i;

        var youtubeRegex = /http(s)?:\/\/(www.)?youtube\.com/i;
        var youtubeVidId = /v=([^&]*)/i;
        var youtubeShortRegex = /http(s)?:\/\/(www.)?youtu\.be/i;
        var youtubeShortVidId = /\.be\/(.*)/i;

        var vimeoRegex = /http(s)?:\/\/(www.)?vimeo.com\/([0-9]*)/i;

        WhirlpoolPlus.util.css('.wpp_img { max-width: 100%; }');

        var vidWidth = 640;
        var vidHeight = 480;

        var displayed = {};

        $('#replies .replytext a').not('.internal').each(function () {
            var linkObject = $(this);
            var link = linkObject.prop('href');

            if (displayed[link] != true) {

                // Note: the span class wcrep1 causes the images to be omitted from quotes

                if (imageEnabled && imageMatchRegex.test(link)) {
                    // Basic Image Match
                    linkObject.before('<br /><span class="wcrep1"><a href="' + link + '" target="_blank"><img src="' + link + '" alt="' + link + '" class="wpp_img"></a></span><br />');
                    if (WhirlpoolPlus.util.get('hideembedurl')) {
                        linkObject.attr("style", "color:#eee !important;cursor:default;background:none !important;");
                    };
                } else if (imageEnabled && imgurRegex.test(link)) {
                    // Imgur Embed
                    var linkSegments = imgurRegex.exec(link);

                    if (linkSegments[2]) {
                        linkSegments = linkSegments[2].split('/');

                        //Check for album embeds
                        if ((linkSegments[0] != 'gallery') && (linkSegments[0] != 'a')) {
                            linkObject.before('<br /><span class="wcrep1"><a href="' + link + '" target="_blank"><img src="https://i.imgur.com/' + linkSegments[linkSegments.length - 1] + '.jpg" alt="' + link + '" class="wpp_img"></a></span><br />');
                            if (WhirlpoolPlus.util.get('hideembedurl')) {
                                linkObject.attr("style", "color:#eee !important;cursor:default;background:none !important;");
                            }
                        } else {
                            linkObject.before('<br /><span class="wcrep1"><blockquote class="imgur-embed-pub" lang="en" data-id="a/' + linkSegments[linkSegments.length - 1] + '"></blockquote><script async src="//s.imgur.com/min/embed.js" charset="utf-8"></script></span><br />');
                        }
                    }
                } else if (videoEnabled && youtubeRegex.test(link)) {
                    // Youtube Embed (part 1 - full links)
                    var linkSegments = youtubeVidId.exec(link);

                    if (linkSegments && linkSegments[1]) {
                        linkObject.before('<br /><span class="wcrep1"><iframe src="https://www.youtube.com/embed/' + linkSegments[1] + '" width="' + vidWidth + '" height="' + vidHeight + '" frameborder="0" allowfullscreen></iframe></span><br />');
                        if (WhirlpoolPlus.util.get('hideembedurl')) {
                            linkObject.attr("style", "color:#eee !important;cursor:default;background:none !important;");
                        }
                    }
                } else if (videoEnabled && youtubeShortRegex.test(link)) {
                    // Youtube Embed (part 2 - short links)
                    var linkSegments = youtubeShortVidId.exec(link);

                    if (linkSegments && linkSegments[1]) {
                        linkObject.before('<br /><span class="wcrep1"><iframe src="https://www.youtube.com/embed/' + linkSegments[1] + '" width="' + vidWidth + '" height="' + vidHeight + '" frameborder="0" allowfullscreen></iframe></span><br />');
                        if (WhirlpoolPlus.util.get('hideembedurl')) {
                            linkObject.attr("style", "color:#eee !important;cursor:default;background:none !important;");
                        }
                    }
                } else if (videoEnabled && vimeoRegex.test(link)) {
                    // Vimeo Embed
                    var linkSegments = vimeoRegex.exec(link);

                    if (linkSegments && linkSegments[3]) {
                        linkObject.before('<br /><span class="wcrep1"><iframe src="https://player.vimeo.com/video/' + linkSegments[3] + '" width="' + vidWidth + '" height="' + vidWidth + '" frameborder="0" allowfullscreen></iframe></span><br />');
                        if (WhirlpoolPlus.util.get('hideembedurl')) {
                            linkObject.attr("style", "color:#eee !important;cursor:default;background:none !important;");
                        }
                    }
                }

                displayed[link] = true;
            }
        });
    },

    penaltyBoxCss: function () {
        return '.penalty_box .replyuser { background-image:url(' + WhirlpoolPlus.util.image('light_gradient') + ')!important; background-repeat: repeat !important; background-color: #fff !important; } ';
    },

    penaltyBoxHighlight: function (reply) {
        var groupText = reply.find('.usergroup').text();

        if (groupText.indexOf('penalty box') >= 0 || groupText.indexOf('Banned') >= 0) {
            reply.addClass('penalty_box');
        }
    },

    /*auraReset: function() {
        if (WhirlpoolPlus.util.get('resetAuraVote')) {
            $('.voteblock').each(function() {
                var block = $(this);
                var replyId = $(block.closest('div.reply')).prop('id').split('rr')[1];
                var clickFunction = block.children('span.vote1').attr('onclick').replace(',1);',',0);');
                $.ajax({
                    url: "/forum/ajax.cfm",
                    type : 'POST',
                    data: {action:"uservote", u:userid, v:vote},
                    success: function() {
                        $(that).removeClass("waiting");
                        $("#replies div.user"+userid+" div.voteblock").removeClass("crusty voted1 voted2 voted4 voted5").addClass("voted"+vote);
                    }
                });
                block.children('span.vote1').before(' <span class="vote vote0" onclick="' + clickFunction + '" title="reset vote">?</span> ');
            });
        }
    },*/


    whimArchiveSort: function () {
        if (WhirlpoolPlus.util.get('whimArchiveSort')) {
            WhirlpoolPlus.util.css('#content > div > table > tbody > tr { background-color: #EEF0F8; } ');
            $('tr[style="padding-right:10px; color:black;"]').css('display', 'none');

            var whimTRsParent = document.querySelector('#content>div>table>tbody');
            var whimTRs = whimTRsParent.querySelectorAll('tr[bgcolor]');

            var plainArr = [];

            var wt = whimTRs
            for (var k in wt) {
                if (!wt.hasOwnProperty(k)) continue;
                var item = wt[k]
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

            plainArr.forEach(function (item, index, array) {
                whimTRsParent.appendChild(item.tr);
            });

        }
    },

    changeLinks: function () {
        $('a[href*="whirlpool.net.au/whim"]').each(function () {
            var link = $(this);
            var parts = /whirlpool.net.au\/(whim)\/(.*)/.exec(link.prop('href'));

            link.prop('href', '//forums.whirlpool.net.au/' + parts[1] + '/' + parts[2]);
        });

        if (WhirlpoolPlus.util.get('defaultRecentActivityDays') != '7') {
            //have to do this twice, because there are two different ways to link to user pages used
            $('a[href*="forums.whirlpool.net.au/user/"]:not([href*="?"])').each(function () {
                var link = $(this);
                link.prop('href', link.prop('href') + '?days=' + WhirlpoolPlus.util.get('defaultRecentActivityDays'));
            });
            $('a[href^="/user/"]:not([href*="?"])').each(function () {
                var link = $(this);
                link.prop('href', link.prop('href') + '?days=' + WhirlpoolPlus.util.get('defaultRecentActivityDays'));
            });
        }
    },

    extraNavLinks: function () {
        var topLinks = $('.btop');
        var bottomLinks = $('.bfoot');
        var threadNumber = WhirlpoolPlus.util.getThreadNumber();

        if (WhirlpoolPlus.util.get('links_longThread')) {
            topLinks.prepend('<a href="//forums.whirlpool.net.au/forum-replies.cfm?t=' + threadNumber + '&p=-2">Single Page Version</a>&nbsp;');
            // Already a link on the bottom bar
        }

        if (WhirlpoolPlus.util.get('links_archive')) {
            topLinks.prepend('<a href="//forums.whirlpool.net.au/archive/' + threadNumber + '">Archive</a>&nbsp;');
            bottomLinks.prepend('<a class="blink" href="//forums.whirlpool.net.au/archive/' + threadNumber + '">Archive</a>&nbsp;');
        }

        if (WhirlpoolPlus.util.get('links_originalPoster')) {
            var opPost = $('.op:first').parent().parent();

            if (opPost.length == 1) {
                var opid = WhirlpoolPlus.util.getReplyUserId(opPost);
                topLinks.prepend('<a href="//forums.whirlpool.net.au/forum-replies.cfm?t=' + threadNumber + '&ux=' + opid + '">OP</a>&nbsp;');
                bottomLinks.prepend('<a class="blink" href="//forums.whirlpool.net.au/forum-replies.cfm?t=' + threadNumber + '&ux=' + opid + '">OP</a>&nbsp;');
            } else {

            }
        }

        if (WhirlpoolPlus.util.get('links_mod')) {
            topLinks.prepend('<a href="//forums.whirlpool.net.au/forum-replies.cfm?um=1&amp;t=' + threadNumber + '">Mods</a>&nbsp;');
            bottomLinks.prepend('<a class="blink" href="//forums.whirlpool.net.au/forum-replies.cfm?um=1&amp;t=' + threadNumber + '">Mods</a>&nbsp;');
        }

        if (WhirlpoolPlus.util.get('links_rep')) {
            topLinks.prepend('<a href="//forums.whirlpool.net.au/forum-replies.cfm?ur=1&amp;t=' + threadNumber + '">Reps</a>&nbsp;');
            bottomLinks.prepend('<a class="blink" href="//forums.whirlpool.net.au/forum-replies.cfm?ur=1&amp;t=' + threadNumber + '">Reps</a>&nbsp;');
        }
    },

    removeLinkToLastPage: function () {
        if (WhirlpoolPlus.util.get('removeLinkToLastPage')) {
            $('.threads a').each(function () {
                this.href = this.href.replace('&p=-1&#bottom', '');
            });
        }
    },


    editSearchLinks: function () {

        $('.results .title a').each(function () {
            var link = $(this);
            link.prop('href', link.prop('href').replace('archive/', 'forum-replies.cfm?t='));
        });


    }


}

WhirlpoolPlus.feat.display = {

    _themes: {
        classic: '@import url(https://wpplus.phyco.name/cssfeed.php?theme=classic);',
        black: '@import url(https://wpplus.phyco.name/cssfeed.php?theme=black);',
        wood: '@import url(https://wpplus.phyco.name/cssfeed.php?theme=wood);',
        electrolize: '@import url(https://wpplus.phyco.name/cssfeed.php?theme=electrolize);',
        teal: '@import url(https://wpplus.phyco.name/cssfeed.php?theme=teal);'
    },

    //CSS that is included everywhere
    css: function () {
        var styles = '';

        var theTheme = WhirlpoolPlus.util.get('display_theme');
        if (theTheme != 'default' && theTheme in this._themes) {
            styles += this._themes[theTheme];
        }

        //Custom CSS
        styles += WhirlpoolPlus.util.get('display_customCSS');

        //Widescreen
        if (WhirlpoolPlus.util.get('display_widescreen')) {
            styles += '#root, #page, #footer { width: 99.9% !important; max-width: none !important; } #topbar { width: 94% !important; max-width: none !important; } body {overflow-x: hidden !important; overflow-y: scroll !important; }';
            if (WhirlpoolPlus.util.pageType.whimWrite) {
                styles += 'table { width: 100% !important; } textarea#body { width: 100% !important; }';
            }
        }

        //Remove footer
        if (WhirlpoolPlus.util.get('display_hideFooter')) {
            styles += '#footer {display:none;}';
        }

        //Small Font in Threads
        if (WhirlpoolPlus.util.get('display_smallfont')) {
            styles += '#replylist div.reply div.replytext {font: inherit;}';
        }

        //Old Font Styles
        if (WhirlpoolPlus.util.get('display_oldfont')) {
            styles += WhirlpoolPlus.util.resource('oldfont');
        }

        //OP & Edit Prominence
        if (WhirlpoolPlus.util.get('display_opeditlarge')) {
            styles += '#replylist div.reply div.replytext div.op {font-size:20px !important;font-weight:bold !important;color:#888 !important;width:initial !important;margin: auto !important;padding-left:5px !important;} #replylist div.reply div.replytext div.edited {font-size:19px !important;width:initial !important;padding-left:5px !important;}';
        }

        //Unanswered Threads Fix for Pages Where Not Applicable
        if (WhirlpoolPlus.util.pageType.edit || WhirlpoolPlus.util.pageType.search || WhirlpoolPlus.util.pageType.reply || WhirlpoolPlus.util.pageType.watchedThreads || WhirlpoolPlus.util.pageType.newThread) {
            styles += '.showunanswered {display:none;}';
        }

        return styles;
    },

    floatSidebar: function () {
        if (WhirlpoolPlus.util.get('display_floatSidebar')) {
            var floating = true;
            var sidebarContent = $('#left');

            WhirlpoolPlus.util.css('#left.sidebarFloat { position: fixed; top: 0px; left: inherit; background-color: inherit;}');

            $(window).scroll(function () {
                if (floating) {
                    if (window.pageYOffset > 183) {
                        sidebarContent.addClass('sidebarFloat');
                    } else {
                        sidebarContent.removeClass('sidebarFloat');
                    }
                }
            }).scroll();

            $('.selected ul[style~="dashed"]').append('<li id="wpplus_undock"><a href="javascript:;"> Unfloat Sidebar (temp)</a></li>');

            $('#wpplus_undock a').click(function () {
                floating = false;
                sidebarContent.removeClass('sidebarFloat');
                $(this).parent().remove();
            });

        }
    },

    floatTopbar: function () {
        if (WhirlpoolPlus.util.get('display_floatTopbar')) {
            var floattop = true;
            var tbContent = $('#topbar');

            WhirlpoolPlus.util.css('#topbar.topfloat { position: fixed; width: 100% !important; max-width: none !important; top: 0px; z-index: 999; background: rgba(0, 0, 0, .5);}');

            $(window).scroll(function () {
                if (floattop) {
                    if (window.pageYOffset > 0) {
                        tbContent.addClass('topfloat');
                    } else {
                        tbContent.removeClass('topfloat');
                    }
                }
            }).scroll();

        };

    },

    /*watchedAlert : function() {
        var unreadCount = WhirlpoolPlus.util.get('watchedThreadsUnread');
        
        $.ajax({
            type: 'GET',
            url: 'https://whirlpool.net.au/api/?key=' + WhirlpoolPlus.util.get('whirlpoolAPIKey') + '&get=watched&watchedmode=0&output=json',
            success: function (data, textStatus, response) {

                if (response.status == 200) {
                    var threads = JSON.parse(response.responseText)!='{"WATCHED":[]}';

                    WhirlpoolPlus.util.set('watchedThreadsUnread', 1);

                    if (typeof callback == 'function') {
                        callback();
                    }
                } else {
                    alert('WP+ Watched Thread Alert \n Whirlpool API Error: ' + response.responseText);
                }

            },
            error: function (response) {
                alert('WP+ Watched Thread Alert \n Whirlpool API Error: ' + response.responseText);
            }
            });
        
        else {WhirlpoolPlus.util.set('watchedThreadsUnread', 0);
        
        if (WhirlpoolPlus.util.get('display_watchedAlert') && unreadCount != '0') {
            WhirlpoolPlus.util.notify('You have unread <a href="//forums.whirlpool.net.au/forum/?action=watched">watched threads</a>', true);
        }
    },*/

    whimAlert: function () {
        if (WhirlpoolPlus.util.get('display_whimAlert') && $('#menu_whim.unread').text()) {
            WhirlpoolPlus.util.notify('You have an unread <a href="//whirlpool.net.au/whim/">whim</a>', true);
        }
    },

    wpPlusLogo: function () {
        $('.copyright').append('<dt><br /><img src="'
            + WhirlpoolPlus.util.image('wp_plus_logo') + '" alt="Whirlpool Plus" /></dt><dd>Extra Awesomeness added with '
            + '<a href="//whirlpool.net.au/wiki/whirlpool_plus">Whirlpool Plus ' + WhirlpoolPlus.about.versionText() + '</a></dd>');
    },

    poweredby: function () {
        if (WhirlpoolPlus.util.get('display_poweredby')) {
            $('#bignumbers').prepend($('<dl><dt>Powered By</dt><dd class="pwrdby"></dd></dl>'));
            $('dd.pwrdby').load('https://wpplus.phyco.name/rdmtext/rantex.php');
        }
    },

    oldProfile: function () {
        if (WhirlpoolPlus.util.get('display_oldProfile')) {
            $('#threads').detach().insertBefore('#userprofile script:contains("keypress")');
            $('#userprofile h2:lt(1)').detach().insertBefore('#threads');
        }
    },

    userPageInfoToggle: function () {
        if (WhirlpoolPlus.util.get('display_userPageInfoToggle')) {
            var h2s = $('#userprofile h2:lt(2)');
            h2s.css('cursor', 'pointer').next('table').hide();
            h2s.click(function () {
                $(this).next('table').slideToggle();
            });
        }
    },

    superProfile: function () {
        if (WhirlpoolPlus.util.get('display_superProfile') == 'all') {
            $('#threads').append('<p><h2>All Watched Threads</h2>');
            $('#threads').append($('<div id="watchedthreads">').load('https://forums.whirlpool.net.au/forum/?action=watched&showall=1 #content form'));
            WhirlpoolPlus.util.css('ul.box {display:none;}');
        }
        else if (WhirlpoolPlus.util.get('display_superProfile') == 'unread') {
            $('#threads').append('<p><h2>Unread Watched Threads</h2>');
            $('#threads').append($('<div id="watchedthreads">').load('https://forums.whirlpool.net.au/forum/?action=watched #content form'));
            WhirlpoolPlus.util.css('ul.box {display:none;}');
        }
    },

    hideClosedThreads: function () {
        if (WhirlpoolPlus.util.get('display_hideClosedThreadsOnProfile')) {
            WhirlpoolPlus.util.css('.closed { display: none; }')
        }
    },
    hideThreads: function () {
        if (WhirlpoolPlus.util.get('display_hideDeletedThreads')) {
            WhirlpoolPlus.util.css('.deleted {display:none;}');
        }

        if (WhirlpoolPlus.util.get('display_hideMovedThreads')) {
            WhirlpoolPlus.util.css('.pointer {display:none;}');
        }

    },

    hidePosts: function () {
        if (WhirlpoolPlus.util.get('display_hideDeletedPosts')) {
            WhirlpoolPlus.util.css('.notice[id^="x"] {display: none;}');
        }
    },

    hideForums: function () {
        var hideThese = WhirlpoolPlus.util.get('display_hideTheseForums');

        if (hideThese != '') {
            $('#forumindex tr div.title a').each(function () {
                var url = $(this).prop('href').split('/forum/')[1];

                if (hideThese.indexOf(url) >= 0) {
                    $(this).parents('tr').eq(0).remove();
                }
            });

            $('#index h3').each(function () {
                if ($(this).next('table').height() == 0) {
                    $(this).next('table').remove();
                    $(this).remove();
                }
            });
        }
    },

    unansweredThreadsLink: function () {
        if (WhirlpoolPlus.util.get('links_unanswered')) {
            if (window.location.href.match('nr=1')) {
                var old_url = window.location.href.replace('&nr=1', '');
                $('#breadcrumb li:last').html('<a href="' + old_url + '">' + $('#breadcrumb li:last').text() + '</a>');
            } else {
                var new_url = window.location.href + (window.location.href.indexOf('?') > -1 ? '&nr=1' : '?&nr=1');
                $('#breadcrumb li:last').append(' <a href="' + new_url + '"><small class="showunanswered">(show unanswered only)</small></a> ');
            }
        }
    },

    syntaxHighlight: function () {
        if (WhirlpoolPlus.util.get('display_syntaxHighlight')) {
            $('pre').addClass("prettyprint");
            WhirlpoolPlus.util.css(WhirlpoolPlus.util.resource('prettify'));
            prettyPrint();
        }
    },

    emoticons: {
        init: function () {
            if (WhirlpoolPlus.util.get('display_emoticons_enabled')) {
                this.prep();
                this.initialise();
                $('div.bodytext > p').each(this.runOnTextNode);
            }
        },

        prep: function () {
            $(".reference a").each(function () {
                var text = $(this).text().toString().replace(/\:/, "<span>:</span>");
                $(this).html(text);
            });
        },

        icons: {
            ':angry:': WhirlpoolPlus.util.image('emoticon_angry'),
            ':glad:': WhirlpoolPlus.util.image('emoticon_blushing'),
            ':confused:': WhirlpoolPlus.util.image('emoticon_confused'),
            ':cool:': WhirlpoolPlus.util.image('emoticon_cool'),
            ':cry:': WhirlpoolPlus.util.image('emoticon_cry'),
            ':(': WhirlpoolPlus.util.image('emoticon_frown'),
            ':gasp:': WhirlpoolPlus.util.image('emoticon_gasp'),
            ':D': WhirlpoolPlus.util.image('emoticon_grin'),
            '<3': WhirlpoolPlus.util.image('emoticon_kiss'),
            ':X': WhirlpoolPlus.util.image('emoticon_lips'),
            ':shout:': WhirlpoolPlus.util.image('emoticon_shout'),
            ':snore:': WhirlpoolPlus.util.image('emoticon_sleep'),
            ':)': WhirlpoolPlus.util.image('emoticon_smile'),
            ':\\\\': WhirlpoolPlus.util.image('emoticon_smirk'),
            ':|': WhirlpoolPlus.util.image('emoticon_straight'),
            ':P': WhirlpoolPlus.util.image('emoticon_tongue'),
            ';)': WhirlpoolPlus.util.image('emoticon_wink'),
            ':star:': WhirlpoolPlus.util.image('emoticon_star')
        },

        duplicates: {
            ':-(': WhirlpoolPlus.util.image('emoticon_frown'),
            ':-D': WhirlpoolPlus.util.image('emoticon_grin'),
            ':X': WhirlpoolPlus.util.image('emoticon_lips'),
            '=)': WhirlpoolPlus.util.image('emoticon_smile'),
            ':-)': WhirlpoolPlus.util.image('emoticon_smile'),
            ':-|': WhirlpoolPlus.util.image('emoticon_straight'),
            ':-P': WhirlpoolPlus.util.image('emoticon_tongue'),
            '=P': WhirlpoolPlus.util.image('emoticon_tongue'),
            ';-)': WhirlpoolPlus.util.image('emoticon_wink'),
            ':;': WhirlpoolPlus.util.image('emoticon_wink'),
            ':-;': WhirlpoolPlus.util.image('emoticon_wink'),
            ':-\\\\': WhirlpoolPlus.util.image('emoticon_smirk'),
            '=\\\\': WhirlpoolPlus.util.image('emoticon_smirk'),
        },

        blue_icons: {
            ':~': WhirlpoolPlus.util.image('old_blue_anxious'),
            '(:': WhirlpoolPlus.util.image('old_blue_cool'),
            '-o.o-': WhirlpoolPlus.util.image('old_blue_eyes'),
            ':D': WhirlpoolPlus.util.image('old_blue_grin'),
            ':|)': WhirlpoolPlus.util.image('old_blue_happy2'),
            ':)': WhirlpoolPlus.util.image('old_blue_happy'),
            ':|(': WhirlpoolPlus.util.image('old_blue_sad2'),
            ':(': WhirlpoolPlus.util.image('old_blue_sad'),
            ':|': WhirlpoolPlus.util.image('old_blue_neutral'),
            ':ninja:': WhirlpoolPlus.util.image('old_blue_ninja'),
            ';)': WhirlpoolPlus.util.image('old_blue_smirk'),
            ':P': WhirlpoolPlus.util.image('old_blue_tongue'),
            ':star:': WhirlpoolPlus.util.image('emoticon_star')
        },

        blue_duplicates: {
            '(:': WhirlpoolPlus.util.image('old_blue_cool'),
            '-oo-': WhirlpoolPlus.util.image('old_blue_eyes'),
            ':-D': WhirlpoolPlus.util.image('old_blue_grin'),
            ':-)': WhirlpoolPlus.util.image('old_blue_happy'),
            '=)': WhirlpoolPlus.util.image('old_blue_happy'),
            ':-(': WhirlpoolPlus.util.image('old_blue_sad'),
            ':-|': WhirlpoolPlus.util.image('old_blue_neutral'),
            ':ninja:': WhirlpoolPlus.util.image('old_blue_ninja'),
            ':\\\\': WhirlpoolPlus.util.image('old_blue_smirk'),
            ':-\\\\': WhirlpoolPlus.util.image('old_blue_smirk'),
            '=\\\\': WhirlpoolPlus.util.image('old_blue_smirk'),
            ';-)': WhirlpoolPlus.util.image('old_blue_smirk'),
            ':-P': WhirlpoolPlus.util.image('old_blue_tongue'),
            '=P': WhirlpoolPlus.util.image('old_blue_tongue'),
        },

        getIconSet: function (useDuplicates) {

            mainIcons = {};
            duplicateIcons = {};

            if (WhirlpoolPlus.util.get('display_emoticons_blue')) {
                $.extend(mainIcons, this.blue_icons);
                $.extend(duplicateIcons, this.blue_duplicates);
            } else {
                $.extend(mainIcons, this.icons);
                $.extend(duplicateIcons, this.duplicates);
            }

            if (useDuplicates) {
                $.extend(mainIcons, duplicateIcons);
            }

            return mainIcons;

        },

        regex: {},
        currentIconSet: {},

        initialise: function () {
            this.currentIconSet = this.getIconSet(true);

            for (icon in this.currentIconSet) {
                var regkey = icon;
                regkey = regkey.replace(/</g, "&lt;");
                regkey = regkey.replace(/>/g, "&gt;");
                regkey = regkey.replace(/\(/g, "\\(");
                regkey = regkey.replace(/\)/g, "\\)");
                regkey = regkey.replace(/\[/g, "\\[");
                regkey = regkey.replace(/\]/g, "\\]");
                regkey = regkey.replace(/\|/g, "\\|");

                regkey = '(\\s|>)' + regkey;

                this.regex[icon] = new RegExp(regkey, 'g');
            }


        },

        runOnTextNode: function () {
            node = $(this);

            var nodeValue = node.html();
            var smiley = WhirlpoolPlus.feat.display.emoticons.run(nodeValue)

            if (smiley.length > 1 && smiley != nodeValue) {
                node.html(smiley);
            }
        },

        run: function (text) {
            if (!WhirlpoolPlus.util.get('display_emoticons_enabled')) {
                return text;
            }

            var smiley = ' ' + text;

            for (icon in (WhirlpoolPlus.feat.display.emoticons.currentIconSet)) {
                // There's a rather nasty hack here to stop emoticons messing with the inbuilt quote feature.
                // We pack the original symbol into a hidden span- this will be stripped by the quote function, but the contents will be kept
                // We then wrap span class="wcrep1" around the image, which will cause it to be omitted from the quote
                smiley = smiley.replace(WhirlpoolPlus.feat.display.emoticons.regex[icon],
                    '$1' + '<span style="display:none">' + icon + '</span><span class="wcrep1"><img src ="' + WhirlpoolPlus.feat.display.emoticons.currentIconSet[icon] + '" alt="' + icon + '" align="baseline" /></span>');
            }

            return smiley;

        },
    },

}

WhirlpoolPlus.feat.avatar = {

    avatariseRow: function (replyTr) {
        if (WhirlpoolPlus.util.get('avatar_static') || WhirlpoolPlus.util.get('avatar_animated')) {
            var userNumber = WhirlpoolPlus.util.getReplyUserId(replyTr);
            replyTr.find('.replyuser-inner').prepend($('<div class="wpp_avatar wpp_avatar_' + userNumber + '"><a class="wpp_avatar_link" href="/user/' + userNumber + '" /></div>'));
            replyTr.addClass('wpp_avatar_reply_' + userNumber);
        }
    },

    avatariseWhim: function () {
        if (WhirlpoolPlus.util.get('avatar_static') || WhirlpoolPlus.util.get('avatar_animated')) {
            replyTr = $(this);
            var userNumber = WhirlpoolPlus.util.getReplyUserId(replyTr);
            replyTr.find('.replyuser-inner').prepend($('<div class="wpp_avatar wpp_avatar_' + userNumber + '"><a class="wpp_avatar_link" href="/user/' + userNumber + '" /></div>'));
            replyTr.addClass('wpp_avatar_reply_' + userNumber);
        }
    },

    css: function () {
        if (WhirlpoolPlus.util.get('avatar_static')) {
            WhirlpoolPlus.util.css('@import url(https://wpplus.endorph.net/avatars/avatar_lite.css?' + new Date().getTime() + ');');
        }

        if (WhirlpoolPlus.util.get('avatar_animated')) {
            WhirlpoolPlus.util.css('@import url(https://wpplus.endorph.net/avatars/animatedavatar_lite.css?' + new Date().getTime() + ');');
        }

        return '.wpp_avatar_link { margin:0 auto; display: block; width: 100%; height: 100%; } .wpp_avatar {display: block; background-repeat: no-repeat; margin:0 auto;}';
    },

    getUserAvatar: function (id, type, callback) {
        $.ajax({
            type: 'GET',
            url: 'https://wpplus.endorph.net/avatars/getAvatar.php?id=' + id + '&type=' + type,
            success: callback
        });
    },

    updateAvatar: function (apiKey, url, callback) {
        $.ajax({
            type: 'POST',
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            data: 'apiKey=' + apiKey + '&action=update&url=' + url,
            url: 'https://wpplus.endorph.net/avatars/remote.php',
            success: callback
        });
    },

    removeAvatar: function (apiKey, type, callback) {
        $.ajax({
            type: 'POST',
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            data: 'apiKey=' + apiKey + '&action=remove&type=' + type,
            url: 'https://wpplus.endorph.net/avatars/remote.php',
            success: callback
        });
    }
}

WhirlpoolPlus.feat.recentActivityOverlay = {

    run: function () {
        if (WhirlpoolPlus.util.get('recentActivityOverlay')) {
            this.displayOverlay();
            this.updateData(function () {
                WhirlpoolPlus.feat.recentActivityOverlay.formatData();
                WhirlpoolPlus.feat.recentActivityOverlay.loadDataIntoOverlay();
            }, false);
        }
    },

    getData: function (callback) {

        if (WhirlpoolPlus.util.get('whirlpoolAPIKey') == '') {
            alert('WP+ Recent Activity Overlay\n You don\'t seem to have entered your API key in the setting dialog');
            return;
        }

        $.ajax({
            type: 'GET',
            url: 'https://whirlpool.net.au/api/?key=' + WhirlpoolPlus.util.get('whirlpoolAPIKey') + '&output=json&get=recent&recentdays=' + WhirlpoolPlus.util.get('recentActivityOverlay_days'),
            success: function (data, textStatus, response) {

                if (response.status == 200) {
                    var threads = JSON.parse(response.responseText).RECENT;

                    WhirlpoolPlus.util.set('recentActivityOverlay_data', threads);

                    if (typeof callback == 'function') {
                        callback();
                    }
                } else {
                    alert('WP+ Recent Activity Overlay \n Whirlpool API Error: ' + response.responseText);
                }

            },
            error: function (response) {
                alert('WP+ Recent Activity Overlay \n Whirlpool API Error: ' + response.responseText);
            }
        });
    },

    formatData: function () {
        var threads = WhirlpoolPlus.util.get('recentActivityOverlay_data');

        var unreadHtml = '';
        var readHtml = '';
        var link = '';
        var unread = false;
        var anyUnread = false;

        for (i in threads) {
            unread = false;

            if (WhirlpoolPlus.util.get('wlr_enabled') == 'all' || WhirlpoolPlus.util.get('wlr_enabled') == 'forums' || WhirlpoolPlus.util.get('wlr_enabled') == 'profile' || WhirlpoolPlus.util.get('wlr_enabled') == 'watched') {
                threadData = WhirlpoolPlus.feat.whirlpoolLastRead.loadThreadData(threads[i].ID);

                if (threadData == false) {
                    link = '/forum-replies.cfm?t=' + threads[i].ID;
                } else {
                    if (threads[i].REPLIES + 1 > threadData['t']) {
                        unread = true;
                    }

                    if (threadData['o']) {
                        link = '/forum-replies.cfm?r=' + threadData['o'] + '#r' + threadData['o']; //used by Simon's jumpToReplyId method, so preferred
                    } else {
                        link = '/forum-replies.cfm?t=' + threads[i].ID + '&p=' + threadData['p'] + '#r' + threadData['t'];
                    }
                }
            } else {
                link = '/forum-replies.cfm?t=' + threads[i].ID;
            }

            if (unread) {
                unreadHtml += '<p class="recentActivityOverlayUnread"><a href="' + link + '">' + threads[i].TITLE + '</a></p>';
                anyUnread = true;
            } else {
                readHtml += '<p><a href="' + link + '">' + threads[i].TITLE + '</a></p>';
            }

        }

        WhirlpoolPlus.util.set('recentActivityOverlay_html', unreadHtml + readHtml);

        if (anyUnread) {
            $('#recentActivityUnreadThreads').show();
        } else {
            $('#recentActivityUnreadThreads').hide();
        }

    },

    displayOverlay: function () {
        $('body').append('<div id="recentActivityDropdownContainer"><div id="recentActivity"><div id="recentActivityContent">Loading...</div><img id="recentActivityReload" alt="Reload" src="' + WhirlpoolPlus.util.image('reload') + '" /></div><div id="recentActivityHandle">Recent Activity <img src="' + WhirlpoolPlus.util.image('emoticon_star') + '" alt="Unread threads" id="recentActivityUnreadThreads" /></div></div>');


        var activityOpen = false;
        var activityArea = $('#recentActivity');
        $('#recentActivityHandle').click(function () {
            if (activityOpen) {
                activityArea.hide();
                activityOpen = false;
            } else {
                activityArea.show();
                activityOpen = true;
            }
        });

        $('#recentActivityReload').click(function () {
            $('#recentActivityContent').html('Loading...');
            WhirlpoolPlus.feat.recentActivityOverlay.updateData(function () {
                WhirlpoolPlus.feat.recentActivityOverlay.formatData();
                WhirlpoolPlus.feat.recentActivityOverlay.loadDataIntoOverlay();
            }, true);
        });
    },

    css: function () {
        return '#recentActivityDropdownContainer { position: fixed; z-index: 1000; top: 0px; left: 50%; width: 20%; margin-left: -10%; color: #fff; }' +
        '#recentActivityHandle { background-color: #3A437B; text-align: center; border-bottom-right-radius: 40px 20px; border-bottom-left-radius: 40px 20px; padding-top: 5px; box-shadow: 2px; 0 8px rgba(255, 255, 255, 0.5); width: 150px; margin: 0 auto; cursor: pointer; font-family: Georgia,Cambria,Charter,\'Century Schoolbook\',serif;  height: 25px; font-weight: bold; }' +
        '#recentActivity { overflow: hidden; color: #333; max-height: 600px; display: none; background-color: #e5e5e5; text-align: center; border: solid 2px #3A437B; border-bottom-right-radius: 40px 20px; border-bottom-left-radius: 40px 20px; border-top: none; padding-top: 5px; }' +
        '#recentActivity a { color: #333; }' +
        '.recentActivityOverlayUnread { font-weight: 900; }' +
        '#recentActivityReload { width: 20px; height: 20px; float: right; margin-top: -30px; margin-right: 30px; cursor: pointer; }' +
        '#recentActivityUnreadThreads { width: 10px; height: 10px; display: none; }' +
        '#recentActivityContent { overflow-y: scroll; height: 200px;  margin-top: -4px; }';
    },

    updateData: function (callback, forceUpdate) {
        var updateInterval = WhirlpoolPlus.util.get('recentActivityOverlay_updateInterval');
        var lastUpdate = WhirlpoolPlus.util.get('recentActivityOverlay_lastUpdated');
        var currentTime = (new Date).getTime();

        if (forceUpdate || updateInterval * 60 * 1000 + lastUpdate < currentTime) {
            this.getData(callback);
            WhirlpoolPlus.util.set('recentActivityOverlay_lastUpdated', currentTime);
        } else {
            if (typeof callback == 'function') {
                callback();
            }
        }

    },

    loadDataIntoOverlay: function () {
        $('#recentActivityContent').html(WhirlpoolPlus.util.get('recentActivityOverlay_html'));
    },

}

WhirlpoolPlus.feat.whimLink = {
    WhimUser: function (reply) {
        if (WhirlpoolPlus.util.get('whimLink')) {
            var userNumber = WhirlpoolPlus.util.getReplyUserId(reply);
            reply.find('.actions').append($(' <span class="bar"> |</span> <a title="whim this user" href="//forums.whirlpool.net.au/whim/?action=write&to=' + userNumber + '" target="_blank">Whim user</a>'));
        }
    }
},

WhirlpoolPlus.feat.numberPosts = {
    NumberPost: function (reply) {
        if (WhirlpoolPlus.util.get('numberPosts')) {
            var postNumber = WhirlpoolPlus.util.getReplyNumber(reply);
            reply.find('.tools').prepend($('<span class="postnumber" style="color:#99c;">Post <b>#' + postNumber + '</b> In This Thread</span>'));
        }
    }
},

WhirlpoolPlus.feat.ignoreUser = {

    userIgnore: function (trParent) {
        if (!WhirlpoolPlus.util.get('hiddenUsers_enabled')) {
            return;
        }

        if (trParent.is(':hidden')) {
            return;
        }

        var tdBodyUser = trParent.find('.replyuser-inner');
        var uNum = WhirlpoolPlus.util.getReplyUserId(trParent);
        var uName = trParent.find('.bu_name').text();

        //add hide smiley (X)
        if ($('span[title="hide user"]', tdBodyUser).length == 0) {
            var hideUser = $('<span title="hide user" class="vote">X</span>');

            if ($('.voteblock', tdBodyUser).length != 0) {
                //normal forum
                tdBodyUser.find('.voteblock').prepend(hideUser);
            } else {
                //in ItN, need to add voteblock
                var voteblock = $('<div class="voteblock">');
                voteblock.append(hideUser);
                tdBodyUser.append(voteblock);
            }

            hideUser.click(function () {
                if ($.inArray(uNum, WhirlpoolPlus.util.get('hiddenUsers')) == -1) {
                    //Not currently in array
                    var hiddenUsers = WhirlpoolPlus.util.get('hiddenUsers');
                    hiddenUsers.push(uNum + ' (' + uName + ')');
                    WhirlpoolPlus.util.set('hiddenUsers', hiddenUsers);


                    $('#replies .reply').each(function () {
                        WhirlpoolPlus.feat.ignoreUser.userIgnore($(this));
                    });
                }
            });
        }


        //check if this post is by a user we want to hide
        //need uNum as a string
        if ($.inArray(uNum + ' (' + uName + ')', WhirlpoolPlus.util.get('hiddenUsers')) != -1) {
            //hide this post
            this.hideIgnoredPost(trParent, uNum + ' (' + uName + ')');
        }
    },

    //utility function to make hiding posts easier
    hideIgnoredPost: function (trParent, uNum) {
        //do we want to hide completely?
        if (WhirlpoolPlus.util.get('hiddenUsers_remove')) {
            //bye bye
            trParent.hide();
        } else {
            //display the deleted message
            var userName = trParent.find('.bu_name').text();
            var postDate = trParent.find('.date').not('.edited').text().replace('posted ', '');
            var rowId = trParent.prop('id');

            trParent.hide();

            var hiddenPostNotice = $('<div class="notice" id="' + rowId + '"><div class="replyuser">User #' + uNum + ' &nbsp; <a style="color:black" href="//forums.whirlpool.net.au/user/' + uNum + '"><b>' + userName + '</b></a></div><div class="replytools">' + postDate + '</div><i>This users posts are hidden by you (WP+).</i> </div>');

            var showLink = $('<a href="javascript:void(0)">Show post (temporary)</a>').click(function () {
                trParent.show();
                hiddenPostNotice.hide();
            });


            hiddenPostNotice.append(showLink);

            trParent.before(hiddenPostNotice);
        }
    },

}

WhirlpoolPlus.feat.spinnerMenu = {

    run: function () {
        switch (WhirlpoolPlus.util.get('spinnerMenu')) {
            case 'spinner':
                this.spinner();
                break;

            case 'rightClick':
                this.rightClick();
                break;
        }
    },

    css: function () {
        var sidebar = $('#left');
        var whereMenu
        if (WhirlpoolPlus.util.get('display_widescreen')) {
            whereMenu = sidebar.width() - 4 + "px";
        } else {
            whereMenu = sidebar.offset().left + sidebar.width() - 4 + "px";
        }

        return "#pmenu {padding:0;list-style-type: none; position:fixed;z-index:50;height:19px;overflow:hidden;width:18px;left:" + whereMenu + ";}" +
            "#pmenu img{margin;0;padding:0;border:none;background:transparent;width:16px;} #pmenu ul {padding:0; margin:0; list-style-type: none; width:101px;}" +
            "#pmenu li {position:relative;z-index:51;}" + "#pmenu a{display:block;width:140px;font-weight:bold;font-size:12px; color:#FFFFFF; height:26px; line-height:26px; " +
            "text-decoration:none; text-indent:5px; background:#616CA3; border:1px solid orange;white-space: nowrap; }" + "#pmenu>li>ul>li>a{background:#EDEDED;color:#000;}" +
            "#pmenu li:hover > a {background:#dfd7ca; color:#c00;}" + "#pmenu li ul {display: none;} " +
            "#pmenu li:hover > ul {display:block; position:absolute; top:0; z-index:52;margin-left:140px;}";
    },

    _menu: null,

    generateMenu: function () {

        this._menu = $('<ul id="pmenu">');

        var spinner = WhirlpoolPlus.util.image('small_whirl_logo');
        var uNumber = WhirlpoolPlus.util.getUserId();

        if (WhirlpoolPlus.util.get('spinnerMenu_settingsLocation') == 'top') {
            this._menu.html('<img id="menuSpinner" src="' + spinner + '" />' + '<li><a href="#" id="settingsSpinnerLink">WP+ Settings</a></li><li><a href="//forums.whirlpool.net.au/user/' + uNumber + '">WP User</a>' + '<ul> ' + '<li><a href="//forums.whirlpool.net.au/user/' + uNumber + '">Your Posts</a></li> ' + '<li><a href="//forums.whirlpool.net.au/user/?action=online">Notable Identities</a></li> ' + '<li><a href="//forums.whirlpool.net.au/whim/?action=inbox">Inbox</a></li> ' + '<li><a href="//forums.whirlpool.net.au/whim/?action=outbox">Outbox</a></li> ' + '<li><a href="//forums.whirlpool.net.au/whim/?action=contacts">Contacts</a></li> ' + '<li><a href="//forums.whirlpool.net.au/forum/?action=watched">Watched Threads</a></li> ' + '<li><a href="//forums.whirlpool.net.au/forum/?action=threads_search">Thread Search</a></li> ' + '<li><a href="//whirlpool.net.au/profile/">Account Settings</a></li> ' + '<li><a href="//whirlpool.net.au/profile/?a=logout&logout=' + uNumber + '">Log out</a></li> ' + '</ul> ' + '</li> ');
        } else if (WhirlpoolPlus.util.get('spinnerMenu_settingsLocation') == 'underuser') {
            this._menu.html('<img id="menuSpinner" src="' + spinner + '" />' + '<li><a href="//forums.whirlpool.net.au/user/' + uNumber + '">WP User</a>' + '<ul> ' + '<li><a href="//forums.whirlpool.net.au/user/' + uNumber + '">Your Posts</a></li> ' + '<li><a href="//forums.whirlpool.net.au/user/?action=online">Notable Identities</a></li> ' + '<li><a href="//forums.whirlpool.net.au/whim/?action=inbox">Inbox</a></li> ' + '<li><a href="//forums.whirlpool.net.au/whim/?action=outbox">Outbox</a></li> ' + '<li><a href="//forums.whirlpool.net.au/whim/?action=contacts">Contacts</a></li> ' + '<li><a href="//forums.whirlpool.net.au/forum/?action=watched">Watched Threads</a></li> ' + '<li><a href="//forums.whirlpool.net.au/forum/?action=threads_search">Thread Search</a></li> ' + '<li><a href="//whirlpool.net.au/profile/">Account Settings</a></li> ' + '<li><a href="//whirlpool.net.au/profile/?a=logout&logout=' + uNumber + '">Log out</a></li> ' + '</ul> ' + '</li><li><a href="#" id="settingsSpinnerLink">WP+ Settings</a></li>');
        } else {
            this._menu.html('<img id="menuSpinner" src="' + spinner + '" />' + '<li><a href="//forums.whirlpool.net.au/user/' + uNumber + '">WP User</a>' + '<ul> ' + '<li><a href="//forums.whirlpool.net.au/user/' + uNumber + '">Your Posts</a></li> ' + '<li><a href="//forums.whirlpool.net.au/user/?action=online">Notable Identities</a></li> ' + '<li><a href="//forums.whirlpool.net.au/whim/?action=inbox">Inbox</a></li> ' + '<li><a href="//forums.whirlpool.net.au/whim/?action=outbox">Outbox</a></li> ' + '<li><a href="//forums.whirlpool.net.au/whim/?action=contacts">Contacts</a></li> ' + '<li><a href="//forums.whirlpool.net.au/forum/?action=watched">Watched Threads</a></li> ' + '<li><a href="//forums.whirlpool.net.au/forum/?action=threads_search">Thread Search</a></li> ' + '<li><a href="//whirlpool.net.au/profile/">Account Settings</a></li> ' + '<li><a href="//whirlpool.net.au/profile/?a=logout&logout=' + uNumber + '">Log out</a></li> ' + '</ul> ' + '</li> ');
        }

        var newUL2;
        $('.forumlist').each(function () {
            $(this).children().each(function () {
                if (this.tagName == 'DT') {
                    var newLI1 = $('<li>');
                    var newA1 = $('<a href="#">');
                    newUL2 = $('<ul>');
                    newA1.text($(this).text());
                    newLI1.append(newA1);
                    newLI1.append(newUL2);
                    WhirlpoolPlus.feat.spinnerMenu._menu.append(newLI1);
                } else {
                    var newLI2 = $('<li>');
                    newLI2.html($(this).html());
                    newUL2.append(newLI2);
                }
            });
        });

        if (WhirlpoolPlus.util.get('spinnerMenu_settingsLocation') == 'bottom') {
            this._menu.append('<li><a href="#" id="settingsSpinnerLink">WP+ Settings</a></li>');
        }

        this._menu.find('*').addClass('notarget');

        var displayedMouseOver = false;
        var displayedClick = false;

        this._menu.mouseenter(function () {
            if (!displayedClick) {
                $(this).css({ 'height': 'auto', 'overflow': 'visible' });
                displayedMouseOver = true;
                displayedClick = false;
            }
        });

        this._menu.find('#menuSpinner').click(function () {
            $(this).css({ 'height': 'auto', 'overflow': 'visible' });
            displayedMouseOver = false;
            displayedClick = true;

            return false;
        });

        this._menu.find('a[href!="#"], a#settingsSpinnerLink').click(function () {
            $(WhirlpoolPlus.feat.spinnerMenu._menu).css({ 'height': '19px', 'overflow': 'hidden' });
            displayedMouseOver = false;
            displayedClick = false;
            return true;
        });

        this._menu.mouseleave(function () {
            if (displayedMouseOver) {
                $(WhirlpoolPlus.feat.spinnerMenu._menu).css({ 'height': '19px', 'overflow': 'hidden' });
                displayedMouseOver = false;
            }
            return true;
        });

        this._menu.find('a[href="#"]').click(function (event) {
            event.stopPropagation();
            return false;
        });

        $('html').click(function () {
            if (displayedClick) {
                $(WhirlpoolPlus.feat.spinnerMenu._menu).css({ 'height': '19px', 'overflow': 'hidden' });
                displayedClick = false;
            }
            return true;
        });

    },

    rightClick: function () {

        this.generateMenu();

        document.addEventListener('mouseup', function (e) {

            if (e.which == 3 && e.target.tagName != 'A' && e.target.tagName != 'TEXTAREA') {

                WhirlpoolPlus.feat.spinnerMenu._menu.remove();
                $('body').prepend(WhirlpoolPlus.feat.spinnerMenu._menu);
                $('#settingsSpinnerLink').click(function () { WhirlpoolPlus.settings._launch(); return false; })
                $('#menuSpinner').remove();
                WhirlpoolPlus.feat.spinnerMenu._menu[0].style.position = 'absolute';
                WhirlpoolPlus.feat.spinnerMenu._menu[0].style.left = '' + e.pageX - 250 + 'px';
                WhirlpoolPlus.feat.spinnerMenu._menu[0].style.top = '' + e.pageY + 'px';
                WhirlpoolPlus.feat.spinnerMenu._menu[0].style.overflow = 'visible';

            }
            if (e.which == 1 && $('#pmenu')[0] && e.target.className != 'notarget') {

                WhirlpoolPlus.feat.spinnerMenu._menu.remove();

            }


        },
        false);
    },

    spinner: function () {

        this.generateMenu();

        $('body').prepend(this._menu);
        $('#settingsSpinnerLink').click(function () { WhirlpoolPlus.settings._launch(); return false; })
        this._menu.css('margin', '95px 0 50px 6px');

    }

};

WhirlpoolPlus.feat.whirlpoolLastRead = {

    css: function () {
        var styles = '';
        //Post highlighting
        if (!WhirlpoolPlus.util.get('wlr_display_flipStyles')) {
            styles += '#replies #replylist .whirlpoolLastRead_readReply .replytools { margin-top: -2px; background-color: ' + WhirlpoolPlus.util.get('wlr_display_unreadPostColour') + '; background-image: none; } ';
        } else {
            styles += '#replies #replylist .whirlpoolLastRead_unreadReply .replytools { background-color: ' + WhirlpoolPlus.util.get('wlr_display_unreadPostColour') + '; background-image: none; } ';
        }

        //Tracker disable
        styles += '#wlr_disableTracker { height: 40px; width: 40px; position: fixed; top: 0px; right: 0px; border-bottom-left-radius: 30px; background-color: #3A437B; z-index: 10; } ' +
            '.wlr_disableTracker_img { width: 25px; position: relative; top: 5px; left: 10px; } ' +
            '#wlr_disableTracker_disabled { display: none; } ';


        //Thread highlighting
        styles += '.whirlpoolLastRead_unreadPosts { background: url(' + WhirlpoolPlus.util.image('gradient') + ') repeat scroll 0 0 ' + WhirlpoolPlus.util.get('wlr_display_unreadThreadColour') + ' !important; } ' +
            '.whirlpoolLastRead_noUnreadPosts { background: url(' + WhirlpoolPlus.util.image('gradient') + ') repeat scroll 0 0 ' + WhirlpoolPlus.util.get('wlr_display_readThreadColour') + ' !important; } ' +
            '#content .whirlpoolLastRead_controls a { border-bottom-color:grey; border-bottom-style:dashed; font-size: 9px; margin-top: -5px; opacity:0.3; border-bottom-width:1px; float: left; } ' +
            '#content a.whirlpoolLastRead_markAsRead { margin-top: -8px; } ';

        return styles;
    },

    trackThisThread: true,

    saveThreadData: function (threadNumber, threadReplyNumber, overallReplyNumber) {
        WhirlpoolPlus.util.sync.set(threadNumber, { t: threadReplyNumber, o: overallReplyNumber });
    },

    loadThreadData: function (threadNumber) {
        var raw = WhirlpoolPlus.util.sync.get(threadNumber);
        if (raw !== null) {
            return raw;
        } else {
            return false;
        }
    },

    forumReplies: function () {
        var lastReadReplyNumber = WhirlpoolPlus.feat.whirlpoolLastRead.loadThreadData(WhirlpoolPlus.util.getThreadNumber())['t'];
        $('div#replies .reply').not(':hidden').each(function () {
            var reply = $(this);
            var replyNumber = $(reply.prevAll('a[name!="bottom"]')[1]).prop('name').slice(1);

            if (parseInt(replyNumber) <= parseInt(lastReadReplyNumber)) {
                reply.addClass('whirlpoolLastRead_readReply');
            } else {
                reply.addClass('whirlpoolLastRead_unreadReply');
            }
        });

        // The "disable tracking" button
        if (WhirlpoolPlus.util.get('wlr_tempDisable')) {

            $('body').append('<div id="wlr_disableTracker">' +
            '<img class="wlr_disableTracker_img" id="wlr_disableTracker_enabled" src="' + WhirlpoolPlus.util.image('check') + '" title="WLR Tracker Enabled" />' +
            '<img class="wlr_disableTracker_img" id="wlr_disableTracker_disabled" src="' + WhirlpoolPlus.util.image('cross') + '" title="WLR Tracker Disabled" />' +
            '</div>');

            $('#wlr_disableTracker').click(function () {

                $('.wlr_disableTracker_img').toggle();

                if (WhirlpoolPlus.feat.whirlpoolLastRead.trackThisThread == true) {
                    WhirlpoolPlus.feat.whirlpoolLastRead.trackThisThread = false;
                } else {
                    WhirlpoolPlus.feat.whirlpoolLastRead.trackThisThread = true;
                }

            });
        }


        var lowestViewHeight = window.innerHeight + window.pageYOffset;

        $(window).scroll(function (e) {
            var currentViewHeight = window.innerHeight + window.pageYOffset;
            if (currentViewHeight > lowestViewHeight) {
                lowestViewHeight = currentViewHeight;
            }
        });



        $(window).bind('unload', function () {

            if (WhirlpoolPlus.feat.whirlpoolLastRead.trackThisThread == false) {
                return;
            }

            //need to find the last read reply
            var replies = $('div#replies .reply, div#replies .notice').not('.preview');

            var lastReadReply;

            replies.each(function () {
                reply = $(this);

                var positionOfBottom = reply.offset().top + reply.height();
                if (positionOfBottom < lowestViewHeight) {
                    lastReadReply = reply;
                } else {
                    return;
                }
            });

            if (!lastReadReply) {
                //no replies read, so nothing doing
            } else {
                //record information for last read reply
                var replyNumberLinks = lastReadReply.prevAll('a[name!="bottom"]');

                var threadReplyNumber = parseInt($(replyNumberLinks[1]).prop('name').slice(1));
                var overallReplyNumber = $(replyNumberLinks[0]).prop('name').slice(1);

                var currentData = WhirlpoolPlus.feat.whirlpoolLastRead.loadThreadData(WhirlpoolPlus.util.getThreadNumber());

                if (currentData == false || parseInt(currentData['t']) <= threadReplyNumber) {
                    WhirlpoolPlus.feat.whirlpoolLastRead.saveThreadData(WhirlpoolPlus.util.getThreadNumber(), threadReplyNumber, overallReplyNumber);
                }

            }
        });
    },

    forumPage: function () {
        var threads = $('#threads > table > tbody > tr:not(.section)');

        threads.each(function () {
            var thread = $(this);

            var threadNumber = parseInt(thread.find('a.title').prop('href').split('t=')[1]);

            if (isNaN(threadNumber)) {
                return;
            }

            if (thread.is('.deleted') || thread.is('.pointer')) {
                //ignore this one
                //Not deleted from database, as a thread may be undeleted in the future.
                return true;
            }

            var threadData = WhirlpoolPlus.feat.whirlpoolLastRead.loadThreadData(threadNumber);
            if (WhirlpoolPlus.util.get('wlr_noTrackSticky') && thread.is('.sticky')) {
                //leave the stickies alone
            } else {
                if (threadData) {
                    //we are tracking this thread

                    var numberOfReplies = parseInt(thread.find('td.reps').not(':has(a)').text()) + 1; //need to add one, as original post is not counted as a reply here

                    //change the end link regardless, as there might have been replies since a refresh
                    //build the link
                    var link;

                    //do we have the new reply method?
                    if (threadData['o']) {
                        link = '/forum-replies.cfm?r=' + threadData['o'] + '#r' + threadData['o']; //used by Simon's jumpToReplyId method, so preferred
                    } else {
                        //use the old page number method
                        link = '/forum-replies.cfm?t=' + threadNumber + '&p=' + threadData['p'] + '#r' + threadData['t'];
                    }


                    //change the link
                    thread.find('.goend > a').prop('href', link).prop('title', 'Jump to last read post');

                    //add the controls
                    thread.find('.reps').not(':has(a)').append('<span class="whirlpoolLastRead_controls small"><a href="#" class="whirlpoolLastRead_stopTracking" title="Stop tracking this thread">S</a></span>');

                    if (threadData['t'] < numberOfReplies) {
                        //there are unread posts

                        //we need to apply the unread class
                        if (WhirlpoolPlus.util.get('wlr_display_onlyEndSquare')) {
                            thread.find('td.goend').addClass('whirlpoolLastRead_unreadPosts');
                        } else if (WhirlpoolPlus.util.get('wlr_display_acrosscolumns')) {
                            thread.find('td').addClass('whirlpoolLastRead_unreadPosts');
                        }
                        else {
                            thread.find('td:not(.reps):not(.reads):not(.unread)').addClass('whirlpoolLastRead_unreadPosts');
                        }

                        if (document.location.href.match('/forum/')) {
                            thread.find('.whirlpoolLastRead_controls').append('<br /><a href="#" class="whirlpoolLastRead_markAsRead" title="Mark this thread as read">M</a>');
                        }

                    } else {
                        //all posts have been read
                        if (WhirlpoolPlus.util.get('wlr_display_onlyEndSquare')) {
                            thread.find('td.goend').addClass('whirlpoolLastRead_noUnreadPosts');
                        } else if (WhirlpoolPlus.util.get('wlr_display_acrosscolumns')) {
                            thread.find('td').addClass('whirlpoolLastRead_noUnreadPosts');
                        }
                        else {
                            thread.find('td:not(.reps):not(.reads):not(.unread)').addClass('whirlpoolLastRead_noUnreadPosts');
                        }
                    }

                    thread.find('.whirlpoolLastRead_stopTracking').click(function () {
                        WhirlpoolPlus.feat.whirlpoolLastRead.stopTracking(threadNumber);
                        thread.children().removeClass('whirlpoolLastRead_unreadPosts whirlpoolLastRead_noUnreadPosts');
                        thread.find('.whirlpoolLastRead_controls').remove();
                        return false;
                    });

                    thread.find('.whirlpoolLastRead_markAsRead').click(function () {
                        WhirlpoolPlus.feat.whirlpoolLastRead.markAsRead(threadNumber);
                        thread.children('.whirlpoolLastRead_unreadPosts').removeClass('whirlpoolLastRead_unreadPosts').addClass('whirlpoolLastRead_noUnreadPosts');
                        thread.find('.whirlpoolLastRead_controls .whirlpoolLastRead_markAsRead').remove();
                        return false;
                    });

                }
            }
        });

    },

    stopTracking: function (threadNumber) {
        WhirlpoolPlus.util.sync.remove(threadNumber);
        WhirlpoolPlus.util.sync.run();
    },

    markAsRead: function (threadNumber) {
        //only operates on forum replies page.
        //have to use legacy pagenumber method

        //go get the page number
        var threadLink = $('a[href="/forum-replies.cfm?t=' + threadNumber + '"]');
        if (threadLink.length <= 0) {
            //thread not on this page
            return;
        }

        var pageNumber;

        if (threadLink.parent().find('script').length <= 0) {
            //no page link producing script, so only one page
            pageNumber = '1';
        } else {
            pageNumber = (threadLink.parent().find('script').text().split(',')[1]).split(')')[0];
        }

        //now we need to get the number of the last read reply.
        var numberOfReplies = parseInt(threadLink.closest('tr').find('.reps').text().split('S')[0]) + 1; //need to add one, as original post is not counted as a reply here

        //write data
        WhirlpoolPlus.util.sync.set(threadNumber, { t: numberOfReplies, p: pageNumber })

        //change the link
        var link = '/forum-replies.cfm?t=' + threadNumber + '&p=' + pageNumber + '#r' + numberOfReplies;
        threadLink.closest('tr').find('.goend > a').prop('href', link);

        WhirlpoolPlus.util.sync.run();

        return false;
    },

    runPosts: function () {
        if (WhirlpoolPlus.util.get('wlr_enabled') == 'all' || WhirlpoolPlus.util.get('wlr_enabled') == 'forums' || WhirlpoolPlus.util.get('wlr_enabled') == 'profile' || WhirlpoolPlus.util.get('wlr_enabled') == 'watched') {
            //scroll to the post that we were actually sent to
            if (window.location.hash) {
                $(unsafeWindow).load(function () {
                    var location = $(window.location.hash);
                    if (location.length > 0) {
                        $(unsafeWindow).scrollTop(location.offset().top);
                    }
                });
            }

            this.forumReplies();
        }
    },

    runThreads: function () {
        if (WhirlpoolPlus.util.get('wlr_enabled') == 'all' || WhirlpoolPlus.util.get('wlr_enabled') == 'forums' || WhirlpoolPlus.util.get('wlr_enabled') == 'profile' || WhirlpoolPlus.util.get('wlr_enabled') == 'watched') {
            WhirlpoolPlus.feat.whirlpoolLastRead.forumPage();
        }
    }

};

WhirlpoolPlus.feat.editor = {

    css: function () {
        return '#body { min-height: 100px; }' +
            '#wpp_whirlcode { text-align: center; }' +
            '#wpp_whirlcode button { padding: 2px 4px; margin: 2px; width: initial !important; font-size: inherit; }';
    },

    whirlcodify: function (id) {
        if (WhirlpoolPlus.util.get('compose_enhancedEditor')) {
            var target = $(id)

            target.parent().before('<div id="wpp_whirlcode"></div>');

            this._addWhirlcodeControls('#wpp_whirlcode', target);
        }
    },

    showInlineReply: function () {

        if (WhirlpoolPlus.util.get('compose_quickReply')) {

            // Trigger the inbuilt quick reply functionality
            $('#replyformBlock').show();
            $('#replyformBlock replyform textarea').prop('overflow', 'auto !important');
        }

    },

    autoSubscribe: function () {
        if (WhirlpoolPlus.util.get('autoSubscribeToNewThread')) {
            $('#modesu').prop('checked', 'checked');
        }
    },


    movePreview: function () {
        if (WhirlpoolPlus.util.get('compose_movePreview')) {
            $('#previewBlock').detach().insertBefore('#replyformBlock');
        }
    },

    _basicWhirlcode: {
        bold: { left: '[*', right: '*]', name: 'Bold' },
        italic: { left: '[/', right: '/]', name: 'Italic' },
        super: { left: '[^', right: '^]', name: 'Super' },
        sub: { left: '[\\', right: '\\]', name: 'Sub' },
        strike: { left: '[-', right: '-]', name: 'Strike' },
        small: { left: '[(', right: ')]', name: 'Small' },
        courier: { left: '[#', right: '#]', name: 'Courier' },
        serif: { left: '[~', right: '~]', name: 'Serif' },
        orange: { left: '[\'', right: '\']', name: '\'Orange\'' },
        blue: { left: '["', right: '"]', name: '"Blue"' },
        grey: { left: '[`', right: '`]', name: '`Grey`' },

    },

    _advancedWhirlcode: {
        google: { left: '[?', right: '?]', name: 'Google', callback: function () { }, },
        wiki: { left: '[[', right: ']]', name: 'Wiki', callback: function () { }, },
        spoiler: { left: '[_', right: '_]', name: 'Spoiler', callback: function () { }, },
        url: {
            left: '', right: '', name: 'URL', callback: function (textarea, start, end, selection) {
                if (selection == '') {
                    alert('WP+: Please select text to turn into a link');
                    return;
                }

                var urlPrompt = window.prompt('Enter URL:', 'http://');

                if ((urlPrompt !== 'http://') && (urlPrompt != '') & (urlPrompt != null)) {
                    WhirlpoolPlus.feat.editor._insert(textarea, '<a href="' + urlPrompt + '">' + selection + '</a>', start, end);
                }
            },
        },
        link: {
            left: '', right: '', name: 'Link', callback: function (textarea, start, end, selection) {

                if (selection == '') {
                    alert('WP+: Please select a url');
                    return;
                }

                var linkPrompt = window.prompt('Enter Text:', '');

                if ((linkPrompt != '') & (linkPrompt != null)) {
                    if (selection.indexOf('http://') < 0 && selection.indexOf('https://') < 0) {
                        selection = 'http://' + selection;
                    }

                    WhirlpoolPlus.feat.editor._insert(textarea, '<a href="' + selection + '">' + linkPrompt + '</a>', start, end);
                }
            },
        },
        escape: {
            left: '', right: '', name: 'Escape Whirlcode', callback: function (textarea, start, end, selection) {
                if (selection == '') {
                    alert('WP+: Please make a selection to escape Whirlcode');
                    return;
                }

                WhirlpoolPlus.feat.editor._insert(textarea, selection.replace(/\[([^\.])/mg, '[.$1').replace(/([^\.])]/mg, '$1.]'), start, end);
            },
        },
        hr: {
            left: '', right: '', name: 'Horizontal Rule', callback: function (textarea, start, end, selection) {
                WhirlpoolPlus.feat.editor._insert(textarea, '\n-----\n', end, end);
            },
        },
        code: {
            left: '', right: '', name: 'Code Block', callback: function (textarea, start, end, selection) {
                var lineBegin;
                if (textarea.val().charAt(start) == '\n') {
                    lineBegin = textarea.val().lastIndexOf('\n', start);
                } else {
                    lineBegin = textarea.val().lastIndexOf('\n', start - 1);
                }

                if (lineBegin > 0) {
                    WhirlpoolPlus.feat.editor._insert(textarea, '\n$ ', lineBegin, lineBegin + 1);
                } else {
                    WhirlpoolPlus.feat.editor._insert(textarea, '$ ', 0, 0);
                }
            },
        },
    },

    _addWhirlcodeControls: function (locationID, textarea) {
        var controls = '';

        //Generate first row - basic controls
        for (i in this._basicWhirlcode) {
            var code = this._basicWhirlcode[i];
            controls += '<button type="button" data-type="basic" data-code="' + i + '" class="wpp_whirlcodeButton" title="' + code.name + '">' + code.name + '</button>';
        }

        controls += '<br/>';

        //Generate second row - advanced controls
        for (i in this._advancedWhirlcode) {
            var code = this._advancedWhirlcode[i];
            controls += '<button type="button" data-type="advanced" data-code="' + i + '" class="wpp_whirlcodeButton" title="' + code.name + '">' + code.name + '</button>';
        }

        if (WhirlpoolPlus.util.get('display_emoticons_enabled') && WhirlpoolPlus.util.get('compose_quickReply_emoticons')) {
            controls += '<br/>';

            //Generate third row - emoticons
            icons = WhirlpoolPlus.feat.display.emoticons.getIconSet(false);
            for (icon in icons) {
                controls += '<button type="button" data-type="emoticon" data-code="' + icon.replace('\\\\', '\\') + '" class="wpp_whirlcodeButton quickReply_whirlcodeButton_emoticon"><img src="' + icons[icon] + '"/></button>';
            }
        }

        $(locationID).append(controls);

        //Set up the event callback
        $('.wpp_whirlcodeButton').mouseup(function () {
            //Information about the event
            var theButton = $(this);
            var type = theButton.data('type');
            var code = theButton.data('code');
            var left, right;

            if (type == 'basic') {
                left = WhirlpoolPlus.feat.editor._basicWhirlcode[code].left;
                right = WhirlpoolPlus.feat.editor._basicWhirlcode[code].right;
            } else if (type == 'advanced') {
                left = WhirlpoolPlus.feat.editor._advancedWhirlcode[code].left;
                right = WhirlpoolPlus.feat.editor._advancedWhirlcode[code].right;
            }


            //Information about the current selection
            textarea.focus();
            var selectionStart = textarea[0].selectionStart;
            var selectionEnd = textarea[0].selectionEnd;
            var selection = textarea.val().substring(selectionStart, selectionEnd);

            if (type == 'basic' || type == 'advanced') {
                if (selection == '') {
                    if ((textarea.val().split(left).length + textarea.val().split(right).length) % 2 == 0) {
                        WhirlpoolPlus.feat.editor._insert(textarea, left, selectionStart, selectionEnd);
                    } else {
                        WhirlpoolPlus.feat.editor._insert(textarea, right, selectionStart, selectionEnd);
                    }
                } else {
                    WhirlpoolPlus.feat.editor._insert(textarea, selection.replace(/^(.+)/mg, left + '$1' + right), selectionStart, selectionEnd);
                }

                if (type == 'advanced') {
                    WhirlpoolPlus.feat.editor._advancedWhirlcode[code].callback(textarea, selectionStart, selectionEnd, selection);
                }
            } else if (type == 'emoticon') {
                WhirlpoolPlus.feat.editor._insert(textarea, code + ' ', selectionEnd, selectionEnd);
            }

        });

    },

    _insert: function (textarea, value, start, end) {
        var textareaDOM = textarea[0];
        var cursorPos = start;
        var scrollPos = textarea.scrollTop();
        var selectionLength = end - start;

        //Overwrite the selection with the new value
        textarea.val(
            textarea.val().substring(0, start) +
            value +
            textarea.val().substring(end, textarea.val().length)
        );

        //Put the cursor in the same spot
        //cursorpos = current position + (length of new value - length of original) + (selection length)
        cursorPos = cursorPos + (value.length - selectionLength) + (selectionLength);
        textarea.focus();
        textareaDOM.setSelectionRange(cursorPos, cursorPos);
        textarea.scrollTop(scrollPos);

        this._forceUpdate(textarea);
    },

    _forceUpdate: function (textarea) {
        unsafeWindow.$(textarea[0]).trigger('keyup');
    },

};

WhirlpoolPlus.feat.quickEdit = {

    run: function () {
        if (WhirlpoolPlus.util.get('quickEdit')) {
            $('.actions a[href^="/forum/index.cfm?action=edit"]').after('<br><a class="wpp-edit">(quick edit)</a>');
            $('#replies .wpp-edit').click(this._onClick);
        }
    },

    css: function () {
        //Everyone loves CSS hackery, right?
        return '.wpp-edit, .wpp-c-edit { cursor: pointer; }' +
            '.quickEdit > table > tbody > tr:nth-child(1), .quickEdit #reply > table > tbody > tr:nth-child(2), .quickEdit #reply tbody th, .quickEdit #reply tbody .right { display: none; }' +
            '.quickEdit > table > tbody > tr:nth-child(4) table > tbody > tr:nth-child(1) td { width: 50%; text-align: center; }' +
            '.quickEdit > table > tbody > tr:nth-child(4) table > tbody > tr:nth-child(2) { display: none; }' +
            '.quickEdit { margin: 0; }' +
            '.quickEdit #previewButton { display: none; }' +
            '.quickEdit button { width:150px; font:16px Arial; }' +
            '.quickEdit colgroup col { width: auto !important; }' +
            '.quickEdit textarea#body { min-height: 200px; width: 100%; }' +
            '.quickEdit td { background-color: transparent !important; padding: 0; }' +
            '.quickEdit * { box-shadow: none !important; }';
    },

    _onClick: function () {
        $(this).hide();
        $(this).after('<a class="wpp-c-edit">(cancel)</a>');

        var editUrl = $(this).prev().prev().prop('href').toString(); //The 'Edit my Post' link url
        var replyID = editUrl.split("e=")[1]; //Post id
        var replyHTML = $('#rr' + replyID + ' .replytext'); //Body of the post
        var original = replyHTML.html().toString(); //Original HTML

        //Activate the CSS hacks
        replyHTML.addClass('quickEdit');

        //Load the contents of the edit form into replyHTML
        replyHTML.load(editUrl + ' #replyformBlock', function () {

            //Prevent errors from this undefined function
            $('#fm').removeAttr('onkeypress');

            //Prevent quick reply post double-up
            $('#body').prop('id', 'quickeditbody');

            //Add Cancel Button
            $('#postbutton').after('<input type="button" name="wpp-c-edit" class="wpp-c-edit" value="Cancel" style="width:10em;font-size:14px;">');

            //On cancel
            $('.wpp-c-edit').on('click', function (e) {
                replyHTML.html(original);
                $('.wpp-c-edit').remove();
                $('.wpp-edit').show();
            });

            //On save
            $('input').on('click', function (e) {
                $('input[id=postbutton]').value('Edit My Post');
                var data = $('#fm').serialize();

                $.post($('#fm').prop('action'), data, function (text) {
                    if (text.indexOf('Edited. Returning') >= 0) {
                        document.location.reload();
                    } else {
                        alert('WP+: Something went wrong while editing your post. Some common problems:\n - Overquoting\n - Too much text\n - Invalid characters\nTry using the normal editing function instead. Please report this bug in the WP+ thread (in Feedback).');
                    }
                });

                return false;
            });
        });
    }


};

WhirlpoolPlus.feat.userNotes = {

    _notes: WhirlpoolPlus.util.get('userNotes'),

    _setNotes: function (user, notes) {
        if (notes == '') {
            delete this._notes[user];
        } else {
            this._notes[user] = notes;
        }

        WhirlpoolPlus.util.set('userNotes', this._notes);
    },

    css: function () {
        return '.userNotes_button { display: inline-block; cursor: pointer; width: 16px; height: 16px;}' +
            '.userNotes_button_notes { background-image: url(' + WhirlpoolPlus.util.image('red_note') + '); }' +
            '.userNotes_button_noNotes { background-image: url(' + WhirlpoolPlus.util.image('green_note') + '); }' +
            '.userNotes_dialog textarea { width: 100%; height: 200px; }' +
            '.userNotes_close { width: 100%; text-align: right; padding-bottom: 5px; font-weight: bold; cursor: pointer; }';
    },

    runOnReply: function (reply) {
        if (!WhirlpoolPlus.util.get('userNotes_enabled')) {
            return;
        }

        var userNumber = WhirlpoolPlus.util.getReplyUserId(reply);
        var userNotesClass = 'userNotes_button_noNotes';

        if (userNumber in this._notes) {
            userNotesClass = 'userNotes_button_notes';
        }

        var userNotesButton = $('<span class="userNotes_button ' + userNotesClass + '" data-userNumber="' + userNumber + '" data-replyID="' + reply.prop('id') + '"></div>');

        reply.find('.userstats').append(userNotesButton);

        userNotesButton.click(function () {
            var notebox = $('<textarea id="userNotes_notes">');
            var dialog = $('<div class="userNotes_dialog">').append(notebox);

            dialog.modal({
                close: true,
                closeHTML: '<div class="userNotes_close">Close</div>',
                containerCss: {
                    height: '240px',
                    width: '280px',
                    'text-align': 'center',
                    'background-color': '#ddd',
                    'border': '1px solid #000',
                    'padding': '20px',
                },
                onClose: function () {
                    WhirlpoolPlus.feat.userNotes._setNotes(userNumber, notebox.val());

                    if (notebox.val() == '') {
                        userNotesButton.removeClass('userNotes_button_notes').addClass('userNotes_button_noNotes');
                    } else {
                        userNotesButton.removeClass('userNotes_button_noNotes').addClass('userNotes_button_notes');
                    }

                    $.modal.close();
                }
            });

            if (userNumber in WhirlpoolPlus.feat.userNotes._notes) {
                notebox.val(WhirlpoolPlus.feat.userNotes._notes[userNumber]);
            }
        });

    },

};

WhirlpoolPlus.run = function () {
    WhirlpoolPlus.feat.returnafterlogin();
    //Set up pageType
    WhirlpoolPlus.util.initPageType();

    //Upgrade the script if necessary
    if (!WhirlpoolPlus.util.exists('storageVersion') || WhirlpoolPlus.about.storageVersion > WhirlpoolPlus.util.get('storageVersion')) {
        WhirlpoolPlus.install.run();
    }

    /** RUN: Watched Thread Alert **/
    if (WhirlpoolPlus.util.pageType.watchedThreadAlert) {
        WhirlpoolPlus.feat.watchedThreadsAlert();
    }

    /** RUN: Deleted Thread Alert **/
    if (WhirlpoolPlus.util.pageType.deletedThread) {
        var deletedThreadNumber = document.location.href.split('t=')[1].split('&')[0];
        $('#alert').append('<br/><a href="//google.com/search?q=cache:forums.whirlpool.net.au/archive/' + deletedThreadNumber + '">(Google Cache)</a>');
    }

    //Dump CSS as early as possible
    WhirlpoolPlus.util.css(
        WhirlpoolPlus.feat.display.css() +
        WhirlpoolPlus.settings.css() +
        WhirlpoolPlus.feat.avatar.css() +
        WhirlpoolPlus.feat.spinnerMenu.css() +
        WhirlpoolPlus.feat.recentActivityOverlay.css() +
        WhirlpoolPlus.feat.quickEdit.css() +
        WhirlpoolPlus.feat.whirlpoolLastRead.css() +
        WhirlpoolPlus.feat.editor.css() +
        WhirlpoolPlus.feat.userNotes.css() +
        WhirlpoolPlus.util.sync.css() +
        WhirlpoolPlus.feat.penaltyBoxCss()
    );

    /** RUN: Not Alerts **/
    if (!WhirlpoolPlus.util.pageType.alert) {
        WhirlpoolPlus.settings.init();
        WhirlpoolPlus.feat.display.floatSidebar();
        WhirlpoolPlus.feat.display.floatTopbar();
        /*WhirlpoolPlus.feat.display.watchedAlert();*/
        WhirlpoolPlus.feat.display.whimAlert();
        WhirlpoolPlus.feat.display.wpPlusLogo();
        WhirlpoolPlus.feat.display.poweredby();
        WhirlpoolPlus.feat.recentActivityOverlay.run();
        WhirlpoolPlus.feat.spinnerMenu.run();
        WhirlpoolPlus.feat.changeLinks();
        WhirlpoolPlus.util.sync.init();
    }

    /** RUN: Posts Pages **/
    if (WhirlpoolPlus.util.pageType.posts) {
        WhirlpoolPlus.feat.display.hidePosts();
        WhirlpoolPlus.feat.display.emoticons.init();
        WhirlpoolPlus.feat.embed();
        WhirlpoolPlus.feat.display.syntaxHighlight();
        WhirlpoolPlus.feat.extraNavLinks();
        /*WhirlpoolPlus.feat.auraReset();*/
        WhirlpoolPlus.feat.quickEdit.run();
        WhirlpoolPlus.feat.whirlpoolLastRead.runPosts();
        WhirlpoolPlus.feat.editor.showInlineReply();
        WhirlpoolPlus.feat.editor.autoSubscribe();
        WhirlpoolPlus.feat.editor.movePreview();
        WhirlpoolPlus.feat.editor.whirlcodify('#replyformBlock #body');

        //Loop through each reply
        $('#replies .reply:not(.preview)').each(function () {
            $this = $(this);
            WhirlpoolPlus.feat.ignoreUser.userIgnore($this);
            WhirlpoolPlus.feat.avatar.avatariseRow($this);
            WhirlpoolPlus.feat.whimLink.WhimUser($this);
            WhirlpoolPlus.feat.numberPosts.NumberPost($this);
            WhirlpoolPlus.feat.userNotes.runOnReply($this);
            if (WhirlpoolPlus.util.get('display_penaltyBox')) {
                WhirlpoolPlus.feat.penaltyBoxHighlight($this);
            }
        });

    }

    /** RUN: Threads Pages **/
    if (WhirlpoolPlus.util.pageType.threads != WhirlpoolPlus.util.pageType.watchedThreads) {
        WhirlpoolPlus.feat.display.hideThreads();
        WhirlpoolPlus.feat.display.unansweredThreadsLink();
        WhirlpoolPlus.feat.whirlpoolLastRead.runThreads();
    }

    /** RUN: Profile Pages **/
    if (WhirlpoolPlus.util.pageType.profile) {
        WhirlpoolPlus.feat.display.hideClosedThreads();
        if (WhirlpoolPlus.util.get('wlr_enabled') == 'all' || WhirlpoolPlus.util.get('wlr_enabled') == 'profile') {
            WhirlpoolPlus.feat.whirlpoolLastRead.runThreads();
        }
        WhirlpoolPlus.feat.postsPerDay();
        WhirlpoolPlus.feat.display.oldProfile();
        WhirlpoolPlus.feat.display.userPageInfoToggle();
        WhirlpoolPlus.feat.yourvoteslink();
    }

    /** RUN: Own Profile **/
    var uNumber = WhirlpoolPlus.util.getUserId();
    if (window.location.href == 'https://forums.whirlpool.net.au/user/' || window.location.href == 'https://forums.whirlpool.net.au/user/' + uNumber + '') {
        WhirlpoolPlus.feat.display.superProfile();
    }

    /** RUN: Aura Votes Page **/
    if (WhirlpoolPlus.util.pageType.auraVotes) {
        WhirlpoolPlus.feat.auraCount();
    }

    /** RUN: Forums page **/
    if (document.location.href == 'http://forums.whirlpool.net.au/' || document.location.href == 'https://forums.whirlpool.net.au/') {
        WhirlpoolPlus.feat.display.hideForums();
        WhirlpoolPlus.feat.removeLinkToLastPage();
    }

    /** RUN: Posting (new thread, reply) **/
    if (WhirlpoolPlus.util.pageType.newThread || WhirlpoolPlus.util.pageType.reply) {
        WhirlpoolPlus.feat.editor.autoSubscribe();
        WhirlpoolPlus.feat.editor.whirlcodify('#replyformBlock #body');
    }

    /** RUN: Editing (posts) **/
    if (WhirlpoolPlus.util.pageType.forums && WhirlpoolPlus.util.pageType.edit) {
        WhirlpoolPlus.feat.editor.whirlcodify('#replyformBlock #body');
    }

    /** RUN: Watched Threads **/
    if (WhirlpoolPlus.util.pageType.watchedThreads) {
        WhirlpoolPlus.feat.openWatchedThreadsInTabs();
        WhirlpoolPlus.feat.promoteWatchedForum();
        WhirlpoolPlus.feat.display.hideThreads();
        WhirlpoolPlus.feat.display.unansweredThreadsLink();
        if (WhirlpoolPlus.util.get('wlr_enabled') == 'all' || WhirlpoolPlus.util.get('wlr_enabled') == 'watched') {
            WhirlpoolPlus.feat.whirlpoolLastRead.runThreads();
        }
    }


    /** RUN: Thread Search pages **/
    if (WhirlpoolPlus.util.pageType.search) {
        WhirlpoolPlus.feat.editSearchLinks();
    }

    /** RUN: Whim Reading **/
    if (WhirlpoolPlus.util.pageType.whimRead) {
        $('#replies .reply').each(WhirlpoolPlus.feat.avatar.avatariseWhim);
    }

    /** RUN: Whim Archive **/
    if (WhirlpoolPlus.util.pageType.whimArchive) {
        WhirlpoolPlus.feat.whimArchiveSort();
    }

    /** RUN: Wiki Edit **/
    if (WhirlpoolPlus.util.pageType.wiki) {
        WhirlpoolPlus.feat.editor.whirlcodify('#f_body');
    }

}

//Run the script
try {

    // Rebuild jQuery.browser
    if (typeof $ != 'undefined') {
        // From jQuery.migrate plugin https://code.jquery.com/jquery-migrate-1.1.1.js
        var jQuery = $;
        if (!jQuery.browser) { jQuery.uaMatch = function (e) { e = e.toLowerCase(); var t = /(chrome)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || e.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || []; return { browser: t[1] || "", version: t[2] || "0" } }; matched = jQuery.uaMatch(navigator.userAgent); browser = {}; if (matched.browser) { browser[matched.browser] = true; browser.version = matched.version } if (browser.chrome) { browser.webkit = true } else if (browser.webkit) { browser.safari = true } jQuery.browser = browser }
    }

    // This needs to be late loaded, otherwise Tampermonkey gets upset
    loadSimpleModal($);

    WhirlpoolPlus.run();

} catch (e) {
    if (typeof console != 'undefined') {
        console.error(e);
    } else {
        alert('WP+ Error occurred: ' + e);
    }
}