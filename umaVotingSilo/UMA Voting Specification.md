---
sidebar_label: 'Specification Doc 📝'
sidebar_position: 1
---

# UMA Delegated Voting
# Project Specification

| Info                  |                                          |
| -----------------     | ---------------------------------        |
| Project Name          | UMA Delegated Voting             |
| Author                | Ross                                     |
| Date                  | 2022.09.12                               |
| Discord Handle        | Ross 🍠#2221                             |
| Status                | [draft]                                  |
| Discourse             | [UMA Delegated Voting - Project Specification Discussion](<https://forum.yam.finance/t/uma-delegated-voting-project-specification/1736>)             |
| Snapshot              | [Insert link when available]             |

---

> *This document serves to make the goals, requirements, scope, and risks of a new project clear in order to help inform YAM token holders when making decisions about funding work to build it.*

## Project Summary 📝

### What is the goal and purpose of the project?

The purpose of this project is to participate in UMA governance and voting in the UMA DVM oracle using the UMA tokens that the YAM treasury holds. Voting correctly in UMA DVM disputes and governance votes earns UMA (0.05% of the total supply is minted on every vote and given out to voters who voted with the majority). The YAM DAO owns approximately [41,873 UMA tokens](https://etherscan.io/address/0x8348c5ec31d486e6e4207fc0b17a906a0806550d), worth approximately $116,400 at the time of writing, which can be used to vote and earn rewards. The Goal is to grow the value and number of UMA tokens that the YAM treasury holds and to continue to cultivate the DAO's relationship with UMA.

### What problem does the project solve?

Treasury UMA does not earn a return when sitting in the treasury and is not being used to better the UMA protocol and actively increase it's value.

If the DAO is committed to having a ongoing relationship with the UMA team and Risk Labs, and also wants to hold UMA and earn a return on that UMA, then this project allows for all of those. Voting earns UMA and the act of discussing and participating in the UMA ecosystem re-affirms our relationship with the UMA protocol.

### YAM / Ecosystem Benefit 

> *What value does your project add to YAM and the wider ecosystem? How do we measure that benefit?*

There are 2 main benefits; one direct, and one indirect.

The direct benefit are the earned UMA rewards from voting. These vary month by month based on the number of disputes that happen as well as the number of other voters. I have been voting with the UMA on behalf of YAM for the last 2 months and the treasury has earned ~1,285 UMA tokens (valued at $3,520). If we round to 500 UMA per month as an estimate, we can predict roughly 6000 UMA per year earned, which is ~15% APR denominated in UMA tokens. These revenues need to be balanced with the costs to vote (the cost of the grant) to get a "profit" number.

The indirect benefit is that of community building and business development. We have had a fruitful relationship with UMA and the UMA team. While work on YamSynths has stopped for the time being, the UMA team has been supportive of us in the past and are a good connection for the DAO to have. Their oracle product is useful and they continue to look for new innovative use cases for it. The use case for YamSynths has been difficult to get right, but may bear fruit in the future and our continued relationship with UMA adds value to the YAM ecosystem. Voting in governance and DVM disputes helps solidify this relationship, keeps the DAO visible in their community, and provides a way for DAO members to understand UMA products better, with the hope that they may choose to build on top of our existing codebase, or come up with new products.

## Design and Project Scope 🏗️

### Project Scope

> *What are the different elements that need to be built or designed to complete this project?*

#### Step 1. Deploy the contracts necessary to allow a third party to vote in UMA governance with YAM treasury UMA tokens. The following substeps are needed: 

   1. [optional] the DAO should determine who it wants to be its voting delegate for its UMA tokens. (This can be decided later if necessary)

   2. An instance of UMA's 2-Key designated voting contract needs to be created with the correct YAM governance contract as the owner. The default parameter when creating this contract is that the contract creator will be set as the voting delegate.

      This is done by calling the newDesignatedVoting() function on the UMA [designatedVotingFactory](https://etherscan.io/address/0xDE7c02aD2b925587Bd16724810f994a2948c4a38#writeContract) contract and entering the [YAM timelock contract](https://etherscan.io/address/0x8b4f1616751117c38a0f84f9a146cca191ea3ec5) in the address field. This can alternately be done using the UMA voting dApp at <https://vote.umaproject.org>

      Once this contract is created, it can be checked according to these instructions: <https://contracts.docs.umaproject.org/uma-tokenholders/voting-2key#recommended-verify>

   3. The DAO should then send a test transaction fund the contract with a test amount of UMA (i.e. 2 UMA) and then withdraw some UMA in order to confirm that the contract works. If some UMA is left over in the contract, the *designated voter* can then test the voting process. This can be done as part of one of the monthly on-chain transactions.

       ***All code is for reference only and should not be assumed to be totally accurate***

       The code to be used when interacting with the YAM governor would look something like this:

      ``` js
      // Send test amount of UMA to twoKeyContract

      // set YAM Treasury as contract to interact with
      targets[x] = address(RESERVES);
      //call oneTimeTransfers() function to send test funds
      signatures[x] = "oneTimeTransfers(address[],uint256[],address[])";
         address[] memory whosOne = new address[](1);
         uint256[] memory amountsOne = new uint256[](1);
         address[] memory tokensOne = new address[](1);
         // where to send
         whosOne[0] = address(twoKeyContract);
         // How much to send
         amountsOne[0] = uint256(testDepositAmount);
         // what token to send
         tokensOne[0] = address(UMA);
      calldatas[x] = abi.encode(whosOne, amountsOne, tokensOne);

      // Withdraw test amount of UMA from twoKeyContract
      // set twoKeyContract as contract to interact with
      targets[x+1] = address(twoKeyContract);
      // call withdrawERC20() function
      signatures[x+1] = "withdrawErc20(address,uint256)";
      // set token and amount to withdraw
      calldatas[x+1] = abi.encode(address(UMA), uint256(testWithdrawAmount));
      ```


   4. once the UMA has been sent, the delegate should confirm that they can vote with the contract, claim rewards to the contract, etc.This can all be done via the UMA voting dApp at vote.umaproject.org.

   5. The DAO can choose to change the delegate at this point. It would do so by calling a different function on the 2-key contract called resetMember() with the new delegate in the address field and `1`  in the roleId field. The code would look like this:

       ``` js
      // set twoKeyContract as contract to interact with
      targets[0] = address(TwoKeyContractAddress);
      //call resetMember() function
      signatures[0] = "resetMember(uint256, address)";
      // choose role and new delegate address
      calldatas[0] = abi.encode(1, address(newDelegate));
      ```

      After the above 5 steps, the balance of the UMA in the treasury can be transferred to the 2-key contract per step 3 above.

      ***The [testing was been completed](https://etherscan.io/tx/0xdac43c5cf53ad5e7225908b4330848b877e62e1b19092cae0b23e9e7c718e490/) as of mid-June, 2022 and the rest of the UMA [was sent to the Two Key Contract](https://etherscan.io/tx/0x8ca31ff377a6a16fbb2bda36d6f395946f4eeea04859fe45a97a4b6ebec34317) in mid-July, 2022***

#### Step 2. The designated voter should do the work to vote on UMA DVM disputes and governance actions as they occur.

UMA DVM disputes can occur at any time, depending on the contracts that are expiring or if there are disputes on the Across Bridge. Voting in these disputes occurs the following day after they are made and last for 48 hours. The first 24 hours are when voting occurs and the next are when the votes are revealed. The voter must participate in both steps, and vote correctly to receive a reward.

#### Step 3. Write documentation that helps future delegates and YAM governance participants understand and participate in UMA governance.

### Alternatives Considered

> *Are there other potential ways to solve this problem? Why choose this one?*

I see 3 alternatives to doing this work:

1. Do nothing. Leave the UMA sitting in the YAM Treasury. This costs the least upfront and has no ongoing costs, but the UMA earns nothing and does not grow the relationship between YAM and UMA.
2. Invest the UMA somewhere to earn a return on the UMA. This may earn a return on the UMA, although there are not a lot of places to deposit UMA for yield. It probably won't have ongoing maintanence costs, but also probably wont grow the relationship between YAM and UMA.
3. Sell the UMA for something else. If the DAO does not want to hold UMA, participate in the ecosystem, or further the relationship with UMA then it could be sold and invested in other ways.

As mentioned above, If the DAO is committed to having a ongoing relationship with the UMA team and Risk Labs, and also wants to hold UMA and earn a return on that UMA, then this project allows for all of those, at the cost of paying someone to vote on behalf of the DAO.

### Project Requirements

> *Describe what characteristics the project `MUST`, `SHOULD`, and `COULD` have.*

#### Hard Requirements

- YAM token holders, via governance `MUST` be able maintain control of the UMA that is being voted with.
   - YAM token holders, via governance `MUST` be able to change the *designated voter*.
   - YAM token holders, via governance `MUST` be able to remove the UMA from the voting contract.
   - YAM token holders, via governance `MUST` be able to add UMA to the voting contract.
- YAM token holders `MUST` be able to see how the *Designated Voter* has voted.
- The *Designated Voter* `MUST NOT` be able to remove UMA from the contract.
- The *Designated Voter* `MUST` be able to vote in all UMA votes.
- The *Designated Voter* `MUST` be able to claim voting rewards on behalf of the DAO.

#### Soft Requirements

- The *Designated Voter* `SHOULD` provide timely updates on their votes and make it easy to see how they voted.
- There `SHOULD` be documentation that enables a average YAM token holder to understand how the project works.
- The *Designated Voter* `COULD` allow YAM token holders to give input in votes, or design a system to automate that input.

## Participants and User Flow 👨‍🚀

### Participants/Users of the Project

> *List the participants who are expected to use and interact with the project in its expected completed form. Describe what their role is and what skills they need to perform this role.*

#### User Group 1

- **Role**: Designated Voter

- **Necessary Skills**: Must be able to interact with the UMA smart contracts to vote and understand the UMA system well enough to make decisions about votes that maximize the returns for the DAO. They should be able to communicate their rationale to the UMA and YAM communities.

- **How they interact with the project**: The *Designated Voter* will need to be a member of the UMA discord to receive notifications about votes and receive the pertinent information about them. They will vote using existing UMA interfaces (https://vote.umaproject.org) using their own Ethereum wallet and infrastructure. They should be willing to engage in discussions about the validity of disputes and do their best to verify the parameters of the disputes.

#### User Group 2

- **Role**: YAM Token Holder

- **Necessary Skills**: They should be able to determine whether the *Designated Voter* is doing a good job or not. This includes checking if they have voted and whether they have voted correctly. They should be able to propose a snapshot vote to remove the designated voter if desired and work with Gov-Ops to execute that vote.

- **How they interact with the project**: In the initial stage of the project, token holders can determine if the voter is performing their work by reviewing UMA discord to see votes and check the deployed Two Key Contract to see whether the *Designated Voter* has voted and revealed votes. They can either use etherscan to look at the deployed voting contract ([0x8348c5EC31D486e6E4207fC0B17a906A0806550d](https://etherscan.io/address/0x8348c5ec31d486e6e4207fc0b17a906a0806550d)) or the UMA provided [Dune dashboard](https://dune.com/uma_protocol/uma-protocol).

### User Flow

> *What is the full user flow for this project. Is this all part of the scope?*

Once the Two Key voting Contract is deployed and funded by the treasury (see steps above in scope), the *Designated Voter* will watch for UMA votes to participate in, and when available do the research needed to make an informed, best choice vote. They should review the evidence posted in the "Evidence Rationale" section of the UMA forum and may post their own rationale. Before the end of the commit period, they should connect to https://vote.umaproject.org to submit their votes, and then return within 24 hours to reveal the votes. If they voted correctly, they will be rewarded with UMA tokens, which they can claim and are deposited into the two key contract to be used for future votes.

Yam Token holders can follow along and review this process in real time by querying the Ethereum blockchain and/or using the dune dashboard listed above. If they feel that the *designated voter* is not performing their role effectively they can create a proposal to change the voting address in the contract and stop any grants that are being paid out.

## Risks ❗

### Dependencies

> *Are there other projects or contracts that the project will interact with? How will they do so? What are the security risks from these interactions?*

The main dependency here is that the [UMA two key voting contract](https://etherscan.io/address/0x8348c5ec31d486e6e4207fc0b17a906a0806550d#code) and [contract factory](https://etherscan.io/address/0xde7c02ad2b925587bd16724810f994a2948c4a38#code). If either are flawed and exploitable this would put the treasury owned UMA at risk. The DAO is relying on the engineering skills of the UMA team and their auditors to mitigate this risk. This contract has been used extensively in the past and should be safe.

Another risk is that a governance transaction to add or remove UMA from the two key contract could result in lost funds. These transactions should be checked before being executed, as all YAM on-chain transactions are. Generally, the difficulty level with interacting with the two key contract is low, so this should be a small risk.



### Security Assumptions

> *What security assumptions need to be made for this project to be successful?*

The security of the two key contract, as mentioned above is the main assumption. Assuming the contract has no hidden problems, there is no way for the *Designated Voter* to steal funds or do anything other than vote and claim rewards.

Another risk is that a governance transaction to add or remove UMA from the two key contract could result in lost funds. These transactions should be checked before being executed, as all YAM on-chain transactions are. Generally, the difficulty level with interacting with the two key contract is low, so this should be a small risk.

### Financial Risks

> *Are there financial risks to either the DAO or to users of the project?*

There is no risk of losing funds due to voting poorly as there is no penalty for voting incorrectly, other than missing out of potential rewards. If there is a contract exploit as discussed in the last 2 sections then funds could be at risk. 

The price of the UMA token is not something that the DAO or this project can control and like most cryptocurrencies is very volatile.

## Comparable Projects 👀

> *Are there similar examples to the proposal that token holders can use to compare or understand the scope?*

Not that I can think of. If you have any suggestions please let me know!

## Project Time-Frame ⏲️

> *Please provide a rough estimate of the time expected to fulfill different parts of the scope, as well as full completion of the project. This does not need to detail all parts, but should provide a general overview of how long the project may take. More detailed information should live in grant applications*

All of the testing and deployment of the contracts has already been completed. The work still left to be done is the actual voting, which is a continuous job and the time committment will vary by the number and complexity of the different votes and disputes. Based on the prior 2 months of votes, I expect the time committment to be between 5 and 10 hours per month.

Creating additional documentation, writing summaries of votes, and potentially creating interfaces to make reviewing the votes easier will take additional time, but they are all secondary to the key mission of voting with the UMA, and can be funded as token holders see fit.

## Additional Information ❓

> *Please add any additional information here that doesn't have a place to go above and you think is important to fully specify this project.*

I have been voting on UMA proposals for the last 2 months. So far I haven't voted incorrectly, although I did miss a reveal period once. You can read posts on the process here:

- <https://forum.yam.finance/t/report-on-voting-with-uma/1694>
- Update in June compensation request: <https://forum.yam.finance/t/22-07-06-specific-architectures-ross-contributor-compensation-request/1698#voting-with-uma-yambassadors-13>
- Update in July Compensation Request: <https://forum.yam.finance/t/22-09-05-specific-architectures-ross-contributor-compensation-request/1730#voting-with-uma-yambassadors-15>


---

:heart: :rocket: :sweet_potato:

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
