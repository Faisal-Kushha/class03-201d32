'use strict';
alert('Welcome to my page')

let username = prompt('What is your name?');
let anothername = '';
if (username) {
    alert('hello ' + username)
}

else if(!anothername){
    alert('please enter your name')
}

alert('you have to answer these questions')


let username1 = prompt('are you a fan of Real Madrid ?')
switch (username1.toLowerCase()){
    case "yes" :
        case "y" :
        alert('welcome to my page '+username);
        console.log('welcome to my page ');
        break;
        case "no" :
            case "n" :
            alert('I am so sad '+ username);
            console.log('I am so sad ');
            break;
}

let username2 = prompt('is the main color of Real Madrid White ?');
console.log(username2);
while (username2 != 'yes'){
    // console.log(yes);
   username2 = prompt('your answer is wrong');
}

let username3 = prompt('Is Real Madrid the first clup which tooke 3 Champions league in row?');
console.log(username3);
if (username3 == 'yes'){
    alert('go a head');
}
while (username3 != 'yes') {

username3 = prompt('your answer is wrong');



}

    


let guess=0;
while ( guess < 4) {
let userchamp = prompt(' how many champions league cup does real madrid won?');
if ( userchamp == 13)
{
    alert ( 'correct');
    break;
}
else if ( userchamp >= 17 ){
alert("too high");
guess++;
}
else if ( userchamp <=10 ){
    alert("too low");
    guess++;
    }

if ( guess == 4) {

    alert ( ' you have finishied all of your tries , the correct answer is 13');
        break;
    }
    else {

        alert ( 'try again ');
    }


}
 let maxtries = 5;
let rewards = ['2017', '2018','2016'];
for (var i=0; i< 5 ;i++){

    let username6 = prompt(' name one of the years that Real Madrid won a champions leage cup?');
    if (username6 == rewards [0]){alert ('correct');
    break;
 }

 else if (username6 == rewards [1]){alert ('correct');
 break;
}
else if (username6 == rewards [2]){alert ('correct');
break;
}
 if (maxtries == 1)
{
    alert ('you have finished your tries the correwct answer is '+rewards);
    break;

}
else {
    alert (' try again ');
    maxtries--;
}


}








       