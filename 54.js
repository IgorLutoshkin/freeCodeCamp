function rangeOfNumbers(startNum, endNum) {
  
  if (startNum - endNum === 0) {
    return [startNum] ;
  } else {
    let Array = rangeOfNumbers(startNum + 1, endNum);
    Array.unshift(startNum);
    return Array;
  }

};
