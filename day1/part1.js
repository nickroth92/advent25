var sum = 50;
var ans = 0;
for (var i = 0; i < input.length; i++){
    if (input[i][0] == "R"){
        sum += parseInt(input[i].slice(1))
        sum = sum % 100;
    }
    else {
        sum -= parseInt(input[i].slice(1))
        sum = sum % 100
    }
    console.log(sum);
    if (sum == 0) ans++;
    //console.log(ans);
}
console.log(ans);