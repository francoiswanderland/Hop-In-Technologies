(()=>{var K=Object.defineProperty;var U=(e,t,r)=>t in e?K(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var L=(e,t,r)=>(U(e,typeof t!="symbol"?t+"":t,r),r);var E=(e,t,r)=>new Promise((s,l)=>{var o=n=>{try{i(r.next(n))}catch(a){l(a)}},c=n=>{try{i(r.throw(n))}catch(a){l(a)}},i=n=>n.done?s(n.value):Promise.resolve(n.value).then(o,c);i((r=r.apply(e,t)).next())});var p=class{static activateAlerts(){this.alertsActivated=!0}static alert(t,r){if(this.alertsActivated&&window.alert(t),r==="error")throw new Error(t)}};L(p,"alertsActivated",!1);var w=e=>e.replace(/\/+$/,"");var A=e=>{let t=(s,l,o)=>{let c=e[s],{key:i,values:n}=c,a;if(!l)return`[${i}]`;let f=n==null?void 0:n[l];if(typeof f=="string"?a=f:a=f(o&&"instanceIndex"in o?o.instanceIndex:void 0),!(o==null?void 0:o.operator))return`[${i}="${a}"]`;switch(o.operator){case"prefixed":return`[${i}^="${a}"]`;case"suffixed":return`[${i}$="${a}"]`;case"contains":return`[${i}*="${a}"]`}};return[t,(s,l)=>{let o=t("element",s,l);return((l==null?void 0:l.scope)||document).querySelector(o)}]};var S="fs-attributes",b={preventLoad:{key:`${S}-preventload`},debugMode:{key:`${S}-debug`},src:{key:"src",values:{finsweet:"@finsweet/attributes"}},dev:{key:`${S}-dev`}},[h,ae]=A(b);var N=()=>{let{currentScript:e}=document,{preventLoad:t,debugMode:r}=b,s=typeof(e==null?void 0:e.getAttribute(t.key))=="string";return typeof(e==null?void 0:e.getAttribute(r.key))=="string"&&p.activateAlerts(),{preventsLoad:s}};var P=()=>{if(window.fsAttributes&&!Array.isArray(window.fsAttributes))return;let e={cms:{},push(...t){var r,s;for(let[l,o]of t)(s=(r=this[l])==null?void 0:r.loading)==null||s.then(o)}};B(e),H(e),window.fsAttributes=e,window.FsAttributes=window.fsAttributes},B=e=>{let t=h("src","finsweet",{operator:"contains"}),r=h("dev"),l=[...document.querySelectorAll(`script${t}, script${r}`)].reduce((o,c)=>{var n;let i=c.getAttribute(b.dev.key)||((n=c.src.match(/[\w-. ]+(?=(\.js)$)/))==null?void 0:n[0]);return i&&!o.includes(i)&&o.push(i),o},[]);for(let o of l){e[o]={};let c=e[o];c.loading=new Promise(i=>{c.resolve=n=>{i(n),delete c.resolve}})}},H=e=>{let t=Array.isArray(window.fsAttributes)?window.fsAttributes:[];e.push(...t)};var q="https://cdn.jsdelivr.net/npm/@finsweet/attributes-cmscore@1/cmscore.js",v=()=>E(void 0,null,function*(){let{fsAttributes:e}=window;e.cms||(e.cms={});let{cms:t}=e;if(t.coreImport)return t.coreImport;try{let r=import(q);return t.coreImport=r,r.then(s=>{s&&(t.coreVersion||(t.coreVersion=s.version))}),r}catch(r){p.alert(`${r}`,"error");return}});var k="1.3.0";var u="cmsprevnext",Y=`fs-${u}`,X="list",W="previous",G="previous-empty",J="next",z="next-empty",Q={element:{key:`${Y}-element`,values:{list:X,previous:W,previousEmpty:G,next:J,nextEmpty:z}}},[V,x]=A(Q);var F=()=>{let e=x("previous",{operator:"prefixed"}),t=x("next",{operator:"prefixed"});if(!e&&!t)return;let r=x("previousEmpty",{operator:"prefixed"});r==null||r.remove();let s=x("nextEmpty",{operator:"prefixed"});return s==null||s.remove(),{previousPlaceholder:e,nextPlaceholder:t,previousEmptyElement:r,nextEmptyElement:s}};var I=()=>E(void 0,null,function*(){var M,$;let e=yield v();if(!e)return[];let t=!1,r=!1,s=e.createCMSListInstances([V("element","list",{operator:"prefixed"})]);if(!s.length)return[];let l=F();if(!l)return[];let{previousPlaceholder:o,nextPlaceholder:c,previousEmptyElement:i,nextEmptyElement:n}=l,{origin:a,pathname:f}=window.location,j=a+f,C=()=>(!o||o&&t)&&(!c||c&&r);for(let d of s){if(C())break;let y=g=>{if(C()){d.off("additems",y),d.wrapper.remove();return}let T=g.findIndex(({href:m})=>m&&w(m)===w(j));if(!(T<0)){if(o){let m=g[T-1];m&&!t?(i==null||i.remove(),o.appendChild(m.element),t=!0):i&&o.appendChild(i)}if(c){let m=g[T+1];m&&!r?(n==null||n.remove(),c.appendChild(m.element),r=!0):n&&c.appendChild(n)}}};d.on("additems",y),y(d.items),d.wrapper.style.display="none"}return($=(M=window.fsAttributes[u]).resolve)==null||$.call(M,s),s});P();v();var R,O;(R=window.fsAttributes)[O=u]||(R[O]={});var{preventsLoad:Z}=N(),_=window.fsAttributes[u];_.version=k;Z?_.init=I:(window.Webflow||(window.Webflow=[]),window.Webflow.push(I));})();
