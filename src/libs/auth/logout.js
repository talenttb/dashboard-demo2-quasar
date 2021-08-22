import { LocalStorage } from 'quasar'
import { TOKEN_KEY } from '../Const'

export const logout = function () {
  // setToken(null)
  LocalStorage.remove(TOKEN_KEY)
}
