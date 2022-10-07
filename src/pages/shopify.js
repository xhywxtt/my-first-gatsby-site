// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { graphql } from 'gatsby'
import { container, product } from './shopify.module.css'
import { GatsbyImage } from "gatsby-plugin-image"
import { getShopifyImage } from "gatsby-source-shopify"

// Step 2: Define your component
const ShopifyPage = ({ data }) => {
  return (
    <Layout pageTitle="HY's Shopify">
      <div className={container}>
        {
          data.allShopifyProduct.nodes.map(node => (
            <div key={node.id} className={product}>
              <GatsbyImage image={node.featuredMedia.preview.image.gatsbyImageData} />
              <p>Title: {node.title}</p>
              <p>Inventory: {node.totalInventory}</p>
            </div>
          ))
        }
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allShopifyProduct {
      nodes {
        title
        totalInventory
        featuredMedia {
          preview {
            image {
              gatsbyImageData(height: 500)
            }
          }
        }
        id
      }
    }
  }
`
export const Head = () => <Seo title="About me" />

// Step 3: Export your component
export default ShopifyPage