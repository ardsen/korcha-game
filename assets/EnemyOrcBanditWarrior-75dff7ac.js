import{r as t,j as e,L as N}from"./index-c824156c.js";import{G as J,s as l}from"./GamePlay.module-a4b6d93f.js";import{E as D,a as E,A as K,b as Q}from"./EnemyStaminaBar-15cf242f.js";function aa({currentAccount:a,setCurrentAccount:n,exp:v,setExp:T,levelsArray:k,setInGameRemainStats:c,setIsLevelUp:G}){const[I,h]=t.useState(!1),[C,o]=t.useState(!1),[L,r]=t.useState(!1),[$,u]=t.useState(!1),[W,q]=t.useState(!1),[w,j]=t.useState(!1),[s,g]=t.useState({tag:"Orc Bandit Warrior",ap:300,magP:0,physDef:60,magDef:35,health:2200,stamina:0,criticalChance:0,criticalDamage:0,remainHealth:2200,remainStamina:0,img:"/orcbanditwarrior.png",loot:400,expGained:3e3}),[P,S]=t.useState(!1),[B,y]=t.useState(!1),[O,H]=t.useState(!1),[x,p]=t.useState(),M=t.useRef(null);let m=Math.floor(Math.random()*(100-70)+70)/100,b=Math.floor(Math.random()*(150-120)+120)/100,f=Math.floor(Math.random()*100)<a.criticalChance?a.criticalDamage:1;const R=function(){T(v+s.expGained),a.coin+=s.loot,a.remainHealth=a.health,a.exp+s.expGained>=k[a.level-1]&&(c(d=>d+3),G(!0))},Y=function(){a.coin-=a.coin*.2,a.remainHealth=a.health},z=()=>{if(a.stamina<=a.remainStamina)return;r(!0),n(i=>({...i,remainStamina:a.remainStamina+(a.stamina-a.remainStamina)*.3})),document.querySelector("#status").insertAdjacentHTML("afterbegin",`<p style = "background-color : rgb(20, 30, 241)">${Math.trunc((a.stamina-a.remainStamina)*.3)} stamina recovered.</p>`);const d=setTimeout(()=>{n(i=>({...i,remainHealth:i.remainHealth-Math.trunc(s.ap*m)-(s.ap-a.physDef)/300})),document.querySelector("#status").insertAdjacentHTML("afterbegin",`<p>${Math.trunc(s.ap*m-(s.ap-a.physDef)/300)} damage received.</p>`),r(!1)},2e3);p(d)},F=function(){if(s.remainHealth<=0)return;g(i=>({...i,remainHealth:i.remainHealth-Math.trunc(f*a.ap*m-a.ap*s.physDef/300)})),n(i=>({...i,remainStamina:i.remainStamina-50})),r(!0),h(!0),setTimeout(()=>o(!0),200),document.querySelector("#status").insertAdjacentHTML("afterbegin",`<p style = "background-color : rgb(0, 71, 0)">${Math.trunc(f*a.ap*m-a.ap*s.physDef/300)} damage dealt.
        ${f>1?'<span style="background-color: rgb(171, 30, 30); color: wheat; font-size: larger; padding: 0.1rem 0.3rem; border-radius:2px">CRIT.</span>':""}
          </p>`);const d=setTimeout(()=>{n(i=>({...i,remainHealth:i.remainHealth-Math.trunc(s.ap*m)-(s.ap-a.physDef)/300})),document.querySelector("#status").insertAdjacentHTML("afterbegin",`<p>${Math.trunc(s.ap*m-(s.ap-a.physDef)/300)} damage received.</p>`),r(!1)},2e3);p(d),setTimeout(()=>{h(!1),o(!1)},1200)},X=function(){if(s.remainHealth<=0)return;g(i=>({...i,remainHealth:i.remainHealth-Math.trunc(f*a.ap*b-a.ap*s.physDef/300)})),n(i=>({...i,remainStamina:i.remainStamina-250})),r(!0),h(!0),setTimeout(()=>o(!0),200),document.querySelector("#status").insertAdjacentHTML("afterbegin",`<p style = "background-color : rgb(0, 71, 0)">${Math.trunc(f*a.ap*b-a.ap*s.physDef/300)} damage dealt.
        ${f>1?'<span style="background-color: rgb(171, 30, 30); color: wheat; font-size: larger; padding: 0.1rem 0.3rem; border-radius:2px">CRIT.</span>':""}
          </p>`);const d=setTimeout(()=>{n(i=>({...i,remainHealth:i.remainHealth-Math.trunc(s.ap*m)-(s.ap-a.physDef)/300})),document.querySelector("#status").insertAdjacentHTML("afterbegin",`<p>${Math.trunc(s.ap*m-(s.ap-a.physDef)/300)} damage received.</p>`),r(!1)},2e3);p(d),setTimeout(()=>{h(!1),o(!1)},1200)},V=function(){if(s.remainHealth<=0)return;g(i=>({...i,remainHealth:i.remainHealth-Math.trunc(a.ap*m-a.ap*s.physDef/1200)})),n(i=>({...i,remainStamina:i.remainStamina-150})),r(!0),h(!0),setTimeout(()=>o(!0),200),document.querySelector("#status").insertAdjacentHTML("afterbegin",`<p style = "background-color : rgb(0, 71, 0)">${Math.trunc(a.ap*m-a.ap*s.physDef/300)} damage dealt.</p>`);const d=setTimeout(()=>{n(i=>({...i,remainHealth:i.remainHealth-Math.trunc(s.ap*m)-(s.ap-a.physDef)/300})),document.querySelector("#status").insertAdjacentHTML("afterbegin",`<p>${Math.trunc(s.ap*m-(s.ap-a.physDef)/300)} damage received.</p>`),r(!1)},2e3);p(d),setTimeout(()=>{h(!1),o(!1)},1200)};return t.useEffect(()=>{s.remainHealth<=0&&(s.remainHealth=0,clearTimeout(x),u(!0))},[s.remainHealth,s,x]),t.useEffect(()=>{a.remainHealth<=0&&(a.remainHealth=0,clearTimeout(x),q(!0))},[a.remainHealth,a,x]),t.useEffect(()=>{a.remainStamina<50?S(!0):S(!1)},[a.remainStamina]),t.useEffect(()=>{a.remainStamina<250?y(!0):y(!1)},[a.remainStamina]),t.useEffect(()=>{a.remainStamina<150?H(!0):H(!1)},[a.remainStamina]),e.jsxs("div",{children:[e.jsx(J,{}),e.jsxs("div",{className:l.inGameWrapper,children:[e.jsxs("div",{className:l.inGameContainer,children:[e.jsxs("div",{className:l.inGameAvatar,children:[e.jsx(D,{currentAccount:a}),e.jsx(E,{currentAccount:a}),e.jsx("img",{src:a.img,alt:""}),e.jsxs("div",{className:l.characterName,onMouseEnter:()=>j(!0),onMouseLeave:()=>j(!1),children:[e.jsx("h3",{children:a.name}),w&&e.jsxs("div",{className:l.characterInfo,children:[e.jsxs("p",{children:["Physical Attack Power: ",a.ap]}),e.jsxs("p",{children:["Magical Attack Power: ",a.magP]}),e.jsxs("p",{children:["Health: ",a.health]}),e.jsxs("p",{children:["Physical Defence: ",a.physDef]}),e.jsxs("p",{children:["Magic Defence: ",a.magDef]})]})]})]}),e.jsxs("div",{className:`${l.attackMenuWrapper}`,children:[e.jsx(K,{attackHandler:F,pointerNone:L,attackHandlerStrong:X,isStaminaEnough:P,isStaminaEnoughStrong:B,restHandler:z,attackHandlerCrush:V,isStaminaEnoughCrush:O,currentAccount:a,setIsAttackEffect:h,setIsAttackEffectX:o,setPointerNone:r,setDireWolf:g,setCurrentAccount:n,direwolf:s,setDamageTimeout:p,myElementRef:M}),e.jsxs("div",{className:l.attackHistoryContainer,children:[e.jsx("div",{className:l.attackHistoryTopic,children:e.jsx("h3",{children:"Status History"})}),e.jsx("div",{className:l.statusInd,id:"status",ref:M})]})]}),e.jsxs("div",{className:l.inGameAvatar,children:[e.jsx(D,{currentAccount:s}),e.jsx(E,{currentAccount:s}),e.jsx(Q,{currentEnemy:s,attackEffect:I,attackEffectX:C})]})]}),$&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:l.onWinContainer,children:[e.jsx("h3",{children:"Victory!"}),e.jsxs("p",{children:["You have earned"," ",e.jsx("span",{className:l.embeddedNumberExp,children:s.expGained})," ","experience point."]}),e.jsx("p",{children:"You found a treasure inside the cave of the direwolf. "}),e.jsxs("p",{children:[e.jsx("span",{className:l.embeddedNumberGold,children:s.loot}),e.jsx("img",{style:{verticalAlign:"-4px"},className:"coin",src:"/coin-vector2.svg"})," ","gold gained"]}),e.jsxs(N,{to:"/game",children:[" ",e.jsx("button",{onClick:R,children:"Confirm"})]})]}),e.jsx("div",{className:l.overlay})]}),W&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:l.onWinContainer,children:[e.jsx("h3",{children:"Defeat!"}),e.jsx("p",{children:"You dropped some of your gold while running."}),e.jsxs("p",{children:[e.jsx("span",{className:l.embeddedNumberGold,children:Math.trunc(a.coin*.2)}),e.jsx("img",{style:{verticalAlign:"-4px"},className:"coin",src:"/coin-vector2.svg"})," ","gold lost."]}),e.jsxs(N,{to:"/game",children:[" ",e.jsx("button",{onClick:Y,children:"Confirm"})]})]}),e.jsx("div",{className:l.overlay})]})]})]})}export{aa as default};
