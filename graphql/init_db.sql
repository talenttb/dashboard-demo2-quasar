CREATE EXTENSION if not exists pgcrypto
	SCHEMA "public"
	VERSION null;

create type app_public.jwt_token as (
  role text,
  exp integer,
  account_id integer,
  is_admin boolean,
  username varchar
);

CREATE TABLE app_public.account (
	id bigserial NOT NULL,
	password_hash text NULL,
	user_name text NOT NULL,
	user_role text NOT NULL,
	is_admin bool NOT NULL,
	CONSTRAINT account_user_name_key UNIQUE (user_name),
	CONSTRAINT account_pkey PRIMARY KEY (id)
);

create role admin_role;
create role basic_info_role;
create role finance_user_role;
create role finance_admin_role;
create role anon_role;

GRANT anon_role TO basic_info_role;
GRANT basic_info_role TO admin_role;
GRANT basic_info_role TO finance_user_role;
GRANT basic_info_role TO finance_admin_role;
GRANT finance_user_role TO finance_admin_role;

GRANT USAGE ON SCHEMA app_public TO admin_role;
GRANT USAGE ON SCHEMA app_public TO basic_info_role;
GRANT USAGE ON SCHEMA app_public TO finance_user_role;
GRANT USAGE ON SCHEMA app_public TO finance_admin_role;
GRANT USAGE ON SCHEMA app_public TO anon_role;

-- GRANT SELECT(id, user_name, password_hash) ON app_public.account to anon_role;
GRANT SELECT ON app_public.account TO basic_info_role;

INSERT INTO app_public.account(password_hash, user_name, user_role, is_admin)
VALUES(crypt('a', gen_salt('xdes')), 'test', 'admin', true);

CREATE OR REPLACE function app_public.authenticate(
  username text,
  password text
) returns app_public.jwt_token as $$
declare
  account app_public.account;
begin
  select  a.* into account
    from app_public.account as a
    where a.user_name = authenticate.username;

  if account.password_hash = crypt(authenticate.password, account.password_hash) then
    return (
      account.user_role || '_role',
      extract(epoch from now() + interval '7 days'),
      account.id,
      account.is_admin,
      account.user_name
    )::app_public.jwt_token;
  else
    return null;
  end if;
end;
$$ language plpgsql strict security definer;

CREATE OR REPLACE function app_private.regist_user(
  username text,
  password text
) returns void as
$$
begin
  INSERT INTO app_public.account(password_hash, user_name, user_role, is_admin,test2_role)
	VALUES(crypt(password, gen_salt('xdes')), username, 'admin', true,'annoyment');

end;
$$ language 'plpgsql';
