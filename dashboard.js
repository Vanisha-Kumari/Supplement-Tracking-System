// Add Supplement button

const addButton = document.querySelector("#add");

if (addButton) {

    addButton.onclick = () => {

        window.location.href = "addSupplements.html";

    };

}


// View Supplements button

const viewButton = document.querySelector("#view");

if (viewButton) {

    viewButton.onclick = () => {

        window.location.href = "viewSupplements.html";

    };

}


// Reminder button

const reminderButton = document.querySelector("#reminder");

if (reminderButton) {

    reminderButton.onclick = () => {

        window.location.href = "reminder.html";

    };

}