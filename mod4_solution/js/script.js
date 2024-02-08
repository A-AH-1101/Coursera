var names = ["John","Reza", "Joe", "Alireza", "Jason"];
function findName (names) {
	for (var i = 0; i < names.length; i++) {
		if (names[i].charAt(0).toLowerCase() === 'j') {
			console.log("Goobye " + names[i]);
		} else {
			console.log("Hello " + names[i]);
		}
	}
};
findName(names);