// 08-dom/09-match-password-one/script.js - 8.9: password verification (1)
document.getElementById("run").addEventListener("click", () => {
    // your code here
    console.log("document.getElementById('pass-one').value : " + document.getElementById("pass-one").value );
    if (document.getElementById("pass-one").value !== document.getElementById("pass-two").value){
        document.getElementById("pass-one").setAttribute("style", "border-color:red");
        document.getElementById("pass-two").setAttribute("style", "border-color:red");
    } else {
        document.getElementById("pass-one").removeAttribute("style");
        document.getElementById("pass-two").removeAttribute("style");
    }
});
