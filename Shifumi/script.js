const buttons = document.querySelectorAll("button");

const victoiresE = document.getElementsByClassName("victoire");
const egalitesE = document.getElementsByClassName("egal");
const defaitesE = document.getElementsByClassName("defaite");

const game = ["Pierre", "Feuille", "Ciseau"];

let nbVictoires = 0;
let nbDefaites = 0;
let nbEgal = 0;


buttons.forEach((e)=>{
    e.addEventListener("click", ()=>{
        const randomNumber = Math.floor(Math.random() * 3);    
        if(e.textContent == game[randomNumber]){
            nbEgal++;
        }else if(e.textContent == "Pierre" && game[randomNumber] == "Feuille" 
            || e.textContent == "Feuille" && game[randomNumber] == "Ciseau"
            || e.textContent == "Ciseau" && game[randomNumber] == "Pierre"){
            nbDefaites++;
        }else if(e.textContent == "Pierre" && game[randomNumber] == "Ciseau"
            || e.textContent == "Feuille" && game[randomNumber] == "Pierre"
            || e.textContent == "Ciseau" && game[randomNumber] == "Feuille"
        ){
            nbVictoires++;
        } else if(e.textContent == "Réinitialiser le jeu"){
            nbVictoires = 0;
            nbEgal = 0;
            nbDefaites = 0;
            
        } else{
            console.log("Problème");
        }
        victoiresE[0].textContent = nbVictoires;
        egalitesE[0].textContent = nbEgal;
        defaitesE[0].textContent = nbDefaites;
    });
    
    
});





