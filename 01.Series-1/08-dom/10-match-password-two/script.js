// 08-dom/10-match-password-two/script.js - 8.10: password verification (2)
document.getElementById("run").addEventListener("click", () => {
    // your code here
    //console.log("document.getElementById('pass-one').value : " + document.getElementById("pass-one").value );
    if (document.getElementById("pass-one").value !== document.getElementById("pass-two").value){
        document.getElementById("pass-one").setAttribute("class", "error");
        document.getElementById("pass-two").setAttribute("class", "error");
    } else {
        document.getElementById("pass-one").removeAttribute("class");
        document.getElementById("pass-two").removeAttribute("class");
    }
});
