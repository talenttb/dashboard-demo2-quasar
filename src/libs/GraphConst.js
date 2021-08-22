import gql from 'graphql-tag'

export const MutGetJWT = gql`
  mutation auth($username: String!, $password: String!) {
    authenticate(input: { password: $password, username: $username }) {
      jwtToken
    }
  }
`

export const QueryLogin = gql`
  query Login($password: String!, $username: String!) {
    jwtToken: login(password: $password, username: $username)
  }
`

export const GET_ANNMNTS = gql`
  query getAnnmnts {
    announcements {
      nodes {
        beginAt
        content
        deletedAt
        endAt
        id
      }
    }
  }
`
