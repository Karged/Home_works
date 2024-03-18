let age = "gdhg";
let age1 = age % 10;
let message = '';
if (age < 1 || age > 99) {
    message = " років? та ну не може такого бути!";
}
else if (age == 1) {
    message = " рік";
}
else if (age < 5 && age > 1) {
    message = " роки";
}
else if (age > 4 && age < 21) {
    message = " років";
}
else if (age > 20 && age1 == 1) {
    message = " рік";
}
else if (age > 20 && age1 > 1 && age1 < 5) {
    message = " роки";
}
else {
    message = " років";
};
console.log("тобі " + age + message);
console.log(typeof age);

