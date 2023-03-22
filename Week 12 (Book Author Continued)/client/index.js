const baseURL = "http://localhost:2500/api/v1";
const bookTable = document.querySelector('#bookTableBody');
const authorList = document.querySelector("#authorList");

let authors = [];
let newBook = {};

const submitForm = (event) => {
    event.preventDefault();

    const title = document.getElementById('title');
    const description = document.getElementById('description');
    newBook.title = title.value;
    newBook.description = description.value;

    fetch(`${baseURL}/book`, {
        method: "POST",
        body: JSON.stringify(newBook),
        headers: {
            'Content-Type': "application/json"
        }
    }).then((response) => {
        return response.json();
    }).then((data) => {
        alert(data.message);
        getAllBooks();
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
        getAllBooks();
    }).catch((error) => {
        console.log(error);
    })
}

const updateBookUI = (data) => {
    bookTable.innerHTML = "";
    console.log(data, "INCOMING VALUE");

    for (let i = 0; i < data.length; i++) {
        let authorName = parseAuthorName(data[i].author, authors);
        let id = data[i]._id;
        bookTable.innerHTML += `
            <tr>
                <td>${data[i]._id}</td>
                <td>${data[i].title}</td>
                <td>${data[i].description}</td>
                <td>${authorName}</td>
                <td><button class="btn btn-danger" onclick="deleteBook('${id}')">Delete</button></td>
            </tr>
        `
    }
}


const deleteBook = (bookId) => {
    fetch(`${baseURL}/book/${bookId}`, {
        method: "DELETE"
    }).then((response) => {
        return response.json();
    }).then((res) => {
        getAllBooks();
        alert(res.message);
    }).catch((error) => {
        console.log(error);
    })
}


const parseAuthorName = (authorId, authorList) => {
    let author = authorList.find((author) => author._id === authorId);
    return author.name;
}

const getAllBooks = () => {
    fetch(`${baseURL}/book`).then((response) => {
        return response.json();
    }).then((res) => {
        updateBookUI(res.data);
    }).catch((error) => {
        console.log(error);
    })
}


const updateAuthorUI = (data) => {
    for (let i = 0; i < data.length; i++) {
        authorList.innerHTML += `<option value=${data[i]._id}>${data[i].name}</option>`;
    }
}

const selectedAuthor = (event) => {
    newBook.author = event.target.value;
}

getAllAuthors();
