webpackJsonp([1],{30:function(t,e,o){function r(t){o(92)}var i=o(8)(o(39),o(84),r,"data-v-98168054",null);t.exports=i.exports},39:function(t,e,o){"use strict";function r(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,o){function r(i,n){try{var a=e[i](n),s=a.value}catch(t){return void o(t)}if(!a.done)return Promise.resolve(s).then(function(t){r("next",t)},function(t){r("throw",t)});t(s)}return r("next")})}}Object.defineProperty(e,"__esModule",{value:!0});var i=o(54),n=o.n(i);e.default={data:function(){return{myCroppa:{},width:350,height:350,placeholder:"Choose an image",placeholderFontSize:0,disabled:!1,preventWhiteSpace:!1,disablePinchToZoom:!1,showRemoveButton:!0,withInitialImage:!1,initialImageSrc:"https://zhanziyang.github.io/vue-croppa/static/initial-image.png"}},computed:{code:function(){return'\x3c!-- Sync with your customizations above! --\x3e\n<croppa v-model="myCroppa"\n        :width="'+this.width+'"\n        :height="'+this.height+'"\n        placeholder="'+this.placeholder+'"\n        :placeholder-font-size="'+this.placeholderFontSize+'"\n        :disabled="'+this.disabled+'"\n        :prevent-white-space="'+this.preventWhiteSpace+'"\n        :show-remove-button="'+this.showRemoveButton+'"\n        @file-choose="handleCroppaFileChoose"\n        @file-size-exceed="handleCroppaFileSizeExceed"\n        @file-type-mismatch="handleCroppaFileTypeMismatch"\n        @image-remove="handleImageRemove"\n        @move="handleCroppaMove"\n        @zoom="handleCroppaZoom">  '+(this.withInitialImage?'\n  <img crossOrigin="anonymous"\n       src="'+this.initialImageSrc+'"\n       slot="initial">':"")+"\n</croppa > "}},beforeMount:function(){window.innerWidth<400&&(this.width=250,this.height=250)},mounted:function(){this.preload("https://zhanziyang.github.io/vue-croppa/static/initial-image.png"),this.preload("https://unsplash.it/400/400"),this.preload("https://unsplash.it/600/500")},watch:{withInitialImage:function(){this.refresh()},initialImageSrc:function(){this.refresh()}},methods:{preload:function(t){(new Image).src=t},getDataUrl:function(){alert(this.myCroppa.generateDataUrl())},printBlob:function(){function t(){return e.apply(this,arguments)}var e=r(n.a.mark(function t(){var e;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.myCroppa.promisedBlob();case 2:e=t.sent,console.log(e);case 4:case"end":return t.stop()}},t,this)}));return t}(),refresh:function(){this.myCroppa.refresh()},remove:function(){this.myCroppa.remove()},zoomIn:function(){this.myCroppa.zoomIn()},chooseFile:function(){this.myCroppa.chooseFile()},moveUp:function(){this.myCroppa.moveUpwards(5)},handleCroppaInit:function(){console.log("init")},handleCroppaFileChoose:function(t){console.log("file chose"),console.log(t)},handleCroppaFileSizeExceed:function(t){console.log("file size exceeded"),console.log(t)},handleCroppaFileTypeMismatch:function(t){console.log("file type mismatch"),console.log(t)},handleImageRemove:function(){console.log("image removed")},handleCroppaMove:function(){console.log("moved")},handleCroppaZoom:function(){console.log("zoomed")},onInput:function(){console.log("sdjfk")}}}},54:function(t,e,o){t.exports=o(60)},58:function(t,e,o){e=t.exports=o(1)(),e.push([t.i,'@font-face{font-family:Black Ops One;font-style:normal;font-weight:400;src:local("Black Ops One"),local("BlackOpsOne-Regular"),url("https://fonts.gstatic.com/s/blackopsone/v7/2XW-DmDsGbDLE372KrMW1TxObtw73-qQgbr7Be51v5c.woff2") format("woff2");unicode-range:u+00??,u+0131,u+0152-0153,u+02c6,u+02da,u+02dc,u+2000-206f,u+2074,u+20ac,u+2212,u+2215}h2[data-v-98168054]{position:relative;text-align:center}@media screen and (max-width:600px){h2[data-v-98168054]{padding-bottom:1px;margin-bottom:4px}}h2 span.header[data-v-98168054]{font-family:Black Ops One,cursive}h2 span.header[data-v-98168054]:first-child{color:#41b883}h2 span.header[data-v-98168054]:nth-child(2){color:#35495e}h2 img[data-v-98168054]{position:absolute;right:12px;width:60px;bottom:0;transition:all .3s}h2 img[data-v-98168054]:hover{opacity:.7}.subheader[data-v-98168054]{padding:0;font-size:20px;margin:10px 0;text-align:center;display:block;height:auto}@media screen and (max-width:600px){.subheader[data-v-98168054]{font-size:14px;margin:4px 0}}.croppa-container[data-v-98168054]{float:right}.card.try-out[data-v-98168054]{background-color:#35495e!important}',""])},60:function(t,e,o){(function(e){var r="object"==typeof e?e:"object"==typeof window?window:"object"==typeof self?self:this,i=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,n=i&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,t.exports=o(61),i)r.regeneratorRuntime=n;else try{delete r.regeneratorRuntime}catch(t){r.regeneratorRuntime=void 0}}).call(e,o(10))},61:function(t,e,o){(function(e){!function(e){"use strict";function o(t,e,o,r){var n=e&&e.prototype instanceof i?e:i,a=Object.create(n.prototype),s=new v(r||[]);return a._invoke=c(t,o,s),a}function r(t,e,o){try{return{type:"normal",arg:t.call(e,o)}}catch(t){return{type:"throw",arg:t}}}function i(){}function n(){}function a(){}function s(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function l(t){function o(e,i,n,a){var s=r(t[e],t,i);if("throw"!==s.type){var l=s.arg,c=l.value;return c&&"object"==typeof c&&y.call(c,"__await")?Promise.resolve(c.__await).then(function(t){o("next",t,n,a)},function(t){o("throw",t,n,a)}):Promise.resolve(c).then(function(t){l.value=t,n(l)},a)}a(s.arg)}function i(t,e){function r(){return new Promise(function(r,i){o(t,e,r,i)})}return n=n?n.then(r,r):r()}"object"==typeof e.process&&e.process.domain&&(o=e.process.domain.bind(o));var n;this._invoke=i}function c(t,e,o){var i=I;return function(n,a){if(i===k)throw new Error("Generator is already running");if(i===E){if("throw"===n)throw a;return f()}for(o.method=n,o.arg=a;;){var s=o.delegate;if(s){var l=h(s,o);if(l){if(l===L)continue;return l}}if("next"===o.method)o.sent=o._sent=o.arg;else if("throw"===o.method){if(i===I)throw i=E,o.arg;o.dispatchException(o.arg)}else"return"===o.method&&o.abrupt("return",o.arg);i=k;var c=r(t,e,o);if("normal"===c.type){if(i=o.done?E:z,c.arg===L)continue;return{value:c.arg,done:o.done}}"throw"===c.type&&(i=E,o.method="throw",o.arg=c.arg)}}}function h(t,e){var o=t.iterator[e.method];if(o===m){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=m,h(t,e),"throw"===e.method))return L;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return L}var i=r(o,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,L;var n=i.arg;return n?n.done?(e[t.resultName]=n.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=m),e.delegate=null,L):n:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,L)}function p(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function u(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function v(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(p,this),this.reset(!0)}function d(t){if(t){var e=t[b];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,r=function e(){for(;++o<t.length;)if(y.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=m,e.done=!0,e};return r.next=r}}return{next:f}}function f(){return{value:m,done:!0}}var m,g=Object.prototype,y=g.hasOwnProperty,w="function"==typeof Symbol?Symbol:{},b=w.iterator||"@@iterator",_=w.asyncIterator||"@@asyncIterator",x=w.toStringTag||"@@toStringTag",C="object"==typeof t,S=e.regeneratorRuntime;if(S)return void(C&&(t.exports=S));S=e.regeneratorRuntime=C?t.exports:{},S.wrap=o;var I="suspendedStart",z="suspendedYield",k="executing",E="completed",L={},O={};O[b]=function(){return this};var F=Object.getPrototypeOf,j=F&&F(F(d([])));j&&j!==g&&y.call(j,b)&&(O=j);var R=a.prototype=i.prototype=Object.create(O);n.prototype=R.constructor=a,a.constructor=n,a[x]=n.displayName="GeneratorFunction",S.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===n||"GeneratorFunction"===(e.displayName||e.name))},S.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,a):(t.__proto__=a,x in t||(t[x]="GeneratorFunction")),t.prototype=Object.create(R),t},S.awrap=function(t){return{__await:t}},s(l.prototype),l.prototype[_]=function(){return this},S.AsyncIterator=l,S.async=function(t,e,r,i){var n=new l(o(t,e,r,i));return S.isGeneratorFunction(e)?n:n.next().then(function(t){return t.done?t.value:n.next()})},s(R),R[x]="Generator",R[b]=function(){return this},R.toString=function(){return"[object Generator]"},S.keys=function(t){var e=[];for(var o in t)e.push(o);return e.reverse(),function o(){for(;e.length;){var r=e.pop();if(r in t)return o.value=r,o.done=!1,o}return o.done=!0,o}},S.values=d,v.prototype={constructor:v,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=m,this.done=!1,this.delegate=null,this.method="next",this.arg=m,this.tryEntries.forEach(u),!t)for(var e in this)"t"===e.charAt(0)&&y.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=m)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){function e(e,r){return n.type="throw",n.arg=t,o.next=e,r&&(o.method="next",o.arg=m),!!r}if(this.done)throw t;for(var o=this,r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r],n=i.completion;if("root"===i.tryLoc)return e("end");if(i.tryLoc<=this.prev){var a=y.call(i,"catchLoc"),s=y.call(i,"finallyLoc");if(a&&s){if(this.prev<i.catchLoc)return e(i.catchLoc,!0);if(this.prev<i.finallyLoc)return e(i.finallyLoc)}else if(a){if(this.prev<i.catchLoc)return e(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return e(i.finallyLoc)}}}},abrupt:function(t,e){for(var o=this.tryEntries.length-1;o>=0;--o){var r=this.tryEntries[o];if(r.tryLoc<=this.prev&&y.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var n=i?i.completion:{};return n.type=t,n.arg=e,i?(this.method="next",this.next=i.finallyLoc,L):this.complete(n)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),L},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.finallyLoc===t)return this.complete(o.completion,o.afterLoc),u(o),L}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc===t){var r=o.completion;if("throw"===r.type){var i=r.arg;u(o)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,o){return this.delegate={iterator:d(t),resultName:e,nextLoc:o},"next"===this.method&&(this.arg=m),L}}}("object"==typeof e?e:"object"==typeof window?window:"object"==typeof self?self:this)}).call(e,o(10))},84:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"index"}},[t._m(0),t._v(" "),o("div",{staticClass:"text-xs-center"},[t._m(1),t._v(" "),t._m(2),t._v(" "),o("br"),t._v(" "),o("v-chip",{staticClass:"orange white--text"},[t._v("\n      What You See Is What You Get\n      "),o("v-icon",{attrs:{right:""}},[t._v("star")])],1),t._v(" "),o("v-chip",{staticClass:"orange white--text"},[t._v("\n      24kb In Total\n      "),o("v-icon",{attrs:{right:""}},[t._v("star")])],1),t._v(" "),o("v-chip",{staticClass:"orange white--text"},[t._v("\n      Hightly Customizable\n      "),o("v-icon",{attrs:{right:""}},[t._v("star")])],1),t._v(" "),o("v-chip",{staticClass:"orange white--text"},[t._v("\n      Mobile Friendly\n      "),o("v-icon",{attrs:{right:""}},[t._v("star")])],1)],1),t._v(" "),o("br"),t._v(" "),o("v-card",{staticClass:"white--text try-out"},[o("v-container",{attrs:{fluid:"","grid-list-lg":""}},[o("v-layout",{attrs:{"row-md":"",column:""}},[o("v-flex",{attrs:{md4:""}},[o("div",[o("p",{staticClass:"tip"},[o("i",{staticClass:"headline iconfont icon-pc"},[t._v(" on comptuters")])]),o("li",{staticClass:"subheading"},[t._v("Drag and drop a file")]),t._v(" "),o("li",{staticClass:"subheading"},[t._v("Click to choose a file")]),t._v(" "),o("li",{staticClass:"subheading"},[t._v("Drag to move")]),t._v(" "),o("li",{staticClass:"subheading"},[t._v("Scroll to zoom")]),t._v(" "),o("p"),t._v(" "),o("br"),t._v(" "),o("p",{staticClass:"tip"},[o("i",{staticClass:"headline iconfont icon-mobile"},[t._v(" on mobile devices")])]),o("li",{staticClass:"subheading"},[t._v("Tab to choose a file")]),t._v(" "),o("li",{staticClass:"subheading"},[t._v("Drag to move")]),t._v(" "),o("li",{staticClass:"subheading"},[t._v("Pinch with two fingers to zoom")]),t._v(" "),o("p")])]),t._v(" "),o("v-flex",{attrs:{md8:""}},[o("croppa",{attrs:{width:+t.width,height:+t.height,"canvas-color":t.canvasColor,placeholder:t.placeholder,"placeholder-font-size":+t.placeholderFontSize,"placeholder-color":t.placeholderColor,disabled:t.disabled,"prevent-white-space":t.preventWhiteSpace,"reverse-scroll-to-zoom":t.reverseScrollToZoom,"show-remove-button":t.showRemoveButton,"remove-button-color":t.removeButtonColor,"remove-button-size":+t.removeButtonSize},on:{"file-choose":t.handleCroppaFileChoose,"file-size-exceed":t.handleCroppaFileSizeExceed,"file-type-mismatch":t.handleCroppaFileTypeMismatch,"image-remove":t.handleImageRemove,move:t.handleCroppaMove,zoom:t.handleCroppaZoom},model:{value:t.myCroppa,callback:function(e){t.myCroppa=e},expression:"myCroppa"}},[t.withInitialImage?o("img",{attrs:{crossOrigin:"anonymous",src:t.initialImageSrc},slot:"initial"}):t._e()])],1)],1)],1)],1),t._v(" "),o("br"),t._v(" "),o("v-layout",[o("v-flex",{attrs:{xs12:"","order-md1":""}},[o("v-layout",{attrs:{row:"",wrap:""}},[o("v-flex",{attrs:{md6:"",xs12:""}},[o("v-slider",{attrs:{label:"width","thumb-label":"",max:500,min:100},model:{value:t.width,callback:function(e){t.width=e},expression:"width"}})],1),t._v(" "),o("v-flex",{attrs:{md6:"",xs12:""}},[o("v-slider",{attrs:{label:"height","thumb-label":"",max:500,min:100},model:{value:t.height,callback:function(e){t.height=e},expression:"height"}})],1)],1),t._v(" "),o("v-layout",{attrs:{row:"",wrap:""}},[o("v-flex",{attrs:{md4:"",xs12:""}},[o("v-switch",{attrs:{label:"set initial image"},model:{value:t.withInitialImage,callback:function(e){t.withInitialImage=e},expression:"withInitialImage"}})],1),t._v(" "),o("v-flex",{attrs:{md8:""}},[o("v-text-field",{attrs:{name:"initialImageSrc",label:"initial image url"},model:{value:t.initialImageSrc,callback:function(e){t.initialImageSrc=e},expression:"initialImageSrc"}})],1)],1),t._v(" "),o("v-layout",{attrs:{row:"",wrap:""}},[o("v-flex",{attrs:{md6:"",xs12:""}},[o("v-text-field",{attrs:{name:"placeholder",label:"placeholder"},model:{value:t.placeholder,callback:function(e){t.placeholder=e},expression:"placeholder"}})],1),t._v(" "),o("v-flex",{attrs:{md6:"",xs12:""}},[o("v-text-field",{attrs:{name:"placeholderFontSize",label:"placeholderFontSize (px)",type:"number"},model:{value:t.placeholderFontSize,callback:function(e){t.placeholderFontSize=e},expression:"placeholderFontSize"}})],1)],1),t._v(" "),o("v-layout",{attrs:{row:"",wrap:""}},[o("v-flex",{attrs:{md4:"",xs12:""}},[o("v-switch",{attrs:{label:"disabled"},model:{value:t.disabled,callback:function(e){t.disabled=e},expression:"disabled"}})],1),t._v(" "),o("v-flex",{attrs:{md4:"",xs12:""}},[o("v-switch",{attrs:{label:"preventWhiteSpace"},model:{value:t.preventWhiteSpace,callback:function(e){t.preventWhiteSpace=e},expression:"preventWhiteSpace"}})],1),t._v(" "),o("v-flex",{attrs:{md4:"",xs12:""}},[o("v-switch",{attrs:{label:"showRemoveButton"},model:{value:t.showRemoveButton,callback:function(e){t.showRemoveButton=e},expression:"showRemoveButton"}})],1)],1),t._v(" "),o("v-btn",{attrs:{block:"",secondary:"",large:"",dark:"",to:"/customization",router:""}},[t._v("More Customizations")]),t._v(" "),o("br")],1)],1),t._v(" "),o("br"),t._v(" "),o("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:t.code,expression:"code"}]},[o("code",{staticClass:"html",staticStyle:{"margin-bottom":"16px"}})]),t._v(" "),o("div",{staticClass:"headline"},[t._v("Browser Support")]),t._v(" "),o("v-divider"),t._v(" "),t._m(3),t._v(" "),o("br"),t._v(" "),o("div",{staticClass:"headline"},[t._v("License")]),t._v(" "),o("v-divider"),t._v(" "),t._m(4)],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("h2",[o("span",{staticClass:"header"},[t._v("Vue")]),t._v(" "),o("span",{staticClass:"header"},[t._v("Croppa")]),t._v(" "),o("span",{staticClass:"subheader"},[t._v("A simple straightforward customizable lightweight mobile-friendly image cropper for Vue 2.0.")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("video",{staticClass:"post video-post",staticStyle:{width:"524px",height:"413.96px"},attrs:{id:"video-element",autoplay:"",loop:"",poster:"https://i.imgur.com/YhWLgqLh.jpg",preload:"auto",muted:"muted","webkit-playsinline":""}},[o("source",{attrs:{type:"video/mp4",src:"https://i.imgur.com/vO1FgQM.mp4"}})])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("video",{staticClass:"post video-post",staticStyle:{height:"413.96px"},attrs:{id:"video-element",autoplay:"",loop:"",poster:"https://i.imgur.com/sJAQPo7h.jpg",preload:"auto",muted:"muted","webkit-playsinline":""}},[o("source",{attrs:{type:"video/mp4",src:"https://i.imgur.com/sJAQPo7.mp4"}})])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ul",{staticClass:"bs-list pt-2"},[o("li",[t._v("IE 10+")]),t._v(" "),o("li",[t._v("Firefox 3.6+")]),t._v(" "),o("li",[t._v("Chrome 6+")]),t._v(" "),o("li",[t._v("Safari 6+")]),t._v(" "),o("li",[t._v("Opera 11.5+")]),t._v(" "),o("li",[t._v("iOS Safari 6.1+")]),t._v(" "),o("li",[t._v("Android Browser 3+")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("p",{staticClass:"pt-2"},[t._v("ISC License (ISC)\n    "),o("br"),t._v(" Copyright 2017 Chris Chan")])}]}},92:function(t,e,o){var r=o(58);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);o(9)("28539d16",r,!0)}});