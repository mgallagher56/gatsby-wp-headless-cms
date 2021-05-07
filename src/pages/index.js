import React  from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql } from "gatsby"
import ModuleParser from "../components/ModuleParser"

const Index = ({ data }) => {
  const pageData = data.allWpPage.edges[0].node;
  const modules = pageData.pageBuilder.layouts;

  return (
    <Layout>
      <Seo title={pageData.title} />
      <ModuleParser moduleData={modules} />
    </Layout>
  )
}

export default Index

export const query = graphql`
    query {
        allWpPage(filter: { slug: { eq: "home" } }) {
            edges {
                node {
                    title
                    pageBuilder {
                            layouts {
                            ... on WpPage_Pagebuilder_Layouts_Hero {
                                fieldGroupName
                                wysiwyg
                                image {
                                    altText
                                    localFile {
                                        childImageSharp {
                                            gatsbyImageData(placeholder: TRACED_SVG, tracedSVGOptions: {color: "#00FF7D"}, sizes: "1200px")
                                        }
                                    }
                                }
                            }
                            ... on WpPage_Pagebuilder_Layouts_Feed {
                                cardType
                                fieldGroupName
                                title
                            }
                            ... on WpPage_Pagebuilder_Layouts_CardContainer {
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
                                        altText
                                        localFile {
                                            childImageSharp {
                                                gatsbyImageData(placeholder: TRACED_SVG, tracedSVGOptions: {color: "#00FF7D"}, sizes: "200px")
                                            }                                        
                                        }
                                    }
                                }
                            }
                            ... on WpPage_Pagebuilder_Layouts_WysiwygMedia {
                                fieldGroupName
                                wysiwygContent
                                image {
                                    altText
                                    localFile {
                                        childImageSharp {
                                            gatsbyImageData(placeholder: TRACED_SVG, tracedSVGOptions: {color: "#00FF7D"}, sizes: "600px")
                                        }                                    
                                    }
                                }
                            }
                            ... on WpPage_Pagebuilder_Layouts_Wysiwyg3Col {
                                fieldGroupName
                                wysiwygContent1
                                wysiwygContent2
                                wysiwygContent3
                            }
                            ... on WpPage_Pagebuilder_Layouts_Wysiwyg2Col {
                                fieldGroupName
                                wysiwygContent1
                                wysiwygContent2
                            }
                            ... on WpPage_Pagebuilder_Layouts_Wysiwyg1Col {
                                fieldGroupName
                                wysiwyg
                            }
                            ... on WpPage_Pagebuilder_Layouts_Wysiwyg4Col {
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