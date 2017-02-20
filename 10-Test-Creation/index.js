function largestArr(arr){
  var ans = [];
  for(var i = 0; i < arr.length; i++){
    var largest = 0;
    for(var j = 0; j < arr[i].length; j++){
      if (arr[i][j] > largest){
        largest = arr[i][j];
      }
    }
    ans[i] = largest;
  }
  return ans;
}

module.exports = largestArr;
