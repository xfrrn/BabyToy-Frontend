export type MarketingNavLink = {
  label: string
  href: string
  description?: string
}

export type MarketingNavGroup = {
  title: string
  links: MarketingNavLink[]
}

export type MarketingNavItem = {
  label: string
  href?: string
  groups?: MarketingNavGroup[]
}

export const ANNOUNCEMENT = {
  text: "New Year Sale: Spend $350 to get $40 off plus free shipping.",
  ctaLabel: "See details",
  href: "/shop/scenario/shipping",
}

export const BRAND_NAME = "KID GOFUN"

const emailAddress = process.env.NEXT_PUBLIC_CONTACT_EMAIL || ""

export const HEADER_LINKS = [
  {
    label: "Email",
    detail: emailAddress || "Set contact email",
    href: emailAddress ? `mailto:${emailAddress}` : "#",
  },
  {
    label: "WeChat",
    detail: "Chat now",
    href: process.env.NEXT_PUBLIC_WECHAT_URL || "#",
  },
  {
    label: "WhatsApp",
    detail: "Chat now",
    href: process.env.NEXT_PUBLIC_WHATSAPP_URL || "#",
  },
]

export const MARKETING_NAV: MarketingNavItem[] = [
  { label: "ALL PRODUCTS", href: "/products" },
  {
    label: "CATEGORY",
    groups: [
      {
        title: "Category",
        links: [
          { label: "Building Toys", href: "/shop/category/building" },
          { label: "Sensory Play", href: "/shop/category/sensory" },
          { label: "Puzzles", href: "/shop/category/puzzles" },
          { label: "STEM Learning", href: "/shop/category/stem" },
          { label: "Pretend Play", href: "/shop/category/pretend" },
          { label: "Travel Toys", href: "/shop/category/travel" },
        ],
      },
    ],
  },
  { label: "HOT SELL", href: "/shop/scenario/featured" },
  {
    label: "AGE",
    groups: [
      {
        title: "Age",
        links: [
          { label: "0-12 Months", href: "/shop/age/0-12m" },
          { label: "1-2 Years", href: "/shop/age/1-2" },
          { label: "3-4 Years", href: "/shop/age/3-4" },
          { label: "5-7 Years", href: "/shop/age/5-7" },
          { label: "8+ Years", href: "/shop/age/8-plus" },
        ],
      },
    ],
  },
]

export const HERO_IMAGE = {
  alt: "FritzS Learning hero",
  src:
    "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=2000&q=80",
}

export const BRAND_INTRO = {
  eyebrow: "Our approach",
  title: "Learning-led play, curated for real families",
  subtitle: "We focus on skill-building play that feels joyful and calm at home.",
  body: "Every pick is screened for clear age guidance, open-ended creativity, and materials parents can trust. Shop by age, grade, or category and find the right fit in minutes.",
  badge: "Ships in 1-2 Days",
  cta: "Explore Starter Favorites",
  ctaHref: "/shop/scenario/featured",
}

export const FEATURED_PRODUCTS = {
  eyebrow: "All Products",
  title: "All Products",
  subtitle: "Browse all learning tools.",
  strategy: "default" as const,
}

export const COLLECTION_SPOTLIGHT = {
  eyebrow: "Collections",
  title: "Curated play paths",
  subtitle: "Browse by intention instead of endless scrolling.",
  items: [
    {
      title: "Calm Focus",
      description: "Quiet, tactile toys for deep concentration.",
      href: "/shop/category/sensory",
      tag: "Sensory",
    },
    {
      title: "Builders Club",
      description: "Construction sets that grow with confidence.",
      href: "/shop/category/building",
      tag: "Building",
    },
    {
      title: "Story & Role Play",
      description: "Pretend play for empathy and language.",
      href: "/shop/category/pretend",
      tag: "Pretend",
    },
    {
      title: "STEM Starters",
      description: "Early science and engineering discoveries.",
      href: "/shop/category/stem",
      tag: "STEM",
    },
    {
      title: "Puzzle Corner",
      description: "Problem-solving that feels fun, not forced.",
      href: "/shop/category/puzzles",
      tag: "Puzzles",
    },
    {
      title: "Travel Ready",
      description: "Compact kits for on-the-go learning.",
      href: "/shop/category/travel",
      tag: "Travel",
    },
  ],
}

export const BLOG_HIGHLIGHTS = {
  eyebrow: "From the blog",
  title: "Guides for thoughtful play",
  subtitle: "Tips, activity ideas, and parent-tested picks.",
  posts: [
    {
      title: "How to choose toys by age without overwhelm",
      excerpt: "A quick checklist for matching play styles to the right stage.",
      href: "/blog/how-to-choose-toys",
      date: "Jan 15, 2026",
    },
    {
      title: "5 calm-time activities for rainy afternoons",
      excerpt: "Low-mess ideas that keep curious minds engaged.",
      href: "/blog/calm-time-activities",
      date: "Feb 2, 2026",
    },
    {
      title: "Building a STEM shelf at home",
      excerpt: "Simple ways to encourage problem-solving each week.",
      href: "/blog/stem-shelf",
      date: "Feb 18, 2026",
    },
  ],
}

export const LEARNING_TOOLS_SPOTLIGHT = {
  title: "Learning tools for playful growth",
  items: [
    {
      title: "Fine Motor Skills",
      description: "Small muscle coordination and playful practice.",
      href: "/shop/category/fine-motor",
      tag: "Category",
    },
    {
      title: "How U Feel庐 Dial Your Feeling Chat",
      description: "Emotion learning tool for mindful conversations.",
      href: "/products/how-u-feel",
      tag: "Product",
    },
    {
      title: "New",
      description: "New FritzS Learning educational toys.",
      href: "/products?sort=created_at",
      tag: "Collection",
    },
  ],
}

export const PROMO_HERO = {
  videoSrc: "https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4",
  posterSrc:
    "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1800&q=80",
  eyebrow: "Featured",
  title: "MAGSHUTO",
  body: "A magnetic building set that sparks calm, creative focus.",
  ctaLabel: "View Toy",
  ctaHref: "/shop/scenario/featured",
}

export const FOOTER_LINKS = {
  quickLinks: [
    { label: "All Products", href: "/products" },
    { label: "Best Sellers", href: "/shop/scenario/featured" },
    { label: "New Arrivals", href: "/products?sort=created_at" },
    { label: "Blog", href: "/blog" },
  ],
  about: [
    { label: "FritzS Story", href: "/about" },
    { label: "Contact Us", href: "/contact" },
  ],
  missionText:
    "We provide toys that help parents connect to their children and tools that help teachers connect to their students. Let FritzS Learning products decorate your home and classroom, making learning more interesting and exciting!",
  shipping: [
    { label: "Shipping & Returns", href: "/shop/scenario/shipping" },
    { label: "Order Tracking", href: "/account/orders" },
    { label: "Gift Services", href: "/collections/gift-ready" },
  ],
  shippingText:
    "Free shipping for Hong Kong purchase upon $100. SF Express free shipping (min $100). Ships in about two working days. Free shipping for purchase over NTD380 in Taiwan.",
  countries: ["China (CNY 楼)", "Hong Kong SAR (HKD $)", "Macao SAR (MOP P)", "Taiwan (TWD $)"],
  payment: ["Apple Pay", "Google Pay", "Mastercard", "PayPal", "Shop Pay", "Union Pay", "Visa"],
}
