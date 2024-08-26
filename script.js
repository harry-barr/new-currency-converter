import FetchWrapper from "./fetch-wrapper.js";
const API = new FetchWrapper(
  "https://v6.exchangerate-api.com/v6/9e913ccb359d52fd02b4f741"
);
const base = document.querySelector("#currency-from-select");
const target = document.querySelector("#currency-to-select");
const exchangeRate = document.querySelector(".exchange-rate-result");
const convertBtn = document.querySelector(".convert-btn");
const amount = document.querySelector(".convert-from-input");
const result = document.querySelector(".result");
const getConversionRates = () => {
  result.textContent = "";
  exchangeRate.textContent = "";
  API.get(`/latest/${base.value}`).then((data) => {
    exchangeRate.textContent = data.conversion_rates[target.value].toFixed(2);
    let exchangeResult =
      amount.value * data.conversion_rates[target.value].toFixed(2);
    result.textContent = exchangeResult.toFixed(2);
  });
};
convertBtn.addEventListener("click", () => {
  getConversionRates();
});
