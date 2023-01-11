let displayEl =  document.getElementById("display-el")
let botEl = document.getElementById("bot-el")
let refEl = document.getElementById("ref-el")


function rock(){
 displayEl.innerText="rock!"
 randomNum()
 ref()
}

function paper(){
 displayEl.innerText="paper!"
 randomNum()
 ref()
}

function sci(){
 displayEl.innerText="scissors!"
 randomNum()
 ref()
}

function randomNum(){
    let ranNum=Math.floor(Math.random()*3+1)
console.log(ranNum)
if(ranNum===1){
    botEl.innerText="rock!"
    console.log("rock")}
else if(ranNum===2){
    botEl.innerText="paper!"
    console.log("paper")}
else {
    botEl.innerText="scissors!"
    console.log("scissors")}

  } 



randomNum()

function ref(){
  if(botEl.innerText==displayEl.innerText){
    refEl.innerText="Play again"}
  else if(botEl.innerText=="rock!" && displayEl.innerText=="paper!"){
       refEl.innerText="you win"
   }
  else if(botEl.innerText=="rock!" && displayEl.innerText=="scissors!"){
      refEl.innerText="you lose"
  }
    else if(botEl.innerText=="paper!" && displayEl.innerText=="rock!"){
      refEl.innerText="you lose"
  }
  
   else if(botEl.innerText=="paper!" && displayEl.innerText=="scissors!"){
      refEl.innerText="you win"
  }

   else if(botEl.innerText=="scissors!" && displayEl.innerText=="rock!"){
      refEl.innerText="you win"

  }
 else if(botEl.innerText=="scissors!" && displayEl.innerText=="paper!"){
      refEl.innerText="you lose"
  }
  }


  