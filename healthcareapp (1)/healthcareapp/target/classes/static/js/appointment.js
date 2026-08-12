// Base URL
const appointmentApi = "/appointments";
const patientApi = "/patients";
const doctorApi = "/doctors";

// Load everything when page opens
window.onload = function () {
    loadAppointments();
    loadPatients();
    loadDoctors();
};

// ---------------- LOAD APPOINTMENTS ----------------

function loadAppointments() {

    fetch(appointmentApi)
        .then(response => response.json())
        .then(data => {

            let table = "";

            data.forEach(a => {

                table += `
                    <tr>

                        <td>${a.id}</td>

                        <td>${a.patient.name}</td>

                        <td>${a.doctor.name}</td>

                        <td>${a.appointmentDate}</td>

                        <td>${a.appointmentTime}</td>

                        <td>${a.reason}</td>

                        <td>

                            <button
                                class="btn btn-sm btn-warning"
                                onclick="editAppointment(${a.id})">
                                Edit
                            </button>

                            <button
                                class="btn btn-sm btn-danger"
                                onclick="deleteAppointment(${a.id})">
                                Delete
                            </button>

                        </td>

                    </tr>
                `;

            });

            document.getElementById("appointmentTable").innerHTML = table;

        });

}

// ---------------- LOAD PATIENTS ----------------

function loadPatients() {

    fetch(patientApi)
        .then(response => response.json())
        .then(data => {

            let options = "";

            data.forEach(patient => {

                options +=
                    `<option value="${patient.id}">
                        ${patient.name}
                    </option>`;

            });

            document.getElementById("patientId").innerHTML = options;

        });

}

// ---------------- LOAD DOCTORS ----------------

function loadDoctors() {

    fetch(doctorApi)
        .then(response => response.json())
        .then(data => {

            let options = "";

            data.forEach(doctor => {

                options +=
                    `<option value="${doctor.id}">
                        ${doctor.name}
                    </option>`;

            });

            document.getElementById("doctorId").innerHTML = options;

        });

}

// These will be implemented next
function saveAppointment() {

    const id = document.getElementById("appointmentId").value;

    const appointment = {

        appointmentDate: document.getElementById("appointmentDate").value,
        appointmentTime: document.getElementById("appointmentTime").value,
        reason: document.getElementById("reason").value,
        patientId: Number(document.getElementById("patientId").value),
        doctorId: Number(document.getElementById("doctorId").value)

    };

    let url = "/appointments";
    let method = "POST";

    if (id) {
        url = "/appointments/" + id;
        method = "PUT";
    }

    fetch(url, {

        method: method,

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(appointment)

    })
    .then(response => response.json())
    .then(() => {

        alert("Appointment Saved Successfully");

        document.getElementById("appointmentId").value = "";
        document.getElementById("appointmentDate").value = "";
        document.getElementById("appointmentTime").value = "";
        document.getElementById("reason").value = "";

        bootstrap.Modal.getInstance(document.getElementById("appointmentModal")).hide();

        loadAppointments();

    });

}

function editAppointment(id) {

    fetch("/appointments")
        .then(response => response.json())
        .then(data => {

            const appointment = data.find(a => a.id === id);

            document.getElementById("appointmentId").value = appointment.id;
            document.getElementById("patientId").value = appointment.patient.id;
            document.getElementById("doctorId").value = appointment.doctor.id;
            document.getElementById("appointmentDate").value = appointment.appointmentDate;
            document.getElementById("appointmentTime").value = appointment.appointmentTime;
            document.getElementById("reason").value = appointment.reason;

            new bootstrap.Modal(document.getElementById("appointmentModal")).show();

        });

}

function deleteAppointment(id) {

    if (!confirm("Delete this appointment?")) {
        return;
    }

    fetch("/appointments/" + id, {

        method: "DELETE"

    })
    .then(() => {

        alert("Appointment Deleted");

        loadAppointments();

    });

}