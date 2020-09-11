module.exports = {
  siteMetadata: {
    title: 'lpld.io',
    description: 'Projects I have build include a Wagtail-Gatsby prototype blog, a URL shortener, a command line tool to tweet you 100DaysOfCode progress, a React Tic-Tac-Toe Game, and many more. Get in touch and let\'s build something together.',
    author: 'Tibor Leupold',
    email: 'tibor@lpld.io',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/tbrlpld',
      twitter: 'https://twitter.com/tbrlpld',
      github: 'https://github.com/tbrlpld',
      stackoverflow: 'https://stackoverflow.com/users/6771403/tbr?tab=profile'
    }
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'json',
        path: `${__dirname}/src/data`
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Portfolio of Tibor Leupold',
        short_name: 'Portfolio',
        start_url: '/',
        background_color: '#FAFAFA',
        theme_color: '#333333',
        display: 'minimal-ui',
        icon: 'src/images/lpld-icon.png' // This path is relative to the root of the site.
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
}
