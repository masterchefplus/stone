(this["webpackJsonpblzd-frontend"]=this["webpackJsonpblzd-frontend"]||[]).push([[11],{719:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return b})),n.d(t,"c",(function(){return j}));var c=n(3),r=n.n(c),a=n(6),o=n(72),s=n.n(o),i=n(65),l=function(e,t){return new(new s.a(e).eth.Contract)(i,t)},b=function(){var e=Object(a.a)(r.a.mark((function e(t,n,c){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.methods.allowance(c,n.options.address).call();case 3:return a=e.sent,e.abrupt("return",a);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return","0");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n,c){return e.apply(this,arguments)}}(),j=function(){var e=Object(a.a)(r.a.mark((function e(t,n,c){var a,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=l(t,n),e.prev=1,e.next=4,a.methods.balanceOf(c).call();case 4:return o=e.sent,e.abrupt("return",o);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return","0");case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,n,c){return e.apply(this,arguments)}}()},725:function(e,t,n){"use strict";var c,r=n(11),a=(n(0),n(2)),o=n(14),s=n(1),i=a.e.div(c||(c=Object(r.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n\n  svg {\n    fill: ",";\n  }\n"])),(function(e){return e.theme.colors.primary})),l=function(e){var t=e.onClick,n=e.expanded;return Object(s.jsxs)(i,{"aria-label":"Hide or show expandable content",role:"button",onClick:function(){return t()},children:[Object(s.jsx)(o.I,{color:"primary",bold:!0,children:n?"Hide":"Details"}),n?Object(s.jsx)(o.o,{}):Object(s.jsx)(o.n,{})]})};l.defaultProps={expanded:!1},t.a=l},749:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return Fe}));var c,r,a,o,s,i,l,b,j,d,u,x,p,O,m,h,f,k,g=n(19),y=n(0),v=n(28),S=n(26),w=n(8),T=n.n(w),C=n(36),I=n(14),A=n(144),q=n(321),P=n(125),B=n(44),D=n(122),F=n(29),N=n(25),z=n(27),L=n(17),E=n(11),M=n(2),R=n(725),Q=function(e){var t=e.quoteTokenAdresses,n=e.quoteTokenSymbol,c=e.tokenAddresses,r="BNB"===n?"BNB":t[56],a=c[56];return"".concat(r,"/").concat(a)},H=n(1),G=M.e.div(c||(c=Object(E.a)(["\n  margin-top: 24px;\n"]))),V=Object(M.e)(I.w)(r||(r=Object(E.a)(["\n  text-decoration: none;\n  font-weight: normal;\n  color: ",";\n  display: flex;\n  align-items: center;\n\n  svg {\n    padding-left: 4px;\n    height: 18px;\n    width: auto;\n    fill: ",";\n  }\n"])),(function(e){return e.theme.colors.text}),(function(e){return e.theme.colors.primary})),W=function(e){var t=e.bscScanAddress,n=e.removed,c=(e.totalValueFormated,e.lpLabel),r=e.quoteTokenAdresses,a=e.quoteTokenSymbol,o=e.tokenAddresses,s=e.isTokenOnly,i=Object(z.a)(),l=Q({quoteTokenAdresses:r,quoteTokenSymbol:a,tokenAddresses:o}),b=s?"https://exchange.flintstone.finance/#/swap?outputCurrency=".concat(o[56]):"https://exchange.flintstone.finance/#/add/".concat(l),j=c.includes("vBSWAP")?"https://bsc.valuedefi.io/#/vswap":b;return Object(H.jsxs)(G,{children:[Object(H.jsxs)(I.q,{justifyContent:"space-between",children:[Object(H.jsxs)(I.I,{children:[i(316,"Stake"),":"]}),Object(H.jsx)(V,{href:j,children:c})]}),!n&&Object(H.jsx)(I.q,{justifyContent:"space-between"}),Object(H.jsx)(I.q,{justifyContent:"flex-start",children:Object(H.jsx)(I.v,{external:!0,href:t,bold:!1,children:i(356,"View on BscScan")})})]})},J=n(102),U=Object(M.e)(I.q)(a||(a=Object(E.a)(["\n  svg {\n    margin-right: 0.25rem;\n  }\n"]))),X=Object(M.e)(I.H)(o||(o=Object(E.a)(["\n  margin-left: 4px;\n"]))),$=function(e){var t=e.lpLabel,n=e.multiplier,c=e.farmImage,r=e.tokenSymbol,a=e.depositFee;return Object(H.jsxs)(U,{justifyContent:"space-between",alignItems:"center",mb:"12px",children:[Object(H.jsxs)(I.q,{flexDirection:"column",alignItems:"flex-start",children:[Object(H.jsx)(I.r,{mb:"4px",children:t}),Object(H.jsxs)(I.q,{justifyContent:"center",children:[0===a?Object(H.jsx)(J.d,{}):null,Object(H.jsx)(X,{variant:"secondary",children:n})]})]}),Object(H.jsx)(I.t,{src:"/images/farms/".concat(c,".png"),alt:r,width:64,height:64})]})},K=n(3),Y=n.n(K),Z=n(6),_=n(719),ee=n(203),te=n(209),ne=n(214),ce=n(325),re=n(54),ae=n(91),oe=n(145),se=function(e){var t=e.max,n=e.onConfirm,c=e.onDismiss,r=e.tokenName,a=void 0===r?"":r,o=e.depositFeeBP,s=void 0===o?0:o,i=Object(y.useState)(""),l=Object(L.a)(i,2),b=l[0],j=l[1],d=Object(y.useState)(!1),u=Object(L.a)(d,2),x=u[0],p=u[1],O=Object(z.a)(),m=Object(y.useMemo)((function(){return Object(re.b)(t)}),[t]),h=Object(y.useCallback)((function(e){j(e.currentTarget.value)}),[j]),f=Object(y.useCallback)((function(){j(m)}),[m,j]);return Object(H.jsxs)(I.B,{title:"".concat(O(316,"Deposit")," ").concat(a," Tokens"),onDismiss:c,children:[Object(H.jsx)(oe.a,{value:b,onSelectMax:f,onChange:h,max:m,symbol:a,depositFeeBP:s}),Object(H.jsxs)(ae.a,{children:[Object(H.jsx)(I.e,{variant:"secondary",onClick:c,children:O(462,"Cancel")}),Object(H.jsx)(I.e,{disabled:x,onClick:Object(Z.a)(Y.a.mark((function e(){return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(!0),e.next=3,n(b);case 3:p(!1),c();case 5:case"end":return e.stop()}}),e)}))),children:x?O(488,"Pending Confirmation"):O(464,"Confirm")})]})]})},ie=function(e){var t=e.onConfirm,n=e.onDismiss,c=e.max,r=e.tokenName,a=void 0===r?"":r,o=Object(y.useState)(""),s=Object(L.a)(o,2),i=s[0],l=s[1],b=Object(y.useState)(!1),j=Object(L.a)(b,2),d=j[0],u=j[1],x=Object(z.a)(),p=Object(y.useMemo)((function(){return Object(re.b)(c)}),[c]),O=Object(y.useCallback)((function(e){l(e.currentTarget.value)}),[l]),m=Object(y.useCallback)((function(){l(p)}),[p,l]);return Object(H.jsxs)(I.B,{title:"Withdraw ".concat(a),onDismiss:n,children:[Object(H.jsx)(oe.a,{onSelectMax:m,onChange:O,value:i,max:p,symbol:a}),Object(H.jsxs)(ae.a,{children:[Object(H.jsx)(I.e,{variant:"secondary",onClick:n,children:x(462,"Cancel")}),Object(H.jsx)(I.e,{disabled:d,onClick:Object(Z.a)(Y.a.mark((function e(){return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(!0),e.next=3,t(i);case 3:u(!1),n();case 5:case"end":return e.stop()}}),e)}))),children:d?x(488,"Pending Confirmation"):x(464,"Confirm")})]})]})},le=M.e.div(s||(s=Object(E.a)(["\n  display: flex;\n  svg {\n    width: 20px;\n  }\n"]))),be=function(e){var t=e.stakedBalance,n=e.tokenBalance,c=e.tokenName,r=e.pid,a=e.depositFeeBP,o=Object(z.a)(),s=Object(ne.a)(r).onStake,i=Object(ce.a)(r).onUnstake,l=Object(re.a)(t),b=l.toLocaleString(),j=Object(I.P)(Object(H.jsx)(se,{max:n,onConfirm:s,tokenName:c,depositFeeBP:a})),d=Object(L.a)(j,1)[0],u=Object(I.P)(Object(H.jsx)(ie,{max:t,onConfirm:i,tokenName:c})),x=Object(L.a)(u,1)[0];return Object(H.jsxs)(I.q,{justifyContent:"space-between",alignItems:"center",children:[Object(H.jsx)(I.r,{color:0===l?"textDisabled":"text",children:b}),0===l?Object(H.jsx)(I.e,{style:{width:107.72},onClick:d,children:o(999,"Stake")}):Object(H.jsxs)(le,{children:[Object(H.jsx)(I.s,{style:{width:52},variant:"tertiary",onClick:x,mr:"6px",children:Object(H.jsx)(I.A,{color:"primary"})}),Object(H.jsx)(I.s,{style:{width:52},variant:"tertiary",onClick:d,children:Object(H.jsx)(I.a,{color:"primary"})})]})]})},je=n(215),de=M.e.div(i||(i=Object(E.a)(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  > button {\n    width: 100%;\n  }\n"]))),ue=function(e){var t=e.earnings,n=e.pid,c=Object(z.a)(),r=Object(y.useState)(!1),a=Object(L.a)(r,2),o=a[0],s=a[1],i=Object(je.b)(n).onReward,l=Object(ne.a)(n).onStake,b=0===n,j=Object(re.a)(t),d=j.toLocaleString();return Object(H.jsxs)(I.q,{mb:"8px",justifyContent:"space-between",alignItems:"center",children:[Object(H.jsx)(I.r,{color:0===j?"textDisabled":"text",children:d}),Object(H.jsxs)(de,{children:[b?Object(H.jsx)(I.e,{disabled:0===j||o,scale:"sm",variant:"secondary",marginBottom:"8px",style:{borderRadius:12},onClick:Object(Z.a)(Y.a.mark((function e(){return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(!0),e.next=3,l(j.toString());case 3:s(!1);case 4:case"end":return e.stop()}}),e)}))),children:c(999,"Compound")}):null,Object(H.jsx)(I.e,{disabled:0===j||o,scale:b?"sm":"md",style:{borderRadius:b?12:16,marginTop:b?0:8,marginBottom:b?0:8},onClick:Object(Z.a)(Y.a.mark((function e(){return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(!0),e.next=3,i();case 3:s(!1);case 4:case"end":return e.stop()}}),e)}))),children:c(999,"Harvest")})]})]})},xe=M.e.div(l||(l=Object(E.a)(["\n  padding-top: 16px;\n"]))),pe=function(e){var t=e.farm,n=e.ethereum,c=e.account,r=Object(z.a)(),a=Object(y.useState)(!1),o=Object(L.a)(a,2),s=o[0],i=o[1],l=Object(B.b)(t.pid),b=l.pid,j=l.lpAddresses,d=l.tokenAddresses,u=l.isTokenOnly,x=l.depositFeeBP,p=Object(B.c)(b),O=p.allowance,m=p.tokenBalance,h=p.stakedBalance,f=p.earnings,k=j[56],g=d[56],v=t.lpSymbol.toUpperCase(),S=c&&O&&O.isGreaterThan(0),w=Object(y.useMemo)((function(){return u?Object(_.b)(n,g):Object(_.b)(n,k)}),[n,k,g,u]),T=Object(te.a)(w).onApprove,C=Object(y.useCallback)(Object(Z.a)(Y.a.mark((function e(){return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,i(!0),e.next=4,T();case 4:i(!1),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),[T]);return Object(H.jsxs)(xe,{children:[Object(H.jsxs)(I.q,{children:[Object(H.jsx)(I.I,{bold:!0,textTransform:"uppercase",color:"secondary",fontSize:"12px",pr:"3px",children:"STONE"}),Object(H.jsx)(I.I,{bold:!0,textTransform:"uppercase",color:"textSubtle",fontSize:"12px",children:r(999,"Earned")})]}),Object(H.jsx)(ue,{earnings:f,pid:b}),Object(H.jsxs)(I.q,{children:[Object(H.jsx)(I.I,{bold:!0,textTransform:"uppercase",color:"secondary",fontSize:"12px",pr:"3px",children:v}),Object(H.jsx)(I.I,{bold:!0,textTransform:"uppercase",color:"textSubtle",fontSize:"12px",children:r(999,"Staked")})]}),c?S?Object(H.jsx)(be,{stakedBalance:h,tokenBalance:m,tokenName:v,pid:b,depositFeeBP:x}):Object(H.jsx)(I.e,{style:{width:"100%"},mt:"8px",disabled:s,onClick:C,children:r(999,"Approve Contract")}):Object(H.jsx)(ee.a,{mt:"8px"})]})},Oe=function(e){var t,n=e.numberOfDays,c=e.farmApy/100,r=n/365,a=1e3/e.cakePrice,o=a*Math.pow(1+c/365,365*r);return t=o-a,Math.round(100*t)/100},me=function(e){return(e.amountEarned/e.amountInvested*100).toFixed(2)},he=M.e.div(b||(b=Object(E.a)(["\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: repeat(4, auto);\n  margin-bottom: 24px;\n"]))),fe=M.e.div(j||(j=Object(E.a)(["\n  margin-bottom: '10px';\n"]))),ke=Object(M.e)(I.I)(d||(d=Object(E.a)(["\n  max-width: 320px;\n  margin-bottom: 28px;\n"]))),ge=function(e){var t=e.onDismiss,n=e.lpLabel,c=e.quoteTokenAdresses,r=e.quoteTokenSymbol,a=e.tokenAddresses,o=e.cakePrice,s=e.apy,i=Object(z.a)(),l=Q({quoteTokenAdresses:c,quoteTokenSymbol:r,tokenAddresses:a}),b=s.times(new T.a(100)).toNumber(),j=1e3/o.toNumber(),d=Oe({numberOfDays:1,farmApy:b,cakePrice:o}),u=Oe({numberOfDays:7,farmApy:b,cakePrice:o}),x=Oe({numberOfDays:30,farmApy:b,cakePrice:o}),p=Oe({numberOfDays:365,farmApy:b,cakePrice:o});return Object(H.jsxs)(I.B,{title:"ROI",onDismiss:t,children:[Object(H.jsxs)(he,{children:[Object(H.jsx)(fe,{children:Object(H.jsx)(I.I,{fontSize:"12px",bold:!0,color:"textSubtle",textTransform:"uppercase",mb:"20px",children:i(999,"Timeframe")})}),Object(H.jsx)(fe,{children:Object(H.jsx)(I.I,{fontSize:"12px",bold:!0,color:"textSubtle",textTransform:"uppercase",mb:"20px",children:i(999,"ROI")})}),Object(H.jsx)(fe,{children:Object(H.jsx)(I.I,{fontSize:"12px",bold:!0,color:"textSubtle",textTransform:"uppercase",mb:"20px",children:i(999,"STONE per $1000")})}),Object(H.jsx)(fe,{children:Object(H.jsx)(I.I,{children:"1d"})}),Object(H.jsx)(fe,{children:Object(H.jsxs)(I.I,{children:[me({amountEarned:d,amountInvested:j}),"%"]})}),Object(H.jsx)(fe,{children:Object(H.jsx)(I.I,{children:d})}),Object(H.jsx)(fe,{children:Object(H.jsx)(I.I,{children:"7d"})}),Object(H.jsx)(fe,{children:Object(H.jsxs)(I.I,{children:[me({amountEarned:u,amountInvested:j}),"%"]})}),Object(H.jsx)(fe,{children:Object(H.jsx)(I.I,{children:u})}),Object(H.jsx)(fe,{children:Object(H.jsx)(I.I,{children:"30d"})}),Object(H.jsx)(fe,{children:Object(H.jsxs)(I.I,{children:[me({amountEarned:x,amountInvested:j}),"%"]})}),Object(H.jsx)(fe,{children:Object(H.jsx)(I.I,{children:x})}),Object(H.jsx)(fe,{children:Object(H.jsx)(I.I,{children:"365d(APY)"})}),Object(H.jsx)(fe,{children:Object(H.jsxs)(I.I,{children:[me({amountEarned:p,amountInvested:j}),"%"]})}),Object(H.jsx)(fe,{children:Object(H.jsx)(I.I,{children:p})})]}),Object(H.jsx)(ke,{fontSize:"12px",color:"textSubtle",children:i(999,"Calculated based on current rates. Compounding once daily. Rates are estimates provided for your convenience only, and by no means represent guaranteed returns.")}),Object(H.jsx)(I.q,{justifyContent:"center",children:Object(H.jsxs)(I.w,{href:"https://exchange.flintstone.finance/#/add/".concat(l),children:[i(999,"Get")," ",n]})})]})},ye=function(e){var t=e.lpLabel,n=e.quoteTokenAdresses,c=e.quoteTokenSymbol,r=e.tokenAddresses,a=e.cakePrice,o=e.apy,s=Object(I.P)(Object(H.jsx)(ge,{lpLabel:t,quoteTokenAdresses:n,quoteTokenSymbol:c,tokenAddresses:r,cakePrice:a,apy:o})),i=Object(L.a)(s,1)[0];return Object(H.jsx)(I.s,{onClick:i,variant:"text",size:"sm",ml:"4px",children:Object(H.jsx)(I.h,{})})},ve=Object(M.f)(u||(u=Object(E.a)(["\n  0% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0% 50%;\n  }\n"]))),Se=M.e.div(x||(x=Object(E.a)(["\n  background: linear-gradient(\n    45deg,\n    rgba(255, 0, 0, 1) 0%,\n    rgba(255, 154, 0, 1) 10%,\n    rgba(208, 222, 33, 1) 20%,\n    rgba(79, 220, 74, 1) 30%,\n    rgba(63, 218, 216, 1) 40%,\n    rgba(47, 201, 226, 1) 50%,\n    rgba(28, 127, 238, 1) 60%,\n    rgba(95, 21, 242, 1) 70%,\n    rgba(186, 12, 248, 1) 80%,\n    rgba(251, 7, 217, 1) 90%,\n    rgba(255, 0, 0, 1) 100%\n  );\n  background-size: 300% 300%;\n  animation: "," 2s linear infinite;\n  border-radius: 32px;\n  filter: blur(6px);\n  position: absolute;\n  top: -2px;\n  right: -2px;\n  bottom: -2px;\n  left: -2px;\n  z-index: -1;\n"])),ve),we=M.e.div(p||(p=Object(E.a)(["\n  align-self: baseline;\n  background: ",";\n  border-radius: 32px;\n  box-shadow: 0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  padding: 24px;\n  position: relative;\n  text-align: center;\n"])),(function(e){return e.theme.card.background})),Te=M.e.div(O||(O=Object(E.a)(["\n  background-color: ",";\n  height: 1px;\n  margin: 28px auto;\n  width: 100%;\n"])),(function(e){return e.theme.colors.borderColor})),Ce=M.e.div(m||(m=Object(E.a)(["\n  height: ",";\n  overflow: hidden;\n"])),(function(e){return e.expanded?"100%":"0px"})),Ie=M.e.div(h||(h=Object(E.a)(["\n  background-image: url('/images/pool-finished-sash.svg');\n  background-position: top right;\n  background-repeat: not-repeat;\n  height: 135px;\n  position: absolute;\n  right: -24px;\n  top: -24px;\n  width: 135px;\n"]))),Ae=function(e){var t=e.farm,n=e.removed,c=e.cakePrice,r=e.bnbPrice,a=e.ethereum,o=e.account,s=Object(z.a)(),i=Object(y.useState)(!1),l=Object(L.a)(i,2),b=l[0],j=l[1],d=t.isTokenOnly?t.tokenSymbol.toLowerCase():"".concat(t.tokenSymbol.toLowerCase(),"-").concat(t.quoteTokenSymbol.toLowerCase()),u=Object(y.useMemo)((function(){return t.lpTotalInQuoteToken?t.quoteTokenSymbol===N.b.BNB?r.times(t.lpTotalInQuoteToken):t.quoteTokenSymbol===N.b.CAKE?c.times(t.lpTotalInQuoteToken):t.lpTotalInQuoteToken:null}),[r,c,t.lpTotalInQuoteToken,t.quoteTokenSymbol]),x=u?"$".concat(Number(u).toLocaleString(void 0,{maximumFractionDigits:0})):"-",p=t.lpSymbol,O=t.apy&&t.apy.times(new T.a(100)).toNumber().toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}),m=t.quoteTokenAdresses,h=t.quoteTokenSymbol,f=t.tokenAddresses,k=t.isTokenOnly;return Object(H.jsxs)(we,{children:["STONE"===t.tokenSymbol&&Object(H.jsx)(Se,{}),Object(H.jsx)($,{lpLabel:p,multiplier:t.multiplier,depositFee:t.depositFeeBP,farmImage:d,tokenSymbol:t.tokenSymbol}),n&&Object(H.jsx)(Ie,{}),!n&&Object(H.jsxs)(I.q,{justifyContent:"space-between",alignItems:"center",children:[Object(H.jsxs)(I.I,{children:[s(352,"APR"),":"]}),Object(H.jsx)(I.I,{bold:!0,style:{display:"flex",alignItems:"center"},children:t.apy?Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)(ye,{lpLabel:p,quoteTokenAdresses:m,quoteTokenSymbol:h,tokenAddresses:f,cakePrice:c,apy:t.apy}),O,"%"]}):Object(H.jsx)(I.G,{height:24,width:80})})]}),Object(H.jsxs)(I.q,{justifyContent:"space-between",style:{marginBottom:12},children:[Object(H.jsxs)(I.I,{children:[s(318,"Earn"),":"]}),Object(H.jsx)(I.I,{bold:!0,children:"STONE"})]}),Object(H.jsxs)(I.q,{justifyContent:"space-between",children:[Object(H.jsxs)(I.I,{style:{fontSize:"24px"},children:[s(10001,"Deposit Fee"),":"]}),Object(H.jsxs)(I.I,{bold:!0,style:{fontSize:"24px"},children:[t.depositFeeBP/100,"%"]})]}),Object(H.jsx)(pe,{farm:t,ethereum:a,account:o}),Object(H.jsx)(Te,{}),Object(H.jsx)(R.a,{onClick:function(){return j(!b)},expanded:b}),Object(H.jsx)(Ce,{expanded:b,children:Object(H.jsx)(W,{removed:n,bscScanAddress:t.isTokenOnly?"https://bscscan.com/token/".concat(t.tokenAddresses[56]):"https://bscscan.com/token/".concat(t.lpAddresses[56]),totalValueFormated:x,lpLabel:p,quoteTokenAdresses:m,quoteTokenSymbol:h,tokenAddresses:f,isTokenOnly:k})})]})},qe=n(49),Pe=function(){var e=Object(v.g)(),t=e.url,n=e.isExact,c=Object(z.a)();return Object(H.jsx)(Be,{children:Object(H.jsxs)(I.f,{activeIndex:n?0:1,scale:"sm",variant:"subtle",children:[Object(H.jsx)(I.g,{as:qe.b,to:"".concat(t),children:c(999,"Active")}),Object(H.jsx)(I.g,{as:qe.b,to:"".concat(t,"/history"),children:c(999,"Inactive")})]})})},Be=M.e.div(f||(f=Object(E.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 32px;\n"]))),De=M.e.div(k||(k=Object(E.a)(["\n  background-color: ",";\n  height: 1px;\n  margin: 0 auto 32px;\n  width: 100%;\n"])),(function(e){return e.theme.colors.textSubtle})),Fe=function(e){var t=Object(v.g)().path,n=Object(z.a)(),c=Object(B.d)(),r=Object(B.i)(),a=Object(B.j)(),o=Object(C.m)(),s=o.account,i=o.ethereum,l=e.tokenMode,b=Object(S.b)(),j=Object(D.a)().fastRefresh;Object(y.useEffect)((function(){s&&b(Object(F.a)(s))}),[s,b,j]);var d=c.filter((function(e){return!!e.isTokenOnly===!!l&&"0X"!==e.multiplier})),u=c.filter((function(e){return!!e.isTokenOnly===!!l&&"0X"===e.multiplier})),x=Object(y.useCallback)((function(e,t){return e.map((function(e){var t=new T.a(e.blzdPerBlock||1).times(new T.a(e.poolWeight)).div(new T.a(10).pow(18)).times(A.a),n=r.times(t),c=new T.a(e.lpTotalInQuoteToken||0);return e.quoteTokenSymbol===N.b.BNB&&(c=c.times(a)),c.comparedTo(0)>0&&(n=n.div(c)),Object(g.a)(Object(g.a)({},e),{},{apy:n})})).map((function(e){return Object(H.jsx)(Ae,{farm:e,removed:t,bnbPrice:a,cakePrice:r,ethereum:i,account:s},e.pid)}))}),[a,s,r,i]);return Object(H.jsxs)(P.a,{children:[Object(H.jsx)(I.r,{as:"h1",size:"lg",color:"primary",mb:"50px",style:{textAlign:"center"},children:l?n(10002,"Stake single tokens to earn Stone"):n(320,"Liquidity Provide to earn Stone")}),Object(H.jsx)(I.r,{as:"h2",color:"secondary",mb:"50px",style:{textAlign:"center"},children:n(1e4,"Deposit Fee will be used to buyback STONE")}),Object(H.jsx)(Pe,{}),Object(H.jsxs)("div",{children:[Object(H.jsx)(De,{}),Object(H.jsxs)(q.a,{children:[Object(H.jsx)(v.a,{exact:!0,path:"".concat(t),children:x(d,!1)}),Object(H.jsx)(v.a,{exact:!0,path:"".concat(t,"/history"),children:x(u,!0)})]})]})]})}}}]);
//# sourceMappingURL=11.a1c2dcb0.chunk.js.map