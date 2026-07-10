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


function getNotesKey(){

    return "strideLabNotes_" + athlete + "_week" + week;

}




function loadTraining(){


    document.getElementById("weekTitle").innerHTML =
    "📅 Woche " + week;



    let savedTraining =
    localStorage.getItem(getTrainingKey());



    if(savedTraining){


        let data = JSON.parse(savedTraining);



        document.getElementById("goal").value =
        data.goal || "";



        document.querySelectorAll(".training").forEach(function(field){


            field.value =
            data.training[field.dataset.day] || "";


        });


    }




    let savedNotes =
    localStorage.getItem(getNotesKey());



    if(savedNotes){


        let notes = JSON.parse(savedNotes);



        document.querySelectorAll(".note").forEach(function(field){


            field.value =
            notes[field.dataset.day] || "";


        });


    }



    if(isCoach){


        document.getElementById("saveTrainingButton").style.display =
        "block";


        document.getElementById("saveNotesButton").style.display =
        "none";


    }


    else {


        document.querySelectorAll(".training").forEach(function(field){

            field.disabled = true;

        });



        document.getElementById("goal").disabled = true;



        document.getElementById("saveTrainingButton").style.display =
        "none";


        document.getElementById("saveNotesButton").style.display =
        "block";


    }



}





function saveTraining(){


    if(!isCoach){
        return;
    }


    let training = {};



    document.querySelectorAll(".training").forEach(function(field){


        training[field.dataset.day] =
        field.value;


    });



    let data = {


        goal:
        document.getElementById("goal").value,


        training: training


    };



    localStorage.setItem(

        getTrainingKey(),

        JSON.stringify(data)

    );



    alert("✅ Trainingsplan gespeichert");


}





function saveNotes(){


    let notes = {};



    document.querySelectorAll(".note").forEach(function(field){


        notes[field.dataset.day] =
        field.value;


    });



    localStorage.setItem(

        getNotesKey(),

        JSON.stringify(notes)

    );


    alert("📝 Notizen gespeichert");


}






function setDates(){


    let today = new Date();


    document.getElementById("dateRange").innerHTML =

    "📆 " +
    today.toLocaleDateString("de-DE");


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
