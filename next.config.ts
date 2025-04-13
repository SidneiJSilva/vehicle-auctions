import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: false
  // Disable Strict Mode only for testing in
  // specific cases (e.g. for clean up
  // localstorage during development)
}

export default nextConfig
