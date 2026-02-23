"use client"

import { useState } from "react"
import Link from "next/link"

type MegaGroup = {
  id: string
  label: string
  ages: { label: string; href: string }[]
}

const MEGA_GROUPS: MegaGroup[] = [
  {
    id: "all",
    label: "Shop for All Ages",
    ages: [
      { label: "Babies", href: "/shop/age/0-12m" },
      { label: "Toddlers", href: "/shop/age/1-2" },
      { label: "1 Year Olds", href: "/shop/age/1-2" },
      { label: "2 Year Olds", href: "/shop/age/1-2" },
      { label: "3 Year Olds", href: "/shop/age/3-4" },
      { label: "4 Year Olds", href: "/shop/age/3-4" },
      { label: "5 Year Olds", href: "/shop/age/5-7" },
      { label: "6 Year Olds", href: "/shop/age/5-7" },
      { label: "7+", href: "/shop/age/8-plus" },
      { label: "Teens / Adults", href: "/shop/age/8-plus" },
    ],
  },
  {
    id: "girls",
    label: "Curated by Girls",
    ages: [
      { label: "Babies", href: "/shop/age/0-12m" },
      { label: "Toddlers", href: "/shop/age/1-2" },
      { label: "1 Year Olds", href: "/shop/age/1-2" },
      { label: "2 Year Olds", href: "/shop/age/1-2" },
      { label: "3 Year Olds", href: "/shop/age/3-4" },
      { label: "4 Year Olds", href: "/shop/age/3-4" },
      { label: "5 Year Olds", href: "/shop/age/5-7" },
      { label: "6 Year Olds", href: "/shop/age/5-7" },
      { label: "7+", href: "/shop/age/8-plus" },
    ],
  },
  {
    id: "boys",
    label: "Curated by Boys",
    ages: [
      { label: "Babies", href: "/shop/age/0-12m" },
      { label: "Toddlers", href: "/shop/age/1-2" },
      { label: "1 Year Olds", href: "/shop/age/1-2" },
      { label: "2 Year Olds", href: "/shop/age/1-2" },
      { label: "3 Year Olds", href: "/shop/age/3-4" },
      { label: "4 Year Olds", href: "/shop/age/3-4" },
      { label: "5 Year Olds", href: "/shop/age/5-7" },
      { label: "6 Year Olds", href: "/shop/age/5-7" },
      { label: "7+", href: "/shop/age/8-plus" },
    ],
  },
]

export default function MegaMenu() {
  const [active, setActive] = useState(MEGA_GROUPS[0].id)
  const activeGroup = MEGA_GROUPS.find((group) => group.id === active) || MEGA_GROUPS[0]

  return (
    <div
      id="mega-menu-shop-by-age"
      className="absolute left-0 right-0 top-full z-[60] bg-white shadow-[0_30px_60px_-35px_rgba(0,0,0,0.45)]"
    >
      <div className="border-t border-black/10">
        <div className="content-container py-8">
          <div className="grid items-start gap-8 lg:grid-cols-[240px_1fr]">
            <div className="rounded-2xl border border-black/10 bg-white p-4">
              <p className="text-xs uppercase tracking-[0.22em] text-black/40">
                Curated entirely by our customers
              </p>
              <div className="mt-4 flex flex-col gap-2">
                {MEGA_GROUPS.map((group) => (
                  <Link
                    key={group.id}
                    href={group.ages[0]?.href ?? "/shop/age/3-4"}
                    onMouseEnter={() => setActive(group.id)}
                    onFocus={() => setActive(group.id)}
                    className={`rounded-xl border px-3 py-2 text-left text-sm transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1f5eff] ${
                      active === group.id
                        ? "border-[#1f5eff]/30 bg-[#f1f5ff] text-[#1f5eff]"
                        : "border-black/10 text-black/60 hover:border-black/20 hover:bg-black/5"
                    }`}
                  >
                    {group.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-black/10 bg-white p-6">
              <div className="flex items-center justify-between">
                <p className="text-xs uppercase tracking-[0.22em] text-black/40">
                  Browse by age
                </p>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-x-8 gap-y-4 lg:grid-cols-4">
                {activeGroup.ages.map((age) => (
                  <Link
                    key={age.label}
                    href={age.href}
                    className="text-sm text-black/70 transition hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1f5eff]"
                  >
                    {age.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
