function createPlan() {

    let distance = document.getElementById("distance").value;
    let currentTime = document.getElementById("currentTime").value;
    let targetTime = document.getElementById("targetTime").value;
    let days = document.getElementById("days").value;

    let plan = "";

    plan = `
    Dein persönlicher ${distance}-Trainingsplan

    Aktuelle Zeit: ${currentTime}
    Zielzeit: ${targetTime}
    Training: ${days}

    Woche 1:

    Montag:
    Lockerer Dauerlauf + Lauftechnik

    Dienstag:
    Intervalltraining passend zu deinem Ziel

    Mittwoch:
    Regeneration oder Krafttraining

    Donnerstag:
    Tempolauf im geplanten Wettkampftempo

    Samstag:
    Langer Lauf für die Ausdauer

    Sonntag:
    Lockerer Lauf oder Erholung

    Dieser Plan wird in den nächsten Versionen
    mit deinen Daten automatisch angepasst.
    `;

    document.getElementById("result").innerHTML = 
    plan.replace(/\n/g, "<br>");
}
