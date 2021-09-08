// Crea un array di 10 oggetti che rappresentano una zucchina, indicando
// per ognuna varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.


var zucchine = [
    {"varietà": "1",
    "peso": 300,
    "lunghezza": 20,
},
    {"varietà": "2",
    "peso": 200,
    "lunghezza": 32,
    },

    {"varietà": "3",
    "peso": 100,
    "lunghezza": 20,
},
    {"varietà": "4",
    "peso": 250,
    "lunghezza": 32,
    },

    {"varietà": "5",
    "peso": 100,
    "lunghezza": 20,
},
    {"varietà": "6",
    "peso": 50,
    "lunghezza": 32,
    },
    {"varietà": "7",
    "peso": 100,
    "lunghezza": 20,
},
    {"varietà": "8",
    "peso": 200,
    "lunghezza": 32,
    },
    {"varietà": "9",
    "peso": 300,
    "lunghezza": 20,
}
];

var pesoTotale = 0;
for(var i = 0; i< zucchine.length; i ++){
    console.log(zucchine[i].peso);
    pesoTotale = pesoTotale + zucchine[i].peso;
}

console.log("il peso totale: " + pesoTotale );
