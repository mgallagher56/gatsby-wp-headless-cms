import React from "react"
import { StaticQuery, graphql } from "gatsby"
// import Layout from "../components/layout"
// import SEO from "../components/seo"

export default function Home({ data }) {
    //highlight-line
    return (
        <StaticQuery
          query={graphql`
            query HeadingQuery {
              site {
                siteMetadata {
                  image
                }
              }
            }
          `}
          render={data => (
            <header>
              <h1>{data.site.siteMetadata.image}</h1>
            </header>
          )}
        />
      )
    }