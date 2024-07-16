
const rates = {}

const elementUSD = document.querySelector('[data-value="USD"]');
const elementEUR = document.querySelector('[data-value="EUR"]');
const elementGBP = document.querySelector('[data-value="GBP"]');

getResponse();

async function getResponse() {

    // API
    let response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
    let content = await response.json()

    // Rates
    rates.USD = content.Valute.USD
    rates.EUR = content.Valute.EUR
    rates.GBP = content.Valute.GBP

    elementUSD.innerHTML = rates.USD.Value.toFixed(2)
    elementEUR.innerHTML = rates.EUR.Value.toFixed(2)
    elementGBP.innerHTML = rates.GBP.Value.toFixed(2)

    // Rates changes tracker
    if (rates.USD.Value > rates.USD.Previous) {
        elementUSD.classList.add('top')
    } else {
        elementUSD.classList.add('bottom')
    }

    if (rates.EUR.Value > rates.EUR.Previous) {
        elementEUR.classList.add('top')
    } else {
        elementEUR.classList.add('bottom')
    }

    if (rates.GBP.Value > rates.GBP.Previous) {
        elementGBP.classList.add('top')
    } else {
        elementGBP.classList.add('bottom')
    }
}