var num = 50;
var ans = 0;
var tmp;
for (var i = 0; i < input.length; i++){
    if (input[i][0] == "R"){
        tmp = parseInt(input[i].slice(1));
        ans += Math.floor(tmp/100);
        tmp = tmp % 100;
        if (num + tmp >= 100) {
            ans++;
        }
        num = (((num + tmp) % 100) + 100) % 100;
    }
    else {
        tmp = parseInt(input[i].slice(1));
        ans += Math.floor(tmp/100);
        tmp = tmp % 100;
        if (num - tmp <= 0 && num != 0) {
            ans++;
        }
        num = (((num - tmp) % 100) + 100) % 100;
    }
    //console.log([num, ans])
}
console.log(ans);