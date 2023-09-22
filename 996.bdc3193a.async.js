"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[996],{48096:function(e,t,n){n.d(t,{Z:function(){return Me}});var o=n(67294),a=n(84481),r=n(35872),i=n(87462),c=n(42110),l=n(93771),s=function(e,t){return o.createElement(l.Z,(0,i.Z)({},e,{ref:t,icon:c.Z}))};var d=o.forwardRef(s),u=n(94184),p=n.n(u),f=n(4942),v=n(1413),b=n(97685),m=n(71002),h=n(91),g=n(31131),$=n(21770),y=n(82225),k=(0,o.createContext)(null),x=o.forwardRef((function(e,t){var n=e.prefixCls,a=e.className,r=e.style,i=e.id,c=e.active,l=e.tabKey,s=e.children;return o.createElement("div",{id:i&&"".concat(i,"-panel-").concat(l),role:"tabpanel",tabIndex:c?0:-1,"aria-labelledby":i&&"".concat(i,"-tab-").concat(l),"aria-hidden":!c,style:r,className:p()(n,c&&"".concat(n,"-active"),a),ref:t},s)}));var w=x,S=["key","forceRender","style","className"];function C(e){var t=e.id,n=e.activeKey,a=e.animated,r=e.tabPosition,c=e.destroyInactiveTabPane,l=o.useContext(k),s=l.prefixCls,d=l.tabs,u=a.tabPane,b="".concat(s,"-tabpane");return o.createElement("div",{className:p()("".concat(s,"-content-holder"))},o.createElement("div",{className:p()("".concat(s,"-content"),"".concat(s,"-content-").concat(r),(0,f.Z)({},"".concat(s,"-content-animated"),u))},d.map((function(e){var r=e.key,l=e.forceRender,s=e.style,d=e.className,f=(0,h.Z)(e,S),m=r===n;return o.createElement(y.ZP,(0,i.Z)({key:r,visible:m,forceRender:l,removeOnLeave:!!c,leavedClassName:"".concat(b,"-hidden")},a.tabPaneMotion),(function(e,n){var a=e.style,c=e.className;return o.createElement(w,(0,i.Z)({},f,{prefixCls:b,id:t,tabKey:r,animated:u,active:m,style:(0,v.Z)((0,v.Z)({},s),a),className:p()(d,c),ref:n}))}))}))))}var _=n(74902),E=n(9220),Z=n(66680),R=n(42550),P={width:0,height:0,left:0,top:0};function T(e,t){var n=o.useRef(e),a=o.useState({}),r=(0,b.Z)(a,2)[1];return[n.current,function(e){var o="function"==typeof e?e(n.current):e;o!==n.current&&t(o,n.current),n.current=o,r({})}]}var I=Math.pow(.995,20);var N=n(8410);function L(e){var t=(0,o.useState)(0),n=(0,b.Z)(t,2),a=n[0],r=n[1],i=(0,o.useRef)(0),c=(0,o.useRef)();return c.current=e,(0,N.o)((function(){var e;null===(e=c.current)||void 0===e||e.call(c)}),[a]),function(){i.current===a&&(i.current+=1,r(i.current))}}var z={width:0,height:0,left:0,top:0,right:0};function O(e){var t;return e instanceof Map?(t={},e.forEach((function(e,n){t[n]=e}))):t=e,JSON.stringify(t)}function M(e){return String(e).replace(/"/g,"TABS_DQ")}function B(e,t,n,o){return!(!n||o||!1===e||void 0===e&&(!1===t||null===t))}function D(e,t){var n=e.prefixCls,a=e.editable,r=e.locale,i=e.style;return a&&!1!==a.showAdd?o.createElement("button",{ref:t,type:"button",className:"".concat(n,"-nav-add"),style:i,"aria-label":(null==r?void 0:r.addAriaLabel)||"Add tab",onClick:function(e){a.onEdit("add",{event:e})}},a.addIcon||"+"):null}var A=o.forwardRef(D);var j=o.forwardRef((function(e,t){var n,a=e.position,r=e.prefixCls,i=e.extra;if(!i)return null;var c={};return"object"!==(0,m.Z)(i)||o.isValidElement(i)?c.right=i:c=i,"right"===a&&(n=c.right),"left"===a&&(n=c.left),n?o.createElement("div",{className:"".concat(r,"-extra-content"),ref:t},n):null})),G=n(40228),W=n(15105),H=n(75164),X=W.Z.ESC,F=W.Z.TAB;var K=(0,o.forwardRef)((function(e,t){var n=e.overlay,a=e.arrow,r=e.prefixCls,i=(0,o.useMemo)((function(){return"function"==typeof n?n():n}),[n]),c=(0,R.sQ)(t,null==i?void 0:i.ref);return o.createElement(o.Fragment,null,a&&o.createElement("div",{className:"".concat(r,"-arrow")}),o.cloneElement(i,{ref:(0,R.Yr)(i)?c:void 0}))})),V={adjustX:1,adjustY:1},Y=[0,0],Q={topLeft:{points:["bl","tl"],overflow:V,offset:[0,-4],targetOffset:Y},top:{points:["bc","tc"],overflow:V,offset:[0,-4],targetOffset:Y},topRight:{points:["br","tr"],overflow:V,offset:[0,-4],targetOffset:Y},bottomLeft:{points:["tl","bl"],overflow:V,offset:[0,4],targetOffset:Y},bottom:{points:["tc","bc"],overflow:V,offset:[0,4],targetOffset:Y},bottomRight:{points:["tr","br"],overflow:V,offset:[0,4],targetOffset:Y}},q=["arrow","prefixCls","transitionName","animation","align","placement","placements","getPopupContainer","showAction","hideAction","overlayClassName","overlayStyle","visible","trigger","autoFocus","overlay","children","onVisibleChange"];function J(e,t){var n,a=e.arrow,r=void 0!==a&&a,c=e.prefixCls,l=void 0===c?"rc-dropdown":c,s=e.transitionName,d=e.animation,u=e.align,v=e.placement,m=void 0===v?"bottomLeft":v,g=e.placements,$=void 0===g?Q:g,y=e.getPopupContainer,k=e.showAction,x=e.hideAction,w=e.overlayClassName,S=e.overlayStyle,C=e.visible,_=e.trigger,E=void 0===_?["hover"]:_,Z=e.autoFocus,P=e.overlay,T=e.children,I=e.onVisibleChange,N=(0,h.Z)(e,q),L=o.useState(),z=(0,b.Z)(L,2),O=z[0],M=z[1],B="visible"in e?C:O,D=o.useRef(null),A=o.useRef(null),j=o.useRef(null);o.useImperativeHandle(t,(function(){return D.current}));var W=function(e){M(e),null==I||I(e)};!function(e){var t=e.visible,n=e.triggerRef,a=e.onVisibleChange,r=e.autoFocus,i=e.overlayRef,c=o.useRef(!1),l=function(){var e,o;t&&(null===(e=n.current)||void 0===e||null===(o=e.focus)||void 0===o||o.call(e),null==a||a(!1))},s=function(){var e;return!(null===(e=i.current)||void 0===e||!e.focus||(i.current.focus(),c.current=!0,0))},d=function(e){switch(e.keyCode){case X:l();break;case F:var t=!1;c.current||(t=s()),t?e.preventDefault():l()}};o.useEffect((function(){return t?(window.addEventListener("keydown",d),r&&(0,H.Z)(s,3),function(){window.removeEventListener("keydown",d),c.current=!1}):function(){c.current=!1}}),[t])}({visible:B,triggerRef:j,onVisibleChange:W,autoFocus:Z,overlayRef:A});var V,Y,J,U=function(){return o.createElement(K,{ref:A,overlay:P,prefixCls:l,arrow:r})},ee=o.cloneElement(T,{className:p()(null===(n=T.props)||void 0===n?void 0:n.className,B&&(V=e.openClassName,void 0!==V?V:"".concat(l,"-open"))),ref:(0,R.Yr)(T)?(0,R.sQ)(j,T.ref):void 0}),te=x;return te||-1===E.indexOf("contextMenu")||(te=["click"]),o.createElement(G.Z,(0,i.Z)({builtinPlacements:$},N,{prefixCls:l,ref:D,popupClassName:p()(w,(0,f.Z)({},"".concat(l,"-show-arrow"),r)),popupStyle:S,action:E,showAction:k,hideAction:te,popupPlacement:m,popupAlign:u,popupTransitionName:s,popupAnimation:d,popupVisible:B,stretch:(Y=e.minOverlayWidthMatchTrigger,J=e.alignPoint,("minOverlayWidthMatchTrigger"in e?Y:!J)?"minWidth":""),popup:"function"==typeof P?U:U(),onPopupVisibleChange:W,onPopupClick:function(t){var n=e.onOverlayClick;M(!1),n&&n(t)},getPopupContainer:y}),ee)}var U=o.forwardRef(J),ee=n(72512);function te(e,t){var n=e.prefixCls,a=e.id,r=e.tabs,i=e.locale,c=e.mobile,l=e.moreIcon,s=void 0===l?"More":l,d=e.moreTransitionName,u=e.style,v=e.className,m=e.editable,h=e.tabBarGutter,g=e.rtl,$=e.removeAriaLabel,y=e.onTabClick,k=e.getPopupContainer,x=e.popupClassName,w=(0,o.useState)(!1),S=(0,b.Z)(w,2),C=S[0],_=S[1],E=(0,o.useState)(null),Z=(0,b.Z)(E,2),R=Z[0],P=Z[1],T="".concat(a,"-more-popup"),I="".concat(n,"-dropdown"),N=null!==R?"".concat(T,"-").concat(R):null,L=null==i?void 0:i.dropdownAriaLabel;var z=o.createElement(ee.ZP,{onClick:function(e){var t=e.key,n=e.domEvent;y(t,n),_(!1)},prefixCls:"".concat(I,"-menu"),id:T,tabIndex:-1,role:"listbox","aria-activedescendant":N,selectedKeys:[R],"aria-label":void 0!==L?L:"expanded dropdown"},r.map((function(e){var t=e.closable,n=e.disabled,r=e.closeIcon,i=e.key,c=e.label,l=B(t,r,m,n);return o.createElement(ee.sN,{key:i,id:"".concat(T,"-").concat(i),role:"option","aria-controls":a&&"".concat(a,"-panel-").concat(i),disabled:n},o.createElement("span",null,c),l&&o.createElement("button",{type:"button","aria-label":$||"remove",tabIndex:0,className:"".concat(I,"-menu-item-remove"),onClick:function(e){e.stopPropagation(),function(e,t){e.preventDefault(),e.stopPropagation(),m.onEdit("remove",{key:t,event:e})}(e,i)}},r||m.removeIcon||"×"))})));function O(e){for(var t=r.filter((function(e){return!e.disabled})),n=t.findIndex((function(e){return e.key===R}))||0,o=t.length,a=0;a<o;a+=1){var i=t[n=(n+e+o)%o];if(!i.disabled)return void P(i.key)}}(0,o.useEffect)((function(){var e=document.getElementById(N);e&&e.scrollIntoView&&e.scrollIntoView(!1)}),[R]),(0,o.useEffect)((function(){C||P(null)}),[C]);var M=(0,f.Z)({},g?"marginRight":"marginLeft",h);r.length||(M.visibility="hidden",M.order=1);var D=p()((0,f.Z)({},"".concat(I,"-rtl"),g)),j=c?null:o.createElement(U,{prefixCls:I,overlay:z,trigger:["hover"],visible:!!r.length&&C,transitionName:d,onVisibleChange:_,overlayClassName:p()(D,x),mouseEnterDelay:.1,mouseLeaveDelay:.1,getPopupContainer:k},o.createElement("button",{type:"button",className:"".concat(n,"-nav-more"),style:M,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":T,id:"".concat(a,"-more"),"aria-expanded":C,onKeyDown:function(e){var t=e.which;if(C)switch(t){case W.Z.UP:O(-1),e.preventDefault();break;case W.Z.DOWN:O(1),e.preventDefault();break;case W.Z.ESC:_(!1);break;case W.Z.SPACE:case W.Z.ENTER:null!==R&&y(R,e)}else[W.Z.DOWN,W.Z.SPACE,W.Z.ENTER].includes(t)&&(_(!0),e.preventDefault())}},s));return o.createElement("div",{className:p()("".concat(n,"-nav-operations"),v),style:u,ref:t},j,o.createElement(A,{prefixCls:n,locale:i,editable:m}))}var ne=o.memo(o.forwardRef(te),(function(e,t){return t.tabMoving}));var oe=function(e){var t,n=e.prefixCls,a=e.id,r=e.active,i=e.tab,c=i.key,l=i.label,s=i.disabled,d=i.closeIcon,u=e.closable,v=e.renderWrapper,b=e.removeAriaLabel,m=e.editable,h=e.onClick,g=e.onFocus,$=e.style,y="".concat(n,"-tab"),k=B(u,d,m,s);function x(e){s||h(e)}var w=o.createElement("div",{key:c,"data-node-key":M(c),className:p()(y,(t={},(0,f.Z)(t,"".concat(y,"-with-remove"),k),(0,f.Z)(t,"".concat(y,"-active"),r),(0,f.Z)(t,"".concat(y,"-disabled"),s),t)),style:$,onClick:x},o.createElement("div",{role:"tab","aria-selected":r,id:a&&"".concat(a,"-tab-").concat(c),className:"".concat(y,"-btn"),"aria-controls":a&&"".concat(a,"-panel-").concat(c),"aria-disabled":s,tabIndex:s?null:0,onClick:function(e){e.stopPropagation(),x(e)},onKeyDown:function(e){[W.Z.SPACE,W.Z.ENTER].includes(e.which)&&(e.preventDefault(),x(e))},onFocus:g},l),k&&o.createElement("button",{type:"button","aria-label":b||"remove",tabIndex:0,className:"".concat(y,"-remove"),onClick:function(e){var t;e.stopPropagation(),(t=e).preventDefault(),t.stopPropagation(),m.onEdit("remove",{key:c,event:t})}},d||m.removeIcon||"×"));return v?v(w):w},ae=function(e){var t=e.activeTabOffset,n=e.horizontal,a=e.rtl,r=e.indicatorSize,i=(0,o.useState)(),c=(0,b.Z)(i,2),l=c[0],s=c[1],d=(0,o.useRef)(),u=function(e){return"function"==typeof r?r(e):"number"==typeof r?r:e};function p(){H.Z.cancel(d.current)}return(0,o.useEffect)((function(){var e={};return t&&(n?(a?(e.right=t.right+t.width/2,e.transform="translateX(50%)"):(e.left=t.left+t.width/2,e.transform="translateX(-50%)"),e.width=u(t.width)):(e.top=t.top+t.height/2,e.transform="translateY(-50%)",e.height=u(t.height))),p(),d.current=(0,H.Z)((function(){s(e)})),p}),[t,n,a,r]),{style:l}},re=function(e){var t=e.current||{},n=t.offsetWidth,o=void 0===n?0:n,a=t.offsetHeight;return[o,void 0===a?0:a]},ie=function(e,t){return e[t?0:1]};function ce(e,t){var n,a=o.useContext(k),r=a.prefixCls,c=a.tabs,l=e.className,s=e.style,d=e.id,u=e.animated,m=e.activeKey,h=e.rtl,g=e.extra,$=e.editable,y=e.locale,x=e.tabPosition,w=e.tabBarGutter,S=e.children,C=e.onTabClick,N=e.onTabScroll,B=e.indicatorSize,D=(0,o.useRef)(),G=(0,o.useRef)(),W=(0,o.useRef)(),H=(0,o.useRef)(),X=(0,o.useRef)(),F=(0,o.useRef)(),K=(0,o.useRef)(),V="top"===x||"bottom"===x,Y=T(0,(function(e,t){V&&N&&N({direction:e>t?"left":"right"})})),Q=(0,b.Z)(Y,2),q=Q[0],J=Q[1],U=T(0,(function(e,t){!V&&N&&N({direction:e>t?"top":"bottom"})})),ee=(0,b.Z)(U,2),te=ee[0],ce=ee[1],le=(0,o.useState)([0,0]),se=(0,b.Z)(le,2),de=se[0],ue=se[1],pe=(0,o.useState)([0,0]),fe=(0,b.Z)(pe,2),ve=fe[0],be=fe[1],me=(0,o.useState)([0,0]),he=(0,b.Z)(me,2),ge=he[0],$e=he[1],ye=(0,o.useState)([0,0]),ke=(0,b.Z)(ye,2),xe=ke[0],we=ke[1],Se=function(e){var t=(0,o.useRef)([]),n=(0,o.useState)({}),a=(0,b.Z)(n,2)[1],r=(0,o.useRef)("function"==typeof e?e():e),i=L((function(){var e=r.current;t.current.forEach((function(t){e=t(e)})),t.current=[],r.current=e,a({})}));return[r.current,function(e){t.current.push(e),i()}]}(new Map),Ce=(0,b.Z)(Se,2),_e=Ce[0],Ee=Ce[1],Ze=function(e,t,n){return(0,o.useMemo)((function(){for(var n,o=new Map,a=t.get(null===(n=e[0])||void 0===n?void 0:n.key)||P,r=a.left+a.width,i=0;i<e.length;i+=1){var c,l=e[i].key,s=t.get(l);s||(s=t.get(null===(c=e[i-1])||void 0===c?void 0:c.key)||P);var d=o.get(l)||(0,v.Z)({},s);d.right=r-d.left-d.width,o.set(l,d)}return o}),[e.map((function(e){return e.key})).join("_"),t,n])}(c,_e,ve[0]),Re=ie(de,V),Pe=ie(ve,V),Te=ie(ge,V),Ie=ie(xe,V),Ne=Re<Pe+Te,Le=Ne?Re-Ie:Re-Te,ze="".concat(r,"-nav-operations-hidden"),Oe=0,Me=0;function Be(e){return e<Oe?Oe:e>Me?Me:e}V&&h?(Oe=0,Me=Math.max(0,Pe-Le)):(Oe=Math.min(0,Le-Pe),Me=0);var De=(0,o.useRef)(),Ae=(0,o.useState)(),je=(0,b.Z)(Ae,2),Ge=je[0],We=je[1];function He(){We(Date.now())}function Xe(){window.clearTimeout(De.current)}!function(e,t){var n=(0,o.useState)(),a=(0,b.Z)(n,2),r=a[0],i=a[1],c=(0,o.useState)(0),l=(0,b.Z)(c,2),s=l[0],d=l[1],u=(0,o.useState)(0),p=(0,b.Z)(u,2),f=p[0],v=p[1],m=(0,o.useState)(),h=(0,b.Z)(m,2),g=h[0],$=h[1],y=(0,o.useRef)(),k=(0,o.useRef)(),x=(0,o.useRef)(null);x.current={onTouchStart:function(e){var t=e.touches[0],n=t.screenX,o=t.screenY;i({x:n,y:o}),window.clearInterval(y.current)},onTouchMove:function(e){if(r){e.preventDefault();var n=e.touches[0],o=n.screenX,a=n.screenY;i({x:o,y:a});var c=o-r.x,l=a-r.y;t(c,l);var u=Date.now();d(u),v(u-s),$({x:c,y:l})}},onTouchEnd:function(){if(r&&(i(null),$(null),g)){var e=g.x/f,n=g.y/f,o=Math.abs(e),a=Math.abs(n);if(Math.max(o,a)<.1)return;var c=e,l=n;y.current=window.setInterval((function(){Math.abs(c)<.01&&Math.abs(l)<.01?window.clearInterval(y.current):t(20*(c*=I),20*(l*=I))}),20)}},onWheel:function(e){var n=e.deltaX,o=e.deltaY,a=0,r=Math.abs(n),i=Math.abs(o);r===i?a="x"===k.current?n:o:r>i?(a=n,k.current="x"):(a=o,k.current="y"),t(-a,-a)&&e.preventDefault()}},o.useEffect((function(){function t(e){x.current.onTouchMove(e)}function n(e){x.current.onTouchEnd(e)}return document.addEventListener("touchmove",t,{passive:!1}),document.addEventListener("touchend",n,{passive:!1}),e.current.addEventListener("touchstart",(function(e){x.current.onTouchStart(e)}),{passive:!1}),e.current.addEventListener("wheel",(function(e){x.current.onWheel(e)})),function(){document.removeEventListener("touchmove",t),document.removeEventListener("touchend",n)}}),[])}(H,(function(e,t){function n(e,t){e((function(e){return Be(e+t)}))}return!!Ne&&(V?n(J,e):n(ce,t),Xe(),He(),!0)})),(0,o.useEffect)((function(){return Xe(),Ge&&(De.current=window.setTimeout((function(){We(0)}),100)),Xe}),[Ge]);var Fe=function(e,t,n,a,r,i,c){var l,s,d,u=c.tabs,p=c.tabPosition,f=c.rtl;return["top","bottom"].includes(p)?(l="width",s=f?"right":"left",d=Math.abs(n)):(l="height",s="top",d=-n),(0,o.useMemo)((function(){if(!u.length)return[0,0];for(var n=u.length,o=n,a=0;a<n;a+=1){var r=e.get(u[a].key)||z;if(r[s]+r[l]>d+t){o=a-1;break}}for(var i=0,c=n-1;c>=0;c-=1)if((e.get(u[c].key)||z)[s]<d){i=c+1;break}return i>=o?[0,0]:[i,o]}),[e,t,a,r,i,d,p,u.map((function(e){return e.key})).join("_"),f])}(Ze,Le,V?q:te,Pe,Te,Ie,(0,v.Z)((0,v.Z)({},e),{},{tabs:c})),Ke=(0,b.Z)(Fe,2),Ve=Ke[0],Ye=Ke[1],Qe=(0,Z.Z)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=Ze.get(e)||{width:0,height:0,left:0,right:0,top:0};if(V){var n=q;h?t.right<q?n=t.right:t.right+t.width>q+Le&&(n=t.right+t.width-Le):t.left<-q?n=-t.left:t.left+t.width>-q+Le&&(n=-(t.left+t.width-Le)),ce(0),J(Be(n))}else{var o=te;t.top<-te?o=-t.top:t.top+t.height>-te+Le&&(o=-(t.top+t.height-Le)),J(0),ce(Be(o))}})),qe={};"top"===x||"bottom"===x?qe[h?"marginRight":"marginLeft"]=w:qe.marginTop=w;var Je=c.map((function(e,t){var n=e.key;return o.createElement(oe,{id:d,prefixCls:r,key:n,tab:e,style:0===t?void 0:qe,closable:e.closable,editable:$,active:n===m,renderWrapper:S,removeAriaLabel:null==y?void 0:y.removeAriaLabel,onClick:function(e){C(n,e)},onFocus:function(){Qe(n),He(),H.current&&(h||(H.current.scrollLeft=0),H.current.scrollTop=0)}})})),Ue=function(){return Ee((function(){var e=new Map;return c.forEach((function(t){var n,o=t.key,a=null===(n=X.current)||void 0===n?void 0:n.querySelector('[data-node-key="'.concat(M(o),'"]'));a&&e.set(o,{width:a.offsetWidth,height:a.offsetHeight,left:a.offsetLeft,top:a.offsetTop})})),e}))};(0,o.useEffect)((function(){Ue()}),[c.map((function(e){return e.key})).join("_")]);var et=L((function(){var e=re(D),t=re(G),n=re(W);ue([e[0]-t[0]-n[0],e[1]-t[1]-n[1]]);var o=re(K);$e(o);var a=re(F);we(a);var r=re(X);be([r[0]-o[0],r[1]-o[1]]),Ue()})),tt=c.slice(0,Ve),nt=c.slice(Ye+1),ot=[].concat((0,_.Z)(tt),(0,_.Z)(nt)),at=Ze.get(m),rt=ae({activeTabOffset:at,horizontal:V,rtl:h,indicatorSize:B}).style;(0,o.useEffect)((function(){Qe()}),[m,Oe,Me,O(at),O(Ze),V]),(0,o.useEffect)((function(){et()}),[h]);var it,ct,lt,st,dt=!!ot.length,ut="".concat(r,"-nav-wrap");return V?h?(ct=q>0,it=q!==Me):(it=q<0,ct=q!==Oe):(lt=te<0,st=te!==Oe),o.createElement(E.Z,{onResize:et},o.createElement("div",{ref:(0,R.x1)(t,D),role:"tablist",className:p()("".concat(r,"-nav"),l),style:s,onKeyDown:function(){He()}},o.createElement(j,{ref:G,position:"left",extra:g,prefixCls:r}),o.createElement(E.Z,{onResize:et},o.createElement("div",{className:p()(ut,(n={},(0,f.Z)(n,"".concat(ut,"-ping-left"),it),(0,f.Z)(n,"".concat(ut,"-ping-right"),ct),(0,f.Z)(n,"".concat(ut,"-ping-top"),lt),(0,f.Z)(n,"".concat(ut,"-ping-bottom"),st),n)),ref:H},o.createElement(E.Z,{onResize:et},o.createElement("div",{ref:X,className:"".concat(r,"-nav-list"),style:{transform:"translate(".concat(q,"px, ").concat(te,"px)"),transition:Ge?"none":void 0}},Je,o.createElement(A,{ref:K,prefixCls:r,locale:y,editable:$,style:(0,v.Z)((0,v.Z)({},0===Je.length?void 0:qe),{},{visibility:dt?"hidden":null})}),o.createElement("div",{className:p()("".concat(r,"-ink-bar"),(0,f.Z)({},"".concat(r,"-ink-bar-animated"),u.inkBar)),style:rt}))))),o.createElement(ne,(0,i.Z)({},e,{removeAriaLabel:null==y?void 0:y.removeAriaLabel,ref:F,prefixCls:r,tabs:ot,className:!dt&&ze,tabMoving:!!Ge})),o.createElement(j,{ref:W,position:"right",extra:g,prefixCls:r})))}var le=o.forwardRef(ce),se=["renderTabBar"],de=["label","key"];function ue(e){var t=e.renderTabBar,n=(0,h.Z)(e,se),a=o.useContext(k).tabs;return t?t((0,v.Z)((0,v.Z)({},n),{},{panes:a.map((function(e){var t=e.label,n=e.key,a=(0,h.Z)(e,de);return o.createElement(w,(0,i.Z)({tab:t,key:n,tabKey:n},a))}))}),le):o.createElement(le,n)}n(80334);var pe=["id","prefixCls","className","items","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll","getPopupContainer","popupClassName","indicatorSize"],fe=0;function ve(e,t){var n,a=e.id,r=e.prefixCls,c=void 0===r?"rc-tabs":r,l=e.className,s=e.items,d=e.direction,u=e.activeKey,y=e.defaultActiveKey,x=e.editable,w=e.animated,S=e.tabPosition,_=void 0===S?"top":S,E=e.tabBarGutter,Z=e.tabBarStyle,R=e.tabBarExtraContent,P=e.locale,T=e.moreIcon,I=e.moreTransitionName,N=e.destroyInactiveTabPane,L=e.renderTabBar,z=e.onChange,O=e.onTabClick,M=e.onTabScroll,B=e.getPopupContainer,D=e.popupClassName,A=e.indicatorSize,j=(0,h.Z)(e,pe),G=o.useMemo((function(){return(s||[]).filter((function(e){return e&&"object"===(0,m.Z)(e)&&"key"in e}))}),[s]),W="rtl"===d,H=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{inkBar:!0,tabPane:!1};return(e=!1===t?{inkBar:!1,tabPane:!1}:!0===t?{inkBar:!0,tabPane:!1}:(0,v.Z)({inkBar:!0},"object"===(0,m.Z)(t)?t:{})).tabPaneMotion&&void 0===e.tabPane&&(e.tabPane=!0),!e.tabPaneMotion&&e.tabPane&&(e.tabPane=!1),e}(w),X=(0,o.useState)(!1),F=(0,b.Z)(X,2),K=F[0],V=F[1];(0,o.useEffect)((function(){V((0,g.Z)())}),[]);var Y=(0,$.Z)((function(){var e;return null===(e=G[0])||void 0===e?void 0:e.key}),{value:u,defaultValue:y}),Q=(0,b.Z)(Y,2),q=Q[0],J=Q[1],U=(0,o.useState)((function(){return G.findIndex((function(e){return e.key===q}))})),ee=(0,b.Z)(U,2),te=ee[0],ne=ee[1];(0,o.useEffect)((function(){var e,t=G.findIndex((function(e){return e.key===q}));-1===t&&(t=Math.max(0,Math.min(te,G.length-1)),J(null===(e=G[t])||void 0===e?void 0:e.key));ne(t)}),[G.map((function(e){return e.key})).join("_"),q,te]);var oe=(0,$.Z)(null,{value:a}),ae=(0,b.Z)(oe,2),re=ae[0],ie=ae[1];(0,o.useEffect)((function(){a||(ie("rc-tabs-".concat(fe)),fe+=1)}),[]);var ce={id:re,activeKey:q,animated:H,tabPosition:_,rtl:W,mobile:K},le=(0,v.Z)((0,v.Z)({},ce),{},{editable:x,locale:P,moreIcon:T,moreTransitionName:I,tabBarGutter:E,onTabClick:function(e,t){null==O||O(e,t);var n=e!==q;J(e),n&&(null==z||z(e))},onTabScroll:M,extra:R,style:Z,panes:null,getPopupContainer:B,popupClassName:D,indicatorSize:A});return o.createElement(k.Provider,{value:{tabs:G,prefixCls:c}},o.createElement("div",(0,i.Z)({ref:t,id:a,className:p()(c,"".concat(c,"-").concat(_),(n={},(0,f.Z)(n,"".concat(c,"-mobile"),K),(0,f.Z)(n,"".concat(c,"-editable"),x),(0,f.Z)(n,"".concat(c,"-rtl"),W),n),l)},j),o.createElement(ue,(0,i.Z)({},le,{renderTabBar:L})),o.createElement(C,(0,i.Z)({destroyInactiveTabPane:N},ce,{animated:H}))))}var be=o.forwardRef(ve),me=n(53124),he=n(98675),ge=n(33603);const $e={motionAppear:!1,motionEnter:!0,motionLeave:!0};var ye=n(50344),ke=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(e);a<o.length;a++)t.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(n[o[a]]=e[o[a]])}return n};var xe=n(14747),we=n(67968),Se=n(45503),Ce=n(67771);var _e=e=>{const{componentCls:t,motionDurationSlow:n}=e;return[{[t]:{[`${t}-switch`]:{"&-appear, &-enter":{transition:"none","&-start":{opacity:0},"&-active":{opacity:1,transition:`opacity ${n}`}},"&-leave":{position:"absolute",transition:"none",inset:0,"&-start":{opacity:1},"&-active":{opacity:0,transition:`opacity ${n}`}}}}},[(0,Ce.oN)(e,"slide-up"),(0,Ce.oN)(e,"slide-down")]]};const Ee=e=>{const{componentCls:t,tabsCardPadding:n,cardBg:o,cardGutter:a,colorBorderSecondary:r,itemSelectedColor:i}=e;return{[`${t}-card`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{margin:0,padding:n,background:o,border:`${e.lineWidth}px ${e.lineType} ${r}`,transition:`all ${e.motionDurationSlow} ${e.motionEaseInOut}`},[`${t}-tab-active`]:{color:i,background:e.colorBgContainer},[`${t}-ink-bar`]:{visibility:"hidden"}},[`&${t}-top, &${t}-bottom`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab + ${t}-tab`]:{marginLeft:{_skip_check_:!0,value:`${a}px`}}}},[`&${t}-top`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{borderRadius:`${e.borderRadiusLG}px ${e.borderRadiusLG}px 0 0`},[`${t}-tab-active`]:{borderBottomColor:e.colorBgContainer}}},[`&${t}-bottom`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{borderRadius:`0 0 ${e.borderRadiusLG}px ${e.borderRadiusLG}px`},[`${t}-tab-active`]:{borderTopColor:e.colorBgContainer}}},[`&${t}-left, &${t}-right`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab + ${t}-tab`]:{marginTop:`${a}px`}}},[`&${t}-left`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{borderRadius:{_skip_check_:!0,value:`${e.borderRadiusLG}px 0 0 ${e.borderRadiusLG}px`}},[`${t}-tab-active`]:{borderRightColor:{_skip_check_:!0,value:e.colorBgContainer}}}},[`&${t}-right`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{borderRadius:{_skip_check_:!0,value:`0 ${e.borderRadiusLG}px ${e.borderRadiusLG}px 0`}},[`${t}-tab-active`]:{borderLeftColor:{_skip_check_:!0,value:e.colorBgContainer}}}}}}},Ze=e=>{const{componentCls:t,itemHoverColor:n,dropdownEdgeChildVerticalPadding:o}=e;return{[`${t}-dropdown`]:Object.assign(Object.assign({},(0,xe.Wf)(e)),{position:"absolute",top:-9999,left:{_skip_check_:!0,value:-9999},zIndex:e.zIndexPopup,display:"block","&-hidden":{display:"none"},[`${t}-dropdown-menu`]:{maxHeight:e.tabsDropdownHeight,margin:0,padding:`${o}px 0`,overflowX:"hidden",overflowY:"auto",textAlign:{_skip_check_:!0,value:"left"},listStyleType:"none",backgroundColor:e.colorBgContainer,backgroundClip:"padding-box",borderRadius:e.borderRadiusLG,outline:"none",boxShadow:e.boxShadowSecondary,"&-item":Object.assign(Object.assign({},xe.vS),{display:"flex",alignItems:"center",minWidth:e.tabsDropdownWidth,margin:0,padding:`${e.paddingXXS}px ${e.paddingSM}px`,color:e.colorText,fontWeight:"normal",fontSize:e.fontSize,lineHeight:e.lineHeight,cursor:"pointer",transition:`all ${e.motionDurationSlow}`,"> span":{flex:1,whiteSpace:"nowrap"},"&-remove":{flex:"none",marginLeft:{_skip_check_:!0,value:e.marginSM},color:e.colorTextDescription,fontSize:e.fontSizeSM,background:"transparent",border:0,cursor:"pointer","&:hover":{color:n}},"&:hover":{background:e.controlItemBgHover},"&-disabled":{"&, &:hover":{color:e.colorTextDisabled,background:"transparent",cursor:"not-allowed"}}})}})}},Re=e=>{const{componentCls:t,margin:n,colorBorderSecondary:o,horizontalMargin:a,verticalItemPadding:r,verticalItemMargin:i}=e;return{[`${t}-top, ${t}-bottom`]:{flexDirection:"column",[`> ${t}-nav, > div > ${t}-nav`]:{margin:a,"&::before":{position:"absolute",right:{_skip_check_:!0,value:0},left:{_skip_check_:!0,value:0},borderBottom:`${e.lineWidth}px ${e.lineType} ${o}`,content:"''"},[`${t}-ink-bar`]:{height:e.lineWidthBold,"&-animated":{transition:`width ${e.motionDurationSlow}, left ${e.motionDurationSlow},\n            right ${e.motionDurationSlow}`}},[`${t}-nav-wrap`]:{"&::before, &::after":{top:0,bottom:0,width:e.controlHeight},"&::before":{left:{_skip_check_:!0,value:0},boxShadow:e.boxShadowTabsOverflowLeft},"&::after":{right:{_skip_check_:!0,value:0},boxShadow:e.boxShadowTabsOverflowRight},[`&${t}-nav-wrap-ping-left::before`]:{opacity:1},[`&${t}-nav-wrap-ping-right::after`]:{opacity:1}}}},[`${t}-top`]:{[`> ${t}-nav,\n        > div > ${t}-nav`]:{"&::before":{bottom:0},[`${t}-ink-bar`]:{bottom:0}}},[`${t}-bottom`]:{[`> ${t}-nav, > div > ${t}-nav`]:{order:1,marginTop:`${n}px`,marginBottom:0,"&::before":{top:0},[`${t}-ink-bar`]:{top:0}},[`> ${t}-content-holder, > div > ${t}-content-holder`]:{order:0}},[`${t}-left, ${t}-right`]:{[`> ${t}-nav, > div > ${t}-nav`]:{flexDirection:"column",minWidth:1.25*e.controlHeight,[`${t}-tab`]:{padding:r,textAlign:"center"},[`${t}-tab + ${t}-tab`]:{margin:i},[`${t}-nav-wrap`]:{flexDirection:"column","&::before, &::after":{right:{_skip_check_:!0,value:0},left:{_skip_check_:!0,value:0},height:e.controlHeight},"&::before":{top:0,boxShadow:e.boxShadowTabsOverflowTop},"&::after":{bottom:0,boxShadow:e.boxShadowTabsOverflowBottom},[`&${t}-nav-wrap-ping-top::before`]:{opacity:1},[`&${t}-nav-wrap-ping-bottom::after`]:{opacity:1}},[`${t}-ink-bar`]:{width:e.lineWidthBold,"&-animated":{transition:`height ${e.motionDurationSlow}, top ${e.motionDurationSlow}`}},[`${t}-nav-list, ${t}-nav-operations`]:{flex:"1 0 auto",flexDirection:"column"}}},[`${t}-left`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-ink-bar`]:{right:{_skip_check_:!0,value:0}}},[`> ${t}-content-holder, > div > ${t}-content-holder`]:{marginLeft:{_skip_check_:!0,value:`-${e.lineWidth}px`},borderLeft:{_skip_check_:!0,value:`${e.lineWidth}px ${e.lineType} ${e.colorBorder}`},[`> ${t}-content > ${t}-tabpane`]:{paddingLeft:{_skip_check_:!0,value:e.paddingLG}}}},[`${t}-right`]:{[`> ${t}-nav, > div > ${t}-nav`]:{order:1,[`${t}-ink-bar`]:{left:{_skip_check_:!0,value:0}}},[`> ${t}-content-holder, > div > ${t}-content-holder`]:{order:0,marginRight:{_skip_check_:!0,value:-e.lineWidth},borderRight:{_skip_check_:!0,value:`${e.lineWidth}px ${e.lineType} ${e.colorBorder}`},[`> ${t}-content > ${t}-tabpane`]:{paddingRight:{_skip_check_:!0,value:e.paddingLG}}}}}},Pe=e=>{const{componentCls:t,cardPaddingSM:n,cardPaddingLG:o,horizontalItemPaddingSM:a,horizontalItemPaddingLG:r}=e;return{[t]:{"&-small":{[`> ${t}-nav`]:{[`${t}-tab`]:{padding:a,fontSize:e.titleFontSizeSM}}},"&-large":{[`> ${t}-nav`]:{[`${t}-tab`]:{padding:r,fontSize:e.titleFontSizeLG}}}},[`${t}-card`]:{[`&${t}-small`]:{[`> ${t}-nav`]:{[`${t}-tab`]:{padding:n}},[`&${t}-bottom`]:{[`> ${t}-nav ${t}-tab`]:{borderRadius:`0 0 ${e.borderRadius}px ${e.borderRadius}px`}},[`&${t}-top`]:{[`> ${t}-nav ${t}-tab`]:{borderRadius:`${e.borderRadius}px ${e.borderRadius}px 0 0`}},[`&${t}-right`]:{[`> ${t}-nav ${t}-tab`]:{borderRadius:{_skip_check_:!0,value:`0 ${e.borderRadius}px ${e.borderRadius}px 0`}}},[`&${t}-left`]:{[`> ${t}-nav ${t}-tab`]:{borderRadius:{_skip_check_:!0,value:`${e.borderRadius}px 0 0 ${e.borderRadius}px`}}}},[`&${t}-large`]:{[`> ${t}-nav`]:{[`${t}-tab`]:{padding:o}}}}}},Te=e=>{const{componentCls:t,itemActiveColor:n,itemHoverColor:o,iconCls:a,tabsHorizontalItemMargin:r,horizontalItemPadding:i,itemSelectedColor:c,itemColor:l}=e,s=`${t}-tab`;return{[s]:{position:"relative",WebkitTouchCallout:"none",WebkitTapHighlightColor:"transparent",display:"inline-flex",alignItems:"center",padding:i,fontSize:e.titleFontSize,background:"transparent",border:0,outline:"none",cursor:"pointer",color:l,"&-btn, &-remove":Object.assign({"&:focus:not(:focus-visible), &:active":{color:n}},(0,xe.Qy)(e)),"&-btn":{outline:"none",transition:"all 0.3s"},"&-remove":{flex:"none",marginRight:{_skip_check_:!0,value:-e.marginXXS},marginLeft:{_skip_check_:!0,value:e.marginXS},color:e.colorTextDescription,fontSize:e.fontSizeSM,background:"transparent",border:"none",outline:"none",cursor:"pointer",transition:`all ${e.motionDurationSlow}`,"&:hover":{color:e.colorTextHeading}},"&:hover":{color:o},[`&${s}-active ${s}-btn`]:{color:c,textShadow:e.tabsActiveTextShadow},[`&${s}-disabled`]:{color:e.colorTextDisabled,cursor:"not-allowed"},[`&${s}-disabled ${s}-btn, &${s}-disabled ${t}-remove`]:{"&:focus, &:active":{color:e.colorTextDisabled}},[`& ${s}-remove ${a}`]:{margin:0},[a]:{marginRight:{_skip_check_:!0,value:e.marginSM}}},[`${s} + ${s}`]:{margin:{_skip_check_:!0,value:r}}}},Ie=e=>{const{componentCls:t,tabsHorizontalItemMarginRTL:n,iconCls:o,cardGutter:a}=e;return{[`${t}-rtl`]:{direction:"rtl",[`${t}-nav`]:{[`${t}-tab`]:{margin:{_skip_check_:!0,value:n},[`${t}-tab:last-of-type`]:{marginLeft:{_skip_check_:!0,value:0}},[o]:{marginRight:{_skip_check_:!0,value:0},marginLeft:{_skip_check_:!0,value:`${e.marginSM}px`}},[`${t}-tab-remove`]:{marginRight:{_skip_check_:!0,value:`${e.marginXS}px`},marginLeft:{_skip_check_:!0,value:`-${e.marginXXS}px`},[o]:{margin:0}}}},[`&${t}-left`]:{[`> ${t}-nav`]:{order:1},[`> ${t}-content-holder`]:{order:0}},[`&${t}-right`]:{[`> ${t}-nav`]:{order:0},[`> ${t}-content-holder`]:{order:1}},[`&${t}-card${t}-top, &${t}-card${t}-bottom`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab + ${t}-tab`]:{marginRight:{_skip_check_:!0,value:a},marginLeft:{_skip_check_:!0,value:0}}}}},[`${t}-dropdown-rtl`]:{direction:"rtl"},[`${t}-menu-item`]:{[`${t}-dropdown-rtl`]:{textAlign:{_skip_check_:!0,value:"right"}}}}},Ne=e=>{const{componentCls:t,tabsCardPadding:n,cardHeight:o,cardGutter:a,itemHoverColor:r,itemActiveColor:i,colorBorderSecondary:c}=e;return{[t]:Object.assign(Object.assign(Object.assign(Object.assign({},(0,xe.Wf)(e)),{display:"flex",[`> ${t}-nav, > div > ${t}-nav`]:{position:"relative",display:"flex",flex:"none",alignItems:"center",[`${t}-nav-wrap`]:{position:"relative",display:"flex",flex:"auto",alignSelf:"stretch",overflow:"hidden",whiteSpace:"nowrap",transform:"translate(0)","&::before, &::after":{position:"absolute",zIndex:1,opacity:0,transition:`opacity ${e.motionDurationSlow}`,content:"''",pointerEvents:"none"}},[`${t}-nav-list`]:{position:"relative",display:"flex",transition:`opacity ${e.motionDurationSlow}`},[`${t}-nav-operations`]:{display:"flex",alignSelf:"stretch"},[`${t}-nav-operations-hidden`]:{position:"absolute",visibility:"hidden",pointerEvents:"none"},[`${t}-nav-more`]:{position:"relative",padding:n,background:"transparent",border:0,color:e.colorText,"&::after":{position:"absolute",right:{_skip_check_:!0,value:0},bottom:0,left:{_skip_check_:!0,value:0},height:e.controlHeightLG/8,transform:"translateY(100%)",content:"''"}},[`${t}-nav-add`]:Object.assign({minWidth:o,marginLeft:{_skip_check_:!0,value:a},padding:`0 ${e.paddingXS}px`,background:"transparent",border:`${e.lineWidth}px ${e.lineType} ${c}`,borderRadius:`${e.borderRadiusLG}px ${e.borderRadiusLG}px 0 0`,outline:"none",cursor:"pointer",color:e.colorText,transition:`all ${e.motionDurationSlow} ${e.motionEaseInOut}`,"&:hover":{color:r},"&:active, &:focus:not(:focus-visible)":{color:i}},(0,xe.Qy)(e))},[`${t}-extra-content`]:{flex:"none"},[`${t}-ink-bar`]:{position:"absolute",background:e.inkBarColor,pointerEvents:"none"}}),Te(e)),{[`${t}-content`]:{position:"relative",width:"100%"},[`${t}-content-holder`]:{flex:"auto",minWidth:0,minHeight:0},[`${t}-tabpane`]:{outline:"none","&-hidden":{display:"none"}}}),[`${t}-centered`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-nav-wrap`]:{[`&:not([class*='${t}-nav-wrap-ping'])`]:{justifyContent:"center"}}}}}};var Le=(0,we.Z)("Tabs",(e=>{const t=(0,Se.TS)(e,{tabsCardPadding:e.cardPadding||`${(e.cardHeight-Math.round(e.fontSize*e.lineHeight))/2-e.lineWidth}px ${e.padding}px`,dropdownEdgeChildVerticalPadding:e.paddingXXS,tabsActiveTextShadow:"0 0 0.25px currentcolor",tabsDropdownHeight:200,tabsDropdownWidth:120,tabsHorizontalItemMargin:`0 0 0 ${e.horizontalItemGutter}px`,tabsHorizontalItemMarginRTL:`0 0 0 ${e.horizontalItemGutter}px`});return[Pe(t),Ie(t),Re(t),Ze(t),Ee(t),Ne(t),_e(t)]}),(e=>{const t=e.controlHeightLG;return{zIndexPopup:e.zIndexPopupBase+50,cardBg:e.colorFillAlter,cardHeight:t,cardPadding:"",cardPaddingSM:`${1.5*e.paddingXXS}px ${e.padding}px`,cardPaddingLG:`${e.paddingXS}px ${e.padding}px ${1.5*e.paddingXXS}px`,titleFontSize:e.fontSize,titleFontSizeLG:e.fontSizeLG,titleFontSizeSM:e.fontSize,inkBarColor:e.colorPrimary,horizontalMargin:`0 0 ${e.margin}px 0`,horizontalItemGutter:32,horizontalItemMargin:"",horizontalItemMarginRTL:"",horizontalItemPadding:`${e.paddingSM}px 0`,horizontalItemPaddingSM:`${e.paddingXS}px 0`,horizontalItemPaddingLG:`${e.padding}px 0`,verticalItemPadding:`${e.paddingXS}px ${e.paddingLG}px`,verticalItemMargin:`${e.margin}px 0 0 0`,itemColor:e.colorText,itemSelectedColor:e.colorPrimary,itemHoverColor:e.colorPrimaryHover,itemActiveColor:e.colorPrimaryActive,cardGutter:e.marginXXS/2}}));var ze=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(e);a<o.length;a++)t.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(n[o[a]]=e[o[a]])}return n};const Oe=e=>{const{type:t,className:n,rootClassName:i,size:c,onEdit:l,hideAdd:s,centered:u,addIcon:f,popupClassName:v,children:b,items:m,animated:h,style:g,indicatorSize:$}=e,y=ze(e,["type","className","rootClassName","size","onEdit","hideAdd","centered","addIcon","popupClassName","children","items","animated","style","indicatorSize"]),{prefixCls:k,moreIcon:x=o.createElement(r.Z,null)}=y,{direction:w,tabs:S,getPrefixCls:C,getPopupContainer:_}=o.useContext(me.E_),E=C("tabs",k),[Z,R]=Le(E);let P;"editable-card"===t&&(P={onEdit:(e,t)=>{let{key:n,event:o}=t;null==l||l("add"===e?o:n,e)},removeIcon:o.createElement(a.Z,null),addIcon:f||o.createElement(d,null),showAdd:!0!==s});const T=C();const I=function(e,t){return e||function(e){return e.filter((e=>e))}((0,ye.Z)(t).map((e=>{if(o.isValidElement(e)){const{key:t,props:n}=e,o=n||{},{tab:a}=o,r=ke(o,["tab"]);return Object.assign(Object.assign({key:String(t)},r),{label:a})}return null})))}(m,b),N=function(e){let t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{inkBar:!0,tabPane:!1};return t=!1===n?{inkBar:!1,tabPane:!1}:!0===n?{inkBar:!0,tabPane:!0}:Object.assign({inkBar:!0},"object"==typeof n?n:{}),t.tabPane&&(t.tabPaneMotion=Object.assign(Object.assign({},$e),{motionName:(0,ge.m)(e,"switch")})),t}(E,h),L=(0,he.Z)(c),z=Object.assign(Object.assign({},null==S?void 0:S.style),g);return Z(o.createElement(be,Object.assign({direction:w,getPopupContainer:_,moreTransitionName:`${T}-slide-up`},y,{items:I,className:p()({[`${E}-${L}`]:L,[`${E}-card`]:["card","editable-card"].includes(t),[`${E}-editable-card`]:"editable-card"===t,[`${E}-centered`]:u},null==S?void 0:S.className,n,i,R),popupClassName:p()(v,R),style:z,editable:P,moreIcon:x,prefixCls:E,animated:N,indicatorSize:null!=$?$:null==S?void 0:S.indicatorSize})))};Oe.TabPane=()=>null;var Me=Oe}}]);