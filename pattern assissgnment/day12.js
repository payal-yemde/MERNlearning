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

//let users=[{firstName:"Nayan", lastName: "Kale", place: "Banglore" },
//{ firstName: "Payal", lastName: "Yemde", place: "Banglore" }, 
//{ firstName: "Pooja", lastName: "Mandaogade", place: "Kolkata" }
//];

//let output = users.map(function(user){
//return (user.firstName + " " +user.lastName)
//})
//console.log(output )

//4
//let product =[1,2,3,4].reduce(function(acc,elem){
  //return acc*elem
//},1)
//console.log(product)

//6
//let num=[1,2,3,4,5,6].filter(function(elem){
 // return elem%3 == 0
//}).map(function(elem){
  //return (elem*elem*elem)
//}).reduce(function(acc,elem){
  //return acc+ elem
//},0)

//console.log(num)

//8

//let output2 = users.filter(function(user){
//return user.place == 'Banglore'
//}).map(function(user){
//return (user.firstName + " " + user.lastName)
//})
//console.log(output2)

//9
//let arr=['Coding','Room']
//let elem=arr.map(function(elem){
//return elem[0]
//})
//console.log(elem)

//10
//let arr=["apple","windows","ubuntu"]
//let elem=arr.forEach(function(elem){
  //console.log(elem.length)
//})

//11
let arr1=['assignment','problem','media','upload']
let elem1=arr1.filter(function(elem){
return elem[0] == 'a'  || elem[elem.length-1] =='a'
})

console.log(elem1)

