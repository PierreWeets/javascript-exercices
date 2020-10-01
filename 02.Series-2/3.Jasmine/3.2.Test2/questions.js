let CreationTableauLangages =  () => {
//    let array =Array.of("Html","CSS","Java","PHP")
    return Array.of("Html","CSS","Java","PHP");
}

let CreationTableauNombres =  () => {
    return Array.of(0,1,2,3,4,5);
}

let RemplacementElement =  (langages) => {
    let array =Array.from(langages);
    array[2] = 'Javascript';
    return array;
}

let AjoutElementLangages =  (langages) => {
    return langages.concat(['Ruby', 'Python']);
}

let AjoutElementNombres =  (nombres) => {
    nombres.unshift(-1);
    nombres.unshift(-2);
    return nombres;
    
}

let SuppressionPremierElement =  (langages) => {
    langages.shift()
    return langages ;
}

let SuppressionDernierElement =  (langages) => {
    langages.pop()
    return langages;
}

let ConversionChaineTableau =  (reseaux_sociaux_chaine) => {
    let array = reseaux_sociaux_chaine.split(",");
    return array;
}

let ConversionTableauChaine =  (langages) => {
    let langagesString = "";
    langages.forEach(element => {
        langagesString = langagesString + element  + ",";
    });
    langagesString = langagesString.substr(0,langagesString.length-1);
    return langagesString;
}

let TriTableau =  (reseaux_sociaux) => {
    let array = Array.from(reseaux_sociaux);
    array.sort();
     return array; 
}

let InversionTableau =  (langages) =>{
    let array = Array.from(langages);
    var invertedArray = [];
    for(i=(array.length-1), j = 0 ; i>=0;i-- , j++ ){
        invertedArray[j] = array[i];
    }
    return invertedArray;
}
