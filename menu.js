var menuDisBar = document.getElementById("menuDisplay");
var count = document.getElementById("count");

async function menuDisplay(){
    let url = `https://www.themealdb.com/api/json/v1/1/categories.php`;

    let res = await fetch(url);
    let data = await res.json();
    // console.log(data);
    appendData(data.categories);
}
menuDisplay();
var arrList=[];
function appendData(data){
    data.map(function(item){
        // console.log(item);
        var div = document.createElement("div");
        div.setAttribute("id","itemDiv");
        var img = document.createElement("img");
        var h3 = document.createElement("h3");
        var btn = document.createElement("button");
        btn.setAttribute("id","cartBtn");

        img.src= item.strCategoryThumb;
        let price = Math.round(Math.random()*400+100);
        h3.innerText = `₹ ${price}`;;
        btn.innerText= "ADD TO CART";
        
        

        btn.addEventListener("click",function(){
            var list = {
            img : item.strCategoryThumb,
            price : price,
           };
           arrList.push(list);
           localStorage.setItem("cart",JSON.stringify(arrList));
           console.log(arrList);
           count.innerText= arrList.length;
  
        });

        div.append(img,h3,btn);
        // console.log(div);
        menuDisBar.append(div);

        
    });
}

function cartPage() {
    window.location.href = "cart.html";
}