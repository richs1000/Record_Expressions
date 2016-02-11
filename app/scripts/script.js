

var base={
	
	randNumb:"",
	randName:"",
	randBool:"",
	
	
	
	
}

base.getRandomName = function(){
var names=[["Dorsey"],["Trojan"],["Hortense"],["Chavous"],["Randa"],["Kemmer"],["Nelle"],["Vives"],["Kristie"],["Spang"],["Rickie"],["Whitehouse"],["Jay"],["Ells"],["Fredda"],["Nardi"],["Deandrea"],["Rosado"],["Eartha"],["Fusco"],["Michele"],["Beyer"],["Dacia"],["Mclennon"],["Lenard"],["Palumbo"],["Homer"],["Kron"],["Kris"],["Saragosa"],["Nia"],["Tompkins"],["Amos"],["Hargreaves"],["Lawana"],["Mangum"],["Danna"],["Raygoza"],["Mei"],["Junious"],["Megan"],["Membreno"],["Ignacio"],["Anguiano"],["Maureen"],["Beaudet"],["Livia"],["Heaney"],["Isela"],["Mikels"],["Magda"],["Maxton"],["Enrique"],["Kinley"],["Latina"],["Eifert"],["Felecia"],["Rodrique"],["Kazuko"],["Crean"]];
var randint=this.getRandomInt(0,names.length);

return names[randint];
}

base.getRandomNumb = function(){
	return this.getRandomInt(0,9);
}

base.getRandomBool = function(){

var bool=[["true"],["false"],["false"]];
var randint=this.getRandomInt(0,bool.length-1);
return bool[randint];
}


/*
*Generates a random integer
*/
 base.getRandomInt = function(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

 base.clear = function(){
	
	this.randNumb="";
	this.randName="";
	this.randBool="";
	 
	 
 }







base.generateListAnswers = function(){
	

	this.randNumb=this.getRandomNumb();
	this.randName=this.getRandomName();
	this.randBool=this.getRandomBool();
	


}

base.generateResult= function(){
	this.clear();
	this.generateListAnswers();
	

	
}

