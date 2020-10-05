import React from "react"
import { StaticQuery, graphql } from "gatsby"
// import Layout from "../components/layout"
// import SEO from "../components/seo"

export default function Home({ data }) {
    //highlight-line
    return (
        <StaticQuery
            query={graphql`
            query {
                allWpPage(sort: {order: DESC, fields: title}) {
                    nodes {
                      title
                      slug
                      id
                      content
                    }
                  }
                }
          `}
            render={data => (
                <header>
                    {data.allWpPage.nodes.map((node) => (
                        <div>
                            <p>{node.title}</p>
                            <div dangerouslySetInnerHTML={{ __html: node.content }} />
                        </div>
                    ))}
                </header>
            )}
        />
    )
}

