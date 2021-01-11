DROP DATABASE IF EXISTS uwfoodie_springboot;
CREATE DATABASE tmall_springboot  DEFAULT CHARACTER SET utf8;
USE uwfoodie_springboot;
CREATE TABLE category (
  id int(11) NOT NULL AUTO_INCREMENT,
  name varchar(255) DEFAULT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB AUTO_INCREMENT=84 DEFAULT CHARSET=utf8;


CREATE TABLE outlets (
  id int(11) NOT NULL AUTO_INCREMENT,
  name varchar(255) DEFAULT NULL,
  subTitle varchar(255) DEFAULT NULL,
  outlet_longitude float default null,
  outlet_latitude float default null,
  out_like int(11) default null,
  cid int(11) DEFAULT NULL,
  PRIMARY KEY (id),
  KEY fk_product_category (cid)
) ENGINE=InnoDB AUTO_INCREMENT=969 DEFAULT CHARSET=utf8;

CREATE TABLE outlet_image (
  id int(11) NOT NULL AUTO_INCREMENT,
  pid int(11) DEFAULT NULL,
  type varchar(255) DEFAULT NULL,
  PRIMARY KEY (id),
  KEY fk_productimage_product (pid)
) ENGINE=InnoDB AUTO_INCREMENT=10199 DEFAULT CHARSET=utf8;


CREATE TABLE property (
  id int(11) NOT NULL AUTO_INCREMENT,
  cid int(11) DEFAULT NULL,
  name varchar(255) DEFAULT NULL,
  PRIMARY KEY (id),
  KEY fk_property_category (cid)
) ENGINE=InnoDB AUTO_INCREMENT=260 DEFAULT CHARSET=utf8;


CREATE TABLE propertyvalue (
  id int(11) NOT NULL AUTO_INCREMENT,
  pid int(11) DEFAULT NULL,
  ptid int(11) DEFAULT NULL,
  value varchar(255) DEFAULT NULL,
  PRIMARY KEY (id),
  KEY fk_propertyvalue_property (ptid)
) ENGINE=InnoDB AUTO_INCREMENT=14106 DEFAULT CHARSET=utf8;

CREATE TABLE review (
  id int(11) NOT NULL AUTO_INCREMENT,
  content varchar(4000) DEFAULT NULL,
  uid int(11) DEFAULT NULL,
  pid int(11) DEFAULT NULL,
  createDate datetime DEFAULT NULL,
  PRIMARY KEY (id),
  KEY fk_review_product (pid),
  KEY fk_review_user (uid)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
CREATE TABLE user (
  id int(11) NOT NULL AUTO_INCREMENT,
  name varchar(255) DEFAULT NULL,
  password varchar(255) DEFAULT NULL,
  salt varchar(255) DEFAULT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;