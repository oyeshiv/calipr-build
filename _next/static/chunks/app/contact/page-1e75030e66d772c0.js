(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[977],{3912:(e,a,s)=>{"use strict";s.d(a,{default:()=>d});var t=s(5155),l=s(2115),r=s(3999),i=s(6604),n=s(6386);let d=e=>{let{text:a,className:s,once:d=!0,el:o="div",animation:c="slide-up",delay:m=0,duration:u=500,threshold:x=.1,childClassName:p,useScrollTrigger:h=!0}=e,f=(0,l.useRef)(null),g=a.split(" "),b=(0,i.W)(f,{once:d,threshold:x}),j={hidden:{opacity:0,y:"slide-up"===c?20:"slide-down"===c?-20:0,x:"slide-left"===c?20:"slide-right"===c?-20:0},visible:{opacity:1,y:0,x:0,transition:{duration:u/1e3,ease:"easeOut"}}};return((0,l.useEffect)(()=>{if(h)return;let e=new IntersectionObserver(a=>{a.forEach(a=>{a.isIntersecting?(a.target.querySelectorAll(".animated-text").forEach((e,a)=>{setTimeout(()=>{e.classList.add("animate-".concat(c))},1e3*(m+.05*a))}),d&&e.unobserve(a.target)):d||a.target.querySelectorAll(".animated-text").forEach(e=>{e.classList.remove("animate-".concat(c))})})},{threshold:x});return f.current&&!h&&e.observe(f.current),()=>{f.current&&!h&&e.unobserve(f.current)}},[c,m,d,x,h]),h)?(0,t.jsx)(o,{className:s,ref:f,children:(0,t.jsx)(n.P.div,{variants:{hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.05,delayChildren:m}}},initial:"hidden",animate:b?"visible":"hidden",children:g.map((e,a)=>(0,t.jsxs)(l.Fragment,{children:[(0,t.jsx)(n.P.span,{className:(0,r.cn)("inline-block",p),variants:j,children:e}),a<g.length-1&&(0,t.jsx)("span",{className:"inline-block",children:"\xa0"})]},a))})}):(0,t.jsx)(o,{className:s,ref:f,children:g.map((e,a)=>(0,t.jsxs)(l.Fragment,{children:[(0,t.jsx)("span",{className:"animated-text-wrapper inline-block overflow-hidden",children:(0,t.jsx)("span",{className:(0,r.cn)("animated-text opacity-0 inline-block",p),style:{animationDuration:"".concat(u,"ms"),animationDelay:"".concat(m+.05*a,"s"),animationFillMode:"forwards"},children:e})}),a<g.length-1&&(0,t.jsx)("span",{className:"inline-block",children:"\xa0"})]},a))})}},3999:(e,a,s)=>{"use strict";s.d(a,{cn:()=>r});var t=s(2596),l=s(9688);function r(){for(var e=arguments.length,a=Array(e),s=0;s<e;s++)a[s]=arguments[s];return(0,l.QP)((0,t.$)(a))}},4357:(e,a,s)=>{"use strict";s.r(a),s.d(a,{default:()=>S});var t=s(5155),l=s(2115),r=s(6874),i=s.n(r),n=s(7168),d=s(3999);let o=l.forwardRef((e,a)=>{let{className:s,type:l,...r}=e;return(0,t.jsx)("input",{type:l,className:(0,d.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",s),ref:a,...r})});o.displayName="Input";let c=l.forwardRef((e,a)=>{let{className:s,...l}=e;return(0,t.jsx)("textarea",{className:(0,d.cn)("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",s),ref:a,...l})});c.displayName="Textarea";var m=s(8482),u=s(646),x=s(2486),p=s(4516),h=s(9420),f=s(8883),g=s(3912),b=s(2355),j=s(3052),y=s(5348);function v(e){let{className:a,classNames:s,showOutsideDays:l=!0,...r}=e;return(0,t.jsx)(y.h,{showOutsideDays:l,className:(0,d.cn)("p-3",a),classNames:{months:"flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",month:"space-y-4",caption:"flex justify-center pt-1 relative items-center",caption_label:"text-sm font-medium",nav:"space-x-1 flex items-center",nav_button:(0,d.cn)((0,n.r)({variant:"outline"}),"h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"),nav_button_previous:"absolute left-1",nav_button_next:"absolute right-1",table:"w-full border-collapse space-y-1",head_row:"flex",head_cell:"text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",row:"flex w-full mt-2",cell:"h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",day:(0,d.cn)((0,n.r)({variant:"ghost"}),"h-9 w-9 p-0 font-normal aria-selected:opacity-100"),day_range_end:"day-range-end",day_selected:"bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",day_today:"bg-accent text-accent-foreground",day_outside:"day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",day_disabled:"text-muted-foreground opacity-50",day_range_middle:"aria-selected:bg-accent aria-selected:text-accent-foreground",day_hidden:"invisible",...s},components:{IconLeft:e=>{let{...a}=e;return(0,t.jsx)(b.A,{className:"h-4 w-4"})},IconRight:e=>{let{...a}=e;return(0,t.jsx)(j.A,{className:"h-4 w-4"})}},...r})}v.displayName="Calendar";var N=s(9074),w=s(4186),k=s(1007);let A=e=>{let a=e.getDay();return 0===a||6===a?[{time:"10:00 AM",available:!0},{time:"11:00 AM",available:!0},{time:"12:00 PM",available:!1},{time:"1:00 PM",available:!0}]:[{time:"9:00 AM",available:!0},{time:"10:00 AM",available:!1},{time:"11:00 AM",available:!0},{time:"12:00 PM",available:!0},{time:"1:00 PM",available:!1},{time:"2:00 PM",available:!0},{time:"3:00 PM",available:!0},{time:"4:00 PM",available:!1},{time:"5:00 PM",available:!0}]},C=()=>{let[e,a]=(0,l.useState)(new Date),[s,r]=(0,l.useState)(null),[i,d]=(0,l.useState)(""),[x,p]=(0,l.useState)(""),[h,f]=(0,l.useState)(""),[g,b]=(0,l.useState)(""),[j,y]=(0,l.useState)(!1),C=e?A(e):[],S=e=>e?e.toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"}):"";return(0,t.jsxs)("div",{className:"space-y-6",children:[(0,t.jsxs)("div",{className:"flex flex-col md:flex-row gap-8",children:[(0,t.jsxs)("div",{className:"flex-1",children:[(0,t.jsxs)("h3",{className:"text-xl font-semibold mb-4 flex items-center gap-2",children:[(0,t.jsx)(N.A,{className:"h-5 w-5 text-primary"}),"Select a Date"]}),(0,t.jsx)(m.Zp,{className:"p-4 elegant-shadow",children:(0,t.jsx)(v,{mode:"single",selected:e,onSelect:a,className:"rounded-md border",disabled:e=>{let a=new Date;return a.setHours(0,0,0,0),e<a}})})]}),(0,t.jsxs)("div",{className:"flex-1",children:[(0,t.jsxs)("h3",{className:"text-xl font-semibold mb-4 flex items-center gap-2",children:[(0,t.jsx)(w.A,{className:"h-5 w-5 text-primary"}),"Available Time Slots"]}),e?(0,t.jsxs)("div",{className:"space-y-4",children:[(0,t.jsx)("p",{className:"text-muted-foreground",children:S(e)}),(0,t.jsx)("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-3",children:C.map((e,a)=>(0,t.jsx)(n.$,{variant:s===e.time?"default":"outline",className:"".concat(e.available?"hover:border-primary":"opacity-50 cursor-not-allowed"),disabled:!e.available,onClick:()=>r(e.time),children:e.time},a))})]}):(0,t.jsx)("p",{className:"text-muted-foreground",children:"Please select a date to see available times."})]})]}),s&&(0,t.jsxs)("div",{children:[(0,t.jsxs)("h3",{className:"text-xl font-semibold mb-4 flex items-center gap-2",children:[(0,t.jsx)(k.A,{className:"h-5 w-5 text-primary"}),"Your Information"]}),j?(0,t.jsx)(m.Zp,{className:"p-6 elegant-shadow",children:(0,t.jsxs)("div",{className:"flex flex-col items-center justify-center py-8 text-center",children:[(0,t.jsx)(u.A,{className:"h-16 w-16 text-primary mb-4"}),(0,t.jsx)("h3",{className:"text-xl font-bold mb-2",children:"Appointment Scheduled!"}),(0,t.jsxs)("p",{className:"text-muted-foreground",children:["Your appointment has been scheduled for ",S(e)," at ",s,". We'll send a confirmation to your email shortly."]})]})}):(0,t.jsx)(m.Zp,{className:"p-6 elegant-shadow",children:(0,t.jsxs)("form",{onSubmit:e=>{e.preventDefault(),y(!0),setTimeout(()=>{y(!1),r(null),d(""),p(""),f(""),b("")},3e3)},className:"space-y-4",children:[(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsx)("label",{htmlFor:"name",className:"text-sm font-medium",children:"Full Name"}),(0,t.jsx)(o,{id:"name",value:i,onChange:e=>d(e.target.value),placeholder:"John Doe",required:!0})]}),(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsx)("label",{htmlFor:"email",className:"text-sm font-medium",children:"Email"}),(0,t.jsx)(o,{id:"email",type:"email",value:x,onChange:e=>p(e.target.value),placeholder:"john.doe@example.com",required:!0})]}),(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsx)("label",{htmlFor:"phone",className:"text-sm font-medium",children:"Phone Number"}),(0,t.jsx)(o,{id:"phone",type:"tel",value:h,onChange:e=>f(e.target.value),placeholder:"Your phone number",required:!0})]}),(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsx)("label",{htmlFor:"message",className:"text-sm font-medium",children:"Message (Optional)"}),(0,t.jsx)(c,{id:"message",value:g,onChange:e=>b(e.target.value),placeholder:"Tell us about your project or inquiry...",className:"min-h-[100px]"})]}),(0,t.jsx)("div",{className:"pt-2",children:(0,t.jsx)(n.$,{type:"submit",className:"w-full elegant-shadow",children:"Schedule Appointment"})})]})})]})]})};function S(){let[e,a]=(0,l.useState)(!1);return(0,t.jsxs)("main",{className:"flex flex-col min-h-screen",children:[(0,t.jsx)("section",{className:"pt-24 pb-12 md:pt-32 md:pb-24",children:(0,t.jsx)("div",{className:"container px-4 md:px-6",children:(0,t.jsx)("div",{className:"flex flex-col items-center text-center space-y-4",children:(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsx)(g.default,{text:"Contact Us",className:"text-3xl font-bold tracking-tighter sm:text-5xl",animation:"slide-up"}),(0,t.jsx)(g.default,{text:"Get in touch with our team to discuss your project or inquire about our services.",className:"max-w-[700px] text-muted-foreground md:text-xl",animation:"fade-in",delay:.2})]})})})}),(0,t.jsx)("section",{className:"w-full py-12 md:py-24 lg:py-32 bg-muted",children:(0,t.jsx)("div",{className:"container px-4 md:px-6",children:(0,t.jsxs)("div",{className:"grid gap-10 lg:grid-cols-2 lg:gap-12",children:[(0,t.jsxs)(m.Zp,{className:"elegant-shadow",children:[(0,t.jsxs)(m.aR,{children:[(0,t.jsx)(m.ZB,{children:"Send Us a Message"}),(0,t.jsx)(m.BT,{children:"Fill out the form below and we'll get back to you as soon as possible."})]}),(0,t.jsx)(m.Wu,{children:e?(0,t.jsxs)("div",{className:"flex flex-col items-center justify-center py-8 text-center",children:[(0,t.jsx)(u.A,{className:"h-16 w-16 text-primary mb-4"}),(0,t.jsx)("h3",{className:"text-xl font-bold mb-2",children:"Message Sent!"}),(0,t.jsx)("p",{className:"text-muted-foreground",children:"Thank you for reaching out. We'll get back to you shortly."})]}):(0,t.jsxs)("form",{onSubmit:e=>{e.preventDefault(),a(!0),setTimeout(()=>{a(!1),e.target.reset()},3e3)},className:"space-y-4",children:[(0,t.jsxs)("div",{className:"grid gap-4 sm:grid-cols-2",children:[(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsx)("label",{htmlFor:"first-name",className:"text-sm font-medium",children:"First Name"}),(0,t.jsx)(o,{id:"first-name",placeholder:"John",required:!0})]}),(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsx)("label",{htmlFor:"last-name",className:"text-sm font-medium",children:"Last Name"}),(0,t.jsx)(o,{id:"last-name",placeholder:"Doe",required:!0})]})]}),(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsx)("label",{htmlFor:"email",className:"text-sm font-medium",children:"Email"}),(0,t.jsx)(o,{id:"email",type:"email",placeholder:"john.doe@example.com",required:!0})]}),(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsx)("label",{htmlFor:"phone",className:"text-sm font-medium",children:"Phone Number"}),(0,t.jsx)(o,{id:"phone",type:"tel",placeholder:"Your phone number"})]}),(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsx)("label",{htmlFor:"subject",className:"text-sm font-medium",children:"Subject"}),(0,t.jsx)(o,{id:"subject",placeholder:"Project Inquiry",required:!0})]}),(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsx)("label",{htmlFor:"message",className:"text-sm font-medium",children:"Message"}),(0,t.jsx)(c,{id:"message",placeholder:"Tell us about your project or inquiry...",className:"min-h-[150px]",required:!0})]}),(0,t.jsxs)(n.$,{type:"submit",className:"w-full gap-1 elegant-shadow",children:["Send Message ",(0,t.jsx)(x.A,{className:"h-4 w-4"})]})]})})]}),(0,t.jsxs)("div",{className:"space-y-8",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h2",{className:"text-2xl font-bold mb-4",children:"Contact Information"}),(0,t.jsx)("p",{className:"text-muted-foreground mb-6",children:"Reach out to us directly using the contact information below."}),(0,t.jsxs)("div",{className:"space-y-4",children:[(0,t.jsxs)("div",{className:"flex items-start gap-3",children:[(0,t.jsx)(p.A,{className:"h-5 w-5 text-primary shrink-0 mt-0.5"}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{className:"font-medium",children:"Address"}),(0,t.jsxs)("p",{className:"text-muted-foreground",children:["Adelaide, SA",(0,t.jsx)("br",{}),"Australia"]})]})]}),(0,t.jsxs)("div",{className:"flex items-start gap-3",children:[(0,t.jsx)(h.A,{className:"h-5 w-5 text-primary shrink-0 mt-0.5"}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{className:"font-medium",children:"Phone"}),(0,t.jsx)("p",{className:"text-muted-foreground",children:"000000"})]})]}),(0,t.jsxs)("div",{className:"flex items-start gap-3",children:[(0,t.jsx)(f.A,{className:"h-5 w-5 text-primary shrink-0 mt-0.5"}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{className:"font-medium",children:"Email"}),(0,t.jsx)("p",{className:"text-muted-foreground",children:"info@calipr.com.au"})]})]})]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h2",{className:"text-2xl font-bold mb-4",children:"Business Hours"}),(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsxs)("div",{className:"flex justify-between",children:[(0,t.jsx)("span",{children:"Monday - Friday:"}),(0,t.jsx)("span",{children:"9:00 AM - 6:00 PM"})]}),(0,t.jsxs)("div",{className:"flex justify-between",children:[(0,t.jsx)("span",{children:"Saturday:"}),(0,t.jsx)("span",{children:"10:00 AM - 4:00 PM"})]}),(0,t.jsxs)("div",{className:"flex justify-between",children:[(0,t.jsx)("span",{children:"Sunday:"}),(0,t.jsx)("span",{children:"Closed"})]})]})]})]})]})})}),(0,t.jsx)("section",{className:"w-full py-12 md:py-24 lg:py-32",children:(0,t.jsxs)("div",{className:"container px-4 md:px-6",children:[(0,t.jsxs)("div",{className:"flex flex-col items-center text-center space-y-4 mb-12",children:[(0,t.jsx)(g.default,{text:"Book an Appointment",className:"text-3xl font-bold tracking-tighter",animation:"slide-up"}),(0,t.jsx)(g.default,{text:"Schedule a consultation with our team to discuss your project in detail.",className:"max-w-[700px] text-muted-foreground md:text-xl",animation:"fade-in",delay:.2})]}),(0,t.jsx)(C,{})]})}),(0,t.jsx)("section",{className:"w-full py-12 md:py-24 lg:py-32 bg-muted",children:(0,t.jsxs)("div",{className:"container px-4 md:px-6",children:[(0,t.jsxs)("div",{className:"flex flex-col items-center text-center space-y-4 mb-12",children:[(0,t.jsx)(g.default,{text:"Frequently Asked Questions",className:"text-3xl font-bold tracking-tighter",animation:"slide-up"}),(0,t.jsx)(g.default,{text:"Find answers to common questions about our services and process.",className:"max-w-[700px] text-muted-foreground md:text-xl",animation:"fade-in",delay:.2})]}),(0,t.jsx)("div",{className:"grid gap-6 md:grid-cols-2 lg:gap-12",children:[{question:"What services does Calipr offer?",answer:"Calipr offers a comprehensive range of IT services including website development, mobile app development, CRM integration, web app development, UI/UX design, and quality assurance testing."},{question:"How long does a typical project take?",answer:"Project timelines vary depending on complexity and scope. A simple website might take 4-6 weeks, while a complex web application could take 3-6 months. We provide detailed timelines during the project planning phase."},{question:"Do you provide ongoing support after project completion?",answer:"Yes, we offer various support and maintenance packages to ensure your digital products continue to perform optimally after launch. Our team is available for updates, bug fixes, and enhancements."},{question:"What is your development process?",answer:"We follow an agile development methodology that includes discovery, planning, design, development, testing, deployment, and post-launch support. This iterative approach ensures transparency and allows for adjustments throughout the project."},{question:"How do you handle project pricing?",answer:"We offer flexible pricing models including fixed-price quotes for well-defined projects and time-and-materials billing for more complex or evolving projects. We provide detailed estimates after understanding your specific requirements."},{question:"Can you work with our existing systems and technologies?",answer:"Yes, our team is experienced in integrating with a wide range of existing systems and technologies. We conduct thorough assessments to ensure seamless integration with your current infrastructure."}].map((e,a)=>(0,t.jsxs)(m.Zp,{className:"card-hover elegant-shadow",children:[(0,t.jsx)(m.aR,{children:(0,t.jsx)(m.ZB,{className:"text-xl",children:e.question})}),(0,t.jsx)(m.Wu,{children:(0,t.jsx)("p",{className:"text-muted-foreground",children:e.answer})})]},a))})]})}),(0,t.jsxs)("section",{className:"w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 relative overflow-hidden",children:[(0,t.jsx)("div",{className:"absolute inset-0 bg-[url('/patterns/circuit-board.svg')] opacity-10"}),(0,t.jsx)("div",{className:"absolute inset-0 bg-gradient-to-b from-transparent to-black/20"}),(0,t.jsxs)("div",{className:"container px-4 md:px-6 text-center relative z-10",children:[(0,t.jsx)(g.default,{text:"Ready to Transform Your Business?",className:"text-3xl font-bold tracking-tighter md:text-4xl/tight mb-4 text-white",animation:"slide-up"}),(0,t.jsx)(g.default,{text:"Let's discuss how Calipr can help you achieve your technology goals and drive your business forward.",className:"max-w-[700px] mx-auto mb-8 text-white/90 md:text-xl",animation:"fade-in",delay:.2}),(0,t.jsx)(n.$,{size:"lg",variant:"secondary",asChild:!0,className:"elegant-shadow backdrop-blur-sm bg-white/90 text-primary hover:bg-white",children:(0,t.jsx)(i(),{href:"#top",children:"Contact Us Today"})}),(0,t.jsx)("div",{className:"absolute top-10 left-10 w-20 h-20 rounded-full bg-blue-500/20 animate-float"}),(0,t.jsx)("div",{className:"absolute bottom-10 right-10 w-32 h-32 rounded-full bg-purple-500/20 animate-float animation-delay-1000"}),(0,t.jsx)("div",{className:"absolute top-1/2 right-1/4 w-16 h-16 rounded-full bg-indigo-500/20 animate-float animation-delay-2000"})]})]})]})}},5583:(e,a,s)=>{Promise.resolve().then(s.bind(s,4357))},7168:(e,a,s)=>{"use strict";s.d(a,{$:()=>o,r:()=>d});var t=s(5155),l=s(2115),r=s(4624),i=s(2085),n=s(3999);let d=(0,i.F)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),o=l.forwardRef((e,a)=>{let{className:s,variant:l,size:i,asChild:o=!1,...c}=e,m=o?r.DX:"button";return(0,t.jsx)(m,{className:(0,n.cn)(d({variant:l,size:i,className:s})),ref:a,...c})});o.displayName="Button"},8482:(e,a,s)=>{"use strict";s.d(a,{BT:()=>o,Wu:()=>c,ZB:()=>d,Zp:()=>i,aR:()=>n,wL:()=>m});var t=s(5155),l=s(2115),r=s(3999);let i=l.forwardRef((e,a)=>{let{className:s,...l}=e;return(0,t.jsx)("div",{ref:a,className:(0,r.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",s),...l})});i.displayName="Card";let n=l.forwardRef((e,a)=>{let{className:s,...l}=e;return(0,t.jsx)("div",{ref:a,className:(0,r.cn)("flex flex-col space-y-1.5 p-6",s),...l})});n.displayName="CardHeader";let d=l.forwardRef((e,a)=>{let{className:s,...l}=e;return(0,t.jsx)("h3",{ref:a,className:(0,r.cn)("text-2xl font-semibold leading-none tracking-tight",s),...l})});d.displayName="CardTitle";let o=l.forwardRef((e,a)=>{let{className:s,...l}=e;return(0,t.jsx)("p",{ref:a,className:(0,r.cn)("text-sm text-muted-foreground",s),...l})});o.displayName="CardDescription";let c=l.forwardRef((e,a)=>{let{className:s,...l}=e;return(0,t.jsx)("div",{ref:a,className:(0,r.cn)("p-6 pt-0",s),...l})});c.displayName="CardContent";let m=l.forwardRef((e,a)=>{let{className:s,...l}=e;return(0,t.jsx)("div",{ref:a,className:(0,r.cn)("flex items-center p-6 pt-0",s),...l})});m.displayName="CardFooter"}},e=>{var a=a=>e(e.s=a);e.O(0,[342,687,149,441,684,358],()=>a(5583)),_N_E=e.O()}]);