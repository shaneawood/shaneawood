// Serve images through the Netlify Image CDN so pages never ship full-size originals.
export function cdn(src: string, width: number, height?: number) {
  const params = new URLSearchParams({ url: src, w: String(width), fm: 'webp', q: '80' })
  if (height) {
    params.set('h', String(height))
    params.set('fit', 'cover')
  }
  return `/.netlify/images?${params.toString()}`
}

export function cdnSrcSet(src: string, widths: number[], aspect?: number) {
  return widths
    .map((w) => `${cdn(src, w, aspect ? Math.round(w * aspect) : undefined)} ${w}w`)
    .join(', ')
}
