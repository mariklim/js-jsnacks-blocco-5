// Crea un array di 10 oggetti che rappresentano una zucchina, indicando
// per ognuna varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.


var zucchine = [
    {"varietà": "Moscata",
    "peso": 300,
    "lunghezza": 20,
},
    {"varietà": "Turbante",
    "peso": 200,
    "lunghezza": 32,
    },

    {"varietà": "Iron Cup",
    "peso": 100,
    "lunghezza": 20,
},
    {"varietà": "Delica",
    "peso": 250,
    "lunghezza": 32,
    },

    {"varietà": "Mini Kawaii Lady.",
    "peso": 100,
    "lunghezza": 20,
},
    {"varietà": "Butternut Violina",
    "peso": 50,
    "lunghezza": 32,
    },
    {"varietà": "Hokkaido",
    "peso": 100,
    "lunghezza": 20,
},
    {"varietà": "Spaghetti",
    "peso": 200,
    "lunghezza": 32,
    },
    {"varietà": "Verde",
    "peso": 300,
    "lunghezza": 20,
}
];

var pesoTotale = 0;
for(var i = 0; i< zucchine.length; i ++){
    console.log(zucchine[i].peso);
    pesoTotale = pesoTotale + zucchine[i].peso;
}

console.log(`il peso totale: : ${pesoTotale}` grammi);

