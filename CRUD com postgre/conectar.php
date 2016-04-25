<?php 
  
 	$conect = pg_connect("host=localhost dbname=db_pizzaria port=5432 user=postgres password=fatec123"); 
 	if(!$conect)die("<h1>Falha ao conectar no banco"); 
 ?> 
