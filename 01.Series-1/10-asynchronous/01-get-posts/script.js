// 10-asynchronous/01-get-posts/script.js - 10.1: chargement d'articles
document.getElementById("run").addEventListener("click" , ()=>{
    function display(err, array){
        console.log("number of articles:" + array.length);   
        
        for(i=0; i< array.length; i++){
        // console.log(`err : ${err}`);                                                                                                                                                                                                                                                                                                                                                                         
        console.log("titre:" + array[i].title);
        console.log("content:" + array[i].content);
        console.log("Author:" + array[i].author);
        } 
    }
    
    // after its execution, the function getPosts() calls the callback function display().
    window.lib.getPosts(display);
});
