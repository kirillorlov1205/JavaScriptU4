//Lesson 4
//Task 1 💻
//Пользователь передает через переменную свою фамилию и имя. Выведите приветсвие Привет <Имя> <Фамилия> 5 раз используя для каждого варианта разный регистр
var fullName = 'Привет Dmitry Shkutnik';
var lowCase = fullName.toLocaleLowerCase();
var UppCase = fullName.toLocaleUpperCase();
console.log(lowCase.repeat(5), UppCase.repeat(5));
//Знаю, что не так :) Ещё подробнее task1 покапаться, возможно через цикл
//Task 2 💻
//Дана строка 'я учу typescript!'. Проверить, есть ли данное слово в строке: если есть - вывести позицию подстроки 'учу', если нет - вывести строку Данной подстроки нет
var testStr2 = 'я учу typescript!';
if (testStr2.includes('учу')) {
    console.log(testStr2.indexOf('учу'));
}
else {
    console.log('Данной подстроки нет');
}
// Task 3 💻
// Дана произвольная строка. Реализуйте метод, который принимает позицию символа в строке. 
// Если переданное число больше длины строки, то должно отобразиться сообщение: Вы вышли за границу строки
var testStr3 = 'Hello';
var position = 6;
if (testStr3.charAt(position)) {
    console.log(testStr3.charAt(position));
}
else {
    console.log('Вы вышли за границу строки');
}
// Task 4 💻
// Дана произвольная строка. Реализуйте метод, который проверяет заканчивается ли предложение точкой или нет. Если оканчивается, 
// вывести предложение - Данное предложение закончено, если нет, то В конце предложения не хватает точки
var testStr4 = 'Test string.';
console.log();
if (testStr4.endsWith('.')) {
    console.log('Данное предложение окончено');
}
else {
    console.log('В конце предложения не хватает точки');
}
//Task 5 💻
//Дана строка 'я учу typescript!'. Вырежите из нее слово 'учу' и слово 'typescript' разными способами (через substring, slice).
var testStr5 = 'я учу typescript!';
console.log(testStr5.substring(0, 1));
console.log(testStr5.slice(0, 1));
//Task 6 💻
//Дана строка 'я учу typescript!'. С помощью метода split запишите каждое слово этой строки в отдельный элемент массива.
var testStr6 = 'Я Учу Typescript';
var varArray = testStr6.split(' ');
console.log(testStr6.split(' '));
//Task 7 💻
//Дана строка ' я учу typescript! '. Выведите строку, без начальных и пробелов в конце строки.
var testStr7 = ' я учу typescript! ';
console.log(testStr7.trim());
//Task 8 💻
//Дано число 8.829734872948. Выведите число с 3 значащами цифрами после точки
var varNum1 = 8.829734872948;
console.log(varNum1.toFixed(3));
//Task 9 💻
//Дана произвольное число. Реализовать метод проверяющий является ли это число целочисленным или нет. Если является - вывести его, если нет - округлить до целой части.
var varNum2 = 5.99;
if (Number.isInteger(varNum2)) {
    console.log(varNum2);
}
else {
    console.log(Math.round(varNum2));
}
//Task 10 💻
//Дано произвольное число с плавающей точкой. Реализовать методы округления данного числа до ближайшего меньшего, большего аргумента и ближайшего целого числа.
var varNum3 = 5.4998;
console.log(Math.floor(varNum3)); //округляет до ближайшего меньшего целого числа
console.log(Math.ceil(varNum3)); //округляет до ближайшего большего целого числа
console.log(Math.round(varNum3)); //округляет до ближайшего целого числа
//Task 11 💻
//Дана произвольное число с плавающей точкой. Реализовать методы округления данного числа до ближайшего меньшего, большего аргумента и ближайшего целого числа.
//------------------Такая же задача как и Task10---------------
var varNum4 = 1.09;
console.log(Math.floor(varNum4)); //округляет до ближайшего меньшего целого числа
console.log(Math.ceil(varNum4)); //округляет до ближайшего большего целого числа
console.log(Math.round(varNum4)); //округляет до ближайшего целого числа
//Task 12 💻
//Дана произвольное число. Реализовать метод возводящий число в степень. Степень возведения указывается как параметр к методу
var varNum5 = 10;
var step = 2;
console.log(Math.pow(varNum5, step)); // либо вместо step писать само число
// Task 13 💻
// Дана произвольное число. Реализовать метод возводящий число в степень. Степень возведения указывается как параметр к методу.
//-------------------Такое же как Task12-----------------------
// Task 14 💻
// Реализовать метод получения рандомного целочисленного числа в заданном диапазоне. Диапазон задается аргументами фунции
var minRange = Math.ceil(11.5);
var maxRange = Math.floor(20.1);
var rs = Math.floor(Math.random() * (maxRange - minRange)) + minRange;
console.log(rs);
// Task 15 💻
// Реализовать метод получения рандомного числа с плавающей точкой в заданном диапазоне. Диапазон задается аргументами фунции
var minRange15 = Math.ceil(1);
var maxRange15 = Math.floor(5);
var result15 = Math.random() * (maxRange15 - minRange15) + minRange15;
console.log(result15);
// Task 16 💻
// Выведите дату сегоднешнего дня в формате: "текущая дата: месяц/год/день. Текущее время часы:минуты:секунды.". Использовать только внутренние методы Date.
var date = new Date();
var monthArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; // Использовал такое решение, потому что по умолчанию при использовании метода .getMonth в консоли выдавал 6-й месяц. Так как месяца индексируется не с 1, а с 0.В итоге создал массив из 12 чисел, который присвоен каждому месяцу.
var month = monthArr[date.getMonth()];
var year = date.getFullYear();
var currentDate = date.getDate();
var hours = date.getHours();
var minut = date.getMinutes();
var sec = date.getSeconds();
console.log("\u0422\u0435\u043A\u0443\u0449\u0430\u044F \u0434\u0430\u0442\u0430: ".concat(month, "/").concat(year, "/").concat(currentDate));
console.log("\u0422\u0435\u043A\u0443\u0449\u0435\u0435 \u0432\u0440\u0435\u043C\u044F: ".concat(hours, ":").concat(minut, ":").concat(sec));
//_ Task 1 _ Чему равно выражение?
// 1 + 2 + false + 10 * "hello"             // стринг "hello" приравнивается к NaN. Ответ: NaN
// 100 - "100px"                            // при данной операции стринга приравнивается к NaN. Ответ: NaN
// 100 - Number.parseFloat("10.5px")        // метод parseFloat распарсит стрингу в число. Ответ: 89.5
// false + 0 / 10                           // false приравнивается к 0. Ответ: 0
// 44 / 0 + 55                              // деление на 0 - бесконечность. Ответ: infinity
// undefined + "undefined" + null + "null"  // undefined и null преобразуется в строки, т.к. у нас уже есть строковые данные. Далее конкатенация строк. Ответ: 'undefinedundefinednullnull'
// undefined - "undefined"                  // undefined преобразуется в NaN. Т.к. вычетание, то "undefined" преобразуется к число, получаем NaN. Ответ: NaN
// undefined + null - false                 // undefined преобразуется в NaN. Могу предположить, что null и false приравнивается к 0. Ответ: 0
// _ Task 2 _ Задачи на циклы и методы
// есть строка любого размера. Вывести ASCII код каждой буквы этой строки (charCodeAt)
var str = 'test';
for (var i = 0; i < str.length; i++) {
    var res = str.charCodeAt(i);
    console.log(res);
}
// Вывести числа от 100, до 0
function funct() {
    for (var i = 100; i >= 0; i--) {
        console.log(i);
    }
}
console.log(funct());
// есть строка слов, разделённых запятой. Увеличить первую букву каждого слова
var strUp = 'dmitry, kirill, vadim, ilya saf';
function strFunct() {
    var splitArr = strUp.split(' ');
    var strUpRes = ' ';
    for (var i = 0; i < splitArr.length; i++) {
        var name_1 = splitArr[i];
        var first = name_1.substring(0, 1).toLocaleUpperCase();
        var leftover = name_1.substring(1, name_1.length);
        strUpRes = strUpRes + first + leftover + ' ';
    }
    return strUpRes;
}
console.log(strFunct());
// Есть строка 'hello' сделать её 'olleh' (без использования reverse)
var strExmpl = 'hello';
function reversStr() {
    if (strExmpl === '') {
        return '';
    }
    else {
        return (strExmpl.substring(1)) + strExmpl.charAt(0);
    }
}
console.log(reversStr());
