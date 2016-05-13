<?php 
 	include "conectar.php"; 
 ?> 
 <?php 
 	$dados_form = file_get_contents("php://input");
    $obj = json_decode($dados_form);

 	$id = $obj->id;
 	$sql = 'DELETE from "Cardapio" where id='.$id;   
	$sql_query = pg_query($conect,$sql) or die(pg_last_error($conect)); 
 	pg_close($conect);
 ?>
