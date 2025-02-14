const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./BookShelf.js","./vendor.js","./vendor.css","./loading.js","./loading.css","./BookShelf.css","./BookChapter.js","./BookChapter.css"])))=>i.map(i=>d[i]);
var $e=Object.defineProperty;var je=(e,o,t)=>o in e?$e(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t;var ie=(e,o,t)=>je(e,typeof o!="symbol"?o+"":o,t);import{r as Ke,c as C,o as g,a as ae,b as ce,d as j,e as B,F as N,f as h,g as S,E as We,u as i,l as V,w as p,h as y,i as we,j as He,k as qe,m as ue,t as Ce,n as k,p as Fe,q as Ue,s as $,v as ze,x as Ee,y as ee,z as de,A as Be,B as P,C as te,D as xe,G as H,H as Ge,I as Ye,J as Se,K as Qe,V as Xe,L as pe,M as I,N as Ze,O as et,P as K,Q as Re,R as Le,S as tt,T as ot,U as nt,W as z,X as rt,Y as st,Z as it,_ as lt,$ as at,a0 as ct,a1 as ut}from"./vendor.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const M=(e,o)=>{const t=e.__vccOpts||e;for(const[n,r]of o)t[n]=r;return t},dt={};function pt(e,o){const t=Ke("router-view");return g(),C(t)}const Ie=M(dt,[["render",pt]]),gt="modulepreload",ht=function(e,o){return new URL(e,o).href},fe={},ye=function(o,t,n){let r=Promise.resolve();if(t&&t.length>0){const c=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),b=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));r=Promise.allSettled(t.map(w=>{if(w=ht(w,n),w in fe)return;fe[w]=!0;const U=w.endsWith(".css"),x=U?'[rel="stylesheet"]':"";if(!!n)for(let _=c.length-1;_>=0;_--){const v=c[_];if(v.href===w&&(!U||v.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${w}"]${x}`))return;const l=document.createElement("link");if(l.rel=U?"stylesheet":gt,U||(l.as="script"),l.crossOrigin="",l.href=w,b&&l.setAttribute("nonce",b),document.head.appendChild(l),U)return new Promise((_,v)=>{l.addEventListener("load",_),l.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${w}`)))})}))}function s(c){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=c,window.dispatchEvent(a),!a.defaultPrevented)throw c}return r.then(c=>{for(const a of c||[])a.status==="rejected"&&s(a.reason);return o().catch(s)})},Te=[{path:"/",name:"shelf",component:()=>ye(()=>import("./BookShelf.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url)},{path:"/chapter",name:"chapter",component:()=>ye(()=>import("./BookChapter.js"),__vite__mapDeps([6,1,2,3,4,7]),import.meta.url)}];ae({history:ce(),routes:Te});const mt={style:{"margin-top":"20px"}},St=j({__name:"SourceHelp",setup(e){return(o,t)=>{const n=We,r=we;return g(),B(N,null,[h(n,{icon:i(V),href:"/help/#appHelp",target:"_blank"},{default:p(()=>t[0]||(t[0]=[y("APP帮助文档")])),_:1},8,["icon"]),t[19]||(t[19]=S("br",null,null,-1)),h(n,{icon:i(V),href:"/help/#ruleHelp",target:"_blank"},{default:p(()=>t[1]||(t[1]=[y("书源制作教程")])),_:1},8,["icon"]),t[20]||(t[20]=S("br",null,null,-1)),h(n,{icon:i(V),href:"/help/#jsHelp",target:"_blank"},{default:p(()=>t[2]||(t[2]=[y("js变量和函数")])),_:1},8,["icon"]),t[21]||(t[21]=S("br",null,null,-1)),h(n,{icon:i(V),href:"/help/#xpathHelp",target:"_blank"},{default:p(()=>t[3]||(t[3]=[y("xpath语法教程")])),_:1},8,["icon"]),t[22]||(t[22]=S("br",null,null,-1)),h(n,{icon:i(V),href:"/help/#regexHelp",target:"_blank"},{default:p(()=>t[4]||(t[4]=[y("正则表达式教程")])),_:1},8,["icon"]),t[23]||(t[23]=S("br",null,null,-1)),h(n,{icon:i(V),href:"/help/#txtTocRuleHelp",target:"_blank"},{default:p(()=>t[5]||(t[5]=[y("txt目录正则说明")])),_:1},8,["icon"]),t[24]||(t[24]=S("br",null,null,-1)),h(n,{icon:i(V),href:"/help/#debugHelp",target:"_blank"},{default:p(()=>t[6]||(t[6]=[y("书源调试说明")])),_:1},8,["icon"]),t[25]||(t[25]=S("br",null,null,-1)),h(n,{icon:i(V),href:"/help/#httpTTSHelp",target:"_blank"},{default:p(()=>t[7]||(t[7]=[y("在线朗读规则")])),_:1},8,["icon"]),t[26]||(t[26]=S("br",null,null,-1)),h(n,{icon:i(V),href:"/help/#webDavBookHelp",target:"_blank"},{default:p(()=>t[8]||(t[8]=[y(" WebDav书籍简明使用教程")])),_:1},8,["icon"]),t[27]||(t[27]=S("br",null,null,-1)),h(n,{icon:i(V),href:"/help/#webDavHelp",target:"_blank"},{default:p(()=>t[9]||(t[9]=[y(" WebDav备份教程")])),_:1},8,["icon"]),t[28]||(t[28]=S("br",null,null,-1)),h(n,{icon:i(V),href:"https://regexr-cn.com/",target:"_blank"},{default:p(()=>t[10]||(t[10]=[y("正则表达式在线验证工具")])),_:1},8,["icon"]),t[29]||(t[29]=S("br",null,null,-1)),S("div",mt,[S("span",null,[h(r,null,{default:p(()=>t[11]||(t[11]=[S("code",null,"^$()[]{}.?+*|",-1),y(" 这些是Java正则特殊符号,匹配需转义")])),_:1})]),t[15]||(t[15]=S("br",null,null,-1)),S("span",null,[h(r,null,{default:p(()=>t[12]||(t[12]=[S("code",null,"(?s)",-1),y(" 前缀表示跨行解析")])),_:1})]),t[16]||(t[16]=S("br",null,null,-1)),S("span",null,[h(r,null,{default:p(()=>t[13]||(t[13]=[S("code",null,"(?m)",-1),y(" 前缀表示逐行匹配")])),_:1})]),t[17]||(t[17]=S("br",null,null,-1)),S("span",null,[h(r,null,{default:p(()=>t[14]||(t[14]=[S("code",null,"(?i)",-1),y(" 前缀表示忽略大小写")])),_:1})]),t[18]||(t[18]=S("br",null,null,-1))])],64)}}}),ft=M(St,[["__scopeId","data-v-085627fb"]]),Ve="remoteUrl",yt=1e3,E=He.create({baseURL:localStorage.getItem(Ve)||location.origin,timeout:120*yt});let A="",ge="",he=()=>{},W=()=>{};const _t=e=>W=e,bt=e=>{he=e},kt=(e,o)=>{A=new URL(e).toString(),ge=new URL(o).toString(),E.defaults.baseURL=A},vt=async(e=A)=>{const{data:o}=await E.get("getReadConfig",{baseURL:e.toString(),timeout:3e3});if(o.isSuccess)try{return JSON.parse(o.data)}catch{}},wt=e=>E.post("saveReadConfig",e),Ct=e=>E.post("saveBookProgress",e),Ut=e=>{e&&navigator.sendBeacon(new URL("saveBookProgress",A),JSON.stringify(e))},Et=()=>E.get("getBookshelf"),Bt=e=>E.get("getChapterList?url="+encodeURIComponent(e)),xt=(e,o)=>E.get("getBookContent?url="+encodeURIComponent(e)+"&index="+o),Rt=(e,o,t)=>{const n=new WebSocket(new URL("searchBook",ge));n.onerror=he,n.onopen=()=>{n.send(`{"key":"${e}"}`)},n.onmessage=r=>{try{o(JSON.parse(r.data)),W==null||W.call(n,r)}catch{t()}},n.onclose=()=>{t()}},Lt=e=>E.post("saveBook",e),It=e=>E.post("deleteBook",e),Z=/bookSource/i.test(location.href),Tt=()=>Z?E.get("getBookSources"):E.get("getRssSources"),Vt=e=>Z?E.post("saveBookSource",e):E.post("saveRssSource",e),Nt=e=>Z?E.post("saveBookSources",e):E.post("saveRssSources",e),Ot=e=>Z?E.post("deleteBookSources",e):E.post("deleteRssSources",e),Dt=(e,o,t,n)=>{const r=new URL(`${Z?"bookSource":"rssSource"}Debug`,ge),s=new WebSocket(r);s.onerror=he,s.onopen=()=>{s.send(JSON.stringify({tag:e,key:o}))},s.onmessage=c=>{t(c.data),W==null||W.call(s,c)},s.onclose=()=>{n()}},Pt=e=>e.startsWith(A)?e:new URL("cover?path="+encodeURIComponent(e),A).toString(),Jt=(e,o,t)=>o.startsWith(A)?o:new URL("image?path="+encodeURIComponent(o)+"&url="+encodeURIComponent(e)+"&width="+t,A).toString(),J={getReadConfig:vt,saveReadConfig:wt,saveBookProgress:Ct,saveBookProgressWithBeacon:Ut,getBookShelf:Et,getChapterList:Bt,getBookContent:xt,search:Rt,saveBook:Lt,deleteBook:It,getSources:Tt,saveSources:Nt,saveSource:Vt,deleteSource:Ot,debug:Dt,getProxyCoverUrl:Pt,getProxyImageUrl:Jt},X=e=>e==null||e.length===0||/^\s+$/.test(e),xo=e=>/,\s*\{/.test(e)||!(e.startsWith("http")||e.startsWith("data:")||e.startsWith("blob:")),At=(e,o=["https:","http:"])=>{try{const t=new URL(e),{protocol:n}=t;if(!o.includes(n))throw new Error(`Expected protocol ${o.join("/")}, but ${n}`);return!0}catch{return!1}},Ro=e=>{const o=new Date().getTime(),t=Math.floor((o-e)/1e3);let n="";return t<=30?n="刚刚":t<60?n=t+"秒前":t<3600?n=Math.floor(t/60)+"分钟前":t<86400?n=Math.floor(t/3600)+"小时前":t<2592e3?n=Math.floor(t/86400)+"天前":n=qe(new Date(e),"YYYY-MM-DD"),n},Mt={theme:0,font:0,fontSize:18,readWidth:800,infiniteLoading:!1,customFontName:"",jumpDuration:1e3,spacing:{paragraph:1,line:.8,letter:0}};let _e;const $t=ue("book",{state:()=>({searchBooks:[],shelf:[],catalog:[],readingBook:{chapterPos:0,chapterIndex:0},popCataVisible:!1,contentLoading:!0,showContent:!1,config:Mt,miniInterface:!1,readSettingsVisible:!1}),getters:{bookProgress:e=>{var c;if(e.catalog.length==0)return;const{chapterIndex:o,chapterPos:t,name:n,author:r}=e.readingBook,s=(c=e.catalog[o])==null?void 0:c.title;if(s)return{name:n,author:r,durChapterIndex:o,durChapterPos:t,durChapterTime:new Date().getTime(),durChapterTitle:s}},theme:e=>e.config.theme,isNight:e=>e.config.theme==6},actions:{async loadBookShelf(){const e=J.getBookShelf().then(o=>{const{isSuccess:t,data:n,errorMsg:r}=o.data;if(t===!0)this.shelf.length!==n.length&&this.shelf.length>0&&n.length>0&&k.info("书架数据已更新"),this.shelf=n.sort((s,c)=>{const a=s.durChapterTime||0;return(c.durChapterTime||0)-a});else{if(r.includes("还没有添加小说")&&this.shelf.length>0)return k.info("当前书架上的书籍已经被删除"),this.shelf=[];k.error(r??"后端返回格式错误！")}return this.shelf});return this.shelf.length>0?this.shelf:await e},async loadWebCatalog(e){const{bookUrl:o,name:t,chapterIndex:n}=e,r=J.getChapterList(o).then(s=>{const{isSuccess:c,data:a,errorMsg:b}=s.data;if(c===!1)throw k.error(b),new Error;return o===this.readingBook.bookUrl&&a.length!==this.catalog.length&&a.length>0&&this.catalog.length>0&&k.info(`书籍${t}: 章节目录已更新`),this.catalog=a,this.catalog});return o===this.readingBook.bookUrl&&this.catalog.length>0&&this.catalog.length-1>=n?this.catalog:await r},setPopCataVisible(e){this.popCataVisible=e},setContentLoading(e){this.contentLoading=e},setReadingBook(e){this.readingBook=e},async loadWebConfig(){if(_e===void 0){const e=await J.getReadConfig();return _e=new Date,this.setConfig(e)}},setConfig(e){this.config=Object.assign({},this.config,e)},setReadSettingsVisible(e){this.readSettingsVisible=e},setShowContent(e){this.showContent=e},setMiniInterface(e){this.miniInterface=e},async setSearchBooks(e){e.forEach(o=>{this.shelf.every(n=>n.bookUrl!==o.bookUrl)===!0&&this.searchBooks.push(o)})},clearSearchBooks(){this.searchBooks=[]},async saveBookProgress(){if(!this.bookProgress)return Promise.resolve();const{bookUrl:e}=this.readingBook,o=Ce(this.shelf),t=o.findIndex(n=>n.bookUrl===e);return t>-1&&(this.shelf[t]=Object.assign({},o[t],this.bookProgress)),J.saveBookProgressWithBeacon(this.bookProgress)}}}),oe=e=>"bookSourceName"in e,jt=e=>oe(e)?!X(e.bookSourceName)&&!X(e.bookSourceUrl)&&!X(e.bookSourceType):!X(e.sourceName)&&!X(e.sourceUrl),ne=e=>oe(e)?e.bookSourceUrl:e.sourceUrl,me=e=>oe(e)?e.bookSourceName:e.sourceName,Kt=(e,o)=>{var t,n,r,s;return oe(e)?(e.bookSourceName.includes(o)||e.bookSourceUrl.includes(o)||((t=e.bookSourceGroup)==null?void 0:t.includes(o))||((n=e.bookSourceComment)==null?void 0:n.includes(o)))??!1:(e.sourceName.includes(o)||e.sourceUrl.includes(o)||((r=e.sourceGroup)==null?void 0:r.includes(o))||((s=e.sourceComment)==null?void 0:s.includes(o)))??!1},le=e=>{const o=new Map;return e.forEach(t=>o.set(ne(t),t)),o},Wt={ruleSearch:{},ruleBookInfo:{},ruleToc:{},ruleContent:{},ruleReview:{},ruleExplore:{}},Ht={},G=/bookSource/i.test(location.href),be=G?Wt:Ht,q=ue("source",{state:()=>({bookSources:[],rssSources:[],savedSources:[],currentSource:JSON.parse(JSON.stringify(be)),currentTab:localStorage.getItem("tabName")||"editTab",editTabSource:{},isDebuging:!1}),getters:{sources:e=>G?e.bookSources:e.rssSources,sourcesMap:function(){return le(this.sources)},savedSourcesMap:e=>le(e.savedSources),currentSourceUrl:e=>G?e.currentSource.bookSourceUrl:e.currentSource.sourceUrl,searchKey:e=>{var o,t;return G?((t=(o=e.currentSource)==null?void 0:o.ruleSearch)==null?void 0:t.checkKeyWord)||"我的":""}},actions:{startDebug(){this.currentTab="editDebug",this.isDebuging=!0},debugFinish(){this.isDebuging=!1},saveSources(e){G?this.bookSources=e:this.rssSources=e},setPushReturnSources(e){this.savedSources=e},deleteSources(e){const o=G?this.bookSources:this.rssSources;e.forEach(t=>{const n=o.indexOf(t);n>-1&&o.splice(n,1)})},saveCurrentSource(){const e=this.currentSource,o=this.sourcesMap;o.set(ne(e),JSON.parse(JSON.stringify(e))),this.saveSources(Array.from(o.values()))},changeCurrentSource(e){this.currentSource=JSON.parse(JSON.stringify(e))},changeTabName(e){this.currentTab=e,localStorage.setItem("tabName",e)},changeEditTabSource(e){this.editTabSource=JSON.parse(JSON.stringify(e))},editHistory(e){let o;if(localStorage.getItem("history"))o=JSON.parse(localStorage.getItem("history")),o.new.push(e),o.new.length>50&&o.new.shift(),o.old.length>50&&o.old.shift(),localStorage.setItem("history",JSON.stringify(o));else{const t={new:[e],old:[]};localStorage.setItem("history",JSON.stringify(t))}},editHistoryUndo(){if(localStorage.getItem("history")){const e=JSON.parse(localStorage.getItem("history"));e.old.push(this.currentSource),e.new.length&&(this.currentSource=e.new.pop()),localStorage.setItem("history",JSON.stringify(e))}},clearAllHistory(){localStorage.setItem("history",JSON.stringify({new:[],old:[]}))},clearEdit(){this.editTabSource={},this.currentSource=JSON.parse(JSON.stringify(be))},clearAllSource(){this.bookSources=[],this.rssSources=[],this.savedSources=[]}}}),qt=ue("connection",{state:()=>({connectStatus:"正在连接后端服务器……",connectType:"primary",newConnect:!1}),actions:{setConnectStatus(e){this.newConnect!==!0&&(this.connectStatus=e)},setConnectType(e){this.newConnect!==!0&&(this.connectType=e)},setNewConnect(e){this.newConnect=e}}}),Ne=Fe();Ue(Ie).use(Ne);const Y=qt(),ke=Array.of("isSuccess","errorMsg"),Oe=k,Ft=e=>{let o=!0;try{const t=e.data;for(const n of ke)n in t||(o=!1,ke.length=0);t.isSuccess===!0&&("data"in t||(o=!1))}catch{o=!1}if(o===!1)throw Oe.warning({message:"后端返回内容格式错误",grouping:!0}),new Error;return Y.setConnectType("primary"),Y.setConnectStatus("已连接 "+A),e},De=e=>{throw Oe.error({message:"后端连接失败，请检查阅读WEB服务或者设置其它可用链接",grouping:!0}),Y.setConnectType("danger"),Y.setConnectStatus("连接异常"),e};E.interceptors.response.use(Ft,De);bt(De);_t(()=>{Y.setConnectType("primary"),Y.setConnectStatus("已连接 "+A)});const zt=e=>{let o=new URL(location.origin);At(e)&&(o=new URL(e));const{protocol:t,port:n}=o;let r;n!==""?r=String(Number(n)+1):r=t.startsWith("https:")?"444":"81";const s=t.startsWith("https:")?"wss://":"ws://",c=o.toString();o.protocol=s,o.port=r;const a=o.toString();return[c,a]};kt(...zt(E.defaults.baseURL));const Gt=j({__name:"SourceItem",props:{source:{}},setup(e){const o=e,t=q(),n=$(()=>t.currentSourceUrl),r=$(()=>ne(o.source)),s=a=>{t.changeCurrentSource(a)},c=$(()=>{const a=t.savedSourcesMap;return a.size==0?!1:!a.has(r.value)});return(a,b)=>{const w=de,U=ze;return g(),C(U,{size:"large",border:"",value:i(r),class:Ee({error:i(c),edit:i(r)==i(n)})},{default:p(()=>[y(ee(i(me)(a.source))+" ",1),h(w,{text:"",icon:i(Be),onClick:b[0]||(b[0]=x=>s(a.source))},null,8,["icon"])]),_:1},8,["value","class"])}}}),Yt=M(Gt,[["__scopeId","data-v-d8dae8d3"]]),Qt={class:"tool"},Xt=j({__name:"SourceList",setup(e){const o=q(),t=P([]),n=P(""),r=$(()=>o.sources),s=$(()=>{const d=n.value;return d===""?r.value:r.value.filter(l=>Kt(l,d))}),c=$(()=>{const d=t.value;if(d.length==0)return[];const l=n.value==""?o.sourcesMap:le(s.value);return d.reduce((_,v)=>{const R=l.get(v);return R&&_.push(R),_},[])}),a=()=>{const d=c.value;J.deleteSource(d).then(({data:l})=>{if(!l.isSuccess)return k.error(l.errorMsg);o.deleteSources(d);const _=Ce(t.value);d.forEach(v=>{const R=_.indexOf(ne(v));R>-1&&_.splice(R,1)}),t.value=_})},b=()=>{o.clearAllSource(),t.value=[]},w=()=>{const d=document.createElement("input");d.type="file",d.accept=".json,.txt",d.addEventListener("change",()=>{const l=d.files;if(l===null)return k.info("未选择文件");const _=new FileReader;_.readAsText(l[0]),_.onload=()=>{try{const v=JSON.parse(_.result);o.saveSources(v)}catch(v){k.error("上传的源格式错误: "+v.message)}}}),d.click()},U=/bookSource/i.test(window.location.href),x=()=>{const d=document.createElement("a"),l=t.value.length===0?s.value:c.value,_=U?"BookSource":"RssSource";d.download=`${_}_${Date().replace(/.*?\s(\d+)\s(\d+)\s(\d+:\d+:\d+).*/,"$2$1$3").replace(/:/g,"")}.json`;const v=new Blob([JSON.stringify(l,null,4)],{type:"application/json"});d.href=window.URL.createObjectURL(v),d.click(),window.URL.revokeObjectURL(d.href)};return(d,l)=>{const _=te,v=de,R=Qe;return g(),B(N,null,[h(_,{modelValue:i(n),"onUpdate:modelValue":l[0]||(l[0]=O=>H(n)?n.value=O:null),class:"search","prefix-icon":i(xe),placeholder:"筛选源"},null,8,["modelValue","prefix-icon"]),S("div",Qt,[h(v,{onClick:w,icon:i(Ge)},{default:p(()=>l[2]||(l[2]=[y("打开")])),_:1},8,["icon"]),h(v,{disabled:i(s).length===0,onClick:x,icon:i(Ye)},{default:p(()=>l[3]||(l[3]=[y(" 导出")])),_:1},8,["disabled","icon"]),h(v,{type:"danger",icon:i(Se),onClick:a,disabled:i(c).length===0},{default:p(()=>l[4]||(l[4]=[y("删除")])),_:1},8,["icon","disabled"]),h(v,{type:"danger",icon:i(Se),onClick:b,disabled:i(r).length===0},{default:p(()=>l[5]||(l[5]=[y("清空")])),_:1},8,["icon","disabled"])]),h(R,{id:"source-list",modelValue:i(t),"onUpdate:modelValue":l[1]||(l[1]=O=>H(t)?t.value=O:null)},{default:p(()=>[h(i(Xe),{style:{height:"100%","overflow-y":"auto","overflow-x":"hidden"},"data-key":O=>i(me)(O),"data-sources":i(s),"data-component":Yt,"estimate-size":45},null,8,["data-key","data-sources"])]),_:1},8,["modelValue"])],64)}}}),Zt=M(Xt,[["__scopeId","data-v-258cd99b"]]),eo=j({__name:"SourceDebug",setup(e){const o=q(),t=P(""),n=P("");pe(()=>o.isDebuging,()=>{o.isDebuging&&s()});const r=a=>{const b=document.querySelector("#debug-text");b.scrollTop=b.scrollHeight,t.value+=a+`
`},s=async()=>{t.value="";try{await J.saveSource(o.currentSource)}catch(a){throw o.debugFinish(),a}J.debug(o.currentSourceUrl,n.value||o.searchKey,r,o.debugFinish)},c=$(()=>/bookSource/i.test(window.location.href));return(a,b)=>{const w=te;return g(),B(N,null,[i(c)?(g(),C(w,{key:0,id:"debug-key",modelValue:i(n),"onUpdate:modelValue":b[0]||(b[0]=U=>H(n)?n.value=U:null),placeholder:"搜索书名、作者","prefix-icon":i(xe),style:{"padding-bottom":"4px"},onKeydown:Ze(s,["enter"])},null,8,["modelValue","prefix-icon"])):I("",!0),h(w,{id:"debug-text",modelValue:i(t),"onUpdate:modelValue":b[1]||(b[1]=U=>H(t)?t.value=U:null),type:"textarea",readonly:"",rows:29,placeholder:"这里用于输出调试信息"},null,8,["modelValue"])],64)}}}),to=M(eo,[["__scopeId","data-v-3ac68c8a"]]),oo=j({__name:"SourceJson",setup(e){const o=q(),t=P(""),n=async r=>{try{o.changeEditTabSource(JSON.parse(r))}catch{k({message:"粘贴的源格式错误",type:"error"})}};return et(async()=>{const r=o.editTabSource;Object.keys(r).length>0?t.value=JSON.stringify(r,null,4):t.value=""}),(r,s)=>{const c=te;return g(),C(c,{id:"source-json",modelValue:i(t),"onUpdate:modelValue":s[0]||(s[0]=a=>H(t)?t.value=a:null),type:"textarea",placeholder:"这里输出序列化的JSON数据,可直接导入'阅读'APP",rows:30,onChange:n,style:{"margin-bottom":"4px"}},null,8,["modelValue"])}}}),no=M(oo,[["__scopeId","data-v-f62d9369"]]),ro=j({__name:"SourceTabTools",setup(e){const o=q(),t=$({get:()=>o.currentTab,set:r=>o.currentTab=r}),n=P([["editTab","编辑源"],["editDebug","调试源"],["editList","源列表"],["editHelp","帮助信息"]]);return(r,s)=>{const c=no,a=to,b=Zt,w=ft,U=Re,x=Le;return g(),C(x,{modelValue:i(t),"onUpdate:modelValue":s[0]||(s[0]=d=>H(t)?t.value=d:null)},{default:p(()=>[(g(!0),B(N,null,K(i(n),(d,l)=>(g(),C(U,{key:d[0],name:d[0],label:d[1]},{default:p(()=>[l==0?(g(),C(c,{key:0})):I("",!0),l==1?(g(),C(a,{key:1})):I("",!0),l==2?(g(),C(b,{key:2})):I("",!0),l==3?(g(),C(w,{key:3})):I("",!0)]),_:2},1032,["name","label"]))),128))]),_:1},8,["modelValue"])}}}),so=M(ro,[["__scopeId","data-v-fd81540f"]]),io={class:"menu flex-column-center"},lo={class:"hotkeys-header flex-space-between"},ao=["id"],co={key:0},uo={class:"hotkeys-settings flex-column-center"},po={class:"title"},go={class:"hotkeys-item__content"},ho={key:0},mo={key:0},So=j({__name:"ToolBar",setup(e){const o=q(),t=()=>{const f=k({message:"加载中……",showClose:!0,duration:0});J.getSources().then(({data:u})=>{u.isSuccess?(o.changeTabName("editList"),o.saveSources(u.data),k({message:`成功拉取${u.data.length}条源`,type:"success"})):k({message:u.errorMsg??"后端错误",type:"error"})}).finally(()=>f.close())},n=()=>{const f=o.sources;if(o.changeTabName("editList"),f.length===0)return k({message:"空空如也",type:"info"});k({message:"正在推送中",type:"info"}),J.saveSources(f).then(({data:u})=>{if(u.isSuccess){const m=u.data;if(Array.isArray(m)){let D="";f.length>m.length&&(D=`
推送失败的源将用红色字体标注!`,o.setPushReturnSources(m)),k({message:`批量推送源到「阅读3.0APP」
共计: ${f.length} 条
成功: ${m.length} 条
失败: ${f.length-m.length} 条${D}`,type:"success"})}}else k({message:`批量推送源失败!
ErrorMsg: ${u.errorMsg}`,type:"error"})})},r=()=>{o.changeTabName("editTab"),o.changeEditTabSource(o.currentSource)},s=()=>{o.changeCurrentSource(o.editTabSource)},c=()=>{o.editHistoryUndo()},a=()=>{o.clearEdit(),k({message:"已清除",type:"success"})},b=()=>{o.clearEdit(),o.clearAllHistory(),k({message:"已清除所有历史记录",type:"success"})},w=()=>{const f=o.currentSource;jt(f)?J.saveSource(f).then(({data:u})=>{const m=me(f);u.isSuccess?(k({message:`源《${m}》已成功保存到「阅读3.0APP」`,type:"success"}),o.saveCurrentSource()):k({message:`源《${m}》保存失败!
ErrorMsg: ${u.errorMsg}`,type:"error"})}):k({message:"请检查<必填>项是否全部填写",type:"error"})},U=()=>{o.startDebug()},x=P(Array.of({name:"⇈推送源",hotKeys:[],action:n},{name:"⇊拉取源",hotKeys:[],action:t},{name:"⋙生成源",hotKeys:[],action:r},{name:"⋘编辑源",hotKeys:[],action:s},{name:"✗清空表单",hotKeys:[],action:a},{name:"↶撤销操作",hotKeys:[],action:c},{name:"↷重做操作",hotKeys:[],action:b},{name:"⇏调试源",hotKeys:[],action:U},{name:"✓保存源",hotKeys:[],action:w})),d=P(!0),l=P(!1),_=P(-1),v=()=>{l.value||(d.value=!1),l.value=!1};pe(d,f=>{if(!f){z.unbind("*"),Q(),F();return}Q(),z.unbind(),z("*",u=>{u.preventDefault();const m=z.getPressedKeyString();m.length==1&&m[0]=="esc"||l.value&&_.value>-1&&(x.value[_.value].hotKeys=m)})},{immediate:!0});const R=f=>{l.value=!0,k({message:"按ESC键或者点击空白处结束录入",type:"info"}),x.value[f].hotKeys=[],_.value=f},O=()=>{const f=[];x.value.forEach(({hotKeys:u})=>{f.push(u)}),T(f),d.value=!1},F=()=>{z.filter=()=>!0,x.value.forEach(({hotKeys:f,action:u})=>{f.length!=0&&z(f.join("+"),m=>{m.preventDefault(),u.call(null)})})},T=f=>{localStorage.setItem("legado_web_hotkeys",JSON.stringify(f))};function Q(){try{const f=localStorage.getItem("legado_web_hotkeys");if(f===null)return!1;const u=JSON.parse(f);return!Array.isArray(u)||u.length==0?!1:(x.value.forEach((m,D)=>m.hotKeys=u[D]),!0)}catch{k({message:"快捷键配置错误",type:"error"}),localStorage.removeItem("legado_web_hotkeys")}return!1}return tt(()=>{Q()&&(d.value=!1)}),(f,u)=>{const m=de,D=we,Ae=ot;return g(),B(N,null,[S("div",io,[(g(!0),B(N,null,K(i(x),L=>(g(),C(m,{size:"large",key:L.name,onClick:L.action},{default:p(()=>[y(ee(L.name),1)]),_:2},1032,["onClick"]))),128)),h(m,{size:"large",onClick:u[0]||(u[0]=()=>d.value=!0)},{default:p(()=>u[2]||(u[2]=[y("快捷键")])),_:1})]),h(Ae,{modelValue:i(d),"onUpdate:modelValue":u[1]||(u[1]=L=>H(d)?d.value=L:null),"show-close":!1,"before-close":v},{header:p(({titleClass:L,titleId:re})=>[S("div",lo,[S("div",{id:re,class:Ee(L)},[u[4]||(u[4]=y(" 快捷键设置 ")),i(l)?(g(),B("span",co,[h(D,null,{default:p(()=>u[3]||(u[3]=[y(" / 录入中 ")])),_:1})])):I("",!0)],10,ao),h(m,{disabled:i(l),onClick:O,icon:i(nt)},{default:p(()=>u[5]||(u[5]=[y("保存")])),_:1},8,["disabled","icon"])])]),default:p(()=>[S("div",uo,[(g(!0),B(N,null,K(i(x),(L,re)=>(g(),B("div",{key:L.name,class:"hotkeys-item flex-space-between"},[S("span",po,[h(D,null,{default:p(()=>[y(ee(L.name),1)]),_:2},1024)]),S("div",go,[(g(!0),B(N,null,K(L.hotKeys,(se,Me)=>(g(),B("div",{key:se},[S("kbd",null,ee(se),1),Me+1<L.hotKeys.length?(g(),B("span",ho,[h(D,null,{default:p(()=>u[6]||(u[6]=[y("+")])),_:1})])):I("",!0)]))),128)),L.hotKeys.length==0?(g(),B("span",mo,"未设置")):I("",!0)]),h(m,{disabled:i(l),text:"",icon:i(Be),onClick:se=>R(re)},{default:p(()=>u[7]||(u[7]=[y("编辑")])),_:2},1032,["disabled","icon","onClick"])]))),128))])]),_:1},8,["modelValue"])],64)}}}),fo=M(So,[["__scopeId","data-v-7fe41be4"]]),yo=j({__name:"SourceTabForm",props:{config:{}},setup(e){const o=q(),t=$(()=>o.currentSource);return(n,r)=>{const s=te,c=it,a=lt,b=ct,w=at,U=st,x=rt,d=Re,l=Le;return g(),C(l,{id:"source-edit"},{default:p(()=>[(g(!0),B(N,null,K(Object.values(n.config),({name:_,children:v})=>(g(),C(d,{label:_,key:_},{default:p(()=>[h(x,{"label-position":"right","label-width":"auto"},{default:p(()=>[(g(!0),B(N,null,K(v,({type:R,title:O,namespace:F,id:T,array:Q,hint:f,required:u=!1})=>(g(),C(U,{label:O,key:O,required:u},{default:p(()=>[R=="String"&&typeof F>"u"?(g(),C(s,{key:0,type:"textarea",modelValue:i(t)[T],"onUpdate:modelValue":m=>i(t)[T]=m,placeholder:f,autosize:""},null,8,["modelValue","onUpdate:modelValue","placeholder"])):I("",!0),R=="String"&&typeof F<"u"?(g(),C(s,{key:1,type:"textarea",modelValue:i(t)[F][T],"onUpdate:modelValue":m=>i(t)[F][T]=m,placeholder:f,autosize:""},null,8,["modelValue","onUpdate:modelValue","placeholder"])):I("",!0),R==="Boolean"?(g(),C(c,{key:2,modelValue:i(t)[T],"onUpdate:modelValue":m=>i(t)[T]=m},null,8,["modelValue","onUpdate:modelValue"])):I("",!0),R==="Number"?(g(),C(a,{key:3,modelValue:i(t)[T],"onUpdate:modelValue":m=>i(t)[T]=m,min:0},null,8,["modelValue","onUpdate:modelValue"])):I("",!0),R==="Array"?(g(),C(w,{key:4,modelValue:i(t)[T],"onUpdate:modelValue":m=>i(t)[T]=m},{default:p(()=>[(g(!0),B(N,null,K(Q,(m,D)=>(g(),C(b,{value:D,key:m,label:m},null,8,["value","label"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue"])):I("",!0)]),_:2},1032,["label","required"]))),128))]),_:2},1024)]),_:2},1032,["label"]))),128))]),_:1})}}}),_o=M(yo,[["__scopeId","data-v-c07c5146"]]),bo={base:{name:"基础",children:[{title:"源类型",id:"bookSourceType",type:"Array",array:["文本","音频","图片","文件"],required:!0},{title:"源域名",id:"bookSourceUrl",type:"String",hint:"通常填写网站主页,例: https://www.qidian.com",required:!0},{title:"源名称",id:"bookSourceName",type:"String",hint:"会显示在源列表",required:!0},{title:"源分组",id:"bookSourceGroup",type:"String",hint:"描述源的特征信息"},{title:"源注释",id:"bookSourceComment",type:"String",hint:"描述源作者和状态"},{title:"登录地址",id:"loginUrl",type:"String",hint:"填写网站登录网址,仅在需要登录的源有用"},{title:"登录界面",id:"loginUi",type:"String",hint:"自定义登录界面"},{title:"登录检测",id:"loginCheckJs",type:"String",hint:"登录检测js"},{title:"封面解密",id:"coverDecodeJs",type:"String",hint:"封面解密js"},{title:"链接验证",id:"bookUrlPattern",type:"String",hint:"书籍URL正则，当详情页URL与源URL的域名不一致时有效，用于添加网址"},{title:"请求头",id:"header",type:"String",hint:"客户端标识"},{title:"变量说明",id:"variableComment",type:"String",hint:"书源变量说明"},{title:"并发率",id:"concurrentRate",type:"String",hint:"并发率，如1000(访问间隔1000ms)或者1/1000(1000ms内访问1次)"},{title:"js库",id:"jsLib",type:"String",hint:"js库, 可填写js或者key-value object获取在线js文件"}]},search:{name:"搜索",children:[{title:"搜索地址",id:"searchUrl",type:"String",hint:"[域名可省略]/search.php@kw={{key}}"},{title:"校验文字",namespace:"ruleSearch",id:"checkKeyWord",type:"String",hint:"校验关键字，强烈建议填写"},{title:"列表规则",namespace:"ruleSearch",id:"bookList",type:"String",hint:"选择书籍节点 (规则结果为List<Element>)"},{title:"书名规则",namespace:"ruleSearch",id:"name",type:"String",hint:"选择节点书名 (规则结果为String)"},{title:"作者规则",namespace:"ruleSearch",id:"author",type:"String",hint:"选择节点作者 (规则结果为String)"},{title:"分类规则",namespace:"ruleSearch",id:"kind",type:"String",hint:"选择节点分类信息 (规则结果为String)"},{title:"字数规则",namespace:"ruleSearch",id:"wordCount",type:"String",hint:"选择节点字数信息 (规则结果为String)"},{title:"最新章节",namespace:"ruleSearch",id:"lastChapter",type:"String",hint:"选择节点最新章节 (规则结果为String)"},{title:"简介规则",namespace:"ruleSearch",id:"intro",type:"String",hint:"选择节点书籍简介 (规则结果为String)"},{title:"封面规则",namespace:"ruleSearch",id:"coverUrl",type:"String",hint:"选择节点书籍封面 (规则结果为String类型的url)"},{title:"详情地址",namespace:"ruleSearch",id:"bookUrl",type:"String",hint:"选择书籍详情页网址 (规则结果为String类型的url)"}]},find:{name:"发现",children:[{title:"发现地址",id:"exploreUrl",type:"String",hint:"单个发现格式<name>::<url>或者{url:<url>,title:<name>,style:...}；前者用换行符或者&&连接，后者放在数组内；可用js动态生成"},{title:"列表规则",namespace:"ruleExplore",id:"bookList",type:"String",hint:"选择书籍节点 (规则结果为List<Element>)"},{title:"书名规则",namespace:"ruleExplore",id:"name",type:"String",hint:"选择节点书名 (规则结果为String)"},{title:"作者规则",namespace:"ruleExplore",id:"author",type:"String",hint:"选择节点作者 (规则结果为String)"},{title:"分类规则",namespace:"ruleExplore",id:"kind",type:"String",hint:"选择节点分类信息 (规则结果为String)"},{title:"字数规则",namespace:"ruleExplore",id:"wordCount",type:"String",hint:"选择节点字数信息 (规则结果为String)"},{title:"最新章节",namespace:"ruleExplore",id:"lastChapter",type:"String",hint:"选择节点最新章节 (规则结果为String)"},{title:"简介规则",namespace:"ruleExplore",id:"intro",type:"String",hint:"选择节点书籍简介 (规则结果为String)"},{title:"封面规则",namespace:"ruleExplore",id:"coverUrl",type:"String",hint:"选择节点书籍封面 (规则结果为String类型的url)"},{title:"详情地址",namespace:"ruleExplore",id:"bookUrl",type:"String",hint:"选择书籍详情页网址 (规则结果为String类型的url)"}]},detail:{name:"详情",children:[{title:"预处理",namespace:"ruleBookInfo",id:"init",type:"String",hint:"用于加速详情信息检索，只支持AllInOne规则"},{title:"书名规则",namespace:"ruleBookInfo",id:"name",type:"String",hint:"选择节点书名 (规则结果为String)"},{title:"作者规则",namespace:"ruleBookInfo",id:"author",type:"String",hint:"选择节点作者 (规则结果为String)"},{title:"分类规则",namespace:"ruleBookInfo",id:"kind",type:"String",hint:"选择节点分类信息 (规则结果为String)"},{title:"字数规则",namespace:"ruleBookInfo",id:"wordCount",type:"String",hint:"选择节点字数信息 (规则结果为String)"},{title:"最新章节",namespace:"ruleBookInfo",id:"lastChapter",type:"String",hint:"选择节点最新章节 (规则结果为String)"},{title:"简介规则",namespace:"ruleBookInfo",id:"intro",type:"String",hint:"选择节点书籍简介 (规则结果为String)"},{title:"封面规则",namespace:"ruleBookInfo",id:"coverUrl",type:"String",hint:"选择节点书籍封面 (规则结果为String类型的url)"},{title:"目录地址",namespace:"ruleBookInfo",id:"tocUrl",type:"String",hint:"选择书籍详情页网址 (规则结果为String类型的url, 与详情页相同时可省略)"},{title:"修改书籍",namespace:"ruleBookInfo",id:"canReName",type:"String",hint:"允许修改书名作者(规则结果为String类型, 默认不允许)"},{title:"下载URL",namespace:"ruleBookInfo",id:"downloadUrls",type:"String",hint:"文件类书源下载地址 (规则结果为String类型的url, 多个链接返回数组)"}]},directory:{name:"目录",children:[{title:"更新前JS",namespace:"ruleToc",id:"preUpdateJs",type:"String",hint:"更新目录前调用JS 动态更新目录链接"},{title:"列表规则",namespace:"ruleToc",id:"chapterList",type:"String",hint:"选择目录列表的章节节点 (规则结果为List<Element>)"},{title:"章节名称",namespace:"ruleToc",id:"chapterName",type:"String",hint:"选择章节名称 (规则结果为String)"},{title:"章节地址",namespace:"ruleToc",id:"chapterUrl",type:"String",hint:"选择章节链接 (规则结果为String类型的Url)"},{title:"标题处理",namespace:"ruleToc",id:"formatJs",type:"String",hint:"遍历去重后的章节列表的回调，提供index(章节序号从1开始)、title(章节标题)变量，额外提供gInt(初始值0)，返回值作为新的标题"},{title:"卷名标识",namespace:"ruleToc",id:"isVolume",type:"String",hint:"章节名称是否是卷名 (规则结果为Bool)"},{title:"章节信息",namespace:"ruleToc",id:"updateTime",type:"String",hint:"选择章节信息（如更新时间） (规则结果为String)"},{title:"收费标识",namespace:"ruleToc",id:"isVip",type:"String",hint:"章节是否为VIP章节 (规则结果为Bool)"},{title:"购买标识",namespace:"ruleToc",id:"isPay",type:"String",hint:"章节是否为已购买 (规则结果为Bool)"},{title:"翻页规则",namespace:"ruleToc",id:"nextTocUrl",type:"String",hint:"选择目录下一页链接 (规则结果为List<String>或String)"}]},content:{name:"正文",children:[{title:"正文规则",namespace:"ruleContent",id:"content",type:"String",hint:"选择正文内容 (规则结果为String)"},{title:"标题规则",namespace:"ruleContent",id:"title",type:"String",hint:"获取结果将会覆盖章节标题 (规则结果为String)"},{title:"翻页规则",namespace:"ruleContent",id:"nextContentUrl",type:"String",hint:"选择下一分页(不是下一章)链接 (规则结果为String类型的Url)"},{title:"脚本注入",namespace:"ruleContent",id:"webJs",type:"String",hint:"注入javascript，用于模拟鼠标点击等，必须有返回值，一般为String类型"},{title:"资源正则",namespace:"ruleContent",id:"sourceRegex",type:"String",hint:"匹配资源的url特征，用于嗅探"},{title:"替换规则",namespace:"ruleContent",id:"replaceRegex",type:"String",hint:"多页内容合并后替换，用于正文净化"},{title:"图片样式",namespace:"ruleContent",id:"imageStyle",type:"String",hint:"FULL:铺满 不填:默认样式"},{title:"图片解密",namespace:"ruleContent",id:"imageDecode",type:"String",hint:"填写JavaScript 返回解密图片的bytes "},{title:"购买操作",namespace:"ruleContent",id:"payAction",type:"String",hint:"填写JavaScript 返回购买链接或者调用购买接口"}]},other:{name:"其他",children:[{title:"启用搜索",id:"enabled",type:"Boolean"},{title:"启用发现",id:"enabledExplore",type:"Boolean"},{title:"CookieJar",id:"enabledCookieJar",type:"Boolean"},{title:"搜索权重",id:"weight",type:"Number"},{title:"排序编号",id:"customOrder",type:"Number"}]}},ko={base:{name:"基础",children:[{title:"源域名",id:"sourceUrl",type:"String",hint:"通常填写网站主页,例: https://www.qidian.com",required:!0},{title:"图标",id:"sourceIcon",type:"String",hint:"填写图片网络链接"},{title:"源名称",id:"sourceName",type:"String",hint:"会显示在源列表",required:!0},{title:"源分组",id:"sourceGroup",type:"String",hint:"描述源的特征信息"},{title:"源注释",id:"sourceComment",type:"String",hint:"描述源作者和状态"},{title:"分类地址",id:"sortUrl",type:"String",hint:`名称1::链接1
名称2::链接2`},{title:"登录地址",id:"loginUrl",type:"String",hint:"填写网站登录网址,仅在需要登录的源有用"},{title:"登录界面",id:"loginUi",type:"String",hint:"自定义登录界面"},{title:"登录检测",id:"loginCheckJs",type:"String",hint:"登录检测js"},{title:"封面解密",id:"coverDecodeJs",type:"String",hint:"封面解密js"},{title:"请求头",id:"header",type:"String",hint:"客户端标识"},{title:"变量说明",id:"variableComment",type:"String",hint:"源变量说明"},{title:"并发率",id:"concurrentRate",type:"String",hint:"并发率"}]},list:{name:"列表",children:[{title:"列表规则",id:"ruleArticles",type:"String",hint:"规则结果为List<Element>"},{title:"翻页规则",id:"ruleNextPage",type:"String",hint:"下一页链接 规则结果为List<String>或String"},{title:"标题规则",id:"ruleTitle",type:"String",hint:"文章标题 规则结果为String"},{title:"时间规则",id:"rulePubDate",type:"String",hint:"文章发布时间 规则结果为String"},{title:"描述规则",id:"ruleDescription",type:"String",hint:"文章简要描述 规则结果为String"},{title:"图片规则",id:"ruleImage",type:"String",hint:"文章图片链接 规则结果为String"},{title:"链接规则",id:"ruleLink",type:"String",hint:"文章链接 规则结果为String"}]},webView:{name:"WebView",children:[{title:"内容规则",id:"ruleContent",type:"String",hint:"文章正文"},{title:"样式规则",id:"style",type:"String",hint:"文章正文样式 填写css"},{title:"注入规则",id:"injectJs",type:"String",hint:"注入网页的JavaScript"},{title:"黑名单",id:"contentBlacklist",type:"String",hint:"webView链接加载黑名单，英文逗号隔开"},{title:"白名单",id:"contentWhitelist",type:"String",hint:"webView链接加载白名单，英文逗号隔开"},{title:"链接拦截",id:"shouldOverrideUrlLoading",type:"String",hint:"填写js，变量url为当前资源链接，返回true拦截"}]},other:{name:"其他",children:[{title:"列表样式",id:"articleStyle",type:"Array",array:["默认","大图","双列"]},{title:"加载地址",id:"loadWithBaseUrl",type:"Boolean"},{title:"启用JS",id:"enableJs",type:"Boolean"},{title:"启用",id:"enabled",type:"Boolean"},{title:"Cookie",id:"enabledCookieJar",type:"Boolean"},{title:"单URL",id:"singleUrl",type:"Boolean"},{title:"排序编号",id:"customOrder",type:"Number"}]}},vo={class:"editor"},wo=j({__name:"SourceEditor",setup(e){ut();let o;return/bookSource/i.test(location.href)?(o=bo,document.title="书源管理"):(o=ko,document.title="订阅源管理"),(t,n)=>{const r=_o,s=fo,c=so;return g(),B("div",vo,[h(r,{class:"left",config:i(o)},null,8,["config"]),h(s),h(c,{class:"right"})])}}}),ve=M(wo,[["__scopeId","data-v-f2c47af3"]]),Pe=[{path:"/bookSource",name:"book-home",component:ve},{path:"/rssSource",name:"rss-home",component:ve}];ae({history:ce(),routes:Pe});const Je=ae({history:ce(),routes:[Te,Pe].flat()});Je.afterEach(e=>{e.name=="shelf"&&(document.title="书架")});const Co={SetRemoteUrl:"setRemoteUrl"};class Uo{constructor(){ie(this,"target");ie(this,"pendingMessages");this.pendingMessages=new Map,this.setTarget(typeof acquireVsCodeApi=="function"?acquireVsCodeApi():void 0)}setTarget(o){this.target=o,window.addEventListener("message",this.handleMessageReceived.bind(this))}removeTarget(){this.target=void 0,window.removeEventListener("message",this.handleMessageReceived.bind(this))}postMessage(o,t=3,n=1e3){const{command:r}=o;let s;return new Promise(c=>{this.pendingMessages.set(r,c);let a=0;s=setInterval(()=>{if(a>=t){clearInterval(s),c();return}a+=1,this.target&&this.target.postMessage(o)},n)}).then(c=>(s&&clearInterval(s),c))}handleMessageReceived(o){const{command:t,value:n,isAck:r}=o.data;if(r){const s=this.pendingMessages.get(t);s&&(s(o.data),this.pendingMessages.delete(t));return}switch(t){case Co.SetRemoteUrl:localStorage.setItem(Ve,n),this.sendAcknowledgement({command:t});break}}sendAcknowledgement(o){this.target&&this.target.postMessage({...o,isAck:!0})}}window.MessageBroker=new Uo;Ue(Ie).use(Ne).use(Je).mount("#app");pe(()=>$t().isNight,e=>{e?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")});window.addEventListener("vite:preloadError",e=>{e.preventDefault()});export{J as A,M as _,qt as a,Ve as b,X as c,Ro as d,xo as i,A as l,zt as p,kt as s,$t as u,At as v};
