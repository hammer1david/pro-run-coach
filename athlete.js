
window.onload = function() {

    let plan = `
    Montag:
    ${trainingPlan.monday}

    Dienstag:
    ${trainingPlan.tuesday}

    Mittwoch:
    ${trainingPlan.wednesday}

    Donnerstag:
    ${trainingPlan.thursday}

    Freitag:
    ${trainingPlan.friday}

    Samstag:
    ${trainingPlan.saturday}

    Sonntag:
    ${trainingPlan.sunday}
    `;


    document.getElementById("training").innerHTML =
    plan.replace(/\n/g, "<br>");

};
