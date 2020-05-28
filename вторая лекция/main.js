var washNextItem = function(itemsLeft) {
	itemsLeft--;
	console.log('В раковине осталось ' + itemsLeft + 'предметов');
	if (itemsLeft > 0) {
	washNextItem(itemsLeft);
}
};

washNextItem(12);


var washNextItem = function(itemsLeft) {
	while(itemsLeft--){
		console.log('В раковине осталось ' + itemsLeft + 'предметов');
	}
};

washNextItem(18);


// var printNames = function (names) {
// 	var index = 0;
// 	console.log('Элемент ' + index + ': ' + names[index]);
// 	index = index + 1;
// 	console.log('Элемент ' + index + ': ' + names[index]);
// 	index = ++index;
// 	console.log('Элемент ' + index + ': ' + names[index]);
// 	index++;
// 	console.log('Элемент ' + index + ': ' + names[index]);
// }

// printNames(['John' , 'Male' , 'Nastya' , 'Noone' , 'Do']);


var printNames = function(names) {
	for (var i = 0; i < names.length; i++){
		console.log('Элемент ' + i + ': ' + names[i] )
	}
}
printNames(['John' , 'Male' , 'Nastya' , 'Noone' , 'Do']);


var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var gradient = ctx.createRadialGradient(150, 72, 0, 150, 72, 72)
gradient.addColorStop(0, 'green');
gradient.addColorStop(1, 'rgba(0, 255, 0, 0');

ctx.fillStyle = gradient;
ctx.fillRect(0, 0, 300, 150);










