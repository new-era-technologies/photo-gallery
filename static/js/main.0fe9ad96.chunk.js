(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{24:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},70:function(e,t,a){},81:function(e,t,a){},85:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(1),i=a(37),s=a.n(i),r=a(3),o=a(39),l=a.n(o),j=a(40),u=a(4),m=a(5),b=a(7),_=a(6),d=a(12),h=function(e){Object(b.a)(a,e);var t=Object(_.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return Object(n.jsx)("div",{className:"Menu",children:Object(n.jsxs)("ul",{className:"Menu__list",children:[Object(n.jsx)("li",{className:"Menu__list__item",children:Object(n.jsx)(d.b,{exact:!0,to:"/",className:"Menu__list__item__link",activeClassName:"active",children:"home"})}),Object(n.jsx)("li",{className:"Menu__list__item",children:Object(n.jsx)(d.b,{to:"/list",className:"Menu__list__item__link",activeClassName:"active",children:"gallery list"})}),Object(n.jsx)("li",{className:"Menu__list__item",children:Object(n.jsx)(d.b,{to:"/favorite",className:"Menu__list__item__link",activeClassName:"active",children:"favorite list"})})]})})}}]),a}(c.Component),O=(a(51),function(e){Object(b.a)(a,e);var t=Object(_.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return Object(n.jsx)("div",{className:"Header",children:Object(n.jsxs)("div",{className:"Header__container",children:[Object(n.jsx)("h1",{className:"Header__container__title",children:"Photo Gallery"}),Object(n.jsx)(h,{})]})})}}]),a}(c.Component)),p=function(e){Object(b.a)(a,e);var t=Object(_.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return Object(n.jsx)("div",{className:"Home",children:Object(n.jsx)(O,{})})}}]),a}(c.Component),v=(a(52),function(e){Object(b.a)(a,e);var t=Object(_.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props.item,t=e.id,a=e.author,c=e.download_url;return Object(n.jsx)("div",{className:"Item",children:Object(n.jsx)(d.a,{to:"/item/".concat(t),className:"Item__link",children:Object(n.jsxs)("figure",{className:"Item__fig",children:[Object(n.jsx)("img",{src:c,alt:"img_".concat(t),className:"Item__fig__img"}),Object(n.jsxs)("figcaption",{className:"Item__fig__cap",children:["by ",a]})]})},t)})}}]),a}(c.Component)),f=a(22),x=a.n(f),g=function(e,t){return x.a.get("https://picsum.photos/v2/list?page="+e+"&limit="+t)},N=(a(24),a(70),function(e){Object(b.a)(a,e);var t=Object(_.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={list:[],currentPage:1,dataPerPage:30},e.getPics=function(t){g(e.state.currentPage,t).then((function(a){e.setState({list:a.data,dataPerPage:t})}))},e.decremPage=function(){e.state.currentPage>1&&(e.setState({currentPage:e.state.currentPage-1}),g(e.state.currentPage,e.state.dataPerPage).then((function(t){e.setState({list:t.data})})))},e.encremPage=function(){e.setState({currentPage:e.state.currentPage+1}),g(e.state.currentPage,e.state.dataPerPage).then((function(t){e.setState({list:t.data})}))},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;g(this.state.currentPage,this.state.dataPerPage).then((function(t){e.setState({list:t.data})}))}},{key:"render",value:function(){var e=this,t=this.state.list;return t.length?Object(n.jsx)("div",{className:"MainList",children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("h2",{className:"MainList__title",children:"list of images"}),Object(n.jsxs)("div",{className:"Limit__container",children:["per page",Object(n.jsx)("button",{className:"Limit__container__but",onClick:function(){return e.getPics(30)},children:"30"}),Object(n.jsx)("button",{className:"Limit__container__but",onClick:function(){return e.getPics(50)},children:"50"}),Object(n.jsx)("button",{className:"Limit__container__but",onClick:function(){return e.getPics(100)},children:"100"})]}),Object(n.jsxs)("div",{className:"Pag__container",children:["go to page",Object(n.jsx)("button",{className:"Pag__container__but",onClick:this.decremPage,children:"prev"}),Object(n.jsx)("button",{className:"Pag__container__but",onClick:this.encremPage,children:"next"})]}),Object(n.jsx)("div",{className:"MainList__container",children:t.map((function(e,t){return Object(n.jsx)(v,{item:e},t)}))})]})}):Object(n.jsxs)("div",{className:"Spinner",children:[Object(n.jsx)("div",{className:"Spinner__blob-1"}),Object(n.jsx)("div",{className:"Spinner__blob-2"})]})}}]),a}(c.Component)),P=function(e){Object(b.a)(a,e);var t=Object(_.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"ListPage",children:[Object(n.jsx)(O,{}),Object(n.jsx)(N,{})]})}}]),a}(c.Component),y=a(18),k=a.n(y),M=function(e){Object(b.a)(a,e);var t=Object(_.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).storePic=function(){k.a.set("pic"+e.props.item.id,{id:e.props.item.id,name_by:e.props.item.author,size:e.props.item.width+"x"+e.props.item.height})},e.removeFromStorePic=function(){k.a.remove("pic"+e.props.item.id)},e}return Object(m.a)(a,[{key:"render",value:function(){this.props.item;return Object(n.jsxs)("div",{className:"MainFavorite",children:[Object(n.jsx)("button",{className:"MainFavorite__but",onClick:this.storePic,children:"add to favorite"}),Object(n.jsx)("button",{className:"MainFavorite__but",onClick:this.removeFromStorePic,children:"remove from favorite"})]})}}]),a}(c.Component),C=(a(81),function(e){Object(b.a)(a,e);var t=Object(_.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={listItem:{}},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=window.location.href.split("/")[4];x.a.get("https://picsum.photos/id/"+t+"/info").then((function(t){e.setState({listItem:t.data})}))}},{key:"render",value:function(){var e=this.state.listItem;return e.author?Object(n.jsx)("div",{className:"MainItem",children:Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("div",{className:"MainItem__container",children:[Object(n.jsx)("img",{src:e.download_url,alt:"img_".concat(e.id),className:"MainItem__container__img"}),Object(n.jsxs)("div",{className:"MainItem__container__data",children:[Object(n.jsxs)("p",{className:"MainItem__container__data__author",children:[Object(n.jsx)("b",{children:"author: "}),e.author]}),Object(n.jsx)("p",{className:"MainItem__container__data__size",children:Object(n.jsxs)("i",{children:[e.width," x ",e.height]})}),Object(n.jsxs)("p",{className:"MainItem__container__data__link",children:[Object(n.jsx)("b",{children:"link: "}),Object(n.jsx)("a",{href:e.url,className:"MainItem__container__data__link__item",target:"_blank",rel:"noopener noreferrer",children:e.url})]}),Object(n.jsx)(M,{item:e})]})]})})}):Object(n.jsxs)("div",{className:"Spinner",children:[Object(n.jsx)("div",{className:"Spinner__blob-1"}),Object(n.jsx)("div",{className:"Spinner__blob-2"})]})}}]),a}(c.Component)),I=function(e){Object(b.a)(a,e);var t=Object(_.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"MainItem",children:[Object(n.jsx)(O,{}),Object(n.jsx)(C,{})]})}}]),a}(c.Component),S=a(41),w=function(e){Object(b.a)(a,e);var t=Object(_.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props.item;return Object(n.jsx)("div",{className:"Favorite",children:Object(n.jsx)(d.a,{to:"/item/".concat(e.id),className:"Favorite__link",children:Object(n.jsxs)("div",{className:"Favorite__link__item",children:[e.name_by," #",e.id," (",e.size,")"]})},e.id)})}}]),a}(c.Component),F=[{path:"/",exact:!0,component:p},{path:"/list",exact:!0,component:P},{path:"/item/:id",exact:!1,component:I},{path:"/favorite",exact:!0,component:function(e){Object(b.a)(a,e);var t=Object(_.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={listPics:[]},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;k.a.each((function(t,a){e.setState((function(e){return{listPics:[].concat(Object(S.a)(e.listPics),[t])}}))}))}},{key:"render",value:function(){var e=this.state.listPics;return Object(n.jsxs)("div",{className:"FavoritePage",children:[Object(n.jsx)(O,{}),Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("h2",{className:"FavoritePage__title",children:"favorite pics"}),Object(n.jsx)("div",{className:"FavoritePage__container",children:e.map((function(e,t){return Object(n.jsx)(w,{item:e},t)}))})]})]})}}]),a}(c.Component)}],L=Object(j.a)();s.a.render(Object(n.jsx)(l.a,{basename:"/photo-gallery",children:Object(n.jsx)(r.Router,{history:L,children:Object(n.jsx)(r.Switch,{children:F.map((function(e,t){var a=e.path,c=e.exact,i=e.component;return Object(n.jsx)(r.Route,{path:a,exact:c,component:i},t)}))})})}),document.getElementById("root"))}},[[85,1,2]]]);
//# sourceMappingURL=main.0fe9ad96.chunk.js.map