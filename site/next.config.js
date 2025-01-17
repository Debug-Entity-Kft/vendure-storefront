const commerce = require('./commerce.config.json')
const { withCommerceConfig, getProviderName } = require('./commerce-config')
const nextTranslate = require('next-translate-plugin')

const provider = commerce.provider || getProviderName()
const isBC = provider === '@vercel/commerce-bigcommerce'
const isShopify = provider === '@vercel/commerce-shopify'
const isSaleor = provider === '@vercel/commerce-saleor'
const isSwell = provider === '@vercel/commerce-swell'
const isVendure = provider === '@vercel/commerce-vendure'

module.exports = withCommerceConfig(
  nextTranslate({
    commerce,
    i18n: {
      locales: ['hu', 'en'],
      defaultLocale: 'hu',
      localeDetection: true,
    },
    eslint: {
      ignoreDuringBuilds: true,
    },
    images: {
      domains: [
        'cdn.shopify.com',
        'cdn11.bigcommerce.com',
        'cdn.chec.io',
        'cdn.sanity.io',
        'cdn.vendure.io',
        'http://192.168.0.6',
        '192.168.0.6',
        '192.168.0.113',
        'placekitten.com',
      ],
    },
    rewrites() {
      return [
        (isBC || isShopify || isSwell || isVendure || isSaleor) && {
          source: '/checkout',
          destination: '/api/checkout',
        },
        // The logout is also an action so this route is not required, but it's also another way
        // you can allow a logout!
        isBC && {
          source: '/logout',
          destination: '/api/logout?redirect_to=/',
        },
        // For Vendure, rewrite the local api url to the remote (external) api url. This is required
        // to make the session cookies work.
        isVendure &&
          process.env.NEXT_PUBLIC_VENDURE_LOCAL_URL && {
            source: `${process.env.NEXT_PUBLIC_VENDURE_LOCAL_URL}/:path*`,
            destination: `${process.env.NEXT_PUBLIC_VENDURE_SHOP_API_URL}/:path*`,
          },
      ].filter(Boolean)
    },
  })
)

// Don't delete this console log, useful to see the commerce config in Vercel deployments
console.log('next.config.js', JSON.stringify(module.exports, null, 2))
