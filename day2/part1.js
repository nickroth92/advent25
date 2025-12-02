var inputArray = test.split(',');
var sum = 0;
var range, low, high, num, firstHalf, secondHalf;
for (var i = 0; i < inputArray.length; i++) {
    range = inputArray[i].split('-');
    low = parseInt(range[0]);
    high = parseInt(range[1]);
    for (var j = 0; j <= high-low; j++) {
        num = (parseInt(range[0]) + j).toString();
        firstHalf = num.slice(0, num.length/2);
        secondHalf = num.slice(num.length/2)
        //console.log(firstHalf + ' ' + secondHalf);
        if (firstHalf == secondHalf) {
            //console.log(num);
            sum += parseInt(num);
        }
    }
}
console.log(sum);