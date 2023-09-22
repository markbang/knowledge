# 初识数据库

## 什么是数据库

> **数据库：DB（DataBase）**

**概念**：数据仓库，`软件`，安装在操作系统之上

**作用**：存储数据，管理数据

------

## 数据库分类

**关系型数据库：SQL**（Structured Query Language）

- MySQL、Oracle、Sql Server、DB2、SQLlite
- 通过表和表之间，行和列之间的关系进行数据的存储
- 通过外键关联来建立表与表之间的关系

**非关系型数据库：NoSQL**（Not Only SQL）

- Redis、MongoDB
- 指数据以**对象**的形式存储在数据库中，而对象之间的关系通过每个对象自身的属性来决定

------

## 相关概念

> **DBMS（数据库管理系统）**

- 数据库的管理**软件**，科学有效的管理、维护和获取我们的数据
- **MySQL**就是数据库管理系统

![image-20200718152213413](https://img-blog.csdnimg.cn/img_convert/6ca15d7eee443107638939952d09ed79.png)

------

## MySQL及其安装

- [MySQL最新版8.0.21安装配置教程~](https://bareth.blog.csdn.net/article/details/107369405)

## 基本命令

> 所有的语句都要以分号结尾;

```mysql
show databases;	-- 查看当前所有的数据库
use 数据库名;	-- 打开指定的数据库
show tables;	-- 查看所有的表
describe/desc 表名;	-- 显示表的信息
create database 数据库名;	-- 创建一个数据库
exit	-- 退出连接
```

```mysql
--		-- 单行注释
#		-- 单行注释
/*...*/		-- 多行注释
```

# 操作数据库

## 操作数据库

```mysql
-- 创建数据库
CREATE DATABASE [IF NOT EXISTS] 数据库名;    CREATE SCHEMA

-- 删除数据库
DROP DATABASE [if EXISTS] 数据库名;    DROP SCHEMA

-- 使用数据库
-- 如果表名或者字段名是特殊字符，则需要带``
use 数据库名;

-- 查看数据库
SHOW DATABASES;
```

## 数据库的列类型

> **数值**

| `数据类型` |                `描述`                | `大小`  |
| :--------: | :----------------------------------: | :-----: |
|  tinyint   |             十分小的数据             | 1个字节 |
|  smallint  |              较小的数据              | 2个字节 |
| mediumint  |            中等大小的数据            | 3个字节 |
|    int     |              标准的整数              | 4个字节 |
|   bigint   |              较大的数据              | 8个字节 |
|   float    |                浮点数                | 4个字节 |
|   double   |                浮点数                | 8个字节 |
|  decimal   | 字符串形式的浮点数，一般用于金融计算 |         |

> 字符串

| `数据类型` |     `描述`     | `大小`  |
| :--------: | :------------: | :-----: |
|    char    | 字符串固定大小 |  0~255  |
|  varchar   |   可变字符串   | 0~65535 |
|  tinytext  |    微型文本    |  2^8-1  |
|    text    |     文本串     | 2^16-1  |

> 时间日期

| `数据类型` |             `描述`             |        `格式`         |
| :--------: | :----------------------------: | :-------------------: |
|    date    |            日期格式            |      YYYY-MM-DD       |
|    time    |            时间格式            |      HH：mm：ss       |
|  datetime  |        最常用的时间格式        | YYYY-MM-DD HH：mm：ss |
| timestamp  | 时间戳，1970.1.1到现在的毫秒数 |                       |
|    year    |            年份表示            |                       |

> null

- 没有值，未知
- 不要使用NULL值进行计算

## 数据库的字段属性

> **UnSigned**

- 无符号的
- 声明了该列不能为负数

> ZEROFILL

- 0填充的
- 不足位数用0来填充，如int(3)，5则为005

> **Auto_InCrement**

- 通常理解为自增，自动在上一条记录的基础上默认+1
- 通常用来设计唯一的主键，必须是整数类型
- 可定义起始值和步长
  - 当前表设置步长(AUTO_INCREMENT=100) : 只影响当前表
  - SET @@auto_increment_increment=5 ; 影响所有使用自增的表(全局)

> **NULL 和 NOT NULL**

- 默认为NULL , 即没有插入该列的数值
- 如果设置为NOT NULL , 则该列必须有值

> **DEFAULT**

- 默认的
- 用于设置默认值
- 例如,性别字段,默认为"男" , 否则为 “女” ; 若无指定该列的值 , 则默认值为"男"的值

**拓展**：每一个表，都必须存在以下五个字段：

|    名称    |   描述   |
| :--------: | :------: |
|     id     |   主键   |
|  version   |  乐观锁  |
| is_delete  |  伪删除  |
| gmt_create | 创建时间 |
| gmt_update | 修改时间 |

## 创建数据库表

```mysql
CREATE TABLE IF NOT EXISTS `student`(
	`id` INT(4)	NOT NULL AUTO_INCREMENT COMMENT '学号',
	`name` VARCHAR(30) NOT NULL DEFAULT '匿名' COMMENT '姓名',
	`pwd` VARCHAR(20) NOT NULL DEFAULT '123456' COMMENT '密码',
	`sex` VARCHAR(2) NOT NULL DEFAULT '女' COMMENT '性别',
	`birthday` DATETIME DEFAULT NULL COMMENT '出生日期',
	`address` VARCHAR(100) DEFAULT NULL COMMENT '家庭住址',
	`email` VARCHAR(50) DEFAULT NULL COMMENT '邮箱',
	PRIMARY KEY (`id`)
)ENGINE=INNODB DEFAULT CHARSET=utf8
```

`注意点`：

- 表名和字段尽量使用``括起来
- AUTO_INCREMENT 代表自增
- 所有的语句后面加逗号，最后一个不加
- 字符串使用单引号括起来
- 主键的声明一般放在最后，便于查看
- 不设置字符集编码的话，会使用MySQL默认的字符集编码Latin1，不支持中文，可以在my.ini里修改

> 格式：

```mysql
CREATE TABLE IF NOT EXISTS `student`(
	'字段名' 列类型 [属性] [索引] [注释],
    '字段名' 列类型 [属性] [索引] [注释],
    ......
    '字段名' 列类型 [属性] [索引] [注释]
)[表的类型][字符集设置][注释]
```

`常用命令`

```mysql
SHOW CREATE DATABASE 数据库名;-- 查看创建数据库的语句
SHOW CREATE TABLE 表名;-- 查看表的定义语句
DESC 表名;-- 显示表的具体结构
```

## 数据库存储引擎

**INNODB**

- 默认使用，安全性高，支持事务的处理，多表多用户操作

**MYISAM**

- 早些年使用，节约空间，速度较快

|                | MYISAM | INNODB        |
| -------------- | ------ | ------------- |
| **事务支持**   | 不支持 | 支持          |
| **数据行锁定** | 不支持 | 支持          |
| **外键约束**   | 不支持 | 支持          |
| **全文索引**   | 支持   | 不支持        |
| **表空间大小** | 较小   | 较大，约为2倍 |

> **数据库文件存在的物理空间位置**：

- MySQL数据表以文件方式存放在磁盘中
  - 包括表文件 , 数据文件 , 以及数据库的选项文件
  - 位置 : `Mysql安装目录\data\`（目录名对应数据库名 , 该目录下文件名对应数据表）

![](https://img-blog.csdnimg.cn/img_convert/1946b76c983e11c85ab1b71a89158eb0.png)

**MySQL在文件引擎上区别：**

- `INNODB`数据库文件类型就包括**.frm**、**.ibd**以及在上一级目录的**ibdata1**文件
- MYISAM 存储引擎，数据库文件类型就包括
  - **.frm**：表结构定义文件
  - **.MYD**：数据文件
  - **.MYI**：索引文件

## 修改数据库

> **修改**

```mysql
-- 修改表名
-- ALTER TABLE 旧表名 RENAME AS 新表名
ALTER TABLE teacher RENAME AS teachers;

-- 增加表的字段
-- ALTER TABLE 表名 ADD 字段名 列属性
ALTER TABLE teachers ADD age INT(11);

-- 修改表的字段(重命名，修改约束)
-- ALTER TABLE 表名 MODIFY 字段名 [列属性];
ALTER TABLE teachers MODIFY age VARCHAR(11);-- 修改约束
-- ALTER TABLE 表名 CHANGE 旧名字 新名字 [列属性];
ALTER TABLE teachers CHANGE age age1 INT(1);-- 字段重命名

-- 删除表的字段
-- ALTER TABLE 表名 DROP 字段名
ALTER TABLE teachers DROP age1;
```

> **删除**

**语法**：DROP TABLE [IF EXISTS] 表名

- IF EXISTS为可选 , 判断是否存在该数据表
- 如删除不存在的数据表会抛出错误

```sql
-- 删除表(如果存在再删除)
DROP TABLE IF EXISTS teachers;
```

**所有的创建和删除尽量加上判断，以免报错~**

# MySQL数据管理

## 外键

> **外键概念**

如果公共关键字在一个关系中是主关键字，那么这个公共关键字被称为另一个关系的外键。由此可见，外键表示了两个人关系之间的相互联系。以另一个关系的外键作主关键字的表被称为``主表``，具有此外键的表被称为主表的``从表``。

在实际操作中，将一个表的值放入第二个表来表示关联，所使用的值是第一个表的主键值(在必要时可包括复合主键值)。此时，第二个表中保存这些值的属性被称为外键(`foreign key`)。

**外键作用**：

保持数据``一致性``，`完整性`，主要目的是控制存储在外键表中的数据，`约束`。使两张表形成关联，外键只能引用外表中的列的值或使用空值。

------

目标：学生表（student）的gradeid字段 要去引用年级表（grade）的 gradeid字段

> **创建外键**

**方式一：在创建表的时候增加约束**

```sql
/*
	1. 定义外键key
	2. 给外键添加约束（执行引用）references 引用
*/
CREATE TABLE IF NOT EXISTS `student`(
	`id` INT(4) NOT NULL AUTO_INCREMENT COMMENT '学号',
	`name` VARCHAR(30) NOT NULL DEFAULT '匿名' COMMENT '姓名',
	`pwd` VARCHAR(20) NOT NULL DEFAULT '123456' COMMENT '密码',
	`sex` VARCHAR(2)	NOT NULL DEFAULT '女' COMMENT '性别',
	`birthday` DATETIME DEFAULT NULL COMMENT '出生日期',
	`address` VARCHAR(100) DEFAULT NULL COMMENT '家庭住址',
	`email` VARCHAR(50) DEFAULT NULL COMMENT '邮箱',
	`gradeid` INT(10) NOT NULL COMMENT '学生的年级',
	PRIMARY KEY (`id`),
	KEY `FK_gradeid` (`gradeid`),
	CONSTRAINT `FK_gradeid` FOREIGN KEY (`gradeid`) REFERENCES `grade`(`gradeid`)
)ENGINE=INNODB DEFAULT CHARSET=utf8

-- 创建年级表
CREATE TABLE `grade`(
	`gradeid` INT(10) NOT NULL COMMENT '年级id',
	`gradename` VARCHAR(50) NOT NULL COMMENT '年纪名称',
	PRIMARY KEY (`gradeid`)
)ENGINE=INNODB DEFAULT CHARSET=utf8
```

删除有外键关系的表的时候，必须要先删除引用别人的表（从表），再删除被引用的表（主表）

------

**方法二：创建表成功后，添加外键约束**

```sql
/*
	1. 定义外键key
	2. 给外键添加约束（执行引用）references 引用
*/
CREATE TABLE IF NOT EXISTS `student`(
	`id` INT(4) NOT NULL AUTO_INCREMENT COMMENT '学号',
	`name` VARCHAR(30) NOT NULL DEFAULT '匿名' COMMENT '姓名',
	`pwd` VARCHAR(20) NOT NULL DEFAULT '123456' COMMENT '密码',
	`sex` VARCHAR(2)	NOT NULL DEFAULT '女' COMMENT '性别',
	`birthday` DATETIME DEFAULT NULL COMMENT '出生日期',
	`address` VARCHAR(100) DEFAULT NULL COMMENT '家庭住址',
	`email` VARCHAR(50) DEFAULT NULL COMMENT '邮箱',
	`gradeid` INT(10) NOT NULL COMMENT '学生的年级',
	PRIMARY KEY (`id`)
)ENGINE=INNODB DEFAULT CHARSET=utf8

-- 创建表的时候没有外键关系
ALTER TABLE `student`
ADD CONSTRAINT `FK_gradeid` FOREIGN KEY(`gradeid`) REFERENCES `grade`(`gradeid`);

-- 创建年级表
CREATE TABLE `grade`(
	`gradeid` INT(10) NOT NULL COMMENT '年级id',
	`gradename` VARCHAR(50) NOT NULL COMMENT '年纪名称',
	PRIMARY KEY (`gradeid`)
)ENGINE=INNODB DEFAULT CHARSET=utf8
```

以上的操作都是物理外键，数据库级别的外键，不建议使用！避免数据库过多造成困扰！

`最佳实践`

- 数据库就是用来单纯的表，只用来存数据，只有行（数据）和列（属性）
- 我们想使用多张表的数据，使用外键，用程序去实现

------

## DML语言

`数据库的意义`：数据存储，数据管理

> `Data Manipulation Luaguge`：数据库操作语言

### 1. 添加 [insert](https://so.csdn.net/so/search?q=insert&spm=1001.2101.3001.7020)

```sql
-- 普通用法
INSERT INTO `student`(`name`) VALUES ('zsr');

-- 插入多条数据
INSERT INTO `student`(`name`,`pwd`,`sex`) VALUES ('zsr','200024','男'),('gcc','000421','女');

-- 省略字段
INSERT INTO `student` VALUES (5,'Bareth','123456','男','2000-02-04','武汉','1412@qq.com',1); 
12345678
```

**语法：**

```sql
INSERT INTO 表名([字段1,字段2..])VALUES('值1','值2'..),[('值1','值2'..)..];
```

**注意**：

1. 字段和字段之间使用英文逗号隔开
2. 字段是可以省略的，但是值必须完整且一一对应
3. 可以同时插入多条数据，VALUES后面的值需要使用逗号隔开

------

### 2. 修改 update

```sql
-- 修改学员名字,指定条件
UPDATE `student` SET `name`='zsr204' WHERE id=1;

-- 不指定条件的情况,会改动所有表
UPDATE `student` SET `name`='zsr204';

-- 修改多个属性
UPDATE `student` SET `name`='zsr',`address`='湖北' WHERE id=1;

-- 通过多个条件定位数据
UPDATE `student` SET `name`='zsr204' WHERE `name`='zsr' AND `pwd`='200024';
1234567891011
```

**语法**：

```sql
UPDATE 表名 SET 字段1=值1,[字段2=值2...] WHERE 条件[];
```

**关于WHERE条件语句**：

| 操作符       | 含义     |
| ------------ | -------- |
| =            | 等于     |
| <>或!=       | 不等于   |
| >            | 大于     |
| <            | 小于     |
| <=           | 小于等于 |
| >=           | 大于等于 |
| BETWEEN…AND… | 闭合区间 |
| AND          | 和       |
| OR           | 或       |

------

### 3. 删除 delete

```sql
-- 删除数据(避免这样写,会全部删除)
DELETE FROM `student`;

-- 删除指定数据
DELETE FROM `student` WHERE id=1;
```

**语法**：

```sql
DELETE FROM 表名 [WHERE 条件]
```

关于`DELETE`删除的问题，重启数据库现象：

- INNODB 自增列会从1开始（存在内存当中，断电即失）
- MYISAM 继续从上一个子增量开始（存在内存当中，不会丢失）

> TRUNCATE

**作用**：完全清空一个数据库表，表的结构和索引约束不会变！

**DELETE和TRUNCATE 的区别：**

- DELETE可以条件删除（where子句），而TRUNCATE只能删除整个表
- TRUNCATE 重新设置自增列，计数器会归零，而DELETE不会影响自增
- DELETE是数据操作语言（DML - Data Manipulation Language），操作时原数据会被放到 rollback segment中，可以被回滚；而TRUNCATE是数据定义语言（DDL - Data Definition Language)，操作时不会进行存储，不能进行回滚。
  ![image-20210418210712785](https://img-blog.csdnimg.cn/img_convert/b4b2c1e383fc8bd2f0b1e4a4eddc080f.png)

```sql
CREATE TABLE `test`(
	`id` INT(4) NOT NULL AUTO_INCREMENT,
	`coll` VARCHAR(20) NOT NULL,
	PRIMARY KEY (`id`)
)ENGINE=INNODB DEFAULT CHARSET=utf8;

INSERT INTO `test`(`coll`) VALUES('1'),('2'),('3');

-- 不会影响自增
DELETE FROM `test`;

-- 会影响自增
TRUNCATE TABLE `test`;
```

------

# DQL查询数据

> `Data QueryLanguage`：数据查询语言

```sql
SELECT [ALL | DISTINCT]
{* | table.* | [table.field1[as alias1][,table.field2[as alias2]][,...]]}
FROM table_name [as table_alias]
  [left | right | inner join table_name2]  -- 联合查询
  [WHERE ...]  -- 指定结果需满足的条件
  [GROUP BY ...]  -- 指定结果按照哪几个字段来分组
  [HAVING]  -- 过滤分组的记录必须满足的次要条件
  [ORDER BY ...]  -- 指定查询记录按一个或多个条件排序
  [LIMIT {[offset,]row_count | row_countOFFSET offset}]; -- 指定查询的记录从哪条至哪条
```

- 查询数据库数据，如SELECT语句
- 简单的单表查询或多表的复杂查询和嵌套查询
- 是数据库语言中最核心，最重要的语句
- 使用频率最高的语句

`前提配置`：

```mysql
-- 创建学校数据库
CREATE DATABASE IF NOT EXISTS `school`;

-- 用school数据库
USE `school`;

-- 创建年级表grade表
CREATE TABLE `grade`(
	`GradeID` INT(11) NOT NULL AUTO_INCREMENT COMMENT '年级编号',
	`GradeName` VARCHAR(50) NOT NULL COMMENT '年纪名称',
	PRIMARY KEY	(`GradeID`)
)ENGINE=INNODB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- 给grade表插入数据
INSERT INTO `grade`(`GradeID`,`GradeName`) 
VALUES (1,'大一'),(2,'大二'),(3,'大三'),(4,'大四');

-- 创建成绩result表
CREATE TABLE `result`(
	`StudentNo` INT(4) NOT NULL COMMENT '学号',
	`SubjectNo` INT(4) NOT NULL COMMENT '考试编号',
	`ExamDate` DATETIME NOT NULL COMMENT '考试日期',
	`StudentResult` INT(4) NOT NULL COMMENT '考试成绩',
	KEY `SubjectNo` (`SubjectNo`)
)ENGINE=INNODB DEFAULT CHARSET=utf8;

-- 给result表插入数据
INSERT INTO `result`(`StudentNo`,`SubjectNo`,`ExamDate`,`StudentResult`) 
VALUES (1000,1,'2019-10-21 16:00:00',97),(1001,1,'2019-10-21 16:00:00',96),
(1000,2,'2019-10-21 16:00:00',87),(1001,3,'2019-10-21 16:00:00',98);

-- 创建学生表student
CREATE TABLE `student`(	
	`StudentNo` INT(4) NOT NULL COMMENT '学号',
	`LoginPwd` VARCHAR(20) DEFAULT NULL,
	`StudentName` VARCHAR(20) DEFAULT NULL COMMENT '学生姓名',
	`Sex` TINYINT(1) DEFAULT NULL COMMENT '性别,取值0或1',
	`GradeID` INT(11) DEFAULT NULL COMMENT '年级编号',
	`Phone` VARCHAR(50) NOT NULL COMMENT '联系电话,允许为空,即可选输入',
	`Adress` VARCHAR(255) NOT NULL COMMENT '地址,允许为空,即可选输入',
	`BornDate` DATETIME DEFAULT NULL COMMENT '出生时间',
	`Email` VARCHAR(50) NOT NULL COMMENT '邮箱账号,允许为空,即可选输入',
	`IdentityCard` VARCHAR(18) DEFAULT NULL COMMENT '身份证号',
	PRIMARY KEY (`StudentNo`),
	UNIQUE KEY `IdentityCard` (`IdentityCard`),
	KEY `Email` (`Email`)
)ENGINE=MYISAM DEFAULT CHARSET=utf8;

-- 给学生表插入数据
INSERT INTO `student`(`StudentNo`,`LoginPwd`,`StudentName`,`Sex`,`GradeID`,`Phone`,`Adress`,`BornDate`,`Email`,`IdentityCard`) 
VALUES (1000,'1241','dsaf',1,2,'24357','unknow','2000-09-16 00:00:00','1231@qq.com','809809'),
(1001,'1321','dfdj',0,2,'89900','unknow','2000-10-16 00:00:00','5971@qq.com','908697');

-- 创建科目表
CREATE TABLE `subject`(
	`SubjectNo` INT(11) NOT NULL AUTO_INCREMENT COMMENT '课程编号',
	`SubjectName` VARCHAR(50) DEFAULT NULL COMMENT '课程名称',
	`ClassHour` INT(4) DEFAULT NULL COMMENT '学时',
	`GradeID` INT(4) DEFAULT NULL COMMENT '年级编号',
	PRIMARY KEY (`SubjectNo`)
)ENGINE=INNODB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;

-- 给科目表subject插入数据
INSERT INTO `subject`(`SubjectNo`,`SubjectName`,`ClassHour`,`GradeID`) 
VALUES(1,'高数','96',2),(2,'大物','112',2),(3,'程序设计',64,3);

SELECT 字段 FROM 表;
```

## **基础查询**

`语法`：

```sql
SELECT 查询列表 FROM 表名;
```

- 查询列表可以是：表中的（一个或多个）字段，常量，变量，表达式，函数
- 查询结果是一个虚拟表格

```mysql
-- 查询全部学生
SELECT * FROM student;

-- 查询指定的字段
SELECT `LoginPwd`,`StudentName` FROM student;

-- 别名 AS(可以给字段起别名,也可以给表起别名)
SELECT `StudentNo` AS 学号,`StudentName` AS 学生姓名 FROM student AS 学生表;

-- 函数 CONCAT(str1,str2,...)
SELECT CONCAT('姓名',`StudentName`) AS 新名字 FROM student;

-- 查询系统版本(函数)
SELECT VERSION();

-- 用来计算(计算表达式)
SELECT 100*53-90 AS 计算结果;

-- 查询自增步长(变量)
SELECT @@auto_increment_increment;

-- 查询有哪写同学参加了考试,重复数据要去重
SELECT DISTINCT `StudentNo` FROM result;
```

## 查询条件

> where 条件字句：检索数据中`符合条件`的值

**语法**：

```mysql
select 查询列表 from 表名 where 筛选条件;
```

```mysql
-- 查询考试成绩在95~100之间的
SELECT `StudentNo`,`StudentResult` FROM result
WHERE `StudentResult`>=95 AND `StudentResult`<=100;
-- &&
SELECT `StudentNo`,`StudentResult` FROM result
WHERE `StudentResult`>=95 && `StudentResult`<=100;
-- BETWEEN AND
SELECT `StudentNo`,`StudentResult` FROM result
WHERE `StudentResult`BETWEEN 95 AND 100;

-- 查询除了1000号以外的学生
SELECT `StudentNo`,`StudentResult` FROM result
WHERE `StudentNo`!=1000;
-- NOT
SELECT `StudentNo`,`StudentResult` FROM result
WHERE NOT `StudentNo`=1000;

-- 查询名字含d的同学
SELECT `StudentNo`,`StudentName` FROM student
WHERE `StudentName` LIKE '%d%';

-- 查询名字倒数第二个为d的同学
SELECT `StudentNo`,`StudentName` FROM student
WHERE `StudentName` LIKE '%d_';

-- 查询1000,1001学员
SELECT `StudentNo`,`StudentName` FROM student
WHERE `StudentNo` IN (1000,1001);
```

## 分组查询

`语法`：

```mysql
select 分组函数，分组后的字段
from 表
【where 筛选条件】
group by 分组的字段
【having 分组后的筛选】
【order by 排序列表】
```

`区别`：

|            | 使用关键字 | 筛选的表     | 位置            |
| ---------- | ---------- | ------------ | --------------- |
| 分组前筛选 | where      | 原始表       | group by的前面  |
| 分组后筛选 | having     | 分组后的结果 | group by 的后面 |

```sql
-- 查询不同科目的平均分、最高分、最低分且平均分大于90
-- 核心：根据不同的课程进行分组
SELECT SubjectName,AVG(StudentResult),MAX(`StudentResult`),MIN(`StudentResult`)
FROM result r
INNER JOIN `subject` s
on r.SubjectNo=s.SubjectNo
GROUP BY r.SubjectNo
HAVING AVG(StudentResult)>90;
```

## 连接查询

![image-20200718231304641](https://img-blog.csdnimg.cn/img_convert/6354aff6ecaee8ec2f2f7ec065304889.png)

```sql
-- 查询学员所属的年级（学号，学生姓名，年级名称）
SELECT `StudentNo`,`StudentName`,`GradeName`
FROM student s
INNER JOIN grade g
ON s.GradeID=g.GradeID;

-- 查询科目所属的年级
SELECT `SubjectName`,`GradeName`
FROM `subject` s
INNER JOIN `grade` g
ON s.GradeID=g.GradeID;

-- 查询列参加程序设计考试的同学信息（学号，姓名，科目名，分数）
SELECT s.`StudentNo`,`StudentName`,`SubjectName`,`StudentResult`
FROM student s
INNER JOIN result r
on s.StudentNo=r.StudentNo
INNER JOIN `subject` sub
on r.SubjectNo=sub.SubjectNo
where SubjectName='课程设计';
```

> **自链接**

自己的表和自己的表链接，核心：**一张表拆分为两张一样的表即可**

```sqlite
-- 创建一个表
CREATE TABLE `course` (
`courseid` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '课程id',
`pid` INT(10) NOT NULL COMMENT '父课程id',
`courseName` VARCHAR(50) NOT NULL COMMENT '课程名',
PRIMARY KEY (`courseid`)
) ENGINE=INNODB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8

-- 插入数据
INSERT INTO `course` (`courseid`, `pid`, `courseName`)
VALUES('2','1','信息技术'),
('3','1','软件开发'),
('4','3','数据库'),
('5','1','美术设计'),
('6','3','web开发'),
('7','5','ps技术'),
('8','2','办公信息');
```

将该表进行拆分：

| pid（父课程id） | courseid（课程id） | courseName（课程名） |
| --------------- | ------------------ | -------------------- |
| 1               | 2                  | 信息技术             |
| 1               | 3                  | 软件开发             |
| 1               | 5                  | 美术设计             |

| pid（父课程id） | courseid（课程id） | courseName（课程名） |
| --------------- | ------------------ | -------------------- |
| 2               | 8                  | 办公信息             |
| 3               | 4                  | 数据库               |
| 3               | 6                  | web开发              |
| 5               | 7                  | ps技术               |

**操作**：查询父类对应的子类关系

| 父类       | 子类                |
| ---------- | ------------------- |
| 信息技术 2 | 办公信息 4          |
| 软件开发 3 | 数据库 4、web开发 6 |
| 美术设计 5 | ps技术 7            |

```sql
SELECT a.`courseid` AS '父课程',b.`courseid` AS '子课程'
FROM course AS a,course AS b
WHERE a.`courseid`=b.`pid`;
```

![image-20200719105147906](https://img-blog.csdnimg.cn/img_convert/149c6d4bfdaea45e0a66af888e3f304c.png)

## 排序和分页

> **排序**

`语法`：

```mysql
select 查询列表
from 表
where 筛选条件
order by 排序列表 asc/desc
```

- order by的位置一般放在查询语句的最后（除limit语句之外）

| asc ：     | 升序，如果不写默认升序 |
| ---------- | ---------------------- |
| **desc：** | **降序**               |

```sql
SELECT `StudentNo`,`StudentName`,`GradeName`
FROM student s
INNER JOIN grade g
ON s.GradeID=g.GradeID
ORDER BY `StudentNo` DESC;
```

> **分页**

`语法`：

```mysql
select 查询列表
from 表
limit offset,pagesize;
```

- offset代表的是起始的条目索引，默认从0开始
- size代表的是显示的条目数
- offset=(n-1)*pagesize

```sql
-- 第一页 limit 0 5
-- 第二页 limit 5,5
-- 第三页 limit 10,5
-- 第n页  limit (n-1)*pagesize,pagesize
-- pagesize:当前页面大小
-- (n-1)*pagesize:起始值
-- n:当前页面
-- 数据总数/页面大小=总页面数
-- limit n 表示从0到n的页面
```

## 子查询

``本质``在`where`子句中嵌套一个子查询语句

```mysql
-- 查询‘课程设计’的所有考试结果（学号，科目编号，成绩）降序排列

-- 方式一:使用连接查询
SELECT `StudentNo`,r.`SubjectNo`,`StudentResult`
FROM result r
INNER JOIN `subject` s
on r.StudentNo=s.SubjectNo
WHERE SubjectName='课程设计'
ORDER BY StudentResult DESC;
-- 方式二:使用子查询（由里到外）
SELECT StudentNo,SubjectNo,StudentResult
from result
WHERE SubjectNo=(
	SELECT SubjectNo FROM `subject`
	WHERE SubjectName='课程设计'
)
```

## MySQL函数

### 常用函数

```mysql
-- 数学运算
SELECT ABS(-8); -- 绝对值
SELECT CEIL(5.1); -- 向上取整
SELECT CEILING(5.1); -- 向上取整
SELECT RAND(); -- 返回0~1之间的一个随机数
SELECT SIGN(-10); -- 返回一个数的符号;0返回0;正数返回1;负数返回-1

-- 字符串函数
SELECT CHAR_LENGTH('我喜欢你'); -- 字符串长度
SELECT CONCAT('我','喜欢','你'); -- 拼接字符串
SELECT INSERT('我喜欢',1,1,'超级') -- INSERT(str,pos,len,newstr) 从str的pos位置开始替换为长度为len的newstr
SELECT UPPER('zsr'); -- 转大写
SELECT LOWER('ZSR'); -- 转小写
SELECT INSTR('zsrs','s'); -- 返回第一次出现字串索引的位置
SELECT REPLACE('加油就能胜利','加油','坚持'); -- 替换出现的指定字符串
SELECT SUBSTR('坚持就是胜利',3,6); -- 返回指定的字符串(源字符串,截取位置,截取长度)
SELECT REVERSE('rsz'); -- 反转字符串

-- 时间日期函数
SELECT CURRENT_DATE(); -- 获取当前日期
SELECT CURDATE(); -- 获取当前日期
SELECT now(); -- 获取当前时间
SELECT LOCALTIME(); -- 本地时间
SELECT SYSDATE(); -- 系统时间

SELECT YEAR(NOW());
SELECT MONTH(NOW());
SELECT DAY(NOW());
SELECT HOUR(NOW());
SELECT MINUTE(NOW());
SELECT SECOND(NOW());

-- 系统信息
SELECT SYSTEM_USER();
SELECT USER();
SELECT VERSION();
```

### 聚合函数

| 函数  | 描述     |
| ----- | -------- |
| max   | 最大值   |
| min   | 最小值   |
| sum   | 和       |
| avg   | 平均值   |
| count | 计算个数 |

```sql
SELECT COUNT(StudentName) FROM student; 
SELECT COUNT(*) FROM student;
SELECT COUNT(1) FROM student;

SELECT SUM(`StudentResult`) FROM result;
SELECT AVG(`StudentResult`) FROM result;
SELECT MAX(`StudentResult`) FROM result;
SELECT MIN(`StudentResult`) FROM result;
```

# 数据库级别的MD5加密

> **MD5信息摘要算法**（MD5 Message-Digest Algorithm）

- MD5由MD4、MD3、MD2改进而来，主要增强算法复杂度和不可逆性
- MD5破解网站的原理，背后有一个字典，MD5加密后的值，加密前的值

```mysql
CREATE TABLE `testMD5`(
	`id` INT(4) NOT NULL,
	`name` VARCHAR(20) NOT NULL,
	`pwd` VARCHAR(50) NOT NULL,
	PRIMARY KEY(`id`)
)ENGINE=INNODB DEFAULT CHARSET =utf8;

-- 明文密码
INSERT INTO `testMD5` VALUES(1,'zsr','200024'),
(2,'gcc','000421'),(3,'bareth','123456');

-- 加密
UPDATE `testMD5` SET `pwd`=MD5(pwd) WHE RE id=1;
UPDATE `testMD5` SET `pwd`=MD5(pwd); -- 加密全部的密码

-- 插入的时候加密
INSERT INTO `testMD5` VALUES(4,'barry',MD5('654321'));

-- 如何校验:将用户传递进来的密码，进行MD5加密，然后对比加密后的值
SELECT * FROM `testMD5` WHERE `name`='barry' AND `pwd`=MD5('654321');
```

# 事务

> **要么都成功，要么都失败**

```note
SQL执行：A转账给B
SQL执行：B收到A的钱
```

将一组SQL放在一个批次中去执行

- 例如银行转账：只有A转账成功且B成功到账，该事件才算结束，如果一方不成功，则该事务不成功

## 事务原则：ACID

参考链接：https://blog.csdn.net/dengjili/article/details/82468576

| 名称                      | 描述                                                         |
| ------------------------- | ------------------------------------------------------------ |
| **原子性（Atomicity）**   | 原子性是指事务是一个不可分割的工作单位，事务中的操作要么都发生，要么都不发生。 |
| **一致性（Consistency）** | 事务前后数据的完整性必须保持一致。                           |
| **隔离性（Isolation）**   | 事务的隔离性是多个用户并发访问数据库时，数据库为每一个用户开启的事务，不能被其他事务的操作数据所干扰，多个并发事务之间要相互隔离。 |
| **持久性（Durability）**  | 事务一旦被提交则不可逆，被持久化到数据库中，接下来即使数据库发生故障也不应该对其有任何影响 |

------

## 事务并发导致的问题

> 隔离所导致的一些问题：

| 名称           | 描述                                                         |
| -------------- | ------------------------------------------------------------ |
| **脏读**       | 指一个事务读取了另外一个事务未提交的数据。                   |
| **不可重复读** | 在一个事务内读取表中的某一行数据，多次读取结果不同。         |
| **虚读(幻读)** | 是指在一个事务内读取到了别的事务插入的数据，导致前后读取不一致。 |

------

## 隔离级别

> 在数据库操作中，为了有效保证并发读取数据的正确性，提出的**事务隔离级别**

- **读未提交**：一个事务读取到其他事务未提交的数据；这种隔离级别下，查询不会加锁，一致性最差，会产生`脏读`、`不可重复读`、`幻读`的问题

- **读已提交**：一个事务只能读取到其他事务已经提交的数据；该隔离级别避免了`脏读`问题的产生，但是`不可重复读`和`幻读`的问题仍然存在；

  读提交事务隔离级别是大多数流行数据库的默认事务隔离级别，比如 Oracle，但是不是 MySQL 的默认隔离界别

- **可重复读**：事务在执行过程中可以读取到其他事务已提交的新插入的数据，但是不能读取其他事务对数据的修改，也就是说多次读取同一记录的结果相同；该个里级别避免了`脏读`、`不可重复度`的问题，但是仍然无法避免`幻读`的问题

  可重复读是MySQL默认的隔离级别

- **串行化**：事务串行化执行，事务只能一个接着一个地执行,、，并且在执行过程中完全看不到其他事务对数据所做的更新；缺点是并发能力差，最严格的事务隔离，完全符合ACID原则，但是对性能影响比较大

| **事务隔离级别**             | **脏读** | **不可重复读** | **幻读** |
| ---------------------------- | -------- | -------------- | -------- |
| 读未提交（read-uncommitted） | 是       | 是             | 是       |
| 读已提交（read-committed）   | 否       | 是             | 是       |
| 可重复读（repeatable-read）  | 否       | 否             | 是       |
| 串行化（serializable）       | 否       | 否             | 否       |

## 执行事务的过程

1️⃣ **关闭自动提交**

```sql
SET autocommit=0; 
```

2️⃣ **事务开启**

```sql
START TRANSACTION -- 标记一个事务的开始，从这个之后的sql都在同一个事务内
```

3️⃣ **成功则提交，失败则回滚**

```sql
-- 提交：持久化（成功）
COMMIT
12
-- 回滚：回到原来的样子（失败）
ROLLBACK
```

4️⃣ **事务结束**

```sql
SET autocommit=1; -- 开启自动提交
```

5️⃣ **其他操作**

```sql
SAVEPOINT 保存点名; -- 设置一个事务的保存点
ROLLBACK TO SAVEPOINT 保存点名; -- 回滚到保存点
RELEASE SAVEPOINT 保存点名; -- 撤销保存点
```

# 索引

推荐阅读：[MySQL索引背后的数据结构及算法原理](http://blog.codinglabs.org/articles/theory-of-mysql-index.html)

> 索引（`Index`）是帮助MySQL高效获取数据的**数据结构**。

- 提高查询速度
- 确保数据的唯一性
- 可以加速表和表之间的连接 , 实现表与表之间的参照完整性
- 使用分组和排序子句进行数据检索时 , 可以显著减少分组和排序的时间
- 全文检索字段进行搜索优化

------

## 索引的分类

```sql
-- 创建学生表student
CREATE TABLE `student`(	
	`StudentNo` INT(4) NOT NULL COMMENT '学号',
	`LoginPwd` VARCHAR(20) DEFAULT NULL,
	`StudentName` VARCHAR(20) DEFAULT NULL COMMENT '学生姓名',
	`Sex` TINYINT(1) DEFAULT NULL COMMENT '性别,取值0或1',
	`GradeID` INT(11) DEFAULT NULL COMMENT '年级编号',
	`Phone` VARCHAR(50) NOT NULL COMMENT '联系电话,允许为空,即可选输入',
	`Adress` VARCHAR(255) NOT NULL COMMENT '地址,允许为空,即可选输入',
	`BornDate` DATETIME DEFAULT NULL COMMENT '出生时间',
	`Email` VARCHAR(50) NOT NULL COMMENT '邮箱账号,允许为空,即可选输入',
	`IdentityCard` VARCHAR(18) DEFAULT NULL COMMENT '身份证号',
	PRIMARY KEY (`StudentNo`),
	UNIQUE KEY `IdentityCard` (`IdentityCard`),
	KEY `Email` (`Email`)
)ENGINE=MYISAM DEFAULT CHARSET=utf8;
```

### 主键索引（PRIMARY KEY）

唯一的标识，主键不可重复，只有一个列作为主键

- 最常见的索引类型，不允许为空值
- 确保数据记录的唯一性
- 确定特定数据记录在数据库中的位置

```sql
-- 创建表的时候指定主键索引
CREATE TABLE tableName(
  ......
  PRIMARY INDEX (columeName)
)

-- 修改表结构添加主键索引
ALTER TABLE tableName ADD PRIMARY INDEX (columnName)
```

------

### 普通索引（KEY / INDEX）

默认的，快速定位特定数据

- index 和 key 关键字都可以设置常规索引
- 应加在查询找条件的字段
- 不宜添加太多常规索引,影响数据的插入,删除和修改操作

```sql
-- 直接创建普通索引
CREATE INDEX indexName ON tableName (columnName)

-- 创建表的时候指定普通索引
CREATE TABLE tableName(
  ......
  INDEX [indexName] (columeName)
)

-- 修改表结构添加普通索引
ALTER TABLE tableName ADD INDEX indexName(columnName)
```

------

### 唯一索引（UNIQUE KEY）

它与前面的普通索引类似，不同的就是：索引列的值必须唯一，但允许有空值

与主键索引的区别：主键索引只能有一个、唯一索引可以有多个

```sql
-- 直接创建唯一索引
CREATE UNIQUE INDEX indexName ON tableName(columnName)

-- 创建表的时候指定唯一索引
CREATE TABLE tableName(  
	......
	UNIQUE INDEX [indexName] (columeName)  
);  

-- 修改表结构添加唯一索引
ALTER TABLE tableName ADD UNIQUE INDEX [indexName] (columnName)
```

------

### 全文索引（FULLText）

快速定位特定数据（百度搜索就是全文索引）

- 在特定的数据库引擎下才有：MyISAM
- 只能用于CHAR , VARCHAR , TEXT数据列类型
- 适合大型数据集

```sql
-- 增加一个全文索引
ALTER TABLE `student` ADD FULLTEXT INDEX `StudentName`(`StudentName`);

-- EXPLAIN 分析sql执行的情况
EXPLAIN SELECT * FROM student; -- 非全文索引
EXPLAIN SELECT * FROM student WHERE MATCH(StudentName) AGAINST('d'); -- 全文索引
```

## 索引的使用

### 索引的创建

- 在创建表的时候给字段增加索引

```mysql
CREATE TABLE 表名 (
    字段名1 数据类型 [完整性约束条件…],
    字段名2 数据类型 [完整性约束条件…],
    [UNIQUE|FULLTEXT|SPATIAL] INDEX|KEY [索引名] (字段名[(长度)] [ASC |DESC])
);
```

- 创建完毕后，增加索引

```mysql
-- 方法一：CREATE在已存在的表上创建索引
       CREATE [UNIQUE|FULLTEXT|SPATIAL] INDEX 索引名
       ON 表名 (字段名[(长度)] [ASC |DESC]) ;

-- 方法二：ALTER TABLE在已存在的表上创建索引
       ALTER TABLE 表名 ADD [UNIQUE|FULLTEXT|SPATIAL] 
       INDEX 索引名 (字段名[(长度)] [ASC |DESC]) ;
```

### 索引的删除

```mysql
-- 删除索引
	DROP INDEX 索引名 ON 表名;
-- 删除主键索引
	ALTER TABLE 表名 DROP PRIMARY KEY;
```

### 显示索引信息

```sql
SHOW INDEX FROM 表名;
```

### explain分析sql执行的情况

```sql
-- 增加一个全文索引
ALTER TABLE `student` ADD FULLTEXT INDEX `StudentName`(`StudentName`);

-- EXPLAIN 分析sql执行的情况
EXPLAIN SELECT * FROM student; -- 非全文索引
EXPLAIN SELECT * FROM student WHERE MATCH(StudentName) AGAINST('d'); -- 全文索引
```

------

## 测试索引

**建表app_user：**

```sql
CREATE TABLE `app_user` (
    `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
    `name` varchar(50) DEFAULT '' COMMENT '用户昵称',
    `email` varchar(50) NOT NULL COMMENT '用户邮箱',
    `phone` varchar(20) DEFAULT '' COMMENT '手机号',
    `gender` tinyint(4) unsigned DEFAULT '0' COMMENT '性别（0:男；1：女）',
    `password` varchar(100) NOT NULL COMMENT '密码',
    `age` tinyint(4) DEFAULT '0' COMMENT '年龄',
    `create_time` datetime DEFAULT CURRENT_TIMESTAMP,
    `update_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATECURRENT_TIMESTAMP,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='app用户表'
```

**批量插入数据：100w**

```sql
-- 1418错解决方案(创建函数前执行此语句)
set global log_bin_trust_function_creators=true;

-- 插入100万条数据
DELIMITER $$	-- 写函数之前要写的标志
CREATE FUNCTION mock_data()	-- 创建mock_data()函数
RETURNS INT
BEGIN
	DECLARE num INT DEFAULT 1000000;
	DECLARE i INT DEFAULT 0;
	WHILE i < num DO
  		INSERT INTO app_user(`name`, `email`, `phone`, `gender`, `password`, `age`)
   		VALUES(CONCAT('用户', i), '24736743@qq.com', CONCAT('18', FLOOR(RAND()*(999999999-100000000)+100000000)),FLOOR(RAND()*2),UUID(), FLOOR(RAND()*100));
  		SET i = i + 1;
	END WHILE;
	RETURN i;
END;

-- 执行函数
SELECT mock_data();
```

![image-20210327101253258](https://img-blog.csdnimg.cn/img_convert/df271eca3feb9ab506aaed611ef6f087.png)
![image-20210327101316627](https://img-blog.csdnimg.cn/img_convert/2d3b3bfa01475754f69c4386a214a73a.png)

**测试查询速度**

```sql
-- 查询用户名为'用户9999'性能分析
EXPLAIN SELECT * FROM app_user where name='用户99999'
```

![image-20210327101912627](https://img-blog.csdnimg.cn/img_convert/70f2c32ec8c3bbdf6ea0c922108f8d8c.png)

**增加索引后测试**

```sql
-- 给name列创建常规索引
CREATE INDEX id_app_user_name ON app_user(`name`)
-- 再测试
EXPLAIN SELECT * FROM app_user where name='用户99999'
```

![image-20210327102830560](https://img-blog.csdnimg.cn/img_convert/cd50fa7b12a659d31ffc32e0ef15e20f.png)
对比两次结果，速度有了很大的提升

------

## 索引原则

- 索引不是越多越好，小数据量的表不需要加索引
- 不要对经常变动的数据增加索引
- 索引一般加在经常要查询的列上

------

# explain关键字

**建议阅读**：

- [MySQL优化——看懂explain](https://blog.csdn.net/jiadajing267/article/details/81269067)
- [MySQL高级 之 explain执行计划详解](https://blog.csdn.net/wuseyukui/article/details/71512793?dist_request_id=&depth_1-)

------

# 权限管理和备份

## 用户管理

**方式一：可视化管理**
![image-20210327123000095](https://img-blog.csdnimg.cn/img_convert/26c44c01a054ac4476a6cb2eafb768ff.png)

------

**方式二：SQL命令操作**

> 用户信息存储在`mysql`数据库的`user`表中，对用户的管理本质上就是对这张表进行增删改查
>
> ![image-20210327123240942](https://img-blog.csdnimg.cn/img_convert/134b75187269c5e003fd98902cfc959e.png)

```sql
-- 创建用户
CREATE USER zsr IDENTIFIED BY '123456'

-- 删除用户
DROP USER zsr

-- 修改当前用户密码
SET PASSWORD = PASSWORD('200024')

-- 修改指定用户密码
SET PASSWORD FOR zsr = PASSWORD('200024')

-- 重命名
RENAME USER zsr to zsr2

-- 用户授权(授予全部权限,除了给其他用户授权)
GRANT ALL	PRIVILEGES on *.* TO zsr2

-- 查询权限
SHOW GRANTS FOR zsr
-- 查看root用户权限
SHOW GRANTS FOR root@localhost

-- 撤销权限
REVOKE ALL PRIVILEGES ON *.* FROM zsr
```

------

## 数据库备份

保证重要的数据不丢失、数据转义

> **方式一**：直接拷贝物理文件，MySQL数据表以文件方式存放在磁盘中

- 包括表文件 , 数据文件 , 以及数据库的选项文件

- 位置 : `Mysql安装目录\data\`（目录名对应数据库名 , 该目录下文件名对应数据表）

  ![image-20210327125528006](https://img-blog.csdnimg.cn/img_convert/7e7cc8befc1537b12c9f7dfd10279114.png)

> **方式二**：可视化管理

Navicat打开要备份的数据库，然后点击新建备份
![image-20210327125911151](https://img-blog.csdnimg.cn/img_convert/e4240bd95dec14b565b1d86cb1c5c915.png)
点击对象选择，这里可以自定义选择备份的表
![image-20210327130024058](https://img-blog.csdnimg.cn/img_convert/3e6c95e2806746c38d0e8627682f6163.png)
选择完毕后，点击备份即可开始备份
![image-20210327130134693](https://img-blog.csdnimg.cn/img_convert/8f920ac3f3ad125e54e4f3f10328cbee.png)
![image-20210327130213947](https://img-blog.csdnimg.cn/img_convert/eeaeff9e0dd440f6dc4df763f5804845.png)
等待备份完成，关闭，然后便可看到备份的文件
![image-20210327130245251](https://img-blog.csdnimg.cn/img_convert/056debcb95166ac3195a993db6a9b63b.png)

> **方式三**：可视化管理

选中要导出的表，右键转储SQL文件
![image-20210327131239931](https://img-blog.csdnimg.cn/img_convert/da7feae09141b97f48ef3133a7385baa.png)
然就就可以得到`.sql`文件
![image-20210327131430300](https://img-blog.csdnimg.cn/img_convert/4d4c9b1c3da14f4fccaf7e4ad0b5c6f5.png)

> **方式四**：命令`mysqldump`导出

```shell
# mysqldump -h主机 -u用户名 -p密码 数据库 [表1 表2 表3] >物理磁盘位置/文件名

# 导出school数据库的cource grade student表到D:/school.sql
mysqldump -hlocalhost -uroot -p200024 school course grade student >D:/school.sql
```

![image-20210327132011402](https://img-blog.csdnimg.cn/img_convert/5443e1fbd169e2c1e387cb4da76d0b8e.png)
然后便可看到导出的`sql`文件
![image-20210327132043857](https://img-blog.csdnimg.cn/img_convert/4f8735b65d95ecd8db7fcdb3da763e4f.png)
然后可以命令行登录mysql，切换到指定的数据库，用`source`命令导入
![image-20210327132439737](https://img-blog.csdnimg.cn/img_convert/17b6a505af032cce78c98488f1baa215.png)

------

# 三大范式

> **规范化理论**：改造关系模式，通过分解关系模式来消除其中不合适的数据依赖，以解决插入异常、删除异常、更新异常和数据冗余的问题。
>
> 为了建立冗余较小、结构合理的数据库，设计数据库时必须遵循一定规范化理论。在关系型数据库中这种规则就称为`范式`

[三大范式的通俗理解](https://www.cnblogs.com/wsg25/p/9615100.html)

- 如果一个关系模式R的所有属性都是不可分的数据项，则R属于`第一范式`
- 如果关系模式R属于第一范式，且每一个非主属性完全函数依赖于码，则R属于`第二范式`
- 若关系模式R属于第二范式，且R中所有的非主属性都直接依赖于码，则R属于`第三范式`

![image-20210325220605636](https://gitee.com/zhong_siru/images/raw/master//img/image-20210325220605636.png)

**规范性问题**：

> 数据库的范式是为了规范数据库的设计，但是实际中相比规范性，往往更需要看中性能、成本、用户体验等问题；
>
> 因此有时会故意给某些表增加一个冗余的字段，使多表查询变为单表查询。有时还会增加一些计算列，从大数据量变为小数据量（数据量大时，count(*)很耗时，可以直接添加一列，每增加一行+1，查该列即可）；阿里也曾提出关联查询的表最多不超过三张表。
>
> 这些就是为了性能、成本而舍弃一定规范性的例子

------

# 数据库驱动和JDBC

> 我们编写的程序会通过**数据库驱动**来和数据库进行交互
>
> 
>
> 然后不同的数据库有不同的驱动，这不便于我们程序对各种数据库进行操作；因此为了简化对不同数据库的操作，SUN公司提供了一个Java操作数据库的规范`JDBC`；不同数据库的规范由对应的数据库厂商完成，对于开发人员，只需要掌握JDBC接口的操作即可

## 第一个JDBC程序

1️⃣ **新建空项目**

![image-20210327153130998](https://img-blog.csdnimg.cn/img_convert/2a6f4995962d7719b5f341ac0d2bfabe.png)

2️⃣ **导入mysql-connector-java**

在项目目录下新建`lib`目录，放入jar包
![image-20210327153240818](https://gitee.com/zhong_siru/images/raw/master//img/image-20210327153240818.png)
![image-20210327153343389](https://img-blog.csdnimg.cn/img_convert/44dc09d9bf971bd3dc0c72cfe8aab10d.png)
![image-20210327153457419](https://img-blog.csdnimg.cn/img_convert/8b6b89c5197b0356215aa9aed1cbd964.png)

3️⃣ **编写代码&测试**

在`src`目录下新建`JDBCDemo`用来操作数据库

```java
import java.sql.*;

public class JDBCDemo {
    public static void main(String[] args) throws ClassNotFoundException, SQLException {
        //1.加载驱动
        Class.forName("com.mysql.cj.jdbc.Driver");
        //2.连接信息url,用户信息
        String url = "jdbc:mysql://localhost:3306/school?useUnicode=true&characterEncoding=utf8&useSSL=true&serverTimezone=UTC";
        String username = "root";
        String password = "200024";
        //3.连接,获得数据库对象connection
        Connection connection = DriverManager.getConnection(url, username, password);
        //4.获取执行sql的对象
        Statement statement = connection.createStatement();
        //5.执行sql
        String sql = "select * from app_user where id<10";
        ResultSet resultSet = statement.executeQuery(sql);
        while (resultSet.next()) {
            System.out.println("id:" + resultSet.getObject("id") + "phone:" + resultSet.getObject("phone"));
        }
        //6.释放连接
        resultSet.close();
        statement.close();
        connection.close();
    }
}
```

![image-20210327155209907](https://img-blog.csdnimg.cn/img_convert/30ae5d967e49cdbf74b4677938952fc1.png)

------

## JDBC对象

### DriverManager

> **DriverManager**：驱动管理

```java
//1.加载驱动
Class.forName("com.mysql.cj.jdbc.Driver");
```

本质上执行`DriverManager.registerDriver(new com.mysql.cj.jdbc.Driver());`

![image-20210327161110925]()

```java
//3.连接,获得数据库对象connection
Connection connection = DriverManager.getConnection(url, username, password);
```

`connection`代表数据库，因此可以设置事务自动提交，事务回滚等

![image-20210327161507445](https://img-blog.csdnimg.cn/img_convert/3e5b382f0710809439ab5f7cee170872.png)

------

### Statement

> **Statement**：执行sql的对象，用于向数据库发送SQL语句，想完成对数据库的增删改査，只需要通过这个对象向数据库发送增删改查语句即可

```java
statement.executeQuery();//查询操作,返回结果
statement.execute();//执行sql
statement.executeUpdate();//用于增删改,返回受影响的行数
```

![image-20210327162622201](https://img-blog.csdnimg.cn/img_convert/aa5a397f6e2e376c7e16dbba106e88b6.png)
![image-20210327162705203](https://img-blog.csdnimg.cn/img_convert/c4587e04579f25dc58864ccfed3184f4.png)

------

### ResultSet

> **ResultSet**：查询的结果集，封装了所有查询的结果

![image-20210327162307420](https://img-blog.csdnimg.cn/img_convert/ac1a33619a7021011df6025a57f18ec3.png)

------

## 3. 封装jdbc工具类

### 编写数据库配置文件

在`src`目录下新建`db.properties`，用于存放数据库配置信息
![image-20210327165924876](https://img-blog.csdnimg.cn/img_convert/aa2ecaf2738632a4b75d2c70e417f8c1.png)

```properties
driver=com.mysql.cj.jdbc.Driver
url=jdbc:mysql://localhost:3306/school?useUnicode=true&characterEncoding=utf8&useSSL=true&serverTimezone=UTC
username=root
password=200024
```

------

###  编写工具类

然后再`src`目录下新建`JDBCUtils.java`作为工具类

```java
import java.io.InputStream;
import java.sql.*;
import java.util.Properties;

public class JDBCUtils {
    private static String driver = null;
    private static String url = null;
    private static String username = null;
    private static String password = null;

    static {
        try {
            InputStream inputStream = JDBCDemo.class.getClassLoader().getResourceAsStream("db.properties");
            Properties properties = new Properties();
            properties.load(inputStream);
            driver = properties.getProperty("driver");
            url = properties.getProperty("url");
            username = properties.getProperty("username");
            password = properties.getProperty("password");
            //加载驱动
            Class.forName(driver);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    //获取连接
    public static Connection getConnection() throws SQLException {
        return DriverManager.getConnection(url, username, password);
    }

    //释放连接资源
    public static void release(Connection connection, Statement statement, ResultSet resultSet) {
        if (resultSet != null) {
            try {
                resultSet.close();
            } catch (SQLException throwables) {
                throwables.printStackTrace();
            }
        }
        if (statement != null) {
            try {
                statement.close();
            } catch (SQLException throwables) {
                throwables.printStackTrace();
            }
        }
        if (connection != null) {
            try {
                connection.close();
            } catch (SQLException throwables) {
                throwables.printStackTrace();
            }
        }
    }
}
```

------

### 测试

修改`JDBCDemo`

```java
import java.sql.*;

public class JDBCDemo {
    public static void main(String[] args) throws SQLException {
        //获得数据库对象connection
        Connection connection = JDBCUtils.getConnection();
        //获取sql执行对象statement
        Statement statement = connection.createStatement();
        //执行sql
        String sql = "select * from app_user where id<10";
        ResultSet resultSet = statement.executeQuery(sql);
        while (resultSet.next()) {
            System.out.println("id:" + resultSet.getObject("id") + "phone:" + resultSet.getObject("phone"));
        }
        //释放连接
        JDBCUtils.release(connection, statement, resultSet);
    }
}
```

![image-20210327171418601](https://img-blog.csdnimg.cn/img_convert/d22fdb27412e8514d878f28053d4f820.png)

------

## SQL注入问题

> SQL注入即是指[web应用程序](https://baike.baidu.com/item/web应用程序/2498090)对用户输入数据的合法性没有判断或过滤不严，攻击者可以在web应用程序中事先定义好的查询语句的结尾上添加额外的[SQL语句](https://baike.baidu.com/item/SQL语句/5714895)，在管理员不知情的情况下实现非法操作，以此来实现欺骗[数据库服务器](https://baike.baidu.com/item/数据库服务器/613818)执行非授权的任意查询，从而进一步得到相应的数据信息。

**sql注入案例**：主函数中传入用户名，查找指定名字用户信息

```java
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class SQLInjection {
    public static void main(String[] args) throws SQLException {
        searchName("' or '1=1");
    }

    //查找指定名字用户信息
    public static void searchName(String username) throws SQLException {
        //获得数据库对象connection
        Connection connection = JDBCUtils.getConnection();
        //获取sql执行对象statement
        Statement statement = connection.createStatement();
        //执行sql
        String sql = "select * from app_user where name='" + username + "'";
        ResultSet resultSet = statement.executeQuery(sql);
        while (resultSet.next()) {
            System.out.println("id:" + resultSet.getObject("id") + "phone:" + resultSet.getObject("phone"));
        }
        //释放连接
        JDBCUtils.release(connection, statement, resultSet);
    }
}
```

**结果**：查询到了数据库中所有的数据
![image-20210327173159454](https://img-blog.csdnimg.cn/img_convert/fa46b5cd881946e10066ced5b621f8b7.png)
这里传入一个不是用户名，而是一个不合法字符串，却获取到了全部的数据，为什么呢？

拼接整条sql语句是`select * from app_user where name=' ' or '1==1'`，其中`1==1`永远是真的，所以该sql语句相当于查询表中所有的数据；这就是sql注入，主要是字符串拼接引起的问题，十分危险！！

------

## PreparedStatement对象

> `PreparedStatement`是`Statement`的子类，与其相比，可以防止SQL注入，并且效率更高

同样测试sql注入案例

```java
import java.sql.*;

public class SQLInjection {
    public static void main(String[] args) throws SQLException {
        searchName("' 'or '1=1'");
    }

    //登录
    public static void searchName(String username) throws SQLException {
        //获得数据库对象connection
        Connection connection = JDBCUtils.getConnection();
        //获取sql执行对象preparedStatement(预编译sql,先写不执行,参数用?表示)
        PreparedStatement preparedStatement = connection.prepareStatement("select * from app_user where name=?");
        //手动传参
        preparedStatement.setString(1, username);
        //执行sql
        ResultSet resultSet = preparedStatement.executeQuery();
        while (resultSet.next()) {
            System.out.println("id:" + resultSet.getObject("id") + "phone:" + resultSet.getObject("phone"));
        }
        //释放连接
        JDBCUtils.release(connection, preparedStatement, resultSet);
    }
}
```

![image-20210327180032468](https://img-blog.csdnimg.cn/img_convert/1a164b75b1a4e030974f32f4ed8cec42.png)
根据结果，PreparedStatement对象完美避免了sql注入问题

------

## 事务案例

首先创建account表

```sql
CREATE TABLE account(
	id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(40),
	money FLOAT
);

INSERT INTO account(name,money) VALUES('A',1000);
INSERT INTO account(name,money) VALUES('B',1000);
INSERT INTO account(name,money) VALUES('C',1000);
```

![image-20210414235806762](https://img-blog.csdnimg.cn/img_convert/fb7a765f6b6d077503fb3ac8fe2971c7.png)
然后编写Java代码

```java
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Statement;

public class TestTransaction {
    public static void main(String[] args) throws SQLException {
        //获得数据库对象connection
        Connection connection = JDBCUtils.getConnection();
        //关闭数据库自动提交,即开启事务
        connection.setAutoCommit(false);
        String sql1 = "update account set money = money+100 where name = 'A' ";
        String sql2 = "update account set money = money-100 where name = 'B' ";
        //获取sql执行对象preparedStatement
        PreparedStatement preparedStatement = connection.prepareStatement(sql1);
        preparedStatement.executeUpdate();
        preparedStatement = connection.prepareStatement(sql2);
        preparedStatement.executeUpdate();
        //业务完毕,提交事务
        connection.commit();
        //释放资源
        JDBCUtils.release(connection, preparedStatement, null);
    }
}
```

运行结果：
![image-20210414235836300](https://img-blog.csdnimg.cn/img_convert/61f641ba421658f8bcb574751954b9d4.png)
如果两次更新之间加`int x = 1 / 0`;

则会报错，且事务执行失败，两条语句都不会执行成功
![image-20210327212324221](https://img-blog.csdnimg.cn/img_convert/0db32304bfc44277ce777d5b68aedccd.png)

![image-20230618214249123](https://bangwu.oss-cn-shanghai.aliyuncs.com/img/202306182142257.png)