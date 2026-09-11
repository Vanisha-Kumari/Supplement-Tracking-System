const reminderList =
    document.querySelector("#reminderList");




let supplements =
    JSON.parse(localStorage.getItem("supplements")) || [];




let reminders =
    JSON.parse(localStorage.getItem("reminders")) || [];





function displayReminders() {

    reminderList.innerHTML = "";




    if (supplements.length === 0) {

        reminderList.innerHTML = `

            <div class="reminder-card">

                <p>
                    No supplements added yet.
                    Please add a supplement first.
                </p>

            </div>

        `;

        return;
    }





    supplements.forEach((supplement) => {


        const reminder =
            reminders.find(
                r => r.id === supplement.id
            );


        const isEnabled =
            reminder ? reminder.enabled : false;



        const card =
            document.createElement("div");


        card.className =
            "reminder-card";



        card.innerHTML = `

            <div>

                <h3>
                    ${supplement.name}
                </h3>

                <p>
                    Dosage: ${supplement.dosage}
                </p>

                <p>
                    Time: ${supplement.time}
                </p>

                <p>
                    Frequency: ${supplement.frequency}
                </p>

            </div>


            <div>

                <label>

                    <input
                        type="checkbox"
                        ${isEnabled ? "checked" : ""}
                        onchange="toggleReminder(${supplement.id})">

                    Reminder

                </label>

            </div>

        `;


        reminderList.appendChild(card);

    });

}





function toggleReminder(id) {


    let reminders =
        JSON.parse(
            localStorage.getItem("reminders")
        ) || [];



    const existing =
        reminders.find(
            r => r.id === id
        );



    if (existing) {

        existing.enabled =
            !existing.enabled;

    }

    else {

        reminders.push({

            id: id,

            enabled: true

        });

    }





    localStorage.setItem(
        "reminders",
        JSON.stringify(reminders)
    );



    displayReminders();

}





function checkReminders() {


    let supplements =
        JSON.parse(
            localStorage.getItem("supplements")
        ) || [];


    let reminders =
        JSON.parse(
            localStorage.getItem("reminders")
        ) || [];



    const currentTime =
        new Date()
            .toTimeString()
            .slice(0, 5);



    supplements.forEach(supplement => {


        const reminder =
            reminders.find(
                r => r.id === supplement.id
            );



        if (
            reminder &&
            reminder.enabled &&
            supplement.time === currentTime
        ) {


            alert(

                "🔔 Supplement Reminder!\n\n" +

                "Time to take: " +

                supplement.name +

                "\nDosage: " +

                supplement.dosage

            );

        }

    });

}





displayReminders();





setInterval(
    checkReminders,
    60000
);