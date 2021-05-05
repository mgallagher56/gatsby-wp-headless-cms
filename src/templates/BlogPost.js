import React from "react"
import Seo from "../components/seo"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import ModuleParser from '../components/ModuleParser'

const PostTemplate = ({ data }) => {
    const post = data.allWpPage.edges[0].node;
    const modules = post.pageBuilder.layouts;

    if (null !== modules) {
        return (
            <Layout>
                <div>
                    <Seo title={post.title} />
                    <h1>{post.title}</h1>
                    <ModuleParser moduleData={modules} />
                    <p> On: {post.date} </p>
                </div>
            </Layout>
        )
    } else {
        return (
            <Layout>
                <div>
                    <Seo title={post.title} />
                    <h1>{post.title}</h1>
                    <h2>No modules found</h2>
                </div>
            </Layout>
        )
    }
}

export default PostTemplate

export const query = graphql`
{
    allWpPost(sort: {fields: date}) {
      edges {
        node {
          title
          content
          slug
          date(formatString: "DD-MM-YYYY")
          title
          slug
          uri
          pageBuilder {
            layouts {
              ... on WpPost_Pagebuilder_Layouts_Hero {
                fieldGroupName
                wysiwyg
                image {
                  localFile {
                    publicURL
                    childImageSharp {
                      gatsbyImageData(placeholder: TRACED_SVG, tracedSVGOptions: {color: "#00FF7D"})
                    }
                  }
                }
              }
              ... on WpPost_Pagebuilder_Layouts_Feed {
                cardType
                fieldGroupName
                title
              }
              ... on WpPost_Pagebuilder_Layouts_CardContainer {
                fieldGroupName
                cardType
                title
                cards {
                  buttonText
                  content
                  fieldGroupName
                  subtitle
                  title
                  url
                  image {
                    localFile {
                      publicURL
                      childImageSharp {
                        gatsbyImageData(placeholder: TRACED_SVG, tracedSVGOptions: {color: "#00FF7D"})
                      }
                    }
                  }
                }
              }
              ... on WpPost_Pagebuilder_Layouts_WysiwygMedia {
                fieldGroupName
                wysiwygContent
                image {
                  altText
                  sourceUrl
                  localFile {
                    id
                    publicURL
                    childImageSharp {
                      gatsbyImageData(placeholder: TRACED_SVG, tracedSVGOptions: {color: "#00FF7D"})
                    }
                  }
                }
              }
              ... on WpPost_Pagebuilder_Layouts_Wysiwyg3Col {
                fieldGroupName
                wysiwygContent1
                wysiwygContent2
                wysiwygContent3
              }
              ... on WpPost_Pagebuilder_Layouts_Wysiwyg2Col {
                fieldGroupName
                wysiwygContent1
                wysiwygContent2
              }
              ... on WpPost_Pagebuilder_Layouts_Wysiwyg1Col {
                fieldGroupName
                wysiwyg
              }
              ... on WpPost_Pagebuilder_Layouts_Wysiwyg4Col {
                fieldGroupName
                wysiwygContent1
                wysiwygContent2
                wysiwygContent3
                wysiwygContent4
              }
            }
          }
        }
      }
    }
  }
`