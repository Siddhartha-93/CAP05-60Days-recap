let url = "https://fakestoreapi.com/products"

const displayIteam = document.getElementById("root")
const searchItem = document.getElementById("serchBar")
const sortingData = document.getElementById("shot_iteam")
const filterData = document.getElementById("filter_iteam")
const button = document.getElementById("SearchButn")
let itemData;
async function foo() {
    try {
        let res = await fetch(url)
        data = await res.json()
        display(data)
        console.log(data);
        itemData = data


    } catch (error) {
        console.log(error)
    }
}
// disply data items in dom..............
function display(data) {
  let nData =  data.map(function ({ image, title, price, }) {
        let userCard = document.createElement("div")
        userCard.className = "user_card "
        userCard.innerHTML = `
        <img src="${image}" alt="" >
        <p class="names"> ${title}</p>
        <p class="price"> Price: ${price}</p>
        `;
        displayIteam.append(userCard)
    })
    return nData
}
//sorting high to low and low to high by price...........
function sorting(pric) {
    displayIteam.innerHTML = "";
    switch (pric) {
        case 'high':
            itemData.sort((a, b) => b.price - a.price);
            break;
        case 'low':
            itemData.sort((a, b) => a.price - b.price);
            break;
        default:
            break;
    }
    display(itemData);
};
// filter deta items by category.......
function filterItem(filter){
    console.log(filter)
    displayIteam.innerHTML = "";

  let filterDatas =  async ()=>{
        let req = await fetch(`https://fakestoreapi.com/products/category/${filter}`)
        let res = await req.json()
        console.log(res);
        itemData = res
        display(res)
    }
    (filter == "all") ? display(data) : filterDatas()
}

// search data by title......
 let searchData = (vlu)=>{
    displayIteam.innerHTML = "";
   let searchData = itemData.filter((ele)=>{
        if(ele.title.toLowerCase().includes(vlu.toLowerCase())){
            return ele
        }
    })
    display(searchData)

 }

// sorting data by price event....
sortingData.addEventListener("change", () => {
    sorting(sortingData.value)
})

//filter data by category event......
filterData.addEventListener("change", () => {
    filterItem(filterData.value)
})


// search data by title event......
searchItem.addEventListener("input",()=>{ 
    searchData(searchItem.value)
})


// call aysnc function.....
foo()