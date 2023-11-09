"use strict";(self.webpackChunkavas_auth=self.webpackChunkavas_auth||[]).push([[514],{3404:function(e,r,t){t.d(r,{Z:function(){return B}});var a=t(3433),o=t(9439),n=t(4942),l=t(7462),s=t(3366),i=t(7313),c=(t(6214),t(4146)),d=t(1921),u=t(8503),p=t(7592),m=t(7342),f=t(1113),h=t(7551),v=t(1171),g=t(6417),Z=(0,v.Z)((0,g.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),y=t(7999),b=["slots","slotProps"],x=(0,p.ZP)(y.Z)((function(e){var r=e.theme;return(0,l.Z)({display:"flex",marginLeft:"calc(".concat(r.spacing(1)," * 0.5)"),marginRight:"calc(".concat(r.spacing(1)," * 0.5)")},"light"===r.palette.mode?{backgroundColor:r.palette.grey[100],color:r.palette.grey[700]}:{backgroundColor:r.palette.grey[700],color:r.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":(0,l.Z)({},"light"===r.palette.mode?{backgroundColor:r.palette.grey[200]}:{backgroundColor:r.palette.grey[600]}),"&:active":(0,l.Z)({boxShadow:r.shadows[0]},"light"===r.palette.mode?{backgroundColor:(0,h._4)(r.palette.grey[200],.12)}:{backgroundColor:(0,h._4)(r.palette.grey[600],.12)})})})),C=(0,p.ZP)(Z)({width:24,height:16});var w=function(e){var r=e.slots,t=void 0===r?{}:r,a=e.slotProps,o=void 0===a?{}:a,n=(0,s.Z)(e,b),i=e;return(0,g.jsx)("li",{children:(0,g.jsx)(x,(0,l.Z)({focusRipple:!0},n,{ownerState:i,children:(0,g.jsx)(C,(0,l.Z)({as:t.CollapsedIcon,ownerState:i},o.collapsedIcon))}))})},P=t(7430),S=t(2298);function j(e){return(0,S.Z)("MuiBreadcrumbs",e)}var R=(0,P.Z)("MuiBreadcrumbs",["root","ol","li","separator"]),M=["children","className","component","slots","slotProps","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],N=(0,p.ZP)(f.Z,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:function(e,r){return[(0,n.Z)({},"& .".concat(R.li),r.li),r.root]}})({}),k=(0,p.ZP)("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:function(e,r){return r.ol}})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),I=(0,p.ZP)("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:function(e,r){return r.separator}})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function T(e,r,t,a){return e.reduce((function(o,n,l){return l<e.length-1?o=o.concat(n,(0,g.jsx)(I,{"aria-hidden":!0,className:r,ownerState:a,children:t},"separator-".concat(l))):o.push(n),o}),[])}var B=i.forwardRef((function(e,r){var t=(0,m.Z)({props:e,name:"MuiBreadcrumbs"}),n=t.children,p=t.className,f=t.component,h=void 0===f?"nav":f,v=t.slots,Z=void 0===v?{}:v,y=t.slotProps,b=void 0===y?{}:y,x=t.expandText,C=void 0===x?"Show path":x,P=t.itemsAfterCollapse,S=void 0===P?1:P,R=t.itemsBeforeCollapse,I=void 0===R?1:R,B=t.maxItems,H=void 0===B?8:B,O=t.separator,A=void 0===O?"/":O,z=(0,s.Z)(t,M),_=i.useState(!1),E=(0,o.Z)(_,2),L=E[0],q=E[1],V=(0,l.Z)({},t,{component:h,expanded:L,expandText:C,itemsAfterCollapse:S,itemsBeforeCollapse:I,maxItems:H,separator:A}),W=function(e){var r=e.classes;return(0,d.Z)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},j,r)}(V),D=(0,u.y)({elementType:Z.CollapsedIcon,externalSlotProps:b.collapsedIcon,ownerState:V}),F=i.useRef(null),G=i.Children.toArray(n).filter((function(e){return i.isValidElement(e)})).map((function(e,r){return(0,g.jsx)("li",{className:W.li,children:e},"child-".concat(r))}));return(0,g.jsx)(N,(0,l.Z)({ref:r,component:h,color:"text.secondary",className:(0,c.Z)(W.root,p),ownerState:V},z,{children:(0,g.jsx)(k,{className:W.ol,ref:F,ownerState:V,children:T(L||H&&G.length<=H?G:function(e){return I+S>=e.length?e:[].concat((0,a.Z)(e.slice(0,I)),[(0,g.jsx)(w,{"aria-label":C,slots:{CollapsedIcon:Z.CollapsedIcon},slotProps:{collapsedIcon:D},onClick:function(){q(!0);var e=F.current.querySelector("a[href],button,[tabindex]");e&&e.focus()}},"ellipsis")],(0,a.Z)(e.slice(e.length-S,e.length)))}(G),W.separator,A,V)})}))}))},4641:function(e,r,t){t.d(r,{Z:function(){return C}});var a=t(4942),o=t(3366),n=t(7462),l=t(7313),s=t(4146),i=t(1921),c=t(1113),d=t(7342),u=t(7592),p=t(7430),m=t(2298);function f(e){return(0,m.Z)("MuiCardHeader",e)}var h=(0,p.Z)("MuiCardHeader",["root","avatar","action","content","title","subheader"]),v=t(6417),g=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],Z=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:function(e,r){var t;return(0,n.Z)((t={},(0,a.Z)(t,"& .".concat(h.title),r.title),(0,a.Z)(t,"& .".concat(h.subheader),r.subheader),t),r.root)}})({display:"flex",alignItems:"center",padding:16}),y=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:function(e,r){return r.avatar}})({display:"flex",flex:"0 0 auto",marginRight:16}),b=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:function(e,r){return r.action}})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),x=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:function(e,r){return r.content}})({flex:"1 1 auto"}),C=l.forwardRef((function(e,r){var t=(0,d.Z)({props:e,name:"MuiCardHeader"}),a=t.action,l=t.avatar,u=t.className,p=t.component,m=void 0===p?"div":p,h=t.disableTypography,C=void 0!==h&&h,w=t.subheader,P=t.subheaderTypographyProps,S=t.title,j=t.titleTypographyProps,R=(0,o.Z)(t,g),M=(0,n.Z)({},t,{component:m,disableTypography:C}),N=function(e){var r=e.classes;return(0,i.Z)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},f,r)}(M),k=S;null==k||k.type===c.Z||C||(k=(0,v.jsx)(c.Z,(0,n.Z)({variant:l?"body2":"h5",className:N.title,component:"span",display:"block"},j,{children:k})));var I=w;return null==I||I.type===c.Z||C||(I=(0,v.jsx)(c.Z,(0,n.Z)({variant:l?"body2":"body1",className:N.subheader,color:"text.secondary",component:"span",display:"block"},P,{children:I}))),(0,v.jsxs)(Z,(0,n.Z)({className:(0,s.Z)(N.root,u),as:m,ref:r,ownerState:M},R,{children:[l&&(0,v.jsx)(y,{className:N.avatar,ownerState:M,children:l}),(0,v.jsxs)(x,{className:N.content,ownerState:M,children:[k,I]}),a&&(0,v.jsx)(b,{className:N.action,ownerState:M,children:a})]}))}))},5987:function(e,r,t){t.d(r,{Z:function(){return o}});var a=t(3366);function o(e,r){if(null==e)return{};var t,o,n=(0,a.Z)(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)t=l[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}}}]);