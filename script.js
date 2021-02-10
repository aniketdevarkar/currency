let url = "https://api.exchangeratesapi.io/latest?base=";


// buttoon to get all the currencies
let button = document.getElementById('getCurrency');
button.addEventListener('click',()=>{
    let val = getValue();
    let amount = getAmount();
    getdata(val).then((currency)=>{
      document.getElementById('i').innerText= ((+currency.rates.INR)*amount).toFixed(2) + " Rupees";
      document.getElementById('us').innerText= ((+currency.rates.USD)*amount).toFixed(2) + " $";
      document.getElementById('cad').innerText= ((+currency.rates.CAD)*amount).toFixed(2) + " cad";
      document.getElementById('ring').innerText= ((+currency.rates.RON)*amount).toFixed(2) + " Ringitt";
      document.getElementById('aud').innerText= ((+currency.rates.AUD)*amount).toFixed(2) + " Aud";
      console.log(currency);
    });
})
//to get amount from text box
function getAmount(){
    let amount = document.getElementById('textInput').value;
    console.log(amount);
    return amount;
}
//to get currency value from options
function getValue(){
    let selectedCurrency = document.getElementById('currencies').value;
    console.log(selectedCurrency);
    return selectedCurrency;
}

//to fetch data from exchangerates api
async function getdata(currency){
    let response = await fetch(url+currency);
    return await response.json();
}  

