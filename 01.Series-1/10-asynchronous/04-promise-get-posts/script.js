// 10-asynchronous/04-promise-get-posts/script.js - 10.4: chargement d'articles (Promise)
document.getElementById("run").addEventListener("click" , ()=>{
    //call getPost() that returns a Promise    
    window.lib.getPosts() 
        // is case of success : -data = array returned by the fct  getPosts() 
        .then((data) => { 
            // data représente le contenu de xhr.responseText envoyé par la méthode resolve(), vous pouvez lui donner n'importe quel nom.
            console.log('data retrieved');
            console.log(data);
            data.forEach(element => {
                    //logs for each post, its properties
                    console.log("id: " + element.id);
                    console.log("titre:  " + element.title);
                    console.log("content: \n" + element.content);
                    console.log("Author:  " + element.author);
                    //console.log("comments for post: \n" + element.comments);
                //});    
            });
        //in case of failure
        }).catch((err) => {
            console.log('Erreur !');
            console.log(err);
        })
});


