(this.webpackJsonpexam=this.webpackJsonpexam||[]).push([[20],{830:function(e,t,a){"use strict";var n=a(11),s=a(12),i=a(16),r=a(20),c=a(0),u=a.n(c);t.a=function(e){return function(t){Object(i.a)(c,t);var a=Object(r.a)(c);function c(){return Object(n.a)(this,c),a.apply(this,arguments)}return Object(s.a)(c,[{key:"render",value:function(){return u.a.createElement("div",{style:{width:"100%",height:"100%",padding:"20px",background:"#f0f2f5",overflowY:"auto"}},u.a.createElement("h2",{style:{padding:"10px 0"}},e.title),u.a.createElement("div",{style:{width:"100%",height:"100%",background:"#fff",borderRadius:"10px"}},u.a.createElement(e.Module,this.props)))}}]),c}(c.Component)}},832:function(e,t,a){"use strict";a.d(t,"f",(function(){return s})),a.d(t,"e",(function(){return i})),a.d(t,"d",(function(){return r})),a.d(t,"c",(function(){return c})),a.d(t,"j",(function(){return u})),a.d(t,"k",(function(){return o})),a.d(t,"m",(function(){return l})),a.d(t,"l",(function(){return m})),a.d(t,"b",(function(){return d})),a.d(t,"a",(function(){return f})),a.d(t,"g",(function(){return p})),a.d(t,"i",(function(){return h})),a.d(t,"h",(function(){return b}));var n=a(46);function s(e){return n.a.get("/exam/student",{params:e})}function i(e){var t="/exam/exam/".concat(e);return n.a.get(t)}function r(e){var t="/exam/student/".concat(e);return n.a.get(t)}function c(e){var t=e.exam_student_id,a=e.score,s="/exam/student/".concat(t);return n.a.put(s,{score:a})}function u(e){return n.a.get("/exam/exam",{params:{id:e}})}function o(){return n.a.get("/exam/exam")}function l(){return n.a.get("/exam/examType")}function m(){return n.a.get("/exam/subject")}function d(e){return n.a.post("/exam/exam",e)}function f(e){var t=e.exam_exam_id;return n.a.get("/exam/exam",t)}function p(){return n.a.get("/exam/questions/new")}function h(){return n.a.get("/exam/getQuestionsType")}function b(e,t,a){var s="/exam/questions/condition?subject_id=".concat(e,"&exam_id=").concat(t,"&questions_type_id=").concat(a);return n.a.get(s)}},924:function(e,t,a){"use strict";a.r(t);var n=a(17),s=a(19),i=a.n(s),r=a(42),c=a(11),u=a(12),o=a(16),l=a(20),m=a(0),d=a.n(m),f=a(852),p=a(825),h=a(941),b=a(822),v=a(106),y=a(838),x=a(940),g=a(144),E=a(830),_=a(832),k=f.a.Option,j=function(e){console.log("Failed:",e)},w=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,s=new Array(n),u=0;u<n;u++)s[u]=arguments[u];return(e=t.call.apply(t,[this].concat(s))).state={tit:"",time:"",show:!1,sub:[],selectedTags:["Books"],type:[],questype:[],ques:[],subdata:[],quesdata:[],typedata:[],fields:{subject_id:"",exam_id:"",questions_type_id:""},visible:!1,current:-1,subid:"",detailitem:[],itemdata:[]},e.showDrawer=function(){e.setState({show:!0})},e.onClose=function(){e.setState({show:!1})},e.getDate=function(t,a){t&&e.setState({tit:t,time:String(a)},(function(){}))},e.onFinish=function(){var t=Object(r.a)(i.a.mark((function t(a){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=Object.assign(e.state.fields,a,{subject_id:e.state.subid}),t.next=3,Object(_.h)(a.subject_id,a.exam_id,a.questions_type_id);case 3:(n=t.sent).data.code?(p.b.info("\u67e5\u8be2\u6210\u529f"),e.setState({ques:n.data.data})):p.b.info("\u67e5\u8be2\u5931\u8d25");case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.showModal=function(t){e.setState({visible:!0});var a=e.state.ques.filter((function(e){return e.title===t.title}));e.setState({detailitem:a}),console.log(a)},e.handleOk=function(t){console.log(t),e.setState({visible:!1})},e.handleCancel=function(t){console.log(t),e.setState({visible:!1})},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.history.location.state.values,t=e.title,a=e.start_time;this.getDate(t,a),this.getTestSubject(),this.getTestType(),this.getQuesType(),this.getQues()}},{key:"handleChange",value:function(e,t){var a=this.state.selectedTags,s=t?[].concat(Object(n.a)(a),[e]):a.filter((function(t){return t!==e}));console.log("You are interested in: ",s),this.setState({selectedTags:s});var i=[];i.push(e),this.setState({subdata:i})}},{key:"getTestSubject",value:function(){var e=Object(r.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(_.l)();case 2:(t=e.sent).data.code&&this.setState({sub:t.data.data});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getTestType",value:function(){var e=Object(r.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(_.m)();case 2:(t=e.sent).data.code&&this.setState({type:t.data.data});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getQuesType",value:function(){var e=Object(r.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(_.i)();case 2:(t=e.sent).data.code&&this.setState({questype:t.data.data});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getQues",value:function(){var e=Object(r.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(_.g)();case 2:(t=e.sent).data.code&&this.setState({ques:t.data.data});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"change_span",value:function(e,t){this.setState({current:e,subid:t})}},{key:"all",value:function(){this.getQues(),this.setState({current:-1})}},{key:"addTest",value:function(e){var t=this,a=this.state.itemdata.findIndex((function(t){return e===t})),s=[].concat(Object(n.a)(this.state.itemdata),[e]);-1===a?(s.forEach((function(a){e===a&&t.setState({itemdata:s})})),p.b.info("\u6dfb\u52a0\u6210\u529f")):p.b.info("\u4e0d\u80fd\u91cd\u590d\u6dfb\u52a0")}},{key:"Remove",value:function(e){var t=Object(n.a)(this.state.itemdata).splice(e+1,1);this.setState({itemdata:t}),p.b.info("\u5220\u9664\u6210\u529f")}},{key:"render",value:function(){var e=this,t=this.state,a=t.sub,n=t.type,s=t.ques,i=t.questype;return d.a.createElement("div",{className:"s-create"},d.a.createElement(h.a,{title:"\u6240\u6709\u9898\u76ee",placement:"right",closable:!1,onClose:this.onClose,visible:this.state.show,width:800},d.a.createElement(b.a,{initialValues:this.state.fields,name:"basic",onFinish:this.onFinish,onFinishFailed:j},d.a.createElement(b.a.Item,{name:"subject_id"},d.a.createElement("div",{className:"s-sub"},d.a.createElement("span",{style:{marginRight:8}},"\u8bfe\u7a0b\u7c7b\u578b\uff1a"),d.a.createElement("span",{onClick:function(){return e.all()},className:-1==this.state.current?"active":""},"All"),a.map((function(t,a){return d.a.createElement("span",{key:t.subject_id,onClick:function(){return e.change_span(a,t.subject_id)},className:a==e.state.current?"active":""},t.subject_text)})))),d.a.createElement("div",{className:"s-detail-search"},d.a.createElement(b.a.Item,{label:"\u8003\u8bd5\u7c7b\u578b",name:"exam_id",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u8bfe\u7a0b!"}],style:{marginBottom:"70px"}},d.a.createElement(f.a,{style:{width:"120px"}},n.map((function(e){return d.a.createElement(k,{value:e.exam_id,key:e.exam_id},e.exam_name)})))),d.a.createElement(b.a.Item,{label:"\u8003\u8bd5\u7c7b\u578b",name:"questions_type_id",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u8bfe\u7a0b!"}],style:{marginBottom:"70px"}},d.a.createElement(f.a,{style:{width:"120px"}},i.map((function(e){return d.a.createElement(k,{value:e.questions_type_id,key:e.questions_type_id},e.questions_type_text)})))),d.a.createElement(b.a.Item,null,d.a.createElement(v.a,{type:"primary",htmlType:"submit"},"\u67e5\u8be2")))),d.a.createElement("div",{className:"s-list"},s.map((function(t){return d.a.createElement("div",{key:t.questions_id,className:"s-list-item"},t.title,d.a.createElement("div",{className:"s-item-type"},d.a.createElement("span",null,d.a.createElement(y.a,{color:"blue",className:"Tag"},t.subject_text),d.a.createElement(y.a,{color:"purple",className:"Tag"},t.exam_name),d.a.createElement(y.a,{color:"orange",className:"Tag"},t.questions_type_text)),d.a.createElement("span",null,d.a.createElement("p",{onClick:function(){return e.addTest(t)}},"\u6dfb\u52a0"),d.a.createElement("p",{onClick:function(){return e.showModal(t)}},"\u8be6\u60c5"))))})))),d.a.createElement("div",{className:"create-box"},d.a.createElement(v.a,{id:"btn_one",onClick:this.showDrawer}," + \u6dfb\u52a0\u8bd5\u9898"),d.a.createElement("h2",null,this.state.tit),d.a.createElement("p",null,"\u8003\u8bd5\u65f6\u95f4\uff1a1\u5c0f\u65f630\u5206\u949f \u76d1\u8003\u4eba\uff1a\u5218\u4e8e \u5f00\u59cb\u8003\u8bd5\u65f6\u95f4\uff1a",this.state.time," \u9605\u5377\u4eba\uff1a\u5218\u4e8e"),this.state.itemdata.map((function(t,a){return d.a.createElement("div",{key:a,className:"s-create-item"},d.a.createElement("span",{onClick:function(){return e.Remove(a)}},"\u5220\u9664"),d.a.createElement("b",null,"  ",t.title),d.a.createElement("p",{className:"s-answer"}," ",t.questions_stem))})),d.a.createElement(v.a,{type:"primary",id:"btn_two"},d.a.createElement(g.b,{to:"/index/examList"}," + \u521b\u5efa\u8bd5\u5377"))),d.a.createElement(x.a,{title:"\u8be6\u60c5",visible:this.state.visible,onOk:this.handleOk,onCancel:this.handleCancel},this.state.detailitem.map((function(e,t){return d.a.createElement("div",{key:t},d.a.createElement("b",null,e.title),d.a.createElement("div",{className:"s-answer"},e.questions_answer))}))))}}]),a}(m.Component);t.default=Object(E.a)({title:"\u521b\u5efa\u8bd5\u5377",Module:w})}}]);
//# sourceMappingURL=20.efac0003.chunk.js.map