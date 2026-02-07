export const CHROME_STORE_URL =
  "https://chromewebstore.google.com/detail/quora-marketing-tool-q-st/kiobaaahafliibpjmfngkcbgogkbfcen?authuser=1&hl=en";

export const GITHUB_REPO_URL = "https://github.com/netanelbaruch/q-stats-website";
export const GITHUB_ISSUES_URL = "https://github.com/netanelbaruch/q-stats-website/issues";
export const SUPPORT_EMAIL = "netanel93baruch@gmail.com";
export const EXTENSION_VERSION = "3.2.0.0";

export const NAV_LINKS = [
  { label: "Features", href: "/#features" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "FAQ", href: "/#faq" },
  { label: "Privacy", href: "/privacy" },
  { label: "Support", href: "/support" },
];

export const QUORA_FEATURES = [
  {
    title: "Total Views",
    description: "See how many views every Quora question has received since it was created.",
    icon: "👁️",
  },
  {
    title: "Avg Monthly Views",
    description: "Understand the ongoing traffic a question gets each month on average.",
    icon: "📊",
  },
  {
    title: "Follower Count",
    description: "Know how many users are following a question for new answer notifications.",
    icon: "👥",
  },
  {
    title: "Answer Count",
    description: "See how many answers a question already has to gauge competition.",
    icon: "💬",
  },
  {
    title: "Opportunity Ranking",
    description: "Our proprietary score combining views, followers, and competition to find the best questions to answer.",
    icon: "⭐",
  },
  {
    title: "Search Micro-Stats",
    description: "View key stats as badges directly on Quora search results — no clicking needed.",
    icon: "🔍",
  },
];

export const REDDIT_FEATURES = [
  {
    title: "Post Score",
    description: "See the net score (upvotes minus downvotes) for any Reddit post at a glance.",
    icon: "🔺",
  },
  {
    title: "Comment Count",
    description: "Quickly see how many comments a post has attracted — a key engagement signal.",
    icon: "💬",
  },
  {
    title: "Upvote Ratio",
    description: "Understand the percentage of upvotes vs downvotes to gauge sentiment.",
    icon: "📈",
  },
  {
    title: "Post Age",
    description: "Know exactly when a post was created to assess its relevance and freshness.",
    icon: "🕐",
  },
  {
    title: "Subreddit Members",
    description: "See the community size to evaluate potential reach and audience.",
    icon: "🌐",
  },
  {
    title: "Opportunity Ranking",
    description: "Our scoring algorithm helps you find the highest-potential posts to engage with.",
    icon: "⭐",
  },
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: 1,
    title: "Install the Extension",
    description: "Add Q-Stats to Chrome in one click. No account needed, no setup required.",
  },
  {
    step: 2,
    title: "Browse Quora & Reddit",
    description: "Go to any question on Quora or post on Reddit as you normally would.",
  },
  {
    step: 3,
    title: "Get Instant Insights",
    description: "Stats appear automatically as a sleek overlay. Find opportunities in seconds.",
  },
];

export const TESTIMONIALS = [
  {
    name: "Sarah M.",
    role: "Content Marketer",
    text: "Q-Stats completely changed how I find questions to answer on Quora. The opportunity ranking saves me hours every week.",
    rating: 5,
  },
  {
    name: "James K.",
    role: "Growth Hacker",
    text: "The Reddit integration is a game-changer. I can instantly spot high-engagement posts in my niche.",
    rating: 5,
  },
  {
    name: "Priya R.",
    role: "Freelance Writer",
    text: "Simple, fast, and genuinely useful. The search micro-stats feature alone makes this extension worth it.",
    rating: 4,
  },
];

export const FAQ_ITEMS = [
  {
    question: "Is Q-Stats really free?",
    answer:
      "Yes! Q-Stats is completely free to use with all features included. There are no hidden charges, premium tiers, or subscriptions. We believe marketing insights should be accessible to everyone.",
  },
  {
    question: "What data does Q-Stats collect?",
    answer:
      "Q-Stats only reads the current page URL to fetch publicly available statistics from Quora and Reddit. We do not collect personal data, track your browsing, use analytics, or require an account. All data comes from public APIs.",
  },
  {
    question: "How does the Opportunity Ranking work?",
    answer:
      "The Opportunity Ranking is a proprietary score that combines multiple signals — such as views, followers, answer count, and engagement — to help you identify the best questions or posts to engage with. Higher scores indicate greater potential for visibility.",
  },
  {
    question: "Does Q-Stats work on all Quora and Reddit pages?",
    answer:
      "Q-Stats works on individual Quora question pages, Quora search results, and individual Reddit post pages. It does not activate on homepages, profile pages, or login screens.",
  },
  {
    question: "Do I need an account to use Q-Stats?",
    answer:
      "No account is needed. Just install the extension and start browsing. Q-Stats works immediately without any sign-up or configuration.",
  },
  {
    question: "Is Firefox supported?",
    answer:
      "Currently Q-Stats is available exclusively for Google Chrome. We may consider other browsers in the future based on user demand.",
  },
];
