export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Nuxt_Auth',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],
  axios: {
    baseURL: process.env.API_URL || ' http://localhost:8000/',
    debug: process.env.DEBUG || false,
    proxyHeaders: false,
    credentials: false,
  },
  auth: {
    strategies: {
      local: {
        token: { property: 'token',  global: true },
        user: { property: 'user' },
        endpoints: {
          login: { url: '/login', method: 'post', },
          user: { url: '/users/current-user', method: 'get' },
          logout: { url: '/logout', method: 'post' }
        }
      }
    },
    redirect: {
      login: '/login',
      logout: '/',
      callback: '/login',
      home: '/home'
    }
  },
  router: {
    middleware: ['authenticated.middleware']
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
