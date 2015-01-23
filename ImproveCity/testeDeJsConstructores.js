var addPossibleDate = function(date){
	this.possibleDates.push(date);
};

var addVolunteer = function(volunteer){
	this.volunteers.push(volunteer);
};

var addToolsMaterials = function(toolMaterial){
	this.toolsMaterials.push(toolMaterial);
};

function WorkGroup(){
	this.duration = null;
	this.executionDate = null;
	this.possibleDates = [];
	this.volunteers = [];
	this.toolsMaterials = [];
	this.addPossibleDate = addPossibleDate;
	this.addVolunteer = addVolunteer;
	this.addToolsMaterials = addToolsMaterials;
}


var Animal = {
  	type: "Invertebrates", // Default value of properties
  	displayType : function(){  // Method which will display type of Animal
    	console.log(this.type);
  }
};

// Create new animal type called animal1 
var animal1 = Object.create(Animal);
animal1.displayType(); // Output:Invertebrates

// Create new animal type called Fishes
var fish = Object.create(Animal);
fish.type = "Fishes";
fish.displayType(); // Output:Fishes


var Person = function(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}
 
Person.prototype = {
  toString: function() { return this.firstName + ' ' + this.lastName; }
}

var s = new Person()
s.firstName = "tone";
s.toString();