window.onload = function() {

    document.getElementById("profile").style.display = "none";
    document.getElementById("weeks").style.display = "none";
    document.getElementById("feedback").style.display = "none";
    document.getElementById("progress").style.display = "none";

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
