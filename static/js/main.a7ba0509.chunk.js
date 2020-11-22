(this["webpackJsonpmacro-calculator"]=this["webpackJsonpmacro-calculator"]||[]).push([[0],{83:function(e,t,a){},84:function(e,t,a){},91:function(e,t,a){"use strict";a.r(t);var c=a(2),n=a(0),i=a.n(n),l=a(11),r=a.n(l),o=(a(83),a.p,a(84),a(14)),s=a(128),j=a(125),b=a(139),d=a(142),h=a(140),x=a(144),O=a(134),u=a(133),g=a(143),m=a(131),f=a(138),v=a(135),p=a(59),y=a(145),C=a(93),T=a(136),I=a(49),S=a.n(I),k=a(123),L=a(47),M=Object(L.a)(Object(L.a)(Object(L.a)({},{MALE:"male",FEMALE:"female"}),{LOOSE:0,GAIN:1}),{},{ACTIVITY_LIST:[{value:0,label:"Basal Metabolic Rate",description:"BMR is the number of calories required to keep your body functioning at rest. Also known as your body's metabolism"},{value:1,label:"Sedentary",description:"Little to no exercise"},{value:2,label:"Lightly Active",description:"Light exercise (1-3 days per week)"},{value:3,label:"Moderately Active",description:"Moderate exercise (3-5 days per week)"},{value:4,label:"Very Active",description:"Hard exercise (5-7 days per week)"},{value:5,label:"Extremely Active",description:"Very intense exercise daily or physical job"}],ACITIVTY_LEVEL_VALUES:{0:1,1:1.2,2:1.375,3:1.55,4:1.725,5:1.9}}),B={PoundToKg:.453592,FeetToCm:30.48,InchesToCm:2.54,ProteinDefaultConversion:.25,CarbsDefaultConversion:.5,FatDefaultConversion:.25,ProteinDefaultGramConversion:4,CarbsDefaultGramConversion:4,FatDefaultGramConversion:9,FiberDefaultGramConversion:14},D=function(e,t){return t/100*e},E=function(e,t,a){return Math.round(a===M.LOOSE?e-D(e,t):e+D(e,t))},F=function(e){var t,a,c,n=e.gender,i=e.age,l=e.height,r=e.useMetricInHeight,o=e.weight,s=e.useMetricInWeight,j=e.activityLevel,b=e.goal,d=e.goalValue,h=5;console.log("initial weight:",o),console.log("initial height:",l),n===M.FEMALE&&(h=-161),r||(t=l[0],a=l[1],l=Math.round(t*B.FeetToCm+a*B.InchesToCm)),console.log("new height:",l),s||(c=o,o=Math.round(c*B.PoundToKg),console.log("converted weight:",o));var x=Math.floor(10*o+6.25*l-5*i+h);console.log("calories per day1",x),x=E(x,d,b),console.log("calories per day2",x);var O=M.ACITIVTY_LEVEL_VALUES[j];x=Math.floor(x*O),console.log("calories per day3",x);var u=x*B.ProteinDefaultConversion,g=x*B.CarbsDefaultConversion,m=x*B.FatDefaultConversion,f=x/1e3;return{calories:x,protein:Math.floor(u/B.ProteinDefaultGramConversion),fat:Math.floor(m/B.FatDefaultGramConversion),carbs:Math.floor(g/B.CarbsDefaultGramConversion),fiber:Math.floor(f*B.FiberDefaultGramConversion)}},w=a(127),A=Object(k.a)((function(e){return{blackBoldText:{color:"black",fontWeight:"bold"},greenBoldText:{color:"green",fontWeight:"bold"},blueBoldText:{color:"blue",fontWeight:"bold"},orangeBoldText:{color:"orange",fontWeight:"bold"},redBoldText:{color:"red",fontWeight:"bold"},violetBoldText:{color:"violet",fontWeight:"bold"}}})),G=function(e){var t=e.caloriesPerDay,a=e.proteinInGrams,n=e.fatInGrams,i=e.carbsInGrams,l=e.fiberInGrams,r=e.proteinSplit,o=e.fatSplit,s=e.carbsSplit,d=A();return Object(c.jsxs)(j.a,{container:!0,spacing:3,direction:"column",children:[Object(c.jsx)(j.a,{item:!0,children:Object(c.jsx)(w.a,{style:{width:"90%"}})}),Object(c.jsx)(j.a,{item:!0,children:Object(c.jsx)(p.a,{variant:"h4",className:d.blackBoldText,children:"Results"})}),Object(c.jsx)(j.a,{item:!0,children:Object(c.jsxs)(j.a,{container:!0,spacing:4,children:[Object(c.jsx)(j.a,{item:!0,children:Object(c.jsx)(p.a,{variant:"h6",className:d.blackBoldText,children:"Calories per Day"})}),Object(c.jsx)(j.a,{item:!0,children:Object(c.jsx)(p.a,{variant:"h6",className:d.greenBoldText,children:t})})]})}),Object(c.jsx)(j.a,{item:!0,children:Object(c.jsxs)(j.a,{container:!0,direction:"column",spacing:1,children:[Object(c.jsx)(j.a,{item:!0,children:Object(c.jsx)(p.a,{variant:"h6",className:d.blackBoldText,children:"Daily Macros"})}),Object(c.jsx)(j.a,{item:!0,children:Object(c.jsx)(p.a,{variant:"caption",children:"(".concat(s," Carbs, ").concat(r," Protein, ").concat(o," fat)")})}),Object(c.jsx)(j.a,{item:!0,children:Object(c.jsxs)(j.a,{container:!0,spacing:5,children:[Object(c.jsx)(j.a,{item:!0,children:Object(c.jsxs)(b.a,{display:"flex",alignItems:"center",justifyContent:"flex-start",children:[Object(c.jsx)(p.a,{variant:"body1",className:d.blackBoldText,children:"Protein"}),Object(c.jsx)(b.a,{ml:2,children:Object(c.jsx)(p.a,{variant:"body1",className:d.blueBoldText,children:"".concat(a,"g")})})]})}),Object(c.jsx)(j.a,{item:!0,children:Object(c.jsxs)(b.a,{display:"flex",alignItems:"center",justifyContent:"flex-start",children:[Object(c.jsx)(p.a,{variant:"body1",className:d.blackBoldText,children:"Fat"}),Object(c.jsx)(b.a,{ml:2,children:Object(c.jsx)(p.a,{variant:"body1",className:d.orangeBoldText,children:"".concat(n,"g")})})]})})]})})]})}),Object(c.jsx)(j.a,{item:!0,children:Object(c.jsx)(j.a,{container:!0,direction:"column",children:Object(c.jsx)(j.a,{item:!0,children:Object(c.jsxs)(j.a,{container:!0,spacing:5,children:[Object(c.jsx)(j.a,{item:!0,children:Object(c.jsxs)(b.a,{display:"flex",alignItems:"center",justifyContent:"flex-start",children:[Object(c.jsx)(p.a,{variant:"body1",className:d.blackBoldText,children:"Carbs"}),Object(c.jsx)(b.a,{ml:2,children:Object(c.jsx)(p.a,{variant:"body1",className:d.redBoldText,children:"".concat(i,"g")})})]})}),Object(c.jsx)(j.a,{item:!0,children:Object(c.jsxs)(b.a,{display:"flex",alignItems:"center",justifyContent:"flex-start",children:[Object(c.jsx)(p.a,{variant:"body1",className:d.blackBoldText,children:"Fiber"}),Object(c.jsx)(b.a,{ml:2,children:Object(c.jsx)(p.a,{variant:"body1",className:d.violetBoldText,children:"".concat(l,"g")})})]})})]})})})}),Object(c.jsx)(j.a,{item:!0,children:Object(c.jsx)(w.a,{style:{width:"90%"}})})]})},N=Object(k.a)((function(e){return{root:{marginTop:e.spacing(1),backgroundColor:"#eeeeee",borderRadius:e.spacing(2)},container:{padding:e.spacing(5,0,5,0)},blackBoldText:{color:"black",fontWeight:"bold"}}})),P=function(){var e=N(),t=Object(n.useState)(M.MALE),a=Object(o.a)(t,2),i=a[0],l=a[1],r=Object(n.useState)(25),I=Object(o.a)(r,2),k=I[0],L=I[1],D=Object(n.useState)(4),w=Object(o.a)(D,2),A=w[0],P=w[1],V=Object(n.useState)(5),W=Object(o.a)(V,2),_=W[0],R=W[1],Y=Object(n.useState)(180),H=Object(o.a)(Y,2),K=H[0],J=H[1],U=Object(n.useState)(!1),q=Object(o.a)(U,2),z=q[0],Q=q[1],X=Object(n.useState)(!1),Z=Object(o.a)(X,2),$=Z[0],ee=Z[1],te=Object(n.useState)(M.LOOSE),ae=Object(o.a)(te,2),ce=ae[0],ne=ae[1],ie=Object(n.useState)(0),le=Object(o.a)(ie,2),re=le[0],oe=le[1],se=Object(n.useState)(150),je=Object(o.a)(se,2),be=je[0],de=je[1],he=Object(n.useState)(0),xe=Object(o.a)(he,2),Oe=xe[0],ue=xe[1],ge=Object(n.useState)({calories:0,protein:0,fat:0,carbs:0,fiber:0}),me=Object(o.a)(ge,2),fe=me[0],ve=me[1];Object(n.useEffect)((function(){pe()}),[i,k,A,_,K,z,be,$,ce,re,Oe]);var pe=function(){var e=F({gender:i,age:k,height:z?K:[A,_],heightType:z,weight:be,weightType:$,activityLevel:Oe,goal:ce,goalValue:re});ve(e)};return Object(c.jsx)(s.a,{className:e.root,children:Object(c.jsxs)(j.a,{container:!0,alignItems:"flex-start",justify:"center",className:e.container,spacing:2,children:[Object(c.jsx)(j.a,{item:!0,xs:12,sm:12,md:6,lg:6,children:Object(c.jsxs)(j.a,{container:!0,direction:"column",spacing:3,children:[Object(c.jsx)(j.a,{item:!0,children:Object(c.jsx)(p.a,{variant:"body1",className:e.blackBoldText,children:"Input values to calculate your macros"})}),Object(c.jsx)(j.a,{item:!0,children:Object(c.jsx)(d.a,{label:"Age",value:k,onChange:function(e){L(e.target.value)}})}),Object(c.jsx)(j.a,{item:!0,children:Object(c.jsxs)(g.a,{children:[Object(c.jsx)(b.a,{mb:1,children:Object(c.jsx)(m.a,{component:"legend",children:"Gender"})}),Object(c.jsxs)(x.a,{"aria-label":"gender",value:i,onChange:function(e){console.log(e.target.value),l(e.target.value)},style:{flexDirection:"row"},children:[Object(c.jsx)(O.a,{value:M.MALE,control:Object(c.jsx)(h.a,{}),label:"Male"}),Object(c.jsx)(O.a,{value:M.FEMALE,control:Object(c.jsx)(h.a,{}),label:"Female"})]})]})}),Object(c.jsx)(j.a,{item:!0,children:Object(c.jsxs)(g.a,{children:[Object(c.jsx)(b.a,{mb:1,children:Object(c.jsx)(m.a,{component:"legend",children:"Height"})}),Object(c.jsxs)(j.a,{container:!0,spacing:1,children:[z?Object(c.jsx)(j.a,{item:!0,children:Object(c.jsx)(d.a,{label:"Centimeters",value:K,onChange:function(e){J(e.target.value)}})}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(j.a,{item:!0,children:Object(c.jsx)(d.a,{label:"Feet",value:A,onChange:function(e){P(e.target.value)}})}),Object(c.jsx)(j.a,{item:!0,children:Object(c.jsx)(d.a,{label:"Inches",value:_,onChange:function(e){R(e.target.value)}})})]}),Object(c.jsx)(j.a,{item:!0,children:Object(c.jsx)(y.a,{title:z?"Switch to feet and inches":"Switch to cm",children:Object(c.jsx)(v.a,{onClick:function(){Q(!z)},children:Object(c.jsx)(S.a,{})})})})]})]})}),Object(c.jsx)(j.a,{item:!0,children:Object(c.jsxs)(g.a,{children:[Object(c.jsx)(b.a,{mb:1,children:Object(c.jsx)(m.a,{component:"legend",children:"Weight"})}),Object(c.jsxs)(j.a,{container:!0,spacing:1,children:[Object(c.jsx)(j.a,{item:!0,children:Object(c.jsx)(d.a,{label:$?"Kilograms (kg)":"Pounds (lbs)",value:be,onChange:function(e){de(e.target.value)}})}),Object(c.jsx)(j.a,{item:!0,children:Object(c.jsx)(y.a,{title:$?"Switch to pounds (lbs)":"Switch to kilogram (kg)",children:Object(c.jsx)(v.a,{onClick:function(){ee(!$)},children:Object(c.jsx)(S.a,{})})})})]})]})}),Object(c.jsx)(j.a,{item:!0,children:Object(c.jsxs)(g.a,{children:[Object(c.jsx)(b.a,{mb:1,children:Object(c.jsx)(m.a,{component:"legend",children:"Select Activity Level"})}),Object(c.jsx)(f.a,{native:!0,defaultValue:Oe,onChange:function(e){ue(e.target.value)},children:M.ACTIVITY_LIST.map((function(e,t){return Object(c.jsx)("option",{value:e.value,children:"".concat(e.label," - ").concat(e.description)},t)}))})]})}),Object(c.jsx)(j.a,{item:!0,children:Object(c.jsxs)(g.a,{children:[Object(c.jsx)(b.a,{mb:1,children:Object(c.jsx)(m.a,{component:"legend",children:"Weight Goal"})}),Object(c.jsxs)(j.a,{container:!0,spacing:2,children:[Object(c.jsx)(j.a,{item:!0,children:Object(c.jsxs)(f.a,{native:!0,defaultValue:ce,onChange:function(e){ne(e.target.value)},children:[Object(c.jsx)("option",{value:M.LOOSE,children:"Loose"}),Object(c.jsx)("option",{value:M.GAIN,children:"Gain"})]})}),Object(c.jsx)(j.a,{item:!0,children:Object(c.jsx)(b.a,{ml:3,height:"100%",display:"flex",alignItems:"center",justifyContent:"center",children:Object(c.jsx)(p.a,{variant:"body1",children:"".concat(re,"%")})})}),Object(c.jsx)(j.a,{item:!0,children:Object(c.jsxs)(T.a,{color:"primary","aria-label":"outlined primary button group",children:[Object(c.jsx)(C.a,{onClick:function(){var e=re;e<=0||oe(e-=1)},children:"-"}),Object(c.jsx)(C.a,{onClick:function(){var e=re;oe(e+=1)},children:"+"})]})})]}),Object(c.jsx)(b.a,{children:Object(c.jsx)(u.a,{children:0===re?"Maintain Weight: ".concat(be).concat($?"kg":"lbs"):"Target Weight: ".concat(E(be,re,ce)).concat($?"kg":"lbs")})})]})})]})}),Object(c.jsx)(j.a,{item:!0,xs:12,sm:12,md:6,lg:6,children:Object(c.jsx)(G,{caloriesPerDay:fe.calories,fatInGrams:fe.fat,carbsInGrams:fe.carbs,proteinInGrams:fe.protein,fiberInGrams:fe.fiber,proteinSplit:"".concat(100*B.ProteinDefaultConversion,"%"),fatSplit:"".concat(100*B.FatDefaultConversion,"%"),carbsSplit:"".concat(100*B.CarbsDefaultConversion,"%")})})]})})},V=a(137),W=Object(k.a)((function(e){return{footer:{position:"fixed",bottom:0,width:"100%"}}})),_=function(){var e=W();return Object(c.jsx)("div",{className:e.footer,children:Object(c.jsx)(b.a,{display:"flex",width:"100%",alignItems:"center",justifyContent:"center",children:Object(c.jsx)(p.a,{children:Object(c.jsx)(V.a,{href:"http://raysaavedra.github.io/",children:"\xa9 Copyright 2020, Ray Saavedra"})})})})};var R=function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(P,{}),Object(c.jsx)(_,{})]})},Y=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,148)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,i=t.getLCP,l=t.getTTFB;a(e),c(e),n(e),i(e),l(e)}))};r.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(R,{})}),document.getElementById("root")),Y()}},[[91,1,2]]]);
//# sourceMappingURL=main.a7ba0509.chunk.js.map