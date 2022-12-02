const withNextra = require('nextra')({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.tsx',
    unstable_staticImage: false
})

module.exports = withNextra({
    basePath: process.env.BASE_PATH,
    assetPrefix: process.env.BASE_PATH,
    images: {
        unoptimized: true
    }
})
