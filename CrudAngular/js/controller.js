angular.module("pizzaria", []);
angular.module("pizzaria").controller("pizzaria", function ($scope) {
	$scope.app = "pizzaria";
	$scope.pizzas = [];
	$scope.adicionarPizza = function (pizza) {
		$scope.pizzas.push(angular.copy(pizza));
		delete $scope.pizza;
	};
	$scope.apagarPizzas = function (pizzas) {
		$scope.pizzas = pizzas.filter(function (pizza) {
			if (!pizza.selecionado) return pizza;
		});
	};
	$scope.isPizzaSelecionado = function (pizzas) {
		return pizzas.some(function (pizza) {
			return pizza.selecionado;
		});
	};
});