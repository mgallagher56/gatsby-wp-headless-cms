require("dotenv").config({
    path: `.env.GATSBY_CONCURRENT_DOWNLOAD`,
})

// require .env.development or .env.production
require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
    siteMetadata: {
        title: "MGR - Porfolio",
        titleTemplate: "%s · Dev MVP",
        description:
          "Dev Things",
        url: "https://mgr-dev.com", // No trailing slash allowed!
        image: "/images/kiki.jpg", // Path to your image you placed in the 'static' folder,
      },
    plugins: [
        'gatsby-plugin-react-helmet',
        `gatsby-plugin-sass`,
        `gatsby-plugin-transition-link`,
        `gatsby-plugin-netlify-cache`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/assets/images`,
            },
        },
        `gatsby-transformer-sharp`,
        {
            resolve: `gatsby-plugin-sharp`,
            options: {
              // Available options and their defaults:
              toFormat: 'WEBP',
              stripMetadata: false,
              failOnError: true,
            },
          },        
          {
            resolve: `gatsby-source-wordpress-experimental`,
            options: {
                url: process.env.WPGRAPHQL_URL || `https://mgr-dev.online/graphql`,
                verbose: true,
                develop: {
                    hardCacheMediaFiles: true,
                },
                debug: {
                    graphql: {
                        writeQueriesToDisk: true,
                    },
                },
                type: {
                    Post: {
                        limit:
                            process.env.NODE_ENV === `development`
                                ? // Lets just pull 50 posts in development to make it easy on ourselves.
                                50
                                : // and we don't actually need more than 5000 in production for this particular site
                                5000,
                    },
                },
                auth: {
                    htaccess: {
                      username: process.env.WP_USERNAME,
                      password: process.env.WP_PASSWORD,
                    }
                },
            },
        },
        {
            resolve: "gatsby-plugin-react-svg",
            options: {
                rule: {
                    include: /\.inline\.svg$/, // See below to configure properly
                },
            },
        },
    ],
}
