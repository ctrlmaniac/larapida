"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[679],{9679:function(e,t,a){a.r(t),a.d(t,{default:function(){return U}});var o=a(969),r=a(221),n=a(5949),i=a(8165),l=a(8807),s=a(1461),c=a(7896),d=a(1856),p=a(6540);var u=o.createContext(),v=a(2441),h=a(2221),g=a(2975),m=a(2746);function f(e){return(0,g.Z)("MuiTable",e)}(0,m.Z)("MuiTable",["root","stickyHeader"]);var y=a(7574),Z=["className","component","padding","size","stickyHeader"],x=(0,h.ZP)("table",{name:"MuiTable",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,a.stickyHeader&&t.stickyHeader]}})((function(e){var t=e.theme,a=e.ownerState;return(0,c.Z)({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":(0,c.Z)({},t.typography.body2,{padding:t.spacing(2),color:(t.vars||t).palette.text.secondary,textAlign:"left",captionSide:"bottom"})},a.stickyHeader&&{borderCollapse:"separate"})})),b="table",w=o.forwardRef((function(e,t){var a=(0,v.Z)({props:e,name:"MuiTable"}),r=a.className,n=a.component,i=void 0===n?b:n,l=a.padding,h=void 0===l?"normal":l,g=a.size,m=void 0===g?"medium":g,w=a.stickyHeader,k=void 0!==w&&w,j=(0,s.Z)(a,Z),T=(0,c.Z)({},a,{component:i,padding:h,size:m,stickyHeader:k}),C=function(e){var t=e.classes,a={root:["root",e.stickyHeader&&"stickyHeader"]};return(0,p.Z)(a,f,t)}(T),H=o.useMemo((function(){return{padding:h,size:m,stickyHeader:k}}),[h,m,k]);return(0,y.jsx)(u.Provider,{value:H,children:(0,y.jsx)(x,(0,c.Z)({as:i,role:i===b?null:"table",ref:t,className:(0,d.Z)(C.root,r),ownerState:T},j))})}));var k=o.createContext();function j(e){return(0,g.Z)("MuiTableHead",e)}(0,m.Z)("MuiTableHead",["root"]);var T=["className","component"],C=(0,h.ZP)("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:function(e,t){return t.root}})({display:"table-header-group"}),H={variant:"head"},M="thead",R=o.forwardRef((function(e,t){var a=(0,v.Z)({props:e,name:"MuiTableHead"}),o=a.className,r=a.component,n=void 0===r?M:r,i=(0,s.Z)(a,T),l=(0,c.Z)({},a,{component:n}),u=function(e){var t=e.classes;return(0,p.Z)({root:["root"]},j,t)}(l);return(0,y.jsx)(k.Provider,{value:H,children:(0,y.jsx)(C,(0,c.Z)({as:n,className:(0,d.Z)(u.root,o),ref:t,role:n===M?null:"rowgroup",ownerState:l},i))})})),z=a(6666),N=a(4262);function S(e){return(0,g.Z)("MuiTableRow",e)}var A=(0,m.Z)("MuiTableRow",["root","selected","hover","head","footer"]),P=["className","component","hover","selected"],B=(0,h.ZP)("tr",{name:"MuiTableRow",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,a.head&&t.head,a.footer&&t.footer]}})((function(e){var t,a=e.theme;return t={color:"inherit",display:"table-row",verticalAlign:"middle",outline:0},(0,z.Z)(t,"&.".concat(A.hover,":hover"),{backgroundColor:(a.vars||a).palette.action.hover}),(0,z.Z)(t,"&.".concat(A.selected),{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / ").concat(a.vars.palette.action.selectedOpacity,")"):(0,N.Fq)(a.palette.primary.main,a.palette.action.selectedOpacity),"&:hover":{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / calc(").concat(a.vars.palette.action.selectedOpacity," + ").concat(a.vars.palette.action.hoverOpacity,"))"):(0,N.Fq)(a.palette.primary.main,a.palette.action.selectedOpacity+a.palette.action.hoverOpacity)}}),t})),O=o.forwardRef((function(e,t){var a=(0,v.Z)({props:e,name:"MuiTableRow"}),r=a.className,n=a.component,i=void 0===n?"tr":n,l=a.hover,u=void 0!==l&&l,h=a.selected,g=void 0!==h&&h,m=(0,s.Z)(a,P),f=o.useContext(k),Z=(0,c.Z)({},a,{component:i,hover:u,selected:g,head:f&&"head"===f.variant,footer:f&&"footer"===f.variant}),x=function(e){var t=e.classes,a={root:["root",e.selected&&"selected",e.hover&&"hover",e.head&&"head",e.footer&&"footer"]};return(0,p.Z)(a,S,t)}(Z);return(0,y.jsx)(B,(0,c.Z)({as:i,ref:t,className:(0,d.Z)(x.root,r),role:"tr"===i?null:"row",ownerState:Z},m))})),D=O,F=a(9853);function q(e){return(0,g.Z)("MuiTableCell",e)}var W=(0,m.Z)("MuiTableCell",["root","head","body","footer","sizeSmall","sizeMedium","paddingCheckbox","paddingNone","alignLeft","alignCenter","alignRight","alignJustify","stickyHeader"]),E=["align","className","component","padding","scope","size","sortDirection","variant"],I=(0,h.ZP)("td",{name:"MuiTableCell",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,t[a.variant],t["size".concat((0,F.Z)(a.size))],"normal"!==a.padding&&t["padding".concat((0,F.Z)(a.padding))],"inherit"!==a.align&&t["align".concat((0,F.Z)(a.align))],a.stickyHeader&&t.stickyHeader]}})((function(e){var t=e.theme,a=e.ownerState;return(0,c.Z)({},t.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:t.vars?"1px solid ".concat(t.vars.palette.TableCell.border):"1px solid\n    ".concat("light"===t.palette.mode?(0,N.$n)((0,N.Fq)(t.palette.divider,1),.88):(0,N._j)((0,N.Fq)(t.palette.divider,1),.68)),textAlign:"left",padding:16},"head"===a.variant&&{color:(t.vars||t).palette.text.primary,lineHeight:t.typography.pxToRem(24),fontWeight:t.typography.fontWeightMedium},"body"===a.variant&&{color:(t.vars||t).palette.text.primary},"footer"===a.variant&&{color:(t.vars||t).palette.text.secondary,lineHeight:t.typography.pxToRem(21),fontSize:t.typography.pxToRem(12)},"small"===a.size&&(0,z.Z)({padding:"6px 16px"},"&.".concat(W.paddingCheckbox),{width:24,padding:"0 12px 0 16px","& > *":{padding:0}}),"checkbox"===a.padding&&{width:48,padding:"0 0 0 4px"},"none"===a.padding&&{padding:0},"left"===a.align&&{textAlign:"left"},"center"===a.align&&{textAlign:"center"},"right"===a.align&&{textAlign:"right",flexDirection:"row-reverse"},"justify"===a.align&&{textAlign:"justify"},a.stickyHeader&&{position:"sticky",top:0,zIndex:2,backgroundColor:(t.vars||t).palette.background.default})})),J=o.forwardRef((function(e,t){var a,r=(0,v.Z)({props:e,name:"MuiTableCell"}),n=r.align,i=void 0===n?"inherit":n,l=r.className,h=r.component,g=r.padding,m=r.scope,f=r.size,Z=r.sortDirection,x=r.variant,b=(0,s.Z)(r,E),w=o.useContext(u),j=o.useContext(k),T=j&&"head"===j.variant;a=h||(T?"th":"td");var C=m;!C&&T&&(C="col");var H=x||j&&j.variant,M=(0,c.Z)({},r,{align:i,component:a,padding:g||(w&&w.padding?w.padding:"normal"),size:f||(w&&w.size?w.size:"medium"),sortDirection:Z,stickyHeader:"head"===H&&w&&w.stickyHeader,variant:H}),R=function(e){var t=e.classes,a=e.variant,o=e.align,r=e.padding,n=e.size,i={root:["root",a,e.stickyHeader&&"stickyHeader","inherit"!==o&&"align".concat((0,F.Z)(o)),"normal"!==r&&"padding".concat((0,F.Z)(r)),"size".concat((0,F.Z)(n))]};return(0,p.Z)(i,q,t)}(M),z=null;return Z&&(z="asc"===Z?"ascending":"descending"),(0,y.jsx)(I,(0,c.Z)({as:a,ref:t,className:(0,d.Z)(R.root,l),"aria-sort":z,scope:C,ownerState:M},b))})),L=J;function Q(e){return(0,g.Z)("MuiTableBody",e)}(0,m.Z)("MuiTableBody",["root"]);var V=["className","component"],$=(0,h.ZP)("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:function(e,t){return t.root}})({display:"table-row-group"}),_={variant:"body"},G="tbody",K=o.forwardRef((function(e,t){var a=(0,v.Z)({props:e,name:"MuiTableBody"}),o=a.className,r=a.component,n=void 0===r?G:r,i=(0,s.Z)(a,V),l=(0,c.Z)({},a,{component:n}),u=function(e){var t=e.classes;return(0,p.Z)({root:["root"]},Q,t)}(l);return(0,y.jsx)(k.Provider,{value:_,children:(0,y.jsx)($,(0,c.Z)({className:(0,d.Z)(u.root,o),as:n,ref:t,role:n===G?null:"rowgroup",ownerState:l},i))})})),U=function(){return(0,y.jsx)(o.Fragment,{children:(0,y.jsx)(r.T3,{children:(0,y.jsxs)(n.Z,{children:[(0,y.jsxs)(i.Z,{sx:{mb:3,textAlign:"center"},children:[(0,y.jsx)(l.Z,{variant:"h2",component:"h1",gutterBottom:!0,children:"Privacy"}),(0,y.jsx)(l.Z,{children:"Qui puoi scoprire come vengono utilizzati i tuoi dati da parte nostra"})]}),(0,y.jsxs)(i.Z,{sx:{mb:4},children:[(0,y.jsx)(l.Z,{variant:"h6",gutterBottom:!0,children:"Modulo Contattaci"}),(0,y.jsxs)(w,{children:[(0,y.jsx)(R,{children:(0,y.jsxs)(D,{children:[(0,y.jsx)(L,{children:"Dato Richiesto"}),(0,y.jsx)(L,{children:"Trattamento del dato"})]})}),(0,y.jsx)(K,{children:(0,y.jsxs)(D,{children:[(0,y.jsx)(L,{children:"Email"}),(0,y.jsx)(L,{children:"Verr\xe0 utilizzata solo ed esclusivamente per lo scopo di essere ricontattati"})]})})]})]})]})})})}}}]);
//# sourceMappingURL=679.fc399f95.chunk.js.map