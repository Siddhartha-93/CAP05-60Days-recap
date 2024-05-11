//url for country api.........
let url =
  "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries";
// -g variable.....
let nData = [];
//get element from dom...
let root = document.getElementById("root");
let selectTag = document.querySelector("#InputFild");

//fetching data from api...
let fetchData = async () => {
  let res = await fetch(url);
  let data = await res.json();
  nData = data.data;
  showData(nData);
};
// showing data in dom...
let showData = (data) => {
  data.map((ele) => {
    let div = document.createElement("div");
    div.className = "card";
    let h1 = document.createElement("h2");
    h1.innerText = ele.country;
    let h3 = document.createElement("h4");
    h3.textContent = `Rank: ${ele.Rank}`;
    let p = document.createElement("p");
    p.textContent = `population : ${ele.population}`;
    div.append(h1, h3, p);
    root.append(div);
  });
};
// showing data by population....
let showDataByPopulation = (val) => {
  if (val == "high") {
    root.innerHTML = "";
    let highP = nData.sort((a, b) => b.population - a.population);
    showData(highP);
  }
  if (val == "low") {
    root.innerHTML = "";
    let lowP = nData.sort((a, b) => a.population - b.population);
    showData(lowP);
  }
};

//event function.........
selectTag.addEventListener("change", () => {
  showDataByPopulation(selectTag.value);
});

fetchData();
