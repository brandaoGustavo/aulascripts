<?php 
 	include "conectar.php"; 
 ?> 
 <?php
 	$dados_form = file_get_contents("php://input");
    $obj = json_decode($dados_form);

 	$nome = $obj->nome; 
 	$descricao = $obj->descricao; 
    $preco = $obj->preco; 
  
     $instrucao = 'INSERT into "Cardapio"(nome,descricao,preco) values('."'".$nome."','".$descricao."',".$preco.")"; 
 	pg_query($conect,$instrucao) or die(pg_last_error($conect)); 
    ?> <?php 
 	pg_close($conect); 
 ?>