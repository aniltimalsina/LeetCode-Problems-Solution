/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
     if(stones.length > 1) {
    let sortedArr = stones.sort((a, b) => a - b);
    //console.log(sortedArr)
    let requiredNum;
    while (sortedArr.length > 1) {
        let firstNum = sortedArr.pop();
        //console.log(firstNum);
        let secondNum = sortedArr.pop();
        //console.log(secondNum);
        requiredNum = (firstNum - secondNum);
        //console.log(requiredNum);
        if(requiredNum !== 0) {
            sortedArr.push(requiredNum);
        }
        if(sortedArr.length == 0){
        	return requiredNum;
        }
        else {
          sortedArr = stones.sort((a, b) => a - b);
        }
    } 
    return (sortedArr.pop());
}
else {
    return (stones.pop());
}
};