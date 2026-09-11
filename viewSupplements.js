

const tableBody =
    document.querySelector("#supplementTableBody");




const editButton =
    document.querySelector("#edit");

const deleteButton =
    document.querySelector("#delete");



let supplements =
    JSON.parse(localStorage.getItem("supplements")) || [];





function displaySupplements() {

    tableBody.innerHTML = "";




    if (supplements.length === 0) {

        tableBody.innerHTML = `

            <tr>

                <td colspan="5" class="empty-message">

                    <i class="fa-solid fa-pills"></i>

                    <br><br>

                    No supplements added yet.

                    <br>

                    Add your first supplement to get started.

                </td>

            </tr>

        `;

        return;
    }



    // Display each supplement

    supplements.forEach((supplement, index) => {


        const row =
            document.createElement("tr");


        row.innerHTML = `

            <td>

                <input
                    type="radio"
                    name="selectedSupplement"
                    value="${index}">

            </td>


            <td>
                ${supplement.name}
            </td>


            <td>
                ${supplement.dosage}
            </td>


            <td>
                ${supplement.time}
            </td>


            <td>
                ${supplement.frequency}
            </td>

        `;


        tableBody.appendChild(row);

    });

}





function getSelectedSupplement() {


    const selected =
        document.querySelector(
            'input[name="selectedSupplement"]:checked'
        );


    if (!selected) {

        alert("Please select a supplement first.");

        return null;

    }


    return Number(selected.value);

}





deleteButton.onclick = () => {


    const index =
        getSelectedSupplement();


    if (index === null) {

        return;

    }



    const confirmDelete =
        confirm(
            "Are you sure you want to delete this supplement?"
        );


    if (!confirmDelete) {

        return;

    }





    supplements.splice(index, 1);





    localStorage.setItem(
        "supplements",
        JSON.stringify(supplements)
    );





    displaySupplements();



    alert(
        "Supplement deleted successfully."
    );

};





editButton.onclick = () => {


    const index =
        getSelectedSupplement();


    if (index === null) {

        return;

    }



    // Save selected index

    localStorage.setItem(
        "editIndex",
        index
    );




    window.location.href =
        "addSupplements.html";

};




displaySupplements();