// Scrivi una funzione che accetti una stringa come argomento e la ritorni
// girata (es. Ciao -> oaiC)

function wordPalindrome(wordToControl){
    var wordSplit = wordToControl.split("").reverse();
    var wordRevers = wordSplit.join('');
   return wordRevers;
 }



console.log(wordPalindrome("parola"));
