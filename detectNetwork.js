var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
  // create variable to turn the given string into a number
  var cardType = "";
  var firstTwoNumbers = cardNumber.substring(0, 2);
  	if (cardNumber === "") {
  	  return "You didn't enter a card number";
  	}
  // Diner;s Club if statement	
  	else if ((parseInt(firstTwoNumbers, 10) === 38 || parseInt(firstTwoNumbers, 10) === 39) && cardNumber.length === 14) {
  	  cardType = "Diner's Club";
  	}
  	
  //  American Express if statement
    else if ((parseInt(firstTwoNumbers, 10) === 34 || parseInt(firstTwoNumbers, 10) === 37) && cardNumber.length === 15) {
      cardType = "American Express";
    }  
  //  Visa if statement

  //  MasterCard if statement

  //  China UnionPay if statement

  //  Switch/Maestro if statement

  // Else statement if card number doesn't match any

    } else { 
  	  cardType = "Your card doesn't match known cards";
  	}
};




