(this["webpackJsonpissb-quiz-app"]=this["webpackJsonpissb-quiz-app"]||[]).push([[0],{110:function(e,t,a){e.exports=a(225)},115:function(e,t,a){},225:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(11),l=a.n(r),c=(a(115),a(44),a(31)),i=a(12),u=a(13),s=a(254),m=a(261),g=a(262),p=a(260),f=a(263),d=a(265),h=a(264),b=Object(s.a)((function(e){return{root:{"*":{fontFamily:"Bree Serif"},alignContent:"center",margin:"auto",width:"90%",height:"90%",paddingRight:"50px",paddingLeft:"50px",backgroundColor:"#00B7FC80"},form:{"& > *":{margin:e.spacing(1),width:"100%",backgroundColor:"#00B7FC80"}},button:{alignSelf:"center",margin:"auto"}}}));function v(){var e=b(),t=o.a.useState("Linux"),a=Object(u.a)(t,2),n=a[0],r=a[1],l=o.a.useState(""),c=Object(u.a)(l,2),s=c[0],v=c[1],E=Object(i.f)();localStorage.clear(),localStorage.setItem("name",s),localStorage.setItem("score","0"),localStorage.setItem("null","0");var w=function(e){0===s.length?alert("Please Provide Your Name"):E.push("/quiz/".concat(n))};return o.a.createElement("div",{className:e.root},o.a.createElement("h1",null,"Boot&Camp Quiz Portal"),o.a.createElement("h2",null,"Please Enter Your Name and Select Category of the Quiz You want to Give"),o.a.createElement("div",null,o.a.createElement(h.a,{className:e.root,component:"fieldset",onSubmit:w},o.a.createElement(m.a,{id:"filled-basic",label:"Enter Your Name Here",variant:"filled",value:s,required:!0,onChange:function(e){v(e.target.value)}}),o.a.createElement(f.a,{"aria-label":"gender",name:"gender1",value:n,onChange:function(e){r(e.target.value)}},o.a.createElement(d.a,{value:"Linux",control:o.a.createElement(g.a,null),label:"Linux"}),o.a.createElement(d.a,{value:"DevOps",control:o.a.createElement(g.a,null),label:"DevOps"}),o.a.createElement(d.a,{value:"Networking",control:o.a.createElement(g.a,null),label:"Networking"}),o.a.createElement(d.a,{value:"Programming",control:o.a.createElement(g.a,null),label:"Programming"}),o.a.createElement(d.a,{value:"Cloud",control:o.a.createElement(g.a,null),label:"Cloud"}),o.a.createElement(d.a,{value:"Docker",control:o.a.createElement(g.a,null),label:"Docker"}),o.a.createElement(d.a,{value:"Kubernetes",control:o.a.createElement(g.a,null),label:"Kubernetes"})))),o.a.createElement("div",{style:{marginTop:"50px"}},o.a.createElement(p.a,{variant:"contained",color:"secondary",onClick:w},"Start Quiz")))}var E=a(43),w=a.n(E),C=a(63),S=function(){var e=Object(C.a)(w.a.mark((function e(t,a){var n,o,r;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://quizapi.io/api/v1/questions?apiKey=".concat("fAAdv3WPmAV85NCbY4pdfXvvy1Pare4PBA8DCDyy","&limit=").concat(t,"&tag=").concat(a));case 2:return n=e.sent,e.next=5,n.json();case 5:return o=e.sent,r=o.map((function(e){return{question:e.question,answers:e.answers,correct_answer:e.correct_answer}})),e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),k=a(258),y=a(259),N=function(e){var t=e.question,a=e.answers,r=e.correct_answer,l=e.callback,c=Object(n.useState)(0),m=Object(u.a)(c,2),b=(m[0],m[1],Object(s.a)((function(e){return{root:{"*":{fontFamily:"Bree Serif"},margin:"auto",width:"80%",height:"60%",paddingTop:"50px",backgroundColor:"#00B7FC80"},formControl:{margin:e.spacing(3)},button:{margin:e.spacing(1,1,0,0),backgroundColor:"#00B7FC",color:"white",fontWeight:"bold"},Cancelbutton:{margin:e.spacing(1,1,0,0),backgroundColor:"#EC7063",color:"white",fontWeight:"bold"},options:{color:"white",fontWeight:"bold"}}}))),v=Object(i.f)(),E=o.a.useState(""),w=Object(u.a)(E,2),C=w[0],S=w[1],N=o.a.useState(!1),O=Object(u.a)(N,2),j=O[0],A=O[1],z=o.a.useState("Choose wisely"),x=Object(u.a)(z,2),q=x[0],I=x[1],B=function(e){e.preventDefault(),S(e.target.value);var t=localStorage.getItem("score"),a=Number(t),n=(localStorage.getItem("null"),Number(t));console.log(C),null==C||""===C?alert("Please Choose an Option"):(null==r&&(n++,console.log("Null Value",n)),C===r&&a++,localStorage.setItem("score",a.toString()),localStorage.setItem("null",n.toString()),l(!0))},P=b(),D=[];return Object.keys(a).forEach((function(e){D.push(e)})),o.a.createElement("div",null,o.a.createElement(k.a,{className:P.root,elevation:3},o.a.createElement("h3",null,t),o.a.createElement("form",{onSubmit:B},o.a.createElement(h.a,{component:"fieldset",error:j,className:P.formControl},o.a.createElement(f.a,{"aria-label":"quiz",name:"quiz",value:C,onChange:function(e){S(e.target.value),I(" "),A(!1)}},D.map((function(e){if(null!=a[e])return o.a.createElement(d.a,{className:P.options,value:e,control:o.a.createElement(g.a,null),label:a[e]})}))),o.a.createElement(y.a,null,q))),o.a.createElement("div",null,o.a.createElement(p.a,{variant:"outlined",color:"primary",className:P.button,onClick:B},"Next Question"),o.a.createElement(p.a,{variant:"outlined",color:"primary",className:P.Cancelbutton,onClick:function(){v.push("/")}},"Cancel Quiz"))))};var O=function(){var e=Object(i.g)().type,t=Object(i.f)(),a=Object(n.useState)([]),r=Object(u.a)(a,2),l=r[0],c=r[1],s=Object(n.useState)(0),m=Object(u.a)(s,2),g=m[0],p=m[1];return Object(n.useEffect)((function(){function t(){return(t=Object(C.a)(w.a.mark((function t(){var a;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S(15,e);case 2:a=t.sent,console.log(a),c(a),console.log(l);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]),l.length?o.a.createElement("div",{className:"App"},o.a.createElement("h1",null,e," Quiz"),o.a.createElement("h2",null,"Question No. ",g+1),o.a.createElement(N,{question:l[g].question,answers:l[g].answers,correct_answer:l[g].correct_answer,callback:function(e){l[g];g!==l.length-1?p(++g):(alert("Quiz Completed"),t.push("/result"))}})):o.a.createElement("h3",null,"Loading..................")},j=a(98),A=Object(s.a)((function(e){return{root:{"*":{fontFamily:"Bree Serif"},alignContent:"center",margin:"auto",width:"80%",height:"80%",backgroundColor:"#EAEDED98"},form:{"& > *":{margin:e.spacing(1),width:"100%",height:"100%",backgroundColor:"#00B7FC80"}},button:{alignSelf:"center",float:"right",margin:"auto"}}}));function z(){var e=Object(i.f)(),t=A(),a=localStorage.getItem("name"),n=Number(localStorage.getItem("score")),r=Number(localStorage.getItem("null")),l=15-(n+r),c=n/(n+l)*100,u={datasets:[{data:[n,l,r],backgroundColor:["#1ABC9C","#EC7063","#DAF7A6"],label:"Quiz Result"}],labels:["Right Answers","Wrong Answers","Answer Unavailable"]};return o.a.createElement("div",{className:t.root},o.a.createElement("h1",null,"Quiz Result"),o.a.createElement("h2",null,"Name = ",a),o.a.createElement("h2",null,"Perccentage = ",c.toString().slice(0,4)," %"),o.a.createElement("div",null,o.a.createElement(j.Doughnut,{data:u,options:{responsive:!0,legend:{position:"top"},title:{display:!0,text:"Quiz Result"},animation:{animateScale:!0,animateRotate:!0}}})),o.a.createElement("div",{style:{margin:"30px"}},o.a.createElement(p.a,{variant:"contained",color:"primary",onClick:function(){e.push("/")}},"Go Back")))}var x=function(){return o.a.createElement("div",null,o.a.createElement(c.a,null,o.a.createElement(i.c,null,o.a.createElement(i.a,{exact:!0,path:"/",component:v}),o.a.createElement(i.a,{exact:!0,path:"/quiz/:type",component:O}),o.a.createElement(i.a,{exact:!0,path:"/result",component:z}),o.a.createElement(i.a,{exact:!0,path:"*",component:v}))))},q=a(77),I=a.n(q);I.a.initializeApp({apiKey:"AIzaSyARbTN6isDAEf2TMccAsw0NpwIz0ROI1ww",authDomain:"quizportalpwa.firebaseapp.com",databaseURL:"https://quizportalpwa.firebaseio.com",projectId:"quizportalpwa",storageBucket:"quizportalpwa.appspot.com",messagingSenderId:"581436333766",appId:"1:581436333766:web:e1691d8f099a2681e281c7",measurementId:"G-RFBYVMP497"});var B=I.a.messaging();var P=function(){return Notification.requestPermission().then((function(e){console.log(e),"granted"===e&&B.getToken().then((function(e){e||console.log("No Instance ID token available. Request permission to generate one.")})).catch((function(e){console.log("An error occurred while retrieving token. ",e)}))})),o.a.createElement("div",{className:"App"},o.a.createElement(x,null))},D=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function R(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(P,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");D?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):R(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):R(t,e)}))}}()},44:function(e,t,a){}},[[110,1,2]]]);
//# sourceMappingURL=main.faffcf28.chunk.js.map