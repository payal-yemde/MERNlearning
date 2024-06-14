// 2. Amazon Object Data
var amazon=[

        {name:"spekers",price:5400,rating:4},
        {name:"headphones",price:3000,rating:3},
        {name:"playstation",price:20000,rating:5}
];
for(let product of amazon){
    console.log("Name :,product.name,"Rating:"")
}
let total=0
let minprice
for(let products of amazon){
    if( minprice == undefined || minprice>products.price){
        minprice =products.price
        minpriceproduct = products.name
    }
}
    console.log("product of minimum price is :",minpriceproduct)

    let(product of amazon
        )

//1. 
var e_commerce ={
    products :["earphone","headphones","earpods"],
    quantity: [4,3,2],
    price: [700,800,1000],

    total_price : function(){
        var total=0
        for(let i=0;i<3;i++){
            total+= e_commerce.price[i] * e_commerce.quantity[i]
        }
        return total 
    }
};
console.log(e_commerce.total_price())

// 2.
var rectangle ={
    length=13,
    width=10,
    area:function(){
        return rectangle.length*rectangle.width
    },
    perimeter : function(){
        return 2*(rectangle.length = rectangle.width)
    }
}
console.log(rectangle.area(),rectangle.perimeter())