(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(t,e,o){t.exports=o(20)},16:function(t,e,o){},18:function(t,e,o){},20:function(t,e,o){"use strict";o.r(e);var n=o(0),a=o.n(n),i=o(8),s=o.n(i),d=(o(16),o(9)),c=o(2),r=o(3),u=o(6),h=o(4),l=o(5),b=o(1),_=(o(18),{color:"#998900",fontStyle:"italic"}),m=function(t){function e(t){return Object(c.a)(this,e),Object(u.a)(this,Object(h.a)(e).call(this,t))}return Object(l.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){return a.a.createElement("h4",{style:_}," It is currently about ",this.props.date.getHours()%12," o'clock!")}}]),e}(n.Component),p=function(t){function e(t){var o;return Object(c.a)(this,e),(o=Object(u.a)(this,Object(h.a)(e).call(this,t))).state={status:!1},o.remove_todo_by_id=o.remove_todo_by_id.bind(Object(b.a)(Object(b.a)(o))),o.edit_todo_by_id=o.edit_todo_by_id.bind(Object(b.a)(Object(b.a)(o))),o.checkChange=o.checkChange.bind(Object(b.a)(Object(b.a)(o))),o}return Object(l.a)(e,t),Object(r.a)(e,[{key:"componentDidMount",value:function(){this.setState({status:this.props.onetodo.status})}},{key:"remove_todo_by_id",value:function(){this.props.removeTodoById(this.props.onetodo.id)}},{key:"edit_todo_by_id",value:function(){this.props.edit_todo_by_id(this.props.onetodo.id)}},{key:"checkChange",value:function(t){console.log(t.target.checked),this.setState({status:t.target.checked}),this.props.changeStatus(this.props.onetodo.id)}},{key:"render",value:function(){return a.a.createElement("div",{className:"todo__item"},a.a.createElement("label",{className:this.state.status?"class_checked":"class_unchecked"},a.a.createElement("input",{type:"checkbox",name:this.props.onekey,onChange:this.checkChange,checked:this.props.onetodo.status}),a.a.createElement("span",null,this.props.onetodo.text)),a.a.createElement("button",{onClick:this.edit_todo_by_id},"Edit"),a.a.createElement("button",{onClick:this.remove_todo_by_id},"Remove"))}}]),e}(n.Component),v=function(t){function e(t){var o;return Object(c.a)(this,e),(o=Object(u.a)(this,Object(h.a)(e).call(this,t))).removeTodo=o.removeTodo.bind(Object(b.a)(Object(b.a)(o))),o.edit_todo_by_id=o.edit_todo_by_id.bind(Object(b.a)(Object(b.a)(o))),o.changeStatus=o.changeStatus.bind(Object(b.a)(Object(b.a)(o))),o}return Object(l.a)(e,t),Object(r.a)(e,[{key:"removeTodo",value:function(t){console.log("id to remove:",t),this.props.removeTodoById(t)}},{key:"edit_todo_by_id",value:function(t){console.log("id to edit:",t),this.props.edit_todo_by_id(t)}},{key:"changeStatus",value:function(t){console.log("id to change:",t),this.props.changeStatus(t)}},{key:"getList",value:function(){var t=this,e=null;if(this.props.todos.length){var o=this;e=this.props.todos.map(function(e,n){return a.a.createElement(p,{onetodo:e,key:n,onekey:n,changeStatus:o.changeStatus,edit_todo_by_id:t.edit_todo_by_id,removeTodoById:o.removeTodo})})}return e}},{key:"render",value:function(){return a.a.createElement("div",{className:"list"},this.getList())}}]),e}(n.Component),y=function(t){function e(t){var o;return Object(c.a)(this,e),(o=Object(u.a)(this,Object(h.a)(e).call(this,t))).removeTodo=o.removeTodo.bind(Object(b.a)(Object(b.a)(o))),o.edit_todo_by_id=o.edit_todo_by_id.bind(Object(b.a)(Object(b.a)(o))),o.changeStatus=o.changeStatus.bind(Object(b.a)(Object(b.a)(o))),o}return Object(l.a)(e,t),Object(r.a)(e,[{key:"removeTodo",value:function(t){console.log("id to remove:",t),this.props.removeTodoById(t)}},{key:"edit_todo_by_id",value:function(t){console.log("id to edit:",t),this.props.edit_todo_by_id(t)}},{key:"changeStatus",value:function(t){console.log("id to change:",t),this.props.changeStatus(t)}},{key:"render",value:function(){return a.a.createElement("div",{className:"activelist"},a.a.createElement(v,{todos:this.props.todos,changeStatus:this.changeStatus,edit_todo_by_id:this.edit_todo_by_id,removeTodoById:this.removeTodo}))}}]),e}(n.Component),f=function(t){function e(t){var o;return Object(c.a)(this,e),(o=Object(u.a)(this,Object(h.a)(e).call(this,t))).state={text:o.props.pre_text?o.props.pre_text:"",pre_text_set:""!==o.props.pre_text},o.handleChange=o.handleChange.bind(Object(b.a)(Object(b.a)(o))),o.handleSubmit=o.handleSubmit.bind(Object(b.a)(Object(b.a)(o))),o}return Object(l.a)(e,t),Object(r.a)(e,[{key:"componentWillReceiveProps",value:function(t){t.pre_text&&this.setState({text:t.pre_text})}},{key:"handleChange",value:function(t){this.setState({text:t.target.value})}},{key:"handleSubmit",value:function(t){t.preventDefault();var e=this.refs.todo_text.value;this.props.add_todo({text:e}),this.setState({text:""})}},{key:"render",value:function(){return a.a.createElement("div",{className:"editor"},a.a.createElement("form",{onSubmit:this.handleSubmit},a.a.createElement("input",{type:"text",name:"text",ref:"todo_text",value:this.state.text,onChange:this.handleChange}),a.a.createElement("input",{type:"submit",onClick:this.handleSubmit})))}}]),e}(n.Component),j=function(t){function e(t){return Object(c.a)(this,e),Object(u.a)(this,Object(h.a)(e).call(this,t))}return Object(l.a)(e,t),Object(r.a)(e,[{key:"getTotalTodosCount",value:function(){return this.props.todos.length}},{key:"getDoneTodosCount",value:function(){return this.props.todos.filter(function(t){return!0===t.status}).length}},{key:"render",value:function(){return a.a.createElement("div",{className:"stats"},a.a.createElement("p",null,"Total: ",this.getTotalTodosCount()),a.a.createElement("p",null,"Done: ",this.getDoneTodosCount()))}}]),e}(n.Component),O=function(t){function e(t){var o;return Object(c.a)(this,e),(o=Object(u.a)(this,Object(h.a)(e).call(this,t))).state={date:new Date,todos:[],editing_todo_id:null,text_to_edit:""},o.saveTodoItem=o.saveTodoItem.bind(Object(b.a)(Object(b.a)(o))),o.removeTodo=o.removeTodo.bind(Object(b.a)(Object(b.a)(o))),o.changeStatus=o.changeStatus.bind(Object(b.a)(Object(b.a)(o))),o.edit_todo_by_id=o.edit_todo_by_id.bind(Object(b.a)(Object(b.a)(o))),o}return Object(l.a)(e,t),Object(r.a)(e,[{key:"saveTodoItem",value:function(t){var e=this,o=this.state.todos.length?this.state.todos:[];if(this.state.editing_todo_id){var n=o.findIndex(function(t){return t.id===e.state.editing_todo_id});o[n].text=t.text,this.setState({editing_todo_id:null,text_to_edit:"",todos:o})}else t.id=this.getNewId(),t.status=!1,this.setState({todos:[t].concat(Object(d.a)(o))})}},{key:"removeTodo",value:function(t){var e=this.state.todos;e=this.state.todos.filter(function(e){return e.id!=t}),this.setState({todos:e})}},{key:"edit_todo_by_id",value:function(t){this.setState({editing_todo_id:t});var e=this.state.todos.length?this.state.todos.filter(function(e){if(e.id===t)return e})[0]:null;this.setState({text_to_edit:e?e.text:""})}},{key:"changeStatus",value:function(t){var e=this.state.todos;e=this.state.todos.filter(function(e){return e.id===t&&(e.status=!e.status),e}),this.setState({todos:e})}},{key:"getNewId",value:function(){return"_"+Math.random().toString(36).substr(2,9)}},{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement(m,{date:this.state.date}),a.a.createElement(f,{add_todo:this.saveTodoItem,pre_text:this.state.text_to_edit}),a.a.createElement(y,{todos:this.state.todos,date:this.state.date,changeStatus:this.changeStatus,edit_todo_by_id:this.edit_todo_by_id,removeTodoById:this.removeTodo}),a.a.createElement(j,{todos:this.state.todos}))}}]),e}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(a.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[10,2,1]]]);
//# sourceMappingURL=main.61a22376.chunk.js.map