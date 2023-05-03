const inputSatz = document.querySelector("#zeichenkette");
//console.log(inputSatz);
const inputFindeMe = document.querySelector("#searchInput");
//console.log(inputFindeMe);

const outputVorne = document.querySelector(".vordererTeil");
const outputHinten = document.querySelector(".hintererTeil");





function satzTrennen() {

    let inputValueSatz = inputSatz.value;
    console.log(inputValueSatz);

    let inputValueWort = inputFindeMe.value;
    console.log(inputValueWort);

    let ergebnisSuche = inputValueSatz.includes(inputValueWort);
    console.log(ergebnisSuche);
    // mit include wird geschaut ob sich der Wert der Variable inputValueWort innerhalb dem String/der Variable inputValuesatz befindet
    // ergebnisSuche dann entweder true oder false

    
    if (ergebnisSuche == true && document.querySelector('#davorTr').checked){
        // heißt wenn ergebnisSuche true UND radio Btn DAVOR trennen ausgewählt ist, trenne inputValueSatz wie folgt:

        let index = inputValueSatz.indexOf(inputValueWort);
        //sucht die Position von inputValueWort im String inputValueSatz
        let vorne = inputValueSatz.slice(0, index);
        // gibt den Teil vor dem inputValueWort (Index aus) - also von Zeichen 0 bis Index
        let hinten = inputValueSatz.slice(index);
        // gibt den Teil des Strings aus der sich hinter dem inputValueWort (Index befindet)
  
        outputVorne.innerHTML = vorne;
        // gibt den vorderen Teil des Strings unten im 1.p tag aus
        outputHinten.innerHTML = hinten;
        // gibt den hinteren Teil des Strings unten im 2.p tag aus


    } else if (ergebnisSuche == true && document.querySelector('#danachTr').checked) {
        // heißt wenn ergebnisSuche true UND radio Btn DANACH trennen ausgewählt ist, trenne inputValueSatz wie folgt:
        
        let index = inputValueSatz.indexOf(inputValueWort);
        //sucht die Position von inputValueWort im String inputValueSatz
        let vorne = inputValueSatz.slice(0, index + inputValueWort.length);
        // gibt den Teil vor dem inputValueWort (Index aus) - also von Zeichen 0 bis Index und schließt das gesuchte Wort (inputValueWort) mit ein
        let hinten = inputValueSatz.slice(inputValueWort.length + index);
        //gibt den Teil des Strings aus der sich hinter dem inputValueWort (Index befindet)

        outputVorne.innerHTML = vorne;
        outputHinten.innerHTML = hinten;

    } else if (ergebnisSuche == false) {
        outputVorne.innerHTML = "Das zeichen konnte leider nicht gefunden werden";
        outputHinten.innerHTML = inputValueSatz;
    }
}
