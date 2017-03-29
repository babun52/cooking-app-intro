var convertToLiters = function(gallons) {
  return gallons / 0.26417
}

var gallons = parseInt(prompt("Enter number in gallons:"));

var result = convertToLiters(gallons).toFixed(4);

var outputText = result + "L"

alert(outputText);
