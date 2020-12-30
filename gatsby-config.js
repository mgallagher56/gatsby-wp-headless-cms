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
        author: "Marc Gallagher-Reid",
      },
      plugins: [
        'gatsby-plugin-react-helmet',
        `gatsby-plugin-sass`,
        `gatsby-plugin-transition-link`,
        `gatsby-plugin-sharp`,     
        `gatsby-plugin-netlify-cache`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/assets/images`,
            },
        },
        {
            resolve: `gatsby-transformer-sharp`,
            options: {
              // The option defaults to true
              checkSupportedExtensions: false,
            },
          },       
          {
            resolve: `gatsby-source-wordpress`,
            options: {
                baseUrl: `https://mgr-dev.online`,
                protocol: `https`,
                hostingWPCOM: false,
                useACF: true,
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
                    wpcom_user: process.env.WP_USERNAME,
                    wpcom_pass: process.env.WP_PASSWORD,
                    htaccess_user: process.env.HT_USERNAME,
                    htaccess_pass: process.env.HT_PASSWORD,
                    htaccess_sendImmediately: false,
                },
            },
        },
        {
            resolve: `gatsby-wordpress-inline-images`,
            options:
            {
              baseUrl: `https://mgr-dev.online`,
              protocol: `https`,
              useACF: true,
              withWebp: true,
            }
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
