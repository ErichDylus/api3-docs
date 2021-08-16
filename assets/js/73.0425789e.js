(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{580:function(e,t,a){"use strict";a.r(t);var r=a(8),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"frontmatter-title"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[e._v("#")]),e._v(" "+e._s(e.$frontmatter.title))]),e._v(" "),a("TocHeader"),e._v(" "),a("TOC",{staticClass:"table-of-contents",attrs:{"include-level":[2,3]}}),e._v(" "),a("h2",{attrs:{id:"earning-rewards"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#earning-rewards"}},[e._v("#")]),e._v(" Earning Rewards")]),e._v(" "),a("p",[e._v("Earning rewards is simple: everyone who owns shares of the DAO pool (everyone who has staked API3 tokens into the DAO pool contract) will earn rewards as they are added to the DAO pool. When you schedule tokens to be unstaked, you stop earning rewards for those tokens.")]),e._v(" "),a("p",[e._v('Remember that when you stake, you receive non-transferable pool shares equal to the current total number of issued shares divided by the total number of tokens staked. Since the reward adds additional tokens to the pool, the "price" for one share will not always be one token.')]),e._v(" "),a("h2",{attrs:{id:"reward-calculation-and-distribution"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reward-calculation-and-distribution"}},[e._v("#")]),e._v(" Reward Calculation And Distribution")]),e._v(" "),a("p",[e._v("Rewards are added as staked API3 tokens into the DAO pool each time the "),a("code",[e._v("mintReward")]),e._v(" function is called. "),a("code",[e._v("mintReward")]),e._v(' is callable by anyone, once per "epoch" (currently 1 week). When it is called, an amount of API3 tokens is minted and added to the DAO pool:')]),e._v(" "),a("blockquote",[a("p",[a("code",[e._v("rewardAmount = totalStakedTokens * APR * epochLength / epochsPerYear / 100")])])]),e._v(" "),a("p",[e._v("In other words, "),a("em",[e._v("the reward is the annual percentage (APR) increase divided by the number of epochs per year (currently ~52)")]),e._v(".")]),e._v(" "),a("p",[e._v("In addition, each time "),a("code",[e._v("mintReward")]),e._v(" is called, the annual percentage (the reward rate) is updated up or down by APR update step size (1%), according to whether the total number of staked tokens is above or below its target. The initial target is 50%, so if the total number of staked tokens is less than 50% of the total token supply when "),a("code",[e._v("mintReward")]),e._v(" is called, APR will be raised by 1% for the next reward payout (and vice versa). Thus, APR will constantly be adjusted, but it will always stay between a designated maximum and minimum -- currently 75% and 2.5% respectively.")]),e._v(" "),a("h2",{attrs:{id:"reward-withdrawal"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reward-withdrawal"}},[e._v("#")]),e._v(" Reward Withdrawal")]),e._v(" "),a("p",[e._v("Rewards withdrawals are baked into default withdrawals, except that rewards are locked for 1 year after minting. As a staker, your pool shares will always reflect a proportional right to the pool of staked tokens, including any rewards that have been minted. When you unstake and withdraw your tokens, you will receive:")]),e._v(" "),a("ul",[a("li",[e._v("your tokens,")]),e._v(" "),a("li",[e._v("plus any share of the rewards you earned,")]),e._v(" "),a("li",[e._v("minus rewards that were added to the pool within the last year, which will remain staked.")])])],1)}),[],!1,null,null,null);t.default=o.exports}}]);