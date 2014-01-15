// ==UserScript==
// @name			Whirlpool Plus
// @namespace		WhirlpoolPlus
// @description		Adds a suite of extra optional features to the Whirlpool forums.
// @version			4.5.3
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
// ==/UserScript==

// Begin Complied Userscript headers

/* http://wpplus.endorph.net/resources/js/min/delayedLoad.jquery.autosize.js */ function load_jQueryAutosize(e,t){var n={className:"autosizejs",append:"",callback:false},r="hidden",i="border-box",s="lineHeight",o='<textarea tabindex="-1" style="position:absolute; top:-9999px; left:-9999px; right:auto; bottom:auto; -moz-box-sizing:content-box; -webkit-box-sizing:content-box; box-sizing:content-box; word-wrap:break-word; height:0 !important; min-height:0 !important; overflow:hidden;"/>',u=["fontFamily","fontSize","fontWeight","fontStyle","letterSpacing","textTransform","wordSpacing","textIndent"],a="oninput",f="onpropertychange",l="onkeyup",c=e(o)[0];c.setAttribute(a,"return");e(c).css(s,"99px");if(e(c).css(s)==="99px"){u.push(s)}e.fn.autosize=function(s){s=e.extend({},n,s||{});return this.each(function(){function E(){var e,t,i;if(!v){v=true;h.value=n.value+s.append;h.style.overflowY=n.style.overflowY;i=parseInt(n.style.height,10);h.style.width=l.css("width");h.scrollTop=0;h.scrollTop=9e4;e=h.scrollTop;t=r;if(e>d){e=d;t="scroll"}else if(e<p){e=p}e+=y;n.style.overflowY=t;if(i!==e){n.style.height=e+"px";if(w){s.callback.call(n)}}setTimeout(function(){v=false},1)}}var n=this,l=e(n),h,p=l.height(),d=parseInt(l.css("maxHeight"),10),v,m=u.length,g,y=0,b=n.value,w=e.isFunction(s.callback);if(l.css("box-sizing")===i||l.css("-moz-box-sizing")===i||l.css("-webkit-box-sizing")===i){y=l.outerHeight()-l.height()}if(l.data("mirror")||l.data("ismirror")){return}else{h=e(o).data("ismirror",true).addClass(s.className)[0];g=l.css("resize")==="none"?"none":"horizontal";l.data("mirror",e(h)).css({overflow:r,overflowY:r,wordWrap:"break-word",resize:g})}d=d&&d>0?d:9e4;while(m--){h.style[u[m]]=l.css(u[m])}e("body").append(h);if(f in n){if(a in n){n[a]=n.onkeyup=E}else{n[f]=E}}else if(e.isFunction(c[a])){n[a]=E;n.value="";n.value=b}else{l.keyup(E)}e(t).resize(E);l.bind("autosize",E);E()})}}
/* http://wpplus.endorph.net/resources/js/min/delayedLoad.jquery.oembed.js */ function load_jQueryoEmbed(e){function n(e,t){t=t?t:"";return e?n(--e,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz".charAt(Math.floor(Math.random()*60))+t):t}function r(e,t){var n=e.apiendpoint,r="",i;n+=n.indexOf("?")<=0?"?":"&";n=n.replace("#","%23");if(e.maxWidth!==null&&(typeof e.params.maxwidth==="undefined"||e.params.maxwidth===null)){e.params.maxwidth=e.maxWidth}if(e.maxHeight!==null&&(typeof e.params.maxheight==="undefined"||e.params.maxheight===null)){e.params.maxheight=e.maxHeight}for(i in e.params){if(i==e.callbackparameter)continue;if(e.params[i]!==null)r+="&"+escape(i)+"="+e.params[i]}n+="format="+e.format+"&url="+escape(t)+r;if(e.dataType!="json")n+="&"+e.callbackparameter+"=?";return n}function s(n,r,i){e("#jqoembeddata").data(r,n.code);t.beforeEmbed.call(i,n);t.onEmbed.call(i,n);t.afterEmbed.call(i,n)}function o(i,o,u){if(e("#jqoembeddata").data(o)!=undefined&&u.embedtag.tag!="iframe"){var a={code:e("#jqoembeddata").data(o)};s(a,o,i)}else if(u.yql){var f=u.yql.from||"htmlstring";var l=u.yql.url?u.yql.url(o):o;var c="SELECT * FROM "+f+' WHERE url="'+l+'"'+" and "+(/html/.test(f)?"xpath":"itemPath")+"='"+(u.yql.xpath||"/")+"'";if(f=="html")c+=" and compat='html5'";var h=e.extend({url:"http://query.yahooapis.com/v1/public/yql",dataType:"jsonp",data:{q:c,format:"json",env:"store://datatables.org/alltableswithkeys",callback:"?"},success:function(t){var n;if(u.yql.xpath&&u.yql.xpath=="//meta|//title|//link"){var r={};if(t.query.results==null){t.query.results={meta:[]}}for(var a=0,f=t.query.results.meta.length;a<f;a++){var c=t.query.results.meta[a].name||t.query.results.meta[a].property||null;if(c==null)continue;r[c.toLowerCase()]=t.query.results.meta[a].content}if(!r.hasOwnProperty("title")||!r.hasOwnProperty("og:title")){if(t.query.results.title!=null){r.title=t.query.results.title}}if(!r.hasOwnProperty("og:image")&&t.query.results.hasOwnProperty("link")){for(var a=0,f=t.query.results.link.length;a<f;a++){if(t.query.results.link[a].hasOwnProperty("rel")){if(t.query.results.link[a].rel=="apple-touch-icon"){if(t.query.results.link[a].href.charAt(0)=="/"){r["og:image"]=l.match(/^(([a-z]+:)?(\/\/)?[^\/]+\/).*$/)[1]+t.query.results.link[a].href}else{r["og:image"]=t.query.results.link[a].href}}}}}n=u.yql.datareturn(r)}else{n=u.yql.datareturn?u.yql.datareturn(t.query.results):t.query.results.result}if(n===false)return;var h=e.extend({},n);h.code=n;s(h,o,i)},error:t.onError.call(i,o,u)},t.ajaxOptions||{});e.ajax(h)}else if(u.templateRegex){if(u.embedtag.tag!==""){var p=u.embedtag.flashvars||"";var d=u.embedtag.tag||"embed";var v=u.embedtag.width||"auto";var m=u.embedtag.nocache||0;var g=u.embedtag.height||"auto";var y=o.replace(u.templateRegex,u.apiendpoint);if(!m)y+="&jqoemcache="+n(5);if(u.apikey)y=y.replace("_APIKEY_",t.apikeys[u.name]);var b=e("<"+d+"/>").attr("src",y).attr("width",v).attr("height",g).attr("allowfullscreen",u.embedtag.allowfullscreen||"true").attr("allowscriptaccess",u.embedtag.allowfullscreen||"always").css("max-height",t.maxHeight||"auto").css("max-width",t.maxWidth||"auto");if(d=="embed")b.attr("type",u.embedtag.type||"application/x-shockwave-flash").attr("flashvars",o.replace(u.templateRegex,p));if(d=="iframe")b.attr("scrolling",u.embedtag.scrolling||"no").attr("frameborder",u.embedtag.frameborder||"0");var a={code:b};s(a,o,i)}else if(u.apiendpoint){if(u.apikey)u.apiendpoint=u.apiendpoint.replace("_APIKEY_",t.apikeys[u.name]);h=e.extend({url:o.replace(u.templateRegex,u.apiendpoint),dataType:"jsonp",success:function(t){var n=e.extend({},t);n.code=u.templateData(t);s(n,o,i)},error:t.onError.call(i,o,u)},t.ajaxOptions||{});e.ajax(h)}else{var a={code:o.replace(u.templateRegex,u.template)};s(a,o,i)}}else{var w=r(u,o),h=e.extend({url:w,dataType:u.dataType||"jsonp",success:function(t){var n=e.extend({},t);switch(n.type){case"file":case"photo":n.code=e.fn.oembed.getPhotoCode(o,n);break;case"video":case"rich":n.code=e.fn.oembed.getRichCode(o,n);break;default:n.code=e.fn.oembed.getGenericCode(o,n);break}s(n,o,i)},error:t.onError.call(i,o,u)},t.ajaxOptions||{});e.ajax(h)}}function u(e){if(e===null)return null;var t,n={};for(t in e){if(t!==null)n[t.toLowerCase()]=e[t]}return n}e.fn.oembed=function(n,r,i){t=e.extend(true,e.fn.oembed.defaults,r);var s=["0rz.tw","1link.in","1url.com","2.gp","2big.at","2tu.us","3.ly","307.to","4ms.me","4sq.com","4url.cc","6url.com","7.ly","a.gg","a.nf","aa.cx","abcurl.net","ad.vu","adf.ly","adjix.com","afx.cc","all.fuseurl.com","alturl.com","amzn.to","ar.gy","arst.ch","atu.ca","azc.cc","b23.ru","b2l.me","bacn.me","bcool.bz","binged.it","bit.ly","bizj.us","bloat.me","bravo.ly","bsa.ly","budurl.com","canurl.com","chilp.it","chzb.gr","cl.lk","cl.ly","clck.ru","cli.gs","cliccami.info","clickthru.ca","clop.in","conta.cc","cort.as","cot.ag","crks.me","ctvr.us","cutt.us","dai.ly","decenturl.com","dfl8.me","digbig.com","http://digg.com/[^/]+$","disq.us","dld.bz","dlvr.it","do.my","doiop.com","dopen.us","easyuri.com","easyurl.net","eepurl.com","eweri.com","fa.by","fav.me","fb.me","fbshare.me","ff.im","fff.to","fire.to","firsturl.de","firsturl.net","flic.kr","flq.us","fly2.ws","fon.gs","freak.to","fuseurl.com","fuzzy.to","fwd4.me","fwib.net","g.ro.lt","gizmo.do","gl.am","go.9nl.com","go.ign.com","go.usa.gov","goo.gl","goshrink.com","gurl.es","hex.io","hiderefer.com","hmm.ph","href.in","hsblinks.com","htxt.it","huff.to","hulu.com","hurl.me","hurl.ws","icanhaz.com","idek.net","ilix.in","is.gd","its.my","ix.lt","j.mp","jijr.com","kl.am","klck.me","korta.nu","krunchd.com","l9k.net","lat.ms","liip.to","liltext.com","linkbee.com","linkbun.ch","liurl.cn","ln-s.net","ln-s.ru","lnk.gd","lnk.ms","lnkd.in","lnkurl.com","lru.jp","lt.tl","lurl.no","macte.ch","mash.to","merky.de","migre.me","miniurl.com","minurl.fr","mke.me","moby.to","moourl.com","mrte.ch","myloc.me","myurl.in","n.pr","nbc.co","nblo.gs","nn.nf","not.my","notlong.com","nsfw.in","nutshellurl.com","nxy.in","nyti.ms","o-x.fr","oc1.us","om.ly","omf.gd","omoikane.net","on.cnn.com","on.mktw.net","onforb.es","orz.se","ow.ly","ping.fm","pli.gs","pnt.me","politi.co","post.ly","pp.gg","profile.to","ptiturl.com","pub.vitrue.com","qlnk.net","qte.me","qu.tc","qy.fi","r.im","rb6.me","read.bi","readthis.ca","reallytinyurl.com","redir.ec","redirects.ca","redirx.com","retwt.me","ri.ms","rickroll.it","riz.gd","rt.nu","ru.ly","rubyurl.com","rurl.org","rww.tw","s4c.in","s7y.us","safe.mn","sameurl.com","sdut.us","shar.es","shink.de","shorl.com","short.ie","short.to","shortlinks.co.uk","shorturl.com","shout.to","show.my","shrinkify.com","shrinkr.com","shrt.fr","shrt.st","shrten.com","shrunkin.com","simurl.com","slate.me","smallr.com","smsh.me","smurl.name","sn.im","snipr.com","snipurl.com","snurl.com","sp2.ro","spedr.com","srnk.net","srs.li","starturl.com","su.pr","surl.co.uk","surl.hu","t.cn","t.co","t.lh.com","ta.gd","tbd.ly","tcrn.ch","tgr.me","tgr.ph","tighturl.com","tiniuri.com","tiny.cc","tiny.ly","tiny.pl","tinylink.in","tinyuri.ca","tinyurl.com","tk.","tl.gd","tmi.me","tnij.org","tnw.to","tny.com","to.ly","togoto.us","totc.us","toysr.us","tpm.ly","tr.im","tra.kz","trunc.it","twhub.com","twirl.at","twitclicks.com","twitterurl.net","twitterurl.org","twiturl.de","twurl.cc","twurl.nl","u.mavrev.com","u.nu","u76.org","ub0.cc","ulu.lu","updating.me","ur1.ca","url.az","url.co.uk","url.ie","url360.me","url4.eu","urlborg.com","urlbrief.com","urlcover.com","urlcut.com","urlenco.de","urli.nl","urls.im","urlshorteningservicefortwitter.com","urlx.ie","urlzen.com","usat.ly","use.my","vb.ly","vgn.am","vl.am","vm.lc","w55.de","wapo.st","wapurl.co.uk","wipi.es","wp.me","x.vu","xr.com","xrl.in","xrl.us","xurl.es","xurl.jp","y.ahoo.it","yatuc.com","ye.pe","yep.it","yfrog.com","yhoo.it","yiyd.com","youtu.be","yuarel.com","z0p.de","zi.ma","zi.mu","zipmyurl.com","zud.me","zurl.ws","zz.gd","zzang.kr","›.ws","?.ws","?.ws","?.ws","?.ws","?.ws","?.ws","?.ws","?.ws","?.ws","?.ws"];if(e("#jqoembeddata").length===0)e('<span id="jqoembeddata"></span>').appendTo("body");return this.each(function(){var r=e(this),a=n&&(!n.indexOf("http://")||!n.indexOf("https://"))?n:r.attr("href"),f;if(i){t.onEmbed=i}else if(!t.onEmbed){t.onEmbed=function(n){e.fn.oembed.insertCode(this,t.embedMethod,n)}}if(a!==null){for(var l=0,c=s.length;l<c;l++){var h=new RegExp("://"+s[l]+"/","i");if(a.match(h)!==null){var p=e.extend({url:"http://api.longurl.org/v2/expand",dataType:"jsonp",data:{url:a,format:"json"},success:function(n){a=n["long-url"];f=e.fn.oembed.getOEmbedProvider(n["long-url"]);if(f!==null){f.params=u(t[f.name])||{};f.maxWidth=t.maxWidth;f.maxHeight=t.maxHeight;o(r,a,f)}else{t.onProviderNotFound.call(r,a)}}},t.ajaxOptions||{});e.ajax(p);return r}}f=e.fn.oembed.getOEmbedProvider(a);if(f!==null){f.params=u(t[f.name])||{};f.maxWidth=t.maxWidth;f.maxHeight=t.maxHeight;o(r,a,f)}else{t.onProviderNotFound.call(r,a)}}return r})};var t;e.fn.oembed.defaults={maxWidth:null,maxHeight:null,includeHandle:true,embedMethod:"auto",onProviderNotFound:function(){},beforeEmbed:function(){},afterEmbed:function(){},onEmbed:false,onError:function(){},ajaxOptions:{}};e.fn.oembed.insertCode=function(n,r,i){if(i===null)return;if(r=="auto"&&n.attr("href")!==null)r="append";else if(r=="auto")r="replace";switch(r){case"replace":n.replaceWith(i.code);break;case"fill":n.html(i.code);break;case"append":n.wrap('<div class="oembedall-container"></div>');var s=n.parent();if(t.includeHandle){e('<span class="oembedall-closehide">?</span>').insertBefore(n).click(function(){var t=encodeURIComponent(e(this).text());e(this).html(t=="%E2%86%91"?"?":"?");e(this).parent().children().last().toggle()})}s.append("<br/>");try{i.code.clone().appendTo(s)}catch(o){s.append(i.code)}if(t.maxWidth){var u=s.parent().width();if(u<t.maxWidth){var a=e("iframe",s).width();var f=e("iframe",s).height();var l=a/u;e("iframe",s).css("max-width",a/l);e("iframe",s).css("max-height",f/l)}else{if(t.maxWidth){e("iframe",s).css("max-width",t.maxWidth)}if(t.maxHeight){e("iframe",s).css("max-height",t.maxHeight)}}}break}};e.fn.oembed.getPhotoCode=function(e,t){var n,r=t.title?t.title:"";r+=t.author_name?" - "+t.author_name:"";r+=t.provider_name?" - "+t.provider_name:"";n='<div><a href="'+e+"\" target='_blank'><img src=\""+t.url+'" alt="'+r+'"/></a></div>';if(t.html)n+="<div>"+t.html+"</div>";return n};e.fn.oembed.getRichCode=function(e,t){var n=t.html;return n};e.fn.oembed.getGenericCode=function(e,t){var n=t.title!==null?t.title:e,r='<a href="'+e+'">'+n+"</a>";if(t.html)r+="<div>"+t.html+"</div>";return r};e.fn.oembed.getOEmbedProvider=function(t){for(var n=0;n<e.fn.oembed.providers.length;n++){for(var r=0,i=e.fn.oembed.providers[n].urlschemes.length;r<i;r++){var s=new RegExp(e.fn.oembed.providers[n].urlschemes[r],"i");if(t.match(s)!==null)return e.fn.oembed.providers[n]}}return null};e.fn.oembed.OEmbedProvider=function(e,t,n,r,i){this.name=e;this.type=t;this.urlschemes=n;this.apiendpoint=r;this.maxWidth=500;this.maxHeight=400;i=i||{};if(i.useYQL){if(i.useYQL=="xml"){i.yql={xpath:"//oembed/html",from:"xml",apiendpoint:this.apiendpoint,url:function(e){return this.apiendpoint+"?format=xml&url="+e},datareturn:function(e){return e.html.replace(/.*\[CDATA\[(.*)\]\]>$/,"$1")||""}}}else{i.yql={from:"json",apiendpoint:this.apiendpoint,url:function(e){return this.apiendpoint+"?format=json&url="+e},datareturn:function(e){if("url"in e.json){return'<img src="'+e.json.url+'" />'}return e.json.html||""}}}this.apiendpoint=null}for(var s in i){this[s]=i[s]}this.format=this.format||"json";this.callbackparameter=this.callbackparameter||"callback";this.embedtag=this.embedtag||{tag:""}};e.fn.oembed.providers=[new e.fn.oembed.OEmbedProvider("youtube","video",["youtube\\.com/watch.+v=[\\w-]+&?","youtu\\.be/[\\w-]+"],"http://www.youtube.com/oembed",{useYQL:"json"}),new e.fn.oembed.OEmbedProvider("youtubeiframe","video",["youtube.com/embed"],"$1?wmode=transparent",{templateRegex:/(.*)/,embedtag:{tag:"iframe",width:"425",height:"349"}}),new e.fn.oembed.OEmbedProvider("wistia","video",["wistia.com/m/.+","wistia.com/embed/.+","wi.st/m/.+","wi.st/embed/.+"],"http://fast.wistia.com/oembed",{useYQL:"json"}),new e.fn.oembed.OEmbedProvider("xtranormal","video",["xtranormal\\.com/watch/.+"],"http://www.xtranormal.com/xtraplayr/$1/$2",{templateRegex:/.*com\/watch\/([\w\-]+)\/([\w\-]+).*/,embedtag:{tag:"iframe",width:"320",height:"269"}}),new e.fn.oembed.OEmbedProvider("scivee","video",["scivee.tv/node/.+"],"http://www.scivee.tv/flash/embedCast.swf?",{templateRegex:/.*tv\/node\/(.+)/,embedtag:{width:"480",height:"400",flashvars:"id=$1&type=3"}}),new e.fn.oembed.OEmbedProvider("veoh","video",["veoh.com/watch/.+"],"http://www.veoh.com/swf/webplayer/WebPlayer.swf?version=AFrontend.5.7.0.1337&permalinkId=$1&player=videodetailsembedded&videoAutoPlay=0&id=anonymous",{templateRegex:/.*watch\/([^\?]+).*/,embedtag:{width:"410",height:"341"}}),new e.fn.oembed.OEmbedProvider("gametrailers","video",["gametrailers\\.com/video/.+"],"http://media.mtvnservices.com/mgid:moses:video:gametrailers.com:$2",{templateRegex:/.*com\/video\/([\w\-]+)\/([\w\-]+).*/,embedtag:{width:"512",height:"288"}}),new e.fn.oembed.OEmbedProvider("funnyordie","video",["funnyordie\\.com/videos/.+"],"http://player.ordienetworks.com/flash/fodplayer.swf?",{templateRegex:/.*videos\/([^\/]+)\/([^\/]+)?/,embedtag:{width:512,height:328,flashvars:"key=$1"}}),new e.fn.oembed.OEmbedProvider("colledgehumour","video",["collegehumor\\.com/video/.+"],"http://www.collegehumor.com/moogaloop/moogaloop.swf?clip_id=$1&use_node_id=true&fullscreen=1",{templateRegex:/.*video\/([^\/]+).*/,embedtag:{width:600,height:338}}),new e.fn.oembed.OEmbedProvider("metacafe","video",["metacafe\\.com/watch/.+"],"http://www.metacafe.com/fplayer/$1/$2.swf",{templateRegex:/.*watch\/(\d+)\/(\w+)\/.*/,embedtag:{width:400,height:345}}),new e.fn.oembed.OEmbedProvider("bambuser","video",["bambuser\\.com/channel/.*/broadcast/.*"],"http://static.bambuser.com/r/player.swf?vid=$1",{templateRegex:/.*bambuser\.com\/channel\/.*\/broadcast\/(\w+).*/,embedtag:{width:512,height:339}}),new e.fn.oembed.OEmbedProvider("twitvid","video",["twitvid\\.com/.+"],"http://www.twitvid.com/embed.php?guid=$1&autoplay=0",{templateRegex:/.*twitvid\.com\/(\w+).*/,embedtag:{tag:"iframe",width:480,height:360}}),new e.fn.oembed.OEmbedProvider("aniboom","video",["aniboom\\.com/animation-video/.+"],"http://api.aniboom.com/e/$1",{templateRegex:/.*animation-video\/(\d+).*/,embedtag:{width:594,height:334}}),new e.fn.oembed.OEmbedProvider("vzaar","video",["vzaar\\.com/videos/.+","vzaar.tv/.+"],"http://view.vzaar.com/$1/player?",{templateRegex:/.*\/(\d+).*/,embedtag:{tag:"iframe",width:576,height:324}}),new e.fn.oembed.OEmbedProvider("snotr","video",["snotr\\.com/video/.+"],"http://www.snotr.com/embed/$1",{templateRegex:/.*\/(\d+).*/,embedtag:{tag:"iframe",width:400,height:330,nocache:1}}),new e.fn.oembed.OEmbedProvider("youku","video",["v.youku.com/v_show/id_.+"],"http://player.youku.com/player.php/sid/$1/v.swf",{templateRegex:/.*id_(.+)\.html.*/,embedtag:{width:480,height:400,nocache:1}}),new e.fn.oembed.OEmbedProvider("embedr","video",["embedr\\.com/playlist/.+"],"http://embedr.com/swf/slider/$1/425/520/default/false/std?",{templateRegex:/.*playlist\/([^\/]+).*/,embedtag:{width:425,height:520}}),new e.fn.oembed.OEmbedProvider("blip","video",["blip\\.tv/.+"],"http://blip.tv/oembed/"),new e.fn.oembed.OEmbedProvider("minoto-video","video",["http://api.minoto-video.com/publishers/.+/videos/.+","http://dashboard.minoto-video.com/main/video/details/.+","http://embed.minoto-video.com/.+"],"http://api.minoto-video.com/services/oembed.json",{useYQL:"json"}),new e.fn.oembed.OEmbedProvider("animoto","video",["animoto.com/play/.+"],"http://animoto.com/services/oembed"),new e.fn.oembed.OEmbedProvider("hulu","video",["hulu\\.com/watch/.*"],"http://www.hulu.com/api/oembed.json"),new e.fn.oembed.OEmbedProvider("ustream","video",["ustream\\.tv/recorded/.*"],"http://www.ustream.tv/oembed",{useYQL:"json"}),new e.fn.oembed.OEmbedProvider("vodpod","video",["vodpod.com/watch/.*"],"http://vodpod.com/oembed.js",{useYQL:"json"}),new e.fn.oembed.OEmbedProvider("vimeo","video",["http://www.vimeo.com/groups/.*/videos/.*","http://www.vimeo.com/.*","http://vimeo.com/groups/.*/videos/.*","http://vimeo.com/.*"],"http://vimeo.com/api/oembed.json"),new e.fn.oembed.OEmbedProvider("dailymotion","video",["dailymotion\\.com/.+"],"http://www.dailymotion.com/services/oembed"),new e.fn.oembed.OEmbedProvider("5min","video",["www\\.5min\\.com/.+"],"http://api.5min.com/oembed.xml",{useYQL:"xml"}),new e.fn.oembed.OEmbedProvider("National Film Board of Canada","video",["nfb\\.ca/film/.+"],"http://www.nfb.ca/remote/services/oembed/",{useYQL:"json"}),new e.fn.oembed.OEmbedProvider("qik","video",["qik\\.com/\\w+"],"http://qik.com/api/oembed.json",{useYQL:"json"}),new e.fn.oembed.OEmbedProvider("revision3","video",["revision3\\.com"],"http://revision3.com/api/oembed/"),new e.fn.oembed.OEmbedProvider("dotsub","video",["dotsub\\.com/view/.+"],"http://dotsub.com/services/oembed",{useYQL:"json"}),new e.fn.oembed.OEmbedProvider("clikthrough","video",["clikthrough\\.com/theater/video/\\d+"],"http://clikthrough.com/services/oembed"),new e.fn.oembed.OEmbedProvider("Kinomap","video",["kinomap\\.com/.+"],"http://www.kinomap.com/oembed"),new e.fn.oembed.OEmbedProvider("VHX","video",["vhx.tv/.+"],"http://vhx.tv/services/oembed.json"),new e.fn.oembed.OEmbedProvider("bambuser","video",["bambuser.com/.+"],"http://api.bambuser.com/oembed/iframe.json"),new e.fn.oembed.OEmbedProvider("justin.tv","video",["justin.tv/.+"],"http://api.justin.tv/api/embed/from_url.json",{useYQL:"json"}),new e.fn.oembed.OEmbedProvider("official.fm","rich",["official.fm/.+"],"http://official.fm/services/oembed",{useYQL:"json"}),new e.fn.oembed.OEmbedProvider("chirbit","rich",["chirb.it/.+"],"http://chirb.it/oembed.json",{useYQL:"json"}),new e.fn.oembed.OEmbedProvider("Huffduffer","rich",["huffduffer.com/[-.\\w@]+/\\d+"],"http://huffduffer.com/oembed"),new e.fn.oembed.OEmbedProvider("shoudio","rich",["shoudio.com/.+","shoud.io/.+"],"http://shoudio.com/api/oembed"),new e.fn.oembed.OEmbedProvider("mixcloud","rich",["mixcloud.com/.+"],"http://www.mixcloud.com/oembed/",{useYQL:"json"}),new e.fn.oembed.OEmbedProvider("rdio.com","rich",["rd.io/.+","rdio.com"],"http://www.rdio.com/api/oembed/"),new e.fn.oembed.OEmbedProvider("Soundcloud","rich",["soundcloud.com/.+","snd.sc/.+"],"http://soundcloud.com/oembed",{format:"js"}),new e.fn.oembed.OEmbedProvider("bandcamp","rich",["bandcamp\\.com/album/.+"],null,{yql:{xpath:"//meta[contains(@content, \\'EmbeddedPlayer\\')]",from:"html",datareturn:function(e){return e.meta?'<iframe width="400" height="100" src="'+e.meta.content+'" allowtransparency="true" frameborder="0"></iframe>':false}}}),new e.fn.oembed.OEmbedProvider("deviantart","photo",["deviantart.com/.+","fav.me/.+","deviantart.com/.+"],"http://backend.deviantart.com/oembed",{format:"jsonp"}),new e.fn.oembed.OEmbedProvider("skitch","photo",["skitch.com/.+"],null,{yql:{xpath:"json",from:"json",url:function(e){return"http://skitch.com/oembed/?format=json&url="+e},datareturn:function(t){return e.fn.oembed.getPhotoCode(t.json.url,t.json)}}}),new e.fn.oembed.OEmbedProvider("mobypicture","photo",["mobypicture.com/user/.+/view/.+","moby.to/.+"],"http://api.mobypicture.com/oEmbed"),new e.fn.oembed.OEmbedProvider("flickr","photo",["flickr\\.com/photos/.+"],"http://flickr.com/services/oembed",{callbackparameter:"jsoncallback"}),new e.fn.oembed.OEmbedProvider("photobucket","photo",["photobucket\\.com/(albums|groups)/.+"],"http://photobucket.com/oembed/"),new e.fn.oembed.OEmbedProvider("instagram","photo",["instagr\\.?am(\\.com)?/.+"],"http://api.instagram.com/oembed"),new e.fn.oembed.OEmbedProvider("yfrog","photo",["yfrog\\.(com|ru|com\\.tr|it|fr|co\\.il|co\\.uk|com\\.pl|pl|eu|us)/.+"],"http://www.yfrog.com/api/oembed",{useYQL:"json"}),new e.fn.oembed.OEmbedProvider("SmugMug","photo",["smugmug.com/[-.\\w@]+/.+"],"http://api.smugmug.com/services/oembed/"),new e.fn.oembed.OEmbedProvider("dribbble","photo",["dribbble.com/shots/.+"],"http://api.dribbble.com/shots/$1?callback=?",{templateRegex:/.*shots\/([\d]+).*/,templateData:function(e){if(!e.image_teaser_url)return false;return'<img src="'+e.image_teaser_url+'"/>'}}),new e.fn.oembed.OEmbedProvider("chart.ly","photo",["chart\\.ly/[a-z0-9]{6,8}"],"http://chart.ly/uploads/large_$1.png?",{templateRegex:/.*ly\/([^\/]+).*/,embedtag:{tag:"img"}}),new e.fn.oembed.OEmbedProvider("circuitlab","photo",["circuitlab.com/circuit/.+"],"https://www.circuitlab.com/circuit/$1/screenshot/540x405/?",{templateRegex:/.*circuit\/([^\/]+).*/,embedtag:{tag:"img"}}),new e.fn.oembed.OEmbedProvider("23hq","photo",["23hq.com/[-.\\w@]+/photo/.+"],"http://www.23hq.com/23/oembed",{useYQL:"json"}),new e.fn.oembed.OEmbedProvider("img.ly","photo",["img\\.ly/.+"],"http://img.ly/show/thumb/$1?",{templateRegex:/.*com\/([^\/]+).*/,embedtag:{tag:"img"}}),new e.fn.oembed.OEmbedProvider("twitgoo.com","photo",["twitgoo\\.com/.+"],"http://twitgoo.com/show/thumb/$1?",{templateRegex:/.*com\/([^\/]+).*/,embedtag:{tag:"img"}}),new e.fn.oembed.OEmbedProvider("imgur.com","photo",["imgur\\.com/gallery/.+"],"http://imgur.com/$1l.jpg?",{templateRegex:/.*gallery\/([^\/]+).*/,embedtag:{tag:"img"}}),new e.fn.oembed.OEmbedProvider("visual.ly","rich",["visual\\.ly/.+"],null,{yql:{xpath:"//a[@id=\\'gc_article_graphic_image\\']/img",from:"htmlstring"}}),new e.fn.oembed.OEmbedProvider("gravtar","photo",["mailto:.+"],null,{templateRegex:/mailto:([^\/]+).*/,template:function(e,t){return'<img src="http://gravatar.com/avatar/'+t.md5()+'.jpg" alt="on Gravtar" class="jqoaImg">'}}),new e.fn.oembed.OEmbedProvider("twitter","rich",["twitter.com/.+"],"https://api.twitter.com/1/statuses/oembed.json"),new e.fn.oembed.OEmbedProvider("urtak","rich",["urtak.com/(u|clr)/.+"],"http://oembed.urtak.com/1/oembed"),new e.fn.oembed.OEmbedProvider("cacoo","rich",["cacoo.com/.+"],"http://cacoo.com/oembed.json"),new e.fn.oembed.OEmbedProvider("dailymile","rich",["dailymile.com/people/.*/entries/.*"],"http://api.dailymile.com/oembed"),new e.fn.oembed.OEmbedProvider("dipity","rich",["dipity.com/timeline/.+"],"http://www.dipity.com/oembed/timeline/",{useYQL:"json"}),new e.fn.oembed.OEmbedProvider("speakerdeck","rich",["speakerdeck.com/.+"],"http://speakerdeck.com/oembed.json",{useYQL:"json"}),new e.fn.oembed.OEmbedProvider("popplet","rich",["popplet.com/app/.*"],"http://popplet.com/app/Popplet_Alpha.swf?page_id=$1&em=1",{templateRegex:/.*#\/([^\/]+).*/,embedtag:{width:460,height:460}}),new e.fn.oembed.OEmbedProvider("pearltrees","rich",["pearltrees.com/.*"],"http://cdn.pearltrees.com/s/embed/getApp?",{templateRegex:/.*N-f=1_(\d+).*N-p=(\d+).*/,embedtag:{width:460,height:460,flashvars:"lang=en_US&embedId=pt-embed-$1-693&treeId=$1&pearlId=$2&treeTitle=Diagrams%2FVisualization&site=www.pearltrees.com%2FF"}}),new e.fn.oembed.OEmbedProvider("prezi","rich",["prezi.com/.*"],"http://prezi.com/bin/preziloader.swf?",{templateRegex:/.*com\/([^\/]+)\/.*/,embedtag:{width:550,height:400,flashvars:"prezi_id=$1&lock_to_path=0&color=ffffff&autoplay=no&autohide_ctrls=0"}}),new e.fn.oembed.OEmbedProvider("tourwrist","rich",["tourwrist.com/tours/.+"],null,{templateRegex:/.*tours.([\d]+).*/,template:function(e,t){setTimeout(function(){if(loadEmbeds)loadEmbeds()},2e3);return"<div id='"+t+"' class='tourwrist-tour-embed direct'></div> <script type='text/javascript' src='http://tourwrist.com/tour_embed.js'></script>"}}),new e.fn.oembed.OEmbedProvider("meetup","rich",["meetup\\.(com|ps)/.+"],"http://api.meetup.com/oembed"),new e.fn.oembed.OEmbedProvider("ebay","rich",["ebay\\.*"],"http://togo.ebay.com/togo/togo.swf?2008013100",{templateRegex:/.*\/([^\/]+)\/(\d{10,13}).*/,embedtag:{width:355,height:300,flashvars:"base=http://togo.ebay.com/togo/&lang=en-us&mode=normal&itemid=$2&query=$1"}}),new e.fn.oembed.OEmbedProvider("wikipedia","rich",["wikipedia.org/wiki/.+"],"http://$1.wikipedia.org/w/api.php?action=parse&page=$2&format=json&section=0&callback=?",{templateRegex:/.*\/\/([\w]+).*\/wiki\/([^\/]+).*/,templateData:function(e){if(!e.parse)return false;var t=e.parse["text"]["*"].replace('href="/wiki','href="http://en.wikipedia.org/wiki');return'<div id="oembed-content"><h3><a class="nav-link" href="http://en.wikipedia.org/wiki/'+e.parse["displaytitle"]+'">'+e.parse["displaytitle"]+"</a></h3>"+t+"</div>"}}),new e.fn.oembed.OEmbedProvider("imdb","rich",["imdb.com/title/.+"],"http://www.imdbapi.com/?i=$1&callback=?",{templateRegex:/.*\/title\/([^\/]+).*/,templateData:function(e){if(!e.Title)return false;return'<div id="oembed-content"><h3><a class="nav-link" href="http://imdb.com/title/'+e.ID+'/">'+e.Title+"</a> ("+e.Year+")</h3><p>Starring: "+e.Actors+'</p><div id="photo-wrap" style="margin: auto;width:600px;height:450px;"><img class="photo" id="photo-display" src="'+e.Poster+'" alt="'+e.Title+'"></div>  <div id="view-photo-caption">'+e.Plot+"</div></div>"}}),new e.fn.oembed.OEmbedProvider("livejournal","rich",["livejournal.com/"],"http://ljpic.seacrow.com/json/$2$4?jsonp=?",{templateRegex:/(http:\/\/(((?!users).)+)\.livejournal\.com|.*users\.livejournal\.com\/([^\/]+)).*/,templateData:function(e){if(!e.username)return false;return'<div><img src="'+e.image+'" align="left" style="margin-right: 1em;" /><span class="oembedall-ljuser"><a href="http://'+e.username+'.livejournal.com/profile"><img src="http://www.livejournal.com/img/userinfo.gif" alt="[info]" width="17" height="17" /></a><a href="http://'+e.username+'.livejournal.com/">'+e.username+"</a></span><br />"+e.name+"</div>"}}),new e.fn.oembed.OEmbedProvider("circuitbee","rich",["circuitbee\\.com/circuit/view/.+"],"http://c.circuitbee.com/build/r/schematic-embed.html?id=$1",{templateRegex:/.*circuit\/view\/(\d+).*/,embedtag:{tag:"iframe",width:"500",height:"350"}}),new e.fn.oembed.OEmbedProvider("googlecalendar","rich",["www.google.com/calendar/embed?.+"],"$1",{templateRegex:/(.*)/,embedtag:{tag:"iframe",width:"800",height:"600"}}),new e.fn.oembed.OEmbedProvider("jsfiddle","rich",["jsfiddle.net/[^/]+/?"],"http://jsfiddle.net/$1/embedded/result,js,resources,html,css/?",{templateRegex:/.*net\/([^\/]+).*/,embedtag:{tag:"iframe",width:"100%",height:"300"}}),new e.fn.oembed.OEmbedProvider("jsbin","rich",["jsbin.com/.+"],"http://jsbin.com/$1/?",{templateRegex:/.*com\/([^\/]+).*/,embedtag:{tag:"iframe",width:"100%",height:"300"}}),new e.fn.oembed.OEmbedProvider("jotform","rich",["form.jotform.co/form/.+"],"$1?",{templateRegex:/(.*)/,embedtag:{tag:"iframe",width:"100%",height:"507"}}),new e.fn.oembed.OEmbedProvider("reelapp","rich",["reelapp\\.com/.+"],"http://www.reelapp.com/$1/embed",{templateRegex:/.*com\/(\S{6}).*/,embedtag:{tag:"iframe",width:"400",height:"338"}}),new e.fn.oembed.OEmbedProvider("linkedin","rich",["linkedin.com/pub/.+"],"https://www.linkedin.com/cws/member/public_profile?public_profile_url=$1&format=inline&isFramed=true",{templateRegex:/(.*)/,embedtag:{tag:"iframe",width:"368px",height:"auto"}}),new e.fn.oembed.OEmbedProvider("timetoast","rich",["timetoast.com/timelines/[0-9]+"],"http://www.timetoast.com/flash/TimelineViewer.swf?passedTimelines=$1",{templateRegex:/.*timelines\/([0-9]*)/,embedtag:{width:550,height:400,nocache:1}}),new e.fn.oembed.OEmbedProvider("pastebin","rich",["pastebin\\.com/[\\S]{8}"],"http://pastebin.com/embed_iframe.php?i=$1",{templateRegex:/.*\/(\S{8}).*/,embedtag:{tag:"iframe",width:"100%",height:"auto"}}),new e.fn.oembed.OEmbedProvider("pastie","rich",["pastie\\.org/pastes/.+"],null,{yql:{xpath:'//pre[@class="textmate-source"]'}}),new e.fn.oembed.OEmbedProvider("github","rich",["gist.github.com/.+"],"https://github.com/api/oembed"),new e.fn.oembed.OEmbedProvider("github","rich",["github.com/[-.\\w@]+/[-.\\w@]+"],"https://api.github.com/repos/$1/$2?callback=?",{templateRegex:/.*\/([^\/]+)\/([^\/]+).*/,templateData:function(e){if(!e.data.html_url)return false;return'<div class="oembedall-githubrepos"><ul class="oembedall-repo-stats"><li>'+e.data.language+'</li><li class="oembedall-watchers"><a title="Watchers" href="'+e.data.html_url+'/watchers">&#x25c9; '+e.data.watchers+"</a></li>"+'<li class="oembedall-forks"><a title="Forks" href="'+e.data.html_url+'/network">&#x0265; '+e.data.forks+'</a></li></ul><h3><a href="'+e.data.html_url+'">'+e.data.name+'</a></h3><div class="oembedall-body"><p class="oembedall-description">'+e.data.description+"</p>"+'<p class="oembedall-updated-at">Last updated: '+e.data.pushed_at+"</p></div></div>"}}),new e.fn.oembed.OEmbedProvider("facebook","rich",["facebook.com/(people/[^\\/]+/\\d+|[^\\/]+$)"],"https://graph.facebook.com/$2$3/?callback=?",{templateRegex:/.*facebook.com\/(people\/[^\/]+\/(\d+).*|([^\/]+$))/,templateData:function(e){if(!e.id)return false;var t='<div class="oembedall-facebook1"><div class="oembedall-facebook2"><a href="http://www.facebook.com/">facebook</a> <a href="'+e.link+'">'+e.name+'</a></div><div class="oembedall-facebookBody"><div>';if(e.picture)t+='<img src="'+e.picture+'" align="left"></div><div>';if(e.category)t+="Category  <strong>"+e.category+"</strong><br/>";if(e.website)t+="Website  <strong>"+e.website+"</strong><br/>";if(e.gender)t+="Gender  <strong>"+e.gender+"</strong><br/>";t+="</div></div></div>";return t}}),new e.fn.oembed.OEmbedProvider("stackoverflow","rich",["stackoverflow.com/questions/[\\d]+"],"http://api.stackoverflow.com/1.1/questions/$1?body=true&jsonp=?",{templateRegex:/.*questions\/([\d]+).*/,templateData:function(t){if(!t.questions)return false;var n=t.questions[0];var r=e(n.body).text();var s='<div class="oembedall-stoqembed"><div class="oembedall-statscontainer"><div class="oembedall-statsarrow"></div><div class="oembedall-stats"><div class="oembedall-vote"><div class="oembedall-votes">'+'<span class="oembedall-vote-count-post"><strong>'+(n.up_vote_count-n.down_vote_count)+'</strong></span><div class="oembedall-viewcount">vote(s)</div></div>'+'</div><div class="oembedall-status"><strong>'+n.answer_count+'</strong>answer</div></div><div class="oembedall-views">'+n.view_count+" view(s)</div></div>"+'<div class="oembedall-summary"><h3><a class="oembedall-question-hyperlink" href="http://stackoverflow.com/questions/'+n.question_id+'/">'+n.title+"</a></h3>"+'<div class="oembedall-excerpt">'+r.substring(0,100)+'...</div><div class="oembedall-tags">';for(i in n.tags)s+='<a title="" class="oembedall-post-tag" href="http://stackoverflow.com/questions/tagged/'+n.tags[i]+'">'+n.tags[i]+"</a>";s+='</div><div class="oembedall-fr"><div class="oembedall-user-info"><div class="oembedall-user-gravatar32"><a href="http://stackoverflow.com/users/'+n.owner.user_id+"/"+n.owner.display_name+'">'+'<img width="32" height="32" alt="" src="http://www.gravatar.com/avatar/'+n.owner.email_hash+'?s=32&d=identicon&r=PG"></a></div><div class="oembedall-user-details">'+'<a href="http://stackoverflow.com/users/'+n.owner.user_id+"/"+n.owner.display_name+'">'+n.owner.display_name+'</a><br><span title="reputation score" class="oembedall-reputation-score">'+n.owner.reputation+"</span></div></div></div></div></div>";return s}}),new e.fn.oembed.OEmbedProvider("wordpress","rich",["wordpress\\.com/.+","blogs\\.cnn\\.com/.+","techcrunch\\.com/.+","wp\\.me/.+"],"http://public-api.wordpress.com/oembed/1.0/?for=jquery-oembed-all"),new e.fn.oembed.OEmbedProvider("screenr","rich",["screenr.com"],"http://www.screenr.com/embed/$1",{templateRegex:/.*\/([^\/]+).*/,embedtag:{tag:"iframe",width:"650",height:396}}),new e.fn.oembed.OEmbedProvider("gigpans","rich",["gigapan\\.org/[-.\\w@]+/\\d+"],"http://gigapan.org/gigapans/$1/options/nosnapshots/iframe/flash.html",{templateRegex:/.*\/(\d+)\/?.*/,embedtag:{tag:"iframe",width:"100%",height:400}}),new e.fn.oembed.OEmbedProvider("scribd","rich",["scribd\\.com/.+"],"http://www.scribd.com/embeds/$1/content?start_page=1&view_mode=list",{templateRegex:/.*doc\/([^\/]+).*/,embedtag:{tag:"iframe",width:"100%",height:600}}),new e.fn.oembed.OEmbedProvider("kickstarter","rich",["kickstarter\\.com/projects/.+"],"$1/widget/card.html",{templateRegex:/([^\?]+).*/,embedtag:{tag:"iframe",width:"220",height:380}}),new e.fn.oembed.OEmbedProvider("amazon","rich",["amzn.com/B+","amazon.com.*/(B\\S+)($|\\/.*)"],"http://rcm.amazon.com/e/cm?t=_APIKEY_&o=1&p=8&l=as1&asins=$1&ref=qf_br_asin_til&fc1=000000&IS2=1&lt1=_blank&m=amazon&lc1=0000FF&bc1=000000&bg1=FFFFFF&f=ifr",{apikey:true,templateRegex:/.*\/(B[0-9A-Z]+)($|\/.*)/,embedtag:{tag:"iframe",width:"120px",height:"240px"}}),new e.fn.oembed.OEmbedProvider("slideshare","rich",["slideshare.net"],"http://www.slideshare.net/api/oembed/2",{format:"jsonp"}),new e.fn.oembed.OEmbedProvider("roomsharejp","rich",["roomshare\\.jp/(en/)?post/.*"],"http://roomshare.jp/oembed.json"),new e.fn.oembed.OEmbedProvider("lanyard","rich",["lanyrd.com/\\d+/.+"],null,{yql:{xpath:'(//div[@class="primary"])[1]',from:"htmlstring",datareturn:function(e){if(!e.result)return false;return'<div class="oembedall-lanyard">'+e.result+"</div>"}}}),new e.fn.oembed.OEmbedProvider("asciiartfarts","rich",["asciiartfarts.com/\\d+.html"],null,{yql:{xpath:"//pre/font",from:"htmlstring",datareturn:function(e){if(!e.result)return false;return'<pre style="background-color:000;">'+e.result+"</div>"}}}),new e.fn.oembed.OEmbedProvider("opengraph","rich",[".*"],null,{yql:{xpath:"//meta|//title|//link",from:"html",datareturn:function(n){if(!n["og:title"]&&n["title"]&&n["description"])n["og:title"]=n["title"];if(!n["og:title"]&&!n["title"])return false;var r=e("<p/>");if(n["og:video"]){var i=e('<embed src="'+n["og:video"]+'"/>');i.attr("type",n["og:video:type"]||"application/x-shockwave-flash").css("max-height",t.maxHeight||"auto").css("max-width",t.maxWidth||"auto");if(n["og:video:width"])i.attr("width",n["og:video:width"]);if(n["og:video:height"])i.attr("height",n["og:video:height"]);r.append(i)}else if(n["og:image"]){var s=e('<img src="'+n["og:image"]+'">');s.css("max-height",t.maxHeight||"auto").css("max-width",t.maxWidth||"auto");if(n["og:image:width"])s.attr("width",n["og:image:width"]);if(n["og:image:height"])s.attr("height",n["og:image:height"]);r.append(s)}if(n["og:title"])r.append("<b>"+n["og:title"]+"</b><br/>");if(n["og:description"])r.append(n["og:description"]+"<br/>");else if(n["description"])r.append(n["description"]+"<br/>");return r}}})]}String.prototype.md5=function(){var e=function(e,t){var n=(e&65535)+(t&65535);var r=(e>>16)+(t>>16)+(n>>16);return r<<16|n&65535};var t=function(e,t){return e<<t|e>>>32-t};var n=function(n,r,i,s,o,u){return e(t(e(e(r,n),e(s,u)),o),i)};var r=function(e,t,r,i,s,o,u){return n(t&r|~t&i,e,t,s,o,u)};var i=function(e,t,r,i,s,o,u){return n(t&i|r&~i,e,t,s,o,u)};var s=function(e,t,r,i,s,o,u){return n(t^r^i,e,t,s,o,u)};var o=function(e,t,r,i,s,o,u){return n(r^(t|~i),e,t,s,o,u)};var u=function(t){var n,u,a,f,l,c=t.length;var h=1732584193;var p=-271733879;var v=-1732584194;var m=271733878;for(l=0;l<c;l+=16){n=h;u=p;a=v;f=m;h=r(h,p,v,m,t[l+0],7,-680876936);m=r(m,h,p,v,t[l+1],12,-389564586);v=r(v,m,h,p,t[l+2],17,606105819);p=r(p,v,m,h,t[l+3],22,-1044525330);h=r(h,p,v,m,t[l+4],7,-176418897);m=r(m,h,p,v,t[l+5],12,1200080426);v=r(v,m,h,p,t[l+6],17,-1473231341);p=r(p,v,m,h,t[l+7],22,-45705983);h=r(h,p,v,m,t[l+8],7,1770035416);m=r(m,h,p,v,t[l+9],12,-1958414417);v=r(v,m,h,p,t[l+10],17,-42063);p=r(p,v,m,h,t[l+11],22,-1990404162);h=r(h,p,v,m,t[l+12],7,1804603682);m=r(m,h,p,v,t[l+13],12,-40341101);v=r(v,m,h,p,t[l+14],17,-1502002290);p=r(p,v,m,h,t[l+15],22,1236535329);h=i(h,p,v,m,t[l+1],5,-165796510);m=i(m,h,p,v,t[l+6],9,-1069501632);v=i(v,m,h,p,t[l+11],14,643717713);p=i(p,v,m,h,t[l+0],20,-373897302);h=i(h,p,v,m,t[l+5],5,-701558691);m=i(m,h,p,v,t[l+10],9,38016083);v=i(v,m,h,p,t[l+15],14,-660478335);p=i(p,v,m,h,t[l+4],20,-405537848);h=i(h,p,v,m,t[l+9],5,568446438);m=i(m,h,p,v,t[l+14],9,-1019803690);v=i(v,m,h,p,t[l+3],14,-187363961);p=i(p,v,m,h,t[l+8],20,1163531501);h=i(h,p,v,m,t[l+13],5,-1444681467);m=i(m,h,p,v,t[l+2],9,-51403784);v=i(v,m,h,p,t[l+7],14,1735328473);p=i(p,v,m,h,t[l+12],20,-1926607734);h=s(h,p,v,m,t[l+5],4,-378558);m=s(m,h,p,v,t[l+8],11,-2022574463);v=s(v,m,h,p,t[l+11],16,1839030562);p=s(p,v,m,h,t[l+14],23,-35309556);h=s(h,p,v,m,t[l+1],4,-1530992060);m=s(m,h,p,v,t[l+4],11,1272893353);v=s(v,m,h,p,t[l+7],16,-155497632);p=s(p,v,m,h,t[l+10],23,-1094730640);h=s(h,p,v,m,t[l+13],4,681279174);m=s(m,h,p,v,t[l+0],11,-358537222);v=s(v,m,h,p,t[l+3],16,-722521979);p=s(p,v,m,h,t[l+6],23,76029189);h=s(h,p,v,m,t[l+9],4,-640364487);m=s(m,h,p,v,t[l+12],11,-421815835);v=s(v,m,h,p,t[l+15],16,530742520);p=s(p,v,m,h,t[l+2],23,-995338651);h=o(h,p,v,m,t[l+0],6,-198630844);m=o(m,h,p,v,t[l+7],10,1126891415);v=o(v,m,h,p,t[l+14],15,-1416354905);p=o(p,v,m,h,t[l+5],21,-57434055);h=o(h,p,v,m,t[l+12],6,1700485571);m=o(m,h,p,v,t[l+3],10,-1894986606);v=o(v,m,h,p,t[l+10],15,-1051523);p=o(p,v,m,h,t[l+1],21,-2054922799);h=o(h,p,v,m,t[l+8],6,1873313359);m=o(m,h,p,v,t[l+15],10,-30611744);v=o(v,m,h,p,t[l+6],15,-1560198380);p=o(p,v,m,h,t[l+13],21,1309151649);h=o(h,p,v,m,t[l+4],6,-145523070);m=o(m,h,p,v,t[l+11],10,-1120210379);v=o(v,m,h,p,t[l+2],15,718787259);p=o(p,v,m,h,t[l+9],21,-343485551);h=e(h,n);p=e(p,u);v=e(v,a);m=e(m,f)}return[h,p,v,m]};var a=function(e){var t="0123456789abcdef",n="",r,i=e.length*4;for(r=0;r<i;r++){n+=t.charAt(e[r>>2]>>r%4*8+4&15)+t.charAt(e[r>>2]>>r%4*8&15)}return n};var f=function(e){var t=(e.length+8>>6)+1;var n=[],r,i=t*16,s,o=e.length;for(r=0;r<i;r++){n.push(0)}for(s=0;s<o;s++){n[s>>2]|=(e.charCodeAt(s)&255)<<s%4*8}n[s>>2]|=128<<s%4*8;n[t*16-2]=o*8;return n};return a(u(f(this)))}
/* http://wpplus.endorph.net/resources/js/min/prettify.js */ !function(){var q=null;window.PR_SHOULD_USE_CONTINUATION=!0;(function(){function S(a){function d(e){var b=e.charCodeAt(0);if(b!==92)return b;var a=e.charAt(1);return(b=r[a])?b:"0"<=a&&a<="7"?parseInt(e.substring(1),8):a==="u"||a==="x"?parseInt(e.substring(2),16):e.charCodeAt(1)}function g(e){if(e<32)return(e<16?"\\x0":"\\x")+e.toString(16);e=String.fromCharCode(e);return e==="\\"||e==="-"||e==="]"||e==="^"?"\\"+e:e}function b(e){var b=e.substring(1,e.length-1).match(/\\u[\dA-Fa-f]{4}|\\x[\dA-Fa-f]{2}|\\[0-3][0-7]{0,2}|\\[0-7]{1,2}|\\[\S\s]|[^\\]/g),e=[],a=b[0]==="^",c=["["];a&&c.push("^");for(var a=a?1:0,f=b.length;a<f;++a){var h=b[a];if(/\\[bdsw]/i.test(h))c.push(h);else{var h=d(h),l;a+2<f&&"-"===b[a+1]?(l=d(b[a+2]),a+=2):l=h;e.push([h,l]);l<65||h>122||(l<65||h>90||e.push([Math.max(65,h)|32,Math.min(l,90)|32]),l<97||h>122||e.push([Math.max(97,h)&-33,Math.min(l,122)&-33]))}}e.sort(function(e,a){return e[0]-a[0]||a[1]-e[1]});b=[];f=[];for(a=0;a<e.length;++a)h=e[a],h[0]<=f[1]+1?f[1]=Math.max(f[1],h[1]):b.push(f=h);for(a=0;a<b.length;++a)h=b[a],c.push(g(h[0])),h[1]>h[0]&&(h[1]+1>h[0]&&c.push("-"),c.push(g(h[1])));c.push("]");return c.join("")}function s(e){for(var a=e.source.match(/\[(?:[^\\\]]|\\[\S\s])*]|\\u[\dA-Fa-f]{4}|\\x[\dA-Fa-f]{2}|\\\d+|\\[^\dux]|\(\?[!:=]|[()^]|[^()[\\^]+/g),c=a.length,d=[],f=0,h=0;f<c;++f){var l=a[f];l==="("?++h:"\\"===l.charAt(0)&&(l=+l.substring(1))&&(l<=h?d[l]=-1:a[f]=g(l))}for(f=1;f<d.length;++f)-1===d[f]&&(d[f]=++x);for(h=f=0;f<c;++f)l=a[f],l==="("?(++h,d[h]||(a[f]="(?:")):"\\"===l.charAt(0)&&(l=+l.substring(1))&&l<=h&&(a[f]="\\"+d[l]);for(f=0;f<c;++f)"^"===a[f]&&"^"!==a[f+1]&&(a[f]="");if(e.ignoreCase&&m)for(f=0;f<c;++f)l=a[f],e=l.charAt(0),l.length>=2&&e==="["?a[f]=b(l):e!=="\\"&&(a[f]=l.replace(/[A-Za-z]/g,function(a){a=a.charCodeAt(0);return"["+String.fromCharCode(a&-33,a|32)+"]"}));return a.join("")}for(var x=0,m=!1,j=!1,k=0,c=a.length;k<c;++k){var i=a[k];if(i.ignoreCase)j=!0;else if(/[a-z]/i.test(i.source.replace(/\\u[\da-f]{4}|\\x[\da-f]{2}|\\[^UXux]/gi,""))){m=!0;j=!1;break}}for(var r={b:8,t:9,n:10,v:11,f:12,r:13},n=[],k=0,c=a.length;k<c;++k){i=a[k];if(i.global||i.multiline)throw Error(""+i);n.push("(?:"+s(i)+")")}return RegExp(n.join("|"),j?"gi":"g")}function T(a,d){function g(a){var c=a.nodeType;if(c==1){if(!b.test(a.className)){for(c=a.firstChild;c;c=c.nextSibling)g(c);c=a.nodeName.toLowerCase();if("br"===c||"li"===c)s[j]="\n",m[j<<1]=x++,m[j++<<1|1]=a}}else if(c==3||c==4)c=a.nodeValue,c.length&&(c=d?c.replace(/\r\n?/g,"\n"):c.replace(/[\t\n\r ]+/g," "),s[j]=c,m[j<<1]=x,x+=c.length,m[j++<<1|1]=a)}var b=/(?:^|\s)nocode(?:\s|$)/,s=[],x=0,m=[],j=0;g(a);return{a:s.join("").replace(/\n$/,""),d:m}}function H(a,d,g,b){d&&(a={a:d,e:a},g(a),b.push.apply(b,a.g))}function U(a){for(var d=void 0,g=a.firstChild;g;g=g.nextSibling)var b=g.nodeType,d=b===1?d?a:g:b===3?V.test(g.nodeValue)?a:d:d;return d===a?void 0:d}function C(a,d){function g(a){for(var j=a.e,k=[j,"pln"],c=0,i=a.a.match(s)||[],r={},n=0,e=i.length;n<e;++n){var z=i[n],w=r[z],t=void 0,f;if(typeof w==="string")f=!1;else{var h=b[z.charAt(0)];if(h)t=z.match(h[1]),w=h[0];else{for(f=0;f<x;++f)if(h=d[f],t=z.match(h[1])){w=h[0];break}t||(w="pln")}if((f=w.length>=5&&"lang-"===w.substring(0,5))&&!(t&&typeof t[1]==="string"))f=!1,w="src";f||(r[z]=w)}h=c;c+=z.length;if(f){f=t[1];var l=z.indexOf(f),B=l+f.length;t[2]&&(B=z.length-t[2].length,l=B-f.length);w=w.substring(5);H(j+h,z.substring(0,l),g,k);H(j+h+l,f,I(w,f),k);H(j+h+B,z.substring(B),g,k)}else k.push(j+h,w)}a.g=k}var b={},s;(function(){for(var g=a.concat(d),j=[],k={},c=0,i=g.length;c<i;++c){var r=g[c],n=r[3];if(n)for(var e=n.length;--e>=0;)b[n.charAt(e)]=r;r=r[1];n=""+r;k.hasOwnProperty(n)||(j.push(r),k[n]=q)}j.push(/[\S\s]/);s=S(j)})();var x=d.length;return g}function v(a){var d=[],g=[];a.tripleQuotedStrings?d.push(["str",/^(?:'''(?:[^'\\]|\\[\S\s]|''?(?=[^']))*(?:'''|$)|"""(?:[^"\\]|\\[\S\s]|""?(?=[^"]))*(?:"""|$)|'(?:[^'\\]|\\[\S\s])*(?:'|$)|"(?:[^"\\]|\\[\S\s])*(?:"|$))/,q,"'\""]):a.multiLineStrings?d.push(["str",/^(?:'(?:[^'\\]|\\[\S\s])*(?:'|$)|"(?:[^"\\]|\\[\S\s])*(?:"|$)|`(?:[^\\`]|\\[\S\s])*(?:`|$))/,q,"'\"`"]):d.push(["str",/^(?:'(?:[^\n\r'\\]|\\.)*(?:'|$)|"(?:[^\n\r"\\]|\\.)*(?:"|$))/,q,"\"'"]);a.verbatimStrings&&g.push(["str",/^@"(?:[^"]|"")*(?:"|$)/,q]);var b=a.hashComments;b&&(a.cStyleComments?(b>1?d.push(["com",/^#(?:##(?:[^#]|#(?!##))*(?:###|$)|.*)/,q,"#"]):d.push(["com",/^#(?:(?:define|e(?:l|nd)if|else|error|ifn?def|include|line|pragma|undef|warning)\b|[^\n\r]*)/,q,"#"]),g.push(["str",/^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h(?:h|pp|\+\+)?|[a-z]\w*)>/,q])):d.push(["com",/^#[^\n\r]*/,q,"#"]));a.cStyleComments&&(g.push(["com",/^\/\/[^\n\r]*/,q]),g.push(["com",/^\/\*[\S\s]*?(?:\*\/|$)/,q]));if(b=a.regexLiterals){var s=(b=b>1?"":"\n\r")?".":"[\\S\\s]";g.push(["lang-regex",RegExp("^(?:^^\\.?|[+-]|[!=]=?=?|\\#|%=?|&&?=?|\\(|\\*=?|[+\\-]=|->|\\/=?|::?|<<?=?|>>?>?=?|,|;|\\?|@|\\[|~|{|\\^\\^?=?|\\|\\|?=?|break|case|continue|delete|do|else|finally|instanceof|return|throw|try|typeof)\\s*("+("/(?=[^/*"+b+"])(?:[^/\\x5B\\x5C"+b+"]|\\x5C"+s+"|\\x5B(?:[^\\x5C\\x5D"+b+"]|\\x5C"+s+")*(?:\\x5D|$))+/")+")")])}(b=a.types)&&g.push(["typ",b]);b=(""+a.keywords).replace(/^ | $/g,"");b.length&&g.push(["kwd",RegExp("^(?:"+b.replace(/[\s,]+/g,"|")+")\\b"),q]);d.push(["pln",/^\s+/,q," \r\n\t\u00a0"]);b="^.[^\\s\\w.$@'\"`/\\\\]*";a.regexLiterals&&(b+="(?!s*/)");g.push(["lit",/^@[$_a-z][\w$@]*/i,q],["typ",/^(?:[@_]?[A-Z]+[a-z][\w$@]*|\w+_t\b)/,q],["pln",/^[$_a-z][\w$@]*/i,q],["lit",/^(?:0x[\da-f]+|(?:\d(?:_\d+)*\d*(?:\.\d*)?|\.\d\+)(?:e[+-]?\d+)?)[a-z]*/i,q,"0123456789"],["pln",/^\\[\S\s]?/,q],["pun",RegExp(b),q]);return C(d,g)}function J(a,d,g){function b(a){var c=a.nodeType;if(c==1&&!x.test(a.className))if("br"===a.nodeName)s(a),a.parentNode&&a.parentNode.removeChild(a);else for(a=a.firstChild;a;a=a.nextSibling)b(a);else if((c==3||c==4)&&g){var d=a.nodeValue,i=d.match(m);if(i)c=d.substring(0,i.index),a.nodeValue=c,(d=d.substring(i.index+i[0].length))&&a.parentNode.insertBefore(j.createTextNode(d),a.nextSibling),s(a),c||a.parentNode.removeChild(a)}}function s(a){function b(a,c){var d=c?a.cloneNode(!1):a,e=a.parentNode;if(e){var e=b(e,1),g=a.nextSibling;e.appendChild(d);for(var i=g;i;i=g)g=i.nextSibling,e.appendChild(i)}return d}for(;!a.nextSibling;)if(a=a.parentNode,!a)return;for(var a=b(a.nextSibling,0),d;(d=a.parentNode)&&d.nodeType===1;)a=d;c.push(a)}for(var x=/(?:^|\s)nocode(?:\s|$)/,m=/\r\n?|\n/,j=a.ownerDocument,k=j.createElement("li");a.firstChild;)k.appendChild(a.firstChild);for(var c=[k],i=0;i<c.length;++i)b(c[i]);d===(d|0)&&c[0].setAttribute("value",d);var r=j.createElement("ol");r.className="linenums";for(var d=Math.max(0,d-1|0)||0,i=0,n=c.length;i<n;++i)k=c[i],k.className="L"+(i+d)%10,k.firstChild||k.appendChild(j.createTextNode("\u00a0")),r.appendChild(k);a.appendChild(r)}function p(a,d){for(var g=d.length;--g>=0;){var b=d[g];F.hasOwnProperty(b)?D.console&&console.warn("cannot override language handler %s",b):F[b]=a}}function I(a,d){if(!a||!F.hasOwnProperty(a))a=/^\s*</.test(d)?"default-markup":"default-code";return F[a]}function K(a){var d=a.h;try{var g=T(a.c,a.i),b=g.a;a.a=b;a.d=g.d;a.e=0;I(d,b)(a);var s=/\bMSIE\s(\d+)/.exec(navigator.userAgent),s=s&&+s[1]<=8,d=/\n/g,x=a.a,m=x.length,g=0,j=a.d,k=j.length,b=0,c=a.g,i=c.length,r=0;c[i]=m;var n,e;for(e=n=0;e<i;)c[e]!==c[e+2]?(c[n++]=c[e++],c[n++]=c[e++]):e+=2;i=n;for(e=n=0;e<i;){for(var p=c[e],w=c[e+1],t=e+2;t+2<=i&&c[t+1]===w;)t+=2;c[n++]=p;c[n++]=w;e=t}c.length=n;var f=a.c,h;if(f)h=f.style.display,f.style.display="none";try{for(;b<k;){var l=j[b+2]||m,B=c[r+2]||m,t=Math.min(l,B),A=j[b+1],G;if(A.nodeType!==1&&(G=x.substring(g,t))){s&&(G=G.replace(d,"\r"));A.nodeValue=G;var L=A.ownerDocument,o=L.createElement("span");o.className=c[r+1];var v=A.parentNode;v.replaceChild(o,A);o.appendChild(A);g<l&&(j[b+1]=A=L.createTextNode(x.substring(t,l)),v.insertBefore(A,o.nextSibling))}g=t;g>=l&&(b+=2);g>=B&&(r+=2)}}finally{if(f)f.style.display=h}}catch(u){D.console&&console.log(u&&u.stack||u)}}var D=window,y=["break,continue,do,else,for,if,return,while"],E=[[y,"auto,case,char,const,default,double,enum,extern,float,goto,inline,int,long,register,short,signed,sizeof,static,struct,switch,typedef,union,unsigned,void,volatile"],"catch,class,delete,false,import,new,operator,private,protected,public,this,throw,true,try,typeof"],M=[E,"alignof,align_union,asm,axiom,bool,concept,concept_map,const_cast,constexpr,decltype,delegate,dynamic_cast,explicit,export,friend,generic,late_check,mutable,namespace,nullptr,property,reinterpret_cast,static_assert,static_cast,template,typeid,typename,using,virtual,where"],N=[E,"abstract,assert,boolean,byte,extends,final,finally,implements,import,instanceof,interface,null,native,package,strictfp,super,synchronized,throws,transient"],O=[N,"as,base,by,checked,decimal,delegate,descending,dynamic,event,fixed,foreach,from,group,implicit,in,internal,into,is,let,lock,object,out,override,orderby,params,partial,readonly,ref,sbyte,sealed,stackalloc,string,select,uint,ulong,unchecked,unsafe,ushort,var,virtual,where"],E=[E,"debugger,eval,export,function,get,null,set,undefined,var,with,Infinity,NaN"],P=[y,"and,as,assert,class,def,del,elif,except,exec,finally,from,global,import,in,is,lambda,nonlocal,not,or,pass,print,raise,try,with,yield,False,True,None"],Q=[y,"alias,and,begin,case,class,def,defined,elsif,end,ensure,false,in,module,next,nil,not,or,redo,rescue,retry,self,super,then,true,undef,unless,until,when,yield,BEGIN,END"],W=[y,"as,assert,const,copy,drop,enum,extern,fail,false,fn,impl,let,log,loop,match,mod,move,mut,priv,pub,pure,ref,self,static,struct,true,trait,type,unsafe,use"],y=[y,"case,done,elif,esac,eval,fi,function,in,local,set,then,until"],R=/^(DIR|FILE|vector|(de|priority_)?queue|list|stack|(const_)?iterator|(multi)?(set|map)|bitset|u?(int|float)\d*)\b/,V=/\S/,X=v({keywords:[M,O,E,"caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END",P,Q,y],hashComments:!0,cStyleComments:!0,multiLineStrings:!0,regexLiterals:!0}),F={};p(X,["default-code"]);p(C([],[["pln",/^[^<?]+/],["dec",/^<!\w[^>]*(?:>|$)/],["com",/^<\!--[\S\s]*?(?:--\>|$)/],["lang-",/^<\?([\S\s]+?)(?:\?>|$)/],["lang-",/^<%([\S\s]+?)(?:%>|$)/],["pun",/^(?:<[%?]|[%?]>)/],["lang-",/^<xmp\b[^>]*>([\S\s]+?)<\/xmp\b[^>]*>/i],["lang-js",/^<script\b[^>]*>([\S\s]*?)(<\/script\b[^>]*>)/i],["lang-css",/^<style\b[^>]*>([\S\s]*?)(<\/style\b[^>]*>)/i],["lang-in.tag",/^(<\/?[a-z][^<>]*>)/i]]),["default-markup","htm","html","mxml","xhtml","xml","xsl"]);p(C([["pln",/^\s+/,q," \t\r\n"],["atv",/^(?:"[^"]*"?|'[^']*'?)/,q,"\"'"]],[["tag",/^^<\/?[a-z](?:[\w-.:]*\w)?|\/?>$/i],["atn",/^(?!style[\s=]|on)[a-z](?:[\w:-]*\w)?/i],["lang-uq.val",/^=\s*([^\s"'>]*(?:[^\s"'/>]|\/(?=\s)))/],["pun",/^[/<->]+/],["lang-js",/^on\w+\s*=\s*"([^"]+)"/i],["lang-js",/^on\w+\s*=\s*'([^']+)'/i],["lang-js",/^on\w+\s*=\s*([^\s"'>]+)/i],["lang-css",/^style\s*=\s*"([^"]+)"/i],["lang-css",/^style\s*=\s*'([^']+)'/i],["lang-css",/^style\s*=\s*([^\s"'>]+)/i]]),["in.tag"]);p(C([],[["atv",/^[\S\s]+/]]),["uq.val"]);p(v({keywords:M,hashComments:!0,cStyleComments:!0,types:R}),["c","cc","cpp","cxx","cyc","m"]);p(v({keywords:"null,true,false"}),["json"]);p(v({keywords:O,hashComments:!0,cStyleComments:!0,verbatimStrings:!0,types:R}),["cs"]);p(v({keywords:N,cStyleComments:!0}),["java"]);p(v({keywords:y,hashComments:!0,multiLineStrings:!0}),["bash","bsh","csh","sh"]);p(v({keywords:P,hashComments:!0,multiLineStrings:!0,tripleQuotedStrings:!0}),["cv","py","python"]);p(v({keywords:"caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END",hashComments:!0,multiLineStrings:!0,regexLiterals:2}),["perl","pl","pm"]);p(v({keywords:Q,hashComments:!0,multiLineStrings:!0,regexLiterals:!0}),["rb","ruby"]);p(v({keywords:E,cStyleComments:!0,regexLiterals:!0}),["javascript","js"]);p(v({keywords:"all,and,by,catch,class,else,extends,false,finally,for,if,in,is,isnt,loop,new,no,not,null,of,off,on,or,return,super,then,throw,true,try,unless,until,when,while,yes",hashComments:3,cStyleComments:!0,multilineStrings:!0,tripleQuotedStrings:!0,regexLiterals:!0}),["coffee"]);p(v({keywords:W,cStyleComments:!0,multilineStrings:!0}),["rc","rs","rust"]);p(C([],[["str",/^[\S\s]+/]]),["regex"]);var Y=D.PR={createSimpleLexer:C,registerLangHandler:p,sourceDecorator:v,PR_ATTRIB_NAME:"atn",PR_ATTRIB_VALUE:"atv",PR_COMMENT:"com",PR_DECLARATION:"dec",PR_KEYWORD:"kwd",PR_LITERAL:"lit",PR_NOCODE:"nocode",PR_PLAIN:"pln",PR_PUNCTUATION:"pun",PR_SOURCE:"src",PR_STRING:"str",PR_TAG:"tag",PR_TYPE:"typ",prettyPrintOne:D.prettyPrintOne=function(a,d,g){var b=document.createElement("div");b.innerHTML="<pre>"+a+"</pre>";b=b.firstChild;g&&J(b,g,!0);K({h:d,j:g,c:b,i:1});return b.innerHTML},prettyPrint:D.prettyPrint=function(a,d){function g(){for(var b=D.PR_SHOULD_USE_CONTINUATION?c.now()+250:Infinity;i<p.length&&c.now()<b;i++){for(var d=p[i],j=h,k=d;k=k.previousSibling;){var m=k.nodeType,o=(m===7||m===8)&&k.nodeValue;if(o?!/^\??prettify\b/.test(o):m!==3||/\S/.test(k.nodeValue))break;if(o){j={};o.replace(/\b(\w+)=([\w%+\-.:]+)/g,function(a,b,c){j[b]=c});break}}k=d.className;if((j!==h||e.test(k))&&!v.test(k)){m=!1;for(o=d.parentNode;o;o=o.parentNode)if(f.test(o.tagName)&&o.className&&e.test(o.className)){m=!0;break}if(!m){d.className+=" prettyprinted";m=j.lang;if(!m){var m=k.match(n),y;if(!m&&(y=U(d))&&t.test(y.tagName))m=y.className.match(n);m&&(m=m[1])}if(w.test(d.tagName))o=1;else var o=d.currentStyle,u=s.defaultView,o=(o=o?o.whiteSpace:u&&u.getComputedStyle?u.getComputedStyle(d,q).getPropertyValue("white-space"):0)&&"pre"===o.substring(0,3);u=j.linenums;if(!(u=u==="true"||+u))u=(u=k.match(/\blinenums\b(?::(\d+))?/))?u[1]&&u[1].length?+u[1]:!0:!1;u&&J(d,u,o);r={h:m,c:d,j:u,i:o};K(r)}}}i<p.length?setTimeout(g,250):"function"===typeof a&&a()}for(var b=d||document.body,s=b.ownerDocument||document,b=[b.getElementsByTagName("pre"),b.getElementsByTagName("code"),b.getElementsByTagName("xmp")],p=[],m=0;m<b.length;++m)for(var j=0,k=b[m].length;j<k;++j)p.push(b[m][j]);var b=q,c=Date;c.now||(c={now:function(){return+new Date}});var i=0,r,n=/\blang(?:uage)?-([\w.]+)(?!\S)/,e=/\bprettyprint\b/,v=/\bprettyprinted\b/,w=/pre|xmp/i,t=/^code$/i,f=/^(?:pre|code|xmp)$/i,h={};g()}};typeof define==="function"&&define.amd&&define("google-code-prettify",[],function(){return Y})})();}()
/* http://wpplus.endorph.net/resources/js/min/tea.js */ var Tea={};Tea.encrypt=function(e,t){if(e.length==0)return"";var n=Tea.strToLongs(Utf8.encode(e));if(n.length<=1)n[1]=0;var r=Tea.strToLongs(Utf8.encode(t).slice(0,16));var i=n.length;var s=n[i-1],o=n[0],u=2654435769;var a,f,l=Math.floor(6+52/i),c=0;while(l-->0){c+=u;f=c>>>2&3;for(var h=0;h<i;h++){o=n[(h+1)%i];a=(s>>>5^o<<2)+(o>>>3^s<<4)^(c^o)+(r[h&3^f]^s);s=n[h]+=a}}var p=Tea.longsToStr(n);return Base64.encode(p)};Tea.decrypt=function(e,t){if(e.length==0)return"";var n=Tea.strToLongs(Base64.decode(e));var r=Tea.strToLongs(Utf8.encode(t).slice(0,16));var i=n.length;var s=n[i-1],o=n[0],u=2654435769;var a,f,l=Math.floor(6+52/i),c=l*u;while(c!=0){f=c>>>2&3;for(var h=i-1;h>=0;h--){s=n[h>0?h-1:i-1];a=(s>>>5^o<<2)+(o>>>3^s<<4)^(c^o)+(r[h&3^f]^s);o=n[h]-=a}c-=u}var p=Tea.longsToStr(n);p=p.replace(/\0+$/,"");return Utf8.decode(p)};Tea.strToLongs=function(e){var t=new Array(Math.ceil(e.length/4));for(var n=0;n<t.length;n++){t[n]=e.charCodeAt(n*4)+(e.charCodeAt(n*4+1)<<8)+(e.charCodeAt(n*4+2)<<16)+(e.charCodeAt(n*4+3)<<24)}return t};Tea.longsToStr=function(e){var t=new Array(e.length);for(var n=0;n<e.length;n++){t[n]=String.fromCharCode(e[n]&255,e[n]>>>8&255,e[n]>>>16&255,e[n]>>>24&255)}return t.join("")};var Base64={};Base64.code="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";Base64.encode=function(e,t){t=typeof t=="undefined"?false:t;var n,r,i,s,o,u,a,f,l=[],c="",h,p,d;var v=Base64.code;p=t?Utf8.encode(e):e;h=p.length%3;if(h>0){while(h++<3){c+="=";p+="\0"}}for(h=0;h<p.length;h+=3){n=p.charCodeAt(h);r=p.charCodeAt(h+1);i=p.charCodeAt(h+2);s=n<<16|r<<8|i;o=s>>18&63;u=s>>12&63;a=s>>6&63;f=s&63;l[h/3]=v.charAt(o)+v.charAt(u)+v.charAt(a)+v.charAt(f)}d=l.join("");d=d.slice(0,d.length-c.length)+c;return d};Base64.decode=function(e,t){t=typeof t=="undefined"?false:t;var n,r,i,s,o,u,a,f,l=[],c,h;var p=Base64.code;h=t?Utf8.decode(e):e;for(var d=0;d<h.length;d+=4){s=p.indexOf(h.charAt(d));o=p.indexOf(h.charAt(d+1));u=p.indexOf(h.charAt(d+2));a=p.indexOf(h.charAt(d+3));f=s<<18|o<<12|u<<6|a;n=f>>>16&255;r=f>>>8&255;i=f&255;l[d/4]=String.fromCharCode(n,r,i);if(a==64)l[d/4]=String.fromCharCode(n,r);if(u==64)l[d/4]=String.fromCharCode(n)}c=l.join("");return t?Utf8.decode(c):c};var Utf8={};Utf8.encode=function(e){var t=e.replace(/[\u0080-\u07ff]/g,function(e){var t=e.charCodeAt(0);return String.fromCharCode(192|t>>6,128|t&63)});t=t.replace(/[\u0800-\uffff]/g,function(e){var t=e.charCodeAt(0);return String.fromCharCode(224|t>>12,128|t>>6&63,128|t&63)});return t};Utf8.decode=function(e){var t=e.replace(/[\u00e0-\u00ef][\u0080-\u00bf][\u0080-\u00bf]/g,function(e){var t=(e.charCodeAt(0)&15)<<12|(e.charCodeAt(1)&63)<<6|e.charCodeAt(2)&63;return String.fromCharCode(t)});t=t.replace(/[\u00c0-\u00df][\u0080-\u00bf]/g,function(e){var t=(e.charCodeAt(0)&31)<<6|e.charCodeAt(1)&63;return String.fromCharCode(t)});return t}
/* http://wpplus.endorph.net/resources/js/min/lang-css.js */ PR.registerLangHandler(PR.createSimpleLexer([["pln",/^[\t\n\f\r ]+/,null," \t\r\n\u000c"]],[["str",/^"(?:[^\n\f\r"\\]|\\(?:\r\n?|\n|\f)|\\[\S\s])*"/,null],["str",/^'(?:[^\n\f\r'\\]|\\(?:\r\n?|\n|\f)|\\[\S\s])*'/,null],["lang-css-str",/^url\(([^"')]+)\)/i],["kwd",/^(?:url|rgb|!important|@import|@page|@media|@charset|inherit)(?=[^\w-]|$)/i,null],["lang-css-kw",/^(-?(?:[_a-z]|\\[\da-f]+ ?)(?:[\w-]|\\\\[\da-f]+ ?)*)\s*:/i],["com",/^\/\*[^*]*\*+(?:[^*/][^*]*\*+)*\//],["com",/^(?:<\!--|--\>)/],["lit",/^(?:\d+|\d*\.\d+)(?:%|[a-z]+)?/i],["lit",/^#[\da-f]{3,6}\b/i],["pln",/^-?(?:[_a-z]|\\[\da-f]+ ?)(?:[\w-]|\\\\[\da-f]+ ?)*/i],["pun",/^[^\s\w"']+/]]),["css"]);PR.registerLangHandler(PR.createSimpleLexer([],[["kwd",/^-?(?:[_a-z]|\\[\da-f]+ ?)(?:[\w-]|\\\\[\da-f]+ ?)*/i]]),["css-kw"]);PR.registerLangHandler(PR.createSimpleLexer([],[["str",/^[^"')]+/]]),["css-str"]);
/* http://wpplus.endorph.net/resources/js/min/lang-sql.js */ PR.registerLangHandler(PR.createSimpleLexer([["pln",/^[\t\n\r \xa0]+/,null,"\t\n\r \u00a0"],["str",/^(?:"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')/,null,"\"'"]],[["com",/^(?:--[^\n\r]*|\/\*[\S\s]*?(?:\*\/|$))/],["kwd",/^(?:add|all|alter|and|any|apply|as|asc|authorization|backup|begin|between|break|browse|bulk|by|cascade|case|check|checkpoint|close|clustered|coalesce|collate|column|commit|compute|connect|constraint|contains|containstable|continue|convert|create|cross|current|current_date|current_time|current_timestamp|current_user|cursor|database|dbcc|deallocate|declare|default|delete|deny|desc|disk|distinct|distributed|double|drop|dummy|dump|else|end|errlvl|escape|except|exec|execute|exists|exit|fetch|file|fillfactor|following|for|foreign|freetext|freetexttable|from|full|function|goto|grant|group|having|holdlock|identity|identitycol|identity_insert|if|in|index|inner|insert|intersect|into|is|join|key|kill|left|like|lineno|load|match|matched|merge|natural|national|nocheck|nonclustered|nocycle|not|null|nullif|of|off|offsets|on|open|opendatasource|openquery|openrowset|openxml|option|or|order|outer|over|partition|percent|pivot|plan|preceding|precision|primary|print|proc|procedure|public|raiserror|read|readtext|reconfigure|references|replication|restore|restrict|return|revoke|right|rollback|rowcount|rowguidcol|rows?|rule|save|schema|select|session_user|set|setuser|shutdown|some|start|statistics|system_user|table|textsize|then|to|top|tran|transaction|trigger|truncate|tsequal|unbounded|union|unique|unpivot|update|updatetext|use|user|using|values|varying|view|waitfor|when|where|while|with|within|writetext|xml)(?=[^\w-]|$)/i,null],["lit",/^[+-]?(?:0x[\da-f]+|(?:\.\d+|\d+(?:\.\d*)?)(?:e[+-]?\d+)?)/i],["pln",/^[_a-z][\w-]*/i],["pun",/^[^\w\t\n\r "'\xa0][^\w\t\n\r "'+\xa0-]*/]]),["sql"]);

var _script_resources = {
	/* http://wpplus.endorph.net/resources/png/angry.png */ emoticon_angry : { data : 'iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABGdBTUEAANbY1E9YMgAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAQZSURBVHjaYmRAA////2d68+YN9+/fv4Xev38v9O3bNy6QOBcX1zchIaH3LCwsb0VERL4yMjL+Q9YHEEAsaIawvXz5UvrduTUe3D+uRUpw/NXi4+ESAsl9evXt/ZcbzDfec2ot+WsUsgOo9inQsF8wvQABxIhkCPfjm6c0/19dWCeprOjFKmfKzMDGx8DAygVR8PsbA8PPjwy/H5/5++DqlW0cxllNsupm14GGfQVJAwQQI9QQzsfXTpkwne+cJ61josIgIM/AwMzMgBX8/cvA8OEhw9MrZ+780s1LUtSzPwM07DtAALGAwuT+/ftyPw609GlqCqj8Z+dgOL9pAQMLOzuDipEpAxcfP1j/z+/fGK4ePgCylcHI3ZtBWopb5fqR3r4HfPKxQDNuAQQQKIx4ftzY5qnAfsmYgTuIgfH7CwYBAQ6GW5cuMDy7dYFBVlWd4f+/fwyP79wCG6huYAQMsGcMDNwiDArsh4zvX9/iw6CQMwsggJh+/PghzPr8YCQ7Lw8jw8+XDAxfnzAoqfIyfPjwjuH9u/cMvFx/GPh4/jF8/PCB4ePHD2A5hu9PgOreMID0sD0/FPrx40cRgABiAUaxIMfHS+r/BDmBrnnGwMgGDLY/DAz/vv0Hu0BOlglMH/kB4TP8eA6l/zP8Y2VlAOn98OGDAEAAsTx58oRD4d9j7v+MMgx/f/9ggAWxtiY0thieo/D//3oOVAeNaWBSYv/3hPvBq1ccAAHEAkxkQFeAYuMlw39WNqAkODwZ9GyADKCp/xnegjXp2YMkgOjnWwYmoPq/oBT0F5KMeHl5GQACiAWYYn9845T6yvnvDj8rGyvDXxZGBma2/wyMrEAVQPznJzTlMkFdAXLyL7CZwKT1m+E7v8pXfn7+HwABBDLow0NWzZvCDHfMGNl+M7CCDADa+OouA8OjC0A9XyAG8AszM4hq/mUQkwUaAoxrRmiQvWJSua0KNAMggFj+/v375gOn8eqfP3aacjH9YmQABsXDi4wMX+4zMYhq/GPgEIfo+HLnL8Pr68wM33/8Y5DX/8/A8p6B4fMPtv8fOPRX/vv37y1AADGCEuSDBw/U3hxKX2wovMvkFycbww+mXwyCStgT9strDAyCzKwMzL9+M5x/6XFGxGl6rIKCwi2AAGIC5WIg4yGzSn7x7Xdm9zn/AQ0RwG4Iww8GBnEJBrAhQLUPmTVyi0F6QWYABBA4CEF5RUrZ+Own2bKwM8/tN/9+z/aX4R1EI7IhDJ+AYfaa9e+5d/Zb3kkVhcqomp4D6QVJAwQQI3oxcurUKelnlxZ5iDCdjZcTeKQuKvAG7L7XH0Q+PPogd/PNP+OFUnpxO8zMzFCKEYAAYsRVsL19+1bk9evXQkDMCRIXFRX9DsTvhIWF32Ar2AACDABUWaFIEGA1owAAAABJRU5ErkJggg==', type : 'image/png' },
	/* http://wpplus.endorph.net/resources/png/blushing.png */ emoticon_blushing : { data : 'iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABGdBTUEAANbY1E9YMgAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAARuSURBVHjaYmRAA////2d69+4dz8+fPwW/fv0q9OHDB66/f/8ycnFxfefj43sHZL9TUlL6zMjI+A9ZH0AAMSJzVq1axQlUrCT357Y996/rETwcf7X4eLiEQHKfPn97/+UH843PHOrL+HQDd9y9e/epo6PjD5hegACCG7R+/XoBfTVhNeYbK2oklRW9WOVMmRnY+BgYWLkgCn5/Y2D4+ZHh9+Mz/57fvredUTOm8eztV7cDAwM/gKQBAghs0MWLF7m5f78247gxbZa0jokKg4A8AwMzMwNW8PcvA8OHhwxPr5y581urIOXBx79ngS77AhBATKAwAWKFXycndklLcaswcAJd8PM1w7eH+xjubM1n+P/lCRiD2CAxkBxIDUjt9+M9vTIyMnIgMwACiGnv3r2CTPd2+SqwXzJm4BYBBsYzhjenFjDcuXKR4RuDAgPjl1cMjN+fgtl3L51heH18DlgNSK0C+0XjX7d3eAHdyQMQQEzAWJDkfH86kJ2Xh5Hh50uGz4+OMHDw8DBcO3MFjBn+PGEAiYPYV8/dZODg4werAYkB9TCwPT8UCoxhEYAAYlFRUeFgu3pJ/Z8gJwPTl2cMPDxsDIxsjAz/vv2HhMmP52AKxucVZGNg+A5kA9X+Y2Vl4Ph4SePly5eCAAHE8vbtWzaFf4+5/zPKMPz++Q2smIWBiUFJkYOBmZUTyIMYpK3JxQAy6s/X5wz/f0OTEJBi//eE68HLl+wAAcTCzc3NxAi05P/3l2A55j+sDH9YGRnM7JkZGDl+ATW/BYvr2TMy/Aemmr+fnjMwfWNl+MvyGx6RvLy8DAABxMLBwfHjG6fUV64/d/jZvzFBDGMEpgppJgZGdiCHFaoaqI8RlPy+/2P4D/QmKHH85PrH8JFL7Ts/P/8PgABi4uHhef+BVfMmLHk+ADr7w39mBiYOoE4uIGb5A8Fsvxn+A/H9D38ZHv9G5I4PbIp3gdnnA0AAsdw9f/79V2bNNTL/d5pyiPxmVAS65tb9Xwz3rgHjFJgaOEUgGr6/AYYvEAvLMTDISQBt/MrI8OM/G8MHdv1l79+/fwcQQIx6enrcGzdulH2zL3OxkcBOEyaJ/wyfge7+D3TEu+sMDN+A3vkOzATcwHAX0mFgEBVn+M/4jYHx3wtGhrPvXa6KOs8KUVBQuAUQQMzAqGMCMn7K6rhf+vL6rr0w91NBdhagTwQY/vMrAl2gxPBPUgtoCJDm5mH4//czw3/m7wxMl17pvv+nVBavZWBxFVgS/AUIIEZwbAP1Xb16lenD88uabM+m1+rLHPdmFfzFxADKrxzQwAAF9CcGhl/vWRkuPjM78EMiq1zDyPWamJgYSIYRIIBABjFBDWOdOXPmfwMDA/FnlxZ5iDCdjZcTeKQhKvCGH2TO6w8iHx99kLvx5p/xQim9uB1mZmZPQS4BRTIoeQEEEMwgBqgAu6en5+9FixaxAROqyOvXr4WAGJQqGURFRb8D8TthYeE3IiIiX4GGsEKSJAPIsP8AAQYArMC1QKd2ei4AAAAASUVORK5CYII=', type : 'image/png' },
	/* http://wpplus.endorph.net/resources/png/confused.png */ emoticon_confused : { data : 'iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABGdBTUEAANbY1E9YMgAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAASDSURBVHjaYmRAA////2d69+4dz8+fPwXfv38v9O3bN66/f/8ysrKyfhcWFn735s2bd8bGxp8ZGRn/IesDCCBGZM6qVas4OTg4lFSYHtpz/7oewcPxV4uPh0sIJPfp87f3X34w3/jMob6MXc1rx5MnT546Ojr+gOkFCCC4QevXrxfQVxNWY76xokZSWdGLVc6UmYGNj4GBlQui4Pc3BoafHxl+Pz7z7/nte9sZNWMaz95+dTswMPADSBoggMAGXbx4kZv792szjhvTZknrmKgwCMgzMDAzo/r52wuGS/vXMnz+8JZBWdeW4e/713d+axWkPPj49yzQZV8AAogJFCZArPDr5MQuaSluFQYOLob/318w/Hl/G6wZjIF8hl/vGGTU9BgExGQZrp7axSAszKLy/XhPr4yMjBzIDIAAYtm7d6+g2Kdzvgrsl4y//7Nm+HpzB8Pzx08YXr/+BnaIoroSg6KWEcOlEwfBfD0TKwaWvx8ZPvz4w6DAftHo/u0dXgwqOU8AAogJGCOSnO9PB7Lz8jCys/xhEOTjY5CWk2T48Po9w5vnrxkU5EWALnrCcO3MFTBm+PWMQVWem4Gfm5EBpIft+aFQYAyLAAQQi4qKCgfb1Uvq/wQ5GZh/vmJgYmFkEOJlYPjx8ScDIzCYGH+9BLvk37f/kLACqmH8/4+Bg+Etw19WVgaOj5fUX758KQgQQCxv375lU/j3mPs/owzD398/GGBBrK0BjS2G5xC+JoT//9dzoDpomgMmJfZ/T7gfvHzJDhBALNzc3EyMbEDRvy8Z/jCzMjAxMTEwsv9n0LOHpIz/QJvBYQPj/3jLwARU/+PLfwbWf78ZQHp5eXkZAAKIBZgAf3zjlPrK+e8OPxsHO8M/FhYGZiYWBkaWnwwMbH8R0Q9zBdCi3++ZGP4x/WH49ec3wzdOla/8/Pw/AAKIiYeH5/0HVs2b4ETFCtTM9IOBkQMUY0BDgIHPwPobgln+g90H9A8DMyfQS1yQHPKKWfUOFxfXB4AAYjp//vz7jxyGa37+YPsPSoNMXH9B+Y3hH/Mfhi/vgFnjDRPD57dA/Pkf0BV/Gf4CXcrE8wuYXv8yAPUwfGDXWwHMk+8AAohRT0+Pe+PGjbJvDqUvNhTeZcIMTNQMnAwM944zMJzaxYmSuA1tvzOoOwIZX4DufcrAcOGF20Vh55kRCgoKtwACiBkYdUxAxk9ZLY9LX57ftRdmeSrIyMTAwKPAwKBi/IdBRe8PgyqQ1rT9819CGej97wyMDG8YGG6+Mn7/S7E4UcvA4iqwJPgLEECgqGABYrarV68yfXh+WZPt2fRafZnj3qyCv5gYQDHOAXUOKJ9/AqbH96wMF5+ZHfghkVWuYeR6TUxMDCTDCBBAIIOYoIaxzpw587+BgYH4s0uLPESYzsbLCTzSEBV4ww8y5/UHkY+PPsjdePPPeKGUXtwOMzOzpyCXAKVASe8PQADBDGKACrB7enr+XrRoERswoYq8fv1aCIjBASUqKvodiN8BC7c3IiIiX4GGsIISPCR6Gf4DBBgAVzGu2IArOysAAAAASUVORK5CYII=', type : 'image/png' },
	/* http://wpplus.endorph.net/resources/png/cool.png */ emoticon_cool : { data : 'iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABGdBTUEAANbY1E9YMgAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAP7SURBVHjaYmRAA////2cCUtzPnz8X+vr1q9CHDx+4QOICAgLfeHh43ktISLwFcr8yMjL+Q9YHEECMaIawffz4UfrZsSUe3D+uRfJw/NXi4+ESAsl9+vzt/ZcfzDe+cmotkbKK2cHPz/8UaNgvmF6AAGJEMoT78c1Tmv+vLqyTVFb0YpUzZWZg42NgYOWCKPj9jYHh50eG34/P/H1+9/42Ru34Jll1s+tAw76CpAECiBFqCOfja6dMmM53zpPWMVFhEJBnYGBmZsAK/v5lYPjwkOHplTN3/hmWJ8lqmZ0BGvYdIIAYQWFy/+ZN1Wtz4pYw/Gcw+ckiB1YvJy3IoGgqwyAsxA/mv333keH+6ScMj56+B/PZ/zxiYGBkOKOaujhWTU3tFkAAMb59+5ZveV5okqSMUJ+AnC4jCxs7w59fPxleP73P8PrRYwZF8c8MIMOfAQ0QlZNlEJVWZICp+fDo8v9nT9+VRU1cPQsggFh+//4t/J+JMfLri9tgb/5m5mFg/fsFaBDEZpgLQQBkMEgOpgash1Ek9M+XL+sAAojl379/ggGGT9Qff/rPcPHSBbim988hBvEzy0D4d5+AaZZvgnA1+npMDLJ8T9T/srIKAAQQ05MnTzjY/z3mNjJkZLAxxQxgRYVnDCqK3zHEQWpN9IFhBdQLMgMggFiEhIQYGNkYGJh+v2BQUmdlkJD9x3DjNtBAXSYGTn5mBiOTvyD3AFMCK8P3jyD2RwYN1b8MXFzAdPv3N1gvLy8vA0AAsXBxcf34xin1lfPfHf7/LKwMHDwMDFauQINZgXpYES4wtobQ/34zMHx/9pvhH1DBrz+/Gb5xqnwFJs4fAAHEBDTowwdWzZvgKBX4zfDy8W+GD/eA4c4G1MGKhLl+g8Xun//N8OIlUC3vb7DBr5hUboPMAAgglr9//775wGm8+uePnaZcTL8YlW0YGG7s/cVwbyUDA48IAwOnCCTxf3/zn+HLGwYGQWkGBmULYCL+zMDw+Qfb/w8c+iuBEfYWIICYgGH0Rc4sfsu9/w5n/30CRQsDg0YoULE7LMr/gzEIyNoDxf0gav4Bc8y9305nVawytggKCn4GCCAWUC4Gpu6H75/lF9+++2GBOtcpRcY/QJuVIBgF/ADid0AMdNntd2YPmTVyixUUFB6CzAAIICZwhgPmFSll47OfZMvCzj6x3/z7PdtfsIYfaIYAXfzrNevf08/tt7yTKgqVUTU9B9ILkgYIIIxi5NSpU9LPLi3yEGE6Gy8n8EhdVOCNANiLH0Q+PPogd/PNP+OFUnpxO8zMzFCKEYAAYsRWsL1584YbmAdFXr9+LQTEnCBxUVHR70D8TlhY+I2IiAhGwQYQYAC41JKX2JWGWQAAAABJRU5ErkJggg==', type : 'image/png' },
	/* http://wpplus.endorph.net/resources/png/crying.png */ emoticon_cry : { data : 'iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABGdBTUEAANbY1E9YMgAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAPDSURBVHjaYmTAAq7umKrC8+2qIw/7P2k+Xs5/ILFPn78zffnB9PwLt/ZebY/sO+h6AAKIEZlz5sxmLr5bq2MVNPV+sMqbLGBg42NgYOWCSP7+xsDw8yPD70dnEx5cv8TxXTh6ib67+1eYXoAAght0+/Y2do6Ts5tldExLGQTkGRiYmRmwgr9/GRg+PGR4cuV09x/pvDpFR8cfIGGAAGKBm3hoQZmMIk8pAyfQBT9fM+AFQDUyUjyld+9N/wzkNYOEAAKICURc3zpFTer/yTgGbhEGhq/PwPjfq6NA+iEDw/dnEAxkg8U+PYNgoFqQnps7J2uAzAAIILCL/j7cFcsuzKPC8PMl0DVAgS/PGMA2sLCiOITpM9ClIMwjBeaz8/Ko/L67O/r///91AAEENoj/xw2Xf8BAZQTa/PfrB4Zf3/4xPPv0g4H/01cGUXEesKbXL78wfHz3kUGKj4OB7ccHBhYOAYZ/rKxAvTdz79y5sx4ggMAWs/97rP2X+TtDt+ZioIs+M2w9+Irh/PlPDDevP2B4dOcxGIPYIDGQ3JdvHxi6dBYz/Gf8BtLLzcjIyAEQAEkAtv8Ds9HY/9Y9gAcs3oQADOjnAPft1gALMUkAzlinABIcJwAzFqIADhABANgsjgDYSoYANAzjAP3v1wAb8uMAF/3MALJP5ALz7vJjAojR98zr/yBXLb8nysAqwMrAyvKb4T8bKwMT+29gEoCGEeNvCP2LleEfkPn3J1DNX1aGD+9+Myywesww9RQzA0AAMW02EWVsvpLcwsnMyMDI9puBkZ0BYggo9Fh/M/z5D8T/oNEClGcCGgqKA0bm3wzcwIBx2p165rDpb2WAAIK7aME16f+CCr8YGXmBHGhivruLgeHlTQhbSIGBQcMX5Cog/gNM6O+AEfiU7X+C1lNwogYIIKaLD34zZL46zXHvt9PZf5+gNnMADbgHZIozMOjGQzCnCCNYjIENoobpOwMDSA9IL8gMgACCZ5Gta2fYSX+asUBP/oIioyADw0dg1uKXQU3Q74EGCQoAGW8YGC4+Nnj4lD8jzjs44xBIDiCAwNEvt+bZfxYVy7MnOJLDjj6w2Pz9HdtffpD3fiCZAmQLApPUr9esf488sthylC019KuG7TmQXpA0QACh5P6uA6f/X7n9hIH/7UoG3f83ThrI3VbXkfgNcgPDlResHy48Ur15mVHD/KNwOINSSgBzAyPjP5hegABiRM+PMMOOXXsJ5j88AwlteRN1MG2lJc6goyrDUOZgiqIXIIAYgfmEgRoAIMAA2xFyq0mJstEAAAAASUVORK5CYII=', type : 'image/png' },
	/* http://wpplus.endorph.net/resources/png/frown.png */ emoticon_frown : { data : 'iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABGdBTUEAANbY1E9YMgAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAPjSURBVHjaYmRAA////2d68+YN9+/fv4Xev38v9O3bNy6QOBcX1zchIaH3LCwsb0VERL4yMjL+Q9YHEEAsaIawvXz5UvrduTUe3D+uRUpw/NXi4+ESAsl9evXt/ZcbzDfec2ot+WsUsgOo9inQsF8wvQABxIhkCPfjm6c0/19dWCeprOjFKmfKzMDGx8DAygVR8PsbA8PPjwy/H5/5++DqlW0cxllNsupm14GGfQVJAwQQI9QQzsfXTpkwne+cJ61josIgIM/AwMzMgAH+/oXQHx4yPL1y5s4v3bwkRT37M0DDvgMEEAsoTO7fvy/340BLn6amgAoDJ9AFP18z4AVANdJS3CrXj/T2PeCTjwWacQsggJiAwjw/bmzzVGC/ZMzALcLA8PUZGH++sorh0v7lEP73Z2A2SAzM/wTEQLUgPd+ub/EBmQEQQEw/fvwQZn1+MJKdl4eR4edLoGuegPHSpecZrhy6DOF/esJw+OJJsBiY/x2Iv75hAOlhe34o9OPHjyIAAcQCjGJBjo+X1P8JcjIwAm1m/AsPf4ZPP/4zMPx4DmYzv+SECEL5DEC5f6ysDCC9Hz58EAAIIJYnT55wKPx7zP2fUYbh7+8fDLAgtjTkZtCRB7EgGlMDuBmO32Vk+P/rOVAdNKaBSYn93xPuB69ecQAEEAswkTEwsoFi5CXDf1Y2oCREkZ49hPGf4S2YZlJgZLBWAPJ/vGVgAqr/C0pBfyHJiJeXlwEggFiAKfbHN06pr5z/7vCzsrEy/GVhZGBm+8/AyApUAcR/fkJTLhPUFSD6F8gCUNL6zfCdX+UrPz//D4AAAhn04SGr5k1hhjtmjGy/GVhBBgBtfHWXgeHRBaCeLxAD+IWZGUQ1/zKIyQINAeYHxv8Q8VdMKrdVgWYABBDL379/33zgNF7988dOUy6mX4wMwGT08CIjw5f7TAyiGv8YOMQhOr7c+cvw+jozw/cf/xjk9f8zsLxnYPj8g+3/Bw79lf/+/XsLEECMoAT54MEDtTeH0hcbCu8y+cXJxvCD6ReDoBL2tPjyGgODIDMrA/Ov3wznX3qcEXGaHqugoHALIICYQLkYyHjIrJJffPud2X3Of0BDBHCk6B8MDOISDGBDgGofMmvkFoP0gswACCBwEILyipSy8dlPsmVhZ57bb/79nu0vwzuIRmRDGD4Bw+w1699z7+y3vJMqCpVRNT0H0guSBgggRvRi5NSpU9LPLi3yEGE6Gy8n8EhdVOAN2H2vP4h8ePRB7uabf8YLpfTidpiZmaEUIwABxIirYHv79q3I69evhYAYnKRFRUW/A/E7YWHhN9gKNoAAAwBqp5zNNpMZBwAAAABJRU5ErkJggg==', type : 'image/png' },
	/* http://wpplus.endorph.net/resources/png/gasp.png */ emoticon_gasp : { data : 'iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABGdBTUEAANbY1E9YMgAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAN8SURBVHjaYmTAAv7//88IpJifPHnC+vTpU1aQmLS09G8ZGZnfQOZfRkbG/+h6AAKIBYshLNd2TlXn/XI9k5vzj5sxL5cySPzjpW/3H51i3vOFW2syUM1NoGF/kPUBBBAjMufFxYvcP+7MKpRSVqhllTNlY2DjY2Bg5YJI/v7GwPDzI8Pvx2d+Pbv7oJlDJa1fQl//K0wvQADBDbp79ww/+/HWtdI6ps4MAvJAjzEzYAV//zIwfHjI8PTK6b0/LauDlZVNPoKEAQIIbNDVq1fZGA5WzNHSEIhlkDZmIAo8Pctw7caHxQz2HSna2tq/AAKICRywD/dqK7JdimbgFmFg+PoMjC/tXw7GDN+fgTGcD5L/BMRAtSA9/x8d0AeZARBAoMBmZnt+JJedl4eJ4edLYDgARYDxdO3MFbDFevrgsEbl/4Y4CqSH/dnBTAaGrHSAAGJ5/vw5G8fHiy7/BDkZGIE2M7IBfQsMhn/foDH84zmYQub//wVh/2NlZQDpBZrBChBALPfu3WNW+/dY9D+jDMPf3z8YYEGsrQmNLYbnKPz/v54D1UGTCuM/BvZ/T0RvAc0ACCAWERERoCtAsfGS4T8rGwMoKTJyAL1gD4nQ/wxvIV6C8X+8ZWACqv/7iwFMgPSCzAAIIBY+Pr6/3zilXnP+uyPLysbK8JeFkYGZ6T8DEyskrOAA5gomIPELZAEoaf1m+MCi9hpkBkAAMUlKSv5+z6q5B5wW2H4zsLL/YmBiB+oCshlYfzOcP/6b4cwWIJsLIsbE+JuBkQWImSEmf2BXOgAyAyCAQOb/+cBhOv3nD7Z/LCAeKCj4IPRPIP/ObQaG++8YGD7/QMgx8jIwAB3OANLzkd1gMsgMgABiAmVAUd3giw/+2y/99wma+zggmJ0H4TM2Xqg4HwM0FhkY7v12WippGHsRZAZAAMGzyJkzu/m5r1dvUpc+ZccoCtIJ0fjyGkReXAsU9UAMNIDhDQPDjedmx75qtXqZmLiCswhAAKGgizt3cp9Z5FDzax/bz//ngQXBTSB+CMUg9mmG/z93sf48tci+bufORdzQ4gYMAAKIEd2w/fv3s3y+vUZdkOVMkRz/Y2dRgTfyIPHXH0QePvoou/f9H5M+XtWQm46OjijFCEAAMeIq2A4cOMDMy8vL9urVK3CZJSYm9ufz58+/HBwcsBZsAAEGAJ0DYmkDOnX3AAAAAElFTkSuQmCC', type : 'image/png' },
	/* http://wpplus.endorph.net/resources/png/grin.png */ emoticon_grin : { data : 'iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABGdBTUEAANbY1E9YMgAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAQaSURBVHjaYmRAA////2cCUtw/fvwQ+vz5s9D379+5QOKcnJzfeHl533NwcLwFcr8yMjL+Q9YHEEAsaIawffz4UfrZsSUe3D+uRfJw/NWS4uESAsl9+vzt/asfzDe+cmotkbKK2QFU+xRo2C+YXoAAYkQyhPvmqQOaTHcW1Clo63ixypkyM7DxMTCwckEU/P7GwPDzI8Pvx2f+Prh6Zds/lYQmdTOH60DDvoKkAQKIEWoI5+Nrp0yYznfOk9YxUWEQkGdgYGZmwAr+/mVg+PCQ4emVM3f+GZYnyWqZnQEa9h0ggBhBYQIMC9VXq5OXKCtymDBIGzMQBZ6eZbh7/8cZAf/pscLCwrcAAggUsDxPjizylPp/ypiBWwQYjM/A+NL+5WDM8P0ZGMP5IPlPQAxUC9Lz8tRyH5AZAAHE8vLlS+H/D3ZGsgvzMDL8fAkMB6AwKwPDtTNXwBbr6SuDaRT+b4ij2HmBeh7sCn31KmwdQACx/Pv3T5Dvxy31f6ycDIxAmxnZgMEGDIZ/3/5DVP94DqaQ+f9/Qdj/WFkZQHr//v0rABBALL9+/eLg+veY+z+jDMOvH98Z2BggEamtCY0thuco/P+/njP8/Q0K8/8MTIz/Gdj/PeH+9O0bB0AAsfz58wfoClBsvGS4c+ELAzOXAIOI9H8GXXNmBkYOoEaGtxAv2TMy/P/BwPD21SuGH69EGT5+vMOgpssD1vv7928GgABiAcbajw8sMl85/93iF+PlYnj5W4Thn2IBw/0b+xi+PNvPwPLnPQMz71+Gn99FGHikHBl4NZwYPjyewMACFPv17yPDBxa1ryAzAAKIRVRU9MNDLvWbDAy3zDhVfjP8vfyWgVPMgIFP1YXhzZt3DMIScgyMf76A2SIiQgx/3t1lYHz3kUEImko+sCvdVpWS+gAQQEz8/PxvvgtZr/75g+0/t9BvBnbONwzf7myFJGYWTmDM8DOwCUqD2SDw7uomBgau1wyiYsAIBur5K+qwEmjGW4AAAifIBw8eqL05lL7YUHiXyX9RBoY7hxkYfvGYM7Ao+DPIKRgx/GfmZ3h8dz/DnwcbGZifn2GQcfvLwPOegeH8S48zIk7TYxUUFG4BBBA8ixzbtcqU+1n7Aj35C4p/uYEJ9zojw+tH/+EJmfMvMwOP4j8GKYX/DKzAWLv42ODhR/HSODuvqNOgLAIQQPBM++LFC+6H149oMj2eXKcvc9yLVfAXMwMwxn/+gSY+UDnxCejS96x/L76w2v5bKrNJVc/pupiY2BeQPEAAMaIXIzdv3pR+fHa+h8Df4/ESfPfUhXlfCYDk3n4W+/Dik9LND8yWC8V0onbo6emhFCMAAcSIrWB78+YN99u3b0Vev34tBMTgUAbG7ncgfgfMoG9EREQwCjaAAAMAgga1NfIaA8QAAAAASUVORK5CYII=', type : 'image/png' },
	/* http://wpplus.endorph.net/resources/png/kiss.png */ emoticon_kiss : { data : 'iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABGdBTUEAANbY1E9YMgAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAQqSURBVHjaYmRAA////2cCUtzPnz8X+vr1q9CHDx+4QOICAgLfeHh43ktISLwFcr8yMjL+Q9YHEECMaIawffz4UfrZsSUe3D+uRfJw/NXi4+ESAsl9+vzt/ZcfzDe+cmotkbKK2cHPz/8UaNgvmF6AAGJEMoT78c1Tmv+vLqyTVFb0YpUzZWZg42NgYOWCKPj9jYHh50eG34/P/H1+9/42Ru34Jll1s+tAw76CpAECiBFqCOfja6dMmM53zpPWMVFhEJBnYGBmZsAK/v5lYPjwkOHplTN3/hmWJ8lqmZ0BGvYdIIAYQWHy7Nkz1Y8bMpZoagqYMEgbMxAFnp5luH79wxmBwJmxkpKStwACCBSwPB8vrvdUYL9kzMAtAgzGZwj8HQ3DxD8BMVAtSM/7C2t9QGYABBDLjx8/hFmfH4xk5+VhZPj5EhgODAzH951huH/rCYOgIBeDo7812AGn1h1jePLpK4OimgyDpZ05AwPLXwaQHrbnh0J//kxdBxBALO/fvxfk+HhJ/Z8gJwPTl2cMT248Z+D7+onB1U2JgYOXj4Hly0OG7/+5GDQdFBg0f3xneHX1DcOTC6cYZDQkGf6xsjKA9L57904AIIBYnjx5wqHw7zH3/38ywIj5xiAux8AgoSbAwMz6h4GR7R3YNbwMP4AYGCnAyBbg52Ng/PEHqPYZWI793xPuB0AzAAKIRUhICKgBpOglA/MfVrDkP4bfDP/ZgIJoEfcfGMf/v/9iYAKqY/wNjECW3xCLeHkZAAKIiYuL68c3Tqmvf/58ZGBkfA/GzIyfGBhZXjO8OfWV4c+/Dwy/f3xgeHsBmFxYPjCwsH9iaJv+H6wOpOcjl8xXYOL8ARBAIIM+fGDVvAm2URCYRrj+MTAK/mf49oaB4e6k3wwXp3IynNn0m+FOD9CVt/4y/Gf/z1Bd8g6iFgg+sCvdBpkBEEBMf//+ffOB03j1Dwa2/0zARMwkAbRNkIFhdREDg77Kb4Yrxz8x3NoA8drpNmYGZnGIGmZ2BgaQng8c+iv//fv3FiCAwAnywYMHam8OpS82FN5lwgxM1AzAnPH+HtCFy1gZOO9CwuG7MisDc8JvBn4ZIAcYB3+fMjCcf+lxRsRpeqyCgsItgABiAeVioGEP3z/LL75998MCda5TiqB8IygFTFIFvxkuL2Zg4GRnZlCJ/M3AzggxhAHo7SuvDB4ya+QWAw15CDIDIIDgmfbFixfcD68f0WR6PLlOX+a4F6vgL2YGUH7lgCr4ASoCGBh+vWf9e/GF1fbfUplNqnpO18XExL6ApAECCKMYOXXqlPSzS4s8RJjOxssJPFIXFXgjAJJ7/UHkw6MPcjff/DNeKKUXt8PMzAylGAEIIEZsBdubN2+43759K/L69WshIOYEiYuKin4H4nfCwsJvREREMAo2gAADAKQtrwt5/gAXAAAAAElFTkSuQmCC', type : 'image/png' },
	/* http://wpplus.endorph.net/resources/png/lips.png */ emoticon_lips : { data : 'iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABGdBTUEAANbY1E9YMgAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAO0SURBVHjaYmRAA////2cCUtzPnz8X+vr1q9CHDx+4QOICAgLfeHh43ktISLwFcr8yMjL+Q9YHEECMaIawffz4UfrZsSUe3D+uRfJw/NXi4+ESAsl9+vzt/ZcfzDe+cmotkbKK2cHPz/8UaNgvmF6AAGJEMoT78c1Tmv+vLqyTVFb0YpUzZWZg42NgYOWCKPj9jYHh50eG34/P/H1+9/42Ru34Jll1s+tAw76CpAECiBFqCOfja6dMmM53zpPWMVFhEJBnYGBmZsAK/v5lYPjwkOHplTN3/hmWJ8lqmZ0BGvYdIIAYQWHy7Nkz1Y8bMpZoagqYMEgbMxAFnp5luH79wxmBwJmxkpKStwACCBSwPB8vrvdUYL9kzMAtAgzGZ2B8af9yMGb4/gyM4XyQ/CcgBqoF6Xl/Ya0PyAyAAGL58eOHMOvzg5HsvDyMDD9fAsMBKMzKwHDtzBWwxXr6ymAahf8b4iiQHrbnh0J//kxdBxBALO/fvxfk+HhJ/Z8gJwMj0GZGNmCwAYPh37f/ENU/noMpZP7/XxD2P1ZWBpDed+/eCQAEEMuTJ084FP495v7PKMPw9/cPBlgQa2tCY4vhOQr//6/nQHXQmAYmJfZ/T7gfAM0ACCAWISEhoCtAsfGS4T8rG1ASokjPHsL4z/AWhc8A5P//DYvBX2C9vLy8DAABxMLFxfXjG6fUV85/d/hZ2YCBwwJUAJRkZIWEFRxANf8D0sxAx/35A0pavxm+cap8BSbOHwABxAQ06MMHVs2b4ETF9puBif03w87DkUDDfjNs3wmkWaE0F5DeF8nAxPibgZEFiJkhJr9iUrkNMgMggJj+/v375gOn8eqfP9j+s4ASA9C2lw8vMSyYaQChp6LSU6Y7M7yUvMrw/IMUA0jPBw79lf/+/XsLEEBMwDD6ImcWv+Xef4ez/z5BI+bVTYaEygtY6bciogysAhIM83bbMdz77XRWxSpji6Cg4GeAAILlM85zR7faXV9kdu/fPiD3PMP/H1eB9EMgfQNBn1rK/R+YC/6/ef0WRD+Y0lNt9/jxY06QGQABxAQOG2BekVI2PvtJtizs7BP7zb/fs/1lB+XrH8BExwlNfNBIY2NlZ7i/PQhEy4vJ6Z+TlZX9DhIHCCCMYuTUqVPSzy4t8hBhOhuvIPxEXZj3lQBI7vUHkQ87b4nd9E/aac7MxAJWLyIqDNcPEECM2Aq2N2/ecL99+1bk9evXQkAMdpOoqOh3YC54B5R/c/78+a8NDQ0oBRtAgAEAW0KsVefb09kAAAAASUVORK5CYII=', type : 'image/png' },
	/* http://wpplus.endorph.net/resources/png/shouting.png */ emoticon_shout : { data : 'iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABGdBTUEAANbY1E9YMgAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAP+SURBVHjaYmRAA////2cCUtw/fvwQ+vz5s9D379+5QOKcnJzfeHl533NwcLwFcr8yMjL+Q9YHEEAsaIawffz4UfrZsSUe3D+uRfJw/NWS4uESAsl9+vzt/asfzDe+cmotkbKK2QFU+xRo2C+YXoAAYkQyhPvmqQOaTHcW1Clo63ixypkyM7DxMTCwckEU/P7GwPDzI8Pvx2f+Prh6Zds/lYQmdTOH60DDvoKkAQKIEWoI5+Nrp0yYznfOk9YxUWEQkGdgYGZmwAr+/mVg+PCQ4emVM3f+GZYnyWqZnQEa9h0ggBhBYQIMC9VXq5OXKCtymDBIGzMQBZ6eZbh7/8cZMf+5sbzCvLcAAggUsDxPjizylPp/ypiBWwQYjM8Q+Dsahol/AmKgWpCex6cW+oDMAAgglpcvXwr/f7Azkl2Yh5Hh50tgODAw7N10jEFeiY1BSVefgYmFFe6IR1dOMTw4+5HBLsoVzGfnBep5sCv01auwdQABxPLv3z9Bvh+31P+xcjIwgmwFAlV1Fob3R78yrDiylcHIQwcsdm7HFQYZPm4GJTUhhv9Qdf9YWRlAev/+/SsAEEAsv3794uD695j7P6MMw9/fPxi+fPjB8PnWDwZ5Fw4GPVE5Bka2T2BN6vFyDB9f/2B4evEjA4/YTwYeAQ6G/8CkxP7vCfenb984AAKI5c+fP0DFoNh4yfCflY2BT4yBgQ/ockaOrww/vn1m+Pr0P9ggbhFGBn45JrD8z3+fGf7/Acb6319gvb9//2YACCAmYKz9+MAi8/XXv48M/9k+MPxl+cjwj/cDw72Lrxm+8ecxiES/BWMQ++yB1wwMXB8Y2IGuBKkF6QHpBZkBEEAsoqKiHx5yqd9kYLhlxsj2mwHobYZXDxkYdu/nZGDY38HwV7yegfklJzS4ORlE5X4wSCn8Z2CEJrMP7Eq3VaWkPgAEEBM/P/+b70LWq3/+YPvPAkoMwIT8HUj/Ff8OxuA0CGWD8Luv/xlY+RkYWIBJGaTnr6jDSqAZbwECCKT1i7hu+JZ7/x3O/vsEyX0S2gwMYuzY06GKGYT+B8wx9347nQXpBXI/AwQQLJ9xHt250u7CfIN7//Yx/P9xleH/p9MM/59tDf4PAyD2h6NApeeBeDfD/wvzDB4c3LrUDqQXZAZAAMEz7YsXL7gfXj+iyfR4cp2+zHEvVsFfzCBvMnBAFfwAFQEMDL/es/69+MJq+2+pzCZVPafrYmJiX0DSAAHEiF6M3Lx5U/rx2fkeAn+Px0vw3VMX5n0lAJJ7+1nsw4tPSjc/MFsuFNOJ2qGnp4dSjAAEECO2gu3Nmzfcb9++FXn9+rUQEIOdDozd70D8TlhY+I2IiAhGwQYQYAC5Sb4MvcFr+AAAAABJRU5ErkJggg==', type : 'image/png' },
	/* http://wpplus.endorph.net/resources/png/sleeping.png */ emoticon_sleep : { data : 'iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABGdBTUEAANbY1E9YMgAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAARUSURBVHjaYmRAA////2d69+4dz8+fPwXfv38v9O3bN66/f/8ysrKyfhcWFn735s2bd8bGxp8ZGRn/IesDCCBGZM6qVas4OTg4lFSYHtpz/7oewcPxV4uPh0sIJPfp87f3X34w3/jMob6MXc1rx5MnT546Ojr+gOkFCCC4QevXrxfQVxNWY76xokZSWdGLVc6UmYGNj4GBlQui4Pc3BoafHxl+Pz7z7/nte9sZNWMaz95+dTswMPADSBoggMAGXbx4kZv792szjhvTZknrmKgwCMgzMDAzM2AFf/8yMHx4yPD0ypk7v7UKUh58/HsW6LIvAAHEBAoTIFb4dXJil7QUtwoDJ9AFP18zMHx7gR2D5IBqQGq/H+/plZGRkQOZARBALHv37hUU+3TOV4H9kjEDdxADw9dnqC5ggtLIQfsfiLlFGBTYDxndv73Di0El5wlAALEAY0SS8/3pQHZeHkaGny+BNjIwPH/2luH1hw8MMhKiDELifGC9715+Ynjy4jWDqIAAg6SUMFgMpIft+aHQnz9T1wEEEIuKigoH29VL6v8EORkYvz9jOHH8GcPFS/8YhIW/MBx7+5bBP5CL4evnHwx79iDE9PXuM1hYSjH8Y2Vl4Ph4Sf3ly5eCAAHE8vbtWzaFf4+5/zPKMPz9/YPB3JwJqIiJgZFNAOKLv78YGCSZGFQ0QX6EiP35Cgzz3y8Y/gOTEvu/J9wPXr5kBwggFm5ubiZGNlBsvGT4w8zKwMYO1MD+HxwMYMCMCBYwDUw5TED1P778Z2D995sBpJeXl5cBIIBYgAnwxzdOqa+c/+7ws3GwM/xjYWFgZmJhYGQBBhbbX0QA/4YaxMTE8Ps9E8M/pj8Mv/78ZvjGqfKVn5//B0AAMfHw8Lz/wKp5E5yoWIGamYBWMoJ0AQ1h+QNMkL8hmOU/xF3/GRmYOYFe4oJE4ytm1TtcXFwfAAKI6fz58+8/chiu+fmD7T8oDTJxAg1g+8Xwj/kPw5d3wKzxhonh81sg/vwP6Iq/DH+BLmXi+QVMr38ZgHoYPrDrrQDmyXcAAcSop6fHvXHjRtk3h9IXGwrvMmEGJmoGTgaGe8cZGE7t4kRJUoa23xnUHYGML0D3PmVguPDC7aKw88wIBQWFWwABxAyMOiYg46eslselL8/v2guzPBVkBIY3jwIDg4rxHwYVvT8MqkBa0/bPfwlloK+/MzAyvGFguPnK+P0vxeJELQOLq8CS4C9AAIHyGgsQs129epXpw/PLmmzPptfqyxz3ZhX8xcQAyq8cUOeA8vknBoZf71kZLj4zO/BDIqtcw8j1mpiYGEiGESCAGKGZAGQY68yZM/8bGBiIP7u0yEOE6Wy8nMAjDVGBN/wgc15/EPn46IPcjTf/jBdK6cXtMDMzewpyCTSB/AEIIEak3AQSYPf09Py9aNEiNmBCFXn9+rUQEIMDSlRU9DsQvwMWbm9ERES+Ag1hheZAkGH/AQIMANXwoEFFgnBzAAAAAElFTkSuQmCC', type : 'image/png' },
	/* http://wpplus.endorph.net/resources/png/smile.png */ emoticon_smile : { data : 'iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABGdBTUEAANbY1E9YMgAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAPCSURBVHjaYmRAA////2cCUtzPnz8Xev/+vdC3b9+4QOJcXFzfhISE3rOwsLwVERH5ysjI+A9ZH0AAsaAZwvby5Uvpd+fWeHD/uBYpwfFXi4+HSwgk9+nVt/dfbjDfeM+pteSvUcgOoNqnQMN+wfQCBBAjkiHcj2+e0vx/dWGdpLKiF6ucKTMDGx8DAysXRMHvbwwMPz8y/H585u/zu/e3MWrHN8mqm10HGvYVJA0QQIxQQzgfXztlwnS+c560jokKg4A8AwMzMwNW8PcvA8OHhwxPr5y588+wPElWy+wM0LDvAAHECAqTZ8+eqX7ckLFEU1PAhEHamIEo8PQsw/XrH84IBM6MlZSUvAUQQKCA5fl4cb2nAvslYwZuEQaGr8/A+NL+5WDM8P0ZGMP5IPlPQAxUC9Lz/sJaH5AZAAHE8uPHD2HW5wcj2Xl5GBl+vgSGA1CYlYHh2pkrYIv19JXBNAr/N8RRID1szw+F/vyZug4ggFiAUSzI8fGS+j9BTgZGoM2MbMBgAwbDv2//Iap/PAdTyPz/vyDsf6ysDCC97969EwAIIJYnT55wKPx7zP2fUYbh7+8fDLAg1taExhbDcxT+/1/PgeqgMQ1MSuz/nnA/AJoBEEAswEQGdAUoNl4y/PoPtAHoIkYOoBfsISnjP8NbiJdg/B9vGZiA6n98+c/A+u83WC8vLy8DQACxAFPsj2+cUl85/93h/8/CyvDtGygVMzAwsULCCg5grmAChf1vhv9srAy//vxm+Map8pWfn/8HQAAxAQ368IFV8yY48AR+M7x8/Jvhwz2g7WxAnaxImOs3WOz++d8ML16CAhpi8ismldsgMwACiOXv379vPnAar/75Y6cpF9MvRmUbBoYbe38x3FsJjFNgauAUgXjp+5v/DF/eMDAISjMwKFsAXfaZgeHzD7b/Hzj0V/779+8tQAAxAcPoi5xZ/JZ7/x3O/vsEyX0aoUDF7hCvvH70H4xBQNYeKO4HUfMPGAT3fjudVbHK2CIoKPgZIIBYQLkYmLofvn+WX3z77ocF6lynFBn/AG1WgmAU8AOI3wEx0GW335k9ZNbILVZQUHgIMgMggJjAGQ6YV6SUjc9+ki0LO/vEfvPv92x/wRp+oBkCdPGv16x/Tz+33/JOqihURtX0HEgvSBoggBjRi5FTp05JP7u0yEOE6Wy8nMAjdVGBNwJgL34Q+fDog9zNN/+MF0rpxe0wMzNDKUYAAogRW8H25s0b7rdv34q8fv1aCIg5QeKioqLfgfidsLDwG2wFG0CAAQAsM5NhB6DetQAAAABJRU5ErkJggg==', type : 'image/png' },
	/* http://wpplus.endorph.net/resources/png/smirk.png */ emoticon_smirk : { data : 'iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABGdBTUEAANbY1E9YMgAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAQXSURBVHjaYmTADtiAmAeIOYGYHYgZgfgPEH8B4q9A/ANdA0AAMWIxQHJNFIOXhq6Ko7iChq6ApIIsw///DB+e33/y8sHNSxev3D0UvYxhDVDdOyD+BdMIEEDIiLvJkcH+UpPUyt8XOr7/f3fg//8v5/7//3kDgkHst/v//77Q/uNyo/SaGhsGB6irwQAggJihNGuzA4NFlJtYnYZPng+TgBwLw+9vQA+8BXrkBQSD2L++MjCx87GIKahpyf+/LCvw9+vdgw8ZngP1/wUIIJhB4j1+DLXaLsE+DIJywNAAGvLnCyr+DWMD5VhYGYT4uZX4PlzknnWS4SBQ/2eAAAIZxLUkhCHezkIim1XOjIXhL8iQzwwXj25hePngCoOEuDDQECj/PpAvBuT/+Az0AzuD4L8HKipsXx5uvM5wESCAWIAGCalJMliy8wtzMPx8CdQEiYLrZ64yMDAxMOjrK4OdfP0skP8PyNdVBtMMf4HRKSDMpinxwhHIWwkQQCCDGER4GfT+sbMyMH5/xsDIwgg2gOHHX0ik/3gO8TyIDzLg53OwIf///mf4x8rKIMbPoAOKKIAAAhnEysvPIPuf8RvD398/GJj+A/UDDdJQ5wLTDP8hBmlpcDH8Axnw+znQEKBZf0Eu/8fAzcsgB0o2AAEEMojpPzsD4/+/L4Apjg1sEBs3I4O+LdAUcFS8BRukC+KDNP99x/APmK5AhjH8+Ql0BiQ9AgQQyKC/H38yPOFh+KTGyM7GcPvBLwYVFR4GDk5gQmb9y/Af6L3//8GWAzEjw78/7AxMjL8Z/gNN/fP9N8PHPwxPgWb8BgggcGg8fsdw/S9QITP7LwY5eRaGE7t/Mrx+/g/sfEZQkDGBggdoGssfIPsLw38mYIJm/c0A0nP/HcNNUMgBBBDIoF+XHjEcBaa/n0AN/3iE/zAYuTAw3D7/j+Hgir8Mu2b9Zji1l5GBieMPw39moHHA3MfI/h8cBD+/M/w4/4DhKMgxAAEEihchUILcXc/Q5+zA4M4gDHQEJwM4DH5+Y2RgZgbGDtBL7Bz/IWH2Heg0oK//ACN4zwmGXZ6tDKVA0TsAAQSSAgfXj18MH3VlGbREeRlEwOHCDI69/0ysDP+YgSH57zfQPGDE/v3B8JfxEwPDmSsMzydvYei//pThMshrAAHEDC0BWK89YXjx4g3DE2CyFJARYpBlYQPazwoMZ2D4/gWG7f+fDH/+/wb66BMD88FTDGf61zP0rT8Fzh7fQPEHEECwvPYflIGvP2F4tmgfw1mWvwzvfn1i+Mv6g4GV6y8D139gCfTiEcPbs5cYLq3YwbAueTLD1BtPGS4C9XyCFiU/AQKIEVoCMELLIj4gBiUJLlCCh/I5oZb9gGoEJaz3DJB0DnLNTxAbIMAAbDuK2iryw3MAAAAASUVORK5CYII=', type : 'image/png' },
	/* http://wpplus.endorph.net/resources/png/straight.png */ emoticon_straight : { data : 'iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABGdBTUEAANbY1E9YMgAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAARESURBVHjaYmRAA////2d69+4dz8+fPwXfv38v9O3bN66/f/8ysrKyfhcWFn735s2bd8bGxp8ZGRn/IesDCCBGZM6qVas4OTg4lFSYHtpz/7oewcPxV4uPh0sIJPfp87f3X34w3/jMob6MXc1rx5MnT546Ojr+gOkFCCC4QevXrxfQVxNWY76xokZSWdGLVc6UmYGNj4GBlQui4Pc3BoafHxl+Pz7z7/nte9sZNWMaz95+dTswMPADSBoggMAGXbx4kZv792szjhvTZknrmKgwCMgzMDAzM2AFf/8yMHx4yPD0ypk7v7UKUh58/HsW6LIvAAHEBAoTIFb4dXJil7QUtwoDJ9AFP18zMHx7gR2D5IBqQGq/H+/plZGRkQOZARBAzLa2tkI8L45EKv3eEssqY8zI8Bfohd+fGS4d2czw8sEVBnEJYQaGPyD+FghfDMj/8RnoZQ4GnrcHJN/+Fnsgqmp2GSCAWIAxIsn5/nQgOy8PI8PPl0Abgc5nZWC4dvYq2Cd6+spg+tqZKwj+b4gvQXrYnh8K/fkzdR1AALGoqKhwsF29pP5PkJOB8fszBkY2YLABg+Hft/8Q1T+egylk/v9fEPY/VlYGjo+X1F++fCkIEEAsb9++ZVP495j7P6MMw9/fPxhgQaytCY0thuco/P+/ngPVQdMcMCmx/3vC/eDlS3aAAGLh5uZmYmQDxcZLhj/MrAxMTEwMjOz/GfTsISnjP8NbiJdg/B9vGZiA6n98+c/A+u83A0gvLy8vA0AAsQAT4I9vnFJfOf/d4WfjYGf4x8LCwMzEwsDIAgwstr+IaIe5AmjR7/dMDP+Y/jD8+vOb4Runyld+fv4fAAHExMPD8/4Dq+ZNcKJiBWpmAiZWRpAuoCEsf4AB/xuCWf6D3Qf0DwMzJ9BLXJAc8opZ9Q4XF9cHgABiOn/+/PuPHIZrfv5g+w9Kg0ycQAPYfjH8Y/7D8OUdMGu8YWL4/BaIP/8DuuIvw1+gS5l4fgHT618GoB6GD+x6K4B58h1AADFfunSJKb2k88XTh1csJJjvSjGLAB3E+4/h/gUGhv1rOBlun2eBYza23wxi2kB5oGP+AS258dH5oox9Y5uCgsIzgABiBkYdE5DxU1bL49KX53fthVmeCjIyMTDwKDAwqBj/YVDR+8OgCqQ1bf/8lwAmIcbvDIwMbxgYbr4yfv9LsThRy8DiKrAk+AsQQKCoYAFitqtXrzJ9eH5Zk+3Z9Fp9mePerIK/mBhAMc4BDWxQPv/EwPDrPSvDxWdmB35IZJVrGLleExMTA8kwAgQQyCAmqGGsM2fO/G9gYCD+7NIiDxGms/FyAo80RAXe8IPMef1B5OOjD3I33vwzXiilF7fDzMzsKcglQClQ0vsDEEAwgxigAuyenp6/Fy1axAZMqCKvX78WAmJOkKSoqOh3IH4HLNzeiIiIfAUawgpK3JDoZfgPEGAACFCpTxmReXwAAAAASUVORK5CYII=', type : 'image/png' },
	/* http://wpplus.endorph.net/resources/png/tongue.png */ emoticon_tongue : { data : 'iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAABGdBTUEAALGOfPtRkwAAACBjSFJNAAB6JQAAgIMAAPn/AACA6QAAdTAAAOpgAAA6mAAAF2+SX8VGAAADhUlEQVR42myUS2wbVRiFv/HMeJLYYydx5KRJPKSp6ybkVQGtKqo2bQSlLMImbGjXbOmKJYJWIJCQEAtWFSAEQggUUUBIRSDog4o2LTRNTJKW4qSp4+A8/Ijf4/H4soijplV/6ej+9yx+nf/qnCvx+FIBHagHtBpXBgpArtY/VNIjdxloHj/JWE9/cKS1q2egcUdXACFIxxeiKwt3wtPhyMUTXzEOJIHK41Q4zwxzaPpM+9fWrfeKInlRiNxNIczbm8jdFCJxQVi33i1On27/5o1DDG9Ti7x1vn2EA68c87/VM/raqKPRULAKUEpAPr6JUgLKeRyaR2nt2tNniHDAa+XnL98nBlS3Bvnef4nTfc+PjdJkQKUAldzDsLb6AigqzV5Xt2djynV2gktATgbUL17m5OEDbadUY7+SiC1y/rMvuXLuB0obaxg7fSSi85z/dBsX8IGq0VS9tyvozEW/n2PKAbj27GBE8/rqMFeYvXaN5Mo6oycOY+aSrM6Hmb36CLcQhuIKWqOvrreNo4CuAA0tOoNVTUUqLqO7bYQQuLQsIy90YpZy6K5t3LFOzHwOUSpSVVX8XvqBBgXQdC+BciWP0yoxOOSgp9dAc6VAgKbB3n0OevsNnFoKYYEqQ8WCYqmCS8cANAVAaEiRu8sUygpP7XOiuQEHCPmB0Zw6YG/2VgWuXzVpctv41U0/KoC9YbKkqPlQbF5lbT1HsE8iEJRw6Q8sK9mQT8NSRBD5W1AqOmjxWKQrLAGWApjRJHO9IUIN9SrutiBZu5W5iIw1k6au3sQhC/JZJ5rLj20W0P2rOFYiNPsspv7hDmAqQHEqypW9T3J8d6igxaJ3EYqJ23gGT+8YesfTSA6NzPwk2fgFMsnfEZlFgrtNFAVz8h5/AEWpFsyuX97kg6P7Ob5wH9ZjINbAvgHVZRDx2npucL4K/hAEOuDXCX5+8R1eB/6VazGxzTLZnX6eGBigvdGAqgryLpCHwO95Fv/B59A9Lfi8CYyDJn/O8NdHP3J2LkYYKMq155RmllhPZVnx1dPY3UmHP4TcOgitQxL5nwzs1QxUq4i0EDeUxKUPv+OTbye4DGSA8lbWBGDPLhH//DcmFZtUOYOtFJDV/6S69HhZrsST2IkEa+nU4vA589TtGFNACigCtrSlqLZiHdAAeIEWwAPUd0PDEWh2wMbHcH3bgFLtTxL/DwDlVZEzK+dMJwAAAABJRU5ErkJggg==', type : 'image/png' },
	/* http://wpplus.endorph.net/resources/png/wink.png */ emoticon_wink : { data : 'iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABGdBTUEAANbY1E9YMgAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAP1SURBVHjaYmRAA////2cCUtw/fvwQ+vz5s9D379+5QOKcnJzfeHl533NwcLwFcr8yMjL+Q9YHEEAsaIawffz4UfrZsSUe3D+uRfJw/NWS4uESAsl9+vzt/asfzDe+cmotkTKK2QFU+xRo2C+YXoAAYkQyhPvmqQOaTHcW1Clo63ixypowM7DzMzCwckEU/P7GwPDzI8Pvx2f+Prh6Zds/lYQmAXnN6xISEl9B0gABxAg1hPPxtVMmTOc750nrmKgwCMgzMDAzM2AFf/8y/Hl/n+Hl1XN3funmJSnq2Z8Buuw7QAAxgsIEGBaqr1YnL1FW5DBhkDZmIAo8Pctw9/6PMwL+02OFhYVvAQQQKGB5nhxZ5Cn1/5QxA7cIMBifIfB3BL60fzkYg8U/ATFQLUjPy1PLfUBmAAQQy8uXL4X/P9gZyS7Mw8jw8yUwHBgYnj97y/D6wwcGGQlRBiFxPrADrp25Aqb19JWB4QVxFDsvD+Ovm5tCXxmHrQMIIJZ///4J8v24pf6PlZOBEWjziePPGC5e+scgLPyF4djbtwwuLkwMKprSDP++/Yfo/vGc4f8vCPsfKyuDyP9H6n///hUACCCWb9++cfCzPOb+zyjD8Pf3DwZTEyYGC0smBkY2AUhsgiP4OYO2JheU/xyoDhrTwKTE/u8J99uPHzkAAojl92+o6N+XDL/+szJwAH0Itg8WaZwMYL6ePSylvGX4D9TyG+gq1n+/gRYyMPz584cBIIBYgLH24wOLzFfOf7f4/7OwMnwDJhcuYJgzsgL1sCLFEtQ+oF6GX99+M/xnY2X49ec3wwcWta/MzMw/AAKISUpK6sM3LvWbIEXcfL8ZXj4GSt4D2s4G1MGKhLl+g8Xun//N8OIlKKAhJn9gV7otLCz1ASCAWPj5+d98F7Je/fPDTlMull+MyjYMDDf2/mK4txIYp0CXccoBVX9jZPj+5j/DlzcMDILSDAzKFkDvfmZg+PyD7f9fUYeVYmL8bwECCJSOvojrhm+599/h7L9PkNynEQpU7A7xyusbQPwIEkuy9kBxP4iaf8AguPfb6aygeuAWoMhngABiAeViYDg9fHQtvvjKq1cL9LguKDL+AdosBcRKaKn5BxC/A2Kgy668Mnj4TSK22ERN7SHIDIAAYgJnOGBeUTd2PvtFuibs6AOLzb/fs/1l+AbViGwI0MW/XrP+PfLIYssHyYpQTVPXcyC9IGmAAGJEL0YuXbok/erKMg+OHwfjFYSfqAvzvgInqNcfRD68+qpy88lP3YVKZmk79PT0UIoRgABixFawvXnzhvvt27ciDx8+E/r69QMnOEa5Bb7Ly0u9A2bQNyIiIhgFG0CAAQAOFaPo0mMIzAAAAABJRU5ErkJggg==', type : 'image/png' },
	/* http://wpplus.endorph.net/resources/png/star.png */ emoticon_star : { data : 'R0lGODlhFQAUALMCAPbdZN/Wsf///si3ZOvLQtS2NfbmpbmwfM/Hqezs4vHu6PTy7OPfv8OrRtbHguXh0SH5BAEAAAIALAAAAAAVABQAAAR5UMhJEb34nsyvC133GE7IOQBhYg+QgusUuESZPQGjPziaEjmebucouAwGF02JTA0eEkSBoFRSj4SCbfIYTAlXWrYBwxS/4GzhGXKk0YOVW41egQt4NCMUuDcGDV9bGW4FZAIPB18hBA0bFYF7GQENFiwDgxVQHZYSEQA7', type : 'image/png' },
	/* http://wpplus.endorph.net/resources/gif/anxious.gif */ old_blue_anxious : { data : 'R0lGODlhDwAPANUAAAAAAP///9DW4wAzmRFAny1WqT9ms0pts5SnzShXqy9crTJfrkRstai83M/W4qzA3mWPxnuezYSk0Iin0pGt1Jq02HWby3ak0X2o1H+q1ISt1o2z2JS425O22Ze63Nbj8Jy+3qbE4azI46/K5LfQ57zT6MPY68/g78XZ6t3p8////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAACoALAAAAAAPAA8AAAaYQJVQhTgQBoQDYjgUFAyPE4pEMRQcQwehkUKVRuCQhIBVFbgAgEgUSoMiBeIhBSCtQ6A8ALQoRkt3eR6DHRFGHyZgeyAcABuPG0cndm2MjRqYGkgoYSAeHRuYGaNJFSMhbY4bGQAXFxBKDGwAHhsAGhitFwlLBRNtn7atFhBxKgIEEp6guK8EAk0FChLMFgsF0ExyR0lLQ0EAOw==', type : 'image/gif' },
	/* http://wpplus.endorph.net/resources/gif/clown.gif */ old_blue_clown : { data : 'R0lGODlhDwAPAOYAAAAAAGaZzKOjo0pKSv8AAL/HzjMzM2uBl/9mAP///5a53Mjb7f88AIyszUFBQVlbXLbP5neSq6XD4f+ZAP8eAI+12nyo09fh6/+ZAJu30YuYpae0vq3I48zMzIGBgb7U6VVVVV5fXzw8PNzo84yfskRHSoOt1sfV4/92AP9KAK3F3rzP4cza54+0105VWpy93nWj0a7K5HCFmaOzxJO322ZmZnut1lldYNjm8sPX687f74yt1nyUrP8nAI+bp1BUWOXl5QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAUUAEAALAAAAAAPAA8AAAe1gAMgHUACNQ4GDjUCQBceIQYEPSEPBSw5KzM3AwwUJSIpKBc4Cx8xpxIqCCkiIhMTAAsQHBwStgATKK0jIwsAtLYvAArEuzofAAASL8IANM8GIjg5AATJCsnWOzsGBjoQ1QQvzwTWJiaJJ6fXFRXJFhYNihsxAB/jNOcWADARiw8ckgkcCMMFIxA+JABIwJAhvwMggADp4EBDM4EwZDggJLEDiB8kMrTYwaPEIIkoCx1KtChlIAA7', type : 'image/gif' },
	/* http://wpplus.endorph.net/resources/gif/cool.gif */ old_blue_cool : { data : 'R0lGODlhDwAPANUAAAAAAP///9DW4wAzmRFAny1WqT9ms0pts5SnzShXqy9crTJfrkRstai83M/W4qzA3mWPxnuezYSk0Iin0pGt1Jq02HWby3ak0X2o1H+q1ISt1o2z2JS425O22Ze63Nbj8Jy+3qbE4azI46/K5LfQ57zT6MPY68/g78XZ6t3p8////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAACoALAAAAAAPAA8AAAaSQJVQhTgQBoQDYjgUFAyPE4pEMRQcQwehkUKVRuCQhIBVFbhTkSgUAoEiBeKhS1K33e5FMQroA0B+AB0RRh8mACN3ABwbjRtHJ3V3HIwalhpIKGEgHh2NGhmhSRWJbR6NGReqEEoMa5x9GhiqFwlLBROmnrIXFhBxKgIEEpy7sxAEAk0FChK7FgsFykxyR0lLQ0EAOw==', type : 'image/gif' },
	/* http://wpplus.endorph.net/resources/gif/eyes.gif */ old_blue_eyes : { data : 'R0lGODlhDwAPAOYAAP///+3t7d3p89nn8tbj8M/g787f7crc7cXZ69DW48/W4sXZ6sPY673U6LzT6LvS6LnR57fQ57nP5rHL5bDK5K7J5K3J46zI46rG4qnG4qjF4qfF4abE4a7B36XD4aTC4KPC4KzA3qDA36i83J+/356/3p2+3py+3pq83Zm73Zi63Ji73Je63Ja53JS425K32pO22Zq02JK22pG22pC12o2z2Y2z2Iuy2Iqx2Iev1oev15Gt1IWu1oau1oSt1oOt1pWozpaozoGr1ZSnzYCq1Iin0n+q1H6p1H2o1Hyo04Sk0IKj0IKi0Hil0nak0XWj0X6fznOh0HuezW+fz3Wby2uTyGWPxl+LxExvtElvtktutEpts0RstUBpsz9mszJfrjJeri9crS5XqShXqy1WqRJBnxFAnxA/nwM1mgI0mgE0mQAAAO3t7QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFCgBsACwAAAAADwAPAAAHuYBsgmxDW2ZpZltAg4MJZF4dBggSO11iCoMKZiMDBw4UFxgaSmeYbGKca2sWGRyqIlBibEFZAmsAAGsft7krX0BYIby4w7lSW2UEt6q5ucs2Z2gFDaqv1Ws3PmplCxMZqi00N6pGSERnWDEVGyIoLjU6QklNTlVaQVwXHCQrMtlHTaJMGbNITBEPJa6teTLliiw2CcwwKaFiBo4fSZxYOZOgkZgwS2DcyEEFjJiOjNgA0WIGjZl7jAIBACH5BAUKAGwALAQABQAIAAcAAAcYgGxrg2yChIeCAIWFiouOj5CRbCyOa2yBACH5BAUKAGwALAQABAAHAAkAAAcWgGxrbISChYcAiISJhYyHj5CRj4OHgQAh+QQFMgBsACwEAAQACAAHAAAHF4BrbINsa4aGAIOIAIyEjYSQkZKTkWuBACH5BAUKAGwALAQABAAHAAkAAAcagAAAbISCg4SFa4psimuMiI6IkpOUlZIqk4EAIfkEBQoAbAAsAgADAAsACQAABzWAbIIRgmwghWwHERcabCImKClsBWuVayWWazKIAGydiGyWLpaIICeFPUKgq6yIUYiZa0+CgQAh+QQFCgBsACwCAAQACwAHAAAHK4Bsa2yEhYKEDxYaIGwoLC4vbAyDgimUazdsFxwiKGw0Nzo8hqSlpoWUpYEAIfkECQoAbAAsAAAAAA8ADwAAByuAbIKDhIWGh4iJiogHhymGa5FrbJKThGsAggCYmpaDlZSSi6OkpaanqIqBADs=', type : 'image/gif' },
	/* http://wpplus.endorph.net/resources/gif/grin.gif */ old_blue_grin : { data : 'R0lGODlhDwAPANUAAAAAAJS422WPxgAzmbzT6C1Wqf///4in0qbE4YSk0D9ms8/g73Wj0Y2z2KzI4xFAn52+3maZzM/W4qi83HWby9bj8K/K5JGt1H2o1ISt1i9crUpts67B38XZ6tDW45SnzZS93t3p85q02LfQ56zA3jJfrn+q1ERstWaZzHuezcPY6yhXq5O22e3t7QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAUUAC0ALAAAAAAPAA8AAAaSwJaw9dk8Bo/NZzj0FBScRWd0URQkQ8ljEuoQLGBE4oFtFbgAgMOBSENSBeKmO1ojIHh8qUhaEBwAdxAAAYUpRhUqYAB4AQANkA1HC3UId4UNGZoZSB1haaAmoiZJIhZtBqmpAAwMAkonbACqq60rSwUHd7O1rnEtHg8JeKAYrg8eTQUaCSyZFCUFyUxyR0lLQ0EAO1w=', type : 'image/gif' },
	/* http://wpplus.endorph.net/resources/gif/happy.gif */ old_blue_happy : { data : 'R0lGODlhDwAPANUAAAAAAI2z2D9mswAzmbfQ53Wj0f///2WPxi1Wqai83M/g75SnzZa53LzT6BFAn4Sk0GaZzKzI48/W4pO22XWby9bj8KzA3oSt1i9crYyl1kpts32o1JS428XZ6tDW45y+3qbE4a/K5N3p863F3pGt1DJfrkRstWaZzHuezcPY6yhXq5q02O3t7QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAUUACwALAAAAAAPAA8AAAaWQJaQtdA4Bg7NYjj0IAQWRYdAEiAkQ4kjIeo0QmDQw4FlIbgAQCQCSn9QCKKmS1iDPnh8qRhtRAB3HwAchChGFSlgAHgcAAGPAUcKdSB3hAEXmRdIHSGAHwwMmBcAGxtJK55pq6sFB0ombAAGtLQABQUqSwgPd6y3rnEsHg4PeBOYG64OHk0IGA/IFxQlCM1MckdJS0NBADs=', type : 'image/gif' },
	/* http://wpplus.endorph.net/resources/gif/happy-2.gif */ old_blue_happy2 : { data : 'R0lGODlhDwAPANUAAAAAAJS42z9mswAzmc/W4nWj0f///2WPxi1WqazI45Snzai83ISt1rzT6M/g7xFAn2aZzISk0JGt1Jq83XWby9bj8KzA3q/K5I2z2C9crcXZ60pts6bE4dDW43yo05S93oyl1t3p85q02K3F3rfQ5zJfrsXZ6kRstWaZzHuezShXq5O22cjb7O3t7QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAUUAC0ALAAAAAAPAA8AAAaPwJawpdg8Bo+NYjjsIAQWh4YkESAIQ8JjEWI1LmBO5IFtIbgsUiLBaXNSCOKmSwK4AZN8qRhtJOx5AAGDKUYVAGF5gxgYABhHDgCSk5QADEgmAAabnJwAHkkiF5qdmwAFB0onbKSeBQUqSwgRHBOVrwdxLR0PEXkrGAweqA8dTQgZEcAMFCUIxkxyR0lLQ0EAOw==', type : 'image/gif' },
	/* http://wpplus.endorph.net/resources/gif/neutral.gif */ old_blue_neutral : { data : 'R0lGODlhDwAPANUAAAAAAJS422WPxgAzmazA3i1WqbzT6JSnzX2o1D9ms5y+3maZzM/g742z2BFAn3ueza/K5Ki83M/W4oSt1tbj8HWby6zI45O22S9crYin0kpts8XZ6oSk0Je63NDW46bE4d3p87fQ563F3pGt1DJfrn+q1HWj0URstWaZzMPY6yhXq5q02O3t7QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAUUACwALAAAAAAPAA8AAAaVQJaQddA4Bg7NYTj0FBIExiY0ShQkQ4kjAtoYIOAPx4FlFbiAkMXyAQAUjwJRA0qvP4p8nlSMGiwAeAoAAYUPRhQpYG8KAQANkA1HDGofeIUNE5oTSBthCh0XmRMlpUkrEJaNkKUmJgJKJ2xutG6uKksFGXihmQiuAnIsHg4coKITvwIOHk0FGBzIFSQFzUxzR0lLQ0EAOw==', type : 'image/gif' },
	/* http://wpplus.endorph.net/resources/gif/ninja.gif */ old_blue_ninja : { data : 'R0lGODlhDwAPANUAAAAAAP///xgYHxgYHRgYHBgYGhgZJxgaLBgaKxgbMBgbLxgcMhgdNBofNhkdMhwiOhkfNh0kPRkhOhkgNxojPRsmQR0pRNDW4x0qRZSnzSAvSiIxSs/W4qzA3iY3Ti4/V3uezXak0X+q1ISt1jxNX42z2JS425O22Ze63Nbj8Jy+3qbE4azI46/K5M/g78XZ6t3p8////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAADEALAAAAAAPAA8AAAaVwJgwlhEUjoLMcHghCCIfj8YhIHCGnMKD5NlgvhVF4RojbKUWS4XCPhCIAhhgzlqp5gDVoNgBpP55foAgRil+h3eGhiVHLoKGJo8AI0cvLXgoJyV4IiIFAg0tK3YoJSUiIakGSQJqFBIQEAwLCbUESgQJaxITsrQIBm8xFwUKr72zCQYFF0wEAwrICAMEzUtwR59KQ0EAOw==', type : 'image/gif' },
	/* http://wpplus.endorph.net/resources/gif/sad.gif */ old_blue_sad : { data : 'R0lGODlhDwAPANUAAAAAAP///9DW4wAzmRFAny1WqT9ms0pts5SnzShXqy9crTJfrkRstai83M/W4qzA3mWPxnuezYSk0Iin0pGt1Jq02HWby3ak0X2o1H+q1ISt1o2z2JS425O22Ze63Nbj8Jy+3qbE4azI46/K5LfQ57zT6MPY68/g78XZ6t3p8////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAACoALAAAAAAPAA8AAAaZQJVQhTgQBoQDYjgUFAyPE4pEMRQcQwehAUCVRmCAhIBVFRqpE0AkCgFAoEiBeEhNRQA3HL4oRktsIXAehB0RRh8mYXAcABuPG0cnJG1vHI0amRpIKGCCHh0bmRmkSRUjIYIcj6QXFxBKDG0gALW1rhcJSwUTbqCiGAAWEHMqAgQSIL8aGK8EAk0FChKhGhYLBdBMdEdJS0NBADs=', type : 'image/gif' },
	/* http://wpplus.endorph.net/resources/gif/sad-2.gif */ old_blue_sad2 : { data : 'R0lGODlhDwAPANUAAAAAAJS422WPxi1WqQAzma/K5JSnzc/W4n2o1Ki83D9ms2aZzI2z2M/g7xFAn3uezbzT6Jy+3qzA3oSt1tbj8HWby6zI45O22S9crYin0kpts5e63MXZ6oSk0NDW46bE4d3p87fQ563F3pGt1DJfrn+q1Hak0URstWaZzMPY6yhXq5q02O3t7QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAUUACwALAAAAAAPAA8AAAaVQJaQZdA4CA6NYTj0DBSSBic0UgwOw4MjAeJACuBPx4FlDbiAkMXyAQAijwFR0w0BPp+IXk8qRiFreREbhBcPRhQpYG8RAQAMkAxHDWptjY4TmRNIHGGDFwyZJaNJKwV4jZCjJiYCSidsEW6zrCYqSwMZbRugEwgAFQJyLB4OHZ+hCK0OHk0DGB29FSQDzUxzR0lLQ0EAOw==', type : 'image/gif' },
	/* http://wpplus.endorph.net/resources/gif/smirk.gif */ old_blue_smirk : { data : 'R0lGODlhDwAPANUAAAAAAJS422WPxi1WqQAzmazA3rzT6JSnzX2o1D9ms6i83GaZzM/g742z2BFAn3ueza/K5Jy+3s/W4oSt1tbj8HWby6zI45O22S9crYin0kpts8XZ6oSk0KbE4ZS93tDW493p87fQ563F3pGt1DJfrn+q1HWj0URstWaZzMPY6yhXq5q02O3t7QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAUUACwALAAAAAAPAA8AAAaXQJaQddA4CA7NYTj8DBIFxiY0SgwkQ4lDAdoYIOAOx4FlDbiAkMXSaXceA6IGlF53Ing8qRg1WAB3EQAAFxcPRhQpYAB4AQENkA1HDGptEY4NE5oTSBthl48TACWkSSsQlo8NJQAmJgJKJ2wAHheZra4qSwMZd4ODCK4CcSwfDhx4thPBAg4fTQMYHMoVJAPPTHJHSUtDQQA7', type : 'image/gif' },
	/* http://wpplus.endorph.net/resources/gif/tongue.gif */ old_blue_tongue : { data : 'R0lGODlhDwAPANUAAAAAAH2o1C1Wqf8AAAAzmWaZzKzA3rzT6Ja53D9ms5SnzWWPxo2z2M/g7xFAn3uezai83K/K5M/W4pO22Yin0tbj8HWby6zI4y9crYSt1kpts5S428XZ6oSk0NDW45y+3qbE4d3p87fQ563F3pGt1DJfrnWj0WaZzERstcPY6yhXq5q02O3t7QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAUUACwALAAAAAAPAA8AAAaWQJaQpdA4CA6NYjj0CBKGBkdESggkQ4kDEuIcImBQx4FlCbgAwOUCSn8eAqKmK1qDPnh8qRg9XAB3HwAbhA9GFSlgAHgbAAyPDEcNdSB3hAwZmRlIHBGAHwgImBkAAQFJK55pq6smC0oobAADtLQAJiYqSwIUd7O2uAtxLB4OHXizpa4OHk0CGB0TmBYlAs1MckdJS0NBADs=', type : 'image/gif' },
	/* http://wpplus.endorph.net/resources/gif/loader.gif */ loader : { data : 'R0lGODlhgACAAMYAADw2LJSOhGxiXLy6tFRORNTSzKymnHx6dExCNJyalMzGxGRaTHRuZNze3IyGfGRWTEw+NJyWjFxWTNza1LSyrIyCfFRKRKSinMzOzEQ+NGxqXMTCvFxORNzW1ISCfFRGPKSalHx2bEQ2LJySjNTW1LSurIR6dExGPMzKxGReVHxybOTe3FxSRKSelJSSjGxmXMS+vNTS1KyqpExCPGRaVHRyZIyKhJyWlLy2tNTOzHRqZMTCxEQ6LIR+dMzKzOTi3FxSTKSenD0zJwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQIBgAAACwAAAAAgACAAAAH/oBCgoOEhYaHiImKi4yNjo+QkZKTlJWWl5iCFiFBGpmDQBcmHJ+lpogsNgMrKxMVpimtPxsuKQCnuJcfPTg/Eysdvx6wrB3AKwo2pLnMjjQJvr/G0q+lscbTExM/JS+3zeCFOhS+rdIT2NWfsdrA0scbJjzh4C84re752K7E58fB7hSEEEHvVIoS5tph+/dLXSZ2AIP5A7iBQcFMJyKY+6evnTaHmNi5O/eu3QoDQC5WClEA38KI7wCCvMROoU2FElc4mKfy0YcLrfZ1HKkN3UxLInMqPfarHY4FPRvpwBCzozaAJY9WunaT6FWGP7RGFSIiwA+rI5leLbpC7KSk/jGbcsz268KJsYVOlGCL1WrJkW4l1axKsig6pis20MAraMGOqjDzoSN5LHAkuDZfqmU4weJYDTDjFp4L2NSCtJpf3pzGykTUEC6DoraJlkIICKZEMDBQbGjOyRN/rQigEjZlpbQjowiwjNkHE6sOT5wbfIWLgrA3qu66cMUAFTzpiRCA8HBqzvqsh1MRDe2+0d8JIuJBgNIHBIoEUECPfDYr4sxoUI5mhin0Twc9yGfIByEYUMAG30TSwgQl9GBBIipsIFdkmfkzDC40kMAQatSx0kJzhACggwENSJNDhJBcUBQ3IWRwCA8BpBeXSwr9oMIpJyggVGh8uehZIQj0/qBAXCjA+IgBxjCVQwB3GbLAAOcM6V8HPwhQigh7GbiUlgZ8YEgGPeRA4gQvTgJUaK24YGYhPIwAWXoSSYNClZgEIJpXBg6n4CAqLOlXB21KEgRp03RQQXiEJoTnhsLJMCglDGg3nWor/FgICzIkdBwyTjoCZZFEweBlISkYyumQhwFYyQcYyIacYccUsCohJhQ4mzaJRvKmb+b8EACkQnCApZi+CbermzyKSh0KD+RlgJjckToJlCMSuAIOLCCJg3l35pmYjZMcIFtwVVFbyAIbAPorm6U2smievgpVwJGCIDDue5T5E8EkJ7S0T2QwFVAtIToEw5qWLylwqSMy/jKKK0ArfDjIB+PuuB2XzzpyA0ejYhxyCAPmS9lJOlDyQAsFFFiucC7AyMGSkBH2bb2JYNbfQp4OgvJkjOajQAVzWgJBCDBwpjIwI8D4gMO/jhSMa4/speNNvzhQCHtNPR2MAvKcogOWscEKzHWEZOoRaXLlgF8jL9jK11wlDKqDOan5EwBuuYgQQg7kJscKSH52G5cxXjcy7rwv5ZC0EAuQ8HZE/1CwMDgftJB2hyuEQAiYXyFsNZ+J7P1nNsfw+4GGOefjwMSD8PDCCPwiskAQDMyNiAqYB9zKYoM8wGzAv8iaCAVrGQ5QC4VcW+RELaMygpoTDLyIDlddYAsi/g8IuZbVrWzguxAVmEu1ah2cbwgN+HSrTwEXDtKrx8coANUhC/DG1giMYICBcOCJQ3xAazrCBvQGAYDHYW5MK+iBIiYkr+A5hAWjEcoGwrUgjVBKe4rgnmRWIIOUGAICe3mVcKoniKSMEF8QQsQJfNE3hsBgUGFanQI4KA4UpK0VAFyEAFkXjAZUoFQoxNZIUDADQkwodkJhYSF6IJoddaptmopJB/Y3OhfwCFdBDCH+OiCDJuYFBhfjSxiFwAJpeasDBkCEA7F1jgEoiAc4I5pQcicEBPiPWcFQHiI0gKd8wICHg+BABxZSlRVIgBAgcJpfUCcIIJxlO3MJGvrY/nIcQfZxFUT6RQlUADhFiOAFQCHKEonHsGhgcoGCaOPM/oE1QthAj8nRBgpKiQDCle4feSsEBP51MRJy8REcSEC0ppGDRxbCTor7xTFloESAlcAQ0WnWMRonCCqubgWbEwQApEcpBfAREgvomIEmoABKQkB805lAHAchgEkhxhjns0Ax3kOa5oggj9TxpJ/CBpAyYaIsxShdCZykOupso35kwdmtGCLFEHCHNtccBPc2hYxSCsJtgfKkJVTwxVZ48lSbUl4AHvY5bYCAEMM6zjlqKQRydqQDNO2jL/MRQVyAlKcpeNcPJRIsWTKEQAqIkA4c4IAKMPWpUG2q707A/rcRKQBZEZiOSDMB0q/g4FLX+tkKnhWCpkb1rCag3SNUUJ1ggOQ0F5snMypQUtERAi6iemlUruWfFUxOCECJCQr+igvesO6qhVgWyejVEx7EYFPy/BQN2SJFZnCAL8HQJPq0GU56sGAHOQitaEOLgspC8x0yuIgD0jIBHHwKBqON7QuiIgIAAKC2IsDtpXhAFaEck3MGMwkiyXLb3Bq3toyhW7QyepGV+oObycUENCXSAc2GgwPtCQYMovsJFUQgAiAI79+iUoHwhjcCFVArd9fL3va6973wja9850vf+tr3vvjNr373y9/++ve/AA6wgAf83gdoQAcH1oA3opIC/gbowMEMWHCAK2aynlA1bNoKMFtJEoSe9Ioha/zvhTkC0XAAIF45Get8LdCCC7j4xS4OgjMHca+wgXA9+uhAUgmBgBaUQAYl+HEJDODioKpkhu9AzI2FUM+Y/KCzueCBhhADkg1vxCQho8d+IFYAdA3iX0xZaDgSR90O/DVUuSyARwtSAToCowbicCN0caGDS+JjAoJkQcr0kVpLsIAGNFgAoAUd6EEHOkIESChtXFsIrXXnnJmQQMxgIrdn6swYmpRACjbN6U4bOkKhagArRL0CUpt6tl+uojEKWLySToDVpbjZhlhh10FYoHT+KMBUSc2KXvu61CgIjwfa6g9Y/grBosX8BaMJ0WYOVfYSQHjMUeU6CC+21dgmUJwqqQ2EZbLLjEKAgMGIAhDNAiBUwWvLJzQQA1sBY7CFkIC7MXfMZbXVHQdIEc60aYxaC4HMctGT+4JkGNYYoD6VwJGdcZVlNP+KAoSQt7ZTXGIhaARfMgPGAAiRaJIIZcmUGzcjO+CBNTcCACrYQSFXwEfjYHIFUszqr2Cy3UIIYNYvf9Z0S8pyQ6RATXliTQ5sUPFEnMAE8eLaL/wdS665owM4iNAJvjI+ukxgzkIAwJIwzjXmCuHW1B1RAYZLOQW0VDg5PcRg7skKPkIAlK6GOSFWK5SMcwlFg8jReTC3AiML/mK12oSB+75OAfWNBOSGECG5JKKALAvhifPqsyA+EDNiLcTrhOg2quDkdSmrDSAlQBZZvMhaYCBeHMc7CWGFYG1MGgORAFelUtI+iPKQ66Y9H0Td6DgZA4ieyWhz2C9CfAgBciYHTM+7055LiMvyZy5qTt1mWNoOGEDq4ut0iQxMThYTGEoap2fY4kcweEHk6HJpocCgZMQu2mxVnLCLpuwIAQE0mufpxRgA3mtngntog/iGkCnGcDSUVDueczAX0wHhtDfukR77VwjZpj458wPHZDzyExEFgGq6EwAwYBkCsAERIAA8IwQS0DEkkxaahABbtyVMYWzzYXZ9Qxk4/gApPwUw0mAsvzc6J7cI9zMvxyBIMkckQ0F2h3AA07NYyVMIdGdP2KAq4CABDtcoyWEAg0JSlhcTLpgIeARBD/QLuTMCXegfFwBlmGABLrBnD3MOJeBRLCCBaQQMP0CEiOA2/OEPwDBjZGEnm/c2dcFKl8ACLpBLhSNKHoUAwfdCI/J+iJBCgJQliVFiADAC66IWjMQKA2ACBegIEFADMnAWY2Qgazg6UVhweIIC5acIC2BnEOMPOLBmq0Vst9daI6gIO+eGhWEAHgUAIDAZLCWEydcIzuUxoxGKvFJVsGITTQItY4I/IzAoADBQVnM3l0cJPAAD+DIUJEEBa9Yq/jK1TMECCdwSg1miWSIAhpz0OQcih40AV3DzdAqBA5TUObGRJV+RjJJAYRlUFDjQWSKQVR6nR+lBe5CwhKYTJVixAXgoCCrgS3U3Et/4JHCyFLODJHyVbrL3C9RGCeMkiFtSAM/2ARpRSMAyi4lwL9pmAFDGAmjkFcDwQPCwepLwAfu2d/7QNfzjP1oiMcqYcTjwbEIAPOc4ciOyAr9lCU12b5HRCiWAcKwyiu+mXorAfohRAjowMQjgQTzChe/wiyOlKUwYER2Qb4fAAgEAdL+AAlCZCG9yFS1QlIKgA65Skw2IZ7lAV/fHT/jCGhTgh4RgOy2gJmipjAagAqdI/gCeI4wFiQ5ZWArmSCwlESgJ8ICCIAILoAMkqTsC4GWGgACJI1M4JxnBxAyR6Dw58xcRwJQFcQIOIIGzEZErQIzNEIlhmJgesQ0G8D1PGITswlqpAZvgUI6ANHH39wsb4ACo+QkfcAD3UEgRyS6+SQ+vqHTYGE9XVApAIGoq1I1JCQJpmQvZVi73hEtMYRmQsHYNiTCEoYjhIAC+hJhq4XEZ0w8XCShWxJUqwQGORpoXGJ/WYDE60i0b4JZjUY5DdYF8QZ6PMBhpRIqYY1Du9QJxqZ2UgaCO4EJ4ySg4JV8guUzCyQ/9yXXzaQwloI7s9QJwB0F/QaGNYKFMOAEoiWCf7yUCPdCFjugwKsoICrqfKzAC3EdfHxCMRfMR8omXNwgCJFpfFtCYpuOh60A+L/EDLXCk+LULrhKNN7oIFtoOBcAcBDYIIrAisdEKV6oINXEMK2Abp0hgz1ECPyARY9ozsjEADiCZXVoIH6ACLYACAkkJC4ACBjAKdSoJuWUKAJCDgXqojxAIACH5BAgGAAAALAAAAACAAIAAAAf+gEKCg4SFhoeIiYqLjI2Oj5CRkpOLCEEuDCwilJydnp+MCA0rEysFMiYEAKCsrYoSNK48JCsdtaUrCi40q66+nyc9AysUvgqlthPIpQoBBL/QkSkto7YDvsMdyrektz8lL5vR44c6Jd3aKyi9rCXItfDp7xsH4uTjLzgNy7cdPK4XlikbqMxWug4bTNi71yrFOX7JVqxA4GrEhIgG0fFTBkMDQ1YzIpB6d/DiDwuuHCzTNrBkvG4GJHzsFCJHKYG3bq5Y4CrEO5I5CXIr5WDhzEYfLqCLN5DbCgGudGxjKTQjy6ETBsQ62kgHBo0QW2pj4CpFzpclcR5c0aACV0X+IlxoZMot4gQTrlhINDh1aF2SNw3MeGvohIywfwleXBHA1Ym5fP/mvHpQwVbCQmgcQysZaAcQriAUCPoSYrewBckS1uCSqsDFfCcY8PWghzvX/er2+znyR4+3KvYxBQwYXikc0SAwMEAqI3HjLV82nqniB2nXr/+iwEvugwkYIyNbHW6c8ccQI+la7ZsRRoh/H0W8eEieslpSI+5VL44dbSkYKhhFCA8LeGDABpeBIoAM6Y3XWl/TQaODdeKxd5YtBfQAnyEfhCDDaNsk+AgEzyDCwAbqoabbb788EAN7UzWVTDItcHCICBowqBMuJUbCwDchQHAIDw5Axhtupaj+4MsJO4B1H2U56DCkCSgCZstEk/QwUA42oGRICgMcadpVpaTQigjuqNhaLSXYWAgPFaBgZD8bQhIAby58YAgPFuW2VknJKHACK3dKZp9TAQioQ5Uy9jXBOpPc4N8EFdQpiApL3bdRCQJKMmGMjfI2gWqEsKAjf0LBQIkBlI00AQxQFZLCMWMi1kGElBBQgGe6HVTAC4aY4OpFMTLVQTGT4JBdRC5YykGY6xmKS6yrrlRVozk8UMgJzK31WlOlXEDJBrDRdRwQhXwQJq8VTqBABpSgV+6TtaCgLSELKIAdsZNqE8EkIuTgH10FkCoIBGmCOhwy/0rywYsDV1gAT4T+6PBneVS9hAO1kPBgn4xOeVAIAtlMStcKZkaSQLH9pYNyIfspttJcBjCgJyUI/FBrseYRwgGtYw6HQ6eJ0EDhRqVJpCQhIejM2XodoFDBzZ0AEELJGX+8gguFLHBxWtxw58htGPOrjTYOwHz0te8oYIKln+gwjMKt9jwIA66qF1QOFDWiAWTyvMRpxT98DVQAcLMiQk2whXqlW4QEEBtiuKTdiLL1EYtMDlQL4bWF4lFwLyUnDLrIByA0iJU2PywtiAgUADWmNp0jokNziS21gsEfwBBdq7YkmggPiRdSwQ8KJMDAYImEMJ6jEqUsCAv2rdcUroi4k/vZt7RQiAH+jQ7XgZSIsBBADiwqcoBGQUhvyAO+h7rYBBv0LYgJBYEFzy0F2H+IWXRjTwE6h79a1Yti72MOKbBXDrMdB1iHQADmnmcQ7w1CBBN82lQgh4gWiKk4HBQCC56EDAWwIIIieUcCGCGAvdxkGzJAlyEQBjynkE8QACwX8NxFtBM0gC+HMggM6pQmaaHATYVggMAEIgNGPEB1dhHZDGOXmG2ggHmCYJXqGrcNjhHCA0lLSykMhinNEQyBF5RL42pxjUVYYFjmkgEWB6Eu0/ALVxxwWg2TMQELGgIHQcnaXmBgDx7QKjwvMZggEHCYb+WCETwAwWiugwwYnLAQLLDJ0yT+IpNBgMBww5nj9DKlHlu4TghaAtlVLEeID1CxhglghyJ48IIWHM05E/ABGgVxO5Ztw49CAELh1MIbsQ3CBoGEUS42hAAQ6aYUgyOEBNm2AgO4zxEcEImrIpKDThLCImu8yuiE0EiMSKQWOdgABU4piDBh7EITYKUQKnAt41zygswpjgJuOIkFZJAvgioEBDZToRUAUwA4KEELAlCBEOhgASxAAA+IRgAXag4oK0CiCKpkKHkKApxCqWbtJgGAAGxzJNEcxN9ahYwf9IgTKjiSekpQsZbkTxsKEBIh8IZRj3qijLqxgSHAlyK7cUIpLDHcXQgBPp04x5hCQICccJP+vlb0UjFPKcQTw6cNFBDNEQAgaN7ItAKqPeZ3t8hpISIAMqO64kelGdr3IpZVTlT0Qr1CDh1bIAMcKECTEqGUVgPbktmMg54hDUEhWrjDCYCGE7dLS7R8ekEIfIAFC9CBpQJCEhSM1BfdqgVOLbUueObgq4ywAQnfcc1HsGBtpeBnNDgQmSQZr1fdGGckHkIhBQygBAYYQUMfilpF9IkvhmVIkZK6Ar0O4o2+FCwlFiCABVhAor7gwa6u8rKPIABsuoVWWGiKGUa8YCkdIO9MKuBb4Ar3pUIwabSiJsvyHkIusWGnfQeRTQOUAAYo6IB1JPLZ/QoiflPxn4FvJAL+BHBgAS8o3n4RgF71LvjCuZJBcB1gAh3AF8MgDrGIR0ziEpv4xChOsYpXzOIWu/jFMI5xjEVwAhakQAchqMCHZWzf9RF2VCSGgIRHfKpa/ACJIAZACUjQ3guMwAEO9RKIzxoPBdQXw9p7YWAKIYIUaCDHLmhBVRlSwIzkh8QqQUwB6nQCWvBxBTuGBgB89xIvtoIHEDDdJM7rLXh4MQh/aRhDMBUbBRR3eDWmAY4rEOYSDGADMWjAECkxg2r4aQKCFkQLf/ID3UKDBzsAGWUbwQNA/tgvWemE9lwygRzAixDK4kcJruyLQq1Ez4vkAa27NoptqCjTkkCsodjZy9j+jJoVE6IL9jJJAh/AgAIXuIENOizleTaOgivQLyTyKK02EmLV3dhdNICwK37kQKeDcMELwXLKVy5sf96kxCt5BsFBPEBnN21AvVtBAIIuQ7GEsICVutG/5+Ibab4aciPQI8ZSIIsQ9CzNBGTriQegyCXJTTde07HCQeAvRbHJOCVEs3HbEkLJuBFwCDuhgRcBJqClctp90DjB6NYCqoYAAA9mQADqMqAHAeBYoVKeCwWfQAF6M0C1JQEBuUDmB3Zm0Nle83AhbPVbxYIvAWwQgQtQAMACDuwtvC2EinpmG8AWggRG86eLOODVkBBBDQ7pEv0K6zm24Cdb3xmb5hr+YtPQuQ/H9p41XChSCAKwiVC21KVHyG1OKwB4qQrCNrku0s2Ur0otVi6EsAbtJxYmQNu5UYB7DmIBU33mBH6AgwrAPRFK4Y+4BerO56yAn8s9TdlKgeRB3Gm+dflBglQirRUMQJRCsEDCDEdxQ+D35a0VggeDEqMm0rHcxAoiMcpn0cnUxcI8AI/8bFECuIlgBD/eiOQTEfGMGeCz6AcdLkyPTHPyStuCyLLEbUiI8+bvJ7ZgALQmAAPQd+nAeYZwAD+RA+sXOU4SI/LEAaCSectwbomAN5PzGtqwAXUSfyaTXq93QSbgb7fANYsgFSwRAOhWCM93ds21ENP3PKX+cWaIAAAXh3foIFSDAAEwwFx8ZBA40HuDwAMmAEhTAUyI0EIK4AAFxgNI1RxY1QEdME5/Q32yJ4SF8HEpl3kSgUYS4CRnMQG/oggLMALiZ2GIAAEpIGEsUFqgdEoIQHfGwhRIOCRy2GfpgAN1UgPopR4/gDhupAPRBwkHADZIgj0gQBy252mHoIW/w0VutVyo8Q4DYGeuIAHn0HZAYQALQWjUhBF1iAgiED9684OtUwgg5RdrsQIXEG+sYAFqVFCUkVIipIniIxGmtwh8KEjicQvjBABs5SDhw4q7xAkcoEbwNFYTUAL+gwAIFkDxQINjQ1e1tQHVdn50g1dl0gn+J6ACMkAhgZeMJbCCIqAjpUgSfBMJXwgjE8hGKxhf8kcaOzEJEOABJdBr1EdJtcCJhCACKzN1y8INDegI8qVKToUMFPCOd+coJGELuegIDCB77bIYwvNN4FJyyCByI0KKzhExCSkr/uZIK4Brj2ACsshVtaBf4LQbnLEMD/kICwCODwIRFCBKHxCDGqRwiJBmuUN58CA6hQAAqbN42WgLOBcJiGUr17EBrigEKqB4xHFakyASk/NMElEBRoEATVWK5BGKkaBkOtQZ27ACOeAR6aJNrbIBlBAQVcQv1eRpLEBnvHgfG1BgkfABdMcy8eAyNiAgC6BAfOFcu2Uo4Yb+A/t2N6DUi+kwiJNgFl+zPWyyYymQT/tICRwZUhTQfAgwlFaomLhwlDTRIMq0LKBpPjbxWF85VewBAsXIS0ATjxfDQKBQAb0SI4UHTYPIAw81CR5DEgagAgo2CATQAugVhe/mlaAwdBaCg6WQAHGGMzlQACUQdO8oTUO3cZDZAQZQnRUxkx1ZNw2QAFhIUgSgcCfgADFgJJp3MeN4DwCwkqvomWbzAxcgALvGb33yf7i1QyvQnh+RnyzZLlC4PzDgAM/5CdcJRPVkgNvJFUUyP/poK2M5AAGQAtzZCUlplcIYDy1waL+wkA5yab4UbjkgQ6zgE21pnGbmodAgAM70pJi7lyIT5worxXcf+AMD+RYcQDYGeHZcNQE5ygk0kKKyc0AXJgIm5WvSgnc3gYCcoBfYqZjvF2I6gAJhaUCuETyuMAMPaCugaWCbKZohak4V5AoZ8JjjUQIvCWIv0INMOon96QoAYBP7MhUMqGIiYAK7YhzzBRiq4gocFaIjYJck9gGpCKOF5gsUcB0SUSMxZgEBwHaoohNr5gpaxA8twIgu9gE9gHTaxz0XSgkr0w8jMJ4z9gIGIJMYtXSeUCgUECQ8djohUAJrww1N2QkC4ACmGquH8AEM0AJIpxOMyatcIQIswAAjgAMFYInEul+6RqyBAAAh+QQIBgAAACwAAAAAgACAAIY8NiyUjoRsYly8urRUTkTU0sysppx8enRMQjScmpRkWkx0bmTMxsTc3tyMhnxkVkxMPjScloxcVkzc2tS0sqyMgnxUSkSkopxEPjRsalzEwrxcTkTc1tSEgnxURjykmpR8dmzUzsxENiyckozU1tS0rqyEenRMRjxkXlR8cmzMysTk3txcUkSknpSUkoxsZlzEvrzU0tSsqqRMQjxkWlR0cmSMioSclpS8trR0amTEwsREOiyEfnTMyszk4txcUkyknpw9MycAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/oBBgoOEhYaHiImKi4IAOSgsGIyTlJWWl5iYOyQrKw0qJQELPyKZpqeoqZMwExMrHK6uBQY8PwCquLm6jBevrrC+K64MASi3u8jJqQ6/wq/Cv60rDDYEyteVKA47uwvBsNLA0Z0yC8fY6IQ5JZ0suz/OwBzP8/LNMCnc6dgZONATOXZhEFZvnLx4viYwOFBq3y4U7MKt6ICMQbRWBlsVdNYKRkCHqk7cgPbtArIS4nzZo4ex3rMSEkCeAhEilst5OJC5SDjvYsJm9qQ5aCiTkgUDDb79LKAvF4hmGsNJxRgsVqsBKIpOylBTIrhnKyw8/BnPZ8GW9JxR1IpIxE6g/lTBuRKwy0PZZ1ATpsWY18AJtoVOlIDLEqiJXQC6fpuw8mZcxno10AAsSIEOs3rlToiALEcEHAc3Br37tSCHBYAzHLyIeUKJaxAeVJAh7ibCjXGh+ThcNIWPi46B+gpxDnYOA4Q5iC4scYUDmSBIZ+abFgFIDyZYLV4s3OWEEQ6jKy3tlfoDShg2CIiJat3t8Xxzu0hXo9No6qFfMUhRvNAOGh0YoEFSK8iACwoUwIdXWgfZgE0OvxnEHUsrFMBDU4V4AIIBnEiDUQC65GARed3hN5EyCnBiG3kUrtDCBoeIkIEBHDG4AmqZYDgIBAH4sKBosei1QgrInHAZd2aF/hPCR4VAYIIG/2w3jwKZWDBAAH8ZogAOGkk5YQNZ5SLCYBQmSU8JMPpXQQFBOhZMA9ZhggI0LnhgyA4jvAekXgxkqYoLST4WjHNEDbKABlNNCAsDppjQTAzbGJJClKXtBUwJ/WWSA0lyFZYWkYWwIIN0QErzWiYRTAUDXYWgoAJkbpI3z3OoWMAmfI+1UgCrhDga36+5wQJeJuykxIEPAei4wQAS5ifNCrxmghxcXtGjApWEeEBjXiv+5AoImQDwKoU4sTeIB6CZSaIKcWISHayJHsTAeYQ8gOhPmsVHIbaXIODDnrCc1iQF1eZXz7CXnFCToosVwK8gOagoUXd6/oWSQ5qYKEDQdkIVgsAAZU7nygphWpIAY9wKCm0hvqGM74QGpNDuKQtkJNwKIBKyAaLRxCrNADouMqd9PLX5DKiDvIvZSgxUYGcuAfSEZDDz1Vups5DxRsmoyinVZcA5DzKpvl81w4AJQaeiAMj5ZiZM1WKTFmgIEFCyaU+sMVhCoZs+651KOKeNiwg04RVvJxUUEnXKNtLKCJfxwhXC04I8UMA/otVDAb2YCAACCpQnckILnLIGiw9IBzGmVD4z5mciGcid6ApMBuEBzyM3hnOhl5C+gg8afJDDzJICjFDJQbBwtVTBOJ4ImcuF1kIh06J1Ewe1hzoDIw6UzVgC/sgXogCUQUHmCgx1D9IBvO+1lD4iQ+dbHgdiDcJDkMldi4gCNPLASA4Z6QQFXoAIdOVmHBOY3iBEADlywSVxiWhBwbzmv0GwADiLYQDGCIGAPLmCM4uABwKbIYMfHAIB0FNJM25EiDmVZzsyyJQgTlAWsmGEARhCyQQnoAJ3GGIBC2tFThaBgQaUCC8QbNJgJhYwHm5vEAZoIlBgYABRKOB9hrjfXrbIQkOVbhwF4NwCAwCNehCHEaw4i6f8YggEpHEvvwChIDbQiQIM4AMVyAELBHcItmFQHhyAAVF2YJEAzgNHHNzWOFbwOkSwoAIc2lilJqABExZiAyQalLmS/mcBPoawhgz6BbgGUQHmecd5c2zgSsKnCAi8QJHjUYEYIcapzBhAF8wIZW5wuKOujIYDe/OYKqnDxktsIAGl80UPZhmEEZjSFz54GCr8iECWOK+UbRqHNEUgg5aYLXuX2JLLpKaB0AUBAwwIDVUUmAoC3MZ6I8OYCAp5QOcYIgATc4UBiJcJEZDRRJgqRN8WeTprpCI6K+GWgRaYAwcYIJ3fUAEWg+ANQaEyFb4BHCzCBsXFuISjppDg1AK2glEeAgIbyAEPPoCD1AUBAYoBxgqSGCLS+CBaQXhALVtyxlPM85kHWYE5LZEqpVw0FxWNywB4RyNnrewUBPCR1JY3/sRMKCBC4bglNipwl5IWQgAEgQsH5Kgp1gXwqJRADksYMFRkcC0qvCQEK5IUAt5ZwgZe+5owWEkJFkj1WQRMxwNW41VC8GA8zmBmJVDiLXJNtBLONI1W90HGCsGgBRXw4SDcSa1W0PQShfRUQQZgih3cSqbSxMYOBOABTzJrnL44lSYOV7YPmAKseHMNZRLhTD0xKhOcZY1wtHYJfH7DpbsdBADZd7q2MgKsi6wQDjCrRxmugnn8TK7t3ukMnFLCG9OgQARMADpPVgICvwmGbLVbCHoWBrmTQIAEEGBdtYXVs+w9BAtMMAIZMKATvwBpfp/ijE54N79NYsECHApf/u2mgAElGMHnnIvgCjOivhbOsIY3zOEOe/jDIEbwDgggAB4kgLgItoAJBNDJEGNABjHwkSvYWeEXjMyOQKhABn5gXspozJrYEEGPDyFCqzijTxq+3zjAeYodbCADHWBpAdC6CH8lh2QafuszDJoJCEhgATa4AAw69A8BT0Jc+InFWiqMgMIwAMOJ2AAMkmJkvZr0EsX60Qomi2BfcQRhl1iujTZy4EnkEhwkZcoidmDXawBAOyQtNCPwWqoFcfkSL9giMHAKAAXUIAAG0AEH4JYOpT1DA42exBLVxZghn9CIjR1rIWhw3wn4QLHIgIBFWPLZSpiW1a8g7SnSRZgQ/kiCEP6ASkDRAaipUHgREpCkN6lCVkx0oIZUQSQtbUNlXGxKkjg7RSkRu5E7Y4KOLutZVQexRL1oexcPiIHkskuJBJ2FbCvAdSWSrVdXZE8C/1rhBAK7CwLs2jvm9oANQECDE6RaEBbAKsVgUdeDJscV6xbEuHGTAXi7Fxx8FkRROxECCiSABywuxAGY45MJhLzLl2uMK94NAB36pNemyIC8pa0Cc/7gN2XDy6UhN3FfoNgULjAeA4h3ghH1pX6mgMBOvPZUQnRTdhQghMbytpIVbBCqlNJLtYOggBDAhwMOOPYlUqCDWgIDue9yk78J0VuDRSPjqIiAtAf17iCg/iDm42xFCKphCQQYUUJDMoQEXlgPHJzjBF/Dtytw7mtCWABgGvl6ECSggpCNDAcOoMFjD9F5N9XAEBBgG3fmQfAgOCBkpumE5hUhXzCHWgXIez2LgDGAJ1q+3fbA2wo0QG9CLLEguD/EBUzZDD6f4LRlHM96DSECC6DgACMogQoIJLX1ioBnDlxBCdS+wLcc0RWpNcROXGKAtpp/KtLQbBDIKHMKNTgIJiiAjD3EOtoRInaM5wolkDYCQE2mdHqLgFATEALmNgjrJ1qv4DwbAGu6Iw90kwg1o2e2MQEwgCF61ylyMQ8yMHoiYAKltx3dJggC0AoBQG//ZENCVCgi/nVvwvEdivB94eAzr+AgOzJXGohxl0YIO2AC/BYOC0V7JtBIOwIEepKD8tc3uEEW8zB7hLBy9WcP0UQI0SZzVBECraclAQADwQADqMACr4UyaVZYgqBrI6ROCcQIhPQjUfENOFAo9QErYEFSgbMIHpADFdACIwBnieBnU8UgIFVUaoSH85Bvk6BkTWQ4VDEBpDZ/HtVyq4IOouJ2ZCMDhTI2hvQNNKYIOyCGkPhCXTQIddeEz3ABm5QLFuAC6aVGjlECWMQCJGAziugKVHgI3gCCUvgL0uRMuYgWAlhwwkh1IEiLHDRXrREXgKZq1MJywwd1QQAAwsgtnBKKpoAA/jUQEe+EhmeCRdzEdcGyAiGghItwVZ8oHDhAPP+kTsFAeZMAAQBic3JTihwwgoQgAh8QLDvUgJNgA5rhURUzUSZAKhrBZHAoA3QWgF4SALxzjQP5S0d4CaM4aIFCARMlAKFVKSsgf5WwAel1cYrCAebmFpGoaT0DkpaAAhHiNphBAeaEANPiKeRXCTaGkd5yd7MkAifTMwTpEkd3CVwFj1PVDAPQikGQAgsjNWSYCRuHhksjFLxDk7+oIBzwcpgAAN3kkJ0yATEATh6gd1FRkZbQjymTNwXCTCzgg8tRgzz0bJXgAf9llMnhAw6QKfwDYGY2Cf4QgpixAjjwhYKQ/gLl40ArxFem4EK+GByLCExBKAgoQCP3d4NNiZjilwN2BQFkKYfkEgwAiQpjE35H2RMccAAytAE3aRQBl2aM8QGKKSKmEznB0JfLEErT4TYUMBm54ELkEjPORQCkYyLN8g0G8HCpgE8eopOw5SKRmQkH8CwFEAooMHqCgADGZVaB5zbHiQ6ImIuIGQsNEAG7SAkoIGECsAE9NopXZhPN4hrWqQsikIq714ZgcQECIIi6kE7AMYexIn7xiQzHeETCFxzDVwHPmQzQkxfMlRAGEKDJoHuG1FlG4wpXUp3Y0GwvExy/0J1acZDM5yXwaD4l4AIpwJIHhYxVARYQSRkC/VATfxM93rSBVtEA1KgKvoloXjIBoSkTG0AwDENYgrIRVYcLFhBWNhINDCBpReFPTUigjAcLQ3kKAHA5wAI4+2RhsvmeUpKGH4QMoDFoRrdhCNCZxhOj/Td9qvCTL2QAKFphBUhuGSGLr6AC+lkJUekSDBhiO8ADgNelcEQVK1B8mYBb4zAChKphHqCcRWd36FdwUWIA5elhGzACpxU5z1SZmrCILaBvISYIHlABULKiR/kTtmkKCTACk/qpC/RKpKJnWokKyMmqiKBiMvAv01EQv0Wr7OUBKdAC/yWmq8mruyUCG7AAI4ADl0MSb0qs2uVkKJACAfABN8qqgQAAIfkECAYAAAAsAAAAAIAAgAAAB/6AQoKDhIWGh4iJiog8NiM2FSYMKQQQi5eYmZqbnJ2DGxMrE6MrPysKMgE1QCKerq+wsYggpB2iKx2hoSsoMj1AssHCw4ghobm4usfHKysbASkAxNPUnhy3yNnMyLsbNgTV4eKIAArbuOi5y9nNJRrS4/HhBtrL59vMMCE88uI6KdNMLEs2UJ0tbQQVhGjVbxiNEg1kTHuArZa9dMky6loxgEFDWSci/AhVgN8wADksjlpJkCVCbitkAPvoKUQBjCymyUB3Th3PlUAPMmvgwCRNTBYuVBxlYpoHe0Bb9hRVK2OHAQuOXtJRoKAoA9NoWE3XE6hFn0JXeNCKSEQAbP4YO6CAJyyDOpdxpx4UZfDWBAMn2BI6UUIlwWbgiLUwRXbs3rRoqZLdkVXwgx1eEaqYBgABCwEmQOC4WXBgaZW2qNZgqyGG5HqjcrWQx2NBDxkTXma2WvBHU5oqTO01nU4BTQQ6DDArHfewrVA2PoZohjY31bvNLGj9YAJGZnxQ0a0I0G961XpLV3jklIFDChUmKniY0UnEixJ8Gz/nSfD5iHg1NHNRdfVEgAkEElRwASgCjvLDB68IgINzFiXz0nj+VKQfKcutAFYiJ6hgAAl+SRYKDLIwYE5z7Li0SwXV0EBCWVHlklYL2hkiggZBmGjhjzcEA8FbFT5GVm4T/P6wGTEnrFhdenuhsF4hCPSwwWuOYbOaMAvAoNtFHIoiwDAi7MTOXWcmUwIHhvBQQUp56YdOjp3UQOcgEEQgp5F9KXAnLC4UuVGR4zFEiIr4xGnQBArQtYkFuHhg1CAqaFhdhxOU4KgrOlC3FJK8rRCCISzsJKhKVU0wmycM3DLAmIWk4KResR0THSwfYNBfqkbmAFAhAgl65JGhjOrJCNaF4sKkQljgHW+YIrPCC7AoN2hLvKFQ2SAIGPBpeHdVmJMnz2aDw7iDEPaddWltYElNFdmoy2MT5PBAIQ9sIBR4zmHEaAuGbnKCcMuRMKUgCODAHJ/KejJDSqmGauO9hP7oQOKlp4ZSQgAvcMAsJzrAhssPFTj6gcJZ1tPBD7BuEgF4uolCLSHBuZiotAaoAKEwAZjGjguFWOCkY9fiEPAlKYw0Fl67HCxECCMRul8uClSwMzEKYxeZC44uoDVe8oq6SWH03twBeTQrHfZLCvTwsZANbPSkLWgP0mmHkCWTAwKZvEDdaWkZEPDd/noVwNvCfIACkrCRsgKMhPR85j2h1L2IwqfFlQObg3gdW3PHUIBuJiJU4IIDIaRwNYgtNNhTLkoSIkJh/Z6Jw5KLEL5vqCvoQAgCVxrGjgNHZzLALaUo0AID9CWiAp/9/ioIC0TjIoMDKbyLSWHsDpjMqv6DWAu2hb67MoK8ZgUhvSH5SqUhDNoL8RQpORhQwQKIK5LCt14VcGcPcEGPArZVCBY0TxE6kJunbEGB8hlCXXnhEAgIAQAQtMAELCjeJlqAN2hNAHLTQ5KL0LGB0XFLJCAEUQCJI5NDIKAEF5KWA4dxggbsanzuIoSp/JUMBZhQEAzIgS1KgIkrzW0oazEEBLjnLxuhgG/EAGCLhqWeQ7nPRrggoCDcgg0S5G8QLvgb3hx3gcBQyUsDOoaBsAYesMHAUDwwx82aMUOEmclxWjyECFjwggoY4CZ9YdwKYDATQrCgA2lynASGIYH8pOkuxhKEMbAlFMshbAA2SyEmeP7wAm9hSRc5yKMGXlMh8MnCAcSKmALihwAVjAAGP9hdCY4GAcw550OdIICegnIMFFCMEMhK1u7y6AqUTc0xDkjEB3Qwggk145dbxE2tejgzV0goUYwy4yDieA90mPIVFiCYWcbCuUUgIAXrE0TPwmQLA6zOFVwEm6YKkcCzJOMHiYGFMcpCFiK+olXraIYlY1EpbE1goN6aXOVkoZRwMSeSnUAAxJixgt8QA6CHWUE6FxBAbKBAg5ooxzFf8qBXvGwsyaxGpSqEg00lFFXTggUBxCg1HLyCoy7CZTVQiSaxEUIAe5rABP9ZPW2k1BPKsQoK3kkN3AgIBwGApiAwSf65HIAUEzaASqI06grqNaaa4uCA/QQQv0JUYITIIGYmYHgem5VVE8g6jE4FM4hr3OyDrwhe7dBhU0/woCvPCYVaBYPGVGXKFRCwlH6G2gm/DcSfdDXEOvWTg01lggAj+Zo9NKmJnvUHd5ElhN8gQwqmYmJ/C+xmyzjhnf1MAIqh/V1mm7NaTTBAhHOcwA8xcYIG5QKysR2ECBRAymRAVBMmGBZkfgDbTewvTJwNLubKNlBMnJUnpF0BDr7ovFohso7BFULrEBIKxm5isgip3/3emgkHXGu3sU2ui3Ix10zc4DAKMEAIWMBdTJwvNyujQHPDKwQAcEAFIIAB8joAXP5N3HcDIAgBB646CMsmAlk4GIEOTCuYLy4zABNqMCZEQAAOJ+IAMIgAA/70wAFHFgIpcEAJLpAJBORzEct0AQ5o3An37kJ5+7VweE1AAWWgKBgEYEACNhC1CRyZEx6QSihQkEQCCwIAKHgNBV4hAiCEIAhM5uGWO6ECiu5nAFbGE5a+qQkPZFlu5xExJl4glDoXgMKCoYENs3FUThxPaqSoLyaA0NFdaJPAPaCX00gHp8mlIwGeQEDU+tOMdAaXrfdk8YHiVrbD9DmkxI1MLqIb2d4OpFGeoB64LALasaXRQ2kOVmD/w6oxXqS2mrBB41ZQEgIDoFy7wHV7odWvcv5ywrHLsY6wBVOpwHYA1Z6g3aX6019EIGDPYFsjI2hgghuHAwIM4rMr/to9QvW1mNxISw4yUAgexLgEJJoABYQ8jDCe5dCboEhRk2HeTlxXZK1+rlU+PQ3dkaK6mZgfJTVi0VSLsSLnHgQTpbVoYTygK1bZ2ysm5Oi0SLUTFMCSDAuBU7I0AKzCIMAOinvcTXzgW86xaiwOsA57RFwQ7tWIKDRADCDI0SqCRm7E0hT0TSAAkfPCyJaE61QsrozUneAKeBTwTgjgWxHGnGY9Gv4Ke/NLAQNu0oUMoGlN8MDeY1kBrg3wgxTroOyCkMCkn3MhuG9ipp/bnbY7B8hkd/5AUq6gObEXLd+V/GAHESbApvS0O3ppdxiMr96iadD3CqHABnZHBFCNtIJWC0ECM+KP4yx3goyRheDgZA4pClDIQUjgzVnSrgNogAB6/84wnucBJqFnC7Dy1Hs+WYGxT0mhjMDAxQQg22lI0YAcAO0Sx3uOAoTdOuD/hRAziEHm6L4COcOCB3rNbgk+xoMRFNe1VGFvIQIVCgO4WAhhXBtLVrDIQbxlX9/hejAcC5NFjf8QAlBY84UOlmYICZQDnqdOGtFWfUYApzIWBfB+d8cAgDcI5hdQyhAT7CUCJpBleYMMUJcuFaB+XncWK2E0hDBeu5ENtMYJe/RlxCUKff4GAWikXKGAA962TSYwIbWyDN6HCRkwXnJyDKOjA3HjQY2Rg4nAAw/QAxfwZlFBf4SAU8OxOznAc4mwAAGgYAPRa50ABFQFFWkBWuBGLMrFZodAABVQAgVwhOyUDCg4CAECNgMxHty1TBXQAiUAAwOQeYcQLI1REJZEC/tmHSvwcYewT6UxHKLwfIOASpTTPTAAX8IgATuEf+wgODTjQd7Tb0s4NI9kiE4TTLWzDOAlDBbgAgSjc4/xf4PAAhgnaucgfLbFIkTTATRQCBEQio5jYq/AAi+DVriFCxTASsGjVdDSgmslLOEiCgpwaCJAij6xDE8WDAhQA/hxHoexDf4l0FxlsieUJYGJQAOr2HhWgQMDhl5H4omdkAE04AHKd1cWshIGwCy0gDE10gwJeAm6dkUjlCllVXj4sI9bkQAlcCVUAWeZswsjcDRxBXxH8oOLoHsrpFXPUYyFIADmkBYr4IeI8HOPFEHz2GoiEH9a11a40AGUiDR8YTPKhQN/0i0WYRzWsEKlOCw4IFUiEIzJthsVFQuQWIrKoAuTaAgq0GhoiAm3JUJEg4yPczQIYCZXpFxFtwl3tDRkcRAFAF4fsEv6lwmRZxY1kioy8HEsAGz8pA1UFwwfEGoD0mmh4ACWtQAtMHyagEkpU3w4cIoqcDHC4xWhsGye8FzaGP4Vn4MLJaCErjAwnDhCDVQ8CMB4fxknPjUMASIxLDIvB2B7mhAyC0cvLaBWOsAgzOgYHaCMw1ABIrd8ybICFJCLseBZzMFrOWNi0+FID4gdABMO90crP7EXKwACimk8/VIAJeAAZHUJgDht3LcXmigOweSSpMUSoZAAK5kIO1kCMgACAWACAuAx+UZKUpMOJaB+J3GBTclD2vADFyAAnFkNIpADWbIw3dgQcWUkgMOKzuAAwxkOTTeA2lCeNPFv2tgiBeoq0GCexOABotYcK9AC1RYQlnKgi9JB8qYKDzADeOYKHOWPGYFw/SAAjSaPgdWS7IIlK9AABTAAEfCem+5gF775k5FlARTwgd9RkcQWCtfZCWxVIaGwAYNFEzzwFguXRloDjh3QcrFwXSPkflb2AqC4G23EL7kQBNOAWpDxlbH1AdW3IfwELjxBk8MAAVFoADsaWQKAl7z4m3+5Cx65CSGXCzmgpGkmBCLQA33XRCnzahUHC541AuJYp0LwAevUeCuIKh2wd8GQAi1wpoLKAf+lFxJzDtUoqGyBABXglpPKH+FSUpYaWSKQHIqVXY9xip+6HSGQjUV1ESB6qtuhAi1AXOMzNTfnqrElAgcmGvKZkC0RqLYaWTzgHirgABFgACUwAAoAA3b5qYEAACH5BAgGAAAALAAAAACAAIAAAAf+gEKCg4SFhoeIiYqDACoONiMRNy4BFQc6KRwZi5ydnp+goaADKx0Tp6UTK6orDQolLjUEIqK1tre4iDaqqqapv6gdPzkGPRy5yMnKhwurHaulwL3RphM/Gy4pAMvc3aIb1L3T1dPjKwo2x97r7IYB4+LBqebiPyUv2+363TTz/uTinvnyNW2DCR77EiIDoCDeL4HBIj48NaGDghC0FGoU5SIcRYr+QA4sB20Dg425ZmRcluIhNZcjPw6cp0oGEJS1QqB40U0ECpriJsJcRVHgSwcIcXb6cGFVC28jSBoNCvGjx6s4FihdpANDrwJJlwmYRy4VxGjwRIKsV2HrIRH+AX78WiGgG4AcvMK9rLb3arWpKy6ccDvoRAm1HSJ4c6AARY5nK/Q+C+jS4VlfG2gQXrCD3goUK7kBEMHjA4sUJiLgmFwRreS08FadVKohptkVKVBCeNDj8EjJMNWqMoEzBLTJgF24RaDDwHF5M/lKhxZgo3HLRScoyOf2gwlSraPHjr5CeULjRPtOXqH5VobTDExUcODAgwkJn0S8KHE8+ER55rWjwg8SARRMdaDwQIMHBmzQQGRWqYIgKClQkN5lz1FVXjsaENhXWudwp8gJIRgQw4WuGdWeKAyAM91vAEXjwTo0kPBaRYitoFUiImjgHCrjhbPdLTw4INdlUvn+s4IK3ZygAJIpArlKW4cg0MMOF4ZHVTAjILPAANAJ9Rtuy4hwGHQywdOBDB8YwkMPBQQJpVG5IQNBAH5tCZICgyXzjl9ozbRCAKEJosIGGs7pEGi2iGgoikatd1YJjtbCQJZAxcZkISzIAGE8IMZoSpe1iBBBXYUsgIKe/6UyoS0fYODMPx6pkgOqhJigYagi+YNrKC39EEBYgnAA5lCRokIXLk0F9VGvHaDwQCEn/Lhlq1UFkwOxoLjAywAsFILAatjmVY0Cm9RywKyJPpTDtIQsgGg8MEYkkgI4yGAAcbUwFF4Hsw0yrjzh/aMKqaGcUEA4tkFUALyD6NBwuar+UOCADhxwa0szaFlDpcBgJqueNTuCcsNL2EWzLCHX/ZeyAQy02c07Go4gIgcNCeeSDAcBm6F0Dm06SAgE2ktTKgo4IPM6MFR2is2EPDBTUAUYoAICthzmtDkdvCqEChkmqp0JEOjzQNjUBPjoTAW0oAPWt7wwa1kYGhCaDkTxGlkAZe+zCzCAfSzInzm08ELfueCA3Sln5bC0EAuQYC/XJUDMCQQuJBCBCxWEkMLjiiiu5zQhECKCCS8UigveofY3QcBCfDBviv44oLoiCNi43go/KJAAAzMoEgLQDk3QwIrrUMC4Wno9RYgBlj0EcC0GQMQX4xdog8gDLrLawQb+cHvTDysYDlSABbka/JICJYeiA8Eor4CDBojMwN+z/zjvTQugFliK4CxgXlk2EC5DfKBPuOsAkkRmk0NA4Ewom4YOvHECAkUqODAIDf9oJRAFFLAQOkABwhQhA/9dbxUNqEClMuCbiUwGBcHjRg9go5clccoBpIBJB9onCBGMIDIbqJQhwBaZo3FtAgZA4CA+AAMTlmKEyVAcByMygNsJgQUVwEHeVgA7QSAAeqjgISIQgAAWCMADMrDe8qIBgw8OggMKpOEK8KMMIBwJUAIRWiI4UIESCMsQCAAPdWrBAwE4Bxr28oEYdVA0aahCf8jYRcPigQLEceIDjoKA4qz+NyRbcCACz0FLDuhIiB+SxxditIUg6xUNB+BCBNDboipSCYoFrKZX2lGiECAwuzFB8hYWiIwCORgNddgCT8wzQLpeiSeylIJSIBRTRX5AAGSEwGhAW0EJcHEpo3ktF2Ar3jedQx4JIaMpkirQBPhViw+sKigrEJwyWAfPOg3ibOqMlhU94a+jXXAFoANFBCzzTWV0kxcFCAIpB0HOa/1KFMFUn3RwcItmqMUA+qjACgqnA0sSoiVoWgUIuDm5KLnSFrEkhwIC2o0HaMwQokNSDoToCTyJB5605IQEULSCCRKGEBW41jMsF4qUQmseHv1EVMgig58WggOum4c8QYH+pXS6hKKExItrcroVGGTzFNusBQQaACrJjLQWcitLWJ1KCJpJBgU0XQQBhNk/qdrCW8fpgB7ZKoS0goilnGhJ+VzDk1o0EUeqCB9fY5chtDzUE+/zp0vc+AkEQCgVa12sEACwqguagp350ZU656LYT1h0ICfVrCBEZ5nUcoIAJihBABwgVGp0ICwWeMFLDXHN5/hUtUJowRQVswgOeECLYLWpf0xRgJV4YAUJ7agiaOsPym5FBLpU7tQwigggOAAHHuIFBaLCi5BGC6jlJQHMYliIgU5jBaVFiQgEMAIUZFYIHhAOWA3BAhus8jY4SIDB7KUAQtA2LQawpyAEXJX+pCqEBgnIAVknsINC9MAl0cisDpoWypFsIAFce8kKIKndoAShEAy2VQDiqg/l5SWI8VKAmChACBAUpcOqUMBS6RaZATiAskF12n1/qOMU7DMhTaQGDAwBgAWMoGniyOwGRfYXGPxpJjiogDELEVT8PeO+LKABixXCWX/ctxAPCAB4uCsIT2ULGPJzgMoooOVFqCBUGwCuIMY6jgt04gEOgF0JXpSmEvTAHiYArCHGorMcHNktO62dLZIsquMYAAG61ClRbKNowuQ3Ir8FhQhkRZABQ9ETCAivPMgEXK3xBX2i4HNANOTaT5Q5JqeYqlNPgKJOhoIFjfUsaEEx6BD+s3mxuqIJcUWBt2wC7bGekDPdVAEWzYoAUa6Bdieo+1WVbRkUcjviyviqggep9NGJgCChS1HtWvAasRFZtlN5gChJ6boTPFjYun0xAFxYaDwFcHAhdsuNPy2vA51WxE6jF6mz2iKo6+4iISCggSAUoNbdYCTKTv2JIOOaJsMOBQGOtCWsEoIHDLjAiVAhcWVIIAbQyUF8P2Gh8r3XuqGQIox6Woi5mqMBheUGzjRUOlgVrV3MJbgnjHPTCZh8EF1GWaiRIYHOeOTYophhrVyCdbHqm2Cq2CsAik2TH9xbFBpYGHRQkPBF6NxcVAl5La5cMFPkwKNOetEKDFBNXGT+QKtVGXctWHBHU5xyBbDOxVyjlIoEGGIBX3cNCSogcE+4uWASRzchBjo1JC1ZGeTFkUsknoKvMy4VF++7KHorkB8UnRASKMEIjMyJE0xuPBi/BQE844sCWPcBDekwNHDgABogYMyE+MBxGiBxCAgSBTcQAMG5LUwO/uDbuZD2aGEQXwLwZ+cg+QwMKFCDTpwJBdAW7gkLp1tq6Q7eWzpzLuh9m9+UQGNwaWS9yvv5RZhg7yzVEUDiEBRgSQFQap7FC3KXC+HWH3+BRC8lAF51Y1YlDDhXCDMwdYNQYnDWAa5FAOZWK+MQcOsASoYnDaUgAw52Oj/hbNRgA7fgVuL+8Qw4ICJBgC0TUVDJAAGHFSWsgAOqN3AmgFys9HSfwAPCNTql0AELxTouA0/YtwwLYBUj4Qs5EHTM8GT+ZA1RqHCis3W+oEcIEHyDBRG/NH+0NwjdFD+nRwIzVwgWoAMV0AI4AAMKoAADgDycYAKsZBVeM1CZQoWRcYGhQHEWNyiFoH311wv9FwrIRwidkh5yYjeEEE5hkiwTcIahgAApxxrW0EUjoHfVoIPLYAFxgWPZMQElYEksIDkiSBU/QIiLcAIqYACuGB07RAgAsGO0Iou5wALekjKAsYqEgACUdlSRwnGzGAKeMlqToQCJt1mh9xKNuAwIUAP8ARzZUhH+xDgIIlBCTzgRKPCGieAk0lQrA+BRVzYPpBhrC1JCtcVjHWAAliQCIKYlIxMZrwcKB+iAwKEK3TgI/ycPXKUIFmACHmADCSADCvAg5CM2ZTUCobGLt2dC8odvIVMu4VCAhZACObMCG6B5hzBlLiQVAlQKYheKyCgZHeCLitAPeuE9TqdLH5CE7agIPIAXsUEvomcgTkdUAOBedSUeK7CAn3BgZDFaqrABC2UoG6BtnBBuCwQ/5BFPhQIB8DhF/tR1ogAA5IRIgegwGlh5nMBgQBE2Prl3RHVFx4h01KAA5AgKH1BVy3NE5PMDuVcqXoEmiEU7NKiBX/N+QmUOOsL+Eh4SeNfTkysgA11IIXSFSzRhFBSgA7djUf5TW0ZpC5YYYlS2AiSQmZ0AiJjYGuXQAS3AVR9wmDkiMjf5cDiGg75AAXpoa50lWa0BXVbTdkIAj5wJHZqoDDY1HjQEGQnQmInQEiGhMgVQAg4gAGRpCHx4lggIViLZLyopis7YChEQhJxAAzJQAjiAAyVgACAQACYgABkDK5AyHhypDxT5mpgYEj+QYI+oD2cibl/2nMqwi2IiTdeyAQ7AnSgxkGUYkAqhUXXnLMKoMgMQACmgn93gc1uXidW5DANZGTeyF3lRChQQADVgfPWJC6xlDq3ZDgIQJxmaTtACbyqDATD3UAIy0AIJAJq1cGH/tI9bwQH3uVwpqqHl1Qs/kGm5AFURsQEFqRE+5IDZuXNnEVI4mgyk4AsGoJsb8QIoABiK8ixUSStN1Q0apUA0uhUfAEqnd0rmUis2twpCigvAVgIu+VMvEKXC+YqvGBRP6iV69hY9sG/IIoh1k6cb8QEHuKLqQad/AV+AuhEWcJ0a2p+tMwF7laj78AEVAA7mtSVIggpcKan6IALNsUWS0qe21QFxyans4B33U3/a+A8tZ6oK8QEM0AI/MUWj9ZuuiqQcwAARMAALo6Q/A6G3mhA8wAEpEAIOMAIGQAE4sAEKsAEwIJ6XJqmBAAAh+QQIBgAAACwAAAAAgACAAAAH/oBCgoOEhYaHiImKGRwpDCYeNiM3Iy4BFQc6KSwZip6foKGio6Q8QQ0rKxMTKx2qq6uqqQ0KJS4MLCKku7y9vogur62trKyuHcaxrCsFMiYEAL/S09SFLKnHydnEssjIxSsKLjTR1ebnoiWw3MfDxsOu7LIKAQTo9/iFOqqu69+r3/61+0Zswo8SL3TlW1hNhIJkBd1JzBZrW7sNBxQy3NjLQbKPAGH9g+ePHasNJspxXBnKwo9+yOB16wbr3ciYMSfA0MCy56cLJmsKtFmTJNFhMoD4XGpIwCubE0ka9UeV2A8HGpkuHUBT5sCjXz9ygzWAhlZFD1SaMyEWJ0SL/iaDyuvww8NZQyKC8USHoAPMt2DjVmwL9cKJu4JOyFBVAl8AEgUUKECBIkc8r/KgvgMYt4OCBXdpPFxmDx0AERpR8/jAQYCJETj6SSXozSvnfhM6MNCqwe2KAHd5PKhQgjZm2sWKIvvRY6mKBkRzdEIsBIEOA4PfRt02DDhLFT8KvlNBndAHEzD4zfR9E5z3jSGEfcVhjpEABgcqOKhQoQcDASwg8AkAL5RgVGfitePCRuARVdEPoPXCAw0eGLABKjStw4oCh4GSgoFQDbTeO+/do0N4cOGUwC4fhGAACfIN1tUEMpDCwAaEEUNRRSs0d88DMfD4jz8CggLAddCt/qekbK68sAsEDmAzm23gkHfOCTtkuBk3PirCQw9ZJpciVcdskNUoKeCgHU7u5DaLAOaIoA5gIiWzgVqF8FABCmtqqSM2rFTwCw8jZIigNxOg0OE0AQAmU27vwHmICjge6iadxzTwwTQqCNkZOB2UcCYvJ2ZX01ErpGAIC4uFGFE2AWXYQjUp8DlXUMVY6QsBBbj6lSwFOFkIWyC9Kl6GBK0QIS94cqCmXEyuMIAJRfqCnY6nEtUBCg8UcoIBXY11bEDgJENfLxa0oJR5z7LJZguqThOfm9Fuwwq3hSygQG0WhWRsKwrgIIMBBpSAg667VDBBDLsRgoA68qywQQWb/lLzQZBUapvDsoLo4K6MuL1TQgA6cMDDOQA8lIpdhEAwAEQG6DDqLwmAXIxFP8Q7SHxSgcSjAQxUjM8LM5UoBAf7FhAAC/fQgCKdMq0QQiHzgkWUAhRzJANnrCxICAsMQJCPOu04+o3RKqRyqniwKGCC2Bxd81R3LGnQ1ZDsiEoI0TZDFQDcKzV64AqCctSusWzmILQQC7j76ioldPsJAiFU4EICN7jgQAgpLP5JBgWMG8vUDO1Dr8/cNCzIBzhmJ1UAMx/i1Jau/KBAAgzM8EmnDg6TKkMQuwXWrIS0UFJbOowCAAxu4fZUEDofEsGBtG1QLTopxFisKwV4rgOI/iCHw3EoJtzKJis4CGvIDBRAawzx9xg/kZCrFG7IAyMU4K4CHPCCgM2zYUVSDgGBVplqGclDxwkaAKvw6eRkiYBACHBADBQwDS+giMDp+mSMBtiPEBkIXogSpbtzeOBRCFKdJxbQggGMTwgiCEAEQLEAGGHIVH9ihQEWNQgEwIB+sfgNOig4FPrBIHaIgKDDFrMCC4ACAQiAwAk48IIKGCB05tPJBb8WOoJo4wcSMMc1aBcXhPHiA2pahQN8wYMXtOAla1uFD15ouilNwADmsEGC6BcOJfovja1AARJDwYEEqE0eOQhjIQqFHID8QHLTeNl2BrNGX4hga5tRoS8W/hAbwHCoEBmoVLRYAb9fEABQkPLUCvrnCxe4rjHUAEAA5PMKvRHCdPTS0Q9K84tObSdvv2DAK9hUyWqAZyQrwAEPBXEtuEzAaLwACrmoZAJfIIBPyQmUibDRgQi8UBAPmBtFcoAnUqRsM65jhedGMb3bCBEfDMABtTwBrhxJqhenRJxNzsWLB/wAKnhcSDkPkT3HIQMEv9iH8H5VzF1cICQbut5dfqidCZDTFzZoi7GiNwoWoEgWE0hgeSqAHG5AchdzqmhBAEeKEXykAzUqjyA4MCJifDAU5dhAADczAAn1ik0cpc7LfgXTUXygBzL4AA9wCKsVIJQXRJsbLGUq/gjBNfKin1gACDCUAprSTkhdEsJAETGC5pmxPEQ73zDW2bIJPmUCKsjeS9XzDZFC4AIVWCYifjgWiZbnAyPqxz2t4YJeCakCOuCg77bo1QaAwCyJQMA/szFVqgpiNPQj3SBEoAEQYWYCIzjAVP7kCqFlTxg4CAFLByHXgjT0LEBg5SDa96sJNFQFCvgUMfBalbAokXdtKoALZCsI4B5DpEwRAQNK8IMZEgIEJYmJcwUxJ92GapYUyUwONNKD04E0oIPwSES26BMLOACbK4jpIGaZymSAVwiLYc9HKBCMnHgXGSggRAXmworKCqG+VvHrSigwmJ4S4oQGrWwL+vUq/hhoMIuqUAAhxBsrZLxXCAk4nx97QkRZbGBYdJpAZaHrs4/cbrQDkfAgMuq6Dlz4BsdaLUteRq8PE6IHmWmFgvVZEQff5HEqFsR+vWgM9QrCpfD4gYA5wtd+wKAQ3TWWiAnxULYZBQbsHVdBtjsIDwDQvxkdBgxCMFaGAAAFJKFAIQLgPEQZGVwfaxMOFDa/sXTgtwVxy5MJMa8LBLUnEBDnBfIFvrKVEny9ZYyXm3o+GWjkBXHuQAH8yAEPsNUnEpCSK14rCBaU1S0lYt5x3mEAXxqnH/AqRDija5BLI6a7H0FuISRIQVZUUxBntrJFIuCU7E4Aa2xFwN1kMViq/sbXGD8gLiK0OgH1BRqIH3GAV0WWkEScuW83Lc8JuqKAMhfiAyoZI+LgQS1UdCAHI1A2IsgGGP+Why2wGkEvEjvunAgAAAM42HRAQWF03tmyy4PICootChaTVkb9c3Ui0qqNYRD8Lrz7hwIGqQh2z8Qm//YfdL46XerwQKdM4nQoeBC6hvNLWr+grYMKIGOtuDJBCldEplPJ3wk8tRdDllFuzsqUOrYDmqKg85reoVlenHLoBlaEeWUtRhKAJAdLBoUINeqKk/ICkPZaAdNxLQAD/LMB6jMHAUDOo6KTwiWWYsWkpRGfHyODn4MAgAm4spm9VOMBoyHJhUlBrHEb/mPvT+rilMwIABFaJdsYdRDUf9EuTLXi1tLAroMSJdETqIxNKzCAE6exgHA9XBQzb49U1G10fhxvBR0HZ69I4g0H7NsXWF8Bz9lZ5/MlfRrttI0rNCkEARgWnRa1weZ7YeofmH0XJxgSH12BeHwyGhwFIK8gRCPlZeDAAylAgLcJmANWzH4UFJ5STFZ5DoUBJiYw8KsFVN67ZaAABhTAwQA+XwgXKODP+9ErIhDQReVQRc3n8HE5FhMysGEwFABPM2pFYWQRpH8jgAoTEATfVAgGVy8y8X2+wDcmFwsGMDMCMADtoQyalmy9IHmykFotJwQEYG51Yhs5kILSMD2O/sMZMtByImACufUxcAF0nxAMjiJc0icEQbAlG1QM8oYPGfBDRDUMHZhEIZAep8YOBfB6n8AD0tQ3K5B+hGA3FJEiqUB6d/dWB8KAh7AAAZAea4MTGFgIEhB7ZTMMCIMAOYhOtlFK+FADNRUTW4cIH6ADFdACJQADkgEDJXAB9FcIByBf7mQ0NwBE/fJIHBElInISFHcOElBPgQELF5AVz3Eo7GCHC+FSZNJ892ABI/BP1OMPJeBHEgAj/aIdKxCE1XACPCQCEQAXMUcNBPCAKpUTyEAB1+NDNFdS2cCD0pACW7UBwydWSHYMoHglKiADTwMSJVUCLHVJbUJ1rLB4/uYAASpQa6qAA6sVJbkBIfcAARRSAhCIIMXSAiwFADLIVFBxfL7AAoV1PNaIiKpwe6TwAR7QHwfQAzZwAyVQKXWifC0YDyNwJqKoT8cCeLvAWZ7FYPlICALgNr5gfssgGyIIKgrYAWfFXsLDIzYhi6NgXmECEbn0iyXUQwaIU5e3QazXXtnSCjggfSJgSEwyQu0Aeb3wAEnCYL4xARugSNOgUJohZb+0aWdSQELRYno3DYXXJ9l1DAVgd7+wNVMxkvflOwZgdZ12SCGTIwoQdaNgea94QLJgA5WoCDSlZdFFSzGBA3tIXe01aq2QM+bQWl5kPrJQAry0C64EKlSh/hwRQZefkFg3Ez7xQI+9pD07IhI64pOikAE5gC1UZxId0AITiBd5J5SsYIy/gGBMZRt/+WeKYFzixJilZpaHIImeghPPWA1ZZl8lRhI/kADL6Am05YnMMDICAIOeAFhQ4woG8JLmUFaxqXugkptgWAg0EAIBkAAyUALWWQIGAAIBYAICYDLU8FBDV5ECxUiJNpJl8wOGuH0+UVDaIZ4bMUummXVeCAPSRlVKqHeuiQ7kWJ66hk4/MAABkALCyRGi5RYt0JboUD4jtKAatQwkQAEjwAASgAAIWg19sQ4LeRa+p41fNXTcsAI/kAMDQAEyEAQgkAAtUJ02gA8yaHzU7MEBweOQwpNnuFIug0GC6AAEK4ACqLkUMSSXAOR2S5mUoukLKpCLPqEDMXkc83MqIjKSxCAdlsUQCJB7oMmkCMlfcDilG/ECzBOk96UhAWQbcMel+HCDgvekPZNnLSaZrNCZZloNH8BeMpkTEVOVJGkMKxKnG2EBbBabKwkp7gMy+cmn04AAFaBThtmX9tUzAtEjhroSIvACXid+Cigu7QAD6hmpchoCzDWmavV8sRB2nMoRH8AALZBbWBiqUVmqPgo2sIFFVCIXzICkrpoPPMABCxACDhABBYMDMLABCgADApOdAaAC3bmpPhEIACH5BAgGAAAALAAAAACAAIAAAAf+gEKCg4SFhoeIiYo8BAI6BxUBES4jLjYVBzoCBBCKnp+goaKjoAAEOg4yChMrKxOvrB2xrqwrDSglAQxAIqS+v8DBggABP660rysdyrOyysfOrAUGPUAAwtjZ2gzPzt3QycuyE8vhrKwKASnX2u3unyIDzMrisc2w387RyQo2BO8AAw7SAW2ePoPM8IlD6E0GA3YCIwoDgINcN3vmFCZsZnAWDBU8JIr8RRCWSYz3wiVEmFLBgV4jY4LCkY+hyYvmOtaDBkOHzJ+JNCAzOU7lznoKM+JcUUIC0KeEKNRM2fEZypXjys1zABPqTwEb7Vn9hnFhUayv9k0YkMIr0BL+56oeFYt06ThwYz24lQmWHMe7+u5N7ZhTq4ETe0fCrdWhgAIUKBQU6GDMrOCsZMOu3EAjMYGu7wiYEPAAAQ/QInggYPHCxAgcdQ/O1SrLcgcGbnWQMJG4EI8FFUp0OHrxYjmVr37wflrjxwQFIXsbQsDAQNLLOFWucAA0RCtZPaQn+mACBlXi9hZOGCHTu1UfnQJm4JCCgQkH+B2YYCCARXxPOpRQEGDp4bWMCyPV8F04FbTDAw0eGLBBA61cV0sDCsjgAAeeCCCgUTbdtIwNEung3D05/PfLCSEYQAItx8RFW1ys4PYJAxsUxxF2egW0wIt1vdKgLwDocMGJxjH+U8+MywwAmiIQBABObIS1IgBAJ+xAl1U5IDAKBD3sAONBfyVZiwqkLFBRTbVtpEwAiLkjAlz5pOUKd6Dw4EEBMoJjUWAMKeOkLzyMQNeOrYxgQUAuoARiAV56wsAqGClpYGGW+gSMd3/NMgKHAZXUqUIkJsKCDAbW6SaBceEA0S8pUMoRCKAGZAGfYRnFCgmRGtJDYZUCehaBy2gqDAcD/PkDrSJZN0tKsCyzHCEnGMBmlcOidQ4O7SCwZgssjMQpUoAVpEC4hDygZbBKEajMBjjIYIABJeCwwTIvuINAD+iKdEIOWx5a2wOFaPDinzatxFQAOnDw5CAixAmMAD3+QpWAXzgRt8KVhIRQWXFzsWKADr2KRFMAUKXQil01odnxmLqapEAFHwClQwOsIAgUqsMRRhfKhKjgXIizKGCCijFRNAvQMRF0HFYGyQCaqI6uFEB0T5XkzZAjVdRuUjnU3DFRMsZCAcGeIECDChW4cEMEATigQgpikwJAsni5LJFQhyJqLCEfjODnXQE8bIgKFCaT0w87gECyKNykpfgKbUlEZ8hitaBI4AWR87ciLAydE43kJFC5IvGMpc8GSLujcq4gF1BrIgREQAsKaIcCAojC1kJBvomoMKWdE2guUAu8gxheKCyAUELuoXCQKqAqyQAEIo3Ow9EKNr5zgp/+Ma8AA9ahGP5JBBmVSSbXhEBwOcZ3KVCyNr+Shdwyeo/EAYUrGLNyUVSZgAxmMB0YRGMjy2DPO+QhLKzAwHyiQEAImMcCBCAAAiegTwUMgJQdbaBfg2BBASzVjB84pR1AAF+5ljFBYXxAHsALRgaMVBmNdAB3hhCKz5RhAHc4AFFHgY4wEJCsCXBLG7WroTl8AD1BuABq3lhAOxjYrq0IQwQymMXnhKGmSiljBK8SQgYopSrjYYMAAwpWK2bniwA864jtIAY0OuAS8g3EFbGZwA/+gQ3vBCYpypCBMCKHjxVsERvCe44J7FgIa4WPacFAnvZU1cJffAAF5lhG99z+oYNFfmIBMKNFB3IQRlKIgIy1sdNC6uYL291kApB0i7V6t7E0JYCPBPgYbVZCgWCA8h49lE5feBcBUSzAAMawkQ4ykq0OxHIU1tmIAliZGAP2LQcQHIQEHPkKBdqAJUs5HSlYgEctikcQPahKMppYCAm0QHTK6KUQhINAG/4HAXwEhaHAEcxzSi957CMECxKgy1gUoBeoHBAzBkCICvwgAvlMBA9wdRcpnlMQ5vmTPUpgCA4QNGErsAAPmCkYEBDiAslRlCIEwBGOXlQQUnIXHdsXgaF1cB4LQCNyCjMtIeQIFg1Q6SEahZH8nXOZnfpB3SSADNV1gz9+AtkEjAX+AQotIyEBoKYQzDOPFcwPKjM4QMk+gKS7sIJjQjhBQTX6jAowAFo7mUC//jlJOmaAEAiwKjNc6hYEOGCEaBWEAkKkt4k+y2cRMAFbd0mZuqlMo+UgAfkeaw88QUVPFK2YICgAoldA0jwd1EgLfrgqrGCNkBzZQCFUQJdDjoQHa3JGMQnRgtJ2wKSD+FDyyFGCJ87IIgbtimIt5Qx5DsIBxQHhT0RA0UAWIqaO6qcQsqikkzwDBxH4Y50UQIgfOqoDfIWpWLzqllUsBI7oFOU3wlvbA1pmAjBAX6D0wd1BBCCuz7hAIXZ3nAkwUibyMIlqCTFcs8STtunZEXwNRS7+stRXEMgtij6kK4QbwOyuXsGbOAY8CMWyyoi0VV2wYHCDZ7HrwUIgrWAoLF9vfFUm97IKQwnhgQXJyLhCkKS7/gSDfVIvIdgcRDpTaQ/0CqECbI3oTwCAAoPgOMXzFeQgZnmohODAu1CExmkPKw4YFIJTOPUKBPBiRkEkoMGywK0g3gfEEtS4vwVaRq9ecJIlgYalzxiAa0fyy3pYds07dYUCBUFFtDDDANyQjWBqRU4R65GVFjDGABiQTZEU+Bifk8qwyDEtAOSAlvoAAZ43rT20IuAHSzoG5QghAheooNIjyaJYlHzMCqnH1FE1MCzJeRmMdHqw7pVFQEsJFQT+0EUBxK61PX7A6KZqVxYhqGqWy5GDwC5Gla4I7zkVi5FBH0IAqJIG1pYJsuKsA5PETUYOHDA/0s4G1kABAGifUUtPpEBA4b1vWaAWLgqoJxYdYPchXmDoZQRWOqyVJrG/HVieAdIsIbEdYJz5YkEg4FKvmK14IJDQDgRUFIbNDFKOmPDaBKDihIANlydQgNa5JXsA1GoomFpnqM02hd2U+SGQjKkOGDU3nVvBM0WB5GvVYzk8oIBQQ6FTqRrZKxKgaFq6FAxNPzwZK8gdhklRkR0bEhQEUC4SB4ucnpLCAjGSizKCLAxu1wnEirCAC5yjAYDQAHwUJkWBeXfobED+YIS0/Lkg5H4OPX4cG9EsxzSFYXVsscLswDBUwCZA9UIgFSEGWFQ7fvmMg6dpKFx+BhuBEenFpkXN2uRTSgK+dWxc4BmCH0X2rtIzWcxYGxIPGPcMQQOpgyMH/sjGA/oX+wgWqMoed4cFVjiPAoidBqsAJ2VwUIEUQOBVAPjvIXSRDRtcRz3KYPY7Iswu8X2VAGyuUgNyMAAcUAAGkOnMJxY+CgQAfr4W0XY2eACDEC2jBK0nCCIgJbr3NDKSdxHhRpqxQsUXDAQ3OglhAMQmABoWLXIRCz8gf6PgARXgcohAAMgxXy0nELlHQiKTCCJgAtGHfHQhZaIgOJTXA9r+VwhBcA+WwQze9g4QkFFUYVGJkAEmQBMiUiYr4IOekAFBIE0HMINCICpq5w2j5w59hnmi8AAB0H9/BEAroHGKIAGFFiN1dAgQsANWxS72UGYCwQBl9QxGGAofoAMV0ALvpwAKAAMlYAAOoANKdggmYFZtMg4KUEmDUGJ2sT3sFBARNg9o+BOnolAMcQGvkkjIZxAIKBCS9wyHKBIWMAI1ZBCWUQIqwgJAsiqLBhSXuIgiwQHoc3XWBYp4lVHakz5f9BQisE9iJxAIUAO6lUZc5oqDAADUpYV/+Aw5IDFAEQA5CBAQACHC0Se9kxYdIAMqAgAJwBKyYRWCKBHWVwj+9PcJPHABJQACNtADBxACHuAANyADOQIzIYMQQvckRFV+f6R/AfECNEEBHugLvzI5Y/FwF5geP5cCV6dOHXCL7iAAUgELOGCMwMADTRZnoYc5GYEDt8hxuYIwswB5rrOL5QAD1yMMHrAlxCFTZeMMXJEIfag+mRMR9zYm2lMAe/YJ9ocwvXNTEjYLMtCGhsADsrIj4rB4dhduhRh+DtCNieBujqctz7IMOBCTL9OOV+V52HBMNhWRG7WHaRMDqnISPYcPFKAD8CaAG9CVK5CN2UAAJLByfhGCnGaU3bWAo8KVygAC4iQKwtNAziQQFaBe1yhh80ABGqgIJ9CXkmP+Q91gACqAcvCQUR1kAGHZRhgXgk+zAi2AlYRgASXQZKW1PQWQC9uYDYk0Fo4pEiPwbPVUGA0QAVFICABgAQIQAgEAAgaAA7R5hyAQAKPBAkz4CyJgTc/gixIBAILzR1YZiz9wAQLglntBNcA5EgSYPmspkvOwARVgmb0RDyKTjwKBXIGSMdi2bAOgDtoJFQTRAo/pDu6haCIHSHRBAa7GAjOQTQCwGgzJSef5DgIAMMlDQoFSZT9QAANAATIAAgmQACAgAyUAAxjQCoPyUu1AAI0nU6cJapOjFk21ew7aDgOIRwrVl3wZdBJqGTCgnBkaCjqAbqZJnAhEXE7VQA3CWKKkwDmjUle6IlVzYRAbcJ8wulIa1qJxOYSqQj1muaPBACaqV25el0enaV0bsJtEOgof4Ea9RjRK2aLdcABP+g4cEABHSpi9Bp0AZCdClKXu8AEV8FNPuJ5AtBRDSqZX9AKOFKQFyHflsAxj6qbvYAEmIAM2dYEktCTlp5F4qg0foAItQHZGh6SrNz6DKhEiwAEM8Boj5GxlMguCAgIm8AAk2qjYwAMcsACwGQH0MgAbsAEwAC93CDcqIAAcMJ5eEQgAIfkECAYAAAAsAAAAAIAAgACGPDYslI6EbGJcvLq0VE5E1NLMrKacfHp0TEI0nJqUZFpMdG5kzMbE3N7cjIZ8ZFZMTD40nJaMXFZM3NrUtLKsjIJ8VEpEpKKcRD40bGpcxMK8XE5E3NbUhIJ8VEY8pJqUfHZs1M7MRDYsnJKM1NbUtK6shHp0TEY8ZF5UfHJszMrE5N7cXFJEpJ6UlJKMbGZcxL681NLUrKqkTEI8ZFpUdHJkjIqEnJaUvLa0dGpkxMLERDoshH50zMrM5OLcXFJMpJ6cPTMnAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/6AQYKDhIWGh4iJijsbKDkHFQEjNwkRDhUmCygEEIqen6ChoqOgABY5NiUaEysrE6yvrByxra06JQE1PyKkvb6/wBYpFww+rq60r8ccx7GwsCsqMjw/wNbX2AIDPtCzzMyyK97h3+LI5qwrGgEoANjv8J4Cy+Lk9ebls/j25ekaNgTiCRwYpIUsZbPIIbz37WC9gxP0MVtRIoM7ghh/WSDRECGtjg8bPmTYSmK6ASB2ZFw5ysS5hPsiQnzojKYskfpYMQDBi6XPRABwfHQWbii9hAqNjmM1YMHPp4YUlORXE6nMhUjRETWHboWMalDDjpgpcV9XnBA/0izLrIEDlf5hfyJQwdChybokqVIVOQGHgrg/UyCzSzgvXrQ0SerrANinjJHg8B1VrFByTpvQJhg40Tgji1YR74kLoYKBBgYFJpI9jLVbvYY6/nYmaMMVjA88crBAsKOnIBE7ELAQYCICjgIv6ZENDTPyqxqzB4pQALcXhAc8SiRsmM8s0nw+TEQfjwhBDgOtKcfsaoO8e0MeTMBwzfbeq7IrAjwFUeEphkYpmFDBJR1kIgALGHwiwgslQLYaOMx5lSBLNazgAw0YYaBABwasAlpNyqzQAAMyOCAAAooIgINllXUUQgo/5XAMDhe94wEIBpAwWDLLOFRUCSAokgMDat01iw8joP7oEw0kHCTeNSJkcEEDWJXE2ms0AeEJBAFMVVQ9fj11ApH4cGABMAjwoMNRB+VTWD8rFOABKAoM0KM4HHBggm8sifCYSRNc4MsOHYSQHluwdNdRaAeIAsEIZrWwQVgueHTMCi+QkgKRbVp2Vl1qsUKjpsfAkGlYMsb0DQzVefLDY8/E5NFVdtnEjGykoFCCA3z+5EEPg5k1gQOgHGApX4m5mSw6IwDT61PopeUjWIicAMRUlLVW1azOMNDJe6CAcOeizBiQyAMaKJbsVhMxgEMJBshQAg4MTMQMjOB+MoOh3H7qlCE5NEnYrJJR4EAOGzwryA4WCFBBf/l+EkFlQ/4pU0KvKXBz1jMzGZDCnBELhILGRuL17yASkPxaxSswUAHIgElQ408lRGhVPxPoZ4gJITQ3LgMmtBqXBCu4ANUL2F6G08XlfeCDVeEEIDRgNa8AsU9CDdwPByFMqggKK3ZUwgOfIEBDChW4kMANIzgAAgow/yKYPviuJGNS3q2QAygi8BAir1+PsE2wyrDiAwMtLDBDL3NlhgJLNTM3UzgtjLJBCyHs7UkAWbVIFBCPi+LCSxNo8C1BKPS47TdmWgcKBnRxl3fBmntCA8nQJJCRQZ8iejVGd+Mt+2VfKRKU5KHpTdAJDYRUlTmm+3RB3mUVHk4DjCFiQq0yqaBkPP48GAbSBHWvtMF9rTT/oacwrXABZ4agt943EQwklKxYwaAwQQtUkMFuEECAcF5QAQMgZzuu8MYKYECtQbAgNaBKhwTiQTTJsYgV5RvUzICxgxcYYH3OUUFACnE3yJijcvBwAP6KwgEVnM4XEKAADwRCgAjsSB8jmFAhxsKtdOBKFCw42SDuFxmctIJYznpMAc4ksrCJAwehO8QO0uUzfXxgFDuowAQaAD9BWMAYUKuV134RAGWgUCAi6JKe9jcIpGnNByP8hDaopLxBgKBKiCqBNRaALQFgBG6hkMGxjqEzRVigBcaQhe4GMT2o4SVIv0AAv8wxgKnFRSqgYgYD2P4IABM0aR8MuAgA6sUmhvggbqTgoUxaEcXZRCs9pzIEDSjQo8iMkABeGiQHcEAIAUCSTmBEBgfMRZ7UsW8CVywEAlwARpu54l98RFRdkCiIx5Tgh4m4gF1C8L3x2CkrCQkBn2oArCJuRWc2kJZZVhBFCBQgHS7Q4SF+8DRh1tE9frOHMnCFAZNUrx4UEIR2tAWR00mFFgwQ4g59RMz3bIB0+PidUMx5H2WEQCXpepA5eDkILZpFBmMcxA7eORJskgcGzTmIHgcxlmU5xAMQGJd3kikIbUYQOr0kyUpnAwKFqtE7KqhRCghalk1wA5yz+h0VecSB9hCijPvIYFgU0P6gARRiHkWawCkHIRWroANCKTAm9Y7hR0FggEoQ+UbtBDEfmnQTKlzS2Aq6GIQT2LMsZa1rMKsoiwosgFZ5mwALHChTDsCREAjgRjh2GhYWqGAheQ0CAGLnnV+KgF8tqscIXAISnPjge1gFVERalTrJUTMsArBL9obI15wRYqlKcYUBPAoOxHCgOn/dkTkYUIihamWtUDnBXidQP0K0YEcHoWkQaMmPkODiWAopgG84mxSOdtQhKwgpVC6bDBkUAqrd0QwhPojUouDgBjZRjAoIocWKqvS7ZfpsZ6i40UJoMaXiYKxNjSiRASSguVnh7SBU6JpXNFQQN9jKC8MyAP6IwKAQ4aNMQAfRAv46ZAAT6ywon4pAiRw4COh1jjwZ3BUNFGJ7iGHsB5aVDxhAamD4ELAgCAwqxgZhYq+Rb2Pmc5MHE6IDDsqvcZ+BllfAALxZFYd0B+E3ddlYhZfR7lMma58JD4JzdzUwIWRQH6XhIJ3mVFV1hrqtCfjYjjOJLFQwcKczCuID3FuBchsETsuUwCUDC8cKvoe02uJjyYOYh0l+B5WuHuS0QahZZ107iAEUmSYy+KuGG+KDMX4GulsdhAV0+6S4bI8hCoUtQzrN3Vrl4wOhNTUs8prYw6wgsqOURUI786d7MFEQEKAjfvPKZmdY2AGXVk9COh3rVf5CiNA2HcGCoeIBtCojlIQ4aN4sbSVlgQMECGiebY/RrEFUzYIc8C4hFnDN6Hy6Id0O9NOKdNtB/HVbiWlH7MqMJ+sGAcqVKUCr2Djl+WRFzUFAwTc9wlgs85crk8IBhDaGp+r0Gd4Aj45vw7HJQwCAB3wpZKLrzJZ241iBID/GBHGta8sU1z0Q4BRSEF2IyyXw1SI9oLAnYNUg+Hbh3ZFB3BQO3QIsuzOVOgtdEZGDVXDgdBVkmUSSSTS+ikMFCg0CbQkj1cZkwEuz0LgiIOCAdEs9s/140g50ZGxzJOkQwXYTzcmDgAOGg5uj4BMt8eszsgkUUCsIUyKyNpJ0AP4XMEEBSdVD8UXo7kOcTB5JCPbkiTuGpk19EcXQ4XFQWXyYFOdGX2fFLYgfXKoFqCxPl48xeEIccgKrFQikZqGC0I+C70Z8fKeDIILHwiDiiVCl2hnwVkJ08pMrMMCt4TGXVuA+FERblz2GHwQeVMCSisDlm1Zw8kKALS0c6AD05eaDqJNiYnEuh70FsUFRfFxWK4g6BBpsGBXYgPnWGDkwPABjQLE8GCYMRwEaKAgFPBZU4uADOFABKIAAGwQBCtBKLOEABGMklSYQDGhC+sAqhkAAVdNlIdIDGoADAwADKtA8PmBSBDEDMTB95WBj2LAD9eI5o2IIO9AlAOgjFf5jZSsBXkEmEb8UDyV0FysggoHWYHiUHJexAjlIEARggm3Se++QYWfhdYggAibwWL4GYHgyASEwefEABNClT04YDxDAY6/hPaGwAyawIqoySKxQfYiAAREQT6OQKtY2E3FEEJVnDt7nCQoQAHbCQjOhDoCTCD/AfrMGCgiwCtJSK8qFEXykDJc3Ch6QAxXQAiUAA6YBA/ByMBZQfoVwAHcBUp+QAJ5CFStgdwtoDoMVHRLQIDLoFtu3iLYyOW7GEmOhdXFhASOwbupiZhEnATpSH86UXWGRAtvHEiygSq4GEwp1AmCId/7UhSFzDQhQA6rIJoDFDCXwVjaIVPYBd/7PiAgSgAKLsyU00AGKFiscdw8tMDU7uBxcUXrPiADA4gO38AE2UCAm0AE28AEykC7BYm3plR/7YxCPxjoo2I2DMDo5MTnN4DnzUw/uaAEp1SKnaJDWBxrCciVFxi04QIqJ0GTSxAyz9xQ/YAMTOQrHM2lvAna0sAJ/6AkiMHfPM0xxsQMO0DwFkAG9gGcR5GqHuBDBx5GfIG0KwQCulxFFdxA+4ACaiAgWQFJe9R3Yh0fKgAOxNAo2FHLsBBWHJFMlMIeKcFzVI5Vf4kgUkQP8pgiSZClFmBF980mIEhEmsJSBpjo9GZUs1AI+OAqCgRDOiDpElJIrQAEYkggggP4cYBdYDOExRekLfzIBLXCW2DADt6h5gaUMH+CVhLADClABMhACXpItzFAAFBAAAvBz13BpMgCZ15ACPaBt47IarNAACVCSFrcBvjQCH2AA8/IuBtACIwACL7ABw/gOAVACpikQXeI5JngMFyAAchkxIqCa74CQDbg6X6IOFYCZFPkUFSBMD2I9HXYS7HCcpSCd2xkEJpBIHhGRDDeEHDCaNfAAM3CWGPADqFACBUCL55kIAkBZSpMURpIW5tAABWCJMtACCfABQCAvHmiRr3Ah+0l4FBBbFkahC5kM1qMULRihnrADLzaQ2YKRkwEnOBOSHJoIQ6JLhrcdpoYlAdcKGXJyoqDgAcd1mCWjeRr1ojAxAVoio6CgDYqiTw7CjnTHjjDnowpSAe+UFJ3yeDfYQ1eBF5WEpDNaRkm2NRHEjBvja+Jwf1R6CBswAnkiitu2HFMoihMgZV9aHhVAJnTXnhTTO5PTiGv6hOdBjZ3ykeqCLBNxh3WKCPExjQe3bcMDoPnxnH96CB6QAi1AF96xEDlKEgVgACagpokaCiKwASnwARSAHKXEjOnAATAQASDwAMN5qaTACCiQAg4QAQZAATigARoAAwMwAPASAQEAAgIgnCETCAAh+QQIBgAAACwAAAAAgACAAIY8NiyUjoRsYly8urRUTkTU0sysppx8enRMQjScmpRkWkx0bmTMxsTc3tyMhnxkVkxMPjScloxcVkzc2tS0sqyMgnxUSkSkopxEPjRsalzEwrxcTkTc1tSEgnxURjykmpR8dmzUzsxENiyckozU1tS0rqyEenRMRjxkXlR8cmzMysTk3txcUkSknpSUkoxsZlzEvrzU0tSsqqRMQjxkWlR0cmSMioSclpS8trR0amTEwsREOiyEfnTMyszk4txcUkyknpw9MycAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/oBBgoOEhYaHiImKGBsoOQcONiMRNy4BFQc5KBsYip6foKGio6AAFgsBMjorrBMrHK8TrhyurisNDCUuNQQipL/AwcIWIEAMPrMrsrKxys20tcwcPiEGPBvC2draLDYDrbPhr+O0z86w6M8+Gi4oANvw8YcePDjI5ujJ0M/6E/nnyVYwsIFNnkFtBPbBCreMIcN00MTRghjLlowc7w5qJAVEmj9yscpFJLesokmR0sa50mBix8aXnxCsgtgQIMmSCnHWdBiOAwMQvmAKNYTiXrmHDXHy69dPpMlaKzQsGEp1UIWPIxeCzMeQX0WmD03K+FF1KIASKSNSdMrWnEOS/nC1NnDgsuxLCyGSqsSHT6LEr4BRohugwO7LHKz+0UzrFWXcvkrR+ahgeKMLnScD712b9m/PkswunKhscAeOxs2UhWDAWkUIWIn/KgSIlbZKDTRIy3sg7hWODxVesPCwI2gQESJ2IGCBgkcEClqjy26cTBYK3fFMsMJRQQGEYBAU8EA7EbXiZeVWABmNHR4KDwYR5DBw7mbK6v5MtN8fyoMJGH89BssAD/A3FAbMLWBCBQ440IEJCwjAwneeAPBCCQDRNM4IdRlYGg0dGKBDA+AwY+ItDMjggAAIKIICBbSFU0AOHhp0AggGxKCMPvWlA9VCJfBgQSILaNDjBCUU/kTaCRnJI0IG9J2o2E0hfSWLDyUAdcgODsS2ggPGVeaBBg7IMwMPRnpUJUo/wjXOOCrMkAgK3zAgQHtnTeDDndrs0EEIPfYFmV+pveDJDjm02F4AszDAXjALMKATjzmhR6VjHARQoyILAHRBMD/IEChXS9n3FjQc4BDmpoR4UEB1K+hHiglqYhrYTpnlxAKriFzQFS0FhnLCBTsS6lhN+bCJWQq8HnKAMosN0KEiEswEK6aYcaABDiUYYEAJODBQACvPfNCsISeMS+osI3wCgA1bIWVOCQHksMG0hOywgQAVlDAuDBSeO8gNIPWzAo2fdFBsZiUZsAB8pEAgnMCE/qBgW3muhEAAKAoAuJQsDFQAMcXwoBUvPyU0uUgENvlkQsAkb/MCtEk1tBAHU4WSgrquBABzzNvgYMtaC4fwKCgsoEVBsIvQAEIFLiRQSQUgvCfPASAMhZg/NWOW8ygioLBqvi+M8M2OKtniAwMJLCCnMBY3kBtMFFB6cgsHAcADoMh+vCMHF7jzCwJpaqCoRjSgHdGvHAx5kMLRmbfXCjgYOsoH0uC9UQvTsUXZRgbIcp6gE7kyVigg2ITwLwSoTMgJyPDUDwxjx3MCA0da6ZkyDVTguiEskNBPnL84MEEGiPDAI1OsMAvTzFzD4gMr059E6QQGHF2ICDA61fMo/haIOsGnhwjNz2wcDFC7QQFwUIID9iIAAQbL8SsDB4srJeshjEJb5QoSCEUOXjUL7QXhB9Nb102cJxQRHC4RO3gBfeAygf0ZAgHZigX5FCGCABjFFVkrhA249plnhABfBtpAAtCGg8IowgXxgooLESEB80GkBIb4hmz0oSlhiGCGB1HAaTj0CQwYKSu12KAhQFArWTTggRZIjJXgoqQg/M4THuSTRkSwKwHG6CMr2FghENCC3KFjdUFgIulqgcNBzMeAidiaozxkgLYwo4eDQIGkxMFHcw2CWPnDRwgFEboQoDERJ1DBjpTYHgXERicqMA4CXnU+cTAgIwCQ1Mny/uGDkXlgRz4IwPoGEYGAHMBDvlLJPlagxSAAiCJhcVwUp+g9HBBCjbXAQQARoYAPykKM+xFArmjhR0FcZilHUUbOFtCZt3yOkLWhxSkPAchkMOBt/BnA7hhgHIt5pibtCkIANEORGe5gXGpaQQs6QYgfSHEhX6uM6ypQqXIwDYMe6UyqoGmfrQTMmx+z3CBGIJE2kkYAeBSEBRIYEFh0gBCnkc59QuCLmTQDK8uwpVVEZ44VPHAHeREHEMsiAgf4wAddHITQPiMLAxCCoLkKRych0IBTgaSYQSDWqShQCOiRw6B2IYDJOGCDQozTjpccRAowmkEUEMBLGqLFM4Og/gFkfaRML3UIA8sCAhKwsKd8mcbIHBnWipjAYlzBzARWh4F3RoMDh3wlOR5Yle7FwgdH+2QTWTkIBMToKROoQA4y6COmscAhkqkiTRUH1LIYLyUCtaIij1XBQYiAgAJ6xQhoRZ1mHE6Y3svYtBzJEKwaRpgm4UEhcNAWWpg2CJpEXzgMYDxyzoIDHWLmrRhQCDWK5JBVOYHiJoDTIJSRaxcNpyBsSDp6Gcx7FB1EByLjm0J06R8ptctlxSEDo0ZDHy4dhKiQyBAKlHJK/+DtRm/V2BEoxAd0LYsGFgeDQlyFLbIAah0VVzDKrXAhfaOFegVx3VrkI7ykpM3PyvKN/psNWBCc9d4KgIq5X+lDAwRrrTQe3L7IYK8QN+AjOytjw5UUIsI6ASrnOksLDcA0KwBRASEqYMbGnveu8a0KDFBSX0IorzEqxuhmXDEARjFPJNEVxHRRVRGNDqLA4wCmXQAw2VnwlBDt6wuCgzBenUAEB9e1XkVwq9RAuaLHg/CtLa5TGQjYRHMD0wxxCVEC6VApSMbay2dvxYEChAm0FVFtZUgbjoQGIXQtm0BCAYRc9BpgqaQqTzmUJIHhvmlkQYhiTRhZlR/v45BHFDIH9icCRXZOFiMQpkdgyVdBIMAocGllJj2SZLuMtxmOE8RiAdwMLe6aoxJ2AAtoZsbK/gpi1tmaqnGfIYNRbgR2KUnqIBypljcBc9iMyQkIZvDB0U1AuUEYKj+6S4ilMgNMlUGxLCJg3zZBowAdGqyY08HKTKbNR7G4MoHF7I9peYBEDGCzYURQVXq3kssh+ZG+gwBlbMECG0N97iw6NDP8uuLgH/jAgquyVJJwkxD4VOU4XouWHTrDz0Eo5anEkVLhKmUW7CbEiCuzg6p+Rdk7uB+htHjOeZNjAIJIHfpuYkG7okoWIdg4afoHEUwfu0vI4sCIH2BpNq3Aj+6cdzK2TGOnkGOr2MGAChxiaEIIAHcHJkRtmXweWZ3TwiThQMCeipN8OHk/QndGCHLc1+O6/mKrrG0mSFIq7sU4Q+BBKDFggKubBHAU7IiglT8O54EPDvkV8JZupHkUgWkx8Zt3bw8C0E5uUDwAB3AOgro5s4ItV7pWIYmnrvF3vRVAHoIwsZgKnH4omGlzyP2woAjQbrASZBfLsEe60guBAhjIINcHAcHBScECZBydSiuAfsrTygp0I2IDVV9GcQ/RgdhxoAIzr1GIpfirVwC9EKq2ZmQRUcrMjrRVXd5RARwgZf54ANgc1RXKZkV75AoGwHeFsAEwBg1zdAgP0APJRzkOQAMIoDIAEB4doCJUsXbZ9iZVNAhHFSujsHYX1WqHQADdYzAlsQIqAAMUgAMwoAIk/mILjCcPJ+BVEnUSC9dOKwAD93coDIA+r3UIHcRQ1/NdBtMD2sc+grFDFlQIOYBCoOBT5VACzjYIAnAau6NhzSADV7QNBPBN/FAAy5cNN9ZnH6gIAGACe7QmpSIdAwgPK8ZUdlZ28QABjHYwv7ADJqCFT3F5+yADUpgNWyMgH+EKaSgP1BZzwaAAAQADfzNmIMEAESAAowRHMRFbSLgZqbcRC1ACg0gKFpADFdACJaABrDEAJXABDrAAFvCFg2ACJCAapFB/keYVx7cRoVgZEiA+AjF/iuBOVgWAr9CJQDMMLsBQr+AD3vcJtxY5+oBSx8gNx2QrxgcKiWQq/2CH/rwCAAjoCQhQAxgyXDoRA7KHCFvTgRygAt9YIyaFAzbAIp8AASBCHtT1D7YQAVcoTivHCoNEMQIQO8rgAzpQAhFgAx0AAibQAQFwA6oADsWmF7AgSu4SePHSWOdyO2IIYFCxam9IG7dHQ/kzC7nYLKETTc/lc5whOq6AA0yjM4HyhOfCWRK3FTZ5HvexAhWwj4dQYeOwZQKjADVlHl2jO11REwbwkhEThLKgAbxnGIlYCKahggFGTj6HAzU4CkXhCohXGSJgA1jSf4VQjbA3kqaST65QAjnAk6BAYzJpFz+QgqOGCAAQAHlxJNkmkZfSAj+oDV1pGF3lDMxAAXNj/ggR9AE9sDBmuRg48WhlOI2EAAErRELk4AMJEJVBsAMK0C+AMiq98Qr0IgCPCZkVowMN1VERIJbbQwAoYAIB8AEyUAIv2C0fEAAmIAAbwJakKV3KSHt+oScGIDi7aRcekH/7oFbNoAE2oJragImQmQEQeIRWEjnTUGQoMJqKsAMS4AA40ACCNpyZhk5vmJOsthAUEAA1QIGweBwQ8AML4AAloCMmUpjDKQB5sXmIRYy2kjGqKAMtkAAfcAHfMgAhMIMeBgO7GDMomDYRyGvYkjbkGA2CSUETcAPgaVkeVJNptTjA5xV5RjQrcI67+QLEl5L4Vm1EQzQ9YT2uUAAl3EmaCMAyt6KhM6p11JFPVnihhPACO2Y3tlIp/TU6P1odQ3ihIkBP+BVDcZEUSPQxNfMm03ehJ9BhnbEZHtqhgbSS49CAOkoIFuBev3mjJCRpHlaUHMppXRoE9BBbxWZmg3KTQwYLWamjIjAfkXiiN6EsS7qksEEBJpB+aVoI/lECsbOixwlVe5qkKzAADoCZgWoIHrAALaBIQfoKrEedtVAABgACjvqoHLQBCxABODAuVZJPAjIAHwACLJCgnjoK+oICIOAAIzCgMMAAGgAD3GIAH+AAIPAC98IrgQAAIfkECAYAAAAsAAAAAIAAgAAAB/6AQoKDhIWGh4iJihkcKQwmHjYjNyMuARUHOiksGYqen6ChoqOhBDoOMgoNKysTEysdra6urawNCiUuDCwipL6/wMEWIS0KP68dr7SxybXMyLSvKwUyJgQAwdna2RIOA7LIzrCw0M/kzhPJyisKLjTY2/Hyhic93+vm6uHNzOP74+divVIQgMC8g9pStFj1LN++WQFnpXOlr586chN+lHjRC6FHUDpKoPM3ziFGiSQFloSYb9yGAx0/yixkQ9bKlSyX/as4Sx/Oh+c2mIA3cyYNnT9xnpS4TBw0licjtoKhoWhRHSP5oUzGryROnj8fAo0lA4hVmT2Udu2a06s0lf4t9elEmuyHg5hn57mI+HRiU4fpAgpei7Fws1kDaOQ9KOLC1qZikUIbPHiyVsuwfghYPA/BN5MWxcVVe/OwZborZJzgPI+AgqiXvcIqoKA2ihyxaj11y1tg4GYJeLA+mALdZFg4QPR4wQIBj5giRPD4wEGAiREUfOsEfdPBcI8MbObGUSEFBGAQFvQo0YFw7GYrQnz/WGFciRAfDiLQYWC3RWQFbDbfRw4EwEFRH5gAQ1bjDMDCgBAyIgADB1TgQAUV9MCAAM19AsALIv32igEIQMgaDzR4YMAOqxgXzQo/7FBCeeclIoBIuUWAl4kznRCCDDHYtBs+QipTgjWJMP6wwQoV8GiVCBoYoJto5VQGjisahVBjITw86KRMPPSww5RcSfUfaisVYIMFX+bFgwM+oPYMXTut1A80ErRZVA077CQnU3xBpdUKIOhZCAE7AsOCDKy8F1ZSbD0GSwnCGSoIAQWMsE0Pgo6FT6eAzkmOAqtZKkh/K3iQDQ8ynOaVXBfN6edc6Xhpagi1rMDAqiCcBmg4yCiAgwwGGFACDgoUQCVAL5gqyAcxlKNYNjWlhE4sJQSgAweVGiJCdRWUoCwt8TkrSAKTTaAAm9mEcMyczRigQomkQPACCO0FYK4QNPzAFw6dZPOCsvygUEF+2kCQwr5ClCCiPxdsw8KCHf4oYEK3DG+jgWjnrKCvNidcEEDAGcuDQ1/INGPCNkQlggANIVTgQgI3uOBACCkgzOMJLuicCFaBDZmZDmAK4MKCQpL0gwIJMDDDgCx887EiDps50WwGHcRCADlcWdo5FF2wsDaJKjKwKzHQi0hxc4HdTAE+awNAAOC8ihlbK+DQLDABFBqKu+H0oEgLswom+EEq+FvnZZ6mZhYpJrCy6ycOiKduy4Sc0ICs/k0AA8by1AfYVoYB28DhoTBwzAQ+qH2ICAkwKKAhHrxa+iuTexSBiLT4y0rda0ljgygLHOZxIh84/FcrQSCCw1KoDVB2PCIw2kEDM26LAAIQIACuAf6yjiNfKB/02XGehgCxwadPPV0ICxzHOo4KhGwpDwIuzPsJDy+04G8yBSBaKHhAAcutoHmF0ECQlteP8RGiJnIRCzu65ZmVmYgDEWCHrUBBuJ384AGEEMD/KoMMGRhiAMASDDKmJgROrcAF0+NMh0RhAobAJmKDeIHb+NIK912qURS52woOJAgRLCkZBiBZyYSAFfnBJ2tCMGIrQIOM3AlBBSkcVDJKQAgd4AMH7EKEBgTYJlT5pBksrNzoztECQlwAI3hTmRspIgsFTMsQCPBBA2bnJAk0aikdQEFMgAA8ZfilYoMAgAKAVSWB6OwEummIFQexuxWgAIpO6s/yXv7BxyX1hSSvYBcBgHg3V+CAEFiUTEYWUAg/jgMH9mMN5gRASpb4TRAB8AsglUE/JppJMN4ZhJSu1pVSCVMuMojhTCQQAdChMCWvEOQgivO1lWhKCDboS2hiMTYhQIAEjjJAIQj5jw3mRQPJcKAgaqeOQYFQEBBowCcHxcWGQeUxE9jSAgpJkUmO4B/iZI0JjpG3QlhgWbFAnRBOdphtTiAHvTiiYcA2AEJUwJD/cF0GcoCUbuYll+dA3yA+Q6uACiKDVgvHB3ggJ6/cUgiatNspQ+iUei4GaOEI5iAC4BuvKIAoKtAiUFLAAeOYSaFHpKM6WCiEf5IjGb1czCi9Mv7THFptBTrbJ+ku4goVsK005SBjPO+kjA6QURCf8Yfr8nIyjPzAh0L4wP/StYLZIYCgWvRHBbwIG9nYqqhb/QERBXFXptiUMw4IGiv2NohFVsaBIijAwxwyggNAEzM6+2o+CoAxGohGp5yhZcom0CRCKG+yLISBrwJigIsG0VUd6FYNYPOKDRRCBTg562IgGZAIFIJwt/PtIHAkKIxkC5qvKkBMTFDKqgrCtfAxZ15EwNFwmJAQdBOIRUwqBBnA5W4U2EtcoIECi7YNW4VwKkV+sNbFJNUVFbUoaA7bgqf+EgaVPGNAFPBASXXguoNA151At5i2MoO/hGCurw7bq/6JzmkDCbjTGV2BYEGokS/cFUIGfRLLxaAQGhUWBHP7St+gwRYGN3AwSUJ80coctqn7YO98VHsOGBTChcE77BvbCdYBgHTCT4XoIDzQlmRQoBBqJBcmFwMAFKzkxTx1FXeHqRZlkGdx++gWFs1kY0Lgyhx8XEw8C9NGQjR4wmUWRNWcWBIKsHOr51DbC/KaDrwIgCkTsCBr9tlT0HYXbP5ILTHNZAAGAAswQxyEH/8SGJ9NNRwZzouCnzrJ9cGRHHpuslEvAwJaxoquE5gdBN5FVz4q8pBCZo31kCHY+jkFI2KdImRW4gD4ydpqmX4NMZFR2kEAdx1htgokJ/NTQv5otSG1GCz8TmOOPCNAnpThh3DV7J4JAFgQQVWqCwSak2sOuXMryEG3+Dqa3KQAALg5L0aOPIgkGya2mUOHAljJZBofJszsycoEDhvlTsEiFgcirgRjwdlBiPZFzQhzfZOBg8HmBbdaUQBehu2XnJp2LG4TTn6FGIt3CuHZnpq2IERrgA4XxYi78fOWv9uK2fGAYLQqSXxXzmiMKFTgYMtBLGUQAMydBQDgK0fcWtWTcuhzKXZbgXAfcNmIHNa1dptAVOE5IM+cg6kn8BMsuNvixWFaEC/neMq2NMrzTiC+X7KAY3VuCNxuVZ3KmzBEVuDxVf9pBYxdKB1TqFsTsf5NnSEc1zI6oDYLjJDjBRcEjhs3gTQLwQQsV4dzncQAkRuCA/Z2xUsVHMTKcNePogKM2iAgWaGuYOpOUubH2SMNegvCwFNUSp4JochPm0nPTY09WSPtCQIPBwAbZrcgHrA61ITD4UKg21XV4W0hlP28rgeFA1DgACXOpwI/OOuGScgMtBv80nBhRQtAt+GgxSLvvW/wQx2w5EScgAHt1QYLiIIAof6DtIY4deOYKggODGoFuOcJH0ABu5E3HpACCNAyAJAePTBMJeBz85BNfTUoyIdLVlIuiAB1ycB/ifAASaUUK9AAKAADFIADMIACq2BISicTCBAkpncYkzcIRf5VGOkQQIrAA+szIqqHSsuSLls1Gb12EBAkRNCAeoRAgJOxAdJlCDq0AhTge4ogAAPgHoIBVuTwA0aoDQRAKzkRC2yHCDg1KfF3CCOgABUICiJgAoukbmWyTa80hsAAXHdiOx3QfN4iUSAAhYfAA2coCjwQAhTzFN+FFOzgAMYUDxAQJ/AyGK2mCCPGgXnxAAGwIHNhGh2wNCOQAjv4CzowVyREKPtTAlk4HB+gAxXQAiUAA7UBAyXQWgxgARB4EJGDTwAhUje4RJ8gAT1gcqSQXSTkeLgIDBbgAv6CA+3nCzt2fyuwhG0Ch6RAACPAEAPhUb8AASeDGZD4JRKgAP4D0AOHOAonoAIyUHwY0QCT5Atq9zAo4IwmcgKWdok4YAMCwI5CkAEpUgIpyBvSoCrZUDxNAXh6QkDItQIykgAO4AE9YAI9YAM3UAKWRof2lRsjEIuh0InIwHttIoeKZTygdiVKlRMSIQPWBzmywIxOMoR2YkCLGBog+So48I2+8E8BqCeW9R9JF0eBEijScBcs03dtIkJ0AkgO1jlwZgAmGYyegADv6CvsAz0tdRED4JNIKQopICU8VHT+ERaYgQNSOZWIAIVb0zV0djvFxQ8d0ALR55WfEDUlQI2DwD8t0DWvNYj+QIgdIC/0qJaEkALV9QMJEEbesgDh0jW6x/4grFAA2WIeekkKiYMPftmHgyACBJACJtA3MlACmNmKIBAAJkBUeriYilA5m/QDFyAAFCkPD3COiykCGdRI4bACMMB+HvEBB/A8qQKagzADRJdFT0UuPqaYwcADElABFKA40qCaSBk1DMJVN4EM4cUAEoAAyrSALMAAqLBABjQBbhmMAhAty/cwWQkjOTAAFCADQQACCdAClzkAOZCP6+AqCnCMJQM4dAhbdHSVNKiCzEYlZ8eL+8IB8kSLn+ZvwUMkwVMZczgBBnCazvICPvA1jgJk5TZwtiOI47BtU4kAKMU5XEiWPMQWo6NLocGPU/kCMMBmOCmgs7JaZBUq2bWnlgDQA+0RKhg3oHhWc4zDQIN3R1N5AiPwR3kVR17XTiijlUNSAptoLhbQb5DSSE4JGYzGQHW5Ai1gi3qJABWwhvFDoWcCkjgaEHUImLgZRfyhe3WidVo3XgBxH3mplwlSAu/yoV/qhlk5AA4AmWNqCB/AAMUgHlEnp1KRAwZgAniap4ogAtU5AjigLK+mpsiQHCbAAp9pqKTAhwsQAg4QAcZighugADCAA5oZACogANxiKYEAACH5BAgGAAAALAAAAACAAIAAAAf+gEKCg4SFhoeIiYo8BAI6BxUBES4jLjYVBzoCBBCKnp+goaKjoAAEOg4yChMrKxOvrB2xrqwrDSglAQxAIqS+v8DBBCotCq2ssLOyKx3Ms7HIKwUGPUAAwdjZ2EAOA660zszizdDKr+TQ3woBKdfa7/CGJz3e36/hy8355vf6+Mj3FNggEK9gthRBGoxTJq4cvoeyYI2DWEsGA3cGM37SUeJbxH/QyIF0JlFfyYUPYajgobGlIQ04wIk0iTLiPpIL++HM55GkggO9XGpM0bFfSKMTIupMhlSn0n/OaMaCoUNowQwJZDpMN5Ok05M0TZZEmnNFCQtW30EowXDfvqT+THPygzpzbLmZCgim1ZaB7c57yRrKncjT393BH21OUMBiL7y+bymeSzcyLNeaf6Mxdhyvr92kD/+F/UuXsDmfHDgXXBsY3UJ/5JoxK4AChQIFBTr8cAW7dc1Ym1Wv9lsYoqsBIEy8YPGBR1BBInggYPHCRAQcBVqJZQi8sXCDrLnOWoHDQYpOv3gs6FGisNEOwb+DZzu6RIgPBRHoMOCUWXz58/WzTmoufWACDOH8B2CAMITAkicQNMKACQ5U6IAJDAjAAnqecLTCBt4t2BIEAjxnCA80eGDABq3QUk4tDSgggwMCcHhICgSKKNwJIRhAgkdfAWkPMiX0gJaOOor+oIEB9oSTDneghfVDCSpkgOR3EPSwg4sURbXTb+FgEAB+V6bFgwcFPJPTU7CV9gw0LpBZpkY1rHIYTy/GdZMsvX1TgAMPzhnPDFuOJlZipon3ope6PSCoQSygECSeTH1m15e6MfBoRkCgYJlDbRpKWmI/aLppRhKsAhKoG+AggwEGlIDDBq4lZlSpgmYQKKqqFpeLDhyYSAgPHLxQQXukrWBqSwj4kkAJuxqUKpcGqNAsKRC8AEIH+eDq0gglCOtJCq5A61KkKyhQgZzBZBBCPctqFIArJowigzMlWNkSCysZpIlQ87KCgo2K6ACkuafKFzBoDoSCA2hERrsXAjT+qFCBCzdEEIADKqTALmfzClbAx4doAKQ+MkisEQ8CuDDADw0Als4PO4Cgw7VpLXyOKzZ8QtxEEyDcEhAu5NDkadGck0AKVi2MUg4436hdpcykrBENF+z2Xpc3rUDBCy0tbNkKPSjSQn8fBa0yNhX8IF6iUOl0wdrBBAx3BxtgVMgJQIJVdbRR+6KD25ftSdhEK/QcDA/Rig3mCmAf0kNbTMnG9CAqDAAENoPvec8Kux2TDE0NB7NWBIScoFBdXsliACLeGC4WDBjxsKUCEnC+m0klOAAsAghAcAIHAlRgADqslA6MZz/kPggIRj00ywmGANF3a7GEQEgFsKCweTD+BpsVQuCHZKBDC7sp/wtrrlxAiPVAj16LCoY40Fb8CgQKQZri7BDiLylYgC9OgY3w1EKAg+BP4abWgRIYInZkSUwACNGDh2zgewkzhGfSAQJCvGBVcAkH9QZBgJ7I7gc5EsEGnvQhDGZQEBvUyQr0IgQVGgdirIhXCEA4ERl4UDteWsz/ErZBF4FmgoOwn1fQ1sFBnM1JZelAvRLIJmjQ74VCYIHocoKC51jvfvtQgDtEYKeo7EwfP5AT30DFivwVogdVWRALAqA3IfDHK99YgQAIAYNFSelIBNidYMTiNUKoQFFJqUAhFrAbDQCIA1vSHiEEABI+oW4QAXBP9Dr+cEUdIOUpsUCiIJjEpm987AL3cKRwgGAnNxLCG0tpRRcHQclS1mUEgrCB9A53OSHwwFYSeR0hWKA1W8TRMZBUyCskOQjuQaQZjoJhNNxDDgcKAVlKqWIHOLQAIemDk4VwAUoQmJYT9IoZOChECVtHC0UOggJ+XEgBelHGruRjANuL5wqixoMcnHEFvbQKAmIgQ+cN4mGmWYEwBREBiJGGFRbgwSdP00RBoFKT1qRlT4KmmnntQ5SC8OhXFGBIkoQKGSko4VK+MkVB9Ook6hPCCMxxRces856F+OBkSJLGQUgAiNGbRYb6FsVjQiBmlDumIPqYthkI52ESWcEIBfH+ASAuoxZ7FAQCCCcek1SAAfyIkjhCdNOxrOBIWlUmvr5jA4dkdRB2MkcHmMmD7PDpcM2IgAmipKZl7JOWYInFrrqZmJjupZbQcOc7HwpSBNWKKy1Qoi2jEigGEFUWGyjEDsuhVMcggEsdqKggnmir0BKCLZssRwnEWRe4IGOeg9jrLtOZz4+sYIh7EUF2JOJDQmTShK5YqBDuhSg1USACkZGNPkiaRDzyKaMhFRL59vLSDsDgjYyKBQUI0QJvitW6DaWISZgb0uK4rhARwMkE6CYUGPAks4SQLTBpO1pRfWQAMz3URskrBAcsURzCFcINHMJel0CQFdeNr0P9Ad3+C5i0cDAYcEPCyl/7Ua63gxjBQ6ablj6SJMGDqOBOIwLdJ24yHPh9G2xy8JwK2ooZ2yWEZGtBQ84AAAWCga4Q2ooZ4ZLyK9AoTwTfU1nvrgDEgtjhU97KmaOaMQiF2FZgRQvP0lTTAxP+7jdw9gJDJcVEApjmBBTLmZ8CZgUxvZeicDmIA5/GdZalFB5zpEVYwKang7CA2z4S4L3IFzSdZdFNXtFSEUjKhFwBQZidy5C3bjXL92AyAKrLYuHIQE01djKimuHo6w1yAgGoM5jI0dJJ+60DZBZCd6+qR9WoTixiJARhL7MCOvPmzdnTNNrOcUlBEMccGBbEIdPRAtX+/NkVbG4mGztQgMqKOaECuHFIvjQB+vbXpOFoNiGqipMZOgYAfUwHk69p1mZAN5Ou/W8zUkMBw7y5A4GiZGpbzV2AcNoxFuibAkyEgNV9BaTIWqA+WJLeTTvEoAi4TCx6LQh518KwQrFsP2I6bNL0UreToVy1hQ0q05TtoF2dQAEIRgFxQNwqDNjdBD72a3xscxDdvNs3LvlFdUMDui4+SVJqKojwnTwtKnAFSLN4a6AJl3t6evAU68q1WLxcECqlnLVHOXThcCRwM73sBHiO0N6MZwXRHK7ASaLUrocmcoMgmHz0RcKYkWZkeTbiV7hVaUHkfN6vKHZsq8iMH4z++1QW8BSmRLtXMNpDuA84hpWZgbP9mcZbWBTCA14ajoBCVU9GaakQACBoypFE8zOVYbwiP3muxFgQ3fS8P2pdiKzb5Df4zLPKc4iND7BdFCKosS8ipROlNtQ3b5m6EMgFZCgyOfStGD0pWKCAHAwkFAgwwQAa0Nnl52AZOHjOCU5ak1TXEMd4kgt0LbAM5Y+C+Z8rDw0goDcAQEACPZCBMlmhSmA8AMcTQHt/qbYnFB4iAGw0SCtATv0Feb+AfmbVADkwADhAATCAAgoBNMaEDcwXbB+wW3g1Czo2CF+kKOOQF8MSdgdYTzIDDs82aNU3ChxQYzyAWp5DEjxXCB3+YV7OoCDZAAAiFYCyAxVCoxYld0ZcMXKJIHHzpgA5Eg8iYALg13F9ohT9EAC3Bw/sY0/MkGyHIALhVhNG6BI88C5awVfxpC5TlRHhARXepggmgCk2qBEPEACO9SQytAEjUCJpAQHwZBl6twjg5xO4ZRUfoAMV0AIOuAEKAAMl0AIBoAMWIC5CMYXiAHagkHP+0YeRpxF2WBJ56Ak8EG5CxIVHCA8WMIYG8QE/84mKIHFrKIUl8ANBQIDYwAEuECOUqBaoVXWeQAGpSIvRMAAmIIqigAA1sIrd4RJ2mAMk4wkWYIrxYEDg4DU2IAAcRggZkCLt0RS5qA3vlyuoNRL+tbADFAACNtADBxACHuAANyADWyIT4VCDs1iJonCJ7LQoZyYYZ1ZatHCN7gghVcZq4dcbXnY45oCP+Vg++0gLb8FXGYgYCrcYujeQEJJecDgpl+KEoxJVMoBWDhkKC8AkmDJkQ1ZJOoED+peRo5ACTAJGhZNawMcKJaADdUSSyzcCS4hIlhJWSQECAQWT2MADOgACdgVFfdJxzFAtx6iToOCLabcAx4JjlfF1BdA7NZIICMCIRolJJHADykgIIsABKRACAQACBoADDUgBBgACARACAsABBfYBDkACVlOVhhAyE8CK0WYVC4B8agOXvsUb4bABDtCQ2vABBxATSNH+g0ZpN/w4lwPADmo3CurhATjAVRDxlocJXIkJYy6gAiwwA1QpCAAwHQxgAyWwW9wBNIbpkIh5YiKhEz9QAANAATIAAgmQACAgAyUAAxigeJu2KvhSYBmUmpWUXeolMwCRkk3JO1FYieKUkqUpFXiVkJ/SlKf5QgHThEuEkMnFnIz2IsgjDpSJRcC5HX2lYr9Rj971Jh33nQkDAVAVRXLnhOWmmq6FQ3nyF8uQA+04JzzQAwTFm4aRKCF0V5M1Nm0iVqwQAEiZQTMAgOr4YoTkdZlRKfVJgwaQlZFHAJlEke5xPR8ZKh0JFS0ggjCJABVgDKpnHMAkoYFlGgUwAvlt6ZAicD4NiqLe9JwPmg4UoAKNqZdCYAEmUBSqR54eSoUDUAEWyqPbRgwmOm+tRRc7kwMGYAJHiqSIsJUMcB3ZgWhO2iIdMAB69QCdSaWjAAEcsAAh4ABgWQIDsAEwwKYDUAIGoDEdwwE7uiCBAAAh+QQIBgAAACwAAAAAgACAAIY8NiyUjoRsYly8urRUTkTU0sysppx8enRMQjScmpRkWkx0bmTMxsTc3tyMhnxkVkxMPjScloxcVkzc2tS0sqyMgnxUSkSkopxEPjRsalzEwrxcTkTc1tSEgnxURjykmpR8dmzUzsxENiyckozU1tS0rqyEenRMRjxkXlR8cmzMysTk3txcUkSknpSUkoxsZlzEvrzU0tSsqqRMQjxkWlR0cmSMioSclpS8trR0amTEwsREOiyEfnTMyszk4txcUkyknpw9MycAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/oBBgoOEhYaHiImKOxsoOQcVASM3CREOFSYLKAQQip6foKGio6AAFjk2JRoTKysTrK+sHLGtrTolATU/IqS9vr/AFikXDD6urrSvxxzHsbCwKyoyPD/A1tfXLA4DPtCzzMyyK9/i4OPI56wrGgEoANjw8YcnHQPL4xPh5+D5+/j75fyp02CDgLyD11B8aJAuILl/5iJClKVsVj5xK0pkeIewI6gMJe7xo/iMHz5ntGadhNhKpcoVA0Ds8EjTUA4KrUj6c6nT4j2SKZ2NM6mSlYGZNWnSKMHwG8CnFsMFdeYSYDmhPJmBSOrxRIRuOytifXY1IMqp4s6eC8C1I4gC/lYnlq240iLWsFbp+vzQ9qCFC8uAytWbNh3eqjzz4iuBtC82AgUosvRZ9KRkolCvTtaswYPjeCIiCERZV29cp4jrnobI4cHngxUCK6Zc1p+rECoYaFBRgFlLlj1bvXiNcEEDwZgxuxrwocILFh528BokYgcCFgJMRMAhVaJW4h1RMNAcsZwPHA4UdPK1QwGPErRXsAXfccOAoKV9lADhWR6CHAYo0wJ9NCFgwETNhODABkl5YEIAjRGIEAAjAAdDCtMpAgEBAizAQwWXVHDAAgKwsJ6EEprQDSsXZmgIBBJUcMEqOZHmWwMMyOCAAAigCF4OHHDAQ4SEeACCASQ0/oOObyM15EoJPFjg42fQHQJADhfgh1g/+mz5ig8UpIDBlOAhYIIGzXQJHIKJlVNAAP2R2RYC9132Cm13iiQZea+MIKWcXHWw5E+UnRRfYibd2QGRgCI0ApfI2YjMWSPtycoAAsRjUKOEAHBgk4VW6tCkO9nmAqOkpDDBcJwOAgEOYtVWmV023hkrPgz8+YsADGlwYqsEqDCYLAzgUIIBBpSAAwNMQkWqOTjo6gsBJCjjQquEoKATBQHksAGqQYiwgQAVyCDVVPhcMCYwCMCAUabYCrLACj4YkEKcokAgQAtBTsTMCC72IoIMQQ0QMKconIANBCng4Io+JmATAVmy/kQcb0c52BNkDtg4MKhKIfR4MUIigCCDAtikgIxdJ833iQ2uTTmDAilU4EICN4zgAAgo4IvIwb2ggA5yHCjsSQ4rFMAxfTsI4AI3x6Wljg8MtLDADDQREAJFW47jciIlfGmxKECP8oMLPeSkp2XOAIECQjvc9w+k/xQgMiJCi/O1JybIUPYnElxgTEqZCXTOUfIAwF1wifGgSAuFqfsJC6/wRcoMX212Waku7Y2N0GxaxoEGHBlyQlN0ResJwa44MEoGPTjEp534GFC6PJAPZtgKrBrCA5sTMEBDIjXcs1UoKo9FWi21iLUCDuBmU+Oo3xiACKx45bN0IRigWdnb/qEIABdmJVTg7QkYIHDdCxUYAFfw0iKUgPOgumI0IRI8zLY+HRhSAWEhYIEofqCxVpQgBXdLxA5eMAIJICSBLGgJ45RxPEJ4DDN5YkX/BrEDYSVqAjBIoCdmIIMVGABlKHrBAIY3CIJRbxklMAT2ztWTr5nANOEYkCgAIEAfgaAbQCAE0g5lK1bcLwgWMAbLnHKRFTBIEADwHlXw4bmRBcFj6thUEAAwHvL8hgMLIAQICKOaGA7iBSJBBwPWRSYJpGARCQjM1y5ImJFYThCAoVVR+DG2IASIbfjoo49OoAEfwMsQCAjb3BiQofxt7ioM4AgX1ZRBdcTpBPqrFAOi/kecHYSEAwYzBAt0MBneEcJdPSnMEwkgwVDhAwdiDEw5XNcpCX2gIoJEgArIOIEbECIApVziG4Mwr1ltjpaCCJCoWOEzB4QRPFjEFZEKmBgVZEgAmZTdBEYgCBuQpGsTOOQOxueNcViPECwwxgY/A4FdNqSCguABn1aAwiBgwE4OgWUQ4EOXi5DkRHkzFD6GOQgXHGMEt2sLHcGhz0GwEl0cWGcQFselyRRgJmjSSUAaGoQKEEUZK0jgDraGDxn8iisIiIxhqkEIakrmnIIQzTxn4QMPQEA25RnHHYOQJfpNwIyDwGZlqliTAFRlAsgUhFHZxopIDkJVqUnUJrqx/sRYVYAQGbWM1woBTK4RtC8EUKIyOBoENJZTJXFSgARpxwxN1CI55zgkBI4TqglsTxAwYOIEsPaaGY7DB0dEgA8qFddBnGBFoZtFBRbgTy9OIGZBeGhpnEgIwUoGqJ+hozoOuUUGDKuCIgjBmnyyTROsxiU+uBs2yciBCNFAllcljgBKMoHYDoICwUEqVp/VD4oY4H/p+Og4GsPYxuKqEKqCyF0dc9hyRKAQeXTIThcXzHHgwqcAKUCGTCs7sjrAuD18TWhXAlOl0rB2hPjU7CaAgxsAEjEqIMT/tITZIHT1HCGlD41UQtb5QgWzWRIoYgYwP87RggEWzMwEyhsE/vey7KSO0ZgsYFCI31WVvYS45dygMoCJ1Y8fCB5EAAgnCwZPzB9sfI3cLBLiQdwwMxxNQFWfAoMK4XMfLb4iQPhRX9HYJbX0gQFEKEyIDjAOsy3AaVBgMGKtEkW7g5DnZur7XcM88TUAcKdK6mtUn5ZXvZxzBQ682aWytPapTTQHCAsBgpWsAHyvuSlJgphhnLpip/ARsGVKwF3d+eZuZh0LlIO6DMWCR61VSeo+/YmPWXxNwqeVAWM/jA8fXDmCOeVATQlhgYfBgsF9ebFPlpvVo44ttI/0RwRWi6i5HVKwm1kBZ7n4jBWE4G80cSF+pTVXuB4SA++tSwAiuDme/kxgbLTOk1Rsi8dYqISzbcEkSZw6CLVOUSWXVtJRwYHApoSOFdwchCJBJQPkBkSHjqlBQMI9CODm9KKDYGyjVcMMAWT5vRXhAEc1u2MXeUCrK4hfUk4wblZAu+DKeAVmu7xhk1CWO4O6zJkFEejNQTvATnnuZ3agYQ5QWxDSxuHXCj5vfpz5xKipKCscKIi54nMCGif0Hi1NHBu0ztzBFic5eYnhICRXKmGZgOMGQVHDcKAAJ4VVRRggwr6AYAA+C5vsOHCi/EUVIpazOmthgVl33wrOgkBaPwoQXuKclNjvLW+VL5wOi+0gSWmeWz44wEZib66KilzBclHkgmK//uKrSveiSiDLTycb5q6wqsoKBDmIBxgDnj76d6wocjcPiJVwLrl1lOl9mfK2mUtKU0QkGvUoeq9gpzdUU6EWTIgfrM3YHLgbAvihAcgiIqE+Sufk1VHPiXIt6IsnhAh2ifmn9BGYHCiBz8DDyUN4vRz6JoTjtbS7+FXoo1chsiA63YLmcwUAKdDABSCciHa1Wu+EKCbw+kHWIORtT6rhLMsPkgMteuIEJnDXOFQXChZsDSjth0XUNwuKFi4eJHgKlxQjdh4VgAIIkFAQ4B4l1E/CIwooIFbHsHc+BxY5xQpX9kvFJndvRhN99hI9oAE4MAAwoAIMMRcPo4GIkDzK/gBqQdUbtFNfg+BIE7QYHiF2TlIrnMcKLoB7iYBFzDB/h8AC7uIdkEcIUhcOwtVWCKEA1cJoitdqLBMCTfgJMlWAhuABf+QSsZcI8zJTscBIiVN6UHgYsrQPAUB+nyACyoJr1IFyfaIIIiBFIagMZYcNO/B0sqQlveUKDOAAyzcKCHBEn+Axx/CBh2ACR1VKzHYQChAAODBYheMbDDACAkCHNJE86KZAB1hRPhFzNeEBOVABLVACMKAbMFACF+AAOWABRPgaKIADtpcINyQrJuSJn2ACYGdFitB0iLADzFIYsxBC17ADSbYCF4CEwngNZeg8IeCIveABuAVSF9B7/tbAVxdDcszAjUEzHk8BEyagiKKAADVQAiTwTPGiAJjoG1s4CkCCec5wHjaAAt6YCBBAAx0QNuDQAMHIKV3GCl44CioCUb+hDitwCx9gAx1gAibQATbwATKAJs/iCipgf5yyA6i0UwLTVc72TXKxJAnXDN4gDjgAh2QiNCXgiwqUZIRBFrFmTMFEEX5zMTlAjL2QAiplbCU3gGxFPytwLdF4DR4gU8EVKZFSkrRyDhJ1lL+gABNoFn42kn7mZtAolb4gAAfilLdSHvZIFxSQA7XIlaSwASMgWlgYiDMpFhzQAgMpCN6HlsX4Ai0AF3LhHabHAfZyiJHVAgwAbXY5/go78AAVUALC8nrBlTTcIgAsiQA29yVfVZi+IC4CAAIB8AEGQAE4QAEUYAAtEAAg4C10eAIOMD7/YAOWqQgoYG9c8QAR0Gqs0H2taRPGoAEOwJHwYAEmgBOstRjoWJgS8JMT4AMD0A4sWQqISQGIBX+kNQE6sJVoSUgN1xLcUgMPMAN0iAE/gAol8D5XYXJEWQAZ0Jo7gBPekQyt0AAFMAAlIAMtkAAfAAQywIqLSZNXl0r4dQCWeUtRGBcpmXBjAZa2UhogRVQjM5k16S8Nh4xG52lGhxz/AIPx8nliaXiqdxg3NhJAaRffwHgjIwAceJVDyZ8gOhuqgREy0IdWwsQCMaBNCDqUbCgpM4YaWlidqNSUdcWUaJEXYYkRI8CTI2NQfjeWqWRMxoZDo7ICLeCiR2kBI0AColI4NzaS+olv5fgBuViYCFABGElYXTOmCsah5xACw3abhrBAB4JDwPOmZCoROAACy6mm+BcSA5iJfucsA1AB1qimiuABKSCYX5RbhlNXSWMAJvCngBoK4pICH4ADejk786YOoPQBIPAAddmoosAIKJACDhABnYkDGqABMDAAn2kAH0CaAvAtnBIIACH5BAgGAAAALAAAAACAAIAAhjw2LJSOhGxiXLy6tFRORNTSzKymnHx6dExCNJyalGRaTHRuZMzGxNze3IyGfGRWTEw+NJyWjFxWTNza1LSyrIyCfFRKRKSinEQ+NGxqXMTCvFxORNzW1ISCfFRGPKSalHx2bNTOzEQ2LJySjNTW1LSurIR6dExGPGReVHxybMzKxOTe3FxSRKSelJSSjGxmXMS+vNTS1KyqpExCPGRaVHRyZIyKhJyWlLy2tHRqZMTCxEQ6LIR+dMzKzOTi3FxSTKSenD0zJwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf+gEGCg4SFhoeIiYoYGyg5Bw42IxE3LgEVBzkoGxiKnp+goaKjoAAWCwEyOiusEyscrxOuHK6uKw0MJS41BCKkv8DBwhYgQAw+syuysrHKzbS1zBw+IQY8G8LZ2tosNgOts+Gv47TPzrDozz4aLigA2/Dxhx48OMjm6MnQz/oT+efJVjCwgU2ewWw0EiBLFm5Zw4bpoImjFTGWrQwHM47KQeGeNH/kYpWTSG6ZxZMjpb2CsUOjS0UvcADE53BmPpP7SEqsdVLBy5+FUJRQhjNkuXA7i6bs12/kChNAo56IQNRoQ4uw9JW0yLQkM4cGogIFUeDcVqdL0W6dyPZsCAT+Yl16uKDsX0quJnnm1HvWprkXcTXm6NHAKtejJe2eBRmRrTgHgQ+KCOCD39WssnQaVpyTn9ESviLHO1ECp96H4y6rLKcsBIPXKgoUqFzXcAEWokcz0AptJ8rV5HB8qPCCBYIdoYOIELEDAQsUJiJQwDwuRe54ImwAVHnZ6CsfOBwogAsMggIeJWh9uG7whQqmSj2XAOHBIAIBLdnLm0u0a04OIThQkH4EisIDK5qlMwEMKeSnCATPLWBCBQ440IEJCwjAAgQFxqXAN/3EwmByhuygQAcGaFBYf9E4g4sMDghAXocaQUDVXhzwQCIhHoBgQFnAtcXXBCXwYAGNGqX+4FQLAxaSgwENfLWYdxTh5cN8nRx0JIEblBbCAomIYEBTU3amYGqvhBDACfLkEAIKBYqwQH2KEFAAbx/RBFFIyzQwApvaePCeCoAimcgCv+HlmZl5ZsVBBw4CI0MtJbxjaCIjqGZTozWhxdMAgAHTQUgBWHppiTigRlGnDsHXWFYruBApKDRst4IApyKiQJRemcVopyzyuQIOuIUCgQYMKaMBh7kaYoKiHDCAgwwGGFACDhrA4qtSe05AApigJLAnLBE0e4gBsISXwwazDiLCBgJUIAOsNwGLjgztGpJCVY35gKu5hMyQw4yiQPDCBxyoldQKI+RbCAsklDmsqQD+bwMBCCDis8KXoIhAgWMfQVWxQTmk6lUJTSqi3V03vVIAwS9RrJ8IIITAzAoO7JjIBpt+NIsNUSkAWTwQ0ABCBS4kUEkFIKBApyIetCAQnKJ4zJjPKMF80AmriBzMDi+MMEBh3NniAwMJLDCDIk7/8kBbe7kSwE90yfIAMD+4EAKvp6GW2QcOC9NBUlqB9LJLzy4zQOCH0HDBQn1VpCAQGQFgsuQTVVBnMD9wN0IoJ9zgkVXdjbSsRij0l2g5MMg8iAckfJDlKKUxxkoOnyygAumrqerKvxpJzdlWoRrCgywwUB0KokwVQECYLvALXDm0sXKS5i+xwK9lsYR1iMn+rnQQyg67rbVCpbr6NVIJxBkHAQYnwFsBuga4ftAHXOm5gtY/VHaUDE9LRAc0BQvlGSIH71FHCVKgtRIxLh7am95XXGGdQtggTxPoAe4SgQCbNcYfRLLf6wzgjAnIwCenkgH3GlMCQ3yDXt8JgM4EcTzpOWMFxfLEgRgAroz8IIC/eAFRYHgXglkAII2hwA8MAYBV2CUzcwuFcVxyAhWAhhSmAgAD6BUiWWxQECDQHzpA4CTpSUMFzCqQCicQRVDswAXYE0QAMuO7V6xnEBeAmzgMmEc9eY1AB9KWAROhgFSpIDnaqw3mJsAAS2mxjlnxQaE8gIx6uYIBDxRL6sL+MYAZEsIEvLoVIWDAKTStYEsW8AEXsYYDQqSgdBOIo352QMpnHICDdQPhHQURPYXRcQLgQlSCpMGBoQliTPBZARDZo0KnaGB2hBDAbhhyyEFs8moBgcXnghCAVWJNeTuIgVdm4b1BiDAqBGgUGQkBAAf4ahx3EwQGYJmPVgZhUijxTBoVEKx8VHAQJrjlddxJEnu+rhXmmID4BpGqLqYmBL5w4lX0YdAgjOqDrCDYDkKwggs0ECgzAFIzciiIAYCkVSsoZxBGoLGU+MADEGhAy6oEjV0GAZm/aSEhhCgLBgAvMHN0ijHl2FIVmOqV+VMMCgiAoImgSZYaWF0bBZH+qVj4wAHn1AjPTlLRIPBUUcocBD97J44JpOCa3IrFF3cg08V8URAwQAwHPvqSy8nCB2s7KAi3ojwE+I8hjalADhhiu6PEMwgRBGuTYqpInUbmgiEpXhAAsDtVrTMIO7hTPhU0AhPYSyX7G4QANjuBAkRqrM2QZVxGmxPVfixuOCPEFre3FwM4wD9YcdACooETBhQCBDjhwFvjcoLt2DQIUvvNBLYpiIZOlBwlCIDEXAHRQQwQT10lqElIGhcR3EkajpXjUsah0mYWlisUyNRnQejbQVTgIZQqRFUjSdefRDUfMCjERZsSXrpQx0wDSIDEXtFeQWjXKCoNwo1Mkkn+jdiVkYXwbP5cEd4W7MU7MBBXmXpKiG5yK8ER6EcaI5MqWGkgwoziQEUFvNcnTkAD8+1dLEJAiPfWpSHhVfBJQpsbEIEwv4Q4kGoqHLlkwGCO43xGdQWx32ZQuBC3PUnKxEJZNOX4gmZKKSHGtMJZhCdyuR3EK/FUYDCacpBiYexIQNzUZ9i0NAmySJHqOAsfzGi0IGzIkgXBWjryIDf8vMlQg5Aex0y1lo4h7yu5KJJxDEgCNtRWAI/IkASLpYYj6aEg7psZcnhNBLujKW9GgGeN8UR5J4Bcy376SJPsOS7mZcaWBAGBbY0DeIzVoywcoL3eTCQrXnvkZlUrvFf+wOKnYpFuMhpJiLFeeAXPE0QEGZUaEMzgHk+0CHMJfdKSyKAQY/5KC3KzAI7SolyEuKjqaGHaQexWfckQAGWdeqbwHngf/ohUcXc868AQoDSiJEShCxdeDy9FHCvAxlB08pGEOYinhf1dIVqAFIZdp51XHMQ8x8VGgfNWWBxod4jV1wwJ6PUsGkgZnqPhg8OKZsRBAC5NAq6cO/kSHQMA49X6MoE/fqwoH4B5c4uCvg4VesIFSOMDwDHTcdzxB02NeCzCa2N/HurGzODudTbwV62o9LYV2TkH1plZwjaKA2lkamaI5QmAo+O47OmlY/4ZhAfjaQUmF4TbC9cMyZr+TIafGKsrcNBgoFhgYY6akV/jg5gQOGhwQ0wMUcYN0BBI1hPv9QcKCzTfIc6C8u6Neog4oFJIy9guMwJAfQ0hgqH88SCFD4Lp47OCzVuzfDN1xWWVw4Ckemb3v0DA6+WxgwDoQNOKcPtvKIAICOBveqcsRASIaHYgXwoAKUAWKyLwQAkz/HaKAAFsc14IPPuyGcgm0AlMAIOZDADNg5hBxFj2Chx4chAsKPE5Bj3ZaebZO0QSFQtQAg5AAwhAMQBgHh1QArxyYQ0wXISAT/QHgYcwGWYxZdyEJsNEc1pFAjejAjBAATgAAypANrk3DgwAf4IgKOvmCpamCAhEC8z+dwhQ12n+EYAuAQB7x1vJwjIuuEyFkAF+oXWe4AEqNHyDoHzD4woUCA8XRFib0SrUBXyJ4GGMwX+hkANCNwg5sFmWwQD3Jwxf5SkrdA4BsHqEIAIygQ72pxEiEFWddmHQgIXZAACUgRUbxgwMUAFA6AkskA8udxCeVVZ9UXvAkFe6EgDtR0C2wAAfIABh6AlhtAJ0lxHksxlbQXijMBkkEAAPZAE5UAEtQAEwwAAaAAMlcAEOsC5ZJQofMFWI4xsMxwzIpwgs8DErkX7sAQCRCA87AIdUcg4MgIZgFDFScgGBODLasC8+GBIqWAgI8HxO1VG2p4zZUDuLNAF0GBT+00Q64zAAJlAopHAc1oha9JdxipA4PJcatoADNiAjn1A0C2hC1piBZBgCGGgIIFBJ4+RiteADOlACEWADHQACJtABAXADqgAOyqBa5qKGjbICTXgIKOB/eAISwlI2PJEnDfCMl6IA/FgO2wYKUYN1n4WHkrM6rgAD0AQw9zYAW/gJKWBu47QMjPZ9YRcLcNcsAEBC0JCMouABVMF4njdzB1clFGSNHlA+SEgKCrBGeDFBUrg6M+EtRPgwHTJaLxgMCkBC4wBmudcq44WOhoAAN9BR4ngdKJCW27ABI2Azo8cq0PcfLRCTGVA+E6ACuliPigA2H8BR9KYnNeEPBsD+QIhAALn0lTbQi3xZCCKgAPLCUfD2la9AgAIQk0FwAjZANvIRbY1JCu8CHQHwATJwLRRQAjLwiiYgABsQiSfgAKJmGQVQi58ZFxIQYrxRiNxXm4eAmcKwfh1Rk3nGFgNAA7wZTQUwAAGAAi1JCjvwAA4QnKWjgdyhDH92nAigAwxBAQFQAwaYVSIAAT+wAA5QAuLUIh/kEHGTDz7gkRUDBIVBfyvQA6goAy2QAB9wAdYyAHtTFazie+m5Y02pjAcQaSdhGhNEctl4kj1VjXz5Nj0oJYy2KIJJlClpAMTYLDtgUldDffxwJnK4LYyHFANqjUj2D3EIN8+QjfQ3XuXEUAJXWY85gG3ouSiF81/VCVtqoQJU+JkWoFn+CBHw1WV0BKAnMQK+aY0AEGuwZHbw5aLrVogtEKONmXlUIpc+E6G+oylTepyGsAHxWZNgyRQ6OpcFMAL5eJwAkANrRFaLMXokJ3YrQAEgkKG8uX4loEpu6imBCaWwMAAC4qW/4AE10AKAmZvnJ1fJUA0mkKaCGgrvkgIjgANlQVpT8goD8AEgwAKx96iisAONAAIOMAL7qQGmOAA4UAIG8IogwJqdKhaBAAAh+QQIBgAAACwAAAAAgACAAAAH/oBCgoOEhYaHiImKGRwpDCYeNiM3Iy4BFQc6KSwZip6foKGio6EEOg4yCg0rKxMTKx2trq6trA0KJS4MLCKkvr/AwRYhLQo/rx2vtLHJtczItK8rBTImBADB2drZEg4DssjOsLDQz+TOE8nKKwo92Nvw8YcnPd/r5urhzczj+uPnsSrIGygvRYtVz/DpmwVwVjpX+fglg8GDoMVgOkqg6zdOITmH4UJ2ZLhCwMWTo17gaAAN4MdlMDu+jMjwWQuUOD2l0NhSYs2PL0GKjAWNYYEPOZMWmhFB1siHMGs+lOkT6lRzJpRqFRIix71l6BaGjMlPGtGRsHC824rywwVx/s9m7XMYlGpRfC5XLGCLUweGsC7xqrMrdeO+kSP4nhThwnBDqf4Eo5UINBkKBIotnpDRs/PkhnZZdSigoDSKHLFqtWSQmSANBZEfgx08txUOEBVesEDAo5cgESJ4fOAgwMQICrFktB6ooXa+ok+p/sDhIAUEYDwWnFgeTwXL6HFd+isRAin384NU/HgZFLo6ZigCcEBPf5ANuJHJshoQoqInCI084oEDFVTQAwMC7KaUCgFolQIOYv1kDgwq+HYIDzR4YABs60W1zg87lFCBdRfN8FeDSongQT6EjVNABf4d8oIMBYg22zoxRVOCNQM1FksPWxFgAHtEEdXCfIqY/mBYbGUV5coP5F2nTQqqraACWzrAVtkKOegAigglgOVeT+eYRU4BNlgQDAA4lLlCCmzx4AA6HciAJCgLgOPRXLOZE44L5pHSg3MobMfWA2GyEoCFoYzgJGiH0bYQODCOYgEJkJbAqFYq4MCaLxCg8JWTj0pK5gQwmBRKC2QpY0Nmm46iAjl8ggdZYAy5EGMiGogGzjkl1SeKDP14SKap74kzwQBAKMLDDq1Cs4GUwnrCglMdKICDDAYYUAIOChB1a5OUFfDpIXPGVesKiVX7CYM6cLArISIQV0EJkdLl0QoeHAJEA5Tpm84PNLhLEAQvgFBASCzWtgKKhATwlFi1/qh1aGYQhGBPsQK/cq4gNNBGJK0TZMXpDyEsp8M3lLH48LxCMGDjjSHlgFlSGhzjw82wduWPNAawkIgNkxYJrANJPdDMBO0GM8MCIVTgQgI3uOBACCkEmsgJIPzaAQpXKgJmxw0lo7VmG0DECpyk8CCACzB0eE8tPyiQgA5rHaJCM+zyrIjSW3oE8UUX+ENB3tYGkAM4RZdZwicPwEDBXqKYUHRnBfg9kJIKAQn5W9hONinlnvRGiggQ6teTQBYBcSMsHai59QjHiD7UMoNbRGV+DSkQ6zacbenKTYgwgMGxo0qqQCc4GSApaK+oKs+sNMOCAvP0NiZbR7Gsx4pT/h+fxMF6kU5MfDw8aHlYOqx4WQgCnJ0lfysiarAbAhCcYK/JSSXQql0zkIcHqpcMpBUiAxQYiTlKoALNBYNawJBAKxQCHf4NQgBsG8UMauQcV1AgVgAY1FhWYIAMwuNBD9BG8Fqmj8cVYgA/uIGhQuEB27FCaIggwFvUoQD3yYNNE1DADH+hg8rwzm8EIF8BLKgIAISrVR0woCJ0sAESOnAbSnKFptakvs5A42MqCMcKSkC6RLxgSa3IAcwuJL2BXAoauSOFA8TEEXWcTwg7dMgPXABBQxiAfSBJBhMVw6qlBQsY14JJbV6hgEE48WfsCN8gTuCYWChgjVv5wNw6/jCA34WiivlCi+wI4CufrMBOhggBZGbBOu5UgD0TSFkoBBA2QUhsfQoJWxGf05AGOIBRb4nNCs7WmhXS4pKfsEALfoACC+2OfS1rRbuIpkCR6GUQGUhGXCBigPpwIF+1PAQATEACWqRQEBnAlhcn4MIwMcRJzMBenpgUzvPMESg4SMQCEhgOzwmiTR3sSA56AUqSLWQAhKjAOldwxdYgYGEd+UGz3qe9uShnEI5Sm/zC8QEe5KguESDEH90zxkKkwAGYVEoAoCNFQUgABeq03lpmtVG0TEAAHAjL+l5hwR3gagK5c9QOfMgXUgIEoYTYJVVYESgJQqRUrlDBM+uo/o8XDAIC3wlPB4gqhI1dgACZgRCwhkhJUr0igwgg31L5UQEdiAUvOBTCtbT6ijsJIa3riAFXlZIuhliVEAoIDCxkKQQeLOx/zBjBAUZmDoZecIJEYhSVtNmKVm5FAHCxrBDcWZeWwoBWhJmAARQ6MQXGSGYKyVYhwjiSvSalrAwJKSFYhSvZCiJRe4JFCVbaEvcUwEKWg+UE8plQsKwgrlsRAQfJ4cJBBIBPtAgCIfBVmLlQwFFlQwcKihsNaDZXENjV5g8amhMY0IW4g6ihyJLx3RYItiUwuAE0XxdEQtynYa3oJiESUKYJpBQnLCNHIwkRXF524LsgGBNANsBf/nGtdcCCuGdV9DsI+Zapj1oRazM2UAjLzY+9s60ufCNwF4FBWAh9/QmFBUHij4w3MxtICAwKQVptLuO7eWTSslZ6lklNYKCD6EF+hlsIB8wPrHwBAEzP8l0h3HdU33UeGpkxgFeWwy4diFEYQUKOGRMYKmtTDAT0JNpCtNjG4wABIRJIWeiOcYB7CgfPzhiwaewKsyTz51bm2ZHcEcuQ6hgcDJbGJAOwtmHQuVMiFfkKrVnAKa+4gGKoNJLwxVgWh+Gfkj8imAlEALOA5kj0BoEAhNCxjY+ECpD5QgN+1pUQY77dVq+qLM84IKflOJam1UcVzbr3LIdMMjmDmLd5/r5nHYpmyU96EoJSG9GgTdss2TTLALmk4458UWZLhaDeKsVCjYNQ6lwoI4BNly81sfhuXzuiAEl+wFfSQHJrNoUvTiODAoSYo4SAsoL54BaxBYjRGdXGLgwL4gLHZpewSi0mZgzu33XuQJaFcObLveKcdw3H5BSBWWVIA+PnUSWRRv2bAgD6Rkg9tMD6YUE2m8CThEjdOUqAuNZQdzIFoJYIIkA+QAJlAmoWwgMC95TvhgAEQ5ziTCaw7cxci7ErFoQAcHBucpjMsDaCVDoMHgrc1uJN58mo6AYphBBG5R8Yl8F6RTIB14biAccoR9KzDdVpkJcD7u1JwNPL2KJg/psUCl0a2bdBXkOIXSFBn+Kl1bHipyOvI4X3BABwazGC6CAHG/cEEGq3TVaUMREQmBMyLOjENkvIFYMPxQfCdc2BQGAEstgj9g5BrBylexQPIFa/CyGxaETHFV4OhgQKEO1tiCAEsNFHuxGRRUitwO2KYJAhQK3R2LTxFyzgui9OYAJ79HYCEjUECzTKnsqTouZOhMvE2KkVFtAAAXkDAAQW0IPab1IZ9RRCBgbgxXH8NR7PdXYbRTBJAQGB1QAoIDk4AAMosArvNF+uoADXx2IU0wwXJQ9Ply8+d2BJwVuA8WH8ZgDEJAg+Ql/IFQ8a4RyQ1QySNBALoFYnBz2w/pAD+UcICLBk7dF08FBE5BcwQQRz28BZ46Z1rhAAkScE1CMSOACEawJKyAMNOpgI43QBdoUIIVBJMhEOCuAAI4gIfyYXHQByBGE5jTNfP/B5iUADqVMA/4cIKhBgiMYQCvBpTGgITvV1NSgPPLBkAohP/yUEM+ACHQILPxAAf2gBOlABLVACMKAAGyA5o8UAFlBzokA0D1F8F2ECIgNJsRBHhKACf9FmsJAq3JE+r2AAlEgQIuCE/TcYNcgCtYdu0HEBEqAyp/SH8iAznoEXEyCGEsB5MigNF4CGWsEARzgQN1cV7EFzhAAAsNd5pjcOA9ADc2cw2gB3EJiFsKOD/qL3gb1FiDhgAwJwhBlAAyZkjYZwS7zTDBRhhROEWBsoDSGSAA7gAT1gAj1gAzdQAmmzAgSIjocAAeb1eLHQhoaQAnwoFBXoe9/ocStwOAB5CC8Igfrwd4bwAXkXWpz4fR6Reuj4SueWDrLzLl6hH8+xi6ERC0fxCzMQABOYFACwQlThkRfZFNsDjR3TGdJFChLAfzFUjTixepCxhL7wAEMyZOCBK27ykolQA4exRKl4ErvDD633CylwlLJhLDlJFO34CQhwA/gxRsSIEtRDDpjoCywwAjClY+q3icgQhYTwAsn3bCvAR1uhUK9wGejzAi2wOD8zX1npcDCnQ1i4/g8o0IIn0Xt5mA0isAAVIAOLs1YtIRq7JQDahwABkFWtGA4ycIIoMQJRZxH1kgImEAAgIAMlUAIUUAIGAAIBEAI4xYQf4AAxcCpaRw6+VIfbIH8RSQgSQGL6cpN0VAK42JvxwH04EHdhaSrwVAKzZ5yH8Jxt8wAekJyz0SIaSA4toJsRqQIFQAG6IAEIAITyxwIM4AAlUCO+JynMyWXNMALcCZAmwhE/kAOQGAQgkAAtgJoDkAMO+E6gtZGSyQqEBZ2JcHh1URibJFjsWXfZco4GepBZB2yhZpKX83P7FgsiGKFNJHO0MYQBZUrPE0rvQZMcWmA2VUcMCo8OgWisvFACYsihhvBGIzeipbVNwQmCHZADBSqjiPBrFLNOV+GeYaFI5xABx8ihA1ej2dgkoVV1zPADR+Kjn8ADA9kPgzEmgSQUVJUXLRCjVIouu7hQEfcULNQB8hGmoPAvtqKNdPUYLUIBIaB9arpacXeh0dhporMCMHBrdUoKH8AAQRBY7rmOx/IPOWAAJlCFf3o6LKACI0B1rACYcSYatxECvNCoqtgIIeAAEeAtC7gBCgADOMCarqkCOFWcbBEIACH5BAgGAAAALAAAAACAAIAAAAf+gEKCg4SFhoeIiYo8BAI6BxUBES4jLjYVBzoCBBCKnp+goaKjoAAEOg4yChMrKxOvrB2xrqwrDSglAQxAIqS+v8DBBCotCq2ssLOyKx3Ms7HIKxSdwdXW10AOA660zszfzdDKr+GxEdfo6aEnPdvcr97LzfLj8PPOExbq+/yDKUENwCn7Ji6eQVmwvgXoxxCdjhLcEMazNyHcRHH28HX40LDjLw04ulmcN04jNHwCMy70yBJUCogUnUlEiDBjMooJSXZA0LInohM3RBY8ORJfxprg4q30yVRQiBzI7tGjV/FmynoTdzZlasFAQHkXadm8mhTsPVYOtvrUAPWoVbP+sOi1oiowXgGeaj2KcBHRaEq/UqGR/Cu3Ql6PJ0qUJImz7MBwzZgVQIFCgYICHX5wy4H3cL8FOwoyRjkYrqsBIEy8YPGBR69BInggYCEghICG+tRqAIvxYMx5P3A4SEHN86AFHXpsVfFDXODeUluVCMHR+CEDrGwwDRERK9LAKxQ44GA90QJuK5Z65O5b9F8YKnh8gtCIgQkH+B2YYCCARXF+MpzkAks1zDVUTqIpoMJriCDggQEbBCSWX7YoIIMDAvxXTQoiuaIePzo0R1RYYBXQg3yesNBXUSchg0wJPeQWjAzd1aJcPwSQUBZpz3zTAnmhgFCRRjJ1B94KJaj+kMEvArhSGisq9COCCasYJRo0OehACguaLfPYkIvBg0EA1YlCI0azpMAQDz1AVWNWJQBJSgQufudYiwK5UKYnHI7opQInNIRABQVM5E16DJJCQDeCLVaXRKwU4ACKilCAZlyulJAoPwg4wNg9UVYzAjlgWlkVgoTBoGYiL3T4HDPaeYSADVIVcJs1HLxDalL1nPrcDwFQWggOvRK0zAq3IhaALCgskM4I7cWVDEGk9YWDBIb02SJv8CjQmUcWVMCCOhYo0IECOBigbgk4mHtMSl4mM1gBDBSCAERyDTnVCgPmpUMI1WQgLCEiWPBCBSV42d2Ox6ZFCAIhySVxLav+NsVdB4GyBMELIGCm700xpVeIBRuI9fFfAwzMUggifugRBCZs81hY/R7H26PemLDduxNkzJQOxF51lMiEMGCgvhdNkIOGDYV4ksstifAUPMU2YxghNjyD6iwOe7SAjvLIIuMoCNCgQgUu3BBBAA6okMKeiHzQwo4npQcAwYoNPU4HGCO2A90jiMKDAC7AEBDVJwELSggznbpCC+MawoKfJ6PlEXYIIjM2IkC4kAOjQqFXLygLmDvLCgY8oEgPdAUmSwdMp2PCiicFnogEBojop0AdwHB3KB/gsIwBznoiArHRzfTNjfxMfjI9FGwqyAwRNMcrj9FoSbYMMhTv0sL+RSGkwO/7BGjoMgpEXogOGFDOmDIDkC+K9J+00JjEK7zAT4EMk6N6IQAIwIqS1grNtGIF2msJl8JkFAPsgwemCwsCDYEA830nISWogA5YgIATQAABHPCeJzQAhGsIKXnUaobPruEBJz1qAl0bBAeCNpJaJOlbvyBAB1Dwv2BIIHSmARg6IOCmiWnKXgPIyTdQJ8JquOAVPughMAxwPqKUIB0eCNMEfiBFp4BvAgrQALmisQG4kaJVQ6PLCoEhgpKZBoaIAJoLJ2AAHFpjVLMogfxIIYJVtK47oaqGBmqUDAXEbhA6cEcM0UEA69UEaqJwwISe5AoQEGKPoTCAWSL+wrxEAEAHo9vHD5GWmWT5IleUw8f4BLEXHWBSER/4inPAqLKmqGAu4BgA/UKxjT/OAkiNXAEOEvgJFTQGGVczjiSnNYEDBGNZX/LGBEKlg2hQgJiJoFENh2TGvGgTHAqoJSiahCqq2M4G0pSGKQ3BAxJAB3XlEQQH5OUKIfoCAoKh2wSuKISEGaoEFSvEeapipUCWR5LlEKYoEDA2CqRQNAXoxSrwxAoZBFQQLUzoPezoGQQUiiY/KKEnOkUCGRACjwQ1jQV4QA4iWUQGBCCEJqFDgXgSYlnvWMEi7eWAGLhCAYQw5vUgtYIULKo9BNHZINxYkp1aB5X6GgAieOD+gbYw4wc+GyhFwscfQvJIf4KAQAOg0wFsqkBOh+nlEtfIJhQsrKiDmEGXSqWTFVSAAXRtzArUd9QjjQ0BDfhBBDbXFAcUZJ2YA08geYAZ2ikjAia4kmB+0Jkm1cQeHRCWthowAsL2RFvOSKYgLPVC9cDAOS5EiAEMK9mIUAqvdwJqUJ/RAfUx5QRzZcU5CBEEhq1gt6NNaQqZUQK+gEcnHSBfZAEzARwUwrCHsq1PANBYeJj0ppfFhwMHQaODSBMHEXgfUcBICISOiJ+DEKA8KJuXKr0OBoXoAe2YUdNBBCG7jZsADOg0XmrJVhDQldh2B0GneIiTJWptxgYKEVn+8SKJEBdwTFlgMCqcyeO/QoDmRQYsiKBcdklqSSI+FkyI5T7HuYOw37SeBIMbfGy85B1EBazkDPQKosKxYK9aTgsO+BKiB++08dxe5SUK91cqOWAQkBlW30EY9h4riOlWAOBWidhYCOikyis4jJ1qSUU4DKQJpQqEX/0yuCAX7QkRxRGEQoCgNN+w5CAcqjyqlCCjzEVPZ15wlnsUQFiWTUgnmbIAKn5jkdp8i2nLAR5WGAC2CgOPnFRUzgl8ywK6WsEFPCMAQ2NzA9EYjD1F0D6yzKMDIAj0rpSXLAQ4chbDBCAKKJJk4wigBWMTq0wy0monpREZAaD0O46rVCH+AMC9rIj1IYYMD2TZ9Digk4icRjnJlIRA169rD3D7OaQB6GCXQjBmLGTRgmdjtFHf+PMgLACDO2UkBVQmyIhegWIArwAGDAC3ID4wIVZI2ab4clEsriwCFZQsja0gT95aKprMyjDfobhA3WwXT8BSDmpSi+Cn5BMBx0DmG9hikkgy00XPhGCWyFgnwaikRBQLtc5GGfQoiEVQJL1SLf4MH+w8wQMTzNoZcgZCFfvCYVLoYNgVcepWKC0tZxQ9EWxqi1IZC0Rl7BwYeTtUKA9T4UYb9BODUkAPE92jy2JzFFqVpsqvYYGQe2JR79QKKRBAPvk+6SwTKHcwzOsNe6b+4wE7+MEFSl4I4y5GztV4QLXhLPdfAICKEgnnPjTg01q0QKSSe3VMmuh4Y1xwIsX+xQfc24HQWwMCAcitK37gAEwm+lFNtsYTcSYOqSa+LZK/RsEPPpAVfF0Is3tOLc4ODFW/8BtrH0UK+Gb6X5wgZq6Cx+8lkDlw4EDfozh2Kmty5V88IAIHJpj8AAABCfQgQKGOxw9+nwERa7kZYE3HE+PejeRnHxQZwAEGYEABHMAABRLiIjyCAms3ZLR3XeqgIr5RFt3XEPKFOEaSTs1gAN2kXq1FeNaQdcflDcSHCAUXLKRwAgUwXmfBOzngd4RQAWOFPcygdNZgNK3TIjD+EH6sxAAyUwKHhAgI1T8v1gEBwFH2pmXOcH0M0UbeFS+WowiJZDIDgFaKMAMjeCpv8Q0KUAHd9DAjSCLStQ8m0Dj98wOcJwhLSDWbEX+KcABlVxcKMAICcHOGUAHuMQEoyA88UGXQIYBESAgpgANjJYAkASw0+AEHcwElAAMKsAEwUAKrxQAc4IaIsGYm0wEU1xHB5xaG8iHLtIDhoCp5kUXKYADYhw48cFoz4xw/sHUZJmF0cQFu5xN1SBI46BNG8zwDEQtNNHsTQy2aFoYdYXf7lIMMARMwRiQbMDYA0HUgUxIrMAAmsEYNAUFIAowMoVXRlFA4gEMC9CW9skX+OGADKQCE6XAABgBiW6FhmzQaHTANhcAdb7FiR3NAO0ABIGADPXAAIeABDnADMnAt1bBHC0CD6TCKz8OCHeABhiAAyNYr2ySAtTASencNx7gCGxACoXgN5DRv8sYKWygECDA3aGIsQ1Uk9MBFECkktbABKuCI6ACH9QBniHcIKlBEQoMgKAQWbVYNFdQbAwBxDQEACbM7wLGRhPABHQeUSXMlV0UDwcACPBYdrLCTKhkMo2eJErFtilBouKRleaWVzICApKAC7sQjSeFtDXGROLMCTsgnVIQnjKY1ysiLiQABRTl0YIEDYtQPt0RKzmCVocACAeBWpBQVKwYy8CT+CjqwA7LUP9LECnfJDzM2mFEWDDzwAi1QKL8BPjuSZodAAHNTRZXGDBdQkb8QALU4iZK5AAjjVooJZR0AUCMVAIdzZKbiDDIgmsCAR/iQltYgAhyQAiEQACBgAOyCA4oIAgFgGyyAfSdgAz6Vi3YyGLGoF7gpieYmUOE1QJd1KQMnjerQdVdoHM8XEpjynF5Gm9y5D4YFSXnBA6hJAbqTkaZyP6zQArapDjoAjtUAAUCAAPoGALPBADZQApaZU5SUPL0XAPVZnYeQACvwAwUwABQgAyCQAAkAAjJQiBjwLgWKE8lYEnKooNawQIgjcJMUZkpUk7GgAPYHoqHAoNXTyINVQ5goVEcsWg1A0ByMt4DecYTYU3o1ag3281DnI5bZWU6phSRC+aOhIAFdIpLa+JE16V0nqKTWoElHKKNugaU4MwL4SaWfkHbvcyc0ZqCAgTq66aWjEGEvFp9eBpkoBDloag008Gpl+iQn+kKskAMRcKZxOgrfVHbt6FteiCQqcJ59yidGQiovWqDfMAAVwKeHSgr2U4Lh8xuXmQMGYAKQGqm+MAwjQAGRQRNpCBbMAF4m8AAJyqmkwAi+CZzCiQOICAMwQJwGsDa2wQGGyhSBAAAh+QQIBgAAACwAAAAAgACAAAAH/oBCgoOEhYaHiImKPBwpOgcVASM3CREOFSYMKQQQip6foKGio6AAFjo2JRsTKysTrK+sHbGtrTgnpLm6u7yEFioXCj+urrSvxB3Esa84vc7P0IMsDgM/sCuzycmy2BOz2ODbKtHk5aAnHgPI3dvh7O7f2jkZ5vX2gikgDeDH2uyy3PwJZBXgnsFoGkqs09bv2CuG3ZbRSsbhoMVdOii0Ahiwm8dZHNdxLHGxpCgaJfZlCxeQ47aJEuOt0GGyZqITEazBawizWMuO3l4pEGGzKKEQBVgCjKi0H1OQy8JVMGrUwgVkHJdCbcmv60BWH6ja1FFA60+PWT+qhZishT0J/mINiQiw0CfMkAKfelu7QkA9Cw0M4Ior5EQJnmvvJu7oKgcKBRtQFOggw14FVhsWxH2wQ2tEkCx3gnM1AESFFyw+8CA6SAQPHvVEKOhXg6qGGMU+cpsYWtsPHA4WdBKro+EPE0VVDPOX1Wk8gD9KhAhLWJAM3isc1AzRCvRKrmxXoAhQsfogDjqfr3BRkrtzlw3dwVDBWhEEAgIY9KhwqcIBBgKwMBw0Lki02wgW1bCRXrs998p89SkiwlV2ObVCAwrI4IAACPCSQVJfsbJCQffogFVvvGnTQQWwiXIZN0rxA0sJPViQiwpmFfPNVPXQQEJHWwHJigHUjUJAenu1/iMTVD9QoAI9oeAQVHztrFBbOSfMpteJMqHAAC8teJXjNwEVEECRiaSwYIj+pECOCDIsFpRuE5RQ3i4L6DjmNWy9MoKNiSSQlpIOoQDoMwXmCAtjAUS4i5Q+6SYpRA950GIhJ7hCJkOEulICAM88sBxWD+U4DjQmzBnkMgzFd8wAfmGqAJfwfGTDMwDooNCU/AyUg5vRIABVrS85V+t6lwpigTre4fVQKy9EI8EIIPY0Sw6aEYIACNHuEkFTEinV7FI4sIDpruox59EGAz4DgQo4LMQKCg8U8sAqJO3CQgkyGCBDCTgokEx3vHnWagc0aQupkpOywp45+XxUQLaD/uhAAjY/EFCOCBwIUIEMB4frHcYVgDrICVImSSV0sZrzQQUbQFuICrl18LA9ELzQQgcDt+rseoVYoGVehLKCg6NvvgDsICFYQ8s8Fr27MKlouTKCyYIsMGyzxa4QwnbyrnDqRTrEq2pDLyFIiIlA7jRBDh2SvZxLzZgEQAg5NEjlCjwOEsDZnh1D4kE0BNkVxaDMsIAKFbiQwA0jOBCCxp98EOZ7z7IythAiHNYwSx3Efc8Jq7iNDQif8CCACzDs49QxPYiigky7ydLA0kKwwFeO2hl01aDdDJBsIUC4kENuiqL5yQICP5suu4T0YK1ZBYhuTg/ucKUA4oQ8QOF7/roFkcsHFOzGFAwhRAiAlAOFxkrs9bDA05IK3Kntt2aZPzDuokBwmMoraAH/BqEmBgEkGTDAGjniRDuoKMBchmAACmgVMm/AoBSH8J+INlAB5RnCAEvKHji6RQ4FfSUc3OOcCwjWJ24MoxXI+cQBBGMIBJTAAC9A2iHQs7J/TMAA5eDBDj43kxoagC+gKcFpWICADCAAAQpEBABWsQEgyIUUIHBerY4xGGhcRiT9GNwgEMCsvTnJeqQQwEaw5QwWjMpBXdlcL3jgg+Z0owSOgkDKPCODFObiKiDxQb16cZ29PSdfz5Ce21gxyNZcRy8oIGEveMgPBXRRF2wrmlou/rkLEQwxXdgQoyDoAkcDoJEXNnjKCmSgw1AAYGh7+ckEEtYLDYBLKO0SAg9AEKlkiNIZbGPKBH45CgckJnuoc4YBDIaNGBqCAwHIwTfgVw4G1ExEAxTFA+oyLgVEkRQncFpEjqGA4RWCByooATGhYc344OCbooDBlIwlokPpgjvq0kbf4mJMqCTja7ugi5D+IUdSLBN0x/AgVTz3knLuQo0hpJ3adMGDHy1FFkA0jxA4sDWx7SIDURmZNiggiFYqooDPAUlB+TnOFdRNFwsDz0OI0gIXUC4U0utTK04ZFwiACBsd+IEVdTECQy7lAxDYxyp1AM8PiskbiNSoEEjp/pDe5QKfwIPFJpSxgg04gJOG2ACnrmFVqXLgRC8lRZ5SpBsVqOl1DQhCNoWQ1Ow9hJZSFcIeMQZWQ7xLBkvLFLE+UgFrtmo0AzgAGs9qIIzZT6o2WEpfFEEA42muNWUJ6etGkKpePSUGAcCaAAbagWQhYK42gShA9jmIXMlgGLG41SBiRrRxGuBFhsQGCS5lWL0oYGYrGIAJeGqSTEkkApiCWV2QOwgcNGst6pQpaHJQn1TxSRZpFYIDYhGDEQy1KCJICjcyOghjHlAWFyBEnM4GDxzcIH9YQQEhvriqqE5VRtWjCm2Pkd0XyYgVUQ1TeJ4zgATEKBuy+O0gIts2/vIKIgIBaUAuTTIATl0weg0LMHzJNIAIjGtRrFDwKH3WDQcL4QZqgVJRmEWMDRSis8+NahZVCREYFJVB7BCxds/SAftC2CMrIK5FymjBQtD3KRp+SWJgUCAKgoO6g/AAjetUiO2GI2NU0dWC7BuAdL3CwQzUondwkMrnpvRSOErLAPAqBKweA7UXYcEIeJZeQsx4K6cjBEMn5SkYpwgWPxDdCyTbAj+qMSAeqA4CTNAy64jJl4QQqFF/yIAktRQ0d9JdMhTQwURYQFOxMLFUV+EsZwpCzj8NDwgOTWNltAwBGWKqJ17JJyjnla4qic9k/RoCs7XEAbr7M0tM3VdE/oDwWbvOq5raR5GTXs4hKkCASrakjYmSAkfjFN+tcfuZFRTAnIZ42aySIQAATHBkWcmuKIy7jptqlKEOwYZ9JfQCAxSgIs7tpaV5Bm5QXADBrmCuRo0Ln2GO78HMJNMK4KILVn9jBY2sTggC14pGX/uA2QMJNXOx12R86t0OSpKKcyEBtIREFvMWxQtINYGyigU9asHoHC8GSk6NnBSHkckKvmSPB9jgu4lYoc+0sdJRlGBreCniLkR1cklGgwCziU4N+g2YjmZDyDjl0k9EXUy1YEMD5QBCzK6BAhtMeIV2nEAyewEETT1VR1j3BJxYBeCm5kIHuInHpjnpRpGC/sOPpBDBuXObDFPnIkstMfwueLDC3qxggHEaJy1ICo0br6SFF+bFA/LWj7h/AgAqGHtPrkQIEyCxFWzmxVuvKymL50Jr2li7Lk5gAhjUDMgAJQQLPtwNdfNC8Kd/ScpJsfmgRjwUEJBAD9aLucuecwDOElHqe/G3SyMGzoR4VwRmYAgCUIDynrAAwAYAAxQoNd5bU0A2AQmeDnC9FyU3Vl6o7AloZrYE5uRBsascLvD5g0iHQEqSNxoMVw7/o1MQwXNykRBcNQEy0G9yN0GkNU45UHSSJkstZw/thCIfsQHDYwEO8EkYVyc3Bwq9dVhINwITJghCd2DYcDT2IAL7/kVarFBWANACrCcQA+BuoHCAnuUPCuAACiUI5iUy/QBB9mACS5I/rIA4NNAAsRQjbwN2odB2BxZiI1BunmBlJ5QMRRcNPDB4igIOMDgIDDA3oGE+AQCButcCJQADG7ABMFACLWADOkAAdlcIH1AhAbFO5WBdg9Uq1qZdj5Y5weV6B3EBMmUAJkUOPNA8KjOCrKCAglBUvDJQF1CAFqFaS4F/JrGBEYUWHUADhfAtY6VKE/ADQUCKF6EOzlMC7XIfB/E/dBIjlkQIADACJrc3IiJc+4cqAVEC1gMnP2AAGtCIvLAA4rSEGIcDaFSEKGIWv2EDKcB95nACPPNlwzNj/qywAxXwiwHFbPrzCrBYCAdwe+OicAOzAjtQAiBgAx5gAibgATYAeKDwLSswAo6ii5Y2AQ3QAqwYDSIAA2ZWiytQjoQgAJAIPCG3KML0fqAABAogR7nof0YTAiuoCymQHhwoC7OAA/ZUGGFCLIRXNQPDg6PASQDwY0inDBNQAC6AhL1QAa02VrAAAyipApxnQJolU35ICjZ0UbnlfM7wSEg3jkqnh/gjQl3YExOAAmwYChJAkNb3M7f4DB+AAlwhJG9TgoOwAOv1Dl7WHETnDCpAc4gBcDKBfaOgWvJyUYN4CClwRKJRkEo2fKCAAPgjU/91DAdgDjTjPAP1WIlg/n98tirQcXyhoAGzwWNtMwtxCQ3mVZeeQgo8oDPixZQHlgCkQACX0zA/0wEtgIy8YInwtQJOJwo88AAVUAITFIjgUADW+AkIUH0ylXB1Qpq9UFQR1QFD8QwcIwAhEAAgYAAAgwP8AgIBYAI59AknYANlIZbUphYIaRAioIugxFrV8QARcDFcOZ0gUZ0WYXloMYRFYQEHoBF8uSf94Ik1QZMN4RZxIQIP4AEUsIzgAZ7g0AJRmYS5sQL2eA8QAASoUAKZyYQDOC7g8JObmDcd4HvPkE4y0AIJAAJB8C/l5zroaISEgoIYo3jnWT4g6gyy4RAmqnUmOSelMmUTsD0a18UDw1UPOgCFgciEqhIpKipZpnRr9uCDCJh0e0JtHTCiPOoM8WcXoDlOXnZ6MiCTRUoOaIc2kgeksBkPOUCkT9oLPiWJmDNltegPI+B5WXpPY1KVV5gYP9ACTjqm5MA+U5qfzEE0spCma8qm0YBSj2mRcFoAI0CYdkoOO8OQVBOK34ADGPmnBnEC08ZjJNlSA+AAfoqo5eBfeOahIVQABmACkSqp5QAACkGobvdwHdBhIfAA/cmp5GABAqACDhABxjkAcQgDA4ADFGAAERAAISAAHHCqNhEIACH5BAgGAAAALAAAAACAAIAAAAf+gEKCg4SFhoeIiYoZHCk6Bw42IxE3LgEVBxCKm5ydnp+goAAWDAEyOyupEysdrBOrHRM/J6G1tre4iRYhQQo/sCuvr67BxCW5yMnKiCw2A6qw0azTscQdJsvZ2rUfPTi/1tTAsdKxPx/b6eqHNAm/wNHC8fGtrcfr+Ok6FODDsfXiqpEb96pCvoPKXuAoJpCgMIYOh60ggLCirRQlgj0EWG9VtIHyxOGwSNLTiQgaqVnz96rVOHHEDG5DUNJWiAIMYQpcOWEnR2Actp3Y4IBHTU8fLgTruNKVPI8QpQEbkM7EKhwLjm7SgeFlw5ZQOzL96dRBOhn1fsjUWkhEgB/+PJ1OEzZQ5dhwLLZ9SEVuxQVabAWdKLEx7Ly5cvsyDZZDgYIW6VQMA7aBRuAFO7yW8/jVLiscICq8YIGAhwh8BuJOYKBVQ+eOhzlS+4HDwQKaJBGQKOfqB7aSIXL2TMwybokQ6LTq6PkU2IoAJIPHI76ZGIoAQQMLMeDSczUXFYOn/Mny5YoBKowiNVHBgQMPJhgIYKEJV4YO5ED6CzbioIp3ccHm1CronQbKcpNB1YACMjggAG6fvCCcOPuBt44G4MjWnF0d9GBgKBCQMB5U8JTQgwWetEDPRuF4oA4NIo61H1krtJDdLRfI9s+Ar/xwXAaK8BBDOLCF1MEPKgj+pYCMPJaTA2vIIJgYYq3MlUMAgBmSAoUqcXmkANmIQNiMM4ZjQHLIILDjcAOJJdcELqA5iAgujKiTRrCgkCUyATjUpHMBfJhMag1ROaFLHVSgHiEqNFDca8CUAEAyDNjpE0xJFsICCBTZIhlPzIHV0kowgFnIAgoQqdlw0OXyAQZLUcdiAaYSYtUELtqy11OGEkRMjwEsKggHz9RVqIC12qKUVCx2hMIDhZxggEcj3SIDhaKC1JRLAwBRCAI4aNbUKhvUV8sBsW720rOnbkDMRLekYEAJOCiAE185KeYrflAOAm6zOg0TgS0IFKAuok4VAC0hOuxYTQ/K8MCBABX+lIATQPOwqZFa34ZLXVMrJOuJCDoEcXF54YgcQobRUJAOBC+0YLDG0wG0gguTDsLBkrzJOAEOOdfCQ8w5EMkKkoWszJxcK8ipDQQmLESXR0augjMhDyimKjW/4SKCACPkUJxZjPZT2AohHKTDM96x2VN/hFRKZnmr5ABhLl+PkGoHJQiqQ77h3JOPCCGIPR2LK6wlSJ9TdtcX2csAsEAPcmZNF6gr7JkIBDSEUIELCVTSaScftEDlimgTImaZO7XUgeZCbcC6cw4IWsjQIzzjqHNZgSLZ0oV6ZNkgD4yqL0ytrjNtgKsU0K8hLLhQ9GTiKGB7Jw/IHrBHG9xdwaX+TNF1tzZWDZgvCr0bskBqv7rN3y0fjAmPNZANAkC41RUKcTpAjPqRKwrIiyE+gJJtwSQFnBDB6AgBAcK4qS8r0AEhBBCrY1FjA0HLBmHu1IoAHkIHKDDgWHKQQUQwAFclFEIDyzSqAZhLCCoKS8AiuI0ajEhjBUjfnN6iEnWl4jmdUEoHZDCDAcLAggoYAQIJwQKN3KUhBtAGDxTAG4lI8FvXMpbbSlABHXDgBBm4niHuAwsYCJCJ+FnFCmAQgAWIUQggUNdmYIcLD2hMMR1Inr8GsLSQrOA44/OElGLhAx0KYjkDsA0nmjg/8qROGQgQ29b6VggIeIxFE5CBIUP+Ybpq1E0CAwSFDB7VSMEhw47Y8sgZBSGCUbrtFQq4Ii4gYDAKKYCOn0CQjkS1gkDWQgTu8qQ49CiIEWirFWdKBgACAJFiSMprVDSgU2SJCw0ERB4KeKEQ/pagVRATGSoYjyu+CYoAHItZIBhUI4vRNcEY7l2KWwY3jfeDJdqCkY0chwJSCIoT3LAlChCWEBAwghD6g5zKqFRiBvDGTsBgJW5aBYpwEYKeBSOecwIbFaOIjwo0swMHwAUzHXa6CWTqFssr0iqcZgjJafMs2groLShIpvbBzRZCatwKOKqdYRGkA2mzRQbOdqlq2YIG+aLLSXsqBAe8yai1WEjrxlL+gIZuApV36SVT/XUyNa4SFCMg6nRY6olp+cyUWx0pMSAXiuBoTUP2DAUqUJbHrRKCA3jqCQxu8YARCSgWQQ1FBhqwPWraVarFyBzB4HIpjWG0E03UjxpvZNem/u8FOC0Ak2Azghok0lueoOnpOmBVtlDQkxN4bCeoWNPuGMCpq4CBDWjAz7ihrgMKqCwh/LmRdHICAClYmCA89lZ/yIBx3VFAAGiLiO/lE6oDFahWeICTpclAEV9zQQgvQIgs5u8VFAhrXBTgAgGUsAKomwBaAxCDC+jgpSXZgEv0eoivJQBWsDClEB/FkAEkACYkWgEKFGcDqbiCp4K4gUZIYAD+zGqFj9TI7W5bkAPCYsyUKtpaNWBwA4A1RMKLQ22VcrBUIUSAIPBFSAgeOowNFOJWA7KHrW64kg2gpEjhA7FlrTMCAUj3xr3xpUUeEICH7pUQPVCVegtBgB5kxCvBYGM+L0fCQaB3BUlMQUMdoDF49ZQFcRWCOc23CgQTwgImeDJLauM2x2mkAIuiwXJLKwR0QTDMdu3wTyfg20R8IASEYgUFklweY/1AyJsQbRr3p1shZPFNQCSdCrhjgE9hDCYroOwnLLAUj5jZrsFkSSza2QkInOC08vhKK0TmCQCwdhpV1i0EGjBf57AasjI08DVu0clR3Vo7C0jqcDTtiRn+/EIsDrlpKCztkfpV1gM8KgacbQGAEIIvGtD9xAmopsaJ2nWDMkIrKMANsJZI1xM5ckUrlN3ToYbKGgjtBJDpOg1Q2oKmVPuBcHta0Y8G49ed6Hd+ovIKUoOiWP6gQG2zcW5DONAp9ehAijsBBKPZjG+4GCQs2KoPFBggBEVkhipO92lQUNd8+urJxDkxpnc9TxsSqGUrZHCAQIb1lS4pcS3AbfFVONgWwYZ4MAyrjJ1Nh4Zn7ibEEe0JrNL7Fc62hXN/1QCi54IFmVnJp10grg5E/RYV56++mL4JALRcIBxThg4KYGFg3LIQQGAsylawyVq42qIaC6yueBaOupv+/C2baQCrvUsclynjxsYj05Fx8YCutiIHDe8EAGqQ9UKt4OVCMEHbUmH1e7fPLsMAOCEkEAAKYD4FF9PI17VtAncZUO+CYEHKsU3nVr+aSR4Rt/0WEAB3rSIGXxXCA169gp//FgIL8AC5vdIAzEPgGcwahvGTMdJ9SUNkABBAAFIlwwGEnBAEoAB+CrByQSyAAjAIoTg3g4JbXyB/rLiuNsJ+x4+aEgCIV7cxpCuCEey0EwnAbcRBDMlkCMxEN30RfMmQEcf0SpdHCBLScxNgAOc2H78lNmRRKDkAe4NwgFOycerATRzEEBsgLOJVJNQgA+WXCIqmYQEgZAf4FaP+ggO1Z3d8l4EPwVYQAAPNsh84sECfcGKNswoKUAG4xAMx1Gk91AH7tg23Qkri8AM6JAGxwRIFMH0JhAI+QYQRYF6JwAIQRh7AoHNSZG09dIY4ICwK5UNVEiybVi8bMAAlcAEOwAAEsHCsRAFbszTEtADftwwm0ICwUQ3E5FENGA+lUhFCKIPT0AKCEk6ZpAK4JDS39xKcsQovx3XbgxgX0ITpcFq/YgwvJAGotQI0R1ahUCm7tC06BADGRErz4xd+FzFd8REtUQIvhAA8+Cg/QAEmMImdcHZiNw0b4G1C4IrrJ3TVcB6/qA6dRCUU8EKtBGXRQBseYIyfsAA/AD7+cYED2mQDMzR7qYADNvAg2SAhqTaB0hiA7xY800B3tlB92zIduPhi4oRaEREMP7ADJRABNuABITCLm5ABqbduguKKfQE8+yJ/vxSGPecU0VgIKUBFm/UQZ7gfLnYLQRANJYaQsFg1E6CAnhBsrRUbOKA5HzAt30UdZCGQitAwP/NVInBiUOgnBhcKTrWFe7gB9sYo7+Qz4WBgHPcJCJBItoMAhHdOxlJyoQAAKbUfXVcAREdA95hX6ah/VHELgQQEEFY1hhILCkB2SHGDzDMcqzCUQrAAj/ZWoDcbIlkLKiAid0Q1IINnuIBvHHR0E8CBgiAvqoCDG9IBaBkKCKD+YPm4WY+UDf+hRUGJH6kgeiwQAEVDFuKSbaGgA7cXimzZCvGWCx7VdfDQAZDHCUMDAtOjZL1BbJ5AAMuSMcDTFH2WDq84gF+xeti1ABVTNJoJC6qlCCcAjvy1L9ZASevgkd6BGJ2XQB8gACYQACAgA/SCAyUgA8l5CCfgAFojRyj3RyuIDK4IhX2RA90JCjU4CCxAk9ZnNONQjwjRf+DJCkxZESdgAvyQVLLCOiUgltqQk6DXE9WpDjzwAA7AD2xIbwIyAY54FJonduOJCwAAAUDAAA5gMYCjk+KIMJ15EAJgMD8RnxmXABcwLwNQYSlRGDJ0TvviGz3FAeTGCmTfiAw8WKL+NoggCWVg6ZIW0X8QoZ+g0FetFSDC9jHIxKMW8QIo8AoMmQ3IhTlbGCrDGHE3yVRUyZfIMAADZ6FG4iW8UQJvuVUL0KCe0EQfRVR/0paxgAJU2mjpwGVN8ic2qpk/MAJgqqa5UCxm2p9+siM2QqcWgVd00xw9aCg10qV8ug3QZpZv+ldWiB2FWhLEVTN3ajMlYAJE2qjKQAAVBJ6+ch4OoJqWehALOo9GUwAf56mfihAUgKi8kQoFMAAgEAIsEHmn2p6lNwAw4BgwIJ0GAAIOEAICwAGyqhWBAAAh+QQIBgAAACwAAAAAgACAAAAH/oBCgoOEhYaHiImKGRwpDCYeNiM3H4qWl5iZmpuchQQ6DjIKDSsrExMrHaUnna2ur7CJFiEtCj+oHainqakTG7HAwcKJEg4DpruquLy5piDD0NGuJz3Husy4p8vNKtLe34kpLaSqueXZ2MkrBODt4Dolpr282/PNuacKAO78wy84DdDd66WNoL0VLaIRUCGiH7QU8QSm25ZMmzYT0SpMgKHBIbAZEZClw5etoLl6K1hEK4FqhQEJHl2FyHENHz2D55ZZnNAhR8NhPApY/OHgZ0xMHy7IK0fw1D2LTetNkBHtwdJeA2gcvaQDw9KKzA7aZDqwQ4VoJqSuaHB26yER/i6+YouKM2xZVAuiKTXXS9WKC6zcDjohQ6DhuefEplL1AwcPaCJQUDTVbINWwTQU1EtMkuLhCThAVHjBAsFjaCwoH1xGQodbDU/pjq1brrGDFBD4mVBWkiezHz2OqgiYrvjAeiVCVPLYovdIeQE8qvjRNGpJguVQBODgVsFYqLx5RecXQiRn48tWDAhxepOIEBV6MBBQupOFWxI7D3ThbvrkzpuhAgNDr2h2zQ87lFABbpgwUBF49Kgznjc6UMeZOjnxUkAF7bmSgD266FKCCewkUgFtOF23AkbSPBADhg/qpEwL3AHj4E3NDJVcbobwYAMyZF31lF/dQHPCDl89/mhcDq4Jw4F5EmVTgA0WHJLCMefdJVIDAgwjAkuGHVZOCTUSwkMIM7QCgIEXhrWMC8uZOYJcbeKjigKBAROAmGA1s0IARg2iwwYrNNnJBb2FGV4HDnQoiAogiilSCYG6UmGM1yljCgOGsCADMiO4kpZnq+W0UZeFpCDZZkI6tYIDsRAglF1i4VLAC4aYgAwqA7iSWorO3fVDAI5yMECdOvXyA6quGJBNZ9XlksMDhZxgAIg/pNkJDyhEa1Kf8kwwABCFfIADjMCmokAGMqmm6WzZUUvIAt5BiGsrNihQgIX/gVtODJwSggBLQWaJSqidfPCiXf0WkBchOtyFy4St/vDAgQAVlPBdor5p6kEhCAwAXoC7pNBJAn3uNM8KJhPi38io4DBMBi+AMGtZiJVCsRAcaAaiQcvgsI8mNPA7j1orFDlICLcY1wuPw0BgAg5QwmwKwoMsgDNZPDnFYiYE49h1XxPA6jK/MO7CbDQ6YMkwOn8WwgCQKOqSAwKZaEBnjmFRCvEPWr67LDgiqEBTprg009YgASxKGypmXyJACQXQ2TUuOcQphNYY1lWCvIogQAN8LkSgrSYftPCzTS2FQMiXkj41geaW8LBADwZ0u0t6AQvyAQzaZMhUUYnwIIALMFCXDN6dqPAtdqn80LIgEsRWZ9ydiCCBCbUslRAh/s76u1jvnY7g1cgyu/IA8FHisgHzgoyac0kFwN+KCBwwEIEBmssfOAoPM8QDrmWSm+zsEDy4jCFOgAOJ3eN7ghDBuQJ0kOBIAwiZwoYCVGIIBISkX4sxVDh+YAByGQICYLqJOsiXAsqgiyQKqFQwCmM5VGzwEDrIgbtGtopLOMAUbDkECgvIlwmg4HRCMMC7Oqe2aECqJGTpAOgGIYIAVO05FMCExnhhgDwNAgHAuxAusMazWxSMIgaABg98pqUVkE8QCCiMYWyiIB3Up3YkQMe4OtWBrbUEJoMAwbfyMwH7xcIDnslG5AZhrp34BhUlUAHtLmGVR6ICgIbQgXnm/hIBQqSGVbH5WiwQEINo8cJvAptgTVBhgOlxIi2b7AkgCTECVzVDAS0IAQcHca3vjKQEwkBkIk0xRSGIIHzPWoECRNgJFpzrZxugXQa88wMYgIABHJChIF5guaOhwpD3I5TserFIQdQyRFycZCcAYMWxNaMEQxsEC3SgTkOIoF4MC8sbW6E34aUCBVATxNws4pdyxmI6kTrgJn5op9VNAIKvcFaEkiFKISDgcDexIDQ0WUCWveKTfFJXLE4AJWagwFERUJFCgzG36gjtFeJMVk5+UKVXhEBRK1icIKxijw6kERwakYvrXGHFIa1Gaa2Q6HlW4EUhfMABW8xHPYfR/stsKMBRmmihq0hGRk5koI8c+6kQF1ABAzDTGxwQ3lA7AQFyIGYZwHQFDa6yDaQKZhAaQUf6WtFAHp7DJ67wAIhsAs67IqByJFnBLDkxp87NZqqWUGqy4npXQzTuKgbNxE3BhQ5XbmIHicrFSu/6JFv2qhULKMU4czQBu2YCAqqR0VkrKwgs7YKprUAA3bKU01Z8kmwtKRNtCeGAEKHiXpwIimKe0tVMaFVsHdAmbQVQQVcAL0VHE+smnIcd9w33EB/Y1cE8VFKuUaUTPXjkrlbwjO8Wggc6zAZlOSGCB5jAAApQrUCy2Img3rIFJnhAPN07iJTOY6+vwJ8KQEAo/nrAQLqK+OEGIqACC0B4wLRFgACg2oHTYgLChPgAA0ZwjA04YAMJqDCGEYGAppqIAgHQgYvvCoESJeIEOggADviziQ+w4Aa4+AEuQyABEGvCwB2oJrEIbAgLjHgA+FnBfDWxJxWhQAY9eABWNWGDivzAxkweVJSZcV5OMHSVvGhADBJgZESUh2+eda8gc5aAVqT3rTcprOSEpFEmf4prqRitIrh7nIMIVxMW2KF2CQxadK11E9S9UGI8uk42mgKwTM5AkhKH3E2UFnEEefQmmmOQtX03tQGiaW7JgThcdLIVKigLRL+LyImsIAdbvgQAuiXGeUxZEyRFRwPAPNyw/rF2Ar/WBEtkQ9A2IwJRiWmuYbvZAUFbIqUv5IViXUHdnfygmN44E4MSsVlTmnq76MFOnzlBNbJQYMXRsKIpYKwBJAriz6vkSUA5IYH1xkYXi94ER02S2WFc6horEDUQVEu2VAR8E8rl7T3Y5Ypl88WN3wACYvtyt0Jg25uocC0nZICsxayg05yoJNBQHgwObEAioraALdVRv1j4l7OnmLWZWduL2b5CApYuR8BdIFOntBcW/fbXNvR8wqYCQGPoQIVOYaGBhY0FBU0FgoUanuQAvgIAMc1ZMyoKMg3oeAI7MOQHNFNoA9TUFRCIy9Gid2586wSSwqjlcrMBgyYz/gB5rEbFDQSI2JnrPBMAUAGSwOXaA9AjJ6rweSdaCKCcre2J613GPgWw8WTYIGEHgEF5USFqIbAgsbPBgbM/nN9hkmS+BCAiPWKwy6zlN7HnPgQAIHA7AqoDHa7NgMhcWB2Ww2JPy13KDxQohBMZVRkwAKcFKLCNfR/iAN0iTtqkFWchqE5J5SizMH4FL4HMlwdhF14JsFpFZCA4EROslbb5d4iiRmoXtRcGmEBtE/J1+3JRZwDaJAAwUG2XAAGOVRI5IHJC0E7glwoFFwsttTXhMgExRAghsURbJQPWJwQAEGCXoFXCMzF6Fhcg1AGqRwghEAJAsHqJAHYN9Xw8/kExPGBbv4cLOHBoC4VOy6AADlBPPLAXwUNEU8RRK4ACBmACEpBrl6ArsaMsXrcA+UYRt+IK1BcWChABAgBhEiAyauEnSIUAPoMOBaAgNEBxmbBGe2cQjkEIE9gbmvInTIgIIhAEMFACF1ABDGAB8KaCeWQdFbEz2JYYUIFsNuB1inAAvkSI4lEIzpc2BAEDuRc1n8Iq6CCALkMn2jYWdfZh6UdEBWFXRLcavjEPF7BY0JBoHONOqCQIp0dI6pVkJoQJT0QybjJFAKB3DhQuf8F8w5B+tFIC9gNGHNMq2KNs7vR41QEDb+eBjVWIq1EKA9ADM/YKSKYyqsCBr2N3/s9xDx23CQ/QNPDyeDGzbz+USO6UHjhgAwLAdJpAaJthAB0iAtiWKNaRcK1QVE/4TvvmeJZ4OaZSCgmSAKWXCQSwaaYAKIWgd6BYE6kgfpsAAeyTT5VXAvsmAPViiXPHOqUAWS9oIHVlCOdkj6bCE/m3CQsAOIRUHCXQVEnxVgBYdKewT5mgOudAAcUEACCgiQXDC2RnZg7lJr6xAagoBIYjEeQILjzWCW8GOZWCAMgULJ3zcJwAADRkMMVRheXyQfPDdafQd75VCgYAbixwXf5kPRbojqiTkXgWGytgAzK0AL43WEkSPdVoCXAxWzUQOCtJacHwXLOBUx1QAsQm/ggpQEC1kimS1wkeVDVKxwsFCQtvhhiMmCMd8JOmNwK8phiuYm2aoAEGIn/+NAGe2Qp51ZY/M16IwAMv0ALxlZjv1woE8H1vUyq9QJXBoI8y2RTlcAGXIAJkJQM6tJEdmAkzEACsFpTjKI/tcE6rIzak5x6NYAIBAAIGUAIy0IzA5gA341COlQoW6Q65+JhMgX9u8QAfdzm2VicUUJzSoIvYNRAo4ILBcAJT0zTpYTApE54ecY4UdA+4qUYP4AE4EGVDsoq00gEtQJ/C4IRRNxdTJwy7xwIMAFWVsztzkUG99icMOgyc1zEgyguICAweMAA5QApgMXMw6VemEJke5cEBVxggBeCeapID75J8aEmRNtR9W9F+UZJssABS17Mx91ieLuGRR6EDbJQMERoLsARoaKmhOHGZTPZFXKkMPPoKzYGN/BcjNyFlJ8lkL1CAuECjlVabsjNIiLGAVUqHPSAU/DUMnwYzDZmgKzACalmlHzACLuoKN8I16JhuNNKmiBcNgoSNKFKeftEC4EaoHiFOqAmlK1AA2+God6WK8RkpvEABIZCnltoODhKY2MUrDqCDn7oV8BmD2pYDSWiqp+oWbjMQqRAaJsACHfqq4MADBgADFFACBgACAaACAsABc+gWgQAAIfkECAYAAAAsAAAAAIAAgACGPDYslI6EbGJcvLq0VE5E1NLMrKacfHp0TEI0nJqUZFpMdG5kzMbE3N7cjIZ8ZFZMTD40nJaMXFZM3NrUtLKsjIJ8VEpEpKKcRD40bGpcxMK8XE5E3NbUhIJ8VEY8pJqUfHZs1M7MRDYsnJKM1NbUtK6shHp0TEY8ZF5UfHJszMrE5N7cXFJEpJ6UlJKMbGZcxL681NLUrKqkTEI8ZFpUdHJkjIqEnJaUvLa0dGpkxMLERDoshH50zMrM5OLcXFJMpJ6cPTMnAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/6AQYKDhIWGh4iJijsEAjkQipGSk5SVlpeJAAQ5DjIMEysrDQqYpaanqJQEKS0MoaATsaAIqbW2t5M/DgMrsKAcv70qALjFxrUnPLy9vb/OKxwrJcfU1ZQoQA3Q0MHR0c4TEcYmC8TW54U5JczAz+3c3ysgxSI9KwMgO+jnGTjN290CcgOFohgBH80YHBCxzxiKdbG4wYvYrh3FFR6KoWAHDUaOhrZO3PgHbCC7YAIL6MMFQuK7EhJAngIRApY3lxNKVpQliwMMYy6ePXPAUGYlCwa06cTp62I3aC2MrfOWk1msAQWNSspQ86JFigFj6YRVwdgnr1WjreigNZEIF/4cLW57J/fm2AkfcSE4KWtuRAMn2hY6UUIgVbBPl95csaGYhLgDUa7QQEOwIAU6wPnVTNWlxAkDPoAoemtB5L50q5LIqzXDUnDuTCr2gcMBCkjUAsQ7LHvbCh5aU/gAZxdx4lAlQGREZ0AsaqbPbMhsGTu1V4kMHDQGqWEuTqbMVgRo2NKzde/vYKRYacqCABa4Je1Q8fX73ZITRqCrEepuM7CyMZACaaeYEEoDDMjggADxHSIABSd5JllaK0hXTQ7DVcdZMAXwwF4qAkSEEgUmEJBICgwoxhRv0bB1jAIkoCebZNG0sF0hIphzyUFimQRKCSlgcAgEAZBUXYTRpP5gzAmZQTcjNyGwRggEJmiwQCk7jMWRLCEEEJghCsCg4li8EYSLCIX5xRdOHJRw4yA7VFAAKGWVwotiFMriwnKE7DCCkeY14w0DX9YS1IyoPSMegYIsoAFFF5jSAnEyfsNBBR8KkkIvdm3mYwmMlpKDkWg9pWQhLBgQ4QCmOIASTwC2A4MAhqCgAmIA7QaLA6lYMKd5PEVWAK2FmLChSqJypiZ+0PgQQKYbDCBib1quQKwpzYV1HAcqkEKIB6omCsoKJmLyA3SxeoZDTN/iAEynWrajAi2lUMdiugw8UMgDj8Im0bWWQKDCf5vl1COZV04JYWc3caYfJifUBB7DE/4U4O0gOcRIsTPAlWLBCxWUwLB3AEbEKyEI4GAcPBytkJUlCRgMUGQSWVuIcMHiuYI4qUDwwge/fiXzUuIVssFZy04EygCZRrJRfwMxe9Opg1AHW6w44AIBCMs0HCsoLuxLV9I9mmCJDNCMfHBO4xGyac7LTqAC1bjk4E9YEoZNiGn2kTxBCA0qMqo7z3kDKiGDj1uXbwEEfiZNhT+3Qp2D6JYY3idLIi2ueIbAZxAPFPBfcdyUoG8kCNCQQgo6WuJBC0nv5APdaHKO0ruFJjK4k++sIKUH/cKCHigBhAqnAC7AoM0EDKCSgrgTvhwEC0N7Gk/miRSWlmFQFZLt1/6cSonqCAP7soIMkojA7iEPpKitWjA0WEG6YXHgOCEbvRo5BxYQwoPw8WLexQqhAFUhKT+SkIAPKPACRHhAZduKRVQGAQB3bcgzHUOEA9aktgxOT1nBYAALDoGACHAwIvOIxPNCIYMfkLAwG9tGwgSRv7hFhgGtKwQGJLAABxhATKRi3odE9rVoMOBNg1iAxO4SDOkhwgafoZzCvgYLFcyAEAYYW8Mk0kBK7GADAqjAB3AQAoTQzTTpiobFDCGCIlUlcqD4HCKa8xkZXLEQCBATjX7BM0FsYDgUw4kBTiGCDZxOEDs4y/Z8I74gIEAGVIxICSoAsEQ8imEaGCGqOP5AppqtLwgfMExscpeKDlxHJ2371uZ4chMgyXERuwGICg6JMUAObwUTFMRjCuepFNYCAiGgGVUOhzIIkmwFBnDiJERgQoM9Y5aGGEEkVzBAVQVyN9OwhSmHNy5aBkEEkIRVLBjQSEso4G53IVQhIPCJzgQjl0F4AaDOQ8pSiKA79fFGKivHSwO8EhMAcKNTiIkxkrjEB+X6Zjv3OBC6mSIDkGkHAwKXuGCsAHu12JSELITFz0zGACNIQYM2eCSqfKAWFzhNMMyGslsJRYq3qGhVXEbAEhigAjmATyJYwClgbQOHqPBARKHBgEw18yIYxcXbTIKDHFoCBtNKzTYSWv6vlQEDowoYjksGaY0KfMeXmCjSuyoVC4deAm06m4AcrekMBvyzGJB0SVFNIQD7COVhWCLBYZzB1UHwVFFdPMcDpArWgOWMcBPIZiloADV3OBQBFUgAGXvRV3TohqmngNC2mBEC402iA1G7CL0OIQL3jBYdCBCdTnzgwlKYUKo7wYgpLrDHCVDAMom47DuSSonnHUxCNC1FiqK2Dd7iNggbMNJPSqFADvplhgFrQKK4Uc7jBgGCv/BBPSkBRh6MMZgGnQBMVQE1LfXPuoawgWYqaYpCKgAEI/BEKPpoibpGZAUMKMEITDBA9A6iht4Y7y0QwAIkUqKAAUjBA07r3/5DnMAVPDlpgydcCgQoIAUjMAAD9knhDmPCsx4OsYhHTOISm9i6AkhABTKwgaadOMQH+MwAWlvi0qIABMpcpotvEaJ/TMCDE2YEyCRbAIRMgMOUyEAMBnCBCiyABUK6hQUiFCkPr+M/wSgsJez7jwboQAYBAAENZuBUSojgVnPpbIcx4OPPsHcSf+1UMHyggsBeAgg+evNxGXs5xpQCAssj3D/weokV3gSe/t3mWL+BLICiOYDcuG0pToBlUFAVHfcrBAw9pVhMUABe7mg0JlLaMEKf43k6KIELUnCbwSiFcEiuRAT8Va1P1lc2PvAmNTCA5vsW1renCUWOe/tGlf5ug6Wl0OwbS1DmYkjTLxwgZZqklpNMT+IxLNNWpy+RA84YN6ZYhgaHeYquymJiB0FTmjPsdwrt1Qy6xXgACZ4SAgZLU1kcMOtZy7Ss6g4idTUIQGUI8QCEVKQXdr4FAT5BssJaQLrQ4QCDMQHaTt4F0Y2AbwlUYPAJZK0QFagWBzIQb0UOxNxBePY3LiJhVDwgQk5J22h3AINKB6MGhQAAEVm2lpj+ikLqJAQLMiQQatYCAIpEi0SQHYRDAZAZDLjjIB48XWSe1xQQgIvSlTltYW77FHCxlF1ZNYgpU2gsCTDEA4JJppw4YMeKAEAKuhObFeC8WMAtib8vYd+SRv4EYLN+UjTgHQQU1KeJljiBCZTnU7M+oIigwAGIL4H032opFp22wJhgUQAaD+IBA2OYD66eiB0ogAfhFKUP7k4IDKzSR6AAGNwpEXZBLwVgrrrgBGAwcQtoT2YhmL0g0AbA6TIgxylFLCgq64EBaADMYiazJcj9moJ1muZWhUYJokwIEfzpP2RfhMbOLhF/HqL2I4uGJgURgKfTmQI3MIEALCB8d8fLKr4jBETZJKISuFgAd4JLkkAAcQEOIaBl7PcZ4jQB2LMBAgEgK1AAI9BsQWAaARQQMPAhEeBOslEC9yMCJkAfAlYIXBYvATBxgvBsvBQNkkcIk/IqCgg2iv5wT4HiTkfWJ1A1ET6CAwaGSCawfonwP7HEABWwXUEAAS2gFCr1C0A4KsKUNJdmCCZwf/HiAwMkAdLVFD4SAgl3CSNRFQzgAgJAgRIgLdQCEHTDTuS3OBOAaIcwHxOjJi2YRB3HJszwLKZgAkAQADlAABQoCCCwMV7BYYHHRJERDbaGCMZyO+hiahukIk4xK+fAAhCBb79gAASiUen3FFUmH/h0SgDkA/D2JwGkJReQiLXgAS6QIYjiDB4odPNmHc7RFz2ICGhkQwzTX/cWG/c1LhfQX6mgXhvyFK/4bzmIb94Ra4oAQ2n0DBpAegBAioaxaEtjAkZ4CcZSMDQjA/4NAk6zuIRQco2IkFWXI2g4wGACpY1RNQG0YQMogILXQC3dYADdGErFVymhgICSYDlnWB/FWDXhdhhjpSiTAYRH8QrCRDyMEhTfuDjvgj72BFWxtHnSEDgCwHBbpCsFo2+SAABzokXQ4FDe5xRKZykGeWtrAyxVQQFyhACwQ0X+8QvKKAkqUzA4YJAiEDNPiCegwHSlMD9kNTMlAQMnmQJdISFDkxYQiQkJQDMXxSiPdFh2BQ0oB1BxpUXGAQoF0Ege0ExkAyDLRXHxMAEyoGsskIPXtCwq8FaX4AEY2Y89xQE+4ABOVUAG5R/tIHyI0G2RV04pwESi5BvDVgp1Bf6SPLkNJRCFhWdAVDguJzkJf1QCORAqGHBU1GZDE6CPp7AAWnUvubJuJlBmGxAAoWdDe5cJjxkEGfCWPWE97GBqt/CIoAgQfQEKFDBwhrADOdACquUSl4ILBAA7O6khVDl5qNB+sWN5zuADLaCYiKQAITMwzeCGpTADAfBq2qgzwICJ57CLO3mI7MABztl9G3BjI0B4bWkDqkVrQukVFGBttzCS+PgaB+MDbHkMErCBT3E12SYR/4gO3skifqOVepmKB3A3wzifc0GPRvGIPqUzH0cNplcBFMCKtieVd8GdWmEgs4kn1IkKBLAANlACBQBx98iekLYoliEANSGgnPExgqeAln12gccBC5oJEhtAASVZHKd5CXtRku1ZkmDBAHqmFW1UgN9Ri6aAbYKogw75DAYAj5aRAyankRxQoJUAbNX3DpFjHj7ZYCXUH4SjAcagW7BicV0aDQaQmg0GgPaxlLfAVluCl/ZxgCe2AzzQm/pkDDLqTLDHPSNwnx7mAe3nDBxpClnyHNVDOmrRAmxaYqNZEsCICsmFovLoAx/wqC8GWVFaDBnAUFhZMSOgpC+Wc8YQck6KNxQgUqWKW5NipRIBAxVAqq3aEAF4cCsQAgZgArRaqw2BbgAUGiDwAMbpqzKxAzaQYAKwAfApGIEAACH5BAgGAAAALAAAAACAAIAAAAf+gEKCg4SFhoeIiYqLjI2Oj5CRkoYAFjo2JQuTm5ydno4WKhcKPysTKwKfqqusjiwOAz+npx2nmqwWKQCtvKonHgOmKx3DE8SnBK0OKxs2yb3QkCkgDcOmtNa1PwitEbMrJRq70eSHGiXCxOoTtOwrBTytF9anKwMh8eXlOhQr6e7qihVTwKtEu2MrFIQQoa8XjRLVagWsla2dPV4wjFWkOIBBw1UnIsjKVqwdO5PgWgFAUZHkKRlAPnYKUaCixVrYcBYz0EoExZ83VzRwkE/mIwvzbp4UiBOguxGtEPwAqtQajltGGekoUHWdRaUdHLSyUEqn2aAesioSESAdvZP+TlFSPBWi1YK3cUt+MzBDraETBuXmXHq2oo5WAgDqLWlzwg6sfh/sCIrTLFOSFFdA/sTAlGWqiovV8CtEQ4xrTLERbonzBw4HKRiyMvGt6eXCp0yoVVGWnl7FQIv9KGHiQ7QAGudOpGf5lA2jIfydRbiO9QoUATjoSwFjMVXfla25+BgduMnCAWGokN1QxAt0g1lXXRFAXw1/glWDVs/+E4ISMjggADeJCICDeV05RR85OvwjH3DDdFBBUYV8cMIkGeg0QQk9WJCIDgqsttwxq1UADQ0k5PSbihQZYJwhImjQwgoRTAJADiZN8AMFKmRwCARtycdYdaeowMsJIQ7+WVtQKHhkCAI9bIDfBZtISZ01OQRwoSELwBDcT41ZkwIrIshw20lfslOCdoXwUAGOApWwyYGUnTSCh4VA4A1mKH2FAp6fuKDgXKgFRF9/gjAQ4mAwbDIPmISy04EHFAqiwjXxVfdTCeN00iB4aFZlZCEsmJnjMCh0CgkICZJoTyqFpJDkZ+fNIlYnH2BQUnMTTZDDmIXQBhdrlToSwHeQWrOCC5VyMMBgLAq0wgudGODOkoP6uhkCBrjVFDYERkJbaoQpiAMLFRrE3G0CbQDBJuUVI9EsvebwQCEPbPAtgiuwGQkDeWlqUweHEYIAnSzmSAxUksyAo2Kt3kuIDiT+eOudP5s5QkAJ1JU7rDo/VKDqBwfadJmkP8AKyZ5epWkKtYTwZgxcCBpT8CQ8vABCTXJdPAHDg1igwGeYCYMDooukMBKYq9Xj5CAhyALhiChM+AkEKuDwD7/EuKDqApDWSUxdjxjUa6Yd1Bez1N5ZpIAJxXqiQ8leDbogIZ2Vm9o1OYS7yAvSKZXcKQb012CdAk1AVDQihPAwn0utYCIhyBU9FzZqM0InuZjl4K8QYOu9XAnoLvIBoJN8MGPP8/4wqiAiBOYVnx10sKUih5sc3Ao3C4GAlOZJ6wDSg/AggAvdycCICH0lEkLYtZkCrCAsDLm3O7cqIjvn67RQiLX+aLJGcCIsjJADpjwtQkMBQUxvyAND1zyMu4R4gDhQBfhtSApbi/4O6j1wy8cSkjFBPOACUsNGjRahgXpQoHeEOAEFojUXEBACABO8WHVW0ANFtEA1D5rA5Kg3MxENQwGlKwQCIuAtWjxnEdHRCUx+xLFs1aN3/EvYRjagqghGRFIDJAb9BmEqy00AhYdgAJxsQxGyKaICIJxAWgwBgQxqSiMK8NsHQygQmBkigEwz2QqeJoTOfGtIGROBC9q2FAgeonJMM8DtBgEBL0FMIEATQvWa5pIJpM8QdFtRNmDAHh4syjq8exL4WAeOZ3hwcPTYQExIxRV5LUYChGCVdSz+M0dBSMAz7GqKE4UARZpVJHODQEAwZkeREqhAf4noQW+Cg4GM5S4g2PDeIICwtJOtQzeFoAEONpCDDpSCjwp4lyB4wJIRnaIEiIIAwhQkgwIuggMJcBBFUCAxQowAkjrRDCFqGLCSyAkRAODBCTiwAB2ooAcBAIEBcABMQQirnN2EnQw8lhA3QmIBdMuJAjppSLsRQ5eCABwFZ3GKTk5CBFY6EyoFgRwFrcBFn2ALpjSyoR7qoGbGdKQI4re3iZBxExrA1GWSWYjDfWWinrjUW4YB027R6m6CWMaXUmNBT1jrQfUUBAIeppgO8kIHCcyM+0BnMVqggD17hFbiFND+w0icQBYC6wBLvXkta2SPF5ei1ylw0EPwMYUiXhRCd8I4u89JIoa7ssYIBXGXUF20HBUgV1CFIABhmCIHCsCBDEDgvoqiJx2vm8RPO2aKFw3iAt8whgIcG419MkUBlRLAAljwAQgQTxB9TZhJ8hgJHqRIMH+kXlncMa2GcCA4E0gsJCDAlftNAAec4B/3ZPtNgHRAeR/R6VJwuwkW6MAEFRiBAWQwgKH5wx8F+CwjPMDWU/iNB0tkxw+s2QsE8CxCP5gkK3iAAA48QAAvqKojFgvEYVAgTx4YQQtKAAMFIPQjx+LoCr5KmkRICT+ApYABQKCyRKiXHBxYrTEa1V/+9dGAACfggXQbXIjNEWMFDqWwhjlhg8UUeMMgngQCjusAeZbgwyFOsYpXzOIWu/jFMI6xjGdM4xrb+MY4znFDZlCBA+ggBRKIsI5VTAC/+mOBQwYxABZ1jBxMWMXkPbCGHyUQFGsYAjo4QAVccIESDAAFJPCBI1WsgptQySgvCIILKhCCH/uofl3FBjw2cQIIxM0XDmoA6sohgoyodKnwAec5JzGPGChgACVowZrbnAIWzODNhA4OackRgpsooD8nsBhFYPqIGyyFZvX4QQ7EG4nQoukH+YxGBg55DP5WenDYsLIjylwo6SRur4dI5wx6GMhnSnkV39xIJ9X1nQL+QFoSn7xiS1I7AwYcwAE3uAAFYIACYsg2peEJyz4KdYqJcqCFxQDuJkwrpHV0ANLVE0aOBmAIYgvnpKx4QCV/0rdCrBE0w5CtJMyUJsWkFQfmdgsE67qatK6CAIuyyCiFYIGASQqWkehBVxhz3wNMzRTEJcQyvjIBf3KCBZMBJTFSK4h796ynnfhkrVZDgnAhoHacG2MhyuSdkK3CNNxOSCdZsLRTcfcRIzVhU8bG1TplsRBIipYB9lzaNRZtAksVAr9Vqo6MC4EANjABAzRLgBnw4NeCYGHd4sPuQRBgtUpKwPuIqhgSWC0SAFAB8PSmb7jiu3cs/MYKfkACFMD+gAIXuIENop5D+VGkwMHGjcxjBfOzTMAHU2zEBw7QneCtQN8SAA02rP4BSTEmssPgrxBE0EzrmWXQDI+L5zsQgxQOYgGlJ1RCGAGAA0Ck1tXRNw+epSRr9M4BX9nIMH4w5kHAUUUocR/wkT8LGMByY3qRSNkV8QHPQIsYCoi6ECA7s72l1rsJGx0iVG5QdaOeB1b6GC1KUCweBKA39UA9ItLdfTAZAOL33qhiMGl87tlk4ePUe5WhEWR0S9fDfocgAM8yMx1AcodAA9yTAwBIUaaXDV/FATZkSh0AcYJwS0ERSRTSW+X0W8o0cyagAMIwaYbQQFSXNhxochp0NIT+QGVMtBHjYWDpV26n8FUZsFaDoyEDUHzFYwLBMFeIcABT5QCURQgZMCNn1DKu1yDQMyzIsAgmUIMuAxkqlzhDUgAGVwgLIISGAEUJMQICIF0ssErahA2J9TuncjYrgHKJwEy/UVIrIIODkDeWdBM/EAB35ghAoAMEAHZX6HACMVGadDka6A+phgjjMiImM1HCJXIqMgCytgoSUESHdQot0B+09oR8cl+KgH4lVRUnNQI5x0SncAH8NxYjkEAKIy8IOAjyxoU31S+PEFbZ4h2bgYo7FSkrcAE0sAos4A3BMyI4UIK+swGg9os/Ewnbg3wVMVAX5IvQkhx+NQAmkGH+j3ACKQI5elMCylgmIHQlOlFv/4R26HEtOKA/G3cy4RNOOGADTNcIELCLLFI4hcAqTuEy1jYJG4eNWfVMyigEJoB7fPJ5NxgJIvA4VGEbAYAovfV5myR/j8ADXuJ/ZySOsRIiV7QaAhEEmzAr1kMLsiUCwVYuWGgMrhcJOXQmUoUDe3YCqwOP7VULFukIFiYXOJBqIpAA6mdE/oBrkaBTJ9NHxDAALSkEKuCQ4DgMDLZv/jc8KrRPu+hMDjgJVimA8VEAbhQSa7g1KLAJIMBKKyADjcgCGcE6OXIKk6UKH1BtOoQsP+AAVbUA3TKXw/CHilBRAoED/qQCyOI/F/b+c6WWii2xeo10CCmQl+RCDBy4CB4gEA+ENCu0UaFEEiswgZ0QVh/JPcZgAurFAQFwPr3yA/XICGXWAS2gfULwAglXgcjCaZ+QV0vydNdyChQwjIeQMy1QEwjRiI1AACrAjQQwI2EZNtnQidHQW84kVSADAmK4TA/gADJwPpcoYh3WloJzE/pIDokHMZ9JIj+QAEs5cwTAl5BwAg5QMUTDVhVBAZG5CiiJLU+HhT9wAa7ZCg8QAdUlOkHBkR/hnJR4JkWTk6tgASbQD3HBNL+4EwWpD7aZkFPYDuJGnxJQARQwEkHBSALznVlxkJRRigIhh5+QAVrTj2v4hgpCmx/+IQAOeYxy4aKp00vHAIfvqSycaRQWMEE3epSzY1TEqE1to5zroACGKRM8gIqtkhr61gmFp0G5aYf3p2KwOXGa4nGbADgfqaLJUjtEuWEfAAKaFh9JCgmVZofOaA0GcJ4ppoD9hg1u5QmltCL5UQw5EKYrJgIVUDvlaAo/sISe0BbV9aAjMJ8sdgIVlSnqGQlbNHR/emEt4KYyxgEj4Kft4GStMHULNXwgQKk1hgAVgILqsAG8sEpAJBcFEACgimMioAN5aXWqwGoCdIchEKFJViEmsKMPBZxwkZQVMKe5KhMQ0ACsVQAGYALCOqxGcQIbAAMREAIP8GTM+hEi0KgDahEIADs=', type : 'image/gif' },
	/* http://wpplus.endorph.net/resources/png/reload.png */ reload : { data : 'iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAllJREFUeNrslk1IG0EUx1dTAoIgeAoEhIJXIRAopAR60ktALx5NSUVTv4KIorVRU/PRhNYeRNA2TTVoK5QIXjwIYo6CwUJBEARPgYVAQBAEITAT/wPT8tzdbsy29NIO/JjN7nvv/2Yzb942VKtV5W+Mhv9CdMRT71ownYAroIISKIIyKMy9mPz+w/aBUYBYcqkJE5ufnaqYCSHJG0wPgQ24NY+nwU+hRq3zYuKNnXN+CHLi2kxIJAK7MlA0JPDsLbXVCfEqzwAP6Aa5SDxlKgabIlA0eLV+d4Tmo699yMZPMmsHraZCHEL6FT0BY4ZC4UjcxhlPAkVSBl2xhZclUyHGVWkfAWfEP4yYLTohZOABHSSrSGJxTq2182B3CmZhG8UcIv6twKfbdfQmxiVI32eLJ2MLn8h1fib86hSXHfJWN9i+I8QYcxH//FIqxqzUFuLsE6FHRityEvui1SJGnHPy06kTQiZ/5KjRxGFGm0Elf2Tbb6yojcQpGgixM6BIvKPjkzZrQsxH4pzrhBjj+0CROIC/XpGhsQkv/NwkzoHRq8uDC7LsZHBk3HFfEdg2wWeF+F+DbZ1QenWZicIjhg6wNzAUqikGm2ZxCAMXPVgR89LwrMu8X9mBwS4xdoPj/uBo769E8Eyca8ei4IlfASybNr7AwLDoRUfApYkpmtk3SUX2HzetFVKDj7OZNbVmh33a/7wZ0xd5hNQzCqBnc/1Dqa5W7n8WDIheCGrVlfgvomBtayNdsfTN0BcYFA2sU65OvCrRn+zy++ACfAUHn7Mfr/+tz61bAQYAhUAI7leNTh8AAAAASUVORK5CYII=', type : 'image/png' },
	/* http://wpplus.endorph.net/resources/png/wp_plus.png */ wp_plus_logo : { data : 'iVBORw0KGgoAAAANSUhEUgAAAEwAAAAfCAYAAAE6ihvkAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABN5JREFUeNpi/P//PwMxgAlKMwOxIhAbI8nB2HLICg2A+D4Qv8ZlIiOxVgMEEFEKmbCIGeNSZIxNEgZYoPRZfNYBBBADyE1AbAzEwkhsEC0BxPJIYiDMjSQPw3IwNrKNIGcpINkujeYSZDYnEIsCsRKUr4TsfHQNxli8BBL7AmV/B+JHUCwHpYmOI2OC4QUEAAFEdIQTmx7VoDbzArE+NG2KIEUtM5TNjyO61ZANuwVlf4aGISj9vkFS/BeIXwLxR6hXtQmlHxh4BsRSBNIUB5R2QBKTAutFSi9sUFoJS1qSQWIrosmpwdjIeUQXSt9DjiAoLQ5Ng8bQLExRbMoA8RNiYpOJhFIILwAIIJjL0KP8ExDfxpJg0dWdB+J/0AiQhKrTgmY3BqIKByKCTBSazc5iKa8+IyVHVSDmw5F136PFHwc0WV4H4m843CAHVXcLV7DCymtZNPoiNKPBAB9SaKKDX2j8H1BaE4jZSM3lyOAxEItB2WLQUPmD5DM5pKgmFfyjxGGvkLLVJ7R0IgrF+NLMHzS+GJL+P6Q4jAWL2AsglgDiy+SkWbQM8ouIxP+I1qW/MbQsfkINw/A5DOT7/9Do/ofEpwsACMB8FawgDMPQsU08qbiDCIoi/oD4/4d+w0BEVBSG6BQ9KYpjTgcZhJi226xiYKx0WUmbl5dXEydWeT2R6cBcCXFiQk3b5ELhl8D8EnzHpJgCTfE9VFV5RFxGMdKQAPVM/IYQVFrNPnBYCwSGVBSSFv4W2BqRZwhjj0nRAfHdDGHxjk5wDv9NYK6v6JFJXh6rovEABeIQ/z1ZXIaxm4aachHshvm+xXcOtPtcuyb9MSkD/oxYO4zPBdK6gveVfI8V68dMS+IwRecEd7x1pD0twBKutGmBjTvMnGCCEnlaUhf0lC9JQZGUeGVTaTN9KxN5EfEZWT80l6GDHiNXUgHYlBQI7ZcpdZxACGCy/kj2ZBZKFMBOA/IABGEbSW+diW+qC5nc/uieasIc0xizyaXvb0yVyiI6rAY3KWP2FKAZK2xJIAiiy2lgGmhEpEURfUiCvoT//yf0IaiwiARLwQ+Zkp0EYbGyB4/H7J63e4c3IN6xe3t7M7Nv5r1c9YtAdPg1/6cWiq4p/B607OOUqlN4JHspc7+Ik7aptN6maXtkd0CcqoaYRYA+IwFSlaWU9wOO2Co0w3Qf2oKmZ+zAeIZgSXttmTUlp3OG9TI445q6R18E1UG5MN/57IOuyBw6lueuQCdYUicpBUAJapkSlLOYmkNX5twLH460rRCLLGrN0sKQtNXNL8nAKYzt01y8nzu0i5XQr21SiWZwfZjx2VzrN0pfTAG60EMuqAs6p7l4/5KXOgUmEbNawHpeAlSykdhk0i5lTOLkB8KvMzPWMNjTgLlp2o9vqa5YnP8nYFSaHRP9YltjnIsWa752Ay8dwosnVNKRJFyaXroLzpgUFPAaXP8ApFQomMMiQR8j9Q34cABj7wJov8KabcCRvirO6oKMEZKxwRzkScCjgeVIfQJ2nEDViz33duQ4Iqw9a/D/yAETvTEMHRFTJKeO+W8kUA0y7oczo+NobRJ7FHSnrXA2jGZTKOM2a1rakyw0PunDRnT8dgx2LrbJ4TaJ+izDmvOcIIJ7qViVwCJVLiudbFJ2h1WBfM/K6LB/+aOvj6ti2NsAAAAASUVORK5CYII=', type : 'image/png' },
	/* http://wpplus.endorph.net/resources/css/prettify.css */ prettify : { data : '.pln{color:#000}@media screen{.str{color:#080}.kwd{color:#008}.com{color:#800}.typ{color:#606}.lit{color:#066}.pun,.opn,.clo{color:#660}.tag{color:#008}.atn{color:#606}.atv{color:#080}.dec,.var{color:#606}.fun{color:red}}@media print,projection{.str{color:#060}.kwd{color:#006;font-weight:bold}.com{color:#600;font-style:italic}.typ{color:#404;font-weight:bold}.lit{color:#044}.pun,.opn,.clo{color:#440}.tag{color:#006;font-weight:bold}.atn{color:#404}.atv{color:#060}}pre.prettyprint{padding:2px;border:1px solid #888}ol.linenums{margin-top:0;margin-bottom:0}li.L0,li.L1,li.L2,li.L3,li.L5,li.L6,li.L7,li.L8{list-style-type:none}li.L1,li.L3,li.L5,li.L7,li.L9{background:#eee}', type : 'text/css' },
	/* http://wpplus.endorph.net/resources/png/noavatar.png */ noavatar : { data : 'iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAAH5FsI7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAxdJREFUeNpiLC8v/89ABGBBYjPiU8iEpOg/MQoJKmZC4+NUzIRFDKtibAoZOjo6MBQz4XE/imImAsEHV8xERFiDFQMEECOxMcP4//9/hoqKCryKgJ4jymoGYt1II4XMP378IKhoz549A+lGgABCjhlGBioAJqTkx0Ao2xAC2GKaYoOZ8KRUsgwmJr+QZDDYQEK5AGQwKHwIGQwyh4lEHxF0MROZYY/TYCYKkx2GwUwM1AFwgwECiOgyjFjAQs1sB3IhEwOVwaiBowaOGjhq4KiBNDIQIAAzdpACMAgDUdSK9z+zG6FSKo31J5kcQN5Cx1H8TqGnvdT+S8h333mjCiG1k5jh4dtm9KZOh1pPXRoUb9cquRUGxdu/avK7QfF3/AQl1uMfJ3TgV+c97vZvIQONAv6GRgO3oVlAMzQb+AlVAS6h7RGux2P4J9wJ+9IFYNZebgCEYSCIoum/aJQDCBCfkNjJuIInuHi90WcSFvlEH/ZCf6/1C54WDcw4G/B2RcOMswBfl1vMuNnAqliAGTcL+CtQYcaNBjZFUcy4UcCuEI8Zlw0MOX9gxmUBQ5sCzLhoYErHQiSunN62fsMETG2nMON6gUN6Pcy4VuDQRhQz7i9wSpeMGVcLnNrCY8Z9ARXvFzDjnoCqlx+YcVegDncEKnFlQnuSwI5kn1WAdu5oh0EQhsLwaPb+z7xk2ZLFoBPa0r8At959EvXQWnydhL6eNdTN8vflevoUxLSUgeGuqzi0JkIa3DH043sHaTuuN46sBNnUxobvvaTC9QLOCKlqnMT3rlLhrAAzQtr/cmuZbMCQHj3ObgU6EqQLnDcgAdIVbhRgBOQQuNGAIyCHwkUBekCGwEUDWkCGwlEAeyARcDTAO5AoOCpgDRIJRwf84pXHjVleoXf6UFQqILjWaxEf6dWiEmHHvdfv8fmnJFlgkJj/Mlp3f5p5CvTIlWbeAz1ypZlHQY9caeZl0CNXmnke9MiVZt4IPXK5QcrkcO6QsgicG6QsBmcOKYvCmUHK4nBqSNlwOkjZcDpI2XA6yN2ln+gwYcr1Am6h1l283PhYAAAAAElFTkSuQmCC', type : 'image/png' },
	/* http://wpplus.endorph.net/resources/gif/waiting.gif */ waiting : { data : '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', type : 'image/gif' },
	/* http://wpplus.endorph.net/resources/png/focusedthread.png */ focusedthread : { data : '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', type : 'image/png' },
	/* http://wpplus.endorph.net/resources/png/whirlpool.png */ small_whirl_logo : { data : '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SY612fdm81HWg/x6e8jxPNNkzOk26WSZbvk76K/ayv+lslG+A5Zt+3t79zXtJP3A+wRp0aZ45hT/ZzzGJPIizV6+JT3q/K+UUkoppZ5Tl9rnzXTvZS/51pTrIJewYX0bzb5r+vfUX7X2ebU/rDnUmslszXqN0v99bSO/80ff/EtrIayb9PNrKMs56kf84zG7v5Te6HqW1yytUb8m7mzNaVbmv4r9stz7I1/WPPKc9sIzuc6ebST3XjlnDZd7OSawd7MmvNs6y5nriXWP9WbWmvq6UoX3Ota9TCttV8f0GZBXXqMep8R6JfdJl73upTKfo+6XbG+j/s9aG7ZmP75rNPZXvNzHLegjrPOtCT9WL+yXY17/tyH3IRB7GXXMtcq0VabZ8xrZt/8TQZzR/ZH/R2U+R33+P8X/GX/2/pB24py9GY74M//JWBN+ar36nJd7Avh6VKf0QbdPXs/yyrDRPhP3sz9znXmPynyutvB/30cpn1CmPC8x1jF+MpbRnteGn1Ivwhg3+I8AG9O+EHNt938fc3KP8pj/+X8i8yj1+93/szKfq2P+z7kdO/R+knUt9fEpfYO/iMs8tlX4MbtnGLbk/TrnYcZw4mLntDV7nfgz9yiPlYN/a/EhbSdtyp7ZyP+jMp/zLsh+W9YpfUffzrpij9FYRdxMr+fX/dn7wZpwwpbqlWHUg7mk+zfn8tE3GM/350Z59TDaQN+LTBsTP/Oelbn3tUtoab1APb70v1JKKaWUUkoppZRSSl1NOxERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERGRO+Qfh5eOajemXSYAAAFTbWtCVPrOyv4Af1WJAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB4nO3W4WmDYBSGUQdxEQdxEBdxEAdxEQexvIELt6Yh/4oJ54FDm0/7601szlOSJEmSJEmSJEmSJEmSJEmSJEkf0XEc577vT+c5y7V397+6T/dvXddzHMdzmqbHz+wY/Sz31L11FsuyPF7HMAx/vod077JjlX2zYXatzfs9tX/VN7/+je5ftut7Vjnrn+V6nX37xtm/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MTg6MDQ6MjYgICAgICAgICI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyI+CiAgICAgICAgIDx4bXA6Q3JlYXRvclRvb2w+QWRvYmUgRmlyZXdvcmtzIENTNDwveG1wOkNyZWF0b3JUb29sPgogICAgICAgICA8eG1wOkNyZWF0ZURhdGU+MjAwOS0wNi0wOFQwNjoyMDo0OVo8L3htcDpDcmVhdGVEYXRlPgogICAgICAgICA8eG1wOk1vZGlmeURhdGU+MjAwOS0wNi0wOFQwNjoyMjowMFo8L3htcDpNb2RpZnlEYXRlPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIj4KICAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9wbmc8L2RjOmZvcm1hdD4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAog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', type : 'image/png' },
	/* http://wpplus.endorph.net/resources/png/lightgradient.png */ light_gradient : { data : 'iVBORw0KGgoAAAANSUhEUgAAABQAAAABCAYAAAGplb6zAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAE9JREFUeNpiZmBg0ALiL0AsChBAzEBCEoj/AgQQiKHEAAE/gFgQiKUAAjQk3wYAgDAAw2wWAofw/3UhE0WrVBbXEvfBmvTK+SszoIWecSEezJgOwGiEjp0AAAAASUVORK5CYII=', type : 'image/png' },
	/* http://wpplus.endorph.net/resources/png/greennote.png */ green_note : { data : 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAI+SURBVHjajFLfS5NRGH7O3LLEuUXBJgsagZVKKzcish/MoruthJCgi64qpeimiPoTgiCjGmY33Y22RQheBBFMxVRkc1BKYNDcNJRcKyVta9+3t/N+8xsqZT7wfOe873mfh/O+3xHdMYoC8GIt+iRbsBl0jaq0Hl8Wi7SSx0aUNTCoqooiAb3xWbQ/i2urvVrAt1cgMFIgPvsXWVs2SOa2I3DZI3jl2G6WJvsr8GQoR/81UGXgdlTg8eAS8cqxqpkY4Ks3aXk9t4ZSa1QUpS/9XfG6HSYwGWoRmOsR2t7eSvA1VOJR/wKd/2YVeo4htTDIT8vLsQWkswVNyJyOCNhPBjVqe7MR/sYqhCwZKhRQrtMN0HFih4jEs0hlf0ORB/l8qccq2xE4TgWRDArYakzwHzAjbJ0jrlF0g4K0VGRxh9cmwqNfpUketRcIE68uYnHyKaq3LcN57DYmn0sTyxb4D1rR+WaGWMNa7Qb6la6d3iXCI7NIZXLYfYkw1nsfPz4GUGOIYZ+7CRNdsh1LJc427UTn6ykqt6AbMK+fcYrw8Iw0+YW6K4Thtwlkk1FYTQm4XEDioUCtdSvOeWzcApUM1v2e5vE6EXqXkibLaLxBGBgAMhk5l5X5aHVySKw16g9pNXjSRz/Ui5A6Tm3NThy6RYjeK/3Ww3cJ6fklRIamOBR/NfDcKSU8suBBz3tqO76nnEvN/0Rk8DNutrr4rPQSNwIXvuj/hGkpZPKec9qDk1pxtTuGTUK/p1id/CPAAEz9m+ewRMxsAAAAAElFTkSuQmCC', type : 'image/png' },
	/* http://wpplus.endorph.net/resources/png/rednote.png */ red_note : { data : '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aXJld29ya3MgQ1M0PC94bXA6Q3JlYXRvclRvb2w+CiAgICAgICAgIDx4bXA6Q3JlYXRlRGF0ZT4yMDA5LTA3LTAzVDA2OjQzOjExWjwveG1wOkNyZWF0ZURhdGU+CiAgICAgICAgIDx4bXA6TW9kaWZ5RGF0ZT4yMDA5LTA3LTAzVDA2OjQ0OjQxWjwveG1wOk1vZGlmeURhdGU+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iPgogICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3BuZzwvZGM6Zm9ybWF0PgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAKPD94cGFja2V0IGVuZD0idyI/PgKQ3hsAAAJJSURBVDiNjdBdSJNxFMfx739zobaZTshZEyqULKRUZnRRvlBXkUaYUBdCkA0hiC666CKIoKBAQxAME4KuCqZ1YUQXUQupZKZBIJSKinMpzbdiz6bb8zynC8kXfD3wvznw+f3POYpt1I3H75VS6sNBT3nZyv7Pr37/djwtAUNCf01ZWaaItAQMsW6Fm7/E5Vy+lWyHorNvgkedA2BR5LkcBII6ls1wU1dMKvOtuBwKU2AkliFP6j1qOJqBKWDoBkkb4UZ/RCoP23ClWTAABIrcVtXoj5jFbiuGgGEY6+OH7+ZkIJwQLS4iV0+JeE+LlhDR4stvIJwQb0Onf80K999OSVVBKi5HEra6k0hREVJYiK2udPFXE8ZmEvh6/yAiFatWuPt6UqqOOMhKs6FqPVjKylCZmRjhMAvRKLoJodk4L/tmuXPWpYDlG9x+FZSqwnSydu1Ar87HXlKCVddJ9Pcz19MD7T8ITS/Q0RPm3vkc9d8pgFu+Eak+5sLtTCZ+xs3u3FyS7XbmIxF+Dw2x48044zPzdAQmeVCzX62cWt18PigXju/FnZFMpMJJzp5sUlNSiMZiBH9NYPfPMj4To707RMOlvFUYIEnXdQwRDIGFqIZpmkQ0jeGRUdK75xmditL+eYym2kNrMIC6/qzfgohRc2IfbmcK08VWUJDZJwSnNHyfRmm+XLAuXrrBtaffF0NKD5Dj3AnA2LSGr2uYlitHN8RLAQD1bd8siBgXy/MQgRcfB2n1Fm+KVwUAeFt7LSJiALTVe7bEAP8AjfQcE527Q3sAAAAASUVORK5CYII=', type : 'image/png' },
	/* http://wpplus.endorph.net/resources/png/check.png */ check : { data : 'iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAZRJREFUeNrMl9FxwyAMhoEJMkKvA/TsCeJs4GwQJsgMHSETOBvUGziZwFwHaDOCN2ilnOzDBGOwIRfd6XgI0fcjhAycedrPt8pgKMG34MXEtAv4Fbx+/8iUT1zuAT7AcATPWJihgBMIOS8SAOA3GCrHan0NsyJByM1bAMBLgm9YHOtIRD0rgFJesTQmzS3hlpV/sbS21zPBjT1vI6bdtR15XxNC+6F6ApwRY9hioe17ERmEx3DqCBbEHDJwTADfQZqlQ8SdyanDtQngnVZfmPKDZW4uqL2mhG8cXbQU1NtTwhuHgK3wKD5FHht+L0bhE5hcRYYzsw9MBqbgNhGr4HMCRmYRsRo+JwCDNBTUFHGOAe/7wF9ogVm+oIvgfQYuM3MeMhELjmxBdzi2RMRKONoVBdSek0ciIsDRak7B2oBAWBN7urisgSuoq7w/BaeAPyL0dyV8YOo3oibBnWCy+GD1O7MPSLoupbaOWONGRHc0+QQBozeCMNptnVjEw9vg9R4mL/E0i/g4/bStOkhA6uf5vwADALKXzgaZ61DzAAAAAElFTkSuQmCC', type : 'image/png' },
	/* http://wpplus.endorph.net/resources/png/cross.png */ cross : { data : 'iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAcdJREFUeNrMl4ttgzAQQG1PwARVRyAThGxANggTJBu0bBAmIBuEDQITwAhRJmCD9lxdKrDujO0aNZYspMS+dz+fz1I4jq83kcInh7mFmTHLWpgdzEY+xOAiVzqAD/A5wkyF39AKVKDIJUgBAL/Dp7ZY6zq0VwpQ5O6sAMBzhCcizhhRiWZRAXR5bRHWYJzNGKeYH7llb2GGRBKWX5nNJcwzCBgXckaHThvxwSzZTz0hjY094fYBNR98fA7yrow3tAGbZ06oyR81A98FwGtLKJJpiNUk7hkDHwPgh4VlGTJ/PXBkEiYWvCF++2EqrHBmkSkD3U7BLyBrj0k8OzWarZhYnSPCC4vMXOHZnbnLx/WOcIEyzVBsFZF8XWy4RXammEtkDTgpW4UU9kA4OdR/wr0ViA3nFEhXhKeUAq15NFa03JTdKuJo5ABMYsNRpln0OsXU6dMKMT9Rd4REUE/Ep2HKtDcc75verAkgZ/NMwoqq05HgCdPiVWZHdFvogEPhN8K7LcjamcewwHaJbEQD3U7BR2TN6wD2aBxEn4xP7BsXrdZrMeYp0+jcY7blI/Z5f2/LX+Jh8hJPs4iP05Ky2kuBtZ/n3wIMADaY0ocXEYbsAAAAAElFTkSuQmCC', type : 'image/png' },
	/* http://wpplus.endorph.net/resources/css/jquery.oembed.css */ oembedcss : { data : 'div.oembedall-githubrepos{border:1px solid #DDD;border-radius:4px 4px 4px 4px;list-style-type:none;margin:0 0 10px;padding:8px 10px 0;font:13.34px/1.4 helvetica,arial,freesans,clean,sans-serif;width:452px;background-color:#fff}div.oembedall-githubrepos .oembedall-body{background:-moz-linear-gradient(center top , #FAFAFA, #EFEFEF) repeat scroll 0 0 transparent;background:-webkit-gradient(linear,left top,left bottom,from(#FAFAFA),to(#EFEFEF));;border-bottom-left-radius:4px;border-bottom-right-radius:4px;border-top:1px solid #EEE;margin-left:-10px;margin-top:8px;padding:5px 10px;width:100%}div.oembedall-githubrepos h3{font-size:14px;margin:0;padding-left:18px;white-space:nowrap}div.oembedall-githubrepos p.oembedall-description{color:#444;font-size:12px;margin:0 0 3px}div.oembedall-githubrepos p.oembedall-updated-at{color:#888;font-size:11px;margin:0}div.oembedall-githubrepos ul.oembedall-repo-stats{border:medium none;float:right;font-size:11px;font-weight:bold;padding-left:15px;position:relative;z-index:5;margin:0}div.oembedall-githubrepos ul.oembedall-repo-stats li{border:medium none;color:#666;display:inline-block;list-style-type:none;margin:0 !important}div.oembedall-githubrepos ul.oembedall-repo-stats li a{background-color:transparent;background-position:5px -2px;border:medium none;color:#666 !important;background-position:5px -2px;background-repeat:no-repeat;border-left:1px solid #DDD;display:inline-block;height:21px;line-height:21px;padding:0 5px 0 23px}div.oembedall-githubrepos ul.oembedall-repo-stats li:first-child a{border-left:medium none;margin-right:-3px}div.oembedall-githubrepos ul.oembedall-repo-stats li a:hover{background:none no-repeat scroll 5px -27px #4183C4;color:#FFF !important;text-decoration:none}div.oembedall-githubrepos ul.oembedall-repo-stats li:first-child a:hover{border-bottom-left-radius:3px;border-top-left-radius:3px}ul.oembedall-repo-stats li:last-child a:hover{border-bottom-right-radius:3px;border-top-right-radius:3px}div.oembedall-githubrepos ul.oembedall-repo-stats li.oembedall-watchers a{}div.oembedall-githubrepos ul.oembedall-repo-stats li.oembedall-forks a{}span.oembedall-closehide{background-color:#aaa;border-radius:2px;cursor:pointer;margin-right:3px}div.oembedall-container{margin-top:5px;text-align:left}.oembedall-ljuser{font-weight:bold}.oembedall-ljuser img{vertical-align:bottom;border:0;padding-right:1px}.oembedall-stoqembed{border-bottom:1px dotted #999;float:left;overflow:hidden;padding:11px 0;width:730px;line-height:1;background:none repeat scroll 0 0 #FFF;color:#000;font-family:Arial,Liberation Sans,DejaVu Sans,sans-serif;font-size:80%;text-align:left;margin:0;padding:0}.oembedall-stoqembed a{color:#07C;text-decoration:none;margin:0;padding:0}.oembedall-stoqembed a:hover{text-decoration:underline}.oembedall-stoqembed a:visited{color:#4A6B82}.oembedall-stoqembed h3{font-family:Trebuchet MS,Liberation Sans,DejaVu Sans,sans-serif;font-size:130%;font-weight:bold;margin:0;padding:0}.oembedall-stoqembed .oembedall-reputation-score{color:#444;font-size:120%;font-weight:bold;margin-right:2px}.oembedall-stoqembed .oembedall-user-info{height:35px;width:185px}.oembedall-stoqembed .oembedall-user-info .oembedall-user-gravatar32{float:left;height:32px;width:32px}.oembedall-stoqembed .oembedall-user-info .oembedall-user-details{float:left;margin-left:5px;overflow:hidden;white-space:nowrap;width:145px}.oembedall-stoqembed .oembedall-question-hyperlink{font-weight:bold}.oembedall-stoqembed .oembedall-stats{background:none repeat scroll 0 0 #EEE;margin:0 0 0 7px;padding:4px 7px 6px;width:58px}.oembedall-stoqembed .oembedall-statscontainer{float:left;margin-right:8px;width:86px}.oembedall-stoqembed .oembedall-votes{color:#555;padding:0 0 7px;text-align:center}.oembedall-stoqembed .oembedall-vote-count-post{display:block;font-size:240%;color:#808185;display:block;font-weight:bold}.oembedall-stoqembed .oembedall-views{color:#999;padding-top:4px;text-align:center}.oembedall-stoqembed .oembedall-status{margin-top:-3px;padding:4px 0;text-align:center;background:none repeat scroll 0 0 #75845C;color:#FFF}.oembedall-stoqembed .oembedall-status strong{color:#FFF;display:block;font-size:140%}.oembedall-stoqembed .oembedall-summary{float:left;width:635px}.oembedall-stoqembed .oembedall-excerpt{line-height:1.2;margin:0;padding:0 0 5px}.oembedall-stoqembed .oembedall-tags{float:left;line-height:18px}.oembedall-stoqembed .oembedall-tags a:hover{text-decoration:none}.oembedall-stoqembed .oembedall-post-tag{background-color:#E0EAF1;border-bottom:1px solid #3E6D8E;border-right:1px solid #7F9FB6;color:#3E6D8E;font-size:90%;line-height:2.4;margin:2px 2px 2px 0;padding:3px 4px;text-decoration:none;white-space:nowrap}.oembedall-stoqembed .oembedall-post-tag:hover{background-color:#3E6D8E;border-bottom:1px solid #37607D;border-right:1px solid #37607D;color:#E0EAF1}.oembedall-stoqembed .oembedall-fr{float:right}.oembedall-stoqembed .oembedall-statsarrow{background-image:url(\"http://cdn.sstatic.net/stackoverflow/img/sprites.png?v=3\");background-repeat:no-repeat;overflow:hidden;background-position:0 -435px;float:right;height:13px;margin-top:12px;width:7px}.oembedall-facebook1{border:#1A3C6C solid 1px;padding:0px;font:13.34px/1.4 verdana;width:500px}.oembedall-facebook2{background-color:#627add}.oembedall-facebook2 a{color:#e8e8e8;text-decoration:none}.oembedall-facebookBody{background-color:#fff}.oembedall-facebookBody div{display:inline-block;vertical-align:top}div.oembedall-lanyard{-webkit-box-shadow:none;-webkit-transition-delay:0s;-webkit-transition-duration:0.4000000059604645s;-webkit-transition-property:width;-webkit-transition-timing-function:cubic-bezier(0.42, 0, 0.58, 1);background-attachment:scroll;background-clip:border-box;background-color:transparent;background-image:none;background-origin:padding-box;border-bottom-width:0px;border-left-width:0px;border-right-width:0px;border-top-width:0px;box-shadow:none;color:#112644;display:block;float:left;font-family:\'Trebuchet MS\',Trebuchet,sans-serif;font-size:16px;height:253px;line-height:19px;margin-bottom:0px;margin-left:0px;margin-right:0px;margin-top:0px;max-width:none;min-height:0px;outline-color:#112644;outline-style:none;outline-width:0px;overflow-x:visible;overflow-y:visible;padding-bottom:0px;padding-left:0px;padding-right:0px;padding-top:0px;position:relative;text-align:left;vertical-align:baseline;width:804px}div.oembedall-lanyard .tagline{font-size:1.5em}div.oembedall-lanyard .wrapper{overflow:hidden;clear:both}div.oembedall-lanyard .split{float:left;display:inline}div.oembedall-lanyard .prominent-place .flag:link, div.oembedall-lanyard .prominent-place .flag:visited,div.oembedall-lanyard .prominent-place .flag:hover ,div.oembedall-lanyard .prominent-place .flag:focus,div.oembedall-lanyard .prominent-place .flag:active{float:left;display:block;width:48px;height:48px;position:relative;top:-5px;margin-right:10px}div.oembedall-lanyard .place-context{font-size:0.889em}div.oembedall-lanyard .prominent-place .sub-place{display:block}div.oembedall-lanyard .prominent-place{font-size:1.125em;line-height:1.1em;font-weight:normal}div.oembedall-lanyard .main-date{color:#8CB4E0;font-weight:bold;line-height:1.1}div.oembedall-lanyard .first{margin-left:0;width:48.57%;margin:0 0 0 2.857%}', type : 'text/css' },
};

GM_getResourceText = function(name){
	if(_script_resources[name] !== undefined){
		return _script_resources[name].data;
	}
}

GM_getResourceURL = function(name){
	if(_script_resources[name] !== undefined){
		return 'data:' + _script_resources[name].type + ';base64,' + _script_resources[name].data;
	}
}

// End Compiled Userscript headers

var WhirlpoolPlus = {
	
	//Script Version
	version : '4.5.3',
	
	//Prerelease version- 0 for a standard release
	prerelease : 0,
	
	//Meaningless value to force the script to upgrade
	storageVersion : 10,
	
	//Script changelog
	_changelog : {
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
	_spotlight : '<p>Did you know that Whirlpool Plus includes a sidebar chatbox? If you\'re interested, it can be enabled in WP+ Settings &gt; Forum Display &gt; Sidebar Chatbox.</p>',
	
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
						
						var newVersionText = dataText.split('// @version       ')[1].split('\r\n// @require')[0];
						
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
		orange : { left : '[\'', right : '\']', name : '\'quote\'' },
		blue : { left : '["', right : '"]', name : '"quote"' },
		grey : { left : '[`', right : '`]', name : '`quote`' },
		
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
	
	WhirlpoolPlus.redirects();
	WhirlpoolPlus.init();
	
	if(typeof $ == 'undefined'){
		WhirlpoolPlus.executeNojQuery();
	}else{
		//If this is Firefox 3.6 or Chrome, jQuery cannot bind events to window and document
		// Need to use unsafeWindow and unsafeWindow.document

		// Rebuild jQuery.browser
		// From jQuery.migrate plugin http://code.jquery.com/jquery-migrate-1.1.1.js
		var jQuery = $;
		if(!jQuery.browser){jQuery.uaMatch=function(e){e=e.toLowerCase();var t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}};matched=jQuery.uaMatch(navigator.userAgent);browser={};if(matched.browser){browser[matched.browser]=true;browser.version=matched.version}if(browser.chrome){browser.webkit=true}else if(browser.webkit){browser.safari=true}jQuery.browser=browser}
		
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