(this.webpackJsonpToDoApp=this.webpackJsonpToDoApp||[]).push([[0],{15:function(e,t,a){e.exports=a(28)},20:function(e,t,a){},21:function(e,t,a){},22:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(4),r=a.n(s),l=(a(20),a(12)),c=a(7),u=a(8),m=a(2),o=a(14),d=a(13),p=(a(21),a(22),a(9)),h=a(10);var f=function(e){var t=e.items.map((function(t){return i.a.createElement("div",{className:"list",key:t.key},i.a.createElement("p",null,i.a.createElement("input",{type:"text",id:t.key,value:t.text,onChange:function(a){e.setUpdate(a.target.value,t.key)}}),i.a.createElement("span",null,i.a.createElement(p.a,{className:"faicons",onClick:function(){e.deleteItem(t.key)},icon:"trash"}))))}));return i.a.createElement("div",null,i.a.createElement(h.a,{duration:300,easing:"ease-in-out"},t))},v=a(5),y=a(11);v.b.add(y.a);var I=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={items:[],currentItem:{text:"",key:""}},n.addItem=n.addItem.bind(Object(m.a)(n)),n.handleInput=n.handleInput.bind(Object(m.a)(n)),n.deleteItem=n.deleteItem.bind(Object(m.a)(n)),n.setUpdate=n.setUpdate.bind(Object(m.a)(n)),n}return Object(u.a)(a,[{key:"addItem",value:function(e){e.preventDefault();var t=this.state.currentItem;if(""!==t.text){var a=[].concat(Object(l.a)(this.state.items),[t]);this.setState({items:a,currentItem:{text:"",key:""}})}}},{key:"handleInput",value:function(e){this.setState({currentItem:{text:e.target.value,key:Date.now()}})}},{key:"deleteItem",value:function(e){var t=this.state.items.filter((function(t){return t.key!==e}));this.setState({items:t})}},{key:"setUpdate",value:function(e,t){console.log("items:"+this.state.items);var a=this.state.items;a.map((function(a){a.key===t&&(console.log(a.key+"    "+t),a.text=e)})),this.setState({items:a})}},{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement("h1",null,"Stw\xf3rz swoj\u0105 list\u0119 zada\u0144!"),i.a.createElement("header",null,i.a.createElement("form",{id:"to-do-form",onSubmit:this.addItem},i.a.createElement("input",{type:"text",placeholder:"Dodaj zadanie",value:this.state.currentItem.text,onChange:this.handleInput}),i.a.createElement("button",{type:"submit"},"Dodaj")),i.a.createElement("p",null,this.state.items.text),i.a.createElement(f,{items:this.state.items,deleteItem:this.deleteItem,setUpdate:this.setUpdate})))}}]),a}(i.a.Component);r.a.render(i.a.createElement(I,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.1e7b15c6.chunk.js.map