(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-08773642"],{"3c80":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"release-wrap"},[a("CommonHeader",{attrs:{title:t.$t("admin.realeaseNews")}}),a("div",{staticClass:"page-wrap"},[a("div",{staticClass:"notice"},[t._v(t._s(t.$t("common.alertNewsContent"))+" ("+t._s(t.$t("admin.need"))+")")]),a("div",{staticClass:"title-wrap"},[a("VanField",{staticClass:"title-field",attrs:{translate:"no",rows:"6",type:"textarea",maxlength:"500",placeholder:t.$t("common.limit500"),"show-word-limit":""},model:{value:t.dataForm.content,callback:function(e){t.$set(t.dataForm,"content",e)},expression:"dataForm.content"}})],1),a("div",{staticClass:"notice"},[t._v(t._s(t.$t("common.alertNewsImage"))+"（"+t._s(t.$t("admin.noNeed"))+"）")]),a("div",{staticClass:"set-image"},[a("van-uploader",{attrs:{"after-read":t.afterRead,accept:"image/png,image/jpg","max-size":10485760},on:{oversize:t.onOversize,delete:t.deleteFile},model:{value:t.fileList,callback:function(e){t.fileList=e},expression:"fileList"}},[a("div",{staticClass:"upload-banner"},[a("svg",{staticClass:"upload-icon"},[a("use",{attrs:{href:"#picture"}})]),a("div",{staticClass:"upload-title"},[t._v(t._s(t.$t("common.selectImage")))]),a("div",{staticClass:"upload-content"},[a("div",[t._v("Recommended size: JPG, PNG")]),a("div",[t._v("(345x150px, Max 10mb)")])])])])],1),a("div",{staticClass:"switch-wrap"},[a("div",{staticClass:"filed"},[a("div",[t._v(t._s(t.$t("admin.important")))]),a("van-switch",{staticClass:"form-switch",attrs:{size:"30","inactive-color":"#888888","active-value":1,"inactive-value":0},on:{change:t.handleIsImportant},model:{value:t.dataForm.isImportant,callback:function(e){t.$set(t.dataForm,"isImportant",e)},expression:"dataForm.isImportant"}})],1),a("div",{staticClass:"note"},[t._v(t._s(t.$t("common.newsimportantTip")))])]),a("div",{staticClass:"submit-button",on:{click:t.handleAddNews}},[t._v(t._s(t.$t("admin.release")))])])],1)},i=[],r=a("a43d"),s=a("d941"),c=a("c3ae"),o=(a("0e27"),a("f645")),u=a("8e8c"),d=a("a261"),l={name:"",data:function(){return{newsId:null,title:"",fileList:[],dataForm:{content:"",type:0,preview:"",isImportant:0}}},methods:{onOversize:function(t){console.log(t),this.$toast(this.$t("common.10m"))},deleteFile:function(){this.fileList=[],this.dataForm.preview=""},handleIsImportant:function(){console.log(this.dataForm.isImportant)},afterRead:function(t){var e=this;return Object(c["a"])(Object(s["a"])().mark((function a(){var n,i;return Object(s["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e.fileList=[],n=new FormData,n.append("file",t.file),a.next=5,Object(d["a"])(n);case 5:if(i=a.sent,i.success){a.next=9;break}return e.fileList=[],a.abrupt("return");case 9:e.fileList.push(t),e.dataForm.preview=o["a"].imgUrl+i.data.url;case 11:case"end":return a.stop()}}),a)})))()},handleAddNews:function(){var t=this;return Object(c["a"])(Object(s["a"])().mark((function e(){var a;return Object(s["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.dataForm.content){e.next=2;break}return e.abrupt("return",t.$toast(t.$t("common.fill")));case 2:if(!t.newsId){e.next=8;break}return e.next=5,Object(u["d"])(t.dataForm);case 5:a=e.sent,e.next=11;break;case 8:return e.next=10,Object(u["a"])(t.dataForm);case 10:a=e.sent;case 11:if(a.success){e.next=13;break}return e.abrupt("return");case 13:t.$gbUtils.handleToPage("/mediaAdmin");case 14:case"end":return e.stop()}}),e)})))()},getDetail:function(t){var e=this;return Object(c["a"])(Object(s["a"])().mark((function a(){var n;return Object(s["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,Object(u["f"])(t);case 2:if(n=a.sent,console.log(n),n.success){a.next=6;break}return a.abrupt("return");case 6:e.dataForm=Object(r["a"])({},n.data),e.dataForm.preview&&e.fileList.push({url:e.dataForm.preview});case 8:case"end":return a.stop()}}),a)})))()}},computed:{},mounted:function(){console.warn(this.$route.params),Object.keys(this.$route.params).length>0&&(this.newsId=this.$route.params.id,this.getDetail(this.newsId))}},m=l,p=(a("bbed"),a("cba8")),f=Object(p["a"])(m,n,i,!1,null,"5289891e",null);e["default"]=f.exports},"8e8c":function(t,e,a){"use strict";a.d(e,"e",(function(){return i})),a.d(e,"b",(function(){return r})),a.d(e,"g",(function(){return s})),a.d(e,"a",(function(){return c})),a.d(e,"f",(function(){return o})),a.d(e,"d",(function(){return u})),a.d(e,"c",(function(){return d}));var n=a("b775"),i=function(t){return Object(n["a"])("GET","/dapp/information/getInformationAdminIndex",t,!0,!0,1)},r=function(t){return Object(n["a"])("GET","/dapp/information/adminList",t)},s=function(t){return Object(n["a"])("GET","/dapp/information/list",t,!0,!0)},c=function(t){return Object(n["a"])("POST","/dapp/information",t)},o=function(t){return Object(n["a"])("GET","/dapp/information/".concat(t),t,!0,!0)},u=function(t){return Object(n["a"])("PUT","/dapp/information",t)},d=function(t){return Object(n["a"])("DELETE","/dapp/information/".concat(t))}},a261:function(t,e,a){"use strict";a.d(e,"a",(function(){return i}));var n=a("b775"),i=function(t){return Object(n["a"])("POST","/dapp/oss/upload",t,!0,!0)}},aca0:function(t,e,a){},bbed:function(t,e,a){"use strict";a("aca0")}}]);