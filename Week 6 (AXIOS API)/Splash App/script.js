
const APIKEY = "A7P2Ucq88scSUHaqEywQDvK5b0BbOVqGlzMjwNaqz90";

// Path Parameters
// http://facebook.com/prabh/profile/user

// Query Parameters (Where you pass data in key-value pair)
// http://facebook.com?user=prabh&type=profile&value=user


// When you are using AXIOS , you don;t have to convert the promise result to JSON,
// because its already done for you by Axios

// Just like Fetch, Axios is also a HTTP CLient to communicate with the server
let imagesData;
const fetchesImages = async () => {
    try {
        return await axios.get(`https://api.unsplash.com/photos/?client_id=${APIKEY}`);
    } catch(error) {
        console.log(error);
        alert("There was an error", error);
    }
}


const fetchImageByKeyword = async () => {

    const keyword = document.getElementById('searched-keyword');

    // Fix the search bar, when you search for soimething remove it as well.
    try {
        return await axios.get(`https://api.unsplash.com/search/photos?query=${keyword.value}&client_id=${APIKEY}`);
    } catch(error) {
        console.log(error);
        alert("There was an error", error);
    }




}

const generateUI = (arrayOfImages) => {
    let photoSection = document.getElementById('photo-section');
    photoSection.innerHTML = "";

    arrayOfImages.forEach((imageObject) => {
        let imageContainer = document.createElement('div');

        imageContainer.innerHTML = `
        <img src=${imageObject.url}>
        <time>Created at: ${ modifyDate(imageObject.createdAt) }</time>
        <p>${imageObject.description}</p>
        `
    
    
        photoSection.appendChild(imageContainer);
    })



}


function modifyDate(date) {
    let d = new Date(date);
    // let readableDate = `${d.getDate()}, ${d.getMonth()}, ${d.getFullYear()} `;
    return d.toLocaleDateString();
}

async function getImageDataByKeyword() {
    const { data } = await fetchImageByKeyword();

    imagesData = data.results.map((imageObject) => {
        return {
            url: imageObject.urls.full,
            createdAt: imageObject.created_at,
            likes: imageObject.likes,
            description: imageObject.description || "Random Description"

        }
    });

    generateUI(imagesData);
}
 
async function getData() {
    const { data } = await fetchesImages();
    imagesData = data.map((imageObject) => {
        return {
            url: imageObject.urls.regular,
            createdAt: imageObject.created_at,
            likes: imageObject.likes,
            description: imageObject.description || "Random Description"

        }
    });

    generateUI(imagesData);
}



getData();