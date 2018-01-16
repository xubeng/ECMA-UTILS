/*
Reverse a String（字符串反转）
*/
function reverseString(str) {
  str =str.split('');
  str =str.reverse();
  str = str.join('');
  return str;
}
console.log(reverseString("hello"));//olleh
