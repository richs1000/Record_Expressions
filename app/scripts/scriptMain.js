
var main={}

main.init = function(){
	base.generateResult();
}



main.Field = function(){

return [["field_one"],["field_two"],["field_three"]];


}

main.randomField = function(array){

var nn=base.getRandomInt(0,array.length);
return array[nn];


}

main.getField = function(field,array){

if(field=="field_one"){

return array[0];

}
else if(field=="field_two"){
return array[1];

}
else if(field=="field_three"){
return array[2];
}

}



main.generate = function(){

var numb=base.getRandomNumb();
var name=base.getRandomName();
var bool=base.getRandomBool();;

var arr=[[numb],[name],[bool]];
var leng=arr.length;
var finalArr=[];
var nn=base.getRandomInt(0,leng);

return arr[nn];

}


main.getArrayFields = function(){

var numb=this.generate();
var name=this.generate();
var bool=this.generate();

var finalArr=[[numb],[name],[bool]];

return finalArr;

}