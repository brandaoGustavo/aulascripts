angular.module("pizzaria").factory("manipulaBanco", function ($http) {
	var _getLista = function () {
		return $http.get("pegar.php");
	};

	var _savePizza = function (pizza) {
		return $http.post("inserir.php", pizza);
	};

	return {
		getLista: _getLista,
		savePizza: _savePizza
	};
});