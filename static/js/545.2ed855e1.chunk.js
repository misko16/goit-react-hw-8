"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[545],{9545:function(e,n,t){t.r(n),t.d(n,{default:function(){return x}});var r=t(5861),a=t(4687),c=t.n(a),u=t(2791),o=t(9434),s=t(9439),i=t(184),l=function(e){var n=e.handleSubmit,t=e.handleInputChange,r=e.name,a=e.number;return(0,i.jsxs)("form",{onSubmit:n,children:[(0,i.jsx)("input",{type:"text",name:"name",value:r,onChange:t,placeholder:"Enter name",required:!0}),(0,i.jsx)("input",{type:"tel",name:"number",pattern:"[0-9]+",value:a,onChange:t,placeholder:"Enter phone number",required:!0}),(0,i.jsx)("button",{type:"submit",children:"Add contact"})]})},f=function(e){var n=e.onAddContact,t=(0,u.useState)(""),r=(0,s.Z)(t,2),a=r[0],c=r[1],o=(0,u.useState)(""),f=(0,s.Z)(o,2),m=f[0],p=f[1];return(0,i.jsx)(l,{name:a,number:m,handleSubmit:function(e){e.preventDefault(),a&&m?(n({name:a,number:m}),c(""),p("")):alert("Please fill in all fields.")},handleInputChange:function(e){var n=e.target,t=n.name,r=n.value;"name"===t?c(r):"number"===t&&p(r)}})},m=function(e){var n=e.value,t=e.onChange;return(0,i.jsx)("input",{className:"filterInput ",type:"text",value:n,onChange:t,placeholder:"Search contacts"})},p=function(e){var n=e.contact,t=e.onDeleteContact,r=n.id,a=n.name,c=n.number;return(0,i.jsxs)("li",{className:"contactItem ",children:[a,": ",c,(0,i.jsx)("button",{type:"button",onClick:function(){t(r)},children:"Delete"})]})};var h=function(e){var n=e.contacts,t=e.onDeleteContact;return console.log("Contacts in ContactList:",n),(0,i.jsx)("ul",{className:"contactList ",children:n.map((function(e){return(0,i.jsx)(p,{contact:e,onDeleteContact:t},e.id)}))})},d=t(6560),v=t(9463),x=function(){var e=(0,o.v9)((function(e){return e.appReduser.contacts})),n=(0,o.v9)((function(e){return e.appReduser.filter})),t=(0,o.I0)();(0,u.useEffect)((function(){t((0,v.yF)())}),[]);var a=function(){var e=(0,r.Z)(c().mark((function e(n){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t((0,v.uK)(n));case 2:t((0,v.yF)());case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),s=function(){var e=(0,r.Z)(c().mark((function e(n){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t((0,v.GK)(n));case 2:t((0,v.yF)());case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=Array.isArray(e.items)?e.items.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())})):[];return(0,i.jsxs)("div",{className:"container",children:[(0,i.jsx)("h1",{children:"Phonebook"}),(0,i.jsx)(f,{contacts:e,onAddContact:a}),(0,i.jsx)("h2",{children:"Contacts"}),(0,i.jsx)(m,{value:n,onChange:function(e){t((0,d.T)(e.target.value))}}),(0,i.jsx)(h,{contacts:l,onDeleteContact:s})]})}}}]);
//# sourceMappingURL=545.2ed855e1.chunk.js.map