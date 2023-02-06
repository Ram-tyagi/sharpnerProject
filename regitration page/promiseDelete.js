const posts = [{title: 'POST1'}];
//Do not touch this function
function create2ndPost() {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            posts.push({title: 'POST2'});
            resolve()
        }, 3000)
    }) 
}
//Do not touch this function
function create3rPost() {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            posts.push({title: 'POST3'});
            resolve();
        }, 2000)
    }) 
}

//Do not touch this function
function deletePost(){
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            if(posts.length > 0){
                const poppedElement  = posts.pop();
                resolve(poppedElement);
            } else {
                reject("ERROR: ARRAY IS EMPTY")
            }
        }, 1000)
    })
}

//Modify the lines below and use .then and .catch smartly to get the correct output.
create2ndPost()

    .then(()=> {

        deletePost().then((deletedPost1) => {

            console.log(deletedPost1.title)

            create3rPost()

                .then(() => {

                        deletePost().then((deletedpost2) => {

                            console.log(deletedpost2.title)

                            deletePost().then((deletedpost3) => {

                                console.log(deletedpost3.title)

                                deletePost().catch((msg) => console.log(msg))

                            })

                    })

                })

            })

        })