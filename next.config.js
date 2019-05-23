/* eslint-disable @typescript-eslint/no-var-requires */
const withTypescript = require('@zeit/next-typescript')
const withMDX = require('@next/mdx')()

module.exports = withTypescript()
module.exports = withMDX()
