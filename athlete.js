window.onload = function() {

    let savedPlan = localStorage.getItem("strideLabPlan");

    let plan;

    if (savedPlan) {

        plan = JSON.parse(savedPlan);

    } else {

        plan = {
            monday: "Noch kein Training geplant",
            tuesday: "Noch kein Training geplant",
            wednesday: "Noch kein Training geplant",
            thursday: "Noch kein Training geplant",
            saturday: "Noch kein Training geplant"
        };

    }


    let output = `

    Montag:
    ${plan.monday}

    Dienstag:
    ${plan.tuesday}

    Mittwoch:
    ${plan.wednesday}

    Donnerstag:
    ${plan.thursday}

    Samstag:
    ${plan.saturday}

    `;


    document.getElementById("training").innerHTML =
    output.replace(/\n/g, "<br>");

};
