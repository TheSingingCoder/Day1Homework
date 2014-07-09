//Day One Homework

//0
var nameButton = document.getElementById("nameButton");

//1
var AlertThings = function () {
    "use strict";
    var name = document.getElementById("name").value;
    alert(name);
};

nameButton.onclick = AlertThings;

//2
var streetButton = document.getElementById("streetButton");
var streetCheckButton = document.getElementById("streetCheckButton");

var street = "";

streetButton.onclick = function () {
    "use strict";
    street = document.getElementById("street").value;
};
streetCheckButton.onclick = function () {
    "use strict";
    alert(street);
};

//3 - 4
var bookButton = document.getElementById("bookButton");
var book = "";
bookButton.onclick = function () {
    "use strict";
    book = document.getElementById("book").value;
    document.getElementById("bookDiv").innerHTML = book;
    document.getElementById("book").value = "";
};

//5
var petsButton = document.getElementById("petsButton");
var pets = [];
petsButton.onclick = function () {
    "use strict";
    pets.push(" " + document.getElementById("pets").value);
    document.getElementById("petsDiv").innerHTML = pets;
    document.getElementById("pets").value = "";
};

//6
var ageButton = document.getElementById("ageButton");
ageButton.onclick = function () {
    "use strict";
    var age = Number(document.getElementById("age").value);
    age += 2;
    alert("In 2016 you will be " + age + "!");
};

//7
var mottoButton = document.getElementById("mottoButton");
var motto = "";
mottoButton.onclick = function () {
    "use strict";
    motto = document.getElementById("motto").value;
    document.getElementById("motto").value = motto.split(' ').reverse().join(" ");
};

//8
var signatureButton = document.getElementById("signatureButton");
var signature = "";
signatureButton.onclick = function () {
    "use strict";
    signature = document.getElementById("signature").value;
    if (signature === "") {
        alert("Please include your electronic signature.");
    }
    else {
        document.getElementById("signatureDiv").innerHTML = signature;
    }
    document.getElementById("signature").value = "";
};