import{g as p}from"./index.d842e887.js";import{m as u,n as m,u as y,q as _,s as g,r as x,o as f,g as k,i as I,k as s}from"./vendor.0e419e0b.js";import{_ as j}from"./index.272c34c7.js";const v=[{title:"\u5408\u540C\u7F16\u53F7",dataIndex:"contractNo",key:"contractNo",align:"center"},{title:"\u9879\u76EE\u540D\u79F0",dataIndex:"projectName",key:"projectName",align:"center"},{title:"\u5408\u4F5C\u5355\u4F4D",dataIndex:"partner",key:"partne",align:"center"},{title:"\u5408\u4F5C\u5355\u4F4D\u6240\u5C5E\u5730\u5740",dataIndex:"companyAddress",key:"companyAddress",align:"center"},{title:"\u9879\u76EE\u8D1F\u8D23\u4EBA",dataIndex:"projectLeader",key:"projectLeader",align:"center"},{title:"\u6240\u5C5E\u5355\u4F4D",dataIndex:"company",key:"company",align:"center"},{title:"\u6765\u6B3E\u5355\u4F4D",dataIndex:"payer",key:"payer",align:"center"},{title:"\u6765\u6B3E\u65F6\u95F4",dataIndex:"paymentTime",key:"paymentTime",align:"center"},{title:"\u6765\u6B3E\u65F6\u95F4",dataIndex:"paymentTime",key:"paymentTime",align:"center"},{title:"\u91D1\u989D/\u5143",dataIndex:"amount",key:"amount",align:"center"},{title:"\u529E\u7406\u5165\u8D26\u65F6\u95F4",dataIndex:"entryTime",key:"entryTime",align:"center"}];const N={class:"project-content"},T={setup(b){let l=u();m();let r=y(),o=_([]),c=[...v];async function d(){let t=await p({user_name:"\u5085\u84C9",pass_word:"123456"});console.log(t);let e=r.state.userName,a=[];t.data.filter(n=>{console.log(e),(n.projectLeader===e||e==="\u5085\u84C9")&&a.push(n)}),o.value=a}return g(()=>{r.state.userName===""&&l.push("/user"),d()}),(i,t)=>{const e=x("a-table");return f(),k("div",N,[I(e,{style:{width:"100%"},dataSource:s(o),columns:s(c),pagination:!1,scroll:{x:1500,y:720}},null,8,["dataSource","columns"])])}}};var A=j(T,[["__scopeId","data-v-1028cac2"]]);export{A as default};
