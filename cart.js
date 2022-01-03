var cartList = JSON.parse(localStorage.getItem("cart")) || [];
    var cartDisBar = document.getElementById("cartDis");
    console.log(cartList);

    var value=  document.getElementById("value");
    var valArr= [];
    cartDisplay(cartList);

// window.addEventListener("load", function () {
//     localStorage.setItem("cart",JSON.stringify(cartList));
//     cartDisplay(cartList);
// })

    function cartDisplay(items){
        items.map(function(item,index){
        // console.log(item);
        cartDisBar.innerText="";

        var div = document.createElement("div");
        div.setAttribute("id","cartItemDiv");
        var img = document.createElement("img");
        var h3 = document.createElement("h3");
        var btn = document.createElement("button");
        btn.setAttribute("id","removeBtn");

        img.src= item.img;
        h3.innerText = `₹ ${item.price}`;
        btn.innerText= "REMOVE";

        valArr.push(item.price);
        let priceval = valArr.reduce(function(a,c){
            return a+Number(c);
        });
        value.innerText= `₹ ${priceval}`;

        btn.addEventListener("click",function(){
            removeFunction(index);           
        });


        div.append(img,h3,btn);
        // console.log(div);
        cartDisBar.append(div);


        });

    }

    function removeFunction(index){
        cartList.splice(index,1);
            localStorage.setItem("cart",JSON.stringify(cartList));
            cartDisplay(cartList);
    }

    function checkoutPage(){
        window.location.href="checkout.html";
    }