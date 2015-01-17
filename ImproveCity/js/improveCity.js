/*********************************************************
*	As nossas classes e os seus construtores
*	
*	
*	NA 17/01/2015
**********************************************************/

/*
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
	this.owner = {};
	this.workgroup = {};
}

// Este é o que devemos usar para a criação de um novo Issue
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

function Issue(issue){
	this.owner = issue.owner;
	this.title = issue.title;
	this.description = issue.description;
	this.type = issue.type;
	this.category = issue.category;
	this.creationDate = issue.creationDate;
	this.status = issue.status;
	this.likes = issue.likes;
	this.dislikes = issue.dislikes;
	this.workgroup = issue.workgroup;
}

/*
*	WorkGroup
*/
function WorkGroup(){
	this.duration = null;
	this.executionDate = null;
	this.possibleDates = [];
	this.volunteers = [];
	this.toolsMaterials = [];
}

/*
*	ToolMaterial
*/
function ToolMaterial(){
	this.picture = null;
	this.description = null;
	this.amount = null;
	this.measureUnit = null;
}

/*
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

/*
*	Volunteer
*/
function Volunteer(){
	this.user = {};
	this.toolsMaterials = [];
	this.possibleDates = [];
}