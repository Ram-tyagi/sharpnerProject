

console.log('person1:shows ticket')
console.log('person2:shows ticket')
const preMovie=async()=>{
    const promiseWife=new Promise((resolve,reject)=>{
        setTimeout(()=>resolve('ticket'),3000)
    })
    const getPop=new Promise((resolve,reject)=>{
        resolve(`popcorn`)
    })
    const addButter=new Promise((resolve,reject)=> resolve(`butter`))
    const getcoldDrinks=new Promise((resolve,reject)=>resolve(`coldDrinks`))
    let ticket=await promiseWife
    console.log(`wife:i have ${ticket}`)
    console.log('husband:we shoild go in')
    console.log('wife:no i am hungry')

    let popcorn=await getPopcorn
    console.log(`husband:should i get ${popcorn}`)
    console.log('husband:we shoild go in')
    console.log('wife:i need butter on my popcorn');
    
    let butter=await addButter
    console.log(`husband:i got some ${butter} on popcorn`)
    console.log('husband:anything else?');
    console.log('wife:we are getting later')
    console.log('husband:thanks for reminding')

    let coldDrinks=await getcoldDrinks
    console.log(`husband:we are forgoting something`)
    console.log(`wife what`)
    console.log(`husband: ${coldDrinks}`)
    

    return ticket

}
preMovie().then((m)=> console.log(m))
console.log('person4:shows ticket')
console.log('person5:shows ticket')