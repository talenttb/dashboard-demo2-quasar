// outside of a Vue file
import { LocalStorage } from 'quasar'
import { TOKEN_KEY } from '../Const'

export var getToken = function () {
  // LocalStorage.set(key, value)
  const token = LocalStorage.getItem(TOKEN_KEY)
  return token
  // console.log('get token')
  // console.log(token)
  // console.log('getToken!!!')
}
