
	
/*
 * Stores the questions, answers and the answer history
 */

function QuestionBankModel(_simModel, _numerator, _denominator,_quest,_lengthQ1,_lengthInner,_quest1,_quest2,_maxx,_answ) {
	
	
	
	
	// save a link to the model
	this.simModel = _simModel;
	
	this.quest=[];
	this.lengthQ1=_lengthQ1;
	this.lengthInner=_lengthInner;
	this.quest1=_quest1;
	this.quest2=_quest2;
	this.maxx=_maxx;
	this.answ=_answ;
	
	
	
	
	// the number of questions the student needs to answer right...
	this.numerator = _numerator;
	// out of this many of the most recent questions asked
	this.denominator = _denominator;
	// we need to keep track of the last <x> answers we've gotten
	// so we can test for mastery. we use an array as a queue that
	// stores as many answers as we're willing to consider
	this.resetAnswerHistory();
	
}
		

	
	


	QuestionBankModel.prototype.findValue = function(valu){
		
		var m=[["0"],["1"],["2"],["3"],["4"],["5"],["6"],["7"],["8"],["9"]];
		for(var i=0;i<m.length;i++){
			
			if(valu==m[i]){
				return true;
			}
		}
		
		return false;
		
	}
	
	
	
	
	
	
	
	
	
	QuestionBankModel.prototype.getRandomValue = function(){
		
		var temp_= this.getListValues();
		return temp_[this.getRandomInt(0,temp_.length)];
		
	}
	

	QuestionBankModel.prototype.getRandomValues = function(maxLength){
		
		var i=0;
		var temp_="(";
		
		while(i<maxLength){
			
			temp_=temp_+ this.getRandomValue();
				if(i+1!=this.maxx){
					temp_=temp_+",";
				}
			i=i+1;
		}
		
		return temp_+")";
	}
	
	
	
	QuestionBankModel.prototype.getListValues = function(){
		
		return [["0"],["1"],["2"],["3"],["4"],["5"],["6"],["7"],["8"],["9"],["true"],["false"]];
		
	}

	
	
	
 QuestionBankModel.prototype.getSubList = function(str,numero) {

    var res=[];
    var j=1;
    var field=" ";
    for(var i=1;i<str.length;i++){
     
       if(str.charAt(i)==',' || str.charAt(i)==')'){
             res[j]=field;
             field="";         
             j=j+1; 
       }else{
            field= field+str.charAt(i);
     }
   }
   return res[numero];
}	









QuestionBankModel.prototype.resetAnswerHistory = function() {
	// start with an empty array
	this.answerHistory = [];
	// push a bunch of null objects into the history to represent questions
	// that haven't been asked yet
	for (var i = 0; i < this.denominator; i++) {
		this.answerHistory.push(null);
	}
}


/*
 * Add a new item to the back of the answer history, pull an item off
 * the front. Since the queue starts out filled with nulls, it is always
 * the same size.
 */
QuestionBankModel.prototype.updateAnswerHistory = function(newAnswer) {
	// add a new item to the back of the answer history
	this.answerHistory.push(newAnswer);
	// pull the oldest item off the front
	this.answerHistory.shift();
}


/*
 * Look at the answer history to see if we have met the criterion for
 * demonstrating mastery
 */
QuestionBankModel.prototype.masteryAchieved = function() {
	// count up the number of right answers
	var count = 0;
	// loop through the answer history
	for (var i = 0; i < this.answerHistory.length; i++) {
		// if we got the question right
		if (this.answerHistory[i]) {
			// increase our count
			count += 1;
		}
	}
	// compare the correct count to our goal
	return count >= this.numerator;
}


/*
 * Compare the student's answer to the correct answer(s).
 */
QuestionBankModel.prototype.checkAnswer = function (studentAnswer) {
	
	studentAnswer=studentAnswer.replace(/\s/g, '');
	/*
	studentAnswer=studentAnswer.replace(/,/g, '');
	studentAnswer=studentAnswer.replace(/\[/g, '');
	studentAnswer=studentAnswer.replace(/]/g, '');*/
	for (var i = 0; i < this.answers.length; i++) {
		if (this.answers[i].toString().toLowerCase() == studentAnswer.toString().toLowerCase()) {
		
			return true;
		}
	}
	return false;
}


/*
 * choose a random template and useit to construct a new question string
 */
 
QuestionBankModel.prototype.chooseQuestion = function() {
	main.init();
	
	var a=main.getArrayFields();
	var fields=main.Field();
	var randomField=main.randomField(fields);
	
	var qu="val ans= #"+randomField+" {"+fields[0]+"= "+a[0]+", "+fields[1]+"= "+a[1]+", "+fields[2]+"= "+a[2]+" }";
	
	this.answ=main.getField(randomField,a);

	this.question ="Given: ~~ "+qu+"~~What is the ans bound after the following ML code is executed?~~";
	return this.question;

	}

QuestionBankModel.prototype.getRandomInt = function(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}



/*
 * Set the answer(s) to the question indicated by questionIndex.
 * Right now I'm using a really clunky approach. I'm sure there's
 * a better way.
 */
QuestionBankModel.prototype.setAnswers = function() {
	// Reset answers array
	this.answers = [];
	//push the answer in
	this.answers.push(this.answ);
	
}
