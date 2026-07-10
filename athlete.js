let params = new URLSearchParams(window.location.search);

let athlete = params.get("athlete");


if(!athlete){

    athlete = "default";

}



function saveProfile() {


    let weekdays = [];


    document.querySelectorAll(".weekday").forEach(function(day){

        if(day.checked){

            weekdays.push(day.value);

        }

    });



    let profile = {


        name: document.getElementById("profileName").value,

        age: document.getElementById("profileAge").value,

        times: document.getElementById("profileTimes").value,

        goals: document.getElementById("profileGoals").value,

        trainingDays: document.getElementById("trainingDays").value,

        weekdays: weekdays


    };



    localStorage.setItem(

        "strideLabProfile_" + athlete,

        JSON.stringify(profile)

    );



    lockProfile();

    showProfileView(profile);

    showStatus("✅ Profil gespeichert");


    document.getElementById("profile").style.display = "none";

    document.getElementById("saveButton").style.display = "none";


}





function loadProfile(){


    let savedProfile = localStorage.getItem(

        "strideLabProfile_" + athlete

    );



    if(savedProfile){


        let profile = JSON.parse(savedProfile);



        document.getElementById("profileName").value =
        profile.name || "";


        document.getElementById("profileAge").value =
        profile.age || "";


        document.getElementById("profileTimes").value =
        profile.times || "";


        document.getElementById("profileGoals").value =
        profile.goals || "";


        document.getElementById("trainingDays").value =
        profile.trainingDays || "3";



        document.querySelectorAll(".weekday").forEach(function(day){


            day.checked =
            profile.weekdays &&
            profile.weekdays.includes(day.value);


        });



        lockProfile();

        showProfileView(profile);


        document.getElementById("profile").style.display = "none";

        document.getElementById("saveButton").style.display = "none";


    }

    else{


        document.getElementById("profileStatus").innerHTML =

        "⚠️ Profil noch nicht ausgefüllt";


    }


}





function lockProfile(){


    let fields = document.querySelectorAll(

        "#profile input, #profile textarea, #profile select"

    );



    fields.forEach(function(field){


        field.disabled = true;


    });


}





function showStatus(text){


    document.getElementById("profileStatus").innerHTML = text;



    setTimeout(function(){


        document.getElementById("profileStatus").innerHTML = "";


    },5000);


}





function toggleProfile(){


    let savedProfile = localStorage.getItem(

        "strideLabProfile_" + athlete

    );


    let profileView = document.getElementById("profileView");

    let profileForm = document.getElementById("profile");



    if(!savedProfile){


        profileForm.style.display =

        profileForm.style.display === "block"

        ? "none"

        : "block";


        return;


    }



    profileView.style.display =

    profileView.style.display === "block"

    ? "none"

    : "block";


}





function toggleWeeks(){


    let section = document.getElementById("weeks");


    section.style.display =

    section.style.display === "block"

    ? "none"

    : "block";


}





function toggleFeedback(){


    let section = document.getElementById("feedback");


    section.style.display =

    section.style.display === "block"

    ? "none"

    : "block";


}





function toggleProgress(){


    let section = document.getElementById("progress");


    section.style.display =

    section.style.display === "block"

    ? "none"

    : "block";


}





function editProfile(){


    let fields = document.querySelectorAll(

        "#profile input, #profile textarea, #profile select"

    );



    fields.forEach(function(field){


        field.disabled = false
