(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f2bca440"],{"00bf":function(t,e,a){},"0871":function(t,e,a){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,n=new Array(e);a<e;a++)n[a]=t[a];return n}function r(t){if(Array.isArray(t))return n(t)}a.d(e,"a",(function(){return c}));a("9f90"),a("efe6"),a("13b6"),a("8c9d"),a("d8e0"),a("30d8"),a("cca2");function i(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}a("8b89"),a("67ad"),a("f4d8"),a("9c52");function o(t,e){if(t){if("string"===typeof t)return n(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);return"Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a?Array.from(t):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?n(t,e):void 0}}a("d3f5");function s(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t){return r(t)||i(t)||o(t)||s()}},"0d1c":function(t,e,a){var n=a("9bd5"),r=a("c4e9");t.exports=function(t,e,a,i){try{return i?e(n(a)[0],a[1]):e(a)}catch(o){r(t,"throw",o)}}},"4eb8":function(t,e,a){"use strict";var n=a("8a5a"),r=a("2712"),i=a("5acb"),o=a("0d1c"),s=a("8db6"),c=a("2950"),d=a("4551"),u=a("d560"),f=a("23e0"),l=a("8487"),m=Array;t.exports=function(t){var e=i(t),a=c(this),p=arguments.length,g=p>1?arguments[1]:void 0,b=void 0!==g;b&&(g=n(g,p>2?arguments[2]:void 0));var h,A,v,x,y,w,U=l(e),S=0;if(!U||this===m&&s(U))for(h=d(e),A=a?new this(h):m(h);h>S;S++)w=b?g(e[S],S):e[S],u(A,S,w);else for(x=f(e,U),y=x.next,A=a?new this:[];!(v=r(y,x)).done;S++)w=b?o(x,g,[v.value,S],!0):v.value,u(A,S,w);return A.length=S,A}},"5c25":function(t,e,a){t.exports=a.p+"img/no-data.dd2cce4c.png"},"6f2b":function(t,e,a){"use strict";a("7bd9")},"7bd9":function(t,e,a){},"818f":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAAXNSR0IArs4c6QAAARdQTFRFAAAAQEBgVUBVSUlfUElfTExiTExhT0tgTkpfTUtfTUxfTktgTUxgTkxgTkxgTUtgTUtgTkxgTkxgTkxfTkxgT01fUU5gUk9fU09fVE9fVVBfW1RfXVVfXlZfX1dfYllfZFpfZVpfZVteb2FecGJfcWNedmZeeWheemhegGxdgoCLiXJdi3RdjnZdj3ZdlHldmHxdmX1dmn1dm35dm5mgnH5dnoBcoIFdoYJcpKKop4Zcso1cs45ctI9ctbO2uJFbvZRbwJZbxJlbxZpbyJtbyZ1bysjHzZ9b0M7M0aFb06Jb1qVb2KVb2KZa26ha3ala4Kta461a5q9a6bFa6rJa67Na7LNa77Va8bZa9bla9rpa97pa+Lta9+g0YgAAABN0Uk5TAAgMIyMvV4iJmZvI0Ojp6vT4+X+/RKAAAAE+SURBVDjLlZNnQ4NADIYP2rILvXp1j9Za99571lU3bsn//x0ikgAtir6fHpIAyXsXxkiyops257apKzLrVN4oCVLJyLelJbUsEiqrUjyfs0SHrFyULxRFiooFej8171eE35As8YOs7z40ClRmjt3H1ko/BbRgPup/8BLg9dmDhzrN8jWtgU9913Da6BLVHe9lFGOG7x/5swlHlQDWoEmOyUyhH7pvAyHdeDUMKkxHHIETxA2YRdSZiViHPcR5WEQ0mYM4BruIc7CE6DD+ewGPChrxguWowEY8gHXECbjtCdGmJqe8u16a+BC2qUkc8/5jvJs09PQ+jGOiUS4k5FXRKLR68vwqptYCWR0dVpqMxHGL6bNA+yJx3Eyl59WLQFsUUP925TIvbfa1z14cvw+tffU06X/Li+vvcO4k1/8TzeRYH4ZLEY0AAAAASUVORK5CYII="},"8ba5":function(t,e,a){"use strict";a("00bf")},"9c52":function(t,e,a){"use strict";a("f4d8");var n=a("4e59"),r=a("2712"),i=a("e824"),o=a("086e"),s=a("ca36"),c=function(){var t=!1,e=/[ac]/;return e.exec=function(){return t=!0,/./.exec.apply(this,arguments)},!0===e.test("abc")&&t}(),d=TypeError,u=i(/./.test);n({target:"RegExp",proto:!0,forced:!c},{test:function(t){var e=this.exec;if(!o(e))return u(this,t);var a=r(e,this,t);if(null!==a&&!s(a))throw new d("RegExp exec method returned something other than an Object or null");return!!a}})},a676:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"infomation-wrap"},[n("CommonHeader",{attrs:{title:t.$t("menu.news")}}),n("div",{staticClass:"page-wrap"},[t.messageList.length>0?[n("VanList",{attrs:{finished:t.finished,"finished-text":"","loading-text":" ","immediate-check":!1},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.messageList,(function(e){return n("InformationItem",{key:e.id,attrs:{dataSource:e},on:{show:t.handleDetail}})})),1)]:n("div",{staticClass:"no-data"},[n("img",{attrs:{src:a("5c25"),alt:""}}),n("div",[t._v(t._s(t.$t("common.noData")))])])],2)],1)},r=[],i=a("d941"),o=a("0871"),s=a("c3ae"),c=(a("31a7"),a("b775")),d=function(t){return Object(c["a"])("GET","/dapp/message/list",t)},u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"item-wrap",on:{click:t.handleShowDetail}},[n("div",{staticClass:"header"},[n("div",{staticClass:"info"},[n("img",{staticClass:"avatar",attrs:{src:a("818f"),alt:""}}),n("img",{attrs:{src:t.dataSource.logo,alt:""}}),0===t.dataSource.type?n("div",{staticClass:"name",attrs:{translate:"no"}},[t._v(" StarFish OS ")]):n("div",{staticClass:"name"},[t._v(" "+t._s(t.$t("common.recommand"))),n("span",{attrs:{translate:"no"}},[t._v(t._s(t.$gbUtils.formatAddress(t.dataSource.address)))])])]),n("div",{staticClass:"time",attrs:{translate:"no"}},[t._v(t._s(t.$gbUtils.timeFormat(t.dataSource.updateTime)||t.$gbUtils.timeFormat(t.dataSource.createTime)))])]),n("div",{staticClass:"content"},[t._v(" "+t._s(t.dataSource.content)+" ")])])},f=[],l={props:["dataSource"],name:"informationItem",data:function(){return{}},methods:{handleShowDetail:function(){this.$emit("show",this.dataSource)}},mounted:function(){}},m=l,p=(a("6f2b"),a("cba8")),g=Object(p["a"])(m,u,f,!1,null,"5ded4644",null),b=g.exports,h={name:"",data:function(){return{loading:!1,finished:!1,messageList:[],tempData:{},pageSize:10,pageNumber:1,total:0}},methods:{handleDetail:function(t){this.tempData=t,this.$router.push({name:"InformationDetail",params:this.tempData})},onLoad:function(){this.pageNumber+=1,this.getList()},getList:function(){var t=this;return Object(s["a"])(Object(i["a"])().mark((function e(){var a;return Object(i["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,d({pageSize:t.pageSize,pageNum:t.pageNumber});case 2:if(a=e.sent,t.loading=!1,200===a.code){e.next=6;break}return e.abrupt("return");case 6:t.pageSize*t.pageNumber>=a.total&&(t.finished=!0),t.messageList=[].concat(Object(o["a"])(t.messageList),Object(o["a"])(a.rows));case 8:case"end":return e.stop()}}),e)})))()}},mounted:function(){this.getList()},components:{InformationItem:b}},A=h,v=(a("8ba5"),Object(p["a"])(A,n,r,!1,null,"483b3450",null));e["default"]=v.exports},cca2:function(t,e,a){var n=a("4e59"),r=a("4eb8"),i=a("87ea"),o=!i((function(t){Array.from(t)}));n({target:"Array",stat:!0,forced:o},{from:r})}}]);