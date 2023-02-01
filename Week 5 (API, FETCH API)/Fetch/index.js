// JSON Javascript Object Notation

let object = {
    name: "Prabh",
    age: "Younger",
    20: "Not my age"
}

let stringifiedData = JSON.stringify(object); // You will use this when we use POST API!

let parsedData = JSON.parse(stringifiedData);



// URL vs URI

// FETCH API USING .THEN And .CATCH BLOCK

fetch('https://reqres.in/api/users/2').then((response) => {
    let jsonOutput = response.json();
    return jsonOutput; // You have to returtn the json object
}).then((jsonData) => {
    console.log(jsonData); // this is the json value returend by the reqres server
}).catch((error) => {
        console.log(error);
});

//  FETCH API USING async await

async function getUserData() {
    let finalOutputWithJSON;
    try {
        let output = await fetch('https://reqres.in/api/users/2');
         finalOutputWithJSON = output.json();
    } catch(error) {
        console.log("There was an error", error);
    }

    return finalOutputWithJSON;
}

let data = await getUserData();
console.log(data)