//SKILL SECTION TOGGLE BUTTON
//get button element through id
var toggleButtonSkills = document.getElementById("show-skills");
//get the ul element from skills section
var skills = document.querySelector(".skills ul");
//handling click event
toggleButtonSkills === null || toggleButtonSkills === void 0 ? void 0 : toggleButtonSkills.addEventListener("click", function () {
    //check if the button is not displaying when clicked
    if ((skills === null || skills === void 0 ? void 0 : skills.style.display) === "none") {
        //toggle it to display the ul items
        skills.style.display = "block";
        //updates the button text from show button to hide button
        toggleButtonSkills.textContent = "Hide Skills";
    }
    else {
        //toggle it to hide the ul items
        skills.style.display = "none";
        //updates the button text from hide skills to show skills
        toggleButtonSkills.textContent = "Show Skills";
    }
});
//CERTIFICATION SECTION TOGGLE BUTTON
//get the button through id
var toggleButtonCertificate = document.getElementById("show-certification");
//get the ul element from certification section
var certificate = document.querySelector(".certification ul");
//handling click event
toggleButtonCertificate === null || toggleButtonCertificate === void 0 ? void 0 : toggleButtonCertificate.addEventListener("click", function () {
    //check if the button is not displaying when clicked
    if ((certificate === null || certificate === void 0 ? void 0 : certificate.style.display) === "none") {
        //toggle it to display the ul items
        certificate.style.display = "block";
        //updates the button text from show certification to hide certification
        toggleButtonCertificate.textContent = "Hide Certification";
    }
    else {
        //toggle it to hide the ul items
        certificate.style.display = "none";
        //updates the button text from hide certifications to show certifications
        toggleButtonCertificate.textContent = "Show Certification";
    }
});
