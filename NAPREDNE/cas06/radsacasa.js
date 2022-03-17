const array = [4,5,0,3,6,7]
undefined
function moj_reduser(prosli, sadasnji){ return prosli + sadasnji;}
undefined
array.reduce(moj_reduser)
25
array.reduce(moj_reduser,-5)
20
const getMax = (a,b)=>Math.max(a,b)
undefined
[4,5,6,7].reduce(getMax);
7
const funkcija=function(x){console.log()}
undefined
const funkcija = function(x,y){console.log("x=" + x + "y=" + y); return x-y;}
undefined
[5,6,7].reduce(funkcija)
VM1570:1 x=5y=6
VM1570:1 x=-1y=7
-8