# My personal shareable notes

**create schema/database bookstoredb**

```sql
CREATE DATABASE bookstoredb;
```

**select the bookstoredb schema/database**

```sql
USE bookstoredb;
```

**This create a table inside the bookstoredb schema/database**

```sql
CREATE TABLE `books` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(45) NULL,
  `pageqty` INT NULL,
  PRIMARY KEY (`id`));
```

Interesting site with tip to avoid SQL Injection:
https://planetscale.com/blog/how-to-prevent-sql-injection-attacks-in-node-js