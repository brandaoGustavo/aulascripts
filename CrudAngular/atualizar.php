<?php
	include "conectar.php";
?>
<?php
    $dados_form = file_get_contents("php://input");
    $obj = json_decode($dados_form);
	$nome = $obj->nome;
	$desc = $obj->desc;
    $preco = $obj->preco;
    $id = $obj->id;
    
    $instrucao = 'UPDATE "Cardapio" SET  nome='."'".$nome."', desc='".$desc."', preco='".$preco."' WHERE idpizza=".$id;
	pg_query($conect,$instrucao) or die(pg_last_error($conect));
	pg_close($conect);
?>