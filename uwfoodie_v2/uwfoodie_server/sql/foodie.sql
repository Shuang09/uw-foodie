drop database if exists foodie;
create database foodie;
use foodie;

drop table if exists comment;
create table comment(user_name varchar(50), outlet_id int, comment varchar(200), score int);