#### 检索单个列

`` SELECT id FROM `user`; ``

#### 检索多个列

`` SELECT id, name FROM `user`; ``

#### 检索所有列

`` SELECT * FROM `user`; ``

#### 检索唯一的行

`` SELECT DISTINCT age FROM `user`; ``

#### 限制结果

`` SELECT age FROM `user` LIMIT 1; ``
`` SELECT age FROM `user` LIMIT 1 OFFSET 1; ``

#### 排序数据

`` SELECT name FROM `user` ORDER BY `id` ``

#### 空值检查

`` SELECT name FROM `user` WHERE age IS NULL ``

#### 通配符(% 0 或多个字符 \_ 一个字符)

`` SELECT * FROM `user` WHERE `name` LIKE '%n%' ``
