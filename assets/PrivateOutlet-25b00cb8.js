import{r as n,j as s,N as u,u as i}from"./index-b4b546b9.js";import{u as c,N as l}from"./useAuth-3992e221.js";const x=({children:a})=>{const[e,o]=n.useState(!1),{loggedIn:r}=c();if(!r)return s.jsx(u,{to:"/account/login"});const t=i();return console.log("location~"),s.jsxs(s.Fragment,{children:[s.jsx(l,{setShowSideBar:o,showSidebar:e,userView:!0}),s.jsx("div",{className:(t==null?void 0:t.pathname)=="/user/dashboard"?"":"container",children:a})]})};export{x as default};