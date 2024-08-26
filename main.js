function cafeM(medidaCafe) {
    if (medidaCafe == 300) console.log("la medida del cafe es grande")
    else if (medidaCafe == 170) console.log("la medida del cafe es mediano")
    else if (medidaCafe == 100) console.log("la medida del cafe es chico")
    else console.error("no esta la medida indicada")
}

function frapuccino(gustoFrappe) {
    let gusto = gustoFrappe;
    while (gusto != "pistacho") {
        switch (gustoFrappe) {
            case "vainilla": console.log("su Gusto es vailnilla");
                break;
            case "chocolate": console.log("su Gusto es chocolate");
                break;
            case "dulce de leche": console.log("el Gusto es dulce de leche");
                break;
            case "cookies and cream": console.log("el Gusto es cookies and cream");
                break;
            default: console.log("ninguno de los gustos anteriores");
                break;
        }
        gusto = prompt("ingrese otro gusto (vainilla, chocolate, dulce de leche, cookies and cream; pistacho para terminar)");
    }
}

let ingreseSuNombre = prompt("ingrese su nombre");

let medidaCafe = prompt("ingrese un medida (300, 170, 100)");

cafeM(medidaCafe);

let gustoFrappe = prompt("ingrese un gusto (vainilla, chocolate, dulce de leche, cookies and cream)");

frapuccino(gustoFrappe);
