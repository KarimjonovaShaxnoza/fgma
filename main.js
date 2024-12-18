let cards = document.querySelector(".cards");

const __API = "https://restcountries.com/v3.1/all";

const input = document.querySelector(".search");
let davlatlar;

const getData = async () => {
  const res = await fetch(__API);
  const data = await res.json();
  const input = document.getElementById("search");

  render(data);
  davlatlar = [...data];

  input.addEventListener("input", (e) => {
    const newData = data.filter((item) =>
      item?.name.common?.toLowerCase().includes(e.target.value.toLowerCase())
    );

    render(newData);
  });
};

getData();



 function render(arr) {
   cards.innerHTML = "";
   arr.map((item) => {
     let card = document.createElement("div");
     card.classList.add("card");

     let img = document.createElement("img");
     img.src = item.flags.png;

     let h2 = document.createElement("h2");
     h2.textContent = item.name.common;

     card.append(img, h2);

     card.onclick = () => openCountryPage(item);

     cards.append(card);
   });
 }

function getMoreInfo(element) {
  let getElementInfo = davlatlar.filter((item) => item.name.common == element);
  localStorage.setItem("data", JSON.stringify(getElementInfo));
  window.location.href = "./country.html";
}

function darkMode() {
  let body = document.querySelector("body");
  body.style.backgroundColor = "black";

  let text = document.querySelector("h1");
  text.style.color = "white";
}

function lightMode() {
  console.log("lightMode");
  let body = document.querySelector("body");
  body.style.background = "white";

  let text = document.querySelector("h1");
  text.style.color = "black";
}

function openCountryPage(country) {

  localStorage.setItem("countryName", country.name.common);
  localStorage.setItem("countryPopulation", country.population);
  localStorage.setItem("countryRegion", country.region);
  localStorage.setItem("countryCapital", country.capital || "N/A");
  localStorage.setItem("countryFlag", country.flags.png);

  window.location.href = "country.html";
}