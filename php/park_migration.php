<?php

require 'park_migration_config.php';
require 'db_connect.php';

$query = "DROP TABLE IF EXISTS national_parks";

$dbc->exec($query);

$query = 'CREATE TABLE national_parks (
	id INT UNSIGNED NOT NULL AUTO_INCREMENT,
	name VARCHAR(240) NOT NULL,
	location VARCHAR(240) NOT NULL,
	date_established DATE,
	area_in_acres DOUBLE,
	description TEXT,
	PRIMARY KEY (id) 
)';

$dbc->exec($query);