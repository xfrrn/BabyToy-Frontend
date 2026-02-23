"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import MegaMenu from "./mega-menu"

const NAV_ITEMS = [
  { label: "Shop by Age", href: "/shop/age/3-4" },
  { label: "Best Sellers", href: "/shop/scenario/favorites" },
  { label: "New Releases", href: "/shop/scenario/featured" },
  { label: "Categories", href: "/shop/category/building" },
  { label: "Collection", href: "/shop/scenario/favorites" },
  { label: "Sale", href: "/shop/scenario/shipping" },
]

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
          {NAV_ITEMS.map((item) => {
            const isActive = normalizedPath.startsWith(item.href)

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
                  href={item.href}
                  aria-expanded={item.label === "Shop by Age" ? openItem === item.label : undefined}
                  aria-controls={item.label === "Shop by Age" ? "mega-menu-shop-by-age" : undefined}
                  className={`flex items-center gap-2 border-b-2 px-1 pb-1 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1f5eff] ${
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

      {openItem === "Shop by Age" ? (
        <div onMouseEnter={clearCloseTimer} onMouseLeave={scheduleClose}>
          <MegaMenu />
        </div>
      ) : null}

      {mobileOpen ? (
        <div id="primary-nav-mobile" className="border-t border-black/5 bg-white md:hidden">
          <div className="content-container flex flex-col gap-3 py-4 text-sm text-black/70">
            {NAV_ITEMS.map((item) => {
              const isActive = normalizedPath.startsWith(item.href)

              return (
                <details key={item.label} className="rounded-2xl border border-black/10 px-4 py-3">
                  <summary className={`cursor-pointer list-none font-semibold ${
                    isActive ? "text-black" : "text-black"
                  }`}>
                    {item.label}
                  </summary>
                  {item.label === "Shop by Age" ? (
                    <div className="mt-3 grid grid-cols-2 gap-2 text-xs text-black/60">
                      {[
                        { label: "Babies", href: "/shop/age/0-12m" },
                        { label: "Toddlers", href: "/shop/age/1-2" },
                        { label: "1 Year Olds", href: "/shop/age/1-2" },
                        { label: "2 Year Olds", href: "/shop/age/1-2" },
                        { label: "3 Year Olds", href: "/shop/age/3-4" },
                        { label: "4 Year Olds", href: "/shop/age/3-4" },
                        { label: "5 Year Olds", href: "/shop/age/5-7" },
                        { label: "6 Year Olds", href: "/shop/age/5-7" },
                        { label: "7+", href: "/shop/age/8-plus" },
                      ].map((age) => (
                        <Link
                          key={age.label}
                          href={age.href}
                          className="rounded-xl bg-black/5 px-3 py-2"
                        >
                          {age.label}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link href={item.href} className="mt-2 inline-flex text-xs text-black/60">
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
