(this["webpackJsonpmy-portfolio"]=this["webpackJsonpmy-portfolio"]||[]).push([[3],{100:function(e,t,r){"use strict";r.d(t,"a",(function(){return f})),r.d(t,"b",(function(){return y}));var a=r(9),i=r(0),c=r(98),s=r(101),n=r(99),o=r.p+"static/media/SimpleNim-cover.b1ec959f.png",l=r.p+"static/media/shekon-cover.3f6669d2.png",d=r.p+"static/media/nasa-cover.7d87edf6.png",m=r.p+"static/media/gd-cover.05c3d240.png",g=r.p+"static/media/oceanic-cover.46b1578c.png",b=r.p+"static/media/carpet-cover.59d05454.png",p=r(102),u=r.p+"static/media/pell-menu.e093bdce.png",x=r.p+"static/media/biomimicry-drawing.a8e9520f.png",j=[{id:1,name:"WeLight",title:"WeLight Tech",brief:"Education Website Development",category:"Web Application",img:c.a,ProjectHeader:{title:"WeLight Tech",publishDate:"Apr 15, 2023",tags:"UI / Frontend"}},{id:3.5,name:"OSB",title:"OSB",brief:"Cosmetic Ingredients Website Development",category:"Web Application",img:s.a,ProjectHeader:{title:"OSB Website",publishDate:"Apr 15, 2023",tags:"UI / Frontend"}},{id:2,name:"Interactive Architecture",title:"Interactive Architecture",category:"Web Application",brief:"Web Game Development",img:p.a},{id:3,name:"EcoHome",title:"EcoHome",brief:"Energy Saving Mobile Design",category:"UI/UX Design",img:n.a,ProjectHeader:{title:"EcoHome",publishDate:"Feb 21, 2021",tags:"UI / Frontend"}},{id:6,name:"Shekon",title:"Sh\xe9:kon",category:"XR Application",brief:"Unity VR Development",img:l},{id:11,name:"Carpet",title:"Magic Carpet",category:"Computational Design",brief:"Recursion Generated Form Study",img:b},{id:7,name:"NasaSuit",title:"Nasa Suit AR Challenge",category:"XR Application",brief:"Unity AR Development",img:d},{id:5,name:"SimpleNim",title:"Simple Nim",brief:"Web Game Development",category:"Web Application",img:o},{id:8,name:"crosspell",title:"Crossing the Pell",category:"XR Application",brief:"Unity VR Development",img:u},{id:9,name:"gd",title:"Graphic Design Collection",category:"Graphic Design",brief:"Professional Works",img:m},{id:9.5,name:"biomimicry",title:"Biomimicry Maze",category:"Graphic Design",brief:"Service Design",img:x},{id:10,name:"Oceanic",title:"Oceanic",category:"Computational Design",brief:"Algorithm Based Form Study",img:g}],h=r(2),f=Object(i.createContext)(),y=function(e){var t=Object(i.useState)(j.sort((function(e,t){return e.id-t.id}))),r=Object(a.a)(t,2),c=r[0],s=r[1],n=Object(i.useState)(""),o=Object(a.a)(n,2),l=o[0],d=o[1],m=Object(i.useState)(""),g=Object(a.a)(m,2),b=g[0],p=g[1],u=Array.from(new Set(c.map((function(e){return e.category}))));console.log("projectCategories",u);var x=c.filter((function(e){return e.title.toLowerCase().includes(l.toLowerCase())||""===l?e:""})),y=c.filter((function(e){return(e.category.charAt(0).toUpperCase()+e.category.slice(1)).includes(b)}));return Object(h.jsx)(f.Provider,{value:{projects:c,setProjects:s,searchProject:l,setSearchProject:d,searchProjectsByTitle:x,selectProject:b,setSelectProject:p,selectProjectsByCategory:y,projectCategories:u},children:e.children})}},101:function(e,t,r){"use strict";t.a=r.p+"static/media/OSB-2.3f91919c.png"},102:function(e,t,r){"use strict";t.a=r.p+"static/media/ide-02.e1f9e0a2.png"},103:function(e,t,r){"use strict";var a=r(17),i=r(31),c=r(2);t.a=function(e){var t=e.value;return Object(c.jsx)("div",{className:"mt-8 sm:mt-16 flex justify-center",children:Object(c.jsx)(a.b,{to:"/projects",className:"font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300","aria-label":"More Projects",children:Object(c.jsx)(i.a,{title:t||"More Projects"})})})}},104:function(e,t,r){"use strict";var a=r(0),i=r(11),c=r(9),s=r(95),n=r(17),o=r(105),l=r(2),d=function(e){var t=e.title,r=e.category,i=e.brief,d=e.image,m=e.name,g=Object(a.useState)(!0),b=Object(c.a)(g,2),p=b[0],u=b[1];return Object(l.jsx)(s.a.div,{initial:{opacity:0},animate:{opacity:1,delay:1},transition:{ease:"easeInOut",duration:.7,delay:.15},style:{height:"410px"},children:Object(l.jsx)(n.b,{to:"/projects/".concat(m),"aria-label":"".concat(m),style:{height:"100%"},children:Object(l.jsxs)("div",{className:"relative flex flex-col shadow-lg h-lg rounded-xl hover:shadow-xl cursor-pointer dark:bg-ternary-dark",style:{position:"relative",height:"400px"},children:[Object(l.jsxs)("div",{className:"hover-zoom h-full",children:[p&&Object(l.jsx)("div",{className:"flex flex-row justify-center items-center w-full h-1/2 object-contain overflow-hidden",style:{height:"100%"},children:Object(l.jsx)(o.a,{})}),Object(l.jsx)("img",{style:{display:p?"none":"block",height:"100%",objectFit:"cover"},src:d,className:"w-full block h-1/2 object-contain overflow-hidden",alt:"Single Project",onLoad:function(){u(!1)}})]}),Object(l.jsxs)("div",{className:"flex-grow px-6 py-4",style:{flexGrow:1},children:[Object(l.jsx)("div",{className:"font-bold mt-2 text-xl py-0 dark:text-ternary-light ",children:t}),Object(l.jsx)("p",{className:"text-gray-700 text-sm dark:text-ternary-light",children:i})]}),Object(l.jsx)("div",{className:"flex-1"}),Object(l.jsx)("div",{className:"px-6 pb-0 mb-0 mt-12 top-12",children:Object(l.jsx)("div",{className:"bg-gray-50 rounded-full px-3 py-1 text-center text-sm font-semibold text-secondary-dark mr-2 mb-2",children:r})})]})})})},m=r(100),g=function(e){var t=e.setSelectProject,r=Object(a.useContext)(m.a).projectCategories;return Object(l.jsxs)("select",{onChange:function(e){t(e.target.value)},className:"font-general-medium \r px-4\r sm:px-6\r py-2\r border\r dark:border-secondary-dark\r rounded-lg\r text-sm\r sm:text-md\r dark:font-medium\r bg-secondary-light\r dark:bg-ternary-dark\r text-primary-dark\r dark:text-ternary-light\r ",children:[Object(l.jsx)("option",{value:t,className:"text-sm sm:text-md",children:"All Projects"}),r.map((function(e){return Object(l.jsx)("option",{className:"text-normal sm:text-md",children:e},e)}))]})},b=r(18);t.a=function(){var e=Object(b.c)().lang,t=Object(a.useContext)(m.a),r=t.projects,c=t.searchProject,s=t.setSearchProject,n=t.searchProjectsByTitle,o=t.selectProject,p=t.setSelectProject,u=t.selectProjectsByCategory,x="";switch(e){case b.a.EN:x="Projects Portfolio";break;case b.a.CN:x="\u9879\u76ee\u4e00\u89c8";break;default:x="Projects Portfolio"}return Object(l.jsxs)("section",{id:"homeProjects",className:"py-5 sm:py-10 mt-5 sm:mt-10",children:[Object(l.jsx)("div",{className:"text-center",children:Object(l.jsx)("p",{className:"font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light",children:x})}),Object(l.jsxs)("div",{className:"mt-10 sm:mt-16",children:[Object(l.jsx)("h3",{className:"font-general-regular \r text-center text-secondary-dark\r dark:text-ternary-light\r text-md\r sm:text-xl\r mb-3\r ",children:"Search projects by title or filter by category"}),Object(l.jsxs)("div",{className:"\r flex\r justify-between\r border-b border-primary-light\r dark:border-secondary-dark\r pb-3\r gap-3\r ",children:[Object(l.jsxs)("div",{className:"flex justify-between gap-2",children:[Object(l.jsx)("span",{className:"\r hidden\r sm:block\r bg-primary-light\r dark:bg-ternary-dark\r p-2.5\r shadow-sm\r rounded-xl\r cursor-pointer\r ",children:Object(l.jsx)(i.k,{className:"text-ternary-dark dark:text-ternary-light w-5 h-5"})}),Object(l.jsx)("input",{onChange:function(e){s(e.target.value)},className:"font-general-medium \r pl-3\r pr-1\r sm:px-4\r py-2\r border \r border-gray-200\r dark:border-secondary-dark\r rounded-lg\r text-sm\r sm:text-md\r bg-secondary-light\r dark:bg-ternary-dark\r text-primary-dark\r dark:text-ternary-light\r ",id:"name",name:"name",type:"search",required:"",placeholder:"Search Projects","aria-label":"Name"})]}),Object(l.jsx)(g,{setSelectProject:p})]})]}),Object(l.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10",children:o?u.map((function(e){return Object(l.jsx)(d,{title:e.title,brief:e.brief,category:e.category,image:e.img,name:e.name},e.id)})):c?n.map((function(e){return Object(l.jsx)(d,{title:e.title,brief:e.brief,category:e.category,image:e.img,name:e.name},e.id)})):r.map((function(e){return Object(l.jsx)(d,{title:e.title,brief:e.brief,category:e.category,image:e.img,name:e.name},e.id)}))})]})}},105:function(e,t,r){"use strict";var a=r(1),i=r(3),c=r(0),s=(r(7),r(5)),n=r(8),o=r(16),l=44,d=c.forwardRef((function(e,t){var r=e.classes,n=e.className,d=e.color,m=void 0===d?"primary":d,g=e.disableShrink,b=void 0!==g&&g,p=e.size,u=void 0===p?40:p,x=e.style,j=e.thickness,h=void 0===j?3.6:j,f=e.value,y=void 0===f?0:f,v=e.variant,O=void 0===v?"indeterminate":v,k=Object(i.a)(e,["classes","className","color","disableShrink","size","style","thickness","value","variant"]),N={},w={},D={};if("determinate"===O||"static"===O){var P=2*Math.PI*((l-h)/2);N.strokeDasharray=P.toFixed(3),D["aria-valuenow"]=Math.round(y),N.strokeDashoffset="".concat(((100-y)/100*P).toFixed(3),"px"),w.transform="rotate(-90deg)"}return c.createElement("div",Object(a.a)({className:Object(s.a)(r.root,n,"inherit"!==m&&r["color".concat(Object(o.a)(m))],{determinate:r.determinate,indeterminate:r.indeterminate,static:r.static}[O]),style:Object(a.a)({width:u,height:u},w,x),ref:t,role:"progressbar"},D,k),c.createElement("svg",{className:r.svg,viewBox:"".concat(22," ").concat(22," ").concat(l," ").concat(l)},c.createElement("circle",{className:Object(s.a)(r.circle,b&&r.circleDisableShrink,{determinate:r.circleDeterminate,indeterminate:r.circleIndeterminate,static:r.circleStatic}[O]),style:N,cx:l,cy:l,r:(l-h)/2,fill:"none",strokeWidth:h})))}));t.a=Object(n.a)((function(e){return{root:{display:"inline-block"},static:{transition:e.transitions.create("transform")},indeterminate:{animation:"$circular-rotate 1.4s linear infinite"},determinate:{transition:e.transitions.create("transform")},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},svg:{display:"block"},circle:{stroke:"currentColor"},circleStatic:{transition:e.transitions.create("stroke-dashoffset")},circleIndeterminate:{animation:"$circular-dash 1.4s ease-in-out infinite",strokeDasharray:"80px, 200px",strokeDashoffset:"0px"},circleDeterminate:{transition:e.transitions.create("stroke-dashoffset")},"@keyframes circular-rotate":{"0%":{transformOrigin:"50% 50%"},"100%":{transform:"rotate(360deg)"}},"@keyframes circular-dash":{"0%":{strokeDasharray:"1px, 200px",strokeDashoffset:"0px"},"50%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-15px"},"100%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-125px"}},circleDisableShrink:{animation:"none"}}}),{name:"MuiCircularProgress",flip:!1})(d)},120:function(e,t,r){"use strict";r.r(t);var a=r(9),i=r(39),c=r(11),s=r.p+"static/media/test.ad38d23c.gif",n=r(95),o=r(0),l=r(18),d=r(2),m=function(){var e,t,r=Object(l.c)(),m=r.lang,g=r.LANGUAGE,b=Object(i.a)(),p=(Object(a.a)(b,1)[0],Object(o.useCallback)((function(){var e=document.getElementById("homeProjects");e&&e.scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"})}),[])),u="";switch(m){case g.EN:e="Hi, I am George",t="A Front-end Developer & Design Enthusiast",u="Check my Resume";break;case g.CN:e="\u6b22\u8fce",t="\u4e13\u6ce8\u7f51\u7edc\u5f00\u53d1\u548c\u4ea4\u4e92\u8bbe\u8ba1",u="\u6211\u7684\u7b80\u5386";break;default:e="Hi, I am George",t="A Front-end Developer & Design Enthusiast",u="Check my Resume"}return Object(d.jsxs)(n.a.section,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeInOut",duration:.9,delay:.2},className:"flex flex-col sm:justify-around items-center sm:flex-row mt-12 md:mt-2",children:[Object(d.jsxs)("div",{className:"w-full md:w-1/3 text-left",children:[Object(d.jsx)(n.a.h1,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeInOut",duration:.9,delay:.1},className:"font-general-semibold text-2xl lg:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light uppercase",children:e}),Object(d.jsx)(n.a.p,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeInOut",duration:.9,delay:.2},className:"font-general-medium mt-4 text-lg md:text-xl lg:text-2xl xl:text-3xl text-center sm:text-left leading-normal text-gray-500 dark:text-gray-200",children:t}),Object(d.jsx)(n.a.div,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeInOut",duration:.9,delay:.3},className:"flex justify-center sm:block",children:Object(d.jsxs)("a",{href:"/files/GeorgeResume0701.pdf",target:"_blank",className:"font-general-medium flex justify-center items-center w-64 sm:w-96 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500","aria-label":"Download Resume",children:[Object(d.jsx)(c.a,{className:"mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100"}),Object(d.jsx)("span",{className:"text-sm sm:text-lg font-general-medium duration-100",children:u})]})})]}),Object(d.jsx)(n.a.div,{initial:{opacity:0,y:-180},animate:{opacity:1,y:0},transition:{ease:"easeInOut",duration:.9,delay:.2},className:"w-full sm:w-1/3 text-right float-right mt-8 sm:mt-0",children:Object(d.jsx)("img",{className:"w-full rounded-lg cursor-pointer",onClick:p,src:s,alt:"Developer"})})]})},g=r(104),b=r(100),p=(r(31),r(103));t.default=function(){return Object(d.jsxs)("div",{className:"container mx-auto",children:[Object(d.jsx)(m,{}),Object(d.jsx)(b.b,{children:Object(d.jsx)(g.a,{})}),Object(d.jsx)(p.a,{value:"Check all Projects here"})]})}},98:function(e,t,r){"use strict";t.a=r.p+"static/media/WeLight.6bb56a82.png"},99:function(e,t,r){"use strict";t.a=r.p+"static/media/EcoHomeCover.6ef576db.png"}}]);
//# sourceMappingURL=3.85b83371.chunk.js.map