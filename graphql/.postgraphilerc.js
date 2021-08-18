module.exports = {
  options: {
    connection: 'postgres://postgres:a@127.0.0.1:5432/postgres',
    schema: ['app_public', 'app_private'],
    dynamicJson: true,
    jwtSecret: 'myJwtSecret',
    defaultRole: 'anon_role',
    jwtTokenIdentifier: 'app_public.jwt_token',
    exportSchemaGraphql: 'schema.graphql',
    extendedErrors: ['hint', 'detail', 'errcode'],
    appendPlugins: '@graphile-contrib/pg-simplify-inflector',
    enableQueryBatching: true,
    graphiql: '/',
    watch: true,
    cors: true,
  },
}
