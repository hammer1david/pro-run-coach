
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
