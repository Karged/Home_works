// My PAD function
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

