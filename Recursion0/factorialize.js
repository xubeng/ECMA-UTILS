/*
Get Factorial（求自然数的阶层）
*/  
function factorialize(num) {
  if(num===0){
    return 1;
  }
  return factorialize(num-1)*num;  
}
console.log(factorialize(5));//120
