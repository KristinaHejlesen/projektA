console.log("Js virker");


    // opdater score, en tæller. Har flyttet denne her op da det er nemmere at læse, variabler kunne godt stå i bunden, da hele scriptet er kørt inden brugeren klikker på en knap.
    let tællerPC = 0; 
    let tællerBruger = 0;
    // lytter efter klik på de tre knapper
    const knapper = document.querySelectorAll(".valgbtn");
    knapper.forEach(function(knap){
        knap.addEventListener("click", function(){
            // gemmer brugernes valg
            const brugerValg = knap.id;
            
            // tjekker i konsolen at det virker og udskriver brugerens valg ved klik, senere skal den kører en funktion ved klik
            console.log(brugerValg);
            // når brugeren klikker på en af knapperne skal "computeren" foretage sit valg, derfor kaldes funktionen computervalg, det valg gemmes i en variabel GemtPCValg så det kan anvendes til sammenligning.
            const GemtPCValg = computerValg();
            // tester det i konsolen at det bliver gemt
            console.log('GemtPCValg:', GemtPCValg);
            // gemmer resultatet fra sammenlignValg funktionen i resultat
            const resultat = sammenlignValg(brugerValg, GemtPCValg);
            console.log('resultat:', resultat)
            // sammenligner resultatet med computer eller bruger der vandt og lægger en til tælleren. uafgjort så sker der ikke noget.
            if(resultat === "Computeren vandt!"){
                tællerPC++
            } else if (resultat === "Du vandt!"){
                tællerBruger++
            } else if(resultat === "uafgjort!"){

            }
            console.log(tællerBruger); //test af tæller
            
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
// tester min funktion virker, hvad udskriver den i konsollen.
console.log(computerValg());

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
// test af funktionen
console.log(sammenlignValg("sten", "saks")); //output skal være "du vandt!" - det virker
console.log(sammenlignValg("papir", "saks")); //output skal være "computer vandt!" -det virker

// opdater score, en tæller.
// flyttet op for læsbarhedens skyld

// er nået her til!
// Vis resultat på siden, opdatere DOM
