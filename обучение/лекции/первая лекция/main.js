var time = 5;
var speedOfFirstTiger = 14;
var speedOfSecondTiger = 20;
var ditanceOfFirstTiger = speedOfFirstTiger * time;
var ditanceOfSecondTiger = speedOfSecondTiger * time;
var totalDictance = ditanceOfFirstTiger + ditanceOfSecondTiger;

console.log(totalDictance);


var time = 3;
var speedOfFirstTiger = 12;
var speedOfSecondTiger = 28;

var calculateDistance = function() {
	var ditanceOfFirstTiger = speedOfFirstTiger * time;
	var ditanceOfSecondTiger = speedOfSecondTiger * time;
	var totalDictance = ditanceOfFirstTiger + ditanceOfSecondTiger;

 	console.log(totalDictance);
}

calculateDistance()



var calculateDistance = function(time, speedOfFirstTiger, speedOfSecondTiger) {
	var ditanceOfFirstTiger = speedOfFirstTiger * time;
	var ditanceOfSecondTiger = speedOfSecondTiger * time;
	var totalDictance = ditanceOfFirstTiger + ditanceOfSecondTiger;

 	return totalDictance;
}

console.info(calculateDistance(5, 14, 20));




var calculateDistance = function(time, speedOfFirstTiger, speedOfSecondTiger) {
	var ditanceOfFirstTiger = speedOfFirstTiger * time;
	var ditanceOfSecondTiger = speedOfSecondTiger * time;
	var totalDictance = ditanceOfFirstTiger + ditanceOfSecondTiger;

 	return totalDictance;
}

var firstDistance = calculateDistance(3, 14, 20);
var secondDistance = calculateDistance(7, 12, 10);

console.log('Расстояние равно: ' + firstDistance + 'км');
console.log('Расстояние равно: ' + secondDistance + 'км');


var calculateDistance = function(time, speedOfFirstTiger, speedOfSecondTiger) {
	var ditanceOfFirstTiger = speedOfFirstTiger * time;
	var ditanceOfSecondTiger = speedOfSecondTiger * time;
	var totalDictance = ditanceOfFirstTiger + ditanceOfSecondTiger;

 	return totalDictance;
}

var measureUnit = 'км';
console.log('Расстояние равно: ' + calculateDistance(3, 14, 20) + measureUnit);
console.log('Расстояние равно: ' + calculateDistance(7, 12, 10) + measureUnit);









