//Lesson 4
//Task 1 💻
//Пользователь передает через переменную свою фамилию и имя. Выведите приветсвие Привет <Имя> <Фамилия> 5 раз используя для каждого варианта разный регистр
// let fullName: string = 'Привет Dmitry Shkutnik'
// console.log(fullName.repeat(5));
//Task 2 💻
//Дана строка 'я учу typescript!'. Проверить, есть ли данное слово в строке: если есть - вывести позицию подстроки 'учу', если нет - вывести строку Данной подстроки нет
var tsSr = 'я учу typescript!';
if (tsSr.includes('учу')) {
    console.log('учу');
}
else {
    console.log('Данной подстроки нет');
}
//Task 5 💻
//Дана строка 'я учу typescript!'. Вырежите из нее слово 'учу' и слово 'typescript' разными способами (через substring, slice).
var testString = 'я учу typescript!';
console.log(testString.substring(0, 1));
console.log(testString.slice(0, 1));
//Task 6 💻
//Дана строка 'я учу typescript!'. С помощью метода split запишите каждое слово этой строки в отдельный элемент массива.
var strTest = 'Я Учу Typescript';
console.log(strTest.split(' '));
//Task 7 💻
//Дана строка ' я учу typescript! '. Выведите строку, без начальных и пробелов в конце строки.
var strTest2 = ' я учу typescript! ';
console.log(strTest2.trim());
//Task 8 💻
//Дано число 8.829734872948. Выведите число с 3 значащами цифрами после точки
var numVar = 8.829734872948;
console.log(numVar.toFixed(3));
//Task 9 💻
//Дана произвольное число. Реализовать метод проверяющий является ли это число целочисленным или нет. Если является - вывести его, если нет - округлить до целой части.
var testNumber = 5.99;
if (Number.isInteger(testNumber)) {
    console.log(testNumber);
}
else {
    console.log(Number.isInteger(testNumber));
}
