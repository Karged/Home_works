// My PAD function
/*
function mypad(mystr, mysymb, mybool) {
    let myl = mystr.length;
    let n = 10;
    let i = n - myl;
    let result;
    if (mybool == true) {
        result = mysymb.repeat(i) + mystr;
    }
    else
        result = mystr + mysymb.repeat(i);

    return (result);
}
let result = mypad('andrii', '$', true);
console.log(result);
*/
// My Theory function

let parne = 0;
let neparne = 0;
let prctprn;
let prctnprn;

function RnmNumber(min, max, n) {
    for (let i = 1; i <= n; i++) {
        rNumber = (min + (Math.floor(Math.random() * (max - min))));

        console.log(rNumber);

        if (rNumber % 2 == 0)
            parne++;
        else //neparne
            neparne++;
    }
    prctprn = (parne / (parne + neparne))*100;
    prctnprn = (neparne / (parne + neparne))*100;
    console.log("p: " + parne);
    console.log("np: " + neparne);
    console.log("Парні: " + prctprn + " %");
    console.log("Непарні: " + prctnprn + " %");

}

console.log(RnmNumber(100, 1000, 10000));