// ==UserScript==
// @name			Whirlpool Plus
// @namespace		WhirlpoolPlus
// @description		Adds a suite of extra optional features to the Whirlpool forums.
// @version			4.5.4
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

// Begin Complied Userscript headers

/* http://wpplus.endorph.net/resources/js/min/delayedLoad.jquery.autosize.js */ function load_jQueryAutosize(e,t){var n={className:"autosizejs",append:"",callback:false},r="hidden",i="border-box",s="lineHeight",o='<textarea tabindex="-1" style="position:absolute; top:-9999px; left:-9999px; right:auto; bottom:auto; -moz-box-sizing:content-box; -webkit-box-sizing:content-box; box-sizing:content-box; word-wrap:break-word; height:0 !important; min-height:0 !important; overflow:hidden;"/>',u=["fontFamily","fontSize","fontWeight","fontStyle","letterSpacing","textTransform","wordSpacing","textIndent"],a="oninput",f="onpropertychange",l="onkeyup",c=e(o)[0];c.setAttribute(a,"return");e(c).css(s,"99px");if(e(c).css(s)==="99px"){u.push(s)}e.fn.autosize=function(s){s=e.extend({},n,s||{});return this.each(function(){function E(){var e,t,i;if(!v){v=true;h.value=n.value+s.append;h.style.overflowY=n.style.overflowY;i=parseInt(n.style.height,10);h.style.width=l.css("width");h.scrollTop=0;h.scrollTop=9e4;e=h.scrollTop;t=r;if(e>d){e=d;t="scroll"}else if(e<p){e=p}e+=y;n.style.overflowY=t;if(i!==e){n.style.height=e+"px";if(w){s.callback.call(n)}}setTimeout(function(){v=false},1)}}var n=this,l=e(n),h,p=l.height(),d=parseInt(l.css("maxHeight"),10),v,m=u.length,g,y=0,b=n.value,w=e.isFunction(s.callback);if(l.css("box-sizing")===i||l.css("-moz-box-sizing")===i||l.css("-webkit-box-sizing")===i){y=l.outerHeight()-l.height()}if(l.data("mirror")||l.data("ismirror")){return}else{h=e(o).data("ismirror",true).addClass(s.className)[0];g=l.css("resize")==="none"?"none":"horizontal";l.data("mirror",e(h)).css({overflow:r,overflowY:r,wordWrap:"break-word",resize:g})}d=d&&d>0?d:9e4;while(m--){h.style[u[m]]=l.css(u[m])}e("body").append(h);if(f in n){if(a in n){n[a]=n.onkeyup=E}else{n[f]=E}}else if(e.isFunction(c[a])){n[a]=E;n.value="";n.value=b}else{l.keyup(E)}e(t).resize(E);l.bind("autosize",E);E()})}}
/* http://wpplus.endorph.net/resources/js/min/delayedLoad.jquery.oembed.js */ function load_jQueryoEmbed(e){function n(e,t){t=t?t:"";return e?n(--e,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz".charAt(Math.floor(Math.random()*60))+t):t}function r(e,t){var n=e.apiendpoint,r="",i;n+=n.indexOf("?")<=0?"?":"&";n=n.replace("#","%23");if(e.maxWidth!==null&&(typeof e.params.maxwidth==="undefined"||e.params.maxwidth===null)){e.params.maxwidth=e.maxWidth}if(e.maxHeight!==null&&(typeof e.params.maxheight==="undefined"||e.params.maxheight===null)){e.params.maxheight=e.maxHeight}for(i in e.params){if(i==e.callbackparameter)continue;if(e.params[i]!==null)r+="&"+escape(i)+"="+e.params[i]}n+="format="+e.format+"&url="+escape(t)+r;if(e.dataType!="json")n+="&"+e.callbackparameter+"=?";return n}function s(n,r,i){e("#jqoembeddata").data(r,n.code);t.beforeEmbed.call(i,n);t.onEmbed.call(i,n);t.afterEmbed.call(i,n)}function o(i,o,u){if(e("#jqoembeddata").data(o)!=undefined&&u.embedtag.tag!="iframe"){var a={code:e("#jqoembeddata").data(o)};s(a,o,i)}else if(u.yql){var f=u.yql.from||"htmlstring";var l=u.yql.url?u.yql.url(o):o;var c="SELECT * FROM "+f+' WHERE url="'+l+'"'+" and "+(/html/.test(f)?"xpath":"itemPath")+"='"+(u.yql.xpath||"/")+"'";if(f=="html")c+=" and compat='html5'";var h=e.extend({url:"http://query.yahooapis.com/v1/public/yql",dataType:"jsonp",data:{q:c,format:"json",env:"store://datatables.org/alltableswithkeys",callback:"?"},success:function(t){var n;if(u.yql.xpath&&u.yql.xpath=="//meta|//title|//link"){var r={};if(t.query.results==null){t.query.results={meta:[]}}for(var a=0,f=t.query.results.meta.length;a<f;a++){var c=t.query.results.meta[a].name||t.query.results.meta[a].property||null;if(c==null)continue;r[c.toLowerCase()]=t.query.results.meta[a].content}if(!r.hasOwnProperty("title")||!r.hasOwnProperty("og:title")){if(t.query.results.title!=null){r.title=t.query.results.title}}if(!r.hasOwnProperty("og:image")&&t.query.results.hasOwnProperty("link")){for(var a=0,f=t.query.results.link.length;a<f;a++){if(t.query.results.link[a].hasOwnProperty("rel")){if(t.query.results.link[a].rel=="apple-touch-icon"){if(t.query.results.link[a].href.charAt(0)=="/"){r["og:image"]=l.match(/^(([a-z]+:)?(\/\/)?[^\/]+\/).*$/)[1]+t.query.results.link[a].href}else{r["og:image"]=t.query.results.link[a].href}}}}}n=u.yql.datareturn(r)}else{n=u.yql.datareturn?u.yql.datareturn(t.query.results):t.query.results.result}if(n===false)return;var h=e.extend({},n);h.code=n;s(h,o,i)},error:t.onError.call(i,o,u)},t.ajaxOptions||{});e.ajax(h)}else if(u.templateRegex){if(u.embedtag.tag!==""){var p=u.embedtag.flashvars||"";var d=u.embedtag.tag||"embed";var v=u.embedtag.width||"auto";var m=u.embedtag.nocache||0;var g=u.embedtag.height||"auto";var y=o.replace(u.templateRegex,u.apiendpoint);if(!m)y+="&jqoemcache="+n(5);if(u.apikey)y=y.replace("_APIKEY_",t.apikeys[u.name]);var b=e("<"+d+"/>").attr("src",y).attr("width",v).attr("height",g).attr("allowfullscreen",u.embedtag.allowfullscreen||"true").attr("allowscriptaccess",u.embedtag.allowfullscreen||"always").css("max-height",t.maxHeight||"auto").css("max-width",t.maxWidth||"auto");if(d=="embed")b.attr("type",u.embedtag.type||"application/x-shockwave-flash").attr("flashvars",o.replace(u.templateRegex,p));if(d=="iframe")b.attr("scrolling",u.embedtag.scrolling||"no").attr("frameborder",u.embedtag.frameborder||"0");var a={code:b};s(a,o,i)}else if(u.apiendpoint){if(u.apikey)u.apiendpoint=u.apiendpoint.replace("_APIKEY_",t.apikeys[u.name]);h=e.extend({url:o.replace(u.templateRegex,u.apiendpoint),dataType:"jsonp",success:function(t){var n=e.extend({},t);n.code=u.templateData(t);s(n,o,i)},error:t.onError.call(i,o,u)},t.ajaxOptions||{});e.ajax(h)}else{var a={code:o.replace(u.templateRegex,u.template)};s(a,o,i)}}else{var w=r(u,o),h=e.extend({url:w,dataType:u.dataType||"jsonp",success:function(t){var n=e.extend({},t);switch(n.type){case"file":case"photo":n.code=e.fn.oembed.getPhotoCode(o,n);break;case"video":case"rich":n.code=e.fn.oembed.getRichCode(o,n);break;default:n.code=e.fn.oembed.getGenericCode(o,n);break}s(n,o,i)},error:t.onError.call(i,o,u)},t.ajaxOptions||{});e.ajax(h)}}function u(e){if(e===null)return null;var t,n={};for(t in e){if(t!==null)n[t.toLowerCase()]=e[t]}return n}e.fn.oembed=function(n,r,i){t=e.extend(true,e.fn.oembed.defaults,r);var s=["0rz.tw","1link.in","1url.com","2.gp","2big.at","2tu.us","3.ly","307.to","4ms.me","4sq.com","4url.cc","6url.com","7.ly","a.gg","a.nf","aa.cx","abcurl.net","ad.vu","adf.ly","adjix.com","afx.cc","all.fuseurl.com","alturl.com","amzn.to","ar.gy","arst.ch","atu.ca","azc.cc","b23.ru","b2l.me","bacn.me","bcool.bz","binged.it","bit.ly","bizj.us","bloat.me","bravo.ly","bsa.ly","budurl.com","canurl.com","chilp.it","chzb.gr","cl.lk","cl.ly","clck.ru","cli.gs","cliccami.info","clickthru.ca","clop.in","conta.cc","cort.as","cot.ag","crks.me","ctvr.us","cutt.us","dai.ly","decenturl.com","dfl8.me","digbig.com","http://digg.com/[^/]+$","disq.us","dld.bz","dlvr.it","do.my","doiop.com","dopen.us","easyuri.com","easyurl.net","eepurl.com","eweri.com","fa.by","fav.me","fb.me","fbshare.me","ff.im","fff.to","fire.to","firsturl.de","firsturl.net","flic.kr","flq.us","fly2.ws","fon.gs","freak.to","fuseurl.com","fuzzy.to","fwd4.me","fwib.net","g.ro.lt","gizmo.do","gl.am","go.9nl.com","go.ign.com","go.usa.gov","goo.gl","goshrink.com","gurl.es","hex.io","hiderefer.com","hmm.ph","href.in","hsblinks.com","htxt.it","huff.to","hulu.com","hurl.me","hurl.ws","icanhaz.com","idek.net","ilix.in","is.gd","its.my","ix.lt","j.mp","jijr.com","kl.am","klck.me","korta.nu","krunchd.com","l9k.net","lat.ms","liip.to","liltext.com","linkbee.com","linkbun.ch","liurl.cn","ln-s.net","ln-s.ru","lnk.gd","lnk.ms","lnkd.in","lnkurl.com","lru.jp","lt.tl","lurl.no","macte.ch","mash.to","merky.de","migre.me","miniurl.com","minurl.fr","mke.me","moby.to","moourl.com","mrte.ch","myloc.me","myurl.in","n.pr","nbc.co","nblo.gs","nn.nf","not.my","notlong.com","nsfw.in","nutshellurl.com","nxy.in","nyti.ms","o-x.fr","oc1.us","om.ly","omf.gd","omoikane.net","on.cnn.com","on.mktw.net","onforb.es","orz.se","ow.ly","ping.fm","pli.gs","pnt.me","politi.co","post.ly","pp.gg","profile.to","ptiturl.com","pub.vitrue.com","qlnk.net","qte.me","qu.tc","qy.fi","r.im","rb6.me","read.bi","readthis.ca","reallytinyurl.com","redir.ec","redirects.ca","redirx.com","retwt.me","ri.ms","rickroll.it","riz.gd","rt.nu","ru.ly","rubyurl.com","rurl.org","rww.tw","s4c.in","s7y.us","safe.mn","sameurl.com","sdut.us","shar.es","shink.de","shorl.com","short.ie","short.to","shortlinks.co.uk","shorturl.com","shout.to","show.my","shrinkify.com","shrinkr.com","shrt.fr","shrt.st","shrten.com","shrunkin.com","simurl.com","slate.me","smallr.com","smsh.me","smurl.name","sn.im","snipr.com","snipurl.com","snurl.com","sp2.ro","spedr.com","srnk.net","srs.li","starturl.com","su.pr","surl.co.uk","surl.hu","t.cn","t.co","t.lh.com","ta.gd","tbd.ly","tcrn.ch","tgr.me","tgr.ph","tighturl.com","tiniuri.com","tiny.cc","tiny.ly","tiny.pl","tinylink.in","tinyuri.ca","tinyurl.com","tk.","tl.gd","tmi.me","tnij.org","tnw.to","tny.com","to.ly","togoto.us","totc.us","toysr.us","tpm.ly","tr.im","tra.kz","trunc.it","twhub.com","twirl.at","twitclicks.com","twitterurl.net","twitterurl.org","twiturl.de","twurl.cc","twurl.nl","u.mavrev.com","u.nu","u76.org","ub0.cc","ulu.lu","updating.me","ur1.ca","url.az","url.co.uk","url.ie","url360.me","url4.eu","urlborg.com","urlbrief.com","urlcover.com","urlcut.com","urlenco.de","urli.nl","urls.im","urlshorteningservicefortwitter.com","urlx.ie","urlzen.com","usat.ly","use.my","vb.ly","vgn.am","vl.am","vm.lc","w55.de","wapo.st","wapurl.co.uk","wipi.es","wp.me","x.vu","xr.com","xrl.in","xrl.us","xurl.es","xurl.jp","y.ahoo.it","yatuc.com","ye.pe","yep.it","yfrog.com","yhoo.it","yiyd.com","youtu.be","yuarel.com","z0p.de","zi.ma","zi.mu","zipmyurl.com","zud.me","zurl.ws","zz.gd","zzang.kr","›.ws","?.ws","?.ws","?.ws","?.ws","?.ws","?.ws","?.ws","?.ws","?.ws","?.ws"];if(e("#jqoembeddata").length===0)e('<span id="jqoembeddata"></span>').appendTo("body");return this.each(function(){var r=e(this),a=n&&(!n.indexOf("http://")||!n.indexOf("https://"))?n:r.attr("href"),f;if(i){t.onEmbed=i}else if(!t.onEmbed){t.onEmbed=function(n){e.fn.oembed.insertCode(this,t.embedMethod,n)}}if(a!==null){for(var l=0,c=s.length;l<c;l++){var h=new RegExp("://"+s[l]+"/","i");if(a.match(h)!==null){var p=e.extend({url:"http://api.longurl.org/v2/expand",dataType:"jsonp",data:{url:a,format:"json"},success:function(n){a=n["long-url"];f=e.fn.oembed.getOEmbedProvider(n["long-url"]);if(f!==null){f.params=u(t[f.name])||{};f.maxWidth=t.maxWidth;f.maxHeight=t.maxHeight;o(r,a,f)}else{t.onProviderNotFound.call(r,a)}}},t.ajaxOptions||{});e.ajax(p);return r}}f=e.fn.oembed.getOEmbedProvider(a);if(f!==null){f.params=u(t[f.name])||{};f.maxWidth=t.maxWidth;f.maxHeight=t.maxHeight;o(r,a,f)}else{t.onProviderNotFound.call(r,a)}}return r})};var t;e.fn.oembed.defaults={maxWidth:null,maxHeight:null,includeHandle:true,embedMethod:"auto",onProviderNotFound:function(){},beforeEmbed:function(){},afterEmbed:function(){},onEmbed:false,onError:function(){},ajaxOptions:{}};e.fn.oembed.insertCode=function(n,r,i){if(i===null)return;if(r=="auto"&&n.attr("href")!==null)r="append";else if(r=="auto")r="replace";switch(r){case"replace":n.replaceWith(i.code);break;case"fill":n.html(i.code);break;case"append":n.wrap('<div class="oembedall-container"></div>');var s=n.parent();if(t.includeHandle){e('<span class="oembedall-closehide">?</span>').insertBefore(n).click(function(){var t=encodeURIComponent(e(this).text());e(this).html(t=="%E2%86%91"?"?":"?");e(this).parent().children().last().toggle()})}s.append("<br/>");try{i.code.clone().appendTo(s)}catch(o){s.append(i.code)}if(t.maxWidth){var u=s.parent().width();if(u<t.maxWidth){var a=e("iframe",s).width();var f=e("iframe",s).height();var l=a/u;e("iframe",s).css("max-width",a/l);e("iframe",s).css("max-height",f/l)}else{if(t.maxWidth){e("iframe",s).css("max-width",t.maxWidth)}if(t.maxHeight){e("iframe",s).css("max-height",t.maxHeight)}}}break}};e.fn.oembed.getPhotoCode=function(e,t){var n,r=t.title?t.title:"";r+=t.author_name?" - "+t.author_name:"";r+=t.provider_name?" - "+t.provider_name:"";n='<div><a href="'+e+"\" target='_blank'><img src=\""+t.url+'" alt="'+r+'"/></a></div>';if(t.html)n+="<div>"+t.html+"</div>";return n};e.fn.oembed.getRichCode=function(e,t){var n=t.html;return n};e.fn.oembed.getGenericCode=function(e,t){var n=t.title!==null?t.title:e,r='<a href="'+e+'">'+n+"</a>";if(t.html)r+="<div>"+t.html+"</div>";return r};e.fn.oembed.getOEmbedProvider=function(t){for(var n=0;n<e.fn.oembed.providers.length;n++){for(var r=0,i=e.fn.oembed.providers[n].urlschemes.length;r<i;r++){var s=new RegExp(e.fn.oembed.providers[n].urlschemes[r],"i");if(t.match(s)!==null)return e.fn.oembed.providers[n]}}return null};e.fn.oembed.OEmbedProvider=function(e,t,n,r,i){this.name=e;this.type=t;this.urlschemes=n;this.apiendpoint=r;this.maxWidth=500;this.maxHeight=400;i=i||{};if(i.useYQL){if(i.useYQL=="xml"){i.yql={xpath:"//oembed/html",from:"xml",apiendpoint:this.apiendpoint,url:function(e){return this.apiendpoint+"?format=xml&url="+e},datareturn:function(e){return e.html.replace(/.*\[CDATA\[(.*)\]\]>$/,"$1")||""}}}else{i.yql={from:"json",apiendpoint:this.apiendpoint,url:function(e){return this.apiendpoint+"?format=json&url="+e},datareturn:function(e){if("url"in e.json){return'<img src="'+e.json.url+'" />'}return e.json.html||""}}}this.apiendpoint=null}for(var s in i){this[s]=i[s]}this.format=this.format||"json";this.callbackparameter=this.callbackparameter||"callback";this.embedtag=this.embedtag||{tag:""}};e.fn.oembed.providers=[new e.fn.oembed.OEmbedProvider("youtube","video",["youtube\\.com/watch.+v=[\\w-]+&?","youtu\\.be/[\\w-]+"],"http://www.youtube.com/oembed",{useYQL:"json"}),new e.fn.oembed.OEmbedProvider("youtubeiframe","video",["youtube.com/embed"],"$1?wmode=transparent",{templateRegex:/(.*)/,embedtag:{tag:"iframe",width:"425",height:"349"}}),new e.fn.oembed.OEmbedProvider("wistia","video",["wistia.com/m/.+","wistia.com/embed/.+","wi.st/m/.+","wi.st/embed/.+"],"http://fast.wistia.com/oembed",{useYQL:"json"}),new e.fn.oembed.OEmbedProvider("xtranormal","video",["xtranormal\\.com/watch/.+"],"http://www.xtranormal.com/xtraplayr/$1/$2",{templateRegex:/.*com\/watch\/([\w\-]+)\/([\w\-]+).*/,embedtag:{tag:"iframe",width:"320",height:"269"}}),new e.fn.oembed.OEmbedProvider("scivee","video",["scivee.tv/node/.+"],"http://www.scivee.tv/flash/embedCast.swf?",{templateRegex:/.*tv\/node\/(.+)/,embedtag:{width:"480",height:"400",flashvars:"id=$1&type=3"}}),new e.fn.oembed.OEmbedProvider("veoh","video",["veoh.com/watch/.+"],"http://www.veoh.com/swf/webplayer/WebPlayer.swf?version=AFrontend.5.7.0.1337&permalinkId=$1&player=videodetailsembedded&videoAutoPlay=0&id=anonymous",{templateRegex:/.*watch\/([^\?]+).*/,embedtag:{width:"410",height:"341"}}),new e.fn.oembed.OEmbedProvider("gametrailers","video",["gametrailers\\.com/video/.+"],"http://media.mtvnservices.com/mgid:moses:video:gametrailers.com:$2",{templateRegex:/.*com\/video\/([\w\-]+)\/([\w\-]+).*/,embedtag:{width:"512",height:"288"}}),new e.fn.oembed.OEmbedProvider("funnyordie","video",["funnyordie\\.com/videos/.+"],"http://player.ordienetworks.com/flash/fodplayer.swf?",{templateRegex:/.*videos\/([^\/]+)\/([^\/]+)?/,embedtag:{width:512,height:328,flashvars:"key=$1"}}),new e.fn.oembed.OEmbedProvider("colledgehumour","video",["collegehumor\\.com/video/.+"],"http://www.collegehumor.com/moogaloop/moogaloop.swf?clip_id=$1&use_node_id=true&fullscreen=1",{templateRegex:/.*video\/([^\/]+).*/,embedtag:{width:600,height:338}}),new e.fn.oembed.OEmbedProvider("metacafe","video",["metacafe\\.com/watch/.+"],"http://www.metacafe.com/fplayer/$1/$2.swf",{templateRegex:/.*watch\/(\d+)\/(\w+)\/.*/,embedtag:{width:400,height:345}}),new e.fn.oembed.OEmbedProvider("bambuser","video",["bambuser\\.com/channel/.*/broadcast/.*"],"http://static.bambuser.com/r/player.swf?vid=$1",{templateRegex:/.*bambuser\.com\/channel\/.*\/broadcast\/(\w+).*/,embedtag:{width:512,height:339}}),new e.fn.oembed.OEmbedProvider("twitvid","video",["twitvid\\.com/.+"],"http://www.twitvid.com/embed.php?guid=$1&autoplay=0",{templateRegex:/.*twitvid\.com\/(\w+).*/,embedtag:{tag:"iframe",width:480,height:360}}),new e.fn.oembed.OEmbedProvider("aniboom","video",["aniboom\\.com/animation-video/.+"],"http://api.aniboom.com/e/$1",{templateRegex:/.*animation-video\/(\d+).*/,embedtag:{width:594,height:334}}),new e.fn.oembed.OEmbedProvider("vzaar","video",["vzaar\\.com/videos/.+","vzaar.tv/.+"],"http://view.vzaar.com/$1/player?",{templateRegex:/.*\/(\d+).*/,embedtag:{tag:"iframe",width:576,height:324}}),new e.fn.oembed.OEmbedProvider("snotr","video",["snotr\\.com/video/.+"],"http://www.snotr.com/embed/$1",{templateRegex:/.*\/(\d+).*/,embedtag:{tag:"iframe",width:400,height:330,nocache:1}}),new e.fn.oembed.OEmbedProvider("youku","video",["v.youku.com/v_show/id_.+"],"http://player.youku.com/player.php/sid/$1/v.swf",{templateRegex:/.*id_(.+)\.html.*/,embedtag:{width:480,height:400,nocache:1}}),new e.fn.oembed.OEmbedProvider("embedr","video",["embedr\\.com/playlist/.+"],"http://embedr.com/swf/slider/$1/425/520/default/false/std?",{templateRegex:/.*playlist\/([^\/]+).*/,embedtag:{width:425,height:520}}),new e.fn.oembed.OEmbedProvider("blip","video",["blip\\.tv/.+"],"http://blip.tv/oembed/"),new e.fn.oembed.OEmbedProvider("minoto-video","video",["http://api.minoto-video.com/publishers/.+/videos/.+","http://dashboard.minoto-video.com/main/video/details/.+","http://embed.minoto-video.com/.+"],"http://api.minoto-video.com/services/oembed.json",{useYQL:"json"}),new e.fn.oembed.OEmbedProvider("animoto","video",["animoto.com/play/.+"],"http://animoto.com/services/oembed"),new e.fn.oembed.OEmbedProvider("hulu","video",["hulu\\.com/watch/.*"],"http://www.hulu.com/api/oembed.json"),new e.fn.oembed.OEmbedProvider("ustream","video",["ustream\\.tv/recorded/.*"],"http://www.ustream.tv/oembed",{useYQL:"json"}),new e.fn.oembed.OEmbedProvider("vodpod","video",["vodpod.com/watch/.*"],"http://vodpod.com/oembed.js",{useYQL:"json"}),new e.fn.oembed.OEmbedProvider("vimeo","video",["http://www.vimeo.com/groups/.*/videos/.*","http://www.vimeo.com/.*","http://vimeo.com/groups/.*/videos/.*","http://vimeo.com/.*"],"http://vimeo.com/api/oembed.json"),new e.fn.oembed.OEmbedProvider("dailymotion","video",["dailymotion\\.com/.+"],"http://www.dailymotion.com/services/oembed"),new e.fn.oembed.OEmbedProvider("5min","video",["www\\.5min\\.com/.+"],"http://api.5min.com/oembed.xml",{useYQL:"xml"}),new e.fn.oembed.OEmbedProvider("National Film Board of Canada","video",["nfb\\.ca/film/.+"],"http://www.nfb.ca/remote/services/oembed/",{useYQL:"json"}),new e.fn.oembed.OEmbedProvider("qik","video",["qik\\.com/\\w+"],"http://qik.com/api/oembed.json",{useYQL:"json"}),new e.fn.oembed.OEmbedProvider("revision3","video",["revision3\\.com"],"http://revision3.com/api/oembed/"),new e.fn.oembed.OEmbedProvider("dotsub","video",["dotsub\\.com/view/.+"],"http://dotsub.com/services/oembed",{useYQL:"json"}),new e.fn.oembed.OEmbedProvider("clikthrough","video",["clikthrough\\.com/theater/video/\\d+"],"http://clikthrough.com/services/oembed"),new e.fn.oembed.OEmbedProvider("Kinomap","video",["kinomap\\.com/.+"],"http://www.kinomap.com/oembed"),new e.fn.oembed.OEmbedProvider("VHX","video",["vhx.tv/.+"],"http://vhx.tv/services/oembed.json"),new e.fn.oembed.OEmbedProvider("bambuser","video",["bambuser.com/.+"],"http://api.bambuser.com/oembed/iframe.json"),new e.fn.oembed.OEmbedProvider("justin.tv","video",["justin.tv/.+"],"http://api.justin.tv/api/embed/from_url.json",{useYQL:"json"}),new e.fn.oembed.OEmbedProvider("official.fm","rich",["official.fm/.+"],"http://official.fm/services/oembed",{useYQL:"json"}),new e.fn.oembed.OEmbedProvider("chirbit","rich",["chirb.it/.+"],"http://chirb.it/oembed.json",{useYQL:"json"}),new e.fn.oembed.OEmbedProvider("Huffduffer","rich",["huffduffer.com/[-.\\w@]+/\\d+"],"http://huffduffer.com/oembed"),new e.fn.oembed.OEmbedProvider("shoudio","rich",["shoudio.com/.+","shoud.io/.+"],"http://shoudio.com/api/oembed"),new e.fn.oembed.OEmbedProvider("mixcloud","rich",["mixcloud.com/.+"],"http://www.mixcloud.com/oembed/",{useYQL:"json"}),new e.fn.oembed.OEmbedProvider("rdio.com","rich",["rd.io/.+","rdio.com"],"http://www.rdio.com/api/oembed/"),new e.fn.oembed.OEmbedProvider("Soundcloud","rich",["soundcloud.com/.+","snd.sc/.+"],"http://soundcloud.com/oembed",{format:"js"}),new e.fn.oembed.OEmbedProvider("bandcamp","rich",["bandcamp\\.com/album/.+"],null,{yql:{xpath:"//meta[contains(@content, \\'EmbeddedPlayer\\')]",from:"html",datareturn:function(e){return e.meta?'<iframe width="400" height="100" src="'+e.meta.content+'" allowtransparency="true" frameborder="0"></iframe>':false}}}),new e.fn.oembed.OEmbedProvider("deviantart","photo",["deviantart.com/.+","fav.me/.+","deviantart.com/.+"],"http://backend.deviantart.com/oembed",{format:"jsonp"}),new e.fn.oembed.OEmbedProvider("skitch","photo",["skitch.com/.+"],null,{yql:{xpath:"json",from:"json",url:function(e){return"http://skitch.com/oembed/?format=json&url="+e},datareturn:function(t){return e.fn.oembed.getPhotoCode(t.json.url,t.json)}}}),new e.fn.oembed.OEmbedProvider("mobypicture","photo",["mobypicture.com/user/.+/view/.+","moby.to/.+"],"http://api.mobypicture.com/oEmbed"),new e.fn.oembed.OEmbedProvider("flickr","photo",["flickr\\.com/photos/.+"],"http://flickr.com/services/oembed",{callbackparameter:"jsoncallback"}),new e.fn.oembed.OEmbedProvider("photobucket","photo",["photobucket\\.com/(albums|groups)/.+"],"http://photobucket.com/oembed/"),new e.fn.oembed.OEmbedProvider("instagram","photo",["instagr\\.?am(\\.com)?/.+"],"http://api.instagram.com/oembed"),new e.fn.oembed.OEmbedProvider("yfrog","photo",["yfrog\\.(com|ru|com\\.tr|it|fr|co\\.il|co\\.uk|com\\.pl|pl|eu|us)/.+"],"http://www.yfrog.com/api/oembed",{useYQL:"json"}),new e.fn.oembed.OEmbedProvider("SmugMug","photo",["smugmug.com/[-.\\w@]+/.+"],"http://api.smugmug.com/services/oembed/"),new e.fn.oembed.OEmbedProvider("dribbble","photo",["dribbble.com/shots/.+"],"http://api.dribbble.com/shots/$1?callback=?",{templateRegex:/.*shots\/([\d]+).*/,templateData:function(e){if(!e.image_teaser_url)return false;return'<img src="'+e.image_teaser_url+'"/>'}}),new e.fn.oembed.OEmbedProvider("chart.ly","photo",["chart\\.ly/[a-z0-9]{6,8}"],"http://chart.ly/uploads/large_$1.png?",{templateRegex:/.*ly\/([^\/]+).*/,embedtag:{tag:"img"}}),new e.fn.oembed.OEmbedProvider("circuitlab","photo",["circuitlab.com/circuit/.+"],"https://www.circuitlab.com/circuit/$1/screenshot/540x405/?",{templateRegex:/.*circuit\/([^\/]+).*/,embedtag:{tag:"img"}}),new e.fn.oembed.OEmbedProvider("23hq","photo",["23hq.com/[-.\\w@]+/photo/.+"],"http://www.23hq.com/23/oembed",{useYQL:"json"}),new e.fn.oembed.OEmbedProvider("img.ly","photo",["img\\.ly/.+"],"http://img.ly/show/thumb/$1?",{templateRegex:/.*com\/([^\/]+).*/,embedtag:{tag:"img"}}),new e.fn.oembed.OEmbedProvider("twitgoo.com","photo",["twitgoo\\.com/.+"],"http://twitgoo.com/show/thumb/$1?",{templateRegex:/.*com\/([^\/]+).*/,embedtag:{tag:"img"}}),new e.fn.oembed.OEmbedProvider("imgur.com","photo",["imgur\\.com/gallery/.+"],"http://imgur.com/$1l.jpg?",{templateRegex:/.*gallery\/([^\/]+).*/,embedtag:{tag:"img"}}),new e.fn.oembed.OEmbedProvider("visual.ly","rich",["visual\\.ly/.+"],null,{yql:{xpath:"//a[@id=\\'gc_article_graphic_image\\']/img",from:"htmlstring"}}),new e.fn.oembed.OEmbedProvider("gravtar","photo",["mailto:.+"],null,{templateRegex:/mailto:([^\/]+).*/,template:function(e,t){return'<img src="http://gravatar.com/avatar/'+t.md5()+'.jpg" alt="on Gravtar" class="jqoaImg">'}}),new e.fn.oembed.OEmbedProvider("twitter","rich",["twitter.com/.+"],"https://api.twitter.com/1/statuses/oembed.json"),new e.fn.oembed.OEmbedProvider("urtak","rich",["urtak.com/(u|clr)/.+"],"http://oembed.urtak.com/1/oembed"),new e.fn.oembed.OEmbedProvider("cacoo","rich",["cacoo.com/.+"],"http://cacoo.com/oembed.json"),new e.fn.oembed.OEmbedProvider("dailymile","rich",["dailymile.com/people/.*/entries/.*"],"http://api.dailymile.com/oembed"),new e.fn.oembed.OEmbedProvider("dipity","rich",["dipity.com/timeline/.+"],"http://www.dipity.com/oembed/timeline/",{useYQL:"json"}),new e.fn.oembed.OEmbedProvider("speakerdeck","rich",["speakerdeck.com/.+"],"http://speakerdeck.com/oembed.json",{useYQL:"json"}),new e.fn.oembed.OEmbedProvider("popplet","rich",["popplet.com/app/.*"],"http://popplet.com/app/Popplet_Alpha.swf?page_id=$1&em=1",{templateRegex:/.*#\/([^\/]+).*/,embedtag:{width:460,height:460}}),new e.fn.oembed.OEmbedProvider("pearltrees","rich",["pearltrees.com/.*"],"http://cdn.pearltrees.com/s/embed/getApp?",{templateRegex:/.*N-f=1_(\d+).*N-p=(\d+).*/,embedtag:{width:460,height:460,flashvars:"lang=en_US&embedId=pt-embed-$1-693&treeId=$1&pearlId=$2&treeTitle=Diagrams%2FVisualization&site=www.pearltrees.com%2FF"}}),new e.fn.oembed.OEmbedProvider("prezi","rich",["prezi.com/.*"],"http://prezi.com/bin/preziloader.swf?",{templateRegex:/.*com\/([^\/]+)\/.*/,embedtag:{width:550,height:400,flashvars:"prezi_id=$1&lock_to_path=0&color=ffffff&autoplay=no&autohide_ctrls=0"}}),new e.fn.oembed.OEmbedProvider("tourwrist","rich",["tourwrist.com/tours/.+"],null,{templateRegex:/.*tours.([\d]+).*/,template:function(e,t){setTimeout(function(){if(loadEmbeds)loadEmbeds()},2e3);return"<div id='"+t+"' class='tourwrist-tour-embed direct'></div> <script type='text/javascript' src='http://tourwrist.com/tour_embed.js'></script>"}}),new e.fn.oembed.OEmbedProvider("meetup","rich",["meetup\\.(com|ps)/.+"],"http://api.meetup.com/oembed"),new e.fn.oembed.OEmbedProvider("ebay","rich",["ebay\\.*"],"http://togo.ebay.com/togo/togo.swf?2008013100",{templateRegex:/.*\/([^\/]+)\/(\d{10,13}).*/,embedtag:{width:355,height:300,flashvars:"base=http://togo.ebay.com/togo/&lang=en-us&mode=normal&itemid=$2&query=$1"}}),new e.fn.oembed.OEmbedProvider("wikipedia","rich",["wikipedia.org/wiki/.+"],"http://$1.wikipedia.org/w/api.php?action=parse&page=$2&format=json&section=0&callback=?",{templateRegex:/.*\/\/([\w]+).*\/wiki\/([^\/]+).*/,templateData:function(e){if(!e.parse)return false;var t=e.parse["text"]["*"].replace('href="/wiki','href="http://en.wikipedia.org/wiki');return'<div id="oembed-content"><h3><a class="nav-link" href="http://en.wikipedia.org/wiki/'+e.parse["displaytitle"]+'">'+e.parse["displaytitle"]+"</a></h3>"+t+"</div>"}}),new e.fn.oembed.OEmbedProvider("imdb","rich",["imdb.com/title/.+"],"http://www.imdbapi.com/?i=$1&callback=?",{templateRegex:/.*\/title\/([^\/]+).*/,templateData:function(e){if(!e.Title)return false;return'<div id="oembed-content"><h3><a class="nav-link" href="http://imdb.com/title/'+e.ID+'/">'+e.Title+"</a> ("+e.Year+")</h3><p>Starring: "+e.Actors+'</p><div id="photo-wrap" style="margin: auto;width:600px;height:450px;"><img class="photo" id="photo-display" src="'+e.Poster+'" alt="'+e.Title+'"></div>  <div id="view-photo-caption">'+e.Plot+"</div></div>"}}),new e.fn.oembed.OEmbedProvider("livejournal","rich",["livejournal.com/"],"http://ljpic.seacrow.com/json/$2$4?jsonp=?",{templateRegex:/(http:\/\/(((?!users).)+)\.livejournal\.com|.*users\.livejournal\.com\/([^\/]+)).*/,templateData:function(e){if(!e.username)return false;return'<div><img src="'+e.image+'" align="left" style="margin-right: 1em;" /><span class="oembedall-ljuser"><a href="http://'+e.username+'.livejournal.com/profile"><img src="http://www.livejournal.com/img/userinfo.gif" alt="[info]" width="17" height="17" /></a><a href="http://'+e.username+'.livejournal.com/">'+e.username+"</a></span><br />"+e.name+"</div>"}}),new e.fn.oembed.OEmbedProvider("circuitbee","rich",["circuitbee\\.com/circuit/view/.+"],"http://c.circuitbee.com/build/r/schematic-embed.html?id=$1",{templateRegex:/.*circuit\/view\/(\d+).*/,embedtag:{tag:"iframe",width:"500",height:"350"}}),new e.fn.oembed.OEmbedProvider("googlecalendar","rich",["www.google.com/calendar/embed?.+"],"$1",{templateRegex:/(.*)/,embedtag:{tag:"iframe",width:"800",height:"600"}}),new e.fn.oembed.OEmbedProvider("jsfiddle","rich",["jsfiddle.net/[^/]+/?"],"http://jsfiddle.net/$1/embedded/result,js,resources,html,css/?",{templateRegex:/.*net\/([^\/]+).*/,embedtag:{tag:"iframe",width:"100%",height:"300"}}),new e.fn.oembed.OEmbedProvider("jsbin","rich",["jsbin.com/.+"],"http://jsbin.com/$1/?",{templateRegex:/.*com\/([^\/]+).*/,embedtag:{tag:"iframe",width:"100%",height:"300"}}),new e.fn.oembed.OEmbedProvider("jotform","rich",["form.jotform.co/form/.+"],"$1?",{templateRegex:/(.*)/,embedtag:{tag:"iframe",width:"100%",height:"507"}}),new e.fn.oembed.OEmbedProvider("reelapp","rich",["reelapp\\.com/.+"],"http://www.reelapp.com/$1/embed",{templateRegex:/.*com\/(\S{6}).*/,embedtag:{tag:"iframe",width:"400",height:"338"}}),new e.fn.oembed.OEmbedProvider("linkedin","rich",["linkedin.com/pub/.+"],"https://www.linkedin.com/cws/member/public_profile?public_profile_url=$1&format=inline&isFramed=true",{templateRegex:/(.*)/,embedtag:{tag:"iframe",width:"368px",height:"auto"}}),new e.fn.oembed.OEmbedProvider("timetoast","rich",["timetoast.com/timelines/[0-9]+"],"http://www.timetoast.com/flash/TimelineViewer.swf?passedTimelines=$1",{templateRegex:/.*timelines\/([0-9]*)/,embedtag:{width:550,height:400,nocache:1}}),new e.fn.oembed.OEmbedProvider("pastebin","rich",["pastebin\\.com/[\\S]{8}"],"http://pastebin.com/embed_iframe.php?i=$1",{templateRegex:/.*\/(\S{8}).*/,embedtag:{tag:"iframe",width:"100%",height:"auto"}}),new e.fn.oembed.OEmbedProvider("pastie","rich",["pastie\\.org/pastes/.+"],null,{yql:{xpath:'//pre[@class="textmate-source"]'}}),new e.fn.oembed.OEmbedProvider("github","rich",["gist.github.com/.+"],"https://github.com/api/oembed"),new e.fn.oembed.OEmbedProvider("github","rich",["github.com/[-.\\w@]+/[-.\\w@]+"],"https://api.github.com/repos/$1/$2?callback=?",{templateRegex:/.*\/([^\/]+)\/([^\/]+).*/,templateData:function(e){if(!e.data.html_url)return false;return'<div class="oembedall-githubrepos"><ul class="oembedall-repo-stats"><li>'+e.data.language+'</li><li class="oembedall-watchers"><a title="Watchers" href="'+e.data.html_url+'/watchers">&#x25c9; '+e.data.watchers+"</a></li>"+'<li class="oembedall-forks"><a title="Forks" href="'+e.data.html_url+'/network">&#x0265; '+e.data.forks+'</a></li></ul><h3><a href="'+e.data.html_url+'">'+e.data.name+'</a></h3><div class="oembedall-body"><p class="oembedall-description">'+e.data.description+"</p>"+'<p class="oembedall-updated-at">Last updated: '+e.data.pushed_at+"</p></div></div>"}}),new e.fn.oembed.OEmbedProvider("facebook","rich",["facebook.com/(people/[^\\/]+/\\d+|[^\\/]+$)"],"https://graph.facebook.com/$2$3/?callback=?",{templateRegex:/.*facebook.com\/(people\/[^\/]+\/(\d+).*|([^\/]+$))/,templateData:function(e){if(!e.id)return false;var t='<div class="oembedall-facebook1"><div class="oembedall-facebook2"><a href="http://www.facebook.com/">facebook</a> <a href="'+e.link+'">'+e.name+'</a></div><div class="oembedall-facebookBody"><div>';if(e.picture)t+='<img src="'+e.picture+'" align="left"></div><div>';if(e.category)t+="Category  <strong>"+e.category+"</strong><br/>";if(e.website)t+="Website  <strong>"+e.website+"</strong><br/>";if(e.gender)t+="Gender  <strong>"+e.gender+"</strong><br/>";t+="</div></div></div>";return t}}),new e.fn.oembed.OEmbedProvider("stackoverflow","rich",["stackoverflow.com/questions/[\\d]+"],"http://api.stackoverflow.com/1.1/questions/$1?body=true&jsonp=?",{templateRegex:/.*questions\/([\d]+).*/,templateData:function(t){if(!t.questions)return false;var n=t.questions[0];var r=e(n.body).text();var s='<div class="oembedall-stoqembed"><div class="oembedall-statscontainer"><div class="oembedall-statsarrow"></div><div class="oembedall-stats"><div class="oembedall-vote"><div class="oembedall-votes">'+'<span class="oembedall-vote-count-post"><strong>'+(n.up_vote_count-n.down_vote_count)+'</strong></span><div class="oembedall-viewcount">vote(s)</div></div>'+'</div><div class="oembedall-status"><strong>'+n.answer_count+'</strong>answer</div></div><div class="oembedall-views">'+n.view_count+" view(s)</div></div>"+'<div class="oembedall-summary"><h3><a class="oembedall-question-hyperlink" href="http://stackoverflow.com/questions/'+n.question_id+'/">'+n.title+"</a></h3>"+'<div class="oembedall-excerpt">'+r.substring(0,100)+'...</div><div class="oembedall-tags">';for(i in n.tags)s+='<a title="" class="oembedall-post-tag" href="http://stackoverflow.com/questions/tagged/'+n.tags[i]+'">'+n.tags[i]+"</a>";s+='</div><div class="oembedall-fr"><div class="oembedall-user-info"><div class="oembedall-user-gravatar32"><a href="http://stackoverflow.com/users/'+n.owner.user_id+"/"+n.owner.display_name+'">'+'<img width="32" height="32" alt="" src="http://www.gravatar.com/avatar/'+n.owner.email_hash+'?s=32&d=identicon&r=PG"></a></div><div class="oembedall-user-details">'+'<a href="http://stackoverflow.com/users/'+n.owner.user_id+"/"+n.owner.display_name+'">'+n.owner.display_name+'</a><br><span title="reputation score" class="oembedall-reputation-score">'+n.owner.reputation+"</span></div></div></div></div></div>";return s}}),new e.fn.oembed.OEmbedProvider("wordpress","rich",["wordpress\\.com/.+","blogs\\.cnn\\.com/.+","techcrunch\\.com/.+","wp\\.me/.+"],"http://public-api.wordpress.com/oembed/1.0/?for=jquery-oembed-all"),new e.fn.oembed.OEmbedProvider("screenr","rich",["screenr.com"],"http://www.screenr.com/embed/$1",{templateRegex:/.*\/([^\/]+).*/,embedtag:{tag:"iframe",width:"650",height:396}}),new e.fn.oembed.OEmbedProvider("gigpans","rich",["gigapan\\.org/[-.\\w@]+/\\d+"],"http://gigapan.org/gigapans/$1/options/nosnapshots/iframe/flash.html",{templateRegex:/.*\/(\d+)\/?.*/,embedtag:{tag:"iframe",width:"100%",height:400}}),new e.fn.oembed.OEmbedProvider("scribd","rich",["scribd\\.com/.+"],"http://www.scribd.com/embeds/$1/content?start_page=1&view_mode=list",{templateRegex:/.*doc\/([^\/]+).*/,embedtag:{tag:"iframe",width:"100%",height:600}}),new e.fn.oembed.OEmbedProvider("kickstarter","rich",["kickstarter\\.com/projects/.+"],"$1/widget/card.html",{templateRegex:/([^\?]+).*/,embedtag:{tag:"iframe",width:"220",height:380}}),new e.fn.oembed.OEmbedProvider("amazon","rich",["amzn.com/B+","amazon.com.*/(B\\S+)($|\\/.*)"],"http://rcm.amazon.com/e/cm?t=_APIKEY_&o=1&p=8&l=as1&asins=$1&ref=qf_br_asin_til&fc1=000000&IS2=1&lt1=_blank&m=amazon&lc1=0000FF&bc1=000000&bg1=FFFFFF&f=ifr",{apikey:true,templateRegex:/.*\/(B[0-9A-Z]+)($|\/.*)/,embedtag:{tag:"iframe",width:"120px",height:"240px"}}),new e.fn.oembed.OEmbedProvider("slideshare","rich",["slideshare.net"],"http://www.slideshare.net/api/oembed/2",{format:"jsonp"}),new e.fn.oembed.OEmbedProvider("roomsharejp","rich",["roomshare\\.jp/(en/)?post/.*"],"http://roomshare.jp/oembed.json"),new e.fn.oembed.OEmbedProvider("lanyard","rich",["lanyrd.com/\\d+/.+"],null,{yql:{xpath:'(//div[@class="primary"])[1]',from:"htmlstring",datareturn:function(e){if(!e.result)return false;return'<div class="oembedall-lanyard">'+e.result+"</div>"}}}),new e.fn.oembed.OEmbedProvider("asciiartfarts","rich",["asciiartfarts.com/\\d+.html"],null,{yql:{xpath:"//pre/font",from:"htmlstring",datareturn:function(e){if(!e.result)return false;return'<pre style="background-color:000;">'+e.result+"</div>"}}}),new e.fn.oembed.OEmbedProvider("opengraph","rich",[".*"],null,{yql:{xpath:"//meta|//title|//link",from:"html",datareturn:function(n){if(!n["og:title"]&&n["title"]&&n["description"])n["og:title"]=n["title"];if(!n["og:title"]&&!n["title"])return false;var r=e("<p/>");if(n["og:video"]){var i=e('<embed src="'+n["og:video"]+'"/>');i.attr("type",n["og:video:type"]||"application/x-shockwave-flash").css("max-height",t.maxHeight||"auto").css("max-width",t.maxWidth||"auto");if(n["og:video:width"])i.attr("width",n["og:video:width"]);if(n["og:video:height"])i.attr("height",n["og:video:height"]);r.append(i)}else if(n["og:image"]){var s=e('<img src="'+n["og:image"]+'">');s.css("max-height",t.maxHeight||"auto").css("max-width",t.maxWidth||"auto");if(n["og:image:width"])s.attr("width",n["og:image:width"]);if(n["og:image:height"])s.attr("height",n["og:image:height"]);r.append(s)}if(n["og:title"])r.append("<b>"+n["og:title"]+"</b><br/>");if(n["og:description"])r.append(n["og:description"]+"<br/>");else if(n["description"])r.append(n["description"]+"<br/>");return r}}})]}String.prototype.md5=function(){var e=function(e,t){var n=(e&65535)+(t&65535);var r=(e>>16)+(t>>16)+(n>>16);return r<<16|n&65535};var t=function(e,t){return e<<t|e>>>32-t};var n=function(n,r,i,s,o,u){return e(t(e(e(r,n),e(s,u)),o),i)};var r=function(e,t,r,i,s,o,u){return n(t&r|~t&i,e,t,s,o,u)};var i=function(e,t,r,i,s,o,u){return n(t&i|r&~i,e,t,s,o,u)};var s=function(e,t,r,i,s,o,u){return n(t^r^i,e,t,s,o,u)};var o=function(e,t,r,i,s,o,u){return n(r^(t|~i),e,t,s,o,u)};var u=function(t){var n,u,a,f,l,c=t.length;var h=1732584193;var p=-271733879;var v=-1732584194;var m=271733878;for(l=0;l<c;l+=16){n=h;u=p;a=v;f=m;h=r(h,p,v,m,t[l+0],7,-680876936);m=r(m,h,p,v,t[l+1],12,-389564586);v=r(v,m,h,p,t[l+2],17,606105819);p=r(p,v,m,h,t[l+3],22,-1044525330);h=r(h,p,v,m,t[l+4],7,-176418897);m=r(m,h,p,v,t[l+5],12,1200080426);v=r(v,m,h,p,t[l+6],17,-1473231341);p=r(p,v,m,h,t[l+7],22,-45705983);h=r(h,p,v,m,t[l+8],7,1770035416);m=r(m,h,p,v,t[l+9],12,-1958414417);v=r(v,m,h,p,t[l+10],17,-42063);p=r(p,v,m,h,t[l+11],22,-1990404162);h=r(h,p,v,m,t[l+12],7,1804603682);m=r(m,h,p,v,t[l+13],12,-40341101);v=r(v,m,h,p,t[l+14],17,-1502002290);p=r(p,v,m,h,t[l+15],22,1236535329);h=i(h,p,v,m,t[l+1],5,-165796510);m=i(m,h,p,v,t[l+6],9,-1069501632);v=i(v,m,h,p,t[l+11],14,643717713);p=i(p,v,m,h,t[l+0],20,-373897302);h=i(h,p,v,m,t[l+5],5,-701558691);m=i(m,h,p,v,t[l+10],9,38016083);v=i(v,m,h,p,t[l+15],14,-660478335);p=i(p,v,m,h,t[l+4],20,-405537848);h=i(h,p,v,m,t[l+9],5,568446438);m=i(m,h,p,v,t[l+14],9,-1019803690);v=i(v,m,h,p,t[l+3],14,-187363961);p=i(p,v,m,h,t[l+8],20,1163531501);h=i(h,p,v,m,t[l+13],5,-1444681467);m=i(m,h,p,v,t[l+2],9,-51403784);v=i(v,m,h,p,t[l+7],14,1735328473);p=i(p,v,m,h,t[l+12],20,-1926607734);h=s(h,p,v,m,t[l+5],4,-378558);m=s(m,h,p,v,t[l+8],11,-2022574463);v=s(v,m,h,p,t[l+11],16,1839030562);p=s(p,v,m,h,t[l+14],23,-35309556);h=s(h,p,v,m,t[l+1],4,-1530992060);m=s(m,h,p,v,t[l+4],11,1272893353);v=s(v,m,h,p,t[l+7],16,-155497632);p=s(p,v,m,h,t[l+10],23,-1094730640);h=s(h,p,v,m,t[l+13],4,681279174);m=s(m,h,p,v,t[l+0],11,-358537222);v=s(v,m,h,p,t[l+3],16,-722521979);p=s(p,v,m,h,t[l+6],23,76029189);h=s(h,p,v,m,t[l+9],4,-640364487);m=s(m,h,p,v,t[l+12],11,-421815835);v=s(v,m,h,p,t[l+15],16,530742520);p=s(p,v,m,h,t[l+2],23,-995338651);h=o(h,p,v,m,t[l+0],6,-198630844);m=o(m,h,p,v,t[l+7],10,1126891415);v=o(v,m,h,p,t[l+14],15,-1416354905);p=o(p,v,m,h,t[l+5],21,-57434055);h=o(h,p,v,m,t[l+12],6,1700485571);m=o(m,h,p,v,t[l+3],10,-1894986606);v=o(v,m,h,p,t[l+10],15,-1051523);p=o(p,v,m,h,t[l+1],21,-2054922799);h=o(h,p,v,m,t[l+8],6,1873313359);m=o(m,h,p,v,t[l+15],10,-30611744);v=o(v,m,h,p,t[l+6],15,-1560198380);p=o(p,v,m,h,t[l+13],21,1309151649);h=o(h,p,v,m,t[l+4],6,-145523070);m=o(m,h,p,v,t[l+11],10,-1120210379);v=o(v,m,h,p,t[l+2],15,718787259);p=o(p,v,m,h,t[l+9],21,-343485551);h=e(h,n);p=e(p,u);v=e(v,a);m=e(m,f)}return[h,p,v,m]};var a=function(e){var t="0123456789abcdef",n="",r,i=e.length*4;for(r=0;r<i;r++){n+=t.charAt(e[r>>2]>>r%4*8+4&15)+t.charAt(e[r>>2]>>r%4*8&15)}return n};var f=function(e){var t=(e.length+8>>6)+1;var n=[],r,i=t*16,s,o=e.length;for(r=0;r<i;r++){n.push(0)}for(s=0;s<o;s++){n[s>>2]|=(e.charCodeAt(s)&255)<<s%4*8}n[s>>2]|=128<<s%4*8;n[t*16-2]=o*8;return n};return a(u(f(this)))}
/* http://wpplus.endorph.net/resources/js/min/prettify.js */ !function(){var q=null;window.PR_SHOULD_USE_CONTINUATION=!0;(function(){function S(a){function d(e){var b=e.charCodeAt(0);if(b!==92)return b;var a=e.charAt(1);return(b=r[a])?b:"0"<=a&&a<="7"?parseInt(e.substring(1),8):a==="u"||a==="x"?parseInt(e.substring(2),16):e.charCodeAt(1)}function g(e){if(e<32)return(e<16?"\\x0":"\\x")+e.toString(16);e=String.fromCharCode(e);return e==="\\"||e==="-"||e==="]"||e==="^"?"\\"+e:e}function b(e){var b=e.substring(1,e.length-1).match(/\\u[\dA-Fa-f]{4}|\\x[\dA-Fa-f]{2}|\\[0-3][0-7]{0,2}|\\[0-7]{1,2}|\\[\S\s]|[^\\]/g),e=[],a=b[0]==="^",c=["["];a&&c.push("^");for(var a=a?1:0,f=b.length;a<f;++a){var h=b[a];if(/\\[bdsw]/i.test(h))c.push(h);else{var h=d(h),l;a+2<f&&"-"===b[a+1]?(l=d(b[a+2]),a+=2):l=h;e.push([h,l]);l<65||h>122||(l<65||h>90||e.push([Math.max(65,h)|32,Math.min(l,90)|32]),l<97||h>122||e.push([Math.max(97,h)&-33,Math.min(l,122)&-33]))}}e.sort(function(e,a){return e[0]-a[0]||a[1]-e[1]});b=[];f=[];for(a=0;a<e.length;++a)h=e[a],h[0]<=f[1]+1?f[1]=Math.max(f[1],h[1]):b.push(f=h);for(a=0;a<b.length;++a)h=b[a],c.push(g(h[0])),h[1]>h[0]&&(h[1]+1>h[0]&&c.push("-"),c.push(g(h[1])));c.push("]");return c.join("")}function s(e){for(var a=e.source.match(/\[(?:[^\\\]]|\\[\S\s])*]|\\u[\dA-Fa-f]{4}|\\x[\dA-Fa-f]{2}|\\\d+|\\[^\dux]|\(\?[!:=]|[()^]|[^()[\\^]+/g),c=a.length,d=[],f=0,h=0;f<c;++f){var l=a[f];l==="("?++h:"\\"===l.charAt(0)&&(l=+l.substring(1))&&(l<=h?d[l]=-1:a[f]=g(l))}for(f=1;f<d.length;++f)-1===d[f]&&(d[f]=++x);for(h=f=0;f<c;++f)l=a[f],l==="("?(++h,d[h]||(a[f]="(?:")):"\\"===l.charAt(0)&&(l=+l.substring(1))&&l<=h&&(a[f]="\\"+d[l]);for(f=0;f<c;++f)"^"===a[f]&&"^"!==a[f+1]&&(a[f]="");if(e.ignoreCase&&m)for(f=0;f<c;++f)l=a[f],e=l.charAt(0),l.length>=2&&e==="["?a[f]=b(l):e!=="\\"&&(a[f]=l.replace(/[A-Za-z]/g,function(a){a=a.charCodeAt(0);return"["+String.fromCharCode(a&-33,a|32)+"]"}));return a.join("")}for(var x=0,m=!1,j=!1,k=0,c=a.length;k<c;++k){var i=a[k];if(i.ignoreCase)j=!0;else if(/[a-z]/i.test(i.source.replace(/\\u[\da-f]{4}|\\x[\da-f]{2}|\\[^UXux]/gi,""))){m=!0;j=!1;break}}for(var r={b:8,t:9,n:10,v:11,f:12,r:13},n=[],k=0,c=a.length;k<c;++k){i=a[k];if(i.global||i.multiline)throw Error(""+i);n.push("(?:"+s(i)+")")}return RegExp(n.join("|"),j?"gi":"g")}function T(a,d){function g(a){var c=a.nodeType;if(c==1){if(!b.test(a.className)){for(c=a.firstChild;c;c=c.nextSibling)g(c);c=a.nodeName.toLowerCase();if("br"===c||"li"===c)s[j]="\n",m[j<<1]=x++,m[j++<<1|1]=a}}else if(c==3||c==4)c=a.nodeValue,c.length&&(c=d?c.replace(/\r\n?/g,"\n"):c.replace(/[\t\n\r ]+/g," "),s[j]=c,m[j<<1]=x,x+=c.length,m[j++<<1|1]=a)}var b=/(?:^|\s)nocode(?:\s|$)/,s=[],x=0,m=[],j=0;g(a);return{a:s.join("").replace(/\n$/,""),d:m}}function H(a,d,g,b){d&&(a={a:d,e:a},g(a),b.push.apply(b,a.g))}function U(a){for(var d=void 0,g=a.firstChild;g;g=g.nextSibling)var b=g.nodeType,d=b===1?d?a:g:b===3?V.test(g.nodeValue)?a:d:d;return d===a?void 0:d}function C(a,d){function g(a){for(var j=a.e,k=[j,"pln"],c=0,i=a.a.match(s)||[],r={},n=0,e=i.length;n<e;++n){var z=i[n],w=r[z],t=void 0,f;if(typeof w==="string")f=!1;else{var h=b[z.charAt(0)];if(h)t=z.match(h[1]),w=h[0];else{for(f=0;f<x;++f)if(h=d[f],t=z.match(h[1])){w=h[0];break}t||(w="pln")}if((f=w.length>=5&&"lang-"===w.substring(0,5))&&!(t&&typeof t[1]==="string"))f=!1,w="src";f||(r[z]=w)}h=c;c+=z.length;if(f){f=t[1];var l=z.indexOf(f),B=l+f.length;t[2]&&(B=z.length-t[2].length,l=B-f.length);w=w.substring(5);H(j+h,z.substring(0,l),g,k);H(j+h+l,f,I(w,f),k);H(j+h+B,z.substring(B),g,k)}else k.push(j+h,w)}a.g=k}var b={},s;(function(){for(var g=a.concat(d),j=[],k={},c=0,i=g.length;c<i;++c){var r=g[c],n=r[3];if(n)for(var e=n.length;--e>=0;)b[n.charAt(e)]=r;r=r[1];n=""+r;k.hasOwnProperty(n)||(j.push(r),k[n]=q)}j.push(/[\S\s]/);s=S(j)})();var x=d.length;return g}function v(a){var d=[],g=[];a.tripleQuotedStrings?d.push(["str",/^(?:'''(?:[^'\\]|\\[\S\s]|''?(?=[^']))*(?:'''|$)|"""(?:[^"\\]|\\[\S\s]|""?(?=[^"]))*(?:"""|$)|'(?:[^'\\]|\\[\S\s])*(?:'|$)|"(?:[^"\\]|\\[\S\s])*(?:"|$))/,q,"'\""]):a.multiLineStrings?d.push(["str",/^(?:'(?:[^'\\]|\\[\S\s])*(?:'|$)|"(?:[^"\\]|\\[\S\s])*(?:"|$)|`(?:[^\\`]|\\[\S\s])*(?:`|$))/,q,"'\"`"]):d.push(["str",/^(?:'(?:[^\n\r'\\]|\\.)*(?:'|$)|"(?:[^\n\r"\\]|\\.)*(?:"|$))/,q,"\"'"]);a.verbatimStrings&&g.push(["str",/^@"(?:[^"]|"")*(?:"|$)/,q]);var b=a.hashComments;b&&(a.cStyleComments?(b>1?d.push(["com",/^#(?:##(?:[^#]|#(?!##))*(?:###|$)|.*)/,q,"#"]):d.push(["com",/^#(?:(?:define|e(?:l|nd)if|else|error|ifn?def|include|line|pragma|undef|warning)\b|[^\n\r]*)/,q,"#"]),g.push(["str",/^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h(?:h|pp|\+\+)?|[a-z]\w*)>/,q])):d.push(["com",/^#[^\n\r]*/,q,"#"]));a.cStyleComments&&(g.push(["com",/^\/\/[^\n\r]*/,q]),g.push(["com",/^\/\*[\S\s]*?(?:\*\/|$)/,q]));if(b=a.regexLiterals){var s=(b=b>1?"":"\n\r")?".":"[\\S\\s]";g.push(["lang-regex",RegExp("^(?:^^\\.?|[+-]|[!=]=?=?|\\#|%=?|&&?=?|\\(|\\*=?|[+\\-]=|->|\\/=?|::?|<<?=?|>>?>?=?|,|;|\\?|@|\\[|~|{|\\^\\^?=?|\\|\\|?=?|break|case|continue|delete|do|else|finally|instanceof|return|throw|try|typeof)\\s*("+("/(?=[^/*"+b+"])(?:[^/\\x5B\\x5C"+b+"]|\\x5C"+s+"|\\x5B(?:[^\\x5C\\x5D"+b+"]|\\x5C"+s+")*(?:\\x5D|$))+/")+")")])}(b=a.types)&&g.push(["typ",b]);b=(""+a.keywords).replace(/^ | $/g,"");b.length&&g.push(["kwd",RegExp("^(?:"+b.replace(/[\s,]+/g,"|")+")\\b"),q]);d.push(["pln",/^\s+/,q," \r\n\t\u00a0"]);b="^.[^\\s\\w.$@'\"`/\\\\]*";a.regexLiterals&&(b+="(?!s*/)");g.push(["lit",/^@[$_a-z][\w$@]*/i,q],["typ",/^(?:[@_]?[A-Z]+[a-z][\w$@]*|\w+_t\b)/,q],["pln",/^[$_a-z][\w$@]*/i,q],["lit",/^(?:0x[\da-f]+|(?:\d(?:_\d+)*\d*(?:\.\d*)?|\.\d\+)(?:e[+-]?\d+)?)[a-z]*/i,q,"0123456789"],["pln",/^\\[\S\s]?/,q],["pun",RegExp(b),q]);return C(d,g)}function J(a,d,g){function b(a){var c=a.nodeType;if(c==1&&!x.test(a.className))if("br"===a.nodeName)s(a),a.parentNode&&a.parentNode.removeChild(a);else for(a=a.firstChild;a;a=a.nextSibling)b(a);else if((c==3||c==4)&&g){var d=a.nodeValue,i=d.match(m);if(i)c=d.substring(0,i.index),a.nodeValue=c,(d=d.substring(i.index+i[0].length))&&a.parentNode.insertBefore(j.createTextNode(d),a.nextSibling),s(a),c||a.parentNode.removeChild(a)}}function s(a){function b(a,c){var d=c?a.cloneNode(!1):a,e=a.parentNode;if(e){var e=b(e,1),g=a.nextSibling;e.appendChild(d);for(var i=g;i;i=g)g=i.nextSibling,e.appendChild(i)}return d}for(;!a.nextSibling;)if(a=a.parentNode,!a)return;for(var a=b(a.nextSibling,0),d;(d=a.parentNode)&&d.nodeType===1;)a=d;c.push(a)}for(var x=/(?:^|\s)nocode(?:\s|$)/,m=/\r\n?|\n/,j=a.ownerDocument,k=j.createElement("li");a.firstChild;)k.appendChild(a.firstChild);for(var c=[k],i=0;i<c.length;++i)b(c[i]);d===(d|0)&&c[0].setAttribute("value",d);var r=j.createElement("ol");r.className="linenums";for(var d=Math.max(0,d-1|0)||0,i=0,n=c.length;i<n;++i)k=c[i],k.className="L"+(i+d)%10,k.firstChild||k.appendChild(j.createTextNode("\u00a0")),r.appendChild(k);a.appendChild(r)}function p(a,d){for(var g=d.length;--g>=0;){var b=d[g];F.hasOwnProperty(b)?D.console&&console.warn("cannot override language handler %s",b):F[b]=a}}function I(a,d){if(!a||!F.hasOwnProperty(a))a=/^\s*</.test(d)?"default-markup":"default-code";return F[a]}function K(a){var d=a.h;try{var g=T(a.c,a.i),b=g.a;a.a=b;a.d=g.d;a.e=0;I(d,b)(a);var s=/\bMSIE\s(\d+)/.exec(navigator.userAgent),s=s&&+s[1]<=8,d=/\n/g,x=a.a,m=x.length,g=0,j=a.d,k=j.length,b=0,c=a.g,i=c.length,r=0;c[i]=m;var n,e;for(e=n=0;e<i;)c[e]!==c[e+2]?(c[n++]=c[e++],c[n++]=c[e++]):e+=2;i=n;for(e=n=0;e<i;){for(var p=c[e],w=c[e+1],t=e+2;t+2<=i&&c[t+1]===w;)t+=2;c[n++]=p;c[n++]=w;e=t}c.length=n;var f=a.c,h;if(f)h=f.style.display,f.style.display="none";try{for(;b<k;){var l=j[b+2]||m,B=c[r+2]||m,t=Math.min(l,B),A=j[b+1],G;if(A.nodeType!==1&&(G=x.substring(g,t))){s&&(G=G.replace(d,"\r"));A.nodeValue=G;var L=A.ownerDocument,o=L.createElement("span");o.className=c[r+1];var v=A.parentNode;v.replaceChild(o,A);o.appendChild(A);g<l&&(j[b+1]=A=L.createTextNode(x.substring(t,l)),v.insertBefore(A,o.nextSibling))}g=t;g>=l&&(b+=2);g>=B&&(r+=2)}}finally{if(f)f.style.display=h}}catch(u){D.console&&console.log(u&&u.stack||u)}}var D=window,y=["break,continue,do,else,for,if,return,while"],E=[[y,"auto,case,char,const,default,double,enum,extern,float,goto,inline,int,long,register,short,signed,sizeof,static,struct,switch,typedef,union,unsigned,void,volatile"],"catch,class,delete,false,import,new,operator,private,protected,public,this,throw,true,try,typeof"],M=[E,"alignof,align_union,asm,axiom,bool,concept,concept_map,const_cast,constexpr,decltype,delegate,dynamic_cast,explicit,export,friend,generic,late_check,mutable,namespace,nullptr,property,reinterpret_cast,static_assert,static_cast,template,typeid,typename,using,virtual,where"],N=[E,"abstract,assert,boolean,byte,extends,final,finally,implements,import,instanceof,interface,null,native,package,strictfp,super,synchronized,throws,transient"],O=[N,"as,base,by,checked,decimal,delegate,descending,dynamic,event,fixed,foreach,from,group,implicit,in,internal,into,is,let,lock,object,out,override,orderby,params,partial,readonly,ref,sbyte,sealed,stackalloc,string,select,uint,ulong,unchecked,unsafe,ushort,var,virtual,where"],E=[E,"debugger,eval,export,function,get,null,set,undefined,var,with,Infinity,NaN"],P=[y,"and,as,assert,class,def,del,elif,except,exec,finally,from,global,import,in,is,lambda,nonlocal,not,or,pass,print,raise,try,with,yield,False,True,None"],Q=[y,"alias,and,begin,case,class,def,defined,elsif,end,ensure,false,in,module,next,nil,not,or,redo,rescue,retry,self,super,then,true,undef,unless,until,when,yield,BEGIN,END"],W=[y,"as,assert,const,copy,drop,enum,extern,fail,false,fn,impl,let,log,loop,match,mod,move,mut,priv,pub,pure,ref,self,static,struct,true,trait,type,unsafe,use"],y=[y,"case,done,elif,esac,eval,fi,function,in,local,set,then,until"],R=/^(DIR|FILE|vector|(de|priority_)?queue|list|stack|(const_)?iterator|(multi)?(set|map)|bitset|u?(int|float)\d*)\b/,V=/\S/,X=v({keywords:[M,O,E,"caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END",P,Q,y],hashComments:!0,cStyleComments:!0,multiLineStrings:!0,regexLiterals:!0}),F={};p(X,["default-code"]);p(C([],[["pln",/^[^<?]+/],["dec",/^<!\w[^>]*(?:>|$)/],["com",/^<\!--[\S\s]*?(?:--\>|$)/],["lang-",/^<\?([\S\s]+?)(?:\?>|$)/],["lang-",/^<%([\S\s]+?)(?:%>|$)/],["pun",/^(?:<[%?]|[%?]>)/],["lang-",/^<xmp\b[^>]*>([\S\s]+?)<\/xmp\b[^>]*>/i],["lang-js",/^<script\b[^>]*>([\S\s]*?)(<\/script\b[^>]*>)/i],["lang-css",/^<style\b[^>]*>([\S\s]*?)(<\/style\b[^>]*>)/i],["lang-in.tag",/^(<\/?[a-z][^<>]*>)/i]]),["default-markup","htm","html","mxml","xhtml","xml","xsl"]);p(C([["pln",/^\s+/,q," \t\r\n"],["atv",/^(?:"[^"]*"?|'[^']*'?)/,q,"\"'"]],[["tag",/^^<\/?[a-z](?:[\w-.:]*\w)?|\/?>$/i],["atn",/^(?!style[\s=]|on)[a-z](?:[\w:-]*\w)?/i],["lang-uq.val",/^=\s*([^\s"'>]*(?:[^\s"'/>]|\/(?=\s)))/],["pun",/^[/<->]+/],["lang-js",/^on\w+\s*=\s*"([^"]+)"/i],["lang-js",/^on\w+\s*=\s*'([^']+)'/i],["lang-js",/^on\w+\s*=\s*([^\s"'>]+)/i],["lang-css",/^style\s*=\s*"([^"]+)"/i],["lang-css",/^style\s*=\s*'([^']+)'/i],["lang-css",/^style\s*=\s*([^\s"'>]+)/i]]),["in.tag"]);p(C([],[["atv",/^[\S\s]+/]]),["uq.val"]);p(v({keywords:M,hashComments:!0,cStyleComments:!0,types:R}),["c","cc","cpp","cxx","cyc","m"]);p(v({keywords:"null,true,false"}),["json"]);p(v({keywords:O,hashComments:!0,cStyleComments:!0,verbatimStrings:!0,types:R}),["cs"]);p(v({keywords:N,cStyleComments:!0}),["java"]);p(v({keywords:y,hashComments:!0,multiLineStrings:!0}),["bash","bsh","csh","sh"]);p(v({keywords:P,hashComments:!0,multiLineStrings:!0,tripleQuotedStrings:!0}),["cv","py","python"]);p(v({keywords:"caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END",hashComments:!0,multiLineStrings:!0,regexLiterals:2}),["perl","pl","pm"]);p(v({keywords:Q,hashComments:!0,multiLineStrings:!0,regexLiterals:!0}),["rb","ruby"]);p(v({keywords:E,cStyleComments:!0,regexLiterals:!0}),["javascript","js"]);p(v({keywords:"all,and,by,catch,class,else,extends,false,finally,for,if,in,is,isnt,loop,new,no,not,null,of,off,on,or,return,super,then,throw,true,try,unless,until,when,while,yes",hashComments:3,cStyleComments:!0,multilineStrings:!0,tripleQuotedStrings:!0,regexLiterals:!0}),["coffee"]);p(v({keywords:W,cStyleComments:!0,multilineStrings:!0}),["rc","rs","rust"]);p(C([],[["str",/^[\S\s]+/]]),["regex"]);var Y=D.PR={createSimpleLexer:C,registerLangHandler:p,sourceDecorator:v,PR_ATTRIB_NAME:"atn",PR_ATTRIB_VALUE:"atv",PR_COMMENT:"com",PR_DECLARATION:"dec",PR_KEYWORD:"kwd",PR_LITERAL:"lit",PR_NOCODE:"nocode",PR_PLAIN:"pln",PR_PUNCTUATION:"pun",PR_SOURCE:"src",PR_STRING:"str",PR_TAG:"tag",PR_TYPE:"typ",prettyPrintOne:D.prettyPrintOne=function(a,d,g){var b=document.createElement("div");b.innerHTML="<pre>"+a+"</pre>";b=b.firstChild;g&&J(b,g,!0);K({h:d,j:g,c:b,i:1});return b.innerHTML},prettyPrint:D.prettyPrint=function(a,d){function g(){for(var b=D.PR_SHOULD_USE_CONTINUATION?c.now()+250:Infinity;i<p.length&&c.now()<b;i++){for(var d=p[i],j=h,k=d;k=k.previousSibling;){var m=k.nodeType,o=(m===7||m===8)&&k.nodeValue;if(o?!/^\??prettify\b/.test(o):m!==3||/\S/.test(k.nodeValue))break;if(o){j={};o.replace(/\b(\w+)=([\w%+\-.:]+)/g,function(a,b,c){j[b]=c});break}}k=d.className;if((j!==h||e.test(k))&&!v.test(k)){m=!1;for(o=d.parentNode;o;o=o.parentNode)if(f.test(o.tagName)&&o.className&&e.test(o.className)){m=!0;break}if(!m){d.className+=" prettyprinted";m=j.lang;if(!m){var m=k.match(n),y;if(!m&&(y=U(d))&&t.test(y.tagName))m=y.className.match(n);m&&(m=m[1])}if(w.test(d.tagName))o=1;else var o=d.currentStyle,u=s.defaultView,o=(o=o?o.whiteSpace:u&&u.getComputedStyle?u.getComputedStyle(d,q).getPropertyValue("white-space"):0)&&"pre"===o.substring(0,3);u=j.linenums;if(!(u=u==="true"||+u))u=(u=k.match(/\blinenums\b(?::(\d+))?/))?u[1]&&u[1].length?+u[1]:!0:!1;u&&J(d,u,o);r={h:m,c:d,j:u,i:o};K(r)}}}i<p.length?setTimeout(g,250):"function"===typeof a&&a()}for(var b=d||document.body,s=b.ownerDocument||document,b=[b.getElementsByTagName("pre"),b.getElementsByTagName("code"),b.getElementsByTagName("xmp")],p=[],m=0;m<b.length;++m)for(var j=0,k=b[m].length;j<k;++j)p.push(b[m][j]);var b=q,c=Date;c.now||(c={now:function(){return+new Date}});var i=0,r,n=/\blang(?:uage)?-([\w.]+)(?!\S)/,e=/\bprettyprint\b/,v=/\bprettyprinted\b/,w=/pre|xmp/i,t=/^code$/i,f=/^(?:pre|code|xmp)$/i,h={};g()}};typeof define==="function"&&define.amd&&define("google-code-prettify",[],function(){return Y})})();}()
/* http://wpplus.endorph.net/resources/js/min/tea.js */ var Tea={};Tea.encrypt=function(e,t){if(e.length==0)return"";var n=Tea.strToLongs(Utf8.encode(e));if(n.length<=1)n[1]=0;var r=Tea.strToLongs(Utf8.encode(t).slice(0,16));var i=n.length;var s=n[i-1],o=n[0],u=2654435769;var a,f,l=Math.floor(6+52/i),c=0;while(l-->0){c+=u;f=c>>>2&3;for(var h=0;h<i;h++){o=n[(h+1)%i];a=(s>>>5^o<<2)+(o>>>3^s<<4)^(c^o)+(r[h&3^f]^s);s=n[h]+=a}}var p=Tea.longsToStr(n);return Base64.encode(p)};Tea.decrypt=function(e,t){if(e.length==0)return"";var n=Tea.strToLongs(Base64.decode(e));var r=Tea.strToLongs(Utf8.encode(t).slice(0,16));var i=n.length;var s=n[i-1],o=n[0],u=2654435769;var a,f,l=Math.floor(6+52/i),c=l*u;while(c!=0){f=c>>>2&3;for(var h=i-1;h>=0;h--){s=n[h>0?h-1:i-1];a=(s>>>5^o<<2)+(o>>>3^s<<4)^(c^o)+(r[h&3^f]^s);o=n[h]-=a}c-=u}var p=Tea.longsToStr(n);p=p.replace(/\0+$/,"");return Utf8.decode(p)};Tea.strToLongs=function(e){var t=new Array(Math.ceil(e.length/4));for(var n=0;n<t.length;n++){t[n]=e.charCodeAt(n*4)+(e.charCodeAt(n*4+1)<<8)+(e.charCodeAt(n*4+2)<<16)+(e.charCodeAt(n*4+3)<<24)}return t};Tea.longsToStr=function(e){var t=new Array(e.length);for(var n=0;n<e.length;n++){t[n]=String.fromCharCode(e[n]&255,e[n]>>>8&255,e[n]>>>16&255,e[n]>>>24&255)}return t.join("")};var Base64={};Base64.code="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";Base64.encode=function(e,t){t=typeof t=="undefined"?false:t;var n,r,i,s,o,u,a,f,l=[],c="",h,p,d;var v=Base64.code;p=t?Utf8.encode(e):e;h=p.length%3;if(h>0){while(h++<3){c+="=";p+="\0"}}for(h=0;h<p.length;h+=3){n=p.charCodeAt(h);r=p.charCodeAt(h+1);i=p.charCodeAt(h+2);s=n<<16|r<<8|i;o=s>>18&63;u=s>>12&63;a=s>>6&63;f=s&63;l[h/3]=v.charAt(o)+v.charAt(u)+v.charAt(a)+v.charAt(f)}d=l.join("");d=d.slice(0,d.length-c.length)+c;return d};Base64.decode=function(e,t){t=typeof t=="undefined"?false:t;var n,r,i,s,o,u,a,f,l=[],c,h;var p=Base64.code;h=t?Utf8.decode(e):e;for(var d=0;d<h.length;d+=4){s=p.indexOf(h.charAt(d));o=p.indexOf(h.charAt(d+1));u=p.indexOf(h.charAt(d+2));a=p.indexOf(h.charAt(d+3));f=s<<18|o<<12|u<<6|a;n=f>>>16&255;r=f>>>8&255;i=f&255;l[d/4]=String.fromCharCode(n,r,i);if(a==64)l[d/4]=String.fromCharCode(n,r);if(u==64)l[d/4]=String.fromCharCode(n)}c=l.join("");return t?Utf8.decode(c):c};var Utf8={};Utf8.encode=function(e){var t=e.replace(/[\u0080-\u07ff]/g,function(e){var t=e.charCodeAt(0);return String.fromCharCode(192|t>>6,128|t&63)});t=t.replace(/[\u0800-\uffff]/g,function(e){var t=e.charCodeAt(0);return String.fromCharCode(224|t>>12,128|t>>6&63,128|t&63)});return t};Utf8.decode=function(e){var t=e.replace(/[\u00e0-\u00ef][\u0080-\u00bf][\u0080-\u00bf]/g,function(e){var t=(e.charCodeAt(0)&15)<<12|(e.charCodeAt(1)&63)<<6|e.charCodeAt(2)&63;return String.fromCharCode(t)});t=t.replace(/[\u00c0-\u00df][\u0080-\u00bf]/g,function(e){var t=(e.charCodeAt(0)&31)<<6|e.charCodeAt(1)&63;return String.fromCharCode(t)});return t}
/* http://wpplus.endorph.net/resources/js/min/lang-css.js */ PR.registerLangHandler(PR.createSimpleLexer([["pln",/^[\t\n\f\r ]+/,null," \t\r\n\u000c"]],[["str",/^"(?:[^\n\f\r"\\]|\\(?:\r\n?|\n|\f)|\\[\S\s])*"/,null],["str",/^'(?:[^\n\f\r'\\]|\\(?:\r\n?|\n|\f)|\\[\S\s])*'/,null],["lang-css-str",/^url\(([^"')]+)\)/i],["kwd",/^(?:url|rgb|!important|@import|@page|@media|@charset|inherit)(?=[^\w-]|$)/i,null],["lang-css-kw",/^(-?(?:[_a-z]|\\[\da-f]+ ?)(?:[\w-]|\\\\[\da-f]+ ?)*)\s*:/i],["com",/^\/\*[^*]*\*+(?:[^*/][^*]*\*+)*\//],["com",/^(?:<\!--|--\>)/],["lit",/^(?:\d+|\d*\.\d+)(?:%|[a-z]+)?/i],["lit",/^#[\da-f]{3,6}\b/i],["pln",/^-?(?:[_a-z]|\\[\da-f]+ ?)(?:[\w-]|\\\\[\da-f]+ ?)*/i],["pun",/^[^\s\w"']+/]]),["css"]);PR.registerLangHandler(PR.createSimpleLexer([],[["kwd",/^-?(?:[_a-z]|\\[\da-f]+ ?)(?:[\w-]|\\\\[\da-f]+ ?)*/i]]),["css-kw"]);PR.registerLangHandler(PR.createSimpleLexer([],[["str",/^[^"')]+/]]),["css-str"]);
/* http://wpplus.endorph.net/resources/js/min/lang-sql.js */ PR.registerLangHandler(PR.createSimpleLexer([["pln",/^[\t\n\r \xa0]+/,null,"\t\n\r \u00a0"],["str",/^(?:"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')/,null,"\"'"]],[["com",/^(?:--[^\n\r]*|\/\*[\S\s]*?(?:\*\/|$))/],["kwd",/^(?:add|all|alter|and|any|apply|as|asc|authorization|backup|begin|between|break|browse|bulk|by|cascade|case|check|checkpoint|close|clustered|coalesce|collate|column|commit|compute|connect|constraint|contains|containstable|continue|convert|create|cross|current|current_date|current_time|current_timestamp|current_user|cursor|database|dbcc|deallocate|declare|default|delete|deny|desc|disk|distinct|distributed|double|drop|dummy|dump|else|end|errlvl|escape|except|exec|execute|exists|exit|fetch|file|fillfactor|following|for|foreign|freetext|freetexttable|from|full|function|goto|grant|group|having|holdlock|identity|identitycol|identity_insert|if|in|index|inner|insert|intersect|into|is|join|key|kill|left|like|lineno|load|match|matched|merge|natural|national|nocheck|nonclustered|nocycle|not|null|nullif|of|off|offsets|on|open|opendatasource|openquery|openrowset|openxml|option|or|order|outer|over|partition|percent|pivot|plan|preceding|precision|primary|print|proc|procedure|public|raiserror|read|readtext|reconfigure|references|replication|restore|restrict|return|revoke|right|rollback|rowcount|rowguidcol|rows?|rule|save|schema|select|session_user|set|setuser|shutdown|some|start|statistics|system_user|table|textsize|then|to|top|tran|transaction|trigger|truncate|tsequal|unbounded|union|unique|unpivot|update|updatetext|use|user|using|values|varying|view|waitfor|when|where|while|with|within|writetext|xml)(?=[^\w-]|$)/i,null],["lit",/^[+-]?(?:0x[\da-f]+|(?:\.\d+|\d+(?:\.\d*)?)(?:e[+-]?\d+)?)/i],["pln",/^[_a-z][\w-]*/i],["pun",/^[^\w\t\n\r "'\xa0][^\w\t\n\r "'+\xa0-]*/]]),["sql"]);

// End Compiled Userscript headers

var WhirlpoolPlus = {
	
	//Script Version
	version : '4.5.4',
	
	//Prerelease version- 0 for a standard release
	prerelease : 0,
	
	//Meaningless value to force the script to upgrade
	storageVersion : 12,
	
	//Script changelog
	_changelog : {
		'4.5.4' : '<ul><li>Yet More bugfixes</li></ul>',
		'4.5.3' : '<ul><li>More bugfixes</li><li>Script resources included inline</li></ul>',
		'4.5.2' : '<ul><li>Fixed jQuery issue</li></ul>',
		'4.5.1' : '<ul><li>Fixed issue with image embedding</li></ul>',
		'4.5.0' : '<ul><li>Internal changes to improve maintainability</li><li>Support for multiple avatars</li><li>Workaround for data-reversion bug in Firefox 17</li><li>Improved Whirlcode editor</li><li>Improved Quick Edit</li><li>Added update dialog</li></ul>',
		'4.4.18' : '<ul><li>Updated Theme Locations</li></ul>',
		'4.4.17' : '<ul><li>Fixed oEmbed max width</li><li>Fixed image embed max width</li></ul>',
		'4.4.16' : '<ul><li>oEmbed max width</li><li>Firefox 3.6 bugfixes</li><li>Auto-resizing quick reply box</li></ul>',
		'4.4.15' : '<ul><li>Added oEmbed support (videos, twitter, and many others)</li></ul>',
		'4.4.14' : '<ul><li>Added a way to temporarily disable the thread tracker</li><li>Added emoticon buttons to quick reply</li><li>Fixed avatars in whims</li></ul>',
		'4.4.13' : '<ul><li>Fixed the hide forums feature</li><li>Auto-suggests changes to WLR colours based on the loaded theme</li><li>Spelling fixes</li></ul>',
		'4.4.12' : '<ul><li>Added Teal theme</li><li>Fixed Emoticons</li></ul>',
		'4.4.11' : '<ul><li>Fixed spinner menu</li><li>Fixed themes</li></ul>',
		'4.4.10' : '<ul><li>Fixed penalty box highlight</li><li>WLR fixes</li><li>Fixes for the changed site design</li></ul>',
	},
	
	//Feature spotlight for this version (can be left blank)
	_spotlight : '', //'<p>Did you know that Whirlpool Plus includes a sidebar chatbox? If you\'re interested, it can be enabled in WP+ Settings &gt; Forum Display &gt; Sidebar Chatbox.</p>',
	
	//Current page url
	url : document.location.href,
	
	//Current page title
	title : document.title,
	
	//These are needed to work around a FF3.6 jQuery bug
	window : window,
	document : document,
	
	getVersionText : function(){
		var versionString = this.version;
		if(this.prerelease > 0){
			versionString += 'pre' + this.prerelease ;
		}
		return versionString;
	},
	
	css : function(styles){
		GM_addStyle(styles);
	},
	
	//Get a data-url form of a resource. Used for images
	image : function(resource){
		return GM_getResourceURL(resource);
	},

	//Return the text of a resource
	resource : function(resource){
		return GM_getResourceText(resource);
	},
	
	//Cross-domain ajax request
	ajax : function (config) {
		return GM_xmlhttpRequest(config);
	},
	
	//display a notification
	_notified : false,
	notify : function (message, important, duration) {
		var color = 'white', 
			background = 'black', 
			opacity = '0.9';
		
		if (important === true) {
			color = 'black';
			background = 'orange';
		}
		
		if (!this._notified) {
			$('head').append('<style type="text/css">.wpplus_notify{ width: 85%; height: 20px; background-color: ' + background + '; opacity: ' + opacity + '; position: fixed; top: 25px; left: 7.5%; z-index: 9999; -moz-border-radius: 10px; padding-top: 7px; text-align: center; color: ' + color + '} .wpplus_notify:hover{ cursor: pointer; }</style>');
			this._notified = true;
		}
		$('body').prepend('<div class="wpplus_notify">' + message + ' (close)</div>');
		$('.wpplus_notify').click(function (e) {
			$(this).fadeOut();
		});
		setTimeout(function () {
			$('.wpplus_notify').fadeOut();
		},
		duration);
	},
	
	//Data management
	get : function(key){
		var value = unsafeWindow.localStorage.getItem('wpp_' + key);
		
		if(value == null){
			return false;
		}else{
			return JSON.parse(value);
		}
	},
	set : function(key,value){
		unsafeWindow.localStorage.setItem('wpp_' + key,JSON.stringify(value));
	},
	remove : function(key){
		unsafeWindow.localStorage.removeItem('wpp_' + key);
	},
	exists : function(key){
		return unsafeWindow.localStorage.getItem('wpp_' + key) != null;
	},
	
	pageType : {
		'alert' : '/forum/alert/', //An alert page
		'posts' : 'forum-replies.cfm', //The page where you view posts
		'threads' : '/forum/', //The page where you view threads
		'profile' : '/user/', //User account page
		'whimArchive' : 'action=archive', //Whim archive page
		'whimRead' : 'action=read', //Whim archive page
		'deletedThread' : 'a=priv-deleted', //deleted thread alert
		'auraVotes' : 'action=yourvotes', //List of all aura votes
		'newThread' : 'action=newthread', //Creating a new thread
		'reply' : 'action=reply', //Posting a reply
		'edit' : 'action=edit', //Editing a post
		'search' : 'action=threads_search', //Thread search
		'forums' : 'forums.whirlpool', //forums.whirlpool.net.au
		'wiki' : '.net.au/wiki/', //Wiki
		'watchedThreads' : 'action=watched', // Watched threads page
		'watchedThreadAlert' : '?a=subs-', // Watched threads page
	},
	
	matchUrl : function(url){
		return this.url.indexOf(url) >= 0;
	},
	
	init : function(){	
		//Set up pageType
		for(i in this.pageType){
			this.pageType[i] = this.matchUrl(this.pageType[i]);
		}
		
		//Upgrade the script if necessary
		if(!this.exists('storageVersion') || this.storageVersion > this.get('storageVersion')){
			this._upgrade();
		}
	},
	
	compatibilityMode : function(){
		//If this is Firefox 3.6 or Chrome, jQuery cannot bind events to window and document
		// Need to use unsafeWindow and unsafeWindow.document
		this.window = unsafeWindow;
		this.document = this.window.document;
	},
	
	_defaults : {
		display_theme : 'default',
		display_hideDeletedThreads : false,
		display_hideMovedThreads : false,
		display_hideDeletedPosts : false,
		display_noTextShadow : false,
		display_floatSidebar : false,
		display_syntaxHighlight : true,
		display_emoticons_enabled : true,
		display_emoticons_blue : true,
		display_hideTheseForums : '',
		display_hideClosedThreadsOnProfile : false,
		display_whimAlert : true,
		display_breadcrumbFont : 'default font',
		display_sidebarFont : 'default font',
		display_showFooter : true,
		display_widescreen : false,
		display_customCSS : '',
		display_penaltyBox : false,
		display_userPageInfoToggle : false,
		autoUpdate_enabled : true,
		autoUpdate_interval : 30,
		autoUpdate_lastChecked : 0,
		avatar_static : true,
		avatar_animated : false,
		stats_postsPerDay : true,
		chatbox : true,
		embed_oembed : true,
		embed_images: true,
		embed_oembedTypes : 'youtu|vimeo|twitter',
		recentActivityOverlay : false,
		recentActivityOverlay_days : '7',
		recentActivityOverlay_data : '',
		recentActivityOverlay_html : '',
		recentActivityOverlay_updateInterval : 15,
		recentActivityOverlay_lastUpdated : 0,
		whirlpoolAPIKey : '',
		hiddenUsers_enabled : false,
		hiddenUsers : [],
		hiddenUsers_remove : false,
		removeLinkToLastPage : false,
		links_archive : true,
		links_longThread : true,
		links_originalPoster : true,
		links_mod : true,
		links_rep : true,
		links_unanswered : true,
		resetAuraVote : false,
		autoSubscribeToNewThread : false,
		spinnerMenu : 'none',
		spinnerMenu_settingsLocation : 'top',
		whimArchiveSort : true,
		defaultRecentActivityDays : '7',
		quickEdit : true,
		wlr_display_flipStyles : false,
		wlr_display_unreadPostColour : '#CFCBBC',
		wlr_tempDisable : true,
		wlr_enabled : true,
		wlr_noTrackSticky : false,
		wlr_display_onlyEndSquare : false,
		wlr_display_unreadThreadColour : '#95B0CB',
		wlr_display_readThreadColour: '#CBC095',
		compose_quickReply : true,
		compose_quickReply_backup : '',
		compose_quickReply_preview : true,
		compose_quickReply_goToEndAfterPost : false,
		compose_quickReply_emoticons : false,
		compose_autoExpand : true,
		compose_enhancedEditor : true,
		userNotes_enabled : false,
		userNotes : {},
		watchedThreadsAlert : 'default',
		sync_server : '',
		sync_key : '',
		sync_user : '',
		sync_scriptId : Math.floor(Math.random()*100000001),
		sync_encryptionKey : '',
		sync_times : {},
		sync_mostUpToDate : 0,
		sync_lastSync : 0,
		sync_enabled : false,
	},
	
	//These values are used for the minimal install
	_notForumValues : [
		'whirlpoolAPIKey',
		'display_theme',
		'display_noTextShadow',
		'display_floatSidebar',
		'display_whimAlert',
		'display_breadcrumbFont',
		'display_sidebarFont',
		'display_showFooter',
		'display_widescreen',
		'display_customCSS',
		'avatar_static',
		'avatar_animated',
		'chatbox',
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
	],
	
	//Set any undefined values to the default value
	_setDefaults : function(){
	
		if(this.pageType.forums){
			for(var key in this._defaults){
				if(!this.exists(key)){
					this.set(key,this._defaults[key]);
				}
			}
		}else{
			for(var key in this._notForumValues){
				if(!this.exists(this._notForumValues[key])){
					this.set(this._notForumValues[key],this._defaults[this._notForumValues[key]]);
				}
			}
		}
	

		
	},
	
	_upgrade : function(){
	
		//Set any undefined values to their default values
		this._setDefaults();
	
		switch(this.get('storageVersion')){
			case null:
			case false:
				//New install, or upgrade version 4.4.x to 4.5.0
				
				//Functions to access old settings
				
				function getOldSetting(key, defaultVal){
					if(typeof $.browser['mozilla'] == 'undefined'){
						var value = unsafeWindow.localStorage.getItem(key);
						if(value == null){
							value = defaultVal;
						}
						return value;
					}else{		
						return GM_getValue(key, defaultVal);
					}
				}
				
				function getListOfOldSettings(){
					if(typeof $.browser['mozilla'] == 'undefined'){
						var settingsArray = [];
						
						for(i = 0; i < unsafeWindow.localStorage.length; i++){
							settingsArray.push(unsafeWindow.localStorage.key(i));
						}
						
						return settingsArray;
						
					}else{		
						return GM_listValues();
					} 
				}
				
				if(getOldSetting('installedScriptVersion',false) !== false){
					//Upgrade
				
					// Value: customWPTheme
					if(getOldSetting('customWPTheme',false) !== false){
						var oldTheme = getOldSetting('customWPTheme').toLowerCase();
						if(oldTheme.indexOf('wpblue') >= 0){
							this.set('display_theme','blue');
						}else if(oldTheme.indexOf('wpclassic') >= 0){
							this.set('display_theme','classic');
						}else if(oldTheme.indexOf('teal') >= 0){
							this.set('display_theme','teal');
						}else if(oldTheme.indexOf('black') >= 0){
							this.set('display_theme','black');
						}else if(oldTheme.indexOf('green') >= 0){
							this.set('display_theme','green');
						}else if(oldTheme.indexOf('wood') >= 0){
							this.set('display_theme','wood');
						}else if(oldTheme.indexOf('purple') >= 0){
							this.set('display_theme','purple');
						}else{
							this.set('display_theme','default');
						}
					}
					
					// Value: hiddenUsersArr
					if(getOldSetting('hiddenUsersArr',false) !== false){
						var theUsers = getOldSetting('hiddenUsersArr');
						
						if(theUsers.length == 0){
							this.set('hiddenUsers',[]);
						}else{
							var hiddenUsersString = theUsers.split('#');
							var hiddenUsersNum = [];
							
							for(i = 0; i < hiddenUsersString.length; i++){
								hiddenUsersNum.push(parseInt(hiddenUsersString[i]))
							}
							
							this.set('hiddenUsers',hiddenUsersNum);
						}
					}
					
					// Value: userNotesArr
					if(getOldSetting('userNotesArr',false) !== false){
						
						if(typeof $.browser['mozilla'] != 'undefined'){
							var oldUserNotes = eval('(' + getOldSetting('userNotesArr') + ')');
							
							var newUserNotes = {};
							var newKey;
							
							for(var key in oldUserNotes){
								//make sure the key is numerical
								newKey = parseInt(key);
								
								if(typeof newUserNotes[newKey] == 'undefined'){
									newUserNotes[newKey] = '';
								}
								
								newUserNotes[newKey] += oldUserNotes[key];
								
							}
							
							this.set('userNotes',newUserNotes);
						}
					}
					
					// Value: sync_times
					if(getOldSetting('sync_times',false) !== false){
						this.set('sync_times',JSON.parse(getOldSetting('sync_times')));
					}
					
					// sync_ values
					var allData = getListOfOldSettings();
					
					for(var i = 0; i < allData.length; i++){
						if(allData[i].indexOf('sync_') == 0){
							WhirlpoolPlus.set(allData[i],JSON.parse(getOldSetting(allData[i])));
						}
					}
					
					// URI encoded values
					// oldName : newName
					var encodedImports = {
						syncEncKey : 'sync_encryptionKey',
						syncUser : 'sync_user',
						syncKey : 'sync_key',
						sync_scriptId : 'sync_scriptId',
						recentActivityOverlayDays : 'recentActivityOverlay_days',
						whirlpoolAPIKey : 'whirlpoolAPIKey',
						dynamicMenuSystem : 'spinnerMenu',
						dynamicMenuSystem_settingsLink : 'spinnerMenu_settingsLocation',
						recentActivityDays : 'defaultRecentActivityDays',
						textareraSave : 'compose_quickReply_backup',
						watchedThreadsAlert : 'watchedThreadsAlert',
						whirlpoolSidemenuFont : 'display_sidebarFont',
						whirlpoolBreadcrumbFont : 'display_breadcrumbFont',
						sync_mostUpToDate : 'sync_mostUpToDate',
						sync_lastSync : 'sync_lastSync',
						hideForumIDs : 'display_hideTheseForums',
						oembed_types : 'embed_oembedTypes',
						CSStextBox : 'display_customCSS',
						trackerPostBackgroundColour : 'wlr_display_unreadPostColour',
						newPostBackgroundColour : 'wlr_display_unreadThreadColour',
						noNewPostBackgroundColour : 'wlr_display_readThreadColour',
						syncServer : 'sync_server',
					};
					
					for(key in encodedImports){
						if(getOldSetting(key,false) !== false){
							this.set(encodedImports[key],decodeURIComponent(getOldSetting(key)));
						}
					}
					
					// Import all the old 'true'/'false' values into actual booleans
					// oldName : newName
					var booleanImports = {
						hideDRThreads : 'display_hideDeletedThreads',
						hideMVThreads : 'display_hideMovedThreads',
						hideDelPosts : 'display_hideDeletedPosts',
						hide_closed_profile : 'display_hideClosedThreadsOnProfile',
						noTextShadow : 'display_noTextShadow',
						floatSidebar : 'display_floatSidebar',
						syntaxHighlight : 'display_syntaxHighlight',
						emoticons : 'display_emoticons_enabled',
						emoticonsBlue : 'display_emoticons_blue',
						whimAlertNotice : 'display_whimAlert',
						smartUpdater : 'autoUpdate_enabled',
						staticAvatars : 'avatar_static',
						animatedAvatars : 'avatar_animated',
						postsPerDay : 'stats_postsPerDay',
						chatbox : 'chatbox',
						oembed : 'embed_oembed',
						inlineImages : 'embed_images',
						recentActivityOverlay : 'recentActivityOverlay',
						ignoreUser : 'hiddenUsers_enabled',
						removeIgnoredUsers : 'hiddenUsers_remove',
						noGluteusMaximus : 'removeLinkToLastPage',
						threadArchiveView : 'links_archive',
						longThreadView : 'links_longThread',
						opOnlyView : 'links_originalPoster',
						moderatorPostView : 'links_mod',
						representativePostView : 'links_rep',
						reset_aura_vote : 'resetAuraVote',
						showWhirlpoolFooterLinks : 'display_showFooter',
						enableWideWhirlpool : 'display_widescreen',
						penaltyBoxBackground : 'display_penaltyBox',
						autoSubscribe : 'autoSubscribeToNewThread',
						unanswered_threads : 'links_unanswered',
						whim_archive_sort : 'whimArchiveSort',
						editInPlace : 'quickEdit',
						styleFlip : 'wlr_display_flipStyles',
						tempDisableTracker : 'wlr_tempDisable',
						lastReadTracker : 'wlr_enabled',
						dontTrackStickyThreads : 'wlr_noTrackSticky',
						onlyEndSquare : 'wlr_display_onlyEndSquare',
						quickReplybox : 'compose_quickReply',
						autoPreview : 'compose_quickReply_preview',
						lastPost : 'compose_quickReply_goToEndAfterPost',
						quickReplyboxSmilies : 'compose_quickReply_emoticons',
						whirlcodeinWikiWhimNewThread : 'compose_enhancedEditor',
						userNotes : 'userNotes_enabled',
						userpageInfoToggle : 'display_userPageInfoToggle',
						syncActivated : 'sync_enabled',
					};
					
					for(key in booleanImports){
						if(getOldSetting(key,false) !== false){
							this.set(booleanImports[key],getOldSetting(key) == 'true' ? true : false);
						}
					}
				}
			
			
			case 4:
				//Upgrade from storageVersion:4 requires the clearing of values from localstorage
				//If we aren't on the main forums page
				if(!this.pageType.forums){
					unsafeWindow.localStorage.clear();
					
					//Set the default values
					this._setDefaults();
				}
			
			default:
			
				//Show the update dialog (But only on a forums page)
				if(this.pageType.forums){
					this._upgradeDialog();
				}
				
				//Set version information
				this.set('storageVersion',this.storageVersion);
				this.set('scriptVersion',this.version);
				this.set('prerelease',this.prerelease);
			
			break;
			
		}
	
	},
	
	_upgradeDialog : function(){
		var dialogHtml = '<h1>WP+</h1>' +
			'<p>Version ' + this.getVersionText() + '</p>';
		
		if(this.prerelease > 0){
			dialogHtml += '<div><strong>This is a prerelease version. Please report any bugs to <a href="http://forums.whirlpool.net.au/user/272563">tbwd</a>.</strong></div>';
		}
		
		//Check for new installs
		if(this.get('scriptVersion') === false){
			dialogHtml += '<br /><div>It looks like this is the first time you have installed the script! You can access script settings and information from the "WP+ Settings" link in the sidebar.</div>';
		}
		
		dialogHtml += '<br /><div style="text-align:left"><strong>New in this version: </strong>' + this._changelog[this.version] + '</div>';
		
		dialogHtml += '<br /><div>For an extended changelog, see WP+ Settings &gt; Info</div>';
		
		if(this._spotlight !== ''){
			dialogHtml += '<br /><hr /><div style="text-align:left">' + this._spotlight + '</div>';
		}
		
		dialogHtml += '<br /><br /><button type="button" class="simplemodal-close">Close</button>';
		
		$(dialogHtml).modal({
			close: true,
			containerCss : {
				'text-align' : 'center',
			},
		});
		
	},
	
};

WhirlpoolPlus.redirects = function(){
	if(document.location.toString().indexOf('http://whirlpool.net.au/whim/') >= 0){
		document.location = 'http://forums.whirlpool.net.au' + document.location.pathname;
	}
	
	if(document.location.toString().indexOf('http://whirlpool.net.au/profile/') >= 0){
		document.location = 'http://forums.whirlpool.net.au' + document.location.pathname;
	}
}

//Run this when jQuery isn't available
//Usually alert pages, or (T|B)SOD
WhirlpoolPlus.executeNojQuery = function(){
	
	/** RUN: Watched Thread Alert **/
	if(WhirlpoolPlus.pageType.watchedThreadAlert){
		if (WhirlpoolPlus.get('watchedThreadsAlert') == 'watched' || document.referrer.indexOf('?action=watched') >= 0) {
			document.location = 'http://forums.whirlpool.net.au/forum/?action=watched';
		}
		if (WhirlpoolPlus.get('watchedThreadsAlert') == 'thread' &&	document.referrer.indexOf('?action=watched') == -1) {
			history.go(-1);
		}
	}
	
	/** RUN: Deleted Thread Alert **/
	if(WhirlpoolPlus.pageType.deletedThread){
		var deletedThreadNumber = WhirlpoolPlus.url.split('t=')[1].split('&')[0];
		var nodes = document.getElementById('alert').childNodes;
		nodes[nodes.length-2].innerHTML += ' <a href="http://google.com/search?q=cache:forums.whirlpool.net.au/archive/' + deletedThreadNumber + '">(Google Cache)</a>';
	}
}

//This one runs on wiki/job board etc. Anywhere that isn't forums.whirlpool.net.au/*
WhirlpoolPlus.executeNotForum = function(){
	//Dump CSS as early as possible
	this.css(
		settings.css() +
		display.css() +
		features.css() +
		features.avatar.css() +
		features.spinnerMenu.css() +
		features.recentActivityOverlay.css() +
		features.enhancedCompose.css()
	);
	
	/** RUN: Not alerts **/
	if(!WhirlpoolPlus.pageType.alert){
		settings.init();
		display.wpPlusLogo();
		display.floatSidebar();
		display.whimAlert();
		features.chatbox();
		features.spinnerMenu.run();
		features.changeLinks();
		features.recentActivityOverlay.run();
	}
	
	/** RUN: Whim Reading **/
	if(WhirlpoolPlus.pageType.whimRead){
		$('#replies table tr').each(features.avatar.avatariseWhim);
	}
	
	/** RUN: Whim Archive **/
	if(WhirlpoolPlus.pageType.whimArchive){
		features.whimArchiveSort();
	}
	
	/** RUN: Editing (wiki) **/
	if(WhirlpoolPlus.pageType.wiki && WhirlpoolPlus.pageType.edit){
		features.enhancedCompose.generalCompose('#f_body');
	}
	
}

//This function is used to run the script on the main forums page
WhirlpoolPlus.execute = function(){
	//Dump CSS as early as possible
	this.css(
		settings.css() +
		display.css() +
		features.css() +
		features.avatar.css() +
		features.recentActivityOverlay.css() +
		features.spinnerMenu.css() +
		features.quickEdit.css() +
		features.whirlpoolLastRead.css() +
		features.enhancedCompose.css() +
		features.userNotes.css() +
		WhirlpoolPlus.tools.sync.css()
	);


	/** RUN: Everywhere **/
	autoUpdate.check();
	
	/** RUN: Not Alerts **/
	if(!WhirlpoolPlus.pageType.alert){
		settings.init();
		display.wpPlusLogo();
		display.floatSidebar();
		display.whimAlert();
		display.penaltyBoxHighlight();
		features.chatbox();
		features.recentActivityOverlay.run();
		features.spinnerMenu.run();
		features.changeLinks();
		WhirlpoolPlus.tools.sync.init();
	}
	
	
	
	/** RUN: Posts Pages **/
	if(WhirlpoolPlus.pageType.posts){
		display.hidePosts();
		display.syntaxHighlight();
		display.emoticons.init();
		features.embed();
		features.extraNavLinks();
		features.auraReset();
		features.quickEdit.run();
		features.whirlpoolLastRead.runPosts();
		features.enhancedCompose.quickReply();
		
		//Loop through each reply
		$('#replies .reply').each(function(){
			$this = $(this);
			features.ignoreUser.userIgnore($this);
			features.avatar.avatariseRow($this);
			features.userNotes.runOnReply($this);
		});
		
	}
	
	/** RUN: Threads Pages **/
	if(WhirlpoolPlus.pageType.threads){
		display.hideThreads();
		features.unansweredThreadsLink();
		features.whirlpoolLastRead.runThreads();
	}
	
	/** RUN: Profiles **/
	if(WhirlpoolPlus.pageType.profile){
		stats.postsPerDay();
		display.hideClosedThreads();
		features.whirlpoolLastRead.runThreads();
		display.userPageInfoToggle();
	}
	
	/** RUN: Aura Votes Page **/
	if(WhirlpoolPlus.pageType.auraVotes){
		stats.auraCount();
	}
	
	/** RUN: Front page **/
	if(WhirlpoolPlus.url == 'http://forums.whirlpool.net.au/'){
		display.hideForums();
		features.removeLinkToLastPage();
	}
	
	/** RUN: Posting (new thread, reply) **/
	if(WhirlpoolPlus.pageType.newThread || WhirlpoolPlus.pageType.reply){
		features.autoSubscribe();
		features.enhancedCompose.generalCompose('#body');
	}
	
	/** RUN: Editing (posts) **/
	if(WhirlpoolPlus.pageType.forums && WhirlpoolPlus.pageType.edit){
		features.enhancedCompose.generalCompose('#body');
	}
	
	/** RUN: Thread Search pages **/
	if(WhirlpoolPlus.pageType.search){
		features.threadSearchSort();
	}
	
	/** RUN: Watched Threads **/
	if(WhirlpoolPlus.pageType.watchedThreads){
		features.openWatchedThreadsInTabs();
	}
	
	/** RUN: Whim Reading **/
	if(WhirlpoolPlus.pageType.whimRead){
		$('#replies table tr').each(features.avatar.avatariseWhim);
	}
	
	/** RUN: Whim Archive **/
	if(WhirlpoolPlus.pageType.whimArchive){
		features.whimArchiveSort();
	}
	
}

/** Features **/

WhirlpoolPlus.tools = {

	getUserNumber : function(reply){
		var num = reply.find('a[href*="/user/"]:not([href*="online"])').prop('href').split('/user/')[1];
		num = num.split('?');
		return parseInt(num);
	},
	
	getThreadNumber : function(){
		return (typeof unsafeWindow.thisThreadID != 'undefined') ? (unsafeWindow.thisThreadID) : (false);
	},
	
	getUserID : function(){
		return $('.userinfo dd:first').text().split('#')[1];
	},
	
	getUsername : function(){
		return $('.userinfo dt:first').text();
	}

};

WhirlpoolPlus.tools.sync = {

	server : WhirlpoolPlus.get('sync_server'),
	
	user : WhirlpoolPlus.get('sync_user'),
	
	key : WhirlpoolPlus.get('sync_key'),
	
	scriptId : WhirlpoolPlus.get('sync_scriptId'),
	
	// In the past, this value was accidently encoded when stored. Now this is resolved,
	// it must still be encoded before use to ensure encrypted values are backwards-compatible
	encKey : encodeURIComponent(WhirlpoolPlus.get('sync_encryptionKey')),
	
	css : function(){
		return '#syncing { display: none; position: fixed; bottom: 0px; right: 0px; background-color: #3D3327; z-index: 10; padding: 6px 2px 2px 6px; border-top-left-radius: 15px; } #syncing img { height: 30px; width: 30px; }';
	},
	
	init : function(){
		if(WhirlpoolPlus.get('sync_enabled')){
			$('body').append('<div id="syncing"><img src="' + WhirlpoolPlus.image('loader') + '" /></div>');
		
			WhirlpoolPlus.tools.sync.sync();
		}
	},
	
	get : function(name){
		return WhirlpoolPlus.get('sync_' + name);
	},
	
	getTime : function(name){
		return WhirlpoolPlus.get('sync_times')[name];
	},
	
	getTimes : function(){
		return WhirlpoolPlus.get('sync_times');
	},
	
	set : function(name,value){
		this.setWithTime(name,value,Math.round(new Date().getTime() / 1000));
	},
	
	setWithTime : function(name,value,timestamp){
		timestamp = parseInt(timestamp);
				
		var times = WhirlpoolPlus.get('sync_times');
		
		times[name] = timestamp;
		
		WhirlpoolPlus.set('sync_times',times);
		
		if(timestamp > WhirlpoolPlus.get('sync_mostUpToDate')){
			WhirlpoolPlus.set('sync_mostUpToDate',timestamp);
		}
		
		WhirlpoolPlus.set('sync_' + name,value);
	},
	
	remove : function(name){
		if(this.get(name) !== false){
			this.set(name,null);
		}
	},
	
	_delete : function(name){
		var times = WhirlpoolPlus.get('sync_times');
		
		delete times[name];
		
		WhirlpoolPlus.set('sync_times',times);
		WhirlpoolPlus.remove('sync_' + name);
		
	},
	
	_sendRequest : function(request,callback){
		$.ajax({
			headers: {'Content-Type': 'application/x-www-form-urlencoded'},
			type : 'POST',
			url : this.server,
			data : 'u=' + this.user + '&k=' + this.key + '&r=' + JSON.stringify(request),
			success : callback,
			error : function(response){
				WhirlpoolPlus.tools.sync._error(response.status);
			}
		});
	},
	
	_error : function(status){
		if(status == 0){
			//General request failure, usually caused by navigation whilst syncing
			$('#syncing').fadeOut();
			return;
		}
	
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
		
		WhirlpoolPlus.notify('WP+ Sync Failed: ' + message,false,10*1000);
		$('#syncing').fadeOut();
	},
	
	_encrypt : function(data){
		return encodeURIComponent(Tea.encrypt(JSON.stringify(data),this.encKey));
	},
	
	_decrypt : function(data){
		return JSON.parse(Tea.decrypt(decodeURIComponent(data),this.encKey));
	},
	
	sync : function(){
		if(!WhirlpoolPlus.get('sync_enabled')){
			return;
		}
			
		$('#syncing').fadeIn();
		var request = {
			a : 'nu',
			id : this.scriptId,
			t : WhirlpoolPlus.get('sync_mostUpToDate'),
			ls : WhirlpoolPlus.get('sync_lastSync')
		};
		
		
		this._sendRequest(request,function(data,statusText,response){
			if(response.status != 200){
				WhirlpoolPlus.tools.sync._error(response.status);
			}else{
				var serverResponse = JSON.parse(response.responseText);
				
				var currentSyncTime = Math.round(new Date().getTime() / 1000);
				
				if(serverResponse.nu){
					var times = WhirlpoolPlus.tools.sync.getTimes();
					
					var dataForServer = {};
					
					for(var key in times){
						if(times[key] >= serverResponse.since){
							dataForServer[WhirlpoolPlus.tools.sync._encrypt(key)] = {
								t : times[key],
								d : (WhirlpoolPlus.tools.sync.get(key) === null) ? null : WhirlpoolPlus.tools.sync._encrypt(WhirlpoolPlus.tools.sync.get(key))
							};
						}
					}
					
					//server wants an update
					request = {
						a : 's',
						id : WhirlpoolPlus.tools.sync.scriptId,
						ls : WhirlpoolPlus.get('sync_lastSync'),
						ct : currentSyncTime,
						d : dataForServer
					};
										
					WhirlpoolPlus.tools.sync._sendRequest(request,function(data,statusText,syncResponse){
						if(syncResponse.status != 200){
							WhirlpoolPlus.tools.sync._error(response.status);
							return;
						}
						
						syncResponse = JSON.parse(syncResponse.responseText);
						
						if(syncResponse.s){
							//data to sync
							
							var reload = false;
							
							if(typeof syncResponse.d != 'undefined'){								
								for(var key in syncResponse.d){
									decodedKey = WhirlpoolPlus.tools.sync._decrypt(key);										
									syncResponse.d[key]['d'] = WhirlpoolPlus.tools.sync._decrypt(syncResponse.d[key]['d']);
									
									if(WhirlpoolPlus.tools.sync.get(decodedKey) !== false){
										if(WhirlpoolPlus.tools.sync.getTime(decodedKey) <= syncResponse.d[key]['t']){
											WhirlpoolPlus.tools.sync.setWithTime(decodedKey,syncResponse.d[key]['d'],syncResponse.d[key]['t']);
										}
									}else{
										WhirlpoolPlus.tools.sync.setWithTime(decodedKey,syncResponse.d[key]['d'],syncResponse.d[key]['t']);
									}
									reload = true;
								}
							}
							
							if(typeof syncResponse.r != 'undefined'){
								for(var key in syncResponse.r){
									decodedKey = WhirlpoolPlus.tools.sync._decrypt(key);
									if(WhirlpoolPlus.tools.sync.get(decodedKey) !== false){
										if(WhirlpoolPlus.tools.sync.get(decodedKey) !== null){
											reload = true;
										}
										if(WhirlpoolPlus.tools.sync.getTime(decodedKey) <= syncResponse.r[key]['t']){
											WhirlpoolPlus.tools.sync._delete(decodedKey);
										}
									}
								}
							}
							
							if(reload && (WhirlpoolPlus.pageType.threads || WhirlpoolPlus.pageType.profile)){
								window.location.reload();
							}
							
						}
						
						WhirlpoolPlus.set('sync_lastSync',currentSyncTime);
						$('#syncing').fadeOut();
						
					});
				}else{
					$('#syncing').fadeOut();
				}
			}
		});
		
	}
};		

//Things that modify the display of the forum pages
var display = {

	_themes : {
		blue : '@import url(http://members.optusnet.com.au/foonly/wpblue/1/css/core.css);',
		teal : '@import url(http://www.users.on.net/~chrispotter/Teal/wp-teal.css);',
		black : '@import url(http://www.users.on.net/~chrispotter/Black/wp-black.css);',
		green : '@import url(http://www.users.on.net/~chrispotter/Green/wp-green.css);',
		wood : '@import url(http://www.users.on.net/~chrispotter/Wood/wp-wood.css);',
		purple : '@import url(http://www.users.on.net/~chrispotter/Purple/wp-purple.css);',
		classic : '@import url(http://phyco.name/wpplus/wpclassic2011/css/core.css);',
	},

	//CSS that is included everywhere
	css : function(){
		var styles = '';
	
		//Fonts
		if (WhirlpoolPlus.get('display_sidebarFont') != 'default font'){
			styles += '#menu * { font-family: ' + WhirlpoolPlus.get('display_sidebarFont') + ' !important; }';
		}
		if (WhirlpoolPlus.get('display_breadcrumbFont') != 'default font'){
			styles += '#breadcrumb * { font-family: ' + WhirlpoolPlus.get('display_breadcrumbFont') + ' !important; }';
		}
		
		//Theme
		var theTheme = WhirlpoolPlus.get('display_theme');
		if(theTheme != 'default' && theTheme in this._themes){
			WhirlpoolPlus.css(this._themes[theTheme]);
		}
		
		//Text Shadow
		if(WhirlpoolPlus.get('display_noTextShadow')) {
			styles += '* {text-shadow:none!important;}';
		}
		
		//Remove footer
		if(!WhirlpoolPlus.get('display_showFooter')){
			styles += '#footer {display:none;}';
		}
		
		//Widescreen
		if (WhirlpoolPlus.get('display_widescreen')) {
			styles += '#root, #footer {width: 99.5% !important;max-width: none !important;} #content > span.shim2 {display: none !important;}body,html,#root{margin:0;padding:0;border:0;}';
		}
		
		//Custom CSS
		styles += WhirlpoolPlus.get('display_customCSS');
		
		//Penalty Box
		styles += '.penalty_box {background-image:url(' + WhirlpoolPlus.image('light_gradient') + ')!important;background-repeat:repeat !important; background-color: #fff !important; } ';
		
		
		return styles;
	},
	
	hideThreads : function(){
		if(WhirlpoolPlus.get('display_hideDeletedThreads')){
			WhirlpoolPlus.css('.deleted {display:none;}');
		}
			
		if(WhirlpoolPlus.get('display_hideMovedThreads')){
			WhirlpoolPlus.css('.pointer {display:none;}');
		}
	
	},
	
	hideClosedThreads : function(){
		if (WhirlpoolPlus.get('display_hideClosedThreadsOnProfile')){
			WhirlpoolPlus.css('.closed { display: none; }')
			
			$('.closed').each(function(){
				var $this = $(this);
				var previous = $this.prev();
				var next = $this.next();
				
				if(previous.hasClass('section') && next.hasClass('section')){
					previous.remove();
				}
			});
		}
	},
	
	hidePosts : function(){
		if(WhirlpoolPlus.get('display_hideDeletedPosts')){
			WhirlpoolPlus.css('.notice[id^="x"] {display: none;}');
		}
	},
	
	hideForums : function(){
		var hideThese = WhirlpoolPlus.get('display_hideTheseForums');
		
		if (hideThese != '') {
			$('#index tr div.title a').each(function(){
				var url = $(this).prop('href').split('/forum/')[1];
				
				if (hideThese.indexOf(url) >= 0) {
					$(this).parents('tr').eq(0).remove();
				}
			});
			
			$('#index h3').each(function(){
				if($(this).next('table').height() == 0) {
					$(this).next('table').remove();
					$(this).remove();
				}
			});
		}
	},
	
	floatSidebar : function(){
		if(WhirlpoolPlus.get('display_floatSidebar')){
			var floating = true;
			var sidebarContent = $('div#left');
			
			WhirlpoolPlus.css('div#left { left: inherit; top: 190px;} div#left.sidebarFloat { z-index: 2; position: fixed; top: 0px; }');
			
			$(WhirlpoolPlus.window).scroll(function(){
				if(floating){
					if(window.pageYOffset > 190){
						sidebarContent.addClass('sidebarFloat');
					}else{
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
	
	syntaxHighlight : function(){
		if(WhirlpoolPlus.get('display_syntaxHighlight')) {
			$('pre').addClass("prettyprint");
			WhirlpoolPlus.css(WhirlpoolPlus.resource('prettify'));
			prettyPrint();
		}
	},
	
	emoticons : {
		init : function(){
			if (WhirlpoolPlus.get('display_emoticons_enabled')) {
				this.prep();
				this.initialise();
				$('div.bodytext > p').each(this.runOnTextNode);
			}
		},
	
		prep : function(){
			$( ".reference a" ).each( function( ) {
				var text = $(this).text( ).toString( ).replace( /\:/, "<span>:</span>" );
				$(this).html( text );
			} );
		},
		
		icons : {
			':angry:': WhirlpoolPlus.image('emoticon_angry'),
			':glad:': WhirlpoolPlus.image('emoticon_blushing'),
			':confused:': WhirlpoolPlus.image('emoticon_confused'),
			':cool:': WhirlpoolPlus.image('emoticon_cool'),
			':cry:': WhirlpoolPlus.image('emoticon_cry'),
			':(': WhirlpoolPlus.image('emoticon_frown'),
			':gasp:': WhirlpoolPlus.image('emoticon_gasp'),
			':D': WhirlpoolPlus.image('emoticon_grin'),
			'<3':WhirlpoolPlus.image('emoticon_kiss'),
			':X': WhirlpoolPlus.image('emoticon_lips'),
			':shout:': WhirlpoolPlus.image('emoticon_shout'),
			':snore:': WhirlpoolPlus.image('emoticon_sleep'),
			':)': WhirlpoolPlus.image('emoticon_smile'),
			':\\\\': WhirlpoolPlus.image('emoticon_smirk'),
			':|': WhirlpoolPlus.image('emoticon_straight'),
			':P': WhirlpoolPlus.image('emoticon_tongue'),
			';)': WhirlpoolPlus.image('emoticon_wink'),
			':star:': WhirlpoolPlus.image('emoticon_star')
		},
		
		duplicates : {
			':-(': WhirlpoolPlus.image('emoticon_frown'),
			':-D': WhirlpoolPlus.image('emoticon_grin'),
			':X': WhirlpoolPlus.image('emoticon_lips'),
			'=)': WhirlpoolPlus.image('emoticon_smile'),
			':-)': WhirlpoolPlus.image('emoticon_smile'),
			':-|': WhirlpoolPlus.image('emoticon_straight'),
			':-P': WhirlpoolPlus.image('emoticon_tongue'),
			'=P': WhirlpoolPlus.image('emoticon_tongue'),
			';-)': WhirlpoolPlus.image('emoticon_wink'),
			':;': WhirlpoolPlus.image('emoticon_wink'),
			':-;': WhirlpoolPlus.image('emoticon_wink'),
			':-\\\\': WhirlpoolPlus.image('emoticon_smirk'),
			'=\\\\': WhirlpoolPlus.image('emoticon_smirk'),
		},
		
		blue_icons : {
			':~': WhirlpoolPlus.image('old_blue_anxious'),
			'(:': WhirlpoolPlus.image('old_blue_cool'),
			'-o.o-': WhirlpoolPlus.image('old_blue_eyes'),
			':D': WhirlpoolPlus.image('old_blue_grin'),
			':|)': WhirlpoolPlus.image('old_blue_happy2'),
			':)': WhirlpoolPlus.image('old_blue_happy'),
			':|(': WhirlpoolPlus.image('old_blue_sad2'),
			':(': WhirlpoolPlus.image('old_blue_sad'),
			':|': WhirlpoolPlus.image('old_blue_neutral'),
			':ninja:': WhirlpoolPlus.image('old_blue_ninja'),
			';)': WhirlpoolPlus.image('old_blue_smirk'),
			':P': WhirlpoolPlus.image('old_blue_tongue'),
			':star:': WhirlpoolPlus.image('emoticon_star')
		},
		
		blue_duplicates : {
			'(:': WhirlpoolPlus.image('old_blue_cool'),
			'-oo-': WhirlpoolPlus.image('old_blue_eyes'),
			':-D': WhirlpoolPlus.image('old_blue_grin'),
			':-)': WhirlpoolPlus.image('old_blue_happy'),
			'=)': WhirlpoolPlus.image('old_blue_happy'),
			':-(': WhirlpoolPlus.image('old_blue_sad'),
			':-|': WhirlpoolPlus.image('old_blue_neutral'),
			':ninja:': WhirlpoolPlus.image('old_blue_ninja'),
			':\\\\':WhirlpoolPlus.image('old_blue_smirk'),
			':-\\\\':WhirlpoolPlus.image('old_blue_smirk'),
			'=\\\\':WhirlpoolPlus.image('old_blue_smirk'),
			';-)': WhirlpoolPlus.image('old_blue_smirk'),
			':-P': WhirlpoolPlus.image('old_blue_tongue'),
			'=P': WhirlpoolPlus.image('old_blue_tongue'),
		},
		
		getIconSet : function(useDuplicates){
			
			mainIcons = {};
			duplicateIcons = {};
		
			if(WhirlpoolPlus.get('display_emoticons_blue')) {
				$.extend(mainIcons,this.blue_icons);
				$.extend(duplicateIcons,this.blue_duplicates);
			}else{
				$.extend(mainIcons,this.icons);
				$.extend(duplicateIcons,this.duplicates);
			}
			
			if(useDuplicates){
				$.extend(mainIcons,duplicateIcons);
			}
			
			return mainIcons;
			
		},
		
		regex : {},
		startLine : '<img src ="',
		currentIconSet : {},
		
		initialise : function(){
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
		
		runOnTextNode : function(){
			node = $(this);
			
			var nodeValue = node.html();
			var smiley = display.emoticons.run(nodeValue)
			
			if (smiley.length > 1 && smiley != nodeValue) {
				node.html(smiley);
			}
		},
		
		run : function(text){
			if (!WhirlpoolPlus.get('display_emoticons_enabled')) {
				return text;
			}
			
			var smiley = ' ' + text;
			
			for (icon in (display.emoticons.currentIconSet)) {
				smiley = smiley.replace(display.emoticons.regex[icon], '$1' + display.emoticons.startLine + display.emoticons.currentIconSet[icon] + '" alt="' + icon + '" align="baseline" />');
			}
			
			return smiley;

		},
	},

	wpPlusLogo : function(){
		$('.copyright').append('<dt><img src="' 
			+ WhirlpoolPlus.image('wp_plus_logo') + '" alt="Whirlpool Plus" /></dt><dd>Extra Awesomeness added  <br /> with '
			+ '<a href="http://whirlpool.net.au/wiki/whirlpool_plus">Whirlpool Plus ' + WhirlpoolPlus.getVersionText() + '</a></dd>');
	},
	
	whimAlert : function(){
		if (WhirlpoolPlus.get('display_whimAlert') && $('#menu_whim').text()) {
			WhirlpoolPlus.notify('You have an unread <a href="http://whirlpool.net.au/whim/">whim</a>.', true, 15000);
		}
	},
	
	penaltyBoxHighlight : function(){
		if(WhirlpoolPlus.get('display_penaltyBox')){
			$('#replies .replyuser-inner .usergroup').each(function(){	
				var userGroup = $(this).text();
				if(userGroup.indexOf('penalty box') > 0 || userGroup.indexOf('Banned') > 0){
					$(this).parents('.replyuser').addClass('penalty_box');
				}
			});
		}
	},

	userPageInfoToggle : function(){
		if(WhirlpoolPlus.get('display_userPageInfoToggle')){
			var h2s = $('#userprofile h2:lt(2)');
			h2s.css('cursor', 'pointer').next('table').hide();
			h2s.click(function () {
				$(this).next('table').slideToggle();
			});
		}
	}
	
}

//Updater
var autoUpdate = {

	check : function(){
		if (WhirlpoolPlus.get('autoUpdate_enabled')){
			var currentTime = ((new Date()).getTime()) / 1000;

			//In seconds
			var next = WhirlpoolPlus.get('autoUpdate_interval') * 60; 

			var last = WhirlpoolPlus.get('autoUpdate_lastChecked');

			if (currentTime > last + next) {
				
				WhirlpoolPlus.ajax({
					method: 'GET',
					url: 'http://userscripts.org/scripts/source/85217.meta.js',
					headers: {
						'User-Agent': 'Mozilla/5.0',
						'User-Agent': 'Mozilla/5.0',
						'Accept': 'text/xml'
					},
					onload: function (data) {
					
						var dataText = data.responseText;
						
						var newVersionText = dataText.split('// @version\t\t\t')[1].split('\r\n// @require')[0];
						
						var newVersionParts = newVersionText.split('.');
						
						var oldVersionParts = WhirlpoolPlus.version.split('.');
						
						var newMajorVersion = parseInt(newVersionParts[0]);
						var newMiddleVersion = parseInt(newVersionParts[1]);
						var newMinorVersion = parseInt(newVersionParts[2]);
						
						var oldMajorVersion = parseInt(oldVersionParts[0]);
						var oldMiddleVersion = parseInt(oldVersionParts[1]);
						var oldMinorVersion = parseInt(oldVersionParts[2]);
						
						function update(){
							WhirlpoolPlus.notify('A new version of WP+ is available', true, 50000);
							window.open('http://userscripts.org/scripts/source/85217.user.js');
						}

						if (newMajorVersion > oldMajorVersion) {
							update();
						}else if(newMajorVersion == oldMajorVersion){
							if(newMiddleVersion > oldMiddleVersion){
								update();
							}else if(newMiddleVersion == oldMiddleVersion){
								if(newMinorVersion > oldMinorVersion){
									update();
								}else if(newMinorVersion == oldMinorVersion && WhirlpoolPlus.prerelease > 0){
									//This is a prerelease version, and a full release is available
									update();
								}
							}
						}
						
						WhirlpoolPlus.set('autoUpdate_lastChecked', currentTime);

					}
				});
			}
		}
	}
	
}

var stats = {
	
	postsPerDay : function(){
		if(!WhirlpoolPlus.get('stats_postsPerDay')){
			return;
		}
	
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
	},
	
	auraCount : function(){
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
	
}

//Main Script features
//Larger ones are inserted below
var features = {
	
	css : function(){
		//Chatbox
		return '#chatbox iframe { border: none; margin-left: 10px; width: 190px; } #chatbox iframe:first { height: 300px; } #chatbox iframe:last { height: 95px; overflow: hidden; } #root { min-height: 1600px; } ';	
	},
	
	chatbox : function(){
		if (WhirlpoolPlus.get('chatbox')) {
			//CSS ADDED ABOVE
			$('.userinfo').after('<div id="chatbox"><iframe name="cboxmain" src="http://www3.cbox.ws/box/?boxid=2818612&amp;boxtag=1700&amp;sec=main" id="cboxmain"></iframe><iframe name="cboxform" src="http://www3.cbox.ws/box/?boxid=2818612&amp;boxtag=1700&amp;sec=form" id="cboxform"></iframe></div>');
		}
	},
	
	embed : function(){
		var oEmbedEnabled = WhirlpoolPlus.get('embed_oembed');
		var imageEnabled = WhirlpoolPlus.get('embed_images');
		var maxContentWidth = $('.replytext').width();
	
	
		//Image embedding setup
		if(imageEnabled){
			var imageMatchRegex = /bmp|gif|jpg|png/;
			var imgurRegex = /http:\/\/imgur\.com\/(.+)/
			WhirlpoolPlus.css('.wpx_img { max-width: ' + maxContentWidth + 'px; }');
		}
		
		//oEmbed setup
		if (oEmbedEnabled) {
			WhirlpoolPlus.css(WhirlpoolPlus.resource('oembedcss'));
			
			var oEmbedMatchRegex;
			
			try{
				oEmbedMatchRegex = new RegExp(WhirlpoolPlus.get('embed_oembedTypes').replace('.','\.'));
			}catch(error){
				oEmbedMatchRegex = false;
				WhirlpoolPlus.notify('oEmbed content types is invalid! (WP+ Settings > Posts > Display and Formatting Options)',false,10000);
			}
		}
		
		var displayed = {};
				
		$('#replies .replytext a').not('.internal').each(function(){
			var linkObject = $(this);
			var link = linkObject.prop('href');
			
			if(displayed[link] != true){
				if (imageEnabled && imageMatchRegex.test(link)){
					linkObject.before('<img src="' + link + '" class="wpx_img">');
				}else if(imageEnabled && imgurRegex.test(link)){
					var linkSegments = imgurRegex.exec(link);
					
					if(linkSegments[1]){
						linkSegments = linkSegments[1].split('/');
						
						//Check for album embeds
						if(linkSegments[0] != 'a'){
							linkObject.before('<img src="http://i.imgur.com/' + linkSegments[linkSegments.length - 1] + '.jpg" class="wpx_img">');
						}else{
							linkObject.before('<iframe class="imgur-album" width="100%" height="550" frameborder="0" src="http://imgur.com/a/' + linkSegments[linkSegments.length - 1] + '/embed"></iframe>');
						}
					}
				}else if(oEmbedEnabled && oEmbedMatchRegex.test(link)){
					linkObject.oembed(null,{ apikeys: {}, maxWidth: maxContentWidth });
				}
				
				displayed[link] = true;
			}
		});
	},
	
	removeLinkToLastPage : function(){
		if(WhirlpoolPlus.get('removeLinkToLastPage')){
			$('.threads a').each(function(){
				this.href = this.href.replace('&p=-1&#bottom', '');
			});
		}
	},
	
	extraNavLinks : function(){
		var topLinks = $('#watch_button').parent();
		var bottomLinks = $('.foot_subs:first');
		var threadNumber = WhirlpoolPlus.tools.getThreadNumber();
		
		WhirlpoolPlus.css('#replies { margin-top: 10px; }')
		
		if(WhirlpoolPlus.get('links_archive')){
			topLinks.append('<a class="bwatch" href="http://forums.whirlpool.net.au/archive/' + threadNumber + '">Thread Archive</a>');
			bottomLinks.append('&nbsp;&nbsp;<a href="http://forums.whirlpool.net.au/archive/' + threadNumber + '">Thread Archive</a>');
		}
		
		if (WhirlpoolPlus.get('links_longThread')) {
			topLinks.append('<a class="bwatch" href="http://forums.whirlpool.net.au/forum-replies.cfm?t=' + threadNumber + '&p=-2">Long Thread View</a>');
			bottomLinks.append('&nbsp;&nbsp;<a href="http://forums.whirlpool.net.au/forum-replies.cfm?t=' + threadNumber + '&p=-2">Long Thread View</a>');
		}
		
		if (WhirlpoolPlus.get('links_originalPoster')){
			var opPost = $('.op:first').parent().parent();
			if(opPost.length == 1){
				var opid = WhirlpoolPlus.tools.getUserNumber(opPost);
				topLinks.append('<a class="bwatch oponly" href="http://forums.whirlpool.net.au/forum-replies.cfm?t=' + threadNumber + '&ux=' + opid + '">OP Only</a>');
				bottomLinks.append('&nbsp;&nbsp;<a href="http://forums.whirlpool.net.au/forum-replies.cfm?t=' + threadNumber + '&ux=' + opid + '">OP Only</a>');
			}
		}
		
		if (WhirlpoolPlus.get('links_mod')) {
			topLinks.append('<a class="bwatch" href="http://forums.whirlpool.net.au/forum-replies.cfm?um=1&amp;t=' + threadNumber + '">Mod Posts</a>');
			bottomLinks.append('&nbsp;&nbsp;<a href="http://forums.whirlpool.net.au/forum-replies.cfm?um=1&amp;t=' + threadNumber + '">View moderator posts</a>');
		}
		
		if (WhirlpoolPlus.get('links_rep')) {
			topLinks.append('<a class="bwatch" href="http://forums.whirlpool.net.au/forum-replies.cfm?ur=1&amp;t=' + threadNumber + '">Rep Posts</a>');
			bottomLinks.append('&nbsp;&nbsp;<a href="http://forums.whirlpool.net.au/forum-replies.cfm?ur=1&amp;t=' + threadNumber + '">View representative posts</a>');
		}
	},
	
	unansweredThreadsLink : function(){
		if(WhirlpoolPlus.get('links_unanswered')){
			if(WhirlpoolPlus.url.match('nr=1')){
				var old_url = WhirlpoolPlus.url.replace('&nr=1', '');
				$('#breadcrumb li:last').html('<a href="' + old_url + '">' + $('#breadcrumb li:last').text() + '</a>');
			}else{
				var new_url = WhirlpoolPlus.url + (WhirlpoolPlus.url.indexOf('?') > -1 ? '&nr=1' : '?&nr=1');
				$('#breadcrumb li:last').append(' <a href="' + new_url + '">(show unanswered only)</a> ');
			}
		}
	},
	
	auraReset : function(){
		if(WhirlpoolPlus.get('resetAuraVote')){
			$('.voteblock').each(function(){
				var block = $(this);
				var replyId = $(block.closest('div.reply')).prop('id').split('r')[1];
				var clickFunction = 'userVote(' + replyId + ',' + block.prop('title') + ',0,' + WhirlpoolPlus.tools.getUserID() + ');';
				block.children('span[id$="sn1"]').after(' <span class="voteitem" id="vote' + replyId + 's0" title="reset vote" onclick="' + clickFunction + '">?</span> ');
			});
		}
	},
	
	autoSubscribe : function(){
		if(WhirlpoolPlus.get('autoSubscribeToNewThread')) {
			$('#modesu').prop('checked', 'checked');
		}
	},
	
	whimArchiveSort : function(){
		if (WhirlpoolPlus.get('whimArchiveSort')) {
			WhirlpoolPlus.css('#content > table > tbody > tr { background-color: #EEF0F8; } ');
			$('tr[style="padding-right:10px; color:black;"]').css('display','none');
		
			var whimTRsParent = document.querySelector('#content>table>tbody');
			var whimTRs = whimTRsParent.querySelectorAll('tr[bgcolor]');

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
	},
	
	threadSearchSort : function(){
		//Sort search results by date (Thanks, Yanksy, http://userscripts.org/scripts/show/92400)
		
		//true == down
		var oldestDirection = true;
		var newestDirection = true;
		
		var fPA = $('<a href="#" style="color:white;" />');

		fPA.click(function(){
			GM_orderSearch('.oldest',oldestDirection ? 'down' : 'up');
			oldestDirection = !oldestDirection;
			return false;
		});
		
		$('td.oldest:first b').wrap(fPA);
		
		var fPA2 = $('<a href="#" style="color:white;" />');
		
		fPA2.click(function(){
			GM_orderSearch('.newest',newestDirection ? 'down' : 'up');
			newestDirection = !newestDirection;
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
	},
	
	changeLinks : function(){
		$('a[href*="whirlpool.net.au/profile"], a[href*="whirlpool.net.au/whim"]').each(function(){
			var link = $(this);
			var parts = /whirlpool.net.au\/(profile|whim)\/(.*)/.exec(link.prop('href'));
			
			link.prop('href','//forums.whirlpool.net.au/' + parts[1] + '/' + parts[2]);
		});
	
		if (WhirlpoolPlus.get('defaultRecentActivityDays') != '7') {
			//have to do this twice, because there are two different ways to link to user pages used
			$('a[href*="forums.whirlpool.net.au/user/"]:not([href*="?"])').each(function(){
				var link = $(this);
				link.prop('href',link.prop('href') + '?days=' + WhirlpoolPlus.get('defaultRecentActivityDays'));
			});
			$('a[href^="/user/"]:not([href*="?"])').each(function(){
				var link = $(this);
				link.prop('href',link.prop('href') + '?days=' + WhirlpoolPlus.get('defaultRecentActivityDays'));
			});
		}
	},
	
	openWatchedThreadsInTabs : function(){
				
		var openAllInT = $('<a href="#" id="openInTabs">open in tabs</a>');
		
		$('a[href="/forum/?action=watched&showall=1"]').before(openAllInT);	
		
		openAllInT.after('&nbsp;&nbsp;|&nbsp;&nbsp;');
		
		openAllInT.click(function(){
			$('.reads a').each(function (){
				window.open(this.href);
			});
			return false;		
		});		
		
		$('.section a').each(function(i){
		
			var openAllinSInT = $('<a href="#" id="openSectionInTabs" style="font-weight:bold;margin-left:35px;">open section in tabs</a>');
			$(this).after(openAllinSInT);
			
			openAllinSInT.click(function(){		
				$(this).parent().parent().nextUntil('.section').find('.reads a').each(function (){
					window.open(this.href);
				});
				return false;		
			});	
			
		});
	}
	
}

//Larger features inserted here
features.avatar = {
	
	avatariseRow : function(replyTr){
		if(WhirlpoolPlus.get('avatar_static') || WhirlpoolPlus.get('avatar_animated')){
			var userNumber = WhirlpoolPlus.tools.getUserNumber(replyTr);
			replyTr.find('.replyuser-inner').prepend($('<div class="wpp_avatar wpp_avatar_' + userNumber + '"><a class="wpp_avatar_link" href="/user/' + userNumber + '" /></div>'));
			replyTr.addClass('wpp_avatar_reply_' + userNumber);
		}
	},
	
	avatariseWhim : function(){
		if(WhirlpoolPlus.get('avatar_static') || WhirlpoolPlus.get('avatar_animated')){
			replyTr = $(this);
			var userNumber = WhirlpoolPlus.tools.getUserNumber(replyTr);
			replyTr.find('.bodyuser').prepend($('<div class="wpp_avatar wpp_avatar_' + userNumber + '"><a class="wpp_avatar_link" href="/user/' + userNumber + '" /></div>'));
			replyTr.addClass('wpp_avatar_reply_' + userNumber);
		}
	},
	
	css : function(){
		if (WhirlpoolPlus.get('avatar_static')) {
			WhirlpoolPlus.css('@import url(http://wpplus.endorph.net/avatars/avatar_lite.css);');
		}

		if (WhirlpoolPlus.get('avatar_animated')) {
			WhirlpoolPlus.css('@import url(http://wpplus.endorph.net/avatars/animatedavatar_lite.css);');
		}
		
		return '.wpp_avatar_link { margin:0 auto; display: block; width: 100%; height: 100%; } .wpp_avatar {display: block; background-repeat: no-repeat; margin:0 auto;}';
	},
	
	getUserAvatar : function(id,type,callback){
		$.ajax({
			type : 'GET',
			url : 'http://wpplus.endorph.net/avatars/getAvatar.php?id=' + id + '&type=' + type,
			success : callback
		});
	},
	
	updateAvatar : function(apiKey,url,callback){		
		$.ajax({
			type : 'POST',
			headers: {"Content-Type": "application/x-www-form-urlencoded"},
			data : 'apiKey=' + apiKey + '&action=update&url=' + url,
			url : 'http://wpplus.endorph.net/avatars/remote.php',
			success : callback
		});
	},

	removeAvatar : function(apiKey,type,callback){		
		$.ajax({
			type : 'POST',
			headers: {"Content-Type": "application/x-www-form-urlencoded"},
			data : 'apiKey=' + apiKey + '&action=remove&type=' + type,
			url : 'http://wpplus.endorph.net/avatars/remote.php',
			success : callback
		});
	}
}

features.recentActivityOverlay = {
	
	run : function(){
		if(WhirlpoolPlus.get('recentActivityOverlay')){
			this.displayOverlay();
			this.updateData(function(){
				features.recentActivityOverlay.formatData();
				features.recentActivityOverlay.loadDataIntoOverlay();
			},false);
		}
	},

	getData : function(callback){
		
		if(WhirlpoolPlus.get('whirlpoolAPIKey') == ''){
			alert('WP+ Recent Activity Overlay\n You don\'t seem to have entered your API key in the setting dialog');
			return;
		}
	
		$.ajax({
			type : 'GET',
			url : 'http://whirlpool.net.au/api/?key=' + WhirlpoolPlus.get('whirlpoolAPIKey') + '&output=json&get=recent&recentdays=' + WhirlpoolPlus.get('recentActivityOverlay_days'),
			success : function(data,textStatus,response){
								
				if(response.status == 200){
					var threads = JSON.parse(response.responseText).RECENT;
					
					WhirlpoolPlus.set('recentActivityOverlay_data',threads);
					
					if(typeof callback == 'function'){
						callback();
					}
				}else{
					alert('WP+ Recent Activity Overlay \n Whirlpool API Error: ' + response.responseText);
				}
				
			},
			error : function(response){
				alert('WP+ Recent Activity Overlay \n Whirlpool API Error: ' + response.responseText);
			}
		});
	},
	
	formatData : function(){
		var threads = WhirlpoolPlus.get('recentActivityOverlay_data');
		
		var unreadHtml = '';
		var readHtml = '';
		var link = '';
		var unread = false;
		var anyUnread = false;
			
		for(i in threads){
			unread = false;
			
			if(WhirlpoolPlus.get('wlr_enabled')){
				threadData = features.whirlpoolLastRead.loadThreadData(threads[i].ID);
				
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
		
		WhirlpoolPlus.set('recentActivityOverlay_html',unreadHtml + readHtml);
		
		if(anyUnread){
			$('#recentActivityUnreadThreads').show();
		}else{
			$('#recentActivityUnreadThreads').hide();
		}
		
	},
	
	displayOverlay : function(){
		$('body.not_IE').append('<div id="recentActivityDropdownContainer"><div id="recentActivity"><div id="recentActivityContent">Loading...</div><img id="recentActivityReload" alt="Reload" src="' + WhirlpoolPlus.image('reload') + '" /></div><div id="recentActivityHandle">Recent Activity <img src="' + WhirlpoolPlus.image('emoticon_star') + '" alt="Unread threads" id="recentActivityUnreadThreads" /></div></div>');

		
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
			features.recentActivityOverlay.updateData(function(){
				features.recentActivityOverlay.formatData();
				features.recentActivityOverlay.loadDataIntoOverlay();
			},true);
		});
	},
	
	css : function(){
		return '#recentActivityDropdownContainer { position: fixed; z-index: 999; top: 0px; left: 50%; width: 20%; margin-left: -10%; color: #fff; }' +
		'#recentActivityHandle { background-color: #3A437B; text-align: center; border-bottom-right-radius: 40px 20px; border-bottom-left-radius: 40px 20px; padding-top: 5px; box-shadow: 2px; 0 8px rgba(255, 255, 255, 0.5); width: 150px; margin: 0 auto; cursor: pointer; font-family: Georgia,Cambria,Charter,\'Century Schoolbook\',serif;  height: 25px; font-weight: bold; }' +
		'#recentActivity { overflow: hidden; color: #333; max-height: 600px; display: none; background-color: #e5e5e5; text-align: center; border: solid 2px #3A437B; border-bottom-right-radius: 40px 20px; border-bottom-left-radius: 40px 20px; border-top: none; padding-top: 5px; }' +
		'#recentActivity a { color: #333; }' + 
		'.recentActivityOverlayUnread { font-weight: 900; }' + 
		'#recentActivityReload { width: 20px; height: 20px; float: right; margin-top: -30px; margin-right: 30px; cursor: pointer; }' +
		'#recentActivityUnreadThreads { width: 10px; height: 10px; display: none; }' +
		'#recentActivityContent { overflow-y: scroll; height: 200px;  margin-top: -4px; }';
	},
	
	updateData : function(callback,forceUpdate){
		var updateInterval = WhirlpoolPlus.get('recentActivityOverlay_updateInterval');
		var lastUpdate = WhirlpoolPlus.get('recentActivityOverlay_lastUpdated');
		var currentTime = (new Date).getTime();
		
		if(forceUpdate || updateInterval * 60 * 1000 + lastUpdate < currentTime){
			this.getData(callback);
			WhirlpoolPlus.set('recentActivityOverlay_lastUpdated',currentTime);
		}else{
			if(typeof callback == 'function'){
				callback();
			}
		}
		
	},
	
	loadDataIntoOverlay : function(){
		$('#recentActivityContent').html(WhirlpoolPlus.get('recentActivityOverlay_html'));
	},
		
}

features.ignoreUser = {

	userIgnore : function(trParent){
		if(!WhirlpoolPlus.get('hiddenUsers_enabled')){
			return;
		}
	
		if(trParent.is(':hidden')){
			return;
		}
	
		var tdBodyUser = trParent.find('.replyuser-inner');
		var uNum = WhirlpoolPlus.tools.getUserNumber(trParent);
		
		//add hide smiley (X)
		if($('span[title="hide user"]',tdBodyUser).length == 0){
			var hideUser = $('<span title="hide user" style="margin-right:5px;" class="voteitem">X</span>');
			
			if($('.voteblock',tdBodyUser).length != 0){
				//normal forum
				tdBodyUser.find('.voteblock').prepend(hideUser);
			}else{
				//in ItN, need to add voteblock
				var voteblock = $('<div class="voteblock">');
				voteblock.append(hideUser);
				tdBodyUser.append(voteblock);
			}
			
			hideUser.click(function(){
				if($.inArray(uNum,WhirlpoolPlus.get('hiddenUsers')) == -1){
					//Not currently in array
					var hiddenUsers = WhirlpoolPlus.get('hiddenUsers');
					hiddenUsers.push(uNum);
					WhirlpoolPlus.set('hiddenUsers',hiddenUsers);
					
					
					$('#replies .reply').each(function(){
						features.ignoreUser.userIgnore($(this));
					});
				}
			});
		}
	
		
		//check if this post is by a user we want to hide
		//need uNum as a string
		if($.inArray(uNum,WhirlpoolPlus.get('hiddenUsers')) != -1) {
			//hide this post
			this.hideIgnoredPost(trParent,uNum);   
		}
	},
	
	//utility function to make hiding posts easier
	hideIgnoredPost : function(trParent,uNum){
		//do we want to hide completely?
		if(WhirlpoolPlus.get('hiddenUsers_remove')){
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
	},

}

features.spinnerMenu = {
	
	run : function(){
		switch(WhirlpoolPlus.get('spinnerMenu')){
			case 'spinner':
				this.spinner();
			break;
			
			case 'rightClick':
				this.rightClick();
			break;
		}
	},
	
	css : function(){
		var sidebar = $('#left');
		var whereMenu 
		if(WhirlpoolPlus.get('display_widescreen')){
			whereMenu = sidebar.width() - 4 + "px";
		}else{
			whereMenu = sidebar.offset().left + sidebar.width() - 4 + "px";
		}

		return "#pmenu {padding:0;list-style-type: none; position:fixed;z-index:50;height:19px;overflow:hidden;width:18px;left:" + whereMenu + ";}" +
			"#pmenu img{margin;0;padding:0;border:none;background:transparent;width:16px;} #pmenu ul {padding:0; margin:0; list-style-type: none; width:101px;}" + 
			"#pmenu li {position:relative;z-index:51;}" + "#pmenu a{display:block;width:130px;font-weight:bold;font-size:12px; color:#FFFFFF; height:26px; line-height:26px; " + 
			"text-decoration:none; text-indent:5px; background:#616CA3; border:1px solid orange;white-space: nowrap; }" + "#pmenu>li>ul>li>a{background:#EDEDED;color:#000;}" + 
			"#pmenu li:hover > a {background:#dfd7ca; color:#c00;}" + "#pmenu li ul {display: none;} " + 
			"#pmenu li:hover > ul {display:block; position:absolute; top:0; z-index:52;margin-left:130px;}";
	},

	_menu : null,

	generateMenu : function () {

		this._menu = $('<ul id="pmenu">');
		
		var spinner = WhirlpoolPlus.image('small_whirl_logo');
		var uNumber = WhirlpoolPlus.tools.getUserID();
		
		if(WhirlpoolPlus.get('spinnerMenu_settingsLocation') == 'top'){
			this._menu.html('<img id="menuSpinner" src="' + spinner + '" />' + '<li><a href="#" id="settingsSpinnerLink">WP+ Settings</a></li><li><a href="#">WP User</a>' + '<ul> ' + '<li><a href="http://forums.whirlpool.net.au/user/' + uNumber + '">Your Posts</a></li> ' + '<li><a href="http://forums.whirlpool.net.au/user/?action=online">People Online</a></li> ' + '<li><a href="http://forums.whirlpool.net.au/whim/?action=inbox">Inbox</a></li> ' + '<li><a href="http://forums.whirlpool.net.au/whim/?action=outbox">Outbox</a></li> ' + '<li><a href="http://forums.whirlpool.net.au/whim/?action=contacts">Contacts</a></li> ' + '<li><a href="http://forums.whirlpool.net.au/forum/?action=watched">Watched Threads</a></li> ' + '<li><a href="http://forums.whirlpool.net.au/forum/?action=threads_search">Thread Search</a></li> ' + '<li><a href="http://forums.whirlpool.net.au/profile/">Account Settings</a></li> ' + '<li><a href="http://forums.whirlpool.net.au/profile/?a=logout&logout=' + uNumber + '">Log out</a></li> ' + '</ul> ' + '</li> ');
		}else if(WhirlpoolPlus.get('spinnerMenu_settingsLocation') == 'underuser'){
			this._menu.html('<img id="menuSpinner" src="' + spinner + '" />' + '<li><a href="#">WP User</a>' + '<ul> ' + '<li><a href="http://forums.whirlpool.net.au/user/' + uNumber + '">Your Posts</a></li> ' + '<li><a href="http://forums.whirlpool.net.au/user/?action=online">People Online</a></li> ' + '<li><a href="http://forums.whirlpool.net.au/whim/?action=inbox">Inbox</a></li> ' + '<li><a href="http://forums.whirlpool.net.au/whim/?action=outbox">Outbox</a></li> ' + '<li><a href="http://forums.whirlpool.net.au/whim/?action=contacts">Contacts</a></li> ' + '<li><a href="http://forums.whirlpool.net.au/forum/?action=watched">Watched Threads</a></li> ' + '<li><a href="http://forums.whirlpool.net.au/forum/?action=threads_search">Thread Search</a></li> ' + '<li><a href="http://forums.whirlpool.net.au/profile/">Account Settings</a></li> ' + '<li><a href="http://forums.whirlpool.net.au/profile/?a=logout&logout=' + uNumber + '">Log out</a></li> ' + '</ul> ' + '</li><li><a href="#" id="settingsSpinnerLink">WP+ Settings</a></li>');
		}else {
			this._menu.html('<img id="menuSpinner" src="' + spinner + '" />' + '<li><a href="#">WP User</a>' + '<ul> ' + '<li><a href="http://forums.whirlpool.net.au/user/' + uNumber + '">Your Posts</a></li> ' + '<li><a href="http://forums.whirlpool.net.au/user/?action=online">People Online</a></li> ' + '<li><a href="http://forums.whirlpool.net.au/whim/?action=inbox">Inbox</a></li> ' + '<li><a href="http://forums.whirlpool.net.au/whim/?action=outbox">Outbox</a></li> ' + '<li><a href="http://forums.whirlpool.net.au/whim/?action=contacts">Contacts</a></li> ' + '<li><a href="http://forums.whirlpool.net.au/forum/?action=watched">Watched Threads</a></li> ' + '<li><a href="http://forums.whirlpool.net.au/forum/?action=threads_search">Thread Search</a></li> ' + '<li><a href="http://forums.whirlpool.net.au/profile/">Account Settings</a></li> ' + '<li><a href="http://forums.whirlpool.net.au/profile/?a=logout&logout=' + uNumber + '">Log out</a></li> ' + '</ul> ' + '</li> ');
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
					features.spinnerMenu._menu.append(newLI1);
				} else {
					var newLI2 = $('<li>');
					newLI2.html($(this).html());
					newUL2.append(newLI2);
				}
			});
		});
		
		if(WhirlpoolPlus.get('spinnerMenu_settingsLocation') == 'bottom'){
			this._menu.append('<li><a href="#" id="settingsSpinnerLink">WP+ Settings</a></li>');
		}
		
		this._menu.find('*').addClass('notarget');
		
		var displayedMouseOver = false;
		var displayedClick = false;
		
		this._menu.mouseenter(function(){
			if(!displayedClick){
				$(this).css({'height' : 'auto', 'overflow': 'visible'});
				displayedMouseOver = true;
				displayedClick = false;
			}
		});

		this._menu.find('#menuSpinner').click(function(){
			$(this).css({'height' : 'auto', 'overflow': 'visible'});
			displayedMouseOver = false;
			displayedClick = true;
			
			return false;
		});
		
		this._menu.find('a[href!="#"], a#settingsSpinnerLink').click(function(){
			$(features.spinnerMenu._menu).css({'height' : '19px', 'overflow': 'hidden'});
			displayedMouseOver = false;
			displayedClick = false;
			return true;
		});
		
		this._menu.mouseleave(function(){
			if(displayedMouseOver){
				$(features.spinnerMenu._menu).css({'height' : '19px', 'overflow': 'hidden'});
				displayedMouseOver = false;
			}
			return true;
		});
		
		this._menu.find('a[href="#"]').click(function(event){
			event.stopPropagation();
			return false;
		});
		
		$('html').click(function(){
			if(displayedClick){
				$(features.spinnerMenu._menu).css({'height' : '19px', 'overflow': 'hidden'});
				displayedClick = false;
			}
			return true;
		});
				
	},
	
	rightClick : function () {

		this.generateMenu();

		document.addEventListener('mouseup', function (e) {

			if (e.which == 3 && e.target.tagName != 'A' && e.target.tagName != 'TEXTAREA') {

				features.spinnerMenu._menu.remove();
				$('body').prepend(features.spinnerMenu._menu);
				$('#settingsSpinnerLink').click(function(){ settings._launch(); return false; })
				$('#menuSpinner').remove();
				features.spinnerMenu._menu[0].style.position = 'absolute';
				features.spinnerMenu._menu[0].style.left = '' + e.pageX - 250 + 'px';
				features.spinnerMenu._menu[0].style.top = '' + e.pageY + 'px';
				features.spinnerMenu._menu[0].style.overflow = 'visible';

			}
			if (e.which == 1 && $('#pmenu')[0] && e.target.className != 'notarget') {

				features.spinnerMenu._menu.remove();

			}


		},
		false);
	},
	
	spinner : function () {

		this.generateMenu();

		$('body').prepend(this._menu);
		$('#settingsSpinnerLink').click(function(){ settings._launch(); return false; })
		this._menu.css('margin', '25px 0 50px 5px');

	}

};

features.quickEdit = {
	
	run : function(){
		if(WhirlpoolPlus.get('quickEdit')){
			$('.actions a[href^="/forum/index.cfm?action=edit"]').after('<br><a class="wpp-edit">(quick edit)</a>');
			$('#replies .wpp-edit').click(this._onClick);
		}
	},
	
	css : function(){
		//Everyone loves CSS hackery, right?
		return '.wpp-edit, .wpp-c-edit { cursor: pointer; }' +
			'.quickEdit #reply > table > tbody > tr:nth-child(1), .quickEdit #reply > table > tbody > tr:nth-child(2), .quickEdit #reply tbody th, .quickEdit #reply tbody .right { display: none; }' +
			'.quickEdit #reply > table > tbody > tr:nth-child(4) table > tbody > tr:nth-child(1) td { width: 50%; text-align: center; }' +
			'.quickEdit #reply > table > tbody > tr:nth-child(4) table > tbody > tr:nth-child(2) { display: none; }' +
			'.quickEdit #reply { margin: 0; }' +
			'.quickEdit #reply #previewButton { display: none; }' +
			'.quickEdit #reply button { width:150px; font:16px Arial; }' +
			'.quickEdit #reply colgroup col { width: auto !important; }' +
			'.quickEdit #reply textarea#body { min-height: 150px; }' +
			'.quickEdit #reply td { background-color: transparent !important; padding: 0; }' +
			'.quickEdit * { box-shadow: none !important; }';
	},
	
	_onClick : function(){
		$(this).hide();
		$(this).after('<a class="wpp-c-edit">(cancel)</a>');
		
		var editUrl = $(this).prev().prev().prop('href').toString(); //The 'Edit my Post' link url
		var replyID = editUrl.split( "e=" )[1]; //Post id
		var replyHTML = $('#r' + replyID + ' .bodytext'); //Body of the post
		var original = replyHTML.html().toString(); //Original HTML
		
		//Activate the CSS hacks
		replyHTML.addClass('quickEdit');
		
		//Load the contents of the edit form into replyHTML
		replyHTML.load(editUrl + ' form', function(){
			
			//Set text area to auto-size
			if(WhirlpoolPlus.get('compose_autoExpand')){
				$('.quickEdit #reply textarea#body').removeAttr('rows').autosize({ append: '\n' });
			}
			
			//Prevent errors from this undefined function
			$('#fm').removeAttr('onkeypress');
			
			//Add Cancel Button
			$('#fm #previewButton').next().after('<td><button class="wpp-c-edit" type="button">Cancel</button></td>');
			
			//On cancel
			$('.wpp-c-edit').on('click',function(e){
				replyHTML.html(original);
				$('.wpp-edit').show();
				$('.wpp-c-edit').remove();
			});
			
			//On save
			$('input').click(function(e){
				$('input[name=post2]').val('post');
				var data = $('#fm').serialize();
				$.post($('#fm').prop('action'), data, function(text){
					if(text.indexOf('Edited. Returning') >= 0){
						document.location.reload();
					}else{
						alert('WP+: Something went wrong while editing your post. Some common problems:\n - Overquoting\n - Too much text\n - Invalid characters\nTry using the normal editing function instead. Please report this bug in the WP+ thread (in Feedback).');
					}
				});
				
				return false;
			});
		});
	}
		
		
};

features.whirlpoolLastRead = {

	css : function(){
		var styles = '';
		//Post highlighting
		if(!WhirlpoolPlus.get('wlr_display_flipStyles')){
			styles += '#replies #replylist .whirlpoolLastRead_readReply .replytools { margin-top: -2px; background-color: ' + WhirlpoolPlus.get('wlr_display_unreadPostColour') + '; background-image: none; }';
		}else{
			styles += '#replies #replylist .whirlpoolLastRead_unreadReply .replytools { background-color: ' + WhirlpoolPlus.get('wlr_display_unreadPostColour') + '; background-image: none; }';
		}
		
		//Tracker disable
		styles += '#wlr_disableTracker { height: 40px; width: 40px; position: fixed; top: 0px; right: 0px; border-bottom-left-radius: 30px; background-color: #3A437B; }' +
			' .wlr_disableTracker_img { width: 25px; position: relative; top: 5px; left: 10px; } ' +
			' #wlr_disableTracker_disabled { display: none; } ';
			
			
		//Thread highlighting
		styles += '.whirlpoolLastRead_unreadPosts { background: url("http://wpplus.endorph.net/resources/png/gradient.png") repeat scroll 0 0 ' + 
			WhirlpoolPlus.get('wlr_display_unreadThreadColour') + ' !important;  }' +
			'.whirlpoolLastRead_noUnreadPosts { background: url("http://wpplus.endorph.net/resources/png/gradient.png") repeat scroll 0 0 ' +  
			WhirlpoolPlus.get('wlr_display_readThreadColour') + ' !important;  }' +
			'#content .whirlpoolLastRead_controls a { border-bottom-color:grey; border-bottom-style:dashed; font-size: 9px; margin-top: -5px; opacity:0.3; border-bottom-width:1px; float: left; }' +
			'#content a.whirlpoolLastRead_markAsRead { margin-top: -8px; }';
			
		
		return styles;
		
	},

	trackThisThread : true,

	saveThreadData : function(threadNumber,threadReplyNumber,overallReplyNumber){
		WhirlpoolPlus.tools.sync.set(threadNumber,{t : threadReplyNumber, o : overallReplyNumber});
	},
	
	loadThreadData : function(threadNumber){
		var raw = WhirlpoolPlus.tools.sync.get(threadNumber);
		if(raw !== null){
			return raw;
		}else{
			return false;
		}
	},
	
	forumReplies : function(){
		var lastReadReplyNumber = features.whirlpoolLastRead.loadThreadData(WhirlpoolPlus.tools.getThreadNumber())['t'];
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
		if(WhirlpoolPlus.get('wlr_tempDisable')){
			
			$('body').append('<div id="wlr_disableTracker">' + 
			'<img class="wlr_disableTracker_img" id="wlr_disableTracker_enabled" src="' + WhirlpoolPlus.image('check') + '" title="WLR Tracker Enabled" />' + 
			'<img class="wlr_disableTracker_img" id="wlr_disableTracker_disabled" src="' + WhirlpoolPlus.image('cross') + '" title="WLR Tracker Disabled" />' + 
			'</div>');
			
			$('#wlr_disableTracker').click(function(){
				
				$('.wlr_disableTracker_img').toggle();
				
				if(features.whirlpoolLastRead.trackThisThread == true){
					features.whirlpoolLastRead.trackThisThread = false;
				}else{
					features.whirlpoolLastRead.trackThisThread = true;
				}
				
			});
		}
		
	
		var lowestViewHeight = window.innerHeight + window.pageYOffset;
		
		$(WhirlpoolPlus.window).scroll(function(e){
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
		
		$(WhirlpoolPlus.window).bind(unloadEvent,function(){
			if(features.whirlpoolLastRead.trackThisThread == false){
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
				
				var currentData = features.whirlpoolLastRead.loadThreadData(WhirlpoolPlus.tools.getThreadNumber());
										
				if(currentData == false || parseInt(currentData['t']) <= threadReplyNumber){
					features.whirlpoolLastRead.saveThreadData(WhirlpoolPlus.tools.getThreadNumber(),threadReplyNumber,overallReplyNumber);
				}
				
			}				
		});
	},
	
	forumPage : function(){
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
			
			var threadData = features.whirlpoolLastRead.loadThreadData(threadNumber);
			if(WhirlpoolPlus.get('wlr_noTrackSticky') && thread.is('.sticky')){
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
						if(WhirlpoolPlus.get('wlr_display_onlyEndSquare')){
							thread.find('td.goend').addClass('whirlpoolLastRead_unreadPosts');
						}else{
							thread.find('td').addClass('whirlpoolLastRead_unreadPosts');
						}
						
						if(WhirlpoolPlus.url.match('/forum/')){
							thread.find('.whirlpoolLastRead_controls').append('<br /><a href="#" class="whirlpoolLastRead_markAsRead" title="Mark this thread as read">M</a>');
						}
						
					}else{
						//all posts have been read
						if(WhirlpoolPlus.get('wlr_display_onlyEndSquare')){
							thread.find('td.goend').addClass('whirlpoolLastRead_noUnreadPosts');
						}else{
							thread.find('td').addClass('whirlpoolLastRead_noUnreadPosts');
						}
					}
					
					thread.find('.whirlpoolLastRead_stopTracking').click(function(){
						features.whirlpoolLastRead.stopTracking(threadNumber);
						thread.children().removeClass('whirlpoolLastRead_unreadPosts whirlpoolLastRead_noUnreadPosts');
						thread.find('.whirlpoolLastRead_controls').remove();
						return false;
					});
					
					thread.find('.whirlpoolLastRead_markAsRead').click(function(){					
						features.whirlpoolLastRead.markAsRead(threadNumber);
						thread.children('.whirlpoolLastRead_unreadPosts').removeClass('whirlpoolLastRead_unreadPosts').addClass('whirlpoolLastRead_noUnreadPosts');
						thread.find('.whirlpoolLastRead_controls .whirlpoolLastRead_markAsRead').remove();
						return false;
					});
					
				}
			}
		});
		
	},
	
	stopTracking : function(threadNumber){
		WhirlpoolPlus.tools.sync.remove(threadNumber);
		WhirlpoolPlus.tools.sync.sync();
	},
	
	markAsRead : function(threadNumber){
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
		WhirlpoolPlus.tools.sync.set(threadNumber,{t : numberOfReplies, p : pageNumber })
		
		//change the link
		var link = '/forum-replies.cfm?t=' + threadNumber + '&p=' + pageNumber + '#r' + numberOfReplies;
		threadLink.closest('tr').find('.goend > a').prop('href',link);
		
		WhirlpoolPlus.tools.sync.sync();
		
		return false;
	},
	
	runPosts : function(){
		if(WhirlpoolPlus.get('wlr_enabled')){	
			//scroll to the post that we were actually sent to
			if(window.location.hash){
				$(WhirlpoolPlus.window).load(function(){
					var location = $(window.location.hash);
					if(location.length > 0){
						$(WhirlpoolPlus.window).scrollTop(location.offset().top);
					}
				});
			}
		
			this.forumReplies();
		}
	},
	
	runThreads : function(){
		if(WhirlpoolPlus.get('wlr_enabled')){
			features.whirlpoolLastRead.forumPage();
		}
	}
	
};	

features.enhancedCompose = {

	_isPreview : false,
	_replyPreview : function(replyContents,waitTime){
		if(!this._isPreview){
			//Create the preview row
			$('#replies .reply:last').after('<div class="reply" id="quickReply_preview">' + 
				'<div class="replymeta"><div class="replyuser"><div class="replyuser-inner"></div></div>' + 
				'<div class="replytools"><div class="replytools-inner"></div></div></div><div class="replytext bodytext"></div></div>');
			
			$('#quickReply_preview').hide();
			
			this._isPreview = true;
		}
		
		if(typeof waitTime == 'undefined'){
			waitTime = 600;
		}
		
		var previewRow = $('#quickReply_preview');
		var previewContainer = $('#quickReply_preview .replytext');
		
		var previewTimer;
		var previewWait = false;
		if (!previewWait) {
			previewWait = true;
			previewTimer = setTimeout(function(){
				var replyText = replyContents.val();
				
				if(replyText == ''){
					$('#quickReply_preview').hide();
				}else{
					previewContainer.html(features.enhancedCompose._textProcess(replyText));
					$('#quickReply_preview').show();
				}
				
				previewWait = false;
			},
			waitTime);
		}
	},
	
	_textProcess : function(text){
		text = unsafeWindow.whirlcode2(text); //use default settings
		text = display.emoticons.run(text);
		return text;
	},
	
	css : function(){
		return '#quickReply_whirlcode { text-align: center; padding-top: 20px; }' +
			'#quickReply_container { margin: 10px 232px; }' +
			'#quickReply_contents { min-height: 150px; width: 100%; background-color: #E5E5E5; border: 1px solid #808080; }' +
			'#quickReply_controls { width: 100%; margin: 1px; }' +
			'#quickReply_controls button { width:150px; font:16px Arial; }' +
			'.quickReply_control_container { width: 50%; display: inline-block; text-align: center; }' +
			'.quickReply_focused { background: #E5E5E5 url(' + WhirlpoolPlus.image('focusedthread') + ') no-repeat scroll center center; }' +
			'.quickReply_posting { background: #E5E5E5 url(' + WhirlpoolPlus.image('waiting') + ') no-repeat scroll center center; }' +
		'.quickReply_whirlcodeButton_emoticon img { height: 15px; } ' +
			'.quickReply_whirlcodeButton_emoticon { padding: 0px; height: 25px; } '+
		'#reply #quickReply_whirlcode { text-align: center; padding-top: 20px; }' +
			'#reply #quickReply_whirlcode button { padding: 0; }';
	},
	
	quickReply : function(){
		
		if(WhirlpoolPlus.get('compose_quickReply')){
			
			//Check if this thread can be replied to
			var replyLinkObject = $('.foot_reply a');
			var replyLink = false;
			
			if(replyLinkObject.length == 1){
				replyLink = replyLinkObject.prop('href');
			}
			
			if(replyLink != false){
				$('#replies').append('<div id="quickReply"><div id="quickReply_whirlcode"></div><div id="quickReply_container"><textarea id="quickReply_contents"></textarea><div id="quickReply_controls"><div class="quickReply_control_container"><button id="quickReply_clear">Clear</button></div><div class="quickReply_control_container"><button id="quickReply_post">Post Reply</button></div></div></div></div>');
				
				var replyContents = $('#quickReply_contents');
				
				if(WhirlpoolPlus.title.match(' - Focused - The Pool Room')){
					replyContents.addClass('quickReply_focused');
				}
				
				this.addWhirlcodeControls('#quickReply_whirlcode',replyContents);
				this._quickQuote(replyContents);
				
				//Load backup
				if(replyContents.val() == ''){
					replyContents.val(WhirlpoolPlus.get('compose_quickReply_backup'));
				}
				
				//Setup autosize
				if(WhirlpoolPlus.get('compose_autoExpand')){
					replyContents.autosize({append : '\n'});
				}
				
				//On change
				replyContents.keyup(function(){
					WhirlpoolPlus.set('compose_quickReply_backup',replyContents.val());
					if(WhirlpoolPlus.get('compose_quickReply_preview')){
						features.enhancedCompose._replyPreview(replyContents);
					}
				});
				
				//The clear button
				$('#quickReply_clear').click(function(){
					//Clear the textarea, and simulate a keypress
					replyContents.val('');
					features.enhancedCompose._forceUpdate(replyContents);
				});
				
				//Prepare to submit post
				var startTime = this._getFormattedTime();
				var whirlcodeOptions = 'modewc=true&modeht=true&modewl=true&modest=true';
				
				$('#quickReply_post').click(function(){
					if(replyContents.val() == ''){
						alert('WP+: Quick Reply is empty- cannot post');
						return;
					}
				
					features.enhancedCompose._submitPost(replyContents,replyLink,startTime,whirlcodeOptions);
				});
				
				$(WhirlpoolPlus.document).keydown(function(event){
					if(event.ctrlKey == 1 && event.keyCode == 13) {
						features.enhancedCompose._submitPost(replyContents,replyLink,startTime,whirlcodeOptions);
					}
				});
				
			}
		}
		
	},
	
	_submitPost : function(textarea,replyUrl,startTime,whirlcodeOptions){
		textarea.addClass('quickReply_posting').prop('readonly','readonly');
		
		//Simulate a post
		$.get(replyUrl, function(data){
		
			var tinkle = data.split('name="tinkle" value="')[1].split('">')[0];
			
			if(WhirlpoolPlus.get('autoSubscribeToNewThread')){
				whirlcodeOptions += '&modesu=true'
			}
			
			$.ajax({
				type: 'POST',
				url: replyUrl,
				data: 'version=3&post2=post&form=too+right&tinkle=' + tinkle + '&poll_enabled=false&poll_choice_size=0&timestart=%7Bts+%27' + encodeURIComponent(startTime) + '%27%7D&body=' + encodeURIComponent(textarea.val()) + '&' +  whirlcodeOptions + '&cliptemp=Paste+external+quotes+here',
				success: function(msg){
					textarea.removeClass('quickReply_posting').prop('readonly','');
				
					if (msg.indexOf('You are quoting significantly more words than you have written.') != -1){
						alert('WP+: Could not submit reply- Overquoting');
					}else{
						//Post successful
						
						//Erase textarea
						textarea.val('');
						//This will update the backup, and remove the preview
						features.enhancedCompose._replyPreview(textarea,0);
						features.enhancedCompose._forceUpdate(textarea);
						
						if (WhirlpoolPlus.get('compose_quickReply_goToEndAfterPost')){
							window.location = 'http://forums.whirlpool.net.au/forum-replies.cfm?t=' + WhirlpoolPlus.tools.getThreadNumber() + '&p=-1&#bottom';
						}else{
							//Need to get the last post for the user
							$.get(
								'http://forums.whirlpool.net.au/forum-replies.cfm?t=' + WhirlpoolPlus.tools.getThreadNumber() + '&p=-1',
								function(data){
									$('#previewTR').remove();
									var newPost = $(data).find('#replylist .reply:last');
									var replyNumberLinks = newPost.prevAll('a[name!="bottom"]');
									var quickEdit = $('<br><a class="wpp-edit">(quick edit)</a>').on('click', features.quickEdit._onClick);
									
									newPost.find('.actions a[href^="/forum/index.cfm?action=edit"]').after(quickEdit);
									
									$('#replylist .reply:last').after(newPost).after(replyNumberLinks[0]).after(replyNumberLinks[1]);
									
									features.avatar.avatariseRow(newPost);
									features.userNotes.runOnReply(newPost);
								}
							);
						}
					}
				},
				error: function (XMLHttpRequest, textStatus, errorThrown) {
					alert('WP+: Could not submit reply- Unknown Error. Please try again.');
				}
			});
		});
	},
	
	_getFormattedTime : function(){
		var xDate = new Date();
		var gF = xDate.getFullYear();
		var gM = xDate.getMonth() + 1;
		var dArr = ['' + gM + '', '' + xDate.getDate() + '', '' + xDate.getHours() + '', '' + xDate.getMinutes() + '', '' + xDate.getSeconds() + ''];

		for (var i = 0; i < dArr.length; i++) {
			if (dArr[i].length == 1) {
				dArr[i] = '0' + dArr[i];
			}
		}
		
		return gF + "-" + dArr[0] + "-" + dArr[1] + "+" + dArr[2] + ":" + dArr[3] + ":" + dArr[4];
	},
	
	_basicWhirlcode : {
		bold : { left : '[*', right : '*]', name : 'Bold' },
		italic : { left : '[/', right : '/]', name : 'Italic' },
		super : { left : '[^', right : '^]', name : 'Super' },
		sub : { left : '[\\', right : '\\]', name : 'Sub' },
		strike : { left : '[-', right : '-]', name : 'Strike' },
		small : { left : '[(', right : ')]', name : 'Small' },
		courier : { left : '[#', right : '#]', name : 'Courier' },
		serif : { left : '[~', right : '~]', name : 'Serif' },
		orange : { left : '[\'', right : '\']', name : '\'Orange\'' },
		blue : { left : '["', right : '"]', name : '"Blue"' },
		grey : { left : '[`', right : '`]', name : '`Grey`' },
		
	},
	
	_advancedWhirlcode : {
		google : { left : '[?', right : '?]', name : 'Google', callback : function(){}, },
		wiki : { left : '[[', right : ']]', name : 'Wiki', callback : function(){}, },
		spoiler : { left : '[_', right : '_]', name : 'Spoiler', callback : function(){}, },
		url : { left: '', right : '', name : 'URL', callback : function(textarea,start,end,selection){
			if(selection == ''){
				alert('WP+: Please select text to turn into a link');
				return;
			}
		
			var urlPrompt = window.prompt('Enter URL:', 'http://');
			
			if ((urlPrompt !== 'http://') && (urlPrompt != '') & (urlPrompt != null)) {
				features.enhancedCompose._insert(textarea,'<a href="' + urlPrompt + '">' + selection + '</a>',start,end);
			}
		}, },
		link : { left: '', right : '', name : 'Link', callback : function(textarea,start,end,selection){
		
			if(selection == ''){
				alert('WP+: Please select a url');
				return;
			}
			
			var linkPrompt = window.prompt('Enter Text:', '');
			
			if ((linkPrompt != '') & (linkPrompt != null)) {
				if (selection.indexOf('http://') < 0) {
					selection = 'http://' + selection;
				}
				
				features.enhancedCompose._insert(textarea,'<a href="' + selection + '">' + linkPrompt + '</a>',start,end);
			}
		}, },
		escape : { left: '', right : '', name : 'Escape Whirlcode', callback : function(textarea,start,end,selection){
			if(selection == ''){
				alert('WP+: Please make a selection to escape Whirlcode');
				return;
			}
		
			features.enhancedCompose._insert(textarea,selection.replace(/\[([^\.])/mg,'[.$1').replace(/([^\.])]/mg,'$1.]'),start,end);
		}, },
		hr : { left: '', right : '', name : 'Horizontal Rule', callback : function(textarea,start,end,selection){
			features.enhancedCompose._insert(textarea,'\n-----\n',end,end);
		}, },
		code : { left: '', right : '', name : 'Code Block', callback : function(textarea,start,end,selection){
			var lineBegin;
			if(textarea.val().charAt(start) == '\n'){
				lineBegin = textarea.val().lastIndexOf('\n',start);
			}else{
				lineBegin = textarea.val().lastIndexOf('\n',start-1);
			}
		
			if(lineBegin > 0){
				features.enhancedCompose._insert(textarea,'\n$ ',lineBegin,lineBegin+1);
			}else{
				features.enhancedCompose._insert(textarea,'$ ',0,0);
			}
		}, },
	},
	
	addWhirlcodeControls : function(locationID,textarea){	
		var controls = '';
		
		//Generate first row - basic controls
		for(i in this._basicWhirlcode){
			var code = this._basicWhirlcode[i];
			controls += '<button type="button" data-type="basic" data-code="' + i + '" class="quickReply_whirlcodeButton" title="' + code.name + '">' + code.name + '</button>';
		}
		
		controls += '<br/>';
		
		//Generate second row - advanced controls
		for(i in this._advancedWhirlcode){
			var code = this._advancedWhirlcode[i];
			controls += '<button type="button" data-type="advanced" data-code="' + i + '" class="quickReply_whirlcodeButton" title="' + code.name + '">' + code.name + '</button>';
		}
		
		if(WhirlpoolPlus.get('display_emoticons_enabled') && WhirlpoolPlus.get('compose_quickReply_emoticons')){
			controls += '<br/>';
			
			//Generate third row - emoticons
			icons = display.emoticons.getIconSet(false);
			for (icon in icons) {
				controls += '<button type="button" data-type="emoticon" data-code="' + icon.replace('\\\\','\\') + '" class="quickReply_whirlcodeButton quickReply_whirlcodeButton_emoticon"><img src="' + icons[icon] +  '"/></button>';
			}
		}
		
		$(locationID).append(controls);
		
		//Set up the event callback
		$('.quickReply_whirlcodeButton').mouseup(function(){
			//Information about the event
			var theButton = $(this);
			var type = theButton.data('type');
			var code = theButton.data('code');
			var left, right;
			
			if(type == 'basic'){
				left = features.enhancedCompose._basicWhirlcode[code].left;
				right = features.enhancedCompose._basicWhirlcode[code].right;
			}else if(type == 'advanced'){
				left = features.enhancedCompose._advancedWhirlcode[code].left;
				right = features.enhancedCompose._advancedWhirlcode[code].right;
			}
			
			
			//Information about the current selection
			textarea.focus();
			var selectionStart = textarea[0].selectionStart;
			var selectionEnd = textarea[0].selectionEnd;
			var selection = textarea.val().substring(selectionStart,selectionEnd);
			
			if(type == 'basic' || type == 'advanced'){	
				if(selection == ''){
					if((textarea.val().split(left).length + textarea.val().split(right).length) % 2 == 0){
						features.enhancedCompose._insert(textarea,left,selectionStart,selectionEnd);
					}else{
						features.enhancedCompose._insert(textarea,right,selectionStart,selectionEnd);
					}
				}else{
					features.enhancedCompose._insert(textarea,selection.replace(/^(.+)/mg,left + '$1' + right),selectionStart,selectionEnd);
				}
				
				if(type == 'advanced'){
					features.enhancedCompose._advancedWhirlcode[code].callback(textarea,selectionStart,selectionEnd,selection);
				}
			}else if(type == 'emoticon'){
				features.enhancedCompose._insert(textarea,code + ' ',selectionEnd,selectionEnd);
			}
			
		});
		
	},
	
	_insert : function(textarea,value,start,end){
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
		textareaDOM.setSelectionRange(cursorPos,cursorPos);
		textarea.scrollTop(scrollPos);
		
		this._forceUpdate(textarea);
	},
	
	_forceUpdate : function(textarea){
		textarea.trigger('keyup');
		textarea.trigger('autosize');
		textarea.trigger('focus');
	},
	
	_quickQuote : function(textarea){
		$('.tools .greylink:first-child').after('<span class="bar"> | </span><a class="quickReply_quote greylink" href="#">q-quote</a>');
		
		$('.quickReply_quote').click(function(){
			var selectionParent = $(WhirlpoolPlus.window.getSelection().getRangeAt(0).commonAncestorContainer.parentNode).closest('div.reply');
			
			if(selectionParent.length != 1){
				alert('WP+: Cannot quote across multiple posts, or outside posts');
				return false;
			}
			
			var replyID = selectionParent.prop('id').split('r')[1];
			var username = selectionParent.find('.bu_name').text();
			
			var quotation = window.getSelection().toString().replace(/^(.+)$/mg, '["$1"]');
			
			if(textarea.val() == ''){
				textarea.val(textarea.val() + '@' + replyID + ' ' + username + ' writes... \n' + quotation + '\n\n');
			}else{
				textarea.val(textarea.val() + '\n@' + replyID + ' ' + username + ' writes... \n' + quotation + '\n\n');
			}
			
			features.enhancedCompose._forceUpdate(textarea);
			
			return false;
		});
		
	},
	
	generalCompose : function(id){
		if(WhirlpoolPlus.get('compose_enhancedEditor')){
			
			var textarea = $(id);
			textarea.before('<div id="quickReply_whirlcode">');
			
			this.addWhirlcodeControls('#quickReply_whirlcode',textarea);
			
			if(typeof unsafeWindow.doPreview == 'function'){
				$('.quickReply_whirlcodeButton').mouseup(function(){
					unsafeWindow.doPreview();
				});
			}
		}
	}
	
};

features.userNotes = {

	_notes : WhirlpoolPlus.get('userNotes'),
	
	_setNotes : function(user,notes){
		if(notes == ''){
			delete this._notes[user];
		}else{
			this._notes[user] = notes;
		}
		
		WhirlpoolPlus.set('userNotes',this._notes);
	},

	css : function(){
		return '.userNotes_button { display: inline-block; cursor: pointer; width: 16px; height: 16px;}' +
			'.userNotes_button_notes { background-image: url(' + WhirlpoolPlus.image('red_note') + '); }' +
			'.userNotes_button_noNotes { background-image: url(' + WhirlpoolPlus.image('green_note') + '); }' +
			'.userNotes_dialog textarea { width: 100%; height: 250px; }' +
			'.userNotes_close { width: 100%; text-align: right; padding-bottom: 5px; font-weight: bold; cursor: pointer; }';
	},
	
	runOnReply : function(reply){
		if(!WhirlpoolPlus.get('userNotes_enabled')){
			return;
		}
	
		var userNumber = WhirlpoolPlus.tools.getUserNumber(reply);
		var userNotesClass = 'userNotes_button_noNotes';
		
		if(userNumber in this._notes){
			userNotesClass = 'userNotes_button_notes';
		}
		
		var userNotesButton = $('<span class="userNotes_button ' + userNotesClass + '" data-userNumber="' + userNumber + '" data-replyID="' + reply.prop('id') + '"></div>');
		
		reply.find('.userstats').append(userNotesButton);
		
		userNotesButton.click(function(){
			var notebox = $('<textarea id="userNotes_notes">');
			var dialog = $('<div class="userNotes_dialog">').append(notebox);
			
			dialog.modal({
				close: true,
				closeHTML : '<div class="userNotes_close">Close</div>',
				containerCss : {
					height: '280px',
				},
				onClose : function(){
					features.userNotes._setNotes(userNumber,notebox.val());
					
					if(notebox.val() == ''){
						userNotesButton.removeClass('userNotes_button_notes').addClass('userNotes_button_noNotes');
					}else{
						userNotesButton.removeClass('userNotes_button_noNotes').addClass('userNotes_button_notes');
					}
					
					$.modal.close();
				}
			});
			
			if(userNumber in features.userNotes._notes){
				notebox.val(features.userNotes._notes[userNumber]);
			}
		});
		
	},

};

var settings = {
	
	css : function(){
		var styles = '#wppSettings { background-color:#999; border:1px solid #000; color:#333; padding:0 12px; height: 540px; width: 800px; }' + 
		'#wppSettings #wppSettingsWrapper { overflow: hidden; width: 100%; height: 100%; }' + 
		'#wppSettings #tabMenu { list-style:none; float:left; margin: 14px 0px 0px 32px; }' + 
		'#wppSettings .menuTab { border:3px solid #777; border-width:3px 3px 1px; float:left; height:20px; margin-right:10px; padding:5px; width:140px; text-align:center; color:white; }' + 
		'#wppSettings .menuTab_active { background-color:orange; border:3px solid #555; border-width:3px 3px 1px; }' + 
		'#wppSettings .menuTab:hover { cursor:pointer; border:3px solid #555; border-width:3px 3px 1px; }' + 
		'#wppSettings p { border-bottom:1px dashed grey; margin-left:15px; margin-right:15px; padding-bottom:15px; }' + 
		'#wppSettings p:last-child { border-bottom: none; }' + 
		'#wppSettings p.description { border-bottom: none; margin-left:15px; padding-bottom:5px; }' + 
		'#wppSettings .settingDesc { font-style: italic; float: right; padding-right: 5px; }' + 
		'#wppSettings .subSettings_heading { cursor: pointer; margin: 5px 8px; text-align:center; }' + 
		'#wppSettings .subSettings_content { display: none; }' + 
		'#wppSettings .subSettings { border:1px solid #777; border-radius:5px; background-color: #bbb; margin: 5px; }' + 
		'#wppSettings .menuDiv { width: 794px; height:440px; display: none; overflow-y:scroll; float:left;border:3px solid #333;background-color:#EEEEEE;margin-bottom:5px; }' + 
		'#wppSettings .menuDiv_active { display: block; }' + 
		'#wppSettings .tabDescription { text-align: center; font-style: italic; }' + 
		'#wppSettings .wpp_settingsMessage { text-align: center; font-weight: bold; padding: 5px 10px;}' + 
		'#currentUserAvatar { background-image: url("' + WhirlpoolPlus.image('noavatar') + '"); height: 80px; width: 80px; margin: 0 auto; }' +
		'#wppSettings #currentAvatars { width: 200px; margin: 0 auto; background: url("/img/forum/reply-e5e5e5.gif") repeat-x scroll center top #E5E5E5; padding: 5px 20px; border-radius: 4px; }' +
		'#wppSettings #currentAvatars:after { content: ""; display: table; clear: both; }' +
		'#wppSettings .avatar { background-image: url("' + WhirlpoolPlus.image('noavatar') + '"); height: 80px; width: 80px; margin: 0 auto; }' +
		'#wppSettings .avatarLabel { font-weight: bold; width: 80px; margin: 0 auto; text-align: center; padding-bottom: 10px; }' +
		'#wppSettings .avatarLabel { font-weight: bold; width: 80px; margin: 0 auto; text-align: center; padding-top: 10px; }';
		
		
		if(!WhirlpoolPlus.pageType.forums){
			styles += '.wpp_hideNotForum { display: none; }';
		}else{
			styles += '.wpp_showNotForum { display: none; }';
		}
		
		return styles;
	},
	
	init : function(){
		// Add settings link
		var settingsLink = $('<li id="menu_wpplus" class="even"><a class="xx" href="#"><span id="wpsettingslink">WP+ Settings</span></a><span class="shim1"></span></li>');
		$('#menu_industry').after(settingsLink);
		
		settingsLink.click(function(){
			settings._launch();
			return false;
		});
	},
	
	//this._html added below
	
	_launch : function(){
		//If the settings box is in minimal mode, it will show far less settings
		var minimalMode = !WhirlpoolPlus.pageType.forums;
		
		var dialog = $(this._html);
		
		var currentSyncServer = WhirlpoolPlus.get('sync_server');
		var currentSyncEncryptionKey = WhirlpoolPlus.get('sync_encryptionKey');
		var currentTheme = WhirlpoolPlus.get('display_theme');
		
		dialog.modal({
			close: true,
			containerId : 'wppSettings',
			onShow : function(){
				var settings = WhirlpoolPlus.pageType.forums ? $('.wpp_setting') : $('.wpp_setting').not('.wpp_forumSetting');
			
				settings.each(function(){
					var setting = $(this);
					var settingValue = WhirlpoolPlus.get(setting.prop('id'));
					
					if(setting.is('input[type="checkbox"]')){
						setting.prop('checked',settingValue);
					}else{
						setting.val(settingValue);
					}
				});
			},
		});
		
		
		if(!minimalMode){
			$('#sync_server').val(currentSyncServer);
			$('#sync_encryptionKey').val(currentSyncEncryptionKey);
		
		
			var hiddenUsersHTML = '';
			var hiddenUsers = WhirlpoolPlus.get('hiddenUsers');
			
			for(i = 0; i < hiddenUsers.length; i++){
				hiddenUsersHTML += '<p>User <a href="http://forums.whirlpool.net.au/user/' + hiddenUsers[i] + '" target="_blank">' + hiddenUsers[i] + '</a> <button type="button" class="unhideUser" data-userid="' + hiddenUsers[i] + '">Unhide</button></p>';
			}
			
			$('#hiddenUsers').append(hiddenUsersHTML);
		}
		
		//Set up events
		$('#wppSettings .subSettings_heading').click(function(){
			var content = $(this).parent().children('.subSettings_content');
			
			if(content.is(':visible')){
				$('.subSettings_content').hide();
			}else{
				$('.subSettings_content').hide();
				content.show();
			}
		});
		
		$('#wppSettings .menuTab').click(function(){
			var theTab = $(this);

			$('.menuDiv').removeClass('menuDiv_active');
			$('.menuTab').removeClass('menuTab_active');
			
			theTab.addClass('menuTab_active');
			$('#' + theTab.data('menudiv')).addClass('menuDiv_active');
		});
				
		$('#wppSettings_save').click(function(){
			
			var settings = WhirlpoolPlus.pageType.forums ? $('.wpp_setting') : $('.wpp_setting').not('.wpp_forumSetting');
			
			settings.each(function(){
				var setting = $(this);
				var settingKey = setting.prop('id');
				var settingValue;
				
				if(setting.is('input[type="checkbox"]')){
					settingValue = setting.prop('checked');
				}else{
					settingValue = setting.val();
				}
				
				WhirlpoolPlus.set(settingKey,settingValue);
			});
			
			if(!minimalMode){
				var newSyncServer = $('#sync_server').val();
				var newSyncEncryptionKey = $('#sync_encryptionKey').val();
				
				if(newSyncServer != currentSyncServer){
					WhirlpoolPlus.set('sync_server',newSyncServer);
					WhirlpoolPlus.set('sync_lastSync',0);
				}
				
				if(newSyncEncryptionKey != currentSyncEncryptionKey){
					if(confirm('You\'ve changed your encryption password. For this to work, make sure that no other password has been used with this account. For more information, see the wiki article.')){
						WhirlpoolPlus.set('sync_encryptionKey', newSyncEncryptionKey);
					}else{
						alert('Encryption Password reverted');
					}
				}
				
				var newTheme = WhirlpoolPlus.get('display_theme');
				if(newTheme != currentTheme){
					if(confirm('Would you like to load the suggested WLR highlight colours for your theme?')){
						var newPostColour, noNewPostColour, postBackgroundColour;
						
						switch(newTheme){
							case 'blue':
								newPostColour = '#79A1FC';
								noNewPostColour = '#BEDBFA';
								postBackgroundColour = '#DEE6FA';
							break;

							case 'teal':
								newPostColour = '#B2F8F8';
								noNewPostColour = '#99C5CB';
								postBackgroundColour = '#D2E5E2';
							break;
							
							case 'black':
								newPostColour = '#FFFFFF';
								noNewPostColour = '#555555';
								postBackgroundColour = '#A1A1A1';
							break;		
							
							case 'green':
								newPostColour = '#4DA255';
								noNewPostColour = '#B9E3BD';
								postBackgroundColour = '#B6FCBC';
							break;		
							
							case 'purple':
								newPostColour = '#B580F3';
								noNewPostColour = '#E6D1FF';
								postBackgroundColour = '#E6D1FF';
							break;		
							
							case 'classic':
								newPostColour = '#79A1FC';
								noNewPostColour = '#EAA53F';
								postBackgroundColour = '#DEE6FA';
							break;
							
							case 'default':
							default:
								newPostColour = '#95B0CB';
								noNewPostColour = '#CBC095';
								postBackgroundColour = '#CFCBBC';
							break;
						}
						
						WhirlpoolPlus.set('wlr_display_unreadThreadColour',newPostColour);
						WhirlpoolPlus.set('wlr_display_readThreadColour',noNewPostColour);
						WhirlpoolPlus.set('wlr_display_unreadPostColour',postBackgroundColour);
					}
				}
				
				$.modal.close();
				document.location.reload();
			}else{
				$.modal.close();
				document.location.reload();
			}
		});
		
		$('#wppSettings_reset').click(function(){
		
			if(confirm('WP+: Do you really want to delete all data?')){
				unsafeWindow.localStorage.clear();
				alert('WP+: Script data cleared');
				window.location.reload();
			}else{
				alert('WP+: No data cleared');
			}
		
		});
		
		//Special events
		
		
		if(!minimalMode){
			//Sync Settings
			$('#wppSettings #sync_enabled').change(function(){
				if(this.checked){
					$('.syncSetting').prop('disabled','');
				}else{
					$('.syncSetting').prop('disabled','disabled');
				}
			}).change();
			
			function refreshAvatars(){
				//Load the two avatars
				features.avatar.getUserAvatar(WhirlpoolPlus.tools.getUserID(),'static',function(data,textStatus,r){
					var url = r.responseText;
					
					if(url != ''){
						$('#currentAvatar_static').css('background-image','url("' + url + '")');
						$('#currentAvatar_removeStatic').prop('disabled',null);
					}else{
						$('#currentAvatar_static').css('background-image','');
						$('#currentAvatar_removeStatic').prop('disabled','disabled');
					}
				});
				
				features.avatar.getUserAvatar(WhirlpoolPlus.tools.getUserID(),'animated',function(data,textStatus,r){
					var url = r.responseText;
					
					if(url != ''){
						$('#currentAvatar_animated').css('background-image','url("' + url + '")');
						$('#currentAvatar_removeAnimated').prop('disabled',null);
					}else{
						$('#currentAvatar_animated').css('background-image','');
						$('#currentAvatar_removeAnimated').prop('disabled','disabled');
					}
				});
			}
			
			refreshAvatars();
			
			//Avatar controls
			$('#currentAvatar_removeStatic').click(function(){
				$(this).prop('disabled','disabled');
				
				var apiKey = WhirlpoolPlus.get('whirlpoolAPIKey');
				
				if(apiKey == ''){
					apiKey = prompt('As you haven\'t saved your API key in the settings dialog, you\'ll need to provide one to update your avatar. It will not be stored.');
				}
				
				if(apiKey != null){
					WhirlpoolPlus.notify('Removing Avatar',true,5000);
					features.avatar.removeAvatar(apiKey,'static',function(data,statusText,r){
						if(r.status == 200 && (r.responseText == 'Avatar Removed')){
							alert('WP+: ' + r.responseText);
						}else{
							alert('WP+: Avatar Update Failed: ' + r.responseText)
						}
						
						//Will re-enable button
						refreshAvatars();
					});
				}else{
					$(this).prop('disabled',null);
					alert('WP+: Avatar not removed');
				}
			});
			
			$('#currentAvatar_removeAnimated').click(function(){
				$(this).prop('disabled','disabled');
			
				var apiKey = WhirlpoolPlus.get('whirlpoolAPIKey');
				
				if(apiKey == ''){
					apiKey = prompt('As you haven\'t saved your API key in the settings dialog, you\'ll need to provide one to update your avatar. It will not be stored.');
				}
				
				if(apiKey != null){
					WhirlpoolPlus.notify('Removing Avatar',true,5000);
					features.avatar.removeAvatar(apiKey,'animated',function(data,statusText,r){
						if(r.status == 200 && (r.responseText == 'Avatar Removed')){
							alert('WP+: ' + r.responseText);
						}else{
							alert('WP+: Avatar Update Failed: ' + r.responseText)
						}
						
						//Will re-enable button
						refreshAvatars();
					});
				}else{
					$(this).prop('disabled',null);
					alert('WP+: Avatar not removed');
				}
			});	

			$('#currentAvatar_add').click(function(){
				$(this).prop('disabled','disabled');
			
				var apiKey = WhirlpoolPlus.get('whirlpoolAPIKey');
				
				if(apiKey == ''){
					apiKey = prompt('As you haven\'t saved your API key in the settings dialog, you\'ll need to provide one to update your avatar. It will not be stored.');
				}
				
				if(apiKey != null){
					url = $('#currentAvatar_addUrl').val();
					
					if(url == ''){
						alert('WP+: Enter a url to add');
					}else{
					
						WhirlpoolPlus.notify('Adding Avatar',true,5000);
						
						features.avatar.updateAvatar(apiKey,url,function(data,statusText,r){
							if(r.status == 200 && (r.responseText == 'Avatar created/updated')){
								alert('WP+: ' + r.responseText);
							}else{
								alert('WP+: Avatar Update Failed: ' + r.responseText)
							}
							
							$('#currentAvatar_addUrl').val('');
							refreshAvatars();
							
							$('#currentAvatar_add').prop('disabled',null);
						});
					
					}
				}else{
					$(this).prop('disabled',null);
					alert('WP+: Avatar not updated');
				}
			});
			
			
			$('.unhideUser').click(function(){
				var theButton = $(this);
				var userID = theButton.data('userid');
				var hiddenUsers = WhirlpoolPlus.get('hiddenUsers');
				var idToDelete = -1;
				
				for(i = 0; i < hiddenUsers.length; i++){
					if(hiddenUsers[i] == userID){
						idToDelete = i;
						break;
					}
				}
				
				if(idToDelete >= 0){
					hiddenUsers.splice(idToDelete,1);
				}
				
				WhirlpoolPlus.set('hiddenUsers',hiddenUsers);
				
				theButton.parent().remove();
				
			});
		}
	}
};

//The settings box html. Braces used to allow block-collapsing in text editor
{
settings._html = '<div id="wppSettingsWrapper">' +
	'<ul id="tabMenu">' +
		'<li class="menuTab menuTab_active" data-menudiv="menuDiv_forums">Forums</li>' +
		'<li class="menuTab wpp_hideNotForum" data-menudiv="menuDiv_threads">Threads</li>' +
		'<li class="menuTab" data-menudiv="menuDiv_posts">Posts</li>' +
		'<li class="menuTab" data-menudiv="menuDiv_help">Info</li>' +
	'</ul>' +

	'<div class="menuDiv menuDiv_active" id="menuDiv_forums">' +
		
		'<div class="wpp_showNotForum wpp_settingsMessage">Only a limited subset of features are available outside the forums.whirlpool.net.au subdomain</div>' +
		
		'<div class="subSettings">' +
			'<p class="subSettings_heading description wpp_hide"><b>Script Configuration</b></p>' +
			'<div class="subSettings_content">' +

			'<p class="wpp_hideNotForum">' +
				'<input class="wpp_setting wpp_forumSetting" type="checkbox" id="autoUpdate_enabled">' +
				' <label for="autoUpdate_enabled">Automatic updater</label>' +
				' <a href="http://userscripts.org/scripts/source/85217.user.js" id="force_update">Force Update</a>' +
				' <span class="settingDesc">Automatically update the script to the newest version</span>'+
			'</p>' +
			
			'<p>' +
				'<input class="wpp_setting" type="text" id="whirlpoolAPIKey">' +
				' <label for="whirlpoolAPIKey">Whirlpool API Key</label>' +
				' <span class="settingDesc">Used for features like the Recent Activity Overlay</span>'+
			'</p>' +
				
			'</div>' +
			
		'</div>' +
		
		'<div class="subSettings wpp_hideNotForum">' +
			'<p class="subSettings_heading description"><b>Synchronisation</b></p>' +
			'<div class="subSettings_content">' +
			
				'<p class="description">Script data can be synchronised between script installs through the use of a sync server. You can create an account at the default server at <a href="http://s.endorph.net/account/">http://s.endorph.net/account/</a></p>' +
			
				'<p>' +
					'<input class="wpp_setting wpp_forumSetting" type="checkbox" id="sync_enabled">' +
					'<label for="sync_enabled">Activate Synchronisation</label>' +
				'</p>' +
				
				'<p>' +
					// No wpp_setting class intentional
					'<input class="syncSetting wpp_forumSetting" type="text" id="sync_server"> ' +
					'<label for="sync_server">Server Address</label>' +
				'</p>' +
				
				'<p>' +
					'<input class="wpp_setting syncSetting wpp_forumSetting" type="text" id="sync_user"> ' +
					'<label for="sync_user">Whirlpool User ID</label>' +
				'</p>' +
				
				'<p>' +
					'<input class="wpp_setting syncSetting wpp_forumSetting" type="text" id="sync_key"> ' +
					'<label for="sync_key">Access Key</label>' +
				'</p>' +
				
				'<p>' +
					// No wpp_setting class intentional
					'<input class="syncSetting wpp_forumSetting" type="password" id="sync_encryptionKey"> ' +
					'<button type="button" id="showEncKey" onclick="$(\'#sync_encryptionKey\').prop(\'type\',\'text\'); $(\'#hideEncKey\').show(); $(\'#showEncKey\').hide();">Show</button> ' +
					'<button type="button" id="hideEncKey" style="display:none;" onclick="$(\'#sync_encryptionKey\').prop(\'type\',\'password\'); $(\'#hideEncKey\').hide(); $(\'#showEncKey\').show();">Hide</button> ' +
					'<label for="sync_encryptionKey">Encryption Password</label>' +
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
			
				'<p>' +
					'<input class="wpp_setting" type="checkbox" id="display_widescreen">' +
					'<label for="display_widescreen">Widescreen Display</label>' +
					' <span class="settingDesc">Stretch the website to fit the entire screen</span>'+
				'</p>' +
				
				'<p>' +
					'<input class="wpp_setting" type="checkbox" id="display_floatSidebar">' +
					'<label for="display_floatSidebar">Float the sidebar</label>' +
				'</p>' +
				
				'<p>' +
					'<select class="wpp_setting" id="display_theme">' +
						'<option value="default">Default (by Simon Wright)</option>' +
						'<option value="blue">WP Blue (by Foonly)</option>' +
						'<option value="teal">WP Teal (by =CHRIS=)</option>' +
						'<option value="black">WP Black (by =CHRIS=)</option>' +
						'<option value="green">WP Green (by =CHRIS=)</option>' +
						'<option value="wood">WP Wood (by =CHRIS=)</option>' +
						'<option value="purple">WP Purple (by =CHRIS=)</option>' +
						'<option value="classic">WP Classic (by Phyco)</option>' +
					'</select>' +
					' <label for="display_theme">Custom Theme</label>' +
				'</p>' +
				
				'<p>' +
					'<input class="wpp_setting" type="checkbox" id="display_showFooter">' +
					' <label for="display_showFooter">Show the forum footer</label>' +
				'</p>' +
				
				'<p>' +
					'<input class="wpp_setting" type="checkbox" id="display_noTextShadow">' +
					' <label for="display_noTextShadow">Remove Text Shadows</label>' +
				'</p>' +
				
				'<p>' +
					'<select class="wpp_setting" id="display_breadcrumbFont">' +
						'<option value="default font">default</option>' +
						'<option value="Verdana">Verdana</option>' +
						'<option value="Arial">Arial</option>' +
						'<option value="Georgia">Georgia</option>' +
						'<option value="Tahoma">Tahoma</option>' +
						'<option value="Trebuchet MS">Trebuchet MS</option>' +
					'</select>' +
					' <label for="display_breadcrumbFont">Choose Breadcrumb Font</label>' +
				'</p>' +
				
				'<p>' +
					'<select class="wpp_setting" id="display_sidebarFont">' +
						'<option value="default font">default</option>' +
						'<option value="Verdana">Verdana</option>' +
						'<option value="Arial">Arial</option>' +
						'<option value="Georgia">Georgia</option>' +
						'<option value="Tahoma">Tahoma</option>' +
						'<option value="Trebuchet MS">Trebuchet MS</option>' +
					'</select>' +
					' <label for="display_sidebarFont">Choose Sidebar Font</label>' +
				'</p>' + 
			
				'<p>' +
					'<input class="wpp_setting" type="checkbox" id="chatbox">' +
					' <label for="chatbox">Sidebar Chatbox</label>' +
					' <span class="settingDesc">You must agree to abide by the <a href="http://whirlpool.net.au/wiki/?tag=wpplus_chatbox_rules" target="_blank">chatbox rules</a></span>'+
				'</p> ' +
				
				'<p>' +
					'<input class="wpp_setting " type="checkbox" id="recentActivityOverlay">' +
					'<label for="recentActivityOverlay">Recent Activity Overlay</label>' +
					' <span class="settingDesc">Make sure you enter your API Key in the Script Configuration</span>'+
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
					'</select>' +
					' <label for="recentActivityOverlay_days">Recent Activity Duration</label>' +
					' <span class="settingDesc">How much of your recent activity to use for the overlay</span>'+
				'</p>' +
				
				'<p>' +
					'<input class="wpp_setting" type="checkbox" id="display_whimAlert">' +
					'<label for="display_whimAlert">Whim Notification</label>' +
					' <span class="settingDesc">Display a notification when you receive a new WHIM</span>'+
				'</p> ' +
				
				'<p>' +
					'<select class="wpp_setting" id="spinnerMenu">' +
						'<option value="none">none</option>' +
						'<option value="rightClick">Right Click</option>' +
						'<option value="spinner">Spinner</option>' +
					'</select>' +
					' <label for="spinnerMenu">Dynamic Menu System (select type)</label>' +
					' <span class="settingDesc">Display a dropdown navigation menu for the site</span>'+
				'</p>' +
				
				'<p>' +
					'<select class="wpp_setting" id="spinnerMenu_settingsLocation">' +
						'<option value="none">none</option>' +
						'<option value="top">Top</option>' +
						'<option value="underuser">Under User</option>' +
						'<option value="bottom">Bottom</option>' +
					'</select>' +
					' <label for="spinnerMenu_settingsLocation">Location of settings link in dynamic menu</label>' +
				'</p>' +
				
				'<p>' +
					'<span>Custom CSS</span>' +
					' <span class="settingDesc">Add custom styles to Whirlpool</span>'+
					'<br /><textarea class="wpp_setting" id="display_customCSS" style="width: 500px; height: 300px; margin:0 auto;"></textarea>' +
				'</p>' + 
				
			'</div>' +
			
		'</div>' +
							
		'<div class="subSettings">' +
			'<p class="subSettings_heading description"><b>Users</b></p>' +
			'<div class="subSettings_content">' +
			
				'<p class="wpp_hideNotForum">' +
					'<input class="wpp_setting wpp_forumSetting" type="checkbox" id="display_hideClosedThreadsOnProfile">' +
					' <label for="display_hideClosedThreadsOnProfile">Hide closed threads on user profiles</label>' +
				'</p>' +
				
				'<p class="wpp_hideNotForum">' +
					'<input class="wpp_setting wpp_forumSetting" type="checkbox" id="stats_postsPerDay">' +
					' <label for="stats_postsPerDay">Enable "Posts per day" statistic</label>' +
				'</p>' +
				
				'<p class="wpp_hideNotForum">' +
					'<input class="wpp_setting wpp_forumSetting" type="checkbox" id="display_userPageInfoToggle">' +
					'<label for="display_userPageInfoToggle">Hide/Toggle user info</label>' +
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
					'</select>' +
					' <label for="defaultRecentActivityDays">Default amount of recent activity to display on a user page</label>' +
				'</p>' +

				'<p class="wpp_hideNotForum">' +
					'<input class="wpp_setting wpp_forumSetting" type="checkbox" id="userNotes_enabled">' +
					' <label for="userNotes_enabled">User Notes</label>' +
				'</p> ' +
				
				'<p class="wpp_hideNotForum">' +
					'<input class="wpp_setting wpp_forumSetting" type="checkbox" id="resetAuraVote">' +
					' <label for="resetAuraVote">Add an Aura Reset smiley (?)</label>' +
				'</p> ' +
				
				'<p>' +
					'<input class="wpp_setting" type="checkbox" id="whimArchiveSort">' +
					'<label for="whimArchiveSort">Sort Whim archives in alphabetical order</label>' +
				'</p>' +
				
			'</div>' +
		'</div>' +
			
	'</div>' +

	'<div class="menuDiv wpp_hideNotForum" id="menuDiv_threads">' +
	
		'<div class="wpp_showNotForum wpp_settingsMessage">Only a limited subset of features are available outside the forums.whirlpool.net.au subdomain</div>' +
	
		'<div class="subSettings">' +
			'<p class="subSettings_heading description"><b>Thread Tracker (WLR)</b></p>' +
			'<div class="subSettings_content">' +
				'<p class="description">The thread tracker highlights threads you have viewed depending on whether there are new unread posts</p>' +
			
				'<p>' +
					'<input class="wpp_setting wpp_forumSetting" type="checkbox" id="wlr_enabled">' +
					' <label for="wlr_enabled">Activate tracker</label>' +
				'</p>     ' +
				
				'<p>' +
					'<input class="wpp_setting wpp_forumSetting" type="text" id="wlr_display_unreadThreadColour">' +
					' <label for="wlr_display_unreadThreadColour">Unread Posts Colour</label>' +
					' <span class="settingDesc">Used to highlight threads containing posts you haven\'t read</span>'+
				'</p>  ' +
				
				'<p>' +
					'<input class="wpp_setting wpp_forumSetting" type="text" id="wlr_display_readThreadColour">' +
					' <label for="wlr_display_readThreadColour">No Unread Posts Colour</label>' +
					' <span class="settingDesc">Used to highlight threads containing no unread posts</span>'+
				'</p>       ' +
			
				'<p>' +
					'<input class="wpp_setting wpp_forumSetting" type="checkbox" id="wlr_display_onlyEndSquare">' +
					' <label for="wlr_display_onlyEndSquare">Colour end square </label>' +
					' <span class="settingDesc">Just highlight the end square of tracked threads</span>'+
				'</p> ' +
				
				'<p>' +
					'<input class="wpp_setting wpp_forumSetting" type="checkbox" id="wlr_noTrackSticky">' +
					' <label for="wlr_noTrackSticky">Don\'t highlight sticky threads</label>' +
				'</p>' +
				
				'<p>' +
					'<input class="wpp_setting wpp_forumSetting" type="text" id="wlr_display_unreadPostColour">' +
					' <label for="wlr_display_unreadPostColour">Post Highlight Colour (Posts Pages)</label>' +
					' <span class="settingDesc">Used to highlight posts (right most column) on posts pages</span>'+
				'</p> ' +
				
				'<p>' +
					'<input class="wpp_setting wpp_forumSetting" type="checkbox" id="wlr_display_flipStyles">' +
					' <label for="wlr_display_flipStyles">Highlight unread posts instead of read posts (Posts Pages)</label>' +
				'</p>    ' +	
				
				'<p>' +
					'<input class="wpp_setting wpp_forumSetting" type="checkbox" id="wlr_tempDisable">' +
					' <label for="wlr_tempDisable">Add a button to temporarily disable the tracker (top right corner)</label>' +
				'</p>    ' +
				

			'</div>' +
			
		'</div>' +
		
		'<div class="subSettings">' +
			'<p class="subSettings_heading description"><b>Thread Settings</b></p>' +
			'<div class="subSettings_content">' +
			
				'<p>' +
					'<input class="wpp_setting wpp_forumSetting" type="text" id="display_hideTheseForums">' +
					' <label for="display_hideTheseForums">Forums to hide (on front page) </label>' +
					' <span class="settingDesc">Enter the ID\'s of the forums you want to hide (eg. "35 92 137")</span>'+
				'</p> ' +

				'<p>' +
					'<input class="wpp_setting wpp_forumSetting" type="checkbox" id="display_hideDeletedThreads">' +
					'<label for="display_hideDeletedThreads">Hide Deleted Threads in forums</label>' +
				'</p>  ' +
				
				'<p>' +
					'<input class="wpp_setting wpp_forumSetting" type="checkbox" id="display_hideMovedThreads">' +
					'<label for="display_hideMovedThreads">Hide Moved Threads in forums</label>' +
				'</p> ' +
			
				'<p>' +
					'<input class="wpp_setting wpp_forumSetting" type="checkbox" id="links_unanswered">' +
					' <label for="links_unanswered">Link to Unanswered Threads</label>' +
					' <span class="settingDesc">Adds a link to only display unanswered threads after the forum name</span>'+
				'</p>' +
				
				'<p>' +
					'<input class="wpp_setting wpp_forumSetting" type="checkbox" id="removeLinkToLastPage">' +
					'<label for="removeLinkToLastPage">Make the links on the main page of Whirlpool go to the start of the thread</label>' +
				'</p>' +
				
				'<p class="description tabDescription">These settings add links to display only posts from certain users</p>' +
				
				'<p>' +
					'<input class="wpp_setting wpp_forumSetting" type="checkbox" id="links_originalPoster">' +
					' <label for="links_originalPoster">OP posts</label>' +
				'</p>' +
				
				'<p>' +
					'<input class="wpp_setting wpp_forumSetting" type="checkbox" id="links_mod">' +
					' <label for="links_mod">Moderator posts</label>' +
				'</p>' +
				
				'<p>' +
					'<input class="wpp_setting wpp_forumSetting" type="checkbox" id="links_rep">' +
					' <label for="links_rep">Rep posts</label>' +
				'</p>' +
				
				'<p>' +
					'<input class="wpp_setting wpp_forumSetting" type="checkbox" id="links_archive">' +
					' <label for="links_archive">Thread Archive View</label>' +
				'</p>' +
				
				'<p>' +
					'<input class="wpp_setting wpp_forumSetting" type="checkbox" id="links_longThread">' +
					' <label for="links_longThread">Long Thread View</label>' +
				'</p>' +
			
			'</div>' +
		'</div>' +
		
	'</div>' +
	
	'<div class="menuDiv" id="menuDiv_posts">' +
		
		'<div class="wpp_showNotForum wpp_settingsMessage">Only a limited subset of features are available outside the forums.whirlpool.net.au subdomain</div>' +
		
		'<div class="subSettings wpp_hideNotForum">' +
			'<p class="subSettings_heading description"><b>Quick Reply and Quick Edit</b></p>' +
			'<div class="subSettings_content">' +
			
				'<p>' +
					'<input class="wpp_setting wpp_forumSetting" type="checkbox" id="compose_quickReply">' +
					' <label for="compose_quickReply">Quick Reply</label>' +
					' <span class="settingDesc">Adds a Quick Reply box to the bottom of each page</span>'+
				'</p>' +

				'<p>' +
					'<input class="wpp_setting wpp_forumSetting" type="checkbox" id="compose_autoExpand">' +
					' <label for="compose_autoExpand">Auto Expand</label>' +
					' <span class="settingDesc">Auto expand quick reply box as you type</span>'+
				'</p>' +

				'<p>' +
					'<input class="wpp_setting wpp_forumSetting" type="checkbox" id="compose_quickReply_emoticons">' +
					' <label for="compose_quickReply_emoticons">Quick Reply Smilies</label>' +
					' <span class="settingDesc">Display the available smilies under the whirlcode buttons</span>'+
				'</p>' +
				
				'<p>' +
					'<input class="wpp_setting wpp_forumSetting" type="checkbox" id="compose_quickReply_preview">' +
					' <label for="compose_quickReply_preview">Auto Preview</label>' +
					' <span class="settingDesc">Automatically preview what you are typing in the quick reply box</span>'+
				'</p>' +
				
				'<p>' +
					'<input class="wpp_setting wpp_forumSetting" type="checkbox" id="compose_quickReply_goToEndAfterPost">' +
					'<label for="compose_quickReply_goToEndAfterPost">Go to the last post in the thread after posting</label>' +
				'</p>' +
				
				'<p>' +
					'<input class="wpp_setting wpp_forumSetting" type="checkbox" id="autoSubscribeToNewThread">' +
					' <label for="autoSubscribeToNewThread">Automatically subscribe to a thread after posting</label>' +
				'</p>' +
				
				'<p>' +
					'<input class="wpp_setting wpp_forumSetting" type="checkbox" id="quickEdit">' +
					' <label for="quickEdit">Quick Edit</label>' +
					' <span class="settingDesc">Allows inline editing of posts</span>'+
				'</p>' +
			
			'</div>' +
		'</div>' +
		
		'<div class="subSettings">' +
			'<p class="subSettings_heading description"><b>Display and Formatting Options</b></p>' +
			'<div class="subSettings_content">' +
			
				'<p class="wpp_hideNotForum">' +
					'<input class="wpp_setting wpp_forumSetting" type="checkbox" id="display_penaltyBox">' +
					' <label for="display_penaltyBox">Highlight when a user is in the penalty box</label>' +
				'</p>' +
			
				'<p class="wpp_hideNotForum">' +
					'<input class="wpp_setting wpp_forumSetting" type="checkbox" id="display_emoticons_enabled">' +
					' <label for="display_emoticons_enabled">Display Image Emoticons (Smilies)</label>' +
				'</p>' +
				
				'<p class="wpp_hideNotForum">' +
					'<input class="wpp_setting wpp_forumSetting" type="checkbox" id="display_emoticons_blue">' +
					' <label for="display_emoticons_blue">Use blue smilies</label>' +
				'</p>' +
				
				'<p class="wpp_hideNotForum">' +
					'<input class="wpp_setting wpp_forumSetting" type="checkbox" id="embed_oembed">' +
					' <label for="embed_oembed">Enable oEmbed</label>' +
					' <span class="settingDesc">Embeds many common content types (see below)</span>'+
				'</p>  ' +
				
				'<p class="wpp_hideNotForum">' +
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
				
				'<p class="wpp_hideNotForum">' +
					'<input class="wpp_setting wpp_forumSetting" type="text" id="embed_oembedTypes">' +
					' <label for="embed_oembedTypes">oEmbed Content Types</label>' +
					' <span class="settingDesc">Enter portions of URLs to match, separated with the | (pipe) character</span>'+
				'</p>  ' +
				
				'<p class="wpp_hideNotForum">' +
					'<input class="wpp_setting wpp_forumSetting" type="checkbox" id="embed_images">' +
					' <label for="embed_images">Inline Images</label>' +
					' <span class="settingDesc">Converts image links into images</span>'+
				'</p>' +
				
				'<p class="wpp_hideNotForum">' +
					'<input class="wpp_setting wpp_forumSetting" type="checkbox" id="display_syntaxHighlight">' +
					' <label for="display_syntaxHighlight">Syntax Highlighting for code blocks</label>' +
				'</p> ' +
			
				'<p>' +
					'<input class="wpp_setting" type="checkbox" id="compose_enhancedEditor">' +
					' <label for="compose_enhancedEditor">Add Whirlcode buttons when creating a new thread (also in wiki)</label>' +
				'</p>' +
				
				'<p class="wpp_hideNotForum">' +
					'<input class="wpp_setting wpp_forumSetting" type="checkbox" id="display_hideDeletedPosts">' +
					' <label for="display_hideDeletedPosts">Hide deleted posts</label>' +
				'</p>  ' +
						
				'<p class="wpp_hideNotForum">' +
					'<select class="wpp_setting wpp_forumSetting" id="watchedThreadsAlert">' +
						'<option value="default">None</option>' +
						'<option value="watched">Go to watched threads</option>' +
						'<option value="thread">Return to the thread</option>' +
					'</select>' +
					
					' <label for="watchedThreadsAlert">Action to perform when watching a thread</label>' +
				'</p> ' +
			'</div>' +
		'</div>' +
		
		'<div class="subSettings">' +
			'<p class="subSettings_heading description"><b>Avatars</b></p>' +
			'<div class="subSettings_content">' +		
			
				'<p class="tabDescription wpp_hideNotForum">To add an avatar, upload it to <a href="http://tinypic.com">tinypic.com</a>, then put the direct url in the field below.' +
				
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
					
				'</table>' + 
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

	'<div class="menuDiv" id="menuDiv_help">' +
	
		'<p class="description"><b>Where can I get help, or report an issue?</b></p>' +
		'<p class="description">The best way to get help is to post in the Whirlpool Plus thread in Feedback. This is also a good place to request new features. </p>' +
		'<p class="description">Another good source of information is the <a href="http://whirlpool.net.au/wiki/whirlpool_plus">wiki article<a>.</p>' +
		'<p class="description">The script is maintained by <a href="http://forums.whirlpool.net.au/user/272563">tbwd</a>, so you can also whim him.</p>' +
	
		'<p class="description"><b>Privacy</b></p>' +
		'<p class="description">As stated in the wiki article, a user script like Whirlpool Plus could possibly be used to steal user information.  To our knowledge, there is no such code in this script. </p>' +
		'<p class="description">The script relies on an external server to run the avatars and synchronisation. This server (endorph.net) is operated by <a href="http://forums.whirlpool.net.au/user/272563">tbwd</a>. Both these services use your API key to validate your identity, but do not store this key.</p>' +

		'<p class="description"><b>About Whirlpool Plus</b></p>' +
		'<p class="description">Whirlpool Plus was created by various members of the Whirlpool community to add extra features to the Whirlpool Forums. Many people have contributed to the script- see the wiki article for credits.</p>' +
	
		'<p class="description"><b>Changelog</b></p>';

		for(key in WhirlpoolPlus._changelog){
			settings._html += '<p class="description">Version ' + key + WhirlpoolPlus._changelog[key] + '</p>';
		}
	
settings._html += '<p class="description">Further changelogs can be viewed in the source of previous versions</p></div>' +
	
	'<button id="wppSettings_reset" style="float: left; margin-top:6px;">Reset Settings</button>'+
	
	'<div style="margin: 6px 10px 5px 197px; float: left; color: #fff;">Installed Script Version: ' + WhirlpoolPlus.getVersionText() + '</div>' +
	
	'<button id="wppSettings_save" style="float:right;margin-top:6px;">Save</button>' +

	'<button id="wppSettings_cancel" class="simplemodal-close" style="float:right;margin-top:6px;">Cancel</button>' +

	'<br />' +
	
'</div>';
}

//Run the script
try{
	var $ = unsafeWindow.jQuery;
	
	if(typeof $ != 'undefined'){
		// Rebuild jQuery.browser
		// From jQuery.migrate plugin http://code.jquery.com/jquery-migrate-1.1.1.js
		var jQuery = $;
		if(!jQuery.browser){jQuery.uaMatch=function(e){e=e.toLowerCase();var t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}};matched=jQuery.uaMatch(navigator.userAgent);browser={};if(matched.browser){browser[matched.browser]=true;browser.version=matched.version}if(browser.chrome){browser.webkit=true}else if(browser.webkit){browser.safari=true}jQuery.browser=browser}
	}
	
	WhirlpoolPlus.redirects();
	WhirlpoolPlus.init();
	
	if(typeof $ == 'undefined'){
		WhirlpoolPlus.executeNojQuery();
	}else{
		//If this is Firefox 3.6 or Chrome, jQuery cannot bind events to window and document
		// Need to use unsafeWindow and unsafeWindow.document

		if(($.browser.mozilla == true && $.browser.version.substring(0,4) == '1.9.') || $.browser.webkit == true){
			WhirlpoolPlus.compatibilityMode();
		}
		
		if(WhirlpoolPlus.pageType.forums){
			load_jQueryAutosize($,WhirlpoolPlus.window);
			load_jQueryoEmbed($);
			
			WhirlpoolPlus.execute();
			
		}else{
			WhirlpoolPlus.executeNotForum();
		}
		
	}
}catch(e){
	if(typeof console != 'undefined'){
		console.error(e);
	}else{
		alert('WP+ Error occured: ' + e);
	}
}