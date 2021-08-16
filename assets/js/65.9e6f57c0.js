(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{564:function(t,e,a){"use strict";a.r(e);var r=a(8),o=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"frontmatter-title"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[t._v("#")]),t._v(" "+t._s(t.$frontmatter.title))]),t._v(" "),a("TOC",{staticClass:"table-of-contents",attrs:{"include-level":[2,3]}}),t._v(" "),a("p",[t._v("An oracle is an agent that acts as an intermediary between a smart contract platform and an API.\nIn other words, a decentralized application can use an oracle to call an API.")]),t._v(" "),a("p",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://github.com/api3dao/api3-docs/raw/master/figures/oracle.png"}})]),t._v(" "),a("p",[t._v("An oracle consists of two parts:")]),t._v(" "),a("ul",[a("li",[t._v("The oracle node that acts as a proxy, i.e., listens for requests made on the blockchain, calls the API over the Web, fulfills the requests by making transactions on the blockchain.\nNote that the oracle node is a traditional application that needs hosting.")]),t._v(" "),a("li",[t._v("The smart contracts that implement the protocol defining how decentralized applications can make requests to the oracle and receive responses.\nThis part is deployed on-chain and runs trustlessly, i.e., no specific party needs to host it.")])]),t._v(" "),a("p",[t._v("Based on this information, it looks like simply having an oracle solves the API connectivity problem.\nHowever, there is an important point to consider:\nWho will host the oracle node?")]),t._v(" "),a("ol",[a("li",[t._v("If the "),a("RouterLink",{attrs:{to:"/next/fundamentals/apis.html#api-provider"}},[t._v("API provider")]),t._v(" hosts the oracle node, the oracle is called a "),a("strong",[t._v("first-party oracle")]),t._v(".")],1),t._v(" "),a("li",[t._v("If a third-party middleman hosts the oracle node, the oracle is called a "),a("strong",[t._v("third-party oracle")]),t._v(".")])]),t._v(" "),a("p",[a("em",[t._v("See our article, "),a("a",{attrs:{href:"https://medium.com/api3/first-party-vs-third-party-oracles-90356e3cffe5",target:"_blank",rel:"noopener noreferrer"}},[t._v("First-Party vs Third-Party Oracles"),a("OutboundLink")],1),t._v(" for a comparison of the two types of oracles.")])]),t._v(" "),a("p",[t._v("Third party oracles are both insecure and expensive (see the "),a("a",{attrs:{href:"https://github.com/api3dao/api3-whitepaper/blob/master/api3-whitepaper.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("API3 Whitepaper"),a("OutboundLink")],1),t._v(" for a detailed explanation).\nIn contrast, first-party oracles are both secure and cost-efficient due to not having a middleman on the interface path.")])],1)}),[],!1,null,null,null);e.default=o.exports}}]);