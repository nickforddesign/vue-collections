webpackJsonp([1],{"/q0l":function(t,e){},"0xDb":function(t,e,n){"use strict";function r(t){return void 0!==t&&!_()(t)}function i(t,e){var n=t.Model;return n?new n(e).$data:e}function o(t){var e=t.Model;if(e)return t.models.map(function(t){return new e(t).encode()})}function a(t){if(t&&!(t instanceof Array))throw new TypeError("Collection expected models as an array, received "+(void 0===t?"undefined":d()(t)));return!0}function c(t){var e={},n=!0,r=!1,i=void 0;try{for(var o,a=s()(t);!(n=(o=a.next()).done);n=!0){var c=o.value;e[c[0]]=c[1]}}catch(t){r=!0,i=t}finally{try{!n&&a.return&&a.return()}finally{if(r)throw i}}return e}e.g=r,n.d(e,"d",function(){return y}),n.d(e,"c",function(){return b}),n.d(e,"e",function(){return $}),e.f=o,e.a=a,e.b=c;var u=n("BO1k"),s=n.n(u),l=n("pFYg"),d=n.n(l),f=n("Xxa5"),v=n.n(f),h=n("exGp"),p=n.n(h),m=n("p8Ns"),_=n.n(m),y=function(){var t=p()(v.a.mark(function t(e){var n,r,o,a,c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n=i(e,c),r=e.id_attribute,o=e.models.find(function(t){return t[r]===n[r]}),o?o=n:(a=e.reverse?"unshift":"push",e.models[a](n));case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),b=function(){var t=p()(v.a.mark(function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",n.map(function(t){y(e,t)}));case 1:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),$=function(){var t=p()(v.a.mark(function t(e,n){var r;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:r=e.models.findIndex(function(t){return t[e.id_attribute]===n}),r>-1&&e.models.splice(r,1);case 2:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}()},"2lNz":function(t,e,n){"use strict";var r=n("Xxa5"),i=n.n(r),o=n("exGp"),a=n.n(o),c=n("VLWJ"),u=n("bKmf"),s=n("VKuu"),l=n("Z3ev"),d=n.n(l);e.a={name:"demo",collection:function(){return new c.a({basePath:"/users",model:u.a,sortBy:"last_name"},d()())},computed:{encoded:function(){return this.$collection.encode()}},methods:{fetch:function(){this.$collection.fetch().catch(function(){alert("Unable to connect to server")})},addAll:function(){var t=this;return a()(i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$collection.add(d()());case 2:case"end":return e.stop()}},e,t)}))()},reset:function(){return this.$collection.reset()},add:function(t){this.$collection.add(d()()[t])}},components:{Card:s.a}}},"5G9v":function(t,e,n){"use strict";var r=n("JPjd"),i=n("bKmf");e.a={name:"card",props:["model"],models:{user:function(){return new i.a}},created:function(){this.$user=this.model},computed:{created_on:function(){return new Date(this.$user.created).toLocaleDateString()}},components:{avatar:r.a}}},"6Bjz":function(t,e){},"6yyG":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.$user.role?n("div",[n("div",{staticClass:"card"},[n("div",{staticClass:"row"},[n("avatar",{attrs:{color:t.$user.avatar_color}},[t._v(t._s(t.$user.initials))]),t._v(" "),n("div",{staticClass:"content"},[n("div",{staticClass:"meta"},[n("div",{staticClass:"name"},[t._v(t._s(t.$user.full_name))]),t._v(" "),n("div",{staticClass:"email"},[t._v(t._s(t.$user.email))]),t._v(" "),n("div",{staticClass:"created"},[t._v(t._s(t.created_on))])])])],1)])]):n("div",[t._v("No user")])])},i=[],o={render:r,staticRenderFns:i};e.a=o},"90m7":function(t,e,n){"use strict";var r=n("VJOs"),i=n.n(r),o=n("0xDb"),a=function(t){t.$options.computed||(t.$options.computed={}),t._collection=t.$options.collection,t.$options.computed.$collection={get:function(){return t._collection},set:function(e){t._collection=e}},t.$options.computed.collection=function(){return t._collection.models}},c=function(t){t.$options.computed||(t.$options.computed={}),a(t)},u=function(t){t._collection=t._collection()};e.a=function(t){return{beforeCreate:function(){n.i(o.g)(this.$options.collection)&&c(this)},created:function(){n.i(o.g)(this.$options.collection)&&u(this)},beforeDestroy:function(){i()(["$options","collection"],this)&&this.$collection.reset()}}}},"CxC/":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("7+uW"),i=n("eNIl"),o=n("lVK7"),a=n("JyIk"),c=n("Ly64");r.a.config.productionTip=!1,r.a.use(a.a,{root:"http://localhost:6846"}),r.a.use(c.a),r.a.use(o.a),new r.a({el:"#app",template:"<App/>",components:{App:i.a}})},Gr5g:function(t,e){},JPjd:function(t,e,n){"use strict";function r(t){n("Gr5g")}var i=n("ME64"),o=n("U1Oq"),a=n("VU/8"),c=r,u=a(i.a,o.a,c,"data-v-22d08d0a",null);e.a=u.exports},Jqgd:function(t,e,n){"use strict";n.d(e,"a",function(){return h}),n.d(e,"b",function(){return p});var r=n("Zx67"),i=n.n(r),o=n("Zrlr"),a=n.n(o),c=n("wxAW"),u=n.n(c),s=n("zwoO"),l=n.n(s),d=n("Pf15"),f=n.n(d),v=n("Ly64"),h=function(t){function e(t){var n;a()(this,e);var r=l()(this,(e.__proto__||i()(e)).call(this,t,"$oid"));return n=r,l()(r,n)}return f()(e,t),u()(e,[{key:"out",value:function(){return this.value||""}}]),e}(v.c),p=function(t){function e(t){var n;a()(this,e);var r=l()(this,(e.__proto__||i()(e)).call(this,t,"$date"));return n=r,l()(r,n)}return f()(e,t),u()(e,[{key:"in",value:function(t){var e=new Date(t);if(isNaN(e.getTime()))throw new TypeError('Invalid date: "'+t+'"');this.value=t}},{key:"out",value:function(){return this.value?new Date(this.value).toISOString():void 0}}]),e}(v.c)},ME64:function(t,e,n){"use strict";e.a={name:"avatar",props:["initials","color"],computed:{style:function(){return{background:this.color}}}}},U1Oq:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"avatar",style:t.style},[n("svg",{attrs:{viewBox:"0 0 220 220"}},[n("text",{attrs:{transform:"matrix(1 0 0 1 110 144)","text-anchor":"middle"}},[t._t("default")],2)])])},i=[],o={render:r,staticRenderFns:i};e.a=o},VKuu:function(t,e,n){"use strict";function r(t){n("6Bjz")}var i=n("5G9v"),o=n("6yyG"),a=n("VU/8"),c=r,u=a(i.a,o.a,c,"data-v-48b4ba32",null);e.a=u.exports},VLWJ:function(t,e,n){"use strict";var r=n("Zrlr"),i=n.n(r),o=n("wxAW"),a=n.n(o),c=n("90m7"),u=n("wW8p");n.d(e,"a",function(){return u.a});!function(){function t(){i()(this,t)}a()(t,null,[{key:"install",value:function(t){t.mixin(n.i(c.a)(t)),u.a.init(t)}}])}()},Z3ev:function(t,e){t.exports=function(){return[{id:{$oid:"c12acd432b19cb22c12db021"},created:{$date:"2015-10-11T00:00:00"},updated:"2017-10-09T00:00:00",role:"admin",first_name:"Michael",last_name:"Scott",email:"mscott@dundermifflin.com",avatar_color:"rebeccapurple",notifications:{alarm:{$date:"2017-10-09T00:00:00"},test:{one:{$date:"2017-10-09T00:00:00"},two:{three:{$date:"2017-10-09T00:00:00"}}}},things:[{id:{$oid:"587e3e15e4e05574a3f91e23"},created:{$date:"2017-10-09T00:00:00"}},{id:{$oid:"58e3e8fee4e0555b7f600c46"},created:{$date:"2017-10-09T00:00:00"}}]},{id:{$oid:"586e6d75b7a7bc5c852c60a5"},created:{$date:"2017-10-09T00:00:00"},updated:"2017-10-09T00:00:00",role:"manager",first_name:"Jim",last_name:"Halpert",email:"jhalpert@dundermifflin.com",avatar_color:"teal",notifications:{alarm:{$date:"2017-10-09T00:00:00"},test:{one:{$date:"2017-10-09T00:00:00"},two:{three:{$date:"2017-10-09T00:00:00"}}}},things:[{id:{$oid:"42356d75b7a7bc5c52c11a90"},created:{$date:"2016-12-16T00:00:00"}},{id:{$oid:"09a11c25c5cb7a7b57d65324"},created:{$date:"2016-12-16T00:00:00"}}]},{id:{$oid:"dc23bd12b1b9f2fc79ac22c0"},created:{$date:"2015-12-12T00:00:00"},updated:"2016-11-09T00:00:00",role:"manager",first_name:"Pam",last_name:"Halpert",email:"phalpert@dundermifflin.com",avatar_color:"orange",notifications:{alarm:{$date:"2016-11-09T00:00:00"},test:{one:{$date:"2016-11-09T00:00:00"},two:{three:{$date:"2016-11-09T00:00:00"}}}},things:[{id:{$oid:"58fa1966e4e05570c2787c4a"},created:{$date:"2014-08-12T00:00:00"}},{id:{$oid:"5914688de4e0556b1dcf29d3"},created:{$date:"2016-03-11T00:00:00"}}]}]}},bKmf:function(t,e,n){"use strict";var r=n("Zx67"),i=n.n(r),o=n("Zrlr"),a=n.n(o),c=n("wxAW"),u=n.n(c),s=n("zwoO"),l=n.n(s),d=n("Pf15"),f=n.n(d),v=n("Ly64"),h=n("Jqgd"),p=function(t){function e(){return a()(this,e),l()(this,(e.__proto__||i()(e)).apply(this,arguments))}return f()(e,t),u()(e,null,[{key:"defaults",value:function(){return{name:"user",computed:{basePath:function(){if(this.role){return this.$options.basePath||this.role+"s"}return""},full_name:function(){return this.role?this.first_name+" "+this.last_name:""},initials:function(){return this.role?(""+this.first_name[0]+this.last_name[0]).toUpperCase():""}}}}},{key:"schema",value:function(){return{id:{type:h.a},updated:{type:h.b},created:{type:h.b},company:{type:String},first_name:{type:String},last_name:{type:String},email:{type:String},role:{type:String},avatar_color:{type:String},notifications:{type:Object,properties:{alarm:{type:h.b},test:{type:Object,properties:{one:{type:h.b},two:{type:Object,properties:{three:{type:h.b}}}}}}},status:{type:Object,properties:{one:{type:Object}}},things:{type:Array,items:{id:{type:h.a},created:{type:h.b}}}}}}]),e}(v.b);e.a=p},eNIl:function(t,e,n){"use strict";function r(t){n("/q0l")}var i=n("2lNz"),o=n("iDvQ"),a=n("VU/8"),c=r,u=a(i.a,o.a,c,"data-v-7c419b85",null);e.a=u.exports},iDvQ:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("h1",[t._v("vue-collections")]),t._v(" "),n("table",{staticClass:"top"},[n("tbody",[n("tr",[t._m(0),t._v(" "),n("td",[t.collection.length?n("div",[n("button",{on:{click:t.reset}},[t._v("Clear")])]):n("div"),t._v(" "),n("button",{on:{click:t.fetch}},[t._v("Fetch All Users")]),t._v(" "),n("button",{on:{click:t.addAll}},[t._v("Add All Users")]),t._v(" "),n("button",{on:{click:function(e){t.add(0)}}},[t._v("Add User One")]),t._v(" "),n("button",{on:{click:function(e){t.add(1)}}},[t._v("Add User Two")]),t._v(" "),n("button",{on:{click:function(e){t.add(2)}}},[t._v("Add User Three")])])])])]),t._v(" "),n("h2",[t._v("Vue Binding")]),t._v(" "),t.collection.length?n("div",t._l(t.collection,function(t,e){return n("div",{key:e},[n("card",{attrs:{model:t}})],1)})):n("div",[t._v("\n    No models\n  ")]),t._v(" "),n("h2",[t._v("Schema Transformation")]),t._v(" "),n("table",[t._m(1),t._v(" "),n("tbody",[n("tr",[n("td",[n("pre",[t._v(t._s(t.encoded))])]),t._v(" "),n("td",[n("pre",[t._v(t._s(t.collection))])])])])])])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("td",{attrs:{width:"75%"}},[n("p",[t._v("\n            The following is a demo of using the vue-collections plugin to \n            fetch models from a simulated REST API. The models are then passed \n            to the vue-models plugin. Fetching collection data will only work \n            if running this demo with npm start, otherwise use the add button \n            to insert stubbed data.\n          ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("td",[n("h2",[t._v("raw collection data")])]),t._v(" "),n("td",[n("h2",[t._v("decoded collection")])])])])}],o={render:r,staticRenderFns:i};e.a=o},lVK7:function(t,e,n){"use strict";var r=n("Zrlr"),i=n.n(r),o=n("wxAW"),a=n.n(o),c=n("90m7"),u=n("wW8p"),s=function(){function t(){i()(this,t)}return a()(t,null,[{key:"install",value:function(t){t.mixin(n.i(c.a)(t)),u.a.init(t)}},{key:"Collection",value:function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return new(Function.prototype.bind.apply(u.a,[null].concat(e)))}}]),t}();e.a=s},wW8p:function(t,e,n){"use strict";var r=n("woOf"),i=n.n(r),o=n("Xxa5"),a=n.n(o),c=n("exGp"),u=n.n(c),s=n("fZjL"),l=n.n(s),d=n("mvHQ"),f=n.n(d),v=n("Zrlr"),h=n.n(v),p=n("wxAW"),m=n.n(p),_=n("0xDb"),y=void 0,b=function(){function t(e){var r=e.model,o=void 0===r?null:r,c=e.query,s=void 0===c?{}:c,d=e.id_attribute,v=void 0===d?"id":d,p=e.basePath,m=void 0===p?"":p,b=e.reverse,$=void 0!==b&&b,w=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];if(h()(this,t),!y)throw new ReferenceError("You must install VueCollections via Vue.use(VueCollections).");return n.i(_.a)(w)?new y({name:"collection",data:function(){return{models:[],total_count:0,basePath:m,query:s}},created:function(){w&&this.add(w)},computed:{$basePath:function(){return"function"==typeof this.basePath?this.basePath():this.basePath},$url:function(){return""+this.$basePath+this.$query_string},$joiner:function(){return this.$basePath.includes("?")?"&":"?"},$query_string:function(){var t=this;return this.$query_keys.length?this.$joiner+this.$query_keys.map(function(e){return e+"="+f()(t.query[e]).replace(/"/g,"")},"").join("&"):""},$query_keys:function(){return l()(this.query)},Model:function(){return o},id_attribute:function(){return v},reverse:function(){return $}},methods:{fetch:function(){var t=this,e=this.$request(""+this.$url,{responseHeaders:!0});return e.then(function(e){var r=n.i(_.b)(e.headers),i=parseInt(r.collection_total_count);t.total_count=i||e.body.length,t.add(e.body)}),e},reset:function(){var t=this;return u()(a.a.mark(function e(){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.models=[],e.abrupt("return",t);case 2:case"end":return e.stop()}},e,t)}))()},add:function(t){var e=this;return u()(a.a.mark(function n(){var r;return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r=t instanceof Array?_.c:_.d,r(e,t),n.abrupt("return",e);case 3:case"end":return n.stop()}},n,e)}))()},delete:function(t){var e=this;return u()(a.a.mark(function r(){return a.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return n.i(_.e)(e,t),r.abrupt("return",e);case 2:case"end":return r.stop()}},r,e)}))()},find:function(t){return this.models.find(function(e){var n=!0;for(var r in t)e[r]!==t[r]&&(n=!1);return n})},filter:function(t){return this.models.filter(function(e){var n=!0;for(var r in t)e[r]!==t[r]&&(n=!1);return n})},sort:function(t){return this.models=this.models.sort(t),this},encode:function(){return n.i(_.f)(this)},query_set:function(t){return this.query=t,this},query_push:function(t){return this.query=i()({},this.query,t),this},query_remove:function(t){return y.delete(this.query,t),this},query_clear:function(){return this.query={},this}}}):null}return m()(t,null,[{key:"init",value:function(t){y=t}}]),t}();e.a=b}},["CxC/"]);
//# sourceMappingURL=app.5690dcb9d03a32d4e3a9.js.map