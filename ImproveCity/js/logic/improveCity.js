/*********************************************************
*	Object Constructors
*	
*	
*	NA 17/01/2015
**********************************************************/

/*********************************************************
*	Issue
*/

function Issue(){
	this.title = null;
	this.description = null;
	this.type = null;
	this.category = null;
	this.creationDate = null;
	this.status = null;
	this.likes = 0;
	this.dislikes = 0;
	this.owner = null;
	this.workgroup = null;
}


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
	this.workgroup = new WorkGroup();
}

function Issue(owner, title, description, type, category, creationDate, status, likes, dislikes, workgroup){
	this.owner = owner;
	this.title = title;
	this.description = description;
	this.type = type;
	this.category = category;
	this.creationDate = creationDate;
	this.status = status;
	this.likes = likes;
	this.dislikes = dislikes;
	this.workgroup = workgroup;
}


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

WorkGroup.prototype.addPossibleDate = function(date){
	this.possibleDates.push(date);
};

WorkGroup.prototype.addVolunteer = function(volunteer){
	this.volunteers.push(volunteer);
};

WorkGroup.prototype.addToolsMaterials = function(toolMaterial){
	this.toolsMaterials.push(toolMaterial);
};

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