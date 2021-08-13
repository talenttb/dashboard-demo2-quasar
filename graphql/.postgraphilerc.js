module.exports = {
  options: {
    connection: 'postgres://postgres:a@127.0.0.1:5432/postgres',
    schema: ['app_public'],
    jwtSecret: 'myJwtSecret',
    defaultRole: 'anon_role',
    jwtTokenIdentifier: 'app_public.jwt_token',
    watch: true,
  },
}
