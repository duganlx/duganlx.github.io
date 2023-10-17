"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[83],{26092:function(e,t,n){n.r(t),n.d(t,{default:function(){return x}});var i=n(5574),a=n.n(i),r=n(24556),o=n(84271),l=(n(49571),n(71338)),u=n(73360),c=n(27484),d=n.n(c),s=n(96486),m=n(67294);function p(e,t,n,i){var a=(i||{}).sign,r=void 0!==a&&a;if(isNaN(+e))return"-";var o=+e/t;return 0==+o.toFixed(n)&&(o=0),(r&&o>0?"+":"")+Number(o).toLocaleString("zh",{minimumFractionDigits:n,maximumFractionDigits:n})}var f=n(85893),x=function(){var e=(0,m.useState)(40),t=a()(e,2),n=t[0],i=t[1],c=(0,m.useState)(40),x=a()(c,2),h=x[0],g=x[1],v=(0,m.useState)([]),b=a()(v,2),w=b[0],j=b[1],N=(0,m.useRef)(null),C=(0,m.useRef)();(0,m.useEffect)((function(){var e=function(e){for(var t=[],n=0,i=d()().endOf("day").subtract(e,"day"),a=0;n<e;){var r=10*Math.random(),o=(r-a)/a,l={timestamp10:i.unix(),temperature:r,temp10Thousand:1e4*r,temp100Million:1e8*r,prevTemperature:a,tempPnl:o};i=i.add(1,"day"),n++,a=r,t.push(l)}return t}(500);j(e)}),[]),(0,m.useEffect)((function(){if(N.current){var e=(0,s.debounce)((function(e,t){C.current&&(C.current.changeSheetSize(e,t),C.current.render(!1))}),200),t=new ResizeObserver((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=a()(t,1),i=n[0],r=i.borderBoxSize||[],o=a()(r,1),l=o[0];e(l.inlineSize,l.blockSize)}));return t.observe(N.current),function(){t.disconnect()}}}),[]);var S={data:w,fields:{columns:["timestamp10","prevTemperature","temperature","temp10Thousand","temp100Million","tempPnl"]},meta:[{field:"timestamp10",name:"日期",formatter:function(e){return d()(1e3*+e).format("YYYY-MM-DD")}},{field:"temperature",name:"温度(℃)",formatter:function(e){return p(e,1,2)}},{field:"prevTemperature",name:"前一温度(℃)",formatter:function(e){return p(e,1,2)}},{field:"temp10Thousand",name:"温度(万倍)",formatter:function(e){return p(e,1,2)}},{field:"temp100Million",name:"温度(亿倍)",formatter:function(e){return p(e,1,2)}},{field:"tempPnl",name:"变化率",formatter:function(e){return"".concat(100*+e)}}]},k=(0,r.l)((function(){return{margin:"3px auto 0",width:"80vw",height:"500px",backgroundColor:"white",position:"relative",padding:"5px 4px",".title-row":{height:"24px",display:"flex",alignItems:"center",".bar":{background:"#3d6dd8",width:"4px",height:"100%"},".title":{fontWeight:"bold",fontSize:"16px",flex:"0 0 auto",margin:"0 10px 0 5px"}},".monitor":{width:"100%",backgroundColor:"#fff1f0",height:"calc(100% - ".concat(58,"px)"),margin:"3px 0",border:"1px dashed #ffccc7",".s2":{backgroundColor:"#f4ffb8"}},".ctl-panel":{height:"34px",width:"100%",position:"absolute",bottom:0,display:"flex",marginTop:"5px",".ctl-panel-item":{display:"flex",width:"300px",alignItems:"center",marginRight:"20px",".item-label":{fontSize:"18px"},".item-label:after":{content:'":"',marginRight:"8px"},".ant-slider":{flexGrow:1,marginRight:"15px"},".ant-input-number-wrapper":{".ant-input-number":{width:"55px",".ant-input-number-input-wrap > input":{padding:"4px 5px"}},".ant-input-number-group-addon":{padding:"0 5px"}}}}}}));return(0,f.jsxs)("div",{className:k,children:[(0,f.jsxs)("div",{className:"title-row",children:[(0,f.jsx)("div",{className:"bar"}),(0,f.jsx)("div",{className:"title",children:"demo 1"})]}),(0,f.jsx)("div",{className:"monitor",children:(0,f.jsx)("div",{className:"s2",style:{height:"calc(100% - ".concat(n,"px)"),width:"calc(100% - ".concat(h,"px)")},ref:N,children:(0,f.jsx)(o.dZ,{onMounted:function(e){C.current=e},sheetType:"table",adaptive:{width:!1,height:!1,getContainer:function(){return N.current}},dataCfg:S,options:{conditions:{text:[{field:/.*Pnl/,mapping:function(e){return+e>0?{fill:"red"}:+e<0?{fill:"green"}:{fill:"black"}}}]}}})})}),(0,f.jsxs)("div",{className:"ctl-panel",children:[(0,f.jsxs)("div",{className:"ctl-panel-item",children:[(0,f.jsx)("div",{className:"item-label",children:"高度偏移"}),(0,f.jsx)(l.Z,{min:0,max:200,onChange:function(e){i(e)},value:n}),(0,f.jsx)(u.Z,{min:0,max:200,value:n,addonAfter:"px",onChange:function(e){i(+e)}})]}),(0,f.jsxs)("div",{className:"ctl-panel-item",children:[(0,f.jsx)("div",{className:"item-label",children:"宽度偏移"}),(0,f.jsx)(l.Z,{min:0,max:200,onChange:function(e){g(e)},value:h}),(0,f.jsx)(u.Z,{min:0,max:200,value:h,addonAfter:"px",onChange:function(e){g(+e)}})]})]})]})}}}]);