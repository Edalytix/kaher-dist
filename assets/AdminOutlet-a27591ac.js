import{a as Hi,j as s,B as Bi,b as Mi,H as _i,c as Gi,d as Ki,F as Xi,u as Yi,r as w,e as qi,R as Ji,L as x,f as Qi,N as Ti}from"./index-9d880e3e.js";import{M as t,B as Wi,a as Zi,b as $i,u as hi,N as er}from"./useAuth-da591932.js";const sr=({showSidebar:m,admin:d,setShowSideBar:p})=>{var k,j,u,g,N,b,z,F,R,V,D,P,S,C,U,y,A,B,M,I,L,O,E,H,_,G,K,X,Y,q,J,Q,T,W,Z,$,h,ee,se,ie,re,oe,ne,le,ae,me,ce,de,pe,te,we,fe,ve,xe,ke,je,ue,ge,Ne,be,ze,Fe,Re,Ve,De,Pe,Se,Ce,Ue,ye,Ae,Be,Me,Ie,Le,Oe,Ee,He,_e,Ge,Ke,Xe,Ye,qe,Je,Qe,Te,We,Ze,$e,he,es,ss,is,rs,os,ns,ls,as,ms,cs,ds,ps,ts,ws,fs,vs,xs,ks,js,us,gs,Ns,bs,zs,Fs,Rs,Vs,Ds,Ps,Ss,Cs,Us,ys,As,Bs,Ms,Is,Ls,Os,Es,Hs,_s,Gs,Ks,Xs,Ys,qs,Js,Qs,Ts,Ws,Zs,$s,hs,ei,si,ii,ri,oi,ni,li,ai,mi,ci,di,pi,ti,wi,fi,vi,xi,ki,ji,ui,gi,Ni,bi,zi,Fi,Ri,Vi,Di,Pi,Si,Ci,Ui,yi,Ai;const e=Hi(i=>i.auth),n=[{name:"Dashboard",icons:s.jsx(Bi,{size:"15"}),view:!0,child:[{name:"View Users Data",link:"/admin/users",view:!0},{name:"View Applications Data",link:"/admin/applications",view:((j=(k=e==null?void 0:e.user)==null?void 0:k.role)==null?void 0:j._id)=="649c0a7436862aa02b6437b2"||((g=(u=e==null?void 0:e.user)==null?void 0:u.role)==null?void 0:g._id)=="6528e93f3ac77b89a516e9f2"||((b=(N=e==null?void 0:e.user)==null?void 0:N.role)==null?void 0:b._id)=="6528e94f3ac77b89a516ea38"||((F=(z=e==null?void 0:e.user)==null?void 0:z.role)==null?void 0:F._id)=="66167055ca5bcab4ea9cc13b"?!0:""}]},{name:"Research/ Publication Incentives",icons:s.jsx(Mi,{size:"15"}),view:((D=(V=(R=e==null?void 0:e.user)==null?void 0:R.role)==null?void 0:V.permissions)==null?void 0:D.workflows)=="edit"||((C=(S=(P=e==null?void 0:e.user)==null?void 0:P.role)==null?void 0:S.permissions)==null?void 0:C.workflows)=="view",child:[{name:"View / Manage Research/ Publication Incentives",link:"/admin/view-workflows",view:((A=(y=(U=e==null?void 0:e.user)==null?void 0:U.role)==null?void 0:y.permissions)==null?void 0:A.workflows)=="edit"||((I=(M=(B=e==null?void 0:e.user)==null?void 0:B.role)==null?void 0:M.permissions)==null?void 0:I.workflows)=="view"},{name:"Create New Research/ Publication Incentives",link:"/admin/create-workflow",view:((E=(O=(L=e==null?void 0:e.user)==null?void 0:L.role)==null?void 0:O.permissions)==null?void 0:E.workflows)=="edit"}]},{name:"Forms",icons:s.jsx(t,{size:"15"}),view:((G=(_=(H=e==null?void 0:e.user)==null?void 0:H.role)==null?void 0:_.permissions)==null?void 0:G.forms)=="edit"||((Y=(X=(K=e==null?void 0:e.user)==null?void 0:K.role)==null?void 0:X.permissions)==null?void 0:Y.forms)=="view",child:[{name:"View / Manage Forms",link:"/admin/view-forms",view:((Q=(J=(q=e==null?void 0:e.user)==null?void 0:q.role)==null?void 0:J.permissions)==null?void 0:Q.forms)=="edit"||((Z=(W=(T=e==null?void 0:e.user)==null?void 0:T.role)==null?void 0:W.permissions)==null?void 0:Z.forms)=="view"},{name:"Create New Form",link:"/admin/create-form",view:((ee=(h=($=e==null?void 0:e.user)==null?void 0:$.role)==null?void 0:h.permissions)==null?void 0:ee.forms)=="edit"}]},{name:"Apprisal Forms",icons:s.jsx(t,{size:"15"}),view:((re=(ie=(se=e==null?void 0:e.user)==null?void 0:se.role)==null?void 0:ie.permissions)==null?void 0:re.forms)=="edit"||((le=(ne=(oe=e==null?void 0:e.user)==null?void 0:oe.role)==null?void 0:ne.permissions)==null?void 0:le.forms)=="view",child:[{name:"View / Manage Apprisal Forms",link:"/admin/view-apprisal-forms",view:((ce=(me=(ae=e==null?void 0:e.user)==null?void 0:ae.role)==null?void 0:me.permissions)==null?void 0:ce.forms)=="edit"||((te=(pe=(de=e==null?void 0:e.user)==null?void 0:de.role)==null?void 0:pe.permissions)==null?void 0:te.forms)=="view"},{name:"Create New Apprisal Form",link:"/admin/create-apprisal-form",view:((ve=(fe=(we=e==null?void 0:e.user)==null?void 0:we.role)==null?void 0:fe.permissions)==null?void 0:ve.forms)=="edit"}]},{name:"Scrunti Officer",icons:s.jsx(t,{size:"15"}),view:((je=(ke=(xe=e==null?void 0:e.user)==null?void 0:xe.role)==null?void 0:ke.permissions)==null?void 0:je.forms)=="edit"||((Ne=(ge=(ue=e==null?void 0:e.user)==null?void 0:ue.role)==null?void 0:ge.permissions)==null?void 0:Ne.forms)=="view",child:[{name:"View / Manage Scrunti Officer",link:"/admin/view-scrutni-officer",view:((Fe=(ze=(be=e==null?void 0:e.user)==null?void 0:be.role)==null?void 0:ze.permissions)==null?void 0:Fe.forms)=="edit"||((De=(Ve=(Re=e==null?void 0:e.user)==null?void 0:Re.role)==null?void 0:Ve.permissions)==null?void 0:De.forms)=="view"}]},{name:"HOD",icons:s.jsx(t,{size:"15"}),view:((Ce=(Se=(Pe=e==null?void 0:e.user)==null?void 0:Pe.role)==null?void 0:Se.permissions)==null?void 0:Ce.forms)=="edit"||((Ae=(ye=(Ue=e==null?void 0:e.user)==null?void 0:Ue.role)==null?void 0:ye.permissions)==null?void 0:Ae.forms)=="view",child:[{name:"View / hod",link:"/admin/view-hod",view:((Ie=(Me=(Be=e==null?void 0:e.user)==null?void 0:Be.role)==null?void 0:Me.permissions)==null?void 0:Ie.forms)=="edit"||((Ee=(Oe=(Le=e==null?void 0:e.user)==null?void 0:Le.role)==null?void 0:Oe.permissions)==null?void 0:Ee.forms)=="view"}]},{name:"Users",icons:s.jsx(_i,{size:"15"}),view:((Ge=(_e=(He=e==null?void 0:e.user)==null?void 0:He.role)==null?void 0:_e.permissions)==null?void 0:Ge.users)=="edit"||((Ye=(Xe=(Ke=e==null?void 0:e.user)==null?void 0:Ke.role)==null?void 0:Xe.permissions)==null?void 0:Ye.users)=="view",child:[{name:"View / Manage Users",link:"/admin/view-users",view:((Qe=(Je=(qe=e==null?void 0:e.user)==null?void 0:qe.role)==null?void 0:Je.permissions)==null?void 0:Qe.users)=="edit"||((Ze=(We=(Te=e==null?void 0:e.user)==null?void 0:Te.role)==null?void 0:We.permissions)==null?void 0:Ze.users)=="view"},{name:"Create New User",link:"/admin/create-user",view:((es=(he=($e=e==null?void 0:e.user)==null?void 0:$e.role)==null?void 0:he.permissions)==null?void 0:es.users)=="edit"}]},{name:"Roles",icons:s.jsx(Gi,{size:"15"}),view:((rs=(is=(ss=e==null?void 0:e.user)==null?void 0:ss.role)==null?void 0:is.permissions)==null?void 0:rs.roles)=="edit"||((ls=(ns=(os=e==null?void 0:e.user)==null?void 0:os.role)==null?void 0:ns.permissions)==null?void 0:ls.roles)=="view",child:[{name:"View / Manage Roles",link:"/admin/view-roles",view:((cs=(ms=(as=e==null?void 0:e.user)==null?void 0:as.role)==null?void 0:ms.permissions)==null?void 0:cs.roles)=="edit"||((ts=(ps=(ds=e==null?void 0:e.user)==null?void 0:ds.role)==null?void 0:ps.permissions)==null?void 0:ts.roles)=="view"},{name:"Create New Role",link:"/admin/create-role",view:((vs=(fs=(ws=e==null?void 0:e.user)==null?void 0:ws.role)==null?void 0:fs.permissions)==null?void 0:vs.roles)=="edit"}]},{name:"Departments",icons:s.jsx(Ki,{size:"15"}),view:((js=(ks=(xs=e==null?void 0:e.user)==null?void 0:xs.role)==null?void 0:ks.permissions)==null?void 0:js.departments)=="edit"||((Ns=(gs=(us=e==null?void 0:e.user)==null?void 0:us.role)==null?void 0:gs.permissions)==null?void 0:Ns.departments)=="view",child:[{name:"View / Manage Departments",link:"/admin/view-departments",view:((Fs=(zs=(bs=e==null?void 0:e.user)==null?void 0:bs.role)==null?void 0:zs.permissions)==null?void 0:Fs.departments)=="edit"||((Ds=(Vs=(Rs=e==null?void 0:e.user)==null?void 0:Rs.role)==null?void 0:Vs.permissions)==null?void 0:Ds.departments)=="view"},{name:"Create New Department",link:"/admin/create-departments",view:((Cs=(Ss=(Ps=e==null?void 0:e.user)==null?void 0:Ps.role)==null?void 0:Ss.permissions)==null?void 0:Cs.departments)=="edit"}]},{name:"Applications",icons:s.jsx(Bi,{size:"15"}),view:((As=(ys=(Us=e==null?void 0:e.user)==null?void 0:Us.role)==null?void 0:ys.permissions)==null?void 0:As.applications)=="edit"||((Is=(Ms=(Bs=e==null?void 0:e.user)==null?void 0:Bs.role)==null?void 0:Ms.permissions)==null?void 0:Is.applications)=="view",child:[{name:"View Applications",link:"/admin/view-applications",view:((Es=(Os=(Ls=e==null?void 0:e.user)==null?void 0:Ls.role)==null?void 0:Os.permissions)==null?void 0:Es.applications)=="edit"||((Gs=(_s=(Hs=e==null?void 0:e.user)==null?void 0:Hs.role)==null?void 0:_s.permissions)==null?void 0:Gs.applications)=="view"},{name:"View Protocol Applications",link:"/admin/view-protocol-applications",view:((Ys=(Xs=(Ks=e==null?void 0:e.user)==null?void 0:Ks.role)==null?void 0:Xs.permissions)==null?void 0:Ys.applications)=="edit"||((Qs=(Js=(qs=e==null?void 0:e.user)==null?void 0:qs.role)==null?void 0:Js.permissions)==null?void 0:Qs.applications)=="view"}]},{name:"Reports",icons:s.jsx(Wi,{size:"15"}),view:((Zs=(Ws=(Ts=e==null?void 0:e.user)==null?void 0:Ts.role)==null?void 0:Ws.permissions)==null?void 0:Zs.reports)=="edit"||((ei=(hs=($s=e==null?void 0:e.user)==null?void 0:$s.role)==null?void 0:hs.permissions)==null?void 0:ei.reports)=="view",child:[{name:"Download Reports",link:"/admin/reports",view:!0},{name:"Download Protocol Reports",link:"/admin/protocol-reports",view:!0}]},{name:"Designation",icons:s.jsx(Zi,{size:"15"}),view:((ri=(ii=(si=e==null?void 0:e.user)==null?void 0:si.role)==null?void 0:ii.permissions)==null?void 0:ri.designation)=="edit"||((li=(ni=(oi=e==null?void 0:e.user)==null?void 0:oi.role)==null?void 0:ni.permissions)==null?void 0:li.designation)=="view",child:[{name:"View / Manage Designation",link:"/admin/view-designation",view:!0}]},{name:"Institution",icons:s.jsx($i,{size:"15"}),view:((ci=(mi=(ai=e==null?void 0:e.user)==null?void 0:ai.role)==null?void 0:mi.permissions)==null?void 0:ci.institution)=="edit"||((ti=(pi=(di=e==null?void 0:e.user)==null?void 0:di.role)==null?void 0:pi.permissions)==null?void 0:ti.institution)=="view",child:[{name:"View / Manage Institution",link:"/admin/view-institution",view:!0}]},{name:"User Data Upload",icons:s.jsx(Xi,{size:"15"}),view:((vi=(fi=(wi=e==null?void 0:e.user)==null?void 0:wi.role)==null?void 0:fi.permissions)==null?void 0:vi.upload)=="edit"||((ji=(ki=(xi=e==null?void 0:e.user)==null?void 0:xi.role)==null?void 0:ki.permissions)==null?void 0:ji.upload)=="view",child:[{name:"Add User Data",link:"/admin/add-user",view:!0}]},{name:"Research/ Publication Protocol",icons:s.jsx(Mi,{size:"15"}),view:((Ni=(gi=(ui=e==null?void 0:e.user)==null?void 0:ui.role)==null?void 0:gi.permissions)==null?void 0:Ni.workflows)=="edit"||((Fi=(zi=(bi=e==null?void 0:e.user)==null?void 0:bi.role)==null?void 0:zi.permissions)==null?void 0:Fi.workflows)=="view",child:[{name:"View / Manage Research Protocol",link:"/admin/view-protocol",view:((Di=(Vi=(Ri=e==null?void 0:e.user)==null?void 0:Ri.role)==null?void 0:Vi.permissions)==null?void 0:Di.workflows)=="edit"||((Ci=(Si=(Pi=e==null?void 0:e.user)==null?void 0:Pi.role)==null?void 0:Si.permissions)==null?void 0:Ci.workflows)=="view"},{name:"Create New Research Protocol",link:"/admin/create-protocol",view:((Ai=(yi=(Ui=e==null?void 0:e.user)==null?void 0:Ui.role)==null?void 0:yi.permissions)==null?void 0:Ai.workflows)=="edit"}]}],c=Yi(),[f,v]=w.useState(1),Ii=i=>{i==f?v(0):v(i)},Li=n.find(i=>{var o;return(o=i.child)==null?void 0:o.find(l=>l.link==c.pathname)}),Oi=n.indexOf(Li);w.useEffect(()=>{v(Oi+1)},[]);const Ei=qi();return w.useEffect(()=>{var i,o,l;if(!((i=c==null?void 0:c.pathname)!=null&&i.includes("/admin/"))){const r=(l=(o=n==null?void 0:n.find(a=>(a==null?void 0:a.view)==!0))==null?void 0:o.child)==null?void 0:l.find(a=>(a==null?void 0:a.view)==!0);Ei(r==null?void 0:r.link)}},[]),s.jsx(Ji.Fragment,{children:s.jsxs("div",{className:"vertical-menu",style:{display:m?"block":"none",top:d?"0":"70px"},children:[s.jsx("button",{type:"button",className:"btn btn-sm px-3 font-size-16 d-lg-none header-item","data-toggle":"collapse",onClick:()=>{p(!m)},"data-target":"#topnav-menu-content",children:s.jsx("i",{className:"fa fa-fw fa-bars"})}),s.jsxs("div",{className:"navbar-brand-box",style:{display:m?"block":"none"},children:[s.jsxs(x,{to:"/",className:"logo logo-dark",children:[s.jsx("span",{className:"logo-sm"}),s.jsx("span",{className:"logo-lg",children:s.jsx("img",{src:"/KLEU.png",style:{width:"40px"}})})]}),s.jsxs(x,{to:"/",className:"logo logo-light",children:[s.jsx("span",{className:"logo-sm"}),s.jsx("span",{className:"logo-lg"})]})]}),s.jsxs("div",{"data-simplebar":!0,className:"h-100 d-flex flex-column",style:{overflowY:"auto"},children:[s.jsx("div",{id:"sidebar-menu",children:s.jsx("div",{children:n==null?void 0:n.map((i,o)=>{var l;return(i==null?void 0:i.view)&&s.jsx("ul",{className:"metismenu list-unstyled",id:"side-menu",children:s.jsxs("li",{className:f==o+1?"mm-active":"",children:[s.jsxs("a",{className:"has-arrow",onClick:()=>Ii(o+1),style:{fontSize:"14px"},children:[i==null?void 0:i.icons,s.jsx("span",{className:"ms-3",children:i==null?void 0:i.name})]}),s.jsx(Qi.Collapse,{isOpen:f==o+1,children:(l=i==null?void 0:i.child)==null?void 0:l.map(r=>r.view&&s.jsx("ul",{className:"sub-menu","aria-expanded":"false",children:s.jsx("li",{className:c.pathname==(r==null?void 0:r.link)?"mm-active":"",children:s.jsx(x,{to:r==null?void 0:r.link,style:{fontSize:"14px"},children:r==null?void 0:r.name})})}))})]},o)})})})}),s.jsx("div",{className:"sidebar-background"})]})]})})},or=({children:m})=>{const[d,p]=w.useState(!0),{admin:e}=hi();return e?s.jsxs(s.Fragment,{children:[s.jsx(sr,{showSidebar:d,admin:!0,setShowSideBar:p}),s.jsx(er,{setShowSideBar:p,showSidebar:d}),m]}):s.jsx(Ti,{to:"/account/login"})};export{or as default};
