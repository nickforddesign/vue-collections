webpackJsonp([1],{"/q0l":function(t,e){},"0xDb":function(t,e,n){"use strict";function r(t){return void 0!==t&&!f()(t)}function i(t,e){var n=t.Model;return n?new n(e).$data:e}function a(t){var e=t.Model;return t.models.map(function(t){return new e(t).encode()})}e.e=r,n.d(e,"b",function(){return v}),n.d(e,"a",function(){return p}),n.d(e,"c",function(){return h}),e.d=a;var o=n("fZjL"),c=(n.n(o),n("Xxa5")),s=n.n(c),u=n("exGp"),d=n.n(u),l=n("p8Ns"),f=n.n(l),v=function(){var t=d()(s.a.mark(function t(e){var n,r,a,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n=i(e,o),r=e.models.find(function(t){return t.id===n.id}),r?r=n:(a=e.reverse?"unshift":"push",e.models[a](n));case 3:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=d()(s.a.mark(function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",n.map(function(t){v(e,t)}));case 1:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=d()(s.a.mark(function t(e,n){var r;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:r=e.models.findIndex(function(t){return t[e.id_attribute]===n}),r>-1&&e.models.splice(r,1);case 2:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}()},"2lNz":function(t,e,n){"use strict";var r=n("Xxa5"),i=n.n(r),a=n("exGp"),o=n.n(a),c=n("VLWJ"),s=n("bKmf"),u=n("VKuu"),d=n("Z3ev"),l=n.n(d);e.a={name:"demo",collection:function(){return new c.a({basePath:"/users",model:s.a,sortBy:"last_name"})},computed:{encoded:function(){return this.$collection.encode()}},methods:{fetch:function(){this.$collection.fetch().catch(function(){alert("Unable to connect to server")})},addAll:function(){var t=this;return o()(i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$collection.add(l()());case 2:t.$collection.sort();case 3:case"end":return e.stop()}},e,t)}))()},reset:function(){return this.$collection.reset()},add:function(t){this.$collection.add(l()()[t])}},components:{Card:u.a}}},"5G9v":function(t,e,n){"use strict";var r=n("JPjd"),i=n("bKmf");e.a={name:"card",props:["model"],models:{user:function(){return new i.a}},created:function(){this.$user=this.model},computed:{created_on:function(){return new Date(this.$user.created).toLocaleDateString()}},components:{avatar:r.a}}},"6Bjz":function(t,e){},"6yyG":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.$user.role?n("div",[n("div",{staticClass:"card"},[n("div",{staticClass:"row"},[n("avatar",{attrs:{color:t.$user.avatar_color}},[t._v(t._s(t.$user.initials))]),t._v(" "),n("div",{staticClass:"content"},[n("div",{staticClass:"meta"},[n("div",{staticClass:"name"},[t._v(t._s(t.$user.full_name))]),t._v(" "),n("div",{staticClass:"email"},[t._v(t._s(t.$user.email))]),t._v(" "),n("div",{staticClass:"created"},[t._v(t._s(t.created_on))])])])],1)])]):n("div",[t._v("No user")])])},i=[],a={render:r,staticRenderFns:i};e.a=a},"90m7":function(t,e,n){"use strict";var r=n("VJOs"),i=n.n(r),a=n("0xDb"),o=function(t){t.$options.computed||(t.$options.computed={}),t._collection=t.$options.collection(),t.$options.computed.$collection={get:function(){return t._collection},set:function(e){t._collection=e}},t.$options.computed.collection=function(){return t._collection.models}},c=function(t){o(t)};e.a=function(t){return{beforeCreate:function(){n.i(a.e)(this.$options.collection)&&c(this)},beforeDestroy:function(){i()(["$options","collection"],this)&&this.$collection.reset()}}}},"CxC/":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("7+uW"),i=n("eNIl"),a=n("lVK7"),o=n("JyIk"),c=n("Ly64");r.a.config.productionTip=!1,r.a.use(o.a,{root:"http://localhost:6846"}),r.a.use(c.a),r.a.use(a.a),new r.a({el:"#app",template:"<App/>",components:{App:i.a}})},Gr5g:function(t,e){},JPjd:function(t,e,n){"use strict";function r(t){n("Gr5g")}var i=n("ME64"),a=n("U1Oq"),o=n("VU/8"),c=r,s=o(i.a,a.a,c,"data-v-22d08d0a",null);e.a=s.exports},ME64:function(t,e,n){"use strict";e.a={name:"avatar",props:["initials","color"],computed:{style:function(){return{background:this.color}}}}},U1Oq:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"avatar",style:t.style},[n("svg",{attrs:{viewBox:"0 0 220 220"}},[n("text",{attrs:{transform:"matrix(1 0 0 1 110 144)","text-anchor":"middle"}},[t._t("default")],2)])])},i=[],a={render:r,staticRenderFns:i};e.a=a},VKuu:function(t,e,n){"use strict";function r(t){n("6Bjz")}var i=n("5G9v"),a=n("6yyG"),o=n("VU/8"),c=r,s=o(i.a,a.a,c,"data-v-48b4ba32",null);e.a=s.exports},VLWJ:function(t,e,n){"use strict";var r=n("Zrlr"),i=n.n(r),a=n("wxAW"),o=n.n(a),c=n("90m7"),s=n("wW8p");n.d(e,"a",function(){return s.a});!function(){function t(){i()(this,t)}o()(t,null,[{key:"install",value:function(t){t.mixin(n.i(c.a)(t)),s.a.init(t)}}])}()},Z3ev:function(t,e){t.exports=function(){return[{id:{$oid:"c12acd432b19cb22c12db021"},created:{$date:"2015-10-11T00:00:00"},updated:"2017-10-09T00:00:00",role:"admin",first_name:"Michael",last_name:"Scott",email:"mscott@dundermifflin.com",avatar_color:"rebeccapurple",notifications:{alarm:{$date:"2017-10-09T00:00:00"},test:{one:{$date:"2017-10-09T00:00:00"},two:{three:{$date:"2017-10-09T00:00:00"}}}},things:[{id:{$oid:"587e3e15e4e05574a3f91e23"},created:{$date:"2017-10-09T00:00:00"}},{id:{$oid:"58e3e8fee4e0555b7f600c46"},created:{$date:"2017-10-09T00:00:00"}}]},{id:{$oid:"586e6d75b7a7bc5c852c60a5"},created:{$date:"2017-10-09T00:00:00"},updated:"2017-10-09T00:00:00",role:"manager",first_name:"Jim",last_name:"Halpert",email:"jhalpert@dundermifflin.com",avatar_color:"teal",notifications:{alarm:{$date:"2017-10-09T00:00:00"},test:{one:{$date:"2017-10-09T00:00:00"},two:{three:{$date:"2017-10-09T00:00:00"}}}},things:[{id:{$oid:"42356d75b7a7bc5c52c11a90"},created:{$date:"2016-12-16T00:00:00"}},{id:{$oid:"09a11c25c5cb7a7b57d65324"},created:{$date:"2016-12-16T00:00:00"}}]},{id:{$oid:"dc23bd12b1b9f2fc79ac22c0"},created:{$date:"2015-12-12T00:00:00"},updated:"2016-11-09T00:00:00",role:"manager",first_name:"Pam",last_name:"Halpert",email:"phalpert@dundermifflin.com",avatar_color:"orange",notifications:{alarm:{$date:"2016-11-09T00:00:00"},test:{one:{$date:"2016-11-09T00:00:00"},two:{three:{$date:"2016-11-09T00:00:00"}}}},things:[{id:{$oid:"58fa1966e4e05570c2787c4a"},created:{$date:"2014-08-12T00:00:00"}},{id:{$oid:"5914688de4e0556b1dcf29d3"},created:{$date:"2016-03-11T00:00:00"}}]}]}},bKmf:function(t,e,n){"use strict";var r=n("Zx67"),i=n.n(r),a=n("Zrlr"),o=n.n(a),c=n("wxAW"),s=n.n(c),u=n("zwoO"),d=n.n(u),l=n("Pf15"),f=n.n(l),v=n("Ly64"),p=n("iahz"),h=function(t){function e(){return o()(this,e),d()(this,(e.__proto__||i()(e)).apply(this,arguments))}return f()(e,t),s()(e,null,[{key:"defaults",value:function(){return{name:"user",computed:{basePath:function(){if(this.role){return this.$options.basePath||this.role+"s"}return""},full_name:function(){return this.role?this.first_name+" "+this.last_name:""},initials:function(){return this.role?(""+this.first_name[0]+this.last_name[0]).toUpperCase():""}}}}},{key:"schema",value:function(){return{id:{type:p.a},updated:{type:p.b},created:{type:p.b},company:{type:String},first_name:{type:String},last_name:{type:String},email:{type:String},role:{type:String},avatar_color:{type:String},notifications:{type:Object,properties:{alarm:{type:p.b},test:{type:Object,properties:{one:{type:p.b},two:{type:Object,properties:{three:{type:p.b}}}}}}},status:{type:Object,properties:{one:{type:Object}}},things:{type:Array,items:{id:{type:p.a},created:{type:p.b}}}}}}]),e}(v.b);e.a=h},eNIl:function(t,e,n){"use strict";function r(t){n("/q0l")}var i=n("2lNz"),a=n("iDvQ"),o=n("VU/8"),c=r,s=o(i.a,a.a,c,"data-v-7c419b85",null);e.a=s.exports},iDvQ:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("h1",[t._v("vue-collections")]),t._v(" "),n("table",{staticClass:"top"},[n("tbody",[n("tr",[t._m(0),t._v(" "),n("td",[t.collection.length?n("div",[n("button",{on:{click:t.reset}},[t._v("Clear")])]):n("div"),t._v(" "),n("button",{on:{click:t.fetch}},[t._v("Fetch All Users")]),t._v(" "),n("button",{on:{click:t.addAll}},[t._v("Add All Users")]),t._v(" "),n("button",{on:{click:function(e){t.add(0)}}},[t._v("Add User One")]),t._v(" "),n("button",{on:{click:function(e){t.add(1)}}},[t._v("Add User Two")]),t._v(" "),n("button",{on:{click:function(e){t.add(2)}}},[t._v("Add User Three")])])])])]),t._v(" "),n("h2",[t._v("Vue Binding")]),t._v(" "),t.collection.length?n("div",t._l(t.collection,function(t,e){return n("div",{key:e},[n("card",{attrs:{model:t}})],1)})):n("div",[t._v("\n    No models\n  ")]),t._v(" "),n("h2",[t._v("Schema Transformation")]),t._v(" "),n("table",[t._m(1),t._v(" "),n("tbody",[n("tr",[n("td",[n("pre",[t._v(t._s(t.encoded))])]),t._v(" "),n("td",[n("pre",[t._v(t._s(t.collection))])])])])])])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("td",{attrs:{width:"75%"}},[n("p",[t._v("\n            The following is a demo of using the vue-collections plugin to \n            fetch models from a simulated REST API. The models are then passed \n            to the vue-models plugin. Fetching collection data will only work \n            if running this demo with npm start, otherwise use the add button \n            to insert stubbed data.\n          ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("td",[n("h2",[t._v("raw collection data")])]),t._v(" "),n("td",[n("h2",[t._v("decoded collection")])])])])}],a={render:r,staticRenderFns:i};e.a=a},iahz:function(t,e,n){"use strict";n.d(e,"a",function(){return p}),n.d(e,"b",function(){return h});var r=n("Zx67"),i=n.n(r),a=n("Zrlr"),o=n.n(a),c=n("wxAW"),s=n.n(c),u=n("zwoO"),d=n.n(u),l=n("Pf15"),f=n.n(l),v=n("Ly64"),p=function(t){function e(t){var n;o()(this,e);var r=d()(this,(e.__proto__||i()(e)).call(this,t,"$oid"));return n=r,d()(r,n)}return f()(e,t),s()(e,[{key:"out",value:function(){return this.value||""}}]),e}(v.c),h=function(t){function e(t){var n;o()(this,e);var r=d()(this,(e.__proto__||i()(e)).call(this,t,"$date"));return n=r,d()(r,n)}return f()(e,t),s()(e,[{key:"in",value:function(t){var e=new Date(t);if(isNaN(e.getTime()))throw new TypeError('Invalid date: "'+t+'"');this.value=t}},{key:"out",value:function(){return this.value?new Date(this.value).toISOString():void 0}}]),e}(v.c)},lVK7:function(t,e,n){"use strict";var r=n("Zrlr"),i=n.n(r),a=n("wxAW"),o=n.n(a),c=n("90m7"),s=n("wW8p"),u=function(){function t(){i()(this,t)}return o()(t,null,[{key:"install",value:function(t){t.mixin(n.i(c.a)(t)),s.a.init(t)}},{key:"Collection",value:function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return new(Function.prototype.bind.apply(s.a,[null].concat(e)))}}]),t}();e.a=u},wW8p:function(t,e,n){"use strict";var r=n("Xxa5"),i=n.n(r),a=n("exGp"),o=n.n(a),c=n("Zrlr"),s=n.n(c),u=n("wxAW"),d=n.n(u),l=n("0xDb"),f=void 0,v=function(){function t(e){var r=e.model,a=void 0===r?null:r,c=e.id_attribute,u=void 0===c?"id":c,d=e.basePath,v=void 0===d?"":d,p=(e.createPath,e.reverse),h=void 0!==p&&p,m=e.sortBy,_=void 0!==m&&m,b=e.sort,$=void 0===b?function(t,e,n){return e[t]<n[t]?1:-1}:b;return s()(this,t),new f({name:"collection",data:function(){return{models:[]}},computed:{$basePath:function(){return"function"==typeof v?v():v},Model:function(){return a},id_attribute:function(){return u},reverse:function(){return h}},methods:{fetch:function(){var t=this,e=this.$request(""+this.$basePath);return e.then(function(e){t.add(e)}),e},reset:function(){var t=this;return o()(i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.models=[];case 1:case"end":return e.stop()}},e,t)}))()},add:function(t){var e=this;return o()(i.a.mark(function r(){return i.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:t instanceof Array?n.i(l.a)(e,t):n.i(l.b)(e,t);case 1:case"end":return r.stop()}},r,e)}))()},delete:function(t){var e=this;return o()(i.a.mark(function r(){return i.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:n.i(l.c)(e,t);case 1:case"end":return r.stop()}},r,e)}))()},find:function(t){return this.models.find(function(e){var n=!0;for(var r in t)e[r]!==t[r]&&(n=!1);return n})},filter:function(t){return this.models.filter(function(e){var n=!0;for(var r in t)e[r]!==t[r]&&(n=!1);return n})},sort:function(){if(_){this.encode().sort($.bind(null,_)),this.models.sort($.bind(null,_))}this.reverse&&this.models.reverse()},encode:function(){return n.i(l.d)(this)}}})}return d()(t,null,[{key:"init",value:function(t){f=t}}]),t}();e.a=v}},["CxC/"]);
//# sourceMappingURL=app.7df4b5af71896ef742d7.js.map