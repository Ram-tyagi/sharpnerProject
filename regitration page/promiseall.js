const posts = [
    {title: 'Post One',
     body: 'This is Post One', 
     createdAt: new Date().getTime()
    },
    {title: 'Post Two', 
     body: 'This is Post Two', 
     createdAt: new Date().getTime()
    }
];


function getPost(posts) {
   
    setTimeout( () => {
        let output=''
        posts.forEach((post) => {
            output+=`<li> ${post.title} - lastupdated ${new Date().getTime() - post.createdAt} </li>`
             
        },)
        document.body.innerHTML=output;
      
    }, 1000);

}


function createPost(post) {
    const promise1= new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push(post)
            resolve();
        },1000)
    })
    console.log(promise1)
}
createPost({title:'post3',body:'this is post three'},getPost)
function updateLastActivy(){
    const promise2= new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.lastActivity=new Date().getTime()
            resolve(posts.lastActivity);
        },1000)
    })
    console.log(promise2)
}
updateLastActivy({createdAt: new Date().getTime()},getPost)
function deletePost(){
    const promise3= new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject();
        },1000)
    })
    console.log(promise3)
}

function userUpdate(){

    Promise.all([createPost,updateLastActivy]).then(([createPostresolves,updateLastActivyresolves])=>{
        console.log(updateLastActivy)
    })
    .catch(err=>console.log(err))
}





