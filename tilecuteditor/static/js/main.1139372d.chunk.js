(this.webpackJsonpspecial_tile_configurator_demo=this.webpackJsonpspecial_tile_configurator_demo||[]).push([[0],{37:function(e,t,n){"use strict";n.r(t);var r,i=n(0),a=n.n(i),s=n(18),o=n.n(s),c=n(4),d=n(5),l=n(7),u=n(6),h=n(11),p=n.n(h),b=n(10),j=n(1),L=-1,v=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"draw",value:function(e){e.lineStyle(4,this.props.colour,1),e.moveTo(this.props.startX,this.props.startY),e.lineTo(this.props.endX,this.props.endY)}},{key:"render",value:function(){var e=this;return Object(j.jsx)(b.Graphics,{draw:function(t){return e.draw(t)}})}}]),n}(a.a.Component),C=n(22),O=n(8),S=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"draw",value:function(e){e.clear(),Object(C.a)(Object(O.a)(n.prototype),"draw",this).call(this,e)}}]),n}(v),y=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var r;return Object(c.a)(this,n),(r=t.call(this,e)).state={lineCoordinates:[],lineStarted:!1,startX:L,startY:L,previewLineCoordinates:{startX:L,startY:L,endX:L,endY:L,colour:r.props.currentLineColour}},r}return Object(d.a)(n,[{key:"drawLine",value:function(e){!1===this.state.lineStarted?this.setState({lineStarted:!0,startX:e.data.global.x,startY:e.data.global.y,previewLineCoordinates:p()(this.state.previewLineCoordinates,{startX:{$set:e.data.global.x},startY:{$set:e.data.global.y},endX:{$set:L},endY:{$set:L}})}):this.setState({lineStarted:!1,lineCoordinates:p()(this.state.lineCoordinates,{$push:[{startX:this.state.startX,startY:this.state.startY,endX:e.data.global.x,endY:e.data.global.y,colour:this.props.currentLineColour}]}),startX:L,startY:L,previewLineCoordinates:p()(this.state.previewLineCoordinates,{startX:{$set:L},startY:{$set:L},endX:{$set:L},endY:{$set:L}})})}},{key:"drawPreviewLine",value:function(e){!0===this.state.lineStarted&&this.setState({previewLineCoordinates:p()(this.state.previewLineCoordinates,{endX:{$set:e.data.global.x},endY:{$set:e.data.global.y}})})}},{key:"render",value:function(){var e=this;return Object(j.jsxs)(b.Stage,{width:640,height:640,children:[Object(j.jsx)(b.Sprite,{width:640,height:640,click:function(t){return e.drawLine(t)},mousemove:function(t){return e.drawPreviewLine(t)},interactive:!0,image:"https://a.1stdibscdn.com/archivesE/upload/10384/21_15/2336782/2336782_l.jpeg",x:0,y:0}),this.state.lineCoordinates.map((function(e,t){return Object(j.jsx)(v,{startX:e.startX,startY:e.startY,endX:e.endX,endY:e.endY,colour:e.colour},"line".concat(t))})),this.state.lineStarted&&this.state.previewLineCoordinates.endX!==L&&this.state.previewLineCoordinates.endY!==L?Object(j.jsx)(S,{startX:this.state.previewLineCoordinates.startX,startY:this.state.previewLineCoordinates.startY,endX:this.state.previewLineCoordinates.endX,endY:this.state.previewLineCoordinates.endY,colour:this.props.currentLineColour},"previewLine"):Object(j.jsx)(S,{startX:0,startY:0,endX:0,endY:0,colour:this.props.currentLineColour},"previewLine")]})}}]),n}(a.a.Component);!function(e){e[e.GLASSED=0]="GLASSED",e[e.DOUBLY_GLASSED=1]="DOUBLY_GLASSED",e[e.MITRE_CUT=2]="MITRE_CUT"}(r||(r={}));var f=function(e){var t=function(t){e.onLineTypeSelected(t)};return Object(j.jsxs)("div",{children:[Object(j.jsx)("input",{type:"radio",name:"rbLineType",id:"rbLineTypeGlassed",defaultChecked:!0,onChange:function(){return t(r.GLASSED)}}),Object(j.jsx)("label",{htmlFor:"rbLineTypeGlassed",children:"X (Kante \xfcberglasiert)"}),Object(j.jsx)("input",{type:"radio",name:"rbLineType",id:"rbLineTypeDoublyGlassed",onChange:function(){return t(r.DOUBLY_GLASSED)}}),Object(j.jsx)("label",{htmlFor:"rbLineTypeDoublyGlassed",children:"XX (Kante \xfcberglasiert + hinten \xfcberglasiert)"}),Object(j.jsx)("input",{type:"radio",name:"rbLineType",id:"rbLineTypeMitreCut",onChange:function(){return t(r.MITRE_CUT)}}),Object(j.jsx)("label",{htmlFor:"rbLineTypeMitreCut",children:"Z (Gehrungsschnitt)"})]})},w=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var r;return Object(c.a)(this,n),(r=t.call(this,e)).state={currentLineColour:2237149},r}return Object(d.a)(n,[{key:"onLineTypeSelected",value:function(e){switch(e){case r.GLASSED:this.setState({currentLineColour:2237149});break;case r.DOUBLY_GLASSED:this.setState({currentLineColour:14492194});break;case r.MITRE_CUT:this.setState({currentLineColour:2284834})}}},{key:"render",value:function(){var e=this;return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"PixiJS Demo"}),Object(j.jsx)(f,{onLineTypeSelected:function(t){return e.onLineTypeSelected(t)}}),Object(j.jsx)(y,{currentLineColour:this.state.currentLineColour})]})}}]),n}(a.a.Component),Y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,38)).then((function(t){var n=t.getCLS,r=t.getFID,i=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),i(e),a(e),s(e)}))};o.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(w,{})}),document.getElementById("root")),Y()}},[[37,1,2]]]);
//# sourceMappingURL=main.1139372d.chunk.js.map