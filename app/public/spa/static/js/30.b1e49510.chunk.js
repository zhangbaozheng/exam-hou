(this.webpackJsonpexam=this.webpackJsonpexam||[]).push([[30],{830:function(e,t,a){"use strict";var n=a(11),i=a(12),l=a(16),c=a(20),r=a(0),s=a.n(r);t.a=function(e){return function(t){Object(l.a)(r,t);var a=Object(c.a)(r);function r(){return Object(n.a)(this,r),a.apply(this,arguments)}return Object(i.a)(r,[{key:"render",value:function(){return s.a.createElement("div",{style:{width:"100%",height:"100%",padding:"20px",background:"#f0f2f5",overflowY:"auto"}},s.a.createElement("h2",{style:{padding:"10px 0"}},e.title),s.a.createElement("div",{style:{width:"100%",height:"100%",background:"#fff",borderRadius:"10px"}},s.a.createElement(e.Module,this.props)))}}]),r}(r.Component)}},947:function(e,t,a){"use strict";a.r(t);var n,i=a(11),l=a(12),c=a(16),r=a(20),s=a(0),u=a.n(s),o=a(852),m=a(106),p=a(838),d=a(942),h=function(e){Object(c.a)(a,e);var t=Object(r.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return u.a.createElement("div",null,u.a.createElement(d.a,{status:"404",subTitle:"\u6682\u65e0\u6570\u636e"}))}}]),a}(s.Component),f=a(240),x=a(830),E=a(854),b=o.a.Option,v=Object(f.b)("examine","home")(n=Object(f.c)(n=function(e){Object(c.a)(a,e);var t=Object(r.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(e=t.call.apply(t,[this].concat(l))).state={flag:!1,curIndex:-1,exam_id:void 0,subject_id:void 0,questions_type_id:void 0},e.changeAll=function(){e.setState({flag:!e.state.flag,curIndex:-1})},e.changeCruindex=function(t,a){e.setState({curIndex:t,subject_id:a})},e.goDetail=function(t){e.props.home.setTitle("\u8be6\u60c5\u9875\u9762"),e.props.history.push("/index/examDetail/".concat(t))},e.search=function(){var t=e.state,a=t.exam_id,n=t.subject_id,i=t.questions_type_id;e.props.examine.getText(a,n,i)},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.props.examine.getExaminList(),this.props.examine.getSubject(),this.props.examine.getType(),this.props.examine.getQuestion(),this.props.examine.getAllUser()}},{key:"handleChange",value:function(e,t){switch(e){case"examid":this.setState({exam_id:t});break;case"question":this.setState({questions_type_id:t})}}},{key:"render",value:function(){var e=this,t=this.props.examine,a=t.examineList,n=t.subjectList,i=t.subjectType,l=t.questionsType,c=(t.getText,this.state),r=c.flag,s=c.curIndex;return u.a.createElement("div",{className:"hu-examine"},u.a.createElement("div",{className:"examine-title"},u.a.createElement("div",{className:"title-top"},u.a.createElement("div",{className:"left"},"\u8bfe\u7a0b\u7c7b\u578b\uff1a"),u.a.createElement("div",{className:"right"},u.a.createElement("span",{onClick:function(){return e.changeAll()},className:this.state.flag?"actives":""},"All"),n.map((function(t,a){return u.a.createElement("span",{key:a,className:r||s===a?"actives":"",onClick:function(){return e.changeCruindex(a,t.subject_id)}},t.subject_text)})))),u.a.createElement("div",{className:"title-bottom"},u.a.createElement("div",null,u.a.createElement("span",null,"\u8003\u8bd5\u7c7b\u578b\uff1a"),u.a.createElement(o.a,{style:{width:200},onChange:this.handleChange.bind(this,"examid")},i.map((function(e,t){return u.a.createElement(b,{value:e.exam_id,key:t},e.exam_name)})))),u.a.createElement("div",null,u.a.createElement("span",null,"\u9898\u76ee\u7c7b\u578b\uff1a"),u.a.createElement(o.a,{style:{width:200},onChange:this.handleChange.bind(this,"question")},l.map((function(e,t){return u.a.createElement(b,{value:e.questions_type_id,key:t},e.questions_type_text)})))),u.a.createElement("div",null,u.a.createElement(m.a,{type:"primary",icon:u.a.createElement(E.a,null),onClick:function(){return e.search()}},"\u67e5\u8be2")))),u.a.createElement("div",{className:"examine-main"},0===a.length?u.a.createElement(h,null):u.a.createElement("ul",null,a.map((function(t,a){return u.a.createElement("li",{key:a},u.a.createElement("div",{className:"left",onClick:function(){return e.goDetail(t.questions_id)}},u.a.createElement("h2",null,t.title),u.a.createElement("p",null,u.a.createElement(p.a,{color:"blue"},t.questions_type_text),u.a.createElement(p.a,{color:"blue"},t.subject_text),u.a.createElement(p.a,{color:"orange"},t.exam_name)),u.a.createElement("p",{className:"hu-author"},u.a.createElement("span",null,t.user_name,"\u53d1\u5e03"))),u.a.createElement("div",{className:"right"},u.a.createElement("a",{href:"#"},"\u7f16\u8f91")))})))))}}]),a}(s.Component))||n)||n;t.default=Object(x.a)({title:"\u67e5\u770b\u8bd5\u9898",Module:v})}}]);
//# sourceMappingURL=30.b1e49510.chunk.js.map