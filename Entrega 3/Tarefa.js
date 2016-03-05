function GerarListener() {
	
	var obj = {};
	var lista = [];
	var i;
	var count = 0;
	
	obj.addListener = function(listener){
		lista.push(listener);
	};
	
	obj.executar = function (){
		count++;
		for(i=0;i<lista.length;i++){
			var retorno = lista[i];
			retorno(count);
		}
		
	};
	
	return obj;
	}
var contadorObserver = GerarListener();
var listener = function(count){
	console.log('Count: '+count);
};
contadorObserver.addListener(listener);

contadorObserver.executar();
contadorObserver.executar();

var contadorObserver2 = GerarListener();
contadorObserver2.addListener(listener);

contadorObserver2.executar();
contadorObserver2.executar();

