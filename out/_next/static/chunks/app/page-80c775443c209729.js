(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{444:function(e,t,n){Promise.resolve().then(n.bind(n,4897)),Promise.resolve().then(n.bind(n,1885)),Promise.resolve().then(n.bind(n,5400)),Promise.resolve().then(n.t.bind(n,1749,23)),Promise.resolve().then(n.t.bind(n,5250,23))},4897:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var r=n(7437),s=n(2265),o=n(3802),a=n.n(o);let i=["x","y","top","bottom","left","right","width","height"],l=(e,t)=>i.every(n=>e[n]===t[n]);var d=n(703),c=()=>{let[e]=function(e){var t;let{debounce:n,scroll:r,polyfill:o,offsetSize:i}=void 0===e?{debounce:0,scroll:!1,offsetSize:!1}:e,d=o||("undefined"==typeof window?class{}:window.ResizeObserver);if(!d)throw Error("This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills");let[c,u]=(0,s.useState)({left:0,top:0,width:0,height:0,bottom:0,right:0,x:0,y:0}),m=(0,s.useRef)({element:null,scrollContainers:null,resizeObserver:null,lastBounds:c}),f=n?"number"==typeof n?n:n.scroll:null,p=n?"number"==typeof n?n:n.resize:null,h=(0,s.useRef)(!1);(0,s.useEffect)(()=>(h.current=!0,()=>void(h.current=!1)));let[x,g,y]=(0,s.useMemo)(()=>{let e=()=>{if(!m.current.element)return;let{left:e,top:t,width:n,height:r,bottom:s,right:o,x:a,y:d}=m.current.element.getBoundingClientRect(),c={left:e,top:t,width:n,height:r,bottom:s,right:o,x:a,y:d};m.current.element instanceof HTMLElement&&i&&(c.height=m.current.element.offsetHeight,c.width=m.current.element.offsetWidth),Object.freeze(c),h.current&&!l(m.current.lastBounds,c)&&u(m.current.lastBounds=c)};return[e,p?a()(e,p):e,f?a()(e,f):e]},[u,i,f,p]);function v(){m.current.scrollContainers&&(m.current.scrollContainers.forEach(e=>e.removeEventListener("scroll",y,!0)),m.current.scrollContainers=null),m.current.resizeObserver&&(m.current.resizeObserver.disconnect(),m.current.resizeObserver=null)}function b(){m.current.element&&(m.current.resizeObserver=new d(y),m.current.resizeObserver.observe(m.current.element),r&&m.current.scrollContainers&&m.current.scrollContainers.forEach(e=>e.addEventListener("scroll",y,{capture:!0,passive:!0})))}return t=!!r,(0,s.useEffect)(()=>{if(t)return window.addEventListener("scroll",y,{capture:!0,passive:!0}),()=>void window.removeEventListener("scroll",y,!0)},[y,t]),(0,s.useEffect)(()=>(window.addEventListener("resize",g),()=>void window.removeEventListener("resize",g)),[g]),(0,s.useEffect)(()=>{v(),b()},[r,y,g]),(0,s.useEffect)(()=>v,[]),[e=>{e&&e!==m.current.element&&(v(),m.current.element=e,m.current.scrollContainers=function e(t){let n=[];if(!t||t===document.body)return n;let{overflow:r,overflowX:s,overflowY:o}=window.getComputedStyle(t);return[r,s,o].some(e=>"auto"===e||"scroll"===e)&&n.push(t),[...n,...e(t.parentElement)]}(e),b())},c,x]}(),[t,n]=(0,s.useState)(-1);return(0,r.jsxs)("main",{children:[(0,r.jsx)("div",{className:"py-7 flex justify-center items-center font-bold text-4xl text-center bg-slate-300",children:(0,r.jsx)("h3",{children:"More than +60 Website working with us"})}),(0,r.jsx)("div",{className:"w-full flex justify-center items-center overflow-x-scroll scroll-smooth snap-x snap-mandatory pt-8 gap-8 flex-wrap flex-row",ref:e,children:["images/logo/logoipsum-330.svg","images/logo/logoipsum-274.svg","images/logo/logoipsum-286.svg","images/logo/logoipsum-332.svg","images/logo/logoipsum-297.svg","images/logo/logoipsum-331.svg"].map((e,s)=>(0,r.jsx)("div",{className:"snap-item w-fit px-4 transition duration-300 ease-in-out pb-16  ".concat(t===s?"opacity-100 filter blur-0":"opacity-70 filter blur-2"),children:(0,r.jsx)(d.default,{src:e,alt:"Logo ".concat(s),width:150,height:150,className:"object-contain mr-4",onMouseEnter:()=>n(s),onMouseLeave:()=>n(-1)})},s))})]})}},1885:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return j}});var r=n(7437),s=n(2265),o=n(8792),a=n(1657),i=n(709),l=n(7742),d=n(3441);let c=s.forwardRef((e,t)=>{let{className:n,children:s,...o}=e;return(0,r.jsxs)(i.fC,{ref:t,className:(0,a.cn)("relative z-10 flex max-w-max flex-1 items-center justify-center",n),...o,children:[s,(0,r.jsx)(g,{})]})});c.displayName=i.fC.displayName;let u=s.forwardRef((e,t)=>{let{className:n,...s}=e;return(0,r.jsx)(i.aV,{ref:t,className:(0,a.cn)("group flex flex-1 list-none items-center justify-center space-x-1",n),...s})});u.displayName=i.aV.displayName;let m=i.ck,f=(0,l.j)("group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-md font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"),p=s.forwardRef((e,t)=>{let{className:n,children:s,...o}=e;return(0,r.jsxs)(i.xz,{ref:t,className:(0,a.cn)(f(),"group",n),...o,children:[s," ",(0,r.jsx)(d.Z,{className:"relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180","aria-hidden":"true"})]})});p.displayName=i.xz.displayName;let h=s.forwardRef((e,t)=>{let{className:n,...s}=e;return(0,r.jsx)(i.VY,{ref:t,className:(0,a.cn)("left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",n),...s})});h.displayName=i.VY.displayName;let x=i.rU,g=s.forwardRef((e,t)=>{let{className:n,...s}=e;return(0,r.jsx)("div",{className:(0,a.cn)("absolute left-0 top-full flex justify-center"),children:(0,r.jsx)(i.l_,{className:(0,a.cn)("origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",n),ref:t,...s})})});g.displayName=i.l_.displayName,s.forwardRef((e,t)=>{let{className:n,...s}=e;return(0,r.jsx)(i.z$,{ref:t,className:(0,a.cn)("top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",n),...s,children:(0,r.jsx)("div",{className:"relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md"})})}).displayName=i.z$.displayName;var y=n(703),v=()=>(0,r.jsx)("div",{children:(0,r.jsx)("a",{href:"/",children:(0,r.jsx)(y.default,{src:"images/logo/logoipsum-330.svg",width:150,height:150,alt:"logo"})})});let b=[{title:"Our Service",href:"/",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},{title:"Markting",href:"/",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},{title:"Feature",href:"/",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},{title:"Pricing",href:"/",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},{title:"Contact Us",href:"/",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},{title:"Get started",href:"/",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}],w=s.forwardRef((e,t)=>{let{className:n,title:s,children:o,...i}=e;return(0,r.jsx)("li",{children:(0,r.jsx)(x,{asChild:!0,children:(0,r.jsxs)("a",{ref:t,className:(0,a.cn)("block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",n),...i,children:[(0,r.jsx)("div",{className:"text-sm font-medium leading-none",children:s}),(0,r.jsx)("p",{className:"line-clamp-2 text-sm leading-snug text-muted-foreground",children:o})]})})})});w.displayName="ListItem";var j=()=>(0,r.jsx)(c,{children:(0,r.jsxs)(u,{className:"hidden md:flex space-x-4",children:[(0,r.jsxs)(m,{children:[(0,r.jsx)(p,{children:"Getting started"}),(0,r.jsx)(h,{children:(0,r.jsxs)("ul",{className:"grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]",children:[(0,r.jsx)("li",{className:"row-span-3",children:(0,r.jsx)(x,{asChild:!0,children:(0,r.jsxs)("a",{className:"flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md",href:"/",children:[(0,r.jsx)(v,{}),(0,r.jsx)("div",{className:"mb-2 mt-4 text-lg font-medium",children:"copra"}),(0,r.jsx)("p",{className:"text-sm leading-tight text-muted-foreground",children:"Beautifully designed website for portifilio you just need to use your mind Open Source."})]})})}),(0,r.jsx)(w,{href:"/",title:"Introduction",children:"lets see how to do that in ur mind."}),(0,r.jsx)(w,{href:"/",title:"we are ",children:"How to see us in ur mind."}),(0,r.jsx)(w,{href:"/",title:"Typography",children:"why not ??"})]})})]}),(0,r.jsxs)(m,{children:[(0,r.jsx)(p,{children:"Components"}),(0,r.jsx)(h,{children:(0,r.jsx)("ul",{className:"grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ",children:b.map(e=>(0,r.jsx)(w,{title:e.title,href:e.href,children:e.description},e.title))})})]}),(0,r.jsx)(m,{children:(0,r.jsx)(o.default,{href:"/",legacyBehavior:!0,passHref:!0,children:(0,r.jsx)(x,{className:f(),children:"Documentation"})})})]})})},5400:function(e,t,n){"use strict";n.r(t),n.d(t,{Sheet:function(){return d},SheetClose:function(){return u},SheetContent:function(){return h},SheetDescription:function(){return v},SheetFooter:function(){return g},SheetHeader:function(){return x},SheetOverlay:function(){return f},SheetPortal:function(){return m},SheetTitle:function(){return y},SheetTrigger:function(){return c}});var r=n(7437),s=n(2265),o=n(6629),a=n(7742),i=n(2235),l=n(1657);let d=o.fC,c=o.xz,u=o.x8,m=o.h_,f=s.forwardRef((e,t)=>{let{className:n,...s}=e;return(0,r.jsx)(o.aV,{className:(0,l.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",n),...s,ref:t})});f.displayName=o.aV.displayName;let p=(0,a.j)("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",{variants:{side:{top:"inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",bottom:"inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",left:"inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",right:"inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"}},defaultVariants:{side:"right"}}),h=s.forwardRef((e,t)=>{let{side:n="right",className:s,children:a,...d}=e;return(0,r.jsxs)(m,{children:[(0,r.jsx)(f,{}),(0,r.jsxs)(o.VY,{ref:t,className:(0,l.cn)(p({side:n}),s),...d,children:[a,(0,r.jsxs)(o.x8,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",children:[(0,r.jsx)(i.Z,{className:"h-4 w-4"}),(0,r.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})});h.displayName=o.VY.displayName;let x=e=>{let{className:t,...n}=e;return(0,r.jsx)("div",{className:(0,l.cn)("flex flex-col space-y-2 text-center sm:text-left",t),...n})};x.displayName="SheetHeader";let g=e=>{let{className:t,...n}=e;return(0,r.jsx)("div",{className:(0,l.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",t),...n})};g.displayName="SheetFooter";let y=s.forwardRef((e,t)=>{let{className:n,...s}=e;return(0,r.jsx)(o.Dx,{ref:t,className:(0,l.cn)("text-lg font-semibold text-foreground",n),...s})});y.displayName=o.Dx.displayName;let v=s.forwardRef((e,t)=>{let{className:n,...s}=e;return(0,r.jsx)(o.dk,{ref:t,className:(0,l.cn)("text-sm text-muted-foreground",n),...s})});v.displayName=o.dk.displayName},1657:function(e,t,n){"use strict";n.d(t,{cn:function(){return o}});var r=n(3167),s=n(1367);function o(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,s.m6)((0,r.W)(t))}},3802:function(e){function t(e,t,n){function r(){var d=Date.now()-i;d<t&&d>=0?s=setTimeout(r,t-d):(s=null,n||(l=e.apply(a,o),a=o=null))}null==t&&(t=100);var s,o,a,i,l,d=function(){a=this,o=arguments,i=Date.now();var d=n&&!s;return s||(s=setTimeout(r,t)),d&&(l=e.apply(a,o),a=o=null),l};return d.clear=function(){s&&(clearTimeout(s),s=null)},d.flush=function(){s&&(l=e.apply(a,o),a=o=null,clearTimeout(s),s=null)},d}t.debounce=t,e.exports=t}},function(e){e.O(0,[703,964,971,69,744],function(){return e(e.s=444)}),_N_E=e.O()}]);