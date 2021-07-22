import { boot } from 'quasar/wrappers'
import axios from 'axios'

const beHost = 'http://localhost:3000'
// const beHost = 'http://localhost:3000'
const api = axios.create({ baseURL: beHost })

const feHost = 'http://localhost:8080'
// const feHost = 'https://98a7d740a4d5.ngrok.io'
const selfResourceApi = axios.create({ baseURL: feHost })

export default boot(({ app }) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api

  app.config.globalProperties.$axios = axios
  // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

  app.config.globalProperties.$api = api
  app.config.globalProperties.$selfResourceApi = selfResourceApi
  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API
})

export { axios, api, selfResourceApi }
