"use client"

import { useState } from "react"
import Link from "next/link"

const VIDEO_SRC = "https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4"
const POSTER_SRC = "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1800&q=80"

const HERO_CTA = {
  label: "View Toy",
  href: "/shop/scenario/featured",
}

export default function VideoHero() {
  const [hasError, setHasError] = useState(false)

  return (
    <section className="relative h-[70vh] min-h-[520px] w-full overflow-hidden bg-black">
      {!hasError ? (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster={POSTER_SRC}
          onError={() => setHasError(true)}
        >
          <source src={VIDEO_SRC} type="video/mp4" />
        </video>
      ) : (
        <div
          className="absolute inset-0 h-full w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${POSTER_SRC})` }}
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

      <div className="content-container relative h-full">
        <div className="absolute bottom-10 right-6 max-w-xs rounded-3xl bg-white/95 p-5 shadow-[0_20px_45px_-30px_rgba(0,0,0,0.6)]">
          <p className="text-xs uppercase tracking-[0.3em] text-black/40">Featured</p>
          <h2 className="mt-2 text-2xl font-semibold text-black">MAGSHUTO</h2>
          <p className="mt-2 text-sm text-black/60">
            A magnetic building set that sparks calm, creative focus.
          </p>
          <Link
            href={HERO_CTA.href}
            aria-label="View featured toy"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#ff5b5b] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white"
          >
            {HERO_CTA.label}
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
