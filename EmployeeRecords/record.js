// fill in javascript code here

//selecting all element in html..........
let from = document.querySelector("form");
let user = document.querySelector("#name");
let employeeID = document.querySelector("#employeeID");
let department = document.querySelector("#department");
let experience = document.querySelector("#exp");
let email = document.querySelector("#email");
let mobile = document.querySelector("#mbl");
let tbody = document.querySelector("tbody");
let dpt = document.querySelector("#filterDip");
/// creating array of object -global.............
let data = [];


let auth = false;
// isAuth function for checking user is login or not........
let isAuth = () => {
  let loginData = JSON.parse(localStorage.getItem("logData")); 
  if (loginData) {
    let logindata = loginData.map((ele, i) => {
      if (ele.isAuth == true) {
        console.log(ele.isAuth);
        auth = true;
      }
    });
    return logindata;
  }
  console.log(auth);
  if (auth == true) {
    lodingData();
  } else {
    window.location.href = "login.html";
  }
};

// if record data. then it will display in page.........
let lodingData = () => {
  let lodData = JSON.parse(localStorage.getItem("rcData")) || [];
  console.log(lodData, "record data list");
  if (lodData) {
    data = lodData;
  }
  showData(data);
  // localStorage.removeItem("logData") // remove sing up data from local storage aftr loding
};

isAuth();

/// Onsubmit event for takeing data from user...........
function hendelSubmit(e) {
  e.preventDefault();
  let obj = {
    name: user.value,
    employeeID: employeeID.value,
    department: department.value,
    experience: experience.value,
    email: email.value,
    mobile: mobile.value,
  };
  data.push(obj);
  from.reset();
  showData(data);
  filterData(data);
  saveData(obj);
  localStorage.removeItem("logData"); // remove sing up data from local storage aftr aftre submit
}

// saving all data in locale storage.........
let saveData = (obj) => {
  let arr = JSON.parse(localStorage.getItem("rcData")) || [];
  arr.push(obj);
  localStorage.setItem("rcData", JSON.stringify(arr));
  console.log(arr);
};

// localStorage.clear()

// showing data in table formet on Dom......
function showData(arr) {
  tbody.innerHTML = "";
  let role = "";
  // creating html element for display......
  arr.map((ele, i) => {
    let tr = document.createElement("tr");

    let td1 = document.createElement("td");
    td1.innerText = ele.name;

    let td2 = document.createElement("td");
    td2.innerText = ele.employeeID;

    let td3 = document.createElement("td");
    td3.innerText = ele.department;

    let td4 = document.createElement("td");
    td4.innerText = ele.experience;

    let td5 = document.createElement("td");
    td5.innerText = ele.email;

    let td6 = document.createElement("td");
    td6.innerText = ele.mobile;

    let td7 = document.createElement("td");
    if (ele.experience == "") {
      role = "NA";
    } else {
      if (ele.experience > 5) {
        role = "Senior";
        console.log(role, "kk");
      } else if (2 < ele.experience && 5 > ele.experience) {
        role = "Junior";
      } else if (ele.experience <= 1) {
        role = "Fresher";
      }
    }
    td7.innerText = role;
    //adding delete button.......
    let btn = document.createElement("button");
    btn.innerText = "Delete";
    let td8 = document.createElement("td");
    td8.append(btn);
    tr.append(td1, td2, td3, td4, td5, td6, td7, td8);
    tbody.append(tr);
    // delet function using Dom manupulation.....
    btn.addEventListener("click", function () {
      dlt(i);
    });
  });
}
//delete function.....
let dlt = (item) => {
  data = data.filter((ele, i) => {
    return item != i;
  });
  showData(data);
};

let filterData = () => {
  let narr = data.filter((ele, i) => {
    return ele.department == dpt.value;
  });

  if (narr != 0) {
    showData(narr);
    console.log(narr);
  }
};

from.addEventListener("submit", function (event) {
  hendelSubmit(event);
});

dpt.addEventListener("change", function (event) {
  filterData(event.target.value);
});

lodingData();
