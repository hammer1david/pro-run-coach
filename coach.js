
function savePlan() {

    let plan = {

        monday: document.getElementById("monday").value,

        tuesday: document.getElementById("tuesday").value,

        wednesday: document.getElementById("wednesday").value,

        thursday: document.getElementById("thursday").value,

        saturday: document.getElementById("saturday").value

    };


    localStorage.setItem(
        "strideLabPlan",
        JSON.stringify(plan)
    );


    document.getElementById("message").innerHTML =
    "Trainingsplan gespeichert ✅";

}

function loadProfile() {

    let savedProfile = localStorage.getItem("strideLabProfile");

    if (savedProfile) {

        let profile = JSON.parse(savedProfile);

        document.getElementById("athleteProfile").innerHTML = `

        <div class="card">

        <h3>Athletenprofil</h3>

        <p>Name: ${profile.name}</p>

        <p>Ziel: ${profile.goal}</p>

        <p>Bestzeiten: ${profile.times}</p>

        <p>Trainingstage pro Woche: ${profile.days}</p>

        <p>Gewünschte Tage: ${profile.trainingDays.join(", ")}</p>

        </div>

        `;

    } else {

        document.getElementById("athleteProfile").innerHTML =
        "Noch kein Profil gespeichert.";

    }

}

