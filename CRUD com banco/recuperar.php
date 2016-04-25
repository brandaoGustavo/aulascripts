<?php 
 	include "conectar.php"; 
 ?> 
 <?php 
     $instrucao = 'select * from "Cardapio"'; 
 	$resu = pg_query($conect,$instrucao) or die(pg_last_error($conect)); 
 	$obj = array(); 
     if($resu){ 
 		while($row = pg_fetch_array($resu) ){ 
 			array_push($obj, array( 
 				"nome"=>$row["nome"], 
 		        "descrição"=>$row["descrição"], 
 		        "id"=>$row["id_pizza"])); 
 		} 
 	} 
 	pg_close($conect);   
 	echo json_encode($obj); 
18 ?> 

