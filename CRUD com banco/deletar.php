<?php 
 	include "conectar.php"; 
 ?> 
 <?php 
 	$sql = 'DELETE from "Cardapio" where id='.$_POST[id];   
	$sql_query = pg_query($conect,$sql) or die(pg_last_error($conect)); 
 	pg_close($conect);
 ?>
