(this["webpackJsonpsteps-learner"]=this["webpackJsonpsteps-learner"]||[]).push([[0],{16:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var r=n(3),i=n.n(r),s=n(8),o=n.n(s),a=n(1),l=n(9),c=n(6),h=n(10),u=n(11),d=n(21),b=["#138708","","#3cd6d4","","#b31212","#ed7505","","#ac1bfa","","#ffdb38","","#996100"];var f,v=["F Dur","C Dur","G Dur","D Dur","A Dur ","E Dur","B Dur "],j=["C#","D#","F#","G#","A#"],p=["Gb Dur","Db Dur","Ab Dur","Eb Dur","Bb Dur"],g=["Do","Ra","Re","Me","Mi","Fa","Se","So","Le","La","Li","Ti"],x=["Do","Re","Mi","Fa","So","La","Ti"],m=["1","2","3","4","5","6","7","b3","b2","#2","b9","8","9","#9","#4","11","#11","b5","#5","b6","b13","13","b7"],O=["b3","b2","#2","b9","8","9","#9","#4","11","#11","b5","#5","b6","b13","13","b7"];!function(e){e.Random="random",e.Quinten="quinten",e.Quinten2="quinten2",e.Quarten="quarten",e.Quarten2="quarten2"}(f||(f={}));var _=["F Dur","C Dur","G Dur","D Dur","A Dur ","E Dur","B Dur ","Gb Dur","Db Dur","Ab Dur","Eb Dur","Bb Dur","C#","D#","F#","G#","A#"],C=function(){function e(){Object(h.a)(this,e),this._showColors=!1,this._key=_[1],this._number=m[1],this._number2=m[1],this._ignore=[],this._onChange=new d.a,this._numberChangeInterval=1500,this._numberChangeInterval2=1500,this._keyChangeInterval=1500,this._order=f.Quinten,this._filterDurMoll=!1,this._showScaleNotes=!1,this._hideNextButtons=!1,this._hideNumber=!1,this._keyIntervalId=void 0,this._numberIntervalId=void 0,this._numberIntervalId2=void 0,this.loadFromLocalStorage(),this.startIntervals(this._keyChangeInterval,this._numberChangeInterval,this._numberChangeInterval2),this.nextNumber(),this.nextKey(),this.publish()}return Object(u.a)(e,[{key:"filterDurMoll",get:function(){return this._filterDurMoll},set:function(e){this._filterDurMoll=e,this.publish()}},{key:"showScaleNotes",get:function(){return this._showScaleNotes},set:function(e){this._showScaleNotes=e,this.publish()}},{key:"hideNextButtons",get:function(){return this._hideNextButtons},set:function(e){this._hideNextButtons=e,this.publish()}},{key:"hideNumber",get:function(){return this._hideNumber},set:function(e){this._hideNumber=e,this.publish()}},{key:"numberChangeInterval",set:function(e){this._numberChangeInterval=e,this.publish()}},{key:"showColors",get:function(){return this._showColors},set:function(e){this._showColors=e,this.publish()}},{key:"keyChangeInterval",get:function(){return this._keyChangeInterval},set:function(e){this._keyChangeInterval=e,this.publish()}},{key:"saveToLocalStorage",value:function(){localStorage.setItem("settings",JSON.stringify(this.state))}},{key:"loadFromLocalStorage",value:function(){var e=localStorage.getItem("settings");if(e){console.log("loaded from localStorage");for(var t=JSON.parse(e),n=0,r=Object.entries(t);n<r.length;n++){var i=Object(c.a)(r[n],2),s=i[0],o=i[1];this["_"+s]=o,console.log(s,o,this)}}}},{key:"order",set:function(e){this._order=e}},{key:"startIntervals",value:function(e,t,n){console.log("Start ----------",e,t),this.startNumberInterval(t),this.startNumberInterval2(n),this.startKeyInterval(e),this.publish()}},{key:"startKeyInterval",value:function(e){var t=this;void 0!==this._keyIntervalId&&window.clearInterval(this._keyIntervalId),this._keyChangeInterval=e,console.log("start key interval"),this._keyIntervalId=window.setInterval((function(){t.nextKey()}),e)}},{key:"startNumberInterval",value:function(e){var t=this;void 0!==this._numberIntervalId&&window.clearInterval(this._numberIntervalId),this._numberChangeInterval=e,console.log("start number interval"),this._numberIntervalId=window.setInterval((function(){t.nextNumber()}),e)}},{key:"startNumberInterval2",value:function(e){var t=this;void 0!==this._numberIntervalId2&&window.clearInterval(this._numberIntervalId2),this._numberChangeInterval2=e,console.log("start number interval2"),this._numberIntervalId2=window.setInterval((function(){t.nextNumber2()}),e)}},{key:"state",get:function(){return{number:this._number,number2:this._number2,key:this._key,ignore:this._ignore,keyChangeInterval:this._keyChangeInterval,numberChangeInterval:this._numberChangeInterval,numberChangeInterval2:this._numberChangeInterval2,filterDurMoll:this._filterDurMoll,hideNumber:this._hideNumber,hideNextButtons:this._hideNextButtons,showScaleNotes:this._showScaleNotes,showColors:this.showColors}}},{key:"publish",value:function(){this.saveToLocalStorage(),this._onChange.next(this.state)}},{key:"nextNumber",value:function(){for(var e=this,t="0",n=0;"0"===t&&n<100;)t=D(m.filter((function(t){return t!==e._number})).filter((function(t){return!e._ignore.includes(t)}))),n++;this._number=t,this.publish()}},{key:"nextNumber2",value:function(){for(var e=this,t="0",n=0;"0"===t&&n<100;)t=D(m.filter((function(t){return t!==e._number2})).filter((function(t){return!e._ignore.includes(t)}))),n++;this._number2=t,this.publish()}},{key:"nextKey",value:function(){var e=this,t=_.filter((function(t){return!e._ignore.includes(t)})),n=t.indexOf(this._key);this._order===f.Random?this.nextRandomKey():this._order===f.Quinten?(this._key=t[(n+1)%t.length],this.publish()):this._order===f.Quinten2?(this._key=t[(n+2)%t.length],this.publish()):this._order===f.Quarten?(this._key=t[(n-1)%t.length],this.publish()):this._order===f.Quarten2&&(this._key=t[(n-2)%t.length],this.publish())}},{key:"nextRandomKey",value:function(){for(var e=this,t=void 0,n=0;!t&&n<100;)t=D(_.filter((function(t){return t!==e._key})).filter((function(t){return!e._ignore.includes(t)}))),n++;t&&(this._key=t,this.publish())}},{key:"ignore",get:function(){return this._ignore},set:function(e){this._ignore=e,this.publish()}},{key:"onChange",get:function(){return this._onChange}}]),e}();function D(e){return e[Math.floor(Math.random()*e.length)]}n(16);var y=n(2),N=n.n(y),k=[{rootNote:{id:"C",flat:"C",sharp:"C"},notes:[{id:"C",flat:"C",sharp:"C"},{id:"D",flat:"D",sharp:"D"},{id:"E",flat:"E",sharp:"E"},{id:"F",flat:"F",sharp:"F"},{id:"G",flat:"G",sharp:"G"},{id:"A",flat:"A",sharp:"A"},{id:"B",flat:"B",sharp:"B"}]},{rootNote:{id:"Db",flat:"Db",sharp:"C#"},notes:[{id:"Db",flat:"Db",sharp:"C#"},{id:"Eb",flat:"Eb",sharp:"D#"},{id:"F",flat:"F",sharp:"F"},{id:"Gb",flat:"Gb",sharp:"F#"},{id:"Ab",flat:"Ab",sharp:"G#"},{id:"Bb",flat:"Bb",sharp:"A#"},{id:"C",flat:"C",sharp:"C"}]},{rootNote:{id:"D",flat:"D",sharp:"D"},notes:[{id:"D",flat:"D",sharp:"D"},{id:"E",flat:"E",sharp:"E"},{id:"Gb",flat:"Gb",sharp:"F#"},{id:"G",flat:"G",sharp:"G"},{id:"A",flat:"A",sharp:"A"},{id:"B",flat:"B",sharp:"B"},{id:"Db",flat:"Db",sharp:"C#"}]},{rootNote:{id:"Eb",flat:"Eb",sharp:"D#"},notes:[{id:"Eb",flat:"Eb",sharp:"D#"},{id:"F",flat:"F",sharp:"F"},{id:"G",flat:"G",sharp:"G"},{id:"Ab",flat:"Ab",sharp:"G#"},{id:"Bb",flat:"Bb",sharp:"A#"},{id:"C",flat:"C",sharp:"C"},{id:"D",flat:"D",sharp:"D"}]},{rootNote:{id:"E",flat:"E",sharp:"E"},notes:[{id:"E",flat:"E",sharp:"E"},{id:"Gb",flat:"Gb",sharp:"F#"},{id:"Ab",flat:"Ab",sharp:"G#"},{id:"A",flat:"A",sharp:"A"},{id:"B",flat:"B",sharp:"B"},{id:"Db",flat:"Db",sharp:"C#"},{id:"Eb",flat:"Eb",sharp:"D#"}]},{rootNote:{id:"F",flat:"F",sharp:"F"},notes:[{id:"F",flat:"F",sharp:"F"},{id:"G",flat:"G",sharp:"G"},{id:"A",flat:"A",sharp:"A"},{id:"Bb",flat:"Bb",sharp:"A#"},{id:"C",flat:"C",sharp:"C"},{id:"D",flat:"D",sharp:"D"},{id:"E",flat:"E",sharp:"E"}]},{rootNote:{id:"Gb",flat:"Gb",sharp:"F#"},notes:[{id:"Gb",flat:"Gb",sharp:"F#"},{id:"Ab",flat:"Ab",sharp:"G#"},{id:"Bb",flat:"Bb",sharp:"A#"},{id:"B",flat:"B",sharp:"B"},{id:"Db",flat:"Db",sharp:"C#"},{id:"Eb",flat:"Eb",sharp:"D#"},{id:"F",flat:"F",sharp:"F"}]},{rootNote:{id:"G",flat:"G",sharp:"G"},notes:[{id:"G",flat:"G",sharp:"G"},{id:"A",flat:"A",sharp:"A"},{id:"B",flat:"B",sharp:"B"},{id:"C",flat:"C",sharp:"C"},{id:"D",flat:"D",sharp:"D"},{id:"E",flat:"E",sharp:"E"},{id:"Gb",flat:"Gb",sharp:"F#"}]},{rootNote:{id:"Ab",flat:"Ab",sharp:"G#"},notes:[{id:"Ab",flat:"Ab",sharp:"G#"},{id:"Bb",flat:"Bb",sharp:"A#"},{id:"C",flat:"C",sharp:"C"},{id:"Db",flat:"Db",sharp:"C#"},{id:"Eb",flat:"Eb",sharp:"D#"},{id:"F",flat:"F",sharp:"F"},{id:"G",flat:"G",sharp:"G"}]},{rootNote:{id:"A",flat:"A",sharp:"A"},notes:[{id:"A",flat:"A",sharp:"A"},{id:"B",flat:"B",sharp:"B"},{id:"Db",flat:"Db",sharp:"C#"},{id:"D",flat:"D",sharp:"D"},{id:"E",flat:"E",sharp:"E"},{id:"Gb",flat:"Gb",sharp:"F#"},{id:"Ab",flat:"Ab",sharp:"G#"}]},{rootNote:{id:"Bb",flat:"Bb",sharp:"A#"},notes:[{id:"Bb",flat:"Bb",sharp:"A#"},{id:"C",flat:"C",sharp:"C"},{id:"D",flat:"D",sharp:"D"},{id:"Eb",flat:"Eb",sharp:"D#"},{id:"F",flat:"F",sharp:"F"},{id:"G",flat:"G",sharp:"G"},{id:"A",flat:"A",sharp:"A"}]},{rootNote:{id:"B",flat:"B",sharp:"B"},notes:[{id:"B",flat:"B",sharp:"B"},{id:"Db",flat:"Db",sharp:"C#"},{id:"Eb",flat:"Eb",sharp:"D#"},{id:"E",flat:"E",sharp:"E"},{id:"Gb",flat:"Gb",sharp:"F#"},{id:"Ab",flat:"Ab",sharp:"G#"},{id:"Bb",flat:"Bb",sharp:"A#"}]}];console.log("scales",k);var I=["F Dur","Gb Dur","Db Dur","Ab Dur","Eb Dur","Bb Dur"];function A(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=e.split(" ")[0],r=parseFloat(t)-1,i=k.find((function(e){return e.rootNote.id===n})),s=null===i||void 0===i?void 0:i.notes[r];console.log({rootNote:n,index:r,scale:i,note:s});var o=I.includes(e)?null===s||void 0===s?void 0:s.flat:null===s||void 0===s?void 0:s.sharp;return o}var B=n(0),G=[Object(B.jsx)("option",{value:"300",children:"0.3 seconds"}),Object(B.jsx)("option",{value:"400",children:"0.4 seconds"}),Object(B.jsx)("option",{value:"500",children:"0.5 seconds"}),Object(B.jsx)("option",{value:"600",children:"0.6 seconds"}),Object(B.jsx)("option",{value:"700",children:"0.7 seconds"}),Object(B.jsx)("option",{value:"800",children:"0.8 seconds"}),Object(B.jsx)("option",{value:"900",children:"0.9 seconds"}),Object(B.jsx)("option",{value:"1000",children:"1 second"}),Object(B.jsx)("option",{value:"1200",children:"1.2 seconds"}),Object(B.jsx)("option",{value:"1400",children:"1.4 seconds"}),Object(B.jsx)("option",{value:"1600",children:"1.6 seconds"}),Object(B.jsx)("option",{value:"1700",children:"1.7 seconds"}),Object(B.jsx)("option",{value:"1800",children:"1.8 seconds"}),Object(B.jsx)("option",{value:"1900",children:"1.9 seconds"}),Object(B.jsx)("option",{value:"2000",children:"2 seconds"}),Object(B.jsx)("option",{value:"2300",children:"2.3 seconds"}),Object(B.jsx)("option",{value:"2400",children:"2.4 seconds"}),Object(B.jsx)("option",{value:"2500",children:"2.5 seconds"}),Object(B.jsx)("option",{value:"2600",children:"2.6 seconds"}),Object(B.jsx)("option",{value:"2700",children:"2.7 seconds"}),Object(B.jsx)("option",{value:"2800",children:"2.8 seconds"}),Object(B.jsx)("option",{value:"2900",children:"2.9 seconds"}),Object(B.jsx)("option",{value:"3000",children:"3 seconds"}),Object(B.jsx)("option",{value:"3500",children:"3.5 seconds"}),Object(B.jsx)("option",{value:"4000",children:"4 seconds"}),Object(B.jsx)("option",{value:"5000",children:"5 seconds"}),Object(B.jsx)("option",{value:"7000",children:"7 seconds"}),Object(B.jsx)("option",{value:"10000",children:"10 seconds"}),Object(B.jsx)("option",{value:"12000",children:"12 seconds"}),Object(B.jsx)("option",{value:"20000",children:"20 seconds"}),Object(B.jsx)("option",{value:"30000",children:"30 seconds"}),Object(B.jsx)("option",{value:"60000",children:"1 min"}),Object(B.jsx)("option",{value:"90000",children:"1.5 min"}),Object(B.jsx)("option",{value:"120000",children:"2 mins"}),Object(B.jsx)("option",{value:"180000",children:"3 mins"}),Object(B.jsx)("option",{value:"240000",children:"4 mins"}),Object(B.jsx)("option",{value:"300000",children:"5 mins"}),Object(B.jsx)("option",{value:"360000",children:"6 mins"}),Object(B.jsx)("option",{value:"3600000",children:"1 h"})],E=new C;var F=function(){var e,t,n,s=Object(r.useState)(),o=Object(c.a)(s,2),l=o[0],h=o[1];Object(r.useEffect)((function(){h(E.state),E.onChange.subscribe((function(e){h(e)}))}),[E,h]),console.log(l);var u=l&&!l.filterDurMoll?null===l||void 0===l?void 0:l.key:null===l||void 0===l||null===(e=l.key)||void 0===e?void 0:e.replace(" Dur","").replace(" Moll",""),d=l&&!l.showScaleNotes?null===l||void 0===l?void 0:l.number:null!==(t=A(null===l||void 0===l?void 0:l.key,null===l||void 0===l?void 0:l.number))&&void 0!==t?t:"no note representation found, only choose 1-7",x=l&&!l.showScaleNotes?null===l||void 0===l?void 0:l.number2:null!==(n=A(null===l||void 0===l?void 0:l.key,null===l||void 0===l?void 0:l.number))&&void 0!==n?n:"no note representation found, only choose 1-7";Object(r.useEffect)((function(){!function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n="white";if(e&&!t){var r=g.indexOf(e);r>-1&&(b[r]&&(n=b[r]),console.log("Color! :)",n,r,b))}var i=document.querySelector("body");i&&(i.style.background=n)}(null===l||void 0===l?void 0:l.key,null===l||void 0===l?void 0:l.showColors)}),[l]);var C=[].concat(Object(a.a)(_),Object(a.a)(m)).map((function(e){return Object(B.jsxs)(i.a.Fragment,{children:["1"===e&&Object(B.jsx)("br",{}),Object(B.jsx)("button",{className:((null===l||void 0===l?void 0:l.ignore.includes(e))?N.a.ignored:N.a.included)+" "+N.a.ignoreButton,onClick:function(t){l&&(l.ignore.includes(e)?E.ignore=l.ignore.filter((function(t){return t!==e})):E.ignore=[].concat(Object(a.a)(l.ignore),[e]))},children:e})]})}));return l?Object(B.jsxs)("div",{className:"App",children:[Object(B.jsxs)("div",{className:N.a.flexrow,children:["key change interval:",Object(B.jsxs)("select",{name:"keys",id:"keyID",onChange:function(e){console.log("ONCHANGE1",e.target.value),E.startIntervals(parseFloat(e.target.value),E.state.numberChangeInterval,E.state.numberChangeInterval2)},children:[G.filter((function(e){return e.props.value===l.keyChangeInterval+""})),G]})]}),Object(B.jsxs)("div",{className:N.a.flexrow,children:["mode change interval:",Object(B.jsxs)("select",{name:"numbers",id:"numberID",onChange:function(e){console.log("ONCHANGE2",e.target.value),E.startIntervals(E.state.keyChangeInterval,E.state.numberChangeInterval,parseFloat(e.target.value))},children:[G.filter((function(e){return e.props.value===l.numberChangeInterval2+""})),G]})]}),Object(B.jsxs)("div",{className:N.a.flexrow,children:["step change interval:",Object(B.jsxs)("select",{name:"numbers2",id:"number2ID",onChange:function(e){console.log("ONCHANGE2",e.target.value),E.startIntervals(E.state.numberChangeInterval,parseFloat(e.target.value),E.state.numberChangeInterval2)},children:[G.filter((function(e){return e.props.value===l.numberChangeInterval+""})),G]})]}),Object(B.jsx)("br",{}),Object(B.jsx)("br",{}),Object(B.jsx)("br",{}),Object(B.jsx)("br",{}),Object(B.jsx)("br",{}),Object(B.jsxs)("div",{className:N.a.box,children:[Object(B.jsx)("div",{className:N.a.key,children:u}),!l.hideNumber&&Object(B.jsxs)(i.a.Fragment,{children:[Object(B.jsx)("div",{className:N.a.number2,children:x}),Object(B.jsx)("div",{className:N.a.number,children:d})]}),Object(B.jsx)("br",{}),!l.hideNextButtons&&Object(B.jsxs)(i.a.Fragment,{children:[Object(B.jsx)("div",{children:Object(B.jsx)("button",{className:"nextKey",onClick:function(e){return E.nextKey()},children:"next key"})}),Object(B.jsx)("br",{}),Object(B.jsx)("div",{children:Object(B.jsx)("button",{className:"nextMode",onClick:function(e){return E.nextNumber2()},children:"next mode"})}),Object(B.jsx)("br",{}),Object(B.jsx)("div",{children:Object(B.jsx)("button",{className:"nextStep",onClick:function(e){return E.nextNumber()},style:{display:l.hideNumber?"none":""},children:"next step"})})]})]}),Object(B.jsx)("div",{children:Object(B.jsx)("button",{style:{backgroundColor:l.hideNumber?"green":"initial"},onClick:function(e){E.hideNumber=!l.hideNumber},children:"hide number"})}),Object(B.jsx)("div",{children:Object(B.jsx)("button",{style:{backgroundColor:l.filterDurMoll?"green":"initial"},onClick:function(e){E.filterDurMoll=!l.filterDurMoll},children:"filter dur moll"})}),Object(B.jsx)("div",{children:Object(B.jsx)("button",{style:{backgroundColor:l.hideNextButtons?"green":"initial"},onClick:function(e){E.hideNextButtons=!l.hideNextButtons},children:"hide next buttons"})}),Object(B.jsx)("div",{children:Object(B.jsx)("button",{style:{backgroundColor:l.showScaleNotes?"green":"initial"},onClick:function(e){E.showScaleNotes=!l.showScaleNotes},children:"show scale notes"})}),Object(B.jsx)("div",{children:Object(B.jsx)("button",{onClick:function(e){0===(null===l||void 0===l?void 0:l.ignore.length)?E.ignore=_:E.ignore=[].concat(Object(a.a)(g),Object(a.a)(O))},children:"all"})}),Object(B.jsx)("div",{children:Object(B.jsx)("button",{onClick:function(e){0===(null===l||void 0===l?void 0:l.ignore.length)?E.ignore=_:E.ignore=[].concat(Object(a.a)(p),Object(a.a)(v),Object(a.a)(g))},children:"sharps"})}),Object(B.jsx)("div",{children:Object(B.jsx)("button",{onClick:function(e){0===(null===l||void 0===l?void 0:l.ignore.length)?E.ignore=_:(E.ignore=[],E.ignore=[].concat(Object(a.a)(j),Object(a.a)(v),Object(a.a)(g)))},children:"flats"})}),Object(B.jsx)("div",{children:Object(B.jsx)("button",{onClick:function(e){0===(null===l||void 0===l?void 0:l.ignore.length)?E.ignore=_:E.ignore=[].concat(Object(a.a)(j),Object(a.a)(p),Object(a.a)(g))},children:"base notes"})}),Object(B.jsx)("br",{}),Object(B.jsx)("div",{className:N.a.ignore,children:C}),Object(B.jsx)("br",{}),Object(B.jsxs)("div",{className:N.a.flexcolumn,children:[Object(B.jsxs)("div",{className:N.a.flexrow,children:["order:",Object(B.jsxs)("select",{name:"order",id:"orderID",onChange:function(e){E.order=e.target.value},children:[Object(B.jsx)("option",{value:f.Quinten,children:"Quinten"}),Object(B.jsx)("option",{value:f.Quinten2,children:"Quinten 2"}),Object(B.jsx)("option",{value:f.Quarten,children:"Quarten"}),Object(B.jsx)("option",{value:f.Quarten2,children:"Quarten 2"}),Object(B.jsx)("option",{value:f.Random,children:"Random"})]})]}),Object(B.jsx)("div",{className:N.a.flexrow,children:Object(B.jsx)("a",{target:"_blank",href:"https://github.com/vincentwue/steps-learner",children:"More information on Github"})})]})]}):null};function w(e){var t=[];return function e(n,r){var i,s;for(n.length||t.push(r),i=0;i<n.length;i++)s=n.splice(i,1)[0],e(n,r.concat(s)),n.splice(i,0,s)}(e,[]),t}function S(){var e,t=function(e){for(var t=[],n=[],r=Math.pow(2,e.length),i=0;i<r;i++){n=[];for(var s=0;s<e.length;s++)i&Math.pow(2,s)&&n.push(e[s]);n.length>0&&t.push(n)}return t.sort((function(e,t){return e.length-t.length})),console.log(t.join("\n")),t}(x).filter((function(e){return 5===e.length})),n=[],r=Object(l.a)(t);try{for(r.s();!(e=r.n()).done;){var i=e.value;n.push.apply(n,Object(a.a)(w(i)))}}catch(o){r.e(o)}finally{r.f()}var s=n.sort((function(e,t){return e>t?-1:1})).reverse().map((function(e){return e.join(" ")})).join("\n");console.log("jaai",n.length,s)}function M(){return S(),Object(B.jsx)("div",{children:Object(B.jsx)(F,{})})}n(18);o.a.render(Object(B.jsx)(M,{}),document.getElementById("root"))},2:function(e,t,n){e.exports={App:"App_App__1P9hb",box:"App_box__22HXT",ignore:"App_ignore__2SyIL",ignoreButton:"App_ignoreButton__3bHMF",included:"App_included__3gq1F",number:"App_number__1CyVF",number2:"App_number2__3sIHn",key:"App_key__gfJ0-",flexrow:"App_flexrow__i-Wbw",flexcolumn:"App_flexcolumn__2p82a"}}},[[19,1,2]]]);
//# sourceMappingURL=main.467fef6a.chunk.js.map