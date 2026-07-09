window.onload = function() {

    let savedPlan = localStorage.getItem("strideLabTrainingPlan");

    if (savedPlan) {

        let plan = JSON.parse(savedPlan);

        document.getElementById("monday").innerHTML = plan.monday;
        document.getElementById("tuesday").innerHTML = plan.tuesday;
        document.getElementById("wednesday").innerHTML = plan.wednesday;
        document.getElementById("thursday").innerHTML = plan.thursday;
        document.getElementById("friday").innerHTML = plan.friday;
        document.getElementById("saturday").innerHTML = plan.saturday;
        document.getElementById("sunday").innerHTML = plan.sunday;

    }


    loadProgress();

};



function saveProgress() {

    let trainings = [];

    let cards = document.querySelectorAll(".card");


    cards.forEach(function(card) {

        let checkbox = card.querySelector("input[type='checkbox']");
        let note = card.querySelector("textarea");


        trainings.push({
            completed: checkbox.checked,
            note: note.value
        });

    });


    localStorage.setItem(
        "strideLabProgress",
        JSON.stringify(trainings)
    );


    alert("Fortschritt gespeichert ✅");

}



function loadProgress() {

    let savedProgress = localStorage.getItem("strideLabProgress");


    if (savedProgress) {

        let trainings = JSON.parse(savedProgress);

        let cards = document.querySelectorAll(".card");


        cards.forEach(function(card, index) {

            if (trainings[index]) {

                card.querySelector("input[type='checkbox']").checked =
                trainings[index].completed;

                card.querySelector("textarea").value =
                trainings[index].note;

            }

        });

    }

}

function saveFeedback() {

    let feedback = document.getElementById("feedback").value;


    localStorage.setItem(
        "strideLabFeedback",
        feedback
    );


    alert("Feedback gespeichert ✅");

}
