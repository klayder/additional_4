module.exports = function multiply(first, second) {
var tempArr=[],tempDigit=0;
  for(var i=0; i<first.length;i++){
    for(var j=0; j<second.length;j++){
	  if(tempArr[i+j] === undefined){
	    tempArr[i+j]=first[i]*second[j];  
	  }else{
	    tempArr[i+j]+=first[i]*second[j];	  
	  }
	} 
  }
  for(var i=tempArr.length-1;i>-1;i--){
 
		tempArr[i]+=tempDigit;
 		tempDigit=(tempArr[i]-tempArr[i]%10)/10;
    
    tempArr[i]=tempArr[i]%10;
 } 
 if(tempDigit){tempArr.unshift(tempDigit)}
 return tempArr.join("");
}
