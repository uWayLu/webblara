/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 80);
/******/ })
/************************************************************************/
/******/ ({

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e(__webpack_require__(59)):"function"==typeof define&&define.amd?define(["tether"],e):t.bootstrapVue=e(t.Tether)}(this,function(t){"use strict";function e(t,e,n){var i=window.MutationObserver||window.WebKitMutationObserver,s=window.addEventListener;if(i){var o=new i(function(t){(t[0].addedNodes.length>0||t[0].removedNodes.length>0)&&e()});o.observe(t,Object.assign({childList:!0,subtree:!0},n))}else s&&(t.addEventListener("DOMNodeInserted",e,!1),t.addEventListener("DOMNodeRemoved",e,!1))}function n(t,e,n,i){var s=t.__vue__;if(!s)return void console.warn("__vue__ is not available on element",t);var o=Object.keys(e.modifiers||{}).filter(function(t){return!$t[t]});e.value&&o.push(e.value);var r=function(){i({targets:o,vm:s})};Object.keys($t).forEach(function(i){(n[i]||e.modifiers[i])&&t.addEventListener(i,r)})}function i(t){return t.nodeType}function s(t,e){var n=t.closest(e);return n===t?null:n}function o(t,e){return e||(e=document),i(e)?Array.prototype.slice.call(e.querySelectorAll(t)):[]}function r(t,e){return e||(e=document),i(e)?e.querySelector(t)||null:null}function a(t){return t?t.__vue__:null}function l(t){return{}.toString.call(t).match(/\s([a-zA-Z]+)/)[1].toLowerCase()}function u(t,e,n){for(var s in n)if(Object.prototype.hasOwnProperty.call(n,s)){var o=n[s],r=e[s],a=r&&i(r)?"element":l(r);new RegExp(o).test(a)||console.error(t+': Option "'+s+'" provided type "'+a+'" but expected type "'+o+'"')}}function c(t,e){this._$el=t,this._selector=[jt.NAV_LINKS,jt.LIST_ITEMS,jt.DROPDOWN_ITEMS].join(","),this._config=Object.assign({},Nt),this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,this._$root=null,this._resizeTimeout=null,this.updateConfig(e)}t="default"in t?t.default:t;var d={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.localShow?n("div",{class:t.classObject,attrs:{role:"alert","aria-live":"polite","aria-atomic":"true"}},[t.dismissible?n("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert","aria-label":"dismissLabel"},on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.dismiss(e)}}},[n("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])]):t._e(),t._t("default")],2):t._e()},staticRenderFns:[],data:function(){return{countDownTimerId:null,dismissed:!1}},created:function(){this.state&&console.warn("<b-alrt> state property is deprecated, please use variant instead.")},computed:{classObject:function(){return["alert",this.alertVariant,this.dismissible?"alert-dismissible":""]},alertVariant:function(){var t=this.state||this.variant||"info";return"alert-"+t},localShow:function(){return!this.dismissed&&(this.countDownTimerId||this.show)}},props:{variant:{type:String,default:"info"},state:{type:String,default:null},dismissible:{type:Boolean,default:!1},dismissLabel:{type:String,default:"Close"},show:{type:[Boolean,Number],default:!1}},watch:{show:function(){this.showChanged()}},mounted:function(){this.showChanged()},methods:{dismiss:function(){this.dismissed=!0,this.$emit("dismissed"),this.clearCounter()},clearCounter:function(){this.countDownTimerId&&clearInterval(this.countDownTimerId)},showChanged:function(){var t=this;if(this.dismissed=!1,this.show!==!0&&this.show!==!1&&null!==this.show&&0!==this.show){var e=this.show;this.$emit("dismiss-count-down",e),this.clearCounter(),this.countDownTimerId=setInterval(function(){return e<2?t.dismiss():(e--,void t.$emit("dismiss-count-down",e))},1e3)}}}},f={computed:{isRouterLink:function(){return Boolean(this.$router&&this.to&&!this.disabled)},_href:function(){return this.disabled?"#":this.href?this.href:this.to&&"string"==typeof this.to?this.to:void 0},linkClassObject:function(){return[this.active?this.exact?this.exactActiveClass:this.activeClass:null,this.disabled?"disabled":null]}},props:{active:{type:Boolean,default:!1},disabled:Boolean,href:{type:String,default:"#"},to:{type:[String,Object],default:null},tag:{type:String,default:"a"},exact:Boolean,append:Boolean,replace:Boolean,activeClass:{type:String,default:"active"},exactActiveClass:{type:String,default:"active"},event:{type:[String,Array],default:"click"}},methods:{linkClick:function(t){this.disabled||(this.$root.$emit("clicked::link",this),this.$emit("click")),(this.disabled||!this.isRouterLink&&"#"===this._href)&&(t.preventDefault(),t.stopPropagation())}}},h={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isRouterLink?n("router-link",{tag:"a",class:t.linkClassObject,attrs:{"active-class":t.activeClass,"exact-active-class":t.exactActiveClass,disabled:t.disabled,"aria-disabled":t.disabled?"true":"false",to:t.to,exact:t.exact,append:t.append,replace:t.replace,event:t.event,tag:t.tag},on:{click:t.linkClick}},[t._t("default")],2):n("a",{class:t.linkClassObject,attrs:{disabled:t.disabled,"aria-disabled":t.disabled?"true":"false",href:t._href},on:{click:t.linkClick}},[t._t("default")],2)},staticRenderFns:[],mixins:[f]},p={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ol",{staticClass:"breadcrumb",attrs:{role:"navigation"}},[t._l(t.items2,function(e){return n("li",{class:["breadcrumb-item",e.__active?"active":null],attrs:{role:"presentation"},on:{click:function(n){t.onclick(e)}}},[e.active?n("span",{domProps:{innerHTML:t._s(e.text)}}):n("b-link",{attrs:{to:e.to,href:e.href||e.link},domProps:{innerHTML:t._s(e.text)},on:{click:t.onclick}})],1)}),t._t("default")],2)},staticRenderFns:[],components:{bLink:h},computed:{componentType:function(){return this.to?"router-link":"a"},items2:function(){var t=this.items.length>0&&this.items[this.items.length-1];return this.items.map(function(e){return"string"==typeof e?{text:e,link:"#",active:e===t}:(e.active!==!0&&e.active!==!1?e.__active=e===t:e.__active=e.active,e)})}},props:{items:{type:Array,default:function(){return[]},required:!0}},methods:{onclick:function(t){this.$emit("click",t)}}},v={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.componentType,{tag:"button",class:t.classObject,attrs:{to:t.to,href:t.href,disabled:t.disabled},on:{click:t.onclick}},[t._t("default")],2)},staticRenderFns:[],components:{bLink:h},computed:{classObject:function(){return["btn",this.btnVariant,this.btnSize,this.btnBlock,this.btnDisabled,this.inactive?"btn-inactive":""]},componentType:function(){return this.href||this.to?"b-link":"button"},btnBlock:function(){return this.block?"btn-block":""},btnVariant:function(){return this.variant?"btn-"+this.variant:"btn-secondary"},btnSize:function(){return this.size?"btn-"+this.size:""},btnDisabled:function(){return this.disabled?"disabled":""}},props:{block:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},inactive:{type:Boolean,default:!1},size:{type:String,default:null},variant:{type:String,default:null},to:{type:[String,Object]},href:{type:String}},methods:{onclick:function(t){this.disabled?(t.stopPropagation(),t.preventDefault()):this.$emit("click",t)}}},g=['.btn:not(.disabled):not([disabled]):not([style*="display: none"]):not([style*="display:none"])','.form-control:not(.disabled):not([disabled]):not([style*="display: none"]):not([style*="display:none"])','select:not(.disabled):not([disabled]):not([style*="display: none"]):not([style*="display:none"])','input[type="checkbox"]:not(.disabled):not([disabled]):not([style*="display: none"]):not([style*="display:none"])','input[type="radio"]:not(.disabled):not([disabled]):not([style*="display: none"]):not([style*="display:none"])'].join(","),b={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.classObject,attrs:{role:"toolbar",tabindex:t.keyNav?"0":null},on:{focusin:function(e){return e.target!==e.currentTarget?null:void t.focusFirst(e)},keydown:[function(e){return"button"in e||!t._k(e.keyCode,"left",37)?"button"in e&&0!==e.button?null:void t.focusNext(e,!0):null},function(e){return"button"in e||!t._k(e.keyCode,"up",38)?void t.focusNext(e,!0):null},function(e){return"button"in e||!t._k(e.keyCode,"right",39)?"button"in e&&2!==e.button?null:void t.focusNext(e,!1):null},function(e){return"button"in e||!t._k(e.keyCode,"down",40)?void t.focusNext(e,!1):null},function(e){return("button"in e||!t._k(e.keyCode,"left",37))&&e.shiftKey?"button"in e&&0!==e.button?null:void t.focusFirst(e):null},function(e){return("button"in e||!t._k(e.keyCode,"up",38))&&e.shiftKey?void t.focusFirst(e):null},function(e){return("button"in e||!t._k(e.keyCode,"right",39))&&e.shiftKey?"button"in e&&2!==e.button?null:void t.focusLast(e):null},function(e){return("button"in e||!t._k(e.keyCode,"down",40))&&e.shiftKey?void t.focusLast(e):null}]}},[t._t("default")],2)},staticRenderFns:[],computed:{classObject:function(){return["btn-toolbar",this.justify&&!this.vertical?"justify-content-between":""]}},props:{justify:{type:Boolean,default:!1},KeyNav:{type:Boolean,default:!1}},methods:{setItemFocus:function(t){this.$nextTick(function(){t.focus()})},focusNext:function(t,e){if(this.keyNav){t.preventDefault(),t.stopPropagation();var n=this.getItems();if(!(n.length<1)){var i=n.indexOf(t.target);e&&i>0?i--:!e&&i<n.length-1&&i++,i<0&&(i=0),this.setItemFocus(n[i])}}},focusFirst:function(t){if(this.keyNav){t.preventDefault(),t.stopPropagation();var e=this.getItems();e.length>0&&this.setItemFocus(e[0])}},focusLast:function(t){if(this.keyNav){t.preventDefault(),t.stopPropagation();var e=this.getItems();e.length>0&&this.setItemFocus([e.length-1])}},getItems:function(){var t=Array.prototype.slice.call(this.$el.querySelectorAll(g));return t.forEach(function(t){t.tabIndex=-1}),t}},mounted:function(){this.keyNav&&this.getItems()}},m={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.classObject},[t._t("default")],2)},staticRenderFns:[],computed:{classObject:function(){return["btn-group",this.vertical?"btn-group-vertical":"",this.justify&&!this.vertical?"justify-content-between":"",this.size?"btn-group-"+this.size:""]}},props:{vertical:{type:Boolean,default:!1},justify:{type:Boolean,default:!1},size:{type:String,default:null}}},y={mounted:function(){"undefined"!=typeof document&&document.documentElement.addEventListener("click",this._clickOutListener)},destroyed:function(){"undefined"!=typeof document&&document.removeEventListener("click",this._clickOutListener)},methods:{_clickOutListener:function(t){this.$el.contains(t.target)||this.clickOutListener&&this.clickOutListener()}}},_=['.dropdown-item:not(.disabled):not([disabled]):not([style*="display: none"]):not([style*="display:none"])','.dropdown-header:not([style*="display: none"]):not([style*="display:none"])'].join(","),k={props:{split:{type:Boolean,default:!1},text:{type:String,default:""},dropup:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},right:{type:Boolean,default:!1}},created:function(){var t=this,e=function(e){e!==t&&(t.visible=!1)};this.$root.$on("shown::dropdown",e),this.$root.$on("clicked::link",e)},watch:{visible:function(t,e){var n=this;if(t!==e)if(t){if(this.$root.$emit("shown::dropdown",this),"undefined"!=typeof document&&"ontouchstart"in document.documentElement){var i=Array.prototype.slice.call(document.body.children);i.forEach(function(t){t.addEventListener("mouseover",n.noop)})}}else if(this.$root.$emit("hidden::dropdown",this),"undefined"!=typeof document&&"ontouchstart"in document.documentElement){var s=Array.prototype.slice.call(document.body.children);s.forEach(function(t){t.removeEventListener("mouseover",n.noop)})}}},methods:{noop:function(){},toggle:function(){return this.disabled?void(this.visible=!1):(this.visible=!this.visible,void(this.visible&&this.$nextTick(function(){var t=this.getItems();t.length>0&&t[0].focus()})))},onTab:function(){this.visible&&(this.visible=!1)},onEsc:function(t){this.visible&&(this.visible=!1,t.preventDefault(),t.stopPropagation(),this.$nextTick(function(){var t;t=this.split&&this.$refs.toggle?this.$refs.toggle.$el||this.$refs.toggle:this.$refs.button.$el||this.$refs.button,t&&t.focus&&t.focus()}))},focusNext:function(t,e){if(this.visible){t.preventDefault(),t.stopPropagation();var n=this.getItems();if(!(n.length<1)){var i=n.indexOf(t.target);e&&i>0?i--:!e&&i<n.length-1&&i++,i<0&&(i=0),n[i].focus()}}},getItems:function(){return Array.prototype.slice.call(this.$refs.menu.querySelectorAll(_))}}},w={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:["btn-group","dropdown",{dropup:t.dropup,show:t.visible}]},[n("b-button",{ref:"button",class:{"dropdown-toggle":!t.split,"btn-link":t.link},attrs:{id:t.id?t.id+"__BV_button_":null,"aria-expanded":t.visible?"true":"false",variant:t.variant,size:t.size,disabled:t.disabled},on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.click(e)},kedown:[function(e){return"button"in e||!t._k(e.keyCode,"space",32)?(e.stopPropagation(),e.preventDefault(),void t.click(e)):null},function(e){return"button"in e||!t._k(e.keyCode,"enter",13)?(e.stopPropagation(),e.preventDefault(),void t.click(e)):null}]}},[t._t("text",[t._v(t._s(t.text))])],2),n("div",{ref:"menu",class:["dropdown-menu",{"dropdown-menu-right":t.right}],attrs:{role:"menu","aria-labelledby":t.id?t.id+"__BV_button_":null},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"esc",27)?void t.onEsc(e):null},keydown:[function(e){return"button"in e||!t._k(e.keyCode,"tab",9)?void t.onTab(e):null},function(e){return"button"in e||!t._k(e.keyCode,"up",38)?void t.focusNext(e,!0):null},function(e){return"button"in e||!t._k(e.keyCode,"down",40)?void t.focusNext(e,!1):null}]}},[t._t("default")],2)],1)},staticRenderFns:[],mixins:[y,k],data:function(){return{visible:!1}},computed:{dropdownToggle:function(){return this.caret?"dropdown-toggle":""}},props:{id:{type:String},caret:{type:Boolean,default:!0}},methods:{clickOutListener:function(){this.visible=!1}}},S={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.classObject,attrs:{role:"group"}},[t._t("left",[t.left?n("div",{staticClass:"input-group-addon",domProps:{innerHTML:t._s(t.left)}}):t._e()]),t._t("default"),t._t("right",[t.right?n("div",{staticClass:"input-group-addon",domProps:{innerHTML:t._s(t.right)}}):t._e()])],2)},staticRenderFns:[],computed:{classObject:function(){return["input-group",this.size?"input-group-"+this.size:"",this.state?"has-"+this.state:""]}},props:{size:{type:String,default:null},state:{type:String,default:null},left:{type:String,default:null},right:{type:String,default:null}}},x={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"input-group-addon",attrs:{id:t.id}},[t._t("default")],2)},staticRenderFns:[],props:{id:{type:String,default:null}}},$={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"input-group-btn"},[t._t("default")],2)},staticRenderFns:[],props:{}},T={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.tag,{tag:"component",class:["card",t.cardVariant,t.cardAlign,t.cardInverse]},[t._t("img",[t.img?n("img",{staticClass:"card-img",attrs:{src:t.img,alt:t.imgAlt}}):t._e()]),t.header||t.showHeader?n(t.headerTag,{tag:"component",staticClass:"card-header"},[t._t("header",[n("div",{domProps:{innerHTML:t._s(t.header)}})])],2):t._e(),t.noBlock?[t._t("default")]:n("div",{class:t.blockClass},[t.title?n("h4",{staticClass:"card-title",domProps:{innerHTML:t._s(t.title)}}):t._e(),t.subTitle?n("h6",{staticClass:"card-subtitle mb-2 text-muted",domProps:{innerHTML:t._s(t.subTitle)}}):t._e(),t._t("default")],2),t.footer||t.showFooter?n(t.footerTag,{tag:"component",staticClass:"card-footer"},[t._t("footer",[n("div",{domProps:{innerHTML:t._s(t.footer)}})])],2):t._e()],2)},staticRenderFns:[],computed:{blockClass:function(){return["card-block",this.overlay?"card-img-overlay":null]},cardVariant:function(){return this.variant?"card-"+this.variant:null},cardInverse:function(){return this.overlay||this.inverse?"card-inverse":null===this.inverse&&this.variant&&this.variant.length>0&&this.variant.indexOf("outline")===-1?"card-inverse":void 0},cardAlign:function(){return this.align?"text-"+this.align:null}},props:{align:{type:String,default:null},inverse:{type:Boolean,default:null},variant:{type:String,default:null},tag:{type:String,default:"div"},header:{type:String,default:null},showHeader:{type:Boolean,default:!1},headerTag:{type:String,default:"div"},footer:{type:String,default:null},showFooter:{type:Boolean,default:!1},footerTag:{type:String,default:"div"},title:{type:String,default:null},subTitle:{type:String,default:null},noBlock:{type:Boolean,default:!1},img:{type:String,default:null},imgAlt:{type:String,default:null},overlay:{type:Boolean,default:!1}}},C={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.tag,{tag:"component",class:["card-"+t.type]},[t._t("default")],2)},staticRenderFns:[],computed:{type:function(){return this.deck?"deck":this.columns?"columns":"group"}},props:{tag:{type:String,default:"div"},deck:{type:Boolean,default:!1},columns:{type:Boolean,default:!1}}},P={next:{current:"carousel-item-left",next:"carousel-item-right",overlay:"carousel-item-next"},prev:{current:"carousel-item-right",next:"carousel-item-left",overlay:"carousel-item-prev"}},O={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"carousel slide",style:{background:t.background,height:t.height},attrs:{role:"region",id:t.id||null,"aria-busy":t.isSliding?"true":"false"},on:{mouseenter:t.pause,mouseleave:t.start,focusin:t.pause,focusout:function(e){t.restart(e)},keydown:[function(e){return"button"in e||!t._k(e.keyCode,"left",37)?"button"in e&&0!==e.button?null:void t.prev(e):null},function(e){return"button"in e||!t._k(e.keyCode,"right",39)?"button"in e&&2!==e.button?null:void t.next(e):null}]}},[n("ol",{directives:[{name:"show",rawName:"v-show",value:t.indicators,expression:"indicators"}],staticClass:"carousel-indicators",attrs:{role:"group","aria-hidden":t.indicators?"false":"true","aria-label":t.indicators&&t.labelIndicators?t.labelIndicators:null,"aria-owns":t.indictors&&t.id?t.id+"__BV_inner_":null,"aria-activedescendant":t.slides[t.index].id||null,tabindex:t.indicators?"0":"-1"},on:{focusin:function(e){return e.target!==e.currentTarget?null:void t.focusActiveIndicator(e)},keydown:[function(e){return"button"in e||!t._k(e.keyCode,"left",37)?"button"in e&&0!==e.button?null:(e.stopPropagation(),e.preventDefault(),void t.focusPrevIndicator(e)):null},function(e){return"button"in e||!t._k(e.keyCode,"up",38)?(e.stopPropagation(),e.preventDefault(),void t.focusPrevIndicator(e)):null},function(e){return"button"in e||!t._k(e.keyCode,"right",39)?"button"in e&&2!==e.button?null:(e.stopPropagation(),e.preventDefault(),void t.focusNextIndicator(e)):null},function(e){return"button"in e||!t._k(e.keyCode,"down",40)?(e.stopPropagation(),e.preventDefault(),void t.focusNextIndicator(e)):null}]}},t._l(t.slides.length,function(e){return n("li",{ref:"indcators",refInFor:!0,class:{active:e-1===t.index},attrs:{role:"button",tabindex:"-1",id:t.id?t.id+"__BV_indicator_"+e+"_":null,"aria-current":e-1===t.index?"true":"false","aria-posinset":e,"aria-setsize":t.slides.length,"aria-label":t.labelGotoSlide+" "+e,"aria-describedby":t.slides[e-1].id||null,"aria-controls":t.id?t.id+"__BV_inner_":null},on:{click:function(n){t.index=e-1},keydown:[function(n){return"button"in n||!t._k(n.keyCode,"enter",13)?(n.stopPropagation(),n.preventDefault(),void(t.index=e-1)):null},function(n){return"button"in n||!t._k(n.keyCode,"space",32)?(n.stopPropagation(),n.preventDefault(),void(t.index=e-1)):null}]}})})),n("div",{staticClass:"carousel-inner",attrs:{role:"list",id:t.id?t.id+"__BV_inner_":null}},[t._t("default")],2),t.controls?[n("a",{staticClass:"carousel-control-prev",attrs:{href:"#",role:"button","data-slide":"prev","aria-controls":t.id?t.id+"__BV_inner_":null},on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.prev(e)},keydown:[function(e){return"button"in e||!t._k(e.keyCode,"enter",13)?(e.stopPropagation(),e.preventDefault(),void t.prev(e)):null},function(e){return"button"in e||!t._k(e.keyCode,"space",32)?(e.stopPropagation(),e.preventDefault(),void t.prev(e)):null}]}},[n("span",{staticClass:"carousel-control-prev-icon",attrs:{"aria-hidden":"true"}}),t._v(" "),n("span",{staticClass:"sr-only"},[t._v(t._s(t.labelPrev))])]),n("a",{staticClass:"carousel-control-next",attrs:{href:"#",role:"button","data-slide":"next","aria-controls":t.id?t.id+"__BV_inner_":null},on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.next(e)},keydown:[function(e){return"button"in e||!t._k(e.keyCode,"enter",13)?(e.stopPropagation(),e.preventDefault(),void t.next(e)):null},function(e){return"button"in e||!t._k(e.keyCode,"space",32)?(e.stopPropagation(),e.preventDefault(),void t.next(e)):null}]}},[n("span",{staticClass:"carousel-control-next-icon",attrs:{"aria-hidden":"true"}}),t._v(" "),n("span",{staticClass:"sr-only"},[t._v(t._s(t.labelNext))])])]:t._e()],2)},staticRenderFns:[],data:function(){return{index:0,isSliding:!1,slides:[]}},props:{id:{type:String},labelPrev:{type:String,default:"Previous Slide"},labelNext:{type:String,default:"Next Slide"},labelGotoSlide:{type:String,default:"Goto Slide"},labelIndicators:{type:String,default:"Select a slide to display"},interval:{type:Number,default:5e3},indicators:{type:Boolean,default:!1},controls:{type:Boolean,default:!1},height:{type:String},background:{type:String}},methods:{prev:function(){this.index<=0?this.index=this.slides.length-1:this.index--},next:function(){this.index>=this.slides.length-1?this.index=0:this.index++},pause:function(){0!==this.interval&&"undefined"!=typeof this.interval&&(clearInterval(this._intervalId),this._intervalId=null,this.slides[this.index].tabIndex=0)},start:function(){var t=this;0!==this.interval&&"undefined"!=typeof this.interval&&(this.slides.forEach(function(t){t.tabIndex=-1}),this._intervalId=setInterval(function(){t.next()},this.interval))},restart:function(t){t.relatedTarget&&this.$el.contains(t.relatedTarget)||this.start()},focusActiveIndicator:function(){var t=this;this.indicators&this.$refs.indicators.length>0&&this.$nextTick(function(){t.$refs.indicators[t.index].focus()})},focusPrevIndicator:function(){var t=this;if(this.indicators&this.$refs.indicators.length>0){var e=this.$refs.indicators.indexOf(function(t){return Boolean(t===document.activeElement)});e>0&&this.$nextTick(function(){t.$refs.indicators[e-1].focus()})}},focusNextIndicator:function(){var t=this;if(this.indicators&this.$refs.indicators.length>0){var e=this.$refs.indicators.indexOf(function(t){return Boolean(t===document.activeElement)});e>0&&e<this.$refs.indicators-1&&this.$nextTick(function(){t.$refs.indicators[e+1].focus()})}}},mounted:function(){var t=this;this.slides=this.$el.querySelectorAll(".carousel-item"),this.slides[0].classList.add("active"),this.slides.forEach(function(e,n){var i=n+1;e.setAttribute("aria-current",0===n?"true":"false"),e.setAttribute("aria-posinset",String(i)),e.setAttribute("aria-setsize",String(t.slides.length)),e.tabIndex=-1,t.id&&e.setAttribute("aria-controlledby",t.id+"__BV_indicator_"+i+"_")}),this._intervalId=null,this.start()},watch:{index:function(t,e){var n=this;if(t!==e){if(this.isSliding)return void(this.index=e);var i=t>e?P.next:P.prev;0===e&&t===this.slides.length-1?i=P.prev:e===this.slides.length-1&&0===t&&(i=P.next);var s=this.slides[e],o=this.slides[t];s&&o&&(this.isSliding=!0,o.classList.add(i.next,i.overlay),s.classList.add(i.current),this._carouselAnimation=setTimeout(function(){n.isSliding=!1,n.$emit("slide",t),s.classList.remove("active"),s.setAttribute("aria-current","false"),s.setAttribute("aria-hidden","true"),s.tabIndex=-1,o.classList.add("active"),o.setAttribute("aria-current","true"),s.setAttribute("aria-hidden","false"),s.tabIndex=-1,n._intervalId||(s.tabIndex=0,n.$nextTick(function(){s.focus()})),s.classList.remove(i.current),o.classList.remove(i.next,i.overlay)},500))}}},destroyed:function(){clearTimeout(this._carouselAnimation),clearInterval(this._intervalId)}},B={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"carousel-item",style:{background:t.background,height:t.height},attrs:{role:"listitem",id:t.id||null}},[t.img?n("img",{staticClass:"d-block img-fluid",attrs:{src:t.img,alt:t.imgAlt}}):t._e(),n("div",{class:t.contentClasses},[t.caption?n("h3",{domProps:{innerHTML:t._s(t.caption)}}):t._e(),t.text?n("p",{domProps:{innerHTML:t._s(t.text)}}):t._e(),t._t("default")],2)])},staticRenderFns:[],props:{id:{type:String},img:{type:String},imgAlt:{type:String},contentVisibleUp:{type:String},caption:{type:String},text:{type:String},background:{type:String},height:{type:String}},computed:{contentClasses:function(){var t={"carousel-caption":Boolean(this.caption)};return this.contentVisibleUp&&(t["d-none"]=!0,t["d-"+this.contentVisibleUp+"-block"]=!0),t}}},E={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"collapse"},on:{enter:t.enter,"after-enter":t.clearHeight,leave:t.leave,"after-leave":t.clearHeight}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],class:t.classObject,attrs:{"aria-expanded":t.show?"true":"false"}},[t._t("default")],2)])},staticRenderFns:[],data:function(){return{show:!1}},computed:{classObject:function(){return{"navbar-collapse":this.isNav,show:this.show}}},props:{isNav:{type:Boolean,default:!1},id:{type:String,required:!0}},methods:{toggle:function(){this.show=!this.show,this.emitState()},enter:function(t){t.style.height="auto";var e=getComputedStyle(t).height;t.style.height="0px",t.offsetHeight,t.style.height=e},leave:function(t){t.style.height="auto";var e=getComputedStyle(t).height;t.style.height=e,t.offsetHeight,t.style.height="0px"},clearHeight:function(t){t.style.height=null},emitState:function(){this.$root.$emit("collapse::toggle::state",this.id,this.state)}},created:function(){var t=this;this.$root.$on("collapse::toggle",function(e){e===t.id&&t.toggle()})},mounted:function(){this.emitState()}},F={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:["dropdown","btn-group",{dropup:t.dropup,show:t.visible}],attrs:{id:t.id||null}},[n("b-button",{ref:"button",class:{"dropdown-toggle":!t.split,"btn-link":t.link},attrs:{id:t.id?t.id+"__BV_button_":null,"aria-haspopup":t.split?null:"true","aria-expanded":t.split?null:t.visible?"true":"false",variant:t.variant,size:t.size,disabled:t.disabled},on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.click(e)}}},[t._t("text",[t._v(t._s(t.text))])],2),t.split?n("b-button",{ref:"toggle",class:["dropdown-toggle","dropdown-toggle-split",{"btn-link":t.link}],attrs:{id:t.id?t.id+"__BV_toggle_":null,"aria-haspopup":t.split?"true":null,"aria-expanded":t.split?t.visible?"true":"false":null,variant:t.variant,size:t.size,disabled:t.disabled},on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.toggle(e)}}},[n("span",{staticClass:"sr-only"},[t._v(t._s(t.toggleText))])]):t._e(),n("div",{ref:"menu",class:["dropdown-menu",{"dropdown-menu-right":t.right}],attrs:{role:"menu","aria-labelledby":t.id?t.id+(t.split?"__BV_toggle_":"__BV_button_"):null},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"esc",27)?void t.onEsc(e):null},keydown:[function(e){return"button"in e||!t._k(e.keyCode,"tab",9)?void t.onTab(e):null},function(e){return"button"in e||!t._k(e.keyCode,"up",38)?void t.focusNext(e,!0):null},function(e){return"button"in e||!t._k(e.keyCode,"down",40)?void t.focusNext(e,!1):null}]}},[t._t("default")],2)],1)},staticRenderFns:[],mixins:[y,k],components:{bButton:v},data:function(){return{visible:!1}},props:{id:{type:String},toggleText:{type:String,default:"Toggle Dropdown"},size:{type:String,default:null},variant:{type:String,default:null},link:{type:Boolean,default:!1}},methods:{clickOutListener:function(){this.visible=!1},click:function(t){return this.disabled?void(this.visible=!1):void(this.split?(this.$emit("click",t),this.$root.$emit("shown::dropdown",this)):this.toggle())}}},L={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-link",{staticClass:"dropdown-item",attrs:{active:t.active,disabled:t.disabled,href:t.href,to:t.to,tag:t.tag,exact:t.exact,append:t.append,replace:t.replace,"active-class":t.activeClass,"exact-active-class":t.exactActiveClass,event:t.event},on:{click:function(e){t.$emit("click")}}},[t._t("default")],2)},staticRenderFns:[],components:{bLink:h},mixins:[f]},A={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dropdown-divider",attrs:{role:"separator"}})},staticRenderFns:[],props:{}},N={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.tag,{tag:"component",staticClass:"dropdown-header",attrs:{tabindex:"-1"}},[t._t("default")],2)},staticRenderFns:[],props:{tag:{type:String,default:"h6"}}},I={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dropdown-select",class:{open:t.show,dropdown:!t.dropup,dropup:t.dropup}},[n("button",{class:["btn","dropdown",t.dropdownToggle,t.btnVariant,t.btnSize],attrs:{id:t.id,role:"button","aria-haspopup":"true","aria-expanded":"show",disabled:t.disabled},on:{click:function(e){e.preventDefault(),t.toggle(e)}}},[n("span",{staticClass:"checked-items",domProps:{innerHTML:t._s(t.displayItem)}})]),n("ul",{staticClass:"dropdown-menu",class:{"dropdown-menu-right":"right"==t.position},attrs:{"aria-labelledby":"dLabel"}},t._l(t.list,function(e){return n("li",[n("button",{staticClass:"dropdown-item",attrs:{click:t.select(e)}},[t._v(t._s(e.text))])])}))])},staticRenderFns:[],data:function(){return{show:!1,selected:!1}},computed:{btnVariant:function(){return this.variant&&"default"!==this.variant?"btn-"+this.variant:"btn-secondary"},btnSize:function(){return this.size&&"default"!==this.size?"btn-"+this.size:""},dropdownToggle:function(){return this.caret?"dropdown-toggle":""},displayItem:function(){if(this.returnObject&&this.model&&!this.model.text||!this.returnObject&&this.model&&0===this.model.length||this.forceDefault)return this.defaultText;if(this.returnObject&&this.model&&this.model.text)return this.model.text;if(!this.returnObject&&this.model){var t=this.model||"";return this.list.forEach(function(e){e.value===this.model&&(t=e.text)}),t}return""}},props:{id:{type:String},model:{required:!1},list:{type:Array,default:[],required:!0},caret:{type:Boolean,default:!0},position:{type:String,default:"left"},size:{type:String,default:""},variant:{type:String,default:"default"},defaultText:{type:String,default:"Plase select one"},forceDefault:{type:Boolean,default:!1},returnObject:{type:Boolean,default:!1},dropup:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},methods:{toggle:function(t){this.show=!this.show,this.show?(this.$root.$emit("shown:dropdown",this.id),t.stopPropagation()):this.$root.$emit("hidden::dropdown",this.id)},select:function(t){this.returnObject?this.model=t:this.model=t.value,this.show=!1,this.$root.$emit("selected::dropdown",this.id,this.model)}},created:function(){var t=this.$root;t.$on("hide::dropdown",function(){this.show=!1})}},D={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{class:t.classObject},[t._t("default")],2)},staticRenderFns:[],computed:{classObject:function(){return[this.inline?"form-inline":""]}},props:{inline:{type:Boolean,default:!1}}},j={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:["form-group","row",t.inputState],attrs:{role:"group","aria-describedby":t.describedBy}},[t.label?n("label",{class:[t.labelSrOnly?"sr-only":"col-form-label",t.labelLayout,t.labelAlignClass],attrs:{for:t.target,id:t.labelId},domProps:{innerHTML:t._s(t.label)}}):t._e(),n("div",{ref:"content",class:t.inputLayout},[t._t("default"),t.feedback?n("div",{staticClass:"form-text form-control-feedback",attrs:{id:t.feedbackId,role:"alert","aria-live":"assertive",
"aria-atomic":"true"},domProps:{innerHTML:t._s(t.feedback)}}):t._e(),t.description?n("small",{staticClass:"form-text text-muted",attrs:{id:t.descriptionId},domProps:{innerHTML:t._s(t.description)}}):t._e()],2)])},staticRenderFns:[],data:function(){return{target:null}},computed:{labelId:function(){return this.id&&this.label?this.id+"__BV_label_":null},descriptionId:function(){return this.id&&this.description?this.id+"__BV_description_":null},feedbackId:function(){return this.id&&this.feedback?this.id+"__BV_feedback_":null},describedBy:function(){return this.id&&(this.label||this.feedback||this.description)?[this.labelId,this.descriptionId,this.feedbackId].filter(function(t){return t}).join(" "):null},inputState:function(){return this.state?"has-"+this.state:""},labelLayout:function(){return this.labelSrOnly?null:this.horizontal?"col-sm-"+this.labelSize:"col-12"},labelAlignClass:function(){return this.labelSrOnly?null:this.labelTextAlign?"text-"+this.labelTextAlign:null},inputLayout:function(){return this.horizontal?"col-sm-"+(12-this.labelSize):"col-12"}},methods:{updateTarget:function(){var t=this.$refs.content;if(!t)return null;var e=t.querySelector(this.inputSelector);this.target=e&&e.id?e.id:null}},mounted:function(){this.updateTarget()},updated:function(){this.updateTarget()},props:{id:{type:String,default:null},state:{type:String,default:null},horizontal:{type:Boolean,default:!1},labelSize:{type:Number,default:3},labelTextAlign:{type:String,default:null},label:{type:String,default:null},labelSrOnly:{type:Boolean,default:!1},description:{type:String,default:null},feedback:{type:String,default:null},inputSelector:{type:String,default:"input,select,textarea,.form-control,.form-control-static,.dropdown,.dropup"}}},V={computed:{inputClass:function(){return[this.size?"form-control-"+this.size:null,this.state?"form-control-"+this.state:null]},custom:function(){return!this.plain}},props:{name:{type:String},disabled:{type:Boolean},plain:{type:Boolean,default:!1},state:{type:String},size:{type:String},id:{type:String}}},R={computed:{checkboxClass:function(){return{"custom-control":this.custom,"form-check-inline":this.inline}}}},z="undefined"!=typeof window,H=z&&window.UNSAFE_UID===!0||!z&&__webpack_require__.i({"NODE_ENV":"development"}).UNSAFE_UID===!0,M={computed:{_id:function(){return!H||this.id?this.id:"__b_"+this._uid+"__"}}},G={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",{class:[t.inputClass,t.checkboxClass,t.custom?"custom-checkbox":null]},[n("input",{class:[t.custom?"custom-control-input":null],attrs:{type:"checkbox",id:t._id,name:t.name,disabled:t.disabled},domProps:{value:t.value,checked:t.checked===t.value},on:{change:function(e){t.$emit("change",e.target.checked?t.value:t.uncheckedValue)}}}),t._v(" "),t.custom?n("span",{staticClass:"custom-control-indicator"}):t._e(),t._v(" "),n("span",{class:[t.custom?"custom-control-description":null]},[t._t("default")],2)])},staticRenderFns:[],mixins:[V,R,M],model:{prop:"checked",event:"change"},props:{value:{default:!0},uncheckedValue:{default:!1},checked:{default:!0}}},q={computed:{formOptions:function(){var t=this,e=this.options||{};return e=Array.isArray(e)?e.map(function(e){return"object"==typeof e?{value:e[t.valueField],text:e[t.textField],disabled:e.disabled||!1}:{text:String(e),value:e||{}}}):Object.keys(e).map(function(n){var i=e[n]||{};return"object"!=typeof i&&(i={text:String(i)}),i.value=i[t.valueField]||n,i})},selectedValue:function(){for(var t=this,e=this.formOptions,n=0;n<e.length;n++)if(e[n].value===t.localValue)return t.returnObject?e[n]:e[n].value}},props:{valueField:{type:[String],default:"value"},textField:{type:[String],default:"text"}},watch:{localValue:function(t,e){t!==e&&this.$emit("input",this.selectedValue)},value:function(t,e){t!==e&&(this.localValue=t)}}},K={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:[t.inputClass,this.stacked?"custom-controls-stacked":""]},t._l(t.formOptions,function(e){return n("label",{class:[t.checkboxClass,t.custom?"custom-radio":null]},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.localValue,expression:"localValue"}],ref:"inputs",refInFor:!0,class:t.custom?"custom-control-input":null,attrs:{type:"radio",name:e.name,id:e.id,disabled:e.disabled},domProps:{value:e.value,checked:t._q(t.localValue,e.value)},on:{__c:function(n){t.localValue=e.value}}}),t._v(" "),t.custom?n("span",{staticClass:"custom-control-indicator"}):t._e(),t._v(" "),n("span",{class:t.custom?"custom-control-description":null,domProps:{innerHTML:t._s(e.text)}})])}))},staticRenderFns:[],mixins:[V,R,q],data:function(){return{localValue:this.value}},computed:{inputState:function(){return this.state?"has-"+this.state:""}},props:{value:{},options:{type:[Array,Object],default:null,required:!0},stacked:{type:Boolean,default:!1},returnObject:{type:Boolean,default:!1}}},U={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{class:["form-control-static",t.inputClass],attrs:{id:t._id},domProps:{innerHTML:t._s(t.staticValue)}},[t._t("default")],2)},staticRenderFns:[],mixins:[V,M],computed:{staticValue:function(){return this.formatter?this.formatter(this.value):this.value}},props:{value:{default:null},formatter:{type:Function}}},W={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.static?n("b-form-input-static",{attrs:{id:t._id,value:t.value,formatter:t.formatter}}):n(t.textarea?"textarea":"input",{ref:"input",tag:"input",class:["form-control",t.inputClass],attrs:{type:t.type,name:t.name,id:t._id,disabled:t.disabled,rows:t.rows||t.rowsCount,placeholder:t.placeholder},domProps:{value:t.value},on:{input:function(e){t.onInput(e.target.value)},change:function(e){t.onChange(e.target.value)},keyup:function(e){t.onKeyUp(e)},focus:function(e){t.$emit("focus")},blur:function(e){t.$emit("blur")}}})},staticRenderFns:[],mixins:[V,M],components:{bFormInputStatic:U},computed:{rowsCount:function(){return(this.value||"").toString().split("\n").length}},methods:{format:function(t){if(this.formatter){var e=this.formatter(t);e!==t&&(t=e,this.$refs.input.value=e)}return t},onInput:function(t){this.lazyFormatter||(t=this.format(t)),this.$emit("input",t)},onChange:function(t){t=this.format(t),this.$emit("input",t),this.$emit("change",t)},onKeyUp:function(t){this.$emit("keyup",t)}},props:{value:{default:null},type:{type:String,default:"text"},static:{type:Boolean,default:!1},placeholder:{type:String,default:null},rows:{type:Number,default:null},textarea:{type:Boolean,default:!1},formatter:{type:Function},lazyFormatter:{type:Boolean,default:!1}}},Y={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",{class:[t.custom?"custom-file":null,t.inputClass],on:{dragover:function(e){e.stopPropagation(),e.preventDefault(),t.dragover(e)}}},[t.dragging?n("span",{staticClass:"drop-here",attrs:{"data-drop":t.dropLabel},on:{dragover:function(e){e.stopPropagation(),e.preventDefault(),t.dragover(e)},drop:function(e){e.stopPropagation(),e.preventDefault(),t.drop(e)},dragleave:function(e){e.stopPropagation(),e.preventDefault(),t.dragging=!1}}}):t._e(),n("input",{ref:"input",staticClass:"custom-file-input",attrs:{type:"file",name:t.name,id:t._id,disabled:t.disabled,accept:t.accept,multiple:t.multiple,webkitdirectory:t.directory},on:{change:t.onFileChange}}),t._v(" "),t.custom?n("span",{class:["custom-file-control",t.dragging?"dragging":null,t.inputClass],attrs:{"data-choose":t.computedChooseLabel,"data-selected":t.selectedLabel}}):t._e()])},staticRenderFns:[],mixins:[V,M],data:function(){return{selectedFile:null,dragging:!1}},computed:{selectedLabel:function(){return this.selectedFile&&0!==this.selectedFile.length?this.multiple?1===this.selectedFile.length?this.selectedFile[0].name:this.selectedFormat.replace(":names",this.selectedFile.map(function(t){return t.name}).join(",")).replace(":count",this.selectedFile.length):this.selectedFile.name:this.placeholder||"No file chosen"},computedChooseLabel:function(){return this.chooseLabel||(this.multiple?"Choose Files":"Choose File")}},watch:{selectedFile:function(t,e){t!==e&&(!t&&this.multiple?this.$emit("input",[]):this.$emit("input",t))}},methods:{onFileChange:function(t){var e=this;this.$emit("change",t);var n=t.dataTransfer&&t.dataTransfer.items;if(n&&!this.noTraverse){for(var i=[],s=0;s<n.length;s++){var o=n[s].webkitGetAsEntry();o&&i.push(e.traverseFileTree(o))}return void Promise.all(i).then(function(t){e.setFiles(Array.prototype.concat.apply([],t))})}this.setFiles(t.target.files||t.dataTransfer.files)},setFiles:function(t){var e=this;if(!t)return void(this.selectedFile=null);if(!this.multiple)return void(this.selectedFile=t[0]);for(var n=[],i=0;i<t.length;i++)t[i].type.match(e.accept)&&n.push(t[i]);this.selectedFile=n},dragover:function(t){this.noDrop||(this.dragging=!0,t.dataTransfer.dropEffect="copy")},drop:function(t){this.noDrop||(this.dragging=!1,t.dataTransfer.files&&t.dataTransfer.files.length>0&&this.onFileChange(t))},traverseFileTree:function(t,e){var n=this;return new Promise(function(i){e=e||"",t.isFile?t.file(function(t){t.$path=e,i(t)}):t.isDirectory&&t.createReader().readEntries(function(s){for(var o=[],r=0;r<s.length;r++)o.push(n.traverseFileTree(s[r],e+t.name+"/"));Promise.all(o).then(function(t){i(Array.prototype.concat.apply([],t))})})})}},props:{accept:{type:String,default:""},placeholder:{type:String,default:null},chooseLabel:{type:String,default:null},multiple:{type:Boolean,default:!1},directory:{type:Boolean,default:!1},noTraverse:{type:Boolean,default:!1},selectedFormat:{type:String,default:":count Files"},noDrop:{type:Boolean,default:!1},dropLabel:{type:String,default:"Drop files here"}}},J={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("select",{directives:[{name:"model",rawName:"v-model",value:t.localValue,expression:"localValue"}],ref:"input",class:[t.inputClass,t.custom?"custom-select":null],attrs:{name:t.name,id:t._id,disabled:t.disabled},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.localValue=e.target.multiple?n:n[0]}}},t._l(t.formOptions,function(e){return n("option",{attrs:{disabled:e.disabled},domProps:{value:e.value,innerHTML:t._s(e.text)}})}))},staticRenderFns:[],mixins:[V,q,M],data:function(){return{localValue:this.value}},props:{value:{},options:{type:[Array,Object],required:!0},returnObject:{type:Boolean,default:!1}}},Z={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:["jumbotron",t.fluid?"jumbotron-fluid":null]},[n("div",{class:t.containerFluid?"container-fluid":"container"},[t.header?n("h1",{staticClass:"display-3",domProps:{innerHTML:t._s(t.header)}}):t._e(),t.lead?n("p",{staticClass:"lead",domProps:{innerHTML:t._s(t.lead)}}):t._e(),t._t("default")],2)])},staticRenderFns:[],computed:{},props:{fluid:{type:Boolean,default:!1},containerFluid:{type:Boolean,default:!1},header:{type:String,default:null},lead:{type:String,default:null}}},Q={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{class:["badge",t.badgeVariant,t.badgePill]},[t._t("default")],2)},staticRenderFns:[],computed:{badgeVariant:function(){return this.variant&&"default"!==this.variant?"badge-"+this.variant:"badge-default"},badgePill:function(){return this.pill?"badge-pill":""}},props:{variant:{type:String,default:"default"},pill:{type:Boolean,default:!1}}},X={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.tag,{tag:"component",class:["list-group",t.flush?"list-group-flush":null]},[t._t("default")],2)},staticRenderFns:[],props:{tag:{type:String,default:"div"},flush:{type:Boolean,default:!1}}},tt=["a","router-link","button","b-link"],et={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.myTag,{ref:"item",tag:"component",class:t.classObject,attrs:{to:t.to,href:t.href}},[t._t("default")],2)},staticRenderFns:[],components:{bLink:h},computed:{classObject:function(){return["list-group-item",this.listState,this.active?"active":null,this.disabled?"disabled":null,this.isAction?"list-group-item-action":null]},isAction:function(){return this.action!==!1&&(this.action||this.to||this.href||tt.indexOf(this.tag)!==-1)},listState:function(){return this.variant?"list-group-item-"+this.variant:null},myTag:function(){return this.tag?this.tag:this.to||this.href?"b-link":"div"}},props:{tag:{type:String,default:null},active:{type:Boolean,default:!1},action:{type:Boolean,default:null},disabled:{type:Boolean,default:!1},variant:{type:String,default:null},to:{type:String,default:null},href:{type:String,default:null}}},nt={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"media"},[t.rightAlign?t._e():n("div",{class:["d-flex","mr-3",t.verticalAlignClass]},[t._t("aside")],2),n("div",{staticClass:"media-body"},[t._t("default")],2),t.rightAlign?n("div",{class:["d-flex","ml-3",t.verticalAlignClass]},[t._t("aside")],2):t._e()])},staticRenderFns:[],computed:{verticalAlignClass:function(){return"align-self-"+this.verticalAlign}},props:{rightAlign:{type:Boolean,default:!1},verticalAlign:{type:String,default:"top"}}},it=['button:not([disabled]):not([style*="display: none"]):not([style*="display:none"])','input:not([disabled]):not([style*="display: none"]):not([style*="display:none"])','select:not([disabled]):not([style*="display: none"]):not([style*="display:none"])','textarea:not([disabled]):not([style*="display: none"]):not([style*="display:none"])','a:not([disabled]):not(.disabled):not([style*="display: none"]):not([style*="display:none"])','[tabindex]:not([disabled]):not(.disabled):not([style*="display: none"]):not([style*="display:none"])'].join(","),st={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("transition-group",{attrs:{"enter-class":"hidden","enter-to-class":"","enter-active-class":"","leave-class":"show","leave-active-class":"","leave-to-class":"hidden"},on:{"after-enter":t.focusFirst}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.is_visible,expression:"is_visible"}],key:"modal",class:["modal",{fade:t.fade,show:t.is_visible}],attrs:{id:t.id,role:"dialog"},on:{click:function(e){t.onClickOut(e)},keyup:function(e){return"button"in e||!t._k(e.keyCode,"esc",27)?void t.onEsc(e):null}}},[n("div",{class:["modal-dialog","modal-"+t.size]},[n("div",{ref:"content",staticClass:"modal-content",attrs:{tabindex:"-1",role:"document","aria-labelledby":t.hideHeader||!t.id?null:t.id+"_modal_title","aria-describedby":t.id?t.id+"_modal_body":null},on:{click:function(t){t.stopPropagation()}}},[t.hideHeader?t._e():n("header",{ref:"header",staticClass:"modal-header"},[t._t("modal-header",[n("h5",{staticClass:"modal-title",attrs:{id:t.id?t.id+"_modal_title":null}},[t._t("modal-title",[t._v(t._s(t.title))])],2),t.hideHeaderClose?t._e():n("button",{staticClass:"close",attrs:{type:"button","aria-label":t.closeTitle},on:{click:t.hide}},[n("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])],2),n("div",{ref:"body",staticClass:"modal-body",attrs:{id:t.id?t.id+"_modal_body":null}},[t._t("default")],2),t.hideFooter?t._e():n("footer",{ref:"footer",staticClass:"modal-footer"},[t._t("modal-footer",[t.okOnly?t._e():n("b-btn",{attrs:{variant:"secondary"},on:{click:function(e){t.hide(!1)}}},[t._v(t._s(t.closeTitle))]),n("b-btn",{attrs:{variant:"primary"},on:{click:function(e){t.hide(!0)}}},[t._v(t._s(t.okTitle))])])],2)])])]),t.is_visible?n("div",{key:"modal-backdrop",class:["modal-backdrop",{fade:t.fade,show:t.is_visible}]}):t._e()])],1)},staticRenderFns:[],components:{bBtn:v},data:function(){return{is_visible:!1,return_focus:this.returnFocus||null}},model:{prop:"visible",event:"change"},computed:{body:function(){if("undefined"!=typeof document)return document.querySelector("body")}},watch:{visible:function(t,e){t!==e&&(t?this.show():this.hide())}},props:{id:{type:String,default:null},title:{type:String,default:""},size:{type:String,default:"md"},fade:{type:Boolean,default:!0},closeTitle:{type:String,default:"Close"},okTitle:{type:String,default:"OK"},closeOnBackdrop:{type:Boolean,default:!0},closeOnEsc:{type:Boolean,default:!0},hideHeader:{type:Boolean,default:!1},hideFooter:{type:Boolean,default:!1},okOnly:{type:Boolean,default:!1},hideHeaderClose:{type:Boolean,default:!1},returnFocus:{default:null}},methods:{show:function(){this.is_visible||(this.is_visible=!0,this.$root.$emit("shown::modal",this.id),this.body.classList.add("modal-open"),this.$emit("shown"),this.$emit("change",!0),"undefined"!=typeof document&&(document.removeEventListener("focusin",this.enforceFocus,!1),document.addEventListener("focusin",this.enforceFocus,!1)))},hide:function(t){if(this.is_visible){var e=!1,n={isOK:t,cancel:function(){e=!0}};this.$emit("change",!1),this.$emit("hidden",n),t===!0?this.$emit("ok",n):t===!1&&this.$emit("cancel",n),e||("undefined"!=typeof document&&(document.removeEventListener("focusin",this.enforceFocus,!1),this.returnFocusTo()),this.is_visible=!1,this.$root.$emit("hidden::modal",this.id),this.body.classList.remove("modal-open"))}},onClickOut:function(){this.closeOnBackdrop&&this.hide()},onEsc:function(){this.is_visible&&this.closeOnEsc&&this.hide()},focusFirst:function(){if(!document.activeElement||!this.$refs.content.contains(document.activeElement)){var t;this.$refs.footer&&(t=this.$refs.footer.querySelector(it)),!t&&this.$refs.body&&(t=this.$refs.body.querySelector(it)),!t&&this.$refs.header&&(t=this.$refs.header.querySelector(it)),t||(t=this.$refs.content),t&&t.focus&&t.focus()}},returnFocusTo:function(){if(this.return_focus){var t="string"==typeof this.return_focus?document.querySelector(this.returnFocus):this.return_focus;t&&t.$el&&"function"==typeof t.$el.focus?t.$el.focus():t&&"function"==typeof t.focus&&t.focus()}},enforceFocus:function(t){this.is_visible&&document!==t.target&&this.$refs.content&&this.$refs.content!==t.target&&!this.$refs.content.contains(t.target)&&this.$refs.content.focus()}},created:function(){var t=this;this.$root.$on("show::modal",function(e,n){e===t.id&&(t.return_focus=n||t.return_focus||t.returnFocus||null,t.show())}),this.$root.$on("hide::modal",function(e){e===t.id&&t.hide()})},mounted:function(){this.visible===!0&&this.show()},destroyed:function(){"undefined"!=typeof document&&document.removeEventListener("focusin",this.enforceFocus,!1)}},ot={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.type,{tag:"component",class:t.classObject,attrs:{role:t.isNavBar?null:"navigation"}},[t._t("default")],2)},staticRenderFns:[],computed:{classObject:function(){return{nav:!0,"navbar-nav":this.isNavBar,"nav-tabs":this.tabs,"nav-pills":this.pills,"flex-column":this.vertical,"nav-fill":this.fill}}},props:{type:{type:String,default:"ul"},fill:{type:Boolean,default:!1},tabs:{type:Boolean,default:!1},pills:{type:Boolean,default:!1},vertical:{type:Boolean,default:!1},isNavBar:{type:Boolean,default:!1}}},rt={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"nav-item"},[n("b-link",{staticClass:"nav-link",attrs:{active:t.active,disabled:t.disabled,href:t.href,to:t.to,tag:t.tag,exact:t.exact,append:t.append,replace:t.replace,"active-class":t.activeClass,"exact-active-class":t.exactActiveClass,event:t.event},on:{click:function(e){t.$emit("click")}}},[t._t("default")],2)],1)},staticRenderFns:[],components:{bLink:h},mixins:[f]},at={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{class:["nav-item","dropdown",{dropup:t.dropup,show:t.visible}]},[n("a",{ref:"button",class:["nav-link",t.dropdownToggle,{disabled:t.disabled}],attrs:{href:"#",id:t.id?t.id+"__BV_button_":null,"aria-haspopup":"true","aria-expanded":t.visible?"true":"false",disabled:t.disabled},on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.toggle(e)},keydown:[function(e){return"button"in e||!t._k(e.keyCode,"enter",13)?(e.stopPropagation(),e.preventDefault(),void t.toggle(e)):null},function(e){return"button"in e||!t._k(e.keyCode,"space",32)?(e.stopPropagation(),e.preventDefault(),void t.toggle(e)):null}]}},[t._t("text",[n("span",{domProps:{innerHTML:t._s(t.text)}})])],2),n("div",{ref:"menu",class:["dropdown-menu",{"dropdown-menu-right":t.right}],attrs:{role:"menu","aria-labelledby":t.id?t.id+"__BV_button_":null},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"esc",27)?void t.onEsc(e):null},keydown:[function(e){return"button"in e||!t._k(e.keyCode,"tab",9)?void t.onTab(e):null},function(e){return"button"in e||!t._k(e.keyCode,"up",38)?void t.focusNext(e,!0):null},function(e){return"button"in e||!t._k(e.keyCode,"down",40)?void t.focusNext(e,!1):null}]}},[t._t("default")],2)])},staticRenderFns:[],mixins:[y,k],data:function(){return{visible:!1}},computed:{dropdownToggle:function(){return this.caret?"dropdown-toggle":""}},props:{id:{type:String},caret:{type:Boolean,default:!0}},methods:{clickOutListener:function(){this.visible=!1}}},lt={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{class:t.classObject,attrs:{type:"button","aria-label":t.label,"aria-controls":t.target.id?t.target.id:t.target,"aria-explanded":t.toggleState},on:{click:t.onclick}},[n("span",{staticClass:"navbar-toggler-icon"})])},staticRenderFns:[],computed:{classObject:function(){return["navbar-toggler","navbar-toggler-"+this.position]}},data:function(){return{toggleState:!1}},props:{label:{type:String,default:"Toggle navigation"},position:{type:String,default:"right"},target:{required:!0}},methods:{onclick:function(){var t=this.target;t.toggle&&t.toggle(),this.$root.$emit("collapse::toggle",this.target)}},created:function(){var t=this;this.$root.$on("collapse::toggle::state",function(e,n){e===t.target&&(t.toggleState=n)})}},ut={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{class:t.classObject},[t._t("default")],2)},staticRenderFns:[],computed:{classObject:function(){return["navbar",this.type?"navbar-"+this.type:null,this.variant?"bg-"+this.variant:null,this.fixed?"fixed-"+this.fixed:null,this.sticky?"sticky-top":null,this.toggleable?"navbar-toggleable-"+this.toggleBreakpoint:null]}},props:{type:{type:String,default:"light"},variant:{type:String},toggleable:{type:Boolean,default:!1},toggleBreakpoint:{type:String,default:"sm"},fixed:{type:String},sticky:{type:String}}},ct={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:["btn-group","pagination",t.btnSize],attrs:{role:"group",tabindex:"0","aria-label":t.ariaLabel?t.ariaLabel:null},on:{focusin:function(e){return e.target!==e.currentTarget?null:void t.focusCurrent(e)},keydown:[function(e){return"button"in e||!t._k(e.keyCode,"left",37)?"button"in e&&0!==e.button?null:(e.preventDefault(),void t.focusPrev(e)):null},function(e){return"button"in e||!t._k(e.keyCode,"right",39)?"button"in e&&2!==e.button?null:(e.preventDefault(),void t.focusNext(e)):null},function(e){return("button"in e||!t._k(e.keyCode,"left",37))&&e.shiftKey?"button"in e&&0!==e.button?null:(e.preventDefault(),void t.focusFirst(e)):null},function(e){return("button"in e||!t._k(e.keyCode,"right",39))&&e.shiftKey?"button"in e&&2!==e.button?null:(e.preventDefault(),void t.focusLast(e)):null}]}},[n("button",{ref:"buttonPrev",class:["btn","btn-"+t.secondaryVariant],attrs:{type:"button",disabled:t.isActive(1),"aria-label":t.labelPrev,tabindex:"-1"},on:{click:function(e){e.preventDefault(),t.isActive(1)?t._return:t.currentPage--}}},[n("span",{attrs:{"aria-hidden":"true"}},[t._v("«")])]),t._v(" "),t.showPrev?n("button",{ref:"buttonFirst",class:["btn","btn-"+t.secondaryVariant,t.isActive(1)?"active":""],attrs:{type:"button","aria-label":t.labelPage+" 1","aria-current":t.isActive(1)?"true":"false","aria-setsize":t.numberOfPages,"aria-posinset":1,tabindex:"-1"},on:{click:function(e){e.preventDefault(),t.currentPage=1}}},[t._v("1")]):t._e(),t._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:t.showPrev,expression:"showPrev"}],class:["btn","btn-"+t.secondaryVariant]},[t._v("...")]),t._v(" "),t._l(t.pageLinks,function(e,i){return n("button",{ref:"buttonPages",refInFor:!0,class:["btn",t.btnVariant(i),t.isActive(i+t.diff)?"active":"",t.isActive(i+t.diff)?"":"hidden-xs-down"],attrs:{type:"button","aria-label":t.labelPage+" "+(i+t.diff),"aria-current":t.isActive(i+t.diff)?"true":"false","aria-setsize":t.numberOfPages,"aria-posinset":i+t.diff,tabindex:"-1"},on:{click:function(e){e.preventDefault(),t.currentPage=i+t.diff}}},[t._v(t._s(i+t.diff))])}),t._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:t.showNext,expression:"showNext"}],class:["btn","btn-"+t.secondaryVariant]},[t._v("...")]),t._v(" "),t.showNext?n("button",{ref:"buttonLast",class:["btn","btn-"+t.secondaryVariant,t.isActive(t.numberOfPages)?"active":""],attrs:{type:"button","aria-label":t.labelPage+" "+t.numberOfPages,"aria-current":t.isActive(t.numberOfPages)?"true":"false","aria-setsize":t.numberOfPages,"aria-posinset":t.numberOfPages,tabindex:"-1"},on:{click:function(e){e.preventDefault(),t.currentPage=t.numberOfPages}}},[t._v(t._s(t.numberOfPages))]):t._e(),t._v(" "),n("button",{ref:"buttonNext",class:["btn","btn-"+t.secondaryVariant],attrs:{type:"button",disabled:t.isActive(t.numberOfPages),"aria-label":t.labelNext,tabindex:"-1"},on:{click:function(e){e.preventDefault(),t.isActive(t.numberOfPages)?t._return:t.currentPage++}}},[n("span",{attrs:{"aria-hidden":"true"}},[t._v("»")])])],2)},staticRenderFns:[],data:function(){return{diff:1,showPrev:!1,showNext:!1,currentPage:this.value}},computed:{numberOfPages:function(){var t=Math.ceil(this.totalRows/this.perPage);return t<1?1:t},btnSize:function(){return this.size&&"default"!==this.size?"pagination-"+this.size:""},pageLinks:function(){return this.currentPage>this.numberOfPages&&(this.currentPage=1),this.diff=1,this.showPrev=!1,this.showNext=!1,this.numberOfPages<=this.limit?this.numberOfPages:this.currentPage<=this.limit-2?(this.diff=1,this.showNext=!0,this.limit-2):this.currentPage>this.numberOfPages-this.limit+2?(this.diff=this.numberOfPages-this.limit+3,this.showPrev=!0,this.limit-2):(this.diff=this.currentPage-1,this.showPrev=this.currentPage>=this.limit,this.showNext=this.currentPage<=this.numberOfPages-this.limit+1,this.limit)}},methods:{isActive:function(t){return t===this.currentPage},btnVariant:function(t){return t+this.diff===this.currentPage?"btn-"+this.variant:"btn-"+this.secondaryVariant},getButtons:function(){var t=[this.$refs.buttonPrev];return this.showPrev&&t.push(this.$refs.buttonFirst),t=t.concat(this.$refs.buttonPages),this.showNext&&t.push(this.$refs.buttonLast),t.push(this.$refs.buttonNext),t},setBtnFocus:function(t){this.$nextTick(function(){t.focus()})},focusFirst:function(){var t=this.getButtons().find(function(t){return!t.disabled});t&&t.focus&&t!==document.activeElement&&this.setBtnFocus(t)},focusLast:function(){var t=this.getButtons().reverse().find(function(t){return!t.disabled});t&&t.focus&&t!==document.activeElement&&this.setBtnFocus(t)},focusCurrent:function(){var t=this,e=this.getButtons().find(function(e){return parseInt(e.getAttribute("aria-posinset"),10)===t.currentPage});e&&e.focus?this.setBtnFocus(e):this.focusFirst()},focusPrev:function(){var t=this.getButtons(),e=t.indexOf(document.activeElement);e>0&&!t[e-1].disabled&&t[e-1].focus&&this.setBtnFocus(t[e-1])},focusNext:function(){var t=this.getButtons(),e=t.indexOf(document.activeElement),n=t.length-1;e<n&&!t[e+1].disabled&&t[e+1].focus&&this.setBtnFocus(t[e+1])},_return:function(){}},watch:{currentPage:function(t,e){t!==e&&this.$emit("input",t)},value:function(t,e){t!==e&&(this.currentPage=t)}},props:{value:{type:Number,default:1},limit:{type:Number,default:3},perPage:{type:Number,default:20},totalRows:{type:Number,default:20},size:{type:String,default:"md"},variant:{type:String,default:"primary"},secondaryVariant:{type:String,default:"secondary"},ariaLabel:{type:String,default:"Pagination"},labelPrevPage:{type:String,default:"Previous Page"},labelNextPage:{type:String,default:"Next Page"},labelPage:{type:String,default:"Page"}}},dt={click:{click:"toggle"},hover:{mouseenter:"show",mouseleave:"hide"},focus:{focus:"show",blur:"hide"}},ft={top:"bottom center",bottom:"top center",left:"middle right",right:"middle left"},ht="bs-tether",pt={element:!1,enabled:!1},vt=150,gt={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("span",{ref:"trigger"},[t._t("default")],2),n("div",{ref:"popover",staticClass:"popover fade",class:[t.classState?"show":"",t.popoverAlignment],style:t.popoverStyle,attrs:{tabindex:"-1"},on:{focus:function(e){t.$emit("focus")},blur:function(e){t.$emit("blur")}}},[n("div",{staticClass:"popover-arrow"}),t.title?n("h3",{staticClass:"popover-title",domProps:{innerHTML:t._s(t.title)}}):t._e(),n("div",{staticClass:"popover-content"},[n("div",{staticClass:"popover-content-wrapper"},[t._t("content",[n("span",{domProps:{innerHTML:t._s(t.content)}})])],2)])])])},staticRenderFns:[],props:{constraints:{type:Array,default:function(){return[]}},content:{type:String,default:""},debounce:{type:[Number],default:300,validator:function(t){return t>=0}},delay:{type:[Number,Object],default:0,validator:function(t){return"number"==typeof t?t>=0:null!==t&&"object"==typeof t&&("number"==typeof t.show&&"number"==typeof t.hide&&t.show>=0&&t.hide>=0)}},offset:{type:String,default:"0 0",validator:function(t){return/^((0\s?)|([+-]?[0-9]+(px|%)\s?)){2}$/.test(t)}},placement:{type:String,default:"top",validator:function(t){return Object.keys(ft).indexOf(t)!==-1}},popoverStyle:{type:Object,default:null},show:{type:Boolean,default:null},targetOffset:{type:String,default:"0 0",validator:function(t){return/^((0\s?)|([+-]?[0-9]+(px|%)\s?)){2}$/.test(t)}},title:{type:String,default:""},triggers:{type:[Boolean,String,Array],default:function(){return["click","focus"]},validator:function(t){if(t===!1||""===t)return!0;if("string"==typeof t)return Object.keys(dt).indexOf(t)!==-1;if(Array.isArray(t)){var e=Object.keys(dt);return t.forEach(function(t){if(e.indexOf(t)===-1)return!1}),!0}return!1}}},data:function(){return{triggerState:this.show,classState:this.show,lastEvent:null}},computed:{normalizedTriggers:function(){return this.triggers===!1?[]:"string"==typeof this.triggers?[this.triggers]:this.triggers},popoverAlignment:function(){return this.placement&&"default"!==this.placement?"popover-"+this.placement:"popover-top"},showState:function(){return this.show!==!1&&(this.triggerState||this.show)}},watch:{constraints:function(){this.setOptions()},normalizedTriggers:function(t,e){this.updateListeners(t,e)},offset:function(){this.setOptions()},placement:function(){this.setOptions()},showState:function(t){var e=this,n=this.getDelay(t);clearTimeout(this._timeout),n?this._timeout=setTimeout(function(){return e.togglePopover(t)},n):this.togglePopover(t)}},methods:{addListener:function(t){var e=this;for(var n in dt[t])e._trigger.addEventListener(n,function(t){return e.eventHandler(t)})},destroyTether:function(){if(this._tether&&!this.showState){this._tether.destroy(),this._tether=null;var t=new RegExp("(^|[^-]\\b)("+ht+"\\S*)","g");this._trigger.className=this._trigger.className.replace(t,"")}},eventHandler:function(t){var e=this;if(!(this.normalizedTriggers.length>1&&this.debounce>0&&null!==this.lastEvent&&t.timeStamp<=this.lastEvent+this.debounce))for(var n in dt)for(var i in dt[n])if(i===t.type){var s=dt[n][i];return void(("toggle"===s||e.triggerState&&"hide"===s||!e.triggerState&&"show"===s)&&(e.triggerState=!e.triggerState,e.lastEvent=t.timeStamp))}},getDelay:function(t){return"object"==typeof this.delay?t?this.delay.show:this.delay.hide:this.delay},getTetherOptions:function(){return{attachment:ft[this.placement],element:this._popover,target:this._trigger,classes:pt,classPrefix:ht,offset:this.offset,constraints:this.constraints,targetOffset:this.targetOffset}},hidePopover:function(){var t=this;this.classState=!1,
clearTimeout(this._timeout),this._timeout=setTimeout(function(){t._popover.style.display="none",t.destroyTether()},vt)},refreshPosition:function(){var t=this;this._tether&&this.$nextTick(function(){t._tether.position()})},removeListener:function(t){var e=this;for(var n in dt[t])e._trigger.removeEventListener(n,function(t){return e.eventHandler(t)})},setOptions:function(){this._tether&&this._tether.setOptions(this.getTetherOptions())},showPopover:function(){var e=this;clearTimeout(this._timeout),this._tether||(this._tether=new t(this.getTetherOptions())),this._popover.style.display="block",this.refreshPosition(),this.$nextTick(function(){e.classState=!0})},togglePopover:function(t){this.$emit("showChange",t),t?(this.showPopover(),this.$root.$emit("shown::popover")):(this.hidePopover(),this.$root.$emit("hidden::popover"))},updateListeners:function(t,e){var n=this;void 0===e&&(e=[]);var i=[],s=[];t.forEach(function(t){e.indexOf(t)===-1&&i.push(t)}),e.forEach(function(e){t.indexOf(e)===-1&&s.push(e)}),i.forEach(function(t){return n.addListener(t)}),s.forEach(function(t){return n.removeListener(t)})}},created:function(){var t=this;this.$root.$on("hide::popover",function(){t.triggerState=!1})},mounted:function(){this._trigger=this.$refs.trigger.children[0]||this.$refs.trigger,this._popover=this.$refs.popover,this._popover.style.display="none",this._timeout=0,this.updateListeners(this.normalizedTriggers),this.showState&&this.showPopover()},updated:function(){this.refreshPosition()},beforeDestroy:function(){var t=this;this.normalizedTriggers.forEach(function(e){return t.removeListener(e)}),clearTimeout(this._timeout),this.destroyTether()}},bt={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"progress"},[n("transition",[n("div",{class:t.classObject,style:t.styleObject,attrs:{role:"progressbar","aria-valuenow":t.value,"aria-valuemin":0,"aria-valuemax":t.max}},[t._t("default",[t.showProgress?[t._v(t._s(t.progress)+"%")]:t.showValue?[t._v(t._s(t.value))]:t._e()])],2)])],1)},staticRenderFns:[],computed:{classObject:function(){return["progress-bar",this.progressVariant,this.striped||this.animated?"progress-bar-striped":"",this.animated?"progress-bar-animated":""]},styleObject:function(){return{width:this.progress+"%"}},progressVariant:function(){return this.variant?"bg-"+this.variant:null},progress:function(){var t=Math.pow(10,this.precision);return Math.round(100*t*this.value/this.max)/t}},props:{striped:{type:Boolean,default:!1},animated:{type:Boolean,default:!1},precision:{type:Number,default:0},value:{type:Number,default:0},max:{type:Number,default:100},variant:{type:String,default:null},showProgress:{type:Boolean,default:!1},showValue:{type:Boolean,default:!1}}},mt=function(t){return t?t instanceof Object?Object.keys(t).map(function(e){return mt(t[e])}).join(" "):String(t):""},yt=function(t,e,n){return mt(t[n]).localeCompare(mt(e[n]),void 0,{numeric:!0})},_t={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",{class:["table",t.striped?"table-striped":"",t.hover?"table-hover":""]},[n("thead",[n("tr",t._l(t.fields,function(e,i){return n("th",{class:[e.sortable?"sorting":null,t.sortBy===i?"sorting_"+(t.sortDesc?"desc":"asc"):"",e.class?e.class:null],domProps:{innerHTML:t._s(e.label)},on:{click:function(n){t.headClick(e,i)}}})}))]),n("tbody",[t._l(t._items,function(e,i){return n("tr",{key:t.items_key,class:[e.state?"table-"+e.state:null],on:{click:function(n){t.rowClicked(e,i)}}},t._l(t.fields,function(s,o){return n("td",{class:[s.class?s.class:null]},[t._t(o,[t._v(t._s(e[o]))],{value:e[o],item:e,index:i})],2)}))}),t.showEmpty&&0===t.items.length?n("tr",{attrs:{colspan:t.fields.length}},[t._t("empty",[n("div",{staticClass:"text-center",domProps:{innerHTML:t._s(t.emptyText)}})])],2):t._e(),t.showEmpty&&t.items.length>0&&0===t._items.length?n("tr",{attrs:{colspan:t.fields.length}},[t._t("emptyfiltered",[n("div",{staticClass:"text-center",domProps:{innerHTML:t._s(t.emptyFilteredText)}})])],2):t._e()],2)])},staticRenderFns:[],components:{bPagination:ct},data:function(){return{sortBy:null,sortDesc:!0}},props:{items:{type:Array,default:function(){return[]}},fields:{type:Object,default:function(){}},striped:{type:Boolean,default:!1},hover:{type:Boolean,default:!1},perPage:{type:Number,default:null},items_key:{type:String,default:null},currentPage:{type:Number,default:1},filter:{type:[String,RegExp,Function],default:null},sortCompare:{type:Function,default:null},itemsProvider:{type:Function,default:null},value:{type:Array,default:function(){return[]}},showEmpty:{type:Boolean,default:!1},emptyText:{type:String,default:"There are no records to show"},emptyFilteredText:{type:String,default:"There are no records matching your request"}},computed:{_items:function(){var t=this;if(!this.items)return[];if(this.itemsProvider)return this.itemsProvider(this);var e=this.items.slice();if(this.filter)if(this.filter instanceof Function)e=e.filter(this.filter);else{var n;n=this.filter instanceof RegExp?this.filter:new RegExp(".*"+this.filter+".*","ig"),e=e.filter(function(t){var e=n.test(mt(t));return n.lastIndex=0,e})}var i=this.sortCompare||yt;return this.sortBy&&(e=e.sort(function(e,n){var s=i(e,n,t.sortBy);return t.sortDesc?s:s*-1})),this.$emit("input",e),this.perPage&&(e=e.slice((this.currentPage-1)*this.perPage,this.currentPage*this.perPage)),e}},methods:{rowClicked:function(t,e){this.$emit("row-clicked",t,e)},headClick:function(t,e){return t.sortable?(e===this.sortBy&&(this.sortDesc=!this.sortDesc),void(this.sortBy=e)):void(this.sortBy=null)}}},kt={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.tag,{tag:"component",staticClass:"tabs",attrs:{id:t.id||null}},[t.bottom?n("div",{ref:"tabsContainer",class:["tab-content",{"card-block":t.card}]},[t._t("default"),t.tabs&&t.tabs.length?t._e():t._t("empty")],2):t._e(),n("div",{class:{"card-header":t.card}},[n("ul",{class:["nav","nav-"+t.navStyle,t.card?"card-header-"+t.navStyle:null],attrs:{role:"tablist",tabindex:"0","aria-setsize":t.tabs.length,"aria-posinset":t.currentTab+1},on:{keydown:[function(e){return"button"in e||!t._k(e.keyCode,"left",37)?"button"in e&&0!==e.button?null:void t.previousTab(e):null},function(e){return"button"in e||!t._k(e.keyCode,"up",38)?void t.previousTab(e):null},function(e){return"button"in e||!t._k(e.keyCode,"right",39)?"button"in e&&2!==e.button?null:void t.nextTab(e):null},function(e){return"button"in e||!t._k(e.keyCode,"down",40)?void t.nextTab(e):null},function(e){return("button"in e||!t._k(e.keyCode,"left",37))&&e.shiftKey?"button"in e&&0!==e.button?null:void t.setTab(-1,!1,1):null},function(e){return("button"in e||!t._k(e.keyCode,"up",38))&&e.shiftKey?void t.setTab(-1,!1,1):null},function(e){return("button"in e||!t._k(e.keyCode,"right",39))&&e.shiftKey?"button"in e&&2!==e.button?null:void t.setTab(t.tabs.length,!1,-1):null},function(e){return("button"in e||!t._k(e.keyCode,"down",40))&&e.shiftKey?void t.setTab(t.tabs.length,!1,-1):null}]}},[t._l(t.tabs,function(e,i){return n("li",{staticClass:"nav-item",attrs:{role:"presentation"}},[e.headHtml?n("div",{class:["tab-head",{small:t.small,active:e.localActive,disabled:e.disabled}],attrs:{role:"heading",tabindex:"-1"},domProps:{innerHTML:t._s(e.headHtml)}}):n("a",{class:["nav-link",{small:t.small,active:e.localActive,disabled:e.disabled}],attrs:{href:e.href,role:"tab","aria-selected":e.localActive?"true":"false","aria-controls":e.id||null,id:e.controlledBy||null,tabindex:"-1"},domProps:{innerHTML:t._s(e.title)},on:{click:function(e){e.preventDefault(),e.stopPropagation(),t.setTab(i)},keydown:[function(e){return"button"in e||!t._k(e.keyCode,"space",32)?(e.preventDefault(),e.stopPropagation(),void t.setTab(i)):null},function(e){return"button"in e||!t._k(e.keyCode,"enter",13)?(e.preventDefault(),e.stopPropagation(),void t.setTab(i)):null}]}})])}),t._t("tabs")],2)]),t.bottom?t._e():n("div",{ref:"tabsContainer",class:["tab-content",{"card-block":t.card}]},[t._t("default"),t.tabs&&t.tabs.length?t._e():t._t("empty")],2)])},staticRenderFns:[],data:function(){return{currentTab:this.value,tabs:[]}},props:{id:{type:String,default:""},tag:{type:String,default:"div"},noFade:{type:Boolean,default:!1},card:{type:Boolean,default:!1},small:{type:Boolean,default:!1},value:{type:Number,default:0},pills:{type:Boolean,default:!1},lazy:{type:Boolean,default:!1},bottom:{type:Boolean,default:!1}},watch:{currentTab:function(t,e){t!==e&&(this.$root.$emit("changed::tab",this,t,this.tabs[t]),this.$emit("input",t),this.tabs[t].$emit("click"))},value:function(t,e){t!==e&&this.setTab(t)},fade:function(t,e){var n=this;t!==e&&this.tabs.forEach(function(e){n.$set(e,"fade",t)})}},computed:{fade:function(){return!this.noFade},navStyle:function(){return this.pills?"pills":"tabs"}},methods:{sign:function(t){return 0===t?0:t>0?1:-1},nextTab:function(){this.setTab(this.currentTab,!1,1)},previousTab:function(){this.setTab(this.currentTab,!1,-1)},setTab:function(t,e,n){if(n=n||0,e||t+n!==this.currentTab){var i=this.tabs[t+n];if(i){if(i.disabled)return void(n&&this.setTab(t,e,n+this.sign(n)));this.tabs[this.currentTab]&&this.$set(this.tabs[this.currentTab],"localActive",!1),this.$set(i,"localActive",!0),this.currentTab=t+n}}},updateTabs:function(){var t=this;this.$slots.default?this.tabs=this.$slots.default.filter(function(t){return t.componentInstance||!1}).map(function(t){return t.componentInstance}):this.tabs=[],this.tabs.forEach(function(e){t.$set(e,"fade",t.fade),t.$set(e,"lazy",t.lazy)});var e=this.currentTab;null!==this.currentTab&&void 0!==this.currentTab||this.tabs.forEach(function(t,n){t.active&&(e=n)});var n=0;e>this.tabs.length-1&&(n=-1),this.setTab(e||0,!0,n)}},mounted:function(){this.updateTabs(),e(this.$refs.tabsContainer,this.updateTabs.bind(this),{subtree:!1})}},wt={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{mode:"out-in"},on:{enter:t.enter,"before-leave":t.beforeLeave}},[t.localActive||!t.lazy?n(t.tag,{directives:[{name:"show",rawName:"v-show",value:t.localActive||t.lazy,expression:"localActive || lazy"}],ref:"panel",tag:"component",class:["tab-pane",{show:t.show,fade:t.fade,disabled:t.disabled,active:t.localActive}],attrs:{id:t.id||null,role:"tabpanel","aria-hidden":t.localActive?"false":"true","aria-expanded":t.localActive?"true":"false","aria-lablelledby":t.controlledBy||null}},[t._t("default")],2):t._e()],1)},staticRenderFns:[],methods:{enter:function(){this.show=!0},beforeLeave:function(){this.show=!1}},data:function(){return{fade:!1,localActive:!1,lazy:!0,show:!1}},computed:{controlledBy:function(){return this.buttonId||(this.id?this.id+"__BV_tab_button__":null)}},props:{id:{type:String,default:""},tag:{type:String,default:"div"},buttonId:{type:String,default:""},title:{type:String,default:""},headHtml:{type:String,default:null},disabled:{type:Boolean,default:!1},active:{type:Boolean,default:!1},href:{type:String,default:"#"}}},St={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("span",{ref:"trigger"},[t._t("default")],2),n("div",{ref:"popover",class:["tooltip","tooltip-"+this.placement],style:{opacity:t.showState?1:0},attrs:{tabindex:"-1"},on:{focus:function(e){t.$emit("focus")},blur:function(e){t.$emit("blur")}}},[n("div",{staticClass:"tooltip-inner"},[t._t("content",[n("span",{domProps:{innerHTML:t._s(t.content||t.title)}})])],2)])])},staticRenderFns:[],extends:gt,props:{triggers:{type:[Boolean,String,Array],default:"hover"}}},xt=Object.freeze({bAlert:d,bBreadcrumb:p,bButton:v,bBtn:v,bButtonToolbar:b,bButtonGroup:m,bButtonGroupDropdown:w,bInputGroup:S,bInputGroupAddon:x,bInputGroupButton:$,bCard:T,bCardGroup:C,bDropdown:F,bDropdownItem:L,bDropdownDivider:A,bDropdownHeader:N,bDropdownSelect:I,bForm:D,bFormCheckbox:G,bFormFieldset:j,bFormFile:Y,bFormRadio:K,bFormInput:W,bFormInputStatic:U,bFormSelect:J,bJumbotron:Z,bBadge:Q,bMedia:nt,bModal:st,bNavbar:ut,bPagination:ct,bPopover:gt,bProgress:bt,bTable:_t,bTooltip:St,bTab:wt,bTabs:kt,bNav:ot,bNavItem:rt,bNavItemDropdown:at,bNavToggle:lt,bListGroupItem:et,bListGroup:X,bCarouselSlide:B,bCarousel:O,bCollapse:E,bLink:h}),$t={hover:!0,click:!0,focus:!0},Tt={click:!0},Ct={bind:function(t,e){n(t,e,Tt,function(t){var e=t.targets,n=t.vm;e.forEach(function(t){n.$root.$emit("collapse::toggle",t)})})}},Pt={click:!0},Ot={bind:function(t,e){n(t,e,Pt,function(e){var n=e.targets,i=e.vm;n.forEach(function(e){i.$root.$emit("show::modal",e,t)})})}},Bt="undefined"!=typeof window,Et=!Bt;Bt&&window.Element&&!Element.prototype.closest&&(Element.prototype.closest=function(t){var e,n=(this.document||this.ownerDocument).querySelectorAll(t),i=this;do for(e=n.length;--e>=0&&n.item(e)!==i;);while(e<0&&(i=i.parentElement));return i});var Ft="v-b-scrollspy",Lt="scrollspy::activate",At="__BV_ScrollSpy__",Nt={element:"body",offset:10,method:"auto",throttle:200},It={element:"(string|element)",offset:"number",method:"string",throttle:"number"},Dt={DROPDOWN_ITEM:"dropdown-item",DROPDOWN_MENU:"dropdown-menu",DROPDOWN_TOGGLE:"dropdown-toggle",NAV_LINK:"nav-link",LIST_ITEM:"list-group-item",ACTIVE:"active"},jt={ACTIVE:".active",NAV_LIST_GROUP:".nav, .list-group",NAV:".nav",LIST_GROUP:".list-group",NAV_LINKS:".nav-link",LIST_ITEMS:".list-group-item",DROPDOWN:".dropdown",DROPDOWN_ITEMS:".dropdown-item",DROPDOWN_TOGGLE:".dropdown-toggle"},Vt={OFFSET:"offset",POSITION:"position"};c.prototype.updateConfig=function(t){var e=this;t.arg&&(this._config.element="#"+t.arg),Object.keys(t.modifiers).forEach(function(t){/^\d+$/.test(t)?e._config.offset=parseInt(t,10):/^(auto|position|offset)$/.test(t)&&(e._config.method=t)}),"string"==typeof t.value?this._config.element=t.value:"number"==typeof t.value?this._config.offset=Math.round(t.value):"object"==typeof t.value&&Object.keys(t.value).filter(function(t){return Boolean(It[t])}).forEach(function(n){e._config[n]=t.value[n]}),u(Ft,this._config,It);var n=a(this._$el);return n&&n.$root&&(this._$root=n.$root),this},c.prototype.listen=function(){var t=this._getScroller();return t&&("BODY"!==t.tagName&&t.addEventListener("scroll",this,!1),window.addEventListener("scroll",this,!1),window.addEventListener("orientationchange",this,!1),window.addEventListener("resize",this,!1)),this},c.prototype.unListen=function(){var t=this._getScroller();return t&&("BODY"!==t.tagName&&t.removeEventListener("scroll",this,!1),window.removeEventListener("scroll",this,!1),window.removeEventListener("orientationchange",this,!1),window.removeEventListener("resize",this,!1)),this},c.prototype.refresh=function(){var t=this,e=this._getScroller();if(!e)return this;var n="BODY"===e.tagName?Vt.OFFSET:Vt.POSITION,i="auto"===this._config.method?n:this._config.method,s=i===Vt.OFFSET?0:this._getScrollTop();return this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),o(this._selector,this._$el).map(function(t){var n=t.getAttribute("href");if(n&&"#"===n.charAt(0)&&"#"!==n&&n.indexOf("#/")===-1){var o=r(n,e);if(!o)return null;var a=o.getBoundingClientRect();if(a.width||a.height)return{offset:(i===Vt.OFFSET?a.top:o.offsetTop)+s,href:n}}return null}).filter(function(t){return t}).sort(function(t,e){return t.offset-e.offset}).forEach(function(e){t._offsets.push(e.offset),t._targets.push(e.href)}),this},c.prototype.process=function(){var t=this;if(!this._getScroller)return this;var e=this._getScrollTop()+this._config.offset,n=this._getScrollHeight(),i=this._config.offset+n-this._getOffsetHeight();if(this._scrollHeight!==n&&this.refresh(),e>=i){var s=this._targets[this._targets.length-1];return this._activeTarget!==s&&this._activate(s),this}if(this._activeTarget&&e<this._offsets[0]&&this._offsets[0]>0)return this._activeTarget=null,this._clear(),this;for(var o=this._offsets.length;o--;){var r=t._activeTarget!==t._targets[o]&&e>=t._offsets[o]&&(void 0===t._offsets[o+1]||e<t._offsets[o+1]);r&&t._activate(t._targets[o])}return this},c.prototype.dispose=function(){this.unListen(),clearTimeout(this._resizeTimeout),this._resizeTimeout=null,this._$el=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null,this._$root=null},c.prototype.handleEvent=function(t){function e(){clearTimeout(this._resizeTimeout),this._resizeTimeout=setTimeout(function(){n.refresh().process()},n._config.throttle||Nt.throttle)}var n=this;"scroll"===t.type?this.process():"orientationchange"===t.type?this.refresh().process():"resize"===t.type&&e()},c.prototype._getScroller=function(){if(Et)return null;var t=this._config.element;return t?t&&i(t)?t:"string"==typeof t?"body"===t?document.body:r(t):null:null},c.prototype._getScrollTop=function(){var t=this._getScroller();return t?"BODY"===t.tagName?window.pageYOffset:t.scrollTop:0},c.prototype._getScrollHeight=function(){var t=this._getScroller();return t?"BODY"===t.tagName?Math.max(document.body.scrollHeight,document.documentElement.scrollHeight):t.scrollHeight:0},c.prototype._getOffsetHeight=function(){var t=this._getScroller();return t?"BODY"===t.tagName?window.innerHeight:t.getBoundingClientRect().height:0},c.prototype._activate=function(t){var e=this;this._activeTarget=t,this._clear();var n=this._selector.split(",");n=n.map(function(e){return e+'[href="'+t+'"]'});var i=o(n.join(","),this._$el);i.forEach(function(t){if(t.classList.contains(Dt.DROPDOWN_ITEM)){var n=s(t,jt.DROPDOWN);if(n){var i=r(jt.DROPDOWN_TOGGLE,n);i&&e._setActiveState(i,!0)}e._setActiveState(t,!0)}else e._setActiveState(t,!0),e._setParentsSiblingActiveState(t,jt.NAV_LIST_GROUP,[Dt.NAV_LINK,Dt.LIST_ITEM],!0)}),i&&i.length>0&&this._$root&&this._$root.$emit&&this._$root.$emit(Lt,t)},c.prototype._clear=function(){var t=this;o(this._selector,this._$el).filter(function(t){if(t.classList.contains(Dt.ACTIVE)){var e=t.getAttribute("href");return"#"===e.charAt(0)&&0!==e.indexOf("#/")}return!1}).forEach(function(e){t._setActiveState(e,!1)})},c.prototype._setActiveState=function(t,e){if(t){t.classList.contains(Dt.NAV_LINK)&&!t.classList.contains(Dt.DROPDOWN_TOGGLE)&&(t=t.parentElement);var n=a(t);n&&Object.prototype.hasOwnProperty.call(n.$props,"active")?n.$props.active=e:t.classList[e?"add":"remove"](Dt.ACTIVE)}},c.prototype._setParentsSiblingActiveState=function(t,e,n,i){var o=this;if(n){Array.isArray(n)||(n=[n]);for(var r=t;r;)if(r=s(r,e),r&&r.previousElementSibling)for(var a=0;a<n.length-1;a++)r.previousElementSibling.classList.contains(n[a])&&o._setActiveState(r,i)}};var Rt={bind:function(t,e){Et||t[At]||(t[At]=new c(t,e))},inserted:function(t,e){!Et&&t[At]&&t[At].updateConfig(e).listen().refresh().process()},update:function(t,e){!Et&&t[At]&&t[At].updateConfig(e).refresh().process()},componentUpdated:function(t,e){!Et&&t[At]&&t[At].updateConfig(e).refresh().process()},unbind:function(t){!Et&&t[At]&&(t[At].unListen().dispose(),t[At]=null)}},zt=Object.freeze({bToggle:Ct,bModal:Ot,bScrollspy:Rt}),Ht={install:function(t){if(!t._bootstrap_vue_installed){t._bootstrap_vue_installed=!0;for(var e in xt)t.component(e,xt[e]);for(var n in zt)t.directive(n,zt[n])}}};return"undefined"!=typeof window&&window.Vue&&window.Vue.use(Ht),Ht});
//# sourceMappingURL=bootstrap-vue.js.map


/***/ }),

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! tether 1.4.0 */

(function(root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports === 'object') {
    module.exports = factory(require, exports, module);
  } else {
    root.Tether = factory();
  }
}(this, function(require, exports, module) {

'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var TetherBase = undefined;
if (typeof TetherBase === 'undefined') {
  TetherBase = { modules: [] };
}

var zeroElement = null;

// Same as native getBoundingClientRect, except it takes into account parent <frame> offsets
// if the element lies within a nested document (<frame> or <iframe>-like).
function getActualBoundingClientRect(node) {
  var boundingRect = node.getBoundingClientRect();

  // The original object returned by getBoundingClientRect is immutable, so we clone it
  // We can't use extend because the properties are not considered part of the object by hasOwnProperty in IE9
  var rect = {};
  for (var k in boundingRect) {
    rect[k] = boundingRect[k];
  }

  if (node.ownerDocument !== document) {
    var _frameElement = node.ownerDocument.defaultView.frameElement;
    if (_frameElement) {
      var frameRect = getActualBoundingClientRect(_frameElement);
      rect.top += frameRect.top;
      rect.bottom += frameRect.top;
      rect.left += frameRect.left;
      rect.right += frameRect.left;
    }
  }

  return rect;
}

function getScrollParents(el) {
  // In firefox if the el is inside an iframe with display: none; window.getComputedStyle() will return null;
  // https://bugzilla.mozilla.org/show_bug.cgi?id=548397
  var computedStyle = getComputedStyle(el) || {};
  var position = computedStyle.position;
  var parents = [];

  if (position === 'fixed') {
    return [el];
  }

  var parent = el;
  while ((parent = parent.parentNode) && parent && parent.nodeType === 1) {
    var style = undefined;
    try {
      style = getComputedStyle(parent);
    } catch (err) {}

    if (typeof style === 'undefined' || style === null) {
      parents.push(parent);
      return parents;
    }

    var _style = style;
    var overflow = _style.overflow;
    var overflowX = _style.overflowX;
    var overflowY = _style.overflowY;

    if (/(auto|scroll)/.test(overflow + overflowY + overflowX)) {
      if (position !== 'absolute' || ['relative', 'absolute', 'fixed'].indexOf(style.position) >= 0) {
        parents.push(parent);
      }
    }
  }

  parents.push(el.ownerDocument.body);

  // If the node is within a frame, account for the parent window scroll
  if (el.ownerDocument !== document) {
    parents.push(el.ownerDocument.defaultView);
  }

  return parents;
}

var uniqueId = (function () {
  var id = 0;
  return function () {
    return ++id;
  };
})();

var zeroPosCache = {};
var getOrigin = function getOrigin() {
  // getBoundingClientRect is unfortunately too accurate.  It introduces a pixel or two of
  // jitter as the user scrolls that messes with our ability to detect if two positions
  // are equivilant or not.  We place an element at the top left of the page that will
  // get the same jitter, so we can cancel the two out.
  var node = zeroElement;
  if (!node || !document.body.contains(node)) {
    node = document.createElement('div');
    node.setAttribute('data-tether-id', uniqueId());
    extend(node.style, {
      top: 0,
      left: 0,
      position: 'absolute'
    });

    document.body.appendChild(node);

    zeroElement = node;
  }

  var id = node.getAttribute('data-tether-id');
  if (typeof zeroPosCache[id] === 'undefined') {
    zeroPosCache[id] = getActualBoundingClientRect(node);

    // Clear the cache when this position call is done
    defer(function () {
      delete zeroPosCache[id];
    });
  }

  return zeroPosCache[id];
};

function removeUtilElements() {
  if (zeroElement) {
    document.body.removeChild(zeroElement);
  }
  zeroElement = null;
};

function getBounds(el) {
  var doc = undefined;
  if (el === document) {
    doc = document;
    el = document.documentElement;
  } else {
    doc = el.ownerDocument;
  }

  var docEl = doc.documentElement;

  var box = getActualBoundingClientRect(el);

  var origin = getOrigin();

  box.top -= origin.top;
  box.left -= origin.left;

  if (typeof box.width === 'undefined') {
    box.width = document.body.scrollWidth - box.left - box.right;
  }
  if (typeof box.height === 'undefined') {
    box.height = document.body.scrollHeight - box.top - box.bottom;
  }

  box.top = box.top - docEl.clientTop;
  box.left = box.left - docEl.clientLeft;
  box.right = doc.body.clientWidth - box.width - box.left;
  box.bottom = doc.body.clientHeight - box.height - box.top;

  return box;
}

function getOffsetParent(el) {
  return el.offsetParent || document.documentElement;
}

var _scrollBarSize = null;
function getScrollBarSize() {
  if (_scrollBarSize) {
    return _scrollBarSize;
  }
  var inner = document.createElement('div');
  inner.style.width = '100%';
  inner.style.height = '200px';

  var outer = document.createElement('div');
  extend(outer.style, {
    position: 'absolute',
    top: 0,
    left: 0,
    pointerEvents: 'none',
    visibility: 'hidden',
    width: '200px',
    height: '150px',
    overflow: 'hidden'
  });

  outer.appendChild(inner);

  document.body.appendChild(outer);

  var widthContained = inner.offsetWidth;
  outer.style.overflow = 'scroll';
  var widthScroll = inner.offsetWidth;

  if (widthContained === widthScroll) {
    widthScroll = outer.clientWidth;
  }

  document.body.removeChild(outer);

  var width = widthContained - widthScroll;

  _scrollBarSize = { width: width, height: width };
  return _scrollBarSize;
}

function extend() {
  var out = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  var args = [];

  Array.prototype.push.apply(args, arguments);

  args.slice(1).forEach(function (obj) {
    if (obj) {
      for (var key in obj) {
        if (({}).hasOwnProperty.call(obj, key)) {
          out[key] = obj[key];
        }
      }
    }
  });

  return out;
}

function removeClass(el, name) {
  if (typeof el.classList !== 'undefined') {
    name.split(' ').forEach(function (cls) {
      if (cls.trim()) {
        el.classList.remove(cls);
      }
    });
  } else {
    var regex = new RegExp('(^| )' + name.split(' ').join('|') + '( |$)', 'gi');
    var className = getClassName(el).replace(regex, ' ');
    setClassName(el, className);
  }
}

function addClass(el, name) {
  if (typeof el.classList !== 'undefined') {
    name.split(' ').forEach(function (cls) {
      if (cls.trim()) {
        el.classList.add(cls);
      }
    });
  } else {
    removeClass(el, name);
    var cls = getClassName(el) + (' ' + name);
    setClassName(el, cls);
  }
}

function hasClass(el, name) {
  if (typeof el.classList !== 'undefined') {
    return el.classList.contains(name);
  }
  var className = getClassName(el);
  return new RegExp('(^| )' + name + '( |$)', 'gi').test(className);
}

function getClassName(el) {
  // Can't use just SVGAnimatedString here since nodes within a Frame in IE have
  // completely separately SVGAnimatedString base classes
  if (el.className instanceof el.ownerDocument.defaultView.SVGAnimatedString) {
    return el.className.baseVal;
  }
  return el.className;
}

function setClassName(el, className) {
  el.setAttribute('class', className);
}

function updateClasses(el, add, all) {
  // Of the set of 'all' classes, we need the 'add' classes, and only the
  // 'add' classes to be set.
  all.forEach(function (cls) {
    if (add.indexOf(cls) === -1 && hasClass(el, cls)) {
      removeClass(el, cls);
    }
  });

  add.forEach(function (cls) {
    if (!hasClass(el, cls)) {
      addClass(el, cls);
    }
  });
}

var deferred = [];

var defer = function defer(fn) {
  deferred.push(fn);
};

var flush = function flush() {
  var fn = undefined;
  while (fn = deferred.pop()) {
    fn();
  }
};

var Evented = (function () {
  function Evented() {
    _classCallCheck(this, Evented);
  }

  _createClass(Evented, [{
    key: 'on',
    value: function on(event, handler, ctx) {
      var once = arguments.length <= 3 || arguments[3] === undefined ? false : arguments[3];

      if (typeof this.bindings === 'undefined') {
        this.bindings = {};
      }
      if (typeof this.bindings[event] === 'undefined') {
        this.bindings[event] = [];
      }
      this.bindings[event].push({ handler: handler, ctx: ctx, once: once });
    }
  }, {
    key: 'once',
    value: function once(event, handler, ctx) {
      this.on(event, handler, ctx, true);
    }
  }, {
    key: 'off',
    value: function off(event, handler) {
      if (typeof this.bindings === 'undefined' || typeof this.bindings[event] === 'undefined') {
        return;
      }

      if (typeof handler === 'undefined') {
        delete this.bindings[event];
      } else {
        var i = 0;
        while (i < this.bindings[event].length) {
          if (this.bindings[event][i].handler === handler) {
            this.bindings[event].splice(i, 1);
          } else {
            ++i;
          }
        }
      }
    }
  }, {
    key: 'trigger',
    value: function trigger(event) {
      if (typeof this.bindings !== 'undefined' && this.bindings[event]) {
        var i = 0;

        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        while (i < this.bindings[event].length) {
          var _bindings$event$i = this.bindings[event][i];
          var handler = _bindings$event$i.handler;
          var ctx = _bindings$event$i.ctx;
          var once = _bindings$event$i.once;

          var context = ctx;
          if (typeof context === 'undefined') {
            context = this;
          }

          handler.apply(context, args);

          if (once) {
            this.bindings[event].splice(i, 1);
          } else {
            ++i;
          }
        }
      }
    }
  }]);

  return Evented;
})();

TetherBase.Utils = {
  getActualBoundingClientRect: getActualBoundingClientRect,
  getScrollParents: getScrollParents,
  getBounds: getBounds,
  getOffsetParent: getOffsetParent,
  extend: extend,
  addClass: addClass,
  removeClass: removeClass,
  hasClass: hasClass,
  updateClasses: updateClasses,
  defer: defer,
  flush: flush,
  uniqueId: uniqueId,
  Evented: Evented,
  getScrollBarSize: getScrollBarSize,
  removeUtilElements: removeUtilElements
};
/* globals TetherBase, performance */

'use strict';

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x6, _x7, _x8) { var _again = true; _function: while (_again) { var object = _x6, property = _x7, receiver = _x8; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x6 = parent; _x7 = property; _x8 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (typeof TetherBase === 'undefined') {
  throw new Error('You must include the utils.js file before tether.js');
}

var _TetherBase$Utils = TetherBase.Utils;
var getScrollParents = _TetherBase$Utils.getScrollParents;
var getBounds = _TetherBase$Utils.getBounds;
var getOffsetParent = _TetherBase$Utils.getOffsetParent;
var extend = _TetherBase$Utils.extend;
var addClass = _TetherBase$Utils.addClass;
var removeClass = _TetherBase$Utils.removeClass;
var updateClasses = _TetherBase$Utils.updateClasses;
var defer = _TetherBase$Utils.defer;
var flush = _TetherBase$Utils.flush;
var getScrollBarSize = _TetherBase$Utils.getScrollBarSize;
var removeUtilElements = _TetherBase$Utils.removeUtilElements;

function within(a, b) {
  var diff = arguments.length <= 2 || arguments[2] === undefined ? 1 : arguments[2];

  return a + diff >= b && b >= a - diff;
}

var transformKey = (function () {
  if (typeof document === 'undefined') {
    return '';
  }
  var el = document.createElement('div');

  var transforms = ['transform', 'WebkitTransform', 'OTransform', 'MozTransform', 'msTransform'];
  for (var i = 0; i < transforms.length; ++i) {
    var key = transforms[i];
    if (el.style[key] !== undefined) {
      return key;
    }
  }
})();

var tethers = [];

var position = function position() {
  tethers.forEach(function (tether) {
    tether.position(false);
  });
  flush();
};

function now() {
  if (typeof performance !== 'undefined' && typeof performance.now !== 'undefined') {
    return performance.now();
  }
  return +new Date();
}

(function () {
  var lastCall = null;
  var lastDuration = null;
  var pendingTimeout = null;

  var tick = function tick() {
    if (typeof lastDuration !== 'undefined' && lastDuration > 16) {
      // We voluntarily throttle ourselves if we can't manage 60fps
      lastDuration = Math.min(lastDuration - 16, 250);

      // Just in case this is the last event, remember to position just once more
      pendingTimeout = setTimeout(tick, 250);
      return;
    }

    if (typeof lastCall !== 'undefined' && now() - lastCall < 10) {
      // Some browsers call events a little too frequently, refuse to run more than is reasonable
      return;
    }

    if (pendingTimeout != null) {
      clearTimeout(pendingTimeout);
      pendingTimeout = null;
    }

    lastCall = now();
    position();
    lastDuration = now() - lastCall;
  };

  if (typeof window !== 'undefined' && typeof window.addEventListener !== 'undefined') {
    ['resize', 'scroll', 'touchmove'].forEach(function (event) {
      window.addEventListener(event, tick);
    });
  }
})();

var MIRROR_LR = {
  center: 'center',
  left: 'right',
  right: 'left'
};

var MIRROR_TB = {
  middle: 'middle',
  top: 'bottom',
  bottom: 'top'
};

var OFFSET_MAP = {
  top: 0,
  left: 0,
  middle: '50%',
  center: '50%',
  bottom: '100%',
  right: '100%'
};

var autoToFixedAttachment = function autoToFixedAttachment(attachment, relativeToAttachment) {
  var left = attachment.left;
  var top = attachment.top;

  if (left === 'auto') {
    left = MIRROR_LR[relativeToAttachment.left];
  }

  if (top === 'auto') {
    top = MIRROR_TB[relativeToAttachment.top];
  }

  return { left: left, top: top };
};

var attachmentToOffset = function attachmentToOffset(attachment) {
  var left = attachment.left;
  var top = attachment.top;

  if (typeof OFFSET_MAP[attachment.left] !== 'undefined') {
    left = OFFSET_MAP[attachment.left];
  }

  if (typeof OFFSET_MAP[attachment.top] !== 'undefined') {
    top = OFFSET_MAP[attachment.top];
  }

  return { left: left, top: top };
};

function addOffset() {
  var out = { top: 0, left: 0 };

  for (var _len = arguments.length, offsets = Array(_len), _key = 0; _key < _len; _key++) {
    offsets[_key] = arguments[_key];
  }

  offsets.forEach(function (_ref) {
    var top = _ref.top;
    var left = _ref.left;

    if (typeof top === 'string') {
      top = parseFloat(top, 10);
    }
    if (typeof left === 'string') {
      left = parseFloat(left, 10);
    }

    out.top += top;
    out.left += left;
  });

  return out;
}

function offsetToPx(offset, size) {
  if (typeof offset.left === 'string' && offset.left.indexOf('%') !== -1) {
    offset.left = parseFloat(offset.left, 10) / 100 * size.width;
  }
  if (typeof offset.top === 'string' && offset.top.indexOf('%') !== -1) {
    offset.top = parseFloat(offset.top, 10) / 100 * size.height;
  }

  return offset;
}

var parseOffset = function parseOffset(value) {
  var _value$split = value.split(' ');

  var _value$split2 = _slicedToArray(_value$split, 2);

  var top = _value$split2[0];
  var left = _value$split2[1];

  return { top: top, left: left };
};
var parseAttachment = parseOffset;

var TetherClass = (function (_Evented) {
  _inherits(TetherClass, _Evented);

  function TetherClass(options) {
    var _this = this;

    _classCallCheck(this, TetherClass);

    _get(Object.getPrototypeOf(TetherClass.prototype), 'constructor', this).call(this);
    this.position = this.position.bind(this);

    tethers.push(this);

    this.history = [];

    this.setOptions(options, false);

    TetherBase.modules.forEach(function (module) {
      if (typeof module.initialize !== 'undefined') {
        module.initialize.call(_this);
      }
    });

    this.position();
  }

  _createClass(TetherClass, [{
    key: 'getClass',
    value: function getClass() {
      var key = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
      var classes = this.options.classes;

      if (typeof classes !== 'undefined' && classes[key]) {
        return this.options.classes[key];
      } else if (this.options.classPrefix) {
        return this.options.classPrefix + '-' + key;
      } else {
        return key;
      }
    }
  }, {
    key: 'setOptions',
    value: function setOptions(options) {
      var _this2 = this;

      var pos = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

      var defaults = {
        offset: '0 0',
        targetOffset: '0 0',
        targetAttachment: 'auto auto',
        classPrefix: 'tether'
      };

      this.options = extend(defaults, options);

      var _options = this.options;
      var element = _options.element;
      var target = _options.target;
      var targetModifier = _options.targetModifier;

      this.element = element;
      this.target = target;
      this.targetModifier = targetModifier;

      if (this.target === 'viewport') {
        this.target = document.body;
        this.targetModifier = 'visible';
      } else if (this.target === 'scroll-handle') {
        this.target = document.body;
        this.targetModifier = 'scroll-handle';
      }

      ['element', 'target'].forEach(function (key) {
        if (typeof _this2[key] === 'undefined') {
          throw new Error('Tether Error: Both element and target must be defined');
        }

        if (typeof _this2[key].jquery !== 'undefined') {
          _this2[key] = _this2[key][0];
        } else if (typeof _this2[key] === 'string') {
          _this2[key] = document.querySelector(_this2[key]);
        }
      });

      addClass(this.element, this.getClass('element'));
      if (!(this.options.addTargetClasses === false)) {
        addClass(this.target, this.getClass('target'));
      }

      if (!this.options.attachment) {
        throw new Error('Tether Error: You must provide an attachment');
      }

      this.targetAttachment = parseAttachment(this.options.targetAttachment);
      this.attachment = parseAttachment(this.options.attachment);
      this.offset = parseOffset(this.options.offset);
      this.targetOffset = parseOffset(this.options.targetOffset);

      if (typeof this.scrollParents !== 'undefined') {
        this.disable();
      }

      if (this.targetModifier === 'scroll-handle') {
        this.scrollParents = [this.target];
      } else {
        this.scrollParents = getScrollParents(this.target);
      }

      if (!(this.options.enabled === false)) {
        this.enable(pos);
      }
    }
  }, {
    key: 'getTargetBounds',
    value: function getTargetBounds() {
      if (typeof this.targetModifier !== 'undefined') {
        if (this.targetModifier === 'visible') {
          if (this.target === document.body) {
            return { top: pageYOffset, left: pageXOffset, height: innerHeight, width: innerWidth };
          } else {
            var bounds = getBounds(this.target);

            var out = {
              height: bounds.height,
              width: bounds.width,
              top: bounds.top,
              left: bounds.left
            };

            out.height = Math.min(out.height, bounds.height - (pageYOffset - bounds.top));
            out.height = Math.min(out.height, bounds.height - (bounds.top + bounds.height - (pageYOffset + innerHeight)));
            out.height = Math.min(innerHeight, out.height);
            out.height -= 2;

            out.width = Math.min(out.width, bounds.width - (pageXOffset - bounds.left));
            out.width = Math.min(out.width, bounds.width - (bounds.left + bounds.width - (pageXOffset + innerWidth)));
            out.width = Math.min(innerWidth, out.width);
            out.width -= 2;

            if (out.top < pageYOffset) {
              out.top = pageYOffset;
            }
            if (out.left < pageXOffset) {
              out.left = pageXOffset;
            }

            return out;
          }
        } else if (this.targetModifier === 'scroll-handle') {
          var bounds = undefined;
          var target = this.target;
          if (target === document.body) {
            target = document.documentElement;

            bounds = {
              left: pageXOffset,
              top: pageYOffset,
              height: innerHeight,
              width: innerWidth
            };
          } else {
            bounds = getBounds(target);
          }

          var style = getComputedStyle(target);

          var hasBottomScroll = target.scrollWidth > target.clientWidth || [style.overflow, style.overflowX].indexOf('scroll') >= 0 || this.target !== document.body;

          var scrollBottom = 0;
          if (hasBottomScroll) {
            scrollBottom = 15;
          }

          var height = bounds.height - parseFloat(style.borderTopWidth) - parseFloat(style.borderBottomWidth) - scrollBottom;

          var out = {
            width: 15,
            height: height * 0.975 * (height / target.scrollHeight),
            left: bounds.left + bounds.width - parseFloat(style.borderLeftWidth) - 15
          };

          var fitAdj = 0;
          if (height < 408 && this.target === document.body) {
            fitAdj = -0.00011 * Math.pow(height, 2) - 0.00727 * height + 22.58;
          }

          if (this.target !== document.body) {
            out.height = Math.max(out.height, 24);
          }

          var scrollPercentage = this.target.scrollTop / (target.scrollHeight - height);
          out.top = scrollPercentage * (height - out.height - fitAdj) + bounds.top + parseFloat(style.borderTopWidth);

          if (this.target === document.body) {
            out.height = Math.max(out.height, 24);
          }

          return out;
        }
      } else {
        return getBounds(this.target);
      }
    }
  }, {
    key: 'clearCache',
    value: function clearCache() {
      this._cache = {};
    }
  }, {
    key: 'cache',
    value: function cache(k, getter) {
      // More than one module will often need the same DOM info, so
      // we keep a cache which is cleared on each position call
      if (typeof this._cache === 'undefined') {
        this._cache = {};
      }

      if (typeof this._cache[k] === 'undefined') {
        this._cache[k] = getter.call(this);
      }

      return this._cache[k];
    }
  }, {
    key: 'enable',
    value: function enable() {
      var _this3 = this;

      var pos = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

      if (!(this.options.addTargetClasses === false)) {
        addClass(this.target, this.getClass('enabled'));
      }
      addClass(this.element, this.getClass('enabled'));
      this.enabled = true;

      this.scrollParents.forEach(function (parent) {
        if (parent !== _this3.target.ownerDocument) {
          parent.addEventListener('scroll', _this3.position);
        }
      });

      if (pos) {
        this.position();
      }
    }
  }, {
    key: 'disable',
    value: function disable() {
      var _this4 = this;

      removeClass(this.target, this.getClass('enabled'));
      removeClass(this.element, this.getClass('enabled'));
      this.enabled = false;

      if (typeof this.scrollParents !== 'undefined') {
        this.scrollParents.forEach(function (parent) {
          parent.removeEventListener('scroll', _this4.position);
        });
      }
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      var _this5 = this;

      this.disable();

      tethers.forEach(function (tether, i) {
        if (tether === _this5) {
          tethers.splice(i, 1);
        }
      });

      // Remove any elements we were using for convenience from the DOM
      if (tethers.length === 0) {
        removeUtilElements();
      }
    }
  }, {
    key: 'updateAttachClasses',
    value: function updateAttachClasses(elementAttach, targetAttach) {
      var _this6 = this;

      elementAttach = elementAttach || this.attachment;
      targetAttach = targetAttach || this.targetAttachment;
      var sides = ['left', 'top', 'bottom', 'right', 'middle', 'center'];

      if (typeof this._addAttachClasses !== 'undefined' && this._addAttachClasses.length) {
        // updateAttachClasses can be called more than once in a position call, so
        // we need to clean up after ourselves such that when the last defer gets
        // ran it doesn't add any extra classes from previous calls.
        this._addAttachClasses.splice(0, this._addAttachClasses.length);
      }

      if (typeof this._addAttachClasses === 'undefined') {
        this._addAttachClasses = [];
      }
      var add = this._addAttachClasses;

      if (elementAttach.top) {
        add.push(this.getClass('element-attached') + '-' + elementAttach.top);
      }
      if (elementAttach.left) {
        add.push(this.getClass('element-attached') + '-' + elementAttach.left);
      }
      if (targetAttach.top) {
        add.push(this.getClass('target-attached') + '-' + targetAttach.top);
      }
      if (targetAttach.left) {
        add.push(this.getClass('target-attached') + '-' + targetAttach.left);
      }

      var all = [];
      sides.forEach(function (side) {
        all.push(_this6.getClass('element-attached') + '-' + side);
        all.push(_this6.getClass('target-attached') + '-' + side);
      });

      defer(function () {
        if (!(typeof _this6._addAttachClasses !== 'undefined')) {
          return;
        }

        updateClasses(_this6.element, _this6._addAttachClasses, all);
        if (!(_this6.options.addTargetClasses === false)) {
          updateClasses(_this6.target, _this6._addAttachClasses, all);
        }

        delete _this6._addAttachClasses;
      });
    }
  }, {
    key: 'position',
    value: function position() {
      var _this7 = this;

      var flushChanges = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

      // flushChanges commits the changes immediately, leave true unless you are positioning multiple
      // tethers (in which case call Tether.Utils.flush yourself when you're done)

      if (!this.enabled) {
        return;
      }

      this.clearCache();

      // Turn 'auto' attachments into the appropriate corner or edge
      var targetAttachment = autoToFixedAttachment(this.targetAttachment, this.attachment);

      this.updateAttachClasses(this.attachment, targetAttachment);

      var elementPos = this.cache('element-bounds', function () {
        return getBounds(_this7.element);
      });

      var width = elementPos.width;
      var height = elementPos.height;

      if (width === 0 && height === 0 && typeof this.lastSize !== 'undefined') {
        var _lastSize = this.lastSize;

        // We cache the height and width to make it possible to position elements that are
        // getting hidden.
        width = _lastSize.width;
        height = _lastSize.height;
      } else {
        this.lastSize = { width: width, height: height };
      }

      var targetPos = this.cache('target-bounds', function () {
        return _this7.getTargetBounds();
      });
      var targetSize = targetPos;

      // Get an actual px offset from the attachment
      var offset = offsetToPx(attachmentToOffset(this.attachment), { width: width, height: height });
      var targetOffset = offsetToPx(attachmentToOffset(targetAttachment), targetSize);

      var manualOffset = offsetToPx(this.offset, { width: width, height: height });
      var manualTargetOffset = offsetToPx(this.targetOffset, targetSize);

      // Add the manually provided offset
      offset = addOffset(offset, manualOffset);
      targetOffset = addOffset(targetOffset, manualTargetOffset);

      // It's now our goal to make (element position + offset) == (target position + target offset)
      var left = targetPos.left + targetOffset.left - offset.left;
      var top = targetPos.top + targetOffset.top - offset.top;

      for (var i = 0; i < TetherBase.modules.length; ++i) {
        var _module2 = TetherBase.modules[i];
        var ret = _module2.position.call(this, {
          left: left,
          top: top,
          targetAttachment: targetAttachment,
          targetPos: targetPos,
          elementPos: elementPos,
          offset: offset,
          targetOffset: targetOffset,
          manualOffset: manualOffset,
          manualTargetOffset: manualTargetOffset,
          scrollbarSize: scrollbarSize,
          attachment: this.attachment
        });

        if (ret === false) {
          return false;
        } else if (typeof ret === 'undefined' || typeof ret !== 'object') {
          continue;
        } else {
          top = ret.top;
          left = ret.left;
        }
      }

      // We describe the position three different ways to give the optimizer
      // a chance to decide the best possible way to position the element
      // with the fewest repaints.
      var next = {
        // It's position relative to the page (absolute positioning when
        // the element is a child of the body)
        page: {
          top: top,
          left: left
        },

        // It's position relative to the viewport (fixed positioning)
        viewport: {
          top: top - pageYOffset,
          bottom: pageYOffset - top - height + innerHeight,
          left: left - pageXOffset,
          right: pageXOffset - left - width + innerWidth
        }
      };

      var doc = this.target.ownerDocument;
      var win = doc.defaultView;

      var scrollbarSize = undefined;
      if (win.innerHeight > doc.documentElement.clientHeight) {
        scrollbarSize = this.cache('scrollbar-size', getScrollBarSize);
        next.viewport.bottom -= scrollbarSize.height;
      }

      if (win.innerWidth > doc.documentElement.clientWidth) {
        scrollbarSize = this.cache('scrollbar-size', getScrollBarSize);
        next.viewport.right -= scrollbarSize.width;
      }

      if (['', 'static'].indexOf(doc.body.style.position) === -1 || ['', 'static'].indexOf(doc.body.parentElement.style.position) === -1) {
        // Absolute positioning in the body will be relative to the page, not the 'initial containing block'
        next.page.bottom = doc.body.scrollHeight - top - height;
        next.page.right = doc.body.scrollWidth - left - width;
      }

      if (typeof this.options.optimizations !== 'undefined' && this.options.optimizations.moveElement !== false && !(typeof this.targetModifier !== 'undefined')) {
        (function () {
          var offsetParent = _this7.cache('target-offsetparent', function () {
            return getOffsetParent(_this7.target);
          });
          var offsetPosition = _this7.cache('target-offsetparent-bounds', function () {
            return getBounds(offsetParent);
          });
          var offsetParentStyle = getComputedStyle(offsetParent);
          var offsetParentSize = offsetPosition;

          var offsetBorder = {};
          ['Top', 'Left', 'Bottom', 'Right'].forEach(function (side) {
            offsetBorder[side.toLowerCase()] = parseFloat(offsetParentStyle['border' + side + 'Width']);
          });

          offsetPosition.right = doc.body.scrollWidth - offsetPosition.left - offsetParentSize.width + offsetBorder.right;
          offsetPosition.bottom = doc.body.scrollHeight - offsetPosition.top - offsetParentSize.height + offsetBorder.bottom;

          if (next.page.top >= offsetPosition.top + offsetBorder.top && next.page.bottom >= offsetPosition.bottom) {
            if (next.page.left >= offsetPosition.left + offsetBorder.left && next.page.right >= offsetPosition.right) {
              // We're within the visible part of the target's scroll parent
              var scrollTop = offsetParent.scrollTop;
              var scrollLeft = offsetParent.scrollLeft;

              // It's position relative to the target's offset parent (absolute positioning when
              // the element is moved to be a child of the target's offset parent).
              next.offset = {
                top: next.page.top - offsetPosition.top + scrollTop - offsetBorder.top,
                left: next.page.left - offsetPosition.left + scrollLeft - offsetBorder.left
              };
            }
          }
        })();
      }

      // We could also travel up the DOM and try each containing context, rather than only
      // looking at the body, but we're gonna get diminishing returns.

      this.move(next);

      this.history.unshift(next);

      if (this.history.length > 3) {
        this.history.pop();
      }

      if (flushChanges) {
        flush();
      }

      return true;
    }

    // THE ISSUE
  }, {
    key: 'move',
    value: function move(pos) {
      var _this8 = this;

      if (!(typeof this.element.parentNode !== 'undefined')) {
        return;
      }

      var same = {};

      for (var type in pos) {
        same[type] = {};

        for (var key in pos[type]) {
          var found = false;

          for (var i = 0; i < this.history.length; ++i) {
            var point = this.history[i];
            if (typeof point[type] !== 'undefined' && !within(point[type][key], pos[type][key])) {
              found = true;
              break;
            }
          }

          if (!found) {
            same[type][key] = true;
          }
        }
      }

      var css = { top: '', left: '', right: '', bottom: '' };

      var transcribe = function transcribe(_same, _pos) {
        var hasOptimizations = typeof _this8.options.optimizations !== 'undefined';
        var gpu = hasOptimizations ? _this8.options.optimizations.gpu : null;
        if (gpu !== false) {
          var yPos = undefined,
              xPos = undefined;
          if (_same.top) {
            css.top = 0;
            yPos = _pos.top;
          } else {
            css.bottom = 0;
            yPos = -_pos.bottom;
          }

          if (_same.left) {
            css.left = 0;
            xPos = _pos.left;
          } else {
            css.right = 0;
            xPos = -_pos.right;
          }

          if (window.matchMedia) {
            // HubSpot/tether#207
            var retina = window.matchMedia('only screen and (min-resolution: 1.3dppx)').matches || window.matchMedia('only screen and (-webkit-min-device-pixel-ratio: 1.3)').matches;
            if (!retina) {
              xPos = Math.round(xPos);
              yPos = Math.round(yPos);
            }
          }

          css[transformKey] = 'translateX(' + xPos + 'px) translateY(' + yPos + 'px)';

          if (transformKey !== 'msTransform') {
            // The Z transform will keep this in the GPU (faster, and prevents artifacts),
            // but IE9 doesn't support 3d transforms and will choke.
            css[transformKey] += " translateZ(0)";
          }
        } else {
          if (_same.top) {
            css.top = _pos.top + 'px';
          } else {
            css.bottom = _pos.bottom + 'px';
          }

          if (_same.left) {
            css.left = _pos.left + 'px';
          } else {
            css.right = _pos.right + 'px';
          }
        }
      };

      var moved = false;
      if ((same.page.top || same.page.bottom) && (same.page.left || same.page.right)) {
        css.position = 'absolute';
        transcribe(same.page, pos.page);
      } else if ((same.viewport.top || same.viewport.bottom) && (same.viewport.left || same.viewport.right)) {
        css.position = 'fixed';
        transcribe(same.viewport, pos.viewport);
      } else if (typeof same.offset !== 'undefined' && same.offset.top && same.offset.left) {
        (function () {
          css.position = 'absolute';
          var offsetParent = _this8.cache('target-offsetparent', function () {
            return getOffsetParent(_this8.target);
          });

          if (getOffsetParent(_this8.element) !== offsetParent) {
            defer(function () {
              _this8.element.parentNode.removeChild(_this8.element);
              offsetParent.appendChild(_this8.element);
            });
          }

          transcribe(same.offset, pos.offset);
          moved = true;
        })();
      } else {
        css.position = 'absolute';
        transcribe({ top: true, left: true }, pos.page);
      }

      if (!moved) {
        if (this.options.bodyElement) {
          this.options.bodyElement.appendChild(this.element);
        } else {
          var offsetParentIsBody = true;
          var currentNode = this.element.parentNode;
          while (currentNode && currentNode.nodeType === 1 && currentNode.tagName !== 'BODY') {
            if (getComputedStyle(currentNode).position !== 'static') {
              offsetParentIsBody = false;
              break;
            }

            currentNode = currentNode.parentNode;
          }

          if (!offsetParentIsBody) {
            this.element.parentNode.removeChild(this.element);
            this.element.ownerDocument.body.appendChild(this.element);
          }
        }
      }

      // Any css change will trigger a repaint, so let's avoid one if nothing changed
      var writeCSS = {};
      var write = false;
      for (var key in css) {
        var val = css[key];
        var elVal = this.element.style[key];

        if (elVal !== val) {
          write = true;
          writeCSS[key] = val;
        }
      }

      if (write) {
        defer(function () {
          extend(_this8.element.style, writeCSS);
          _this8.trigger('repositioned');
        });
      }
    }
  }]);

  return TetherClass;
})(Evented);

TetherClass.modules = [];

TetherBase.position = position;

var Tether = extend(TetherClass, TetherBase);
/* globals TetherBase */

'use strict';

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

var _TetherBase$Utils = TetherBase.Utils;
var getBounds = _TetherBase$Utils.getBounds;
var extend = _TetherBase$Utils.extend;
var updateClasses = _TetherBase$Utils.updateClasses;
var defer = _TetherBase$Utils.defer;

var BOUNDS_FORMAT = ['left', 'top', 'right', 'bottom'];

function getBoundingRect(tether, to) {
  if (to === 'scrollParent') {
    to = tether.scrollParents[0];
  } else if (to === 'window') {
    to = [pageXOffset, pageYOffset, innerWidth + pageXOffset, innerHeight + pageYOffset];
  }

  if (to === document) {
    to = to.documentElement;
  }

  if (typeof to.nodeType !== 'undefined') {
    (function () {
      var node = to;
      var size = getBounds(to);
      var pos = size;
      var style = getComputedStyle(to);

      to = [pos.left, pos.top, size.width + pos.left, size.height + pos.top];

      // Account any parent Frames scroll offset
      if (node.ownerDocument !== document) {
        var win = node.ownerDocument.defaultView;
        to[0] += win.pageXOffset;
        to[1] += win.pageYOffset;
        to[2] += win.pageXOffset;
        to[3] += win.pageYOffset;
      }

      BOUNDS_FORMAT.forEach(function (side, i) {
        side = side[0].toUpperCase() + side.substr(1);
        if (side === 'Top' || side === 'Left') {
          to[i] += parseFloat(style['border' + side + 'Width']);
        } else {
          to[i] -= parseFloat(style['border' + side + 'Width']);
        }
      });
    })();
  }

  return to;
}

TetherBase.modules.push({
  position: function position(_ref) {
    var _this = this;

    var top = _ref.top;
    var left = _ref.left;
    var targetAttachment = _ref.targetAttachment;

    if (!this.options.constraints) {
      return true;
    }

    var _cache = this.cache('element-bounds', function () {
      return getBounds(_this.element);
    });

    var height = _cache.height;
    var width = _cache.width;

    if (width === 0 && height === 0 && typeof this.lastSize !== 'undefined') {
      var _lastSize = this.lastSize;

      // Handle the item getting hidden as a result of our positioning without glitching
      // the classes in and out
      width = _lastSize.width;
      height = _lastSize.height;
    }

    var targetSize = this.cache('target-bounds', function () {
      return _this.getTargetBounds();
    });

    var targetHeight = targetSize.height;
    var targetWidth = targetSize.width;

    var allClasses = [this.getClass('pinned'), this.getClass('out-of-bounds')];

    this.options.constraints.forEach(function (constraint) {
      var outOfBoundsClass = constraint.outOfBoundsClass;
      var pinnedClass = constraint.pinnedClass;

      if (outOfBoundsClass) {
        allClasses.push(outOfBoundsClass);
      }
      if (pinnedClass) {
        allClasses.push(pinnedClass);
      }
    });

    allClasses.forEach(function (cls) {
      ['left', 'top', 'right', 'bottom'].forEach(function (side) {
        allClasses.push(cls + '-' + side);
      });
    });

    var addClasses = [];

    var tAttachment = extend({}, targetAttachment);
    var eAttachment = extend({}, this.attachment);

    this.options.constraints.forEach(function (constraint) {
      var to = constraint.to;
      var attachment = constraint.attachment;
      var pin = constraint.pin;

      if (typeof attachment === 'undefined') {
        attachment = '';
      }

      var changeAttachX = undefined,
          changeAttachY = undefined;
      if (attachment.indexOf(' ') >= 0) {
        var _attachment$split = attachment.split(' ');

        var _attachment$split2 = _slicedToArray(_attachment$split, 2);

        changeAttachY = _attachment$split2[0];
        changeAttachX = _attachment$split2[1];
      } else {
        changeAttachX = changeAttachY = attachment;
      }

      var bounds = getBoundingRect(_this, to);

      if (changeAttachY === 'target' || changeAttachY === 'both') {
        if (top < bounds[1] && tAttachment.top === 'top') {
          top += targetHeight;
          tAttachment.top = 'bottom';
        }

        if (top + height > bounds[3] && tAttachment.top === 'bottom') {
          top -= targetHeight;
          tAttachment.top = 'top';
        }
      }

      if (changeAttachY === 'together') {
        if (tAttachment.top === 'top') {
          if (eAttachment.top === 'bottom' && top < bounds[1]) {
            top += targetHeight;
            tAttachment.top = 'bottom';

            top += height;
            eAttachment.top = 'top';
          } else if (eAttachment.top === 'top' && top + height > bounds[3] && top - (height - targetHeight) >= bounds[1]) {
            top -= height - targetHeight;
            tAttachment.top = 'bottom';

            eAttachment.top = 'bottom';
          }
        }

        if (tAttachment.top === 'bottom') {
          if (eAttachment.top === 'top' && top + height > bounds[3]) {
            top -= targetHeight;
            tAttachment.top = 'top';

            top -= height;
            eAttachment.top = 'bottom';
          } else if (eAttachment.top === 'bottom' && top < bounds[1] && top + (height * 2 - targetHeight) <= bounds[3]) {
            top += height - targetHeight;
            tAttachment.top = 'top';

            eAttachment.top = 'top';
          }
        }

        if (tAttachment.top === 'middle') {
          if (top + height > bounds[3] && eAttachment.top === 'top') {
            top -= height;
            eAttachment.top = 'bottom';
          } else if (top < bounds[1] && eAttachment.top === 'bottom') {
            top += height;
            eAttachment.top = 'top';
          }
        }
      }

      if (changeAttachX === 'target' || changeAttachX === 'both') {
        if (left < bounds[0] && tAttachment.left === 'left') {
          left += targetWidth;
          tAttachment.left = 'right';
        }

        if (left + width > bounds[2] && tAttachment.left === 'right') {
          left -= targetWidth;
          tAttachment.left = 'left';
        }
      }

      if (changeAttachX === 'together') {
        if (left < bounds[0] && tAttachment.left === 'left') {
          if (eAttachment.left === 'right') {
            left += targetWidth;
            tAttachment.left = 'right';

            left += width;
            eAttachment.left = 'left';
          } else if (eAttachment.left === 'left') {
            left += targetWidth;
            tAttachment.left = 'right';

            left -= width;
            eAttachment.left = 'right';
          }
        } else if (left + width > bounds[2] && tAttachment.left === 'right') {
          if (eAttachment.left === 'left') {
            left -= targetWidth;
            tAttachment.left = 'left';

            left -= width;
            eAttachment.left = 'right';
          } else if (eAttachment.left === 'right') {
            left -= targetWidth;
            tAttachment.left = 'left';

            left += width;
            eAttachment.left = 'left';
          }
        } else if (tAttachment.left === 'center') {
          if (left + width > bounds[2] && eAttachment.left === 'left') {
            left -= width;
            eAttachment.left = 'right';
          } else if (left < bounds[0] && eAttachment.left === 'right') {
            left += width;
            eAttachment.left = 'left';
          }
        }
      }

      if (changeAttachY === 'element' || changeAttachY === 'both') {
        if (top < bounds[1] && eAttachment.top === 'bottom') {
          top += height;
          eAttachment.top = 'top';
        }

        if (top + height > bounds[3] && eAttachment.top === 'top') {
          top -= height;
          eAttachment.top = 'bottom';
        }
      }

      if (changeAttachX === 'element' || changeAttachX === 'both') {
        if (left < bounds[0]) {
          if (eAttachment.left === 'right') {
            left += width;
            eAttachment.left = 'left';
          } else if (eAttachment.left === 'center') {
            left += width / 2;
            eAttachment.left = 'left';
          }
        }

        if (left + width > bounds[2]) {
          if (eAttachment.left === 'left') {
            left -= width;
            eAttachment.left = 'right';
          } else if (eAttachment.left === 'center') {
            left -= width / 2;
            eAttachment.left = 'right';
          }
        }
      }

      if (typeof pin === 'string') {
        pin = pin.split(',').map(function (p) {
          return p.trim();
        });
      } else if (pin === true) {
        pin = ['top', 'left', 'right', 'bottom'];
      }

      pin = pin || [];

      var pinned = [];
      var oob = [];

      if (top < bounds[1]) {
        if (pin.indexOf('top') >= 0) {
          top = bounds[1];
          pinned.push('top');
        } else {
          oob.push('top');
        }
      }

      if (top + height > bounds[3]) {
        if (pin.indexOf('bottom') >= 0) {
          top = bounds[3] - height;
          pinned.push('bottom');
        } else {
          oob.push('bottom');
        }
      }

      if (left < bounds[0]) {
        if (pin.indexOf('left') >= 0) {
          left = bounds[0];
          pinned.push('left');
        } else {
          oob.push('left');
        }
      }

      if (left + width > bounds[2]) {
        if (pin.indexOf('right') >= 0) {
          left = bounds[2] - width;
          pinned.push('right');
        } else {
          oob.push('right');
        }
      }

      if (pinned.length) {
        (function () {
          var pinnedClass = undefined;
          if (typeof _this.options.pinnedClass !== 'undefined') {
            pinnedClass = _this.options.pinnedClass;
          } else {
            pinnedClass = _this.getClass('pinned');
          }

          addClasses.push(pinnedClass);
          pinned.forEach(function (side) {
            addClasses.push(pinnedClass + '-' + side);
          });
        })();
      }

      if (oob.length) {
        (function () {
          var oobClass = undefined;
          if (typeof _this.options.outOfBoundsClass !== 'undefined') {
            oobClass = _this.options.outOfBoundsClass;
          } else {
            oobClass = _this.getClass('out-of-bounds');
          }

          addClasses.push(oobClass);
          oob.forEach(function (side) {
            addClasses.push(oobClass + '-' + side);
          });
        })();
      }

      if (pinned.indexOf('left') >= 0 || pinned.indexOf('right') >= 0) {
        eAttachment.left = tAttachment.left = false;
      }
      if (pinned.indexOf('top') >= 0 || pinned.indexOf('bottom') >= 0) {
        eAttachment.top = tAttachment.top = false;
      }

      if (tAttachment.top !== targetAttachment.top || tAttachment.left !== targetAttachment.left || eAttachment.top !== _this.attachment.top || eAttachment.left !== _this.attachment.left) {
        _this.updateAttachClasses(eAttachment, tAttachment);
        _this.trigger('update', {
          attachment: eAttachment,
          targetAttachment: tAttachment
        });
      }
    });

    defer(function () {
      if (!(_this.options.addTargetClasses === false)) {
        updateClasses(_this.target, addClasses, allClasses);
      }
      updateClasses(_this.element, addClasses, allClasses);
    });

    return { top: top, left: left };
  }
});
/* globals TetherBase */

'use strict';

var _TetherBase$Utils = TetherBase.Utils;
var getBounds = _TetherBase$Utils.getBounds;
var updateClasses = _TetherBase$Utils.updateClasses;
var defer = _TetherBase$Utils.defer;

TetherBase.modules.push({
  position: function position(_ref) {
    var _this = this;

    var top = _ref.top;
    var left = _ref.left;

    var _cache = this.cache('element-bounds', function () {
      return getBounds(_this.element);
    });

    var height = _cache.height;
    var width = _cache.width;

    var targetPos = this.getTargetBounds();

    var bottom = top + height;
    var right = left + width;

    var abutted = [];
    if (top <= targetPos.bottom && bottom >= targetPos.top) {
      ['left', 'right'].forEach(function (side) {
        var targetPosSide = targetPos[side];
        if (targetPosSide === left || targetPosSide === right) {
          abutted.push(side);
        }
      });
    }

    if (left <= targetPos.right && right >= targetPos.left) {
      ['top', 'bottom'].forEach(function (side) {
        var targetPosSide = targetPos[side];
        if (targetPosSide === top || targetPosSide === bottom) {
          abutted.push(side);
        }
      });
    }

    var allClasses = [];
    var addClasses = [];

    var sides = ['left', 'top', 'right', 'bottom'];
    allClasses.push(this.getClass('abutted'));
    sides.forEach(function (side) {
      allClasses.push(_this.getClass('abutted') + '-' + side);
    });

    if (abutted.length) {
      addClasses.push(this.getClass('abutted'));
    }

    abutted.forEach(function (side) {
      addClasses.push(_this.getClass('abutted') + '-' + side);
    });

    defer(function () {
      if (!(_this.options.addTargetClasses === false)) {
        updateClasses(_this.target, addClasses, allClasses);
      }
      updateClasses(_this.element, addClasses, allClasses);
    });

    return true;
  }
});
/* globals TetherBase */

'use strict';

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

TetherBase.modules.push({
  position: function position(_ref) {
    var top = _ref.top;
    var left = _ref.left;

    if (!this.options.shift) {
      return;
    }

    var shift = this.options.shift;
    if (typeof this.options.shift === 'function') {
      shift = this.options.shift.call(this, { top: top, left: left });
    }

    var shiftTop = undefined,
        shiftLeft = undefined;
    if (typeof shift === 'string') {
      shift = shift.split(' ');
      shift[1] = shift[1] || shift[0];

      var _shift = shift;

      var _shift2 = _slicedToArray(_shift, 2);

      shiftTop = _shift2[0];
      shiftLeft = _shift2[1];

      shiftTop = parseFloat(shiftTop, 10);
      shiftLeft = parseFloat(shiftLeft, 10);
    } else {
      shiftTop = shift.top;
      shiftLeft = shift.left;
    }

    top += shiftTop;
    left += shiftLeft;

    return { top: top, left: left };
  }
});
return Tether;

}));


/***/ }),

/***/ 80:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(20);


/***/ })

/******/ });