(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-58f03490"],{"0871":function(t,e,a){"use strict";function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,s=new Array(e);a<e;a++)s[a]=t[a];return s}function n(t){if(Array.isArray(t))return s(t)}a.d(e,"a",(function(){return r}));a("9f90"),a("efe6"),a("13b6"),a("8c9d"),a("d8e0"),a("30d8"),a("cca2");function i(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}a("8b89"),a("67ad"),a("f4d8"),a("9c52");function o(t,e){if(t){if("string"===typeof t)return s(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);return"Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a?Array.from(t):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?s(t,e):void 0}}a("d3f5");function c(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function r(t){return n(t)||i(t)||o(t)||c()}},"0d1c":function(t,e,a){var s=a("9bd5"),n=a("c4e9");t.exports=function(t,e,a,i){try{return i?e(s(a)[0],a[1]):e(a)}catch(o){n(t,"throw",o)}}},"25e3":function(t,e,a){},"28ad":function(t,e,a){"use strict";a("e224")},"3a6c":function(t,e,a){},"3e60":function(t,e,a){"use strict";var s=a("4e59"),n=a("4f60").find,i=a("6763"),o="find",c=!0;o in[]&&Array(1)[o]((function(){c=!1})),s({target:"Array",proto:!0,forced:c},{find:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),i(o)},"4d27":function(t,e,a){},"4eb8":function(t,e,a){"use strict";var s=a("8a5a"),n=a("2712"),i=a("5acb"),o=a("0d1c"),c=a("8db6"),r=a("2950"),l=a("4551"),u=a("d560"),d=a("23e0"),f=a("8487"),m=Array;t.exports=function(t){var e=i(t),a=r(this),v=arguments.length,p=v>1?arguments[1]:void 0,h=void 0!==p;h&&(p=s(p,v>2?arguments[2]:void 0));var b,C,w,g,_,x,k=f(e),S=0;if(!k||this===m&&c(k))for(b=l(e),C=a?new this(b):m(b);b>S;S++)x=h?p(e[S],S):e[S],u(C,S,x);else for(g=d(e,k),_=g.next,C=a?new this:[];!(w=n(_,g)).done;S++)x=h?o(g,p,[w.value,S],!0):w.value,u(C,S,x);return C.length=S,C}},"5c25":function(t,e,a){t.exports=a.p+"img/no-data.dd2cce4c.png"},"5f7d":function(t,e,a){"use strict";a("25e3")},"613e":function(t,e,a){"use strict";a("ef19")},"74c2":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("CommomPop",{on:{close:t.closePop}},[a("div",{staticClass:"name"},[t._v(t._s(t.$t("admin.modifyInfo")))]),a("div",{staticClass:"set-image"},[a("van-uploader",{attrs:{"after-read":t.afterRead},model:{value:t.fileList,callback:function(e){t.fileList=e},expression:"fileList"}},[a("div",{staticClass:"upload"},[a("van-icon",{attrs:{name:"plus",size:"25"}})],1)])],1),a("div",{staticClass:"input-wrap"},[a("van-field",{staticClass:"input",attrs:{translate:"no",placeholder:t.$t("common.inputName"),"input-align":"center"},model:{value:t.nickname,callback:function(e){t.nickname=e},expression:"nickname"}})],1),a("div",{staticClass:"button-group"},[a("div",{staticClass:"button-item",on:{click:t.handleConfirm}},[t._v(" "+t._s(t.$t("common.confirm"))+" ")])])])},n=[],i=a("d941"),o=a("c3ae"),c=a("93d6"),r=a("9598"),l=a("f645"),u=a("a261"),d={name:"",data:function(){return{nickname:"",logo:"",fileList:[]}},methods:{closePop:function(){this.$emit("close")},afterRead:function(t){var e=this;return Object(o["a"])(Object(i["a"])().mark((function a(){var s,n;return Object(i["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return s=new FormData,s.append("file",t.file),a.next=4,Object(u["a"])(s);case 4:if(n=a.sent,n.success){a.next=8;break}return e.fileList=[],a.abrupt("return");case 8:e.logo=l["a"].imgUrl+n.data.url;case 9:case"end":return a.stop()}}),a)})))()},handleConfirm:function(){var t=this;return Object(o["a"])(Object(i["a"])().mark((function e(){var a;return Object(i["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.nickname&&t.logo){e.next=2;break}return e.abrupt("return",t.$toast(t.$t("common.fill")));case 2:return e.next=4,Object(c["d"])({nickname:t.nickname,logo:t.logo});case 4:if(a=e.sent,a.success){e.next=7;break}return e.abrupt("return");case 7:t.$parent.getInfo(),t.closePop();case 9:case"end":return e.stop()}}),e)})))()}},mounted:function(){},components:{CommomPop:r["a"]}},f=d,m=(a("f969"),a("cba8")),v=Object(m["a"])(f,s,n,!1,null,"891a0bac",null);e["a"]=v.exports},7694:function(t,e,a){"use strict";a("f884")},"8e8c":function(t,e,a){"use strict";a.d(e,"e",(function(){return n})),a.d(e,"b",(function(){return i})),a.d(e,"g",(function(){return o})),a.d(e,"a",(function(){return c})),a.d(e,"f",(function(){return r})),a.d(e,"d",(function(){return l})),a.d(e,"c",(function(){return u}));var s=a("b775"),n=function(t){return Object(s["a"])("GET","/dapp/information/getInformationAdminIndex",t,!0,!0,1)},i=function(t){return Object(s["a"])("GET","/dapp/information/adminList",t)},o=function(t){return Object(s["a"])("GET","/dapp/information/list",t,!0,!0)},c=function(t){return Object(s["a"])("POST","/dapp/information",t)},r=function(t){return Object(s["a"])("GET","/dapp/information/".concat(t),t,!0,!0)},l=function(t){return Object(s["a"])("PUT","/dapp/information",t)},u=function(t){return Object(s["a"])("DELETE","/dapp/information/".concat(t))}},9598:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("VanPopup",{staticStyle:{"box-sizing":"border-box",width:"93%","background-color":"transparent"},attrs:{round:""},on:{"click-overlay":t.closePop},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[a("div",{staticClass:"wrap"},[a("div",{staticClass:"window"},[t.closeIcon?a("div",{staticClass:"icon-wrapper"},[a("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"},on:{click:function(e){return e.stopPropagation(),t.closePop.apply(null,arguments)}}},[a("use",{attrs:{"xlink:href":"#close"}})])]):t._e(),t._t("default")],2)])])},n=[],i={name:"",props:{closeIcon:{type:Boolean,default:!0}},data:function(){return{show:!0}},methods:{closePop:function(){this.$emit("close")},handleConfirm:function(){this.$emit("close")}},mounted:function(){}},o=i,c=(a("7694"),a("cba8")),r=Object(c["a"])(o,s,n,!1,null,"464a00b7",null);e["a"]=r.exports},"99e4":function(t,e,a){t.exports=a.p+"img/news.b93de134.png"},"9c4e":function(t,e,a){"use strict";a("3a6c")},"9c52":function(t,e,a){"use strict";a("f4d8");var s=a("4e59"),n=a("2712"),i=a("e824"),o=a("086e"),c=a("ca36"),r=function(){var t=!1,e=/[ac]/;return e.exec=function(){return t=!0,/./.exec.apply(this,arguments)},!0===e.test("abc")&&t}(),l=TypeError,u=i(/./.test);s({target:"RegExp",proto:!0,forced:!r},{test:function(t){var e=this.exec;if(!o(e))return u(this,t);var a=n(e,this,t);if(null!==a&&!c(a))throw new l("RegExp exec method returned something other than an Object or null");return!!a}})},a261:function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));var s=a("b775"),n=function(t){return Object(s["a"])("POST","/dapp/oss/upload",t,!0,!0)}},c5f0:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"media-wrap"},[s("CommonHeader"),s("div",{staticClass:"page-wrap"},[s("MediaAdminHeader"),s("div",{attrs:{id:"content"}},[s("div",{staticClass:"name"},[s("div",[t._v(t._s(t.$t("admin.contentAdmin")))]),s("div",{staticClass:"icon-box"},[s("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"},on:{click:t.handleRealese}},[s("use",{attrs:{"xlink:href":"#insert-record"}})])])]),s("div",{staticClass:"operation-btns"},[s("div",{staticClass:"box"},[s("div",{staticClass:"btn",class:{active:0===t.tabActive},on:{click:function(e){return t.handleTab(0)}}},[t._v(t._s(t.$t("admin.news")))])]),s("div",{staticClass:"box"},[s("div",{staticClass:"btn",class:{active:1===t.tabActive},on:{click:function(e){return t.handleTab(1)}}},[t._v(t._s(t.$t("admin.article")))])])]),s("div",{staticClass:"operation-cell",on:{click:t.handleMenuShow}},[s("div",{staticClass:"name"},[t._v(t._s(t.listFilter.statusLabel))]),s("svg",{staticClass:"icon"},[s("use",{attrs:{href:"#arrow-down"}})])]),t.newsList.length>0?s("div",{staticClass:"list"},[s("VanList",{attrs:{finished:t.finished,"finished-text":"","loading-text":" ","immediate-check":!1},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.newsList,(function(e){return s("NewsletterItem",{key:e.id,attrs:{active:t.tabActive,dataSource:e},on:{deleteSuccess:t.deleteSuccess}})})),1)],1):s("div",{staticClass:"no-data"},[s("img",{attrs:{src:a("5c25"),alt:""}}),s("div",[t._v(t._s(t.$t("common.noData")))])])])],1),t.releaseShow?s("ReleasePop",{on:{close:t.handleRealese}}):t._e(),s("VanPopup",{staticClass:"menu-popup",style:{height:"40%"},attrs:{round:"",position:"bottom"},model:{value:t.menuShow,callback:function(e){t.menuShow=e},expression:"menuShow"}},[s("div",{staticClass:"menu-list"},t._l(t.statusOptions,(function(e,a){return s("div",{key:e.value,staticClass:"menu-item",on:{click:function(a){return t.statusDropdownChange(e)}}},[s("div",{staticClass:"label"},[s("div",[t._v(t._s(e.text))])]),e.value==t.listFilter.status?s("div",{staticClass:"icon"},[s("van-icon",{attrs:{name:"success"}})],1):t._e()])})),0)])],1)},n=[],i=a("d941"),o=a("0871"),c=a("c3ae"),r=a("a43d"),l=(a("31a7"),a("3e60"),a("13b6"),a("7736")),u=a("8e8c"),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"news-wrap"},[a("div",{staticClass:"header"},[a("div",{staticClass:"time"},[t._v(" "+t._s(t.$gbUtils.timeFormat(t.dataSource.updateTime)||t.$gbUtils.timeFormat(t.dataSource.createTime)||"00:00:00")+" "),0===t.dataSource.status?a("span",{staticClass:"wait"},[t._v(t._s(t.$t("admin.reviewing")))]):2===t.dataSource.status?a("span",{staticClass:"fail"},[t._v(t._s(t.$t("admin.reviewFail")))]):t._e()]),a("div",{staticClass:"num"},[a("svg",{staticClass:"icon"},[a("use",{attrs:{href:"#eyes"}})]),t._v(" "+t._s(t.dataSource.readingVolume||0)+" ")])]),a("div",{staticClass:"bottom"},[0===t.active?a("div",{staticClass:"news-content"},[a("div",{staticClass:"content-box"},[t.dataSource.preview?a("div",{staticClass:"img-box"},[a("img",{attrs:{src:t.dataSource.preview,alt:""}})]):t._e(),a("div",{staticClass:"content"},[a("div",{staticClass:"text"},[t._v(t._s(t.dataSource.content))]),a("div",{staticClass:"btn-group"},[a("div",{staticClass:"btn",on:{click:t.handleToEdit}},[a("svg",{staticClass:"icon"},[a("use",{attrs:{href:"#edit"}})]),a("div",[t._v(t._s(t.$t("common.edit")))])]),a("div",{staticClass:"btn",on:{click:t.handleCloseOperationPop}},[a("svg",{staticClass:"icon"},[a("use",{attrs:{href:"#delete"}})]),a("div",[t._v(t._s(t.$t("common.delete")))])])])])])]):a("div",{staticClass:"article-content"},[a("div",{staticClass:"img-box"},[a("img",{attrs:{src:t.dataSource.preview,alt:""}})]),a("div",{staticClass:"text-box"},[a("div",{staticClass:"text",domProps:{innerHTML:t._s(t.dataSource.content)}}),a("div",{staticClass:"btn-group"},[a("div",{staticClass:"btn",on:{click:t.handleToEdit}},[a("svg",{staticClass:"icon"},[a("use",{attrs:{href:"#edit"}})]),a("div",[t._v(t._s(t.$t("common.edit")))])]),a("div",{staticClass:"btn",on:{click:t.handleCloseOperationPop}},[a("svg",{staticClass:"icon"},[a("use",{attrs:{href:"#delete"}})]),a("div",[t._v(t._s(t.$t("common.delete")))])])])])])]),a("VanPopup",{staticClass:"result-popup",attrs:{"close-on-click-overlay":!1},model:{value:t.operationPopShow,callback:function(e){t.operationPopShow=e},expression:"operationPopShow"}},[a("div",{staticClass:"result-popup__body"},[a("div",{staticClass:"header"},[a("svg",{staticClass:"close-icon",on:{click:t.handleCloseOperationPop}},[a("use",{attrs:{href:"#close"}})])]),a("div",{staticClass:"content"},[t._v(t._s(0==t.active?t.$t("common.deleteAlertNewsConfirmTitle"):t.$t("common.deleteNewsConfirmTitle")))]),a("div",{staticClass:"border-box",on:{click:t.handleDelete}},[a("div",{staticClass:"btn delete"},[t._v(t._s(t.$t("common.deleteConfirm")))])]),a("div",{staticClass:"border-box",on:{click:t.handleCloseOperationPop}},[a("div",{staticClass:"btn"},[t._v(t._s(t.$t("common.deleteCancel")))])])])])],1)},f=[],m={name:"",props:["dataSource","active"],data:function(){return{operationPopShow:!1}},methods:{handleDelete:function(){var t=this;return Object(c["a"])(Object(i["a"])().mark((function e(){var a;return Object(i["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["c"])(t.dataSource.id);case 2:if(a=e.sent,a.success){e.next=5;break}return e.abrupt("return");case 5:t.$toast("Success"),t.$emit("deleteSuccess");case 7:case"end":return e.stop()}}),e)})))()},handleToEdit:function(){0===this.active?this.$router.push({name:"ReleaseNews",params:{id:this.dataSource.id}}):this.$router.push({name:"ReleaseArticle",params:{id:this.dataSource.id}})},handleCloseOperationPop:function(){this.operationPopShow=!this.operationPopShow}},mounted:function(){}},v=m,p=(a("9c4e"),a("cba8")),h=Object(p["a"])(v,d,f,!1,null,"5b6d29ec",null),b=h.exports,C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"header"}},[a("div",{staticClass:"title"},[a("div",{staticClass:"info"},[a("div",{staticClass:"avatar"},[a("img",{attrs:{src:t.mediaInfo.logo||t.defaultImg,alt:"",translate:"no"}})]),a("div",{staticClass:"name",attrs:{translate:"no"}},[t._v(t._s(t.mediaInfo.nickname))])]),a("div",{staticClass:"modify",on:{click:t.handleNameShow}},[0===t.mediaInfo.nicknameReviewStatus?a("div",{staticClass:"status"},[t._v(t._s(t.$t("admin.peddingReview")))]):t._e(),a("div",{staticClass:"icon-box"},[a("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[a("use",{attrs:{"xlink:href":"#edit"}})])])])]),a("div",{staticClass:"data"},[a("div",{staticClass:"data-item"},[a("div",{staticClass:"value",attrs:{translate:"no"}},[t._v(" "+t._s(t.mediaInfo.readingsCumulative||0)+" ")]),a("div",{staticClass:"name"},[t._v(t._s(t.$t("admin.readCount")))])]),a("div",{staticClass:"data-item"},[a("div",{staticClass:"value",attrs:{translate:"no"}},[t._v(" "+t._s(t.mediaInfo.readsNewsletter||0)+" ")]),a("div",{staticClass:"name"},[t._v(t._s(t.$t("admin.newsCount")))])]),a("div",{staticClass:"data-item"},[a("div",{staticClass:"value",attrs:{translate:"no"}},[t._v(" "+t._s(t.mediaInfo.articlesNumber||0)+" ")]),a("div",{staticClass:"name"},[t._v(t._s(t.$t("admin.articleCount")))])])]),t.nameShow?a("NamePop",{on:{close:t.handleNameShow}}):t._e()],1)},w=[],g=a("74c2"),_={name:"",data:function(){return{nameShow:!1,mediaInfo:{},defaultImg:a("cf05")}},methods:{handleNameShow:function(){0!==this.mediaInfo.nicknameReviewStatus&&this.$router.push("/modifyInformation")},getInfo:function(){var t=this;return Object(c["a"])(Object(i["a"])().mark((function e(){var a;return Object(i["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["e"])();case 2:if(a=e.sent,a.success){e.next=5;break}return e.abrupt("return");case 5:t.mediaInfo=a.data;case 6:case"end":return e.stop()}}),e)})))()}},mounted:function(){this.getInfo()},components:{NamePop:g["a"]}},x=_,k=(a("5f7d"),Object(p["a"])(x,C,w,!1,null,"700ff5fe",null)),S=k.exports,O=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"result-wrap"},[s("VanPopup",{staticClass:"result-popup",attrs:{"close-on-click-overlay":!1},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[s("div",{staticClass:"result-popup__body"},[s("div",{staticClass:"header"},[s("svg",{staticClass:"close-icon",on:{click:t.closePop}},[s("use",{attrs:{href:"#close"}})])]),s("div",{staticClass:"btns-box"},[s("div",{staticClass:"item",on:{click:function(e){return t.$gbUtils.handleToPage("/releaseNews")}}},[s("img",{attrs:{src:a("99e4"),alt:""}}),s("div",{staticClass:"btn"},[t._v(t._s(t.$t("admin.realeaseNews")))])]),s("div",{staticClass:"item",on:{click:function(e){return t.$gbUtils.handleToPage("/releaseArticle")}}},[s("img",{attrs:{src:a("dad7"),alt:""}}),s("div",{staticClass:"btn"},[t._v(t._s(t.$t("admin.releaseArticle")))])])])])])],1)},$=[],j={name:"",data:function(){return{show:!0}},methods:{closePop:function(){this.$emit("close")}},mounted:function(){}},y=j,P=(a("28ad"),Object(p["a"])(y,O,$,!1,null,"0a387c85",null)),A=P.exports,L={name:"",data:function(){return{loading:!1,finished:!1,pageSize:10,pageNumber:1,total:0,tabActive:0,releaseShow:!1,newsList:[],menuShow:!1,listFilter:{status:"",statusLabel:this.$t("common.all")},statusOptions:[{text:this.$t("common.all"),value:""},{text:this.$t("admin.Unreviewed"),value:"0"},{text:this.$t("admin.Reviewed"),value:"1"},{text:this.$t("admin.Rejected"),value:"2"}]}},computed:Object(r["a"])({},Object(l["c"])(["myInfo"])),methods:{handleTab:function(t){this.tabActive!=t&&(this.tabActive=t,this.finished=!1,this.pageNumber=1,this.newsList=[],this.getList())},onLoad:function(){this.pageNumber+=1,this.getList()},handleMenuShow:function(){this.menuShow=!this.menuShow},handleRealese:function(){this.releaseShow=!this.releaseShow},getList:function(){var t=this;return Object(c["a"])(Object(i["a"])().mark((function e(){var a;return Object(i["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,Object(u["b"])({type:t.tabActive,orderByColumn:"id",isAsc:"desc",pageSize:t.pageSize,pageNum:t.pageNumber,status:t.listFilter["status"]});case 3:if(a=e.sent,t.loading=!1,a.success){e.next=7;break}return e.abrupt("return");case 7:t.pageSize*t.pageNumber>=a.total&&(t.finished=!0),t.newsList=[].concat(Object(o["a"])(t.newsList),Object(o["a"])(a.rows));case 9:case"end":return e.stop()}}),e)})))()},statusDropdownChange:function(t){if(this.handleMenuShow(),t.value!=this.listFilter.status){var e=this.statusOptions.find((function(e){return e.value==t.value}));this.listFilter.statusLabel=e.text,this.listFilter.status=e.value,this.finished=!1,this.pageNumber=1,this.newsList=[],this.getList()}},deleteSuccess:function(){this.finished=!1,this.pageNumber=1,this.newsList=[],this.getList()}},mounted:function(){this.getList()},components:{NewsletterItem:b,MediaAdminHeader:S,ReleasePop:A}},I=L,N=(a("613e"),Object(p["a"])(I,s,n,!1,null,"13d8be38",null));e["default"]=N.exports},cca2:function(t,e,a){var s=a("4e59"),n=a("4eb8"),i=a("87ea"),o=!i((function(t){Array.from(t)}));s({target:"Array",stat:!0,forced:o},{from:n})},cf05:function(t,e,a){t.exports=a.p+"img/logo.094ab691.png"},dad7:function(t,e,a){t.exports=a.p+"img/article.a2294830.png"},e224:function(t,e,a){},ef19:function(t,e,a){},f884:function(t,e,a){},f969:function(t,e,a){"use strict";a("4d27")}}]);