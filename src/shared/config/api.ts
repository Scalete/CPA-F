/** Default host matches README so builds without `.env` do not request `undefined/...`. */
const DEFAULT_API_URL = 'https://cpa-server-vtel.onrender.com'

export const API_URL =
  process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, '') || DEFAULT_API_URL
export const API_KEY = process.env.NEXT_PUBLIC_API_KEY ?? ''
