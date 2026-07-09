function saveProfile() {

    let trainingDays = [];

    let checkboxes = document.querySelectorAll(
        'input[type="checkbox"]:checked'
    );

    checkboxes.forEach(function(box) {
        trainingDays.push(box.value);
    });


    let profile = {

        name: document.getElementById("name").value,

        goal: document.getElementById("goal").value,

        times: document.getElementById("times").value,

        days: document.getElementById("days").value,

        trainingDays: trainingDays

    };


    localStorage.setItem(
        "strideLabProfile",
        JSON.stringify(profile)
    );


    document.getElementById("message").innerHTML =
    "Profil gespeichert ✅";

}
