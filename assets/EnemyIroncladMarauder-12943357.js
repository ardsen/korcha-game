import{r as t,j as e,L as N}from"./index-c824156c.js";import{G as J,s as m}from"./GamePlay.module-a4b6d93f.js";import{E as D,a as E,A as K,b as Q}from"./EnemyStaminaBar-15cf242f.js";function aa({currentAccount:a,setCurrentAccount:n,exp:v,setExp:T,levelsArray:k,setInGameRemainStats:P,setIsLevelUp:c}){const[u,h]=t.useState(!1),[I,o]=t.useState(!1),[G,r]=t.useState(!1),[C,L]=t.useState(!1),[$,q]=t.useState(!1),[w,j]=t.useState(!1),[s,p]=t.useState({tag:"Ironclad Marauder",ap:60,magP:160,physDef:50,magDef:50,health:1500,stamina:0,criticalChance:0,criticalDamage:0,remainHealth:1500,remainStamina:0,img:"/ironcladmarauder.png",loot:280,expGained:1750}),[W,S]=t.useState(!1),[R,H]=t.useState(!1),[B,y]=t.useState(!1),[x,g]=t.useState(),M=t.useRef(null);let l=Math.floor(Math.random()*(100-70)+70)/100,b=Math.floor(Math.random()*(150-120)+120)/100,f=Math.floor(Math.random()*100)<a.criticalChance?a.criticalDamage:1;const O=function(){T(v+s.expGained),a.coin+=s.loot,a.remainHealth=a.health,a.exp+s.expGained>=k[a.level-1]&&(P(d=>d+3),c(!0))},Y=function(){a.coin-=a.coin*.2,a.remainHealth=a.health},z=()=>{if(a.stamina<=a.remainStamina)return;r(!0),n(i=>({...i,remainStamina:a.remainStamina+(a.stamina-a.remainStamina)*.3})),document.querySelector("#status").insertAdjacentHTML("afterbegin",`<p style = "background-color : rgb(20, 30, 241)">${Math.trunc((a.stamina-a.remainStamina)*.3)} stamina recovered.</p>`);const d=setTimeout(()=>{n(i=>({...i,remainHealth:i.remainHealth-Math.trunc(s.magP*l)-(s.magP-a.magDef)/300})),document.querySelector("#status").insertAdjacentHTML("afterbegin",`<p>${Math.trunc(s.magP*l-(s.magP-a.magDef)/300)} magical damage received.</p>`),r(!1)},2e3);g(d)},F=function(){if(s.remainHealth<=0)return;p(i=>({...i,remainHealth:i.remainHealth-Math.trunc(f*a.ap*l-a.ap*s.physDef/300)})),n(i=>({...i,remainStamina:i.remainStamina-50})),r(!0),h(!0),setTimeout(()=>o(!0),200),document.querySelector("#status").insertAdjacentHTML("afterbegin",`<p style = "background-color : rgb(0, 71, 0)">${Math.trunc(f*a.ap*l-a.ap*s.physDef/300)} damage dealt.
        ${f>1?'<span style="background-color: rgb(171, 30, 30); color: wheat; font-size: larger; padding: 0.1rem 0.3rem; border-radius:2px">CRIT.</span>':""}
        </p>`);const d=setTimeout(()=>{n(i=>({...i,remainHealth:i.remainHealth-Math.trunc(s.magP*l)-(s.magP-a.magDef)/300})),document.querySelector("#status").insertAdjacentHTML("afterbegin",`<p>${Math.trunc(s.magP*l-(s.magP-a.magDef)/300)} magical damage received.</p>`),r(!1)},2e3);g(d),setTimeout(()=>{h(!1),o(!1)},1200)},X=function(){if(s.remainHealth<=0)return;p(i=>({...i,remainHealth:i.remainHealth-Math.trunc(f*a.ap*b-a.ap*s.physDef/300)})),n(i=>({...i,remainStamina:i.remainStamina-250})),r(!0),h(!0),setTimeout(()=>o(!0),200),document.querySelector("#status").insertAdjacentHTML("afterbegin",`<p style = "background-color : rgb(0, 71, 0)">${Math.trunc(f*a.ap*b-a.ap*s.physDef/300)} damage dealt.
        ${f>1?'<span style="background-color: rgb(171, 30, 30); color: wheat; font-size: larger; padding: 0.1rem 0.3rem; border-radius:2px">CRIT.</span>':""}</p>`);const d=setTimeout(()=>{n(i=>({...i,remainHealth:i.remainHealth-Math.trunc(s.magP*l)-(s.magP-a.physDef)/300})),document.querySelector("#status").insertAdjacentHTML("afterbegin",`<p>${Math.trunc(s.magP*l-(s.magP-a.magDef)/300)} magical damage received.</p>`),r(!1)},2e3);g(d),setTimeout(()=>{h(!1),o(!1)},1200)},V=function(){if(s.remainHealth<=0)return;p(i=>({...i,remainHealth:i.remainHealth-Math.trunc(a.ap*l-a.ap*s.physDef/1200)})),n(i=>({...i,remainStamina:i.remainStamina-150})),r(!0),h(!0),setTimeout(()=>o(!0),200),document.querySelector("#status").insertAdjacentHTML("afterbegin",`<p style = "background-color : rgb(0, 71, 0)">${Math.trunc(a.ap*l-a.ap*s.physDef/300)} damage dealt.</p>`);const d=setTimeout(()=>{n(i=>({...i,remainHealth:i.remainHealth-Math.trunc(s.magP*l)-(s.magP-a.magDef)/300})),document.querySelector("#status").insertAdjacentHTML("afterbegin",`<p>${Math.trunc(s.magP*l-(s.magP-a.magDef)/300)} magical damage received.</p>`),r(!1)},2e3);g(d),setTimeout(()=>{h(!1),o(!1)},1200)};return t.useEffect(()=>{s.remainHealth<=0&&(s.remainHealth=0,clearTimeout(x),L(!0))},[s.remainHealth,s,x]),t.useEffect(()=>{a.remainHealth<=0&&(a.remainHealth=0,clearTimeout(x),q(!0))},[a.remainHealth,a,x]),t.useEffect(()=>{a.remainStamina<50?S(!0):S(!1)},[a.remainStamina]),t.useEffect(()=>{a.remainStamina<250?H(!0):H(!1)},[a.remainStamina]),t.useEffect(()=>{a.remainStamina<150?y(!0):y(!1)},[a.remainStamina]),e.jsxs("div",{children:[e.jsx(J,{}),e.jsxs("div",{className:m.inGameWrapper,children:[e.jsxs("div",{className:m.inGameContainer,children:[e.jsxs("div",{className:m.inGameAvatar,children:[e.jsx(D,{currentAccount:a}),e.jsx(E,{currentAccount:a}),e.jsx("img",{src:a.img,alt:""}),e.jsxs("div",{className:m.characterName,onMouseEnter:()=>j(!0),onMouseLeave:()=>j(!1),children:[e.jsx("h3",{children:a.name}),w&&e.jsxs("div",{className:m.characterInfo,children:[e.jsxs("p",{children:["Physical Attack Power: ",a.ap]}),e.jsxs("p",{children:["Magical Attack Power: ",a.magP]}),e.jsxs("p",{children:["Health: ",a.health]}),e.jsxs("p",{children:["Physical Defence: ",a.physDef]}),e.jsxs("p",{children:["Magic Defence: ",a.magDef]})]})]})]}),e.jsxs("div",{className:`${m.attackMenuWrapper}`,children:[e.jsx(K,{attackHandler:F,pointerNone:G,attackHandlerStrong:X,isStaminaEnough:W,isStaminaEnoughStrong:R,restHandler:z,attackHandlerCrush:V,isStaminaEnoughCrush:B,currentAccount:a,setIsAttackEffect:h,setIsAttackEffectX:o,setPointerNone:r,setDireWolf:p,setCurrentAccount:n,direwolf:s,setDamageTimeout:g,myElementRef:M,isMagic:!0}),e.jsxs("div",{className:m.attackHistoryContainer,children:[e.jsx("div",{className:m.attackHistoryTopic,children:e.jsx("h3",{children:"Status History"})}),e.jsx("div",{className:m.statusInd,id:"status",ref:M})]})]}),e.jsxs("div",{className:m.inGameAvatar,children:[e.jsx(D,{currentAccount:s}),e.jsx(E,{currentAccount:s}),e.jsx(Q,{currentEnemy:s,attackEffect:u,attackEffectX:I})]})]}),C&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:m.onWinContainer,children:[e.jsx("h3",{children:"Victory!"}),e.jsxs("p",{children:["You have earned"," ",e.jsx("span",{className:m.embeddedNumberExp,children:s.expGained})," ","experience point."]}),e.jsx("p",{children:"You found a treasure inside the cave of the direwolf. "}),e.jsxs("p",{children:[e.jsx("span",{className:m.embeddedNumberGold,children:s.loot}),e.jsx("img",{style:{verticalAlign:"-4px"},className:"coin",src:"/coin-vector2.svg"})," ","gold gained"]}),e.jsxs(N,{to:"/game",children:[" ",e.jsx("button",{onClick:O,children:"Confirm"})]})]}),e.jsx("div",{className:m.overlay})]}),$&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:m.onWinContainer,children:[e.jsx("h3",{children:"Defeat!"}),e.jsx("p",{children:"You dropped some of your gold while running."}),e.jsxs("p",{children:[e.jsx("span",{className:m.embeddedNumberGold,children:Math.trunc(a.coin*.2)}),e.jsx("img",{style:{verticalAlign:"-4px"},className:"coin",src:"/coin-vector2.svg"})," ","gold lost."]}),e.jsxs(N,{to:"/game",children:[" ",e.jsx("button",{onClick:Y,children:"Confirm"})]})]}),e.jsx("div",{className:m.overlay})]})]})]})}export{aa as default};
