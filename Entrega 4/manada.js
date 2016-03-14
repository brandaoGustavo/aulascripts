function Animal(){
	this.som = "";
}

Animal.prototype = {
	fazerBarulho: function(){
		return this.som;
	}
};

function Cachorro() {
	Animal.call(this);
	this.som = "Au";
}

Cachorro.prototype = new Animal();

function Gato(){
	Animal.call(this);
	this.som = "Miau";
}

Gato.prototype = new Animal();;

function Manada(){
	this.list = [];
}

Manada.prototype = {
		adicionar: function(animal){
			this.list.push(animal);
		}
}

function ManadaVirgula(){
	Manada.call(this);
}

var VirgulaPrototype = new Manada();

VirgulaPrototype.barulhos = function(){
				var som = "";
				for (i= 0; i < this.list.length; i++) {
					if(i == this.list.length-1)
						som+=this.list[i].fazerBarulho();
					else
						som+=this.list[i].fazerBarulho()+",";
				};
				return som;
			};

ManadaVirgula.prototype = VirgulaPrototype;


function ManadaSustenido(){
	Manada.call(this);
}

var SustenidoPrototype = new Manada();

SustenidoPrototype.barulhos = function(){
				var som = "";
				for (i= 0; i < this.list.length; i++) {
					if(i == this.list.length-1)
						som+=this.list[i].fazerBarulho()+"# "+this.list[i].fazerBarulho();
					else
						som+=this.list[i].fazerBarulho()+"# "+this.list[i].fazerBarulho()+"# ";
				};
				return som;
		};

ManadaSustenido.prototype = SustenidoPrototype;


		var manadaVirgula = new ManadaVirgula();
		var manadaSustenidaDupla = new ManadaSustenido();
		var animais = [new Cachorro(), new Gato()];
		animais.forEach(function (animal) {
		manadaVirgula.adicionar(animal);
		manadaSustenidaDupla.adicionar(animal);
		});
		// Print Esperado: Au, Miau
		console.log(manadaVirgula.barulhos());
		// Print Esperado: Au# Au# Miau# Miau
		console.log(manadaSustenidaDupla.barulhos());



