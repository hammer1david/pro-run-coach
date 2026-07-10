window.onload = function(){

    let url = window.location.href;

    console.log(url);


    let params = new URLSearchParams(window.location.search);

    let week = params.get("week");


    console.log("Woche:", week);


    if(week){

        document.getElementById("weekTitle").innerHTML =
        "📅 Woche " + week;

    } else {

        document.getElementById("weekTitle").innerHTML =
        "Keine Woche ausgewählt";

    }

};



function goBack(){

    window.location.href = "athlete.html";

}
