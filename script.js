var database = [
{
    username: "Jordan8way",
    password: "Zerotomastery"
},
{
    username: "Lauren",
    password: "Sweep"
},
{
    username: "Bob",
    password: "Fixit"
}
];

var newsFeed = [
{
    username: "Jordan8way",
    timeline: "Javascript is fun!"
},
{
    username: "Andrei",
    timeline: "WHASSSSSAAAAPPPPP"
},
{
    username: "Lauren",
    timeline: "psychoneuroimmunology"
}
];

function isUserValid(username, password) {
    for (var i=0; i < database.length; i++){
        if (username === database[i].username &&
            password === database[i].password) {
                return true;
            }
    }
    return false;
}

function signIn(username, password) {
    if (isUserValid(username, password)) {
        console.log(newsFeed)
    }
    else {
        console.log("Sorry username or password not recognised.")
    }
}
var userNamePrompt = prompt("What is your username?");
var passwordPrompt = prompt("what is your password?");

signIn(userNamePrompt, passwordPrompt);