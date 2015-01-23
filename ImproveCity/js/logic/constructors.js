/*********************************************************
*	Object Constructors
*	
*	
*	NA 17/01/2015
**********************************************************/

/*********************************************************
*	Issue
*/


// This is the one to use most commonly when creating a new issue
function Issue(owner, title, description, type, category){
	this.owner = owner;
	this.title = title;
	this.description = description;
	this.type = type;
	this.category = category;
	this.creationDate = Date.now();
	this.status = 'Initial';
	this.likes = 0;
	this.dislikes = 0;
	this.workgroup = null;
}

Issue.prototype.nextStatus = function(){
	var possibleStatus = ['I', 'A', 'O', 'F'];

	this.status = possibleStatus[possibleStatus.indexOf(this.status) + 1];
};

Issue.prototype.incrementLikes = function(){
	this.likes += 1;
};

Issue.prototype.incrementDislikes = function(){
	this.dislikes += 1;
};


/**********************************************************
*	WorkGroup
*/

// Methods to use
function WorkGroup(){
	this.duration = null;
	this.executionDate = null;
	this.possibleDates = [];
	this.volunteers = [];
	this.toolsMaterials = [];
}

function WorkGroup(duration, executionDate, possibleDates, volunteers, toolsMaterials){
	this.duration = duration;
	this.executionDate = executionDate;
	this.possibleDates = possibleDates;
	this.volunteers = volunteers;
	this.toolsMaterials = toolsMaterials;
}

// WorkGroup.prototype.addPossibleDate = function(date){
// 	this.possibleDates.push(date);
// };

// WorkGroup.prototype.addVolunteer = function(volunteer){
// 	this.volunteers.push(volunteer);
// };

// WorkGroup.prototype.addToolsMaterials = function(toolMaterial){
// 	this.toolsMaterials.push(toolMaterial);
//};

/*********************************************************
*	ToolMaterial
*/
function ToolMaterial(){
	this.picture = null;
	this.description = null;
	this.amount = null;
	this.measureUnit = null;
}

/*********************************************************
*	User
*/
function User(){
	this.username = null;
	this.password = null;
	this.picture = null;
	this.email = null;
	this.contact = null;
	this.adress = null;
	this.points = null;
	this.type = null;
	this.status = null;
}

/*********************************************************
*	Volunteer
*/
function Volunteer(){
	this.user = {};
	this.toolsMaterials = [];
	this.possibleDates = [];
}

function Volunteer(user, toolsMaterials, possibleDates){
	this.user = user;
	this.toolsMaterials = toolsMaterials;
	this.possibleDates = possibleDates;
}

// Volunteer.prototype.addPossibleDate = function(date){
// 	this.possibleDates.push(date);
// };