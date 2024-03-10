//Changing images on click
const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    //save the <img> element source to mySrc variable
    if (mySrc === "images/firefox-icon.png") {
        //Check if the default image is actually the one being displayed
        myImage.setAttribute("src", "images/firefox2.png");
        //if that's the case, change image on click to new src
    } else {
        myImage.setAttribute("src", "images/firefox-icon.png");
        //otherwise if it is already changed, revert back to OG image
    }
};

//!Adding a personalized welcome message
//Changes page title to a custom welcome msg and persists.
/* We have added a <button> element in the `index.html` doc, and we'll reference to it and the heading, storing each inside variables: */  

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

//Then to set the personalized greeting, use the following function:

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `You're so cool, ${myName}`
    }
};

//The following condition block structures the app when it's first loaded

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `You're so cool, ${storedName}`;
}

//Adding this `onclick` event handler on the button. When it is clicked, setUsername runs.
myButton.onclick = () => {
    setUserName();
}

//To avoid null and blank errors, we're going to update the 'setUserName()' function ☝️
