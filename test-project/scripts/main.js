let myImage = document.querySelector('img');
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'pictures/forest.jpg') {
        myImage.setAttribute('src', 'pictures/minecraft.png');
    } else {
        myImage.setAttribute('src', 'pictures/forest.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name: ');
    if(!myName){
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'I am fan of minecraft my name is: ' + myName;
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'I am fan of minecraft my name is: ' + storedName; 
}

myButton.onclick = function() {
    setUserName();
}