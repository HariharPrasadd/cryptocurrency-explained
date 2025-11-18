import type { GameTree } from '@/types/game';

export const gameTree: GameTree = {
  'node-0': {
    id: 'node-0',
    title: 'Introduction',
    text: `Welcome! You and your friends - Alice, Bob, and Charlie - go out for dinner frequently. You're tired of exchanging cash every time someone pays for pizza or covers someone's coffee. You want to create a system to track who owes what.

What should you do?`,
    choices: [
      {
        id: 'choice-0a',
        text: 'Everyone just remembers who owes what',
        targetNodeId: 'node-1a',
      },
      {
        id: 'choice-0b',
        text: 'Create a shared communal ledger where anyone can write down transactions',
        targetNodeId: 'node-2',
      },
      {
        id: 'choice-0c',
        text: 'Designate one person to track everything',
        targetNodeId: 'node-1b',
      },
    ],
  },
  'node-1a': {
    id: 'node-1a',
    title: 'Memory Dead End',
    text: `After a month, chaos erupts. Alice swears she paid Bob $40, but Bob has no memory of it. Charlie claims he doesn't owe anything to anyone. Without records, arguments break out and friendships strain.

You need a better system - one with actual records!`,
    isDeadEnd: true,
    returnTo: 'node-0',
  },
  'node-1b': {
    id: 'node-1b',
    title: 'Central Authority Dead End',
    text: `You designate Alice to track everything. It works for a while... until Alice goes on vacation for two weeks. No one can record transactions. Plus, Bob starts to suspect Alice might be fudging the numbers in her favor. How can anyone verify?

You need a system everyone can access and verify!`,
    isDeadEnd: true,
    returnTo: 'node-0',
  },
  'node-2': {
    id: 'node-2',
    title: 'The Ledger Problem',
    text: `Great! You create a website where anyone can add a line:
- 'Alice pays Bob $20'
- 'Bob pays Charlie $15'
- 'Charlie pays Alice $30'

At the end of each month, you'll settle up with real cash.

But there's a problem... Bob just added a line: 'Alice pays Bob $1000'

Alice never approved this! What do you do?`,
    choices: [
      {
        id: 'choice-2a',
        text: "Delete Bob's entry and create rules about who can write what",
        targetNodeId: 'node-2a',
      },
      {
        id: 'choice-2b',
        text: 'Require some proof that Alice actually approved the transaction',
        targetNodeId: 'node-3',
      },
      {
        id: 'choice-2c',
        text: 'Make the ledger read-only and have people submit requests',
        targetNodeId: 'node-2b',
      },
    ],
  },
  'node-2a': {
    id: 'node-2a',
    title: 'Manual Moderation Dead End',
    text: `You decide to manually review every transaction before it's added. This works... until there are 50 transactions in a day. You can't keep up. Plus, who gets to decide what's valid? What if the moderator is corrupt or makes mistakes?

You need an automatic, trustless way to verify transactions!`,
    isDeadEnd: true,
    returnTo: 'node-2',
  },
  'node-2b': {
    id: 'node-2b',
    title: 'Request System Dead End',
    text: `People submit transaction requests, and Alice must approve transfers from her account. But now Alice goes on vacation and can't approve anything for weeks. The system grinds to a halt.

Plus, this still requires trusting whoever manages the request system. You need something better!`,
    isDeadEnd: true,
    returnTo: 'node-2',
  },
  'node-3': {
    id: 'node-3',
    title: 'Digital Signatures',
    text: `Brilliant! You implement digital signatures. A digital signature is built on something called public-private key encryption. The idea is simple: you have two keys that are mathematically linked. One is your private key, which you keep entirely secret. The other is your public key, which you hand out to anyone. Whatever is “locked” with one can only be “unlocked” with the other. This lets you create a digital equivalent of a signature. 

When Alice wants to send money, she uses her private key to sign the transaction. That signature is a small mathematical stamp that proves, “Only the person with Alice’s private key could have produced this.” Then anyone in the system can use Alice’s public key to check the signature and confirm it’s really from her.

Alice pays Bob $100 [Signature: xK9mP2...]

This works great! Until... Bob copies that exact line and pastes it 50 more times into the ledger.

'Alice pays Bob $100 [Signature: xK9mP2...]'
'Alice pays Bob $100 [Signature: xK9mP2...]'
'Alice pays Bob $100 [Signature: xK9mP2...]'
...

The signature is valid each time! What now?`,
    choices: [
      {
        id: 'choice-3a',
        text: 'Limit people to one transaction per day',
        targetNodeId: 'node-3a',
      },
      {
        id: 'choice-3b',
        text: 'Make each transaction include a unique ID that must be signed',
        targetNodeId: 'node-4',
      },
      {
        id: 'choice-3c',
        text: 'Have everyone manually check for duplicates',
        targetNodeId: 'node-3b',
      },
    ],
  },
  'node-3a': {
    id: 'node-3a',
    title: 'Transaction Limit Dead End',
    text: `One transaction per day? Charlie needs to pay three different people for three different things today. Your system is too restrictive to be useful.

You need a way to allow multiple transactions while preventing duplication!`,
    isDeadEnd: true,
    returnTo: 'node-3',
  },
  'node-3b': {
    id: 'node-3b',
    title: 'Manual Checking Dead End',
    text: `Asking everyone to manually scan for duplicate transactions is exhausting and error-prone. With hundreds of transactions, people start missing duplicates. Bob sneaks through several duplicate payments.

You need an automatic solution!`,
    isDeadEnd: true,
    returnTo: 'node-3',
  },
  'node-4': {
    id: 'node-4',
    title: 'The Charlie Problem',
    text: `Perfect! Each transaction now includes a unique ID (like a timestamp or sequence number) that gets signed. Bob can't reuse old signatures.

Months pass. The system works beautifully! You're trading 'Ledger Dollars' (LD) back and forth, settling up with real cash monthly.

But then... Charlie racks up $3,000 in debt and simply doesn't show up to settlement day. He ghosts everyone.

You're stuck with real losses. What's your solution?`,
    choices: [
      {
        id: 'choice-4a',
        text: 'Take Charlie to small claims court',
        targetNodeId: 'node-4a',
      },
      {
        id: 'choice-4b',
        text: 'Everyone pays money INTO the system upfront; you can only spend what you have',
        targetNodeId: 'node-5',
      },
      {
        id: 'choice-4c',
        text: 'Create a credit score system',
        targetNodeId: 'node-4b',
      },
    ],
  },
  'node-4a': {
    id: 'node-4a',
    title: 'Legal Action Dead End',
    text: `You try to take Charlie to court, but your 'Ledger Dollar' system has no legal standing. The judge is confused. Charlie claims he never agreed to be bound by your website. The case is dismissed.

You need a solution built into the system itself, not relying on external enforcement!`,
    isDeadEnd: true,
    returnTo: 'node-4',
  },
  'node-4b': {
    id: 'node-4b',
    title: 'Credit Score Dead End',
    text: `A credit score might help people avoid dealing with Charlie in the future, but it doesn't solve the current problem - you're still out $3,000. And who calculates these scores? Who do you trust to do it fairly?

You need to prevent the debt from happening in the first place!`,
    isDeadEnd: true,
    returnTo: 'node-4',
  },
  'node-5': {
    id: 'node-5',
    title: 'The Independence Realization',
    text: `Smart! Everyone deposits $100 into the pot initially. The ledger starts with:
- Alice gets 100 LD
- Bob gets 100 LD
- Charlie gets 100 LD

Now transactions are only valid if the sender has enough Ledger Dollars. Charlie can't spend 101 LD if he only has 100 LD.

Something interesting happens: you realize you might never need to convert back to real dollars. Ledger Dollars become their own currency! You're paying each other for real goods and services in LD.

But there's a new problem: Your ledger is hosted on a website. What if the hosting company goes down? What if whoever runs the website decides to censor certain transactions or manipulate the ledger?

How do you eliminate this central point of control?`,
    choices: [
      {
        id: 'choice-5a',
        text: 'Have everyone keep their own copy of the ledger',
        targetNodeId: 'node-6',
      },
      {
        id: 'choice-5b',
        text: 'Use a blockchain company to host it',
        targetNodeId: 'node-5a',
      },
      {
        id: 'choice-5c',
        text: 'Elect a trusted committee to manage it',
        targetNodeId: 'node-5b',
      },
    ],
  },
  'node-5a': {
    id: 'node-5a',
    title: 'Blockchain Company Dead End',
    text: `A 'blockchain company' is just another central authority. They could go bankrupt, get hacked, or decide to charge fees. You're back to trusting someone.

You need TRUE decentralization!`,
    isDeadEnd: true,
    returnTo: 'node-5',
  },
  'node-5b': {
    id: 'node-5b',
    title: 'Committee Dead End',
    text: `A committee of five people manages the ledger. It works... until three of them collude to approve fraudulent transactions. Or they have a disagreement and the system splits. Or they all get hit by a bus.

You can't rely on ANY central group of people!`,
    isDeadEnd: true,
    returnTo: 'node-5',
  },
  'node-6': {
    id: 'node-6',
    title: 'The Consensus Problem',
    text: `Excellent! Everyone maintains their own copy of the ledger. When Alice wants to pay Bob, she broadcasts the transaction to everyone, and they all add it to their personal ledgers.

But wait... chaos ensues:

- You record 'Alice pays Bob 10 LD' at 2:00 PM
- But Charlie's internet was down; he never received it
- Bob records it, but also sees 'Alice pays Dan 10 LD' broadcasted at 2:01 PM
- But you never received the Alice→Dan transaction
- Alice only has 10 LD - she can't make both payments!

Everyone's ledger is different. When Bob tries to spend his 10 LD with Charlie, Charlie says, "What 10 LD? I never saw Alice pay you."

How do you get everyone to agree on the same transaction history?`,
    choices: [
      {
        id: 'choice-6a',
        text: 'Everyone votes on which transactions to accept',
        targetNodeId: 'node-6a',
      },
      {
        id: 'choice-6b',
        text: 'Organize transactions into blocks that require computational work to create',
        targetNodeId: 'node-7',
      },
      {
        id: 'choice-6c',
        text: 'The fastest person to record wins',
        targetNodeId: 'node-6b',
      },
    ],
  },
  'node-6a': {
    id: 'node-6a',
    title: 'Voting Dead End',
    text: `Voting seems democratic, but who gets to vote? One vote per person? Bob creates 1,000 fake identities and votes 1,000 times for his own fraudulent transactions.

Without a central authority to verify identities, voting is easily manipulated!`,
    isDeadEnd: true,
    returnTo: 'node-6',
  },
  'node-6b': {
    id: 'node-6b',
    title: 'Fastest Recorder Dead End',
    text: `'First come, first served' sounds fair, but everyone's internet speed is different. People near Alice's location always see her transactions first. Alice could exploit this by sending conflicting transactions to different parts of the network.

Plus, who determines who was 'first' when there's no global clock?`,
    isDeadEnd: true,
    returnTo: 'node-6',
  },
  'node-7': {
    id: 'node-7',
    title: 'Proof of Work',
    text: `Clever! Here's the system:

Transactions are grouped into “blocks.” To create a valid block, you have to find a special number (a nonce) that, when combined with the block’s data and run through a hashing function called SHA-256, produces a hash that starts with (say) 30 zeros.

SHA-256 is a one-way mathematical function: you put in some data - any size - and it spits out a fixed 256-bit fingerprint. Even the tiniest change in the input produces a completely different output, and there’s no way to reverse the process or predict the hash in advance.

Because of that, the only way to find a nonce that gives you a hash with 30 leading zeros is to try billions or trillions of nonces until one happens to work. That takes a long time. But once someone finds the right nonce, everyone else can verify it instantly - just plug the block + nonce into SHA-256 once and check that the hash really does start with those zeros.

Block #47:
[Transactions...]
Nonce: 8473829104
Hash: 000000000000000000000000000000abcd1234...

You also chain blocks together - each block includes the hash of the previous block. Changing any old transaction would require redoing ALL the work for every block after it, since any change in the input block changes the output hash, and it no longer starts with 30 zeros.

This seems promising, but there's still an issue: If Alice and Bob both create valid blocks at the same time with conflicting transactions, which one does the network accept?`,
    choices: [
      {
        id: 'choice-7a',
        text: 'Accept the block from whoever has the most computing power',
        targetNodeId: 'node-7a',
      },
      {
        id: 'choice-7b',
        text: 'Trust whichever blockchain is longest (has the most work put into it)',
        targetNodeId: 'node-8',
      },
      {
        id: 'choice-7c',
        text: 'The block with more transactions wins',
        targetNodeId: 'node-7b',
      },
    ],
  },
  'node-7a': {
    id: 'node-7a',
    title: 'Most Power Dead End',
    text: `How do you measure who has the most computing power without a central authority to verify it? Anyone could claim they have massive computational resources. This doesn't solve the problem!`,
    isDeadEnd: true,
    returnTo: 'node-7',
  },
  'node-7b': {
    id: 'node-7b',
    title: 'More Transactions Dead End',
    text: `Alice creates a block with 1,000 fake transactions: 'Alice pays Alice 0.001 LD' repeated 1,000 times. She wins every time despite having only a tiny fraction of computing power.

The rule must be based on computational work, not transaction count!`,
    isDeadEnd: true,
    returnTo: 'node-7',
  },
  'node-8': {
    id: 'node-8',
    title: 'The Longest Chain Rule',
    text: `Perfect! The protocol: Always trust the longest blockchain (the one with the most cumulative computational work).

If two competing blocks appear, people work on whichever they saw first. When the next block is found, it extends one of the chains, making it longer. Everyone immediately switches to that longer chain.

Now you need incentives. Why would anyone spend electricity running their computer to create these blocks?

You decide: Whoever creates a valid block gets to award themselves 10 LD that appears out of thin air (the 'block reward'). People who create blocks are called 'miners.'

But Alice now has aspirations to cheat the system. What's the best way for her to try and fool Bob?`,
    choices: [
      {
        id: 'choice-8a',
        text: "Alice creates a fraudulent block paying herself from Bob's account",
        targetNodeId: 'node-8a',
      },
      {
        id: 'choice-8b',
        text: 'Alice creates a valid block where she pays Bob 100 LD, but only sends it to Bob, not the network',
        targetNodeId: 'node-9',
      },
      {
        id: 'choice-8c',
        text: 'Alice tries to mine blocks faster than the entire network',
        targetNodeId: 'node-8b',
      },
    ],
  },
  'node-8a': {
    id: 'node-8a',
    title: 'Fraudulent Transaction Dead End',
    text: `Alice creates a block: 'Bob pays Alice 100 LD [fake signature]'

Bob's digital signature is missing! Every other node immediately rejects this block as invalid. The digital signature requirement still applies - miners can't create transactions on behalf of others.

Alice needs a different attack strategy...`,
    isDeadEnd: true,
    returnTo: 'node-8',
  },
  'node-8b': {
    id: 'node-8b',
    title: 'Outpacing Network Dead End',
    text: `Alice tries to mine blocks faster than everyone else combined, but she only has 5% of the network's computing power. The other miners collectively have 95%.

Statistically, she might get lucky once or twice, but she can't maintain a longer chain indefinitely. The network's chain will always outpace hers.

Unless Alice controls more than 50% of computing power, this attack fails!`,
    isDeadEnd: true,
    returnTo: 'node-8',
  },
  'node-9': {
    id: 'node-9',
    title: 'The Double-Spend Attack',
    text: `Alice creates a valid block where she legitimately pays Bob 100 LD (properly signed and everything). But she only broadcasts it to Bob, not to the rest of the network.

Bob sees this block and thinks, 'Great! I have 100 LD from Alice!'

Meanwhile, Alice broadcasts a DIFFERENT transaction to the rest of the network: 'Alice pays Charlie 100 LD' (her same 100 LD). The network accepts this and keeps building on it.

Now the network thinks Alice paid Charlie, but Bob thinks Alice paid him.

Bob's blockchain:
... → Block 99 → Block 100 (Alice→Bob) → ???

Network's blockchain:
... → Block 99 → Block 100 (Alice→Charlie) → Block 101 → Block 102 → ...

What should Bob do?`,
    choices: [
      {
        id: 'choice-9a',
        text: 'Accept the payment immediately since the block is valid',
        targetNodeId: 'node-9a',
      },
      {
        id: 'choice-9b',
        text: 'Wait for several more blocks to be added on top before trusting the payment',
        targetNodeId: 'node-10',
      },
      {
        id: 'choice-9c',
        text: 'Check with the other users if they saw the same block',
        targetNodeId: 'node-9b',
      },
    ],
  },
  'node-9a': {
    id: 'node-9a',
    title: 'Immediate Acceptance Dead End',
    text: `Bob ships the product to Alice immediately after seeing one block.

Alice keeps mining her own secret chain. She gets lucky and finds the next two blocks faster than the network. She broadcasts her chain:

... → Block 99 → Block 100 (Alice→Charlie) → Block 101 → Block 102 (Alice's chain)

Bob receives this longer chain and, following the 'longest chain' rule, replaces his blockchain. The Alice→Bob transaction disappears. Alice has her product AND her 100 LD!

Bob was fooled because he didn't wait long enough!`,
    isDeadEnd: true,
    returnTo: 'node-9',
  },
  'node-9b': {
    id: 'node-9b',
    title: 'Manual Checking Dead End',
    text: `Bob messages several people: 'Did you see a transaction where Alice paid me 100 LD?'

Alice's friends say 'No,' but Bob's friends say 'Yes.' Who's telling the truth? Who's colluding with whom? This devolves into a trust problem again.

You need an automatic, trustless solution!`,
    isDeadEnd: true,
    returnTo: 'node-9',
  },
  'node-10': {
    id: 'node-10',
    title: 'Success! You Invented Cryptocurrency!',
    text: `Exactly! Bob waits for 5-6 more blocks to be added on top of the block containing Alice's payment.

For Alice to pull off her fraud, she would need to:
1. Mine her own secret blockchain
2. Keep mining faster than the ENTIRE rest of the network combined
3. Eventually broadcast a chain that's longer than the network's chain

With each new block added to the network's chain, this becomes exponentially harder. After 6 blocks (about 60 minutes in Bitcoin), the probability of Alice succeeding is astronomically small - unless she controls more than 50% of all mining power.

-----

YOU'VE DONE IT!

You've invented a cryptocurrency! Let's review what you've built:

1. Ledger Dollars (LD): A digital currency tracked on a shared ledger (the first of which was Bitcoin)
2. Digital Signatures: Cryptographic proof that transactions are authorized
3. Unique Transaction IDs: Preventing replay attacks
4. Balance Requirements: Can't spend more than you have
5. Distributed Copies: Everyone maintains their own ledger - no central authority
6. Proof of Work: Computational puzzles ensure consensus
7. Blockchain: Chained blocks make history tamper-proof
8. Longest Chain Rule: The network agrees on the chain with most work
9. Mining Rewards: Incentives for people to maintain the network
10. Confirmation Waiting: Security through waiting on the longest chain

-----

SOME FINAL DETAILS:

In Bitcoin, miners also earn transaction fees - people can optionally add a fee to their transaction to incentivize miners to include it in the next block.

The block reward started at 50 BTC and halves every 210,000 blocks (~4 years). This means there will never be more than 21 million Bitcoin.

The difficulty of the proof-of-work puzzle adjusts automatically to keep block creation time around 10 minutes, regardless of how many miners join the network.

-----

Congratulations! You now understand the fundamental technology behind Bitcoin and most cryptocurrencies. The path from 'friends tracking dinner payments' to 'trustless decentralized digital currency' required clever solutions to problems of:
- Authentication
- Double-spending
- Consensus without central authority
- Incentive alignment

The real Bitcoin works essentially like this, with additional optimizations and features.

Thank you for playing!`,
    isEnding: true,
  },
};