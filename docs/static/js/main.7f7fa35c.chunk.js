(this["webpackJsonpsteps-learner"]=this["webpackJsonpsteps-learner"]||[]).push([[0],{1:function(e,t,n){e.exports={App:"App_App__1P9hb",box:"App_box__22HXT",ignore:"App_ignore__2SyIL",ignoreButton:"App_ignoreButton__3bHMF",included:"App_included__3gq1F",number:"App_number__1CyVF",key:"App_key__gfJ0-",flexrow:"App_flexrow__i-Wbw",flexcolumn:"App_flexcolumn__2p82a"}},15:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var i,r=n(3),s=n.n(r),o=n(8),a=n.n(o),l=n(2),c=n(6),h=(n(15),n(9)),d=n(10),u=n(20),b=["F Dur","C Dur","G Dur","D Dur","A Dur ","E Dur","B Dur "],p=["C#","D#","F#","G#","A#"],f=["Gb Dur","Db Dur","Ab Dur","Eb Dur","Bb Dur"],j=["Do","Ra","Re","Me","Mi","Fa","Se","So","Le","La","Ti"],v=["F Dur","C Dur","G Dur","D Dur","A Dur ","E Dur","B Dur ","Gb Dur","Db Dur","Ab Dur","Eb Dur","Bb Dur","C#","D#","F#","G#","A#"].concat(j),g=["1","2","3","4","5","6","7","b3","b2","#2","b9","9","#9","11","#11","b5","#5","13","b13","#4","b6","b7"];!function(e){e.Random="random",e.Quinten="quinten",e.Quinten2="quinten2",e.Quarten="quarten",e.Quarten2="quarten2"}(i||(i={}));var x=[].concat(Object(l.a)(v),j),O=function(){function e(){Object(h.a)(this,e),this._key=x[1],this._number=g[1],this._ignore=[],this._onChange=new u.a,this._numberChangeInterval=1500,this._keyChangeInterval=1500,this._order=i.Quinten,this._filterDurMoll=!1,this._showScaleNotes=!1,this._hideNextButtons=!1,this._hideNumber=!1,this._keyIntervalId=void 0,this._numberIntervalId=void 0,this.loadFromLocalStorage(),this.startIntervals(this._keyChangeInterval,this._numberChangeInterval),this.nextNumber(),this.nextKey(),this.publish()}return Object(d.a)(e,[{key:"filterDurMoll",get:function(){return this._filterDurMoll},set:function(e){this._filterDurMoll=e,this.publish()}},{key:"showScaleNotes",get:function(){return this._showScaleNotes},set:function(e){this._showScaleNotes=e,this.publish()}},{key:"hideNextButtons",get:function(){return this._hideNextButtons},set:function(e){this._hideNextButtons=e,this.publish()}},{key:"hideNumber",get:function(){return this._hideNumber},set:function(e){this._hideNumber=e,this.publish()}},{key:"numberChangeInterval",get:function(){return this._numberChangeInterval},set:function(e){this._numberChangeInterval=e,this.publish()}},{key:"keyChangeInterval",get:function(){return this._keyChangeInterval},set:function(e){this._keyChangeInterval=e,this.publish()}},{key:"saveToLocalStorage",value:function(){localStorage.setItem("settings",JSON.stringify(this.state)),console.log("saved to localStorage")}},{key:"loadFromLocalStorage",value:function(){var e=localStorage.getItem("settings");if(e){console.log("loaded from localStorage");for(var t=JSON.parse(e),n=0,i=Object.entries(t);n<i.length;n++){var r=Object(c.a)(i[n],2),s=r[0],o=r[1];this["_"+s]=o,console.log(s,o,this)}}}},{key:"order",set:function(e){this._order=e}},{key:"startIntervals",value:function(e,t){var n=this;console.log("Start ----------",e,t),void 0!==this._numberIntervalId&&window.clearInterval(this._numberIntervalId),void 0!==this._keyIntervalId&&window.clearInterval(this._keyIntervalId),this._numberChangeInterval=t,this._keyChangeInterval=e,console.log(this.state),this._keyIntervalId=window.setInterval((function(){n.nextKey()}),e),this._numberIntervalId=window.setInterval((function(){n.nextNumber()}),t),this.publish()}},{key:"state",get:function(){return{number:this._number,key:this._key,ignore:this._ignore,keyChangeInterval:this._keyChangeInterval,numberChangeInterval:this._numberChangeInterval,filterDurMoll:this._filterDurMoll,hideNumber:this._hideNumber,hideNextButtons:this._hideNextButtons,showScaleNotes:this._showScaleNotes}}},{key:"publish",value:function(){this.saveToLocalStorage(),this._onChange.next(this.state)}},{key:"nextNumber",value:function(){for(var e=this,t="0",n=0;"0"===t&&n<100;)t=D(g.filter((function(t){return t!==e._number})).filter((function(t){return!e._ignore.includes(t)}))),n++;this._number=t,this.publish()}},{key:"nextKey",value:function(){var e=this,t=x.filter((function(t){return!e._ignore.includes(t)})),n=t.indexOf(this._key);this._order===i.Random?this.nextRandomKey():this._order===i.Quinten?(this._key=t[(n+1)%t.length],this.publish()):this._order===i.Quinten2?(this._key=t[(n+2)%t.length],this.publish()):this._order===i.Quarten?(this._key=t[(n-1)%t.length],this.publish()):this._order===i.Quarten2&&(this._key=t[(n-2)%t.length],this.publish())}},{key:"nextRandomKey",value:function(){for(var e=this,t=void 0,n=0;!t&&n<100;)t=D(x.filter((function(t){return t!==e._key})).filter((function(t){return!e._ignore.includes(t)}))),n++;t&&(this._key=t,this.publish())}},{key:"ignore",get:function(){return this._ignore},set:function(e){this._ignore=e,this.publish()}},{key:"onChange",get:function(){return this._onChange}}]),e}();function D(e){return e[Math.floor(Math.random()*e.length)]}var _=n(1),m=n.n(_),C=[{rootNote:{id:"C",flat:"C",sharp:"C"},notes:[{id:"C",flat:"C",sharp:"C"},{id:"D",flat:"D",sharp:"D"},{id:"E",flat:"E",sharp:"E"},{id:"F",flat:"F",sharp:"F"},{id:"G",flat:"G",sharp:"G"},{id:"A",flat:"A",sharp:"A"},{id:"B",flat:"B",sharp:"B"}]},{rootNote:{id:"Db",flat:"Db",sharp:"C#"},notes:[{id:"Db",flat:"Db",sharp:"C#"},{id:"Eb",flat:"Eb",sharp:"D#"},{id:"F",flat:"F",sharp:"F"},{id:"Gb",flat:"Gb",sharp:"F#"},{id:"Ab",flat:"Ab",sharp:"G#"},{id:"Bb",flat:"Bb",sharp:"A#"},{id:"C",flat:"C",sharp:"C"}]},{rootNote:{id:"D",flat:"D",sharp:"D"},notes:[{id:"D",flat:"D",sharp:"D"},{id:"E",flat:"E",sharp:"E"},{id:"Gb",flat:"Gb",sharp:"F#"},{id:"G",flat:"G",sharp:"G"},{id:"A",flat:"A",sharp:"A"},{id:"B",flat:"B",sharp:"B"},{id:"Db",flat:"Db",sharp:"C#"}]},{rootNote:{id:"Eb",flat:"Eb",sharp:"D#"},notes:[{id:"Eb",flat:"Eb",sharp:"D#"},{id:"F",flat:"F",sharp:"F"},{id:"G",flat:"G",sharp:"G"},{id:"Ab",flat:"Ab",sharp:"G#"},{id:"Bb",flat:"Bb",sharp:"A#"},{id:"C",flat:"C",sharp:"C"},{id:"D",flat:"D",sharp:"D"}]},{rootNote:{id:"E",flat:"E",sharp:"E"},notes:[{id:"E",flat:"E",sharp:"E"},{id:"Gb",flat:"Gb",sharp:"F#"},{id:"Ab",flat:"Ab",sharp:"G#"},{id:"A",flat:"A",sharp:"A"},{id:"B",flat:"B",sharp:"B"},{id:"Db",flat:"Db",sharp:"C#"},{id:"Eb",flat:"Eb",sharp:"D#"}]},{rootNote:{id:"F",flat:"F",sharp:"F"},notes:[{id:"F",flat:"F",sharp:"F"},{id:"G",flat:"G",sharp:"G"},{id:"A",flat:"A",sharp:"A"},{id:"Bb",flat:"Bb",sharp:"A#"},{id:"C",flat:"C",sharp:"C"},{id:"D",flat:"D",sharp:"D"},{id:"E",flat:"E",sharp:"E"}]},{rootNote:{id:"Gb",flat:"Gb",sharp:"F#"},notes:[{id:"Gb",flat:"Gb",sharp:"F#"},{id:"Ab",flat:"Ab",sharp:"G#"},{id:"Bb",flat:"Bb",sharp:"A#"},{id:"B",flat:"B",sharp:"B"},{id:"Db",flat:"Db",sharp:"C#"},{id:"Eb",flat:"Eb",sharp:"D#"},{id:"F",flat:"F",sharp:"F"}]},{rootNote:{id:"G",flat:"G",sharp:"G"},notes:[{id:"G",flat:"G",sharp:"G"},{id:"A",flat:"A",sharp:"A"},{id:"B",flat:"B",sharp:"B"},{id:"C",flat:"C",sharp:"C"},{id:"D",flat:"D",sharp:"D"},{id:"E",flat:"E",sharp:"E"},{id:"Gb",flat:"Gb",sharp:"F#"}]},{rootNote:{id:"Ab",flat:"Ab",sharp:"G#"},notes:[{id:"Ab",flat:"Ab",sharp:"G#"},{id:"Bb",flat:"Bb",sharp:"A#"},{id:"C",flat:"C",sharp:"C"},{id:"Db",flat:"Db",sharp:"C#"},{id:"Eb",flat:"Eb",sharp:"D#"},{id:"F",flat:"F",sharp:"F"},{id:"G",flat:"G",sharp:"G"}]},{rootNote:{id:"A",flat:"A",sharp:"A"},notes:[{id:"A",flat:"A",sharp:"A"},{id:"B",flat:"B",sharp:"B"},{id:"Db",flat:"Db",sharp:"C#"},{id:"D",flat:"D",sharp:"D"},{id:"E",flat:"E",sharp:"E"},{id:"Gb",flat:"Gb",sharp:"F#"},{id:"Ab",flat:"Ab",sharp:"G#"}]},{rootNote:{id:"Bb",flat:"Bb",sharp:"A#"},notes:[{id:"Bb",flat:"Bb",sharp:"A#"},{id:"C",flat:"C",sharp:"C"},{id:"D",flat:"D",sharp:"D"},{id:"Eb",flat:"Eb",sharp:"D#"},{id:"F",flat:"F",sharp:"F"},{id:"G",flat:"G",sharp:"G"},{id:"A",flat:"A",sharp:"A"}]},{rootNote:{id:"B",flat:"B",sharp:"B"},notes:[{id:"B",flat:"B",sharp:"B"},{id:"Db",flat:"Db",sharp:"C#"},{id:"Eb",flat:"Eb",sharp:"D#"},{id:"E",flat:"E",sharp:"E"},{id:"Gb",flat:"Gb",sharp:"F#"},{id:"Ab",flat:"Ab",sharp:"G#"},{id:"Bb",flat:"Bb",sharp:"A#"}]}];console.log("scales",C);var k=["F Dur","Gb Dur","Db Dur","Ab Dur","Eb Dur","Bb Dur"];var y=n(0),A=[Object(y.jsx)("option",{value:"300",children:"0.3 seconds"}),Object(y.jsx)("option",{value:"400",children:"0.4 seconds"}),Object(y.jsx)("option",{value:"500",children:"0.5 seconds"}),Object(y.jsx)("option",{value:"600",children:"0.6 seconds"}),Object(y.jsx)("option",{value:"700",children:"0.7 seconds"}),Object(y.jsx)("option",{value:"800",children:"0.8 seconds"}),Object(y.jsx)("option",{value:"900",children:"0.9 seconds"}),Object(y.jsx)("option",{value:"1000",children:"1 second"}),Object(y.jsx)("option",{value:"1200",children:"1.2 seconds"}),Object(y.jsx)("option",{value:"1400",children:"1.4 seconds"}),Object(y.jsx)("option",{value:"1600",children:"1.6 seconds"}),Object(y.jsx)("option",{value:"1700",children:"1.7 seconds"}),Object(y.jsx)("option",{value:"1800",children:"1.8 seconds"}),Object(y.jsx)("option",{value:"1900",children:"1.9 seconds"}),Object(y.jsx)("option",{value:"2000",children:"2 seconds"}),Object(y.jsx)("option",{value:"2300",children:"2.3 seconds"}),Object(y.jsx)("option",{value:"2400",children:"2.4 seconds"}),Object(y.jsx)("option",{value:"2500",children:"2.5 seconds"}),Object(y.jsx)("option",{value:"2600",children:"2.6 seconds"}),Object(y.jsx)("option",{value:"2700",children:"2.7 seconds"}),Object(y.jsx)("option",{value:"2800",children:"2.8 seconds"}),Object(y.jsx)("option",{value:"2900",children:"2.9 seconds"}),Object(y.jsx)("option",{value:"3000",children:"3 seconds"}),Object(y.jsx)("option",{value:"3500",children:"3.5 seconds"}),Object(y.jsx)("option",{value:"4000",children:"4 seconds"}),Object(y.jsx)("option",{value:"5000",children:"5 seconds"}),Object(y.jsx)("option",{value:"7000",children:"7 seconds"}),Object(y.jsx)("option",{value:"10000",children:"10 seconds"}),Object(y.jsx)("option",{value:"12000",children:"12 seconds"}),Object(y.jsx)("option",{value:"20000",children:"20 seconds"}),Object(y.jsx)("option",{value:"30000",children:"30 seconds"}),Object(y.jsx)("option",{value:"60000",children:"1 min"}),Object(y.jsx)("option",{value:"90000",children:"1.5 min"}),Object(y.jsx)("option",{value:"120000",children:"2 mins"}),Object(y.jsx)("option",{value:"180000",children:"3 mins"}),Object(y.jsx)("option",{value:"240000",children:"4 mins"}),Object(y.jsx)("option",{value:"300000",children:"5 mins"}),Object(y.jsx)("option",{value:"360000",children:"6 mins"}),Object(y.jsx)("option",{value:"3600000",children:"1 h"})],N=new O;var B=function(){var e,t,n=Object(r.useState)(),o=Object(c.a)(n,2),a=o[0],h=o[1];Object(r.useEffect)((function(){h(N.state),N.onChange.subscribe((function(e){h(e)}))}),[N,h]),console.log(a);var d=[].concat(Object(l.a)(x),Object(l.a)(g)).map((function(e){return Object(y.jsxs)(s.a.Fragment,{children:["1"===e&&Object(y.jsx)("br",{}),Object(y.jsx)("button",{className:((null===a||void 0===a?void 0:a.ignore.includes(e))?m.a.ignored:m.a.included)+" "+m.a.ignoreButton,onClick:function(t){a&&(a.ignore.includes(e)?N.ignore=a.ignore.filter((function(t){return t!==e})):N.ignore=[].concat(Object(l.a)(a.ignore),[e]))},children:e})]})}));if(!a)return null;var u=a.filterDurMoll?null===a||void 0===a||null===(e=a.key)||void 0===e?void 0:e.replace(" Dur","").replace(" Moll",""):null===a||void 0===a?void 0:a.key,j=a.showScaleNotes?null!==(t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=e.split(" ")[0],i=parseFloat(t)-1,r=C.find((function(e){return e.rootNote.id===n})),s=null===r||void 0===r?void 0:r.notes[i];return console.log({rootNote:n,index:i,scale:r,note:s}),k.includes(e)?null===s||void 0===s?void 0:s.flat:null===s||void 0===s?void 0:s.sharp}(null===a||void 0===a?void 0:a.key,null===a||void 0===a?void 0:a.number))&&void 0!==t?t:"no note representation found, only choose 1-7":null===a||void 0===a?void 0:a.number;return Object(y.jsxs)("div",{className:"App",children:[Object(y.jsxs)("div",{className:m.a.box,children:[Object(y.jsx)("div",{className:m.a.key,children:u}),!a.hideNumber&&Object(y.jsx)("div",{className:m.a.number,children:j}),!a.hideNextButtons&&Object(y.jsxs)(s.a.Fragment,{children:[Object(y.jsx)("div",{children:Object(y.jsx)("button",{className:"nextKey",onClick:function(e){return N.nextKey()},children:"next key"})}),Object(y.jsx)("div",{children:Object(y.jsx)("button",{className:"nextStep",onClick:function(e){return N.nextNumber()},style:{display:a.hideNumber?"none":""},children:"next step"})})]})]}),Object(y.jsx)("div",{children:Object(y.jsx)("button",{style:{backgroundColor:a.hideNumber?"green":"initial"},onClick:function(e){N.hideNumber=!a.hideNumber},children:"hide number"})}),Object(y.jsx)("div",{children:Object(y.jsx)("button",{style:{backgroundColor:a.filterDurMoll?"green":"initial"},onClick:function(e){N.filterDurMoll=!a.filterDurMoll},children:"filter dur moll"})}),Object(y.jsx)("div",{children:Object(y.jsx)("button",{style:{backgroundColor:a.hideNextButtons?"green":"initial"},onClick:function(e){N.hideNextButtons=!a.hideNextButtons},children:"hide next buttons"})}),Object(y.jsx)("div",{children:Object(y.jsx)("button",{style:{backgroundColor:a.showScaleNotes?"green":"initial"},onClick:function(e){N.showScaleNotes=!a.showScaleNotes},children:"show scale notes"})}),Object(y.jsx)("div",{children:Object(y.jsx)("button",{onClick:function(e){0===(null===a||void 0===a?void 0:a.ignore.length)?N.ignore=x:N.ignore=[]},children:"all"})}),Object(y.jsx)("div",{children:Object(y.jsx)("button",{onClick:function(e){0===(null===a||void 0===a?void 0:a.ignore.length)?N.ignore=x:N.ignore=[].concat(Object(l.a)(f),Object(l.a)(b))},children:"sharps"})}),Object(y.jsx)("div",{children:Object(y.jsx)("button",{onClick:function(e){0===(null===a||void 0===a?void 0:a.ignore.length)?N.ignore=x:(N.ignore=[],N.ignore=[].concat(Object(l.a)(p),Object(l.a)(b)))},children:"flats"})}),Object(y.jsx)("div",{children:Object(y.jsx)("button",{onClick:function(e){0===(null===a||void 0===a?void 0:a.ignore.length)?N.ignore=x:N.ignore=[].concat(Object(l.a)(p),Object(l.a)(f))},children:"base notes"})}),Object(y.jsx)("br",{}),Object(y.jsx)("div",{className:m.a.ignore,children:d}),Object(y.jsx)("br",{}),Object(y.jsxs)("div",{className:m.a.flexcolumn,children:[Object(y.jsxs)("div",{className:m.a.flexrow,children:["key change interval:",Object(y.jsxs)("select",{name:"keys",id:"keyID",onChange:function(e){console.log("ONCHANGE1",e.target.value),N.startIntervals(parseFloat(e.target.value),N.state.numberChangeInterval)},children:[A.filter((function(e){return e.props.value===a.keyChangeInterval+""})),A]})]}),Object(y.jsxs)("div",{className:m.a.flexrow,children:["step change interval:",Object(y.jsxs)("select",{name:"numbers",id:"numberID",onChange:function(e){console.log("ONCHANGE2",e.target.value),N.startIntervals(N.state.keyChangeInterval,parseFloat(e.target.value))},children:[A.filter((function(e){return e.props.value===a.numberChangeInterval+""})),A]})]}),Object(y.jsxs)("div",{className:m.a.flexrow,children:["order:",Object(y.jsxs)("select",{name:"order",id:"orderID",onChange:function(e){N.order=e.target.value},children:[Object(y.jsx)("option",{value:i.Quinten,children:"Quinten"}),Object(y.jsx)("option",{value:i.Quinten2,children:"Quinten 2"}),Object(y.jsx)("option",{value:i.Quarten,children:"Quarten"}),Object(y.jsx)("option",{value:i.Quarten2,children:"Quarten 2"}),Object(y.jsx)("option",{value:i.Random,children:"Random"})]})]}),Object(y.jsx)("div",{className:m.a.flexrow,children:Object(y.jsx)("a",{target:"_blank",href:"https://github.com/vincentwue/steps-learner",children:"More information on Github"})})]})]})};function G(){return Object(y.jsx)("div",{children:Object(y.jsx)(B,{})})}n(17);a.a.render(Object(y.jsx)(G,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.7f7fa35c.chunk.js.map