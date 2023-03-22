const baseURL = "http://localhost:2500/api/v1";
const authorTable = document.querySelector('#authorTableBody');


let authors = [];
let newAuthor = {};

const submitAuthorForm = (event) => {
    event.preventDefault();

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const contact = document.getElementById('contact');

    newAuthor.name = name.value;
    newAuthor.email = email.value;
    newAuthor.contact = contact.value;

    fetch(`${baseURL}/author`, {
        method: "POST",
        body: JSON.stringify(newAuthor),
        headers: {
            'Content-Type': "application/json"
        }
    }).then((response) => {
        return response.json();
    }).then((data) => {
        alert(data.message);
        getAllAuthors();
    }).catch((error) => {
        console.log(error);
    })
}

const getAllAuthors = () => {
    fetch(`${baseURL}/author`).then((response) => {
        return response.json();
    }).then((res) => {
        authors = res.data;
        updateAuthorUI(res.data);
    }).catch((error) => {
        console.log(error);
    })
}

const updateAuthorUI = (data) => {
    console.log(data, "inside update Author UI");
    authorTable.innerHTML = "";

    for (let i = 0; i < data.length; i++) {
        authorTable.innerHTML += `
            <tr>
                <td>${data[i]._id}</td>
                <td>${data[i].name}</td>
                <td>${data[i].email}</td>
                <td>${data[i].contact}</td>
            </tr>
        `
    }
}


getAllAuthors();
