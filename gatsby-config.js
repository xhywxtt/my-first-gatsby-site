module.exports = {
  siteMetadata: {
    title: "HY's First Gatsby Site",
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-shopify",
      options: {
        password: "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",
        storeUrl: "037604.myshopify.com",
      },
    },
  ],
}
