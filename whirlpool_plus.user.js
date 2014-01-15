// ==UserScript==
// @name          Whirlpool Plus
// @namespace     WhirlpoolPlus
// @description   Adds a suite of extra optional features to the Whirlpool forums.
// @version       4.5.2
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
// @exclude       http://forums.whirlpool.net.au/archive/*
// @exclude       https://forums.whirlpool.net.au/archive/*
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
// @resource	  noavatar			http://wpplus.endorph.net/resources/png/noavatar.png
// @resource	  waiting			http://wpplus.endorph.net/resources/gif/waiting.gif
// @resource	  focusedthread		http://wpplus.endorph.net/resources/png/focusedthread.png
// @resource	  small_whirl_logo	http://wpplus.endorph.net/resources/png/whirlpool.png
// @resource	  light_gradient	http://wpplus.endorph.net/resources/png/lightgradient.png
// @resource	  green_note		http://wpplus.endorph.net/resources/png/greennote.png
// @resource	  red_note			http://wpplus.endorph.net/resources/png/rednote.png
// @resource	  check				http://wpplus.endorph.net/resources/png/check.png
// @resource	  cross				http://wpplus.endorph.net/resources/png/cross.png
// @resource	  oembedcss			http://wpplus.endorph.net/resources/css/jquery.oembed.css
// ==/UserScript==

//http://wpplus.endorph.net/resources/js/jquery.autosize.js
function load_jQueryAutosize(e,window){var d={className:"autosizejs",append:"",callback:false},g="hidden",c="border-box",k="lineHeight",b='<textarea tabindex="-1" style="position:absolute; top:-9999px; left:-9999px; right:auto; bottom:auto; -moz-box-sizing:content-box; -webkit-box-sizing:content-box; box-sizing:content-box; word-wrap:break-word; height:0 !important; min-height:0 !important; overflow:hidden;"/>',h=["fontFamily","fontSize","fontWeight","fontStyle","letterSpacing","textTransform","wordSpacing","textIndent"],j="oninput",f="onpropertychange",a="onkeyup",i=e(b)[0];i.setAttribute(j,"return");e(i).css(k,"99px");if(e(i).css(k)==="99px"){h.push(k)}e.fn.autosize=function(l){l=e.extend({},d,l||{});return this.each(function(){var r=this,o=e(r),s,x=o.height(),v=parseInt(o.css("maxHeight"),10),p,q=h.length,n,m=0,u=r.value,w=e.isFunction(l.callback);if(o.css("box-sizing")===c||o.css("-moz-box-sizing")===c||o.css("-webkit-box-sizing")===c){m=o.outerHeight()-o.height()}if(o.data("mirror")||o.data("ismirror")){return}else{s=e(b).data("ismirror",true).addClass(l.className)[0];n=o.css("resize")==="none"?"none":"horizontal";o.data("mirror",e(s)).css({overflow:g,overflowY:g,wordWrap:"break-word",resize:n})}v=v&&v>0?v:90000;function t(){var y,A,z;if(!p){p=true;s.value=r.value+l.append;s.style.overflowY=r.style.overflowY;z=parseInt(r.style.height,10);s.style.width=o.css("width");s.scrollTop=0;s.scrollTop=90000;y=s.scrollTop;A=g;if(y>v){y=v;A="scroll"}else{if(y<x){y=x}}y+=m;r.style.overflowY=A;if(z!==y){r.style.height=y+"px";if(w){l.callback.call(r)}}setTimeout(function(){p=false},1)}}while(q--){s.style[h[q]]=o.css(h[q])}e("body").append(s);if(f in r){if(j in r){r[j]=r.onkeyup=t}else{r[f]=t}}else{if(e.isFunction(i[j])){r[j]=t;r.value="";r.value=u}else{o.keyup(t)}}e(window).resize(t);o.bind("autosize",t);t()})}};
//http://wpplus.endorph.net/resources/js/jquery.oembed.js
function load_jQueryoEmbed(e){e.fn.oembed=function(l,k,j){c=e.extend(true,e.fn.oembed.defaults,k);var h=["0rz.tw","1link.in","1url.com","2.gp","2big.at","2tu.us","3.ly","307.to","4ms.me","4sq.com","4url.cc","6url.com","7.ly","a.gg","a.nf","aa.cx","abcurl.net","ad.vu","adf.ly","adjix.com","afx.cc","all.fuseurl.com","alturl.com","amzn.to","ar.gy","arst.ch","atu.ca","azc.cc","b23.ru","b2l.me","bacn.me","bcool.bz","binged.it","bit.ly","bizj.us","bloat.me","bravo.ly","bsa.ly","budurl.com","canurl.com","chilp.it","chzb.gr","cl.lk","cl.ly","clck.ru","cli.gs","cliccami.info","clickthru.ca","clop.in","conta.cc","cort.as","cot.ag","crks.me","ctvr.us","cutt.us","dai.ly","decenturl.com","dfl8.me","digbig.com","http://digg.com/[^/]+$","disq.us","dld.bz","dlvr.it","do.my","doiop.com","dopen.us","easyuri.com","easyurl.net","eepurl.com","eweri.com","fa.by","fav.me","fb.me","fbshare.me","ff.im","fff.to","fire.to","firsturl.de","firsturl.net","flic.kr","flq.us","fly2.ws","fon.gs","freak.to","fuseurl.com","fuzzy.to","fwd4.me","fwib.net","g.ro.lt","gizmo.do","gl.am","go.9nl.com","go.ign.com","go.usa.gov","goo.gl","goshrink.com","gurl.es","hex.io","hiderefer.com","hmm.ph","href.in","hsblinks.com","htxt.it","huff.to","hulu.com","hurl.me","hurl.ws","icanhaz.com","idek.net","ilix.in","is.gd","its.my","ix.lt","j.mp","jijr.com","kl.am","klck.me","korta.nu","krunchd.com","l9k.net","lat.ms","liip.to","liltext.com","linkbee.com","linkbun.ch","liurl.cn","ln-s.net","ln-s.ru","lnk.gd","lnk.ms","lnkd.in","lnkurl.com","lru.jp","lt.tl","lurl.no","macte.ch","mash.to","merky.de","migre.me","miniurl.com","minurl.fr","mke.me","moby.to","moourl.com","mrte.ch","myloc.me","myurl.in","n.pr","nbc.co","nblo.gs","nn.nf","not.my","notlong.com","nsfw.in","nutshellurl.com","nxy.in","nyti.ms","o-x.fr","oc1.us","om.ly","omf.gd","omoikane.net","on.cnn.com","on.mktw.net","onforb.es","orz.se","ow.ly","ping.fm","pli.gs","pnt.me","politi.co","post.ly","pp.gg","profile.to","ptiturl.com","pub.vitrue.com","qlnk.net","qte.me","qu.tc","qy.fi","r.im","rb6.me","read.bi","readthis.ca","reallytinyurl.com","redir.ec","redirects.ca","redirx.com","retwt.me","ri.ms","rickroll.it","riz.gd","rt.nu","ru.ly","rubyurl.com","rurl.org","rww.tw","s4c.in","s7y.us","safe.mn","sameurl.com","sdut.us","shar.es","shink.de","shorl.com","short.ie","short.to","shortlinks.co.uk","shorturl.com","shout.to","show.my","shrinkify.com","shrinkr.com","shrt.fr","shrt.st","shrten.com","shrunkin.com","simurl.com","slate.me","smallr.com","smsh.me","smurl.name","sn.im","snipr.com","snipurl.com","snurl.com","sp2.ro","spedr.com","srnk.net","srs.li","starturl.com","su.pr","surl.co.uk","surl.hu","t.cn","t.co","t.lh.com","ta.gd","tbd.ly","tcrn.ch","tgr.me","tgr.ph","tighturl.com","tiniuri.com","tiny.cc","tiny.ly","tiny.pl","tinylink.in","tinyuri.ca","tinyurl.com","tk.","tl.gd","tmi.me","tnij.org","tnw.to","tny.com","to.ly","togoto.us","totc.us","toysr.us","tpm.ly","tr.im","tra.kz","trunc.it","twhub.com","twirl.at","twitclicks.com","twitterurl.net","twitterurl.org","twiturl.de","twurl.cc","twurl.nl","u.mavrev.com","u.nu","u76.org","ub0.cc","ulu.lu","updating.me","ur1.ca","url.az","url.co.uk","url.ie","url360.me","url4.eu","urlborg.com","urlbrief.com","urlcover.com","urlcut.com","urlenco.de","urli.nl","urls.im","urlshorteningservicefortwitter.com","urlx.ie","urlzen.com","usat.ly","use.my","vb.ly","vgn.am","vl.am","vm.lc","w55.de","wapo.st","wapurl.co.uk","wipi.es","wp.me","x.vu","xr.com","xrl.in","xrl.us","xurl.es","xurl.jp","y.ahoo.it","yatuc.com","ye.pe","yep.it","yfrog.com","yhoo.it","yiyd.com","youtu.be","yuarel.com","z0p.de","zi.ma","zi.mu","zipmyurl.com","zud.me","zurl.ws","zz.gd","zzang.kr","›.ws","?.ws","?.ws","?.ws","?.ws","?.ws","?.ws","?.ws","?.ws","?.ws","?.ws"];if(e("#jqoembeddata").length===0){e('<span id="jqoembeddata"></span>').appendTo("body")}return this.each(function(){var n=e(this),r=(l&&(!l.indexOf("http://")||!l.indexOf("https://")))?l:n.attr("href"),s;if(j){c.onEmbed=j}else{if(!c.onEmbed){c.onEmbed=function(t){e.fn.oembed.insertCode(this,c.embedMethod,t)}}}if(r!==null){for(var q=0,m=h.length;q<m;q++){var p=new RegExp("://"+h[q]+"/","i");if(r.match(p)!==null){var o=e.extend({url:"http://api.longurl.org/v2/expand",dataType:"jsonp",data:{url:r,format:"json"},success:function(t){r=t["long-url"];s=e.fn.oembed.getOEmbedProvider(t["long-url"]);if(s!==null){s.params=d(c[s.name])||{};s.maxWidth=c.maxWidth;s.maxHeight=c.maxHeight;a(n,r,s)}else{c.onProviderNotFound.call(n,r)}}},c.ajaxOptions||{});e.ajax(o);return n}}s=e.fn.oembed.getOEmbedProvider(r);if(s!==null){s.params=d(c[s.name])||{};s.maxWidth=c.maxWidth;s.maxHeight=c.maxHeight;a(n,r,s)}else{c.onProviderNotFound.call(n,r)}}return n})};var c;e.fn.oembed.defaults={maxWidth:null,maxHeight:null,includeHandle:true,embedMethod:"auto",onProviderNotFound:function(){},beforeEmbed:function(){},afterEmbed:function(){},onEmbed:false,onError:function(){},ajaxOptions:{}};function b(h,j){j=j?j:"";return h?b(--h,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz".charAt(Math.floor(Math.random()*60))+j):j}function g(m,l){var j=m.apiendpoint,h="",k;j+=(j.indexOf("?")<=0)?"?":"&";j=j.replace("#","%23");if(m.maxWidth!==null&&(typeof m.params.maxwidth==="undefined"||m.params.maxwidth===null)){m.params.maxwidth=m.maxWidth}if(m.maxHeight!==null&&(typeof m.params.maxheight==="undefined"||m.params.maxheight===null)){m.params.maxheight=m.maxHeight}for(k in m.params){if(k==m.callbackparameter){continue}if(m.params[k]!==null){h+="&"+escape(k)+"="+m.params[k]}}j+="format="+m.format+"&url="+escape(l)+h;if(m.dataType!="json"){j+="&"+m.callbackparameter+"=?"}return j}function f(j,k,h){e("#jqoembeddata").data(k,j.code);c.beforeEmbed.call(h,j);c.onEmbed.call(h,j);c.afterEmbed.call(h,j)}function a(m,j,u){if(e("#jqoembeddata").data(j)!=undefined&&u.embedtag.tag!="iframe"){var k={code:e("#jqoembeddata").data(j)};f(k,j,m)}else{if(u.yql){var v=u.yql.from||"htmlstring";var l=u.yql.url?u.yql.url(j):j;var t="SELECT * FROM "+v+' WHERE url="'+(l)+'" and '+(/html/.test(v)?"xpath":"itemPath")+"='"+(u.yql.xpath||"/")+"'";if(v=="html"){t+=" and compat='html5'"}var q=e.extend({url:"http://query.yahooapis.com/v1/public/yql",dataType:"jsonp",data:{q:t,format:"json",env:"store://datatables.org/alltableswithkeys",callback:"?"},success:function(D){var y;if(u.yql.xpath&&u.yql.xpath=="//meta|//title|//link"){var E={};if(D.query.results==null){D.query.results={meta:[]}}for(var C=0,z=D.query.results.meta.length;C<z;C++){var A=D.query.results.meta[C].name||D.query.results.meta[C].property||null;if(A==null){continue}E[A.toLowerCase()]=D.query.results.meta[C].content}if(!E.hasOwnProperty("title")||!E.hasOwnProperty("og:title")){if(D.query.results.title!=null){E.title=D.query.results.title}}if(!E.hasOwnProperty("og:image")&&D.query.results.hasOwnProperty("link")){for(var C=0,z=D.query.results.link.length;C<z;C++){if(D.query.results.link[C].hasOwnProperty("rel")){if(D.query.results.link[C].rel=="apple-touch-icon"){if(D.query.results.link[C].href.charAt(0)=="/"){E["og:image"]=l.match(/^(([a-z]+:)?(\/\/)?[^\/]+\/).*$/)[1]+D.query.results.link[C].href}else{E["og:image"]=D.query.results.link[C].href}}}}}y=u.yql.datareturn(E)}else{y=u.yql.datareturn?u.yql.datareturn(D.query.results):D.query.results.result}if(y===false){return}var B=e.extend({},y);B.code=y;f(B,j,m)},error:c.onError.call(m,j,u)},c.ajaxOptions||{});e.ajax(q)}else{if(u.templateRegex){if(u.embedtag.tag!==""){var p=u.embedtag.flashvars||"";var x=u.embedtag.tag||"embed";var o=u.embedtag.width||"auto";var r=u.embedtag.nocache||0;var w=u.embedtag.height||"auto";var h=j.replace(u.templateRegex,u.apiendpoint);if(!r){h+="&jqoemcache="+b(5)}if(u.apikey){h=h.replace("_APIKEY_",c.apikeys[u.name])}var n=e("<"+x+"/>").attr("src",h).attr("width",o).attr("height",w).attr("allowfullscreen",u.embedtag.allowfullscreen||"true").attr("allowscriptaccess",u.embedtag.allowfullscreen||"always").css("max-height",c.maxHeight||"auto").css("max-width",c.maxWidth||"auto");if(x=="embed"){n.attr("type",u.embedtag.type||"application/x-shockwave-flash").attr("flashvars",j.replace(u.templateRegex,p))}if(x=="iframe"){n.attr("scrolling",u.embedtag.scrolling||"no").attr("frameborder",u.embedtag.frameborder||"0")}var k={code:n};f(k,j,m)}else{if(u.apiendpoint){if(u.apikey){u.apiendpoint=u.apiendpoint.replace("_APIKEY_",c.apikeys[u.name])}q=e.extend({url:j.replace(u.templateRegex,u.apiendpoint),dataType:"jsonp",success:function(z){var y=e.extend({},z);y.code=u.templateData(z);f(y,j,m)},error:c.onError.call(m,j,u)},c.ajaxOptions||{});e.ajax(q)}else{var k={code:j.replace(u.templateRegex,u.template)};f(k,j,m)}}}else{var s=g(u,j),q=e.extend({url:s,dataType:u.dataType||"jsonp",success:function(z){var y=e.extend({},z);switch(y.type){case"file":case"photo":y.code=e.fn.oembed.getPhotoCode(j,y);break;case"video":case"rich":y.code=e.fn.oembed.getRichCode(j,y);break;default:y.code=e.fn.oembed.getGenericCode(j,y);break}f(y,j,m)},error:c.onError.call(m,j,u)},c.ajaxOptions||{});e.ajax(q)}}}}function d(k){if(k===null){return null}var h,j={};for(h in k){if(h!==null){j[h.toLowerCase()]=k[h]}}return j}e.fn.oembed.insertCode=function(k,j,h){if(h===null){return}if(j=="auto"&&k.attr("href")!==null){j="append"}else{if(j=="auto"){j="replace"}}switch(j){case"replace":k.replaceWith(h.code);break;case"fill":k.html(h.code);break;case"append":k.wrap('<div class="oembedall-container"></div>');var m=k.parent();if(c.includeHandle){e('<span class="oembedall-closehide">&darr;</span>').insertBefore(k).click(function(){var r=encodeURIComponent(e(this).text());e(this).html((r=="%E2%86%91")?"&darr;":"&uarr;");e(this).parent().children().last().toggle()})}m.append("<br/>");try{h.code.clone().appendTo(m)}catch(o){m.append(h.code)}if(c.maxWidth){var l=m.parent().width();if(l<c.maxWidth){var q=e("iframe",m).width();var n=e("iframe",m).height();var p=q/l;e("iframe",m).css("max-width",q/p);e("iframe",m).css("max-height",n/p)}else{if(c.maxWidth){e("iframe",m).css("max-width",c.maxWidth)}if(c.maxHeight){e("iframe",m).css("max-height",c.maxHeight)}}}break}};e.fn.oembed.getPhotoCode=function(h,j){var k,l=j.title?j.title:"";l+=j.author_name?" - "+j.author_name:"";l+=j.provider_name?" - "+j.provider_name:"";k='<div><a href="'+h+"\" target='_blank'><img src=\""+j.url+'" alt="'+l+'"/></a></div>';if(j.html){k+="<div>"+j.html+"</div>"}return k};e.fn.oembed.getRichCode=function(h,j){var k=j.html;return k};e.fn.oembed.getGenericCode=function(h,j){var l=(j.title!==null)?j.title:h,k='<a href="'+h+'">'+l+"</a>";if(j.html){k+="<div>"+j.html+"</div>"}return k};e.fn.oembed.getOEmbedProvider=function(n){for(var o=0;o<e.fn.oembed.providers.length;o++){for(var m=0,h=e.fn.oembed.providers[o].urlschemes.length;m<h;m++){var k=new RegExp(e.fn.oembed.providers[o].urlschemes[m],"i");if(n.match(k)!==null){return e.fn.oembed.providers[o]}}}return null};e.fn.oembed.OEmbedProvider=function(k,l,j,h,n){this.name=k;this.type=l;this.urlschemes=j;this.apiendpoint=h;this.maxWidth=500;this.maxHeight=400;n=n||{};if(n.useYQL){if(n.useYQL=="xml"){n.yql={xpath:"//oembed/html",from:"xml",apiendpoint:this.apiendpoint,url:function(o){return this.apiendpoint+"?format=xml&url="+o},datareturn:function(o){return o.html.replace(/.*\[CDATA\[(.*)\]\]>$/,"$1")||""}}}else{n.yql={from:"json",apiendpoint:this.apiendpoint,url:function(o){return this.apiendpoint+"?format=json&url="+o},datareturn:function(o){if("url" in o.json){return'<img src="'+o.json.url+'" />'}return o.json.html||""}}}this.apiendpoint=null}for(var m in n){this[m]=n[m]}this.format=this.format||"json";this.callbackparameter=this.callbackparameter||"callback";this.embedtag=this.embedtag||{tag:""}};e.fn.oembed.providers=[new e.fn.oembed.OEmbedProvider("youtube","video",["youtube\\.com/watch.+v=[\\w-]+&?","youtu\\.be/[\\w-]+"],"http://www.youtube.com/oembed",{useYQL:"json"}),new e.fn.oembed.OEmbedProvider("youtubeiframe","video",["youtube.com/embed"],"$1?wmode=transparent",{templateRegex:/(.*)/,embedtag:{tag:"iframe",width:"425",height:"349"}}),new e.fn.oembed.OEmbedProvider("wistia","video",["wistia.com/m/.+","wistia.com/embed/.+","wi.st/m/.+","wi.st/embed/.+"],"http://fast.wistia.com/oembed",{useYQL:"json"}),new e.fn.oembed.OEmbedProvider("xtranormal","video",["xtranormal\\.com/watch/.+"],"http://www.xtranormal.com/xtraplayr/$1/$2",{templateRegex:/.*com\/watch\/([\w\-]+)\/([\w\-]+).*/,embedtag:{tag:"iframe",width:"320",height:"269"}}),new e.fn.oembed.OEmbedProvider("scivee","video",["scivee.tv/node/.+"],"http://www.scivee.tv/flash/embedCast.swf?",{templateRegex:/.*tv\/node\/(.+)/,embedtag:{width:"480",height:"400",flashvars:"id=$1&type=3"}}),new e.fn.oembed.OEmbedProvider("veoh","video",["veoh.com/watch/.+"],"http://www.veoh.com/swf/webplayer/WebPlayer.swf?version=AFrontend.5.7.0.1337&permalinkId=$1&player=videodetailsembedded&videoAutoPlay=0&id=anonymous",{templateRegex:/.*watch\/([^\?]+).*/,embedtag:{width:"410",height:"341"}}),new e.fn.oembed.OEmbedProvider("gametrailers","video",["gametrailers\\.com/video/.+"],"http://media.mtvnservices.com/mgid:moses:video:gametrailers.com:$2",{templateRegex:/.*com\/video\/([\w\-]+)\/([\w\-]+).*/,embedtag:{width:"512",height:"288"}}),new e.fn.oembed.OEmbedProvider("funnyordie","video",["funnyordie\\.com/videos/.+"],"http://player.ordienetworks.com/flash/fodplayer.swf?",{templateRegex:/.*videos\/([^\/]+)\/([^\/]+)?/,embedtag:{width:512,height:328,flashvars:"key=$1"}}),new e.fn.oembed.OEmbedProvider("colledgehumour","video",["collegehumor\\.com/video/.+"],"http://www.collegehumor.com/moogaloop/moogaloop.swf?clip_id=$1&use_node_id=true&fullscreen=1",{templateRegex:/.*video\/([^\/]+).*/,embedtag:{width:600,height:338}}),new e.fn.oembed.OEmbedProvider("metacafe","video",["metacafe\\.com/watch/.+"],"http://www.metacafe.com/fplayer/$1/$2.swf",{templateRegex:/.*watch\/(\d+)\/(\w+)\/.*/,embedtag:{width:400,height:345}}),new e.fn.oembed.OEmbedProvider("bambuser","video",["bambuser\\.com/channel/.*/broadcast/.*"],"http://static.bambuser.com/r/player.swf?vid=$1",{templateRegex:/.*bambuser\.com\/channel\/.*\/broadcast\/(\w+).*/,embedtag:{width:512,height:339}}),new e.fn.oembed.OEmbedProvider("twitvid","video",["twitvid\\.com/.+"],"http://www.twitvid.com/embed.php?guid=$1&autoplay=0",{templateRegex:/.*twitvid\.com\/(\w+).*/,embedtag:{tag:"iframe",width:480,height:360}}),new e.fn.oembed.OEmbedProvider("aniboom","video",["aniboom\\.com/animation-video/.+"],"http://api.aniboom.com/e/$1",{templateRegex:/.*animation-video\/(\d+).*/,embedtag:{width:594,height:334}}),new e.fn.oembed.OEmbedProvider("vzaar","video",["vzaar\\.com/videos/.+","vzaar.tv/.+"],"http://view.vzaar.com/$1/player?",{templateRegex:/.*\/(\d+).*/,embedtag:{tag:"iframe",width:576,height:324}}),new e.fn.oembed.OEmbedProvider("snotr","video",["snotr\\.com/video/.+"],"http://www.snotr.com/embed/$1",{templateRegex:/.*\/(\d+).*/,embedtag:{tag:"iframe",width:400,height:330,nocache:1}}),new e.fn.oembed.OEmbedProvider("youku","video",["v.youku.com/v_show/id_.+"],"http://player.youku.com/player.php/sid/$1/v.swf",{templateRegex:/.*id_(.+)\.html.*/,embedtag:{width:480,height:400,nocache:1}}),new e.fn.oembed.OEmbedProvider("embedr","video",["embedr\\.com/playlist/.+"],"http://embedr.com/swf/slider/$1/425/520/default/false/std?",{templateRegex:/.*playlist\/([^\/]+).*/,embedtag:{width:425,height:520}}),new e.fn.oembed.OEmbedProvider("blip","video",["blip\\.tv/.+"],"http://blip.tv/oembed/"),new e.fn.oembed.OEmbedProvider("minoto-video","video",["http://api.minoto-video.com/publishers/.+/videos/.+","http://dashboard.minoto-video.com/main/video/details/.+","http://embed.minoto-video.com/.+"],"http://api.minoto-video.com/services/oembed.json",{useYQL:"json"}),new e.fn.oembed.OEmbedProvider("animoto","video",["animoto.com/play/.+"],"http://animoto.com/services/oembed"),new e.fn.oembed.OEmbedProvider("hulu","video",["hulu\\.com/watch/.*"],"http://www.hulu.com/api/oembed.json"),new e.fn.oembed.OEmbedProvider("ustream","video",["ustream\\.tv/recorded/.*"],"http://www.ustream.tv/oembed",{useYQL:"json"}),new e.fn.oembed.OEmbedProvider("vodpod","video",["vodpod.com/watch/.*"],"http://vodpod.com/oembed.js",{useYQL:"json"}),new e.fn.oembed.OEmbedProvider("vimeo","video",["http://www.vimeo.com/groups/.*/videos/.*","http://www.vimeo.com/.*","http://vimeo.com/groups/.*/videos/.*","http://vimeo.com/.*"],"http://vimeo.com/api/oembed.json"),new e.fn.oembed.OEmbedProvider("dailymotion","video",["dailymotion\\.com/.+"],"http://www.dailymotion.com/services/oembed"),new e.fn.oembed.OEmbedProvider("5min","video",["www\\.5min\\.com/.+"],"http://api.5min.com/oembed.xml",{useYQL:"xml"}),new e.fn.oembed.OEmbedProvider("National Film Board of Canada","video",["nfb\\.ca/film/.+"],"http://www.nfb.ca/remote/services/oembed/",{useYQL:"json"}),new e.fn.oembed.OEmbedProvider("qik","video",["qik\\.com/\\w+"],"http://qik.com/api/oembed.json",{useYQL:"json"}),new e.fn.oembed.OEmbedProvider("revision3","video",["revision3\\.com"],"http://revision3.com/api/oembed/"),new e.fn.oembed.OEmbedProvider("dotsub","video",["dotsub\\.com/view/.+"],"http://dotsub.com/services/oembed",{useYQL:"json"}),new e.fn.oembed.OEmbedProvider("clikthrough","video",["clikthrough\\.com/theater/video/\\d+"],"http://clikthrough.com/services/oembed"),new e.fn.oembed.OEmbedProvider("Kinomap","video",["kinomap\\.com/.+"],"http://www.kinomap.com/oembed"),new e.fn.oembed.OEmbedProvider("VHX","video",["vhx.tv/.+"],"http://vhx.tv/services/oembed.json"),new e.fn.oembed.OEmbedProvider("bambuser","video",["bambuser.com/.+"],"http://api.bambuser.com/oembed/iframe.json"),new e.fn.oembed.OEmbedProvider("justin.tv","video",["justin.tv/.+"],"http://api.justin.tv/api/embed/from_url.json",{useYQL:"json"}),new e.fn.oembed.OEmbedProvider("official.fm","rich",["official.fm/.+"],"http://official.fm/services/oembed",{useYQL:"json"}),new e.fn.oembed.OEmbedProvider("chirbit","rich",["chirb.it/.+"],"http://chirb.it/oembed.json",{useYQL:"json"}),new e.fn.oembed.OEmbedProvider("Huffduffer","rich",["huffduffer.com/[-.\\w@]+/\\d+"],"http://huffduffer.com/oembed"),new e.fn.oembed.OEmbedProvider("shoudio","rich",["shoudio.com/.+","shoud.io/.+"],"http://shoudio.com/api/oembed"),new e.fn.oembed.OEmbedProvider("mixcloud","rich",["mixcloud.com/.+"],"http://www.mixcloud.com/oembed/",{useYQL:"json"}),new e.fn.oembed.OEmbedProvider("rdio.com","rich",["rd.io/.+","rdio.com"],"http://www.rdio.com/api/oembed/"),new e.fn.oembed.OEmbedProvider("Soundcloud","rich",["soundcloud.com/.+","snd.sc/.+"],"http://soundcloud.com/oembed",{format:"js"}),new e.fn.oembed.OEmbedProvider("bandcamp","rich",["bandcamp\\.com/album/.+"],null,{yql:{xpath:"//meta[contains(@content, \\'EmbeddedPlayer\\')]",from:"html",datareturn:function(h){return h.meta?'<iframe width="400" height="100" src="'+h.meta.content+'" allowtransparency="true" frameborder="0"></iframe>':false}}}),new e.fn.oembed.OEmbedProvider("deviantart","photo",["deviantart.com/.+","fav.me/.+","deviantart.com/.+"],"http://backend.deviantart.com/oembed",{format:"jsonp"}),new e.fn.oembed.OEmbedProvider("skitch","photo",["skitch.com/.+"],null,{yql:{xpath:"json",from:"json",url:function(h){return"http://skitch.com/oembed/?format=json&url="+h},datareturn:function(h){return e.fn.oembed.getPhotoCode(h.json.url,h.json)}}}),new e.fn.oembed.OEmbedProvider("mobypicture","photo",["mobypicture.com/user/.+/view/.+","moby.to/.+"],"http://api.mobypicture.com/oEmbed"),new e.fn.oembed.OEmbedProvider("flickr","photo",["flickr\\.com/photos/.+"],"http://flickr.com/services/oembed",{callbackparameter:"jsoncallback"}),new e.fn.oembed.OEmbedProvider("photobucket","photo",["photobucket\\.com/(albums|groups)/.+"],"http://photobucket.com/oembed/"),new e.fn.oembed.OEmbedProvider("instagram","photo",["instagr\\.?am(\\.com)?/.+"],"http://api.instagram.com/oembed"),new e.fn.oembed.OEmbedProvider("yfrog","photo",["yfrog\\.(com|ru|com\\.tr|it|fr|co\\.il|co\\.uk|com\\.pl|pl|eu|us)/.+"],"http://www.yfrog.com/api/oembed",{useYQL:"json"}),new e.fn.oembed.OEmbedProvider("SmugMug","photo",["smugmug.com/[-.\\w@]+/.+"],"http://api.smugmug.com/services/oembed/"),new e.fn.oembed.OEmbedProvider("dribbble","photo",["dribbble.com/shots/.+"],"http://api.dribbble.com/shots/$1?callback=?",{templateRegex:/.*shots\/([\d]+).*/,templateData:function(h){if(!h.image_teaser_url){return false}return'<img src="'+h.image_teaser_url+'"/>'}}),new e.fn.oembed.OEmbedProvider("chart.ly","photo",["chart\\.ly/[a-z0-9]{6,8}"],"http://chart.ly/uploads/large_$1.png?",{templateRegex:/.*ly\/([^\/]+).*/,embedtag:{tag:"img"}}),new e.fn.oembed.OEmbedProvider("circuitlab","photo",["circuitlab.com/circuit/.+"],"https://www.circuitlab.com/circuit/$1/screenshot/540x405/?",{templateRegex:/.*circuit\/([^\/]+).*/,embedtag:{tag:"img"}}),new e.fn.oembed.OEmbedProvider("23hq","photo",["23hq.com/[-.\\w@]+/photo/.+"],"http://www.23hq.com/23/oembed",{useYQL:"json"}),new e.fn.oembed.OEmbedProvider("img.ly","photo",["img\\.ly/.+"],"http://img.ly/show/thumb/$1?",{templateRegex:/.*com\/([^\/]+).*/,embedtag:{tag:"img"}}),new e.fn.oembed.OEmbedProvider("twitgoo.com","photo",["twitgoo\\.com/.+"],"http://twitgoo.com/show/thumb/$1?",{templateRegex:/.*com\/([^\/]+).*/,embedtag:{tag:"img"}}),new e.fn.oembed.OEmbedProvider("imgur.com","photo",["imgur\\.com/gallery/.+"],"http://imgur.com/$1l.jpg?",{templateRegex:/.*gallery\/([^\/]+).*/,embedtag:{tag:"img"}}),new e.fn.oembed.OEmbedProvider("visual.ly","rich",["visual\\.ly/.+"],null,{yql:{xpath:"//a[@id=\\'gc_article_graphic_image\\']/img",from:"htmlstring"}}),new e.fn.oembed.OEmbedProvider("gravtar","photo",["mailto:.+"],null,{templateRegex:/mailto:([^\/]+).*/,template:function(j,h){return'<img src="http://gravatar.com/avatar/'+h.md5()+'.jpg" alt="on Gravtar" class="jqoaImg">'}}),new e.fn.oembed.OEmbedProvider("twitter","rich",["twitter.com/.+"],"https://api.twitter.com/1/statuses/oembed.json"),new e.fn.oembed.OEmbedProvider("urtak","rich",["urtak.com/(u|clr)/.+"],"http://oembed.urtak.com/1/oembed"),new e.fn.oembed.OEmbedProvider("cacoo","rich",["cacoo.com/.+"],"http://cacoo.com/oembed.json"),new e.fn.oembed.OEmbedProvider("dailymile","rich",["dailymile.com/people/.*/entries/.*"],"http://api.dailymile.com/oembed"),new e.fn.oembed.OEmbedProvider("dipity","rich",["dipity.com/timeline/.+"],"http://www.dipity.com/oembed/timeline/",{useYQL:"json"}),new e.fn.oembed.OEmbedProvider("speakerdeck","rich",["speakerdeck.com/.+"],"http://speakerdeck.com/oembed.json",{useYQL:"json"}),new e.fn.oembed.OEmbedProvider("popplet","rich",["popplet.com/app/.*"],"http://popplet.com/app/Popplet_Alpha.swf?page_id=$1&em=1",{templateRegex:/.*#\/([^\/]+).*/,embedtag:{width:460,height:460}}),new e.fn.oembed.OEmbedProvider("pearltrees","rich",["pearltrees.com/.*"],"http://cdn.pearltrees.com/s/embed/getApp?",{templateRegex:/.*N-f=1_(\d+).*N-p=(\d+).*/,embedtag:{width:460,height:460,flashvars:"lang=en_US&amp;embedId=pt-embed-$1-693&amp;treeId=$1&amp;pearlId=$2&amp;treeTitle=Diagrams%2FVisualization&amp;site=www.pearltrees.com%2FF"}}),new e.fn.oembed.OEmbedProvider("prezi","rich",["prezi.com/.*"],"http://prezi.com/bin/preziloader.swf?",{templateRegex:/.*com\/([^\/]+)\/.*/,embedtag:{width:550,height:400,flashvars:"prezi_id=$1&amp;lock_to_path=0&amp;color=ffffff&amp;autoplay=no&amp;autohide_ctrls=0"}}),new e.fn.oembed.OEmbedProvider("tourwrist","rich",["tourwrist.com/tours/.+"],null,{templateRegex:/.*tours.([\d]+).*/,template:function(h,j){setTimeout(function(){if(loadEmbeds){loadEmbeds()}},2000);return"<div id='"+j+"' class='tourwrist-tour-embed direct'></div> <script type='text/javascript' src='http://tourwrist.com/tour_embed.js'><\/script>"}}),new e.fn.oembed.OEmbedProvider("meetup","rich",["meetup\\.(com|ps)/.+"],"http://api.meetup.com/oembed"),new e.fn.oembed.OEmbedProvider("ebay","rich",["ebay\\.*"],"http://togo.ebay.com/togo/togo.swf?2008013100",{templateRegex:/.*\/([^\/]+)\/(\d{10,13}).*/,embedtag:{width:355,height:300,flashvars:"base=http://togo.ebay.com/togo/&lang=en-us&mode=normal&itemid=$2&query=$1"}}),new e.fn.oembed.OEmbedProvider("wikipedia","rich",["wikipedia.org/wiki/.+"],"http://$1.wikipedia.org/w/api.php?action=parse&page=$2&format=json&section=0&callback=?",{templateRegex:/.*\/\/([\w]+).*\/wiki\/([^\/]+).*/,templateData:function(h){if(!h.parse){return false}var j=h.parse.text["*"].replace('href="/wiki','href="http://en.wikipedia.org/wiki');return'<div id="oembed-content"><h3><a class="nav-link" href="http://en.wikipedia.org/wiki/'+h.parse.displaytitle+'">'+h.parse.displaytitle+"</a></h3>"+j+"</div>"}}),new e.fn.oembed.OEmbedProvider("imdb","rich",["imdb.com/title/.+"],"http://www.imdbapi.com/?i=$1&callback=?",{templateRegex:/.*\/title\/([^\/]+).*/,templateData:function(h){if(!h.Title){return false}return'<div id="oembed-content"><h3><a class="nav-link" href="http://imdb.com/title/'+h.ID+'/">'+h.Title+"</a> ("+h.Year+")</h3><p>Starring: "+h.Actors+'</p><div id="photo-wrap" style="margin: auto;width:600px;height:450px;"><img class="photo" id="photo-display" src="'+h.Poster+'" alt="'+h.Title+'"></div>  <div id="view-photo-caption">'+h.Plot+"</div></div>"}}),new e.fn.oembed.OEmbedProvider("livejournal","rich",["livejournal.com/"],"http://ljpic.seacrow.com/json/$2$4?jsonp=?",{templateRegex:/(http:\/\/(((?!users).)+)\.livejournal\.com|.*users\.livejournal\.com\/([^\/]+)).*/,templateData:function(h){if(!h.username){return false}return'<div><img src="'+h.image+'" align="left" style="margin-right: 1em;" /><span class="oembedall-ljuser"><a href="http://'+h.username+'.livejournal.com/profile"><img src="http://www.livejournal.com/img/userinfo.gif" alt="[info]" width="17" height="17" /></a><a href="http://'+h.username+'.livejournal.com/">'+h.username+"</a></span><br />"+h.name+"</div>"}}),new e.fn.oembed.OEmbedProvider("circuitbee","rich",["circuitbee\\.com/circuit/view/.+"],"http://c.circuitbee.com/build/r/schematic-embed.html?id=$1",{templateRegex:/.*circuit\/view\/(\d+).*/,embedtag:{tag:"iframe",width:"500",height:"350"}}),new e.fn.oembed.OEmbedProvider("googlecalendar","rich",["www.google.com/calendar/embed?.+"],"$1",{templateRegex:/(.*)/,embedtag:{tag:"iframe",width:"800",height:"600"}}),new e.fn.oembed.OEmbedProvider("jsfiddle","rich",["jsfiddle.net/[^/]+/?"],"http://jsfiddle.net/$1/embedded/result,js,resources,html,css/?",{templateRegex:/.*net\/([^\/]+).*/,embedtag:{tag:"iframe",width:"100%",height:"300"}}),new e.fn.oembed.OEmbedProvider("jsbin","rich",["jsbin.com/.+"],"http://jsbin.com/$1/?",{templateRegex:/.*com\/([^\/]+).*/,embedtag:{tag:"iframe",width:"100%",height:"300"}}),new e.fn.oembed.OEmbedProvider("jotform","rich",["form.jotform.co/form/.+"],"$1?",{templateRegex:/(.*)/,embedtag:{tag:"iframe",width:"100%",height:"507"}}),new e.fn.oembed.OEmbedProvider("reelapp","rich",["reelapp\\.com/.+"],"http://www.reelapp.com/$1/embed",{templateRegex:/.*com\/(\S{6}).*/,embedtag:{tag:"iframe",width:"400",height:"338"}}),new e.fn.oembed.OEmbedProvider("linkedin","rich",["linkedin.com/pub/.+"],"https://www.linkedin.com/cws/member/public_profile?public_profile_url=$1&format=inline&isFramed=true",{templateRegex:/(.*)/,embedtag:{tag:"iframe",width:"368px",height:"auto"}}),new e.fn.oembed.OEmbedProvider("timetoast","rich",["timetoast.com/timelines/[0-9]+"],"http://www.timetoast.com/flash/TimelineViewer.swf?passedTimelines=$1",{templateRegex:/.*timelines\/([0-9]*)/,embedtag:{width:550,height:400,nocache:1}}),new e.fn.oembed.OEmbedProvider("pastebin","rich",["pastebin\\.com/[\\S]{8}"],"http://pastebin.com/embed_iframe.php?i=$1",{templateRegex:/.*\/(\S{8}).*/,embedtag:{tag:"iframe",width:"100%",height:"auto"}}),new e.fn.oembed.OEmbedProvider("pastie","rich",["pastie\\.org/pastes/.+"],null,{yql:{xpath:'//pre[@class="textmate-source"]'}}),new e.fn.oembed.OEmbedProvider("github","rich",["gist.github.com/.+"],"https://github.com/api/oembed"),new e.fn.oembed.OEmbedProvider("github","rich",["github.com/[-.\\w@]+/[-.\\w@]+"],"https://api.github.com/repos/$1/$2?callback=?",{templateRegex:/.*\/([^\/]+)\/([^\/]+).*/,templateData:function(h){if(!h.data.html_url){return false}return'<div class="oembedall-githubrepos"><ul class="oembedall-repo-stats"><li>'+h.data.language+'</li><li class="oembedall-watchers"><a title="Watchers" href="'+h.data.html_url+'/watchers">&#x25c9; '+h.data.watchers+'</a></li><li class="oembedall-forks"><a title="Forks" href="'+h.data.html_url+'/network">&#x0265; '+h.data.forks+'</a></li></ul><h3><a href="'+h.data.html_url+'">'+h.data.name+'</a></h3><div class="oembedall-body"><p class="oembedall-description">'+h.data.description+'</p><p class="oembedall-updated-at">Last updated: '+h.data.pushed_at+"</p></div></div>"}}),new e.fn.oembed.OEmbedProvider("facebook","rich",["facebook.com/(people/[^\\/]+/\\d+|[^\\/]+$)"],"https://graph.facebook.com/$2$3/?callback=?",{templateRegex:/.*facebook.com\/(people\/[^\/]+\/(\d+).*|([^\/]+$))/,templateData:function(j){if(!j.id){return false}var h='<div class="oembedall-facebook1"><div class="oembedall-facebook2"><a href="http://www.facebook.com/">facebook</a> <a href="'+j.link+'">'+j.name+'</a></div><div class="oembedall-facebookBody"><div>';if(j.picture){h+='<img src="'+j.picture+'" align="left"></div><div>'}if(j.category){h+="Category  <strong>"+j.category+"</strong><br/>"}if(j.website){h+="Website  <strong>"+j.website+"</strong><br/>"}if(j.gender){h+="Gender  <strong>"+j.gender+"</strong><br/>"}h+="</div></div></div>";return h}}),new e.fn.oembed.OEmbedProvider("stackoverflow","rich",["stackoverflow.com/questions/[\\d]+"],"http://api.stackoverflow.com/1.1/questions/$1?body=true&jsonp=?",{templateRegex:/.*questions\/([\d]+).*/,templateData:function(l){if(!l.questions){return false}var k=l.questions[0];var h=e(k.body).text();var j='<div class="oembedall-stoqembed"><div class="oembedall-statscontainer"><div class="oembedall-statsarrow"></div><div class="oembedall-stats"><div class="oembedall-vote"><div class="oembedall-votes"><span class="oembedall-vote-count-post"><strong>'+(k.up_vote_count-k.down_vote_count)+'</strong></span><div class="oembedall-viewcount">vote(s)</div></div></div><div class="oembedall-status"><strong>'+k.answer_count+'</strong>answer</div></div><div class="oembedall-views">'+k.view_count+' view(s)</div></div><div class="oembedall-summary"><h3><a class="oembedall-question-hyperlink" href="http://stackoverflow.com/questions/'+k.question_id+'/">'+k.title+'</a></h3><div class="oembedall-excerpt">'+h.substring(0,100)+'...</div><div class="oembedall-tags">';for(i in k.tags){j+='<a title="" class="oembedall-post-tag" href="http://stackoverflow.com/questions/tagged/'+k.tags[i]+'">'+k.tags[i]+"</a>"}j+='</div><div class="oembedall-fr"><div class="oembedall-user-info"><div class="oembedall-user-gravatar32"><a href="http://stackoverflow.com/users/'+k.owner.user_id+"/"+k.owner.display_name+'"><img width="32" height="32" alt="" src="http://www.gravatar.com/avatar/'+k.owner.email_hash+'?s=32&amp;d=identicon&amp;r=PG"></a></div><div class="oembedall-user-details"><a href="http://stackoverflow.com/users/'+k.owner.user_id+"/"+k.owner.display_name+'">'+k.owner.display_name+'</a><br><span title="reputation score" class="oembedall-reputation-score">'+k.owner.reputation+"</span></div></div></div></div></div>";return j}}),new e.fn.oembed.OEmbedProvider("wordpress","rich",["wordpress\\.com/.+","blogs\\.cnn\\.com/.+","techcrunch\\.com/.+","wp\\.me/.+"],"http://public-api.wordpress.com/oembed/1.0/?for=jquery-oembed-all"),new e.fn.oembed.OEmbedProvider("screenr","rich",["screenr.com"],"http://www.screenr.com/embed/$1",{templateRegex:/.*\/([^\/]+).*/,embedtag:{tag:"iframe",width:"650",height:396}}),new e.fn.oembed.OEmbedProvider("gigpans","rich",["gigapan\\.org/[-.\\w@]+/\\d+"],"http://gigapan.org/gigapans/$1/options/nosnapshots/iframe/flash.html",{templateRegex:/.*\/(\d+)\/?.*/,embedtag:{tag:"iframe",width:"100%",height:400}}),new e.fn.oembed.OEmbedProvider("scribd","rich",["scribd\\.com/.+"],"http://www.scribd.com/embeds/$1/content?start_page=1&view_mode=list",{templateRegex:/.*doc\/([^\/]+).*/,embedtag:{tag:"iframe",width:"100%",height:600}}),new e.fn.oembed.OEmbedProvider("kickstarter","rich",["kickstarter\\.com/projects/.+"],"$1/widget/card.html",{templateRegex:/([^\?]+).*/,embedtag:{tag:"iframe",width:"220",height:380}}),new e.fn.oembed.OEmbedProvider("amazon","rich",["amzn.com/B+","amazon.com.*/(B\\S+)($|\\/.*)"],"http://rcm.amazon.com/e/cm?t=_APIKEY_&o=1&p=8&l=as1&asins=$1&ref=qf_br_asin_til&fc1=000000&IS2=1&lt1=_blank&m=amazon&lc1=0000FF&bc1=000000&bg1=FFFFFF&f=ifr",{apikey:true,templateRegex:/.*\/(B[0-9A-Z]+)($|\/.*)/,embedtag:{tag:"iframe",width:"120px",height:"240px"}}),new e.fn.oembed.OEmbedProvider("slideshare","rich",["slideshare.net"],"http://www.slideshare.net/api/oembed/2",{format:"jsonp"}),new e.fn.oembed.OEmbedProvider("roomsharejp","rich",["roomshare\\.jp/(en/)?post/.*"],"http://roomshare.jp/oembed.json"),new e.fn.oembed.OEmbedProvider("lanyard","rich",["lanyrd.com/\\d+/.+"],null,{yql:{xpath:'(//div[@class="primary"])[1]',from:"htmlstring",datareturn:function(h){if(!h.result){return false}return'<div class="oembedall-lanyard">'+h.result+"</div>"}}}),new e.fn.oembed.OEmbedProvider("asciiartfarts","rich",["asciiartfarts.com/\\d+.html"],null,{yql:{xpath:"//pre/font",from:"htmlstring",datareturn:function(h){if(!h.result){return false}return'<pre style="background-color:000;">'+h.result+"</div>"}}}),new e.fn.oembed.OEmbedProvider("opengraph","rich",[".*"],null,{yql:{xpath:"//meta|//title|//link",from:"html",datareturn:function(j){if(!j["og:title"]&&j.title&&j.description){j["og:title"]=j.title}if(!j["og:title"]&&!j.title){return false}var k=e("<p/>");if(j["og:video"]){var l=e('<embed src="'+j["og:video"]+'"/>');l.attr("type",j["og:video:type"]||"application/x-shockwave-flash").css("max-height",c.maxHeight||"auto").css("max-width",c.maxWidth||"auto");if(j["og:video:width"]){l.attr("width",j["og:video:width"])}if(j["og:video:height"]){l.attr("height",j["og:video:height"])}k.append(l)}else{if(j["og:image"]){var h=e('<img src="'+j["og:image"]+'">');h.css("max-height",c.maxHeight||"auto").css("max-width",c.maxWidth||"auto");if(j["og:image:width"]){h.attr("width",j["og:image:width"])}if(j["og:image:height"]){h.attr("height",j["og:image:height"])}k.append(h)}}if(j["og:title"]){k.append("<b>"+j["og:title"]+"</b><br/>")}if(j["og:description"]){k.append(j["og:description"]+"<br/>")}else{if(j.description){k.append(j.description+"<br/>")}}return k}}})]}String.prototype.md5=function(){var t=function(f,e){var h=(f&65535)+(e&65535);var g=(f>>16)+(e>>16)+(h>>16);return g<<16|h&65535};var s=function(d,c){return d<<c|d>>>32-c};var r=function(w,v,u,j,b,a){return t(s(t(t(v,w),t(j,a)),b),u)};var q=function(j,c,y,x,w,v,u){return r(c&y|~c&x,j,c,w,v,u)};var p=function(j,c,y,x,w,v,u){return r(c&x|y&~x,j,c,w,v,u)};var o=function(j,c,y,x,w,v,u){return r(c^y^x,j,c,w,v,u)};var n=function(j,c,y,x,w,v,u){return r(y^(c|~x),j,c,w,v,u)};var m=function(z){var y,x,w,v,u,g=z.length;var f=1732584193;var e=-271733879;var d=-1732584194;var a=271733878;for(u=0;u<g;u+=16){y=f;x=e;w=d;v=a;f=q(f,e,d,a,z[u+0],7,-680876936);a=q(a,f,e,d,z[u+1],12,-389564586);d=q(d,a,f,e,z[u+2],17,606105819);e=q(e,d,a,f,z[u+3],22,-1044525330);f=q(f,e,d,a,z[u+4],7,-176418897);a=q(a,f,e,d,z[u+5],12,1200080426);d=q(d,a,f,e,z[u+6],17,-1473231341);e=q(e,d,a,f,z[u+7],22,-45705983);f=q(f,e,d,a,z[u+8],7,1770035416);a=q(a,f,e,d,z[u+9],12,-1958414417);d=q(d,a,f,e,z[u+10],17,-42063);e=q(e,d,a,f,z[u+11],22,-1990404162);f=q(f,e,d,a,z[u+12],7,1804603682);a=q(a,f,e,d,z[u+13],12,-40341101);d=q(d,a,f,e,z[u+14],17,-1502002290);e=q(e,d,a,f,z[u+15],22,1236535329);f=p(f,e,d,a,z[u+1],5,-165796510);a=p(a,f,e,d,z[u+6],9,-1069501632);d=p(d,a,f,e,z[u+11],14,643717713);e=p(e,d,a,f,z[u+0],20,-373897302);f=p(f,e,d,a,z[u+5],5,-701558691);a=p(a,f,e,d,z[u+10],9,38016083);d=p(d,a,f,e,z[u+15],14,-660478335);e=p(e,d,a,f,z[u+4],20,-405537848);f=p(f,e,d,a,z[u+9],5,568446438);a=p(a,f,e,d,z[u+14],9,-1019803690);d=p(d,a,f,e,z[u+3],14,-187363961);e=p(e,d,a,f,z[u+8],20,1163531501);f=p(f,e,d,a,z[u+13],5,-1444681467);a=p(a,f,e,d,z[u+2],9,-51403784);d=p(d,a,f,e,z[u+7],14,1735328473);e=p(e,d,a,f,z[u+12],20,-1926607734);f=o(f,e,d,a,z[u+5],4,-378558);a=o(a,f,e,d,z[u+8],11,-2022574463);d=o(d,a,f,e,z[u+11],16,1839030562);e=o(e,d,a,f,z[u+14],23,-35309556);f=o(f,e,d,a,z[u+1],4,-1530992060);a=o(a,f,e,d,z[u+4],11,1272893353);d=o(d,a,f,e,z[u+7],16,-155497632);e=o(e,d,a,f,z[u+10],23,-1094730640);f=o(f,e,d,a,z[u+13],4,681279174);a=o(a,f,e,d,z[u+0],11,-358537222);d=o(d,a,f,e,z[u+3],16,-722521979);e=o(e,d,a,f,z[u+6],23,76029189);f=o(f,e,d,a,z[u+9],4,-640364487);a=o(a,f,e,d,z[u+12],11,-421815835);d=o(d,a,f,e,z[u+15],16,530742520);e=o(e,d,a,f,z[u+2],23,-995338651);f=n(f,e,d,a,z[u+0],6,-198630844);a=n(a,f,e,d,z[u+7],10,1126891415);d=n(d,a,f,e,z[u+14],15,-1416354905);e=n(e,d,a,f,z[u+5],21,-57434055);f=n(f,e,d,a,z[u+12],6,1700485571);a=n(a,f,e,d,z[u+3],10,-1894986606);d=n(d,a,f,e,z[u+10],15,-1051523);e=n(e,d,a,f,z[u+1],21,-2054922799);f=n(f,e,d,a,z[u+8],6,1873313359);a=n(a,f,e,d,z[u+15],10,-30611744);d=n(d,a,f,e,z[u+6],15,-1560198380);e=n(e,d,a,f,z[u+13],21,1309151649);f=n(f,e,d,a,z[u+4],6,-145523070);a=n(a,f,e,d,z[u+11],10,-1120210379);d=n(d,a,f,e,z[u+2],15,718787259);e=n(e,d,a,f,z[u+9],21,-343485551);f=t(f,y);e=t(e,x);d=t(d,w);a=t(a,v)}return[f,e,d,a]};var l=function(g){var f="0123456789abcdef",u="",j,h=g.length*4;for(j=0;j<h;j++){u+=f.charAt(g[j>>2]>>j%4*8+4&15)+f.charAt(g[j>>2]>>j%4*8&15)}return u};var k=function(j){var h=(j.length+8>>6)+1;var y=[],x,w=h*16,v,u=j.length;for(x=0;x<w;x++){y.push(0)}for(v=0;v<u;v++){y[v>>2]|=(j.charCodeAt(v)&255)<<v%4*8}y[v>>2]|=128<<v%4*8;y[h*16-2]=u*8;return y};return l(m(k(this)))};
//www.movable-type.co.uk/tea-block.html
var Tea={};Tea.encrypt=function(c,r){if(c.length==0){return("")}var s=Tea.strToLongs(Utf8.encode(c));if(s.length<=1){s[1]=0}var g=Tea.strToLongs(Utf8.encode(r).slice(0,16));var d=s.length;var j=s[d-1],l=s[0],o=2654435769;var m,i,a=Math.floor(6+52/d),h=0;while(a-->0){h+=o;i=h>>>2&3;for(var b=0;b<d;b++){l=s[(b+1)%d];m=(j>>>5^l<<2)+(l>>>3^j<<4)^(h^l)+(g[b&3^i]^j);j=s[b]+=m}}var f=Tea.longsToStr(s);return Base64.encode(f)};Tea.decrypt=function(f,r){if(f.length==0){return("")}var s=Tea.strToLongs(Base64.decode(f));var g=Tea.strToLongs(Utf8.encode(r).slice(0,16));var d=s.length;var j=s[d-1],l=s[0],o=2654435769;var m,i,a=Math.floor(6+52/d),h=a*o;while(h!=0){i=h>>>2&3;for(var c=d-1;c>=0;c--){j=s[c>0?c-1:d-1];m=(j>>>5^l<<2)+(l>>>3^j<<4)^(h^l)+(g[c&3^i]^j);l=s[c]-=m}h-=o}var b=Tea.longsToStr(s);b=b.replace(/\0+$/,"");return Utf8.decode(b)};Tea.strToLongs=function(c){var a=new Array(Math.ceil(c.length/4));for(var b=0;b<a.length;b++){a[b]=c.charCodeAt(b*4)+(c.charCodeAt(b*4+1)<<8)+(c.charCodeAt(b*4+2)<<16)+(c.charCodeAt(b*4+3)<<24)}return a};Tea.longsToStr=function(c){var b=new Array(c.length);for(var d=0;d<c.length;d++){b[d]=String.fromCharCode(c[d]&255,c[d]>>>8&255,c[d]>>>16&255,c[d]>>>24&255)}return b.join("")};var Base64={};Base64.code="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";Base64.encode=function(n,p){p=(typeof p=="undefined")?false:p;var g,b,a,r,o,k,j,h,i=[],f="",m,q,l;var d=Base64.code;q=p?Utf8.encode(n):n;m=q.length%3;if(m>0){while(m++<3){f+="=";q+="\0"}}for(m=0;m<q.length;m+=3){g=q.charCodeAt(m);b=q.charCodeAt(m+1);a=q.charCodeAt(m+2);r=g<<16|b<<8|a;o=r>>18&63;k=r>>12&63;j=r>>6&63;h=r&63;i[m/3]=d.charAt(o)+d.charAt(k)+d.charAt(j)+d.charAt(h)}l=i.join("");l=l.slice(0,l.length-f.length)+f;return l};Base64.decode=function(n,e){e=(typeof e=="undefined")?false:e;var g,b,a,o,k,i,h,q,j=[],p,m;var f=Base64.code;m=e?Utf8.decode(n):n;for(var l=0;l<m.length;l+=4){o=f.indexOf(m.charAt(l));k=f.indexOf(m.charAt(l+1));i=f.indexOf(m.charAt(l+2));h=f.indexOf(m.charAt(l+3));q=o<<18|k<<12|i<<6|h;g=q>>>16&255;b=q>>>8&255;a=q&255;j[l/4]=String.fromCharCode(g,b,a);if(h==64){j[l/4]=String.fromCharCode(g,b)}if(i==64){j[l/4]=String.fromCharCode(g)}}p=j.join("");return e?Utf8.decode(p):p};var Utf8={};Utf8.encode=function(a){var b=a.replace(/[\u0080-\u07ff]/g,function(e){var d=e.charCodeAt(0);return String.fromCharCode(192|d>>6,128|d&63)});b=b.replace(/[\u0800-\uffff]/g,function(e){var d=e.charCodeAt(0);return String.fromCharCode(224|d>>12,128|d>>6&63,128|d&63)});return b};Utf8.decode=function(b){var a=b.replace(/[\u00e0-\u00ef][\u0080-\u00bf][\u0080-\u00bf]/g,function(e){var d=((e.charCodeAt(0)&15)<<12)|((e.charCodeAt(1)&63)<<6)|(e.charCodeAt(2)&63);return String.fromCharCode(d)});a=a.replace(/[\u00c0-\u00df][\u0080-\u00bf]/g,function(e){var d=(e.charCodeAt(0)&31)<<6|e.charCodeAt(1)&63;return String.fromCharCode(d)});return a};
//Google-Code-Prettify + SQL + CSS (http://code.google.com/p/google-code-prettify/)
window.PR_SHOULD_USE_CONTINUATION=true;(function(){var h=["break,continue,do,else,for,if,return,while"];var u=[h,"auto,case,char,const,default,double,enum,extern,float,goto,int,long,register,short,signed,sizeof,static,struct,switch,typedef,union,unsigned,void,volatile"];var p=[u,"catch,class,delete,false,import,new,operator,private,protected,public,this,throw,true,try,typeof"];var l=[p,"alignof,align_union,asm,axiom,bool,concept,concept_map,const_cast,constexpr,decltype,dynamic_cast,explicit,export,friend,inline,late_check,mutable,namespace,nullptr,reinterpret_cast,static_assert,static_cast,template,typeid,typename,using,virtual,where"];var x=[p,"abstract,boolean,byte,extends,final,finally,implements,import,instanceof,null,native,package,strictfp,super,synchronized,throws,transient"];var R=[x,"as,base,by,checked,decimal,delegate,descending,dynamic,event,fixed,foreach,from,group,implicit,in,interface,internal,into,is,lock,object,out,override,orderby,params,partial,readonly,ref,sbyte,sealed,stackalloc,string,select,uint,ulong,unchecked,unsafe,ushort,var"];var r="all,and,by,catch,class,else,extends,false,finally,for,if,in,is,isnt,loop,new,no,not,null,of,off,on,or,return,super,then,true,try,unless,until,when,while,yes";var w=[p,"debugger,eval,export,function,get,null,set,undefined,var,with,Infinity,NaN"];var s="caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END";var I=[h,"and,as,assert,class,def,del,elif,except,exec,finally,from,global,import,in,is,lambda,nonlocal,not,or,pass,print,raise,try,with,yield,False,True,None"];var f=[h,"alias,and,begin,case,class,def,defined,elsif,end,ensure,false,in,module,next,nil,not,or,redo,rescue,retry,self,super,then,true,undef,unless,until,when,yield,BEGIN,END"];var H=[h,"case,done,elif,esac,eval,fi,function,in,local,set,then,until"];var A=[l,R,w,s+I,f,H];var e=/^(DIR|FILE|vector|(de|priority_)?queue|list|stack|(const_)?iterator|(multi)?(set|map)|bitset|u?(int|float)\d*)/;var C="str";var z="kwd";var j="com";var O="typ";var G="lit";var L="pun";var F="pln";var m="tag";var E="dec";var J="src";var P="atn";var n="atv";var N="nocode";var M="(?:^^\\.?|[+-]|\\!|\\!=|\\!==|\\#|\\%|\\%=|&|&&|&&=|&=|\\(|\\*|\\*=|\\+=|\\,|\\-=|\\->|\\/|\\/=|:|::|\\;|<|<<|<<=|<=|=|==|===|>|>=|>>|>>=|>>>|>>>=|\\?|\\@|\\[|\\^|\\^=|\\^\\^|\\^\\^=|\\{|\\||\\|=|\\|\\||\\|\\|=|\\~|break|case|continue|delete|do|else|finally|instanceof|return|throw|try|typeof)\\s*";function k(Z){var ad=0;var S=false;var ac=false;for(var V=0,U=Z.length;V<U;++V){var ae=Z[V];if(ae.ignoreCase){ac=true}else{if(/[a-z]/i.test(ae.source.replace(/\\u[0-9a-f]{4}|\\x[0-9a-f]{2}|\\[^ux]/gi,""))){S=true;ac=false;break}}}var Y={b:8,t:9,n:10,v:11,f:12,r:13};function ab(ah){var ag=ah.charCodeAt(0);if(ag!==92){return ag}var af=ah.charAt(1);ag=Y[af];if(ag){return ag}else{if("0"<=af&&af<="7"){return parseInt(ah.substring(1),8)}else{if(af==="u"||af==="x"){return parseInt(ah.substring(2),16)}else{return ah.charCodeAt(1)}}}}function T(af){if(af<32){return(af<16?"\\x0":"\\x")+af.toString(16)}var ag=String.fromCharCode(af);if(ag==="\\"||ag==="-"||ag==="["||ag==="]"){ag="\\"+ag}return ag}function X(am){var aq=am.substring(1,am.length-1).match(new RegExp("\\\\u[0-9A-Fa-f]{4}|\\\\x[0-9A-Fa-f]{2}|\\\\[0-3][0-7]{0,2}|\\\\[0-7]{1,2}|\\\\[\\s\\S]|-|[^-\\\\]","g"));var ak=[];var af=[];var ao=aq[0]==="^";for(var ar=ao?1:0,aj=aq.length;ar<aj;++ar){var ah=aq[ar];if(/\\[bdsw]/i.test(ah)){ak.push(ah)}else{var ag=ab(ah);var al;if(ar+2<aj&&"-"===aq[ar+1]){al=ab(aq[ar+2]);ar+=2}else{al=ag}af.push([ag,al]);if(!(al<65||ag>122)){if(!(al<65||ag>90)){af.push([Math.max(65,ag)|32,Math.min(al,90)|32])}if(!(al<97||ag>122)){af.push([Math.max(97,ag)&~32,Math.min(al,122)&~32])}}}}af.sort(function(av,au){return(av[0]-au[0])||(au[1]-av[1])});var ai=[];var ap=[NaN,NaN];for(var ar=0;ar<af.length;++ar){var at=af[ar];if(at[0]<=ap[1]+1){ap[1]=Math.max(ap[1],at[1])}else{ai.push(ap=at)}}var an=["["];if(ao){an.push("^")}an.push.apply(an,ak);for(var ar=0;ar<ai.length;++ar){var at=ai[ar];an.push(T(at[0]));if(at[1]>at[0]){if(at[1]+1>at[0]){an.push("-")}an.push(T(at[1]))}}an.push("]");return an.join("")}function W(al){var aj=al.source.match(new RegExp("(?:\\[(?:[^\\x5C\\x5D]|\\\\[\\s\\S])*\\]|\\\\u[A-Fa-f0-9]{4}|\\\\x[A-Fa-f0-9]{2}|\\\\[0-9]+|\\\\[^ux0-9]|\\(\\?[:!=]|[\\(\\)\\^]|[^\\x5B\\x5C\\(\\)\\^]+)","g"));var ah=aj.length;var an=[];for(var ak=0,am=0;ak<ah;++ak){var ag=aj[ak];if(ag==="("){++am}else{if("\\"===ag.charAt(0)){var af=+ag.substring(1);if(af&&af<=am){an[af]=-1}}}}for(var ak=1;ak<an.length;++ak){if(-1===an[ak]){an[ak]=++ad}}for(var ak=0,am=0;ak<ah;++ak){var ag=aj[ak];if(ag==="("){++am;if(an[am]===undefined){aj[ak]="(?:"}}else{if("\\"===ag.charAt(0)){var af=+ag.substring(1);if(af&&af<=am){aj[ak]="\\"+an[am]}}}}for(var ak=0,am=0;ak<ah;++ak){if("^"===aj[ak]&&"^"!==aj[ak+1]){aj[ak]=""}}if(al.ignoreCase&&S){for(var ak=0;ak<ah;++ak){var ag=aj[ak];var ai=ag.charAt(0);if(ag.length>=2&&ai==="["){aj[ak]=X(ag)}else{if(ai!=="\\"){aj[ak]=ag.replace(/[a-zA-Z]/g,function(ao){var ap=ao.charCodeAt(0);return"["+String.fromCharCode(ap&~32,ap|32)+"]"})}}}}return aj.join("")}var aa=[];for(var V=0,U=Z.length;V<U;++V){var ae=Z[V];if(ae.global||ae.multiline){throw new Error(""+ae)}aa.push("(?:"+W(ae)+")")}return new RegExp(aa.join("|"),ac?"gi":"g")}function a(V){var U=/(?:^|\s)nocode(?:\s|$)/;var X=[];var T=0;var Z=[];var W=0;var S;if(V.currentStyle){S=V.currentStyle.whiteSpace}else{if(window.getComputedStyle){S=document.defaultView.getComputedStyle(V,null).getPropertyValue("white-space")}}var Y=S&&"pre"===S.substring(0,3);function aa(ab){switch(ab.nodeType){case 1:if(U.test(ab.className)){return}for(var ae=ab.firstChild;ae;ae=ae.nextSibling){aa(ae)}var ad=ab.nodeName;if("BR"===ad||"LI"===ad){X[W]="\n";Z[W<<1]=T++;Z[(W++<<1)|1]=ab}break;case 3:case 4:var ac=ab.nodeValue;if(ac.length){if(!Y){ac=ac.replace(/[ \t\r\n]+/g," ")}else{ac=ac.replace(/\r\n?/g,"\n")}X[W]=ac;Z[W<<1]=T;T+=ac.length;Z[(W++<<1)|1]=ab}break}}aa(V);return{sourceCode:X.join("").replace(/\n$/,""),spans:Z}}function B(S,U,W,T){if(!U){return}var V={sourceCode:U,basePos:S};W(V);T.push.apply(T,V.decorations)}var v=/\S/;function o(S){var V=undefined;for(var U=S.firstChild;U;U=U.nextSibling){var T=U.nodeType;V=(T===1)?(V?S:U):(T===3)?(v.test(U.nodeValue)?S:V):V}return V===S?undefined:V}function g(U,T){var S={};var V;(function(){var ad=U.concat(T);var ah=[];var ag={};for(var ab=0,Z=ad.length;ab<Z;++ab){var Y=ad[ab];var ac=Y[3];if(ac){for(var ae=ac.length;--ae>=0;){S[ac.charAt(ae)]=Y}}var af=Y[1];var aa=""+af;if(!ag.hasOwnProperty(aa)){ah.push(af);ag[aa]=null}}ah.push(/[\0-\uffff]/);V=k(ah)})();var X=T.length;var W=function(ah){var Z=ah.sourceCode,Y=ah.basePos;var ad=[Y,F];var af=0;var an=Z.match(V)||[];var aj={};for(var ae=0,aq=an.length;ae<aq;++ae){var ag=an[ae];var ap=aj[ag];var ai=void 0;var am;if(typeof ap==="string"){am=false}else{var aa=S[ag.charAt(0)];if(aa){ai=ag.match(aa[1]);ap=aa[0]}else{for(var ao=0;ao<X;++ao){aa=T[ao];ai=ag.match(aa[1]);if(ai){ap=aa[0];break}}if(!ai){ap=F}}am=ap.length>=5&&"lang-"===ap.substring(0,5);if(am&&!(ai&&typeof ai[1]==="string")){am=false;ap=J}if(!am){aj[ag]=ap}}var ab=af;af+=ag.length;if(!am){ad.push(Y+ab,ap)}else{var al=ai[1];var ak=ag.indexOf(al);var ac=ak+al.length;if(ai[2]){ac=ag.length-ai[2].length;ak=ac-al.length}var ar=ap.substring(5);B(Y+ab,ag.substring(0,ak),W,ad);B(Y+ab+ak,al,q(ar,al),ad);B(Y+ab+ac,ag.substring(ac),W,ad)}}ah.decorations=ad};return W}function i(T){var W=[],S=[];if(T.tripleQuotedStrings){W.push([C,/^(?:\'\'\'(?:[^\'\\]|\\[\s\S]|\'{1,2}(?=[^\']))*(?:\'\'\'|$)|\"\"\"(?:[^\"\\]|\\[\s\S]|\"{1,2}(?=[^\"]))*(?:\"\"\"|$)|\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$))/,null,"'\""])}else{if(T.multiLineStrings){W.push([C,/^(?:\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$)|\`(?:[^\\\`]|\\[\s\S])*(?:\`|$))/,null,"'\"`"])}else{W.push([C,/^(?:\'(?:[^\\\'\r\n]|\\.)*(?:\'|$)|\"(?:[^\\\"\r\n]|\\.)*(?:\"|$))/,null,"\"'"])}}if(T.verbatimStrings){S.push([C,/^@\"(?:[^\"]|\"\")*(?:\"|$)/,null])}var Y=T.hashComments;if(Y){if(T.cStyleComments){if(Y>1){W.push([j,/^#(?:##(?:[^#]|#(?!##))*(?:###|$)|.*)/,null,"#"])}else{W.push([j,/^#(?:(?:define|elif|else|endif|error|ifdef|include|ifndef|line|pragma|undef|warning)\b|[^\r\n]*)/,null,"#"])}S.push([C,/^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h|[a-z]\w*)>/,null])}else{W.push([j,/^#[^\r\n]*/,null,"#"])}}if(T.cStyleComments){S.push([j,/^\/\/[^\r\n]*/,null]);S.push([j,/^\/\*[\s\S]*?(?:\*\/|$)/,null])}if(T.regexLiterals){var X=("/(?=[^/*])(?:[^/\\x5B\\x5C]|\\x5C[\\s\\S]|\\x5B(?:[^\\x5C\\x5D]|\\x5C[\\s\\S])*(?:\\x5D|$))+/");S.push(["lang-regex",new RegExp("^"+M+"("+X+")")])}var V=T.types;if(V){S.push([O,V])}var U=(""+T.keywords).replace(/^ | $/g,"");if(U.length){S.push([z,new RegExp("^(?:"+U.replace(/[\s,]+/g,"|")+")\\b"),null])}W.push([F,/^\s+/,null," \r\n\t\xA0"]);S.push([G,/^@[a-z_$][a-z_$@0-9]*/i,null],[O,/^(?:[@_]?[A-Z]+[a-z][A-Za-z_$@0-9]*|\w+_t\b)/,null],[F,/^[a-z_$][a-z_$@0-9]*/i,null],[G,new RegExp("^(?:0x[a-f0-9]+|(?:\\d(?:_\\d+)*\\d*(?:\\.\\d*)?|\\.\\d\\+)(?:e[+\\-]?\\d+)?)[a-z]*","i"),null,"0123456789"],[F,/^\\[\s\S]?/,null],[L,/^.[^\s\w\.$@\'\"\`\/\#\\]*/,null]);return g(W,S)}var K=i({keywords:A,hashComments:true,cStyleComments:true,multiLineStrings:true,regexLiterals:true});function Q(V,ag){var U=/(?:^|\s)nocode(?:\s|$)/;var ab=/\r\n?|\n/;var ac=V.ownerDocument;var S;if(V.currentStyle){S=V.currentStyle.whiteSpace}else{if(window.getComputedStyle){S=ac.defaultView.getComputedStyle(V,null).getPropertyValue("white-space")}}var Z=S&&"pre"===S.substring(0,3);var af=ac.createElement("LI");while(V.firstChild){af.appendChild(V.firstChild)}var W=[af];function ae(al){switch(al.nodeType){case 1:if(U.test(al.className)){break}if("BR"===al.nodeName){ad(al);if(al.parentNode){al.parentNode.removeChild(al)}}else{for(var an=al.firstChild;an;an=an.nextSibling){ae(an)}}break;case 3:case 4:if(Z){var am=al.nodeValue;var aj=am.match(ab);if(aj){var ai=am.substring(0,aj.index);al.nodeValue=ai;var ah=am.substring(aj.index+aj[0].length);if(ah){var ak=al.parentNode;ak.insertBefore(ac.createTextNode(ah),al.nextSibling)}ad(al);if(!ai){al.parentNode.removeChild(al)}}}break}}function ad(ak){while(!ak.nextSibling){ak=ak.parentNode;if(!ak){return}}function ai(al,ar){var aq=ar?al.cloneNode(false):al;var ao=al.parentNode;if(ao){var ap=ai(ao,1);var an=al.nextSibling;ap.appendChild(aq);for(var am=an;am;am=an){an=am.nextSibling;ap.appendChild(am)}}return aq}var ah=ai(ak.nextSibling,0);for(var aj;(aj=ah.parentNode)&&aj.nodeType===1;){ah=aj}W.push(ah)}for(var Y=0;Y<W.length;++Y){ae(W[Y])}if(ag===(ag|0)){W[0].setAttribute("value",ag)}var aa=ac.createElement("OL");aa.className="linenums";var X=Math.max(0,((ag-1))|0)||0;for(var Y=0,T=W.length;Y<T;++Y){af=W[Y];af.className="L"+((Y+X)%10);if(!af.firstChild){af.appendChild(ac.createTextNode("\xA0"))}aa.appendChild(af)}V.appendChild(aa)}function D(ac){var aj=/\bMSIE\b/.test(navigator.userAgent);var am=/\n/g;var al=ac.sourceCode;var an=al.length;var V=0;var aa=ac.spans;var T=aa.length;var ah=0;var X=ac.decorations;var Y=X.length;var Z=0;X[Y]=an;var ar,aq;for(aq=ar=0;aq<Y;){if(X[aq]!==X[aq+2]){X[ar++]=X[aq++];X[ar++]=X[aq++]}else{aq+=2}}Y=ar;for(aq=ar=0;aq<Y;){var at=X[aq];var ab=X[aq+1];var W=aq+2;while(W+2<=Y&&X[W+1]===ab){W+=2}X[ar++]=at;X[ar++]=ab;aq=W}Y=X.length=ar;var ae=null;while(ah<T){var af=aa[ah];var S=aa[ah+2]||an;var ag=X[Z];var ap=X[Z+2]||an;var W=Math.min(S,ap);var ak=aa[ah+1];var U;if(ak.nodeType!==1&&(U=al.substring(V,W))){if(aj){U=U.replace(am,"\r")}ak.nodeValue=U;var ai=ak.ownerDocument;var ao=ai.createElement("SPAN");ao.className=X[Z+1];var ad=ak.parentNode;ad.replaceChild(ao,ak);ao.appendChild(ak);if(V<S){aa[ah+1]=ak=ai.createTextNode(al.substring(W,S));ad.insertBefore(ak,ao.nextSibling)}}V=W;if(V>=S){ah+=2}if(V>=ap){Z+=2}}}var t={};function c(U,V){for(var S=V.length;--S>=0;){var T=V[S];if(!t.hasOwnProperty(T)){t[T]=U}else{if(window.console){console.warn("cannot override language handler %s",T)}}}}function q(T,S){if(!(T&&t.hasOwnProperty(T))){T=/^\s*</.test(S)?"default-markup":"default-code"}return t[T]}c(K,["default-code"]);c(g([],[[F,/^[^<?]+/],[E,/^<!\w[^>]*(?:>|$)/],[j,/^<\!--[\s\S]*?(?:-\->|$)/],["lang-",/^<\?([\s\S]+?)(?:\?>|$)/],["lang-",/^<%([\s\S]+?)(?:%>|$)/],[L,/^(?:<[%?]|[%?]>)/],["lang-",/^<xmp\b[^>]*>([\s\S]+?)<\/xmp\b[^>]*>/i],["lang-js",/^<script\b[^>]*>([\s\S]*?)(<\/script\b[^>]*>)/i],["lang-css",/^<style\b[^>]*>([\s\S]*?)(<\/style\b[^>]*>)/i],["lang-in.tag",/^(<\/?[a-z][^<>]*>)/i]]),["default-markup","htm","html","mxml","xhtml","xml","xsl"]);c(g([[F,/^[\s]+/,null," \t\r\n"],[n,/^(?:\"[^\"]*\"?|\'[^\']*\'?)/,null,"\"'"]],[[m,/^^<\/?[a-z](?:[\w.:-]*\w)?|\/?>$/i],[P,/^(?!style[\s=]|on)[a-z](?:[\w:-]*\w)?/i],["lang-uq.val",/^=\s*([^>\'\"\s]*(?:[^>\'\"\s\/]|\/(?=\s)))/],[L,/^[=<>\/]+/],["lang-js",/^on\w+\s*=\s*\"([^\"]+)\"/i],["lang-js",/^on\w+\s*=\s*\'([^\']+)\'/i],["lang-js",/^on\w+\s*=\s*([^\"\'>\s]+)/i],["lang-css",/^style\s*=\s*\"([^\"]+)\"/i],["lang-css",/^style\s*=\s*\'([^\']+)\'/i],["lang-css",/^style\s*=\s*([^\"\'>\s]+)/i]]),["in.tag"]);c(g([],[[n,/^[\s\S]+/]]),["uq.val"]);c(i({keywords:l,hashComments:true,cStyleComments:true,types:e}),["c","cc","cpp","cxx","cyc","m"]);c(i({keywords:"null,true,false"}),["json"]);c(i({keywords:R,hashComments:true,cStyleComments:true,verbatimStrings:true,types:e}),["cs"]);c(i({keywords:x,cStyleComments:true}),["java"]);c(i({keywords:H,hashComments:true,multiLineStrings:true}),["bsh","csh","sh"]);c(i({keywords:I,hashComments:true,multiLineStrings:true,tripleQuotedStrings:true}),["cv","py"]);c(i({keywords:s,hashComments:true,multiLineStrings:true,regexLiterals:true}),["perl","pl","pm"]);c(i({keywords:f,hashComments:true,multiLineStrings:true,regexLiterals:true}),["rb"]);c(i({keywords:w,cStyleComments:true,regexLiterals:true}),["js"]);c(i({keywords:r,hashComments:3,cStyleComments:true,multilineStrings:true,tripleQuotedStrings:true,regexLiterals:true}),["coffee"]);c(g([],[[C,/^[\s\S]+/]]),["regex"]);function d(V){var U=V.langExtension;try{var S=a(V.sourceNode);var T=S.sourceCode;V.sourceCode=T;V.spans=S.spans;V.basePos=0;q(U,T)(V);D(V)}catch(W){if("console" in window){console.log(W&&W.stack?W.stack:W)}}}function y(W,V,U){var S=document.createElement("PRE");S.innerHTML=W;if(U){Q(S,U)}var T={langExtension:V,numberLines:U,sourceNode:S};d(T);return S.innerHTML}function b(ad){function Y(af){return document.getElementsByTagName(af)}var ac=[Y("pre"),Y("code"),Y("xmp")];var T=[];for(var aa=0;aa<ac.length;++aa){for(var Z=0,V=ac[aa].length;Z<V;++Z){T.push(ac[aa][Z])}}ac=null;var W=Date;if(!W.now){W={now:function(){return +(new Date)}}}var X=0;var S;var ab=/\blang(?:uage)?-([\w.]+)(?!\S)/;var ae=/\bprettyprint\b/;function U(){var ag=(window.PR_SHOULD_USE_CONTINUATION?W.now()+250:Infinity);for(;X<T.length&&W.now()<ag;X++){var aj=T[X];var ai=aj.className;if(ai.indexOf("prettyprint")>=0){var ah=ai.match(ab);var am;if(!ah&&(am=o(aj))&&"CODE"===am.tagName){ah=am.className.match(ab)}if(ah){ah=ah[1]}var al=false;for(var ak=aj.parentNode;ak;ak=ak.parentNode){if((ak.tagName==="pre"||ak.tagName==="code"||ak.tagName==="xmp")&&ak.className&&ak.className.indexOf("prettyprint")>=0){al=true;break}}if(!al){var af=aj.className.match(/\blinenums\b(?::(\d+))?/);af=af?af[1]&&af[1].length?+af[1]:true:false;if(af){Q(aj,af)}S={langExtension:ah,sourceNode:aj,numberLines:af};d(S)}}}if(X<T.length){setTimeout(U,250)}else{if(ad){ad()}}}U()}window.prettyPrintOne=y;window.prettyPrint=b;window.PR={createSimpleLexer:g,registerLangHandler:c,sourceDecorator:i,PR_ATTRIB_NAME:P,PR_ATTRIB_VALUE:n,PR_COMMENT:j,PR_DECLARATION:E,PR_KEYWORD:z,PR_LITERAL:G,PR_NOCODE:N,PR_PLAIN:F,PR_PUNCTUATION:L,PR_SOURCE:J,PR_STRING:C,PR_TAG:m,PR_TYPE:O}})();PR.registerLangHandler(PR.createSimpleLexer([[PR.PR_PLAIN,/^[ \t\r\n\f]+/,null," \t\r\n\f"]],[[PR.PR_STRING,/^\"(?:[^\n\r\f\\\"]|\\(?:\r\n?|\n|\f)|\\[\s\S])*\"/,null],[PR.PR_STRING,/^\'(?:[^\n\r\f\\\']|\\(?:\r\n?|\n|\f)|\\[\s\S])*\'/,null],["lang-css-str",/^url\(([^\)\"\']*)\)/i],[PR.PR_KEYWORD,/^(?:url|rgb|\!important|@import|@page|@media|@charset|inherit)(?=[^\-\w]|$)/i,null],["lang-css-kw",/^(-?(?:[_a-z]|(?:\\[0-9a-f]+ ?))(?:[_a-z0-9\-]|\\(?:\\[0-9a-f]+ ?))*)\s*:/i],[PR.PR_COMMENT,/^\/\*[^*]*\*+(?:[^\/*][^*]*\*+)*\//],[PR.PR_COMMENT,/^(?:<!--|-->)/],[PR.PR_LITERAL,/^(?:\d+|\d*\.\d+)(?:%|[a-z]+)?/i],[PR.PR_LITERAL,/^#(?:[0-9a-f]{3}){1,2}/i],[PR.PR_PLAIN,/^-?(?:[_a-z]|(?:\\[\da-f]+ ?))(?:[_a-z\d\-]|\\(?:\\[\da-f]+ ?))*/i],[PR.PR_PUNCTUATION,/^[^\s\w\'\"]+/]]),["css"]);PR.registerLangHandler(PR.createSimpleLexer([],[[PR.PR_KEYWORD,/^-?(?:[_a-z]|(?:\\[\da-f]+ ?))(?:[_a-z\d\-]|\\(?:\\[\da-f]+ ?))*/i]]),["css-kw"]);PR.registerLangHandler(PR.createSimpleLexer([],[[PR.PR_STRING,/^[^\)\"\']+/]]),["css-str"]);PR.registerLangHandler(PR.createSimpleLexer([[PR.PR_PLAIN,/^[\t\n\r \xA0]+/,null,"\t\n\r \xA0"],[PR.PR_STRING,/^(?:"(?:[^\"\\]|\\.)*"|'(?:[^\'\\]|\\.)*')/,null,"\"'"]],[[PR.PR_COMMENT,/^(?:--[^\r\n]*|\/\*[\s\S]*?(?:\*\/|$))/],[PR.PR_KEYWORD,/^(?:ADD|ALL|ALTER|AND|ANY|AS|ASC|AUTHORIZATION|BACKUP|BEGIN|BETWEEN|BREAK|BROWSE|BULK|BY|CASCADE|CASE|CHECK|CHECKPOINT|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMN|COMMIT|COMPUTE|CONSTRAINT|CONTAINS|CONTAINSTABLE|CONTINUE|CONVERT|CREATE|CROSS|CURRENT|CURRENT_DATE|CURRENT_TIME|CURRENT_TIMESTAMP|CURRENT_USER|CURSOR|DATABASE|DBCC|DEALLOCATE|DECLARE|DEFAULT|DELETE|DENY|DESC|DISK|DISTINCT|DISTRIBUTED|DOUBLE|DROP|DUMMY|DUMP|ELSE|END|ERRLVL|ESCAPE|EXCEPT|EXEC|EXECUTE|EXISTS|EXIT|FETCH|FILE|FILLFACTOR|FOR|FOREIGN|FREETEXT|FREETEXTTABLE|FROM|FULL|FUNCTION|GOTO|GRANT|GROUP|HAVING|HOLDLOCK|IDENTITY|IDENTITYCOL|IDENTITY_INSERT|IF|IN|INDEX|INNER|INSERT|INTERSECT|INTO|IS|JOIN|KEY|KILL|LEFT|LIKE|LINENO|LOAD|MATCH|MERGE|NATIONAL|NOCHECK|NONCLUSTERED|NOT|NULL|NULLIF|OF|OFF|OFFSETS|ON|OPEN|OPENDATASOURCE|OPENQUERY|OPENROWSET|OPENXML|OPTION|OR|ORDER|OUTER|OVER|PERCENT|PLAN|PRECISION|PRIMARY|PRINT|PROC|PROCEDURE|PUBLIC|RAISERROR|READ|READTEXT|RECONFIGURE|REFERENCES|REPLICATION|RESTORE|RESTRICT|RETURN|REVOKE|RIGHT|ROLLBACK|ROWCOUNT|ROWGUIDCOL|RULE|SAVE|SCHEMA|SELECT|SESSION_USER|SET|SETUSER|SHUTDOWN|SOME|STATISTICS|SYSTEM_USER|TABLE|TEXTSIZE|THEN|TO|TOP|TRAN|TRANSACTION|TRIGGER|TRUNCATE|TSEQUAL|UNION|UNIQUE|UPDATE|UPDATETEXT|USE|USER|USING|VALUES|VARYING|VIEW|WAITFOR|WHEN|WHERE|WHILE|WITH|WRITETEXT)(?=[^\w-]|$)/i,null],[PR.PR_LITERAL,/^[+-]?(?:0x[\da-f]+|(?:(?:\.\d+|\d+(?:\.\d*)?)(?:e[+\-]?\d+)?))/i],[PR.PR_PLAIN,/^[a-z_][\w-]*/i],[PR.PR_PUNCTUATION,/^[^\w\t\n\r \xA0\"\'][^\w\t\n\r \xA0+\-\"\']*/]]),["sql"]);

var WhirlpoolPlus = {
	
	//Script Version
	version : '4.5.2',
	
	//Prerelease version- 0 for a standard release
	prerelease : 0,
	
	//Meaningless value to force the script to upgrade
	storageVersion : 9,
	
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
		chatbox : false,
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
		dialogHtml += '<br /><br /><button type="button" class="simplemodal-close">Close</button>';
		
		$(dialogHtml).modal({
			close: true,
			containerCss : {
				'text-align' : 'center',
			},
		});
		
	},
	
	_changelog : {
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
			WhirlpoolPlus.css(GM_getResourceText('prettify'));
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
	var jQuery = $;
	
	(function(e,t,n){function i(n){if(!r[n]){r[n]=true;e.migrateWarnings.push(n);if(t.console&&console.warn&&!e.migrateMute){console.warn("JQMIGRATE: "+n);if(e.migrateTrace&&console.trace){console.trace()}}}}function s(t,n,r,s){if(Object.defineProperty){try{Object.defineProperty(t,n,{configurable:true,enumerable:true,get:function(){i(s);return r},set:function(e){i(s);r=e}});return}catch(o){}}e._definePropertyBroken=true;t[n]=r}var r={};e.migrateWarnings=[];if(!e.migrateMute&&t.console&&console.log){console.log("JQMIGRATE: Logging is active")}if(e.migrateTrace===n){e.migrateTrace=true}e.migrateReset=function(){r={};e.migrateWarnings.length=0};if(document.compatMode==="BackCompat"){i("jQuery is not compatible with Quirks Mode")}var o=e("<input/>",{size:1}).attr("size")&&e.attrFn,u=e.attr,a=e.attrHooks.value&&e.attrHooks.value.get||function(){return null},f=e.attrHooks.value&&e.attrHooks.value.set||function(){return n},l=/^(?:input|button)$/i,c=/^[238]$/,h=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,p=/^(?:checked|selected)$/i;s(e,"attrFn",o||{},"jQuery.attrFn is deprecated");e.attr=function(t,r,s,a){var f=r.toLowerCase(),d=t&&t.nodeType;if(a){if(u.length<4){i("jQuery.fn.attr( props, pass ) is deprecated")}if(t&&!c.test(d)&&(o?r in o:e.isFunction(e.fn[r]))){return e(t)[r](s)}}if(r==="type"&&s!==n&&l.test(t.nodeName)&&t.parentNode){i("Can't change the 'type' of an input or button in IE 6/7/8")}if(!e.attrHooks[f]&&h.test(f)){e.attrHooks[f]={get:function(t,r){var i,s=e.prop(t,r);return s===true||typeof s!=="boolean"&&(i=t.getAttributeNode(r))&&i.nodeValue!==false?r.toLowerCase():n},set:function(t,n,r){var i;if(n===false){e.removeAttr(t,r)}else{i=e.propFix[r]||r;if(i in t){t[i]=true}t.setAttribute(r,r.toLowerCase())}return r}};if(p.test(f)){i("jQuery.fn.attr('"+f+"') may use property instead of attribute")}}return u.call(e,t,r,s)};e.attrHooks.value={get:function(e,t){var n=(e.nodeName||"").toLowerCase();if(n==="button"){return a.apply(this,arguments)}if(n!=="input"&&n!=="option"){i("jQuery.fn.attr('value') no longer gets properties")}return t in e?e.value:null},set:function(e,t){var n=(e.nodeName||"").toLowerCase();if(n==="button"){return f.apply(this,arguments)}if(n!=="input"&&n!=="option"){i("jQuery.fn.attr('value', val) no longer sets properties")}e.value=t}};var d,v,m=e.fn.init,g=e.parseJSON,y=/^(?:[^<]*(<[\w\W]+>)[^>]*|#([\w\-]*))$/;e.fn.init=function(t,n,r){var s;if(t&&typeof t==="string"&&!e.isPlainObject(n)&&(s=y.exec(t))&&s[1]){if(t.charAt(0)!=="<"){i("$(html) HTML strings must start with '<' character")}if(n&&n.context){n=n.context}if(e.parseHTML){return m.call(this,e.parseHTML(e.trim(t),n,true),n,r)}}return m.apply(this,arguments)};e.fn.init.prototype=e.fn;e.parseJSON=function(e){if(!e&&e!==null){i("jQuery.parseJSON requires a valid JSON string");return null}return g.apply(this,arguments)};e.uaMatch=function(e){e=e.toLowerCase();var t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}};if(!e.browser){d=e.uaMatch(navigator.userAgent);v={};if(d.browser){v[d.browser]=true;v.version=d.version}if(v.chrome){v.webkit=true}else if(v.webkit){v.safari=true}e.browser=v}s(e,"browser",e.browser,"jQuery.browser is deprecated");e.sub=function(){function t(e,n){return new t.fn.init(e,n)}e.extend(true,t,this);t.superclass=this;t.fn=t.prototype=this();t.fn.constructor=t;t.sub=this.sub;t.fn.init=function(i,s){if(s&&s instanceof e&&!(s instanceof t)){s=t(s)}return e.fn.init.call(this,i,s,n)};t.fn.init.prototype=t.fn;var n=t(document);i("jQuery.sub() is deprecated");return t};e.ajaxSetup({converters:{"text json":e.parseJSON}});var b=e.fn.data;e.fn.data=function(t){var r,s,o=this[0];if(o&&t==="events"&&arguments.length===1){r=e.data(o,t);s=e._data(o,t);if((r===n||r===s)&&s!==n){i("Use of jQuery.fn.data('events') is deprecated");return s}}return b.apply(this,arguments)};var w=/\/(java|ecma)script/i,E=e.fn.andSelf||e.fn.addBack;e.fn.andSelf=function(){i("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()");return E.apply(this,arguments)};if(!e.clean){e.clean=function(t,n,r,s){n=n||document;n=!n.nodeType&&n[0]||n;n=n.ownerDocument||n;i("jQuery.clean() is deprecated");var o,u,a,f,l=[];e.merge(l,e.buildFragment(t,n).childNodes);if(r){a=function(e){if(!e.type||w.test(e.type)){return s?s.push(e.parentNode?e.parentNode.removeChild(e):e):r.appendChild(e)}};for(o=0;(u=l[o])!=null;o++){if(!(e.nodeName(u,"script")&&a(u))){r.appendChild(u);if(typeof u.getElementsByTagName!=="undefined"){f=e.grep(e.merge([],u.getElementsByTagName("script")),a);l.splice.apply(l,[o+1,0].concat(f));o+=f.length}}}}return l}}var S=e.event.add,x=e.event.remove,T=e.event.trigger,N=e.fn.toggle,C=e.fn.live,k=e.fn.die,L="ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",A=new RegExp("\\b(?:"+L+")\\b"),O=/(?:^|\s)hover(\.\S+|)\b/,M=function(t){if(typeof t!=="string"||e.event.special.hover){return t}if(O.test(t)){i("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'")}return t&&t.replace(O,"mouseenter$1 mouseleave$1")};if(e.event.props&&e.event.props[0]!=="attrChange"){e.event.props.unshift("attrChange","attrName","relatedNode","srcElement")}if(e.event.dispatch){s(e.event,"handle",e.event.dispatch,"jQuery.event.handle is undocumented and deprecated")}e.event.add=function(e,t,n,r,s){if(e!==document&&A.test(t)){i("AJAX events should be attached to document: "+t)}S.call(this,e,M(t||""),n,r,s)};e.event.remove=function(e,t,n,r,i){x.call(this,e,M(t)||"",n,r,i)};e.fn.error=function(){var e=Array.prototype.slice.call(arguments,0);i("jQuery.fn.error() is deprecated");e.splice(0,0,"error");if(arguments.length){return this.bind.apply(this,e)}this.triggerHandler.apply(this,e);return this};e.fn.toggle=function(t,n){if(!e.isFunction(t)||!e.isFunction(n)){return N.apply(this,arguments)}i("jQuery.fn.toggle(handler, handler...) is deprecated");var r=arguments,s=t.guid||e.guid++,o=0,u=function(n){var i=(e._data(this,"lastToggle"+t.guid)||0)%o;e._data(this,"lastToggle"+t.guid,i+1);n.preventDefault();return r[i].apply(this,arguments)||false};u.guid=s;while(o<r.length){r[o++].guid=s}return this.click(u)};e.fn.live=function(t,n,r){i("jQuery.fn.live() is deprecated");if(C){return C.apply(this,arguments)}e(this.context).on(t,this.selector,n,r);return this};e.fn.die=function(t,n){i("jQuery.fn.die() is deprecated");if(k){return k.apply(this,arguments)}e(this.context).off(t,this.selector||"**",n);return this};e.event.trigger=function(e,t,n,r){if(!n&&!A.test(e)){i("Global events are undocumented and deprecated")}return T.call(this,e,t,n||document,r)};e.each(L.split("|"),function(t,n){e.event.special[n]={setup:function(){var t=this;if(t!==document){e.event.add(document,n+"."+e.guid,function(){e.event.trigger(n,null,t,true)});e._data(this,n,e.guid++)}return false},teardown:function(){if(this!==document){e.event.remove(document,n+"."+e._data(this,n))}return false}}})})(jQuery,window)

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