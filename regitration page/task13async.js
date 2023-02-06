

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
    let [popcorn,butter,coldDrinks] =await Promise.all([getPop,addButter,getcoldDrinks])
    console.log(`${popcorn} , ${butter} , ${coldDrinks}`)
    return ticket

}
preMovie().then((m)=> console.log(`person3: shows ${m}`))
console.log('person4:shows ticket')
console.log('person5:shows ticket')