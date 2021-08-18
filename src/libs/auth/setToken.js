// outside of a Vue file
import { LocalStorage } from 'quasar'
import { TOKEN_KEY } from '../Const'

export var setToken = function (value) {
  LocalStorage.set(TOKEN_KEY, value)
  // const token = LocalStorage.getItem(TOKEN_KEY)
  // return token
  // console.log('get token')
  // console.log(token)
  // console.log('getToken!!!')
}
