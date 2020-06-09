(this["webpackJsonpburger-builder"]=this["webpackJsonpburger-builder"]||[]).push([[0],[,function(e,t,a){e.exports={BreadBottom:"BurgerIngredient__BreadBottom___HuxZP",BreadTop:"BurgerIngredient__BreadTop___10-cT",Seeds1:"BurgerIngredient__Seeds1___3xHtz",Seeds2:"BurgerIngredient__Seeds2___1cUso",Meat:"BurgerIngredient__Meat___13nAN",Cheese:"BurgerIngredient__Cheese___1FxeY",Salad:"BurgerIngredient__Salad___1iTJE",Bacon:"BurgerIngredient__Bacon___3vrAI"}},function(e,t,a){e.exports={BuildControl:"BuildControl__BuildControl___1jYc3",Label:"BuildControl__Label___33Z-p",Less:"BuildControl__Less___377MJ",More:"BuildControl__More___28-hQ"}},,,,,function(e,t,a){e.exports={Toolbar:"Toolbar__Toolbar___2JJW-",Logo:"Toolbar__Logo___1efBD",DesktopOnly:"Toolbar__DesktopOnly___WADUd"}},,function(e,t,a){e.exports={NavigationItem:"NavigationItem__NavigationItem___23bcu",active:"NavigationItem__active___2zJdO"}},function(e,t,a){e.exports={SideDrawer:"SideDrawer__SideDrawer___21TuB",Open:"SideDrawer__Open___1pVYR",Close:"SideDrawer__Close___3Yv1l",Logo:"SideDrawer__Logo___3TkPv"}},function(e,t,a){e.exports={BuildControls:"BuildControls__BuildControls___3_01f",OrderButton:"BuildControls__OrderButton___myBwT",enable:"BuildControls__enable___3jYIq"}},function(e,t,a){e.exports={Button:"Button__Button___QI7b2",Success:"Button__Success___2dHUt",Danger:"Button__Danger___2xnhN"}},,,function(e,t,a){e.exports={Content:"Layout__Content___LhJtv"}},function(e,t,a){e.exports={Logo:"Logo__Logo___19WaN"}},function(e,t,a){e.exports=a.p+"static/media/logo.b8503d26.png"},function(e,t,a){e.exports={NavigationItems:"NavigationItems__NavigationItems____yd_d"}},function(e,t,a){e.exports={Burger:"Burger__Burger___3K4F-"}},function(e,t,a){e.exports={Modal:"Modal__Modal___32_-a"}},function(e,t,a){e.exports={Backdrop:"Backdrop__Backdrop___efy1y"}},,function(e,t,a){e.exports=a(29)},,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(14),c=a.n(l),i=(a(28),function(e){return e.children}),o=a(15),s=a.n(o),u=a(7),d=a.n(u),_=a(16),m=a.n(_),p=a(17),g=a.n(p),h=function(e){return r.a.createElement("div",{className:m.a.Logo,style:{height:e.height}},r.a.createElement("img",{src:g.a,alt:"MyBurgerLogo"}))},b=a(18),E=a.n(b),v=a(9),f=a.n(v),B=function(e){return r.a.createElement("li",{className:f.a.NavigationItem},r.a.createElement("a",{href:e.link,className:e.active?f.a.active:null},e.children))},C=function(){return r.a.createElement("ul",{className:E.a.NavigationItems},r.a.createElement(B,{link:"/",active:!0},"Burger Builder"),r.a.createElement(B,{link:"/"},"Checkout"))},N=function(){return r.a.createElement("header",{className:d.a.Toolbar},r.a.createElement("div",null,"Menu"),r.a.createElement("div",{className:d.a.Logo},r.a.createElement(h,null)),r.a.createElement("nav",{className:d.a.DesktopOnly},r.a.createElement(C,null)))},k=a(10),y=a.n(k),S=function(e){return r.a.createElement("div",{className:y.a.SideDrawer},r.a.createElement("div",{className:y.a.Logo},r.a.createElement(h,null)),r.a.createElement("nav",null,r.a.createElement(C,null)))},O=function(e){return r.a.createElement(i,null,r.a.createElement(N,null),r.a.createElement(S,null),r.a.createElement("main",{className:s.a.Content},e.children))},I=a(8),x=a(3),L=a(4),T=a(6),w=a(5),j=a(22),D=a(19),M=a.n(D),P=a(1),H=a.n(P),Y=function(e){Object(T.a)(a,e);var t=Object(w.a)(a);function a(){return Object(x.a)(this,a),t.apply(this,arguments)}return Object(L.a)(a,[{key:"render",value:function(){var e=null;switch(this.props.type){case"bread-bottom":e=r.a.createElement("div",{className:H.a.BreadBottom});break;case"bread-top":e=r.a.createElement("div",{className:H.a.BreadTop},r.a.createElement("div",{className:H.a.Seeds1}),r.a.createElement("div",{className:H.a.Seeds2}));break;case"meat":e=r.a.createElement("div",{className:H.a.Meat});break;case"bacon":e=r.a.createElement("div",{className:H.a.Bacon});break;case"cheese":e=r.a.createElement("div",{className:H.a.Cheese});break;case"salad":e=r.a.createElement("div",{className:H.a.Salad});break;default:e=null}return e}}]),a}(n.Component),A=function(e){var t=Object.keys(e.ingredients).map((function(t){return Object(j.a)(Array(e.ingredients[t])).map((function(e,a){return r.a.createElement(Y,{key:t+a,type:t})}))})).reduce((function(e,t){return e.concat(t)}),[]);return 0===t.length&&(t=r.a.createElement("p",null,"Please start adding ingredients!")),r.a.createElement("div",{className:M.a.Burger},r.a.createElement(Y,{type:"bread-top"}),t,r.a.createElement(Y,{type:"bread-bottom"}))},J=a(11),R=a.n(J),F=a(2),U=a.n(F),W=function(e){return console.log(e.disabled),r.a.createElement("div",{className:U.a.BuildControl},r.a.createElement("div",{className:U.a.Label},e.label),r.a.createElement("button",{className:U.a.Less,onClick:e.removed,disabled:e.disabled},"Less"),r.a.createElement("button",{className:U.a.More,onClick:e.added},"More"))},z=[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}],Q=function(e){return r.a.createElement("div",{className:R.a.BuildControls},r.a.createElement("p",null,"Current Price: ",r.a.createElement("strong",null,e.price.toFixed(2))),z.map((function(t){return r.a.createElement(W,{key:t.label,label:t.label,added:function(){return e.ingredientAdded(t.type)},removed:function(){return e.ingredientRemoved(t.type)},disabled:e.disabled[t.type]})})),r.a.createElement("button",{className:R.a.OrderButton,disabled:!e.purchaseable,onClick:e.ordered},"ORDER NOW"))},Z=a(20),q=a.n(Z),K=a(21),V=a.n(K),G=function(e){return e.show?r.a.createElement("div",{className:V.a.Backdrop,onClick:e.clicked}):null},X=function(e){return r.a.createElement(i,null,r.a.createElement(G,{show:e.show,clicked:e.modalClosed}),r.a.createElement("div",{className:q.a.Modal,style:{transform:e.show?"translateY(0)":"translateY(-100vh)",opacity:e.show?"1":"0"}},e.children))},$=a(12),ee=a.n($),te=function(e){return r.a.createElement("button",{className:[ee.a.Button,ee.a[e.btnType]].join(" "),onClick:e.clicked},e.children)},ae=function(e){var t=Object.keys(e.ingredients).map((function(t){return r.a.createElement("li",{key:t},r.a.createElement("span",{style:{textTransform:"capitalize"}},t,": ",e.ingredients[t]))}));return r.a.createElement(i,null,r.a.createElement("h3",null,"Your Order"),r.a.createElement("p",null,"A delicious burger with the following ingredients:"),r.a.createElement("ul",null,t),r.a.createElement("p",null,r.a.createElement("strong",null,"Total Price: ",e.price.toFixed(2))),r.a.createElement("p",null,"Continue to Checkout?"),r.a.createElement(te,{btnType:"Danger",clicked:e.purchaseCancelled},"CANCEL"),r.a.createElement(te,{btnType:"Success",clicked:e.purchaseContinued},"CONTINUE"))},ne={salad:.5,cheese:.4,meat:1.3,bacon:.7},re=function(e){Object(T.a)(a,e);var t=Object(w.a)(a);function a(e){var n;return Object(x.a)(this,a),(n=t.call(this,e)).addIngredientHandler=function(e){var t=n.state.ingredients[e]+1,a=Object(I.a)({},n.state.ingredients);a[e]=t;var r=ne[e],l=n.state.totalPrice+r;n.setState({totalPrice:l,ingredients:a}),n.updatePurchaseState(a)},n.removeIngredientHandler=function(e){var t=n.state.ingredients[e];if(!(t<=0)){var a=t-1,r=Object(I.a)({},n.state.ingredients);r[e]=a;var l=ne[e],c=n.state.totalPrice-l;n.setState({totalPrice:c,ingredients:r}),n.updatePurchaseState(r)}},n.purchaseHandler=function(){n.setState({purchasing:!0})},n.purchaseCancelHandler=function(){n.setState({purchasing:!1})},n.purchaseContinueHandler=function(){alert("You Continue!")},n.state={ingredients:{salad:0,bacon:0,cheese:0,meat:0},totalPrice:5,purchaseable:!1,purchasing:!1},n}return Object(L.a)(a,[{key:"updatePurchaseState",value:function(e){var t=Object.keys(e).map((function(t){return e[t]})).reduce((function(e,t){return e+t}),0);this.setState({purchaseable:t>0})}},{key:"render",value:function(){var e=Object(I.a)({},this.state.ingredients);for(var t in e)e[t]=e[t]<=0;return r.a.createElement(i,null,r.a.createElement(X,{show:this.state.purchasing,modalClosed:this.purchaseCancelHandler},r.a.createElement(ae,{ingredients:this.state.ingredients,price:this.state.totalPrice,purchaseCancelled:this.purchaseCancelHandler,purchaseContinued:this.purchaseContinueHandler})),r.a.createElement(A,{ingredients:this.state.ingredients}),r.a.createElement(Q,{ingredientAdded:this.addIngredientHandler,ingredientRemoved:this.removeIngredientHandler,disabled:e,price:this.state.totalPrice,ordered:this.purchaseHandler,purchaseable:this.state.purchaseable}))}}]),a}(n.Component);var le=function(){return r.a.createElement("div",null,r.a.createElement(O,null,r.a.createElement(re,null)))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(le,null)),document.getElementById("root"))}],[[23,1,2]]]);
//# sourceMappingURL=main.ef12cfdb.chunk.js.map