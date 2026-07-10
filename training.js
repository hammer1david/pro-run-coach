let params = new URLSearchParams(window.location.search);


let athlete = params.get("athlete");

let week = params.get("week");

let isCoach = params.get("coach") === "true";


if(!athlete){

    athlete = "default";

}


if(!week){

    week = "1";

}



function getTrainingKey(){

    return "strideLabTraining_" + athlete + "_week" + week;

}




function loadTraining(){


    document.getElementById("weekTitle").innerHTML =
    "📅 Woche " + week;



    let saved = localStorage.getItem(getTrainingKey());


    if(saved){


        let data = JSON.parse(saved);



        document.getElementById("goal").value =
        data.goal || "";



        document.querySelectorAll(".training").forEach(function(field){


            let day = field.dataset.day;


            field.value =
            data.training[day] || "";


        });



        document.querySelectorAll(".note").forEach(function(field){


            let day = field.dataset.day;


            field.value =
            data.notes[day] || "";


        });



    }



    if(!isCoach){


        document.querySelectorAll(".training").forEach(function(field){

            field.disabled = true;

        });



        document.getElementById("goal").disabled = true;



        document.getElementById("saveButton").style.display = "none";


    }



}





function saveTraining(){


    if(!isCoach){

        return;

    }



    let training = {};

    let notes = {};



    document.querySelectorAll(".training").forEach(function(field){


        training[field.dataset.day] =
        field.value;


    });



    document.querySelectorAll(".note").forEach(function(field){


        notes[field.dataset.day] =
        field.value;


    });




    let data = {


        goal:
        document.getElementById("goal").value,


        training: training,


        notes: notes


    };



    localStorage.setItem(

        getTrainingKey(),

        JSON.stringify(data)

    );



    alert("✅ Trainingsplan gespeichert");


}





function setDates(){


    let today = new Date();


    let start =
    new Date(today);


    start.setDate(
        today.getDate() +
        ((1 - today.getDay() + 7) % 7)
    );



    let end =
    new Date(start);


    end.setDate(
        start.getDate() + 6
    );



    document.getElementById("dateRange").innerHTML =

    "📆 " +
    start.toLocaleDateString("de-DE")
    +
    " - "
    +
    end.toLocaleDateString("de-DE");


}





function goBack(){


    if(isCoach){

        window.location.href =
        "athlete.html?athlete=" + athlete + "&coach=true";

    }

    else {

        window.location.href =
        "athlete.html?athlete=" + athlete;

    }


}





window.onload = function(){


    setDates();

    loadTraining();


};
