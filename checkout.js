
var fName = document.getElementById("fName").value;
var lName = document.getElementById("lName").value;
var phNum = document.getElementById("phNum").value;
var add1 = document.getElementById("add1").value;
var city = document.getElementById("city").value;
var state = document.getElementById("state").value;
var pin = document.getElementById("pin").value;


function alerts(){
    if(fName == "" && lName!="" && phNum !="" && add1!="" && city !="" && state !="" && pin !=""){
        alert("Your order is accepted");

        setTimeout(function(){
           alert("Your order is being cooked");
        },3000);    

        setTimeout(function(){
           alert("Your order is ready");
        },8000);

        setTimeout(function(){
           alert("Order out for delivery");
        },10000);

        setTimeout(function(){
           alert("Order delivered");
        },12000);
         

    }else{
        alert("Please fill all the details");
    }
}