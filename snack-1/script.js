// Crea un array di 10 oggetti che rappresentano una zucchina, indicando
// per ognuna varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.


var zucchine = [
    {"varietà": "Moscata",
    "peso": 30,
    "lunghezza": 20,
},
    {"varietà": "Turbante",
    "peso": 20,
    "lunghezza": 32,
    },

    {"varietà": "Iron Cup",
    "peso": 10,
    "lunghezza": 20,
},
    {"varietà": "Delica",
    "peso": 25,
    "lunghezza": 32,
    },

    {"varietà": "Mini Kawaii Lady.",
    "peso": 10,
    "lunghezza": 20,
},
    {"varietà": "Butternut Violina",
    "peso": 50,
    "lunghezza": 32,
    },
    {"varietà": "Hokkaido",
    "peso": 10,
    "lunghezza": 20,
},
    {"varietà": "Spaghetti",
    "peso": 20,
    "lunghezza": 32,
    },
    {"varietà": "Verde",
    "peso": 30,
    "lunghezza": 20,
}
];

var pesoTotale = 0;
for(var i = 0; i< zucchine.length; i ++){
    console.log(`il peso della zucchina singola: ${zucchine[i].peso} grammi`);
    
    pesoTotale = parseInt(pesoTotale + zucchine[i].peso);
}

console.log(`il peso totale: ${pesoTotale} grammi`);

