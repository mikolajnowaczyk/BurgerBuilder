(this["webpackJsonpburger-builder"]=this["webpackJsonpburger-builder"]||[]).push([[0],[,function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"n",(function(){return a})),n.d(t,"p",(function(){return o})),n.d(t,"f",(function(){return i})),n.d(t,"k",(function(){return c})),n.d(t,"l",(function(){return u})),n.d(t,"j",(function(){return l})),n.d(t,"m",(function(){return s})),n.d(t,"h",(function(){return d})),n.d(t,"i",(function(){return p})),n.d(t,"g",(function(){return m})),n.d(t,"d",(function(){return h})),n.d(t,"e",(function(){return f})),n.d(t,"b",(function(){return _})),n.d(t,"c",(function(){return g})),n.d(t,"o",(function(){return b}));var r="ADD_INGREDIENT",a="REMOVE_INGREDIENT",o="SET_INGREDIENTS",i="FETCH_INGREDIENTS_FAILED",c="PURCHASE_BURGER_START",u="PURCHASE_BURGER_SUCCESS",l="PURCHASE_BURGER_FAIL",s="PURCHASE_INIT",d="FETCH_ORDERS_START",p="FETCH_ORDERS_SUCCESS",m="FETCH_ORDERS_FAIL",h="AUTH_START",f="AUTH_SUCCESS",_="AUTH_FAIL",g="AUTH_LOGOUT",b="SET_AUTH_REDIRECT_PATH"},,function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return o}));var r=n(19),a=function(e,t){return Object(r.a)(Object(r.a)({},e),t)},o=function(e,t){var n=!0;return t.required&&(n=""!==e.trim()&&n),t.minLength&&(n=e.length>=t.minLength&&n),t.maxLength&&(n=e.length<=t.maxLength&&n),n}},,,,,,,,function(e,t,n){"use strict";t.a=function(e){return e.children}},,,,,function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"i",(function(){return i})),n.d(t,"e",(function(){return c})),n.d(t,"g",(function(){return l})),n.d(t,"h",(function(){return s})),n.d(t,"d",(function(){return d})),n.d(t,"b",(function(){return g})),n.d(t,"f",(function(){return f})),n.d(t,"j",(function(){return b})),n.d(t,"c",(function(){return E}));var r=n(1),a=n(20),o=function(e){return{type:r.a,ingredientName:e}},i=function(e){return{type:r.n,ingredientName:e}},c=function(){return function(e){a.a.get("https://burger-builder-eecea.firebaseio.com/ingredients.json").then((function(t){var n;e((n=t.data,{type:r.p,ingredients:n}))})).catch((function(t){e({type:r.f})}))}},u=n(19),l=function(e,t){return function(n){n({type:r.k}),a.a.post("/orders.json?auth="+t,e).then((function(t){n(function(e,t){return{type:r.l,orderID:e,orderData:t}}(t.data.name,e))})).catch((function(e){n(function(e){return{type:r.j,error:e}}(e))}))}},s=function(){return{type:r.m}},d=function(e,t){return function(n){n({type:r.h});var o="?auth="+e+'&orderBy="userId"&equalTo="'+t+'"';a.a.get("/orders.json"+o).then((function(e){var t,a=[];for(var o in e.data)a.push(Object(u.a)(Object(u.a)({},e.data[o]),{},{id:o}));n((t=a,{type:r.i,orders:t}))})).catch((function(e){var t;n((t=e,{type:r.g,error:t}))}))}},p=n(17),m=n.n(p),h=function(e,t){return{type:r.e,idToken:e,userId:t}},f=function(){return localStorage.removeItem("token"),localStorage.removeItem("expirationDate"),localStorage.removeItem("userId"),{type:r.c}},_=function(e){return function(t){setTimeout((function(){t(f())}),1e3*e)}},g=function(e,t,n){return function(a){a({type:r.d});var o={email:e,password:t,returnSecureToken:!0},i="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBtftj5FkH6ZlzsSheaQOxXOCwKuTuF9Q0";n||(i="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBtftj5FkH6ZlzsSheaQOxXOCwKuTuF9Q0"),m.a.post(i,o).then((function(e){var t=new Date((new Date).getTime()+1e3*e.data.expiresIn);localStorage.setItem("token",e.data.idToken),localStorage.setItem("expirationDate",t),localStorage.setItem("userId",e.data.localId),a(h(e.data.idToken,e.data.localId)),a(_(e.data.expiresIn))})).catch((function(e){var t;a((t=e.response.data.error,{type:r.b,error:t}))}))}},b=function(e){return{type:r.o,path:e}},E=function(){return function(e){var t=localStorage.getItem("token");if(t){var n=new Date(localStorage.getItem("expirationDate"));if(n<=new Date)e(f());else{var r=localStorage.getItem("userId");e(h(t,r)),e(_((n.getTime()-(new Date).getTime())/1e3))}}else e(f())}}},,function(e,t,n){e.exports={BreadBottom:"BurgerIngredient__BreadBottom___HuxZP",BreadTop:"BurgerIngredient__BreadTop___10-cT",Seeds1:"BurgerIngredient__Seeds1___3xHtz",Seeds2:"BurgerIngredient__Seeds2___1cUso",Meat:"BurgerIngredient__Meat___13nAN",Cheese:"BurgerIngredient__Cheese___1FxeY",Salad:"BurgerIngredient__Salad___1iTJE",Bacon:"BurgerIngredient__Bacon___3vrAI"}},,function(e,t,n){"use strict";var r=n(17),a=n.n(r).a.create({baseURL:"https://burger-builder-eecea.firebaseio.com/"});t.a=a},,,,function(e,t,n){e.exports={SideDrawer:"SideDrawer__SideDrawer___21TuB",Open:"SideDrawer__Open___1pVYR",Close:"SideDrawer__Close___3Yv1l",Logo:"SideDrawer__Logo___3TkPv"}},,,function(e,t,n){e.exports={BuildControl:"BuildControl__BuildControl___1jYc3",Label:"BuildControl__Label___33Z-p",Less:"BuildControl__Less___377MJ",More:"BuildControl__More___28-hQ"}},,,function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(60),i=n.n(o);t.a=function(e){return e.show?a.a.createElement("div",{className:i.a.Backdrop,onClick:e.clicked}):null}},function(e,t,n){"use strict";var r=n(5),a=n(6),o=n(8),i=n(7),c=n(0),u=n.n(c),l=n(62),s=n.n(l),d=n(11),p=n(30),m=function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return e.show!==this.props.show||e.children!==this.props.children}},{key:"render",value:function(){return u.a.createElement(d.a,null,u.a.createElement(p.a,{show:this.props.show,clicked:this.props.modalClosed}),u.a.createElement("div",{className:s.a.Modal,style:{transform:this.props.show?"translateY(0)":"translateY(-100vh)",opacity:this.props.show?"1":"0"}},this.props.children))}}]),n}(c.Component);t.a=m},function(e,t,n){e.exports={Toolbar:"Toolbar__Toolbar___2JJW-",Logo:"Toolbar__Logo___1efBD",DesktopOnly:"Toolbar__DesktopOnly___WADUd"}},function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(40),i=n.n(o);t.a=function(e){return a.a.createElement("button",{disabled:e.disabled,className:[i.a.Button,i.a[e.btnType]].join(" "),onClick:e.clicked},e.children)}},,,function(e,t,n){e.exports={NavigationItem:"NavigationItem__NavigationItem___23bcu",active:"NavigationItem__active___2zJdO"}},,,function(e,t,n){e.exports={BuildControls:"BuildControls__BuildControls___3_01f",OrderButton:"BuildControls__OrderButton___myBwT",enable:"BuildControls__enable___3jYIq"}},function(e,t,n){e.exports={Button:"Button__Button___QI7b2",Success:"Button__Success___2dHUt",Danger:"Button__Danger___2xnhN"}},function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(63),i=n.n(o);t.a=function(){return a.a.createElement("div",{className:i.a.Loader},"Loading...")}},function(e,t,n){"use strict";var r=n(5),a=n(6),o=n(8),i=n(7),c=n(0),u=n.n(c),l=n(31),s=n(11),d=n(17),p=n.n(d);t.a=function(e){return function(t){Object(o.a)(c,t);var n=Object(i.a)(c);function c(){var e;Object(r.a)(this,c);for(var t=arguments.length,a=new Array(t),o=0;o<t;o++)a[o]=arguments[o];return(e=n.call.apply(n,[this].concat(a))).state={error:null},e.errorConfirmedHandler=function(){e.setState({error:null})},e}return Object(a.a)(c,[{key:"UNSAFE_componentWillMount",value:function(){var e=this;this.reqInterceptor=p.a.interceptors.request.use((function(t){return e.setState({error:null}),t})),this.resInterceptor=p.a.interceptors.response.use((function(e){return e}),(function(t){e.setState({error:t})}))}},{key:"componentWillUnmount",value:function(){p.a.interceptors.request.eject(this.reqInterceptor),p.a.interceptors.response.eject(this.resInterceptor)}},{key:"render",value:function(){return u.a.createElement(s.a,null,u.a.createElement(l.a,{show:this.state.error,modalClosed:this.errorConfirmedHandler},this.state.error?this.state.error.message:null),u.a.createElement(e,this.props))}}]),c}(c.Component)}},,,,,,,,,,,function(e,t,n){"use strict";var r=n(65),a=n(0),o=n.n(a),i=n(61),c=n.n(i),u=n(5),l=n(6),s=n(8),d=n(7),p=n(18),m=n.n(p),h=function(e){Object(s.a)(n,e);var t=Object(d.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=null;switch(this.props.type){case"bread-bottom":e=o.a.createElement("div",{className:m.a.BreadBottom});break;case"bread-top":e=o.a.createElement("div",{className:m.a.BreadTop},o.a.createElement("div",{className:m.a.Seeds1}),o.a.createElement("div",{className:m.a.Seeds2}));break;case"meat":e=o.a.createElement("div",{className:m.a.Meat});break;case"bacon":e=o.a.createElement("div",{className:m.a.Bacon});break;case"cheese":e=o.a.createElement("div",{className:m.a.Cheese});break;case"salad":e=o.a.createElement("div",{className:m.a.Salad});break;default:e=null}return e}}]),n}(a.Component);t.a=function(e){var t=Object.keys(e.ingredients).map((function(t){return Object(r.a)(Array(e.ingredients[t])).map((function(e,n){return o.a.createElement(h,{key:t+n,type:t})}))})).reduce((function(e,t){return e.concat(t)}),[]);return 0===t.length&&(t=o.a.createElement("p",null,"Please start adding ingredients!")),o.a.createElement("div",{className:c.a.Burger},o.a.createElement(h,{type:"bread-top"}),t,o.a.createElement(h,{type:"bread-bottom"}))}},,function(e,t,n){e.exports={Content:"Layout__Content___3pLYC"}},function(e,t,n){e.exports={Logo:"Logo__Logo___19WaN"}},function(e,t,n){e.exports=n.p+"static/media/logo.b8503d26.png"},function(e,t,n){e.exports={NavigationItems:"NavigationItems__NavigationItems____yd_d"}},function(e,t,n){e.exports={DrawerToggle:"DrawerToggle__DrawerToggle___26to0"}},function(e,t,n){e.exports={Backdrop:"Backdrop__Backdrop___efy1y"}},function(e,t,n){e.exports={Burger:"Burger__Burger___3K4F-"}},function(e,t,n){e.exports={Modal:"Modal__Modal___32_-a"}},function(e,t,n){e.exports={Loader:"Spinner__Loader___1DDwY",load5:"Spinner__load5___3b3Nk"}},,,function(e,t,n){e.exports=n(94)},,,,,function(e,t,n){},,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(28),i=n.n(o),c=(n(71),n(5)),u=n(6),l=n(8),s=n(7),d=n(4),p=n(15),m=function(e){return function(t){Object(l.a)(r,t);var n=Object(s.a)(r);function r(){var e;Object(c.a)(this,r);for(var t=arguments.length,a=new Array(t),o=0;o<t;o++)a[o]=arguments[o];return(e=n.call.apply(n,[this].concat(a))).state={component:null},e}return Object(u.a)(r,[{key:"componentDidMount",value:function(){var t=this;e().then((function(e){t.setState({component:e.default})}))}},{key:"render",value:function(){var e=this.state.component;return e?a.a.createElement(e,this.props):null}}]),r}(r.Component)},h=n(11),f=n(55),_=n.n(f),g=n(32),b=n.n(g),E=n(56),v=n.n(E),O=n(57),y=n.n(O),k=function(e){return a.a.createElement("div",{className:v.a.Logo,style:{height:e.height}},a.a.createElement("img",{src:y.a,alt:"MyBurgerLogo"}))},j=n(58),C=n.n(j),S=n(22),I=n(36),B=n.n(I),T=function(e){return a.a.createElement("li",{className:B.a.NavigationItem},a.a.createElement(S.b,{to:e.link,exact:e.exact,activeClassName:B.a.active},e.children))},N=function(e){return a.a.createElement("ul",{className:C.a.NavigationItems},a.a.createElement(T,{link:"/",exact:!0},"Burger Builder"),e.isAuthenticated?a.a.createElement(T,{link:"/orders"},"Orders"):null,e.isAuthenticated?a.a.createElement(T,{link:"/logout"},"Logout"):a.a.createElement(T,{link:"/auth"},"Authenticate"))},w=n(59),D=n.n(w),A=function(e){return a.a.createElement("div",{onClick:e.clicked,className:D.a.DrawerToggle},a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null))},R=function(e){return a.a.createElement("header",{className:b.a.Toolbar},a.a.createElement(A,{clicked:e.drawerToggleClicked}),a.a.createElement("div",{className:b.a.Logo},a.a.createElement(k,null)),a.a.createElement("nav",{className:b.a.DesktopOnly},a.a.createElement(N,{isAuthenticated:e.isAuth})))},L=n(24),x=n.n(L),H=n(30),P=function(e){var t=[x.a.SideDrawer,x.a.Close];return e.open&&(t=[x.a.SideDrawer,x.a.Open]),a.a.createElement(h.a,null,a.a.createElement(H.a,{show:e.open,clicked:e.closed}),a.a.createElement("div",{className:t.join(" "),onClick:e.closed},a.a.createElement("div",{className:x.a.Logo},a.a.createElement(k,null)),a.a.createElement("nav",null,a.a.createElement(N,{isAuthenticated:e.isAuth}))))},U=function(e){Object(l.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(c.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={showSideDrawer:!1},e.sideDrawerClosedHandler=function(){e.setState({showSideDrawer:!1})},e.sideDrawerToggleHandler=function(){e.setState((function(e){return{showSideDrawer:!e.showSideDrawer}}))},e}return Object(u.a)(n,[{key:"render",value:function(){return a.a.createElement(h.a,null,a.a.createElement(R,{isAuth:this.props.isAuthenticated,drawerToggleClicked:this.sideDrawerToggleHandler}),a.a.createElement(P,{isAuth:this.props.isAuthenticated,open:this.state.showSideDrawer,closed:this.sideDrawerClosedHandler}),a.a.createElement("main",{className:_.a.Content},this.props.children))}}]),n}(r.Component),M=Object(p.b)((function(e){return{isAuthenticated:null!==e.auth.token}}))(U),F=n(19),Y=n(53),G=n(39),q=n.n(G),z=n(27),J=n.n(z),W=function(e){return a.a.createElement("div",{className:J.a.BuildControl},a.a.createElement("div",{className:J.a.Label},e.label),a.a.createElement("button",{className:J.a.Less,onClick:e.removed,disabled:e.disabled},"Less"),a.a.createElement("button",{className:J.a.More,onClick:e.added},"More"))},Q=[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}],Z=function(e){return a.a.createElement("div",{className:q.a.BuildControls},a.a.createElement("p",null,"Current Price: ",a.a.createElement("strong",null,e.price.toFixed(2))),Q.map((function(t){return a.a.createElement(W,{key:t.label,label:t.label,added:function(){return e.ingredientAdded(t.type)},removed:function(){return e.ingredientRemoved(t.type)},disabled:e.disabled[t.type]})})),a.a.createElement("button",{className:q.a.OrderButton,disabled:!e.purchaseable,onClick:e.ordered},e.isAuth?"ORDER NOW":"SIGN UP TO ORDER"))},K=n(31),V=n(33),X=function(e){var t=Object.keys(e.ingredients).map((function(t){return a.a.createElement("li",{key:t},a.a.createElement("span",{style:{textTransform:"capitalize"}},t,": ",e.ingredients[t]))}));return a.a.createElement(h.a,null,a.a.createElement("h3",null,"Your Order"),a.a.createElement("p",null,"A delicious burger with the following ingredients:"),a.a.createElement("ul",null,t),a.a.createElement("p",null,a.a.createElement("strong",null,"Total Price: ",e.price.toFixed(2))),a.a.createElement("p",null,"Continue to Checkout?"),a.a.createElement(V.a,{btnType:"Danger",clicked:e.purchaseCancelled},"CANCEL"),a.a.createElement(V.a,{btnType:"Success",clicked:e.purchaseContinued},"CONTINUE"))},$=n(41),ee=n(20),te=n(42),ne=n(16),re=function(e){Object(l.a)(n,e);var t=Object(s.a)(n);function n(e){var r;return Object(c.a)(this,n),(r=t.call(this,e)).purchaseHandler=function(){r.props.isAuthenticated?r.setState({purchasing:!0}):(r.props.onSetAuthRedirectPath("/checkout"),r.props.history.push("/auth"))},r.purchaseCancelHandler=function(){r.setState({purchasing:!1})},r.purchaseContinueHandler=function(){r.props.onInitPurchase(),r.props.history.push("/checkout")},r.state={purchasing:!1},r}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.onInitIngredients()}},{key:"updatePurchaseState",value:function(e){return Object.keys(e).map((function(t){return e[t]})).reduce((function(e,t){return e+t}),0)>0}},{key:"render",value:function(){var e=Object(F.a)({},this.props.ings);for(var t in e)e[t]=e[t]<=0;var n=null,r=this.props.error?a.a.createElement("p",null,"Ingredients can't be loaded!"):a.a.createElement($.a,null);return this.props.ings&&(r=a.a.createElement(h.a,null,a.a.createElement(Y.a,{ingredients:this.props.ings}),a.a.createElement(Z,{ingredientAdded:this.props.onIngredientAdded,ingredientRemoved:this.props.onIngredientRemoved,disabled:e,price:this.props.price,isAuth:this.props.isAuthenticated,ordered:this.purchaseHandler,purchaseable:this.updatePurchaseState(this.props.ings)})),n=a.a.createElement(X,{ingredients:this.props.ings,price:this.props.price,purchaseCancelled:this.purchaseCancelHandler,purchaseContinued:this.purchaseContinueHandler})),a.a.createElement(h.a,null,a.a.createElement(K.a,{show:this.state.purchasing,modalClosed:this.purchaseCancelHandler},n),r)}}]),n}(r.Component),ae=Object(p.b)((function(e){return{ings:e.burgerBuilder.ingredients,price:e.burgerBuilder.totalPrice,error:e.burgerBuilder.error,isAuthenticated:null!==e.auth.token}}),(function(e){return{onIngredientAdded:function(t){return e(ne.a(t))},onIngredientRemoved:function(t){return e(ne.i(t))},onInitIngredients:function(){return e(ne.e())},onInitPurchase:function(){return e(ne.h())},onSetAuthRedirectPath:function(t){return e(ne.j(t))}}}))(Object(te.a)(re,ee.a)),oe=function(e){Object(l.a)(n,e);var t=Object(s.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.onLogout()}},{key:"render",value:function(){return a.a.createElement(d.a,{to:"/"})}}]),n}(r.Component),ie=Object(p.b)(null,(function(e){return{onLogout:function(){return e(ne.f())}}}))(oe),ce=m((function(){return n.e(3).then(n.bind(null,102))})),ue=m((function(){return n.e(5).then(n.bind(null,103))})),le=m((function(){return n.e(4).then(n.bind(null,101))})),se=function(e){Object(l.a)(n,e);var t=Object(s.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.onTryAutoSignup()}},{key:"render",value:function(){var e=a.a.createElement(d.d,null,a.a.createElement(d.b,{path:"/auth",component:le}),a.a.createElement(d.b,{path:"/",component:ae}),a.a.createElement(d.a,{to:"/"}));return this.props.isAuthenticated&&(e=a.a.createElement(d.d,null,a.a.createElement(d.b,{path:"/checkout",component:ce}),a.a.createElement(d.b,{path:"/orders",component:ue}),a.a.createElement(d.b,{path:"/logout",component:ie}),a.a.createElement(d.b,{path:"/auth",component:le}),a.a.createElement(d.b,{path:"/",component:ae}),a.a.createElement(d.a,{to:"/"}))),a.a.createElement("div",null,a.a.createElement(M,null,e))}}]),n}(r.Component),de=Object(d.g)(Object(p.b)((function(e){return{isAuthenticated:null!==e.auth.token}}),(function(e){return{onTryAutoSignup:function(){return e(ne.c())}}}))(se)),pe=n(21),me=n(25),he=n(1),fe=n(3),_e={salad:.5,cheese:.4,meat:1.3,bacon:.7},ge={ingredients:null,totalPrice:4,error:!1,building:!1},be=function(e,t){var n=Object(me.a)({},t.ingredientName,e.ingredients[t.ingredientName]+1),r={ingredients:Object(fe.b)(e.ingredients,n),totalPrice:e.totalPrice+_e[t.ingredientName],building:!0};return Object(fe.b)(e,r)},Ee=function(e,t){var n=Object(me.a)({},t.ingredientName,e.ingredients[t.ingredientName]-1),r={ingredients:Object(fe.b)(e.ingredients,n),totalPrice:e.totalPrice+_e[t.ingredientName],building:!0};return Object(fe.b)(e,r)},ve=function(e,t){return Object(fe.b)(e,{ingredients:{salad:t.ingredients.salad,bacon:t.ingredients.bacon,cheese:t.ingredients.cheese,meat:t.ingredients.meat},totalPrice:4,error:!1,building:!1})},Oe=function(e){return Object(fe.b)(e,{error:!0})},ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case he.a:return be(e,t);case he.n:return Ee(e,t);case he.p:return ve(e,t);case he.f:return Oe(e);default:return e}},ke=n(64),je={orders:[],loading:!1,purchased:!1},Ce=function(e){return Object(fe.b)(e,{purchased:!1})},Se=function(e){return Object(fe.b)(e,{loading:!0})},Ie=function(e,t){var n=Object(fe.b)(t.orderData,{id:t.orderdId});return Object(fe.b)(e,{loading:!1,purchased:!0,orderds:e.orders.concat(n)})},Be=function(e){return Object(fe.b)(e,{loading:!1})},Te=function(e){return Object(fe.b)(e,{loading:!0})},Ne=function(e,t){return Object(fe.b)(e,{orders:t.orders,loading:!1})},we=function(e){return Object(fe.b)(e,{loading:!1})},De=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case he.m:return Ce(e);case he.k:return Se(e);case he.l:return Ie(e,t);case he.j:return Be(e);case he.h:return Te(e);case he.i:return Ne(e,t);case he.g:return we(e);default:return e}},Ae={token:null,userId:null,error:null,loading:!1,authRedirectPath:"/"},Re=function(e){return Object(fe.b)(e,{error:null,loading:!0})},Le=function(e,t){return Object(fe.b)(e,{token:t.idToken,userId:t.userId,error:null,loading:!1})},xe=function(e,t){return Object(fe.b)(e,{error:t.error,loading:!1})},He=function(e){return Object(fe.b)(e,{token:null,userId:null})},Pe=function(e,t){return Object(fe.b)(e,{authRedirectPath:t.path})},Ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case he.d:return Re(e);case he.e:return Le(e,t);case he.b:return xe(e,t);case he.c:return He(e);case he.o:return Pe(e,t);default:return e}},Me=pe.d,Fe=Object(pe.c)({burgerBuilder:ye,order:De,auth:Ue}),Ye=Object(pe.e)(Fe,Me(Object(pe.a)(ke.a))),Ge=a.a.createElement(p.a,{store:Ye},a.a.createElement(S.a,null,a.a.createElement(de,null)));i.a.render(Ge,document.getElementById("root"))}],[[66,1,2]]]);
//# sourceMappingURL=main.7239eb72.chunk.js.map