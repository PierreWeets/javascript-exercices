//06-objects/02-assign-properties/script.js - 6.2: assign properties
document.getElementById("run").addEventListener("click", () => {
    const computers = [
        {id: "0001", available: false, user: "leny", os: "macOS"},
        {id: "0002", available: false, user: "Nicolas"},
        {id: "0003"},
        {id: "0004", os: "Windows"},
        {id: "0005"},
        {id: "0006", os: "macOS"},
        {id: "0007"},
        {id: "0008"},
        {id: "0009", available: false, user: "Anthony"},
    ];

    const defaultProps = {
        available: true,
        os: "linux",
        user: null,
    };

    // display list of computers before update
    computers.forEach(el => { console.log(`Before : computers : ${el.id}, ${el.available}, ${el.user}, ${el.os}`)});
    
    // test data for each computer, in the list. If data missing, then complete it with default values
    computers.forEach(el => {
        if ( el.available == undefined) el.available = defaultProps.available; //attribute the property available
        if ( el.user == undefined) el.user = defaultProps.user;        //attribute the property user 
        if ( el.os == undefined) el.os = defaultProps.os;  //attribute the property os 
    });
    
    // display list of computers after update
    computers.forEach(el => { console.log(`After : computers : ${el.id}, ${el.available}, ${el.user}, ${el.os}`)});
});
