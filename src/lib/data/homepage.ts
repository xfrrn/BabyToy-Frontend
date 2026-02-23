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

export const HEADER_LINKS = [
  { label: "Call", detail: "1-800-555-0199", href: "tel:1-800-555-0199" },
  { label: "Help", detail: "Support", href: "/shop/scenario/shipping" },
  { label: "Store", detail: "All Products", href: "/products" },
]

export const MARKETING_NAV: MarketingNavItem[] = [
  {
    label: "Featured",
    groups: [
      {
        title: "Featured",
        links: [
          { label: "New", href: "/products?sort=created_at" },
          { label: "Top-Rated", href: "/shop/scenario/favorites" },
          { label: "Best Sellers", href: "/shop/scenario/featured" },
        ],
      },
    ],
  },
  {
    label: "Age",
    groups: [
      {
        title: "Age",
        links: [
          { label: "18 mos", href: "/shop/age/0-12m" },
          { label: "2 years", href: "/shop/age/1-2" },
          { label: "3-4 years", href: "/shop/age/3-4" },
          { label: "5-7 years", href: "/shop/age/5-7" },
          { label: "8 and up", href: "/shop/age/8-plus" },
        ],
      },
    ],
  },
  {
    label: "Grade",
    groups: [
      {
        title: "Grade",
        links: [
          { label: "Toddler", href: "/shop/age/1-2" },
          { label: "Pre-K", href: "/shop/age/3-4" },
          { label: "Kindergarten", href: "/shop/age/5-7" },
          { label: "1st Grade and up", href: "/shop/age/8-plus" },
        ],
      },
    ],
  },
  {
    label: "Category",
    groups: [
      {
        title: "Category",
        links: [
          { label: "English Language", href: "/shop/category/english" },
          { label: "MATH", href: "/shop/category/math" },
          { label: "Engineering", href: "/shop/category/engineering" },
          { label: "Science", href: "/shop/category/science" },
          { label: "Fine Motor Skills Tools", href: "/shop/category/fine-motor" },
          { label: "Social and Emotional Learning", href: "/shop/category/sel" },
        ],
      },
    ],
  },
  {
    label: "Collections",
    groups: [
      {
        title: "Collections",
        links: [
          { label: "Smart Match®", href: "/collections/smart-match" },
          { label: "GeoTools®", href: "/collections/geotools" },
          { label: "Nature Explorer®", href: "/collections/nature-explorer" },
          { label: "How U Feel®", href: "/collections/how-u-feel" },
          { label: "SrewMe Up®", href: "/collections/srewme-up" },
          { label: "Tick! Tick! Tick! Clock®", href: "/collections/tick-tick" },
          { label: "School Supplies", href: "/collections/school-supplies" },
        ],
      },
    ],
  },
  { label: "All Products", href: "/products" },
  { label: "Blog", href: "/blog" },
  { label: "Log in", href: "/account" },
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
  eyebrow: "Featured products",
  title: "Featured products",
  subtitle: "Shop our most loved learning tools.",
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
  title: "多款玩住學教具，立即將小朋友潛能解鎖！",
  items: [
    {
      title: "Fine Motor Skills",
      description: "Small muscle coordination and playful practice.",
      href: "/shop/category/fine-motor",
      tag: "Category",
    },
    {
      title: "How U Feel® Dial Your Feeling Chat",
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
  countries: ["China (CNY ¥)", "Hong Kong SAR (HKD $)", "Macao SAR (MOP P)", "Taiwan (TWD $)"],
  payment: ["Apple Pay", "Google Pay", "Mastercard", "PayPal", "Shop Pay", "Union Pay", "Visa"],
}
