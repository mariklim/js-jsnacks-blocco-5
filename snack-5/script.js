// Scrivi una funzione che accetti tre argomenti:
// un array e due numeri (“a” più piccolo di “b” e “b” grande al massimo
// quanto il numero di elementi dell’array).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione
// compresa tra “a” e “b”

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
    myfunction(arrStringa,1, 3)

    var arrNum = [1,2,3,4,5];
    myfunction(arrNum,1, 3)

    






// arr 6
// numA 1
// numB 3

// arr[i]>numA |
// 0 > 1 false
// 1 > 1 false
// 2 > 1 true
// 3 > 1 true
// 4 > 1 true
// 5 > 1 true

// arr[i]<numB |
// 0 < 3 true
// 1 < 3 true
// 2 < 3 true
// 3 < 3 false
// 4 < 3 false
// 5 < 3 false