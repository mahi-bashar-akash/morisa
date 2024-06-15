import{_ as r,d as $,r as _,o as b,c as k,a as m,b as e,e as a,w as i,f,g as p,h as w,F as g,n as C,i as j,j as E,k as S}from"./vue-router-CZz53cca.js";const q=$({name:"app",watch:{$route:{immediate:!0,handler(d,t){document.title=d.meta.title||"app"}}}});function L(d,t,l,c,n,o){const s=_("router-view");return b(),k(s)}const M=r(q,[["render",L]]),O={data(){return{}},mounted(){},methods:{}},N={class:"w-100 linear-background"},B={class:"container-fluid"},A={class:"row justify-content-center align-items-center vh-100"},T={class:"authentication p-3"};function P(d,t,l,c,n,o){const s=_("router-view");return b(),m("section",N,[e("div",B,[e("div",A,[e("div",T,[a(s)])])])])}const R=r(O,[["render",P]]),F={data(){return{}},mounted(){},methods:{}},I={class:"w-100 shadow bg-white p-4 p-sm-5 fw-medium"},D=f('<div class="text-center"><div class="mb-4"><img src="/images/logo.webp" class="width-100" alt="logo"></div><div class="mb-4 fs-5 fw-bold"> Let&#39;s get you signed in</div></div><div class="row"><div class="col-12 col-md-6 mb-3"><button type="button" class="btn bg-light py-3 border-secondary-subtle w-100 border rounded-0"><i class="bi bi-facebook text-primary"></i><span class="ms-2"> Sign in with facebook </span></button></div><div class="col-12 col-md-6 mb-3"><button type="button" class="btn bg-light py-3 border-secondary-subtle w-100 border rounded-0"><i class="bi bi-google text-danger"></i><span class="ms-2"> Sign in with google </span></button></div></div><div class="d-flex justify-content-center align-items-center my-2"> Or sign in with email </div><div class="form-group mb-3"><label for="email" class="form-label">Email</label><input id="email" type="email" name="email" class="form-control px-3 height-45 border shadow-none rounded-0" required autocomplete="new-email" placeholder="Enter your email"></div><div class="form-group mb-3"><label for="password" class="form-label">Password</label><input id="password" type="password" name="password" class="form-control px-3 height-45 border shadow-none rounded-0" required autocomplete="new-password" placeholder="Enter your password"></div>',5),W={class:"d-flex align-items-center justify-content-between mb-3"},H=e("div",{class:"form-group"},[e("label",{for:"remember-me",class:"form-check-label cursor-pointer"},[e("input",{type:"checkbox",name:"remember-me",class:"form-checkbox",id:"remember-me"}),p(" Remember me ")])],-1),U=e("button",{type:"submit",class:"btn btn-outline-theme width-120 height-45 rounded-0"}," Login ",-1);function V(d,t,l,c,n,o){const s=_("router-link");return b(),m("div",I,[D,e("div",W,[H,a(s,{to:{name:"forget"},class:"text-decoration-none text-danger"},{default:i(()=>[p(" Forget Password? ")]),_:1})]),U])}const G=r(F,[["render",V]]),J={data(){return{tab:"forget"}},mounted(){},methods:{}},X={key:0,class:"w-100 shadow bg-white p-4 p-sm-5 fw-medium"},z=f('<div class="mb-4 text-center"><img src="/images/logo.webp" class="width-100" alt="logo"></div><div class="mb-4 text-secondary"> Please enter the email address associated with your account and We will email you a link to reset your password. </div><div class="form-group mb-3"><label for="email" class="form-label">Email Address</label><input id="email" type="email" name="email" class="form-control px-3 height-45 border shadow-none rounded-0" required autocomplete="new-email" placeholder="Enter your email"></div>',3),K={class:"mb-3"},Q={key:1,class:"w-100 shadow bg-white p-4 p-sm-5 fw-medium"},Y=f('<div class="mb-4 text-center"><img src="/images/logo.webp" class="width-100" alt="logo"></div><div class="text-center fw-bold fs-4"> Reset your password </div><div class="mb-4 text-center text-secondary"> Create a new password for your account </div><div class="form-group mb-3"><label for="email" class="form-label">Email</label><input id="email" type="email" name="email" class="form-control px-3 height-45 border shadow-none rounded-0" required autocomplete="new-email" placeholder="Enter your email"></div><div class="form-group mb-3"><label for="code" class="form-label mb-0">Code</label><div class="small text-secondary mb-2 fw-normal"> Please code collect from your email</div><input id="code" type="text" name="code" class="form-control px-3 height-45 border shadow-none rounded-0" required autocomplete="new-code" placeholder="Enter your code"></div><div class="form-group mb-3"><label for="password" class="form-label">Password</label><input id="password" type="password" name="password" class="form-control px-3 height-45 border shadow-none rounded-0" required autocomplete="new-password" placeholder="Enter your new password"></div><div class="form-group mb-3"><label for="confirm-password" class="form-label">Confirm Password</label><input id="confirm-password" type="password" name="confirm-password" class="form-control px-3 height-45 border shadow-none rounded-0" required autocomplete="new-confirm-password" placeholder="Enter your new confirm password"></div><div class="mb-3"><button type="submit" class="btn btn-outline-theme width-120 height-45 rounded-0"> Reset </button></div>',8);function Z(d,t,l,c,n,o){const s=_("router-link");return b(),m(g,null,[n.tab==="forget"?(b(),m("div",X,[z,e("div",K,[e("button",{type:"submit",class:"btn btn-outline-theme width-170 height-45 rounded-0",onClick:t[0]||(t[0]=x=>n.tab="reset")}," Forget Password ")]),a(s,{to:{name:"login"},class:"text-decoration-none text-light-gray-hover"},{default:i(()=>[p(" Back to login ")]),_:1})])):w("",!0),n.tab==="reset"?(b(),m("div",Q,[Y,a(s,{to:{name:"login"},class:"text-decoration-none text-light-gray-hover"},{default:i(()=>[p(" Back to login ")]),_:1})])):w("",!0)],64)}const ee=r(J,[["render",Z]]),te={data(){return{isActiveSidebar:!1}},mounted(){},methods:{sidebarOpen(){this.isActiveSidebar=!0},sidebarClose(){this.isActiveSidebar=!1}}},se={class:"admin-wrapper"},oe={class:"admin-sidebar-header"},ae=e("span",null,"dmin Panel",-1),ie=e("i",{class:"bi bi-x-lg"},null,-1),de=[ie],ne={class:"admin-sidebar-body"},le=e("i",{class:"bi bi-speedometer"},null,-1),re=e("span",{class:"ms-2"}," dashboard ",-1),ce=e("i",{class:"bi bi-sliders"},null,-1),be=e("span",{class:"ms-2"}," sliders ",-1),me=e("i",{class:"bi bi-boxes"},null,-1),ue=e("span",{class:"ms-2"}," boxes ",-1),pe=e("i",{class:"bi bi-link-45deg"},null,-1),he=e("span",{class:"ms-2"}," Attribute ",-1),ve=e("i",{class:"bi bi-person"},null,-1),fe=e("span",{class:"ms-2"}," about ",-1),ge=e("i",{class:"bi bi-telephone"},null,-1),_e=e("span",{class:"ms-2"}," contact ",-1),we=e("i",{class:"bi bi-card-text"},null,-1),ye=e("span",{class:"ms-2"}," blogs ",-1),xe=e("i",{class:"bi bi-bag"},null,-1),$e=e("span",{class:"ms-2"}," products ",-1),ke=e("i",{class:"bi bi-people"},null,-1),Ce=e("span",{class:"ms-2"}," customers ",-1),je=e("i",{class:"bi bi-cart"},null,-1),Ee=e("span",{class:"ms-2"}," orders ",-1),Se=e("div",{class:"admin-sidebar-footer"},[e("button",{type:"button",class:"admin-sidebar-footer-link"},[e("i",{class:"bi bi-box-arrow-in-right"}),e("span",{class:"ms-2"}," Logout ")])],-1),qe={class:"admin-content"},Le={class:"admin-content-header"},Me={class:"d-flex align-items-center justify-content-start"},Oe=e("i",{class:"bi bi-justify-left"},null,-1),Ne=[Oe],Be=f('<div class="ms-3 d-lg-none"><button type="button" class="btn-icon rounded-3"><i class="bi bi-search"></i></button></div><div class="d-none d-lg-inline"><div class="position-relative header"><div class="position-absolute top-50 start-0 translate-middle-y ps-3"><i class="bi bi-search text-light-gray"></i></div><input type="text" name="keyword" class="form-control ps-5 py-3" placeholder="Search here anything" required autocomplete="new-keyword"></div></div>',2),Ae={class:"d-flex justify-content-end align-items-center"},Te=f('<button type="button" class="btn-icon rounded-3 me-3"><i class="bi bi-fullscreen"></i></button><div class="dropdown"><button type="button" class="btn-icon rounded-3 me-3" data-bs-toggle="dropdown" aria-expanded="false"><i class="bi bi-envelope"></i></button><ul class="dropdown-menu dropdown-menu-end width-330"><li class="mb-1"><a href="javascript:void(0)" class="text-decoration-none dropdown-item"><span class="d-block fw-medium"> John Smith </span><span class="text-secondary truncate-to-2-line text-wrap"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, sequi? </span></a></li><li class="mb-1"><a href="javascript:void(0)" class="text-decoration-none dropdown-item"><span class="d-block fw-medium"> John Duo </span><span class="text-secondary truncate-to-2-line text-wrap"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, sequi? </span></a></li><li class="mb-1"><a href="javascript:void(0)" class="text-decoration-none dropdown-item"><span class="d-block fw-medium"> Emma WordSon </span><span class="text-secondary truncate-to-2-line text-wrap"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, sequi? </span></a></li><li class="mb-1"><a href="javascript:void(0)" class="text-decoration-none dropdown-item"><span class="d-block fw-medium"> ElbRas William </span><span class="text-secondary truncate-to-2-line text-wrap"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, sequi? </span></a></li><li><a href="javascript:void(0)" class="btn btn-light-theme d-block"> Show all </a></li></ul></div>',2),Pe={class:"dropdown"},Re=e("div",{class:"cursor-pointer","data-bs-toggle":"dropdown","aria-expanded":"false"},[e("img",{src:"/images/teams/team-1.jpg",class:"img-fluid object-fit-contain width-45 height-45 rounded-circle",alt:"avatar"})],-1),Fe={class:"dropdown-menu dropdown-menu-end"},Ie={class:"mb-1"},De=e("i",{class:"bi bi-person"},null,-1),We=e("span",{class:"ms-2"}," Profile ",-1),He={class:"mb-1"},Ue=e("i",{class:"bi bi-gear"},null,-1),Ve=e("span",{class:"ms-2"}," Settings ",-1),Ge=e("li",null,[e("button",{type:"button",class:"dropdown-item"},[e("i",{class:"bi bi-box-arrow-in-right"}),p(),e("span",{class:"ms-2"}," Logout ")])],-1),Je={class:"admin-content-body scrollbar"};function Xe(d,t,l,c,n,o){const s=_("router-link"),x=_("router-view");return b(),m("div",se,[e("div",{class:C(["admin-sidebar",{active:n.isActiveSidebar}])},[e("div",oe,[a(s,{to:{name:"dashboard"},class:"admin-sidebar-logo",onClick:t[0]||(t[0]=v=>o.sidebarClose())},{default:i(()=>[p(" A"),ae]),_:1}),e("button",{type:"button",class:"admin-sidebar-close",onClick:t[1]||(t[1]=v=>o.sidebarClose())},de)]),e("div",ne,[a(s,{to:{name:"dashboard"},class:"admin-sidebar-body-link",onClick:t[2]||(t[2]=v=>o.sidebarClose())},{default:i(()=>[le,re]),_:1}),a(s,{to:{name:"sliders"},class:"admin-sidebar-body-link",onClick:t[3]||(t[3]=v=>o.sidebarClose())},{default:i(()=>[ce,be]),_:1}),a(s,{to:{name:"boxes"},class:"admin-sidebar-body-link",onClick:t[4]||(t[4]=v=>o.sidebarClose())},{default:i(()=>[me,ue]),_:1}),a(s,{to:{name:"attribute"},class:"admin-sidebar-body-link",onClick:t[5]||(t[5]=v=>o.sidebarClose())},{default:i(()=>[pe,he]),_:1}),a(s,{to:{name:"about"},class:"admin-sidebar-body-link",onClick:t[6]||(t[6]=v=>o.sidebarClose())},{default:i(()=>[ve,fe]),_:1}),a(s,{to:{name:"contact"},class:"admin-sidebar-body-link",onClick:t[7]||(t[7]=v=>o.sidebarClose())},{default:i(()=>[ge,_e]),_:1}),a(s,{to:{name:"blogs"},class:"admin-sidebar-body-link",onClick:t[8]||(t[8]=v=>o.sidebarClose())},{default:i(()=>[we,ye]),_:1}),a(s,{to:{name:"products"},class:"admin-sidebar-body-link",onClick:t[9]||(t[9]=v=>o.sidebarClose())},{default:i(()=>[xe,$e]),_:1}),a(s,{to:{name:"customers"},class:"admin-sidebar-body-link",onClick:t[10]||(t[10]=v=>o.sidebarClose())},{default:i(()=>[ke,Ce]),_:1}),a(s,{to:{name:"orders"},class:"admin-sidebar-body-link",onClick:t[11]||(t[11]=v=>o.sidebarClose())},{default:i(()=>[je,Ee]),_:1})]),Se],2),e("div",qe,[e("div",Le,[e("div",Me,[e("button",{type:"button",class:"admin-sidebar-toggle",onClick:t[12]||(t[12]=v=>o.sidebarOpen())},Ne),Be]),e("div",Ae,[Te,e("div",Pe,[Re,e("ul",Fe,[e("li",Ie,[a(s,{to:{name:"profile"},class:"dropdown-item"},{default:i(()=>[De,p(),We]),_:1})]),e("li",He,[a(s,{to:{name:"settings"},class:"dropdown-item"},{default:i(()=>[Ue,p(),Ve]),_:1})]),Ge])])])]),e("div",Je,[a(x)])])])}const ze=r(te,[["render",Xe]]),Ke={data(){return{}},mounted(){},methods:{}},Qe={class:"row"},Ye={class:"col-sm-6 col-md-6 col-lg-4 col-xl-3 mb-3"},Ze=e("div",{class:"pb-3 text-light-gray fs-5"}," Sliders ",-1),et=e("div",{class:"pb-3 text-theme"},[e("i",{class:"bi bi-sliders fw-bold fs-4"})],-1),tt=e("div",{class:"text-light-gray fs-5"}," 1,00,000 ",-1),st={class:"col-sm-6 col-md-6 col-lg-4 col-xl-3 mb-3"},ot=e("div",{class:"pb-3 text-light-gray fs-5"}," Boxes ",-1),at=e("div",{class:"pb-3 text-theme"},[e("i",{class:"bi bi-boxes fw-bold fs-4"})],-1),it=e("div",{class:"text-light-gray fs-5"}," 1,00,000 ",-1),dt={class:"col-sm-6 col-md-6 col-lg-4 col-xl-3 mb-3"},nt=e("div",{class:"pb-3 text-light-gray fs-5"}," Attributes ",-1),lt=e("div",{class:"pb-3 text-theme"},[e("i",{class:"bi bi-link-45deg fw-bold fs-4"})],-1),rt=e("div",{class:"text-light-gray fs-5"}," 1,00,000 ",-1),ct={class:"col-sm-6 col-md-6 col-lg-4 col-xl-3 mb-3"},bt=e("div",{class:"pb-3 text-light-gray fs-5"}," Blogs ",-1),mt=e("div",{class:"pb-3 text-theme"},[e("i",{class:"bi bi-card-text fw-bold fs-4"})],-1),ut=e("div",{class:"text-light-gray fs-5"}," 1,00,000 ",-1),pt={class:"col-sm-6 col-md-6 col-lg-4 col-xl-3 mb-3"},ht=e("div",{class:"pb-3 text-light-gray fs-5"}," Products ",-1),vt=e("div",{class:"pb-3 text-theme"},[e("i",{class:"bi bi-bag fw-bold fs-4"})],-1),ft=e("div",{class:"text-light-gray fs-5"}," 1,00,000 ",-1),gt={class:"col-sm-6 col-md-6 col-lg-4 col-xl-3 mb-3"},_t=e("div",{class:"pb-3 text-light-gray fs-5"}," Customers ",-1),wt=e("div",{class:"pb-3 text-theme"},[e("i",{class:"bi bi-people fw-bold fs-4"})],-1),yt=e("div",{class:"text-light-gray fs-5"}," 1,00,000 ",-1),xt={class:"col-sm-6 col-md-6 col-lg-4 col-xl-3 mb-3"},$t=e("div",{class:"pb-3 text-light-gray fs-5"}," Orders ",-1),kt=e("div",{class:"pb-3 text-theme"},[e("i",{class:"bi bi-cart fw-bold fs-4"})],-1),Ct=e("div",{class:"text-light-gray fs-5"}," 1,00,000 ",-1);function jt(d,t,l,c,n,o){const s=_("router-link");return b(),m("div",Qe,[e("div",Ye,[a(s,{to:{name:"sliders"},class:"w-100 shadow bg-white p-5 text-center d-block text-decoration-none"},{default:i(()=>[Ze,et,tt]),_:1})]),e("div",st,[a(s,{to:{name:"boxes"},class:"w-100 shadow bg-white p-5 text-center d-block text-decoration-none"},{default:i(()=>[ot,at,it]),_:1})]),e("div",dt,[a(s,{to:{name:"attribute"},class:"w-100 shadow bg-white p-5 text-center d-block text-decoration-none"},{default:i(()=>[nt,lt,rt]),_:1})]),e("div",ct,[a(s,{to:{name:"blogs"},class:"w-100 shadow bg-white p-5 text-center d-block text-decoration-none"},{default:i(()=>[bt,mt,ut]),_:1})]),e("div",pt,[a(s,{to:{name:"products"},class:"w-100 shadow bg-white p-5 text-center d-block text-decoration-none"},{default:i(()=>[ht,vt,ft]),_:1})]),e("div",gt,[a(s,{to:{name:"customers"},class:"w-100 shadow bg-white p-5 text-center d-block text-decoration-none"},{default:i(()=>[_t,wt,yt]),_:1})]),e("div",xt,[a(s,{to:{name:"orders"},class:"w-100 shadow bg-white p-5 text-center d-block text-decoration-none"},{default:i(()=>[$t,kt,Ct]),_:1})])])}const Et=r(Ke,[["render",jt]]),St={data(){return{formData:{uploadFile:null}}},mounted(){},methods:{}},qt=f('<div class="d-flex justify-content-end mb-4"><button type="button" class="btn btn-theme width-120 py-2 rounded-0" data-bs-toggle="modal" data-bs-target="#manageModal"> New </button></div><div class="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3"><div class="mb-3"><div class="card border rounded-0 p-3"><div class="card-body bg-white border-0 rounded-0"><div class="position-relative"><img src="/images/banner/banner-1.jpg" class="img-fluid object-fit-cover height-250" alt="banner 1"><div class="position-absolute top-0 start-0 p-3"><div class="width-45 height-45 d-flex justify-content-center align-items-center rounded-circle shadow bg-white fw-bold"> 01 </div></div></div></div><div class="card-footer bg-white border-0 rounded-0"><div class="fw-medium"> CLOTHING </div><div class="fw-medium mb-3"> NEW COLLECTION </div><div class="fw-bold mb-3 fs-4"> SUMMER FASHION </div><div class="text-secondary mb-3"> We crack for this purely rock style with stitched quills in relief and metallic hardware. </div><button type="button" class="btn btn-outline-dark rounded-0 py-2 width-95 border-3" data-bs-toggle="modal" data-bs-target="#manageModal"> Edit </button></div></div></div><div class="mb-3"><div class="card border rounded-0 p-3"><div class="card-body bg-white border-0 rounded-0"><div class="position-relative"><img src="/images/banner/banner-4.jpg" class="img-fluid object-fit-cover height-250" alt="banner 2"><div class="position-absolute top-0 start-0 p-3"><div class="width-45 height-45 d-flex justify-content-center align-items-center rounded-circle shadow bg-white fw-bold"> 02 </div></div></div></div><div class="card-footer bg-white border-0 rounded-0"><div class="fw-medium"> T-SHIRT </div><div class="fw-medium mb-3"> NEW COLLECTION </div><div class="fw-bold mb-3 fs-4"> MODERN FASHION </div><div class="text-secondary mb-3"> BlackBird collection of minimal, sleek and functional Carryalls were designed with creatives in mind. </div><button type="button" class="btn btn-outline-dark rounded-0 py-2 width-95 border-3" data-bs-toggle="modal" data-bs-target="#manageModal"> Edit </button></div></div></div><div class="mb-3"><div class="card border rounded-0 p-3"><div class="card-body bg-white border-0 rounded-0"><div class="position-relative"><img src="/images/banner/banner-2.jpg" class="img-fluid object-fit-cover height-250" alt="banner 2"><div class="position-absolute top-0 start-0 p-3"><div class="width-45 height-45 d-flex justify-content-center align-items-center rounded-circle shadow bg-white fw-bold"> 03 </div></div></div></div><div class="card-footer bg-white border-0 rounded-0"><div class="fw-medium"> T-SHIRT </div><div class="fw-medium mb-3"> NEW COLLECTION </div><div class="fw-bold mb-3 fs-4"> MODERN FASHION </div><div class="text-secondary mb-3"> BlackBird collection of minimal, sleek and functional Carryalls were designed with creatives in mind. </div><button type="button" class="btn btn-outline-dark rounded-0 py-2 width-95 border-3" data-bs-toggle="modal" data-bs-target="#manageModal"> Edit </button></div></div></div><div class="mb-3"><div class="card border rounded-0 p-3"><div class="card-body bg-white border-0 rounded-0"><div class="position-relative"><img src="/images/banner/banner-3.jpg" class="img-fluid object-fit-cover height-250" alt="banner 2"><div class="position-absolute top-0 start-0 p-3"><div class="width-45 height-45 d-flex justify-content-center align-items-center rounded-circle shadow bg-white fw-bold"> 04 </div></div></div></div><div class="card-footer bg-white border-0 rounded-0"><div class="fw-medium"> T-SHIRT </div><div class="fw-medium mb-3"> NEW COLLECTION </div><div class="fw-bold mb-3 fs-4"> MODERN FASHION </div><div class="text-secondary mb-3"> BlackBird collection of minimal, sleek and functional Carryalls were designed with creatives in mind. </div><button type="button" class="btn btn-outline-dark rounded-0 py-2 width-95 border-3" data-bs-toggle="modal" data-bs-target="#manageModal"> Edit </button></div></div></div></div>',2),Lt={class:"modal fade",id:"manageModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},Mt={class:"modal-dialog modal-dialog-centered"},Ot={class:"modal-content rounded-0 border-0 p-4"},Nt={class:"modal-header border-0"},Bt={class:"modal-title fs-5",id:"exampleModalLabel"},At=e("button",{type:"button",class:"btn-close shadow-none","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),Tt=f('<div class="modal-body border-0"><div class="form-group mv-3"><label for="slider-upload-file" class="form-label border w-100 px-3 height-200 d-flex justify-content-center align-items-center flex-column cursor-pointer"><input type="file" name="slider-upload-file" id="slider-upload-file" hidden="hidden"><i class="bi bi-cloud-check fs-1"></i><span class="fw-bold small"> Upload File </span></label></div><div class="form-group mb-3"><label for="slider-catalogue-title" class="form-label">Catalogue Title</label><input id="slider-catalogue-title" type="text" name="slider-catalogue-title" class="form-control p-3 border shadow-none rounded-0" required autocomplete="new-slider-catalogue-title"></div><div class="form-group mb-3"><label for="slider-description" class="form-label">Description</label><textarea name="slider-description" id="slider-description" cols="30" rows="5" class="form-textarea p-3 border shadow-none rounded-0" required autocomplete="new-slider-description"></textarea></div></div><div class="modal-footer border-0"><button type="button" class="btn btn-secondary py-2 width-95 rounded-0" data-bs-dismiss="modal"> Close </button><button type="submit" class="btn btn-theme py-2 width-95 rounded-0"> Save </button></div>',2);function Pt(d,t,l,c,n,o){return b(),m(g,null,[qt,e("div",Lt,[e("div",Mt,[e("form",Ot,[e("div",Nt,[e("h1",Bt,[this.formData.id===void 0?(b(),m(g,{key:0},[p(" Create ")],64)):w("",!0),this.formData.id!==void 0?(b(),m(g,{key:1},[p(" Edit ")],64)):w("",!0),p(" Slider ")]),At]),Tt])])])],64)}const Rt=r(St,[["render",Pt]]),Ft={data(){return{formData:{uploadImage:null,title:""}}},mounted(){},methods:{}},It=f('<div class="d-flex justify-content-end mb-4"><button type="button" class="btn btn-theme width-120 py-2 rounded-0" data-bs-toggle="modal" data-bs-target="#manageModal"> New </button></div><div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4"><div class="mb-3"><div class="card border rounded-0 p-3"><div class="card-body bg-white border-0 rounded-0"><div class="position-relative"><div class="w-100 height-150 d-flex justify-content-center align-items-center"><img src="/images/boxes/box-1.webp" class="img-fluid object-fit-cover width-75 height-75" alt="banner 1"></div><div class="position-absolute top-0 start-0 p-3"><div class="width-45 height-45 d-flex justify-content-center align-items-center rounded-circle shadow bg-white fw-bold"> 01 </div></div></div></div><div class="card-footer bg-white border-0 rounded-0"><div class="fw-bold mb-3 fs-6"> Free Shipping Worldwide </div><div class="text-secondary mb-3"> Mirum est notare quam littera gothica, quam nunc putamus parum claram </div><button type="button" class="btn btn-outline-dark rounded-0 py-2 width-95 border-3" data-bs-toggle="modal" data-bs-target="#manageModal"> Edit </button></div></div></div><div class="mb-3"><div class="card border rounded-0 p-3"><div class="card-body bg-white border-0 rounded-0"><div class="position-relative"><div class="w-100 height-150 d-flex justify-content-center align-items-center"><img src="/images/boxes/box-2.webp" class="img-fluid object-fit-cover width-75 height-75" alt="banner 1"></div><div class="position-absolute top-0 start-0 p-3"><div class="width-45 height-45 d-flex justify-content-center align-items-center rounded-circle shadow bg-white fw-bold"> 02 </div></div></div></div><div class="card-footer bg-white border-0 rounded-0"><div class="fw-bold mb-3 fs-6"> Money Back Guarantee </div><div class="text-secondary mb-3"> Mirum est notare quam littera gothica, quam nunc putamus parum claram </div><button type="button" class="btn btn-outline-dark rounded-0 py-2 width-95 border-3" data-bs-toggle="modal" data-bs-target="#manageModal"> Edit </button></div></div></div><div class="mb-3"><div class="card border rounded-0 p-3"><div class="card-body bg-white border-0 rounded-0"><div class="position-relative"><div class="w-100 height-150 d-flex justify-content-center align-items-center"><img src="/images/boxes/box-3.webp" class="img-fluid object-fit-cover width-75 height-75" alt="banner 1"></div><div class="position-absolute top-0 start-0 p-3"><div class="width-45 height-45 d-flex justify-content-center align-items-center rounded-circle shadow bg-white fw-bold"> 03 </div></div></div></div><div class="card-footer bg-white border-0 rounded-0"><div class="fw-bold mb-3 fs-6"> Online Support 24/7 </div><div class="text-secondary mb-3"> Mirum est notare quam littera gothica, quam nunc putamus parum claram </div><button type="button" class="btn btn-outline-dark rounded-0 py-2 width-95 border-3" data-bs-toggle="modal" data-bs-target="#manageModal"> Edit </button></div></div></div></div>',2),Dt={class:"modal fade",id:"manageModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},Wt={class:"modal-dialog modal-dialog-centered"},Ht={class:"modal-content rounded-0 border-0 p-4"},Ut={class:"modal-header border-0"},Vt={class:"modal-title fs-5",id:"exampleModalLabel"},Gt=e("button",{type:"button",class:"btn-close shadow-none","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),Jt=f('<div class="modal-body border-0"><div class="form-group mv-3"><label for="box-upload-file" class="form-label border w-100 px-3 height-200 d-flex justify-content-center align-items-center flex-column cursor-pointer"><input type="file" name="box-upload-file" id="box-upload-file" hidden="hidden"><i class="bi bi-cloud-check fs-1"></i><span class="fw-bold small"> Upload File </span></label></div><div class="form-group mb-3"><label for="box-catalogue-title" class="form-label">Box Title</label><input id="box-catalogue-title" type="text" name="box-catalogue-title" class="form-control p-3 border shadow-none rounded-0" required autocomplete="new-box-catalogue-title"></div></div><div class="modal-footer border-0"><button type="button" class="btn btn-secondary py-2 width-95 rounded-0" data-bs-dismiss="modal"> Close </button><button type="submit" class="btn btn-theme py-2 width-95 rounded-0"> Save </button></div>',2);function Xt(d,t,l,c,n,o){return b(),m(g,null,[It,e("div",Dt,[e("div",Wt,[e("form",Ht,[e("div",Ut,[e("h1",Vt,[this.formData.id===void 0?(b(),m(g,{key:0},[p(" Create ")],64)):w("",!0),this.formData.id!==void 0?(b(),m(g,{key:1},[p(" Edit ")],64)):w("",!0),p(" Box ")]),Gt]),Jt])])])],64)}const zt=r(Ft,[["render",Xt]]),Kt={data(){return{}},mounted(){},methods:{}},Qt=f('<div class="d-flex justify-content-end mb-4"><button type="button" class="btn btn-theme width-120 py-2 rounded-0" data-bs-toggle="modal" data-bs-target="#manageModal"> New </button></div><div class="table-responsive"><table class="table"><thead><tr class="p-3"><th class="ps-4 py-3"> Attribute </th><th class="ps-4 py-3"> Value </th><th class="ps-4 py-3"> Action </th></tr></thead><tbody><tr class="align-middle"><td class="ps-4 py-3"> Categories </td><td class="ps-4 py-3"> Male, Female, Children, Accessories </td><td class="ps-4 py-2"><div class="d-flex justify-content-start align-items-center gap-2"><button type="button" class="btn-icon rounded-circle"><i class="bi bi-pencil-square text-secondary"></i></button><button type="button" class="btn-icon rounded-circle"><i class="bi bi-trash2 text-danger"></i></button></div></td></tr><tr class="align-middle"><td class="ps-4 py-3"> Brands </td><td class="ps-4 py-3"> Calvin Klein, Diesel, Polo, Tommy Hilfiger </td><td class="ps-4 py-2"><div class="d-flex justify-content-start align-items-center gap-2"><button type="button" class="btn-icon rounded-circle"><i class="bi bi-pencil-square text-secondary"></i></button><button type="button" class="btn-icon rounded-circle"><i class="bi bi-trash2 text-danger"></i></button></div></td></tr><tr class="align-middle"><td class="ps-4 py-3"> Sizes </td><td class="ps-4 py-3"> L, M, S, XL, XS, XXL </td><td class="ps-4 py-2"><div class="d-flex justify-content-start align-items-center gap-2"><button type="button" class="btn-icon rounded-circle"><i class="bi bi-pencil-square text-secondary"></i></button><button type="button" class="btn-icon rounded-circle"><i class="bi bi-trash2 text-danger"></i></button></div></td></tr><tr class="align-middle"><td class="ps-4 py-3"> Colors </td><td class="ps-4 py-3"> Black, Blue, Green, Grey, Red, White </td><td class="ps-4 py-2"><div class="d-flex justify-content-start align-items-center gap-2"><button type="button" class="btn-icon rounded-circle"><i class="bi bi-pencil-square text-secondary"></i></button><button type="button" class="btn-icon rounded-circle"><i class="bi bi-trash2 text-danger"></i></button></div></td></tr></tbody></table></div>',2);function Yt(d,t,l,c,n,o){return Qt}const Zt=r(Kt,[["render",Yt]]),es={data(){return{}},mounted(){},methods:{}},ts={class:"card border-0 rounded-0 bg-white height-calc-150"},ss=f('<div class="card-header border-0 rounded-0 bg-white p-3 height-50 d-flex justify-content-start align-items-center fw-bold"> About </div><form class="card-body border-0 rounded-0 bg-white p-3 scrollbar"><div class="row"><div class="col-12"><div class="form-group mb-3"><label for="author-name" class="form-label">Author name</label><input type="text" name="author-name" id="author-name" class="form-textarea p-3" required autocomplete="new-author-name" placeholder="Enter your name"></div></div><div class="col-lg-4"><div class="form-group mb-3"><label for="what-we-do" class="form-label fw-medium">What we do?</label><textarea name="what-we-do" id="what-we-do" cols="30" rows="5" class="form-textarea p-3" required autocomplete="new-what-we-do" placeholder="Enter what you do"></textarea></div></div><div class="col-lg-4"><div class="form-group mb-3"><label for="why-we-are" class="form-label fw-medium">Why we are?</label><textarea name="why-we-are" id="why-we-are" cols="30" rows="5" class="form-textarea p-3" required autocomplete="new-why-we-are" placeholder="Enter why you are"></textarea></div></div><div class="col-lg-4"><div class="form-group mb-3"><label for="our-mission" class="form-label fw-medium">Our mission</label><textarea name="our-mission" id="our-mission" cols="30" rows="5" class="form-textarea p-3" required autocomplete="new-our-mission" placeholder="Enter your mission"></textarea></div></div><div class="col-lg-12"><div class="form-group mb-3"><label for="our-vision" class="form-label fw-medium">Our vision</label><textarea name="our-vision" id="our-vision" cols="30" rows="5" class="form-textarea p-3" required autocomplete="new-our-vision" placeholder="Enter your vision"></textarea></div></div><div class="col-12"><button type="submit" class="btn btn-theme py-2 width-120"> SUBMIT </button></div></div></form>',2),os=[ss];function as(d,t,l,c,n,o){return b(),m("section",ts,os)}const is=r(es,[["render",as]]),ds={data(){return{}},mounted(){},methods:{}};function ns(d,t,l,c,n,o){return null}const ls=r(ds,[["render",ns]]),rs={data(){return{}},mounted(){},methods:{}};function cs(d,t,l,c,n,o){return null}const bs=r(rs,[["render",cs]]),ms={data(){return{}},mounted(){},methods:{}};function us(d,t,l,c,n,o){return null}const ps=r(ms,[["render",us]]),hs={data(){return{}},mounted(){},methods:{}};function vs(d,t,l,c,n,o){return null}const fs=r(hs,[["render",vs]]),gs={data(){return{}},mounted(){},methods:{}};function _s(d,t,l,c,n,o){return null}const ws=r(gs,[["render",_s]]),ys={data(){return{}},mounted(){},methods:{}};function xs(d,t,l,c,n,o){return null}const $s=r(ys,[["render",xs]]),ks={data(){return{}},mounted(){},methods:{}},Cs={class:"row justify-content-center align-items-center height-calc-90"},js=f('<div class="col-10 col-sm-7 col-md-6 col-lg-6 col-xl-4"><div class="card bg-white border-0 rounded-0"><div class="card-header bg-white border-0 rounded-0 d-flex justify-content-center pt-4 pb-3"><div class="width-150 height-150 rounded-circle shadow d-flex justify-content-center align-items-center"><i class="bi bi-plus text-theme fs-1"></i></div></div><div class="card-body bg-white border-0 rounded-0 px-4 text-center"><div class="mb-3 fw-bold"> Full Name </div><div class="mb-3 text-secondary"> Mahi Bashar Akash </div><div class="mb-3 fw-bold"> Phone Number </div><div class="mb-3 text-secondary"> +880 01400125289 </div><div class="mb-3 fw-bold"> Email </div><div class="mb-3 text-secondary"> mahibashar2023@gmail.com </div><div class="mb-3 fw-bold"> Present Address </div><div class="mb-3 text-secondary"> Jessore Sadar, Jessore, Bangladesh </div></div></div></div>',1),Es=[js];function Ss(d,t,l,c,n,o){return b(),m("div",Cs,Es)}const qs=r(ks,[["render",Ss]]),u=window.core.APP_NAME,y="/admin/auth/",h="/admin/",Ls=[{path:y,name:"authLayout",component:R,children:[{path:y+"login",name:"login",component:G,meta:{title:u+" - Login"}},{path:y+"forget",name:"forget",component:ee,meta:{title:u+" - Forget"}}]},{path:h,name:"layout",component:ze,children:[{path:h+"dashboard",name:"dashboard",component:Et,meta:{title:u+" - Dashboard"}},{path:h+"slider",name:"sliders",component:Rt,meta:{title:u+" - Slider"}},{path:h+"box",name:"boxes",component:zt,meta:{title:u+" - Box"}},{path:h+"attribute",name:"attribute",component:Zt,meta:{title:u+" - attribute"}},{path:h+"about",name:"about",component:is,meta:{title:u+" - About"}},{path:h+"contact",name:"contact",component:ls,meta:{title:u+" - Contact"}},{path:h+"blog",name:"blogs",component:bs,meta:{title:u+" - Blog"}},{path:h+"product",name:"products",component:ps,meta:{title:u+" - Product"}},{path:h+"customer",name:"customers",component:fs,meta:{title:u+" - Customer"}},{path:h+"order",name:"orders",component:ws,meta:{title:u+" - Order"}},{path:h+"settings",name:"settings",component:$s,meta:{title:u+" - Settings"}},{path:h+"profile",name:"profile",component:qs,meta:{title:u+" - Profile"}}]}],Ms=j({history:E(),routes:Ls,scrollBehavior(d,t,l){return d.hash?{el:d.hash,behavior:"smooth"}:{top:0,behavior:"smooth"}}});S(M).use(Ms).mount("#app");
