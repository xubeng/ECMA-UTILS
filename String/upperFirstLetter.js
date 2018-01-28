// 大写一句话中每个单词的首字母
function upperFirstLetter(str) {
  var arr = str.toLowerCase().split(" ");
var s = [];
  for (var i=0;i<arr.length;i++){
   s.push(arr[i].replace(arr[i].charAt(0),arr[i].charAt(0).toUpperCase()));
	}
  return s.join(" ");
}