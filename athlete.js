function loadProfile() {

    let savedProfile = localStorage.getItem("strideLabProfile");

    if (savedProfile) {

        let profile = JSON.parse(savedProfile);

        let fields = document.querySelectorAll(
            "#profile input, #profile textarea"
        );

        fields.forEach(function(field, index) {

            if (profile[index] !== undefined) {
                field.value = profile[index];
            }

        });

        lockProfile();

    } else {

        document.getElementById("profileStatus").innerHTML =
        "⚠️ Profil noch nicht ausgefüllt";

    }

}


window.onload = function() {

    document.getElementById("profile").style.display = "none";
    document.getElementById("weeks").style.display = "none";
    document.getElementById("feedback").style.display = "none";
    document.getElementById("progress").style.display = "none";


    loadProfile();

};



function toggleProfile() {

    let section = document.getElementById("profile");

    section.style.display =
    section.style.display === "block"
    ? "none"
    : "block";

}



function toggleWeeks() {

    let section = document.getElementById("weeks");

    section.style.display =
    section.style.display === "block"
    ? "none"
    : "block";

}



function toggleFeedback() {

    let section = document.getElementById("feedback");

    section.style.display =
    section.style.display === "block"
    ? "none"
    : "block";

}



function toggleProgress() {

    let section = document.getElementById("progress");

    section.style.display =
    section.style.display === "block"
    ? "none"
    : "block";

}



function saveProfile() {


    let fields = document.querySelectorAll(
        "#profile input, #profile textarea"
    );


    let profile = [];


    fields.forEach(function(field) {

        profile.push(field.value);

    });



    localStorage.setItem(
        "strideLabProfile",
        JSON.stringify(profile)
    );


    lockProfile();

}



function lockProfile() {

    let fields = document.querySelectorAll(
        "#profile input, #profile textarea"
    );


    fields.forEach(function(field){

        field.disabled = true;

    });


    document.getElementById("profileStatus").innerHTML =
    "✅ Profil gespeichert";

}



function editProfile() {

    let fields = document.querySelectorAll(
        "#profile input, #profile textarea"
    );


    fields.forEach(function(field) {

        field.disabled = false;

    });


    document.getElementById("profileStatus").innerHTML =
    "✏️ Profil bearbeiten";

}

