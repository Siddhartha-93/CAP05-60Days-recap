//using method for requesting data from api......
const url = "https://dummyapi.io/data/v1/user";
const options = {
  method: "GET",
  headers: {
    "app-id": "6639eb689074b5012fa1a379",
  },
};
// global variable.......
let nData = [];

//using fetch method to get data from api...
let fetchData = async () => {
  let res = await fetch(url, options);
  let data = await res.json();
  console.log(data.data);
  nData = data.data;
  showData(nData);
};
fetchData();
//creating element.........
let root = document.getElementById("root");
// function for display data in page................
let showData = () => {
  nData.forEach((ele) => {
    let div = document.createElement("div");
    let h1 = document.createElement("h3");
    h1.innerText = `First Name : ${ ele.firstName}` 
    let h2 = document.createElement("h3");
    h2.innerText = `Last Name : ${ele.lastName}`
    let h3 = document.createElement("h3");
    h3.innerText = "Email : masai.school@gmail.com";
    let img = document.createElement("img");
    img.src = ele.picture;
    div.append(img, h1,h2, h3);
    root.append(div);
  });
};
