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

// КРАТНІСТЬ ЧИСЕЛ

let sum = 0;
for (var i = 1; i <= 100; i++) {
    if (i % 3 != 0)
        sum = sum + i;
    else
        sum = sum;
  }
console.log("Пораховано за допомогою for. Сума = " + sum);



let sim = 0;
let n = 0;
while (n <= 100) {
        if (n % 3 != 0)
        sim = sim + n;
        n++;
    continue;
}
console.log("Пораховано за допомогою while. Сума = " + sim);