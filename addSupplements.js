const saveButton = document.querySelector("#save");

const message = document.querySelector("#message");


// Check if user is editing a supplement

const editIndex = localStorage.getItem("editIndex");


// If editing, load old supplement

if (editIndex !== null) {

    let supplements =
        JSON.parse(localStorage.getItem("supplements")) || [];


    const supplement = supplements[editIndex];


    if (supplement) {

        document.querySelector("#name").value =
            supplement.name;

        document.querySelector("#dosage").value =
            supplement.dosage;

        document.querySelector("#time").value =
            supplement.time;

        document.querySelector("#frequency").value =
            supplement.frequency;


        document.querySelector(".supplement-card h2").textContent =
            "Edit Supplement";


        saveButton.innerHTML =
            '<i class="fa-solid fa-pen"></i> Update Supplement';

    }
}



// Save button

saveButton.onclick = (e) => {

    e.preventDefault();


    const name =
        document.querySelector("#name").value.trim();


    const dosage =
        document.querySelector("#dosage").value.trim();


    const time =
        document.querySelector("#time").value;


    const frequency =
        document.querySelector("#frequency").value;



    // Validation

    if (name === "" || dosage === "" || time === "") {

        message.textContent =
            "Please fill in all the fields.";

        message.className = "error";

        return;
    }



    // Get existing supplements

    let supplements =
        JSON.parse(localStorage.getItem("supplements")) || [];



    // Create supplement

    const supplement = {

        id: Date.now(),

        name: name,

        dosage: dosage,

        time: time,

        frequency: frequency

    };



    // EDIT

    if (editIndex !== null) {

        supplements[editIndex] = supplement;


        localStorage.removeItem("editIndex");


        message.textContent =
            "✓ Supplement updated successfully!";

        message.className = "success";

    }


    // ADD

    else {

        supplements.push(supplement);


        message.textContent =
            "✓ Supplement saved successfully!";

        message.className = "success";

    }



    // Save in localStorage

    localStorage.setItem(
        "supplements",
        JSON.stringify(supplements)
    );



    // Return to Dashboard after 1 second

    setTimeout(() => {

        window.location.href = "dashboad.html";

    }, 1000);

};