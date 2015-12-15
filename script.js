var app= angular.module("gameApp", []);

app.controller("gameController", function($scope,$http){
	
	$scope.checkPlayerGuess = function(player) {
		var playerGuess = document.getElementById("playerguess" + player);
		$scope.listguess.push({
			"yourguess" : playerGuess.value,//מחרוזת עם פסיקים
			"result":"M,M,M,M" // here should go call to a function which checks the guess and return the letter MMMM
		});
	};
	
	$http.get("player1.json").success(function(res) {
		$scope.listguess = res; }).error(function(data, status , headers , config) {
			console.log("error" ,data, status , headers , config );
	});
	$http.get("player2.json").success(function(res) {
		$scope.listguesstwo = res; }).error(function(data, status , headers , config) {
			console.log("error" ,data, status , headers , config );
	});
});

