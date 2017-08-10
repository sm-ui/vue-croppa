webpackJsonp([7],{29:function(t,e,a){var i=a(8)(a(38),a(76),null,null,null);t.exports=i.exports},38:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={mounted:function(){var t=document.createElement("script");t.src="https://production-assets.codepen.io/assets/embed/ei.js",document.body.appendChild(t)}}},76:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"help"}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",[a("v-expansion-panel",{attrs:{expand:""}},[a("v-expansion-panel-content",{attrs:{value:!1}},[a("div",{staticClass:"title",slot:"header"},[t._v("Output file size too big!!!")]),t._v(" "),a("div",{staticClass:"pt-2 pl-2"},[t._v("\n            If you encounter this problem, you can either "),a("router-link",{attrs:{to:"/customization?sec=image-size"}},[t._v("decrease the image size")]),t._v(" (visual size, not file size) or "),a("router-link",{attrs:{to:"/file-output"}},[t._v("specify the compression rate in output methods")]),t._v(".\n          ")],1)])],1),t._v(" "),a("br"),t._v(" "),a("v-expansion-panel",{attrs:{expand:""}},[a("v-expansion-panel-content",{attrs:{value:!1}},[a("div",{staticClass:"title",slot:"header"},[t._v("Cross Origin Error!!!")]),t._v(" "),a("div",{staticClass:"pt-2 pl-2"},[t._v("\n            You can use a remote image link as initial image on croppa, but if the image is not host on your server(or not under the same domain as your site to be exact), you might come acros CORS problems.\n          ")]),t._v(" "),a("div",{staticClass:"pt-2 pl-2 title"},[t._v("What should I do?")]),t._v(" "),a("div",{staticClass:"pt-2 pl-2"},[t._v("\n            1. Make sure the server response of the image has the header "),a("code",[t._v("Access-Control-Allow-Origin")]),t._v(" set to "),a("code",[t._v("*")]),t._v(', otherwise it means the resource can not be accessed from other domains (basically it means "you can\'t use my images on your site") and there is nothing you can do about it.\n          ')]),t._v(" "),a("div",{staticClass:"pt-2 pl-2"},[t._v("\n            2. If "),a("code",[t._v("Access-Control-Allow-Origin")]),t._v(" is set to "),a("code",[t._v("*")]),t._v(" already, you can do like following:\n          ")]),t._v(" "),a("div",{staticClass:"pt-2 pl-2"},[a("ul",[a("li",[a("p",[t._v("Use "),a("code",[t._v("initial-image")]),t._v(" with a straight-up url to set initial image. This way croppa will do the trick for you so you don't need to do nothing else.")])]),t._v(" "),a("li",[a("p",[t._v("If for some reason you have to use the "),a("code",[t._v("initial")]),t._v(" slot to set initial image. You should add "),a("code",[t._v('crossOrigin="anonymous"')]),t._v(" attribute to the "),a("code",[t._v("<img>")]),t._v(" tag and "),a("strong",[t._v("remember to write it before "),a("code",[t._v("src")]),t._v(" attribute.")])])])])]),t._v(" "),a("div",{staticClass:"pt-2 pl-2"},[a("router-link",{attrs:{to:"/customization?sec=initial-image"}},[t._v("More about this")])],1)])],1),t._v(" "),a("br"),t._v(" "),a("v-expansion-panel",{attrs:{expand:""}},[a("v-expansion-panel-content",{attrs:{value:!1}},[a("div",{staticClass:"title",slot:"header"},[t._v("Photos with EXIF orientation displayed incorrectly!!!")]),t._v(" "),a("div",{staticClass:"pt-2 pl-2"},[t._v("\n            First, please upgrade to v0.2.0+. "),a("strong",[t._v("Starting from this version, croppa supports correctly displaying locally-uploaded image file with EXIF orientation. ")])]),t._v(" "),a("div",{staticClass:"pt-2 pl-2"},[t._v("\n            But as for initial images, croppa can not detect its EXIF data, so you need to specify the orientation number for it to be shown correctly. Just add a "),a("code",[t._v("data-exif-orientation")]),t._v(" attribute to it.\n          ")]),t._v(" "),a("div",{staticClass:"pt-2 pl-2"},[a("p",{staticClass:"codepen",attrs:{"data-height":"300","data-theme-id":"19967","data-slug-hash":"EvXjxB","data-default-tab":"html,result","data-user":"zhanziyang","data-embed-version":"2","data-pen-title":"Vue Croppa exif orientation"}},[t._v("See the Pen "),a("a",{attrs:{href:"https://codepen.io/zhanziyang/pen/EvXjxB/"}},[t._v("Vue Croppa exif orientation")]),t._v(" by Chris ("),a("a",{attrs:{href:"https://codepen.io/zhanziyang"}},[t._v("@zhanziyang")]),t._v(") on "),a("a",{attrs:{href:"https://codepen.io"}},[t._v("CodePen")]),t._v(".")])]),t._v(" "),a("br"),t._v(" "),a("div",{staticClass:"pt-2 pl-2"},[a("p",{staticClass:"codepen",attrs:{"data-height":"300","data-theme-id":"19967","data-slug-hash":"aywOOe","data-default-tab":"html,result","data-user":"zhanziyang","data-embed-version":"2","data-pen-title":"Vue Croppa exif orientation 2"}},[t._v("See the Pen "),a("a",{attrs:{href:"https://codepen.io/zhanziyang/pen/aywOOe/"}},[t._v("Vue Croppa exif orientation 2")]),t._v(" by Chris ("),a("a",{attrs:{href:"https://codepen.io/zhanziyang"}},[t._v("@zhanziyang")]),t._v(") on "),a("a",{attrs:{href:"https://codepen.io"}},[t._v("CodePen")]),t._v(".")])])])],1)],1)],1)],1)},staticRenderFns:[]}}});