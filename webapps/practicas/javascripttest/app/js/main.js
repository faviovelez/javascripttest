
// Ejercicio 1 

var array1 = [1,2,3,4,5,6];

function sumArray(newArray) {
		function sumAll(a,b) {
				return a + b;
		};
		var result = newArray.reduce(sumAll,0);
		console.log(result);
}

sumArray(array1);


// Ejercicio 2

var prompted = [];

do {
	var numbers = prompt("Ingresa un número");
	prompted.push(Number(numbers));
} while (numbers !="fin")
prompted.splice(prompted.length-1);
console.log(sumArray(prompted));

// Ejercicio 3

function copyArray(arrayName) {
	var copiedArray = (JSON.parse(JSON.stringify(arrayName)));
	console.log(copiedArray);
}

copyArray(array1);

// Ejercicio 4

function squareHole(side) {
	var stars = "";
	var spaces = "*";	
	for (var i = 0; i<=side; i++) {
		stars += "*";
	}
	for (var j = 0; j<=side-2; j++) {
		spaces += " ";
	}
	spaces += "*";
	console.log(stars);
	for (var k = 0; k<=side-3; k++) {		
		console.log(spaces);
	}
	console.log(stars);
}

squareHole(Number(prompt("Ingresa un número para el cuadrado")));

// Ejercicio 5

