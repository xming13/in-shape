/*!
 * jQuery JavaScript Library v1.4.2
 * http://jquery.com/
 *
 * Copyright 2010, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 * Copyright 2010, The Dojo Foundation
 * Released under the MIT, BSD, and GPL Licenses.
 *
 * Date: Sat Feb 13 22:33:48 2010 -0500
 */
(function(A,w){function ma(){if(!c.isReady){try{s.documentElement.doScroll("left")}catch(a){setTimeout(ma,1);return}c.ready()}}function Qa(a,b){b.src?c.ajax({url:b.src,async:false,dataType:"script"}):c.globalEval(b.text||b.textContent||b.innerHTML||"");b.parentNode&&b.parentNode.removeChild(b)}function X(a,b,d,f,e,j){var i=a.length;if(typeof b==="object"){for(var o in b)X(a,o,b[o],f,e,d);return a}if(d!==w){f=!j&&f&&c.isFunction(d);for(o=0;o<i;o++)e(a[o],b,f?d.call(a[o],o,e(a[o],b)):d,j);return a}return i?
e(a[0],b):w}function J(){return(new Date).getTime()}function Y(){return false}function Z(){return true}function na(a,b,d){d[0].type=a;return c.event.handle.apply(b,d)}function oa(a){var b,d=[],f=[],e=arguments,j,i,o,k,n,r;i=c.data(this,"events");if(!(a.liveFired===this||!i||!i.live||a.button&&a.type==="click")){a.liveFired=this;var u=i.live.slice(0);for(k=0;k<u.length;k++){i=u[k];i.origType.replace(O,"")===a.type?f.push(i.selector):u.splice(k--,1)}j=c(a.target).closest(f,a.currentTarget);n=0;for(r=
j.length;n<r;n++)for(k=0;k<u.length;k++){i=u[k];if(j[n].selector===i.selector){o=j[n].elem;f=null;if(i.preType==="mouseenter"||i.preType==="mouseleave")f=c(a.relatedTarget).closest(i.selector)[0];if(!f||f!==o)d.push({elem:o,handleObj:i})}}n=0;for(r=d.length;n<r;n++){j=d[n];a.currentTarget=j.elem;a.data=j.handleObj.data;a.handleObj=j.handleObj;if(j.handleObj.origHandler.apply(j.elem,e)===false){b=false;break}}return b}}function pa(a,b){return"live."+(a&&a!=="*"?a+".":"")+b.replace(/\./g,"`").replace(/ /g,
"&")}function qa(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function ra(a,b){var d=0;b.each(function(){if(this.nodeName===(a[d]&&a[d].nodeName)){var f=c.data(a[d++]),e=c.data(this,f);if(f=f&&f.events){delete e.handle;e.events={};for(var j in f)for(var i in f[j])c.event.add(this,j,f[j][i],f[j][i].data)}}})}function sa(a,b,d){var f,e,j;b=b&&b[0]?b[0].ownerDocument||b[0]:s;if(a.length===1&&typeof a[0]==="string"&&a[0].length<512&&b===s&&!ta.test(a[0])&&(c.support.checkClone||!ua.test(a[0]))){e=
true;if(j=c.fragments[a[0]])if(j!==1)f=j}if(!f){f=b.createDocumentFragment();c.clean(a,b,f,d)}if(e)c.fragments[a[0]]=j?f:1;return{fragment:f,cacheable:e}}function K(a,b){var d={};c.each(va.concat.apply([],va.slice(0,b)),function(){d[this]=a});return d}function wa(a){return"scrollTo"in a&&a.document?a:a.nodeType===9?a.defaultView||a.parentWindow:false}var c=function(a,b){return new c.fn.init(a,b)},Ra=A.jQuery,Sa=A.$,s=A.document,T,Ta=/^[^<]*(<[\w\W]+>)[^>]*$|^#([\w-]+)$/,Ua=/^.[^:#\[\.,]*$/,Va=/\S/,
Wa=/^(\s|\u00A0)+|(\s|\u00A0)+$/g,Xa=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,P=navigator.userAgent,xa=false,Q=[],L,$=Object.prototype.toString,aa=Object.prototype.hasOwnProperty,ba=Array.prototype.push,R=Array.prototype.slice,ya=Array.prototype.indexOf;c.fn=c.prototype={init:function(a,b){var d,f;if(!a)return this;if(a.nodeType){this.context=this[0]=a;this.length=1;return this}if(a==="body"&&!b){this.context=s;this[0]=s.body;this.selector="body";this.length=1;return this}if(typeof a==="string")if((d=Ta.exec(a))&&
(d[1]||!b))if(d[1]){f=b?b.ownerDocument||b:s;if(a=Xa.exec(a))if(c.isPlainObject(b)){a=[s.createElement(a[1])];c.fn.attr.call(a,b,true)}else a=[f.createElement(a[1])];else{a=sa([d[1]],[f]);a=(a.cacheable?a.fragment.cloneNode(true):a.fragment).childNodes}return c.merge(this,a)}else{if(b=s.getElementById(d[2])){if(b.id!==d[2])return T.find(a);this.length=1;this[0]=b}this.context=s;this.selector=a;return this}else if(!b&&/^\w+$/.test(a)){this.selector=a;this.context=s;a=s.getElementsByTagName(a);return c.merge(this,
a)}else return!b||b.jquery?(b||T).find(a):c(b).find(a);else if(c.isFunction(a))return T.ready(a);if(a.selector!==w){this.selector=a.selector;this.context=a.context}return c.makeArray(a,this)},selector:"",jquery:"1.4.2",length:0,size:function(){return this.length},toArray:function(){return R.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this.slice(a)[0]:this[a]},pushStack:function(a,b,d){var f=c();c.isArray(a)?ba.apply(f,a):c.merge(f,a);f.prevObject=this;f.context=this.context;if(b===
"find")f.selector=this.selector+(this.selector?" ":"")+d;else if(b)f.selector=this.selector+"."+b+"("+d+")";return f},each:function(a,b){return c.each(this,a,b)},ready:function(a){c.bindReady();if(c.isReady)a.call(s,c);else Q&&Q.push(a);return this},eq:function(a){return a===-1?this.slice(a):this.slice(a,+a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(R.apply(this,arguments),"slice",R.call(arguments).join(","))},map:function(a){return this.pushStack(c.map(this,
function(b,d){return a.call(b,d,b)}))},end:function(){return this.prevObject||c(null)},push:ba,sort:[].sort,splice:[].splice};c.fn.init.prototype=c.fn;c.extend=c.fn.extend=function(){var a=arguments[0]||{},b=1,d=arguments.length,f=false,e,j,i,o;if(typeof a==="boolean"){f=a;a=arguments[1]||{};b=2}if(typeof a!=="object"&&!c.isFunction(a))a={};if(d===b){a=this;--b}for(;b<d;b++)if((e=arguments[b])!=null)for(j in e){i=a[j];o=e[j];if(a!==o)if(f&&o&&(c.isPlainObject(o)||c.isArray(o))){i=i&&(c.isPlainObject(i)||
c.isArray(i))?i:c.isArray(o)?[]:{};a[j]=c.extend(f,i,o)}else if(o!==w)a[j]=o}return a};c.extend({noConflict:function(a){A.$=Sa;if(a)A.jQuery=Ra;return c},isReady:false,ready:function(){if(!c.isReady){if(!s.body)return setTimeout(c.ready,13);c.isReady=true;if(Q){for(var a,b=0;a=Q[b++];)a.call(s,c);Q=null}c.fn.triggerHandler&&c(s).triggerHandler("ready")}},bindReady:function(){if(!xa){xa=true;if(s.readyState==="complete")return c.ready();if(s.addEventListener){s.addEventListener("DOMContentLoaded",
L,false);A.addEventListener("load",c.ready,false)}else if(s.attachEvent){s.attachEvent("onreadystatechange",L);A.attachEvent("onload",c.ready);var a=false;try{a=A.frameElement==null}catch(b){}s.documentElement.doScroll&&a&&ma()}}},isFunction:function(a){return $.call(a)==="[object Function]"},isArray:function(a){return $.call(a)==="[object Array]"},isPlainObject:function(a){if(!a||$.call(a)!=="[object Object]"||a.nodeType||a.setInterval)return false;if(a.constructor&&!aa.call(a,"constructor")&&!aa.call(a.constructor.prototype,
"isPrototypeOf"))return false;var b;for(b in a);return b===w||aa.call(a,b)},isEmptyObject:function(a){for(var b in a)return false;return true},error:function(a){throw a;},parseJSON:function(a){if(typeof a!=="string"||!a)return null;a=c.trim(a);if(/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return A.JSON&&A.JSON.parse?A.JSON.parse(a):(new Function("return "+
a))();else c.error("Invalid JSON: "+a)},noop:function(){},globalEval:function(a){if(a&&Va.test(a)){var b=s.getElementsByTagName("head")[0]||s.documentElement,d=s.createElement("script");d.type="text/javascript";if(c.support.scriptEval)d.appendChild(s.createTextNode(a));else d.text=a;b.insertBefore(d,b.firstChild);b.removeChild(d)}},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,b,d){var f,e=0,j=a.length,i=j===w||c.isFunction(a);if(d)if(i)for(f in a){if(b.apply(a[f],
d)===false)break}else for(;e<j;){if(b.apply(a[e++],d)===false)break}else if(i)for(f in a){if(b.call(a[f],f,a[f])===false)break}else for(d=a[0];e<j&&b.call(d,e,d)!==false;d=a[++e]);return a},trim:function(a){return(a||"").replace(Wa,"")},makeArray:function(a,b){b=b||[];if(a!=null)a.length==null||typeof a==="string"||c.isFunction(a)||typeof a!=="function"&&a.setInterval?ba.call(b,a):c.merge(b,a);return b},inArray:function(a,b){if(b.indexOf)return b.indexOf(a);for(var d=0,f=b.length;d<f;d++)if(b[d]===
a)return d;return-1},merge:function(a,b){var d=a.length,f=0;if(typeof b.length==="number")for(var e=b.length;f<e;f++)a[d++]=b[f];else for(;b[f]!==w;)a[d++]=b[f++];a.length=d;return a},grep:function(a,b,d){for(var f=[],e=0,j=a.length;e<j;e++)!d!==!b(a[e],e)&&f.push(a[e]);return f},map:function(a,b,d){for(var f=[],e,j=0,i=a.length;j<i;j++){e=b(a[j],j,d);if(e!=null)f[f.length]=e}return f.concat.apply([],f)},guid:1,proxy:function(a,b,d){if(arguments.length===2)if(typeof b==="string"){d=a;a=d[b];b=w}else if(b&&
!c.isFunction(b)){d=b;b=w}if(!b&&a)b=function(){return a.apply(d||this,arguments)};if(a)b.guid=a.guid=a.guid||b.guid||c.guid++;return b},uaMatch:function(a){a=a.toLowerCase();a=/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version)?[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||!/compatible/.test(a)&&/(mozilla)(?:.*? rv:([\w.]+))?/.exec(a)||[];return{browser:a[1]||"",version:a[2]||"0"}},browser:{}});P=c.uaMatch(P);if(P.browser){c.browser[P.browser]=true;c.browser.version=P.version}if(c.browser.webkit)c.browser.safari=
true;if(ya)c.inArray=function(a,b){return ya.call(b,a)};T=c(s);if(s.addEventListener)L=function(){s.removeEventListener("DOMContentLoaded",L,false);c.ready()};else if(s.attachEvent)L=function(){if(s.readyState==="complete"){s.detachEvent("onreadystatechange",L);c.ready()}};(function(){c.support={};var a=s.documentElement,b=s.createElement("script"),d=s.createElement("div"),f="script"+J();d.style.display="none";d.innerHTML="   <link/><table></table><a href='/a' style='color:red;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
var e=d.getElementsByTagName("*"),j=d.getElementsByTagName("a")[0];if(!(!e||!e.length||!j)){c.support={leadingWhitespace:d.firstChild.nodeType===3,tbody:!d.getElementsByTagName("tbody").length,htmlSerialize:!!d.getElementsByTagName("link").length,style:/red/.test(j.getAttribute("style")),hrefNormalized:j.getAttribute("href")==="/a",opacity:/^0.55$/.test(j.style.opacity),cssFloat:!!j.style.cssFloat,checkOn:d.getElementsByTagName("input")[0].value==="on",optSelected:s.createElement("select").appendChild(s.createElement("option")).selected,
parentNode:d.removeChild(d.appendChild(s.createElement("div"))).parentNode===null,deleteExpando:true,checkClone:false,scriptEval:false,noCloneEvent:true,boxModel:null};b.type="text/javascript";try{b.appendChild(s.createTextNode("window."+f+"=1;"))}catch(i){}a.insertBefore(b,a.firstChild);if(A[f]){c.support.scriptEval=true;delete A[f]}try{delete b.test}catch(o){c.support.deleteExpando=false}a.removeChild(b);if(d.attachEvent&&d.fireEvent){d.attachEvent("onclick",function k(){c.support.noCloneEvent=
false;d.detachEvent("onclick",k)});d.cloneNode(true).fireEvent("onclick")}d=s.createElement("div");d.innerHTML="<input type='radio' name='radiotest' checked='checked'/>";a=s.createDocumentFragment();a.appendChild(d.firstChild);c.support.checkClone=a.cloneNode(true).cloneNode(true).lastChild.checked;c(function(){var k=s.createElement("div");k.style.width=k.style.paddingLeft="1px";s.body.appendChild(k);c.boxModel=c.support.boxModel=k.offsetWidth===2;s.body.removeChild(k).style.display="none"});a=function(k){var n=
s.createElement("div");k="on"+k;var r=k in n;if(!r){n.setAttribute(k,"return;");r=typeof n[k]==="function"}return r};c.support.submitBubbles=a("submit");c.support.changeBubbles=a("change");a=b=d=e=j=null}})();c.props={"for":"htmlFor","class":"className",readonly:"readOnly",maxlength:"maxLength",cellspacing:"cellSpacing",rowspan:"rowSpan",colspan:"colSpan",tabindex:"tabIndex",usemap:"useMap",frameborder:"frameBorder"};var G="jQuery"+J(),Ya=0,za={};c.extend({cache:{},expando:G,noData:{embed:true,object:true,
applet:true},data:function(a,b,d){if(!(a.nodeName&&c.noData[a.nodeName.toLowerCase()])){a=a==A?za:a;var f=a[G],e=c.cache;if(!f&&typeof b==="string"&&d===w)return null;f||(f=++Ya);if(typeof b==="object"){a[G]=f;e[f]=c.extend(true,{},b)}else if(!e[f]){a[G]=f;e[f]={}}a=e[f];if(d!==w)a[b]=d;return typeof b==="string"?a[b]:a}},removeData:function(a,b){if(!(a.nodeName&&c.noData[a.nodeName.toLowerCase()])){a=a==A?za:a;var d=a[G],f=c.cache,e=f[d];if(b){if(e){delete e[b];c.isEmptyObject(e)&&c.removeData(a)}}else{if(c.support.deleteExpando)delete a[c.expando];
else a.removeAttribute&&a.removeAttribute(c.expando);delete f[d]}}}});c.fn.extend({data:function(a,b){if(typeof a==="undefined"&&this.length)return c.data(this[0]);else if(typeof a==="object")return this.each(function(){c.data(this,a)});var d=a.split(".");d[1]=d[1]?"."+d[1]:"";if(b===w){var f=this.triggerHandler("getData"+d[1]+"!",[d[0]]);if(f===w&&this.length)f=c.data(this[0],a);return f===w&&d[1]?this.data(d[0]):f}else return this.trigger("setData"+d[1]+"!",[d[0],b]).each(function(){c.data(this,
a,b)})},removeData:function(a){return this.each(function(){c.removeData(this,a)})}});c.extend({queue:function(a,b,d){if(a){b=(b||"fx")+"queue";var f=c.data(a,b);if(!d)return f||[];if(!f||c.isArray(d))f=c.data(a,b,c.makeArray(d));else f.push(d);return f}},dequeue:function(a,b){b=b||"fx";var d=c.queue(a,b),f=d.shift();if(f==="inprogress")f=d.shift();if(f){b==="fx"&&d.unshift("inprogress");f.call(a,function(){c.dequeue(a,b)})}}});c.fn.extend({queue:function(a,b){if(typeof a!=="string"){b=a;a="fx"}if(b===
w)return c.queue(this[0],a);return this.each(function(){var d=c.queue(this,a,b);a==="fx"&&d[0]!=="inprogress"&&c.dequeue(this,a)})},dequeue:function(a){return this.each(function(){c.dequeue(this,a)})},delay:function(a,b){a=c.fx?c.fx.speeds[a]||a:a;b=b||"fx";return this.queue(b,function(){var d=this;setTimeout(function(){c.dequeue(d,b)},a)})},clearQueue:function(a){return this.queue(a||"fx",[])}});var Aa=/[\n\t]/g,ca=/\s+/,Za=/\r/g,$a=/href|src|style/,ab=/(button|input)/i,bb=/(button|input|object|select|textarea)/i,
cb=/^(a|area)$/i,Ba=/radio|checkbox/;c.fn.extend({attr:function(a,b){return X(this,a,b,true,c.attr)},removeAttr:function(a){return this.each(function(){c.attr(this,a,"");this.nodeType===1&&this.removeAttribute(a)})},addClass:function(a){if(c.isFunction(a))return this.each(function(n){var r=c(this);r.addClass(a.call(this,n,r.attr("class")))});if(a&&typeof a==="string")for(var b=(a||"").split(ca),d=0,f=this.length;d<f;d++){var e=this[d];if(e.nodeType===1)if(e.className){for(var j=" "+e.className+" ",
i=e.className,o=0,k=b.length;o<k;o++)if(j.indexOf(" "+b[o]+" ")<0)i+=" "+b[o];e.className=c.trim(i)}else e.className=a}return this},removeClass:function(a){if(c.isFunction(a))return this.each(function(k){var n=c(this);n.removeClass(a.call(this,k,n.attr("class")))});if(a&&typeof a==="string"||a===w)for(var b=(a||"").split(ca),d=0,f=this.length;d<f;d++){var e=this[d];if(e.nodeType===1&&e.className)if(a){for(var j=(" "+e.className+" ").replace(Aa," "),i=0,o=b.length;i<o;i++)j=j.replace(" "+b[i]+" ",
" ");e.className=c.trim(j)}else e.className=""}return this},toggleClass:function(a,b){var d=typeof a,f=typeof b==="boolean";if(c.isFunction(a))return this.each(function(e){var j=c(this);j.toggleClass(a.call(this,e,j.attr("class"),b),b)});return this.each(function(){if(d==="string")for(var e,j=0,i=c(this),o=b,k=a.split(ca);e=k[j++];){o=f?o:!i.hasClass(e);i[o?"addClass":"removeClass"](e)}else if(d==="undefined"||d==="boolean"){this.className&&c.data(this,"__className__",this.className);this.className=
this.className||a===false?"":c.data(this,"__className__")||""}})},hasClass:function(a){a=" "+a+" ";for(var b=0,d=this.length;b<d;b++)if((" "+this[b].className+" ").replace(Aa," ").indexOf(a)>-1)return true;return false},val:function(a){if(a===w){var b=this[0];if(b){if(c.nodeName(b,"option"))return(b.attributes.value||{}).specified?b.value:b.text;if(c.nodeName(b,"select")){var d=b.selectedIndex,f=[],e=b.options;b=b.type==="select-one";if(d<0)return null;var j=b?d:0;for(d=b?d+1:e.length;j<d;j++){var i=
e[j];if(i.selected){a=c(i).val();if(b)return a;f.push(a)}}return f}if(Ba.test(b.type)&&!c.support.checkOn)return b.getAttribute("value")===null?"on":b.value;return(b.value||"").replace(Za,"")}return w}var o=c.isFunction(a);return this.each(function(k){var n=c(this),r=a;if(this.nodeType===1){if(o)r=a.call(this,k,n.val());if(typeof r==="number")r+="";if(c.isArray(r)&&Ba.test(this.type))this.checked=c.inArray(n.val(),r)>=0;else if(c.nodeName(this,"select")){var u=c.makeArray(r);c("option",this).each(function(){this.selected=
c.inArray(c(this).val(),u)>=0});if(!u.length)this.selectedIndex=-1}else this.value=r}})}});c.extend({attrFn:{val:true,css:true,html:true,text:true,data:true,width:true,height:true,offset:true},attr:function(a,b,d,f){if(!a||a.nodeType===3||a.nodeType===8)return w;if(f&&b in c.attrFn)return c(a)[b](d);f=a.nodeType!==1||!c.isXMLDoc(a);var e=d!==w;b=f&&c.props[b]||b;if(a.nodeType===1){var j=$a.test(b);if(b in a&&f&&!j){if(e){b==="type"&&ab.test(a.nodeName)&&a.parentNode&&c.error("type property can't be changed");
a[b]=d}if(c.nodeName(a,"form")&&a.getAttributeNode(b))return a.getAttributeNode(b).nodeValue;if(b==="tabIndex")return(b=a.getAttributeNode("tabIndex"))&&b.specified?b.value:bb.test(a.nodeName)||cb.test(a.nodeName)&&a.href?0:w;return a[b]}if(!c.support.style&&f&&b==="style"){if(e)a.style.cssText=""+d;return a.style.cssText}e&&a.setAttribute(b,""+d);a=!c.support.hrefNormalized&&f&&j?a.getAttribute(b,2):a.getAttribute(b);return a===null?w:a}return c.style(a,b,d)}});var O=/\.(.*)$/,db=function(a){return a.replace(/[^\w\s\.\|`]/g,
function(b){return"\\"+b})};c.event={add:function(a,b,d,f){if(!(a.nodeType===3||a.nodeType===8)){if(a.setInterval&&a!==A&&!a.frameElement)a=A;var e,j;if(d.handler){e=d;d=e.handler}if(!d.guid)d.guid=c.guid++;if(j=c.data(a)){var i=j.events=j.events||{},o=j.handle;if(!o)j.handle=o=function(){return typeof c!=="undefined"&&!c.event.triggered?c.event.handle.apply(o.elem,arguments):w};o.elem=a;b=b.split(" ");for(var k,n=0,r;k=b[n++];){j=e?c.extend({},e):{handler:d,data:f};if(k.indexOf(".")>-1){r=k.split(".");
k=r.shift();j.namespace=r.slice(0).sort().join(".")}else{r=[];j.namespace=""}j.type=k;j.guid=d.guid;var u=i[k],z=c.event.special[k]||{};if(!u){u=i[k]=[];if(!z.setup||z.setup.call(a,f,r,o)===false)if(a.addEventListener)a.addEventListener(k,o,false);else a.attachEvent&&a.attachEvent("on"+k,o)}if(z.add){z.add.call(a,j);if(!j.handler.guid)j.handler.guid=d.guid}u.push(j);c.event.global[k]=true}a=null}}},global:{},remove:function(a,b,d,f){if(!(a.nodeType===3||a.nodeType===8)){var e,j=0,i,o,k,n,r,u,z=c.data(a),
C=z&&z.events;if(z&&C){if(b&&b.type){d=b.handler;b=b.type}if(!b||typeof b==="string"&&b.charAt(0)==="."){b=b||"";for(e in C)c.event.remove(a,e+b)}else{for(b=b.split(" ");e=b[j++];){n=e;i=e.indexOf(".")<0;o=[];if(!i){o=e.split(".");e=o.shift();k=new RegExp("(^|\\.)"+c.map(o.slice(0).sort(),db).join("\\.(?:.*\\.)?")+"(\\.|$)")}if(r=C[e])if(d){n=c.event.special[e]||{};for(B=f||0;B<r.length;B++){u=r[B];if(d.guid===u.guid){if(i||k.test(u.namespace)){f==null&&r.splice(B--,1);n.remove&&n.remove.call(a,u)}if(f!=
null)break}}if(r.length===0||f!=null&&r.length===1){if(!n.teardown||n.teardown.call(a,o)===false)Ca(a,e,z.handle);delete C[e]}}else for(var B=0;B<r.length;B++){u=r[B];if(i||k.test(u.namespace)){c.event.remove(a,n,u.handler,B);r.splice(B--,1)}}}if(c.isEmptyObject(C)){if(b=z.handle)b.elem=null;delete z.events;delete z.handle;c.isEmptyObject(z)&&c.removeData(a)}}}}},trigger:function(a,b,d,f){var e=a.type||a;if(!f){a=typeof a==="object"?a[G]?a:c.extend(c.Event(e),a):c.Event(e);if(e.indexOf("!")>=0){a.type=
e=e.slice(0,-1);a.exclusive=true}if(!d){a.stopPropagation();c.event.global[e]&&c.each(c.cache,function(){this.events&&this.events[e]&&c.event.trigger(a,b,this.handle.elem)})}if(!d||d.nodeType===3||d.nodeType===8)return w;a.result=w;a.target=d;b=c.makeArray(b);b.unshift(a)}a.currentTarget=d;(f=c.data(d,"handle"))&&f.apply(d,b);f=d.parentNode||d.ownerDocument;try{if(!(d&&d.nodeName&&c.noData[d.nodeName.toLowerCase()]))if(d["on"+e]&&d["on"+e].apply(d,b)===false)a.result=false}catch(j){}if(!a.isPropagationStopped()&&
f)c.event.trigger(a,b,f,true);else if(!a.isDefaultPrevented()){f=a.target;var i,o=c.nodeName(f,"a")&&e==="click",k=c.event.special[e]||{};if((!k._default||k._default.call(d,a)===false)&&!o&&!(f&&f.nodeName&&c.noData[f.nodeName.toLowerCase()])){try{if(f[e]){if(i=f["on"+e])f["on"+e]=null;c.event.triggered=true;f[e]()}}catch(n){}if(i)f["on"+e]=i;c.event.triggered=false}}},handle:function(a){var b,d,f,e;a=arguments[0]=c.event.fix(a||A.event);a.currentTarget=this;b=a.type.indexOf(".")<0&&!a.exclusive;
if(!b){d=a.type.split(".");a.type=d.shift();f=new RegExp("(^|\\.)"+d.slice(0).sort().join("\\.(?:.*\\.)?")+"(\\.|$)")}e=c.data(this,"events");d=e[a.type];if(e&&d){d=d.slice(0);e=0;for(var j=d.length;e<j;e++){var i=d[e];if(b||f.test(i.namespace)){a.handler=i.handler;a.data=i.data;a.handleObj=i;i=i.handler.apply(this,arguments);if(i!==w){a.result=i;if(i===false){a.preventDefault();a.stopPropagation()}}if(a.isImmediatePropagationStopped())break}}}return a.result},props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),
fix:function(a){if(a[G])return a;var b=a;a=c.Event(b);for(var d=this.props.length,f;d;){f=this.props[--d];a[f]=b[f]}if(!a.target)a.target=a.srcElement||s;if(a.target.nodeType===3)a.target=a.target.parentNode;if(!a.relatedTarget&&a.fromElement)a.relatedTarget=a.fromElement===a.target?a.toElement:a.fromElement;if(a.pageX==null&&a.clientX!=null){b=s.documentElement;d=s.body;a.pageX=a.clientX+(b&&b.scrollLeft||d&&d.scrollLeft||0)-(b&&b.clientLeft||d&&d.clientLeft||0);a.pageY=a.clientY+(b&&b.scrollTop||
d&&d.scrollTop||0)-(b&&b.clientTop||d&&d.clientTop||0)}if(!a.which&&(a.charCode||a.charCode===0?a.charCode:a.keyCode))a.which=a.charCode||a.keyCode;if(!a.metaKey&&a.ctrlKey)a.metaKey=a.ctrlKey;if(!a.which&&a.button!==w)a.which=a.button&1?1:a.button&2?3:a.button&4?2:0;return a},guid:1E8,proxy:c.proxy,special:{ready:{setup:c.bindReady,teardown:c.noop},live:{add:function(a){c.event.add(this,a.origType,c.extend({},a,{handler:oa}))},remove:function(a){var b=true,d=a.origType.replace(O,"");c.each(c.data(this,
"events").live||[],function(){if(d===this.origType.replace(O,""))return b=false});b&&c.event.remove(this,a.origType,oa)}},beforeunload:{setup:function(a,b,d){if(this.setInterval)this.onbeforeunload=d;return false},teardown:function(a,b){if(this.onbeforeunload===b)this.onbeforeunload=null}}}};var Ca=s.removeEventListener?function(a,b,d){a.removeEventListener(b,d,false)}:function(a,b,d){a.detachEvent("on"+b,d)};c.Event=function(a){if(!this.preventDefault)return new c.Event(a);if(a&&a.type){this.originalEvent=
a;this.type=a.type}else this.type=a;this.timeStamp=J();this[G]=true};c.Event.prototype={preventDefault:function(){this.isDefaultPrevented=Z;var a=this.originalEvent;if(a){a.preventDefault&&a.preventDefault();a.returnValue=false}},stopPropagation:function(){this.isPropagationStopped=Z;var a=this.originalEvent;if(a){a.stopPropagation&&a.stopPropagation();a.cancelBubble=true}},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=Z;this.stopPropagation()},isDefaultPrevented:Y,isPropagationStopped:Y,
isImmediatePropagationStopped:Y};var Da=function(a){var b=a.relatedTarget;try{for(;b&&b!==this;)b=b.parentNode;if(b!==this){a.type=a.data;c.event.handle.apply(this,arguments)}}catch(d){}},Ea=function(a){a.type=a.data;c.event.handle.apply(this,arguments)};c.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){c.event.special[a]={setup:function(d){c.event.add(this,b,d&&d.selector?Ea:Da,a)},teardown:function(d){c.event.remove(this,b,d&&d.selector?Ea:Da)}}});if(!c.support.submitBubbles)c.event.special.submit=
{setup:function(){if(this.nodeName.toLowerCase()!=="form"){c.event.add(this,"click.specialSubmit",function(a){var b=a.target,d=b.type;if((d==="submit"||d==="image")&&c(b).closest("form").length)return na("submit",this,arguments)});c.event.add(this,"keypress.specialSubmit",function(a){var b=a.target,d=b.type;if((d==="text"||d==="password")&&c(b).closest("form").length&&a.keyCode===13)return na("submit",this,arguments)})}else return false},teardown:function(){c.event.remove(this,".specialSubmit")}};
if(!c.support.changeBubbles){var da=/textarea|input|select/i,ea,Fa=function(a){var b=a.type,d=a.value;if(b==="radio"||b==="checkbox")d=a.checked;else if(b==="select-multiple")d=a.selectedIndex>-1?c.map(a.options,function(f){return f.selected}).join("-"):"";else if(a.nodeName.toLowerCase()==="select")d=a.selectedIndex;return d},fa=function(a,b){var d=a.target,f,e;if(!(!da.test(d.nodeName)||d.readOnly)){f=c.data(d,"_change_data");e=Fa(d);if(a.type!=="focusout"||d.type!=="radio")c.data(d,"_change_data",
e);if(!(f===w||e===f))if(f!=null||e){a.type="change";return c.event.trigger(a,b,d)}}};c.event.special.change={filters:{focusout:fa,click:function(a){var b=a.target,d=b.type;if(d==="radio"||d==="checkbox"||b.nodeName.toLowerCase()==="select")return fa.call(this,a)},keydown:function(a){var b=a.target,d=b.type;if(a.keyCode===13&&b.nodeName.toLowerCase()!=="textarea"||a.keyCode===32&&(d==="checkbox"||d==="radio")||d==="select-multiple")return fa.call(this,a)},beforeactivate:function(a){a=a.target;c.data(a,
"_change_data",Fa(a))}},setup:function(){if(this.type==="file")return false;for(var a in ea)c.event.add(this,a+".specialChange",ea[a]);return da.test(this.nodeName)},teardown:function(){c.event.remove(this,".specialChange");return da.test(this.nodeName)}};ea=c.event.special.change.filters}s.addEventListener&&c.each({focus:"focusin",blur:"focusout"},function(a,b){function d(f){f=c.event.fix(f);f.type=b;return c.event.handle.call(this,f)}c.event.special[b]={setup:function(){this.addEventListener(a,
d,true)},teardown:function(){this.removeEventListener(a,d,true)}}});c.each(["bind","one"],function(a,b){c.fn[b]=function(d,f,e){if(typeof d==="object"){for(var j in d)this[b](j,f,d[j],e);return this}if(c.isFunction(f)){e=f;f=w}var i=b==="one"?c.proxy(e,function(k){c(this).unbind(k,i);return e.apply(this,arguments)}):e;if(d==="unload"&&b!=="one")this.one(d,f,e);else{j=0;for(var o=this.length;j<o;j++)c.event.add(this[j],d,i,f)}return this}});c.fn.extend({unbind:function(a,b){if(typeof a==="object"&&
!a.preventDefault)for(var d in a)this.unbind(d,a[d]);else{d=0;for(var f=this.length;d<f;d++)c.event.remove(this[d],a,b)}return this},delegate:function(a,b,d,f){return this.live(b,d,f,a)},undelegate:function(a,b,d){return arguments.length===0?this.unbind("live"):this.die(b,null,d,a)},trigger:function(a,b){return this.each(function(){c.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0]){a=c.Event(a);a.preventDefault();a.stopPropagation();c.event.trigger(a,b,this[0]);return a.result}},
toggle:function(a){for(var b=arguments,d=1;d<b.length;)c.proxy(a,b[d++]);return this.click(c.proxy(a,function(f){var e=(c.data(this,"lastToggle"+a.guid)||0)%d;c.data(this,"lastToggle"+a.guid,e+1);f.preventDefault();return b[e].apply(this,arguments)||false}))},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});var Ga={focus:"focusin",blur:"focusout",mouseenter:"mouseover",mouseleave:"mouseout"};c.each(["live","die"],function(a,b){c.fn[b]=function(d,f,e,j){var i,o=0,k,n,r=j||this.selector,
u=j?this:c(this.context);if(c.isFunction(f)){e=f;f=w}for(d=(d||"").split(" ");(i=d[o++])!=null;){j=O.exec(i);k="";if(j){k=j[0];i=i.replace(O,"")}if(i==="hover")d.push("mouseenter"+k,"mouseleave"+k);else{n=i;if(i==="focus"||i==="blur"){d.push(Ga[i]+k);i+=k}else i=(Ga[i]||i)+k;b==="live"?u.each(function(){c.event.add(this,pa(i,r),{data:f,selector:r,handler:e,origType:i,origHandler:e,preType:n})}):u.unbind(pa(i,r),e)}}return this}});c.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "),
function(a,b){c.fn[b]=function(d){return d?this.bind(b,d):this.trigger(b)};if(c.attrFn)c.attrFn[b]=true});A.attachEvent&&!A.addEventListener&&A.attachEvent("onunload",function(){for(var a in c.cache)if(c.cache[a].handle)try{c.event.remove(c.cache[a].handle.elem)}catch(b){}});(function(){function a(g){for(var h="",l,m=0;g[m];m++){l=g[m];if(l.nodeType===3||l.nodeType===4)h+=l.nodeValue;else if(l.nodeType!==8)h+=a(l.childNodes)}return h}function b(g,h,l,m,q,p){q=0;for(var v=m.length;q<v;q++){var t=m[q];
if(t){t=t[g];for(var y=false;t;){if(t.sizcache===l){y=m[t.sizset];break}if(t.nodeType===1&&!p){t.sizcache=l;t.sizset=q}if(t.nodeName.toLowerCase()===h){y=t;break}t=t[g]}m[q]=y}}}function d(g,h,l,m,q,p){q=0;for(var v=m.length;q<v;q++){var t=m[q];if(t){t=t[g];for(var y=false;t;){if(t.sizcache===l){y=m[t.sizset];break}if(t.nodeType===1){if(!p){t.sizcache=l;t.sizset=q}if(typeof h!=="string"){if(t===h){y=true;break}}else if(k.filter(h,[t]).length>0){y=t;break}}t=t[g]}m[q]=y}}}var f=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
e=0,j=Object.prototype.toString,i=false,o=true;[0,0].sort(function(){o=false;return 0});var k=function(g,h,l,m){l=l||[];var q=h=h||s;if(h.nodeType!==1&&h.nodeType!==9)return[];if(!g||typeof g!=="string")return l;for(var p=[],v,t,y,S,H=true,M=x(h),I=g;(f.exec(""),v=f.exec(I))!==null;){I=v[3];p.push(v[1]);if(v[2]){S=v[3];break}}if(p.length>1&&r.exec(g))if(p.length===2&&n.relative[p[0]])t=ga(p[0]+p[1],h);else for(t=n.relative[p[0]]?[h]:k(p.shift(),h);p.length;){g=p.shift();if(n.relative[g])g+=p.shift();
t=ga(g,t)}else{if(!m&&p.length>1&&h.nodeType===9&&!M&&n.match.ID.test(p[0])&&!n.match.ID.test(p[p.length-1])){v=k.find(p.shift(),h,M);h=v.expr?k.filter(v.expr,v.set)[0]:v.set[0]}if(h){v=m?{expr:p.pop(),set:z(m)}:k.find(p.pop(),p.length===1&&(p[0]==="~"||p[0]==="+")&&h.parentNode?h.parentNode:h,M);t=v.expr?k.filter(v.expr,v.set):v.set;if(p.length>0)y=z(t);else H=false;for(;p.length;){var D=p.pop();v=D;if(n.relative[D])v=p.pop();else D="";if(v==null)v=h;n.relative[D](y,v,M)}}else y=[]}y||(y=t);y||k.error(D||
g);if(j.call(y)==="[object Array]")if(H)if(h&&h.nodeType===1)for(g=0;y[g]!=null;g++){if(y[g]&&(y[g]===true||y[g].nodeType===1&&E(h,y[g])))l.push(t[g])}else for(g=0;y[g]!=null;g++)y[g]&&y[g].nodeType===1&&l.push(t[g]);else l.push.apply(l,y);else z(y,l);if(S){k(S,q,l,m);k.uniqueSort(l)}return l};k.uniqueSort=function(g){if(B){i=o;g.sort(B);if(i)for(var h=1;h<g.length;h++)g[h]===g[h-1]&&g.splice(h--,1)}return g};k.matches=function(g,h){return k(g,null,null,h)};k.find=function(g,h,l){var m,q;if(!g)return[];
for(var p=0,v=n.order.length;p<v;p++){var t=n.order[p];if(q=n.leftMatch[t].exec(g)){var y=q[1];q.splice(1,1);if(y.substr(y.length-1)!=="\\"){q[1]=(q[1]||"").replace(/\\/g,"");m=n.find[t](q,h,l);if(m!=null){g=g.replace(n.match[t],"");break}}}}m||(m=h.getElementsByTagName("*"));return{set:m,expr:g}};k.filter=function(g,h,l,m){for(var q=g,p=[],v=h,t,y,S=h&&h[0]&&x(h[0]);g&&h.length;){for(var H in n.filter)if((t=n.leftMatch[H].exec(g))!=null&&t[2]){var M=n.filter[H],I,D;D=t[1];y=false;t.splice(1,1);if(D.substr(D.length-
1)!=="\\"){if(v===p)p=[];if(n.preFilter[H])if(t=n.preFilter[H](t,v,l,p,m,S)){if(t===true)continue}else y=I=true;if(t)for(var U=0;(D=v[U])!=null;U++)if(D){I=M(D,t,U,v);var Ha=m^!!I;if(l&&I!=null)if(Ha)y=true;else v[U]=false;else if(Ha){p.push(D);y=true}}if(I!==w){l||(v=p);g=g.replace(n.match[H],"");if(!y)return[];break}}}if(g===q)if(y==null)k.error(g);else break;q=g}return v};k.error=function(g){throw"Syntax error, unrecognized expression: "+g;};var n=k.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF-]|\\.)+)/,
CLASS:/\.((?:[\w\u00c0-\uFFFF-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(g){return g.getAttribute("href")}},
relative:{"+":function(g,h){var l=typeof h==="string",m=l&&!/\W/.test(h);l=l&&!m;if(m)h=h.toLowerCase();m=0;for(var q=g.length,p;m<q;m++)if(p=g[m]){for(;(p=p.previousSibling)&&p.nodeType!==1;);g[m]=l||p&&p.nodeName.toLowerCase()===h?p||false:p===h}l&&k.filter(h,g,true)},">":function(g,h){var l=typeof h==="string";if(l&&!/\W/.test(h)){h=h.toLowerCase();for(var m=0,q=g.length;m<q;m++){var p=g[m];if(p){l=p.parentNode;g[m]=l.nodeName.toLowerCase()===h?l:false}}}else{m=0;for(q=g.length;m<q;m++)if(p=g[m])g[m]=
l?p.parentNode:p.parentNode===h;l&&k.filter(h,g,true)}},"":function(g,h,l){var m=e++,q=d;if(typeof h==="string"&&!/\W/.test(h)){var p=h=h.toLowerCase();q=b}q("parentNode",h,m,g,p,l)},"~":function(g,h,l){var m=e++,q=d;if(typeof h==="string"&&!/\W/.test(h)){var p=h=h.toLowerCase();q=b}q("previousSibling",h,m,g,p,l)}},find:{ID:function(g,h,l){if(typeof h.getElementById!=="undefined"&&!l)return(g=h.getElementById(g[1]))?[g]:[]},NAME:function(g,h){if(typeof h.getElementsByName!=="undefined"){var l=[];
h=h.getElementsByName(g[1]);for(var m=0,q=h.length;m<q;m++)h[m].getAttribute("name")===g[1]&&l.push(h[m]);return l.length===0?null:l}},TAG:function(g,h){return h.getElementsByTagName(g[1])}},preFilter:{CLASS:function(g,h,l,m,q,p){g=" "+g[1].replace(/\\/g,"")+" ";if(p)return g;p=0;for(var v;(v=h[p])!=null;p++)if(v)if(q^(v.className&&(" "+v.className+" ").replace(/[\t\n]/g," ").indexOf(g)>=0))l||m.push(v);else if(l)h[p]=false;return false},ID:function(g){return g[1].replace(/\\/g,"")},TAG:function(g){return g[1].toLowerCase()},
CHILD:function(g){if(g[1]==="nth"){var h=/(-?)(\d*)n((?:\+|-)?\d*)/.exec(g[2]==="even"&&"2n"||g[2]==="odd"&&"2n+1"||!/\D/.test(g[2])&&"0n+"+g[2]||g[2]);g[2]=h[1]+(h[2]||1)-0;g[3]=h[3]-0}g[0]=e++;return g},ATTR:function(g,h,l,m,q,p){h=g[1].replace(/\\/g,"");if(!p&&n.attrMap[h])g[1]=n.attrMap[h];if(g[2]==="~=")g[4]=" "+g[4]+" ";return g},PSEUDO:function(g,h,l,m,q){if(g[1]==="not")if((f.exec(g[3])||"").length>1||/^\w/.test(g[3]))g[3]=k(g[3],null,null,h);else{g=k.filter(g[3],h,l,true^q);l||m.push.apply(m,
g);return false}else if(n.match.POS.test(g[0])||n.match.CHILD.test(g[0]))return true;return g},POS:function(g){g.unshift(true);return g}},filters:{enabled:function(g){return g.disabled===false&&g.type!=="hidden"},disabled:function(g){return g.disabled===true},checked:function(g){return g.checked===true},selected:function(g){return g.selected===true},parent:function(g){return!!g.firstChild},empty:function(g){return!g.firstChild},has:function(g,h,l){return!!k(l[3],g).length},header:function(g){return/h\d/i.test(g.nodeName)},
text:function(g){return"text"===g.type},radio:function(g){return"radio"===g.type},checkbox:function(g){return"checkbox"===g.type},file:function(g){return"file"===g.type},password:function(g){return"password"===g.type},submit:function(g){return"submit"===g.type},image:function(g){return"image"===g.type},reset:function(g){return"reset"===g.type},button:function(g){return"button"===g.type||g.nodeName.toLowerCase()==="button"},input:function(g){return/input|select|textarea|button/i.test(g.nodeName)}},
setFilters:{first:function(g,h){return h===0},last:function(g,h,l,m){return h===m.length-1},even:function(g,h){return h%2===0},odd:function(g,h){return h%2===1},lt:function(g,h,l){return h<l[3]-0},gt:function(g,h,l){return h>l[3]-0},nth:function(g,h,l){return l[3]-0===h},eq:function(g,h,l){return l[3]-0===h}},filter:{PSEUDO:function(g,h,l,m){var q=h[1],p=n.filters[q];if(p)return p(g,l,h,m);else if(q==="contains")return(g.textContent||g.innerText||a([g])||"").indexOf(h[3])>=0;else if(q==="not"){h=
h[3];l=0;for(m=h.length;l<m;l++)if(h[l]===g)return false;return true}else k.error("Syntax error, unrecognized expression: "+q)},CHILD:function(g,h){var l=h[1],m=g;switch(l){case "only":case "first":for(;m=m.previousSibling;)if(m.nodeType===1)return false;if(l==="first")return true;m=g;case "last":for(;m=m.nextSibling;)if(m.nodeType===1)return false;return true;case "nth":l=h[2];var q=h[3];if(l===1&&q===0)return true;h=h[0];var p=g.parentNode;if(p&&(p.sizcache!==h||!g.nodeIndex)){var v=0;for(m=p.firstChild;m;m=
m.nextSibling)if(m.nodeType===1)m.nodeIndex=++v;p.sizcache=h}g=g.nodeIndex-q;return l===0?g===0:g%l===0&&g/l>=0}},ID:function(g,h){return g.nodeType===1&&g.getAttribute("id")===h},TAG:function(g,h){return h==="*"&&g.nodeType===1||g.nodeName.toLowerCase()===h},CLASS:function(g,h){return(" "+(g.className||g.getAttribute("class"))+" ").indexOf(h)>-1},ATTR:function(g,h){var l=h[1];g=n.attrHandle[l]?n.attrHandle[l](g):g[l]!=null?g[l]:g.getAttribute(l);l=g+"";var m=h[2];h=h[4];return g==null?m==="!=":m===
"="?l===h:m==="*="?l.indexOf(h)>=0:m==="~="?(" "+l+" ").indexOf(h)>=0:!h?l&&g!==false:m==="!="?l!==h:m==="^="?l.indexOf(h)===0:m==="$="?l.substr(l.length-h.length)===h:m==="|="?l===h||l.substr(0,h.length+1)===h+"-":false},POS:function(g,h,l,m){var q=n.setFilters[h[2]];if(q)return q(g,l,h,m)}}},r=n.match.POS;for(var u in n.match){n.match[u]=new RegExp(n.match[u].source+/(?![^\[]*\])(?![^\(]*\))/.source);n.leftMatch[u]=new RegExp(/(^(?:.|\r|\n)*?)/.source+n.match[u].source.replace(/\\(\d+)/g,function(g,
h){return"\\"+(h-0+1)}))}var z=function(g,h){g=Array.prototype.slice.call(g,0);if(h){h.push.apply(h,g);return h}return g};try{Array.prototype.slice.call(s.documentElement.childNodes,0)}catch(C){z=function(g,h){h=h||[];if(j.call(g)==="[object Array]")Array.prototype.push.apply(h,g);else if(typeof g.length==="number")for(var l=0,m=g.length;l<m;l++)h.push(g[l]);else for(l=0;g[l];l++)h.push(g[l]);return h}}var B;if(s.documentElement.compareDocumentPosition)B=function(g,h){if(!g.compareDocumentPosition||
!h.compareDocumentPosition){if(g==h)i=true;return g.compareDocumentPosition?-1:1}g=g.compareDocumentPosition(h)&4?-1:g===h?0:1;if(g===0)i=true;return g};else if("sourceIndex"in s.documentElement)B=function(g,h){if(!g.sourceIndex||!h.sourceIndex){if(g==h)i=true;return g.sourceIndex?-1:1}g=g.sourceIndex-h.sourceIndex;if(g===0)i=true;return g};else if(s.createRange)B=function(g,h){if(!g.ownerDocument||!h.ownerDocument){if(g==h)i=true;return g.ownerDocument?-1:1}var l=g.ownerDocument.createRange(),m=
h.ownerDocument.createRange();l.setStart(g,0);l.setEnd(g,0);m.setStart(h,0);m.setEnd(h,0);g=l.compareBoundaryPoints(Range.START_TO_END,m);if(g===0)i=true;return g};(function(){var g=s.createElement("div"),h="script"+(new Date).getTime();g.innerHTML="<a name='"+h+"'/>";var l=s.documentElement;l.insertBefore(g,l.firstChild);if(s.getElementById(h)){n.find.ID=function(m,q,p){if(typeof q.getElementById!=="undefined"&&!p)return(q=q.getElementById(m[1]))?q.id===m[1]||typeof q.getAttributeNode!=="undefined"&&
q.getAttributeNode("id").nodeValue===m[1]?[q]:w:[]};n.filter.ID=function(m,q){var p=typeof m.getAttributeNode!=="undefined"&&m.getAttributeNode("id");return m.nodeType===1&&p&&p.nodeValue===q}}l.removeChild(g);l=g=null})();(function(){var g=s.createElement("div");g.appendChild(s.createComment(""));if(g.getElementsByTagName("*").length>0)n.find.TAG=function(h,l){l=l.getElementsByTagName(h[1]);if(h[1]==="*"){h=[];for(var m=0;l[m];m++)l[m].nodeType===1&&h.push(l[m]);l=h}return l};g.innerHTML="<a href='#'></a>";
if(g.firstChild&&typeof g.firstChild.getAttribute!=="undefined"&&g.firstChild.getAttribute("href")!=="#")n.attrHandle.href=function(h){return h.getAttribute("href",2)};g=null})();s.querySelectorAll&&function(){var g=k,h=s.createElement("div");h.innerHTML="<p class='TEST'></p>";if(!(h.querySelectorAll&&h.querySelectorAll(".TEST").length===0)){k=function(m,q,p,v){q=q||s;if(!v&&q.nodeType===9&&!x(q))try{return z(q.querySelectorAll(m),p)}catch(t){}return g(m,q,p,v)};for(var l in g)k[l]=g[l];h=null}}();
(function(){var g=s.createElement("div");g.innerHTML="<div class='test e'></div><div class='test'></div>";if(!(!g.getElementsByClassName||g.getElementsByClassName("e").length===0)){g.lastChild.className="e";if(g.getElementsByClassName("e").length!==1){n.order.splice(1,0,"CLASS");n.find.CLASS=function(h,l,m){if(typeof l.getElementsByClassName!=="undefined"&&!m)return l.getElementsByClassName(h[1])};g=null}}})();var E=s.compareDocumentPosition?function(g,h){return!!(g.compareDocumentPosition(h)&16)}:
function(g,h){return g!==h&&(g.contains?g.contains(h):true)},x=function(g){return(g=(g?g.ownerDocument||g:0).documentElement)?g.nodeName!=="HTML":false},ga=function(g,h){var l=[],m="",q;for(h=h.nodeType?[h]:h;q=n.match.PSEUDO.exec(g);){m+=q[0];g=g.replace(n.match.PSEUDO,"")}g=n.relative[g]?g+"*":g;q=0;for(var p=h.length;q<p;q++)k(g,h[q],l);return k.filter(m,l)};c.find=k;c.expr=k.selectors;c.expr[":"]=c.expr.filters;c.unique=k.uniqueSort;c.text=a;c.isXMLDoc=x;c.contains=E})();var eb=/Until$/,fb=/^(?:parents|prevUntil|prevAll)/,
gb=/,/;R=Array.prototype.slice;var Ia=function(a,b,d){if(c.isFunction(b))return c.grep(a,function(e,j){return!!b.call(e,j,e)===d});else if(b.nodeType)return c.grep(a,function(e){return e===b===d});else if(typeof b==="string"){var f=c.grep(a,function(e){return e.nodeType===1});if(Ua.test(b))return c.filter(b,f,!d);else b=c.filter(b,f)}return c.grep(a,function(e){return c.inArray(e,b)>=0===d})};c.fn.extend({find:function(a){for(var b=this.pushStack("","find",a),d=0,f=0,e=this.length;f<e;f++){d=b.length;
c.find(a,this[f],b);if(f>0)for(var j=d;j<b.length;j++)for(var i=0;i<d;i++)if(b[i]===b[j]){b.splice(j--,1);break}}return b},has:function(a){var b=c(a);return this.filter(function(){for(var d=0,f=b.length;d<f;d++)if(c.contains(this,b[d]))return true})},not:function(a){return this.pushStack(Ia(this,a,false),"not",a)},filter:function(a){return this.pushStack(Ia(this,a,true),"filter",a)},is:function(a){return!!a&&c.filter(a,this).length>0},closest:function(a,b){if(c.isArray(a)){var d=[],f=this[0],e,j=
{},i;if(f&&a.length){e=0;for(var o=a.length;e<o;e++){i=a[e];j[i]||(j[i]=c.expr.match.POS.test(i)?c(i,b||this.context):i)}for(;f&&f.ownerDocument&&f!==b;){for(i in j){e=j[i];if(e.jquery?e.index(f)>-1:c(f).is(e)){d.push({selector:i,elem:f});delete j[i]}}f=f.parentNode}}return d}var k=c.expr.match.POS.test(a)?c(a,b||this.context):null;return this.map(function(n,r){for(;r&&r.ownerDocument&&r!==b;){if(k?k.index(r)>-1:c(r).is(a))return r;r=r.parentNode}return null})},index:function(a){if(!a||typeof a===
"string")return c.inArray(this[0],a?c(a):this.parent().children());return c.inArray(a.jquery?a[0]:a,this)},add:function(a,b){a=typeof a==="string"?c(a,b||this.context):c.makeArray(a);b=c.merge(this.get(),a);return this.pushStack(qa(a[0])||qa(b[0])?b:c.unique(b))},andSelf:function(){return this.add(this.prevObject)}});c.each({parent:function(a){return(a=a.parentNode)&&a.nodeType!==11?a:null},parents:function(a){return c.dir(a,"parentNode")},parentsUntil:function(a,b,d){return c.dir(a,"parentNode",
d)},next:function(a){return c.nth(a,2,"nextSibling")},prev:function(a){return c.nth(a,2,"previousSibling")},nextAll:function(a){return c.dir(a,"nextSibling")},prevAll:function(a){return c.dir(a,"previousSibling")},nextUntil:function(a,b,d){return c.dir(a,"nextSibling",d)},prevUntil:function(a,b,d){return c.dir(a,"previousSibling",d)},siblings:function(a){return c.sibling(a.parentNode.firstChild,a)},children:function(a){return c.sibling(a.firstChild)},contents:function(a){return c.nodeName(a,"iframe")?
a.contentDocument||a.contentWindow.document:c.makeArray(a.childNodes)}},function(a,b){c.fn[a]=function(d,f){var e=c.map(this,b,d);eb.test(a)||(f=d);if(f&&typeof f==="string")e=c.filter(f,e);e=this.length>1?c.unique(e):e;if((this.length>1||gb.test(f))&&fb.test(a))e=e.reverse();return this.pushStack(e,a,R.call(arguments).join(","))}});c.extend({filter:function(a,b,d){if(d)a=":not("+a+")";return c.find.matches(a,b)},dir:function(a,b,d){var f=[];for(a=a[b];a&&a.nodeType!==9&&(d===w||a.nodeType!==1||!c(a).is(d));){a.nodeType===
1&&f.push(a);a=a[b]}return f},nth:function(a,b,d){b=b||1;for(var f=0;a;a=a[d])if(a.nodeType===1&&++f===b)break;return a},sibling:function(a,b){for(var d=[];a;a=a.nextSibling)a.nodeType===1&&a!==b&&d.push(a);return d}});var Ja=/ jQuery\d+="(?:\d+|null)"/g,V=/^\s+/,Ka=/(<([\w:]+)[^>]*?)\/>/g,hb=/^(?:area|br|col|embed|hr|img|input|link|meta|param)$/i,La=/<([\w:]+)/,ib=/<tbody/i,jb=/<|&#?\w+;/,ta=/<script|<object|<embed|<option|<style/i,ua=/checked\s*(?:[^=]|=\s*.checked.)/i,Ma=function(a,b,d){return hb.test(d)?
a:b+"></"+d+">"},F={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]};F.optgroup=F.option;F.tbody=F.tfoot=F.colgroup=F.caption=F.thead;F.th=F.td;if(!c.support.htmlSerialize)F._default=[1,"div<div>","</div>"];c.fn.extend({text:function(a){if(c.isFunction(a))return this.each(function(b){var d=
c(this);d.text(a.call(this,b,d.text()))});if(typeof a!=="object"&&a!==w)return this.empty().append((this[0]&&this[0].ownerDocument||s).createTextNode(a));return c.text(this)},wrapAll:function(a){if(c.isFunction(a))return this.each(function(d){c(this).wrapAll(a.call(this,d))});if(this[0]){var b=c(a,this[0].ownerDocument).eq(0).clone(true);this[0].parentNode&&b.insertBefore(this[0]);b.map(function(){for(var d=this;d.firstChild&&d.firstChild.nodeType===1;)d=d.firstChild;return d}).append(this)}return this},
wrapInner:function(a){if(c.isFunction(a))return this.each(function(b){c(this).wrapInner(a.call(this,b))});return this.each(function(){var b=c(this),d=b.contents();d.length?d.wrapAll(a):b.append(a)})},wrap:function(a){return this.each(function(){c(this).wrapAll(a)})},unwrap:function(){return this.parent().each(function(){c.nodeName(this,"body")||c(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,true,function(a){this.nodeType===1&&this.appendChild(a)})},
prepend:function(){return this.domManip(arguments,true,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,false,function(b){this.parentNode.insertBefore(b,this)});else if(arguments.length){var a=c(arguments[0]);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,false,function(b){this.parentNode.insertBefore(b,
this.nextSibling)});else if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,c(arguments[0]).toArray());return a}},remove:function(a,b){for(var d=0,f;(f=this[d])!=null;d++)if(!a||c.filter(a,[f]).length){if(!b&&f.nodeType===1){c.cleanData(f.getElementsByTagName("*"));c.cleanData([f])}f.parentNode&&f.parentNode.removeChild(f)}return this},empty:function(){for(var a=0,b;(b=this[a])!=null;a++)for(b.nodeType===1&&c.cleanData(b.getElementsByTagName("*"));b.firstChild;)b.removeChild(b.firstChild);
return this},clone:function(a){var b=this.map(function(){if(!c.support.noCloneEvent&&!c.isXMLDoc(this)){var d=this.outerHTML,f=this.ownerDocument;if(!d){d=f.createElement("div");d.appendChild(this.cloneNode(true));d=d.innerHTML}return c.clean([d.replace(Ja,"").replace(/=([^="'>\s]+\/)>/g,'="$1">').replace(V,"")],f)[0]}else return this.cloneNode(true)});if(a===true){ra(this,b);ra(this.find("*"),b.find("*"))}return b},html:function(a){if(a===w)return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(Ja,
""):null;else if(typeof a==="string"&&!ta.test(a)&&(c.support.leadingWhitespace||!V.test(a))&&!F[(La.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Ka,Ma);try{for(var b=0,d=this.length;b<d;b++)if(this[b].nodeType===1){c.cleanData(this[b].getElementsByTagName("*"));this[b].innerHTML=a}}catch(f){this.empty().append(a)}}else c.isFunction(a)?this.each(function(e){var j=c(this),i=j.html();j.empty().append(function(){return a.call(this,e,i)})}):this.empty().append(a);return this},replaceWith:function(a){if(this[0]&&
this[0].parentNode){if(c.isFunction(a))return this.each(function(b){var d=c(this),f=d.html();d.replaceWith(a.call(this,b,f))});if(typeof a!=="string")a=c(a).detach();return this.each(function(){var b=this.nextSibling,d=this.parentNode;c(this).remove();b?c(b).before(a):c(d).append(a)})}else return this.pushStack(c(c.isFunction(a)?a():a),"replaceWith",a)},detach:function(a){return this.remove(a,true)},domManip:function(a,b,d){function f(u){return c.nodeName(u,"table")?u.getElementsByTagName("tbody")[0]||
u.appendChild(u.ownerDocument.createElement("tbody")):u}var e,j,i=a[0],o=[],k;if(!c.support.checkClone&&arguments.length===3&&typeof i==="string"&&ua.test(i))return this.each(function(){c(this).domManip(a,b,d,true)});if(c.isFunction(i))return this.each(function(u){var z=c(this);a[0]=i.call(this,u,b?z.html():w);z.domManip(a,b,d)});if(this[0]){e=i&&i.parentNode;e=c.support.parentNode&&e&&e.nodeType===11&&e.childNodes.length===this.length?{fragment:e}:sa(a,this,o);k=e.fragment;if(j=k.childNodes.length===
1?(k=k.firstChild):k.firstChild){b=b&&c.nodeName(j,"tr");for(var n=0,r=this.length;n<r;n++)d.call(b?f(this[n],j):this[n],n>0||e.cacheable||this.length>1?k.cloneNode(true):k)}o.length&&c.each(o,Qa)}return this}});c.fragments={};c.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){c.fn[a]=function(d){var f=[];d=c(d);var e=this.length===1&&this[0].parentNode;if(e&&e.nodeType===11&&e.childNodes.length===1&&d.length===1){d[b](this[0]);
return this}else{e=0;for(var j=d.length;e<j;e++){var i=(e>0?this.clone(true):this).get();c.fn[b].apply(c(d[e]),i);f=f.concat(i)}return this.pushStack(f,a,d.selector)}}});c.extend({clean:function(a,b,d,f){b=b||s;if(typeof b.createElement==="undefined")b=b.ownerDocument||b[0]&&b[0].ownerDocument||s;for(var e=[],j=0,i;(i=a[j])!=null;j++){if(typeof i==="number")i+="";if(i){if(typeof i==="string"&&!jb.test(i))i=b.createTextNode(i);else if(typeof i==="string"){i=i.replace(Ka,Ma);var o=(La.exec(i)||["",
""])[1].toLowerCase(),k=F[o]||F._default,n=k[0],r=b.createElement("div");for(r.innerHTML=k[1]+i+k[2];n--;)r=r.lastChild;if(!c.support.tbody){n=ib.test(i);o=o==="table"&&!n?r.firstChild&&r.firstChild.childNodes:k[1]==="<table>"&&!n?r.childNodes:[];for(k=o.length-1;k>=0;--k)c.nodeName(o[k],"tbody")&&!o[k].childNodes.length&&o[k].parentNode.removeChild(o[k])}!c.support.leadingWhitespace&&V.test(i)&&r.insertBefore(b.createTextNode(V.exec(i)[0]),r.firstChild);i=r.childNodes}if(i.nodeType)e.push(i);else e=
c.merge(e,i)}}if(d)for(j=0;e[j];j++)if(f&&c.nodeName(e[j],"script")&&(!e[j].type||e[j].type.toLowerCase()==="text/javascript"))f.push(e[j].parentNode?e[j].parentNode.removeChild(e[j]):e[j]);else{e[j].nodeType===1&&e.splice.apply(e,[j+1,0].concat(c.makeArray(e[j].getElementsByTagName("script"))));d.appendChild(e[j])}return e},cleanData:function(a){for(var b,d,f=c.cache,e=c.event.special,j=c.support.deleteExpando,i=0,o;(o=a[i])!=null;i++)if(d=o[c.expando]){b=f[d];if(b.events)for(var k in b.events)e[k]?
c.event.remove(o,k):Ca(o,k,b.handle);if(j)delete o[c.expando];else o.removeAttribute&&o.removeAttribute(c.expando);delete f[d]}}});var kb=/z-?index|font-?weight|opacity|zoom|line-?height/i,Na=/alpha\([^)]*\)/,Oa=/opacity=([^)]*)/,ha=/float/i,ia=/-([a-z])/ig,lb=/([A-Z])/g,mb=/^-?\d+(?:px)?$/i,nb=/^-?\d/,ob={position:"absolute",visibility:"hidden",display:"block"},pb=["Left","Right"],qb=["Top","Bottom"],rb=s.defaultView&&s.defaultView.getComputedStyle,Pa=c.support.cssFloat?"cssFloat":"styleFloat",ja=
function(a,b){return b.toUpperCase()};c.fn.css=function(a,b){return X(this,a,b,true,function(d,f,e){if(e===w)return c.curCSS(d,f);if(typeof e==="number"&&!kb.test(f))e+="px";c.style(d,f,e)})};c.extend({style:function(a,b,d){if(!a||a.nodeType===3||a.nodeType===8)return w;if((b==="width"||b==="height")&&parseFloat(d)<0)d=w;var f=a.style||a,e=d!==w;if(!c.support.opacity&&b==="opacity"){if(e){f.zoom=1;b=parseInt(d,10)+""==="NaN"?"":"alpha(opacity="+d*100+")";a=f.filter||c.curCSS(a,"filter")||"";f.filter=
Na.test(a)?a.replace(Na,b):b}return f.filter&&f.filter.indexOf("opacity=")>=0?parseFloat(Oa.exec(f.filter)[1])/100+"":""}if(ha.test(b))b=Pa;b=b.replace(ia,ja);if(e)f[b]=d;return f[b]},css:function(a,b,d,f){if(b==="width"||b==="height"){var e,j=b==="width"?pb:qb;function i(){e=b==="width"?a.offsetWidth:a.offsetHeight;f!=="border"&&c.each(j,function(){f||(e-=parseFloat(c.curCSS(a,"padding"+this,true))||0);if(f==="margin")e+=parseFloat(c.curCSS(a,"margin"+this,true))||0;else e-=parseFloat(c.curCSS(a,
"border"+this+"Width",true))||0})}a.offsetWidth!==0?i():c.swap(a,ob,i);return Math.max(0,Math.round(e))}return c.curCSS(a,b,d)},curCSS:function(a,b,d){var f,e=a.style;if(!c.support.opacity&&b==="opacity"&&a.currentStyle){f=Oa.test(a.currentStyle.filter||"")?parseFloat(RegExp.$1)/100+"":"";return f===""?"1":f}if(ha.test(b))b=Pa;if(!d&&e&&e[b])f=e[b];else if(rb){if(ha.test(b))b="float";b=b.replace(lb,"-$1").toLowerCase();e=a.ownerDocument.defaultView;if(!e)return null;if(a=e.getComputedStyle(a,null))f=
a.getPropertyValue(b);if(b==="opacity"&&f==="")f="1"}else if(a.currentStyle){d=b.replace(ia,ja);f=a.currentStyle[b]||a.currentStyle[d];if(!mb.test(f)&&nb.test(f)){b=e.left;var j=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;e.left=d==="fontSize"?"1em":f||0;f=e.pixelLeft+"px";e.left=b;a.runtimeStyle.left=j}}return f},swap:function(a,b,d){var f={};for(var e in b){f[e]=a.style[e];a.style[e]=b[e]}d.call(a);for(e in b)a.style[e]=f[e]}});if(c.expr&&c.expr.filters){c.expr.filters.hidden=function(a){var b=
a.offsetWidth,d=a.offsetHeight,f=a.nodeName.toLowerCase()==="tr";return b===0&&d===0&&!f?true:b>0&&d>0&&!f?false:c.curCSS(a,"display")==="none"};c.expr.filters.visible=function(a){return!c.expr.filters.hidden(a)}}var sb=J(),tb=/<script(.|\s)*?\/script>/gi,ub=/select|textarea/i,vb=/color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week/i,N=/=\?(&|$)/,ka=/\?/,wb=/(\?|&)_=.*?(&|$)/,xb=/^(\w+:)?\/\/([^\/?#]+)/,yb=/%20/g,zb=c.fn.load;c.fn.extend({load:function(a,b,d){if(typeof a!==
"string")return zb.call(this,a);else if(!this.length)return this;var f=a.indexOf(" ");if(f>=0){var e=a.slice(f,a.length);a=a.slice(0,f)}f="GET";if(b)if(c.isFunction(b)){d=b;b=null}else if(typeof b==="object"){b=c.param(b,c.ajaxSettings.traditional);f="POST"}var j=this;c.ajax({url:a,type:f,dataType:"html",data:b,complete:function(i,o){if(o==="success"||o==="notmodified")j.html(e?c("<div />").append(i.responseText.replace(tb,"")).find(e):i.responseText);d&&j.each(d,[i.responseText,o,i])}});return this},
serialize:function(){return c.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?c.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||ub.test(this.nodeName)||vb.test(this.type))}).map(function(a,b){a=c(this).val();return a==null?null:c.isArray(a)?c.map(a,function(d){return{name:b.name,value:d}}):{name:b.name,value:a}}).get()}});c.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),
function(a,b){c.fn[b]=function(d){return this.bind(b,d)}});c.extend({get:function(a,b,d,f){if(c.isFunction(b)){f=f||d;d=b;b=null}return c.ajax({type:"GET",url:a,data:b,success:d,dataType:f})},getScript:function(a,b){return c.get(a,null,b,"script")},getJSON:function(a,b,d){return c.get(a,b,d,"json")},post:function(a,b,d,f){if(c.isFunction(b)){f=f||d;d=b;b={}}return c.ajax({type:"POST",url:a,data:b,success:d,dataType:f})},ajaxSetup:function(a){c.extend(c.ajaxSettings,a)},ajaxSettings:{url:location.href,
global:true,type:"GET",contentType:"application/x-www-form-urlencoded",processData:true,async:true,xhr:A.XMLHttpRequest&&(A.location.protocol!=="file:"||!A.ActiveXObject)?function(){return new A.XMLHttpRequest}:function(){try{return new A.ActiveXObject("Microsoft.XMLHTTP")}catch(a){}},accepts:{xml:"application/xml, text/xml",html:"text/html",script:"text/javascript, application/javascript",json:"application/json, text/javascript",text:"text/plain",_default:"*/*"}},lastModified:{},etag:{},ajax:function(a){function b(){e.success&&
e.success.call(k,o,i,x);e.global&&f("ajaxSuccess",[x,e])}function d(){e.complete&&e.complete.call(k,x,i);e.global&&f("ajaxComplete",[x,e]);e.global&&!--c.active&&c.event.trigger("ajaxStop")}function f(q,p){(e.context?c(e.context):c.event).trigger(q,p)}var e=c.extend(true,{},c.ajaxSettings,a),j,i,o,k=a&&a.context||e,n=e.type.toUpperCase();if(e.data&&e.processData&&typeof e.data!=="string")e.data=c.param(e.data,e.traditional);if(e.dataType==="jsonp"){if(n==="GET")N.test(e.url)||(e.url+=(ka.test(e.url)?
"&":"?")+(e.jsonp||"callback")+"=?");else if(!e.data||!N.test(e.data))e.data=(e.data?e.data+"&":"")+(e.jsonp||"callback")+"=?";e.dataType="json"}if(e.dataType==="json"&&(e.data&&N.test(e.data)||N.test(e.url))){j=e.jsonpCallback||"jsonp"+sb++;if(e.data)e.data=(e.data+"").replace(N,"="+j+"$1");e.url=e.url.replace(N,"="+j+"$1");e.dataType="script";A[j]=A[j]||function(q){o=q;b();d();A[j]=w;try{delete A[j]}catch(p){}z&&z.removeChild(C)}}if(e.dataType==="script"&&e.cache===null)e.cache=false;if(e.cache===
false&&n==="GET"){var r=J(),u=e.url.replace(wb,"$1_="+r+"$2");e.url=u+(u===e.url?(ka.test(e.url)?"&":"?")+"_="+r:"")}if(e.data&&n==="GET")e.url+=(ka.test(e.url)?"&":"?")+e.data;e.global&&!c.active++&&c.event.trigger("ajaxStart");r=(r=xb.exec(e.url))&&(r[1]&&r[1]!==location.protocol||r[2]!==location.host);if(e.dataType==="script"&&n==="GET"&&r){var z=s.getElementsByTagName("head")[0]||s.documentElement,C=s.createElement("script");C.src=e.url;if(e.scriptCharset)C.charset=e.scriptCharset;if(!j){var B=
false;C.onload=C.onreadystatechange=function(){if(!B&&(!this.readyState||this.readyState==="loaded"||this.readyState==="complete")){B=true;b();d();C.onload=C.onreadystatechange=null;z&&C.parentNode&&z.removeChild(C)}}}z.insertBefore(C,z.firstChild);return w}var E=false,x=e.xhr();if(x){e.username?x.open(n,e.url,e.async,e.username,e.password):x.open(n,e.url,e.async);try{if(e.data||a&&a.contentType)x.setRequestHeader("Content-Type",e.contentType);if(e.ifModified){c.lastModified[e.url]&&x.setRequestHeader("If-Modified-Since",
c.lastModified[e.url]);c.etag[e.url]&&x.setRequestHeader("If-None-Match",c.etag[e.url])}r||x.setRequestHeader("X-Requested-With","XMLHttpRequest");x.setRequestHeader("Accept",e.dataType&&e.accepts[e.dataType]?e.accepts[e.dataType]+", */*":e.accepts._default)}catch(ga){}if(e.beforeSend&&e.beforeSend.call(k,x,e)===false){e.global&&!--c.active&&c.event.trigger("ajaxStop");x.abort();return false}e.global&&f("ajaxSend",[x,e]);var g=x.onreadystatechange=function(q){if(!x||x.readyState===0||q==="abort"){E||
d();E=true;if(x)x.onreadystatechange=c.noop}else if(!E&&x&&(x.readyState===4||q==="timeout")){E=true;x.onreadystatechange=c.noop;i=q==="timeout"?"timeout":!c.httpSuccess(x)?"error":e.ifModified&&c.httpNotModified(x,e.url)?"notmodified":"success";var p;if(i==="success")try{o=c.httpData(x,e.dataType,e)}catch(v){i="parsererror";p=v}if(i==="success"||i==="notmodified")j||b();else c.handleError(e,x,i,p);d();q==="timeout"&&x.abort();if(e.async)x=null}};try{var h=x.abort;x.abort=function(){x&&h.call(x);
g("abort")}}catch(l){}e.async&&e.timeout>0&&setTimeout(function(){x&&!E&&g("timeout")},e.timeout);try{x.send(n==="POST"||n==="PUT"||n==="DELETE"?e.data:null)}catch(m){c.handleError(e,x,null,m);d()}e.async||g();return x}},handleError:function(a,b,d,f){if(a.error)a.error.call(a.context||a,b,d,f);if(a.global)(a.context?c(a.context):c.event).trigger("ajaxError",[b,a,f])},active:0,httpSuccess:function(a){try{return!a.status&&location.protocol==="file:"||a.status>=200&&a.status<300||a.status===304||a.status===
1223||a.status===0}catch(b){}return false},httpNotModified:function(a,b){var d=a.getResponseHeader("Last-Modified"),f=a.getResponseHeader("Etag");if(d)c.lastModified[b]=d;if(f)c.etag[b]=f;return a.status===304||a.status===0},httpData:function(a,b,d){var f=a.getResponseHeader("content-type")||"",e=b==="xml"||!b&&f.indexOf("xml")>=0;a=e?a.responseXML:a.responseText;e&&a.documentElement.nodeName==="parsererror"&&c.error("parsererror");if(d&&d.dataFilter)a=d.dataFilter(a,b);if(typeof a==="string")if(b===
"json"||!b&&f.indexOf("json")>=0)a=c.parseJSON(a);else if(b==="script"||!b&&f.indexOf("javascript")>=0)c.globalEval(a);return a},param:function(a,b){function d(i,o){if(c.isArray(o))c.each(o,function(k,n){b||/\[\]$/.test(i)?f(i,n):d(i+"["+(typeof n==="object"||c.isArray(n)?k:"")+"]",n)});else!b&&o!=null&&typeof o==="object"?c.each(o,function(k,n){d(i+"["+k+"]",n)}):f(i,o)}function f(i,o){o=c.isFunction(o)?o():o;e[e.length]=encodeURIComponent(i)+"="+encodeURIComponent(o)}var e=[];if(b===w)b=c.ajaxSettings.traditional;
if(c.isArray(a)||a.jquery)c.each(a,function(){f(this.name,this.value)});else for(var j in a)d(j,a[j]);return e.join("&").replace(yb,"+")}});var la={},Ab=/toggle|show|hide/,Bb=/^([+-]=)?([\d+-.]+)(.*)$/,W,va=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]];c.fn.extend({show:function(a,b){if(a||a===0)return this.animate(K("show",3),a,b);else{a=0;for(b=this.length;a<b;a++){var d=c.data(this[a],"olddisplay");
this[a].style.display=d||"";if(c.css(this[a],"display")==="none"){d=this[a].nodeName;var f;if(la[d])f=la[d];else{var e=c("<"+d+" />").appendTo("body");f=e.css("display");if(f==="none")f="block";e.remove();la[d]=f}c.data(this[a],"olddisplay",f)}}a=0;for(b=this.length;a<b;a++)this[a].style.display=c.data(this[a],"olddisplay")||"";return this}},hide:function(a,b){if(a||a===0)return this.animate(K("hide",3),a,b);else{a=0;for(b=this.length;a<b;a++){var d=c.data(this[a],"olddisplay");!d&&d!=="none"&&c.data(this[a],
"olddisplay",c.css(this[a],"display"))}a=0;for(b=this.length;a<b;a++)this[a].style.display="none";return this}},_toggle:c.fn.toggle,toggle:function(a,b){var d=typeof a==="boolean";if(c.isFunction(a)&&c.isFunction(b))this._toggle.apply(this,arguments);else a==null||d?this.each(function(){var f=d?a:c(this).is(":hidden");c(this)[f?"show":"hide"]()}):this.animate(K("toggle",3),a,b);return this},fadeTo:function(a,b,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,d)},
animate:function(a,b,d,f){var e=c.speed(b,d,f);if(c.isEmptyObject(a))return this.each(e.complete);return this[e.queue===false?"each":"queue"](function(){var j=c.extend({},e),i,o=this.nodeType===1&&c(this).is(":hidden"),k=this;for(i in a){var n=i.replace(ia,ja);if(i!==n){a[n]=a[i];delete a[i];i=n}if(a[i]==="hide"&&o||a[i]==="show"&&!o)return j.complete.call(this);if((i==="height"||i==="width")&&this.style){j.display=c.css(this,"display");j.overflow=this.style.overflow}if(c.isArray(a[i])){(j.specialEasing=
j.specialEasing||{})[i]=a[i][1];a[i]=a[i][0]}}if(j.overflow!=null)this.style.overflow="hidden";j.curAnim=c.extend({},a);c.each(a,function(r,u){var z=new c.fx(k,j,r);if(Ab.test(u))z[u==="toggle"?o?"show":"hide":u](a);else{var C=Bb.exec(u),B=z.cur(true)||0;if(C){u=parseFloat(C[2]);var E=C[3]||"px";if(E!=="px"){k.style[r]=(u||1)+E;B=(u||1)/z.cur(true)*B;k.style[r]=B+E}if(C[1])u=(C[1]==="-="?-1:1)*u+B;z.custom(B,u,E)}else z.custom(B,u,"")}});return true})},stop:function(a,b){var d=c.timers;a&&this.queue([]);
this.each(function(){for(var f=d.length-1;f>=0;f--)if(d[f].elem===this){b&&d[f](true);d.splice(f,1)}});b||this.dequeue();return this}});c.each({slideDown:K("show",1),slideUp:K("hide",1),slideToggle:K("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"}},function(a,b){c.fn[a]=function(d,f){return this.animate(b,d,f)}});c.extend({speed:function(a,b,d){var f=a&&typeof a==="object"?a:{complete:d||!d&&b||c.isFunction(a)&&a,duration:a,easing:d&&b||b&&!c.isFunction(b)&&b};f.duration=c.fx.off?0:typeof f.duration===
"number"?f.duration:c.fx.speeds[f.duration]||c.fx.speeds._default;f.old=f.complete;f.complete=function(){f.queue!==false&&c(this).dequeue();c.isFunction(f.old)&&f.old.call(this)};return f},easing:{linear:function(a,b,d,f){return d+f*a},swing:function(a,b,d,f){return(-Math.cos(a*Math.PI)/2+0.5)*f+d}},timers:[],fx:function(a,b,d){this.options=b;this.elem=a;this.prop=d;if(!b.orig)b.orig={}}});c.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this);(c.fx.step[this.prop]||
c.fx.step._default)(this);if((this.prop==="height"||this.prop==="width")&&this.elem.style)this.elem.style.display="block"},cur:function(a){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];return(a=parseFloat(c.css(this.elem,this.prop,a)))&&a>-10000?a:parseFloat(c.curCSS(this.elem,this.prop))||0},custom:function(a,b,d){function f(j){return e.step(j)}this.startTime=J();this.start=a;this.end=b;this.unit=d||this.unit||"px";this.now=this.start;
this.pos=this.state=0;var e=this;f.elem=this.elem;if(f()&&c.timers.push(f)&&!W)W=setInterval(c.fx.tick,13)},show:function(){this.options.orig[this.prop]=c.style(this.elem,this.prop);this.options.show=true;this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur());c(this.elem).show()},hide:function(){this.options.orig[this.prop]=c.style(this.elem,this.prop);this.options.hide=true;this.custom(this.cur(),0)},step:function(a){var b=J(),d=true;if(a||b>=this.options.duration+this.startTime){this.now=
this.end;this.pos=this.state=1;this.update();this.options.curAnim[this.prop]=true;for(var f in this.options.curAnim)if(this.options.curAnim[f]!==true)d=false;if(d){if(this.options.display!=null){this.elem.style.overflow=this.options.overflow;a=c.data(this.elem,"olddisplay");this.elem.style.display=a?a:this.options.display;if(c.css(this.elem,"display")==="none")this.elem.style.display="block"}this.options.hide&&c(this.elem).hide();if(this.options.hide||this.options.show)for(var e in this.options.curAnim)c.style(this.elem,
e,this.options.orig[e]);this.options.complete.call(this.elem)}return false}else{e=b-this.startTime;this.state=e/this.options.duration;a=this.options.easing||(c.easing.swing?"swing":"linear");this.pos=c.easing[this.options.specialEasing&&this.options.specialEasing[this.prop]||a](this.state,e,0,1,this.options.duration);this.now=this.start+(this.end-this.start)*this.pos;this.update()}return true}};c.extend(c.fx,{tick:function(){for(var a=c.timers,b=0;b<a.length;b++)a[b]()||a.splice(b--,1);a.length||
c.fx.stop()},stop:function(){clearInterval(W);W=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){c.style(a.elem,"opacity",a.now)},_default:function(a){if(a.elem.style&&a.elem.style[a.prop]!=null)a.elem.style[a.prop]=(a.prop==="width"||a.prop==="height"?Math.max(0,a.now):a.now)+a.unit;else a.elem[a.prop]=a.now}}});if(c.expr&&c.expr.filters)c.expr.filters.animated=function(a){return c.grep(c.timers,function(b){return a===b.elem}).length};c.fn.offset="getBoundingClientRect"in s.documentElement?
function(a){var b=this[0];if(a)return this.each(function(e){c.offset.setOffset(this,a,e)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return c.offset.bodyOffset(b);var d=b.getBoundingClientRect(),f=b.ownerDocument;b=f.body;f=f.documentElement;return{top:d.top+(self.pageYOffset||c.support.boxModel&&f.scrollTop||b.scrollTop)-(f.clientTop||b.clientTop||0),left:d.left+(self.pageXOffset||c.support.boxModel&&f.scrollLeft||b.scrollLeft)-(f.clientLeft||b.clientLeft||0)}}:function(a){var b=
this[0];if(a)return this.each(function(r){c.offset.setOffset(this,a,r)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return c.offset.bodyOffset(b);c.offset.initialize();var d=b.offsetParent,f=b,e=b.ownerDocument,j,i=e.documentElement,o=e.body;f=(e=e.defaultView)?e.getComputedStyle(b,null):b.currentStyle;for(var k=b.offsetTop,n=b.offsetLeft;(b=b.parentNode)&&b!==o&&b!==i;){if(c.offset.supportsFixedPosition&&f.position==="fixed")break;j=e?e.getComputedStyle(b,null):b.currentStyle;
k-=b.scrollTop;n-=b.scrollLeft;if(b===d){k+=b.offsetTop;n+=b.offsetLeft;if(c.offset.doesNotAddBorder&&!(c.offset.doesAddBorderForTableAndCells&&/^t(able|d|h)$/i.test(b.nodeName))){k+=parseFloat(j.borderTopWidth)||0;n+=parseFloat(j.borderLeftWidth)||0}f=d;d=b.offsetParent}if(c.offset.subtractsBorderForOverflowNotVisible&&j.overflow!=="visible"){k+=parseFloat(j.borderTopWidth)||0;n+=parseFloat(j.borderLeftWidth)||0}f=j}if(f.position==="relative"||f.position==="static"){k+=o.offsetTop;n+=o.offsetLeft}if(c.offset.supportsFixedPosition&&
f.position==="fixed"){k+=Math.max(i.scrollTop,o.scrollTop);n+=Math.max(i.scrollLeft,o.scrollLeft)}return{top:k,left:n}};c.offset={initialize:function(){var a=s.body,b=s.createElement("div"),d,f,e,j=parseFloat(c.curCSS(a,"marginTop",true))||0;c.extend(b.style,{position:"absolute",top:0,left:0,margin:0,border:0,width:"1px",height:"1px",visibility:"hidden"});b.innerHTML="<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
a.insertBefore(b,a.firstChild);d=b.firstChild;f=d.firstChild;e=d.nextSibling.firstChild.firstChild;this.doesNotAddBorder=f.offsetTop!==5;this.doesAddBorderForTableAndCells=e.offsetTop===5;f.style.position="fixed";f.style.top="20px";this.supportsFixedPosition=f.offsetTop===20||f.offsetTop===15;f.style.position=f.style.top="";d.style.overflow="hidden";d.style.position="relative";this.subtractsBorderForOverflowNotVisible=f.offsetTop===-5;this.doesNotIncludeMarginInBodyOffset=a.offsetTop!==j;a.removeChild(b);
c.offset.initialize=c.noop},bodyOffset:function(a){var b=a.offsetTop,d=a.offsetLeft;c.offset.initialize();if(c.offset.doesNotIncludeMarginInBodyOffset){b+=parseFloat(c.curCSS(a,"marginTop",true))||0;d+=parseFloat(c.curCSS(a,"marginLeft",true))||0}return{top:b,left:d}},setOffset:function(a,b,d){if(/static/.test(c.curCSS(a,"position")))a.style.position="relative";var f=c(a),e=f.offset(),j=parseInt(c.curCSS(a,"top",true),10)||0,i=parseInt(c.curCSS(a,"left",true),10)||0;if(c.isFunction(b))b=b.call(a,
d,e);d={top:b.top-e.top+j,left:b.left-e.left+i};"using"in b?b.using.call(a,d):f.css(d)}};c.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),d=this.offset(),f=/^body|html$/i.test(b[0].nodeName)?{top:0,left:0}:b.offset();d.top-=parseFloat(c.curCSS(a,"marginTop",true))||0;d.left-=parseFloat(c.curCSS(a,"marginLeft",true))||0;f.top+=parseFloat(c.curCSS(b[0],"borderTopWidth",true))||0;f.left+=parseFloat(c.curCSS(b[0],"borderLeftWidth",true))||0;return{top:d.top-
f.top,left:d.left-f.left}},offsetParent:function(){return this.map(function(){for(var a=this.offsetParent||s.body;a&&!/^body|html$/i.test(a.nodeName)&&c.css(a,"position")==="static";)a=a.offsetParent;return a})}});c.each(["Left","Top"],function(a,b){var d="scroll"+b;c.fn[d]=function(f){var e=this[0],j;if(!e)return null;if(f!==w)return this.each(function(){if(j=wa(this))j.scrollTo(!a?f:c(j).scrollLeft(),a?f:c(j).scrollTop());else this[d]=f});else return(j=wa(e))?"pageXOffset"in j?j[a?"pageYOffset":
"pageXOffset"]:c.support.boxModel&&j.document.documentElement[d]||j.document.body[d]:e[d]}});c.each(["Height","Width"],function(a,b){var d=b.toLowerCase();c.fn["inner"+b]=function(){return this[0]?c.css(this[0],d,false,"padding"):null};c.fn["outer"+b]=function(f){return this[0]?c.css(this[0],d,false,f?"margin":"border"):null};c.fn[d]=function(f){var e=this[0];if(!e)return f==null?null:this;if(c.isFunction(f))return this.each(function(j){var i=c(this);i[d](f.call(this,j,i[d]()))});return"scrollTo"in
e&&e.document?e.document.compatMode==="CSS1Compat"&&e.document.documentElement["client"+b]||e.document.body["client"+b]:e.nodeType===9?Math.max(e.documentElement["client"+b],e.body["scroll"+b],e.documentElement["scroll"+b],e.body["offset"+b],e.documentElement["offset"+b]):f===w?c.css(e,d):this.css(d,typeof f==="string"?f:f+"px")}});A.jQuery=A.$=c})(window);
// stats.js r5 - http://github.com/mrdoob/stats.js
var Stats=function(){var j=0,u=2,r,C=0,E=new Date().getTime(),w=E,f=E,m=0,e=1000,i=0,F,q,c,d,B,k=0,G=1000,a=0,A,t,p,D,l,v=0,o=1000,s=0,h,n,z,g,b,y={fps:{bg:{r:16,g:16,b:48},fg:{r:0,g:255,b:255}},ms:{bg:{r:16,g:48,b:16},fg:{r:0,g:255,b:0}},mem:{bg:{r:48,g:16,b:26},fg:{r:255,g:0,b:128}}};r=document.createElement("div");r.style.fontFamily="Helvetica, Arial, sans-serif";r.style.textAlign="left";r.style.fontSize="9px";r.style.opacity="0.9";r.style.width="80px";r.style.cursor="pointer";r.addEventListener("click",H,false);F=document.createElement("div");F.style.backgroundColor="rgb("+Math.floor(y.fps.bg.r/2)+","+Math.floor(y.fps.bg.g/2)+","+Math.floor(y.fps.bg.b/2)+")";F.style.padding="2px 0px 3px 0px";r.appendChild(F);q=document.createElement("div");q.innerHTML="<strong>FPS</strong>";q.style.color="rgb("+y.fps.fg.r+","+y.fps.fg.g+","+y.fps.fg.b+")";q.style.margin="0px 0px 1px 3px";F.appendChild(q);c=document.createElement("canvas");c.width=74;c.height=30;c.style.display="block";c.style.marginLeft="3px";F.appendChild(c);d=c.getContext("2d");d.fillStyle="rgb("+y.fps.bg.r+","+y.fps.bg.g+","+y.fps.bg.b+")";d.fillRect(0,0,c.width,c.height);B=d.getImageData(0,0,c.width,c.height);A=document.createElement("div");A.style.backgroundColor="rgb("+Math.floor(y.ms.bg.r/2)+","+Math.floor(y.ms.bg.g/2)+","+Math.floor(y.ms.bg.b/2)+")";A.style.padding="2px 0px 3px 0px";A.style.display="none";r.appendChild(A);t=document.createElement("div");t.innerHTML="<strong>MS</strong>";t.style.color="rgb("+y.ms.fg.r+","+y.ms.fg.g+","+y.ms.fg.b+")";t.style.margin="0px 0px 1px 3px";A.appendChild(t);p=document.createElement("canvas");p.width=74;p.height=30;p.style.display="block";p.style.marginLeft="3px";A.appendChild(p);D=p.getContext("2d");D.fillStyle="rgb("+y.ms.bg.r+","+y.ms.bg.g+","+y.ms.bg.b+")";D.fillRect(0,0,p.width,p.height);l=D.getImageData(0,0,p.width,p.height);try{if(webkitPerformance&&webkitPerformance.memory.totalJSHeapSize){u=3}}catch(x){}h=document.createElement("div");h.style.backgroundColor="rgb("+Math.floor(y.mem.bg.r/2)+","+Math.floor(y.mem.bg.g/2)+","+Math.floor(y.mem.bg.b/2)+")";h.style.padding="2px 0px 3px 0px";h.style.display="none";r.appendChild(h);n=document.createElement("div");n.innerHTML="<strong>MEM</strong>";n.style.color="rgb("+y.mem.fg.r+","+y.mem.fg.g+","+y.mem.fg.b+")";n.style.margin="0px 0px 1px 3px";h.appendChild(n);z=document.createElement("canvas");z.width=74;z.height=30;z.style.display="block";z.style.marginLeft="3px";h.appendChild(z);g=z.getContext("2d");g.fillStyle="#301010";g.fillRect(0,0,z.width,z.height);b=g.getImageData(0,0,z.width,z.height);function I(N,M,K){var J,O,L;for(O=0;O<30;O++){for(J=0;J<73;J++){L=(J+O*74)*4;N[L]=N[L+4];N[L+1]=N[L+5];N[L+2]=N[L+6]}}for(O=0;O<30;O++){L=(73+O*74)*4;if(O<M){N[L]=y[K].bg.r;N[L+1]=y[K].bg.g;N[L+2]=y[K].bg.b}else{N[L]=y[K].fg.r;N[L+1]=y[K].fg.g;N[L+2]=y[K].fg.b}}}function H(){j++;j==u?j=0:j;F.style.display="none";A.style.display="none";h.style.display="none";switch(j){case 0:F.style.display="block";break;case 1:A.style.display="block";break;case 2:h.style.display="block";break}}return{domElement:r,update:function(){C++;E=new Date().getTime();k=E-w;G=Math.min(G,k);a=Math.max(a,k);I(l.data,Math.min(30,30-(k/200)*30),"ms");t.innerHTML="<strong>"+k+" MS</strong> ("+G+"-"+a+")";D.putImageData(l,0,0);w=E;if(E>f+1000){m=Math.round((C*1000)/(E-f));e=Math.min(e,m);i=Math.max(i,m);I(B.data,Math.min(30,30-(m/100)*30),"fps");q.innerHTML="<strong>"+m+" FPS</strong> ("+e+"-"+i+")";d.putImageData(B,0,0);if(u==3){v=webkitPerformance.memory.usedJSHeapSize*9.54e-7;o=Math.min(o,v);s=Math.max(s,v);I(b.data,Math.min(30,30-(v/2)),"mem");n.innerHTML="<strong>"+Math.round(v)+" MEM</strong> ("+Math.round(o)+"-"+Math.round(s)+")";g.putImageData(b,0,0)}f=E;C=0}}}};
var TWEEN_MANAGER=TWEEN_MANAGER||(function(){var a,c,b=[];this.add=function(d){b.push(d)};this.remove=function(f){for(var e=0,d=b.length;e<d;e++){if(f==b[e]){b.splice(e,1);return}}};this.update=function(){a=0;c=new Date().getTime();while(a<b.length){b[a].update(c)?a++:b.splice(a,1)}};return this})(),TWEEN=TWEEN||{};TWEEN.Tween=function(c){TWEEN_MANAGER.add(this);var k=c,j={},f={},g={},e=1000,i=0,a=null,l=TWEEN.Easing.Elastic.EaseInOut,b=null,m=null,h=null,d=false;this.to=function(p,n){e=p*1000;for(var o in n){if(k[o]===null){continue}g[o]=n[o]}return this};this.start=function(){d=false;a=new Date().getTime()+i;for(var n in g){if(k[n]===null){continue}j[n]=k[n];f[n]=g[n]-k[n]}return this};this.delay=function(n){i=n*1000;return this};this.easing=function(n){l=n;return this};this.chain=function(n){b=n};this.onUpdate=function(n){m=n;return this};this.onComplete=function(n){h=n;return this};this.update=function(q){var p,n,o;if(q<a||a===null){return true}if(d){return(b===null)}n=(q-a)/e;n=n>1?1:n;o=l(n);for(p in f){k[p]=j[p]+f[p]*o}if(m!==null){m.call(k)}if(n==1){d=true;a=null;if(h!==null){h.call(k)}if(b!==null){b.start();return true}else{return false}}return true};this.destroy=function(){TWEEN_MANAGER.remove(this)}};TWEEN.Easing={Linear:{},Quadratic:{},Cubic:{},Quartic:{},Quintic:{},Sinusoidal:{},Exponential:{},Circular:{},Elastic:{},Back:{},Bounce:{}};TWEEN.Easing.Linear.EaseNone=function(a){return a};TWEEN.Easing.Quadratic.EaseIn=function(a){return a*a};TWEEN.Easing.Quadratic.EaseOut=function(a){return -a*(a-2)};TWEEN.Easing.Quadratic.EaseInOut=function(a){if((a*=2)<1){return 0.5*a*a}return -0.5*(--a*(a-2)-1)};TWEEN.Easing.Cubic.EaseIn=function(a){return a*a*a};TWEEN.Easing.Cubic.EaseOut=function(a){return --a*a*a+1};TWEEN.Easing.Cubic.EaseInOut=function(a){if((a*=2)<1){return 0.5*a*a*a}return 0.5*((a-=2)*a*a+2)};TWEEN.Easing.Quartic.EaseIn=function(a){return a*a*a*a};TWEEN.Easing.Quartic.EaseOut=function(a){return -(--a*a*a*a-1)};TWEEN.Easing.Quartic.EaseInOut=function(a){if((a*=2)<1){return 0.5*a*a*a*a}return -0.5*((a-=2)*a*a*a-2)};TWEEN.Easing.Quintic.EaseIn=function(a){return a*a*a*a*a};TWEEN.Easing.Quintic.EaseOut=function(a){return(a=a-1)*a*a*a*a+1};TWEEN.Easing.Quintic.EaseInOut=function(a){if((a*=2)<1){return 0.5*a*a*a*a*a}return 0.5*((a-=2)*a*a*a*a+2)};TWEEN.Easing.Sinusoidal.EaseIn=function(a){return -Math.cos(a*Math.PI/2)+1};TWEEN.Easing.Sinusoidal.EaseOut=function(a){return Math.sin(a*Math.PI/2)};TWEEN.Easing.Sinusoidal.EaseInOut=function(a){return -0.5*(Math.cos(Math.PI*a)-1)};TWEEN.Easing.Exponential.EaseIn=function(a){return a==0?0:Math.pow(2,10*(a-1))};TWEEN.Easing.Exponential.EaseOut=function(a){return a==1?1:-Math.pow(2,-10*a)+1};TWEEN.Easing.Exponential.EaseInOut=function(a){if(a==0){return 0}if(a==1){return 1}if((a*=2)<1){return 0.5*Math.pow(2,10*(a-1))}return 0.5*(-Math.pow(2,-10*(a-1))+2)};TWEEN.Easing.Circular.EaseIn=function(a){return -(Math.sqrt(1-a*a)-1)};TWEEN.Easing.Circular.EaseOut=function(a){return Math.sqrt(1- --a*a)};TWEEN.Easing.Circular.EaseInOut=function(a){if((a/=0.5)<1){return -0.5*(Math.sqrt(1-a*a)-1)}return 0.5*(Math.sqrt(1-(a-=2)*a)+1)};TWEEN.Easing.Elastic.EaseIn=function(c){var d,b=0.1,e=0.4;if(c==0){return 0}if(c==1){return 1}if(!e){e=0.3}if(!b||b<1){b=1;d=e/4}else{d=e/(2*Math.PI)*Math.asin(1/b)}return -(b*Math.pow(2,10*(c-=1))*Math.sin((c-d)*(2*Math.PI)/e))};TWEEN.Easing.Elastic.EaseOut=function(c){var d,b=0.1,e=0.4;if(c==0){return 0}if(c==1){return 1}if(!e){e=0.3}if(!b||b<1){b=1;d=e/4}else{d=e/(2*Math.PI)*Math.asin(1/b)}return(b*Math.pow(2,-10*c)*Math.sin((c-d)*(2*Math.PI)/e)+1)};TWEEN.Easing.Elastic.EaseInOut=function(c){var d,b=0.1,e=0.4;if(c==0){return 0}if(c==1){return 1}if(!e){e=0.3}if(!b||b<1){b=1;d=e/4}else{d=e/(2*Math.PI)*Math.asin(1/b)}if((c*=2)<1){return -0.5*(b*Math.pow(2,10*(c-=1))*Math.sin((c-d)*(2*Math.PI)/e))}return b*Math.pow(2,-10*(c-=1))*Math.sin((c-d)*(2*Math.PI)/e)*0.5+1};TWEEN.Easing.Back.EaseIn=function(a){var b=1.70158;return a*a*((b+1)*a-b)};TWEEN.Easing.Back.EaseOut=function(a){var b=1.70158;return(a=a-1)*a*((b+1)*a+b)+1};TWEEN.Easing.Back.EaseInOut=function(a){var b=1.70158*1.525;if((a*=2)<1){return 0.5*(a*a*((b+1)*a-b))}return 0.5*((a-=2)*a*((b+1)*a+b)+2)};TWEEN.Easing.Bounce.EaseIn=function(a){return 1-TWEEN.Easing.Bounce.EaseOut(1-a)};TWEEN.Easing.Bounce.EaseOut=function(a){if((a/=1)<(1/2.75)){return 7.5625*a*a}else{if(a<(2/2.75)){return 7.5625*(a-=(1.5/2.75))*a+0.75}else{if(a<(2.5/2.75)){return 7.5625*(a-=(2.25/2.75))*a+0.9375}else{return 7.5625*(a-=(2.625/2.75))*a+0.984375}}}};TWEEN.Easing.Bounce.EaseInOut=function(a){if(a<0.5){return TWEEN.Easing.Bounce.EaseIn(a*2)*0.5}return TWEEN.Easing.Bounce.EaseOut(a*2-1)*0.5+0.5};﻿/* ========================= IO Utilities ==========================

Description: Javascript routines to 'write' to web pages.
Author: Peter Coxhead (http://www.cs.bham.ac.uk/~pxc/)
Copyright: Peter Coxhead, 2008; released under GPLv3
  (http://www.gnu.org/licenses/gpl-3.0.html).
Last Revision: 15 Dec 2008
*/
var version = 'IOUtils 1.01';
/*

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

The first call must be to startOutput(obj,msg). Subsequent calls
to 'output' functions add to the output buffer. The last call must
be to endOutput(). This displays the buffer in the innerHTML field
of obj. The string msg is shown until endOutput() is executed.

startOutput(obj,msg): initializes the output buffer and sets up
  obj.innerHTML as the ultimate destination of the output. The
  string msg will be shown until endOutput is called.
endOutput(): puts the output buffer in the HTML object set
  up by startOutput.

write(msg): adds the string msg to the output buffer.
writeln(msg): adds the string msg to the output buffer, followed
  by a line break.
print is a synonym of write.
println is a synonym of writeln.
nl(): adds a line break to the output buffer.

startTable(): starts a new table in the output buffer.
endTable(): ends a new table in the output buffer.
newRow(): starts a new row in a table.
writeCell(msg): puts the string msg into a single table cell.

displayMat(m,colLab,rowLab,dp): adds the 2D array m as a table to
  the output buffer. The arguments colLab and rowLab, if not null,
  must be arrays of strings to serveas the column and row labels.
  If dp is not null, it defines the number of decimal places
  shown; the default is 3.

displayAT(t): adds the tree t, which must be in array
 representation, to the output buffer.
 An example of a tree in array representation is [1,[2,3]].
 
IOUtils.js also adds an additional method to the Number object.
fixed(w,d): returns a number in fixed point notation as a 
  string of at least w characters 'wide' with d decimal places.

*/

var IOUtils = {version: version};

// Globals for the output.
var _outputObj;
var _outputBuffer;

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Variables which determine how text is output.
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
var LFT = '<span style="white-space: pre; font-family: monospace">';
var RGT = '</span>';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// startOutput(obj,msg): initializes the output buffer and sets up
//   obj.innerHTML as the ultimate destination of the output. The
//   string msg will be shown until endOutput is called.
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
function startOutput(obj,msg)
{ _outputObj = obj;
  _outputBuffer = '';
  _outputObj.innerHTML = msg;
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// endOutput(): puts the output buffer in the HTML object set
//  up by startOutput.
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
function endOutput()
{ _outputObj.innerHTML = _outputBuffer;
  _outputBuffer = '';
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// write(msg): adds the string msg to the output buffer.
// print is a synonym of write.
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
function write(msg)
{ _outputBuffer += (LFT+msg+RGT);
}
var print = write;

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// writeln(msg): adds the string msg to the output buffer, followed
//   by a line break.
// println is a synonym of writeln.
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
function writeln(msg)
{ _outputBuffer += (LFT+msg+RGT+'<br />');
}
var println = writeln;

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// nl(): adds a line break to the output buffer.
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
function nl()
{ _outputBuffer += ('<br />');
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// startTable(): starts a new table in the output buffer.
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
var _rowStarted = false;
function startTable()
{ _outputBuffer += '<table border="1"><tr>';
  _rowStarted = true;
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// endTable(): ends a new table in the output buffer.
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
function endTable()
{ if(_rowStarted)
  { _outputBuffer += '</tr>';
    _rowStarted = false;
  }
  _outputBuffer += '</table>';
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// newRow(): starts a new row in a table.
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
function newRow()
{ _outputBuffer += '</tr>';
  _rowStarted = false;
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// writeCell(msg): puts the string msg into a single table cell.
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
function writeCell(msg)
{ if(!_rowStarted)
  { _outputBuffer += '<tr>';
    _rowStarted = true;
  }
  _outputBuffer += ('<td style="text-align: right;">'+LFT+msg+RGT+'</td>');
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// displayMat(m,colLab,rowLab,dp): adds the 2D array m as a table to
//   the output buffer. The arguments colLab and rowLab, if not null,
//   must be arrays of strings to serveas the column and row labels.
//   If dp is not null, it defines the number of decimal places
//   shown; the default is 3.
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
function displayMat(m,colLab,rowLab,dp)
{ startTable();
  if (colLab != null)
  { writeCell('');
    for(var j=0; j<colLab.length; j++) writeCell(colLab[j]);
    newRow();
  }
  if (dp == null) dp = 3;
  for(var i=0; i<m.length; i++)
  { if(rowLab != null) writeCell(rowLab[i]);
    for(var j=0; j<m[i].length; j++)
    { writeCell(m[i][j].toFixed(dp));
    }
    newRow();
  }
  endTable();
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Trees can be represented in Javacript by arrays, e.g. [1,[2,3]].
// displayAT(t): adds the tree t, which must be in array
//  representation, to the output buffer.
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
function displayAT(t)
{ if(!(t instanceof Array))
  { write(t);
  }
  else if(t.length == 2)
  { write('(');displayAT(t[0]);write(', ');displayAT(t[1]);write(')');
  }
  else alert('***ERROR: displayAT given an array of length '+t.length);
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Additional method for the Number object.
// fixed(w,d): returns a number in fixed point notation as a string
//   of at least w in width with d decimal places.
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Number.prototype.fixed = function (w,d)
{ var s = this.toFixed(d);
  var t ='';
  for (var i = 0; i < w - s.length; i++) t += ' ';
  return t+s;
}


/* ========================= LUDecomposition ==========================

Description: Javascript routines to decompose a matrix A into a lower
  and an upper triangular matrix, L and U, so that L*U = A (possibly
  with its rows re-ordered).  Stored as methods of the global variable
  LUDecomposition.
Acknowledgement: This Javascript code is based on the source code of
  JAMA, A Java Matrix package (http://math.nist.gov/javanumerics/jama/),
  which states "Copyright Notice This software is a cooperative product
  of The MathWorks and the National Institute of Standards and
  Technology (NIST) which has been released to the public domain.
  Neither The MathWorks nor NIST assumes any responsibility whatsoever
  for its use by other parties, and makes no guarantees, expressed
  or implied, about its quality, reliability, or any other
  characteristic."
Author: Peter Coxhead (http://www.cs.bham.ac.uk/~pxc/)
Copyright: The conversion of the JAMA source to Javascript is
  copyright Peter Coxhead, 2008, and is released under GPLv3
  (http://www.gnu.org/licenses/gpl-3.0.html).
Last Revision: 9 Dec 2008
*/
var version = 'LUDecomposition 1.00';
/*

Uses Matrix.js.

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

LU Decomposition (from the JAMA package)

For an m-by-n matrix A with m >= n, the LU decomposition is an m-by-n
unit lower triangular matrix L, an n-by-n upper triangular matrix U,
and a permutation vector piv of length m so that A(piv,:) = L*U.
If m < n, then L is m-by-m and U is m-by-n.

The LU decomposition with pivoting always exists, even if the matrix is
singular, so the constructor will never fail.  The primary use of the
LU decomposition is in the solution of square systems of simultaneous
linear equations.  This will fail if isNonsingular() returns false.

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

***NOTE*** The functions in LUDecomposition.js should NOT normally be
  used directly.  Their main use to provide 'services' to the functions
  in Matrix.js.

LUDecomposition.create(mo): given a Matrix object mo, it returns an
  object from which L, U and piv can be accessed.

LUDecomposition.restore(mo,lud): returns a new Matrix object comprised
  of the rows of the Matrix object mo restored to the order given in
  the pivot of the LUDecomposition object lud.

LUDecomposition.isNonsingular(lud): given an LUDecomposition object lud, it
  determines whether the matrix from which it was derived is singular or
  not. The value of Matrix.getEPS() is used as the smallest non-zero
  number.

LUDecomposition.getL(lud): given an LUDecomposition object lud, it creates
  and returns the lower triangular factor, L, as a Matrix object.
LUDecomposition.getU(lud): given an LUDecomposition object lud, it creates
  and returns the upper triangular factor, U, as a Matrix object.

LUDecomposition.det(lud): given an LUDecomposition object lud, it returns
  the determinant of the matrix from which it was derived. The value of
  Matrix.getEPS() is used as the smallest non-zero number.

LUDecomposition.solve(lud,bmat): if the LUDecomposition object lud is derived
  from the matrix A, and the Matrix object bmat represents the matrix b, then
  this function solves the matrix equation A*x = b, returning x as a Matrix
  object.

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
*/

var LUDecomposition = new createLUDecompositionPackage();
function createLUDecompositionPackage()
{
this.version = version;

var abs = Math.abs;   // local synonym
var min = Math.min;   // local synonym

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Private function to check that an argument is a Matrix object.
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
function _chkMatrix(fname,argno,arg)
{ if (!arg.isMatrix)
  { writeln('***ERROR: in LUDecomposition.'+fname+': argument '+argno+
            ' is not a Matrix.');
    throw null;
  }
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Private function to check that an argument is an LUDecomposition object
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
function _chkLUDecomposition(fname,argno,arg)
{ if (!arg.isLUDecomposition)
  { writeln('***ERROR: in LUDecomposition.'+fname+': argument '+argno+
            ' is not an LUDecomposition.');
    throw null;
  }
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// LUDecomposition.create(mo): given a Matrix object mo, it returns an
//   object from which L, U and piv can be accessed.
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
this.create = function (mo)
{ _chkMatrix('create',1,mo);
  var m;        // row dimension
  var n;        // col dimension
  // Use a "left-looking", dot-product, Crout/Doolittle algorithm.
  var matLU = Matrix.create(mo.mat);
  var LU = matLU.mat;
  m = mo.m;
  n = mo.n;
  var piv = new Array();
  for (var i = 0; i < m; i++) piv[i] = i;
  var pivsign = 1;
  var LUrowi;
  var LUcolj = new Array(m);
  // outer loop
  for (var j = 0; j < n; j++)
  { // make a copy of the j-th column to localize references
    for (var i = 0; i < m; i++) LUcolj[i] = LU[i][j];
    // apply previous transformations
    for (var i = 0; i < m; i++)
    { LUrowi = LU[i];
      // most of the time is spent in the following dot product
      var kmax = min(i,j);
      var s = 0.0;
      for (var k = 0; k < kmax; k++) s += LUrowi[k]*LUcolj[k];
      LUrowi[j] = LUcolj[i] -= s;
    }
    // find pivot and exchange if necessary.
    var p = j;
    for (var i = j+1; i < m; i++)
    { if (abs(LUcolj[i]) > abs(LUcolj[p])) p = i;
    }
    if (p != j)
    { for (var k = 0; k < n; k++)
      { var t = LU[p][k];
        LU[p][k] = LU[j][k];
        LU[j][k] = t;
      }
      var k = piv[p];
      piv[p] = piv[j];
      piv[j] = k;
      pivsign = -pivsign;
    }
    // compute multipliers
    if (j < m && LU[j][j] != 0.0)
    { for (var i = j+1; i < m; i++) LU[i][j] /= LU[j][j];
    }
  }
  // now create and return the object with the results
  var lud = new Object();
  lud.LU = LU;
  lud.m = m;
  lud.n = n;
  lud.pivsign = pivsign;
  lud.piv = piv;
  lud.isLUDecomposition = true;
  return lud;
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// LUDecomposition.restore(mo,lud): returns a new Matrix object comprised
//   of the rows of the Matrix object mo restored to the order given in the
//   pivot of the LUDecomposition object lud.
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
this.restore = function (mo,lud)
{ _chkMatrix('restore',1,mo);
  _chkLUDecomposition('restore',2,lud);
  var res = Matrix.create(mo.m,mo.n);
  var r = lud.piv;
  for (var i = 0; i < mo.m; i++)
    for (var j = 0; j < mo.n; j++)
      res.mat[r[i]][j] = mo.mat[i][j];
  return res;
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
//LUDecomposition.isNonsingular(lud): given an LUDecomposition object lud, it
//  determines whether the matrix from which it was derived is singular or
//  not. The value of Matrix.getEPS() is used as the smallest non-zero
//  number.
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
this.isNonsingular = function (lud)
{ _chkLUDecomposition('isNonsingular',1,lud);
  var eps = Matrix.getEPS();
  with (lud)
  { for (var j = 0; j < n; j++)
    { if (abs(LU[j][j]) < eps) return false;
    }
  }
  return true;
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// LUDecomposition.getL(lud): given an LUDecomposition object lud, it creates
//   and returns the lower triangular factor, L, as a Matrix object.
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
this.getL = function (lud)
{ _chkLUDecomposition('getL',1,lud);
  var xm = lud.m;
  var xn = (lud.m >= lud.n)? lud.n : lud.m;
  var X = Matrix.create(xm,xn);
  var L = X.mat;
  with (lud)
  { for (var i = 0; i < xm; i++)
    { for (var j = 0; j < xn; j++)
      { if (i > j) L[i][j] = LU[i][j];
        else if (i == j)  L[i][j] = 1.0;
        else L[i][j] = 0.0;
      }
    }
  }
  return X;
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// LUDecomposition.getU(lud): given an LUDecomposition object lud, it creates
//   and returns the upper triangular factor, U, as a Matrix object.
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
this.getU = function (lud)
{ _chkLUDecomposition('getU',1,lud);
  var xm = (lud.m >= lud.n)? lud.n : lud.m;
  var xn = lud.n;
  var X = Matrix.create(xm,xn);
  var U = X.mat;
  with (lud)
  { for (var i = 0; i < xm; i++)
    { for (var j = 0; j < xn; j++)
      { if (i <= j) U[i][j] = LU[i][j];
        else U[i][j] = 0.0;
      }
    }
  }
  return X;
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// LUDecomposition.det(lud): given an LUDecomposition object lud, it
//   returns the determinant of the matrix from which it was derived. The
//   value of Matrix.getEPS() is used as the smallest non-zero number.
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
this.det = function (lud)
{ _chkLUDecomposition('det',1,lud);
  var eps = Matrix.getEPS();
  if (lud.m != lud.n)
  { writeln('***ERROR: in LUDecomposition.det: argument 1 is not square.');
     throw null;
  }
  var d = lud.pivsign;
  with (lud)
  { for (var j = 0; j < n; j++)
    { var val = LU[j][j];
      d *= LU[j][j];
      if (abs(d) < eps) return 0;
    }
  }
  return d;
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// _arrange(mo,r): a private function which returns a new Matrix object
//  comprisedof the rows of the Matrix object mo arranged according to
//  the values in the array r.
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
function _arrange(mo,r)
{ with (mo)
  { var res = Matrix.create(m,n);
    for (var i = 0; i < m; i++)
      for (var j = 0; j < n; j++)
        res.mat[i][j] = mat[r[i]][j];
  }
  return res;
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// LUDecomposition.solve(lud,bmat): if the LUDecomposition object lud is
//   derived from the matrix A, and the Matrix object bmat represents the
//   matrix b, then this function solves the matrix equation A*x = b,
//   returning x as a Matrix object.
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
this.solve = function (lud,bmat)
{ _chkMatrix('solve',2,bmat);
  _chkLUDecomposition('solve',1,lud);
  if (bmat.m != lud.m)
  { writeln('***ERROR: in LUDecomposition.solve: matrix row dimensions do not agree.');
    throw null;
  }
  if (!this.isNonsingular(lud))
  { writeln('***ERROR: in LUDecomposition.solve: matrix is singular.');
    throw null;
  }
  // copy right hand side with pivoting
  var nx = bmat.n;
  var Xmat = _arrange(bmat,lud.piv);
  var X = Xmat.mat;
  // solve L*Y = B(piv,:)
  with (lud)
  { for (var k = 0; k < n; k++)
    { for (var i = k+1; i < n; i++)
      { for (var j = 0; j < nx; j++)
        { X[i][j] -= X[k][j]*LU[i][k];
        }
      }
    }
    // solve U*X = Y
    for (var k = n-1; k >= 0; k--)
    { for (var j = 0; j < nx; j++)
      { X[k][j] /= LU[k][k];
      }
      for (var i = 0; i < k; i++)
      { for (var j = 0; j < nx; j++)
        { X[i][j] -= X[k][j]*LU[i][k];
        }
      }
    }
  }
  return Xmat;
}

}

/* ========================= QRDecomposition ==========================

Description: Javascript routines to decompose a matrix A into an
  orthogonal matrix Q and an upper triangular matrix R so that Q*R = A.
  Stored as methods of the global variable QRDecomposition.
Acknowledgement: This Javascript code is based on the source code of
  JAMA, A Java Matrix package (http://math.nist.gov/javanumerics/jama/),
  which states "Copyright Notice This software is a cooperative product
  of The MathWorks and the National Institute of Standards and
  Technology (NIST) which has been released to the public domain.
  Neither The MathWorks nor NIST assumes any responsibility whatsoever
  for its use by other parties, and makes no guarantees, expressed
  or implied, about its quality, reliability, or any other
  characteristic."
Author: Peter Coxhead (http://www.cs.bham.ac.uk/~pxc/)
Copyright: The conversion of the JAMA source to Javascript is
  copyright Peter Coxhead, 2008, and is released under GPLv3
  (http://www.gnu.org/licenses/gpl-3.0.html).
Last Revision: 9 Dec 2008
*/
var version = 'QRDecomposition 1.00';
/*

Uses Matrix.js.

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

QR Decomposition (from the JAMA package)

For an m-by-n matrix A with m >= n, the QR decomposition is an m-by-n
orthogonal matrix Q and an n-by-n upper triangular matrix R so that
A = Q*R.

The QR decompostion always exists, even if the matrix does not have
full rank, so the constructor will never fail.  The primary use of the
QR decomposition is in the least squares solution of nonsquare systems
of simultaneous linear equations.  This will fail if isFullRank(qrd)
returns false for the QRDecomposition object qrd.

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

***NOTE*** The functions in QRDecomposition.js should NOT normally be
  used directly.  Their main use to provide 'services' to the functions
  in Matrix.js.

QRDecomposition.create(mo): given a Matrix object mo, it returns an
  object from which Q and R can be accessed.

QRDecomposition.isFullRank(qrd): given an QRDecomposition object qrd, it
  determines whether the matrix from which it was derived is of full
  rank or not. The constant Matrix.EPS is used as the smallest non-zero
  number.

QRDecomposition.getH(qrd): given an QRDecomposition object qrd, it
  creates and returns the Householder vectors, H, as a Matrix object.
QRDecomposition.getR(qrd): given an QRDecomposition object qrd, it creates
  and returns the upper triangular factor, R, as a Matrix object.
QRDecomposition.getQ(qrd): given an QRDecomposition object qrd, it creates
  and returns the orthogonal factor, Q, as a Matrix object.

QRDecomposition.solve(qrd,B): if the QRDecomposition object qrd is
  derived from the matrix A, and the Matrix object B represents the matrix
  B, then this function returns the least squares solution to A*X = B,
  returning x as a Matrix object.
  B must have as many rows as A but may have any number of columns.

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
*/

var QRDecomposition = new createQRDecompositionPackage();
function createQRDecompositionPackage()
{
this.version = version;

var abs = Math.abs;   // local synonym
var sqrt = Math.sqrt; // local synonym

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Private function to check that an argument is a Matrix object
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
function _chkMatrix(fname,argno,arg)
{ if (!(arg instanceof Object && arg.isMatrix))
  { throw '***ERROR: in QRDecomposition.'+fname+': argument '+argno+
            ' is not a 2D matrix (Matrix).';
  }
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Private function to check that an argument is a QRDecomposition object
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
function _chkQRDecomposition(fname,argno,arg)
{ if (!(arg instanceof Object && arg.isQRDecomposition))
  { throw '***ERROR: in QRDecomposition.'+fname+': argument '+argno+
            ' is not an QRDecomposition.';
  }
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Private function to find sqrt(a^2 + b^2) reliably
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
function _hypot(a,b)
{ var r;
  if (abs(a) > abs(b))
  { r = b/a;
    r = abs(a)*sqrt(1+r*r);
  }
  else if (b != 0)
  { r = a/b;
    r = abs(b)*sqrt(1+r*r);
  }
  else
  { r = 0.0;
  }
  return r;
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// QRDecomposition.create(mo): given a Matrix object mo, it returns an
//   object from which Q and R can be accessed.
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
this.create = function (mo)
{ _chkMatrix('create',1,mo);
  var eps = Matrix.getEPS();
  if (mo.m < mo.n)
  { throw '***ERROR: in QRDecomposition.create: matrix has fewer rows than columns.';
  }
  // initialize
  var QR = (Matrix.create(mo.mat)).mat;
  var m = mo.m;
  var n = mo.n;
  var Rdiag = new Array(n);
  // main loop
  for (var k = 0; k < n; k++)
  { // compute 2-norm of k-th column without under/overflow.
    var nrm = 0;
    for (var i = k; i < m; i++)
    { nrm = _hypot(nrm,QR[i][k]);
    }
    if (abs(nrm) > eps)
    { // Form k-th Householder vector.
      if (QR[k][k] < 0)
      { nrm = -nrm;
      }
      for (var i = k; i < m; i++)
      { QR[i][k] /= nrm;
      }
      QR[k][k] += 1.0;
      // apply transformation to remaining columns
      for (var j = k+1; j < n; j++)
      { var s = 0.0;
        for (var i = k; i < m; i++)
        { s += QR[i][k]*QR[i][j];
        }
        s = -s/QR[k][k];
        for (var i = k; i < m; i++)
        { QR[i][j] += s*QR[i][k];
        }
      }
    }
    Rdiag[k] = -nrm;
  }
  var qrd = new Object();
  qrd.QR = QR;         // array for internal storage of decomposition.
  qrd.m = m;           // row dimension
  qrd.n = n;           // col dimension
  qrd.Rdiag = Rdiag;   // array for internal storage of diagonal of R
  qrd.isQRDecomposition = true;
  return qrd;
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// QRDecomposition.isFullRank(qrd): given an QRDecomposition object qrd,
//   it determines whether the matrix from which it was derived is of full
//   rank or not. The constant eps is used as the smallest non-zero
//   number.
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
this.isFullRank = function (qrd)
{ _chkQRDecomposition('isFullRank',1,qrd);
  var eps = Matrix.getEPS();
  with (qrd)
  { for (var j = 0; j < n; j++)
    { if (abs(Rdiag[j]) < eps) return false;
    }
  return true;
  }
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// QRDecomposition.getH(qrd): given an QRDecomposition object qrd, it
//   creates and returns the Householder vectors, H, as a Matrix object.
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
this.getH = function (qrd)
{ _chkQRDecomposition('getH',1,qrd);
  with (qrd)
  { var X = Matrix.create(m,n);
    var H = X.mat;
    for (var i = 0; i < m; i++)
    { for (var j = 0; j < n; j++)
      { if (i >= j)
        { H[i][j] = QR[i][j];
        }
        else
        { H[i][j] = 0.0;
        }
      }
    }
  }
  return X;
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// QRDecomposition.getR(qrd): given an QRDecomposition object qrd, it
//   creates and returns the upper triangular factor, R, as a Matrix
//   object.
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
this.getR = function (qrd)
{ _chkQRDecomposition('getR',1,qrd);
  with (qrd)
  { var X = Matrix.create(n,n);
    var R = X.mat;
    for (var i = 0; i < n; i++)
    { for (var j = 0; j < n; j++)
      { if (i < j) R[i][j] = QR[i][j];
        else if (i == j) R[i][j] = Rdiag[i];
        else R[i][j] = 0.0;
      }
    }
  }
  return X;
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// QRDecomposition.getQ(qrd): given an QRDecomposition object qrd, it
//   creates and returns the orthogonal factor, Q, as a Matrix object.
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
this.getQ = function (qrd)
{ _chkQRDecomposition('getQ',1,qrd);
  with (qrd)
  { var X = Matrix.create(m,n);
    var Q = X.mat;
    for (var k = n-1; k >= 0; k--)
    { for (var i = 0; i < m; i++) Q[i][k] = 0.0;
      Q[k][k] = 1.0;
      for (var j = k; j < n; j++)
      { if (QR[k][k] != 0)
        { var s = 0.0;
          for (var i = k; i < m; i++)
          { s += QR[i][k]*Q[i][j];
          }
          s = -s/QR[k][k];
          for (var i = k; i < m; i++)
          { Q[i][j] += s*QR[i][k];
          }
        }
      }
    }
  }
  return X;
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// QRDecomposition.solve(qrd,B): if the QRDecomposition object qrd is
//   derived from the matrix A, and the Matrix object B represents the
//   matrix B, then this function returns the least squares solution to
//   A*X = B, returning x as a Matrix object.
//   B must have as many rows as A but may have any number of columns.
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
this.solve = function (qrd,B)
{ _chkQRDecomposition('solve',1,qrd);
  _chkMatrix('solve',2,B);
  with (qrd)
  { if (B.m != m)
    { throw '***ERROR: in QRDecomposition.solve: matrix row dimensions don\'t agree.';
    }
    if (!QRDecomposition.isFullRank(qrd))
    { throw '***ERROR: in QRDecomposition.solve: matrix is rank deficient.';
    }
    // copy right hand side
    var nx = B.n;
    var Xm = Matrix.create(B.mat);
    var X = Xm.mat;
    // compute Y = transpose(Q)*B
    for (var k = 0; k < n; k++)
    { for (var j = 0; j < nx; j++)
      { var s = 0.0;
        for (var i = k; i < m; i++)
        { s += QR[i][k]*X[i][j];
        }
        s = -s/QR[k][k];
        for (var i = k; i < m; i++)
        { X[i][j] += s*QR[i][k];
        }
      }
    }
    // Solve R*X = Y;
    for (var k = n-1; k >= 0; k--)
    { for (var j = 0; j < nx; j++)
      { X[k][j] /= Rdiag[k];
      }
      for (var i = 0; i < k; i++)
      { for (var j = 0; j < nx; j++)
        { X[i][j] -= X[k][j]*QR[i][k];
        }
      }
    }
    // only need the first n rows
    var resmat = new Array(n);
    for (var i = 0; i < n; i++)
    { resmat[i] = X[i];
    }
  }
  return Matrix.create(resmat);
}

} // end of QRDecomposition

/* ========================= EVDecomposition ==========================

Description: Javascript routines to find the eigenvalues and
  eigenvectors of a matrix.
Acknowledgement: This Javascript code is based on the source code of
  JAMA, A Java Matrix package (http://math.nist.gov/javanumerics/jama/),
  which states "Copyright Notice This software is a cooperative product
  of The MathWorks and the National Institute of Standards and
  Technology (NIST) which has been released to the public domain.
  Neither The MathWorks nor NIST assumes any responsibility whatsoever
  for its use by other parties, and makes no guarantees, expressed
  or implied, about its quality, reliability, or any other
  characteristic."
Author: Peter Coxhead (http://www.cs.bham.ac.uk/~pxc/)
Copyright: The conversion of the JAMA source to Javascript is
  copyright Peter Coxhead, 2008, and is released under GPLv3
  (http://www.gnu.org/licenses/gpl-3.0.html).
Last Revision: 9 Dec 2008
*/
var version = 'EVDecomposition 1.00';
/*

Uses Matrix.js.

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

EV Decomposition (from the JAMA package)

Eigenvalues and eigenvectors of a real matrix.

If A is symmetric, then A = V*L*V' where the eigenvalue matrix L is
diagonal and the eigenvector matrix V is orthogonal (i.e. V*V' = I).

If A is not symmetric, then the eigenvalue matrix L is block diagonal
with the real eigenvalues in 1-by-1 blocks and any complex eigenvalues,
lambda + i*mu, in 2-by-2 blocks, [lambda, mu; -mu, lambda].  The
columns of V represent the eigenvectors in the sense that A*V = V*L.
The matrix V may be badly conditioned, or even singular, so the validity
of the equation A = V*L*inverse(V) depends upon cond(V). **NB** this
test has not yet been implemented in these Javascript routines!

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

EVDecomposition.create(mo): given a Matrix object mo, it
  returns an EVDecomposition object which contains the eigenvectors
  and eigenvalues of the matrix. The fields of an EVDecomposition
  object are:
  V    the columnwise eigenvectors as a Matrix object
  lr   the real part of the eigenvalues as an array
  li   the imaginary part of the eigenvalues as an array
  L    the block diagonal eigenvalue matrix as a Matrix object
  isSymmetric   whether the matrix is symmetric or not (boolean)

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

Example
-------

(Also uses IOUtils.js, Matrix.js and LUDecomposition.js.)

with (Matrix)
{ var A = create([[1,3,5],[2,8,1],[0,6,5]]);
  writeln('A');
  display(A,0);

  var evd = EVDecomposition.create(A);

  nl(); writeln('V (eigenvectors for A)');
  display(evd.V);

  nl(); writeln('L (block diagonal eigenvalue matrix for A)');
  display(evd.L);
  writeln('Note that the second two eigenvalues are complex: 1.632 + 1.816i and 1.632 - 1.816i.');

  nl(); writeln('A*V - V*L');
  display(sub(mult(A,evd.V),mult(evd.V,evd.L)));

  nl(); writeln('A - V*L*inverse(V)');
  display(sub(A,mult(evd.V,mult(evd.L,inverse(evd.V)))));
}

*/

var EVDecomposition = new createEVDecompositionPackage();
function createEVDecompositionPackage()
{
this.version = version;

var abs = Math.abs;    // local synonym
var sqrt = Math.sqrt;  // local synonym
var max = Math.max;    // local synonym
var min = Math.min;    // local synonym

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Utility function to find sqrt(a^2 + b^2) reliably
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
function _hypot(a,b)
{ var r;
  var aa = abs(a);
  var bb = abs(b);
  if (aa > bb)
  { r = b/a;
    r = aa*sqrt(1+r*r);
  }
  else if (b != 0)
  { r = a/b;
    r = bb*sqrt(1+r*r);
  }
  else r = 0.0;
  return r;
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// 'Global' variables used to communicate between functions.
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
var n;           // row and column dimension (square matrix)
var isSymmetric; // whether matrix is symmetric
var d; var e;    // arrays for internal storage of eigenvalues
var V;           // array for internal storage of eigenvectors.
var H;           // array for internal storage of nonsymmetric Hessenberg form.
var ort;         // working storage for nonsymmetric algorithm.

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Private function to perform the symmetric Householder reduction to
// tridiagonal form.
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
function _tred2 ()
{ //  This is derived from the Algol procedures tred2 by
  //  Bowdler, Martin, Reinsch, and Wilkinson, Handbook for
  //  Auto. Comp., Vol.ii-Linear Algebra, and the corresponding
  //  Fortran subroutine in EISPACK.

  for (var j = 0; j < n; j++)
  { d[j] = V[n-1][j];
  }

  // Householder reduction to tridiagonal form.
  for (var i = n-1; i > 0; i--)
  { // Scale to avoid under/overflow.
    var scale = 0.0;
    var h = 0.0;
    for (var k = 0; k < i; k++)
    { scale = scale + abs(d[k]);
    }
    if (scale == 0.0)
    { e[i] = d[i-1];
      for (var j = 0; j < i; j++)
      { d[j] = V[i-1][j];
        V[i][j] = 0.0;
        V[j][i] = 0.0;
      }
    }
    else
    { // Generate Householder vector.
      for (var k = 0; k < i; k++)
      { d[k] /= scale;
        h += d[k] * d[k];
      }
      var f = d[i-1];
      var g = sqrt(h);
      if (f > 0)
      { g = -g;
      }
      e[i] = scale * g;
      h = h - f * g;
      d[i-1] = f - g;
      for (var j = 0; j < i; j++)
      { e[j] = 0.0;
      }
      // Apply similarity transformation to remaining columns.
      for (var j = 0; j < i; j++)
      { f = d[j];
        V[j][i] = f;
        g = e[j] + V[j][j] * f;
        for (var k = j+1; k <= i-1; k++)
        { g += V[k][j] * d[k];
          e[k] += V[k][j] * f;
        }
        e[j] = g;
      }
      f = 0.0;
      for (var j = 0; j < i; j++)
      { e[j] /= h;
        f += e[j] * d[j];
      }
      var hh = f / (h + h);
      for (var j = 0; j < i; j++)
      { e[j] -= hh * d[j];
      }
      for (var j = 0; j < i; j++)
      { f = d[j];
        g = e[j];
        for (var k = j; k <= i-1; k++)
        { V[k][j] -= (f * e[k] + g * d[k]);
        }
        d[j] = V[i-1][j];
        V[i][j] = 0.0;
      }
    }
    d[i] = h;
  }
  // Accumulate transformations.
  for (var i = 0; i < n-1; i++)
  { V[n-1][i] = V[i][i];
    V[i][i] = 1.0;
    var h = d[i+1];
    if (h != 0.0)
    { for (var k = 0; k <= i; k++)
      { d[k] = V[k][i+1] / h;
      }
      for (var j = 0; j <= i; j++)
      { var g = 0.0;
         for (var k = 0; k <= i; k++)
         { g += V[k][i+1] * V[k][j];
         }
         for (var k = 0; k <= i; k++)
         { V[k][j] -= g * d[k];
         }
      }
    }
    for (var k = 0; k <= i; k++)
    { V[k][i+1] = 0.0;
    }
  }
  for (var j = 0; j < n; j++)
  { d[j] = V[n-1][j];
    V[n-1][j] = 0.0;
  }
  V[n-1][n-1] = 1.0;
  e[0] = 0.0;
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Private function to perform the symmetric tridiagonal QL algorithm.
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
function _tql2 ()
{ //  This is derived from the Algol procedures tql2, by
  //  Bowdler, Martin, Reinsch, and Wilkinson, Handbook for
  //  Auto. Comp., Vol.ii-Linear Algebra, and the corresponding
  //  Fortran subroutine in EISPACK.
  var eps = 0.5*Matrix.getEPS();
  
  for (var i = 1; i < n; i++)
  { e[i-1] = e[i];
  }
  e[n-1] = 0.0;

  var f = 0.0;
  var tst1 = 0.0;
  for (var l = 0; l < n; l++)
  { // Find small subdiagonal element
    tst1 = max(tst1,abs(d[l]) + abs(e[l]));
    var m = l;
    while (m < n)
    { if (abs(e[m]) <= eps*tst1)
      { break;
      }
      m++;
    }

    // If m == l, d[l] is an eigenvalue,
    // otherwise, iterate.
    if (m > l)
    { var iter = 0;
      do
      { iter = iter + 1;  // (Could check iteration count here.)
        // Compute implicit shift
        var g = d[l];
        var p = (d[l+1] - g) / (2.0 * e[l]);
        var r = _hypot(p,1.0);
        if (p < 0)
        { r = -r;
        }
        d[l] = e[l] / (p + r);
        d[l+1] = e[l] * (p + r);
        var dl1 = d[l+1];
        var h = g - d[l];
        for (var i = l+2; i < n; i++)
        { d[i] -= h;
        }
        f = f + h;

        // Implicit QL transformation.
        p = d[m];
        var c = 1.0;
        var c2 = c;
        var c3 = c;
        var el1 = e[l+1];
        var s = 0.0;
        var s2 = 0.0;
        for (var i = m-1; i >= l; i--)
        { c3 = c2;
          c2 = c;
          s2 = s;
          g = c * e[i];
          h = c * p;
          r = _hypot(p,e[i]);
          e[i+1] = s * r;
          s = e[i] / r;
          c = p / r;
          p = c * d[i] - s * g;
          d[i+1] = h + s * (c * g + s * d[i]);

          // Accumulate transformation.
          for (var k = 0; k < n; k++)
          { h = V[k][i+1];
            V[k][i+1] = s * V[k][i] + c * h;
            V[k][i] = c * V[k][i] - s * h;
          }
        }
        p = -s * s2 * c3 * el1 * e[l] / dl1;
        e[l] = s * p;
        d[l] = c * p;


      }
      while (abs(e[l]) > eps*tst1); // Check for convergence
    }
    d[l] = d[l] + f;
    e[l] = 0.0;
  }

  // Sort eigenvalues and corresponding vectors.
  for (var i = 0; i < n-1; i++)
  { var k = i;
    var p = d[i];
    for (var j = i+1; j < n; j++)
    { if (d[j] < p)
      { k = j;
        p = d[j];
      }
    }
    if (k != i)
    { d[k] = d[i];
      d[i] = p;
      for (var j = 0; j < n; j++)
      { p = V[j][i];
        V[j][i] = V[j][k];
        V[j][k] = p;
      }
    }
  }
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Private function to perform the nonsymmetric reduction to Hessenberg
// form.
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
function _orthes ()
{ //  This is derived from the Algol procedures orthes and ortran,
  //  by Martin and Wilkinson, Handbook for Auto. Comp.,
  //  Vol.ii-Linear Algebra, and the corresponding
  //  Fortran subroutines in EISPACK.

  var low = 0;
  var high = n-1;

  for (var m = low+1; m <= high-1; m++)
  {  // Scale column.
    var scale = 0.0;
    for (var i = m; i <= high; i++)
    { scale = scale + abs(H[i][m-1]);
    }
    if (scale != 0.0)
    { // Compute Householder transformation.
      var h = 0.0;
      for (var i = high; i >= m; i--)
      { ort[i] = H[i][m-1]/scale;
         h += ort[i] * ort[i];
      }
      var g = sqrt(h);
      if (ort[m] > 0)
      { g = -g;
      }
      h = h - ort[m] * g;
      ort[m] = ort[m] - g;

      // Apply Householder similarity transformation
      // H = (I-u*u'/h)*H*(I-u*u')/h)
      for (var j = m; j < n; j++)
      { var f = 0.0;
        for (var i = high; i >= m; i--)
        { f += ort[i]*H[i][j];
        }
        f = f/h;
        for (var i = m; i <= high; i++)
        { H[i][j] -= f*ort[i];
        }
      }
      for (var i = 0; i <= high; i++)
      { var f = 0.0;
        for (var j = high; j >= m; j--)
        { f += ort[j]*H[i][j];
        }
        f = f/h;
        for (var j = m; j <= high; j++)
        { H[i][j] -= f*ort[j];
        }
      }
      ort[m] = scale*ort[m];
      H[m][m-1] = scale*g;
    }
  }

  // Accumulate transformations (Algol's ortran).
  for (var i = 0; i < n; i++)
  { for (var j = 0; j < n; j++)
    { V[i][j] = (i == j ? 1.0 : 0.0);
    }
  }
  for (var m = high-1; m >= low+1; m--)
  { if (H[m][m-1] != 0.0)
    { for (var i = m+1; i <= high; i++)
      { ort[i] = H[i][m-1];
      }
      for (var j = m; j <= high; j++)
      { var g = 0.0;
        for (var i = m; i <= high; i++)
        { g += ort[i] * V[i][j];
        }
        // Double division avoids possible underflow
        g = (g / ort[m]) / H[m][m-1];
        for (var i = m; i <= high; i++)
        { V[i][j] += g * ort[i];
        }
      }
    }
  }
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Private function to perform complex scalar division.
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
function _cdiv(xr,xi,yr,yi)
{ var cdivr,cdivi;
  var r,d;
  if (abs(yr) > abs(yi))
  { r = yi/yr;
    d = yr + r*yi;
    cdivr = (xr + r*xi)/d;
    cdivi = (xi - r*xr)/d;
  }
  else
  { r = yr/yi;
    d = yi + r*yr;
    cdivr = (r*xr + xi)/d;
    cdivi = (r*xi - xr)/d;
  }
  return {r:cdivr, i:cdivi};
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Private function to perform nonsymmetric reduction from Hessenberg to
// real Schur form.
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
function _hqr2 ()
{ //  This is derived from the Algol procedure hqr2,
  //  by Martin and Wilkinson, Handbook for Auto. Comp.,
  //  Vol.ii-Linear Algebra, and the corresponding
  //  Fortran subroutine in EISPACK.
  var eps = 0.5*Matrix.getEPS();
  
  // Initialize
  var nn = n;
  var n1 = nn-1;
  var low = 0;
  var high = nn-1;
  var exshift = 0.0;
  var p=0,q=0,r=0,s=0,z=0,t,w,x,y;

  // Store roots isolated by balanc and compute matrix norm

  var norm = 0.0;
  for (var i = 0; i < nn; i++)
  {
    if (i < low || i > high)
    {
      d[i] = H[i][i];
      e[i] = 0.0;
    }
    for (var j = max(i-1,0); j < nn; j++)
    {
      norm = norm + abs(H[i][j]);
    }
  }

  // Outer loop over eigenvalue index

  var iter = 0;
  while (n1 >= low)
  { // Look for single small sub-diagonal element
    var l = n1;
    while (l > low)
    {
      s = abs(H[l-1][l-1]) + abs(H[l][l]);
      if (s == 0.0)
      {
        s = norm;
      }
      if (abs(H[l][l-1]) < eps * s)
      {
        break;
      }
      l--;
    }

    // Check for convergence
    // One root found
    if (l == n1)
    {
      H[n1][n1] = H[n1][n1] + exshift;
      d[n1] = H[n1][n1];
      e[n1] = 0.0;
      n1--;
      iter = 0;
    }
    // Two roots found
    else if (l == n1-1)
    {
      w = H[n1][n1-1] * H[n1-1][n1];
      p = (H[n1-1][n1-1] - H[n1][n1]) / 2.0;
      q = p * p + w;
      z = sqrt(abs(q));
      H[n1][n1] = H[n1][n1] + exshift;
      H[n1-1][n1-1] = H[n1-1][n1-1] + exshift;
      x = H[n1][n1];

      // Real pair
      if (q >= 0)
      {
        if (p >= 0)
        {
          z = p + z;
        }
        else
        {
          z = p - z;
        }
        d[n1-1] = x + z;
        d[n1] = d[n1-1];
        if (z != 0.0)
        {
          d[n1] = x - w / z;
        }
        e[n1-1] = 0.0;
        e[n1] = 0.0;
        x = H[n1][n1-1];
        s = abs(x) + abs(z);
        p = x / s;
        q = z / s;
        r = sqrt(p * p+q * q);
        p = p / r;
        q = q / r;

        // Row modification
        for (var j = n1-1; j < nn; j++)
        {
          z = H[n1-1][j];
          H[n1-1][j] = q * z + p * H[n1][j];
          H[n1][j] = q * H[n1][j] - p * z;
        }

        // Column modification
        for (var i = 0; i <= n1; i++)
        {
          z = H[i][n1-1];
          H[i][n1-1] = q * z + p * H[i][n1];
          H[i][n1] = q * H[i][n1] - p * z;
        }

        // Accumulate transformations
        for (var i = low; i <= high; i++)
        {
          z = V[i][n1-1];
          V[i][n1-1] = q * z + p * V[i][n1];
          V[i][n1] = q * V[i][n1] - p * z;
        }
      }
      // Complex pair
      else
      {
        d[n1-1] = x + p;
        d[n1] = x + p;
        e[n1-1] = z;
        e[n1] = -z;
      }
      n1 = n1 - 2;
      iter = 0;
    }
    // No convergence yet
    else
    {
      // Form shift
      x = H[n1][n1];
      y = 0.0;
      w = 0.0;
      if (l < n1)
      {
        y = H[n1-1][n1-1];
        w = H[n1][n1-1] * H[n1-1][n1];
      }

      // Wilkinson's original ad hoc shift
      if (iter == 10)
      {
        exshift += x;
        for (var i = low; i <= n1; i++)
        {
          H[i][i] -= x;
        }
        s = abs(H[n1][n1-1]) + abs(H[n1-1][n1-2]);
        x = y = 0.75 * s;
        w = -0.4375 * s * s;
      }

      // MATLAB's new ad hoc shift
      if (iter == 30)
      {
        s = (y - x) / 2.0;
        s = s * s + w;
        if (s > 0)
        {
          s = sqrt(s);
          if (y < x)
          {
            s = -s;
          }
          s = x - w / ((y - x) / 2.0 + s);
          for (var i = low; i <= n1; i++)
          {
            H[i][i] -= s;
          }
          exshift += s;
          x = y = w = 0.964;
        }
      }

      iter = iter + 1;   // (Could check iteration count here.)

      // Look for two consecutive small sub-diagonal elements
      var m = n1-2;
      while (m >= l)
      {
        z = H[m][m];
        r = x - z;
        s = y - z;
        p = (r * s - w) / H[m+1][m] + H[m][m+1];
        q = H[m+1][m+1] - z - r - s;
        r = H[m+2][m+1];
        s = abs(p) + abs(q) + abs(r);
        p = p / s;
        q = q / s;
        r = r / s;
        if (m == l)
        {
          break;
        }
        if (abs(H[m][m-1]) * (abs(q) + abs(r)) <
          eps * (abs(p) * (abs(H[m-1][m-1]) + abs(z) +
          abs(H[m+1][m+1]))))
          {
             break;
          }
          m--;
        }

        for (var i = m+2; i <= n1; i++)
        {
          H[i][i-2] = 0.0;
          if (i > m+2)
          {
            H[i][i-3] = 0.0;
          }
        }

        // Double QR step involving rows l:n1 and columns m:n1
        for (var k = m; k <= n1-1; k++)
        {
          var notlast = (k != n1-1);
          if (k != m)
          {
            p = H[k][k-1];
            q = H[k+1][k-1];
            r = (notlast ? H[k+2][k-1] : 0.0);
            x = abs(p) + abs(q) + abs(r);
            if (x != 0.0)
            {
              p = p / x;
              q = q / x;
              r = r / x;
            }
          }
          if (x == 0.0)
          {
            break;
          }
          s = sqrt(p * p + q * q + r * r);
          if (p < 0)
          {
            s = -s;
          }
          if (s != 0)
          {
            if (k != m)
            {
              H[k][k-1] = -s * x;
            }
            else if (l != m)
            {
              H[k][k-1] = -H[k][k-1];
            }
            p = p + s;
            x = p / s;
            y = q / s;
            z = r / s;
            q = q / p;
            r = r / p;

            // Row modification
            for (var j = k; j < nn; j++)
            {
              p = H[k][j] + q * H[k+1][j];
              if (notlast)
              {
                p = p + r * H[k+2][j];
                H[k+2][j] = H[k+2][j] - p * z;
              }
              H[k][j] = H[k][j] - p * x;
              H[k+1][j] = H[k+1][j] - p * y;
            }

            // Column modification
            for (var i = 0; i <= min(n1,k+3); i++)
            {
              p = x * H[i][k] + y * H[i][k+1];
              if (notlast)
              {
                p = p + z * H[i][k+2];
                H[i][k+2] = H[i][k+2] - p * r;
              }
              H[i][k] = H[i][k] - p;
              H[i][k+1] = H[i][k+1] - p * q;
            }

            // Accumulate transformations
            for (var i = low; i <= high; i++)
            {
               p = x * V[i][k] + y * V[i][k+1];
               if (notlast)
               {
                 p = p + z * V[i][k+2];
                 V[i][k+2] = V[i][k+2] - p * r;
               }
               V[i][k] = V[i][k] - p;
               V[i][k+1] = V[i][k+1] - p * q;
            }
          }  // (s != 0)
        }  // k loop
      }  // check convergence
    }  // while (n >= low)

    // Backsubstitute to find vectors of upper triangular form
    if (norm == 0.0)
    {
      return;
    }

    for (n1 = nn-1; n1 >= 0; n1--)
    {
      p = d[n1];
      q = e[n1];

      // Real vector
      if (q == 0)
      {
        var l = n1;
        H[n1][n1] = 1.0;
        for (var i = n1-1; i >= 0; i--)
        {
          w = H[i][i] - p;
          r = 0.0;
          for (var j = l; j <= n1; j++)
          {
            r = r + H[i][j] * H[j][n1];
          }
          if (e[i] < 0.0)
          {
            z = w;
            s = r;
          }
          else
          {
            l = i;
            if (e[i] == 0.0)
            {
              if (w != 0.0)
              {
                H[i][n1] = -r / w;
              }
              else
              {
                H[i][n1] = -r / (eps * norm);
              }

            }
            // Solve real equations
            else
            {
              x = H[i][i+1];
              y = H[i+1][i];
              q = (d[i] - p) * (d[i] - p) + e[i] * e[i];
              t = (x * s - z * r) / q;
              H[i][n1] = t;
              if (abs(x) > abs(z))
              {
                H[i+1][n1] = (-r - w * t) / x;
              }
              else
              {
                H[i+1][n1] = (-s - y * t) / z;
              }
            }

            // Overflow control
            t = abs(H[i][n1]);
            if ((eps * t) * t > 1)
            {
              for (var j = i; j <= n1; j++)
              {
                H[j][n1] = H[j][n1] / t;
              }
            }
          }
        }

      }
      // Complex vector
      else if (q < 0)
      {
      var l = n1-1;

      // Last vector component imaginary so matrix is triangular
      if (abs(H[n1][n1-1]) > abs(H[n1-1][n1]))
      {
        H[n1-1][n1-1] = q / H[n1][n1-1];
        H[n1-1][n1] = -(H[n1][n1] - p) / H[n1][n1-1];
      }
      else
      {
        var cd = _cdiv(0.0,-H[n1-1][n1],H[n1-1][n1-1]-p,q);
        H[n1-1][n1-1] = cd.r;
        H[n1-1][n1] = cd.i;
      }
      H[n1][n1-1] = 0.0;
      H[n1][n1] = 1.0;
      for (var i = n1-2; i >= 0; i--)
      {
        var ra,sa,vr,vi;
        ra = 0.0;
        sa = 0.0;
        for (var j = l; j <= n1; j++)
        {
          ra = ra + H[i][j] * H[j][n1-1];
          sa = sa + H[i][j] * H[j][n1];
        }
        w = H[i][i] - p;

        if (e[i] < 0.0)
        {
          z = w;
          r = ra;
          s = sa;
        }
        else
        {
          l = i;
          if (e[i] == 0)
          {
            var cd = _cdiv(-ra,-sa,w,q);
            H[i][n1-1] = cd.r;
            H[i][n1] = cd.i;
          }
          else
          {
            // Solve complex equations
            x = H[i][i+1];
            y = H[i+1][i];
            vr = (d[i] - p) * (d[i] - p) + e[i] * e[i] - q * q;
            vi = (d[i] - p) * 2.0 * q;
            if (vr == 0.0 && vi == 0.0)
            {
              vr = eps * norm * (abs(w) + abs(q) +
              abs(x) + abs(y) + abs(z));
            }
            var cd = _cdiv(x*r-z*ra+q*sa,x*s-z*sa-q*ra,vr,vi);
            H[i][n1-1] = cd.r;
            H[i][n1] = cd.i;
            if (abs(x) > (abs(z) + abs(q)))
            {
              H[i+1][n1-1] = (-ra - w * H[i][n1-1] + q * H[i][n1]) / x;
              H[i+1][n1] = (-sa - w * H[i][n1] - q * H[i][n1-1]) / x;
            }
            else
            {
              var cd = _cdiv(-r-y*H[i][n1-1],-s-y*H[i][n1],z,q);
              H[i+1][n1-1] = cd.r;
              H[i+1][n1] = cd.i;
            }
          }

          // Overflow control
          t = max(abs(H[i][n1-1]),abs(H[i][n1]));
          if ((eps * t) * t > 1)
          {
            for (var j = i; j <= n1; j++)
            {
              H[j][n1-1] = H[j][n1-1] / t;
              H[j][n1] = H[j][n1] / t;
            }
          }
        }
      }
    }
  }

  // Vectors of isolated roots
  for (var i = 0; i < nn; i++)
  {
    if (i < low || i > high)
    {
      for (var j = i; j < nn; j++)
      {
        V[i][j] = H[i][j];
      }
    }
  }

  // Back transformation to get eigenvectors of original matrix
  for (var j = nn-1; j >= low; j--)
  {
    for (var i = low; i <= high; i++)
    {
      z = 0.0;
      for (var k = low; k <= min(j,high); k++)
      {
         z = z + V[i][k] * H[k][j];
      }
      V[i][j] = z;
    }
  }
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Private function to create the block diagonal eigenvalue matrix.
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
function _getL()
{ var X = Matrix.create(n,n);
  var L = X.mat;
  for (var i = 0; i < n; i++)
  { for (var j = 0; j < n; j++) L[i][j] = 0.0;
    L[i][i] = d[i];
    if (e[i] > 0) L[i][i+1] = e[i];
    else if (e[i] < 0) L[i][i-1] = e[i];
  }
  return X;
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// EVDecomposition.create(mo): given a matrix as a Matrix object mo, it
//   returns an EVDecomposition object which contains the eigenvectors
//   and eigenvalues of the matrix. The fields of an EVDecomposition
//   object are:
//   V   the columnwise eigenvectors as a Matrix object
//   lr  the real part of the eigenvalues as an array
//   li  the imaginary part of the eigenvalues as an array
//   L   the block diagonal eigenvalue matrix as a Matrix object
//   isSymmetric  whether the matrix is symmetric or not (boolean)
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
this.create = function (mo)
{ var A = mo.mat;
  n = mo.n;
  V = new Array(n);
  for (var i = 0; i < n; i++) V[i] = new Array(n);
  d = new Array(n);
  e = new Array(n);

  // is the matrix symmetric?
  isSymmetric = true;
  for (var j = 0; (j < n) && isSymmetric; j++)
  { for (var i = 0; (i < n) && isSymmetric; i++)
    { isSymmetric = (A[i][j] == A[j][i]);
    }
  }

  // process the matrix
  if (isSymmetric)
  { // process a symmetric matrix
    for (var i = 0; i < n; i++)
    { for (var j = 0; j < n; j++) V[i][j] = A[i][j];
    }
    // Tridiagonalize.
    _tred2();
    // Diagonalize.
    _tql2();
  }
  else
  { // process an unsymmetic matrix
    H = new Array(n);
    for (var i = 0; i < n; i++) H[i] = new Array(n);
    ort = new Array(n);
    for (var j = 0; j < n; j++)
    { for (var i = 0; i < n; i++) H[i][j] = A[i][j];
    }
    // Reduce to Hessenberg form.
    _orthes();
    // Reduce Hessenberg to real Schur form.
    _hqr2();
  }

  // reduce small values in d & e to 0 (added by PC)
  var eps = Matrix.getEPS();
  for (var i = 0; i < n; i++)
  { if (abs(d[i]) < eps) d[i] = 0;
    if (abs(e[i]) < eps) e[i] = 0;
  }

  // Sort d, e and L by the size of real part of eigenvalue
  // with 0's at the end.  Care is needed not to re-order pairs of complex
  // eigenvalues.                      (added by PC)
  var last = 0;
  for (var i = 0; i < n-1; i++)
  { var dMax = d[i];
    var iMax = i;
    for (var j = i+1; j < n; j++)
    { var swapNeeded = false;
      if (d[j] != 0)
      { if (dMax == 0) swapNeeded = true;
        else
        { var diff = d[j] - dMax;
          if (diff > eps) swapNeeded = true;
          else if (abs(diff) < eps) swapNeeded = e[j] > e[iMax];
        }
      }
      if (swapNeeded)
      { dMax = d[j];
        iMax = j;
      }
    }
    if (i != iMax)
    { var temp = d[i];
      d[i] = d[iMax];
      d[iMax] = temp;
      temp = e[i];
      e[i] = e[iMax];
      e[iMax] = temp;
      for (var j = 0; j < n; j++)
       { temp = V[j][i];
         V[j][i] = V[j][iMax];
         V[j][iMax] = temp;
       }
    }
    if (d[i] != 0 || e[i] != 0) last = i;
  }
  if (d[n-1] != 0 || e[n-1] != 0) last = n-1;

  // create an object to return the results
  var evd = new Object();
  evd.V = Matrix.create(V);
  evd.lr = d;
  evd.li = e;
  evd.L = _getL(); // create the block diagonal eigenvalue matrix
  evd.isSymmetric = isSymmetric;
  evd.isEVDecomposition = true;
  return evd;
}


}


/*  ======================================= MATRICES =====================================

Description: Javascript routines to handle matrices (2D arrays).
  Stored as methods of the global variable Matrix.
Author: Peter Coxhead (http://www.cs.bham.ac.uk/~pxc/)
Copyright: Peter Coxhead, 2008-2009; released under GPLv3
  (http://www.gnu.org/licenses/gpl-3.0.html).
Last Revision: 9 July 2009
*/
var version = 'Matrix 1.01';
/*

Uses IOUtils.js, LUDecomposition.js, QRDecomposition.js, EVDecomposition.js.

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

The useful fields of a Matrix object are:
  m    number of rows
  n    number of columns
  mat  the matrix as an array of m entries, each being arrays of n entries.

Matrix.getEPS(): in any matrix calculation, an absolute value less than Matrix.getEPS()
  is replaced by 0. The default value is 2^-40 (~9e-13). Set to a different value if you
  want more or less precision.
Matrix.setEPS(newEPS): see above.

Matrix.create(arr): creates a Matrix object to represent the two-dimensional
  array arr. The value of arr is copied.
Matrix.create(m,n): creates a Matrix object to represent an m-by-n matrix,
  whose values are undefined.

Matrix.identity(m,n): returns a Matrix object corresponding to the m-by-n identity matrix.
Matrix.unit(m,n): returns a Matrix object corresponding to the m-by-m unit matrix.
Matrix.random(m,n): returns a Matrix object corresponding to a m-by-n matrix with
  random values such that 0 <= result[i][j] < 1.

Matrix.copy(mo,fromRow,fromCol,m,n): given an Matrix object mo returns a copy
  of the submatrix whose first entry is at [fromRow][fromCol] and which is of size
  m-by-n.

Matrix.transpose(mo): returns a Matrix object corresponding to the transpose of the
  Matrix object mo.
  
Matrix.diagOf(mo): returns the diagonal of a Matrix object mo as a column vector (i.e.
  an l-by-1 Matrix object), where l is the minimum of the number of rows and columns of
  mo.
Matrix.diag(mo): mo must be a column vector, i.e. an m-by-1 Matrix object; the
  function then returns an m-by-m Matrix object with this vector as its diagonal
  and all off-diagonal elements set to 0.

Matrix.max(mo): returns the largest entry in the matrix.
Matrix.min(mo): returns the smallest entry in the matrix.

Matrix.scale(mo,scalar): returns a Matrix object corresponding to the Matrix object mo
  scaled by scalar.

Matrix.add(mo1,mo2): returns the matrix addition of the Matrix objects mo1 and mo2.
Matrix.sub(mo1,mo2): returns the matrix subtraction of the Matrix objects mo1 and mo2.
Matrix.mult(mo1,mo2): returns the matrix multiplication of the Matrix objects mo1 and mo2.

Matrix.map(f,mo): returns a Matrix object obtained by applying the function f to
  each element of the Matrix object mo.  f must be a function of one argument.
Matrix.combine(f,mo1,mo2): returns a Matrix object obtained by applying the function f
  to each element of the Matrix object mo1 and the corresponding element of the Matrix
  element mo2 (which must be of the same dimension).  f must be a function of two
  arguments.

Matrix.trace(mo): returns the trace of the Matrix object mo.
Matrix.det(mo): returns the determinant of the Matrix object mo, which must be square.

Matrix.inverse(mo): returns the inverse of the Matrix object mo.

Matrix.solve(A,B): solves the matrix equation A*X = B, returning x as a Matrix object.
  If A is square, the solution is exact; if A has more rows than columns, the solution
  is least squares. (No solution is possible if A has fewer rows than columns.)
  Uses LUDecomposition.js and QEDecomposition.js.
  
Matrix.eigenstructure(mo): given a square Matrix object mo, returns an object whose
   fields contain the eigenvectors and eigenvalues. The fields are as follows:
   V    the columnwise eigenvectors as a Matrix object
   lr   the real parts of the eigenvalues as an array
   li   the imaginary parts of the eigenvalues as an array
   L    the block diagonal eigenvalue matrix as a Matrix object
   isSymmetric   whether the matrix is symmetric or not (boolean).

Matrix.display(mo,dp): displays the Matrix object mo using dp decimal places. If dp is
  omitted, the default in IOUtils.js is used.

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

Example
-------

(Also uses IOUtils.js, EVDecomposition.js and LUDecomposition.js.)

with (Matrix)
{ var A = create([[1,2,4],[8,2,1],[-2,3,0]]);
  println('A');
  display(A,0);

  var Ainv = inverse(A);
  nl(); println('inverse(A)*A');
  display(mult(Ainv,A));
  nl(); println('inverse(A)*A - I');
  display(sub(mult(Ainv,A),identity(A.n,A.m)));

  var B = random(3,2);
  nl(); println('B');
  display(B);
  var X = solve(A,B);
  nl(); println('X obtained by solving A*X = B');
  display(X);
  nl(); println('A*X - B');
  display(sub(mult(A,X),B));

  var es = eigenstructure(A);

  nl(); println('V (eigenvectors for A)');
  display(es.V);
  nl(); println('L (block diagonal eigenvalue matrix for A)');
  display(es.L);
  nl(); println('A*V - V*L');
  display(sub(mult(A,es.V),mult(es.V,es.L)));
  nl(); println('A - V*L*inverse(V)');
  display(sub(A,mult(es.V,mult(es.L,inverse(es.V)))));
}

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
*/

var Matrix = new createMatrixPackage();
function createMatrixPackage()
{
this.version = version;

var abs = Math.abs; // local synonym

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Any number whose absolute value is < EPS is taken to be 0.
// Matrix.getEPS(): returns the current value of EPS.
// Matrix.setEPS(): changes the current value of EPS.
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
var EPS = Math.pow(2,-40);
this.getEPS = function ()
{ return EPS;
}
this.setEPS = function (newEPS)
{ EPS = newEPS;
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// _chkNum is a private function used in replacing small values by 0.
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
function _chkNum(x)
{ return (abs(x) < EPS)? 0 : x;
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// _chkMatrix is a private function which checks that argument i of
//   the function whose name is fname and whose value is arg is a
//   Matrix object.
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
function _chkMatrix(fname,i,arg)
{ if(!arg.isMatrix)
  { throw '***ERROR: Argument '+i+' of Matrix.'+fname+
          ' is not a Matrix; its value is "'+arg+'".';
  }
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Matrix.create(arr): creates a Matrix object to represent the two-dimensional
//   array arr. The contents of arr are copied.
// Matrix.create(m,n): creates a Matrix object to represent an m x n matrix,
//   whose values are undefined.
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
this.create = function (a1,a2)
{ // check args
  var isMatArg1 = a1 instanceof Array;
  if (!isMatArg1 && (typeof a1 != 'number'))
  { throw '***ERROR: in Matrix.create: argument 1 is not an array or a number.';
  }
  if (isMatArg1 && a2 != null)
  { throw '***ERROR: in Matrix.create: argument 1 is an array but argument 2 is also present.';
  }
  if (isMatArg1) return _createMatrixfromArray(a1);
  else return _createMatrixfromDimensions(a1,a2);
}
function _createMatrixfromArray(arr)
{ var m = arr.length;
  for (var i = 0; i < m; i++)
  { if (!(arr[i] instanceof Array))
    { throw '***ERROR: in Matrix.create: argument 1 is not a 2D array.';
    }
    if (arr[i].length != arr[0].length)
    { throw '***ERROR: in Matrix.create: argument 1 has different length rows.';
    }
  }
  var n = arr[0].length;
  var res = new Array(m);
  for (var i = 0; i < m; i++)
  { res[i] = new Array(n);
    for (var j = 0; j < n; j++) res[i][j] = _chkNum(arr[i][j]);
  }
  var x = new Object();
  x.m = m;
  x.n = n;
  x.mat = res;
  x.isMatrix = true;
  return x;
}
function _createMatrixfromDimensions(m,n)
{ var arr = new Array(m);
  for (var i = 0; i < m; i++) arr[i] = new Array(n);
  var x = new Object();
  x.m = m;
  x.n = n;
  x.mat = arr;
  x.isMatrix = true;
  return x;
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Matrix.identity(m,n): returns a Matrix object corresponding to the m-by-n identity
//   matrix.
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
this.identity = function (m,n)
{ var res = _createMatrixfromDimensions(m,n);
  with (res)
  { for (var i = 0; i < m; i++)
      for (var j = 0; j < n; j++)
        mat[i][j] = 0;
    for (var i = 0; i < Math.min(m,n); i++) mat[i][i] = 1;
  }
  return res;
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Matrix.unit(m,n): returns a Matrix object corresponding to the m-by-n unit matrix.
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
this.unit = function (m,n)
{ var res = _createMatrixfromDimensions(m,n);
  with (res)
    for (var i = 0; i < m; i++)
      for (var j = 0; j < n; j++)
        mat[i][j] = 1;
  return res;
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Matrix.random(m,n): returns a Matrix object corresponding to a m-by-n matrix with
//   random values such that 0 <= result[i][j] < 1.
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
this.random = function (m,n)
{ var res = _createMatrixfromDimensions(m,n);
  with (res)
    for (var i = 0; i < m; i++)
      for (var j = 0; j < n; j++)
        mat[i][j] = _chkNum(Math.random());
  return res;
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Matrix.copy(mo,fromRow,fromCol,m,n): given an Matrix object mo returns a copy
//   of the submatrix whose first entry is at [fromRow][fromCol] and which is of size
//   m by n.
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
this.copy = function (mo,fromRow,fromCol,m,n)
{ _chkMatrix('copy',1,mo);
  var res = _createMatrixfromDimensions(m,n);
  with (res)
    for (var i = 0; i < m; i++)
      for (var j = 0; j < n; j++)
        mat[i][j] = mo.mat[i + fromRow][j + fromCol];
  return res;      
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Matrix.transpose(mo): returns a Matrix object corresponding to the transpose of the
//   Matrix object mo.
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
this.transpose = function (mo)
{ _chkMatrix('transpose',1,mo);
  var res = _createMatrixfromDimensions(mo.n,mo.m);
  with (res)
  { for (var i = 0; i < m; i++)
      for (var j = 0; j < n; j++)
        mat[i][j] = mo.mat[j][i];
  }
  return res;
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Matrix.diagOf(mo): returns the diagonal of a Matrix object mo as a column vector (i.e.
//   an l-by-1 Matrix object), where l is the minimum of the number of rows and columns of
//   mo.
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
this.diagOf = function (mo)
{ _chkMatrix('diagOf',1,mo);
  var res = _createMatrixfromDimensions(Math.min(mo.m,mo.n),1);
  with (res)
  { for (var i = 0; i < m; i++)
      mat[i][0] = mo.mat[i][i];
  }
  return res;
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Matrix.diag(mo): mo must be a column vector, i.e. an m-by-1 Matrix object; the
//   function then returns an m-by-m Matrix object with this vector as its diagonal
//   and all off-diagonal elements set to 0.
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
this.diag = function (mo)
{ _chkMatrix('diag',1,mo);
  if (mo.n != 1)
  { throw '***ERROR: in Matrix.diag: argument 1 is not a column vector.';
  }
  var res = Matrix.identity(mo.m,mo.m);
  with (res)
  { for (var i = 0; i < m; i++)
      mat[i][i] = mo.mat[i][0];
  }
  return res;
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Matrix.max(mo): returns the largest entry in the matrix.
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
this.max = function (mo)
{ _chkMatrix('max',1,mo);
  with (mo)
  { var res = mat[0][0];
    for (var i = 0; i < m; i++)
      for (var j = 0; j < n; j++)
        if (mat[i][j] > res) res = mat[i][j];
  }
  return _chkNum(res);
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Matrix.min(mo): returns the smallest entry in the matrix.
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
this.min = function (mo)
{ _chkMatrix('min',1,mo);
  with (mo)
  { var res = mat[0][0];
    for (var i = 0; i < m; i++)
      for (var j = 0; j < n; j++)
        if (mat[i][j] < res) res = mat[i][j];
  }
  return _chkNum(res);
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Matrix.scale(mo,scalar): returns a Matrix object corresponding to the Matrix object mo
//   scaled by scalar.
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
this.scale = function (mo,scalar)
{ _chkMatrix('scale',1,mo);
  var res = _createMatrixfromArray(mo.mat);
  with (res)
  { for (var i = 0; i < m; i++)
      for (var j = 0; j < n; j++)
        mat[i][j] = _chkNum(scalar * mat[i][j]);
  }
  return res;
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Matrix.add(mo1,mo2): returns the matrix addition of the Matrix objects mo1 and mo2.
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
this.add = function (mo1,mo2)
{ _chkMatrix('add',1,mo1);
  _chkMatrix('add',2,mo2);
  if (mo1.m != mo2.m || mo1.n != mo2.n)
  { throw '***ERROR: in Matrix.add: matrix dimensions don\'t match.';
  }
  var res = _createMatrixfromDimensions(mo1.m,mo1.n);
  with (res)
    for (var i = 0; i < m; i++)
      for (var j = 0; j < n; j++)
        mat[i][j] = _chkNum(mo1.mat[i][j] + mo2.mat[i][j]);
  return res;
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Matrix.sub(mo1,mo2): returns the matrix subtraction of the Matrix objects mo1 and mo2.
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
this.sub = function (mo1,mo2)
{ _chkMatrix('sub',1,mo1);
  _chkMatrix('sub',2,mo2);
  if (mo1.m != mo2.m || mo1.n != mo2.n)
  { throw '***ERROR: in Matrix.sub: matrix dimensions don\'t match.';
  }
  var res = _createMatrixfromDimensions(mo1.m,mo1.n);
  with (res)
    for (var i = 0; i < m; i++)
      for (var j = 0; j < n; j++)
        mat[i][j] = _chkNum(mo1.mat[i][j] - mo2.mat[i][j]);
  return res;
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Matrix.mult(mo1,mo2): returns the matrix multiplication of the Matrix objects mo1 and
//   mo2.
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
this.mult = function (mo1,mo2)
{ _chkMatrix('mult',1,mo1);
  _chkMatrix('mult',2,mo2);
  if (mo1.n != mo2.m)
  { throw '***ERROR: in Matrix.mult: matrix dimensions don\'t match.';
  }
  var res = _createMatrixfromDimensions(mo1.m,mo2.n);
  var temp;
  with (res)
    for (var i = 0; i < m; i++)
      for (var j = 0; j < n; j++)
      { temp = 0;
        for (var k = 0; k < mo1.n; k++)
          temp += mo1.mat[i][k] * mo2.mat[k][j];
        mat[i][j] = _chkNum(temp);
      }
  return res;
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Matrix.map(f,mo): returns a Matrix object obtained by applying the function f to
//   each element of the Matrix object mo.  f must be a function of one argument.
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
this.map = function (f,mo)
{ _chkMatrix('map',2,mo);
  var res = _createMatrixfromDimensions(mo.m,mo.n);
  with (res)
    for (var i = 0; i < m; i++)
      for (var j = 0; j < n; j++)
        mat[i][j] = _chkNum(f(mo.mat[i][j]));
  return res;
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Matrix.combine(f,mo1,mo2): returns a Matrix object obtained by applying the function f
//   to each element of the Matrix object mo1 and the corresponding element of the Matrix
//   element mo2 (which must be of the same dimension).  f must be a function of two
//   arguments.
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
this.combine = function (f,mo1,mo2)
{ _chkMatrix('combine',1,mo1);
  _chkMatrix('combine',2,mo2);
  if (mo1.m != mo2.m || mo1.n != mo2.n)
  { throw '***ERROR: in Matrix.combine: matrix dimensions don\'t match.';
  }
  var res = _createMatrixfromDimensions(mo1.m,mo1.n);
  with (res)
    for (var i = 0; i < m; i++)
      for (var j = 0; j < n; j++)
        mat[i][j] = _chkNum(f(mo1.mat[i][j],mo2.mat[i][j]));
  return res;
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Matrix.trace(mo): returns the trace of the Matrix object mo.
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
this.trace = function (mo)
{ _chkMatrix('trace',1,mo);
  var t = 0;
  with (mo)
    for (var i = 0; i < Math.min(m,n); i++)
      t += mat[i][i];
  return _chkNum(t);
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Matrix.det(mo): returns the determinant of the Matrix object mo, which be square.
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
this.det = function (mo)
{ _chkMatrix('det',1,mo);
  if (mo.m != mo.n)
  { throw '***ERROR: in Matrix.det: argument is not square.';
  }
  with (LUDecomposition)
    return _chkNum(det(create(mo)));
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Matrix.inverse(mo): returns the inverse of the Matrix object mo.
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
this.inverse = function (mo)
{ _chkMatrix('inverse',1,mo);
  return Matrix.solve(mo,Matrix.identity(mo.m,mo.m));
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Matrix.solve(A,B): solves the matrix equation A*X = B, returning x as a Matrix object.
//   If A is square, the solution is exact; if A has more rows than columns, the solution
//   is least squares. (No solution is possible if A has fewer rows than columns.)
//   Uses LUDecomposition.js and QRDecomposition.js.
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
this.solve = function (A,B)
{ _chkMatrix('solve',1,A);
  _chkMatrix('solve',2,B);
  if (A.m == A.n) with (LUDecomposition) return solve(create(A),B);
  else if (A.m > A.n)
    with (QRDecomposition)
    { var temp = create(A);
      return solve(temp,B);
    }
  else throw '***ERROR: in Matrix.solve: argument 1 has fewer rows than columns.';
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Matrix.eigenstructure(mo): given a square Matrix object mo, returns an object whose
//    fields contain the eigenvectors and eigenvalues. The fields are as follows:
//    V    the columnwise eigenvectors as a Matrix object
//    lr   the real parts of the eigenvalues as an array
//    li   the imaginary parts of the eigenvalues as an array
//    L    the block diagonal eigenvalue matrix as a Matrix object
//    isSymmetric   whether the matrix is symmetric or not (boolean).
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
this.eigenstructure = function (mo)
{ _chkMatrix('eigenstructure',1,mo);
  if (mo.m != mo.n)
  { throw '***ERROR: in Matrix.eigenstructure: argument is not a square matrix.';
  }
  return EVDecomposition.create(mo);
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Matrix.display(mo,dp): displays the Matrix object mo using dp decimal places. If dp is
//  omitted, the default in IOUtils.js is used.
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
this.display = function (mo,dp)
{ _chkMatrix('display',1,mo);
  if (dp == null) dp = 3;
  displayMat(mo.mat,null,null,dp);
}

} // end of createMatrixPackage

var REAL = REAL || {};

REAL.debug = false;
REAL.events = true;
REAL.isChrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
REAL.isIOS = (navigator.platform == "iPad" || navigator.platform == "iPhone" || navigator.platform == "iPod" || navigator.platform == "iPhone Simulator" || navigator.platform == "iPad Simulator");


// Más adelante sería interesante un wrapper de console ¿?
if (REAL.debug){
	if (!window.console){
		alert("There's no console in this browser, no dump of data will be traced to the console.'");
		window.console = {};
	}	
} else {
	// deshabilitamos la consola

    // xming
	if (!window.console) window.console = {};
//	var disableMethods = ["log", "debug", "warn", "info"];
//	for (var i=0; i<disableMethods.length; i++){
//		window.console[disableMethods[i]] = function(){ };
//	}
}

// Stats
// Copyright (c) 2010 Mr.Doob.
if (REAL.debug){
	var stats = new Stats();
		stats.domElement.style.position = 'absolute';
		stats.domElement.style.top = '0px';
		stats.domElement.style.left = '0px';
		stats.domElement.style.zIndex = '999';
		
	document.body.appendChild( stats.domElement );
	setInterval(function () { stats.update(); }, 1000/60);
}// EVENTOS
// listado de eventos de la página

REAL.ResizeEvent			= "ResizeEvent";
REAL.NavigationChangeEvent  = "NavigationChangeEvent";
REAL.ExitEvent				= "ExitEvent";
REAL.PreloadChangeEvent		= "PreloadChangeEvent";
REAL.PreloadOneEndEvent		= "PreloadOneEndEvent";
REAL.PreloadEndEvent		= "PreloadEndEvent";
REAL.PreloadCancelEvent		= "PreloadCancelEvent";
REAL.TapaShowEvent			= "TapaShowEvent";
REAL.TapaHideEvent			= "TapaHideEvent";


REAL.WonderItemClick		= "WonderItemClick";
REAL.WonderItemUnClick		= "WonderItemUnClick";
// EventTarget
// Evento personalizado
// Copyright (c) 2010 Nicholas C. Zakas. All rights reserved.
// Hijacked and refactored by Is-real.

REAL.EventTarget = function () {
	
	_listeners = {};
	
	this.addListener = function (type, listener) {
        if (typeof _listeners[type] == "undefined"){
            _listeners[type] = [];
        }
        _listeners[type].push(listener);
    }
	
	this.dispatch = function (event, data) {
        if (typeof event == "string"){
            event = { type: event, data: data };
        }
        if (!event.target){
            event.target = this;
        }
        if (!event.type){
            throw new Error("Event object missing 'type' property.");
        }
        if (_listeners[event.type] instanceof Array){
            var listeners = _listeners[event.type];
            for (var i=0, len=listeners.length; i < len; i++){
                listeners[i].call(this, event);
            }
        }
    }

    this.removeListener = function(type, listener) {
        if (_listeners[type] instanceof Array){
            var listeners = _listeners[type];
            for (var i=0, len=listeners.length; i < len; i++){
                if (listeners[i] === listener){
                    listeners.splice(i, 1);
                    break;
                }
            }
        }
    }
}

if (REAL.events) REAL.events = new REAL.EventTarget();

REAL.Point = function(x, y) {

	this.x		= x || 0;
	this.y		= y || 0;
	this.xOrigin = this.x;
	this.yOrigin = this.y;
  
	this.copy = function(){
		return new REAL.Point(this.x, this.y);
 	}
 	
 	this.equals = function(p){
 		return (this.x === p.x && this.y === p.y);
 	}
  
	this.distanceObj = function(p){
		// calcula la distancia entre dos puntos y devuelve un objeto con esos datos
		var dx		= this.x - p.x;
		var dy		= this.y - p.y;
		var dist	= Math.sqrt(dx*dx + dy*dy);
		
		return {
			dx: dx,
			dy: dy,
			distance : dist
		}
	}

}
REAL.PointIDIterator = (function () {
	
	var idBase		= "real-point-";
	var idNumber	= 0;
	
	function nextId () {
		idNumber++;
		return idBase + idNumber;
	}
	
	return {
		nextId : nextId
	};
	
})();
REAL.POINT_DRAG_MOVE = "POINT_DRAG_MOVE";

REAL.PointDrag = function (x, y) {

	REAL.Point.call(this, x, y);
	
	var that	= this,
		dom		= null;
	this.id		= null;
	
	
	this.init = function () {
		
		this.id = REAL.PointIDIterator.nextId();
		dom = this.createDOMPoint();
		this.addListeners();		
		
	};
	
	this.createDOMPoint = function () {

		var that			= this,
			div				= document.createElement('div');
			div.id			= this.id;
			div.className	= "corner";
			div.style.left	= this.x+"px";
			div.style.top	= this.y+"px";

		document.body.appendChild(div);

		return div;

	};
	
	
	this.addListeners = function () {

		dom.addEventListener('mousedown', that.onMouseDown, false);
		//dom.addEventListener('touchstart', this.onTouchStart, false);
		//dom.addEventListener('touchmove', this.onTouchMove, false);
		//dom.addEventListener('touchend', this.onTouchEnd, false);

	};

	this.onMouseDown = function (e) {

		e.preventDefault();

		document.addEventListener('mousemove', that.onMouseMove, false);
		dom.addEventListener('mouseup', that.onMouseUp, false);
		document.addEventListener('mouseout', that.onMouseOut, false);

	};

	this.onMouseMove = function (e) {

		that.setX(e.clientX);
		that.setY(e.clientY);
		
		REAL.events.dispatch(REAL.POINT_DRAG_MOVE, { element: dom, x: e.clientX, y: e.clientY });

	};

	this.onMouseUp = function (e) {

		document.removeEventListener('mousemove', that.onMouseMove, false);
		dom.removeEventListener('mouseup', that.onMouseUp, false);
		document.removeEventListener('mouseout', that.onMouseOut, false);

	};

	this.onMouseOut = function (e) {

		if (e.currentTarget == document) return;

		that.onMouseUp(null, that);

	};
	
	this.setX = function (x) {
		
		this.x = x;
		dom.style.left = x + "px";
		
	};

	this.setY = function (y) {

		this.y = y;
		dom.style.top = y + "px";

	};
	
	this.init();

};

REAL.PointDrag.prototype = new REAL.Point();
REAL.PointDrag.prototype.constructor = REAL.Point;






/*
REAL.PointDrag.prototype.onTouchStart = function (e) {

	if (e.touches.length === 1) {
		e.preventDefault();
		dom.style.left = e.touches[0].pageX + "px";
		dom.style.top = e.touches[0].pageY + "px";
	}
	
};

REAL.PointDrag.prototype.onTouchMove = function (e) {

	if (e.touches.length === 1) {
		e.preventDefault();
		dom.style.left = e.touches[0].pageX + "px";
		dom.style.top = e.touches[0].pageY + "px";
	}
	
};

REAL.PointDrag.prototype.onTouchEnd = function (e) {

	if (e.touches.length === 0) {
		
	}	
	
};
*/// WonderItem
// Cada elemento del WonderGrid

REAL.WonderItem = function (config) {
	
	var _that,
		_elementString,
		_element,
		_TL, _TR, _BR, _BL,
		_TLini, _TRini, _BRini, _BLini,
		_leftIni, _topIni,
		_width, _height,
		_sti,
		_positionTL, _positionTR, _positionBL, _positionBR,
		_tweenTL, _tweenTR, _tweenBL, _tweenBR;
	
	this.init = function (element, elementString, topLeft, topRight, bottomRight, bottomLeft) {
		
		_that			= this;
		
		_element		= element;
		_elementString	= elementString;
		_TL				= topLeft;
		_TR				= topRight;
		_BR				= bottomRight;
		_BL				= bottomLeft;
		_TLini			= topLeft.copy();
		_TRini			= topRight.copy();
		_BRini			= bottomRight.copy();
		_BLini			= bottomLeft.copy();
		_width			= _element.width();
		_height			= _element.height();
		_leftIni		= _element.position().left; 
		_topIni			= _element.position().top;
		_sti			= 0;
		
		this.addListeners();
	};
	
	this.addListeners = function () {
		
		// añadimos el evento de click del elemento
		_element.bind("click", this.onClick);
		// y escuchar cuando uno cambia
		REAL.events.addListener(REAL.WonderItemClick, this.onItemClick);
		
	};
	
	this.onClick = function (e) {

        // xming
//        REAL.events.dispatch(REAL.WonderItemClick, { item: _that, element: $(this), title: $(this).find("p").html(), img: $(this).find("img").attr("src"), colour: $(this).find("p").css("background-color") });
        REAL.events.dispatch(REAL.WonderItemClick, { item: _that, element: $(this), title: $(this).find(".hero-name").html(), quote: $(this).find(".hero-quote").html(), img: $(this).find("img").attr("src"), colour: $(this).find("p").css("background-color") });

		// se marca como elegido
		$(this).css({position: "absolute", left: _leftIni+"px", top: _topIni+"px", zIndex: 300}).find("a p").addClass("selected");
		
		// se transforma hasta la posición definitiva
		// utilizando Tween.js > http://github.com/sole/tween.js
		var wW = $(window).width(),
			wH = (REAL.isIOS)? $(window).height() + parseInt(window.pageYOffset, 10) : $(window).height() + $(document).scrollTop();
			wr = $("#element-wrapper");
			wrL = wr.offset().left;
			wrT = wr.position().top;
		
		// almacenamos los valores anteriores para volver	
		_positionTL = { x: _TL.x, y: _TL.y };
		_positionTR = { x: _TR.x, y: _TR.y };
		_positionBR = { x: _BR.x, y: _BR.y };
		_positionBL = { x: _BL.x, y: _BL.y };
		
		_tweenTL = new TWEEN.Tween(_TL)
							   .to(0.5, {x: 0 - wrL, y: 0 - wrT})
							   .delay(0.15)
							   .easing(TWEEN.Easing.Cubic.EaseIn)
							   .start();
		_tweenBL = new TWEEN.Tween(_BL)
							   .to(0.5, {x: 0 - wrL, y: wH})
							   .delay(0.15)
							   .easing(TWEEN.Easing.Cubic.EaseIn)
							   .start();
		_tweenTR = new TWEEN.Tween(_TR)
							   .to(0.5, {x: wW, y: 0 - wrT})
							   .delay(0.15)
							   .easing(TWEEN.Easing.Cubic.EaseIn)
							   .start();
		_tweenBR = new TWEEN.Tween(_BR)
							   .to(0.5, {x: wW, y: wH})
							   .delay(0.3)
							   .easing(TWEEN.Easing.Cubic.EaseIn)
							   .onComplete(_that.stopTween)
							   .start();
		
		_sti = setInterval(_that.updateTween, 1000/60);
		
		return false;
	};
	
	this.onItemClick = function(e) {
		if (e.data.element != _element){
			_element.find("a p").removeClass("selected");
		}
	};
	
	this.closeItem = function() {
		
		_tweenTL = new TWEEN.Tween(_TL)
							   .to(0.5, {x: _positionTL.x, y: _positionTL.y})
							   .delay(0.15)
							   .easing(TWEEN.Easing.Cubic.EaseIn)
							   .start();
		_tweenBL = new TWEEN.Tween(_BL)
							   .to(0.5, {x: _positionBL.x, y: _positionBL.y})
							   .delay(0.15)
							   .easing(TWEEN.Easing.Cubic.EaseIn)
							   .start();
		_tweenTR = new TWEEN.Tween(_TR)
							   .to(0.5, {x: _positionTR.x, y: _positionTR.y})
							   .delay(0.15)
							   .easing(TWEEN.Easing.Cubic.EaseIn)
							   .start();
		_tweenBR = new TWEEN.Tween(_BR)
							   .to(0.5, {x: _positionBR.x, y: _positionBR.y})
							   .delay(0.3)
							   .easing(TWEEN.Easing.Cubic.EaseIn)
							   .onComplete(_that.stopTweenClose)
							   .start();
		
		_sti = setInterval(_that.updateTween, 1000/60);		
	};

	this.update = function () {
		if (!_TLini.equals(_TL) || !_TRini.equals(_TR) || !_BRini.equals(_BR) || !_BLini.equals(_BL)){
			REAL.PerspectiveTransform({
				element: _elementString,
				src: [{x:0, y:0}, {x:_width, y:0}, {x:_width, y:_height}, {x:0, y:_height}],
				dst: [{x:parseInt(_TL.x - _leftIni, 10), y:parseInt(_TL.y - _topIni, 10)}, 
					  {x:parseInt(_TR.x - _leftIni, 10), y:parseInt(_TR.y - _topIni, 10)}, 
					  {x:parseInt(_BR.x - _leftIni, 10), y:parseInt(_BR.y - _topIni, 10)},
					  {x:parseInt(_BL.x - _leftIni, 10), y:parseInt(_BL.y - _topIni, 10)}]
			});
		}
	};
	
	this.updateTween = function () {
		
		TWEEN_MANAGER.update();
		_that.update();
		
	};
	
	this.stopTween = function () {
		
		clearInterval(_sti);
		
	};
	
	this.stopTweenClose = function () {
		
		clearInterval(_sti);
		_element.css({position: "static", float: "left", left: "0px", top: "0px", zIndex: null}).find("a p").removeClass("selected");
		REAL.events.dispatch(REAL.WonderItemUnClick, {});
		
	};
	
	
	this.toString = function () {
		
		return 'REAL.WonderItem ( element: '+ _elementString +', top-left: '+ _TL +', top-right: '+ _TR +', bottom-right: '+ _BR +', bottom-left: '+ _BL +'  )';	
		
	};
	
	// llamada al constructor
	this.init(config.element, config.elementString, config.topLeft, config.topRight, config.bottomRight, config.bottomLeft);
	
};
// WonderGrid
// A partir de un listado de elementos web, genera la rejilla de puntos y el array de WonderItems para crear el efecto WonderWall

REAL.WonderGrid = function (config) {
	
	var _that,
		_elementString,
		_element,
		_wrapperString,
		_wrapper,
		_hider,
		_content,
		_contentClose,
		_contentItem,
		_points,
		_items,
		_numPoints,
		_numItems,
		_sti,
		_range,
		_speed,
		_multiSpeed,
		_elementWidth,
		_elementHeight,
		_elementsPerRow,
		_numRows,
		_numRowsRest,
		_mouseX,
		_mouseY,
		_mousePoint,
		_incScroll,
        _charQuoteMapped; // xming
	
	this.init = function (element, elementWrapper) {
		_that			= this;
		
		_elementString	= element;
		_element		= $(element);
		_wrapperString	= elementWrapper;
		_wrapper		= $(elementWrapper);
		_points			= [];
		_items			= [];
		_sti			= 0;
		
		_elementWidth	= _element.eq(0).width();
		_elementHeight	= _element.eq(0).height();
	
		_range			= _elementWidth * 1.8;
		_elementsPerRow = parseInt(_wrapper.width() / _elementWidth, 10);
		_speed			= 50;
		_multiSpeed		= 1;
		_numItems		= _element.length;
		
		_numRows		= parseInt(_numItems / _elementsPerRow, 10);
		_numRowsRest	= _numItems % _elementsPerRow;
		
		_incScroll		= 0;
		
		_wonderGriding	= true;

        _charQuoteMapped = {
            "spiderman": "With great <em>roundness</em> comes great responsibility",
            "superman": "I am much <em>rounder</em> than you think I am. <br> Trust me.",
            "minion": "Hahahahahaha <br> <em>Round Round de</em> Butt <br> hahahaha",
            "batman": "It's not the <em>roundness</em> I am underneath, <br> but what I do that defines me.",
            "hulk": "Don't make me <em>round</em>. <br> You wouldn't like me when I'm <em>round</em>.",
            "ironman": "Is it better to be <em>flat or round</em>? <br> I say, is it too much to ask for both?",
            "joker": "Why so <em>round</em>?",
            "wolverine": "I'm the best there is at <em>being round</em>. <br> And <em>being round...</em> isn't very nice."
        }
		
		this.modifYDOM();
		this.createGrid();
		this.addListeners();
	};
	
	this.modifYDOM = function () {

        // xming
        //$('<div id="wonder-hide"></div><section id="wonder-content"><a href="#" class="close">Close</a><header></header><img src="" /></section>').appendTo("body");
        $('<div id="wonder-hide"></div><section id="wonder-content"><a href="#" class="close">Close</a><header></header><content><div class="mirror-left"><img src="" /><p></p></div><div class="mirror-right"><img src="" /><p></p></div></content></section>').appendTo("body");

		_hider = $("#wonder-hide");
		_content = $("#wonder-content");
		_contentClose = _content.find("a");
	};
	
	this.createGrid = function () {
		
		// recorremos la rejilla, almacenamos los puntos
		var cp = 0;
		var domPoints = '';
		var i, j;
		for (i=0; i<=(_numRows+1); i++){
			var maxCols = (i==_numRows+1)? (_numRowsRest === 0)? -1 : _numRowsRest : _elementsPerRow;
			for (j=0; j<=maxCols; j++){
				_points[cp] = new REAL.Point(j*_elementWidth, i*_elementHeight);
				//if (REAL.debug) domPoints += '<div id="corner-' + cp + '" class="corner" style="left:' + _points[cp].x + 'px; top:' + _points[cp].y + 'px"></div>';
				cp++;
			}
		}
		
		_numPoints = cp;
		
		//if (REAL.debug) $(domPoints).appendTo(_wrapperString); 
		
		// creamos los items
		for (i=0; i<_numItems; i++){
			var numRow = parseInt(i/_elementsPerRow, 10);
			var numCol = i%_elementsPerRow;
			var TL = numRow*(_elementsPerRow+1) + numCol;
			var TR = TL + 1;
			var BL = (numRow+1)*(_elementsPerRow+1) + numCol;
			var BR = BL + 1;
			
			_items[i] = new REAL.WonderItem({
					element:		_element.eq(i),
					elementString:	_element.eq(i).attr('id'),
					topLeft:		_points[TL],
					topRight:		_points[TR],
					bottomRight:	_points[BR],
					bottomLeft:		_points[BL]
				});
		}
		
//		window.requestAnimFrame(_that.onInterval, null);
	//	setInterval(this.onInterval, 1000/60);
		setTimeout(this.onInterval, 1000);
		
	};
	
	this.addListeners = function () {
		
		// añadimos el evento de mouse-move en todo el documento
		$(window).bind("mousemove", this.onMouseMove);
		if (REAL.isIOS){
			document.addEventListener("touchmove", this.touchHandler, false);
			window.addEventListener("orientationchange", this.orientationHandler, false);
		}
		// y escuchar cuando se ha hecho click sobre un elemento y cuando se ha cerrado
		REAL.events.addListener(REAL.WonderItemClick, this.onItemClick);
		REAL.events.addListener(REAL.WonderItemUnClick, this.onItemUnClick);
		// el cerrar de la ficha
		_contentClose.bind("click", this.onContentCloseClick);
		
	};
	
	this.orientationHandler = function (e) {
		
		window.scrollTo(0,0);
	};
	
	this.touchHandler = function (e) {
		
		var first = e.touches.item(0); //e.touches[0];
		_mouseX = first.clientX;
		_mouseY = first.clientY;
		_mousePoint = new REAL.Point(first.pageX - parseInt(_wrapper.offset().left, 10), first.pageY - parseInt(_wrapper.position().top, 10));// + window.pageYOffset);
		// no scroll on iPhone, please
		e.preventDefault();
	};
	
	this.onMouseMove = function (e) {
		
		_mouseX = e.clientX;
		_mouseY = e.clientY;
		_mousePoint = new REAL.Point(e.pageX - parseInt(_wrapper.offset().left, 10), e.pageY - parseInt(_wrapper.position().top, 10));		
	};
	
	this.onItemClick = function (e) {
		
		_wonderGriding = false;
		_contentItem = e.data.item;

        var sT = (REAL.isIOS)? parseInt(window.pageYOffset, 10)+"px" : $(document).scrollTop()+"px";

		if (REAL.isIOS) _hider.css({height: $(document).height()});
		_hider.css({top: sT}).show();

        // xming
//       <div id="wonder-hide"></div>
// <section id="wonder-content">
// <a href="#" class="close">Close</a>
// <header></header>
// <content>
// <div class="mirror-left"><img src="" /><p></p></div>
// <div class="mirror-right"><img src="" /><p></p></div>
// </content>
// </section>

		setTimeout(function(){
			_content.css({top: sT, backgroundColor: e.data.colour}).
					find("header").html(e.data.title).end().
					find(".mirror-left img").attr("src", e.data.img).end().
                    find(".mirror-left p").html(e.data.quote).end().
                    find(".mirror-right img").attr("src", e.data.img.replace(".png", "-evil.png")).end().
                    find(".mirror-right p").html(_charQuoteMapped[e.data.title.toLocaleLowerCase()]).end().
					fadeIn("slow");
		}, 1000);

		if (!REAL.isIOS) $("body").css({overflow: "hidden"});
	};
	
	this.onContentCloseClick = function (e) {
		
		_content.fadeOut("slow", function(){
			_contentItem.closeItem();
		});
		
		return false;
		
	};
	
	this.onItemUnClick = function (e) {
		
		_wonderGriding = true;
		_hider.hide();
		_content.hide();
		
		if (!REAL.isIOS) $("body").css({overflow: "inherit"});
	};
	
	this.onInterval = function () {
		
		if (_mouseY !== null && _wonderGriding){
			
			if (!_mousePoint) return;
			
			// calculamos la repulsión de los puntos
			var i;
			
			for (i = 0; i < _numPoints; i++){
				var point = _points[i];
				var distanceData = _mousePoint.distanceObj(point);
				
				point.x = (point.x - (distanceData.dx/distanceData.distance)*(_range/distanceData.distance)*_speed*_multiSpeed) - ((point.x - point.xOrigin)/2);
				point.y = (point.y - (distanceData.dy/distanceData.distance)*(_range/distanceData.distance)*_speed*_multiSpeed) - ((point.y - point.yOrigin)/2);
				
				//if (REAL.debug) $("#corner-"+i).css({left:parseInt(point.x, 10)+"px", top:parseInt(point.y, 10)+"px"});
			}
			
			for (i = 0; i < _numItems; i++){
				_items[i].update();
			}
			
			
			
			if (REAL.isIOS){
				var pos = parseInt(window.pageYOffset, 10),
					act = _mouseY,
					wH = window.innerHeight;
				_incScroll = (act > (2.1*wH/4))? 20 : (act < 1.9*wH/4)? -20 : 0;
				
				if (!(pos<20 && _incScroll<20))	window.scrollTo(0, pos+_incScroll);
			}

		}
		
		
		window.requestAnimFrame(_that.onInterval, null);

	};
	
	this.toString = function () {
		
		return 'REAL.WonderGrid ( wrapper: '+ _wrapperString +', elements: '+ _elementString +'  )';	
		
	};
	
	// llamada al constructor
	this.init(config.element, config.elementWrapper);
	
};
var SUPER_TEMP = true;

REAL.PerspectiveTransform = function(config) {
	
	var element = config.element;	// DOM element to be transformed
	var src		= config.src;		// Source points of the element
	var dst		= config.dst;		// Destiny points of the element
	
	var helpers = REAL.PerspectiveTransformsHelpers;
	
	// As is 3D, not a Image Distorsion, we have to check for impossible views
	// For example, the polygon can't be Concave.
	if (!helpers.CheckConcave(dst)) return;
	
	var a = [[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]];
	var b = [0,0,0,0,0,0,0,0];

	for( var i = 0; i < 4; i++ ){
		a[i] = [];
        a[i][0] = a[i+4][3] = src[i].x;
        a[i][1] = a[i+4][4] = src[i].y;
        a[i][2] = a[i+4][5] = 1;
        a[i][3] = a[i][4] = a[i][5] =
        a[i+4][0] = a[i+4][1] = a[i+4][2] = 0;
        a[i][6] = -src[i].x*dst[i].x;
        a[i][7] = -src[i].y*dst[i].x;
        a[i+4][6] = -src[i].x*dst[i].y;
        a[i+4][7] = -src[i].y*dst[i].y;
        
        b[i] = dst[i].x;
        b[i+4] = dst[i].y;
    }
    
    var bM = [];
	for(i=0; i<b.length; i++){
		bM[i] = [b[i]];
	}
	
	// Matrix Libraries from a Java port of JAMA: A Java Matrix Package, http://math.nist.gov/javanumerics/jama/
	// Developed by Dr Peter Coxhead: http://www.cs.bham.ac.uk/~pxc/
	// Available here: http://www.cs.bham.ac.uk/~pxc/js/
    var A = Matrix.create(a);
    var B = Matrix.create(bM);
    var X = Matrix.solve(A,B);


	if (REAL.isIOS){
		
		// Create the resultant transformation 3x3 matrix in a 4x4 matrix for WebKitCSSMatrix 
		var matrix = new WebKitCSSMatrix();
			matrix.m11 = X.mat[0][0];
			matrix.m12 = X.mat[3][0];
			matrix.m13 = 0;
			matrix.m14 = X.mat[6][0];
			
			matrix.m21 = X.mat[1][0];
			matrix.m22 = X.mat[4][0];
			matrix.m23 = 0;
			matrix.m24 = X.mat[7][0];
			
			matrix.m31 = 0;
			matrix.m32 = 0;
			matrix.m33 = 1;
			matrix.m34 = 0;
			
			matrix.m41 = X.mat[2][0];
			matrix.m42 = X.mat[5][0];
			matrix.m43 = 0;
			matrix.m44 = 1;
		
		// Finally apply it
		document.getElementById(element).style.webkitTransform = matrix;
	} else {
		
		if (REAL.PerspectiveTransformsHelpers.TransformVendor == "") REAL.PerspectiveTransformsHelpers.detectPropertyPrefix();
		document.getElementById(element).style[REAL.PerspectiveTransformsHelpers.TransformVendor] = "matrix3d(" + X.mat[0][0] + "," + X.mat[3][0] + ", 0," + X.mat[6][0] + "," + X.mat[1][0] + "," + X.mat[4][0] + ", 0," + X.mat[7][0] + ",0, 0, 1, 0," + X.mat[2][0] + "," + X.mat[5][0] + ", 0, 1)";
	}

};



// Helpers to check if it is concave or not
REAL.PerspectiveTransformsHelpers = REAL.PerspectiveTransformsHelpers || {};

REAL.PerspectiveTransformsHelpers.CheckConcave = function(p) {
	
	var helpers			= REAL.PerspectiveTransformsHelpers,
		num_vertices	= 4,
		v1				= helpers.CalcVector(p[0],p[num_vertices-1]),
		v2				= helpers.CalcVector(p[1],p[0]),
		det_value		= helpers.CalcDeterminant(v1,v2),
		cur_det_value	= 0;
	
	for (var i = 1 ; i < num_vertices-1 ; i++) {
		v1 = v2;
		v2 = helpers.CalcVector(p[i+1],p[i]);
		cur_det_value = helpers.CalcDeterminant(v1,v2);
		
		if( (cur_det_value * det_value) < 0.0 ) return false;
    }
    
	v1 = v2;
	v2 = helpers.CalcVector(p[0],p[num_vertices-1]);
	cur_det_value = helpers.CalcDeterminant(v1,v2);
  
	if ((cur_det_value * det_value) < 0.0) return false;
	else return true;
	
};

REAL.PerspectiveTransformsHelpers.CalcVector = function(p0, p1) {
	var x = p0.x - p1.x;
	var y = p0.y - p1.y;
	return new REAL.Point(x, y);
};

REAL.PerspectiveTransformsHelpers.CalcDeterminant = function(p1, p2) {
  return (p1.x * p2.y - p1.y * p2.x);
};

REAL.PerspectiveTransformsHelpers.TransformVendor = "";
REAL.PerspectiveTransformsHelpers.detectPropertyPrefix = function() {

	var property = "Transform",
		prefixes = ['Moz', 'ms', 'Webkit', 'O'];

	for (var i=0, j=prefixes.length; i < j; i++) {
		if (typeof document.body.style[prefixes[i]+property] !== 'undefined') {

			REAL.PerspectiveTransformsHelpers.TransformVendor = prefixes[i] + "Transform";
		}
	}
	
	if	(REAL.PerspectiveTransformsHelpers.TransformVendor == "") REAL.PerspectiveTransformsHelpers.TransformVendor = "msTransform";
	
}
window.requestAnimFrame = (function(){
	return  window.requestAnimationFrame       || 
			window.webkitRequestAnimationFrame || 
			window.mozRequestAnimationFrame    || 
			window.oRequestAnimationFrame      || 
			window.msRequestAnimationFrame     || 
			function(/* function */ callback, /* DOMElement */ element){
				window.setTimeout(callback, 1000 / 60);
			};
})();

var WONDER = WONDER || {};

$(document).ready(function(){
	
	WONDER.oWonderGrid = new REAL.WonderGrid({
			elementWrapper: "#element-wrapper",
			element:		".perspectived"
		});
    
});