const path = require('path')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const postTemplate = path.resolve('src/templates/blog.js')

  return graphql(`
    query BlogIndexQuery {
      allMarkdownRemark {
        edges {
          node {
            html
            id
            frontmatter {
              path
              entry
              week
            }
          }
        }
      }
    }
  `).then(res => {
    if (res.errors) {
      return Promise.reject(res.errors)
    }
    res.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: postTemplate,
      })
    })
  })
}
