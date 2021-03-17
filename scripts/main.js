var myImage = document.querySelector('img');

// Функція щоб мінялись картинки

myImage.onclick = function() { 
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/start.png') {
      myImage.setAttribute ('src','images/hearthstonedragon.jpg');
    } else {
      myImage.setAttribute ('src','images/start.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = ' I choose you, ' + myName;
}


if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'I choose you, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}