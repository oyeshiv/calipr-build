(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[893],{1519:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>v});var i=a(5155),n=a(6874),r=a.n(n),l=a(7168),s=a(8482);let o=(0,a(9946).A)("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);var c=a(2138),d=a(3912),m=a(8753),h=a(2115),u=a(3264),p=a(7431),x=a(5416);let f=e=>{let{className:t="",height:a=400,particleCount:n=1e3,color:r="#8b5cf6"}=e,l=(0,h.useRef)(null);return(0,h.useEffect)(()=>{let e;if(!l.current)return;let t=!0;try{let e=document.createElement("canvas");t=!!(window.WebGLRenderingContext&&(e.getContext("webgl")||e.getContext("experimental-webgl")))}catch(e){t=!1,console.error("WebGL not supported",e)}if(!t){let e=document.createElement("div");e.className="flex items-center justify-center w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg";for(let t=0;t<20;t++){let t=document.createElement("div");t.className="absolute rounded-full bg-primary/40",t.style.width="".concat(10*Math.random()+5,"px"),t.style.height=t.style.width,t.style.left="".concat(100*Math.random(),"%"),t.style.top="".concat(100*Math.random(),"%"),e.appendChild(t)}l.current.appendChild(e);return}let a=new u.Z58,i=new u.ubm(75,l.current.clientWidth/l.current.clientHeight,.1,1e3);i.position.z=30;try{(e=new p.JeP({antialias:!0,alpha:!0,powerPreference:"default",failIfMajorPerformanceCaveat:!1})).setSize(l.current.clientWidth,l.current.clientHeight),e.setPixelRatio(Math.min(window.devicePixelRatio,2)),l.current.appendChild(e.domElement)}catch(t){console.error("Error creating WebGL renderer:",t);let e=document.createElement("div");e.className="flex items-center justify-center w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg";for(let t=0;t<20;t++){let t=document.createElement("div");t.className="absolute rounded-full bg-primary/40",t.style.width="".concat(10*Math.random()+5,"px"),t.style.height=t.style.width,t.style.left="".concat(100*Math.random(),"%"),t.style.top="".concat(100*Math.random(),"%"),e.appendChild(t)}l.current.appendChild(e);return}let s=new x.N(i,e.domElement);s.enableDamping=!0,s.dampingFactor=.05,s.enableZoom=!1;let o=new u.LoY,c=new u.BH$({color:new u.Q1f(r),size:.1,transparent:!0,opacity:.8,sizeAttenuation:!0}),d=new Float32Array(3*n),m=new Float32Array(3*n);for(let e=0;e<3*n;e+=3)d[e]=(Math.random()-.5)*20,d[e+1]=(Math.random()-.5)*20,d[e+2]=(Math.random()-.5)*20,m[e]=(Math.random()-.5)*.02,m[e+1]=(Math.random()-.5)*.02,m[e+2]=(Math.random()-.5)*.02;o.setAttribute("position",new u.THS(d,3));let h=new u.ONl(o,c);a.add(h);let f=()=>{requestAnimationFrame(f);let t=o.attributes.position.array;for(let e=0;e<t.length;e+=3)t[e]+=m[e],t[e+1]+=m[e+1],t[e+2]+=m[e+2],Math.abs(t[e])>10&&(m[e]*=-1),Math.abs(t[e+1])>10&&(m[e+1]*=-1),Math.abs(t[e+2])>10&&(m[e+2]*=-1);o.attributes.position.needsUpdate=!0,s.update(),e.render(a,i)};f();let g=()=>{l.current&&(i.aspect=l.current.clientWidth/l.current.clientHeight,i.updateProjectionMatrix(),e.setSize(l.current.clientWidth,l.current.clientHeight))};return window.addEventListener("resize",g),()=>{window.removeEventListener("resize",g),l.current&&l.current.removeChild(e.domElement),o.dispose(),c.dispose()}},[r,n]),(0,i.jsx)("div",{ref:l,className:"w-full overflow-hidden ".concat(t),style:{height:"".concat(a,"px"),maxWidth:"100%"}})},g=e=>{let{className:t="",height:a=400,color:n="#8b5cf6",wireframe:r=!1}=e,l=(0,h.useRef)(null);return(0,h.useEffect)(()=>{let e;if(!l.current)return;let t=!0;try{let e=document.createElement("canvas");t=!!(window.WebGLRenderingContext&&(e.getContext("webgl")||e.getContext("experimental-webgl")))}catch(e){t=!1,console.error("WebGL not supported",e)}if(!t){let e=document.createElement("div");e.className="flex items-center justify-center w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg";let t=document.createElement("div");t.className="w-32 h-32 rounded-full bg-primary/30",e.appendChild(t),l.current.appendChild(e);return}let a=new u.Z58,i=new u.ubm(75,l.current.clientWidth/l.current.clientHeight,.1,1e3);i.position.z=5;try{(e=new p.JeP({antialias:!0,alpha:!0,powerPreference:"default",failIfMajorPerformanceCaveat:!1})).setSize(l.current.clientWidth,l.current.clientHeight),e.setPixelRatio(Math.min(window.devicePixelRatio,2)),l.current.appendChild(e.domElement)}catch(a){console.error("Error creating WebGL renderer:",a);let e=document.createElement("div");e.className="flex items-center justify-center w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg";let t=document.createElement("div");t.className="w-32 h-32 rounded-full bg-primary/30",e.appendChild(t),l.current.appendChild(e);return}let s=new x.N(i,e.domElement);s.enableDamping=!0,s.dampingFactor=.05,s.enableZoom=!1;let o=new u.Gu$(2,64,64),c=new u.tXL({color:new u.Q1f(n),wireframe:r,emissive:new u.Q1f(n).multiplyScalar(.2),specular:new u.Q1f(0xffffff),shininess:50}),d=new u.eaF(o,c);a.add(d);let m=new u.$p8(0xffffff,.5);a.add(m);let h=new u.HiM(0xffffff,1);h.position.set(10,10,10),a.add(h);let f=()=>{requestAnimationFrame(f),d.rotation.x+=.003,d.rotation.y+=.005,s.update(),e.render(a,i)};f();let g=()=>{l.current&&(i.aspect=l.current.clientWidth/l.current.clientHeight,i.updateProjectionMatrix(),e.setSize(l.current.clientWidth,l.current.clientHeight))};return window.addEventListener("resize",g),()=>{window.removeEventListener("resize",g),l.current&&l.current.removeChild(e.domElement),o.dispose(),c.dispose()}},[n,r]),(0,i.jsx)("div",{ref:l,className:"w-full overflow-hidden ".concat(t),style:{height:"".concat(a,"px"),maxWidth:"100%"}})};var w=a(1845);function v(){return(0,i.jsxs)("main",{className:"flex flex-col min-h-screen",children:[(0,i.jsx)("section",{className:"pt-24 pb-12 md:pt-32 md:pb-24",children:(0,i.jsx)("div",{className:"container px-4 md:px-6",children:(0,i.jsx)("div",{className:"flex flex-col items-center text-center space-y-4",children:(0,i.jsxs)("div",{className:"space-y-2",children:[(0,i.jsx)(d.default,{text:"Our Projects",className:"text-3xl font-bold tracking-tighter sm:text-5xl",animation:"slide-up"}),(0,i.jsx)(d.default,{text:"Explore our portfolio of successful projects across various industries and technologies.",className:"max-w-[700px] text-muted-foreground md:text-xl",animation:"fade-in",delay:.2})]})})})}),(0,i.jsx)("section",{className:"w-full py-12 md:py-24 lg:py-32 bg-muted",children:(0,i.jsxs)("div",{className:"container px-4 md:px-6",children:[(0,i.jsxs)("div",{className:"flex flex-col items-center text-center space-y-4 mb-12",children:[(0,i.jsx)(d.default,{text:"Featured Project",className:"text-3xl font-bold tracking-tighter",animation:"slide-up"}),(0,i.jsx)(d.default,{text:"Our most innovative work showcasing the cutting-edge of technology.",className:"max-w-[700px] text-muted-foreground md:text-xl",animation:"fade-in",delay:.2})]}),(0,i.jsxs)("div",{className:"grid gap-10 lg:grid-cols-2 lg:gap-12 items-center",children:[(0,i.jsx)("div",{className:"h-[400px] w-full rounded-lg flex items-center justify-center elegant-shadow",children:(0,i.jsx)(f,{height:400,color:"#3b82f6",particleCount:1e3})}),(0,i.jsxs)("div",{className:"space-y-4",children:[(0,i.jsx)("h3",{className:"text-2xl font-bold",children:"Enterprise Resource Planning System"}),(0,i.jsx)("p",{className:"text-muted-foreground",children:"A comprehensive ERP solution that integrates all facets of business operations, from inventory and order management to HR and accounting. Built with scalability in mind, this system serves as the backbone for a multinational manufacturing company."}),(0,i.jsxs)("ul",{className:"space-y-2",children:[(0,i.jsxs)("li",{className:"flex items-center gap-2",children:[(0,i.jsx)("span",{className:"font-semibold",children:"Technologies:"}),(0,i.jsx)("span",{className:"text-muted-foreground",children:"React, Node.js, PostgreSQL, Docker"})]}),(0,i.jsxs)("li",{className:"flex items-center gap-2",children:[(0,i.jsx)("span",{className:"font-semibold",children:"Industry:"}),(0,i.jsx)("span",{className:"text-muted-foreground",children:"Manufacturing"})]}),(0,i.jsxs)("li",{className:"flex items-center gap-2",children:[(0,i.jsx)("span",{className:"font-semibold",children:"Timeline:"}),(0,i.jsx)("span",{className:"text-muted-foreground",children:"12 months"})]})]}),(0,i.jsxs)(l.$,{className:"gap-1 elegant-shadow",children:["View Case Study ",(0,i.jsx)(o,{className:"h-4 w-4"})]})]})]})]})}),(0,i.jsx)("section",{className:"w-full py-12 md:py-24 lg:py-32",children:(0,i.jsxs)("div",{className:"container px-4 md:px-6",children:[(0,i.jsxs)("div",{className:"flex flex-col items-center text-center space-y-4 mb-12",children:[(0,i.jsx)(d.default,{text:"Project Gallery",className:"text-3xl font-bold tracking-tighter",animation:"slide-up"}),(0,i.jsx)(d.default,{text:"Browse through our diverse portfolio of successful client projects.",className:"max-w-[700px] text-muted-foreground md:text-xl",animation:"fade-in",delay:.2})]}),(0,i.jsx)("div",{className:"grid gap-6 sm:grid-cols-2 lg:grid-cols-3",children:[{id:1,title:"E-Commerce Platform",category:"Web Development",description:"A comprehensive e-commerce solution with integrated payment processing and inventory management.",image:"/placeholder.svg?height=300&width=500"},{id:2,title:"Healthcare Mobile App",category:"Mobile App Development",description:"A patient-centered mobile application for appointment scheduling and health monitoring.",image:"/placeholder.svg?height=300&width=500"},{id:3,title:"Financial Dashboard",category:"Web App Development",description:"Real-time financial analytics dashboard with data visualization and reporting features.",image:"/placeholder.svg?height=300&width=500"},{id:4,title:"CRM Integration",category:"CRM Solutions",description:"Custom CRM integration for a multinational corporation, streamlining customer management processes.",image:"/placeholder.svg?height=300&width=500"},{id:5,title:"Educational Platform",category:"Web Development",description:"Interactive learning platform with course management and student progress tracking.",image:"/placeholder.svg?height=300&width=500"},{id:6,title:"Logistics Tracking System",category:"Web App Development",description:"Real-time tracking system for logistics and supply chain management with predictive analytics.",image:"/placeholder.svg?height=300&width=500"}].map(e=>(0,i.jsxs)(s.Zp,{className:"card-hover overflow-hidden elegant-shadow",children:[(0,i.jsx)("div",{className:"aspect-video w-full overflow-hidden",children:(0,i.jsx)(m.A,{height:200,color:"#".concat(Math.floor(0xffffff*Math.random()).toString(16)),wireframe:e.id%2==0})}),(0,i.jsxs)(s.aR,{children:[(0,i.jsx)("div",{className:"inline-block text-xs font-medium bg-primary/10 text-primary px-2 py-1 rounded mb-2",children:e.category}),(0,i.jsx)(s.ZB,{children:e.title})]}),(0,i.jsx)(s.Wu,{children:(0,i.jsx)("p",{className:"text-muted-foreground",children:e.description})}),(0,i.jsx)(s.wL,{children:(0,i.jsxs)(l.$,{variant:"outline",size:"sm",className:"gap-1 gradient-border",children:["View Details ",(0,i.jsx)(c.A,{className:"h-4 w-4"})]})})]},e.id))})]})}),(0,i.jsx)("section",{className:"w-full py-12 md:py-24 lg:py-32 bg-muted",children:(0,i.jsxs)("div",{className:"container px-4 md:px-6",children:[(0,i.jsxs)("div",{className:"flex flex-col items-center text-center space-y-4 mb-12",children:[(0,i.jsx)(d.default,{text:"Client Testimonials",className:"text-3xl font-bold tracking-tighter",animation:"slide-up"}),(0,i.jsx)(d.default,{text:"Hear what our clients have to say about working with Calipr.",className:"max-w-[700px] text-muted-foreground md:text-xl",animation:"fade-in",delay:.2})]}),(0,i.jsx)("div",{className:"grid gap-6 sm:grid-cols-2 lg:grid-cols-3",children:[1,2,3].map(e=>(0,i.jsxs)(s.Zp,{className:"card-hover elegant-shadow",children:[(0,i.jsx)(s.aR,{children:(0,i.jsxs)("div",{className:"flex items-center gap-4",children:[(0,i.jsx)("div",{className:"relative w-12 h-12 rounded-full overflow-hidden",children:(0,i.jsx)(g,{height:48,color:"#3b82f6"})}),(0,i.jsxs)("div",{children:[(0,i.jsx)(s.ZB,{className:"text-lg",children:"Client Name"}),(0,i.jsx)(s.BT,{children:"Position, Company"})]})]})}),(0,i.jsx)(s.Wu,{children:(0,i.jsx)("p",{className:"text-muted-foreground italic",children:'"Working with Calipr has been a game-changer for our business. Their team\'s expertise and dedication to our project exceeded our expectations. The solution they delivered has significantly improved our operational efficiency."'})})]},e))})]})}),(0,i.jsx)("section",{className:"w-full py-12 md:py-24 lg:py-32 relative overflow-hidden",children:(0,i.jsxs)("div",{className:"container px-4 md:px-6 relative z-10",children:[(0,i.jsxs)("div",{className:"flex flex-col items-center text-center space-y-4 mb-12",children:[(0,i.jsx)(d.default,{text:"Our Approach",className:"text-3xl font-bold tracking-tighter",animation:"slide-up"}),(0,i.jsx)(d.default,{text:"We combine technical expertise with creative thinking to deliver solutions that exceed expectations.",className:"max-w-[700px] text-muted-foreground md:text-xl",animation:"fade-in",delay:.2})]}),(0,i.jsx)("div",{className:"h-[400px] w-full rounded-lg flex items-center justify-center elegant-shadow",children:(0,i.jsx)(w.A,{height:400,color:"#3b82f6",wireframe:!0})})]})}),(0,i.jsxs)("section",{className:"w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 relative overflow-hidden",children:[(0,i.jsx)("div",{className:"absolute inset-0 bg-[url('/patterns/circuit-board.svg')] opacity-10"}),(0,i.jsx)("div",{className:"absolute inset-0 bg-gradient-to-b from-transparent to-black/20"}),(0,i.jsxs)("div",{className:"container px-4 md:px-6 text-center relative z-10",children:[(0,i.jsx)(d.default,{text:"Ready to Start Your Project?",className:"text-3xl font-bold tracking-tighter md:text-4xl/tight mb-4 text-white",animation:"slide-up"}),(0,i.jsx)(d.default,{text:"Let's discuss how Calipr can bring your vision to life with our expertise in IT solutions.",className:"max-w-[700px] mx-auto mb-8 text-white/90 md:text-xl",animation:"fade-in",delay:.2}),(0,i.jsxs)("div",{className:"flex flex-col gap-2 min-[400px]:flex-row justify-center",children:[(0,i.jsx)(r(),{href:"/contact",children:(0,i.jsxs)(l.$,{size:"lg",variant:"secondary",className:"gap-1 elegant-shadow backdrop-blur-sm bg-white/90 text-primary hover:bg-white",children:["Contact Us Today ",(0,i.jsx)(c.A,{className:"h-4 w-4"})]})}),(0,i.jsx)(r(),{href:"/projects",children:(0,i.jsx)(l.$,{size:"lg",variant:"outline",className:"border-white text-white hover:bg-white/10",children:"Explore More Projects"})})]}),(0,i.jsx)("div",{className:"absolute top-10 left-10 w-20 h-20 rounded-full bg-blue-500/20 animate-float"}),(0,i.jsx)("div",{className:"absolute bottom-10 right-10 w-32 h-32 rounded-full bg-purple-500/20 animate-float animation-delay-1000"}),(0,i.jsx)("div",{className:"absolute top-1/2 right-1/4 w-16 h-16 rounded-full bg-indigo-500/20 animate-float animation-delay-2000"})]})]})]})}},6651:(e,t,a)=>{Promise.resolve().then(a.bind(a,1519))}},e=>{var t=t=>e(e.s=t);e.O(0,[831,367,342,687,129,110,441,684,358],()=>t(6651)),_N_E=e.O()}]);