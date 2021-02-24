const isProd = process.env.NODE_ENV !== 'development'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '盛德远景 - Sindvision',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    './assets/fonts/fontawesome-free-5.11.2-web/css/all.min.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins', ssr: true }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    styleResources: {
      scss: './assets/variables.scss'
    }
  },

  server: {
    host: '0.0.0.0'
  },

  // eslint-disable-next-line no-dupe-keys
  axios: {
    baseURL: isProd ? 'http://103.36.193.81:8002' : 'http://123.57.89.226:8002'
  },

  target: 'static'
}
