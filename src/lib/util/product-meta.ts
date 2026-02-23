import { HttpTypes } from "@medusajs/types"

function normalize(value: string) {
  return value
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/_/g, "-")
    .replace(/\+/, "plus")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-")
    .trim()
}

export function getMetadataString(
  product: HttpTypes.StoreProduct,
  key: string
): string | null {
  const value = product.metadata?.[key]
  if (typeof value === "string" && value.trim().length > 0) {
    return value.trim()
  }
  return null
}

export function splitTokens(value: string | null): string[] {
  if (!value) return []
  return value
    .split(/,|\||\n/)
    .map((item) => item.trim())
    .filter(Boolean)
}

export function getAgeRange(product: HttpTypes.StoreProduct) {
  return getMetadataString(product, "age_range")
}

export function getToyType(product: HttpTypes.StoreProduct) {
  return getMetadataString(product, "toy_type")
}

export function getHighlight(product: HttpTypes.StoreProduct) {
  return getMetadataString(product, "highlight")
}

export function getSkills(product: HttpTypes.StoreProduct): string[] {
  return splitTokens(getMetadataString(product, "skills"))
}

export function getTagValues(product: HttpTypes.StoreProduct): string[] {
  return product.tags?.map((tag) => tag.value).filter(Boolean) ?? []
}

export function normalizeAgeRange(value: string) {
  return normalize(value)
}

export function matchesAgeRange(product: HttpTypes.StoreProduct, slug: string) {
  const raw = getMetadataString(product, "age_range")
  if (!raw) return false
  return normalize(raw) === normalize(slug)
}

export function matchesCategoryKey(product: HttpTypes.StoreProduct, slug: string) {
  const raw = getMetadataString(product, "category_key")
  if (!raw) return false
  return normalize(raw) === normalize(slug)
}

export function matchesScenarioKey(product: HttpTypes.StoreProduct, slug: string) {
  const raw = getMetadataString(product, "scenario_key")
  const rawList = getMetadataString(product, "scenario_keys")

  const normalizedSlug = normalize(slug)

  if (raw && normalize(raw) === normalizedSlug) {
    return true
  }

  if (rawList) {
    const tokens = splitTokens(rawList).map(normalize)
    return tokens.includes(normalizedSlug)
  }

  return false
}
