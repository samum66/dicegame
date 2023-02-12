
let counterOfDouble=0;                       


//random number from 1 to 6

function magic(){
    const resultText=document.querySelector("#result")
    const counterDoubleText=document.querySelector("#counter")

//first dice

    let firstRandom = Math.floor(Math.random()*6)+1 ;
    let firstDice = "img/"+firstRandom+`.jpg`;
    let img1=document.querySelectorAll(`img`)[0].setAttribute(`src`,firstDice);

//second dice

    let secondRandom = Math.floor(Math.random()*6)+1 ;
    let secondDice = "img/"+secondRandom+`.jpg`;
    let img2=document.querySelectorAll(`img`)[1].setAttribute(`src`,secondDice);

    console.log(firstRandom);
    console.log(secondRandom);

//counter
             
    if(firstRandom == secondRandom){
    resultText.innerText="כל הכבוד! יש דאבל"
    counterOfDouble++
    counterDoubleText.innerText = `כמות הפעמים שיצא לך דאבל : ${counterOfDouble} `
    }else{
        resultText.innerText=""

    }
    console.log("the double counter is: "+counterOfDouble);

}

