var xe=Object.defineProperty;var Y=Object.getOwnPropertySymbols;var Ae=Object.prototype.hasOwnProperty,Pe=Object.prototype.propertyIsEnumerable;var Q=(r,e,t)=>e in r?xe(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,A=(r,e)=>{for(var t in e||(e={}))Ae.call(e,t)&&Q(r,t,e[t]);if(Y)for(var t of Y(e))Pe.call(e,t)&&Q(r,t,e[t]);return r};import{v as Z}from"./vendor.e934ad94.js";var _={exports:{}},ee=function(e,t){return function(){for(var n=new Array(arguments.length),i=0;i<n.length;i++)n[i]=arguments[i];return e.apply(t,n)}},Te=ee,w=Object.prototype.toString;function k(r){return Array.isArray(r)}function F(r){return typeof r=="undefined"}function Ne(r){return r!==null&&!F(r)&&r.constructor!==null&&!F(r.constructor)&&typeof r.constructor.isBuffer=="function"&&r.constructor.isBuffer(r)}function re(r){return w.call(r)==="[object ArrayBuffer]"}function $e(r){return w.call(r)==="[object FormData]"}function ge(r){var e;return typeof ArrayBuffer!="undefined"&&ArrayBuffer.isView?e=ArrayBuffer.isView(r):e=r&&r.buffer&&re(r.buffer),e}function Ue(r){return typeof r=="string"}function je(r){return typeof r=="number"}function te(r){return r!==null&&typeof r=="object"}function T(r){if(w.call(r)!=="[object Object]")return!1;var e=Object.getPrototypeOf(r);return e===null||e===Object.prototype}function Le(r){return w.call(r)==="[object Date]"}function Be(r){return w.call(r)==="[object File]"}function qe(r){return w.call(r)==="[object Blob]"}function ne(r){return w.call(r)==="[object Function]"}function De(r){return te(r)&&ne(r.pipe)}function _e(r){return w.call(r)==="[object URLSearchParams]"}function ke(r){return r.trim?r.trim():r.replace(/^\s+|\s+$/g,"")}function Fe(){return typeof navigator!="undefined"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window!="undefined"&&typeof document!="undefined"}function I(r,e){if(!(r===null||typeof r=="undefined"))if(typeof r!="object"&&(r=[r]),k(r))for(var t=0,a=r.length;t<a;t++)e.call(null,r[t],t,r);else for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&e.call(null,r[n],n,r)}function H(){var r={};function e(n,i){T(r[i])&&T(n)?r[i]=H(r[i],n):T(n)?r[i]=H({},n):k(n)?r[i]=n.slice():r[i]=n}for(var t=0,a=arguments.length;t<a;t++)I(arguments[t],e);return r}function Ie(r,e,t){return I(e,function(n,i){t&&typeof n=="function"?r[i]=Te(n,t):r[i]=n}),r}function He(r){return r.charCodeAt(0)===65279&&(r=r.slice(1)),r}var h={isArray:k,isArrayBuffer:re,isBuffer:Ne,isFormData:$e,isArrayBufferView:ge,isString:Ue,isNumber:je,isObject:te,isPlainObject:T,isUndefined:F,isDate:Le,isFile:Be,isBlob:qe,isFunction:ne,isStream:De,isURLSearchParams:_e,isStandardBrowserEnv:Fe,forEach:I,merge:H,extend:Ie,trim:ke,stripBOM:He},C=h;function ae(r){return encodeURIComponent(r).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var se=function(e,t,a){if(!t)return e;var n;if(a)n=a(t);else if(C.isURLSearchParams(t))n=t.toString();else{var i=[];C.forEach(t,function(l,m){l===null||typeof l=="undefined"||(C.isArray(l)?m=m+"[]":l=[l],C.forEach(l,function(f){C.isDate(f)?f=f.toISOString():C.isObject(f)&&(f=JSON.stringify(f)),i.push(ae(m)+"="+ae(f))}))}),n=i.join("&")}if(n){var o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+n}return e},Me=h;function N(){this.handlers=[]}N.prototype.use=function(e,t,a){return this.handlers.push({fulfilled:e,rejected:t,synchronous:a?a.synchronous:!1,runWhen:a?a.runWhen:null}),this.handlers.length-1};N.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)};N.prototype.forEach=function(e){Me.forEach(this.handlers,function(a){a!==null&&e(a)})};var Je=N,ze=h,Ve=function(e,t){ze.forEach(e,function(n,i){i!==t&&i.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[i])})},ie=function(e,t,a,n,i){return e.config=t,a&&(e.code=a),e.request=n,e.response=i,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}},e},We=ie,oe=function(e,t,a,n,i){var o=new Error(e);return We(o,t,a,n,i)},Xe=oe,Ke=function(e,t,a){var n=a.config.validateStatus;!a.status||!n||n(a.status)?e(a):t(Xe("Request failed with status code "+a.status,a.config,null,a.request,a))},$=h,Ge=$.isStandardBrowserEnv()?function(){return{write:function(t,a,n,i,o,u){var l=[];l.push(t+"="+encodeURIComponent(a)),$.isNumber(n)&&l.push("expires="+new Date(n).toGMTString()),$.isString(i)&&l.push("path="+i),$.isString(o)&&l.push("domain="+o),u===!0&&l.push("secure"),document.cookie=l.join("; ")},read:function(t){var a=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return a?decodeURIComponent(a[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),Ye=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)},Qe=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e},Ze=Ye,er=Qe,rr=function(e,t){return e&&!Ze(t)?er(e,t):t},M=h,tr=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],nr=function(e){var t={},a,n,i;return e&&M.forEach(e.split(`
`),function(u){if(i=u.indexOf(":"),a=M.trim(u.substr(0,i)).toLowerCase(),n=M.trim(u.substr(i+1)),a){if(t[a]&&tr.indexOf(a)>=0)return;a==="set-cookie"?t[a]=(t[a]?t[a]:[]).concat([n]):t[a]=t[a]?t[a]+", "+n:n}}),t},ue=h,ar=ue.isStandardBrowserEnv()?function(){var e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a"),a;function n(i){var o=i;return e&&(t.setAttribute("href",o),o=t.href),t.setAttribute("href",o),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:t.pathname.charAt(0)==="/"?t.pathname:"/"+t.pathname}}return a=n(window.location.href),function(o){var u=ue.isString(o)?n(o):o;return u.protocol===a.protocol&&u.host===a.host}}():function(){return function(){return!0}}();function J(r){this.message=r}J.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")};J.prototype.__CANCEL__=!0;var g=J,U=h,sr=Ke,ir=Ge,or=se,ur=rr,lr=nr,fr=ar,z=oe,cr=L,dr=g,le=function(e){return new Promise(function(a,n){var i=e.data,o=e.headers,u=e.responseType,l;function m(){e.cancelToken&&e.cancelToken.unsubscribe(l),e.signal&&e.signal.removeEventListener("abort",l)}U.isFormData(i)&&delete o["Content-Type"];var s=new XMLHttpRequest;if(e.auth){var f=e.auth.username||"",y=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.Authorization="Basic "+btoa(f+":"+y)}var d=ur(e.baseURL,e.url);s.open(e.method.toUpperCase(),or(d,e.params,e.paramsSerializer),!0),s.timeout=e.timeout;function K(){if(!!s){var v="getAllResponseHeaders"in s?lr(s.getAllResponseHeaders()):null,S=!u||u==="text"||u==="json"?s.responseText:s.response,E={data:S,status:s.status,statusText:s.statusText,headers:v,config:e,request:s};sr(function(D){a(D),m()},function(D){n(D),m()},E),s=null}}if("onloadend"in s?s.onloadend=K:s.onreadystatechange=function(){!s||s.readyState!==4||s.status===0&&!(s.responseURL&&s.responseURL.indexOf("file:")===0)||setTimeout(K)},s.onabort=function(){!s||(n(z("Request aborted",e,"ECONNABORTED",s)),s=null)},s.onerror=function(){n(z("Network Error",e,null,s)),s=null},s.ontimeout=function(){var S=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",E=e.transitional||cr.transitional;e.timeoutErrorMessage&&(S=e.timeoutErrorMessage),n(z(S,e,E.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",s)),s=null},U.isStandardBrowserEnv()){var G=(e.withCredentials||fr(d))&&e.xsrfCookieName?ir.read(e.xsrfCookieName):void 0;G&&(o[e.xsrfHeaderName]=G)}"setRequestHeader"in s&&U.forEach(o,function(S,E){typeof i=="undefined"&&E.toLowerCase()==="content-type"?delete o[E]:s.setRequestHeader(E,S)}),U.isUndefined(e.withCredentials)||(s.withCredentials=!!e.withCredentials),u&&u!=="json"&&(s.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&s.addEventListener("progress",e.onDownloadProgress),typeof e.onUploadProgress=="function"&&s.upload&&s.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(l=function(v){!s||(n(!v||v&&v.type?new dr("canceled"):v),s.abort(),s=null)},e.cancelToken&&e.cancelToken.subscribe(l),e.signal&&(e.signal.aborted?l():e.signal.addEventListener("abort",l))),i||(i=null),s.send(i)})},c=h,fe=Ve,hr=ie,pr={"Content-Type":"application/x-www-form-urlencoded"};function ce(r,e){!c.isUndefined(r)&&c.isUndefined(r["Content-Type"])&&(r["Content-Type"]=e)}function mr(){var r;return(typeof XMLHttpRequest!="undefined"||typeof process!="undefined"&&Object.prototype.toString.call(process)==="[object process]")&&(r=le),r}function vr(r,e,t){if(c.isString(r))try{return(e||JSON.parse)(r),c.trim(r)}catch(a){if(a.name!=="SyntaxError")throw a}return(t||JSON.stringify)(r)}var j={transitional:{silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},adapter:mr(),transformRequest:[function(e,t){return fe(t,"Accept"),fe(t,"Content-Type"),c.isFormData(e)||c.isArrayBuffer(e)||c.isBuffer(e)||c.isStream(e)||c.isFile(e)||c.isBlob(e)?e:c.isArrayBufferView(e)?e.buffer:c.isURLSearchParams(e)?(ce(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):c.isObject(e)||t&&t["Content-Type"]==="application/json"?(ce(t,"application/json"),vr(e)):e}],transformResponse:[function(e){var t=this.transitional||j.transitional,a=t&&t.silentJSONParsing,n=t&&t.forcedJSONParsing,i=!a&&this.responseType==="json";if(i||n&&c.isString(e)&&e.length)try{return JSON.parse(e)}catch(o){if(i)throw o.name==="SyntaxError"?hr(o,this,"E_JSON_PARSE"):o}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};c.forEach(["delete","get","head"],function(e){j.headers[e]={}});c.forEach(["post","put","patch"],function(e){j.headers[e]=c.merge(pr)});var L=j,yr=h,br=L,wr=function(e,t,a){var n=this||br;return yr.forEach(a,function(o){e=o.call(n,e,t)}),e},de=function(e){return!!(e&&e.__CANCEL__)},he=h,V=wr,Er=de,Sr=L,Cr=g;function W(r){if(r.cancelToken&&r.cancelToken.throwIfRequested(),r.signal&&r.signal.aborted)throw new Cr("canceled")}var Rr=function(e){W(e),e.headers=e.headers||{},e.data=V.call(e,e.data,e.headers,e.transformRequest),e.headers=he.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),he.forEach(["delete","get","head","post","put","patch","common"],function(n){delete e.headers[n]});var t=e.adapter||Sr.adapter;return t(e).then(function(n){return W(e),n.data=V.call(e,n.data,n.headers,e.transformResponse),n},function(n){return Er(n)||(W(e),n&&n.response&&(n.response.data=V.call(e,n.response.data,n.response.headers,e.transformResponse))),Promise.reject(n)})},p=h,pe=function(e,t){t=t||{};var a={};function n(s,f){return p.isPlainObject(s)&&p.isPlainObject(f)?p.merge(s,f):p.isPlainObject(f)?p.merge({},f):p.isArray(f)?f.slice():f}function i(s){if(p.isUndefined(t[s])){if(!p.isUndefined(e[s]))return n(void 0,e[s])}else return n(e[s],t[s])}function o(s){if(!p.isUndefined(t[s]))return n(void 0,t[s])}function u(s){if(p.isUndefined(t[s])){if(!p.isUndefined(e[s]))return n(void 0,e[s])}else return n(void 0,t[s])}function l(s){if(s in t)return n(e[s],t[s]);if(s in e)return n(void 0,e[s])}var m={url:o,method:o,data:o,baseURL:u,transformRequest:u,transformResponse:u,paramsSerializer:u,timeout:u,timeoutMessage:u,withCredentials:u,adapter:u,responseType:u,xsrfCookieName:u,xsrfHeaderName:u,onUploadProgress:u,onDownloadProgress:u,decompress:u,maxContentLength:u,maxBodyLength:u,transport:u,httpAgent:u,httpsAgent:u,cancelToken:u,socketPath:u,responseEncoding:u,validateStatus:l};return p.forEach(Object.keys(e).concat(Object.keys(t)),function(f){var y=m[f]||i,d=y(f);p.isUndefined(d)&&y!==l||(a[f]=d)}),a},me={version:"0.25.0"},Or=me.version,X={};["object","boolean","number","function","string","symbol"].forEach(function(r,e){X[r]=function(a){return typeof a===r||"a"+(e<1?"n ":" ")+r}});var ve={};X.transitional=function(e,t,a){function n(i,o){return"[Axios v"+Or+"] Transitional option '"+i+"'"+o+(a?". "+a:"")}return function(i,o,u){if(e===!1)throw new Error(n(o," has been removed"+(t?" in "+t:"")));return t&&!ve[o]&&(ve[o]=!0,console.warn(n(o," has been deprecated since v"+t+" and will be removed in the near future"))),e?e(i,o,u):!0}};function xr(r,e,t){if(typeof r!="object")throw new TypeError("options must be an object");for(var a=Object.keys(r),n=a.length;n-- >0;){var i=a[n],o=e[i];if(o){var u=r[i],l=u===void 0||o(u,i,r);if(l!==!0)throw new TypeError("option "+i+" must be "+l);continue}if(t!==!0)throw Error("Unknown option "+i)}}var Ar={assertOptions:xr,validators:X},ye=h,Pr=se,be=Je,we=Rr,B=pe,Ee=Ar,R=Ee.validators;function P(r){this.defaults=r,this.interceptors={request:new be,response:new be}}P.prototype.request=function(e,t){if(typeof e=="string"?(t=t||{},t.url=e):t=e||{},!t.url)throw new Error("Provided config url is not valid");t=B(this.defaults,t),t.method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var a=t.transitional;a!==void 0&&Ee.assertOptions(a,{silentJSONParsing:R.transitional(R.boolean),forcedJSONParsing:R.transitional(R.boolean),clarifyTimeoutError:R.transitional(R.boolean)},!1);var n=[],i=!0;this.interceptors.request.forEach(function(d){typeof d.runWhen=="function"&&d.runWhen(t)===!1||(i=i&&d.synchronous,n.unshift(d.fulfilled,d.rejected))});var o=[];this.interceptors.response.forEach(function(d){o.push(d.fulfilled,d.rejected)});var u;if(!i){var l=[we,void 0];for(Array.prototype.unshift.apply(l,n),l=l.concat(o),u=Promise.resolve(t);l.length;)u=u.then(l.shift(),l.shift());return u}for(var m=t;n.length;){var s=n.shift(),f=n.shift();try{m=s(m)}catch(y){f(y);break}}try{u=we(m)}catch(y){return Promise.reject(y)}for(;o.length;)u=u.then(o.shift(),o.shift());return u};P.prototype.getUri=function(e){if(!e.url)throw new Error("Provided config url is not valid");return e=B(this.defaults,e),Pr(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")};ye.forEach(["delete","get","head","options"],function(e){P.prototype[e]=function(t,a){return this.request(B(a||{},{method:e,url:t,data:(a||{}).data}))}});ye.forEach(["post","put","patch"],function(e){P.prototype[e]=function(t,a,n){return this.request(B(n||{},{method:e,url:t,data:a}))}});var Tr=P,Nr=g;function O(r){if(typeof r!="function")throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(n){e=n});var t=this;this.promise.then(function(a){if(!!t._listeners){var n,i=t._listeners.length;for(n=0;n<i;n++)t._listeners[n](a);t._listeners=null}}),this.promise.then=function(a){var n,i=new Promise(function(o){t.subscribe(o),n=o}).then(a);return i.cancel=function(){t.unsubscribe(n)},i},r(function(n){t.reason||(t.reason=new Nr(n),e(t.reason))})}O.prototype.throwIfRequested=function(){if(this.reason)throw this.reason};O.prototype.subscribe=function(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]};O.prototype.unsubscribe=function(e){if(!!this._listeners){var t=this._listeners.indexOf(e);t!==-1&&this._listeners.splice(t,1)}};O.source=function(){var e,t=new O(function(n){e=n});return{token:t,cancel:e}};var $r=O,gr=function(e){return function(a){return e.apply(null,a)}},Ur=h,jr=function(e){return Ur.isObject(e)&&e.isAxiosError===!0},Se=h,Lr=ee,q=Tr,Br=pe,qr=L;function Ce(r){var e=new q(r),t=Lr(q.prototype.request,e);return Se.extend(t,q.prototype,e),Se.extend(t,e),t.create=function(n){return Ce(Br(r,n))},t}var b=Ce(qr);b.Axios=q;b.Cancel=g;b.CancelToken=$r;b.isCancel=de;b.VERSION=me.version;b.all=function(e){return Promise.all(e)};b.spread=gr;b.isAxiosError=jr;_.exports=b;_.exports.default=b;var Dr=_.exports,x=Dr.create({baseURL:{}.VITE_APP_URL,timeout:6e3,headers:{"Content-Type":"application/json;charset=UTF-8;"}});x.interceptors.request.use(r=>{const e=window.localStorage.getItem("token")||"";return r.headers.Authorization=e,r.method==="POST"&&(r.data=JSON.stringify(r.data)),r},r=>Promise.reject(r));x.interceptors.response.use(r=>r.data.state===200?r.data.data:(r.data.state===204?Z.error(r.data.msg):r.data.state===421&&Z.error("\u767B\u5F55\u5DF2\u8FC7\u671F\uFF0C\u8BF7\u91CD\u65B0\u767B\u5F55"),Promise.reject()),r=>(console.log(r),Promise.reject(r)));const Re=({method:r,url:e,data:t,config:a})=>(r=r.toLowerCase(),r=="post"?x.post(e,t,A({},a)):r=="get"?x.get(e,A({params:t},a)):r=="delete"?x.delete(e,A({params:t},a)):r=="put"?x.put(e,t,A({},a)):(console.error("\u672A\u77E5\u7684method"+r),!1)),Fr=r=>Re({url:"/api/login",method:"post",data:r}),Ir=r=>Re({url:"/api/tool/readProject",method:"post",data:r,config:{headers:{"Request-Type":"wechat"},timeout:1e4}});export{Ir as g,Fr as u};
