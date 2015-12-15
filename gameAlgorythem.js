/**
 * @author OREN
 */
var players = [{
	username: "",
	target : []
}, {
	username: "",
	target : []
}],
    result = [{
    	bull: 0, hit: 0, guess :""
    	}];

/** VERIFICATION LEGALE TARGET NUMBER */

function savePlayerTarget(player) {
	players[player].username = document.getElementById("usernamePlayer" + player).value;
	players[player].target = document.getElementById("guessPlayer" + player).value;
	validMessage("target", players[player].target);
	document.getElementById("formPlayer" + player).style.display = "none";
}

/*
 * check that the array is valid and return boolean true and if faulse message
 */
function verify(arr) {
	var histogram = {},
	    arrItem,
	    duplicateExists = false;
	for (var i = 0; i < arr.length; i++) {
		arrItem = arr[i];
		if (histogram[arrItem]) {
			histogram[arrItem]++;
			duplicateExists = true;

		} else {
			histogram[arrItem] = 1;

		}
	}
	if (duplicateExists) {
		return histogram;
	}
	return true;
	validMessage();
}

function validMessage(str, arr) {
	console.log("Validating: " + str);
	var result = verify(arr);
	if (result !== true) {
		for (var num in result) {
			if (result[num] > 1) {
				alert("number: " + num + " is duplicated " + result[num] + " times");
			}
		}
	} else {
		console.log("OK.");
	}

}



/**  SUCCESS IN GUESS ALL NUMBER */

function checkWin(myPlayer, otherPlayer) {
	var guess = document.getElementById("playerGuess" + myPlayer).value;
	var target = players[otherPlayer].target;
	var B=0, H=0;
	var table = document.getElementById("result-table");
	validMessage("guess", guess);
	for (i=0;i<4;i++){
		for (j=0;j<4;j++){
			if(guess[i]===target[j]){
				if (i===j){
					B++;
				}else{
					H++;
				}
			}
		}
	}
	
	result[0].bull = B;
	result[0].hit = H;
	result[0].guess = guess;
	
	
	if (B===4){
		  alert("כל הכבוד ניצחת !הצלחת לפענח את המספר");
	}

	alert("תוצאת הסיבוב = מתוך סדרת המספרים שנשלחו לבדיקה - פגיעה בול :"+ B + ". פגיעה = "+ H +".");
	 
};



	                              





	                              

