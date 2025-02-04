---
title: API3 DAO
---

# {{$frontmatter.title}}

<TocHeader />
<TOC class="table-of-contents" :include-level="[2,3]" />

API3 is governed by a Decentralized Autonomous Organization, DAO. The DAO is a collaborative effort to build, manage and monetize dAPIs at scale. To achieve this in a fully decentralized way, the incentives of the participants are reconciled through the governance, security, and [value capture utilities](dao-pool.md#token-utilities) of the API3 token.

The API3 project has a completely open, decentralized and direct governance model. Any API3 token holder can stake the DAO pool and obtain direct voting privileges in the DAO and thus participate in the governance of the project directly. In addition, stakers receive [inflationary rewards](dao-pool.md#inflationary-rewards) and any additional benefits that the DAO may decide on in the future. The staked API3 tokens will back an on-chain [insurance service](dao-pool.md#insurance-service) as collateral to provide dAPI users with quantifiable and trustless security guarantees.

The DAO votes on high-level matters such as staking incentives and collateralization. Additionally, the DAO will give out grants from the DAO bank and decide on the general direction of the project.

![dao](../assets/images/dao.png)

## DAO Structure

The DAO organizational structure is comprised of  hierarchical teams and subDAOs both of which manage, streamline and secure the success of the DAO.

### Hierarchical Teams

More granular tasks are conducted through hierarchical team structures for scalable governance.

The expected workflow is to form off-chain teams and apply for grants to execute one-time projects or continuous operations that will benefit the DAO. The team makes the grant application with a multisig that has the team members assigned as users, and the DAO grants the funds to the multisig if the grant proposal is accepted.

This team-based governance scheme is scalable in terms of gas costs, as it requires fewer proposals to be voted on at the DAO level. It is also more scalable in practical terms, as it does not require the constant attention of all governing parties to a wide variety of minute details. Furthermore, it allows critical operations such as dAPI management to be executed swiftly and based on expert opinion. As API3 operations scale up, this governance hierarchy may demand additional layers, which implies subDAOs.

To learn more about hierarchical team structures <a href="/api3-whitepaper-v1.0.1.pdf#AI3%20DAO" target="api3-docs">see Section 5.3 of the API3 Whitepaper</a>.

### subDAO

The DAO governs by selectively allocating funds and delegating authority. When a task reaches a scale that can no longer be fulfilled by a team, it is assigned to a subDAO.

> ![dao-subdao-teams](../assets/images/dao-subdao-teams.png)

## Effectuation

The DAO focuses on two principles for its governing structure to be effective.

- Malicious Damage
- Transparency

### Malicious Damage

Firstly, to limit the amount of damage a malicious or incompetent team may cause, the authority that the team has must be constrained to a bare minimum, which is also known as the “principle of least privilege”. For example, a dAPI management team should never be able to completely recompose a dAPI that is under use, but should only be able to switch individual oracles in and out with a long enough cool-down period to ensure that their authority cannot be abused to a significant degree. Similarly, milestones and deliverables should be utilized to grant teams only the funds they need to carry out the specific responsibilities they have at the time. 

### Transparency

The second principle is transparency. For the DAO to be able to assess its performance, the team must report to the DAO in great detail. These reports will have the additional benefit of providing accountability and allow the dAPI users and the general public to be able to audit the operations of API3 at all times.
