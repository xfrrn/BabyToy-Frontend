"use client"

import Link from "next/link"

import type { MarketingNavItem } from "@lib/data/homepage"

export default function MegaMenu({ item }: { item: MarketingNavItem }) {
  if (!item.groups || item.groups.length === 0) {
    return null
  }

  return (
    <div
      id={`mega-menu-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
      className="absolute left-0 right-0 top-full z-[60] bg-white shadow-[0_30px_60px_-35px_rgba(0,0,0,0.45)]"
    >
      <div className="border-t border-black/10">
        <div className="content-container py-8">
          <div className="grid gap-8 lg:grid-cols-[220px_1fr]">
            <div className="rounded-2xl border border-black/10 bg-white p-4">
              <p className="text-xs uppercase tracking-[0.22em] text-black/40">
                Browse {item.label}
              </p>
              <p className="mt-4 text-sm text-black/60">
                Curated shortcuts to help families shop faster.
              </p>
            </div>

            <div className="rounded-2xl border border-black/10 bg-white p-6">
              <div className="grid gap-8 md:grid-cols-2">
                {item.groups.map((group) => (
                  <div key={group.title}>
                    <p className="text-xs uppercase tracking-[0.22em] text-black/40">
                      {group.title}
                    </p>
                    <ul className="mt-4 grid gap-3">
                      {group.links.map((link) => (
                        <li key={link.label}>
                          <Link
                            href={link.href}
                            className="text-sm text-black/70 transition duration-200 ease-out hover:text-black ui-focus"
                          >
                            {link.label}
                          </Link>
                          {link.description ? (
                            <p className="mt-1 text-xs text-black/50">
                              {link.description}
                            </p>
                          ) : null}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
