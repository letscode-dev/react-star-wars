(this["webpackJsonpstar-wars"]=this["webpackJsonpstar-wars"]||[]).push([[0],[,,,,,,function(e,t,n){"use strict";n.d(t,"f",(function(){return a})),n.d(t,"e",(function(){return c})),n.d(t,"i",(function(){return r})),n.d(t,"h",(function(){return s})),n.d(t,"g",(function(){return i})),n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return u})),n.d(t,"d",(function(){return _})),n.d(t,"j",(function(){return j}));var a="https://",c="http://",r="swapi.dev/api/",s="people",i="/?page=",o=a+r+s+i,l=a+r+s,u=a+r+s+"/?search=",_=".jpg",j="https://starwars-visualguide.com/assets/img/characters"},,,,,,,,,,,function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return l}));var a=n(8),c=n.n(a),r=n(15),s=n(6),i=function(e){return e?e.replace(s.e,s.f):e},o=function(){var e=Object(r.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t);case 3:if((n=e.sent).ok){e.next=7;break}return console.error("Could not fetch.",n.status),e.abrupt("return",!1);case 7:return e.next=9,n.json();case 9:return e.abrupt("return",e.sent);case 12:return e.prev=12,e.t0=e.catch(0),console.error("Could not fetch.",e.t0.message),e.abrupt("return",!1);case 16:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=Object(r.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(t.map((function(e){return fetch(e).then((function(e){return e.json()}))})));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},function(e,t,n){e.exports={container:"ChooseSide_container__1tsOD",item:"ChooseSide_item__FCUpn",item__header:"ChooseSide_item__header__DZ0Az",item__img:"ChooseSide_item__img__35Wfk",item__light:"ChooseSide_item__light__17Jiu",item__dark:"ChooseSide_item__dark__397GP",item__neitral:"ChooseSide_item__neitral__1q-ER"}},,function(e,t,n){e.exports={list__container:"SearchPageInfo_list__container__3-pXm",list__item:"SearchPageInfo_list__item__dXXlq",person__photo:"SearchPageInfo_person__photo__3fnYW",person__name:"SearchPageInfo_person__name__12mVT",person__comment:"SearchPageInfo_person__comment__1IF6U"}},,function(e,t,n){e.exports={wrapper:"PersonInfo_wrapper__o2wOd",list__container:"PersonInfo_list__container__qaVkt",list__item:"PersonInfo_list__item__fOIw_",item__title:"PersonInfo_item__title__3_I3T"}},function(e,t,n){e.exports={wrapper__input:"UiInput_wrapper__input__apDkp",input:"UiInput_input__3wM0R",clear:"UiInput_clear__6FIiR",clear__disabled:"UiInput_clear__disabled__9TXkH"}},function(e,t,n){},,,,,function(e,t,n){e.exports={container:"Favorite_container__2h3Gl",icon:"Favorite_icon__1TykG",counter:"Favorite_counter__1IZtL"}},function(e,t,n){e.exports={container:"Header_container__1B07o",logo:"Header_logo__3aJVT",list__container:"Header_list__container__1tWcY"}},function(e,t,n){e.exports={container:"PeopleNavigation_container__1ASmD",buttons:"PeopleNavigation_buttons__OSUC_"}},function(e,t,n){e.exports={list__container:"PeopleList_list__container__243Xv",list__item:"PeopleList_list__item__2qp6v",person__photo:"PeopleList_person__photo__ulxbB"}},function(e,t,n){e.exports={container:"PersonPhoto_container__10KJe",photo:"PersonPhoto_photo__2ypCg",favorite:"PersonPhoto_favorite__-nvSO"}},function(e,t,n){e.exports={wrapper:"PersonPage_wrapper__2cUtx",person__name:"PersonPage_person__name__1wm6q",container:"PersonPage_container__2Xzxu"}},,,,,,,function(e,t,n){e.exports={text:"ErrorMessage_text__3b_tz",video:"ErrorMessage_video__2tn1_"}},function(e,t,n){e.exports={button:"UiButton_button__29UTV",dark:"UiButton_dark__2IRgP",light:"UiButton_light__3ptZC"}},function(e,t,n){e.exports={link:"PersonLinkBack_link__pYI1R",link__img:"PersonLinkBack_link__img__3hx6m"}},function(e,t,n){e.exports={loader:"UiLoading_loader__3Q1sn",shadow:"UiLoading_shadow__1NPPZ"}},function(e,t,n){e.exports={img:"NotFoundPage_img__12ezg",text:"NotFoundPage_text__3wlD7"}},,,,function(e,t,n){},function(e,t,n){e.exports={input__search:"SearchPage_input__search__2DSir"}},function(e,t,n){e.exports={comment:"FavoritesPage_comment__KRtUz"}},function(e,t,n){e.exports={wrapper:"App_wrapper__1qsbf"}},,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(25),s=n.n(r),i=n(13),o=n(16),l=n(47),u=n(48),_=n(14),j=n(28),p="ADD_PERSON_TO_FAVORITE",d="REMOVE_PERSON_FROM_FAVORITE",b=function(e){var t=localStorage.getItem(e);return null!==t?JSON.parse(t):{}}("store"),m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(_.a)(Object(_.a)({},e),t.payload);case d:return Object(j.omit)(e,[t.payload]);default:return e}},h=Object(o.combineReducers)({favoriteReducer:m}),f=Object(o.createStore)(h,Object(l.composeWithDevTools)(Object(o.applyMiddleware)(u.a)));f.subscribe((function(){var e,t;e="store",t=f.getState().favoriteReducer,localStorage.setItem(e,JSON.stringify(t))}));var O=f,x=n(3),g=n(53),v=n(0),N="light",k="dark",S="neitral",P=c.a.createContext(),w=function(e){var t=e.children,n=Object(g.a)(e,["children"]),c=Object(a.useState)(null),r=Object(x.a)(c,2),s=r[0],i=r[1];return Object(v.jsx)(P.Provider,Object(_.a)(Object(_.a)({value:{theme:s,change:function(e){i(e),function(e){var t=document.querySelector(":root");["header","bgimage"].forEach((function(n){t.style.setProperty("--theme-default-".concat(n),"var(--theme-".concat(e,"-").concat(n,")"))}))}(e)}}},n),{},{children:t}))},F=function(){return Object(a.useContext)(P)},I=n(5),C=n(4),y=n.p+"static/media/bookmark.b17a5944.svg",E=n(29),R=n.n(E),U=function(){var e=Object(a.useState)(0),t=Object(x.a)(e,2),n=t[0],c=t[1],r=Object(i.c)((function(e){return e.favoriteReducer}));return Object(a.useEffect)((function(){var e=Object.keys(r).length;e.toString().length>2?c("..."):c(e)})),Object(v.jsx)("div",{className:R.a.container,children:Object(v.jsxs)(I.b,{to:"/favorites",children:[Object(v.jsx)("span",{className:R.a.counter,children:n}),Object(v.jsx)("img",{className:R.a.icon,src:y,alt:"Favorites"})]})})},A=n.p+"static/media/space-station.7a027c6e.svg",D=n.p+"static/media/droid.e59cd9ff.svg",L=n.p+"static/media/lightsaber.eb7d4cd6.svg",T=n(30),B=n.n(T),H=function(){var e=Object(a.useState)(A),t=Object(x.a)(e,2),n=t[0],c=t[1],r=F();return Object(a.useEffect)((function(){switch(r.theme){case N:c(L);break;case k:c(A);break;case S:c(D);break;default:c(A)}}),[r]),Object(v.jsxs)("div",{className:B.a.container,children:[Object(v.jsx)("img",{className:B.a.logo,src:n,alt:"Star Wars"}),Object(v.jsxs)("ul",{className:B.a.list__container,children:[Object(v.jsx)("li",{children:Object(v.jsx)(I.c,{to:"/",exact:!0,children:"Home"})}),Object(v.jsx)("li",{children:Object(v.jsx)(I.c,{to:"/people/?page=1",children:"People"})}),Object(v.jsx)("li",{children:Object(v.jsx)(I.c,{to:"/search",children:"Search"})}),Object(v.jsx)("li",{children:Object(v.jsx)(I.c,{to:"/not-found",children:"Not Found"})}),Object(v.jsx)("li",{children:Object(v.jsx)(I.c,{to:"/fail",children:"Fail"})})]}),Object(v.jsx)(U,{})]})},M=n(12),q=n.n(M),J=n.p+"static/media/light-side.eebc5217.jpg",V=n.p+"static/media/dark-side.e0f8cab7.jpg",z=n.p+"static/media/falcon.c1d0a8d1.jpg",G=n(18),W=n.n(G),X=function(e){var t=e.classes,n=e.theme,a=e.text,c=e.img,r=F();return Object(v.jsxs)("div",{className:q()(W.a.item,t),onClick:function(){return r.change(n)},children:[Object(v.jsx)("div",{className:W.a.item__header,children:a}),Object(v.jsx)("img",{className:W.a.item__img,src:c,alt:a})]})},Y=function(){var e=[{theme:N,text:"Light Side",img:J,classes:W.a.item__light},{theme:k,text:"Dark Side",img:V,classes:W.a.item__dark},{theme:S,text:"I'm Han Solo",img:z,classes:W.a.item__neitral}];return Object(v.jsx)("div",{className:W.a.container,children:e.map((function(e,t){var n=e.theme,a=e.text,c=e.img,r=e.classes;return Object(v.jsx)(X,{theme:n,text:a,img:c,classes:r},t)}))})},Z=function(){return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("h1",{className:"header__text",children:"Choose your side"}),Object(v.jsx)(Y,{})]})},K=n(8),Q=n.n(K),$=n(15),ee=(n(24),n(49)),te=n.n(ee),ne=function(e){var t=e.src,n=e.playbackRate,c=void 0===n?1:n,r=e.classes,s=Object(a.useRef)(null);return Object(a.useEffect)((function(){s.current.playbackRate=c}),[]),Object(v.jsx)("video",{loop:!0,autoPlay:!0,muted:!0,ref:s,className:q()(te.a.video,r),children:Object(v.jsx)("source",{src:t})})},ae=n.p+"static/media/han-solo.db435084.mp4",ce=n(41),re=n.n(ce),se=function(){return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("p",{className:re.a.text,children:["The dark side of the force has won. ",Object(v.jsx)("br",{}),"We cannot display data.",Object(v.jsx)("br",{}),"Come back when we fix everything"]}),Object(v.jsx)(ne,{src:ae,classes:re.a.video})]})},ie=function(e){return function(t){var n=Object(a.useState)(!1),c=Object(x.a)(n,2),r=c[0],s=c[1];return Object(v.jsx)(v.Fragment,{children:r?Object(v.jsx)(se,{}):Object(v.jsx)(e,Object(_.a)({setErrorApi:s},t))})}},oe=n(42),le=n.n(oe),ue=function(e){var t=e.text,n=e.onClick,a=e.disabled,c=e.theme,r=void 0===c?"dark":c,s=e.classes;return Object(v.jsx)("button",{onClick:n,className:q()(le.a.button,le.a[r],s),disabled:a,children:t})},_e=n(31),je=n.n(_e),pe=function(e){var t=e.getResponse,n=e.prevPage,a=e.nextPage,c=e.counterPage;return Object(v.jsxs)("div",{className:je.a.container,children:[Object(v.jsx)(I.b,{to:"/people/?page=".concat(c-1),className:je.a.buttons,children:Object(v.jsx)(ue,{text:"Previous",onClick:function(){return t(n)},disabled:!n})}),Object(v.jsx)(I.b,{to:"/people/?page=".concat(c+1),className:je.a.buttons,children:Object(v.jsx)(ue,{text:"Next",onClick:function(){return t(a)},disabled:!a})})]})},de=n(32),be=n.n(de),me=function(e){var t=e.people;return Object(v.jsx)("ul",{className:be.a.list__container,children:t.map((function(e){var t=e.id,n=e.name,a=e.img;return Object(v.jsx)("li",{className:be.a.list__item,children:Object(v.jsxs)(I.b,{to:"/people/".concat(t),children:[Object(v.jsx)("img",{className:be.a.person__photo,src:a,alt:n}),Object(v.jsx)("p",{children:n})]})},t)}))})},he=n(17),fe=n(6),Oe=function(e){var t=e.lastIndexOf(fe.g),n=e.slice(t+fe.g.length,e.length);return Number(n)},xe=function(e,t){var n=function(e){return-1!==e.indexOf(fe.f)?fe.f:fe.e}(e);return e.replace(n+fe.i+t,"").replace(/\//g,"")},ge=function(e){return xe(e,fe.h)},ve=function(e){return"".concat(fe.j,"/").concat(e+fe.d)},Ne=ie((function(e){var t=e.setErrorApi,n=Object(a.useState)(null),c=Object(x.a)(n,2),r=c[0],s=c[1],i=Object(a.useState)(null),o=Object(x.a)(i,2),l=o[0],u=o[1],_=Object(a.useState)(null),j=Object(x.a)(_,2),p=j[0],d=j[1],b=Object(a.useState)(1),m=Object(x.a)(b,2),h=m[0],f=m[1],O=new URLSearchParams(Object(C.g)().search).get("page"),g=function(){var e=Object($.a)(Q.a.mark((function e(n){var a,c;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(he.b)(n);case 2:(a=e.sent)?(c=a.results.map((function(e){var t=e.name,n=e.url,a=ge(n);return{id:a,name:t,img:ve(a)}})),s(c),d(Object(he.a)(a.next)),u(Object(he.a)(a.previous)),f(Oe(n)),t(!1)):t(!0);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){g(fe.a+O)}),[]),Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(pe,{getResponse:g,prevPage:l,nextPage:p,counterPage:h}),r&&Object(v.jsx)(me,{people:r})]})})),ke=n(27),Se=n.p+"static/media/favorite.566cdda1.svg",Pe=n.p+"static/media/favorite-fill.d5b58d62.svg",we=n(33),Fe=n.n(we),Ie=function(e){var t=e.personId,n=e.personPhoto,a=e.personName,c=e.personFavorite,r=e.setPersonFavorite,s=Object(i.b)();return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)("div",{className:Fe.a.container,children:[Object(v.jsx)("img",{className:Fe.a.photo,src:n,alt:a}),Object(v.jsx)("img",{src:c?Pe:Se,onClick:function(){var e;c?(s(function(e){return{type:d,payload:e}}(t)),r(!1)):(s((e=Object(ke.a)({},t,{name:a,img:n}),{type:p,payload:e})),r(!0))},className:Fe.a.favorite,alt:"Add to favorite"})]})})},Ce=n(22),ye=n.n(Ce),Ee=function(e){var t=e.personInfo;return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)("div",{className:ye.a.wrapper,children:Object(v.jsx)("ul",{className:ye.a.list__container,children:t.map((function(e){var t=e.title,n=e.data;return n&&Object(v.jsxs)("li",{className:ye.a.list__item,children:[Object(v.jsx)("span",{className:ye.a.item__title,children:t}),": ",n]},t)}))})})})},Re=n.p+"static/media/back.3a33cbdb.svg",Ue=n(43),Ae=n.n(Ue),De=function(){var e=Object(C.f)();return Object(v.jsxs)("a",{href:"#",onClick:function(t){t.preventDefault(),e.goBack()},className:Ae.a.link,children:[Object(v.jsx)("img",{className:Ae.a.link__img,src:Re,alt:"Go back"}),Object(v.jsx)("span",{children:"Go back"})]})},Le=n.p+"static/media/loader-black.34c09f0b.svg",Te=n.p+"static/media/loader-white.8d8876f8.svg",Be=n.p+"static/media/loader-blue.983ad521.svg",He=n(44),Me=n.n(He),qe=function(e){var t=e.theme,n=void 0===t?"white":t,c=e.isShadow,r=void 0===c||c,s=e.classes,i=Object(a.useState)(null),o=Object(x.a)(i,2),l=o[0],u=o[1];return Object(a.useEffect)((function(){switch(n){case"black":u(Le);break;case"white":u(Te);break;case"blue":u(Be);break;default:u(Le)}}),[]),Object(v.jsx)("img",{className:q()(Me.a.loader,r&&Me.a.shadow,s),src:l,alt:"Loader"})},Je=n(34),Ve=n.n(Je),ze=c.a.lazy((function(){return n.e(3).then(n.bind(null,69))})),Ge=ie((function(e){var t=e.match,n=e.setErrorApi,c=Object(a.useState)(null),r=Object(x.a)(c,2),s=r[0],o=r[1],l=Object(a.useState)(null),u=Object(x.a)(l,2),_=u[0],j=u[1],p=Object(a.useState)(null),d=Object(x.a)(p,2),b=d[0],m=d[1],h=Object(a.useState)(null),f=Object(x.a)(h,2),O=f[0],g=f[1],N=Object(a.useState)(null),k=Object(x.a)(N,2),S=k[0],P=k[1],w=Object(a.useState)(!1),F=Object(x.a)(w,2),I=F[0],C=F[1],y=Object(i.c)((function(e){return e.favoriteReducer}));return Object(a.useEffect)((function(){Object($.a)(Q.a.mark((function e(){var a,c;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.params.id,y[a]?C(!0):C(!1),o(a),e.next=5,Object(he.b)("".concat(fe.b,"/").concat(a,"/"));case 5:(c=e.sent)?(j([{title:"Height",data:c.height},{title:"Mass",data:c.mass},{title:"Hair Color",data:c.hair_color},{title:"Skin Color",data:c.skin_color},{title:"Eye Color",data:c.eye_color},{title:"Birth Year",data:c.birth_year},{title:"Gender",data:c.gender}]),m(c.name),g(ve(a)),c.films.length&&P(c.films),n(!1)):n(!0);case 7:case"end":return e.stop()}}),e)})))()}),[t]),Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(De,{}),Object(v.jsxs)("div",{className:Ve.a.wrapper,children:[Object(v.jsx)("span",{className:Ve.a.person__name,children:b}),Object(v.jsxs)("div",{className:Ve.a.container,children:[Object(v.jsx)(Ie,{personId:s,personPhoto:O,personName:b,personFavorite:I,setPersonFavorite:C}),_&&Object(v.jsx)(Ee,{personInfo:_}),S&&Object(v.jsx)(a.Suspense,{fallback:Object(v.jsx)(qe,{}),children:Object(v.jsx)(ze,{personFilms:S})})]})]})]})})),We=n.p+"static/media/cancel.00e5d25a.svg",Xe=n(23),Ye=n.n(Xe),Ze=function(e){var t=e.value,n=e.handleInputChange,a=e.placeholder,c=e.classes;return Object(v.jsxs)("div",{className:q()(Ye.a.wrapper__input,c),children:[Object(v.jsx)("input",{type:"text",value:t,onChange:function(e){return n(e.target.value)},placeholder:a,className:Ye.a.input}),Object(v.jsx)("img",{onClick:function(){return t&&n("")},src:We,className:q()(Ye.a.clear,!t&&Ye.a.clear__disabled),alt:"Clear"})]})},Ke=n(20),Qe=n.n(Ke),$e=function(e){var t=e.people;return Object(v.jsx)(v.Fragment,{children:t.length?Object(v.jsx)("ul",{className:Qe.a.list__container,children:t.map((function(e){var t=e.id,n=e.name,a=e.img;return Object(v.jsx)("li",{className:Qe.a.list__item,children:Object(v.jsxs)(I.b,{to:"/people/".concat(t),children:[Object(v.jsx)("img",{className:Qe.a.person__photo,src:a,alt:n}),Object(v.jsx)("p",{className:Qe.a.person__name,children:n})]})},t)}))}):Object(v.jsx)("h2",{className:Qe.a.person__comment,children:"No results"})})},et=n(50),tt=n.n(et),nt=ie((function(e){var t=e.setErrorApi,n=Object(a.useState)(""),c=Object(x.a)(n,2),r=c[0],s=c[1],i=Object(a.useState)([]),o=Object(x.a)(i,2),l=o[0],u=o[1],_=function(){var e=Object($.a)(Q.a.mark((function e(n){var a,c;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(he.b)(fe.c+n);case 2:(a=e.sent)?(c=a.results.map((function(e){var t=e.name,n=e.url,a=ge(n);return{id:a,name:t,img:ve(a)}})),u(c),t(!1)):t(!0);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){_("")}),[]);var p=Object(a.useCallback)(Object(j.debounce)((function(e){return _(e)}),300),[]);return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("h1",{className:"header__text",children:"Search"}),Object(v.jsx)(Ze,{value:r,handleInputChange:function(e){s(e),p(e)},placeholder:"Input character's name",classes:tt.a.input__search}),Object(v.jsx)($e,{people:l})]})})),at=n(51),ct=n.n(at),rt=function(){var e=Object(a.useState)([]),t=Object(x.a)(e,2),n=t[0],c=t[1],r=Object(i.c)((function(e){return e.favoriteReducer}));return Object(a.useEffect)((function(){var e=Object.entries(r);if(e.length){var t=e.map((function(e){return Object(_.a)({id:e[0]},e[1])}));c(t)}}),[]),Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("h1",{className:"header__text",children:"Favorites"}),n.length?Object(v.jsx)(me,{people:n}):Object(v.jsx)("h2",{className:ct.a.comment,children:"No data"})]})},st=n.p+"static/media/not-found.1062f5e4.png",it=n(45),ot=n.n(it),lt=function(){var e=Object(C.g)();return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("img",{className:ot.a.img,src:st,alt:"Not Found"}),Object(v.jsxs)("p",{className:ot.a.text,children:["No match for ",Object(v.jsx)("u",{children:e.pathname})]})]})},ut=[{path:"/",exact:!0,component:Z},{path:"/people",exact:!0,component:Ne},{path:"/people/:id",component:Ge},{path:"/search",exact:!0,component:nt},{path:"/favorites",exact:!0,component:rt},{path:"/fail",exact:!0,component:se},{path:"/not-found",exact:!0,component:lt},{path:"*",exact:!1,component:lt}],_t=n(52),jt=n.n(_t),pt=function(){return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(I.a,{basename:"/".concat("react-star-wars","/"),children:Object(v.jsxs)("div",{className:jt.a.wrapper,children:[Object(v.jsx)(H,{}),Object(v.jsx)(C.c,{children:ut.map((function(e,t){return Object(v.jsx)(C.a,{path:e.path,exact:e.exact,component:e.component},t)}))})]})})})};n(66);s.a.render(Object(v.jsx)(c.a.StrictMode,{children:Object(v.jsx)(i.a,{store:O,children:Object(v.jsx)(w,{children:Object(v.jsx)(pt,{})})})}),document.getElementById("root"))}],[[67,1,2]]]);
//# sourceMappingURL=main.c5b94c33.chunk.js.map