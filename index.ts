export interface Rgba {
  r: number
  g: number
  b: number
  a: number
}

export const Rgba = ( r = 0, g = 0, b = 0, a = 0 ) : Rgba => {
  r = Math.floor( r < 0 ? 0 : r > 255 ? 255 : r )
  g = Math.floor( r < 0 ? 0 : r > 255 ? 255 : r )
  b = Math.floor( r < 0 ? 0 : r > 255 ? 255 : r )
  a = Math.floor( r < 0 ? 0 : r > 255 ? 255 : r )

  return { r, g, b, a }
}
