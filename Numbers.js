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