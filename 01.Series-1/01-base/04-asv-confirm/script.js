
// 01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation

(() => {
    // Don't bother with that, look at your browser's console(chrome), you can delete it afterwards ;)
    console.log('%c ', 'padding: 38px; background:url(https://becode.org/app/uploads/2020/03/bc_mailsign_seal.png) no-repeat;');
    console.log('Hello Woods programmer');
    //---- prompt age ---
    do{
        var age = prompt("age ? :") ;
        var gender = prompt("male/femelle ? :") ;
        var town = prompt("town where you live ? :") ;
        var confirmation =  prompt("Do you comfirm ? :") ;

    }while(confirmation.toLowerCase() !=='y' && confirmation.toLowerCase() !== 'yes' );

    alert(`your age  = ${age}, your gender = ${gender}, your town = ${town}.`);
    // YOUR CODE HERE
})();
