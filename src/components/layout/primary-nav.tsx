"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { MARKETING_NAV } from "@lib/data/homepage"
import MegaMenu from "./mega-menu"

const CLOSE_DELAY_MS = 120

function stripCountry(pathname: string) {
  const parts = pathname.split("/").filter(Boolean)
  if (parts.length === 0) return "/"
  return `/${parts.slice(1).join("/")}`
}

export default function PrimaryNav() {
  const [openItem, setOpenItem] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const closeTimer = useRef<number | null>(null)
  const pathname = usePathname()
  const normalizedPath = stripCountry(pathname)

  const clearCloseTimer = () => {
    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current)
      closeTimer.current = null
    }
  }

  const scheduleClose = () => {
    clearCloseTimer()
    closeTimer.current = window.setTimeout(() => {
      setOpenItem(null)
    }, CLOSE_DELAY_MS)
  }

  useEffect(() => {
    return () => {
      clearCloseTimer()
    }
  }, [])

  return (
    <div
      className="relative border-b border-black/5 bg-white shadow-[0_18px_40px_-35px_rgba(0,0,0,0.35)]"
      onMouseLeave={scheduleClose}
      onMouseEnter={clearCloseTimer}
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          setOpenItem(null)
        }
      }}
    >
      <div className="content-container flex items-center justify-between py-3">
        <button
          className="text-xs uppercase tracking-[0.2em] text-black/60 md:hidden"
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-expanded={mobileOpen}
          aria-controls="primary-nav-mobile"
        >
          {mobileOpen ? "Close" : "Browse"}
        </button>

        <ul className="hidden items-center gap-8 text-sm text-black/70 md:flex">
          {MARKETING_NAV.map((item) => {
            const href = item.href ?? item.groups?.[0]?.links[0]?.href ?? "#"
            const isActive =
              item.href && normalizedPath.startsWith(item.href)

            return (
              <li
                key={item.label}
                onMouseEnter={() => {
                  clearCloseTimer()
                  setOpenItem(item.label)
                }}
                onFocus={() => setOpenItem(item.label)}
                className="relative"
              >
                <Link
                  href={href}
                  aria-expanded={item.groups ? openItem === item.label : undefined}
                  aria-controls={
                    item.groups
                      ? `mega-menu-${item.label.toLowerCase().replace(/\s+/g, "-")}`
                      : undefined
                  }
                  className={`flex items-center gap-2 border-b-2 px-1 pb-1 transition duration-200 ease-out ui-focus ${
                    isActive
                      ? "border-[#1f5eff] text-black"
                      : openItem === item.label
                        ? "border-[#1f5eff] text-black"
                        : "border-transparent hover:border-black/20"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            )
          })}
        </ul>

        <div className="hidden text-xs uppercase tracking-[0.3em] text-black/40 md:block">
          Explore
        </div>
      </div>

      {MARKETING_NAV.map((item) =>
        item.groups && openItem === item.label ? (
          <div
            key={item.label}
            onMouseEnter={clearCloseTimer}
            onMouseLeave={scheduleClose}
          >
            <MegaMenu item={item} />
          </div>
        ) : null
      )}

      {mobileOpen ? (
        <div id="primary-nav-mobile" className="border-t border-black/5 bg-white md:hidden">
          <div className="content-container flex flex-col gap-3 py-4 text-sm text-black/70">
            {MARKETING_NAV.map((item) => {
              const href = item.href ?? item.groups?.[0]?.links[0]?.href ?? "#"

              return (
                <details key={item.label} className="rounded-2xl border border-black/10 px-4 py-3">
                  <summary className="cursor-pointer list-none font-semibold">
                    {item.label}
                  </summary>
                  {item.groups ? (
                    <div className="mt-3 grid gap-4 text-xs text-black/60">
                      {item.groups.map((group) => (
                        <div key={group.title}>
                          <p className="text-[10px] uppercase tracking-[0.2em] text-black/40">
                            {group.title}
                          </p>
                          <div className="mt-2 grid grid-cols-2 gap-2">
                            {group.links.map((link) => (
                              <Link
                                key={link.label}
                                href={link.href}
                                className="rounded-xl bg-black/5 px-3 py-2 transition duration-200 ease-out hover:bg-black/10"
                              >
                                {link.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <Link href={href} className="mt-2 inline-flex text-xs text-black/60 ui-link">
                      Go to {item.label}
                    </Link>
                  )}
                </details>
              )
            })}
          </div>
        </div>
      ) : null}
    </div>
  )
}
