(()=>{"use strict";var t=document.querySelector(".profile__edit-button"),e=document.querySelector(".profile__add-button"),n=document.querySelector(".popup_type_profile .popup__form"),r=document.querySelector(".popup_type_card .popup__form"),o=document.querySelector(".popup_type_avatar .popup__form"),i=document.querySelector(".popup__input_type_name"),u=document.querySelector(".popup__input_type_about"),a=document.querySelector(".profile__avatar"),c={form:".popup__form",inputSelector:".popup__input",buttonSelector:".popup__confirm-button",buttonInactiveClass:"popup__confirm-button_inactive",activeErrorClass:"popup__input-error_active",inputErrorClass:"popup__input_error"};function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var l=function(){function t(e,n,r){var o=e.item,i=e.userId,u=n.handleCardClick,a=n.handleDeleteCard,c=n.handlePutLike,s=n.handleDeleteLike;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._title=o.name,this._link=o.link,this._owner=o.owner,this._likes=o.likes,this._cardId=o._id,this._userId=i,this._handleCardClick=u,this._handleCardDelete=a,this._handlePutLike=c,this._handleDeleteLike=s,this._cardSelector=r,this._element=this._getTemplate(),this._likeButton=this._element.querySelector(".card__like-button"),this._deleteButton=this._element.querySelector(".card__delete-button"),this._cardImage=this._element.querySelector(".card__image"),this._cardTitle=this._element.querySelector(".card__title"),this._likeCounter=this._element.querySelector(".card__like-counter")}var e,n;return e=t,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".card").cloneNode(!0)}},{key:"_deleteCard",value:function(){var t={card:this._element,cardId:this._cardId};this._handleCardDelete(t)}},{key:"_setEventListeners",value:function(){var t=this;this._likeButton.addEventListener("click",(function(){t._likeButton.classList.contains("card__like-button_active")?t._handleDeleteLike():t._handlePutLike()})),this._deleteButton.addEventListener("click",(function(){t._deleteCard()})),this._cardImage.addEventListener("click",(function(){t._handleCardClick(t._cardImage)}))}},{key:"getId",value:function(){return this._cardId}},{key:"setLikesInfo",value:function(t){this._likeButton.classList.toggle("card__like-button_active"),this._likeCounter.textContent=t.likes.length}},{key:"generateCard",value:function(){var t=this;return this._setEventListeners(),this._likes.forEach((function(e){e._id==t._userId&&t._likeButton.classList.add("card__like-button_active")})),this._owner._id==this._userId&&this._deleteButton.classList.remove("card__delete-button_hidden"),this._likeCounter.textContent=this._likes.length,this._cardImage.src=this._link,this._cardImage.alt=this._title,this._cardTitle.textContent=this._title,this._element}}])&&s(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var p=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._form=n,this._inputSelector=e.inputSelector,this._buttonSelector=e.buttonSelector,this._buttonInactiveClass=e.buttonInactiveClass,this._activeErrorClass=e.activeErrorClass,this._inputErrorClass=e.inputErrorClass,this._inputList=Array.from(this._form.querySelectorAll(this._inputSelector)),this._buttonElement=this._form.querySelector(this._buttonSelector)}var e,n;return e=t,(n=[{key:"_showInputError",value:function(t,e){var n=this._form.querySelector(".".concat(t.id,"-error"));t.classList.add(this._inputErrorClass),n.textContent=e,n.classList.add(this._activeErrorClass)}},{key:"_hideInputError",value:function(t){var e=this._form.querySelector(".".concat(t.id,"-error"));t.classList.remove(this._inputErrorClass),e.classList.remove(this._activeErrorClass),e.textContent=""}},{key:"_checkInputValidity",value:function(t){t.validity.valid?this._hideInputError(t):this._showInputError(t,t.validationMessage)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(t){return!t.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?(this._buttonElement.classList.add(this._buttonInactiveClass),this._buttonElement.disabled=!0):(this._buttonElement.classList.remove(this._buttonInactiveClass),this._buttonElement.disabled=!1)}},{key:"_setEventListeners",value:function(){var t=this;this._toggleButtonState(),this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._checkInputValidity(e),t._toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._setEventListeners()}},{key:"resetForm",value:function(){this._form.reset(),this._toggleButtonState()}},{key:"cleanInput",value:function(){var t=this;this._inputList.forEach((function(e){t._hideInputError(e)}))}}])&&f(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function h(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var _=function(){function t(e,n){var r=e.items,o=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._items=r,this._renderer=o,this._container=document.querySelector(n)}var e,n;return e=t,n=[{key:"renderItems",value:function(){var t=this;this._items.forEach((function(e){t._renderer(e)}))}},{key:"addItem",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"append";this._container[e](t)}}],n&&h(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function d(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var y=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._element=document.querySelector(e),this._handleMousedownClose=this._handleMousedownClose.bind(this),this._handleEscClose=this._handleEscClose.bind(this)}var e,n;return e=t,(n=[{key:"_handleMousedownClose",value:function(t){(t.target.classList.contains("popup__close-button")||t.target.classList.contains("popup_opened"))&&this.close()}},{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.close()}},{key:"setEventListener",value:function(){this._element.addEventListener("mousedown",this._handleMousedownClose)}},{key:"open",value:function(){this._element.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._element.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}}])&&d(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function v(t){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(t)}function m(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function b(){return b="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=k(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},b.apply(this,arguments)}function k(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=E(t)););return t}function g(t,e){return g=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},g(t,e)}function w(t,e){if(e&&("object"===v(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function E(t){return E=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},E(t)}var C=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");Object.defineProperty(t,"prototype",{value:Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),writable:!1}),e&&g(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=E(r);if(o){var n=E(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return w(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._popupImage=e._element.querySelector(".popup__image"),e._popupImgCaption=e._element.querySelector(".popup__image-caption"),e}return e=u,(n=[{key:"open",value:function(t,e){this._popupImage.src=t,this._popupImage.alt="увеличенное изображение ".concat(e),this._popupImgCaption.textContent=e,b(E(u.prototype),"open",this).call(this)}}])&&m(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(y);function S(t){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},S(t)}function O(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function I(t,e){return I=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},I(t,e)}function L(t,e){if(e&&("object"===S(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return j(t)}function j(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function P(){return P="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=T(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},P.apply(this,arguments)}function T(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=B(t)););return t}function B(t){return B=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},B(t)}var R=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");Object.defineProperty(t,"prototype",{value:Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),writable:!1}),e&&I(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=B(r);if(o){var n=B(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return L(this,t)});function u(t,e){var n,r,o=t.submitForm;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),P((n=j(r=i.call(this,e)),B(u.prototype)),"_element",n),r._form=r._element.querySelector(".popup__form"),r._inputList=r._form.querySelectorAll(".popup__input"),r._submitButton=r._element.querySelector(".popup__confirm-button"),r._defaultButtonText=r._submitButton.textContent,r._submitForm=o,r._handler=r._handler.bind(j(r)),r}return e=u,(n=[{key:"_getInputValues",value:function(){var t=this;return this._data={},this._inputList.forEach((function(e){t._data[e.name]=e.value})),this._data}},{key:"_handler",value:function(t){t.preventDefault(),this._submitButton.append("..."),this._submitForm(this._getInputValues())}},{key:"setButtonText",value:function(){this._submitButton.textContent=this._defaultButtonText}},{key:"setEventListener",value:function(){this._form.addEventListener("submit",this._handler),P(B(u.prototype),"setEventListener",this).call(this)}},{key:"close",value:function(){this._form.reset(),P(B(u.prototype),"close",this).call(this)}}])&&O(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(y);function q(t){return q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},q(t)}function x(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function D(t,e){return D=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},D(t,e)}function A(t,e){if(e&&("object"===q(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return F(t)}function F(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function U(){return U="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=V(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},U.apply(this,arguments)}function V(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=M(t)););return t}function M(t){return M=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},M(t)}var N=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");Object.defineProperty(t,"prototype",{value:Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),writable:!1}),e&&D(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=M(r);if(o){var n=M(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return A(this,t)});function u(t,e){var n,r,o=t.submitForm;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),U((n=F(r=i.call(this,e)),M(u.prototype)),"_element",n),r._submitForm=o,r._button=r._element.querySelector(".popup__confirm-button"),r._form=r._element.querySelector(".popup__form"),r._handler=r._handler.bind(F(r)),r._submitButton=r._element.querySelector(".popup__confirm-button"),r._defaultButtonText=r._submitButton.textContent,r}return e=u,(n=[{key:"_handler",value:function(t){t.preventDefault(),this._submitButton.append("..."),this._submitForm(this._data)}},{key:"setEventListener",value:function(){this._form.addEventListener("submit",this._handler),U(M(u.prototype),"setEventListener",this).call(this)}},{key:"open",value:function(t){this._data=t,U(M(u.prototype),"open",this).call(this)}},{key:"setButtonText",value:function(){this._submitButton.textContent=this._defaultButtonText}}])&&x(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(y);function J(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var z,G=function(){function t(e){var n=e.nameSelector,r=e.aboutSelector,o=e.avatarSelector;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=document.querySelector(n),this._about=document.querySelector(r),this._avatar=document.querySelector(o)}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return this._data={},this._data.name=this._name.textContent,this._data.about=this._about.textContent,this._data}},{key:"setUserInfo",value:function(t){this._name.textContent=t.name,this._about.textContent=t.about}},{key:"setAvatar",value:function(t){this._avatar.src=t.avatar}}])&&J(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function H(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function $(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var K=new(function(){function t(e){var n=e.baseUrl,r=e.headers;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._link=n,this._headers=r,this._token=r.authorization}var e,n;return e=t,(n=[{key:"_processResult",value:function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}},{key:"getUserInfo",value:function(){var t=this;return fetch("".concat(this._link,"/users/me"),{method:"GET",headers:this._headers}).then((function(e){return t._processResult(e)}))}},{key:"getInitialCards",value:function(){var t=this;return fetch("".concat(this._link,"/cards"),{method:"GET",headers:this._headers}).then((function(e){return t._processResult(e)}))}},{key:"getFullData",value:function(){return Promise.all([this.getUserInfo(),this.getInitialCards()])}},{key:"changeProfile",value:function(t){var e=this,n=t.name,r=t.about;return fetch("".concat(this._link,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:n,about:r})}).then((function(t){return e._processResult(t)}))}},{key:"changeAvatar",value:function(t){var e=this;return fetch("".concat(this._link,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:t.avatar})}).then((function(t){return e._processResult(t)}))}},{key:"addCard",value:function(t){var e=this;return fetch("".concat(this._link,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:t.name,link:t.link})}).then((function(t){return e._processResult(t)}))}},{key:"putLikeCard",value:function(t){var e=this;return fetch("".concat(this._link,"/cards/").concat(t,"/likes"),{method:"PUT",headers:this._headers}).then((function(t){return e._processResult(t)}))}},{key:"deleteLikeCard",value:function(t){var e=this;return fetch("".concat(this._link,"/cards/").concat(t,"/likes"),{method:"DELETE",headers:this._headers}).then((function(t){return e._processResult(t)}))}},{key:"deleteCard",value:function(t){var e=this;return fetch("".concat(this._link,"/cards/").concat(t),{method:"DELETE",headers:this._headers}).then((function(t){return e._processResult(t)}))}}])&&H(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-34",headers:{authorization:"cdf51df7-343c-4e9d-927b-02e53e8e2930","Content-Type":"application/json"}});K.getFullData().then((function(t){var e,n,r=(n=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i=[],u=!0,a=!1;try{for(n=n.call(t);!(u=(r=n.next()).done)&&(i.push(r.value),!e||i.length!==e);u=!0);}catch(t){a=!0,o=t}finally{try{u||null==n.return||n.return()}finally{if(a)throw o}}return i}}(e,n)||function(t,e){if(t){if("string"==typeof t)return $(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?$(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];z=o._id,ot.setUserInfo(o),ot.setAvatar(o),i.forEach((function(t){return it(t)}))})).catch((function(t){return console.log(t)}));var Q=new p(c,n),W=new p(c,r),X=new p(c,o),Y=new C(".popup_type_image");Y.setEventListener();var Z=new _({items:[],renderer:function(t){it(t)}},".gallery__list"),tt=new R({submitForm:function(t){return function(t){K.addCard(t).then((function(t){it(t,"prepend"),tt.close()})).catch((function(t){return console.log(t)})).finally((function(){return tt.setButtonText()}))}(t)}},".popup_type_card");tt.setEventListener();var et=new R({submitForm:function(t){return function(t){K.changeProfile(t).then((function(t){ot.setUserInfo(t),et.close()})).catch((function(t){return console.log(t)})).finally((function(){return et.setButtonText()}))}(t)}},".popup_type_profile");et.setEventListener();var nt=new R({submitForm:function(t){return function(t){K.changeAvatar(t).then((function(){ot.setAvatar(t),nt.close()})).catch((function(t){return console.log(t)})).finally((function(){return nt.setButtonText()}))}(t)}},".popup_type_avatar");nt.setEventListener();var rt=new N({submitForm:function(t){return function(t){K.deleteCard(t.cardId).then((function(){t.card.remove(),rt.close()})).catch((function(t){return console.log(t)})).finally((function(){return rt.setButtonText()}))}(t)}},".popup_type_card-delete");rt.setEventListener();var ot=new G({nameSelector:".profile__name",aboutSelector:".profile__about",avatarSelector:".profile__avatar-image"});function it(t,e){var n=function(t){var e=new l({item:t,userId:z},{handleCardClick:function(){return Y.open(t.link,t.name)},handleDeleteCard:function(t){return rt.open(t)},handlePutLike:function(){K.putLikeCard(e.getId()).then((function(t){return e.setLikesInfo(t)})).catch((function(t){return console.log(t)}))},handleDeleteLike:function(){K.deleteLikeCard(e.getId()).then((function(t){return e.setLikesInfo(t)})).catch((function(t){return console.log(t)}))}},".card-template");return e.generateCard()}(t);Z.addItem(n,e)}t.addEventListener("click",(function(){Q.cleanInput(),Q.resetForm();var t=ot.getUserInfo(),e=t.name,n=t.about;i.value=e,u.value=n,et.open()})),e.addEventListener("click",(function(){W.cleanInput(),W.resetForm(),tt.open()})),a.addEventListener("click",(function(){X.cleanInput(),X.resetForm(),nt.open()})),W.enableValidation(),Q.enableValidation(),X.enableValidation(),Z.renderItems()})();