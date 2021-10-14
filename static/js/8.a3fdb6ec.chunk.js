(this.webpackJsonpbase=this.webpackJsonpbase||[]).push([[8],{110:function(e,t,a){"use strict";var r=a(52);t.a=Object(r.a)("card-deck")},118:function(e,t,a){},119:function(e,t,a){"use strict";var r=a(37),c=a(38),n=a(39),s=a.n(n),i=a(0),A=a.n(i),l=a(45),o=a(41),d=a(43),b=A.a.createContext(null);b.displayName="AccordionContext";var j=b,u=["as","children","eventKey","onClick"];var m=A.a.forwardRef((function(e,t){var a=e.as,n=void 0===a?"button":a,s=e.children,l=e.eventKey,o=e.onClick,b=Object(c.a)(e,u),m=function(e,t){var a=Object(i.useContext)(j),r=Object(i.useContext)(d.a);return function(c){r&&r(e===a?null:e,c),t&&t(c)}}(l,o);return"button"===n&&(b.type="button"),A.a.createElement(n,Object(r.a)({ref:t,onClick:m},b),s)})),x=a(53),p=["children","eventKey"],O=A.a.forwardRef((function(e,t){var a=e.children,n=e.eventKey,s=Object(c.a)(e,p),l=Object(i.useContext)(j);return A.a.createElement(d.a.Provider,{value:null},A.a.createElement(x.a,Object(r.a)({ref:t,in:l===n},s),A.a.createElement("div",null,A.a.Children.only(a))))}));O.displayName="AccordionCollapse";var f=O,h=["as","activeKey","bsPrefix","children","className","onSelect"],v=A.a.forwardRef((function(e,t){var a=Object(l.a)(e,{activeKey:"onSelect"}),n=a.as,i=void 0===n?"div":n,b=a.activeKey,u=a.bsPrefix,m=a.children,x=a.className,p=a.onSelect,O=Object(c.a)(a,h),f=s()(x,Object(o.a)(u,"accordion"));return A.a.createElement(j.Provider,{value:b||null},A.a.createElement(d.a.Provider,{value:p||null},A.a.createElement(i,Object(r.a)({ref:t},O,{className:f}),m)))}));v.displayName="Accordion",v.Toggle=m,v.Collapse=f;t.a=v},120:function(e,t,a){"use strict";var r=a(37),c=a(38),n=a(39),s=a.n(n),i=a(0),A=a.n(i),l=a(45),o=a(52),d=a(41),b=["bsPrefix","className","as"],j=A.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,i=e.as,l=Object(c.a)(e,b);a=Object(d.a)(a,"navbar-brand");var o=i||(l.href?"a":"span");return A.a.createElement(o,Object(r.a)({},l,{ref:t,className:s()(n,a)}))}));j.displayName="NavbarBrand";var u=j,m=a(53),x=a(46),p=["children","bsPrefix"],O=A.a.forwardRef((function(e,t){var a=e.children,n=e.bsPrefix,s=Object(c.a)(e,p);return n=Object(d.a)(n,"navbar-collapse"),A.a.createElement(x.a.Consumer,null,(function(e){return A.a.createElement(m.a,Object(r.a)({in:!(!e||!e.expanded)},s),A.a.createElement("div",{ref:t,className:n},a))}))}));O.displayName="NavbarCollapse";var f=O,h=a(61),v=["bsPrefix","className","children","label","as","onClick"],g=A.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,l=e.children,o=e.label,b=e.as,j=void 0===b?"button":b,u=e.onClick,m=Object(c.a)(e,v);a=Object(d.a)(a,"navbar-toggler");var p=Object(i.useContext)(x.a)||{},O=p.onToggle,f=p.expanded,g=Object(h.a)((function(e){u&&u(e),O&&O()}));return"button"===j&&(m.type="button"),A.a.createElement(j,Object(r.a)({},m,{ref:t,onClick:g,"aria-label":o,className:s()(n,a,!f&&"collapsed")}),l||A.a.createElement("span",{className:a+"-icon"}))}));g.displayName="NavbarToggle",g.defaultProps={label:"Toggle navigation"};var y=g,N=a(43),P=["bsPrefix","expand","variant","bg","fixed","sticky","className","children","as","expanded","onToggle","onSelect","collapseOnSelect"],w=Object(o.a)("navbar-text",{Component:"span"}),T=A.a.forwardRef((function(e,t){var a=Object(l.a)(e,{expanded:"onToggle"}),n=a.bsPrefix,o=a.expand,b=a.variant,j=a.bg,u=a.fixed,m=a.sticky,p=a.className,O=a.children,f=a.as,h=void 0===f?"nav":f,v=a.expanded,g=a.onToggle,y=a.onSelect,w=a.collapseOnSelect,T=Object(c.a)(a,P),E=Object(d.a)(n,"navbar"),C=Object(i.useCallback)((function(){y&&y.apply(void 0,arguments),w&&v&&g&&g(!1)}),[y,w,v,g]);void 0===T.role&&"nav"!==h&&(T.role="navigation");var k=E+"-expand";"string"===typeof o&&(k=k+"-"+o);var B=Object(i.useMemo)((function(){return{onToggle:function(){return g&&g(!v)},bsPrefix:E,expanded:!!v}}),[E,v,g]);return A.a.createElement(x.a.Provider,{value:B},A.a.createElement(N.a.Provider,{value:C},A.a.createElement(h,Object(r.a)({ref:t},T,{className:s()(p,E,o&&k,b&&E+"-"+b,j&&"bg-"+j,m&&"sticky-"+m,u&&"fixed-"+u)}),O)))}));T.defaultProps={expand:!0,variant:"light",collapseOnSelect:!1},T.displayName="Navbar",T.Brand=u,T.Toggle=y,T.Collapse=f,T.Text=w;t.a=T},36:function(e,t,a){"use strict";a.r(t);a(0);var r=a(2),c=a(42),n=a(120),s=a(57),i=a(88),A=a(12),l=a(11),o=a(60),d=a(119),b=a(128),j=a(129),u=a(44),m=a(127),x=a(1),p=function(e){var t=e.pub;return Object(x.jsx)("div",{as:m.a.Header,eventKey:t._id,className:"row mb-2",style:{width:"100%"},children:Object(x.jsxs)("div",{className:"publication-row row",children:[Object(x.jsxs)("div",{className:"col-md-auto",children:[Object(x.jsx)("div",{className:"pub-year-below-title row",children:t.yearPublished}),Object(x.jsx)("div",{className:"row",children:t.link&&Object(x.jsx)("div",{className:"pub-pdf-link",children:Object(x.jsx)("a",{style:{fontSize:"16px"},href:t.link,target:"_blank",rel:"noreferrer",children:"PDF"})})})]}),Object(x.jsxs)("div",{className:"col",children:[Object(x.jsx)("div",{className:"publication-title row",children:t.title}),Object(x.jsx)("div",{className:"row",children:t.category.categoryTitle&&Object(x.jsxs)("div",{className:"publication-category-info",style:{fontStyle:"italic"},children:[t.category.categoryTitle,t.category.categoryTitle&&", ".concat(t.category.type.charAt(0)+t.category.type.slice(1).toLowerCase()),t.category.issue&&", Issue ".concat(t.category.issue),t.category.volume&&", Volume ".concat(t.category.volume),t.category.pages&&", Page ".concat(t.category.pages),",  ".concat(t.yearPublished)]})}),Object(x.jsx)("div",{className:"row",children:t.authors.map((function(e){return"".concat(e)})).join(", ")})]})]})})},O=function(e){var t=e.teamPublications,a=e.groupBy;return Object(x.jsx)(x.Fragment,{children:a?t.filter((function(e){return e.category.type.toUpperCase()===a.toUpperCase()})).map((function(e){return Object(x.jsx)(p,{pub:e},e._id)})):t.map((function(e){return Object(x.jsx)(p,{pub:e},e._id)}))})},f=function(e){var t=e.teamPublications;return Object(x.jsx)(j.a,{className:"mb-2",children:Object.keys(u.categoryTypes).map((function(e){return a=e,t.filter((function(e){return e.category.type.toUpperCase()===a.toUpperCase()})).length>0&&Object(x.jsx)(b.a,{style:{color:"var(--researchify-text-color)"},eventKey:a,title:a.toUpperCase(),children:Object(x.jsx)(O,{groupBy:a,teamPublications:t})});var a}))})},h=a(49),v=function(){var e=l.f.publicationOptions,t=Object(h.a)(l.e,e.sortBy);return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(d.a,{children:function(){switch(e.groupBy){case u.groupByOptions.CATEGORY:return Object(x.jsx)(f,{teamPublications:t});default:return Object(x.jsx)(O,{teamPublications:t})}}()})})},g=function(){var e=l.c.teamName;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(c.a,{children:Object(x.jsxs)("title",{children:[" ","Publications -"," ",e," "]})}),Object(x.jsxs)(s.a,{className:"pages-top-padding page-publications-side-padding mt-3 mb-3",children:[Object(x.jsx)("div",{className:"publication-pg-title",children:"Our Publications"}),Object(x.jsx)(s.a,{fluid:!0,className:"publication-container-body",children:Object(x.jsx)(v,{})})]})]})},y=a(58),N=a.p+"static/media/glenn-carstens-peters-npxXWgQ33ZQ-unsplash.41d84077.jpg",P=function(){var e=l.e;return e.sort((function(e,t){return e.yearPublished<t.yearPublished?1:-1})),e=e.slice(0,5),Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(d.a,{children:e.map((function(e){return Object(x.jsx)(p,{pub:e},e._id)}))})})},w=function(){var e=l.b,t=l.c.teamName;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(c.a,{children:Object(x.jsxs)("title",{children:[" ","Home -"," ",t," "]})}),Object(x.jsxs)(s.a,{fluid:!0,className:"pages-top-padding pages-side-padding",children:[Object(x.jsxs)(s.a,{fluid:!0,className:"container-body",children:[Object(x.jsx)("img",{src:N,alt:"Computer",align:"left",className:"left landing-image",style:{width:"35%"}}),Object(x.jsx)("div",{className:"landing-center-content",children:Object(y.a)(e.aboutUs)})]}),Object(x.jsxs)(s.a,{fluid:!0,className:"container-recent-pub-body",children:[Object(x.jsx)("div",{className:"recent-publications-title",children:"Recent Publications"}),Object(x.jsx)("div",{className:"recent-publications-body",children:Object(x.jsx)(P,{})})]})]})]})},T=a(110),E=a(48),C=function(e){var t,a=e.member;return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("div",{className:"row mb-2",style:{width:"87%",padding:"5px"},children:Object(x.jsxs)("div",{className:"row g-0",children:[Object(x.jsx)("div",{className:"col-md-auto",children:Object(x.jsx)(m.a.Img,{style:{width:"160px",height:"160px"},src:null!==(t=a.memberPic)&&void 0!==t?t:E.a,className:"team-member-picture "})}),Object(x.jsxs)("div",{className:"col teamMemberBody",children:[Object(x.jsx)("div",{className:"fontx team-member-name d-block w-100 text-left",children:a.fullName}),Object(x.jsx)("div",{className:"team-member-position d-block w-100 text-left",children:a.position}),Object(x.jsx)("div",{className:"team-member-summary d-block w-100 text-left",children:a.summary})]})]})})})},k=function(){var e=l.d,t=l.c.teamName;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(c.a,{children:Object(x.jsxs)("title",{children:[" ","Team -"," ",t," "]})}),Object(x.jsx)(s.a,{className:"pages-top-padding text-center mt-3 mb-3",children:Object(x.jsx)("div",{className:"team-pg-title",children:"Meet Our Team"})}),Object(x.jsx)(s.a,{fluid:!0,className:"team-card-container",children:Object(x.jsx)(T.a,{className:"card-deck",children:e.map((function(e){return Object(x.jsx)(C,{member:e},e._id)}))})})]})},B=a.p+"static/media/awardPic.d96d2a2b.png",L="bg-secondary",K=function(e){var t=e.achievement;return L="bg-secondary"===L?"bg-light":"bg-secondary",Object(x.jsx)("div",{className:"row mb-2",style:{width:"87%"},children:Object(x.jsxs)("div",{className:"row g-0",id:"achievementImage",children:[Object(x.jsx)("div",{className:"col-md-auto h-100",children:Object(x.jsx)(m.a.Img,{variant:"top",src:B,style:{height:"60px",width:"60px"}})}),Object(x.jsxs)("div",{className:"col achievementBody",children:[Object(x.jsx)("div",{className:"fontx award-name d-block w-100 text-left",children:t.title}),Object(x.jsx)("div",{className:"award-year d-block w-100 text-left",children:t.yearAwarded}),Object(x.jsx)("div",{className:"award-summary d-block w-100 text-left",children:t.description})]})]})})},R=[{title:"Publications",path:"/publication",exact:!0,component:g},{title:"Team",path:"/team",exact:!0,component:k},{title:"Achievements",path:"/achievements",exact:!0,component:function(){var e=l.a,t=l.c.teamName;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(c.a,{children:Object(x.jsxs)("title",{children:[" ","Achievements -"," ",t," "]})}),Object(x.jsx)(s.a,{className:"pages-top-padding text-center mt-3 mb-3",children:Object(x.jsx)("div",{className:"team-pg-title w-100 text-center",children:"Achievements"})}),Object(x.jsx)(s.a,{fluid:!0,className:"team-card-container",children:Object(x.jsx)(T.a,{className:"card-deck",children:e.map((function(e,t){return Object(x.jsx)(K,{style:{display:"flex",flexDirection:t%2===0?"row":"row-reverse"},achievement:e},e._id)}))})})]})}}],z=[{title:"Home",path:"/",exact:!0,component:w}],S=function(){var e=R.filter((function(e){var t=e.title;return l.f.pages.includes(t.toUpperCase())}));return[].concat(z,Object(o.a)(e))},V=function(){l.c.twitterHandle;var e=l.c.orgName,t=l.c.teamName,a=S();return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(n.a,{collapseOnSelect:!0,expand:"md",variant:"",fixed:"top",children:Object(x.jsxs)(s.a,{fluid:!0,children:[Object(x.jsxs)(n.a.Brand,{as:A.b,to:"/",children:[t," ","@",e]}),Object(x.jsx)(n.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(x.jsxs)(n.a.Collapse,{id:"responsive-navbar-nav",children:[Object(x.jsx)(i.a,{className:"me-auto"}),Object(x.jsx)(i.a,{children:a.map((function(e,t){var a=e.path,r=e.title;return Object(x.jsx)(i.a.Link,{as:A.b,to:a,children:r},t)}))})]})]})})})},Y=(a(118),a(50),a(51),l.f.template.theme);"light"===Y?a.e(0).then(a.t.bind(null,125,7)):"dark"===Y?a.e(3).then(a.t.bind(null,126,7)):a.e(0).then(a.t.bind(null,125,7));t.default=function(){var e=l.c.teamName,t=S().map((function(e){var t=e.path,a=e.exact,c=e.component;return Object(x.jsx)(r.a,{exact:a,path:t,children:Object(x.jsx)("div",{children:c?Object(x.jsx)(c,{}):null})},t)}));return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(c.a,{children:Object(x.jsx)("title",{children:e})}),Object(x.jsx)(V,{}),Object(x.jsx)(r.c,{children:t})]})}},44:function(e,t){e.exports={pageSize:10,categoryPageSize:5,categoryTypes:{Journal:"Journal",Conference:"Conference",Book:"Book",Other:"Other"},groupByOptions:{NONE:"None",CATEGORY:"Category"},sortingOptions:{TITLE:"Title",AUTHOR:"Author",YEAR:"Year"}}},48:function(e,t,a){"use strict";t.a="data:image/jpeg;base64,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"},49:function(e,t,a){"use strict";var r=a(44);t.a=function(e,t){switch(t){case r.sortingOptions.AUTHOR:e.sort((function(e,t){return e.authors[0].toLowerCase()>t.authors[0].toLowerCase()?1:e.authors[0].toLowerCase()<t.authors[0].toLowerCase()?-1:0}));break;case r.sortingOptions.TITLE:e.sort((function(e,t){return e.title.toLowerCase()>t.title.toLowerCase()?1:e.title.toLowerCase()<t.title.toLowerCase()?-1:0}));break;case r.sortingOptions.YEAR:e.sort((function(e,t){return e.yearPublished>t.yearPublished?-1:e.yearPublished<t.yearPublished?1:0}));break;case"Category Title":e.sort((function(e,t){return e.category.categoryTitle.toLowerCase()>t.category.categoryTitle.toLowerCase()?1:e.category.categoryTitle.toLowerCase()<t.category.categoryTitle.toLowerCase()?-1:0}));break;default:e.sort((function(e,t){return e.title.toLowerCase()>t.title.toLowerCase()?1:e.title.toLowerCase()<t.title.toLowerCase()?-1:0})),e.sort((function(e,t){return e.yearPublished>t.yearPublished?-1:e.yearPublished<t.yearPublished?1:0}))}return e}},50:function(e,t,a){},51:function(e,t,a){},57:function(e,t,a){"use strict";var r=a(37),c=a(38),n=a(39),s=a.n(n),i=a(0),A=a.n(i),l=a(41),o=["bsPrefix","fluid","as","className"],d=A.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.fluid,i=e.as,d=void 0===i?"div":i,b=e.className,j=Object(c.a)(e,o),u=Object(l.a)(a,"container"),m="string"===typeof n?"-"+n:"-fluid";return A.a.createElement(d,Object(r.a)({ref:t},j,{className:s()(b,n?""+u+m:u)}))}));d.displayName="Container",d.defaultProps={fluid:!1},t.a=d}}]);
//# sourceMappingURL=8.a3fdb6ec.chunk.js.map