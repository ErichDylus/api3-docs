(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{477:function(e,t,r){e.exports=r.p+"assets/img/developer-overview.d834ee8d.png"},478:function(e,t,r){e.exports=r.p+"assets/img/sponsor-overview.a0838911.png"},565:function(e,t,r){"use strict";r.r(t);var o=r(8),s=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"frontmatter-title"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[e._v("#")]),e._v(" "+e._s(e.$frontmatter.title))]),e._v(" "),o("TocHeader"),e._v(" "),o("TOC",{staticClass:"table-of-contents",attrs:{"include-level":[2,3]}}),e._v(" "),o("p",[e._v("A "),o("strong",[e._v("Developer")]),e._v(" is you, if you wish to consume off-chain data from APIs. You can do so using Airnodes. An Airnode is a first-party oracle that will push off-chain API data to your on-chain contract. In the diagram below your contract is called a requester. It will make a request to the on-chain RRP protocol contract (AirnodeRrp.sol) that will queue the request. The off-chain Airnode will access the queue, get the API data and perform a callback to the requester.")]),e._v(" "),o("p",[e._v("In summary you only need to do two things.")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("Call "),o("code",[e._v("makeRequest()")]),e._v(" on the AirnodeRrp.sol contract which returns a "),o("code",[e._v("requestId")]),e._v(".")])]),e._v(" "),o("li",[o("p",[e._v("Add a "),o("code",[e._v("myFulfill()")]),e._v(" function (call it what you like) to your requester (your contract) where the off-chain Airnode can send the requested data when ready. The data includes the same "),o("code",[e._v("requestId")]),e._v(" returned when the request was made.")])]),e._v(" "),o("li",[o("p",[e._v("Sponsor your requester.")])]),e._v(" "),o("li",[o("p",[e._v('For the Airnode you wish to access, derive a "sponsor\'s wallet" and fund the wallet.')]),e._v(" "),o("blockquote",[o("p",[o("img",{attrs:{src:r(477),alt:"call"}})])])])]),e._v(" "),o("h2",{attrs:{id:"what-is-a-requester"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#what-is-a-requester"}},[e._v("#")]),e._v(" What is a Requester?")]),e._v(" "),o("p",[e._v("The term requester is important to remember. It is mentioned in these docs and in the GitHub code. When "),o("em",[e._v("requester")]),e._v(" is mentioned, the reference is to your contract that calls an Airnode. As an example see the "),o("code",[e._v("myContract.sol")]),e._v(" contract in the diagram above, it is a requester.")]),e._v(" "),o("h2",{attrs:{id:"what-is-a-sponsor"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#what-is-a-sponsor"}},[e._v("#")]),e._v(" What is a Sponsor?")]),e._v(" "),o("p",[e._v('A sponsor is the public address of a wallet you control. You will use the public address to sponsor  requesters and to derive a new "sponsor\'s wallet" for each Airnode you use. Should you stop using an Airnode the funds from the derived "sponsor\'s wallet" can be returned to your public address.')]),e._v(" "),o("blockquote",[o("p",[o("img",{attrs:{src:r(478),alt:"image"}})])]),e._v(" "),o("p",[e._v('A developer decides to build a requester contract that makes requests to a specific Airnode. Using the xpub of the Airnode and the public address of an Ethereum account they control, the developer derives the address of their "sponsor\'s wallet" for the Airnode. The developer funds this wallet, then calls setSponsorshipStatus() in AirnodeRrp with the address of their requester contract to sponsor it. This means the developer is now the sponsor of their requester contract, i.e., the requester contract can make Airnode requests that will be fulfilled by their sponsor wallet.')]),e._v(" "),o("DesignatedWalletWarning")],1)}),[],!1,null,null,null);t.default=s.exports}}]);