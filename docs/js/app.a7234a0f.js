(()=>{"use strict";var t={3123:(t,e,s)=>{var i=s(6848),a=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("snowflake"),e("nav",{staticClass:"nav-bar"},[e("div",{staticClass:"nav-container"},[e("router-link",{staticClass:"logo",attrs:{to:"/"}},[t._v("我的博客园")]),e("div",{staticClass:"nav-links"},[e("div",{staticClass:"nav-link-container"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/",exact:""}},[e("span",[t._v("首页")]),e("div",{staticClass:"link-line"})]),e("router-link",{staticClass:"nav-link",attrs:{to:"/articles"}},[e("span",[t._v("技术文章")]),e("div",{staticClass:"link-line"})]),e("router-link",{staticClass:"nav-link",attrs:{to:"/projects"}},[e("span",[t._v("项目展示")]),e("div",{staticClass:"link-line"})]),e("router-link",{staticClass:"nav-link",attrs:{to:"/notes"}},[e("span",[t._v("学习笔记")]),e("div",{staticClass:"link-line"})]),e("router-link",{staticClass:"nav-link",attrs:{to:"/resources"}},[e("span",[t._v("资源分享")]),e("div",{staticClass:"link-line"})]),e("router-link",{staticClass:"nav-link",attrs:{to:"/about"}},[e("span",[t._v("关于我")]),e("div",{staticClass:"link-line"})])],1)])],1)]),e("main",{staticClass:"main-content"},[e("router-view",{scopedSlots:t._u([{key:"default",fn:function({Component:t}){return[e("transition",{attrs:{name:"fade",mode:"out-in"}},[e(t,{tag:"component"})],1)]}}])})],1),e("chat-bot")],1)},n=[],r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"snowflakes",attrs:{"aria-hidden":"true"}},[t._l(10,(function(s){return e("div",{key:`left-${s}`,staticClass:"snowflake left-snow"},[t._v("❅")])})),t._l(10,(function(s){return e("div",{key:`right-${s}`,staticClass:"snowflake right-snow"},[t._v("❅")])}))],2)},o=[];const c={name:"SnowflakeEffect"},l=c;var d=s(1656),u=(0,d.A)(l,r,o,!1,null,"13cbb6a1",null);const h=u.exports;var p=function(){var t=this,e=t._self._c;return e("div",[e("div",{directives:[{name:"show",rawName:"v-show",value:!t.isOpen,expression:"!isOpen"}],staticClass:"chat-icon",on:{click:t.toggleChat}},[e("el-avatar",{attrs:{size:40,src:"https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"}})],1),e("div",{directives:[{name:"show",rawName:"v-show",value:t.isOpen,expression:"isOpen"}],ref:"chatWindow",staticClass:"chat-window",class:{"is-dragging":t.isDragging},style:t.chatWindowStyle},[e("div",{staticClass:"chat-header"},[e("div",{staticClass:"drag-handle",on:{mousedown:t.startDrag}},[e("div",{staticClass:"header-left"},[e("el-avatar",{attrs:{size:30,src:"https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"}}),e("span",[t._v("AI 助手")]),t.isTyping?e("div",{staticClass:"typing-indicator"},[e("span"),e("span"),e("span")]):t._e()],1)]),e("div",{staticClass:"header-actions"},[e("button",{staticClass:"minimize-btn",on:{click:t.toggleChat}},[e("i",{staticClass:"el-icon-minus"})])])]),e("div",{ref:"messageContainer",staticClass:"chat-messages"},t._l(t.messages,(function(s,i){return e("div",{key:i,class:["message",s.type]},[e("div",{staticClass:"message-avatar"},[e("el-avatar",{attrs:{size:36,src:"sent"===s.type?"https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png":"https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"}})],1),e("div",{staticClass:"message-wrapper"},[e("div",{staticClass:"message-content",domProps:{innerHTML:t._s(s.content)}}),e("div",{staticClass:"message-time"},[t._v(t._s(s.time))])])])})),0),e("div",{staticClass:"chat-input"},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.inputMessage,expression:"inputMessage"}],ref:"inputArea",attrs:{placeholder:"输入消息... (Shift + Enter 换行)",rows:t.inputRows},domProps:{value:t.inputMessage},on:{keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")||e.ctrlKey||e.shiftKey||e.altKey||e.metaKey?null:(e.preventDefault(),t.sendMessage.apply(null,arguments))},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:e.shiftKey?e.ctrlKey||e.altKey||e.metaKey?null:t.newLine.apply(null,arguments):null}],input:[function(e){e.target.composing||(t.inputMessage=e.target.value)},t.adjustTextarea]}}),e("button",{attrs:{disabled:t.isTyping||!t.inputMessage.trim()},on:{click:t.sendMessage}},[e("i",{staticClass:"el-icon-position"})])])])])},g=[];const v={name:"ChatBot",data(){return{isOpen:!1,messages:[{content:"你好！我是AI助手,有什么可以帮你的吗?",type:"received",time:this.getCurrentTime()}],inputMessage:"",position:{right:"30px",bottom:"30px"},isDragging:!1,dragOffset:{x:0,y:0},isTyping:!1,inputRows:1,maxRows:5,windowWidth:window.innerWidth,windowHeight:window.innerHeight,initialPosition:null}},computed:{chatWindowStyle(){return{...this.position,transform:this.isDragging?"scale(0.98)":"scale(1)",transition:this.isDragging?"transform 0.2s":"all 0.3s ease"}}},methods:{toggleChat(){this.isOpen=!this.isOpen,this.isOpen&&this.$nextTick((()=>{this.$refs.inputArea?.focus()}))},getCurrentTime(){const t=new Date;return`${String(t.getHours()).padStart(2,"0")}:${String(t.getMinutes()).padStart(2,"0")}`},async typeMessage(t){this.isTyping=!0;let e="";const s=t.split("");for(let i=0;i<s.length;i++)e+=s[i],this.messages[this.messages.length-1].content=e,await new Promise((t=>setTimeout(t,30+50*Math.random())));this.isTyping=!1},newLine(t){t.preventDefault(),this.inputMessage+="\n",this.adjustTextarea()},adjustTextarea(){const t=this.$refs.inputArea;t&&(t.style.height="auto",t.style.height=Math.min(t.scrollHeight,20*this.maxRows)+"px",this.inputRows=Math.min(Math.floor(t.scrollHeight/20),this.maxRows))},async sendMessage(t){if(t&&t.preventDefault(),!this.inputMessage.trim()||this.isTyping)return;const e=this.inputMessage.trim();this.messages.push({content:e.replace(/\n/g,"<br>"),type:"sent",time:this.getCurrentTime()}),this.inputMessage="",this.adjustTextarea(),this.$nextTick((()=>{this.scrollToBottom()})),this.messages.push({content:"",type:"received",time:this.getCurrentTime()});const s=[`我理解你的问题是关于"${e}"。让我来帮你解答。`,"这是一个很好的问题！让我详细解释一。","我明白你的意思了。这个问题的关键在于...","根据我的理解，你想知道的是...","这个问题很有趣！让我从以下几个方面来回答："],i=s[Math.floor(Math.random()*s.length)];await this.typeMessage(i),this.$nextTick((()=>{this.scrollToBottom()}))},scrollToBottom(){const t=this.$refs.messageContainer;t&&(t.scrollTop=t.scrollHeight)},handleResize(){this.windowWidth=window.innerWidth,this.windowHeight=window.innerHeight,this.ensureWindowInBounds()},ensureWindowInBounds(){if(!this.$refs.chatWindow)return;const t=this.$refs.chatWindow.getBoundingClientRect(),e=10;t.right>this.windowWidth-e&&(this.position.left=this.windowWidth-t.width-e+"px",delete this.position.right),t.left<e&&(this.position.left=`${e}px`),t.bottom>this.windowHeight-e&&(this.position.top=this.windowHeight-t.height-e+"px",delete this.position.bottom),t.top<e&&(this.position.top=`${e}px`)},startDrag(t){if(0!==t.button)return;this.isDragging=!0;const e=this.$refs.chatWindow.getBoundingClientRect();this.dragOffset={x:t.clientX-e.left,y:t.clientY-e.top},this.initialPosition={...this.position},document.body.style.userSelect="none",document.body.style.cursor="move",window.addEventListener("mousemove",this.onDrag),window.addEventListener("mouseup",this.stopDrag),t.preventDefault(),t.stopPropagation()},onDrag(t){this.isDragging&&requestAnimationFrame((()=>{const e=t.clientX-this.dragOffset.x,s=t.clientY-this.dragOffset.y,i=10,a=this.windowWidth-this.$refs.chatWindow.offsetWidth-i,n=this.windowHeight-this.$refs.chatWindow.offsetHeight-i,r=Math.max(i,Math.min(e,a)),o=Math.max(i,Math.min(s,n));this.position={left:`${r}px`,top:`${o}px`},delete this.position.right,delete this.position.bottom}))},stopDrag(){this.isDragging&&(this.isDragging=!1,document.body.style.userSelect="",document.body.style.cursor="",this.snapToEdges(),window.removeEventListener("mousemove",this.onDrag),window.removeEventListener("mouseup",this.stopDrag))},snapToEdges(){const t=this.$refs.chatWindow.getBoundingClientRect(),e=20,s=10;this.windowWidth-t.right<e?this.position={right:`${s}px`,top:`${t.top}px`}:t.left<e&&(this.position={left:`${s}px`,top:`${t.top}px`}),this.windowHeight-t.bottom<e&&(this.position={...this.position.left?{left:this.position.left}:{right:this.position.right},bottom:`${s}px`},delete this.position.top)}},mounted(){window.addEventListener("resize",this.handleResize),document.addEventListener("keydown",(t=>{t.ctrlKey&&"/"===t.key&&(t.preventDefault(),this.toggleChat())}))},beforeDestroy(){window.removeEventListener("resize",this.handleResize),document.removeEventListener("mousemove",this.onDrag),document.removeEventListener("mouseup",this.stopDrag)}},m=v;var f=(0,d.A)(m,p,g,!1,null,"b25119b4",null);const C=f.exports,_={name:"App",components:{Snowflake:h,ChatBot:C}},y=_;var k=(0,d.A)(y,a,n,!1,null,null,null);const w=k.exports;var b=s(6178),x=function(){var t=this,e=t._self._c;return e("div",{staticClass:"home-page"},[t._m(0),e("image-carousel",{attrs:{items:t.carouselItems}}),e("div",{staticClass:"featured-section"},[e("h2",{staticClass:"section-title"},[t._v("精选内容")]),e("div",{staticClass:"featured-grid"},t._l(t.featuredItems,(function(s){return e("div",{key:s.id,staticClass:"featured-card"},[e("div",{staticClass:"card-icon"},[e("i",{class:s.icon})]),e("h3",[t._v(t._s(s.title))]),e("p",[t._v(t._s(s.description))]),e("router-link",{staticClass:"read-more",attrs:{to:s.link}},[t._v(" 了解更多 "),e("i",{staticClass:"fas fa-arrow-right"})])],1)})),0)]),t._m(1)],1)},T=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"welcome-section"},[e("h1",{staticClass:"title"},[t._v("欢迎来到我的博客园")]),e("p",{staticClass:"subtitle"},[t._v("分享技术，记录生活")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"stats-section"},[e("div",{staticClass:"stat-item"},[e("div",{staticClass:"stat-number"},[t._v("100+")]),e("div",{staticClass:"stat-label"},[t._v("技术文章")])]),e("div",{staticClass:"stat-item"},[e("div",{staticClass:"stat-number"},[t._v("50+")]),e("div",{staticClass:"stat-label"},[t._v("项目案例")])]),e("div",{staticClass:"stat-item"},[e("div",{staticClass:"stat-number"},[t._v("1000+")]),e("div",{staticClass:"stat-label"},[t._v("代码提交")])])])}],j=function(){var t=this,e=t._self._c;return e("div",{staticClass:"carousel"},[e("div",{staticClass:"carousel-container",style:t.containerStyle},t._l(t.visibleItems,(function(s,i){return e("div",{key:s.id,staticClass:"carousel-item",class:{active:t.currentIndex===i}},[e("img",{attrs:{src:s.image,alt:s.title,loading:"lazy"}}),e("div",{staticClass:"carousel-caption"},[e("h3",[t._v(t._s(s.title))])])])})),0),e("div",{staticClass:"carousel-controls"},[e("button",{staticClass:"control-btn prev",on:{click:t.prev}},[e("i",{staticClass:"el-icon-arrow-left"})]),e("button",{staticClass:"control-btn next",on:{click:t.next}},[e("i",{staticClass:"el-icon-arrow-right"})])]),e("div",{staticClass:"carousel-indicators"},t._l(t.items,(function(s,i){return e("span",{key:s.id,class:["indicator",{active:t.currentIndex===i}],on:{click:function(e){return t.goTo(i)}}})})),0)])},I=[];const P={name:"ImageCarousel",props:{items:{type:Array,required:!0,validator:function(t){return t.every((t=>t.id&&t.image&&t.title))}},interval:{type:Number,default:5e3},autoplay:{type:Boolean,default:!0}},data(){return{currentIndex:0,timer:null,isTransitioning:!1}},computed:{containerStyle(){return{transform:`translateX(-${100*this.currentIndex}%)`,transition:this.isTransitioning?"transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)":"none"}},visibleItems(){const t=[...this.items],e=this.currentIndex,s=(e-1+t.length)%t.length,i=(e+1)%t.length;return[t[s],t[e],t[i]]}},methods:{next(){this.isTransitioning||(this.isTransitioning=!0,this.currentIndex=(this.currentIndex+1)%this.items.length,this.resetTransition())},prev(){this.isTransitioning||(this.isTransitioning=!0,this.currentIndex=0===this.currentIndex?this.items.length-1:this.currentIndex-1,this.resetTransition())},goTo(t){this.isTransitioning||this.currentIndex===t||(this.isTransitioning=!0,this.currentIndex=t,this.resetTransition())},resetTransition(){setTimeout((()=>{this.isTransitioning=!1}),500)},startTimer(){this.autoplay&&!this.timer&&(this.timer=setInterval(this.next,this.interval))},stopTimer(){this.timer&&(clearInterval(this.timer),this.timer=null)},handleVisibilityChange(){document.hidden?this.stopTimer():this.startTimer()}},mounted(){this.startTimer(),document.addEventListener("visibilitychange",this.handleVisibilityChange)},beforeDestroy(){this.stopTimer(),document.removeEventListener("visibilitychange",this.handleVisibilityChange)},watch:{items:{handler(t){this.currentIndex>=t.length&&(this.currentIndex=0)},immediate:!0}}},A=P;var M=(0,d.A)(A,j,I,!1,null,"2b6626fe",null);const O=M.exports,$={name:"HomePage",components:{ImageCarousel:O},data(){return{carouselItems:[{image:"https://picsum.photos/1200/500?random=1",title:"Vue.js 开发实战"},{image:"https://picsum.photos/1200/500?random=2",title:"React 最佳实践"},{image:"https://picsum.photos/1200/500?random=3",title:"Node.js 服务端开发"},{image:"https://picsum.photos/1200/500?random=4",title:"前端性能优化技巧"},{image:"https://picsum.photos/1200/500?random=5",title:"TypeScript 实战指南"},{image:"https://picsum.photos/1200/500?random=6",title:"微前端架构探索"}],featuredItems:[{id:1,icon:"fas fa-code",title:"最新技术博文",description:"探索前端开发的最新趋势和技术实践",link:"/articles"},{id:2,icon:"fas fa-project-diagram",title:"项目展示",description:"查看我的开源项目和实践案例",link:"/projects"},{id:3,icon:"fas fa-book",title:"学习笔记",description:"分享学习过程中的心得体会",link:"/notes"}]}}},D=$;var S=(0,d.A)(D,x,T,!1,null,"30d74a0c",null);const L=S.exports;var N=function(){var t=this,e=t._self._c;return e("div",{staticClass:"article-page"},[e("div",{staticClass:"page-header"},[e("h1",{staticClass:"page-title"},[t._v("技术文章")]),e("div",{staticClass:"category-tabs"},t._l(t.categories,(function(s){return e("button",{key:s.id,class:["category-btn",{active:t.currentCategory===s.id}],on:{click:function(e){t.currentCategory=s.id}}},[e("i",{class:s.icon}),t._v(" "+t._s(s.name)+" ")])})),0)]),e("div",{staticClass:"search-bar"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.searchQuery,expression:"searchQuery"}],staticClass:"search-input",attrs:{type:"text",placeholder:"搜索文章..."},domProps:{value:t.searchQuery},on:{input:function(e){e.target.composing||(t.searchQuery=e.target.value)}}}),e("div",{staticClass:"filter-tags"},t._l(t.selectedTags,(function(s){return e("span",{key:s,staticClass:"filter-tag",on:{click:function(e){return t.removeTag(s)}}},[t._v(" "+t._s(s)+" × ")])})),0)]),e("div",{staticClass:"article-grid"},t._l(t.filteredArticles,(function(s){return e("div",{key:s.id,staticClass:"article-card"},[e("div",{staticClass:"article-image"},[e("img",{attrs:{src:s.cover,alt:s.title}}),e("div",{staticClass:"article-category"},[t._v(t._s(t.getCategoryName(s.categoryId)))])]),e("div",{staticClass:"article-content"},[e("h2",{staticClass:"article-title"},[t._v(t._s(s.title))]),e("p",{staticClass:"article-meta"},[e("span",{staticClass:"date"},[e("i",{staticClass:"far fa-calendar"}),t._v(" "+t._s(s.date))]),e("span",{staticClass:"read-time"},[e("i",{staticClass:"far fa-clock"}),t._v(" "+t._s(s.readTime)+"分钟阅读")]),e("span",{staticClass:"views"},[e("i",{staticClass:"far fa-eye"}),t._v(" "+t._s(s.views)+"阅读")])]),e("p",{staticClass:"article-excerpt"},[t._v(t._s(s.excerpt))]),e("div",{staticClass:"article-tags"},t._l(s.tags,(function(s){return e("span",{key:s,staticClass:"tag",on:{click:function(e){return t.addTag(s)}}},[t._v(" "+t._s(s)+" ")])})),0),e("div",{staticClass:"article-footer"},[e("button",{staticClass:"read-more",on:{click:function(e){return t.readArticle(s.id)}}},[t._v(" 阅读全文 "),e("i",{staticClass:"fas fa-arrow-right"})]),e("div",{staticClass:"article-actions"},[e("button",{staticClass:"action-btn like",class:{active:s.isLiked},on:{click:function(e){return t.toggleLike(s)}}},[e("i",{staticClass:"far fa-heart"}),e("span",[t._v(t._s(s.likes))])]),e("button",{staticClass:"action-btn comment"},[e("i",{staticClass:"far fa-comment"}),e("span",[t._v(t._s(s.comments))])])])])])])})),0),e("div",{staticClass:"pagination"},[e("button",{staticClass:"page-btn",attrs:{disabled:1===t.currentPage},on:{click:function(e){t.currentPage--}}},[e("i",{staticClass:"fas fa-chevron-left"}),t._v(" 上一页 ")]),e("span",{staticClass:"page-info"},[t._v(t._s(t.currentPage)+" / "+t._s(t.totalPages))]),e("button",{staticClass:"page-btn",attrs:{disabled:t.currentPage===t.totalPages},on:{click:function(e){t.currentPage++}}},[t._v(" 下一页 "),e("i",{staticClass:"fas fa-chevron-right"})])])])},W=[];const E={name:"ArticlePage",data(){return{currentCategory:"all",searchQuery:"",selectedTags:[],currentPage:1,pageSize:6,categories:[{id:"all",name:"全部文章",icon:"fas fa-th-large"},{id:"frontend",name:"前端开发",icon:"fas fa-code"},{id:"backend",name:"后端开发",icon:"fas fa-server"},{id:"devops",name:"DevOps",icon:"fas fa-tools"},{id:"algorithm",name:"算法",icon:"fas fa-brain"}],articles:[{id:1,title:"Vue3 组合式 API 实战指南",excerpt:"深入探讨 Vue3 组合式 API 的使用方法和最佳实践，包括 setup 函数、响应式系统、生命周期钩子等核心概念...",date:"2024-03-20",readTime:8,views:1234,likes:88,comments:23,isLiked:!1,categoryId:"frontend",cover:"https://picsum.photos/400/200?random=1",tags:["Vue3","JavaScript","前端开发"]},{id:2,title:"Node.js 性能优化实践",excerpt:"探索 Node.js 应用性能优化的各种技巧，包括内存管理、异步操作优化、缓存策略等...",date:"2024-03-18",readTime:12,views:856,likes:67,comments:15,isLiked:!0,categoryId:"backend",cover:"https://picsum.photos/400/200?random=2",tags:["Node.js","性能优化","后端开发"]}]}},computed:{filteredArticles(){let t=this.articles;if("all"!==this.currentCategory&&(t=t.filter((t=>t.categoryId===this.currentCategory))),this.searchQuery){const e=this.searchQuery.toLowerCase();t=t.filter((t=>t.title.toLowerCase().includes(e)||t.excerpt.toLowerCase().includes(e)))}return this.selectedTags.length>0&&(t=t.filter((t=>this.selectedTags.every((e=>t.tags.includes(e)))))),t},totalPages(){return Math.ceil(this.filteredArticles.length/this.pageSize)}},methods:{getCategoryName(t){const e=this.categories.find((e=>e.id===t));return e?e.name:""},addTag(t){this.selectedTags.includes(t)||this.selectedTags.push(t)},removeTag(t){this.selectedTags=this.selectedTags.filter((e=>e!==t))},toggleLike(t){t.isLiked=!t.isLiked,t.likes+=t.isLiked?1:-1},readArticle(t){this.$router.push(`/article/${t}`)}}},H=E;var R=(0,d.A)(H,N,W,!1,null,"56cb78a2",null);const z=R.exports;var V=function(){var t=this,e=t._self._c;return e("div",{staticClass:"project-page"},[e("h1",{staticClass:"page-title"},[t._v("项目展示")]),e("div",{staticClass:"project-grid"},t._l(t.projects,(function(s){return e("div",{key:s.id,staticClass:"project-card"},[e("img",{staticClass:"project-image",attrs:{src:s.image,alt:s.title}}),e("div",{staticClass:"project-info"},[e("h2",[t._v(t._s(s.title))]),e("p",{staticClass:"project-desc"},[t._v(t._s(s.description))]),e("div",{staticClass:"project-tech"},t._l(s.technologies,(function(s){return e("span",{key:s,staticClass:"tech-tag"},[t._v(t._s(s))])})),0),e("div",{staticClass:"project-links"},[e("a",{staticClass:"project-link",attrs:{href:s.demo,target:"_blank"}},[t._v("演示")]),e("a",{staticClass:"project-link",attrs:{href:s.github,target:"_blank"}},[t._v("GitHub")])])])])})),0)])},B=[];const K={name:"ProjectPage",data(){return{projects:[{id:1,title:"个人博客系统",description:"基于Vue3和Node.js的全���博客系统",image:"https://picsum.photos/400/300?random=1",technologies:["Vue3","Node.js","MongoDB"],demo:"#",github:"#"}]}}},Q=K;var X=(0,d.A)(Q,V,B,!1,null,"15d82910",null);const Y=X.exports;var q=function(){var t=this,e=t._self._c;return e("div",{staticClass:"note-page"},[e("h1",{staticClass:"page-title"},[t._v("学习笔记")]),e("div",{staticClass:"note-categories"},t._l(t.categories,(function(s){return e("button",{key:s.id,class:["category-btn",{active:t.currentCategory===s.id}],on:{click:function(e){t.currentCategory=s.id}}},[t._v(" "+t._s(s.name)+" ")])})),0),e("div",{staticClass:"notes-grid"},t._l(t.filteredNotes,(function(s){return e("div",{key:s.id,staticClass:"note-card"},[e("div",{staticClass:"note-header"},[e("span",{staticClass:"note-date"},[t._v(t._s(s.date))]),e("span",{staticClass:"note-category"},[t._v(t._s(t.getCategoryName(s.categoryId)))])]),e("h3",[t._v(t._s(s.title))]),e("p",{staticClass:"note-excerpt"},[t._v(t._s(s.excerpt))]),e("div",{staticClass:"note-footer"},t._l(s.tags,(function(s){return e("span",{key:s,staticClass:"note-tag"},[t._v(t._s(s))])})),0)])})),0)])},F=[];const J={name:"NotePage",data(){return{currentCategory:"all",categories:[{id:"all",name:"全部"},{id:"frontend",name:"前端开发"},{id:"backend",name:"后端开发"},{id:"devops",name:"DevOps"}],notes:[{id:1,title:"Vue3 Composition API 学习笔记",excerpt:"Setup函数的使用方法和注意事项...",date:"2024-03-15",categoryId:"frontend",tags:["Vue3","JavaScript"]}]}},computed:{filteredNotes(){return"all"===this.currentCategory?this.notes:this.notes.filter((t=>t.categoryId===this.currentCategory))}},methods:{getCategoryName(t){const e=this.categories.find((e=>e.id===t));return e?e.name:""}}},G=J;var U=(0,d.A)(G,q,F,!1,null,"49dd0a9e",null);const Z=U.exports;var tt=function(){var t=this,e=t._self._c;return e("div",{staticClass:"resource-page"},[e("h1",{staticClass:"page-title"},[t._v("资源分享")]),e("div",{staticClass:"resource-sections"},t._l(t.sections,(function(s){return e("div",{key:s.id,staticClass:"resource-section"},[e("h2",{staticClass:"section-title"},[t._v(t._s(s.title))]),e("div",{staticClass:"resource-grid"},t._l(s.resources,(function(s){return e("a",{key:s.id,staticClass:"resource-card",attrs:{href:s.link,target:"_blank"}},[e("img",{staticClass:"resource-icon",attrs:{src:s.icon,alt:s.name}}),e("h3",[t._v(t._s(s.name))]),e("p",[t._v(t._s(s.description))])])})),0)])})),0)])},et=[];const st={name:"ResourcePage",data(){return{sections:[{id:1,title:"推荐工具",resources:[{id:1,name:"VS Code",description:"强大的代码编辑器",icon:"https://picsum.photos/50?random=1",link:"#"}]}]}}},it=st;var at=(0,d.A)(it,tt,et,!1,null,"76143250",null);const nt=at.exports;var rt=function(){var t=this;t._self._c;return t._m(0)},ot=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"about-page"},[e("div",{staticClass:"profile-card"},[e("div",{staticClass:"profile-header"},[e("img",{staticClass:"avatar",attrs:{src:"https://picsum.photos/200",alt:"头像"}}),e("h1",[t._v("关于我")])]),e("div",{staticClass:"profile-content"},[e("p",{staticClass:"bio"},[t._v("热爱编程的全栈开发工程师，专注于前端技术栈。喜欢分享技术经验和学习心得。")]),e("div",{staticClass:"skills"},[e("h2",[t._v("技术栈")]),e("div",{staticClass:"skill-tags"},[e("span",{staticClass:"skill-tag"},[t._v("Vue.js")]),e("span",{staticClass:"skill-tag"},[t._v("React")]),e("span",{staticClass:"skill-tag"},[t._v("Node.js")]),e("span",{staticClass:"skill-tag"},[t._v("TypeScript")]),e("span",{staticClass:"skill-tag"},[t._v("微前端")])])])])])])}];const ct={name:"AboutPage"},lt=ct;var dt=(0,d.A)(lt,rt,ot,!1,null,"c2d343c0",null);const ut=dt.exports;i["default"].use(b.Ay);const ht=[{path:"/",name:"HomePage",component:L},{path:"/articles",name:"ArticlePage",component:z},{path:"/projects",name:"ProjectPage",component:Y},{path:"/notes",name:"NotePage",component:Z},{path:"/resources",name:"ResourcePage",component:nt},{path:"/about",name:"AboutPage",component:ut}],pt=new b.Ay({mode:"hash",base:"/YunSite/",routes:ht}),gt=pt;var vt=s(9143),mt=s.n(vt);i["default"].use(mt()),i["default"].config.productionTip=!1,new i["default"]({router:gt,render:t=>t(w)}).$mount("#app")}},e={};function s(i){var a=e[i];if(void 0!==a)return a.exports;var n=e[i]={id:i,loaded:!1,exports:{}};return t[i](n,n.exports,s),n.loaded=!0,n.exports}s.m=t,(()=>{s.amdO={}})(),(()=>{var t=[];s.O=(e,i,a,n)=>{if(!i){var r=1/0;for(d=0;d<t.length;d++){for(var[i,a,n]=t[d],o=!0,c=0;c<i.length;c++)(!1&n||r>=n)&&Object.keys(s.O).every((t=>s.O[t](i[c])))?i.splice(c--,1):(o=!1,n<r&&(r=n));if(o){t.splice(d--,1);var l=a();void 0!==l&&(e=l)}}return e}n=n||0;for(var d=t.length;d>0&&t[d-1][2]>n;d--)t[d]=t[d-1];t[d]=[i,a,n]}})(),(()=>{s.n=t=>{var e=t&&t.__esModule?()=>t["default"]:()=>t;return s.d(e,{a:e}),e}})(),(()=>{s.d=(t,e)=>{for(var i in e)s.o(e,i)&&!s.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}})(),(()=>{s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()})(),(()=>{s.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e)})(),(()=>{s.r=t=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}})(),(()=>{s.nmd=t=>(t.paths=[],t.children||(t.children=[]),t)})(),(()=>{var t={524:0};s.O.j=e=>0===t[e];var e=(e,i)=>{var a,n,[r,o,c]=i,l=0;if(r.some((e=>0!==t[e]))){for(a in o)s.o(o,a)&&(s.m[a]=o[a]);if(c)var d=c(s)}for(e&&e(i);l<r.length;l++)n=r[l],s.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return s.O(d)},i=self["webpackChunkvue_carousel_demo"]=self["webpackChunkvue_carousel_demo"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))})();var i=s.O(void 0,[504],(()=>s(3123)));i=s.O(i)})();
//# sourceMappingURL=app.a7234a0f.js.map