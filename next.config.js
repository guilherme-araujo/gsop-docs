const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
})
module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'mdx'],
  basePath: process.env.NODE_ENV === 'development' ? '' : '/~gfaraujo/gsop-docs'
})
