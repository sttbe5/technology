var r,score=0,grade=1 ,lastHumanChoice,humanchoice;
var lastwinner="noone",lastcomputerchoice="rock";
function rock(){
    r=3*Math.random();
    document.getElementById("myChoice").innerHTML="<img src=\"img/rock.png\" height=\"155\" width=\"155\"/>";
    humanchoice="rock"
    judge("rock",)
    lastHumanChoice="rock"
}
function scissors(){
    r=3*Math.random();
    document.getElementById("myChoice").innerHTML="<img src=\"img/scissors.png\" height=\"155\" width=\"155\"/>";
    humanchoice="scissors"
    judge("scissors",)
    lastHumanChoice="scissors"
}
function paper(){
    r=3*Math.random();
    document.getElementById("myChoice").innerHTML="<img src=\"img/paper.png\" height=\"155\" width=\"155\"/>";
    humanchoice="paper"
    judge("paper",)
    lastHumanChoice="paper"
}
function  judge(myChoice,computerResul){
    r=3*Math.random();
    var computerResul;
    if (grade==1){
        computerResul=onlyRocker();
    }
    else if (grade==2){
        computerResul=learnFromHumamn();
    }
    else if (grade==3){
        computerResul=winneragain();
        lastcomputerchoice=computerResul;
    }
    else if (grade==4){
        computerResul=losechange();
        lastcomputerchoice=computerResul
    }
    else if (grade==5){
        computerResul=lovepaper();
    }
     else if (grade==6){
        computerResul=randomplayer();
    }
     else if (grade==7){
        computerResul=cheatingman(humanchoice);
    }
    if (myChoice=="rock"){
        console.log(computerResul)
        if (computerResul=="rock"){
            lastwinner="noone"
        }
        else if (computerResul=="scissors"){
            lastwinner="human"
            score+=1
        }
        else if (computerResul=="paper"){
            lastwinner="com"
            score-=1
        }
    }
    else if (myChoice=="scissors"){
        console.log(computerResul)
        if (computerResul=="rock"){
            score-=1
            lastwinner="com"
        }
        else if (computerResul=="scissors"){
            lastwinner="noone"
        }
        else if (computerResul=="paper"){
            score+=1
            lastwinner="human"
        }
    }
    else if (myChoice=="paper"){
        console.log(computerResul)
        if (computerResul=="rock"){
            score+=1
            lastwinner="human"
        }
        else if (computerResul=="scissors"){
            score-=1
            lastwinner="com"
        }
        else if (computerResul=="paper"){
            lastwinner="noone"
        }
    }
    if (score>=5){
        score=0;
        grade+=1;
    }
    document.getElementById("result").innerHTML="第"+grade+"关,积分"+score;
    if (grade>7){
        document.getElementById("result").innerHTML=score+"分，恭喜通关"
    }
}
function go(){
    r=3*Math.random();
}
function computerChoice(){
    if (r<1){
        document.getElementById("computerChoice").innerHTML="<img src=\"img/rock.png\" height=\"155\" width=\"155\"/>";
        return"rock";
    }
    else if (r<2){
        document.getElementById("computerChoice").innerHTML="<img src=\"img/scissors.png\" height=\"155\" width=\"155\"/>";
        return"scissors";
    }
    else if (r<3){
        document.getElementById("computerChoice").innerHTML="<img src=\"img/paper.png\" height=\"155\" width=\"155\"/>";
        return"paper";
    }
}
function lovepaper(){
    r=3*Math.random();
    var temp
    if (r<0.8){
        document.getElementById("computerChoice").innerHTML="<img src=\"img/rock.png\" height=\"155\" width=\"155\"/>";
        temp="rock";
    }
    else if (r<1.7){
        document.getElementById("computerChoice").innerHTML="<img src=\"img/scissors.png\" height=\"155\" width=\"155\"/>";
        temp="scissors";
    }
    else if (r<3){
        document.getElementById("computerChoice").innerHTML="<img src=\"img/paper.png\" height=\"155\" width=\"155\"/>";
        temp="paper";
    }
    document.getElementById("computername").innerHTML="布布";
    document.getElementById("computerChoice").innerHTML="<img src=\"img/"+temp+".png\" height=\"155\" width=\"155\"/>";
    return temp;
}
function randomplayer(){
    r=3*Math.random();
    var temp
    if (r<1){
        document.getElementById("computerChoice").innerHTML="<img src=\"img/rock.png\" height=\"155\" width=\"155\"/>";
        temp="rock";
    }
    else if (r<2){
        document.getElementById("computerChoice").innerHTML="<img src=\"img/scissors.png\" height=\"155\" width=\"155\"/>";
        temp="scissors";
    }
    else if (r<3){
        document.getElementById("computerChoice").innerHTML="<img src=\"img/paper.png\" height=\"155\" width=\"155\"/>";
        temp="paper";
    }
    document.getElementById("computername").innerHTML="随机";
    document.getElementById("computerChoice").innerHTML="<img src=\"img/"+temp+".png\" height=\"155\" width=\"155\"/>";
    return temp;
}

function  onlyRocker(){
    document.getElementById("computername").innerHTML="憨狗哥";
    document.getElementById("computerChoice").innerHTML="<img src=\"img/rock.png\" height=\"155\" width=\"155\"/>";
    return"rock";
}
function  learnFromHumamn(){
    document.getElementById("computername").innerHTML="模仿";
    document.getElementById("computerChoice").innerHTML="<img src=\"img/"+lastHumanChoice+".png\" height=\"155\" width=\"155\"/>";
    return lastHumanChoice;
}
function  winneragain(){
    document.getElementById("computername").innerHTML="赢了再出";
    if (lastwinner=="com"){
        document.getElementById("computerChoice").innerHTML="<img src=\"img/"+lastcomputerchoice+".png\" height=\"155\" width=\"155\"/>";
        return lastcomputerchoice ;
    }
    var temp=computerChoice();
    document.getElementById("computerChoice").innerHTML="<img src=\"img/"+temp+".png\" height=\"155\" width=\"155\"/>";
    return temp;
}
function losechange(){
    document.getElementById("computername").innerHTML="输了就换";
    if (lastwinner=="human"){
        var temp=getresultexclude(lastcomputerchoice)
        document.getElementById("computerChoice").innerHTML="<img src=\"img/"+temp+".png\" height=\"155\" width=\"155\"/>";
        return temp ;
    }
    temp=computerChoice();
    document.getElementById("computerChoice").innerHTML="<img src=\"img/"+temp+".png\" height=\"155\" width=\"155\"/>";
    return temp;
}
function  getresultexclude(exclusion){
    var temp=computerChoice();
    if (temp==exclusion){
        return getresultexclude(exclusion)
    }
    else{
        return temp;
    }
}
function cheatingman(humanchoice){
    document.getElementById("computername").innerHTML="作弊怪";
    if (humanchoice=="rock"){
        r=Math.random();
        if (r>0.5){
            document.getElementById("computerChoice").innerHTML="<img src=\"img/paper.png\" height=\"155\" width=\"155\"/>";
            return "paper" ;
        }
       else{
           return  computerChoice();
        }
    }
    else if (humanchoice=="scissors"){
        r=Math.random();
        if (r>0.5){
            document.getElementById("computerChoice").innerHTML="<img src=\"img/rock.png\" height=\"155\" width=\"155\"/>";
            return "rock" ;
        }
        else{
            return  computerChoice();
        }
    }
    else {
        r=Math.random();
        if (r>0.5){
            document.getElementById("computerChoice").innerHTML="<img src=\"img/scissors.png\" height=\"155\" width=\"155\"/>";
            return "scissors" ;
        }
        else{
            return  computerChoice();
        }
    }
}