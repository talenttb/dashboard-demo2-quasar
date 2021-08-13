## For Development

NOTE: if something you're expecting to see doesn't appear, try removing --no-ignore-indexes and/or --no-ignore-rbac, this should give you a hint as to what you need to fix in your database (you should only expose fields through GraphQL that are inexpensive for users to use).

```
postgraphile \
  --subscriptions \
  --watch \
  --dynamic-json \
  --no-setof-functions-contain-nulls \
  --no-ignore-rbac \
  --no-ignore-indexes \
  --show-error-stack=json \
  --extended-errors hint,detail,errcode \
  --append-plugins @graphile-contrib/pg-simplify-inflector \
  --export-schema-graphql schema.graphql \
  --graphiql "/" \
  --enhance-graphiql \
  --allow-explain \
  --enable-query-batching \
  --legacy-relations omit \
  --connection $DATABASE_URL \
  --schema app_public
```

## For Production

```
postgraphile \
  --subscriptions \
  --retry-on-init-fail \
  --dynamic-json \
  --no-setof-functions-contain-nulls \
  --no-ignore-rbac \
  --no-ignore-indexes \
  --extended-errors errcode \
  --append-plugins @graphile-contrib/pg-simplify-inflector \
  --disable-graphiql \
  --enable-query-batching \
  --disable-query-log \ # our default logging has performance issues, but do make sure you have a logging system in place!
  --legacy-relations omit \
  --connection $DATABASE_URL \
  --schema app_public
```

## psql

```
 docker run -it --rm --link pg13:psql postgres:13.3 psql -h pg13 -U postgres --password
```

## pgadmin

```
  docker run -it -d --name pgadmin --link pg13:pgadmin -p 5050:80 -e 'PGADMIN_DEFAULT_EMAIL=admin@admin.com' -e 'PGADMIN_DEFAULT_PASSWORD=admin' dpage/pgadmin4:5
```
