var row, max;
var sum = 0;

function setAllFollowingToZero(arr, ind) {
    for (var i = ind; i < arr.length; i++) {
        arr[i] = 0
    }
    return arr;
}

for (var i = 0; i < input.length; i++) {
    row = input[i].split('');
    max = [0,0,0,0,0,0,0,0,0,0,0,0]
    //sigh... it ain't going to prod, fuck it
    j = 0;
    while (j < row.length) {
        if (row[j] > max[0] && j < row.length-11) {
            max[0] = row[j]
            max = setAllFollowingToZero(max, 1);
        }
        else if (row[j] > max[1] && j < row.length-10) {
            max[1] = row[j]
            max = setAllFollowingToZero(max, 2);
        }
        else if (row[j] > max[2] && j < row.length-9) {
            max[2] = row[j]
            max = setAllFollowingToZero(max, 3);
        }
        else if (row[j] > max[3] && j < row.length-8) {
            max[3] = row[j]
            max = setAllFollowingToZero(max, 4);
        }
        else if (row[j] > max[4] && j < row.length-7) {
            max[4] = row[j]
            max = setAllFollowingToZero(max, 5);
        }
        else if (row[j] > max[5] && j < row.length-6) {
            max[5] = row[j]
            max = setAllFollowingToZero(max, 6);
        }
        else if (row[j] > max[6] && j < row.length-5) {
            max[6] = row[j]
            max = setAllFollowingToZero(max, 7);
        }
        else if (row[j] > max[7] && j < row.length-4) {
            max[7] = row[j]
            max = setAllFollowingToZero(max, 8);
        }
        else if (row[j] > max[8] && j < row.length-3) {
            max[8] = row[j]
            max = setAllFollowingToZero(max, 9);
        }
        else if (row[j] > max[9] && j < row.length-2) {
            max[9] = row[j]
            max = setAllFollowingToZero(max, 10);
        }
        else if (row[j] > max[10] && j < row.length-1) {
            max[10] = row[j]
            max[11] = 0;
        }
        else if (row[j] > max[11] && j < row.length) {max[11] = row[j]}   
        j++;     
    }
    sum += parseInt(max.join(''));
    console.log(max);
}
console.log(sum);