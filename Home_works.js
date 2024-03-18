// TRIANGLES

let n = 4;
console.log("This is my first triangle!");
console.log("__________________________");
for (let i = 1; i <= n; i++) {
    let sym = "* ";
    console.log(sym.repeat(i));
}
console.log("__________________________");

let m = 5;
console.log("This is my second triangle!");
console.log("__________________________");
for (let i = 1; i <= m; i++) {
    let kym = "$ ";
    console.log(kym.repeat((m - i)));
}
console.log("__________________________");

let o = 5;
console.log("Random figure");
console.log("__________________________");
for (let i = 1; i <= o; i++) {
    let kym = "$ ";
    console.log(kym.repeat((o + 3 + i)));
}
console.log("__________________________");
