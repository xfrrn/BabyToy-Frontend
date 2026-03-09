import Link from "next/link"

import { Text } from "@medusajs/ui"

import LocalizedClientLink from "@modules/common/components/localized-client-link"

const BRAND_NAME = "KID GOFUN"
const WEBSITE_LABEL = "www.kidgofun.com"
const WEBSITE_HREF = "https://www.kidgofun.com"
const CONTACT_LABEL = "Contact: +86 15575725092"
const CONTACT_HREF = "tel:+8615575725092"

const SOCIAL_LINKS = [
  {
    label: "WeChat",
    href: process.env.NEXT_PUBLIC_WECHAT_URL || "#",
  },
  {
    label: "WhatsApp",
    href: process.env.NEXT_PUBLIC_WHATSAPP_URL || "#",
  },
  {
    label: "Facebook",
    href: process.env.NEXT_PUBLIC_FACEBOOK_URL || "#",
  },
  {
    label: "Instagram",
    href: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "#",
  },
]

function SocialIcon({ label }: { label: string }) {
  const shared = "h-5 w-5"

  switch (label) {
    case "WeChat":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={shared} aria-hidden>
          <path
            d="M8 6.5c-3.314 0-6 2.35-6 5.25 0 1.69.924 3.193 2.36 4.155L3.5 19l2.855-1.428c.528.118 1.08.178 1.645.178 3.314 0 6-2.35 6-5.25S11.314 6.5 8 6.5Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M15.5 10c3.038 0 5.5 2.126 5.5 4.75 0 1.527-.835 2.886-2.134 3.756L19.5 21l-2.585-1.293a6.082 6.082 0 0 1-1.415.168c-3.038 0-5.5-2.126-5.5-4.75s2.462-4.75 5.5-4.75Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <circle cx="6.5" cy="11.5" r="1" fill="currentColor" />
          <circle cx="9.5" cy="11.5" r="1" fill="currentColor" />
          <circle cx="13.5" cy="14.75" r=".9" fill="currentColor" />
          <circle cx="16.5" cy="14.75" r=".9" fill="currentColor" />
        </svg>
      )
    case "WhatsApp":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={shared} aria-hidden>
          <path
            d="M12 21a8.97 8.97 0 0 0 4.586-1.257L21 21l-1.3-4.263A9 9 0 1 0 12 21Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M9.9 8.4c-.25-.56-.52-.57-.76-.58h-.65c-.22 0-.58.08-.88.4s-1.15 1.12-1.15 2.73 1.18 3.16 1.35 3.38c.17.22 2.29 3.66 5.66 4.98 2.8 1.1 3.37.88 3.98.83.6-.05 1.95-.8 2.23-1.57.28-.77.28-1.43.2-1.57-.08-.14-.3-.22-.63-.39-.33-.16-1.95-.97-2.25-1.08-.3-.11-.52-.16-.74.17-.22.33-.85 1.08-1.04 1.3-.19.22-.38.25-.71.08-.33-.16-1.38-.5-2.63-1.6-.98-.87-1.65-1.94-1.84-2.27-.19-.33-.02-.5.14-.67.15-.15.33-.39.5-.58.17-.19.22-.33.33-.55.1-.22.05-.41-.03-.58-.08-.16-.71-1.74-.99-2.35Z"
            fill="currentColor"
          />
        </svg>
      )
    case "Facebook":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={shared} aria-hidden>
          <path d="M13.5 21v-7h2.35l.35-2.75H13.5V9.5c0-.8.22-1.35 1.37-1.35h1.46V5.67A19.61 19.61 0 0 0 14.2 5.5c-2.11 0-3.55 1.29-3.55 3.67v2.08H8.25V14h2.4v7h2.85Z" />
        </svg>
      )
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" className={shared} aria-hidden>
          <rect
            x="4"
            y="4"
            width="16"
            height="16"
            rx="4"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <circle cx="12" cy="12" r="3.75" stroke="currentColor" strokeWidth="1.8" />
          <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
        </svg>
      )
  }
}

export default async function Footer() {
  return (
    <footer className="w-full border-t border-ui-border-base bg-white">
      <div className="content-container flex w-full flex-col">
        <div className="flex flex-col items-center py-24 text-center">
          <LocalizedClientLink
            href="/"
            className="text-3xl font-semibold uppercase tracking-[0.18em] text-black ui-link"
          >
            {BRAND_NAME}
          </LocalizedClientLink>

          <div className="mt-10 flex flex-col items-center gap-3 text-3xl font-medium text-black md:text-4xl">
            <Link href={WEBSITE_HREF} className="ui-link">
              {WEBSITE_LABEL}
            </Link>
            <Link href={CONTACT_HREF} className="ui-link">
              {CONTACT_LABEL}
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            {SOCIAL_LINKS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                aria-label={item.label}
                className={`flex h-14 w-14 items-center justify-center rounded-full border border-black/10 bg-[#f7f8fb] text-black transition duration-200 ease-out hover:border-black/20 hover:bg-black hover:text-white ${
                  item.href === "#" ? "pointer-events-none opacity-50" : ""
                }`}
              >
                <SocialIcon label={item.label} />
              </Link>
            ))}
          </div>
        </div>

        <div className="mb-16 flex w-full items-center justify-center text-ui-fg-muted">
          <Text className="txt-compact-small">
            (c) {new Date().getFullYear()} {BRAND_NAME}. All rights reserved.
          </Text>
        </div>
      </div>
    </footer>
  )
}
