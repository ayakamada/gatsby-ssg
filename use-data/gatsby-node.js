const path = require("path");

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  const staticPages = require("./src/data/pages.json");
  staticPages.forEach((staticPage) => {
    const node = {
      ...staticPage,
      id: createNodeId(`staticPage-${staticPage.slug}`),
      internal: {
        type: "staticPage",
        contentDigest: createContentDigest(staticPage),
      },
    };
    actions.createNode(node);
  });
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const queryResults = await graphql(`
    query AllStaticPages {
      allStaticPage {
        nodes {
          id
          title
          slug
          path
          description
          menuname
        }
      }
      site {
        siteMetadata {
          siteName
          siteUrl
        }
      }
    }
  `);

  queryResults.data.allStaticPage.nodes.forEach((page) => {
    const template = path.resolve(`./src/contents/${page.path}/index.tsx`);
    const siteMetadata = queryResults.data.site.siteMetadata;

    createPage({
      path: page.path,
      component: template,
      context: {
        page,
        siteMetadata,
      },
    });
  });
};
