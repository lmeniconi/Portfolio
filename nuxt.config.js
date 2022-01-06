const isDev = process.env.NODE_ENV === 'development'
const url = isDev ? 'http://localhost:3000' : 'https://lucianomeniconi.com'

// Projects
import projects from './data/projects'

export default {
  server: {
    host: '0.0.0.0',
    port: 3000,
  },

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Luciano Meniconi - Portafolio',
    htmlAttrs: {
      lang: 'es',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Portafolio de Luciano Meniconi - Full Stack Developer',
      },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/main.css', 'animate.css/animate.min.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/click-outside.client.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',

    '@nuxt/postcss8',

    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
  ],

  robots: {
    UserAgent: '*',
    Disallow: '/admin',
    Sitemap: `${url}/sitemap.xml`,
  },

  sitemap: {
    path: '/sitemap.xml',
    hostname: url,
    gzip: true,
    routes: () => {
      let routes = []

      projects.forEach((project) => {
        routes.push(`projects/${project.id}`)
      })

      return routes
    },
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
}
