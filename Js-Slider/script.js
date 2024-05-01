// 20 images taken from fakestoreapi.com...........
let url = "https://fakestoreapi.com/products";
//  geting element for index.html page.......
let root = document.getElementById("root");
let div = document.createElement("div");
let display = document.querySelector(".display");
// createing and appending image and button for prev and next...
let img = document.createElement("img");// img tage for image............
let run = document.createElement("button");//button for run slide show.......
run.innerText = "Run Slide Show";
let peve = document.createElement("button");// button for previous slide ....
peve.innerText = "Previous";
let next = document.createElement("button");// button for next slide....
next.innerText = "Next";
div.className = "slider";// class name for div.
// append element in index.html page...
display.append(div);
root.append(run, peve, next);
//gobal count variable
let count = 0;

// fatching data from api and invok slide Show.............
let foo = async () => {
  let res = await fetch(url);
  let data = await res.json();
  slideShow(data);
};

// createing js.function for slide show...
let slideShow = (data) => {
  let imgData = data.map((ele) => {
    return ele.image;
  });
  img.src = imgData[0];
  div.append(img);
// function for next..........
  let goNext = () => {
    img.src = "";
    count = count + 1;
    for (let i = 0; i < imgData.length; i++) {
      if (count == i) {
        console.log(imgData[i], i, count);
        img.src = imgData[i];
        div.append(img);
      }
    }
    if (count >= imgData.length) {
      img.src = imgData[imgData.length - 1];
      div.append(img);
      count = imgData.length;
    }
    console.log(count);
  };
//
  let slidShow;
// all even function
  run.addEventListener("click", () => {
    slidShow = setInterval(() => {
      goNext();
    }, 1000);
  });

  next.addEventListener("click", () => {
      clearInterval(slidShow);
    goNext();
  });
  peve.addEventListener("click", () => {
    clearInterval(slidShow);
    img.src = "";
    count = count - 1;
    for (let i = 0; i < imgData.length; i++) {
      if (count == i) {
        img.src = imgData[i];
        div.append(img);
      }
    }
    if (count <= 0) {
      img.src = imgData[0];
      div.append(img);
      count = 0;
    }
    console.log(count);
  });
};


foo();
