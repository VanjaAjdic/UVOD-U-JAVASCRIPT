//1.
var a = [ 3,4,5,6,7,8];
for( i of a )
    console.log(i)
//2.
for(i of a){
    if(a%2==0){
        console.log(i)
    }
}
//3.
var zbir
for(i of a){
    zbir+=a[i]
}
console.log(zbir)
//4.
var brj=0
for(i of a){
    if(a[0]>a[i+1])
        brj++

}
console.log(brj)