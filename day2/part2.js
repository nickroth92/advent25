var inputArray = test.split(',');
var sum = 0;
var range, low, high, num, factors, len, add, ngrams, digits, ngram;
for (var i = 0; i < inputArray.length; i++) {
    range = inputArray[i].split('-');
    low = parseInt(range[0]);
    high = parseInt(range[1]);
    for (var j = 0; j <= high-low; j++) {
        num = (parseInt(range[0]) + j).toString();
        add = false;
        //prime number length, must be all same digit
        if ([2,3,5,7,11].includes(num.length)) {
            ngrams = [];
            digits = num.split("");
            while (digits.length != 0) {
                ngram = digits.splice(0, 1).join("");
                if (!ngrams.includes(ngram)) {ngrams.push(ngram)}
            }
            if (ngrams.length == 1 && ngram.length != num.length) {add = true}
        }
        //2 digit strings there's probably a better way to do this
        if ([4,6,8,10].includes(num.length)) {
            ngrams = [];
            digits = num.split("");
            while (digits.length != 0) {
                ngram = digits.splice(0,2).join("");
                if (!ngrams.includes(ngram)) {ngrams.push(ngram)}
            }
            if (ngrams.length == 1 && ngram.length != num.length) {add = true}
        }
        //3 digit strings but I'm committed now
        if ([3,6,9].includes(num.length)) {
            ngrams = [];
            digits = num.split("");
            while (digits.length != 0) {
                ngram = digits.splice(0,3).join("");
                if (!ngrams.includes(ngram)) {ngrams.push(ngram)}
            }
            if (ngrams.length == 1 && ngram.length != num.length) {add = true}
        }
        //4 digit strings it's okay there's only 5 cases
        if (num.length == 8) {
            ngrams = [];
            digits = num.split("");
            while (digits.length != 0) {
                ngram = digits.splice(0,4).join("");
                if (!ngrams.includes(ngram)) {ngrams.push(ngram)}
            }
            if (ngrams.length == 1 && ngram.length != num.length) {add = true}
        }
        //5 digit strings probably more efficient than getting factors for each length
        if (num.length == 10) {
            ngrams = [];
            digits = num.split("");
            while (digits.length != 0) {
                ngram = digits.splice(0,5).join("");
                if (!ngrams.includes(ngram)) {ngrams.push(ngram)}
            }
            if (ngrams.length == 1 && ngram.length != num.length) {add = true}
        }

        if (add == true) {
            sum += parseInt(num);
        }
    }
}

console.log(sum);