export interface Quest {
  id: string;
  title: string;
  description: string;
  reward: number;
  difficulty: string;
  content: string;
  poolStatus?: {
    hasPool: boolean;
    companyName?: string;
    remainingSlots?: number;
    isFull?: boolean;
    isOutOfFunds?: boolean;
  };
}

export interface Company {
  id: string;
  name: string;
  email: string;
  walletAddress: string;
}

export interface FundingPool {
  id: string;
  courseName: string;
  totalFund: number;
  rewardPerStudent: number;
  maxParticipants: number;
  remainingBalance: number;
  active: boolean;
  questId?: string;
  _count?: {
    rewards: number;
  };
}

export const mockQuests: Quest[] = [
  {
    id: '1',
    title: 'Introduction to Bitcoin & Blockchain',
    description: 'Learn the fundamentals of Bitcoin, blockchain technology, and how decentralized networks work.',
    reward: 10,
    difficulty: 'beginner',
    content: `# Introduction to Bitcoin & Blockchain

## What is Bitcoin?

Bitcoin is a decentralized digital currency that enables peer-to-peer transactions without the need for intermediaries like banks. It was created in 2009 by an anonymous person or group using the pseudonym Satoshi Nakamoto.

## Key Concepts:

1. **Decentralization**: No central authority controls Bitcoin
2. **Blockchain**: A distributed ledger that records all transactions
3. **Mining**: The process of validating transactions and adding them to the blockchain
4. **Wallets**: Digital tools to store and manage your Bitcoin

## Blockchain Explained

A blockchain is a chain of blocks, where each block contains:
- Transaction data
- A timestamp
- A cryptographic hash of the previous block

This creates an immutable record of all transactions.

## Learning Objectives

By the end of this quest, you will understand:
- How Bitcoin transactions work
- The role of miners in the network
- What makes Bitcoin secure
- How to store Bitcoin safely

Complete the quiz to earn your reward!`,
  },
  {
    id: '2',
    title: 'Smart Contracts & DeFi Basics',
    description: 'Explore smart contracts, decentralized finance (DeFi), and how programmable money works on blockchain.',
    reward: 25,
    difficulty: 'intermediate',
    content: `# Smart Contracts & DeFi Basics

## What are Smart Contracts?

Smart contracts are self-executing contracts with the terms of the agreement directly written into code. They run on blockchain networks like Ethereum, Mezo, and others.

## DeFi (Decentralized Finance)

DeFi aims to recreate traditional financial systems (lending, borrowing, trading) using smart contracts, removing intermediaries.

## Key DeFi Concepts:

1. **Liquidity Pools**: Pools of tokens locked in smart contracts
2. **Yield Farming**: Earning rewards by providing liquidity
3. **Staking**: Locking tokens to support network security
4. **AMMs**: Automated Market Makers for decentralized trading

## Real-World Applications

- Lending platforms (Aave, Compound)
- Decentralized exchanges (Uniswap, SushiSwap)
- Stablecoins (DAI, USDC)
- Insurance protocols

## Learning Objectives

Understand how DeFi protocols work and how they differ from traditional finance.`,
    poolStatus: {
      hasPool: true,
      companyName: 'Web3 Academy',
      remainingSlots: 12,
      isFull: false,
      isOutOfFunds: false,
    },
  },
  {
    id: '3',
    title: 'Advanced Cryptography & Security',
    description: 'Deep dive into cryptographic principles, digital signatures, and security best practices in Web3.',
    reward: 50,
    difficulty: 'advanced',
    content: `# Advanced Cryptography & Security

## Cryptographic Fundamentals

Cryptography is the foundation of blockchain security. Understanding these concepts is crucial for Web3 development.

## Key Topics:

### Hash Functions
- SHA-256, Keccak-256
- One-way functions
- Collision resistance

### Digital Signatures
- Public/Private key pairs
- ECDSA (Elliptic Curve Digital Signature Algorithm)
- Message signing and verification

### Zero-Knowledge Proofs
- Privacy-preserving protocols
- zk-SNARKs and zk-STARKs
- Applications in blockchain

## Security Best Practices

1. **Key Management**: Never share private keys
2. **Multi-signature Wallets**: Require multiple approvals
3. **Audits**: Regular smart contract security audits
4. **Bug Bounties**: Community-driven security testing

## Learning Objectives

Master cryptographic concepts and understand how they protect blockchain networks.`,
  },
  {
    id: '4',
    title: 'Building on Mezo Network',
    description: 'Learn how to build dApps on Mezo, understand Bitcoin-backed assets, and use mUSD for transactions.',
    reward: 30,
    difficulty: 'intermediate',
    content: `# Building on Mezo Network

## What is Mezo?

Mezo is a Bitcoin-native blockchain that enables smart contracts and DeFi while maintaining Bitcoin's security model.

## Key Features:

- **Bitcoin-backed**: Assets are backed by Bitcoin
- **mUSD Token**: Stablecoin pegged to USD, backed by Bitcoin
- **Low Fees**: Efficient transaction processing
- **EVM Compatible**: Works with Ethereum tooling

## Getting Started

1. Set up a Mezo wallet
2. Get testnet mUSD from the faucet
3. Deploy your first smart contract
4. Interact with existing protocols

## Development Tools

- Hardhat/Truffle for smart contract development
- Ethers.js/web3.js for interactions
- Mezo Explorer for transaction tracking

## Learning Objectives

Build and deploy a simple dApp on Mezo testnet.`,
    poolStatus: {
      hasPool: true,
      companyName: 'Mezo Foundation',
      remainingSlots: 0,
      isFull: true,
      isOutOfFunds: false,
    },
  },
  {
    id: '5',
    title: 'NFTs & Digital Ownership',
    description: 'Understand Non-Fungible Tokens, how they work, and their applications in art, gaming, and beyond.',
    reward: 15,
    difficulty: 'beginner',
    content: `# NFTs & Digital Ownership

## What are NFTs?

Non-Fungible Tokens (NFTs) are unique digital assets that represent ownership of a specific item or piece of content.

## Key Characteristics:

- **Uniqueness**: Each NFT is one-of-a-kind
- **Ownership**: Recorded on blockchain
- **Transferability**: Can be bought, sold, or traded
- **Indivisibility**: Cannot be split into smaller parts

## Use Cases:

1. **Digital Art**: Ownership of digital artworks
2. **Gaming**: In-game items and characters
3. **Collectibles**: Trading cards, virtual pets
4. **Identity**: Digital identity verification
5. **Real Estate**: Property ownership records

## How NFTs Work

NFTs use smart contracts (like ERC-721) to define:
- Ownership rules
- Transfer mechanisms
- Metadata storage
- Royalty systems

## Learning Objectives

Understand what makes NFTs valuable and how to create your own.`,
  },
];

export const mockCompany: Company = {
  id: '1',
  name: 'Web3 Academy',
  email: 'contact@web3academy.io',
  walletAddress: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb',
};

export const mockPools: FundingPool[] = [
  {
    id: '1',
    courseName: 'Smart Contracts & DeFi Basics',
    totalFund: 500,
    rewardPerStudent: 25,
    maxParticipants: 20,
    remainingBalance: 175,
    active: true,
    questId: '2',
    _count: {
      rewards: 13,
    },
  },
  {
    id: '2',
    courseName: 'Building on Mezo Network',
    totalFund: 600,
    rewardPerStudent: 30,
    maxParticipants: 20,
    remainingBalance: 0,
    active: true,
    questId: '4',
    _count: {
      rewards: 20,
    },
  },
  {
    id: '3',
    courseName: 'Advanced Web3 Development',
    totalFund: 1000,
    rewardPerStudent: 50,
    maxParticipants: 20,
    remainingBalance: 750,
    active: true,
    _count: {
      rewards: 5,
    },
  },
];

export const mockUser = {
  walletAddress: '0x1234567890123456789012345678901234567890',
  completedQuests: ['1', '5'],
  totalEarned: 25,
};

