const t=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g"),n=t=>t.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),e=t=>t.replace(/([=!:$/()])/g,"\\$1"),r=t=>t&&t.sensitive?"":"i",i=(t,e,i)=>{for(var o=(i=i||{}).strict,s=!1!==i.end,u=n(i.delimiter||"/"),a=i.delimiters||"./",c=[].concat(i.endsWith||[]).map(n).concat("$").join("|"),f="",h=!1,l=0;l<t.length;l++){var v=t[l];if("string"==typeof v)f+=n(v),h=l===t.length-1&&a.indexOf(v[v.length-1])>-1;else{var d=n(v.prefix||""),w=v.repeat?"(?:"+v.pattern+")(?:"+d+"(?:"+v.pattern+"))*":v.pattern;e&&e.push(v),f+=v.optional?v.partial?d+"("+w+")?":"(?:"+d+"("+w+"))?":d+"("+w+")"}}return s?(o||(f+="(?:"+u+")?"),f+="$"===c?"$":"(?="+c+")"):(o||(f+="(?:"+u+"(?="+c+"))?"),h||(f+="(?="+u+"|"+c+")")),new RegExp("^"+f,r(i))},o=(s,u,a)=>s instanceof RegExp?((t,n)=>{if(!n)return t;var e=t.source.match(/\((?!\?)/g);if(e)for(var r=0;r<e.length;r++)n.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return t})(s,u):Array.isArray(s)?((t,n,e)=>{for(var i=[],s=0;s<t.length;s++)i.push(o(t[s],n,e).source);return new RegExp("(?:"+i.join("|")+")",r(e))})(s,u,a):((r,o,s)=>i(((r,i)=>{for(var o,s=[],u=0,a=0,c="",f=i&&i.delimiter||"/",h=i&&i.delimiters||"./",l=!1;null!==(o=t.exec(r));){var v=o[0],d=o[1],w=o.index;if(c+=r.slice(a,w),a=w+v.length,d)c+=d[1],l=!0;else{var y="",p=r[a],b=o[2],m=o[3],g=o[4],O=o[5];if(!l&&c.length){var E=c.length-1;h.indexOf(c[E])>-1&&(y=c[E],c=c.slice(0,E))}c&&(s.push(c),c="",l=!1);var _=y||f,j=m||g;s.push({name:b||u++,prefix:y,delimiter:_,optional:"?"===O||"*"===O,repeat:"+"===O||"*"===O,partial:""!==y&&void 0!==p&&p!==y,pattern:j?e(j):"[^"+n(_)+"]+?"})}}return(c||a<r.length)&&s.push(c+r.substr(a)),s})(r,s),o,s))(s,u,a),s=(t,n)=>new RegExp("^"+n+"(\\/|\\?|#|$)","i").test(t),u=(t,n)=>s(t,n)?t.substr(n.length):t,a=t=>"/"===t.charAt(t.length-1)?t.slice(0,-1):t,c=t=>"/"===t.charAt(0)?t:"/"+t,f=t=>"/"===t.charAt(0)?t.substr(1):t,h=t=>{const{pathname:n,search:e,hash:r}=t;let i=n||"/";return e&&"?"!==e&&(i+="?"===e.charAt(0)?e:`?${e}`),r&&"#"!==r&&(i+="#"===r.charAt(0)?r:`#${r}`),i},l=t=>"/"===t.charAt(0),v=t=>Math.random().toString(36).substr(2,t),d=(t,n)=>{for(let e=n,r=e+1,i=t.length;r<i;e+=1,r+=1)t[e]=t[r];t.pop()},w=(t,n)=>{if(t===n)return!0;if(null==t||null==n)return!1;if(Array.isArray(t))return Array.isArray(n)&&t.length===n.length&&t.every(((t,e)=>w(t,n[e])));const e=typeof t;if(e!==typeof n)return!1;if("object"===e){const e=t.valueOf(),r=n.valueOf();if(e!==t||r!==n)return w(e,r);const i=Object.keys(t),o=Object.keys(n);return i.length===o.length&&i.every((e=>w(t[e],n[e])))}return!1},y=(t,n)=>t.pathname===n.pathname&&t.search===n.search&&t.hash===n.hash&&t.key===n.key&&w(t.state,n.state),p=(t,n,e,r)=>{let i;"string"==typeof t?(i=(t=>{let n=t||"/",e="",r="";const i=n.indexOf("#");-1!==i&&(r=n.substr(i),n=n.substr(0,i));const o=n.indexOf("?");return-1!==o&&(e=n.substr(o),n=n.substr(0,o)),{pathname:n,search:"?"===e?"":e,hash:"#"===r?"":r,query:{},key:""}})(t),void 0!==n&&(i.state=n)):(i=Object.assign({pathname:""},t),i.search&&"?"!==i.search.charAt(0)&&(i.search="?"+i.search),i.hash&&"#"!==i.hash.charAt(0)&&(i.hash="#"+i.hash),void 0!==n&&void 0===i.state&&(i.state=n));try{i.pathname=decodeURI(i.pathname)}catch(t){throw t instanceof URIError?new URIError('Pathname "'+i.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):t}var o;return i.key=e,r?i.pathname?"/"!==i.pathname.charAt(0)&&(i.pathname=((t,n="")=>{let e,r=n&&n.split("/")||[],i=0;const o=t&&t.split("/")||[],s=t&&l(t),u=n&&l(n),a=s||u;if(t&&l(t)?r=o:o.length&&(r.pop(),r=r.concat(o)),!r.length)return"/";if(r.length){const t=r[r.length-1];e="."===t||".."===t||""===t}else e=!1;for(let t=r.length;t>=0;t--){const n=r[t];"."===n?d(r,t):".."===n?(d(r,t),i++):i&&(d(r,t),i--)}if(!a)for(;i--;i)r.unshift("..");!a||""===r[0]||r[0]&&l(r[0])||r.unshift("");let c=r.join("/");return e&&"/"!==c.substr(-1)&&(c+="/"),c})(i.pathname,r.pathname)):i.pathname=r.pathname:i.pathname||(i.pathname="/"),i.query=(o=i.search||"")?(/^[?#]/.test(o)?o.slice(1):o).split("&").reduce(((t,n)=>{let[e,r]=n.split("=");return t[e]=r?decodeURIComponent(r.replace(/\+/g," ")):"",t}),{}):{},i};let b=0;const m={},g=(t,n={})=>{"string"==typeof n&&(n={path:n});const{path:e="/",exact:r=!1,strict:i=!1}=n,{re:s,keys:u}=((t,n)=>{const e=`${n.end}${n.strict}`,r=m[e]||(m[e]={}),i=JSON.stringify(t);if(r[i])return r[i];const s=[],u={re:o(t,s,n),keys:s};return b<1e4&&(r[i]=u,b+=1),u})(e,{end:r,strict:i}),a=s.exec(t);if(!a)return null;const[c,...f]=a,h=t===c;return r&&!h?null:{path:e,url:"/"===e&&""===c?"/":c,isExact:h,params:u.reduce(((t,n,e)=>(t[n.name]=f[e],t)),{})}},O=(t,n)=>null==t&&null==n||null!=n&&t&&n&&t.path===n.path&&t.url===n.url&&w(t.params,n.params),E=(()=>{let t;return{getStore:()=>t,setStore:n=>{t=n},getState:()=>t&&t.getState(),mapDispatchToProps:(n,e)=>{Object.keys(e).forEach((r=>{const i=e[r];Object.defineProperty(n,r,{get:()=>(...n)=>t.dispatch(i(...n)),configurable:!0,enumerable:!0})}))},mapStateToProps:(n,e)=>{const r=()=>{const r=e(t.getState());Object.keys(r).forEach((t=>{n[t]=r[t]}))},i=t.subscribe((()=>r()));return r(),i}}})();var _="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function j(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function k(t,n,e){return t(e={path:n,exports:{},require:function(){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},e.exports),e.exports}function A(t){if(t.__esModule)return t;var n=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(t).forEach((function(e){var r=Object.getOwnPropertyDescriptor(t,e);Object.defineProperty(n,e,r.get?r:{enumerable:!0,get:function(){return t[e]}})})),n}var S=k((function(t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.Collection=void 0;class e extends Map{constructor(t){super(t),Object.defineProperty(this,"_array",{value:null,writable:!0,configurable:!0}),Object.defineProperty(this,"_keyArray",{value:null,writable:!0,configurable:!0})}get(t){return super.get(t)}set(t,n){return this._array=null,this._keyArray=null,super.set(t,n)}has(t){return super.has(t)}delete(t){return this._array=null,this._keyArray=null,super.delete(t)}clear(){return super.clear()}array(){return this._array&&this._array.length===this.size||(this._array=[...this.values()]),this._array}keyArray(){return this._keyArray&&this._keyArray.length===this.size||(this._keyArray=[...this.keys()]),this._keyArray}first(t){if(void 0===t)return this.values().next().value;if(t<0)return this.last(-1*t);t=Math.min(this.size,t);const n=this.values();return Array.from({length:t},(()=>n.next().value))}firstKey(t){if(void 0===t)return this.keys().next().value;if(t<0)return this.lastKey(-1*t);t=Math.min(this.size,t);const n=this.keys();return Array.from({length:t},(()=>n.next().value))}last(t){const n=this.array();return void 0===t?n[n.length-1]:t<0?this.first(-1*t):t?n.slice(-t):[]}lastKey(t){const n=this.keyArray();return void 0===t?n[n.length-1]:t<0?this.firstKey(-1*t):t?n.slice(-t):[]}random(t){let n=this.array();return void 0===t?n[Math.floor(Math.random()*n.length)]:0!==n.length&&t?(n=n.slice(),Array.from({length:t},(()=>n.splice(Math.floor(Math.random()*n.length),1)[0]))):[]}randomKey(t){let n=this.keyArray();return void 0===t?n[Math.floor(Math.random()*n.length)]:0!==n.length&&t?(n=n.slice(),Array.from({length:t},(()=>n.splice(Math.floor(Math.random()*n.length),1)[0]))):[]}find(t,n){void 0!==n&&(t=t.bind(n));for(const[n,e]of this)if(t(e,n,this))return e}findKey(t,n){void 0!==n&&(t=t.bind(n));for(const[n,e]of this)if(t(e,n,this))return n}sweep(t,n){void 0!==n&&(t=t.bind(n));const e=this.size;for(const[n,e]of this)t(e,n,this)&&this.delete(n);return e-this.size}filter(t,n){void 0!==n&&(t=t.bind(n));const e=new this.constructor[Symbol.species];for(const[n,r]of this)t(r,n,this)&&e.set(n,r);return e}partition(t,n){void 0!==n&&(t=t.bind(n));const e=[new this.constructor[Symbol.species],new this.constructor[Symbol.species]];for(const[n,r]of this)t(r,n,this)?e[0].set(n,r):e[1].set(n,r);return e}flatMap(t,n){const e=this.map(t,n);return(new this.constructor[Symbol.species]).concat(...e)}map(t,n){void 0!==n&&(t=t.bind(n));const e=this.entries();return Array.from({length:this.size},(()=>{const[n,r]=e.next().value;return t(r,n,this)}))}mapValues(t,n){void 0!==n&&(t=t.bind(n));const e=new this.constructor[Symbol.species];for(const[n,r]of this)e.set(n,t(r,n,this));return e}some(t,n){void 0!==n&&(t=t.bind(n));for(const[n,e]of this)if(t(e,n,this))return!0;return!1}every(t,n){void 0!==n&&(t=t.bind(n));for(const[n,e]of this)if(!t(e,n,this))return!1;return!0}reduce(t,n){let e;if(void 0!==n){e=n;for(const[n,r]of this)e=t(e,r,n,this);return e}let r=!0;for(const[n,i]of this)r?(e=i,r=!1):e=t(e,i,n,this);if(r)throw new TypeError("Reduce of empty collection with no initial value");return e}each(t,n){return this.forEach(t,n),this}tap(t,n){return void 0!==n&&(t=t.bind(n)),t(this),this}clone(){return new this.constructor[Symbol.species](this)}concat(...t){const n=this.clone();for(const e of t)for(const[t,r]of e)n.set(t,r);return n}equals(t){if(!t)return!1;if(this===t)return!0;if(this.size!==t.size)return!1;for(const[n,e]of this)if(!t.has(n)||e!==t.get(n))return!1;return!0}sort(t=((t,n)=>Number(t>n)||Number(t===n)-1)){const n=[...this.entries()];n.sort(((n,e)=>t(n[1],e[1],n[0],e[0]))),super.clear(),this._array=null,this._keyArray=null;for(const[t,e]of n)super.set(t,e);return this}intersect(t){return t.filter(((t,n)=>this.has(n)))}difference(t){return t.filter(((t,n)=>!this.has(n))).concat(this.filter(((n,e)=>!t.has(e))))}sorted(t=((t,n)=>Number(t>n)||Number(t===n)-1)){return new this.constructor[Symbol.species]([...this.entries()]).sort(((n,e,r,i)=>t(n,e,r,i)))}}n.Collection=e,e.default=e,t.exports=e,n.default=e})),P={};
/*! (c) Andrea Giammarchi - ISC */try{!function(t,n){if(new t("q=%2B").get("q")!==n||new t({q:n}).get("q")!==n||new t([["q",n]]).get("q")!==n||"q=%0A"!==new t("q=\n").toString()||"q=+%26"!==new t({q:" &"}).toString()||"q=%25zx"!==new t({q:"%zx"}).toString())throw t;P.URLSearchParams=t}(URLSearchParams,"+")}catch(t){!function(t,n,e){var r=t.create,i=t.defineProperty,o=/[!'\(\)~]|%20|%00/g,s=/%(?![0-9a-fA-F]{2})/g,u=/\+/g,a={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"},c={append:function(t,n){v(this._ungap,t,n)},delete:function(t){delete this._ungap[t]},get:function(t){return this.has(t)?this._ungap[t][0]:null},getAll:function(t){return this.has(t)?this._ungap[t].slice(0):[]},has:function(t){return t in this._ungap},set:function(t,e){this._ungap[t]=[n(e)]},forEach:function(t,e){var r=this;for(var i in r._ungap)r._ungap[i].forEach(o,i);function o(o){t.call(e,o,n(i),r)}},toJSON:function(){return{}},toString:function(){var t=[];for(var n in this._ungap)for(var e=w(n),r=0,i=this._ungap[n];r<i.length;r++)t.push(e+"="+w(i[r]));return t.join("&")}};for(var f in c)i(h.prototype,f,{configurable:!0,writable:!0,value:c[f]});function h(t){var n=r(null);switch(i(this,"_ungap",{value:n}),!0){case!t:break;case"string"==typeof t:"?"===t.charAt(0)&&(t=t.slice(1));for(var o=t.split("&"),s=0,u=o.length;s<u;s++){var a=(c=o[s]).indexOf("=");-1<a?v(n,d(c.slice(0,a)),d(c.slice(a+1))):c.length&&v(n,d(c),"")}break;case e(t):for(s=0,u=t.length;s<u;s++){var c;v(n,(c=t[s])[0],c[1])}break;case"forEach"in t:t.forEach(l,n);break;default:for(var f in t)v(n,f,t[f])}}function l(t,n){v(this,n,t)}function v(t,n,r){var i=e(r)?r.join(","):r;n in t?t[n].push(i):t[n]=[i]}function d(t){return decodeURIComponent(t.replace(s,"%25").replace(u," "))}function w(t){return encodeURIComponent(t).replace(o,y)}function y(t){return a[t]}P.URLSearchParams=h}(Object,String,Array.isArray)}!function(t){var n=!1;try{n=!!Symbol.iterator}catch(t){}function e(t,e){var r=[];return t.forEach(e,r),n?r[Symbol.iterator]():{next:function(){var t=r.shift();return{done:void 0===t,value:t}}}}"forEach"in t||(t.forEach=function(t,n){var e=this,r=Object.create(null);this.toString().replace(/=[\s\S]*?(?:&|$)/g,"=").split("=").forEach((function(i){i.length&&!(i in r)&&(r[i]=e.getAll(i)).forEach((function(r){t.call(n,r,i,e)}))}))}),"keys"in t||(t.keys=function(){return e(this,(function(t,n){this.push(n)}))}),"values"in t||(t.values=function(){return e(this,(function(t){this.push(t)}))}),"entries"in t||(t.entries=function(){return e(this,(function(t,n){this.push([n,t])}))}),n&&!(Symbol.iterator in t)&&(t[Symbol.iterator]=t.entries),"sort"in t||(t.sort=function(){for(var t,n,e,r=this.entries(),i=r.next(),o=i.done,s=[],u=Object.create(null);!o;)s.push(n=(e=i.value)[0]),n in u||(u[n]=[]),u[n].push(e[1]),o=(i=r.next()).done;for(s.sort(),t=0;t<s.length;t++)this.delete(s[t]);for(t=0;t<s.length;t++)this.append(n=s[t],u[n].shift())}),function(n){var e=n.defineProperty,r=n.getOwnPropertyDescriptor,i=function(n){var e=n.append;n.append=t.append,URLSearchParams.call(n,n._usp.search.slice(1)),n.append=e},o=function(t,n){if(!(t instanceof n))throw new TypeError("'searchParams' accessed on an object that does not implement interface "+n.name)},s=function(s){var u,a,c=s.prototype,f=r(c,"searchParams"),h=r(c,"href"),l=r(c,"search");!f&&l&&l.set&&(a=function(n){function r(e,r){t.append.call(this,e,r),e=this.toString(),n.set.call(this._usp,e?"?"+e:"")}function i(e){t.delete.call(this,e),e=this.toString(),n.set.call(this._usp,e?"?"+e:"")}function o(e,r){t.set.call(this,e,r),e=this.toString(),n.set.call(this._usp,e?"?"+e:"")}return function(t,n){return t.append=r,t.delete=i,t.set=o,e(t,"_usp",{configurable:!0,writable:!0,value:n})}}(l),u=function(t,n){return e(t,"_searchParams",{configurable:!0,writable:!0,value:a(n,t)}),n},n.defineProperties(c,{href:{get:function(){return h.get.call(this)},set:function(t){var n=this._searchParams;h.set.call(this,t),n&&i(n)}},search:{get:function(){return l.get.call(this)},set:function(t){var n=this._searchParams;l.set.call(this,t),n&&i(n)}},searchParams:{get:function(){return o(this,s),this._searchParams||u(this,new URLSearchParams(this.search.slice(1)))},set:function(t){o(this,s),u(this,t)}}}))};try{s(HTMLAnchorElement),/^function|object$/.test(typeof URL)&&URL.prototype&&s(URL)}catch(t){}}(Object)}(P.URLSearchParams.prototype);const R=Object.freeze({__proto__:null,default:P.URLSearchParams});var T=k((function(t,n){var e="undefined"!=typeof self?self:_,r=function(){function t(){this.fetch=!1,this.DOMException=e.DOMException}return t.prototype=e,new t}();!function(t){!function(n){var e="URLSearchParams"in t,r="Symbol"in t&&"iterator"in Symbol,i="FileReader"in t&&"Blob"in t&&function(){try{return new Blob,!0}catch(t){return!1}}(),o="FormData"in t,s="ArrayBuffer"in t;if(s)var u=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],a=ArrayBuffer.isView||function(t){return t&&u.indexOf(Object.prototype.toString.call(t))>-1};function c(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function f(t){return"string"!=typeof t&&(t=String(t)),t}function h(t){var n={next:function(){var n=t.shift();return{done:void 0===n,value:n}}};return r&&(n[Symbol.iterator]=function(){return n}),n}function l(t){this.map={},t instanceof l?t.forEach((function(t,n){this.append(n,t)}),this):Array.isArray(t)?t.forEach((function(t){this.append(t[0],t[1])}),this):t&&Object.getOwnPropertyNames(t).forEach((function(n){this.append(n,t[n])}),this)}function v(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function d(t){return new Promise((function(n,e){t.onload=function(){n(t.result)},t.onerror=function(){e(t.error)}}))}function w(t){var n=new FileReader,e=d(n);return n.readAsArrayBuffer(t),e}function y(t){if(t.slice)return t.slice(0);var n=new Uint8Array(t.byteLength);return n.set(new Uint8Array(t)),n.buffer}function p(){return this.bodyUsed=!1,this._initBody=function(t){var n;this._bodyInit=t,t?"string"==typeof t?this._bodyText=t:i&&Blob.prototype.isPrototypeOf(t)?this._bodyBlob=t:o&&FormData.prototype.isPrototypeOf(t)?this._bodyFormData=t:e&&URLSearchParams.prototype.isPrototypeOf(t)?this._bodyText=t.toString():s&&i&&(n=t)&&DataView.prototype.isPrototypeOf(n)?(this._bodyArrayBuffer=y(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):s&&(ArrayBuffer.prototype.isPrototypeOf(t)||a(t))?this._bodyArrayBuffer=y(t):this._bodyText=t=Object.prototype.toString.call(t):this._bodyText="",this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):e&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},i&&(this.blob=function(){var t=v(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?v(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(w)}),this.text=function(){var t,n,e,r=v(this);if(r)return r;if(this._bodyBlob)return t=this._bodyBlob,e=d(n=new FileReader),n.readAsText(t),e;if(this._bodyArrayBuffer)return Promise.resolve(function(t){for(var n=new Uint8Array(t),e=new Array(n.length),r=0;r<n.length;r++)e[r]=String.fromCharCode(n[r]);return e.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},o&&(this.formData=function(){return this.text().then(g)}),this.json=function(){return this.text().then(JSON.parse)},this}l.prototype.append=function(t,n){t=c(t),n=f(n);var e=this.map[t];this.map[t]=e?e+", "+n:n},l.prototype.delete=function(t){delete this.map[c(t)]},l.prototype.get=function(t){return t=c(t),this.has(t)?this.map[t]:null},l.prototype.has=function(t){return this.map.hasOwnProperty(c(t))},l.prototype.set=function(t,n){this.map[c(t)]=f(n)},l.prototype.forEach=function(t,n){for(var e in this.map)this.map.hasOwnProperty(e)&&t.call(n,this.map[e],e,this)},l.prototype.keys=function(){var t=[];return this.forEach((function(n,e){t.push(e)})),h(t)},l.prototype.values=function(){var t=[];return this.forEach((function(n){t.push(n)})),h(t)},l.prototype.entries=function(){var t=[];return this.forEach((function(n,e){t.push([e,n])})),h(t)},r&&(l.prototype[Symbol.iterator]=l.prototype.entries);var b=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function m(t,n){var e,r,i=(n=n||{}).body;if(t instanceof m){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,n.headers||(this.headers=new l(t.headers)),this.method=t.method,this.mode=t.mode,this.signal=t.signal,i||null==t._bodyInit||(i=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=n.credentials||this.credentials||"same-origin",!n.headers&&this.headers||(this.headers=new l(n.headers)),this.method=(r=(e=n.method||this.method||"GET").toUpperCase(),b.indexOf(r)>-1?r:e),this.mode=n.mode||this.mode||null,this.signal=n.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&i)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(i)}function g(t){var n=new FormData;return t.trim().split("&").forEach((function(t){if(t){var e=t.split("="),r=e.shift().replace(/\+/g," "),i=e.join("=").replace(/\+/g," ");n.append(decodeURIComponent(r),decodeURIComponent(i))}})),n}function O(t,n){n||(n={}),this.type="default",this.status=void 0===n.status?200:n.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in n?n.statusText:"OK",this.headers=new l(n.headers),this.url=n.url||"",this._initBody(t)}m.prototype.clone=function(){return new m(this,{body:this._bodyInit})},p.call(m.prototype),p.call(O.prototype),O.prototype.clone=function(){return new O(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new l(this.headers),url:this.url})},O.error=function(){var t=new O(null,{status:0,statusText:""});return t.type="error",t};var E=[301,302,303,307,308];O.redirect=function(t,n){if(-1===E.indexOf(n))throw new RangeError("Invalid status code");return new O(null,{status:n,headers:{location:t}})},n.DOMException=t.DOMException;try{new n.DOMException}catch(t){n.DOMException=function(t,n){this.message=t,this.name=n;var e=Error(t);this.stack=e.stack},n.DOMException.prototype=Object.create(Error.prototype),n.DOMException.prototype.constructor=n.DOMException}function _(t,e){return new Promise((function(r,o){var s=new m(t,e);if(s.signal&&s.signal.aborted)return o(new n.DOMException("Aborted","AbortError"));var u=new XMLHttpRequest;function a(){u.abort()}u.onload=function(){var t,n,e={status:u.status,statusText:u.statusText,headers:(t=u.getAllResponseHeaders()||"",n=new l,t.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach((function(t){var e=t.split(":"),r=e.shift().trim();if(r){var i=e.join(":").trim();n.append(r,i)}})),n)};e.url="responseURL"in u?u.responseURL:e.headers.get("X-Request-URL"),r(new O("response"in u?u.response:u.responseText,e))},u.onerror=function(){o(new TypeError("Network request failed"))},u.ontimeout=function(){o(new TypeError("Network request failed"))},u.onabort=function(){o(new n.DOMException("Aborted","AbortError"))},u.open(s.method,s.url,!0),"include"===s.credentials?u.withCredentials=!0:"omit"===s.credentials&&(u.withCredentials=!1),"responseType"in u&&i&&(u.responseType="blob"),s.headers.forEach((function(t,n){u.setRequestHeader(n,t)})),s.signal&&(s.signal.addEventListener("abort",a),u.onreadystatechange=function(){4===u.readyState&&s.signal.removeEventListener("abort",a)}),u.send(void 0===s._bodyInit?null:s._bodyInit)}))}_.polyfill=!0,t.fetch||(t.fetch=_,t.Headers=l,t.Request=m,t.Response=O),n.Headers=l,n.Request=m,n.Response=O,n.fetch=_,Object.defineProperty(n,"__esModule",{value:!0})}({})}(r),r.fetch.ponyfill=!0,delete r.fetch.polyfill;var i=r;(n=i.fetch).default=i.fetch,n.fetch=i.fetch,n.Headers=i.Headers,n.Request=i.Request,n.Response=i.Response,t.exports=n})),U=k((function(t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(t,n){!1!==(Object.getOwnPropertyDescriptor(t,n)||{}).enumerable&&Object.defineProperty(t,n,{enumerable:!1,set:function(t){Object.defineProperty(this,n,{enumerable:!1,writable:!0,value:t})}})}}));const x=A(R);var M=k((function(t,n){var e=_&&_.__decorate||function(t,n,e,r){var i,o=arguments.length,s=o<3?n:null===r?r=Object.getOwnPropertyDescriptor(n,e):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,n,e,r);else for(var u=t.length-1;u>=0;u--)(i=t[u])&&(s=(o<3?i(s):o>3?i(n,e,s):i(n,e))||s);return o>3&&s&&Object.defineProperty(n,e,s),s},r=_&&_.__awaiter||function(t,n,e,r){return new(e||(e=Promise))((function(i,o){function s(t){try{a(r.next(t))}catch(t){o(t)}}function u(t){try{a(r.throw(t))}catch(t){o(t)}}function a(t){t.done?i(t.value):new e((function(n){n(t.value)})).then(s,u)}a((r=r.apply(t,n||[])).next())}))},i=_&&_.__generator||function(t,n){var e,r,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(o){return function(u){return function(o){if(e)throw new TypeError("Generator is already executing.");for(;s;)try{if(e=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,r=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!((i=(i=s.trys).length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){s=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){s.label=o[1];break}if(6===o[0]&&s.label<i[1]){s.label=i[1],i=o;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(o);break}i[2]&&s.ops.pop(),s.trys.pop();continue}o=n.call(t,s)}catch(t){o=[6,t],r=0}finally{e=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}},o=_&&_.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(n,"__esModule",{value:!0});var s=o(S),u=o(x),a=o(T),c=o(U),f="https://pokeapi.co/api/v2",h=function(){function t(t){this.resource=t,this.cache=new s.default}return t.prototype.get=function(t){return this.cache.get(t)},t.prototype.resolve=function(t){return r(this,void 0,void 0,(function(){return i(this,(function(){return[2,this.get(t)||this.fetch(t)]}))}))},t.prototype.fetch=function(t){return r(this,void 0,void 0,(function(){var n;return i(this,(function(e){switch(e.label){case 0:return[4,a.default(f+"/"+this.resource+"/"+t).then((function(t){return t.json()}))];case 1:return n=e.sent(),this._cache(n),[2,n]}}))}))},t.prototype.list=function(t,n){return void 0===t&&(t=20),void 0===n&&(n=0),r(this,void 0,void 0,(function(){var e,r,o;return i(this,(function(){return this._list?(e=this._list.results.slice(n,t),[2,{count:(r=this._list).count,next:r.next,previous:r.previous,results:e}]):(o=new u.default({limit:""+t,offset:""+n}),[2,a.default(f+"/"+this.resource+"?"+o).then((function(t){return t.json()}))])}))}))},t.prototype.listAll=function(t){return void 0===t&&(t=!0),r(this,void 0,void 0,(function(){var n,e;return i(this,(function(r){switch(r.label){case 0:return this._list?[2,this._list]:[4,a.default(f+"/"+this.resource+"?limit=1").then((function(t){return t.json()}))];case 1:return n=r.sent().count,[4,a.default(f+"/"+this.resource+"?limit="+n).then((function(t){return t.json()}))];case 2:return e=r.sent(),t&&(this._list=e),[2,e]}}))}))},t.prototype._cache=function(t){this.cache.set(t.id,t)},e([c.default],t.prototype,"resource",void 0),e([c.default],t.prototype,"_list",void 0),t}();n.Endpoint=h})),I=k((function(t,n){var e,r=_&&_.__extends||(e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(t,n)},function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}),i=_&&_.__decorate||function(t,n,e,r){var i,o=arguments.length,s=o<3?n:null===r?r=Object.getOwnPropertyDescriptor(n,e):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,n,e,r);else for(var u=t.length-1;u>=0;u--)(i=t[u])&&(s=(o<3?i(s):o>3?i(n,e,s):i(n,e))||s);return o>3&&s&&Object.defineProperty(n,e,s),s},o=_&&_.__awaiter||function(t,n,e,r){return new(e||(e=Promise))((function(i,o){function s(t){try{a(r.next(t))}catch(t){o(t)}}function u(t){try{a(r.throw(t))}catch(t){o(t)}}function a(t){t.done?i(t.value):new e((function(n){n(t.value)})).then(s,u)}a((r=r.apply(t,n||[])).next())}))},s=_&&_.__generator||function(t,n){var e,r,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(o){return function(u){return function(o){if(e)throw new TypeError("Generator is already executing.");for(;s;)try{if(e=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,r=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!((i=(i=s.trys).length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){s=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){s.label=o[1];break}if(6===o[0]&&s.label<i[1]){s.label=i[1],i=o;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(o);break}i[2]&&s.ops.pop(),s.trys.pop();continue}o=n.call(t,s)}catch(t){o=[6,t],r=0}finally{e=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}},u=_&&_.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(n,"__esModule",{value:!0});var a=u(x),c=u(T),f=u(U),h="https://pokeapi.co/api/v2",l=function(t){function n(n){var e=t.call(this,n)||this;return e._nameMap=new Map,e}return r(n,t),n.prototype.get=function(t){return this.cache.get("number"==typeof t?t:this._nameMap.get(t.toLowerCase()))},n.prototype.fetch=function(t){return o(this,void 0,void 0,(function(){var n;return s(this,(function(e){switch(e.label){case 0:return t="string"==typeof t?t.toLowerCase():t,[4,c.default(h+"/"+this.resource+"/"+t).then((function(t){return t.json()}))];case 1:return n=e.sent(),this._cache(n),[2,n]}}))}))},n.prototype.resolve=function(t){return o(this,void 0,void 0,(function(){return s(this,(function(){return[2,this.get(t)||this.fetch(t)]}))}))},n.prototype.list=function(t,n){return void 0===t&&(t=20),void 0===n&&(n=0),o(this,void 0,void 0,(function(){var e,r,i;return s(this,(function(){return this._list?(e=this._list.results.slice(n,t),[2,{count:(r=this._list).count,next:r.next,previous:r.previous,results:e}]):(i=new a.default({limit:""+t,offset:""+n}),[2,c.default(h+"/"+this.resource+"?"+i).then((function(t){return t.json()}))])}))}))},n.prototype.listAll=function(t){return void 0===t&&(t=!0),o(this,void 0,void 0,(function(){var n,e;return s(this,(function(r){switch(r.label){case 0:return this._list?[2,this._list]:[4,c.default(h+"/"+this.resource+"?limit=1").then((function(t){return t.json()}))];case 1:return n=r.sent().count,[4,c.default(h+"/"+this.resource+"?limit="+n).then((function(t){return t.json()}))];case 2:return e=r.sent(),t&&(this._list=e),[2,e]}}))}))},n.prototype._cache=function(t){this.cache.set(t.id,t),this._nameMap.set(t.name,t.id)},i([f.default],n.prototype,"_list",void 0),i([f.default],n.prototype,"_nameMap",void 0),n}(M.Endpoint);n.NamedEndpoint=l})),C=k((function(t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.Berry=function(){}}));const L=j(k((function(t,n){var e=_&&_.__awaiter||function(t,n,e,r){return new(e||(e=Promise))((function(i,o){function s(t){try{a(r.next(t))}catch(t){o(t)}}function u(t){try{a(r.throw(t))}catch(t){o(t)}}function a(t){t.done?i(t.value):new e((function(n){n(t.value)})).then(s,u)}a((r=r.apply(t,n||[])).next())}))},r=_&&_.__generator||function(t,n){var e,r,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(o){return function(u){return function(o){if(e)throw new TypeError("Generator is already executing.");for(;s;)try{if(e=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,r=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!((i=(i=s.trys).length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){s=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){s.label=o[1];break}if(6===o[0]&&s.label<i[1]){s.label=i[1],i=o;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(o);break}i[2]&&s.ops.pop(),s.trys.pop();continue}o=n.call(t,s)}catch(t){o=[6,t],r=0}finally{e=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}};Object.defineProperty(n,"__esModule",{value:!0}),function(t){for(var e in t)n.hasOwnProperty(e)||(n[e]=t[e])}(C);var i=function(){function t(){}return t.fromResource=function(t){return e(this,void 0,void 0,(function(){var n,e,i,o=this;return r(this,(function(){return n=/([a-z-]+)\/(\d+)/.exec(t.url),e=n[1],i=n[2],t.endpoint?[2,t.endpoint.resolve(parseInt(i,10))]:[2,this[Object.getOwnPropertyNames(this).find((function(t){return o[t].resource===e}))].resolve(parseInt(i,10))]}))}))},t.Berry=new I.NamedEndpoint("berry"),t.BerryFirmness=new I.NamedEndpoint("berry-firmness"),t.BerryFlavor=new I.NamedEndpoint("berry-flavor"),t.ContestType=new I.NamedEndpoint("contest-type"),t.ContestEffect=new M.Endpoint("contest-effect"),t.SuperContestEffect=new M.Endpoint("super-contest-effect"),t.EncounterMethod=new I.NamedEndpoint("encounter-method"),t.EncounterCondition=new I.NamedEndpoint("encounter-condition"),t.EncounterConditionValue=new I.NamedEndpoint("encounter-condition-value"),t.EvolutionChain=new M.Endpoint("evolution-chain"),t.EvolutionTrigger=new I.NamedEndpoint("evolution-trigger"),t.Generaition=new I.NamedEndpoint("generation"),t.Pokedex=new I.NamedEndpoint("pokedex"),t.Version=new I.NamedEndpoint("version"),t.VerionGroup=new I.NamedEndpoint("version-group"),t.Item=new I.NamedEndpoint("item"),t.ItemAttribute=new I.NamedEndpoint("item-attribute"),t.ItemCategory=new I.NamedEndpoint("item-category"),t.ItemFlingEffect=new I.NamedEndpoint("item-fling-effect"),t.ItemPocket=new I.NamedEndpoint("item-pocket"),t.Location=new I.NamedEndpoint("location"),t.LocationArea=new I.NamedEndpoint("location-area"),t.PalParkArea=new I.NamedEndpoint("pal-park-area"),t.Region=new I.NamedEndpoint("region"),t.Machine=new M.Endpoint("machine"),t.Move=new I.NamedEndpoint("move"),t.MoveAilment=new I.NamedEndpoint("move-ailment"),t.MoveBattleStyle=new I.NamedEndpoint("move-battle-style"),t.MoveCategory=new I.NamedEndpoint("move-category"),t.MoveDamageClass=new I.NamedEndpoint("move-damage-class"),t.MoveLearnMethod=new I.NamedEndpoint("move-learn-method"),t.MoveTarget=new I.NamedEndpoint("move-target"),t.Ability=new I.NamedEndpoint("ability"),t.Characteristic=new M.Endpoint("characteristic"),t.EggGroup=new I.NamedEndpoint("egg-group"),t.Gender=new I.NamedEndpoint("gender"),t.GrowthRate=new I.NamedEndpoint("growth-rate"),t.Nature=new I.NamedEndpoint("nature"),t.PokeathlonStat=new I.NamedEndpoint("pokeathlon-stat"),t.Pokemon=new I.NamedEndpoint("pokemon"),t.PokemonColor=new I.NamedEndpoint("pokemon-color"),t.PokemonForm=new I.NamedEndpoint("pokemon-form"),t.PokemonHabitat=new I.NamedEndpoint("pokemon-habitat"),t.PokemonShape=new I.NamedEndpoint("pokemon-shape"),t.PokemonSpecies=new I.NamedEndpoint("pokemon-species"),t.Stat=new I.NamedEndpoint("stat"),t.Type=new I.NamedEndpoint("type"),t.Language=new I.NamedEndpoint("language"),t}();t.exports=i,n.default=i})));var q;!function(t){t[t.TEXT_CHANGED=0]="TEXT_CHANGED",t[t.LOOKUP_EVOLUTION_CHAIN_START=1]="LOOKUP_EVOLUTION_CHAIN_START",t[t.LOOKUP_POKEMON_SUCCEEDED=2]="LOOKUP_POKEMON_SUCCEEDED",t[t.LOOKUP_POKEMON_ERROR=3]="LOOKUP_POKEMON_ERROR",t[t.LOOKUP_SPECIES_ERROR=4]="LOOKUP_SPECIES_ERROR",t[t.LOOKUP_EVOLUTION_CHAIN_SUCCEEDED=5]="LOOKUP_EVOLUTION_CHAIN_SUCCEEDED",t[t.LOOKUP_EVOLUTION_CHAIN_ERROR=6]="LOOKUP_EVOLUTION_CHAIN_ERROR"}(q||(q={}));const D=t=>async n=>n({type:q.TEXT_CHANGED,payload:{newSearchTerm:t}}),N=t=>async n=>n({type:q.LOOKUP_EVOLUTION_CHAIN_ERROR,payload:{exception:t}}),$=()=>async(t,n)=>{const e=n().pokemonSearchReducer.searchTerm;t((async t=>t({type:q.LOOKUP_EVOLUTION_CHAIN_START})));try{const n=await L.Pokemon.resolve(e);t((t=>async n=>n({type:q.LOOKUP_POKEMON_SUCCEEDED,payload:{pokemon:t}}))(n));try{const i=(await L.PokemonSpecies.resolve(n.species.name)).evolution_chain.url.match(/\/[0-9]+\//);if(i.length>0)try{const n=parseInt(i[i.length-1].split("/")[1]);t((r=await L.EvolutionChain.resolve(n),async t=>t({type:q.LOOKUP_EVOLUTION_CHAIN_SUCCEEDED,payload:{evolutionChain:r}})))}catch(n){alert(`Could not lookup the evolution chain for ${e}. Please make sure the PokéAPI is reachable.`),console.error(n),t(N(n))}else{alert(`Could not lookup the evolution chain for ${e}. Please make sure the PokéAPI is reachable.`);const n=Error("The Pokémon species does not have an evolution chain entry associated with it.");console.error(n),t(N(n))}}catch(e){alert(`Could not lookup the Pokémon species ${n.species.name}. Please make sure the PokéAPI is reachable.`),console.error(e),t((i=e,async t=>t({type:q.LOOKUP_SPECIES_ERROR,payload:{exception:i}})))}}catch(n){alert(`Could not lookup the Pokémon ${e}. Please check your spelling and make sure the PokéAPI is reachable.`),console.error(n),t((t=>async n=>n({type:q.LOOKUP_POKEMON_ERROR,payload:{exception:t}}))(n))}var r,i},F=(t,n,e)=>e(t.confirm(n)),K=t=>t.metaKey||t.altKey||t.ctrlKey||t.shiftKey,B=t=>{const n=t.navigator.userAgent;return(-1===n.indexOf("Android 2.")&&-1===n.indexOf("Android 4.0")||-1===n.indexOf("Mobile Safari")||-1!==n.indexOf("Chrome")||-1!==n.indexOf("Windows Phone"))&&t.history&&"pushState"in t.history},H=t=>-1===t.userAgent.indexOf("Trident"),G=t=>-1===t.userAgent.indexOf("Firefox"),V=(t,n)=>void 0===n.state&&-1===t.userAgent.indexOf("CriOS"),z=(t,n)=>{const e=t[n],r="__storage_test__";try{return e.setItem(r,r),e.removeItem(r),!0}catch(t){return t instanceof DOMException&&(22===t.code||1014===t.code||"QuotaExceededError"===t.name||"NS_ERROR_DOM_QUOTA_REACHED"===t.name)&&0!==e.length}};export{q as S,_ as a,O as b,k as c,z as d,B as e,H as f,j as g,a as h,c as i,p as j,v as k,s as l,g as m,u as n,h as o,F as p,V as q,G as r,E as s,f as t,y as u,D as v,$ as w,K as x}