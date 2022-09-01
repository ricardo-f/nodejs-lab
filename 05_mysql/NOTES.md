# My personal shareable notes

**create schema/database nodemysql**

```sql
CREATE DATABASE nodemysql;
```

**select the nodemysql schema/database**

```sql
USE nodemysql;
```

**This create a table inside the nodemysql schema/database**

```sql
CREATE TABLE `books` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(45) NULL,
  `pageqty` INT NULL,
  PRIMARY KEY (`id`));
```
