//获取系统时间，格式为：YYYYMMDD
function formatTime() {
	  var releaseTime = '';
	  var date = new Date();
	  var year = date.getFullYear();
	  var month = date.getMonth()+1;
	  var day = date.getDate();
	  if (month < 10 ){
		  month = "0" + month; 
	  }
	  if (day < 10 ){
		  day = "0" + day; 
	  }
	  releaseTime =year+month+day;
	  return releaseTime;
}
