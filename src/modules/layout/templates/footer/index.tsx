import { listCategories } from "@lib/data/categories"
import { listCollections } from "@lib/data/collections"
import { FOOTER_LINKS } from "@lib/data/homepage"
import { Text } from "@medusajs/ui"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import MedusaCTA from "@modules/layout/components/medusa-cta"

export default async function Footer() {
  const { collections } = await listCollections({
    fields: "*products",
  })
  const productCategories = await listCategories()

  return (
    <footer className="w-full border-t border-ui-border-base bg-white">
      <div className="content-container flex w-full flex-col">
        <div className="grid gap-10 py-24 lg:grid-cols-[240px_1fr_260px]">
          <div>
            <LocalizedClientLink
              href="/"
              className="txt-compact-xlarge-plus text-ui-fg-subtle hover:text-ui-fg-base uppercase"
            >
              Medusa Store
            </LocalizedClientLink>
            <p className="mt-4 text-sm text-black/60">
              Thoughtful learning toys for curious kids and calm homes.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col gap-y-2">
              <span className="txt-small-plus txt-ui-fg-base">Quick links</span>
              <ul className="grid grid-cols-1 gap-2 text-ui-fg-subtle txt-small">
                {FOOTER_LINKS.quickLinks.map((link) => (
                  <li key={link.label}>
                    <LocalizedClientLink
                      className="hover:text-ui-fg-base"
                      href={link.href}
                    >
                      {link.label}
                    </LocalizedClientLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-y-2">
              <span className="txt-small-plus txt-ui-fg-base">About</span>
              <ul className="grid grid-cols-1 gap-2 text-ui-fg-subtle txt-small">
                {FOOTER_LINKS.about.map((link) => (
                  <li key={link.label}>
                    <LocalizedClientLink
                      className="hover:text-ui-fg-base"
                      href={link.href}
                    >
                      {link.label}
                    </LocalizedClientLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-y-2">
              <span className="txt-small-plus txt-ui-fg-base">Mission</span>
              <p className="text-ui-fg-subtle txt-small">
                {FOOTER_LINKS.missionText}
              </p>
            </div>

            <div className="flex flex-col gap-y-2">
              <span className="txt-small-plus txt-ui-fg-base">Shipping</span>
              <ul className="grid grid-cols-1 gap-2 text-ui-fg-subtle txt-small">
                {FOOTER_LINKS.shipping.map((link) => (
                  <li key={link.label}>
                    <LocalizedClientLink
                      className="hover:text-ui-fg-base"
                      href={link.href}
                    >
                      {link.label}
                    </LocalizedClientLink>
                  </li>
                ))}
              </ul>
              <p className="text-ui-fg-subtle txt-small">
                {FOOTER_LINKS.shippingText}
              </p>
            </div>

            {productCategories && productCategories?.length > 0 && (
              <div className="flex flex-col gap-y-2">
                <span className="txt-small-plus txt-ui-fg-base">Categories</span>
                <ul
                  className="grid grid-cols-1 gap-2 text-ui-fg-subtle txt-small"
                  data-testid="footer-categories"
                >
                  {productCategories?.slice(0, 6).map((c) => {
                    if (c.parent_category) {
                      return
                    }

                    return (
                      <li key={c.id}>
                        <LocalizedClientLink
                          className="hover:text-ui-fg-base"
                          href={`/categories/${c.handle}`}
                          data-testid="category-link"
                        >
                          {c.name}
                        </LocalizedClientLink>
                      </li>
                    )
                  })}
                </ul>
              </div>
            )}

            {collections && collections.length > 0 && (
              <div className="flex flex-col gap-y-2">
                <span className="txt-small-plus txt-ui-fg-base">Collections</span>
                <ul className="grid grid-cols-1 gap-2 text-ui-fg-subtle txt-small">
                  {collections?.slice(0, 6).map((c) => (
                    <li key={c.id}>
                      <LocalizedClientLink
                        className="hover:text-ui-fg-base"
                        href={`/collections/${c.handle}`}
                      >
                        {c.title}
                      </LocalizedClientLink>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="rounded-3xl border border-black/5 bg-[#f7f8fb] p-6">
            <p className="text-xs uppercase tracking-[0.25em] text-black/40">
              Newsletter
            </p>
            <p className="mt-3 text-sm text-black/70">
              Get new arrivals, play guides, and member-only perks.
            </p>
            <div className="mt-4 flex flex-col gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm focus:outline-none"
              />
              <button
                type="button"
                className="rounded-full bg-black px-6 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white"
              >
                Subscribe
              </button>
            </div>
            <div className="mt-6">
              <p className="text-xs uppercase tracking-[0.25em] text-black/40">
                Country/region
              </p>
              <div className="mt-2 grid gap-2 text-xs text-black/60">
                {FOOTER_LINKS.countries.map((label) => (
                  <span
                    key={label}
                    className="rounded-full border border-black/10 bg-white px-3 py-1"
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-6">
              <p className="text-xs uppercase tracking-[0.25em] text-black/40">
                Payment
              </p>
              <div className="mt-2 flex flex-wrap gap-2 text-xs text-black/60">
                {FOOTER_LINKS.payment.map((label) => (
                  <span
                    key={label}
                    className="rounded-full border border-black/10 bg-white px-3 py-1"
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16 flex w-full items-center justify-between text-ui-fg-muted">
          <Text className="txt-compact-small">
            漏 {new Date().getFullYear()} Medusa Store. All rights reserved.
          </Text>
          <MedusaCTA />
        </div>
      </div>
    </footer>
  )
}
