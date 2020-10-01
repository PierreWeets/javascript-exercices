// 10-asynchronous/08-async-get-comments/script.js - 10.8: chargement d'articles et de commentaires (async/await)
document.getElementById("run").addEventListener("click" , ()=>{
    //call getPost() that returns a Promise    
    async function showPost() {
        console.log('calling showPost');
        let postArray = await window.lib.getPosts() 
        //for each object contained in the postArray
        postArray.forEach(post => {
            showComments(post);
        });
    }

    async function showComments(post){
        console.log('calling showComments');
        let commentsArray = await window.lib.getComments(post.id)
    // in case of success : commentsArray = array returned by fct getComments()
    //.then((commentsArray) => {
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
    }

    showPost();
});