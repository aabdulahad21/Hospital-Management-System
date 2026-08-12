const medicineApi = "/medicines";

window.onload = function () {
    loadMedicines();
};

// ---------------- LOAD MEDICINES ----------------

function loadMedicines() {

    fetch(medicineApi)
        .then(response => response.json())
        .then(data => {

            let table = "";

            data.forEach(medicine => {

                table += `
                    <tr>

                        <td>${medicine.id}</td>

                        <td>${medicine.medicineName}</td>

                        <td>${medicine.company}</td>

                        <td>${medicine.price}</td>

                        <td>${medicine.stock}</td>

                        <td>

                            <button
                                class="btn btn-sm btn-warning"
                                onclick="editMedicine(${medicine.id})">
                                Edit
                            </button>

                            <button
                                class="btn btn-sm btn-danger"
                                onclick="deleteMedicine(${medicine.id})">
                                Delete
                            </button>

                        </td>

                    </tr>
                `;

            });

            document.getElementById("medicineTable").innerHTML = table;

        });

}

// ---------------- SAVE / UPDATE ----------------

function saveMedicine() {

    const id = document.getElementById("medicineId").value;

    const medicine = {

        medicineName: document.getElementById("medicineName").value,
        company: document.getElementById("manufacturer").value,
        price: parseFloat(document.getElementById("price").value),
        stock: parseInt(document.getElementById("stock").value)

    };

    let url = "/medicines";
    let method = "POST";

    if (id) {
        url = "/medicines/" + id;
        method = "PUT";
    }

    fetch(url, {

        method: method,

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(medicine)

    })
    .then(response => response.json())
    .then(() => {

        alert("Medicine Saved Successfully");

        document.getElementById("medicineId").value = "";
        document.getElementById("medicineName").value = "";
        document.getElementById("manufacturer").value = "";
        document.getElementById("price").value = "";
        document.getElementById("stock").value = "";

        bootstrap.Modal.getInstance(
            document.getElementById("medicineModal")
        ).hide();

        loadMedicines();

    });

}

// ---------------- EDIT ----------------

function editMedicine(id) {

    fetch("/medicines")
        .then(response => response.json())
        .then(data => {

            const medicine = data.find(m => m.id === id);

            document.getElementById("medicineId").value = medicine.id;
            document.getElementById("medicineName").value = medicine.medicineName;
            document.getElementById("manufacturer").value = medicine.company;
            document.getElementById("price").value = medicine.price;
            document.getElementById("stock").value = medicine.stock;

            new bootstrap.Modal(
                document.getElementById("medicineModal")
            ).show();

        });

}

// ---------------- DELETE ----------------

function deleteMedicine(id) {

    if (!confirm("Delete this medicine?")) {
        return;
    }

    fetch("/medicines/" + id, {

        method: "DELETE"

    })
    .then(() => {

        alert("Medicine Deleted Successfully");

        loadMedicines();

    });

}