export const featuredArticles = [
    {
        id: 1,
        category: "Security",
        author: "Dr. Alice Smith",
        readTime: "12 min",
        image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=600",
        Beginner: {
            title: "What are Zero-Knowledge Proofs?",
            excerpt: "A simple guide to how digital secrets are kept safe without passwords."
        },
        Analyst: {
            title: "Market Implications of ZK-Rollups",
            excerpt: "How Zero-Knowledge technology is driving the next wave of L2 infrastructure valuations."
        },
        Developer: {
            title: "Implementing zk-SNARKs in Circom",
            excerpt: "A technical walkthrough of building validity circuits for decentralized applications."
        },
        Investor: {
            title: "The ZK Investment Thesis",
            excerpt: "Analyzing the competitive landscape of privacy-preserving protocols for institutional portfolios."
        }
    },
    {
        id: 2,
        category: "Infrastructure",
        author: "Bob Chain",
        readTime: "8 min",
        image: "https://images.unsplash.com/photo-1622790698141-94e30457ef12?auto=format&fit=crop&q=80&w=600",
        Beginner: {
            title: "The Basics of Ethereum Staking",
            excerpt: "How you can participate in securing the world’s largest smart contract network."
        },
        Analyst: {
            title: "Validator Yield Dynamics",
            excerpt: "Analyzing the correlation between network activity and staking rewards in the post-Merge era."
        },
        Developer: {
            title: "Optimizing Validator Node Uptime",
            excerpt: "Advanced configurations for lighthouse and prysm clients to maximize reliability."
        },
        Investor: {
            title: "ETH as a Productive Asset",
            excerpt: "Quantifying the economic moat of Ethereum staking as a benchmark rate for DeFi."
        }
    }
];

export const topCoins = [
    { rank: 1, name: "Bitcoin", symbol: "BTC", price: 64231.50, change: 2.4, volume: "35.2B", sparkline: [62000, 63500, 63000, 64231] },
    { rank: 2, name: "Ethereum", symbol: "ETH", price: 3452.12, change: -1.2, volume: "18.5B", sparkline: [3550, 3500, 3480, 3452] },
    { rank: 3, name: "Solana", symbol: "SOL", price: 145.67, change: 5.8, volume: "4.1B", sparkline: [130, 135, 142, 145] },
    { rank: 4, name: "Avalanche", symbol: "AVAX", price: 38.45, change: 3.2, volume: "1.2B", sparkline: [35, 37, 36, 38.45] },
];

export const userStats = {
    lessonsCompleted: 14,
    certificatesEarned: 2,
    readingStreak: 5,
    points: 1250,
    knowledgeScore: 88,
    portfolioValue: 128450.65,
    portfolioChange: 5.4,
    totalProfit: 12450.30,
    riskScore: "Low",
    accountStatus: "Verified Pro",
    confidenceIndex: 94
};

export const marketSignals = [
    { coin: "BTC", signal: "Strong Buy", strength: 92 },
    { coin: "ETH", signal: "Neutral", strength: 54 },
    { coin: "SOL", signal: "Buy", strength: 78 }
];

export const recentDiscussions = [
    { id: 1, title: "ZK-Rollups vs Optimistic", author: "Vitalik_fan", replies: 24, expert: true },
    { id: 2, title: "Regulatory impact on DeFi", author: "LegalMaster", replies: 12, expert: false }
];
