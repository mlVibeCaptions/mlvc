const withNextra = require('nextra')({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.tsx',
    unstable_staticImage: false
})

module.exports = withNextra({
    images: {
        unoptimized: true
    }
})
