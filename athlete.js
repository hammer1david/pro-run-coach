let currentAthlete = "default";


let params = new URLSearchParams(window.location.search);


if(params.get("athlete")) {

    currentAthlete = params.get("athlete");

}

function saveProfile() {

    let weekdays = [];

    document.querySelectorAll(".weekday").forEach(function(day) {

        if(day.checked) {
            weekdays.push(day.value);
        }

    });


    let profile = {

        name: document.getElementById("profileName").value,

        age: document.getElementById("profileAge").value,

        times: document.getElementById("profileTimes").value,

        goals: document.getElementById("profileGoals").value,

        trainingDays: document.getElementById("trainingDays").value,

        weekdays: weekdays

    };


    let allProfiles =
JSON.parse(localStorage.getItem("strideLabProfiles")) || {};


allProfiles[currentAthlete] = profile;


localStorage.setItem(
    "strideLabProfiles",
    JSON.stringify(allProfiles)
);


    lockProfile();

    showProfileView(profile);

    showStatus("✅ Profil gespeichert");


    document.getElementById("profile").style.display = "none";

    document.getElementById("saveButton").style.display = "none";

}





function loadProfile() {


    
let allProfiles =
JSON.parse(localStorage.getItem("strideLabProfiles")) || {};


let savedProfile =
allProfiles[currentAthlete]
? JSON.stringify(allProfiles[currentAthlete])
: null;

    if(savedProfile) {


        let profile = JSON.parse(savedProfile);



        document.getElementById("profileName").value =
        profile.name || "";


        document.getElementById("profileAge").value =
        profile.age || "";


        document.getElementById("profileTimes").value =
        profile.times || "";


        document.getElementById("profileGoals").value =
        profile.goals || "";


        document.getElementById("trainingDays").value =
        profile.trainingDays || "3";



        document.querySelectorAll(".weekday").forEach(function(day) {

            day.checked =
            profile.weekdays &&
            profile.weekdays.includes(day.value);

        });



        lockProfile();


        showProfileView(profile);


        document.getElementById("profile").style.display = "none";

        document.getElementById("saveButton").style.display = "none";


    }

    else {


        document.getElementById("profileStatus").innerHTML =
        "⚠️ Profil noch nicht ausgefüllt";

    }

}





function lockProfile() {


    let fields = document.querySelectorAll(
        "#profile input, #profile textarea, #profile select"
    );


    fields.forEach(function(field){

        field.disabled = true;

    });

}





function showStatus(text) {


    document.getElementById("profileStatus").innerHTML = text;


    setTimeout(function(){

        document.getElementById("profileStatus").innerHTML = "";

    },5000);

}







function toggleProfile() {

    let savedProfile = localStorage.getItem("strideLabProfile");

    let profileView = document.getElementById("profileView");

    let profileForm = document.getElementById("profile");


    // Wenn noch kein Profil existiert -> Formular öffnen
    if(!savedProfile) {

        profileForm.style.display =
        profileForm.style.display === "block"
        ? "none"
        : "block";

        return;
    }


    // Wenn Profil existiert -> Profilkarte ein/ausblenden
    profileView.style.display =
    profileView.style.display === "block"
    ? "none"
    : "block";

}



function toggleWeeks() {

    let section = document.getElementById("weeks");


    section.style.display =
    section.style.display === "block"
    ? "none"
    : "block";

}





function toggleFeedback() {

    let section = document.getElementById("feedback");


    section.style.display =
    section.style.display === "block"
    ? "none"
    : "block";

}





function toggleProgress() {

    let section = document.getElementById("progress");


    section.style.display =
    section.style.display === "block"
    ? "none"
    : "block";

}





function editProfile() {


    let fields = document.querySelectorAll(
        "#profile input, #profile textarea, #profile select"
    );


    fields.forEach(function(field){

        field.disabled = false;

    });



    document.getElementById("profile").style.display = "block";


    document.getElementById("saveButton").style.display = "block";


    document.getElementById("profileView").style.display = "none";


    showStatus("✏️ Profil bearbeiten");

}





function showProfileView(profile) {


    document.getElementById("viewName").innerHTML =
    "👤 Name: " + profile.name;


    document.getElementById("viewAge").innerHTML =
    "🎂 Alter: " + profile.age;


    document.getElementById("viewTimes").innerHTML =
    "🏁 Bestzeiten: " + profile.times;


    document.getElementById("viewGoals").innerHTML =
    "🎯 Ziele: " + profile.goals;


    document.getElementById("viewTrainingDays").innerHTML =
    "📅 Trainingstage: " + profile.trainingDays + " Tage/Woche";


    document.getElementById("viewWeekdays").innerHTML =
    "🗓️ Trainingstage: " +
    (profile.weekdays ? profile.weekdays.join(", ") : "");



    document.getElementById("profileView").style.display =
    "block";

}

window.onload = function() {

    // Alle Karten beim Start schließen
    document.getElementById("profile").style.display = "none";
    document.getElementById("profileView").style.display = "none";
    document.getElementById("weeks").style.display = "none";
    document.getElementById("feedback").style.display = "none";
    document.getElementById("progress").style.display = "none";


    let savedProfile = localStorage.getItem("strideLabProfile");


    if(savedProfile) {

        let profile = JSON.parse(savedProfile);

        showProfileView(profile);

        document.getElementById("saveButton").style.display = "none";

    } 
    else {

        document.getElementById("saveButton").style.display = "block";

        document.getElementById("profileStatus").innerHTML =
        "⚠️ Profil noch nicht ausgefüllt";

    }

};
