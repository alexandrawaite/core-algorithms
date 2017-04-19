export default function makeChange({price, amountGiven}) {
  var change = {
    "quarters": 0,
    "dimes": 0,
    "nickels": 0,
    "pennies": 0,
  };
  var difference = amountGiven - price;
  var quarterChange = difference/25;
  var dimeChange = difference/10;
  var nickelChange = difference/5;
  var pennyChange = difference/1;

    if (difference >= 25) {
        difference -= 25;
      change.quarters = Math.floor(quarterChange);
    }
      function dime() {}
      difference -= 10;
      change.dimes = Math.floor(dimeChange);
    } else if (difference >= 5) {
      function nickel() {
      difference -= 5;
      change.nickels = 1;
    }
    } else {

      difference -= 1;
      change.pennies = 1;
    }

  return change;
};
module.exports = makeChange
