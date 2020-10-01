// 10-asynchronous/05-promise-get-comments/script.js - 10.5: chargement d'articles et de commentaires (Promise)
document.getElementById("run").addEventListener("click" , ()=>{
    //call getPost() that returns a Promise    
    window.lib.getPosts() 
    // in case of success : postArray = array returned by the fct  getPosts() 
    .then((postArray) => { 
        console.log('data retrieved');
        //for each object contained in the postArray
        postArray.forEach(post => {
            //calls the function getComments() that returns a Promise  
            //console.log('post.id : '+ post.id) ;
            window.lib.getComments(post.id)
            // in case of success : commentsArray = array returned by fct getComments()
            .then((commentsArray) => {
                //creates dynamically the property 'comments' for each element of the array 'postArray'
                post.comments = "";
                //for each element of the array 'commentsArray' ( = an array of objects 'comment')
                commentsArray.forEach(comment => {
                //concatenate all the created comments into a single comment, stored in the dynamically created property 'comment' 
                post.comments += `${comment.content}, Author : ${comment.author} \n`;
                });
                //logs for each post, its properties
                console.log("id: " + post.id);
                console.log("titre:  " + post.title);
                console.log("content: \n" + post.content);
                console.log("Author:  " + post.author);
                console.log("comments for post: \n" + post.comments);
            })
            .catch((err) => {
            console.log('comments : Erreur !');
            console.log(err);
            })
        });
    })
    //in case of failure
    .catch((err) => {
        console.log('Post Erreur !');
        console.log(err);
    });
});
