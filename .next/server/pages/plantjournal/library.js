(()=>{var e={};e.id=425,e.ids=[425,888,660],e.modules={6593:(e,t,a)=>{"use strict";a.a(e,async(e,r)=>{try{a.r(t),a.d(t,{config:()=>m,default:()=>h,getServerSideProps:()=>g,getStaticPaths:()=>p,getStaticProps:()=>x,reportWebVitals:()=>b,routeModule:()=>N,unstable_getServerProps:()=>v,unstable_getServerSideProps:()=>w,unstable_getStaticParams:()=>f,unstable_getStaticPaths:()=>y,unstable_getStaticProps:()=>j});var s=a(7093),l=a(5244),n=a(1323),i=a(2899),o=a.n(i),c=a(8910),u=a(8361),d=e([c,u]);[c,u]=d.then?(await d)():d;let h=(0,n.l)(u,"default"),x=(0,n.l)(u,"getStaticProps"),p=(0,n.l)(u,"getStaticPaths"),g=(0,n.l)(u,"getServerSideProps"),m=(0,n.l)(u,"config"),b=(0,n.l)(u,"reportWebVitals"),j=(0,n.l)(u,"unstable_getStaticProps"),y=(0,n.l)(u,"unstable_getStaticPaths"),f=(0,n.l)(u,"unstable_getStaticParams"),v=(0,n.l)(u,"unstable_getServerProps"),w=(0,n.l)(u,"unstable_getServerSideProps"),N=new s.PagesRouteModule({definition:{kind:l.x.PAGES,page:"/plantjournal/library",pathname:"/plantjournal/library",bundlePath:"",filename:""},components:{App:c.default,Document:o()},userland:u});r()}catch(e){r(e)}})},8910:(e,t,a)=>{"use strict";a.a(e,async(e,r)=>{try{a.r(t),a.d(t,{default:()=>c});var s=a(997);a(5833);var l=a(5198),n=a(5142),i=a.n(n),o=e([l]);l=(o.then?(await o)():o)[0],i().config();let c=(0,l.default)(({Component:e,pageProps:t})=>s.jsx("div",{children:s.jsx(e,{classame:"App",...t})}));r()}catch(e){r(e)}})},8598:(e,t,a)=>{"use strict";a.a(e,async(e,r)=>{try{a.r(t),a.d(t,{default:()=>h});var s=a(997),l=a(1664),n=a.n(l),i=a(1163),o=a(6689),c=a(4874),u=a(5198),d=e([c,u]);[c,u]=d.then?(await d)():d;let h=(0,u.default)(e=>{let t=(0,i.useRouter)(),[a,r]=(0,o.useState)(!1),[l]=(0,c.useCookies)(["token","user"]),[u,d]=(0,o.useState)("");(0,o.useEffect)(()=>{let e=l.user;e&&d(e)},[]);let h=async()=>{try{(await fetch("http://localhost:4000/auth/logout",{method:"get",credentials:"include",headers:{"Content-Type":"application/json",Authorization:`Bearer ${l.token}`}})).ok&&((0,c.removeCookie)("token"),(0,c.removeCookie)("user"),t.replace("/auth"))}catch(e){console.log(e),console.log("Network error")}},x=()=>{r(!1)};return s.jsx("div",{children:(0,s.jsxs)("nav",{className:"flex justify-between items-center px-4 bg-green-900 py-2 w-full",children:[s.jsx("h1",{className:"text-white font-semibold text-xl",children:e.pageName}),(0,s.jsxs)("div",{className:" flex items-center ",children:[(0,s.jsxs)("h1",{className:"text-white text-base mr-4",children:["Welcome ",u]}),(0,s.jsxs)("div",{className:"relative",children:[(0,s.jsxs)("button",{onClick:()=>{r(!a)},className:"text-white font-semibold px-4",children:[s.jsx("span",{className:"ml-1 text-2xl",children:"☰"})," "]}),a&&(0,s.jsxs)("ul",{className:"absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md",children:[s.jsx("li",{children:s.jsx(n(),{href:"/dashboard",className:"block px-4 py-2 text-gray-800 hover:bg-gray-200",onClick:x,children:"Dashboard"})}),s.jsx("li",{children:s.jsx(n(),{href:"/plantjournal/garden",className:"block px-4 py-2 text-gray-800 hover:bg-gray-200",onClick:x,children:"Plant Journal"})}),s.jsx("li",{children:s.jsx(n(),{href:"/wellnessjournal/mood",className:"block px-4 py-2 text-gray-800 hover:bg-gray-200",onClick:x,children:"Wellness Journal"})}),s.jsx("li",{children:s.jsx(n(),{href:"/social",className:"block px-4 py-2 text-gray-800 hover:bg-gray-200",onClick:x,children:"Social"})}),s.jsx("li",{children:s.jsx(n(),{href:"/profile",className:"block px-4 py-2 text-gray-800 hover:bg-gray-200",onClick:x,children:"View Profile"})}),s.jsx("li",{children:s.jsx("input",{type:"button",onClick:()=>{h(),x()},className:"w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200",value:"Logout"})})]})]})]})]})})});r()}catch(e){r(e)}})},5198:(e,t,a)=>{"use strict";a.a(e,async(e,r)=>{try{a.r(t),a.d(t,{default:()=>c});var s=a(997),l=a(1163),n=a(6689),i=a(4874),o=e([i]);i=(o.then?(await o)():o)[0];let c=e=>{let t=t=>{let a=(0,l.useRouter)(),[r]=(0,i.useCookies)(["token"]);return(0,n.useEffect)(()=>{(async()=>{let e=r.token;console.log("Frontend Token:",e),e||"/auth"===a.pathname||(console.log("Redirecting to login page..."),a.push("/auth"))})()},[r,a]),s.jsx(e,{...t})};return t.displayName=`withAuth(${e.displayName||e.name||"Component"})`,t};r()}catch(e){r(e)}})},9415:(e,t,a)=>{"use strict";a.a(e,async(e,r)=>{try{a.r(t),a.d(t,{default:()=>u});var s=a(997),l=a(1664),n=a.n(l),i=a(1163),o=a(5198),c=e([o]);o=(c.then?(await c)():c)[0];let u=(0,o.default)(()=>{let e=(0,i.useRouter)();return s.jsx("nav",{children:(0,s.jsxs)("ul",{className:"flex justify-center",children:[s.jsx("li",{children:s.jsx(n(),{href:"/plantjournal/garden",className:`px-4 py-2 rounded ${"/plantjournal/garden"===e.pathname?"bg-emerald-500 text-white":"bg-gray-200 text-gray-500 hover:bg-blue-500 hover:text-white"}`,children:"Your garden"})}),s.jsx("li",{children:s.jsx(n(),{href:"/plantjournal/library",className:`px-4 py-2 rounded ${"/plantjournal/library"===e.pathname?"bg-emerald-500 text-white":"bg-gray-200 text-gray-500 hover:bg-blue-500 hover:text-white"}`,children:"Plant Library"})})]})})});r()}catch(e){r(e)}})},8361:(e,t,a)=>{"use strict";a.a(e,async(e,r)=>{try{a.r(t),a.d(t,{default:()=>p});var s=a(997),l=a(6689),n=a(4874),i=a(1163),o=a(1664),c=a.n(o),u=a(5198),d=a(8598),h=a(9415),x=e([n,u,d,h]);[n,u,d,h]=x.then?(await x)():x;let p=(0,u.default)(()=>{let e=(0,i.useRouter)(),[t,a]=(0,l.useState)(!0),[r]=(0,n.useCookies)(["token","user"]),[o,u]=(0,l.useState)(1),[x,p]=(0,l.useState)([]),[g,m]=(0,l.useState)([]),[b,j]=(0,l.useState)("");(0,l.useEffect)(()=>{let e=async e=>{try{console.log("getting data");let t=await fetch(`http://localhost:4000/plantlibrary/getplants/${e}`,{credentials:"include",headers:{Authorization:`Bearer ${r.token}`}}),s=await t.json();m(s?.data),a(!1)}catch(e){console.error("Error:",e.message)}};a(!0),e(o),(async()=>{try{let e=await fetch("http://localhost:4000/plantlibrary/getfavorites",{credentials:"include",headers:{Authorization:`Bearer ${r.token}`}}),t=await e.json();p(t),a(!1)}catch(e){console.error("Error:",e.message)}})()},[o,r.token]);let y=async e=>{try{let t=x?.includes(e),a=await fetch(`http://localhost:4000/plantlibrary/favorites/${e}`,{method:t?"DELETE":"PUT",credentials:"include",headers:{Authorization:`Bearer ${r.token}`}}),s=await a.json();p(s)}catch(e){console.error("Error:",e.message)}};return t?s.jsx("p",{children:"Loading..."}):g?(0,s.jsxs)("div",{className:"min-h-screen flex-col items-center justify-center bg-gray-100 mx-auto",children:[s.jsx(d.default,{pageName:"Plant Journal"}),s.jsx("br",{}),s.jsx(h.default,{}),s.jsx("br",{}),(0,s.jsxs)("div",{className:"flex justify-center space-x-4",children:[s.jsx("input",{type:"search",value:b,onChange:e=>j(e.target.value),className:"border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring focus:border-blue-500"}),s.jsx("input",{type:"submit",value:"Search",onClick:()=>e.push(`/plantjournal/search/${b}`),className:"bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md"})]}),s.jsx("br",{}),s.jsx("h1",{className:"text-2xl font-bold mb-4 text-center",children:" Plant Library "}),s.jsx("ul",{className:"grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4",children:g&&g.map((e,t)=>{let a=x?.includes(e.scientific_name);return(0,s.jsxs)("li",{className:"bg-white p-4 rounded-lg shadow-md w-45",children:[(0,s.jsxs)(c(),{href:`/plantjournal/plantlibrarydetails/${e.scientific_name}`,children:[s.jsx("img",{src:e.image_url,alt:e.common_name,className:"w-full h-32 object-cover rounded-md mb-2"}),s.jsx("h2",{className:"text-lg font-semibold",children:e.common_name}),s.jsx("p",{className:"text-md",children:e.scientific_name})]}),s.jsx("br",{}),s.jsx("input",{type:"button",value:a?"Remove Favorite":"Add Favorite",onClick:()=>y(e.scientific_name),className:`px-4 py-2 rounded ${a?"bg-red-800 text-white":"bg-green-800 text-white"}`}),s.jsx("br",{})]},t)})}),s.jsx("br",{}),(0,s.jsxs)("div",{className:"flex justify-center space-x-4",children:[s.jsx("input",{type:"button",value:"Previous Page",onClick:()=>{o>1&&u(o-1)},className:"bg-blue-500 text-white px-4 py-2 rounded",disabled:1===o}),(0,s.jsxs)("p",{className:"text-center",children:["Page: ",o," "]}),s.jsx("input",{type:"button",value:"Next Page",onClick:()=>{o<21863&&u(o+1)},className:"bg-blue-500 text-white px-4 py-2 rounded",disabled:21863===o})]}),s.jsx("br",{}),s.jsx("a",{href:"https://trefle.io/",className:"text-sm text-blue-500 hover:underline",children:"Plant data provided by Trefle "})]}):s.jsx("p",{children:"No plants to show"})});r()}catch(e){r(e)}})},5833:()=>{},5142:e=>{"use strict";e.exports=require("dotenv")},2785:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},6689:e=>{"use strict";e.exports=require("react")},6405:e=>{"use strict";e.exports=require("react-dom")},997:e=>{"use strict";e.exports=require("react/jsx-runtime")},4874:e=>{"use strict";e.exports=import("react-cookie")},7147:e=>{"use strict";e.exports=require("fs")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},9796:e=>{"use strict";e.exports=require("zlib")}};var t=require("../../webpack-runtime.js");t.C(e);var a=e=>t(t.s=e),r=t.X(0,[567,163,899,559],()=>a(6593));module.exports=r})();