
document.addEventListener('DOMContentLoaded', function () {
    getGroups()
    btnDelete();
    showStudents();
});

const createGroupForm = document.querySelector("#create_group_form");
createGroupForm.addEventListener("submit", createGroupValidation)

function createGroupValidation(e) {
    e.preventDefault();
    const groupName = document.querySelector("#groupName").value;

    if (groupName === "") {
        console.log("El campo nombre esta vacio")
    } else {
        btnCreateGroup(groupName)
    }
}

async function btnCreateGroup(groupName) {
    const group = {
        groupName
    }

    try {
        const res = await fetch("http://localhost:4000/api/group/create", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(group)
        })

        const response = await res.json();
        if (response.error) {
            swal({
                text: `${response.error}`,
                button: "Cerrar"
            });
        } else {
            swal({
                text: `${response.message}`,
                buttons: false,
                timer: 2000
            });
            form.reset();
        }

    } catch (error) {
        console.log(error)
    }
}

async function getGroups() {
    try {
        const res = await fetch("http://localhost:4000/api/group/groups");
        const data = await res.json();
        groupsTable(data);
    } catch (error) {
        console.log(error);
    }

}

function groupsTable(groups) {
    let table = new DataTable("#groups_table", {
        responsive: true,
        data: groups,
        columns: [
            { data: '_id' },
            { data: 'name' },
            { data: 'tutor' },
            { // Agregamos una columna para las acciones
                data: null,
                render: function (data, type, row) {
                    return `
                <button class="show_group_students btn_edit" data-id="${data._id}">Ver estudiantes</button>
                <button class="asign_tutor_button btn_edit" data-id="${data._id}">Asignar tutor</button>
                <button class="group_delete_button btn_delete" data-id="${data._id}">Eliminar</button>
              `;
                }
            }
        ],
    });
}

function btnDelete() {
    document.addEventListener('click', function (event) {
        if (event.target.classList.contains('group_delete_button')) {
            const groupId = event.target.dataset.id;
            console.log(groupId)
            deleteGroup(groupId);
        }
    });
}
async function deleteGroup(id) {
    swal({
        title: "Está seguro?",
        text: "Una vez eliminado, no podrá recuperar el grupo",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    }).then(async (willDelete) => {
        if (willDelete) {
            const res = await fetch(`http://localhost:4000/api/group/delete/${id}`, {
                method: 'DELETE'
            })
            if (res.ok) {
                swal("El grupo ha sido eliminado correctamente", {
                    icon: "success",
                    buttons: false,
                    timer: 1000,
                });
            }
        }
    })
}

const overlay = document.querySelector("#overlay");

function showStudents() {
    document.addEventListener("click", (e) => {
        if (e.target.classList.contains("show_group_students")) {
            const overlay = document.querySelector("#overlay");
            overlay.style.display = "block"
            const groupId = e.target.dataset.id;
            // setStudentInformation(groupId)
            closeOverlay()
        }
    })
}
function closeOverlay() {
    const btnCancel = document.querySelector(".student_cancel_button");
    btnCancel.addEventListener("click", () => {
        overlay.style.display = "none";

    })
}