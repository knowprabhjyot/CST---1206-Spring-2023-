
async function fetchMeUserInfo() {
    let data = await fetch('https://reqres.in/api/users');
    let dataWithJSON = await data.json();
    let finalOutputArray = dataWithJSON.data;

    createUI(finalOutputArray);

}


function createUI(finalOutputArray) {


    let container = document.querySelector('#maincontainer');


    for (let i = 0 ; i < finalOutputArray.length; i++) {

        // Main Parent Tag which will have a class called as Card
        let cardElement = document.createElement("div");
        cardElement.classList.add("card");

        // image tag which will hold the user image
        let img = document.createElement("img");
        img.src = finalOutputArray[i].avatar;
        img.classList.add("avatar");


        cardElement.appendChild(img);

        // Create a div element for Name and email (PARENT)
        let contentInfo = document.createElement('div');

        // Full name of the user
        let fullName = document.createElement('p');
        fullName.textContent = `${finalOutputArray[i].first_name} ${finalOutputArray[i].last_name}`;

        contentInfo.appendChild(fullName);


        // email of the user
        let email = document.createElement('p');
        email.textContent = finalOutputArray[i].email;

        contentInfo.appendChild(email);

        cardElement.appendChild(contentInfo);

        // final container containing all the card elements we created above
        container.appendChild(cardElement);
        console.log(finalOutputArray[i].id);
    }

}

fetchMeUserInfo();

