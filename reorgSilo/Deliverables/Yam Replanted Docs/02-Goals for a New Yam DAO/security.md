---
sidebar_position: 7
sidebar_label: "Security"
---

# Security

💡 How do we keep the DAO safe?


While security is not the main focus of the Yam ReOrg, it is important that we are always considering how any changes will affect the security of the DAO. Due to the adversarial nature of blockchains and decentralized networks, there are novel and unpredictable attack vectors that can be used to target DAOs. These are threats that must be considered and designed for when building on open systems. There are 2 main points to consider

- How do we prevent/stop direct attacks that utilize the existing DAO infrastructure or manipulate users to gain access to sensitive information or the treasury.
- Can we do this and also prevent indirect attacks like censorship and gatekeeping while maintaining standards of quality and preventing spam and greifing?

Defending against direct attacks on a DAO is the main concern usually brought up when discussing security. A typical direct attack type involves exploiting flaws in a DAO smart contract (often called a hack). It may manipulate a flaw in how the code is expected to run or directly target privileged individuals to gain access to high level permissions or private keys. These attacks can be protected against by assuring that the code used to run the DAO is battle tested and audited, and access to accounts that can act unilaterally is limited.

Another form of attacks are governance attacks, where the attacker acquires tokens and attempts to use that voting power to manipulate the DAO or drain the treasury. This type of attack operates within the bounds of how the governance system is expected to work at a technical level, but is often outside the bounds of the social consensus for how the system should work. Defending against these attacks requires a clear understanding of what the social consensus around the workings of the system is. This understand enables good actors within the system to identify and respond to governance actions that fall outside the system's norms.

Like most other design considerations around DAOs, there are a number of trade-offs to consider.

- More rigor when considering security leads to longer development times and higher costs (at least in the short run, but less risk of catastrophic failure)
- A more open governance model leads to more attack surface area and puts more responsibility on token holders to be aware of the risks. To mitigate these risks, token holders may delegate security responsibilities to other but…
- Strong protections against governance attacks can lead to new censorship vectors that undermine the core purpose of the DAO in the first place. The Guardian multi-sig is an example. This contract helps guard against governance attacked, but in the wrong hands could also prevent the DAO from passing any governance votes.

We believe that the security of the DAO is actually quite strong. The compound governor contract is battle tested and the guardian contract is a good intermediate step to keep things safe. There is probably a higher risk of social engineering attacks and the abuse of trusted relationships to exploit the DAO than there is of a successful governance attack*.

❓ * There has been a past attempt to steal the treasury via a normal governance attack and it was relatively easily thwarted.
