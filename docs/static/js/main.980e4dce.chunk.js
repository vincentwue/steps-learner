(this["webpackJsonpsteps-learner"]=this["webpackJsonpsteps-learner"]||[]).push([[0],{1:function(e,n,t){e.exports={App:"App_App__1P9hb",box:"App_box__22HXT",ignore:"App_ignore__2SyIL",ignoreButton:"App_ignoreButton__3bHMF",included:"App_included__3gq1F",number:"App_number__1CyVF",key:"App_key__gfJ0-",flexrow:"App_flexrow__i-Wbw",flexcolumn:"App_flexcolumn__2p82a"}},15:function(e,n,t){},16:function(e,n,t){},18:function(e,n,t){"use strict";t.r(n);var i=t(2),r=t(8),o=t.n(r),s=(t(15),t(6)),c=t(4),l=(t(16),t(9)),a=t(10),u=t(20),d=["C Dur","G Dur","Ab Dur","Eb Dur","D Moll","C Moll","F Dur","E Dur","A Moll","Bb Dur","E Moll","F Moll","G Moll","B Dur ","G# Moll","A Dur ","F# moll ","Gb Dur","Eb Moll","C# Moll","Db Dur","Bb Moll"],h=["1","2","3","4","5","6","7"],b=function(){function e(){Object(l.a)(this,e),this._key=d[1],this._number=h[1],this._ignore=[].concat(d),this._onChange=new u.a,this._numberChangeInterval=2e3,this._keyChangeInterval=1e4,this._keyIntervalId=void 0,this._numberIntervalId=void 0,this.nextNumber(),this.nextKey(),this.publish(),this.startIntervals(1e4,2e3)}return Object(a.a)(e,[{key:"startIntervals",value:function(e,n){var t=this;void 0!==this._numberIntervalId&&window.clearInterval(this._numberIntervalId),void 0!==this._keyIntervalId&&window.clearInterval(this._keyIntervalId),this._numberChangeInterval=n,this._keyChangeInterval=e,console.log(this.state),this._keyIntervalId=window.setInterval((function(){t.nextKey()}),e),this._numberIntervalId=window.setInterval((function(){t.nextNumber()}),n),this.publish()}},{key:"state",get:function(){return{number:this._number,key:this._key,ignore:this._ignore,keyChangeInterval:this._keyChangeInterval,numberChangeInterval:this._numberChangeInterval}}},{key:"publish",value:function(){this._onChange.next(this.state)}},{key:"nextNumber",value:function(){for(var e=this,n="0",t=0;"0"===n&&t<100;)n=j(h.filter((function(n){return n!==e._number})).filter((function(n){return!e._ignore.includes(n)}))),t++;this._number=n,this.publish()}},{key:"nextKey",value:function(){for(var e=this,n=void 0,t=0;!n&&t<100;)n=j(d.filter((function(n){return n!==e._key})).filter((function(n){return!e._ignore.includes(n)}))),t++;n&&(this._key=n,this.publish())}},{key:"ignore",get:function(){return this._ignore},set:function(e){this._ignore=e,this.publish()}},{key:"onChange",get:function(){return this._onChange}}]),e}();function j(e){return e[Math.floor(Math.random()*e.length)]}var v=t(1),p=t.n(v),x=t(0);var _=function(){var e=Object(i.useState)(),n=Object(c.a)(e,2),t=n[0],r=n[1],o=Object(i.useState)(new b),l=Object(c.a)(o,1)[0],a=Object(i.useState)(!1),u=Object(c.a)(a,2),j=u[0],v=u[1],_=Object(i.useState)(!1),g=Object(c.a)(_,2),O=g[0],f=g[1];Object(i.useEffect)((function(){r(l.state),l.onChange.subscribe((function(e){r(e)}))}),[l,r]),console.log(t);var m=[].concat(Object(s.a)(d),Object(s.a)(h)).map((function(e){return Object(x.jsx)("button",{className:((null===t||void 0===t?void 0:t.ignore.includes(e))?p.a.ignored:p.a.included)+" "+p.a.ignoreButton,onClick:function(n){t&&(t.ignore.includes(e)?l.ignore=t.ignore.filter((function(n){return n!==e})):l.ignore=[].concat(Object(s.a)(t.ignore),[e]))},children:e})})),k=[Object(x.jsx)("option",{value:"500",children:"0.3 second"}),Object(x.jsx)("option",{value:"500",children:"0.4 second"}),Object(x.jsx)("option",{value:"500",children:"0.5 second"}),Object(x.jsx)("option",{value:"600",children:"0.6 second"}),Object(x.jsx)("option",{value:"700",children:"0.7 second"}),Object(x.jsx)("option",{value:"800",children:"0.8 second"}),Object(x.jsx)("option",{value:"900",children:"0.9 second"}),Object(x.jsx)("option",{value:"1000",children:"1 second"}),Object(x.jsx)("option",{value:"1000",children:"1 second"}),Object(x.jsx)("option",{value:"2000",children:"2 seconds"}),Object(x.jsx)("option",{value:"3000",children:"3 seconds"}),Object(x.jsx)("option",{value:"4000",children:"4 seconds"}),Object(x.jsx)("option",{value:"5000",children:"5 seconds"}),Object(x.jsx)("option",{value:"7000",children:"7 seconds"}),Object(x.jsx)("option",{value:"10000",children:"12 seconds"}),Object(x.jsx)("option",{value:"12000",children:"12 seconds"}),Object(x.jsx)("option",{value:"20000",children:"20 seconds"}),Object(x.jsx)("option",{value:"30000",children:"30 seconds"})];return Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)("div",{children:Object(x.jsx)("button",{onClick:function(e){return l.nextKey()},children:"next key"})}),Object(x.jsxs)("div",{className:p.a.box,children:[Object(x.jsx)("div",{className:p.a.key,children:O?null===t||void 0===t?void 0:t.key.replace(" Dur","").replace(" Moll",""):null===t||void 0===t?void 0:t.key}),!j&&Object(x.jsx)("div",{className:p.a.number,children:null===t||void 0===t?void 0:t.number})]}),Object(x.jsx)("div",{children:Object(x.jsx)("button",{onClick:function(e){v(!j)},children:"hide number"})}),Object(x.jsx)("div",{children:Object(x.jsx)("button",{onClick:function(e){f(!O)},children:"filter dur moll"})}),Object(x.jsx)("div",{children:Object(x.jsx)("button",{onClick:function(e){0===(null===t||void 0===t?void 0:t.ignore.length)?l.ignore=d:l.ignore=[]},children:"all"})}),Object(x.jsx)("div",{className:p.a.ignore,children:m}),Object(x.jsxs)("div",{className:p.a.flexcolumn,children:[Object(x.jsxs)("div",{className:p.a.flexrow,children:["key change interval:",Object(x.jsxs)("select",{name:"keys",id:"keyID",onChange:function(e){l.startIntervals(parseFloat(e.target.value),l.state.numberChangeInterval)},children:[Object(x.jsx)("option",{value:"10000",children:"10 seconds (standard)"}),k]})]}),Object(x.jsxs)("div",{className:p.a.flexrow,children:["step change interval:",Object(x.jsxs)("select",{name:"numbers",id:"numberID",onChange:function(e){l.startIntervals(l.state.keyChangeInterval,parseFloat(e.target.value))},children:[Object(x.jsx)("option",{value:"2000",children:"2 seconds (standard)"}),k]})]}),Object(x.jsx)("div",{className:p.a.flexrow,children:Object(x.jsx)("a",{target:"_blank",href:"https://github.com/vincentwue/steps-learner",children:"More information on Github"})})]})]})};o.a.render(Object(x.jsx)(_,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.980e4dce.chunk.js.map