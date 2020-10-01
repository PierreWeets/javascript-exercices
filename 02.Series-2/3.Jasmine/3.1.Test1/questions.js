
let tailleString = (texte) => {
    return texte.length;
}
let remplaceECar = (texte) => {
    let a = texte.indexOf("e");
    let text =  texte.substr(" ", a) + " " + texte.substr(a + 1 , texte.length);
    return text;
}
let concatString = (texte1, texte2) => {
    let text = texte1 + texte2;
    return text;
}
let afficherCar5 =  (texte) => {
    let caracter = texte.substr(4,1);
    return caracter;
}
let afficher9Car =  (texte) => {
    let string = texte.substr(0,9);
    return string;
}
let majusculeString =  (texte) => {
    let string = texte.toUpperCase();
    return string;
}
let minusculeString =  (texte) => {
    return texte.toLowerCase();
}
let SupprEspaceString =  (texte) => {
    return texte.trim();
}
let IsString =  (texte) => {
    if (typeof texte  === "string") {
        return true;
    } else {
        return false;
    }
    
}

let AfficherExtensionString =  (texte) => {
    let LastIndex = texte.lastIndexOf(".");
    return (texte.slice(LastIndex+1));
}
let NombreEspaceString =  (texte) => {
    return(texte.split(" ").length-1);
}
let InverseString =  (texte) => {
    let array = Array.from(texte);
    let invertedString = "";
    for(i=(array.length-1); i>=0;i-- ){
        invertedString = invertedString + array[i];
    }
    return invertedString;
}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
let calculPuissance =  (x, y) => {
    return Math.pow(x,y);
}
let valeurAbsolue =  (nombre) => {
    return Math.abs(nombre);
}
let valeurAbsolueArray =  (array) => {
    let absArray = [];
    array.forEach(element => {
        absArray.push(Math.abs(element));
    });
    return absArray;
}
let sufaceCercle =  (rayon) => {
    return Math.round(rayon*rayon*Math.PI);
}
let hypothenuse =  (ab, ac) => {
    return Math.sqrt(ab*ab + ac*ac);
}
let calculIMC =  (poids, taille) => {
    let IMC = poids / (taille*taille);
    return Number(IMC.toFixed(2));
}
