(()=>{"use strict";var e={290:e=>{e.exports="@-webkit-keyframes ucmr-spin{0%{-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-ms-transform:rotate(0deg);-o-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(360deg);-moz-transform:rotate(360deg);-ms-transform:rotate(360deg);-o-transform:rotate(360deg)}}@-moz-keyframes ucmr-spin{0%{-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-ms-transform:rotate(0deg);-o-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(360deg);-moz-transform:rotate(360deg);-ms-transform:rotate(360deg);-o-transform:rotate(360deg)}}@-o-keyframes ucmr-spin{0%{-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-ms-transform:rotate(0deg);-o-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(360deg);-moz-transform:rotate(360deg);-ms-transform:rotate(360deg);-o-transform:rotate(360deg)}}@keyframes ucmr-spin{0%{-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-ms-transform:rotate(0deg);-o-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(360deg);-moz-transform:rotate(360deg);-ms-transform:rotate(360deg);-o-transform:rotate(360deg)}}#module-marks{line-height:1.15;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;cursor:default;-moz-tab-size:4;tab-size:4;-webkit-tap-highlight-color:transparent;word-break:break-word}#module-marks *{box-sizing:border-box}#module-marks .login{display:flex;flex-direction:column;justify-content:center;width:max-content}#module-marks .login button,#module-marks .login input{flex:0 0 100%;margin:3px 0;padding:.2em .5em}#module-marks .ucmr-error,#module-marks .ucmr-title{font-size:large;font-weight:450}#module-marks .ucmr-title{margin-bottom:10px}#module-marks .ucmr-error{color:#ff4136}#module-marks .ucmr-circle-notch{width:1em;height:1em;animation:ucmr-spin 2s infinite linear}#module-marks .ucmr-row{display:flex;flex-direction:row}#module-marks .ucmr-course{flex-basis:30%}#module-marks .ucmr-name{flex-basis:45%}#module-marks .ucmr-date{flex-basis:15%}#module-marks .ucmr-mark{flex-basis:10%}"}},t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={exports:{}};return e[n](o,o.exports,r),o.exports}(()=>{function e(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var t,n,o,l,s={},i=[],a=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function _(e,t){for(var r in t)e[r]=t[r];return e}function u(e){var t=e.parentNode;t&&t.removeChild(e)}function c(e,t,r){var n,o,l,s=arguments,i={};for(l in t)"key"==l?n=t[l]:"ref"==l?o=t[l]:i[l]=t[l];if(arguments.length>3)for(r=[r],l=3;l<arguments.length;l++)r.push(s[l]);if(null!=r&&(i.children=r),"function"==typeof e&&null!=e.defaultProps)for(l in e.defaultProps)void 0===i[l]&&(i[l]=e.defaultProps[l]);return d(e,i,n,o,null)}function d(e,r,n,o,l){var s={type:e,props:r,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==l?++t.__v:l};return null!=t.vnode&&t.vnode(s),s}function m(e){return e.children}function p(e,t){this.props=e,this.context=t}function f(e,t){if(null==t)return e.__?f(e.__,e.__.__k.indexOf(e)+1):null;for(var r;t<e.__k.length;t++)if(null!=(r=e.__k[t])&&null!=r.__e)return r.__e;return"function"==typeof e.type?f(e):null}function h(e){var t,r;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(r=e.__k[t])&&null!=r.__e){e.__e=e.__c.base=r.__e;break}return h(e)}}function g(e){(!e.__d&&(e.__d=!0)&&n.push(e)&&!v.__r++||l!==t.debounceRendering)&&((l=t.debounceRendering)||o)(v)}function v(){for(var e;v.__r=n.length;)e=n.sort((function(e,t){return e.__v.__b-t.__v.__b})),n=[],e.some((function(e){var t,r,n,o,l,s;e.__d&&(l=(o=(t=e).__v).__e,(s=t.__P)&&(r=[],(n=_({},o)).__v=o.__v+1,C(s,o,n,t.__n,void 0!==s.ownerSVGElement,null!=o.__h?[l]:null,r,null==l?f(o):l,o.__h),P(r,o),o.__e!=l&&h(o)))}))}function y(e,t,r,n,o,l,a,_,u,c){var p,h,g,v,y,w,x,S=n&&n.__k||i,M=S.length;for(r.__k=[],p=0;p<t.length;p++)if(null!=(v=r.__k[p]=null==(v=t[p])||"boolean"==typeof v?null:"string"==typeof v||"number"==typeof v?d(null,v,null,null,v):Array.isArray(v)?d(m,{children:v},null,null,null):v.__b>0?d(v.type,v.props,v.key,null,v.__v):v)){if(v.__=r,v.__b=r.__b+1,null===(g=S[p])||g&&v.key==g.key&&v.type===g.type)S[p]=void 0;else for(h=0;h<M;h++){if((g=S[h])&&v.key==g.key&&v.type===g.type){S[h]=void 0;break}g=null}C(e,v,g=g||s,o,l,a,_,u,c),y=v.__e,(h=v.ref)&&g.ref!=h&&(x||(x=[]),g.ref&&x.push(g.ref,null,v),x.push(h,v.__c||y,v)),null!=y?(null==w&&(w=y),"function"==typeof v.type&&null!=v.__k&&v.__k===g.__k?v.__d=u=k(v,u,e):u=b(e,v,g,S,y,u),c||"option"!==r.type?"function"==typeof r.type&&(r.__d=u):e.value=""):u&&g.__e==u&&u.parentNode!=e&&(u=f(g))}for(r.__e=w,p=M;p--;)null!=S[p]&&("function"==typeof r.type&&null!=S[p].__e&&S[p].__e==r.__d&&(r.__d=f(n,p+1)),L(S[p],S[p]));if(x)for(p=0;p<x.length;p++)G(x[p],x[++p],x[++p])}function k(e,t,r){var n,o;for(n=0;n<e.__k.length;n++)(o=e.__k[n])&&(o.__=e,t="function"==typeof o.type?k(o,t,r):b(r,o,o,e.__k,o.__e,t));return t}function b(e,t,r,n,o,l){var s,i,a;if(void 0!==t.__d)s=t.__d,t.__d=void 0;else if(null==r||o!=l||null==o.parentNode)e:if(null==l||l.parentNode!==e)e.appendChild(o),s=null;else{for(i=l,a=0;(i=i.nextSibling)&&a<n.length;a+=2)if(i==o)break e;e.insertBefore(o,l),s=l}return void 0!==s?s:o.nextSibling}function w(e,t,r){"-"===t[0]?e.setProperty(t,r):e[t]=null==r?"":"number"!=typeof r||a.test(t)?r:r+"px"}function x(e,t,r,n,o){var l;e:if("style"===t)if("string"==typeof r)e.style.cssText=r;else{if("string"==typeof n&&(e.style.cssText=n=""),n)for(t in n)r&&t in r||w(e.style,t,"");if(r)for(t in r)n&&r[t]===n[t]||w(e.style,t,r[t])}else if("o"===t[0]&&"n"===t[1])l=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+l]=r,r?n||e.addEventListener(t,l?M:S,l):e.removeEventListener(t,l?M:S,l);else if("dangerouslySetInnerHTML"!==t){if(o)t=t.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if("href"!==t&&"list"!==t&&"form"!==t&&"download"!==t&&t in e)try{e[t]=null==r?"":r;break e}catch(e){}"function"==typeof r||(null!=r&&(!1!==r||"a"===t[0]&&"r"===t[1])?e.setAttribute(t,r):e.removeAttribute(t))}}function S(e){this.l[e.type+!1](t.event?t.event(e):e)}function M(e){this.l[e.type+!0](t.event?t.event(e):e)}function C(e,r,n,o,l,s,i,a,u){var c,d,f,h,g,v,k,b,w,x,S,M=r.type;if(void 0!==r.constructor)return null;null!=n.__h&&(u=n.__h,a=r.__e=n.__e,r.__h=null,s=[a]),(c=t.__b)&&c(r);try{e:if("function"==typeof M){if(b=r.props,w=(c=M.contextType)&&o[c.__c],x=c?w?w.props.value:c.__:o,n.__c?k=(d=r.__c=n.__c).__=d.__E:("prototype"in M&&M.prototype.render?r.__c=d=new M(b,x):(r.__c=d=new p(b,x),d.constructor=M,d.render=T),w&&w.sub(d),d.props=b,d.state||(d.state={}),d.context=x,d.__n=o,f=d.__d=!0,d.__h=[]),null==d.__s&&(d.__s=d.state),null!=M.getDerivedStateFromProps&&(d.__s==d.state&&(d.__s=_({},d.__s)),_(d.__s,M.getDerivedStateFromProps(b,d.__s))),h=d.props,g=d.state,f)null==M.getDerivedStateFromProps&&null!=d.componentWillMount&&d.componentWillMount(),null!=d.componentDidMount&&d.__h.push(d.componentDidMount);else{if(null==M.getDerivedStateFromProps&&b!==h&&null!=d.componentWillReceiveProps&&d.componentWillReceiveProps(b,x),!d.__e&&null!=d.shouldComponentUpdate&&!1===d.shouldComponentUpdate(b,d.__s,x)||r.__v===n.__v){d.props=b,d.state=d.__s,r.__v!==n.__v&&(d.__d=!1),d.__v=r,r.__e=n.__e,r.__k=n.__k,d.__h.length&&i.push(d);break e}null!=d.componentWillUpdate&&d.componentWillUpdate(b,d.__s,x),null!=d.componentDidUpdate&&d.__h.push((function(){d.componentDidUpdate(h,g,v)}))}d.context=x,d.props=b,d.state=d.__s,(c=t.__r)&&c(r),d.__d=!1,d.__v=r,d.__P=e,c=d.render(d.props,d.state,d.context),d.state=d.__s,null!=d.getChildContext&&(o=_(_({},o),d.getChildContext())),f||null==d.getSnapshotBeforeUpdate||(v=d.getSnapshotBeforeUpdate(h,g)),S=null!=c&&c.type===m&&null==c.key?c.props.children:c,y(e,Array.isArray(S)?S:[S],r,n,o,l,s,i,a,u),d.base=r.__e,r.__h=null,d.__h.length&&i.push(d),k&&(d.__E=d.__=null),d.__e=!1}else null==s&&r.__v===n.__v?(r.__k=n.__k,r.__e=n.__e):r.__e=z(n.__e,r,n,o,l,s,i,u);(c=t.diffed)&&c(r)}catch(e){r.__v=null,(u||null!=s)&&(r.__e=a,r.__h=!!u,s[s.indexOf(a)]=null),t.__e(e,r,n)}}function P(e,r){t.__c&&t.__c(r,e),e.some((function(r){try{e=r.__h,r.__h=[],e.some((function(e){e.call(r)}))}catch(e){t.__e(e,r.__v)}}))}function z(e,t,r,n,o,l,a,_){var c,d,m,p,f=r.props,h=t.props,g=t.type,v=0;if("svg"===g&&(o=!0),null!=l)for(;v<l.length;v++)if((c=l[v])&&(c===e||(g?c.localName==g:3==c.nodeType))){e=c,l[v]=null;break}if(null==e){if(null===g)return document.createTextNode(h);e=o?document.createElementNS("http://www.w3.org/2000/svg",g):document.createElement(g,h.is&&h),l=null,_=!1}if(null===g)f===h||_&&e.data===h||(e.data=h);else{if(l=l&&i.slice.call(e.childNodes),d=(f=r.props||s).dangerouslySetInnerHTML,m=h.dangerouslySetInnerHTML,!_){if(null!=l)for(f={},p=0;p<e.attributes.length;p++)f[e.attributes[p].name]=e.attributes[p].value;(m||d)&&(m&&(d&&m.__html==d.__html||m.__html===e.innerHTML)||(e.innerHTML=m&&m.__html||""))}if(function(e,t,r,n,o){var l;for(l in r)"children"===l||"key"===l||l in t||x(e,l,null,r[l],n);for(l in t)o&&"function"!=typeof t[l]||"children"===l||"key"===l||"value"===l||"checked"===l||r[l]===t[l]||x(e,l,t[l],r[l],n)}(e,h,f,o,_),m)t.__k=[];else if(v=t.props.children,y(e,Array.isArray(v)?v:[v],t,r,n,o&&"foreignObject"!==g,l,a,e.firstChild,_),null!=l)for(v=l.length;v--;)null!=l[v]&&u(l[v]);_||("value"in h&&void 0!==(v=h.value)&&(v!==e.value||"progress"===g&&!v)&&x(e,"value",v,f.value,!1),"checked"in h&&void 0!==(v=h.checked)&&v!==e.checked&&x(e,"checked",v,f.checked,!1))}return e}function G(e,r,n){try{"function"==typeof e?e(r):e.current=r}catch(e){t.__e(e,n)}}function L(e,r,n){var o,l,s;if(t.unmount&&t.unmount(e),(o=e.ref)&&(o.current&&o.current!==e.__e||G(o,null,r)),n||"function"==typeof e.type||(n=null!=(l=e.__e)),e.__e=e.__d=void 0,null!=(o=e.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(e){t.__e(e,r)}o.base=o.__P=null}if(o=e.__k)for(s=0;s<o.length;s++)o[s]&&L(o[s],r,n);null!=l&&u(l)}function T(e,t,r){return this.constructor(e,r)}t={__e:function(e,t){for(var r,n,o;t=t.__;)if((r=t.__c)&&!r.__)try{if((n=r.constructor)&&null!=n.getDerivedStateFromError&&(r.setState(n.getDerivedStateFromError(e)),o=r.__d),null!=r.componentDidCatch&&(r.componentDidCatch(e),o=r.__d),o)return r.__E=r}catch(t){e=t}throw e},__v:0},p.prototype.setState=function(e,t){var r;r=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=_({},this.state),"function"==typeof e&&(e=e(_({},r),this.props)),e&&_(r,e),null!=e&&this.__v&&(t&&this.__h.push(t),g(this))},p.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),g(this))},p.prototype.render=m,n=[],o="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,v.__r=0;var U=r(290);
// ==UserScript==
// @name      Unconfirmed Marks Preact
// @version   2021.03.01a
// @author    lusc
// @include   *://moodle.ksasz.ch/
// @include   *://moodle.ksasz.ch/?*
// @updateURL https://github.com/melusc/moodle_userscripts/raw/main/dist/Unconfirmed%20Marks/unconfirmed-marks.user.js
// @grant     GM_xmlhttpRequest
// @grant     GM.setValue
// @grant     GM.getValue
// @grant     GM_addStyle
// @grant     GM.deleteValue
// @run-at    document-start
// @connect   www.schul-netz.com
// ==/UserScript==
const A=()=>{const e=document.querySelector("#region-main ul.section"),r=document.createElement("li");r.id="module-marks",r.className="activity label modtype_label";const n=document.querySelector("#module-timetable-v5");n?n.after(r):e.prepend(r),function(e,r,n){var o,l,a;t.__&&t.__(e,r),l=(o=!1)?null:r.__k,a=[],C(r,e=r.__k=c(m,null,[e]),l||s,s,void 0!==r.ownerSVGElement,l?null:r.firstChild?i.slice.call(r.childNodes):null,a,l?l.__e:r.firstChild,o),P(a,e)}(c(E,null),r),GM_addStyle(U)},D=()=>c("svg",{"aria-hidden":"true",class:"ucmr-circle-notch ucmr-spin",viewBox:"0 0 512 512"},c("path",{fill:"currentColor",d:"M288 39.056v16.659c0 10.804 7.281 20.159 17.686 23.066C383.204 100.434 440 171.518 440 256c0 101.689-82.295 184-184 184-101.689 0-184-82.295-184-184 0-84.47 56.786-155.564 134.312-177.219C216.719 75.874 224 66.517 224 55.712V39.064c0-15.709-14.834-27.153-30.046-23.234C86.603 43.482 7.394 141.206 8.003 257.332c.72 137.052 111.477 246.956 248.531 246.667C393.255 503.711 504 392.788 504 256c0-115.633-79.14-212.779-186.211-240.236C302.678 11.889 288 23.456 288 39.056z"}));class E extends p{constructor(...t){super(...t),e(this,"state",{marks:[],loading:!0,error:!1,errorMsg:"",loggedOut:!1}),e(this,"inputs",{login:{current:null},password:{current:null},page:{current:null}}),e(this,"render",((e,{marks:t,loading:r,error:n,errorMsg:o,loggedOut:l})=>c("div",{class:"mod-indent-outer"},c("div",{class:"contentwithoutlink"},c("div",{class:"ucmr-title"},"Unconfirmed Marks"),r&&!n&&c(D,null),!l&&!n&&Array.isArray(t)&&c("div",null,Array.isArray(t)&&t.map((({key:e,course:t,name:r,date:n,mark:o})=>c("div",{key:e,class:"ucmr-row"},c("div",{class:"ucmr-course"},t),c("div",{class:"ucmr-name"},r),c("div",{class:"ucmr-date"},n),c("div",{class:"ucmr-mark"},o))))),l&&c("div",{class:"login"},c("input",{class:"form-control",required:!0,ref:this.inputs.login,placeholder:"Username",type:"text"}),c("input",{class:"form-control",required:!0,ref:this.inputs.password,placeholder:"Password",type:"password"}),c("input",{class:"form-control",required:!0,ref:this.inputs.page,placeholder:"Page (ausserschwyz, einsiedeln...)",type:"text"}),c("button",{class:"btn btn-primary",type:"button",onClick:this.handleLogin},"Save")),!l&&!1===t&&c("div",null,"Sie haben alle Noten bestätigt."),n&&c("div",{class:"ucmr-error"},o??"Something went wrong"),GM_getValue("bottomHR")&&c("hr",null))))),e(this,"handleLogin",(()=>{const e=this.inputs.login.current.value,t=this.inputs.password.current.value,r=this.inputs.page.current.value;e&&t&&r&&Promise.all([GM.setValue("login",e),GM.setValue("password",t),GM.setValue("page",r)]).then((()=>{this.setState({loggedOut:!1,loading:!0}),this.getMarks()}))}))}componentDidMount(){this.checkCredentials()}checkCredentials(){Promise.all([GM.getValue("login"),GM.getValue("password"),GM.getValue("page")]).then((([e,t,r])=>{e&&t&&r?this.getMarks():this.setState({loggedOut:!0,loading:!1})}))}getMarks(){Promise.all([GM.getValue("login"),GM.getValue("password"),GM.getValue("page")]).then((([e,t,r])=>{new Promise(((e,t)=>{GM_xmlhttpRequest({method:"GET",url:`https://www.schul-netz.com/${r}/loginto.php`,onload:e,timeout:1e4,onerror:t,onabort:t,ontimeout:t})})).then((n=>{const o=(new DOMParser).parseFromString(n.responseText,"text/html"),l=new URLSearchParams({loginhash:o.querySelector('input[name="loginhash"]').value,login:e,passwort:t}),s=n.responseHeaders.match(/phpsessid=\w{26}(?=;)/giu).pop();return new Promise(((e,t)=>{GM_xmlhttpRequest({method:"POST",url:`https://www.schul-netz.com/${r}/index.php?pageid=`,cookie:s,data:l.toString(),headers:{"Content-Type":"application/x-www-form-urlencoded"},timeout:1e4,onload:e,nocache:!0,revalidate:!0,onerror:t,onabort:t,ontimeout:t})}))})).catch((e=>{console.error(e),this.setState({loggedOut:!0,loading:!1});for(const e of["login","password","page"])GM.deleteValue(e)})).then((e=>{if("object"!=typeof e||e.cancelled)return;if(new URL(e.finalUrl).pathname.endsWith("loginto.php")){for(const e of["login","password","page"])GM.deleteValue(e);return void this.setState({loggedOut:!0,loading:!1})}const t=(new DOMParser).parseFromString(e.responseText,"text/html"),n=[...t.querySelectorAll("h3.tabletitle")].find((e=>"ihre letzten noten"===e.textContent.toLowerCase().trim())).nextElementSibling,{rows:o}=n,l=[];let s=!1;for(const e of o){const[t,r,n,o]=[...e.children].map((e=>e.textContent.trim()));if(/sie haben alle noten bestätigt./i.test(t)){this.setState({marks:!1}),s=!0;break}l.push({course:t,name:r,date:n,mark:o,key:V()})}s||this.setState({marks:l}),this.setState({loading:!1});const i=[...t.querySelectorAll("a.mdl-menu__item")].find((e=>"abmelden"===e.textContent.toLowerCase().trim()));i&&GM_xmlhttpRequest({method:"GET",url:`https://www.schul-netz.com/${r}/${i.getAttribute("href")}`,anonymous:!0})})).catch((e=>{console.error(e),this.setState({error:!0})}))}))}}const V=()=>([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(e=>(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)));"complete"===document.readyState?A():addEventListener("DOMContentLoaded",A,{once:!0})})()})();