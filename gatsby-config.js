module.exports = {
  siteMetadata: {
    title: 'lpld.io',
    description: 'Projects I have build include a Wagtail-Gatsby prototype blog, a URL shortener, a command line tool to tweet you 100DaysOfCode progress, a React Tic-Tac-Toe Game, and many more. Get in touch and let\'s build something together.',
    author: 'Tibor Leupold'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`
      }
    },

    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png' // This path is relative to the root of the site.
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    'gatsby-transformer-csv',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'csv',
        path: `${__dirname}/src/data`
      }
    }
  ]
}
