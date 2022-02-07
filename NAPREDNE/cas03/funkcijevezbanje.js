function f(){

    return "f" + 4;

}
f();


(function x(){
    console.log("X");
})();
// RESENJE JE: X

var a = f;
var rez = a();

var objekat= {
a:function(){return "a"},
b:function(b) {return b;},
c:function(c){return c*c; }

}



