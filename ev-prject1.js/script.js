//url for api
let url ="https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees";

//take all html tags from index.html page....
let department = document.querySelector("#department");
let gender = document.querySelector("#gender");
let sort = document.querySelector("#sort");
let tbody = document.querySelector("tbody");

//create button for prev and next and append page...
let root = document.getElementById("root");
let div= document.createElement("div");
div.className = "pagination";
let pev = document.createElement("button");
pev.innerText = "previous";
let next = document.createElement("button");
next.innerText = "Next";
div.append(pev, next);
root.append(div);

// creating array of object -global.............
let pageData = [];
let alldata = [];

// make dinamick routing pagination...
let page = 1;
let limit = 10;
//fetching all data from api and storing "data" in array..........
let fetchData = async () => {
  let res = await fetch(url);
  let data = await res.json();
  alldata = data.data;
};
//fetching data from api and storing "pageData" for pagination..........
let fetchDataPage = async () => {
  let res = await fetch(url + `?page=${page}&limit=${limit}`);
  let data = await res.json();
  pageData = data.data;
  showData(pageData);
  console.log(pageData);
};
//Display all data in table format.....
let showData = (arr) => {
  tbody.innerHTML = "";
  let narr = arr.map((ele) => {
    let tr = document.createElement("tr");
    let td = document.createElement("td");
    td.innerText = ele.id;
    let td1 = document.createElement("td");
    td1.innerText = ele.name;
    let td2 = document.createElement("td");
    td2.innerText = ele.gender;
    let td3 = document.createElement("td");
    td3.innerText = ele.department;
    let td4 = document.createElement("td");
    td4.innerText = ele.salary;
    tr.append(td, td1, td2, td3, td4);
    tbody.append(tr);
  });
  return narr;
};

// filter by department function.........
let filterDepartment = (dip) => {
  let arr = alldata.filter((ele) => {
    if (ele.department == dip) {
      return ele;
    }
  });
  if (dip == "all") {
    return showData(pageData);
   
  }
  showData(arr);
};
// filter by gender function.........
let filterGender = () => {
  let arr = alldata.filter((ele) => {
    if (ele.gender == gender.value) {
      return ele;
    }
  });
  if (gender.value == "gender") {
    return showData(pageData);
  }
  showData(arr);

};

// sorting by salary function.........
let sorting = (price) => {
  console.log(price);
  if (price == "high") {
   let highData = pageData.sort((a, b) => b.salary - a.salary);
    showData(highData);
  }
  if (price == "low") {
    let lowData = pageData.sort((a, b) => a.salary - b.salary);
    showData(lowData);
  }
  if (price == "all") {
    showData(pageData);
  }
};

//pagination founction for previous....
let previ = () => {
  if (page > 1) {
    page = page - 1;
    fetchDataPage();
  } else {
    page = 1;
  }
};
//pagination founction for next....
let nxt = () => {
  if (page < limit) {
    page = page + 1;
    fetchDataPage();
  } else {
    page = limit;
  }
};

//adding all event listener function..........
// department based filter..
department.addEventListener("change", () => {
  filterDepartment(department.value);
});
// gender based filter..
gender.addEventListener("change", () => {
  filterGender();
});
// sort by salary
sort.addEventListener("change", () => {
  sorting(sort.value);
});
// pagination prev and next
pev.addEventListener("click", () => {
  previ();
});
next.addEventListener("click", () => {
  nxt();
});

fetchData();
fetchDataPage();
