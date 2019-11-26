var userOption = undefined; 
function playWith(option){
	// first, we deselect the previous selected element (if exist)
	if (userOption != undefined)
	{
	   userSelectionElement = document.getElementById(userOption);
	   // we remove the purple border (if exist)
	   userSelectionElement.style.border = "5px #F8F8F8  solid";
	}	 		
	// then, we select the user option and we add 
	// a purple border
	userOption = option;
	userSelectionElement = document.getElementById(option);
	userSelectionElement.style.border = "5px #990066 solid";
 }
 function playGame(){
	var computerOption = Math.random();
 if (computerOption <0.50){
	 computerOption = "Rock";
 }else if(computerOption <=0.75){
	 computerOption = "Paper";
 }else{
	 computerOption = "Scissor";
 }
 
 resultMessage = compare(userOption, computerOption);
 
 document.getElementById("result").innerHTML = 
 "<p>Your weapon is: " + userOption + " - Computer weapon:" 
 + computerOption + "</p> <p>" + resultMessage + "</p>";
 
}
function compare(userSelection, computerSelection)
		{
			if(userSelection == undefined)
			{
				return "Please, select a weapon before you fight!"
			}	

		    if (userSelection == computerSelection)
		    {
			   return "It is a draw!" ;
			  
			  
		    }
		    
		    if (userSelection == "Rock")
		    {
		        if (computerSelection == "Scissor")
		        {
					 return "You win.";
		        } else {
		            return "You lose. Try again.";
		        }
		        
		    } else if (userSelection == "Paper") {
		        
		        if (computerSelection == "Rock")
		        {
		             return "You win." ;
		        } else if("scissor") {
		            return "You lose. Try again.";
		        }
		        
		    } else if (userSelection == "Scissor") {
		      
		        if (computerSelection == "Rock")
		        {
		            return "You lose. Try again.";
		        }else{
		            return "You win.";
		        }
		    }
		}  