function createPlan() {

    let distance = document.getElementById("distance").value;
    let time = document.getElementById("time").value;

    let plan = "";

    if (distance === "5 km") {
        plan = `
        Dein 5-km Plan:
        
        Montag: 6 km locker
        Dienstag: 6 x 800 m Intervalle
        Mittwoch: Pause oder Krafttraining
        Donnerstag: Tempolauf 20 Minuten
        Samstag: Langer Lauf 10 km
        `;
    }

    if (distance === "10 km") {
        plan = `
        Dein 10-km Plan:
        
        Montag: 8 km locker
        Dienstag: Intervalle
        Donnerstag: Tempolauf
        Samstag: 12 km langer Lauf
        `;
    }

    if (distance === "Halbmarathon") {
        plan = `
        Dein Halbmarathon Plan:
        
        Lange Läufe + Tempotraining + Intervalle
        `;
    }

    if (distance === "Marathon") {
        plan = `
        Dein Marathon Plan:
        
        Grundlagenphase + lange Läufe + Marathon-Tempo
        `;
    }

    document.getElementById("result").innerHTML = 
    plan;
}