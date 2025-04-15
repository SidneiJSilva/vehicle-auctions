const nextConfig = {
  reactStrictMode: false,
  // Disable Strict Mode only for testing in
  // specific cases (e.g. for clean up
  // localstorage during development)
  experimental: {
    turbo: false
  }
  // Disables Turbopack for production builds.
  // Turbopack is currently only stable for development (next dev),
  // but incompatible with next build + next start in some setups.
  // Setting turbo: false forces Next.js to use Webpack instead.
}

export default nextConfig
