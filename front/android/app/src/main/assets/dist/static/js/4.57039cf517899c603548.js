webpackJsonp([4],{"Bf/F":function(t,e){},awjo:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=[{type:"type 1",startTime:"2020-09-10 12:21:22",endTime:"2020-09-10 12:21:22",status:0},{type:"type 2",startTime:"2020-09-10 12:21:22",endTime:"2020-09-10 12:21:22",status:1},{type:"type 4",startTime:"2020-09-10 12:21:22",endTime:"2020-09-10 12:21:22",status:2},{type:"type 6",startTime:"2020-09-10 12:21:22",endTime:"2020-09-10 12:21:22",status:1}],i={data:function(){return{leaveData:s,leaveStatus:["准备休假","休假中","已完成"],leaveStatusClasses:["leave-prepare","leave-ing","leave-finished"]}},methods:{}},n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:".page"},[a("div",{attrs:{id:"navigation-container"}},[a("div",{attrs:{id:"navigation-wrapper"}},[a("div",{staticClass:"icon-container"},[a("a-icon",{attrs:{type:"left"},on:{click:function(e){return t.$router.go(-1)}}})],1),t._v(" "),a("div",{staticClass:"page-title"},[t._v("\n        请假\n      ")])])]),t._v(" "),a("div",{attrs:{id:"content-container"}},[a("div",{attrs:{id:"content-wrapper"}},t._l(t.leaveData,function(e,s){return a("div",{key:s,staticClass:"leave-item"},[a("div",{staticClass:"leave-wrapper"},[a("div",{staticClass:"leave-item-header"},[a("a-icon",{attrs:{type:"edit",theme:"filled"}}),t._v(" "),a("span",{staticClass:"leave-item-title"},[t._v(t._s(e.type)+" 申请")])],1),t._v(" "),a("div",{staticClass:"leave-item-body"},[a("div",{staticClass:"leave-date-container"},[a("span",{staticStyle:{"font-weight":"bold"}},[t._v("请假时间")]),t._v(" "),a("span",{staticClass:"leave-date"},[t._v(t._s(e.startTime)+"~"+t._s(e.endTime))]),t._v(" "),a("span",[t._v("(共 3 天)")])]),t._v(" "),a("div",{staticClass:"leave-status-container"},[a("span",{class:t.leaveStatusClasses[e.status]},[a("a-icon",{attrs:{type:"info-circle"}}),t._v(t._s(t.leaveStatus[e.status]))],1)])])])])}),0)])])},staticRenderFns:[]};var v=a("VU/8")(i,n,!1,function(t){a("Bf/F")},"data-v-79d19320",null);e.default=v.exports}});