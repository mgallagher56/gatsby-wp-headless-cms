import React  from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"

const Page = ({ data }) => {
  const pageData = data.allWpPage.edges[0].node;
  const modules = pageData.pageBuilder.layouts;

  return (
    <Layout>
      <SEO title={pageData.title} />

      <h1>{pageData.title}</h1>
      <div dangerouslySetInnerHTML={{__html: pageData.content}} />

    </Layout>
  )
}

export default Page

export const homepageQuery = graphql`
query {
    allWpPage(filter: { slug: { eq: "home" } }) {
      edges {
        node {
          title
          slug
          uri
          pageBuilder {
            layouts {
              ... on WpPage_Pagebuilder_Layouts_Hero {
                wysiwyg
                image {
                  id
                  uri
                }
              }
              ... on WpPage_Pagebuilder_Layouts_Wysiwyg1Col {
                fieldGroupName
                wysiwyg1Col
              }
            }
          }
        }
      }
    }
  }
  `
  