!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("d3-selection"),require("d3-zoom"),require("dagre-d3"),require("classnames"),require("d3-shape")):"function"==typeof define&&define.amd?define(["react","d3-selection","d3-zoom","dagre-d3","classnames","d3-shape"],t):"object"==typeof exports?exports.ReactAwsXRayServiceMap=t(require("react"),require("d3-selection"),require("d3-zoom"),require("dagre-d3"),require("classnames"),require("d3-shape")):e.ReactAwsXRayServiceMap=t(e.React,e["d3-selection"],e["d3-zoom"],e["dagre-d3"],e.classnames,e["d3-shape"])}(window,function(e,t,n,r,o,a){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=20)}([function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t){e.exports=n},function(e,t){e.exports=r},function(e,t){e.exports=o},function(e,t){e.exports=a},function(e,t,n){"use strict";e.exports=n(7)},function(e,t,n){"use strict";
/** @license React v16.4.2
 * react-dom-server.browser.production.min.js
 *
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(8),o=n(9),a=n(0),i=n(10),s=n(11),c=n(12),l=n(14);function u(e){for(var t=arguments.length-1,n="https://reactjs.org/docs/error-decoder.html?invariant="+e,o=0;o<t;o++)n+="&args[]="+encodeURIComponent(arguments[o+1]);r(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",n)}var f="function"==typeof Symbol&&Symbol.for,p=f?Symbol.for("react.portal"):60106,d=f?Symbol.for("react.fragment"):60107,h=f?Symbol.for("react.strict_mode"):60108,m=f?Symbol.for("react.profiler"):60114,y=f?Symbol.for("react.provider"):60109,v=f?Symbol.for("react.context"):60110,g=f?Symbol.for("react.async_mode"):60111,w=f?Symbol.for("react.forward_ref"):60112,b=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,x=Object.prototype.hasOwnProperty,k={},S={};function O(e){return!!x.call(S,e)||!x.call(k,e)&&(b.test(e)?S[e]=!0:(k[e]=!0,!1))}function C(e,t,n,r){if(null===t||void 0===t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function E(e,t,n,r,o){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t}var j={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){j[e]=new E(e,0,!1,e,null)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];j[t]=new E(t,1,!1,e[1],null)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){j[e]=new E(e,2,!1,e.toLowerCase(),null)}),["autoReverse","externalResourcesRequired","preserveAlpha"].forEach(function(e){j[e]=new E(e,2,!1,e,null)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){j[e]=new E(e,3,!1,e.toLowerCase(),null)}),["checked","multiple","muted","selected"].forEach(function(e){j[e]=new E(e,3,!0,e.toLowerCase(),null)}),["capture","download"].forEach(function(e){j[e]=new E(e,4,!1,e.toLowerCase(),null)}),["cols","rows","size","span"].forEach(function(e){j[e]=new E(e,6,!1,e.toLowerCase(),null)}),["rowSpan","start"].forEach(function(e){j[e]=new E(e,5,!1,e.toLowerCase(),null)});var F=/[\-:]([a-z])/g;function N(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(F,N);j[t]=new E(t,1,!1,e,null)}),"xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(F,N);j[t]=new E(t,1,!1,e,"http://www.w3.org/1999/xlink")}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(F,N);j[t]=new E(t,1,!1,e,"http://www.w3.org/XML/1998/namespace")}),j.tabIndex=new E("tabIndex",1,!1,"tabindex",null);var _=/["'&<>]/;function M(e){if("boolean"==typeof e||"number"==typeof e)return""+e;e=""+e;var t=_.exec(e);if(t){var n,r="",o=0;for(n=t.index;n<e.length;n++){switch(e.charCodeAt(n)){case 34:t="&quot;";break;case 38:t="&amp;";break;case 39:t="&#x27;";break;case 60:t="&lt;";break;case 62:t="&gt;";break;default:continue}o!==n&&(r+=e.substring(o,n)),o=n+1,r+=t}e=o!==n?r+e.substring(o,n):r}return e}var I={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};function R(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}var T={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0},A=o({menuitem:!0},T),P={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},D=["Webkit","ms","Moz","O"];Object.keys(P).forEach(function(e){D.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),P[t]=P[e]})});var L=a.Children.toArray,U=i.thatReturns("");i.thatReturns("");var q={listing:!0,pre:!0,textarea:!0};function z(e){return"string"==typeof e?e:"function"==typeof e?e.displayName||e.name:null}var V=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,W={},B=l(function(e){return c(e)});var $=Object.prototype.hasOwnProperty,G={children:null,dangerouslySetInnerHTML:null,suppressContentEditableWarning:null,suppressHydrationWarning:null};function H(e,t){void 0===e&&u("152",z(t)||"Component")}function Z(e,t){function n(n,r){var a=function(e,t){if(e=e.contextTypes){var n,r={};for(n in e)r[n]=t[n];t=r}else t=s;return t}(r,t),i=[],c=!1,l={isMounted:function(){return!1},enqueueForceUpdate:function(){if(null===i)return null},enqueueReplaceState:function(e,t){c=!0,i=[t]},enqueueSetState:function(e,t){if(null===i)return null;i.push(t)}},f=void 0;if(r.prototype&&r.prototype.isReactComponent){if(f=new r(n.props,a,l),"function"==typeof r.getDerivedStateFromProps){var p=r.getDerivedStateFromProps.call(null,n.props,f.state);null!=p&&(f.state=o({},f.state,p))}}else if(null==(f=r(n.props,a,l))||null==f.render)return void H(e=f,r);if(f.props=n.props,f.context=a,f.updater=l,void 0===(l=f.state)&&(f.state=l=null),"function"==typeof f.UNSAFE_componentWillMount||"function"==typeof f.componentWillMount)if("function"==typeof f.componentWillMount&&"function"!=typeof r.getDerivedStateFromProps&&f.componentWillMount(),"function"==typeof f.UNSAFE_componentWillMount&&"function"!=typeof r.getDerivedStateFromProps&&f.UNSAFE_componentWillMount(),i.length){l=i;var d=c;if(i=null,c=!1,d&&1===l.length)f.state=l[0];else{p=d?l[0]:f.state;var h=!0;for(d=d?1:0;d<l.length;d++){var m=l[d];null!=(m="function"==typeof m?m.call(f,p,n.props,a):m)&&(h?(h=!1,p=o({},p,m)):o(p,m))}f.state=p}}else i=null;if(H(e=f.render(),r),n=void 0,"function"==typeof f.getChildContext&&"object"==typeof(a=r.childContextTypes))for(var y in n=f.getChildContext())y in a||u("108",z(r)||"Unknown",y);n&&(t=o({},t,n))}for(;a.isValidElement(e);){var r=e,i=r.type;if("function"!=typeof i)break;n(r,i)}return{child:e,context:t}}var J=function(){function e(t,n){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function");a.isValidElement(t)?t.type!==d?t=[t]:(t=t.props.children,t=a.isValidElement(t)?[t]:L(t)):t=L(t),this.stack=[{type:null,domNamespace:I.html,children:t,childIndex:0,context:s,footer:""}],this.exhausted=!1,this.currentSelectValue=null,this.previousWasTextNode=!1,this.makeStaticMarkup=n,this.contextIndex=-1,this.contextStack=[],this.contextValueStack=[]}return e.prototype.pushProvider=function(e){var t=++this.contextIndex,n=e.type._context,r=n._currentValue;this.contextStack[t]=n,this.contextValueStack[t]=r,n._currentValue=e.props.value},e.prototype.popProvider=function(){var e=this.contextIndex,t=this.contextStack[e],n=this.contextValueStack[e];this.contextStack[e]=null,this.contextValueStack[e]=null,this.contextIndex--,t._currentValue=n},e.prototype.read=function(e){if(this.exhausted)return null;for(var t="";t.length<e;){if(0===this.stack.length){this.exhausted=!0;break}var n=this.stack[this.stack.length-1];if(n.childIndex>=n.children.length){var r=n.footer;t+=r,""!==r&&(this.previousWasTextNode=!1),this.stack.pop(),"select"===n.type?this.currentSelectValue=null:null!=n.type&&null!=n.type.type&&n.type.type.$$typeof===y&&this.popProvider(n.type)}else r=n.children[n.childIndex++],t+=this.render(r,n.context,n.domNamespace)}return t},e.prototype.render=function(e,t,n){if("string"==typeof e||"number"==typeof e)return""===(n=""+e)?"":this.makeStaticMarkup?M(n):this.previousWasTextNode?"\x3c!-- --\x3e"+M(n):(this.previousWasTextNode=!0,M(n));if(e=(t=Z(e,t)).child,t=t.context,null===e||!1===e)return"";if(!a.isValidElement(e)){if(null!=e&&null!=e.$$typeof){var r=e.$$typeof;r===p&&u("257"),u("258",r.toString())}return e=L(e),this.stack.push({type:null,domNamespace:n,children:e,childIndex:0,context:t,footer:""}),""}if("string"==typeof(r=e.type))return this.renderDOM(e,t,n);switch(r){case h:case g:case m:case d:return e=L(e.props.children),this.stack.push({type:null,domNamespace:n,children:e,childIndex:0,context:t,footer:""}),""}if("object"==typeof r&&null!==r)switch(r.$$typeof){case w:return e=L(r.render(e.props,e.ref)),this.stack.push({type:null,domNamespace:n,children:e,childIndex:0,context:t,footer:""}),"";case y:return n={type:e,domNamespace:n,children:r=L(e.props.children),childIndex:0,context:t,footer:""},this.pushProvider(e),this.stack.push(n),"";case v:return r=L(e.props.children(e.type._currentValue)),this.stack.push({type:e,domNamespace:n,children:r,childIndex:0,context:t,footer:""}),""}u("130",null==r?r:typeof r,"")},e.prototype.renderDOM=function(e,t,n){var r=e.type.toLowerCase();n===I.html&&R(r),W.hasOwnProperty(r)||(V.test(r)||u("65",r),W[r]=!0);var i=e.props;if("input"===r)i=o({type:void 0},i,{defaultChecked:void 0,defaultValue:void 0,value:null!=i.value?i.value:i.defaultValue,checked:null!=i.checked?i.checked:i.defaultChecked});else if("textarea"===r){var s=i.value;if(null==s){s=i.defaultValue;var c=i.children;null!=c&&(null!=s&&u("92"),Array.isArray(c)&&(1>=c.length||u("93"),c=c[0]),s=""+c),null==s&&(s="")}i=o({},i,{value:void 0,children:""+s})}else if("select"===r)this.currentSelectValue=null!=i.value?i.value:i.defaultValue,i=o({},i,{value:void 0});else if("option"===r){c=this.currentSelectValue;var l=function(e){var t="";return a.Children.forEach(e,function(e){null==e||"string"!=typeof e&&"number"!=typeof e||(t+=e)}),t}(i.children);if(null!=c){var f=null!=i.value?i.value+"":l;if(s=!1,Array.isArray(c)){for(var p=0;p<c.length;p++)if(""+c[p]===f){s=!0;break}}else s=""+c===f;i=o({selected:void 0,children:void 0},i,{selected:s,children:l})}}for(g in(s=i)&&(A[r]&&(null!=s.children||null!=s.dangerouslySetInnerHTML)&&u("137",r,U()),null!=s.dangerouslySetInnerHTML&&(null!=s.children&&u("60"),"object"==typeof s.dangerouslySetInnerHTML&&"__html"in s.dangerouslySetInnerHTML||u("61")),null!=s.style&&"object"!=typeof s.style&&u("62",U())),s=i,c=this.makeStaticMarkup,l=1===this.stack.length,f="<"+e.type,s)if($.call(s,g)){var d=s[g];if(null!=d){if("style"===g){p=void 0;var h="",m="";for(p in d)if(d.hasOwnProperty(p)){var y=0===p.indexOf("--"),v=d[p];null!=v&&(h+=m+B(p)+":",m=p,h+=y=null==v||"boolean"==typeof v||""===v?"":y||"number"!=typeof v||0===v||P.hasOwnProperty(m)&&P[m]?(""+v).trim():v+"px",m=";")}d=h||null}p=null;e:if(y=r,v=s,-1===y.indexOf("-"))y="string"==typeof v.is;else switch(y){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":y=!1;break e;default:y=!0}y?G.hasOwnProperty(g)||(p=O(p=g)&&null!=d?p+'="'+M(d)+'"':""):(y=g,p=d,d=j.hasOwnProperty(y)?j[y]:null,(v="style"!==y)&&(v=null!==d?0===d.type:2<y.length&&("o"===y[0]||"O"===y[0])&&("n"===y[1]||"N"===y[1])),v||C(y,p,d,!1)?p="":null!==d?(y=d.attributeName,p=3===(d=d.type)||4===d&&!0===p?y+'=""':y+'="'+M(p)+'"'):p=O(y)?y+'="'+M(p)+'"':""),p&&(f+=" "+p)}}c||l&&(f+=' data-reactroot=""');var g=f;s="",T.hasOwnProperty(r)?g+="/>":(g+=">",s="</"+e.type+">");e:{if(null!=(c=i.dangerouslySetInnerHTML)){if(null!=c.__html){c=c.__html;break e}}else if("string"==typeof(c=i.children)||"number"==typeof c){c=M(c);break e}c=null}return null!=c?(i=[],q[r]&&"\n"===c.charAt(0)&&(g+="\n"),g+=c):i=L(i.children),e=e.type,n=null==n||"http://www.w3.org/1999/xhtml"===n?R(e):"http://www.w3.org/2000/svg"===n&&"foreignObject"===e?"http://www.w3.org/1999/xhtml":n,this.stack.push({domNamespace:n,type:r,children:i,childIndex:0,context:t,footer:s}),this.previousWasTextNode=!1,g},e}(),X={renderToString:function(e){return new J(e,!1).read(1/0)},renderToStaticMarkup:function(e){return new J(e,!0).read(1/0)},renderToNodeStream:function(){u("207")},renderToStaticNodeStream:function(){u("208")},version:"16.4.2"},K={default:X},Q=K&&X||K;e.exports=Q.default?Q.default:Q},function(e,t,n){"use strict";var r=function(e){};e.exports=function(e,t,n,o,a,i,s,c){if(r(t),!e){var l;if(void 0===t)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,o,a,i,s,c],f=0;(l=new Error(t.replace(/%s/g,function(){return u[f++]}))).name="Invariant Violation"}throw l.framesToPop=1,l}}},function(e,t,n){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,i,s=function(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),c=1;c<arguments.length;c++){for(var l in n=Object(arguments[c]))o.call(n,l)&&(s[l]=n[l]);if(r){i=r(n);for(var u=0;u<i.length;u++)a.call(n,i[u])&&(s[i[u]]=n[i[u]])}}return s}},function(e,t,n){"use strict";function r(e){return function(){return e}}var o=function(){};o.thatReturns=r,o.thatReturnsFalse=r(!1),o.thatReturnsTrue=r(!0),o.thatReturnsNull=r(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(e){return e},e.exports=o},function(e,t,n){"use strict";e.exports={}},function(e,t,n){"use strict";var r=n(13),o=/^ms-/;e.exports=function(e){return r(e).replace(o,"-ms-")}},function(e,t,n){"use strict";var r=/([A-Z])/g;e.exports=function(e){return e.replace(r,"-$1").toLowerCase()}},function(e,t,n){"use strict";e.exports=function(e){var t={};return function(n){return t.hasOwnProperty(n)||(t[n]=e.call(this,n)),t[n]}}},function(e,t,n){var r=n(16);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(18)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(17)(!1)).push([e.i,".react-aws-xray-service-graph-Wrapper {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.react-aws-xray-service-graph-Wrapper * {\n  font-family: Roboto, sans-serif;\n}\n\n.react-aws-xray-service-graph-DirectionalGraph {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n}\n\n.react-aws-xray-service-graph-DirectionalGraph svg {\n  width: 100%;\n  height: 100%;\n}\n\n.react-aws-xray-service-graph-DirectionalGraph .node rect,\n.react-aws-xray-service-graph-DirectionalGraph .node circle,\n.react-aws-xray-service-graph-DirectionalGraph .node ellipse {\n  stroke: #333;\n  fill: #fff;\n  stroke-width: 1px;\n}\n\n.react-aws-xray-service-graph-DirectionalGraph .edgePath path  {\n  stroke: #333;\n  fill: transparent;\n  stroke-width: 1.5px;\n}\n\n.react-aws-xray-service-graph-StackedBarChart {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  margin-bottom: 5px;\n}\n\n.react-aws-xray-service-graph-StackedBarChart {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  margin-bottom: 5px;\n}\n\n.react-aws-xray-service-graph-StackedBarChart .directional-bar {\n  height: 30px;\n  min-width: 4px;\n}\n\n.react-aws-xray-service-graph-SegmentInfoContent {\n  padding: 5px;\n}\n\n.react-aws-xray-service-graph-SegmentInfoContent .segment-name {\n  font-size: 32px;\n  word-break: break-all;\n}\n\n.react-aws-xray-service-graph-SegmentInfoContent .segment-type {\n  font-size: 22px;\n  font-weight: 300;\n  margin: 10px 0;\n}\n\n.react-aws-xray-service-graph-SegmentInfoContent .segment-info {\n  font-size: 16px;\n  margin-bottom: 5px;\n}\n",""])},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=function(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}(r),a=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[n].concat(a).concat([o]).join("\n")}return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var a=this[o][0];"number"==typeof a&&(r[a]=!0)}for(o=0;o<e.length;o++){var i=e[o];"number"==typeof i[0]&&r[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),t.push(i))}},t}},function(e,t,n){var r={},o=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),a=function(e){var t={};return function(e,n){if("function"==typeof e)return e();if(void 0===t[e]){var r=function(e,t){return t?t.querySelector(e):document.querySelector(e)}.call(this,e,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}}(),i=null,s=0,c=[],l=n(19);function u(e,t){for(var n=0;n<e.length;n++){var o=e[n],a=r[o.id];if(a){a.refs++;for(var i=0;i<a.parts.length;i++)a.parts[i](o.parts[i]);for(;i<o.parts.length;i++)a.parts.push(y(o.parts[i],t))}else{var s=[];for(i=0;i<o.parts.length;i++)s.push(y(o.parts[i],t));r[o.id]={id:o.id,refs:1,parts:s}}}}function f(e,t){for(var n=[],r={},o=0;o<e.length;o++){var a=e[o],i=t.base?a[0]+t.base:a[0],s={css:a[1],media:a[2],sourceMap:a[3]};r[i]?r[i].parts.push(s):n.push(r[i]={id:i,parts:[s]})}return n}function p(e,t){var n=a(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=c[c.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),c.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=a(e.insertAt.before,n);n.insertBefore(t,o)}}function d(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=c.indexOf(e);t>=0&&c.splice(t,1)}function h(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var r=function(){0;return n.nc}();r&&(e.attrs.nonce=r)}return m(t,e.attrs),p(e,t),t}function m(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function y(e,t){var n,r,o,a;if(t.transform&&e.css){if(!(a=t.transform(e.css)))return function(){};e.css=a}if(t.singleton){var c=s++;n=i||(i=h(t)),r=g.bind(null,n,c,!1),o=g.bind(null,n,c,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",m(t,e.attrs),p(e,t),t}(t),r=function(e,t,n){var r=n.css,o=n.sourceMap,a=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||a)&&(r=l(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var i=new Blob([r],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(i),s&&URL.revokeObjectURL(s)}.bind(null,n,t),o=function(){d(n),n.href&&URL.revokeObjectURL(n.href)}):(n=h(t),r=function(e,t){var n=t.css,r=t.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){d(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=o()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=f(e,t);return u(n,t),function(e){for(var o=[],a=0;a<n.length;a++){var i=n[a];(s=r[i.id]).refs--,o.push(s)}e&&u(f(e,t),t);for(a=0;a<o.length;a++){var s;if(0===(s=o[a]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete r[s.id]}}}};var v=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}();function g(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=v(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o,a=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(a)?e:(o=0===a.indexOf("//")?a:0===a.indexOf("/")?n+a:r+a.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n(4),a=n.n(o),i=n(1),s=n(5),c=n(2),l=n(3),u=n(6),f=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),p=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return f(t,e),t.prototype.componentDidMount=function(){var e=this.props.services,t=Object(i.select)(this.node),n=t.append("g"),o=Object(c.zoom)().on("zoom",function(){return n.attr("transform",i.event.transform)});t.call(o);var a=(new l.graphlib.Graph).setGraph({});e.forEach(function(e){return a.setNode(String(e.ReferenceId),{label:u.renderToStaticMarkup(r.createElement(y,{segment:e})),labelType:"html"})}),e.reduce(function(e,t){return e.concat((t.Edges||[]).map(function(e){return{source:t.ReferenceId,target:e.ReferenceId}}))},[]).forEach(function(e){return a.setEdge(e.source,e.target,{arrowhead:"vee",curve:s.curveBasis})}),(new l.render)(n,a);var f=(t.node().getBoundingClientRect().width-.75*a.graph().width)/2;t.call(o.transform,c.zoomIdentity.translate(f,20).scale(.75)),t.attr("height",.75*a.graph().height+40)},t.prototype.render=function(){var e=this;return r.createElement("div",{className:"react-aws-xray-service-graph-DirectionalGraph"},r.createElement("svg",{ref:function(t){return e.node=t}}))},t}(r.Component),d=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),h=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return d(t,e),t.prototype.render=function(){var e=this.props.data.filter(function(e){return e.value});return r.createElement("div",{className:"react-aws-xray-service-graph-StackedBarChart"},e.map(function(e){return r.createElement("div",{className:"directional-bar",key:e.label,style:{flex:e.value,backgroundColor:e.color}})}))},t}(r.Component),m=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),y=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return m(t,e),t.prototype.render=function(){var e=this.props.segment,t=e.Name,n=e.SummaryStatistics,o=e.Type;if(!n)return r.createElement("div",{className:"react-aws-xray-service-graph-SegmentInfoContent"},r.createElement("div",{className:"segment-name"},t));var a=Number(n.TotalCount),i=Number(n.TotalResponseTime)/a*1e3,s=[{label:"Ok",value:Number(n.OkCount),color:"#6AD245"},{label:"Fault",value:Number(n.FaultStatistics.TotalCount),color:"#D24545"},{label:"Errors",value:Number(n.ErrorStatistics.TotalCount),color:"#FF9A00"}];return r.createElement("div",{className:"react-aws-xray-service-graph-SegmentInfoContent"},r.createElement("div",{className:"segment-name"},t),r.createElement("div",{className:"segment-type"},o),r.createElement("div",{className:"segment-info"},"Average time: ",r.createElement("b",null,Math.round(100*i)/100)," ms"),r.createElement(h,{data:s}),r.createElement("div",{className:"segment-info"},"Total invocations: ",r.createElement("b",null,n.TotalCount)),s.filter(function(e){return e.value>0}).map(function(e){return r.createElement("div",{className:"segment-info",key:e.label},e.label,": ",r.createElement("b",null,e.value," (",Math.round(e.value/a*1e4)/100,")%"))}))},t}(r.Component),v=(n(15),function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}()),g=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return v(t,e),t.prototype.render=function(){var e=this.props,t=e.className,n=e.services;return r.createElement("div",{className:a()("react-aws-xray-service-graph-Wrapper",t)},r.createElement(p,{services:n}))},t}(r.Component);t.default=g}])});