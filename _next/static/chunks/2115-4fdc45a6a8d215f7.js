(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2115],{232:(t,e,r)=>{"use strict";r.d(e,{A:()=>n});let n=(0,r(9946).A)("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]])},760:(t,e,r)=>{"use strict";r.d(e,{N:()=>v});var n=r(5155),o=r(2115),i=r(869),f=r(2885),u=r(7494),s=r(845),a=r(1508);class h extends o.Component{getSnapshotBeforeUpdate(t){let e=this.props.childRef.current;if(e&&t.isPresent&&!this.props.isPresent){let t=e.offsetParent,r=t instanceof HTMLElement&&t.offsetWidth||0,n=this.props.sizeRef.current;n.height=e.offsetHeight||0,n.width=e.offsetWidth||0,n.top=e.offsetTop,n.left=e.offsetLeft,n.right=r-n.width-n.left}return null}componentDidUpdate(){}render(){return this.props.children}}function l(t){let{children:e,isPresent:r,anchorX:i}=t,f=(0,o.useId)(),u=(0,o.useRef)(null),s=(0,o.useRef)({width:0,height:0,top:0,left:0,right:0}),{nonce:l}=(0,o.useContext)(a.Q);return(0,o.useInsertionEffect)(()=>{let{width:t,height:e,top:n,left:o,right:a}=s.current;if(r||!u.current||!t||!e)return;u.current.dataset.motionPopId=f;let h=document.createElement("style");return l&&(h.nonce=l),document.head.appendChild(h),h.sheet&&h.sheet.insertRule('\n          [data-motion-pop-id="'.concat(f,'"] {\n            position: absolute !important;\n            width: ').concat(t,"px !important;\n            height: ").concat(e,"px !important;\n            ").concat("left"===i?"left: ".concat(o):"right: ".concat(a),"px !important;\n            top: ").concat(n,"px !important;\n          }\n        ")),()=>{document.head.removeChild(h)}},[r]),(0,n.jsx)(h,{isPresent:r,childRef:u,sizeRef:s,children:o.cloneElement(e,{ref:u})})}let c=t=>{let{children:e,initial:r,isPresent:i,onExitComplete:u,custom:a,presenceAffectsLayout:h,mode:c,anchorX:y}=t,d=(0,f.M)(p),g=(0,o.useId)(),v=(0,o.useCallback)(t=>{for(let e of(d.set(t,!0),d.values()))if(!e)return;u&&u()},[d,u]),m=(0,o.useMemo)(()=>({id:g,initial:r,isPresent:i,custom:a,onExitComplete:v,register:t=>(d.set(t,!1),()=>d.delete(t))}),h?[Math.random(),v]:[i,v]);return(0,o.useMemo)(()=>{d.forEach((t,e)=>d.set(e,!1))},[i]),o.useEffect(()=>{i||d.size||!u||u()},[i]),"popLayout"===c&&(e=(0,n.jsx)(l,{isPresent:i,anchorX:y,children:e})),(0,n.jsx)(s.t.Provider,{value:m,children:e})};function p(){return new Map}var y=r(2082);let d=t=>t.key||"";function g(t){let e=[];return o.Children.forEach(t,t=>{(0,o.isValidElement)(t)&&e.push(t)}),e}let v=t=>{let{children:e,custom:r,initial:s=!0,onExitComplete:a,presenceAffectsLayout:h=!0,mode:l="sync",propagate:p=!1,anchorX:v="left"}=t,[m,b]=(0,y.xQ)(p),w=(0,o.useMemo)(()=>g(e),[e]),E=p&&!m?[]:w.map(d),A=(0,o.useRef)(!0),x=(0,o.useRef)(w),O=(0,f.M)(()=>new Map),[B,U]=(0,o.useState)(w),[k,S]=(0,o.useState)(w);(0,u.E)(()=>{A.current=!1,x.current=w;for(let t=0;t<k.length;t++){let e=d(k[t]);E.includes(e)?O.delete(e):!0!==O.get(e)&&O.set(e,!1)}},[k,E.length,E.join("-")]);let j=[];if(w!==B){let t=[...w];for(let e=0;e<k.length;e++){let r=k[e],n=d(r);E.includes(n)||(t.splice(e,0,r),j.push(r))}return"wait"===l&&j.length&&(t=j),S(g(t)),U(w),null}let{forceRender:M}=(0,o.useContext)(i.L);return(0,n.jsx)(n.Fragment,{children:k.map(t=>{let e=d(t),o=(!p||!!m)&&(w===k||E.includes(e));return(0,n.jsx)(c,{isPresent:o,initial:(!A.current||!!s)&&void 0,custom:r,presenceAffectsLayout:h,mode:l,onExitComplete:o?void 0:()=>{if(!O.has(e))return;O.set(e,!0);let t=!0;O.forEach(e=>{e||(t=!1)}),t&&(null==M||M(),S(x.current),p&&(null==b||b()),a&&a())},anchorX:v,children:t},e)})})}},1539:(t,e,r)=>{"use strict";r.d(e,{A:()=>n});let n=(0,r(9946).A)("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]])},2919:(t,e,r)=>{"use strict";r.d(e,{A:()=>n});let n=(0,r(9946).A)("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]])},2970:(t,e,r)=>{"use strict";r.d(e,{A:()=>n});let n=(0,r(9946).A)("Cloud",[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]])},3314:(t,e,r)=>{"use strict";r.d(e,{A:()=>n});let n=(0,r(9946).A)("Cpu",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]])},4052:(t,e,r)=>{var n=0/0,o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,u=/^0o[0-7]+$/i,s=parseInt,a="object"==typeof r.g&&r.g&&r.g.Object===Object&&r.g,h="object"==typeof self&&self&&self.Object===Object&&self,l=a||h||Function("return this")(),c=Object.prototype.toString,p=Math.max,y=Math.min,d=function(){return l.Date.now()};function g(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function v(t){if("number"==typeof t)return t;if("symbol"==typeof(e=t)||e&&"object"==typeof e&&"[object Symbol]"==c.call(e))return n;if(g(t)){var e,r="function"==typeof t.valueOf?t.valueOf():t;t=g(r)?r+"":r}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var a=f.test(t);return a||u.test(t)?s(t.slice(2),a?2:8):i.test(t)?n:+t}t.exports=function(t,e,r){var n,o,i,f,u,s,a=0,h=!1,l=!1,c=!0;if("function"!=typeof t)throw TypeError("Expected a function");function m(e){var r=n,i=o;return n=o=void 0,a=e,f=t.apply(i,r)}function b(t){var r=t-s,n=t-a;return void 0===s||r>=e||r<0||l&&n>=i}function w(){var t,r,n,o=d();if(b(o))return E(o);u=setTimeout(w,(t=o-s,r=o-a,n=e-t,l?y(n,i-r):n))}function E(t){return(u=void 0,c&&n)?m(t):(n=o=void 0,f)}function A(){var t,r=d(),i=b(r);if(n=arguments,o=this,s=r,i){if(void 0===u)return a=t=s,u=setTimeout(w,e),h?m(t):f;if(l)return u=setTimeout(w,e),m(s)}return void 0===u&&(u=setTimeout(w,e)),f}return e=v(e)||0,g(r)&&(h=!!r.leading,i=(l="maxWait"in r)?p(v(r.maxWait)||0,e):i,c="trailing"in r?!!r.trailing:c),A.cancel=function(){void 0!==u&&clearTimeout(u),a=0,n=s=o=u=void 0},A.flush=function(){return void 0===u?f:E(d())},A}},4134:(t,e,r)=>{"use strict";var n=r(7719),o=r(7610),i="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;function f(t){if(t>0x7fffffff)throw RangeError('The value "'+t+'" is invalid for option "size"');var e=new Uint8Array(t);return Object.setPrototypeOf(e,u.prototype),e}function u(t,e,r){if("number"==typeof t){if("string"==typeof e)throw TypeError('The "string" argument must be of type string. Received type number');return h(t)}return s(t,e,r)}function s(t,e,r){if("string"==typeof t)return function(t,e){if(("string"!=typeof e||""===e)&&(e="utf8"),!u.isEncoding(e))throw TypeError("Unknown encoding: "+e);var r=0|y(t,e),n=f(r),o=n.write(t,e);return o!==r&&(n=n.slice(0,o)),n}(t,e);if(ArrayBuffer.isView(t))return function(t){if(j(t,Uint8Array)){var e=new Uint8Array(t);return c(e.buffer,e.byteOffset,e.byteLength)}return l(t)}(t);if(null==t)throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(j(t,ArrayBuffer)||t&&j(t.buffer,ArrayBuffer)||"undefined"!=typeof SharedArrayBuffer&&(j(t,SharedArrayBuffer)||t&&j(t.buffer,SharedArrayBuffer)))return c(t,e,r);if("number"==typeof t)throw TypeError('The "value" argument must not be of type number. Received type number');var n=t.valueOf&&t.valueOf();if(null!=n&&n!==t)return u.from(n,e,r);var o=function(t){if(u.isBuffer(t)){var e=0|p(t.length),r=f(e);return 0===r.length||t.copy(r,0,0,e),r}return void 0!==t.length?"number"!=typeof t.length||function(t){return t!=t}(t.length)?f(0):l(t):"Buffer"===t.type&&Array.isArray(t.data)?l(t.data):void 0}(t);if(o)return o;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof t[Symbol.toPrimitive])return u.from(t[Symbol.toPrimitive]("string"),e,r);throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}function a(t){if("number"!=typeof t)throw TypeError('"size" argument must be of type number');if(t<0)throw RangeError('The value "'+t+'" is invalid for option "size"')}function h(t){return a(t),f(t<0?0:0|p(t))}function l(t){for(var e=t.length<0?0:0|p(t.length),r=f(e),n=0;n<e;n+=1)r[n]=255&t[n];return r}function c(t,e,r){var n;if(e<0||t.byteLength<e)throw RangeError('"offset" is outside of buffer bounds');if(t.byteLength<e+(r||0))throw RangeError('"length" is outside of buffer bounds');return Object.setPrototypeOf(n=void 0===e&&void 0===r?new Uint8Array(t):void 0===r?new Uint8Array(t,e):new Uint8Array(t,e,r),u.prototype),n}function p(t){if(t>=0x7fffffff)throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");return 0|t}function y(t,e){if(u.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||j(t,ArrayBuffer))return t.byteLength;if("string"!=typeof t)throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);var r=t.length,n=arguments.length>2&&!0===arguments[2];if(!n&&0===r)return 0;for(var o=!1;;)switch(e){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return U(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return k(t).length;default:if(o)return n?-1:U(t).length;e=(""+e).toLowerCase(),o=!0}}function d(t,e,r){var o,i,f,u=!1;if((void 0===e||e<0)&&(e=0),e>this.length||((void 0===r||r>this.length)&&(r=this.length),r<=0||(r>>>=0)<=(e>>>=0)))return"";for(t||(t="utf8");;)switch(t){case"hex":return function(t,e,r){var n=t.length;(!e||e<0)&&(e=0),(!r||r<0||r>n)&&(r=n);for(var o="",i=e;i<r;++i)o+=M[t[i]];return o}(this,e,r);case"utf8":case"utf-8":return b(this,e,r);case"ascii":return function(t,e,r){var n="";r=Math.min(t.length,r);for(var o=e;o<r;++o)n+=String.fromCharCode(127&t[o]);return n}(this,e,r);case"latin1":case"binary":return function(t,e,r){var n="";r=Math.min(t.length,r);for(var o=e;o<r;++o)n+=String.fromCharCode(t[o]);return n}(this,e,r);case"base64":return o=this,i=e,f=r,0===i&&f===o.length?n.fromByteArray(o):n.fromByteArray(o.slice(i,f));case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return function(t,e,r){for(var n=t.slice(e,r),o="",i=0;i<n.length-1;i+=2)o+=String.fromCharCode(n[i]+256*n[i+1]);return o}(this,e,r);default:if(u)throw TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),u=!0}}function g(t,e,r){var n=t[e];t[e]=t[r],t[r]=n}function v(t,e,r,n,o){var i;if(0===t.length)return -1;if("string"==typeof r?(n=r,r=0):r>0x7fffffff?r=0x7fffffff:r<-0x80000000&&(r=-0x80000000),(i=r*=1)!=i&&(r=o?0:t.length-1),r<0&&(r=t.length+r),r>=t.length){if(o)return -1;r=t.length-1}else if(r<0){if(!o)return -1;r=0}if("string"==typeof e&&(e=u.from(e,n)),u.isBuffer(e))return 0===e.length?-1:m(t,e,r,n,o);if("number"==typeof e)return(e&=255,"function"==typeof Uint8Array.prototype.indexOf)?o?Uint8Array.prototype.indexOf.call(t,e,r):Uint8Array.prototype.lastIndexOf.call(t,e,r):m(t,[e],r,n,o);throw TypeError("val must be string, number or Buffer")}function m(t,e,r,n,o){var i,f=1,u=t.length,s=e.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(t.length<2||e.length<2)return -1;f=2,u/=2,s/=2,r/=2}function a(t,e){return 1===f?t[e]:t.readUInt16BE(e*f)}if(o){var h=-1;for(i=r;i<u;i++)if(a(t,i)===a(e,-1===h?0:i-h)){if(-1===h&&(h=i),i-h+1===s)return h*f}else -1!==h&&(i-=i-h),h=-1}else for(r+s>u&&(r=u-s),i=r;i>=0;i--){for(var l=!0,c=0;c<s;c++)if(a(t,i+c)!==a(e,c)){l=!1;break}if(l)return i}return -1}function b(t,e,r){r=Math.min(t.length,r);for(var n=[],o=e;o<r;){var i,f,u,s,a=t[o],h=null,l=a>239?4:a>223?3:a>191?2:1;if(o+l<=r)switch(l){case 1:a<128&&(h=a);break;case 2:(192&(i=t[o+1]))==128&&(s=(31&a)<<6|63&i)>127&&(h=s);break;case 3:i=t[o+1],f=t[o+2],(192&i)==128&&(192&f)==128&&(s=(15&a)<<12|(63&i)<<6|63&f)>2047&&(s<55296||s>57343)&&(h=s);break;case 4:i=t[o+1],f=t[o+2],u=t[o+3],(192&i)==128&&(192&f)==128&&(192&u)==128&&(s=(15&a)<<18|(63&i)<<12|(63&f)<<6|63&u)>65535&&s<1114112&&(h=s)}null===h?(h=65533,l=1):h>65535&&(h-=65536,n.push(h>>>10&1023|55296),h=56320|1023&h),n.push(h),o+=l}return function(t){var e=t.length;if(e<=4096)return String.fromCharCode.apply(String,t);for(var r="",n=0;n<e;)r+=String.fromCharCode.apply(String,t.slice(n,n+=4096));return r}(n)}function w(t,e,r){if(t%1!=0||t<0)throw RangeError("offset is not uint");if(t+e>r)throw RangeError("Trying to access beyond buffer length")}function E(t,e,r,n,o,i){if(!u.isBuffer(t))throw TypeError('"buffer" argument must be a Buffer instance');if(e>o||e<i)throw RangeError('"value" argument is out of bounds');if(r+n>t.length)throw RangeError("Index out of range")}function A(t,e,r,n,o,i){if(r+n>t.length||r<0)throw RangeError("Index out of range")}function x(t,e,r,n,i){return e*=1,r>>>=0,i||A(t,e,r,4,34028234663852886e22,-34028234663852886e22),o.write(t,e,r,n,23,4),r+4}function O(t,e,r,n,i){return e*=1,r>>>=0,i||A(t,e,r,8,17976931348623157e292,-17976931348623157e292),o.write(t,e,r,n,52,8),r+8}e.hp=u,e.IS=50,u.TYPED_ARRAY_SUPPORT=function(){try{var t=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(t,e),42===t.foo()}catch(t){return!1}}(),u.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(u.prototype,"parent",{enumerable:!0,get:function(){if(u.isBuffer(this))return this.buffer}}),Object.defineProperty(u.prototype,"offset",{enumerable:!0,get:function(){if(u.isBuffer(this))return this.byteOffset}}),u.poolSize=8192,u.from=function(t,e,r){return s(t,e,r)},Object.setPrototypeOf(u.prototype,Uint8Array.prototype),Object.setPrototypeOf(u,Uint8Array),u.alloc=function(t,e,r){return(a(t),t<=0)?f(t):void 0!==e?"string"==typeof r?f(t).fill(e,r):f(t).fill(e):f(t)},u.allocUnsafe=function(t){return h(t)},u.allocUnsafeSlow=function(t){return h(t)},u.isBuffer=function(t){return null!=t&&!0===t._isBuffer&&t!==u.prototype},u.compare=function(t,e){if(j(t,Uint8Array)&&(t=u.from(t,t.offset,t.byteLength)),j(e,Uint8Array)&&(e=u.from(e,e.offset,e.byteLength)),!u.isBuffer(t)||!u.isBuffer(e))throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(t===e)return 0;for(var r=t.length,n=e.length,o=0,i=Math.min(r,n);o<i;++o)if(t[o]!==e[o]){r=t[o],n=e[o];break}return r<n?-1:+(n<r)},u.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},u.concat=function(t,e){if(!Array.isArray(t))throw TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return u.alloc(0);if(void 0===e)for(r=0,e=0;r<t.length;++r)e+=t[r].length;var r,n=u.allocUnsafe(e),o=0;for(r=0;r<t.length;++r){var i=t[r];if(j(i,Uint8Array))o+i.length>n.length?u.from(i).copy(n,o):Uint8Array.prototype.set.call(n,i,o);else if(u.isBuffer(i))i.copy(n,o);else throw TypeError('"list" argument must be an Array of Buffers');o+=i.length}return n},u.byteLength=y,u.prototype._isBuffer=!0,u.prototype.swap16=function(){var t=this.length;if(t%2!=0)throw RangeError("Buffer size must be a multiple of 16-bits");for(var e=0;e<t;e+=2)g(this,e,e+1);return this},u.prototype.swap32=function(){var t=this.length;if(t%4!=0)throw RangeError("Buffer size must be a multiple of 32-bits");for(var e=0;e<t;e+=4)g(this,e,e+3),g(this,e+1,e+2);return this},u.prototype.swap64=function(){var t=this.length;if(t%8!=0)throw RangeError("Buffer size must be a multiple of 64-bits");for(var e=0;e<t;e+=8)g(this,e,e+7),g(this,e+1,e+6),g(this,e+2,e+5),g(this,e+3,e+4);return this},u.prototype.toString=function(){var t=this.length;return 0===t?"":0==arguments.length?b(this,0,t):d.apply(this,arguments)},u.prototype.toLocaleString=u.prototype.toString,u.prototype.equals=function(t){if(!u.isBuffer(t))throw TypeError("Argument must be a Buffer");return this===t||0===u.compare(this,t)},u.prototype.inspect=function(){var t="",r=e.IS;return t=this.toString("hex",0,r).replace(/(.{2})/g,"$1 ").trim(),this.length>r&&(t+=" ... "),"<Buffer "+t+">"},i&&(u.prototype[i]=u.prototype.inspect),u.prototype.compare=function(t,e,r,n,o){if(j(t,Uint8Array)&&(t=u.from(t,t.offset,t.byteLength)),!u.isBuffer(t))throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof t);if(void 0===e&&(e=0),void 0===r&&(r=t?t.length:0),void 0===n&&(n=0),void 0===o&&(o=this.length),e<0||r>t.length||n<0||o>this.length)throw RangeError("out of range index");if(n>=o&&e>=r)return 0;if(n>=o)return -1;if(e>=r)return 1;if(e>>>=0,r>>>=0,n>>>=0,o>>>=0,this===t)return 0;for(var i=o-n,f=r-e,s=Math.min(i,f),a=this.slice(n,o),h=t.slice(e,r),l=0;l<s;++l)if(a[l]!==h[l]){i=a[l],f=h[l];break}return i<f?-1:+(f<i)},u.prototype.includes=function(t,e,r){return -1!==this.indexOf(t,e,r)},u.prototype.indexOf=function(t,e,r){return v(this,t,e,r,!0)},u.prototype.lastIndexOf=function(t,e,r){return v(this,t,e,r,!1)},u.prototype.write=function(t,e,r,n){if(void 0===e)n="utf8",r=this.length,e=0;else if(void 0===r&&"string"==typeof e)n=e,r=this.length,e=0;else if(isFinite(e))e>>>=0,isFinite(r)?(r>>>=0,void 0===n&&(n="utf8")):(n=r,r=void 0);else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var o,i,f,u,s,a,h,l,c=this.length-e;if((void 0===r||r>c)&&(r=c),t.length>0&&(r<0||e<0)||e>this.length)throw RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var p=!1;;)switch(n){case"hex":return function(t,e,r,n){r=Number(r)||0;var o=t.length-r;n?(n=Number(n))>o&&(n=o):n=o;var i=e.length;n>i/2&&(n=i/2);for(var f=0;f<n;++f){var u,s=parseInt(e.substr(2*f,2),16);if((u=s)!=u)break;t[r+f]=s}return f}(this,t,e,r);case"utf8":case"utf-8":return o=e,i=r,S(U(t,this.length-o),this,o,i);case"ascii":case"latin1":case"binary":return f=e,u=r,S(function(t){for(var e=[],r=0;r<t.length;++r)e.push(255&t.charCodeAt(r));return e}(t),this,f,u);case"base64":return s=e,a=r,S(k(t),this,s,a);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return h=e,l=r,S(function(t,e){for(var r,n,o=[],i=0;i<t.length&&!((e-=2)<0);++i)n=(r=t.charCodeAt(i))>>8,o.push(r%256),o.push(n);return o}(t,this.length-h),this,h,l);default:if(p)throw TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),p=!0}},u.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},u.prototype.slice=function(t,e){var r=this.length;t=~~t,e=void 0===e?r:~~e,t<0?(t+=r)<0&&(t=0):t>r&&(t=r),e<0?(e+=r)<0&&(e=0):e>r&&(e=r),e<t&&(e=t);var n=this.subarray(t,e);return Object.setPrototypeOf(n,u.prototype),n},u.prototype.readUintLE=u.prototype.readUIntLE=function(t,e,r){t>>>=0,e>>>=0,r||w(t,e,this.length);for(var n=this[t],o=1,i=0;++i<e&&(o*=256);)n+=this[t+i]*o;return n},u.prototype.readUintBE=u.prototype.readUIntBE=function(t,e,r){t>>>=0,e>>>=0,r||w(t,e,this.length);for(var n=this[t+--e],o=1;e>0&&(o*=256);)n+=this[t+--e]*o;return n},u.prototype.readUint8=u.prototype.readUInt8=function(t,e){return t>>>=0,e||w(t,1,this.length),this[t]},u.prototype.readUint16LE=u.prototype.readUInt16LE=function(t,e){return t>>>=0,e||w(t,2,this.length),this[t]|this[t+1]<<8},u.prototype.readUint16BE=u.prototype.readUInt16BE=function(t,e){return t>>>=0,e||w(t,2,this.length),this[t]<<8|this[t+1]},u.prototype.readUint32LE=u.prototype.readUInt32LE=function(t,e){return t>>>=0,e||w(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+0x1000000*this[t+3]},u.prototype.readUint32BE=u.prototype.readUInt32BE=function(t,e){return t>>>=0,e||w(t,4,this.length),0x1000000*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},u.prototype.readIntLE=function(t,e,r){t>>>=0,e>>>=0,r||w(t,e,this.length);for(var n=this[t],o=1,i=0;++i<e&&(o*=256);)n+=this[t+i]*o;return n>=(o*=128)&&(n-=Math.pow(2,8*e)),n},u.prototype.readIntBE=function(t,e,r){t>>>=0,e>>>=0,r||w(t,e,this.length);for(var n=e,o=1,i=this[t+--n];n>0&&(o*=256);)i+=this[t+--n]*o;return i>=(o*=128)&&(i-=Math.pow(2,8*e)),i},u.prototype.readInt8=function(t,e){return(t>>>=0,e||w(t,1,this.length),128&this[t])?-((255-this[t]+1)*1):this[t]},u.prototype.readInt16LE=function(t,e){t>>>=0,e||w(t,2,this.length);var r=this[t]|this[t+1]<<8;return 32768&r?0xffff0000|r:r},u.prototype.readInt16BE=function(t,e){t>>>=0,e||w(t,2,this.length);var r=this[t+1]|this[t]<<8;return 32768&r?0xffff0000|r:r},u.prototype.readInt32LE=function(t,e){return t>>>=0,e||w(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},u.prototype.readInt32BE=function(t,e){return t>>>=0,e||w(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},u.prototype.readFloatLE=function(t,e){return t>>>=0,e||w(t,4,this.length),o.read(this,t,!0,23,4)},u.prototype.readFloatBE=function(t,e){return t>>>=0,e||w(t,4,this.length),o.read(this,t,!1,23,4)},u.prototype.readDoubleLE=function(t,e){return t>>>=0,e||w(t,8,this.length),o.read(this,t,!0,52,8)},u.prototype.readDoubleBE=function(t,e){return t>>>=0,e||w(t,8,this.length),o.read(this,t,!1,52,8)},u.prototype.writeUintLE=u.prototype.writeUIntLE=function(t,e,r,n){if(t*=1,e>>>=0,r>>>=0,!n){var o=Math.pow(2,8*r)-1;E(this,t,e,r,o,0)}var i=1,f=0;for(this[e]=255&t;++f<r&&(i*=256);)this[e+f]=t/i&255;return e+r},u.prototype.writeUintBE=u.prototype.writeUIntBE=function(t,e,r,n){if(t*=1,e>>>=0,r>>>=0,!n){var o=Math.pow(2,8*r)-1;E(this,t,e,r,o,0)}var i=r-1,f=1;for(this[e+i]=255&t;--i>=0&&(f*=256);)this[e+i]=t/f&255;return e+r},u.prototype.writeUint8=u.prototype.writeUInt8=function(t,e,r){return t*=1,e>>>=0,r||E(this,t,e,1,255,0),this[e]=255&t,e+1},u.prototype.writeUint16LE=u.prototype.writeUInt16LE=function(t,e,r){return t*=1,e>>>=0,r||E(this,t,e,2,65535,0),this[e]=255&t,this[e+1]=t>>>8,e+2},u.prototype.writeUint16BE=u.prototype.writeUInt16BE=function(t,e,r){return t*=1,e>>>=0,r||E(this,t,e,2,65535,0),this[e]=t>>>8,this[e+1]=255&t,e+2},u.prototype.writeUint32LE=u.prototype.writeUInt32LE=function(t,e,r){return t*=1,e>>>=0,r||E(this,t,e,4,0xffffffff,0),this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t,e+4},u.prototype.writeUint32BE=u.prototype.writeUInt32BE=function(t,e,r){return t*=1,e>>>=0,r||E(this,t,e,4,0xffffffff,0),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},u.prototype.writeIntLE=function(t,e,r,n){if(t*=1,e>>>=0,!n){var o=Math.pow(2,8*r-1);E(this,t,e,r,o-1,-o)}var i=0,f=1,u=0;for(this[e]=255&t;++i<r&&(f*=256);)t<0&&0===u&&0!==this[e+i-1]&&(u=1),this[e+i]=(t/f>>0)-u&255;return e+r},u.prototype.writeIntBE=function(t,e,r,n){if(t*=1,e>>>=0,!n){var o=Math.pow(2,8*r-1);E(this,t,e,r,o-1,-o)}var i=r-1,f=1,u=0;for(this[e+i]=255&t;--i>=0&&(f*=256);)t<0&&0===u&&0!==this[e+i+1]&&(u=1),this[e+i]=(t/f>>0)-u&255;return e+r},u.prototype.writeInt8=function(t,e,r){return t*=1,e>>>=0,r||E(this,t,e,1,127,-128),t<0&&(t=255+t+1),this[e]=255&t,e+1},u.prototype.writeInt16LE=function(t,e,r){return t*=1,e>>>=0,r||E(this,t,e,2,32767,-32768),this[e]=255&t,this[e+1]=t>>>8,e+2},u.prototype.writeInt16BE=function(t,e,r){return t*=1,e>>>=0,r||E(this,t,e,2,32767,-32768),this[e]=t>>>8,this[e+1]=255&t,e+2},u.prototype.writeInt32LE=function(t,e,r){return t*=1,e>>>=0,r||E(this,t,e,4,0x7fffffff,-0x80000000),this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24,e+4},u.prototype.writeInt32BE=function(t,e,r){return t*=1,e>>>=0,r||E(this,t,e,4,0x7fffffff,-0x80000000),t<0&&(t=0xffffffff+t+1),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},u.prototype.writeFloatLE=function(t,e,r){return x(this,t,e,!0,r)},u.prototype.writeFloatBE=function(t,e,r){return x(this,t,e,!1,r)},u.prototype.writeDoubleLE=function(t,e,r){return O(this,t,e,!0,r)},u.prototype.writeDoubleBE=function(t,e,r){return O(this,t,e,!1,r)},u.prototype.copy=function(t,e,r,n){if(!u.isBuffer(t))throw TypeError("argument should be a Buffer");if(r||(r=0),n||0===n||(n=this.length),e>=t.length&&(e=t.length),e||(e=0),n>0&&n<r&&(n=r),n===r||0===t.length||0===this.length)return 0;if(e<0)throw RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw RangeError("Index out of range");if(n<0)throw RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),t.length-e<n-r&&(n=t.length-e+r);var o=n-r;return this===t&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(e,r,n):Uint8Array.prototype.set.call(t,this.subarray(r,n),e),o},u.prototype.fill=function(t,e,r,n){if("string"==typeof t){if("string"==typeof e?(n=e,e=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),void 0!==n&&"string"!=typeof n)throw TypeError("encoding must be a string");if("string"==typeof n&&!u.isEncoding(n))throw TypeError("Unknown encoding: "+n);if(1===t.length){var o,i=t.charCodeAt(0);("utf8"===n&&i<128||"latin1"===n)&&(t=i)}}else"number"==typeof t?t&=255:"boolean"==typeof t&&(t=Number(t));if(e<0||this.length<e||this.length<r)throw RangeError("Out of range index");if(r<=e)return this;if(e>>>=0,r=void 0===r?this.length:r>>>0,t||(t=0),"number"==typeof t)for(o=e;o<r;++o)this[o]=t;else{var f=u.isBuffer(t)?t:u.from(t,n),s=f.length;if(0===s)throw TypeError('The value "'+t+'" is invalid for argument "value"');for(o=0;o<r-e;++o)this[o+e]=f[o%s]}return this};var B=/[^+/0-9A-Za-z-_]/g;function U(t,e){e=e||1/0;for(var r,n=t.length,o=null,i=[],f=0;f<n;++f){if((r=t.charCodeAt(f))>55295&&r<57344){if(!o){if(r>56319||f+1===n){(e-=3)>-1&&i.push(239,191,189);continue}o=r;continue}if(r<56320){(e-=3)>-1&&i.push(239,191,189),o=r;continue}r=(o-55296<<10|r-56320)+65536}else o&&(e-=3)>-1&&i.push(239,191,189);if(o=null,r<128){if((e-=1)<0)break;i.push(r)}else if(r<2048){if((e-=2)<0)break;i.push(r>>6|192,63&r|128)}else if(r<65536){if((e-=3)<0)break;i.push(r>>12|224,r>>6&63|128,63&r|128)}else if(r<1114112){if((e-=4)<0)break;i.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}else throw Error("Invalid code point")}return i}function k(t){return n.toByteArray(function(t){if((t=(t=t.split("=")[0]).trim().replace(B,"")).length<2)return"";for(;t.length%4!=0;)t+="=";return t}(t))}function S(t,e,r,n){for(var o=0;o<n&&!(o+r>=e.length)&&!(o>=t.length);++o)e[o+r]=t[o];return o}function j(t,e){return t instanceof e||null!=t&&null!=t.constructor&&null!=t.constructor.name&&t.constructor.name===e.name}var M=function(){for(var t="0123456789abcdef",e=Array(256),r=0;r<16;++r)for(var n=16*r,o=0;o<16;++o)e[n+o]=t[r]+t[o];return e}()},4436:(t,e,r)=>{"use strict";r.d(e,{k5:()=>h});var n=r(2115),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=n.createContext&&n.createContext(o),f=["attr","size","title"];function u(){return(u=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach(function(e){var n,o,i;n=t,o=e,i=r[e],(o=function(t){var e=function(t,e){if("object"!=typeof t||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:e+""}(o))in n?Object.defineProperty(n,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[o]=i}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}function h(t){return e=>n.createElement(l,u({attr:a({},t.attr)},e),function t(e){return e&&e.map((e,r)=>n.createElement(e.tag,a({key:r},e.attr),t(e.child)))}(t.child))}function l(t){var e=e=>{var r,{attr:o,size:i,title:s}=t,h=function(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r={};for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){if(e.indexOf(n)>=0)continue;r[n]=t[n]}return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}(t,f),l=i||e.size||"1em";return e.className&&(r=e.className),t.className&&(r=(r?r+" ":"")+t.className),n.createElement("svg",u({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,o,h,{className:r,style:a(a({color:t.color||e.color},e.style),t.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),s&&n.createElement("title",null,s),t.children)};return void 0!==i?n.createElement(i.Consumer,null,t=>e(t)):e(o)}},4869:(t,e,r)=>{"use strict";r.d(e,{A:()=>n});let n=(0,r(9946).A)("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]])},6767:(t,e,r)=>{"use strict";r.d(e,{A:()=>n});let n=(0,r(9946).A)("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]])},7610:(t,e)=>{e.read=function(t,e,r,n,o){var i,f,u=8*o-n-1,s=(1<<u)-1,a=s>>1,h=-7,l=r?o-1:0,c=r?-1:1,p=t[e+l];for(l+=c,i=p&(1<<-h)-1,p>>=-h,h+=u;h>0;i=256*i+t[e+l],l+=c,h-=8);for(f=i&(1<<-h)-1,i>>=-h,h+=n;h>0;f=256*f+t[e+l],l+=c,h-=8);if(0===i)i=1-a;else{if(i===s)return f?NaN:1/0*(p?-1:1);f+=Math.pow(2,n),i-=a}return(p?-1:1)*f*Math.pow(2,i-n)},e.write=function(t,e,r,n,o,i){var f,u,s,a=8*i-o-1,h=(1<<a)-1,l=h>>1,c=5960464477539062e-23*(23===o),p=n?0:i-1,y=n?1:-1,d=+(e<0||0===e&&1/e<0);for(isNaN(e=Math.abs(e))||e===1/0?(u=+!!isNaN(e),f=h):(f=Math.floor(Math.log(e)/Math.LN2),e*(s=Math.pow(2,-f))<1&&(f--,s*=2),f+l>=1?e+=c/s:e+=c*Math.pow(2,1-l),e*s>=2&&(f++,s/=2),f+l>=h?(u=0,f=h):f+l>=1?(u=(e*s-1)*Math.pow(2,o),f+=l):(u=e*Math.pow(2,l-1)*Math.pow(2,o),f=0));o>=8;t[r+p]=255&u,p+=y,u/=256,o-=8);for(f=f<<o|u,a+=o;a>0;t[r+p]=255&f,p+=y,f/=256,a-=8);t[r+p-y]|=128*d}},7719:(t,e)=>{"use strict";e.byteLength=function(t){var e=s(t),r=e[0],n=e[1];return(r+n)*3/4-n},e.toByteArray=function(t){var e,r,i=s(t),f=i[0],u=i[1],a=new o((f+u)*3/4-u),h=0,l=u>0?f-4:f;for(r=0;r<l;r+=4)e=n[t.charCodeAt(r)]<<18|n[t.charCodeAt(r+1)]<<12|n[t.charCodeAt(r+2)]<<6|n[t.charCodeAt(r+3)],a[h++]=e>>16&255,a[h++]=e>>8&255,a[h++]=255&e;return 2===u&&(e=n[t.charCodeAt(r)]<<2|n[t.charCodeAt(r+1)]>>4,a[h++]=255&e),1===u&&(e=n[t.charCodeAt(r)]<<10|n[t.charCodeAt(r+1)]<<4|n[t.charCodeAt(r+2)]>>2,a[h++]=e>>8&255,a[h++]=255&e),a},e.fromByteArray=function(t){for(var e,n=t.length,o=n%3,i=[],f=0,u=n-o;f<u;f+=16383)i.push(function(t,e,n){for(var o,i=[],f=e;f<n;f+=3)o=(t[f]<<16&0xff0000)+(t[f+1]<<8&65280)+(255&t[f+2]),i.push(r[o>>18&63]+r[o>>12&63]+r[o>>6&63]+r[63&o]);return i.join("")}(t,f,f+16383>u?u:f+16383));return 1===o?i.push(r[(e=t[n-1])>>2]+r[e<<4&63]+"=="):2===o&&i.push(r[(e=(t[n-2]<<8)+t[n-1])>>10]+r[e>>4&63]+r[e<<2&63]+"="),i.join("")};for(var r=[],n=[],o="undefined"!=typeof Uint8Array?Uint8Array:Array,i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",f=0,u=i.length;f<u;++f)r[f]=i[f],n[i.charCodeAt(f)]=f;function s(t){var e=t.length;if(e%4>0)throw Error("Invalid string. Length must be a multiple of 4");var r=t.indexOf("=");-1===r&&(r=e);var n=r===e?0:4-r%4;return[r,n]}n["-".charCodeAt(0)]=62,n["_".charCodeAt(0)]=63},8164:(t,e,r)=>{"use strict";r.d(e,{A:()=>n});let n=(0,r(9946).A)("Link",[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]])},8832:(t,e,r)=>{"use strict";r.d(e,{A:()=>n});let n=(0,r(9946).A)("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]])},9524:(t,e,r)=>{"use strict";r.d(e,{A:()=>h});var n=r(5155),o=r(2115),i=r(8975),f=r(4052);let u=[],s={width:"100%",height:"100%"},a=(0,o.forwardRef)(function(t,e){var r;let{className:i,children:a,debounceTime:h=300,ignoreDimensions:l=u,parentSizeStyles:c,enableDebounceLeadingCall:p=!0,resizeObserverPolyfill:y,...d}=t,g=(0,o.useRef)(null),v=(0,o.useRef)(0),[m,b]=(0,o.useState)({width:0,height:0,top:0,left:0}),w=(0,o.useMemo)(()=>{let t=Array.isArray(l)?l:[l];return f(e=>{b(r=>Object.keys(r).filter(t=>r[t]!==e[t]).every(e=>t.includes(e))?r:e)},h,{leading:p})},[h,p,l]);return(0,o.useEffect)(()=>{let t=new(y||window.ResizeObserver)(t=>{t.forEach(t=>{var e;let{left:r,top:n,width:o,height:i}=null!==(e=null==t?void 0:t.contentRect)&&void 0!==e?e:{};v.current=window.requestAnimationFrame(()=>{w({width:o,height:i,top:n,left:r})})})});return g.current&&t.observe(g.current),()=>{window.cancelAnimationFrame(v.current),t.disconnect(),w.cancel()}},[w,y]),(0,n.jsx)("div",{style:{...s,...c},ref:(r=[e,g],t=>{r.forEach(e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)})}),className:i,...d,children:a({...m,ref:g.current,resize:w})})}),h=(0,o.forwardRef)((t,e)=>{let{scene:r,style:f,onSplineMouseDown:u,onSplineMouseUp:s,onSplineMouseHover:h,onSplineKeyDown:l,onSplineKeyUp:c,onSplineStart:p,onSplineLookAt:y,onSplineFollow:d,onSplineScroll:g,onLoad:v,renderOnDemand:m=!0,children:b,...w}=t,E=(0,o.useRef)(null),[A,x]=(0,o.useState)(!0),[O,B]=(0,o.useState)();if(O)throw O;return(0,o.useEffect)(()=>{let t;x(!0);let e=[{name:"mouseDown",cb:u},{name:"mouseUp",cb:s},{name:"mouseHover",cb:h},{name:"keyDown",cb:l},{name:"keyUp",cb:c},{name:"start",cb:p},{name:"lookAt",cb:y},{name:"follow",cb:d},{name:"scroll",cb:g}];return E.current&&(t=new i.l(E.current,{renderOnDemand:m}),(async function(){for(let n of(await t.load(r),e))n.cb&&t.addEventListener(n.name,n.cb);x(!1),null==v||v(t)})().catch(t=>{B(t)})),()=>{for(let r of e)r.cb&&t.removeEventListener(r.name,r.cb);t.dispose()}},[r]),(0,n.jsx)(a,{ref:e,parentSizeStyles:{overflow:"hidden",...f},debounceTime:50,...w,children:()=>(0,n.jsxs)(n.Fragment,{children:[A&&b,(0,n.jsx)("canvas",{ref:E,style:{display:A?"none":"block"}})]})})})}}]);