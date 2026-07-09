window.onload = function() {

    let savedProgress = localStorage.getItem("strideLabProgress");

    if (savedProgress) {

        let trainings = JSON.parse(savedProgress);

        let cards = document.querySelectorAll(".card");

        cards.forEach(function(card, index) {

            let checkbox = card.querySelector("input[type='checkbox']");
            let note = card.querySelector("textarea");

            if (trainings[index]) {
                checkbox.checked = trainings[index].completed;
                note.value = trainings[index].note;
            }

        });
    }

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
