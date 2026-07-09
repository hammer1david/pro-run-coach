function createPlan() {

    let distance = document.getElementById("distance").value;
    let currentTime = document.getElementById("currentTime").value;
    let targetTime = document.getElementById("targetTime").value;
    let days = document.getElementById("days").value;

    let level = "";

    if (distance === "5 km") {

        let minutes = parseInt(currentTime.split(":")[0]);

        if (minutes > 25) {
            level = "Einsteiger";
        } 
        else if (minutes > 20) {
            level = "Hobbyläufer";
        } 
        else {
            level = "Fortgeschrittener Läufer";
        }

    } else {
        level = "Läufer";
    }


    let plan = `
    Dein Pro Run Coach Plan

    Distanz: ${distance}

    Level: ${level}

    Aktuelle Zeit: ${currentTime}

    Zielzeit: ${targetTime}

    Trainingstage: ${days}


    Dein Training:

    Montag:
    Lockerer Lauf + Mobilität

    Dienstag:
    Intervalltraining zur Verbesserung deiner Geschwindigkeit

    Mittwoch:
    Erholung oder Krafttraining

    Donnerstag:
    Tempolauf

    Samstag:
    Langer Dauerlauf

    Sonntag:
    Regeneration


    Erstellt nach Prinzipien aus dem Leistungssport.
    `;


    document.getElementById("result").innerHTML =
    plan.replace(/\n/g, "<br>");
}
