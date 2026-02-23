import Link from "next/link"

import { LEARNING_TOOLS_SPOTLIGHT } from "@lib/data/homepage"

export default function LearningToolsSpotlight() {
  return (
    <section className="bg-white">
      <div className="content-container py-16">
        <h2 className="text-2xl font-semibold text-black">
          {LEARNING_TOOLS_SPOTLIGHT.title}
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {LEARNING_TOOLS_SPOTLIGHT.items.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-black/5 bg-[#f9f7f2] p-6 shadow-[0_16px_36px_-28px_rgba(0,0,0,0.22)]"
            >
              <p className="text-xs uppercase tracking-[0.25em] text-black/40">
                {item.tag}
              </p>
              <h3 className="mt-3 text-lg font-semibold text-black">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-black/60">{item.description}</p>
              <Link
                href={item.href}
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-black/70"
              >
                Learn more
                <span aria-hidden>→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
