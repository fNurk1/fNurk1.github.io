(this.webpackJsonpbase=this.webpackJsonpbase||[]).push([[10],{36:function(e,A,t){"use strict";t.r(A);var c=t(0),a=t.n(c),s=t(2),n=t(42),i=t(99),r=t(59),l=t(110),d=t(12),j=t(11),b=t(61),o=t(98),m=t(101),x=t(44),u=t(111),h=t(106),O=t(109),p=t(1),g=function(e){var A=e.pub,t=a.a.useState(!1),c=Object(x.a)(t,2),s=c[0],n=c[1];return Object(p.jsx)(u.a,{className:"publication-card",children:Object(p.jsxs)(o.a.Toggle,{as:u.a.Header,eventKey:A._id,className:"publication-title-column",children:[Object(p.jsx)("div",{className:"pub-category-above-title",children:A.category.type}),Object(p.jsxs)("div",{className:"publication-title",children:[" ",A.title]}),Object(p.jsxs)("div",{className:"pub-year-below-title",children:[" ",A.yearPublished," "]}),Object(p.jsx)(h.a,{variant:"",className:"button-pub",onClick:function(){return n(!0)},children:"View this Publication"}),Object(p.jsx)(i,{pub:A,show:s,onHide:function(){return n(!1)}})]})});function i(e){return Object(p.jsxs)(O.a,Object(m.a)(Object(m.a)({},e),{},{size:"lg","aria-labelledby":"contained-modal-title-vcenter",children:[Object(p.jsx)(O.a.Header,{closeButton:!0,children:Object(p.jsx)(O.a.Title,{id:"contained-modal-title-vcenter",children:A.title})}),Object(p.jsx)(O.a.Body,{children:Object(p.jsxs)(u.a.Body,{className:"publication-body-column",children:[Object(p.jsx)("div",{className:"pub-body-subheader",children:"Authors"}),Object(p.jsx)("div",{className:"pub-body-content",children:A.authors.map((function(e){return"".concat(e)})).join(", ")}),Object(p.jsx)("div",{className:"pub-body-subheader",children:"Description"}),Object(p.jsx)("div",{className:"pub-body-content pub-body-paragraph",children:A.description}),Object(p.jsx)("div",{className:"pub-body-subheader",children:A.category.categoryTitle?A.category.type.charAt(0)+A.category.type.slice(1).toLowerCase():""}),Object(p.jsx)("div",{className:"pub-body-content",children:A.category.categoryTitle?A.category.categoryTitle+(A.category.issue?", Issue ".concat(A.category.issue):"")+(A.category.volume?", Volume ".concat(A.category.volume):"")+(A.category.pages?", Page ".concat(A.category.pages):""):""}),Object(p.jsx)("div",{className:"pub-body-subheader",children:A.category.publisher?"Published by":null}),Object(p.jsx)("div",{className:"pub-body-content",children:A.category.publisher})]})}),Object(p.jsx)(O.a.Footer,{children:Object(p.jsx)(h.a,{onClick:e.onHide,children:"Close"})})]}))}},v=function(){var e=j.e;return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(o.a,{children:e.map((function(e){return Object(p.jsx)(g,{pub:e},e._id)}))})})},y=function(){var e=j.c.teamName;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(n.a,{children:Object(p.jsxs)("title",{children:[" ","Publications -"," ",e," "]})}),Object(p.jsx)(r.a,{className:"pages-top-padding text-center mt-3 mb-3",children:Object(p.jsx)("div",{className:"publication-pg-title",children:"Our Publications"})}),Object(p.jsx)(r.a,{fluid:!0,children:Object(p.jsx)(v,{})})]})},N=t.p+"static/media/glenn-carstens-peters-npxXWgQ33ZQ-unsplash.41d84077.jpg",f=function(){var e=j.b,A=j.c.teamName;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(n.a,{children:Object(p.jsxs)("title",{children:[" ","Home -"," ",A," "]})}),Object(p.jsxs)(r.a,{fluid:!0,className:"pages-top-padding",children:[Object(p.jsx)("div",{className:"landing-center-title",children:"About Us"}),Object(p.jsx)("img",{src:N,align:"left",className:"left"}),e.aboutUs.map((function(e){return Object(p.jsx)("div",{className:"landing-center-content",children:e})}))]})]})},w=t(83),P=t(47),T=function(e){var A=e.member;return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("div",{className:"row mb-2",style:{width:"70%",padding:"5px"},children:Object(p.jsxs)("div",{className:"row g-0",children:[Object(p.jsx)("div",{className:"col-md-auto",children:Object(p.jsx)(u.a.Img,{style:{width:"160px",height:"160px"},src:P.a,className:"team-member-picture "})}),Object(p.jsxs)("div",{className:"col teamMemberBody",children:[Object(p.jsx)("div",{className:"fontx team-member-name d-block w-100 text-left",children:A.fullName}),Object(p.jsx)("div",{className:"team-member-position d-block w-100 text-left",children:A.position}),Object(p.jsx)("div",{className:"team-member-summary d-block w-100 text-left",children:A.summary})]})]})})})},E=function(){var e=j.d,A=j.c.teamName;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(n.a,{children:Object(p.jsxs)("title",{children:[" ","Team -"," ",A," "]})}),Object(p.jsx)(r.a,{className:"pages-top-padding text-center mt-3 mb-3",children:Object(p.jsx)("div",{className:"team-pg-title",children:"Meet Our Team"})}),Object(p.jsx)(r.a,{fluid:!0,className:"team-card-container",children:Object(p.jsx)(w.a,{className:"card-deck",children:e.map((function(e){return Object(p.jsx)(T,{member:e},e._id)}))})})]})},k=t.p+"static/media/certificatepic.a3028e4e.png",B="bg-secondary",V=function(e){var A=e.achievement;return B="bg-secondary"===B?"bg-light":"bg-secondary",Object(p.jsx)("div",{className:"row mb-2",style:{width:"70%"},children:Object(p.jsxs)("div",{className:"row g-0",id:"achievementImage",children:[Object(p.jsx)("div",{className:"col-md-auto h-100",children:Object(p.jsx)(u.a.Img,{variant:"top",src:k,style:{height:"60px",width:"60px"}})}),Object(p.jsxs)("div",{className:"col achievementBody",children:[Object(p.jsx)("div",{className:"fontx award-name d-block w-100 text-left",children:A.title}),Object(p.jsx)("div",{className:"award-year d-block w-100 text-left",children:A.yearAwarded}),Object(p.jsx)("div",{className:"award-summary d-block w-100 text-left",children:A.description})]})]})})},z=[{title:"Publications",path:"/publication",exact:!0,component:y},{title:"Team",path:"/team",exact:!0,component:E},{title:"Achievements",path:"/achievements",exact:!0,component:function(){var e=j.a,A=j.c.teamName;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(n.a,{children:Object(p.jsxs)("title",{children:[" ","Achievements -"," ",A," "]})}),Object(p.jsx)(r.a,{className:"pages-top-padding text-center mt-3 mb-3",children:Object(p.jsx)("div",{className:"team-pg-title w-100 text-center",children:"Achievements"})}),Object(p.jsx)(r.a,{fluid:!0,className:"team-card-container",children:Object(p.jsx)(w.a,{className:"card-deck",children:e.map((function(e,A){return Object(p.jsx)(V,{style:{display:"flex",flexDirection:A%2===0?"row":"row-reverse"},achievement:e},e._id)}))})})]})}}],H=[{title:"Home",path:"/",exact:!0,component:f}],K=function(){var e=z.filter((function(e){var A=e.title;return j.f.pages.includes(A.toUpperCase())}));return[].concat(H,Object(b.a)(e))},Y=function(){j.c.twitterHandle;var e=j.c.orgName,A=j.c.teamName,t=K();return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(i.a,{collapseOnSelect:!0,expand:"md",variant:"",fixed:"top",children:Object(p.jsxs)(r.a,{fluid:!0,children:[Object(p.jsxs)(i.a.Brand,{as:d.b,to:"/",children:[A," ","@",e]}),Object(p.jsx)(i.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(p.jsxs)(i.a.Collapse,{id:"responsive-navbar-nav",children:[Object(p.jsx)(l.a,{className:"me-auto"}),Object(p.jsx)(l.a,{children:t.map((function(e,A){var t=e.path,c=e.title;return Object(p.jsx)(l.a.Link,{as:d.b,to:t,children:c},A)}))})]})]})})})},W=(t(97),t(51),t(52),j.f.template.theme);"light"===W?t.e(0).then(t.t.bind(null,107,7)):"dark"===W?t.e(2).then(t.t.bind(null,108,7)):t.e(0).then(t.t.bind(null,107,7));A.default=function(){var e=j.c.teamName,A=K().map((function(e){var A=e.path,t=e.exact,c=e.component;return Object(p.jsx)(s.a,{exact:t,path:A,children:Object(p.jsx)("div",{children:c?Object(p.jsx)(c,{}):null})},A)}));return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(n.a,{children:Object(p.jsx)("title",{children:e})}),Object(p.jsx)(Y,{}),Object(p.jsx)(s.c,{children:A})]})}},47:function(e,A,t){"use strict";A.a="data:image/jpeg;base64,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"},51:function(e,A,t){},52:function(e,A,t){},97:function(e,A,t){}}]);
//# sourceMappingURL=10.5ebd9214.chunk.js.map