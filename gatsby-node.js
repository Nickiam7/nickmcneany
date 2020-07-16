const path = require(`path`)
const slash = require(`slash`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions
  
  createRedirect({ 
    fromPath: '/home/', 
    toPath: '/', 
    redirectInBrowser: true, 
    isPermanent: true 
  })

  createRedirect({ 
    fromPath: '/home', 
    toPath: '/', 
    redirectInBrowser: true, 
    isPermanent: true 
  })

  const result = await graphql(`
    {
      home: wordpressPage(slug: {eq: "home"}) {
        id
        title
        content
        slug
        link
        featured_media {
          source_url
        }
        acf {
          heading
          intro
          outro
          skills_view {
            heading
            intro
            content
          }
        }
      }
      work: wordpressPage(slug: {eq: "work"}) {
        id
        title
        content
        slug
        link
        featured_media {
          source_url
        }
      }  
      allWordpressPage(filter: {slug: {ne: "work"}}) {
        edges {
          node {
            id
            title
            content
            slug
            link
            featured_media {
              source_url
            }
          }
        }
      }
      allWordpressPost {
        edges {
          node {
            id
            title
            excerpt
            content
            link            
            status
            template
            format
            slug
          }
        }
      }
      allWordpressWpWork {
        edges {
          node {
            id
            slug
            title
            excerpt
            content
            template
            featured_media {
                source_url
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    throw new Error(result.errors)
  }

  const { home, work, allWordpressPage, allWordpressWpWork, allWordpressPost } = result.data

  const pageIndexTemplate = path.resolve(`./src/templates/index.js`)
  createPage({
      path: `/`,
      component: slash(pageIndexTemplate),
      context: home
  })

  const pageWorkTemplate = path.resolve(`./src/templates/work.js`)
  createPage({
      path: `/work`,
      component: slash(pageWorkTemplate),
      context: work
  })
  
  const pageTemplate = path.resolve(`./src/templates/page.js`)
  allWordpressPage.edges.forEach(edge => {
    createPage({
      path: `/${edge.node.slug}/`,
      component: slash(pageTemplate),
      context: edge.node      
    })
  })

  const postWorkSingleTemplate = path.resolve(`./src/templates/work-single.js`)
  allWordpressWpWork.edges.forEach(edge => {
    createPage({
      path: `/work/${edge.node.slug}/`,
      component: slash(postWorkSingleTemplate),
      context: edge.node
    })
  })
}
