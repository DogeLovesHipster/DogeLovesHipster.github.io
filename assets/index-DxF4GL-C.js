function u1(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const a=Object.getOwnPropertyDescriptor(i,r);a&&Object.defineProperty(t,r,a.get?a:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=n(r);fetch(r.href,a)}})();function B0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var H0={exports:{}},qc={},G0={exports:{}},Ye={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var No=Symbol.for("react.element"),f1=Symbol.for("react.portal"),d1=Symbol.for("react.fragment"),h1=Symbol.for("react.strict_mode"),p1=Symbol.for("react.profiler"),m1=Symbol.for("react.provider"),g1=Symbol.for("react.context"),v1=Symbol.for("react.forward_ref"),_1=Symbol.for("react.suspense"),y1=Symbol.for("react.memo"),x1=Symbol.for("react.lazy"),tm=Symbol.iterator;function S1(t){return t===null||typeof t!="object"?null:(t=tm&&t[tm]||t["@@iterator"],typeof t=="function"?t:null)}var V0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},W0=Object.assign,j0={};function ms(t,e,n){this.props=t,this.context=e,this.refs=j0,this.updater=n||V0}ms.prototype.isReactComponent={};ms.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ms.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function X0(){}X0.prototype=ms.prototype;function Rh(t,e,n){this.props=t,this.context=e,this.refs=j0,this.updater=n||V0}var Ch=Rh.prototype=new X0;Ch.constructor=Rh;W0(Ch,ms.prototype);Ch.isPureReactComponent=!0;var nm=Array.isArray,$0=Object.prototype.hasOwnProperty,Ph={current:null},Y0={key:!0,ref:!0,__self:!0,__source:!0};function q0(t,e,n){var i,r={},a=null,s=null;if(e!=null)for(i in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(a=""+e.key),e)$0.call(e,i)&&!Y0.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:No,type:t,key:a,ref:s,props:r,_owner:Ph.current}}function E1(t,e){return{$$typeof:No,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Lh(t){return typeof t=="object"&&t!==null&&t.$$typeof===No}function M1(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var im=/\/+/g;function Nu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?M1(""+t.key):e.toString(36)}function Xl(t,e,n,i,r){var a=typeof t;(a==="undefined"||a==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(a){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case No:case f1:s=!0}}if(s)return s=t,r=r(s),t=i===""?"."+Nu(s,0):i,nm(r)?(n="",t!=null&&(n=t.replace(im,"$&/")+"/"),Xl(r,e,n,"",function(c){return c})):r!=null&&(Lh(r)&&(r=E1(r,n+(!r.key||s&&s.key===r.key?"":(""+r.key).replace(im,"$&/")+"/")+t)),e.push(r)),1;if(s=0,i=i===""?".":i+":",nm(t))for(var o=0;o<t.length;o++){a=t[o];var l=i+Nu(a,o);s+=Xl(a,e,n,l,r)}else if(l=S1(t),typeof l=="function")for(t=l.call(t),o=0;!(a=t.next()).done;)a=a.value,l=i+Nu(a,o++),s+=Xl(a,e,n,l,r);else if(a==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function qo(t,e,n){if(t==null)return t;var i=[],r=0;return Xl(t,i,"","",function(a){return e.call(n,a,r++)}),i}function w1(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var sn={current:null},$l={transition:null},T1={ReactCurrentDispatcher:sn,ReactCurrentBatchConfig:$l,ReactCurrentOwner:Ph};Ye.Children={map:qo,forEach:function(t,e,n){qo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return qo(t,function(){e++}),e},toArray:function(t){return qo(t,function(e){return e})||[]},only:function(t){if(!Lh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ye.Component=ms;Ye.Fragment=d1;Ye.Profiler=p1;Ye.PureComponent=Rh;Ye.StrictMode=h1;Ye.Suspense=_1;Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T1;Ye.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=W0({},t.props),r=t.key,a=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(a=e.ref,s=Ph.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)$0.call(e,l)&&!Y0.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:No,type:t.type,key:r,ref:a,props:i,_owner:s}};Ye.createContext=function(t){return t={$$typeof:g1,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:m1,_context:t},t.Consumer=t};Ye.createElement=q0;Ye.createFactory=function(t){var e=q0.bind(null,t);return e.type=t,e};Ye.createRef=function(){return{current:null}};Ye.forwardRef=function(t){return{$$typeof:v1,render:t}};Ye.isValidElement=Lh;Ye.lazy=function(t){return{$$typeof:x1,_payload:{_status:-1,_result:t},_init:w1}};Ye.memo=function(t,e){return{$$typeof:y1,type:t,compare:e===void 0?null:e}};Ye.startTransition=function(t){var e=$l.transition;$l.transition={};try{t()}finally{$l.transition=e}};Ye.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Ye.useCallback=function(t,e){return sn.current.useCallback(t,e)};Ye.useContext=function(t){return sn.current.useContext(t)};Ye.useDebugValue=function(){};Ye.useDeferredValue=function(t){return sn.current.useDeferredValue(t)};Ye.useEffect=function(t,e){return sn.current.useEffect(t,e)};Ye.useId=function(){return sn.current.useId()};Ye.useImperativeHandle=function(t,e,n){return sn.current.useImperativeHandle(t,e,n)};Ye.useInsertionEffect=function(t,e){return sn.current.useInsertionEffect(t,e)};Ye.useLayoutEffect=function(t,e){return sn.current.useLayoutEffect(t,e)};Ye.useMemo=function(t,e){return sn.current.useMemo(t,e)};Ye.useReducer=function(t,e,n){return sn.current.useReducer(t,e,n)};Ye.useRef=function(t){return sn.current.useRef(t)};Ye.useState=function(t){return sn.current.useState(t)};Ye.useSyncExternalStore=function(t,e,n){return sn.current.useSyncExternalStore(t,e,n)};Ye.useTransition=function(){return sn.current.useTransition()};Ye.version="18.2.0";G0.exports=Ye;var se=G0.exports;const Un=B0(se),b1=u1({__proto__:null,default:Un},[se]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var A1=se,R1=Symbol.for("react.element"),C1=Symbol.for("react.fragment"),P1=Object.prototype.hasOwnProperty,L1=A1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,N1={key:!0,ref:!0,__self:!0,__source:!0};function K0(t,e,n){var i,r={},a=null,s=null;n!==void 0&&(a=""+n),e.key!==void 0&&(a=""+e.key),e.ref!==void 0&&(s=e.ref);for(i in e)P1.call(e,i)&&!N1.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:R1,type:t,key:a,ref:s,props:r,_owner:L1.current}}qc.Fragment=C1;qc.jsx=K0;qc.jsxs=K0;H0.exports=qc;var D=H0.exports,Kf={},J0={exports:{}},Tn={},Z0={exports:{}},Q0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(L,O){var V=L.length;L.push(O);e:for(;0<V;){var J=V-1>>>1,oe=L[J];if(0<r(oe,O))L[J]=O,L[V]=oe,V=J;else break e}}function n(L){return L.length===0?null:L[0]}function i(L){if(L.length===0)return null;var O=L[0],V=L.pop();if(V!==O){L[0]=V;e:for(var J=0,oe=L.length,Ce=oe>>>1;J<Ce;){var H=2*(J+1)-1,ee=L[H],fe=H+1,Te=L[fe];if(0>r(ee,V))fe<oe&&0>r(Te,ee)?(L[J]=Te,L[fe]=V,J=fe):(L[J]=ee,L[H]=V,J=H);else if(fe<oe&&0>r(Te,V))L[J]=Te,L[fe]=V,J=fe;else break e}}return O}function r(L,O){var V=L.sortIndex-O.sortIndex;return V!==0?V:L.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;t.unstable_now=function(){return a.now()}}else{var s=Date,o=s.now();t.unstable_now=function(){return s.now()-o}}var l=[],c=[],u=1,f=null,h=3,m=!1,g=!1,y=!1,p=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(L){for(var O=n(c);O!==null;){if(O.callback===null)i(c);else if(O.startTime<=L)i(c),O.sortIndex=O.expirationTime,e(l,O);else break;O=n(c)}}function S(L){if(y=!1,v(L),!g)if(n(l)!==null)g=!0,X(A);else{var O=n(c);O!==null&&K(S,O.startTime-L)}}function A(L,O){g=!1,y&&(y=!1,d(C),C=-1),m=!0;var V=h;try{for(v(O),f=n(l);f!==null&&(!(f.expirationTime>O)||L&&!R());){var J=f.callback;if(typeof J=="function"){f.callback=null,h=f.priorityLevel;var oe=J(f.expirationTime<=O);O=t.unstable_now(),typeof oe=="function"?f.callback=oe:f===n(l)&&i(l),v(O)}else i(l);f=n(l)}if(f!==null)var Ce=!0;else{var H=n(c);H!==null&&K(S,H.startTime-O),Ce=!1}return Ce}finally{f=null,h=V,m=!1}}var T=!1,w=null,C=-1,W=5,x=-1;function R(){return!(t.unstable_now()-x<W)}function Z(){if(w!==null){var L=t.unstable_now();x=L;var O=!0;try{O=w(!0,L)}finally{O?Q():(T=!1,w=null)}}else T=!1}var Q;if(typeof _=="function")Q=function(){_(Z)};else if(typeof MessageChannel<"u"){var P=new MessageChannel,$=P.port2;P.port1.onmessage=Z,Q=function(){$.postMessage(null)}}else Q=function(){p(Z,0)};function X(L){w=L,T||(T=!0,Q())}function K(L,O){C=p(function(){L(t.unstable_now())},O)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(L){L.callback=null},t.unstable_continueExecution=function(){g||m||(g=!0,X(A))},t.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<L?Math.floor(1e3/L):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(L){switch(h){case 1:case 2:case 3:var O=3;break;default:O=h}var V=h;h=O;try{return L()}finally{h=V}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(L,O){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var V=h;h=L;try{return O()}finally{h=V}},t.unstable_scheduleCallback=function(L,O,V){var J=t.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?J+V:J):V=J,L){case 1:var oe=-1;break;case 2:oe=250;break;case 5:oe=1073741823;break;case 4:oe=1e4;break;default:oe=5e3}return oe=V+oe,L={id:u++,callback:O,priorityLevel:L,startTime:V,expirationTime:oe,sortIndex:-1},V>J?(L.sortIndex=V,e(c,L),n(l)===null&&L===n(c)&&(y?(d(C),C=-1):y=!0,K(S,V-J))):(L.sortIndex=oe,e(l,L),g||m||(g=!0,X(A))),L},t.unstable_shouldYield=R,t.unstable_wrapCallback=function(L){var O=h;return function(){var V=h;h=O;try{return L.apply(this,arguments)}finally{h=V}}}})(Q0);Z0.exports=Q0;var D1=Z0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var e_=se,wn=D1;function ne(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var t_=new Set,ro={};function fa(t,e){ns(t,e),ns(t+"Capture",e)}function ns(t,e){for(ro[t]=e,t=0;t<e.length;t++)t_.add(e[t])}var Li=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Jf=Object.prototype.hasOwnProperty,I1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,rm={},am={};function U1(t){return Jf.call(am,t)?!0:Jf.call(rm,t)?!1:I1.test(t)?am[t]=!0:(rm[t]=!0,!1)}function O1(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function k1(t,e,n,i){if(e===null||typeof e>"u"||O1(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function on(t,e,n,i,r,a,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=a,this.removeEmptyString=s}var jt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){jt[t]=new on(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];jt[e]=new on(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){jt[t]=new on(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){jt[t]=new on(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){jt[t]=new on(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){jt[t]=new on(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){jt[t]=new on(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){jt[t]=new on(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){jt[t]=new on(t,5,!1,t.toLowerCase(),null,!1,!1)});var Nh=/[\-:]([a-z])/g;function Dh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Nh,Dh);jt[e]=new on(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Nh,Dh);jt[e]=new on(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Nh,Dh);jt[e]=new on(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){jt[t]=new on(t,1,!1,t.toLowerCase(),null,!1,!1)});jt.xlinkHref=new on("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){jt[t]=new on(t,1,!1,t.toLowerCase(),null,!0,!0)});function Ih(t,e,n,i){var r=jt.hasOwnProperty(e)?jt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(k1(e,n,r,i)&&(n=null),i||r===null?U1(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Bi=e_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ko=Symbol.for("react.element"),Pa=Symbol.for("react.portal"),La=Symbol.for("react.fragment"),Uh=Symbol.for("react.strict_mode"),Zf=Symbol.for("react.profiler"),n_=Symbol.for("react.provider"),i_=Symbol.for("react.context"),Oh=Symbol.for("react.forward_ref"),Qf=Symbol.for("react.suspense"),ed=Symbol.for("react.suspense_list"),kh=Symbol.for("react.memo"),Ji=Symbol.for("react.lazy"),r_=Symbol.for("react.offscreen"),sm=Symbol.iterator;function As(t){return t===null||typeof t!="object"?null:(t=sm&&t[sm]||t["@@iterator"],typeof t=="function"?t:null)}var _t=Object.assign,Du;function Gs(t){if(Du===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Du=e&&e[1]||""}return`
`+Du+t}var Iu=!1;function Uu(t,e){if(!t||Iu)return"";Iu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),a=i.stack.split(`
`),s=r.length-1,o=a.length-1;1<=s&&0<=o&&r[s]!==a[o];)o--;for(;1<=s&&0<=o;s--,o--)if(r[s]!==a[o]){if(s!==1||o!==1)do if(s--,o--,0>o||r[s]!==a[o]){var l=`
`+r[s].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=s&&0<=o);break}}}finally{Iu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Gs(t):""}function F1(t){switch(t.tag){case 5:return Gs(t.type);case 16:return Gs("Lazy");case 13:return Gs("Suspense");case 19:return Gs("SuspenseList");case 0:case 2:case 15:return t=Uu(t.type,!1),t;case 11:return t=Uu(t.type.render,!1),t;case 1:return t=Uu(t.type,!0),t;default:return""}}function td(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case La:return"Fragment";case Pa:return"Portal";case Zf:return"Profiler";case Uh:return"StrictMode";case Qf:return"Suspense";case ed:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case i_:return(t.displayName||"Context")+".Consumer";case n_:return(t._context.displayName||"Context")+".Provider";case Oh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case kh:return e=t.displayName||null,e!==null?e:td(t.type)||"Memo";case Ji:e=t._payload,t=t._init;try{return td(t(e))}catch{}}return null}function z1(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return td(e);case 8:return e===Uh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function _r(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function a_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function B1(t){var e=a_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,a=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(s){i=""+s,a.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(s){i=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Jo(t){t._valueTracker||(t._valueTracker=B1(t))}function s_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=a_(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function fc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function nd(t,e){var n=e.checked;return _t({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function om(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=_r(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function o_(t,e){e=e.checked,e!=null&&Ih(t,"checked",e,!1)}function id(t,e){o_(t,e);var n=_r(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?rd(t,e.type,n):e.hasOwnProperty("defaultValue")&&rd(t,e.type,_r(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function lm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function rd(t,e,n){(e!=="number"||fc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Vs=Array.isArray;function $a(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+_r(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function ad(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ne(91));return _t({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function cm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ne(92));if(Vs(n)){if(1<n.length)throw Error(ne(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:_r(n)}}function l_(t,e){var n=_r(e.value),i=_r(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function um(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function c_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function sd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?c_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Zo,u_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Zo=Zo||document.createElement("div"),Zo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Zo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ao(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var $s={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},H1=["Webkit","ms","Moz","O"];Object.keys($s).forEach(function(t){H1.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),$s[e]=$s[t]})});function f_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||$s.hasOwnProperty(t)&&$s[t]?(""+e).trim():e+"px"}function d_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=f_(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var G1=_t({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function od(t,e){if(e){if(G1[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ne(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ne(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ne(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ne(62))}}function ld(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var cd=null;function Fh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ud=null,Ya=null,qa=null;function fm(t){if(t=Uo(t)){if(typeof ud!="function")throw Error(ne(280));var e=t.stateNode;e&&(e=eu(e),ud(t.stateNode,t.type,e))}}function h_(t){Ya?qa?qa.push(t):qa=[t]:Ya=t}function p_(){if(Ya){var t=Ya,e=qa;if(qa=Ya=null,fm(t),e)for(t=0;t<e.length;t++)fm(e[t])}}function m_(t,e){return t(e)}function g_(){}var Ou=!1;function v_(t,e,n){if(Ou)return t(e,n);Ou=!0;try{return m_(t,e,n)}finally{Ou=!1,(Ya!==null||qa!==null)&&(g_(),p_())}}function so(t,e){var n=t.stateNode;if(n===null)return null;var i=eu(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ne(231,e,typeof n));return n}var fd=!1;if(Li)try{var Rs={};Object.defineProperty(Rs,"passive",{get:function(){fd=!0}}),window.addEventListener("test",Rs,Rs),window.removeEventListener("test",Rs,Rs)}catch{fd=!1}function V1(t,e,n,i,r,a,s,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var Ys=!1,dc=null,hc=!1,dd=null,W1={onError:function(t){Ys=!0,dc=t}};function j1(t,e,n,i,r,a,s,o,l){Ys=!1,dc=null,V1.apply(W1,arguments)}function X1(t,e,n,i,r,a,s,o,l){if(j1.apply(this,arguments),Ys){if(Ys){var c=dc;Ys=!1,dc=null}else throw Error(ne(198));hc||(hc=!0,dd=c)}}function da(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function __(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function dm(t){if(da(t)!==t)throw Error(ne(188))}function $1(t){var e=t.alternate;if(!e){if(e=da(t),e===null)throw Error(ne(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var a=r.alternate;if(a===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===a.child){for(a=r.child;a;){if(a===n)return dm(r),t;if(a===i)return dm(r),e;a=a.sibling}throw Error(ne(188))}if(n.return!==i.return)n=r,i=a;else{for(var s=!1,o=r.child;o;){if(o===n){s=!0,n=r,i=a;break}if(o===i){s=!0,i=r,n=a;break}o=o.sibling}if(!s){for(o=a.child;o;){if(o===n){s=!0,n=a,i=r;break}if(o===i){s=!0,i=a,n=r;break}o=o.sibling}if(!s)throw Error(ne(189))}}if(n.alternate!==i)throw Error(ne(190))}if(n.tag!==3)throw Error(ne(188));return n.stateNode.current===n?t:e}function y_(t){return t=$1(t),t!==null?x_(t):null}function x_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=x_(t);if(e!==null)return e;t=t.sibling}return null}var S_=wn.unstable_scheduleCallback,hm=wn.unstable_cancelCallback,Y1=wn.unstable_shouldYield,q1=wn.unstable_requestPaint,wt=wn.unstable_now,K1=wn.unstable_getCurrentPriorityLevel,zh=wn.unstable_ImmediatePriority,E_=wn.unstable_UserBlockingPriority,pc=wn.unstable_NormalPriority,J1=wn.unstable_LowPriority,M_=wn.unstable_IdlePriority,Kc=null,ui=null;function Z1(t){if(ui&&typeof ui.onCommitFiberRoot=="function")try{ui.onCommitFiberRoot(Kc,t,void 0,(t.current.flags&128)===128)}catch{}}var Jn=Math.clz32?Math.clz32:tE,Q1=Math.log,eE=Math.LN2;function tE(t){return t>>>=0,t===0?32:31-(Q1(t)/eE|0)|0}var Qo=64,el=4194304;function Ws(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function mc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,a=t.pingedLanes,s=n&268435455;if(s!==0){var o=s&~r;o!==0?i=Ws(o):(a&=s,a!==0&&(i=Ws(a)))}else s=n&~r,s!==0?i=Ws(s):a!==0&&(i=Ws(a));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,a=e&-e,r>=a||r===16&&(a&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Jn(e),r=1<<n,i|=t[n],e&=~r;return i}function nE(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function iE(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,a=t.pendingLanes;0<a;){var s=31-Jn(a),o=1<<s,l=r[s];l===-1?(!(o&n)||o&i)&&(r[s]=nE(o,e)):l<=e&&(t.expiredLanes|=o),a&=~o}}function hd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function w_(){var t=Qo;return Qo<<=1,!(Qo&4194240)&&(Qo=64),t}function ku(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Do(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Jn(e),t[e]=n}function rE(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Jn(n),a=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~a}}function Bh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Jn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var nt=0;function T_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var b_,Hh,A_,R_,C_,pd=!1,tl=[],or=null,lr=null,cr=null,oo=new Map,lo=new Map,Qi=[],aE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function pm(t,e){switch(t){case"focusin":case"focusout":or=null;break;case"dragenter":case"dragleave":lr=null;break;case"mouseover":case"mouseout":cr=null;break;case"pointerover":case"pointerout":oo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":lo.delete(e.pointerId)}}function Cs(t,e,n,i,r,a){return t===null||t.nativeEvent!==a?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:a,targetContainers:[r]},e!==null&&(e=Uo(e),e!==null&&Hh(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function sE(t,e,n,i,r){switch(e){case"focusin":return or=Cs(or,t,e,n,i,r),!0;case"dragenter":return lr=Cs(lr,t,e,n,i,r),!0;case"mouseover":return cr=Cs(cr,t,e,n,i,r),!0;case"pointerover":var a=r.pointerId;return oo.set(a,Cs(oo.get(a)||null,t,e,n,i,r)),!0;case"gotpointercapture":return a=r.pointerId,lo.set(a,Cs(lo.get(a)||null,t,e,n,i,r)),!0}return!1}function P_(t){var e=jr(t.target);if(e!==null){var n=da(e);if(n!==null){if(e=n.tag,e===13){if(e=__(n),e!==null){t.blockedOn=e,C_(t.priority,function(){A_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Yl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=md(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);cd=i,n.target.dispatchEvent(i),cd=null}else return e=Uo(n),e!==null&&Hh(e),t.blockedOn=n,!1;e.shift()}return!0}function mm(t,e,n){Yl(t)&&n.delete(e)}function oE(){pd=!1,or!==null&&Yl(or)&&(or=null),lr!==null&&Yl(lr)&&(lr=null),cr!==null&&Yl(cr)&&(cr=null),oo.forEach(mm),lo.forEach(mm)}function Ps(t,e){t.blockedOn===e&&(t.blockedOn=null,pd||(pd=!0,wn.unstable_scheduleCallback(wn.unstable_NormalPriority,oE)))}function co(t){function e(r){return Ps(r,t)}if(0<tl.length){Ps(tl[0],t);for(var n=1;n<tl.length;n++){var i=tl[n];i.blockedOn===t&&(i.blockedOn=null)}}for(or!==null&&Ps(or,t),lr!==null&&Ps(lr,t),cr!==null&&Ps(cr,t),oo.forEach(e),lo.forEach(e),n=0;n<Qi.length;n++)i=Qi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Qi.length&&(n=Qi[0],n.blockedOn===null);)P_(n),n.blockedOn===null&&Qi.shift()}var Ka=Bi.ReactCurrentBatchConfig,gc=!0;function lE(t,e,n,i){var r=nt,a=Ka.transition;Ka.transition=null;try{nt=1,Gh(t,e,n,i)}finally{nt=r,Ka.transition=a}}function cE(t,e,n,i){var r=nt,a=Ka.transition;Ka.transition=null;try{nt=4,Gh(t,e,n,i)}finally{nt=r,Ka.transition=a}}function Gh(t,e,n,i){if(gc){var r=md(t,e,n,i);if(r===null)$u(t,e,i,vc,n),pm(t,i);else if(sE(r,t,e,n,i))i.stopPropagation();else if(pm(t,i),e&4&&-1<aE.indexOf(t)){for(;r!==null;){var a=Uo(r);if(a!==null&&b_(a),a=md(t,e,n,i),a===null&&$u(t,e,i,vc,n),a===r)break;r=a}r!==null&&i.stopPropagation()}else $u(t,e,i,null,n)}}var vc=null;function md(t,e,n,i){if(vc=null,t=Fh(i),t=jr(t),t!==null)if(e=da(t),e===null)t=null;else if(n=e.tag,n===13){if(t=__(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return vc=t,null}function L_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(K1()){case zh:return 1;case E_:return 4;case pc:case J1:return 16;case M_:return 536870912;default:return 16}default:return 16}}var nr=null,Vh=null,ql=null;function N_(){if(ql)return ql;var t,e=Vh,n=e.length,i,r="value"in nr?nr.value:nr.textContent,a=r.length;for(t=0;t<n&&e[t]===r[t];t++);var s=n-t;for(i=1;i<=s&&e[n-i]===r[a-i];i++);return ql=r.slice(t,1<i?1-i:void 0)}function Kl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function nl(){return!0}function gm(){return!1}function bn(t){function e(n,i,r,a,s){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=a,this.target=s,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(a):a[o]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?nl:gm,this.isPropagationStopped=gm,this}return _t(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=nl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=nl)},persist:function(){},isPersistent:nl}),e}var gs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wh=bn(gs),Io=_t({},gs,{view:0,detail:0}),uE=bn(Io),Fu,zu,Ls,Jc=_t({},Io,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ls&&(Ls&&t.type==="mousemove"?(Fu=t.screenX-Ls.screenX,zu=t.screenY-Ls.screenY):zu=Fu=0,Ls=t),Fu)},movementY:function(t){return"movementY"in t?t.movementY:zu}}),vm=bn(Jc),fE=_t({},Jc,{dataTransfer:0}),dE=bn(fE),hE=_t({},Io,{relatedTarget:0}),Bu=bn(hE),pE=_t({},gs,{animationName:0,elapsedTime:0,pseudoElement:0}),mE=bn(pE),gE=_t({},gs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),vE=bn(gE),_E=_t({},gs,{data:0}),_m=bn(_E),yE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},xE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},SE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function EE(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=SE[t])?!!e[t]:!1}function jh(){return EE}var ME=_t({},Io,{key:function(t){if(t.key){var e=yE[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Kl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?xE[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jh,charCode:function(t){return t.type==="keypress"?Kl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Kl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),wE=bn(ME),TE=_t({},Jc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ym=bn(TE),bE=_t({},Io,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jh}),AE=bn(bE),RE=_t({},gs,{propertyName:0,elapsedTime:0,pseudoElement:0}),CE=bn(RE),PE=_t({},Jc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),LE=bn(PE),NE=[9,13,27,32],Xh=Li&&"CompositionEvent"in window,qs=null;Li&&"documentMode"in document&&(qs=document.documentMode);var DE=Li&&"TextEvent"in window&&!qs,D_=Li&&(!Xh||qs&&8<qs&&11>=qs),xm=" ",Sm=!1;function I_(t,e){switch(t){case"keyup":return NE.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function U_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Na=!1;function IE(t,e){switch(t){case"compositionend":return U_(e);case"keypress":return e.which!==32?null:(Sm=!0,xm);case"textInput":return t=e.data,t===xm&&Sm?null:t;default:return null}}function UE(t,e){if(Na)return t==="compositionend"||!Xh&&I_(t,e)?(t=N_(),ql=Vh=nr=null,Na=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return D_&&e.locale!=="ko"?null:e.data;default:return null}}var OE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Em(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!OE[t.type]:e==="textarea"}function O_(t,e,n,i){h_(i),e=_c(e,"onChange"),0<e.length&&(n=new Wh("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Ks=null,uo=null;function kE(t){$_(t,0)}function Zc(t){var e=Ua(t);if(s_(e))return t}function FE(t,e){if(t==="change")return e}var k_=!1;if(Li){var Hu;if(Li){var Gu="oninput"in document;if(!Gu){var Mm=document.createElement("div");Mm.setAttribute("oninput","return;"),Gu=typeof Mm.oninput=="function"}Hu=Gu}else Hu=!1;k_=Hu&&(!document.documentMode||9<document.documentMode)}function wm(){Ks&&(Ks.detachEvent("onpropertychange",F_),uo=Ks=null)}function F_(t){if(t.propertyName==="value"&&Zc(uo)){var e=[];O_(e,uo,t,Fh(t)),v_(kE,e)}}function zE(t,e,n){t==="focusin"?(wm(),Ks=e,uo=n,Ks.attachEvent("onpropertychange",F_)):t==="focusout"&&wm()}function BE(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Zc(uo)}function HE(t,e){if(t==="click")return Zc(e)}function GE(t,e){if(t==="input"||t==="change")return Zc(e)}function VE(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Qn=typeof Object.is=="function"?Object.is:VE;function fo(t,e){if(Qn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Jf.call(e,r)||!Qn(t[r],e[r]))return!1}return!0}function Tm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function bm(t,e){var n=Tm(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Tm(n)}}function z_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?z_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function B_(){for(var t=window,e=fc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=fc(t.document)}return e}function $h(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function WE(t){var e=B_(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&z_(n.ownerDocument.documentElement,n)){if(i!==null&&$h(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,a=Math.min(i.start,r);i=i.end===void 0?a:Math.min(i.end,r),!t.extend&&a>i&&(r=i,i=a,a=r),r=bm(n,a);var s=bm(n,i);r&&s&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),a>i?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var jE=Li&&"documentMode"in document&&11>=document.documentMode,Da=null,gd=null,Js=null,vd=!1;function Am(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;vd||Da==null||Da!==fc(i)||(i=Da,"selectionStart"in i&&$h(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Js&&fo(Js,i)||(Js=i,i=_c(gd,"onSelect"),0<i.length&&(e=new Wh("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Da)))}function il(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ia={animationend:il("Animation","AnimationEnd"),animationiteration:il("Animation","AnimationIteration"),animationstart:il("Animation","AnimationStart"),transitionend:il("Transition","TransitionEnd")},Vu={},H_={};Li&&(H_=document.createElement("div").style,"AnimationEvent"in window||(delete Ia.animationend.animation,delete Ia.animationiteration.animation,delete Ia.animationstart.animation),"TransitionEvent"in window||delete Ia.transitionend.transition);function Qc(t){if(Vu[t])return Vu[t];if(!Ia[t])return t;var e=Ia[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in H_)return Vu[t]=e[n];return t}var G_=Qc("animationend"),V_=Qc("animationiteration"),W_=Qc("animationstart"),j_=Qc("transitionend"),X_=new Map,Rm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Tr(t,e){X_.set(t,e),fa(e,[t])}for(var Wu=0;Wu<Rm.length;Wu++){var ju=Rm[Wu],XE=ju.toLowerCase(),$E=ju[0].toUpperCase()+ju.slice(1);Tr(XE,"on"+$E)}Tr(G_,"onAnimationEnd");Tr(V_,"onAnimationIteration");Tr(W_,"onAnimationStart");Tr("dblclick","onDoubleClick");Tr("focusin","onFocus");Tr("focusout","onBlur");Tr(j_,"onTransitionEnd");ns("onMouseEnter",["mouseout","mouseover"]);ns("onMouseLeave",["mouseout","mouseover"]);ns("onPointerEnter",["pointerout","pointerover"]);ns("onPointerLeave",["pointerout","pointerover"]);fa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fa("onBeforeInput",["compositionend","keypress","textInput","paste"]);fa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));fa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var js="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),YE=new Set("cancel close invalid load scroll toggle".split(" ").concat(js));function Cm(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,X1(i,e,void 0,t),t.currentTarget=null}function $_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var a=void 0;if(e)for(var s=i.length-1;0<=s;s--){var o=i[s],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==a&&r.isPropagationStopped())break e;Cm(r,o,c),a=l}else for(s=0;s<i.length;s++){if(o=i[s],l=o.instance,c=o.currentTarget,o=o.listener,l!==a&&r.isPropagationStopped())break e;Cm(r,o,c),a=l}}}if(hc)throw t=dd,hc=!1,dd=null,t}function ot(t,e){var n=e[Ed];n===void 0&&(n=e[Ed]=new Set);var i=t+"__bubble";n.has(i)||(Y_(e,t,2,!1),n.add(i))}function Xu(t,e,n){var i=0;e&&(i|=4),Y_(n,t,i,e)}var rl="_reactListening"+Math.random().toString(36).slice(2);function ho(t){if(!t[rl]){t[rl]=!0,t_.forEach(function(n){n!=="selectionchange"&&(YE.has(n)||Xu(n,!1,t),Xu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[rl]||(e[rl]=!0,Xu("selectionchange",!1,e))}}function Y_(t,e,n,i){switch(L_(e)){case 1:var r=lE;break;case 4:r=cE;break;default:r=Gh}n=r.bind(null,e,n,t),r=void 0,!fd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function $u(t,e,n,i,r){var a=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var s=i.tag;if(s===3||s===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(s===4)for(s=i.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;s=s.return}for(;o!==null;){if(s=jr(o),s===null)return;if(l=s.tag,l===5||l===6){i=a=s;continue e}o=o.parentNode}}i=i.return}v_(function(){var c=a,u=Fh(n),f=[];e:{var h=X_.get(t);if(h!==void 0){var m=Wh,g=t;switch(t){case"keypress":if(Kl(n)===0)break e;case"keydown":case"keyup":m=wE;break;case"focusin":g="focus",m=Bu;break;case"focusout":g="blur",m=Bu;break;case"beforeblur":case"afterblur":m=Bu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=vm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=dE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=AE;break;case G_:case V_:case W_:m=mE;break;case j_:m=CE;break;case"scroll":m=uE;break;case"wheel":m=LE;break;case"copy":case"cut":case"paste":m=vE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=ym}var y=(e&4)!==0,p=!y&&t==="scroll",d=y?h!==null?h+"Capture":null:h;y=[];for(var _=c,v;_!==null;){v=_;var S=v.stateNode;if(v.tag===5&&S!==null&&(v=S,d!==null&&(S=so(_,d),S!=null&&y.push(po(_,S,v)))),p)break;_=_.return}0<y.length&&(h=new m(h,g,null,n,u),f.push({event:h,listeners:y}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",h&&n!==cd&&(g=n.relatedTarget||n.fromElement)&&(jr(g)||g[Ni]))break e;if((m||h)&&(h=u.window===u?u:(h=u.ownerDocument)?h.defaultView||h.parentWindow:window,m?(g=n.relatedTarget||n.toElement,m=c,g=g?jr(g):null,g!==null&&(p=da(g),g!==p||g.tag!==5&&g.tag!==6)&&(g=null)):(m=null,g=c),m!==g)){if(y=vm,S="onMouseLeave",d="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(y=ym,S="onPointerLeave",d="onPointerEnter",_="pointer"),p=m==null?h:Ua(m),v=g==null?h:Ua(g),h=new y(S,_+"leave",m,n,u),h.target=p,h.relatedTarget=v,S=null,jr(u)===c&&(y=new y(d,_+"enter",g,n,u),y.target=v,y.relatedTarget=p,S=y),p=S,m&&g)t:{for(y=m,d=g,_=0,v=y;v;v=ha(v))_++;for(v=0,S=d;S;S=ha(S))v++;for(;0<_-v;)y=ha(y),_--;for(;0<v-_;)d=ha(d),v--;for(;_--;){if(y===d||d!==null&&y===d.alternate)break t;y=ha(y),d=ha(d)}y=null}else y=null;m!==null&&Pm(f,h,m,y,!1),g!==null&&p!==null&&Pm(f,p,g,y,!0)}}e:{if(h=c?Ua(c):window,m=h.nodeName&&h.nodeName.toLowerCase(),m==="select"||m==="input"&&h.type==="file")var A=FE;else if(Em(h))if(k_)A=GE;else{A=BE;var T=zE}else(m=h.nodeName)&&m.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(A=HE);if(A&&(A=A(t,c))){O_(f,A,n,u);break e}T&&T(t,h,c),t==="focusout"&&(T=h._wrapperState)&&T.controlled&&h.type==="number"&&rd(h,"number",h.value)}switch(T=c?Ua(c):window,t){case"focusin":(Em(T)||T.contentEditable==="true")&&(Da=T,gd=c,Js=null);break;case"focusout":Js=gd=Da=null;break;case"mousedown":vd=!0;break;case"contextmenu":case"mouseup":case"dragend":vd=!1,Am(f,n,u);break;case"selectionchange":if(jE)break;case"keydown":case"keyup":Am(f,n,u)}var w;if(Xh)e:{switch(t){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else Na?I_(t,n)&&(C="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(C="onCompositionStart");C&&(D_&&n.locale!=="ko"&&(Na||C!=="onCompositionStart"?C==="onCompositionEnd"&&Na&&(w=N_()):(nr=u,Vh="value"in nr?nr.value:nr.textContent,Na=!0)),T=_c(c,C),0<T.length&&(C=new _m(C,t,null,n,u),f.push({event:C,listeners:T}),w?C.data=w:(w=U_(n),w!==null&&(C.data=w)))),(w=DE?IE(t,n):UE(t,n))&&(c=_c(c,"onBeforeInput"),0<c.length&&(u=new _m("onBeforeInput","beforeinput",null,n,u),f.push({event:u,listeners:c}),u.data=w))}$_(f,e)})}function po(t,e,n){return{instance:t,listener:e,currentTarget:n}}function _c(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,a=r.stateNode;r.tag===5&&a!==null&&(r=a,a=so(t,n),a!=null&&i.unshift(po(t,a,r)),a=so(t,e),a!=null&&i.push(po(t,a,r))),t=t.return}return i}function ha(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Pm(t,e,n,i,r){for(var a=e._reactName,s=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=so(n,a),l!=null&&s.unshift(po(n,l,o))):r||(l=so(n,a),l!=null&&s.push(po(n,l,o)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var qE=/\r\n?/g,KE=/\u0000|\uFFFD/g;function Lm(t){return(typeof t=="string"?t:""+t).replace(qE,`
`).replace(KE,"")}function al(t,e,n){if(e=Lm(e),Lm(t)!==e&&n)throw Error(ne(425))}function yc(){}var _d=null,yd=null;function xd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Sd=typeof setTimeout=="function"?setTimeout:void 0,JE=typeof clearTimeout=="function"?clearTimeout:void 0,Nm=typeof Promise=="function"?Promise:void 0,ZE=typeof queueMicrotask=="function"?queueMicrotask:typeof Nm<"u"?function(t){return Nm.resolve(null).then(t).catch(QE)}:Sd;function QE(t){setTimeout(function(){throw t})}function Yu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),co(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);co(e)}function ur(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Dm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var vs=Math.random().toString(36).slice(2),ai="__reactFiber$"+vs,mo="__reactProps$"+vs,Ni="__reactContainer$"+vs,Ed="__reactEvents$"+vs,eM="__reactListeners$"+vs,tM="__reactHandles$"+vs;function jr(t){var e=t[ai];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ni]||n[ai]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Dm(t);t!==null;){if(n=t[ai])return n;t=Dm(t)}return e}t=n,n=t.parentNode}return null}function Uo(t){return t=t[ai]||t[Ni],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ua(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ne(33))}function eu(t){return t[mo]||null}var Md=[],Oa=-1;function br(t){return{current:t}}function ut(t){0>Oa||(t.current=Md[Oa],Md[Oa]=null,Oa--)}function st(t,e){Oa++,Md[Oa]=t.current,t.current=e}var yr={},Zt=br(yr),hn=br(!1),ia=yr;function is(t,e){var n=t.type.contextTypes;if(!n)return yr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},a;for(a in n)r[a]=e[a];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function pn(t){return t=t.childContextTypes,t!=null}function xc(){ut(hn),ut(Zt)}function Im(t,e,n){if(Zt.current!==yr)throw Error(ne(168));st(Zt,e),st(hn,n)}function q_(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ne(108,z1(t)||"Unknown",r));return _t({},n,i)}function Sc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||yr,ia=Zt.current,st(Zt,t),st(hn,hn.current),!0}function Um(t,e,n){var i=t.stateNode;if(!i)throw Error(ne(169));n?(t=q_(t,e,ia),i.__reactInternalMemoizedMergedChildContext=t,ut(hn),ut(Zt),st(Zt,t)):ut(hn),st(hn,n)}var Ei=null,tu=!1,qu=!1;function K_(t){Ei===null?Ei=[t]:Ei.push(t)}function nM(t){tu=!0,K_(t)}function Ar(){if(!qu&&Ei!==null){qu=!0;var t=0,e=nt;try{var n=Ei;for(nt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Ei=null,tu=!1}catch(r){throw Ei!==null&&(Ei=Ei.slice(t+1)),S_(zh,Ar),r}finally{nt=e,qu=!1}}return null}var ka=[],Fa=0,Ec=null,Mc=0,Ln=[],Nn=0,ra=null,Ti=1,bi="";function Fr(t,e){ka[Fa++]=Mc,ka[Fa++]=Ec,Ec=t,Mc=e}function J_(t,e,n){Ln[Nn++]=Ti,Ln[Nn++]=bi,Ln[Nn++]=ra,ra=t;var i=Ti;t=bi;var r=32-Jn(i)-1;i&=~(1<<r),n+=1;var a=32-Jn(e)+r;if(30<a){var s=r-r%5;a=(i&(1<<s)-1).toString(32),i>>=s,r-=s,Ti=1<<32-Jn(e)+r|n<<r|i,bi=a+t}else Ti=1<<a|n<<r|i,bi=t}function Yh(t){t.return!==null&&(Fr(t,1),J_(t,1,0))}function qh(t){for(;t===Ec;)Ec=ka[--Fa],ka[Fa]=null,Mc=ka[--Fa],ka[Fa]=null;for(;t===ra;)ra=Ln[--Nn],Ln[Nn]=null,bi=Ln[--Nn],Ln[Nn]=null,Ti=Ln[--Nn],Ln[Nn]=null}var Mn=null,En=null,pt=!1,$n=null;function Z_(t,e){var n=In(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Om(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Mn=t,En=ur(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Mn=t,En=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ra!==null?{id:Ti,overflow:bi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=In(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Mn=t,En=null,!0):!1;default:return!1}}function wd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Td(t){if(pt){var e=En;if(e){var n=e;if(!Om(t,e)){if(wd(t))throw Error(ne(418));e=ur(n.nextSibling);var i=Mn;e&&Om(t,e)?Z_(i,n):(t.flags=t.flags&-4097|2,pt=!1,Mn=t)}}else{if(wd(t))throw Error(ne(418));t.flags=t.flags&-4097|2,pt=!1,Mn=t}}}function km(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Mn=t}function sl(t){if(t!==Mn)return!1;if(!pt)return km(t),pt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!xd(t.type,t.memoizedProps)),e&&(e=En)){if(wd(t))throw Q_(),Error(ne(418));for(;e;)Z_(t,e),e=ur(e.nextSibling)}if(km(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ne(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){En=ur(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}En=null}}else En=Mn?ur(t.stateNode.nextSibling):null;return!0}function Q_(){for(var t=En;t;)t=ur(t.nextSibling)}function rs(){En=Mn=null,pt=!1}function Kh(t){$n===null?$n=[t]:$n.push(t)}var iM=Bi.ReactCurrentBatchConfig;function jn(t,e){if(t&&t.defaultProps){e=_t({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var wc=br(null),Tc=null,za=null,Jh=null;function Zh(){Jh=za=Tc=null}function Qh(t){var e=wc.current;ut(wc),t._currentValue=e}function bd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Ja(t,e){Tc=t,Jh=za=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(dn=!0),t.firstContext=null)}function zn(t){var e=t._currentValue;if(Jh!==t)if(t={context:t,memoizedValue:e,next:null},za===null){if(Tc===null)throw Error(ne(308));za=t,Tc.dependencies={lanes:0,firstContext:t}}else za=za.next=t;return e}var Xr=null;function ep(t){Xr===null?Xr=[t]:Xr.push(t)}function ey(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,ep(e)):(n.next=r.next,r.next=n),e.interleaved=n,Di(t,i)}function Di(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Zi=!1;function tp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ty(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ci(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function fr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ze&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Di(t,n)}return r=i.interleaved,r===null?(e.next=e,ep(i)):(e.next=r.next,r.next=e),i.interleaved=e,Di(t,n)}function Jl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Bh(t,n)}}function Fm(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?r=a=s:a=a.next=s,n=n.next}while(n!==null);a===null?r=a=e:a=a.next=e}else r=a=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:a,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function bc(t,e,n,i){var r=t.updateQueue;Zi=!1;var a=r.firstBaseUpdate,s=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,s===null?a=c:s.next=c,s=l;var u=t.alternate;u!==null&&(u=u.updateQueue,o=u.lastBaseUpdate,o!==s&&(o===null?u.firstBaseUpdate=c:o.next=c,u.lastBaseUpdate=l))}if(a!==null){var f=r.baseState;s=0,u=c=l=null,o=a;do{var h=o.lane,m=o.eventTime;if((i&h)===h){u!==null&&(u=u.next={eventTime:m,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var g=t,y=o;switch(h=e,m=n,y.tag){case 1:if(g=y.payload,typeof g=="function"){f=g.call(m,f,h);break e}f=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=y.payload,h=typeof g=="function"?g.call(m,f,h):g,h==null)break e;f=_t({},f,h);break e;case 2:Zi=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[o]:h.push(o))}else m={eventTime:m,lane:h,tag:o.tag,payload:o.payload,callback:o.callback,next:null},u===null?(c=u=m,l=f):u=u.next=m,s|=h;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;h=o,o=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(u===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do s|=r.lane,r=r.next;while(r!==e)}else a===null&&(r.shared.lanes=0);sa|=s,t.lanes=s,t.memoizedState=f}}function zm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ne(191,r));r.call(i)}}}var ny=new e_.Component().refs;function Ad(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:_t({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var nu={isMounted:function(t){return(t=t._reactInternals)?da(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=rn(),r=hr(t),a=Ci(i,r);a.payload=e,n!=null&&(a.callback=n),e=fr(t,a,r),e!==null&&(Zn(e,t,r,i),Jl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=rn(),r=hr(t),a=Ci(i,r);a.tag=1,a.payload=e,n!=null&&(a.callback=n),e=fr(t,a,r),e!==null&&(Zn(e,t,r,i),Jl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=rn(),i=hr(t),r=Ci(n,i);r.tag=2,e!=null&&(r.callback=e),e=fr(t,r,i),e!==null&&(Zn(e,t,i,n),Jl(e,t,i))}};function Bm(t,e,n,i,r,a,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,a,s):e.prototype&&e.prototype.isPureReactComponent?!fo(n,i)||!fo(r,a):!0}function iy(t,e,n){var i=!1,r=yr,a=e.contextType;return typeof a=="object"&&a!==null?a=zn(a):(r=pn(e)?ia:Zt.current,i=e.contextTypes,a=(i=i!=null)?is(t,r):yr),e=new e(n,a),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=nu,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=a),e}function Hm(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&nu.enqueueReplaceState(e,e.state,null)}function Rd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs=ny,tp(t);var a=e.contextType;typeof a=="object"&&a!==null?r.context=zn(a):(a=pn(e)?ia:Zt.current,r.context=is(t,a)),r.state=t.memoizedState,a=e.getDerivedStateFromProps,typeof a=="function"&&(Ad(t,e,a,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&nu.enqueueReplaceState(r,r.state,null),bc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Ns(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ne(309));var i=n.stateNode}if(!i)throw Error(ne(147,t));var r=i,a=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===a?e.ref:(e=function(s){var o=r.refs;o===ny&&(o=r.refs={}),s===null?delete o[a]:o[a]=s},e._stringRef=a,e)}if(typeof t!="string")throw Error(ne(284));if(!n._owner)throw Error(ne(290,t))}return t}function ol(t,e){throw t=Object.prototype.toString.call(e),Error(ne(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Gm(t){var e=t._init;return e(t._payload)}function ry(t){function e(d,_){if(t){var v=d.deletions;v===null?(d.deletions=[_],d.flags|=16):v.push(_)}}function n(d,_){if(!t)return null;for(;_!==null;)e(d,_),_=_.sibling;return null}function i(d,_){for(d=new Map;_!==null;)_.key!==null?d.set(_.key,_):d.set(_.index,_),_=_.sibling;return d}function r(d,_){return d=pr(d,_),d.index=0,d.sibling=null,d}function a(d,_,v){return d.index=v,t?(v=d.alternate,v!==null?(v=v.index,v<_?(d.flags|=2,_):v):(d.flags|=2,_)):(d.flags|=1048576,_)}function s(d){return t&&d.alternate===null&&(d.flags|=2),d}function o(d,_,v,S){return _===null||_.tag!==6?(_=nf(v,d.mode,S),_.return=d,_):(_=r(_,v),_.return=d,_)}function l(d,_,v,S){var A=v.type;return A===La?u(d,_,v.props.children,S,v.key):_!==null&&(_.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Ji&&Gm(A)===_.type)?(S=r(_,v.props),S.ref=Ns(d,_,v),S.return=d,S):(S=ic(v.type,v.key,v.props,null,d.mode,S),S.ref=Ns(d,_,v),S.return=d,S)}function c(d,_,v,S){return _===null||_.tag!==4||_.stateNode.containerInfo!==v.containerInfo||_.stateNode.implementation!==v.implementation?(_=rf(v,d.mode,S),_.return=d,_):(_=r(_,v.children||[]),_.return=d,_)}function u(d,_,v,S,A){return _===null||_.tag!==7?(_=Zr(v,d.mode,S,A),_.return=d,_):(_=r(_,v),_.return=d,_)}function f(d,_,v){if(typeof _=="string"&&_!==""||typeof _=="number")return _=nf(""+_,d.mode,v),_.return=d,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Ko:return v=ic(_.type,_.key,_.props,null,d.mode,v),v.ref=Ns(d,null,_),v.return=d,v;case Pa:return _=rf(_,d.mode,v),_.return=d,_;case Ji:var S=_._init;return f(d,S(_._payload),v)}if(Vs(_)||As(_))return _=Zr(_,d.mode,v,null),_.return=d,_;ol(d,_)}return null}function h(d,_,v,S){var A=_!==null?_.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return A!==null?null:o(d,_,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ko:return v.key===A?l(d,_,v,S):null;case Pa:return v.key===A?c(d,_,v,S):null;case Ji:return A=v._init,h(d,_,A(v._payload),S)}if(Vs(v)||As(v))return A!==null?null:u(d,_,v,S,null);ol(d,v)}return null}function m(d,_,v,S,A){if(typeof S=="string"&&S!==""||typeof S=="number")return d=d.get(v)||null,o(_,d,""+S,A);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ko:return d=d.get(S.key===null?v:S.key)||null,l(_,d,S,A);case Pa:return d=d.get(S.key===null?v:S.key)||null,c(_,d,S,A);case Ji:var T=S._init;return m(d,_,v,T(S._payload),A)}if(Vs(S)||As(S))return d=d.get(v)||null,u(_,d,S,A,null);ol(_,S)}return null}function g(d,_,v,S){for(var A=null,T=null,w=_,C=_=0,W=null;w!==null&&C<v.length;C++){w.index>C?(W=w,w=null):W=w.sibling;var x=h(d,w,v[C],S);if(x===null){w===null&&(w=W);break}t&&w&&x.alternate===null&&e(d,w),_=a(x,_,C),T===null?A=x:T.sibling=x,T=x,w=W}if(C===v.length)return n(d,w),pt&&Fr(d,C),A;if(w===null){for(;C<v.length;C++)w=f(d,v[C],S),w!==null&&(_=a(w,_,C),T===null?A=w:T.sibling=w,T=w);return pt&&Fr(d,C),A}for(w=i(d,w);C<v.length;C++)W=m(w,d,C,v[C],S),W!==null&&(t&&W.alternate!==null&&w.delete(W.key===null?C:W.key),_=a(W,_,C),T===null?A=W:T.sibling=W,T=W);return t&&w.forEach(function(R){return e(d,R)}),pt&&Fr(d,C),A}function y(d,_,v,S){var A=As(v);if(typeof A!="function")throw Error(ne(150));if(v=A.call(v),v==null)throw Error(ne(151));for(var T=A=null,w=_,C=_=0,W=null,x=v.next();w!==null&&!x.done;C++,x=v.next()){w.index>C?(W=w,w=null):W=w.sibling;var R=h(d,w,x.value,S);if(R===null){w===null&&(w=W);break}t&&w&&R.alternate===null&&e(d,w),_=a(R,_,C),T===null?A=R:T.sibling=R,T=R,w=W}if(x.done)return n(d,w),pt&&Fr(d,C),A;if(w===null){for(;!x.done;C++,x=v.next())x=f(d,x.value,S),x!==null&&(_=a(x,_,C),T===null?A=x:T.sibling=x,T=x);return pt&&Fr(d,C),A}for(w=i(d,w);!x.done;C++,x=v.next())x=m(w,d,C,x.value,S),x!==null&&(t&&x.alternate!==null&&w.delete(x.key===null?C:x.key),_=a(x,_,C),T===null?A=x:T.sibling=x,T=x);return t&&w.forEach(function(Z){return e(d,Z)}),pt&&Fr(d,C),A}function p(d,_,v,S){if(typeof v=="object"&&v!==null&&v.type===La&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Ko:e:{for(var A=v.key,T=_;T!==null;){if(T.key===A){if(A=v.type,A===La){if(T.tag===7){n(d,T.sibling),_=r(T,v.props.children),_.return=d,d=_;break e}}else if(T.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Ji&&Gm(A)===T.type){n(d,T.sibling),_=r(T,v.props),_.ref=Ns(d,T,v),_.return=d,d=_;break e}n(d,T);break}else e(d,T);T=T.sibling}v.type===La?(_=Zr(v.props.children,d.mode,S,v.key),_.return=d,d=_):(S=ic(v.type,v.key,v.props,null,d.mode,S),S.ref=Ns(d,_,v),S.return=d,d=S)}return s(d);case Pa:e:{for(T=v.key;_!==null;){if(_.key===T)if(_.tag===4&&_.stateNode.containerInfo===v.containerInfo&&_.stateNode.implementation===v.implementation){n(d,_.sibling),_=r(_,v.children||[]),_.return=d,d=_;break e}else{n(d,_);break}else e(d,_);_=_.sibling}_=rf(v,d.mode,S),_.return=d,d=_}return s(d);case Ji:return T=v._init,p(d,_,T(v._payload),S)}if(Vs(v))return g(d,_,v,S);if(As(v))return y(d,_,v,S);ol(d,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,_!==null&&_.tag===6?(n(d,_.sibling),_=r(_,v),_.return=d,d=_):(n(d,_),_=nf(v,d.mode,S),_.return=d,d=_),s(d)):n(d,_)}return p}var as=ry(!0),ay=ry(!1),Oo={},fi=br(Oo),go=br(Oo),vo=br(Oo);function $r(t){if(t===Oo)throw Error(ne(174));return t}function np(t,e){switch(st(vo,e),st(go,t),st(fi,Oo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:sd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=sd(e,t)}ut(fi),st(fi,e)}function ss(){ut(fi),ut(go),ut(vo)}function sy(t){$r(vo.current);var e=$r(fi.current),n=sd(e,t.type);e!==n&&(st(go,t),st(fi,n))}function ip(t){go.current===t&&(ut(fi),ut(go))}var gt=br(0);function Ac(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ku=[];function rp(){for(var t=0;t<Ku.length;t++)Ku[t]._workInProgressVersionPrimary=null;Ku.length=0}var Zl=Bi.ReactCurrentDispatcher,Ju=Bi.ReactCurrentBatchConfig,aa=0,vt=null,Ct=null,kt=null,Rc=!1,Zs=!1,_o=0,rM=0;function $t(){throw Error(ne(321))}function ap(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Qn(t[n],e[n]))return!1;return!0}function sp(t,e,n,i,r,a){if(aa=a,vt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Zl.current=t===null||t.memoizedState===null?lM:cM,t=n(i,r),Zs){a=0;do{if(Zs=!1,_o=0,25<=a)throw Error(ne(301));a+=1,kt=Ct=null,e.updateQueue=null,Zl.current=uM,t=n(i,r)}while(Zs)}if(Zl.current=Cc,e=Ct!==null&&Ct.next!==null,aa=0,kt=Ct=vt=null,Rc=!1,e)throw Error(ne(300));return t}function op(){var t=_o!==0;return _o=0,t}function ni(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return kt===null?vt.memoizedState=kt=t:kt=kt.next=t,kt}function Bn(){if(Ct===null){var t=vt.alternate;t=t!==null?t.memoizedState:null}else t=Ct.next;var e=kt===null?vt.memoizedState:kt.next;if(e!==null)kt=e,Ct=t;else{if(t===null)throw Error(ne(310));Ct=t,t={memoizedState:Ct.memoizedState,baseState:Ct.baseState,baseQueue:Ct.baseQueue,queue:Ct.queue,next:null},kt===null?vt.memoizedState=kt=t:kt=kt.next=t}return kt}function yo(t,e){return typeof e=="function"?e(t):e}function Zu(t){var e=Bn(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=Ct,r=i.baseQueue,a=n.pending;if(a!==null){if(r!==null){var s=r.next;r.next=a.next,a.next=s}i.baseQueue=r=a,n.pending=null}if(r!==null){a=r.next,i=i.baseState;var o=s=null,l=null,c=a;do{var u=c.lane;if((aa&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=f,s=i):l=l.next=f,vt.lanes|=u,sa|=u}c=c.next}while(c!==null&&c!==a);l===null?s=i:l.next=o,Qn(i,e.memoizedState)||(dn=!0),e.memoizedState=i,e.baseState=s,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do a=r.lane,vt.lanes|=a,sa|=a,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Qu(t){var e=Bn(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,a=e.memoizedState;if(r!==null){n.pending=null;var s=r=r.next;do a=t(a,s.action),s=s.next;while(s!==r);Qn(a,e.memoizedState)||(dn=!0),e.memoizedState=a,e.baseQueue===null&&(e.baseState=a),n.lastRenderedState=a}return[a,i]}function oy(){}function ly(t,e){var n=vt,i=Bn(),r=e(),a=!Qn(i.memoizedState,r);if(a&&(i.memoizedState=r,dn=!0),i=i.queue,lp(fy.bind(null,n,i,t),[t]),i.getSnapshot!==e||a||kt!==null&&kt.memoizedState.tag&1){if(n.flags|=2048,xo(9,uy.bind(null,n,i,r,e),void 0,null),zt===null)throw Error(ne(349));aa&30||cy(n,e,r)}return r}function cy(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=vt.updateQueue,e===null?(e={lastEffect:null,stores:null},vt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function uy(t,e,n,i){e.value=n,e.getSnapshot=i,dy(e)&&hy(t)}function fy(t,e,n){return n(function(){dy(e)&&hy(t)})}function dy(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Qn(t,n)}catch{return!0}}function hy(t){var e=Di(t,1);e!==null&&Zn(e,t,1,-1)}function Vm(t){var e=ni();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:yo,lastRenderedState:t},e.queue=t,t=t.dispatch=oM.bind(null,vt,t),[e.memoizedState,t]}function xo(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=vt.updateQueue,e===null?(e={lastEffect:null,stores:null},vt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function py(){return Bn().memoizedState}function Ql(t,e,n,i){var r=ni();vt.flags|=t,r.memoizedState=xo(1|e,n,void 0,i===void 0?null:i)}function iu(t,e,n,i){var r=Bn();i=i===void 0?null:i;var a=void 0;if(Ct!==null){var s=Ct.memoizedState;if(a=s.destroy,i!==null&&ap(i,s.deps)){r.memoizedState=xo(e,n,a,i);return}}vt.flags|=t,r.memoizedState=xo(1|e,n,a,i)}function Wm(t,e){return Ql(8390656,8,t,e)}function lp(t,e){return iu(2048,8,t,e)}function my(t,e){return iu(4,2,t,e)}function gy(t,e){return iu(4,4,t,e)}function vy(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function _y(t,e,n){return n=n!=null?n.concat([t]):null,iu(4,4,vy.bind(null,e,t),n)}function cp(){}function yy(t,e){var n=Bn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&ap(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function xy(t,e){var n=Bn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&ap(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Sy(t,e,n){return aa&21?(Qn(n,e)||(n=w_(),vt.lanes|=n,sa|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,dn=!0),t.memoizedState=n)}function aM(t,e){var n=nt;nt=n!==0&&4>n?n:4,t(!0);var i=Ju.transition;Ju.transition={};try{t(!1),e()}finally{nt=n,Ju.transition=i}}function Ey(){return Bn().memoizedState}function sM(t,e,n){var i=hr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},My(t))wy(e,n);else if(n=ey(t,e,n,i),n!==null){var r=rn();Zn(n,t,i,r),Ty(n,e,i)}}function oM(t,e,n){var i=hr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(My(t))wy(e,r);else{var a=t.alternate;if(t.lanes===0&&(a===null||a.lanes===0)&&(a=e.lastRenderedReducer,a!==null))try{var s=e.lastRenderedState,o=a(s,n);if(r.hasEagerState=!0,r.eagerState=o,Qn(o,s)){var l=e.interleaved;l===null?(r.next=r,ep(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=ey(t,e,r,i),n!==null&&(r=rn(),Zn(n,t,i,r),Ty(n,e,i))}}function My(t){var e=t.alternate;return t===vt||e!==null&&e===vt}function wy(t,e){Zs=Rc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Ty(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Bh(t,n)}}var Cc={readContext:zn,useCallback:$t,useContext:$t,useEffect:$t,useImperativeHandle:$t,useInsertionEffect:$t,useLayoutEffect:$t,useMemo:$t,useReducer:$t,useRef:$t,useState:$t,useDebugValue:$t,useDeferredValue:$t,useTransition:$t,useMutableSource:$t,useSyncExternalStore:$t,useId:$t,unstable_isNewReconciler:!1},lM={readContext:zn,useCallback:function(t,e){return ni().memoizedState=[t,e===void 0?null:e],t},useContext:zn,useEffect:Wm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ql(4194308,4,vy.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ql(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ql(4,2,t,e)},useMemo:function(t,e){var n=ni();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ni();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=sM.bind(null,vt,t),[i.memoizedState,t]},useRef:function(t){var e=ni();return t={current:t},e.memoizedState=t},useState:Vm,useDebugValue:cp,useDeferredValue:function(t){return ni().memoizedState=t},useTransition:function(){var t=Vm(!1),e=t[0];return t=aM.bind(null,t[1]),ni().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=vt,r=ni();if(pt){if(n===void 0)throw Error(ne(407));n=n()}else{if(n=e(),zt===null)throw Error(ne(349));aa&30||cy(i,e,n)}r.memoizedState=n;var a={value:n,getSnapshot:e};return r.queue=a,Wm(fy.bind(null,i,a,t),[t]),i.flags|=2048,xo(9,uy.bind(null,i,a,n,e),void 0,null),n},useId:function(){var t=ni(),e=zt.identifierPrefix;if(pt){var n=bi,i=Ti;n=(i&~(1<<32-Jn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=_o++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=rM++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},cM={readContext:zn,useCallback:yy,useContext:zn,useEffect:lp,useImperativeHandle:_y,useInsertionEffect:my,useLayoutEffect:gy,useMemo:xy,useReducer:Zu,useRef:py,useState:function(){return Zu(yo)},useDebugValue:cp,useDeferredValue:function(t){var e=Bn();return Sy(e,Ct.memoizedState,t)},useTransition:function(){var t=Zu(yo)[0],e=Bn().memoizedState;return[t,e]},useMutableSource:oy,useSyncExternalStore:ly,useId:Ey,unstable_isNewReconciler:!1},uM={readContext:zn,useCallback:yy,useContext:zn,useEffect:lp,useImperativeHandle:_y,useInsertionEffect:my,useLayoutEffect:gy,useMemo:xy,useReducer:Qu,useRef:py,useState:function(){return Qu(yo)},useDebugValue:cp,useDeferredValue:function(t){var e=Bn();return Ct===null?e.memoizedState=t:Sy(e,Ct.memoizedState,t)},useTransition:function(){var t=Qu(yo)[0],e=Bn().memoizedState;return[t,e]},useMutableSource:oy,useSyncExternalStore:ly,useId:Ey,unstable_isNewReconciler:!1};function os(t,e){try{var n="",i=e;do n+=F1(i),i=i.return;while(i);var r=n}catch(a){r=`
Error generating stack: `+a.message+`
`+a.stack}return{value:t,source:e,stack:r,digest:null}}function ef(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Cd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var fM=typeof WeakMap=="function"?WeakMap:Map;function by(t,e,n){n=Ci(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Lc||(Lc=!0,zd=i),Cd(t,e)},n}function Ay(t,e,n){n=Ci(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Cd(t,e)}}var a=t.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){Cd(t,e),typeof i!="function"&&(dr===null?dr=new Set([this]):dr.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function jm(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new fM;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=TM.bind(null,t,e,n),e.then(t,t))}function Xm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function $m(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ci(-1,1),e.tag=2,fr(n,e,1))),n.lanes|=1),t)}var dM=Bi.ReactCurrentOwner,dn=!1;function tn(t,e,n,i){e.child=t===null?ay(e,null,n,i):as(e,t.child,n,i)}function Ym(t,e,n,i,r){n=n.render;var a=e.ref;return Ja(e,r),i=sp(t,e,n,i,a,r),n=op(),t!==null&&!dn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ii(t,e,r)):(pt&&n&&Yh(e),e.flags|=1,tn(t,e,i,r),e.child)}function qm(t,e,n,i,r){if(t===null){var a=n.type;return typeof a=="function"&&!vp(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=a,Ry(t,e,a,i,r)):(t=ic(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(a=t.child,!(t.lanes&r)){var s=a.memoizedProps;if(n=n.compare,n=n!==null?n:fo,n(s,i)&&t.ref===e.ref)return Ii(t,e,r)}return e.flags|=1,t=pr(a,i),t.ref=e.ref,t.return=e,e.child=t}function Ry(t,e,n,i,r){if(t!==null){var a=t.memoizedProps;if(fo(a,i)&&t.ref===e.ref)if(dn=!1,e.pendingProps=i=a,(t.lanes&r)!==0)t.flags&131072&&(dn=!0);else return e.lanes=t.lanes,Ii(t,e,r)}return Pd(t,e,n,i,r)}function Cy(t,e,n){var i=e.pendingProps,r=i.children,a=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},st(Ha,xn),xn|=n;else{if(!(n&1073741824))return t=a!==null?a.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,st(Ha,xn),xn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=a!==null?a.baseLanes:n,st(Ha,xn),xn|=i}else a!==null?(i=a.baseLanes|n,e.memoizedState=null):i=n,st(Ha,xn),xn|=i;return tn(t,e,r,n),e.child}function Py(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Pd(t,e,n,i,r){var a=pn(n)?ia:Zt.current;return a=is(e,a),Ja(e,r),n=sp(t,e,n,i,a,r),i=op(),t!==null&&!dn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ii(t,e,r)):(pt&&i&&Yh(e),e.flags|=1,tn(t,e,n,r),e.child)}function Km(t,e,n,i,r){if(pn(n)){var a=!0;Sc(e)}else a=!1;if(Ja(e,r),e.stateNode===null)ec(t,e),iy(e,n,i),Rd(e,n,i,r),i=!0;else if(t===null){var s=e.stateNode,o=e.memoizedProps;s.props=o;var l=s.context,c=n.contextType;typeof c=="object"&&c!==null?c=zn(c):(c=pn(n)?ia:Zt.current,c=is(e,c));var u=n.getDerivedStateFromProps,f=typeof u=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o!==i||l!==c)&&Hm(e,s,i,c),Zi=!1;var h=e.memoizedState;s.state=h,bc(e,i,s,r),l=e.memoizedState,o!==i||h!==l||hn.current||Zi?(typeof u=="function"&&(Ad(e,n,u,i),l=e.memoizedState),(o=Zi||Bm(e,n,o,i,h,l,c))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),s.props=i,s.state=l,s.context=c,i=o):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{s=e.stateNode,ty(t,e),o=e.memoizedProps,c=e.type===e.elementType?o:jn(e.type,o),s.props=c,f=e.pendingProps,h=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=zn(l):(l=pn(n)?ia:Zt.current,l=is(e,l));var m=n.getDerivedStateFromProps;(u=typeof m=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o!==f||h!==l)&&Hm(e,s,i,l),Zi=!1,h=e.memoizedState,s.state=h,bc(e,i,s,r);var g=e.memoizedState;o!==f||h!==g||hn.current||Zi?(typeof m=="function"&&(Ad(e,n,m,i),g=e.memoizedState),(c=Zi||Bm(e,n,c,i,h,g,l)||!1)?(u||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,g,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,g,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),s.props=i,s.state=g,s.context=l,i=c):(typeof s.componentDidUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return Ld(t,e,n,i,a,r)}function Ld(t,e,n,i,r,a){Py(t,e);var s=(e.flags&128)!==0;if(!i&&!s)return r&&Um(e,n,!1),Ii(t,e,a);i=e.stateNode,dM.current=e;var o=s&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&s?(e.child=as(e,t.child,null,a),e.child=as(e,null,o,a)):tn(t,e,o,a),e.memoizedState=i.state,r&&Um(e,n,!0),e.child}function Ly(t){var e=t.stateNode;e.pendingContext?Im(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Im(t,e.context,!1),np(t,e.containerInfo)}function Jm(t,e,n,i,r){return rs(),Kh(r),e.flags|=256,tn(t,e,n,i),e.child}var Nd={dehydrated:null,treeContext:null,retryLane:0};function Dd(t){return{baseLanes:t,cachePool:null,transitions:null}}function Ny(t,e,n){var i=e.pendingProps,r=gt.current,a=!1,s=(e.flags&128)!==0,o;if((o=s)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(a=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),st(gt,r&1),t===null)return Td(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=i.children,t=i.fallback,a?(i=e.mode,a=e.child,s={mode:"hidden",children:s},!(i&1)&&a!==null?(a.childLanes=0,a.pendingProps=s):a=su(s,i,0,null),t=Zr(t,i,n,null),a.return=e,t.return=e,a.sibling=t,e.child=a,e.child.memoizedState=Dd(n),e.memoizedState=Nd,t):up(e,s));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return hM(t,e,s,i,o,r,n);if(a){a=i.fallback,s=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(s&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=pr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?a=pr(o,a):(a=Zr(a,s,n,null),a.flags|=2),a.return=e,i.return=e,i.sibling=a,e.child=i,i=a,a=e.child,s=t.child.memoizedState,s=s===null?Dd(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},a.memoizedState=s,a.childLanes=t.childLanes&~n,e.memoizedState=Nd,i}return a=t.child,t=a.sibling,i=pr(a,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function up(t,e){return e=su({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ll(t,e,n,i){return i!==null&&Kh(i),as(e,t.child,null,n),t=up(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function hM(t,e,n,i,r,a,s){if(n)return e.flags&256?(e.flags&=-257,i=ef(Error(ne(422))),ll(t,e,s,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(a=i.fallback,r=e.mode,i=su({mode:"visible",children:i.children},r,0,null),a=Zr(a,r,s,null),a.flags|=2,i.return=e,a.return=e,i.sibling=a,e.child=i,e.mode&1&&as(e,t.child,null,s),e.child.memoizedState=Dd(s),e.memoizedState=Nd,a);if(!(e.mode&1))return ll(t,e,s,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,a=Error(ne(419)),i=ef(a,i,void 0),ll(t,e,s,i)}if(o=(s&t.childLanes)!==0,dn||o){if(i=zt,i!==null){switch(s&-s){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|s)?0:r,r!==0&&r!==a.retryLane&&(a.retryLane=r,Di(t,r),Zn(i,t,r,-1))}return gp(),i=ef(Error(ne(421))),ll(t,e,s,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=bM.bind(null,t),r._reactRetry=e,null):(t=a.treeContext,En=ur(r.nextSibling),Mn=e,pt=!0,$n=null,t!==null&&(Ln[Nn++]=Ti,Ln[Nn++]=bi,Ln[Nn++]=ra,Ti=t.id,bi=t.overflow,ra=e),e=up(e,i.children),e.flags|=4096,e)}function Zm(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),bd(t.return,e,n)}function tf(t,e,n,i,r){var a=t.memoizedState;a===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(a.isBackwards=e,a.rendering=null,a.renderingStartTime=0,a.last=i,a.tail=n,a.tailMode=r)}function Dy(t,e,n){var i=e.pendingProps,r=i.revealOrder,a=i.tail;if(tn(t,e,i.children,n),i=gt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Zm(t,n,e);else if(t.tag===19)Zm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(st(gt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Ac(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),tf(e,!1,r,n,a);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Ac(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}tf(e,!0,n,null,a);break;case"together":tf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ec(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ii(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),sa|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ne(153));if(e.child!==null){for(t=e.child,n=pr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=pr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function pM(t,e,n){switch(e.tag){case 3:Ly(e),rs();break;case 5:sy(e);break;case 1:pn(e.type)&&Sc(e);break;case 4:np(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;st(wc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(st(gt,gt.current&1),e.flags|=128,null):n&e.child.childLanes?Ny(t,e,n):(st(gt,gt.current&1),t=Ii(t,e,n),t!==null?t.sibling:null);st(gt,gt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Dy(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),st(gt,gt.current),i)break;return null;case 22:case 23:return e.lanes=0,Cy(t,e,n)}return Ii(t,e,n)}var Iy,Id,Uy,Oy;Iy=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Id=function(){};Uy=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,$r(fi.current);var a=null;switch(n){case"input":r=nd(t,r),i=nd(t,i),a=[];break;case"select":r=_t({},r,{value:void 0}),i=_t({},i,{value:void 0}),a=[];break;case"textarea":r=ad(t,r),i=ad(t,i),a=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=yc)}od(n,i);var s;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(s in o)o.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ro.hasOwnProperty(c)?a||(a=[]):(a=a||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(s in o)!o.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&o[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(a||(a=[]),a.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(a=a||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(a=a||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ro.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&ot("scroll",t),a||o===l||(a=[])):(a=a||[]).push(c,l))}n&&(a=a||[]).push("style",n);var c=a;(e.updateQueue=c)&&(e.flags|=4)}};Oy=function(t,e,n,i){n!==i&&(e.flags|=4)};function Ds(t,e){if(!pt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Yt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function mM(t,e,n){var i=e.pendingProps;switch(qh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Yt(e),null;case 1:return pn(e.type)&&xc(),Yt(e),null;case 3:return i=e.stateNode,ss(),ut(hn),ut(Zt),rp(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(sl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,$n!==null&&(Gd($n),$n=null))),Id(t,e),Yt(e),null;case 5:ip(e);var r=$r(vo.current);if(n=e.type,t!==null&&e.stateNode!=null)Uy(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ne(166));return Yt(e),null}if(t=$r(fi.current),sl(e)){i=e.stateNode,n=e.type;var a=e.memoizedProps;switch(i[ai]=e,i[mo]=a,t=(e.mode&1)!==0,n){case"dialog":ot("cancel",i),ot("close",i);break;case"iframe":case"object":case"embed":ot("load",i);break;case"video":case"audio":for(r=0;r<js.length;r++)ot(js[r],i);break;case"source":ot("error",i);break;case"img":case"image":case"link":ot("error",i),ot("load",i);break;case"details":ot("toggle",i);break;case"input":om(i,a),ot("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!a.multiple},ot("invalid",i);break;case"textarea":cm(i,a),ot("invalid",i)}od(n,a),r=null;for(var s in a)if(a.hasOwnProperty(s)){var o=a[s];s==="children"?typeof o=="string"?i.textContent!==o&&(a.suppressHydrationWarning!==!0&&al(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(a.suppressHydrationWarning!==!0&&al(i.textContent,o,t),r=["children",""+o]):ro.hasOwnProperty(s)&&o!=null&&s==="onScroll"&&ot("scroll",i)}switch(n){case"input":Jo(i),lm(i,a,!0);break;case"textarea":Jo(i),um(i);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(i.onclick=yc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{s=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=c_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=s.createElement(n,{is:i.is}):(t=s.createElement(n),n==="select"&&(s=t,i.multiple?s.multiple=!0:i.size&&(s.size=i.size))):t=s.createElementNS(t,n),t[ai]=e,t[mo]=i,Iy(t,e,!1,!1),e.stateNode=t;e:{switch(s=ld(n,i),n){case"dialog":ot("cancel",t),ot("close",t),r=i;break;case"iframe":case"object":case"embed":ot("load",t),r=i;break;case"video":case"audio":for(r=0;r<js.length;r++)ot(js[r],t);r=i;break;case"source":ot("error",t),r=i;break;case"img":case"image":case"link":ot("error",t),ot("load",t),r=i;break;case"details":ot("toggle",t),r=i;break;case"input":om(t,i),r=nd(t,i),ot("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=_t({},i,{value:void 0}),ot("invalid",t);break;case"textarea":cm(t,i),r=ad(t,i),ot("invalid",t);break;default:r=i}od(n,r),o=r;for(a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="style"?d_(t,l):a==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&u_(t,l)):a==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ao(t,l):typeof l=="number"&&ao(t,""+l):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(ro.hasOwnProperty(a)?l!=null&&a==="onScroll"&&ot("scroll",t):l!=null&&Ih(t,a,l,s))}switch(n){case"input":Jo(t),lm(t,i,!1);break;case"textarea":Jo(t),um(t);break;case"option":i.value!=null&&t.setAttribute("value",""+_r(i.value));break;case"select":t.multiple=!!i.multiple,a=i.value,a!=null?$a(t,!!i.multiple,a,!1):i.defaultValue!=null&&$a(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=yc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Yt(e),null;case 6:if(t&&e.stateNode!=null)Oy(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ne(166));if(n=$r(vo.current),$r(fi.current),sl(e)){if(i=e.stateNode,n=e.memoizedProps,i[ai]=e,(a=i.nodeValue!==n)&&(t=Mn,t!==null))switch(t.tag){case 3:al(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&al(i.nodeValue,n,(t.mode&1)!==0)}a&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ai]=e,e.stateNode=i}return Yt(e),null;case 13:if(ut(gt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(pt&&En!==null&&e.mode&1&&!(e.flags&128))Q_(),rs(),e.flags|=98560,a=!1;else if(a=sl(e),i!==null&&i.dehydrated!==null){if(t===null){if(!a)throw Error(ne(318));if(a=e.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(ne(317));a[ai]=e}else rs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Yt(e),a=!1}else $n!==null&&(Gd($n),$n=null),a=!0;if(!a)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||gt.current&1?Pt===0&&(Pt=3):gp())),e.updateQueue!==null&&(e.flags|=4),Yt(e),null);case 4:return ss(),Id(t,e),t===null&&ho(e.stateNode.containerInfo),Yt(e),null;case 10:return Qh(e.type._context),Yt(e),null;case 17:return pn(e.type)&&xc(),Yt(e),null;case 19:if(ut(gt),a=e.memoizedState,a===null)return Yt(e),null;if(i=(e.flags&128)!==0,s=a.rendering,s===null)if(i)Ds(a,!1);else{if(Pt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=Ac(t),s!==null){for(e.flags|=128,Ds(a,!1),i=s.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)a=n,t=i,a.flags&=14680066,s=a.alternate,s===null?(a.childLanes=0,a.lanes=t,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=s.childLanes,a.lanes=s.lanes,a.child=s.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=s.memoizedProps,a.memoizedState=s.memoizedState,a.updateQueue=s.updateQueue,a.type=s.type,t=s.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return st(gt,gt.current&1|2),e.child}t=t.sibling}a.tail!==null&&wt()>ls&&(e.flags|=128,i=!0,Ds(a,!1),e.lanes=4194304)}else{if(!i)if(t=Ac(s),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ds(a,!0),a.tail===null&&a.tailMode==="hidden"&&!s.alternate&&!pt)return Yt(e),null}else 2*wt()-a.renderingStartTime>ls&&n!==1073741824&&(e.flags|=128,i=!0,Ds(a,!1),e.lanes=4194304);a.isBackwards?(s.sibling=e.child,e.child=s):(n=a.last,n!==null?n.sibling=s:e.child=s,a.last=s)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=wt(),e.sibling=null,n=gt.current,st(gt,i?n&1|2:n&1),e):(Yt(e),null);case 22:case 23:return mp(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?xn&1073741824&&(Yt(e),e.subtreeFlags&6&&(e.flags|=8192)):Yt(e),null;case 24:return null;case 25:return null}throw Error(ne(156,e.tag))}function gM(t,e){switch(qh(e),e.tag){case 1:return pn(e.type)&&xc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ss(),ut(hn),ut(Zt),rp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return ip(e),null;case 13:if(ut(gt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ne(340));rs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ut(gt),null;case 4:return ss(),null;case 10:return Qh(e.type._context),null;case 22:case 23:return mp(),null;case 24:return null;default:return null}}var cl=!1,Jt=!1,vM=typeof WeakSet=="function"?WeakSet:Set,ge=null;function Ba(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){yt(t,e,i)}else n.current=null}function Ud(t,e,n){try{n()}catch(i){yt(t,e,i)}}var Qm=!1;function _M(t,e){if(_d=gc,t=B_(),$h(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,a=i.focusNode;i=i.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var s=0,o=-1,l=-1,c=0,u=0,f=t,h=null;t:for(;;){for(var m;f!==n||r!==0&&f.nodeType!==3||(o=s+r),f!==a||i!==0&&f.nodeType!==3||(l=s+i),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)h=f,f=m;for(;;){if(f===t)break t;if(h===n&&++c===r&&(o=s),h===a&&++u===i&&(l=s),(m=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=m}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(yd={focusedElem:t,selectionRange:n},gc=!1,ge=e;ge!==null;)if(e=ge,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ge=t;else for(;ge!==null;){e=ge;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var y=g.memoizedProps,p=g.memoizedState,d=e.stateNode,_=d.getSnapshotBeforeUpdate(e.elementType===e.type?y:jn(e.type,y),p);d.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ne(163))}}catch(S){yt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,ge=t;break}ge=e.return}return g=Qm,Qm=!1,g}function Qs(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var a=r.destroy;r.destroy=void 0,a!==void 0&&Ud(e,n,a)}r=r.next}while(r!==i)}}function ru(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Od(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function ky(t){var e=t.alternate;e!==null&&(t.alternate=null,ky(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ai],delete e[mo],delete e[Ed],delete e[eM],delete e[tM])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Fy(t){return t.tag===5||t.tag===3||t.tag===4}function eg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Fy(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function kd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=yc));else if(i!==4&&(t=t.child,t!==null))for(kd(t,e,n),t=t.sibling;t!==null;)kd(t,e,n),t=t.sibling}function Fd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Fd(t,e,n),t=t.sibling;t!==null;)Fd(t,e,n),t=t.sibling}var Gt=null,Xn=!1;function Gi(t,e,n){for(n=n.child;n!==null;)zy(t,e,n),n=n.sibling}function zy(t,e,n){if(ui&&typeof ui.onCommitFiberUnmount=="function")try{ui.onCommitFiberUnmount(Kc,n)}catch{}switch(n.tag){case 5:Jt||Ba(n,e);case 6:var i=Gt,r=Xn;Gt=null,Gi(t,e,n),Gt=i,Xn=r,Gt!==null&&(Xn?(t=Gt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Gt.removeChild(n.stateNode));break;case 18:Gt!==null&&(Xn?(t=Gt,n=n.stateNode,t.nodeType===8?Yu(t.parentNode,n):t.nodeType===1&&Yu(t,n),co(t)):Yu(Gt,n.stateNode));break;case 4:i=Gt,r=Xn,Gt=n.stateNode.containerInfo,Xn=!0,Gi(t,e,n),Gt=i,Xn=r;break;case 0:case 11:case 14:case 15:if(!Jt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var a=r,s=a.destroy;a=a.tag,s!==void 0&&(a&2||a&4)&&Ud(n,e,s),r=r.next}while(r!==i)}Gi(t,e,n);break;case 1:if(!Jt&&(Ba(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){yt(n,e,o)}Gi(t,e,n);break;case 21:Gi(t,e,n);break;case 22:n.mode&1?(Jt=(i=Jt)||n.memoizedState!==null,Gi(t,e,n),Jt=i):Gi(t,e,n);break;default:Gi(t,e,n)}}function tg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new vM),e.forEach(function(i){var r=AM.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Hn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var a=t,s=e,o=s;e:for(;o!==null;){switch(o.tag){case 5:Gt=o.stateNode,Xn=!1;break e;case 3:Gt=o.stateNode.containerInfo,Xn=!0;break e;case 4:Gt=o.stateNode.containerInfo,Xn=!0;break e}o=o.return}if(Gt===null)throw Error(ne(160));zy(a,s,r),Gt=null,Xn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){yt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)By(e,t),e=e.sibling}function By(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Hn(e,t),ti(t),i&4){try{Qs(3,t,t.return),ru(3,t)}catch(y){yt(t,t.return,y)}try{Qs(5,t,t.return)}catch(y){yt(t,t.return,y)}}break;case 1:Hn(e,t),ti(t),i&512&&n!==null&&Ba(n,n.return);break;case 5:if(Hn(e,t),ti(t),i&512&&n!==null&&Ba(n,n.return),t.flags&32){var r=t.stateNode;try{ao(r,"")}catch(y){yt(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var a=t.memoizedProps,s=n!==null?n.memoizedProps:a,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&a.type==="radio"&&a.name!=null&&o_(r,a),ld(o,s);var c=ld(o,a);for(s=0;s<l.length;s+=2){var u=l[s],f=l[s+1];u==="style"?d_(r,f):u==="dangerouslySetInnerHTML"?u_(r,f):u==="children"?ao(r,f):Ih(r,u,f,c)}switch(o){case"input":id(r,a);break;case"textarea":l_(r,a);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!a.multiple;var m=a.value;m!=null?$a(r,!!a.multiple,m,!1):h!==!!a.multiple&&(a.defaultValue!=null?$a(r,!!a.multiple,a.defaultValue,!0):$a(r,!!a.multiple,a.multiple?[]:"",!1))}r[mo]=a}catch(y){yt(t,t.return,y)}}break;case 6:if(Hn(e,t),ti(t),i&4){if(t.stateNode===null)throw Error(ne(162));r=t.stateNode,a=t.memoizedProps;try{r.nodeValue=a}catch(y){yt(t,t.return,y)}}break;case 3:if(Hn(e,t),ti(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{co(e.containerInfo)}catch(y){yt(t,t.return,y)}break;case 4:Hn(e,t),ti(t);break;case 13:Hn(e,t),ti(t),r=t.child,r.flags&8192&&(a=r.memoizedState!==null,r.stateNode.isHidden=a,!a||r.alternate!==null&&r.alternate.memoizedState!==null||(hp=wt())),i&4&&tg(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(Jt=(c=Jt)||u,Hn(e,t),Jt=c):Hn(e,t),ti(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(ge=t,u=t.child;u!==null;){for(f=ge=u;ge!==null;){switch(h=ge,m=h.child,h.tag){case 0:case 11:case 14:case 15:Qs(4,h,h.return);break;case 1:Ba(h,h.return);var g=h.stateNode;if(typeof g.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(y){yt(i,n,y)}}break;case 5:Ba(h,h.return);break;case 22:if(h.memoizedState!==null){ig(f);continue}}m!==null?(m.return=h,ge=m):ig(f)}u=u.sibling}e:for(u=null,f=t;;){if(f.tag===5){if(u===null){u=f;try{r=f.stateNode,c?(a=r.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(o=f.stateNode,l=f.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=f_("display",s))}catch(y){yt(t,t.return,y)}}}else if(f.tag===6){if(u===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(y){yt(t,t.return,y)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;u===f&&(u=null),f=f.return}u===f&&(u=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Hn(e,t),ti(t),i&4&&tg(t);break;case 21:break;default:Hn(e,t),ti(t)}}function ti(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Fy(n)){var i=n;break e}n=n.return}throw Error(ne(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ao(r,""),i.flags&=-33);var a=eg(t);Fd(t,a,r);break;case 3:case 4:var s=i.stateNode.containerInfo,o=eg(t);kd(t,o,s);break;default:throw Error(ne(161))}}catch(l){yt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function yM(t,e,n){ge=t,Hy(t)}function Hy(t,e,n){for(var i=(t.mode&1)!==0;ge!==null;){var r=ge,a=r.child;if(r.tag===22&&i){var s=r.memoizedState!==null||cl;if(!s){var o=r.alternate,l=o!==null&&o.memoizedState!==null||Jt;o=cl;var c=Jt;if(cl=s,(Jt=l)&&!c)for(ge=r;ge!==null;)s=ge,l=s.child,s.tag===22&&s.memoizedState!==null?rg(r):l!==null?(l.return=s,ge=l):rg(r);for(;a!==null;)ge=a,Hy(a),a=a.sibling;ge=r,cl=o,Jt=c}ng(t)}else r.subtreeFlags&8772&&a!==null?(a.return=r,ge=a):ng(t)}}function ng(t){for(;ge!==null;){var e=ge;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Jt||ru(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Jt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:jn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var a=e.updateQueue;a!==null&&zm(e,a,i);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}zm(e,s,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var f=u.dehydrated;f!==null&&co(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ne(163))}Jt||e.flags&512&&Od(e)}catch(h){yt(e,e.return,h)}}if(e===t){ge=null;break}if(n=e.sibling,n!==null){n.return=e.return,ge=n;break}ge=e.return}}function ig(t){for(;ge!==null;){var e=ge;if(e===t){ge=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ge=n;break}ge=e.return}}function rg(t){for(;ge!==null;){var e=ge;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ru(4,e)}catch(l){yt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){yt(e,r,l)}}var a=e.return;try{Od(e)}catch(l){yt(e,a,l)}break;case 5:var s=e.return;try{Od(e)}catch(l){yt(e,s,l)}}}catch(l){yt(e,e.return,l)}if(e===t){ge=null;break}var o=e.sibling;if(o!==null){o.return=e.return,ge=o;break}ge=e.return}}var xM=Math.ceil,Pc=Bi.ReactCurrentDispatcher,fp=Bi.ReactCurrentOwner,On=Bi.ReactCurrentBatchConfig,Ze=0,zt=null,Rt=null,Vt=0,xn=0,Ha=br(0),Pt=0,So=null,sa=0,au=0,dp=0,eo=null,un=null,hp=0,ls=1/0,Si=null,Lc=!1,zd=null,dr=null,ul=!1,ir=null,Nc=0,to=0,Bd=null,tc=-1,nc=0;function rn(){return Ze&6?wt():tc!==-1?tc:tc=wt()}function hr(t){return t.mode&1?Ze&2&&Vt!==0?Vt&-Vt:iM.transition!==null?(nc===0&&(nc=w_()),nc):(t=nt,t!==0||(t=window.event,t=t===void 0?16:L_(t.type)),t):1}function Zn(t,e,n,i){if(50<to)throw to=0,Bd=null,Error(ne(185));Do(t,n,i),(!(Ze&2)||t!==zt)&&(t===zt&&(!(Ze&2)&&(au|=n),Pt===4&&er(t,Vt)),mn(t,i),n===1&&Ze===0&&!(e.mode&1)&&(ls=wt()+500,tu&&Ar()))}function mn(t,e){var n=t.callbackNode;iE(t,e);var i=mc(t,t===zt?Vt:0);if(i===0)n!==null&&hm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&hm(n),e===1)t.tag===0?nM(ag.bind(null,t)):K_(ag.bind(null,t)),ZE(function(){!(Ze&6)&&Ar()}),n=null;else{switch(T_(i)){case 1:n=zh;break;case 4:n=E_;break;case 16:n=pc;break;case 536870912:n=M_;break;default:n=pc}n=qy(n,Gy.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Gy(t,e){if(tc=-1,nc=0,Ze&6)throw Error(ne(327));var n=t.callbackNode;if(Za()&&t.callbackNode!==n)return null;var i=mc(t,t===zt?Vt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Dc(t,i);else{e=i;var r=Ze;Ze|=2;var a=Wy();(zt!==t||Vt!==e)&&(Si=null,ls=wt()+500,Jr(t,e));do try{MM();break}catch(o){Vy(t,o)}while(!0);Zh(),Pc.current=a,Ze=r,Rt!==null?e=0:(zt=null,Vt=0,e=Pt)}if(e!==0){if(e===2&&(r=hd(t),r!==0&&(i=r,e=Hd(t,r))),e===1)throw n=So,Jr(t,0),er(t,i),mn(t,wt()),n;if(e===6)er(t,i);else{if(r=t.current.alternate,!(i&30)&&!SM(r)&&(e=Dc(t,i),e===2&&(a=hd(t),a!==0&&(i=a,e=Hd(t,a))),e===1))throw n=So,Jr(t,0),er(t,i),mn(t,wt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ne(345));case 2:zr(t,un,Si);break;case 3:if(er(t,i),(i&130023424)===i&&(e=hp+500-wt(),10<e)){if(mc(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){rn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Sd(zr.bind(null,t,un,Si),e);break}zr(t,un,Si);break;case 4:if(er(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var s=31-Jn(i);a=1<<s,s=e[s],s>r&&(r=s),i&=~a}if(i=r,i=wt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*xM(i/1960))-i,10<i){t.timeoutHandle=Sd(zr.bind(null,t,un,Si),i);break}zr(t,un,Si);break;case 5:zr(t,un,Si);break;default:throw Error(ne(329))}}}return mn(t,wt()),t.callbackNode===n?Gy.bind(null,t):null}function Hd(t,e){var n=eo;return t.current.memoizedState.isDehydrated&&(Jr(t,e).flags|=256),t=Dc(t,e),t!==2&&(e=un,un=n,e!==null&&Gd(e)),t}function Gd(t){un===null?un=t:un.push.apply(un,t)}function SM(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],a=r.getSnapshot;r=r.value;try{if(!Qn(a(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function er(t,e){for(e&=~dp,e&=~au,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Jn(e),i=1<<n;t[n]=-1,e&=~i}}function ag(t){if(Ze&6)throw Error(ne(327));Za();var e=mc(t,0);if(!(e&1))return mn(t,wt()),null;var n=Dc(t,e);if(t.tag!==0&&n===2){var i=hd(t);i!==0&&(e=i,n=Hd(t,i))}if(n===1)throw n=So,Jr(t,0),er(t,e),mn(t,wt()),n;if(n===6)throw Error(ne(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,zr(t,un,Si),mn(t,wt()),null}function pp(t,e){var n=Ze;Ze|=1;try{return t(e)}finally{Ze=n,Ze===0&&(ls=wt()+500,tu&&Ar())}}function oa(t){ir!==null&&ir.tag===0&&!(Ze&6)&&Za();var e=Ze;Ze|=1;var n=On.transition,i=nt;try{if(On.transition=null,nt=1,t)return t()}finally{nt=i,On.transition=n,Ze=e,!(Ze&6)&&Ar()}}function mp(){xn=Ha.current,ut(Ha)}function Jr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,JE(n)),Rt!==null)for(n=Rt.return;n!==null;){var i=n;switch(qh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&xc();break;case 3:ss(),ut(hn),ut(Zt),rp();break;case 5:ip(i);break;case 4:ss();break;case 13:ut(gt);break;case 19:ut(gt);break;case 10:Qh(i.type._context);break;case 22:case 23:mp()}n=n.return}if(zt=t,Rt=t=pr(t.current,null),Vt=xn=e,Pt=0,So=null,dp=au=sa=0,un=eo=null,Xr!==null){for(e=0;e<Xr.length;e++)if(n=Xr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,a=n.pending;if(a!==null){var s=a.next;a.next=r,i.next=s}n.pending=i}Xr=null}return t}function Vy(t,e){do{var n=Rt;try{if(Zh(),Zl.current=Cc,Rc){for(var i=vt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Rc=!1}if(aa=0,kt=Ct=vt=null,Zs=!1,_o=0,fp.current=null,n===null||n.return===null){Pt=1,So=e,Rt=null;break}e:{var a=t,s=n.return,o=n,l=e;if(e=Vt,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=o,f=u.tag;if(!(u.mode&1)&&(f===0||f===11||f===15)){var h=u.alternate;h?(u.updateQueue=h.updateQueue,u.memoizedState=h.memoizedState,u.lanes=h.lanes):(u.updateQueue=null,u.memoizedState=null)}var m=Xm(s);if(m!==null){m.flags&=-257,$m(m,s,o,a,e),m.mode&1&&jm(a,c,e),e=m,l=c;var g=e.updateQueue;if(g===null){var y=new Set;y.add(l),e.updateQueue=y}else g.add(l);break e}else{if(!(e&1)){jm(a,c,e),gp();break e}l=Error(ne(426))}}else if(pt&&o.mode&1){var p=Xm(s);if(p!==null){!(p.flags&65536)&&(p.flags|=256),$m(p,s,o,a,e),Kh(os(l,o));break e}}a=l=os(l,o),Pt!==4&&(Pt=2),eo===null?eo=[a]:eo.push(a),a=s;do{switch(a.tag){case 3:a.flags|=65536,e&=-e,a.lanes|=e;var d=by(a,l,e);Fm(a,d);break e;case 1:o=l;var _=a.type,v=a.stateNode;if(!(a.flags&128)&&(typeof _.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(dr===null||!dr.has(v)))){a.flags|=65536,e&=-e,a.lanes|=e;var S=Ay(a,o,e);Fm(a,S);break e}}a=a.return}while(a!==null)}Xy(n)}catch(A){e=A,Rt===n&&n!==null&&(Rt=n=n.return);continue}break}while(!0)}function Wy(){var t=Pc.current;return Pc.current=Cc,t===null?Cc:t}function gp(){(Pt===0||Pt===3||Pt===2)&&(Pt=4),zt===null||!(sa&268435455)&&!(au&268435455)||er(zt,Vt)}function Dc(t,e){var n=Ze;Ze|=2;var i=Wy();(zt!==t||Vt!==e)&&(Si=null,Jr(t,e));do try{EM();break}catch(r){Vy(t,r)}while(!0);if(Zh(),Ze=n,Pc.current=i,Rt!==null)throw Error(ne(261));return zt=null,Vt=0,Pt}function EM(){for(;Rt!==null;)jy(Rt)}function MM(){for(;Rt!==null&&!Y1();)jy(Rt)}function jy(t){var e=Yy(t.alternate,t,xn);t.memoizedProps=t.pendingProps,e===null?Xy(t):Rt=e,fp.current=null}function Xy(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=gM(n,e),n!==null){n.flags&=32767,Rt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Pt=6,Rt=null;return}}else if(n=mM(n,e,xn),n!==null){Rt=n;return}if(e=e.sibling,e!==null){Rt=e;return}Rt=e=t}while(e!==null);Pt===0&&(Pt=5)}function zr(t,e,n){var i=nt,r=On.transition;try{On.transition=null,nt=1,wM(t,e,n,i)}finally{On.transition=r,nt=i}return null}function wM(t,e,n,i){do Za();while(ir!==null);if(Ze&6)throw Error(ne(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ne(177));t.callbackNode=null,t.callbackPriority=0;var a=n.lanes|n.childLanes;if(rE(t,a),t===zt&&(Rt=zt=null,Vt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ul||(ul=!0,qy(pc,function(){return Za(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=On.transition,On.transition=null;var s=nt;nt=1;var o=Ze;Ze|=4,fp.current=null,_M(t,n),By(n,t),WE(yd),gc=!!_d,yd=_d=null,t.current=n,yM(n),q1(),Ze=o,nt=s,On.transition=a}else t.current=n;if(ul&&(ul=!1,ir=t,Nc=r),a=t.pendingLanes,a===0&&(dr=null),Z1(n.stateNode),mn(t,wt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Lc)throw Lc=!1,t=zd,zd=null,t;return Nc&1&&t.tag!==0&&Za(),a=t.pendingLanes,a&1?t===Bd?to++:(to=0,Bd=t):to=0,Ar(),null}function Za(){if(ir!==null){var t=T_(Nc),e=On.transition,n=nt;try{if(On.transition=null,nt=16>t?16:t,ir===null)var i=!1;else{if(t=ir,ir=null,Nc=0,Ze&6)throw Error(ne(331));var r=Ze;for(Ze|=4,ge=t.current;ge!==null;){var a=ge,s=a.child;if(ge.flags&16){var o=a.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(ge=c;ge!==null;){var u=ge;switch(u.tag){case 0:case 11:case 15:Qs(8,u,a)}var f=u.child;if(f!==null)f.return=u,ge=f;else for(;ge!==null;){u=ge;var h=u.sibling,m=u.return;if(ky(u),u===c){ge=null;break}if(h!==null){h.return=m,ge=h;break}ge=m}}}var g=a.alternate;if(g!==null){var y=g.child;if(y!==null){g.child=null;do{var p=y.sibling;y.sibling=null,y=p}while(y!==null)}}ge=a}}if(a.subtreeFlags&2064&&s!==null)s.return=a,ge=s;else e:for(;ge!==null;){if(a=ge,a.flags&2048)switch(a.tag){case 0:case 11:case 15:Qs(9,a,a.return)}var d=a.sibling;if(d!==null){d.return=a.return,ge=d;break e}ge=a.return}}var _=t.current;for(ge=_;ge!==null;){s=ge;var v=s.child;if(s.subtreeFlags&2064&&v!==null)v.return=s,ge=v;else e:for(s=_;ge!==null;){if(o=ge,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:ru(9,o)}}catch(A){yt(o,o.return,A)}if(o===s){ge=null;break e}var S=o.sibling;if(S!==null){S.return=o.return,ge=S;break e}ge=o.return}}if(Ze=r,Ar(),ui&&typeof ui.onPostCommitFiberRoot=="function")try{ui.onPostCommitFiberRoot(Kc,t)}catch{}i=!0}return i}finally{nt=n,On.transition=e}}return!1}function sg(t,e,n){e=os(n,e),e=by(t,e,1),t=fr(t,e,1),e=rn(),t!==null&&(Do(t,1,e),mn(t,e))}function yt(t,e,n){if(t.tag===3)sg(t,t,n);else for(;e!==null;){if(e.tag===3){sg(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(dr===null||!dr.has(i))){t=os(n,t),t=Ay(e,t,1),e=fr(e,t,1),t=rn(),e!==null&&(Do(e,1,t),mn(e,t));break}}e=e.return}}function TM(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=rn(),t.pingedLanes|=t.suspendedLanes&n,zt===t&&(Vt&n)===n&&(Pt===4||Pt===3&&(Vt&130023424)===Vt&&500>wt()-hp?Jr(t,0):dp|=n),mn(t,e)}function $y(t,e){e===0&&(t.mode&1?(e=el,el<<=1,!(el&130023424)&&(el=4194304)):e=1);var n=rn();t=Di(t,e),t!==null&&(Do(t,e,n),mn(t,n))}function bM(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),$y(t,n)}function AM(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ne(314))}i!==null&&i.delete(e),$y(t,n)}var Yy;Yy=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||hn.current)dn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return dn=!1,pM(t,e,n);dn=!!(t.flags&131072)}else dn=!1,pt&&e.flags&1048576&&J_(e,Mc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;ec(t,e),t=e.pendingProps;var r=is(e,Zt.current);Ja(e,n),r=sp(null,e,i,t,r,n);var a=op();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,pn(i)?(a=!0,Sc(e)):a=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,tp(e),r.updater=nu,e.stateNode=r,r._reactInternals=e,Rd(e,i,t,n),e=Ld(null,e,i,!0,a,n)):(e.tag=0,pt&&a&&Yh(e),tn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(ec(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=CM(i),t=jn(i,t),r){case 0:e=Pd(null,e,i,t,n);break e;case 1:e=Km(null,e,i,t,n);break e;case 11:e=Ym(null,e,i,t,n);break e;case 14:e=qm(null,e,i,jn(i.type,t),n);break e}throw Error(ne(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:jn(i,r),Pd(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:jn(i,r),Km(t,e,i,r,n);case 3:e:{if(Ly(e),t===null)throw Error(ne(387));i=e.pendingProps,a=e.memoizedState,r=a.element,ty(t,e),bc(e,i,null,n);var s=e.memoizedState;if(i=s.element,a.isDehydrated)if(a={element:i,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=a,e.memoizedState=a,e.flags&256){r=os(Error(ne(423)),e),e=Jm(t,e,i,n,r);break e}else if(i!==r){r=os(Error(ne(424)),e),e=Jm(t,e,i,n,r);break e}else for(En=ur(e.stateNode.containerInfo.firstChild),Mn=e,pt=!0,$n=null,n=ay(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(rs(),i===r){e=Ii(t,e,n);break e}tn(t,e,i,n)}e=e.child}return e;case 5:return sy(e),t===null&&Td(e),i=e.type,r=e.pendingProps,a=t!==null?t.memoizedProps:null,s=r.children,xd(i,r)?s=null:a!==null&&xd(i,a)&&(e.flags|=32),Py(t,e),tn(t,e,s,n),e.child;case 6:return t===null&&Td(e),null;case 13:return Ny(t,e,n);case 4:return np(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=as(e,null,i,n):tn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:jn(i,r),Ym(t,e,i,r,n);case 7:return tn(t,e,e.pendingProps,n),e.child;case 8:return tn(t,e,e.pendingProps.children,n),e.child;case 12:return tn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,a=e.memoizedProps,s=r.value,st(wc,i._currentValue),i._currentValue=s,a!==null)if(Qn(a.value,s)){if(a.children===r.children&&!hn.current){e=Ii(t,e,n);break e}}else for(a=e.child,a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){s=a.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(a.tag===1){l=Ci(-1,n&-n),l.tag=2;var c=a.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),bd(a.return,n,e),o.lanes|=n;break}l=l.next}}else if(a.tag===10)s=a.type===e.type?null:a.child;else if(a.tag===18){if(s=a.return,s===null)throw Error(ne(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),bd(s,n,e),s=a.sibling}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}tn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ja(e,n),r=zn(r),i=i(r),e.flags|=1,tn(t,e,i,n),e.child;case 14:return i=e.type,r=jn(i,e.pendingProps),r=jn(i.type,r),qm(t,e,i,r,n);case 15:return Ry(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:jn(i,r),ec(t,e),e.tag=1,pn(i)?(t=!0,Sc(e)):t=!1,Ja(e,n),iy(e,i,r),Rd(e,i,r,n),Ld(null,e,i,!0,t,n);case 19:return Dy(t,e,n);case 22:return Cy(t,e,n)}throw Error(ne(156,e.tag))};function qy(t,e){return S_(t,e)}function RM(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function In(t,e,n,i){return new RM(t,e,n,i)}function vp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function CM(t){if(typeof t=="function")return vp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Oh)return 11;if(t===kh)return 14}return 2}function pr(t,e){var n=t.alternate;return n===null?(n=In(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ic(t,e,n,i,r,a){var s=2;if(i=t,typeof t=="function")vp(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case La:return Zr(n.children,r,a,e);case Uh:s=8,r|=8;break;case Zf:return t=In(12,n,e,r|2),t.elementType=Zf,t.lanes=a,t;case Qf:return t=In(13,n,e,r),t.elementType=Qf,t.lanes=a,t;case ed:return t=In(19,n,e,r),t.elementType=ed,t.lanes=a,t;case r_:return su(n,r,a,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case n_:s=10;break e;case i_:s=9;break e;case Oh:s=11;break e;case kh:s=14;break e;case Ji:s=16,i=null;break e}throw Error(ne(130,t==null?t:typeof t,""))}return e=In(s,n,e,r),e.elementType=t,e.type=i,e.lanes=a,e}function Zr(t,e,n,i){return t=In(7,t,i,e),t.lanes=n,t}function su(t,e,n,i){return t=In(22,t,i,e),t.elementType=r_,t.lanes=n,t.stateNode={isHidden:!1},t}function nf(t,e,n){return t=In(6,t,null,e),t.lanes=n,t}function rf(t,e,n){return e=In(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function PM(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ku(0),this.expirationTimes=ku(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ku(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function _p(t,e,n,i,r,a,s,o,l){return t=new PM(t,e,n,o,l),e===1?(e=1,a===!0&&(e|=8)):e=0,a=In(3,null,null,e),t.current=a,a.stateNode=t,a.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},tp(a),t}function LM(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Pa,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Ky(t){if(!t)return yr;t=t._reactInternals;e:{if(da(t)!==t||t.tag!==1)throw Error(ne(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(pn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ne(171))}if(t.tag===1){var n=t.type;if(pn(n))return q_(t,n,e)}return e}function Jy(t,e,n,i,r,a,s,o,l){return t=_p(n,i,!0,t,r,a,s,o,l),t.context=Ky(null),n=t.current,i=rn(),r=hr(n),a=Ci(i,r),a.callback=e??null,fr(n,a,r),t.current.lanes=r,Do(t,r,i),mn(t,i),t}function ou(t,e,n,i){var r=e.current,a=rn(),s=hr(r);return n=Ky(n),e.context===null?e.context=n:e.pendingContext=n,e=Ci(a,s),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=fr(r,e,s),t!==null&&(Zn(t,r,s,a),Jl(t,r,s)),s}function Ic(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function og(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function yp(t,e){og(t,e),(t=t.alternate)&&og(t,e)}function NM(){return null}var Zy=typeof reportError=="function"?reportError:function(t){console.error(t)};function xp(t){this._internalRoot=t}lu.prototype.render=xp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ne(409));ou(t,e,null,null)};lu.prototype.unmount=xp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;oa(function(){ou(null,t,null,null)}),e[Ni]=null}};function lu(t){this._internalRoot=t}lu.prototype.unstable_scheduleHydration=function(t){if(t){var e=R_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Qi.length&&e!==0&&e<Qi[n].priority;n++);Qi.splice(n,0,t),n===0&&P_(t)}};function Sp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function cu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function lg(){}function DM(t,e,n,i,r){if(r){if(typeof i=="function"){var a=i;i=function(){var c=Ic(s);a.call(c)}}var s=Jy(e,i,t,0,null,!1,!1,"",lg);return t._reactRootContainer=s,t[Ni]=s.current,ho(t.nodeType===8?t.parentNode:t),oa(),s}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=Ic(l);o.call(c)}}var l=_p(t,0,!1,null,null,!1,!1,"",lg);return t._reactRootContainer=l,t[Ni]=l.current,ho(t.nodeType===8?t.parentNode:t),oa(function(){ou(e,l,n,i)}),l}function uu(t,e,n,i,r){var a=n._reactRootContainer;if(a){var s=a;if(typeof r=="function"){var o=r;r=function(){var l=Ic(s);o.call(l)}}ou(e,s,t,r)}else s=DM(n,e,t,r,i);return Ic(s)}b_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ws(e.pendingLanes);n!==0&&(Bh(e,n|1),mn(e,wt()),!(Ze&6)&&(ls=wt()+500,Ar()))}break;case 13:oa(function(){var i=Di(t,1);if(i!==null){var r=rn();Zn(i,t,1,r)}}),yp(t,1)}};Hh=function(t){if(t.tag===13){var e=Di(t,134217728);if(e!==null){var n=rn();Zn(e,t,134217728,n)}yp(t,134217728)}};A_=function(t){if(t.tag===13){var e=hr(t),n=Di(t,e);if(n!==null){var i=rn();Zn(n,t,e,i)}yp(t,e)}};R_=function(){return nt};C_=function(t,e){var n=nt;try{return nt=t,e()}finally{nt=n}};ud=function(t,e,n){switch(e){case"input":if(id(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=eu(i);if(!r)throw Error(ne(90));s_(i),id(i,r)}}}break;case"textarea":l_(t,n);break;case"select":e=n.value,e!=null&&$a(t,!!n.multiple,e,!1)}};m_=pp;g_=oa;var IM={usingClientEntryPoint:!1,Events:[Uo,Ua,eu,h_,p_,pp]},Is={findFiberByHostInstance:jr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},UM={bundleType:Is.bundleType,version:Is.version,rendererPackageName:Is.rendererPackageName,rendererConfig:Is.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Bi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=y_(t),t===null?null:t.stateNode},findFiberByHostInstance:Is.findFiberByHostInstance||NM,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fl.isDisabled&&fl.supportsFiber)try{Kc=fl.inject(UM),ui=fl}catch{}}Tn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=IM;Tn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Sp(e))throw Error(ne(200));return LM(t,e,null,n)};Tn.createRoot=function(t,e){if(!Sp(t))throw Error(ne(299));var n=!1,i="",r=Zy;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=_p(t,1,!1,null,null,n,!1,i,r),t[Ni]=e.current,ho(t.nodeType===8?t.parentNode:t),new xp(e)};Tn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ne(188)):(t=Object.keys(t).join(","),Error(ne(268,t)));return t=y_(e),t=t===null?null:t.stateNode,t};Tn.flushSync=function(t){return oa(t)};Tn.hydrate=function(t,e,n){if(!cu(e))throw Error(ne(200));return uu(null,t,e,!0,n)};Tn.hydrateRoot=function(t,e,n){if(!Sp(t))throw Error(ne(405));var i=n!=null&&n.hydratedSources||null,r=!1,a="",s=Zy;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=Jy(e,null,t,1,n??null,r,!1,a,s),t[Ni]=e.current,ho(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new lu(e)};Tn.render=function(t,e,n){if(!cu(e))throw Error(ne(200));return uu(null,t,e,!1,n)};Tn.unmountComponentAtNode=function(t){if(!cu(t))throw Error(ne(40));return t._reactRootContainer?(oa(function(){uu(null,null,t,!1,function(){t._reactRootContainer=null,t[Ni]=null})}),!0):!1};Tn.unstable_batchedUpdates=pp;Tn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!cu(n))throw Error(ne(200));if(t==null||t._reactInternals===void 0)throw Error(ne(38));return uu(t,e,n,!1,i)};Tn.version="18.2.0-next-9e3b772b8-20220608";function Qy(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Qy)}catch(t){console.error(t)}}Qy(),J0.exports=Tn;var OM=J0.exports,cg=OM;Kf.createRoot=cg.createRoot,Kf.hydrateRoot=cg.hydrateRoot;/**
 * @remix-run/router v1.15.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Eo(){return Eo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Eo.apply(this,arguments)}var rr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(rr||(rr={}));const ug="popstate";function kM(t){t===void 0&&(t={});function e(i,r){let{pathname:a,search:s,hash:o}=i.location;return Vd("",{pathname:a,search:s,hash:o},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(i,r){return typeof r=="string"?r:tx(r)}return zM(e,n,null,t)}function Lt(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function ex(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function FM(){return Math.random().toString(36).substr(2,8)}function fg(t,e){return{usr:t.state,key:t.key,idx:e}}function Vd(t,e,n,i){return n===void 0&&(n=null),Eo({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?_s(e):e,{state:n,key:e&&e.key||i||FM()})}function tx(t){let{pathname:e="/",search:n="",hash:i=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function _s(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function zM(t,e,n,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:a=!1}=i,s=r.history,o=rr.Pop,l=null,c=u();c==null&&(c=0,s.replaceState(Eo({},s.state,{idx:c}),""));function u(){return(s.state||{idx:null}).idx}function f(){o=rr.Pop;let p=u(),d=p==null?null:p-c;c=p,l&&l({action:o,location:y.location,delta:d})}function h(p,d){o=rr.Push;let _=Vd(y.location,p,d);n&&n(_,p),c=u()+1;let v=fg(_,c),S=y.createHref(_);try{s.pushState(v,"",S)}catch(A){if(A instanceof DOMException&&A.name==="DataCloneError")throw A;r.location.assign(S)}a&&l&&l({action:o,location:y.location,delta:1})}function m(p,d){o=rr.Replace;let _=Vd(y.location,p,d);n&&n(_,p),c=u();let v=fg(_,c),S=y.createHref(_);s.replaceState(v,"",S),a&&l&&l({action:o,location:y.location,delta:0})}function g(p){let d=r.location.origin!=="null"?r.location.origin:r.location.href,_=typeof p=="string"?p:tx(p);return _=_.replace(/ $/,"%20"),Lt(d,"No window.location.(origin|href) available to create URL for href: "+_),new URL(_,d)}let y={get action(){return o},get location(){return t(r,s)},listen(p){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(ug,f),l=p,()=>{r.removeEventListener(ug,f),l=null}},createHref(p){return e(r,p)},createURL:g,encodeLocation(p){let d=g(p);return{pathname:d.pathname,search:d.search,hash:d.hash}},push:h,replace:m,go(p){return s.go(p)}};return y}var dg;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(dg||(dg={}));function BM(t,e,n){n===void 0&&(n="/");let i=typeof e=="string"?_s(e):e,r=rx(i.pathname||"/",n);if(r==null)return null;let a=nx(t);HM(a);let s=null;for(let o=0;s==null&&o<a.length;++o){let l=QM(r);s=KM(a[o],l)}return s}function nx(t,e,n,i){e===void 0&&(e=[]),n===void 0&&(n=[]),i===void 0&&(i="");let r=(a,s,o)=>{let l={relativePath:o===void 0?a.path||"":o,caseSensitive:a.caseSensitive===!0,childrenIndex:s,route:a};l.relativePath.startsWith("/")&&(Lt(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let c=Qr([i,l.relativePath]),u=n.concat(l);a.children&&a.children.length>0&&(Lt(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),nx(a.children,e,u,c)),!(a.path==null&&!a.index)&&e.push({path:c,score:YM(c,a.index),routesMeta:u})};return t.forEach((a,s)=>{var o;if(a.path===""||!((o=a.path)!=null&&o.includes("?")))r(a,s);else for(let l of ix(a.path))r(a,s,l)}),e}function ix(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,r=n.endsWith("?"),a=n.replace(/\?$/,"");if(i.length===0)return r?[a,""]:[a];let s=ix(i.join("/")),o=[];return o.push(...s.map(l=>l===""?a:[a,l].join("/"))),r&&o.push(...s),o.map(l=>t.startsWith("/")&&l===""?"/":l)}function HM(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:qM(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const GM=/^:[\w-]+$/,VM=3,WM=2,jM=1,XM=10,$M=-2,hg=t=>t==="*";function YM(t,e){let n=t.split("/"),i=n.length;return n.some(hg)&&(i+=$M),e&&(i+=WM),n.filter(r=>!hg(r)).reduce((r,a)=>r+(GM.test(a)?VM:a===""?jM:XM),i)}function qM(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function KM(t,e){let{routesMeta:n}=t,i={},r="/",a=[];for(let s=0;s<n.length;++s){let o=n[s],l=s===n.length-1,c=r==="/"?e:e.slice(r.length)||"/",u=JM({path:o.relativePath,caseSensitive:o.caseSensitive,end:l},c);if(!u)return null;Object.assign(i,u.params);let f=o.route;a.push({params:i,pathname:Qr([r,u.pathname]),pathnameBase:aw(Qr([r,u.pathnameBase])),route:f}),u.pathnameBase!=="/"&&(r=Qr([r,u.pathnameBase]))}return a}function JM(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=ZM(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let a=r[0],s=a.replace(/(.)\/+$/,"$1"),o=r.slice(1);return{params:i.reduce((c,u,f)=>{let{paramName:h,isOptional:m}=u;if(h==="*"){let y=o[f]||"";s=a.slice(0,a.length-y.length).replace(/(.)\/+$/,"$1")}const g=o[f];return m&&!g?c[h]=void 0:c[h]=(g||"").replace(/%2F/g,"/"),c},{}),pathname:a,pathnameBase:s,pattern:t}}function ZM(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),ex(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,o,l)=>(i.push({paramName:o,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function QM(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return ex(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function rx(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}function ew(t,e){e===void 0&&(e="/");let{pathname:n,search:i="",hash:r=""}=typeof t=="string"?_s(t):t;return{pathname:n?n.startsWith("/")?n:tw(n,e):e,search:sw(i),hash:ow(r)}}function tw(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function af(t,e,n,i){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function nw(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function iw(t,e){let n=nw(t);return e?n.map((i,r)=>r===t.length-1?i.pathname:i.pathnameBase):n.map(i=>i.pathnameBase)}function rw(t,e,n,i){i===void 0&&(i=!1);let r;typeof t=="string"?r=_s(t):(r=Eo({},t),Lt(!r.pathname||!r.pathname.includes("?"),af("?","pathname","search",r)),Lt(!r.pathname||!r.pathname.includes("#"),af("#","pathname","hash",r)),Lt(!r.search||!r.search.includes("#"),af("#","search","hash",r)));let a=t===""||r.pathname==="",s=a?"/":r.pathname,o;if(s==null)o=n;else{let f=e.length-1;if(!i&&s.startsWith("..")){let h=s.split("/");for(;h[0]==="..";)h.shift(),f-=1;r.pathname=h.join("/")}o=f>=0?e[f]:"/"}let l=ew(r,o),c=s&&s!=="/"&&s.endsWith("/"),u=(a||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||u)&&(l.pathname+="/"),l}const Qr=t=>t.join("/").replace(/\/\/+/g,"/"),aw=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),sw=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,ow=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function lw(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const ax=["post","put","patch","delete"];new Set(ax);const cw=["get",...ax];new Set(cw);/**
 * React Router v6.22.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Mo(){return Mo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Mo.apply(this,arguments)}const Ep=se.createContext(null),uw=se.createContext(null),fu=se.createContext(null),du=se.createContext(null),ys=se.createContext({outlet:null,matches:[],isDataRoute:!1}),sx=se.createContext(null);function hu(){return se.useContext(du)!=null}function ox(){return hu()||Lt(!1),se.useContext(du).location}function lx(t){se.useContext(fu).static||se.useLayoutEffect(t)}function fw(){let{isDataRoute:t}=se.useContext(ys);return t?ww():dw()}function dw(){hu()||Lt(!1);let t=se.useContext(Ep),{basename:e,future:n,navigator:i}=se.useContext(fu),{matches:r}=se.useContext(ys),{pathname:a}=ox(),s=JSON.stringify(iw(r,n.v7_relativeSplatPath)),o=se.useRef(!1);return lx(()=>{o.current=!0}),se.useCallback(function(c,u){if(u===void 0&&(u={}),!o.current)return;if(typeof c=="number"){i.go(c);return}let f=rw(c,JSON.parse(s),a,u.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:Qr([e,f.pathname])),(u.replace?i.replace:i.push)(f,u.state,u)},[e,i,s,a,t])}function hw(t,e){return pw(t,e)}function pw(t,e,n,i){hu()||Lt(!1);let{navigator:r}=se.useContext(fu),{matches:a}=se.useContext(ys),s=a[a.length-1],o=s?s.params:{};s&&s.pathname;let l=s?s.pathnameBase:"/";s&&s.route;let c=ox(),u;if(e){var f;let p=typeof e=="string"?_s(e):e;l==="/"||(f=p.pathname)!=null&&f.startsWith(l)||Lt(!1),u=p}else u=c;let h=u.pathname||"/",m=h;if(l!=="/"){let p=l.replace(/^\//,"").split("/");m="/"+h.replace(/^\//,"").split("/").slice(p.length).join("/")}let g=BM(t,{pathname:m}),y=yw(g&&g.map(p=>Object.assign({},p,{params:Object.assign({},o,p.params),pathname:Qr([l,r.encodeLocation?r.encodeLocation(p.pathname).pathname:p.pathname]),pathnameBase:p.pathnameBase==="/"?l:Qr([l,r.encodeLocation?r.encodeLocation(p.pathnameBase).pathname:p.pathnameBase])})),a,n,i);return e&&y?se.createElement(du.Provider,{value:{location:Mo({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:rr.Pop}},y):y}function mw(){let t=Mw(),e=lw(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return se.createElement(se.Fragment,null,se.createElement("h2",null,"Unexpected Application Error!"),se.createElement("h3",{style:{fontStyle:"italic"}},e),n?se.createElement("pre",{style:r},n):null,null)}const gw=se.createElement(mw,null);class vw extends se.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?se.createElement(ys.Provider,{value:this.props.routeContext},se.createElement(sx.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function _w(t){let{routeContext:e,match:n,children:i}=t,r=se.useContext(Ep);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),se.createElement(ys.Provider,{value:e},i)}function yw(t,e,n,i){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),i===void 0&&(i=null),t==null){var a;if((a=n)!=null&&a.errors)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let u=s.findIndex(f=>f.route.id&&(o==null?void 0:o[f.route.id]));u>=0||Lt(!1),s=s.slice(0,Math.min(s.length,u+1))}let l=!1,c=-1;if(n&&i&&i.v7_partialHydration)for(let u=0;u<s.length;u++){let f=s[u];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=u),f.route.id){let{loaderData:h,errors:m}=n,g=f.route.loader&&h[f.route.id]===void 0&&(!m||m[f.route.id]===void 0);if(f.route.lazy||g){l=!0,c>=0?s=s.slice(0,c+1):s=[s[0]];break}}}return s.reduceRight((u,f,h)=>{let m,g=!1,y=null,p=null;n&&(m=o&&f.route.id?o[f.route.id]:void 0,y=f.route.errorElement||gw,l&&(c<0&&h===0?(Tw("route-fallback",!1),g=!0,p=null):c===h&&(g=!0,p=f.route.hydrateFallbackElement||null)));let d=e.concat(s.slice(0,h+1)),_=()=>{let v;return m?v=y:g?v=p:f.route.Component?v=se.createElement(f.route.Component,null):f.route.element?v=f.route.element:v=u,se.createElement(_w,{match:f,routeContext:{outlet:u,matches:d,isDataRoute:n!=null},children:v})};return n&&(f.route.ErrorBoundary||f.route.errorElement||h===0)?se.createElement(vw,{location:n.location,revalidation:n.revalidation,component:y,error:m,children:_(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):_()},null)}var cx=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(cx||{}),Uc=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Uc||{});function xw(t){let e=se.useContext(Ep);return e||Lt(!1),e}function Sw(t){let e=se.useContext(uw);return e||Lt(!1),e}function Ew(t){let e=se.useContext(ys);return e||Lt(!1),e}function ux(t){let e=Ew(),n=e.matches[e.matches.length-1];return n.route.id||Lt(!1),n.route.id}function Mw(){var t;let e=se.useContext(sx),n=Sw(Uc.UseRouteError),i=ux(Uc.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[i]}function ww(){let{router:t}=xw(cx.UseNavigateStable),e=ux(Uc.UseNavigateStable),n=se.useRef(!1);return lx(()=>{n.current=!0}),se.useCallback(function(r,a){a===void 0&&(a={}),n.current&&(typeof r=="number"?t.navigate(r):t.navigate(r,Mo({fromRouteId:e},a)))},[t,e])}const pg={};function Tw(t,e,n){!e&&!pg[t]&&(pg[t]=!0)}function rc(t){Lt(!1)}function bw(t){let{basename:e="/",children:n=null,location:i,navigationType:r=rr.Pop,navigator:a,static:s=!1,future:o}=t;hu()&&Lt(!1);let l=e.replace(/^\/*/,"/"),c=se.useMemo(()=>({basename:l,navigator:a,static:s,future:Mo({v7_relativeSplatPath:!1},o)}),[l,o,a,s]);typeof i=="string"&&(i=_s(i));let{pathname:u="/",search:f="",hash:h="",state:m=null,key:g="default"}=i,y=se.useMemo(()=>{let p=rx(u,l);return p==null?null:{location:{pathname:p,search:f,hash:h,state:m,key:g},navigationType:r}},[l,u,f,h,m,g,r]);return y==null?null:se.createElement(fu.Provider,{value:c},se.createElement(du.Provider,{children:n,value:y}))}function Aw(t){let{children:e,location:n}=t;return hw(Wd(e),n)}new Promise(()=>{});function Wd(t,e){e===void 0&&(e=[]);let n=[];return se.Children.forEach(t,(i,r)=>{if(!se.isValidElement(i))return;let a=[...e,r];if(i.type===se.Fragment){n.push.apply(n,Wd(i.props.children,a));return}i.type!==rc&&Lt(!1),!i.props.index||!i.props.children||Lt(!1);let s={id:i.props.id||a.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(s.children=Wd(i.props.children,a)),n.push(s)}),n}/**
 * React Router DOM v6.22.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const Rw="6";try{window.__reactRouterVersion=Rw}catch{}const Cw="startTransition",mg=b1[Cw];function Pw(t){let{basename:e,children:n,future:i,window:r}=t,a=se.useRef();a.current==null&&(a.current=kM({window:r,v5Compat:!0}));let s=a.current,[o,l]=se.useState({action:s.action,location:s.location}),{v7_startTransition:c}=i||{},u=se.useCallback(f=>{c&&mg?mg(()=>l(f)):l(f)},[l,c]);return se.useLayoutEffect(()=>s.listen(u),[s,u]),se.createElement(bw,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:s,future:i})}var gg;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(gg||(gg={}));var vg;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(vg||(vg={}));const Lw="/assets/bird-spin-BzhhdVxH.gif",_g=()=>{const[t,e]=se.useState(!0);return se.useEffect(()=>{const n=setTimeout(()=>{e(!1)},2e3);return()=>clearTimeout(n)},[]),t?D.jsx("div",{className:"loading-logo",children:D.jsx("img",{src:Lw,alt:"Loading"})}):null};function yg(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function me(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?yg(Object(n),!0).forEach(function(i){Nt(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):yg(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function Oc(t){"@babel/helpers - typeof";return Oc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Oc(t)}function Nw(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function xg(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function Dw(t,e,n){return e&&xg(t.prototype,e),n&&xg(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function Nt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Mp(t,e){return Uw(t)||kw(t,e)||fx(t,e)||zw()}function ko(t){return Iw(t)||Ow(t)||fx(t)||Fw()}function Iw(t){if(Array.isArray(t))return jd(t)}function Uw(t){if(Array.isArray(t))return t}function Ow(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function kw(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var i=[],r=!0,a=!1,s,o;try{for(n=n.call(t);!(r=(s=n.next()).done)&&(i.push(s.value),!(e&&i.length===e));r=!0);}catch(l){a=!0,o=l}finally{try{!r&&n.return!=null&&n.return()}finally{if(a)throw o}}return i}}function fx(t,e){if(t){if(typeof t=="string")return jd(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return jd(t,e)}}function jd(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function Fw(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function zw(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Sg=function(){},wp={},dx={},hx=null,px={mark:Sg,measure:Sg};try{typeof window<"u"&&(wp=window),typeof document<"u"&&(dx=document),typeof MutationObserver<"u"&&(hx=MutationObserver),typeof performance<"u"&&(px=performance)}catch{}var Bw=wp.navigator||{},Eg=Bw.userAgent,Mg=Eg===void 0?"":Eg,xr=wp,ft=dx,wg=hx,dl=px;xr.document;var Hi=!!ft.documentElement&&!!ft.head&&typeof ft.addEventListener=="function"&&typeof ft.createElement=="function",mx=~Mg.indexOf("MSIE")||~Mg.indexOf("Trident/"),hl,pl,ml,gl,vl,Ui="___FONT_AWESOME___",Xd=16,gx="fa",vx="svg-inline--fa",la="data-fa-i2svg",$d="data-fa-pseudo-element",Hw="data-fa-pseudo-element-pending",Tp="data-prefix",bp="data-icon",Tg="fontawesome-i2svg",Gw="async",Vw=["HTML","HEAD","STYLE","SCRIPT"],_x=function(){try{return!0}catch{return!1}}(),ct="classic",xt="sharp",Ap=[ct,xt];function Fo(t){return new Proxy(t,{get:function(n,i){return i in n?n[i]:n[ct]}})}var wo=Fo((hl={},Nt(hl,ct,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),Nt(hl,xt,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),hl)),To=Fo((pl={},Nt(pl,ct,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),Nt(pl,xt,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),pl)),bo=Fo((ml={},Nt(ml,ct,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),Nt(ml,xt,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),ml)),Ww=Fo((gl={},Nt(gl,ct,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),Nt(gl,xt,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),gl)),jw=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,yx="fa-layers-text",Xw=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,$w=Fo((vl={},Nt(vl,ct,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),Nt(vl,xt,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),vl)),xx=[1,2,3,4,5,6,7,8,9,10],Yw=xx.concat([11,12,13,14,15,16,17,18,19,20]),qw=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Yr={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Ao=new Set;Object.keys(To[ct]).map(Ao.add.bind(Ao));Object.keys(To[xt]).map(Ao.add.bind(Ao));var Kw=[].concat(Ap,ko(Ao),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Yr.GROUP,Yr.SWAP_OPACITY,Yr.PRIMARY,Yr.SECONDARY]).concat(xx.map(function(t){return"".concat(t,"x")})).concat(Yw.map(function(t){return"w-".concat(t)})),no=xr.FontAwesomeConfig||{};function Jw(t){var e=ft.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function Zw(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(ft&&typeof ft.querySelector=="function"){var Qw=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Qw.forEach(function(t){var e=Mp(t,2),n=e[0],i=e[1],r=Zw(Jw(n));r!=null&&(no[i]=r)})}var Sx={styleDefault:"solid",familyDefault:"classic",cssPrefix:gx,replacementClass:vx,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};no.familyPrefix&&(no.cssPrefix=no.familyPrefix);var cs=me(me({},Sx),no);cs.autoReplaceSvg||(cs.observeMutations=!1);var _e={};Object.keys(Sx).forEach(function(t){Object.defineProperty(_e,t,{enumerable:!0,set:function(n){cs[t]=n,io.forEach(function(i){return i(_e)})},get:function(){return cs[t]}})});Object.defineProperty(_e,"familyPrefix",{enumerable:!0,set:function(e){cs.cssPrefix=e,io.forEach(function(n){return n(_e)})},get:function(){return cs.cssPrefix}});xr.FontAwesomeConfig=_e;var io=[];function eT(t){return io.push(t),function(){io.splice(io.indexOf(t),1)}}var Vi=Xd,oi={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function tT(t){if(!(!t||!Hi)){var e=ft.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=ft.head.childNodes,i=null,r=n.length-1;r>-1;r--){var a=n[r],s=(a.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(i=a)}return ft.head.insertBefore(e,i),t}}var nT="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Ro(){for(var t=12,e="";t-- >0;)e+=nT[Math.random()*62|0];return e}function xs(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Rp(t){return t.classList?xs(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function Ex(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function iT(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(Ex(t[n]),'" ')},"").trim()}function pu(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function Cp(t){return t.size!==oi.size||t.x!==oi.x||t.y!==oi.y||t.rotate!==oi.rotate||t.flipX||t.flipY}function rT(t){var e=t.transform,n=t.containerWidth,i=t.iconWidth,r={transform:"translate(".concat(n/2," 256)")},a="translate(".concat(e.x*32,", ").concat(e.y*32,") "),s="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),o="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(a," ").concat(s," ").concat(o)},c={transform:"translate(".concat(i/2*-1," -256)")};return{outer:r,inner:l,path:c}}function aT(t){var e=t.transform,n=t.width,i=n===void 0?Xd:n,r=t.height,a=r===void 0?Xd:r,s=t.startCentered,o=s===void 0?!1:s,l="";return o&&mx?l+="translate(".concat(e.x/Vi-i/2,"em, ").concat(e.y/Vi-a/2,"em) "):o?l+="translate(calc(-50% + ".concat(e.x/Vi,"em), calc(-50% + ").concat(e.y/Vi,"em)) "):l+="translate(".concat(e.x/Vi,"em, ").concat(e.y/Vi,"em) "),l+="scale(".concat(e.size/Vi*(e.flipX?-1:1),", ").concat(e.size/Vi*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var sT=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Mx(){var t=gx,e=vx,n=_e.cssPrefix,i=_e.replacementClass,r=sT;if(n!==t||i!==e){var a=new RegExp("\\.".concat(t,"\\-"),"g"),s=new RegExp("\\--".concat(t,"\\-"),"g"),o=new RegExp("\\.".concat(e),"g");r=r.replace(a,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(o,".".concat(i))}return r}var bg=!1;function sf(){_e.autoAddCss&&!bg&&(tT(Mx()),bg=!0)}var oT={mixout:function(){return{dom:{css:Mx,insertCss:sf}}},hooks:function(){return{beforeDOMElementCreation:function(){sf()},beforeI2svg:function(){sf()}}}},Oi=xr||{};Oi[Ui]||(Oi[Ui]={});Oi[Ui].styles||(Oi[Ui].styles={});Oi[Ui].hooks||(Oi[Ui].hooks={});Oi[Ui].shims||(Oi[Ui].shims=[]);var Kn=Oi[Ui],wx=[],lT=function t(){ft.removeEventListener("DOMContentLoaded",t),kc=1,wx.map(function(e){return e()})},kc=!1;Hi&&(kc=(ft.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ft.readyState),kc||ft.addEventListener("DOMContentLoaded",lT));function cT(t){Hi&&(kc?setTimeout(t,0):wx.push(t))}function zo(t){var e=t.tag,n=t.attributes,i=n===void 0?{}:n,r=t.children,a=r===void 0?[]:r;return typeof t=="string"?Ex(t):"<".concat(e," ").concat(iT(i),">").concat(a.map(zo).join(""),"</").concat(e,">")}function Ag(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var uT=function(e,n){return function(i,r,a,s){return e.call(n,i,r,a,s)}},of=function(e,n,i,r){var a=Object.keys(e),s=a.length,o=r!==void 0?uT(n,r):n,l,c,u;for(i===void 0?(l=1,u=e[a[0]]):(l=0,u=i);l<s;l++)c=a[l],u=o(u,e[c],c,e);return u};function fT(t){for(var e=[],n=0,i=t.length;n<i;){var r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<i){var a=t.charCodeAt(n++);(a&64512)==56320?e.push(((r&1023)<<10)+(a&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function Yd(t){var e=fT(t);return e.length===1?e[0].toString(16):null}function dT(t,e){var n=t.length,i=t.charCodeAt(e),r;return i>=55296&&i<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(i-55296)*1024+r-56320+65536:i}function Rg(t){return Object.keys(t).reduce(function(e,n){var i=t[n],r=!!i.icon;return r?e[i.iconName]=i.icon:e[n]=i,e},{})}function qd(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=n.skipHooks,r=i===void 0?!1:i,a=Rg(e);typeof Kn.hooks.addPack=="function"&&!r?Kn.hooks.addPack(t,Rg(e)):Kn.styles[t]=me(me({},Kn.styles[t]||{}),a),t==="fas"&&qd("fa",e)}var _l,yl,xl,Ga=Kn.styles,hT=Kn.shims,pT=(_l={},Nt(_l,ct,Object.values(bo[ct])),Nt(_l,xt,Object.values(bo[xt])),_l),Pp=null,Tx={},bx={},Ax={},Rx={},Cx={},mT=(yl={},Nt(yl,ct,Object.keys(wo[ct])),Nt(yl,xt,Object.keys(wo[xt])),yl);function gT(t){return~Kw.indexOf(t)}function vT(t,e){var n=e.split("-"),i=n[0],r=n.slice(1).join("-");return i===t&&r!==""&&!gT(r)?r:null}var Px=function(){var e=function(a){return of(Ga,function(s,o,l){return s[l]=of(o,a,{}),s},{})};Tx=e(function(r,a,s){if(a[3]&&(r[a[3]]=s),a[2]){var o=a[2].filter(function(l){return typeof l=="number"});o.forEach(function(l){r[l.toString(16)]=s})}return r}),bx=e(function(r,a,s){if(r[s]=s,a[2]){var o=a[2].filter(function(l){return typeof l=="string"});o.forEach(function(l){r[l]=s})}return r}),Cx=e(function(r,a,s){var o=a[2];return r[s]=s,o.forEach(function(l){r[l]=s}),r});var n="far"in Ga||_e.autoFetchSvg,i=of(hT,function(r,a){var s=a[0],o=a[1],l=a[2];return o==="far"&&!n&&(o="fas"),typeof s=="string"&&(r.names[s]={prefix:o,iconName:l}),typeof s=="number"&&(r.unicodes[s.toString(16)]={prefix:o,iconName:l}),r},{names:{},unicodes:{}});Ax=i.names,Rx=i.unicodes,Pp=mu(_e.styleDefault,{family:_e.familyDefault})};eT(function(t){Pp=mu(t.styleDefault,{family:_e.familyDefault})});Px();function Lp(t,e){return(Tx[t]||{})[e]}function _T(t,e){return(bx[t]||{})[e]}function qr(t,e){return(Cx[t]||{})[e]}function Lx(t){return Ax[t]||{prefix:null,iconName:null}}function yT(t){var e=Rx[t],n=Lp("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Sr(){return Pp}var Np=function(){return{prefix:null,iconName:null,rest:[]}};function mu(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,i=n===void 0?ct:n,r=wo[i][t],a=To[i][t]||To[i][r],s=t in Kn.styles?t:null;return a||s||null}var Cg=(xl={},Nt(xl,ct,Object.keys(bo[ct])),Nt(xl,xt,Object.keys(bo[xt])),xl);function gu(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=n.skipLookups,r=i===void 0?!1:i,a=(e={},Nt(e,ct,"".concat(_e.cssPrefix,"-").concat(ct)),Nt(e,xt,"".concat(_e.cssPrefix,"-").concat(xt)),e),s=null,o=ct;(t.includes(a[ct])||t.some(function(c){return Cg[ct].includes(c)}))&&(o=ct),(t.includes(a[xt])||t.some(function(c){return Cg[xt].includes(c)}))&&(o=xt);var l=t.reduce(function(c,u){var f=vT(_e.cssPrefix,u);if(Ga[u]?(u=pT[o].includes(u)?Ww[o][u]:u,s=u,c.prefix=u):mT[o].indexOf(u)>-1?(s=u,c.prefix=mu(u,{family:o})):f?c.iconName=f:u!==_e.replacementClass&&u!==a[ct]&&u!==a[xt]&&c.rest.push(u),!r&&c.prefix&&c.iconName){var h=s==="fa"?Lx(c.iconName):{},m=qr(c.prefix,c.iconName);h.prefix&&(s=null),c.iconName=h.iconName||m||c.iconName,c.prefix=h.prefix||c.prefix,c.prefix==="far"&&!Ga.far&&Ga.fas&&!_e.autoFetchSvg&&(c.prefix="fas")}return c},Np());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&o===xt&&(Ga.fass||_e.autoFetchSvg)&&(l.prefix="fass",l.iconName=qr(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||s==="fa")&&(l.prefix=Sr()||"fas"),l}var xT=function(){function t(){Nw(this,t),this.definitions={}}return Dw(t,[{key:"add",value:function(){for(var n=this,i=arguments.length,r=new Array(i),a=0;a<i;a++)r[a]=arguments[a];var s=r.reduce(this._pullDefinitions,{});Object.keys(s).forEach(function(o){n.definitions[o]=me(me({},n.definitions[o]||{}),s[o]),qd(o,s[o]);var l=bo[ct][o];l&&qd(l,s[o]),Px()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,i){var r=i.prefix&&i.iconName&&i.icon?{0:i}:i;return Object.keys(r).map(function(a){var s=r[a],o=s.prefix,l=s.iconName,c=s.icon,u=c[2];n[o]||(n[o]={}),u.length>0&&u.forEach(function(f){typeof f=="string"&&(n[o][f]=c)}),n[o][l]=c}),n}}]),t}(),Pg=[],Va={},Qa={},ST=Object.keys(Qa);function ET(t,e){var n=e.mixoutsTo;return Pg=t,Va={},Object.keys(Qa).forEach(function(i){ST.indexOf(i)===-1&&delete Qa[i]}),Pg.forEach(function(i){var r=i.mixout?i.mixout():{};if(Object.keys(r).forEach(function(s){typeof r[s]=="function"&&(n[s]=r[s]),Oc(r[s])==="object"&&Object.keys(r[s]).forEach(function(o){n[s]||(n[s]={}),n[s][o]=r[s][o]})}),i.hooks){var a=i.hooks();Object.keys(a).forEach(function(s){Va[s]||(Va[s]=[]),Va[s].push(a[s])})}i.provides&&i.provides(Qa)}),n}function Kd(t,e){for(var n=arguments.length,i=new Array(n>2?n-2:0),r=2;r<n;r++)i[r-2]=arguments[r];var a=Va[t]||[];return a.forEach(function(s){e=s.apply(null,[e].concat(i))}),e}function ca(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];var r=Va[t]||[];r.forEach(function(a){a.apply(null,n)})}function ki(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Qa[t]?Qa[t].apply(null,e):void 0}function Jd(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||Sr();if(e)return e=qr(n,e)||e,Ag(Nx.definitions,n,e)||Ag(Kn.styles,n,e)}var Nx=new xT,MT=function(){_e.autoReplaceSvg=!1,_e.observeMutations=!1,ca("noAuto")},wT={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Hi?(ca("beforeI2svg",e),ki("pseudoElements2svg",e),ki("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;_e.autoReplaceSvg===!1&&(_e.autoReplaceSvg=!0),_e.observeMutations=!0,cT(function(){bT({autoReplaceSvgRoot:n}),ca("watch",e)})}},TT={icon:function(e){if(e===null)return null;if(Oc(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:qr(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],i=mu(e[0]);return{prefix:i,iconName:qr(i,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(_e.cssPrefix,"-"))>-1||e.match(jw))){var r=gu(e.split(" "),{skipLookups:!0});return{prefix:r.prefix||Sr(),iconName:qr(r.prefix,r.iconName)||r.iconName}}if(typeof e=="string"){var a=Sr();return{prefix:a,iconName:qr(a,e)||e}}}},An={noAuto:MT,config:_e,dom:wT,parse:TT,library:Nx,findIconDefinition:Jd,toHtml:zo},bT=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,i=n===void 0?ft:n;(Object.keys(Kn.styles).length>0||_e.autoFetchSvg)&&Hi&&_e.autoReplaceSvg&&An.dom.i2svg({node:i})};function vu(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(i){return zo(i)})}}),Object.defineProperty(t,"node",{get:function(){if(Hi){var i=ft.createElement("div");return i.innerHTML=t.html,i.children}}}),t}function AT(t){var e=t.children,n=t.main,i=t.mask,r=t.attributes,a=t.styles,s=t.transform;if(Cp(s)&&n.found&&!i.found){var o=n.width,l=n.height,c={x:o/l/2,y:.5};r.style=pu(me(me({},a),{},{"transform-origin":"".concat(c.x+s.x/16,"em ").concat(c.y+s.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function RT(t){var e=t.prefix,n=t.iconName,i=t.children,r=t.attributes,a=t.symbol,s=a===!0?"".concat(e,"-").concat(_e.cssPrefix,"-").concat(n):a;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:me(me({},r),{},{id:s}),children:i}]}]}function Dp(t){var e=t.icons,n=e.main,i=e.mask,r=t.prefix,a=t.iconName,s=t.transform,o=t.symbol,l=t.title,c=t.maskId,u=t.titleId,f=t.extra,h=t.watchable,m=h===void 0?!1:h,g=i.found?i:n,y=g.width,p=g.height,d=r==="fak",_=[_e.replacementClass,a?"".concat(_e.cssPrefix,"-").concat(a):""].filter(function(W){return f.classes.indexOf(W)===-1}).filter(function(W){return W!==""||!!W}).concat(f.classes).join(" "),v={children:[],attributes:me(me({},f.attributes),{},{"data-prefix":r,"data-icon":a,class:_,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(y," ").concat(p)})},S=d&&!~f.classes.indexOf("fa-fw")?{width:"".concat(y/p*16*.0625,"em")}:{};m&&(v.attributes[la]=""),l&&(v.children.push({tag:"title",attributes:{id:v.attributes["aria-labelledby"]||"title-".concat(u||Ro())},children:[l]}),delete v.attributes.title);var A=me(me({},v),{},{prefix:r,iconName:a,main:n,mask:i,maskId:c,transform:s,symbol:o,styles:me(me({},S),f.styles)}),T=i.found&&n.found?ki("generateAbstractMask",A)||{children:[],attributes:{}}:ki("generateAbstractIcon",A)||{children:[],attributes:{}},w=T.children,C=T.attributes;return A.children=w,A.attributes=C,o?RT(A):AT(A)}function Lg(t){var e=t.content,n=t.width,i=t.height,r=t.transform,a=t.title,s=t.extra,o=t.watchable,l=o===void 0?!1:o,c=me(me(me({},s.attributes),a?{title:a}:{}),{},{class:s.classes.join(" ")});l&&(c[la]="");var u=me({},s.styles);Cp(r)&&(u.transform=aT({transform:r,startCentered:!0,width:n,height:i}),u["-webkit-transform"]=u.transform);var f=pu(u);f.length>0&&(c.style=f);var h=[];return h.push({tag:"span",attributes:c,children:[e]}),a&&h.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),h}function CT(t){var e=t.content,n=t.title,i=t.extra,r=me(me(me({},i.attributes),n?{title:n}:{}),{},{class:i.classes.join(" ")}),a=pu(i.styles);a.length>0&&(r.style=a);var s=[];return s.push({tag:"span",attributes:r,children:[e]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}var lf=Kn.styles;function Zd(t){var e=t[0],n=t[1],i=t.slice(4),r=Mp(i,1),a=r[0],s=null;return Array.isArray(a)?s={tag:"g",attributes:{class:"".concat(_e.cssPrefix,"-").concat(Yr.GROUP)},children:[{tag:"path",attributes:{class:"".concat(_e.cssPrefix,"-").concat(Yr.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(_e.cssPrefix,"-").concat(Yr.PRIMARY),fill:"currentColor",d:a[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:e,height:n,icon:s}}var PT={found:!1,width:512,height:512};function LT(t,e){!_x&&!_e.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Qd(t,e){var n=e;return e==="fa"&&_e.styleDefault!==null&&(e=Sr()),new Promise(function(i,r){if(ki("missingIconAbstract"),n==="fa"){var a=Lx(t)||{};t=a.iconName||t,e=a.prefix||e}if(t&&e&&lf[e]&&lf[e][t]){var s=lf[e][t];return i(Zd(s))}LT(t,e),i(me(me({},PT),{},{icon:_e.showMissingIcons&&t?ki("missingIconAbstract")||{}:{}}))})}var Ng=function(){},eh=_e.measurePerformance&&dl&&dl.mark&&dl.measure?dl:{mark:Ng,measure:Ng},Xs='FA "6.5.1"',NT=function(e){return eh.mark("".concat(Xs," ").concat(e," begins")),function(){return Dx(e)}},Dx=function(e){eh.mark("".concat(Xs," ").concat(e," ends")),eh.measure("".concat(Xs," ").concat(e),"".concat(Xs," ").concat(e," begins"),"".concat(Xs," ").concat(e," ends"))},Ip={begin:NT,end:Dx},ac=function(){};function Dg(t){var e=t.getAttribute?t.getAttribute(la):null;return typeof e=="string"}function DT(t){var e=t.getAttribute?t.getAttribute(Tp):null,n=t.getAttribute?t.getAttribute(bp):null;return e&&n}function IT(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(_e.replacementClass)}function UT(){if(_e.autoReplaceSvg===!0)return sc.replace;var t=sc[_e.autoReplaceSvg];return t||sc.replace}function OT(t){return ft.createElementNS("http://www.w3.org/2000/svg",t)}function kT(t){return ft.createElement(t)}function Ix(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,i=n===void 0?t.tag==="svg"?OT:kT:n;if(typeof t=="string")return ft.createTextNode(t);var r=i(t.tag);Object.keys(t.attributes||[]).forEach(function(s){r.setAttribute(s,t.attributes[s])});var a=t.children||[];return a.forEach(function(s){r.appendChild(Ix(s,{ceFn:i}))}),r}function FT(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var sc={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(r){n.parentNode.insertBefore(Ix(r),n)}),n.getAttribute(la)===null&&_e.keepOriginalSource){var i=ft.createComment(FT(n));n.parentNode.replaceChild(i,n)}else n.remove()},nest:function(e){var n=e[0],i=e[1];if(~Rp(n).indexOf(_e.replacementClass))return sc.replace(e);var r=new RegExp("".concat(_e.cssPrefix,"-.*"));if(delete i[0].attributes.id,i[0].attributes.class){var a=i[0].attributes.class.split(" ").reduce(function(o,l){return l===_e.replacementClass||l.match(r)?o.toSvg.push(l):o.toNode.push(l),o},{toNode:[],toSvg:[]});i[0].attributes.class=a.toSvg.join(" "),a.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",a.toNode.join(" "))}var s=i.map(function(o){return zo(o)}).join(`
`);n.setAttribute(la,""),n.innerHTML=s}};function Ig(t){t()}function Ux(t,e){var n=typeof e=="function"?e:ac;if(t.length===0)n();else{var i=Ig;_e.mutateApproach===Gw&&(i=xr.requestAnimationFrame||Ig),i(function(){var r=UT(),a=Ip.begin("mutate");t.map(r),a(),n()})}}var Up=!1;function Ox(){Up=!0}function th(){Up=!1}var Fc=null;function Ug(t){if(wg&&_e.observeMutations){var e=t.treeCallback,n=e===void 0?ac:e,i=t.nodeCallback,r=i===void 0?ac:i,a=t.pseudoElementsCallback,s=a===void 0?ac:a,o=t.observeMutationsRoot,l=o===void 0?ft:o;Fc=new wg(function(c){if(!Up){var u=Sr();xs(c).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!Dg(f.addedNodes[0])&&(_e.searchPseudoElements&&s(f.target),n(f.target)),f.type==="attributes"&&f.target.parentNode&&_e.searchPseudoElements&&s(f.target.parentNode),f.type==="attributes"&&Dg(f.target)&&~qw.indexOf(f.attributeName))if(f.attributeName==="class"&&DT(f.target)){var h=gu(Rp(f.target)),m=h.prefix,g=h.iconName;f.target.setAttribute(Tp,m||u),g&&f.target.setAttribute(bp,g)}else IT(f.target)&&r(f.target)})}}),Hi&&Fc.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function zT(){Fc&&Fc.disconnect()}function BT(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(i,r){var a=r.split(":"),s=a[0],o=a.slice(1);return s&&o.length>0&&(i[s]=o.join(":").trim()),i},{})),n}function HT(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),i=t.innerText!==void 0?t.innerText.trim():"",r=gu(Rp(t));return r.prefix||(r.prefix=Sr()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&i.length>0&&(r.iconName=_T(r.prefix,t.innerText)||Lp(r.prefix,Yd(t.innerText))),!r.iconName&&_e.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function GT(t){var e=xs(t.attributes).reduce(function(r,a){return r.name!=="class"&&r.name!=="style"&&(r[a.name]=a.value),r},{}),n=t.getAttribute("title"),i=t.getAttribute("data-fa-title-id");return _e.autoA11y&&(n?e["aria-labelledby"]="".concat(_e.replacementClass,"-title-").concat(i||Ro()):(e["aria-hidden"]="true",e.focusable="false")),e}function VT(){return{iconName:null,title:null,titleId:null,prefix:null,transform:oi,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Og(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=HT(t),i=n.iconName,r=n.prefix,a=n.rest,s=GT(t),o=Kd("parseNodeAttributes",{},t),l=e.styleParser?BT(t):[];return me({iconName:i,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:oi,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:l,attributes:s}},o)}var WT=Kn.styles;function kx(t){var e=_e.autoReplaceSvg==="nest"?Og(t,{styleParser:!1}):Og(t);return~e.extra.classes.indexOf(yx)?ki("generateLayersText",t,e):ki("generateSvgReplacementMutation",t,e)}var Er=new Set;Ap.map(function(t){Er.add("fa-".concat(t))});Object.keys(wo[ct]).map(Er.add.bind(Er));Object.keys(wo[xt]).map(Er.add.bind(Er));Er=ko(Er);function kg(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Hi)return Promise.resolve();var n=ft.documentElement.classList,i=function(f){return n.add("".concat(Tg,"-").concat(f))},r=function(f){return n.remove("".concat(Tg,"-").concat(f))},a=_e.autoFetchSvg?Er:Ap.map(function(u){return"fa-".concat(u)}).concat(Object.keys(WT));a.includes("fa")||a.push("fa");var s=[".".concat(yx,":not([").concat(la,"])")].concat(a.map(function(u){return".".concat(u,":not([").concat(la,"])")})).join(", ");if(s.length===0)return Promise.resolve();var o=[];try{o=xs(t.querySelectorAll(s))}catch{}if(o.length>0)i("pending"),r("complete");else return Promise.resolve();var l=Ip.begin("onTree"),c=o.reduce(function(u,f){try{var h=kx(f);h&&u.push(h)}catch(m){_x||m.name==="MissingIcon"&&console.error(m)}return u},[]);return new Promise(function(u,f){Promise.all(c).then(function(h){Ux(h,function(){i("active"),i("complete"),r("pending"),typeof e=="function"&&e(),l(),u()})}).catch(function(h){l(),f(h)})})}function jT(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;kx(t).then(function(n){n&&Ux([n],e)})}function XT(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=(e||{}).icon?e:Jd(e||{}),r=n.mask;return r&&(r=(r||{}).icon?r:Jd(r||{})),t(i,me(me({},n),{},{mask:r}))}}var $T=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=n.transform,r=i===void 0?oi:i,a=n.symbol,s=a===void 0?!1:a,o=n.mask,l=o===void 0?null:o,c=n.maskId,u=c===void 0?null:c,f=n.title,h=f===void 0?null:f,m=n.titleId,g=m===void 0?null:m,y=n.classes,p=y===void 0?[]:y,d=n.attributes,_=d===void 0?{}:d,v=n.styles,S=v===void 0?{}:v;if(e){var A=e.prefix,T=e.iconName,w=e.icon;return vu(me({type:"icon"},e),function(){return ca("beforeDOMElementCreation",{iconDefinition:e,params:n}),_e.autoA11y&&(h?_["aria-labelledby"]="".concat(_e.replacementClass,"-title-").concat(g||Ro()):(_["aria-hidden"]="true",_.focusable="false")),Dp({icons:{main:Zd(w),mask:l?Zd(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:A,iconName:T,transform:me(me({},oi),r),symbol:s,title:h,maskId:u,titleId:g,extra:{attributes:_,styles:S,classes:p}})})}},YT={mixout:function(){return{icon:XT($T)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=kg,n.nodeCallback=jT,n}}},provides:function(e){e.i2svg=function(n){var i=n.node,r=i===void 0?ft:i,a=n.callback,s=a===void 0?function(){}:a;return kg(r,s)},e.generateSvgReplacementMutation=function(n,i){var r=i.iconName,a=i.title,s=i.titleId,o=i.prefix,l=i.transform,c=i.symbol,u=i.mask,f=i.maskId,h=i.extra;return new Promise(function(m,g){Promise.all([Qd(r,o),u.iconName?Qd(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(y){var p=Mp(y,2),d=p[0],_=p[1];m([n,Dp({icons:{main:d,mask:_},prefix:o,iconName:r,transform:l,symbol:c,maskId:f,title:a,titleId:s,extra:h,watchable:!0})])}).catch(g)})},e.generateAbstractIcon=function(n){var i=n.children,r=n.attributes,a=n.main,s=n.transform,o=n.styles,l=pu(o);l.length>0&&(r.style=l);var c;return Cp(s)&&(c=ki("generateAbstractTransformGrouping",{main:a,transform:s,containerWidth:a.width,iconWidth:a.width})),i.push(c||a.icon),{children:i,attributes:r}}}},qT={mixout:function(){return{layer:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.classes,a=r===void 0?[]:r;return vu({type:"layer"},function(){ca("beforeDOMElementCreation",{assembler:n,params:i});var s=[];return n(function(o){Array.isArray(o)?o.map(function(l){s=s.concat(l.abstract)}):s=s.concat(o.abstract)}),[{tag:"span",attributes:{class:["".concat(_e.cssPrefix,"-layers")].concat(ko(a)).join(" ")},children:s}]})}}}},KT={mixout:function(){return{counter:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.title,a=r===void 0?null:r,s=i.classes,o=s===void 0?[]:s,l=i.attributes,c=l===void 0?{}:l,u=i.styles,f=u===void 0?{}:u;return vu({type:"counter",content:n},function(){return ca("beforeDOMElementCreation",{content:n,params:i}),CT({content:n.toString(),title:a,extra:{attributes:c,styles:f,classes:["".concat(_e.cssPrefix,"-layers-counter")].concat(ko(o))}})})}}}},JT={mixout:function(){return{text:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.transform,a=r===void 0?oi:r,s=i.title,o=s===void 0?null:s,l=i.classes,c=l===void 0?[]:l,u=i.attributes,f=u===void 0?{}:u,h=i.styles,m=h===void 0?{}:h;return vu({type:"text",content:n},function(){return ca("beforeDOMElementCreation",{content:n,params:i}),Lg({content:n,transform:me(me({},oi),a),title:o,extra:{attributes:f,styles:m,classes:["".concat(_e.cssPrefix,"-layers-text")].concat(ko(c))}})})}}},provides:function(e){e.generateLayersText=function(n,i){var r=i.title,a=i.transform,s=i.extra,o=null,l=null;if(mx){var c=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();o=u.width/c,l=u.height/c}return _e.autoA11y&&!r&&(s.attributes["aria-hidden"]="true"),Promise.resolve([n,Lg({content:n.innerHTML,width:o,height:l,transform:a,title:r,extra:s,watchable:!0})])}}},ZT=new RegExp('"',"ug"),Fg=[1105920,1112319];function QT(t){var e=t.replace(ZT,""),n=dT(e,0),i=n>=Fg[0]&&n<=Fg[1],r=e.length===2?e[0]===e[1]:!1;return{value:Yd(r?e[0]:e),isSecondary:i||r}}function zg(t,e){var n="".concat(Hw).concat(e.replace(":","-"));return new Promise(function(i,r){if(t.getAttribute(n)!==null)return i();var a=xs(t.children),s=a.filter(function(w){return w.getAttribute($d)===e})[0],o=xr.getComputedStyle(t,e),l=o.getPropertyValue("font-family").match(Xw),c=o.getPropertyValue("font-weight"),u=o.getPropertyValue("content");if(s&&!l)return t.removeChild(s),i();if(l&&u!=="none"&&u!==""){var f=o.getPropertyValue("content"),h=~["Sharp"].indexOf(l[2])?xt:ct,m=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?To[h][l[2].toLowerCase()]:$w[h][c],g=QT(f),y=g.value,p=g.isSecondary,d=l[0].startsWith("FontAwesome"),_=Lp(m,y),v=_;if(d){var S=yT(y);S.iconName&&S.prefix&&(_=S.iconName,m=S.prefix)}if(_&&!p&&(!s||s.getAttribute(Tp)!==m||s.getAttribute(bp)!==v)){t.setAttribute(n,v),s&&t.removeChild(s);var A=VT(),T=A.extra;T.attributes[$d]=e,Qd(_,m).then(function(w){var C=Dp(me(me({},A),{},{icons:{main:w,mask:Np()},prefix:m,iconName:v,extra:T,watchable:!0})),W=ft.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(W,t.firstChild):t.appendChild(W),W.outerHTML=C.map(function(x){return zo(x)}).join(`
`),t.removeAttribute(n),i()}).catch(r)}else i()}else i()})}function eb(t){return Promise.all([zg(t,"::before"),zg(t,"::after")])}function tb(t){return t.parentNode!==document.head&&!~Vw.indexOf(t.tagName.toUpperCase())&&!t.getAttribute($d)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Bg(t){if(Hi)return new Promise(function(e,n){var i=xs(t.querySelectorAll("*")).filter(tb).map(eb),r=Ip.begin("searchPseudoElements");Ox(),Promise.all(i).then(function(){r(),th(),e()}).catch(function(){r(),th(),n()})})}var nb={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Bg,n}}},provides:function(e){e.pseudoElements2svg=function(n){var i=n.node,r=i===void 0?ft:i;_e.searchPseudoElements&&Bg(r)}}},Hg=!1,ib={mixout:function(){return{dom:{unwatch:function(){Ox(),Hg=!0}}}},hooks:function(){return{bootstrap:function(){Ug(Kd("mutationObserverCallbacks",{}))},noAuto:function(){zT()},watch:function(n){var i=n.observeMutationsRoot;Hg?th():Ug(Kd("mutationObserverCallbacks",{observeMutationsRoot:i}))}}}},Gg=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(i,r){var a=r.toLowerCase().split("-"),s=a[0],o=a.slice(1).join("-");if(s&&o==="h")return i.flipX=!0,i;if(s&&o==="v")return i.flipY=!0,i;if(o=parseFloat(o),isNaN(o))return i;switch(s){case"grow":i.size=i.size+o;break;case"shrink":i.size=i.size-o;break;case"left":i.x=i.x-o;break;case"right":i.x=i.x+o;break;case"up":i.y=i.y-o;break;case"down":i.y=i.y+o;break;case"rotate":i.rotate=i.rotate+o;break}return i},n)},rb={mixout:function(){return{parse:{transform:function(n){return Gg(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,i){var r=i.getAttribute("data-fa-transform");return r&&(n.transform=Gg(r)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var i=n.main,r=n.transform,a=n.containerWidth,s=n.iconWidth,o={transform:"translate(".concat(a/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),c="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),u="rotate(".concat(r.rotate," 0 0)"),f={transform:"".concat(l," ").concat(c," ").concat(u)},h={transform:"translate(".concat(s/2*-1," -256)")},m={outer:o,inner:f,path:h};return{tag:"g",attributes:me({},m.outer),children:[{tag:"g",attributes:me({},m.inner),children:[{tag:i.icon.tag,children:i.icon.children,attributes:me(me({},i.icon.attributes),m.path)}]}]}}}},cf={x:0,y:0,width:"100%",height:"100%"};function Vg(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function ab(t){return t.tag==="g"?t.children:[t]}var sb={hooks:function(){return{parseNodeAttributes:function(n,i){var r=i.getAttribute("data-fa-mask"),a=r?gu(r.split(" ").map(function(s){return s.trim()})):Np();return a.prefix||(a.prefix=Sr()),n.mask=a,n.maskId=i.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var i=n.children,r=n.attributes,a=n.main,s=n.mask,o=n.maskId,l=n.transform,c=a.width,u=a.icon,f=s.width,h=s.icon,m=rT({transform:l,containerWidth:f,iconWidth:c}),g={tag:"rect",attributes:me(me({},cf),{},{fill:"white"})},y=u.children?{children:u.children.map(Vg)}:{},p={tag:"g",attributes:me({},m.inner),children:[Vg(me({tag:u.tag,attributes:me(me({},u.attributes),m.path)},y))]},d={tag:"g",attributes:me({},m.outer),children:[p]},_="mask-".concat(o||Ro()),v="clip-".concat(o||Ro()),S={tag:"mask",attributes:me(me({},cf),{},{id:_,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[g,d]},A={tag:"defs",children:[{tag:"clipPath",attributes:{id:v},children:ab(h)},S]};return i.push(A,{tag:"rect",attributes:me({fill:"currentColor","clip-path":"url(#".concat(v,")"),mask:"url(#".concat(_,")")},cf)}),{children:i,attributes:r}}}},ob={provides:function(e){var n=!1;xr.matchMedia&&(n=xr.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var i=[],r={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};i.push({tag:"path",attributes:me(me({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var s=me(me({},a),{},{attributeName:"opacity"}),o={tag:"circle",attributes:me(me({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||o.children.push({tag:"animate",attributes:me(me({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:me(me({},s),{},{values:"1;0;1;1;0;1;"})}),i.push(o),i.push({tag:"path",attributes:me(me({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:me(me({},s),{},{values:"1;0;0;0;0;1;"})}]}),n||i.push({tag:"path",attributes:me(me({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:me(me({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:i}}}},lb={hooks:function(){return{parseNodeAttributes:function(n,i){var r=i.getAttribute("data-fa-symbol"),a=r===null?!1:r===""?!0:r;return n.symbol=a,n}}}},cb=[oT,YT,qT,KT,JT,nb,ib,rb,sb,ob,lb];ET(cb,{mixoutsTo:An});An.noAuto;An.config;An.library;An.dom;var nh=An.parse;An.findIconDefinition;An.toHtml;var ub=An.icon;An.layer;An.text;An.counter;var Fx={exports:{}},fb="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",db=fb,hb=db;function zx(){}function Bx(){}Bx.resetWarningCache=zx;var pb=function(){function t(i,r,a,s,o,l){if(l!==hb){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:Bx,resetWarningCache:zx};return n.PropTypes=n,n};Fx.exports=pb();var mb=Fx.exports;const Xe=B0(mb);function Wg(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function ar(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Wg(Object(n),!0).forEach(function(i){Wa(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Wg(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function zc(t){"@babel/helpers - typeof";return zc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},zc(t)}function Wa(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function gb(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,a;for(a=0;a<i.length;a++)r=i[a],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function vb(t,e){if(t==null)return{};var n=gb(t,e),i,r;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)i=a[r],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(t,i)&&(n[i]=t[i])}return n}function ih(t){return _b(t)||yb(t)||xb(t)||Sb()}function _b(t){if(Array.isArray(t))return rh(t)}function yb(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function xb(t,e){if(t){if(typeof t=="string")return rh(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return rh(t,e)}}function rh(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function Sb(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Eb(t){var e,n=t.beat,i=t.fade,r=t.beatFade,a=t.bounce,s=t.shake,o=t.flash,l=t.spin,c=t.spinPulse,u=t.spinReverse,f=t.pulse,h=t.fixedWidth,m=t.inverse,g=t.border,y=t.listItem,p=t.flip,d=t.size,_=t.rotation,v=t.pull,S=(e={"fa-beat":n,"fa-fade":i,"fa-beat-fade":r,"fa-bounce":a,"fa-shake":s,"fa-flash":o,"fa-spin":l,"fa-spin-reverse":u,"fa-spin-pulse":c,"fa-pulse":f,"fa-fw":h,"fa-inverse":m,"fa-border":g,"fa-li":y,"fa-flip":p===!0,"fa-flip-horizontal":p==="horizontal"||p==="both","fa-flip-vertical":p==="vertical"||p==="both"},Wa(e,"fa-".concat(d),typeof d<"u"&&d!==null),Wa(e,"fa-rotate-".concat(_),typeof _<"u"&&_!==null&&_!==0),Wa(e,"fa-pull-".concat(v),typeof v<"u"&&v!==null),Wa(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(S).map(function(A){return S[A]?A:null}).filter(function(A){return A})}function Mb(t){return t=t-0,t===t}function Hx(t){return Mb(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var wb=["style"];function Tb(t){return t.charAt(0).toUpperCase()+t.slice(1)}function bb(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var i=n.indexOf(":"),r=Hx(n.slice(0,i)),a=n.slice(i+1).trim();return r.startsWith("webkit")?e[Tb(r)]=a:e[r]=a,e},{})}function Gx(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var i=(e.children||[]).map(function(l){return Gx(t,l)}),r=Object.keys(e.attributes||{}).reduce(function(l,c){var u=e.attributes[c];switch(c){case"class":l.attrs.className=u,delete e.attributes.class;break;case"style":l.attrs.style=bb(u);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?l.attrs[c.toLowerCase()]=u:l.attrs[Hx(c)]=u}return l},{attrs:{}}),a=n.style,s=a===void 0?{}:a,o=vb(n,wb);return r.attrs.style=ar(ar({},r.attrs.style),s),t.apply(void 0,[e.tag,ar(ar({},r.attrs),o)].concat(ih(i)))}var Vx=!1;try{Vx=!0}catch{}function Ab(){if(!Vx&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function jg(t){if(t&&zc(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(nh.icon)return nh.icon(t);if(t===null)return null;if(t&&zc(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function uf(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Wa({},t,e):{}}var Ss=Un.forwardRef(function(t,e){var n=t.icon,i=t.mask,r=t.symbol,a=t.className,s=t.title,o=t.titleId,l=t.maskId,c=jg(n),u=uf("classes",[].concat(ih(Eb(t)),ih(a.split(" ")))),f=uf("transform",typeof t.transform=="string"?nh.transform(t.transform):t.transform),h=uf("mask",jg(i)),m=ub(c,ar(ar(ar(ar({},u),f),h),{},{symbol:r,title:s,titleId:o,maskId:l}));if(!m)return Ab("Could not find icon",c),null;var g=m.abstract,y={ref:e};return Object.keys(t).forEach(function(p){Ss.defaultProps.hasOwnProperty(p)||(y[p]=t[p])}),Rb(g[0],y)});Ss.displayName="FontAwesomeIcon";Ss.propTypes={beat:Xe.bool,border:Xe.bool,beatFade:Xe.bool,bounce:Xe.bool,className:Xe.string,fade:Xe.bool,flash:Xe.bool,mask:Xe.oneOfType([Xe.object,Xe.array,Xe.string]),maskId:Xe.string,fixedWidth:Xe.bool,inverse:Xe.bool,flip:Xe.oneOf([!0,!1,"horizontal","vertical","both"]),icon:Xe.oneOfType([Xe.object,Xe.array,Xe.string]),listItem:Xe.bool,pull:Xe.oneOf(["right","left"]),pulse:Xe.bool,rotation:Xe.oneOf([0,90,180,270]),shake:Xe.bool,size:Xe.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:Xe.bool,spinPulse:Xe.bool,spinReverse:Xe.bool,symbol:Xe.oneOfType([Xe.bool,Xe.string]),title:Xe.string,titleId:Xe.string,transform:Xe.oneOfType([Xe.string,Xe.object]),swapOpacity:Xe.bool};Ss.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var Rb=Gx.bind(null,Un.createElement),Cb={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]},Pb=Cb,Lb={prefix:"fas",iconName:"paper-plane",icon:[512,512,[61913],"f1d8","M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"]};function Fi(t){return Array.isArray?Array.isArray(t):Xx(t)==="[object Array]"}const Nb=1/0;function Db(t){if(typeof t=="string")return t;let e=t+"";return e=="0"&&1/t==-Nb?"-0":e}function Ib(t){return t==null?"":Db(t)}function li(t){return typeof t=="string"}function Wx(t){return typeof t=="number"}function Ub(t){return t===!0||t===!1||Ob(t)&&Xx(t)=="[object Boolean]"}function jx(t){return typeof t=="object"}function Ob(t){return jx(t)&&t!==null}function Sn(t){return t!=null}function ff(t){return!t.trim().length}function Xx(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}const kb="Incorrect 'index' type",Fb=t=>`Invalid value for key ${t}`,zb=t=>`Pattern length exceeds max of ${t}.`,Bb=t=>`Missing ${t} property in key`,Hb=t=>`Property 'weight' in key '${t}' must be a positive integer`,Xg=Object.prototype.hasOwnProperty;class Gb{constructor(e){this._keys=[],this._keyMap={};let n=0;e.forEach(i=>{let r=$x(i);this._keys.push(r),this._keyMap[r.id]=r,n+=r.weight}),this._keys.forEach(i=>{i.weight/=n})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function $x(t){let e=null,n=null,i=null,r=1,a=null;if(li(t)||Fi(t))i=t,e=$g(t),n=ah(t);else{if(!Xg.call(t,"name"))throw new Error(Bb("name"));const s=t.name;if(i=s,Xg.call(t,"weight")&&(r=t.weight,r<=0))throw new Error(Hb(s));e=$g(s),n=ah(s),a=t.getFn}return{path:e,id:n,weight:r,src:i,getFn:a}}function $g(t){return Fi(t)?t:t.split(".")}function ah(t){return Fi(t)?t.join("."):t}function Vb(t,e){let n=[],i=!1;const r=(a,s,o)=>{if(Sn(a))if(!s[o])n.push(a);else{let l=s[o];const c=a[l];if(!Sn(c))return;if(o===s.length-1&&(li(c)||Wx(c)||Ub(c)))n.push(Ib(c));else if(Fi(c)){i=!0;for(let u=0,f=c.length;u<f;u+=1)r(c[u],s,o+1)}else s.length&&r(c,s,o+1)}};return r(t,li(e)?e.split("."):e,0),i?n:n[0]}const Wb={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},jb={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(t,e)=>t.score===e.score?t.idx<e.idx?-1:1:t.score<e.score?-1:1},Xb={location:0,threshold:.6,distance:100},$b={useExtendedSearch:!1,getFn:Vb,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var Le={...jb,...Wb,...Xb,...$b};const Yb=/[^ ]+/g;function qb(t=1,e=3){const n=new Map,i=Math.pow(10,e);return{get(r){const a=r.match(Yb).length;if(n.has(a))return n.get(a);const s=1/Math.pow(a,.5*t),o=parseFloat(Math.round(s*i)/i);return n.set(a,o),o},clear(){n.clear()}}}class Op{constructor({getFn:e=Le.getFn,fieldNormWeight:n=Le.fieldNormWeight}={}){this.norm=qb(n,3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((n,i)=>{this._keysMap[n.id]=i})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,li(this.docs[0])?this.docs.forEach((e,n)=>{this._addString(e,n)}):this.docs.forEach((e,n)=>{this._addObject(e,n)}),this.norm.clear())}add(e){const n=this.size();li(e)?this._addString(e,n):this._addObject(e,n)}removeAt(e){this.records.splice(e,1);for(let n=e,i=this.size();n<i;n+=1)this.records[n].i-=1}getValueForItemAtKeyId(e,n){return e[this._keysMap[n]]}size(){return this.records.length}_addString(e,n){if(!Sn(e)||ff(e))return;let i={v:e,i:n,n:this.norm.get(e)};this.records.push(i)}_addObject(e,n){let i={i:n,$:{}};this.keys.forEach((r,a)=>{let s=r.getFn?r.getFn(e):this.getFn(e,r.path);if(Sn(s)){if(Fi(s)){let o=[];const l=[{nestedArrIndex:-1,value:s}];for(;l.length;){const{nestedArrIndex:c,value:u}=l.pop();if(Sn(u))if(li(u)&&!ff(u)){let f={v:u,i:c,n:this.norm.get(u)};o.push(f)}else Fi(u)&&u.forEach((f,h)=>{l.push({nestedArrIndex:h,value:f})})}i.$[a]=o}else if(li(s)&&!ff(s)){let o={v:s,n:this.norm.get(s)};i.$[a]=o}}}),this.records.push(i)}toJSON(){return{keys:this.keys,records:this.records}}}function Yx(t,e,{getFn:n=Le.getFn,fieldNormWeight:i=Le.fieldNormWeight}={}){const r=new Op({getFn:n,fieldNormWeight:i});return r.setKeys(t.map($x)),r.setSources(e),r.create(),r}function Kb(t,{getFn:e=Le.getFn,fieldNormWeight:n=Le.fieldNormWeight}={}){const{keys:i,records:r}=t,a=new Op({getFn:e,fieldNormWeight:n});return a.setKeys(i),a.setIndexRecords(r),a}function Sl(t,{errors:e=0,currentLocation:n=0,expectedLocation:i=0,distance:r=Le.distance,ignoreLocation:a=Le.ignoreLocation}={}){const s=e/t.length;if(a)return s;const o=Math.abs(i-n);return r?s+o/r:o?1:s}function Jb(t=[],e=Le.minMatchCharLength){let n=[],i=-1,r=-1,a=0;for(let s=t.length;a<s;a+=1){let o=t[a];o&&i===-1?i=a:!o&&i!==-1&&(r=a-1,r-i+1>=e&&n.push([i,r]),i=-1)}return t[a-1]&&a-i>=e&&n.push([i,a-1]),n}const Gr=32;function Zb(t,e,n,{location:i=Le.location,distance:r=Le.distance,threshold:a=Le.threshold,findAllMatches:s=Le.findAllMatches,minMatchCharLength:o=Le.minMatchCharLength,includeMatches:l=Le.includeMatches,ignoreLocation:c=Le.ignoreLocation}={}){if(e.length>Gr)throw new Error(zb(Gr));const u=e.length,f=t.length,h=Math.max(0,Math.min(i,f));let m=a,g=h;const y=o>1||l,p=y?Array(f):[];let d;for(;(d=t.indexOf(e,g))>-1;){let w=Sl(e,{currentLocation:d,expectedLocation:h,distance:r,ignoreLocation:c});if(m=Math.min(w,m),g=d+u,y){let C=0;for(;C<u;)p[d+C]=1,C+=1}}g=-1;let _=[],v=1,S=u+f;const A=1<<u-1;for(let w=0;w<u;w+=1){let C=0,W=S;for(;C<W;)Sl(e,{errors:w,currentLocation:h+W,expectedLocation:h,distance:r,ignoreLocation:c})<=m?C=W:S=W,W=Math.floor((S-C)/2+C);S=W;let x=Math.max(1,h-W+1),R=s?f:Math.min(h+W,f)+u,Z=Array(R+2);Z[R+1]=(1<<w)-1;for(let P=R;P>=x;P-=1){let $=P-1,X=n[t.charAt($)];if(y&&(p[$]=+!!X),Z[P]=(Z[P+1]<<1|1)&X,w&&(Z[P]|=(_[P+1]|_[P])<<1|1|_[P+1]),Z[P]&A&&(v=Sl(e,{errors:w,currentLocation:$,expectedLocation:h,distance:r,ignoreLocation:c}),v<=m)){if(m=v,g=$,g<=h)break;x=Math.max(1,2*h-g)}}if(Sl(e,{errors:w+1,currentLocation:h,expectedLocation:h,distance:r,ignoreLocation:c})>m)break;_=Z}const T={isMatch:g>=0,score:Math.max(.001,v)};if(y){const w=Jb(p,o);w.length?l&&(T.indices=w):T.isMatch=!1}return T}function Qb(t){let e={};for(let n=0,i=t.length;n<i;n+=1){const r=t.charAt(n);e[r]=(e[r]||0)|1<<i-n-1}return e}class qx{constructor(e,{location:n=Le.location,threshold:i=Le.threshold,distance:r=Le.distance,includeMatches:a=Le.includeMatches,findAllMatches:s=Le.findAllMatches,minMatchCharLength:o=Le.minMatchCharLength,isCaseSensitive:l=Le.isCaseSensitive,ignoreLocation:c=Le.ignoreLocation}={}){if(this.options={location:n,threshold:i,distance:r,includeMatches:a,findAllMatches:s,minMatchCharLength:o,isCaseSensitive:l,ignoreLocation:c},this.pattern=l?e:e.toLowerCase(),this.chunks=[],!this.pattern.length)return;const u=(h,m)=>{this.chunks.push({pattern:h,alphabet:Qb(h),startIndex:m})},f=this.pattern.length;if(f>Gr){let h=0;const m=f%Gr,g=f-m;for(;h<g;)u(this.pattern.substr(h,Gr),h),h+=Gr;if(m){const y=f-Gr;u(this.pattern.substr(y),y)}}else u(this.pattern,0)}searchIn(e){const{isCaseSensitive:n,includeMatches:i}=this.options;if(n||(e=e.toLowerCase()),this.pattern===e){let g={isMatch:!0,score:0};return i&&(g.indices=[[0,e.length-1]]),g}const{location:r,distance:a,threshold:s,findAllMatches:o,minMatchCharLength:l,ignoreLocation:c}=this.options;let u=[],f=0,h=!1;this.chunks.forEach(({pattern:g,alphabet:y,startIndex:p})=>{const{isMatch:d,score:_,indices:v}=Zb(e,g,y,{location:r+p,distance:a,threshold:s,findAllMatches:o,minMatchCharLength:l,includeMatches:i,ignoreLocation:c});d&&(h=!0),f+=_,d&&v&&(u=[...u,...v])});let m={isMatch:h,score:h?f/this.chunks.length:1};return h&&i&&(m.indices=u),m}}class Rr{constructor(e){this.pattern=e}static isMultiMatch(e){return Yg(e,this.multiRegex)}static isSingleMatch(e){return Yg(e,this.singleRegex)}search(){}}function Yg(t,e){const n=t.match(e);return n?n[1]:null}class eA extends Rr{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){const n=e===this.pattern;return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class tA extends Rr{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){const i=e.indexOf(this.pattern)===-1;return{isMatch:i,score:i?0:1,indices:[0,e.length-1]}}}class nA extends Rr{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){const n=e.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class iA extends Rr{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){const n=!e.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class rA extends Rr{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){const n=e.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[e.length-this.pattern.length,e.length-1]}}}class aA extends Rr{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){const n=!e.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class Kx extends Rr{constructor(e,{location:n=Le.location,threshold:i=Le.threshold,distance:r=Le.distance,includeMatches:a=Le.includeMatches,findAllMatches:s=Le.findAllMatches,minMatchCharLength:o=Le.minMatchCharLength,isCaseSensitive:l=Le.isCaseSensitive,ignoreLocation:c=Le.ignoreLocation}={}){super(e),this._bitapSearch=new qx(e,{location:n,threshold:i,distance:r,includeMatches:a,findAllMatches:s,minMatchCharLength:o,isCaseSensitive:l,ignoreLocation:c})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class Jx extends Rr{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let n=0,i;const r=[],a=this.pattern.length;for(;(i=e.indexOf(this.pattern,n))>-1;)n=i+a,r.push([i,n-1]);const s=!!r.length;return{isMatch:s,score:s?0:1,indices:r}}}const sh=[eA,Jx,nA,iA,aA,rA,tA,Kx],qg=sh.length,sA=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,oA="|";function lA(t,e={}){return t.split(oA).map(n=>{let i=n.trim().split(sA).filter(a=>a&&!!a.trim()),r=[];for(let a=0,s=i.length;a<s;a+=1){const o=i[a];let l=!1,c=-1;for(;!l&&++c<qg;){const u=sh[c];let f=u.isMultiMatch(o);f&&(r.push(new u(f,e)),l=!0)}if(!l)for(c=-1;++c<qg;){const u=sh[c];let f=u.isSingleMatch(o);if(f){r.push(new u(f,e));break}}}return r})}const cA=new Set([Kx.type,Jx.type]);class uA{constructor(e,{isCaseSensitive:n=Le.isCaseSensitive,includeMatches:i=Le.includeMatches,minMatchCharLength:r=Le.minMatchCharLength,ignoreLocation:a=Le.ignoreLocation,findAllMatches:s=Le.findAllMatches,location:o=Le.location,threshold:l=Le.threshold,distance:c=Le.distance}={}){this.query=null,this.options={isCaseSensitive:n,includeMatches:i,minMatchCharLength:r,findAllMatches:s,ignoreLocation:a,location:o,threshold:l,distance:c},this.pattern=n?e:e.toLowerCase(),this.query=lA(this.pattern,this.options)}static condition(e,n){return n.useExtendedSearch}searchIn(e){const n=this.query;if(!n)return{isMatch:!1,score:1};const{includeMatches:i,isCaseSensitive:r}=this.options;e=r?e:e.toLowerCase();let a=0,s=[],o=0;for(let l=0,c=n.length;l<c;l+=1){const u=n[l];s.length=0,a=0;for(let f=0,h=u.length;f<h;f+=1){const m=u[f],{isMatch:g,indices:y,score:p}=m.search(e);if(g){if(a+=1,o+=p,i){const d=m.constructor.type;cA.has(d)?s=[...s,...y]:s.push(y)}}else{o=0,a=0,s.length=0;break}}if(a){let f={isMatch:!0,score:o/a};return i&&(f.indices=s),f}}return{isMatch:!1,score:1}}}const oh=[];function fA(...t){oh.push(...t)}function lh(t,e){for(let n=0,i=oh.length;n<i;n+=1){let r=oh[n];if(r.condition(t,e))return new r(t,e)}return new qx(t,e)}const Bc={AND:"$and",OR:"$or"},ch={PATH:"$path",PATTERN:"$val"},uh=t=>!!(t[Bc.AND]||t[Bc.OR]),dA=t=>!!t[ch.PATH],hA=t=>!Fi(t)&&jx(t)&&!uh(t),Kg=t=>({[Bc.AND]:Object.keys(t).map(e=>({[e]:t[e]}))});function Zx(t,e,{auto:n=!0}={}){const i=r=>{let a=Object.keys(r);const s=dA(r);if(!s&&a.length>1&&!uh(r))return i(Kg(r));if(hA(r)){const l=s?r[ch.PATH]:a[0],c=s?r[ch.PATTERN]:r[l];if(!li(c))throw new Error(Fb(l));const u={keyId:ah(l),pattern:c};return n&&(u.searcher=lh(c,e)),u}let o={children:[],operator:a[0]};return a.forEach(l=>{const c=r[l];Fi(c)&&c.forEach(u=>{o.children.push(i(u))})}),o};return uh(t)||(t=Kg(t)),i(t)}function pA(t,{ignoreFieldNorm:e=Le.ignoreFieldNorm}){t.forEach(n=>{let i=1;n.matches.forEach(({key:r,norm:a,score:s})=>{const o=r?r.weight:null;i*=Math.pow(s===0&&o?Number.EPSILON:s,(o||1)*(e?1:a))}),n.score=i})}function mA(t,e){const n=t.matches;e.matches=[],Sn(n)&&n.forEach(i=>{if(!Sn(i.indices)||!i.indices.length)return;const{indices:r,value:a}=i;let s={indices:r,value:a};i.key&&(s.key=i.key.src),i.idx>-1&&(s.refIndex=i.idx),e.matches.push(s)})}function gA(t,e){e.score=t.score}function vA(t,e,{includeMatches:n=Le.includeMatches,includeScore:i=Le.includeScore}={}){const r=[];return n&&r.push(mA),i&&r.push(gA),t.map(a=>{const{idx:s}=a,o={item:e[s],refIndex:s};return r.length&&r.forEach(l=>{l(a,o)}),o})}class Es{constructor(e,n={},i){this.options={...Le,...n},this.options.useExtendedSearch,this._keyStore=new Gb(this.options.keys),this.setCollection(e,i)}setCollection(e,n){if(this._docs=e,n&&!(n instanceof Op))throw new Error(kb);this._myIndex=n||Yx(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(e){Sn(e)&&(this._docs.push(e),this._myIndex.add(e))}remove(e=()=>!1){const n=[];for(let i=0,r=this._docs.length;i<r;i+=1){const a=this._docs[i];e(a,i)&&(this.removeAt(i),i-=1,r-=1,n.push(a))}return n}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:n=-1}={}){const{includeMatches:i,includeScore:r,shouldSort:a,sortFn:s,ignoreFieldNorm:o}=this.options;let l=li(e)?li(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return pA(l,{ignoreFieldNorm:o}),a&&l.sort(s),Wx(n)&&n>-1&&(l=l.slice(0,n)),vA(l,this._docs,{includeMatches:i,includeScore:r})}_searchStringList(e){const n=lh(e,this.options),{records:i}=this._myIndex,r=[];return i.forEach(({v:a,i:s,n:o})=>{if(!Sn(a))return;const{isMatch:l,score:c,indices:u}=n.searchIn(a);l&&r.push({item:a,idx:s,matches:[{score:c,value:a,norm:o,indices:u}]})}),r}_searchLogical(e){const n=Zx(e,this.options),i=(o,l,c)=>{if(!o.children){const{keyId:f,searcher:h}=o,m=this._findMatches({key:this._keyStore.get(f),value:this._myIndex.getValueForItemAtKeyId(l,f),searcher:h});return m&&m.length?[{idx:c,item:l,matches:m}]:[]}const u=[];for(let f=0,h=o.children.length;f<h;f+=1){const m=o.children[f],g=i(m,l,c);if(g.length)u.push(...g);else if(o.operator===Bc.AND)return[]}return u},r=this._myIndex.records,a={},s=[];return r.forEach(({$:o,i:l})=>{if(Sn(o)){let c=i(n,o,l);c.length&&(a[l]||(a[l]={idx:l,item:o,matches:[]},s.push(a[l])),c.forEach(({matches:u})=>{a[l].matches.push(...u)}))}}),s}_searchObjectList(e){const n=lh(e,this.options),{keys:i,records:r}=this._myIndex,a=[];return r.forEach(({$:s,i:o})=>{if(!Sn(s))return;let l=[];i.forEach((c,u)=>{l.push(...this._findMatches({key:c,value:s[u],searcher:n}))}),l.length&&a.push({idx:o,item:s,matches:l})}),a}_findMatches({key:e,value:n,searcher:i}){if(!Sn(n))return[];let r=[];if(Fi(n))n.forEach(({v:a,i:s,n:o})=>{if(!Sn(a))return;const{isMatch:l,score:c,indices:u}=i.searchIn(a);l&&r.push({score:c,key:e,value:a,idx:s,norm:o,indices:u})});else{const{v:a,n:s}=n,{isMatch:o,score:l,indices:c}=i.searchIn(a);o&&r.push({score:l,key:e,value:a,norm:s,indices:c})}return r}}Es.version="7.0.0";Es.createIndex=Yx;Es.parseIndex=Kb;Es.config=Le;Es.parseQuery=Zx;fA(uA);const _A=()=>{const[t,e]=se.useState(""),[n,i]=se.useState("en"),r=fw(),a=()=>{console.log("Searching for:",t);const l={includeScore:!0,threshold:.3},u=new Es(["red-cockaded woodpecker","red cockaded woodpecker","red-cockaded","red cockaded","red woodpecker","cockaded","cockaded"],l).search(t);u.length>0&&u[0].score<.3&&r("/red-cockaded-woodpecker")},s=l=>{l.key==="Enter"&&a()},o=l=>{i(l.target.value)};return se.useEffect(()=>{const l=document.querySelector(".searchBar-select"),c=l.options[l.selectedIndex];c.text=n.toUpperCase()},[n]),D.jsxs("div",{className:"searchBar",children:[D.jsx("input",{type:"text",value:t,onChange:l=>e(l.target.value),onKeyDown:s,placeholder:"Red-cockaded Woodpecker...",className:"searchBar-input",list:"birds"}),D.jsxs("datalist",{id:"birds",children:[D.jsx("option",{value:"Red-cockaded Woodpecker"}),D.jsx("option",{value:"Red Cockaded Woodpecker"}),D.jsx("option",{value:"Red-cockaded"}),D.jsx("option",{value:"Red Cockaded"})]}),D.jsx("select",{value:n,onChange:o,className:"searchBar-select",children:D.jsx("option",{value:"en",children:"EN"})}),D.jsx("button",{onClick:a,className:"searchBar-button",children:D.jsx(Ss,{icon:Pb})})]})},Qx=()=>{const t=se.useRef();return se.useEffect(()=>{const e=new IntersectionObserver(([n])=>{n.isIntersecting?t.current.style.opacity="1":t.current.style.opacity="0"},{threshold:.5});return t.current&&e.observe(t.current),()=>{t.current&&e.unobserve(t.current)}},[]),D.jsxs("footer",{className:"footer",ref:t,children:[D.jsxs("div",{className:"waves",children:[D.jsx("div",{className:"wave",id:"wave1"}),D.jsx("div",{className:"wave",id:"wave2"}),D.jsx("div",{className:"wave",id:"wave3"}),D.jsx("div",{className:"wave",id:"wave4"})]}),D.jsxs("ul",{className:"menu",children:[D.jsx("li",{className:"menu__item",children:D.jsx("a",{className:"menu__link",href:"/",children:"Home"})}),D.jsx("li",{className:"menu__item",children:D.jsx("a",{className:"menu__link",href:"/about",children:"About"})}),D.jsx("li",{className:"menu__item",children:D.jsx("a",{className:"menu__link",href:"/contact",children:"Contact"})})]}),D.jsx("p",{children:"© 2024 Sergio Mendoza | All Rights Reserved"}),D.jsx("script",{type:"module",src:"https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"}),D.jsx("script",{noModule:!0,src:"https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"})]})};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const kp="162",yA=0,Jg=1,xA=2,eS=1,SA=2,xi=3,Mr=0,gn=1,Mi=2,mr=0,es=1,Zg=2,Qg=3,ev=4,EA=5,Vr=100,MA=101,wA=102,tv=103,nv=104,TA=200,bA=201,AA=202,RA=203,fh=204,dh=205,CA=206,PA=207,LA=208,NA=209,DA=210,IA=211,UA=212,OA=213,kA=214,FA=0,zA=1,BA=2,Hc=3,HA=4,GA=5,VA=6,WA=7,tS=0,jA=1,XA=2,gr=0,$A=1,YA=2,qA=3,KA=4,JA=5,ZA=6,QA=7,nS=300,us=301,fs=302,hh=303,ph=304,_u=306,mh=1e3,Yn=1001,gh=1002,nn=1003,iv=1004,Us=1005,cn=1006,df=1007,Kr=1008,vr=1009,eR=1010,tR=1011,Fp=1012,iS=1013,sr=1014,wi=1015,Co=1016,rS=1017,aS=1018,ea=1020,nR=1021,qn=1023,iR=1024,rR=1025,ta=1026,ds=1027,aR=1028,sS=1029,sR=1030,oS=1031,lS=1033,hf=33776,pf=33777,mf=33778,gf=33779,rv=35840,av=35841,sv=35842,ov=35843,cS=36196,lv=37492,cv=37496,uv=37808,fv=37809,dv=37810,hv=37811,pv=37812,mv=37813,gv=37814,vv=37815,_v=37816,yv=37817,xv=37818,Sv=37819,Ev=37820,Mv=37821,vf=36492,wv=36494,Tv=36495,oR=36283,bv=36284,Av=36285,Rv=36286,lR=3200,cR=3201,uR=0,fR=1,tr="",ii="srgb",Cr="srgb-linear",zp="display-p3",yu="display-p3-linear",Gc="linear",lt="srgb",Vc="rec709",Wc="p3",pa=7680,Cv=519,dR=512,hR=513,pR=514,uS=515,mR=516,gR=517,vR=518,_R=519,Pv=35044,Lv="300 es",vh=1035,Ai=2e3,jc=2001;class Ms{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const a=r.indexOf(n);a!==-1&&r.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let a=0,s=r.length;a<s;a++)r[a].call(this,e);e.target=null}}}const qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],_f=Math.PI/180,_h=180/Math.PI;function Bo(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(qt[t&255]+qt[t>>8&255]+qt[t>>16&255]+qt[t>>24&255]+"-"+qt[e&255]+qt[e>>8&255]+"-"+qt[e>>16&15|64]+qt[e>>24&255]+"-"+qt[n&63|128]+qt[n>>8&255]+"-"+qt[n>>16&255]+qt[n>>24&255]+qt[i&255]+qt[i>>8&255]+qt[i>>16&255]+qt[i>>24&255]).toLowerCase()}function fn(t,e,n){return Math.max(e,Math.min(n,t))}function yR(t,e){return(t%e+e)%e}function yf(t,e,n){return(1-n)*t+n*e}function Nv(t){return(t&t-1)===0&&t!==0}function yh(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Os(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function ln(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Qe{constructor(e=0,n=0){Qe.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(fn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),a=this.x-e.x,s=this.y-e.y;return this.x=a*i-s*r+e.x,this.y=a*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Be{constructor(e,n,i,r,a,s,o,l,c){Be.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,a,s,o,l,c)}set(e,n,i,r,a,s,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=n,u[4]=a,u[5]=l,u[6]=i,u[7]=s,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,a=this.elements,s=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],m=i[5],g=i[8],y=r[0],p=r[3],d=r[6],_=r[1],v=r[4],S=r[7],A=r[2],T=r[5],w=r[8];return a[0]=s*y+o*_+l*A,a[3]=s*p+o*v+l*T,a[6]=s*d+o*S+l*w,a[1]=c*y+u*_+f*A,a[4]=c*p+u*v+f*T,a[7]=c*d+u*S+f*w,a[2]=h*y+m*_+g*A,a[5]=h*p+m*v+g*T,a[8]=h*d+m*S+g*w,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return n*s*u-n*o*c-i*a*u+i*o*l+r*a*c-r*s*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*s-o*c,h=o*l-u*a,m=c*a-s*l,g=n*f+i*h+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/g;return e[0]=f*y,e[1]=(r*c-u*i)*y,e[2]=(o*i-r*s)*y,e[3]=h*y,e[4]=(u*n-r*l)*y,e[5]=(r*a-o*n)*y,e[6]=m*y,e[7]=(i*l-c*n)*y,e[8]=(s*n-i*a)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,a,s,o){const l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*s+c*o)+s+e,-r*c,r*l,-r*(-c*s+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(xf.makeScale(e,n)),this}rotate(e){return this.premultiply(xf.makeRotation(-e)),this}translate(e,n){return this.premultiply(xf.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const xf=new Be;function fS(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Po(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function xR(){const t=Po("canvas");return t.style.display="block",t}const Dv={};function SR(t){t in Dv||(Dv[t]=!0,console.warn(t))}const Iv=new Be().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Uv=new Be().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),El={[Cr]:{transfer:Gc,primaries:Vc,toReference:t=>t,fromReference:t=>t},[ii]:{transfer:lt,primaries:Vc,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[yu]:{transfer:Gc,primaries:Wc,toReference:t=>t.applyMatrix3(Uv),fromReference:t=>t.applyMatrix3(Iv)},[zp]:{transfer:lt,primaries:Wc,toReference:t=>t.convertSRGBToLinear().applyMatrix3(Uv),fromReference:t=>t.applyMatrix3(Iv).convertLinearToSRGB()}},ER=new Set([Cr,yu]),it={enabled:!0,_workingColorSpace:Cr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!ER.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=El[e].toReference,r=El[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return El[t].primaries},getTransfer:function(t){return t===tr?Gc:El[t].transfer}};function ts(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Sf(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let ma;class dS{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ma===void 0&&(ma=Po("canvas")),ma.width=e.width,ma.height=e.height;const i=ma.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ma}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Po("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),a=r.data;for(let s=0;s<a.length;s++)a[s]=ts(a[s]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ts(n[i]/255)*255):n[i]=ts(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let MR=0;class hS{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:MR++}),this.uuid=Bo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let s=0,o=r.length;s<o;s++)r[s].isDataTexture?a.push(Ef(r[s].image)):a.push(Ef(r[s]))}else a=Ef(r);i.url=a}return n||(e.images[this.uuid]=i),i}}function Ef(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?dS.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let wR=0;class an extends Ms{constructor(e=an.DEFAULT_IMAGE,n=an.DEFAULT_MAPPING,i=Yn,r=Yn,a=cn,s=Kr,o=qn,l=vr,c=an.DEFAULT_ANISOTROPY,u=tr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wR++}),this.uuid=Bo(),this.name="",this.source=new hS(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=a,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Qe(0,0),this.repeat=new Qe(1,1),this.center=new Qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==nS)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case mh:e.x=e.x-Math.floor(e.x);break;case Yn:e.x=e.x<0?0:1;break;case gh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case mh:e.y=e.y-Math.floor(e.y);break;case Yn:e.y=e.y<0?0:1;break;case gh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}an.DEFAULT_IMAGE=null;an.DEFAULT_MAPPING=nS;an.DEFAULT_ANISOTROPY=1;class Ft{constructor(e=0,n=0,i=0,r=1){Ft.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,a=this.w,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r+s[12]*a,this.y=s[1]*n+s[5]*i+s[9]*r+s[13]*a,this.z=s[2]*n+s[6]*i+s[10]*r+s[14]*a,this.w=s[3]*n+s[7]*i+s[11]*r+s[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,a;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],m=l[5],g=l[9],y=l[2],p=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-y)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+y)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(c+1)/2,S=(m+1)/2,A=(d+1)/2,T=(u+h)/4,w=(f+y)/4,C=(g+p)/4;return v>S&&v>A?v<.01?(i=0,r=.707106781,a=.707106781):(i=Math.sqrt(v),r=T/i,a=w/i):S>A?S<.01?(i=.707106781,r=0,a=.707106781):(r=Math.sqrt(S),i=T/r,a=C/r):A<.01?(i=.707106781,r=.707106781,a=0):(a=Math.sqrt(A),i=w/a,r=C/a),this.set(i,r,a,n),this}let _=Math.sqrt((p-g)*(p-g)+(f-y)*(f-y)+(h-u)*(h-u));return Math.abs(_)<.001&&(_=1),this.x=(p-g)/_,this.y=(f-y)/_,this.z=(h-u)/_,this.w=Math.acos((c+m+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class TR extends Ms{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Ft(0,0,e,n),this.scissorTest=!1,this.viewport=new Ft(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:cn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},i);const a=new an(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);a.flipY=!1,a.generateMipmaps=i.generateMipmaps,a.internalFormat=i.internalFormat,this.textures=[];const s=i.count;for(let o=0;o<s;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new hS(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ua extends TR{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class pS extends an{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=nn,this.minFilter=nn,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bR extends an{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=nn,this.minFilter=nn,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ho{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,a,s,o){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const h=a[s+0],m=a[s+1],g=a[s+2],y=a[s+3];if(o===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f;return}if(o===1){e[n+0]=h,e[n+1]=m,e[n+2]=g,e[n+3]=y;return}if(f!==y||l!==h||c!==m||u!==g){let p=1-o;const d=l*h+c*m+u*g+f*y,_=d>=0?1:-1,v=1-d*d;if(v>Number.EPSILON){const A=Math.sqrt(v),T=Math.atan2(A,d*_);p=Math.sin(p*T)/A,o=Math.sin(o*T)/A}const S=o*_;if(l=l*p+h*S,c=c*p+m*S,u=u*p+g*S,f=f*p+y*S,p===1-o){const A=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=A,c*=A,u*=A,f*=A}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,a,s){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=a[s],h=a[s+1],m=a[s+2],g=a[s+3];return e[n]=o*g+u*f+l*m-c*h,e[n+1]=l*g+u*h+c*f-o*m,e[n+2]=c*g+u*m+o*h-l*f,e[n+3]=u*g-o*f-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,a=e._z,s=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),f=o(a/2),h=l(i/2),m=l(r/2),g=l(a/2);switch(s){case"XYZ":this._x=h*u*f+c*m*g,this._y=c*m*f-h*u*g,this._z=c*u*g+h*m*f,this._w=c*u*f-h*m*g;break;case"YXZ":this._x=h*u*f+c*m*g,this._y=c*m*f-h*u*g,this._z=c*u*g-h*m*f,this._w=c*u*f+h*m*g;break;case"ZXY":this._x=h*u*f-c*m*g,this._y=c*m*f+h*u*g,this._z=c*u*g+h*m*f,this._w=c*u*f-h*m*g;break;case"ZYX":this._x=h*u*f-c*m*g,this._y=c*m*f+h*u*g,this._z=c*u*g-h*m*f,this._w=c*u*f+h*m*g;break;case"YZX":this._x=h*u*f+c*m*g,this._y=c*m*f+h*u*g,this._z=c*u*g-h*m*f,this._w=c*u*f-h*m*g;break;case"XZY":this._x=h*u*f-c*m*g,this._y=c*m*f-h*u*g,this._z=c*u*g+h*m*f,this._w=c*u*f+h*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],a=n[8],s=n[1],o=n[5],l=n[9],c=n[2],u=n[6],f=n[10],h=i+o+f;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-l)*m,this._y=(a-c)*m,this._z=(s-r)*m}else if(i>o&&i>f){const m=2*Math.sqrt(1+i-o-f);this._w=(u-l)/m,this._x=.25*m,this._y=(r+s)/m,this._z=(a+c)/m}else if(o>f){const m=2*Math.sqrt(1+o-i-f);this._w=(a-c)/m,this._x=(r+s)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+f-i-o);this._w=(s-r)/m,this._x=(a+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(fn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,a=e._z,s=e._w,o=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+s*o+r*c-a*l,this._y=r*u+s*l+a*o-i*c,this._z=a*u+s*c+i*l-r*o,this._w=s*u-i*o-r*l-a*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,a=this._z,s=this._w;let o=s*e._w+i*e._x+r*e._y+a*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=s,this._x=i,this._y=r,this._z=a,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-n;return this._w=m*s+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*a+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-n)*u)/c,h=Math.sin(n*u)/c;return this._w=s*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=a*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(n),a*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,n=0,i=0){F.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Ov.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Ov.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*n+a[3]*i+a[6]*r,this.y=a[1]*n+a[4]*i+a[7]*r,this.z=a[2]*n+a[5]*i+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,a=e.elements,s=1/(a[3]*n+a[7]*i+a[11]*r+a[15]);return this.x=(a[0]*n+a[4]*i+a[8]*r+a[12])*s,this.y=(a[1]*n+a[5]*i+a[9]*r+a[13])*s,this.z=(a[2]*n+a[6]*i+a[10]*r+a[14])*s,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,a=e.x,s=e.y,o=e.z,l=e.w,c=2*(s*r-o*i),u=2*(o*n-a*r),f=2*(a*i-s*n);return this.x=n+l*c+s*f-o*u,this.y=i+l*u+o*c-a*f,this.z=r+l*f+a*u-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r,this.y=a[1]*n+a[5]*i+a[9]*r,this.z=a[2]*n+a[6]*i+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,a=e.z,s=n.x,o=n.y,l=n.z;return this.x=r*l-a*o,this.y=a*s-i*l,this.z=i*o-r*s,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Mf.copy(this).projectOnVector(e),this.sub(Mf)}reflect(e){return this.sub(Mf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(fn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Mf=new F,Ov=new Ho;class Go{constructor(e=new F(1/0,1/0,1/0),n=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Gn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Gn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Gn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(n===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=a.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,Gn):Gn.fromBufferAttribute(a,s),Gn.applyMatrix4(e.matrixWorld),this.expandByPoint(Gn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ml.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ml.copy(i.boundingBox)),Ml.applyMatrix4(e.matrixWorld),this.union(Ml)}const r=e.children;for(let a=0,s=r.length;a<s;a++)this.expandByObject(r[a],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Gn),Gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ks),wl.subVectors(this.max,ks),ga.subVectors(e.a,ks),va.subVectors(e.b,ks),_a.subVectors(e.c,ks),Wi.subVectors(va,ga),ji.subVectors(_a,va),Nr.subVectors(ga,_a);let n=[0,-Wi.z,Wi.y,0,-ji.z,ji.y,0,-Nr.z,Nr.y,Wi.z,0,-Wi.x,ji.z,0,-ji.x,Nr.z,0,-Nr.x,-Wi.y,Wi.x,0,-ji.y,ji.x,0,-Nr.y,Nr.x,0];return!wf(n,ga,va,_a,wl)||(n=[1,0,0,0,1,0,0,0,1],!wf(n,ga,va,_a,wl))?!1:(Tl.crossVectors(Wi,ji),n=[Tl.x,Tl.y,Tl.z],wf(n,ga,va,_a,wl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Gn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Gn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const mi=[new F,new F,new F,new F,new F,new F,new F,new F],Gn=new F,Ml=new Go,ga=new F,va=new F,_a=new F,Wi=new F,ji=new F,Nr=new F,ks=new F,wl=new F,Tl=new F,Dr=new F;function wf(t,e,n,i,r){for(let a=0,s=t.length-3;a<=s;a+=3){Dr.fromArray(t,a);const o=r.x*Math.abs(Dr.x)+r.y*Math.abs(Dr.y)+r.z*Math.abs(Dr.z),l=e.dot(Dr),c=n.dot(Dr),u=i.dot(Dr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const AR=new Go,Fs=new F,Tf=new F;class xu{constructor(e=new F,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):AR.setFromPoints(e).getCenter(i);let r=0;for(let a=0,s=e.length;a<s;a++)r=Math.max(r,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Fs.subVectors(e,this.center);const n=Fs.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Fs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Tf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Fs.copy(e.center).add(Tf)),this.expandByPoint(Fs.copy(e.center).sub(Tf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const gi=new F,bf=new F,bl=new F,Xi=new F,Af=new F,Al=new F,Rf=new F;class mS{constructor(e=new F,n=new F(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,gi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=gi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(gi.copy(this.origin).addScaledVector(this.direction,n),gi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){bf.copy(e).add(n).multiplyScalar(.5),bl.copy(n).sub(e).normalize(),Xi.copy(this.origin).sub(bf);const a=e.distanceTo(n)*.5,s=-this.direction.dot(bl),o=Xi.dot(this.direction),l=-Xi.dot(bl),c=Xi.lengthSq(),u=Math.abs(1-s*s);let f,h,m,g;if(u>0)if(f=s*l-o,h=s*o-l,g=a*u,f>=0)if(h>=-g)if(h<=g){const y=1/u;f*=y,h*=y,m=f*(f+s*h+2*o)+h*(s*f+h+2*l)+c}else h=a,f=Math.max(0,-(s*h+o)),m=-f*f+h*(h+2*l)+c;else h=-a,f=Math.max(0,-(s*h+o)),m=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-s*a+o)),h=f>0?-a:Math.min(Math.max(-a,-l),a),m=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-a,-l),a),m=h*(h+2*l)+c):(f=Math.max(0,-(s*a+o)),h=f>0?a:Math.min(Math.max(-a,-l),a),m=-f*f+h*(h+2*l)+c);else h=s>0?-a:a,f=Math.max(0,-(s*h+o)),m=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(bf).addScaledVector(bl,h),m}intersectSphere(e,n){gi.subVectors(e.center,this.origin);const i=gi.dot(this.direction),r=gi.dot(gi)-i*i,a=e.radius*e.radius;if(r>a)return null;const s=Math.sqrt(a-r),o=i-s,l=i+s;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,a,s,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(a=(e.min.y-h.y)*u,s=(e.max.y-h.y)*u):(a=(e.max.y-h.y)*u,s=(e.min.y-h.y)*u),i>s||a>r||((a>i||isNaN(i))&&(i=a),(s<r||isNaN(r))&&(r=s),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,gi)!==null}intersectTriangle(e,n,i,r,a){Af.subVectors(n,e),Al.subVectors(i,e),Rf.crossVectors(Af,Al);let s=this.direction.dot(Rf),o;if(s>0){if(r)return null;o=1}else if(s<0)o=-1,s=-s;else return null;Xi.subVectors(this.origin,e);const l=o*this.direction.dot(Al.crossVectors(Xi,Al));if(l<0)return null;const c=o*this.direction.dot(Af.cross(Xi));if(c<0||l+c>s)return null;const u=-o*Xi.dot(Rf);return u<0?null:this.at(u/s,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class St{constructor(e,n,i,r,a,s,o,l,c,u,f,h,m,g,y,p){St.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,a,s,o,l,c,u,f,h,m,g,y,p)}set(e,n,i,r,a,s,o,l,c,u,f,h,m,g,y,p){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=a,d[5]=s,d[9]=o,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=m,d[7]=g,d[11]=y,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new St().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/ya.setFromMatrixColumn(e,0).length(),a=1/ya.setFromMatrixColumn(e,1).length(),s=1/ya.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*a,n[5]=i[5]*a,n[6]=i[6]*a,n[7]=0,n[8]=i[8]*s,n[9]=i[9]*s,n[10]=i[10]*s,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,a=e.z,s=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(a),f=Math.sin(a);if(e.order==="XYZ"){const h=s*u,m=s*f,g=o*u,y=o*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=m+g*c,n[5]=h-y*c,n[9]=-o*l,n[2]=y-h*c,n[6]=g+m*c,n[10]=s*l}else if(e.order==="YXZ"){const h=l*u,m=l*f,g=c*u,y=c*f;n[0]=h+y*o,n[4]=g*o-m,n[8]=s*c,n[1]=s*f,n[5]=s*u,n[9]=-o,n[2]=m*o-g,n[6]=y+h*o,n[10]=s*l}else if(e.order==="ZXY"){const h=l*u,m=l*f,g=c*u,y=c*f;n[0]=h-y*o,n[4]=-s*f,n[8]=g+m*o,n[1]=m+g*o,n[5]=s*u,n[9]=y-h*o,n[2]=-s*c,n[6]=o,n[10]=s*l}else if(e.order==="ZYX"){const h=s*u,m=s*f,g=o*u,y=o*f;n[0]=l*u,n[4]=g*c-m,n[8]=h*c+y,n[1]=l*f,n[5]=y*c+h,n[9]=m*c-g,n[2]=-c,n[6]=o*l,n[10]=s*l}else if(e.order==="YZX"){const h=s*l,m=s*c,g=o*l,y=o*c;n[0]=l*u,n[4]=y-h*f,n[8]=g*f+m,n[1]=f,n[5]=s*u,n[9]=-o*u,n[2]=-c*u,n[6]=m*f+g,n[10]=h-y*f}else if(e.order==="XZY"){const h=s*l,m=s*c,g=o*l,y=o*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=h*f+y,n[5]=s*u,n[9]=m*f-g,n[2]=g*f-m,n[6]=o*u,n[10]=y*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(RR,e,CR)}lookAt(e,n,i){const r=this.elements;return _n.subVectors(e,n),_n.lengthSq()===0&&(_n.z=1),_n.normalize(),$i.crossVectors(i,_n),$i.lengthSq()===0&&(Math.abs(i.z)===1?_n.x+=1e-4:_n.z+=1e-4,_n.normalize(),$i.crossVectors(i,_n)),$i.normalize(),Rl.crossVectors(_n,$i),r[0]=$i.x,r[4]=Rl.x,r[8]=_n.x,r[1]=$i.y,r[5]=Rl.y,r[9]=_n.y,r[2]=$i.z,r[6]=Rl.z,r[10]=_n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,a=this.elements,s=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],m=i[13],g=i[2],y=i[6],p=i[10],d=i[14],_=i[3],v=i[7],S=i[11],A=i[15],T=r[0],w=r[4],C=r[8],W=r[12],x=r[1],R=r[5],Z=r[9],Q=r[13],P=r[2],$=r[6],X=r[10],K=r[14],L=r[3],O=r[7],V=r[11],J=r[15];return a[0]=s*T+o*x+l*P+c*L,a[4]=s*w+o*R+l*$+c*O,a[8]=s*C+o*Z+l*X+c*V,a[12]=s*W+o*Q+l*K+c*J,a[1]=u*T+f*x+h*P+m*L,a[5]=u*w+f*R+h*$+m*O,a[9]=u*C+f*Z+h*X+m*V,a[13]=u*W+f*Q+h*K+m*J,a[2]=g*T+y*x+p*P+d*L,a[6]=g*w+y*R+p*$+d*O,a[10]=g*C+y*Z+p*X+d*V,a[14]=g*W+y*Q+p*K+d*J,a[3]=_*T+v*x+S*P+A*L,a[7]=_*w+v*R+S*$+A*O,a[11]=_*C+v*Z+S*X+A*V,a[15]=_*W+v*Q+S*K+A*J,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],a=e[12],s=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],m=e[14],g=e[3],y=e[7],p=e[11],d=e[15];return g*(+a*l*f-r*c*f-a*o*h+i*c*h+r*o*m-i*l*m)+y*(+n*l*m-n*c*h+a*s*h-r*s*m+r*c*u-a*l*u)+p*(+n*c*f-n*o*m-a*s*f+i*s*m+a*o*u-i*c*u)+d*(-r*o*u-n*l*f+n*o*h+r*s*f-i*s*h+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],m=e[11],g=e[12],y=e[13],p=e[14],d=e[15],_=f*p*c-y*h*c+y*l*m-o*p*m-f*l*d+o*h*d,v=g*h*c-u*p*c-g*l*m+s*p*m+u*l*d-s*h*d,S=u*y*c-g*f*c+g*o*m-s*y*m-u*o*d+s*f*d,A=g*f*l-u*y*l-g*o*h+s*y*h+u*o*p-s*f*p,T=n*_+i*v+r*S+a*A;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/T;return e[0]=_*w,e[1]=(y*h*a-f*p*a-y*r*m+i*p*m+f*r*d-i*h*d)*w,e[2]=(o*p*a-y*l*a+y*r*c-i*p*c-o*r*d+i*l*d)*w,e[3]=(f*l*a-o*h*a-f*r*c+i*h*c+o*r*m-i*l*m)*w,e[4]=v*w,e[5]=(u*p*a-g*h*a+g*r*m-n*p*m-u*r*d+n*h*d)*w,e[6]=(g*l*a-s*p*a-g*r*c+n*p*c+s*r*d-n*l*d)*w,e[7]=(s*h*a-u*l*a+u*r*c-n*h*c-s*r*m+n*l*m)*w,e[8]=S*w,e[9]=(g*f*a-u*y*a-g*i*m+n*y*m+u*i*d-n*f*d)*w,e[10]=(s*y*a-g*o*a+g*i*c-n*y*c-s*i*d+n*o*d)*w,e[11]=(u*o*a-s*f*a-u*i*c+n*f*c+s*i*m-n*o*m)*w,e[12]=A*w,e[13]=(u*y*r-g*f*r+g*i*h-n*y*h-u*i*p+n*f*p)*w,e[14]=(g*o*r-s*y*r-g*i*l+n*y*l+s*i*p-n*o*p)*w,e[15]=(s*f*r-u*o*r+u*i*l-n*f*l-s*i*h+n*o*h)*w,this}scale(e){const n=this.elements,i=e.x,r=e.y,a=e.z;return n[0]*=i,n[4]*=r,n[8]*=a,n[1]*=i,n[5]*=r,n[9]*=a,n[2]*=i,n[6]*=r,n[10]*=a,n[3]*=i,n[7]*=r,n[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),a=1-i,s=e.x,o=e.y,l=e.z,c=a*s,u=a*o;return this.set(c*s+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*s,0,c*l-r*o,u*l+r*s,a*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,a,s){return this.set(1,i,a,0,e,1,s,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,a=n._x,s=n._y,o=n._z,l=n._w,c=a+a,u=s+s,f=o+o,h=a*c,m=a*u,g=a*f,y=s*u,p=s*f,d=o*f,_=l*c,v=l*u,S=l*f,A=i.x,T=i.y,w=i.z;return r[0]=(1-(y+d))*A,r[1]=(m+S)*A,r[2]=(g-v)*A,r[3]=0,r[4]=(m-S)*T,r[5]=(1-(h+d))*T,r[6]=(p+_)*T,r[7]=0,r[8]=(g+v)*w,r[9]=(p-_)*w,r[10]=(1-(h+y))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let a=ya.set(r[0],r[1],r[2]).length();const s=ya.set(r[4],r[5],r[6]).length(),o=ya.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],Vn.copy(this);const c=1/a,u=1/s,f=1/o;return Vn.elements[0]*=c,Vn.elements[1]*=c,Vn.elements[2]*=c,Vn.elements[4]*=u,Vn.elements[5]*=u,Vn.elements[6]*=u,Vn.elements[8]*=f,Vn.elements[9]*=f,Vn.elements[10]*=f,n.setFromRotationMatrix(Vn),i.x=a,i.y=s,i.z=o,this}makePerspective(e,n,i,r,a,s,o=Ai){const l=this.elements,c=2*a/(n-e),u=2*a/(i-r),f=(n+e)/(n-e),h=(i+r)/(i-r);let m,g;if(o===Ai)m=-(s+a)/(s-a),g=-2*s*a/(s-a);else if(o===jc)m=-s/(s-a),g=-s*a/(s-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,a,s,o=Ai){const l=this.elements,c=1/(n-e),u=1/(i-r),f=1/(s-a),h=(n+e)*c,m=(i+r)*u;let g,y;if(o===Ai)g=(s+a)*f,y=-2*f;else if(o===jc)g=a*f,y=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=y,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const ya=new F,Vn=new St,RR=new F(0,0,0),CR=new F(1,1,1),$i=new F,Rl=new F,_n=new F,kv=new St,Fv=new Ho;class zi{constructor(e=0,n=0,i=0,r=zi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,a=r[0],s=r[4],o=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(fn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-s,a)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-fn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,a),this._z=0);break;case"ZXY":this._x=Math.asin(fn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-fn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(fn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,a)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-fn(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return kv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(kv,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Fv.setFromEuler(this),this.setFromQuaternion(Fv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zi.DEFAULT_ORDER="XYZ";class gS{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let PR=0;const zv=new F,xa=new Ho,vi=new St,Cl=new F,zs=new F,LR=new F,NR=new Ho,Bv=new F(1,0,0),Hv=new F(0,1,0),Gv=new F(0,0,1),DR={type:"added"},IR={type:"removed"},Cf={type:"childadded",child:null},Pf={type:"childremoved",child:null};class Wt extends Ms{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:PR++}),this.uuid=Bo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Wt.DEFAULT_UP.clone();const e=new F,n=new zi,i=new Ho,r=new F(1,1,1);function a(){i.setFromEuler(n,!1)}function s(){n.setFromQuaternion(i,void 0,!1)}n._onChange(a),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new St},normalMatrix:{value:new Be}}),this.matrix=new St,this.matrixWorld=new St,this.matrixAutoUpdate=Wt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gS,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return xa.setFromAxisAngle(e,n),this.quaternion.multiply(xa),this}rotateOnWorldAxis(e,n){return xa.setFromAxisAngle(e,n),this.quaternion.premultiply(xa),this}rotateX(e){return this.rotateOnAxis(Bv,e)}rotateY(e){return this.rotateOnAxis(Hv,e)}rotateZ(e){return this.rotateOnAxis(Gv,e)}translateOnAxis(e,n){return zv.copy(e).applyQuaternion(this.quaternion),this.position.add(zv.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Bv,e)}translateY(e){return this.translateOnAxis(Hv,e)}translateZ(e){return this.translateOnAxis(Gv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Cl.copy(e):Cl.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),zs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vi.lookAt(zs,Cl,this.up):vi.lookAt(Cl,zs,this.up),this.quaternion.setFromRotationMatrix(vi),r&&(vi.extractRotation(r.matrixWorld),xa.setFromRotationMatrix(vi),this.quaternion.premultiply(xa.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(DR),Cf.child=e,this.dispatchEvent(Cf),Cf.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(IR),Pf.child=e,this.dispatchEvent(Pf),Pf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(vi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectByProperty(e,n);if(s!==void 0)return s}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let a=0,s=r.length;a<s;a++)r[a].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zs,e,LR),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zs,NR,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const a=n[i];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let a=0,s=r.length;a<s;a++){const o=r[a];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];a(e.shapes,f)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(e.materials,this.material[l]));r.material=o}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(a(e.animations,l))}}if(n){const o=s(e.geometries),l=s(e.materials),c=s(e.textures),u=s(e.images),f=s(e.shapes),h=s(e.skeletons),m=s(e.animations),g=s(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=r,i;function s(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Wt.DEFAULT_UP=new F(0,1,0);Wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Wn=new F,_i=new F,Lf=new F,yi=new F,Sa=new F,Ea=new F,Vv=new F,Nf=new F,Df=new F,If=new F;class si{constructor(e=new F,n=new F,i=new F){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Wn.subVectors(e,n),r.cross(Wn);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,n,i,r,a){Wn.subVectors(r,n),_i.subVectors(i,n),Lf.subVectors(e,n);const s=Wn.dot(Wn),o=Wn.dot(_i),l=Wn.dot(Lf),c=_i.dot(_i),u=_i.dot(Lf),f=s*c-o*o;if(f===0)return a.set(0,0,0),null;const h=1/f,m=(c*l-o*u)*h,g=(s*u-o*l)*h;return a.set(1-m-g,g,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,yi)===null?!1:yi.x>=0&&yi.y>=0&&yi.x+yi.y<=1}static getInterpolation(e,n,i,r,a,s,o,l){return this.getBarycoord(e,n,i,r,yi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,yi.x),l.addScaledVector(s,yi.y),l.addScaledVector(o,yi.z),l)}static isFrontFacing(e,n,i,r){return Wn.subVectors(i,n),_i.subVectors(e,n),Wn.cross(_i).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wn.subVectors(this.c,this.b),_i.subVectors(this.a,this.b),Wn.cross(_i).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return si.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return si.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,a){return si.getInterpolation(e,this.a,this.b,this.c,n,i,r,a)}containsPoint(e){return si.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return si.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,a=this.c;let s,o;Sa.subVectors(r,i),Ea.subVectors(a,i),Nf.subVectors(e,i);const l=Sa.dot(Nf),c=Ea.dot(Nf);if(l<=0&&c<=0)return n.copy(i);Df.subVectors(e,r);const u=Sa.dot(Df),f=Ea.dot(Df);if(u>=0&&f<=u)return n.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return s=l/(l-u),n.copy(i).addScaledVector(Sa,s);If.subVectors(e,a);const m=Sa.dot(If),g=Ea.dot(If);if(g>=0&&m<=g)return n.copy(a);const y=m*c-l*g;if(y<=0&&c>=0&&g<=0)return o=c/(c-g),n.copy(i).addScaledVector(Ea,o);const p=u*g-m*f;if(p<=0&&f-u>=0&&m-g>=0)return Vv.subVectors(a,r),o=(f-u)/(f-u+(m-g)),n.copy(r).addScaledVector(Vv,o);const d=1/(p+y+h);return s=y*d,o=h*d,n.copy(i).addScaledVector(Sa,s).addScaledVector(Ea,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const vS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yi={h:0,s:0,l:0},Pl={h:0,s:0,l:0};function Uf(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class et{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=ii){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=it.workingColorSpace){return this.r=e,this.g=n,this.b=i,it.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=it.workingColorSpace){if(e=yR(e,1),n=fn(n,0,1),i=fn(i,0,1),n===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+n):i+n-i*n,s=2*i-a;this.r=Uf(s,a,e+1/3),this.g=Uf(s,a,e),this.b=Uf(s,a,e-1/3)}return it.toWorkingColorSpace(this,r),this}setStyle(e,n=ii){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const s=r[1],o=r[2];switch(s){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,n);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,n);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],s=a.length;if(s===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,n);if(s===6)return this.setHex(parseInt(a,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=ii){const i=vS[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ts(e.r),this.g=ts(e.g),this.b=ts(e.b),this}copyLinearToSRGB(e){return this.r=Sf(e.r),this.g=Sf(e.g),this.b=Sf(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ii){return it.fromWorkingColorSpace(Kt.copy(this),e),Math.round(fn(Kt.r*255,0,255))*65536+Math.round(fn(Kt.g*255,0,255))*256+Math.round(fn(Kt.b*255,0,255))}getHexString(e=ii){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=it.workingColorSpace){it.fromWorkingColorSpace(Kt.copy(this),n);const i=Kt.r,r=Kt.g,a=Kt.b,s=Math.max(i,r,a),o=Math.min(i,r,a);let l,c;const u=(o+s)/2;if(o===s)l=0,c=0;else{const f=s-o;switch(c=u<=.5?f/(s+o):f/(2-s-o),s){case i:l=(r-a)/f+(r<a?6:0);break;case r:l=(a-i)/f+2;break;case a:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=it.workingColorSpace){return it.fromWorkingColorSpace(Kt.copy(this),n),e.r=Kt.r,e.g=Kt.g,e.b=Kt.b,e}getStyle(e=ii){it.fromWorkingColorSpace(Kt.copy(this),e);const n=Kt.r,i=Kt.g,r=Kt.b;return e!==ii?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Yi),this.setHSL(Yi.h+e,Yi.s+n,Yi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Yi),e.getHSL(Pl);const i=yf(Yi.h,Pl.h,n),r=yf(Yi.s,Pl.s,n),a=yf(Yi.l,Pl.l,n);return this.setHSL(i,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,a=e.elements;return this.r=a[0]*n+a[3]*i+a[6]*r,this.g=a[1]*n+a[4]*i+a[7]*r,this.b=a[2]*n+a[5]*i+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Kt=new et;et.NAMES=vS;let UR=0;class Vo extends Ms{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:UR++}),this.uuid=Bo(),this.name="",this.type="Material",this.blending=es,this.side=Mr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fh,this.blendDst=dh,this.blendEquation=Vr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new et(0,0,0),this.blendAlpha=0,this.depthFunc=Hc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=pa,this.stencilZFail=pa,this.stencilZPass=pa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==es&&(i.blending=this.blending),this.side!==Mr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==fh&&(i.blendSrc=this.blendSrc),this.blendDst!==dh&&(i.blendDst=this.blendDst),this.blendEquation!==Vr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Hc&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Cv&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==pa&&(i.stencilFail=this.stencilFail),this.stencilZFail!==pa&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==pa&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(a){const s=[];for(const o in a){const l=a[o];delete l.metadata,s.push(l)}return s}if(n){const a=r(e.textures),s=r(e.images);a.length>0&&(i.textures=a),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let a=0;a!==r;++a)i[a]=n[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class _S extends Vo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zi,this.combine=tS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const At=new F,Ll=new Qe;class kn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Pv,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=wi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return SR("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ll.fromBufferAttribute(this,n),Ll.applyMatrix3(e),this.setXY(n,Ll.x,Ll.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)At.fromBufferAttribute(this,n),At.applyMatrix3(e),this.setXYZ(n,At.x,At.y,At.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)At.fromBufferAttribute(this,n),At.applyMatrix4(e),this.setXYZ(n,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)At.fromBufferAttribute(this,n),At.applyNormalMatrix(e),this.setXYZ(n,At.x,At.y,At.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)At.fromBufferAttribute(this,n),At.transformDirection(e),this.setXYZ(n,At.x,At.y,At.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Os(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=ln(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Os(n,this.array)),n}setX(e,n){return this.normalized&&(n=ln(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Os(n,this.array)),n}setY(e,n){return this.normalized&&(n=ln(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Os(n,this.array)),n}setZ(e,n){return this.normalized&&(n=ln(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Os(n,this.array)),n}setW(e,n){return this.normalized&&(n=ln(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=ln(n,this.array),i=ln(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=ln(n,this.array),i=ln(i,this.array),r=ln(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,a){return e*=this.itemSize,this.normalized&&(n=ln(n,this.array),i=ln(i,this.array),r=ln(r,this.array),a=ln(a,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Pv&&(e.usage=this.usage),e}}class yS extends kn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class xS extends kn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class na extends kn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let OR=0;const Pn=new St,Of=new Wt,Ma=new F,yn=new Go,Bs=new Go,Ot=new F;class di extends Ms{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:OR++}),this.uuid=Bo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(fS(e)?xS:yS)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new Be().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Pn.makeRotationFromQuaternion(e),this.applyMatrix4(Pn),this}rotateX(e){return Pn.makeRotationX(e),this.applyMatrix4(Pn),this}rotateY(e){return Pn.makeRotationY(e),this.applyMatrix4(Pn),this}rotateZ(e){return Pn.makeRotationZ(e),this.applyMatrix4(Pn),this}translate(e,n,i){return Pn.makeTranslation(e,n,i),this.applyMatrix4(Pn),this}scale(e,n,i){return Pn.makeScale(e,n,i),this.applyMatrix4(Pn),this}lookAt(e){return Of.lookAt(e),Of.updateMatrix(),this.applyMatrix4(Of.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ma).negate(),this.translate(Ma.x,Ma.y,Ma.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new na(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Go);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const a=n[i];yn.setFromBufferAttribute(a),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,yn.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,yn.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(yn.min),this.boundingBox.expandByPoint(yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xu);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const i=this.boundingSphere.center;if(yn.setFromBufferAttribute(e),n)for(let a=0,s=n.length;a<s;a++){const o=n[a];Bs.setFromBufferAttribute(o),this.morphTargetsRelative?(Ot.addVectors(yn.min,Bs.min),yn.expandByPoint(Ot),Ot.addVectors(yn.max,Bs.max),yn.expandByPoint(Ot)):(yn.expandByPoint(Bs.min),yn.expandByPoint(Bs.max))}yn.getCenter(i);let r=0;for(let a=0,s=e.count;a<s;a++)Ot.fromBufferAttribute(e,a),r=Math.max(r,i.distanceToSquared(Ot));if(n)for(let a=0,s=n.length;a<s;a++){const o=n[a],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Ot.fromBufferAttribute(o,c),l&&(Ma.fromBufferAttribute(e,c),Ot.add(Ma)),r=Math.max(r,i.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,a=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new kn(new Float32Array(4*i.count),4));const s=this.getAttribute("tangent"),o=[],l=[];for(let C=0;C<i.count;C++)o[C]=new F,l[C]=new F;const c=new F,u=new F,f=new F,h=new Qe,m=new Qe,g=new Qe,y=new F,p=new F;function d(C,W,x){c.fromBufferAttribute(i,C),u.fromBufferAttribute(i,W),f.fromBufferAttribute(i,x),h.fromBufferAttribute(a,C),m.fromBufferAttribute(a,W),g.fromBufferAttribute(a,x),u.sub(c),f.sub(c),m.sub(h),g.sub(h);const R=1/(m.x*g.y-g.x*m.y);isFinite(R)&&(y.copy(u).multiplyScalar(g.y).addScaledVector(f,-m.y).multiplyScalar(R),p.copy(f).multiplyScalar(m.x).addScaledVector(u,-g.x).multiplyScalar(R),o[C].add(y),o[W].add(y),o[x].add(y),l[C].add(p),l[W].add(p),l[x].add(p))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let C=0,W=_.length;C<W;++C){const x=_[C],R=x.start,Z=x.count;for(let Q=R,P=R+Z;Q<P;Q+=3)d(e.getX(Q+0),e.getX(Q+1),e.getX(Q+2))}const v=new F,S=new F,A=new F,T=new F;function w(C){A.fromBufferAttribute(r,C),T.copy(A);const W=o[C];v.copy(W),v.sub(A.multiplyScalar(A.dot(W))).normalize(),S.crossVectors(T,W);const R=S.dot(l[C])<0?-1:1;s.setXYZW(C,v.x,v.y,v.z,R)}for(let C=0,W=_.length;C<W;++C){const x=_[C],R=x.start,Z=x.count;for(let Q=R,P=R+Z;Q<P;Q+=3)w(e.getX(Q+0)),w(e.getX(Q+1)),w(e.getX(Q+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new kn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new F,a=new F,s=new F,o=new F,l=new F,c=new F,u=new F,f=new F;if(e)for(let h=0,m=e.count;h<m;h+=3){const g=e.getX(h+0),y=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(n,g),a.fromBufferAttribute(n,y),s.fromBufferAttribute(n,p),u.subVectors(s,a),f.subVectors(r,a),u.cross(f),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,p),o.add(u),l.add(u),c.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,m=n.count;h<m;h+=3)r.fromBufferAttribute(n,h+0),a.fromBufferAttribute(n,h+1),s.fromBufferAttribute(n,h+2),u.subVectors(s,a),f.subVectors(r,a),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ot.fromBufferAttribute(e,n),Ot.normalize(),e.setXYZ(n,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u);let m=0,g=0;for(let y=0,p=l.length;y<p;y++){o.isInterleavedBufferAttribute?m=l[y]*o.data.stride+o.offset:m=l[y]*u;for(let d=0;d<u;d++)h[g++]=c[m++]}return new kn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new di,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const a=this.morphAttributes;for(const o in a){const l=[],c=a[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],m=e(h,i);l.push(m)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const c=s[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const m=c[f];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const a=e.morphAttributes;for(const c in a){const u=[],f=a[c];for(let h=0,m=f.length;h<m;h++)u.push(f[h].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,u=s.length;c<u;c++){const f=s[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Wv=new St,Ir=new mS,Nl=new xu,jv=new F,wa=new F,Ta=new F,ba=new F,kf=new F,Dl=new F,Il=new Qe,Ul=new Qe,Ol=new Qe,Xv=new F,$v=new F,Yv=new F,kl=new F,Fl=new F;class Ri extends Wt{constructor(e=new di,n=new _S){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=r.length;a<s;a++){const o=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,a=i.morphAttributes.position,s=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(a&&o){Dl.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const u=o[l],f=a[l];u!==0&&(kf.fromBufferAttribute(f,e),s?Dl.addScaledVector(kf,u):Dl.addScaledVector(kf.sub(n),u))}n.add(Dl)}return n}raycast(e,n){const i=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Nl.copy(i.boundingSphere),Nl.applyMatrix4(a),Ir.copy(e.ray).recast(e.near),!(Nl.containsPoint(Ir.origin)===!1&&(Ir.intersectSphere(Nl,jv)===null||Ir.origin.distanceToSquared(jv)>(e.far-e.near)**2))&&(Wv.copy(a).invert(),Ir.copy(e.ray).applyMatrix4(Wv),!(i.boundingBox!==null&&Ir.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Ir)))}_computeIntersections(e,n,i){let r;const a=this.geometry,s=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,u=a.attributes.uv1,f=a.attributes.normal,h=a.groups,m=a.drawRange;if(o!==null)if(Array.isArray(s))for(let g=0,y=h.length;g<y;g++){const p=h[g],d=s[p.materialIndex],_=Math.max(p.start,m.start),v=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let S=_,A=v;S<A;S+=3){const T=o.getX(S),w=o.getX(S+1),C=o.getX(S+2);r=zl(this,d,e,i,c,u,f,T,w,C),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const g=Math.max(0,m.start),y=Math.min(o.count,m.start+m.count);for(let p=g,d=y;p<d;p+=3){const _=o.getX(p),v=o.getX(p+1),S=o.getX(p+2);r=zl(this,s,e,i,c,u,f,_,v,S),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let g=0,y=h.length;g<y;g++){const p=h[g],d=s[p.materialIndex],_=Math.max(p.start,m.start),v=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let S=_,A=v;S<A;S+=3){const T=S,w=S+1,C=S+2;r=zl(this,d,e,i,c,u,f,T,w,C),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const g=Math.max(0,m.start),y=Math.min(l.count,m.start+m.count);for(let p=g,d=y;p<d;p+=3){const _=p,v=p+1,S=p+2;r=zl(this,s,e,i,c,u,f,_,v,S),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function kR(t,e,n,i,r,a,s,o){let l;if(e.side===gn?l=i.intersectTriangle(s,a,r,!0,o):l=i.intersectTriangle(r,a,s,e.side===Mr,o),l===null)return null;Fl.copy(o),Fl.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Fl);return c<n.near||c>n.far?null:{distance:c,point:Fl.clone(),object:t}}function zl(t,e,n,i,r,a,s,o,l,c){t.getVertexPosition(o,wa),t.getVertexPosition(l,Ta),t.getVertexPosition(c,ba);const u=kR(t,e,n,i,wa,Ta,ba,kl);if(u){r&&(Il.fromBufferAttribute(r,o),Ul.fromBufferAttribute(r,l),Ol.fromBufferAttribute(r,c),u.uv=si.getInterpolation(kl,wa,Ta,ba,Il,Ul,Ol,new Qe)),a&&(Il.fromBufferAttribute(a,o),Ul.fromBufferAttribute(a,l),Ol.fromBufferAttribute(a,c),u.uv1=si.getInterpolation(kl,wa,Ta,ba,Il,Ul,Ol,new Qe)),s&&(Xv.fromBufferAttribute(s,o),$v.fromBufferAttribute(s,l),Yv.fromBufferAttribute(s,c),u.normal=si.getInterpolation(kl,wa,Ta,ba,Xv,$v,Yv,new F),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new F,materialIndex:0};si.getNormal(wa,Ta,ba,f.normal),u.face=f}return u}class Wo extends di{constructor(e=1,n=1,i=1,r=1,a=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:a,depthSegments:s};const o=this;r=Math.floor(r),a=Math.floor(a),s=Math.floor(s);const l=[],c=[],u=[],f=[];let h=0,m=0;g("z","y","x",-1,-1,i,n,e,s,a,0),g("z","y","x",1,-1,i,n,-e,s,a,1),g("x","z","y",1,1,e,i,n,r,s,2),g("x","z","y",1,-1,e,i,-n,r,s,3),g("x","y","z",1,-1,e,n,i,r,a,4),g("x","y","z",-1,-1,e,n,-i,r,a,5),this.setIndex(l),this.setAttribute("position",new na(c,3)),this.setAttribute("normal",new na(u,3)),this.setAttribute("uv",new na(f,2));function g(y,p,d,_,v,S,A,T,w,C,W){const x=S/w,R=A/C,Z=S/2,Q=A/2,P=T/2,$=w+1,X=C+1;let K=0,L=0;const O=new F;for(let V=0;V<X;V++){const J=V*R-Q;for(let oe=0;oe<$;oe++){const Ce=oe*x-Z;O[y]=Ce*_,O[p]=J*v,O[d]=P,c.push(O.x,O.y,O.z),O[y]=0,O[p]=0,O[d]=T>0?1:-1,u.push(O.x,O.y,O.z),f.push(oe/w),f.push(1-V/C),K+=1}}for(let V=0;V<C;V++)for(let J=0;J<w;J++){const oe=h+J+$*V,Ce=h+J+$*(V+1),H=h+(J+1)+$*(V+1),ee=h+(J+1)+$*V;l.push(oe,Ce,ee),l.push(Ce,H,ee),L+=6}o.addGroup(m,L,W),m+=L,h+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function hs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function en(t){const e={};for(let n=0;n<t.length;n++){const i=hs(t[n]);for(const r in i)e[r]=i[r]}return e}function FR(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function SS(t){return t.getRenderTarget()===null?t.outputColorSpace:it.workingColorSpace}const zR={clone:hs,merge:en};var BR=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,HR=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class wr extends Vo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=BR,this.fragmentShader=HR,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=hs(e.uniforms),this.uniformsGroups=FR(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?n.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?n.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?n.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?n.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?n.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?n.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?n.uniforms[r]={type:"m4",value:s.toArray()}:n.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class ES extends Wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new St,this.projectionMatrix=new St,this.projectionMatrixInverse=new St,this.coordinateSystem=Ai}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const qi=new F,qv=new Qe,Kv=new Qe;class Dn extends ES{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=_h*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(_f*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _h*2*Math.atan(Math.tan(_f*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(qi.x,qi.y).multiplyScalar(-e/qi.z),qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(qi.x,qi.y).multiplyScalar(-e/qi.z)}getViewSize(e,n){return this.getViewBounds(e,qv,Kv),n.subVectors(Kv,qv)}setViewOffset(e,n,i,r,a,s){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(_f*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,a=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;a+=s.offsetX*r/l,n-=s.offsetY*i/c,r*=s.width/l,i*=s.height/c}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Aa=-90,Ra=1;class GR extends Wt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Dn(Aa,Ra,e,n);r.layers=this.layers,this.add(r);const a=new Dn(Aa,Ra,e,n);a.layers=this.layers,this.add(a);const s=new Dn(Aa,Ra,e,n);s.layers=this.layers,this.add(s);const o=new Dn(Aa,Ra,e,n);o.layers=this.layers,this.add(o);const l=new Dn(Aa,Ra,e,n);l.layers=this.layers,this.add(l);const c=new Dn(Aa,Ra,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,a,s,o,l]=n;for(const c of n)this.remove(c);if(e===Ai)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===jc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,s,o,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,a),e.setRenderTarget(i,1,r),e.render(n,s),e.setRenderTarget(i,2,r),e.render(n,o),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(f,h,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class MS extends an{constructor(e,n,i,r,a,s,o,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:us,super(e,n,i,r,a,s,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class VR extends ua{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new MS(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:cn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Wo(5,5,5),a=new wr({name:"CubemapFromEquirect",uniforms:hs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:gn,blending:mr});a.uniforms.tEquirect.value=n;const s=new Ri(r,a),o=n.minFilter;return n.minFilter===Kr&&(n.minFilter=cn),new GR(1,10,this).update(e,s),n.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,n,i,r){const a=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(n,i,r);e.setRenderTarget(a)}}const Ff=new F,WR=new F,jR=new Be;class Br{constructor(e=new F(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Ff.subVectors(i,n).cross(WR.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Ff),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:n.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||jR.getNormalMatrix(e),r=this.coplanarPoint(Ff).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ur=new xu,Bl=new F;class Bp{constructor(e=new Br,n=new Br,i=new Br,r=new Br,a=new Br,s=new Br){this.planes=[e,n,i,r,a,s]}set(e,n,i,r,a,s){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(a),o[5].copy(s),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ai){const i=this.planes,r=e.elements,a=r[0],s=r[1],o=r[2],l=r[3],c=r[4],u=r[5],f=r[6],h=r[7],m=r[8],g=r[9],y=r[10],p=r[11],d=r[12],_=r[13],v=r[14],S=r[15];if(i[0].setComponents(l-a,h-c,p-m,S-d).normalize(),i[1].setComponents(l+a,h+c,p+m,S+d).normalize(),i[2].setComponents(l+s,h+u,p+g,S+_).normalize(),i[3].setComponents(l-s,h-u,p-g,S-_).normalize(),i[4].setComponents(l-o,h-f,p-y,S-v).normalize(),n===Ai)i[5].setComponents(l+o,h+f,p+y,S+v).normalize();else if(n===jc)i[5].setComponents(o,f,y,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ur.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ur.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ur)}intersectsSprite(e){return Ur.center.set(0,0,0),Ur.radius=.7071067811865476,Ur.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ur)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let a=0;a<6;a++)if(n[a].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Bl.x=r.normal.x>0?e.max.x:e.min.x,Bl.y=r.normal.y>0?e.max.y:e.min.y,Bl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Bl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function wS(){let t=null,e=!1,n=null,i=null;function r(a,s){n(a,s),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){n=a},setContext:function(a){t=a}}}function XR(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,u){const f=c.array,h=c.usage,m=f.byteLength,g=t.createBuffer();t.bindBuffer(u,g),t.bufferData(u,f,h),c.onUploadCallback();let y;if(f instanceof Float32Array)y=t.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)y=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=t.UNSIGNED_SHORT;else if(f instanceof Int16Array)y=t.SHORT;else if(f instanceof Uint32Array)y=t.UNSIGNED_INT;else if(f instanceof Int32Array)y=t.INT;else if(f instanceof Int8Array)y=t.BYTE;else if(f instanceof Uint8Array)y=t.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)y=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:g,type:y,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:m}}function a(c,u,f){const h=u.array,m=u._updateRange,g=u.updateRanges;if(t.bindBuffer(f,c),m.count===-1&&g.length===0&&t.bufferSubData(f,0,h),g.length!==0){for(let y=0,p=g.length;y<p;y++){const d=g[y];n?t.bufferSubData(f,d.start*h.BYTES_PER_ELEMENT,h,d.start,d.count):t.bufferSubData(f,d.start*h.BYTES_PER_ELEMENT,h.subarray(d.start,d.start+d.count))}u.clearUpdateRanges()}m.count!==-1&&(n?t.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):t.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function s(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(t.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);if(f===void 0)i.set(c,r(c,u));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(f.buffer,c,u),f.version=c.version}}return{get:s,remove:o,update:l}}class Su extends di{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const a=e/2,s=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,f=e/o,h=n/l,m=[],g=[],y=[],p=[];for(let d=0;d<u;d++){const _=d*h-s;for(let v=0;v<c;v++){const S=v*f-a;g.push(S,-_,0),y.push(0,0,1),p.push(v/o),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let _=0;_<o;_++){const v=_+c*d,S=_+c*(d+1),A=_+1+c*(d+1),T=_+1+c*d;m.push(v,S,T),m.push(S,A,T)}this.setIndex(m),this.setAttribute("position",new na(g,3)),this.setAttribute("normal",new na(y,3)),this.setAttribute("uv",new na(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Su(e.width,e.height,e.widthSegments,e.heightSegments)}}var $R=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,YR=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,qR=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,KR=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,JR=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ZR=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,QR=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,eC=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tC=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,nC=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,iC=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rC=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,aC=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,sC=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,oC=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,lC=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,cC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,uC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fC=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,dC=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,hC=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,pC=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,mC=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,gC=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,vC=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,_C=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,yC=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xC=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,SC=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,EC=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,MC="gl_FragColor = linearToOutputTexel( gl_FragColor );",wC=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,TC=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,bC=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,AC=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,RC=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,CC=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,PC=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,LC=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,NC=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,DC=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,IC=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,UC=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,OC=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kC=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,FC=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zC=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,BC=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,HC=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,GC=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,VC=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,WC=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jC=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,XC=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,$C=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,YC=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,qC=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,KC=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,JC=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ZC=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,QC=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,e2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,t2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,n2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,i2=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,r2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,a2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,s2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,o2=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,l2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,c2=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,u2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,f2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,d2=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,h2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,p2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,m2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,g2=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,v2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,y2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,x2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,S2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,E2=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,M2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,w2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,T2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,b2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,A2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,R2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,C2=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,P2=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,L2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,N2=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,D2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,I2=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,U2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,O2=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,k2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,F2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,z2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,B2=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,H2=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,G2=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,V2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,W2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,j2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,X2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Y2=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,q2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,K2=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,J2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Z2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Q2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,eP=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,tP=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,nP=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,iP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,rP=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aP=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sP=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,oP=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,lP=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cP=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uP=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fP=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,dP=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hP=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,pP=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,mP=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gP=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vP=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,_P=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yP=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xP=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,SP=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,EP=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,MP=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wP=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,TP=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bP=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ze={alphahash_fragment:$R,alphahash_pars_fragment:YR,alphamap_fragment:qR,alphamap_pars_fragment:KR,alphatest_fragment:JR,alphatest_pars_fragment:ZR,aomap_fragment:QR,aomap_pars_fragment:eC,batching_pars_vertex:tC,batching_vertex:nC,begin_vertex:iC,beginnormal_vertex:rC,bsdfs:aC,iridescence_fragment:sC,bumpmap_pars_fragment:oC,clipping_planes_fragment:lC,clipping_planes_pars_fragment:cC,clipping_planes_pars_vertex:uC,clipping_planes_vertex:fC,color_fragment:dC,color_pars_fragment:hC,color_pars_vertex:pC,color_vertex:mC,common:gC,cube_uv_reflection_fragment:vC,defaultnormal_vertex:_C,displacementmap_pars_vertex:yC,displacementmap_vertex:xC,emissivemap_fragment:SC,emissivemap_pars_fragment:EC,colorspace_fragment:MC,colorspace_pars_fragment:wC,envmap_fragment:TC,envmap_common_pars_fragment:bC,envmap_pars_fragment:AC,envmap_pars_vertex:RC,envmap_physical_pars_fragment:BC,envmap_vertex:CC,fog_vertex:PC,fog_pars_vertex:LC,fog_fragment:NC,fog_pars_fragment:DC,gradientmap_pars_fragment:IC,lightmap_fragment:UC,lightmap_pars_fragment:OC,lights_lambert_fragment:kC,lights_lambert_pars_fragment:FC,lights_pars_begin:zC,lights_toon_fragment:HC,lights_toon_pars_fragment:GC,lights_phong_fragment:VC,lights_phong_pars_fragment:WC,lights_physical_fragment:jC,lights_physical_pars_fragment:XC,lights_fragment_begin:$C,lights_fragment_maps:YC,lights_fragment_end:qC,logdepthbuf_fragment:KC,logdepthbuf_pars_fragment:JC,logdepthbuf_pars_vertex:ZC,logdepthbuf_vertex:QC,map_fragment:e2,map_pars_fragment:t2,map_particle_fragment:n2,map_particle_pars_fragment:i2,metalnessmap_fragment:r2,metalnessmap_pars_fragment:a2,morphinstance_vertex:s2,morphcolor_vertex:o2,morphnormal_vertex:l2,morphtarget_pars_vertex:c2,morphtarget_vertex:u2,normal_fragment_begin:f2,normal_fragment_maps:d2,normal_pars_fragment:h2,normal_pars_vertex:p2,normal_vertex:m2,normalmap_pars_fragment:g2,clearcoat_normal_fragment_begin:v2,clearcoat_normal_fragment_maps:_2,clearcoat_pars_fragment:y2,iridescence_pars_fragment:x2,opaque_fragment:S2,packing:E2,premultiplied_alpha_fragment:M2,project_vertex:w2,dithering_fragment:T2,dithering_pars_fragment:b2,roughnessmap_fragment:A2,roughnessmap_pars_fragment:R2,shadowmap_pars_fragment:C2,shadowmap_pars_vertex:P2,shadowmap_vertex:L2,shadowmask_pars_fragment:N2,skinbase_vertex:D2,skinning_pars_vertex:I2,skinning_vertex:U2,skinnormal_vertex:O2,specularmap_fragment:k2,specularmap_pars_fragment:F2,tonemapping_fragment:z2,tonemapping_pars_fragment:B2,transmission_fragment:H2,transmission_pars_fragment:G2,uv_pars_fragment:V2,uv_pars_vertex:W2,uv_vertex:j2,worldpos_vertex:X2,background_vert:$2,background_frag:Y2,backgroundCube_vert:q2,backgroundCube_frag:K2,cube_vert:J2,cube_frag:Z2,depth_vert:Q2,depth_frag:eP,distanceRGBA_vert:tP,distanceRGBA_frag:nP,equirect_vert:iP,equirect_frag:rP,linedashed_vert:aP,linedashed_frag:sP,meshbasic_vert:oP,meshbasic_frag:lP,meshlambert_vert:cP,meshlambert_frag:uP,meshmatcap_vert:fP,meshmatcap_frag:dP,meshnormal_vert:hP,meshnormal_frag:pP,meshphong_vert:mP,meshphong_frag:gP,meshphysical_vert:vP,meshphysical_frag:_P,meshtoon_vert:yP,meshtoon_frag:xP,points_vert:SP,points_frag:EP,shadow_vert:MP,shadow_frag:wP,sprite_vert:TP,sprite_frag:bP},le={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},envMapRotation:{value:new Be},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new Qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new Qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},ri={basic:{uniforms:en([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:en([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new et(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:en([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:en([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:en([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new et(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:en([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:en([le.points,le.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:en([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:en([le.common,le.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:en([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:en([le.sprite,le.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Be}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:en([le.common,le.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:en([le.lights,le.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};ri.physical={uniforms:en([ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new Qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new Qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new Qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const Hl={r:0,b:0,g:0},Or=new zi,AP=new St;function RP(t,e,n,i,r,a,s){const o=new et(0);let l=a===!0?0:1,c,u,f=null,h=0,m=null;function g(p,d){let _=!1,v=d.isScene===!0?d.background:null;v&&v.isTexture&&(v=(d.backgroundBlurriness>0?n:e).get(v)),v===null?y(o,l):v&&v.isColor&&(y(v,1),_=!0);const S=t.xr.getEnvironmentBlendMode();S==="additive"?i.buffers.color.setClear(0,0,0,1,s):S==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(t.autoClear||_)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),v&&(v.isCubeTexture||v.mapping===_u)?(u===void 0&&(u=new Ri(new Wo(1,1,1),new wr({name:"BackgroundCubeMaterial",uniforms:hs(ri.backgroundCube.uniforms),vertexShader:ri.backgroundCube.vertexShader,fragmentShader:ri.backgroundCube.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,T,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Or.copy(d.backgroundRotation),Or.x*=-1,Or.y*=-1,Or.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Or.y*=-1,Or.z*=-1),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(AP.makeRotationFromEuler(Or)),u.material.toneMapped=it.getTransfer(v.colorSpace)!==lt,(f!==v||h!==v.version||m!==t.toneMapping)&&(u.material.needsUpdate=!0,f=v,h=v.version,m=t.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Ri(new Su(2,2),new wr({name:"BackgroundMaterial",uniforms:hs(ri.background.uniforms),vertexShader:ri.background.vertexShader,fragmentShader:ri.background.fragmentShader,side:Mr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=it.getTransfer(v.colorSpace)!==lt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||h!==v.version||m!==t.toneMapping)&&(c.material.needsUpdate=!0,f=v,h=v.version,m=t.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function y(p,d){p.getRGB(Hl,SS(t)),i.buffers.color.setClear(Hl.r,Hl.g,Hl.b,d,s)}return{getClearColor:function(){return o},setClearColor:function(p,d=1){o.set(p),l=d,y(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,y(o,l)},render:g}}function CP(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),a=i.isWebGL2?null:e.get("OES_vertex_array_object"),s=i.isWebGL2||a!==null,o={},l=p(null);let c=l,u=!1;function f(P,$,X,K,L){let O=!1;if(s){const V=y(K,X,$);c!==V&&(c=V,m(c.object)),O=d(P,K,X,L),O&&_(P,K,X,L)}else{const V=$.wireframe===!0;(c.geometry!==K.id||c.program!==X.id||c.wireframe!==V)&&(c.geometry=K.id,c.program=X.id,c.wireframe=V,O=!0)}L!==null&&n.update(L,t.ELEMENT_ARRAY_BUFFER),(O||u)&&(u=!1,C(P,$,X,K),L!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(L).buffer))}function h(){return i.isWebGL2?t.createVertexArray():a.createVertexArrayOES()}function m(P){return i.isWebGL2?t.bindVertexArray(P):a.bindVertexArrayOES(P)}function g(P){return i.isWebGL2?t.deleteVertexArray(P):a.deleteVertexArrayOES(P)}function y(P,$,X){const K=X.wireframe===!0;let L=o[P.id];L===void 0&&(L={},o[P.id]=L);let O=L[$.id];O===void 0&&(O={},L[$.id]=O);let V=O[K];return V===void 0&&(V=p(h()),O[K]=V),V}function p(P){const $=[],X=[],K=[];for(let L=0;L<r;L++)$[L]=0,X[L]=0,K[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:$,enabledAttributes:X,attributeDivisors:K,object:P,attributes:{},index:null}}function d(P,$,X,K){const L=c.attributes,O=$.attributes;let V=0;const J=X.getAttributes();for(const oe in J)if(J[oe].location>=0){const H=L[oe];let ee=O[oe];if(ee===void 0&&(oe==="instanceMatrix"&&P.instanceMatrix&&(ee=P.instanceMatrix),oe==="instanceColor"&&P.instanceColor&&(ee=P.instanceColor)),H===void 0||H.attribute!==ee||ee&&H.data!==ee.data)return!0;V++}return c.attributesNum!==V||c.index!==K}function _(P,$,X,K){const L={},O=$.attributes;let V=0;const J=X.getAttributes();for(const oe in J)if(J[oe].location>=0){let H=O[oe];H===void 0&&(oe==="instanceMatrix"&&P.instanceMatrix&&(H=P.instanceMatrix),oe==="instanceColor"&&P.instanceColor&&(H=P.instanceColor));const ee={};ee.attribute=H,H&&H.data&&(ee.data=H.data),L[oe]=ee,V++}c.attributes=L,c.attributesNum=V,c.index=K}function v(){const P=c.newAttributes;for(let $=0,X=P.length;$<X;$++)P[$]=0}function S(P){A(P,0)}function A(P,$){const X=c.newAttributes,K=c.enabledAttributes,L=c.attributeDivisors;X[P]=1,K[P]===0&&(t.enableVertexAttribArray(P),K[P]=1),L[P]!==$&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,$),L[P]=$)}function T(){const P=c.newAttributes,$=c.enabledAttributes;for(let X=0,K=$.length;X<K;X++)$[X]!==P[X]&&(t.disableVertexAttribArray(X),$[X]=0)}function w(P,$,X,K,L,O,V){V===!0?t.vertexAttribIPointer(P,$,X,L,O):t.vertexAttribPointer(P,$,X,K,L,O)}function C(P,$,X,K){if(i.isWebGL2===!1&&(P.isInstancedMesh||K.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const L=K.attributes,O=X.getAttributes(),V=$.defaultAttributeValues;for(const J in O){const oe=O[J];if(oe.location>=0){let Ce=L[J];if(Ce===void 0&&(J==="instanceMatrix"&&P.instanceMatrix&&(Ce=P.instanceMatrix),J==="instanceColor"&&P.instanceColor&&(Ce=P.instanceColor)),Ce!==void 0){const H=Ce.normalized,ee=Ce.itemSize,fe=n.get(Ce);if(fe===void 0)continue;const Te=fe.buffer,Ee=fe.type,ve=fe.bytesPerElement,tt=i.isWebGL2===!0&&(Ee===t.INT||Ee===t.UNSIGNED_INT||Ce.gpuType===iS);if(Ce.isInterleavedBufferAttribute){const Ne=Ce.data,U=Ne.stride,Bt=Ce.offset;if(Ne.isInstancedInterleavedBuffer){for(let we=0;we<oe.locationSize;we++)A(oe.location+we,Ne.meshPerAttribute);P.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=Ne.meshPerAttribute*Ne.count)}else for(let we=0;we<oe.locationSize;we++)S(oe.location+we);t.bindBuffer(t.ARRAY_BUFFER,Te);for(let we=0;we<oe.locationSize;we++)w(oe.location+we,ee/oe.locationSize,Ee,H,U*ve,(Bt+ee/oe.locationSize*we)*ve,tt)}else{if(Ce.isInstancedBufferAttribute){for(let Ne=0;Ne<oe.locationSize;Ne++)A(oe.location+Ne,Ce.meshPerAttribute);P.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=Ce.meshPerAttribute*Ce.count)}else for(let Ne=0;Ne<oe.locationSize;Ne++)S(oe.location+Ne);t.bindBuffer(t.ARRAY_BUFFER,Te);for(let Ne=0;Ne<oe.locationSize;Ne++)w(oe.location+Ne,ee/oe.locationSize,Ee,H,ee*ve,ee/oe.locationSize*Ne*ve,tt)}}else if(V!==void 0){const H=V[J];if(H!==void 0)switch(H.length){case 2:t.vertexAttrib2fv(oe.location,H);break;case 3:t.vertexAttrib3fv(oe.location,H);break;case 4:t.vertexAttrib4fv(oe.location,H);break;default:t.vertexAttrib1fv(oe.location,H)}}}}T()}function W(){Z();for(const P in o){const $=o[P];for(const X in $){const K=$[X];for(const L in K)g(K[L].object),delete K[L];delete $[X]}delete o[P]}}function x(P){if(o[P.id]===void 0)return;const $=o[P.id];for(const X in $){const K=$[X];for(const L in K)g(K[L].object),delete K[L];delete $[X]}delete o[P.id]}function R(P){for(const $ in o){const X=o[$];if(X[P.id]===void 0)continue;const K=X[P.id];for(const L in K)g(K[L].object),delete K[L];delete X[P.id]}}function Z(){Q(),u=!0,c!==l&&(c=l,m(c.object))}function Q(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:Z,resetDefaultState:Q,dispose:W,releaseStatesOfGeometry:x,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:S,disableUnusedAttributes:T}}function PP(t,e,n,i){const r=i.isWebGL2;let a;function s(u){a=u}function o(u,f){t.drawArrays(a,u,f),n.update(f,a,1)}function l(u,f,h){if(h===0)return;let m,g;if(r)m=t,g="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](a,u,f,h),n.update(f,a,h)}function c(u,f,h){if(h===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<h;g++)this.render(u[g],f[g]);else{m.multiDrawArraysWEBGL(a,u,0,f,0,h);let g=0;for(let y=0;y<h;y++)g+=f[y];n.update(g,a,1)}}this.setMode=s,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function LP(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(w){if(w==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const s=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let o=n.precision!==void 0?n.precision:"highp";const l=a(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=s||e.has("WEBGL_draw_buffers"),u=n.logarithmicDepthBuffer===!0,f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),h=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),y=t.getParameter(t.MAX_VERTEX_ATTRIBS),p=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),d=t.getParameter(t.MAX_VARYING_VECTORS),_=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),v=h>0,S=s||e.has("OES_texture_float"),A=v&&S,T=s?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:s,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:a,precision:o,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:g,maxAttributes:y,maxVertexUniforms:p,maxVaryings:d,maxFragmentUniforms:_,vertexTextures:v,floatFragmentTextures:S,floatVertexTextures:A,maxSamples:T}}function NP(t){const e=this;let n=null,i=0,r=!1,a=!1;const s=new Br,o=new Be,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const m=f.length!==0||h||i!==0||r;return r=h,i=f.length,m},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(f,h){n=u(f,h,0)},this.setState=function(f,h,m){const g=f.clippingPlanes,y=f.clipIntersection,p=f.clipShadows,d=t.get(f);if(!r||g===null||g.length===0||a&&!p)a?u(null):c();else{const _=a?0:i,v=_*4;let S=d.clippingState||null;l.value=S,S=u(g,h,v,m);for(let A=0;A!==v;++A)S[A]=n[A];d.clippingState=S,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,m,g){const y=f!==null?f.length:0;let p=null;if(y!==0){if(p=l.value,g!==!0||p===null){const d=m+y*4,_=h.matrixWorldInverse;o.getNormalMatrix(_),(p===null||p.length<d)&&(p=new Float32Array(d));for(let v=0,S=m;v!==y;++v,S+=4)s.copy(f[v]).applyMatrix4(_,o),s.normal.toArray(p,S),p[S+3]=s.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,p}}function DP(t){let e=new WeakMap;function n(s,o){return o===hh?s.mapping=us:o===ph&&(s.mapping=fs),s}function i(s){if(s&&s.isTexture){const o=s.mapping;if(o===hh||o===ph)if(e.has(s)){const l=e.get(s).texture;return n(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new VR(l.height);return c.fromEquirectangularTexture(t,s),e.set(s,c),s.addEventListener("dispose",r),n(c.texture,s.mapping)}else return null}}return s}function r(s){const o=s.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}class TS extends ES{constructor(e=-1,n=1,i=1,r=-1,a=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=a,this.far=s,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,a,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=i-e,s=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,s=a+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(a,s,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const ja=4,Jv=[.125,.215,.35,.446,.526,.582],Wr=20,zf=new TS,Zv=new et;let Bf=null,Hf=0,Gf=0;const Hr=(1+Math.sqrt(5))/2,Ca=1/Hr,Qv=[new F(1,1,1),new F(-1,1,1),new F(1,1,-1),new F(-1,1,-1),new F(0,Hr,Ca),new F(0,Hr,-Ca),new F(Ca,0,Hr),new F(-Ca,0,Hr),new F(Hr,Ca,0),new F(-Hr,Ca,0)];class e0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Bf=this._renderer.getRenderTarget(),Hf=this._renderer.getActiveCubeFace(),Gf=this._renderer.getActiveMipmapLevel(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,r,a),n>0&&this._blur(a,0,0,n),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=i0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=n0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Bf,Hf,Gf),e.scissorTest=!1,Gl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===us||e.mapping===fs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Bf=this._renderer.getRenderTarget(),Hf=this._renderer.getActiveCubeFace(),Gf=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:cn,minFilter:cn,generateMipmaps:!1,type:Co,format:qn,colorSpace:Cr,depthBuffer:!1},r=t0(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=t0(e,n,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=IP(a)),this._blurMaterial=UP(a,e,n)}return r}_compileMaterial(e){const n=new Ri(this._lodPlanes[0],e);this._renderer.compile(n,zf)}_sceneToCubeUV(e,n,i,r){const o=new Dn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(Zv),u.toneMapping=gr,u.autoClear=!1;const m=new _S({name:"PMREM.Background",side:gn,depthWrite:!1,depthTest:!1}),g=new Ri(new Wo,m);let y=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,y=!0):(m.color.copy(Zv),y=!0);for(let d=0;d<6;d++){const _=d%3;_===0?(o.up.set(0,l[d],0),o.lookAt(c[d],0,0)):_===1?(o.up.set(0,0,l[d]),o.lookAt(0,c[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,c[d]));const v=this._cubeSize;Gl(r,_*v,d>2?v:0,v,v),u.setRenderTarget(r),y&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===us||e.mapping===fs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=i0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=n0());const a=r?this._cubemapMaterial:this._equirectMaterial,s=new Ri(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=e;const l=this._cubeSize;Gl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(s,zf)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),s=Qv[(r-1)%Qv.length];this._blur(e,r-1,r,a,s)}n.autoClear=i}_blur(e,n,i,r,a){const s=this._pingPongRenderTarget;this._halfBlur(e,s,n,i,r,"latitudinal",a),this._halfBlur(s,e,i,i,r,"longitudinal",a)}_halfBlur(e,n,i,r,a,s,o){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Ri(this._lodPlanes[r],c),h=c.uniforms,m=this._sizeLods[i]-1,g=isFinite(a)?Math.PI/(2*m):2*Math.PI/(2*Wr-1),y=a/g,p=isFinite(a)?1+Math.floor(u*y):Wr;p>Wr&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Wr}`);const d=[];let _=0;for(let w=0;w<Wr;++w){const C=w/y,W=Math.exp(-C*C/2);d.push(W),w===0?_+=W:w<p&&(_+=2*W)}for(let w=0;w<d.length;w++)d[w]=d[w]/_;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=d,h.latitudinal.value=s==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:v}=this;h.dTheta.value=g,h.mipInt.value=v-i;const S=this._sizeLods[r],A=3*S*(r>v-ja?r-v+ja:0),T=4*(this._cubeSize-S);Gl(n,A,T,3*S,2*S),l.setRenderTarget(n),l.render(f,zf)}}function IP(t){const e=[],n=[],i=[];let r=t;const a=t-ja+1+Jv.length;for(let s=0;s<a;s++){const o=Math.pow(2,r);n.push(o);let l=1/o;s>t-ja?l=Jv[s-t+ja-1]:s===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,g=6,y=3,p=2,d=1,_=new Float32Array(y*g*m),v=new Float32Array(p*g*m),S=new Float32Array(d*g*m);for(let T=0;T<m;T++){const w=T%3*2/3-1,C=T>2?0:-1,W=[w,C,0,w+2/3,C,0,w+2/3,C+1,0,w,C,0,w+2/3,C+1,0,w,C+1,0];_.set(W,y*g*T),v.set(h,p*g*T);const x=[T,T,T,T,T,T];S.set(x,d*g*T)}const A=new di;A.setAttribute("position",new kn(_,y)),A.setAttribute("uv",new kn(v,p)),A.setAttribute("faceIndex",new kn(S,d)),e.push(A),r>ja&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function t0(t,e,n){const i=new ua(t,e,n);return i.texture.mapping=_u,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Gl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function UP(t,e,n){const i=new Float32Array(Wr),r=new F(0,1,0);return new wr({name:"SphericalGaussianBlur",defines:{n:Wr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Hp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:mr,depthTest:!1,depthWrite:!1})}function n0(){return new wr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Hp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:mr,depthTest:!1,depthWrite:!1})}function i0(){return new wr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mr,depthTest:!1,depthWrite:!1})}function Hp(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function OP(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===hh||l===ph,u=l===us||l===fs;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=e.get(o);return n===null&&(n=new e0(t)),f=c?n.fromEquirectangular(o,f):n.fromCubemap(o,f),e.set(o,f),f.texture}else{if(e.has(o))return e.get(o).texture;{const f=o.image;if(c&&f&&f.height>0||u&&f&&r(f)){n===null&&(n=new e0(t));const h=c?n.fromEquirectangular(o):n.fromCubemap(o);return e.set(o,h),o.addEventListener("dispose",a),h.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function a(o){const l=o.target;l.removeEventListener("dispose",a);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:s}}function kP(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function FP(t,e,n,i){const r={},a=new WeakMap;function s(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);for(const g in h.morphAttributes){const y=h.morphAttributes[g];for(let p=0,d=y.length;p<d;p++)e.remove(y[p])}h.removeEventListener("dispose",s),delete r[h.id];const m=a.get(h);m&&(e.remove(m),a.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function o(f,h){return r[h.id]===!0||(h.addEventListener("dispose",s),r[h.id]=!0,n.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)e.update(h[g],t.ARRAY_BUFFER);const m=f.morphAttributes;for(const g in m){const y=m[g];for(let p=0,d=y.length;p<d;p++)e.update(y[p],t.ARRAY_BUFFER)}}function c(f){const h=[],m=f.index,g=f.attributes.position;let y=0;if(m!==null){const _=m.array;y=m.version;for(let v=0,S=_.length;v<S;v+=3){const A=_[v+0],T=_[v+1],w=_[v+2];h.push(A,T,T,w,w,A)}}else if(g!==void 0){const _=g.array;y=g.version;for(let v=0,S=_.length/3-1;v<S;v+=3){const A=v+0,T=v+1,w=v+2;h.push(A,T,T,w,w,A)}}else return;const p=new(fS(h)?xS:yS)(h,1);p.version=y;const d=a.get(f);d&&e.remove(d),a.set(f,p)}function u(f){const h=a.get(f);if(h){const m=f.index;m!==null&&h.version<m.version&&c(f)}else c(f);return a.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function zP(t,e,n,i){const r=i.isWebGL2;let a;function s(m){a=m}let o,l;function c(m){o=m.type,l=m.bytesPerElement}function u(m,g){t.drawElements(a,g,o,m*l),n.update(g,a,1)}function f(m,g,y){if(y===0)return;let p,d;if(r)p=t,d="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[d](a,g,o,m*l,y),n.update(g,a,y)}function h(m,g,y){if(y===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<y;d++)this.render(m[d]/l,g[d]);else{p.multiDrawElementsWEBGL(a,g,0,o,m,0,y);let d=0;for(let _=0;_<y;_++)d+=g[_];n.update(d,a,1)}}this.setMode=s,this.setIndex=c,this.render=u,this.renderInstances=f,this.renderMultiDraw=h}function BP(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,s,o){switch(n.calls++,s){case t.TRIANGLES:n.triangles+=o*(a/3);break;case t.LINES:n.lines+=o*(a/2);break;case t.LINE_STRIP:n.lines+=o*(a-1);break;case t.LINE_LOOP:n.lines+=o*a;break;case t.POINTS:n.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function HP(t,e){return t[0]-e[0]}function GP(t,e){return Math.abs(e[1])-Math.abs(t[1])}function VP(t,e,n){const i={},r=new Float32Array(8),a=new WeakMap,s=new Ft,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,f){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,y=g!==void 0?g.length:0;let p=a.get(u);if(p===void 0||p.count!==y){let Q=function(){R.dispose(),a.delete(u),u.removeEventListener("dispose",Q)};var m=Q;p!==void 0&&p.texture.dispose();const d=u.morphAttributes.position!==void 0,_=u.morphAttributes.normal!==void 0,v=u.morphAttributes.color!==void 0,S=u.morphAttributes.position||[],A=u.morphAttributes.normal||[],T=u.morphAttributes.color||[];let w=0;d===!0&&(w=1),_===!0&&(w=2),v===!0&&(w=3);let C=u.attributes.position.count*w,W=1;C>e.maxTextureSize&&(W=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const x=new Float32Array(C*W*4*y),R=new pS(x,C,W,y);R.type=wi,R.needsUpdate=!0;const Z=w*4;for(let P=0;P<y;P++){const $=S[P],X=A[P],K=T[P],L=C*W*4*P;for(let O=0;O<$.count;O++){const V=O*Z;d===!0&&(s.fromBufferAttribute($,O),x[L+V+0]=s.x,x[L+V+1]=s.y,x[L+V+2]=s.z,x[L+V+3]=0),_===!0&&(s.fromBufferAttribute(X,O),x[L+V+4]=s.x,x[L+V+5]=s.y,x[L+V+6]=s.z,x[L+V+7]=0),v===!0&&(s.fromBufferAttribute(K,O),x[L+V+8]=s.x,x[L+V+9]=s.y,x[L+V+10]=s.z,x[L+V+11]=K.itemSize===4?s.w:1)}}p={count:y,texture:R,size:new Qe(C,W)},a.set(u,p),u.addEventListener("dispose",Q)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)f.getUniforms().setValue(t,"morphTexture",c.morphTexture,n);else{let d=0;for(let v=0;v<h.length;v++)d+=h[v];const _=u.morphTargetsRelative?1:1-d;f.getUniforms().setValue(t,"morphTargetBaseInfluence",_),f.getUniforms().setValue(t,"morphTargetInfluences",h)}f.getUniforms().setValue(t,"morphTargetsTexture",p.texture,n),f.getUniforms().setValue(t,"morphTargetsTextureSize",p.size)}else{const g=h===void 0?0:h.length;let y=i[u.id];if(y===void 0||y.length!==g){y=[];for(let S=0;S<g;S++)y[S]=[S,0];i[u.id]=y}for(let S=0;S<g;S++){const A=y[S];A[0]=S,A[1]=h[S]}y.sort(GP);for(let S=0;S<8;S++)S<g&&y[S][1]?(o[S][0]=y[S][0],o[S][1]=y[S][1]):(o[S][0]=Number.MAX_SAFE_INTEGER,o[S][1]=0);o.sort(HP);const p=u.morphAttributes.position,d=u.morphAttributes.normal;let _=0;for(let S=0;S<8;S++){const A=o[S],T=A[0],w=A[1];T!==Number.MAX_SAFE_INTEGER&&w?(p&&u.getAttribute("morphTarget"+S)!==p[T]&&u.setAttribute("morphTarget"+S,p[T]),d&&u.getAttribute("morphNormal"+S)!==d[T]&&u.setAttribute("morphNormal"+S,d[T]),r[S]=w,_+=w):(p&&u.hasAttribute("morphTarget"+S)===!0&&u.deleteAttribute("morphTarget"+S),d&&u.hasAttribute("morphNormal"+S)===!0&&u.deleteAttribute("morphNormal"+S),r[S]=0)}const v=u.morphTargetsRelative?1:1-_;f.getUniforms().setValue(t,"morphTargetBaseInfluence",v),f.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function WP(t,e,n,i){let r=new WeakMap;function a(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function s(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:a,dispose:s}}class bS extends an{constructor(e,n,i,r,a,s,o,l,c,u){if(u=u!==void 0?u:ta,u!==ta&&u!==ds)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===ta&&(i=sr),i===void 0&&u===ds&&(i=ea),super(null,r,a,s,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=o!==void 0?o:nn,this.minFilter=l!==void 0?l:nn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const AS=new an,RS=new bS(1,1);RS.compareFunction=uS;const CS=new pS,PS=new bR,LS=new MS,r0=[],a0=[],s0=new Float32Array(16),o0=new Float32Array(9),l0=new Float32Array(4);function ws(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let a=r0[r];if(a===void 0&&(a=new Float32Array(r),r0[r]=a),e!==0){i.toArray(a,0);for(let s=1,o=0;s!==e;++s)o+=n,t[s].toArray(a,o)}return a}function Dt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function It(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Eu(t,e){let n=a0[e];n===void 0&&(n=new Int32Array(e),a0[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function jP(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function XP(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Dt(n,e))return;t.uniform2fv(this.addr,e),It(n,e)}}function $P(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Dt(n,e))return;t.uniform3fv(this.addr,e),It(n,e)}}function YP(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Dt(n,e))return;t.uniform4fv(this.addr,e),It(n,e)}}function qP(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Dt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),It(n,e)}else{if(Dt(n,i))return;l0.set(i),t.uniformMatrix2fv(this.addr,!1,l0),It(n,i)}}function KP(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Dt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),It(n,e)}else{if(Dt(n,i))return;o0.set(i),t.uniformMatrix3fv(this.addr,!1,o0),It(n,i)}}function JP(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Dt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),It(n,e)}else{if(Dt(n,i))return;s0.set(i),t.uniformMatrix4fv(this.addr,!1,s0),It(n,i)}}function ZP(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function QP(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Dt(n,e))return;t.uniform2iv(this.addr,e),It(n,e)}}function eL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Dt(n,e))return;t.uniform3iv(this.addr,e),It(n,e)}}function tL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Dt(n,e))return;t.uniform4iv(this.addr,e),It(n,e)}}function nL(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function iL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Dt(n,e))return;t.uniform2uiv(this.addr,e),It(n,e)}}function rL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Dt(n,e))return;t.uniform3uiv(this.addr,e),It(n,e)}}function aL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Dt(n,e))return;t.uniform4uiv(this.addr,e),It(n,e)}}function sL(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const a=this.type===t.SAMPLER_2D_SHADOW?RS:AS;n.setTexture2D(e||a,r)}function oL(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||PS,r)}function lL(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||LS,r)}function cL(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||CS,r)}function uL(t){switch(t){case 5126:return jP;case 35664:return XP;case 35665:return $P;case 35666:return YP;case 35674:return qP;case 35675:return KP;case 35676:return JP;case 5124:case 35670:return ZP;case 35667:case 35671:return QP;case 35668:case 35672:return eL;case 35669:case 35673:return tL;case 5125:return nL;case 36294:return iL;case 36295:return rL;case 36296:return aL;case 35678:case 36198:case 36298:case 36306:case 35682:return sL;case 35679:case 36299:case 36307:return oL;case 35680:case 36300:case 36308:case 36293:return lL;case 36289:case 36303:case 36311:case 36292:return cL}}function fL(t,e){t.uniform1fv(this.addr,e)}function dL(t,e){const n=ws(e,this.size,2);t.uniform2fv(this.addr,n)}function hL(t,e){const n=ws(e,this.size,3);t.uniform3fv(this.addr,n)}function pL(t,e){const n=ws(e,this.size,4);t.uniform4fv(this.addr,n)}function mL(t,e){const n=ws(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function gL(t,e){const n=ws(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function vL(t,e){const n=ws(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function _L(t,e){t.uniform1iv(this.addr,e)}function yL(t,e){t.uniform2iv(this.addr,e)}function xL(t,e){t.uniform3iv(this.addr,e)}function SL(t,e){t.uniform4iv(this.addr,e)}function EL(t,e){t.uniform1uiv(this.addr,e)}function ML(t,e){t.uniform2uiv(this.addr,e)}function wL(t,e){t.uniform3uiv(this.addr,e)}function TL(t,e){t.uniform4uiv(this.addr,e)}function bL(t,e,n){const i=this.cache,r=e.length,a=Eu(n,r);Dt(i,a)||(t.uniform1iv(this.addr,a),It(i,a));for(let s=0;s!==r;++s)n.setTexture2D(e[s]||AS,a[s])}function AL(t,e,n){const i=this.cache,r=e.length,a=Eu(n,r);Dt(i,a)||(t.uniform1iv(this.addr,a),It(i,a));for(let s=0;s!==r;++s)n.setTexture3D(e[s]||PS,a[s])}function RL(t,e,n){const i=this.cache,r=e.length,a=Eu(n,r);Dt(i,a)||(t.uniform1iv(this.addr,a),It(i,a));for(let s=0;s!==r;++s)n.setTextureCube(e[s]||LS,a[s])}function CL(t,e,n){const i=this.cache,r=e.length,a=Eu(n,r);Dt(i,a)||(t.uniform1iv(this.addr,a),It(i,a));for(let s=0;s!==r;++s)n.setTexture2DArray(e[s]||CS,a[s])}function PL(t){switch(t){case 5126:return fL;case 35664:return dL;case 35665:return hL;case 35666:return pL;case 35674:return mL;case 35675:return gL;case 35676:return vL;case 5124:case 35670:return _L;case 35667:case 35671:return yL;case 35668:case 35672:return xL;case 35669:case 35673:return SL;case 5125:return EL;case 36294:return ML;case 36295:return wL;case 36296:return TL;case 35678:case 36198:case 36298:case 36306:case 35682:return bL;case 35679:case 36299:case 36307:return AL;case 35680:case 36300:case 36308:case 36293:return RL;case 36289:case 36303:case 36311:case 36292:return CL}}class LL{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=uL(n.type)}}class NL{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=PL(n.type)}}class DL{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let a=0,s=r.length;a!==s;++a){const o=r[a];o.setValue(e,n[o.id],i)}}}const Vf=/(\w+)(\])?(\[|\.)?/g;function c0(t,e){t.seq.push(e),t.map[e.id]=e}function IL(t,e,n){const i=t.name,r=i.length;for(Vf.lastIndex=0;;){const a=Vf.exec(i),s=Vf.lastIndex;let o=a[1];const l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===r){c0(n,c===void 0?new LL(o,t,e):new NL(o,t,e));break}else{let f=n.map[o];f===void 0&&(f=new DL(o),c0(n,f)),n=f}}}class oc{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const a=e.getActiveUniform(n,r),s=e.getUniformLocation(n,a.name);IL(a,s,this)}}setValue(e,n,i,r){const a=this.map[n];a!==void 0&&a.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let a=0,s=n.length;a!==s;++a){const o=n[a],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,a=e.length;r!==a;++r){const s=e[r];s.id in n&&i.push(s)}return i}}function u0(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const UL=37297;let OL=0;function kL(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),a=Math.min(e+6,n.length);for(let s=r;s<a;s++){const o=s+1;i.push(`${o===e?">":" "} ${o}: ${n[s]}`)}return i.join(`
`)}function FL(t){const e=it.getPrimaries(it.workingColorSpace),n=it.getPrimaries(t);let i;switch(e===n?i="":e===Wc&&n===Vc?i="LinearDisplayP3ToLinearSRGB":e===Vc&&n===Wc&&(i="LinearSRGBToLinearDisplayP3"),t){case Cr:case yu:return[i,"LinearTransferOETF"];case ii:case zp:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function f0(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const s=parseInt(a[1]);return n.toUpperCase()+`

`+r+`

`+kL(t.getShaderSource(e),s)}else return r}function zL(t,e){const n=FL(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function BL(t,e){let n;switch(e){case $A:n="Linear";break;case YA:n="Reinhard";break;case qA:n="OptimizedCineon";break;case KA:n="ACESFilmic";break;case ZA:n="AgX";break;case QA:n="Neutral";break;case JA:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function HL(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.alphaToCoverage||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Xa).join(`
`)}function GL(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xa).join(`
`)}function VL(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function WL(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const a=t.getActiveAttrib(e,r),s=a.name;let o=1;a.type===t.FLOAT_MAT2&&(o=2),a.type===t.FLOAT_MAT3&&(o=3),a.type===t.FLOAT_MAT4&&(o=4),n[s]={type:a.type,location:t.getAttribLocation(e,s),locationSize:o}}return n}function Xa(t){return t!==""}function d0(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function h0(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const jL=/^[ \t]*#include +<([\w\d./]+)>/gm;function xh(t){return t.replace(jL,$L)}const XL=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function $L(t,e){let n=ze[e];if(n===void 0){const i=XL.get(e);if(i!==void 0)n=ze[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return xh(n)}const YL=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function p0(t){return t.replace(YL,qL)}function qL(t,e,n,i){let r="";for(let a=parseInt(e);a<parseInt(n);a++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function m0(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	`;return t.isWebGL2&&(e+=`precision ${t.precision} sampler3D;
		precision ${t.precision} sampler2DArray;
		precision ${t.precision} sampler2DShadow;
		precision ${t.precision} samplerCubeShadow;
		precision ${t.precision} sampler2DArrayShadow;
		precision ${t.precision} isampler2D;
		precision ${t.precision} isampler3D;
		precision ${t.precision} isamplerCube;
		precision ${t.precision} isampler2DArray;
		precision ${t.precision} usampler2D;
		precision ${t.precision} usampler3D;
		precision ${t.precision} usamplerCube;
		precision ${t.precision} usampler2DArray;
		`),t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function KL(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===eS?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===SA?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===xi&&(e="SHADOWMAP_TYPE_VSM"),e}function JL(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case us:case fs:e="ENVMAP_TYPE_CUBE";break;case _u:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ZL(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case fs:e="ENVMAP_MODE_REFRACTION";break}return e}function QL(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case tS:e="ENVMAP_BLENDING_MULTIPLY";break;case jA:e="ENVMAP_BLENDING_MIX";break;case XA:e="ENVMAP_BLENDING_ADD";break}return e}function eN(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function tN(t,e,n,i){const r=t.getContext(),a=n.defines;let s=n.vertexShader,o=n.fragmentShader;const l=KL(n),c=JL(n),u=ZL(n),f=QL(n),h=eN(n),m=n.isWebGL2?"":HL(n),g=GL(n),y=VL(a),p=r.createProgram();let d,_,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(Xa).join(`
`),d.length>0&&(d+=`
`),_=[m,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(Xa).join(`
`),_.length>0&&(_+=`
`)):(d=[m0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xa).join(`
`),_=[m,m0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==gr?"#define TONE_MAPPING":"",n.toneMapping!==gr?ze.tonemapping_pars_fragment:"",n.toneMapping!==gr?BL("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,zL("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Xa).join(`
`)),s=xh(s),s=d0(s,n),s=h0(s,n),o=xh(o),o=d0(o,n),o=h0(o,n),s=p0(s),o=p0(o),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,d=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,_=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===Lv?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Lv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const S=v+d+s,A=v+_+o,T=u0(r,r.VERTEX_SHADER,S),w=u0(r,r.FRAGMENT_SHADER,A);r.attachShader(p,T),r.attachShader(p,w),n.index0AttributeName!==void 0?r.bindAttribLocation(p,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function C(Z){if(t.debug.checkShaderErrors){const Q=r.getProgramInfoLog(p).trim(),P=r.getShaderInfoLog(T).trim(),$=r.getShaderInfoLog(w).trim();let X=!0,K=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(X=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,p,T,w);else{const L=f0(r,T,"vertex"),O=f0(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Material Name: `+Z.name+`
Material Type: `+Z.type+`

Program Info Log: `+Q+`
`+L+`
`+O)}else Q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Q):(P===""||$==="")&&(K=!1);K&&(Z.diagnostics={runnable:X,programLog:Q,vertexShader:{log:P,prefix:d},fragmentShader:{log:$,prefix:_}})}r.deleteShader(T),r.deleteShader(w),W=new oc(r,p),x=WL(r,p)}let W;this.getUniforms=function(){return W===void 0&&C(this),W};let x;this.getAttributes=function(){return x===void 0&&C(this),x};let R=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=r.getProgramParameter(p,UL)),R},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=OL++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=T,this.fragmentShader=w,this}let nN=0;class iN{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),a=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(a)===!1&&(s.add(a),a.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new rN(e),n.set(e,i)),i}}class rN{constructor(e){this.id=nN++,this.code=e,this.usedTimes=0}}function aN(t,e,n,i,r,a,s){const o=new gS,l=new iN,c=new Set,u=[],f=r.isWebGL2,h=r.logarithmicDepthBuffer,m=r.vertexTextures;let g=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x){return c.add(x),x===0?"uv":`uv${x}`}function d(x,R,Z,Q,P){const $=Q.fog,X=P.geometry,K=x.isMeshStandardMaterial?Q.environment:null,L=(x.isMeshStandardMaterial?n:e).get(x.envMap||K),O=L&&L.mapping===_u?L.image.height:null,V=y[x.type];x.precision!==null&&(g=r.getMaxPrecision(x.precision),g!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",g,"instead."));const J=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,oe=J!==void 0?J.length:0;let Ce=0;X.morphAttributes.position!==void 0&&(Ce=1),X.morphAttributes.normal!==void 0&&(Ce=2),X.morphAttributes.color!==void 0&&(Ce=3);let H,ee,fe,Te;if(V){const rt=ri[V];H=rt.vertexShader,ee=rt.fragmentShader}else H=x.vertexShader,ee=x.fragmentShader,l.update(x),fe=l.getVertexShaderID(x),Te=l.getFragmentShaderID(x);const Ee=t.getRenderTarget(),ve=P.isInstancedMesh===!0,tt=P.isBatchedMesh===!0,Ne=!!x.map,U=!!x.matcap,Bt=!!L,we=!!x.aoMap,Ve=!!x.lightMap,Ae=!!x.bumpMap,qe=!!x.normalMap,He=!!x.displacementMap,We=!!x.emissiveMap,Et=!!x.metalnessMap,b=!!x.roughnessMap,E=x.anisotropy>0,j=x.clearcoat>0,q=x.iridescence>0,ie=x.sheen>0,te=x.transmission>0,Oe=E&&!!x.anisotropyMap,Re=j&&!!x.clearcoatMap,ce=j&&!!x.clearcoatNormalMap,de=j&&!!x.clearcoatRoughnessMap,ke=q&&!!x.iridescenceMap,re=q&&!!x.iridescenceThicknessMap,bt=ie&&!!x.sheenColorMap,je=ie&&!!x.sheenRoughnessMap,Me=!!x.specularMap,ye=!!x.specularColorMap,xe=!!x.specularIntensityMap,Ke=te&&!!x.transmissionMap,Ie=te&&!!x.thicknessMap,dt=!!x.gradientMap,N=!!x.alphaMap,ue=x.alphaTest>0,z=!!x.alphaHash,ae=!!x.extensions;let he=gr;x.toneMapped&&(Ee===null||Ee.isXRRenderTarget===!0)&&(he=t.toneMapping);const $e={isWebGL2:f,shaderID:V,shaderType:x.type,shaderName:x.name,vertexShader:H,fragmentShader:ee,defines:x.defines,customVertexShaderID:fe,customFragmentShaderID:Te,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:g,batching:tt,instancing:ve,instancingColor:ve&&P.instanceColor!==null,instancingMorph:ve&&P.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:Ee===null?t.outputColorSpace:Ee.isXRRenderTarget===!0?Ee.texture.colorSpace:Cr,alphaToCoverage:!!x.alphaToCoverage,map:Ne,matcap:U,envMap:Bt,envMapMode:Bt&&L.mapping,envMapCubeUVHeight:O,aoMap:we,lightMap:Ve,bumpMap:Ae,normalMap:qe,displacementMap:m&&He,emissiveMap:We,normalMapObjectSpace:qe&&x.normalMapType===fR,normalMapTangentSpace:qe&&x.normalMapType===uR,metalnessMap:Et,roughnessMap:b,anisotropy:E,anisotropyMap:Oe,clearcoat:j,clearcoatMap:Re,clearcoatNormalMap:ce,clearcoatRoughnessMap:de,iridescence:q,iridescenceMap:ke,iridescenceThicknessMap:re,sheen:ie,sheenColorMap:bt,sheenRoughnessMap:je,specularMap:Me,specularColorMap:ye,specularIntensityMap:xe,transmission:te,transmissionMap:Ke,thicknessMap:Ie,gradientMap:dt,opaque:x.transparent===!1&&x.blending===es&&x.alphaToCoverage===!1,alphaMap:N,alphaTest:ue,alphaHash:z,combine:x.combine,mapUv:Ne&&p(x.map.channel),aoMapUv:we&&p(x.aoMap.channel),lightMapUv:Ve&&p(x.lightMap.channel),bumpMapUv:Ae&&p(x.bumpMap.channel),normalMapUv:qe&&p(x.normalMap.channel),displacementMapUv:He&&p(x.displacementMap.channel),emissiveMapUv:We&&p(x.emissiveMap.channel),metalnessMapUv:Et&&p(x.metalnessMap.channel),roughnessMapUv:b&&p(x.roughnessMap.channel),anisotropyMapUv:Oe&&p(x.anisotropyMap.channel),clearcoatMapUv:Re&&p(x.clearcoatMap.channel),clearcoatNormalMapUv:ce&&p(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:de&&p(x.clearcoatRoughnessMap.channel),iridescenceMapUv:ke&&p(x.iridescenceMap.channel),iridescenceThicknessMapUv:re&&p(x.iridescenceThicknessMap.channel),sheenColorMapUv:bt&&p(x.sheenColorMap.channel),sheenRoughnessMapUv:je&&p(x.sheenRoughnessMap.channel),specularMapUv:Me&&p(x.specularMap.channel),specularColorMapUv:ye&&p(x.specularColorMap.channel),specularIntensityMapUv:xe&&p(x.specularIntensityMap.channel),transmissionMapUv:Ke&&p(x.transmissionMap.channel),thicknessMapUv:Ie&&p(x.thicknessMap.channel),alphaMapUv:N&&p(x.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(qe||E),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!X.attributes.uv&&(Ne||N),fog:!!$,useFog:x.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:P.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:Ce,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&Z.length>0,shadowMapType:t.shadowMap.type,toneMapping:he,useLegacyLights:t._useLegacyLights,decodeVideoTexture:Ne&&x.map.isVideoTexture===!0&&it.getTransfer(x.map.colorSpace)===lt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Mi,flipSided:x.side===gn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:ae&&x.extensions.derivatives===!0,extensionFragDepth:ae&&x.extensions.fragDepth===!0,extensionDrawBuffers:ae&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:ae&&x.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ae&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:ae&&x.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionFragDepth:f||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return $e.vertexUv1s=c.has(1),$e.vertexUv2s=c.has(2),$e.vertexUv3s=c.has(3),c.clear(),$e}function _(x){const R=[];if(x.shaderID?R.push(x.shaderID):(R.push(x.customVertexShaderID),R.push(x.customFragmentShaderID)),x.defines!==void 0)for(const Z in x.defines)R.push(Z),R.push(x.defines[Z]);return x.isRawShaderMaterial===!1&&(v(R,x),S(R,x),R.push(t.outputColorSpace)),R.push(x.customProgramCacheKey),R.join()}function v(x,R){x.push(R.precision),x.push(R.outputColorSpace),x.push(R.envMapMode),x.push(R.envMapCubeUVHeight),x.push(R.mapUv),x.push(R.alphaMapUv),x.push(R.lightMapUv),x.push(R.aoMapUv),x.push(R.bumpMapUv),x.push(R.normalMapUv),x.push(R.displacementMapUv),x.push(R.emissiveMapUv),x.push(R.metalnessMapUv),x.push(R.roughnessMapUv),x.push(R.anisotropyMapUv),x.push(R.clearcoatMapUv),x.push(R.clearcoatNormalMapUv),x.push(R.clearcoatRoughnessMapUv),x.push(R.iridescenceMapUv),x.push(R.iridescenceThicknessMapUv),x.push(R.sheenColorMapUv),x.push(R.sheenRoughnessMapUv),x.push(R.specularMapUv),x.push(R.specularColorMapUv),x.push(R.specularIntensityMapUv),x.push(R.transmissionMapUv),x.push(R.thicknessMapUv),x.push(R.combine),x.push(R.fogExp2),x.push(R.sizeAttenuation),x.push(R.morphTargetsCount),x.push(R.morphAttributeCount),x.push(R.numDirLights),x.push(R.numPointLights),x.push(R.numSpotLights),x.push(R.numSpotLightMaps),x.push(R.numHemiLights),x.push(R.numRectAreaLights),x.push(R.numDirLightShadows),x.push(R.numPointLightShadows),x.push(R.numSpotLightShadows),x.push(R.numSpotLightShadowsWithMaps),x.push(R.numLightProbes),x.push(R.shadowMapType),x.push(R.toneMapping),x.push(R.numClippingPlanes),x.push(R.numClipIntersection),x.push(R.depthPacking)}function S(x,R){o.disableAll(),R.isWebGL2&&o.enable(0),R.supportsVertexTextures&&o.enable(1),R.instancing&&o.enable(2),R.instancingColor&&o.enable(3),R.instancingMorph&&o.enable(4),R.matcap&&o.enable(5),R.envMap&&o.enable(6),R.normalMapObjectSpace&&o.enable(7),R.normalMapTangentSpace&&o.enable(8),R.clearcoat&&o.enable(9),R.iridescence&&o.enable(10),R.alphaTest&&o.enable(11),R.vertexColors&&o.enable(12),R.vertexAlphas&&o.enable(13),R.vertexUv1s&&o.enable(14),R.vertexUv2s&&o.enable(15),R.vertexUv3s&&o.enable(16),R.vertexTangents&&o.enable(17),R.anisotropy&&o.enable(18),R.alphaHash&&o.enable(19),R.batching&&o.enable(20),x.push(o.mask),o.disableAll(),R.fog&&o.enable(0),R.useFog&&o.enable(1),R.flatShading&&o.enable(2),R.logarithmicDepthBuffer&&o.enable(3),R.skinning&&o.enable(4),R.morphTargets&&o.enable(5),R.morphNormals&&o.enable(6),R.morphColors&&o.enable(7),R.premultipliedAlpha&&o.enable(8),R.shadowMapEnabled&&o.enable(9),R.useLegacyLights&&o.enable(10),R.doubleSided&&o.enable(11),R.flipSided&&o.enable(12),R.useDepthPacking&&o.enable(13),R.dithering&&o.enable(14),R.transmission&&o.enable(15),R.sheen&&o.enable(16),R.opaque&&o.enable(17),R.pointsUvs&&o.enable(18),R.decodeVideoTexture&&o.enable(19),R.alphaToCoverage&&o.enable(20),x.push(o.mask)}function A(x){const R=y[x.type];let Z;if(R){const Q=ri[R];Z=zR.clone(Q.uniforms)}else Z=x.uniforms;return Z}function T(x,R){let Z;for(let Q=0,P=u.length;Q<P;Q++){const $=u[Q];if($.cacheKey===R){Z=$,++Z.usedTimes;break}}return Z===void 0&&(Z=new tN(t,R,x,a),u.push(Z)),Z}function w(x){if(--x.usedTimes===0){const R=u.indexOf(x);u[R]=u[u.length-1],u.pop(),x.destroy()}}function C(x){l.remove(x)}function W(){l.dispose()}return{getParameters:d,getProgramCacheKey:_,getUniforms:A,acquireProgram:T,releaseProgram:w,releaseShaderCache:C,programs:u,dispose:W}}function sN(){let t=new WeakMap;function e(a){let s=t.get(a);return s===void 0&&(s={},t.set(a,s)),s}function n(a){t.delete(a)}function i(a,s,o){t.get(a)[s]=o}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function oN(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function g0(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function v0(){const t=[];let e=0;const n=[],i=[],r=[];function a(){e=0,n.length=0,i.length=0,r.length=0}function s(f,h,m,g,y,p){let d=t[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:m,groupOrder:g,renderOrder:f.renderOrder,z:y,group:p},t[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=m,d.groupOrder=g,d.renderOrder=f.renderOrder,d.z=y,d.group=p),e++,d}function o(f,h,m,g,y,p){const d=s(f,h,m,g,y,p);m.transmission>0?i.push(d):m.transparent===!0?r.push(d):n.push(d)}function l(f,h,m,g,y,p){const d=s(f,h,m,g,y,p);m.transmission>0?i.unshift(d):m.transparent===!0?r.unshift(d):n.unshift(d)}function c(f,h){n.length>1&&n.sort(f||oN),i.length>1&&i.sort(h||g0),r.length>1&&r.sort(h||g0)}function u(){for(let f=e,h=t.length;f<h;f++){const m=t[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:a,push:o,unshift:l,finish:u,sort:c}}function lN(){let t=new WeakMap;function e(i,r){const a=t.get(i);let s;return a===void 0?(s=new v0,t.set(i,[s])):r>=a.length?(s=new v0,a.push(s)):s=a[r],s}function n(){t=new WeakMap}return{get:e,dispose:n}}function cN(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new F,color:new et};break;case"SpotLight":n={position:new F,direction:new F,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new F,color:new et,distance:0,decay:0};break;case"HemisphereLight":n={direction:new F,skyColor:new et,groundColor:new et};break;case"RectAreaLight":n={color:new et,position:new F,halfWidth:new F,halfHeight:new F};break}return t[e.id]=n,n}}}function uN(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let fN=0;function dN(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function hN(t,e){const n=new cN,i=uN(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new F);const a=new F,s=new St,o=new St;function l(u,f){let h=0,m=0,g=0;for(let Z=0;Z<9;Z++)r.probe[Z].set(0,0,0);let y=0,p=0,d=0,_=0,v=0,S=0,A=0,T=0,w=0,C=0,W=0;u.sort(dN);const x=f===!0?Math.PI:1;for(let Z=0,Q=u.length;Z<Q;Z++){const P=u[Z],$=P.color,X=P.intensity,K=P.distance,L=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=$.r*X*x,m+=$.g*X*x,g+=$.b*X*x;else if(P.isLightProbe){for(let O=0;O<9;O++)r.probe[O].addScaledVector(P.sh.coefficients[O],X);W++}else if(P.isDirectionalLight){const O=n.get(P);if(O.color.copy(P.color).multiplyScalar(P.intensity*x),P.castShadow){const V=P.shadow,J=i.get(P);J.shadowBias=V.bias,J.shadowNormalBias=V.normalBias,J.shadowRadius=V.radius,J.shadowMapSize=V.mapSize,r.directionalShadow[y]=J,r.directionalShadowMap[y]=L,r.directionalShadowMatrix[y]=P.shadow.matrix,S++}r.directional[y]=O,y++}else if(P.isSpotLight){const O=n.get(P);O.position.setFromMatrixPosition(P.matrixWorld),O.color.copy($).multiplyScalar(X*x),O.distance=K,O.coneCos=Math.cos(P.angle),O.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),O.decay=P.decay,r.spot[d]=O;const V=P.shadow;if(P.map&&(r.spotLightMap[w]=P.map,w++,V.updateMatrices(P),P.castShadow&&C++),r.spotLightMatrix[d]=V.matrix,P.castShadow){const J=i.get(P);J.shadowBias=V.bias,J.shadowNormalBias=V.normalBias,J.shadowRadius=V.radius,J.shadowMapSize=V.mapSize,r.spotShadow[d]=J,r.spotShadowMap[d]=L,T++}d++}else if(P.isRectAreaLight){const O=n.get(P);O.color.copy($).multiplyScalar(X),O.halfWidth.set(P.width*.5,0,0),O.halfHeight.set(0,P.height*.5,0),r.rectArea[_]=O,_++}else if(P.isPointLight){const O=n.get(P);if(O.color.copy(P.color).multiplyScalar(P.intensity*x),O.distance=P.distance,O.decay=P.decay,P.castShadow){const V=P.shadow,J=i.get(P);J.shadowBias=V.bias,J.shadowNormalBias=V.normalBias,J.shadowRadius=V.radius,J.shadowMapSize=V.mapSize,J.shadowCameraNear=V.camera.near,J.shadowCameraFar=V.camera.far,r.pointShadow[p]=J,r.pointShadowMap[p]=L,r.pointShadowMatrix[p]=P.shadow.matrix,A++}r.point[p]=O,p++}else if(P.isHemisphereLight){const O=n.get(P);O.skyColor.copy(P.color).multiplyScalar(X*x),O.groundColor.copy(P.groundColor).multiplyScalar(X*x),r.hemi[v]=O,v++}}_>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=le.LTC_FLOAT_1,r.rectAreaLTC2=le.LTC_FLOAT_2):(r.rectAreaLTC1=le.LTC_HALF_1,r.rectAreaLTC2=le.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=le.LTC_FLOAT_1,r.rectAreaLTC2=le.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=le.LTC_HALF_1,r.rectAreaLTC2=le.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=m,r.ambient[2]=g;const R=r.hash;(R.directionalLength!==y||R.pointLength!==p||R.spotLength!==d||R.rectAreaLength!==_||R.hemiLength!==v||R.numDirectionalShadows!==S||R.numPointShadows!==A||R.numSpotShadows!==T||R.numSpotMaps!==w||R.numLightProbes!==W)&&(r.directional.length=y,r.spot.length=d,r.rectArea.length=_,r.point.length=p,r.hemi.length=v,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.pointShadow.length=A,r.pointShadowMap.length=A,r.spotShadow.length=T,r.spotShadowMap.length=T,r.directionalShadowMatrix.length=S,r.pointShadowMatrix.length=A,r.spotLightMatrix.length=T+w-C,r.spotLightMap.length=w,r.numSpotLightShadowsWithMaps=C,r.numLightProbes=W,R.directionalLength=y,R.pointLength=p,R.spotLength=d,R.rectAreaLength=_,R.hemiLength=v,R.numDirectionalShadows=S,R.numPointShadows=A,R.numSpotShadows=T,R.numSpotMaps=w,R.numLightProbes=W,r.version=fN++)}function c(u,f){let h=0,m=0,g=0,y=0,p=0;const d=f.matrixWorldInverse;for(let _=0,v=u.length;_<v;_++){const S=u[_];if(S.isDirectionalLight){const A=r.directional[h];A.direction.setFromMatrixPosition(S.matrixWorld),a.setFromMatrixPosition(S.target.matrixWorld),A.direction.sub(a),A.direction.transformDirection(d),h++}else if(S.isSpotLight){const A=r.spot[g];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(d),A.direction.setFromMatrixPosition(S.matrixWorld),a.setFromMatrixPosition(S.target.matrixWorld),A.direction.sub(a),A.direction.transformDirection(d),g++}else if(S.isRectAreaLight){const A=r.rectArea[y];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(d),o.identity(),s.copy(S.matrixWorld),s.premultiply(d),o.extractRotation(s),A.halfWidth.set(S.width*.5,0,0),A.halfHeight.set(0,S.height*.5,0),A.halfWidth.applyMatrix4(o),A.halfHeight.applyMatrix4(o),y++}else if(S.isPointLight){const A=r.point[m];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(d),m++}else if(S.isHemisphereLight){const A=r.hemi[p];A.direction.setFromMatrixPosition(S.matrixWorld),A.direction.transformDirection(d),p++}}}return{setup:l,setupView:c,state:r}}function _0(t,e){const n=new hN(t,e),i=[],r=[];function a(){i.length=0,r.length=0}function s(f){i.push(f)}function o(f){r.push(f)}function l(f){n.setup(i,f)}function c(f){n.setupView(i,f)}return{init:a,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:s,pushShadow:o}}function pN(t,e){let n=new WeakMap;function i(a,s=0){const o=n.get(a);let l;return o===void 0?(l=new _0(t,e),n.set(a,[l])):s>=o.length?(l=new _0(t,e),o.push(l)):l=o[s],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class mN extends Vo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=lR,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class gN extends Vo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const vN=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_N=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function yN(t,e,n){let i=new Bp;const r=new Qe,a=new Qe,s=new Ft,o=new mN({depthPacking:cR}),l=new gN,c={},u=n.maxTextureSize,f={[Mr]:gn,[gn]:Mr,[Mi]:Mi},h=new wr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Qe},radius:{value:4}},vertexShader:vN,fragmentShader:_N}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const g=new di;g.setAttribute("position",new kn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Ri(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=eS;let d=this.type;this.render=function(T,w,C){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;const W=t.getRenderTarget(),x=t.getActiveCubeFace(),R=t.getActiveMipmapLevel(),Z=t.state;Z.setBlending(mr),Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const Q=d!==xi&&this.type===xi,P=d===xi&&this.type!==xi;for(let $=0,X=T.length;$<X;$++){const K=T[$],L=K.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;r.copy(L.mapSize);const O=L.getFrameExtents();if(r.multiply(O),a.copy(L.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(a.x=Math.floor(u/O.x),r.x=a.x*O.x,L.mapSize.x=a.x),r.y>u&&(a.y=Math.floor(u/O.y),r.y=a.y*O.y,L.mapSize.y=a.y)),L.map===null||Q===!0||P===!0){const J=this.type!==xi?{minFilter:nn,magFilter:nn}:{};L.map!==null&&L.map.dispose(),L.map=new ua(r.x,r.y,J),L.map.texture.name=K.name+".shadowMap",L.camera.updateProjectionMatrix()}t.setRenderTarget(L.map),t.clear();const V=L.getViewportCount();for(let J=0;J<V;J++){const oe=L.getViewport(J);s.set(a.x*oe.x,a.y*oe.y,a.x*oe.z,a.y*oe.w),Z.viewport(s),L.updateMatrices(K,J),i=L.getFrustum(),S(w,C,L.camera,K,this.type)}L.isPointLightShadow!==!0&&this.type===xi&&_(L,C),L.needsUpdate=!1}d=this.type,p.needsUpdate=!1,t.setRenderTarget(W,x,R)};function _(T,w){const C=e.update(y);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new ua(r.x,r.y)),h.uniforms.shadow_pass.value=T.map.texture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(w,null,C,h,y,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(w,null,C,m,y,null)}function v(T,w,C,W){let x=null;const R=C.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(R!==void 0)x=R;else if(x=C.isPointLight===!0?l:o,t.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const Z=x.uuid,Q=w.uuid;let P=c[Z];P===void 0&&(P={},c[Z]=P);let $=P[Q];$===void 0&&($=x.clone(),P[Q]=$,w.addEventListener("dispose",A)),x=$}if(x.visible=w.visible,x.wireframe=w.wireframe,W===xi?x.side=w.shadowSide!==null?w.shadowSide:w.side:x.side=w.shadowSide!==null?w.shadowSide:f[w.side],x.alphaMap=w.alphaMap,x.alphaTest=w.alphaTest,x.map=w.map,x.clipShadows=w.clipShadows,x.clippingPlanes=w.clippingPlanes,x.clipIntersection=w.clipIntersection,x.displacementMap=w.displacementMap,x.displacementScale=w.displacementScale,x.displacementBias=w.displacementBias,x.wireframeLinewidth=w.wireframeLinewidth,x.linewidth=w.linewidth,C.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const Z=t.properties.get(x);Z.light=C}return x}function S(T,w,C,W,x){if(T.visible===!1)return;if(T.layers.test(w.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&x===xi)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,T.matrixWorld);const Q=e.update(T),P=T.material;if(Array.isArray(P)){const $=Q.groups;for(let X=0,K=$.length;X<K;X++){const L=$[X],O=P[L.materialIndex];if(O&&O.visible){const V=v(T,O,W,x);T.onBeforeShadow(t,T,w,C,Q,V,L),t.renderBufferDirect(C,null,Q,V,T,L),T.onAfterShadow(t,T,w,C,Q,V,L)}}}else if(P.visible){const $=v(T,P,W,x);T.onBeforeShadow(t,T,w,C,Q,$,null),t.renderBufferDirect(C,null,Q,$,T,null),T.onAfterShadow(t,T,w,C,Q,$,null)}}const Z=T.children;for(let Q=0,P=Z.length;Q<P;Q++)S(Z[Q],w,C,W,x)}function A(T){T.target.removeEventListener("dispose",A);for(const C in c){const W=c[C],x=T.target.uuid;x in W&&(W[x].dispose(),delete W[x])}}}function xN(t,e,n){const i=n.isWebGL2;function r(){let N=!1;const ue=new Ft;let z=null;const ae=new Ft(0,0,0,0);return{setMask:function(he){z!==he&&!N&&(t.colorMask(he,he,he,he),z=he)},setLocked:function(he){N=he},setClear:function(he,$e,rt,Ht,Rn){Rn===!0&&(he*=Ht,$e*=Ht,rt*=Ht),ue.set(he,$e,rt,Ht),ae.equals(ue)===!1&&(t.clearColor(he,$e,rt,Ht),ae.copy(ue))},reset:function(){N=!1,z=null,ae.set(-1,0,0,0)}}}function a(){let N=!1,ue=null,z=null,ae=null;return{setTest:function(he){he?ve(t.DEPTH_TEST):tt(t.DEPTH_TEST)},setMask:function(he){ue!==he&&!N&&(t.depthMask(he),ue=he)},setFunc:function(he){if(z!==he){switch(he){case FA:t.depthFunc(t.NEVER);break;case zA:t.depthFunc(t.ALWAYS);break;case BA:t.depthFunc(t.LESS);break;case Hc:t.depthFunc(t.LEQUAL);break;case HA:t.depthFunc(t.EQUAL);break;case GA:t.depthFunc(t.GEQUAL);break;case VA:t.depthFunc(t.GREATER);break;case WA:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}z=he}},setLocked:function(he){N=he},setClear:function(he){ae!==he&&(t.clearDepth(he),ae=he)},reset:function(){N=!1,ue=null,z=null,ae=null}}}function s(){let N=!1,ue=null,z=null,ae=null,he=null,$e=null,rt=null,Ht=null,Rn=null;return{setTest:function(at){N||(at?ve(t.STENCIL_TEST):tt(t.STENCIL_TEST))},setMask:function(at){ue!==at&&!N&&(t.stencilMask(at),ue=at)},setFunc:function(at,Qt,ei){(z!==at||ae!==Qt||he!==ei)&&(t.stencilFunc(at,Qt,ei),z=at,ae=Qt,he=ei)},setOp:function(at,Qt,ei){($e!==at||rt!==Qt||Ht!==ei)&&(t.stencilOp(at,Qt,ei),$e=at,rt=Qt,Ht=ei)},setLocked:function(at){N=at},setClear:function(at){Rn!==at&&(t.clearStencil(at),Rn=at)},reset:function(){N=!1,ue=null,z=null,ae=null,he=null,$e=null,rt=null,Ht=null,Rn=null}}}const o=new r,l=new a,c=new s,u=new WeakMap,f=new WeakMap;let h={},m={},g=new WeakMap,y=[],p=null,d=!1,_=null,v=null,S=null,A=null,T=null,w=null,C=null,W=new et(0,0,0),x=0,R=!1,Z=null,Q=null,P=null,$=null,X=null;const K=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let L=!1,O=0;const V=t.getParameter(t.VERSION);V.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(V)[1]),L=O>=1):V.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),L=O>=2);let J=null,oe={};const Ce=t.getParameter(t.SCISSOR_BOX),H=t.getParameter(t.VIEWPORT),ee=new Ft().fromArray(Ce),fe=new Ft().fromArray(H);function Te(N,ue,z,ae){const he=new Uint8Array(4),$e=t.createTexture();t.bindTexture(N,$e),t.texParameteri(N,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(N,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let rt=0;rt<z;rt++)i&&(N===t.TEXTURE_3D||N===t.TEXTURE_2D_ARRAY)?t.texImage3D(ue,0,t.RGBA,1,1,ae,0,t.RGBA,t.UNSIGNED_BYTE,he):t.texImage2D(ue+rt,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,he);return $e}const Ee={};Ee[t.TEXTURE_2D]=Te(t.TEXTURE_2D,t.TEXTURE_2D,1),Ee[t.TEXTURE_CUBE_MAP]=Te(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Ee[t.TEXTURE_2D_ARRAY]=Te(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Ee[t.TEXTURE_3D]=Te(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ve(t.DEPTH_TEST),l.setFunc(Hc),He(!1),We(Jg),ve(t.CULL_FACE),Ae(mr);function ve(N){h[N]!==!0&&(t.enable(N),h[N]=!0)}function tt(N){h[N]!==!1&&(t.disable(N),h[N]=!1)}function Ne(N,ue){return m[N]!==ue?(t.bindFramebuffer(N,ue),m[N]=ue,i&&(N===t.DRAW_FRAMEBUFFER&&(m[t.FRAMEBUFFER]=ue),N===t.FRAMEBUFFER&&(m[t.DRAW_FRAMEBUFFER]=ue)),!0):!1}function U(N,ue){let z=y,ae=!1;if(N){z=g.get(ue),z===void 0&&(z=[],g.set(ue,z));const he=N.textures;if(z.length!==he.length||z[0]!==t.COLOR_ATTACHMENT0){for(let $e=0,rt=he.length;$e<rt;$e++)z[$e]=t.COLOR_ATTACHMENT0+$e;z.length=he.length,ae=!0}}else z[0]!==t.BACK&&(z[0]=t.BACK,ae=!0);if(ae)if(n.isWebGL2)t.drawBuffers(z);else if(e.has("WEBGL_draw_buffers")===!0)e.get("WEBGL_draw_buffers").drawBuffersWEBGL(z);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function Bt(N){return p!==N?(t.useProgram(N),p=N,!0):!1}const we={[Vr]:t.FUNC_ADD,[MA]:t.FUNC_SUBTRACT,[wA]:t.FUNC_REVERSE_SUBTRACT};if(i)we[tv]=t.MIN,we[nv]=t.MAX;else{const N=e.get("EXT_blend_minmax");N!==null&&(we[tv]=N.MIN_EXT,we[nv]=N.MAX_EXT)}const Ve={[TA]:t.ZERO,[bA]:t.ONE,[AA]:t.SRC_COLOR,[fh]:t.SRC_ALPHA,[DA]:t.SRC_ALPHA_SATURATE,[LA]:t.DST_COLOR,[CA]:t.DST_ALPHA,[RA]:t.ONE_MINUS_SRC_COLOR,[dh]:t.ONE_MINUS_SRC_ALPHA,[NA]:t.ONE_MINUS_DST_COLOR,[PA]:t.ONE_MINUS_DST_ALPHA,[IA]:t.CONSTANT_COLOR,[UA]:t.ONE_MINUS_CONSTANT_COLOR,[OA]:t.CONSTANT_ALPHA,[kA]:t.ONE_MINUS_CONSTANT_ALPHA};function Ae(N,ue,z,ae,he,$e,rt,Ht,Rn,at){if(N===mr){d===!0&&(tt(t.BLEND),d=!1);return}if(d===!1&&(ve(t.BLEND),d=!0),N!==EA){if(N!==_||at!==R){if((v!==Vr||T!==Vr)&&(t.blendEquation(t.FUNC_ADD),v=Vr,T=Vr),at)switch(N){case es:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Zg:t.blendFunc(t.ONE,t.ONE);break;case Qg:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case ev:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case es:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Zg:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Qg:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case ev:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}S=null,A=null,w=null,C=null,W.set(0,0,0),x=0,_=N,R=at}return}he=he||ue,$e=$e||z,rt=rt||ae,(ue!==v||he!==T)&&(t.blendEquationSeparate(we[ue],we[he]),v=ue,T=he),(z!==S||ae!==A||$e!==w||rt!==C)&&(t.blendFuncSeparate(Ve[z],Ve[ae],Ve[$e],Ve[rt]),S=z,A=ae,w=$e,C=rt),(Ht.equals(W)===!1||Rn!==x)&&(t.blendColor(Ht.r,Ht.g,Ht.b,Rn),W.copy(Ht),x=Rn),_=N,R=!1}function qe(N,ue){N.side===Mi?tt(t.CULL_FACE):ve(t.CULL_FACE);let z=N.side===gn;ue&&(z=!z),He(z),N.blending===es&&N.transparent===!1?Ae(mr):Ae(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),l.setFunc(N.depthFunc),l.setTest(N.depthTest),l.setMask(N.depthWrite),o.setMask(N.colorWrite);const ae=N.stencilWrite;c.setTest(ae),ae&&(c.setMask(N.stencilWriteMask),c.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),c.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),b(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ve(t.SAMPLE_ALPHA_TO_COVERAGE):tt(t.SAMPLE_ALPHA_TO_COVERAGE)}function He(N){Z!==N&&(N?t.frontFace(t.CW):t.frontFace(t.CCW),Z=N)}function We(N){N!==yA?(ve(t.CULL_FACE),N!==Q&&(N===Jg?t.cullFace(t.BACK):N===xA?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):tt(t.CULL_FACE),Q=N}function Et(N){N!==P&&(L&&t.lineWidth(N),P=N)}function b(N,ue,z){N?(ve(t.POLYGON_OFFSET_FILL),($!==ue||X!==z)&&(t.polygonOffset(ue,z),$=ue,X=z)):tt(t.POLYGON_OFFSET_FILL)}function E(N){N?ve(t.SCISSOR_TEST):tt(t.SCISSOR_TEST)}function j(N){N===void 0&&(N=t.TEXTURE0+K-1),J!==N&&(t.activeTexture(N),J=N)}function q(N,ue,z){z===void 0&&(J===null?z=t.TEXTURE0+K-1:z=J);let ae=oe[z];ae===void 0&&(ae={type:void 0,texture:void 0},oe[z]=ae),(ae.type!==N||ae.texture!==ue)&&(J!==z&&(t.activeTexture(z),J=z),t.bindTexture(N,ue||Ee[N]),ae.type=N,ae.texture=ue)}function ie(){const N=oe[J];N!==void 0&&N.type!==void 0&&(t.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function te(){try{t.compressedTexImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Oe(){try{t.compressedTexImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Re(){try{t.texSubImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ce(){try{t.texSubImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function de(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ke(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function re(){try{t.texStorage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function bt(){try{t.texStorage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function je(){try{t.texImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Me(){try{t.texImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ye(N){ee.equals(N)===!1&&(t.scissor(N.x,N.y,N.z,N.w),ee.copy(N))}function xe(N){fe.equals(N)===!1&&(t.viewport(N.x,N.y,N.z,N.w),fe.copy(N))}function Ke(N,ue){let z=f.get(ue);z===void 0&&(z=new WeakMap,f.set(ue,z));let ae=z.get(N);ae===void 0&&(ae=t.getUniformBlockIndex(ue,N.name),z.set(N,ae))}function Ie(N,ue){const ae=f.get(ue).get(N);u.get(ue)!==ae&&(t.uniformBlockBinding(ue,ae,N.__bindingPointIndex),u.set(ue,ae))}function dt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},J=null,oe={},m={},g=new WeakMap,y=[],p=null,d=!1,_=null,v=null,S=null,A=null,T=null,w=null,C=null,W=new et(0,0,0),x=0,R=!1,Z=null,Q=null,P=null,$=null,X=null,ee.set(0,0,t.canvas.width,t.canvas.height),fe.set(0,0,t.canvas.width,t.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:ve,disable:tt,bindFramebuffer:Ne,drawBuffers:U,useProgram:Bt,setBlending:Ae,setMaterial:qe,setFlipSided:He,setCullFace:We,setLineWidth:Et,setPolygonOffset:b,setScissorTest:E,activeTexture:j,bindTexture:q,unbindTexture:ie,compressedTexImage2D:te,compressedTexImage3D:Oe,texImage2D:je,texImage3D:Me,updateUBOMapping:Ke,uniformBlockBinding:Ie,texStorage2D:re,texStorage3D:bt,texSubImage2D:Re,texSubImage3D:ce,compressedTexSubImage2D:de,compressedTexSubImage3D:ke,scissor:ye,viewport:xe,reset:dt}}function SN(t,e,n,i,r,a,s){const o=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Qe,f=new WeakMap;let h;const m=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(b,E){return g?new OffscreenCanvas(b,E):Po("canvas")}function p(b,E,j,q){let ie=1;const te=Et(b);if((te.width>q||te.height>q)&&(ie=q/Math.max(te.width,te.height)),ie<1||E===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const Oe=E?yh:Math.floor,Re=Oe(ie*te.width),ce=Oe(ie*te.height);h===void 0&&(h=y(Re,ce));const de=j?y(Re,ce):h;return de.width=Re,de.height=ce,de.getContext("2d").drawImage(b,0,0,Re,ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+Re+"x"+ce+")."),de}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),b;return b}function d(b){const E=Et(b);return Nv(E.width)&&Nv(E.height)}function _(b){return o?!1:b.wrapS!==Yn||b.wrapT!==Yn||b.minFilter!==nn&&b.minFilter!==cn}function v(b,E){return b.generateMipmaps&&E&&b.minFilter!==nn&&b.minFilter!==cn}function S(b){t.generateMipmap(b)}function A(b,E,j,q,ie=!1){if(o===!1)return E;if(b!==null){if(t[b]!==void 0)return t[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let te=E;if(E===t.RED&&(j===t.FLOAT&&(te=t.R32F),j===t.HALF_FLOAT&&(te=t.R16F),j===t.UNSIGNED_BYTE&&(te=t.R8)),E===t.RED_INTEGER&&(j===t.UNSIGNED_BYTE&&(te=t.R8UI),j===t.UNSIGNED_SHORT&&(te=t.R16UI),j===t.UNSIGNED_INT&&(te=t.R32UI),j===t.BYTE&&(te=t.R8I),j===t.SHORT&&(te=t.R16I),j===t.INT&&(te=t.R32I)),E===t.RG&&(j===t.FLOAT&&(te=t.RG32F),j===t.HALF_FLOAT&&(te=t.RG16F),j===t.UNSIGNED_BYTE&&(te=t.RG8)),E===t.RG_INTEGER&&(j===t.UNSIGNED_BYTE&&(te=t.RG8UI),j===t.UNSIGNED_SHORT&&(te=t.RG16UI),j===t.UNSIGNED_INT&&(te=t.RG32UI),j===t.BYTE&&(te=t.RG8I),j===t.SHORT&&(te=t.RG16I),j===t.INT&&(te=t.RG32I)),E===t.RGBA){const Oe=ie?Gc:it.getTransfer(q);j===t.FLOAT&&(te=t.RGBA32F),j===t.HALF_FLOAT&&(te=t.RGBA16F),j===t.UNSIGNED_BYTE&&(te=Oe===lt?t.SRGB8_ALPHA8:t.RGBA8),j===t.UNSIGNED_SHORT_4_4_4_4&&(te=t.RGBA4),j===t.UNSIGNED_SHORT_5_5_5_1&&(te=t.RGB5_A1)}return(te===t.R16F||te===t.R32F||te===t.RG16F||te===t.RG32F||te===t.RGBA16F||te===t.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function T(b,E,j){return v(b,j)===!0||b.isFramebufferTexture&&b.minFilter!==nn&&b.minFilter!==cn?Math.log2(Math.max(E.width,E.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?E.mipmaps.length:1}function w(b){return b===nn||b===iv||b===Us?t.NEAREST:t.LINEAR}function C(b){const E=b.target;E.removeEventListener("dispose",C),x(E),E.isVideoTexture&&f.delete(E)}function W(b){const E=b.target;E.removeEventListener("dispose",W),Z(E)}function x(b){const E=i.get(b);if(E.__webglInit===void 0)return;const j=b.source,q=m.get(j);if(q){const ie=q[E.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&R(b),Object.keys(q).length===0&&m.delete(j)}i.remove(b)}function R(b){const E=i.get(b);t.deleteTexture(E.__webglTexture);const j=b.source,q=m.get(j);delete q[E.__cacheKey],s.memory.textures--}function Z(b){const E=i.get(b);if(b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(E.__webglFramebuffer[q]))for(let ie=0;ie<E.__webglFramebuffer[q].length;ie++)t.deleteFramebuffer(E.__webglFramebuffer[q][ie]);else t.deleteFramebuffer(E.__webglFramebuffer[q]);E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer[q])}else{if(Array.isArray(E.__webglFramebuffer))for(let q=0;q<E.__webglFramebuffer.length;q++)t.deleteFramebuffer(E.__webglFramebuffer[q]);else t.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&t.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let q=0;q<E.__webglColorRenderbuffer.length;q++)E.__webglColorRenderbuffer[q]&&t.deleteRenderbuffer(E.__webglColorRenderbuffer[q]);E.__webglDepthRenderbuffer&&t.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const j=b.textures;for(let q=0,ie=j.length;q<ie;q++){const te=i.get(j[q]);te.__webglTexture&&(t.deleteTexture(te.__webglTexture),s.memory.textures--),i.remove(j[q])}i.remove(b)}let Q=0;function P(){Q=0}function $(){const b=Q;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),Q+=1,b}function X(b){const E=[];return E.push(b.wrapS),E.push(b.wrapT),E.push(b.wrapR||0),E.push(b.magFilter),E.push(b.minFilter),E.push(b.anisotropy),E.push(b.internalFormat),E.push(b.format),E.push(b.type),E.push(b.generateMipmaps),E.push(b.premultiplyAlpha),E.push(b.flipY),E.push(b.unpackAlignment),E.push(b.colorSpace),E.join()}function K(b,E){const j=i.get(b);if(b.isVideoTexture&&He(b),b.isRenderTargetTexture===!1&&b.version>0&&j.__version!==b.version){const q=b.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{fe(j,b,E);return}}n.bindTexture(t.TEXTURE_2D,j.__webglTexture,t.TEXTURE0+E)}function L(b,E){const j=i.get(b);if(b.version>0&&j.__version!==b.version){fe(j,b,E);return}n.bindTexture(t.TEXTURE_2D_ARRAY,j.__webglTexture,t.TEXTURE0+E)}function O(b,E){const j=i.get(b);if(b.version>0&&j.__version!==b.version){fe(j,b,E);return}n.bindTexture(t.TEXTURE_3D,j.__webglTexture,t.TEXTURE0+E)}function V(b,E){const j=i.get(b);if(b.version>0&&j.__version!==b.version){Te(j,b,E);return}n.bindTexture(t.TEXTURE_CUBE_MAP,j.__webglTexture,t.TEXTURE0+E)}const J={[mh]:t.REPEAT,[Yn]:t.CLAMP_TO_EDGE,[gh]:t.MIRRORED_REPEAT},oe={[nn]:t.NEAREST,[iv]:t.NEAREST_MIPMAP_NEAREST,[Us]:t.NEAREST_MIPMAP_LINEAR,[cn]:t.LINEAR,[df]:t.LINEAR_MIPMAP_NEAREST,[Kr]:t.LINEAR_MIPMAP_LINEAR},Ce={[dR]:t.NEVER,[_R]:t.ALWAYS,[hR]:t.LESS,[uS]:t.LEQUAL,[pR]:t.EQUAL,[vR]:t.GEQUAL,[mR]:t.GREATER,[gR]:t.NOTEQUAL};function H(b,E,j){if(E.type===wi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===cn||E.magFilter===df||E.magFilter===Us||E.magFilter===Kr||E.minFilter===cn||E.minFilter===df||E.minFilter===Us||E.minFilter===Kr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),j?(t.texParameteri(b,t.TEXTURE_WRAP_S,J[E.wrapS]),t.texParameteri(b,t.TEXTURE_WRAP_T,J[E.wrapT]),(b===t.TEXTURE_3D||b===t.TEXTURE_2D_ARRAY)&&t.texParameteri(b,t.TEXTURE_WRAP_R,J[E.wrapR]),t.texParameteri(b,t.TEXTURE_MAG_FILTER,oe[E.magFilter]),t.texParameteri(b,t.TEXTURE_MIN_FILTER,oe[E.minFilter])):(t.texParameteri(b,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(b,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(b===t.TEXTURE_3D||b===t.TEXTURE_2D_ARRAY)&&t.texParameteri(b,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(E.wrapS!==Yn||E.wrapT!==Yn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(b,t.TEXTURE_MAG_FILTER,w(E.magFilter)),t.texParameteri(b,t.TEXTURE_MIN_FILTER,w(E.minFilter)),E.minFilter!==nn&&E.minFilter!==cn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(t.texParameteri(b,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(b,t.TEXTURE_COMPARE_FUNC,Ce[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===nn||E.minFilter!==Us&&E.minFilter!==Kr||E.type===wi&&e.has("OES_texture_float_linear")===!1||o===!1&&E.type===Co&&e.has("OES_texture_half_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const q=e.get("EXT_texture_filter_anisotropic");t.texParameterf(b,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function ee(b,E){let j=!1;b.__webglInit===void 0&&(b.__webglInit=!0,E.addEventListener("dispose",C));const q=E.source;let ie=m.get(q);ie===void 0&&(ie={},m.set(q,ie));const te=X(E);if(te!==b.__cacheKey){ie[te]===void 0&&(ie[te]={texture:t.createTexture(),usedTimes:0},s.memory.textures++,j=!0),ie[te].usedTimes++;const Oe=ie[b.__cacheKey];Oe!==void 0&&(ie[b.__cacheKey].usedTimes--,Oe.usedTimes===0&&R(E)),b.__cacheKey=te,b.__webglTexture=ie[te].texture}return j}function fe(b,E,j){let q=t.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(q=t.TEXTURE_2D_ARRAY),E.isData3DTexture&&(q=t.TEXTURE_3D);const ie=ee(b,E),te=E.source;n.bindTexture(q,b.__webglTexture,t.TEXTURE0+j);const Oe=i.get(te);if(te.version!==Oe.__version||ie===!0){n.activeTexture(t.TEXTURE0+j);const Re=it.getPrimaries(it.workingColorSpace),ce=E.colorSpace===tr?null:it.getPrimaries(E.colorSpace),de=E.colorSpace===tr||Re===ce?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const ke=_(E)&&d(E.image)===!1;let re=p(E.image,ke,!1,r.maxTextureSize);re=We(E,re);const bt=d(re)||o,je=a.convert(E.format,E.colorSpace);let Me=a.convert(E.type),ye=A(E.internalFormat,je,Me,E.colorSpace,E.isVideoTexture);H(q,E,bt);let xe;const Ke=E.mipmaps,Ie=o&&E.isVideoTexture!==!0&&ye!==cS,dt=Oe.__version===void 0||ie===!0,N=te.dataReady,ue=T(E,re,bt);if(E.isDepthTexture)ye=t.DEPTH_COMPONENT,o?E.type===wi?ye=t.DEPTH_COMPONENT32F:E.type===sr?ye=t.DEPTH_COMPONENT24:E.type===ea?ye=t.DEPTH24_STENCIL8:ye=t.DEPTH_COMPONENT16:E.type===wi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===ta&&ye===t.DEPTH_COMPONENT&&E.type!==Fp&&E.type!==sr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=sr,Me=a.convert(E.type)),E.format===ds&&ye===t.DEPTH_COMPONENT&&(ye=t.DEPTH_STENCIL,E.type!==ea&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=ea,Me=a.convert(E.type))),dt&&(Ie?n.texStorage2D(t.TEXTURE_2D,1,ye,re.width,re.height):n.texImage2D(t.TEXTURE_2D,0,ye,re.width,re.height,0,je,Me,null));else if(E.isDataTexture)if(Ke.length>0&&bt){Ie&&dt&&n.texStorage2D(t.TEXTURE_2D,ue,ye,Ke[0].width,Ke[0].height);for(let z=0,ae=Ke.length;z<ae;z++)xe=Ke[z],Ie?N&&n.texSubImage2D(t.TEXTURE_2D,z,0,0,xe.width,xe.height,je,Me,xe.data):n.texImage2D(t.TEXTURE_2D,z,ye,xe.width,xe.height,0,je,Me,xe.data);E.generateMipmaps=!1}else Ie?(dt&&n.texStorage2D(t.TEXTURE_2D,ue,ye,re.width,re.height),N&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,re.width,re.height,je,Me,re.data)):n.texImage2D(t.TEXTURE_2D,0,ye,re.width,re.height,0,je,Me,re.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ie&&dt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ue,ye,Ke[0].width,Ke[0].height,re.depth);for(let z=0,ae=Ke.length;z<ae;z++)xe=Ke[z],E.format!==qn?je!==null?Ie?N&&n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,z,0,0,0,xe.width,xe.height,re.depth,je,xe.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,z,ye,xe.width,xe.height,re.depth,0,xe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ie?N&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,z,0,0,0,xe.width,xe.height,re.depth,je,Me,xe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,z,ye,xe.width,xe.height,re.depth,0,je,Me,xe.data)}else{Ie&&dt&&n.texStorage2D(t.TEXTURE_2D,ue,ye,Ke[0].width,Ke[0].height);for(let z=0,ae=Ke.length;z<ae;z++)xe=Ke[z],E.format!==qn?je!==null?Ie?N&&n.compressedTexSubImage2D(t.TEXTURE_2D,z,0,0,xe.width,xe.height,je,xe.data):n.compressedTexImage2D(t.TEXTURE_2D,z,ye,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ie?N&&n.texSubImage2D(t.TEXTURE_2D,z,0,0,xe.width,xe.height,je,Me,xe.data):n.texImage2D(t.TEXTURE_2D,z,ye,xe.width,xe.height,0,je,Me,xe.data)}else if(E.isDataArrayTexture)Ie?(dt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ue,ye,re.width,re.height,re.depth),N&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,je,Me,re.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,ye,re.width,re.height,re.depth,0,je,Me,re.data);else if(E.isData3DTexture)Ie?(dt&&n.texStorage3D(t.TEXTURE_3D,ue,ye,re.width,re.height,re.depth),N&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,je,Me,re.data)):n.texImage3D(t.TEXTURE_3D,0,ye,re.width,re.height,re.depth,0,je,Me,re.data);else if(E.isFramebufferTexture){if(dt)if(Ie)n.texStorage2D(t.TEXTURE_2D,ue,ye,re.width,re.height);else{let z=re.width,ae=re.height;for(let he=0;he<ue;he++)n.texImage2D(t.TEXTURE_2D,he,ye,z,ae,0,je,Me,null),z>>=1,ae>>=1}}else if(Ke.length>0&&bt){if(Ie&&dt){const z=Et(Ke[0]);n.texStorage2D(t.TEXTURE_2D,ue,ye,z.width,z.height)}for(let z=0,ae=Ke.length;z<ae;z++)xe=Ke[z],Ie?N&&n.texSubImage2D(t.TEXTURE_2D,z,0,0,je,Me,xe):n.texImage2D(t.TEXTURE_2D,z,ye,je,Me,xe);E.generateMipmaps=!1}else if(Ie){if(dt){const z=Et(re);n.texStorage2D(t.TEXTURE_2D,ue,ye,z.width,z.height)}N&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,je,Me,re)}else n.texImage2D(t.TEXTURE_2D,0,ye,je,Me,re);v(E,bt)&&S(q),Oe.__version=te.version,E.onUpdate&&E.onUpdate(E)}b.__version=E.version}function Te(b,E,j){if(E.image.length!==6)return;const q=ee(b,E),ie=E.source;n.bindTexture(t.TEXTURE_CUBE_MAP,b.__webglTexture,t.TEXTURE0+j);const te=i.get(ie);if(ie.version!==te.__version||q===!0){n.activeTexture(t.TEXTURE0+j);const Oe=it.getPrimaries(it.workingColorSpace),Re=E.colorSpace===tr?null:it.getPrimaries(E.colorSpace),ce=E.colorSpace===tr||Oe===Re?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);const de=E.isCompressedTexture||E.image[0].isCompressedTexture,ke=E.image[0]&&E.image[0].isDataTexture,re=[];for(let z=0;z<6;z++)!de&&!ke?re[z]=p(E.image[z],!1,!0,r.maxCubemapSize):re[z]=ke?E.image[z].image:E.image[z],re[z]=We(E,re[z]);const bt=re[0],je=d(bt)||o,Me=a.convert(E.format,E.colorSpace),ye=a.convert(E.type),xe=A(E.internalFormat,Me,ye,E.colorSpace),Ke=o&&E.isVideoTexture!==!0,Ie=te.__version===void 0||q===!0,dt=ie.dataReady;let N=T(E,bt,je);H(t.TEXTURE_CUBE_MAP,E,je);let ue;if(de){Ke&&Ie&&n.texStorage2D(t.TEXTURE_CUBE_MAP,N,xe,bt.width,bt.height);for(let z=0;z<6;z++){ue=re[z].mipmaps;for(let ae=0;ae<ue.length;ae++){const he=ue[ae];E.format!==qn?Me!==null?Ke?dt&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,ae,0,0,he.width,he.height,Me,he.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,ae,xe,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ke?dt&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,ae,0,0,he.width,he.height,Me,ye,he.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,ae,xe,he.width,he.height,0,Me,ye,he.data)}}}else{if(ue=E.mipmaps,Ke&&Ie){ue.length>0&&N++;const z=Et(re[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,N,xe,z.width,z.height)}for(let z=0;z<6;z++)if(ke){Ke?dt&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,0,0,re[z].width,re[z].height,Me,ye,re[z].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,xe,re[z].width,re[z].height,0,Me,ye,re[z].data);for(let ae=0;ae<ue.length;ae++){const $e=ue[ae].image[z].image;Ke?dt&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,ae+1,0,0,$e.width,$e.height,Me,ye,$e.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,ae+1,xe,$e.width,$e.height,0,Me,ye,$e.data)}}else{Ke?dt&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,0,0,Me,ye,re[z]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,xe,Me,ye,re[z]);for(let ae=0;ae<ue.length;ae++){const he=ue[ae];Ke?dt&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,ae+1,0,0,Me,ye,he.image[z]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,ae+1,xe,Me,ye,he.image[z])}}}v(E,je)&&S(t.TEXTURE_CUBE_MAP),te.__version=ie.version,E.onUpdate&&E.onUpdate(E)}b.__version=E.version}function Ee(b,E,j,q,ie,te){const Oe=a.convert(j.format,j.colorSpace),Re=a.convert(j.type),ce=A(j.internalFormat,Oe,Re,j.colorSpace);if(!i.get(E).__hasExternalTextures){const ke=Math.max(1,E.width>>te),re=Math.max(1,E.height>>te);ie===t.TEXTURE_3D||ie===t.TEXTURE_2D_ARRAY?n.texImage3D(ie,te,ce,ke,re,E.depth,0,Oe,Re,null):n.texImage2D(ie,te,ce,ke,re,0,Oe,Re,null)}n.bindFramebuffer(t.FRAMEBUFFER,b),qe(E)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,q,ie,i.get(j).__webglTexture,0,Ae(E)):(ie===t.TEXTURE_2D||ie>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,q,ie,i.get(j).__webglTexture,te),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ve(b,E,j){if(t.bindRenderbuffer(t.RENDERBUFFER,b),E.depthBuffer&&!E.stencilBuffer){let q=o===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(j||qe(E)){const ie=E.depthTexture;ie&&ie.isDepthTexture&&(ie.type===wi?q=t.DEPTH_COMPONENT32F:ie.type===sr&&(q=t.DEPTH_COMPONENT24));const te=Ae(E);qe(E)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,te,q,E.width,E.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,te,q,E.width,E.height)}else t.renderbufferStorage(t.RENDERBUFFER,q,E.width,E.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,b)}else if(E.depthBuffer&&E.stencilBuffer){const q=Ae(E);j&&qe(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,q,t.DEPTH24_STENCIL8,E.width,E.height):qe(E)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,q,t.DEPTH24_STENCIL8,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,b)}else{const q=E.textures;for(let ie=0;ie<q.length;ie++){const te=q[ie],Oe=a.convert(te.format,te.colorSpace),Re=a.convert(te.type),ce=A(te.internalFormat,Oe,Re,te.colorSpace),de=Ae(E);j&&qe(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,de,ce,E.width,E.height):qe(E)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,de,ce,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,ce,E.width,E.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function tt(b,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,b),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),K(E.depthTexture,0);const q=i.get(E.depthTexture).__webglTexture,ie=Ae(E);if(E.depthTexture.format===ta)qe(E)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,q,0,ie):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,q,0);else if(E.depthTexture.format===ds)qe(E)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,q,0,ie):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,q,0);else throw new Error("Unknown depthTexture format")}function Ne(b){const E=i.get(b),j=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!E.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");tt(E.__webglFramebuffer,b)}else if(j){E.__webglDepthbuffer=[];for(let q=0;q<6;q++)n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[q]),E.__webglDepthbuffer[q]=t.createRenderbuffer(),ve(E.__webglDepthbuffer[q],b,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=t.createRenderbuffer(),ve(E.__webglDepthbuffer,b,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function U(b,E,j){const q=i.get(b);E!==void 0&&Ee(q.__webglFramebuffer,b,b.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),j!==void 0&&Ne(b)}function Bt(b){const E=b.texture,j=i.get(b),q=i.get(E);b.addEventListener("dispose",W);const ie=b.textures,te=b.isWebGLCubeRenderTarget===!0,Oe=ie.length>1,Re=d(b)||o;if(Oe||(q.__webglTexture===void 0&&(q.__webglTexture=t.createTexture()),q.__version=E.version,s.memory.textures++),te){j.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(o&&E.mipmaps&&E.mipmaps.length>0){j.__webglFramebuffer[ce]=[];for(let de=0;de<E.mipmaps.length;de++)j.__webglFramebuffer[ce][de]=t.createFramebuffer()}else j.__webglFramebuffer[ce]=t.createFramebuffer()}else{if(o&&E.mipmaps&&E.mipmaps.length>0){j.__webglFramebuffer=[];for(let ce=0;ce<E.mipmaps.length;ce++)j.__webglFramebuffer[ce]=t.createFramebuffer()}else j.__webglFramebuffer=t.createFramebuffer();if(Oe)if(r.drawBuffers)for(let ce=0,de=ie.length;ce<de;ce++){const ke=i.get(ie[ce]);ke.__webglTexture===void 0&&(ke.__webglTexture=t.createTexture(),s.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&b.samples>0&&qe(b)===!1){j.__webglMultisampledFramebuffer=t.createFramebuffer(),j.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let ce=0;ce<ie.length;ce++){const de=ie[ce];j.__webglColorRenderbuffer[ce]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,j.__webglColorRenderbuffer[ce]);const ke=a.convert(de.format,de.colorSpace),re=a.convert(de.type),bt=A(de.internalFormat,ke,re,de.colorSpace,b.isXRRenderTarget===!0),je=Ae(b);t.renderbufferStorageMultisample(t.RENDERBUFFER,je,bt,b.width,b.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.RENDERBUFFER,j.__webglColorRenderbuffer[ce])}t.bindRenderbuffer(t.RENDERBUFFER,null),b.depthBuffer&&(j.__webglDepthRenderbuffer=t.createRenderbuffer(),ve(j.__webglDepthRenderbuffer,b,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(te){n.bindTexture(t.TEXTURE_CUBE_MAP,q.__webglTexture),H(t.TEXTURE_CUBE_MAP,E,Re);for(let ce=0;ce<6;ce++)if(o&&E.mipmaps&&E.mipmaps.length>0)for(let de=0;de<E.mipmaps.length;de++)Ee(j.__webglFramebuffer[ce][de],b,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,de);else Ee(j.__webglFramebuffer[ce],b,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);v(E,Re)&&S(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Oe){for(let ce=0,de=ie.length;ce<de;ce++){const ke=ie[ce],re=i.get(ke);n.bindTexture(t.TEXTURE_2D,re.__webglTexture),H(t.TEXTURE_2D,ke,Re),Ee(j.__webglFramebuffer,b,ke,t.COLOR_ATTACHMENT0+ce,t.TEXTURE_2D,0),v(ke,Re)&&S(t.TEXTURE_2D)}n.unbindTexture()}else{let ce=t.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(o?ce=b.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(ce,q.__webglTexture),H(ce,E,Re),o&&E.mipmaps&&E.mipmaps.length>0)for(let de=0;de<E.mipmaps.length;de++)Ee(j.__webglFramebuffer[de],b,E,t.COLOR_ATTACHMENT0,ce,de);else Ee(j.__webglFramebuffer,b,E,t.COLOR_ATTACHMENT0,ce,0);v(E,Re)&&S(ce),n.unbindTexture()}b.depthBuffer&&Ne(b)}function we(b){const E=d(b)||o,j=b.textures;for(let q=0,ie=j.length;q<ie;q++){const te=j[q];if(v(te,E)){const Oe=b.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Re=i.get(te).__webglTexture;n.bindTexture(Oe,Re),S(Oe),n.unbindTexture()}}}function Ve(b){if(o&&b.samples>0&&qe(b)===!1){const E=b.textures,j=b.width,q=b.height;let ie=t.COLOR_BUFFER_BIT;const te=[],Oe=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Re=i.get(b),ce=E.length>1;if(ce)for(let de=0;de<E.length;de++)n.bindFramebuffer(t.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Re.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let de=0;de<E.length;de++){te.push(t.COLOR_ATTACHMENT0+de),b.depthBuffer&&te.push(Oe);const ke=Re.__ignoreDepthValues!==void 0?Re.__ignoreDepthValues:!1;if(ke===!1&&(b.depthBuffer&&(ie|=t.DEPTH_BUFFER_BIT),b.stencilBuffer&&(ie|=t.STENCIL_BUFFER_BIT)),ce&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Re.__webglColorRenderbuffer[de]),ke===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[Oe]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[Oe])),ce){const re=i.get(E[de]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,re,0)}t.blitFramebuffer(0,0,j,q,0,0,j,q,ie,t.NEAREST),c&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,te)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ce)for(let de=0;de<E.length;de++){n.bindFramebuffer(t.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.RENDERBUFFER,Re.__webglColorRenderbuffer[de]);const ke=i.get(E[de]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Re.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.TEXTURE_2D,ke,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}}function Ae(b){return Math.min(r.maxSamples,b.samples)}function qe(b){const E=i.get(b);return o&&b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function He(b){const E=s.render.frame;f.get(b)!==E&&(f.set(b,E),b.update())}function We(b,E){const j=b.colorSpace,q=b.format,ie=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===vh||j!==Cr&&j!==tr&&(it.getTransfer(j)===lt?o===!1?e.has("EXT_sRGB")===!0&&q===qn?(b.format=vh,b.minFilter=cn,b.generateMipmaps=!1):E=dS.sRGBToLinear(E):(q!==qn||ie!==vr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),E}function Et(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(u.width=b.naturalWidth||b.width,u.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(u.width=b.displayWidth,u.height=b.displayHeight):(u.width=b.width,u.height=b.height),u}this.allocateTextureUnit=$,this.resetTextureUnits=P,this.setTexture2D=K,this.setTexture2DArray=L,this.setTexture3D=O,this.setTextureCube=V,this.rebindTextures=U,this.setupRenderTarget=Bt,this.updateRenderTargetMipmap=we,this.updateMultisampleRenderTarget=Ve,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=qe}function EN(t,e,n){const i=n.isWebGL2;function r(a,s=tr){let o;const l=it.getTransfer(s);if(a===vr)return t.UNSIGNED_BYTE;if(a===rS)return t.UNSIGNED_SHORT_4_4_4_4;if(a===aS)return t.UNSIGNED_SHORT_5_5_5_1;if(a===eR)return t.BYTE;if(a===tR)return t.SHORT;if(a===Fp)return t.UNSIGNED_SHORT;if(a===iS)return t.INT;if(a===sr)return t.UNSIGNED_INT;if(a===wi)return t.FLOAT;if(a===Co)return i?t.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(a===nR)return t.ALPHA;if(a===qn)return t.RGBA;if(a===iR)return t.LUMINANCE;if(a===rR)return t.LUMINANCE_ALPHA;if(a===ta)return t.DEPTH_COMPONENT;if(a===ds)return t.DEPTH_STENCIL;if(a===vh)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(a===aR)return t.RED;if(a===sS)return t.RED_INTEGER;if(a===sR)return t.RG;if(a===oS)return t.RG_INTEGER;if(a===lS)return t.RGBA_INTEGER;if(a===hf||a===pf||a===mf||a===gf)if(l===lt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(a===hf)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===pf)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===mf)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===gf)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(a===hf)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===pf)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===mf)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===gf)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===rv||a===av||a===sv||a===ov)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(a===rv)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===av)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===sv)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===ov)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===cS)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===lv||a===cv)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(a===lv)return l===lt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(a===cv)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===uv||a===fv||a===dv||a===hv||a===pv||a===mv||a===gv||a===vv||a===_v||a===yv||a===xv||a===Sv||a===Ev||a===Mv)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(a===uv)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===fv)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===dv)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===hv)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===pv)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===mv)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===gv)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===vv)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===_v)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===yv)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===xv)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Sv)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Ev)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Mv)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===vf||a===wv||a===Tv)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(a===vf)return l===lt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===wv)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===Tv)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===oR||a===bv||a===Av||a===Rv)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(a===vf)return o.COMPRESSED_RED_RGTC1_EXT;if(a===bv)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Av)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===Rv)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===ea?i?t.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):t[a]!==void 0?t[a]:null}return{convert:r}}class MN extends Dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Vl extends Wt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const wN={type:"move"};class Wf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,a=null,s=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const y of e.hand.values()){const p=n.getJointPose(y,i),d=this._getHandJoint(c,y);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),m=.02,g=.005;c.inputState.pinching&&h>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=n.getPose(e.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&a!==null&&(r=a),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(wN)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Vl;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const TN=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,bN=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class AN{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new an,a=e.properties.get(r);a.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}render(e,n){if(this.texture!==null){if(this.mesh===null){const i=n.cameras[0].viewport,r=new wr({extensions:{fragDepth:!0},vertexShader:TN,fragmentShader:bN,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ri(new Su(20,20),r)}e.render(this.mesh,n)}}reset(){this.texture=null,this.mesh=null}}class RN extends Ms{constructor(e,n){super();const i=this;let r=null,a=1,s=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,m=null,g=null;const y=new AN,p=n.getContextAttributes();let d=null,_=null;const v=[],S=[],A=new Qe;let T=null;const w=new Dn;w.layers.enable(1),w.viewport=new Ft;const C=new Dn;C.layers.enable(2),C.viewport=new Ft;const W=[w,C],x=new MN;x.layers.enable(1),x.layers.enable(2);let R=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let ee=v[H];return ee===void 0&&(ee=new Wf,v[H]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(H){let ee=v[H];return ee===void 0&&(ee=new Wf,v[H]=ee),ee.getGripSpace()},this.getHand=function(H){let ee=v[H];return ee===void 0&&(ee=new Wf,v[H]=ee),ee.getHandSpace()};function Q(H){const ee=S.indexOf(H.inputSource);if(ee===-1)return;const fe=v[ee];fe!==void 0&&(fe.update(H.inputSource,H.frame,c||s),fe.dispatchEvent({type:H.type,data:H.inputSource}))}function P(){r.removeEventListener("select",Q),r.removeEventListener("selectstart",Q),r.removeEventListener("selectend",Q),r.removeEventListener("squeeze",Q),r.removeEventListener("squeezestart",Q),r.removeEventListener("squeezeend",Q),r.removeEventListener("end",P),r.removeEventListener("inputsourceschange",$);for(let H=0;H<v.length;H++){const ee=S[H];ee!==null&&(S[H]=null,v[H].disconnect(ee))}R=null,Z=null,y.reset(),e.setRenderTarget(d),m=null,h=null,f=null,r=null,_=null,Ce.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){a=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){o=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(H){if(r=H,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",Q),r.addEventListener("selectstart",Q),r.addEventListener("selectend",Q),r.addEventListener("squeeze",Q),r.addEventListener("squeezestart",Q),r.addEventListener("squeezeend",Q),r.addEventListener("end",P),r.addEventListener("inputsourceschange",$),p.xrCompatible!==!0&&await n.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(A),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ee={antialias:r.renderState.layers===void 0?p.antialias:!0,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:a};m=new XRWebGLLayer(r,n,ee),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),_=new ua(m.framebufferWidth,m.framebufferHeight,{format:qn,type:vr,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let ee=null,fe=null,Te=null;p.depth&&(Te=p.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ee=p.stencil?ds:ta,fe=p.stencil?ea:sr);const Ee={colorFormat:n.RGBA8,depthFormat:Te,scaleFactor:a};f=new XRWebGLBinding(r,n),h=f.createProjectionLayer(Ee),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),_=new ua(h.textureWidth,h.textureHeight,{format:qn,type:vr,depthTexture:new bS(h.textureWidth,h.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0});const ve=e.properties.get(_);ve.__ignoreDepthValues=h.ignoreDepthValues}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await r.requestReferenceSpace(o),Ce.setContext(r),Ce.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function $(H){for(let ee=0;ee<H.removed.length;ee++){const fe=H.removed[ee],Te=S.indexOf(fe);Te>=0&&(S[Te]=null,v[Te].disconnect(fe))}for(let ee=0;ee<H.added.length;ee++){const fe=H.added[ee];let Te=S.indexOf(fe);if(Te===-1){for(let ve=0;ve<v.length;ve++)if(ve>=S.length){S.push(fe),Te=ve;break}else if(S[ve]===null){S[ve]=fe,Te=ve;break}if(Te===-1)break}const Ee=v[Te];Ee&&Ee.connect(fe)}}const X=new F,K=new F;function L(H,ee,fe){X.setFromMatrixPosition(ee.matrixWorld),K.setFromMatrixPosition(fe.matrixWorld);const Te=X.distanceTo(K),Ee=ee.projectionMatrix.elements,ve=fe.projectionMatrix.elements,tt=Ee[14]/(Ee[10]-1),Ne=Ee[14]/(Ee[10]+1),U=(Ee[9]+1)/Ee[5],Bt=(Ee[9]-1)/Ee[5],we=(Ee[8]-1)/Ee[0],Ve=(ve[8]+1)/ve[0],Ae=tt*we,qe=tt*Ve,He=Te/(-we+Ve),We=He*-we;ee.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(We),H.translateZ(He),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();const Et=tt+He,b=Ne+He,E=Ae-We,j=qe+(Te-We),q=U*Ne/b*Et,ie=Bt*Ne/b*Et;H.projectionMatrix.makePerspective(E,j,q,ie,Et,b),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}function O(H,ee){ee===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(ee.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(r===null)return;y.texture!==null&&(H.near=y.depthNear,H.far=y.depthFar),x.near=C.near=w.near=H.near,x.far=C.far=w.far=H.far,(R!==x.near||Z!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),R=x.near,Z=x.far,w.near=R,w.far=Z,C.near=R,C.far=Z,w.updateProjectionMatrix(),C.updateProjectionMatrix(),H.updateProjectionMatrix());const ee=H.parent,fe=x.cameras;O(x,ee);for(let Te=0;Te<fe.length;Te++)O(fe[Te],ee);fe.length===2?L(x,w,C):x.projectionMatrix.copy(w.projectionMatrix),V(H,x,ee)};function V(H,ee,fe){fe===null?H.matrix.copy(ee.matrixWorld):(H.matrix.copy(fe.matrixWorld),H.matrix.invert(),H.matrix.multiply(ee.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(ee.projectionMatrix),H.projectionMatrixInverse.copy(ee.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=_h*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(H){l=H,h!==null&&(h.fixedFoveation=H),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=H)},this.hasDepthSensing=function(){return y.texture!==null};let J=null;function oe(H,ee){if(u=ee.getViewerPose(c||s),g=ee,u!==null){const fe=u.views;m!==null&&(e.setRenderTargetFramebuffer(_,m.framebuffer),e.setRenderTarget(_));let Te=!1;fe.length!==x.cameras.length&&(x.cameras.length=0,Te=!0);for(let ve=0;ve<fe.length;ve++){const tt=fe[ve];let Ne=null;if(m!==null)Ne=m.getViewport(tt);else{const Bt=f.getViewSubImage(h,tt);Ne=Bt.viewport,ve===0&&(e.setRenderTargetTextures(_,Bt.colorTexture,h.ignoreDepthValues?void 0:Bt.depthStencilTexture),e.setRenderTarget(_))}let U=W[ve];U===void 0&&(U=new Dn,U.layers.enable(ve),U.viewport=new Ft,W[ve]=U),U.matrix.fromArray(tt.transform.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale),U.projectionMatrix.fromArray(tt.projectionMatrix),U.projectionMatrixInverse.copy(U.projectionMatrix).invert(),U.viewport.set(Ne.x,Ne.y,Ne.width,Ne.height),ve===0&&(x.matrix.copy(U.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),Te===!0&&x.cameras.push(U)}const Ee=r.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")){const ve=f.getDepthInformation(fe[0]);ve&&ve.isValid&&ve.texture&&y.init(e,ve,r.renderState)}}for(let fe=0;fe<v.length;fe++){const Te=S[fe],Ee=v[fe];Te!==null&&Ee!==void 0&&Ee.update(Te,ee,c||s)}y.render(e,x),J&&J(H,ee),ee.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ee}),g=null}const Ce=new wS;Ce.setAnimationLoop(oe),this.setAnimationLoop=function(H){J=H},this.dispose=function(){}}}const kr=new zi,CN=new St;function PN(t,e){function n(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function i(p,d){d.color.getRGB(p.fogColor.value,SS(t)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function r(p,d,_,v,S){d.isMeshBasicMaterial||d.isMeshLambertMaterial?a(p,d):d.isMeshToonMaterial?(a(p,d),f(p,d)):d.isMeshPhongMaterial?(a(p,d),u(p,d)):d.isMeshStandardMaterial?(a(p,d),h(p,d),d.isMeshPhysicalMaterial&&m(p,d,S)):d.isMeshMatcapMaterial?(a(p,d),g(p,d)):d.isMeshDepthMaterial?a(p,d):d.isMeshDistanceMaterial?(a(p,d),y(p,d)):d.isMeshNormalMaterial?a(p,d):d.isLineBasicMaterial?(s(p,d),d.isLineDashedMaterial&&o(p,d)):d.isPointsMaterial?l(p,d,_,v):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function a(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,n(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,n(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,n(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===gn&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,n(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===gn&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,n(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,n(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const _=e.get(d),v=_.envMap,S=_.envMapRotation;if(v&&(p.envMap.value=v,kr.copy(S),kr.x*=-1,kr.y*=-1,kr.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(kr.y*=-1,kr.z*=-1),p.envMapRotation.value.setFromMatrix4(CN.makeRotationFromEuler(kr)),p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap){p.lightMap.value=d.lightMap;const A=t._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=d.lightMapIntensity*A,n(d.lightMap,p.lightMapTransform)}d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,p.aoMapTransform))}function s(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,n(d.map,p.mapTransform))}function o(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,_,v){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*_,p.scale.value=v*.5,d.map&&(p.map.value=d.map,n(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,n(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,n(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,n(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function u(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function f(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function h(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,p.roughnessMapTransform)),e.get(d).envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,_){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===gn&&p.clearcoatNormalScale.value.negate())),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,d){d.matcap&&(p.matcap.value=d.matcap)}function y(p,d){const _=e.get(d).light;p.referencePosition.value.setFromMatrixPosition(_.matrixWorld),p.nearDistance.value=_.shadow.camera.near,p.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function LN(t,e,n,i){let r={},a={},s=[];const o=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(_,v){const S=v.program;i.uniformBlockBinding(_,S)}function c(_,v){let S=r[_.id];S===void 0&&(g(_),S=u(_),r[_.id]=S,_.addEventListener("dispose",p));const A=v.program;i.updateUBOMapping(_,A);const T=e.render.frame;a[_.id]!==T&&(h(_),a[_.id]=T)}function u(_){const v=f();_.__bindingPointIndex=v;const S=t.createBuffer(),A=_.__size,T=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,A,T),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,S),S}function f(){for(let _=0;_<o;_++)if(s.indexOf(_)===-1)return s.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(_){const v=r[_.id],S=_.uniforms,A=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let T=0,w=S.length;T<w;T++){const C=Array.isArray(S[T])?S[T]:[S[T]];for(let W=0,x=C.length;W<x;W++){const R=C[W];if(m(R,T,W,A)===!0){const Z=R.__offset,Q=Array.isArray(R.value)?R.value:[R.value];let P=0;for(let $=0;$<Q.length;$++){const X=Q[$],K=y(X);typeof X=="number"||typeof X=="boolean"?(R.__data[0]=X,t.bufferSubData(t.UNIFORM_BUFFER,Z+P,R.__data)):X.isMatrix3?(R.__data[0]=X.elements[0],R.__data[1]=X.elements[1],R.__data[2]=X.elements[2],R.__data[3]=0,R.__data[4]=X.elements[3],R.__data[5]=X.elements[4],R.__data[6]=X.elements[5],R.__data[7]=0,R.__data[8]=X.elements[6],R.__data[9]=X.elements[7],R.__data[10]=X.elements[8],R.__data[11]=0):(X.toArray(R.__data,P),P+=K.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,Z,R.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(_,v,S,A){const T=_.value,w=v+"_"+S;if(A[w]===void 0)return typeof T=="number"||typeof T=="boolean"?A[w]=T:A[w]=T.clone(),!0;{const C=A[w];if(typeof T=="number"||typeof T=="boolean"){if(C!==T)return A[w]=T,!0}else if(C.equals(T)===!1)return C.copy(T),!0}return!1}function g(_){const v=_.uniforms;let S=0;const A=16;for(let w=0,C=v.length;w<C;w++){const W=Array.isArray(v[w])?v[w]:[v[w]];for(let x=0,R=W.length;x<R;x++){const Z=W[x],Q=Array.isArray(Z.value)?Z.value:[Z.value];for(let P=0,$=Q.length;P<$;P++){const X=Q[P],K=y(X),L=S%A;L!==0&&A-L<K.boundary&&(S+=A-L),Z.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=S,S+=K.storage}}}const T=S%A;return T>0&&(S+=A-T),_.__size=S,_.__cache={},this}function y(_){const v={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=48,v.storage=48):_.isMatrix4?(v.boundary=64,v.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),v}function p(_){const v=_.target;v.removeEventListener("dispose",p);const S=s.indexOf(v.__bindingPointIndex);s.splice(S,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete a[v.id]}function d(){for(const _ in r)t.deleteBuffer(r[_]);s=[],r={},a={}}return{bind:l,update:c,dispose:d}}class NS{constructor(e={}){const{canvas:n=xR(),context:i=null,depth:r=!0,stencil:a=!0,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=s;const m=new Uint32Array(4),g=new Int32Array(4);let y=null,p=null;const d=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ii,this._useLegacyLights=!1,this.toneMapping=gr,this.toneMappingExposure=1;const v=this;let S=!1,A=0,T=0,w=null,C=-1,W=null;const x=new Ft,R=new Ft;let Z=null;const Q=new et(0);let P=0,$=n.width,X=n.height,K=1,L=null,O=null;const V=new Ft(0,0,$,X),J=new Ft(0,0,$,X);let oe=!1;const Ce=new Bp;let H=!1,ee=!1,fe=null;const Te=new St,Ee=new Qe,ve=new F,tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ne(){return w===null?K:1}let U=i;function Bt(M,I){for(let B=0;B<M.length;B++){const G=M[B],k=n.getContext(G,I);if(k!==null)return k}return null}try{const M={alpha:!0,depth:r,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${kp}`),n.addEventListener("webglcontextlost",dt,!1),n.addEventListener("webglcontextrestored",N,!1),n.addEventListener("webglcontextcreationerror",ue,!1),U===null){const I=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&I.shift(),U=Bt(I,M),U===null)throw Bt(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&U instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),U.getShaderPrecisionFormat===void 0&&(U.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let we,Ve,Ae,qe,He,We,Et,b,E,j,q,ie,te,Oe,Re,ce,de,ke,re,bt,je,Me,ye,xe;function Ke(){we=new kP(U),Ve=new LP(U,we,e),we.init(Ve),Me=new EN(U,we,Ve),Ae=new xN(U,we,Ve),qe=new BP(U),He=new sN,We=new SN(U,we,Ae,He,Ve,Me,qe),Et=new DP(v),b=new OP(v),E=new XR(U,Ve),ye=new CP(U,we,E,Ve),j=new FP(U,E,qe,ye),q=new WP(U,j,E,qe),re=new VP(U,Ve,We),ce=new NP(He),ie=new aN(v,Et,b,we,Ve,ye,ce),te=new PN(v,He),Oe=new lN,Re=new pN(we,Ve),ke=new RP(v,Et,b,Ae,q,h,l),de=new yN(v,q,Ve),xe=new LN(U,qe,Ve,Ae),bt=new PP(U,we,qe,Ve),je=new zP(U,we,qe,Ve),qe.programs=ie.programs,v.capabilities=Ve,v.extensions=we,v.properties=He,v.renderLists=Oe,v.shadowMap=de,v.state=Ae,v.info=qe}Ke();const Ie=new RN(v,U);this.xr=Ie,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const M=we.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=we.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(M){M!==void 0&&(K=M,this.setSize($,X,!1))},this.getSize=function(M){return M.set($,X)},this.setSize=function(M,I,B=!0){if(Ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=M,X=I,n.width=Math.floor(M*K),n.height=Math.floor(I*K),B===!0&&(n.style.width=M+"px",n.style.height=I+"px"),this.setViewport(0,0,M,I)},this.getDrawingBufferSize=function(M){return M.set($*K,X*K).floor()},this.setDrawingBufferSize=function(M,I,B){$=M,X=I,K=B,n.width=Math.floor(M*B),n.height=Math.floor(I*B),this.setViewport(0,0,M,I)},this.getCurrentViewport=function(M){return M.copy(x)},this.getViewport=function(M){return M.copy(V)},this.setViewport=function(M,I,B,G){M.isVector4?V.set(M.x,M.y,M.z,M.w):V.set(M,I,B,G),Ae.viewport(x.copy(V).multiplyScalar(K).round())},this.getScissor=function(M){return M.copy(J)},this.setScissor=function(M,I,B,G){M.isVector4?J.set(M.x,M.y,M.z,M.w):J.set(M,I,B,G),Ae.scissor(R.copy(J).multiplyScalar(K).round())},this.getScissorTest=function(){return oe},this.setScissorTest=function(M){Ae.setScissorTest(oe=M)},this.setOpaqueSort=function(M){L=M},this.setTransparentSort=function(M){O=M},this.getClearColor=function(M){return M.copy(ke.getClearColor())},this.setClearColor=function(){ke.setClearColor.apply(ke,arguments)},this.getClearAlpha=function(){return ke.getClearAlpha()},this.setClearAlpha=function(){ke.setClearAlpha.apply(ke,arguments)},this.clear=function(M=!0,I=!0,B=!0){let G=0;if(M){let k=!1;if(w!==null){const pe=w.texture.format;k=pe===lS||pe===oS||pe===sS}if(k){const pe=w.texture.type,Se=pe===vr||pe===sr||pe===Fp||pe===ea||pe===rS||pe===aS,be=ke.getClearColor(),Pe=ke.getClearAlpha(),Ge=be.r,De=be.g,Ue=be.b;Se?(m[0]=Ge,m[1]=De,m[2]=Ue,m[3]=Pe,U.clearBufferuiv(U.COLOR,0,m)):(g[0]=Ge,g[1]=De,g[2]=Ue,g[3]=Pe,U.clearBufferiv(U.COLOR,0,g))}else G|=U.COLOR_BUFFER_BIT}I&&(G|=U.DEPTH_BUFFER_BIT),B&&(G|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",dt,!1),n.removeEventListener("webglcontextrestored",N,!1),n.removeEventListener("webglcontextcreationerror",ue,!1),Oe.dispose(),Re.dispose(),He.dispose(),Et.dispose(),b.dispose(),q.dispose(),ye.dispose(),xe.dispose(),ie.dispose(),Ie.dispose(),Ie.removeEventListener("sessionstart",Rn),Ie.removeEventListener("sessionend",at),fe&&(fe.dispose(),fe=null),Qt.stop()};function dt(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function N(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const M=qe.autoReset,I=de.enabled,B=de.autoUpdate,G=de.needsUpdate,k=de.type;Ke(),qe.autoReset=M,de.enabled=I,de.autoUpdate=B,de.needsUpdate=G,de.type=k}function ue(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function z(M){const I=M.target;I.removeEventListener("dispose",z),ae(I)}function ae(M){he(M),He.remove(M)}function he(M){const I=He.get(M).programs;I!==void 0&&(I.forEach(function(B){ie.releaseProgram(B)}),M.isShaderMaterial&&ie.releaseShaderCache(M))}this.renderBufferDirect=function(M,I,B,G,k,pe){I===null&&(I=tt);const Se=k.isMesh&&k.matrixWorld.determinant()<0,be=s1(M,I,B,G,k);Ae.setMaterial(G,Se);let Pe=B.index,Ge=1;if(G.wireframe===!0){if(Pe=j.getWireframeAttribute(B),Pe===void 0)return;Ge=2}const De=B.drawRange,Ue=B.attributes.position;let Mt=De.start*Ge,vn=(De.start+De.count)*Ge;pe!==null&&(Mt=Math.max(Mt,pe.start*Ge),vn=Math.min(vn,(pe.start+pe.count)*Ge)),Pe!==null?(Mt=Math.max(Mt,0),vn=Math.min(vn,Pe.count)):Ue!=null&&(Mt=Math.max(Mt,0),vn=Math.min(vn,Ue.count));const Ut=vn-Mt;if(Ut<0||Ut===1/0)return;ye.setup(k,G,be,B,Pe);let pi,mt=bt;if(Pe!==null&&(pi=E.get(Pe),mt=je,mt.setIndex(pi)),k.isMesh)G.wireframe===!0?(Ae.setLineWidth(G.wireframeLinewidth*Ne()),mt.setMode(U.LINES)):mt.setMode(U.TRIANGLES);else if(k.isLine){let Fe=G.linewidth;Fe===void 0&&(Fe=1),Ae.setLineWidth(Fe*Ne()),k.isLineSegments?mt.setMode(U.LINES):k.isLineLoop?mt.setMode(U.LINE_LOOP):mt.setMode(U.LINE_STRIP)}else k.isPoints?mt.setMode(U.POINTS):k.isSprite&&mt.setMode(U.TRIANGLES);if(k.isBatchedMesh)mt.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else if(k.isInstancedMesh)mt.renderInstances(Mt,Ut,k.count);else if(B.isInstancedBufferGeometry){const Fe=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,Ru=Math.min(B.instanceCount,Fe);mt.renderInstances(Mt,Ut,Ru)}else mt.render(Mt,Ut)};function $e(M,I,B){M.transparent===!0&&M.side===Mi&&M.forceSinglePass===!1?(M.side=gn,M.needsUpdate=!0,Yo(M,I,B),M.side=Mr,M.needsUpdate=!0,Yo(M,I,B),M.side=Mi):Yo(M,I,B)}this.compile=function(M,I,B=null){B===null&&(B=M),p=Re.get(B),p.init(),_.push(p),B.traverseVisible(function(k){k.isLight&&k.layers.test(I.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),M!==B&&M.traverseVisible(function(k){k.isLight&&k.layers.test(I.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights(v._useLegacyLights);const G=new Set;return M.traverse(function(k){const pe=k.material;if(pe)if(Array.isArray(pe))for(let Se=0;Se<pe.length;Se++){const be=pe[Se];$e(be,B,k),G.add(be)}else $e(pe,B,k),G.add(pe)}),_.pop(),p=null,G},this.compileAsync=function(M,I,B=null){const G=this.compile(M,I,B);return new Promise(k=>{function pe(){if(G.forEach(function(Se){He.get(Se).currentProgram.isReady()&&G.delete(Se)}),G.size===0){k(M);return}setTimeout(pe,10)}we.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let rt=null;function Ht(M){rt&&rt(M)}function Rn(){Qt.stop()}function at(){Qt.start()}const Qt=new wS;Qt.setAnimationLoop(Ht),typeof self<"u"&&Qt.setContext(self),this.setAnimationLoop=function(M){rt=M,Ie.setAnimationLoop(M),M===null?Qt.stop():Qt.start()},Ie.addEventListener("sessionstart",Rn),Ie.addEventListener("sessionend",at),this.render=function(M,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),Ie.enabled===!0&&Ie.isPresenting===!0&&(Ie.cameraAutoUpdate===!0&&Ie.updateCamera(I),I=Ie.getCamera()),M.isScene===!0&&M.onBeforeRender(v,M,I,w),p=Re.get(M,_.length),p.init(),_.push(p),Te.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Ce.setFromProjectionMatrix(Te),ee=this.localClippingEnabled,H=ce.init(this.clippingPlanes,ee),y=Oe.get(M,d.length),y.init(),d.push(y),ei(M,I,0,v.sortObjects),y.finish(),v.sortObjects===!0&&y.sort(L,O),this.info.render.frame++,H===!0&&ce.beginShadows();const B=p.state.shadowsArray;if(de.render(B,M,I),H===!0&&ce.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Ie.enabled===!1||Ie.isPresenting===!1||Ie.hasDepthSensing()===!1)&&ke.render(y,M),p.setupLights(v._useLegacyLights),I.isArrayCamera){const G=I.cameras;for(let k=0,pe=G.length;k<pe;k++){const Se=G[k];qp(y,M,Se,Se.viewport)}}else qp(y,M,I);w!==null&&(We.updateMultisampleRenderTarget(w),We.updateRenderTargetMipmap(w)),M.isScene===!0&&M.onAfterRender(v,M,I),ye.resetDefaultState(),C=-1,W=null,_.pop(),_.length>0?p=_[_.length-1]:p=null,d.pop(),d.length>0?y=d[d.length-1]:y=null};function ei(M,I,B,G){if(M.visible===!1)return;if(M.layers.test(I.layers)){if(M.isGroup)B=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(I);else if(M.isLight)p.pushLight(M),M.castShadow&&p.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||Ce.intersectsSprite(M)){G&&ve.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Te);const Se=q.update(M),be=M.material;be.visible&&y.push(M,Se,be,B,ve.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||Ce.intersectsObject(M))){const Se=q.update(M),be=M.material;if(G&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),ve.copy(M.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),ve.copy(Se.boundingSphere.center)),ve.applyMatrix4(M.matrixWorld).applyMatrix4(Te)),Array.isArray(be)){const Pe=Se.groups;for(let Ge=0,De=Pe.length;Ge<De;Ge++){const Ue=Pe[Ge],Mt=be[Ue.materialIndex];Mt&&Mt.visible&&y.push(M,Se,Mt,B,ve.z,Ue)}}else be.visible&&y.push(M,Se,be,B,ve.z,null)}}const pe=M.children;for(let Se=0,be=pe.length;Se<be;Se++)ei(pe[Se],I,B,G)}function qp(M,I,B,G){const k=M.opaque,pe=M.transmissive,Se=M.transparent;p.setupLightsView(B),H===!0&&ce.setGlobalState(v.clippingPlanes,B),pe.length>0&&a1(k,pe,I,B),G&&Ae.viewport(x.copy(G)),k.length>0&&$o(k,I,B),pe.length>0&&$o(pe,I,B),Se.length>0&&$o(Se,I,B),Ae.buffers.depth.setTest(!0),Ae.buffers.depth.setMask(!0),Ae.buffers.color.setMask(!0),Ae.setPolygonOffset(!1)}function a1(M,I,B,G){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;const pe=Ve.isWebGL2;fe===null&&(fe=new ua(1,1,{generateMipmaps:!0,type:we.has("EXT_color_buffer_half_float")?Co:vr,minFilter:Kr,samples:pe?4:0})),v.getDrawingBufferSize(Ee),pe?fe.setSize(Ee.x,Ee.y):fe.setSize(yh(Ee.x),yh(Ee.y));const Se=v.getRenderTarget();v.setRenderTarget(fe),v.getClearColor(Q),P=v.getClearAlpha(),P<1&&v.setClearColor(16777215,.5),v.clear();const be=v.toneMapping;v.toneMapping=gr,$o(M,B,G),We.updateMultisampleRenderTarget(fe),We.updateRenderTargetMipmap(fe);let Pe=!1;for(let Ge=0,De=I.length;Ge<De;Ge++){const Ue=I[Ge],Mt=Ue.object,vn=Ue.geometry,Ut=Ue.material,pi=Ue.group;if(Ut.side===Mi&&Mt.layers.test(G.layers)){const mt=Ut.side;Ut.side=gn,Ut.needsUpdate=!0,Kp(Mt,B,G,vn,Ut,pi),Ut.side=mt,Ut.needsUpdate=!0,Pe=!0}}Pe===!0&&(We.updateMultisampleRenderTarget(fe),We.updateRenderTargetMipmap(fe)),v.setRenderTarget(Se),v.setClearColor(Q,P),v.toneMapping=be}function $o(M,I,B){const G=I.isScene===!0?I.overrideMaterial:null;for(let k=0,pe=M.length;k<pe;k++){const Se=M[k],be=Se.object,Pe=Se.geometry,Ge=G===null?Se.material:G,De=Se.group;be.layers.test(B.layers)&&Kp(be,I,B,Pe,Ge,De)}}function Kp(M,I,B,G,k,pe){M.onBeforeRender(v,I,B,G,k,pe),M.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),k.onBeforeRender(v,I,B,G,M,pe),k.transparent===!0&&k.side===Mi&&k.forceSinglePass===!1?(k.side=gn,k.needsUpdate=!0,v.renderBufferDirect(B,I,G,k,M,pe),k.side=Mr,k.needsUpdate=!0,v.renderBufferDirect(B,I,G,k,M,pe),k.side=Mi):v.renderBufferDirect(B,I,G,k,M,pe),M.onAfterRender(v,I,B,G,k,pe)}function Yo(M,I,B){I.isScene!==!0&&(I=tt);const G=He.get(M),k=p.state.lights,pe=p.state.shadowsArray,Se=k.state.version,be=ie.getParameters(M,k.state,pe,I,B),Pe=ie.getProgramCacheKey(be);let Ge=G.programs;G.environment=M.isMeshStandardMaterial?I.environment:null,G.fog=I.fog,G.envMap=(M.isMeshStandardMaterial?b:Et).get(M.envMap||G.environment),G.envMapRotation=G.environment!==null&&M.envMap===null?I.environmentRotation:M.envMapRotation,Ge===void 0&&(M.addEventListener("dispose",z),Ge=new Map,G.programs=Ge);let De=Ge.get(Pe);if(De!==void 0){if(G.currentProgram===De&&G.lightsStateVersion===Se)return Zp(M,be),De}else be.uniforms=ie.getUniforms(M),M.onBuild(B,be,v),M.onBeforeCompile(be,v),De=ie.acquireProgram(be,Pe),Ge.set(Pe,De),G.uniforms=be.uniforms;const Ue=G.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ue.clippingPlanes=ce.uniform),Zp(M,be),G.needsLights=l1(M),G.lightsStateVersion=Se,G.needsLights&&(Ue.ambientLightColor.value=k.state.ambient,Ue.lightProbe.value=k.state.probe,Ue.directionalLights.value=k.state.directional,Ue.directionalLightShadows.value=k.state.directionalShadow,Ue.spotLights.value=k.state.spot,Ue.spotLightShadows.value=k.state.spotShadow,Ue.rectAreaLights.value=k.state.rectArea,Ue.ltc_1.value=k.state.rectAreaLTC1,Ue.ltc_2.value=k.state.rectAreaLTC2,Ue.pointLights.value=k.state.point,Ue.pointLightShadows.value=k.state.pointShadow,Ue.hemisphereLights.value=k.state.hemi,Ue.directionalShadowMap.value=k.state.directionalShadowMap,Ue.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Ue.spotShadowMap.value=k.state.spotShadowMap,Ue.spotLightMatrix.value=k.state.spotLightMatrix,Ue.spotLightMap.value=k.state.spotLightMap,Ue.pointShadowMap.value=k.state.pointShadowMap,Ue.pointShadowMatrix.value=k.state.pointShadowMatrix),G.currentProgram=De,G.uniformsList=null,De}function Jp(M){if(M.uniformsList===null){const I=M.currentProgram.getUniforms();M.uniformsList=oc.seqWithValue(I.seq,M.uniforms)}return M.uniformsList}function Zp(M,I){const B=He.get(M);B.outputColorSpace=I.outputColorSpace,B.batching=I.batching,B.instancing=I.instancing,B.instancingColor=I.instancingColor,B.instancingMorph=I.instancingMorph,B.skinning=I.skinning,B.morphTargets=I.morphTargets,B.morphNormals=I.morphNormals,B.morphColors=I.morphColors,B.morphTargetsCount=I.morphTargetsCount,B.numClippingPlanes=I.numClippingPlanes,B.numIntersection=I.numClipIntersection,B.vertexAlphas=I.vertexAlphas,B.vertexTangents=I.vertexTangents,B.toneMapping=I.toneMapping}function s1(M,I,B,G,k){I.isScene!==!0&&(I=tt),We.resetTextureUnits();const pe=I.fog,Se=G.isMeshStandardMaterial?I.environment:null,be=w===null?v.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Cr,Pe=(G.isMeshStandardMaterial?b:Et).get(G.envMap||Se),Ge=G.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,De=!!B.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ue=!!B.morphAttributes.position,Mt=!!B.morphAttributes.normal,vn=!!B.morphAttributes.color;let Ut=gr;G.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(Ut=v.toneMapping);const pi=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,mt=pi!==void 0?pi.length:0,Fe=He.get(G),Ru=p.state.lights;if(H===!0&&(ee===!0||M!==W)){const Cn=M===W&&G.id===C;ce.setState(G,M,Cn)}let ht=!1;G.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==Ru.state.version||Fe.outputColorSpace!==be||k.isBatchedMesh&&Fe.batching===!1||!k.isBatchedMesh&&Fe.batching===!0||k.isInstancedMesh&&Fe.instancing===!1||!k.isInstancedMesh&&Fe.instancing===!0||k.isSkinnedMesh&&Fe.skinning===!1||!k.isSkinnedMesh&&Fe.skinning===!0||k.isInstancedMesh&&Fe.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Fe.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Fe.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Fe.instancingMorph===!1&&k.morphTexture!==null||Fe.envMap!==Pe||G.fog===!0&&Fe.fog!==pe||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==ce.numPlanes||Fe.numIntersection!==ce.numIntersection)||Fe.vertexAlphas!==Ge||Fe.vertexTangents!==De||Fe.morphTargets!==Ue||Fe.morphNormals!==Mt||Fe.morphColors!==vn||Fe.toneMapping!==Ut||Ve.isWebGL2===!0&&Fe.morphTargetsCount!==mt)&&(ht=!0):(ht=!0,Fe.__version=G.version);let Pr=Fe.currentProgram;ht===!0&&(Pr=Yo(G,I,k));let Qp=!1,bs=!1,Cu=!1;const Xt=Pr.getUniforms(),Lr=Fe.uniforms;if(Ae.useProgram(Pr.program)&&(Qp=!0,bs=!0,Cu=!0),G.id!==C&&(C=G.id,bs=!0),Qp||W!==M){Xt.setValue(U,"projectionMatrix",M.projectionMatrix),Xt.setValue(U,"viewMatrix",M.matrixWorldInverse);const Cn=Xt.map.cameraPosition;Cn!==void 0&&Cn.setValue(U,ve.setFromMatrixPosition(M.matrixWorld)),Ve.logarithmicDepthBuffer&&Xt.setValue(U,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Xt.setValue(U,"isOrthographic",M.isOrthographicCamera===!0),W!==M&&(W=M,bs=!0,Cu=!0)}if(k.isSkinnedMesh){Xt.setOptional(U,k,"bindMatrix"),Xt.setOptional(U,k,"bindMatrixInverse");const Cn=k.skeleton;Cn&&(Ve.floatVertexTextures?(Cn.boneTexture===null&&Cn.computeBoneTexture(),Xt.setValue(U,"boneTexture",Cn.boneTexture,We)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}k.isBatchedMesh&&(Xt.setOptional(U,k,"batchingTexture"),Xt.setValue(U,"batchingTexture",k._matricesTexture,We));const Pu=B.morphAttributes;if((Pu.position!==void 0||Pu.normal!==void 0||Pu.color!==void 0&&Ve.isWebGL2===!0)&&re.update(k,B,Pr),(bs||Fe.receiveShadow!==k.receiveShadow)&&(Fe.receiveShadow=k.receiveShadow,Xt.setValue(U,"receiveShadow",k.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Lr.envMap.value=Pe,Lr.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),bs&&(Xt.setValue(U,"toneMappingExposure",v.toneMappingExposure),Fe.needsLights&&o1(Lr,Cu),pe&&G.fog===!0&&te.refreshFogUniforms(Lr,pe),te.refreshMaterialUniforms(Lr,G,K,X,fe),oc.upload(U,Jp(Fe),Lr,We)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(oc.upload(U,Jp(Fe),Lr,We),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Xt.setValue(U,"center",k.center),Xt.setValue(U,"modelViewMatrix",k.modelViewMatrix),Xt.setValue(U,"normalMatrix",k.normalMatrix),Xt.setValue(U,"modelMatrix",k.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Cn=G.uniformsGroups;for(let Lu=0,c1=Cn.length;Lu<c1;Lu++)if(Ve.isWebGL2){const em=Cn[Lu];xe.update(em,Pr),xe.bind(em,Pr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Pr}function o1(M,I){M.ambientLightColor.needsUpdate=I,M.lightProbe.needsUpdate=I,M.directionalLights.needsUpdate=I,M.directionalLightShadows.needsUpdate=I,M.pointLights.needsUpdate=I,M.pointLightShadows.needsUpdate=I,M.spotLights.needsUpdate=I,M.spotLightShadows.needsUpdate=I,M.rectAreaLights.needsUpdate=I,M.hemisphereLights.needsUpdate=I}function l1(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(M,I,B){He.get(M.texture).__webglTexture=I,He.get(M.depthTexture).__webglTexture=B;const G=He.get(M);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=B===void 0,G.__autoAllocateDepthBuffer||we.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,I){const B=He.get(M);B.__webglFramebuffer=I,B.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(M,I=0,B=0){w=M,A=I,T=B;let G=!0,k=null,pe=!1,Se=!1;if(M){const Pe=He.get(M);Pe.__useDefaultFramebuffer!==void 0?(Ae.bindFramebuffer(U.FRAMEBUFFER,null),G=!1):Pe.__webglFramebuffer===void 0?We.setupRenderTarget(M):Pe.__hasExternalTextures&&We.rebindTextures(M,He.get(M.texture).__webglTexture,He.get(M.depthTexture).__webglTexture);const Ge=M.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(Se=!0);const De=He.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(De[I])?k=De[I][B]:k=De[I],pe=!0):Ve.isWebGL2&&M.samples>0&&We.useMultisampledRTT(M)===!1?k=He.get(M).__webglMultisampledFramebuffer:Array.isArray(De)?k=De[B]:k=De,x.copy(M.viewport),R.copy(M.scissor),Z=M.scissorTest}else x.copy(V).multiplyScalar(K).floor(),R.copy(J).multiplyScalar(K).floor(),Z=oe;if(Ae.bindFramebuffer(U.FRAMEBUFFER,k)&&Ve.drawBuffers&&G&&Ae.drawBuffers(M,k),Ae.viewport(x),Ae.scissor(R),Ae.setScissorTest(Z),pe){const Pe=He.get(M.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+I,Pe.__webglTexture,B)}else if(Se){const Pe=He.get(M.texture),Ge=I||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Pe.__webglTexture,B||0,Ge)}C=-1},this.readRenderTargetPixels=function(M,I,B,G,k,pe,Se){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=He.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Se!==void 0&&(be=be[Se]),be){Ae.bindFramebuffer(U.FRAMEBUFFER,be);try{const Pe=M.texture,Ge=Pe.format,De=Pe.type;if(Ge!==qn&&Me.convert(Ge)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ue=De===Co&&(we.has("EXT_color_buffer_half_float")||Ve.isWebGL2&&we.has("EXT_color_buffer_float"));if(De!==vr&&Me.convert(De)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_TYPE)&&!(De===wi&&(Ve.isWebGL2||we.has("OES_texture_float")||we.has("WEBGL_color_buffer_float")))&&!Ue){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=M.width-G&&B>=0&&B<=M.height-k&&U.readPixels(I,B,G,k,Me.convert(Ge),Me.convert(De),pe)}finally{const Pe=w!==null?He.get(w).__webglFramebuffer:null;Ae.bindFramebuffer(U.FRAMEBUFFER,Pe)}}},this.copyFramebufferToTexture=function(M,I,B=0){const G=Math.pow(2,-B),k=Math.floor(I.image.width*G),pe=Math.floor(I.image.height*G);We.setTexture2D(I,0),U.copyTexSubImage2D(U.TEXTURE_2D,B,0,0,M.x,M.y,k,pe),Ae.unbindTexture()},this.copyTextureToTexture=function(M,I,B,G=0){const k=I.image.width,pe=I.image.height,Se=Me.convert(B.format),be=Me.convert(B.type);We.setTexture2D(B,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,B.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,B.unpackAlignment),I.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,G,M.x,M.y,k,pe,Se,be,I.image.data):I.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,G,M.x,M.y,I.mipmaps[0].width,I.mipmaps[0].height,Se,I.mipmaps[0].data):U.texSubImage2D(U.TEXTURE_2D,G,M.x,M.y,Se,be,I.image),G===0&&B.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),Ae.unbindTexture()},this.copyTextureToTexture3D=function(M,I,B,G,k=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const pe=Math.round(M.max.x-M.min.x),Se=Math.round(M.max.y-M.min.y),be=M.max.z-M.min.z+1,Pe=Me.convert(G.format),Ge=Me.convert(G.type);let De;if(G.isData3DTexture)We.setTexture3D(G,0),De=U.TEXTURE_3D;else if(G.isDataArrayTexture||G.isCompressedArrayTexture)We.setTexture2DArray(G,0),De=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,G.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,G.unpackAlignment);const Ue=U.getParameter(U.UNPACK_ROW_LENGTH),Mt=U.getParameter(U.UNPACK_IMAGE_HEIGHT),vn=U.getParameter(U.UNPACK_SKIP_PIXELS),Ut=U.getParameter(U.UNPACK_SKIP_ROWS),pi=U.getParameter(U.UNPACK_SKIP_IMAGES),mt=B.isCompressedTexture?B.mipmaps[k]:B.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,mt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,mt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,M.min.x),U.pixelStorei(U.UNPACK_SKIP_ROWS,M.min.y),U.pixelStorei(U.UNPACK_SKIP_IMAGES,M.min.z),B.isDataTexture||B.isData3DTexture?U.texSubImage3D(De,k,I.x,I.y,I.z,pe,Se,be,Pe,Ge,mt.data):G.isCompressedArrayTexture?U.compressedTexSubImage3D(De,k,I.x,I.y,I.z,pe,Se,be,Pe,mt.data):U.texSubImage3D(De,k,I.x,I.y,I.z,pe,Se,be,Pe,Ge,mt),U.pixelStorei(U.UNPACK_ROW_LENGTH,Ue),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Mt),U.pixelStorei(U.UNPACK_SKIP_PIXELS,vn),U.pixelStorei(U.UNPACK_SKIP_ROWS,Ut),U.pixelStorei(U.UNPACK_SKIP_IMAGES,pi),k===0&&G.generateMipmaps&&U.generateMipmap(De),Ae.unbindTexture()},this.initTexture=function(M){M.isCubeTexture?We.setTextureCube(M,0):M.isData3DTexture?We.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?We.setTexture2DArray(M,0):We.setTexture2D(M,0),Ae.unbindTexture()},this.resetState=function(){A=0,T=0,w=null,Ae.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===zp?"display-p3":"srgb",n.unpackColorSpace=it.workingColorSpace===yu?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class NN extends NS{}NN.prototype.isWebGL1Renderer=!0;class DN extends Wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zi,this.environmentRotation=new zi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Sh extends Vo{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new et(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const y0=new St,Eh=new mS,Wl=new xu,jl=new F;class x0 extends Wt{constructor(e=new di,n=new Sh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,a=e.params.Points.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Wl.copy(i.boundingSphere),Wl.applyMatrix4(r),Wl.radius+=a,e.ray.intersectsSphere(Wl)===!1)return;y0.copy(r).invert(),Eh.copy(e.ray).applyMatrix4(y0);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,f=i.attributes.position;if(c!==null){const h=Math.max(0,s.start),m=Math.min(c.count,s.start+s.count);for(let g=h,y=m;g<y;g++){const p=c.getX(g);jl.fromBufferAttribute(f,p),S0(jl,p,l,r,e,n,this)}}else{const h=Math.max(0,s.start),m=Math.min(f.count,s.start+s.count);for(let g=h,y=m;g<y;g++)jl.fromBufferAttribute(f,g),S0(jl,g,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=r.length;a<s;a++){const o=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function S0(t,e,n,i,r,a,s){const o=Eh.distanceSqToPoint(t);if(o<n){const l=new F;Eh.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;a.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:s})}}const E0={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class IN{constructor(e,n,i){const r=this;let a=!1,s=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(u){o++,a===!1&&r.onStart!==void 0&&r.onStart(u,s,o),a=!0},this.itemEnd=function(u){s++,r.onProgress!==void 0&&r.onProgress(u,s,o),s===o&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const m=c[f],g=c[f+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null}}}const UN=new IN;class Gp{constructor(e){this.manager=e!==void 0?e:UN,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,a){i.load(e,r,n,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Gp.DEFAULT_MATERIAL_NAME="__DEFAULT";class ON extends Gp{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,s=E0.get(e);if(s!==void 0)return a.manager.itemStart(e),setTimeout(function(){n&&n(s),a.manager.itemEnd(e)},0),s;const o=Po("img");function l(){u(),E0.add(e,this),n&&n(this),a.manager.itemEnd(e)}function c(f){u(),r&&r(f),a.manager.itemError(e),a.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),a.manager.itemStart(e),o.src=e,o}}class kN extends Gp{constructor(e){super(e)}load(e,n,i,r){const a=new an,s=new ON(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(o){a.image=o,a.needsUpdate=!0,n!==void 0&&n(a)},i,r),a}}class FN extends Wt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new et(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const jf=new St,M0=new F,w0=new F;class zN{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Qe(512,512),this.map=null,this.mapPass=null,this.matrix=new St,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Bp,this._frameExtents=new Qe(1,1),this._viewportCount=1,this._viewports=[new Ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;M0.setFromMatrixPosition(e.matrixWorld),n.position.copy(M0),w0.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(w0),n.updateMatrixWorld(),jf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jf),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(jf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class BN extends zN{constructor(){super(new TS(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class HN extends FN{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Wt.DEFAULT_UP),this.updateMatrix(),this.target=new Wt,this.shadow=new BN}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:kp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=kp);const DS=()=>{const t=se.useRef(null);return se.useEffect(()=>{const e=t.current,n=new NS({canvas:e});n.setClearColor(new et("#1c1624"));const i=new DN,r=16777215,a=1,s=new HN(r,a);s.position.set(-1,2,4),i.add(s);const o=75,l=2,c=1.5,u=5,f=new Dn(o,l,c,u);f.position.z=2;const h=w=>{const C=new Float32Array(w*3);for(let W=0;W<w;W++)C[W]=(Math.random()-.5)*10;return C},m=[new di,new di];m[0].setAttribute("position",new kn(h(350),3)),m[1].setAttribute("position",new kn(h(1500),3));const g=new kN,y=[new Sh({size:.08,map:g.load("https://raw.githubusercontent.com/Kuntal-Das/textures/main/sp1.png"),transparent:!0}),new Sh({size:.08,map:g.load("https://raw.githubusercontent.com/Kuntal-Das/textures/main/sp2.png"),transparent:!0})],p=new x0(m[0],y[0]),d=new x0(m[1],y[1]);i.add(p),i.add(d);const _=w=>{const C=w.domElement,W=C.clientWidth,x=C.clientHeight,R=C.width!==W||C.height!==x;return R&&w.setSize(W,x,!1),R};let v=0,S=0;const A=w=>{v=w.clientX,S=w.clientY};document.addEventListener("mousemove",A);const T=w=>{if(_(n)){const C=n.domElement;f.aspect=C.clientWidth/C.clientHeight,f.updateProjectionMatrix()}p.position.x=v*1e-4,p.position.y=S*-1e-4,d.position.x=v*1e-4,d.position.y=S*-1e-4,n.render(i,f),requestAnimationFrame(T)};return requestAnimationFrame(T),()=>{document.removeEventListener("mousemove",A)}},[]),D.jsx("canvas",{ref:t,id:"c"})},IS="/assets/logo-CAnC8Op4.png";function GN(t){se.useEffect(()=>(document.body.classList.add(t),()=>{document.body.classList.remove(t)}),[t])}const VN=()=>(GN("home-page"),D.jsx(D.Fragment,{children:D.jsxs("div",{className:"home-page",children:[D.jsx(DS,{}),D.jsxs("div",{className:"SmallMobile",children:[D.jsx("h1",{children:"Birdpedia"}),D.jsx("h2",{children:"By Sergio Mendoza"}),D.jsx("img",{src:IS,alt:"Wikipedia Bird",className:"WikipediaBirdLogo"}),D.jsx("div",{className:"HomeSearchBar",children:D.jsx(_A,{})})]}),D.jsx("div",{className:"homeFooter",children:D.jsx(Qx,{})})]})})),WN=({referencesList:t})=>D.jsxs("div",{className:"ReferencesContainer",children:[D.jsx("h4",{children:"References"}),D.jsx("hr",{className:"ReferencesSeparator"}),D.jsx("ul",{children:t&&t.map((e,n)=>D.jsxs("li",{className:"ReferenceItem",children:[D.jsx("span",{className:"ReferenceAuthor",children:e.author}),D.jsxs("span",{className:"ReferenceYear",children:[" (",e.year,")."]}),D.jsxs("span",{className:"ReferenceTitle",children:[" ",e.title]}),e.journal&&D.jsxs("span",{className:"ReferenceJournal",children:[" ",D.jsx("em",{children:e.journal})]}),e.volume&&D.jsxs("span",{className:"ReferenceVolume",children:[", ",D.jsx("em",{children:e.volume})]}),e.pages&&D.jsxs("span",{className:"ReferencePages",children:[", ",e.pages]}),e.doi?D.jsxs("span",{className:"ReferenceDoi",children:[". doi: ",D.jsx("a",{href:`https://doi.org/${e.doi}`,target:"_blank",rel:"noopener noreferrer",children:e.doi})]}):e.url&&D.jsxs("span",{className:"ReferenceUrl",children:[". ",D.jsx("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",children:e.url})]})]},n))})]}),jN=[{author:"Conner, R.N., Sáenz, D., & Rudolph, D.C.",title:"The red-cockaded woodpecker: interactions with fire, snags, fungi, rat snakes and pileated woodpeckers",journal:"Texas Journal of Science",volume:"56(4)",pages:"415-426",year:2004,url:"https://www.fs.usda.gov/research/treesearch/21066"},{author:"Cox, J.A., Engstrom, R.T., Breininger, D.R., & Ragheb, E.L.",title:"Interpreting smoke signals: Fire ecology and land management for four federally listed birds",journal:"Frontiers in Ecology and Evolution",volume:"8",pages:"267",year:2020,doi:"10.3389/fevo.2020.00267"},{author:"Vierling, K.T., & Gentry, D.J.",title:"Red-headed woodpecker density and productivity in relation to time since fire in burned pine forests",journal:"Fire Ecology",volume:"4",pages:"15-25",year:2008,doi:"10.4996/fireecology.0402015"},{author:"Allen, J.C., Krieger, S.M., Walters, J., & Collazo, J.A.",title:"Associations of breeding birds with fire-influenced and riparian-upland gradients in a longleaf pine ecosystem",journal:"The Auk",volume:"123(4)",pages:"1110-1128",year:2006,doi:"10.1093/auk/123.4.1110"},{author:"Hutto, R.L., Conway, C.J., Saab, V.A., & Walters, J.",title:"What constitutes a natural fire regime? Insight from the ecology and distribution of coniferous forest birds in North America",journal:"Fire Ecology",volume:"4",pages:"115-132",year:2008,doi:"10.4996/fireecology.0402115"},{author:"Conner, R.N., Rudolph, D.C., Kulhavy, D., & Snow, A.E.",title:"Causes of mortality of red-cockaded woodpecker cavity trees",journal:"Journal of Wildlife Management",volume:"55(3)",pages:"531-537",year:1991,url:"https://www.fs.usda.gov/research/treesearch/1276#"},{author:"Fullerton, M.R., Walters, J., Will, R.E., & Loss, S.R.",title:"Interannual climate variation influences nest initiation date and nest productivity of the red-cockaded woodpecker at the northwestern edge of its range",journal:"Ornithological Applications",volume:"123(2)",pages:"1-17",year:2021,doi:"10.1093/ornithapp/duab013"},{author:"Stillman, A.N., Siegel, R.B., Wilkerson, R.L., Johnson, M., & Tingley, M.W.",title:"Age-dependent habitat relationships of a burned forest specialist emphasise the role of pyrodiversity in fire management",journal:"Journal of Applied Ecology",volume:"56",pages:"880-890",year:2019,doi:"10.1111/1365-2664.13328"},{author:"DeMay, S.M., & Walters, J.",title:"Variable effects of a changing climate on lay dates and productivity across the range of the red-cockaded woodpecker",journal:"The Condor",volume:"121(4)",pages:"1-14",year:2019,doi:"10.1093/condor/duz048"},{author:"Lovette, I.J., & Bermingham, E.",title:"Does Red-Cockaded Woodpecker Excavation of Resin Wells Increase Risk of Bark Beetle Infestation of Cavity Trees?",journal:"The Auk",volume:"118",pages:"219-224",year:2001,doi:"10.1093/auk/118.1.219"},{author:"Jackson, J.A., Poole, A.K., & Gill, F.B.",title:"Red-cockaded Woodpecker (Picoides borealis)",journal:"The Birds of North America Online",volume:"20",year:1994,url:"https://birdsoftheworld.org/bow/species/rebpil1/cur/introduction"},{author:"Mengel, R.M., & Jackson, J.A.",title:"Geographic variation of the red-cockaded woodpecker",journal:"The Condor",volume:"79",pages:"349-355",year:1977,doi:"10.2307/1368013"},{author:"Frei, B., Smith, K.G., Withgott, J.H., Rodewald, P.G., Pyle, P., & Patten, M.A.",title:"Red-headed Woodpecker (Melanerpes erythrocephalus)",journal:"Birds of the World",year:2020,url:"https://birdsoftheworld.org/bow/species/rehwoo/cur/introduction"},{author:"Cornell Lab of Ornithology",title:"Red-cockaded Woodpecker",year:2024,url:"https://www.allaboutbirds.org/guide/Red-cockaded_Woodpecker/id"},{author:"Conner, E.N., Rudolph, C., & Walters, J.",title:"The Red-cockaded Woodpecker: Surviving in a Fire-Maintained Ecosystem",journal:"The Auk",volume:"120",pages:"1201-1205",year:2003,doi:"10.1093/auk/120.4.1201"}],XN=()=>D.jsxs("nav",{className:"navbar",children:[D.jsx("a",{href:"/",children:D.jsx("div",{className:"navbar__logo",children:D.jsx("img",{src:IS,alt:"Wikipedia Bird",className:"WikipediaBirdLogoNavbar"})})}),D.jsxs("ul",{className:"navbar__links",children:[D.jsx("li",{children:D.jsx("a",{href:"/",children:"Home"})}),D.jsx("li",{children:D.jsx("a",{href:"#about",children:"About"})}),D.jsx("li",{children:D.jsx("a",{href:"#services",children:"Services"})}),D.jsx("li",{children:D.jsx("a",{href:"#contact",children:"Contact"})})]})]}),$N="/assets/GitHubBanner-J9hVubJ2.png",YN="/assets/PersonalWebsite-HTzR5txr.png",T0=[{image:$N,text:"Visit my GitHub!",redirect:"https://github.com/DogeLovesHipster"},{image:YN,text:"Check out my personal website!",redirect:"https://sergiomendozajr.com/"}],qN=()=>{const[t,e]=se.useState(!0),[n,i]=se.useState(null);se.useEffect(()=>{const a=T0[Math.floor(Math.random()*T0.length)];i(a)},[]);const r=a=>{a.preventDefault(),a.stopPropagation();const s=document.querySelector(".announcement-banner");s.style.transform="scaleY(0)",setTimeout(()=>e(!1),300)};return D.jsx(D.Fragment,{children:t&&n&&D.jsx("a",{href:n.redirect,className:"banner-link",children:D.jsxs("div",{className:"announcement-banner",style:{backgroundImage:`url(${n.image})`},children:[D.jsx("p",{children:n.text}),D.jsx("button",{className:"close-button",onClick:r,children:"X"})]})})})},KN=Un.forwardRef(({title:t,text:e,figure:n,break:i},r)=>D.jsxs("section",{ref:r,className:"baseSectionText",children:[D.jsx("h4",{children:t}),i&&D.jsx("hr",{}),D.jsxs("div",{className:"content",children:[n&&D.jsx("div",{className:"figure",children:n.map((a,s)=>D.jsx("img",{src:a,alt:`Figure ${s+1}`},s))}),D.jsx("div",{className:n?"textWithFigure":"text",children:e&&e.split(`
`).map((a,s)=>D.jsx("p",{children:a},s))})]})]})),JN="/assets/cockadedNest1-BC3WpSAk.jpg",ZN="/assets/cockadedNest2-DG93QtjY.jpg",QN="/assets/cockadedNest3-BucvHh4O.jpg",e3="/assets/cockadedNest4-D-pliXBP.png",t3="/assets/habitat1-BXFSpk0b.jpg",n3="/assets/habitat2-D1WzyABy.webp",i3="/assets/infographic1-BjRP9opq.png",r3="/assets/fireExample1-9Pk7jWPr.jpg",a3="/assets/fireExample2-DnisY2_K.jpg",s3="/assets/noneFireExample1-ClxeP-Zp.jpg",b0=[{title:"",text:"The red-cockaded woodpecker (Leuconotopicus borealis) is a woodpecker endemic to the southeastern United States.",figure:"",break:!1},{title:"Description",text:`The Red-cockaded Woodpecker (Picoides borealis) is a small to medium-sized woodpecker, distinct for its black and white barred back and white underparts. Males are characterized by a small red streak on the side of their head, which is the feature that gives the species its name. This red streak can be hard to see and is often not visible on females, who lack this mark entirely.
 The bird's black cap and nape contrast with its white cheeks and neck. Its wings are black with white spots, and its tail is also black with white outer feathers. The Red-cockaded Woodpecker's bill is straight and chisel-like, adapted for pecking into pine trees, which is a unique behavior among North American woodpeckers.
 In terms of size, the Red-cockaded Woodpecker is about 8.5 to 9 inches in length, with a wingspan of about 14 to 17 inches. This woodpecker weighs approximately 1.5 to 2.0 ounces. Despite its modest size, it plays a significant ecological role, particularly in its preference for living in mature pine forests and its unique nesting habits within live pine trees.`,figure:"",break:!0},{title:"Habitat & Behavior",text:`The red-cockaded woodpecker, a unique and intriguing bird species, primarily inhabits the longleaf pine ecosystems, which were once abundant across the southeastern United States. This woodpecker has a strong preference for old-growth pine forests, particularly those consisting of longleaf pines, though it is also known to inhabit loblolly and slash pine forests. These ecosystems are characterized by tall, mature pine trees with a relatively open understory, a landscape shaped and maintained by regular fire cycles.
 One of the most distinctive aspects of the red-cockaded woodpecker's habitat preference is its reliance on living pine trees for nesting. Unlike most woodpeckers that nest in dead trees or snags, this species excavates cavities exclusively in living pines, often in trees infected with red-heart fungus, which softens the heartwood. This behavior is not only unique but also critical for their survival, as these cavities are used for roosting and breeding.
 The red-cockaded woodpecker's behavior is equally fascinating. Notably, they exhibit a cooperative breeding system, where not only the breeding pair but also additional group members, usually offspring from previous broods, contribute to raising the young. This social structure is relatively rare among North American woodpeckers and plays a crucial role in their life cycle. Group members participate in various activities, including foraging, cavity excavation, and defending territory.
 Additionally, these woodpeckers have developed a unique defense strategy against predators. They excavate resin wells around their nesting cavities, causing sap to flow down the tree trunk. This sticky barrier helps deter climbing predators, such as snakes, which pose a significant threat to their eggs and nestlings.
 Unfortunately, the red-cockaded woodpecker's dependence on specific habitat types has made it vulnerable to habitat loss due to factors such as logging, urban development, and suppression of natural fire regimes. As a result, it is currently listed as an endangered species, and conservation efforts are focused on preserving and restoring its natural habitat, including the maintenance of regular fire cycles to sustain the open understory of longleaf pine ecosystems.`,figure:[JN,ZN,QN,e3],break:!0},{title:"Historical Fire Regimes",text:`The historical fire regimes of the ecosystems inhabited by the Red-cockaded Woodpecker, particularly in longleaf pine ecosystems, have played a crucial role in shaping their habitat and behavior. The Red-cockaded Woodpecker has adapted to these fire-maintained southern pine ecosystems through several key interactions. Notably, the frequent low-intensity ground fires historically common in these ecosystems helped reduce the frequency of hardwoods and increased the prevalence of pine, facilitating the softening of pine heartwood by red heart fungus, which is beneficial for the woodpecker's cavity excavation. The Red-cockaded Woodpecker's use of live pines for cavity trees and its unique method of creating resin barriers against predators like rat snakes have also been significant adaptations to these fire regimes (Conner, et al., 2004)
 Historically, these ecosystems were characterized by frequent, low-intensity fires that maintained an open understory and prevented the overgrowth of hardwood midstory. Fossil pollen records suggest that fire-maintained pine ecosystems began to spread approximately 12,000 years ago, facilitated by the retreat of the Laurentide ice sheet. This spread was characterized by nearly unbroken expanses of pines within a grassy landscape, where fire, both in winter and growing seasons, played an integral role. The frequent fires, primarily ignited by lightning, Native Americans, and early settlers, maintained the herbaceous ground cover primarily consisting of grasses and forbs. Longleaf pine forests in the Carolinas, for instance, were historically burned annually (Conner, et al., 2004)
 However, fire suppression practices, particularly in the latter half of the 20th century, drastically altered these ecosystems. This suppression led to the development of dense hardwood midstory, negatively impacting the habitat of the Red-cockaded Woodpecker and leading to their decline. These habitat changes prompted the birds to abandon their cavities and territories, especially when the hardwood midstory reached the height of their cavities. The decline of the Red-cockaded Woodpecker in the 1970s and 1980s was characterized by the abandonment of territories in fire-suppressed areas. The birds have shown a preference for foraging in habitats with rich groundcover of grasses and forbs, with little or no hardwood midstory, and their reproductive success and group size are larger in such habitats. This indicates that both their foraging habitat preferences and their dependence on fire to maintain habitat suitability qualify the Red-cockaded Woodpecker as a fire specialist (Hutto et al., 2008).`,figure:[t3,i3,n3],break:!0},{title:"Fire Adaptations & Responses",text:`Species Adaptations: The Red-cockaded Woodpecker, a fire specialist, exhibits several adaptations to thrive in fire-prone environments. Its sedentary nature is closely linked to its unique habitat of excavating cavities for nesting and roosting in live pine trees, a process that can take years, thus the cavities, once created, can be used for over a decade. The species' reliance on these cavity-bearing trees, valuable resources, shapes its behavior and territories. The use of live pines for cavity trees implies the species evolved in association with a low-severity fire regime, as their habitats become unsuitable in the absence of fire (Hutto, et al., 2008).
 Habitat Responses to Fire: The Red-cockaded Woodpecker's habitat, particularly the longleaf pine ecosystems, has historically been maintained by frequent low-intensity ground fires. These fires have played a pivotal role in reducing hardwood frequency, thus maintaining the open pine uplands. The woodpecker's adaptation to use living pines as cavity trees has been facilitated by these fire-maintained ecosystems, which historically had few dead trees or snags due to regular fire (Hutto, et al., 2008).
 Fire Management Practices: Current fire management practices in these ecosystems aim to mimic the prehistoric fire regime. However, anthropogenic forces, like fire suppression and conversion of pine forests to other land uses, have altered these ecosystems. This has allowed hardwood species to invade previously open pine uplands and increased the availability of dead trees, impacting the Red-cockaded Woodpecker populations negatively(Conner, et al., 2004).
 Conservation Implications: The conservation of the Red-cockaded Woodpecker and its habitat depends heavily on fire management. The need to restore natural fire regimes in these ecosystems is vital, but the challenges lie in balancing fire management with other ecological and human concerns. The species' survival is intricately linked to the health and management of fire-dependent pine ecosystems.`,figure:[r3,a3,s3],break:!0},{title:"Research and Studies",text:`The latest research on the Red-cockaded Woodpecker highlights several crucial aspects of its conservation, recovery efforts, and the challenges it faces in its natural habitat. This species requires mature, open-structured pine forests that are maintained by frequent fire, and it exclusively uses old living pine trees for its roosting and nesting cavities. The woodpecker's population declined significantly due to the loss of the original longleaf pine ecosystem, habitat degradation from fire suppression, and fragmentation caused by short-rotation silviculture. However, the development of artificial cavities in living pine trees and translocation strategies have been instrumental in recovery efforts, allowing for the enhancement of small populations and re-establishment in formerly occupied sites.
 Management of the Red-cockaded Woodpecker has significantly contributed to the conservation of the longleaf pine ecosystem, one of the most biologically rich forest types in North America. Recent recovery plans emphasize the application of frequent fires, especially during the growing season (March-June), to maintain optimal habitat for the woodpecker. These fires are more effective than dormant-season fires in controlling hardwood trees and shrubs and might improve the nutritional quality and abundance of arboreal arthropods in the woodpecker's diet. However, fire exclusion leads to the development of a hardwood midstory, prompting woodpeckers to abandon their territories. 
 Restoration of former longleaf pine sites is an essential objective in management plans for the National Forests of Florida. This restoration is critical for providing foraging and eventually nesting habitat for the Red-cockaded Woodpecker. Additionally, longleaf pines produce resinous, highly flammable needles which contribute significantly to the fine fuels at ground level, driving prescribed fires that are necessary for habitat maintenance.
 A key challenge for sustainable recovery of the Red-cockaded Woodpecker is maintaining appropriate fire regimes. The extensive use of prescribed fire in woodpecker management has expanded due to focused funding and the allocation of resources, particularly on military bases. Regular regional meetings facilitate the coordination of translocation strategies and exchange information on population status and fire management achievements. Looking ahead, managing fire under changing climatic conditions presents challenges. Fire regimes that once excluded hardwood trees may not perform as effectively due to higher temperatures and increased CO2 levels. A combination of mechanical and fire treatments will be necessary to maintain fire-dependent systems. Mechanical treatments have proven effective but also carry risks such as soil disturbance and the spread of exotic plants. The success of Florida's wildlife conservation efforts serves as a model, demonstrating the importance of financial support for habitat management using fire and other tools (Cox, et al., 2020)
`,figure:"",break:!0}],o3=({name:t="Placeholder"})=>D.jsxs("div",{className:"HeadingSection",children:[D.jsx("h2",{children:t}),D.jsx("hr",{})]}),l3="/assets/RangeMap-rylw3ybV.jpg";var US={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},A0=Un.createContext&&Un.createContext(US),c3=["attr","size","title"];function u3(t,e){if(t==null)return{};var n=f3(t,e),i,r;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)i=a[r],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(t,i)&&(n[i]=t[i])}return n}function f3(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,a;for(a=0;a<i.length;a++)r=i[a],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function Xc(){return Xc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Xc.apply(this,arguments)}function R0(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function $c(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?R0(Object(n),!0).forEach(function(i){d3(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):R0(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function d3(t,e,n){return e=h3(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function h3(t){var e=p3(t,"string");return typeof e=="symbol"?e:String(e)}function p3(t,e){if(typeof t!="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function OS(t){return t&&t.map((e,n)=>Un.createElement(e.tag,$c({key:n},e.attr),OS(e.child)))}function kS(t){return e=>Un.createElement(m3,Xc({attr:$c({},t.attr)},e),OS(t.child))}function m3(t){var e=n=>{var{attr:i,size:r,title:a}=t,s=u3(t,c3),o=r||n.size||"1em",l;return n.className&&(l=n.className),t.className&&(l=(l?l+" ":"")+t.className),Un.createElement("svg",Xc({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,i,s,{className:l,style:$c($c({color:t.color||n.color},n.style),t.style),height:o,width:o,xmlns:"http://www.w3.org/2000/svg"}),a&&Un.createElement("title",null,a),t.children)};return A0!==void 0?Un.createElement(A0.Consumer,null,n=>e(n)):e(US)}function g3(t){return kS({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48z"},child:[]}]})(t)}function v3(t){return kS({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M215.03 71.05L126.06 160H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V88.02c0-21.46-25.96-31.98-40.97-16.97zm233.32-51.08c-11.17-7.33-26.18-4.24-33.51 6.95-7.34 11.17-4.22 26.18 6.95 33.51 66.27 43.49 105.82 116.6 105.82 195.58 0 78.98-39.55 152.09-105.82 195.58-11.17 7.32-14.29 22.34-6.95 33.5 7.04 10.71 21.93 14.56 33.51 6.95C528.27 439.58 576 351.33 576 256S528.27 72.43 448.35 19.97zM480 256c0-63.53-32.06-121.94-85.77-156.24-11.19-7.14-26.03-3.82-33.12 7.46s-3.78 26.21 7.41 33.36C408.27 165.97 432 209.11 432 256s-23.73 90.03-63.48 115.42c-11.19 7.14-14.5 22.07-7.41 33.36 6.51 10.36 21.12 15.14 33.12 7.46C447.94 377.94 480 319.54 480 256zm-141.77-76.87c-11.58-6.33-26.19-2.16-32.61 9.45-6.39 11.61-2.16 26.2 9.45 32.61C327.98 228.28 336 241.63 336 256c0 14.38-8.02 27.72-20.92 34.81-11.61 6.41-15.84 21-9.45 32.61 6.43 11.66 21.05 15.8 32.61 9.45 28.23-15.55 45.77-45 45.77-76.88s-17.54-61.32-45.78-76.86z"},child:[]}]})(t)}const _3=({duration:t,start:e})=>{const[n,i]=se.useState(()=>{const[s,o]=t.split(":").map(Number);return s*60+o});se.useEffect(()=>{if(!e||n<=0)return;const s=setTimeout(()=>{i(n-1)},1e3);return()=>clearTimeout(s)},[e,n]);const r=Math.floor(n/60),a=n%60;return D.jsxs("span",{children:[r.toString().padStart(2,"0"),":",a.toString().padStart(2,"0")]})},y3=({audioSrc:t,callType:e,date:n,citation:i,duration:r})=>{const a=se.useRef(),[s,o]=se.useState(!1),l=()=>{s?a.current.pause():a.current.play(),o(!s)},c=()=>{o(!1)},u=f=>{console.error("Error playing sound:",f)};return D.jsxs("div",{style:{display:"flex",alignItems:"center",marginBottom:"10px"},children:[D.jsx("button",{onClick:l,style:{marginRight:"10px"},children:s?D.jsx(g3,{}):D.jsx(v3,{})}),D.jsxs("div",{children:[D.jsx("p",{children:e}),D.jsx("p",{children:n}),D.jsx("p",{children:i})]}),D.jsx("audio",{ref:a,src:t,onEnded:c,onError:u,style:{display:"none"}}),D.jsx("div",{style:{marginLeft:"auto"},children:D.jsx(_3,{duration:r,start:s})})]})},x3=({sounds:t})=>D.jsx(D.Fragment,{children:t.map((e,n)=>D.jsx(y3,{audioSrc:e.src,callType:e.callType,date:e.date,citation:e.citation,duration:e.duration},n))}),S3=({domain:t,kingdom:e,phylum:n,class:i,order:r,family:a,genus:s,species:o})=>D.jsxs("div",{children:[D.jsx("h4",{children:"Scientific Classification"}),D.jsxs("p",{children:["Domain: ",t]}),D.jsxs("p",{children:["Kingdom: ",e]}),D.jsxs("p",{children:["Phylum: ",n]}),D.jsxs("p",{children:["Class: ",i]}),D.jsxs("p",{children:["Order: ",r]}),D.jsxs("p",{children:["Family: ",a]}),D.jsxs("p",{children:["Genus: ",s]}),D.jsxs("p",{children:["Species: ",o]})]}),E3=[{domain:"Eukaryota",kingdom:"Animalia",phylum:"Chordata",class:"Aves",order:"Piciformes",family:"Picidae",genus:"Leuconotopicus",species:"L. borealis"}],M3=({item:t})=>{const[e,n]=se.useState(0),[i,r]=se.useState(!1),a=()=>{n((e+1)%t.images.length)},s=()=>{n((e-1+t.images.length)%t.images.length)},o=()=>{r(!i)};return D.jsxs("div",{className:`itemCard-card ${i?"itemCard-card-expanded":""}`,children:[D.jsx("h4",{children:t.name}),D.jsxs("div",{className:"image-slideshow",children:[D.jsx("button",{onClick:s,children:"<"}),D.jsx("img",{src:t.images[e].src,alt:t.name}),D.jsx("button",{onClick:a,children:">"})]}),D.jsx("p",{children:t.images[e].caption}),D.jsxs("h4",{children:["Conservation Status: ",t.conservationStatus]}),D.jsx("p",{children:t.description}),D.jsxs("div",{className:"MapContainer",children:[D.jsx("img",{src:l3,alt:"Range Map",className:"RangeMap"}),D.jsx("div",{className:"circle"}),D.jsxs("div",{className:"legend",children:[D.jsx("div",{className:"color-circle"}),D.jsx("span",{className:"legend-text",children:"Year Round"})]})]}),D.jsx("div",{className:"ScientificSection",children:E3.map((l,c)=>D.jsx(S3,{domain:l.domain,kingdom:l.kingdom,phylum:l.phylum,class:l.class,order:l.order,family:l.family,genus:l.genus,species:l.species},c))}),D.jsx("button",{onClick:o,children:i?"Hide Sounds":"Show Sounds"}),i&&D.jsx("div",{className:"sound-button-group",children:D.jsx(x3,{sounds:t.sounds})})]})},w3="/assets/cockaded_1-UAxYYvj_.jpg",T3="/assets/cockaded_2-DuqN2r6j.jpg",b3="/assets/cockaded_3-RyKDCDW-.jpg",A3="/assets/cockaded_4-Dg3J_Lzr.jpg",R3="/assets/Calls1-tGC6QN8T.mp3",C3="/assets/Calls2-BcccnM-A.mp3",P3="/assets/Calls3-BepRtBiW.mp3",L3="/assets/Calls4-NNrmulOt.mp3",N3="/assets/Drum1-qXcmrnm7.mp3",D3="/assets/JuvenileCall1-DY1j9Jln.mp3",I3=[{name:"Red-Cockaded Woodpecker",images:[{src:w3,caption:"Red-Cockaded Woodpecker on tree with noticable tags on it's feet"},{src:T3,caption:"Red-Cockaded Woodpecker fluttering its wings near an opening of its nest"},{src:b3,caption:"Illustration of the three Red-Cockaded Woodpeckers drawn by John James Audobon"},{src:A3,caption:"Red-Cockaded Woodpecker sticking its head out of a longleaf pine nest"}],conservationStatus:"Near Threatened",sounds:[{src:R3,callType:"Call 1",date:"March 02, 2007",citation:"Recorded by Martha Fischer / Macaulay Library",duration:"0:21"},{src:C3,callType:"Call 2",date:"May 21, 2012",citation:"Recorded by Andrew Spencer",duration:"0:20"},{src:P3,callType:"Call 3",date:"May 21, 2012",citation:"Recorded by Andrew Spencer",duration:"0:23"},{src:L3,callType:"Call 4",date:"May 02, 1963",citation:"Recorded by Robert C. Stein / Macaulay Library",duration:"0:10"},{src:N3,callType:"Drum 1",date:"April 25, 1982",citation:"Recorded by Rose Ann Rowlett / Macaulay Library",duration:"0:21"},{src:D3,callType:"Juvenile Call 1",date:"June 04, 2017",citation:"Recorded by Paul Marvin / Macaulay Library",duration:"0:12"}]}],U3=({videoUrl:t})=>D.jsx("iframe",{width:"512",height:"332",src:t,allowFullScreen:!0,allow:"encrypted-media",style:{border:0}});function FS(t,e){return function(){return t.apply(e,arguments)}}const{toString:O3}=Object.prototype,{getPrototypeOf:Vp}=Object,Mu=(t=>e=>{const n=O3.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),hi=t=>(t=t.toLowerCase(),e=>Mu(e)===t),wu=t=>e=>typeof e===t,{isArray:Ts}=Array,Lo=wu("undefined");function k3(t){return t!==null&&!Lo(t)&&t.constructor!==null&&!Lo(t.constructor)&&Fn(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const zS=hi("ArrayBuffer");function F3(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&zS(t.buffer),e}const z3=wu("string"),Fn=wu("function"),BS=wu("number"),Tu=t=>t!==null&&typeof t=="object",B3=t=>t===!0||t===!1,lc=t=>{if(Mu(t)!=="object")return!1;const e=Vp(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},H3=hi("Date"),G3=hi("File"),V3=hi("Blob"),W3=hi("FileList"),j3=t=>Tu(t)&&Fn(t.pipe),X3=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||Fn(t.append)&&((e=Mu(t))==="formdata"||e==="object"&&Fn(t.toString)&&t.toString()==="[object FormData]"))},$3=hi("URLSearchParams"),Y3=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function jo(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let i,r;if(typeof t!="object"&&(t=[t]),Ts(t))for(i=0,r=t.length;i<r;i++)e.call(null,t[i],i,t);else{const a=n?Object.getOwnPropertyNames(t):Object.keys(t),s=a.length;let o;for(i=0;i<s;i++)o=a[i],e.call(null,t[o],o,t)}}function HS(t,e){e=e.toLowerCase();const n=Object.keys(t);let i=n.length,r;for(;i-- >0;)if(r=n[i],e===r.toLowerCase())return r;return null}const GS=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,VS=t=>!Lo(t)&&t!==GS;function Mh(){const{caseless:t}=VS(this)&&this||{},e={},n=(i,r)=>{const a=t&&HS(e,r)||r;lc(e[a])&&lc(i)?e[a]=Mh(e[a],i):lc(i)?e[a]=Mh({},i):Ts(i)?e[a]=i.slice():e[a]=i};for(let i=0,r=arguments.length;i<r;i++)arguments[i]&&jo(arguments[i],n);return e}const q3=(t,e,n,{allOwnKeys:i}={})=>(jo(e,(r,a)=>{n&&Fn(r)?t[a]=FS(r,n):t[a]=r},{allOwnKeys:i}),t),K3=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),J3=(t,e,n,i)=>{t.prototype=Object.create(e.prototype,i),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},Z3=(t,e,n,i)=>{let r,a,s;const o={};if(e=e||{},t==null)return e;do{for(r=Object.getOwnPropertyNames(t),a=r.length;a-- >0;)s=r[a],(!i||i(s,t,e))&&!o[s]&&(e[s]=t[s],o[s]=!0);t=n!==!1&&Vp(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},Q3=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const i=t.indexOf(e,n);return i!==-1&&i===n},eD=t=>{if(!t)return null;if(Ts(t))return t;let e=t.length;if(!BS(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},tD=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&Vp(Uint8Array)),nD=(t,e)=>{const i=(t&&t[Symbol.iterator]).call(t);let r;for(;(r=i.next())&&!r.done;){const a=r.value;e.call(t,a[0],a[1])}},iD=(t,e)=>{let n;const i=[];for(;(n=t.exec(e))!==null;)i.push(n);return i},rD=hi("HTMLFormElement"),aD=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,i,r){return i.toUpperCase()+r}),C0=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),sD=hi("RegExp"),WS=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),i={};jo(n,(r,a)=>{let s;(s=e(r,a,t))!==!1&&(i[a]=s||r)}),Object.defineProperties(t,i)},oD=t=>{WS(t,(e,n)=>{if(Fn(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const i=t[n];if(Fn(i)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},lD=(t,e)=>{const n={},i=r=>{r.forEach(a=>{n[a]=!0})};return Ts(t)?i(t):i(String(t).split(e)),n},cD=()=>{},uD=(t,e)=>(t=+t,Number.isFinite(t)?t:e),Xf="abcdefghijklmnopqrstuvwxyz",P0="0123456789",jS={DIGIT:P0,ALPHA:Xf,ALPHA_DIGIT:Xf+Xf.toUpperCase()+P0},fD=(t=16,e=jS.ALPHA_DIGIT)=>{let n="";const{length:i}=e;for(;t--;)n+=e[Math.random()*i|0];return n};function dD(t){return!!(t&&Fn(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const hD=t=>{const e=new Array(10),n=(i,r)=>{if(Tu(i)){if(e.indexOf(i)>=0)return;if(!("toJSON"in i)){e[r]=i;const a=Ts(i)?[]:{};return jo(i,(s,o)=>{const l=n(s,r+1);!Lo(l)&&(a[o]=l)}),e[r]=void 0,a}}return i};return n(t,0)},pD=hi("AsyncFunction"),mD=t=>t&&(Tu(t)||Fn(t))&&Fn(t.then)&&Fn(t.catch),Y={isArray:Ts,isArrayBuffer:zS,isBuffer:k3,isFormData:X3,isArrayBufferView:F3,isString:z3,isNumber:BS,isBoolean:B3,isObject:Tu,isPlainObject:lc,isUndefined:Lo,isDate:H3,isFile:G3,isBlob:V3,isRegExp:sD,isFunction:Fn,isStream:j3,isURLSearchParams:$3,isTypedArray:tD,isFileList:W3,forEach:jo,merge:Mh,extend:q3,trim:Y3,stripBOM:K3,inherits:J3,toFlatObject:Z3,kindOf:Mu,kindOfTest:hi,endsWith:Q3,toArray:eD,forEachEntry:nD,matchAll:iD,isHTMLForm:rD,hasOwnProperty:C0,hasOwnProp:C0,reduceDescriptors:WS,freezeMethods:oD,toObjectSet:lD,toCamelCase:aD,noop:cD,toFiniteNumber:uD,findKey:HS,global:GS,isContextDefined:VS,ALPHABET:jS,generateString:fD,isSpecCompliantForm:dD,toJSONObject:hD,isAsyncFn:pD,isThenable:mD};function Je(t,e,n,i,r){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),i&&(this.request=i),r&&(this.response=r)}Y.inherits(Je,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:Y.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const XS=Je.prototype,$S={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{$S[t]={value:t}});Object.defineProperties(Je,$S);Object.defineProperty(XS,"isAxiosError",{value:!0});Je.from=(t,e,n,i,r,a)=>{const s=Object.create(XS);return Y.toFlatObject(t,s,function(l){return l!==Error.prototype},o=>o!=="isAxiosError"),Je.call(s,t.message,e,n,i,r),s.cause=t,s.name=t.name,a&&Object.assign(s,a),s};const gD=null;function wh(t){return Y.isPlainObject(t)||Y.isArray(t)}function YS(t){return Y.endsWith(t,"[]")?t.slice(0,-2):t}function L0(t,e,n){return t?t.concat(e).map(function(r,a){return r=YS(r),!n&&a?"["+r+"]":r}).join(n?".":""):e}function vD(t){return Y.isArray(t)&&!t.some(wh)}const _D=Y.toFlatObject(Y,{},null,function(e){return/^is[A-Z]/.test(e)});function bu(t,e,n){if(!Y.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=Y.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(y,p){return!Y.isUndefined(p[y])});const i=n.metaTokens,r=n.visitor||u,a=n.dots,s=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&Y.isSpecCompliantForm(e);if(!Y.isFunction(r))throw new TypeError("visitor must be a function");function c(g){if(g===null)return"";if(Y.isDate(g))return g.toISOString();if(!l&&Y.isBlob(g))throw new Je("Blob is not supported. Use a Buffer instead.");return Y.isArrayBuffer(g)||Y.isTypedArray(g)?l&&typeof Blob=="function"?new Blob([g]):Buffer.from(g):g}function u(g,y,p){let d=g;if(g&&!p&&typeof g=="object"){if(Y.endsWith(y,"{}"))y=i?y:y.slice(0,-2),g=JSON.stringify(g);else if(Y.isArray(g)&&vD(g)||(Y.isFileList(g)||Y.endsWith(y,"[]"))&&(d=Y.toArray(g)))return y=YS(y),d.forEach(function(v,S){!(Y.isUndefined(v)||v===null)&&e.append(s===!0?L0([y],S,a):s===null?y:y+"[]",c(v))}),!1}return wh(g)?!0:(e.append(L0(p,y,a),c(g)),!1)}const f=[],h=Object.assign(_D,{defaultVisitor:u,convertValue:c,isVisitable:wh});function m(g,y){if(!Y.isUndefined(g)){if(f.indexOf(g)!==-1)throw Error("Circular reference detected in "+y.join("."));f.push(g),Y.forEach(g,function(d,_){(!(Y.isUndefined(d)||d===null)&&r.call(e,d,Y.isString(_)?_.trim():_,y,h))===!0&&m(d,y?y.concat(_):[_])}),f.pop()}}if(!Y.isObject(t))throw new TypeError("data must be an object");return m(t),e}function N0(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(i){return e[i]})}function Wp(t,e){this._pairs=[],t&&bu(t,this,e)}const qS=Wp.prototype;qS.append=function(e,n){this._pairs.push([e,n])};qS.toString=function(e){const n=e?function(i){return e.call(this,i,N0)}:N0;return this._pairs.map(function(r){return n(r[0])+"="+n(r[1])},"").join("&")};function yD(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function KS(t,e,n){if(!e)return t;const i=n&&n.encode||yD,r=n&&n.serialize;let a;if(r?a=r(e,n):a=Y.isURLSearchParams(e)?e.toString():new Wp(e,n).toString(i),a){const s=t.indexOf("#");s!==-1&&(t=t.slice(0,s)),t+=(t.indexOf("?")===-1?"?":"&")+a}return t}class D0{constructor(){this.handlers=[]}use(e,n,i){return this.handlers.push({fulfilled:e,rejected:n,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){Y.forEach(this.handlers,function(i){i!==null&&e(i)})}}const JS={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},xD=typeof URLSearchParams<"u"?URLSearchParams:Wp,SD=typeof FormData<"u"?FormData:null,ED=typeof Blob<"u"?Blob:null,MD={isBrowser:!0,classes:{URLSearchParams:xD,FormData:SD,Blob:ED},protocols:["http","https","file","blob","url","data"]},ZS=typeof window<"u"&&typeof document<"u",wD=(t=>ZS&&["ReactNative","NativeScript","NS"].indexOf(t)<0)(typeof navigator<"u"&&navigator.product),TD=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",bD=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:ZS,hasStandardBrowserEnv:wD,hasStandardBrowserWebWorkerEnv:TD},Symbol.toStringTag,{value:"Module"})),ci={...bD,...MD};function AD(t,e){return bu(t,new ci.classes.URLSearchParams,Object.assign({visitor:function(n,i,r,a){return ci.isNode&&Y.isBuffer(n)?(this.append(i,n.toString("base64")),!1):a.defaultVisitor.apply(this,arguments)}},e))}function RD(t){return Y.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function CD(t){const e={},n=Object.keys(t);let i;const r=n.length;let a;for(i=0;i<r;i++)a=n[i],e[a]=t[a];return e}function QS(t){function e(n,i,r,a){let s=n[a++];if(s==="__proto__")return!0;const o=Number.isFinite(+s),l=a>=n.length;return s=!s&&Y.isArray(r)?r.length:s,l?(Y.hasOwnProp(r,s)?r[s]=[r[s],i]:r[s]=i,!o):((!r[s]||!Y.isObject(r[s]))&&(r[s]=[]),e(n,i,r[s],a)&&Y.isArray(r[s])&&(r[s]=CD(r[s])),!o)}if(Y.isFormData(t)&&Y.isFunction(t.entries)){const n={};return Y.forEachEntry(t,(i,r)=>{e(RD(i),r,n,0)}),n}return null}function PD(t,e,n){if(Y.isString(t))try{return(e||JSON.parse)(t),Y.trim(t)}catch(i){if(i.name!=="SyntaxError")throw i}return(n||JSON.stringify)(t)}const jp={transitional:JS,adapter:["xhr","http"],transformRequest:[function(e,n){const i=n.getContentType()||"",r=i.indexOf("application/json")>-1,a=Y.isObject(e);if(a&&Y.isHTMLForm(e)&&(e=new FormData(e)),Y.isFormData(e))return r?JSON.stringify(QS(e)):e;if(Y.isArrayBuffer(e)||Y.isBuffer(e)||Y.isStream(e)||Y.isFile(e)||Y.isBlob(e))return e;if(Y.isArrayBufferView(e))return e.buffer;if(Y.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let o;if(a){if(i.indexOf("application/x-www-form-urlencoded")>-1)return AD(e,this.formSerializer).toString();if((o=Y.isFileList(e))||i.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return bu(o?{"files[]":e}:e,l&&new l,this.formSerializer)}}return a||r?(n.setContentType("application/json",!1),PD(e)):e}],transformResponse:[function(e){const n=this.transitional||jp.transitional,i=n&&n.forcedJSONParsing,r=this.responseType==="json";if(e&&Y.isString(e)&&(i&&!this.responseType||r)){const s=!(n&&n.silentJSONParsing)&&r;try{return JSON.parse(e)}catch(o){if(s)throw o.name==="SyntaxError"?Je.from(o,Je.ERR_BAD_RESPONSE,this,null,this.response):o}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ci.classes.FormData,Blob:ci.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};Y.forEach(["delete","get","head","post","put","patch"],t=>{jp.headers[t]={}});const Xp=jp,LD=Y.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),ND=t=>{const e={};let n,i,r;return t&&t.split(`
`).forEach(function(s){r=s.indexOf(":"),n=s.substring(0,r).trim().toLowerCase(),i=s.substring(r+1).trim(),!(!n||e[n]&&LD[n])&&(n==="set-cookie"?e[n]?e[n].push(i):e[n]=[i]:e[n]=e[n]?e[n]+", "+i:i)}),e},I0=Symbol("internals");function Hs(t){return t&&String(t).trim().toLowerCase()}function cc(t){return t===!1||t==null?t:Y.isArray(t)?t.map(cc):String(t)}function DD(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=n.exec(t);)e[i[1]]=i[2];return e}const ID=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function $f(t,e,n,i,r){if(Y.isFunction(i))return i.call(this,e,n);if(r&&(e=n),!!Y.isString(e)){if(Y.isString(i))return e.indexOf(i)!==-1;if(Y.isRegExp(i))return i.test(e)}}function UD(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,i)=>n.toUpperCase()+i)}function OD(t,e){const n=Y.toCamelCase(" "+e);["get","set","has"].forEach(i=>{Object.defineProperty(t,i+n,{value:function(r,a,s){return this[i].call(this,e,r,a,s)},configurable:!0})})}class Au{constructor(e){e&&this.set(e)}set(e,n,i){const r=this;function a(o,l,c){const u=Hs(l);if(!u)throw new Error("header name must be a non-empty string");const f=Y.findKey(r,u);(!f||r[f]===void 0||c===!0||c===void 0&&r[f]!==!1)&&(r[f||l]=cc(o))}const s=(o,l)=>Y.forEach(o,(c,u)=>a(c,u,l));return Y.isPlainObject(e)||e instanceof this.constructor?s(e,n):Y.isString(e)&&(e=e.trim())&&!ID(e)?s(ND(e),n):e!=null&&a(n,e,i),this}get(e,n){if(e=Hs(e),e){const i=Y.findKey(this,e);if(i){const r=this[i];if(!n)return r;if(n===!0)return DD(r);if(Y.isFunction(n))return n.call(this,r,i);if(Y.isRegExp(n))return n.exec(r);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=Hs(e),e){const i=Y.findKey(this,e);return!!(i&&this[i]!==void 0&&(!n||$f(this,this[i],i,n)))}return!1}delete(e,n){const i=this;let r=!1;function a(s){if(s=Hs(s),s){const o=Y.findKey(i,s);o&&(!n||$f(i,i[o],o,n))&&(delete i[o],r=!0)}}return Y.isArray(e)?e.forEach(a):a(e),r}clear(e){const n=Object.keys(this);let i=n.length,r=!1;for(;i--;){const a=n[i];(!e||$f(this,this[a],a,e,!0))&&(delete this[a],r=!0)}return r}normalize(e){const n=this,i={};return Y.forEach(this,(r,a)=>{const s=Y.findKey(i,a);if(s){n[s]=cc(r),delete n[a];return}const o=e?UD(a):String(a).trim();o!==a&&delete n[a],n[o]=cc(r),i[o]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return Y.forEach(this,(i,r)=>{i!=null&&i!==!1&&(n[r]=e&&Y.isArray(i)?i.join(", "):i)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const i=new this(e);return n.forEach(r=>i.set(r)),i}static accessor(e){const i=(this[I0]=this[I0]={accessors:{}}).accessors,r=this.prototype;function a(s){const o=Hs(s);i[o]||(OD(r,s),i[o]=!0)}return Y.isArray(e)?e.forEach(a):a(e),this}}Au.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);Y.reduceDescriptors(Au.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(i){this[n]=i}}});Y.freezeMethods(Au);const Pi=Au;function Yf(t,e){const n=this||Xp,i=e||n,r=Pi.from(i.headers);let a=i.data;return Y.forEach(t,function(o){a=o.call(n,a,r.normalize(),e?e.status:void 0)}),r.normalize(),a}function e1(t){return!!(t&&t.__CANCEL__)}function Xo(t,e,n){Je.call(this,t??"canceled",Je.ERR_CANCELED,e,n),this.name="CanceledError"}Y.inherits(Xo,Je,{__CANCEL__:!0});function kD(t,e,n){const i=n.config.validateStatus;!n.status||!i||i(n.status)?t(n):e(new Je("Request failed with status code "+n.status,[Je.ERR_BAD_REQUEST,Je.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const FD=ci.hasStandardBrowserEnv?{write(t,e,n,i,r,a){const s=[t+"="+encodeURIComponent(e)];Y.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),Y.isString(i)&&s.push("path="+i),Y.isString(r)&&s.push("domain="+r),a===!0&&s.push("secure"),document.cookie=s.join("; ")},read(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function zD(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function BD(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function t1(t,e){return t&&!zD(e)?BD(t,e):e}const HD=ci.hasStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let i;function r(a){let s=a;return e&&(n.setAttribute("href",s),s=n.href),n.setAttribute("href",s),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return i=r(window.location.href),function(s){const o=Y.isString(s)?r(s):s;return o.protocol===i.protocol&&o.host===i.host}}():function(){return function(){return!0}}();function GD(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function VD(t,e){t=t||10;const n=new Array(t),i=new Array(t);let r=0,a=0,s;return e=e!==void 0?e:1e3,function(l){const c=Date.now(),u=i[a];s||(s=c),n[r]=l,i[r]=c;let f=a,h=0;for(;f!==r;)h+=n[f++],f=f%t;if(r=(r+1)%t,r===a&&(a=(a+1)%t),c-s<e)return;const m=u&&c-u;return m?Math.round(h*1e3/m):void 0}}function U0(t,e){let n=0;const i=VD(50,250);return r=>{const a=r.loaded,s=r.lengthComputable?r.total:void 0,o=a-n,l=i(o),c=a<=s;n=a;const u={loaded:a,total:s,progress:s?a/s:void 0,bytes:o,rate:l||void 0,estimated:l&&s&&c?(s-a)/l:void 0,event:r};u[e?"download":"upload"]=!0,t(u)}}const WD=typeof XMLHttpRequest<"u",jD=WD&&function(t){return new Promise(function(n,i){let r=t.data;const a=Pi.from(t.headers).normalize();let{responseType:s,withXSRFToken:o}=t,l;function c(){t.cancelToken&&t.cancelToken.unsubscribe(l),t.signal&&t.signal.removeEventListener("abort",l)}let u;if(Y.isFormData(r)){if(ci.hasStandardBrowserEnv||ci.hasStandardBrowserWebWorkerEnv)a.setContentType(!1);else if((u=a.getContentType())!==!1){const[y,...p]=u?u.split(";").map(d=>d.trim()).filter(Boolean):[];a.setContentType([y||"multipart/form-data",...p].join("; "))}}let f=new XMLHttpRequest;if(t.auth){const y=t.auth.username||"",p=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";a.set("Authorization","Basic "+btoa(y+":"+p))}const h=t1(t.baseURL,t.url);f.open(t.method.toUpperCase(),KS(h,t.params,t.paramsSerializer),!0),f.timeout=t.timeout;function m(){if(!f)return;const y=Pi.from("getAllResponseHeaders"in f&&f.getAllResponseHeaders()),d={data:!s||s==="text"||s==="json"?f.responseText:f.response,status:f.status,statusText:f.statusText,headers:y,config:t,request:f};kD(function(v){n(v),c()},function(v){i(v),c()},d),f=null}if("onloadend"in f?f.onloadend=m:f.onreadystatechange=function(){!f||f.readyState!==4||f.status===0&&!(f.responseURL&&f.responseURL.indexOf("file:")===0)||setTimeout(m)},f.onabort=function(){f&&(i(new Je("Request aborted",Je.ECONNABORTED,t,f)),f=null)},f.onerror=function(){i(new Je("Network Error",Je.ERR_NETWORK,t,f)),f=null},f.ontimeout=function(){let p=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded";const d=t.transitional||JS;t.timeoutErrorMessage&&(p=t.timeoutErrorMessage),i(new Je(p,d.clarifyTimeoutError?Je.ETIMEDOUT:Je.ECONNABORTED,t,f)),f=null},ci.hasStandardBrowserEnv&&(o&&Y.isFunction(o)&&(o=o(t)),o||o!==!1&&HD(h))){const y=t.xsrfHeaderName&&t.xsrfCookieName&&FD.read(t.xsrfCookieName);y&&a.set(t.xsrfHeaderName,y)}r===void 0&&a.setContentType(null),"setRequestHeader"in f&&Y.forEach(a.toJSON(),function(p,d){f.setRequestHeader(d,p)}),Y.isUndefined(t.withCredentials)||(f.withCredentials=!!t.withCredentials),s&&s!=="json"&&(f.responseType=t.responseType),typeof t.onDownloadProgress=="function"&&f.addEventListener("progress",U0(t.onDownloadProgress,!0)),typeof t.onUploadProgress=="function"&&f.upload&&f.upload.addEventListener("progress",U0(t.onUploadProgress)),(t.cancelToken||t.signal)&&(l=y=>{f&&(i(!y||y.type?new Xo(null,t,f):y),f.abort(),f=null)},t.cancelToken&&t.cancelToken.subscribe(l),t.signal&&(t.signal.aborted?l():t.signal.addEventListener("abort",l)));const g=GD(h);if(g&&ci.protocols.indexOf(g)===-1){i(new Je("Unsupported protocol "+g+":",Je.ERR_BAD_REQUEST,t));return}f.send(r||null)})},Th={http:gD,xhr:jD};Y.forEach(Th,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const O0=t=>`- ${t}`,XD=t=>Y.isFunction(t)||t===null||t===!1,n1={getAdapter:t=>{t=Y.isArray(t)?t:[t];const{length:e}=t;let n,i;const r={};for(let a=0;a<e;a++){n=t[a];let s;if(i=n,!XD(n)&&(i=Th[(s=String(n)).toLowerCase()],i===void 0))throw new Je(`Unknown adapter '${s}'`);if(i)break;r[s||"#"+a]=i}if(!i){const a=Object.entries(r).map(([o,l])=>`adapter ${o} `+(l===!1?"is not supported by the environment":"is not available in the build"));let s=e?a.length>1?`since :
`+a.map(O0).join(`
`):" "+O0(a[0]):"as no adapter specified";throw new Je("There is no suitable adapter to dispatch the request "+s,"ERR_NOT_SUPPORT")}return i},adapters:Th};function qf(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new Xo(null,t)}function k0(t){return qf(t),t.headers=Pi.from(t.headers),t.data=Yf.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),n1.getAdapter(t.adapter||Xp.adapter)(t).then(function(i){return qf(t),i.data=Yf.call(t,t.transformResponse,i),i.headers=Pi.from(i.headers),i},function(i){return e1(i)||(qf(t),i&&i.response&&(i.response.data=Yf.call(t,t.transformResponse,i.response),i.response.headers=Pi.from(i.response.headers))),Promise.reject(i)})}const F0=t=>t instanceof Pi?t.toJSON():t;function ps(t,e){e=e||{};const n={};function i(c,u,f){return Y.isPlainObject(c)&&Y.isPlainObject(u)?Y.merge.call({caseless:f},c,u):Y.isPlainObject(u)?Y.merge({},u):Y.isArray(u)?u.slice():u}function r(c,u,f){if(Y.isUndefined(u)){if(!Y.isUndefined(c))return i(void 0,c,f)}else return i(c,u,f)}function a(c,u){if(!Y.isUndefined(u))return i(void 0,u)}function s(c,u){if(Y.isUndefined(u)){if(!Y.isUndefined(c))return i(void 0,c)}else return i(void 0,u)}function o(c,u,f){if(f in e)return i(c,u);if(f in t)return i(void 0,c)}const l={url:a,method:a,data:a,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,withXSRFToken:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:o,headers:(c,u)=>r(F0(c),F0(u),!0)};return Y.forEach(Object.keys(Object.assign({},t,e)),function(u){const f=l[u]||r,h=f(t[u],e[u],u);Y.isUndefined(h)&&f!==o||(n[u]=h)}),n}const i1="1.6.7",$p={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{$p[t]=function(i){return typeof i===t||"a"+(e<1?"n ":" ")+t}});const z0={};$p.transitional=function(e,n,i){function r(a,s){return"[Axios v"+i1+"] Transitional option '"+a+"'"+s+(i?". "+i:"")}return(a,s,o)=>{if(e===!1)throw new Je(r(s," has been removed"+(n?" in "+n:"")),Je.ERR_DEPRECATED);return n&&!z0[s]&&(z0[s]=!0,console.warn(r(s," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(a,s,o):!0}};function $D(t,e,n){if(typeof t!="object")throw new Je("options must be an object",Je.ERR_BAD_OPTION_VALUE);const i=Object.keys(t);let r=i.length;for(;r-- >0;){const a=i[r],s=e[a];if(s){const o=t[a],l=o===void 0||s(o,a,t);if(l!==!0)throw new Je("option "+a+" must be "+l,Je.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new Je("Unknown option "+a,Je.ERR_BAD_OPTION)}}const bh={assertOptions:$D,validators:$p},Ki=bh.validators;class Yc{constructor(e){this.defaults=e,this.interceptors={request:new D0,response:new D0}}async request(e,n){try{return await this._request(e,n)}catch(i){if(i instanceof Error){let r;Error.captureStackTrace?Error.captureStackTrace(r={}):r=new Error;const a=r.stack?r.stack.replace(/^.+\n/,""):"";i.stack?a&&!String(i.stack).endsWith(a.replace(/^.+\n.+\n/,""))&&(i.stack+=`
`+a):i.stack=a}throw i}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=ps(this.defaults,n);const{transitional:i,paramsSerializer:r,headers:a}=n;i!==void 0&&bh.assertOptions(i,{silentJSONParsing:Ki.transitional(Ki.boolean),forcedJSONParsing:Ki.transitional(Ki.boolean),clarifyTimeoutError:Ki.transitional(Ki.boolean)},!1),r!=null&&(Y.isFunction(r)?n.paramsSerializer={serialize:r}:bh.assertOptions(r,{encode:Ki.function,serialize:Ki.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let s=a&&Y.merge(a.common,a[n.method]);a&&Y.forEach(["delete","get","head","post","put","patch","common"],g=>{delete a[g]}),n.headers=Pi.concat(s,a);const o=[];let l=!0;this.interceptors.request.forEach(function(y){typeof y.runWhen=="function"&&y.runWhen(n)===!1||(l=l&&y.synchronous,o.unshift(y.fulfilled,y.rejected))});const c=[];this.interceptors.response.forEach(function(y){c.push(y.fulfilled,y.rejected)});let u,f=0,h;if(!l){const g=[k0.bind(this),void 0];for(g.unshift.apply(g,o),g.push.apply(g,c),h=g.length,u=Promise.resolve(n);f<h;)u=u.then(g[f++],g[f++]);return u}h=o.length;let m=n;for(f=0;f<h;){const g=o[f++],y=o[f++];try{m=g(m)}catch(p){y.call(this,p);break}}try{u=k0.call(this,m)}catch(g){return Promise.reject(g)}for(f=0,h=c.length;f<h;)u=u.then(c[f++],c[f++]);return u}getUri(e){e=ps(this.defaults,e);const n=t1(e.baseURL,e.url);return KS(n,e.params,e.paramsSerializer)}}Y.forEach(["delete","get","head","options"],function(e){Yc.prototype[e]=function(n,i){return this.request(ps(i||{},{method:e,url:n,data:(i||{}).data}))}});Y.forEach(["post","put","patch"],function(e){function n(i){return function(a,s,o){return this.request(ps(o||{},{method:e,headers:i?{"Content-Type":"multipart/form-data"}:{},url:a,data:s}))}}Yc.prototype[e]=n(),Yc.prototype[e+"Form"]=n(!0)});const uc=Yc;class Yp{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(a){n=a});const i=this;this.promise.then(r=>{if(!i._listeners)return;let a=i._listeners.length;for(;a-- >0;)i._listeners[a](r);i._listeners=null}),this.promise.then=r=>{let a;const s=new Promise(o=>{i.subscribe(o),a=o}).then(r);return s.cancel=function(){i.unsubscribe(a)},s},e(function(a,s,o){i.reason||(i.reason=new Xo(a,s,o),n(i.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}static source(){let e;return{token:new Yp(function(r){e=r}),cancel:e}}}const YD=Yp;function qD(t){return function(n){return t.apply(null,n)}}function KD(t){return Y.isObject(t)&&t.isAxiosError===!0}const Ah={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Ah).forEach(([t,e])=>{Ah[e]=t});const JD=Ah;function r1(t){const e=new uc(t),n=FS(uc.prototype.request,e);return Y.extend(n,uc.prototype,e,{allOwnKeys:!0}),Y.extend(n,e,null,{allOwnKeys:!0}),n.create=function(r){return r1(ps(t,r))},n}const Tt=r1(Xp);Tt.Axios=uc;Tt.CanceledError=Xo;Tt.CancelToken=YD;Tt.isCancel=e1;Tt.VERSION=i1;Tt.toFormData=bu;Tt.AxiosError=Je;Tt.Cancel=Tt.CanceledError;Tt.all=function(e){return Promise.all(e)};Tt.spread=qD;Tt.isAxiosError=KD;Tt.mergeConfig=ps;Tt.AxiosHeaders=Pi;Tt.formToJSON=t=>QS(Y.isHTMLForm(t)?new FormData(t):t);Tt.getAdapter=n1.getAdapter;Tt.HttpStatusCode=JD;Tt.default=Tt;const ZD=()=>{const[t,e]=se.useState(""),[n,i]=se.useState(""),[r,a]=se.useState([]);se.useEffect(()=>{Tt.get("/api/comments").then(o=>a(o.data)).catch(o=>console.error(o))},[]);const s=o=>{o.preventDefault();const l={name:t,comment:n};Tt.post("/api/comments",l).then(c=>{a(u=>[...u,c.data]),e(""),i("")}).catch(c=>console.error(c))};return D.jsxs("div",{className:"comment-section",children:[D.jsxs("form",{onSubmit:s,children:[D.jsxs("label",{children:["Name",D.jsx("input",{type:"text",value:t,onChange:o=>e(o.target.value),required:!0})]}),D.jsxs("div",{className:"comment-box",children:[D.jsxs("label",{children:["Comment",D.jsx("textarea",{value:n,onChange:o=>i(o.target.value),required:!0})]}),D.jsx("div",{className:"button-container",children:D.jsx("button",{type:"submit",className:"submit-button-left",children:D.jsx(Ss,{icon:Lb})})})]})]}),D.jsx("div",{className:"comments",children:Array.isArray(r)&&r.map((o,l)=>D.jsxs("div",{className:"comment",children:[D.jsx("h2",{children:o.name}),D.jsx("p",{children:o.comment})]},l))})]})},QD=()=>{const t=se.useRef(b0.map(()=>se.createRef()));return D.jsxs(D.Fragment,{children:[D.jsx("div",{className:"smallDeviceNavbar",children:D.jsx(XN,{})}),D.jsx("div",{className:"SpaceBack",children:D.jsx(DS,{})}),D.jsxs("div",{className:"AligningContainer",children:[D.jsx(qN,{}),D.jsx(o3,{name:"Red-Cockaded Woodpecker"}),D.jsxs("div",{className:"container__briefing__itemcard",children:[I3.map((e,n)=>D.jsx(M3,{item:e},n)),D.jsxs("div",{className:"containerContent",children:[b0.map((e,n)=>D.jsx(KN,{ref:t.current[n],title:e.title,text:e.text,figure:e.figure,break:e.break},n)),D.jsxs("div",{className:"VideoPlayer1",children:[D.jsx("h3",{children:"Informational video from PBS"}),D.jsx(U3,{videoUrl:"https://player.pbs.org/viralplayer/3066847518/"})]})]})]}),D.jsx(ZD,{}),D.jsx(WN,{referencesList:jN})]}),D.jsx("div",{className:"RedCockadedWoodpeckerFooter",children:D.jsx(Qx,{})})]})};function eI(){const[t,e]=se.useState(!0);return D.jsxs(Pw,{children:[t&&D.jsx(_g,{}),D.jsxs(Aw,{children:[D.jsx(rc,{path:"/loading",element:D.jsx(_g,{})}),D.jsx(rc,{path:"/",element:D.jsx(VN,{isLoading:t,setIsLoading:e})}),D.jsx(rc,{path:"/red-cockaded-woodpecker",element:D.jsx(QD,{})})]})]})}Kf.createRoot(document.getElementById("root")).render(D.jsx(Un.StrictMode,{children:D.jsx(eI,{})}));
