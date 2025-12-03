var row, max;
var sum = 0;
for (var i = 0; i < input.length; i++) {
    row = input[i].split('');
    max = [0,0]
    for (var j = 0; j < row.length-1; j++) {
        if (row[j] > max[0]) {
            max[0] = row[j]
            max[1] = 0;
        }
        else if (row[j] > max[1]) {max[1] = row[j]}
    }
    if (row[row.length-1] > max[1]) {max[1] = row[row.length-1]}
    sum += parseInt(max.join(''));
}
console.log(sum);