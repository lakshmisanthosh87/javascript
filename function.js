// function sum(a,b){
//     sums=a+b;
//     console.log(sums);
// }
// sum(10,20)






// function avg(a,b,c,d,e){
//     avgs=(a+b+c+d+e)/5;
//     console.log(avgs);
// }
// avg(1,2,3,4,5)






// arrow function;


// const sum=(a,b)=>{
//     let sums=a+b
    
//     console.log(sums)
// }
// sum(10,20)









// callback
// function greet(){
//     console.log("good bye")
// }






// function welcome(name,sub,cb){
//     console.log("hello "+name + " "+sub);
//     cb();
// }
// welcome("lax","IT",greet)






// closure

// function outer(a,b){
//     function inner()
//     {
//         let sum=a+b;
//         console.log(sum);
//     }
//     returfunction outer(a,b){
//     function inner()
//     {
//         let sum=a+b;
//         console.log(sum);
//     }
//     return inner
// }
// let second=outer(2,4);
// second();n inner
// }
// let second=outer(2,4);
// second();






// function sumdigit(n){
//     while(n>0){
//         rem=n%10;
//         s=s*10+rem
//         i=Math.floor(i/10)
//     }
// }
// console.log(sumdigit(123))


//  let arr=["hello","hi","oii"]

// arr.forEach((a,b)=>{
//     console.log(`${b}:${a}s`)
// })
 
   

// map

// let newarr=arr.map((value,index)=>{
//     return(value +"s")
// })
// console.log(arr)
// console.log(newarr)


// Find 

// let newarr=arr.find((value,index)=>{
//     return value==="hoi"
// })
// console.log(arr)
// console.log(newarr)


// filter

let arry=[1,2,3,4,5,67]
// let newarr=arry.filter((value,yndex)=>{
//     return value%2==0
// })
// console.log(arry)
// console.log(newarr)



// reduce 


let a=arry.reduce((acc,value)=>{
    return acc=acc+value

})
console.log(a)