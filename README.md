# Whirlpool Plus

Compatible with [Whirlpool Forums Australia](https://forums.whirlpool.net.au/)

## How Does It Work?

1. First you need to install a browser add-on that manages User Scripts if you do not have one already. Greasemonkey, Tampermonkey and Violetmonkey are all popular solutions.

2. Open the [raw copy](https://github.com/phyco1991/wpplus/raw/master/whirlpool_plus.user.js) of the script inside a browser with the above add-on running and it will prompt you to install.

3. Browse to Whirlpool and configure the options in the script to modify your browsing experience as you would like!

## What Can It Do?

A full run-down of the featureset is available in the Whirlpool Plus [wiki entry](https://whirlpool.net.au/wiki/whirlpool_plus) on Whirlpool Forums

## Modifying The Script

If you wish to make modifications of your own/collaborate on the script you are welcome to do so and submit them for merge into the master branch. There are some requirements for the script to function correctly if you want your modification to be successfully merged.

You need to update both the main script (.user.js) and the metadata (.meta.js) to distribute an update. The .meta.js file is simply the script header, used by script manager add-ons to save bandwidth.

Within the script itself, you'll want to update WhirlpoolPlus.about.version, .prerelease, .storageVersion and .changelog when you release a new version.

Descriptions:
Version - self explanatory

Prerelease - if a prerelease version, an integer above 0. I mainly used prereleases to send around test versions to a few people before an actual release. It's a useful way of ensuring that any test versions will correctly update to the final version when it is released.

Storage Version - a meaningless number (not a version), used to track whether the "install" tasks should be performed. For example, showing the information dialog, and initialsing new variables. Hopefully the code is clearish.

Changelog - used to display changelog on install dialog, and in settings.

## Disclaimer

WP Plus uses your browser's Local DOM Storage and disables Whirlpool's Content Security Policy to function as intended. This is an unofficial modification of Whirlpool created by a third party and is not officially supported by Whirlpool.
