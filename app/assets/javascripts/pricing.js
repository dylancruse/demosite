/* global $ */
$('h3, div').each(function() {
  this.style.color = 'white';
});

var PHONE_PRICE = 99.99;
var ACCESSORY_PRICE = 9.99;
var SPENDING_THRESHOLD = 200;
var TAX_RATE = 0.07;

var amount = 0;
var bank_balance = 303.91;

function calculateTax(amount) {
  return amount * TAX_RATE;
}

function formatAmount(amount) {
  return "$" + amount.toFixed(2);
}

// keep buying phones while you have money
while (amount < bank_balance) {
  amount = amount + PHONE_PRICE;
  
  // can we afford the accessory?
  if (amount < SPENDING_THRESHOLD) {
    amount = amount + ACCESSORY_PRICE;
  }
}

// include tax
amount = amount + calculateTax(amount);

function displayAmount() {                    // displays amount
  var display = document.getElementById("display"); 
  display.innerHTML = <p>That will be </p> + formatAmount(amount) + <p>.</p>;
}

displayAmount();

// can we actually afford it?
if (amount < bank_balance) {
  var success = document.getElementById("success");
  success.innerText = "Thank you for your purchase!";
}
  else {
    success.innerText = "You cannot afford this purchase. :(";
  }