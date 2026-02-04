// ==UserScript==
// @name            Whirlpool Plus
// @namespace       WhirlpoolPlus
// @description     Adds a suite of extra optional features to the Whirlpool forums.
// @author          WP User 105852
// @version         2026.2.0
// @icon            https://www.google.com/s2/favicons?sz=64&domain=whirlpool.net.au
// @updateURL       https://raw.githubusercontent.com/endorph-soft/wpplus/master/whirlpool_plus.meta.js
// @downloadURL     https://raw.githubusercontent.com/endorph-soft/wpplus/master/whirlpool_plus.user.js
// @grant           unsafeWindow
// @grant           GM_addStyle
// @grant           GM_getResourceURL
// @grant           GM_getResourceText
// @grant           GM_openInTab
// @grant           GM_xmlhttpRequest
// @grant           GM.addStyle
// @grant           GM.getResourceUrl
// @grant           GM.openInTab
// @grant           GM.xmlHttpRequest
// @match           *://forums.whirlpool.net.au/*
// @match           *://bc.whirlpool.net.au/*
// @match           *://whirlpool.net.au/*
// @exclude         *://whirlpool.net.au/blog/*
// @exclude         *://whirlpool.net.au/api/*
// @exclude         *://forums.whirlpool.net.au/api/*
// @connect         ibb.co
// @connect         self
// @require         https://raw.githubusercontent.com/phyco1991/wpplus/master/resources/js/jquery-3.7.1.min.js
// @require         https://raw.githubusercontent.com/phyco1991/wpplus/master/resources/js/jquery.modal.min.js
// @require         https://raw.githubusercontent.com/phyco1991/wpplus/master/resources/js/prettify.js
// @require         https://raw.githubusercontent.com/endorph-soft/wpplus/master/resources/js/tea.js
// @require         https://raw.githubusercontent.com/phyco1991/wpplus/master/resources/js/sha.js
// @require         https://raw.githubusercontent.com/greasemonkey/gm4-polyfill/master/gm4-polyfill.js
// @require         https://raw.githubusercontent.com/phyco1991/wpplus/master/resources/js/blazy.min.js
// @require         https://raw.githubusercontent.com/phyco1991/wpplus/master/resources/js/jdenticon.min.js
// @require         https://raw.githubusercontent.com/phyco1991/wpplus/master/resources/js/poweredby.js
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
// @resource        classictheme        https://raw.githubusercontent.com/phyco1991/wpplus/master/resources/themes/classic.css
// @resource        blacktheme          https://raw.githubusercontent.com/phyco1991/wpplus/master/resources/themes/black.css
// @resource        electrolizetheme    https://raw.githubusercontent.com/phyco1991/wpplus/master/resources/themes/electrolize.css
// @resource        tealtheme           https://raw.githubusercontent.com/phyco1991/wpplus/master/resources/themes/teal.css
// @resource        arcdarktheme        https://raw.githubusercontent.com/phyco1991/wpplus/master/resources/themes/arcdark.css
// @resource        darktheme           https://raw.githubusercontent.com/phyco1991/wpplus/master/resources/themes/dark.css
// @resource        steelgreytheme      https://raw.githubusercontent.com/phyco1991/wpplus/master/resources/themes/steelgrey.css
// @resource        oldfont             https://raw.githubusercontent.com/phyco1991/wpplus/master/resources/css/wpoldfontfix.css
// @resource        spinner_black       https://raw.githubusercontent.com/phyco1991/wpplus/master/resources/themes/spinner_black.png
// @resource        spinner_elec        https://raw.githubusercontent.com/phyco1991/wpplus/master/resources/themes/spinner_elec.png
// @resource        spinner_teal        https://raw.githubusercontent.com/phyco1991/wpplus/master/resources/themes/spinner_teal.png
// @resource        wppimage            https://raw.githubusercontent.com/phyco1991/wpplus/master/resources/png/wppimage.png
// @resource        classiclogo         https://raw.githubusercontent.com/phyco1991/wpplus/master/resources/themes/classicwpnewhead.png
// @resource        classicnews         https://raw.githubusercontent.com/phyco1991/wpplus/master/resources/themes/classicwpnewsimage.gif
// @resource        teallogo            https://raw.githubusercontent.com/phyco1991/wpplus/master/resources/themes/tealwpnewhead.png
// @resource        arcdarklogo         https://raw.githubusercontent.com/phyco1991/wpplus/master/resources/themes/arcdarkwpnewhead.png
// @resource        electrolizelogo     https://raw.githubusercontent.com/phyco1991/wpplus/master/resources/themes/electrolizewpnewhead.png
// @resource        electrolize_1       https://raw.githubusercontent.com/phyco1991/wpplus/master/resources/themes/electrolize_1.png
// @resource        blacklogo           https://raw.githubusercontent.com/phyco1991/wpplus/master/resources/themes/blackwpnewhead.png
// ==/UserScript==

var WhirlpoolPlus = {};

WhirlpoolPlus.about = {
    // Script Version
    version: '2026.2.0',

    // Defines a rerelease version (0 for a standard release)
    prerelease: 0,

    // Increasing value to force the script to upgrade
    storageVersion: 122,

    // Script Changelog
    changelog: {
        '2026.2.0': '<ul><li>Re-factored avatar code to be more efficient</li><li>Fixed issues with Imgur album and gallery embeds</li><li>Various code tidying</li></ul>',
		'2025.2.0': '<ul><li>Fixed bug where the WP+ settings menu would not open from the spinner or right click menus</li><li>Added basic support for Flickr to image embed functionality</li><li>Added feature to hide selected threads from the Recent Activity section</li><li>Added feature to hide watched threads where the latest reply is not from the OP</li><li>Added new emoji options</li><li>Updated code comments</li><li>Updated theme code image loading</li></ul>',
		'2025.1.1': '<ul><li>Fixed bug where the WP+ settings menu unintentionally displayed in certain scenarios</li><li>Fixed issues with dropdown menus in settings not detecting changes in values</li><li>Fixed certain Imgur links not embedding correctly</li></ul>',
		'2025.1.0': '<ul><li>Re-wrote settings and settings menu code to improve codebase and reduce redundant overhead</li><li>Removed Google Cache functionality from deleted threads pages as the feature is retired by Google</li><li>Fixes to Avatars and User Notes on profile to handle certain edge cases where the features would not work</li><li>Updated all modal windows to a single framework</li><li>Updated Watched Threads Alert feature to display number of unread threads</li><li>Fixed Imgur embed functionality where images were not loading occasionally</li></ul>',
		'2024.8.0': '<ul><li><b>Chrome Users</b> - Due to changes in Manifest v3 you may be required to enable developer mode under extensions settings to ensure continued functionality of user scripts like WP Plus. See the Wiki article for more information.</li><li>Updated dialog model to use relative sizing and not fixed values.<br />Refactored media embedding code to improve performance and fix issues with YouTube links not embedding due to changes in handling by Whirlpool<br />Added media embed support for YouTube Shorts</li></ul>',
		'2024.4.0': '<ul><li><b>Chrome Users</b> - Due to upcoming changes by Google it is recommended to enable developer mode under extensions settings to ensure continued functionality of user scripts like WP Plus. See the Wiki article for more information.</li><li>Upgraded jQuery to latest stable release<br />Fix Whirlcode block not applying on TWAM pages<br />Unify polling of WP API to 1 minute intervals and remove redundant code<br />Added beta support for displaying images from imgbb.com URLs<br />Adjust image upload in posts tool to use imgbb instead of postimg for compatibility reasons<br />Update code comments to reduce future development overhead</li></ul>',
		'2023.9.0': '<ul><li>Add floating go to top of page button<br />Add persistent edit button<br />Add ReplyId utility function</li></ul>',
		'2023.5.0': '<ul><li>Add Post Saving functionality - you can now save and unsave posts by clicking the button in the reply tools section on the right hand side<br />Additional context added to code<br />New utility function added<br />Tidied behaviour of showing saved posts and tracked WLR URLs in the settings menu</li></ul>',
        '2022.5.0': '<ul><li>Mark as Read button will now redirect to user pages with custom recent post days set correctly<br />Updated to latest version of jQuery<br />Minor text fixes<br />Updated WP Arc Dark Theme</li></ul>',
        '2021.7.1': '<ul><li>Adds WP Steel Grey Theme. Fixes Database Version bug for new installs.</li></ul>',
        '2021.7.0': '<ul><li>Adds WP Dark Theme. Tweaks to border style of WP Plus notification bar. Adds Experimental Feature section in WP Plus Settings. Minor code tweaks.</li></ul>',
        '2021.6.1': '<ul><li><b>Note - </b>This is a major update, please read.<br />To perform a database upgrade, visit the Script Config tab in WP Plus Settings. This will complete changes to how data is stored for WLR and User Notes features and may be used for other feature changes in future updates. It is highly recommended to take a backup of your current config using the Export Config button when performing this action in case any issues arise.<br />User Notes feature is now compatible with sync functionality so your notes will be accessible across installations if the sync feature is enabled.<br />Fixes URL modifiers on Search pages<br />Whirlpool Last Read and Sync Settings sections have been moved in Settings<br />You can now view all currently tracked WLR threads in settings<br /></li></ul>',
        '2021.6.0': '<ul><li>Removed redundant code. Reworked Google Cache feature for alert pages. Reworked widescreen display feature to allow any percentage of screen width to be specified.</li></ul>',
        '2021.5.0': '<ul><li>Minor code tweaks and adds WP Arc Dark Theme</li></ul>',
        '2021.4.2': '<ul><li>Minor tweaks to fix two issues with WLR mark as read and stop tracking buttons.</li></ul>',
        '2021.4.1': '<ul><li>Removes old Mark as Read method for Watched Threads. Integrated previous actions when hitting Mark as Read button into new method. Updates WLR go to end arrow button text so as not to replace existing Whirlpool tooltip. Adds tooltips for WLR read and unread colouring. Updates storage prefix for WLR Sync Data - if you are using multiple installations of Whirlpool Plus ensure they are all updated as this breaks backwards compatibility with previous versions.</li></ul>',
        '2021.4.0': '<ul><li>Updated WLR highlighting for compatibility with changes to how reply numbers are displayed on Whirlpool. Removed functionality to insert go to end arrow buttons on Watched Threads page as this functionality now exists by default.</li></ul>',
        '2021.3.0': '<ul><li>Adds new options for Watched Threads functionality changes in Whirlpool. Fix to Super Profile feature not working with some layouts. Whirlcode URL prompt now supports mailto and enforces https - credit to <a href="https://github.com/fowl2" target="_blank">fowl2 on Github</a></li></ul>',
        '2021.2.0': '<ul><li>Adds Experimental Image Uploader functionality to posts. Minor changes to cookie setting method for CSP Bypass. Tidied spacing in Settings Menu. Removed redundant code. Unified insertion method on Super Profile feature.</li></ul>',
    },

    versionText: function () {
        var versionString = this.version;
        if (this.prerelease > 0) {
            versionString += 'pre' + this.prerelease;
        }
        return versionString;
    },
}

    // Mapping object for settings items. Specify type value if anything other than text or boolean. If dropdown, specify options and optionsMap values. Specify relevance to either the whole site or just the forums subdomain. Specify hidden if the setting is not intended to be edited by the user.
    const settingsMap = {
    'wpp_data_db_version': {
        relevance: 'forums',
        hidden: true,
        default: '',
        category: 'config',
        subcategory: '',
        friendlyName: 'Database Version',
        description: 'Database versioning is only used when major updates are made to how variables are stored'
    },
    'wpp_data_API_globalUpdateInterval': {
        relevance: 'all',
        hidden: true,
        default: '1',
        category: 'config',
        subcategory: '',
        friendlyName: 'API Global Update Interval',
        description: 'The interval in minutes of how frequently the Whirlpool API is scraped for features that require it'
    },
    'wpp_watchedAlert_data': {
        relevance: 'all',
        hidden: true,
        default: '',
        category: 'config',
        subcategory: '',
        friendlyName: 'Watched Threads Alert Data',
        description: 'This field is used by the Watched Threads Alert feature to store data'
    },
    'wpp_watchedAlert_lastUpdated': {
        relevance: 'all',
        hidden: true,
        default: 0,
        category: 'config',
        subcategory: '',
        friendlyName: 'Watched Threads Alert Last Update Time',
        description: 'This field is used by the Watched Threads Alert feature to store data'
    },
    'wpp_recentActivityOverlay_data': {
        relevance: 'all',
        hidden: true,
        default: '',
        category: 'config',
        subcategory: '',
        friendlyName: 'Recenty Activity Overlay Data',
        description: 'This field is used by the Recent Activity Overlay feature to store data'
    },
    'wpp_recentActivityOverlay_html': {
        relevance: 'all',
        hidden: true,
        default: '',
        category: 'config',
        subcategory: '',
        friendlyName: 'Recenty Activity Overlay HTML',
        description: 'This field is used by the Recent Activity Overlay feature to store data'
    },
    'wpp_recentActivityOverlay_lastUpdated': {
        relevance: 'all',
        hidden: true,
        default: 0,
        category: 'config',
        subcategory: '',
        friendlyName: 'Recenty Activity Overlay Last Update Time',
        description: 'This field is used by the Recent Activity Overlay feature to store data'
    },
    'wpp_customLinks': {
        relevance: 'all',
        hidden: true,
        default: [],
        category: 'config',
        subcategory: '',
        friendlyName: 'Custom Links Data',
        description: 'This field is used by the Custom Links feature to store data'
    },
    'wpp_savedPosts': {
        relevance: 'all',
        hidden: true,
        default: [],
        category: 'config',
        subcategory: '',
        friendlyName: 'Saved Posts Data',
        description: 'This field is used by the Saved Posts feature to store data'
    },
    'wpp_hiddenUsers': {
        relevance: 'all',
        hidden: true,
        default: [],
        category: 'config',
        subcategory: '',
        friendlyName: 'Hidden Users Data',
        description: 'This field is used by the Hidden Users feature to store data'
    },
    'wpp_sync_scriptId': {
        relevance: 'all',
        hidden: true,
        default: Math.floor(Math.random() * 100000001),
        category: 'config',
        subcategory: '',
        friendlyName: 'Script ID for Sync Function',
        description: 'This field is used by the Synchronisation feature to store data'
    },
    'wpp_sync_times': {
        relevance: 'all',
        hidden: true,
        default: {},
        category: 'config',
        subcategory: '',
        friendlyName: 'Sync Times for Sync Function',
        description: 'This field is used by the Synchronisation feature to store data'
    },
    'wpp_sync_mostUpToDate': {
        relevance: 'all',
        hidden: true,
        default: 0,
        category: 'config',
        subcategory: '',
        friendlyName: 'Source of truth for Sync Function',
        description: 'This field is used by the Synchronisation feature to store data'
    },
    'wpp_sync_lastSync': {
        relevance: 'all',
        hidden: true,
        default: 0,
        category: 'config',
        subcategory: '',
        friendlyName: 'Last Update Time for Sync Function',
        description: 'This field is used by the Synchronisation feature to store data'
    },
    'wpp_hideRecentActivityThreads_data': {
        relevance: 'forums',
        hidden: true,
        default: [],
        category: 'config',
        subcategory: '',
        friendlyName: 'Hidden Recent Activity Threads Data',
        description: 'This field is used by the Hide Recent Activity Threads feature to store data'
    },
    'wpp_display_theme': {
        relevance: 'all',
        default: 'default',
        category: 'display',
        subcategory: 'themesandfonts',
        friendlyName: 'Custom Display Theme',
        description: 'A collection of styles provided by members of Whirlpool, or the option to set your own theme colours below.<br />To design and submit your own theme, follow the instructions on <a href="https://whirlpool.net.au/wiki/make_wpplus_theme" target="_blank"><b>this page</b></a>',
        type: 'dropdown',
        options: ['"default"', '"classic"', '"steelgrey"', '"black"', '"teal"', '"arcdark"', '"electrolize"', '"dark"', '"userset"'],
        optionsMap: {
            '"default"': 'Default (by Simon Wright)',
            '"classic"': 'WP Classic (by Phyco)',
            '"steelgrey"': 'WP Steel Grey (by Phyco)',
            '"black"': 'WP Black (by =CHRIS=)',
            '"teal"': 'WP Teal (by =CHRIS=)',
            '"arcdark"': 'WP Arc-Dark (by =CHRIS=)',
            '"electrolize"': 'WP Electrolize (by =CHRIS=)',
            '"dark"': 'WP Dark (by Nukkels)',
            '"userset"': 'User Set',
        }
    },
    'wpp_display_usertheme_bgcolour': {
        relevance: 'all',
        default: '#000',
        category: 'display',
        subcategory: 'themesandfonts',
        friendlyName: 'Primary Background Colour - User Set Theme',
        description: 'Sets the primary colour for the background',
        type: 'color'
    },
    'wpp_display_usertheme_fgcolour': {
        relevance: 'all',
        default: '#000',
        category: 'display',
        subcategory: 'themesandfonts',
        friendlyName: 'Primary Foreground Colour - User Set Theme',
        description: 'Sets the primary colour for the foreground',
        type: 'color'
    },
    'wpp_display_usertheme_fgcolour2': {
        relevance: 'all',
        default: '#000',
        category: 'display',
        subcategory: 'themesandfonts',
        friendlyName: 'Secondary Foreground Colour - User Set Theme',
        description: 'Sets the secondary colour for the foreground',
        type: 'color'
    },
    'wpp_display_usertheme_fgcolour3': {
        relevance: 'all',
        default: '#000',
        category: 'display',
        subcategory: 'themesandfonts',
        friendlyName: 'Tertiary Foreground Colour - User Set Theme',
        description: 'Sets the tertiary colour for the foreground',
        type: 'color'
    },
    'wpp_whirlpoolAPIKey': {
        relevance: 'all',
        default: '',
        category: 'config',
        subcategory: 'scriptconfig',
        friendlyName: 'API Key',
        description: 'The key used for API authentication.'
    },
    'wpp_display_whimAlert': {
        relevance: 'all',
        default: true,
        category: 'display',
        subcategory: 'displaymodifications',
        friendlyName: 'Whim Alert',
        description: 'Display an alert for unread Private Messages received.'
    },
    'wpp_wlr_tempDisable': {
        relevance: 'forums',
        default: true,
        category: 'posts',
        subcategory: 'threadtracker',
        friendlyName: 'Add a button to temporarily disable the WLR tracker (top right corner)',
        description: 'When the button is clicked it will disable the thread tracker until another thread is loaded'
    },
    'wpp_watchedthreadsextra': {
        relevance: 'forums',
        default: 'improved',
        category: 'posts',
        subcategory: 'watchedthreads',
        friendlyName: 'Improved Watched Threads Page',
        description: 'Adds options such as "Open All Threads in Tabs" and other minor tweaks',
        type: 'dropdown',
        options: ['"default"', '"improved"', '"improvedswap"'],
        optionsMap: {
            '"default"': 'Disabled',
            '"improved"': 'Enabled',
            '"improvedswap"': 'Enabled with Reversed Button Layout',
        }
    },
    'wpp_display_notify_background': {
        relevance: 'all',
        default: '#3a332a',
        category: 'display',
        subcategory: 'themesandfonts',
        friendlyName: 'Notification Bar Colour - All Themes',
        description: 'Sets the notification strip background colour',
        type: 'color'
    },
    'wpp_compose_enhancedEditorNew': {
        relevance: 'forums',
        default: 'default',
        category: 'posts',
        subcategory: 'posting',
        friendlyName: 'Enhanced Editor and Emoji',
        description: 'Appends the Whirlcode rows and emoji selector to new post, reply and wiki editors',
        type: 'dropdown',
        options: ['"default"', '"emojionly"', '"whirlonly"', '"disabled"'],
        optionsMap: {
            '"default"': 'Enabled (all)',
            '"emojionly"': 'Emoji Selector Only',
            '"whirlonly"': 'Whirlcode Only',
            '"disabled"': 'Disabled',
        }
    },
    'wpp_spinnerMenu': {
        relevance: 'all',
        default: 'none',
        category: 'display',
        subcategory: 'displaymodifications',
        friendlyName: 'Dynamic Menu System (select type)',
        description: 'Display a dropdown navigation menu for the site',
        type: 'dropdown',
        options: ['"none"', '"rightClick"', '"spinner"'],
        optionsMap: {
            '"none"': 'None',
            '"rightClick"': 'Right Click',
            '"spinner"': 'Spinner',
        }
    },
    'wpp_spinnerMenu_settingsLocation': {
        relevance: 'all',
        default: 'top',
        category: 'display',
        subcategory: 'displaymodifications',
        friendlyName: 'Location of settings link in dynamic menu',
        description: 'Adjusts where this will appear',
        type: 'dropdown',
        options: ['"none"', '"top"', '"underuser"', '"bottom"'],
        optionsMap: {
            '"none"': 'None',
            '"top"': 'Top',
            '"underuser"': 'Under User',
            '"bottom"': 'Bottom',
        }
    },
    'wpp_avatars_enabled': {
        relevance: 'all',
        default: 'static',
        category: 'users',
        subcategory: 'avatars',
        friendlyName: 'Toggle Avatar Display Modes',
        description: 'Toggles the display mode for the avatar feature, to disable or enable additional functionality',
        type: 'dropdown',
        options: ['"none"', '"all"', '"both"', '"static"', '"animated"'],
        optionsMap: {
            '"none"': 'Disabled',
            '"all"': 'User Set Avatars & Generated Identicons',
            '"both"': 'User Set Avatars only',
            '"static"': 'User Set Static Avatars only',
            '"animated"': 'User Set Animated Avatars only',
        }
    },
    'wpp_display_avatarsOnProfile': {
        relevance: 'all',
        default: false,
        category: 'users',
        subcategory: 'avatars',
        friendlyName: 'Show Avatars on User Profile pages',
        description: 'Shows avatars on User Profiles, and User Notes if enabled'
    },
    'wpp_display_superProfile': {
        relevance: 'forums',
        default: 'default',
        category: 'posts',
        subcategory: 'watchedthreads',
        friendlyName: 'Super Profile Page',
        description: 'Shows your Watched Threads on your User Profile page',
        type: 'dropdown',
        options: ['"default"', '"all"', '"unread"'],
        optionsMap: {
            '"default"': 'Disabled',
            '"all"': 'Enabled',
            '"unread"': 'Enabled (Unread Watched Threads Only)',
        }
    },
    'wpp_watchedThreadsAlert': {
        relevance: 'forums',
        default: 'default',
        category: 'posts',
        subcategory: 'watchedthreads',
        friendlyName: 'Mark as Read Button Actions',
        description: 'Choose an action to occur when you click "mark page as read" on the last page of a thread',
        type: 'dropdown',
        options: ['"default"', '"profile"', '"watched"', '"forum"'],
        optionsMap: {
            '"default"': 'None',
            '"profile"': 'Go to User Profile',
            '"watched"': 'Go to Watched Threads',
            '"forum"': 'Go to All Forums',
        }
    },
    'wpp_wlr_enabled': {
        relevance: 'forums',
        default: 'all',
        category: 'posts',
        subcategory: 'threadtracker',
        friendlyName: 'Activate the WLR Tracker',
        description: 'Tracks threads/posts on Whirlpool by highlighting their unread/read status',
        type: 'dropdown',
        options: ['"none"', '"all"', '"forums"', '"watched"', '"profile"'],
        optionsMap: {
            '"none"': 'Disabled',
            '"all"': 'Enabled',
            '"forums"': 'Enabled on Forums pages only',
            '"watched"': 'Enabled on Forums & Watched Threads pages',
            '"profile"': 'Enabled on Forums & User Profile pages',
        }
    },
    'wpp_wlr_noTrackSticky': {
        relevance: 'forums',
        default: false,
        category: 'posts',
        subcategory: 'threadtracker',
        friendlyName: 'Don\'t highlight sticky threads',
        description: 'If the thread is a sticky, WLR will not highlight it'
    },
    'wpp_wlr_display_onlyEndSquare': {
        relevance: 'forums',
        default: false,
        category: 'posts',
        subcategory: 'threadtracker',
        friendlyName: 'Colour end square',
        description: 'Just highlight the end square of tracked threads'
    },
    'wpp_wlr_display_acrosscolumns': {
        relevance: 'forums',
        default: false,
        category: 'posts',
        subcategory: 'threadtracker',
        friendlyName: 'Colour across Reps/Reads Columns',
        description: 'Highlights the reps/reads columns as well'
    },
    'wpp_wlr_display_flipStyles': {
        relevance: 'forums',
        default: false,
        category: 'posts',
        subcategory: 'threadtracker',
        friendlyName: 'Highlight unread posts instead of read posts (Posts Pages)',
        description: 'Reverses the default highlighting'
    },
    'wpp_wlr_display_readThreadColour': {
        relevance: 'forums',
        default: '#CBC095',
        category: 'posts',
        subcategory: 'threadtracker',
        friendlyName: 'No Unread Posts Colour',
        description: 'Used to highlight threads containing no unread posts',
        type: 'color'
    },
    'wpp_wlr_display_unreadThreadColour': {
        relevance: 'forums',
        default: '#95B0CB',
        category: 'posts',
        subcategory: 'threadtracker',
        friendlyName: 'Unread Posts Colour',
        description: 'Used to highlight threads containing posts you haven\'t read',
        type: 'color'
    },
    'wpp_wlr_display_unreadPostColour': {
        relevance: 'forums',
        default: '#CFCBBC',
        category: 'posts',
        subcategory: 'threadtracker',
        friendlyName: 'Post Highlight Colour (Posts Pages)',
        description: 'Used to highlight posts (right most column) on posts pages',
        type: 'color'
    },
    'wpp_hiddenUsers_remove': {
        relevance: 'forums',
        default: false,
        category: 'users',
        subcategory: 'hiddenusers',
        friendlyName: 'Remove any indication of ignored users',
        description: 'Where posts would be shown as hidden, the indicator will be removed'
    },
    'wpp_embed_videos': {
        relevance: 'forums',
        default: true,
        category: 'posts',
        subcategory: 'displayoptions',
        friendlyName: 'Inline Videos',
        description: 'Displays videos inline in threads for WP+ users'
    },
    'wpp_display_syntaxHighlight': {
        relevance: 'forums',
        default: true,
        category: 'posts',
        subcategory: 'displayoptions',
        friendlyName: 'Syntax Highlighting for code blocks',
        description: '"Prettifies" data entered in "codeblock" Whirlcode'
    },
    'wpp_display_opeditlarge': {
        relevance: 'forums',
        default: false,
        category: 'posts',
        subcategory: 'displayoptions',
        friendlyName: 'Increase Edited or OP Post Prominence',
        description: 'Uses larger font to highlight edited or OP posts'
    },
    'wpp_removeLinkToLastPage': {
        relevance: 'forums',
        default: false,
        category: 'posts',
        subcategory: 'threadsettings',
        friendlyName: 'Make the links on the main forums page go to the start of the thread',
        description: 'Links take you to the end by default'
    },
    'wpp_links_longThread': {
        relevance: 'forums',
        default: true,
        category: 'posts',
        subcategory: 'threadsettings',
        friendlyName: 'Single Page Version',
        description: 'These settings add links to display only posts from certain users'
    },
    'wpp_links_archive': {
        relevance: 'forums',
        default: true,
        category: 'posts',
        subcategory: 'threadsettings',
        friendlyName: 'Archive Version',
        description: 'These settings add links to display only posts from certain users'
    },
    'wpp_links_mod': {
        relevance: 'forums',
        default: true,
        category: 'posts',
        subcategory: 'threadsettings',
        friendlyName: 'Mod posts',
        description: 'These settings add links to display only posts from certain users'
    },
    'wpp_links_originalPoster': {
        relevance: 'forums',
        default: true,
        category: 'posts',
        subcategory: 'threadsettings',
        friendlyName: 'OP posts',
        description: 'These settings add links to display only posts from certain users'
    },
    'wpp_links_rep': {
        relevance: 'forums',
        default: true,
        category: 'posts',
        subcategory: 'threadsettings',
        friendlyName: 'Rep posts',
        description: 'These settings add links to display only posts from certain users'
    },
    'wpp_links_unanswered': {
        relevance: 'forums',
        default: true,
        category: 'posts',
        subcategory: 'threadsettings',
        friendlyName: 'Link to Unanswered Threads',
        description: 'Adds a link to only display unanswered threads after the forum name'
    },
    'wpp_sync_enabled': {
        relevance: 'forums',
        default: false,
        category: 'config',
        subcategory: 'sync',
        friendlyName: 'Activate Synchronisation Functionality',
        description: 'Enables the sync function'
    },
    'wpp_sync_encryptionKey': {
        relevance: 'forums',
        default: '',
        category: 'config',
        subcategory: 'sync',
        friendlyName: 'Encryption Password',
        description: 'Must be the same for all of your WP+ installs',
        type: 'password'
    },
    'wpp_sync_key': {
        relevance: 'forums',
        default: '',
        category: 'config',
        subcategory: 'sync',
        friendlyName: 'Access Key',
        description: 'Your access key as provided by the sync server'
    },
    'wpp_sync_user': {
        relevance: 'forums',
        default: '',
        category: 'config',
        subcategory: 'sync',
        friendlyName: 'Whirlpool User ID',
        description: 'Your User ID Number must be keyed in'
    },
    'wpp_sync_server': {
        relevance: 'forums',
        default: '',
        category: 'config',
        subcategory: 'sync',
        friendlyName: 'Server Address',
        description: 'The address of the server that you are syncing your data with (must be a http<b>s</b> URL or your browser may block it)'
    },
    'wpp_autoSubscribeToNewThread': {
        relevance: 'forums',
        default: false,
        category: 'posts',
        subcategory: 'posting',
        friendlyName: 'Automatically watch/mark as read when you post',
        description: 'When you reply to a thread, it will automatically be added to your watched threads'
    },
    'wpp_compose_image_uploader': {
        relevance: 'forums',
        default: false,
        category: 'posts',
        subcategory: 'posting',
        friendlyName: 'Enable image uploader integration',
        description: 'Adds integration with imgbb.com for uploading images and inserting into posts'
    },
    'wpp_compose_movePreview': {
        relevance: 'forums',
        default: true,
        category: 'posts',
        subcategory: 'posting',
        friendlyName: 'Move reply preview above inline reply box',
        description: 'Shows the inline reply preview at the end of the thread rather than below the reply field'
    },
    'wpp_compose_quickReply': {
        relevance: 'forums',
        default: true,
        category: 'posts',
        subcategory: 'posting',
        friendlyName: 'Quick Reply',
        description: 'Automatically open the inline reply box at the end of every thread'
    },
    'wpp_defaultRecentActivityDays': {
        relevance: 'all',
        default: '7',
        category: 'users',
        subcategory: 'usersettings',
        friendlyName: 'Default amount of recent activity to display on a user page',
        description: 'Adjusts the default variable',
        type: 'dropdown',
        options: ['"1"', '"3"', '"7"', '"14"', '"30"', '"60"', '"120"', '"240"', '"365"'],
        optionsMap: {
            '"1"': '1 Day',
            '"3"': '3 Days',
            '"7"': '7 Days',
            '"14"': '14 Days',
            '"30"': '30 Days',
            '"60"': '60 Days',
            '"120"': '120 Days',
            '"240"': '240 Days',
            '"365"': '365 Days',
        }
    },
    'wpp_display_bannedPosts': {
        relevance: 'forums',
        default: false,
        category: 'posts',
        subcategory: 'displayoptions',
        friendlyName: 'Hide any indication of posts from banned users',
        description: 'Removes posts from view that were created by users who are currently banned'
    },
    'wpp_display_customCSS': {
        relevance: 'forums',
        default: '',
        category: 'display',
        subcategory: 'themesandfonts',
        friendlyName: 'Custom CSS',
        description: 'Add custom styles to Whirlpool',
        type: 'textarea'
    },
    'wpp_display_emoticons_enabled': {
        relevance: 'forums',
        default: false,
        category: 'posts',
        subcategory: 'displayoptions',
        friendlyName: 'Display Image Emoticons (Smilies)',
        description: 'Converts text smilies on Whirlpool into images'
    },
    'wpp_display_widescreen': {
        relevance: 'forums',
        default: false,
        category: 'display',
        subcategory: 'displaymodifications',
        friendlyName: 'Custom Display Width',
        description: 'Adjust the website to fit a larger or smaller portion of the screen'
    },
    'wpp_display_width_percentage': {
        relevance: 'forums',
        default: '100',
        category: 'display',
        subcategory: 'displaymodifications',
        friendlyName: 'Enter Width Percentage',
        description: 'Defaults to 100 for full widescreen view when this is enabled',
        type: 'number'
    },
    'wpp_display_floatGoToTop': {
        relevance: 'all',
        default: false,
        category: 'display',
        subcategory: 'displaymodifications',
        friendlyName: 'Floating Go To Top of Page Button',
        description: 'Adds a floating button to send your browser to the top of the current page'
    },
    'wpp_display_floatSidebar': {
        relevance: 'all',
        default: false,
        category: 'display',
        subcategory: 'displaymodifications',
        friendlyName: 'Float the sidebar',
        description: 'Keeps the sidebar navigation visible when scrolling'
    },
    'wpp_display_floatTopbar': {
        relevance: 'all',
        default: false,
        category: 'display',
        subcategory: 'displaymodifications',
        friendlyName: 'Float the topbar',
        description: 'Keeps the topbar visible when scrolling'
    },
    'wpp_display_hideClosedThreadsOnProfile': {
        relevance: 'forums',
        default: false,
        category: 'users',
        subcategory: 'usersettings',
        friendlyName: 'Hide closed threads on user profiles',
        description: 'Prevents closed threads from appearing on user pages'
    },
    'wpp_display_hideDeletedPosts': {
        relevance: 'forums',
        default: false,
        category: 'posts',
        subcategory: 'displayoptions',
        friendlyName: 'Hide deleted posts',
        description: 'Hide any reference of deleted posts in threads'
    },
    'wpp_display_hideDeletedThreads': {
        relevance: 'forums',
        default: false,
        category: 'posts',
        subcategory: 'threadsettings',
        friendlyName: 'Hide Deleted Threads in forums',
        description: 'Prevents deleted threads from being seen'
    },
    'wpp_display_hideFooter': {
        relevance: 'all',
        default: false,
        category: 'display',
        subcategory: 'displaymodifications',
        friendlyName: 'Hide the forum footer',
        description: 'Hides the footer navigation on each page'
    },
    'wpp_display_hideMovedThreads': {
        relevance: 'forums',
        default: false,
        category: 'posts',
        subcategory: 'threadsettings',
        friendlyName: 'Hide Moved Threads in forums',
        description: 'Prevents moved threads from being seen'
    },
    'wpp_display_hideTheseForums': {
        relevance: 'forums',
        default: '',
        category: 'posts',
        subcategory: 'threadsettings',
        friendlyName: 'Forums to hide (on main forums page)',
        description: 'Enter the ID\'s of the forums you want to hide (eg. "35 92 137")'
    },
    'wpp_display_oldProfile': {
        relevance: 'forums',
        default: false,
        category: 'users',
        subcategory: 'usersettings',
        friendlyName: 'Use old User Profile page design',
        description: 'Shows recent thread activity below user info as per the old site design'
    },
    'wpp_display_oldfont': {
        relevance: 'all',
        default: false,
        category: 'display',
        subcategory: 'themesandfonts',
        friendlyName: 'Use old Whirlpool fonts',
        description: 'Switches to the pre-2015 re-design font styles (credit to =CHRIS=)'
    },
    'wpp_display_penaltyBox': {
        relevance: 'forums',
        default: false,
        category: 'display',
        subcategory: 'displaymodifications',
        friendlyName: 'Highlight when a user is in the penalty box',
        description: 'Shows a more noticeable visual indicator on posts made by users currently in the penalty box or banned'
    },
    'wpp_display_poweredby': {
        relevance: 'all',
        default: true,
        category: 'display',
        subcategory: 'displaymodifications',
        friendlyName: 'Display random "forums powered by" text',
        description: 'An original Whirlpool feature resurrected, because why not?'
    },
    'wpp_display_smallfont': {
        relevance: 'all',
        default: false,
        category: 'display',
        subcategory: 'themesandfonts',
        friendlyName: 'Use smaller font',
        description: 'Displays a smaller font for posts, like Whirlpool did in the past'
    },
    'wpp_display_userPageInfoToggle': {
        relevance: 'forums',
        default: false,
        category: 'users',
        subcategory: 'usersettings',
        friendlyName: 'Toggle to show/hide user info on Profile pages',
        description: 'Adds a toggle to show/hide the user info panel as required'
    },
    'wpp_embed_images': {
        relevance: 'forums',
        default: true,
        category: 'posts',
        subcategory: 'displayoptions',
        friendlyName: 'Inline Images',
        description: 'Displays images inline in threads for WP+ users'
    },
    'wpp_hiddenUsers_enabled': {
        relevance: 'forums',
        default: false,
        category: 'users',
        subcategory: 'hiddenusers',
        friendlyName: 'Hide Posts',
        description: 'Adds an option to hide posts from users (next to aura)'
    },
    'wpp_hideWhimActivity': {
        relevance: 'forums',
        default: false,
        category: 'users',
        subcategory: 'usersettings',
        friendlyName: 'Hide Whim Activity on User Profile page',
        description: 'Hides your recent private messages from the User Profile page'
    },
    'wpp_hideembedurl': {
        relevance: 'forums',
        default: false,
        category: 'posts',
        subcategory: 'displayoptions',
        friendlyName: 'Hide Embed URL',
        description: 'Hides the URLs of inline image/video content'
    },
    'wpp_numberPosts': {
        relevance: 'forums',
        default: false,
        category: 'posts',
        subcategory: 'displayoptions',
        friendlyName: 'Numbered Posts',
        description: 'Displays the current post number in a thread on each post'
    },
    'wpp_persistentEditLink': {
        relevance: 'forums',
        default: false,
        category: 'posts',
        subcategory: 'displayoptions',
        friendlyName: 'Persistent Post Edit Link',
        description: 'Persists the edit button next to your own posts, even after WP removes it'
    },
    'wpp_promoteWatchedForum': {
        relevance: 'forums',
        default: '',
        category: 'posts',
        subcategory: 'watchedthreads',
        friendlyName: 'Forum ID to move to the top of watched threads list',
        description: 'Enter the ID of the forum you want to move to the top (eg. "35")'
    },
    'wpp_quickEdit': {
        relevance: 'forums',
        default: true,
        category: 'posts',
        subcategory: 'posting',
        friendlyName: 'Quick Edit',
        description: 'Allows inline editing of posts'
    },
    'wpp_quickWhim': {
        relevance: 'forums',
        default: true,
        category: 'users',
        subcategory: 'usersettings',
        friendlyName: 'Quick Whim',
        description: 'Adds a Whim box to User Profile pages'
    },
    'wpp_recentActivityOverlay': {
        relevance: 'all',
        default: false,
        category: 'display',
        subcategory: 'displaymodifications',
        friendlyName: 'Recent Activity Overlay',
        description: 'Shows your recent forum activity in an overlay panel for easy access (make sure you enter your API Key in the Script Configuration)'
    },
    'wpp_recentActivityOverlay_days': {
        relevance: 'all',
        default: '7',
        category: 'display',
        subcategory: 'displaymodifications',
        friendlyName: 'Recenty Activity Duration',
        description: 'How much of your recent activity to use for the overlay',
        type: 'dropdown',
        options: ['"1"', '"3"', '"7"', '"14"', '"30"', '"60"', '"120"', '"240"', '"365"'],
        optionsMap: {
            '"1"': '1 Day',
            '"3"': '3 Days',
            '"7"': '7 Days',
            '"14"': '14 Days',
            '"30"': '30 Days',
            '"60"': '60 Days',
            '"120"': '120 Days',
            '"240"': '240 Days',
            '"365"': '365 Days',
        }
    },
    'wpp_returnafterlogin': {
        relevance: 'all',
        default: false,
        category: 'users',
        subcategory: 'usersettings',
        friendlyName: 'Return to previous page after logging in',
        description: 'Redirects you to the last thread viewed before login<br /><small>Must be enabled on both the whirlpool.net.au and forums.whirlpool.net.au domains to work correctly</small>'
    },
    'wpp_savePosts': {
        relevance: 'forums',
        default: false,
        category: 'posts',
        subcategory: 'threadsettings',
        friendlyName: 'Save Posts',
        description: 'Adds a button next to each post to save a link to refer back to it'
    },
    'wpp_stats_postsPerDay': {
        relevance: 'forums',
        default: true,
        category: 'users',
        subcategory: 'usersettings',
        friendlyName: 'Enable "Posts per day" statistic',
        description: 'Calculates a statistic on user pages'
    },
    'wpp_userNotes_enabled': {
        relevance: 'forums',
        default: false,
        category: 'display',
        subcategory: 'displaymodifications',
        friendlyName: 'User Notes',
        description: 'Keep notes on each user'
    },
    'wpp_watchedAlert': {
        relevance: 'all',
        default: false,
        category: 'display',
        subcategory: 'displaymodifications',
        friendlyName: 'Watched Thread Alert',
        description: 'Display a banner notification when you have unread Watched Threads (API Key required in Script Configuration)'
    },
    'wpp_watchedThreadsForumBarHide': {
        relevance: 'forums',
        default: false,
        category: 'posts',
        subcategory: 'watchedthreads',
        friendlyName: 'Watched Thread Bar Hide',
        description: 'Hide the horizontal alert bar that Whirlpool inserts to indicate which post you have read up to in a thread'
    },
    'wpp_watchedThreadsOldMarkAsRead': {
        relevance: 'forums',
        default: false,
        category: 'posts',
        subcategory: 'watchedthreads',
        friendlyName: 'Mark as Read button enhancer',
        description: 'Clicking the Mark as Read button at the bottom of a watched thread will complete an action of your choosing. Also permanently shows the Go to Watched Threads button'
    },
    'wpp_whimLink': {
        relevance: 'forums',
        default: true,
        category: 'posts',
        subcategory: 'displayoptions',
        friendlyName: 'Whim Links',
        description: 'Adds a Whim link next to a users post count on each post'
    },
    'wpp_hideRecentActivityThreads' : {
        relevance: 'forums',
        default: false,
        category: 'users',
        subcategory: 'usersettings',
        friendlyName: 'Hide Selected Threads from Recent Activity Section',
        description: 'Hides certain threads from appearing in the Recent Activity section on your user profile page'
    },
    'wpp_filterWatchedThreadsToOPReplies' : {
        relevance: 'forums',
        default: false,
        category: 'posts',
        subcategory: 'watchedthreads',
        friendlyName: 'Filter to show only watched threads with the latest reply being from the OP',
        description: 'Adds a toggle to the Watched Threads list to show only threads where the latest reply is from the original poster'
    },
        // Add other key mappings as needed
    };

WhirlpoolPlus.install = {

    run: function () {

        // Set any undefined localStorage values to their default values
        this._setDefaults();

        var oldVersion = WhirlpoolPlus.util.get('storageVersion');
        var defaultDB = '2021.6';

        if (oldVersion == null || oldVersion == false) {
            oldVersion = 0;
            WhirlpoolPlus.util.set('data_db_version', defaultDB)
        }

        // No current update code

        // Show the update dialog (But only on a forums page)
        if (WhirlpoolPlus.util.pageType.forums) {
            this._upgradeDialog();
        }

        // Set version information
        WhirlpoolPlus.util.set('storageVersion', WhirlpoolPlus.about.storageVersion);
        WhirlpoolPlus.util.set('scriptVersion', WhirlpoolPlus.about.version);
        WhirlpoolPlus.util.set('prerelease', WhirlpoolPlus.about.prerelease);

    },
    // Set any undefined localStorage values to the default value
    _setDefaults: function () {
    const keys = Object.keys(settingsMap);

    keys.forEach(key => {
        const mapping = settingsMap[key];

        // Skip keys without a valid 'relevance' property
        if (!mapping || !mapping.relevance) return;

        // Handle forum-specific and global keys
        const isForumPage = WhirlpoolPlus.util.pageType.forums;
        const isRelevantForPage =
            (mapping.relevance === 'forums' && isForumPage) || mapping.relevance === 'all';

        if (isRelevantForPage && !WhirlpoolPlus.util.exists(key)) {
            let valueToSet = mapping.default !== undefined ? mapping.default : '';

            // Always store values as valid JSON
            localStorage.setItem(key, JSON.stringify(valueToSet));
        }
    });
    },
    //Upgrade Dialogue Box
    _upgradeDialog: function () {
        var dialogHtml =
        '<div id="upgradeDialog" style="display:none;">' + // Add a container for the modal
        '<h1>WP+</h1>' +
        '<p>Version ' + WhirlpoolPlus.about.versionText() + '</p>';

    if (WhirlpoolPlus.about.prerelease > 0) {
        dialogHtml += '<div><strong>This is a prerelease version. Please report any bugs to <a href="https://forums.whirlpool.net.au/user/105852">Phyco</a>.</strong></div>';
    }

    // Check for new installs
    if (WhirlpoolPlus.util.get('scriptVersion') === false) {
        dialogHtml += '<br /><div>It looks like this is the first time you have installed the script! You can access script settings and information from the "WP+ Settings" link in the sidebar.</div>';
    }

    dialogHtml += '<br /><div style="text-align:left"><strong>New in this version: </strong>' + WhirlpoolPlus.about.changelog[WhirlpoolPlus.about.version] + '</div>';
    dialogHtml += '<br /><div>For an extended changelog, see WP+ Settings &gt; Info</div>';
    dialogHtml += '<br /><div>If you experience issues with this version of WP+ please check the Whirlpool Plus Script thread under Feedback</div>';
    dialogHtml += '<br /><br /><button type="button" class="close-modal" rel="modal:close">Close</button>';
    dialogHtml += '</div>'; // Close the modal container

    // Append the dialog to the body
    $('body').append(dialogHtml);

    // Initialize the jQuery Modal
    $('#upgradeDialog').modal({
        fadeDuration: 250, // Optional: Fade-in duration
        fadeDelay: 0.5     // Optional: Delay before fading starts
    });

    // Close the modal container
    $(document).on('click', '.close-modal', function () {
        $.modal.close();
    });
},

}
//Setup utlity functions for the script
WhirlpoolPlus.util = {

    // Get a value from localStorage
    get: function (key) {
        var value = unsafeWindow.localStorage.getItem('wpp_' + key);

        if (value == null) {
            return false;
        } else {
            try {
                return JSON.parse(value);
            } catch (e) {
                console.warn('Error loading Whirlpool Plus setting: ' + key + ' = ' + value)
            }
        }
    },

    // Set a value to localStorage
    set: function (key, value) {
        unsafeWindow.localStorage.setItem('wpp_' + key, JSON.stringify(value));
    },

    // Remove a value from localStorage
    rem: function (key) {
        unsafeWindow.localStorage.removeItem('wpp_' + key);
    },

    // Determine the existence of a value in localStorage
    exists: function (key) {
        return unsafeWindow.localStorage.getItem(key) != null;
    },

    // Define CSS styles
    css: async function (styles) {
        GM.addStyle(styles);
    },

    // Load images
    image: function (resource) {
        return GM.getResourceUrl(resource);
    },

    // Load external resources
    resource: function (resource) {
        return GM_getResourceText(resource);
    },

    // Initialise the pageType
    initPageType: function () {
    for (const key in WhirlpoolPlus.util.pageType) {
        if (Object.prototype.hasOwnProperty.call(WhirlpoolPlus.util.pageType, key)) {
            WhirlpoolPlus.util.pageType[key] = document.location.href.includes(WhirlpoolPlus.util.pageType[key]);
        }
    }
    },
    // Bypass Content Security Policy with a Cookie
    bypassCSP: function setCookie() {
        var date = new Date();
        var expire = new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000);
        var dateString = date.toISOString().substr(0,10);
        var cookieString = "disablecsp=" + dateString + "; expires=" + expire + ";SameSite=None; Secure; Path=/; Partitioned;";
        document.cookie = cookieString;
    },

    // Define page types by URL string. Should not be accessed without calling initPageType
    pageType: {

        'alert': '/forum/alert/',     // An alert page
        'posts': '/thread/', // The page where you view posts
        'postsOld': 'forum-replies.cfm', // The old page where you view posts for backwards compatibility
        'threads': '/forum/',           // The page where you view threads
        'profile': '/user/',            // User profile page
        'auraVotes': 'action=yourvotes',  // List of all aura votes
        'newThread': 'action=newthread',  // Creating a new thread
        'newTWAM': 'action=twam',  // Creating a new TWAM thread
        'reply': 'action=reply',      // Posting a reply
        'edit': 'action=edit',       // Editing a post
        'search': 'search?q=',     // Thread search
        'forums': 'forums.whirlpool',  // forums.whirlpool.net.au
        'wiki': '.net.au/wiki/',     // Wiki
        'watchedThreads': 'action=watched',    // Watched threads page
    },

    _notified: false,
    // Notification Panel
    notify: function (message, important) {
        var color = '#fff',
            background = WhirlpoolPlus.util.get('display_notify_background'),
            opacity = '0.9';

        if (important === true) {
            color = '#fff';
            background = '#d87400';
        }

        if (!this._notified) {
            $('head').append('<style type="text/css">.wpplus_notify{ text-align: center; text-transform: capitalize; color: ' + color + '; } .wpplus_notify:hover{ cursor: pointer; } #ub_settings {margin-right: 50px;}</style>');
            var tb = $('#topbar');
            tb.addClass('notify');

            WhirlpoolPlus.util.css('#topbar.notify { width: 100% !important;  border-radius: 15px; background-color: ' + background + ' !important; }');
            WhirlpoolPlus.util.css('#topbar.notifyfloat { width: 100% !important; max-width: none !important; position: fixed; top: 0px; z-index: 999; opacity: ' + opacity + '; }');

            var floatnotify = function () {
                if (!this._notified) {
                    if (window.pageYOffset > 0) {
                        tb.addClass('notifyfloat');
                    }
                    else if (window.pageYOffset == 0) {
                        tb.removeClass('notifyfloat');
                    };
                }
            };

            $(window).on('scroll', floatnotify );

            this._notified = true;
        }
        $('#userbar').prepend('<span class="wpplus_notify"> ' + message + ' <a class="hide">(hide)</a> |   </span>');
        $('.hide').on("click", function (e) {
            $('.wpplus_notify').fadeOut();
            tb.removeClass('notifyfloat');
            tb.removeClass('notify');
            $(window).off("scroll", floatnotify);
        });
    },

    // Get the reply ID from a reply
    getReplyId: function (reply) {
        var num = reply.find('a[href*="/forum/?action=reply"]').prop('href').split('r=')[1];
        num = num.split('?');
        return parseInt(num);
    },

    // Get the user ID from a reply
    getReplyUserId: function (reply) {
        var num = reply.find('a[href*="/user/"]:not([href*="online"])').prop('href').split('/user/')[1];
        num = num.split('?');
        return parseInt(num);
    },

    // Get the reply number from a reply
    getReplyNumber: function (reply) {
        var num = reply.find('a[href*="/thread/"]').prop('href').split('#r')[1];
        num = num.split('?');
        return parseInt(num);
    },

    // Get the current thread number from the page source
    getThreadNumber: function () {
        return (typeof unsafeWindow.thread_id != 'undefined') ? (unsafeWindow.thread_id) : (false);
    },

    // Get the current page number from the page source
    getCurrentPageNumber: function () {
        return (typeof unsafeWindow.thread_page != 'undefined') ? (unsafeWindow.thread_page) : (false);
    },

    // Get the total page number for the current thread from the page source
    getTotalPageNumber: function () {
        return (typeof unsafeWindow.thread_pages != 'undefined') ? (unsafeWindow.thread_pages) : (false);
    },

    // Get the exact position of a reply from the page source
    getExactReplyPosition: function (reply) {
        var num = reply.find('a[href*="/thread/"]').prop('href').split('#r')[1];
        num = num.split('?');
        let currentPage = WhirlpoolPlus.util.getCurrentPageNumber();
        if (currentPage == 1) {
        return (typeof unsafeWindow.thread_id != 'undefined') ? (unsafeWindow.thread_id + '#r'+ parseInt(num)) : (false);
        }
        else {
        return (typeof unsafeWindow.thread_id != 'undefined') ? (unsafeWindow.thread_id +'?p='+ unsafeWindow.thread_page +'#r'+ parseInt(num)) : (false);
        }
    },

    // Get the user ID from the page source
    getUserId: function () {
        if (!WhirlpoolPlus.util.pageType.alert) {
        var uID = $('#ub_name a').prop('href');
        return uID.split('/').slice(-1)[0];
        };
    },

    // Get the username from the page source
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

        init: async function () {
            this.server = WhirlpoolPlus.util.get('sync_server');
            this.user = WhirlpoolPlus.util.get('sync_user');
            this.key = WhirlpoolPlus.util.get('sync_key');
            this.scriptId = WhirlpoolPlus.util.get('sync_scriptId');
            // In the past, this value was accidently encoded when stored. Now this is resolved,
            // it must still be encoded before use to ensure encrypted values are backwards-compatible
            this.encKey = encodeURIComponent(WhirlpoolPlus.util.get('sync_encryptionKey'));

            if (WhirlpoolPlus.util.get('sync_enabled')) {
                let loader = await WhirlpoolPlus.util.image('loader');
                $('body').append('<div id="syncing" style="display: none; position: fixed; bottom: 0px; right: 0px; background-color: #3D3327; z-index: 10; padding: 6px 2px 2px 6px; border-top-left-radius: 15px;"><img style="height: 30px; width: 30px;" src="' + loader + '" /></div>');

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
                // General request failure, usually caused by navigation whilst syncing
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

                        // server wants an update
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
                                // data to sync

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
    // Setup CSS for the modal settings window
    css: function () {
        var styles = '#wppSettingsOverlay { display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.5); z-index: 9999; }' +
        '#wppSettings { display: none; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: 10000; box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); overflow-y: auto; background-color:#999; border:1px solid #000; color:#333; padding:0 12px; height: 60%; width: 50%; min-height: 580px; min-width: 900px; }' +
        '#wppSettings #wppSettingsWrapper { overflow: hidden; width: 100%; height: 100%; }' +
        '#wppSettings #tabMenu { list-style:none; width:100%; margin: 10px 0px 0px 10px; }' +
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
        '#wppSettings #currentAvatars { width: 40%; margin: 0 auto; background: url("/img/forum/reply-e5e5e5.gif") repeat-x scroll center top #E5E5E5; padding: 5px 20px; border-radius: 4px; text-align: center; }' +
        '#wppSettings #currentAvatars:after { content: ""; display: table; clear: both; }' +
        '#wppSettings .avatarLabelStatic { font-weight: bold; margin: 0 auto; text-align: center; padding-bottom: 10px; }' +
        '#wppSettings .avatarLabelIdent { font-weight: bold; margin: 0 auto; text-align: center; padding-bottom: 10px; }' +
        '#wppSettings .avatarLabelAnimated { font-weight: bold; margin: 0 auto; text-align: center; padding-bottom: 10px; }' +
        '#wppSettings .avatarRemove { font-weight: bold; margin: 0 auto; text-align: center; padding-bottom: 10px; }' +
        '#wppSettings .identicon { height: 80px; width: 80px; margin: 0 auto; }' +
        '#savedPosts { display:none; }' +
        '#currentWLR { display:none; }' +
        '#wppSettings .bottomrow { width:98%;height:10px;bottom:4%;position:absolute;color:#fff;left:1%; }';

        if (!WhirlpoolPlus.util.pageType.forums) {
            styles += '.wpp_hideNotForum { display: none; }';
        } else {
            styles += '.wpp_showNotForum { display: none; }';
        }

        return styles;
    },
    // Initialise Settings
    init: async function () {
        let noavatar = await WhirlpoolPlus.util.image('noavatar');
        WhirlpoolPlus.util.css('#wppSettings .avatar { background-image: url("' + noavatar + '"); background-repeat: no-repeat; height: 80px; width: 80px; margin: 0 auto; }' +
        '#currentUserAvatar { background-image: url("' + noavatar + '"); background-repeat: no-repeat; height: 80px; width: 80px; margin: 0 auto; }');
        var dbUpgrade = $('<li id="menu_dbUpgrade" style="background-color: #936328;"><a href="#"><span>WP+ Database Upgrade Required</span></a></li>');
        if (WhirlpoolPlus.util.get('data_db_version') !== '2021.6' && (window.location.href.indexOf('forums.whirlpool.net.au') > -1)) {
            $('#menu_wpp').after(dbUpgrade);
                                };

        dbUpgrade.on("click", function () {
            openWpSettingsModal();
            return false;
        });

            // If the settings menu is in minimal mode, it will show far less settings
        const minimalMode = !WhirlpoolPlus.util.pageType.forums;
        if (!minimalMode) {

            (function () {
                const ALLOWED_HOSTS = ['imgur.com', 'postimg.cc', 'imgbb.com', 'ibb.co'];

                function isSupportedHost(urlStr) {
                    try {
                        const u = new URL(urlStr);
                        return ALLOWED_HOSTS.some(h => u.hostname === h || u.hostname.endsWith('.' + h));
                    } catch {
                        return false;
                    }
                }

                function isDirectImage(urlStr) {
                    try {
                        const u = new URL(urlStr);
                        return /\.(png|jpe?g|gif)$/i.test(u.pathname);
                    } catch {
                        return false;
                    }
                }

                function setAvatarUI(kind, url) {
                    const $box = kind === 'static' ? $('#currentAvatar_static') : $('#currentAvatar_animated');
                    const $btn = kind === 'static' ? $('#currentAvatar_removeStatic') : $('#currentAvatar_removeAnimated');

                    if (url) {
                        $box.css('background-image', 'url("' + url + '")');
                        $btn.prop('disabled', null);

            // Replace any existing link span (avoid duplicates)
                        $box.next('.avatar-link.' + kind).remove();
                        $box.after('<span class="avatar-link ' + kind + '">Link: ' + url + '</span>');

                        if (!isSupportedHost(url)) {
                            alert(`Your ${kind} avatar was set up on a non-working or unsupported host, please consider updating it`);
                        }
                    } else {
                        $box.css('background-image', '');
                        $btn.prop('disabled', 'disabled');
                        $box.next('.avatar-link.' + kind).remove();
                    }
                }

                function refreshSingle(kind) {
                    WhirlpoolPlus.feat.avatar.getUserAvatar(WhirlpoolPlus.util.getUserId(), kind, function (data, textStatus, r) {
                        const url = r.responseText || '';
                        setAvatarUI(kind, url);
                    });
                }

                function refreshAvatars() {
                    // Load the avatars & check them for bad links
                    refreshSingle('static');
                    refreshSingle('animated');
                }

                // Identicon
                var userNumber = WhirlpoolPlus.util.getUserId();
                var shaObj = new jsSHA("SHA-512", "TEXT");
                shaObj.update("'" + userNumber + "'");
                var hash = shaObj.getHash("HEX");
                $('#currentAvatar_identicon').html('<canvas width="80" height="80" data-jdenticon-hash="' + hash + '" /></canvas>');
                jdenticon();

                refreshAvatars();

                // Avatar controls
                $('#currentAvatar_removeStatic').on("click", function () {
                    $(this).prop('disabled', 'disabled');

                    var apiKey = WhirlpoolPlus.util.get('whirlpoolAPIKey');
                    if (apiKey === '') {
                        apiKey = prompt('As you haven\'t saved your API key in the settings dialog, you\'ll need to provide one to update your avatar. It will not be stored.');
                    }

                    if (apiKey != null) {
                        WhirlpoolPlus.util.notify('Removing Avatar', true);
                        WhirlpoolPlus.feat.avatar.removeAvatar(apiKey, 'static', function (data, statusText, r) {
                            if (r.status == 200 && (r.responseText == 'Avatar Removed')) {
                                alert('WP+: ' + r.responseText);
                            } else {
                                alert('WP+: Avatar Update Failed: ' + r.responseText);
                            }
                            refreshAvatars(); // Will re-enable button
                        });
                    } else {
                        $(this).prop('disabled', null);
                        alert('WP+: Avatar not removed');
                    }
                });

                $('#currentAvatar_removeAnimated').on("click", function () {
                    $(this).prop('disabled', 'disabled');

                    var apiKey = WhirlpoolPlus.util.get('whirlpoolAPIKey');
                    if (apiKey === '') {
                        apiKey = prompt('As you haven\'t saved your API key in the settings dialog, you\'ll need to provide one to update your avatar. It will not be stored.');
                    }

                    if (apiKey != null) {
                        WhirlpoolPlus.util.notify('Removing Avatar', true);
                        WhirlpoolPlus.feat.avatar.removeAvatar(apiKey, 'animated', function (data, statusText, r) {
                            if (r.status == 200 && (r.responseText == 'Avatar Removed')) {
                                alert('WP+: ' + r.responseText);
                            } else {
                                alert('WP+: Avatar Update Failed: ' + r.responseText);
                            }
                            refreshAvatars(); // Will re-enable button
                        });
                    } else {
                        $(this).prop('disabled', null);
                        alert('WP+: Avatar not removed');
                    }
                });

                $('#currentAvatar_add').on("click", function () {
                    $(this).prop('disabled', 'disabled');

                    var apiKey = WhirlpoolPlus.util.get('whirlpoolAPIKey');
                    if (apiKey === '') {
                        apiKey = prompt('As you haven\'t saved your API key in the settings dialog, you\'ll need to provide one to update your avatar. It will not be stored.');
                    }

                    if (apiKey != null) {
                        const url = $('#currentAvatar_addUrl').val();

                        if (!url) {
                            alert('WP+: Enter a valid url to add');
                            $(this).prop('disabled', null);
                            return;
                        }

                        if (!isSupportedHost(url) || !isDirectImage(url)) {
                            alert('WP+: Enter a valid HTTPS direct image URL (jpg, jpeg, png, gif) hosted on imgur/postimg/imgbb');
                            $(this).prop('disabled', null);
                            return;
                        }

                        WhirlpoolPlus.util.notify('Adding Avatar', true);

                        WhirlpoolPlus.feat.avatar.updateAvatar(apiKey, url, function (data, statusText, r) {
                            if (r.status == 200 && (r.responseText == 'Avatar created/updated')) {
                                alert('WP+: ' + r.responseText);
                            } else {
                                alert('WP+: Avatar Update Failed: ' + r.responseText);
                            }

                            $('#currentAvatar_addUrl').val('');
                            refreshAvatars();
                            $('#currentAvatar_add').prop('disabled', null);
                        });

                    } else {
                        $(this).prop('disabled', null);
                        alert('WP+: Avatar not updated');
                    }
                });
            })();

            $('.unhideUser').on("click", function () {
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

    // WPP Settings Menu
    settingsMenu: async function () {
    'use strict';
    const WPPSettingsMenu = {

        // Create the modal structure
        createModal() {

            const overlay = $('<div id="wppSettingsOverlay" style="display:none;"></div>');
            const modal = $(`
                <div id="wppSettings" style="display:none;">
                    <div id="wppSettingsWrapper">
                    <ul id="tabMenu">
                    <li class="menuTab menuTab_active" data-menudiv="menuDiv_info">Script Info</li>
                    <li class="menuTab" data-menudiv="menuDiv_display">Display</li>
                    <li class="menuTab" data-menudiv="menuDiv_users">Users</li>
                    <li class="menuTab wpp_hideNotForum" data-menudiv="menuDiv_posts">Threads & Posts</li>
                    <li class="menuTab" data-menudiv="menuDiv_config">Script Config</li>
                    </ul>
                    <div class="menuDiv menuDiv_active" id="menuDiv_info">
                    <p class="description"><center><h1>Whirlpool Plus</h1></center></p>
                    <p class="description"><b>Where can I get help, or report an issue?</b></p>
                    <p class="description">The best way to get help is to post in the Whirlpool Plus thread in Feedback. This is also a good place to request new features.</p>
                    <p class="description">Another good source of information is the <a href="//whirlpool.net.au/wiki/whirlpool_plus" target="_blank">wiki article</a>.</p>
                    <p class="description">The script is currently maintained by <a href="//forums.whirlpool.net.au/user/105852">Phyco</a>, so you can also private message him.</p>

                    <p class="description"><b>Privacy</b></p>
                    <p class="description">As stated in the wiki article, a user script like Whirlpool Plus could possibly be used to steal user information.  To our knowledge, there is no such code in this script. </p>
                    <p class="description">The script relies on an external server to run the avatars and synchronisation. This server (endorph.net) is operated by <a href="//forums.whirlpool.net.au/user/272563">tbwd</a>. Both these services use your API key to validate your identity, but do not store this key.</p>

                    <p class="description"><b>About Whirlpool Plus</b></p>
                    <p class="description">Whirlpool Plus was created by various members of the Whirlpool community to add extra features to the Whirlpool Forums. Many people have contributed to the script- see the wiki article for credits.</p>
                    <!-- Changelog will be inserted here dynamically -->
                    <p class="description"><b>Changelog</b></p>
                    <div id="changelog"></div>
                    <p class="description">Further changelogs can be viewed in the source of previous versions</p>
                    </div>
                <div class="menuDiv" id="menuDiv_all"><div class="wpp_showNotForum wpp_settingsMessage">Only a limited subset of features are available outside the forums.whirlpool.net.au subdomain</div><div class="subSettings"><p class="subSettings_heading description"><b>All Uncategorised Settings</b></p><div class="subSettings_content"></div></div></div>
                <div class="menuDiv" id="menuDiv_display">
                <div class="wpp_showNotForum wpp_settingsMessage">Only a limited subset of features are available outside the forums.whirlpool.net.au subdomain</div>
                <div class="subSettings">
                <p class="subSettings_heading description"><b>Themes & Fonts</b></p>
                <div class="subSettings_content" data-subcategory="themesandfonts"></div>
                </div>
                <div class="subSettings">
                <p class="subSettings_heading description"><b>Display Modifications</b></p>
                <div class="subSettings_content" data-subcategory="displaymodifications"><p class="description">You can use this feature to store custom links (i.e. bookmarks) that are accessible in the settings and spinner menu. <br />Custom Links: </p><div id="customLinks"></div></div>
                </div>
                </div>
                <div class="menuDiv" id="menuDiv_users">
                <div class="wpp_showNotForum wpp_settingsMessage">Only a limited subset of features are available outside the forums.whirlpool.net.au subdomain</div>
                <div class="subSettings">
                <p class="subSettings_heading description"><b>User Settings</b></p>
                <div class="subSettings_content" data-subcategory="usersettings"></div>
                </div>
                <div class="subSettings">
                <p class="subSettings_heading description"><b>Avatars</b></p>
                <div class="subSettings_content" data-subcategory="avatars">
                <p class="tabDescription wpp_hideNotForum">To add an avatar, upload it to <a href="//imgur.com" target="_blank">Imgur</a> or <a href="//postimages.org">postimage</a>, then paste the <b>direct url</b> (ending in .jpg or similar) in the field below.<br /><br />If you see the X image but have previously uploaded an avatar, it may be prevented from working due to WP site changes.<br /><br />Your avatar <b>must</b> be 80x80 pixels or it will not work correctly.</p>
                <div id="currentAvatars" class="wpp_hideNotForum">
                <div>
                <div class="avatarLabelIdent">Identicon (Auto Generated)</div>
                <div id="currentAvatar_identicon" class="identicon wpp_hideNotForum"></div>
                </div>
                <div>
                <div class="avatarLabelStatic">Static</div>
                <div id="currentAvatar_static" class="avatar wpp_hideNotForum"></div>
                <div class="avatarRemove"><button type="button" id="currentAvatar_removeStatic">Remove</button></div>
                </div>
                <div>
                <div class="avatarLabelAnimated">Animated</div>
                <div id="currentAvatar_animated" class="avatar wpp_hideNotForum"></div>
                <div class="avatarRemove"><button type="button" id="currentAvatar_removeAnimated">Remove</button></div>
                </div>
                </div>
                <p class="description wpp_hideNotForum" style="text-align: center; border: none;"><input type="url" placeholder="Enter Direct Image URL Here" title="Paste or enter your avatar URL here. HTTPS URL Required" style="width: 250px;" id="currentAvatar_addUrl" /> <button type="button" id="currentAvatar_add">Add</button></p>
                </div>
                </div>
                <div class="subSettings">
                <p class="subSettings_heading description"><b>Hidden Users</b></p>
                <div id="hiddenUsers" class="subSettings_content" data-subcategory="hiddenusers"></div>
                </div>
                </div>
                <div class="menuDiv" id="menuDiv_posts">
                <div class="wpp_showNotForum wpp_settingsMessage">Only a limited subset of features are available outside the forums.whirlpool.net.au subdomain</div>
                <div class="subSettings">
                <p class="subSettings_heading description"><b>Thread Settings</b></p>
                <div class="subSettings_content" data-subcategory="threadsettings"><p class="description"><button id="showSavedPosts">Reveal Currently Saved Posts</button></p><div id="savedPosts"></div></div>
                </div>
                <div class="subSettings">
                <p class="subSettings_heading description"><b>Thread Tracker (WLR)</b></p>
                <div class="subSettings_content" data-subcategory="threadtracker"><p class="description"><button id="wlrList">Reveal Currently Tracked Threads</button></p><div id="currentWLR"></div></div>
                </div>
                <div class="subSettings">
                <p class="subSettings_heading description"><b>Watched Threads</b></p>
                <div class="subSettings_content" data-subcategory="watchedthreads"></div>
                </div>
                <div class="subSettings">
                <p class="subSettings_heading description"><b>Posting Tools</b></p>
                <div class="subSettings_content" data-subcategory="posting"></div>
                </div>
                <div class="subSettings">
                <p class="subSettings_heading description"><b>Display and Formatting Options</b></p>
                <div class="subSettings_content" data-subcategory="displayoptions"></div>
                </div>
                </div>
                <div class="menuDiv" id="menuDiv_config">
                <div class="wpp_showNotForum wpp_settingsMessage">Only a limited subset of features are available outside the forums.whirlpool.net.au subdomain</div>
                <div class="subSettings"><p class="subSettings_heading description"><b>Script Configuration</b></p><div class="subSettings_content" data-subcategory="scriptconfig">
                <p>
                <span>Data to Import</span>
                <span class="settingDesc">Paste a valid JSON string or prior exported data here to import into your browser</span>
                <br /><textarea id="importWPPData" style="width: 100%; height: 100px; margin:0 auto;"></textarea>
                <br /><button id="wpp_dwn-btn" style="margin-left:6px;float: left;line-height: 1.5em;padding: 5px;border: 1px solid #CDCDCD;border-radius: 2px;">Export WP+ Config</button><button id="wpp_upl-btn" style="margin-left:6px;float: left;line-height: 1.5em;padding: 5px;border: 1px solid #CDCDCD;border-radius: 2px;">Import WP+ Config</button><button id="wpp_upgradedb-btn" style="margin-left:6px;float: left;line-height: 1.5em;padding: 5px;border: 1px solid #CDCDCD;border-radius: 2px;">Upgrade Database</button><br /><br /></p>
                </div>
                </div>
                <div class="subSettings">
                <p class="subSettings_heading description"><b>Synchronisation</b></p>
                <div class="subSettings_content" data-subcategory="sync"><p class="description">WLR and User Notes data can be synchronised between script installs through the use of a sync server. You can create an account at the default server at <a href="https://s.endorph.net/account/" target="_blank">https://s.endorph.net/account/</a><br /><br /><b>Note: you must have entered your API key in script configuration for this feature to work</b></p></div>
                </div>
                <div class="subSettings wpp_hideNotForum">
                <p class="subSettings_heading description"><b>Experimental</b></p>
                <div class="subSettings_content">
                <p class="description"><b>Use of the below features is at your own risk. They are intended as a development tool only and may be added or removed at any time.</b></p>
                <p class="wpp_hideNotForum">
                <div id="experimentalsettings"></div>
                </p>
                </div>
                </div>
                </div>
                <div class="bottomrow">
                <button id="wppSettings_reset" style="float: left;line-height: 1.5em;padding: 5px;border: 1px solid #CDCDCD;border-radius: 2px;">Reset WP+ Config</button><button id="wppSettings_cancel" style="float:right;line-height: 1.5em;padding: 5px;border: 1px solid #CDCDCD;border-radius: 2px;">Close</button><center>Installed Script Version: ${WhirlpoolPlus.about.versionText()} | Database Version: ${WhirlpoolPlus.util.get('data_db_version')}</center>
                </div>
                </div>
                </div>
            `);

            $('body').append(overlay).append(modal);

            // Dynamically generate and insert changelog entries
            const changelogContainer = $('#changelog');
            for (const key in WhirlpoolPlus.about.changelog) {
                if (WhirlpoolPlus.about.changelog.hasOwnProperty(key)) {
                    changelogContainer.append(`<p class="description">Version ${key}: ${WhirlpoolPlus.about.changelog[key]}</p>`);
                }
            }

            // Set up Custom Links section for settings menu

            var customLinksHTML = '';
            var customLinks = WhirlpoolPlus.util.get('customLinks');
            for (i = 0; i <customLinks.length; i++) {
                customLinksHTML += '<p>URL <a href="' + customLinks[i] + '">' + customLinks[i] + '</a> <button type="button" class="removeLink" data-customlink="' + customLinks[i] + '">Remove</button></p>';
            };

            customLinksHTML += '<p><input type="text" placeholder="Enter Custom Link Here" title="Paste or enter the Custom Link you would like to add here." style="width: 125px;" id="customLinkText" /> <button type="button" id="customLinkText_add">Add</button></p>';
            $('#customLinks').append(customLinksHTML);
                        $('#customLinkText_add').on("click", function () {
                            $(this).prop('disabled', 'disabled');
                            var Link = $('#customLinkText').val();
                if (Link.match(/^(http|https):\/\//)) {
                                alert("Adding Custom Link");
                                customLinks.push(Link);
                                WhirlpoolPlus.util.set('customLinks', customLinks);
                                $('#customLinkText').val('');
			}
                            else {
                                alert("Your link is missing required elements, please ensure it includes the http or https prefix");
                            }
                    });

            $('.removeLink').on("click", function () {
                var theButton = $(this);
                var linkID = theButton.data('customlink');
                var customLinks = WhirlpoolPlus.util.get('customLinks');
                var linkToDelete = -1;

                for (i = 0; i < customLinks.length; i++) {
                    if (customLinks[i] == linkID) {
                        linkToDelete = i;
                        break;
                    }
                }

                if (linkToDelete >= 0) {
                    customLinks.splice(linkToDelete, 1);
                }

                WhirlpoolPlus.util.set('customLinks', customLinks);

                theButton.parent().remove();

            });

        // Setup WLR Tracked threads section for settings menu
            var currentWLRHTML = '';
                let pattern = /^wpp_sync_wlr_(?=.*[a-z])(?=.*[0-9])[a-z0-9]*$/gm;
                for (var i = 0; i <localStorage.length; i++) {
                    if (pattern.exec(localStorage.key(i))) {
                        let key = localStorage.key(i);
                        let newkey = key.split('wpp_sync_wlr_').join('');
                        let WLRURL = ("//forums.whirlpool.net.au/thread/" + newkey);
                        currentWLRHTML += '<p>Thread URL <a href="' + WLRURL + '" target="_blank">' + WLRURL + '</a></p>';
                    }
                };
            $('#currentWLR').append(currentWLRHTML);
            let revealButtonWLR = $('#wlrList');
            let wlrList = $('#currentWLR');
            revealButtonWLR.on("click", function () {
                wlrList.toggle();
            })

        // Setup Experimental Section for settings menu
            var experimentalHTML ='';
            experimentalHTML += '<p><input type="text" placeholder="Enter User ID Here" title="Paste or enter the User ID you would like to view or delete user notes for" style="width: 125px;" id="NotesUser" /> <button type="button" id="NotesUser_view">View Note</button>   <button type="button" id="NotesUser_del">Delete Note</button></p>';
            $('#experimentalsettings').append(experimentalHTML);
                        $('#NotesUser_view').on("click", function () {
                            $(this).prop('disabled', 'disabled');
                            let UID = JSON.parse($('#NotesUser').val());
                            alert(JSON.stringify(WhirlpoolPlus.util.sync.get('userNotes_' + UID)));
                    });
                        $('#NotesUser_del').on("click", function () {
                            $(this).prop('disabled', 'disabled');
                            let UID = JSON.parse($('#NotesUser').val());
                            WhirlpoolPlus.util.sync.set('userNotes_' + UID, { note: null });
                    });

        // Setup Hidden Users section for settings menu
            var hiddenUsersHTML = '';
            var hiddenUsers = WhirlpoolPlus.util.get('hiddenUsers');
            for (i = 0; i < hiddenUsers.length; i++) {
                var hurl = ("//forums.whirlpool.net.au/user/" + hiddenUsers[i]);
                hiddenUsersHTML += '<p>User <a href="' + hurl + '" target="_blank">' + hiddenUsers[i] + '</a> <button type="button" class="unhideUser" data-userid="' + hiddenUsers[i] + '">Unhide</button></p>';
            };

            hiddenUsersHTML += 'Currently Hidden Users: <p><input type="text" placeholder="Enter User ID Here" title="Paste or enter the User ID you would like to block here." style="width: 125px;" id="UIDHide" /> <button type="button" id="UIDHide_add">Add</button></p>';
            $('#hiddenUsers').append(hiddenUsersHTML);
                        $('#UIDHide_add').on("click", function () {
                            $(this).prop('disabled', 'disabled');
                            var UID = JSON.parse($('#UIDHide').val());
                            var UID2 = 'WP User';
                if ($.inArray(UID,WhirlpoolPlus.util.get('hiddenUsers')) == -1) {
                    //Not currently in array
                                alert("Blocking User");
                                hiddenUsers.push([UID, UID2]);
                                WhirlpoolPlus.util.set('hiddenUsers', hiddenUsers);
                                $('#UIDHide').val('');
			}
                    });

        // Setup Saved Posts section for settings menu
            let savedPostsHTML = '';
            let savedPosts = WhirlpoolPlus.util.get('savedPosts');
            for (i = 0; i < savedPosts.length; i++) {
                let page = savedPosts[i];
                savedPostsHTML += '<p><a href="https://forums.whirlpool.net.au/thread/' + page.url + '" target="_blank">' + page.name + '</a>&nbsp;<button type="button" class="unsavePost" data-object="' + page.url + '">Remove</button></p>';
            }
            $('#savedPosts').append(savedPostsHTML);
            $('.unsavePost').on("click", function () {
                let removeButton = $(this);
                let removePost = $(this).data('object').toString();
                if (savedPosts.map(x => x.url).indexOf(removePost) !== -1) {
                for (let i = 0; i < savedPosts.length; i++) {
                    if (savedPosts[i].url === removePost) {
                        savedPosts.splice(i, 1);
                        break;
                    }
                }
                WhirlpoolPlus.util.set('savedPosts', savedPosts);
                removeButton.parent().remove();
            }
            });
            let revealButton = $('#showSavedPosts');
            let postList = $('#savedPosts');
            revealButton.on("click", function () {
                postList.toggle();
            });
        $('#wppSettings .subSettings_heading').on("click", function () {
            var content = $(this).parent().children('.subSettings_content');

            if (content.is(':visible')) {
                $('.subSettings_content').hide();
            } else {
                $('.subSettings_content').hide();
                content.show();
            }
        });

            // Setup events
            // Disable sync related settings if sync is not enabled
            $(document).on('change', 'select[data-key="wpp_sync_enabled"], input[data-key="wpp_sync_enabled"]', function () {
                const isSyncEnabled = $(this).is(':checked'); // For checkboxes, use `:checked`
                // Find all settings related to sync except wpp_sync_enabled itself
                $('[data-key^="wpp_sync_"]').each(function () {
                    const key = $(this).attr('data-key');
                    if (key !== 'wpp_sync_enabled') {
                        $(this).prop('disabled', !isSyncEnabled); // Disable if sync is not enabled
                    }
                });
            });

            // Trigger the change event when the page loads to ensure settings are in the correct state
            $('[data-key="wpp_sync_enabled"]').trigger('change');

            // Cell highlighting and notification bar colours for each theme
            // Event listener for the theme selector
            $(document).on('change', 'select[data-key="wpp_display_theme"]', function () {
                const newTheme = $(this).val();
                // Prompt the user to confirm applying theme-specific colours
                if (confirm('WP+: Would you like to load the suggested WLR highlight & Notification bar colours for your theme?')) {
                    handleThemeChange(newTheme); // Apply changes if confirmed
                } else {
                    console.log('WP+: User declined to apply theme-specific colours.');
                }
            });

            // Function to handle theme changes
            function handleThemeChange(newTheme) {
                console.log(`WP+: Applying changes for theme: ${newTheme}`);
                switch (newTheme) {
                    case 'classic':
                        WhirlpoolPlus.util.set('wlr_display_unreadThreadColour', '#79A1FC');
                        WhirlpoolPlus.util.set('wlr_display_readThreadColour', '#EAA53F');
                        WhirlpoolPlus.util.set('wlr_display_unreadPostColour', '#DEE6FA');
                        WhirlpoolPlus.util.set('display_notify_background', '#3F435E');
                        break;

                    case 'black':
                        WhirlpoolPlus.util.set('wlr_display_unreadThreadColour', '#FFFFFF');
                        WhirlpoolPlus.util.set('wlr_display_readThreadColour', '#555555');
                        WhirlpoolPlus.util.set('wlr_display_unreadPostColour', '#A1A1A1');
                        WhirlpoolPlus.util.set('display_notify_background', '#323232');
                        break;

                    case 'teal':
                        WhirlpoolPlus.util.set('wlr_display_unreadThreadColour', '#B2F8F8');
                        WhirlpoolPlus.util.set('wlr_display_readThreadColour', '#99C5CB');
                        WhirlpoolPlus.util.set('wlr_display_unreadPostColour', '#D2E5E2');
                        WhirlpoolPlus.util.set('display_notify_background', '#567377');
                        break;

                    case 'electrolize':
                        WhirlpoolPlus.util.set('wlr_display_unreadThreadColour', '#002F58');
                        WhirlpoolPlus.util.set('wlr_display_readThreadColour', '#054C66');
                        WhirlpoolPlus.util.set('wlr_display_unreadPostColour', '#0C3851');
                        WhirlpoolPlus.util.set('display_notify_background', '#061E2B');
                        break;

                    case 'dark':
                        WhirlpoolPlus.util.set('wlr_display_unreadThreadColour', '#8F6B3D');
                        WhirlpoolPlus.util.set('wlr_display_readThreadColour', '#49549C');
                        WhirlpoolPlus.util.set('wlr_display_unreadPostColour', '#49549C');
                        WhirlpoolPlus.util.set('display_notify_background', '#323232');
                        break;

                    case 'arcdark':
                        WhirlpoolPlus.util.set('wlr_display_unreadThreadColour', '#424D72');
                        WhirlpoolPlus.util.set('wlr_display_readThreadColour', '#2A2F42');
                        WhirlpoolPlus.util.set('wlr_display_unreadPostColour', '#3C4257');
                        WhirlpoolPlus.util.set('display_notify_background', '#424D72');
                        break;

                    case 'steelgrey':
                        WhirlpoolPlus.util.set('wlr_display_unreadThreadColour', '#8088B7');
                        WhirlpoolPlus.util.set('wlr_display_readThreadColour', '#B2B5CC');
                        WhirlpoolPlus.util.set('wlr_display_unreadPostColour', '#D8DBF3');
                        WhirlpoolPlus.util.set('display_notify_background', '#3F435E');
                        break;

                    case 'userset':
                        WhirlpoolPlus.util.set('wlr_display_unreadThreadColour', '#95B0CB');
                        WhirlpoolPlus.util.set('wlr_display_readThreadColour', '#CBC095');
                        WhirlpoolPlus.util.set('wlr_display_unreadPostColour', '#CFCBBC');
                        WhirlpoolPlus.util.set('display_notify_background', '#000');
                        break;

                    default:
                        WhirlpoolPlus.util.set('wlr_display_unreadThreadColour', '#95B0CB');
                        WhirlpoolPlus.util.set('wlr_display_readThreadColour', '#CBC095');
                        WhirlpoolPlus.util.set('wlr_display_unreadPostColour', '#CFCBBC');
                        WhirlpoolPlus.util.set('display_notify_background', '#3a332a');
                        break;
                }

}

            function download(filename, output) {
                var element = document.createElement('a');
                element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(output));
                element.setAttribute('download', filename);
                element.style.display = 'none';
                document.body.appendChild(element);
                element.click();
                document.body.removeChild(element);
            }

            document.getElementById("wpp_dwn-btn").addEventListener("click", function(){
                var output = JSON.stringify(localStorage);
                var filename = "WP-Plus-Data.txt";
                download(filename, output);
            }, false);

            document.getElementById("wpp_upl-btn").addEventListener("click", function(){
            var input = document.getElementById('importWPPData').value;
            var wppdata = '';
            if (input == '') {
                alert('WP+: Enter a valid JSON String');
                }
                else {
                    wppdata = JSON.parse(input);
                Object.keys(wppdata).forEach(function (k) {
                    localStorage.setItem(k, wppdata[k]);
                });
                alert('WP+: Script data imported');
                window.location.reload();
                };
            }, false);

            document.getElementById("wpp_upgradedb-btn").addEventListener("click", function(){
                // Prior to June 2021 the userNotes feature stored data differently, this function migrates any legacy data to the new storage method
                let obj = WhirlpoolPlus.util.get('userNotes');
                if (obj == null) {
                    alert('WP+: You have no legacy user notes data to upgrade');
                }
                else {
                    Object.keys(obj).forEach(function (data) {
                        localStorage.setItem('wpp_sync_userNotes_' + data, '{"note":"' + obj[data] + '"}');
                    });
                    alert('WP+: Legacy User Notes data migration completed. The stored value containing the old data is redundant and will now be removed however please be aware this breaks compatibility with previous versions.');
                    WhirlpoolPlus.util.set('userNotes', null);
                };
                // Prior to April 2021 the Whirlpool Last Read feature stored data differently, this function migrates any legacy data to the new storage method
                let pattern = /^wpp_sync_(?=.*[a-z])(?=.*[0-9])[a-z0-9]*$/gm;
                for (var i = 0; i <localStorage.length; i++) {
                    if (pattern.exec(localStorage.key(i))) {
                        let key = localStorage.key(i);
                        let newkey = key.split('wpp_sync_').join('');
                        localStorage.setItem('wpp_sync_wlr_' + newkey, localStorage[key]);
                        localStorage.removeItem(key);
                    }
                };
                alert('WP+: Legacy Whirlpool Last Read data migration completed. The stored values containing the old data are redundant and will now be removed however please be aware this breaks compatibility with previous versions.');
                if (WhirlpoolPlus.util.get('data_db_version') == '') {
                    WhirlpoolPlus.util.set('data_db_version', '2021.6')
                                };
            }, false);

        $('#wppSettings .menuTab').on("click", function () {
            var theTab = $(this);

            $('.menuDiv').removeClass('menuDiv_active');
            $('.menuTab').removeClass('menuTab_active');

            theTab.addClass('menuTab_active');
            $('#' + theTab.data('menudiv')).addClass('menuDiv_active');
        });


            // Reset settings
            $('#wppSettings_reset').on("click", function () {

            if (confirm('WP+: Do you really want to delete all settings and data? Be sure to export a backup first if you wish to restore in future.')) {
                unsafeWindow.localStorage.clear();
                alert('WP+: Script data cleared');
                window.location.reload();
            } else {
                alert('WP+: No data cleared');
            }

        });
        },

        // Populate the modal with relevant localStorage items
        populateModal() {
            const content = $('#menuDiv_info');
            // Ensure dynamically generated content is cleared while keeping static content
            $('#menuDiv_display .dynamic-content').remove();
            $('#menuDiv_posts .dynamic-content').remove();
            $('#menuDiv_config .dynamic-content').remove();
            $('#menuDiv_users .dynamic-content').remove();
            // Clear subcategory containers
            let subcategoryContainers = {};
            Object.keys(subcategoryContainers).forEach(category => {
                Object.keys(subcategoryContainers[category]).forEach(subcategory => {
                    subcategoryContainers[category][subcategory].remove();
                });
            });
            subcategoryContainers = {};

    // Exclude non-setting values and old entries that have been superseded but may still be present in localStorage
            const excludedKeys = [
        'wpp_watchedAlert_updateInterval',
        'wpp_prerelease',
        'wpp_scriptVersion',
        'wpp_storageVersion',
        'wpp_recentActivityOverlay_updateInterval',
        'wpp_userNotes',
        'wpp_embed_tweets',
        'wpp_persisentEditLink',
        'wpp_whimArchiveSort'
    ];

            const excludeSyncPattern = /^wpp_sync_[a-zA-Z0-9]+$/;
            const allowedSyncKeys = [
    'wpp_sync_scriptId',
    'wpp_sync_times',
    'wpp_sync_mostUpToDate',
    'wpp_sync_lastSync',
    'wpp_sync_enabled',
    'wpp_sync_encryptionKey',
    'wpp_sync_key',
    'wpp_sync_user',
    'wpp_sync_server'
];

    // Reference category containers
            const categoryContainers = {
        display: $('#menuDiv_display'),
        posts: $('#menuDiv_posts'),
        config: $('#menuDiv_config'),
        users: $('#menuDiv_users'),
        info: $('#menuDiv_info'), // Default container for keys with no category
    };

            const inputElements = [];

     // Collect the localStorage keys and sort them alphabetically
            const keys = [];
     for (let i = 0; i < localStorage.length; i++) {
         const key = localStorage.key(i);
         if (
             key.startsWith('wpp') &&
             !key.includes('wpp_sync_wlr') &&
             !key.includes('wpp_sync_userNotes') &&
             !excludedKeys.includes(key) &&
             (!excludeSyncPattern.test(key) || allowedSyncKeys.includes(key)) // Include allowed keys even if they match the dynamic pattern
         ) {
             keys.push(key);
         }
     }
     keys.sort();

     // Process the sorted keys
     keys.forEach(key => {
         const value = localStorage.getItem(key);
         const mapping = settingsMap[key] || { friendlyName: key, description: 'No description available.', relevance: 'all', category: 'info', relevance: 'all', subcategory: null };
         const itemContainer = $('<p class="dynamic-content"></p');
         const labelAndInput = $('<span></span>');
         const label = $(`<label style="margin-left: 5px;">${mapping.friendlyName}</label>`);

         // Utility function to sanitise the value from localStorage
         function sanitiseValue(value) {
             // Remove any wrapping quotes (single or double)
             return value.replace(/""/g, '').replace(/"/g, '').trim();
         }

        if (mapping.type === 'dropdown') {
            const select = $(`<select data-key="${key}" data-changed="false"></select>`);
            const optionsMap = mapping.optionsMap || {};

            mapping.options.forEach(option => {
                const normalizedOption = option.replace(/"/g, '');
                const friendlyName = optionsMap[option] || normalizedOption;
                const isSelected = normalizedOption === sanitiseValue(value); // Sanitise value before comparison
                const optionElement = $(`<option data-key="${key}" value="${normalizedOption}" ${isSelected ? 'selected' : ''}>${friendlyName}</option>`);
                select.append(optionElement);
            });

            labelAndInput.append(select);

            inputElements.push({ key, element: select, type: 'dropdown' });
        } else if (sanitiseValue(value) === 'true' || sanitiseValue(value) === 'false') {
            const isChecked = sanitiseValue(value) === 'true'; // Sanitise value for comparison
            const checkbox = $(`<input type="checkbox" data-key="${key}" data-changed="false" ${isChecked ? 'checked' : ''} />`);
            labelAndInput.append(checkbox);

            inputElements.push({ key, element: checkbox, type: 'checkbox' });
        } else if (mapping.type === 'color') {
            const sanitisedValue = sanitiseValue(value) || '#000000'; // Default to black if no value is set
            const colorInput = $(`<input type="color" data-key="${key}" data-changed="false" value="${sanitisedValue}" style="width: 50px;" maxlength="7" />`);
            labelAndInput.append(colorInput);

            inputElements.push({ key, element: colorInput, type: 'color' });
        } else if (mapping.type === 'password') {
            const sanitisedValue = sanitiseValue(value); // Sanitise the value for text input
            const pwField = $(`<input type="password" id="passwordField" data-key="${key}" data-changed="false" value="${sanitisedValue}" style="width: 200px;" /><button type="button" id="showEncKey" onclick="$(\'#passwordField\').prop(\'type\',\'text\'); $(\'#hideEncKey\').show(); $(\'#showEncKey\').hide();">Show</button><button type="button" id="hideEncKey" style="display:none;" onclick="$(\'#passwordField\').prop(\'type\',\'password\'); $(\'#hideEncKey\').hide(); $(\'#showEncKey\').show();">Hide</button>`);
            labelAndInput.append(pwField);

            inputElements.push({ key, element: pwField, type: 'password' });
        } else if (mapping.type === 'number') {
            const sanitisedValue = sanitiseValue(value); // Sanitise the value for input
            const numField = $(`<input type="number" data-key="${key}" data-changed="false" value="${sanitisedValue}" style="width: 50px;" />`);
            labelAndInput.append(numField);

            inputElements.push({ key, element: numField, type: 'number' });
        } else if (mapping.type === 'textarea') {
            const sanitisedValue = sanitiseValue(value) || ''; // Default to empty string if no value is set
            const textareaField = $(`<br /><textarea data-key="${key}" data-changed="false" style="width: 100%; height: 100px; margin:0 auto;">${sanitisedValue}</textarea>`);
            labelAndInput.append(textareaField);

            textareaField.on('input', function () {
                textareaField.data('changed', true);
            });

            inputElements.push({ key, element: textareaField, type: 'textarea' });
        } else {
            const sanitisedValue = sanitiseValue(value); // Sanitise the value for text input
            const textField = $(`<input type="text" data-key="${key}" data-changed="false" value="${sanitisedValue}" style="width: 200px;" />`);
            labelAndInput.append(textField);

            inputElements.push({ key, element: textField, type: 'text' });
        }

         //Detect changes and update the data-changed attribute
         $('input[data-key], select[data-key]').on('input', function () {
             const key = $(this).data('key');  // Get the key from the data-key attribute
             const element = $(this); // The input element

             // Set the data-changed property for this specific element based on data-key
             element.attr('data-changed', 'true');
             element.data('changed', true); // Update internal data cache
         });

        itemContainer.append(labelAndInput);
        labelAndInput.append(label);
        const description = $(`<span class="settingDesc">${mapping.description}</span>`);
        itemContainer.append(description);

        // Skip keys that are marked as hidden
        if (mapping.hidden) return;
        // Determine category and subcategory
         const category = mapping.category || 'info';
         const subcategory = mapping.subcategory;

        let targetContainer;
        if (subcategory) {
            targetContainer = $(`#menuDiv_${category} [data-subcategory="${subcategory}"]`);
        } else {
            targetContainer = categoryContainers[category];
        }

        // If the container exists, append the item
        if (targetContainer && targetContainer.length) {
            targetContainer.append(itemContainer);
        } else {
            console.warn(`WP+: No container found for category "${category}" and subcategory "${subcategory}".`);
        }

         // Add relevance-based class
         const relevanceClassMap = {
             all: "wpp_setting",
             forums: "wpp_forumSetting",
         };
         const className = relevanceClassMap[mapping.relevance] || "wpp_setting";
         itemContainer.addClass(className);

     });

            const saveButton = $('<button id="wppSettings_save" style="float:right;margin-left:6px;line-height: 1.5em;padding: 5px;border: 1px solid #CDCDCD;border-radius: 2px;">Save</button>');
            if ($('#wppSettings_save').length === 0) { // Check if the Save button already exists
                $('#wppSettings_cancel').before(saveButton);
            }

            saveButton.on('click', function () {

                let changesSummary = '';
                let syncServerChanged = false;
                let encryptionKeyChanged = false;

                inputElements.forEach(item => {
                    const { key, element, type } = item;

                    if (element.data('changed') === true) {
                        let newValue;

                        // Handle input types
                        if (type === 'checkbox') {
                            newValue = element.is(':checked'); // Boolean value
                        } else if (type === 'color' || 'dropdown') {
                            newValue = element.val();

                        } else {
                            newValue = element.val()?.trim(); // Default handling for text, password, etc.
                                // Fallback for textarea fields
                            const textarea = $(`textarea[data-key="${key}"]`);
                            newValue = textarea.val();
                        }

                        console.log(`WP+: Key: ${key}, New Value: ${newValue}`);


                        // Get the current value from localStorage
                        let currentValue = localStorage.getItem(key);
                        if (type === 'checkbox') {
                            currentValue = currentValue === 'true'; // Convert currentValue to a boolean
                        } else if (currentValue === null) {
                            currentValue = ''; // Default for unset values
                        } else {
                            currentValue = JSON.parse(currentValue); // Parse stored JSON strings
                        }

                        // Compare the current value with the new value
                        if (newValue !== currentValue) {
                            // Set the value in localStorage
                            if (type === 'checkbox') {
                                // Store pure boolean values for checkboxes
                                localStorage.setItem(key, newValue);
                            } else {
                                // Store non-boolean values as strings
                                localStorage.setItem(key, JSON.stringify(newValue));
                            }

                            // Fetch the friendlyName for changesSummary
                            const friendlyName = settingsMap[key]?.friendlyName || key;
                            changesSummary += `${friendlyName}: ${JSON.stringify(newValue)}\n`;

                            // Check for specific keys and set flags
                            if (key === 'wpp_sync_server') {
                                syncServerChanged = true;
                            } else if (key === 'wpp_sync_encryptionKey') {
                                encryptionKeyChanged = true;
                            }
                        }

                        // Reset the data-changed attribute
                        element.removeAttr('data-changed');
                    }
                });

                // Handle syncServerChanged and encryptionKeyChanged logic
                if (syncServerChanged) {
                    localStorage.setItem('wpp_sync_lastSync', '0');
                }

                if (encryptionKeyChanged) {
                    if (confirm('You\'ve changed your encryption password. For this to work, make sure that no other password has been used with this account. For more information, see the wiki article.')) {
                        alert('Encryption key saved successfully.');
                    } else {
                        alert('Encryption Password reverted.');
                        const previousValue = WhirlpoolPlus.util.get('sync_encryptionKey');
                        const encryptionKeyElement = inputElements.find(item => item.key === 'wpp_sync_encryptionKey')?.element;
                        encryptionKeyElement.val(previousValue?.replace(/"/g, '') || '');
                    }
                }

                // Display the changesSummary or show "No changes" alert
                if (changesSummary) {
                    alert(`The following changes were saved:\n\n${changesSummary}`);
                    $('#wppSettings, #wppSettingsOverlay').fadeOut();
                    window.location.reload();
                } else {
                    alert('No changes were made.');
                }
            });

            // Close modal on overlay or button click
            $(document).on('click', '#wppSettingsOverlay, #wppSettings_cancel', function () {
                $('#wppSettings, #wppSettingsOverlay').fadeOut();
            });
        },

        // Open the modal
        openModal() {
            this.populateModal();
            $('#wppSettings, #wppSettingsOverlay').fadeIn();
        },

        // Add the button to open the modal
        addOpenButton() {
            const openButton = $('<li id="menu_wpp" class="odd"><a href="#"><span>WP+ Settings</span></a></li>');

            // Bind the openModal function to a globally accessible property
            const openModal = () => {
                // Replace 'this.openModal' with a direct call
                this.openModal();
            };

            // Attach the function to the global scope for external access
            window.openWpSettingsModal = openModal;

            // Bind the button's click event
            openButton.on('click', openModal);

            // Add the button to the menu
            $('#menu_whim').after(openButton);
        },

        // Initialise the editor
        initialize() {
                this.createModal();
                this.addOpenButton();
        },
    };

    // Initialise the settings menu
    WPPSettingsMenu.initialize();
}()

};

WhirlpoolPlus.feat = {
    // Returns user to the original page they were on prior to logging in to Whirlpool
    returnafterlogin: function () {
        if (WhirlpoolPlus.util.get('returnafterlogin')) {
            var sButton = document.querySelector('[href*="//whirlpool.net.au/profile/?action=login"]');
            var dU = location.href;
            var lSc = WhirlpoolPlus.util.get('returnafterlogin_targetUrl');

            if (sButton) {
                sButton.addEventListener('mouseup', function (e) {
                    WhirlpoolPlus.util.set('returnafterlogin_targetUrl', dU);
                },
                false);
            }

            if (document.referrer.indexOf("//whirlpool.net.au/profile/?action=login") !== -1) {
                location.href = "//forums.whirlpool.net.au";
            };

            if (dU.match('//forums.whirlpool.net.au') && document.querySelector('#ub_name') && lSc) {
                location.href = lSc;
                WhirlpoolPlus.util.rem('returnafterlogin_targetUrl');
            }
        }
    },
    // Hides the horizontal bar inserted in threads to indicate where the user has read up to previously
    watchedThreadsForumBarHide : function () {
        if (WhirlpoolPlus.util.get('watchedThreadsForumBarHide')) {
            WhirlpoolPlus.util.css('#watchbar {display:none !important;}');
        }
    },
    // Implements functionality to redirect the user to different pages when marking a watched thread as read, as long as they are on the most current thread page
    watchedThreadsOldMarkAsRead : function () {
        if (WhirlpoolPlus.util.get('watchedThreadsOldMarkAsRead')) {
            WhirlpoolPlus.util.css('#goto_watched {display:inherit !important;}');
            //new ajax method
            var currentPage = WhirlpoolPlus.util.getCurrentPageNumber();
            var totalPages = WhirlpoolPlus.util.getTotalPageNumber();
            var markreadButton = document.getElementById("read_button");
            var alerttype = WhirlpoolPlus.util.get('watchedThreadsAlert');
            var recentdays = WhirlpoolPlus.util.get('defaultRecentActivityDays');
            if (currentPage == totalPages) {
                markreadButton.addEventListener("click", function(){
                    setTimeout( function () {
                        switch(alerttype) {
                            case 'watched':
                                window.location.href = '//forums.whirlpool.net.au/forum/?action=watched';
                                break;
                            case 'profile':
                                window.location.href = '//forums.whirlpool.net.au/user/?days=' + recentdays + '';
                                break;
                            case 'forum':
                                window.location.href = '//forums.whirlpool.net.au/';
                                break;
                            case 'default':
                                break;
                        }
                    }, 500);
                });
                };

        }
    },
    // Promotes a user specified forum to the top of the Watched Threads page
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
    // Opens either unread or all Watched Threads in tabs on click
    openWatchedThreadsInTabs: function () {
        if (WhirlpoolPlus.util.get('watchedthreadsextra') == 'improved' || WhirlpoolPlus.util.get('watchedthreadsextra') == 'improvedswap') {
            var openAllURInT = $('<a href="#" id="openInTabs">open unread in tabs</a>');
            $('a[href="/forum/?action=watched"]').after(openAllURInT);
            openAllURInT.before('&nbsp;&nbsp;');
            openAllURInT.after('&nbsp;&nbsp;|');
            openAllURInT.on("click", function () {
                $('td.unread a').each(function () {
                    if (typeof GM_openInTab == 'function') {
                        GM_openInTab(this.href);
                    } else {
                        window.open(this.href);
                    }
                });
                return false;
            })

            // Fixes spacing of buttons
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
            openAllInT.on("click", function () {
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

                openAllinSInT.on("click", function () {
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
    // Hides Private Message threads from the Recent Activity section on the User Profile page
    hideWhimActivity: function () {
        if (WhirlpoolPlus.util.get('hideWhimActivity')) {
            let hideSection = document.querySelector('#threads a[href="/forum/1"]');
            if (hideSection != null) {
                var threadsTR = document.querySelectorAll('#threads table tbody tr'),
                    threadsTB = document.querySelector('#threads table tbody'),
                    hideSection_p_p = hideSection.parentNode.parentNode,
                    isHideSection = false;

                [].forEach.call(threadsTR, function (item, index, arr) {
                    if (isHideSection) {
                        if (item.className !== 'section') {
                            $(item).remove();
                        }
                        else if (item.className === 'section') {
                            isHideSection = false;
                        }
                    }
                    if (item === hideSection_p_p) {
                        threadsTB.insertBefore(hideSection_p_p, threadsTR[0]);
                        $(item).remove();
                        isHideSection = true;
                    }
                });
            }
        }
    },
    // Hide Selected Threads from Recent Activity on User Profile Page
    hideRecentActivityThreads: function () {
        if (WhirlpoolPlus.util.get('hideRecentActivityThreads')) {
            const threadsContainer = document.getElementById("threads");

            // Load hidden threads from localStorage and ensure it's an array
            let hiddenThreads = WhirlpoolPlus.util.get('hideRecentActivityThreads_data');
            hiddenThreads = Array.isArray(hiddenThreads) ? hiddenThreads : []; // Ensure the value is an array

            let temporarilyUnhiddenThreads = []; // Keep track of temporarily unhidden threads

            // Function to hide threads by ID
            const hideThread = (strippedId, button) => {
                const threadRow = document.getElementById(`tr${strippedId}`);
                if (threadRow) {
                    threadRow.style.display = "none";
                    if (button) button.textContent = "WP+: Unhide"; // Update button text
                }
            };

            // Function to unhide a thread
            const unhideThread = (strippedId, button) => {
                const threadRow = document.getElementById(`tr${strippedId}`);
                if (threadRow) {
                    threadRow.style.display = ""; // Reset to default display
                    if (button) button.textContent = "WP+: Hide"; // Update button text
                }
            };

            // Function to temporarily unhide threads
            const temporarilyUnhideThreads = () => {
                hiddenThreads.forEach((strippedId) => {
                    const threadRow = document.getElementById(`tr${strippedId}`);
                    if (threadRow) {
                        threadRow.style.display = ""; // Reset to default display
                        const button = threadRow.querySelector(".hide-button");
                        if (button) button.textContent = "WP+: Unhide"; // Update button text
                        temporarilyUnhiddenThreads.push(strippedId);
                    }
                });
            };

            // Function to restore hidden threads after they were temporarily unhidden
            const restoreHiddenThreads = () => {
                temporarilyUnhiddenThreads.forEach((strippedId) => {
                const threadRow = document.getElementById(`tr${strippedId}`);
                    if (threadRow) {
                        threadRow.style.display = "none"; // Re-hide thread
                        const button = threadRow.querySelector(".hide-button");
                        if (button) button.textContent = "WP+: Unhide"; // Update button text
                    }
                });
                temporarilyUnhiddenThreads = []; // Clear the temporary list
            };

            // Hide all threads in the hidden list on page load
            hiddenThreads.forEach((strippedId) => {
                const threadRow = document.getElementById(`tr${strippedId}`);
                if (threadRow) {
                    threadRow.style.display = "none";
                    const button = threadRow.querySelector(".hide-button");
                    if (button) button.textContent = "WP+: Unhide"; // Set to Unhide initially for hidden threads
                }
            });

            // Add "Hide" buttons to each thread row
            threadsContainer.querySelectorAll("tr.thread").forEach((threadRow) => {
                const threadId = threadRow.id; // Full ID
                const strippedId = threadId.replace(/^tr/, ""); // Remove "tr" prefix

                // Create a "Hide" button
                const hideButton = document.createElement("a");
                hideButton.className = "hide-button group";
                hideButton.style.cursor = "pointer";

                // Set initial button text based on thread visibility
                if (hiddenThreads.includes(strippedId)) {
                    hideButton.textContent = "WP+: Unhide"; // Thread is hidden, so show 'Unhide'
                    hideButton.title = "Show This Thread";
                } else {
                    hideButton.textContent = "WP+: Hide"; // Thread is visible, show 'Hide'
                    hideButton.title = "Hide This Thread";
                }

                // Append the button to the first column of the row
                const titleCell = threadRow.querySelector("td.title");
                if (titleCell) {
                    titleCell.appendChild(hideButton);
                }

                // Add click event listener for toggling hide/unhide
                hideButton.addEventListener("click", () => {
                    if (hiddenThreads.includes(strippedId)) {
                        // If thread is hidden, unhide it
                        hiddenThreads = hiddenThreads.filter((id) => id !== strippedId); // Remove from hidden list
                        WhirlpoolPlus.util.set('hideRecentActivityThreads_data', hiddenThreads); // Update localStorage
                        unhideThread(strippedId, hideButton); // Unhide the thread
                    } else {
                        // If thread is not hidden, hide it
                        hiddenThreads.push(strippedId); // Add to hidden list
                        WhirlpoolPlus.util.set('hideRecentActivityThreads_data', hiddenThreads); // Update localStorage
                        hideThread(strippedId, hideButton); // Hide the thread
                    }
                });
            });

            // Add "Show Hidden Threads" button
            if (hiddenThreads.length > 0) {
            const showHiddenButton = document.createElement("button");
            showHiddenButton.textContent = "Reveal Hidden Threads";
            showHiddenButton.class = "buttons";

            // Append the button above the threads container
            threadsContainer.parentNode.insertBefore(showHiddenButton, threadsContainer);

            // Add click event listener to temporarily unhide hidden threads
            showHiddenButton.addEventListener("click", () => {
                // Check if threads are already temporarily unhidden
                if (temporarilyUnhiddenThreads.length === 0) {
                    temporarilyUnhideThreads(); // Unhide threads
                    showHiddenButton.textContent = "Hide Hidden Threads"; // Update button text
                } else {
                    restoreHiddenThreads(); // Restore the hidden threads
                    showHiddenButton.textContent = "Reveal Hidden Threads"; // Update button text
                }
            });
            }
        }
    },
    filterWatchedThreadsToOPReplies: function () {
        if (WhirlpoolPlus.util.get('filterWatchedThreadsToOPReplies')) {
            // Create the checkbox and label
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = 'filterToggle';
            checkbox.style.marginRight = '5px';

            const label = document.createElement('label');
            label.textContent = 'Filter Replies to OP Only';
            label.setAttribute('for', 'filterToggle');

            // Append the checkbox and label to the container
            const checkboxContainer = $('.buttons').last();
            checkboxContainer.append('<br />', checkbox, label);

            // Function to handle filtering logic
            const applyFilter = (enabled) => {
                // Select all rows in the table
                const rows = document.querySelectorAll('tr');

                let currentSection;

                rows.forEach(row => {
                    if (row.classList.contains('section')) {
                        // If this row is a section, reset visibility
                        currentSection = row;
                        currentSection.style.display = '';
                    } else if (row.classList.contains('thread')) {
                        const oldestCell = row.querySelector('td.oldest a');
                        const newestCell = row.querySelector('td.newest a');

                        if (enabled) {
                            // If filtering is enabled
                            if (oldestCell && newestCell) {
                                const oldestUser = oldestCell.textContent.trim();
                                const newestUser = newestCell.textContent.trim();

                                // Show or hide the thread row based on user matching
                                if (oldestUser === newestUser) {
                                    row.style.display = '';
                                } else {
                                    row.style.display = 'none';
                                }
                            } else {
                                row.style.display = '';
                            }
                        } else {
                            // Reset visibility when filtering is disabled
                            row.style.display = '';
                        }
                    }
                });

                if (enabled) {
                    // After processing all rows, check sections
                    document.querySelectorAll('tr.section').forEach(section => {
                        let nextSibling = section.nextElementSibling;
                        let hasVisibleRows = false;

                        while (nextSibling && !nextSibling.classList.contains('section')) {
                            if (nextSibling.style.display !== 'none') {
                                hasVisibleRows = true;
                                break;
                            }
                            nextSibling = nextSibling.nextElementSibling;
                        }

                        // Hide the section if no visible rows are found
                        if (!hasVisibleRows) {
                            section.style.display = 'none';
                        }
                    });
                }
            };

            // Initialise filtering as disabled
            applyFilter(false);

            // Add an onclick event to toggle filtering
            checkbox.onclick = () => {
                applyFilter(checkbox.checked);
            };
        }
    },
    // Adds a link to see your aura votes to the User Profile page - this is enabled by default and cannot currently be toggled
    yourvoteslink: function () {
        var target = $('td:contains("Aura:"):first');
        target.append('<br><a class="small" href="//forums.whirlpool.net.au/user/?action=yourvotes" target="_blank">(Your Aura Votes)</a>');
        target.parent().css({ "vertical-align": "top" });
    },
    // Adds a statistic to User Profile pages indicating the number of posts made per day since the user joined Whirlpool
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
    // Media Embed Codeblock V2
    embed: async function () {
    const imageEnabled = WhirlpoolPlus.util.get('embed_images');
    const videoEnabled = WhirlpoolPlus.util.get('embed_videos');
    const maxContentWidth = $('.replytext').width();
    const loading = await WhirlpoolPlus.util.image('loader');
    const imagecontent = await WhirlpoolPlus.util.image('wppimage');
    const vidWidth = 640;
    const vidHeight = 480;
    const shortsVidWidth = 440;
    const shortsVidHeight = 800;
    const displayed = {};

    WhirlpoolPlus.util.css('.wpp_img { max-width: 100%; }');

    const embedLink = (linkObject, link) => {
        if (displayed[link]) return;

        let hideEmbedUrlStyle = '';

        const imageRegex = /\.(?:jpe?g|gif|bmp|png|webp|tiff)$/i; // Matches general direct image links
        const imgurRegex = /(https?):\/\/(imgur\.com)\/(?:([a-zA-Z0-9_-]+)\/)?([a-zA-Z0-9_-]+)/i; // Matches Imgur links
        const imgbbRegex = /(https?:\/\/ibb\.co\/(.+)(?:[#\/].*|$))/i; // Matches imgBB links
        const youtubeRegex = /(?:go\?)?(https(?:%3A|:)\/\/www\.youtube\.com\/watch\?v=([^&]+))/i; // Matches YouTube links
        const youtubeShortLinkRegex = /(?:go\?)?(https(?:%3A|:)%2F%2Fyoutu\.be%2F([^%\/]+))/i; // Matches YouTube shortened links
        const youtubeShortsRegex = /(?:go\?)?(https(?:%3A|:)%2F%2Fyoutube\.com%2Fshorts%2F([^%\/]+))/i; // Matches YouTube Shorts links
        const vimeoRegex = /(?:go\?)?(https(?:%3A|:)(?:\/\/|%2F%2F)vimeo\.com(?:%2F|\/)([^\/]+))/i; // Matches Vimeo links
        const flickrShortRegex = /(?:go\?)?(https(?:%3A|:)(?:\/\/|%2F%2F)flic\.kr%2Fp%2F([a-zA-Z0-9]+))/i; // Matches Flickr shortened links
        const flickrShareRegex = /(?:go\?)?(https(?:%3A|:)(?:%2F%2F)(?:www\.)?flickr\.com%2Fphotos%2F([a-zA-Z0-9]+)%40([a-zA-Z0-9]+)%2Fshares%2F([a-zA-Z0-9]+))/i; // Matches Flickr share links
        const flickrGPRegex = /(?:go\?)?(https(?:%3A|:)(?:%2F%2F)(?:www\.)?flickr\.com%2Fgp%2F([a-zA-Z0-9]+)%40([a-zA-Z0-9]+)%2F([^\/?&#%]+))/i; // Matches Flickr Guest Pass links
        const flickrAlbumRegex = /(?:go\?)?(https(?:%3A|:)(?:%2F%2F)(?:www\.)?flickr\.com%2Fphotos%2F([a-zA-Z0-9]+)%2Falbums%2F([a-zA-Z0-9]+))/i; // Matches Flickr Album links
        const flickrScenarios = [
            {
                name: "Extended URLs",
                regex: /(?:go\?)?(https(?:%3A|:)(?:%2F%2F)(?:www\.)?flickr\.com%2Fphotos%2F([a-zA-Z0-9]+)%2F([a-zA-Z0-9]+)%2Fin%2F([^\/?&#%]+)%2F)/i,
                handler: (match) => {
                    const userId = match[2];
                    const photoId = match[3];
                    const extraSegment = match[4];
                    return `https://www.flickr.com/photos/${userId}/${photoId}/in/${extraSegment}/player/`;
                }
            },
            {
                name: "Standard Photo URLs",
                regex: /(?:go\?)?(https(?:%3A|:)(?:%2F%2F)(?:www\.)?flickr\.com%2Fphotos%2F([a-zA-Z0-9]+)%40([a-zA-Z0-9]+)(?!%2Fshares%2F)%2F([^\/?&#%]+))/i,
                handler: (match) => {
                    const userId = match[2];
                    const photoId = match[4];
                    return `https://www.flickr.com/photos/${userId}/${photoId}/player/`;
                }
            }
        ];

        switch (true) {
            case imageEnabled && imageRegex.test(link):
                // Basic Image Match
                linkObject.before('<br /><span class="wcrep1"><a href="' + link + '" target="_blank"><img src ="' + imagecontent + '" data-src="' + link + '" alt="WP Plus Embedded Image" class="wpp_img"></a></span><br />');
                hideEmbedUrlStyle = 'color:#eee !important;cursor:default;background:none !important;';
                break;

            case imageEnabled && imgurRegex.test(link):
                // Implement Imgur embedding logic
                var linkSegments = imgurRegex.exec(link);

                if (linkSegments) {
                    const subPath = linkSegments[3];  // Captures the sub-path (e.g., "a" for albums)
                    const uid = linkSegments[4];      // Captures the unique identifier

                    if (subPath === 'a' || subPath === 'gallery') {
                        // Imgur albums sometimes have slugged IDs like "some-text-guid"
                        const cleanId = uid.split('-').pop();              // "guid"
                        const dataId  = subPath + '/' + cleanId;           // "a/guid" or "gallery/guid"
                        const href    = 'https://imgur.com/' + dataId;
                        // Insert the embed markup
                        linkObject.before(
                            '<br /><span class="wcrep1">' +
                            '<blockquote class="imgur-embed-pub" lang="en" data-id="' + dataId + '">' +
                            '<a href="' + href + '">' + (linkObject.text() || 'Imgur') + '</a>' +
                            '</blockquote>' +
                            '</span><br />'
                        );
                        // Mark that we added at least one Imgur embed this run
                        window.__wpplus_imgur_embeds_added = true;
                    } else {
                        // Handle direct links (non-album Imgur links)
                        linkObject.before(
                            '<br /><span class="wcrep1"><a href="' + link + '" target="_blank" rel="noopener noreferrer">' +
                            '<img src="https://i.imgur.com/' + uid + '.jpg" alt="Imgur Image" class="wpp_img">' +
                            '</a></span><br />'
                        );
                    }

                    if (WhirlpoolPlus.util.get('hideembedurl')) {
                        linkObject.attr("style", "color:#eee !important;cursor:default;background:none !important;");
                    }
                }
                break;

            case imageEnabled && imgbbRegex.test(link):
                // Implement imgBB embedding logic
                var imgBB = imgbbRegex.exec(link);
                    function getBBdata(callback) {
                    GM.xmlHttpRequest({
                        method: 'GET',
                        url: 'https://ibb.co/' + imgBB[2] + '/oembed.json',
                        onload: function (response) {
                            if (response.status == 200) {
                                var parsedOutput = JSON.parse(response.responseText);
                                callback(parsedOutput.url);
                            }
                        }
                        });
                    }
                        getBBdata(function(imgbbdirectlink) {
                            linkObject.before('<br /><span class="wcrep1"><a href="' + link + '" target="_blank"><img src ="' + imagecontent + '" data-src="' + imgbbdirectlink + '" alt="WP Plus Embedded Image" class="wpp_img"></a></span><br />');
                            var bLazy = new Blazy({
                                selector: '.wpp_img'
                            });
                        });
                break;

            case imageEnabled && flickrScenarios.some((scenario) => scenario.regex.test(link)):
                // Implement Flickr embedding logic
                const matchingScenario = flickrScenarios.find((scenario) => scenario.regex.test(link));

                if (matchingScenario) {
                    const match = matchingScenario.regex.exec(link);
                    const embedUrl = matchingScenario.handler(match);

                    // Embed the Flickr photo
                    linkObject.before(`
                    <br /><span class="wcrep1"><iframe src="${embedUrl}" width="640" height="480" frameborder="0" allowfullscreen webkitallowfullscreen mozallowfullscreen></iframe></span><br />
                    `);
                }
                break;

            case imageEnabled && flickrShortRegex.test(link) || flickrShareRegex.test(link) || flickrGPRegex.test(link) || flickrAlbumRegex.test(link):
                // Handle Flickr links that cannot be embedded
                linkObject.before(`
                <br /><span class="wcrep1"><a href="${link}" target="_blank"><img src ="${imagecontent}" alt="WP Plus Embedded Image" class="wpp_img"></a><br />Flickr Guest Pass, Album links, Share links, or Shortened links cannot be embedded by WP+ at this time. Please browse to Flickr to view the image(s).</span><br />
                `);
                break;

            case videoEnabled && youtubeRegex.test(link):
                // Implement YouTube full link embedding logic
                var linkSegments = youtubeRegex.exec(link);

                    if (linkSegments && linkSegments[1]) {
                        linkObject.before('<br /><span class="wcrep1"><iframe src="https://www.youtube-nocookie.com/embed/' + linkSegments[2] + '" width="' + vidWidth + '" height="' + vidHeight + '" frameborder="0" allowfullscreen></iframe></span><br />');
                        if (WhirlpoolPlus.util.get('hideembedurl')) {
                            linkObject.attr("style", "color:#eee !important;cursor:default;background:none !important;");
                        }
                    }
                break;

            case videoEnabled && youtubeShortLinkRegex.test(link):
                // Implement YouTube short link embedding logic
                var linkSegments = youtubeShortLinkRegex.exec(link);

                    if (linkSegments && linkSegments[1]) {
                        linkObject.before('<br /><span class="wcrep1"><iframe src="https://www.youtube-nocookie.com/embed/' + linkSegments[2] + '" width="' + vidWidth + '" height="' + vidHeight + '" frameborder="0" allowfullscreen></iframe></span><br />');
                        if (WhirlpoolPlus.util.get('hideembedurl')) {
                            linkObject.attr("style", "color:#eee !important;cursor:default;background:none !important;");
                        }
                    }
                break;

            case videoEnabled && youtubeShortsRegex.test(link):
                // Implement YouTube Shorts embedding logic
                var linkSegments = youtubeShortsRegex.exec(link);

                    if (linkSegments && linkSegments[1]) {
                        linkObject.before('<br /><span class="wcrep1"><iframe src="https://www.youtube-nocookie.com/embed/' + linkSegments[2] + '" width="' + shortsVidWidth + '" height="' + shortsVidHeight + '" frameborder="0" allowfullscreen></iframe></span><br />');
                        if (WhirlpoolPlus.util.get('hideembedurl')) {
                            linkObject.attr("style", "color:#eee !important;cursor:default;background:none !important;");
                        }
                    }
                break;

            case videoEnabled && vimeoRegex.test(link):
                // Implement Vimeo embedding logic
                var linkSegments = vimeoRegex.exec(link);

                    if (linkSegments && linkSegments[2]) {
                        linkObject.before('<br /><span class="wcrep1"><iframe src="https://player.vimeo.com/video/' + linkSegments[2] + '" width="' + vidWidth + '" height="' + vidWidth + '" frameborder="0" allowfullscreen></iframe></span><br />');
                        if (WhirlpoolPlus.util.get('hideembedurl')) {
                            linkObject.attr("style", "color:#eee !important;cursor:default;background:none !important;");
                        }
                    }
                break;
        }

        if (hideEmbedUrlStyle && WhirlpoolPlus.util.get('hideembedurl')) {
            linkObject.attr("style", hideEmbedUrlStyle);
        }

        displayed[link] = true;
    };

    $('#replies .replytext a').not('.internal').each(function () {
        const linkObject = $(this);
        const link = linkObject.prop('href');
        embedLink(linkObject, link);
    });
        // ---- Imgur finaliser (runs once after all links are processed) ----
        (function wpplusFinaliseImgurEmbeds() {
            if (!window.__wpplus_imgur_embeds_added) return;
            const w = (typeof unsafeWindow !== 'undefined') ? unsafeWindow : window;
            function callCreateIframe() {
                try {
                    if (w.imgurEmbed && typeof w.imgurEmbed.createIframe === 'function') {
                        w.imgurEmbed.createIframe();
                    }
                } catch (e) { /* ignore */ }
            }
            function loadEmbedJsOnceAndRun() {
                for (let i = 0; i < 10; i++) {
                    setTimeout(callCreateIframe, i * 150);
                }
            }
            if (!w.__wpplus_imgur_embed_loaded) {
                w.__wpplus_imgur_embed_loaded = true;
                const s = document.createElement('script');
                s.async = true;
                s.src = 'https://s.imgur.com/min/embed.js';
                s.charset = 'utf-8';
                s.onload = loadEmbedJsOnceAndRun;
                document.head.appendChild(s);
            } else {
                loadEmbedJsOnceAndRun();
            }
        })();

    const bLazy = new Blazy({ selector: '.wpp_img' });
},

   // Adds gradient background to posts from users who are in the Penalty Box to make this more prominent
    penaltyBoxCss: async function () {
        let light_gradient = await WhirlpoolPlus.util.image('light_gradient');
        WhirlpoolPlus.util.css('.penalty_box .replyuser { background-image:url(' + light_gradient + ')!important; background-repeat: repeat !important; background-color: #fff !important; } ');
    },

    penaltyBoxHighlight: function (reply) {
        var groupText = reply.find('.usergroup').text();

        if (groupText.indexOf('penalty box') >= 0 || groupText.indexOf('Banned') >= 0) {
            reply.addClass('penalty_box');
        }
    },

    bannedUserPostHide: function (reply) {
        var groupText = reply.find('.usergroup').text();

        if (groupText.indexOf('Banned') >= 0) {
            reply.css('display','none');
        }
    },
    // Changes User Profile Page URLs to specify a custom amount of days to show recent activity
    changeLinks: function () {
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
    // Adds additional navigation buttons to the top and bottom of threads
    extraNavLinks: function () {
        var topLinks = $(".buttons:lt(0)");
        var bottomLinks = $(".buttons:lt(3)");
        var threadNumber = WhirlpoolPlus.util.getThreadNumber();

        if (WhirlpoolPlus.util.get('links_longThread')) {
            topLinks.prepend('<a href="//forums.whirlpool.net.au/thread/' + threadNumber + '&p=-2">Single Page Version</a>&nbsp;');
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
                topLinks.prepend('<a href="//forums.whirlpool.net.au/thread/' + threadNumber + '&ux=' + opid + '">OP</a>&nbsp;');
                bottomLinks.prepend('<a class="blink" href="//forums.whirlpool.net.au/thread/' + threadNumber + '&ux=' + opid + '">OP</a>&nbsp;');
            } else {

            }
        }

        if (WhirlpoolPlus.util.get('links_mod')) {
            topLinks.prepend('<a href="//forums.whirlpool.net.au/thread/' + threadNumber + '?um=1">Mods</a>&nbsp;');
            bottomLinks.prepend('<a class="blink" href="//forums.whirlpool.net.au/thread/' + threadNumber + '?um=1">Mods</a>&nbsp;');
        }

        if (WhirlpoolPlus.util.get('links_rep')) {
            topLinks.prepend('<a href="//forums.whirlpool.net.au/thread/' + threadNumber + '?ur=1">Reps</a>&nbsp;');
            bottomLinks.prepend('<a class="blink" href="//forums.whirlpool.net.au/thread/' + threadNumber + '?ur=1">Reps</a>&nbsp;');
        }
    },
    // When clicking a link to the latest post in a thread, redirect to the first page of the thread
    removeLinkToLastPage: function () {
        if (WhirlpoolPlus.util.get('removeLinkToLastPage')) {
            $('.threads a').each(function () {
                this.href = this.href.replace('&p=-1&#bottom', '');
            });
        }
    },
    // Filter forum indexes to show only threads with no replies
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
    // Replaces archive URLs from the forum search with the regular thread URL
    editSearchLinks: function () {

        $('.results .title a').each(function () {
            var link = $(this);
            link.prop('href', link.prop('href').replace('archive/', 'thread/'));
        });
        $('.results .url a').each(function () {
            var link = $(this);
            link.prop('href', link.prop('href').replace('archive/', 'thread/'));
        });
    }

}

WhirlpoolPlus.feat.display = {

    // CSS that is included everywhere
    css: async function () {
        var styles = '';
        // Themes
                    const themelist = {
        classic: await WhirlpoolPlus.util.resource('classictheme'),
        black: await WhirlpoolPlus.util.resource('blacktheme'),
        electrolize: await WhirlpoolPlus.util.resource('electrolizetheme'),
        teal: await WhirlpoolPlus.util.resource('tealtheme'),
        arcdark: await WhirlpoolPlus.util.resource('arcdarktheme'),
        dark: await WhirlpoolPlus.util.resource('darktheme'),
        steelgrey: await WhirlpoolPlus.util.resource('steelgreytheme')
    }

        const currentTheme = WhirlpoolPlus.util.get('display_theme');
        if (currentTheme != 'default' && currentTheme in themelist) {
            styles += themelist[currentTheme];
        }

        // Theme Images
        let classiclogo = await WhirlpoolPlus.util.image('classiclogo');
        let classicnews = await WhirlpoolPlus.util.image('classicnews');
        let teallogo = await WhirlpoolPlus.util.image('teallogo');
        let arcdarklogo = await WhirlpoolPlus.util.image('arcdarklogo');
        let electrolizelogo = await WhirlpoolPlus.util.image('electrolizelogo');
        let electrolize_1 = await WhirlpoolPlus.util.image('electrolize_1');
        let blacklogo = await WhirlpoolPlus.util.image('blacklogo');
        // User Set Theme Parameters
        let bgcolour = WhirlpoolPlus.util.get('display_usertheme_bgcolour');
        let fgcolour = WhirlpoolPlus.util.get('display_usertheme_fgcolour');
        let fgcolour2 = WhirlpoolPlus.util.get('display_usertheme_fgcolour2');
        let fgcolour3 = WhirlpoolPlus.util.get('display_usertheme_fgcolour3');

        const themeStyles = {
            default: '',
            userset: `
        body {background-color: ${bgcolour};}
        #footer {background: ${bgcolour};}
        #left ul#menu {background: ${bgcolour};}
        ul#tabs.box li.picked a {background: ${bgcolour};}
        #forumindex table td.title {background: ${bgcolour};}
        #left.sidebar {background-color: ${fgcolour};}
        #page #upperbar {background-color: ${fgcolour};}
        #page {background: ${fgcolour};}
        #forumindex h3 {background-color: ${fgcolour};}
        #content .topbar, #content .footbar {background-color: ${fgcolour};}
        #threads table thead tr td.reps,
        #threads table thead tr td.reads,
        #threads table thead tr td.unread {background-color: ${fgcolour};}
        #rightcol h2 {background: ${fgcolour};}
        #topbar #userbar #ub_menu.opened {background-color: ${fgcolour};}
        #innershadow {background: ${fgcolour2};}
        #left ul#menu > li.selected {background: ${fgcolour2};}
        #page #innerpage {background-color: ${fgcolour2};}
        #forumindex table td.threads {background: ${fgcolour3};}
        #left ul#menu > li.odd {background: ${fgcolour3};}
        ul#tabs.box li a {background-color: ${fgcolour3};}
        #news .article {background: ${fgcolour3};}
        #rightcol .block {background: ${fgcolour3};}
        #bc {background: ${fgcolour3} !important;}
        `,
            classic: `
        #logo h1 {background: transparent url("${classiclogo}") no-repeat scroll center top / 82% 165px; z-index:999;}
        #leftcol #news .article {background: #EEE url("${classicnews}") top left no-repeat;}
        `,
            teal: `
        #logo h1 {background: transparent url("${teallogo}") no-repeat scroll center top / 200px 160px; z-index:999;}
        `,
            electrolize: `
        #logo h1 {background: url("${electrolizelogo}"); z-index:999;}
        #content .bodytext a.internal {background: transparent url("${await electrolize_1}") no-repeat scroll right top;}
        `,
            arcdark: `
        #logo h1 {background-image: url("${arcdarklogo}"); z-index:999;}
        `,
            black: `
        #logo h1 {background-image: url("${blacklogo}"); z-index:999;}
        `
        };

        // Get styles for the selected theme
        styles += themeStyles[currentTheme] || '';

        // Custom CSS
        styles += WhirlpoolPlus.util.get('display_customCSS');

        // Widescreen
        if (WhirlpoolPlus.util.get('display_widescreen')) {
            let width= WhirlpoolPlus.util.get('display_width_percentage');
            styles += '#page, #footer { width: ' + width + '% !important; max-width: none !important; } #topbar { width: ' + width + '% !important; max-width: 94%; } body {overflow-x: hidden !important; overflow-y: scroll !important; }';
        }

        // Remove footer
        if (WhirlpoolPlus.util.get('display_hideFooter')) {
            styles += '#footer {display:none;}';
        }

        // Small Font in Threads
        if (WhirlpoolPlus.util.get('display_smallfont')) {
            styles += '#replylist div.reply div.replytext {font: inherit;}';
        }

        // Old Font Styles
        if (WhirlpoolPlus.util.get('display_oldfont')) {
            styles += WhirlpoolPlus.util.resource('oldfont');
        }

        // OP & Edit Prominence
        if (WhirlpoolPlus.util.get('display_opeditlarge')) {
            styles += '#replylist div.reply div.replytext div.op {font-size:20px !important;font-weight:bold !important;color:#888 !important;width:initial !important;margin: auto !important;padding-left:5px !important;} #replylist div.reply div.replytext div.edited {font-size:19px !important;width:initial !important;padding-left:5px !important;}';
        }

        return styles;
    },
    // Floats the side bar navigation when scrolling the page vertically
    floatSidebar: function () {
        if (WhirlpoolPlus.util.get('display_floatSidebar')) {
            var floating = true;
            var sidebarContent = $('#left');

            WhirlpoolPlus.util.css('#left.sidebarFloat { position: fixed; top: 0px; left: inherit; background-color: inherit;}');

            $(window).on("scroll", function () {
                if (floating) {
                    if (window.pageYOffset > 183) {
                        sidebarContent.addClass('sidebarFloat');
                    } else {
                        sidebarContent.removeClass('sidebarFloat');
                    }
                }
            }).on(scroll);

            $('.selected ul[style~="dashed"]').append('<li id="wpplus_undock"><a href="javascript:;"> Unfloat Sidebar (temp)</a></li>');

            $('#wpplus_undock a').on("click", function () {
                floating = false;
                sidebarContent.removeClass('sidebarFloat');
                $(this).parent().remove();
            });

        }
    },
    // Floats the top bar when scrolling the page vertically
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
    // Adds a floating button to go to the top of the current page
    floatGoToTop: function () {
        if (WhirlpoolPlus.util.get('display_floatGoToTop')) {
            let uparrow = '\u25B2';
            $('#page').append('<div id="topbutton"><span title="Go to Top" class="buttonText">'+ uparrow +'</span></div>');
            WhirlpoolPlus.util.css('#topbutton { position: fixed; bottom: 20px; right: 20px; width: 3em; height: 3em; cursor: pointer; z-index: 999; opacity: 0.5; border-radius: 50%; background: #808080; }');
            WhirlpoolPlus.util.css('.buttonText { display: flex; align-items: center; justify-content: center; height: 100%; font-size: 2em; font-face: bold; color: white; }');
            $('#topbutton').on("click", function () {
                window.scrollTo(0, 0);
            });
        };

    },
    // Adds an additional alert with the inbuilt notification system for new Private Messages
    whimAlert: function () {
        if (WhirlpoolPlus.util.get('display_whimAlert') && $('#menu_whim.unread').text()) {
            WhirlpoolPlus.util.notify('You have unread <a href="//forums.whirlpool.net.au/forum/1">private message(s)</a>', true);
        }
    },
    // Adds Whirlpool Plus logo and script version in the forum footer
    wpPlusLogo: async function () {
        let logo = await WhirlpoolPlus.util.image('wp_plus_logo');
        $('.copyright').append('<dt><br /><img src="' + logo + '" alt="Whirlpool Plus" /></dt><dd>Extra Awesomeness added with '
            + '<a href="//whirlpool.net.au/wiki/whirlpool_plus">Whirlpool Plus ' + WhirlpoolPlus.about.versionText() + '</a></dd>');
    },
    // Adds Forums Powered By text to the side navigation bar
    poweredby: async function () {
        if (WhirlpoolPlus.util.get('display_poweredby')) {
            quoteArray;
            var randomItem = quoteArray[Math.floor(Math.random()*quoteArray.length)];
            $('#bignumbers').prepend($('<dl><dt>Powered By</dt><dd class="pwrdby"></dd></dl>'));
            $('dd.pwrdby').html(''+ randomItem +'');
        }
    },
    // Rearranges the User Profile page to position the Recent Acivity below the User Information section
    oldProfile: function () {
        if (WhirlpoolPlus.util.get('display_oldProfile')) {
            let threaddiv = $('[id=threads]').detach();
            $('#userprofile').append(threaddiv);
            $('#userprofile h2:lt(1)').detach().insertBefore('#threads');
        }
    },
    // Adds functionality to toggle visibility of User Information on User Profile pages
    userPageInfoToggle: function () {
        if (WhirlpoolPlus.util.get('display_userPageInfoToggle')) {
            var h2s = $('#userprofile h2:lt(2)');
            h2s.css('cursor', 'pointer').next('table').hide();
            h2s.on("click", function () {
                $(this).next('table').slideToggle();
            });
        }
    },
    // Adds functionality to display Watched Threads data on the User Profile page
    superProfile: function () {
        if (WhirlpoolPlus.util.get('display_superProfile') == 'all' && !WhirlpoolPlus.util.get('display_oldProfile')) {
            $('#threads').after('<span class="watchedprofile"><h2>All Watched Threads</h2></span>');
            $('.watchedprofile').after($('<div id="watchedthreads">').load('https://forums.whirlpool.net.au/forum/?action=watched&showall=1 #content form'));
            WhirlpoolPlus.util.css('ul.box {display:none;}');
        }
        if (WhirlpoolPlus.util.get('display_superProfile') == 'all' && WhirlpoolPlus.util.get('display_oldProfile')) {
            $('#threads div:last-child').after('<span class="watchedprofile"><h2>All Watched Threads</h2></span>');
            $('.watchedprofile').after($('<div id="watchedthreads">').load('https://forums.whirlpool.net.au/forum/?action=watched&showall=1 #content form'));
            WhirlpoolPlus.util.css('ul.box {display:none;}');
        }
        if (WhirlpoolPlus.util.get('display_superProfile') == 'unread' && !WhirlpoolPlus.util.get('display_oldProfile')) {
            $('#threads').after('<span class="watchedprofile"><h2>Unread Watched Threads</h2></span>');
            $('.watchedprofile').after($('<div id="watchedthreads">').load('https://forums.whirlpool.net.au/forum/?action=watched #content form'));
            WhirlpoolPlus.util.css('ul.box {display:none;}');
        }
        if (WhirlpoolPlus.util.get('display_superProfile') == 'unread' && WhirlpoolPlus.util.get('display_oldProfile')) {
            $('#threads:last-child').after('<span class="watchedprofile"><h2>Unread Watched Threads</h2></span>');
            $('.watchedprofile').after($('<div id="watchedthreads">').load('https://forums.whirlpool.net.au/forum/?action=watched #content form'));
            WhirlpoolPlus.util.css('ul.box {display:none;}');
        }
    },
    // Adds option to hide certain types of threads from appearing on User Profile page
    hideClosedThreads: function () {
        if (WhirlpoolPlus.util.get('display_hideClosedThreadsOnProfile')) {
            WhirlpoolPlus.util.css('.closed {display:none;}')
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
    // Adds options to hide specific forums entered by the user
    hideForums: function () {
        var hideThese = WhirlpoolPlus.util.get('display_hideTheseForums');
        let forumstohide = hideThese.split(" ");

        if (forumstohide != '') {
            $('#forumindex tr div.title a').each(function () {
                var url = $(this).prop('href').split('/forum/')[1];
                if (forumstohide.includes(url)) {
                    $(this).parents('tr').eq(0).css("display", "none");
                }
            });
        }
    },
    // Adds option to prettify code blocks
    syntaxHighlight: async function () {
        if (WhirlpoolPlus.util.get('display_syntaxHighlight')) {
            $('pre').addClass("prettyprint");
            let prettify = await WhirlpoolPlus.util.resource('prettify');
            WhirlpoolPlus.util.css(prettify);
            prettyPrint();
            setTimeout(function(){ //Fix up the class for quoting purposes
                $( ".prettyprint" ).wrap('<span class="wcrep1">');
                $( ".prettyprint" ).parent().before('<span style="display:none"></span>');
            }, 500);
        }
    },
    // Emoticon setup for Whirlcode
    emoticons: {
        init: function () {
            if (WhirlpoolPlus.util.get('display_emoticons_enabled')) {
            $(".reference a").each(function () {
                var text = $(this).text().toString().replace(/\:/, "<span>:</span>");
                $(this).html(text);
            });
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
                regkey = regkey.replace(/\+/g, "\\+");
                regkey = regkey.replace(/\@/g, "\\@");

                regkey = '(\\s|>)' + regkey;

                this.regex[icon] = new RegExp(regkey, 'g');
            }
                $('div.bodytext > p').each(this.runOnTextNode);
            }

        },

        // Below is code emoji selector will call when required
        getIconSet: function () {
            let icons = {
                ':angry:': '\uD83D\uDE20',              // Angry >:-(
                ':confused:': '\uD83D\uDE15',           // Confused :-/
                ':sunglasses:': '\uD83D\uDE0E',         // Cool B-)
                ':cry:': '\uD83D\uDE2D',               // Crying :'(
                ':(': '\uD83D\uDE41',                  // Sad :(
                ':D': '\uD83D\uDE01',                  // Grinning :D
                '<3': '\u2764',                        // Heart <3
                ':broken_heart:': '\uD83D\uDC94',      // Broken Heart </3
                ':no_mouth:': '\uD83E\uDD2B',          // Neutral :|
                ':sleepy:': '\uD83D\uDE2A',            // Sleepy (-_-)
                ':)': '\uD83D\uDE42',                  // Smile :)
                ':-]': '\uD83D\uDE0F',                 // Smirk :-]
                ':P': '\uD83D\uDE1B',                  // Sticking Out Tongue :P
                ';)': '\uD83D\uDE09',                  // Wink ;)
                ':star:': '\u2B50',                    // Star *
                ':-x': '\uD83D\uDE37',                 // Masked :-x
                ':-D': '\uD83D\uDE00',                 // Big Grinning :-D
                ':o': '\uD83D\uDE2E',                  // Open Mouth :o
                ':kissing_heart:': '\uD83D\uDE18',     // Kiss :-*
                ':-o': '\uD83D\uDE31',                 // Scream :-o
                'X-D': '\uD83D\uDE1D',                 // Laughing Hard XD
                ';-p': '\uD83D\uDE1C',                 // Cheeky Tongue ;-P
                ':-@': '\uD83D\uDE21',                 // Rage >:-@
                ':-/': '\uD83D\uDE14',                 // Pensive :-/
                ':-s': '\uD83D\uDE16',                 // Confounded :-S
                ':-|': '\uD83D\uDE33',                 // Flushed :-|
                ':+1:': '\uD83D\uDC4D',                // Thumbs Up (y)
                ':-1:': '\uD83D\uDC4E',                // Thumbs Down (n)
                ':laughing:': '\uD83D\uDE02',          // Laughing XD
                ':clap:': '\uD83D\uDC4F',              // Clapping *clap*
                ':eyeroll:': '\uD83D\uDE44',           // Rolling Eyes -.-
                ':raised_eyebrow:': '\uD83E\uDD28',    // Raised Eyebrow *raise*
                ':facepalm:': '\uD83E\uDD26',          // Facepalm *facepalm*
                ':party:': '\uD83C\uDF89',             // Party Popper *party*
                ':trophy:': '\uD83C\uDFC6',            // Trophy *trophy*
                ':fire:': '\uD83D\uDD25',              // Fire *fire*
                ':muscle:': '\uD83D\uDCAA',            // Flex *flex*
                ':rocket:': '\uD83D\uDE80',            // Rocket *rocket*
                ':injured:': '\uD83E\uDE78',           // Head Bandage *ouch*
                ':skull:': '\uD83D\uDC80',             // Skull *dead*
                ':pout:': '\uD83D\uDE24',              // Pouting >:-(
                ':zipper_mouth:': '\uD83E\uDD10',      // Zipper Mouth :-X
                ':exploding_head:': '\uD83E\uDD2F',    // Exploding Head *boom*
                ':thinking:': '\uD83E\uDD14',          // Thinking 🤔
                ':nerd:': '\uD83E\uDD13',              // Nerd *nerd*
                ':poop:': '\uD83D\uDCA9',              // Poop *poop*
                ':robot:': '\uD83E\uDD16',             // Robot *beep*
                ':shrug:': '¯\\_(ツ)_/¯',              // Shrug ¯\_(ツ)_/¯
                ':v:': '\u270C',                       // Victory ✌
                ':ok_hand:': '\uD83D\uDC4C',           // OK Hand 👌
                ':wave:': '\uD83D\uDC4B',              // Wave *wave*
                ':call_me:': '\uD83E\uDD19',           // Call Me *callme*
                ':crossed_fingers:': '\uD83E\uDD1E',   // Fingers Crossed *fingers*
                ':sparkling_heart:': '\uD83D\uDC96',   // Sparkling Heart <3*
                ':heart_eyes:': '\uD83D\uDE0D',        // Heart Eyes *heart*
                ':two_hearts:': '\uD83D\uDC95',        // Two Hearts <3<3
                ':blue_heart:': '\uD83D\uDC99',        // Blue Heart <3b
                ':hourglass:': '\u231B',               // Hourglass *hourglass*
                ':idea:': '\uD83D\uDCA1',              // Light Bulb *idea*
                ':check:': '\u2705',                   // Check Mark *check*
                ':cross:': '\u274C',                   // Cross Mark *cross*
                ':beer:': '\uD83C\uDF7B',              // Beer *beer*
            };

            let mainIcons = {};
            $.extend(mainIcons, icons);

            return mainIcons;
        },

        regex: {},
        currentIconSet: {},

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
                    '$1' + '<span style="display:none">' + icon + '</span><span class="wcrep1">' + WhirlpoolPlus.feat.display.emoticons.currentIconSet[icon] + '</span>');
            }

            return smiley;

        },

    },

}

WhirlpoolPlus.feat.avatar = {

    css: function () {
        if (WhirlpoolPlus.util.get('avatars_enabled') == 'all' || WhirlpoolPlus.util.get('avatars_enabled') == 'both' || WhirlpoolPlus.util.get('avatars_enabled') == 'static') {
            WhirlpoolPlus.util.css('@import url(https://wpplus.endorph.net/avatars/avatar_lite.css?' + new Date().getTime() + ');');
        }

        if (WhirlpoolPlus.util.get('avatars_enabled') == 'all' || WhirlpoolPlus.util.get('avatars_enabled') == 'both' || WhirlpoolPlus.util.get('avatars_enabled') == 'animated') {
            WhirlpoolPlus.util.css('@import url(https://wpplus.endorph.net/avatars/animatedavatar_lite.css?' + new Date().getTime() + ');');
        }

        return ".wpp_avatar_link { margin:0 auto; display: block; width: 100%; height: 100%; } .wpp_avatar {display: block; background-repeat: no-repeat; margin:0 auto;} .wpp_avatar_ident {display: block; background-repeat: no-repeat; margin:0 auto; height:80px; width:80px;} .wpp_avatar_preload {display: block; background-repeat: no-repeat; margin:0 auto; background:url('data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7');}";
    },
    // Inserts avatars on user posts in threads
    avatariseRow: function (replyTr) {
        if (WhirlpoolPlus.util.get('avatars_enabled') != 'none') {
            var userNumber = WhirlpoolPlus.util.getReplyUserId(replyTr);
            var shaObj = new jsSHA("SHA-512", "TEXT");
            shaObj.update("'" + userNumber + "'");
            var hash = shaObj.getHash("HEX");

            replyTr.find('.replyuser-inner').prepend($('<div id="wpp_avatarbyreply_' + userNumber + '" class="wpp_avatar_preload" data-avclass="wpp_avatar wpp_avatar_' + userNumber + '"><a class="wpp_avatar_link" href="/user/' + userNumber + '" /></div>'));
            replyTr.addClass('wpp_avatar_reply_' + userNumber);

            window.setTimeout(function(){ // Lazy load the avatars
                var allavatars= document.getElementsByClassName('wpp_avatar_preload');
                for (var i=0; i<allavatars.length; i++) {
                    if (allavatars[i].getAttribute('data-avclass')) {
                        allavatars[i].setAttribute('class', allavatars[i].getAttribute('data-avclass'));
                    }
                }
            }, 500);

            setTimeout(function(){ // Hide any non-compliant avatars
            var allavatars = document.getElementsByClassName('wpp_avatar wpp_avatar_' + userNumber + '');
            for (var i = 0; i < allavatars.length; i++) {
            var imageident = document.querySelector('.wpp_avatar_ident_' + userNumber + '') !== null;
            var imgurhosted = $(allavatars).css("background-image").toLowerCase().indexOf('imgur') >=0;
            var postimg = $(allavatars).css("background-image").toLowerCase().indexOf('postimg.cc') >=0;
            var hasavatar = $(allavatars).css("background-image");
            if (imageident == false && imgurhosted == false && postimg == false && hasavatar !== 'none') {
                $(allavatars).css("background", "none");
                $(allavatars).css("height", "0px");
                $(allavatars).css("width", "0px");
            }
            };
        }, 1000);

            if (WhirlpoolPlus.util.get('avatars_enabled') == 'all') { // Add the identicons
                WhirlpoolPlus.util.css('div.reply { min-height: 175px !important; }');
                setTimeout(function () {
                    var elem = document.querySelector(".wpp_avatar_" + userNumber + "");
                    var $elem = $(elem);
                    var style = $elem.css('background-image');
                    if (style == 'none') {
                        replyTr.find('.replyuser-inner').prepend($('<div class="wpp_avatar_ident_' + userNumber + '"><a class="wpp_avatar_link" href="/user/' + userNumber + '"><canvas width="80" height="80" data-jdenticon-hash="' + hash + '" /></canvas></a></div>'));
                        jdenticon();
                    };
                }, 1500);
            }
        }
    },
    // Inserts avatars on user profile pages
    avatariseProfile: function () {
        if (WhirlpoolPlus.util.get('avatars_enabled') != 'none' && WhirlpoolPlus.util.get('display_avatarsOnProfile')) {
            var userNumber = document.location.href.split('user/')[1]?.match(/^\d+/)?.[0];
            if (window.location.href == 'https://forums.whirlpool.net.au/user/' || window.location.href.indexOf('/user/?days') > -1) {
                userNumber = WhirlpoolPlus.util.getUserId();
            };
            var userName = document.querySelectorAll('span[itemprop="name"]')[1];
            $('#userprofile table:contains("Status")').before('<div style="margin: 0 auto;padding-bottom:5px;width:100%;background:#e1e1e1;text-align:center;"><span style="display:inline-block;text-align:center;font-weight:bold;font-size:1.5em;" id="avusername"></span><br /><span style="margin: 0 auto;vertical-align:top;display:inline-block;" class="wpp_avatar wpp_avatar_' + userNumber + '"><a class="wpp_avatar_link" href="/user/' + userNumber + '" /></span></div>');
            document.getElementById('avusername').innerHTML = userName.innerHTML;

            if (WhirlpoolPlus.util.get('avatars_enabled') == 'all') { // Add the identicons
            var shaObj = new jsSHA("SHA-512", "TEXT");
            shaObj.update("'" + userNumber + "'");
            var hash = shaObj.getHash("HEX");
                WhirlpoolPlus.util.css('div.reply { min-height: 175px !important; }');
                setTimeout(function () {
                    var elem = document.querySelector(".wpp_avatar_" + userNumber + "");
                    var $elem = $(elem);
                    var style = $elem.css('background-image');
                    if (style == 'none') {
                        $(document.querySelector(".wpp_avatar_" + userNumber + "")).prepend($('<div class="wpp_avatar_ident_' + userNumber + '"><a class="wpp_avatar_link" href="/user/' + userNumber + '"><canvas width="80" height="80" data-jdenticon-hash="' + hash + '" /></canvas></a></div>'));
                        jdenticon();
                    };
                }, 1500);
            }

            setTimeout(function(){ // Hide any non-compliant avatars
            var allavatars = document.getElementsByClassName('wpp_avatar wpp_avatar_' + userNumber + '');
            for (var i = 0; i < allavatars.length; i++) {
            var imageident = document.querySelector('.wpp_avatar_ident_' + userNumber + '') !== null;
            var imgurhosted = $(allavatars).css("background-image").toLowerCase().indexOf('imgur') >=0;
            var postimg = $(allavatars).css("background-image").toLowerCase().indexOf('postimg.cc') >=0;
            var hasavatar = $(allavatars).css("background-image");
            if (imageident == false && imgurhosted == false && postimg == false && hasavatar !== 'none') {
                $(allavatars).css("background", "none");
            }
            };
        }, 1000);

        }
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


WhirlpoolPlus.feat.watchedAlert = {

    run: function () {
        if (WhirlpoolPlus.util.get('watchedAlert')) {
            this.updateData(function () {
                WhirlpoolPlus.feat.watchedAlert.alertDisplay();
            }, false);
        }
        },

    alertDisplay: function () {
        if (WhirlpoolPlus.util.get('watchedAlert_data').length > 0) {
            let watchedThreadsCount = WhirlpoolPlus.util.get('watchedAlert_data').length;
            WhirlpoolPlus.util.notify('You have ' + watchedThreadsCount + ' unread <a href="//forums.whirlpool.net.au/forum/?action=watched">watched threads</a> (<a class="clear">clear</a>)', false);
            $('.clear').on("click", function (e) {
                var tb = $('#topbar');
                $('.wpplus_notify').fadeOut();
                tb.removeClass('notifyfloat');
                tb.removeClass('notify');
                $(window).off("scroll", WhirlpoolPlus.util.notify.floatnotify);
                WhirlpoolPlus.util.set('watchedAlert_data', 0);
        });
        }
    },

        getData: function (callback) {

        if (WhirlpoolPlus.util.get('whirlpoolAPIKey') == '') {
            alert('WP+: Unread Watched Threads Alert\n You don\'t seem to have entered your API key in the setting dialog');
            return;
        }

        $.ajax({
            type: 'GET',
            url: 'https://forums.whirlpool.net.au/api/?key=' + WhirlpoolPlus.util.get('whirlpoolAPIKey') + '&output=json&get=watched&watchedmode=0',
            success: function (data, textStatus, response) {

                if (response.status == 200) {
                    var threads = JSON.parse(response.responseText).WATCHED;
                    WhirlpoolPlus.util.set('watchedAlert_data', threads);

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
            },

        updateData: function (callback) {
            var updateInterval = WhirlpoolPlus.util.get('data_API_globalUpdateInterval');
            var lastUpdate = WhirlpoolPlus.util.get('watchedAlert_lastUpdated');
            var currentTime = (new Date).getTime();

        if (updateInterval * 60 * 1000 + lastUpdate < currentTime) {
            this.getData(callback);
            WhirlpoolPlus.util.set('watchedAlert_lastUpdated', currentTime);
        } else {
            if (typeof callback == 'function') {
                callback();
            }
        }

    },

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
            url: 'https://forums.whirlpool.net.au/api/?key=' + WhirlpoolPlus.util.get('whirlpoolAPIKey') + '&output=json&get=recent&recentdays=' + WhirlpoolPlus.util.get('recentActivityOverlay_days'),
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

            if (WhirlpoolPlus.util.get('wlr_enabled') != 'none') {
                threadData = WhirlpoolPlus.feat.whirlpoolLastRead.loadThreadData(threads[i].ID);

                if (threadData == false) {
                    link = '/thread/' + threads[i].ID;
                } else {
                    if (threads[i].REPLIES + 1 > threadData['t']) {
                        unread = true;
                    }

                    if (threadData['o']) {
                        link = '/thread/' + threads[i].ID + '?r=' + threadData['o'] + '#r' + threadData['o']; //used by Simon's jumpToReplyId method, so preferred
                    } else {
                        link = '/thread/' + threads[i].ID + '&p=' + threadData['p'] + '#r' + threadData['t'];
                    }
                }
            } else {
                link = '/thread/' + threads[i].ID;
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
        let reload = '\u21BB';
        let star = '\u2B50';
        $('body').append('<div id="recentActivityDropdownContainer"><div id="recentActivity"><div id="recentActivityContent">Loading...</div><span id="recentActivityReload" style="font-size:2em;">'+ reload + '</span></div><div id="recentActivityHandle">Recent Activity <span id="recentActivityUnreadThreads">' + star + '</span></div></div>');


        var activityOpen = false;
        var activityArea = $('#recentActivity');
        $('#recentActivityHandle').on("click", function () {
            if (activityOpen) {
                activityArea.hide();
                activityOpen = false;
            } else {
                activityArea.show();
                activityOpen = true;
            }
        });

        $('#recentActivityReload').on("click", function () {
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
        var updateInterval = WhirlpoolPlus.util.get('data_API_globalUpdateInterval');
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
// Adds link to Private Message a user next to their forum posts
WhirlpoolPlus.feat.whimLink = {
    WhimUser: function (reply) {
        if (WhirlpoolPlus.util.get('whimLink')) {
            var userNumber = WhirlpoolPlus.util.getReplyUserId(reply);
            reply.find('.actions').append($(' <span class="bar"> |</span> <a title="whim this user" href="//forums.whirlpool.net.au/forum/?action=newthread&u=' + userNumber + '" target="_blank">Whim user</a>'));
        }
    }
},
// Persists the edit link next to your posts, even after WP removes it
WhirlpoolPlus.feat.persistentEditLink = {
    PersistentEdit: function (reply) {
    if (WhirlpoolPlus.util.get('persistentEditLink')) {
        var replyUserID = WhirlpoolPlus.util.getReplyUserId(reply);
        var userID = WhirlpoolPlus.util.getUserId();
        var replyID = WhirlpoolPlus.util.getReplyId(reply);
        $("a[href*='/forum/?action=edit&e=" + replyID + "']").replaceWith('<a class="origedit" title="edit this post" href="/forum/?action=edit&e=' + replyID + '"><b>Edit</b></a>');
        if (replyUserID == userID) {
            $('.origedit').hide();
            reply.find('.actions').prepend($('<a title="edit this post" href="/forum/?action=edit&e=' + replyID + '"><b>Edit</b></a> <span class="bar">| </span>'));
        }
    }
        }
},
// Adds numbering to posts in a thread
WhirlpoolPlus.feat.numberPosts = {
    NumberPost: function (reply) {
        if (WhirlpoolPlus.util.get('numberPosts')) {
            var postNumber = WhirlpoolPlus.util.getReplyNumber(reply);
            reply.find('.tools').prepend($('<span class="postnumber" style="color:#99c;">Post <b>#' + postNumber + '</b> in this thread</span>'));
        }
    }
},
// Adds save post button to forum posts
WhirlpoolPlus.feat.savePosts = {

    PostSave: function (reply) {
        if (!WhirlpoolPlus.util.get('savePosts')) {
            return;
        }

        // Get the saved posts array from storage
        let savedPostsArray = WhirlpoolPlus.util.get('savedPosts');

        // Get the exact position and extended name for the reply
        let exactPosition = WhirlpoolPlus.util.getExactReplyPosition(reply);
        let extendedName = document.title +' - Reply #'+ WhirlpoolPlus.util.getReplyNumber(reply);

        // Create the buttons
        let savePostButton = $('<a class="greylink save-post" title="save this post" data-posturl="'+ exactPosition +'" data-extendedname="'+ extendedName +'"><span class="bar"> |</span> save</a>');
        let unsavePostButton = $('<a class="greylink unsave-post" title="unsave this post" data-posturl="' + exactPosition + '" data-extendedname="' + extendedName + '"><span class="bar"> |</span> unsave</a>');

        // Check if the post is already saved, and show the appropriate button
        if (savedPostsArray.map(post => post.url).includes(exactPosition)) {
            reply.find('.tools').append(unsavePostButton);
            reply.find('.tools').append(savePostButton);
            reply.find('.save-post').hide();
        } else {
            reply.find('.tools').append(savePostButton);
            reply.find('.tools').append(unsavePostButton);
            reply.find('.unsave-post').hide();
        }

        // Attach an onclick event to the save button
        $('.save-post').each(function () {
            $(this).on("click", function () {
                let saveme = {};
                saveme.name = $(this).data('extendedname').toString();
                saveme.url = $(this).data('posturl').toString();
            if (savedPostsArray.map(x => x.url).indexOf(saveme.url) == -1) {
                savedPostsArray.push(saveme);
                WhirlpoolPlus.util.set('savedPosts', savedPostsArray);
                $(this).hide();
                $(this).siblings('.unsave-post').show();
            }
                else {
                    alert('The script thinks you have already saved this post. Refresh your browser and try again.');
                }
            })});
        $('.unsave-post').each(function () {
        $(this).on("click", function () {
            let urlToRemove = $(this).data('posturl').toString();
            let indexToRemove = savedPostsArray.findIndex(post => post.url === urlToRemove);
            if (indexToRemove !== -1) {
                savedPostsArray.splice(indexToRemove, 1);
                WhirlpoolPlus.util.set('savedPosts', savedPostsArray);
                $(this).hide();
                $(this).siblings('.save-post').show();
            } else {
                alert('The script thinks the post you are trying to remove is not saved. Refresh your browser and try again.');
    }
    });});
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

        // add hide smiley (X)
        if ($('span[title="hide user"]', tdBodyUser).length == 0) {
            var hideUser = $('<span title="hide user" class="vote">X</span>');
            if ($('.voteblock', tdBodyUser).length != 0) {
                // normal forum
                tdBodyUser.find('.voteblock').prepend(hideUser);
            } else {
                // in ItN, need to add voteblock
                var voteblock = $('<div class="voteblock">');
                voteblock.append(hideUser);
                tdBodyUser.append(voteblock);
            }
            hideUser.on("click", function () {
                if ($.inArray(uNum,WhirlpoolPlus.util.get('hiddenUsers')) == -1) {
                    // Not currently in array
                    var hiddenUsers = WhirlpoolPlus.util.get('hiddenUsers');
                    hiddenUsers.push([uNum, uName]);
                    WhirlpoolPlus.util.set('hiddenUsers', hiddenUsers);


                    $('#replies .reply').each(function () {
                        WhirlpoolPlus.feat.ignoreUser.userIgnore($(this));
                    });
                }
            });
        }


        // check if this post is by a user we want to hide
        // need uNum as a string
        var userArray = WhirlpoolPlus.util.get('hiddenUsers');
        for (var i = 0; i < userArray.length; i++) {
            if (userArray[i].includes(uNum)) {
                this.hideIgnoredPost(trParent, uNum);
                break;
            }
        }
    },

    // utility function to make hiding posts easier
    hideIgnoredPost: function (trParent, uNum) {
        // do we want to hide completely?
        if (WhirlpoolPlus.util.get('hiddenUsers_remove')) {
            // bye bye
            trParent.hide();
        } else {
            // display the deleted message
            var userName = trParent.find('.bu_name').text();
            var postDate = trParent.find('.date').not('.edited').text().replace('posted ', '');
            var rowId = trParent.prop('id');

            trParent.hide();

            var hiddenPostNotice = $('<div class="notice" id="' + rowId + '"><div class="replyuser">User #' + uNum + ' &nbsp; <a style="color:black" href="//forums.whirlpool.net.au/user/' + uNum + '"><b>' + userName + '</b></a></div><div class="replytools">' + postDate + '</div><i>This users posts are hidden by you (WP+).</i> </div>');

            var showLink = $('<a href="javascript:void(0)">Show post (temporary)</a>').on("click", function () {
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
            var width = WhirlpoolPlus.util.get('display_width_percentage');
            var sidebaroffset = ((100 - width)/2); // get the offset from the side of the page by halving the gap in overall width percentage from 100
            var sidebarwidth =  ($(sidebar).width() - 4) / $('body').width() * 100; // get the width of the sidebar as a percentage of the overall body
            var actualoffset = sidebaroffset + sidebarwidth;
            whereMenu = (actualoffset + "%").toString();
        } else {
            whereMenu = sidebar.offset().left + sidebar.width() - 4 + "px";
        }

        return "#pmenu {padding:0;list-style-type: none; position:fixed;z-index:50;height:19px;overflow:hidden;width:18px;left:" + whereMenu + ";}" +
            "#pmenu img{margin;0;padding:0;border:none;background:transparent;width:16px;} #pmenu ul {padding:0; margin:0; list-style-type: none; width:101px;}" +
            "#pmenu li {position:relative;z-index:51;}" +"#pmenu a{display:block;width:140px;font-weight:bold;font-size:12px; color:#FFFFFF; height:26px; line-height:26px; " +
            "text-decoration:none; text-indent:5px; background:#616CA3; border:1px solid orange;white-space: nowrap; }" + "#pmenu>li>ul>li>a{background:#EDEDED;color:#000;}" +
            "#pmenu li:hover > a {background:#dfd7ca; color:#c00;}" + "#pmenu li ul {display: none;} " +
            "#pmenu li:hover > ul {display:block; position:absolute; top:0; z-index:52;margin-left:140px;}";
    },

    _menu: null,

    generateMenu: async function () {

        this._menu = $('<ul id="pmenu">');

        var customLinksMenuHTML = '';
        var customLinks = WhirlpoolPlus.util.get('customLinks');
        let currentTheme = WhirlpoolPlus.util.get('display_theme');
        let spinnerdefault = await WhirlpoolPlus.util.image('small_whirl_logo');
        let spinnerteal = await WhirlpoolPlus.util.image('spinner_teal');
        let spinnerelec = await WhirlpoolPlus.util.image('spinner_elec');
        let spinnerblack = await WhirlpoolPlus.util.image('spinner_black');
        var uNumber = WhirlpoolPlus.util.getUserId();
        var spinnerimage;
        switch (currentTheme) {
            case 'default':
            spinnerimage = spinnerdefault;
                break;
            case 'userset':
            spinnerimage = spinnerdefault;
                break;
            case 'classic':
            spinnerimage = spinnerdefault;
                break;
            case 'teal':
            spinnerimage = spinnerteal;
                break;
            case 'electrolize':
            spinnerimage = spinnerelec;
                break;
            case 'arcdark':
            spinnerimage = spinnerdefault;
                break;
            case 'dark':
            spinnerimage = spinnerdefault;
                break;
            case 'steelgrey':
            spinnerimage = spinnerdefault;
                break;
            case 'black':
            spinnerimage = spinnerblack;
                break;
                        }

            for (i = 0; i <customLinks.length; i++) {
                customLinksMenuHTML += '<li><a title="' + customLinks[i] + '" style="max-width:140px;overflow:hidden;" href="' + customLinks[i] + '">' + customLinks[i] + '</a></li>';
            };

        switch (WhirlpoolPlus.util.get('spinnerMenu_settingsLocation')) {
            case "top":
            this._menu.html('<img id="menuSpinner" src="' + spinnerimage + '" />' + '<li><a id="settingsSpinnerLink">WP+ Settings</a></li><li><a href="//forums.whirlpool.net.au/user/' + uNumber + '">WP User</a>' + '<ul> ' + '<li><a href="//forums.whirlpool.net.au/user/' + uNumber + '">Your Posts</a></li> ' + '<li><a href="//forums.whirlpool.net.au/user/?action=online">Notable Identities</a></li> ' + '<li><a href="//forums.whirlpool.net.au/whim/?action=inbox">Inbox</a></li> ' + '<li><a href="//forums.whirlpool.net.au/whim/?action=outbox">Outbox</a></li> ' + '<li><a href="//forums.whirlpool.net.au/whim/?action=contacts">Contacts</a></li> ' + '<li><a href="//forums.whirlpool.net.au/forum/?action=watched">Watched Threads</a></li> ' + '<li><a href="//forums.whirlpool.net.au/forum/?action=threads_search">Thread Search</a></li> ' + '<li><a href="//whirlpool.net.au/profile/">Account Settings</a></li> ' + '<li><a href="//whirlpool.net.au/profile/?a=logout&logout=' + uNumber + '">Log out</a></li> ' + '</ul> ' + '</li><li><a>Custom Links</a>' + '<ul>' + customLinksMenuHTML + '</ul>' + '</li>');
                break;
            case "underuser":
            this._menu.html('<img id="menuSpinner" src="' + spinnerimage + '" />' + '<li><a href="//forums.whirlpool.net.au/user/' + uNumber + '">WP User</a>' + '<ul> ' + '<li><a href="//forums.whirlpool.net.au/user/' + uNumber + '">Your Posts</a></li> ' + '<li><a href="//forums.whirlpool.net.au/user/?action=online">Notable Identities</a></li> ' + '<li><a href="//forums.whirlpool.net.au/whim/?action=inbox">Inbox</a></li> ' + '<li><a href="//forums.whirlpool.net.au/whim/?action=outbox">Outbox</a></li> ' + '<li><a href="//forums.whirlpool.net.au/whim/?action=contacts">Contacts</a></li> ' + '<li><a href="//forums.whirlpool.net.au/forum/?action=watched">Watched Threads</a></li> ' + '<li><a href="//forums.whirlpool.net.au/forum/?action=threads_search">Thread Search</a></li> ' + '<li><a href="//whirlpool.net.au/profile/">Account Settings</a></li> ' + '<li><a href="//whirlpool.net.au/profile/?a=logout&logout=' + uNumber + '">Log out</a></li> ' + '</ul> ' + '</li><li><a id="settingsSpinnerLink">WP+ Settings</a></li><li><a>Custom Links</a>' + '<ul>' + customLinksMenuHTML + '</ul>' + '</li>');
                break;
            default:
            this._menu.html('<img id="menuSpinner" src="' + spinnerimage + '" />' + '<li><a href="//forums.whirlpool.net.au/user/' + uNumber + '">WP User</a>' + '<ul> ' + '<li><a href="//forums.whirlpool.net.au/user/' + uNumber + '">Your Posts</a></li> ' + '<li><a href="//forums.whirlpool.net.au/user/?action=online">Notable Identities</a></li> ' + '<li><a href="//forums.whirlpool.net.au/whim/?action=inbox">Inbox</a></li> ' + '<li><a href="//forums.whirlpool.net.au/whim/?action=outbox">Outbox</a></li> ' + '<li><a href="//forums.whirlpool.net.au/whim/?action=contacts">Contacts</a></li> ' + '<li><a href="//forums.whirlpool.net.au/forum/?action=watched">Watched Threads</a></li> ' + '<li><a href="//forums.whirlpool.net.au/forum/?action=threads_search">Thread Search</a></li> ' + '<li><a href="//whirlpool.net.au/profile/">Account Settings</a></li> ' + '<li><a href="//whirlpool.net.au/profile/?a=logout&logout=' + uNumber + '">Log out</a></li> ' + '</ul> ' + '</li><li><a>Custom Links</a>' + '<ul>' + customLinksMenuHTML + '</ul>' + '</li>');
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
            this._menu.append('<li><a id="settingsSpinnerLink">WP+ Settings</a></li>');
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

        this._menu.find('#menuSpinner').on("click", function () {
            $(this).css({ 'height': 'auto', 'overflow': 'visible' });
            displayedMouseOver = false;
            displayedClick = true;

            return false;
        });

        this._menu.find('a#settingsSpinnerLink').on("click", function () {
            openWpSettingsModal();
            displayedMouseOver = false;
            displayedClick = true;
            return true;
        });

        this._menu.mouseleave(function () {
            if (displayedMouseOver) {
                $(WhirlpoolPlus.feat.spinnerMenu._menu).css({ 'height': '19px', 'overflow': 'hidden' });
                displayedMouseOver = false;
            }
            return true;
        });

        this._menu.find('a[href="#"]').on("click", function (event) {
            event.stopPropagation();
            return false;
        });

        $('html').on("click", function () {
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
                $('#settingsSpinnerLink').on("click", function () { WhirlpoolPlus.settings._launch(); return false; })
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
        $('#settingsSpinnerLink').on("click", function () { WhirlpoolPlus.settings._launch(); return false; })
        this._menu.css('margin', '95px 0 50px 6px');

    }

};

WhirlpoolPlus.feat.whirlpoolLastRead = {

    css: async function () {
        // Post highlighting
        if (!WhirlpoolPlus.util.get('wlr_display_flipStyles')) {
            WhirlpoolPlus.util.css('#replies #replylist .whirlpoolLastRead_readReply .replytools { margin-top: -2px; background-color: ' + WhirlpoolPlus.util.get('wlr_display_unreadPostColour') + '; background-image: none; } ');
        } else {
            WhirlpoolPlus.util.css('#replies #replylist .whirlpoolLastRead_unreadReply .replytools { background-color: ' + WhirlpoolPlus.util.get('wlr_display_unreadPostColour') + '; background-image: none; } ');
        }

        // Tracker disable
        WhirlpoolPlus.util.css('#wlr_disableTracker { height: 40px; width: 40px; position: fixed; top: 0px; right: 0px; border-bottom-left-radius: 30px; background-color: #3A437B; z-index: 1000; } ' +
        '.wlr_disableTracker_img { width: 25px; position: relative; top: 5px; left: 10px; } ' +
        '#wlr_disableTracker_disabled { display: none; } ');

        // Thread highlighting
        let gradient = await WhirlpoolPlus.util.image('gradient');
        WhirlpoolPlus.util.css('.whirlpoolLastRead_unreadPosts { background: url("' + gradient + '") repeat scroll 0 0 ' + WhirlpoolPlus.util.get('wlr_display_unreadThreadColour') + ' !important; } ' +
        '.whirlpoolLastRead_noUnreadPosts { background: url("' + gradient + '") repeat scroll 0 0 ' + WhirlpoolPlus.util.get('wlr_display_readThreadColour') + ' !important; } ' +
        '#content .whirlpoolLastRead_controls a { border-bottom-color:grey; border-bottom-style:dashed; font-size: 9px; margin-top: -5px; opacity:0.3; border-bottom-width:1px; float: left; } ' +
        '#content a.whirlpoolLastRead_markAsRead { margin-top: -8px; } ');
    },

    trackThisThread: true,

    saveThreadData: function (threadNumber, threadReplyNumber, overallReplyNumber) {
        WhirlpoolPlus.util.sync.set('wlr_' + threadNumber, { t: threadReplyNumber, o: overallReplyNumber });
        // WLR data was previously stored without any prefix, check for pre-existing data and nullify it
        var oldDataExists = WhirlpoolPlus.util.sync.get(threadNumber);
        if (oldDataExists !== null) {
            WhirlpoolPlus.util.sync.remove(threadNumber);
            };
    },

    loadThreadData: function (threadNumber) {
        var raw = WhirlpoolPlus.util.sync.get(threadNumber) || WhirlpoolPlus.util.sync.get('wlr_' + threadNumber);
        if (raw !== null) {
            return raw;
        } else {
            return false;
        }
    },

    forumReplies: async function () {

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

            let check = await WhirlpoolPlus.util.image('check');
            let cross = await WhirlpoolPlus.util.image('cross');
            $('body').append('<div id="wlr_disableTracker">' +
            '<img class="wlr_disableTracker_img" id="wlr_disableTracker_enabled" src="' + check + '" title="WLR Tracker Enabled" />' +
            '<img class="wlr_disableTracker_img" id="wlr_disableTracker_disabled" src="' + cross + '" title="WLR Tracker Disabled" />' +
            '</div>');

            $('#wlr_disableTracker').on("click", function () {

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



        $(window).on('unload', function () {

            if (WhirlpoolPlus.feat.whirlpoolLastRead.trackThisThread == false) {
                return;
            }

            // need to find the last read reply
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
                // no replies read, so nothing doing
            } else {
                // record information for last read reply
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

            var threadNumber = (thread.find('a.title').prop('href').split('thread/')[1]);

            if (thread.is('.deleted') || thread.is('.pointer')) {
                // ignore this one
                // Not deleted from database, as a thread may be undeleted in the future.
                return true;
            }

            var threadData = WhirlpoolPlus.feat.whirlpoolLastRead.loadThreadData(threadNumber);
            if (WhirlpoolPlus.util.get('wlr_noTrackSticky') && thread.is('.sticky')) {
                // leave the stickies alone
            } else {
                if (threadData) {
                    // we are tracking this thread

                    var replyCountsNew = (thread.find('td.reps').not(':has(a)').attr('title'));
                    var numberOfReplies = parseInt(replyCountsNew.replace(/,/g, '')) + 1; // need to add one, as original post is not counted as a reply here
                    // change the end link regardless, as there might have been replies since a refresh
                    // build the link
                    var link;

                    // do we have the new reply method?
                    if (threadData['o']) {
                        link = '/thread/' + threadNumber + '?r=' + threadData['o'] + '#r' + threadData['o']; //used by Simon's jumpToReplyId method, so preferred
                    } else {
                        // use the old page number method
                        link = '/thread/' + threadNumber + '&p=' + threadData['p'] + '#r' + threadData['t'];
                    }

                    // change the go to end link
                    var threadURL = thread.find('.goend > a').prop('href', link);
                    threadURL.attr('title', threadURL.attr('title') + ' WLR Enabled - Jumps to last marker');

                    // add the controls
                    thread.find('.reps').not(':has(a)').append('<span class="whirlpoolLastRead_controls small"><a href="#" class="whirlpoolLastRead_stopTracking" title="Stop tracking this thread">S</a></span>');

                    if (threadData['t'] < numberOfReplies) {
                        // there are unread posts
                        // we need to apply the unread class
                        if (WhirlpoolPlus.util.get('wlr_display_onlyEndSquare')) {
                            thread.find('td.goend').addClass('whirlpoolLastRead_unreadPosts');
                            thread.find('td.goend').attr('title', 'WLR - There are unread posts');
                        } else if (WhirlpoolPlus.util.get('wlr_display_acrosscolumns')) {
                            thread.find('td').addClass('whirlpoolLastRead_unreadPosts');
                            thread.find('td').attr('title', 'WLR - There are unread posts');
                        }
                        else {
                            thread.find('td:not(.reps):not(.reads):not(.unread)').addClass('whirlpoolLastRead_unreadPosts');
                            thread.find('td:not(.reps):not(.reads):not(.unread)').attr('title', 'WLR - There are unread posts');
                        }

                        if (document.location.href.match('/forum/')) {
                            thread.find('.whirlpoolLastRead_controls').append('<br /><a href="#" class="whirlpoolLastRead_markAsRead" title="Mark this thread as read">M</a>');
                        }

                    } else {
                        // all posts have been read
                        if (WhirlpoolPlus.util.get('wlr_display_onlyEndSquare')) {
                            thread.find('td.goend').addClass('whirlpoolLastRead_noUnreadPosts');
                            thread.find('td.goend').attr('title', 'WLR - There are no unread posts');
                        } else if (WhirlpoolPlus.util.get('wlr_display_acrosscolumns')) {
                            thread.find('td').addClass('whirlpoolLastRead_noUnreadPosts');
                            thread.find('td').attr('title', 'WLR - There are no unread posts');
                        }
                        else {
                            thread.find('td:not(.reps):not(.reads):not(.unread)').addClass('whirlpoolLastRead_noUnreadPosts');
                            thread.find('td:not(.reps):not(.reads):not(.unread)').attr('title', 'WLR - There are no unread posts');
                        }
                    }

                    thread.find('.whirlpoolLastRead_stopTracking').on("click", function () {
                        WhirlpoolPlus.feat.whirlpoolLastRead.stopTracking(threadNumber);
                        thread.children().removeClass('whirlpoolLastRead_unreadPosts whirlpoolLastRead_noUnreadPosts');
                        thread.find('.whirlpoolLastRead_controls').remove();
                        return false;
                    });

                    thread.find('.whirlpoolLastRead_markAsRead').on("click", function () {
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
        // old method
        WhirlpoolPlus.util.sync.remove(threadNumber);
        // new method
        WhirlpoolPlus.util.sync.remove('wlr_' + threadNumber);
        WhirlpoolPlus.util.sync.run();
    },

    markAsRead: function (threadNumber) {
        // only operates on forum replies & watched threads pages.
        // have to use legacy pagenumber method

        // go get the page number
        var threadLink = $('a[href="/thread/' + threadNumber + '"]');
        if (threadLink.length <= 0) {
            // thread not on this page
            return;
        }

        var pageNumber;

        if (threadLink.parent().find('script').length <= 0) {
            // no page link producing script, so only one page
            pageNumber = '1';
        } else {
            pageNumber = (threadLink.parent().find('script').text().split(',')[1]).split(')')[0];
        }

        // now we need to get the number of the last read reply.
        var replyCountsNew = (threadLink.closest('tr').find('td.reps').attr('title'));
        var numberOfReplies = parseInt(replyCountsNew.replace(/,/g, '')) + 1; //need to add one, as original post is not counted as a reply here

        // write data
        WhirlpoolPlus.util.sync.set('wlr_' + threadNumber, { t: numberOfReplies, p: pageNumber })
        // WLR data was previously stored without any prefix, check for pre-existing data and nullify it
        var oldDataExists = WhirlpoolPlus.util.sync.get(threadNumber);
        if (oldDataExists !== null) {
            WhirlpoolPlus.util.sync.remove(threadNumber);
            };

        // change the link
        var link = '/thread/' + threadNumber + '&p=' + pageNumber + '#r' + numberOfReplies;
        threadLink.closest('tr').find('.goend > a').prop('href', link);

        WhirlpoolPlus.util.sync.run();

        return false;
    },

    runPosts: function () {
        if (WhirlpoolPlus.util.get('wlr_enabled') !== 'none') {
            // scroll to the post that we were actually sent to
            if (window.location.hash) {
                $(unsafeWindow).on("load", function () {
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
        if (WhirlpoolPlus.util.get('wlr_enabled') !== 'none') {
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
        if (WhirlpoolPlus.util.get('compose_enhancedEditorNew') != 'disabled') {
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

    image_uploader: function () {
        if (WhirlpoolPlus.util.get('compose_image_uploader')) {
        var script = document.createElement("script");
        script.src = "https://imgbb.com/upload.js";
        script.dataset.autoInsert = "viewer-links";
        document.getElementsByTagName("head")[0].appendChild(script);
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

                var urlPrompt = window.prompt('Enter URL:', 'https://');

                if ((urlPrompt !== 'https://') && (urlPrompt != '') & (urlPrompt != null)) {
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
                    if (selection.indexOf('http://') < 0 && selection.indexOf('https://') < 0 && selection.indexOf('//') < 0 && selection.indexOf('mailto:') < 0) {
                        selection = 'https://' + selection;
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
        if (WhirlpoolPlus.util.get('compose_enhancedEditorNew') != 'emojionly') {
        // Generate first row - basic controls
        for (i in this._basicWhirlcode) {
            var code = this._basicWhirlcode[i];
            controls += '<button type="button" data-type="basic" data-code="' + i + '" class="wpp_whirlcodeButton" title="' + code.name + '">' + code.name + '</button>';
        }

        controls += '<br/>';

        // Generate second row - advanced controls
        for (i in this._advancedWhirlcode) {
            var code = this._advancedWhirlcode[i];
            controls += '<button type="button" data-type="advanced" data-code="' + i + '" class="wpp_whirlcodeButton" title="' + code.name + '">' + code.name + '</button>';
        }
        }

        // Generate third row - emoji picker
if (WhirlpoolPlus.util.get('display_emoticons_enabled') && WhirlpoolPlus.util.get('compose_enhancedEditorNew') !== 'whirlonly') {
    controls += '<br/>';

    // Add styles for the emoji picker
    WhirlpoolPlus.util.css('.quickReply_whirlcodeButton_emoticon img {width: 1.8em; height: 1.8em; display: inline-block; background-size: contain;}');
    WhirlpoolPlus.util.css('#emojiSelectorModal {background: #FFF; width: 300px; max-width: 90%; padding: 20px; border-radius: 8px; text-align: center;}');
    WhirlpoolPlus.util.css('#emojiSelectorModal h3 {margin-bottom: 10px;}');
    WhirlpoolPlus.util.css('.modal_close {margin-top: 10px; display: inline-block; cursor: pointer; color: #007BFF; text-decoration: underline;}');

    // Add the modal structure for the emoji picker
    controls += `
        <div id="emojiSelectorModal" class="modal" style="display: none;background: #e6e6e6;width: 30%;">
            <div id="selector_header">
                <h3>Emoji Selector</h3>
                <p>Select emoji to be added to your post.<br/><i>These will only be displayed as an image for other users with WP Plus installed.</i></p>
            </div>
            <div id="emojiButtons">
                <!-- Buttons will be populated dynamically -->
            </div>
            <a class="modal_close" style="color: #000;" rel="modal:close"><b>Close</b></a>
        </div>
        <button type="button" title="Open Emoji Selector" class="wpp_whirlcodeButton" id="opener">\uD83D\uDE42</button>
    `;

    // Populate the emoji buttons and bind modal functionality
    $(function () {
        // Get the icon set
        const icons = WhirlpoolPlus.feat.display.emoticons.getIconSet(false);

        // Populate the emoji buttons dynamically
        const emojiButtons = Object.keys(icons).map(icon => `
            <button
                type="button"
                data-type="emoticon"
                data-code="${icon.replace('\\\\', '\\')}"
                title="${icon.replace('\\\\', '\\')}"
                style="transform: scale(1); transition: transform 0.2s ease;"
                class="wpp_whirlcodeButton quickReply_whirlcodeButton_emoticon"
            >
                <span>${icons[icon]}</span>
            </button>
        `).join('');

        $('#emojiButtons').html(emojiButtons);
            // Add hover effect inline
        $('#emojiButtons button').on('mouseenter', function () {
        this.style.transform = 'scale(1.5)';
        }).on('mouseleave', function () {
        this.style.transform = 'scale(1)';
        });

        // Bind the modal opener
        $('#opener').on('click', function () {
            $('#emojiSelectorModal').modal({
                fadeDuration: 200, // Optional fade-in duration
            });
        });
    });
}

        $(locationID).append(controls);

        // Set up the event callback
        $(document).on('mouseup', '.wpp_whirlcodeButton', function () {
            // Information about the event
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


            // Information about the current selection
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

        // Overwrite the selection with the new value
        textarea.val(
            textarea.val().substring(0, start) +
            value +
            textarea.val().substring(end, textarea.val().length)
        );

        // Put the cursor in the same spot
        // cursorpos = current position + (length of new value - length of original) + (selection length)
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
            $('.actions a[href^="/forum/?action=edit"]').after('<br><a class="wpp-edit">(quick edit)</a>');
            $('#replies .wpp-edit').click(this._onClick);
        }
    },

    css: function () {
        // Everyone loves CSS hackery, right?
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

        var editUrl = $(this).prev().prev().prop('href').toString(); // The 'Edit my Post' link url
        var replyID = editUrl.split("e=")[1]; // Post ID
        var replyHTML = $('#rr' + replyID + ' .replytext'); // Body of the post
        var original = replyHTML.html().toString(); // Original HTML

        // Activate the CSS hacks
        replyHTML.addClass('quickEdit');

        // Load the contents of the edit form into replyHTML
        replyHTML.load(editUrl + ' #replyformBlock', function () {

            // Prevent errors from this undefined function
            $('#fm').removeAttr('onkeypress');
            $('#replyoptions').attr("style", "display:none");
            $('#replyformBlock').attr("style", "display:block");

            // Prevent quick reply post double-up and setup for Whirlcode
            $('#body').prop('id', 'quickeditbody');

            // Add Whirlcode Block
            WhirlpoolPlus.feat.editor.whirlcodify('#replyformBlock #quickeditbody');

            // Add Cancel Button
            $('#postbutton').after('<input type="button" name="wpp-c-edit" class="wpp-c-edit" value="Cancel" style="width:10em;font-size:14px;">');

            // On cancel
            $('.wpp-c-edit').on('click', function (e) {
                replyHTML.html(original);
                $('.wpp-c-edit').remove();
                $('.wpp-edit').show();
            });

            // On save
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

WhirlpoolPlus.feat.quickWhim = {

    run: function () {
        if (WhirlpoolPlus.util.get('quickWhim')) {
            $('#userprofile a:contains("Send message"):lt(1)').after('<br /><a class="wpp-whim">(Quick whim)</a>');
            $('#userprofile .wpp-whim').click(this._onClick);
        }
    },

    css: function () {
        // Everyone loves CSS hackery, right?
        return '.wpp-whim, .wpp-c-whim { cursor: pointer; }' +
            '.quickWhim #quickwhimbody { width:100%; }' +
            '.quickWhim { font-size:100% !important; }' +
            '.quickWhim > table > tbody > tr:nth-child(1), .quickWhim #reply > table > tbody > tr:nth-child(2), .quickWhim #reply tbody th, .quickWhim #reply tbody .right { display: none; }' +
            '.quickWhim > table > tbody > tr:nth-child(4) table > tbody > tr:nth-child(1) td { width: 50%; text-align: center; }' +
            '.quickWhim > table > tbody > tr:nth-child(4) table > tbody > tr:nth-child(2) { display: none; }' +
            '.quickWhim { margin: 0; }' +
            '.quickWhim #previewButton { display: none; }' +
            '.quickWhim button { width:150px; font:16px Arial; }' +
            '.quickWhim colgroup col { width: auto !important; }' +
            '.quickWhim textarea#body { min-height: 200px; width: 100%; }' +
            '.quickWhim td { background-color: transparent !important; padding: 0; }' +
            '.quickWhim * { box-shadow: none !important; }';
    },

    _onClick: function () {
        $(this).hide();

        var whimUrl = 'https://forums.whirlpool.net.au/forum/?action=newthread&u='; // The 'Whim' link url
        var userNumber = document.location.href.split('user/')[1]; // The User ID
            if (userNumber.indexOf('?days')) {
                userNumber = userNumber.split('?')[0];
            };
        var whimUrlFull = whimUrl + userNumber;
        var pmHTML = $('.wpp-whim').parent(); // PM block
        var original = pmHTML.html().toString(); // Original HTML

        // Activate the CSS hacks
        pmHTML.addClass('quickWhim');

        // Load the contents of the new thread form into the PM block
        pmHTML.load(whimUrlFull + ' #replyformBlock', function () {

            // Prevent errors from this undefined function
            $('#fm').removeAttr('onkeypress');
            $('#replyoptions').attr("style", "display:none");
            $('#replyformBlock').attr("style", "display:block");

            // Setup for Whirlcode
            $('#body').prop('id', 'quickwhimbody');

            // Add Whirlcode Block
            WhirlpoolPlus.feat.editor.whirlcodify('#replyformBlock #quickwhimbody');

            // Add Cancel Button
            $('#postbutton').after('<input type="button" name="wpp-c-whim" class="wpp-c-whim" value="Cancel" style="width:10em;font-size:14px;">');

            // On cancel
            $('.wpp-c-whim').on('click', function (e) {
                pmHTML.html(original);
                $('.wpp-c-whim').remove();
                $('.wpp-whim').show();
            });

            // On save
            $('input').on('click', function (e) {
                $('input[id=postbutton]').value('Post Thread');
                var data = $('#fm').serialize();

                $.post($('#fm').prop('action'), data, function (text) {
                    if (text.indexOf('Opening your') >= 0) {
                        document.location.reload();
                    } else {
                        alert('WP+: Something went wrong while sending your whim. Try using the normal private message function instead. Please report this bug in the WP+ thread (in Feedback).');
                    }
                });

                return false;
            });
        });
    }

};

WhirlpoolPlus.feat.userNotes = {

    // new section begin
    getUserNotes : function (userNumber) {
        var rawdata = WhirlpoolPlus.util.sync.get('userNotes_' + userNumber);
        if (rawdata !== null) {
            return rawdata;
        } else {
            return false;
        }
    },

    setUserNotes : function (userNumber, notesData) {
        WhirlpoolPlus.util.sync.set('userNotes_' + userNumber, { note: notesData });
    },

    css: async function () {
        let red_note = await WhirlpoolPlus.util.image('red_note');
        let green_note = await WhirlpoolPlus.util.image('green_note');
        WhirlpoolPlus.util.css('.userNotes_button { display: inline-block; cursor: pointer; width: 16px; height: 16px;}' +
            '.userNotes_button_notes { background-image: url(' + red_note + '); }' +
            '.userNotes_button_noNotes { background-image: url(' + green_note + '); }' +
            '.userNotes_dialog textarea { width: 100%; height: 200px; }' +
            '.userNotes_close { width: 100%; text-align: right; padding-bottom: 5px; font-weight: bold; cursor: pointer; }');
    },

    runOnReply: function (reply) {
        if (!WhirlpoolPlus.util.get('userNotes_enabled')) {
            return;
        }

        var userNumber = WhirlpoolPlus.util.getReplyUserId(reply);
        var userNotesClass = 'userNotes_button_noNotes';
        var notes = WhirlpoolPlus.feat.userNotes.getUserNotes(userNumber);
        if (WhirlpoolPlus.feat.userNotes.getUserNotes(userNumber)['note']) {
            userNotesClass = 'userNotes_button_notes';
        }

        var userNotesButton = $('<span class="userNotes_button ' + userNotesClass + '" data-userNumber="' + userNumber + '" data-replyID="' + reply.prop('id') + '"></div>');
        reply.find('.userstats').append(userNotesButton);

        userNotesButton.on("click", function () {
            // Create the modal content dynamically
            var modalHTML = `
            <div id="userNotesModal" class="modal">
            <h4>User Notes</h4>
            <textarea id="userNotes_notes" style="width:100%; height:150px;"></textarea>
            <div style="margin-top: 10px; text-align: right;">
                <button id="saveUserNotes" class="btn-save">Save</button>
            </div>
        </div>
    `;

    // Append the modal to the body
    $('body').append(modalHTML);

    // Set the initial value of the textarea
    $('#userNotes_notes').val(WhirlpoolPlus.feat.userNotes.getUserNotes(userNumber)['note']);

    // Open the modal
    $('#userNotesModal').modal({
        fadeDuration: 200,
        fadeDelay: 0.5,
    });

    // Handle Save button click
    $('#saveUserNotes').on('click', function () {
        var notesData = $('#userNotes_notes').val();

        // Save the notes data
        WhirlpoolPlus.feat.userNotes.setUserNotes(userNumber, notesData);

        if (notesData === '') {
            userNotesButton.removeClass('userNotes_button_notes').addClass('userNotes_button_noNotes');
            WhirlpoolPlus.util.sync.remove('userNotes_' + userNumber);
        } else {
            userNotesButton.removeClass('userNotes_button_noNotes').addClass('userNotes_button_notes');
        }

        // Close the modal
        $.modal.close();
    });

    // Cleanup the modal after it is closed
    $(document).on('modal:close', '#userNotesModal', function () {
        $('#userNotesModal').remove();
    });
});

    },

    runOnProfile: function () {
        if (!WhirlpoolPlus.util.get('userNotes_enabled') && WhirlpoolPlus.util.get('display_avatarsOnProfile')) {
            return;
        }

        var userNumber = document.location.href.split('user/')[1]?.match(/^\d+/)?.[0];
            if (window.location.href == 'https://forums.whirlpool.net.au/user/' || window.location.href.indexOf('/user/?days') > -1) {
                userNumber = WhirlpoolPlus.util.getUserId();
            };
        var userNotesClass = 'userNotes_button_noNotes';
        var notes = WhirlpoolPlus.feat.userNotes.getUserNotes(userNumber);
        if (WhirlpoolPlus.feat.userNotes.getUserNotes(userNumber)['note']) {
            userNotesClass = 'userNotes_button_notes';
        }

        var userNotesButton = $('<span class="userNotes_button ' + userNotesClass + '" data-userNumber="' + userNumber + '"></div>');
        $('#avusername').after(userNotesButton);


userNotesButton.on("click", function () {
    // Create the modal content dynamically
    var modalHTML = `
        <div id="userNotesModal" class="modal">
            <h4>User Notes</h4>
            <textarea id="userNotes_notes" style="width:100%; height:150px;"></textarea>
            <div style="margin-top: 10px; text-align: right;">
                <button id="saveUserNotes" class="btn-save">Save</button>
            </div>
        </div>
    `;

    // Append the modal to the body
    $('body').append(modalHTML);

    // Set the initial value of the textarea
    $('#userNotes_notes').val(WhirlpoolPlus.feat.userNotes.getUserNotes(userNumber)['note']);

    // Open the modal
    $('#userNotesModal').modal({
        fadeDuration: 200,
        fadeDelay: 0.5,
    });

    // Handle Save button click
    $('#saveUserNotes').on('click', function () {
        var notesData = $('#userNotes_notes').val();

        // Save the notes data
        WhirlpoolPlus.feat.userNotes.setUserNotes(userNumber, notesData);

        if (notesData === '') {
            userNotesButton.removeClass('userNotes_button_notes').addClass('userNotes_button_noNotes');
            WhirlpoolPlus.util.sync.remove('userNotes_' + userNumber);
        } else {
            userNotesButton.removeClass('userNotes_button_noNotes').addClass('userNotes_button_notes');
        }

        // Close the modal
        $.modal.close();
    });

    // Cleanup the modal after it is closed
    $(document).on('modal:close', '#userNotesModal', function () {
        $('#userNotesModal').remove();
    });
});


    },

};

WhirlpoolPlus.run = async function () {
    // Run Everywhere
    WhirlpoolPlus.util.bypassCSP(); // sets the cookie to bypass the Whirlpool Content Security Policy
    WhirlpoolPlus.feat.returnafterlogin(); // runs the return to previous page after login feature if enabled
    WhirlpoolPlus.util.initPageType(); // initialises the page type value

    // Upgrade the script if necessary
    if (!WhirlpoolPlus.util.exists('wpp_storageVersion') || WhirlpoolPlus.about.storageVersion > WhirlpoolPlus.util.get('storageVersion')) {
        WhirlpoolPlus.install.run();
    }

    // Dump CSS as early as possible to style the pages
    WhirlpoolPlus.util.css(
        await WhirlpoolPlus.feat.display.css() +
        WhirlpoolPlus.settings.css() +
        WhirlpoolPlus.feat.avatar.css() +
        WhirlpoolPlus.feat.spinnerMenu.css() +
        WhirlpoolPlus.feat.recentActivityOverlay.css() +
        WhirlpoolPlus.feat.quickEdit.css() +
        WhirlpoolPlus.feat.quickWhim.css() +
        WhirlpoolPlus.feat.whirlpoolLastRead.css() +
        WhirlpoolPlus.feat.editor.css() +
        WhirlpoolPlus.feat.userNotes.css() +
        WhirlpoolPlus.feat.penaltyBoxCss()
    );

    /** RUN: Not Alerts **/
    if (!WhirlpoolPlus.util.pageType.alert) {
        WhirlpoolPlus.settings.init();
        WhirlpoolPlus.feat.display.floatSidebar();
        WhirlpoolPlus.feat.display.floatTopbar();
        WhirlpoolPlus.feat.display.floatGoToTop();
        WhirlpoolPlus.feat.display.whimAlert();
        WhirlpoolPlus.feat.display.wpPlusLogo();
        WhirlpoolPlus.feat.display.poweredby();
        WhirlpoolPlus.feat.watchedAlert.run();
        WhirlpoolPlus.feat.recentActivityOverlay.run();
        WhirlpoolPlus.feat.spinnerMenu.run();
        WhirlpoolPlus.feat.changeLinks();
        WhirlpoolPlus.util.sync.init();
    }

    /** RUN: Posts Pages **/
    if (WhirlpoolPlus.util.pageType.posts || WhirlpoolPlus.util.pageType.postsOld) {
        WhirlpoolPlus.feat.display.hidePosts();
        WhirlpoolPlus.feat.display.emoticons.init();
        WhirlpoolPlus.feat.embed();
        WhirlpoolPlus.feat.display.syntaxHighlight();
        WhirlpoolPlus.feat.quickEdit.run();
        WhirlpoolPlus.feat.whirlpoolLastRead.runPosts();
        WhirlpoolPlus.feat.watchedThreadsOldMarkAsRead();
        WhirlpoolPlus.feat.watchedThreadsForumBarHide();
        WhirlpoolPlus.feat.extraNavLinks();
        WhirlpoolPlus.feat.editor.showInlineReply();
        WhirlpoolPlus.feat.editor.autoSubscribe();
        WhirlpoolPlus.feat.editor.movePreview();
        WhirlpoolPlus.feat.editor.image_uploader();
        WhirlpoolPlus.feat.editor.whirlcodify('#replyformBlock #body');

        //Loop through each reply
        $('#replies .reply:not(.preview)').each(async function () {
            $this = $(this);
            WhirlpoolPlus.feat.ignoreUser.userIgnore($this);
            WhirlpoolPlus.feat.avatar.avatariseRow($this);
            WhirlpoolPlus.feat.whimLink.WhimUser($this);
            WhirlpoolPlus.feat.persistentEditLink.PersistentEdit($this);
            WhirlpoolPlus.feat.numberPosts.NumberPost($this);
            WhirlpoolPlus.feat.savePosts.PostSave($this);
            WhirlpoolPlus.feat.userNotes.runOnReply($this);
            if (WhirlpoolPlus.util.get('display_bannedPosts')) {
            WhirlpoolPlus.feat.bannedUserPostHide($this);
        }
            if (WhirlpoolPlus.util.get('display_penaltyBox')) {
                WhirlpoolPlus.feat.penaltyBoxHighlight($this);
            }
        });

    }

    /** RUN: Threads Pages **/
    if (WhirlpoolPlus.util.pageType.threads != WhirlpoolPlus.util.pageType.watchedThreads !=WhirlpoolPlus.util.pageType.reply !=WhirlpoolPlus.util.pageType.edit) {
        WhirlpoolPlus.feat.display.hideThreads();
        WhirlpoolPlus.feat.unansweredThreadsLink();
        WhirlpoolPlus.feat.whirlpoolLastRead.runThreads();
    }

    /** RUN: Profile Pages **/
    if (WhirlpoolPlus.util.pageType.profile) {
        WhirlpoolPlus.feat.display.hideClosedThreads();
        if (WhirlpoolPlus.util.get('wlr_enabled') == 'all' || WhirlpoolPlus.util.get('wlr_enabled') == 'profile') {
            WhirlpoolPlus.feat.whirlpoolLastRead.runThreads();
        };
        WhirlpoolPlus.feat.quickWhim.run();
        WhirlpoolPlus.feat.postsPerDay();
        WhirlpoolPlus.feat.display.oldProfile();
        WhirlpoolPlus.feat.display.userPageInfoToggle();
        WhirlpoolPlus.feat.yourvoteslink();
        $('#userprofile').each(WhirlpoolPlus.feat.avatar.avatariseProfile);
        $('#userprofile').each(async function () {
            $this = $(this);
            (WhirlpoolPlus.feat.userNotes.runOnProfile)($this);
        });
    }

    /** RUN: Own Profile **/
    let uNumber = WhirlpoolPlus.util.getUserId();
    if (window.location.href == 'https://forums.whirlpool.net.au/user/' || window.location.href.indexOf('/user/?days') > -1 || window.location.href.indexOf(uNumber) >0) {
        WhirlpoolPlus.feat.display.superProfile();
        WhirlpoolPlus.feat.hideRecentActivityThreads();
        WhirlpoolPlus.feat.hideWhimActivity();
        $('.wpp-whim').css('display', 'none');
    }

    /** RUN: Aura Votes Page **/
    if (WhirlpoolPlus.util.pageType.auraVotes) {
        WhirlpoolPlus.feat.auraCount();
    }

    /** RUN: Forums page **/
    if (document.location.href == 'https://forums.whirlpool.net.au/') {
        WhirlpoolPlus.feat.display.hideForums();
        WhirlpoolPlus.feat.removeLinkToLastPage();
    }

    /** RUN: Posting (new thread, reply) **/
    if (WhirlpoolPlus.util.pageType.newThread || WhirlpoolPlus.util.pageType.reply || WhirlpoolPlus.util.pageType.newTWAM) {
        WhirlpoolPlus.feat.editor.autoSubscribe();
        WhirlpoolPlus.feat.editor.image_uploader();
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
        WhirlpoolPlus.feat.filterWatchedThreadsToOPReplies();
        if (WhirlpoolPlus.util.get('wlr_enabled') == 'all' || WhirlpoolPlus.util.get('wlr_enabled') == 'watched') {
            WhirlpoolPlus.feat.whirlpoolLastRead.runThreads();
        }
    }

    /** RUN: Thread Search pages **/
    if (WhirlpoolPlus.util.pageType.search) {
        WhirlpoolPlus.feat.editSearchLinks();
    }

    /** RUN: Wiki Edit **/
    if (WhirlpoolPlus.util.pageType.wiki) {
        WhirlpoolPlus.feat.editor.whirlcodify('#f_body');
    }

}

// Run the script
try {
    WhirlpoolPlus.run();
} catch (e) {
    if (typeof console != 'undefined') {
        console.error(e);
    } else {
        alert('WP+ Error occurred: ' + e);
    }
}