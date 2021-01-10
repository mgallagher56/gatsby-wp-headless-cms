import React  from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"

const Page = ({ data, pageContext }) => {
  const page = pageContext.page;
  const pageData = data.allWpPage.edges;

  return (
    <Layout>
      <SEO title={page.title} />

      <h1>{page.title}</h1>
      <div dangerouslySetInnerHTML={{__html: page.content}} />

    </Layout>
  )
}

export default Page

export const pageQuery = graphql`
query GET_LAYOUTS {
    allWpPage {
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
  