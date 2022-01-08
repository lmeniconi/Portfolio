import Vue from 'vue'
import VueGtag from 'vue-gtag'

export default ({ app }) => {
  Vue.use(
    VueGtag,
    {
      config: { id: 'G-X37L8E9MF5' },
      appName: 'Portfolio',
    },
    app.router
  )
}
