let urlParams = new URLSearchParams(window.location.search);

let currentWeek = urlParams.get("week") || "1";

let currentRole = localStorage.getItem("strideLabRole") || "athlete";


function setRole(role) {
    currentRole = role;
    applyPermissions();
}


function applyPermissions() {

    let fields = document.querySelectorAll(
        "textarea"
    );

    fields.forEach(function(field) {

        if (
            field.id.includes("Training") ||
            field.id.includes("CoachNote")
        ) {

            field.disabled = (currentRole !== "coach");

        }

    });

}


function saveTraining() {

    let days = [
        "monday",
        "tuesday",
        "wednesday",
        "thursday",
        "friday",
        "saturday",
        "sunday"
    ];


    let trainingData = {};


    days.forEach(function(day) {

        trainingData[day] = {

            training:
            document.getElementById(day + "Training").value,

            coachNote:
            document.getElementById(day + "CoachNote").value,

            done:
            document.getElementById(day + "Done").checked,

            athleteNote:
            document.getElementById(day + "AthleteNote").value

        };

    });


    localStorage.setItem(
        "strideLabTrainingWeek"+currentWeek,
        JSON.stringify(trainingData)
    );


    alert("Training gespeichert ✅");

}



window.onload = function() {

    let saved =
    localStorage.getItem("strideLabTrainingWeek"+currentWeek);


    if(saved) {

        let data = JSON.parse(saved);


        Object.keys(data).forEach(function(day) {

            document.getElementById(day + "Training").value =
            data[day].training;

            document.getElementById(day + "CoachNote").value =
            data[day].coachNote;

            document.getElementById(day + "Done").checked =
            data[day].done;

            document.getElementById(day + "AthleteNote").value =
            data[day].athleteNote;

        });

    }


    applyPermissions();

};
