BEGIN TRANSACTION;
CREATE TABLE `users` (
	`id`	INTEGER PRIMARY KEY AUTOINCREMENT,
	`username`	TEXT,
	`alamat`	TEXT
);
INSERT INTO `users` VALUES (1,'zulfikra','gorontalo');
COMMIT;
