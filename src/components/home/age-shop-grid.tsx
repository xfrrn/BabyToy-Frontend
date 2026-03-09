import Link from "next/link"

const AGE_CARDS = [
  {
    value: "0-24",
    unit: "Months",
    title: "0-24 Months",
    href: "/shop/age/0-24-months",
  },
  {
    value: "2-4",
    unit: "Years",
    title: "2-4 Years",
    href: "/shop/age/2-4-years",
  },
  {
    value: "5-7",
    unit: "Years",
    title: "5-7 Years",
    href: "/shop/age/5-7-years",
  },
  {
    value: "8-10",
    unit: "Years",
    title: "8-10 Years",
    href: "/shop/age/8-10-years",
  },
  {
    value: "11-13",
    unit: "Years",
    title: "11-13 Years",
    href: "/shop/age/11-13-years",
  },
  {
    value: "14+",
    unit: "Years",
    title: "14+ Years",
    href: "/shop/age/14-plus-years",
  },
]

export default function AgeShopGrid() {
  return (
    <section className="bg-white">
      <div className="content-container py-16">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-black/40">
              Age
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-black">
              Shop by age
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-black/60">
              Pick the right age range and jump straight into the matching products.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-3 xl:grid-cols-6">
          {AGE_CARDS.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="group flex flex-col items-center text-center"
            >
              <div className="flex aspect-square w-full max-w-[260px] items-center justify-center rounded-full bg-[#f1f1f1] transition duration-200 ease-out group-hover:bg-[#e8e8e8]">
                <div className="flex flex-col items-center leading-none text-black">
                  <span className="text-4xl font-semibold tracking-[-0.04em] md:text-5xl">
                    {card.value}
                  </span>
                  <span className="mt-3 text-2xl font-semibold md:text-3xl">
                    {card.unit}
                  </span>
                </div>
              </div>
              <p className="mt-5 text-lg font-medium text-black underline-offset-4 transition duration-200 ease-out group-hover:underline">
                {card.title}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
