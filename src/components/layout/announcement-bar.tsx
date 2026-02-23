import Link from "next/link"

const ANNOUNCEMENT = {
  text: "FREE SHIPPING ON ANY ORDER OF $99+!",
  ctaLabel: "SEE DETAILS",
  href: "/shop/scenario/shipping",
}

export default function AnnouncementBar() {
  return (
    <div className="bg-[#1f5eff] text-white">
      <div className="content-container flex items-center justify-between gap-4 py-2 text-xs font-semibold uppercase tracking-[0.18em]">
        <span>{ANNOUNCEMENT.text}</span>
        <Link
          href={ANNOUNCEMENT.href}
          aria-label="See shipping details"
          className="rounded-full border border-white/50 px-3 py-1 text-[10px] tracking-[0.22em] transition hover:border-white hover:bg-white/10"
        >
          {ANNOUNCEMENT.ctaLabel}
        </Link>
      </div>
    </div>
  )
}
