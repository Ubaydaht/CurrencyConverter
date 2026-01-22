function convert() {
  let firstCurrency = document.getElementById("firstCurrency").value;
  let secondCurrency = document.getElementById("secondCurrency").value;
  let amount = document.getElementById("amount").value;
  let result = document.getElementById("result");
  if (amount =="") {
    result.innerText = "You have to enter amount first"
  } else{
    if (firstCurrency == "USD" && secondCurrency == "Naira") {
      result.innerText = amount * 1468;
    } else if (firstCurrency == "Naira" && secondCurrency == "USD") {
      result.innerText = amount / 1468;
    } else if (firstCurrency == "USD" && secondCurrency == "EURO") {
      result.innerText = amount * 0.8577;
    } else if (firstCurrency == "EURO" && secondCurrency == "USD") {
     result.innerText= amount / 0.8577;
    } else if (firstCurrency == "EURO" && secondCurrency == "Naira") {
      result.innerText = amount * 1660;
    } else if (firstCurrency == "Naira" && secondCurrency == "EURO") {
      result.innerText = amount / 1660;
    } else if (firstCurrency == "USD" && secondCurrency == "USD") {
      result.innerText = amount;
    } else if (firstCurrency == "Naira" && secondCurrency == "Naira") {
      result.innerText = amount;
    } else if (firstCurrency == "EURO" && secondCurrency == "EURO") {
      result.innerText = amount;
    }
    
  }
}

function clearFields() {
   document.getElementById("amount").value = "";
   document.getElementById("result").innerText = "";
}