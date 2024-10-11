//2
const temperatureInput = document.querySelector(".inputTemperature");
const checkBtn = document.querySelector(".checkBtn");
const weather = {
  temperature: 0,
  humidity: "5",
  windSpeed: "100m/s",

  isBelowFreezing() {
    return this.temperature < 0;
  },
};
checkBtn.addEventListener("click", () => {
  weather.temperature = parseFloat(temperatureInput.value);
  if (weather.isBelowFreezing()) {
    alert("Температура нижче 0 градусів Цельсія");
  } else {
    alert("Температура вище або рівна 0 градусів Цельсія");
  }
});
