console.log("Js virker");

// hvilken knap har brugeren trykket på, lyt efter click
// hver enkelt knap
// const sten = document.getElementById("sten");
// sten.addEventListener("click", function() {
    //     const valg = "sten";
    //     console.log(valg);
    // })
    // istedet henter jeg alle knapper på en gang
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

/*Er nået her til!! */
//  sammenlign de to valg med hinanden, hvem vinder if/else
function sammenlignValg (){

}
// opdater score, en tæller

// Vis resultat på siden, opdatere DOM
