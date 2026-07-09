function saveTrainingPlan() {

    let plan = {

        monday: document.getElementById("monday").value,
        tuesday: document.getElementById("tuesday").value,
        wednesday: document.getElementById("wednesday").value,
        thursday: document.getElementById("thursday").value,
        friday: document.getElementById("friday").value,
        saturday: document.getElementById("saturday").value,
        sunday: document.getElementById("sunday").value

    };


    localStorage.setItem(
        "strideLabTrainingPlan",
        JSON.stringify(plan)
    );


    document.getElementById("message").innerHTML =
    "Trainingsplan gespeichert ✅";

}
