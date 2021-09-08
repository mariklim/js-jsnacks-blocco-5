// Crea un array di 10 oggetti che rappresentano una zucchina, indicando
// per ognuna varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.


var zucchine = [
    {"varietà": "Moscata",
    "peso": 300,
    "lunghezza": 14,
},
    {"varietà": "Turbante",
    "peso": 200,
    "lunghezza": 21,
    },

    {"varietà": "Iron Cup",
    "peso": 100,
    "lunghezza": 20,
},
    {"varietà": "Delica",
    "peso": 250,
    "lunghezza": 10,
    },

    {"varietà": "Mini Kawaii Lady.",
    "peso": 100,
    "lunghezza": 20,
},
    {"varietà": "Butternut Violina",
    "peso": 50,
    "lunghezza": 12,
    },
    {"varietà": "Hokkaido",
    "peso": 100,
    "lunghezza": 9,
},
    {"varietà": "Spaghetti",
    "peso": 200,
    "lunghezza":6,
    },
    {"varietà": "Verde",
    "peso": 300,
    "lunghezza": 20,
}
];

var zucchinePiccole = [];
var zucchineGrande = [];

for (var i = 0; i<zucchine.length; i ++){
    if((zucchine[i].lunghezza)<15){
        zucchinePiccole.push(zucchine[i]);
    }else{
        zucchineGrande.push(zucchine[i]);
    }
}

console.log(zucchinePiccole);
console.log(zucchineGrande);
