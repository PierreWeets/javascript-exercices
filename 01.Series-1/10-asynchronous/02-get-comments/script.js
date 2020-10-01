// 10-asynchronous/02-get-comments/script.js - 10.2: chargement d'articles et de commentaires
document.getElementById("run").addEventListener("click" , ()=>{
    //after its execution, the function getPosts() calls an anonymous function(err, postArray)
    window.lib.getPosts((err,postsArray) => {
        console.log("number of articles:" + postsArray.length);   
        
        //for each post of the array postsArray( = array of objects 'post')
        postsArray.forEach(post => {
            //after its execution, the function getComments() calls an anonymous function(err, commentsArray)
            window.lib.getComments(post.id, ( err, commentsArray) => {
                //creates dynamically the property 'comments' for each post of the array 'postArray'
                post.comments = "";
                //for each post of the array 'commentsArray' ( = an array of objects 'comment')
                commentsArray.forEach(comment => {
                    //concatenate all the created comments into a single comment, stored in the dynamically created property 'comment' 
                        // for each post of the array 'postArray'
                    post.comments += `${comment.content}, Author : ${comment.author} \n`;
                }); 
                //logs for each post, its properties
                console.log("id: " + post.id);
                console.log("titre:  " + post.title);
                console.log("content: \n" + post.content);
                console.log("Author:  " + post.author);
                console.log("comments for post: \n" + post.comments);
            });    
        });
    });
});

