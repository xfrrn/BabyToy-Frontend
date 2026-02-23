"use client"

import { FormEvent, useState } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"

import { HEADER_LINKS } from "@lib/data/homepage"
import HomeLink from "./home-link"

function getCountryCode(pathname: string) {
  const parts = pathname.split("/").filter(Boolean)
  return parts[0] || "us"
}

export default function MainHeader() {
  const pathname = usePathname()
  const router = useRouter()
  const [query, setQuery] = useState("")
  const countryCode = getCountryCode(pathname)

  const onSubmit = (event: FormEvent) => {
    event.preventDefault()
    const trimmed = query.trim()
    if (!trimmed) return
    router.push(`/${countryCode}/products?q=${encodeURIComponent(trimmed)}`)
  }

  return (
    <div className="bg-white">
      <div className="content-container flex flex-col gap-4 py-5 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center justify-between md:w-[220px]">
          <div className="text-lg font-semibold tracking-[0.2em] text-black/80">
            PLAYHOUSE
          </div>
          <div className="flex items-center gap-2">
            <HomeLink />
            <button
              className="rounded-full border border-black/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-black/60 md:hidden"
              type="button"
            >
              Menu
            </button>
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className="flex flex-1 items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 shadow-[0_10px_30px_-22px_rgba(0,0,0,0.25)] transition duration-200 ease-out focus-within:border-black/20"
        >
          <button
            className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white transition duration-200 ease-out hover:bg-black/90"
            type="submit"
            aria-label="Search"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="M20 20l-3.5-3.5" />
            </svg>
          </button>
          <input
            className="w-full bg-transparent text-sm text-black/80 placeholder:text-black/40 focus:outline-none"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by age, grade, or category"
          />
        </form>

        <div className="hidden items-center justify-end gap-6 text-xs text-black/60 md:flex">
          {HEADER_LINKS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex flex-col items-end ui-link"
            >
              <span className="uppercase tracking-[0.2em] text-[10px]">
                {item.label}
              </span>
              <span className="text-sm text-black/80">{item.detail}</span>
            </Link>
          ))}
          <div className="flex items-center gap-4 text-sm text-black/80">
            <Link href="/account" className="uppercase tracking-[0.2em] text-xs ui-link">
              Account
            </Link>
            <Link href="/cart" className="relative ui-link">
              Cart
              <span className="absolute -right-4 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#ff5b5b] text-[10px] font-semibold text-white">
                0
              </span>
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-between gap-4 text-xs text-black/60 md:hidden">
          <Link href="/account" className="text-sm text-black/80">
            Account
          </Link>
          <Link href="/cart" className="relative text-sm text-black/80">
            Cart
            <span className="absolute -right-3 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#ff5b5b] text-[10px] font-semibold text-white">
              0
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}
