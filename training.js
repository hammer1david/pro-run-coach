let currentRole = "athlete";


function setRole(role) {

    currentRole = role;

    applyPermissions();

    alert("Modus: " + role);

}



function applyPermissions() {

    let coachFields = document.querySelectorAll(
        "textarea[id*='Training'], textarea[id*='CoachNote']"
    );


    coachFields.forEach(function(field) {

        if (currentRole === "coach") {

            field.disabled = false;

        } else {

            field.disabled = true;

        }

    });

}



function saveTraining() {


    let trainingData = {


        monday: {
            training: mondayTraining.value,
            coachNote: mondayCoachNote.value,
            done: mondayDone.checked,
            athleteNote: mondayAthleteNote.value
        },


        tuesday: {
            training: tuesdayTraining.value,
            coachNote: tuesdayCoachNote.value,
            done: tuesdayDone.checked,
            athleteNote: tuesdayAthleteNote.value
        },


        wednesday: {
            training: wednesdayTraining.value,
            coachNote: wednesdayCoachNote.value,
            done: wednesdayDone.checked,
            athleteNote: wednesdayAthleteNote.value
        },


        thursday: {
            training: thursdayTraining.value,
            coachNote: thursdayCoachNote.value,
            done: thursdayDone.checked,
            athleteNote: thursdayAthleteNote.value
        },


        friday: {
            training: fridayTraining.value,
            coachNote: fridayCoachNote.value,
            done: fridayDone.checked,
            athleteNote: fridayAthleteNote.value
        },


        saturday: {
            training: saturdayTraining.value,
            coachNote: saturdayCoachNote.value,
            done: saturdayDone.checked,
            athleteNote: saturdayAthleteNote.value
        },


        sunday: {
            training: sundayTraining.value,
            coachNote: sundayCoachNote.value,
            done: sundayDone.checked,
            athleteNote: sundayAthleteNote.value
        }

    };


    localStorage.setItem(
        "strideLabTraining",
        JSON.stringify(trainingData)
    );


    alert("Training gespeichert ✅");

}




window.onload = function() {


    let saved = localStorage.getItem(
        "strideLabTraining"
    );


    if(saved) {


        let data = JSON.parse(saved);


        mondayTraining.value = data.monday.training;
        mondayCoachNote.value = data.monday.coachNote;
        mondayDone.checked = data.monday.done;
        mondayAthleteNote.value = data.monday.athleteNote;


        tuesdayTraining.value = data.tuesday.training;
        tuesdayCoachNote.value = data.tuesday.coachNote;
        tuesdayDone.checked = data.tuesday.done;
        tuesdayAthleteNote.value = data.tuesday.athleteNote;


        wednesdayTraining.value = data.wednesday.training;
        wednesdayCoachNote.value = data.wednesday.coachNote;
        wednesdayDone.checked = data.wednesday.done;
        wednesdayAthleteNote.value = data.wednesday.athleteNote;


        thursdayTraining.value = data.thursday.training;
        thursdayCoachNote.value = data.thursday.coachNote;
        thursdayDone.checked = data.thursday.done;
        thursdayAthleteNote.value = data.thursday.athleteNote;


        fridayTraining.value = data.friday.training;
        fridayCoachNote.value = data.friday.coachNote;
        fridayDone.checked = data.friday.done;
        fridayAthleteNote.value = data.friday.athleteNote;


        saturdayTraining.value = data.saturday.training;
        saturdayCoachNote.value = data.saturday.coachNote;
        saturdayDone.checked = data.saturday.done;
        saturdayAthleteNote.value = data.saturday.athleteNote;


        sundayTraining.value = data.sunday.training;
        sundayCoachNote.value = data.sunday.coachNote;
        sundayDone.checked = data.sunday.done;
        sundayAthleteNote.value = data.sunday.athleteNote;


    }


    applyPermissions();

};
