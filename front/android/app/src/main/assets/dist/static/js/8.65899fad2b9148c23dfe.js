webpackJsonp([8],{B9Wf:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("Gu7T"),i=a.n(s),n={data:function(){return{form:{selectType:"",startTime:"",endTime:"",selectSender:"",cause:""},fileList:[{uid:"-1",name:"xxx.png",status:"done",url:"http://www.baidu.com/xxx.png"}]}},methods:{handleChange:function(e){console.log("selected "+e)},handleStart:function(e,t){console.log("Selected Time: ",e),console.log("Formatted Selected Time: ",t)},handleEnd:function(e){console.log("selected "+e)},onChange:function(e){console.log(e)},handleappendix:function(e){var t=[].concat(i()(e.fileList));t=(t=t.slice(-2)).map(function(e){return e.response&&(e.url=e.response.url),e}),this.fileList=t}}},o={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{attrs:{id:"navigation-container"}},[a("div",{attrs:{id:"navigation-wrapper"}},[a("div",{staticClass:"icon-container"},[a("a-icon",{attrs:{type:"left"},on:{click:function(t){return e.$router.go(-1)}}})],1),e._v(" "),a("div",{staticClass:"page-title"},[e._v("我要请假")])])]),e._v(" "),a("div",{attrs:{id:"type"}},[e._m(0),e._v(" "),a("a-select",{staticStyle:{width:"120px"},attrs:{id:"type-select"},on:{change:e.handleChange},model:{value:e.form.selectType,callback:function(t){e.$set(e.form,"selectType",t)},expression:"form.selectType"}},[a("a-icon",{attrs:{slot:"suffixIcon",type:"right"},slot:"suffixIcon"}),e._v(" "),a("a-select-option",{attrs:{value:"type1"}},[e._v(" 事假 ")]),e._v(" "),a("a-select-option",{attrs:{value:"type2"}},[e._v(" 病假 ")]),e._v(" "),a("a-select-option",{attrs:{value:"type3"}},[e._v(" 其它 ")])],1)],1),e._v(" "),a("div",{attrs:{id:"start-time"}},[e._m(1),e._v(" "),a("a-date-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["date-time-picker",e.config],expression:"['date-time-picker', config]"}],attrs:{id:"startTime","show-time":"",format:"YYYY-MM-DD HH:mm:ss"},on:{change:e.handleStart},model:{value:e.form.startTime,callback:function(t){e.$set(e.form,"startTime",t)},expression:"form.startTime"}})],1),e._v(" "),a("div",{attrs:{id:"end-time"}},[e._m(2),e._v(" "),a("a-date-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["date-time-picker",e.config],expression:"['date-time-picker', config]"}],attrs:{id:"endTime","show-time":"",format:"YYYY-MM-DD HH:mm:ss"},on:{change:e.handleEnd},model:{value:e.form.endTime,callback:function(t){e.$set(e.form,"endTime",t)},expression:"form.endTime"}})],1),e._v(" "),a("div",{attrs:{id:"cause"}},[e._m(3),e._v(" "),a("a-textarea",{staticClass:"causetext",attrs:{placeholder:"请输入请假理由","allow-clear":"","auto-size":{minRows:3,maxRows:5}},on:{change:e.onChange},model:{value:e.form.cause,callback:function(t){e.$set(e.form,"cause",t)},expression:"form.cause"}})],1),e._v(" "),a("div",{attrs:{id:"appendix"}},[a("a",{attrs:{id:"text"}},[e._v("添加附件")]),e._v(" "),a("a-upload",{attrs:{action:"https://www.mocky.io/v2/5cc8019d300000980a055e76",multiple:!0,"file-list":e.fileList},on:{change:e.handleappendix}},[a("a-button",[a("a-icon",{attrs:{type:"upload"}}),e._v(" Upload ")],1)],1)],1),e._v(" "),a("div",{attrs:{id:"sendto"}},[a("a",{attrs:{id:"text"}},[e._v("抄送人")]),e._v(" "),a("a-select",{staticStyle:{width:"120px"},attrs:{id:"sender-select"},on:{change:e.handleChange},model:{value:e.form.selectSender,callback:function(t){e.$set(e.form,"selectSender",t)},expression:"form.selectSender"}},[a("a-icon",{attrs:{slot:"suffixIcon",type:"right"},slot:"suffixIcon"}),e._v(" "),a("a-select-option",{attrs:{value:"sender1"}},[e._v(" 管理员1 ")]),e._v(" "),a("a-select-option",{attrs:{value:"sender2"}},[e._v(" 管理员2 ")]),e._v(" "),a("a-select-option",{attrs:{value:"sender3"}},[e._v(" 管理员3 ")])],1)],1),e._v(" "),a("a-button",{attrs:{id:"submit",type:"primary",block:""}},[e._v(" 提交 ")])],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("a",{attrs:{id:"text"}},[t("span",{staticStyle:{color:"red"}},[this._v("*")]),this._v("请假类型")])},function(){var e=this.$createElement,t=this._self._c||e;return t("a",{attrs:{id:"text"}},[t("span",{staticStyle:{color:"red"}},[this._v("*")]),this._v("开始时间")])},function(){var e=this.$createElement,t=this._self._c||e;return t("a",{attrs:{id:"text"}},[t("span",{staticStyle:{color:"red"}},[this._v("*")]),this._v("结束时间")])},function(){var e=this.$createElement,t=this._self._c||e;return t("a",{attrs:{id:"text"}},[t("span",{staticStyle:{color:"red"}},[this._v("*")]),this._v("请假理由")])}]};var r=a("VU/8")(n,o,!1,function(e){a("CsNy")},"data-v-14cd5016",null);t.default=r.exports},CsNy:function(e,t){}});