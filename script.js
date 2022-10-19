var database = [
{
    username: "Jordan8way",
    password: "Zerotomastery"
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

var userNamePrompt = prompt("What is your username?");
var passwordPrompt = prompt("what is your password?");

function signIn(user, pass) {
    if (user === database[0].username &&
        pass === database[0].password) {
            console.log(newsFeed);
        }
    else {
        alert("Sorry username or password not recognised.")
    }
}

signIn(userNamePrompt, passwordPrompt);