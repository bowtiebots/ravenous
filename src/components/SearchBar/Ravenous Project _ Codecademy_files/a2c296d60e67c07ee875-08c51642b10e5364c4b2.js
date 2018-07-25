(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{22:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.pushDataLayerEvent=e.trackTabChangeEvent=e.trackUserVisit=e.trackUserClick=e.trackContentItemEvent=e.track=void 0;var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},u=o(n(66)),i=o(n(480));function o(t){return t&&t.__esModule?t:{default:t}}var a=e.track=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};var r="";"undefined"!=typeof CCDATA&&"development"===CCDATA.env&&(r="http://"+window.location.hostname+":"+window.location.port),r=r+"/events/"+t,n.fullpath=window.location.pathname+window.location.search;var o=new FormData;o.append("category",t),o.append("event",e),o.append("properties",JSON.stringify(n)),o.append("authenticity_token",u.default.get("authenticity_token")),(0,i.default)(r,o)};e.trackContentItemEvent=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"action",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"click",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},u=n.contentItem,i=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}(n,["contentItem"]);if(u){var o=u.type,s=u.progress;if(void 0===o||void 0===s)return;var c="quiz"===o,f=s.progress_percentage;c&&(f=s.passed?100:0),i=r({up_next:u.upNext,content_item_progress:f,content_item_score:c?s.highest_percentage:null,content_item_type:o,quiz_retake:c&&s.taken},i)}i=r({version:"v2_dashboard"},i),a(t,e,i)};var s=e.trackUserClick=function(t){a("user","click",t)};e.trackUserVisit=function(t){a("user","visit",t)},e.trackTabChangeEvent=function(t,e){return function(n){var r=e[n];s({target:t+"_"+r})}},e.pushDataLayerEvent=function(t){void 0===window.dataLayer&&(window.dataLayer=[]),window.dataLayer.push({event:t})}},27:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(t){return t&&t.__esModule?t:{default:t}}(n(66));n(97);var u={isAdmin:function(){return function(){return this._hasRole("admin")}}(),isAdvisor:function(){return function(){return this._hasRole("advisor")||this._hasRole("advisor_candidate")}}(),isCustomerService:function(){return function(){return this._hasRole("customer_service")}}(),isAuthor:function(){return function(){return this._hasRole("author")}}(),_hasRole:function(){return function(t){return(this.get("roles")||[]).indexOf(t)>=0}}(),isAnon:function(){return function(){return!r.default.has("current_user",void 0)}}(),isPro:function(){return function(){return this.get("pro",!1)}}(),id:function(){return function(){return this.get("_id","anon")}}(),authenticationToken:function(){return function(){return this.get("authentication_token","")}}(),getExperiments:function(){return function(){return this.isAnon()?r.default.get("anonymous_user.experiments"):r.default.get("current_user.experiments")}}(),getExperimentGroup:function(){return function(t){return(this.getExperiments()||{})[t]}}(),getCurrentUser:function(){return function(){return r.default.get("current_user")}}(),get:function(){return function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;return r.default.get("current_user."+t,e)}}(),hasGodMode:function(){return function(){return u.isAdmin()||u.isAdvisor()||u.isAuthor()}}(),isSafari:function(){return function(){var t=navigator.userAgent.toLowerCase();return-1!==t.indexOf("safari")&&!(t.indexOf("chrome")>-1)}}()};e.default=u,t.exports=e.default},48:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.csrf=function(t){var e=u.default.get("authenticity_token");e&&t.set("X-CSRF-Token",e);return t},e.userAuth=function(t){var e=r.default.get("authentication_token");if(!r.default.isAnon()&&e){var n=new i.default(t.url).addQueryParam("authentication_token",e);t.url=n.toString()}window.CCDATA.current_user&&t.set("X-Auth-Token",window.CCDATA.current_user.authentication_token);return t},e.apiAuth=function(t){var e=r.default.get("authentication_token");!r.default.isAnon()&&e&&(t.set("X-Auth-Token",e),t.set("X-User-Id",r.default.id()));return t};var r=o(n(27)),u=o(n(66)),i=o(n(89));function o(t){return t&&t.__esModule?t:{default:t}}},480:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a(n(89)),u=a(n(27)),i=a(n(41)),o=n(48);function a(t){return t&&t.__esModule?t:{default:t}}e.default=function(t,e){var n=!(arguments.length>2&&void 0!==arguments[2]&&arguments[2])&&window.navigator&&"function"==typeof window.navigator.sendBeacon,a=new r.default(t).addQueryParam("authentication_token",u.default.get("authentication_token")).toString();n?function(t,e){navigator.sendBeacon(t,e)}(a,e):function(t,e){var n=i.default.post(t).use(o.csrf).use(o.userAuth);e instanceof FormData||n.setHeader("Content-Type","text/plain;charset=UTF-8"),n.send(e).end()}(a,e)},t.exports=e.default},481:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(t){return t&&t.__esModule?t:{default:t}}(n(66)),u=n(22);var i={track:function(){return function(){r.default.get("push_sign_up_event")&&(0,u.pushDataLayerEvent)("user_sign_up")}}()};e.default=i,t.exports=e.default},97:function(t,e,n){"use strict";(function(t){return t&&t.__esModule?t:{default:t}})(n(77)).default.ajaxPrefilter(function(t,e,n){if("undefined"!=typeof CCDATA){if(CCDATA.current_user){var r=CCDATA.current_user.authentication_token,u=t.url.indexOf("?")>0?"&":"?";t.url+=u+"authentication_token="+r}CCDATA.authenticity_token&&!t.crossDomain&&n.setRequestHeader("X-CSRF-Token",CCDATA.authenticity_token)}})}}]);
//# sourceMappingURL=a2c296d60e67c07ee875-08c51642b10e5364c4b2.js.map