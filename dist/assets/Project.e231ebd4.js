import{m as u,n as m,u as y,q as _,s as f,r as g,o as x,g as k,i as I,k as c}from"./vendor.e934ad94.js";import{g as j}from"./index.f8f03fa5.js";import{_ as v}from"./index.58020c01.js";const N=[{title:"\u5408\u540C\u7F16\u53F7",dataIndex:"contractNo",key:"contractNo",align:"center"},{title:"\u9879\u76EE\u540D\u79F0",dataIndex:"projectName",key:"projectName",align:"center"},{title:"\u5408\u4F5C\u5355\u4F4D",dataIndex:"partner",key:"partne",align:"center"},{title:"\u5408\u4F5C\u5355\u4F4D\u6240\u5C5E\u5730\u5740",dataIndex:"companyAddress",key:"companyAddress",align:"center"},{title:"\u9879\u76EE\u8D1F\u8D23\u4EBA",dataIndex:"projectLeader",key:"projectLeader",align:"center"},{title:"\u6240\u5C5E\u5355\u4F4D",dataIndex:"company",key:"company",align:"center"},{title:"\u6765\u6B3E\u5355\u4F4D",dataIndex:"payer",key:"payer",align:"center"},{title:"\u6765\u6B3E\u65F6\u95F4",dataIndex:"paymentTime",key:"paymentTime",align:"center"},{title:"\u6765\u6B3E\u65F6\u95F4",dataIndex:"paymentTime",key:"paymentTime",align:"center"},{title:"\u91D1\u989D/\u5143",dataIndex:"amount",key:"amount",align:"center"},{title:"\u529E\u7406\u5165\u8D26\u65F6\u95F4",dataIndex:"entryTime",key:"entryTime",align:"center"}];const T={class:"project-content"},b={setup(h){let d=u();m();let r=y(),o=_([]),i=[...N];async function p(){let e=r.state.userName,t="";e==="\u5085\u84C9"&&(t="123456");let l=await j({user_name:e,pass_word:t});console.log(l);let a=[];l.filter(n=>{(n.projectLeader===e||e==="\u5085\u84C9")&&a.push(n)}),o.value=a}return f(()=>{r.state.userName===""&&d.push("/user"),p()}),(e,t)=>{const s=g("a-table");return x(),k("div",T,[I(s,{style:{width:"100%"},dataSource:c(o),columns:c(i),pagination:!1,scroll:{x:1500,y:500}},null,8,["dataSource","columns"])])}}};var D=v(b,[["__scopeId","data-v-3d1b84f8"]]);export{D as default};