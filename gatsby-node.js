/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`)

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
      
    `).then(result => {
      result.data.allWpPage.edges.forEach(({ node }) => {
        if(node.uri==='/home/') {
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