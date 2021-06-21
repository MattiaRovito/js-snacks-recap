//Todo Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
//Todo La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
//Todo Usiamo i nuovi metodi degli array foreach o filter.
//Todo Es: a[2,11,6,77,3,4,9];
//Todo a = 1; b = 3;
//Todo mi restituisce a [11,6,77]




//* input

const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let a = parseInt(prompt('Inserisci un numero minimo 1 e un numero massimo ' + array.length));
let b = parseInt(prompt('Inserisci un numero massimo ' + array.length));


//* filter

const newArray = array.filter((element) => {

    if (element >= a && element <= b){
        return true;
    }
    return false;
});


//* output
console.log(newArray);

