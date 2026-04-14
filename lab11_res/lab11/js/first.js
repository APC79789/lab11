// me is thinking yes yes
//1. erm preparing some rizz notes
//2. practice them
//3. attempt rizz
//4. successful/fail in gaining some of that meat

// step 1, gather the rizz notes
// step 1, spot the related HTML elements and assign them to variables
var btn1 = document.getElementById("submit");
var theH2 = document.getElementById("greetingMsg");
var theH1 = document.getElementById("title");
var un = document.getElementById("username");

//step 2, write the script
//step 2, write what WILL happen
function sayHello() {
    theH2.textContent = "Good day! Welcome to Rizz Culture!";
    //theH1.textContent = "Welcome to Rizz somethinf something"
    theH1.textContent = un.value;
}

//step 3, give the script ot the user
//step3, where ya want to hide the bomb?
btn1.addEventListener("click", sayHello, false);
un.addEventListener("blur", sayHello, false);

//step 4, ther person perform the rizz
//step 4, go to website then test it

var today = new Date();
var day = today.getDate();
var month = today.getMonth();
var hour = today.getHours();
var greeting = "Hello, time is now " + month + "/" + day + " at " + hour + ":" + MediaElementAudioSourceNode;
var btnSignup = document.getElementById("submit")

//step 2
function displayTime() {
    //   var greetingElement = document.getElementById("greeingMsg");
    //   greetingElement.textContent = greeting;
    if (time < 12) {
        it is morning
    } else if (time < 18){
        It is afternoon 
    } else {
        it is evening 
    }
}

//step 3
btnSignup.addEventListener("click", displayTime, false);