import gql from 'graphql-tag'

export const MUTE_GET_JWT = gql`
  mutation auth($username: String!, $password: String!) {
    authenticate(input: { password: $password, username: $username }) {
      jwtToken
    }
  }
`

export const QUERY_LOGIN = gql`
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

export const QUERY_FIELDS = gql`
  query QueryFields {
    fields {
      nodes {
        deviceCount
        createdAt
        description
        id
        name
        deletedAt
      }
    }
  }
`

export const QUERY_FIELD_BY_ID = gql`
  query QueryField($id: Int!) {
    field(id: $id) {
      id
      name
      description
      createdAt
      deletedAt
    }
  }
`

export const QUERY_FIELD_DEVICES = gql`
  query QueryFieldDevices($id: Int!) {
    field(id: $id) {
      devices {
        nodes {
          about
          fieldId
          id
          name
          type
          properties {
            nodes {
              about
              hi
              deviceId
              hihi
              id
              lo
              lolo
              name
              type
              unit
            }
          }
        }
      }
    }
  }
`

export const CREATE_FIELD = gql`
  mutation CreateField($name: String!, $description: String = "") {
    createField(input: { field: { name: $name, description: $description } }) {
      field {
        id
        name
        description
        deviceCount
      }
    }
  }
`
export const UPDATE_FIELD = gql`
  mutation UpdateField(
    $id: Int!
    $name: String = ""
    $description: String = ""
  ) {
    updateField(
      input: { patch: { description: $description, name: $name }, id: $id }
    ) {
      field {
        id
      }
    }
  }
`
export const DELETE_FIELD = gql`
  mutation DeleteField($id: Int!, $deletedAt: Datetime!) {
    updateField(input: { patch: { deletedAt: $deletedAt }, id: $id }) {
      field {
        id
      }
    }
  }
`
