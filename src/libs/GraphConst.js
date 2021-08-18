import gql from 'graphql-tag'

export const MutGetJWT = gql`
  mutation auth($username: String!, $password: String!) {
    authenticate(input: { password: $password, username: $username }) {
      jwtToken
    }
  }
`
