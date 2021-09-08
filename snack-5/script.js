// Scrivi una funzione che accetti tre argomenti:
// un array e due numeri (“a” più piccolo di “b” e “b” grande al massimo
// quanto il numero di elementi dell’array).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione
// compresa tra “a” e “b”

function getRndInteger(min, max) {
  randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber;
}


alert("inserisci due numeri tra 1 e 5, il primo numero deve essere più piccolo del secondo");
var numA = parseInt(prompt("Inserisci il primo numero"));
while(isNaN(numA) == true){
  var numA = parseInt(prompt("Errore,Inserisci il primo numero"));
}
var numB = parseInt(prompt("Inserisci il secondo numero"));
while(numA > numB || (isNaN(numB) == true)){
  var numB = parseInt(prompt("Errore,il secondo numero che deve essere più grande del primo"));
}

function myfunction(arr,numA, numB){
var nuovoArray = [];
var posizioneDelArr = [];

        for(var i=0; i<arr.length; i++){
          posizioneDelArr.push(arr[i]);
          // console.log(posizioneDelArr.indexOf(arr[i]));
                if(posizioneDelArr.indexOf(arr[i])>= numA && posizioneDelArr.indexOf(arr[i])<= numB){
                  // console.log(posizioneDelArr.indexOf(arr[i]));
                  // console.log(posizioneDelArr[i]);
                  nuovoArray.push(posizioneDelArr[i]);
                }
              }
              console.log(nuovoArray);
    }

  
    var arrStringa = ["mela","pera","fragola","ananas","cocco" ];
    myfunction(arrStringa,numA, numB)

    var arrNum = [1,2,3,4,5];
    myfunction(arrNum,numA, numB)

  





