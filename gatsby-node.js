/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`)
const { createRemoteFileNode } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions
    return graphql(`
    {
      allWpPost(sort: {fields: [date]}) {
        edges {
          node {
            title
            excerpt
            slug
            date(formatString: "MM-DD-YYYY")
          }
        }
      }
    }
  `).then(result => {
        result.data.allWpPost.edges.forEach(({ node }) => {
            createPage({
                // Decide URL structure
                path: node.slug,
                // path to template
                component: path.resolve(`./src/templates/blog-post.js`),
                context: {
                    // This is the $slug variable
                    // passed to blog-post.js
                    slug: node.slug,
                },
            })
        })
    })
}

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions
    return graphql(`
      {
        allWpPage {
            edges {
                node {
                  title
                  slug
                  uri
                  pageBuilder {
                    layouts {
                      ... on WpPage_Pagebuilder_Layouts_Hero {
                        fieldGroupName
                        wysiwyg
                        image {
                            localFile {
                              publicURL
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
                        title
                      }
                      ... on WpPage_Pagebuilder_Layouts_WysiwygMedia {
                        fieldGroupName
                        wysiwygContent
                        image {
                          altText
                          sourceUrl
                          localFile {
                            id
                            publicURL
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
      
    `).then(result => {
        result.data.allWpPage.edges.forEach(({ node }) => {
            if (node.uri === '/home/') {
                node.uri = '/'
            }
            console.log(node.uri);
            createPage({
                // Decide URL structure
                path: node.slug,
                // path to template
                component: path.resolve(`./src/templates/page.js`),
                context: {
                    // This is the $slug variable
                    // passed to blog-post.js
                    slug: node.slug,
                },
            })
        })
    })
}

exports.createResolvers = async (
    {
        actions,
        cache,
        createNodeId,
        createResolvers,
        store,
        reporter,
    },
) => {
    const { createNode } = actions

    await createResolvers({
        WPGraphQL_MediaItem: {
            imageFile: {
                type: "File",
                async resolve(source) {
                    let sourceUrl = source.sourceUrl

                    if (source.mediaItemUrl !== undefined) {
                        sourceUrl = source.mediaItemUrl
                    }

                    return await createRemoteFileNode({
                        url: encodeURI(sourceUrl),
                        store,
                        cache,
                        createNode,
                        createNodeId,
                        reporter,
                    })
                },
            },
        },
    })
}