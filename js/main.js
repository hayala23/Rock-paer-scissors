let randomNumber ="";
let victorstatus =""
let playerscore= 0
let opscore=0
let scoreLimit ="false"
function reset(){
    randomNumber ="";
    victorstatus =""
    playerscore= 0
    opscore=0
    document.getElementById("score1").innerHTML=playerscore
    document.getElementById("score2").innerHTML=opscore
    document.body.style.backgroundColor=" #FFBFBF";
    scoreLimit ="false"
    document.getElementById("reset").style.opacity="0"
    document.getElementById("Win").innerHTML=""
}

function play(input){
    if(scoreLimit == "false"){

        
    randomNumber=Math.floor(Math.random()*3+1);
    console.log(randomNumber);
    let option='';
    if(randomNumber===1){
        option='paper';
    }else if(randomNumber===2){
        option='rock';
    }else{
        option='scissors';
    }
    console.log(option);

    if(input==="rock"){
        document.getElementById("img1").src="images/rock.svg"
        if(option==="rock"){
            document.getElementById("img2").src="images/rock.svg"
            console.log('ITS A DRAW!');
                victorstatus="draw";
                document.getElementById("Win").innerHTML="Draw!"
        }
        else if(option==="paper"){
            document.getElementById("img2").src="images/paper.svg"
            console.log('YOU LOST!');
            victorstatus="lost";
            document.getElementById("Win").innerHTML="The CPU won a point!"
        }else if(option==="scissors"){
            document.getElementById("img2").src="images/scissors.svg"
            console.log('YOU WON!');
            victorstatus="won";
            document.getElementById("Win").innerHTML="You won a point!"
        }

    }
    else if(input==="paper"){
        document.getElementById("img1").src="images/paper.svg"
        if(option==="rock"){
            document.getElementById("img2").src="images/rock.svg"
            console.log('YOU WON!');
            victorstatus="won";
            document.getElementById("Win").innerHTML="You won a point!"
        }
        else if(option==="paper"){
            document.getElementById("img2").src="images/paper.svg"
            victorstatus="draw";
            document.getElementById("Win").innerHTML="Draw!"
        }else if(option==="scissors"){
            document.getElementById("img2").src="images/scissors.svg"
            console.log('YOU LOST!');
            victorstatus="lost";
            document.getElementById("Win").innerHTML="The CPU won a point!"
        }
    }
    else if(input==="scissors"){
        document.getElementById("img1").src="images/scissors.svg"
        if(option==="rock"){
            document.getElementById("img2").src="images/rock.svg"
            console.log('YOU LOST!');
            victorstatus="lost";
            document.getElementById("Win").innerHTML="The CPU won a point!"
        }
        else if(option==="paper"){
            document.getElementById("img2").src="images/paper.svg"
            victorstatus="won";
            document.getElementById("Win").innerHTML="You won a point!"

        }else if(option==="scissors"){
            document.getElementById("img2").src="images/scissors.svg"
            victorstatus="draw";
            document.getElementById("Win").innerHTML="Draw!"
        }
    }
    if(victorstatus==="won"){
        playerscore+=1;
        document.getElementById("score1").innerHTML=playerscore
    }   else if(victorstatus==="lost"){
        opscore+=1;
        document.getElementById("score2").innerHTML=opscore
    }
   
    document.getElementById("img1").classList.add("left")

    document.getElementById("img2").classList.add("right")
    setTimeout(function(){
        document.getElementById("img1").classList.remove("left")
         document.getElementById("img2").classList.remove("right")
    },1000)
    if(playerscore>=5){
        console.log("You Win!");
        document.getElementById("Win").innerHTML="You Win!"
        document.body.style.backgroundColor="#009900";
        document.getElementById("reset").style.opacity="1"
        scoreLimit = "true"

    }else if(opscore>=5){
        console.log("You Lose!");
        document.getElementById("Win").innerHTML="You Lose!"
        document.body.style.backgroundColor="#E34234";
        document.getElementById("reset").style.opacity="1"
        scoreLimit = "true"
    }
    }
}
