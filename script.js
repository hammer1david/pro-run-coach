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

let pace = "";

if (distance === "5 km" && currentTime.includes(":")) {

    let parts = currentTime.split(":");
    let minutes = parseInt(parts[0]);
    let seconds = parseInt(parts[1]);

    let totalSeconds = minutes * 60 + seconds;

    let paceSeconds = totalSeconds / 5;

    let easyPace = Math.round(paceSeconds + 75);
    let tempoPace = Math.round(paceSeconds + 25);
    let intervalPace = Math.round(paceSeconds - 15);

    function formatPace(seconds) {
        let min = Math.floor(seconds / 60);
        let sec = seconds % 60;
        return min + ":" + sec.toString().padStart(2, "0") + " min/km";
    }

    pace = `
    Lockere Läufe: ${formatPace(easyPace)}
    Tempoläufe: ${formatPace(tempoPace)}
    Intervalle: ${formatPace(intervalPace)}
    `;
}

    
    let plan = `
    Dein Pro Run Coach Plan

    Distanz: ${distance}

    Level: ${level}

    Aktuelle Zeit: ${currentTime}

    Zielzeit: ${targetTime}

    Trainingstage: ${days}

    Pace-Zonen:${pace}


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


    document.getElementById("result").innerHTML = `
<div class="card">
<h3>👤 Athletenprofil</h3>
<p>Ziel: ${distance}</p>
<p>Level: ${level}</p>
<p>Training: ${days}</p>
</div>

<div class="card">
<h3>📊 Leistungsdaten</h3>
<p>Aktuelle Zeit: ${currentTime}</p>
<p>Zielzeit: ${targetTime}</p>
</div>

<div class="card">
<h3>📅 Trainingswoche</h3>
<p>
Montag: Lockerer Lauf + Mobilität<br>
Dienstag: Intervalle<br>
Mittwoch: Regeneration<br>
Donnerstag: Tempolauf<br>
Samstag: Langer Lauf
</p>
</div>

`;
}
