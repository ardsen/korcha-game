import{j as e,L as K,r as o}from"./index-c824156c.js";function J(){return e.jsx("header",{className:"customization-header",children:e.jsxs("h2",{children:[e.jsx(K,{to:"/",children:"Korcha"})," "]})})}function Q({setIsOrc:t,isOrc:d,isHuman:r,setIsHuman:l,setIsFirstSelected:h,setIsSecondSelected:a,setIsFirstSelectedHuman:s,setIsSecondSelectedHuman:i,setIsStatSectionOpen:c,currentAccount:n,setIsStatSectionOpenOrc:f}){const[u,g]=o.useState(!1),[m,y]=o.useState(!1),x=()=>{y(!1),g(!u),t(!d),l(!1),h(!1),a(!1),s(!1),i(!1),c(!1),f(!1),n.hp=5,n.end=5,n.str=5,n.int=5,n.agi=5,n.race="orc",window.scrollBy({top:window.innerHeight,behavior:"smooth"})},w=()=>{g(!1),y(!m),t(!1),l(!r),h(!1),a(!1),s(!1),i(!1),c(!1),f(!1),n.hp=5,n.end=5,n.str=5,n.int=5,n.agi=5,n.race="human",window.scrollBy({top:window.innerHeight,behavior:"smooth"})};return e.jsxs("section",{className:"race-selection",children:[e.jsxs("div",{className:`orc-race-container ${u?"active-container":""}`,onClick:x,children:[e.jsx("img",{src:"/orc-selection-bg.png",alt:""}),e.jsx("h1",{children:"Orc"}),e.jsx("span",{})]}),e.jsxs("div",{className:`human-race-container ${m?"active-container-h":""}`,onClick:w,children:[e.jsx("span",{}),e.jsx("h1",{children:"Human"}),e.jsx("img",{src:"/human-selection-bg.png",alt:""})]})]})}function R({children:t,setIsButtonActive:d,isButtonActive:r}){return e.jsx("button",{className:`btn btn-birth ${r?"active-button":""}`,onClick:d,children:t})}function U({isButtonActiveW:t,setIsButtonActiveW:d,isButtonActiveT:r,setIsButtonActiveT:l,isButtonActiveS:h,setIsButtonActiveS:a}){const s=function(){d(!0),l(!1),a(!1)},i=function(){d(!1),l(!1),a(!0)},c=function(){d(!1),l(!0),a(!1)};return e.jsxs("div",{className:"selection-button-container selection-button-birth",children:[e.jsx(R,{isButtonActive:t,setIsButtonActive:s,children:"Warrior"},"1"),e.jsx(R,{isButtonActive:h,setIsButtonActive:i,children:"Sorcerer"},"2"),e.jsx(R,{isButtonActive:r,setIsButtonActive:c,children:"Thief"},"3")]})}function V({src:t}){return e.jsx("div",{className:"img-container img-container-birth animation-opacity img-container-switch-1 img__container--active animation-opacity",children:e.jsx("img",{src:t,alt:""})})}function F({children:t}){return e.jsx("div",{className:"p-container paragraph-birth paragraph-birth-switch-2 paragraph__active animation-opacity",children:e.jsx("p",{children:t})})}function $({src1:t,src2:d,src3:r,p1:l,p2:h,p3:a,setIsFirstSelected:s,currentAccount:i,isNextSectionOpen:c}){const[n,f]=o.useState(!0),[u,g]=o.useState(!1),[m,y]=o.useState(!1),x=function(){s(!0),n&&(i.str+=3,i.hp+=1),u&&(i.int+=3,i.end+=1),m&&(i.agi+=3,i.hp+=1)};return o.useEffect(()=>{s&&setTimeout(()=>{window.scrollBy({top:window.innerHeight,behavior:"smooth"})},50)}),e.jsx("section",{className:`selection-section birth-selection-section animation-left-to-right ${c?"pointer-event-none":""}`,children:e.jsxs("div",{className:"selection-container birth-selection-container",children:[e.jsx(U,{isButtonActiveS:u,isButtonActiveW:n,isButtonActiveT:m,setIsButtonActiveS:g,setIsButtonActiveT:y,setIsButtonActiveW:f}),e.jsx(V,{src:`${n&&t||u&&d||m&&r}`}),n&&e.jsx(F,{children:l})," ",u&&e.jsx(F,{children:h}),m&&e.jsx(F,{children:a}),e.jsx("button",{className:"next-button next-button-child",onClick:x,children:"Confirm"})]})})}function M({children:t,isButtonActive:d,setIsButtonActive:r}){return e.jsx("button",{className:`btn btn-birth-human ${d?"active-button-human":""}`,onClick:r,children:t})}function X({isButtonActiveK:t,isButtonActiveM:d,isButtonActiveR:r,setIsButtonActiveK:l,setIsButtonActiveM:h,setIsButtonActiveR:a}){const s=function(){l(!0),h(!1),a(!1)},i=function(){l(!1),h(!0),a(!1)},c=function(){l(!1),h(!1),a(!0)};return e.jsxs("div",{className:"selection-button-container selection-button-birth-human",children:[e.jsx(M,{isButtonActive:t,setIsButtonActive:s,children:"Knight"}),e.jsx(M,{isButtonActive:d,setIsButtonActive:i,children:"Mage"}),e.jsx(M,{isButtonActive:r,setIsButtonActive:c,children:"Rogue"})]})}function Z({src:t}){return e.jsx("div",{className:"img-container  img-container-birth-human img-container-switch-10 img__container--active animation-opacity",children:e.jsx("img",{src:t,alt:""})})}function A({children:t}){return e.jsx("div",{className:"p-container paragraph-birth-human paragraph-birth-switch-10 paragraph__active",children:e.jsx("p",{children:t})})}function _({src1:t,src2:d,src3:r,p1:l,p2:h,p3:a,setIsFirstSelectedHuman:s,currentAccount:i,isNextSectionOpen:c}){const[n,f]=o.useState(!0),[u,g]=o.useState(!1),[m,y]=o.useState(!1),x=function(){s(!0),n&&(i.str+=3,i.hp+=1),u&&(i.int+=3,i.end+=1),m&&(i.str+=1,i.agi+=2,i.hp+=1)};return o.useEffect(()=>{s&&setTimeout(()=>{window.scrollBy({top:window.innerHeight,behavior:"smooth"})},50)}),e.jsx("section",{className:`selection-section birth-selection-section-human animation-left-to-right ${c?"pointer-event-none":""}`,children:e.jsxs("div",{className:"selection-container birth-selection-container",children:[e.jsx(Z,{src:n&&t||u&&d||m&&r}),e.jsx(X,{isButtonActiveK:n,isButtonActiveM:u,isButtonActiveR:m,setIsButtonActiveK:f,setIsButtonActiveM:g,setIsButtonActiveR:y}),e.jsx(A,{children:n&&l||u&&h||m&&a}),e.jsx("button",{className:"next-button next-button-child",onClick:x,children:"Confirm"})]})})}function ee({src:t}){return e.jsx("div",{className:"stat-img-container stat-img-container-warrior-human stat__img__container--active animation-opacity",children:e.jsx("img",{src:t,alt:""})})}function te({currentAccount:t,statsImgHandler:d,race:r,village:l,itemList:h}){const[a,s]=o.useState(6),[i,c]=o.useState(!1),[n,f]=o.useState(!1),[u,g]=o.useState(!1),[m,y]=o.useState(!1),[x,w]=o.useState(!1),[b,j]=o.useState([]),[v,S]=o.useState(""),N=function(){t.name=v};o.useEffect(()=>{t.str>=11&&(t.equippedItem=h.longsword,t.equippedArmor=h.tatteredClothGarb),t.int>=11&&(t.equippedItem=h.stick,t.equippedArmor=h.tatteredClothGarb),t.agi>=11&&(t.equippedItem=h.knife,t.equippedArmor=h.tatteredClothGarb),j([t.hp,t.end,t.str,t.int,t.agi]),d()},[]);const H=()=>{c(!0)},k=()=>{c(!1)},C=()=>{a<=0||(t.hp+=1,s(a-1))},I=()=>{t.hp<=b[0]||a>=6||(t.hp-=1,s(a+1))},T=()=>{a<=0||(t.end+=1,s(a-1))},O=()=>{t.end<=b[1]||a>=6||(t.end-=1,s(a+1))},z=()=>{a<=0||(t.str+=1,s(a-1))},Y=()=>{t.str<=b[2]||a>=6||(t.str-=1,s(a+1))},E=()=>{a<=0||(t.int+=1,s(a-1))},B=()=>{t.int<=b[3]||a>=6||(t.int-=1,s(a+1))},P=()=>{a<=0||(t.agi+=1,s(a-1))},D=()=>{t.agi<=b[4]||a>=6||(t.agi-=1,s(a+1))};return e.jsxs("div",{className:`stats-container stats-container-${r}`,children:[e.jsxs("p",{className:`${r}`,children:["   You managed to escape from prison. After spending a night camping and recover yourself, you set out towards to your father's village ",l,". You had heard that he was loved there. The elders of the village could assist you.",e.jsx("br",{}),"   On your way to ",l,", you encountered a mystic wizard who gave you a potion to regain your strength. (6 STATS GAINED)"]}),e.jsx("div",{children:e.jsxs("label",{htmlFor:"nickname",className:r,style:{display:"flex",gap:"10px",alignItems:"center"},children:[e.jsx("p",{children:"Enter your character's name:"}),e.jsx("input",{value:v,onChange:p=>S(p.target.value),maxLength:15,type:"text",htmlFor:"nickname",style:{background:"var(--color-text)",border:"2px solid black",width:"12rem",pointerEvents:"fill"}})]})}),e.jsxs("div",{className:"hp-bar",children:[e.jsx("div",{className:`info-container info-container-human ${i?"":"hidden"}`,"data-info":"1",children:"HP: Health Points increases your hit points. Recommended for all classes but mostly Warriors."}),e.jsx("button",{className:"info-btn info-btn-human",onMouseEnter:H,onMouseLeave:k,children:"i"}),e.jsx("span",{children:"hp "}),e.jsx("button",{className:"stat-button hp-minus-human",onClick:I,children:"-"}),e.jsx("input",{type:"text",className:"hp-input-human",value:t.hp,onChange:p=>p.target.value}),e.jsx("button",{className:"stat-button hp-plus-human",onClick:C,value:"hp",children:"+"})]}),e.jsxs("div",{className:"end-bar",children:[e.jsx("div",{className:`info-container info-container-human ${n?"":"hidden"}`,"data-info":"2",children:"END: Endurance increases your stamina. Recommended mostly for Sorcerers, might be useful for Clerics."}),e.jsx("button",{className:"info-btn info-btn-human",onMouseEnter:()=>f(!0),onMouseLeave:()=>f(!1),children:"i"}),e.jsx("span",{children:"end"}),e.jsx("button",{className:"stat-button end-minus-human",onClick:O,children:"-"}),e.jsx("input",{type:"text",className:"end-input-human",value:t.end,onChange:p=>p.target.value}),e.jsx("button",{className:"stat-button end-plus-human",onClick:T,children:"+"})]}),e.jsxs("div",{className:"str-bar",children:[e.jsx("div",{className:`info-container info-container-human ${u?"":"hidden"}`,"data-info":"3",children:"STR: Strength your physical power. Recommended mostly for Warriors, useful for Clerics"}),e.jsx("button",{className:"info-btn info-btn-human",onMouseEnter:()=>g(!0),onMouseLeave:()=>g(!1),children:"i"}),e.jsx("span",{children:"str"}),e.jsx("button",{className:"stat-button str-minus-human",onClick:Y,children:"-"}),e.jsx("input",{type:"text",className:"str-input-human",value:t.str,onChange:p=>p.target.value}),e.jsx("button",{className:"stat-button str-plus-human",onClick:z,children:"+"})]}),e.jsxs("div",{className:"int-bar",children:[e.jsx("div",{className:`info-container info-container-human ${m?"":"hidden"}`,"data-info":"4",children:"INT: Intelligence increases your magic power. Only recommended for sorcerers."}),e.jsx("button",{className:"info-btn info-btn-human",onMouseEnter:()=>y(!0),onMouseLeave:()=>y(!1),children:"i"}),e.jsx("span",{children:"int"}),e.jsx("button",{className:"stat-button int-minus-human",onClick:B,children:"-"}),e.jsx("input",{type:"text",className:"int-input-human",value:t.int,onChange:p=>p.target.value}),e.jsx("button",{className:"stat-button int-plus-human",onClick:E,children:"+"})]}),e.jsxs("div",{className:"fth-bar",children:[e.jsx("div",{className:`info-container info-container-human ${x?"":"hidden"}`,"data-info":"5",children:"AGI: Agility increases your physical power with daggers and critical damage."}),e.jsx("button",{className:"info-btn info-btn-human",onMouseEnter:()=>w(!0),onMouseLeave:()=>w(!1),children:"i"}),e.jsx("span",{children:"agi"}),e.jsx("button",{className:"stat-button fth-minus-human",onClick:D,children:"-"}),e.jsx("input",{type:"text",className:"fth-input-human",value:t.agi,onChange:p=>p.target.value}),e.jsx("button",{className:"stat-button fth-plus-human",onClick:P,children:"+"})]}),a===0?e.jsx(K,{to:"/game",children:e.jsx("button",{className:"start-game-button animation-opacity",onClick:N,children:"Start Your Journey!"})}):e.jsxs("span",{className:"animation-opacity remain-stats-span",children:["Remain stat points:"," ",e.jsx("input",{type:"text",className:"remain-stats-input-human",value:a,onChange:p=>p.target.value})]})]})}function G({currentAccount:t,setCurrentAccount:d,img1:r,img2:l,img3:h,race:a,village:s,itemList:i,armorList:c}){const[n,f]=o.useState(r),u=function(){t.int>12?(f(l),t.img=l):t.agi>10?(f(h),t.img=h):(f(r),t.img=r)};return e.jsx("section",{className:"stat-distribute-section stat-distribute-section-human  animation-left-to-right",style:{overflow:"hidden"},children:e.jsxs("div",{className:"stat-distribute-container",children:[e.jsx(ee,{src:n}),e.jsx(te,{currentAccount:t,setCurrentAccount:d,statsImgHandler:u,race:a,village:s,itemList:i,armorList:c})]})})}function ae({currentAccount:t,setCurrentAccount:d,itemList:r,armorList:l}){const[h,a]=o.useState(!1),[s,i]=o.useState(!1),[c,n]=o.useState(!1),[f,u]=o.useState(!1),[g,m]=o.useState(!1),[y,x]=o.useState(!1),[w,b]=o.useState(!1),[j,v]=o.useState(!1),S=" Your father was a great warrior, fought in many battles for the emperor. He mastered axes and maces to crush his enemies. After your birth, he moved into the city Kroyzk to settle down. You were trained here by your father to become a great warrior like himself. (STR +3, HP +1)",N="Your father was a skillful sorcerer and an elite member of a secret  cult called Froyner. The cult used to work behind closed doors to  shape the destiny of the empire. After emperor discovered Froyners,  he exile the members of it. Your father has exiled to city Kroyzk. You were trained here by your father to becoma a clever sorcerer like himself. (INT+3, END+1)",H="Your father was a rogue. He did everything he could do to look after his family and be a good father. He mastered the art of stealthiness. He was also good at using daggers. After plundering a loaded caravan, he wanted to start a new life in the city of Kroyzk with all the money he had earned. You were trained here by your father to master your dagger skills. (AGI +3, HP +1)",k="You used to play fighting games with your friends in streets when you were a child. Streets and your trainings made you tough and strong. (STR +3, HP +1)",C="You used to go to City's Library when you have spare times from your trainings. Even in those times you were eager to learn about magic and new spells. (INT +3, END +1)",I="During the spare time left from your training, you used to go to practice archery and dagger shooting. Your skills with daggers and bows got better everyday. (AGI +3, HP +1) ",T="The city Kroyzk was invaded by humans. You fought well with your greataxe and crushed many enemies to defend where you have been raised. Despite your valiant fighting, you couldn't save your family and had to watch the city's downfall as you were taken as a prisoner. (STR +3, HP +1)",O=" The city Kroyzk was invaded by humans. You used the power of magic, set fire to many enemies and made a great impact on battle. Despite your valiant fighting, you couldn't save your family and had to watch the city's downfall as you were taken as a prisoner. (INT +3, END +1)",z="The city Troyer was invaded by humans. You were too fast for the enemy and had managed to defeat many of them. Despite your valiant fighting, you couldn't save your family and had to watch the city's downfall as you were taken as a prisoner.  (AGI +3, HP +1) ",Y=" Your father was a great warrior, fought in many battles for the emperor. He mastered axes and maces to crush his enemies. After your birth, he moved into the city Troyer to settle down. You were trained here by your father to become a great warrior like himself. (STR +3, HP +1)",E="Your father was a skillful sorcerer and an elite member of a secret  cult called Froyner. The cult used to work behind closed doors to  shape the destiny of the empire. After emperor discovered Froyners,  he exile the members of it. Your father has exiled to city Troyer. You were trained here by your father to become a clever sorcerer like himself. (INT+3, END+1)",B="Your father was a rogue. He did everything he could do to look after his family and be a good father. He mastered the art of stealthiness. He was also good at using daggers. After plundering a loaded caravan, he wanted to start a new life in the city of Troyer with all the money he had earned. You were trained here by your father to master your dagger skills. (AGI +3, HP +1)",P="You used to play fighting games with your friends in streets when you were a child. Streets and your trainings made you tough and strong. (STR +3, HP +1)",D="You used to go to City's Library when you have spare times from your trainings. Even in those times you were eager to learn about magic and new spells. (INT +3, END +1)",p="During the spare time left from your training, you used to go to practice archery and dagger shooting. Your skills with daggers and bows got better everyday. (AGI +3, HP +1) ",q="The city Troyer was invaded by humans. You fought well with your greataxe and crushed many enemies to defend where you have been raised. Despite your valiant fighting, you couldn't save your family and had to watch the city's downfall as you were taken as a prisoner. (STR +3, HP +1)",L=" The city Troyer was invaded by humans. You used the power of magic, set fire to many enemies and made a great impact on battle. Despite your valiant fighting, you couldn't save your family and had to watch the city's downfall as you were taken as a prisoner. (INT +3, END +1)",W="The city Troyer was invaded by humans. You used your daggers on enemy to save your city. You were too fast for the enemy and had managed to defeat many of them. Despite your valiant fighting, you couldn't save your family and had to watch the city's downfall as you were taken as a prisoner. (AGI +3, HP +1) ";return e.jsxs("main",{className:"customization-main",children:[e.jsx(Q,{setIsOrc:a,isOrc:h,isHuman:f,setIsHuman:u,setIsFirstSelected:i,setIsSecondSelected:n,setIsFirstSelectedHuman:m,setIsSecondSelectedHuman:x,setIsStatSectionOpen:b,setIsStatSectionOpenOrc:v,currentAccount:t}),h&&e.jsx($,{src1:"/warrior-orc-birth.png",src2:"/sorcerer-orc-birth.png",src3:"/warlock-orc-birth.png",p1:S,p2:N,p3:H,setIsFirstSelected:i,isNextSectionOpen:s,currentAccount:t},1),f&&e.jsx(_,{src1:"/human-knight-birth.png",src2:"/human-sorcerer-birth.png",src3:"/warlock-human-birth.png",p1:Y,p2:E,p3:B,setIsFirstSelectedHuman:m,currentAccount:t,isNextSectionOpen:g}),s&&e.jsx($,{src1:"/orcs-child-street.png",src2:"/orc-child-sorcerer.png",src3:"/orc-child-warlock.png",p1:k,p2:C,p3:I,setIsFirstSelected:n,currentAccount:t,isNextSectionOpen:c},2),g&&e.jsx(_,{src1:"/human-warrior-child.png",src2:"/human-child-sorcerer.jpeg",src3:"/human-child-church.jpeg",p1:P,p2:D,p3:p,setIsFirstSelectedHuman:x,currentAccount:t,isNextSectionOpen:y}),c&&e.jsx($,{src1:"/youth-warrior-orc.png",src2:"/youth-sorcerer-orc.png",src3:"/youth-warlock-orc.png",p1:T,p2:O,p3:z,currentAccount:t,setIsFirstSelected:v,isNextSectionOpen:j},3),y&&e.jsx(_,{src1:"/human-young-warrior.jpeg",src2:"/human-sorcerer-young.jpeg",src3:"/human-cleric-young.jpeg",p1:q,p2:L,p3:W,setIsFirstSelectedHuman:b,currentAccount:t,isNextSectionOpen:w}),w&&e.jsx(G,{currentAccount:t,setCurrentAccount:d,img1:"/human-warrior-finalization.png",img2:"/human-sorcerer-finalization.png",img3:"/human-warlock-finalization.png",race:"human",village:"Amarat",itemList:r,armorList:l}),j&&e.jsx(G,{currentAccount:t,setCurrentAccount:d,img1:"/orc-finalization-warrior.png",img2:"/orc-finalization-sorcerer.png",img3:"/orc-finalization-warlock.png",race:"orc",village:"Proyse",itemList:r,armorList:l})]})}function se({currentAccount:t,setCurrentAccount:d,itemList:r,armorList:l}){return e.jsxs(e.Fragment,{children:[e.jsx(J,{}),e.jsx(ae,{currentAccount:t,setCurrentAccount:d,itemList:r,armorList:l})]})}export{se as default};
