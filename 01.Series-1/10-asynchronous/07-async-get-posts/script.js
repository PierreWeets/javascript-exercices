// 10-asynchronous/07-async-get-posts/script.js - 10.7: chargement d'articles (async/await)
document.getElementById("run").addEventListener("click" , ()=>{
    //call getPost() that returns a Promise    
    async function showPost() {
        console.log('calling');
        let resultArray = await window.lib.getPosts() 
        // is case of success : -data = array returned by the fct  getPosts() 
        //.then((data) => { 
            // data représente le contenu de xhr.responseText envoyé par la méthode resolve(), vous pouvez lui donner n'importe quel nom.
        console.log('data retrieved');
        console.log(resultArray);
        resultArray.forEach(element => {
                //logs for each post, its properties
                console.log("id: " + element.id);
                console.log("titre:  " + element.title);
                console.log("content: \n" + element.content);
                console.log("Author:  " + element.author);
                //console.log("comments for post: \n" + element.comments);
            //});    
        });
        console.log("end of call");
    };
    
    showPost();
});
