drop database if exists `comi-come-website`;
create database `comi-come-website`;
use `comi-come-website`;

set names utf8;
set character_set_client = utf8mb4;

/*
create table recipes (
	recipe_id tinyint not null auto_increment,
  recipe_image_source varchar(70) not null,
  recipe_title tinytext not null,
  posted_date date not null,
  recipe_body text not null,
  recipe_steps text not null,
  primary key (recipe_id)
);

create table ingredients (
	ingredient_id int not null auto_increment,
	ingredient_name varchar(50),
  primary key (ingredient_id)
);

create table recipe_collection (
	collection_id int not null auto_increment,
	collection_name varchar(70) not null,
	collection_dec text not null,
	primary key (collection_id)
);

create table recipe_ingredients (
	recipe_id int not null,
  ingredient_id int not null,
  measure float not null,
  unit varchar(10)
);

create table tags (
	recipe_id int not null,
	collection_id int not null,
	name varchar(50)
);

insert into recipes (recipe_image_source, recipe_title, posted_date, recipe_body, recipe_steps) values ('assets/images/habichuelas.jpg', "Homestyle Habichuelas Guisadas", '2022-09-18', "This is filler text", "This is also filler text; This line is used to showcase the seperation");
insert into recipes (recipe_image_source, recipe_title, posted_date, recipe_body, recipe_steps) values ('assets/images/sopa_de_arroz.jpg', "Sopa de Arroz", '2022-09-18', "This is filler text", "This is also filler text; This line is used to showcase the seperation");
insert into recipes (recipe_image_source, recipe_title, posted_date, recipe_body, recipe_steps) values ('assets/images/sofrito.jpg', "Grandma's Homemade Sofrito", '2022-09-18', "This is filler text", "This is also filler text; This line is used to showcase the seperation");
insert into recipes (recipe_image_source, recipe_title, posted_date, recipe_body, recipe_steps) values ('assets/images/tokotsu.jpg', "Pozole with Tonkotsu Style Broth", '2022-09-19', "This is filler text", "This is also filler text; This line is used to showcase the seperation");

insert into ingredients (ingredient_name) values ("salt");
insert into ingredients (ingredient_name) values ("kidney beans");
insert into ingredients (ingredient_name) values ("tomato sauce");
insert into ingredients (ingredient_name) values ("cubito de pollo");
insert into ingredients (ingredient_name) values ("sofrito");
insert into ingredients (ingredient_name) values ("sazon");
insert into ingredients (ingredient_name) values ("rice");
insert into ingredients (ingredient_name) values ("canola oil");
insert into ingredients (ingredient_name) values ("water");
insert into ingredients (ingredient_name) values ("onion");
insert into ingredients (ingredient_name) values ("cilantro");
insert into ingredients (ingredient_name) values ("green bell pepper");
insert into ingredients (ingredient_name) values ("celery");
insert into ingredients (ingredient_name) values ("pork bones");
insert into ingredients (ingredient_name) values ("bok choy cabbage");
insert into ingredients (ingredient_name) values ("radish");
insert into ingredients (ingredient_name) values ("dried guajillo pepper");
insert into ingredients (ingredient_name) values ( "pork meat");
insert into ingredients (ingredient_name) values ("hominy");
insert into ingredients (ingredient_name) values ("oregano");
insert into ingredients (ingredient_name) values ("garlic");
insert into ingredients (ingredient_name) values ("aji verde");

insert into recipe_ingredients values (1, 1, 0, "cups");
insert into recipe_ingredients values (1, 2, 0, "cups");
insert into recipe_ingredients values (1, 3, 0, "cups");
insert into recipe_ingredients values (1, 4, 0, "cups");
insert into recipe_ingredients values (1, 5, 0, "cups");
insert into recipe_ingredients values (1, 6, 0, "cups");
insert into recipe_ingredients values (1, 9, 0, "cups");

insert into recipe_ingredients values (2, 1, 0, "cups");
insert into recipe_ingredients values (2, 7, 0, "cups");
insert into recipe_ingredients values (2, 8, 0, "cups");
insert into recipe_ingredients values (2, 3, 0, "cups");
insert into recipe_ingredients values (2, 10, 0, "cups");
insert into recipe_ingredients values (2, 9, 0, "cups");

insert into recipe_ingredients values (3, 10, 0, "cups");
insert into recipe_ingredients values (3, 12, 0, "cups");
insert into recipe_ingredients values (3, 13, 0, "cups");
insert into recipe_ingredients values (3, 22, 0, "cups");
insert into recipe_ingredients values (3, 11, 0, "cups");

insert into recipe_ingredients values (4, 14, 0, "cups");
insert into recipe_ingredients values (4, 15, 0, "cups");
insert into recipe_ingredients values (4, 13, 0, "cups");
insert into recipe_ingredients values (4, 10, 0, "cups");
insert into recipe_ingredients values (4, 17, 0, "cups");
insert into recipe_ingredients values (4, 18, 0, "cups");
insert into recipe_ingredients values (4, 19, 0, "cups");
insert into recipe_ingredients values (4, 20, 0, "cups");
insert into recipe_ingredients values (4, 1, 0, "cups");
insert into recipe_ingredients values (4, 9, 0, "cups");
insert into recipe_ingredients values (4, 21, 0, "cups");
*/
