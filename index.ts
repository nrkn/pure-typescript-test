export interface IRgba {
  r: number
  g: number
  b: number
  a: number
}

export const Rgba = ( r = 0, g = 0, b = 0, a = 0 ) : IRgba => {
  r = Math.floor( r < 0 ? 0 : r > 255 ? 255 : r )
  g = Math.floor( r < 0 ? 0 : r > 255 ? 255 : r )
  b = Math.floor( r < 0 ? 0 : r > 255 ? 255 : r )
  a = Math.floor( r < 0 ? 0 : r > 255 ? 255 : r )

  return { r, g, b, a }
}
