
const APIKEY = "";

// Path Parameters
// http://facebook.com/prabh/profile/user

// Query Parameters (Where you pass data in key-value pair)
// http://facebook.com?user=prabh&type=profile&value=user


// When you are using AXIOS , you don;t have to convert the promise result to JSON,
// because its already done for you by Axios

// Just like Fetch, Axios is also a HTTP CLient to communicate with the server

const fetchesImages = async () => {
    try {
        return await axios.get(`https://api.unsplash.com/photos/?client_id=${APIKEY}`);
    } catch(error) {
        console.log(error);
        alert("There was an error", error);
    }
}

async function getData() {
    const data = await fetchesImages();
    console.log(data, "We get from API");
}

getData();