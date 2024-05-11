let url = "https://jsonplaceholder.typicode.com/todos"; // url for api fake data
// catching element from index.html page
let root = document.getElementById("root");

let fatchingData = async () => {
  let res = await fetch(url);
  let data = await res.json();
  showData(data);
};
// fatchingData();

let showData = (data) => {
  data.map((ele) => {
    let div = document.createElement("div");
    div.className = "card";
    let p = document.createElement("p");
    p.innerText = ele.title;
    let input = document.createElement("input");
    input.type = "checkbox";
    ele.completed == true ? (input.checked = true) : (input.checked = false);
    div.append(p, input);
    root.append(div);
  });
};
