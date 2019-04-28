(function(e){function t(t){for(var r,s,o=t[0],u=t[1],c=t[2],l=0,h=[];l<o.length;l++)s=o[l],a[s]&&h.push(a[s][0]),a[s]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);p&&p(t);while(h.length)h.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var u=n[o];0!==a[u]&&(r=!1)}r&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},i=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/aws/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var p=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("64a9"),a=n.n(r);a.a},"07d2":function(e,t,n){"use strict";var r=n("5aa3"),a=n.n(r);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("HelloWorld")],1)},i=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("img",{attrs:{alt:"Vue logo",height:"200",src:e.userInfo.picture||"https://cdn.authing.cn/authing-logo@2.png"}}),n("h1",[e._v(e._s(e.msg))]),e.userInfo.sub?n("p",[e._v("\n    Your Authing ID is "),n("strong",[e._v(e._s(e.userInfo.sub))]),n("br"),e._v("\n    Whole userInfo is\n    "),n("code",{staticStyle:{"text-align":"left"}},[e._v("\n      "+e._s(e.userInfo)+"\n    ")])]):e._e(),n("h3",[e._v("Open the Login Page")]),e._m(0),n("h3",[e._v("See the message from AWS Lambda")]),n("ul",[n("p"),e._m(1),n("p",[e._v(e._s(e.publicMessage))]),n("p"),n("p"),e._m(2),n("p",[e._v(e._s(e.privateMessage))]),n("p")]),n("h3",[e._v("Essential Links")]),e._m(3)])},o=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://lambda.authing.cn/oauth/oidc/auth?client_id=5cc41c06d14c740a0c93ba6f&redirect_uri=https://sample.authing.cn/aws&scope=openid profile&response_type=id_token token&state=jacket&nonce=1831289",rel:"noopener"}},[e._v("Login")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",[e._v("Public: "),n("a",{attrs:{target:"_blank",href:"https://gmvhw2qh1m.execute-api.us-east-1.amazonaws.com/dev/api/public"}},[e._v("/api/public")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",[e._v("Private: "),n("a",{attrs:{target:"_blank",href:"https://gmvhw2qh1m.execute-api.us-east-1.amazonaws.com/dev/api/private"}},[e._v("/api/private")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/Authing/authing-lambda",target:"_blank",rel:"noopener"}},[e._v("Authing Lambda on Github")])]),n("li",[n("a",{attrs:{href:"https://authing.cn",target:"_blank",rel:"noopener"}},[e._v("Authing.cn")])])])}],u=(n("a481"),n("28a5"),n("96cf"),n("3b8d")),c=n("bc3a"),p=n.n(c),l={name:"HelloWorld",data:function(){return{msg:"Welcome to Lambda + Authing Project",userInfo:{},publicMessage:"",privateMessage:"",idToken:""}},mounted:function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(){var t,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(t=this.getHashParameters(),n=t.access_token,this.idToken=t.id_token,this.getPublic(),this.getPrivate(),!n){e.next=8;break}return e.next=8,this.getUserInfo(n);case 8:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),methods:{getUserInfo:function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("https://users.authing.cn/oauth/oidc/user/userinfo?access_token=".concat(t));case 2:n=e.sent,this.userInfo=n.data,this.getPrivate();case 5:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),getPublic:function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("https://gmvhw2qh1m.execute-api.us-east-1.amazonaws.com/dev/api/public");case 2:t=e.sent,this.publicMessage=t.data;case 4:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),getPrivate:function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.get("https://gmvhw2qh1m.execute-api.us-east-1.amazonaws.com/dev/api/private",{headers:{Authorization:"Bearer ".concat(this.idToken)}});case 3:t=e.sent,this.privateMessage=t.data,e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),this.privateMessage=e.t0;case 10:case"end":return e.stop()}},e,this,[[0,7]])}));function t(){return e.apply(this,arguments)}return t}(),getHashParameter:function(e){var t=this.getHashParameters();return t[e]},getHashParameters:function(){for(var e=(location.hash||"").replace(/^\#/,"").split("&"),t={},n=0;n<e.length;n++){var r=e[n].split("=");2==r.length&&(t[r[0]]=r[1])}return t}}},h=l,f=(n("07d2"),n("2877")),v=Object(f["a"])(h,s,o,!1,null,"1129b33e",null),g=v.exports,d={name:"app",components:{HelloWorld:g}},m=d,_=(n("034f"),Object(f["a"])(m,a,i,!1,null,null,null)),b=_.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(b)}}).$mount("#app")},"5aa3":function(e,t,n){},"64a9":function(e,t,n){}});
//# sourceMappingURL=app.53560e99.js.map