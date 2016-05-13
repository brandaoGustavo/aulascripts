<?php
	include "conectar.php";
?>
<?php
    $dados_form = file_get_contents("php://input");
    $obj = json_decode($dados_form);
	$nome = $obj->nome;
	$descricao = $obj->descricao;
    $preco = $obj->preco;
    $id = $obj->id;
    
    $instrucao = 'UPDATE "Cardapio" SET  nome='."'".$nome."', descricao='".$descricao."', preco='".$preco."' WHERE id=".$id;
	pg_query($conect,$instrucao) or die(pg_last_error($conect));
	pg_close($conect);
?>