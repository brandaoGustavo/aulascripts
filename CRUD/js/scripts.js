var pizzas = [];
var count = 0;

function pizza(nome,desc,preco,id){
	this.nome = nome;
	this.desc = desc;
	this.preco = preco;
	this.id = id;
}

$(document).ready(function(){
	
        $("#cadastro").submit(function(){
			var pizza_nome = document.getElementById("txtnome").value;
			var pizza_desc = document.getElementById("pizzadesc").value;
			var pizza_preco = document.getElementById("preco").value;
			
			var erro = true;
			if (pizza_nome.trim()==""){
				$("#txtnome").addClass("erro");
				erro = false;
			}
			
			if (pizza_desc.trim()==""){
				$("#pizzadesc").addClass("erro");
				erro = false;
			}
			
			if (pizza_preco.trim()== ""){
				$("#preco").addClass("erro");
				erro = false;
			}
			
			if (erro){
				pizzas.push(new pizza(pizza_nome,pizza_desc,pizza_preco,pizzas.lenght));
				$("#tabela > tbody").append("<tr id = 'p"+(pizzas.lenght-1)+"'><td>"+pizza_nome+"</td> <td>"+pizza_desc+"</td> <td>"+"R$"+pizza_preco+"</td><td><a onclick='deletar("+(pizzas.lenght-1)+")'><span class='glyphicon glyphicon-trash'></span></a></td> </tr>");
				//document.getElementById("#txtnome").val("");
				return false
			}
			return false;
        });        
    });
	
function deletar(id){
	for (var i = 0;i<pizzas.lenght;i++){
		if (i == id){
			pizzas[i].remove;
			break;
		}
	}
	$("#p"+id).remove();
}