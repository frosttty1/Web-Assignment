// Get html elements in variables object in key-pair format.
const variables = {
    formVariable: document.getElementById('Form-contact'),
    radioButtons: document.forms["Form-contact"].elements["type"],
    RPH: {
        rphContainer: document.getElementById('RPH_div'),
        rphInput: document.getElementById("input_RPH"),
    }
}
// Display Hiring box based on value
function displayHiringBox() {
    if (this.value === "hiring") {
        variables.RPH.rphContainer.style.display = "block";
        variables.RPH.rphInput.setAttribute("required", "");
        return;
    }
        variables.RPH.rphContainer.style.display = "none";
        variables.RPH.rphInput.removeAttribute("required");
}

/* Event Listeners */

variables.radioButtons.forEach(radio => radio.addEventListener("change",displayHiringBox));
