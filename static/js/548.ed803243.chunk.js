"use strict";(self.webpackChunkrecipe_app=self.webpackChunkrecipe_app||[]).push([[548],{1548:function(e,i,n){n.r(i),n.d(i,{default:function(){return j}});var t=n(1413),s=n(885),a=n(2791),r=n(5717),o=n(828),c=n(184),l={dots:!0,infinite:!0,fade:!0,autoplay:!0,autoplaySpeed:3e3,speed:500,slidesToShow:1,slidesToScroll:1,nextArrow:(0,c.jsx)(o.W3E,{}),prevArrow:(0,c.jsx)(o.Fjg,{}),responsive:[{breakpoint:600,settings:{arrows:!1}},{breakpoint:480,settings:{arrows:!1,slidesToShow:1,slidesToScroll:1}}]},d={dekstop:{height:"20vh",transition:{delay:.5,when:"beforeChildren",duration:1}},mobile:{height:"10vh",transition:{delay:.5,when:"beforeChildren",duration:1}}},u=n(3540),h=n(7689),m=function(e){var i=(0,h.s0)();return(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)("section",{className:"cardContainer",children:[(0,c.jsx)("button",{className:"btn-detail",onClick:function(){return i("/recipe/".concat(e.id))},children:"See this recipe"}),(0,c.jsxs)("section",{className:"summary",children:[(0,c.jsx)("h2",{children:e.title}),(0,c.jsxs)("p",{children:[(0,u.ZP)(e.summary.slice(0,350)),"...."]})]}),(0,c.jsx)("section",{className:"cardImg",children:(0,c.jsx)("img",{src:e.image,alt:e.title})})]})})},p=n(8382),x=n(9036),j=function(e){var i=e.data,n=(0,a.useState)(!1),o=(0,s.Z)(n,2),u=o[0],h=o[1];console.log(i);var j=function(){window.innerWidth<768?h(!0):h(!1)};return(0,a.useEffect)((function(){return j(),window.addEventListener("resize",j),function(){window.removeEventListener("resize",j)}}),[]),(0,c.jsx)(p.E.section,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5},className:"popular",id:"popular",children:i?(0,c.jsxs)("section",{className:"main-container",children:[(0,c.jsx)(p.E.header,{initial:{height:"100vh"},variants:d,animate:u?"mobile":"dekstop",className:"mainHeader",children:(0,c.jsx)(p.E.h1,{initial:{x:-400},animate:{x:1,transition:{delay:1.5}},children:"Popular Now"})}),(0,c.jsx)("div",{className:"content",children:(0,c.jsx)(r.Z,(0,t.Z)((0,t.Z)({},l),{},{children:null===i||void 0===i?void 0:i.map((function(e){return(0,c.jsx)(m,{title:e.title,image:e.image,id:e.id,summary:e.summary},e.id)}))}))})]}):(0,c.jsx)(x.Z,{message:x.q.quotaExceeded})})}}}]);
//# sourceMappingURL=548.ed803243.chunk.js.map