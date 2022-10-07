import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage } from "gatsby-plugin-image"
import { getShopifyImage } from "gatsby-source-shopify"

const Product = () => {
  const data = useStaticQuery(graphql`
  query {
    allShopifyProduct {
      nodes {
        title
        totalInventory
        media {
          preview {
            image {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`)

  return (
    <GatsbyImage src={data.product.featuredMedia.preview.image.gatsbyImageData} />
  )
}

export default Seo