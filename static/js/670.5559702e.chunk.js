"use strict";(self.webpackChunkrecipe_app=self.webpackChunkrecipe_app||[]).push([[670],{5670:function(i,n,e){e.r(n),e.d(n,{default:function(){return h}});var t=e(4165),s=e(5861),a=e(885),l=e(7689),c=e(2791),o=e(3540),r=e(1044),d=e(8382),u=e(9036),p=e(184),h=function(){var i=(0,l.UO)().id,n=(0,c.useState)(null),e=(0,a.Z)(n,2),h=e[0],m=e[1],v=(0,c.useState)(null),x=(0,a.Z)(v,2),j=x[0],y=x[1],g="https://api.spoonacular.com/",f="268749d3f4884f8da0eb0e8bc0a31971",w=(0,l.s0)();return(0,c.useEffect)((function(){var n=r.ZP.get("".concat(g,"recipes/").concat(i,"/information?includeNutrition=false&apiKey=").concat(f)),e=r.ZP.get("".concat(g,"recipes/").concat(i,"/similar?number=3&apiKey=").concat(f)),a=function(){var i=(0,s.Z)((0,t.Z)().mark((function i(){var s;return(0,t.Z)().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.prev=0,i.next=3,r.ZP.all([n,e]);case 3:s=i.sent,m(s[0].data),y(s[1].data),i.next=11;break;case 8:i.prev=8,i.t0=i.catch(0),console.log(i.t0);case 11:case"end":return i.stop()}}),i,null,[[0,8]])})));return function(){return i.apply(this,arguments)}}();return a(),function(){m(null),y(null)}}),[i,g,f]),console.log(h,j),(0,p.jsx)(p.Fragment,{children:(0,p.jsx)(d.E.section,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5},className:"recipe",children:h?(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)("div",{className:"img-container",children:[(0,p.jsx)(d.E.img,{initial:{y:-400},animate:{y:0,transition:{duration:.5}},src:null===h||void 0===h?void 0:h.image,alt:null===h||void 0===h?void 0:h.title}),(0,p.jsxs)(d.E.section,{initial:{x:1e3},animate:{x:0,transition:{delay:.5,duration:.5}},className:"cooking-time",children:[(0,p.jsx)("h5",{children:"Cooking Time"}),(0,p.jsxs)("ol",{className:"time-list",children:[-1!==(null===h||void 0===h?void 0:h.preparationMinutes)?(0,p.jsxs)("li",{children:[(0,p.jsx)("label",{htmlFor:"prep",children:"Prep"})," ",(0,p.jsxs)("span",{id:"prep",children:[" ","\xa0: ",null===h||void 0===h?void 0:h.preparationMinutes," minutes"]})]}):"",-1!==(null===h||void 0===h?void 0:h.cookingMinutes)?(0,p.jsxs)("li",{children:[(0,p.jsx)("label",{htmlFor:"cook",children:"Cook"})," ",(0,p.jsxs)("span",{id:"cook",children:[" : ",null===h||void 0===h?void 0:h.cookingMinutes," minutes"]})]}):"",(0,p.jsxs)("li",{children:[(0,p.jsx)("label",{htmlFor:"total",children:"Total"}),(0,p.jsxs)("span",{id:"total",children:[" : ",null===h||void 0===h?void 0:h.readyInMinutes," minutes"]})]}),(0,p.jsxs)("li",{children:[(0,p.jsx)("label",{htmlFor:"serving",className:"serving",children:"Servings"}),(0,p.jsxs)("span",{id:"serving",children:[" : ",null===h||void 0===h?void 0:h.servings]})]})]})]})]}),(0,p.jsxs)("section",{className:"description",children:[(0,p.jsxs)(d.E.div,{initial:{opacity:0},animate:{opacity:1,transition:{delay:1.5}},children:[(0,p.jsx)("h1",{className:"recipe-title",children:null===h||void 0===h?void 0:h.title}),(0,p.jsx)("p",{children:(0,o.ZP)((null===h||void 0===h?void 0:h.summary)||"")})]}),(0,p.jsxs)("section",{className:"ingredients",children:[(0,p.jsx)(d.E.h4,{initial:{opacity:0},whileInView:{opacity:1,transition:{duration:1}},viewport:{once:!0},children:"Ingredients :"}),(0,p.jsx)("ol",{className:"ingredient-list",children:null===h||void 0===h?void 0:h.extendedIngredients.map((function(i,n){return(0,p.jsxs)(d.E.li,{initial:{opacity:0},whileInView:{opacity:1,transition:{duration:1}},viewport:{once:!0},children:[i.amount," ",i.unit," ",i.name]},n)}))})]}),(0,p.jsx)("section",{className:"steps",children:null!==h&&void 0!==h&&h.analyzedInstructions[0]?(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(d.E.h4,{initial:{opacity:0},whileInView:{opacity:1,transition:{duration:.5}},viewport:{once:!0},children:"Instruction :"}),(0,p.jsx)("ol",{className:"step-list",children:null===h||void 0===h?void 0:h.analyzedInstructions[0].steps.map((function(i,n){return(0,p.jsx)(d.E.li,{initial:{opacity:0},whileInView:{opacity:1,transition:{duration:1}},viewport:{once:!0},children:i.step},n)}))})]}):""})]}),(0,p.jsxs)(d.E.section,{initial:{opacity:0},whileInView:{opacity:1,transition:{delay:.5}},viewport:{once:!0},className:"similar",children:[(0,p.jsx)("h1",{children:"Similar Recipe"}),(0,p.jsx)("div",{className:"similar-recipe",children:null===j||void 0===j?void 0:j.map((function(i){return(0,p.jsxs)(d.E.div,{whileHover:{scale:1.2},whileTap:{scale:1.1},className:"container",onClick:function(){return w("/recipe/".concat(i.id))},children:[(0,p.jsx)("img",{src:"https://spoonacular.com/recipeImages/".concat(i.id,"-312x231.").concat(i.imageType),alt:i.title}),(0,p.jsxs)("h4",{children:[i.title.slice(0,30),"..."]})]},i.id)}))})]})]}):(0,p.jsx)(u.Z,{message:u.q.quotaExceeded})})})}}}]);
//# sourceMappingURL=670.5559702e.chunk.js.map