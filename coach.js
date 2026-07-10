function openAthlete(){

    let athlete =
    document.getElementById("athleteSelect").value;


    if(athlete === ""){

        alert("Bitte Athlet auswählen");

        return;

    }


    window.location.href =
    "athlete.html?athlete=" + athlete;

}
