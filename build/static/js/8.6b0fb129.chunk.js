(this["webpackJsonpmy-portfolio"]=this["webpackJsonpmy-portfolio"]||[]).push([[8],{119:function(e,t,r){"use strict";r.r(t);var a=r(95),i=r(11),n=r(2),s=[{id:1,name:"180 Friendship St, Rhode Island, USA",icon:Object(n.jsx)(i.h,{})},{id:2,name:Object(n.jsx)(n.Fragment,{children:"yihao_xu@brown.edu\xa0\xa0\xa0yxu13@alumni.risd.edu"}),icon:Object(n.jsx)(i.g,{})},{id:3,name:" xuyihao342@gmail.com",icon:Object(n.jsx)(i.g,{})}],l=function(){return Object(n.jsx)("div",{className:"w-full lg:w-1/2",children:Object(n.jsxs)("div",{className:"text-left max-w-xl px-6",children:[Object(n.jsx)("h2",{className:"font-general-medium text-2xl text-primary-dark dark:text-primary-light mt-12 mb-8",children:"Contact details"}),Object(n.jsx)("ul",{className:"font-general-regular",children:s.map((function(e){return Object(n.jsxs)("li",{className:"flex ",children:[Object(n.jsx)("i",{className:"text-2xl text-gray-500 dark:text-gray-400 mr-4",children:e.icon}),Object(n.jsx)("span",{className:"text-lg mb-4 text-ternary-dark dark:text-ternary-light",children:e.name})]},e.id)}))})]})})},c=r(9),o=r(31),d=r(0),m=function(e){var t=e.inputLabel,r=e.labelFor,a=e.inputType,i=e.inputId,s=e.inputName,l=e.placeholderText,c=e.ariaLabelName;return Object(n.jsxs)("div",{className:"font-general-regular mb-4",children:[Object(n.jsx)("label",{className:"block text-lg text-primary-dark dark:text-primary-light mb-1",htmlFor:r,children:t}),Object(n.jsx)("input",{className:"w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md",type:a,id:i,name:s,placeholder:l,"aria-label":c,required:!0})]})},u={_origin:"https://api.emailjs.com"},b=function(e,t,r){if(!e)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!r)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};var p=function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.status=t?t.status:0,this.text=t?t.responseText:"Network Error"},x=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new Promise((function(a,i){var n=new XMLHttpRequest;n.addEventListener("load",(function(e){var t=e.target,r=new p(t);200===r.status||"OK"===r.text?a(r):i(r)})),n.addEventListener("error",(function(e){var t=e.target;i(new p(t))})),n.open("POST",u._origin+e,!0),Object.keys(r).forEach((function(e){n.setRequestHeader(e,r[e])})),n.send(t)}))},j=function(e,t,r,a){var i=a||u._userID,n=function(e){var t;if(!(t="string"===typeof e?document.querySelector(e):e)||"FORM"!==t.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return t}(r);b(i,e,t);var s=new FormData(n);return s.append("lib_version","3.11.0"),s.append("service_id",e),s.append("template_id",t),s.append("user_id",i),x("/api/v1.0/email/send-form",s)};function h(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,r=null;return function(){var a=arguments,i=this;r||(r=setTimeout((function(){e.apply(i,a),r=null}),t))}}var g=Object(d.createContext)(),f=function(e){var t=e.children;return Object(n.jsx)(g.Provider,{value:{throttle:h},children:t})},y=function(){var e=Object(d.useState)("Not yet sent"),t=Object(c.a)(e,2),r=t[0],a=t[1],i=Object(d.useState)(""),s=Object(c.a)(i,2),l=(s[0],s[1]),u=Object(d.useRef)(),b=Object(d.useCallback)((function(e){e.preventDefault(),a("sending"),j("service_wg3op97","template_rrg69cx",u.current,"ffBCYbjlYJo_DXMRT").then((function(e){console.log("success",e.text),a("success")}),(function(e){console.log("error",e.text),a("error"),l(e.text)}))}),[]),p=Object(n.jsx)("p",{});return"sending"===r&&(p=Object(n.jsx)("p",{children:"Sending..."})),"error"===r&&(p=Object(n.jsx)("p",{children:"OPS please wait a second and try again"})),"success"===r&&(p=Object(n.jsx)("p",{children:"Thank you for your message!"})),Object(n.jsx)(f,{children:Object(n.jsx)("div",{className:"w-full lg:w-1/2",children:Object(n.jsx)("div",{className:"leading-loose",children:Object(n.jsxs)("form",{ref:u,onSubmit:b,className:"max-w-xl m-4 p-6 sm:p-10 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left",children:[Object(n.jsx)("p",{className:"font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8",children:"Contact Form"}),Object(n.jsx)(m,{inputLabel:"Full Name",labelFor:"name",inputType:"text",inputId:"from_name",inputName:"from_name",placeholderText:"Your Name",ariaLabelName:"Name"}),Object(n.jsx)(m,{inputLabel:"Email",labelFor:"email",inputType:"email",inputId:"from_visitor_email",inputName:"from_visitor_email",placeholderText:"Your email",ariaLabelName:"Email"}),Object(n.jsx)(m,{inputLabel:"Subject",labelFor:"subject",inputType:"text",inputId:"subject",inputName:"subject",placeholderText:"Subject",ariaLabelName:"Subject"}),Object(n.jsxs)("div",{className:"mt-6",children:[Object(n.jsx)("label",{className:"block text-lg text-primary-dark dark:text-primary-light mb-2",htmlFor:"message",children:"Message"}),Object(n.jsx)("textarea",{className:"w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md",id:"message",name:"message",cols:"14",rows:"6","aria-label":"Message"})]}),Object(n.jsx)("div",{className:"font-general-medium w-40 px-4 py-2.5 text-white text-center font-medium tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg mt-6 duration-500",children:Object(n.jsx)(o.a,{title:"Send Message",type:"submit","aria-label":"Send Message"})}),Object(n.jsx)("p",{children:p})]})})})})};t.default=function(){return Object(n.jsxs)(a.a.div,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeInOut",duration:.5,delay:.1},className:"container mx-auto flex flex-col-reverse lg:flex-row py-5 lg:py-10 lg:mt-10",children:[Object(n.jsx)(y,{}),Object(n.jsx)(l,{})]})}}}]);
//# sourceMappingURL=8.6b0fb129.chunk.js.map