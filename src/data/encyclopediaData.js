export const encyclopediaData = {
    'BlockchainFoundations': {
        Beginner: {
            overview: "Blockchain technology represents a paradigm shift in how information is stored, shared, and verified across digital networks. At its core, a blockchain is a distributed ledger—a database that is duplicated and synchronized among the members of a decentralized network. Unlike a traditional bank or tech company that keeps records on a central server, a blockchain allows every participant (node) to hold a copy of the entire history of transactions. This ensures that no single entity has control over the data, making it 'permissionless' and 'trustless'. Each block contains a cryptographic hash of the previous block, a timestamp, and transaction data, forming a secure, immutable chain. This structure prevents anyone from altering a record without changing all subsequent blocks and gaining consensus from the majority of the network, which is computationally nearly impossible on large networks like Bitcoin.",
            history: "The conceptual roots of blockchain date back to the early 1990s when researchers Stuart Haber and W. Scott Stornetta sought to implement a system where document timestamps could not be tampered with. However, the first successful implementation was introduced in 2008 by an anonymous person or group known as Satoshi Nakamoto. Through the seminal whitepaper 'Bitcoin: A Peer-to-Peer Electronic Cash System', Nakamoto solved the 'double-spending' problem—a major hurdle for digital currencies—without a central authority. Since then, the technology has evolved from simple value transfer (Blockchain 1.0) to programmable smart contracts with Ethereum (2.0), and finally to highly scalable, interoperable ecosystems (3.0 and beyond).",
            principles: "The four pillars of blockchain are Decentralization, Transparency, Immutability, and Security. Decentralization removes the gatekeepers, allowing peer-to-peer interaction. Transparency ensures that while users may be pseudonymous, all transactions are visible on the public ledger. Immutability means that once a piece of data is committed to the chain, it cannot be deleted or modified. Finally, Security is maintained through advanced cryptographic puzzles and economic incentives that make attacking the network far more expensive than supporting it.",
            mechanism: "When a transaction is initiated, it is broadcast to a network of computers. These nodes validate the transaction based on pre-set rules (protocol). Valid transactions are grouped into a 'block'. Miners or validators then compete or are selected to verify the block through a consensus mechanism. Once verified, the block is appended to the previous chain. The 'work' done to secure this block is then shared across the network, and the person who verified it is usually rewarded with newly minted tokens or transaction fees.",
            usage: "While initially designed for money, blockchain is now used in supply chain management (to track goods from farm to table), digital identity (to give individuals control over their personal data), and decentralized finance (to provide banking services without banks). It is also the foundation for NFTs, representing ownership of digital art and assets.",
            risks: "Key risks include security vulnerabilities in the code (bugs), the loss of private keys (which means losing your money forever), and regulatory uncertainty as governments decide how to track and tax digital assets. Additionally, early networks like Bitcoin consume significant energy due to their security processes.",
            developments: "Modern developments focus on 'Proof of Stake' which reduces energy consumption by 99%, and 'Sharding' which breaks the database into smaller pieces to allow thousands of transactions per second. We are also seeing the rise of Layer 2 solutions that sit on top of the main blockchain to handle traffic and lower costs.",
            references: ["Bitcoin Whitepaper by Satoshi Nakamoto", "Mastering Bitcoin by Andreas Antonopoulos", "Blockchain Revolution by Don & Alex Tapscott"],
            quiz: [
                {
                    id: 1,
                    question: "What was the primary problem solved by the Bitcoin whitepaper?",
                    options: ["High transaction fees", "Double-spending", "Slow databases", "Internet speed"],
                    answer: "Double-spending",
                    explanation: "Double-spending is the risk that a digital currency can be spent twice. Satoshi's proof-of-work solved this without a central bank."
                },
                {
                    id: 2,
                    question: "Which term describes the inability to change data once it's on the blockchain?",
                    options: ["Transparency", "Scalability", "Immutability", "Interoperability"],
                    answer: "Immutability",
                    explanation: "Immutability means the ledger is permanent and can never be altered or deleted."
                },
                {
                    id: 3,
                    question: "Who is credited with inventing the first functional blockchain?",
                    options: ["Vitalik Buterin", "Satoshi Nakamoto", "Charlie Lee", "Bill Gates"],
                    answer: "Satoshi Nakamoto",
                    explanation: "Satoshi Nakamoto published the Bitcoin whitepaper in 2008 and launched the network in 2009."
                }
            ]
        },
        Analyst: {
            overview: "From an analytical standpoint, a blockchain is a distributed state machine that achieves eventual consistency through probabilistic or deterministic finality. It is a cryptographic data structure where blocks are linked via hash functions, creating a verifiable record of state transitions. Analysts evaluate blockchains based on their throughput (TPS), latency (Time to Finality), and the 'Nakamoto Coefficient' (a measure of decentralization). The technology effectively replaces subjective trust in institutions with objective cryptographic truth. By examining on-chain data, analysts can identify market cycles, whale movements, and the fundamental velocity of a protocol's native economy.",
            history: "The evolution of the blockchain analyst role grew out of the need to quantify 'dark' financial systems. Early analysis was purely cryptographic (proving the math worked). Post-2013, it shifted to forensic analysis when law enforcement began tracking illicit funds on the Bitcoin ledger. Today, 'On-chain Analysis' is a sophisticated field using tools like Glassnode and Dune Analytics to interpret complex smart contract interactions, liquidations in DeFi, and the distribution of governance power within DAOs.",
            principles: "The core principles for an analyst are Game Theory, Cryptography, and Distributed Systems. Game Theory defines the incentive structures (why do miners behave properly?). Cryptography ensures data integrity through Hashing and Digital Signatures (ECDSA). Distributed Systems principles like the CAP theorem guide the understanding of network trade-offs—how a chain balances Consistency, Availability, and Partition Tolerance.",
            mechanism: "Operationally, it involves a Mempool (where pending transactions wait), a Consensus Engine (like Tendermint or PoW), and a State Tree (Merkle/Patricia trees) that stores the current balances and contract states. A block proposer broadcasts a block; nodes verify the block's hash and the validity of every transaction against the current state tree. Once the block is 'final', it updates the universal state of the blockchain.",
            usage: "Institutional usage includes Central Bank Digital Currencies (CBDCs), settlement layers for cross-border payments, and real-world asset (RWA) tokenization. Analysts look at 'TVL' (Total Value Locked) and 'DAU' (Daily Active Users) as primary metrics of success.",
            risks: "Systemic risks include '51% attacks' (where a single entity gains majority control), Oracle failures (incorrect data being fed to smart contracts), and regulatory 'Chokepoints' where liquidity exits to traditional fiat systems.",
            developments: "Current focus is on 'Modular Blockchains' (like Celestia) that separate data availability from execution, and 'Zero-Knowledge Rollups' that compress transaction data for massive scale while maintaining the security of the underlying Layer 1.",
            references: ["The Business Blockchain by William Mougayar", "Glassnode Research Academy", "CoinMetrics State of the Network"],
            quiz: [
                {
                    id: 1,
                    question: "What does the Nakamoto Coefficient measure?",
                    options: ["Transaction speed", "Mining difficulty", "Network decentralization", "Token inflation"],
                    answer: "Network decentralization",
                    explanation: "The Nakamoto Coefficient represents the minimum number of nodes/entities required to compromise a network."
                },
                {
                    id: 2,
                    question: "In the CAP theorem, what does 'C' stand for?",
                    options: ["Consensus", "Consistency", "Concurrency", "Capacity"],
                    answer: "Consistency",
                    explanation: "Consistency ensures that every node in the network sees the same data at the same time."
                },
                {
                    id: 3,
                    question: "Which data structure is typically used to store account balances efficiently?",
                    options: ["Linked List", "Binary Tree", "Merkle Patricia Tree", "Hash Map"],
                    answer: "Merkle Patricia Tree",
                    explanation: "Ethereum uses Merkle Patricia trees to store the global state, allowing for efficient proof of inclusion."
                }
            ]
        }
    },
    'CryptographyAndSecurity': {
        Beginner: {
            overview: "Cryptography is the superhero science of the digital world—it’s the math that keeps your secrets safe. In crypto, it’s what prevents someone from stealing your money or pretending to be you. It turns clear, readable information into a scrambled mess that only the person with the right 'key' can unscramble. Without cryptography, the internet as we know it—including your emails, bank logins, and social media—would be completely unsafe. In blockchain, cryptography is used in two main ways: to create your 'Digital Signature' (which proves you authorized a payment) and to 'Hash' data (which creates a digital fingerprint of information). Together, these make it so that no one can change the history of the ledger without everyone else noticing immediately.",
            history: "Cryptography isn't new; it has been used for thousands of years. Ancient Spartans used 'Scytales' (strips of leather) to hide messages, and Julius Caesar used the 'Caesar Cipher' (shifting letters) to send military orders. However, modern cryptography was revolutionized in the 20th century by names like Alan Turing, who cracked the Enigma code in WWII, and later by Whitfield Diffie and Martin Hellman, who invented 'Public Key Cryptography' in the 1970s. This invention allowed two people to share secrets without ever meeting in person—the very technology that makes Bitcoin possible today.",
            principles: "There are three main goals of cryptography, often called the 'CIA Triad': Confidentiality (keeping secrets), Integrity (making sure data hasn't been changed), and Authentication (proving who you are). In blockchain, we also add 'Non-repudiation', which means once you sign a transaction, you can't later claim it wasn't you.",
            mechanism: "It works through Private and Public keys. Your Public Key is like your email address—anyone can have it to send you money. Your Private Key is like your password—you use it to 'sign' transactions. Only you have the private key, so only you can spend your money. When you send a transaction, your private key creates a unique mathematical signature. The rest of the network uses your public key to check that the signature matches, without ever seeing your private key.",
            usage: "It's used every time you open your crypto wallet. It's also used by websites (the 'https' padlock), mobile apps like Telegram and Signal for encrypted chat, and by governments to protect state secrets.",
            risks: "The biggest risk is human error. If you lose your private key or your 'Seed Phrase' (the words you write down to recover your wallet), your money is gone. There is no 'Help Desk' for math. Also, hackers can try to trick you into giving away your keys through 'Phishing' scams.",
            developments: "The cutting edge is 'Post-Quantum Cryptography'. Computers are getting so fast (Quantum Computers) that they might one day be able to 'guess' your private keys. Scientists are currently building new types of math that even quantum computers won't be able to crack.",
            references: ["The Code Book by Simon Singh", "Applied Cryptography by Bruce Schneier", "Crypto 101 by Laurens Van Houtven"],
            quiz: [
                {
                    id: 1,
                    question: "What is the name of the key you share with others to receive funds?",
                    options: ["Private Key", "Secret Key", "Public Key", "Master Key"],
                    answer: "Public Key",
                    explanation: "A public key acts like an address that anyone can use to send you assets."
                },
                {
                    id: 2,
                    question: "Which process turns readable data into scrambled code?",
                    options: ["Decryption", "Encryption", "Compression", "Hashing"],
                    answer: "Encryption",
                    explanation: "Encryption is the mathematical process of secure data scrambling."
                },
                {
                    id: 3,
                    question: "What is the biggest risk in using cryptography for personal finance?",
                    options: ["Math failing", "Government bans", "Losing your private key", "Slow internet"],
                    answer: "Losing your private key",
                    explanation: "Private keys are the only way to access funds. If lost, they cannot be recovered."
                }
            ]
        },
        Analyst: {
            overview: "Analytical cryptography focuses on the robust primitives that ensure data availability and integrity in hostile environments. In blockchain, we move beyond simple symmetric encryption to asymmetric (public-key) cryptography, specifically Elliptic Curve Cryptography (ECC) like secp256k1 (used by Bitcoin and Ethereum). Analysts examine the cryptographic 'hardness' of these problems, ensuring that the cost of brute-forcing a key remains prohibitive. The security of a network is not just about the difficulty of the puzzle, but also about the entropy of key generation and the collision-resistance of the hash functions used in Merkle trees.",
            history: "The history for an analyst is a history of 'Breaking' codes. From the cryptanalysis of Enigma to the modern vulnerabilities in early RSA implementations. In the crypto-native era, the focus shifted to the 'Bernstein Review' and the standardization of NIST-approved algorithms. The major milestone for analysts was the emergence of Zero-Knowledge proofs as a viable tool for privacy, moving from theoretical academic papers (Goldwasser et al., 1985) to production-ready protocols like Zcash in 2016.",
            principles: "Core analytical principles include Collision Resistance (for hashing), Determinism (same input always gives same output), and the discrete logarithm problem (the foundation of ECC). Security is evaluated through 'Attack Vectors'—analyzing where the weakest link in the cryptographic chain lies, whether it's the signature scheme or the random number generator (RNG).",
            mechanism: "A deep dive into mechanisms reveals the role of Keccak-256 (Ethereum's hash) and SHA-256 (Bitcoin's hash). These functions take any input and produce a unique 256-bit string. Analysts use these to verify block headers and transaction integrity. Digital signatures use the Elliptic Curve Digital Signature Algorithm (ECDSA), where a user proves possession of a private key corresponding to a public address without revealing the key itself.",
            usage: "Usage spans Multi-party Computation (MPC) for institutional custody, ZK-Rollups for scalable privacy, and Threshold Signatures for shared wallet control. Analysts monitor these to ensure no 'protocol debt' is accumulating through weak crypto implementations.",
            risks: "Security risks include 'Pre-image attacks', 'Side-channel attacks' where an attacker guesses a key based on the computer's power usage, and the long-term threat of Shor's Algorithm running on quantum hardware.",
            developments: "Current analytical focus is on 'Homomorphic Encryption' (computing on encrypted data) and 'Succinct Non-interactive Arguments of Knowledge' (zk-SNARKs) that allow for near-instant verification of complex computations.",
            references: ["Serious Cryptography by Jean-Philippe Aumasson", "A Graduate Course in Applied Cryptography by Boneh & Shoup", "NIST Post-Quantum Cryptography Project"],
            quiz: [
                {
                    id: 1,
                    question: "Which hash function is primarily used by the Bitcoin network for Proof of Work?",
                    options: ["SHA-256", "Keccak-256", "BLAKE3", "MD5"],
                    answer: "SHA-256",
                    explanation: "Bitcoin uses double SHA-256 for its mining and hashing operations."
                },
                {
                    id: 2,
                    question: "What is the primary benefit of Elliptic Curve Cryptography over RSA?",
                    options: ["Easier to understand", "Smaller key sizes for same security", "Older technology", "Doesn't use math"],
                    answer: "Smaller key sizes for same security",
                    explanation: "ECC provides high security with much smaller keys, making it more efficient for blockchain data storage."
                },
                {
                    id: 3,
                    question: "What does MPC stand for in institutional custody?",
                    options: ["Multi-Party Computation", "Maximum Protocol Capacity", "Multiple Price Correlation", "Managed Private Cloud"],
                    answer: "Multi-Party Computation",
                    explanation: "MPC allows multiple parties to jointly compute a function while keeping their inputs private, used for secure key management."
                }
            ]
        }
    },
    'DeFiEcosystems': {
        Beginner: {
            overview: "Decentralized Finance, or DeFi, is the movement to rebuild traditional financial tools—like banks, stock exchanges, and insurance—on top of blockchain technology. Imagine a world where you don't need a bank's permission to get a loan, or a broker to trade stocks. In DeFi, the 'banker' is replaced by smart contracts—automated pieces of code that follow strict rules. This makes finance faster, cheaper, and available to anyone with a smartphone, anywhere in the world. Whether you're in New York or a small village in Asia, you have the same access to the same financial opportunities. DeFi protocols are 'Open Source', meaning anyone can see how they work and build on top of them, creating an incredibly fast-moving ecosystem of innovation often called 'Money Legos'.",
            history: "The 'Genesis' of DeFi is often traced back to the launch of MakerDAO in 2017, which created the first decentralized stablecoin (DAI) on Ethereum. However, the movement exploded during the 'DeFi Summer' of 2020. This was a period when liquidity mining and yield farming were introduced, allowing users to earn rewards for providing capital to platforms like Uniswap and Compound. Since then, the sector has grown from a few hundred million dollars to over a hundred billion in total value locked (TVL), witnessing both massive successes and spectacular collapses.",
            principles: "The primary principles of DeFi are Permissionless access (no ID required), Transparency (all code and money flows are public), and Autonomy (no central company can stop your transactions). It also promotes 'Composability', where DIFFERENT apps can be plugged into each other—for example, taking a loan on one app and automatically using it to trade on another.",
            mechanism: "DeFi apps use 'Liquidity Pools' instead of traditional order books. Users called 'Liquidity Providers' put their money into these pools. When you trade on a platform like Uniswap, you are trading against the pool, not another person. The smart contract automatically adjusts the price based on supply and demand. For loans, you provide your own crypto as 'Collateral'. If you don't pay back the loan, the smart contract automatically sells your collateral to pay back the lender—no debt collectors needed.",
            usage: "Usage includes 'Yield Farming' (earning interest), 'Dex Trading' (swapping coins), 'Stablecoin Minting' (creating tokens tied to the dollar), and 'Derivatives' (betting on future prices).",
            risks: "Risks are high. 'Smart Contract Risk' means if there is a bug in the code, a hacker could steal the money. 'Impermanent Loss' is a risk for liquidity providers where they might end up with less money than if they had just held their coins. There are also many scams and 'Rug Pulls' where creators steal user funds.",
            developments: "Modern DeFi is moving toward 'Layer 2' solutions to lower gas fees, and 'Institutional DeFi' where compliant versions of protocols are being built for big banks and corporations.",
            references: ["DeFi and the Future of Finance by Campbell Harvey", "How to DeFi by CoinGecko", "MakerDAO Whitepaper"],
            quiz: [
                {
                    id: 1,
                    question: "What is the name of the automated scripts that run DeFi apps?",
                    options: ["Bank Bots", "Smart Contracts", "Legal Code", "Web Apps"],
                    answer: "Smart Contracts",
                    explanation: "Smart contracts are self-executing programs that handle all the logic in DeFi."
                },
                {
                    id: 2,
                    question: "What does TVL stand for in DeFi?",
                    options: ["Total Value Locked", "Token Volume Limit", "Total Variable Liquidity", "Transaction Verification Ledger"],
                    answer: "Total Value Locked",
                    explanation: "TVL is the primary metric representing the total amount of assets deposited in a protocol."
                },
                {
                    id: 3,
                    question: "Which of these is a risk for someone providing money to a DeFi pool?",
                    options: ["High bank fees", "Impermanent Loss", "Account freezing", "Bad credit"],
                    answer: "Impermanent Loss",
                    explanation: "Impermanent loss occurs when the price ratio of assets in a liquidity pool changes relative to when they were deposited."
                }
            ]
        },
        Analyst: {
            overview: "DeFi analysis focuses on the capital efficiency and risk parameters of permissionless financial protocols. For an analyst, DeFi is a series of interconnected liquidity graphs where 'TVL' (Total Value Locked) is a vanity metric, while 'Capital Efficiency' (Volume/TVL ratio) is the true indicator of growth. We study Automated Market Makers (AMMs) like the 'xy=k' constant product formula, and lending protocols through their liquidation thresholds and health factors. Analysis involves monitoring 'MEV' (Maximal Extractable Value) and how it affects the fair execution of trades within decentralized order flows.",
            history: "From an analytical view, DeFi moved from 'Experimental' (EtherDelta) to 'Standardized' (Uniswap V2) to 'Concentrated' (Uniswap V3). The history is marked by the 'Liquidity Wars' where protocols like Curve and Convex competed for the deep liquidity of stablecoins. Analysts also point to the 'Flash Loan' explosion, which enabled massive capital movements without collateral for a single block, fundamentally changing the risk profile of decentralized systems.",
            principles: "Key principles for analysts are Solvency (can the protocol pay its lenders?), Liquidity (how much slippage for a $1M trade?), and Protocol Revenue. We differentiate between 'Mercenary Capital' (looking for short-term incentives) and 'Sticky Liquidity' (long-term protocol supporters).",
            mechanism: "Mechanistically, it involves Price Oracles feeding the state, Smart Contracts managing the escrow of funds, and 'Keepers' who perform maintenance tasks like liquidating underwater loans. In AMMs, liquidity is provided across a price curve; in V3, providers choose specific price ranges to optimize fee capture but increase risk of IL.",
            usage: "Usage analysis tracks 'DAU', 'Wallet Overlap' between protocols, and 'Retention' of liquidity providers. Analysts also study 'Real Yield'—revenue generated from actual usage fees rather than token inflation.",
            risks: "Analyst-level risks include 'Cascading Liquidations', where a price drop causes a chain reaction of sold collateral, 'Oracle Manipulation' through flash loans, and the 'Regulatory Perimeter' where protocols might be forced into KYC compliance.",
            developments: "Modern analysts are watching the move toward 'Intent-centric' trading, where users specify a goal and 'Solvers' find the best path, and 'Liquid Staking Derivatives' (LSDs) being used as collateral in DeFi.",
            references: ["Uniswap V3 Whitepaper", "Analyzing DeFi Risks by ConsenSys", "DeFi Pulse Analytics Blog"],
            quiz: [
                {
                    id: 1,
                    question: "What is the 'Constant Product Formula' used by many AMMs?",
                    options: ["x + y = k", "x * y = k", "x / y = k", "x^y = k"],
                    answer: "x * y = k",
                    explanation: "Uniswap popularized the x*y=k formula to maintain constant liquidity in a trading pair."
                },
                {
                    id: 2,
                    question: "What is MEV in the context of DeFi analysis?",
                    options: ["Maximal Extractable Value", "Multiple Entry Verification", "Market Efficiency Variable", "Managed Exchange Volume"],
                    answer: "Maximal Extractable Value",
                    explanation: "MEV refers to the profit that can be made by miners or validators by reordering transactions within a block."
                },
                {
                    id: 3,
                    question: "Which term describes users moving funds rapidly between protocols to chase rewards?",
                    options: ["Stable Capital", "Mercenary Capital", "Organic Liquidity", "Protocol Debt"],
                    answer: "Mercenary Capital",
                    explanation: "Mercenary capital is highly sensitive to yields and often leaves as soon as incentives decrease."
                }
            ]
        }
    },
    'NetworkArchitecture': {
        Beginner: {
            overview: "If a blockchain is a city, then Network Architecture is its blueprint. It’s the way all the different parts—computers, messages, and rules—are connected to make things run smoothly. At its simplest level, a blockchain is a 'Peer-to-Peer' (P2P) network. This means there is no 'Main Server' like Google or Facebook. Instead, every computer (node) is equal. They talk directly to each other to share information about new transactions. Architecture also decides how the blockchain is LAYERED. Some parts handle the actual math (Consensus), others handle the storage (Data), and others handle the apps you use (Execution). The goal of good architecture is to make the network as fast as possible, as safe as possible, and as impossible to shut down as possible.",
            history: "The idea of P2P networking gained popularity in the late 90s with file-sharing apps like Napster and BitTorrent. Bitcoin took this P2P idea and added a 'Consensus Layer' to it for the first time. Later, Ethereum introduced the 'Ethereum Virtual Machine' (EVM), which added a computer-like layer to the network architecture. Recently, we have moved from 'Monolithic' architecture (where everything happens in one place) to 'Modular' architecture (where tasks are split between different networks).",
            principles: "Key principles include Robustness (no single point of failure), Scalability (handling more users), and Interoperability (talking to other blockchains). Engineers also have to deal with 'Latency'—the time it takes for a message to travel across the globe to every node.",
            mechanism: "A transaction starts with a user's wallet app and is broadcast to 'Gossiping' nodes. These nodes spread the message like a rumor until everyone knows about it. Then, 'Full Nodes' check the message against the rules. Finally, 'Light Nodes' (like your mobile phone) can check if a transaction is valid without needing to store the whole history.",
            usage: "Used in every blockchain from Bitcoin to Solana. It is also used in decentralized storage like Filecoin (the Google Drive of crypto) and content delivery networks.",
            risks: "If the architecture is too complicated, it might have 'centralized chokepoints' where one server handles too much. Also, 'Sybil Attacks' can happen when one person creates thousands of fake computers to try and trick the network.",
            developments: "We are now seeing the rise of 'AppChains' (blockchains built for just one specific app) and 'Mesh Networks' where devices talk to each other even without the internet.",
            references: ["Computer Networking: A Top-Down Approach by Kurose & Ross", "libp2p Documentation", "Ethereum Yellow Paper"],
            quiz: [
                {
                    id: 1,
                    question: "What kind of network has no central server?",
                    options: ["Client-Server", "Mainframe", "Peer-to-Peer (P2P)", "Cloud"],
                    answer: "Peer-to-Peer (P2P)",
                    explanation: "P2P networks allow all participants to interact directly as equals without a central authority."
                },
                {
                    id: 2,
                    question: "What do we call the computers that verify rules on the network?",
                    options: ["Users", "Monitors", "Nodes", "Browsers"],
                    answer: "Nodes",
                    explanation: "A node is any computer that connects to the blockchain network and supports its operation."
                },
                {
                    id: 3,
                    question: "What is 'Latency' in a network?",
                    options: ["Storage size", "Communication delay", "Security level", "Mining speed"],
                    answer: "Communication delay",
                    explanation: "Latency is the time it takes for data to travel from one point to another in the network."
                }
            ]
        },
        Analyst: {
            overview: "Architectural analysis examines the structural trade-offs between Monolithic and Modular stacks. We look at the 'Network Propagation Delay'—the time it takes for a block to reach 95% of the network—and how it affects orphan rates and security. In modern architectures, we study the 'Data Availability Layer' (e.g., Avail, Celestia) and how it enables Rollups to scale without overloading the main chain. Analytical focus is on the 'Networking Stack' (like libp2p) and the 'State Management' (how accounts and storage are indexed across millions of nodes).",
            history: "The move from monolithic (Bitcoin/Ethereum) to modular (Cosmos/Celestia) marked a major shift. Analysts track the history of the 'Blockchain Trilemma'—the search for a system that doesn't compromise on Decentralization, Security, or Scalability. The emergence of 'EVM-Compatibility' as a standard allowed for a common architectural language across diverse networks (BSC, Avalanche, L2s).",
            principles: "Key principles are Fault Tolerance (can the network survive if 1/3 of nodes fail?), Throughput (MB/s per node), and Data Persistence. Analysts also evaluate the 'Connectivity Matrix'—how well nodes are connected to each other to prevent 'Partitioning' (where the network splits in two).",
            mechanism: "It involves a 'Gossip Protocol' for message passing, a 'Consensus Engine' for ordering, and an 'Execution Environment' (like EVM or Solana VM) for running code. Some architectures use 'Sharding' (splitting the state into pieces), while others use 'Downtime-resistant' BFT engines to ensure the chain never stops.",
            usage: "Used by infrastructure providers (Infura, Alchemy) to scale access to data. Analysts look at the 'Node Geographic Distribution' to ensure the network isn't physically centralized in one country or data center.",
            risks: "Risks include 'Liveness failures' (the chain stops), 'Safety violations' (two different blocks at the same height), and 'Centralization of RPC providers' where most users talk to the blockchain through just one company.",
            developments: "Current focus is on 'Shared Sequencers' that allow multiple L2s to share the same orderer, and 'Statelessness' where nodes don't need to store the entire history to verify new blocks.",
            references: ["Modular Blockchains by Celestia Research", "The Cosmos Whitepaper", "Distributed Systems: Principles and Paradigms by Tanenbaum"],
            quiz: [
                {
                    id: 1,
                    question: "What is the main goal of a 'Modular' blockchain architecture?",
                    options: ["Lower security", "Split tasks into separate layers", "Make everything more complex", "Remove all miners"],
                    answer: "Split tasks into separate layers",
                    explanation: "Modular architectures separate execution, settlement, and data availability for better scalability."
                },
                {
                    id: 2,
                    question: "Which of these contributes most to 'Network Propagation Delay'?",
                    options: ["Block size", "Internet speed", "Node consensus logic", "All of the above"],
                    answer: "All of the above",
                    explanation: "Block size, network speed, and node processing all affect how fast a block spreads through the network."
                },
                {
                    id: 3,
                    question: "What happens in a 'Network Partition'?",
                    options: ["Nodes get faster", "The network splits and loses consensus", "Money is burned", "Security increases"],
                    answer: "The network splits and loses consensus",
                    explanation: "Partitions prevent nodes from communicating, which can lead to divergent versions of the blockchain state."
                }
            ]
        }
    },
    'EconomicsAndTokenomics': {
        Beginner: {
            overview: "Tokenomics is a mashup of 'Token' and 'Economics'. It is the study of how a cryptocurrency creates value and encourages people to use it. Just like a country has its own currency rules (like how much money to print and when), every crypto project has its own Tokenomics. This includes how many tokens will ever exist (Supply), how they are given out to people (Distribution), and what you can do with them (Utility). If a project has good tokenomics, it's designed to grow in value over time as more people want a limited supply. If it has bad tokenomics, the price might crash because too many new tokens are being created, causing 'Inflation'. Understanding tokenomics is the most important skill for anyone looking to invest in crypto.",
            history: "Tokenomics started with Bitcoin's 'Halving' mechanism. Every four years, the amount of Bitcoin created is cut in half, making it more scarce over time. Later, Ethereum introduced 'Initial Coin Offerings' (ICOs) in 2017, where projects sold tokens to the public to raise money. More recently, projects like Uniswap 'Airdropped' tokens to their users for free to reward loyalty. In 2021, Ethereum introduced 'EIP-1559', which started 'Burning' (destroying) a small amount of tokens every time someone uses the network, making the supply potentially 'Deflationary'.",
            principles: "The three laws of Tokenomics are Scarcity, Incentives, and Utility. Scarcity means the supply is limited. Incentives are the rewards (like interest) that make you want to hold the token. Utility is the actual USE for the token, like paying for gas fees or voting on rules.",
            mechanism: "Tokens are created through 'Minting' and destroyed through 'Burning'. New tokens are usually given away as rewards to 'Miners' or 'Stakers' who secure the network. Some projects use a 'Cliff' and 'Vesting' schedule, which means the founders can't sell their tokens for several years, ensuring they stay committed to the project.",
            usage: "Used by every crypto project to align the interests of developers, users, and investors. It’s also used in 'Play-to-Earn' games like Axie Infinity.",
            risks: "The biggest risk is 'Hyper-inflation', where a project creates so many tokens that they become worthless. Another risk is 'Centralized Distribution', where a few people own almost all the tokens and can crash the price if they sell all at once.",
            developments: "The move toward 'Real Yield' is a big trend. Instead of giving out new inflationary tokens, projects are trying to reward users with the actual fees the platform earns (like a dividend in a company).",
            references: ["The Little Bitcoin Book", "Tokenomics Design by Outlier Ventures", "Economics of Blockchain by Chris Berg"],
            quiz: [
                {
                    id: 1,
                    question: "What happens when a token is 'Burned'?",
                    options: ["Price goes down", "Supply is increased", "Supply is permanently removed", "Tokens are sent to users"],
                    answer: "Supply is permanently removed",
                    explanation: "Burning tokens involves sending them to an unusable address, effectively reducing the total supply."
                },
                {
                    id: 2,
                    question: "Which term describes a project giving free tokens to its early users?",
                    options: ["Minting", "ICO", "Airdrop", "Mining"],
                    answer: "Airdrop",
                    explanation: "Airdrops are a common marketing and distribution strategy to reward a project's community members."
                },
                {
                    id: 3,
                    question: "What is 'Inflation' in tokenomics?",
                    options: ["Price rising", "Supply increasing over time", "Hackers stealing coins", "Market crashing"],
                    answer: "Supply increasing over time",
                    explanation: "Inflation refers to the expansion of the circulating supply, which can dilute the value of individual tokens."
                }
            ]
        },
        Analyst: {
            overview: "Analytical tokenomics evaluates the 'Monetary Policy' of digital assets. We study the 'FDV' (Fully Diluted Valuation) vs. 'Market Cap' gap, which reveals the future selling pressure from locked tokens. Analysis includes 'Supply Curves', 'Vesting Schedules', and 'Emissions Rates'. We look for 'Product-Market Fit' (PMF) by comparing the token's 'Incentive Cost' (how much they pay users in tokens) to its 'Organic Revenue'. An ideal tokenomics model creates a 'Virtuous Cycle' where usage leads to token demand, which leads to higher security/funding, which leads to better features and more usage.",
            history: "From an analytical view, the 'ICO era' (2017) was the wild west of poor tokenomics (no product, high supply). The 'DeFi Summer' (2020) introduced 'Liquidity Mining', which proved that high emissions can bootstrap a network but often lead to long-term price failure. Today, we are in the 'Real Yield' era (GMX, Uniswap Fee switch), where investors prioritize sustainable profit over inflationary rewards.",
            principles: "Key principles are 'Stock-to-Flow' (scarcity), 'Token Velocity' (how often it's traded), and 'Value Accrual' (how does the token capture the value created by the platform?). Analysts juga examine 'Lock-up periods' and 'Cliff' data from tools like TokenUnlocks.",
            mechanism: "It involves 'Staking' (rewards for locking), 'Slashing' (penalties), 'Governance' (voting rights), and 'Fee Burning'. We calculate the 'Real Inflation Rate' by subtracting the burn rate from the emission rate. Some models use 'Vote Escrowed' (ve) tokens to lock liquidity for months or years.",
            usage: "Used by VC firms and retail analysts to decide if a project's price is sustainable. It helps in identifying 'Overvalued' projects where the FDV is billions but the actual revenue is thousands.",
            risks: "Risks include 'Death Spirals' (seen in Terra/UST), 'Governance Attacks' where someone buys enough tokens to steal the treasury, and 'Vesting Cliffs' where early investors sell millions of tokens at once.",
            developments: "Current focus is on 'Dynamic Emissions' that change based on market conditions, and 'Point Systems' that act as a precursor to tokens to prevent early mercenary capital from leaving.",
            references: ["Tokenomics: The Guide to Digital Economics by Sean Au", "Mechanism Capital Research", "Placeholder VC Tokenomics Thesis"],
            quiz: [
                {
                    id: 1,
                    question: "What does FDV stand for?",
                    options: ["Full Digital Value", "Fully Diluted Valuation", "Fixed Debt Variable", "Fast Data Verification"],
                    answer: "Fully Diluted Valuation",
                    explanation: "FDV represents the market cap if all tokens were released into circulation."
                },
                {
                    id: 2,
                    question: "What is a 'Vesting Cliff'?",
                    options: ["When users stop using a token", "A period before any tokens can be sold by founders", "When a project is cancelled", "A 50% drop in price"],
                    answer: "A period before any tokens can be sold by founders",
                    explanation: "A cliff is a delay period in a vesting schedule before the first portion of tokens is unlocked."
                },
                {
                    id: 3,
                    question: "Which metric is best for seeing if a project is actually being used for something other than speculation?",
                    options: ["Market Cap", "Price", "Protocol Revenue", "Twitter Followers"],
                    answer: "Protocol Revenue",
                    explanation: "Revenue generated from fees proves that users are willing to pay to use the service provided."
                }
            ]
        }
    },
    'AdvancedConsensus': {
        Beginner: {
            overview: "Consensus is the core 'Social Agreement' of a blockchain. It is the way thousands of computers that don't know each other agree on which transactions are real. In the real world, we use a central bank or a judge to decide the truth. In crypto, we use code. Consensus Mechanisms are the rules that allow the network to reach an agreement even if some computers are broken or trying to lie. There are two main types you should know: 'Proof of Work' (using electricity and power to find a solution) and 'Proof of Stake' (putting your money on the line as a deposit). These rules make it so that being honest is profitable, while trying to cheat is extremely expensive and risky. Without consensus, a blockchain is just a list of numbers; WITH consensus, it is a global source of truth.",
            history: "Consensus math has been studied since the 1980s, particularly the 'Byzantine Generals Problem'. In 2008, Bitcoin introduced 'Nakamoto Consensus' (Proof of Work), which was the first time this math worked on a global scale. In 2012, Peercoin experimented with 'Proof of Stake' (PoS), and in 2022, Ethereum made the historic 'Merge' from Work to Stake, proving that massive networks can change their entire agreement engine without stopping.",
            principles: "The three requirements for consensus are Safety (all honest nodes see the same thing), Liveness (the network keeps moving), and Sybil Resistance (preventing one person from acting like a million people). It's a delicate balance; if security is too high, the network might be too slow.",
            mechanism: "In Proof of Work, computers (Miners) compete to solve a very hard puzzle. The winner gets to add the block and keep the reward. In Proof of Stake, the network randomly chooses a 'Validator' based on how much money they have 'Staked' (locked up). If a validator tries to lie, their money is 'Slashed' (taken away).",
            usage: "Usage is mandatory for every blockchain. Different systems use different types based on their needs—Bitcoin uses PoW for MAX security, while Solana uses 'Proof of History' for MAX speed.",
            risks: "Risks include 'Centralization of Power', where just a few big companies control most of the mining or staking. Also, some consensus types are vulnerable to the 'Nothing-at-Stake' problem, where validators don't care if they sign multiple versions of the ledger.",
            developments: "Modern research is exploring 'Dag-based' consensus (used by Fantom) and 'State Channels' where consensus only happens for the final result, not every individual step, to save time.",
            references: ["Byzantine Fault Tolerance by Castro & Liskov", "Ethereum Merge Documentation", "Bitcoin Whitepaper"],
            quiz: [
                {
                    id: 1,
                    question: "Which consensus mechanism involves computers solving hard puzzles?",
                    options: ["Proof of Stake", "Proof of Authority", "Proof of Work", "Proof of History"],
                    answer: "Proof of Work",
                    explanation: "Proof of Work requires physical computational effort and energy to secure the network."
                },
                {
                    id: 2,
                    question: "What happens to a validator's money in PoS if they try to hack the network?",
                    options: ["It is doubled", "It stays locked", "It is Slashed", "They get a warning"],
                    answer: "It is Slashed",
                    explanation: "Slashing is a penalty mechanism in Proof of Stake to discourage malicious behavior."
                },
                {
                    id: 3,
                    question: "The goal of consensus is to solve the ______ Generals Problem.",
                    options: ["Roman", "Spartan", "Byzantine", "Digital"],
                    answer: "Byzantine",
                    explanation: "The Byzantine Generals Problem describes the difficulty of decentralized parties reaching consensus without a central authority."
                }
            ]
        },
        Analyst: {
            overview: "Analytical consensus study focuses on the 'Security Budget' and 'Finality Gadgets' of a protocol. We evaluate 'Economic Security'—the dollar cost to corrupt the network's state. In PoW, this is 'Cost per Hour of Hashrate'; in PoS, it's 'Total Stake + Slashing risk'. Analysts study 'Long-range attacks' and 'Check-pointing' mechanisms that prevent an attacker from rewriting the chain's distant history. We use the 'Synchrony Model' (Synchronous, Asynchronous, Partially Synchronous) to understand how the network behaves under extreme stress or internet blackouts.",
            history: "The most significant analytical milestone was the 'Nakamoto Consensus' proof, which showed that under PoW, the longest chain is likely the correct one. Post-2015, the focus shifted to BFT-style consensus (like Tendermint) which offers 'Immediate Finality'. Analysts also track the 'PoW vs PoS' debate from an ESG (Environmental, Social, and Governance) perspective.",
            principles: "Key principles for analysts are 'Finality' (when is a trade permanent?), 'Accountability' (can we prove which node lied?), and 'Quorum' (how many of nodes must agree—usually 2/3 for BFT systems).",
            mechanism: "It involves 'Epochs' and 'Slots' in systems like Ethereum 2.0. Validators are grouped into 'Committees' to verify blocks. In PoW, it's about the 'Difficulty Adjustment' which ensures blocks come out exactly every 10 minutes. Analyst-level understanding includes 'Gasper' (the combo of Casper and LMD GHOST) in Ethereum's current consensus stack.",
            usage: "Used to determine the 'Confidence Level' for large exchange deposits. Analysts look for 'Consensus Health'—the percentage of active validators vs. inactive ones.",
            risks: "Risks include 'Liveness Faults' (the chain stops because nodes can't agree), 'Forking' where the network splits, and 'Censorship' where validators refuse to include certain transactions.",
            developments: "Modern advancements include 'Single Slot Finality' to make transactions instant, and 'Shared Security' (like EigenLayer) where the security of one chain can be borrowed by another.",
            references: ["The Science of the Blockchain by Roger Wattenhofer", "Casper the Friendly Finality Gadget Whitepaper", "BFT Consensus in the Wild (Academic Paper)"],
            quiz: [
                {
                    id: 1,
                    question: "What does 'Finality' mean in a blockchain?",
                    options: ["The block is full", "The transaction cannot be reversed", "The price is stable", "The user has signed"],
                    answer: "The transaction cannot be reversed",
                    explanation: "Finality ensures that once a transaction is added to the block, it's permanent and immutable."
                },
                {
                    id: 2,
                    question: "What is the typical consensus quorum for BFT-based systems?",
                    options: ["51%", "Majority (50% + 1)", "2/3 of nodes", "100% agreement"],
                    answer: "2/3 of nodes",
                    explanation: "Byzantine Fault Tolerance systems usually require 2/3 agreement to prevent a 1/3 minority from lying."
                },
                {
                    id: 3,
                    question: "What is 'Slashing' in PoS?",
                    options: ["Cutting transaction fees", "Taking away a validator's stake for bad behavior", "Making blocks smaller", "Lowering the price of the coin"],
                    answer: "Taking away a validator's stake for bad behavior",
                    explanation: "Slashing is an economic penalty that provides the 'Skin in the Game' necessary for PoS security."
                }
            ]
        }
    },
    'Layer2Scaling': {
        Beginner: {
            overview: "Layer 2 (L2) is like the express lane on a crowded highway. For many years, blockchains like Ethereum became famous for being 'Expensive and Slow'—sometimes a single transaction could cost $50. Layer 2 solutions are separate networks built ON TOP of the main blockchain (Layer 1). They handle thousands of small transactions very quickly and cheaply, and then they 'Roll Up' a summary of those transactions and post it to the main chain. This gives you the best of both worlds: the extreme speed of a new network and the extreme security of a massive network like Ethereum. L2s are the reason we can now have high-speed crypto games and social media without paying high fees for every click.",
            history: "Scaling started with simple 'Sidechains' (like Polygon's original version). However, the real breakthrough came with 'Rollups'. Optimistic Rollups (like Arbitrum) were popularized around 2021, while Zero-Knowledge (ZK) Rollups (like zkSync) became the new gold standard in 2023. These represent the transition from 'Trust-based' scaling to 'Math-based' scaling.",
            principles: "The primary goal is the 'Blockchain Trilemma'—solving scalability without losing security or decentralization. L2s work on the principle of 'Data Availability', which means the main chain always has enough info to reconstruct the L2 state if something goes wrong.",
            mechanism: "Most L2s use a 'Sequencer' to order transactions. In 'Optimistic' L2s, everyone assumes the transactions are right UNLESS someone proves otherwise (a Fraud Proof). In 'ZK' L2s, every batch of transactions comes with a cryptographic 'Math Proof' (Validity Proof) that proves they are 100% correct, so there's no waiting period.",
            usage: "Used for high-frequency trading, NFTs, playing games, and social apps like Farcaster. Apps like Uniswap and OpenSea now have L2 versions that are much cheaper for users.",
            risks: "Currently, many L2s use a single Sequencer, which means if that one computer goes down, the network might stop (Centralization risk). There is also 'Bridge Risk', where a hacker might steal the money used to move funds from L1 to L2.",
            developments: "The focus is now on 'Decentralizing Sequencers' and 'EIP-4844' (The Dencun upgrade), which significantly lowered the cost for L2s to talk to Ethereum, making them even cheaper for users.",
            references: ["The Rollup Roadmap by Vitalik Buterin", "Arbitrum Documentation", "zkSync Whitepaper"],
            quiz: [
                {
                    id: 1,
                    question: "Where do Layer 2 networks get their security from?",
                    options: ["Their own miners", "The Layer 1 blockchain", "The government", "Cloud servers"],
                    answer: "The Layer 1 blockchain",
                    explanation: "Layer 2 solutions 'inherit' the security of the underlying Layer 1 by posting their transaction proofs there."
                },
                {
                    id: 2,
                    question: "Which type of L2 assumes transactions are correct by default?",
                    options: ["ZK-Rollups", "Optimistic Rollups", "Sidechains", "State Channels"],
                    answer: "Optimistic Rollups",
                    explanation: "Optimistic rollups assume validity but allow a 'challenge period' to prove fraud."
                },
                {
                    id: 3,
                    question: "A computer that orders transactions on an L2 is called a ______.",
                    options: ["Miner", "Staker", "Sequencer", "Router"],
                    answer: "Sequencer",
                    explanation: "Sequencers collect transactions and put them in order before batching them to the main chain."
                }
            ]
        },
        Analyst: {
            overview: "Analytical focus on L2s centers on 'Revenue vs. Data Costs' and 'Proof Latency'. We study the 'L2 ecosystem velocity'—how quickly assets move between L1 and various L2s. Analysts evaluate Rollups based on their 'Stage 0/1/2' decentralization (Vitalik's framework), checking if 'Training Wheels' (like developer admin keys) have been removed. We look at 'Compression ratios'—how many L2 transactions can fit into one L1 data blob.",
            history: "The history tracks the evolution from 'Plasma' (now defunct) to 'State Channels' (Lightning Network) to 'Rollups'. Analysts monitor the 'TVL fragmentation', as more L2s (Base, Blast, Scroll) enter the market, competing for the same user base and liquidity.",
            principles: "Key principles are 'Economic Liveness' (can you always get your money out?), 'Censorship Resistance', and 'Trustless Bridging'. Analysts look for the 'Withdrawal Period' (7 days for Optimistic, minutes for ZK) and its impact on capital efficiency.",
            mechanism: "It involving 'Data Availability Sampling', 'Fraud Proof Windows', and 'ZK-circuits'. Analysts study the 'Operator' economics—is it profitable to run a sequencer? They also look at 'Force-inclusion' mechanisms that allow users to bypass a malicious sequencer by talking directly to Layer 1.",
            usage: "Used by analysts to determine which L2 has the 'Stickiest' ecosystem. We track 'Active Contracts' and 'Developer Activity' as lead indicators of which scaling solution will win the 'L2 Wars'.",
            risks: "Risks include 'Sequencer Monopoly', 'Complex bug surface' in ZK-provers, and 'Social Consensus' failures where the community might disagree on a chain-reverting fix.",
            developments: "The move toward 'Superchains' (OP Stack) and 'AggLayer' (Polygon) aims to connect these fragmented L2s into one seamless user experience.",
            references: ["L2Beat - The State of L2 Ecosystem", "Scaling Ethereum Whitepaper", "Zero Knowledge Proofs: An Analyst's Guide"],
            quiz: [
                {
                    id: 1,
                    question: "What is the primary cost for a Layer 2 operator?",
                    options: ["Hiring miners", "Paying for L1 Data Availability", "Marketing", "Electricity"],
                    answer: "Paying for L1 Data Availability",
                    explanation: "L2s must pay for space on the main chain (L1) to post their transaction data and proofs."
                },
                {
                    id: 2,
                    question: "What is 'Stage 2' decentralization for a rollup?",
                    options: ["Having a token", "Being on a roadmap", "No developer keys can change the state", "Having a billion dollars"],
                    answer: "No developer keys can change the state",
                    explanation: "Stage 2 Rollups are fully autonomous, meaning developers can no longer intervene in the state or rules."
                },
                {
                    id: 3,
                    question: "Which rollup type has the shortest withdrawal period to L1?",
                    options: ["Optimistic Rollup", "ZK-Rollup", "Sidechain", "Plasma"],
                    answer: "ZK-Rollup",
                    explanation: "Because ZK-rollups provide a math proof of validity, they don't need a 7-day challenge period like Optimistic ones."
                }
            ]
        }
    },
    'IdentityAndOracles': {
        Beginner: {
            overview: "If a blockchain is a closed computer, Oracles are its 'Windows' to the outside world. Blockchains are incredible at tracking things INSIDE their own network, but they can't know what's happening outside—like the current weather, the price of a stock, or who won the Super Bowl. Oracles are devices that fetch this real-world data and feed it to a smart contract. Digital Identity, on the other hand, is how YOU are recognized in this new world. Instead of using a driver's license or a government ID, you use 'Decentralized Identifiers' (DIDs). These allow you to prove who you are (e.g., 'I am over 18' or 'I am a university student') without giving away your name, address, or social security number. Together, Identity and Oracles bridge the gap between digital code and human reality.",
            history: "Oracles were famously pioneered by Chainlink in 2017, solving the 'Oracle Problem'—how do you trust a single piece of data if the whole system is supposed to be trustless? Identity has evolved from simple wallet addresses to 'ENS' (Ethereum Name Service) like 'yourself.eth', and recently to 'Soulbound Tokens'—NFTs that are tied to your identity and cannot be sold or transferred.",
            principles: "Key principles are Data Integrity (making sure the data isn't fake) and Privacy (giving you control over what information you share). In identity, we talk about 'Self-Sovereignty'—you own your ID, not a company like Google or Facebook.",
            mechanism: "Oracles work by using a network of 'Data Reporters'. They fetch information from multiple websites, compare them, and only send the result if most of them agree. For Identity, we use 'Zero-Knowledge Proofs'. This allows you to say 'I have $1000' without showing your entire bank balance to the world.",
            usage: "Oracles are used for price feeds in DeFi and for sports betting apps. Identity is used for 'Sybil Resistance' (proving you're a human, not a bot) and for digital certificates like diplomas or medical records.",
            risks: "Risks include 'Oracle Exploits', where a hacker manipulates a website to trick an Oracle into sending wrong data. For identity, the biggest risk is 'Identity Theft' if someone gets your private keys, or 'Doxing' if your pseudonymous identity is linked to your real name.",
            developments: "We are moving toward 'Verifiable Credentials' that work across all apps and 'Proof of Personhood' systems like Worldcoin that verify you are a unique human using biometrics.",
            references: ["Chainlink Whitepaper", "W3C Decentralized Identifiers (DIDs) Standard", "Worldcoin Whitepaper"],
            quiz: [
                {
                    id: 1,
                    question: "What is the primary role of an Oracle?",
                    options: ["Secure private keys", "Fetch real-world data", "Build NFT websites", "Mint new tokens"],
                    answer: "Fetch real-world data",
                    explanation: "Oracles act as bridges that bring off-chain data into the on-chain blockchain environment."
                },
                {
                    id: 2,
                    question: "What does DID stand for?",
                    options: ["Digital Identity Deposit", "Decentralized Identifier", "Data Integrity Document", "Distributed IDentification"],
                    answer: "Decentralized Identifier",
                    explanation: "DIDs are a new type of globally unique identifier that allows for verifiable, decentralized digital identity."
                },
                {
                    id: 3,
                    question: "Which technology allows you to prove something about yourself without revealing your personal info?",
                    options: ["Encryption", "Hashing", "Zero-Knowledge Proofs", "Smart Contracts"],
                    answer: "Zero-Knowledge Proofs",
                    explanation: "ZK-proofs enable 'privacy-preserving' identity where you can prove facts without sharing the underlying documentation."
                }
            ]
        },
        Analyst: {
            overview: "Analytical focus on Identity/Oracles is on 'Data Latency' and 'Cryptographic Attribution'. We evaluate Oracles based on their 'Price Deviation' thresholds (when does the price update?) and 'Heartbeat' (how often does it update?). In identity, we look at the 'Addressability' of users across different chains and the 'Social Graph' data that can be used for credit scoring without centralized credit bureaus.",
            history: "The history tracks the move from 'Centralized Oracles' (Coinbase/Binance feeds) to 'Decentralized Oracle Networks' (DONs). For identity, the path went from 'Key-based ID' to 'Readable names' (ENS) to 'Attestations' (Ethereum Attestation Service), allowing for a granular web of trust.",
            principles: "Key principles are 'Liveness' (is the data feed always up?), 'Stake-based Security' (do reporters have money at risk?), and 'Selective Disclosure' (sharing just enough to prove a fact).",
            mechanism: "Mechanism involving 'Weighted Averages', 'Outlier Filtering', and 'Commit-Reveal' schemes to prevent front-running of price data. Identity mechanisms use 'Recursive SNARKs' to compress multiple attestations into one tiny proof.",
            usage: "Used in Analysts to determine the 'Health of a DeFi protocol's price feeds'. If an Oracle is too slow, it can lead to bad debt. Identity is used for 'Airdrop Filtering' to ensure only real humans get rewarded.",
            risks: "Risks include 'Gossip attacks' on oracles, 'Oracle Delay' during periods of high volatility, and 'Identity Fragility' where losing one key could lock you out of your entire digital reputation.",
            developments: "Modern developments focus on 'Cross-chain Oracles' (CCIP) and 'Privacy-preserving KYC' that satisfies regulators without sharing your passport with a dapp.",
            references: ["Decentralized Oracles: A Comprehensive Survey", "The Identity of Things (IdoT) Whitepaper", "Chainlink CCIP Technical Documentation"],
            quiz: [
                {
                    id: 1,
                    question: "What is 'Oracle Latency'?",
                    options: ["The cost of data", "The delay between a real price change and an on-chain update", "The security level of the feed", "The number of data sources"],
                    answer: "The delay between a real price change and an on-chain update",
                    explanation: "Latency is critical in DeFi, as slow oracles can lead to arbitrage or liquidations at incorrect prices."
                },
                {
                    id: 2,
                    question: "What is a 'Zero-Knowledge Proof' in identity?",
                    options: ["A proof that you know nothing", "Proving a statement is true without revealing the data itself", "A password manager", "Deleting your digital history"],
                    answer: "Proving a statement is true without revealing the data itself",
                    explanation: "ZKPs allow for privacy-preserving verification, like proving you're over 21 without showing your birth date."
                },
                {
                    id: 3,
                    question: "What is an 'Attestation' in digital identity?",
                    options: ["A digital signature claiming something about a user", "A bank transfer", "A password reset", "A mining reward"],
                    answer: "A digital signature claiming something about a user",
                    explanation: "Attestations are building blocks of identity, where one party 'vouchsafes' for a fact about another party."
                }
            ]
        }
    }
};
