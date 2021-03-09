(this["webpackJsonpcar-searcher"]=this["webpackJsonpcar-searcher"]||[]).push([[0],{52:function(e,t,a){},53:function(e,t,a){},98:function(e,t,a){"use strict";a.r(t);var s=a(0),c=a(19),n=a.n(c),r=(a(52),a(53),a(10)),i=a(11),o=a(13),l=a(12),j=a(21),d=a(8),b=a(15),u=a(14),h=a(101),m=a(100),O=a(43),x=a(41),p=a.n(x),v=a(46),g=a(42).create({baseURL:"https://mighty-savannah-43410.herokuapp.com/api/",headers:{"Content-Type":"application/json"}}),f=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t="",a=0,s=Object.entries(e);a<s.length;a++){var c=Object(v.a)(s[a],2),n=c[0],r=c[1];t+="".concat(t?"&":"?").concat(n,"=").concat(r||"")}return g.get("/cars".concat(t)).then((function(e){return e.data}))},N="SET-CARS",C={cars:[]};var y=function(e){return{type:N,cars:e}},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return Object(d.a)(Object(d.a)({},e),{},{cars:t.cars});default:return e}},S=(a(91),a(47)),F=a(1);function w(e){return Object(F.jsxs)("div",{className:"w-100 d-flex justify-content-center ".concat(e.className),children:[Object(F.jsx)("div",{className:"spinner-border"}),Object(F.jsx)("span",{className:"h5 text-muted m-0 ml-2",children:"Loading..."})]})}function L(e){return Object(F.jsx)("div",{className:"h-100 d-flex align-items-center justify-content-center",children:Object(F.jsx)("div",{className:"spinner-border spinner-border-sm my-1 text-".concat(e.variant)})})}function _(e){var t=e.text,a=e.variant,s=e.className,c=Object(S.a)(e,["text","variant","className"]);return Object(F.jsx)("button",Object(d.a)(Object(d.a)({className:"btn btn-".concat(a," ").concat(s)},c),{},{children:c.disabled?Object(F.jsx)(L,{}):t}))}var T={data:{producer:"",model:"",transmission:"",issue_year__gt:1950},loading:null},V=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(e){var s;return Object(r.a)(this,a),(s=t.call(this,e)).handleSubmit=function(e){e.preventDefault(),s.setState({loading:!0}),f(s.state.data).then((function(e){s.props.setCars(e),s.setState({loading:!1})}))},s.handleChange=function(e){s.setState({data:Object(d.a)(Object(d.a)({},s.state.data),{},Object(j.a)({},e.target.name,e.target.value))})},s.state=T,s.handleSubmit.bind(Object(b.a)(s)),s.handleChange.bind(Object(b.a)(s)),s}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return Object(F.jsx)("div",{className:"col-12 border rounded p-3 mb-2",children:Object(F.jsxs)(h.a,{onSubmit:this.handleSubmit,children:[Object(F.jsxs)(h.a.Group,{as:m.a,children:[Object(F.jsx)(h.a.Label,{column:!0,sm:3,children:"Producer"}),Object(F.jsx)(O.a,{sm:9,children:Object(F.jsx)(h.a.Control,{type:"text",name:"producer",onChange:this.handleChange})})]}),Object(F.jsxs)(h.a.Group,{as:m.a,children:[Object(F.jsx)(h.a.Label,{column:!0,sm:3,children:"Model"}),Object(F.jsx)(O.a,{sm:9,children:Object(F.jsx)(h.a.Control,{type:"text",name:"model",onChange:this.handleChange})})]}),Object(F.jsxs)(h.a.Group,{as:m.a,children:[Object(F.jsx)(h.a.Label,{column:!0,sm:3,children:"Transmission"}),Object(F.jsx)(O.a,{sm:9,children:Object(F.jsxs)(h.a.Control,{as:"select",name:"transmission",onChange:this.handleChange,children:[Object(F.jsx)("option",{value:"",children:"..."}),Object(F.jsx)("option",{value:1,children:"Mechanic"}),Object(F.jsx)("option",{value:2,children:"Automatic"}),Object(F.jsx)("option",{value:3,children:"Robot"})]})})]}),Object(F.jsxs)(h.a.Group,{as:m.a,className:"mt-4",children:[Object(F.jsx)(h.a.Label,{column:!0,sm:3,children:"Issue year after"}),Object(F.jsx)(O.a,{sm:9,className:"px-4 pt-3 pt-sm-2",children:Object(F.jsx)(p.a,{maxValue:2020,minValue:1950,value:this.state.data.issue_year__gt,onChange:function(t){return e.setState({data:Object(d.a)(Object(d.a)({},e.state.data),{},{issue_year__gt:t})})}})})]}),Object(F.jsx)("div",{className:"d-flex",children:Object(F.jsx)(_,{variant:"success",text:"Search",disabled:this.state.loading,className:"ml-auto"})})]})})}}]),a}(s.Component),D={setCars:y},I=Object(u.b)(null,D)(V),G=a(44),P=a.n(G),B=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(e){var s;return Object(r.a)(this,a),(s=t.call(this,e)).handleLoad=function(){s.setState({loaded:!0})},s.state={loaded:!1},s}return Object(i.a)(a,[{key:"render",value:function(){return Object(F.jsxs)("div",{className:this.props.className,style:Object(d.a)({backgroundSize:"cover",backgroundPosition:"center",backgroundColor:"#2b2b2b",backgroundImage:"url(".concat(this.props.src,")")},this.props.style),children:[Object(F.jsx)(P.a,{src:this.props.src,onLoadBg:this.handleLoad}),!this.state.loaded&&Object(F.jsx)(L,{variant:"white"})]})}}]),a}(s.Component),M=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(e){var s;return Object(r.a)(this,a),(s=t.call(this,e)).state={loading:null},s}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.setState({loading:!0}),f().then((function(t){e.props.setCars(t),e.setState({loading:!1})}))}},{key:"render",value:function(){return Object(F.jsxs)("div",{className:"row border rounded p-3",children:[Object(F.jsx)("h4",{className:"col-12 mb-3",children:"Cars:"}),Object(F.jsx)("div",{className:"col-12",children:this.state.loading?Object(F.jsx)(w,{className:"my-3"}):this.props.cars.map((function(e,t){return Object(F.jsx)("div",{className:"card w-100 mb-2",children:Object(F.jsxs)("div",{className:"row no-gutters",children:[Object(F.jsx)(B,{src:e.photo,className:"col-12 col-sm-4",style:{minHeight:"8em"}}),Object(F.jsx)("div",{className:"col-12 col-sm-8",children:Object(F.jsxs)("div",{className:"card-body",children:[Object(F.jsx)("h5",{className:"card-title",children:"".concat(e.producer," ").concat(e.model)}),Object(F.jsxs)("p",{className:"card-text m-0",children:[Object(F.jsx)("span",{className:"text-monospace",children:"Issue Year:"})," ",e.issue_year]}),Object(F.jsxs)("p",{className:"card-text m-0",children:[Object(F.jsx)("span",{className:"text-monospace",children:"Transmission:"})," ",e.transmission]}),Object(F.jsxs)("div",{className:"d-flex align-items-center",children:[Object(F.jsx)("span",{className:"text-monospace",children:"Color:"}),Object(F.jsx)("div",{className:"rounded-circle border ml-1",style:{width:"1.1em",height:"1.1em",backgroundColor:e.color}})]})]})})]})},t)}))})]})}}]),a}(s.Component),R={setCars:y},A=Object(u.b)((function(e){return e.carsData}),R)(M);function E(e){return Object(F.jsx)("button",{onClick:e.onClick,className:"col-12 btn btn-white border mb-2",children:e.text})}var H=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(e){var s;return Object(r.a)(this,a),(s=t.call(this,e)).toggleForm=function(){s.setState({isFilterFormVisiable:!s.state.isFilterFormVisiable})},s.state={isFilterFormVisiable:!1},s}return Object(i.a)(a,[{key:"render",value:function(){return Object(F.jsxs)("div",{className:"container px-4 px-md-0 py-4",children:[Object(F.jsx)("div",{className:"row",children:this.state.isFilterFormVisiable?Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(E,{onClick:this.toggleForm,text:"Hide filter form"}),Object(F.jsx)(I,{})]}):Object(F.jsx)(E,{onClick:this.toggleForm,text:"Open filter form"})}),Object(F.jsx)(A,{})]})}}]),a}(s.Component);var J=function(e){return Object(F.jsx)(H,{})},z=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,102)).then((function(t){var a=t.getCLS,s=t.getFID,c=t.getFCP,n=t.getLCP,r=t.getTTFB;a(e),s(e),c(e),n(e),r(e)}))},U=a(45),Y=(a(94),a(95),a(17)),q=Object(Y.b)({carsData:k}),K=Object(Y.c)(q);n.a.render(Object(F.jsx)(u.a,{store:K,children:Object(F.jsx)(U.a,{basename:"/",children:Object(F.jsx)(J,{})})}),document.getElementById("root")),z()}},[[98,1,2]]]);
//# sourceMappingURL=main.67915b0b.chunk.js.map