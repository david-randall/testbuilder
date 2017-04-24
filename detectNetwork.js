var detectNetwork = function(cardNumber) {
  // Variable to hold type of card
  var cardType = "";
  // Helper function created to return the number of digits required to determine card type, converted from a string into a number
  var stringToNumber = function (string, numberOfDigits) {
    var requestedDigits = string.substring(0, numberOfDigits);
  	return parseInt(requestedDigits, 10);
  }
  // If the string is empty, let them know they didn't enter a number
  if (cardNumber === "") {
  	return "You didn't enter a card number";
  }
  // Diner;s Club if statement	
  else if (stringToNumber(cardNumber, 2) === 38 || (stringToNumber(cardNumber, 2) === 39) && cardNumber.length === 14) {
    cardType = "Diner's Club";
  }
  //  American Express if statement
  else if (stringToNumber(cardNumber, 2) === 34 || (stringToNumber(cardNumber, 2) === 37) && cardNumber.length === 15) {
    cardType = "American Express";
  }  
  //  Visa if statement
  else if (stringToNumber(cardNumber, 1) === 4 && (cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19)) {
    cardType = "Visa";
  }   
  //  MasterCard if statement
  else if (stringToNumber(cardNumber, 2) === 34 || (stringToNumber(cardNumber, 2) === 37) && cardNumber.length === 15) {
    cardType = "MasterCard";
  }  
  //  China UnionPay if statement
  else if (stringToNumber(cardNumber, 2) === 62 && (cardNumber.length >= 16 && cardNumber.length <= 19)) {
    cardType = "China UnionPay";
  }  
  //  Switch/Maestro if statement

  // Else statement if card number doesn't match any
  else { 
    cardType = "Your card doesn't match known cards";
  }
  // Returns the variable assigned to the type of card detected
  return cardType;
};



