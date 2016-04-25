var pizzas = [];
var count = 0;

function pizza(nome,desc,preco,id){
	this.nome = nome;
	this.desc = desc;
	this.preco = preco;
	this.id = id;
} 

function carregaTabela(){ 
	$("#tabela > tbody").html("");
   $.ajax({ 
         url : "pegar.php", 
         dataType : "json",
         success : function(data){ 
               
             for(var i=0; i < data.length; i++){ 
               $("#tabela > tbody").append("<tr id='p"+(data[i].id )+"'><td>"+data[i].nome +"</td><td>"+data[i].descricao+"</td><td>"+data[i].preco+"</td> <td><a onclick='deletar("+(data[i].id)+")'><span class='glyphicon glyphicon-trash'></span></a></td>");
             } 
             $('.deletar').on('click', function(){ 
               del($(this).attr('data-index')); 
             }); 
         } 
     }); 
} 


$(document).ready(function(){
	
		
		carregaTabela();
	
        $("#cadastro").submit(function(){
			var pizza_nome = document.getElementById("txtnome").value;
			var pizza_desc = document.getElementById("pizzadesc").value;
			var pizza_preco = document.getElementById("preco").value;
			
			var erro = true;
			if (pizza_nome.trim()==""){
				$("#txtnome").addClass("erro");
				$('.msgerronome').show();
				erro = false;
			}else{
				$("#txtnome").removeClass("erro");	
				$('.msgerronome').hide();				
			}
			
			if (pizza_desc.trim()==""){
				$("#pizzadesc").addClass("erro");
				$('.msgerrodesc').show();
				erro = false;
			}else{
				$("#pizzadesc").removeClass("erro");
				$('.msgerrodesc').hide();
			}
			
			if (pizza_preco.trim() == ""){
				$("#preco").addClass("erro");
				$('.msgerropreco').show();
				erro = false;
			}else{
				$("#preco").removeClass("erro");
				$('.msgerropreco').hide();
			}
			
			if (erro){
				pizzas.push(new pizza(pizza_nome,pizza_desc,pizza_preco,pizzas.length));
				//$("#tabela > tbody").append("<tr id = 'p"+(pizzas.length-1)+"'><td>"+pizza_nome+"</td> <td>"+pizza_desc+"</td> <td>"+"R$"+pizza_preco+"</td><td><a onclick='deletar("+(pizzas.length-1)+")'><span class='glyphicon glyphicon-trash'></span></a></td> </tr>");

				$.post( "inserir.php", {nome: pizza_nome, descricao: pizza_desc, preco: pizza_preco}) 
					.done(function( data ) { 
						alert( "Inserido com sucesso!"); 
						carregaTabela();
					}); 
					
				$("#cadastro").trigger('reset');

				
				return false
			}
			return false;
        });        
    });
	
function deletar(id){
	$.post( "deletar.php", { id:id }) 
        .done(function( data ) { 
           alert( "Deletado com sucesso!"); 
         });
	$("#p"+id).remove();
}

//function del(id){ 
// 	$.post( "deletaAnunciante.php", { id:id }) 
//        .done(function( data ) { 
//           alert( "Deletado com sucesso!"); 
//         }); 
// 	$("#a"+id).remove(); 
// } 
