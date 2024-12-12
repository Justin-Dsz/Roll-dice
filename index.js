var result1 = Math.floor(Math.random()*6) + 1;
var result2 = Math.floor(Math.random()*6) + 1;
if (result1>result2){
    document.querySelectorAll("h1")[1].textContent="🚩Player 1 Wins!";
}
else if (result1<result2){
    document.querySelectorAll("h1")[1].textContent="Player 2 Wins!🚩";
}
else {
    document.querySelectorAll("h1")[1].textContent="Draw";
}

switch (result1){
    case 1:
        document.querySelectorAll(".dice1 .dots")[4].classList.add("visi");
        break;
    case 2:
        document.querySelectorAll(".dice1 .dots")[2].classList.add("visi");
        document.querySelectorAll(".dice1 .dots")[6].classList.add("visi");
        break;
    case 3:
        document.querySelectorAll(".dice1 .dots")[2].classList.add("visi");
        document.querySelectorAll(".dice1 .dots")[4].classList.add("visi");
        document.querySelectorAll(".dice1 .dots")[6].classList.add("visi");
        break; 
    case 4:
        document.querySelectorAll(".dice1 .dots")[0].classList.add("visi");
        document.querySelectorAll(".dice1 .dots")[2].classList.add("visi");
        document.querySelectorAll(".dice1 .dots")[6].classList.add("visi");
        document.querySelectorAll(".dice1 .dots")[8].classList.add("visi");  
        break;
    case 5:
        document.querySelectorAll(".dice1 .dots")[0].classList.add("visi");
        document.querySelectorAll(".dice1 .dots")[2].classList.add("visi");
        document.querySelectorAll(".dice1 .dots")[6].classList.add("visi");
        document.querySelectorAll(".dice1 .dots")[8].classList.add("visi");
        document.querySelectorAll(".dice1 .dots")[4].classList.add("visi"); 
        break;
    case 6:
        document.querySelectorAll(".dice1 .dots")[0].classList.add("visi");
        document.querySelectorAll(".dice1 .dots")[2].classList.add("visi");
        document.querySelectorAll(".dice1 .dots")[3].classList.add("visi");
        document.querySelectorAll(".dice1 .dots")[5].classList.add("visi");
        document.querySelectorAll(".dice1 .dots")[6].classList.add("visi");
        document.querySelectorAll(".dice1 .dots")[8].classList.add("visi");  
        break;              
}

switch (result2){
    case 1:
        document.querySelectorAll(".dice2 .dots")[4].classList.add("visi");
        break;
    case 2:
        document.querySelectorAll(".dice2 .dots")[2].classList.add("visi");
        document.querySelectorAll(".dice2 .dots")[6].classList.add("visi");
        break;
    case 3:
        document.querySelectorAll(".dice2 .dots")[2].classList.add("visi");
        document.querySelectorAll(".dice2 .dots")[4].classList.add("visi");
        document.querySelectorAll(".dice2 .dots")[6].classList.add("visi");
        break; 
    case 4:
        document.querySelectorAll(".dice2 .dots")[0].classList.add("visi");
        document.querySelectorAll(".dice2 .dots")[2].classList.add("visi");
        document.querySelectorAll(".dice2 .dots")[6].classList.add("visi");
        document.querySelectorAll(".dice2 .dots")[8].classList.add("visi");  
        break;
    case 5:
        document.querySelectorAll(".dice2 .dots")[0].classList.add("visi");
        document.querySelectorAll(".dice2 .dots")[2].classList.add("visi");
        document.querySelectorAll(".dice2 .dots")[6].classList.add("visi");
        document.querySelectorAll(".dice2 .dots")[8].classList.add("visi");
        document.querySelectorAll(".dice2 .dots")[4].classList.add("visi"); 
        break;
    case 6:
        document.querySelectorAll(".dice2 .dots")[0].classList.add("visi");
        document.querySelectorAll(".dice2 .dots")[2].classList.add("visi");
        document.querySelectorAll(".dice2 .dots")[3].classList.add("visi");
        document.querySelectorAll(".dice2 .dots")[5].classList.add("visi");
        document.querySelectorAll(".dice2 .dots")[6].classList.add("visi");
        document.querySelectorAll(".dice2 .dots")[8].classList.add("visi"); 
        break;               
}

