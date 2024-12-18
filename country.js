const name = localStorage.getItem("countryName");
const population = localStorage.getItem("countryPopulation");
const region = localStorage.getItem("countryRegion");
const capital = localStorage.getItem("countryCapital");
const flag = localStorage.getItem("countryFlag");


document.getElementById("country-name").textContent = name;
document.getElementById(
  "country-population"
).textContent = `Population: ${population}`;
document.getElementById("country-region").textContent = `Region: ${region}`;
document.getElementById("country-capital").textContent = `Capital: ${capital}`;
document.getElementById("country-flag").src = flag;


  function darkMode() {
    let body = document.querySelector("body");
    body.classList.remove("light-mode");
    body.classList.add("dark-mode");
  }

  function lightMode() {
    let body = document.querySelector("body");
    body.classList.remove("dark-mode");
    body.classList.add("light-mode");
  }
