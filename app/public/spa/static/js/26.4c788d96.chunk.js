(this.webpackJsonpexam=this.webpackJsonpexam||[]).push([[26],{830:function(e,t,a){"use strict";var r=a(11),n=a(12),i=a(16),u=a(20),c=a(0),o=a.n(c);t.a=function(e){return function(t){Object(i.a)(c,t);var a=Object(u.a)(c);function c(){return Object(r.a)(this,c),a.apply(this,arguments)}return Object(n.a)(c,[{key:"render",value:function(){return o.a.createElement("div",{style:{width:"100%",height:"100%",padding:"20px",background:"#f0f2f5",overflowY:"auto"}},o.a.createElement("h2",{style:{padding:"10px 0"}},e.title),o.a.createElement("div",{style:{width:"100%",height:"100%",background:"#fff",borderRadius:"10px"}},o.a.createElement(e.Module,this.props)))}}]),c}(c.Component)}},939:function(e,t,a){"use strict";a.r(t);var r=a(11),n=a(12),i=a(16),u=a(20),c=a(937),o=a(0),s=a.n(o),l=a(19),m=a.n(l),p=a(42),d=a(46);function f(){return d.a.get("/user/identity")}function h(e){return d.a.get("/user/identity/edit",{params:{identity_text:e}})}function y(e){return d.a.get("/user/authorityApi/edit",{params:{api_authority_method:e.api_authority_method,api_authority_text:e.api_authority_text,api_authority_url:e.api_authority_url}})}function v(e){var t=e.arr[0].view_authority_text;return d.a.get("/user/authorityView/edit",{params:{view_authority_text:t,view_id:e.view_id}})}function b(e){return d.a.post("/user/setIdentityApi",e)}function k(){return d.a.get("/user/identity")}function E(e){return d.a.post("/user/setIdentityView",e)}var w=a(822),_=a(823),x=a(106),O=a(825),j=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).formRef=void 0,n.state={idData:[],updateData:[]},n.onFinish=function(e){n.userEdit(e.identity_text)},n.onReset=function(){n.formRef.current.resetFields()},n.formRef=s.a.createRef(),n}return Object(n.a)(a,[{key:"render",value:function(){var e=this.props,t=e.layout,a=e.tailLayout;return s.a.createElement(s.a.Fragment,null,s.a.createElement(w.a,Object.assign({},t,{ref:this.formRef,name:"control-ref",onFinish:this.onFinish}),s.a.createElement(w.a.Item,{name:"identity_text"},s.a.createElement(_.a,{placeholder:"\u8bf7\u8f93\u5165\u8eab\u4efd\u540d\u79f0"})),s.a.createElement(w.a.Item,a,s.a.createElement(x.a,{type:"primary",htmlType:"submit"},"\u63d0\u4ea4"),s.a.createElement(x.a,{htmlType:"button",onClick:this.onReset},"\u91cd\u7f6e"))))}},{key:"userEdit",value:function(){var e=Object(p.a)(m.a.mark((function e(t){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,void 0===t&&O.b.error("\u7528\u6237\u540d\u4e0d\u80fd\u4e3a\u7a7a"),e.next=4,h(t);case 4:a=e.sent,e.t0=a.data.code,e.next=0===e.t0?8:1===e.t0?10:12;break;case 8:return O.b.error(a.data.msg),e.abrupt("break",12);case 10:return O.b.success(a.data.msg),e.abrupt("break",12);case 12:e.next=16;break;case 14:e.prev=14,e.t1=e.catch(0);case 16:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t){return e.apply(this,arguments)}}()}]),a}(o.Component),g=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).formRef=void 0,n.state={idData:[],updateData:[]},n.onFinish=function(e){n.userApiEdit(e)},n.onReset=function(){n.formRef.current.resetFields()},n.formRef=s.a.createRef(),n}return Object(n.a)(a,[{key:"render",value:function(){var e=this.props,t=e.layout,a=e.tailLayout;return s.a.createElement(s.a.Fragment,null,s.a.createElement(w.a,Object.assign({},t,{ref:this.formRef,name:"control-ref",onFinish:this.onFinish}),s.a.createElement(w.a.Item,{name:"api_authority_text"},s.a.createElement(_.a,{placeholder:"\u8bf7\u8f93\u5165api\u63a5\u53e3\u6743\u9650\u540d\u79f0"})),s.a.createElement(w.a.Item,{name:"api_authority_url"},s.a.createElement(_.a,{placeholder:"\u8bf7\u8f93\u5165api\u63a5\u53e3\u6743\u9650url"})),s.a.createElement(w.a.Item,{name:"api_authority_method"},s.a.createElement(_.a,{placeholder:"\u8bf7\u8f93\u5165api\u63a5\u53e3\u6743\u9650\u65b9\u6cd5"})),s.a.createElement(w.a.Item,a,s.a.createElement(x.a,{type:"primary",htmlType:"submit"},"\u63d0\u4ea4"),s.a.createElement(x.a,{htmlType:"button",onClick:this.onReset},"\u91cd\u7f6e"))))}},{key:"userApiEdit",value:function(){var e=Object(p.a)(m.a.mark((function e(t){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,void 0!==t.api_authority_url||void 0!==t.api_authority_text||void 0!==t.api_authority_method){e.next=3;break}return e.abrupt("return",O.b.error("\u5185\u5bb9\u4e0d\u80fd\u4e3a\u7a7a"));case 3:return e.next=5,y(t);case 5:a=e.sent,e.t0=a.data.code,e.next=0===e.t0?9:1===e.t0?11:13;break;case 9:return O.b.error(a.data.msg),e.abrupt("break",13);case 11:return O.b.success(a.data.msg),e.abrupt("break",13);case 13:e.next=17;break;case 15:e.prev=15,e.t1=e.catch(0);case 17:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(t){return e.apply(this,arguments)}}()}]),a}(o.Component),R=a(852),F=R.a.Option,D=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).formRef=void 0,n.state={viewData:[],userInfo:""},n.onFinish=function(e){n.userAddView(e),n.props.reload()},n.onReset=function(){n.formRef.current.resetFields()},n.callback=void 0,n.formRef=s.a.createRef(),n}return Object(n.a)(a,[{key:"render",value:function(){var e=this.props,t=e.layout,a=e.tailLayout;return s.a.createElement(s.a.Fragment,null,s.a.createElement(w.a,Object.assign({},t,{ref:this.formRef,name:"control-ref",onFinish:this.onFinish}),s.a.createElement(w.a.Item,{name:"view_id"},s.a.createElement(R.a,{placeholder:"\u6dfb\u52a0\u89c6\u56fe\u63a5\u53e3\u6743\u9650",allowClear:!0},this.state.viewData.map((function(e,t){return s.a.createElement(F,{value:e.view_id,key:t},e.view_authority_text)})))),s.a.createElement(w.a.Item,a,s.a.createElement(x.a,{type:"primary",htmlType:"submit"},"\u63d0\u4ea4"),s.a.createElement(x.a,{htmlType:"button",onClick:this.onReset},"\u91cd\u7f6e"))))}},{key:"componentDidMount",value:function(){this.userView()}},{key:"userView",value:function(){var e=Object(p.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("/user/view_authority");case 2:t=e.sent,this.setState({viewData:t.data.data});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"userAddView",value:function(){var e=Object(p.a)(m.a.mark((function e(t){var a,r,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,void 0!==t.view_id){e.next=3;break}return e.abrupt("return",O.b.error("\u5185\u5bb9\u4e0d\u80fd\u4e3a\u7a7a"));case 3:return a=this.state.viewData.filter((function(e){return e.view_id===t.view_id})),r={arr:a,view_id:t.view_id},e.next=7,v(r);case 7:n=e.sent,e.t0=n.data.code,e.next=0===e.t0?11:1===e.t0?13:15;break;case 11:return O.b.error(n.data.msg),e.abrupt("break",15);case 13:return O.b.success(n.data.msg),e.abrupt("break",15);case 15:e.next=19;break;case 17:e.prev=17,e.t1=e.catch(0);case 19:case"end":return e.stop()}}),e,this,[[0,17]])})));return function(t){return e.apply(this,arguments)}}()}]),a}(o.Component),I=R.a.Option,C=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).formRef=void 0,n.state={viewData:[],AuthData:[],userInfo:""},n.onFinish=function(e){n.userSetApi(e)},n.onReset=function(){n.formRef.current.resetFields()},n.callback=void 0,n.formRef=s.a.createRef(),n}return Object(n.a)(a,[{key:"render",value:function(){var e=this.props,t=e.layout,a=e.tailLayout;return s.a.createElement(s.a.Fragment,null,s.a.createElement(w.a,Object.assign({},t,{ref:this.formRef,name:"control-ref",onFinish:this.onFinish}),s.a.createElement(w.a.Item,{name:"identity_id"},s.a.createElement(R.a,{placeholder:"\u8bf7\u9009\u62e9\u8eab\u4efdid",allowClear:!0},this.state.viewData.map((function(e,t){return s.a.createElement(I,{value:e.identity_id,key:t},e.identity_text)})))),s.a.createElement(w.a.Item,{name:"api_authority_id"},s.a.createElement(R.a,{placeholder:"\u8bf7\u9009\u62e9api\u63a5\u53e3\u6743\u9650",allowClear:!0},this.state.AuthData.map((function(e,t){return s.a.createElement(I,{value:e.api_authority_id,key:t},e.api_authority_text)})))),s.a.createElement(w.a.Item,a,s.a.createElement(x.a,{type:"primary",htmlType:"submit"},"\u63d0\u4ea4"),s.a.createElement(x.a,{htmlType:"button",onClick:this.onReset},"\u91cd\u7f6e"))))}},{key:"componentDidMount",value:function(){this.userIdentity(),this.userAuthority()}},{key:"userIdentity",value:function(){var e=Object(p.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k();case 2:t=e.sent,this.setState({viewData:t.data.data});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"userAuthority",value:function(){var e=Object(p.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("/user/api_authority");case 2:t=e.sent,this.setState({AuthData:t.data.data});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"userSetApi",value:function(){var e=Object(p.a)(m.a.mark((function e(t){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0!==t.api_authority_id||void 0!==t.identity_id){e.next=2;break}return e.abrupt("return",O.b.error("\u5185\u5bb9\u4e0d\u80fd\u4e3a\u7a7a"));case 2:return e.next=4,b(t);case 4:a=e.sent,e.t0=a.data.code,e.next=0===e.t0?8:1===e.t0?10:12;break;case 8:return O.b.error(a.data.msg),e.abrupt("break",12);case 10:return O.b.success(a.data.msg),e.abrupt("break",12);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),a}(o.Component),A=R.a.Option,L=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).formRef=void 0,n.state={viewData:[],AuthData:[],userInfo:""},n.onFinish=function(e){n.userSetApiView(e)},n.onReset=function(){n.formRef.current.resetFields()},n.callback=void 0,n.formRef=s.a.createRef(),n}return Object(n.a)(a,[{key:"render",value:function(){var e=this.props,t=e.layout,a=e.tailLayout;return s.a.createElement(s.a.Fragment,null,s.a.createElement(w.a,Object.assign({},t,{ref:this.formRef,name:"control-ref",onFinish:this.onFinish}),s.a.createElement(w.a.Item,{name:"identity_id"},s.a.createElement(R.a,{placeholder:"\u8bf7\u9009\u62e9\u8eab\u4efdid",allowClear:!0},this.state.viewData.map((function(e,t){return s.a.createElement(A,{value:e.identity_id,key:t},e.identity_text)})))),s.a.createElement(w.a.Item,{name:"view_authority_id"},s.a.createElement(R.a,{placeholder:"\u8bf7\u9009\u62e9api\u63a5\u53e3\u6743\u9650",allowClear:!0},this.state.AuthData.map((function(e,t){return s.a.createElement(A,{value:e.view_authority_id,key:t},e.view_authority_text)})))),s.a.createElement(w.a.Item,a,s.a.createElement(x.a,{type:"primary",htmlType:"submit"},"\u63d0\u4ea4"),s.a.createElement(x.a,{htmlType:"button",onClick:this.onReset},"\u91cd\u7f6e"))))}},{key:"componentDidMount",value:function(){this.userIdentity(),this.userAuthority()}},{key:"userIdentity",value:function(){var e=Object(p.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k();case 2:t=e.sent,this.setState({viewData:t.data.data});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"userAuthority",value:function(){var e=Object(p.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("/user/view_authority");case 2:t=e.sent,console.log(t),this.setState({AuthData:t.data.data});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"userSetApiView",value:function(){var e=Object(p.a)(m.a.mark((function e(t){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0!==t.identity_id||void 0!==t.view_authority_id){e.next=2;break}return e.abrupt("return",O.b.error("\u5185\u5bb9\u4e0d\u80fd\u4e3a\u7a7a"));case 2:return e.next=4,E(t);case 4:a=e.sent,e.t0=a.data.code,e.next=0===e.t0?8:1===e.t0?10:12;break;case 8:return O.b.error(a.data.msg),e.abrupt("break",12);case 10:return O.b.success(a.data.msg),e.abrupt("break",12);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),a}(o.Component),T={layout:{labelCol:{span:20},wrapperCol:{span:18}},tailLayout:{wrapperCol:{offset:0,span:20}}};console.log(T.layout);var S=[{tab:"\u8eab\u4efd",type:"card",com:s.a.createElement(j,{layout:T.layout,tailLayout:T.tailLayout})},{tab:"\u6dfb\u52a0api\u6743\u9650",type:"card",com:s.a.createElement(g,{layout:T.layout,tailLayout:T.tailLayout})},{tab:"\u6dfb\u52a0\u89c6\u56fe\u63a5\u53e3\u6743\u9650",type:"card",com:s.a.createElement(D,{layout:T.layout,tailLayout:T.tailLayout})},{tab:"\u7ed9\u8eab\u4efd\u8bbe\u7f6eapi\u63a5\u53e3\u6743\u9650",type:"card",com:s.a.createElement(C,{layout:T.layout,tailLayout:T.tailLayout})},{tab:"\u7ed9\u8eab\u4efd\u8bbe\u7f6e\u89c6\u56fe\u6743\u9650",type:"card",com:s.a.createElement(L,{layout:T.layout,tailLayout:T.tailLayout})}],V=a(830),M=R.a.Option,U=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).formRef=void 0,n.state={idData:[],updateData:[]},n.onFinish=function(e){n.userAdd(e),n.props.reload()},n.onReset=function(){n.formRef.current.resetFields()},n.callback=void 0,n.formRef=s.a.createRef(),n}return Object(n.a)(a,[{key:"render",value:function(){var e=this.props,t=e.layout,a=e.tailLayout;return s.a.createElement(s.a.Fragment,null,s.a.createElement(w.a,Object.assign({},t,{ref:this.formRef,name:"control-ref",onFinish:this.onFinish}),s.a.createElement(w.a.Item,{name:"user_name"},s.a.createElement(_.a,{placeholder:"\u8bf7\u8f93\u5165\u7528\u6237\u540d"})),s.a.createElement(w.a.Item,{name:"user_pwd"},s.a.createElement(_.a,{placeholder:"\u8bf7\u8f93\u5165\u5bc6\u7801"})),s.a.createElement(w.a.Item,{name:"identity_id"},s.a.createElement(R.a,{placeholder:"\u8bf7\u9009\u62e9\u8eab\u4efdid",allowClear:!0},this.state.idData.map((function(e,t){return s.a.createElement(M,{value:e.identity_id,key:t},e.identity_text)})))),s.a.createElement(w.a.Item,{noStyle:!0,shouldUpdate:function(e,t){return e.gender!==t.gender}},(function(e){return"other"===(0,e.getFieldValue)("gender")?s.a.createElement(w.a.Item,{name:"customizeGender",label:"Customize Gender",rules:[{required:!0}]},s.a.createElement(_.a,null)):null})),s.a.createElement(w.a.Item,a,s.a.createElement(x.a,{type:"primary",htmlType:"submit"},"\u63d0\u4ea4"),s.a.createElement(x.a,{htmlType:"button",onClick:this.onReset},"\u91cd\u7f6e"))))}},{key:"componentDidMount",value:function(){this.identity()}},{key:"userAdd",value:function(){var e=Object(p.a)(m.a.mark((function e(t){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r=t,d.a.post("/user",r);case 2:if(a=e.sent,void 0!==t.user_name||void 0!==t.user_pwd||void 0!==t.identity_id){e.next=5;break}return e.abrupt("return",O.b.error("\u5185\u5bb9\u4e0d\u80fd\u4e3a\u7a7a"));case 5:e.t0=a.data.code,e.next=0===e.t0?8:1===e.t0?10:12;break;case 8:return O.b.error(a.data.msg),e.abrupt("break",12);case 10:return O.b.success(a.data.msg),e.abrupt("break",12);case 12:case"end":return e.stop()}var r}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"identity",value:function(){var e=Object(p.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f();case 2:t=e.sent,this.setState({idData:t.data.data});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),a}(o.Component),N=R.a.Option,q=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).formRef=void 0,n.state={layout:{labelCol:{span:20},wrapperCol:{span:18}},tailLayout:{wrapperCol:{offset:0,span:20}},idData:[],updateData:[]},n.onFinish=function(e){n.updateUsers(e)},n.onReset=function(){n.formRef.current.resetFields()},n.callback=void 0,n.formRef=s.a.createRef(),n}return Object(n.a)(a,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(w.a,Object.assign({},this.state.layout,{ref:this.formRef,name:"control-ref",onFinish:this.onFinish}),s.a.createElement(w.a.Item,{name:"user_id",rules:[{required:!0}]},s.a.createElement(R.a,{placeholder:"\u8bf7\u9009\u62e9\u8eab\u4efdid",allowClear:!0},this.state.updateData.map((function(e,t){return s.a.createElement(N,{value:e.user_id,key:t},e.user_name)})))),s.a.createElement(w.a.Item,{name:"user_name"},s.a.createElement(_.a,{placeholder:"\u8bf7\u8f93\u5165\u7528\u6237\u540d"})),s.a.createElement(w.a.Item,{name:"user_pwd"},s.a.createElement(_.a,{placeholder:"\u8bf7\u8f93\u5165\u5bc6\u7801"})),s.a.createElement(w.a.Item,{name:"identity_id"},s.a.createElement(R.a,{placeholder:"\u8bf7\u9009\u62e9\u8eab\u4efdid",allowClear:!0},this.state.idData.map((function(e,t){return s.a.createElement(N,{value:e.identity_id,key:t},e.identity_text)})))),s.a.createElement(w.a.Item,this.state.tailLayout,s.a.createElement(x.a,{type:"primary",htmlType:"submit"},"\u63d0\u4ea4"),s.a.createElement(x.a,{htmlType:"button",onClick:this.onReset},"\u91cd\u7f6e"))))}},{key:"componentDidMount",value:function(){this.identity(),this.updateUser()}},{key:"identity",value:function(){var e=Object(p.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f();case 2:t=e.sent,this.setState({idData:t.data.data});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"updateUser",value:function(){var e=Object(p.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("/user/user");case 2:t=e.sent,this.setState({updateData:t.data.data});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"updateUsers",value:function(){var e=Object(p.a)(m.a.mark((function e(t){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r=t,d.a.put("/user/user",r);case 2:(a=e.sent).data.code&&O.b.success(a.data.msg);case 4:case"end":return e.stop()}var r}),e)})));return function(t){return e.apply(this,arguments)}}()}]),a}(o.Component),z=c.a.TabPane,G=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,i=new Array(n),u=0;u<n;u++)i[u]=arguments[u];return(e=t.call.apply(t,[this].concat(i))).callback=void 0,e}return Object(n.a)(a,[{key:"reload",value:function(){this.forceUpdate()}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"addUser_main"},s.a.createElement("div",{className:"userAdd"},s.a.createElement("div",{className:"addTabs"},s.a.createElement(c.a,{onChange:this.callback,type:"card"},s.a.createElement(z,{tab:"\u6dfb\u52a0\u7528\u6237",key:"1"},s.a.createElement(U,{reload:function(){return e.reload()}})),s.a.createElement(z,{tab:"\u66f4\u65b0\u7528\u6237",key:"2"},s.a.createElement(q,null)))),S.map((function(t,a){return s.a.createElement("div",{className:"addTabs",key:a},s.a.createElement(c.a,{onChange:e.callback,type:"card"},s.a.createElement(z,{tab:t.tab,key:"1"},t.com)))}))))}}]),a}(o.Component);t.default=Object(V.a)({title:"\u6dfb\u52a0\u7528\u6237",Module:G})}}]);
//# sourceMappingURL=26.4c788d96.chunk.js.map