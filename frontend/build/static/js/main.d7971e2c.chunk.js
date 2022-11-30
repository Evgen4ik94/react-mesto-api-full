(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{16:function(e,t,n){},29:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),o=n(18),s=n.n(o),i=(n(29),n(24)),r=n(2),u=n(3),l=n.p+"static/media/header-logo.bbe2a6ea.svg",p=n(8),d=n(0);var j=function(e){var t=e.userEmail,n=e.onLogOut;return Object(d.jsxs)("header",{className:"header",children:[Object(d.jsx)("img",{src:l,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f",className:"header__logo"}),Object(d.jsx)(u.b,{path:"/sign-up",children:Object(d.jsx)(p.b,{to:"/sign-in",className:"header__auth",children:"\u0412\u043e\u0439\u0442\u0438"})}),Object(d.jsx)(u.b,{path:"/sign-in",children:Object(d.jsx)(p.b,{to:"/sign-up",className:"header__auth",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})}),Object(d.jsx)(u.b,{exact:!0,path:"/",children:Object(d.jsxs)("div",{className:"header__profile",children:[Object(d.jsx)("p",{className:"header__email",children:t}),Object(d.jsx)(p.b,{to:"/sign-in",className:"header__sign-out",onClick:n,children:"\u0412\u044b\u0439\u0442\u0438"})]})})]})},b=c.a.createContext();var m=function(e){var t=c.a.useContext(b),n=e.card.owner._id===t._id,a="photo__button-delete ".concat(n?"photo__button-delete_active":""),o=e.card.likes.some((function(e){return e._id===t._id})),s="photo__button-like ".concat(o?"photo__button-like_active":"");return Object(d.jsxs)("li",{className:"photo",children:[Object(d.jsx)("button",{className:a,onClick:function(){e.onCardDelete(e.card._id)},type:"button"}),Object(d.jsx)("img",{className:"photo__item",onClick:function(){e.onCardClick(e.card)},src:e.card.link,alt:e.card.name}),Object(d.jsxs)("div",{className:"photo__description",children:[Object(d.jsx)("h2",{className:"photo__title",children:e.card.name}),Object(d.jsxs)("div",{className:"photo__likebox",children:[Object(d.jsx)("button",{className:s,onClick:function(){e.onCardLike(e.card)},type:"button"}),Object(d.jsx)("div",{className:"photo__count",children:e.likeCounter})]})]})]})};var h=function(e){var t=c.a.useContext(b);return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("section",{className:"profile",children:[Object(d.jsx)("div",{className:"profile__avatar",children:Object(d.jsx)("button",{onClick:e.onEditAvatar,className:"profile__avatar-button",children:Object(d.jsx)("img",{src:t.avatar,alt:"\u0424\u043e\u0442\u043e \u043f\u0440\u043e\u0444\u0438\u043b\u044f",className:"profile__image"})})}),Object(d.jsxs)("div",{className:"profile__info",children:[Object(d.jsxs)("div",{className:"profile__name-box",children:[Object(d.jsx)("h1",{className:"profile__name text",children:t.name||""}),Object(d.jsx)("button",{className:"profile__button profile__button-edit",onClick:e.onEditProfile,type:"button"})]}),Object(d.jsx)("div",{className:"profile__prof text",children:t.about||""})]}),Object(d.jsx)("button",{className:"profile__button profile__button-add",onClick:e.onAddPlace,type:"button"})]}),Object(d.jsx)("section",{className:"gallery",children:Object(d.jsx)("ul",{className:"gallery__list",children:e.cards.map((function(t){return Object(d.jsx)(m,{card:t,likeCounter:t.likes.length,onCardClick:e.onCardClick,onCardLike:e.onCardLike,onCardDelete:e.onCardDelete},t._id)}))})})]})};var _=function(){var e=(new Date).getFullYear();return Object(d.jsx)("footer",{className:"footer",children:Object(d.jsxs)("p",{className:"footer__author",children:["\xa9 ",e," \u0415\u0432\u0433\u0435\u043d\u0438\u0439 \u041c\u0438\u043b\u044f\u043a\u043e\u0432"]})})};var O=function(e){return Object(d.jsx)("div",{className:"popup popup_type_fullscreen-image ".concat(e.card.link&&"popup_opened"),children:Object(d.jsxs)("figure",{className:"popup__image-container",children:[Object(d.jsx)("button",{className:"popup__button-close",onClick:e.onClose,type:"button"}),Object(d.jsx)("img",{className:"popup__image",src:"".concat(e.card.link),alt:e.card.name}),Object(d.jsx)("figcaption",{className:"popup__image-caption",children:e.card.name})]})})},f=n(21),x=n(22),g=new(function(){function e(t){Object(f.a)(this,e),this._url=t.url,this._headers=t.headers}return Object(x.a)(e,[{key:"setToken",value:function(e){this._headers.authorization="Bearer ".concat(e)}},{key:"_request",value:function(e,t){return fetch(e,t).then(this._responseResult)}},{key:"_responseResult",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}},{key:"getInitialCards",value:function(){return this._request("".concat(this._url,"/cards"),{method:"GET",headers:this._headers})}},{key:"getUserData",value:function(){return this._request("".concat(this._url,"/users/me"),{method:"GET",headers:this._headers})}},{key:"addNewCard",value:function(e){return this._request("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify(e)})}},{key:"deleteCard",value:function(e){return this._request("".concat(this._url,"/cards/").concat(e),{method:"DELETE",headers:this._headers})}},{key:"updateUserData",value:function(e){return this._request("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify(e)})}},{key:"changeLikeCardStatus",value:function(e,t){return t?this.addLike(e):this.deleteLike(e)}},{key:"addLike",value:function(e){return this._request("".concat(this._url,"/cards/likes/").concat(e),{method:"PUT",headers:this._headers})}},{key:"deleteLike",value:function(e){return this._request("".concat(this._url,"/cards/likes/").concat(e),{method:"DELETE",headers:this._headers})}},{key:"updateAvatar",value:function(e){return this._request("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify(e)})}}]),e}())({url:"https://api.mesto-exo.nomoredomains.icu",headers:{"Content-Type":"application/json"}});var v=function(e){var t=e.isOpen,n=e.onClose,a=e.onSubmit,c=e.name,o=e.title,s=e.submitText,i=e.children;return Object(d.jsx)("div",{className:"popup ".concat(t&&"popup_opened"),children:Object(d.jsx)("div",{className:"popup__container popup__container_type_".concat(c),children:Object(d.jsxs)("form",{onSubmit:a,className:"popup__form",name:c,children:[Object(d.jsx)("button",{className:"popup__button-close",onClick:n,type:"button"}),Object(d.jsx)("h2",{className:"popup__head",children:o}),i,Object(d.jsx)("button",{className:"popup__button-submit",type:"submit",children:s})]})})})};var N=function(e){var t=c.a.useContext(b),n=c.a.useState(""),a=Object(r.a)(n,2),o=a[0],s=a[1],i=c.a.useState(""),u=Object(r.a)(i,2),l=u[0],p=u[1],j=c.a.useState("\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"),m=Object(r.a)(j,2),h=m[0],_=m[1];return c.a.useEffect((function(){!0===e.isOpen&&(s(t.name),p(t.about))}),[e.isOpen]),Object(d.jsxs)(v,{name:"form",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",submitText:h,isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),_("\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."),e.onUpdateUser({name:o,about:l}).then((function(){return e.onClose()})).catch((function(e){return console.log(e)})).finally((function(){_("\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c")}))},children:[Object(d.jsx)("input",{className:"popup__input popup__input_type_name",id:"name-item",type:"text",name:"name",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f",minLength:"2",maxLength:"40",value:o,onChange:function(e){s(e.target.value)},required:!0}),Object(d.jsx)("span",{className:"popup__input-error",id:"name-item-error"}),Object(d.jsx)("input",{className:"popup__input popup__input_type_about",id:"about-item",type:"text",name:"about",placeholder:"\u041e \u0441\u0435\u0431\u0435",minLength:"2",maxLength:"200",value:l,onChange:function(e){p(e.target.value)},required:!0}),Object(d.jsx)("span",{className:"popup__input-error",id:"about-item-error"})]})};var C=function(e){var t=c.a.useState("\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"),n=Object(r.a)(t,2),a=n[0],o=n[1],s=c.a.useRef();function i(){e.onClose(),setTimeout((function(){return s.current.value=""}),200)}return Object(d.jsxs)(v,{onSubmit:function(t){t.preventDefault(),o("\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."),e.onUpdateAvatar({avatar:s.current.value}).then((function(){i()})).finally((function(){o("\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c")}))},name:"avatar",title:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",submitText:a,isOpen:e.isOpen,onClose:i,children:[Object(d.jsx)("input",{ref:s,className:"popup__input popup__input_type_link",id:"avatar-item",type:"url",name:"avatar",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435",required:!0}),Object(d.jsx)("span",{className:"popup__input-error",id:"avatar-item-error"})]})};var k=function(e){var t=e.isOpen,n=e.onClose,a=e.card,o=e.onSubmit,s=c.a.useState("\u0414\u0430"),i=Object(r.a)(s,2),u=i[0],l=i[1];return Object(d.jsx)(v,{name:"delete",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",formName:"delete-card",isOpen:t,onClose:n,submitText:u,onSubmit:function(e){e.preventDefault(),l("\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435..."),o(a).then((function(){l("\u0414\u0430")}))}})};var y=function(e){var t=c.a.useState("\u0421\u043e\u0437\u0434\u0430\u0442\u044c"),n=Object(r.a)(t,2),a=n[0],o=n[1],s=c.a.useState(""),i=Object(r.a)(s,2),u=i[0],l=i[1],p=c.a.useState(""),j=Object(r.a)(p,2),b=j[0],m=j[1];function h(){e.onClose(),setTimeout((function(){l(""),m("")}),20)}return Object(d.jsxs)(v,{name:"form",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",submitText:a,isOpen:e.isOpen,onClose:h,onSubmit:function(t){t.preventDefault(),o("\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435..."),e.onAddPlace({name:u,link:b}).then((function(){return h()})).finally((function(){o("\u0421\u043e\u0437\u0434\u0430\u0442\u044c")}))},children:[Object(d.jsx)("input",{className:"popup__input popup__input_type_caption",id:"title-item",type:"text",name:"name",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",minLength:"1",maxLength:"30",value:u,onChange:function(e){l(e.target.value)},required:!0}),Object(d.jsx)("span",{className:"popup__input-error",id:"title-item-error"}),Object(d.jsx)("input",{className:"popup__input popup__input_type_link",id:"link-item",type:"url",name:"link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435",value:b,onChange:function(e){m(e.target.value)},required:!0}),Object(d.jsx)("span",{className:"popup__input-error",id:"link-item-error"})]})},S=n(12),T=n(23),L=["component"];var w=function(e){var t=e.component,n=Object(T.a)(e,L);return Object(d.jsx)(u.b,{children:function(){return n.loggedIn?Object(d.jsx)(t,Object(S.a)({},n)):Object(d.jsx)(u.a,{to:"/sign-in"})}})};n(16);var E=function(e){var t=e.section,n=e.title,a=e.submit,c=e.emailValue,o=e.passwordValue,s=e.onChange,i=e.submitText;return Object(d.jsx)("section",{className:t,children:Object(d.jsxs)("div",{className:"sign",children:[Object(d.jsx)("h2",{className:"sign__welcome",children:n}),Object(d.jsxs)("form",{className:"sign__form",onSubmit:a,children:[Object(d.jsx)("input",{className:"sign__item",id:"email",name:"email",type:"email",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 E-mail",value:c,onChange:s,required:!0}),Object(d.jsx)("input",{className:"sign__item",id:"password",name:"password",type:"password",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c",value:o,onChange:s,autoComplete:"off",minLength:"5",required:!0}),Object(d.jsx)("button",{className:"sign__button",type:"submit",children:i})]})]})})};var D=function(e){var t=e.onLogin,n=c.a.useState(""),a=Object(r.a)(n,2),o=a[0],s=a[1],i=c.a.useState(""),u=Object(r.a)(i,2),l=u[0],p=u[1];return Object(d.jsx)(E,{section:"login",title:"\u0412\u0445\u043e\u0434",submit:function(e){e.preventDefault(),o&&l&&t(o,l)},onChange:function(e){"email"===e.target.name?s(e.target.value):"password"===e.target.name&&p(e.target.value)},submitText:"\u0412\u043e\u0439\u0442\u0438",emailValue:o,passwordValue:l})};var P=function(e){var t=e.onRegister,n=c.a.useState(""),a=Object(r.a)(n,2),o=a[0],s=a[1],i=c.a.useState(""),u=Object(r.a)(i,2),l=u[0],j=u[1];return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(E,{section:"register",title:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",emailValue:o,passwordValue:l,submit:function(e){e.preventDefault(),t(o,l)},onChange:function(e){"email"===e.target.name?s(e.target.value):"password"===e.target.name&&j(e.target.value)},submitText:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"}),Object(d.jsx)("div",{className:"sign__sign-in",children:Object(d.jsx)(p.b,{to:"sign-in",className:"sign__login-link",children:"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b? \u0412\u043e\u0439\u0442\u0438."})})]})};var q=function(e){var t=e.isOpen,n=e.popupName,c=e.onClose,o=e.children,s=e.isImagePopup;return Object(a.useEffect)((function(){if(t)return document.addEventListener("keydown",e),function(){return document.removeEventListener("keydown",e)};function e(e){"Escape"===e.key&&c()}}),[t,c]),Object(d.jsx)("section",{className:"popup ".concat(t?"popup_opened":""),onClick:function(e){e.target===e.currentTarget&&c()},children:Object(d.jsxs)("div",{className:"".concat(s?"popup_type_fullscreen-image":"popup__container popup__container_type_".concat(n)),children:[o,Object(d.jsx)("button",{className:"popup__button-close",type:"button",onClick:c})]})})},A=n.p+"static/media/OK.a9eb6caf.svg",U=n.p+"static/media/REJECT.d4ce2a26.svg";var I=function(e){var t=e.namePopup,n=e.isOpen,a=e.onClose,c=e.isSuccess;return Object(d.jsx)(q,{popupName:t,isOpen:n,onClose:a,children:Object(d.jsxs)("figure",{className:"infoTooltip__figure",children:[Object(d.jsx)("img",{className:"infoTooltip__img",src:c?A:U,alt:"\u0421\u0442\u0430\u0442\u0443\u0441 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438"}),Object(d.jsx)("figcaption",{className:"infoTooltip__caption",children:c?"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!":"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437."})]})})},F=function(e){var t=e.url,n=e.method,a=void 0===n?"POST":n,c=e.token,o=e.body,s=Object(S.a)({method:a,headers:Object(S.a)({"Content-Type":"application/json"},!!c&&{Authorization:"Bearer ".concat(c)})},!!o&&{body:JSON.stringify(o)});return fetch("".concat("https://api.mesto-exo.nomoredomains.icu").concat(t),s).then((function(e){return e.ok?e.json():Promise.reject(e.status)}))};n(39);var J=function(){return Object(d.jsx)("div",{className:"notFound page__container",children:Object(d.jsxs)("p",{className:"notFound__note",children:["\u041a\u0430\u0436\u0435\u0442\u0441\u044f \u0447\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435\xa0\u0442\u0430\u043a! \u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430, \u043a\u043e\u0442\u043e\u0440\u0443\u044e \u0432\u044b\xa0\u0437\u0430\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u0435\u0442\u0435, \u043d\u0435\xa0\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442. \u0412\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u043e\u043d\u0430 \u0443\u0441\u0442\u0430\u0440\u0435\u043b\u0430, \u0431\u044b\u043b\u0430 \u0443\u0434\u0430\u043b\u0435\u043d\u0430, \u0438\u043b\u0438 \u0431\u044b\u043b \u0432\u0432\u0435\u0434\u0435\u043d \u043d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u0430\u0434\u0440\u0435\u0441 \u0432\xa0\u0430\u0434\u0440\u0435\u0441\u043d\u043e\u0439 \u0441\u0442\u0440\u043e\u043a\u0435.",Object(d.jsx)(p.b,{className:"notFound__link",to:"/",children:Object(d.jsx)("button",{type:"submit",className:"notFound__button",children:"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e"})})]})})};var R=function(){var e=Object(a.useState)(!1),t=Object(r.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(!1),s=Object(r.a)(o,2),l=s[0],p=s[1],m=Object(a.useState)(!1),f=Object(r.a)(m,2),x=f[0],v=f[1],S=Object(a.useState)(!1),T=Object(r.a)(S,2),L=T[0],E=T[1],q=Object(a.useState)({name:"",link:""}),A=Object(r.a)(q,2),U=A[0],R=A[1],V=Object(a.useState)({}),B=Object(r.a)(V,2),z=B[0],G=B[1],H=Object(a.useState)(!1),K=Object(r.a)(H,2),M=K[0],Y=K[1],Q=Object(a.useState)([]),W=Object(r.a)(Q,2),X=W[0],Z=W[1],$=Object(a.useState)(""),ee=Object(r.a)($,2),te=ee[0],ne=ee[1],ae=Object(a.useState)(!1),ce=Object(r.a)(ae,2),oe=ce[0],se=ce[1],ie=Object(a.useState)(!1),re=Object(r.a)(ie,2),ue=re[0],le=re[1],pe=Object(a.useState)(!1),de=Object(r.a)(pe,2),je=de[0],be=de[1],me=Object(a.useState)(""),he=Object(r.a)(me,2),_e=he[0],Oe=he[1],fe=Object(u.g)();function xe(){c(!1),p(!1),v(!1),E(!1),Y(!1),R({name:"",link:""}),be(!1)}return Object(a.useEffect)((function(){oe&&(!function(){var e=localStorage.getItem("jwt");e&&(g.setToken(e),g.getUserData().then((function(e){se(!0),G(e.data.email),fe.push("/")})).catch((function(e){console.log("\u0412\u043e\u0437\u043d\u0438\u043a\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0435 \u0442\u043e\u043a\u0435\u043d\u0430:",e)})))}(),Promise.all([g.getUserData(),g.getInitialCards()]).then((function(e){var t=Object(r.a)(e,2),n=t[0],a=t[1];G(n),Z(a)})).catch((function(e){return console.log(e)})))}),[oe]),Object(d.jsxs)(b.Provider,{value:z,children:[Object(d.jsx)(j,{userEmail:_e,onLogOut:function(){localStorage.removeItem("jwt"),se(!1),Oe(""),fe.push("/sign-in"),console.log("\u0412\u0440\u0435\u043c\u044f \u0432\u044b\u0445\u043e\u0434\u0430:",(new Date).toLocaleTimeString())}}),Object(d.jsxs)(u.d,{children:[Object(d.jsx)(w,{component:h,loggedIn:oe,exact:!0,path:"/",onCardClick:function(e){R(e),Y(!0)},onEditProfile:function(){c(!0)},onAddPlace:function(){p(!0)},onEditAvatar:function(){v(!0)},onCardLike:function(e){var t=e.likes.some((function(e){return e._id===z._id}));g.changeLikeCardStatus(e._id,!t).then((function(t){Z((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043b\u0430\u0439\u043a\u0430 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438: ",e)}))},onCardDelete:function(e){ne(e),E(!0)},cards:X}),Object(d.jsx)(u.b,{path:"/sign-up",children:Object(d.jsx)(P,{onRegister:function(e,t){(function(e,t){return F({url:"/signup",body:{email:e,password:t}})})(e,t).then((function(e){e&&(console.log("\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f \u043f\u0440\u043e\u0448\u043b\u0430 \u0443\u0441\u043f\u0435\u0448\u043d\u043e!"),le(!0),be(!0),fe.push("/sign-in"))})).catch((function(e){be(!0),le(!1),console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438:",e)}))}})}),Object(d.jsx)(u.b,{path:"/sign-in",children:Object(d.jsx)(D,{onLogin:function(e,t){(function(e,t){return F({url:"/signin",body:{email:e,password:t}}).then((function(e){if(e.token)return localStorage.setItem("jwt",e.token),e}))})(e,t).then((function(t){var n=t.token;t.token&&(localStorage.setItem("jwt",n),g.setToken(n),se(!0),Oe(e),fe.push("/"),console.log("\u0412\u0440\u0435\u043c\u044f \u0432\u0445\u043e\u0434\u0430:",(new Date).toLocaleTimeString()))})).catch((function(e){be(!0),le(!1),console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u0432\u0445\u043e\u0434\u0430 \u0432 \u0441\u0438\u0441\u0442\u0435\u043c\u0443:",e)}))}})}),Object(d.jsx)(u.b,{path:"*",children:Object(d.jsx)(J,{})}),Object(d.jsx)(u.b,{children:oe?Object(d.jsx)(u.a,{to:"/"}):Object(d.jsx)(u.a,{to:"/sign-up"})})]}),Object(d.jsx)(_,{}),Object(d.jsx)(O,{card:U,isOpen:M,onClose:xe}),Object(d.jsx)(N,{isOpen:n,onClose:xe,onUpdateUser:function(e){return g.updateUserData(e).then((function(e){G(e)})).catch((function(e){return alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",e)}))}}),Object(d.jsx)(y,{isOpen:l,onClose:xe,onAddPlace:function(e){return g.addNewCard(e).then((function(e){Z([e].concat(Object(i.a)(X)))})).catch((function(e){return alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0438 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438",e)}))}}),Object(d.jsx)(k,{isOpen:L,onClose:xe,onSubmit:function(e){return g.deleteCard(e).then((function(){Z((function(t){return t.filter((function(t){return t._id!==e}))})),xe()})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0438 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438: ".concat(e))}))},card:te}),Object(d.jsx)(C,{isOpen:x,onClose:xe,onUpdateAvatar:function(e){return g.updateAvatar(e).then((function(e){G(e)})).catch((function(e){return alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0438 \u0430\u0432\u0430\u0442\u0430\u0440\u0430",e)}))}}),Object(d.jsx)(I,{namePopup:"infoTooltip",isSuccess:ue,isOpen:je,onClose:xe})]})};s.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(p.a,{children:Object(d.jsx)(R,{})})}),document.getElementById("page"))}},[[40,1,2]]]);
//# sourceMappingURL=main.d7971e2c.chunk.js.map