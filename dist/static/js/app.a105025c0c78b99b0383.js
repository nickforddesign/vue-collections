webpackJsonp([1],{"0xDb":function(t,n,e){"use strict";function s(t){return void 0!==t&&!a.a.some.apply(a.a,i()(t).concat([a.a.isEmpty]))}n.d=s,e.d(n,"a",function(){return d}),e.d(n,"b",function(){return v});var o=e("fZjL"),r=(e.n(o),e("Gu7T")),i=e.n(r),c=e("M4fF"),a=e.n(c),u=e("PJh5"),l=e.n(u),f=e("JyIk");e.d(n,"c",function(){return f.b});var d=function(t,n,e){return l.a.utc(n[t])>l.a.utc(e[t])?1:-1},v=function(t,n,e){return n[t]<e[t]?1:-1}},"5G9v":function(t,n,e){"use strict";var s=e("JPjd"),o=e("bKmf");n.a={name:"card",props:["model"],models:{user:function(){return new o.a}},created:function(){this.$user=this.model},computed:{created_on:function(){return new Date(this.$user.created).toLocaleDateString()}},components:{avatar:s.a}}},"6Bjz":function(t,n){},"6yyG":function(t,n,e){"use strict";var s=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[t.$user.role?e("div",[e("div",{staticClass:"card"},[e("div",{staticClass:"row"},[e("avatar",{attrs:{color:t.$user.avatar_color}},[t._v(t._s(t.$user.initials))]),t._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"meta"},[e("div",{staticClass:"name"},[t._v(t._s(t.$user.full_name))]),t._v(" "),e("div",{staticClass:"email"},[t._v(t._s(t.$user.email))]),t._v(" "),e("div",{staticClass:"created"},[t._v(t._s(t.created_on))])])])],1)])]):e("div",[t._v("No user")])])},o=[],r={render:s,staticRenderFns:o};n.a=r},"90m7":function(t,n,e){"use strict";var s=e("M4fF"),o=e.n(s),r=e("0xDb"),i=function(t){t.$options.computed||(t.$options.computed={}),t._collection=t.$options.collection(),t.$options.computed.$collection={get:function(){return t._collection},set:function(n){t._collection=n}},t.$options.computed.collection=function(){return t._collection.models}},c=function(t){i(t)};n.a=function(t){return{beforeCreate:function(){e.i(r.d)(this.$options.collection)&&c(this)},beforeDestroy:function(){o.a.get(this,"$options.collection")&&this.$collection.reset()}}}},BtyG:function(t,n,e){"use strict";function s(t){e("PnCc")}var o=e("UnWR"),r=e("Jg4V"),i=e("VU/8"),c=s,a=i(o.a,r.a,c,null,null);n.a=a.exports},"CxC/":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var s=e("7+uW"),o=e("BtyG"),r=e("lVK7"),i=e("JyIk"),c=e("Ly64");s.a.config.productionTip=!1,s.a.use(i.a,{root:"http://localhost:6846"}),s.a.use(c.a),s.a.use(r.a),new s.a({el:"#app",template:"<App/>",components:{App:o.a}})},Gr5g:function(t,n){},JPjd:function(t,n,e){"use strict";function s(t){e("Gr5g")}var o=e("ME64"),r=e("U1Oq"),i=e("VU/8"),c=s,a=i(o.a,r.a,c,"data-v-22d08d0a",null);n.a=a.exports},Jg4V:function(t,n,e){"use strict";var s=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("h1",[t._v("vue-collections")]),t._v(" "),e("p",[t._v("The following is a demo of using the vue-collections plugin to fetch models from a simulated REST API. The models are then passed to the vue-models plugin.")]),t._v(" "),t.collection.length?e("div",[t._l(t.$collection.models,function(t,n){return e("div",{key:n},[e("card",{attrs:{model:t}})],1)}),t._v(" "),e("button",{on:{click:t.reset}},[t._v("Fetch")])],2):e("div",[t._v("\n    No models in collection\n    "),e("button",{on:{click:t.fetch}},[t._v("Fetch")])])])},o=[],r={render:s,staticRenderFns:o};n.a=r},ME64:function(t,n,e){"use strict";n.a={name:"avatar",props:["initials","color"],computed:{style:function(){return{background:this.color}}}}},PnCc:function(t,n){},U1Oq:function(t,n,e){"use strict";var s=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"avatar",style:t.style},[e("svg",{attrs:{viewBox:"0 0 220 220"}},[e("text",{attrs:{transform:"matrix(1 0 0 1 110 144)","text-anchor":"middle"}},[t._t("default")],2)])])},o=[],r={render:s,staticRenderFns:o};n.a=r},UnWR:function(t,n,e){"use strict";var s=e("lVK7"),o=e("VKuu");n.a={name:"demo",collection:function(){return new s.Collection({basePath:"/users"})},methods:{fetch:function(){return this.$collection.fetch()},reset:function(){return this.$collection.reset()}},components:{Card:o.a}}},VKuu:function(t,n,e){"use strict";function s(t){e("6Bjz")}var o=e("5G9v"),r=e("6yyG"),i=e("VU/8"),c=s,a=i(o.a,r.a,c,"data-v-48b4ba32",null);n.a=a.exports},bKmf:function(t,n,e){"use strict";var s=e("Zx67"),o=e.n(s),r=e("Zrlr"),i=e.n(r),c=e("zwoO"),a=e.n(c),u=e("wxAW"),l=e.n(u),f=e("Pf15"),d=e.n(f),v=e("Ly64"),h=e("iahz"),j={name:"user",computed:{basePath:function(){if(this.role){return this.$options.basePath||this.role+"s"}return""},full_name:function(){return this.role?this.first_name+" "+this.last_name:""},initials:function(){return this.role?(""+this.first_name[0]+this.last_name[0]).toUpperCase():""}}},p=function(t){function n(t,e){return i()(this,n),a()(this,(n.__proto__||o()(n)).call(this,t,[j,e]))}return d()(n,t),l()(n,null,[{key:"schema",value:function(){return{id:{type:h.a},updated:{type:h.b},created:{type:h.b},company:{type:String},first_name:{type:String},last_name:{type:String},email:{type:String},role:{type:String},avatar_color:{type:String},notifications:{type:Object,properties:{alarm:{type:h.b},test:{type:Object,properties:{one:{type:h.b},two:{type:Object,properties:{three:{type:h.b}}}}}}},status:{type:Object,properties:{one:{type:Object}}},things:{type:Array,items:{id:{type:h.a},created:{type:h.b}}}}}}]),n}(v.b);n.a=p},iahz:function(t,n,e){"use strict";e.d(n,"a",function(){return h}),e.d(n,"b",function(){return j});var s=e("Zx67"),o=e.n(s),r=e("Zrlr"),i=e.n(r),c=e("wxAW"),a=e.n(c),u=e("zwoO"),l=e.n(u),f=e("Pf15"),d=e.n(f),v=e("Ly64"),h=function(t){function n(t){var e;i()(this,n);var s=l()(this,(n.__proto__||o()(n)).call(this,t,"$oid"));return e=s,l()(s,e)}return d()(n,t),a()(n,[{key:"out",value:function(){return this.value||""}}]),n}(v.c),j=function(t){function n(t){var e;i()(this,n);var s=l()(this,(n.__proto__||o()(n)).call(this,t,"$date"));return e=s,l()(s,e)}return d()(n,t),a()(n,[{key:"in",value:function(t){var n=new Date(t);if(isNaN(n.getTime()))throw new TypeError('Invalid date: "'+t+'"');this.value=t}},{key:"out",value:function(){return this.value?new Date(this.value).toISOString():void 0}}]),n}(v.c)},lVK7:function(t,n,e){"use strict";var s=e("Zrlr"),o=e.n(s),r=e("wxAW"),i=e.n(r),c=e("90m7"),a=e("wW8p"),u=function(){function t(){o()(this,t)}return i()(t,null,[{key:"install",value:function(t,n){t.mixin(e.i(c.a)(t))}},{key:"Collection",value:function(){for(var t=arguments.length,n=Array(t),e=0;e<t;e++)n[e]=arguments[e];return new(Function.prototype.bind.apply(a.a,[null].concat(n)))}}]),t}();n.a=u},olkN:function(t,n,e){"use strict";var s=e("M4fF"),o=e.n(s),r=e("7+uW"),i=e("NYxO"),c=e("Ly64"),a=e("iahz"),u=e("0xDb");r.a.use(i.b),n.a=function(){function t(){return o.a.get(this._vm,"$request")||u.c}var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c.b,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"_id",s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",l=arguments.length>4&&void 0!==arguments[4]&&arguments[4],f=arguments.length>5&&void 0!==arguments[5]&&arguments[5],d=function(){var t=void 0;return"string"==typeof s?t=s:"function"==typeof s&&(t=s()),t},v=function(t){var e=t;if(f){var s=n.schema()[f],o=s===a.b?u.a:u.b;e=t.sort(o.bind(null,f))}return l&&(e=t.reverse()),e};return new i.b.Store({state:{collection:[]},getters:{collection:function(t){return t.collection},models:function(t){return t.collection}},mutations:{RESET:function(t){t.collection=[]},FETCH:function(t,n){t.collection=v(n)},ADD:function(t,n){l?t.collection.unshift(n):t.collection.push(n)},DELETE:function(t,n){var s=t.collection.findIndex(function(t){return t[e]===n});t.collection.splice(s,1)},UPDATE:function(t,n,s){var r=t.collection.findIndex(function(t){return t[e]===n});t.collection[r]=o.a.merge(t.collection[r],s),t.collection=v(t.collection)}},actions:{reset:function(t){(0,t.commit)("RESET")},fetch:function(n){var e=n.commit,s=t.apply(this)(""+d());return s.then(function(t){e("FETCH",t)}),s},add:function(n,e){var s=n.commit,o=t.apply(this)(d()+"/"+r,{method:"POST",body:e});return o.then(function(t){s("ADD",t)}),o},delete:function(n,e){var s=n.commit,o=t.apply(this)(d()+"/"+e,{method:"DELETE"});return o.then(function(t){s("DELETE",e)}),o}}})}},uslO:function(t,n,e){function s(t){return e(o(t))}function o(t){var n=r[t];if(!(n+1))throw new Error("Cannot find module '"+t+"'.");return n}var r={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-nz":"dyB6","./en-nz.js":"dyB6","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-latn":"+27R","./gom-latn.js":"+27R","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};s.keys=function(){return Object.keys(r)},s.resolve=o,t.exports=s,s.id="uslO"},wW8p:function(t,n,e){"use strict";var s=e("Dd8w"),o=e.n(s),r=e("Zrlr"),i=e.n(r),c=e("7+uW"),a=e("NYxO"),u=e("olkN"),l=e("Ly64"),f=function t(n){var s=n.model,r=void 0===s?l.b:s,f=n.id_attribute,d=void 0===f?"_id":f,v=n.basePath,h=void 0===v?"":v,j=n.createPath,p=void 0===j?"":j,m=n.reverse,y=void 0!==m&&m,b=n.sortBy,g=void 0!==b&&b;i()(this,t);var _=e.i(u.a)(r,d,h,p,y,g);return new c.a({name:"collection",store:_,computed:o()({},e.i(a.a)(["models"])),methods:{fetch:function(){return this.$store.dispatch("fetch")},reset:function(){return this.$store.dispatch("reset")},add:function(t){return this.$store.dispatch("add",t)},delete:function(t){return this.$store.dispatch("delete",t)}}})};n.a=f}},["CxC/"]);
//# sourceMappingURL=app.a105025c0c78b99b0383.js.map