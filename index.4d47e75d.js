function e(e,t){return Object.keys(t).forEach(function(i){"default"===i||"__esModule"===i||e.hasOwnProperty(i)||Object.defineProperty(e,i,{enumerable:!0,get:function(){return t[i]}})}),e}function t(e,t,i,n){Object.defineProperty(e,t,{get:i,set:n,enumerable:!0,configurable:!0})}var i,n,r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},s={};t(s,"popperGenerator",()=>eP),t(s,"detectOverflow",()=>ew),t(s,"createPopperBase",()=>e$),t(s,"createPopper",()=>eN),t(s,"createPopperLite",()=>eF);var o={};t(o,"top",()=>a),t(o,"bottom",()=>l),t(o,"right",()=>c),t(o,"left",()=>u),t(o,"auto",()=>d),t(o,"basePlacements",()=>h),t(o,"start",()=>p),t(o,"end",()=>f),t(o,"clippingParents",()=>g),t(o,"viewport",()=>m),t(o,"popper",()=>_),t(o,"reference",()=>b),t(o,"variationPlacements",()=>v),t(o,"placements",()=>y),t(o,"beforeRead",()=>w),t(o,"read",()=>A),t(o,"afterRead",()=>E),t(o,"beforeMain",()=>x),t(o,"main",()=>k),t(o,"afterMain",()=>C),t(o,"beforeWrite",()=>T),t(o,"write",()=>S),t(o,"afterWrite",()=>L),t(o,"modifierPhases",()=>O);var a="top",l="bottom",c="right",u="left",d="auto",h=[a,l,c,u],p="start",f="end",g="clippingParents",m="viewport",_="popper",b="reference",v=/*#__PURE__*/h.reduce(function(e,t){return e.concat([t+"-"+p,t+"-"+f])},[]),y=/*#__PURE__*/[].concat(h,[d]).reduce(function(e,t){return e.concat([t,t+"-"+p,t+"-"+f])},[]),w="beforeRead",A="read",E="afterRead",x="beforeMain",k="main",C="afterMain",T="beforeWrite",S="write",L="afterWrite",O=[w,A,E,x,k,C,T,S,L],P={};function $(e){return e?(e.nodeName||"").toLowerCase():null}function N(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function F(e){var t=N(e).Element;return e instanceof t||e instanceof Element}function D(e){var t=N(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function j(e){// IE 11 has no ShadowRoot
if("undefined"==typeof ShadowRoot)return!1;var t=N(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}t(P,"applyStyles",()=>I),t(P,"arrow",()=>en),t(P,"computeStyles",()=>ea),t(P,"eventListeners",()=>ec),t(P,"flip",()=>eA),t(P,"hide",()=>ek),t(P,"offset",()=>eC),t(P,"popperOffsets",()=>eT),t(P,"preventOverflow",()=>eS);var I={name:"applyStyles",enabled:!0,phase:"write",fn:// and applies them to the HTMLElements such as popper and arrow
function(e){var t=e.state;Object.keys(t.elements).forEach(function(e){var i=t.styles[e]||{},n=t.attributes[e]||{},r=t.elements[e];D(r)&&$(r)&&(// Flow doesn't support to extend this property, but it's the most
// effective way to apply styles to an HTMLElement
// $FlowFixMe[cannot-write]
Object.assign(r.style,i),Object.keys(n).forEach(function(e){var t=n[e];!1===t?r.removeAttribute(e):r.setAttribute(e,!0===t?"":t)}))})},effect:function(e){var t=e.state,i={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,i.popper),t.styles=i,t.elements.arrow&&Object.assign(t.elements.arrow.style,i.arrow),function(){Object.keys(t.elements).forEach(function(e){var n=t.elements[e],r=t.attributes[e]||{},s=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:i[e]).reduce(function(e,t){return e[t]="",e},{});D(n)&&$(n)&&(Object.assign(n.style,s),Object.keys(r).forEach(function(e){n.removeAttribute(e)}))})}}// eslint-disable-next-line import/no-unused-modules
,requires:["computeStyles"]};function M(e){return e.split("-")[0]}var H=Math.max,z=Math.min,R=Math.round;function q(){var e=navigator.userAgentData;return null!=e&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function B(){return!/^((?!chrome|android).)*safari/i.test(q())}function W(e,t,i){void 0===t&&(t=!1),void 0===i&&(i=!1);var n=e.getBoundingClientRect(),r=1,s=1;t&&D(e)&&(r=e.offsetWidth>0&&R(n.width)/e.offsetWidth||1,s=e.offsetHeight>0&&R(n.height)/e.offsetHeight||1);var o=(F(e)?N(e):window).visualViewport,a=!B()&&i,l=(n.left+(a&&o?o.offsetLeft:0))/r,c=(n.top+(a&&o?o.offsetTop:0))/s,u=n.width/r,d=n.height/s;return{width:u,height:d,top:c,right:l+u,bottom:c+d,left:l,x:l,y:c}}function V(e){var t=W(e),i=e.offsetWidth,n=e.offsetHeight;// Use the clientRect sizes if it's not been transformed.
return 1>=Math.abs(t.width-i)&&(i=t.width),1>=Math.abs(t.height-n)&&(n=t.height),{x:e.offsetLeft,y:e.offsetTop,width:i,height:n}}function Q(e,t){var i=t.getRootNode&&t.getRootNode();// First, attempt with faster native method
if(e.contains(t))return!0;// Give up, the result is false
if(i&&j(i)){var n=t;do{if(n&&e.isSameNode(n))return!0;// $FlowFixMe[prop-missing]: need a better way to handle this...
n=n.parentNode||n.host}while(n)}return!1}function U(e){return N(e).getComputedStyle(e)}function X(e){// $FlowFixMe[incompatible-return]: assume body is always available
return((F(e)?e.ownerDocument:e.document)||window.document).documentElement}function G(e){return"html"===$(e)?e:// $FlowFixMe[prop-missing]
e.assignedSlot||// step into the shadow DOM of the parent of a slotted node
e.parentNode||(j(e)?e.host:null)||X(e)// fallback
}function K(e){return D(e)&&"fixed"!==U(e).position?e.offsetParent:null}// `.offsetParent` reports `null` for fixed elements, while absolute elements
function J(e){for(var t=N(e),i=K(e);i&&["table","td","th"].indexOf($(i))>=0&&"static"===U(i).position;)i=K(i);return i&&("html"===$(i)||"body"===$(i)&&"static"===U(i).position)?t:i||// return the containing block
function(e){var t=/firefox/i.test(q());if(/Trident/i.test(q())&&D(e)&&"fixed"===U(e).position)return null;var i=G(e);for(j(i)&&(i=i.host);D(i)&&0>["html","body"].indexOf($(i));){var n=U(i);// This is non-exhaustive but covers the most common CSS properties that
// create a containing block.
// https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
if("none"!==n.transform||"none"!==n.perspective||"paint"===n.contain||-1!==["transform","perspective"].indexOf(n.willChange)||t&&"filter"===n.willChange||t&&n.filter&&"none"!==n.filter)return i;i=i.parentNode}return null}// Gets the closest ancestor positioned element. Handles some edge cases,
(e)||t}function Y(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function Z(e,t,i){return H(e,z(t,i))}function ee(){return{top:0,right:0,bottom:0,left:0}}function et(e){return Object.assign({},ee(),e)}function ei(e,t){return t.reduce(function(t,i){return t[i]=e,t},{})}var en={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,i=e.state,n=e.name,r=e.options,s=i.elements.arrow,o=i.modifiersData.popperOffsets,d=M(i.placement),p=Y(d),f=[u,c].indexOf(d)>=0?"height":"width";if(s&&o){var g,m=et("number"!=typeof(g="function"==typeof(g=r.padding)?g(Object.assign({},i.rects,{placement:i.placement})):g)?g:ei(g,h)),_=V(s),b="y"===p?a:u,v="y"===p?l:c,y=i.rects.reference[f]+i.rects.reference[p]-o[p]-i.rects.popper[f],w=o[p]-i.rects.reference[p],A=J(s),E=A?"y"===p?A.clientHeight||0:A.clientWidth||0:0,x=m[b],k=E-_[f]-m[v],C=E/2-_[f]/2+(y/2-w/2),T=Z(x,C,k);i.modifiersData[n]=((t={})[p]=T,t.centerOffset=T-C,t)}},effect:function(e){var t=e.state,i=e.options.element,n=void 0===i?"[data-popper-arrow]":i;null!=n&&("string"!=typeof n||(n=t.elements.popper.querySelector(n)))&&Q(t.elements.popper,n)&&(t.elements.arrow=n)}// eslint-disable-next-line import/no-unused-modules
,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function er(e){return e.split("-")[1]}var es={top:"auto",right:"auto",bottom:"auto",left:"auto"};// Round the offsets to the nearest suitable subpixel based on the DPR.
function eo(e){var t,i,n,r,s,o,d,h=e.popper,p=e.popperRect,g=e.placement,m=e.variation,_=e.offsets,b=e.position,v=e.gpuAcceleration,y=e.adaptive,w=e.roundOffsets,A=e.isFixed,E=_.x,x=void 0===E?0:E,k=_.y,C=void 0===k?0:k,T="function"==typeof w?w({x:x,y:C}):{x:x,y:C};x=T.x,C=T.y;var S=_.hasOwnProperty("x"),L=_.hasOwnProperty("y"),O=u,P=a,$=window;if(y){var F=J(h),D="clientHeight",j="clientWidth";F===N(h)&&"static"!==U(F=X(h)).position&&"absolute"===b&&(D="scrollHeight",j="scrollWidth"),(g===a||(g===u||g===c)&&m===f)&&(P=l,C-=(A&&F===$&&$.visualViewport?$.visualViewport.height:F[D])-p.height,C*=v?1:-1),(g===u||(g===a||g===l)&&m===f)&&(O=c,x-=(A&&F===$&&$.visualViewport?$.visualViewport.width:F[j])-p.width,x*=v?1:-1)}var I=Object.assign({position:b},y&&es),M=!0===w?(t={x:x,y:C},i=N(h),n=t.x,r=t.y,{x:R(n*(s=i.devicePixelRatio||1))/s||0,y:R(r*s)/s||0}):{x:x,y:C};return(x=M.x,C=M.y,v)?Object.assign({},I,((d={})[P]=L?"0":"",d[O]=S?"0":"",d.transform=1>=($.devicePixelRatio||1)?"translate("+x+"px, "+C+"px)":"translate3d("+x+"px, "+C+"px, 0)",d)):Object.assign({},I,((o={})[P]=L?C+"px":"",o[O]=S?x+"px":"",o.transform="",o))}var ea={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,i=e.options,n=i.gpuAcceleration,r=i.adaptive,s=i.roundOffsets,o=void 0===s||s,a={placement:M(t.placement),variation:er(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:void 0===n||n,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,eo(Object.assign({},a,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:void 0===r||r,roundOffsets:o})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,eo(Object.assign({},a,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:o})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}// eslint-disable-next-line import/no-unused-modules
,data:{}},el={passive:!0},ec={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,i=e.instance,n=e.options,r=n.scroll,s=void 0===r||r,o=n.resize,a=void 0===o||o,l=N(t.elements.popper),c=[].concat(t.scrollParents.reference,t.scrollParents.popper);return s&&c.forEach(function(e){e.addEventListener("scroll",i.update,el)}),a&&l.addEventListener("resize",i.update,el),function(){s&&c.forEach(function(e){e.removeEventListener("scroll",i.update,el)}),a&&l.removeEventListener("resize",i.update,el)}}// eslint-disable-next-line import/no-unused-modules
,data:{}},eu={left:"right",right:"left",bottom:"top",top:"bottom"};function ed(e){return e.replace(/left|right|bottom|top/g,function(e){return eu[e]})}var eh={start:"end",end:"start"};function ep(e){return e.replace(/start|end/g,function(e){return eh[e]})}function ef(e){var t=N(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function eg(e){// If <html> has a CSS width greater than the viewport, then this will be
// incorrect for RTL.
// Popper 1 is broken in this case and never had a bug report so let's assume
// it's not an issue. I don't think anyone ever specifies width on <html>
// anyway.
// Browsers where the left scrollbar doesn't cause an issue report `0` for
// this (e.g. Edge 2019, IE11, Safari)
return W(X(e)).left+ef(e).scrollLeft}function em(e){// Firefox wants us to check `-x` and `-y` variations as well
var t=U(e),i=t.overflow,n=t.overflowX,r=t.overflowY;return/auto|scroll|overlay|hidden/.test(i+r+n)}function e_(e,t){void 0===t&&(t=[]);var i,n=function e(t){return["html","body","#document"].indexOf($(t))>=0?t.ownerDocument.body:D(t)&&em(t)?t:e(G(t))}(e),r=n===(null==(i=e.ownerDocument)?void 0:i.body),s=N(n),o=r?[s].concat(s.visualViewport||[],em(n)?n:[]):n,a=t.concat(o);return r?a:a.concat(e_(G(o)))}function eb(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function ev(e,t,i){var n,r,s,o,a,l,c,u,d,h;return t===m?eb(function(e,t){var i=N(e),n=X(e),r=i.visualViewport,s=n.clientWidth,o=n.clientHeight,a=0,l=0;if(r){s=r.width,o=r.height;var c=B();(c||!c&&"fixed"===t)&&(a=r.offsetLeft,l=r.offsetTop)}return{width:s,height:o,x:a+eg(e),y:l}}(e,i)):F(t)?((n=W(t,!1,"fixed"===i)).top=n.top+t.clientTop,n.left=n.left+t.clientLeft,n.bottom=n.top+t.clientHeight,n.right=n.left+t.clientWidth,n.width=t.clientWidth,n.height=t.clientHeight,n.x=n.left,n.y=n.top,n):eb((r=X(e),o=X(r),a=ef(r),l=null==(s=r.ownerDocument)?void 0:s.body,c=H(o.scrollWidth,o.clientWidth,l?l.scrollWidth:0,l?l.clientWidth:0),u=H(o.scrollHeight,o.clientHeight,l?l.scrollHeight:0,l?l.clientHeight:0),d=-a.scrollLeft+eg(r),h=-a.scrollTop,"rtl"===U(l||o).direction&&(d+=H(o.clientWidth,l?l.clientWidth:0)-c),{width:c,height:u,x:d,y:h}))}// A "clipping parent" is an overflowable container with the characteristic of
function ey(e){var t,i=e.reference,n=e.element,r=e.placement,s=r?M(r):null,o=r?er(r):null,d=i.x+i.width/2-n.width/2,h=i.y+i.height/2-n.height/2;switch(s){case a:t={x:d,y:i.y-n.height};break;case l:t={x:d,y:i.y+i.height};break;case c:t={x:i.x+i.width,y:h};break;case u:t={x:i.x-n.width,y:h};break;default:t={x:i.x,y:i.y}}var g=s?Y(s):null;if(null!=g){var m="y"===g?"height":"width";switch(o){case p:t[g]=t[g]-(i[m]/2-n[m]/2);break;case f:t[g]=t[g]+(i[m]/2-n[m]/2)}}return t}function ew(e,t){void 0===t&&(t={});var i,n,r,s,o,u,d=t,p=d.placement,f=void 0===p?e.placement:p,v=d.strategy,y=void 0===v?e.strategy:v,w=d.boundary,A=void 0===w?g:w,E=d.rootBoundary,x=void 0===E?m:E,k=d.elementContext,C=void 0===k?_:k,T=d.altBoundary,S=d.padding,L=void 0===S?0:S,O=et("number"!=typeof L?L:ei(L,h)),P=C===_?b:_,N=e.rects.popper,j=e.elements[void 0!==T&&T?P:C],I=(i=F(j)?j:j.contextElement||X(e.elements.popper),o=(s=[].concat("clippingParents"===A?(n=e_(G(i)),F(r=["absolute","fixed"].indexOf(U(i).position)>=0&&D(i)?J(i):i)?n.filter(function(e){return F(e)&&Q(e,r)&&"body"!==$(e)}):[]):[].concat(A),[x]))[0],(u=s.reduce(function(e,t){var n=ev(i,t,y);return e.top=H(n.top,e.top),e.right=z(n.right,e.right),e.bottom=z(n.bottom,e.bottom),e.left=H(n.left,e.left),e},ev(i,o,y))).width=u.right-u.left,u.height=u.bottom-u.top,u.x=u.left,u.y=u.top,u),M=W(e.elements.reference),R=ey({reference:M,element:N,strategy:"absolute",placement:f}),q=eb(Object.assign({},N,R)),B=C===_?q:M,V={top:I.top-B.top+O.top,bottom:B.bottom-I.bottom+O.bottom,left:I.left-B.left+O.left,right:B.right-I.right+O.right},K=e.modifiersData.offset;if(C===_&&K){var Y=K[f];Object.keys(V).forEach(function(e){var t=[c,l].indexOf(e)>=0?1:-1,i=[a,l].indexOf(e)>=0?"y":"x";V[e]+=Y[i]*t})}return V}var eA={name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,i=e.options,n=e.name;if(!t.modifiersData[n]._skip){for(var r=i.mainAxis,s=void 0===r||r,o=i.altAxis,f=void 0===o||o,g=i.fallbackPlacements,m=i.padding,_=i.boundary,b=i.rootBoundary,w=i.altBoundary,A=i.flipVariations,E=void 0===A||A,x=i.allowedAutoPlacements,k=t.options.placement,C=M(k)===k,T=g||(C||!E?[ed(k)]:function(e){if(M(e)===d)return[];var t=ed(e);return[ep(e),t,ep(t)]}(k)),S=[k].concat(T).reduce(function(e,i){var n,r,s,o,a,l,c,u,p,f,g,w;return e.concat(M(i)===d?(r=(n={placement:i,boundary:_,rootBoundary:b,padding:m,flipVariations:E,allowedAutoPlacements:x}).placement,s=n.boundary,o=n.rootBoundary,a=n.padding,l=n.flipVariations,u=void 0===(c=n.allowedAutoPlacements)?y:c,0===(g=(f=(p=er(r))?l?v:v.filter(function(e){return er(e)===p}):h).filter(function(e){return u.indexOf(e)>=0})).length&&(g=f),Object.keys(w=g.reduce(function(e,i){return e[i]=ew(t,{placement:i,boundary:s,rootBoundary:o,padding:a})[M(i)],e},{})).sort(function(e,t){return w[e]-w[t]})):i)},[]),L=t.rects.reference,O=t.rects.popper,P=new Map,$=!0,N=S[0],F=0;F<S.length;F++){var D=S[F],j=M(D),I=er(D)===p,H=[a,l].indexOf(j)>=0,z=H?"width":"height",R=ew(t,{placement:D,boundary:_,rootBoundary:b,altBoundary:w,padding:m}),q=H?I?c:u:I?l:a;L[z]>O[z]&&(q=ed(q));var B=ed(q),W=[];if(s&&W.push(R[j]<=0),f&&W.push(R[q]<=0,R[B]<=0),W.every(function(e){return e})){N=D,$=!1;break}P.set(D,W)}if($)for(var V=E?3:1,Q=function(e){var t=S.find(function(t){var i=P.get(t);if(i)return i.slice(0,e).every(function(e){return e})});if(t)return N=t,"break"},U=V;U>0&&"break"!==Q(U);U--);t.placement!==N&&(t.modifiersData[n]._skip=!0,t.placement=N,t.reset=!0)}}// eslint-disable-next-line import/no-unused-modules
,requiresIfExists:["offset"],data:{_skip:!1}};function eE(e,t,i){return void 0===i&&(i={x:0,y:0}),{top:e.top-t.height-i.y,right:e.right-t.width+i.x,bottom:e.bottom-t.height+i.y,left:e.left-t.width-i.x}}function ex(e){return[a,c,l,u].some(function(t){return e[t]>=0})}var ek={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,i=e.name,n=t.rects.reference,r=t.rects.popper,s=t.modifiersData.preventOverflow,o=ew(t,{elementContext:"reference"}),a=ew(t,{altBoundary:!0}),l=eE(o,n),c=eE(a,r,s),u=ex(l),d=ex(c);t.modifiersData[i]={referenceClippingOffsets:l,popperEscapeOffsets:c,isReferenceHidden:u,hasPopperEscaped:d},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":d})}// eslint-disable-next-line import/no-unused-modules
},eC={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,i=e.options,n=e.name,r=i.offset,s=void 0===r?[0,0]:r,o=y.reduce(function(e,i){var n,r,o,l,d,h;return e[i]=(n=t.rects,o=[u,a].indexOf(r=M(i))>=0?-1:1,d=(l="function"==typeof s?s(Object.assign({},n,{placement:i})):s)[0],h=l[1],d=d||0,h=(h||0)*o,[u,c].indexOf(r)>=0?{x:h,y:d}:{x:d,y:h}),e},{}),l=o[t.placement],d=l.x,h=l.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=d,t.modifiersData.popperOffsets.y+=h),t.modifiersData[n]=o}// eslint-disable-next-line import/no-unused-modules
},eT={name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,i=e.name;// Offsets are the actual position the popper needs to have to be
// properly positioned near its reference element
// This is the most basic placement, and will be adjusted by
// the modifiers in the next step
t.modifiersData[i]=ey({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}// eslint-disable-next-line import/no-unused-modules
,data:{}},eS={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,i=e.options,n=e.name,r=i.mainAxis,s=i.altAxis,o=i.boundary,d=i.rootBoundary,h=i.altBoundary,f=i.padding,g=i.tether,m=void 0===g||g,_=i.tetherOffset,b=void 0===_?0:_,v=ew(t,{boundary:o,rootBoundary:d,padding:f,altBoundary:h}),y=M(t.placement),w=er(t.placement),A=!w,E=Y(y),x="x"===E?"y":"x",k=t.modifiersData.popperOffsets,C=t.rects.reference,T=t.rects.popper,S="function"==typeof b?b(Object.assign({},t.rects,{placement:t.placement})):b,L="number"==typeof S?{mainAxis:S,altAxis:S}:Object.assign({mainAxis:0,altAxis:0},S),O=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,P={x:0,y:0};if(k){if(void 0===r||r){var $,N="y"===E?a:u,F="y"===E?l:c,D="y"===E?"height":"width",j=k[E],I=j+v[N],R=j-v[F],q=m?-T[D]/2:0,B=w===p?C[D]:T[D],W=w===p?-T[D]:-C[D],Q=t.elements.arrow,U=m&&Q?V(Q):{width:0,height:0},X=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:ee(),G=X[N],K=X[F],et=Z(0,C[D],U[D]),ei=A?C[D]/2-q-et-G-L.mainAxis:B-et-G-L.mainAxis,en=A?-C[D]/2+q+et+K+L.mainAxis:W+et+K+L.mainAxis,es=t.elements.arrow&&J(t.elements.arrow),eo=es?"y"===E?es.clientTop||0:es.clientLeft||0:0,ea=null!=($=null==O?void 0:O[E])?$:0,el=j+ei-ea-eo,ec=j+en-ea,eu=Z(m?z(I,el):I,j,m?H(R,ec):R);k[E]=eu,P[E]=eu-j}if(void 0!==s&&s){var ed,eh,ep="x"===E?a:u,ef="x"===E?l:c,eg=k[x],em="y"===x?"height":"width",e_=eg+v[ep],eb=eg-v[ef],ev=-1!==[a,u].indexOf(y),ey=null!=(eh=null==O?void 0:O[x])?eh:0,eA=ev?e_:eg-C[em]-T[em]-ey+L.altAxis,eE=ev?eg+C[em]+T[em]-ey-L.altAxis:eb,ex=m&&ev?(ed=Z(eA,eg,eE))>eE?eE:ed:Z(m?eA:e_,eg,m?eE:eb);k[x]=ex,P[x]=ex-eg}t.modifiersData[n]=P}}// eslint-disable-next-line import/no-unused-modules
,requiresIfExists:["offset"]},eL={placement:"bottom",modifiers:[],strategy:"absolute"};function eO(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];return!t.some(function(e){return!(e&&"function"==typeof e.getBoundingClientRect)})}function eP(e){void 0===e&&(e={});var t=e,i=t.defaultModifiers,n=void 0===i?[]:i,r=t.defaultOptions,s=void 0===r?eL:r;return function(e,t,i){void 0===i&&(i=s);var r,o={placement:"bottom",orderedModifiers:[],options:Object.assign({},eL,s),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},a=[],l=!1,c={state:o,setOptions:function(i){var r,l,d,h,p,f="function"==typeof i?i(o.options):i;u(),o.options=Object.assign({},s,o.options,f),o.scrollParents={reference:F(e)?e_(e):e.contextElement?e_(e.contextElement):[],popper:e_(t)};// properties
var g=(l=Object.keys(r=[].concat(n,o.options.modifiers).reduce(function(e,t){var i=e[t.name];return e[t.name]=i?Object.assign({},i,t,{options:Object.assign({},i.options,t.options),data:Object.assign({},i.data,t.data)}):t,e},{})).map(function(e){return r[e]}),d=new Map,h=new Set,p=[],l.forEach(function(e){d.set(e.name,e)}),l.forEach(function(e){h.has(e.name)||function e(t){h.add(t.name),[].concat(t.requires||[],t.requiresIfExists||[]).forEach(function(t){if(!h.has(t)){var i=d.get(t);i&&e(i)}}),p.push(t)}(e)}),O.reduce(function(e,t){return e.concat(p.filter(function(e){return e.phase===t}))},[]));// Strip out disabled modifiers
return o.orderedModifiers=g.filter(function(e){return e.enabled}),o.orderedModifiers.forEach(function(e){var t=e.name,i=e.options,n=e.effect;if("function"==typeof n){var r=n({state:o,name:t,instance:c,options:void 0===i?{}:i});a.push(r||function(){})}}),c.update()},// Sync update – it will always be executed, even if not necessary. This
// is useful for low frequency updates where sync behavior simplifies the
// logic.
// For high frequency updates (e.g. `resize` and `scroll` events), always
// prefer the async Popper#update method
forceUpdate:function(){if(!l){var e=o.elements,t=e.reference,i=e.popper;// Don't proceed if `reference` or `popper` are not valid elements
// anymore
if(eO(t,i)){// Store the reference and popper rects to be read by modifiers
o.rects={reference:(r=J(i),s="fixed"===o.options.strategy,a=D(r),p=D(r)&&(d=R((u=r.getBoundingClientRect()).width)/r.offsetWidth||1,h=R(u.height)/r.offsetHeight||1,1!==d||1!==h),f=X(r),g=W(t,p,s),m={scrollLeft:0,scrollTop:0},_={x:0,y:0},(a||!a&&!s)&&(("body"!==$(r)||em(f))&&(m=(n=r)!==N(n)&&D(n)?{scrollLeft:n.scrollLeft,scrollTop:n.scrollTop}:ef(n)),D(r)?(_=W(r,!0),_.x+=r.clientLeft,_.y+=r.clientTop):f&&(_.x=eg(f))),{x:g.left+m.scrollLeft-_.x,y:g.top+m.scrollTop-_.y,width:g.width,height:g.height}),popper:V(i)},// most common use case for this is the `flip` modifier changing the
// placement, which then needs to re-run all the modifiers, because the
// logic was previously ran for the previous placement and is therefore
// stale/incorrect
o.reset=!1,o.placement=o.options.placement,// is filled with the initial data specified by the modifier. This means
// it doesn't persist and is fresh on each update.
// To ensure persistent data, use `${name}#persistent`
o.orderedModifiers.forEach(function(e){return o.modifiersData[e.name]=Object.assign({},e.data)});for(var n,r,s,a,u,d,h,p,f,g,m,_,b=0;b<o.orderedModifiers.length;b++){if(!0===o.reset){o.reset=!1,b=-1;continue}var v=o.orderedModifiers[b],y=v.fn,w=v.options,A=void 0===w?{}:w,E=v.name;"function"==typeof y&&(o=y({state:o,options:A,name:E,instance:c})||o)}}}},// Async and optimistically optimized update – it will not be executed if
// not necessary (debounced to run at most once-per-tick)
update:function(){return r||(r=new Promise(function(e){Promise.resolve().then(function(){r=void 0,e(new Promise(function(e){c.forceUpdate(),e(o)}))})})),r},destroy:function(){u(),l=!0}};if(!eO(e,t))return c;function u(){a.forEach(function(e){return e()}),a=[]}return c.setOptions(i).then(function(e){!l&&i.onFirstUpdate&&i.onFirstUpdate(e)}),c}}var e$=/*#__PURE__*/eP(),eN=eP({defaultModifiers:[ec,eT,ea,I,eC,eA,eS,en,ek]}),eF=eP({defaultModifiers:[ec,eT,ea,I]});// eslint-disable-next-line import/no-unused-modules
e(s,o),e(s,P);/**
 * --------------------------------------------------------------------------
 * Bootstrap dom/data.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 *//**
 * Constants
 */const eD=new Map,ej={set(e,t,i){eD.has(e)||eD.set(e,new Map);let n=eD.get(e);// make it clear we only want one instance per element
// can be removed later when multiple key/instances are fine to be used
if(!n.has(t)&&0!==n.size){// eslint-disable-next-line no-console
console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(n.keys())[0]}.`);return}n.set(t,i)},get:(e,t)=>eD.has(e)&&eD.get(e).get(t)||null,remove(e,t){if(!eD.has(e))return;let i=eD.get(e);i.delete(t),0===i.size&&eD.delete(e)}},eI="transitionend",eM=e=>(e&&window.CSS&&window.CSS.escape&&(e=e.replace(/#([^\s"#']+)/g,(e,t)=>`#${CSS.escape(t)}`)),e),eH=e=>null==e?`${e}`:Object.prototype.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase(),ez=e=>{do e+=Math.floor(1e6*Math.random());while(document.getElementById(e))return e},eR=e=>{if(!e)return 0;// Get transition-duration of the element
let{transitionDuration:t,transitionDelay:i}=window.getComputedStyle(e),n=Number.parseFloat(t),r=Number.parseFloat(i);return(// Return 0 if element or transition duration is not found
n||r?(// If multiple durations are defined, take the first
t=t.split(",")[0],i=i.split(",")[0],(Number.parseFloat(t)+Number.parseFloat(i))*1e3):0)},eq=e=>{e.dispatchEvent(new Event(eI))},eB=e=>!!e&&"object"==typeof e&&(void 0!==e.jquery&&(e=e[0]),void 0!==e.nodeType),eW=e=>// it's a jQuery object or a node element
    eB(e)?e.jquery?e[0]:e:"string"==typeof e&&e.length>0?document.querySelector(eM(e)):null,eV=e=>{if(!eB(e)||0===e.getClientRects().length)return!1;let t="visible"===getComputedStyle(e).getPropertyValue("visibility"),i=e.closest("details:not([open])");if(!i)return t;if(i!==e){let t=e.closest("summary");if(t&&t.parentNode!==i||null===t)return!1}return t},eQ=e=>!!(!e||e.nodeType!==Node.ELEMENT_NODE||e.classList.contains("disabled"))||(void 0!==e.disabled?e.disabled:e.hasAttribute("disabled")&&"false"!==e.getAttribute("disabled")),eU=e=>{if(!document.documentElement.attachShadow)return null;// Can find the shadow root otherwise it'll return the document
if("function"==typeof e.getRootNode){let t=e.getRootNode();return t instanceof ShadowRoot?t:null}return e instanceof ShadowRoot?e:e.parentNode?eU(e.parentNode):null},eX=()=>{},eG=e=>{e.offsetHeight;// eslint-disable-line no-unused-expressions
},eK=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,eJ=[],eY=e=>{"loading"===document.readyState?(eJ.length||document.addEventListener("DOMContentLoaded",()=>{for(let e of eJ)e()}),eJ.push(e)):e()},eZ=()=>"rtl"===document.documentElement.dir,e0=e=>{eY(()=>{let t=eK();/* istanbul ignore if */if(t){let i=e.NAME,n=t.fn[i];t.fn[i]=e.jQueryInterface,t.fn[i].Constructor=e,t.fn[i].noConflict=()=>(t.fn[i]=n,e.jQueryInterface)}})},e1=(e,t=[],i=e)=>"function"==typeof e?e(...t):i,e2=(e,t,i=!0)=>{if(!i){e1(e);return}let n=eR(t)+5,r=!1,s=({target:i})=>{i===t&&(r=!0,t.removeEventListener(eI,s),e1(e))};t.addEventListener(eI,s),setTimeout(()=>{r||eq(t)},n)},e4=(e,t,i,n)=>{let r=e.length,s=e.indexOf(t);return(// if the element does not exist in the list return an element
// depending on the direction and if cycle is allowed
-1===s?!i&&n?e[r-1]:e[0]:(s+=i?1:-1,n&&(s=(s+r)%r),e[Math.max(0,Math.min(s,r-1))]))},e3=/[^.]*(?=\..*)\.|.*/,e5=/\..*/,e6=/::\d+$/,e7={};let e8=1;const e9={mouseenter:"mouseover",mouseleave:"mouseout"},te=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);/**
 * Private methods
 */function tt(e,t){return t&&`${t}::${e8++}`||e.uidEvent||e8++}function ti(e){let t=tt(e);return e.uidEvent=t,e7[t]=e7[t]||{},e7[t]}function tn(e,t,i=null){return Object.values(e).find(e=>e.callable===t&&e.delegationSelector===i)}function tr(e,t,i){let n="string"==typeof t,r=ta(e);return te.has(r)||(r=e),[n,n?i:t||i,r]}function ts(e,t,i,n,r){var s,o,a;if("string"!=typeof t||!e)return;let[l,c,u]=tr(t,i,n);// in case of mouseenter or mouseleave wrap the handler within a function that checks for its DOM position
// this prevents the handler from being dispatched the same way as mouseover or mouseout does
t in e9&&(s=c,c=function(e){if(!e.relatedTarget||e.relatedTarget!==e.delegateTarget&&!e.delegateTarget.contains(e.relatedTarget))return s.call(this,e)});let d=ti(e),h=d[u]||(d[u]={}),p=tn(h,c,l?i:null);if(p){p.oneOff=p.oneOff&&r;return}let f=tt(c,t.replace(e3,"")),g=l?(o=c,function t(n){let r=e.querySelectorAll(i);for(let{target:s}=n;s&&s!==this;s=s.parentNode)for(let a of r)if(a===s)return tc(n,{delegateTarget:s}),t.oneOff&&tl.off(e,n.type,i,o),o.apply(s,[n])}):(a=c,function t(i){return tc(i,{delegateTarget:e}),t.oneOff&&tl.off(e,i.type,a),a.apply(e,[i])});g.delegationSelector=l?i:null,g.callable=c,g.oneOff=r,g.uidEvent=f,h[f]=g,e.addEventListener(u,g,l)}function to(e,t,i,n,r){let s=tn(t[i],n,r);s&&(e.removeEventListener(i,s,!!r),delete t[i][s.uidEvent])}function ta(e){return e9[// allow to get the native events from namespaced events ('click.bs.button' --> 'click')
e=e.replace(e5,"")]||e}const tl={on(e,t,i,n){ts(e,t,i,n,!1)},one(e,t,i,n){ts(e,t,i,n,!0)},off(e,t,i,n){if("string"!=typeof t||!e)return;let[r,s,o]=tr(t,i,n),a=o!==t,l=ti(e),c=l[o]||{},u=t.startsWith(".");if(void 0!==s){// Simplest case: handler is passed, remove that listener ONLY.
if(!Object.keys(c).length)return;to(e,l,o,s,r?i:null);return}if(u)for(let i of Object.keys(l))!function(e,t,i,n){let r=t[i]||{};for(let[s,o]of Object.entries(r))s.includes(n)&&to(e,t,i,o.callable,o.delegationSelector)}(e,l,i,t.slice(1));for(let[i,n]of Object.entries(c)){let r=i.replace(e6,"");(!a||t.includes(r))&&to(e,l,o,n.callable,n.delegationSelector)}},trigger(e,t,i){if("string"!=typeof t||!e)return null;let n=eK(),r=ta(t),s=t!==r,o=null,a=!0,l=!0,c=!1;s&&n&&(o=n.Event(t,i),n(e).trigger(o),a=!o.isPropagationStopped(),l=!o.isImmediatePropagationStopped(),c=o.isDefaultPrevented());let u=tc(new Event(t,{bubbles:a,cancelable:!0}),i);return c&&u.preventDefault(),l&&e.dispatchEvent(u),u.defaultPrevented&&o&&o.preventDefault(),u}};function tc(e,t={}){for(let[i,n]of Object.entries(t))try{e[i]=n}catch(t){Object.defineProperty(e,i,{configurable:!0,get:()=>n})}return e}/**
 * --------------------------------------------------------------------------
 * Bootstrap dom/manipulator.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */function tu(e){if("true"===e)return!0;if("false"===e)return!1;if(e===Number(e).toString())return Number(e);if(""===e||"null"===e)return null;if("string"!=typeof e)return e;try{return JSON.parse(decodeURIComponent(e))}catch(t){return e}}function td(e){return e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}const th={setDataAttribute(e,t,i){e.setAttribute(`data-bs-${td(t)}`,i)},removeDataAttribute(e,t){e.removeAttribute(`data-bs-${td(t)}`)},getDataAttributes(e){if(!e)return{};let t={},i=Object.keys(e.dataset).filter(e=>e.startsWith("bs")&&!e.startsWith("bsConfig"));for(let n of i){let i=n.replace(/^bs/,"");t[i=i.charAt(0).toLowerCase()+i.slice(1,i.length)]=tu(e.dataset[n])}return t},getDataAttribute:(e,t)=>tu(e.getAttribute(`data-bs-${td(t)}`))};/**
 * --------------------------------------------------------------------------
 * Bootstrap util/config.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 *//**
 * Class definition
 */class tp{// Getters
static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw Error('You have to implement the static method "NAME", for each component!')}_getConfig(e){return e=this._mergeConfigObj(e),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}_configAfterMerge(e){return e}_mergeConfigObj(e,t){let i=eB(t)?th.getDataAttribute(t,"config"):{};// try to parse
return{...this.constructor.Default,..."object"==typeof i?i:{},...eB(t)?th.getDataAttributes(t):{},..."object"==typeof e?e:{}}}_typeCheckConfig(e,t=this.constructor.DefaultType){for(let[i,n]of Object.entries(t)){let t=e[i],r=eB(t)?"element":eH(t);if(!new RegExp(n).test(r))throw TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${i}" provided type "${r}" but expected type "${n}".`)}}}/**
 * Class definition
 */class tf extends tp{constructor(e,t){if(super(),!(e=eW(e)))return;this._element=e,this._config=this._getConfig(t),ej.set(this._element,this.constructor.DATA_KEY,this)}// Public
dispose(){for(let e of(ej.remove(this._element,this.constructor.DATA_KEY),tl.off(this._element,this.constructor.EVENT_KEY),Object.getOwnPropertyNames(this)))this[e]=null}_queueCallback(e,t,i=!0){e2(e,t,i)}_getConfig(e){return e=this._mergeConfigObj(e,this._element),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}// Static
static getInstance(e){return ej.get(eW(e),this.DATA_KEY)}static getOrCreateInstance(e,t={}){return this.getInstance(e)||new this(e,"object"==typeof t?t:null)}static get VERSION(){return"5.3.2"}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(e){return`${e}${this.EVENT_KEY}`}}/**
 * --------------------------------------------------------------------------
 * Bootstrap dom/selector-engine.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */const tg=e=>{let t=e.getAttribute("data-bs-target");if(!t||"#"===t){let i=e.getAttribute("href");// The only valid content that could double as a selector are IDs or classes,
// so everything starting with `#` or `.`. If a "real" URL is used as the selector,
// `document.querySelector` will rightfully complain it is invalid.
// See https://github.com/twbs/bootstrap/issues/32273
if(!i||!i.includes("#")&&!i.startsWith("."))return null;i.includes("#")&&!i.startsWith("#")&&(i=`#${i.split("#")[1]}`),t=i&&"#"!==i?eM(i.trim()):null}return t},tm={find:(e,t=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(t,e)),findOne:(e,t=document.documentElement)=>Element.prototype.querySelector.call(t,e),children:(e,t)=>[].concat(...e.children).filter(e=>e.matches(t)),parents(e,t){let i=[],n=e.parentNode.closest(t);for(;n;)i.push(n),n=n.parentNode.closest(t);return i},prev(e,t){let i=e.previousElementSibling;for(;i;){if(i.matches(t))return[i];i=i.previousElementSibling}return[]},// TODO: this is now unused; remove later along with prev()
next(e,t){let i=e.nextElementSibling;for(;i;){if(i.matches(t))return[i];i=i.nextElementSibling}return[]},focusableChildren(e){let t=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(e=>`${e}:not([tabindex^="-"])`).join(",");return this.find(t,e).filter(e=>!eQ(e)&&eV(e))},getSelectorFromElement(e){let t=tg(e);return t&&tm.findOne(t)?t:null},getElementFromSelector(e){let t=tg(e);return t?tm.findOne(t):null},getMultipleElementsFromSelector(e){let t=tg(e);return t?tm.find(t):[]}},t_=(e,t="hide")=>{let i=`click.dismiss${e.EVENT_KEY}`,n=e.NAME;tl.on(document,i,`[data-bs-dismiss="${n}"]`,function(i){if(["A","AREA"].includes(this.tagName)&&i.preventDefault(),eQ(this))return;let r=tm.getElementFromSelector(this)||this.closest(`.${n}`),s=e.getOrCreateInstance(r);// Method argument is left, for Alert and only, as it doesn't implement the 'hide' method
s[t]()})},tb=".bs.alert",tv=`close${tb}`,ty=`closed${tb}`;/**
 * Class definition
 */class tw extends tf{// Getters
static get NAME(){return"alert"}// Public
close(){let e=tl.trigger(this._element,tv);if(e.defaultPrevented)return;this._element.classList.remove("show");let t=this._element.classList.contains("fade");this._queueCallback(()=>this._destroyElement(),this._element,t)}// Private
_destroyElement(){this._element.remove(),tl.trigger(this._element,ty),this.dispose()}// Static
static jQueryInterface(e){return this.each(function(){let t=tw.getOrCreateInstance(this);if("string"==typeof e){if(void 0===t[e]||e.startsWith("_")||"constructor"===e)throw TypeError(`No method named "${e}"`);t[e](this)}})}}/**
 * Data API implementation
 */t_(tw,"close"),/**
 * jQuery
 */e0(tw);const tA='[data-bs-toggle="button"]';/**
 * Class definition
 */class tE extends tf{// Getters
static get NAME(){return"button"}// Public
toggle(){// Toggle class and sync the `aria-pressed` attribute with the return value of the `.toggle()` method
this._element.setAttribute("aria-pressed",this._element.classList.toggle("active"))}// Static
static jQueryInterface(e){return this.each(function(){let t=tE.getOrCreateInstance(this);"toggle"===e&&t[e]()})}}/**
 * Data API implementation
 */tl.on(document,"click.bs.button.data-api",tA,e=>{e.preventDefault();let t=e.target.closest(tA),i=tE.getOrCreateInstance(t);i.toggle()}),/**
 * jQuery
 */e0(tE);const tx=".bs.swipe",tk=`touchstart${tx}`,tC=`touchmove${tx}`,tT=`touchend${tx}`,tS=`pointerdown${tx}`,tL=`pointerup${tx}`,tO={endCallback:null,leftCallback:null,rightCallback:null},tP={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};/**
 * Class definition
 */class t$ extends tp{constructor(e,t){if(super(),this._element=e,!e||!t$.isSupported())return;this._config=this._getConfig(t),this._deltaX=0,this._supportPointerEvents=!!window.PointerEvent,this._initEvents()}// Getters
static get Default(){return tO}static get DefaultType(){return tP}static get NAME(){return"swipe"}// Public
dispose(){tl.off(this._element,tx)}// Private
_start(e){if(!this._supportPointerEvents){this._deltaX=e.touches[0].clientX;return}this._eventIsPointerPenTouch(e)&&(this._deltaX=e.clientX)}_end(e){this._eventIsPointerPenTouch(e)&&(this._deltaX=e.clientX-this._deltaX),this._handleSwipe(),e1(this._config.endCallback)}_move(e){this._deltaX=e.touches&&e.touches.length>1?0:e.touches[0].clientX-this._deltaX}_handleSwipe(){let e=Math.abs(this._deltaX);if(e<=40)return;let t=e/this._deltaX;this._deltaX=0,t&&e1(t>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(tl.on(this._element,tS,e=>this._start(e)),tl.on(this._element,tL,e=>this._end(e)),this._element.classList.add("pointer-event")):(tl.on(this._element,tk,e=>this._start(e)),tl.on(this._element,tC,e=>this._move(e)),tl.on(this._element,tT,e=>this._end(e)))}_eventIsPointerPenTouch(e){return this._supportPointerEvents&&("pen"===e.pointerType||"touch"===e.pointerType)}// Static
static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const tN=".bs.carousel",tF=".data-api",tD="next",tj="prev",tI="left",tM="right",tH=`slide${tN}`,tz=`slid${tN}`,tR=`keydown${tN}`,tq=`mouseenter${tN}`,tB=`mouseleave${tN}`,tW=`dragstart${tN}`,tV=`load${tN}${tF}`,tQ=`click${tN}${tF}`,tU="carousel",tX="active",tG=".active",tK=".carousel-item",tJ=tG+tK,tY={ArrowLeft:tM,ArrowRight:tI},tZ={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},t0={interval:"(number|boolean)",// TODO:v6 remove boolean support
keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};/**
 * Class definition
 */class t1 extends tf{constructor(e,t){super(e,t),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=tm.findOne(".carousel-indicators",this._element),this._addEventListeners(),this._config.ride===tU&&this.cycle()}// Getters
static get Default(){return tZ}static get DefaultType(){return t0}static get NAME(){return"carousel"}// Public
next(){this._slide(tD)}nextWhenVisible(){// FIXME TODO use `document.visibilityState`
// Don't call next when the page isn't visible
// or the carousel or its parent isn't visible
!document.hidden&&eV(this._element)&&this.next()}prev(){this._slide(tj)}pause(){this._isSliding&&eq(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){if(this._config.ride){if(this._isSliding){tl.one(this._element,tz,()=>this.cycle());return}this.cycle()}}to(e){let t=this._getItems();if(e>t.length-1||e<0)return;if(this._isSliding){tl.one(this._element,tz,()=>this.to(e));return}let i=this._getItemIndex(this._getActive());if(i===e)return;let n=e>i?tD:tj;this._slide(n,t[e])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}// Private
_configAfterMerge(e){return e.defaultInterval=e.interval,e}_addEventListeners(){this._config.keyboard&&tl.on(this._element,tR,e=>this._keydown(e)),"hover"===this._config.pause&&(tl.on(this._element,tq,()=>this.pause()),tl.on(this._element,tB,()=>this._maybeEnableCycle())),this._config.touch&&t$.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(let e of tm.find(".carousel-item img",this._element))tl.on(e,tW,e=>e.preventDefault());this._swipeHelper=new t$(this._element,{leftCallback:()=>this._slide(this._directionToOrder(tI)),rightCallback:()=>this._slide(this._directionToOrder(tM)),endCallback:()=>{"hover"===this._config.pause&&(// If it's a touch-enabled device, mouseenter/leave are fired as
// part of the mouse compatibility events on first tap - the carousel
// would stop cycling until user tapped out of it;
// here, we listen for touchend, explicitly pause the carousel
// (as if it's the second time we tap on it, mouseenter compat event
// is NOT fired) and after a timeout (to allow for mouse compatibility
// events to fire) we explicitly restart cycling
this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),500+this._config.interval))}})}_keydown(e){if(/input|textarea/i.test(e.target.tagName))return;let t=tY[e.key];t&&(e.preventDefault(),this._slide(this._directionToOrder(t)))}_getItemIndex(e){return this._getItems().indexOf(e)}_setActiveIndicatorElement(e){if(!this._indicatorsElement)return;let t=tm.findOne(tG,this._indicatorsElement);t.classList.remove(tX),t.removeAttribute("aria-current");let i=tm.findOne(`[data-bs-slide-to="${e}"]`,this._indicatorsElement);i&&(i.classList.add(tX),i.setAttribute("aria-current","true"))}_updateInterval(){let e=this._activeElement||this._getActive();if(!e)return;let t=Number.parseInt(e.getAttribute("data-bs-interval"),10);this._config.interval=t||this._config.defaultInterval}_slide(e,t=null){if(this._isSliding)return;let i=this._getActive(),n=e===tD,r=t||e4(this._getItems(),i,n,this._config.wrap);if(r===i)return;let s=this._getItemIndex(r),o=t=>tl.trigger(this._element,t,{relatedTarget:r,direction:this._orderToDirection(e),from:this._getItemIndex(i),to:s}),a=o(tH);if(a.defaultPrevented||!i||!r)return;let l=!!this._interval;this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(s),this._activeElement=r;let c=n?"carousel-item-start":"carousel-item-end",u=n?"carousel-item-next":"carousel-item-prev";r.classList.add(u),eG(r),i.classList.add(c),r.classList.add(c),this._queueCallback(()=>{r.classList.remove(c,u),r.classList.add(tX),i.classList.remove(tX,u,c),this._isSliding=!1,o(tz)},i,this._isAnimated()),l&&this.cycle()}_isAnimated(){return this._element.classList.contains("slide")}_getActive(){return tm.findOne(tJ,this._element)}_getItems(){return tm.find(tK,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(e){return eZ()?e===tI?tj:tD:e===tI?tD:tj}_orderToDirection(e){return eZ()?e===tj?tI:tM:e===tj?tM:tI}// Static
static jQueryInterface(e){return this.each(function(){let t=t1.getOrCreateInstance(this,e);if("number"==typeof e){t.to(e);return}if("string"==typeof e){if(void 0===t[e]||e.startsWith("_")||"constructor"===e)throw TypeError(`No method named "${e}"`);t[e]()}})}}/**
 * Data API implementation
 */tl.on(document,tQ,"[data-bs-slide], [data-bs-slide-to]",function(e){let t=tm.getElementFromSelector(this);if(!t||!t.classList.contains(tU))return;e.preventDefault();let i=t1.getOrCreateInstance(t),n=this.getAttribute("data-bs-slide-to");if(n){i.to(n),i._maybeEnableCycle();return}if("next"===th.getDataAttribute(this,"slide")){i.next(),i._maybeEnableCycle();return}i.prev(),i._maybeEnableCycle()}),tl.on(window,tV,()=>{let e=tm.find('[data-bs-ride="carousel"]');for(let t of e)t1.getOrCreateInstance(t)}),/**
 * jQuery
 */e0(t1);const t2=".bs.collapse",t4=`show${t2}`,t3=`shown${t2}`,t5=`hide${t2}`,t6=`hidden${t2}`,t7=`click${t2}.data-api`,t8="show",t9="collapse",ie="collapsing",it=`:scope .${t9} .${t9}`,ii='[data-bs-toggle="collapse"]',ir={parent:null,toggle:!0},is={parent:"(null|element)",toggle:"boolean"};/**
 * Class definition
 */class io extends tf{constructor(e,t){super(e,t),this._isTransitioning=!1,this._triggerArray=[];let i=tm.find(ii);for(let e of i){let t=tm.getSelectorFromElement(e),i=tm.find(t).filter(e=>e===this._element);null!==t&&i.length&&this._triggerArray.push(e)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}// Getters
static get Default(){return ir}static get DefaultType(){return is}static get NAME(){return"collapse"}// Public
toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let e=[];if(this._config.parent&&(e=this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter(e=>e!==this._element).map(e=>io.getOrCreateInstance(e,{toggle:!1}))),e.length&&e[0]._isTransitioning)return;let t=tl.trigger(this._element,t4);if(t.defaultPrevented)return;for(let t of e)t.hide();let i=this._getDimension();this._element.classList.remove(t9),this._element.classList.add(ie),this._element.style[i]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;let n=i[0].toUpperCase()+i.slice(1),r=`scroll${n}`;this._queueCallback(()=>{this._isTransitioning=!1,this._element.classList.remove(ie),this._element.classList.add(t9,t8),this._element.style[i]="",tl.trigger(this._element,t3)},this._element,!0),this._element.style[i]=`${this._element[r]}px`}hide(){if(this._isTransitioning||!this._isShown())return;let e=tl.trigger(this._element,t5);if(e.defaultPrevented)return;let t=this._getDimension();for(let e of(this._element.style[t]=`${this._element.getBoundingClientRect()[t]}px`,eG(this._element),this._element.classList.add(ie),this._element.classList.remove(t9,t8),this._triggerArray)){let t=tm.getElementFromSelector(e);t&&!this._isShown(t)&&this._addAriaAndCollapsedClass([e],!1)}this._isTransitioning=!0,this._element.style[t]="",this._queueCallback(()=>{this._isTransitioning=!1,this._element.classList.remove(ie),this._element.classList.add(t9),tl.trigger(this._element,t6)},this._element,!0)}_isShown(e=this._element){return e.classList.contains(t8)}// Private
_configAfterMerge(e){return e.toggle=!!e.toggle,e.parent=eW(e.parent),e}_getDimension(){return this._element.classList.contains("collapse-horizontal")?"width":"height"}_initializeChildren(){if(!this._config.parent)return;let e=this._getFirstLevelChildren(ii);for(let t of e){let e=tm.getElementFromSelector(t);e&&this._addAriaAndCollapsedClass([t],this._isShown(e))}}_getFirstLevelChildren(e){let t=tm.find(it,this._config.parent);// remove children if greater depth
return tm.find(e,this._config.parent).filter(e=>!t.includes(e))}_addAriaAndCollapsedClass(e,t){if(e.length)for(let i of e)i.classList.toggle("collapsed",!t),i.setAttribute("aria-expanded",t)}// Static
static jQueryInterface(e){let t={};return"string"==typeof e&&/show|hide/.test(e)&&(t.toggle=!1),this.each(function(){let i=io.getOrCreateInstance(this,t);if("string"==typeof e){if(void 0===i[e])throw TypeError(`No method named "${e}"`);i[e]()}})}}/**
 * Data API implementation
 */tl.on(document,t7,ii,function(e){for(let t of(("A"===e.target.tagName||e.delegateTarget&&"A"===e.delegateTarget.tagName)&&e.preventDefault(),tm.getMultipleElementsFromSelector(this)))io.getOrCreateInstance(t,{toggle:!1}).toggle()}),/**
 * jQuery
 */e0(io);/**
 * --------------------------------------------------------------------------
 * Bootstrap dropdown.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 *//**
 * Constants
 */const ia="dropdown",il=".bs.dropdown",ic=".data-api",iu="ArrowDown",id=`hide${il}`,ih=`hidden${il}`,ip=`show${il}`,ig=`shown${il}`,im=`click${il}${ic}`,i_=`keydown${il}${ic}`,ib=`keyup${il}${ic}`,iv="show",iy='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',iw=`${iy}.${iv}`,iA=".dropdown-menu",iE=eZ()?"top-end":"top-start",ix=eZ()?"top-start":"top-end",ik=eZ()?"bottom-end":"bottom-start",iC=eZ()?"bottom-start":"bottom-end",iT=eZ()?"left-start":"right-start",iS=eZ()?"right-start":"left-start",iL={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},iO={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};/**
 * Class definition
 */class iP extends tf{constructor(e,t){super(e,t),this._popper=null,this._parent=this._element.parentNode,// TODO: v6 revert #37011 & change markup https://getbootstrap.com/docs/5.3/forms/input-group/
this._menu=tm.next(this._element,iA)[0]||tm.prev(this._element,iA)[0]||tm.findOne(iA,this._parent),this._inNavbar=this._detectNavbar()}// Getters
static get Default(){return iL}static get DefaultType(){return iO}static get NAME(){return ia}// Public
toggle(){return this._isShown()?this.hide():this.show()}show(){if(eQ(this._element)||this._isShown())return;let e={relatedTarget:this._element},t=tl.trigger(this._element,ip,e);if(!t.defaultPrevented){// If this is a touch-enabled device we add extra
// empty mouseover listeners to the body's immediate children;
// only needed because of broken event delegation on iOS
// https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(".navbar-nav"))for(let e of[].concat(...document.body.children))tl.on(e,"mouseover",eX);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(iv),this._element.classList.add(iv),tl.trigger(this._element,ig,e)}}hide(){if(eQ(this._element)||!this._isShown())return;let e={relatedTarget:this._element};this._completeHide(e)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}// Private
_completeHide(e){let t=tl.trigger(this._element,id,e);if(!t.defaultPrevented){// If this is a touch-enabled device we remove the extra
// empty mouseover listeners we added for iOS support
if("ontouchstart"in document.documentElement)for(let e of[].concat(...document.body.children))tl.off(e,"mouseover",eX);this._popper&&this._popper.destroy(),this._menu.classList.remove(iv),this._element.classList.remove(iv),this._element.setAttribute("aria-expanded","false"),th.removeDataAttribute(this._menu,"popper"),tl.trigger(this._element,ih,e)}}_getConfig(e){if("object"==typeof(e=super._getConfig(e)).reference&&!eB(e.reference)&&"function"!=typeof e.reference.getBoundingClientRect)throw TypeError(`${ia.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return e}_createPopper(){if(void 0===s)throw TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let e=this._element;"parent"===this._config.reference?e=this._parent:eB(this._config.reference)?e=eW(this._config.reference):"object"==typeof this._config.reference&&(e=this._config.reference);let t=this._getPopperConfig();this._popper=s.createPopper(e,this._menu,t)}_isShown(){return this._menu.classList.contains(iv)}_getPlacement(){let e=this._parent;if(e.classList.contains("dropend"))return iT;if(e.classList.contains("dropstart"))return iS;if(e.classList.contains("dropup-center"))return"top";if(e.classList.contains("dropdown-center"))return"bottom";// We need to trim the value because custom properties can also include spaces
let t="end"===getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();return e.classList.contains("dropup")?t?ix:iE:t?iC:ik}_detectNavbar(){return null!==this._element.closest(".navbar")}_getOffset(){let{offset:e}=this._config;return"string"==typeof e?e.split(",").map(e=>Number.parseInt(e,10)):"function"==typeof e?t=>e(t,this._element):e}_getPopperConfig(){let e={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||"static"===this._config.display)&&(th.setDataAttribute(this._menu,"popper","static"),e.modifiers=[{name:"applyStyles",enabled:!1}]),{...e,...e1(this._config.popperConfig,[e])}}_selectMenuItem({key:e,target:t}){let i=tm.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",this._menu).filter(e=>eV(e));i.length&&// if target isn't included in items (e.g. when expanding the dropdown)
// allow cycling to get the last item in case key equals ARROW_UP_KEY
e4(i,t,e===iu,!i.includes(t)).focus()}// Static
static jQueryInterface(e){return this.each(function(){let t=iP.getOrCreateInstance(this,e);if("string"==typeof e){if(void 0===t[e])throw TypeError(`No method named "${e}"`);t[e]()}})}static clearMenus(e){if(2===e.button||"keyup"===e.type&&"Tab"!==e.key)return;let t=tm.find(iw);for(let i of t){let t=iP.getInstance(i);if(!t||!1===t._config.autoClose)continue;let n=e.composedPath(),r=n.includes(t._menu);if(n.includes(t._element)||"inside"===t._config.autoClose&&!r||"outside"===t._config.autoClose&&r||t._menu.contains(e.target)&&("keyup"===e.type&&"Tab"===e.key||/input|select|option|textarea|form/i.test(e.target.tagName)))continue;let s={relatedTarget:t._element};"click"===e.type&&(s.clickEvent=e),t._completeHide(s)}}static dataApiKeydownHandler(e){// If not an UP | DOWN | ESCAPE key => not a dropdown command
// If input/textarea && if key is other than ESCAPE => not a dropdown command
let t=/input|textarea/i.test(e.target.tagName),i="Escape"===e.key,n=["ArrowUp",iu].includes(e.key);if(!n&&!i||t&&!i)return;e.preventDefault();// TODO: v6 revert #37011 & change markup https://getbootstrap.com/docs/5.3/forms/input-group/
let r=this.matches(iy)?this:tm.prev(this,iy)[0]||tm.next(this,iy)[0]||tm.findOne(iy,e.delegateTarget.parentNode),s=iP.getOrCreateInstance(r);if(n){e.stopPropagation(),s.show(),s._selectMenuItem(e);return}s._isShown()&&(// else is escape and we check if it is shown
e.stopPropagation(),s.hide(),r.focus())}}/**
 * Data API implementation
 */tl.on(document,i_,iy,iP.dataApiKeydownHandler),tl.on(document,i_,iA,iP.dataApiKeydownHandler),tl.on(document,im,iP.clearMenus),tl.on(document,ib,iP.clearMenus),tl.on(document,im,iy,function(e){e.preventDefault(),iP.getOrCreateInstance(this).toggle()}),/**
 * jQuery
 */e0(iP);/**
 * --------------------------------------------------------------------------
 * Bootstrap util/backdrop.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 *//**
 * Constants
 */const i$="backdrop",iN="show",iF=`mousedown.bs.${i$}`,iD={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,// if false, we use the backdrop helper without adding any element to the dom
rootElement:"body"// give the choice to place backdrop under different elements
},ij={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};/**
 * Class definition
 */class iI extends tp{constructor(e){super(),this._config=this._getConfig(e),this._isAppended=!1,this._element=null}// Getters
static get Default(){return iD}static get DefaultType(){return ij}static get NAME(){return i$}// Public
show(e){if(!this._config.isVisible){e1(e);return}this._append();let t=this._getElement();this._config.isAnimated&&eG(t),t.classList.add(iN),this._emulateAnimation(()=>{e1(e)})}hide(e){if(!this._config.isVisible){e1(e);return}this._getElement().classList.remove(iN),this._emulateAnimation(()=>{this.dispose(),e1(e)})}dispose(){this._isAppended&&(tl.off(this._element,iF),this._element.remove(),this._isAppended=!1)}// Private
_getElement(){if(!this._element){let e=document.createElement("div");e.className=this._config.className,this._config.isAnimated&&e.classList.add("fade"),this._element=e}return this._element}_configAfterMerge(e){return(// use getElement() with the default "body" to get a fresh Element on each instantiation
e.rootElement=eW(e.rootElement),e)}_append(){if(this._isAppended)return;let e=this._getElement();this._config.rootElement.append(e),tl.on(e,iF,()=>{e1(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(e){e2(e,this._getElement(),this._config.isAnimated)}}const iM=".bs.focustrap",iH=`focusin${iM}`,iz=`keydown.tab${iM}`,iR="backward",iq={autofocus:!0,trapElement:null// The element to trap focus inside of
},iB={autofocus:"boolean",trapElement:"element"};/**
 * Class definition
 */class iW extends tp{constructor(e){super(),this._config=this._getConfig(e),this._isActive=!1,this._lastTabNavDirection=null}// Getters
static get Default(){return iq}static get DefaultType(){return iB}static get NAME(){return"focustrap"}// Public
activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),tl.off(document,iM),tl.on(document,iH,e=>this._handleFocusin(e)),tl.on(document,iz,e=>this._handleKeydown(e)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,tl.off(document,iM))}// Private
_handleFocusin(e){let{trapElement:t}=this._config;if(e.target===document||e.target===t||t.contains(e.target))return;let i=tm.focusableChildren(t);0===i.length?t.focus():this._lastTabNavDirection===iR?i[i.length-1].focus():i[0].focus()}_handleKeydown(e){"Tab"===e.key&&(this._lastTabNavDirection=e.shiftKey?iR:"forward")}}/**
 * --------------------------------------------------------------------------
 * Bootstrap util/scrollBar.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 *//**
 * Constants
 */const iV=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",iQ=".sticky-top",iU="padding-right",iX="margin-right";/**
 * Class definition
 */class iG{constructor(){this._element=document.body}// Public
getWidth(){// https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth#usage_notes
let e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}hide(){let e=this.getWidth();this._disableOverFlow(),// give padding to element to balance the hidden scrollbar width
this._setElementAttributes(this._element,iU,t=>t+e),// trick: We adjust positive paddingRight and negative marginRight to sticky-top elements to keep showing fullwidth
this._setElementAttributes(iV,iU,t=>t+e),this._setElementAttributes(iQ,iX,t=>t-e)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,iU),this._resetElementAttributes(iV,iU),this._resetElementAttributes(iQ,iX)}isOverflowing(){return this.getWidth()>0}// Private
_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(e,t,i){let n=this.getWidth();this._applyManipulationCallback(e,e=>{if(e!==this._element&&window.innerWidth>e.clientWidth+n)return;this._saveInitialAttribute(e,t);let r=window.getComputedStyle(e).getPropertyValue(t);e.style.setProperty(t,`${i(Number.parseFloat(r))}px`)})}_saveInitialAttribute(e,t){let i=e.style.getPropertyValue(t);i&&th.setDataAttribute(e,t,i)}_resetElementAttributes(e,t){this._applyManipulationCallback(e,e=>{let i=th.getDataAttribute(e,t);// We only want to remove the property if the value is `null`; the value can also be zero
if(null===i){e.style.removeProperty(t);return}th.removeDataAttribute(e,t),e.style.setProperty(t,i)})}_applyManipulationCallback(e,t){if(eB(e)){t(e);return}for(let i of tm.find(e,this._element))t(i)}}const iK=".bs.modal",iJ=`hide${iK}`,iY=`hidePrevented${iK}`,iZ=`hidden${iK}`,i0=`show${iK}`,i1=`shown${iK}`,i2=`resize${iK}`,i4=`click.dismiss${iK}`,i3=`mousedown.dismiss${iK}`,i5=`keydown.dismiss${iK}`,i6=`click${iK}.data-api`,i7="modal-open",i8="show",i9="modal-static",ne={backdrop:!0,focus:!0,keyboard:!0},nt={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};/**
 * Class definition
 */class ni extends tf{constructor(e,t){super(e,t),this._dialog=tm.findOne(".modal-dialog",this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new iG,this._addEventListeners()}// Getters
static get Default(){return ne}static get DefaultType(){return nt}static get NAME(){return"modal"}// Public
toggle(e){return this._isShown?this.hide():this.show(e)}show(e){if(this._isShown||this._isTransitioning)return;let t=tl.trigger(this._element,i0,{relatedTarget:e});t.defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(i7),this._adjustDialog(),this._backdrop.show(()=>this._showElement(e)))}hide(){if(!this._isShown||this._isTransitioning)return;let e=tl.trigger(this._element,iJ);e.defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(i8),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated()))}dispose(){tl.off(window,iK),tl.off(this._dialog,iK),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}// Private
_initializeBackDrop(){return new iI({isVisible:!!this._config.backdrop,// 'static' option will be translated to true, and booleans will keep their value,
isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new iW({trapElement:this._element})}_showElement(e){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;let t=tm.findOne(".modal-body",this._dialog);t&&(t.scrollTop=0),eG(this._element),this._element.classList.add(i8),this._queueCallback(()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,tl.trigger(this._element,i1,{relatedTarget:e})},this._dialog,this._isAnimated())}_addEventListeners(){tl.on(this._element,i5,e=>{if("Escape"===e.key){if(this._config.keyboard){this.hide();return}this._triggerBackdropTransition()}}),tl.on(window,i2,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),tl.on(this._element,i3,e=>{// a bad trick to segregate clicks that may start inside dialog but end outside, and avoid listen to scrollbar clicks
tl.one(this._element,i4,t=>{if(this._element===e.target&&this._element===t.target){if("static"===this._config.backdrop){this._triggerBackdropTransition();return}this._config.backdrop&&this.hide()}})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(i7),this._resetAdjustments(),this._scrollBar.reset(),tl.trigger(this._element,iZ)})}_isAnimated(){return this._element.classList.contains("fade")}_triggerBackdropTransition(){let e=tl.trigger(this._element,iY);if(e.defaultPrevented)return;let t=this._element.scrollHeight>document.documentElement.clientHeight,i=this._element.style.overflowY;// return if the following background transition hasn't yet completed
"hidden"===i||this._element.classList.contains(i9)||(t||(this._element.style.overflowY="hidden"),this._element.classList.add(i9),this._queueCallback(()=>{this._element.classList.remove(i9),this._queueCallback(()=>{this._element.style.overflowY=i},this._dialog)},this._dialog),this._element.focus())}/**
   * The following methods are used to handle overflowing modals
   */_adjustDialog(){let e=this._element.scrollHeight>document.documentElement.clientHeight,t=this._scrollBar.getWidth(),i=t>0;if(i&&!e){let e=eZ()?"paddingLeft":"paddingRight";this._element.style[e]=`${t}px`}if(!i&&e){let e=eZ()?"paddingRight":"paddingLeft";this._element.style[e]=`${t}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}// Static
static jQueryInterface(e,t){return this.each(function(){let i=ni.getOrCreateInstance(this,e);if("string"==typeof e){if(void 0===i[e])throw TypeError(`No method named "${e}"`);i[e](t)}})}}/**
 * Data API implementation
 */tl.on(document,i6,'[data-bs-toggle="modal"]',function(e){let t=tm.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&e.preventDefault(),tl.one(t,i0,e=>{e.defaultPrevented||tl.one(t,iZ,()=>{eV(this)&&this.focus()})});// avoid conflict when clicking modal toggler while another one is open
let i=tm.findOne(".modal.show");i&&ni.getInstance(i).hide();let n=ni.getOrCreateInstance(t);n.toggle(this)}),t_(ni),/**
 * jQuery
 */e0(ni);const nn=".bs.offcanvas",nr=".data-api",ns=`load${nn}${nr}`,no="show",na="showing",nl="hiding",nc=".offcanvas.show",nu=`show${nn}`,nd=`shown${nn}`,nh=`hide${nn}`,np=`hidePrevented${nn}`,nf=`hidden${nn}`,ng=`resize${nn}`,nm=`click${nn}${nr}`,n_=`keydown.dismiss${nn}`,nb={backdrop:!0,keyboard:!0,scroll:!1},nv={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};/**
 * Class definition
 */class ny extends tf{constructor(e,t){super(e,t),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}// Getters
static get Default(){return nb}static get DefaultType(){return nv}static get NAME(){return"offcanvas"}// Public
toggle(e){return this._isShown?this.hide():this.show(e)}show(e){if(this._isShown)return;let t=tl.trigger(this._element,nu,{relatedTarget:e});t.defaultPrevented||(this._isShown=!0,this._backdrop.show(),this._config.scroll||new iG().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(na),this._queueCallback(()=>{(!this._config.scroll||this._config.backdrop)&&this._focustrap.activate(),this._element.classList.add(no),this._element.classList.remove(na),tl.trigger(this._element,nd,{relatedTarget:e})},this._element,!0))}hide(){if(!this._isShown)return;let e=tl.trigger(this._element,nh);e.defaultPrevented||(this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(nl),this._backdrop.hide(),this._queueCallback(()=>{this._element.classList.remove(no,nl),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new iG().reset(),tl.trigger(this._element,nf)},this._element,!0))}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}// Private
_initializeBackDrop(){// 'static' option will be translated to true, and booleans will keep their value
let e=!!this._config.backdrop;return new iI({className:"offcanvas-backdrop",isVisible:e,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:e?()=>{if("static"===this._config.backdrop){tl.trigger(this._element,np);return}this.hide()}:null})}_initializeFocusTrap(){return new iW({trapElement:this._element})}_addEventListeners(){tl.on(this._element,n_,e=>{if("Escape"===e.key){if(this._config.keyboard){this.hide();return}tl.trigger(this._element,np)}})}// Static
static jQueryInterface(e){return this.each(function(){let t=ny.getOrCreateInstance(this,e);if("string"==typeof e){if(void 0===t[e]||e.startsWith("_")||"constructor"===e)throw TypeError(`No method named "${e}"`);t[e](this)}})}}/**
 * Data API implementation
 */tl.on(document,nm,'[data-bs-toggle="offcanvas"]',function(e){let t=tm.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&e.preventDefault(),eQ(this))return;tl.one(t,nf,()=>{// focus on trigger when it is closed
eV(this)&&this.focus()});// avoid conflict when clicking a toggler of an offcanvas, while another is open
let i=tm.findOne(nc);i&&i!==t&&ny.getInstance(i).hide();let n=ny.getOrCreateInstance(t);n.toggle(this)}),tl.on(window,ns,()=>{for(let e of tm.find(nc))ny.getOrCreateInstance(e).show()}),tl.on(window,ng,()=>{for(let e of tm.find("[aria-modal][class*=show][class*=offcanvas-]"))"fixed"!==getComputedStyle(e).position&&ny.getOrCreateInstance(e).hide()}),t_(ny),/**
 * jQuery
 */e0(ny);const nw={// Global attributes allowed on any supplied element below.
"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},nA=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),nE=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,nx=(e,t)=>{let i=e.nodeName.toLowerCase();return t.includes(i)?!nA.has(i)||!!nE.test(e.nodeValue):t.filter(e=>e instanceof RegExp).some(e=>e.test(i))},nk={allowList:nw,content:{},// { selector : text ,  selector2 : text2 , }
extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},nC={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},nT={entry:"(string|element|function|null)",selector:"(string|element)"};/**
 * Class definition
 */class nS extends tp{constructor(e){super(),this._config=this._getConfig(e)}// Getters
static get Default(){return nk}static get DefaultType(){return nC}static get NAME(){return"TemplateFactory"}// Public
getContent(){return Object.values(this._config.content).map(e=>this._resolvePossibleFunction(e)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(e){return this._checkContent(e),this._config.content={...this._config.content,...e},this}toHtml(){let e=document.createElement("div");for(let[t,i]of(e.innerHTML=this._maybeSanitize(this._config.template),Object.entries(this._config.content)))this._setContent(e,i,t);let t=e.children[0],i=this._resolvePossibleFunction(this._config.extraClass);return i&&t.classList.add(...i.split(" ")),t}// Private
_typeCheckConfig(e){super._typeCheckConfig(e),this._checkContent(e.content)}_checkContent(e){for(let[t,i]of Object.entries(e))super._typeCheckConfig({selector:t,entry:i},nT)}_setContent(e,t,i){let n=tm.findOne(i,e);if(n){if(!(t=this._resolvePossibleFunction(t))){n.remove();return}if(eB(t)){this._putElementInTemplate(eW(t),n);return}if(this._config.html){n.innerHTML=this._maybeSanitize(t);return}n.textContent=t}}_maybeSanitize(e){return this._config.sanitize?function(e,t,i){if(!e.length)return e;if(i&&"function"==typeof i)return i(e);let n=new window.DOMParser,r=n.parseFromString(e,"text/html"),s=[].concat(...r.body.querySelectorAll("*"));for(let e of s){let i=e.nodeName.toLowerCase();if(!Object.keys(t).includes(i)){e.remove();continue}let n=[].concat(...e.attributes),r=[].concat(t["*"]||[],t[i]||[]);for(let t of n)nx(t,r)||e.removeAttribute(t.nodeName)}return r.body.innerHTML}(e,this._config.allowList,this._config.sanitizeFn):e}_resolvePossibleFunction(e){return e1(e,[this])}_putElementInTemplate(e,t){if(this._config.html){t.innerHTML="",t.append(e);return}t.textContent=e.textContent}}const nL=new Set(["sanitize","allowList","sanitizeFn"]),nO="fade",nP="show",n$=".modal",nN="hide.bs.modal",nF="hover",nD="focus",nj={AUTO:"auto",TOP:"top",RIGHT:eZ()?"left":"right",BOTTOM:"bottom",LEFT:eZ()?"right":"left"},nI={allowList:nw,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,6],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},nM={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};/**
 * Class definition
 */class nH extends tf{constructor(e,t){if(void 0===s)throw TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(e,t),// Private
this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,// Protected
this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}// Getters
static get Default(){return nI}static get DefaultType(){return nM}static get NAME(){return"tooltip"}// Public
enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){if(this._isEnabled){if(this._activeTrigger.click=!this._activeTrigger.click,this._isShown()){this._leave();return}this._enter()}}dispose(){clearTimeout(this._timeout),tl.off(this._element.closest(n$),nN,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if("none"===this._element.style.display)throw Error("Please use show on visible elements");if(!(this._isWithContent()&&this._isEnabled))return;let e=tl.trigger(this._element,this.constructor.eventName("show")),t=eU(this._element),i=(t||this._element.ownerDocument.documentElement).contains(this._element);if(e.defaultPrevented||!i)return;// TODO: v6 remove this or make it optional
this._disposePopper();let n=this._getTipElement();this._element.setAttribute("aria-describedby",n.getAttribute("id"));let{container:r}=this._config;// If this is a touch-enabled device we add extra
// empty mouseover listeners to the body's immediate children;
// only needed because of broken event delegation on iOS
// https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
if(this._element.ownerDocument.documentElement.contains(this.tip)||(r.append(n),tl.trigger(this._element,this.constructor.eventName("inserted"))),this._popper=this._createPopper(n),n.classList.add(nP),"ontouchstart"in document.documentElement)for(let e of[].concat(...document.body.children))tl.on(e,"mouseover",eX);this._queueCallback(()=>{tl.trigger(this._element,this.constructor.eventName("shown")),!1===this._isHovered&&this._leave(),this._isHovered=!1},this.tip,this._isAnimated())}hide(){if(!this._isShown())return;let e=tl.trigger(this._element,this.constructor.eventName("hide"));if(e.defaultPrevented)return;let t=this._getTipElement();// If this is a touch-enabled device we remove the extra
// empty mouseover listeners we added for iOS support
if(t.classList.remove(nP),"ontouchstart"in document.documentElement)for(let e of[].concat(...document.body.children))tl.off(e,"mouseover",eX);this._activeTrigger.click=!1,this._activeTrigger[nD]=!1,this._activeTrigger[nF]=!1,this._isHovered=null,this._queueCallback(()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),tl.trigger(this._element,this.constructor.eventName("hidden")))},this.tip,this._isAnimated())}update(){this._popper&&this._popper.update()}// Protected
_isWithContent(){return!!this._getTitle()}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(e){let t=this._getTemplateFactory(e).toHtml();// TODO: remove this check in v6
if(!t)return null;t.classList.remove(nO,nP),// TODO: v6 the following can be achieved with CSS only
t.classList.add(`bs-${this.constructor.NAME}-auto`);let i=ez(this.constructor.NAME).toString();return t.setAttribute("id",i),this._isAnimated()&&t.classList.add(nO),t}setContent(e){this._newContent=e,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(e){return this._templateFactory?this._templateFactory.changeContent(e):this._templateFactory=new nS({...this._config,content:// to override config.content in case of popover
e,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{".tooltip-inner":this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}// Private
_initializeOnDelegatedTarget(e){return this.constructor.getOrCreateInstance(e.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(nO)}_isShown(){return this.tip&&this.tip.classList.contains(nP)}_createPopper(e){let t=e1(this._config.placement,[this,e,this._element]),i=nj[t.toUpperCase()];return s.createPopper(this._element,e,this._getPopperConfig(i))}_getOffset(){let{offset:e}=this._config;return"string"==typeof e?e.split(",").map(e=>Number.parseInt(e,10)):"function"==typeof e?t=>e(t,this._element):e}_resolvePossibleFunction(e){return e1(e,[this._element])}_getPopperConfig(e){let t={placement:e,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:e=>{// Pre-set Popper's placement attribute in order to read the arrow sizes properly.
// Otherwise, Popper mixes up the width and height dimensions since the initial arrow style is for top placement
this._getTipElement().setAttribute("data-popper-placement",e.state.placement)}}]};return{...t,...e1(this._config.popperConfig,[t])}}_setListeners(){let e=this._config.trigger.split(" ");for(let t of e)if("click"===t)tl.on(this._element,this.constructor.eventName("click"),this._config.selector,e=>{let t=this._initializeOnDelegatedTarget(e);t.toggle()});else if("manual"!==t){let e=t===nF?this.constructor.eventName("mouseenter"):this.constructor.eventName("focusin"),i=t===nF?this.constructor.eventName("mouseleave"):this.constructor.eventName("focusout");tl.on(this._element,e,this._config.selector,e=>{let t=this._initializeOnDelegatedTarget(e);t._activeTrigger["focusin"===e.type?nD:nF]=!0,t._enter()}),tl.on(this._element,i,this._config.selector,e=>{let t=this._initializeOnDelegatedTarget(e);t._activeTrigger["focusout"===e.type?nD:nF]=t._element.contains(e.relatedTarget),t._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},tl.on(this._element.closest(n$),nN,this._hideModalHandler)}_fixTitle(){let e=this._element.getAttribute("title");e&&(this._element.getAttribute("aria-label")||this._element.textContent.trim()||this._element.setAttribute("aria-label",e),this._element.setAttribute("data-bs-original-title",e),this._element.removeAttribute("title"))}_enter(){if(this._isShown()||this._isHovered){this._isHovered=!0;return}this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show)}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(e,t){clearTimeout(this._timeout),this._timeout=setTimeout(e,t)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(e){let t=th.getDataAttributes(this._element);for(let e of Object.keys(t))nL.has(e)&&delete t[e];return e={...t,..."object"==typeof e&&e?e:{}},e=this._mergeConfigObj(e),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}_configAfterMerge(e){return e.container=!1===e.container?document.body:eW(e.container),"number"==typeof e.delay&&(e.delay={show:e.delay,hide:e.delay}),"number"==typeof e.title&&(e.title=e.title.toString()),"number"==typeof e.content&&(e.content=e.content.toString()),e}_getDelegateConfig(){let e={};for(let[t,i]of Object.entries(this._config))this.constructor.Default[t]!==i&&(e[t]=i);// In the future can be replaced with:
// const keysWithDifferentValues = Object.entries(this._config).filter(entry => this.constructor.Default[entry[0]] !== this._config[entry[0]])
// `Object.fromEntries(keysWithDifferentValues)`
return e.selector=!1,e.trigger="manual",e}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}// Static
static jQueryInterface(e){return this.each(function(){let t=nH.getOrCreateInstance(this,e);if("string"==typeof e){if(void 0===t[e])throw TypeError(`No method named "${e}"`);t[e]()}})}}/**
 * jQuery
 */e0(nH);const nz={...nH.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},nR={...nH.DefaultType,content:"(null|string|element|function)"};/**
 * Class definition
 */class nq extends nH{// Getters
static get Default(){return nz}static get DefaultType(){return nR}static get NAME(){return"popover"}// Overrides
_isWithContent(){return this._getTitle()||this._getContent()}// Private
_getContentForTemplate(){return{".popover-header":this._getTitle(),".popover-body":this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}// Static
static jQueryInterface(e){return this.each(function(){let t=nq.getOrCreateInstance(this,e);if("string"==typeof e){if(void 0===t[e])throw TypeError(`No method named "${e}"`);t[e]()}})}}/**
 * jQuery
 */e0(nq);const nB=".bs.scrollspy",nW=`activate${nB}`,nV=`click${nB}`,nQ=`load${nB}.data-api`,nU="active",nX="[href]",nG=".nav-link",nK=`${nG}, .nav-item > ${nG}, .list-group-item`,nJ={offset:null,// TODO: v6 @deprecated, keep it for backwards compatibility reasons
rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},nY={offset:"(number|null)",// TODO v6 @deprecated, keep it for backwards compatibility reasons
rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};/**
 * Class definition
 */class nZ extends tf{constructor(e,t){super(e,t),// this._element is the observablesContainer and config.target the menu links wrapper
this._targetLinks=new Map,this._observableSections=new Map,this._rootElement="visible"===getComputedStyle(this._element).overflowY?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}// Getters
static get Default(){return nJ}static get DefaultType(){return nY}static get NAME(){return"scrollspy"}// Public
refresh(){for(let e of(this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver(),this._observableSections.values()))this._observer.observe(e)}dispose(){this._observer.disconnect(),super.dispose()}// Private
_configAfterMerge(e){return(// TODO: on v6 target should be given explicitly & remove the {target: 'ss-target'} case
e.target=eW(e.target)||document.body,// TODO: v6 Only for backwards compatibility reasons. Use rootMargin only
e.rootMargin=e.offset?`${e.offset}px 0px -30%`:e.rootMargin,"string"==typeof e.threshold&&(e.threshold=e.threshold.split(",").map(e=>Number.parseFloat(e))),e)}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(// unregister any previous listeners
tl.off(this._config.target,nV),tl.on(this._config.target,nV,nX,e=>{let t=this._observableSections.get(e.target.hash);if(t){e.preventDefault();let i=this._rootElement||window,n=t.offsetTop-this._element.offsetTop;if(i.scrollTo){i.scrollTo({top:n,behavior:"smooth"});return}// Chrome 60 doesn't support `scrollTo`
i.scrollTop=n}}))}_getNewObserver(){let e={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(e=>this._observerCallback(e),e)}// The logic of selection
_observerCallback(e){let t=e=>this._targetLinks.get(`#${e.target.id}`),i=e=>{this._previousScrollData.visibleEntryTop=e.target.offsetTop,this._process(t(e))},n=(this._rootElement||document.documentElement).scrollTop,r=n>=this._previousScrollData.parentScrollTop;for(let s of(this._previousScrollData.parentScrollTop=n,e)){if(!s.isIntersecting){this._activeTarget=null,this._clearActiveClass(t(s));continue}let e=s.target.offsetTop>=this._previousScrollData.visibleEntryTop;// if we are scrolling down, pick the bigger offsetTop
if(r&&e){// if parent isn't scrolled, let's keep the first visible item, breaking the iteration
if(i(s),!n)return;continue}// if we are scrolling up, pick the smallest offsetTop
r||e||i(s)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;let e=tm.find(nX,this._config.target);for(let t of e){// ensure that the anchor has an id and is not disabled
if(!t.hash||eQ(t))continue;let e=tm.findOne(decodeURI(t.hash),this._element);// ensure that the observableSection exists & is visible
eV(e)&&(this._targetLinks.set(decodeURI(t.hash),t),this._observableSections.set(t.hash,e))}}_process(e){this._activeTarget!==e&&(this._clearActiveClass(this._config.target),this._activeTarget=e,e.classList.add(nU),this._activateParents(e),tl.trigger(this._element,nW,{relatedTarget:e}))}_activateParents(e){// Activate dropdown parents
if(e.classList.contains("dropdown-item")){tm.findOne(".dropdown-toggle",e.closest(".dropdown")).classList.add(nU);return}for(let t of tm.parents(e,".nav, .list-group"))// With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor
for(let e of tm.prev(t,nK))e.classList.add(nU)}_clearActiveClass(e){e.classList.remove(nU);let t=tm.find(`${nX}.${nU}`,e);for(let e of t)e.classList.remove(nU)}// Static
static jQueryInterface(e){return this.each(function(){let t=nZ.getOrCreateInstance(this,e);if("string"==typeof e){if(void 0===t[e]||e.startsWith("_")||"constructor"===e)throw TypeError(`No method named "${e}"`);t[e]()}})}}/**
 * Data API implementation
 */tl.on(window,nQ,()=>{for(let e of tm.find('[data-bs-spy="scroll"]'))nZ.getOrCreateInstance(e)}),/**
 * jQuery
 */e0(nZ);const n0=".bs.tab",n1=`hide${n0}`,n2=`hidden${n0}`,n4=`show${n0}`,n3=`shown${n0}`,n5=`click${n0}`,n6=`keydown${n0}`,n7=`load${n0}`,n8="ArrowRight",n9="ArrowDown",re="Home",rt="active",ri="fade",rn="show",rr=".dropdown-toggle",rs=`:not(${rr})`,ro=`.nav-link${rs}, .list-group-item${rs}, [role="tab"]${rs}`,ra='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',rl=`${ro}, ${ra}`,rc=`.${rt}[data-bs-toggle="tab"], .${rt}[data-bs-toggle="pill"], .${rt}[data-bs-toggle="list"]`;/**
 * Class definition
 */class ru extends tf{constructor(e){if(super(e),this._parent=this._element.closest('.list-group, .nav, [role="tablist"]'),!this._parent)return;// Set up initial aria attributes
this._setInitialAttributes(this._parent,this._getChildren()),tl.on(this._element,n6,e=>this._keydown(e))}// Getters
static get NAME(){return"tab"}// Public
show(){// Shows this elem and deactivate the active sibling if exists
let e=this._element;if(this._elemIsActive(e))return;// Search for active tab on same parent to deactivate it
let t=this._getActiveElem(),i=t?tl.trigger(t,n1,{relatedTarget:e}):null,n=tl.trigger(e,n4,{relatedTarget:t});n.defaultPrevented||i&&i.defaultPrevented||(this._deactivate(t,e),this._activate(e,t))}// Private
_activate(e,t){e&&(e.classList.add(rt),this._activate(tm.getElementFromSelector(e)),this._queueCallback(()=>{if("tab"!==e.getAttribute("role")){e.classList.add(rn);return}e.removeAttribute("tabindex"),e.setAttribute("aria-selected",!0),this._toggleDropDown(e,!0),tl.trigger(e,n3,{relatedTarget:t})},e,e.classList.contains(ri)))}_deactivate(e,t){e&&(e.classList.remove(rt),e.blur(),this._deactivate(tm.getElementFromSelector(e)),this._queueCallback(()=>{if("tab"!==e.getAttribute("role")){e.classList.remove(rn);return}e.setAttribute("aria-selected",!1),e.setAttribute("tabindex","-1"),this._toggleDropDown(e,!1),tl.trigger(e,n2,{relatedTarget:t})},e,e.classList.contains(ri)))}_keydown(e){let t;if(!["ArrowLeft",n8,"ArrowUp",n9,re,"End"].includes(e.key))return;e.stopPropagation(),e.preventDefault();let i=this._getChildren().filter(e=>!eQ(e));if([re,"End"].includes(e.key))t=i[e.key===re?0:i.length-1];else{let n=[n8,n9].includes(e.key);t=e4(i,e.target,n,!0)}t&&(t.focus({preventScroll:!0}),ru.getOrCreateInstance(t).show())}_getChildren(){// collection of inner elements
return tm.find(rl,this._parent)}_getActiveElem(){return this._getChildren().find(e=>this._elemIsActive(e))||null}_setInitialAttributes(e,t){for(let i of(this._setAttributeIfNotExists(e,"role","tablist"),t))this._setInitialAttributesOnChild(i)}_setInitialAttributesOnChild(e){e=this._getInnerElement(e);let t=this._elemIsActive(e),i=this._getOuterElement(e);e.setAttribute("aria-selected",t),i!==e&&this._setAttributeIfNotExists(i,"role","presentation"),t||e.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(e,"role","tab"),// set attributes to the related panel too
this._setInitialAttributesOnTargetPanel(e)}_setInitialAttributesOnTargetPanel(e){let t=tm.getElementFromSelector(e);t&&(this._setAttributeIfNotExists(t,"role","tabpanel"),e.id&&this._setAttributeIfNotExists(t,"aria-labelledby",`${e.id}`))}_toggleDropDown(e,t){let i=this._getOuterElement(e);if(!i.classList.contains("dropdown"))return;let n=(e,n)=>{let r=tm.findOne(e,i);r&&r.classList.toggle(n,t)};n(rr,rt),n(".dropdown-menu",rn),i.setAttribute("aria-expanded",t)}_setAttributeIfNotExists(e,t,i){e.hasAttribute(t)||e.setAttribute(t,i)}_elemIsActive(e){return e.classList.contains(rt)}// Try to get the inner element (usually the .nav-link)
_getInnerElement(e){return e.matches(rl)?e:tm.findOne(rl,e)}// Try to get the outer element (usually the .nav-item)
_getOuterElement(e){return e.closest(".nav-item, .list-group-item")||e}// Static
static jQueryInterface(e){return this.each(function(){let t=ru.getOrCreateInstance(this);if("string"==typeof e){if(void 0===t[e]||e.startsWith("_")||"constructor"===e)throw TypeError(`No method named "${e}"`);t[e]()}})}}/**
 * Data API implementation
 */tl.on(document,n5,ra,function(e){["A","AREA"].includes(this.tagName)&&e.preventDefault(),eQ(this)||ru.getOrCreateInstance(this).show()}),/**
 * Initialize on focus
 */tl.on(window,n7,()=>{for(let e of tm.find(rc))ru.getOrCreateInstance(e)}),/**
 * jQuery
 */e0(ru);const rd=".bs.toast",rh=`mouseover${rd}`,rp=`mouseout${rd}`,rf=`focusin${rd}`,rg=`focusout${rd}`,rm=`hide${rd}`,r_=`hidden${rd}`,rb=`show${rd}`,rv=`shown${rd}`,ry="hide",rw="show",rA="showing",rE={animation:"boolean",autohide:"boolean",delay:"number"},rx={animation:!0,autohide:!0,delay:5e3};/**
 * Class definition
 */class rk extends tf{constructor(e,t){super(e,t),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}// Getters
static get Default(){return rx}static get DefaultType(){return rE}static get NAME(){return"toast"}// Public
show(){let e=tl.trigger(this._element,rb);e.defaultPrevented||(this._clearTimeout(),this._config.animation&&this._element.classList.add("fade"),this._element.classList.remove(ry),eG(this._element),this._element.classList.add(rw,rA),this._queueCallback(()=>{this._element.classList.remove(rA),tl.trigger(this._element,rv),this._maybeScheduleHide()},this._element,this._config.animation))}hide(){if(!this.isShown())return;let e=tl.trigger(this._element,rm);e.defaultPrevented||(this._element.classList.add(rA),this._queueCallback(()=>{this._element.classList.add(ry),this._element.classList.remove(rA,rw),tl.trigger(this._element,r_)},this._element,this._config.animation))}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(rw),super.dispose()}isShown(){return this._element.classList.contains(rw)}// Private
_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(e,t){switch(e.type){case"mouseover":case"mouseout":this._hasMouseInteraction=t;break;case"focusin":case"focusout":this._hasKeyboardInteraction=t}if(t){this._clearTimeout();return}let i=e.relatedTarget;this._element===i||this._element.contains(i)||this._maybeScheduleHide()}_setListeners(){tl.on(this._element,rh,e=>this._onInteraction(e,!0)),tl.on(this._element,rp,e=>this._onInteraction(e,!1)),tl.on(this._element,rf,e=>this._onInteraction(e,!0)),tl.on(this._element,rg,e=>this._onInteraction(e,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}// Static
static jQueryInterface(e){return this.each(function(){let t=rk.getOrCreateInstance(this,e);if("string"==typeof e){if(void 0===t[e])throw TypeError(`No method named "${e}"`);t[e](this)}})}}/**
 * Data API implementation
 */t_(rk),/**
 * jQuery
 */e0(rk);var rC={},rT=function(e){// Private helper vars
var t=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,i=0,n={},r={/**
		 * By default, Prism will attempt to highlight all code elements (by calling {@link Prism.highlightAll}) on the
		 * current page after the page finished loading. This might be a problem if e.g. you wanted to asynchronously load
		 * additional languages or plugins yourself.
		 *
		 * By setting this value to `true`, Prism will not automatically highlight all code elements on the page.
		 *
		 * You obviously have to change this value before the automatic highlighting started. To do this, you can add an
		 * empty Prism object into the global scope before loading the Prism script like this:
		 *
		 * ```js
		 * window.Prism = window.Prism || {};
		 * Prism.manual = true;
		 * // add a new <script> to load Prism's script
		 * ```
		 *
		 * @default false
		 * @type {boolean}
		 * @memberof Prism
		 * @public
		 */manual:e.Prism&&e.Prism.manual,/**
		 * By default, if Prism is in a web worker, it assumes that it is in a worker it created itself, so it uses
		 * `addEventListener` to communicate with its parent instance. However, if you're using Prism manually in your
		 * own worker, you don't want it to do this.
		 *
		 * By setting this value to `true`, Prism will not add its own listeners to the worker.
		 *
		 * You obviously have to change this value before Prism executes. To do this, you can add an
		 * empty Prism object into the global scope before loading the Prism script like this:
		 *
		 * ```js
		 * window.Prism = window.Prism || {};
		 * Prism.disableWorkerMessageHandler = true;
		 * // Load Prism's script
		 * ```
		 *
		 * @default false
		 * @type {boolean}
		 * @memberof Prism
		 * @public
		 */disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,/**
		 * A namespace for utility methods.
		 *
		 * All function in this namespace that are not explicitly marked as _public_ are for __internal use only__ and may
		 * change or disappear at any time.
		 *
		 * @namespace
		 * @memberof Prism
		 */util:{encode:function e(t){return t instanceof s?new s(t.type,e(t.content),t.alias):Array.isArray(t)?t.map(e):t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},/**
			 * Returns the name of the type of the given value.
			 *
			 * @param {any} o
			 * @returns {string}
			 * @example
			 * type(null)      === 'Null'
			 * type(undefined) === 'Undefined'
			 * type(123)       === 'Number'
			 * type('foo')     === 'String'
			 * type(true)      === 'Boolean'
			 * type([1, 2])    === 'Array'
			 * type({})        === 'Object'
			 * type(String)    === 'Function'
			 * type(/abc+/)    === 'RegExp'
			 */type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},/**
			 * Returns a unique number for the given object. Later calls will still return the same number.
			 *
			 * @param {Object} obj
			 * @returns {number}
			 */objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++i}),e.__id},/**
			 * Creates a deep clone of the given object.
			 *
			 * The main intended use of this function is to clone language definitions.
			 *
			 * @param {T} o
			 * @param {Record<number, any>} [visited]
			 * @returns {T}
			 * @template T
			 */clone:function e(t,i){var n,s;switch(i=i||{},r.util.type(t)){case"Object":if(i[s=r.util.objId(t)])return i[s];for(var o in n=/** @type {Record<string, any>} */{},i[s]=n,t)t.hasOwnProperty(o)&&(n[o]=e(t[o],i));return /** @type {any} */n;case"Array":if(i[s=r.util.objId(t)])return i[s];return n=[],i[s]=n,/** @type {Array} *//** @type {any} */t.forEach(function(t,r){n[r]=e(t,i)}),/** @type {any} */n;default:return t}},/**
			 * Returns the Prism language of the given element set by a `language-xxxx` or `lang-xxxx` class.
			 *
			 * If no language is set for the element or the element is `null` or `undefined`, `none` will be returned.
			 *
			 * @param {Element} element
			 * @returns {string}
			 */getLanguage:function(e){for(;e;){var i=t.exec(e.className);if(i)return i[1].toLowerCase();e=e.parentElement}return"none"},/**
			 * Sets the Prism `language-xxxx` class of the given element.
			 *
			 * @param {Element} element
			 * @param {string} language
			 * @returns {void}
			 */setLanguage:function(e,i){// remove all `language-xxxx` classes
// (this might leave behind a leading space)
e.className=e.className.replace(RegExp(t,"gi"),""),// add the new `language-xxxx` class
// (using `classList` will automatically clean up spaces for us)
e.classList.add("language-"+i)},/**
			 * Returns the script element that is currently executing.
			 *
			 * This does __not__ work for line script element.
			 *
			 * @returns {HTMLScriptElement | null}
			 */currentScript:function(){if("undefined"==typeof document)return null;if("currentScript"in document)return /** @type {any} */document.currentScript;// IE11 workaround
// we'll get the src of the current script by parsing IE11's error stack trace
// this will not work for inline scripts
try{throw Error()}catch(n){// Get file src url from stack. Specifically works with the format of stack traces in IE.
// A stack will look like this:
//
// Error
//    at _.util.currentScript (http://localhost/components/prism-core.js:119:5)
//    at Global code (http://localhost/components/prism-core.js:606:1)
var e=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(n.stack)||[])[1];if(e){var t=document.getElementsByTagName("script");for(var i in t)if(t[i].src==e)return t[i]}return null}},/**
			 * Returns whether a given class is active for `element`.
			 *
			 * The class can be activated if `element` or one of its ancestors has the given class and it can be deactivated
			 * if `element` or one of its ancestors has the negated version of the given class. The _negated version_ of the
			 * given class is just the given class with a `no-` prefix.
			 *
			 * Whether the class is active is determined by the closest ancestor of `element` (where `element` itself is
			 * closest ancestor) that has the given class or the negated version of it. If neither `element` nor any of its
			 * ancestors have the given class or the negated version of it, then the default activation will be returned.
			 *
			 * In the paradoxical situation where the closest ancestor contains __both__ the given class and the negated
			 * version of it, the class is considered active.
			 *
			 * @param {Element} element
			 * @param {string} className
			 * @param {boolean} [defaultActivation=false]
			 * @returns {boolean}
			 */isActive:function(e,t,i){for(var n="no-"+t;e;){var r=e.classList;if(r.contains(t))return!0;if(r.contains(n))return!1;e=e.parentElement}return!!i}},/**
		 * This namespace contains all currently loaded languages and the some helper functions to create and modify languages.
		 *
		 * @namespace
		 * @memberof Prism
		 * @public
		 */languages:{/**
			 * The grammar for plain, unformatted text.
			 */plain:n,plaintext:n,text:n,txt:n,/**
			 * Creates a deep copy of the language with the given id and appends the given tokens.
			 *
			 * If a token in `redef` also appears in the copied language, then the existing token in the copied language
			 * will be overwritten at its original position.
			 *
			 * ## Best practices
			 *
			 * Since the position of overwriting tokens (token in `redef` that overwrite tokens in the copied language)
			 * doesn't matter, they can technically be in any order. However, this can be confusing to others that trying to
			 * understand the language definition because, normally, the order of tokens matters in Prism grammars.
			 *
			 * Therefore, it is encouraged to order overwriting tokens according to the positions of the overwritten tokens.
			 * Furthermore, all non-overwriting tokens should be placed after the overwriting ones.
			 *
			 * @param {string} id The id of the language to extend. This has to be a key in `Prism.languages`.
			 * @param {Grammar} redef The new tokens to append.
			 * @returns {Grammar} The new language created.
			 * @public
			 * @example
			 * Prism.languages['css-with-colors'] = Prism.languages.extend('css', {
			 *     // Prism.languages.css already has a 'comment' token, so this token will overwrite CSS' 'comment' token
			 *     // at its original position
			 *     'comment': { ... },
			 *     // CSS doesn't have a 'color' token, so this token will be appended
			 *     'color': /\b(?:red|green|blue)\b/
			 * });
			 */extend:function(e,t){var i=r.util.clone(r.languages[e]);for(var n in t)i[n]=t[n];return i},/**
			 * Inserts tokens _before_ another token in a language definition or any other grammar.
			 *
			 * ## Usage
			 *
			 * This helper method makes it easy to modify existing languages. For example, the CSS language definition
			 * not only defines CSS highlighting for CSS documents, but also needs to define highlighting for CSS embedded
			 * in HTML through `<style>` elements. To do this, it needs to modify `Prism.languages.markup` and add the
			 * appropriate tokens. However, `Prism.languages.markup` is a regular JavaScript object literal, so if you do
			 * this:
			 *
			 * ```js
			 * Prism.languages.markup.style = {
			 *     // token
			 * };
			 * ```
			 *
			 * then the `style` token will be added (and processed) at the end. `insertBefore` allows you to insert tokens
			 * before existing tokens. For the CSS example above, you would use it like this:
			 *
			 * ```js
			 * Prism.languages.insertBefore('markup', 'cdata', {
			 *     'style': {
			 *         // token
			 *     }
			 * });
			 * ```
			 *
			 * ## Special cases
			 *
			 * If the grammars of `inside` and `insert` have tokens with the same name, the tokens in `inside`'s grammar
			 * will be ignored.
			 *
			 * This behavior can be used to insert tokens after `before`:
			 *
			 * ```js
			 * Prism.languages.insertBefore('markup', 'comment', {
			 *     'comment': Prism.languages.markup.comment,
			 *     // tokens after 'comment'
			 * });
			 * ```
			 *
			 * ## Limitations
			 *
			 * The main problem `insertBefore` has to solve is iteration order. Since ES2015, the iteration order for object
			 * properties is guaranteed to be the insertion order (except for integer keys) but some browsers behave
			 * differently when keys are deleted and re-inserted. So `insertBefore` can't be implemented by temporarily
			 * deleting properties which is necessary to insert at arbitrary positions.
			 *
			 * To solve this problem, `insertBefore` doesn't actually insert the given tokens into the target object.
			 * Instead, it will create a new object and replace all references to the target object with the new one. This
			 * can be done without temporarily deleting properties, so the iteration order is well-defined.
			 *
			 * However, only references that can be reached from `Prism.languages` or `insert` will be replaced. I.e. if
			 * you hold the target object in a variable, then the value of the variable will not change.
			 *
			 * ```js
			 * var oldMarkup = Prism.languages.markup;
			 * var newMarkup = Prism.languages.insertBefore('markup', 'comment', { ... });
			 *
			 * assert(oldMarkup !== Prism.languages.markup);
			 * assert(newMarkup === Prism.languages.markup);
			 * ```
			 *
			 * @param {string} inside The property of `root` (e.g. a language id in `Prism.languages`) that contains the
			 * object to be modified.
			 * @param {string} before The key to insert before.
			 * @param {Grammar} insert An object containing the key-value pairs to be inserted.
			 * @param {Object<string, any>} [root] The object containing `inside`, i.e. the object that contains the
			 * object to be modified.
			 *
			 * Defaults to `Prism.languages`.
			 * @returns {Grammar} The new grammar object.
			 * @public
			 */insertBefore:function(e,t,i,n){var s=(n=n||/** @type {any} */r.languages)[e],o={};for(var a in s)if(s.hasOwnProperty(a)){if(a==t)for(var l in i)i.hasOwnProperty(l)&&(o[l]=i[l]);// Do not insert token which also occur in insert. See #1525
i.hasOwnProperty(a)||(o[a]=s[a])}var c=n[e];return n[e]=o,// Update references in other language definitions
r.languages.DFS(r.languages,function(t,i){i===c&&t!=e&&(this[t]=o)}),o},// Traverse a language definition with Depth First Search
DFS:function e(t,i,n,s){s=s||{};var o=r.util.objId;for(var a in t)if(t.hasOwnProperty(a)){i.call(t,a,t[a],n||a);var l=t[a],c=r.util.type(l);"Object"!==c||s[o(l)]?"Array"!==c||s[o(l)]||(s[o(l)]=!0,e(l,i,a,s)):(s[o(l)]=!0,e(l,i,null,s))}}},plugins:{},/**
		 * This is the most high-level function in Prism’s API.
		 * It fetches all the elements that have a `.language-xxxx` class and then calls {@link Prism.highlightElement} on
		 * each one of them.
		 *
		 * This is equivalent to `Prism.highlightAllUnder(document, async, callback)`.
		 *
		 * @param {boolean} [async=false] Same as in {@link Prism.highlightAllUnder}.
		 * @param {HighlightCallback} [callback] Same as in {@link Prism.highlightAllUnder}.
		 * @memberof Prism
		 * @public
		 */highlightAll:function(e,t){r.highlightAllUnder(document,e,t)},/**
		 * Fetches all the descendants of `container` that have a `.language-xxxx` class and then calls
		 * {@link Prism.highlightElement} on each one of them.
		 *
		 * The following hooks will be run:
		 * 1. `before-highlightall`
		 * 2. `before-all-elements-highlight`
		 * 3. All hooks of {@link Prism.highlightElement} for each element.
		 *
		 * @param {ParentNode} container The root element, whose descendants that have a `.language-xxxx` class will be highlighted.
		 * @param {boolean} [async=false] Whether each element is to be highlighted asynchronously using Web Workers.
		 * @param {HighlightCallback} [callback] An optional callback to be invoked on each element after its highlighting is done.
		 * @memberof Prism
		 * @public
		 */highlightAllUnder:function(e,t,i){var n={callback:i,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};r.hooks.run("before-highlightall",n),n.elements=Array.prototype.slice.apply(n.container.querySelectorAll(n.selector)),r.hooks.run("before-all-elements-highlight",n);for(var s,o=0;s=n.elements[o++];)r.highlightElement(s,!0===t,n.callback)},/**
		 * Highlights the code inside a single element.
		 *
		 * The following hooks will be run:
		 * 1. `before-sanity-check`
		 * 2. `before-highlight`
		 * 3. All hooks of {@link Prism.highlight}. These hooks will be run by an asynchronous worker if `async` is `true`.
		 * 4. `before-insert`
		 * 5. `after-highlight`
		 * 6. `complete`
		 *
		 * Some the above hooks will be skipped if the element doesn't contain any text or there is no grammar loaded for
		 * the element's language.
		 *
		 * @param {Element} element The element containing the code.
		 * It must have a class of `language-xxxx` to be processed, where `xxxx` is a valid language identifier.
		 * @param {boolean} [async=false] Whether the element is to be highlighted asynchronously using Web Workers
		 * to improve performance and avoid blocking the UI when highlighting very large chunks of code. This option is
		 * [disabled by default](https://prismjs.com/faq.html#why-is-asynchronous-highlighting-disabled-by-default).
		 *
		 * Note: All language definitions required to highlight the code must be included in the main `prism.js` file for
		 * asynchronous highlighting to work. You can build your own bundle on the
		 * [Download page](https://prismjs.com/download.html).
		 * @param {HighlightCallback} [callback] An optional callback to be invoked after the highlighting is done.
		 * Mostly useful when `async` is `true`, since in that case, the highlighting is done asynchronously.
		 * @memberof Prism
		 * @public
		 */highlightElement:function(t,i,n){// Find language
var s=r.util.getLanguage(t),o=r.languages[s];// Set language on the element, if not present
r.util.setLanguage(t,s);// Set language on the parent, for styling
var a=t.parentElement;a&&"pre"===a.nodeName.toLowerCase()&&r.util.setLanguage(a,s);var l=t.textContent,c={element:t,language:s,grammar:o,code:l};function u(e){c.highlightedCode=e,r.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,r.hooks.run("after-highlight",c),r.hooks.run("complete",c),n&&n.call(c.element)}if(r.hooks.run("before-sanity-check",c),// plugins may change/add the parent/element
(a=c.element.parentElement)&&"pre"===a.nodeName.toLowerCase()&&!a.hasAttribute("tabindex")&&a.setAttribute("tabindex","0"),!c.code){r.hooks.run("complete",c),n&&n.call(c.element);return}if(r.hooks.run("before-highlight",c),!c.grammar){u(r.util.encode(c.code));return}if(i&&e.Worker){var d=new Worker(r.filename);d.onmessage=function(e){u(e.data)},d.postMessage(JSON.stringify({language:c.language,code:c.code,immediateClose:!0}))}else u(r.highlight(c.code,c.grammar,c.language))},/**
		 * Low-level function, only use if you know what you’re doing. It accepts a string of text as input
		 * and the language definitions to use, and returns a string with the HTML produced.
		 *
		 * The following hooks will be run:
		 * 1. `before-tokenize`
		 * 2. `after-tokenize`
		 * 3. `wrap`: On each {@link Token}.
		 *
		 * @param {string} text A string with the code to be highlighted.
		 * @param {Grammar} grammar An object containing the tokens to use.
		 *
		 * Usually a language definition like `Prism.languages.markup`.
		 * @param {string} language The name of the language definition passed to `grammar`.
		 * @returns {string} The highlighted HTML.
		 * @memberof Prism
		 * @public
		 * @example
		 * Prism.highlight('var foo = true;', Prism.languages.javascript, 'javascript');
		 */highlight:function(e,t,i){var n={code:e,grammar:t,language:i};if(r.hooks.run("before-tokenize",n),!n.grammar)throw Error('The language "'+n.language+'" has no grammar.');return n.tokens=r.tokenize(n.code,n.grammar),r.hooks.run("after-tokenize",n),s.stringify(r.util.encode(n.tokens),n.language)},/**
		 * This is the heart of Prism, and the most low-level function you can use. It accepts a string of text as input
		 * and the language definitions to use, and returns an array with the tokenized code.
		 *
		 * When the language definition includes nested tokens, the function is called recursively on each of these tokens.
		 *
		 * This method could be useful in other contexts as well, as a very crude parser.
		 *
		 * @param {string} text A string with the code to be highlighted.
		 * @param {Grammar} grammar An object containing the tokens to use.
		 *
		 * Usually a language definition like `Prism.languages.markup`.
		 * @returns {TokenStream} An array of strings and tokens, a token stream.
		 * @memberof Prism
		 * @public
		 * @example
		 * let code = `var foo = 0;`;
		 * let tokens = Prism.tokenize(code, Prism.languages.javascript);
		 * tokens.forEach(token => {
		 *     if (token instanceof Prism.Token && token.type === 'number') {
		 *         console.log(`Found numeric literal: ${token.content}`);
		 *     }
		 * });
		 */tokenize:function(e,t){var i=t.rest;if(i){for(var n in i)t[n]=i[n];delete t.rest}var c=new a;return l(c,c.head,e),/**
	 * @param {string} text
	 * @param {LinkedList<string | Token>} tokenList
	 * @param {any} grammar
	 * @param {LinkedListNode<string | Token>} startNode
	 * @param {number} startPos
	 * @param {RematchOptions} [rematch]
	 * @returns {void}
	 * @private
	 *
	 * @typedef RematchOptions
	 * @property {string} cause
	 * @property {number} reach
	 */function e(t,i,n,a,c,u){for(var d in n)if(n.hasOwnProperty(d)&&n[d]){var h=n[d];h=Array.isArray(h)?h:[h];for(var p=0;p<h.length;++p){if(u&&u.cause==d+","+p)return;var f=h[p],g=f.inside,m=!!f.lookbehind,_=!!f.greedy,b=f.alias;if(_&&!f.pattern.global){// Without the global flag, lastIndex won't work
var v=f.pattern.toString().match(/[imsuy]*$/)[0];f.pattern=RegExp(f.pattern.source,v+"g")}for(var y=f.pattern||f,w=a.next,A=c;w!==i.tail&&(!u||!(A>=u.reach));A+=w.value.length,w=w.next){var E,x=w.value;if(i.length>t.length)return;if(!(x instanceof s)){var k=1;// this is the to parameter of removeBetween
if(_){if(!(E=o(y,A,t,m))||E.index>=t.length)break;var C=E.index,T=E.index+E[0].length,S=A;for(// find the node that contains the match
S+=w.value.length;C>=S;)S+=(w=w.next).value.length;// the current node is a Token, then the match starts inside another Token, which is invalid
if(// adjust pos (and p)
S-=w.value.length,A=S,w.value instanceof s)continue;// find the last node which is affected by this match
for(var L=w;L!==i.tail&&(S<T||"string"==typeof L.value);L=L.next)k++,S+=L.value.length;k--,// replace with the new match
x=t.slice(A,S),E.index-=A}else if(!(E=o(y,0,x,m)))continue;// eslint-disable-next-line no-redeclare
var C=E.index,O=E[0],P=x.slice(0,C),$=x.slice(C+O.length),N=A+x.length;u&&N>u.reach&&(u.reach=N);var F=w.prev;if(P&&(F=l(i,F,P),A+=P.length),/**
	 * Removes `count` nodes after the given node. The given node will not be removed.
	 *
	 * @param {LinkedList<T>} list
	 * @param {LinkedListNode<T>} node
	 * @param {number} count
	 * @template T
	 */function(e,t,i){for(var n=t.next,r=0;r<i&&n!==e.tail;r++)n=n.next;t.next=n,n.prev=t,e.length-=r}(i,F,k),w=l(i,F,new s(d,g?r.tokenize(O,g):O,b,O)),$&&l(i,w,$),k>1){// at least one Token object was removed, so we have to do some rematching
// this can only happen if the current pattern is greedy
/** @type {RematchOptions} */var D={cause:d+","+p,reach:N};e(t,i,n,w.prev,A,D),u&&D.reach>u.reach&&(u.reach=D.reach)}}}}}}(e,c,t,c.head,0),/**
	 * @param {LinkedList<T>} list
	 * @returns {T[]}
	 * @template T
	 */function(e){for(var t=[],i=e.head.next;i!==e.tail;)t.push(i.value),i=i.next;return t}(c)},/**
		 * @namespace
		 * @memberof Prism
		 * @public
		 */hooks:{all:{},/**
			 * Adds the given callback to the list of callbacks for the given hook.
			 *
			 * The callback will be invoked when the hook it is registered for is run.
			 * Hooks are usually directly run by a highlight function but you can also run hooks yourself.
			 *
			 * One callback function can be registered to multiple hooks and the same hook multiple times.
			 *
			 * @param {string} name The name of the hook.
			 * @param {HookCallback} callback The callback function which is given environment variables.
			 * @public
			 */add:function(e,t){var i=r.hooks.all;i[e]=i[e]||[],i[e].push(t)},/**
			 * Runs a hook invoking all registered callbacks with the given environment variables.
			 *
			 * Callbacks will be invoked synchronously and in the order in which they were registered.
			 *
			 * @param {string} name The name of the hook.
			 * @param {Object<string, any>} env The environment variables of the hook passed to all callbacks registered.
			 * @public
			 */run:function(e,t){var i=r.hooks.all[e];if(i&&i.length)for(var n,s=0;n=i[s++];)n(t)}},Token:s};// Typescript note:
// The following can be used to import the Token type in JSDoc:
//
//   @typedef {InstanceType<import("./prism-core")["Token"]>} Token
/**
	 * Creates a new token.
	 *
	 * @param {string} type See {@link Token#type type}
	 * @param {string | TokenStream} content See {@link Token#content content}
	 * @param {string|string[]} [alias] The alias(es) of the token.
	 * @param {string} [matchedStr=""] A copy of the full string this token was created from.
	 * @class
	 * @global
	 * @public
	 */function s(e,t,i,n){/**
		 * The type of the token.
		 *
		 * This is usually the key of a pattern in a {@link Grammar}.
		 *
		 * @type {string}
		 * @see GrammarToken
		 * @public
		 */this.type=e,/**
		 * The strings or tokens contained by this token.
		 *
		 * This will be a token stream if the pattern matched also defined an `inside` grammar.
		 *
		 * @type {string | TokenStream}
		 * @public
		 */this.content=t,/**
		 * The alias(es) of the token.
		 *
		 * @type {string|string[]}
		 * @see GrammarToken
		 * @public
		 */this.alias=i,// Copy of the full string this token was created from
this.length=0|(n||"").length}/**
	 * @param {RegExp} pattern
	 * @param {number} pos
	 * @param {string} text
	 * @param {boolean} lookbehind
	 * @returns {RegExpExecArray | null}
	 */function o(e,t,i,n){e.lastIndex=t;var r=e.exec(i);if(r&&n&&r[1]){// change the match to remove the text matched by the Prism lookbehind group
var s=r[1].length;r.index+=s,r[0]=r[0].slice(s)}return r}/**
	 * @typedef LinkedListNode
	 * @property {T} value
	 * @property {LinkedListNode<T> | null} prev The previous node.
	 * @property {LinkedListNode<T> | null} next The next node.
	 * @template T
	 * @private
	 *//**
	 * @template T
	 * @private
	 */function a(){/** @type {LinkedListNode<T>} */var e={value:null,prev:null,next:null},t={value:null,prev:e,next:null};e.next=t,/** @type {LinkedListNode<T>} */this.head=e,/** @type {LinkedListNode<T>} */this.tail=t,this.length=0}/**
	 * Adds a new node with the given value to the list.
	 *
	 * @param {LinkedList<T>} list
	 * @param {LinkedListNode<T>} node
	 * @param {T} value
	 * @returns {LinkedListNode<T>} The added node.
	 * @template T
	 */function l(e,t,i){// assumes that node != list.tail && values.length >= 0
var n=t.next,r={value:i,prev:t,next:n};return t.next=r,n.prev=r,e.length++,r}if(e.Prism=r,/**
	 * A token stream is an array of strings and {@link Token Token} objects.
	 *
	 * Token streams have to fulfill a few properties that are assumed by most functions (mostly internal ones) that process
	 * them.
	 *
	 * 1. No adjacent strings.
	 * 2. No empty strings.
	 *
	 *    The only exception here is the token stream that only contains the empty string and nothing else.
	 *
	 * @typedef {Array<string | Token>} TokenStream
	 * @global
	 * @public
	 *//**
	 * Converts the given token or token stream to an HTML representation.
	 *
	 * The following hooks will be run:
	 * 1. `wrap`: On each {@link Token}.
	 *
	 * @param {string | Token | TokenStream} o The token or token stream to be converted.
	 * @param {string} language The name of current language.
	 * @returns {string} The HTML representation of the token or token stream.
	 * @memberof Token
	 * @static
	 */s.stringify=function e(t,i){if("string"==typeof t)return t;if(Array.isArray(t)){var n="";return t.forEach(function(t){n+=e(t,i)}),n}var s={type:t.type,content:e(t.content,i),tag:"span",classes:["token",t.type],attributes:{},language:i},o=t.alias;o&&(Array.isArray(o)?Array.prototype.push.apply(s.classes,o):s.classes.push(o)),r.hooks.run("wrap",s);var a="";for(var l in s.attributes)a+=" "+l+'="'+(s.attributes[l]||"").replace(/"/g,"&quot;")+'"';return"<"+s.tag+' class="'+s.classes.join(" ")+'"'+a+">"+s.content+"</"+s.tag+">"},!e.document)return e.addEventListener&&(r.disableWorkerMessageHandler||e.addEventListener("message",function(t){var i=JSON.parse(t.data),n=i.language,s=i.code,o=i.immediateClose;e.postMessage(r.highlight(s,r.languages[n],n)),o&&e.close()},!1)),r;// Get current script and highlight
var c=r.util.currentScript();function u(){r.manual||r.highlightAll()}if(c&&(r.filename=c.src,c.hasAttribute("data-manual")&&(r.manual=!0)),!r.manual){// If the document state is "loading", then we'll use DOMContentLoaded.
// If the document state is "interactive" and the prism.js script is deferred, then we'll also use the
// DOMContentLoaded event because there might be some plugins or languages which have also been deferred and they
// might take longer one animation frame to execute which can create a race condition where only some plugins have
// been loaded when Prism.highlightAll() is executed, depending on how fast resources are loaded.
// See https://github.com/PrismJS/prism/issues/2102
var d=document.readyState;"loading"===d||"interactive"===d&&c&&c.defer?document.addEventListener("DOMContentLoaded",u):window.requestAnimationFrame?window.requestAnimationFrame(u):window.setTimeout(u,16)}return r}("undefined"!=typeof window?window// if in browser
:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self// if in worker
:{}// if in node js
);rC&&(rC=rT),void 0!==r&&(r.Prism=rT),// some additional documentation/types
/**
 * The expansion of a simple `RegExp` literal to support additional properties.
 *
 * @typedef GrammarToken
 * @property {RegExp} pattern The regular expression of the token.
 * @property {boolean} [lookbehind=false] If `true`, then the first capturing group of `pattern` will (effectively)
 * behave as a lookbehind group meaning that the captured text will not be part of the matched text of the new token.
 * @property {boolean} [greedy=false] Whether the token is greedy.
 * @property {string|string[]} [alias] An optional alias or list of aliases.
 * @property {Grammar} [inside] The nested grammar of this token.
 *
 * The `inside` grammar will be used to tokenize the text value of each token of this kind.
 *
 * This can be used to make nested and even recursive language definitions.
 *
 * Note: This can cause infinite recursion. Be careful when you embed different languages or even the same language into
 * each another.
 * @global
 * @public
 *//**
 * @typedef Grammar
 * @type {Object<string, RegExp | GrammarToken | Array<RegExp | GrammarToken>>}
 * @property {Grammar} [rest] An optional grammar object that will be appended to this grammar.
 * @global
 * @public
 *//**
 * A function which will invoked after an element was successfully highlighted.
 *
 * @callback HighlightCallback
 * @param {Element} element The element successfully highlighted.
 * @returns {void}
 * @global
 * @public
 *//**
 * @callback HookCallback
 * @param {Object<string, any>} env The environment variables of the hook.
 * @returns {void}
 * @global
 * @public
 *//* **********************************************
     Begin prism-markup.js
********************************************** */rT.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{// https://www.w3.org/TR/xml/#NT-doctypedecl
pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null// see below
},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},rT.languages.markup.tag.inside["attr-value"].inside.entity=rT.languages.markup.entity,rT.languages.markup.doctype.inside["internal-subset"].inside=rT.languages.markup,// Plugin to make entity title show the real entity, idea by Roman Komarov
rT.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),Object.defineProperty(rT.languages.markup.tag,"addInlined",{/**
	 * Adds an inlined language to markup.
	 *
	 * An example of an inlined language is CSS with `<style>` tags.
	 *
	 * @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
	 * case insensitive.
	 * @param {string} lang The language key.
	 * @example
	 * addInlined('style', 'css');
	 */value:function(e,t){var i={};i["language-"+t]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:rT.languages[t]},i.cdata=/^<!\[CDATA\[|\]\]>$/i;var n={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:i}};n["language-"+t]={pattern:/[\s\S]+/,inside:rT.languages[t]};var r={};r[e]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return e}),"i"),lookbehind:!0,greedy:!0,inside:n},rT.languages.insertBefore("markup","cdata",r)}}),Object.defineProperty(rT.languages.markup.tag,"addAttribute",{/**
	 * Adds an pattern to highlight languages embedded in HTML attributes.
	 *
	 * An example of an inlined language is CSS with `style` attributes.
	 *
	 * @param {string} attrName The name of the tag that contains the inlined language. This name will be treated as
	 * case insensitive.
	 * @param {string} lang The language key.
	 * @example
	 * addAttribute('style', 'css');
	 */value:function(e,t){rT.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+e+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[t,"language-"+t],inside:rT.languages[t]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),rT.languages.html=rT.languages.markup,rT.languages.mathml=rT.languages.markup,rT.languages.svg=rT.languages.markup,rT.languages.xml=rT.languages.extend("markup",{}),rT.languages.ssml=rT.languages.xml,rT.languages.atom=rT.languages.xml,rT.languages.rss=rT.languages.xml,i=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/,rT.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+i.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{// https://drafts.csswg.org/css-values-3/#urls
pattern:RegExp("\\burl\\((?:"+i.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+i.source+"$"),alias:"url"}}},selector:{pattern:RegExp("(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|"+i.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:i,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},rT.languages.css.atrule.inside.rest=rT.languages.css,(n=rT.languages.markup)&&(n.tag.addInlined("style","css"),n.tag.addAttribute("style","css")),/* **********************************************
     Begin prism-clike.js
********************************************** */rT.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},/* **********************************************
     Begin prism-javascript.js
********************************************** */rT.languages.javascript=rT.languages.extend("clike",{"class-name":[rT.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],// Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+// constant
(/NaN|Infinity/.source+"|"+// binary integer
/0[bB][01]+(?:_[01]+)*n?/.source+"|"+// octal integer
/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+// hexadecimal integer
/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|")+// decimal bigint
/\d+(?:_\d+)*n/.source+"|"+// decimal number (integer or float) but no bigint
/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),rT.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,rT.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(// eslint-disable-next-line regexp/no-dupe-characters-character-class
/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+// Regex pattern:
// There are 2 regex patterns here. The RegExp set notation proposal added support for nested character
// classes if the `v` flag is present. Unfortunately, nested CCs are both context-free and incompatible
// with the only syntax, so we have to define 2 different regex patterns.
/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+// `v` flag syntax. This supports 3 levels of nested character classes.
/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+// lookahead
/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:rT.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},// This must be declared before keyword because we use "function" inside the look-forward
"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:rT.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:rT.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:rT.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:rT.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),rT.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:rT.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),rT.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),rT.languages.markup&&(rT.languages.markup.tag.addInlined("script","javascript"),// add attribute support for all DOM events.
// https://developer.mozilla.org/en-US/docs/Web/Events#Standard_events
rT.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),rT.languages.js=rT.languages.javascript,/* **********************************************
     Begin prism-file-highlight.js
********************************************** */function(){if(void 0!==rT&&"undefined"!=typeof document){Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var e={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},t="data-src-status",i="loading",n="loaded",r="pre[data-src]:not(["+t+'="'+n+'"]):not(['+t+'="'+i+'"])';rT.hooks.add("before-highlightall",function(e){e.selector+=", "+r}),rT.hooks.add("before-sanity-check",function(s){var o=/** @type {HTMLPreElement} */s.element;if(o.matches(r)){s.code="",o.setAttribute(t,i);// add code element with loading message
var a,l,c,u=o.appendChild(document.createElement("CODE"));u.textContent="Loading…";var d=o.getAttribute("data-src"),h=s.language;if("none"===h){// the language might be 'none' because there is no language set;
// in this case, we want to use the extension as the language
var p=(/\.(\w+)$/.exec(d)||[,"none"])[1];h=e[p]||p}// set language classes
rT.util.setLanguage(u,h),rT.util.setLanguage(o,h);// preload the language
var f=rT.plugins.autoloader;f&&f.loadLanguages(h),a=function(e){// mark as loaded
o.setAttribute(t,n);// handle data-range
var i=/**
	 * Parses the given range.
	 *
	 * This returns a range with inclusive ends.
	 *
	 * @param {string | null | undefined} range
	 * @returns {[number, number | undefined] | undefined}
	 */function(e){var t=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(e||"");if(t){var i=Number(t[1]),n=t[2],r=t[3];return n?r?[i,Number(r)]:[i,void 0]:[i,i]}}(o.getAttribute("data-range"));if(i){var r=e.split(/\r\n?|\n/g),s=i[0],a=null==i[1]?r.length:i[1];s<0&&(s+=r.length),s=Math.max(0,Math.min(s-1,r.length)),a<0&&(a+=r.length),a=Math.max(0,Math.min(a,r.length)),e=r.slice(s,a).join("\n"),o.hasAttribute("data-start")||o.setAttribute("data-start",String(s+1))}// highlight code
u.textContent=e,rT.highlightElement(u)},l=function(e){// mark as failed
o.setAttribute(t,"failed"),u.textContent=e},(c=new XMLHttpRequest).open("GET",d,!0),c.onreadystatechange=function(){4==c.readyState&&(c.status<400&&c.responseText?a(c.responseText):c.status>=400?l("✖ Error "+c.status+" while fetching file: "+c.statusText):l("✖ Error: File does not exist or is empty"))},c.send(null)}}),rT.plugins.fileHighlight={/**
		 * Executes the File Highlight plugin for all matching `pre` elements under the given container.
		 *
		 * Note: Elements which are already loaded or currently loading will not be touched by this method.
		 *
		 * @param {ParentNode} [container=document]
		 */highlight:function(e){for(var t,i=(e||document).querySelectorAll(r),n=0;t=i[n++];)rT.highlightElement(t)}};var s=!1;/** @deprecated Use `Prism.plugins.fileHighlight.highlight` instead. */rT.fileHighlight=function(){s||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),s=!0),rT.plugins.fileHighlight.highlight.apply(this,arguments)}}}(),function(){if("undefined"!=typeof Prism&&"undefined"!=typeof document){var e="line-numbers",t=/\n(?!$)/g,i=Prism.plugins.lineNumbers={getLine:function(t,i){if("PRE"===t.tagName&&t.classList.contains(e)){var n=t.querySelector(".line-numbers-rows");if(n){var r=parseInt(t.getAttribute("data-start"),10)||1,s=r+(n.children.length-1);i<r&&(i=r),i>s&&(i=s);var o=i-r;return n.children[o]}}},resize:function(e){r([e])},assumeViewportIndependence:!0},n=void 0;window.addEventListener("resize",function(){i.assumeViewportIndependence&&n===window.innerWidth||(n=window.innerWidth,r(Array.prototype.slice.call(document.querySelectorAll("pre.line-numbers"))))}),Prism.hooks.add("complete",function(i){if(i.code){var n=i.element,s=n.parentNode;if(s&&/pre/i.test(s.nodeName)&&!n.querySelector(".line-numbers-rows")&&Prism.util.isActive(n,e)){n.classList.remove(e),s.classList.add(e);var o,a=i.code.match(t),l=Array((a?a.length+1:1)+1).join("<span></span>");(o=document.createElement("span")).setAttribute("aria-hidden","true"),o.className="line-numbers-rows",o.innerHTML=l,s.hasAttribute("data-start")&&(s.style.counterReset="linenumber "+(parseInt(s.getAttribute("data-start"),10)-1)),i.element.appendChild(o),r([s]),Prism.hooks.run("line-numbers",i)}}}),Prism.hooks.add("line-numbers",function(e){e.plugins=e.plugins||{},e.plugins.lineNumbers=!0})}function r(e){if(0!=(e=e.filter(function(e){var t=(e?window.getComputedStyle?getComputedStyle(e):e.currentStyle||null:null)["white-space"];return"pre-wrap"===t||"pre-line"===t})).length){var i=e.map(function(e){var i=e.querySelector("code"),n=e.querySelector(".line-numbers-rows");if(i&&n){var r=e.querySelector(".line-numbers-sizer"),s=i.textContent.split(t);r||((r=document.createElement("span")).className="line-numbers-sizer",i.appendChild(r)),r.innerHTML="0",r.style.display="block";var o=r.getBoundingClientRect().height;return r.innerHTML="",{element:e,lines:s,lineHeights:[],oneLinerHeight:o,sizer:r}}}).filter(Boolean);i.forEach(function(e){var t=e.sizer,i=e.lines,n=e.lineHeights,r=e.oneLinerHeight;n[i.length-1]=void 0,i.forEach(function(e,i){if(e&&e.length>1){var s=t.appendChild(document.createElement("span"));s.style.display="block",s.textContent=e}else n[i]=r})}),i.forEach(function(e){for(var t=e.sizer,i=e.lineHeights,n=0,r=0;r<i.length;r++)void 0===i[r]&&(i[r]=t.children[n++].getBoundingClientRect().height)}),i.forEach(function(e){var t=e.sizer,i=e.element.querySelector(".line-numbers-rows");t.style.display="none",t.innerHTML="",e.lineHeights.forEach(function(e,t){i.children[t].style.height=e+"px"})})}}}(),function(){if("undefined"!=typeof Prism&&"undefined"!=typeof document){var e=[],t={},i=function(){};Prism.plugins.toolbar={};var n=Prism.plugins.toolbar.registerButton=function(i,n){var r;r="function"==typeof n?n:function(e){var t;return"function"==typeof n.onClick?((t=document.createElement("button")).type="button",t.addEventListener("click",function(){n.onClick.call(this,e)})):"string"==typeof n.url?(t=document.createElement("a")).href=n.url:t=document.createElement("span"),n.className&&t.classList.add(n.className),t.textContent=n.text,t},i in t?console.warn('There is a button with the key "'+i+'" registered already.'):e.push(t[i]=r)},r=Prism.plugins.toolbar.hook=function(n){var r=n.element.parentNode;if(r&&/pre/i.test(r.nodeName)&&!r.parentNode.classList.contains("code-toolbar")){var s=document.createElement("div");s.classList.add("code-toolbar"),r.parentNode.insertBefore(s,r),s.appendChild(r);var o=document.createElement("div");o.classList.add("toolbar");var a=e,l=function(e){for(;e;){var t=e.getAttribute("data-toolbar-order");if(null!=t)return(t=t.trim()).length?t.split(/\s*,\s*/g):[];e=e.parentElement}}(n.element);l&&(a=l.map(function(e){return t[e]||i})),a.forEach(function(e){var t=e(n);if(t){var i=document.createElement("div");i.classList.add("toolbar-item"),i.appendChild(t),o.appendChild(i)}}),s.appendChild(o)}};n("label",function(e){var t=e.element.parentNode;if(t&&/pre/i.test(t.nodeName)&&t.hasAttribute("data-label")){var i,n,r=t.getAttribute("data-label");try{n=document.querySelector("template#"+r)}catch(e){}return n?i=n.content:(t.hasAttribute("data-url")?(i=document.createElement("a")).href=t.getAttribute("data-url"):i=document.createElement("span"),i.textContent=r),i}}),Prism.hooks.add("complete",r)}}(),function(){function e(e){var t=document.createElement("textarea");t.value=e.getText(),t.style.top="0",t.style.left="0",t.style.position="fixed",document.body.appendChild(t),t.focus(),t.select();try{var i=document.execCommand("copy");setTimeout(function(){i?e.success():e.error()},1)}catch(t){setTimeout(function(){e.error(t)},1)}document.body.removeChild(t)}"undefined"!=typeof Prism&&"undefined"!=typeof document&&(Prism.plugins.toolbar?Prism.plugins.toolbar.registerButton("copy-to-clipboard",function(t){var i=t.element,n=function(e){var t={copy:"Copy","copy-error":"Press Ctrl+C to copy","copy-success":"Copied!","copy-timeout":5e3};for(var i in t){for(var n="data-prismjs-"+i,r=e;r&&!r.hasAttribute(n);)r=r.parentElement;r&&(t[i]=r.getAttribute(n))}return t}(i),r=document.createElement("button");r.className="copy-to-clipboard-button",r.setAttribute("type","button");var s=document.createElement("span");return r.appendChild(s),a("copy"),function(t,i){t.addEventListener("click",function(){navigator.clipboard?navigator.clipboard.writeText(i.getText()).then(i.success,function(){e(i)}):e(i)})}(r,{getText:function(){return i.textContent},success:function(){a("copy-success"),o()},error:function(){a("copy-error"),setTimeout(function(){window.getSelection().selectAllChildren(i)},1),o()}}),r;function o(){setTimeout(function(){a("copy")},n["copy-timeout"])}function a(e){s.textContent=n[e],r.setAttribute("data-copy-state",e)}}):console.warn("Copy to Clipboard plugin loaded before Toolbar plugin."))}(),function(){if("undefined"!=typeof Prism&&"undefined"!=typeof document){if(Prism.plugins.toolbar){var e={none:"Plain text",plain:"Plain text",plaintext:"Plain text",text:"Plain text",txt:"Plain text",html:"HTML",xml:"XML",svg:"SVG",mathml:"MathML",ssml:"SSML",rss:"RSS",css:"CSS",clike:"C-like",js:"JavaScript",abap:"ABAP",abnf:"ABNF",al:"AL",antlr4:"ANTLR4",g4:"ANTLR4",apacheconf:"Apache Configuration",apl:"APL",aql:"AQL",ino:"Arduino",arff:"ARFF",armasm:"ARM Assembly","arm-asm":"ARM Assembly",art:"Arturo",asciidoc:"AsciiDoc",adoc:"AsciiDoc",aspnet:"ASP.NET (C#)",asm6502:"6502 Assembly",asmatmel:"Atmel AVR Assembly",autohotkey:"AutoHotkey",autoit:"AutoIt",avisynth:"AviSynth",avs:"AviSynth","avro-idl":"Avro IDL",avdl:"Avro IDL",awk:"AWK",gawk:"GAWK",sh:"Shell",basic:"BASIC",bbcode:"BBcode",bbj:"BBj",bnf:"BNF",rbnf:"RBNF",bqn:"BQN",bsl:"BSL (1C:Enterprise)",oscript:"OneScript",csharp:"C#",cs:"C#",dotnet:"C#",cpp:"C++",cfscript:"CFScript",cfc:"CFScript",cil:"CIL",cilkc:"Cilk/C","cilk-c":"Cilk/C",cilkcpp:"Cilk/C++","cilk-cpp":"Cilk/C++",cilk:"Cilk/C++",cmake:"CMake",cobol:"COBOL",coffee:"CoffeeScript",conc:"Concurnas",csp:"Content-Security-Policy","css-extras":"CSS Extras",csv:"CSV",cue:"CUE",dataweave:"DataWeave",dax:"DAX",django:"Django/Jinja2",jinja2:"Django/Jinja2","dns-zone-file":"DNS zone file","dns-zone":"DNS zone file",dockerfile:"Docker",dot:"DOT (Graphviz)",gv:"DOT (Graphviz)",ebnf:"EBNF",editorconfig:"EditorConfig",ejs:"EJS",etlua:"Embedded Lua templating",erb:"ERB","excel-formula":"Excel Formula",xlsx:"Excel Formula",xls:"Excel Formula",fsharp:"F#","firestore-security-rules":"Firestore security rules",ftl:"FreeMarker Template Language",gml:"GameMaker Language",gamemakerlanguage:"GameMaker Language",gap:"GAP (CAS)",gcode:"G-code",gdscript:"GDScript",gedcom:"GEDCOM",gettext:"gettext",po:"gettext",glsl:"GLSL",gn:"GN",gni:"GN","linker-script":"GNU Linker Script",ld:"GNU Linker Script","go-module":"Go module","go-mod":"Go module",graphql:"GraphQL",hbs:"Handlebars",hs:"Haskell",hcl:"HCL",hlsl:"HLSL",http:"HTTP",hpkp:"HTTP Public-Key-Pins",hsts:"HTTP Strict-Transport-Security",ichigojam:"IchigoJam","icu-message-format":"ICU Message Format",idr:"Idris",ignore:".ignore",gitignore:".gitignore",hgignore:".hgignore",npmignore:".npmignore",inform7:"Inform 7",javadoc:"JavaDoc",javadoclike:"JavaDoc-like",javastacktrace:"Java stack trace",jq:"JQ",jsdoc:"JSDoc","js-extras":"JS Extras",json:"JSON",webmanifest:"Web App Manifest",json5:"JSON5",jsonp:"JSONP",jsstacktrace:"JS stack trace","js-templates":"JS Templates",keepalived:"Keepalived Configure",kts:"Kotlin Script",kt:"Kotlin",kumir:"KuMir (КуМир)",kum:"KuMir (КуМир)",latex:"LaTeX",tex:"TeX",context:"ConTeXt",lilypond:"LilyPond",ly:"LilyPond",emacs:"Lisp",elisp:"Lisp","emacs-lisp":"Lisp",llvm:"LLVM IR",log:"Log file",lolcode:"LOLCODE",magma:"Magma (CAS)",md:"Markdown","markup-templating":"Markup templating",matlab:"MATLAB",maxscript:"MAXScript",mel:"MEL",metafont:"METAFONT",mongodb:"MongoDB",moon:"MoonScript",n1ql:"N1QL",n4js:"N4JS",n4jsd:"N4JS","nand2tetris-hdl":"Nand To Tetris HDL",naniscript:"Naninovel Script",nani:"Naninovel Script",nasm:"NASM",neon:"NEON",nginx:"nginx",nsis:"NSIS",objectivec:"Objective-C",objc:"Objective-C",ocaml:"OCaml",opencl:"OpenCL",openqasm:"OpenQasm",qasm:"OpenQasm",parigp:"PARI/GP",objectpascal:"Object Pascal",psl:"PATROL Scripting Language",pcaxis:"PC-Axis",px:"PC-Axis",peoplecode:"PeopleCode",pcode:"PeopleCode",php:"PHP",phpdoc:"PHPDoc","php-extras":"PHP Extras","plant-uml":"PlantUML",plantuml:"PlantUML",plsql:"PL/SQL",powerquery:"PowerQuery",pq:"PowerQuery",mscript:"PowerQuery",powershell:"PowerShell",promql:"PromQL",properties:".properties",protobuf:"Protocol Buffers",purebasic:"PureBasic",pbfasm:"PureBasic",purs:"PureScript",py:"Python",qsharp:"Q#",qs:"Q#",q:"Q (kdb+ database)",qml:"QML",rkt:"Racket",cshtml:"Razor C#",razor:"Razor C#",jsx:"React JSX",tsx:"React TSX",renpy:"Ren'py",rpy:"Ren'py",res:"ReScript",rest:"reST (reStructuredText)",robotframework:"Robot Framework",robot:"Robot Framework",rb:"Ruby",sas:"SAS",sass:"Sass (Sass)",scss:"Sass (SCSS)","shell-session":"Shell session","sh-session":"Shell session",shellsession:"Shell session",sml:"SML",smlnj:"SML/NJ",solidity:"Solidity (Ethereum)",sol:"Solidity (Ethereum)","solution-file":"Solution file",sln:"Solution file",soy:"Soy (Closure Template)",sparql:"SPARQL",rq:"SPARQL","splunk-spl":"Splunk SPL",sqf:"SQF: Status Quo Function (Arma 3)",sql:"SQL",stata:"Stata Ado",iecst:"Structured Text (IEC 61131-3)",supercollider:"SuperCollider",sclang:"SuperCollider",systemd:"Systemd configuration file","t4-templating":"T4 templating","t4-cs":"T4 Text Templates (C#)",t4:"T4 Text Templates (C#)","t4-vb":"T4 Text Templates (VB)",tap:"TAP",tt2:"Template Toolkit 2",toml:"TOML",trickle:"trickle",troy:"troy",trig:"TriG",ts:"TypeScript",tsconfig:"TSConfig",uscript:"UnrealScript",uc:"UnrealScript",uorazor:"UO Razor Script",uri:"URI",url:"URL",vbnet:"VB.Net",vhdl:"VHDL",vim:"vim","visual-basic":"Visual Basic",vba:"VBA",vb:"Visual Basic",wasm:"WebAssembly","web-idl":"Web IDL",webidl:"Web IDL",wgsl:"WGSL",wiki:"Wiki markup",wolfram:"Wolfram language",nb:"Mathematica Notebook",wl:"Wolfram language",xeoracube:"XeoraCube","xml-doc":"XML doc (.net)",xojo:"Xojo (REALbasic)",xquery:"XQuery",yaml:"YAML",yml:"YAML",yang:"YANG"};Prism.plugins.toolbar.registerButton("show-language",function(t){var i=t.element.parentNode;if(i&&/pre/i.test(i.nodeName)){var n,r=i.getAttribute("data-language")||e[t.language]||((n=t.language)?(n.substring(0,1).toUpperCase()+n.substring(1)).replace(/s(?=cript)/,"S"):n);if(r){var s=document.createElement("span");return s.textContent=r,s}}})}else console.warn("Show Languages plugin loaded before Toolbar plugin.")}}();var rS={};!function(){if("undefined"!=typeof Prism){var e=Object.assign||function(e,t){for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i]);return e},t={"remove-trailing":"boolean","remove-indent":"boolean","left-trim":"boolean","right-trim":"boolean","break-lines":"number",indent:"number","remove-initial-line-feed":"boolean","tabs-to-spaces":"number","spaces-to-tabs":"number"};i.prototype={setDefaults:function(t){this.defaults=e(this.defaults,t)},normalize:function(t,i){for(var n in i=e(this.defaults,i)){var r=n.replace(/-(\w)/g,function(e,t){return t.toUpperCase()});"normalize"!==n&&"setDefaults"!==r&&i[n]&&this[r]&&(t=this[r].call(this,t,i[n]))}return t},leftTrim:function(e){return e.replace(/^\s+/,"")},rightTrim:function(e){return e.replace(/\s+$/,"")},tabsToSpaces:function(e,t){return t=0|t||4,e.replace(/\t/g,Array(++t).join(" "))},spacesToTabs:function(e,t){return t=0|t||4,e.replace(RegExp(" {"+t+"}","g"),"	")},removeTrailing:function(e){return e.replace(/\s*?$/gm,"")},removeInitialLineFeed:function(e){return e.replace(/^(?:\r?\n|\r)/,"")},removeIndent:function(e){var t=e.match(/^[^\S\n\r]*(?=\S)/gm);return t&&t[0].length?(t.sort(function(e,t){return e.length-t.length}),t[0].length?e.replace(RegExp("^"+t[0],"gm"),""):e):e},indent:function(e,t){return e.replace(/^[^\S\n\r]*(?=\S)/gm,Array(++t).join("	")+"$&")},breakLines:function(e,t){t=!0===t?80:0|t||80;for(var i=e.split("\n"),r=0;r<i.length;++r)if(!(n(i[r])<=t)){for(var s=i[r].split(/(\s+)/g),o=0,a=0;a<s.length;++a){var l=n(s[a]);(o+=l)>t&&(s[a]="\n"+s[a],o=l)}i[r]=s.join("")}return i.join("\n")}},rS&&(rS=i),Prism.plugins.NormalizeWhitespace=new i({"remove-trailing":!0,"remove-indent":!0,"left-trim":!0,"right-trim":!0}),Prism.hooks.add("before-sanity-check",function(e){var i=Prism.plugins.NormalizeWhitespace;if((!e.settings||!1!==e.settings["whitespace-normalization"])&&Prism.util.isActive(e.element,"whitespace-normalization",!0)){if(e.element&&e.element.parentNode||!e.code){var n=e.element.parentNode;if(e.code&&n&&"pre"===n.nodeName.toLowerCase()){for(var r in null==e.settings&&(e.settings={}),t)if(Object.hasOwnProperty.call(t,r)){var s=t[r];if(n.hasAttribute("data-"+r))try{var o=JSON.parse(n.getAttribute("data-"+r)||"true");typeof o===s&&(e.settings[r]=o)}catch(e){}}for(var a=n.childNodes,l="",c="",u=!1,d=0;d<a.length;++d){var h=a[d];h==e.element?u=!0:"#text"===h.nodeName&&(u?c+=h.nodeValue:l+=h.nodeValue,n.removeChild(h),--d)}if(e.element.children.length&&Prism.plugins.KeepMarkup){var p=l+e.element.innerHTML+c;e.element.innerHTML=i.normalize(p,e.settings),e.code=e.element.textContent}else e.code=l+e.code+c,e.code=i.normalize(e.code,e.settings)}}else e.code=i.normalize(e.code,e.settings)}})}function i(t){this.defaults=e({},t)}function n(e){for(var t=0,i=0;i<e.length;++i)9==e.charCodeAt(i)&&(t+=3);return e.length+t}}(),function(){if("undefined"!=typeof Prism&&"undefined"!=typeof document){var e={"(":")","[":"]","{":"}"},t={"(":"brace-round","[":"brace-square","{":"brace-curly"},i={"${":"{"},n=0,r=/^(pair-\d+-)(close|open)$/;Prism.hooks.add("complete",function(r){var o=r.element,u=o.parentElement;if(u&&"PRE"==u.tagName){var d=[];if(Prism.util.isActive(o,"match-braces")&&d.push("(","[","{"),0!=d.length){u.__listenerAdded||(u.addEventListener("mousedown",function(){var e=u.querySelector("code"),t=s("brace-selected");Array.prototype.slice.call(e.querySelectorAll("."+t)).forEach(function(e){e.classList.remove(t)})}),Object.defineProperty(u,"__listenerAdded",{value:!0}));var h=Array.prototype.slice.call(o.querySelectorAll("span."+s("token")+"."+s("punctuation"))),p=[];d.forEach(function(r){for(var o=e[r],u=s(t[r]),d=[],f=[],g=0;g<h.length;g++){var m=h[g];if(0==m.childElementCount){var _=m.textContent;(_=i[_]||_)===r?(p.push({index:g,open:!0,element:m}),m.classList.add(u),m.classList.add(s("brace-open")),f.push(g)):_===o&&(p.push({index:g,open:!1,element:m}),m.classList.add(u),m.classList.add(s("brace-close")),f.length&&d.push([g,f.pop()]))}}d.forEach(function(e){var t="pair-"+n+++"-",i=h[e[0]],r=h[e[1]];i.id=t+"open",r.id=t+"close",[i,r].forEach(function(e){e.addEventListener("mouseenter",a),e.addEventListener("mouseleave",l),e.addEventListener("click",c)})})});var f=0;p.sort(function(e,t){return e.index-t.index}),p.forEach(function(e){e.open?(e.element.classList.add(s("brace-level-"+(f%12+1))),f++):(f=Math.max(0,f-1),e.element.classList.add(s("brace-level-"+(f%12+1))))})}}})}function s(e){var t=Prism.plugins.customClass;return t?t.apply(e,"none"):e}function o(e){var t=r.exec(e.id);return document.querySelector("#"+t[1]+("open"==t[2]?"close":"open"))}function a(){Prism.util.isActive(this,"brace-hover",!0)&&[this,o(this)].forEach(function(e){e.classList.add(s("brace-hover"))})}function l(){[this,o(this)].forEach(function(e){e.classList.remove(s("brace-hover"))})}function c(){Prism.util.isActive(this,"brace-select",!0)&&[this,o(this)].forEach(function(e){e.classList.add(s("brace-selected"))})}}(),function(){if("undefined"!=typeof Prism&&"undefined"!=typeof document&&document.querySelector){var e,t="line-numbers",i="linkable-line-numbers",n=/\n(?!$)/g,r=!0;Prism.plugins.lineHighlight={highlightLines:function(s,c,u){var d=(c="string"==typeof c?c:s.getAttribute("data-line")||"").replace(/\s+/g,"").split(",").filter(Boolean),h=+s.getAttribute("data-line-offset")||0,p=(!function(){if(void 0===e){var t=document.createElement("div");t.style.fontSize="13px",t.style.lineHeight="1.5",t.style.padding="0",t.style.border="0",t.innerHTML="&nbsp;<br />&nbsp;",document.body.appendChild(t),e=38===t.offsetHeight,document.body.removeChild(t)}return e}()?parseFloat:parseInt)(getComputedStyle(s).lineHeight),f=Prism.util.isActive(s,t),g=s.querySelector("code"),m=f?s:g||s,_=[],b=g.textContent.match(n),v=b?b.length+1:1,y=g&&m!=g?function(e,t){var i=getComputedStyle(e),n=getComputedStyle(t);function r(e){return+e.substr(0,e.length-2)}return t.offsetTop+r(n.borderTopWidth)+r(n.paddingTop)-r(i.paddingTop)}(s,g):0;d.forEach(function(e){var t=e.split("-"),i=+t[0],n=+t[1]||i;if(!((n=Math.min(v+h,n))<i)){var r=s.querySelector('.line-highlight[data-range="'+e+'"]')||document.createElement("div");if(_.push(function(){r.setAttribute("aria-hidden","true"),r.setAttribute("data-range",e),r.className=(u||"")+" line-highlight"}),f&&Prism.plugins.lineNumbers){var o=Prism.plugins.lineNumbers.getLine(s,i),a=Prism.plugins.lineNumbers.getLine(s,n);if(o){var l=o.offsetTop+y+"px";_.push(function(){r.style.top=l})}if(a){var c=a.offsetTop-o.offsetTop+a.offsetHeight+"px";_.push(function(){r.style.height=c})}}else _.push(function(){r.setAttribute("data-start",String(i)),n>i&&r.setAttribute("data-end",String(n)),r.style.top=(i-h-1)*p+y+"px",r.textContent=Array(n-i+2).join(" \n")});_.push(function(){r.style.width=s.scrollWidth+"px"}),_.push(function(){m.appendChild(r)})}});var w=s.id;if(f&&Prism.util.isActive(s,i)&&w){a(s,i)||_.push(function(){s.classList.add(i)});var A=parseInt(s.getAttribute("data-start")||"1");o(".line-numbers-rows > span",s).forEach(function(e,t){var i=t+A;e.onclick=function(){r=!1,location.hash=w+"."+i,setTimeout(function(){r=!0},1)}})}return function(){_.forEach(l)}}};var s=0;Prism.hooks.add("before-sanity-check",function(e){var t=e.element.parentElement;if(c(t)){var i=0;o(".line-highlight",t).forEach(function(e){i+=e.textContent.length,e.parentNode.removeChild(e)}),i&&/^(?: \n)+$/.test(e.code.slice(-i))&&(e.code=e.code.slice(0,-i))}}),Prism.hooks.add("complete",function e(i){var n=i.element.parentElement;if(c(n)){clearTimeout(s);var r=Prism.plugins.lineNumbers,o=i.plugins&&i.plugins.lineNumbers;a(n,t)&&r&&!o?Prism.hooks.add("line-numbers",e):(Prism.plugins.lineHighlight.highlightLines(n)(),s=setTimeout(u,1))}}),window.addEventListener("hashchange",u),window.addEventListener("resize",function(){o("pre").filter(c).map(function(e){return Prism.plugins.lineHighlight.highlightLines(e)}).forEach(l)})}function o(e,t){return Array.prototype.slice.call((t||document).querySelectorAll(e))}function a(e,t){return e.classList.contains(t)}function l(e){e()}function c(e){return!!(e&&/pre/i.test(e.nodeName)&&(e.hasAttribute("data-line")||e.id&&Prism.util.isActive(e,i)))}function u(){var e=location.hash.slice(1);o(".temporary.line-highlight").forEach(function(e){e.parentNode.removeChild(e)});var t=(e.match(/\.([\d,-]+)$/)||[,""])[1];if(t&&!document.getElementById(e)){var i=e.slice(0,e.lastIndexOf(".")),n=document.getElementById(i);n&&(n.hasAttribute("data-line")||n.setAttribute("data-line",""),Prism.plugins.lineHighlight.highlightLines(n,t,"temporary ")(),r&&document.querySelector(".temporary.line-highlight").scrollIntoView())}}}(),document.getElementById("myForm").reset();// Botón to top
// Get the button
const rL=document.getElementById("myBtnScroll");rL.addEventListener("click",()=>{window.scrollTo(0,0)}),// When the user scrolls down 20px from the top of the document, show the button
window.onscroll=function(){document.body.scrollTop>20||document.documentElement.scrollTop>20?rL.style.display="block":rL.style.display="none"};