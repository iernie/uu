(this.webpackJsonpuu=this.webpackJsonpuu||[]).push([[0],{19:function(e,t,n){e.exports={slide:"Slide_slide__2Gahv",slideContent:"Slide_slideContent__3Oc52",slideCode:"Slide_slideCode__3C2e4"}},25:function(e,t,n){e.exports={screenReaderTips:"ScreenReaderTips_screenReaderTips__1t5mM",list:"ScreenReaderTips_list__3aUAZ"}},50:function(e,t,n){},6:function(e,t,n){e.exports={container:"Task2_container__2Lk-V",successContainer:"Task2_successContainer__9n0DF",visuallyHidden:"Task2_visuallyHidden__3KEtj",title:"Task2_title__3SVj0",formGrouping:"Task2_formGrouping__1p4Rz",inputLabel:"Task2_inputLabel__YinL_",agreeToTerms:"Task2_agreeToTerms__3SqEZ",resetButton:"Task2_resetButton__18fN4"}},63:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var i=n(0),s=n.n(i),r=n(30),a=n.n(r),c=(n(50),n(7)),l=n(70),d=n(68),o=n(72),j=n(69),u=(n(51),n(52),n(26)),b=n(71),h=n(19),m=n.n(h),O=n(1),p=function(e){var t=e.children,n=e.code,i=e.enabled,r=void 0!==i&&i,a=s.a.useState(r),l=Object(c.a)(a,2),d=l[0],o=l[1];return s.a.useEffect((function(){r?setTimeout((function(){o(!0)}),250):o(!1)}),[r]),Object(O.jsxs)(b.a,{enabled:d,className:m.a.slide,autoFocus:!1,returnFocus:!1,children:[Object(O.jsx)("div",{className:m.a.slideContent,children:t}),n&&Object(O.jsx)("div",{className:m.a.slideCode,"aria-hidden":"true",children:Object(O.jsx)(u.a,{text:n,language:"markup",theme:u.b})})]})},g=n(25),x=n.n(g),v=function(){return Object(O.jsxs)("section",{"aria-hidden":!0,className:x.a.screenReaderTips,children:["Noen enkle skjermlesertips",Object(O.jsx)("h2",{children:"VoiceOver"}),Object(O.jsxs)("p",{children:[Object(O.jsx)("code",{children:"VO"})," under tilsvarer \xabVoiceOver modifier\xbb, og er som standard"," ",Object(O.jsx)("code",{children:"CTRL + Option"})," eller ",Object(O.jsx)("code",{children:"CAPS LOCK"})]}),Object(O.jsxs)("ul",{className:x.a.list,children:[Object(O.jsxs)("li",{children:["Hold inne ",Object(O.jsx)("code",{children:"CMD"})," og trippelklikk p\xe5 fingeravtrykkleseren for \xe5 aktivere/deaktivere VoiceOver"]}),Object(O.jsxs)("li",{children:["\xc5pne Rotor: ",Object(O.jsx)("code",{children:"VO + u"}),". Man kan bla gjennom forskjellige lister med piltastene"]}),Object(O.jsxs)("li",{children:["Bla til forrige/neste element p\xe5 siden:"," ",Object(O.jsx)("code",{children:"VO + pil venstre / VO + pil h\xf8yre"})]})]})]})},f=function(e){var t=e.onSubmit,n=e.enabled;return Object(O.jsxs)(p,{enabled:n,code:'<main>\n  <h1>Heading 1</h1>\n  <h2>Heading 2</h2>\n  <div role="heading" aria-level="3">Heading 3</div>\n  <h4>Heading 4</h4>\n</main>\n',children:[Object(O.jsxs)("main",{children:[Object(O.jsx)("h1",{children:"Heading 1"}),Object(O.jsx)("p",{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."}),Object(O.jsx)("h2",{children:"Heading 2"}),Object(O.jsx)("p",{children:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}),Object(O.jsx)("div",{role:"heading","aria-level":"3",children:"Heading 3"}),Object(O.jsxs)("p",{children:["It has survived not only five centuries, but also the leap into"," ",Object(O.jsx)("span",{id:"hint",children:"electronic typesetting"}),", remaining essentially unchanged."]}),Object(O.jsx)("h4",{"aria-labelledby":"hint",children:"Heading 4"}),Object(O.jsx)("p",{children:"It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."})]}),Object(O.jsx)("input",{placeholder:"What's the magic word?",onChange:function(e){"electronic typesetting"===e.target.value&&t()}})]})},k=function(e){var t=e.onSubmit,n=Object(i.useState)(""),s=Object(c.a)(n,2),r=s[0],a=s[1],l=Object(i.useState)(!1),d=Object(c.a)(l,2),o=d[0],j=d[1];return Object(O.jsxs)("form",{autoComplete:"off",onSubmit:function(e){e.preventDefault(),"vaksinekontoret"===r.toLowerCase()?t():j(!0)},style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gridTemplateRows:"auto",gridColumnGap:"2rem",gridRowGap:"1rem",gridTemplateAreas:"\n                    'hus1 hus2 hus3'\n                    '. input .'\n                    '. knapp .'\n                "},children:[Object(O.jsx)("img",{style:{gridArea:"hus1"},src:"../hytte.jpg",width:"100%",alt:"P\xe5 hytta"}),Object(O.jsx)("img",{style:{gridArea:"hus2"},src:"../huset_til_bestemor.jpg",width:"100%",alt:"Huset til bestemor"}),Object(O.jsx)("img",{style:{gridArea:"hus3"},src:"../vaksinekontor.jpg",width:"100%",alt:"Vaksinekontoret. Dette er riktig svar."}),Object(O.jsxs)("div",{style:{gridArea:"input",textAlign:"center"},children:[Object(O.jsx)("label",{htmlFor:"l\xf8sning",children:"I hvilken bygning kan du vaksineres?"}),Object(O.jsx)("input",{id:"l\xf8sning",style:{border:o?"1px solid red":""},onChange:function(e){j(!1),a(e.target.value)}}),o&&Object(O.jsx)("p",{style:{color:"red"},children:"Dessverre, dette var ikke riktig bygning"})]}),Object(O.jsx)("button",{style:{gridArea:"knapp"},type:"submit",children:"G\xe5 videre"})]})},y=n(6),_=n.n(y),w=function(e){var t=e.onSubmit,n=Object(i.useState)(!1),s=Object(c.a)(n,2),r=s[0],a=s[1];return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("form",{onSubmit:function(e){e.preventDefault(),a(!0)},children:[Object(O.jsx)("h1",{className:_.a.title,children:"Fyll inn og dette skjemaet for \xe5 bestille corona-vaksine"}),Object(O.jsxs)("div",{className:_.a.container,children:[Object(O.jsxs)("div",{className:_.a.formGrouping,children:[Object(O.jsxs)("label",{className:_.a.inputLabel,children:[Object(O.jsx)("span",{children:"Hva heter du?"}),Object(O.jsx)("input",{required:!0,name:"first","aria-describedby":"nameDescription","aria-errormessage":"Fyll inn fornavnet ditt"}),Object(O.jsx)("div",{id:"nameDescription",className:_.a.visuallyHidden,children:"Fyll inn fornavnet ditt"})]}),Object(O.jsxs)("label",{className:_.a.inputLabel,children:[Object(O.jsx)("span",{children:"Hvilken by bor du i?"}),Object(O.jsx)("input",{name:"city"})]}),Object(O.jsxs)("label",{className:_.a.inputLabel,children:[Object(O.jsx)("span",{children:"Hvor gammel er du?"}),Object(O.jsx)("input",{type:"number",required:!0,name:"birthyear",min:"0",max:"150","aria-describedby":"ageDescription"})]})]}),Object(O.jsxs)("fieldset",{role:"radiogroup",className:_.a.agreeToTerms,children:[Object(O.jsx)("legend",{children:"Godta vilk\xe5rene for \xe5 g\xe5 videre"}),Object(O.jsxs)("label",{children:[Object(O.jsx)("span",{children:"Ja, jeg godtar"}),Object(O.jsx)("input",{type:"radio",required:!0,name:"terms",value:"yes"})]}),Object(O.jsxs)("label",{children:[Object(O.jsx)("span",{children:"Nei"}),Object(O.jsx)("input",{type:"radio",required:!0,name:"terms",value:"no"})]})]}),Object(O.jsxs)("div",{className:_.a.buttons,children:[Object(O.jsx)("button",{type:"reset",className:_.a.resetButton,children:"Avbryt"}),Object(O.jsx)("button",{children:"Bestill vaksine"})]})]})]}),Object(O.jsxs)("form",{className:[_.a.container,_.a.successContainer].join(" "),onSubmit:function(e){e.preventDefault(),t()},"aria-live":"assertive","aria-hidden":!r,hidden:!r,children:[Object(O.jsx)("p",{children:"Gratulerer! Du kan n\xe5 g\xe5 videre for velge en ledig time."}),Object(O.jsx)("button",{children:"G\xe5 videre"})]})]})},T=n(40),S=n(20),N=n.n(S),C=(n(63),"DD.MM.YYYY-HH:mm"),D=N()(new Date(2021,3,15,15,30)).format(C),H=function(e){var t=[],n=N()(e).set("hour",8).set("minute",0).set("second",0),i=0;do{n=n.add(30,"minutes");var s=N()(n).format(C)===D;t.push({dato:n.toDate(),tidspunkt:n.format("HH:mm"),tilgjengelig:!!s||Math.random()>.8,targetTimeslot:s}),i++}while(i<16);return t},L=H(new Date(2021,3,12)),I=H(new Date(2021,3,13)),V=H(new Date(2021,3,14)),A=H(new Date(2021,3,15)),G=H(new Date(2021,3,16)),F=Object(T.a)(L),M=function(e){return Object(O.jsx)("td",{className:"\n        ".concat(e.tilgjengelig?"timeslot--tilgjengelig":"timeslot--opptatt","\n        ").concat(e.targetTimeslot?"timeslot--target":"","\n      "),children:e.tidspunkt})},R=function(e){var t=e.onSubmit,n=Object(i.useState)(void 0),s=Object(c.a)(n,2);s[0],s[1];return Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"Velg ledig tid i kalender"}),Object(O.jsxs)("table",{className:"timeslots",children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"Mandag"}),Object(O.jsx)("th",{children:"Tirsdag"}),Object(O.jsx)("th",{children:"Onsdag"}),Object(O.jsx)("th",{children:"Torsdag"}),Object(O.jsx)("th",{children:"Fredag"})]})}),Object(O.jsx)("tbody",{children:F.map((function(e,t){return Object(O.jsxs)("tr",{children:[M(L[t]),M(I[t]),M(V[t]),M(A[t]),M(G[t])]},t)}))})]}),Object(O.jsx)("div",{className:"timeslot_buttonrow",children:Object(O.jsx)("button",{className:"timeslotNextButton",onClick:t,children:"G\xe5 videre"})})]})};l.a.use([d.a]);var B=function(){var e=s.a.useState(null),t=Object(c.a)(e,2),n=t[0],i=t[1],r=s.a.useMemo((function(){var e,t=null===(e=window.location.hash)||void 0===e?void 0:e.substring(1);return Number.isInteger(parseInt(t,10))?parseInt(t,10):0}),[]),a=s.a.useState(r),l=Object(c.a)(a,2),d=l[0],u=l[1],b=s.a.useCallback((function(e){n.slideTo(e,250)}),[n]);return s.a.useEffect((function(){window.location.hash=d}),[d]),s.a.useEffect((function(){var e=function(){var e,t=null===(e=window.location.hash)||void 0===e?void 0:e.substring(1);Number.isInteger(parseInt(t,10))&&b(parseInt(t,10))};return window.addEventListener("hashchange",e,!1),function(){window.removeEventListener("hashchange",e,!1)}}),[b]),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(v,{}),Object(O.jsxs)(o.a,{className:"slider",spaceBetween:0,slidesPerView:1,navigation:!0,initialSlide:r,onSlideChange:function(e){return u(e.activeIndex)},onSwiper:i,allowTouchMove:!1,children:[Object(O.jsx)(j.a,{children:Object(O.jsx)(f,{enabled:0===d,onSubmit:function(){return b(1)}})}),Object(O.jsx)(j.a,{children:Object(O.jsx)(p,{enabled:1===d,children:Object(O.jsx)(k,{onSubmit:function(){return b(2)}})})}),Object(O.jsx)(j.a,{children:Object(O.jsx)(p,{enabled:2===d,children:Object(O.jsx)(w,{onSubmit:function(){return b(3)}})})}),Object(O.jsx)(j.a,{children:Object(O.jsx)(p,{enabled:3===d,children:Object(O.jsx)(R,{onSubmit:function(){return b(4)}})})})]})]})};a.a.render(Object(O.jsx)(B,{}),document.getElementById("root"))}},[[64,152,153]]]);
//# sourceMappingURL=main.90396484.chunk.js.map