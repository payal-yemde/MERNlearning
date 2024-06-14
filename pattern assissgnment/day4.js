var str="cat"
var output=""
var upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lower="abcdefghijklmnopqrstuvwxyz"
for (var i=0;j<str.length;i++){
    var flag=true
    for(var j=o;j<upper.length;j++){
        if(str[i]==lower[j]){
            flag=false
            output+=upper[j]
            break
        }
console.log(i,j)
    }
    if(flag){
        output+=str[i]
    }
}
console.log(output)