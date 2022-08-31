# My personal shareable notes

Why i'm using msql2 as npm package to connect with mysql server?
- i'm running mysql in a docker env, and I'v3e found this workaround for the auth error
```
  code: 'ER_NOT_SUPPORTED_AUTH_MODE',
  errno: 1251,
  sqlMessage: 'Client does not support authentication protocol requested by server; consider upgrading MySQL client',
  sqlState: '08004',
  fatal: true
```
Since this is a lab/course purpose I didn't expended too much time try to figure it out how to do the right way.

---

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
