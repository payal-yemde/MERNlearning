//1
//let a=[1,2,3,4];
  //  a.forEach(function(num){
    //    console.log(num*num)
    //})

//2
//let arr=[1,2,3,4];
//let double = arr.map(function(num){
  //  return(2*num)
//})
//console.log(double)

//3
//let arr=[1,2,3,4,5,6,7,8,9,10];
//let odd =arr.filter(function(elem){
//    return elem%2 ==1
//})
//console.log(odd)

//7
//let=[{firstName:"Nayan", lastName: "Kale", place: "Banglore" },
//{ firstName: "Payal", lastName: "Yemde", place: "Banglore" }, 
//{ firstName: "Pooja", lastName: "Mandaogade", place: "Kolkata" }
//];

//4
//let product =[1,2,3,4].reduce(function(acc,elem){
  //return acc*elem
//},1)
//console.log(product)

//5
let num=[1,2,3,4,5,6,7,8,9]
let oddaddition =num.filter(function(elem){
  return elem%2 ==1
}).reduce(function(acc,elem){
  return acc+elem
},0)
console.log(oddaddition)