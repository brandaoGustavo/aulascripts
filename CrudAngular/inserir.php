<?php 
 	include "conectar.php"; 
 ?> 
 <?php
 	$nome = $_POST["nome"]; 
 	$descricao = $_POST["descricao"]; 
     $preco = $_POST["preco"]; 
  
     $instrucao = 'INSERT into "Cardapio"(nome,descricao,preco) values('."'".$nome."','".$descricao."',".$preco.")"; 
 	pg_query($conect,$instrucao) or die(pg_last_error($conect)); 
    ?> <?php 
 	pg_close($conect); 
 ?>