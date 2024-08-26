import FetchWrapper from "./fetch-wrapper.js";
const API = new FetchWrapper(
  "https://v6.exchangerate-api.com/v6/9e913ccb359d52fd02b4f741"
);
const base = document.querySelector(".currency-from-select");
const target = document.querySelector(".currency-to-select");
const result = document.querySelector("exchange-rate");
const convertBtn = document.querySelector(".convert-btn");
const getConversionRates = () => {
  API.get(`/latest/${base.value}`).then((data) => {
    result.textContent = data.conversion_rates[target.value];
  });
};
convertBtn.addEventListener("click", () => {
  getConversionRates();
});
