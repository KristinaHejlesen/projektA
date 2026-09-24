
// flyttet op og ud af funktionen update score, da disse skal bruges af flere funktioner.
const pcValgVisning = document.getElementById("computerRes");
const brugerValgVisning = document.getElementById("brugerRes");
const resultatVisning = document.getElementById("resultat");
const scoreVisning = document.getElementById("score");

    // opdater score, en tæller. Har flyttet denne her op da det er nemmere at læse, variabler kunne godt stå i bunden, da hele scriptet er kørt inden brugeren klikker på en knap.
    let tællerPC = 0; 
    let tællerBruger = 0;
    // lytter efter klik på de tre knapper
    const knapper = document.querySelectorAll(".valgbtn");
    knapper.forEach(function(knap){
        knap.addEventListener("click", function(){
            // gemmer brugernes valg
            const brugerValg = knap.id;
            // når brugeren klikker på en af knapperne skal "computeren" foretage sit valg, derfor kaldes funktionen computervalg, det valg gemmes i en variabel GemtPCValg så det kan anvendes til sammenligning.
            const GemtPCValg = computerValg();
            // gemmer resultatet fra sammenlignValg funktionen i resultat
            const resultat = sammenlignValg(brugerValg, GemtPCValg);
            // sammenligner resultatet med computer eller bruger der vandt og lægger en til tælleren. uafgjort så sker der ikke noget.
            if(resultat === "Computeren vandt!"){
                tællerPC++
            } else if (resultat === "Du vandt!"){
                tællerBruger++
            } else if(resultat === "uafgjort!"){

            }
            updateScore(brugerValg, resultat, GemtPCValg);
    })
})
// generer et tilfældigt valg fra computeren math.random
const valg = ["sten", "saks", "papir"];
function computerValg(){
    // math.floor sørger for at jeg får et helt tal, math.radom giver et tilfældigt tal mellem 0 og 1, men jeg skal bruge et tal mellem 0 og 2 og derfor ganger jeg med tre. math.random når aldrig 1 så derfor bliver der ikke et valg på nummer 3.
    const PCvalg = Math.floor(Math.random()*3);
    // anvender return til at returnere værdien af PCvalg, altså det nummer i mit array som math.random har vlagt
    return valg[PCvalg];
}

//  sammenlign de to valg med hinanden, hvem vinder if/else
function sammenlignValg (brugerValg, PCvalg){
    // hvis computer og bruger vælger det samme, skal teksten uafgjort returneres
    if(PCvalg === brugerValg) {
        return "uafgjort!"
    }
    // hvis PCvalg vælger sten og bruger vælger saks, computeren vinder. er skrevet med && der betyder "og", samt || i mellem hver betingelse der betyder "eller", hvis det ikke er en af disse så skal der returnes "Du vandt" da brugeren vinder i de andre valgmuligheder.
if(
    (PCvalg === "sten" && brugerValg === "saks") ||
    (PCvalg === "papir" && brugerValg === "sten") ||
    (PCvalg === "saks" && brugerValg === "papir")
){
        return "Computeren vandt!"
    } else
    {
        return "Du vandt!"
    }
}

// opdater score, en tæller.
// Vis resultat på siden, opdatere DOM
function updateScore(brugerValg, resultat, GemtPCValg){
    // anvender textContent til at indsætte computerens valg
pcValgVisning.textContent = `${GemtPCValg}`;
// anvender textContent til at indsætte brugerens valg
brugerValgVisning.textContent = `${brugerValg}`;
// anvender textContent til at indsætte resultatet fra sammenlignings funktionen
resultatVisning.textContent = `${resultat}`;
scoreVisning.textContent = `Computer score: ${tællerPC} Din score: ${tællerBruger}`;
}

// nyt spil
function nytSpil(){
    // henter element knappen med nyt spil via ID
    const nytSpilBtn = document.getElementById("nytspil");
    // lytter efter klik på knappen og nulstiller begge tæller, samt opdater DOM
    nytSpilBtn.addEventListener("click", function(){
        tællerPC = 0; 
        tællerBruger = 0;
        pcValgVisning.textContent = "";
brugerValgVisning.textContent = "";
resultatVisning.textContent = "";
scoreVisning.textContent = `Computer score:${tællerPC} Din score: ${tællerBruger}`;
    })
}
// kalder funktionen
nytSpil();