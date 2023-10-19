import{r as u,u as f,a as v,b as w,j as s,L as l,e as o,c as S,N as k}from"./index-9d46a790.js";import{M as z,B as p,a as D,u as L}from"./useAuth-8cbff9d1.js";const y=({setShowSideBar:i,showSidebar:t,userView:a})=>{var d,c,m,x,g,j;const[r,h]=u.useState(!1),e=f(N=>N.auth),n=v(),b=w();return s.jsx("header",{id:a?"":"page-topbar",className:a?"bg-white":"",children:s.jsxs("div",{className:"navbar-header",children:[s.jsx("div",{className:"d-flex",children:s.jsxs("div",{className:"navbar-brand-box",children:[s.jsxs(l,{to:"/",className:"logo logo-dark",children:[s.jsx("span",{className:"logo-sm"}),s.jsx("span",{className:"logo-lg"})]}),s.jsxs(l,{to:"/",className:"logo logo-light",children:[s.jsx("span",{className:"logo-sm"}),s.jsx("span",{className:"logo-lg"})]}),a?s.jsx(l,{to:"/",children:s.jsx("img",{src:"/KLEU.png",style:{width:"40px"}})}):"",a?null:s.jsx("button",{type:"button",className:"btn btn-sm px-3 font-size-16 d-lg-none header-item","data-toggle":"collapse",onClick:()=>{i(!t)},"data-target":"#topnav-menu-content",children:s.jsx("i",{className:"fa fa-fw fa-bars"})})]})}),s.jsx("div",{}),s.jsxs("div",{className:"d-flex align-items-center",children:[a&&((d=e==null?void 0:e.user)==null?void 0:d.type)=="admin"?(c=n==null?void 0:n.pathname)!=null&&c.includes("/admin/")?"":s.jsx(l,{to:"/admin",children:s.jsxs(o.Button,{type:"button",color:"danger",className:"ms-3",children:[s.jsx(z,{size:"25"})," Admin Dashboard"]})}):(m=n==null?void 0:n.pathname)!=null&&m.includes("/user/")?"":s.jsx(l,{to:"/user/dashboard",children:s.jsxs(o.Button,{type:"button",color:"danger",className:"ms-3",children:[s.jsx(p,{size:"25"})," User Dashboard"]})}),s.jsxs(o.Dropdown,{isOpen:r,toggle:()=>h(!r),className:"d-inline-block",children:[s.jsxs(o.DropdownToggle,{className:"btn header-item ",id:"page-header-user-dropdown",tag:"button",children:[(x=e==null?void 0:e.user)!=null&&x.profile_picture?s.jsx("img",{className:"img-thumbnail rounded-circle avatar-sm",src:(g=e==null?void 0:e.user)==null?void 0:g.profile_picture}):a?s.jsx(p,{size:"30"}):s.jsx(D,{size:"30"}),s.jsx("span",{className:"d-none d-xl-inline-block ms-2 me-1 fw-bolder",children:((j=e==null?void 0:e.user)==null?void 0:j.firstName)||"Admin"}),s.jsx("i",{className:"mdi mdi-chevron-down d-none d-xl-inline-block"})]}),s.jsxs(o.DropdownMenu,{className:"dropdown-menu-end",children:[s.jsxs(o.DropdownItem,{tag:"a",href:"/user/profile",children:[" ",s.jsx("i",{className:"bx bx-user font-size-16 align-middle me-1"}),"Profile"," "]}),s.jsx("div",{className:"dropdown-divider"}),s.jsxs(l,{to:"/",className:"dropdown-item",onClick:()=>{b(S()),localStorage.clear()},children:[s.jsx("i",{className:"bx bx-power-off font-size-16 align-middle me-1 text-danger"}),s.jsx("span",{children:"Logout"})]})]})]})]})]})})},M=({children:i})=>{const[t,a]=u.useState(!1),{loggedIn:r}=L();return r?s.jsxs(s.Fragment,{children:[s.jsx(y,{setShowSideBar:a,showSidebar:t,userView:!0}),s.jsx("div",{className:"container",children:i})]}):s.jsx(k,{to:"/account/login"})};export{M as default};
