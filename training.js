window.onload = function(){


let params = new URLSearchParams(window.location.search);


let week = params.get("week");


if(week){

    document.getElementById("weekTitle").innerHTML =
    "📅 Woche " + week;

}


};



function goBack(){

    window.location.href = "athlete.html";

}
