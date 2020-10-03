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
                allWpPost(sort: {order: DESC, fields: title}) {
                nodes {
                    title
                    excerpt
                    slug
                }
                }
            }      
          `}
            render={data => (
                <header>
                    {data.allWpPost.nodes.map((node) => (
                        <div>
                            <p>{node.title}</p>
                            <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                        </div>
                    ))}
                </header>
            )}
        />
    )
}

