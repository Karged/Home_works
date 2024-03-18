
let n = 4;
for (let i = 1; i <= n; i++) {
    let sym = "* ";
    console.log(sym.repeat(i));
}

let m = 5;
for (let i = 1; i <= m; i++) {
    let kym = "& ";
    let gym = ' ';
    console.log(kym.repeat((m-i))+gym.repeat(i));
}