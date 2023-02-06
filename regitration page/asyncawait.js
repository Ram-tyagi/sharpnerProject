console.log('person1:shows ticket')
console.log('person2:shows ticket')
const promisewife=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('ticket')
    },3000)
})
const getPopcorn=promisewifebringtic.then((t)=>{
    console.log('husband:we shoild go in')
    console.log('wife:no i am hungry')
    return new promise((resolve,reject)=>{
        resolve(`${t} popcorn`)
    })
    
})
const getButter=getPopcorn.then((t)=>{
    console.log('husband:we shoild go in')
    console.log('wife:i need butter on my popcorn');
    return new promise((resolve,reject)=>{
        resolve(`${t} butter`)
    })
})
getButter.then((t)=>{
    console.log(t)
})

console.log('person4:shows ticket')
console.log('person5:shows ticket')