import Image from "next/image"

import { HERO_IMAGE } from "@lib/data/homepage"

export default function HeroIntro() {
  return (
    <section className="bg-white">
      <div className="content-container py-8">
        <div className="relative h-[60vh] min-h-[420px] w-full overflow-hidden rounded-3xl bg-black/5">
          <Image
            src={HERO_IMAGE.src}
            alt={HERO_IMAGE.alt}
            fill
            priority
            sizes="(min-width: 1024px) 1200px, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}
