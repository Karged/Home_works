// КРАТНІСТЬ ЧИСЕЛ
/*
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

*/

/*
function pow()
{
    let a = 3;
    let b = 4;
    let i = 1;
    let c = a;
    while (i <= b - 1) {
        c = c * a;
        i++;
    }
    console.log(c);
}
str();

*/
// Функція a в ступені b
function pow(a, b) {
    let i = 1;
    let c = a;
    while (i != b) {
        c = c * a;
        i++;
    }
    return(c);
}
    let result = pow(2, 15);
    console.log(result);

