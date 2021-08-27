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
CREATE TABLE app_public.field (
	id serial NOT NULL,
	"name" text NOT NULL,
	description text NULL,
	created_at timestamptz NULL DEFAULT now(),
	deleted_at timestamptz NULL,
	CONSTRAINT field_pk PRIMARY KEY (id)
);
CREATE TABLE app_public.device (
	id bigserial NOT NULL,
	field_id integer NOT NULL,
	"name" text NOT NULL,
	"type" text NULL,
	created_at timestamp with time zone NOT NULL DEFAULT now()
);
ALTER TABLE app_public.device ADD CONSTRAINT device_pk PRIMARY KEY (id);
ALTER TABLE app_public.device ADD CONSTRAINT device_fk FOREIGN KEY (field_id) REFERENCES app_public.field(id);
CREATE TABLE app_public.device_property (
	id bigserial NOT NULL,
	device_id bigint NOT NULL,
	"name" text NOT NULL,
	unit text NULL,
	"type" text NULL,
	lolo int NULL,
	lo int NOT NULL,
	hi int NOT NULL,
	hihi int NULL,
	about text NULL,
	created_at timestamp with time zone NOT NULL DEFAULT now(),
	CONSTRAINT device_property_pk PRIMARY KEY (id),
	CONSTRAINT device_property_fk FOREIGN KEY (device_id) REFERENCES app_public.device(id)
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
GRANT SELECT ON app_public.field TO basic_info_role;

INSERT INTO app_public.account(password_hash, user_name, user_role, is_admin)
VALUES(crypt('a', gen_salt('xdes')), 'test', 'admin', true);

CREATE OR REPLACE function app_public.login(
  username text,
  password text
) returns app_public.jwt_token as $$
declare
  account app_public.account;
begin
  select  a.* into account
    from app_public.account as a
    where a.user_name = login.username;

  if account.password_hash = crypt(login.password, account.password_hash) then
    return (
      account.user_role || '_role',
      extract(epoch from now() + interval '1 days'),
      account.id,
      account.is_admin,
      account.user_name
    )::app_public.jwt_token;
  else
    return null;
  end if;
end;
$$ language plpgsql stable strict security definer;

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

CREATE TABLE app_private.role_hierarchy (
	name text NOT NULL,
	description text NULL,
	h_from text NULL,
	CONSTRAINT role_hierarchy_pk PRIMARY KEY (name)
);

create or replace function app_public.field_device_count(f app_public.field)
returns integer
as $$
BEGIN
    return (select count(1) from app_public.device d where d.field_id = f.id);
END;
$$ language plpgsql stable

create or replace function app_public.field_devices(f app_public.field)
returns setof app_public.device as $$
  select *
  from app_public.device d
  where d.field_id = f.id
$$ language sql stable;
