(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(819)}])},819:function(e,s,a){"use strict";a.r(s),a.d(s,{default:function(){return q}});var i=a(5893),t=a(6627),n=a.n(t),l=a(7536),r=a(7294);function c(e){let{size:s="24"}=e;return(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 -960 960 960",fill:"currentColor",children:(0,i.jsx)("path",{d:"M463.85-243.46 580.46-450H90v-60h490.46L463.85-716.54 835.77-480 463.85-243.46Z"})})}function d(e){let{size:s="24"}=e;return(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 -960 960 960",fill:"currentColor",children:(0,i.jsx)("path",{d:"M369.39-258.69 148.08-480l221.31-221.31 38.92 40.04-153.2 153.19h556.81v55.96H255.11l153.2 153.2-38.92 40.23Z"})})}function m(e){let{size:s="24"}=e;return(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 -960 960 960",fill:"currentColor",children:(0,i.jsx)("path",{d:"m336-280-56-56 144-144-144-143 56-56 144 144 143-144 56 56-144 143 144 144-56 56-143-144-144 144Z"})})}function o(e){let{size:s="24"}=e;return(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 -960 960 960",fill:"currentColor",children:(0,i.jsx)("path",{d:"m424-312 282-282-56-56-226 226-114-114-56 56 170 170ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Z"})})}function h(e){let{size:s="24"}=e;return(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 -960 960 960",fill:"currentColor",children:(0,i.jsx)("path",{d:"M212.31-140Q182-140 161-161q-21-21-21-51.31v-535.38Q140-778 161-799q21-21 51.31-21h535.38Q778-820 799-799q21 21 21 51.31v535.38Q820-182 799-161q-21 21-51.31 21H212.31Zm0-60h535.38q4.62 0 8.46-3.85 3.85-3.84 3.85-8.46v-535.38q0-4.62-3.85-8.46-3.84-3.85-8.46-3.85H212.31q-4.62 0-8.46 3.85-3.85 3.84-3.85 8.46v535.38q0 4.62 3.85 8.46 3.84 3.85 8.46 3.85Z"})})}async function x(e,s){let a="https://api.telegram.org/bot".concat("7238831313:AAHeFlwiTVPgGfPYe0HuSwKdTfAWSjNRwVo","/sendMessage?chat_id=").concat("-4237580427","&parse_mode=html&text=").concat(e),i=await fetch(a,{method:"POST",body:s});return await i.json()}function j(e){var s,a,t,j,p,g;let{step:u,open:v,setStep:b,setOpen:_,text:w="Рассчитать стоимость",gift:f=!1}=e,[N,y]=(0,r.useState)(""),[q,k]=(0,r.useState)(!1),[S,C]=(0,r.useState)("animate__animated animate__backInRight"),[E,T]=(0,r.useState)(!1);(0,r.useEffect)(()=>{T(!0),setTimeout(()=>{v?document.body.style.height="100%":document.body.style.removeProperty("height")},1e3)},[v]);let I={1:{bystap:1,header:"Выберите планировку кухни:",variable:[{image:"/img/24660277_250_q55.avif",value:"Прямая"},{image:"/img/10221259_250_q55.avif",value:"Угловая"},{image:"/img/24730996_250_q55.avif",value:"П-образная"},{image:"/img/24660283_250_q55.avif",value:"С островом"}]},2:{bystap:2,header:"Выберите материал фасадов:",variable:[{image:"/img/24731017_334_q55.avif",value:"МДФ в пленке"},{image:"/img/24731025_376_q55.avif",value:"Пластик"},{image:"/img/39308626_334_q55.avif",value:"Эмаль"},{image:"/img/24731034_445_q55.avif",value:"Фасады из массива"},{image:"/img/24731030_376_q55.avif",value:"ЛДСП"},{image:"/img/24243356_250_q55.avif",value:"Не определились"}]},3:{bystap:3,header:"Введите размеры кухни:",variable:[{image:'Пример: 2.2x1.6 м. Если не знаете, поставьте "-"',value:""}]},4:{bystap:4,header:"Как срочно нужна кухня?",variable:[{image:"",value:"На следующий месяц"},{image:"",value:"В течение двух месяцев"},{image:"",value:"Через пол года"}]},5:{bystap:5,header:"Выберите Ваш подарок:",variable:[{image:"/img/24730962_445_q55.avif",value:"Мойка"},{image:"/img/24660516_332_q55.avif",value:"Вытяжка"}]},6:{bystap:6,header:"Куда вам отправить расчет стоимости Вашей кухни?",variable:[{image:"sms",value:"SMS"},{image:"consultation",value:"БЕСПЛАТНАЯ консультация по телефону - хочу узнать подробнее об акциях которые сейчас проходят"}]},7:{bystap:7,header:"Введите номер телефона, на который Вам отправить расчет",variable:[{image:"За этим номером мы закрепляем подарок *",value:""}]}},{bystap:z,header:M}=I[u],P=()=>window.scrollTo({top:0,behavior:"smooth"}),B=e=>1===e?_(!1):b(e-1),F=()=>{b(u+1),C("animate__animated animate__backInRight"),setTimeout(()=>C(""),1e3)},H=()=>{b(u+0),C("")},O=()=>{1===u&&((null==V?void 0:V.length)>=6?U.kithen?H():F():H()),2===u&&(U.material?H():F()),3===u&&(U.size?H():F()),4===u&&(U.terms?H():F()),5===u&&(U.gift?H():F()),6===u&&b(u+1),7===u&&(U.phone?H():F()),P()},R=()=>{B(u),C(""),setTimeout(()=>C("animate__animated animate__bounceInRight"),1e3),P()},Z=e=>e==u?{visibility:"visible",display:"grid"}:{visibility:"hidden",display:"none"},{register:D,handleSubmit:Q,watch:A,formState:{errors:U}}=(0,l.cI)(),[V,K,L]=A(["kithen","address","phone"]),W=async e=>{if(console.log(e),e){k(!0);try{if((await function(e){let{material:s,kithen:a,size:i,terms:t,gift:n,consultation:l,sms:r,phone:c,address:d}=e,m={year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric"},o=()=>{var e=""!==l?"Хотят получить бесплатную консультацию":"";return String(e+" "+(!1!==r?"по SMS":""))};if(e)return(async()=>{try{let e=new FormData;e.append("material",s),e.append("kithen",a),e.append("size",i),e.append("terms",t),e.append("gift",n),e.append("consultation",l),e.append("sms",String(r)),e.append("phone",c),e.append("address",d);let h=new Date().toLocaleString("ru",m),j=["<b>Материал кухни:</b> "+s,"<b>Форма кухни:</b> "+a,"<b>Размер кухни:</b> "+i,"<b>Сроки:</b> (когда нужно) "+t,"<b>В подарок:</b> "+n,"<b>Консультация:</b> "+o(),"<b>Телефон:</b> "+c,"<b>Адрес:</b> "+d,"------","<i><b>Дата заказа:</b> "+h+"</i>"],p="";return j.forEach(e=>{p+=e+"\n"}),p=encodeURIComponent(p),await x(p,e)}catch(e){return console.log("Error:",e),{error:!0,message:"Что-то пошло не так...",raw:e.message}}})()}(e)).ok){let s=()=>{y(e),k(!1)};setTimeout(()=>s(),2e3)}else k(!1),console.error("Ошибка: Ваша заявка не была отправлена")}catch(e){k(!1),console.log("Error:",e)}}};return E?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{className:"modal",style:{display:v?"block":"none"},children:[(0,i.jsx)("button",{className:"close",onClick:()=>_(!1),children:(0,i.jsx)(m,{size:"30"})}),N?(0,i.jsx)("div",{children:(0,i.jsxs)("div",{className:"success animate__animated animate__fadeInDownBig",children:[(0,i.jsx)("h1",{children:(0,i.jsx)("span",{children:"✔"})}),(0,i.jsx)("h2",{children:"Успешно!"}),(0,i.jsx)("p",{children:"Ваш заказ уже получен. Сейчас мы с вами свяжемся."}),(0,i.jsxs)("p",{children:["\uD83E\uDD17",(0,i.jsx)("u",{children:"Долго ждать не придётся."})]})]})}):(0,i.jsxs)(r.Fragment,{children:[(0,i.jsx)("span",{className:"range",children:(0,i.jsxs)("p",{children:[z,"\xa0/\xa07"]})}),(0,i.jsx)("div",{className:"progress",children:(0,i.jsxs)("progress",{id:"file",max:"7",value:z,children:[z,"%"]})}),(0,i.jsxs)("div",{children:[(0,i.jsx)("h2",{children:M}),(0,i.jsxs)("form",{onSubmit:Q(W),children:[(0,i.jsxs)("div",{style:Z(1),className:S,children:[(null===(s=U.kithen)||void 0===s?void 0:s.type)==="required"&&(0,i.jsx)("p",{className:"alert animate__animated animate__bounceIn",children:"Выберите пожалуйста планировку"}),(0,i.jsx)("ul",{className:"card column-4",children:I[1].variable.map((e,s)=>(0,i.jsx)("li",{children:(0,i.jsxs)("label",{children:[(0,i.jsx)("input",{type:"radio",...D("kithen",{required:!0}),value:e.value}),(0,i.jsxs)("span",{children:[(0,i.jsx)("img",{src:e.image,alt:e.value}),(0,i.jsx)("strong",{children:e.value})]})]})},s))})]}),(0,i.jsxs)("div",{style:Z(2),className:S,children:[(null===(a=U.material)||void 0===a?void 0:a.type)==="required"&&(0,i.jsx)("p",{className:"alert animate__animated animate__bounceIn",children:"Выберите пожалуйста материал фасадов"}),(0,i.jsx)("ul",{className:"card column-3",children:I[2].variable.map((e,s)=>(0,i.jsx)("li",{children:(0,i.jsxs)("label",{children:[(0,i.jsx)("input",{type:"radio",...D("material",{required:!0}),value:e.value}),(0,i.jsxs)("span",{children:[(0,i.jsx)("img",{src:e.image,alt:e.value}),(0,i.jsx)("strong",{children:e.value})]})]})},s))})]}),(0,i.jsx)("div",{style:Z(3),className:S,children:(0,i.jsxs)("div",{className:"size",children:[(0,i.jsx)("label",{children:I[3].variable[0].image}),(0,i.jsx)("input",{...D("size",{required:!0}),placeholder:"2.2x1.6 м",className:"".concat(U.size&&"border-error")}),(null===(t=U.size)||void 0===t?void 0:t.type)==="required"&&(0,i.jsx)("p",{className:"alert animate__animated animate__bounceIn",children:"Введите пожалуйста размеры кухни"})]})}),(0,i.jsxs)("div",{style:Z(4),className:S,children:[(null===(j=U.terms)||void 0===j?void 0:j.type)==="required"&&(0,i.jsx)("p",{className:"alert animate__animated animate__bounceIn",children:"Выберите пожалуйста срок"}),(0,i.jsx)("ul",{className:"card column-3",children:I[4].variable.map((e,s)=>(0,i.jsx)("li",{children:(0,i.jsxs)("label",{children:[(0,i.jsx)("input",{type:"radio",...D("terms",{required:!0}),value:e.value}),(0,i.jsxs)("span",{children:[""!==e.image&&(0,i.jsx)("img",{src:e.image,alt:e.value}),(0,i.jsx)("strong",{children:e.value})]})]})},s))})]}),(0,i.jsxs)("div",{style:Z(5),className:S,children:[(null===(p=U.gift)||void 0===p?void 0:p.type)==="required"&&(0,i.jsx)("p",{className:"alert animate__animated animate__bounceIn",children:"Выберите пожалуйста подарок"}),(0,i.jsx)("ul",{className:"card column-2",children:I[5].variable.map((e,s)=>(0,i.jsx)("li",{children:(0,i.jsxs)("label",{children:[(0,i.jsx)("input",{type:"radio",...D("gift",{required:!0}),value:e.value}),(0,i.jsxs)("span",{children:[""!==e.image&&(0,i.jsx)("img",{src:e.image,alt:e.value}),(0,i.jsx)("strong",{children:e.value})]})]})},s))})]}),(0,i.jsx)("div",{style:Z(6),className:"post ".concat(S),children:I[6].variable.map((e,s)=>(0,i.jsxs)("label",{children:[(0,i.jsx)("input",{type:"checkbox",value:e.value,...D(e.image),style:{display:"none"},defaultChecked:"consultation"===e.image}),(0,i.jsxs)("span",{children:[(0,i.jsxs)("div",{children:[(0,i.jsx)(o,{}),(0,i.jsx)(h,{})]}),e.value]})]},s))}),(0,i.jsxs)("div",{style:Z(7),className:"size ".concat(S),children:[(0,i.jsx)("label",{children:I[7].variable[0].image}),(0,i.jsx)(n(),{inputMode:"tel",mask:"+7 999 999 9999",alwaysShowMask:!1,maskPlaceholder:"",className:"".concat(U.phone&&"border-error"),type:"text",placeholder:"Ex: +7 900 000 0000",...D("phone",{required:!0})}),(null===(g=U.phone)||void 0===g?void 0:g.type)==="required"&&(0,i.jsx)("p",{className:"alert animate__animated animate__bounceIn",children:"Пожалуйста, введите номер телефона"}),(0,i.jsx)("div",{children:(null==L?void 0:L.length)>=11&&(0,i.jsxs)("div",{className:"address",children:[(0,i.jsxs)("h3",{children:["Чтобы получить ",(0,i.jsx)("strong",{children:"точный расчет стоимости"}),(0,i.jsx)("br",{}),"и учесть технические особенности Вашего помещения,",(0,i.jsx)("br",{}),"предлагаем записаться ",(0,i.jsx)("strong",{children:"на бесплатную услугу замер-консультация"})]}),(0,i.jsxs)("div",{children:[(0,i.jsxs)("label",{children:["Введите Ваш адрес ",(0,i.jsx)("i",{children:"(Не менее 20 символов)"})]}),(0,i.jsx)("input",{className:"".concat(U.address&&"border-error"),...D("address"),placeholder:"Краснодар, ул. Кухонная д. 10, кв. 15"}),(0,i.jsx)("button",{type:"submit",className:"btn",onClick:()=>P(),children:q?"Отправляю...":"Отправить"})]})]})})]}),(0,i.jsx)("div",{className:"panel-bottom",children:(0,i.jsxs)("p",{className:"navigate",children:[(0,i.jsx)("button",{className:"btn-light",onClick:()=>R(),children:(0,i.jsx)(d,{})}),7!==u&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("button",{className:"btn-light",onClick:()=>O(),children:"Далее"}),"или нажмите Enter"]})]})})]})]})]})]}),(0,i.jsxs)("div",{className:"button-btn",children:[(0,i.jsx)("div",{children:(0,i.jsxs)("button",{className:"btn animate__animated animate__slow animate__pulse animate__repeat-3",onClick:()=>_(!0),children:[(0,i.jsx)(c,{}),w]})}),f&&(0,i.jsx)("strong",{children:"+ получить гарантированные подарки"})]})]}):(0,i.jsx)(i.Fragment,{children:"Загрузка..."})}var p=a(9008),g=a.n(p),u=a(1163);function v(e){let{title:s,children:a}=e,t="https://quize-kr.netlify.app"+(0,u.useRouter)().asPath,n="1080",l="Производство и установка кухонь на заказ",r="/img/f63414dd8387ff8c6d787870f4a35672.jpg";return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(g(),{children:[(0,i.jsx)("title",{children:s}),(0,i.jsx)("meta",{name:"robots",content:"index, follow"}),(0,i.jsx)("meta",{name:"description",content:l}),(0,i.jsx)("meta",{property:"og:image",content:r}),(0,i.jsx)("meta",{property:"og:image:width",content:n}),(0,i.jsx)("meta",{property:"og:image:height",content:"565"}),(0,i.jsx)("meta",{property:"og:locale",content:"ru_RU"}),(0,i.jsx)("meta",{property:"og:type",content:"website"}),(0,i.jsx)("meta",{property:"og:title",content:s}),(0,i.jsx)("meta",{property:"og:description",content:l}),(0,i.jsx)("meta",{property:"og:url",content:t}),(0,i.jsx)("meta",{property:"og:site_name",content:"Долговечные кухни от производителя"}),(0,i.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,i.jsx)("meta",{name:"twitter:title",content:s}),(0,i.jsx)("meta",{name:"twitter:description",content:l}),(0,i.jsx)("meta",{name:"twitter:image",content:r}),(0,i.jsx)("meta",{name:"twitter:image:width",content:n}),(0,i.jsx)("meta",{name:"twitter:image:height",content:"565"}),(0,i.jsx)("link",{rel:"canonical",href:t}),(0,i.jsx)("meta",{name:"theme-color",content:"#ffe033"}),(0,i.jsx)("meta",{name:"msapplication-navbutton-color",content:"#ffe033"}),(0,i.jsx)("meta",{name:"apple-mobile-web-app-status-bar-style",content:"#ffe033"})]}),(0,i.jsx)("header",{className:"cta",children:(0,i.jsx)("strong",{children:"80% Людей переплачивают за кухню. Узнайте наши цены!"})}),a]})}function b(){return(0,i.jsxs)("div",{"data-aos":"fade-up",children:[(0,i.jsx)("div",{className:"header",children:(0,i.jsxs)("div",{className:"logo",children:[(0,i.jsx)("span",{children:"Долговечные кухни от производителя"}),(0,i.jsx)("br",{}),(0,i.jsx)("strong",{children:"в Краснодаре"})]})}),(0,i.jsxs)("h1",{className:"title",children:["Делаем кухни под заказ без переплат.",(0,i.jsx)("span",{children:"Даём 5 лет гарантии. Рассрочка под 0%"})]}),(0,i.jsxs)("div",{className:"content",children:[(0,i.jsxs)("p",{children:["Мебельная компания ",(0,i.jsx)("strong",{children:'"Кухни САМ"'})," ",(0,i.jsx)("i",{children:"(Стильная авторская мебель)"})]}),(0,i.jsxs)("p",{children:["Рассчитайте стоимость будущей кухни "," ",(0,i.jsx)("span",{className:"select fw-bold",children:"с точностью 95%"})," прямо сейчас и по итогам расчета получите гарантированные подарки"]}),(0,i.jsx)("p",{children:(0,i.jsx)("strong",{children:"Ответьте на 7 вопросов и получите:"})}),(0,i.jsx)("div",{className:"list",children:(0,i.jsxs)("ol",{children:[(0,i.jsx)("li",{children:"Предварительный расчет стоимости кухни"}),(0,i.jsx)("li",{children:"Подарок на выбор за экономию нашего времени"})]})})]})]})}var _=a(2711),w=a.n(_);a(2947);var f=a(9304),N=a(2261);function y(){return(0,i.jsx)(N.tq,{loop:!0,modules:[f.W_,f.tl,f.s5],spaceBetween:50,slidesPerView:1,navigation:!0,pagination:{dynamicBullets:!0,clickable:!0},children:[{image:"/img/reviews/24398724.jpg",alt:"1"},{image:"/img/reviews/24398725.jpg",alt:"2"},{image:"/img/reviews/24398726.jpg",alt:"3"},{image:"/img/reviews/24398727.jpg",alt:"4"},{image:"/img/reviews/24398728.jpg",alt:"5"},{image:"/img/reviews/24398730.jpg",alt:"6"},{image:"/img/reviews/24398731.jpg",alt:"7"},{image:"/img/reviews/24398732.jpg",alt:"8"},{image:"/img/reviews/24398733.jpg",alt:"9"}].map((e,s)=>(0,i.jsx)(N.o5,{children:(0,i.jsx)("div",{className:"slide",children:(0,i.jsx)("img",{src:e.image,alt:e.alt})})},s))})}function q(){(0,r.useEffect)(()=>{w().init()},[]);let[e,s]=(0,r.useState)(!1),[a,t]=(0,r.useState)(1);return(0,i.jsxs)(v,{title:"Производство и установка кухонь на заказ",children:[(0,i.jsxs)("main",{className:e?"":"main",children:[(0,i.jsx)("section",{className:"bg",onKeyUp:e=>{"Enter"===e.key&&(7!==a?t(a+1):t(7))},children:(0,i.jsxs)("div",{className:"wrapper",children:[(0,i.jsx)(b,{}),(0,i.jsx)(j,{step:a,setStep:t,open:e,setOpen:s,gift:!0})]})}),!e&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("section",{className:"bg-white text-black pt-50 overflow-hidden",children:(0,i.jsxs)("div",{className:"wrapper",children:[(0,i.jsxs)("h2",{className:"subtitle",children:["Чтобы получить ",(0,i.jsx)("span",{children:"точный расчет стоимости"}),(0,i.jsx)("br",{}),"и учесть технические особенности Вашего помещения,",(0,i.jsx)("br",{}),"предлагаем записаться ",(0,i.jsx)("span",{children:"на бесплатную услугу замер-консультация"})]}),(0,i.jsx)("div",{className:"span",children:(0,i.jsxs)("div",{className:"grid column-2",children:[(0,i.jsx)("div",{children:(0,i.jsx)("img",{src:"/img/24398344.png",alt:"Замерщик с улыбкой",style:{width:"100%"}})}),(0,i.jsx)("div",{className:"flex cta-button",children:(0,i.jsx)(j,{step:a,setStep:t,open:e,setOpen:s,text:"Записаться на замер"})})]})})]})}),(0,i.jsx)("section",{className:"bg-dark text-white pt-50 pb-100",children:(0,i.jsxs)("div",{className:"wrapper",children:[(0,i.jsx)("h2",{className:"subtitle",children:"В удобное для Вас время приедет мастер и:"}),(0,i.jsxs)("div",{className:"span",children:[(0,i.jsx)("div",{className:"grid align-items-start gap-3 column-2",children:[{icon:"/img/1.png",title:"Сделает замеры",text:"Сделает правильные и точные замеры вашего пространства и учтет все технические нюансы помещения"},{icon:"/img/2.jpg",title:"Привезет образцы материалов",text:"Фасады, корпус, столешницы. Чтобы вы увидели и пощупали материалы."},{icon:"/img/3.png",title:"Современные и удобные планировки",text:"Мы вам расскажем, как правильно использовать кухонную технику, как ее лучше расположить и с помощью чего можно сэкономить, без потери качества кухни"},{icon:"/img/4.png",title:"Нарисует дизайн-проект",text:"Мы подготовим удобный дизайн-проект, в котором составим смету, где будет таблица всех материалов."}].map((e,s)=>(0,i.jsxs)("div",{className:"feat",children:[(0,i.jsx)("img",{src:e.icon,alt:e.title}),(0,i.jsxs)("div",{children:[(0,i.jsx)("h4",{children:e.title}),(0,i.jsx)("p",{children:e.text})]})]},s))}),(0,i.jsx)("h2",{className:"subtitle",children:"Мы создадим лучшую кухню! На которой вам удобно и приятно будет готовить. Запишитесь на замер."})]}),(0,i.jsx)(j,{step:a,setStep:t,open:e,setOpen:s,text:"Записаться на замер"})]})}),(0,i.jsx)("div",{className:"kitcens"}),(0,i.jsx)("section",{className:"bg-white text-black pt-50 pb-100",children:(0,i.jsxs)("div",{className:"wrapper",children:[(0,i.jsx)("h2",{className:"subtitle",children:"Отзывы клиентов"}),(0,i.jsx)("div",{className:"span",children:(0,i.jsx)(y,{})}),(0,i.jsx)("div",{children:(0,i.jsx)(j,{step:a,setStep:t,open:e,setOpen:s,text:"Получить свою кухню"})})]})})]})]}),!e&&(0,i.jsx)("footer",{children:"\xa9 2024 \xb7 Все права защищены"})]})}a(4172),a(7638),a(6936),a(7690),a(2859)}},function(e){e.O(0,[228,888,774,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);