import { createHttpLink, InMemoryCache, from } from '@apollo/client/core'
import { setContext } from '@apollo/client/link/context'
import { onError } from '@apollo/client/link/error'
import { useRouter } from 'vue-router'
import { getToken, logout } from '@/libs/auth'

const httpLink = createHttpLink({
  uri: process.env.GRAPHQL_URI || 'http://localhost:5000/graphql',
  // credentials: 'same-origin',
})

const authLink = setContext((_, { headers }) => {
  const token = getToken()
  return {
    headers: {
      ...headers,
      ...(token ? { authorization: `Bearer ${token}` } : null),
    },
  }
})

const errorLink = function (options) {
  return onError(({ graphQLErrors, networkError, operation, forward }) => {
    console.log(options)
    console.log(options.router.currentRoute)
    if (graphQLErrors)
      graphQLErrors.forEach(({ message, extensions }) => {
        // console.log('*******************')
        // console.log(options)
        // console.log(options.router)
        // console.log(extensions)
        // console.log(extensions?.exception.errcode)
        // console.log(message)
        // console.log(operation)
        // console.log(forward)
        // console.log('*******************')
        if (
          extensions?.exception.errcode === '42501' ||
          message === 'jwt expired'
        ) {
          logout()
          options.router.push({ name: 'Login' })
        }
        console.log(`[GraphQL error]: Message: ${message}`)
      })

    if (networkError) console.log(`[Network error]: ${networkError}`)
  })
}

export /* async */ function getClientOptions(/* {app, router, ...} */ options) {
  return Object.assign(
    // General options.
    {
      // link: authLink.concat(httpLink),
      link: from([errorLink(options), authLink, httpLink]),
      cache: new InMemoryCache(),
    },
    // Specific Quasar mode options.
    process.env.MODE === 'spa'
      ? {
          //
        }
      : {},
    process.env.MODE === 'ssr'
      ? {
          //
        }
      : {},
    process.env.MODE === 'pwa'
      ? {
          //
        }
      : {},
    process.env.MODE === 'bex'
      ? {
          //
        }
      : {},
    process.env.MODE === 'cordova'
      ? {
          //
        }
      : {},
    process.env.MODE === 'capacitor'
      ? {
          //
        }
      : {},
    process.env.MODE === 'electron'
      ? {
          //
        }
      : {},
    // dev/prod options.
    process.env.DEV
      ? {
          //
        }
      : {},
    process.env.PROD
      ? {
          //
        }
      : {},
    // For ssr mode, when on server.
    process.env.MODE === 'ssr' && process.env.SERVER
      ? {
          ssrMode: true,
        }
      : {},
    // For ssr mode, when on client.
    process.env.MODE === 'ssr' && process.env.CLIENT
      ? {
          ssrForceFetchDelay: 100,
        }
      : {}
  )
}
