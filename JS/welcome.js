let amountInput = document.getElementById('amount');
let converted = document.getElementById('converted');
let convertBtn = document.getElementById('convert');
let inr = document.getElementById('inr');
let usd = document.getElementById('usd');
let currency = "";
const data = fetch("https://api.exchangerate-api.com/v4/latest/USD");

convertBtn.addEventListener('click', () => {
  console.log(amountInput.value);
});


