(this["webpackJsonpstar-wars"]=this["webpackJsonpstar-wars"]||[]).push([[0],[,,,,,,function(e,t,n){"use strict";n.d(t,"f",(function(){return a})),n.d(t,"e",(function(){return c})),n.d(t,"i",(function(){return r})),n.d(t,"h",(function(){return s})),n.d(t,"g",(function(){return i})),n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return u})),n.d(t,"d",(function(){return j})),n.d(t,"j",(function(){return _}));var a="https://",c="http://",r="swapi.dev/api/",s="people",i="/?page=",o=a+r+s+i,l=a+r+s,u=a+r+s+"/?search=",j=".jpg",_="https://starwars-visualguide.com/assets/img/characters"},,,,,,,,,,,function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return l}));var a=n(10),c=n.n(a),r=n(15),s=n(6),i=function(e){return e?e.replace(s.e,s.f):e},o=function(){var e=Object(r.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t);case 3:if((n=e.sent).ok){e.next=7;break}return console.error("Could not fetch.",n.status),e.abrupt("return",!1);case 7:return e.next=9,n.json();case 9:return e.abrupt("return",e.sent);case 12:return e.prev=12,e.t0=e.catch(0),console.error("Could not fetch.",e.t0.message),e.abrupt("return",!1);case 16:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}(),l=function(e){return new Promise((function(t){var n=[],a=0;!function c(r){fetch(e[r]).then((function(e){return e.json()})).then((function(s){n[r]=s,e.length-1===a?t(n):(a++,c(a))}))}(0)}))}},function(e,t,n){e.exports={container:"ChooseSide_container__3fEM1",item:"ChooseSide_item__n8zxD",item__header:"ChooseSide_item__header__2eBcq",item__img:"ChooseSide_item__img__ts6Xr",item__light:"ChooseSide_item__light__2J3cs",item__dark:"ChooseSide_item__dark__2pjYt",item__neitral:"ChooseSide_item__neitral__3BK9D"}},,function(e,t,n){e.exports={list__container:"SearchPageInfo_list__container__TWIYf",list__item:"SearchPageInfo_list__item__1qPdf",person__photo:"SearchPageInfo_person__photo__wLU3V",person__name:"SearchPageInfo_person__name__3TiaW",person__comment:"SearchPageInfo_person__comment__156PE"}},,function(e,t,n){e.exports={wrapper:"PersonInfo_wrapper__3hws1",list__container:"PersonInfo_list__container__Nl-Dj",list__item:"PersonInfo_list__item__QIlSP",item__title:"PersonInfo_item__title__2L2nc"}},function(e,t,n){e.exports={wrapper__input:"UiInput_wrapper__input__skt19",input:"UiInput_input__4Ho1H",clear:"UiInput_clear__3tuBe",clear__disabled:"UiInput_clear__disabled__2HCMG"}},function(e,t,n){},,,,,function(e,t,n){e.exports={container:"Favorite_container__jV7kK",logo:"Favorite_logo__1uMcS",counter:"Favorite_counter__LFdq-"}},function(e,t,n){e.exports={container:"Header_container__2Ok0E",logo:"Header_logo__Iv9iH",list__container:"Header_list__container__Niz5i"}},function(e,t,n){e.exports={container:"PeopleNavigation_container__2Qp0c",buttons:"PeopleNavigation_buttons__c8KLh"}},function(e,t,n){e.exports={list__container:"PeopleList_list__container__24xoP",list__item:"PeopleList_list__item__3od14",person__photo:"PeopleList_person__photo__xkq7a"}},function(e,t,n){e.exports={container:"PersonPhoto_container__3onPA",photo:"PersonPhoto_photo__3IEjR",favorite:"PersonPhoto_favorite__2MASA"}},function(e,t,n){e.exports={wrapper:"PersonPage_wrapper__2aSZc",person__name:"PersonPage_person__name__180xz",container:"PersonPage_container__1OF_q"}},,,,,,,function(e,t,n){e.exports={text:"ErrorMessage_text__329Xm",video:"ErrorMessage_video__1Y6q9"}},function(e,t,n){e.exports={button:"UiButton_button__9e4lI",dark:"UiButton_dark__1o5Fn",light:"UiButton_light__37U1k"}},function(e,t,n){e.exports={link:"PersonLinkBack_link__2UKKp",link__img:"PersonLinkBack_link__img__RhSAU"}},function(e,t,n){e.exports={loader:"UiLoading_loader__OVC75",shadow:"UiLoading_shadow__3XuV5"}},function(e,t,n){e.exports={img:"NotFoundPage_img__371kA",text:"NotFoundPage_text__1aal_"}},,,,function(e,t,n){},function(e,t,n){e.exports={input__search:"SearchPage_input__search__2oBLp"}},function(e,t,n){e.exports={wrapper:"App_wrapper__E36NK"}},,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),r=n.n(c),s=n(25),i=n.n(s),o=n(13),l=n(16),u=n(47),j=n(48),_=n(14),d=n(28),b="ADD_PERSON_TO_FAVORITE",p="REMOVE_PERSON_FROM_FAVORITE",h=function(e){var t=localStorage.getItem(e);return null!==t?JSON.parse(t):{}}("store"),m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(_.a)(Object(_.a)({},e),t.payload);case p:return Object(d.omit)(e,[t.payload]);default:return e}},f=Object(l.combineReducers)({favoriteReducer:m}),O=Object(l.createStore)(f,Object(u.composeWithDevTools)(Object(l.applyMiddleware)(j.a)));O.subscribe((function(){var e,t;e="store",t=O.getState().favoriteReducer,localStorage.setItem(e,JSON.stringify(t))}));var x=O,g=n(3),v=n(52),k="light",N="dark",S="neitral",P=r.a.createContext(),w=function(e){var t=e.children,n=Object(v.a)(e,["children"]),r=Object(c.useState)(null),s=Object(g.a)(r,2),i=s[0],o=s[1];return Object(a.jsx)(P.Provider,Object(_.a)(Object(_.a)({value:{theme:i,change:function(e){o(e),function(e){var t=document.querySelector(":root");["header","bgimage"].forEach((function(n){t.style.setProperty("--theme-default-".concat(n),"var(--theme-".concat(e,"-").concat(n,")")),console.log("--theme-default-".concat(n),"var(--theme-".concat(e,"-").concat(n,")"))}))}(e)}}},n),{},{children:t}))},F=function(){return Object(c.useContext)(P)},C=n(5),I=n(4),y=n.p+"static/media/bookmark.b17a5944.svg",E=n(29),R=n.n(E),L=function(){var e=Object(c.useState)(0),t=Object(g.a)(e,2),n=t[0],r=t[1],s=Object(o.c)((function(e){return e.favoriteReducer}));return Object(c.useEffect)((function(){var e=Object.keys(s).length;e.toString().length>2?r("..."):r(e)})),Object(a.jsx)("div",{className:R.a.container,children:Object(a.jsxs)(C.b,{to:"/favorites",children:[Object(a.jsx)("span",{className:R.a.counter,children:n}),Object(a.jsx)("img",{className:R.a.logo,src:y,alt:"Favorites"})]})})},A=n.p+"static/media/space-station.7a027c6e.svg",U=n.p+"static/media/droid.de165dd8.svg",B=n.p+"static/media/lightsaber.eb7d4cd6.svg",H=n(30),M=n.n(H),D=function(){var e=Object(c.useState)(A),t=Object(g.a)(e,2),n=t[0],r=t[1],s=F();return Object(c.useEffect)((function(){switch(s.theme){case k:r(B);break;case N:r(A);break;case S:r(U);break;default:r(A)}}),[s]),Object(a.jsxs)("div",{className:M.a.container,children:[Object(a.jsx)("img",{className:M.a.logo,src:n,alt:"Star Wars"}),Object(a.jsxs)("ul",{className:M.a.list__container,children:[Object(a.jsx)("li",{children:Object(a.jsx)(C.c,{to:"/",exact:!0,children:"Home"})}),Object(a.jsx)("li",{children:Object(a.jsx)(C.c,{to:"/people/?page=1",children:"People"})}),Object(a.jsx)("li",{children:Object(a.jsx)(C.c,{to:"/search",children:"Search"})}),Object(a.jsx)("li",{children:Object(a.jsx)(C.c,{to:"/not-found",children:"Not Found"})}),Object(a.jsx)("li",{children:Object(a.jsx)(C.c,{to:"/fail",children:"Fail"})})]}),Object(a.jsx)(L,{})]})},q=n(12),T=n.n(q),V=n.p+"static/media/light-side.eebc5217.jpg",K=n.p+"static/media/dark-side.e0f8cab7.jpg",J=n.p+"static/media/falcon.c1d0a8d1.jpg",W=n(18),z=n.n(W),G=function(e){var t=e.classes,n=e.onClick,c=e.text,r=e.img;return Object(a.jsxs)("div",{className:T()(z.a.item,t),onClick:n,children:[Object(a.jsx)("div",{className:z.a.item__header,children:c}),Object(a.jsx)("img",{className:z.a.item__img,src:r,alt:c})]})},Y=function(){var e=F();return Object(a.jsxs)("div",{className:z.a.container,children:[Object(a.jsx)(G,{classes:z.a.item__light,onClick:function(){return e.change(k)},text:"Light Side",img:V}),Object(a.jsx)(G,{classes:z.a.item__dark,onClick:function(){return e.change(N)},text:"Dark Side",img:K}),Object(a.jsx)(G,{classes:z.a.item__neitral,onClick:function(){return e.change(S)},text:"I'm Han Solo",img:J})]})},X=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h1",{className:"header__text",children:"Choose your side"}),Object(a.jsx)(Y,{})]})},Q=n(10),Z=n.n(Q),$=n(15),ee=(n(24),n(49)),te=n.n(ee),ne=function(e){var t=e.src,n=e.playbackRate,r=void 0===n?1:n,s=e.classes,i=Object(c.useRef)(null);return Object(c.useEffect)((function(){i.current.playbackRate=r}),[]),Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("video",{loop:!0,autoPlay:!0,muted:!0,ref:i,className:T()(te.a.video,s),children:Object(a.jsx)("source",{src:t})})})},ae=n.p+"static/media/han-solo.db435084.mp4",ce=n(41),re=n.n(ce),se=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("p",{className:re.a.text,children:["The dark side of the force has won. ",Object(a.jsx)("br",{}),"We cannot display data.",Object(a.jsx)("br",{}),"Come back when we fix everything"]}),Object(a.jsx)(ne,{src:ae,classes:re.a.video})]})},ie=function(e){return function(t){var n=Object(c.useState)(!1),r=Object(g.a)(n,2),s=r[0],i=r[1];return Object(a.jsx)(a.Fragment,{children:s?Object(a.jsx)(se,{}):Object(a.jsx)(e,Object(_.a)({setErrorApi:i},t))})}},oe=n(42),le=n.n(oe),ue=function(e){var t=e.text,n=e.onClick,c=e.disabled,r=e.theme,s=void 0===r?"dark":r,i=e.classes;return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("button",{onClick:n,className:T()(le.a.button,le.a[s],i),disabled:c,children:t})})},je=n(31),_e=n.n(je),de=function(e){var t=e.getResponse,n=e.prevPage,c=e.nextPage,r=e.counterPage;return Object(a.jsxs)("div",{className:_e.a.container,children:[Object(a.jsx)(C.b,{to:"/people/?page=".concat(r-1),children:Object(a.jsx)(ue,{text:"Previous",onClick:function(){return t(n)},disabled:!n,classes:_e.a.buttons})}),Object(a.jsx)(C.b,{to:"/people/?page=".concat(r+1),children:Object(a.jsx)(ue,{text:"Next",onClick:function(){return t(c)},disabled:!c,classes:_e.a.buttons})})]})},be=n(32),pe=n.n(be),he=function(e){var t=e.people;return Object(a.jsx)("ul",{className:pe.a.list__container,children:t.map((function(e){var t=e.id,n=e.name,c=e.img;return Object(a.jsx)("li",{className:pe.a.list__item,children:Object(a.jsxs)(C.b,{to:"/people/".concat(t),children:[Object(a.jsx)("img",{className:pe.a.person__photo,src:c,alt:n}),Object(a.jsx)("p",{children:n})]})},t)}))})},me=n(17),fe=n(6),Oe=function(e){var t=e.lastIndexOf(fe.g),n=e.slice(t+fe.g.length,e.length);return Number(n)},xe=function(e){return function(e,t){return e.replace(fe.e+fe.i+t,"").replace(/\//g,"")}(e,fe.h)},ge=function(e){return"".concat(fe.j,"/").concat(e+fe.d)},ve=ie((function(e){var t=e.setErrorApi,n=Object(c.useState)(null),r=Object(g.a)(n,2),s=r[0],i=r[1],o=Object(c.useState)(null),l=Object(g.a)(o,2),u=l[0],j=l[1],_=Object(c.useState)(null),d=Object(g.a)(_,2),b=d[0],p=d[1],h=Object(c.useState)(1),m=Object(g.a)(h,2),f=m[0],O=m[1],x=new URLSearchParams(Object(I.g)().search).get("page"),v=function(){var e=Object($.a)(Z.a.mark((function e(n){var a,c;return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(me.b)(n);case 2:(a=e.sent)?(c=a.results.map((function(e){var t=e.name,n=e.url,a=xe(n);return{id:a,name:t,img:ge(a)}})),i(c),p(Object(me.a)(a.next)),j(Object(me.a)(a.previous)),O(Oe(n)),t(!1)):t(!0);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){v(fe.a+x)}),[x]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(de,{getResponse:v,prevPage:u,nextPage:b,counterPage:f}),s&&Object(a.jsx)(he,{people:s})]})})),ke=n(27),Ne=n.p+"static/media/favorite.566cdda1.svg",Se=n.p+"static/media/favorite-full.d5b58d62.svg",Pe=n(33),we=n.n(Pe),Fe=function(e){var t=e.personId,n=e.personPhoto,c=e.personName,r=e.personFavorite,s=e.setPersonFavorite,i=Object(o.b)();return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:we.a.container,children:[Object(a.jsx)("img",{className:we.a.photo,src:n,alt:c}),Object(a.jsx)("img",{src:r?Se:Ne,onClick:function(){var e;r?(i(function(e){return{type:p,payload:e}}(t)),s(!1)):(i((e=Object(ke.a)({},t,{name:c,img:n}),{type:b,payload:e})),s(!0))},className:we.a.favorite,alt:"Add to favorite"})]})})},Ce=n(22),Ie=n.n(Ce),ye=function(e){var t=e.personInfo;return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("div",{className:Ie.a.wrapper,children:Object(a.jsx)("ul",{className:Ie.a.list__container,children:t.map((function(e){var t=e.title,n=e.data;return n&&Object(a.jsxs)("li",{className:Ie.a.list__item,children:[Object(a.jsx)("span",{className:Ie.a.item__title,children:t}),": ",n]},t)}))})})})},Ee=n.p+"static/media/back.3a33cbdb.svg",Re=n(43),Le=n.n(Re),Ae=function(){var e=Object(I.f)();return Object(a.jsxs)("a",{href:"#",onClick:function(t){t.preventDefault(),e.goBack()},className:Le.a.link,children:[Object(a.jsx)("img",{className:Le.a.link__img,src:Ee,alt:"Go back"}),Object(a.jsx)("span",{children:"Go back"})]})},Ue=n.p+"static/media/loader-black.b67d16eb.svg",Be=n.p+"static/media/loader-white.8beec21f.svg",He=n.p+"static/media/loader-blue.15bee0d1.svg",Me=n(44),De=n.n(Me),qe=function(e){var t=e.theme,n=void 0===t?"white":t,r=e.isShadow,s=void 0===r||r,i=e.classes,o=Object(c.useState)(null),l=Object(g.a)(o,2),u=l[0],j=l[1];return Object(c.useEffect)((function(){switch(n){case"black":j(Ue);break;case"white":j(Be);break;case"blue":j(He);break;default:j(Ue)}}),[]),Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("img",{className:T()(De.a.loader,s&&De.a.shadow,i),src:u,alt:"Loader"})})},Te=n(34),Ve=n.n(Te),Ke=r.a.lazy((function(){return n.e(3).then(n.bind(null,69))})),Je=ie((function(e){var t=e.match,n=e.setErrorApi,r=Object(c.useState)(null),s=Object(g.a)(r,2),i=s[0],l=s[1],u=Object(c.useState)(null),j=Object(g.a)(u,2),_=j[0],d=j[1],b=Object(c.useState)(null),p=Object(g.a)(b,2),h=p[0],m=p[1],f=Object(c.useState)(null),O=Object(g.a)(f,2),x=O[0],v=O[1],k=Object(c.useState)(null),N=Object(g.a)(k,2),S=N[0],P=N[1],w=Object(c.useState)(!1),F=Object(g.a)(w,2),C=F[0],I=F[1],y=Object(o.c)((function(e){return e.favoriteReducer}));return Object(c.useEffect)((function(){Object($.a)(Z.a.mark((function e(){var a,c;return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.params.id,y[a]?I(!0):I(!1),l(a),e.next=5,Object(me.b)("".concat(fe.b,"/").concat(a,"/"));case 5:(c=e.sent)?(d([{title:"Height",data:c.height},{title:"Mass",data:c.mass},{title:"Hair Color",data:c.hair_color},{title:"Skin Color",data:c.skin_color},{title:"Eye Color",data:c.eye_color},{title:"Birth Year",data:c.birth_year},{title:"Gender",data:c.gender}]),m(c.name),v(ge(a)),c.films.length&&P(c.films),n(!1)):n(!0);case 7:case"end":return e.stop()}}),e)})))()}),[t]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(Ae,{}),Object(a.jsxs)("div",{className:Ve.a.wrapper,children:[Object(a.jsx)("span",{className:Ve.a.person__name,children:h}),Object(a.jsxs)("div",{className:Ve.a.container,children:[Object(a.jsx)(Fe,{personId:i,personPhoto:x,personName:h,personFavorite:C,setPersonFavorite:I}),_&&Object(a.jsx)(ye,{personInfo:_}),S&&Object(a.jsx)(c.Suspense,{fallback:Object(a.jsx)(qe,{}),children:Object(a.jsx)(Ke,{personFilms:S})})]})]})]})})),We=n.p+"static/media/cancel.00e5d25a.svg",ze=n(23),Ge=n.n(ze),Ye=function(e){var t=e.value,n=e.handleInputChange,c=e.placeholder,r=e.classes;return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:T()(Ge.a.wrapper__input,r),children:[Object(a.jsx)("input",{type:"text",value:t,onChange:function(e){return n(e.target.value)},placeholder:c,className:Ge.a.input}),Object(a.jsx)("img",{onClick:function(){return t&&n("")},src:We,className:T()(Ge.a.clear,!t&&Ge.a.clear__disabled),alt:"Clear"})]})})},Xe=n(20),Qe=n.n(Xe),Ze=function(e){var t=e.people;return Object(a.jsx)(a.Fragment,{children:t.length?Object(a.jsx)("ul",{className:Qe.a.list__container,children:t.map((function(e){var t=e.id,n=e.name,c=e.img;return Object(a.jsx)("li",{className:Qe.a.list__item,children:Object(a.jsxs)(C.b,{to:"/people/".concat(t),children:[Object(a.jsx)("img",{className:Qe.a.person__photo,src:c,alt:n}),Object(a.jsx)("p",{className:Qe.a.person__name,children:n})]})},t)}))}):Object(a.jsx)("h2",{className:Qe.a.person__comment,children:"No results"})})},$e=n(50),et=n.n($e),tt=ie((function(e){var t=e.setErrorApi,n=Object(c.useState)(""),r=Object(g.a)(n,2),s=r[0],i=r[1],o=Object(c.useState)([]),l=Object(g.a)(o,2),u=l[0],j=l[1],_=function(){var e=Object($.a)(Z.a.mark((function e(n){var a,c;return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(me.b)(fe.c+n);case 2:(a=e.sent)?(c=a.results.map((function(e){var t=e.name,n=e.url,a=xe(n);return{id:a,name:t,img:ge(a)}})),j(c),t(!1)):t(!0);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){_("")}),[]);var b=Object(c.useCallback)(Object(d.debounce)((function(e){return _(e)}),300),[]);return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h1",{className:"header__text",children:"Search"}),Object(a.jsx)(Ye,{value:s,handleInputChange:function(e){i(e),b(e)},placeholder:"Input character's name",classes:et.a.input__search}),Object(a.jsx)(Ze,{people:u})]})})),nt=(n(65),function(){var e=Object(c.useState)(null),t=Object(g.a)(e,2),n=t[0],r=t[1],s=Object(o.c)((function(e){return e.favoriteReducer}));return Object(c.useEffect)((function(){var e=Object.entries(s).map((function(e){return Object(_.a)({id:e[0]},e[1])}));r(e)}),[]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h1",{className:"header__text",children:"Favorites"}),n?Object(a.jsx)(he,{people:n}):Object(a.jsx)("h1",{children:"No data"})]})}),at=n.p+"static/media/not-found.1062f5e4.png",ct=n(45),rt=n.n(ct),st=function(){var e=Object(I.g)();return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("img",{className:rt.a.img,src:at,alt:"Not Found"}),Object(a.jsxs)("p",{className:rt.a.text,children:["No match for ",Object(a.jsx)("u",{children:e.pathname})]})]})},it=[{path:"/",exact:!0,component:X},{path:"/people",exact:!0,component:ve},{path:"/people/:id",component:Je},{path:"/search",exact:!0,component:tt},{path:"/favorites",exact:!0,component:nt},{path:"/fail",exact:!0,component:se},{path:"/not-found",exact:!0,component:st},{path:"*",exact:!1,component:st}],ot=n(51),lt=n.n(ot),ut=function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(C.a,{basename:"/".concat("react-star-wars","/"),children:Object(a.jsxs)("div",{className:lt.a.wrapper,children:[Object(a.jsx)(D,{}),Object(a.jsx)(I.c,{children:it.map((function(e,t){return Object(a.jsx)(I.a,{path:e.path,exact:e.exact,component:e.component},t)}))})]})})})};n(66);i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(o.a,{store:x,children:Object(a.jsx)(w,{children:Object(a.jsx)(ut,{})})})}),document.getElementById("root"))}],[[67,1,2]]]);
//# sourceMappingURL=main.51071c75.chunk.js.map