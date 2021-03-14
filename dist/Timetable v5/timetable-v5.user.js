(()=>{"use strict";var e={513:e=>{e.exports=".tt-title{font-weight:450;margin-bottom:10px}.tt-table,.tt-title{font-size:large}.tt-tr{display:flex}.tt-tr>*{flex:0 0 50%}.tt-th{font-weight:450}"},493:e=>{e.exports='@keyframes save-failed{0%{border-color:#ff4126}to{border-color:#30363d}}@keyframes save-successful{0%{border-color:green}to{border-color:#30363d}}*,::after,::before{box-sizing:border-box}::after,::before{text-decoration:inherit;vertical-align:inherit}html{cursor:default;line-height:1.5;-moz-tab-size:4;tab-size:4;-webkit-tap-highlight-color:transparent;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;word-break:break-word}body,button,input,ol ol,ol ul,select,ul ol,ul ul{margin:0}h1{font-size:2em;margin:.67em 0}hr{height:0;overflow:visible}a{background-color:transparent}img,svg{vertical-align:middle}img{border-style:none}svg:not([fill]){fill:currentColor}svg:not(:root){overflow:hidden}button{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}button,input{overflow:visible}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-input-placeholder{color:inherit;opacity:.54}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}::-moz-focus-inner{border-style:none;padding:0}:-moz-focusring{outline:1px dotted ButtonText}:-moz-ui-invalid{box-shadow:none}[tabindex],a,button,input,label,select{-ms-touch-action:manipulation;touch-action:manipulation}[hidden]{display:none}body{padding-top:.3em;width:100%;min-height:100vh;font:20px sans-serif;background-color:#171717}.container,.table-center{display:flex;flex-direction:column;align-items:center}.table-center{width:70%}.main-table{width:100%;margin-top:.5em}.table-cell.remove-row,body{color:#f0f6fcb3}.table-row{display:flex;width:100%;margin-bottom:.3em}.table-cell{width:50%;padding:.3em 1em;box-sizing:border-box;border:2px solid #30363d}.table-cell.entry,.table-cell.time{justify-content:center;align-items:center}.table-cell.time{display:grid;grid-template-columns:1fr auto 1fr;border-top-left-radius:2px;border-bottom-left-radius:2px}.table-cell.entry{border-top-right-radius:2px;border-bottom-right-radius:2px;display:flex;width:50%;flex-direction:column}.table-cell.entry>*{width:100%}.table-cell.entry [data-type=content]:empty::before{content:"Content";color:#8b949e}.table-cell.entry [data-type=id]:empty::before{content:"Course id";color:#8b949e}.table-cell.remove-row{width:1.5em;border:0;cursor:pointer;padding-left:0;padding-right:0;display:flex;align-items:center;justify-content:center}.login-popup{text-align:center}.login-popup .vertical-horizontal-center{width:100%;height:100%;position:fixed;z-index:100000000;top:0;left:0;display:flex;align-items:center;justify-content:center;pointer-events:none}.login-popup .card{pointer-events:auto;background-color:#202020;border:#30363d 2px solid;border-radius:2px;padding:.3em 1em}.login-popup button,.login-popup input{margin-top:5px;background:0 0;color:#f0f6fcb3;border:2px solid #30363d;border-radius:2px;padding:.2em 1.3em;font-size:90%}.login-popup input{display:block;cursor:text}.login-popup button{cursor:pointer}.time-input{margin-left:.5em;margin-right:.5em}.time-input.time-from{text-align:right}.time-input.time-to{text-align:left}[contenteditable]{cursor:text}.grid-buttons{display:grid;grid-template-columns:.3fr auto .3fr;justify-items:center;column-gap:5px;width:100%;margin-bottom:.3em;margin-top:.3em}.day-controls{display:flex;justify-content:space-evenly;align-items:center;grid-column-start:2;user-select:none;margin-right:1.5em}.caret-back,.caret-forward{width:1.5em;height:1.5em;cursor:pointer}.save-button{cursor:pointer;margin-left:auto;background:0 0;color:#f0f6fcb3;border:2px solid #30363d;border-radius:2px;padding:.2em 1.3em;font-size:90%}.icon-add-row,.row-icon-add-row{display:flex;justify-content:center;align-items:center}.icon-add-row{height:1.5em;cursor:pointer;margin-right:1.5em;width:1.5em}.row-icon-add-row{width:100%}.table-hidden{display:none}.invalid-input{color:#ff4126}.invalid-id{border-bottom-color:#ff4126}.suggestions{position:absolute;top:0;left:0;z-index:1;background-color:#0d1117;border:2px solid #30363d;border-radius:2px;padding:12px 20px;max-width:calc(35% - 2.7em)}.suggestions .emphasised{font-weight:700}.suggestions:empty{display:none}.suggestions .suggestion{display:flex;width:100%}.suggestions .suggestion:hover{text-decoration:underline}.suggestion-name{padding:2px 4px;border-radius:2px;cursor:pointer;flex:0 0 80%}.suggestion-id{flex:0 0 20%;text-align:end}.save-failed{animation:3s ease-in-out save-failed}.save-successful{animation:3s ease-in-out save-successful}'},604:e=>{e.exports=".shared-login-popup .vertical-horizontal-center{width:100%;height:100%;position:fixed;z-index:100000000;top:0;left:0;display:flex;align-items:center;justify-content:center;pointer-events:none}.shared-login-popup .card{pointer-events:auto}"}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var s=t[o]={exports:{}};return e[o](s,s.exports,n),s.exports}(()=>{function e(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var t,o,i,s,r={},l=[],a=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function d(e,t){for(var n in t)e[n]=t[n];return e}function c(e){var t=e.parentNode;t&&t.removeChild(e)}function u(e,t,n){var o,i,s,r=arguments,l={};for(s in t)"key"==s?o=t[s]:"ref"==s?i=t[s]:l[s]=t[s];if(arguments.length>3)for(n=[n],s=3;s<arguments.length;s++)n.push(r[s]);if(null!=n&&(l.children=n),"function"==typeof e&&null!=e.defaultProps)for(s in e.defaultProps)void 0===l[s]&&(l[s]=e.defaultProps[s]);return p(e,l,o,i,null)}function p(e,n,o,i,s){var r={type:e,props:n,key:o,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==s?++t.__v:s};return null!=t.vnode&&t.vnode(r),r}function f(e){return e.children}function _(e,t){this.props=e,this.context=t}function h(e,t){if(null==t)return e.__?h(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?h(e):null}function m(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return m(e)}}function v(e){(!e.__d&&(e.__d=!0)&&o.push(e)&&!g.__r++||s!==t.debounceRendering)&&((s=t.debounceRendering)||i)(g)}function g(){for(var e;g.__r=o.length;)e=o.sort((function(e,t){return e.__v.__b-t.__v.__b})),o=[],e.some((function(e){var t,n,o,i,s,r;e.__d&&(s=(i=(t=e).__v).__e,(r=t.__P)&&(n=[],(o=d({},i)).__v=i.__v+1,M(r,i,o,t.__n,void 0!==r.ownerSVGElement,null!=i.__h?[s]:null,n,null==s?h(i):s,i.__h),T(n,i),i.__e!=s&&m(i)))}))}function b(e,t,n,o,i,s,a,d,c,u){var _,m,v,g,b,x,k,S=o&&o.__k||l,C=S.length;for(n.__k=[],_=0;_<t.length;_++)if(null!=(g=n.__k[_]=null==(g=t[_])||"boolean"==typeof g?null:"string"==typeof g||"number"==typeof g?p(null,g,null,null,g):Array.isArray(g)?p(f,{children:g},null,null,null):g.__b>0?p(g.type,g.props,g.key,null,g.__v):g)){if(g.__=n,g.__b=n.__b+1,null===(v=S[_])||v&&g.key==v.key&&g.type===v.type)S[_]=void 0;else for(m=0;m<C;m++){if((v=S[m])&&g.key==v.key&&g.type===v.type){S[m]=void 0;break}v=null}M(e,g,v=v||r,i,s,a,d,c,u),b=g.__e,(m=g.ref)&&v.ref!=m&&(k||(k=[]),v.ref&&k.push(v.ref,null,g),k.push(m,g.__c||b,g)),null!=b?(null==x&&(x=b),"function"==typeof g.type&&null!=g.__k&&g.__k===v.__k?g.__d=c=y(g,c,e):c=w(e,g,v,S,b,c),u||"option"!==n.type?"function"==typeof n.type&&(n.__d=c):e.value=""):c&&v.__e==c&&c.parentNode!=e&&(c=h(v))}for(n.__e=x,_=C;_--;)null!=S[_]&&("function"==typeof n.type&&null!=S[_].__e&&S[_].__e==n.__d&&(n.__d=h(o,_+1)),L(S[_],S[_]));if(k)for(_=0;_<k.length;_++)D(k[_],k[++_],k[++_])}function y(e,t,n){var o,i;for(o=0;o<e.__k.length;o++)(i=e.__k[o])&&(i.__=e,t="function"==typeof i.type?y(i,t,n):w(n,i,i,e.__k,i.__e,t));return t}function w(e,t,n,o,i,s){var r,l,a;if(void 0!==t.__d)r=t.__d,t.__d=void 0;else if(null==n||i!=s||null==i.parentNode)e:if(null==s||s.parentNode!==e)e.appendChild(i),r=null;else{for(l=s,a=0;(l=l.nextSibling)&&a<o.length;a+=2)if(l==i)break e;e.insertBefore(i,s),r=s}return void 0!==r?r:i.nextSibling}function x(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]=null==n?"":"number"!=typeof n||a.test(t)?n:n+"px"}function k(e,t,n,o,i){var s;e:if("style"===t)if("string"==typeof n)e.style.cssText=n;else{if("string"==typeof o&&(e.style.cssText=o=""),o)for(t in o)n&&t in n||x(e.style,t,"");if(n)for(t in n)o&&n[t]===o[t]||x(e.style,t,n[t])}else if("o"===t[0]&&"n"===t[1])s=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+s]=n,n?o||e.addEventListener(t,s?C:S,s):e.removeEventListener(t,s?C:S,s);else if("dangerouslySetInnerHTML"!==t){if(i)t=t.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if("href"!==t&&"list"!==t&&"form"!==t&&"download"!==t&&t in e)try{e[t]=null==n?"":n;break e}catch(e){}"function"==typeof n||(null!=n&&(!1!==n||"a"===t[0]&&"r"===t[1])?e.setAttribute(t,n):e.removeAttribute(t))}}function S(e){this.l[e.type+!1](t.event?t.event(e):e)}function C(e){this.l[e.type+!0](t.event?t.event(e):e)}function M(e,n,o,i,s,r,l,a,c){var u,p,h,m,v,g,y,w,x,k,S,C=n.type;if(void 0!==n.constructor)return null;null!=o.__h&&(c=o.__h,a=n.__e=o.__e,n.__h=null,r=[a]),(u=t.__b)&&u(n);try{e:if("function"==typeof C){if(w=n.props,x=(u=C.contextType)&&i[u.__c],k=u?x?x.props.value:u.__:i,o.__c?y=(p=n.__c=o.__c).__=p.__E:("prototype"in C&&C.prototype.render?n.__c=p=new C(w,k):(n.__c=p=new _(w,k),p.constructor=C,p.render=N),x&&x.sub(p),p.props=w,p.state||(p.state={}),p.context=k,p.__n=i,h=p.__d=!0,p.__h=[]),null==p.__s&&(p.__s=p.state),null!=C.getDerivedStateFromProps&&(p.__s==p.state&&(p.__s=d({},p.__s)),d(p.__s,C.getDerivedStateFromProps(w,p.__s))),m=p.props,v=p.state,h)null==C.getDerivedStateFromProps&&null!=p.componentWillMount&&p.componentWillMount(),null!=p.componentDidMount&&p.__h.push(p.componentDidMount);else{if(null==C.getDerivedStateFromProps&&w!==m&&null!=p.componentWillReceiveProps&&p.componentWillReceiveProps(w,k),!p.__e&&null!=p.shouldComponentUpdate&&!1===p.shouldComponentUpdate(w,p.__s,k)||n.__v===o.__v){p.props=w,p.state=p.__s,n.__v!==o.__v&&(p.__d=!1),p.__v=n,n.__e=o.__e,n.__k=o.__k,p.__h.length&&l.push(p);break e}null!=p.componentWillUpdate&&p.componentWillUpdate(w,p.__s,k),null!=p.componentDidUpdate&&p.__h.push((function(){p.componentDidUpdate(m,v,g)}))}p.context=k,p.props=w,p.state=p.__s,(u=t.__r)&&u(n),p.__d=!1,p.__v=n,p.__P=e,u=p.render(p.props,p.state,p.context),p.state=p.__s,null!=p.getChildContext&&(i=d(d({},i),p.getChildContext())),h||null==p.getSnapshotBeforeUpdate||(g=p.getSnapshotBeforeUpdate(m,v)),S=null!=u&&u.type===f&&null==u.key?u.props.children:u,b(e,Array.isArray(S)?S:[S],n,o,i,s,r,l,a,c),p.base=n.__e,n.__h=null,p.__h.length&&l.push(p),y&&(p.__E=p.__=null),p.__e=!1}else null==r&&n.__v===o.__v?(n.__k=o.__k,n.__e=o.__e):n.__e=E(o.__e,n,o,i,s,r,l,c);(u=t.diffed)&&u(n)}catch(e){n.__v=null,(c||null!=r)&&(n.__e=a,n.__h=!!c,r[r.indexOf(a)]=null),t.__e(e,n,o)}}function T(e,n){t.__c&&t.__c(n,e),e.some((function(n){try{e=n.__h,n.__h=[],e.some((function(e){e.call(n)}))}catch(e){t.__e(e,n.__v)}}))}function E(e,t,n,o,i,s,a,d){var u,p,f,_,h=n.props,m=t.props,v=t.type,g=0;if("svg"===v&&(i=!0),null!=s)for(;g<s.length;g++)if((u=s[g])&&(u===e||(v?u.localName==v:3==u.nodeType))){e=u,s[g]=null;break}if(null==e){if(null===v)return document.createTextNode(m);e=i?document.createElementNS("http://www.w3.org/2000/svg",v):document.createElement(v,m.is&&m),s=null,d=!1}if(null===v)h===m||d&&e.data===m||(e.data=m);else{if(s=s&&l.slice.call(e.childNodes),p=(h=n.props||r).dangerouslySetInnerHTML,f=m.dangerouslySetInnerHTML,!d){if(null!=s)for(h={},_=0;_<e.attributes.length;_++)h[e.attributes[_].name]=e.attributes[_].value;(f||p)&&(f&&(p&&f.__html==p.__html||f.__html===e.innerHTML)||(e.innerHTML=f&&f.__html||""))}if(function(e,t,n,o,i){var s;for(s in n)"children"===s||"key"===s||s in t||k(e,s,null,n[s],o);for(s in t)i&&"function"!=typeof t[s]||"children"===s||"key"===s||"value"===s||"checked"===s||n[s]===t[s]||k(e,s,t[s],n[s],o)}(e,m,h,i,d),f)t.__k=[];else if(g=t.props.children,b(e,Array.isArray(g)?g:[g],t,n,o,i&&"foreignObject"!==v,s,a,e.firstChild,d),null!=s)for(g=s.length;g--;)null!=s[g]&&c(s[g]);d||("value"in m&&void 0!==(g=m.value)&&(g!==e.value||"progress"===v&&!g)&&k(e,"value",g,h.value,!1),"checked"in m&&void 0!==(g=m.checked)&&g!==e.checked&&k(e,"checked",g,h.checked,!1))}return e}function D(e,n,o){try{"function"==typeof e?e(n):e.current=n}catch(e){t.__e(e,o)}}function L(e,n,o){var i,s,r;if(t.unmount&&t.unmount(e),(i=e.ref)&&(i.current&&i.current!==e.__e||D(i,null,n)),o||"function"==typeof e.type||(o=null!=(s=e.__e)),e.__e=e.__d=void 0,null!=(i=e.__c)){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(e){t.__e(e,n)}i.base=i.__P=null}if(i=e.__k)for(r=0;r<i.length;r++)i[r]&&L(i[r],n,o);null!=s&&c(s)}function N(e,t,n){return this.constructor(e,n)}function O(e,n,o){var i,s,a;t.__&&t.__(e,n),s=(i="function"==typeof o)?null:o&&o.__k||n.__k,a=[],M(n,e=(!i&&o||n).__k=u(f,null,[e]),s||r,r,void 0!==n.ownerSVGElement,!i&&o?[o]:s?null:n.firstChild?l.slice.call(n.childNodes):null,a,!i&&o?o:s?s.__e:n.firstChild,i),T(a,e)}t={__e:function(e,t){for(var n,o,i;t=t.__;)if((n=t.__c)&&!n.__)try{if((o=n.constructor)&&null!=o.getDerivedStateFromError&&(n.setState(o.getDerivedStateFromError(e)),i=n.__d),null!=n.componentDidCatch&&(n.componentDidCatch(e),i=n.__d),i)return n.__E=n}catch(t){e=t}throw e},__v:0},_.prototype.setState=function(e,t){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=d({},this.state),"function"==typeof e&&(e=e(d({},n),this.props)),e&&d(n,e),null!=e&&this.__v&&(t&&this.__h.push(t),v(this))},_.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),v(this))},_.prototype.render=f,o=[],i="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,g.__r=0;var G=n(604);let P,V={};class R extends _{constructor(...t){super(...t),e(this,"state",V),e(this,"inputs",{username:{current:null},password:{current:null}}),e(this,"render",((e,{loggedOut:t})=>t&&u("div",{class:"vertical-horizontal-center"},u("div",{class:"card"},u("div",{class:"card-body"},u("h5",{class:"card-title"},"Login"),u("input",{placeholder:"Username",required:!0,class:"input-group-text",ref:this.inputs.username}),u("input",{placeholder:"Password",required:!0,class:"input-group-text",ref:this.inputs.password,type:"password"})),u("button",{class:"btn btn-primary",type:"button",onClick:this.handleClick},"Login"))))),e(this,"handleClick",(()=>{const e=this.inputs.username.current.value.trim(),t=this.inputs.password.current.value;this.state.loggedOutCallback({username:e,password:t})})),e(this,"componentDidMount",(()=>{P=this.setState.bind(this)}))}}const H=e=>{if("function"==typeof P)P(e);else{V=e;const t=document.createElement("div");t.className="shared-login-popup",document.body.append(t),GM_addStyle(G),O(u(R,null),t)}},z=(e=!1)=>{for(const e of["token","lastValidatedToken"])GM_deleteValue(e);if(e)for(const e of["username","password"])GM_deleteValue(e)},F=()=>GM_setValue("lastValidatedToken",Date.now());let I;const j=(e=!1,t=H)=>{if(!e&&I)return I;const n=GM_getValue("token"),o=GM_getValue("lastValidatedToken");return!I&&n&&Date.now()-o<18e6&&(I=Promise.resolve(n)),!e&&I||(I=((e=H)=>new Promise((t=>{const n=GM_getValue("username"),o=GM_getValue("password");n&&o?t({username:n,password:o}):e({loggedOut:!0,loggedOutCallback:({username:n,password:o})=>{n&&o&&(GM_setValue("username",n),GM_setValue("password",o),e({loggedOut:!1,loggedOutCallback:void 0}),t({username:n,password:o}))}})})))(t).then((({username:e,password:n})=>{const o=new URLSearchParams({username:e,password:n,service:"moodle_mobile_app"});return fetch("/login/token.php",{method:"POST",body:o.toString(),headers:{"content-type":"application/x-www-form-urlencoded"}}).then((e=>e.json())).then((e=>"errorcode"in e?(z(!0),j(!0,t)):(GM_setValue("token",e.token),F(),e.token)))}))),I},q=(e=H)=>j(!1,e).then((e=>{const t=new URLSearchParams({wsfunction:"core_webservice_get_site_info",wstoken:e});return fetch("/webservice/rest/server.php?moodlewsrestformat=json",{method:"POST",headers:{"content-type":"application/x-www-form-urlencoded"},body:t.toString()})})).then((e=>e.json())).then((t=>"exception"in t?(z(),q(e)):(F(),t.userid)));let B;const U=(e=!1,t=H)=>(!e&&B||(B=Promise.all([j(e,t),q(t)]).then((([e,t])=>{const n=new URLSearchParams({"requests[0][function]":"core_enrol_get_users_courses","requests[0][arguments]":JSON.stringify({userid:t,returnusercount:!1}),wstoken:e});return fetch("/webservice/rest/server.php?moodlewsrestformat=json&wsfunction=tool_mobile_call_external_functions",{method:"POST",body:n.toString(),headers:{"content-type":"application/x-www-form-urlencoded"}}).then((e=>e.json()))})).then((e=>{if("exception"in e)return z(),U(!0,t);const n=JSON.parse(e.responses[0].data),o={};for(const{id:e,fullname:t}of n)o[e]=t;return F(),o}))),B);var A=n(513),$=n(493);
// ==UserScript==
// @name      Moodle Timetable v5
// @version   2021.03.14a
// @author    lusc
// @updateURL https://git.io/Jqlt4
// @include   *://moodle.ksasz.ch/
// @include   *://moodle.ksasz.ch/?*
// @include   *://moodle.ksasz.ch/timetable/v5*
// @grant     GM_addValueChangeListener
// @grant     GM_setValue
// @grant     GM_getValue
// @grant     GM_deleteValue
// @grant     GM_registerMenuCommand
// @grant     GM_addStyle
// @grant     GM_notification
// @run-at    document-start
// ==/UserScript==
"https:"!==location.protocol&&(location.protocol="https:");const W=e=>{if(Number.isNaN(e))return!1;const t=+e%60;return`${Math.floor(+e/60).toString().padStart(2,"0")}:${t.toString().padStart(2,"0")}`},K=e=>e?(e^16*Math.random()>>e/4).toString(16):([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,K),J=()=>u("svg",{viewBox:"0 0 512 512"},u("path",{stroke:"currentColor","stroke-linecap":"round","stroke-width":"32",d:"M368 368L144 144m224 0L144 368"})),X=()=>u("svg",{viewBox:"0 0 512 512"},u("path",{fill:"currentColor",d:"M321.94 98L158.82 237.78a24 24 0 000 36.44L321.94 414c15.57 13.34 39.62 2.28 39.62-18.22v-279.6c0-20.5-24.05-31.56-39.62-18.18z"})),Y=()=>u("svg",{viewBox:"0 0 512 512"},u("path",{fill:"currentColor",d:"M190.06 414l163.12-139.78a24 24 0 000-36.44L190.06 98c-15.57-13.34-39.62-2.28-39.62 18.22v279.6c0 20.5 24.05 31.56 39.62 18.18z"})),Z=()=>u("svg",{viewBox:"0 0 512 512"},u("path",{stroke:"currentColor","stroke-linecap":"round","stroke-width":"32",d:"M256 112v288m144-144H112"}));class Q extends _{constructor(...t){super(...t),e(this,"removeAnimation",(({target:e})=>{e?.classList?.remove("save-failed","save-successful")}))}render({handleClick:e,handleSave:t,saveButtonRef:n,day:o}){return u(f,null,u("div",{class:"day-controls",onClick:e},u("div",{class:"caret-input caret-back"},u(X,null)),u("div",null,o),u("div",{class:"caret-input caret-forward"},u(Y,null))),u("button",{type:"button",class:"save-button",onClick:t,ref:n,onAnimationEnd:this.removeAnimation},"Save"))}}const ee=(()=>{const e=document.createElement("input");return e.type="time",t=>{const n=`${t}`.trim();return!!/^\d{2}:\d{2}$/.test(n)&&(e.value=n,e.value===n)}})(),te=({content:e,handleFocus:t})=>u("div",{class:"table",onFocus:t},e?.map((({from:e,to:t,content:n,id:o,fromvalid:i,tovalid:s,uuid:r})=>u("div",{key:r,class:"table-row"},u("div",{class:"table-cell time"},u("span",{class:"time-input time-from"+(ee(e)&&!1!==i?"":" invalid-input"),contentEditable:!0},e)," - ",u("span",{class:"time-input time-to"+(ee(t)&&!1!==s?"":" invalid-input"),contentEditable:!0},t)),u("div",{class:"table-cell entry"},u("span",{contentEditable:!0,"data-type":"content"},n),u("hr",null),u("span",{contentEditable:!0,"data-type":"id"},o)),u("div",{class:"table-cell remove-row"},u(J,null)))))),ne=({values:e,isNow:t})=>{const{from:n,to:o,id:i,content:s}=e??{};return"object"==typeof e&&u("div",{class:"tt-tr"},u("div",{class:"tt-th"},t?"Now":"Next",n&&o&&` (${W(n)} - ${W(o)})`,":"),u("div",{class:"tt-td"},"string"==typeof i?u("a",{href:`/course/view.php?id=${i}`,target:"_blank",rel:"noopener noreferrer"},s):s??"Free lesson"))},oe=(()=>{const t=(new Date).getDay();let n=(GM_getValue("days")?.[t-1]??[]).map((e=>({...e,uuid:K()})));const o="BEFORELESSONS",i="AFTERLESSONS",s="DURINGLESSONS";return class extends _{constructor(...o){super(...o),e(this,"state",{curCourse:1,tableRows:[],isHoliday:GM_getValue("isHoliday")??(GM_setValue("isHoliday",!1),!1),isEmpty:!1,type:void 0}),e(this,"timeout",void 0),e(this,"componentDidMount",(()=>{GM_addValueChangeListener("days",(()=>{n=GM_getValue("days")?.[t-1]??[],this.clearTimeout(),this.updateCourse()})),GM_addValueChangeListener("isHoliday",(()=>{this.clearTimeout(),this.setState({isHoliday:GM_getValue("isHoliday")}),GM_getValue("isHoliday")||this.updateCourse()})),this.state.isHoliday||this.updateCourse()})),e(this,"clearTimeout",(()=>{clearTimeout(this.timeout),this.timeout=void 0})),e(this,"setCoursesTimeout",(e=>{this.clearTimeout(),this.timeout=setTimeout(this.updateCourse.bind(this),e,!0)}))}updateCourse(e){if(0===n.length)return void this.setState({isEmpty:!0});const t=new Date,r=60*t.getHours()+t.getMinutes()+t.getSeconds()/60+t.getMilliseconds()/60/1e3,l=n[0].from,a=n[n.length-1].to;if(r<l){this.setState({type:o,tableRows:[void 0,n[0]]});const e=n[0].from,i=e%60,s=Math.floor(e/60),r=new Date;r.setHours(s,i,0,0),this.setCoursesTimeout(r-t)}else if(r>=a)this.setState({type:i});else{let o=0;for(;n[o].to<r;)++o;const i=n[o],l=n[o+1];this.setState({type:s,tableRows:[i,l]}),e&&!this.state.isHoliday&&i&&"content"in i&&GM_notification({text:i.content,title:"Now",image:"https://i.imgur.com/ZtPH8v7.png",timeout:4e3,silent:!0,onclick:()=>{open("id"in i?`/course/view.php?id=${i.id}`:"/")}});const a=n[o].to,d=Math.floor(a/60),c=a%60,u=new Date;u.setHours(d,c,0,0),this.setCoursesTimeout(u-t)}}render(e,{isEmpty:n,isHoliday:r,type:l,tableRows:a}){const d=0===t||6===t;return u("div",null,u("div",{class:"mod-indent-outer"},u("div",{class:"contentwithoutlink"},u("div",{class:"no-overflow"},u("hr",null),u("div",null,u("div",{class:"tt-title"},"Timetable"),u("div",{class:"tt-table"},u("div",{class:"tt-tbody"},!d&&!r&&l===o&&u(ne,{values:{content:"No lesson"},isNow:!0}),!d&&!r&&l===i&&u("div",{class:"tt-title"},"No school anymore"),d&&!r&&u("div",{class:"tt-title"},"Weekend"),r&&u("div",{class:"tt-title"},"Holiday"),!d&&!n&&!r&&(l===o||l===s)&&a?.map(((e,t)=>e&&u(ne,{key:e.uuid,values:e,isNow:0===t}))),n&&!d&&u(f,null,"Today's timetable is empty, you can update it ",u("a",{href:"/timetable/v5",rel:"noopener noreferrer",target:"_blank"},"here"))))),u("hr",null)))))}}})(),ie=(e,t)=>{if(e instanceof Element){const n=new Range,o=getSelection(),i=+(t??+e.textContent.length);e.focus(),n.setStart(e.childNodes[0]??e,i),n.collapse(!0),o.removeAllRanges(),o.addRange(n)}};let se;const re=(()=>{const t=["Monday","Tuesday","Wednesday","Thursday","Friday"],n=()=>{const e=[];for(let n=0,o=t.length;n<o;++n){const t=GM_getValue("days")?.[n];e[n]=t?t.map((({from:e,to:t,content:n,id:o})=>({from:W(e),parsedfrom:e,to:W(t),parsedto:t,id:o,content:n,uuid:K()}))):[{from:"08:00",parsedfrom:480,parsedto:525,to:"08:45"},{from:"08:45",parsedfrom:525,parsedto:570,to:"09:30"},{from:"09:50",parsedfrom:590,parsedto:635,to:"10:35"},{from:"10:40",parsedfrom:640,parsedto:685,to:"11:25"},{from:"11:30",parsedfrom:690,parsedto:735,to:"12:15"},{from:"12:15",parsedfrom:735,parsedto:790,to:"13:10"},{from:"13:10",parsedfrom:790,parsedto:835,to:"13:55"},{from:"13:55",parsedfrom:835,parsedto:880,to:"14:40"},{from:"14:50",parsedfrom:890,parsedto:935,to:"15:35"},{from:"15:35",parsedfrom:935,parsedto:975,to:"16:15"}]}return e};let o=(new Date).getDay()-1;return-1!==o&&5!==o||(o=0),class extends _{constructor(...t){super(...t),e(this,"state",{activeDay:o,tables:n(),focusedElement:{top:void 0,left:void 0,height:void 0,inputText:"",idInput:void 0,contentInput:void 0},courses:[],loggedOut:!1,loggedOutCallback:void 0}),e(this,"inputs",{username:{current:null},password:{current:null}}),e(this,"saveButtonRef",(e=>{this.saveButton=e})),e(this,"handleLoginClick",(()=>{const e=this.inputs.username.current.value.trim(),t=this.inputs.password.current.value;this.state.loggedOutCallback({username:e,password:t})})),e(this,"handleSuggestionsClick",(e=>{const{target:t}=e,n=t.closest(".suggestion");if(n){const{idInput:e,contentInput:t}=this.state.focusedElement,{id:o}=n.dataset,i=e.closest(".table-row"),s=[...i.parentNode.children].indexOf(i);this.setState((e=>{const{activeDay:t,tables:n}=e;return n[t][s].id=o,{}}),(()=>{ie(t)}))}})),e(this,"fetchCourses",(()=>{U(!1,se).then((e=>{const t=Object.entries(e).map((([e,t])=>({id:e,name:t,uuid:K()})));this.setState({courses:t})}))})),e(this,"componentDidMount",(()=>{se=this.setState.bind(this),addEventListener("click",this.handleTableFocus),addEventListener("keydown",(e=>{e.ctrlKey&&"s"===e.key&&(e.preventDefault(),e.stopImmediatePropagation(),this.handleSave())})),this.fetchCourses()})),e(this,"filterCourses",((e,t)=>{const n=[],o=new RegExp(t,"i");for(let i=0,s=e.length;i<s;++i)o.test(e[i].name)&&n.push({...e[i],index:e[i].name.toLowerCase().indexOf(t)});return n.sort((({index:e},{index:t})=>e-t)),n})),e(this,"handleTableFocus",(e=>{const{target:t}=e;let n,o,i,s,r,l="";if("id"===t.dataset.type?(n=t,o=t.parentNode.querySelector('[data-type="content"]')):"content"===t.dataset.type&&(n=t.parentNode.querySelector('[data-type="id"]'),o=t),n){const e=n.getBoundingClientRect(),t=n.ownerDocument.defaultView;i=e.top+t.pageYOffset,s=e.left+t.pageXOffset,r=n.clientHeight,l=o.textContent.trim().toLowerCase()}this.setState({focusedElement:{top:i,left:s,height:r,inputText:l,idInput:n,contentInput:o}})})),e(this,"handleSave",(()=>{let e,t=!1;const n=[];for(let o=0,i=this.state.tables.length;o<i;++o){const i=this.state.tables[o],s=[];n.push(s);for(let n=0,r=i.length;n<r;++n){const r=i[n],{parsedfrom:l,parsedto:a,content:d,id:c}=r;this.testRow(r)||t||(t=!0,e=o);const u={from:l,to:a};c&&(u.id=c),d&&(u.content=d),s.push(u)}}const{saveButton:o}=this;o.classList.remove("save-failed","save-successful"),t?(this.setState({activeDay:e,notificationMsg:"Found an invalid entry"}),o.classList.add("save-failed")):(GM_setValue("days",{...n}),o.classList.add("save-successful"))})),e(this,"testRow",(({from:e,to:t})=>{const n=ee(e),o=ee(t);return n&&o})),e(this,"handleTableClick",(e=>{const{target:t}=e;if(t.closest(".remove-row")){const e=t.closest(".table-row"),n=[...t.closest(".table").children].indexOf(e);this.setState((e=>{const{activeDay:t,tables:o}=e;return o[t].splice(n,1),{tables:o}}))}})),e(this,"handleCaretClick",(e=>{const t=e.target.closest("div");if(!t)return;const{classList:n}=t;if(n.contains("caret-input")){const e=n.contains("caret-forward")?1:-1;this.setState((t=>{let n=t.activeDay+e;return n<0?n=4:n>4&&(n=0),{activeDay:n}}))}})),e(this,"createRow",(async()=>{await new Promise((e=>{this.setState((e=>{const{tables:t}=e;return t[e.activeDay]?.push({uuid:K()}),{tables:t}}),e)}))})),e(this,"validateTimeOrder",(e=>{for(let t=0,n=e.length;t<n;++t){const o=e[t].parsedfrom,i=e[t].parsedto;let s=!0;if(Number.isInteger(o)&&Number.isInteger(i)&&(o>i?(e[t].fromvalid=!1,e[t].tovalid=!1,s=!1):(delete e[t].fromvalid,delete e[t].tovalid)),0!==t){const n=e[t-1].parsedto;Number.isInteger(n)&&Number.isInteger(o)&&(o<n?(e[t].fromvalid=!1,e[t-1].tovalid=!1):(s&&delete e[t].fromvalid,delete e[t-1].tovalid))}if(t<n-1){const n=e[t+1].parsedfrom;Number.isInteger(i)&&Number.isInteger(n)&&(n<i?(e[t].tovalid=!1,e[t+1].fromvalid=!1):(s&&delete e[t].tovalid,delete e[t+1].fromvalid))}}})),e(this,"handleTableInput",(e=>{const{target:t,parentNode:n}=e,{classList:o,textContent:i,dataset:s}=t,r=t.closest(".table-row");if(!r)return;const l=[...r.parentNode.children].indexOf(r),{anchorOffset:a}=getSelection();if(o.contains("time-input")){const e=i.trim();this.setState((t=>{const{activeDay:n,tables:i}=t,s=i[n][l];return s[o.contains("time-from")?"from":"to"]=e,s["parsed"+(o.contains("time-from")?"from":"to")]=this.parseStringToTime(e),this.validateTimeOrder(i[n]),{tables:i}}),(()=>{ie(t,a)}))}else n.classList.contains("entry")&&(this.handleTableFocus(e),this.setState((e=>{const{activeDay:n,tables:o}=e,r=o[n][l];return"id"===s.type?r.id=i:"content"===s.type&&(r.content=i,t.textContent=""),{tables:o}}),(()=>{ie(t,a)})))})),e(this,"parseStringToTime",(()=>{const e=document.createElement("input");return e.type="time",t=>{const n=t.trim();if(!/^\d{2}:\d{2}$/.test(n))return!1;if(e.value=n,e.value!==n)return!1;const[o,i]=n.split(":");return 60*+o+ +i}})()),e(this,"handleTableKeyDown",(async e=>{const{target:t,keyCode:n,shiftKey:o}=e;if(13===n){if(e.preventDefault(),t.closest(".entry")){const e=t.closest(".table-row");if(o)"content"===t.dataset.type?ie(e.previousElementSibling?.querySelector('div.table-cell.entry > [data-type="id"]')):ie(t.parentNode.querySelector('[data-type="content"]'));else if("content"===t.dataset.type)ie(t.parentNode.querySelector('[data-type="id"]'));else{let t=e.nextElementSibling;t||(await this.createRow(),t=e.nextElementSibling),ie(t?.querySelector('div.table-cell.entry > [data-type="content"]'))}}else if(t.closest(".time")){const e=t.closest(".table-row");if(o)t.classList.contains("time-from")?ie(e.previousElementSibling?.querySelector("div.table-cell.time > .time-to")):ie(t.parentNode.querySelector(".time-from"));else if(t.classList.contains("time-from"))ie(t.parentNode.querySelector(".time-to"));else{let t=e.nextElementSibling;t||(await this.createRow(),t=e.nextElementSibling),ie(t?.querySelector("div.table-cell.time > .time-from"))}}}else if(9===n&&t.classList.contains("entry")){const n=t.closest(".table-row");n.nextElementSibling||(e.preventDefault(),n.parentNode.children[0].querySelector(".time-from")?.focus())}}))}render(e,{activeDay:n,tables:o,courses:i,focusedElement:{top:s,left:r,height:l,inputText:a}={}}){return u(f,null,this.state.loggedOut&&u("div",{class:"login-popup"},u("div",{class:"vertical-horizontal-center"},u("div",{class:"card"},u("div",{class:"card-body"},u("h5",{class:"card-title"},"Login"),u("input",{placeholder:"Username",required:!0,class:"input-group-text",ref:this.inputs.username}),u("input",{placeholder:"Password",required:!0,class:"input-group-text",ref:this.inputs.password,type:"password"})),u("button",{type:"button",class:"btn btn-primary",onClick:this.handleLoginClick},"Login")))),u("div",{class:"container"},u("div",{class:"table-center"},u("div",{class:"grid-buttons"},u(Q,{day:t[n],handleSave:this.handleSave,saveButtonRef:this.saveButtonRef,handleClick:this.handleCaretClick})),u("div",{class:"main-table",onKeyDown:this.handleTableKeyDown,onInput:this.handleTableInput,onClick:this.handleTableClick},u(te,{content:o[n],handleFocus:this.handleTableFocus}),u("div",{class:"row-icon-add-row"},u("div",{class:"icon-add-row",onClick:this.createRow},u(Z,null)))))),"number"==typeof s&&u("div",{class:"suggestions",style:{transform:`translate(${r}px, ${s+l}px)`},onClick:this.handleSuggestionsClick},this.filterCourses(i,a).map((({id:e,name:t})=>{const n=t.toLowerCase().indexOf(a),o=t.slice(0,n),i=t.slice(n+a.length);return u("div",{key:e,class:"suggestion","data-id":e},u("div",{class:"suggestion-name"},o,u("span",{class:"emphasised"},t.slice(n,n+a.length)),i),u("div",{class:"suggestion-id"},e))}))))}}})(),le=/^\/timetable\/v5/iu.test(location.pathname)?()=>{history.replaceState({},"","/timetable/v5");const{body:e,head:t}=document;for(;t.lastChild;)t.lastChild.remove();for(;e.lastChild;)e.lastChild.remove();document.title="Moodle timetable v5";const n=document.createElement("link");n.rel="shortcut icon",n.href="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2074%2051%22%3E%3Cpath%20fill%3D%22%23f98012%22%20d%3D%22M61.9%2050.3V27.4c0-4.8-2-7.2-5.9-7.2-4%200-5.9%202.4-5.9%207.2v22.9H38.4V27.4c0-4.8-1.9-7.2-5.8-7.2-4%200-5.9%202.4-5.9%207.2v22.9H15V26.1c0-5%201.7-8.8%205.2-11.3%203-2.3%207.2-3.4%2012.4-3.4%205.3%200%209.2%201.4%2011.6%204.1%202.2-2.7%206.1-4.1%2011.8-4.1%205.2%200%209.3%201.1%2012.4%203.4%203.5%202.6%205.2%206.3%205.2%2011.3v24.3H61.9z%22%2F%3E%3Cpath%20fill%3D%22%23333%22%20d%3D%22M37.6%209.5L49.2%201%2049%20.6C28.1%203.1%2018.6%204.9.7%2015.4l.2.5h1.4c-.1%201.4-.4%205-.1%2010.4-2%205.8%200%209.7%201.8%2014%20.3-4.4.3-9.3-1.1-14.1-.3-5.3%200-8.8.1-10.2h11.9s-.1%203.6.4%207c10.7%203.7%2021.4%200%2027.1-9.2-1.7-1.9-4.8-4.3-4.8-4.3z%22%2F%3E%3C%2Fsvg%3E",GM_addStyle($),t.append(n);const o=document.createElement("div");o.id="root",e.append(o),O(u(re,null),o)}:()=>{GM_registerMenuCommand("Open settings",(()=>{open("/timetable/v5","_blank")})),GM_registerMenuCommand("Toggle holiday",(()=>{GM_setValue("isHoliday",!GM_getValue("isHoliday"))})),GM_addStyle(A);const e=document.querySelector("#region-main-box ul.section"),t=document.createElement("li");t.id="module-timetable-v5",t.className="activity label modtype_label",e.prepend(t),O(u(oe,null),t)};"complete"===document.readyState?le():addEventListener("DOMContentLoaded",le,{once:!0})})()})();