//Lesson 4

//Task 1 💻
//Пользователь передает через переменную свою фамилию и имя. Выведите приветсвие Привет <Имя> <Фамилия> 5 раз используя для каждого варианта разный регистр

let fullName: string = 'Привет Dmitry Shkutnik';
let lowCase: any = fullName.toLocaleLowerCase();
let UppCase: any = fullName.toLocaleUpperCase();

console.log(lowCase.repeat(5), UppCase.repeat(5))

//Знаю, что не так :) Ещё подробнее task1 покапаться, возможно через цикл





//Task 2 💻
//Дана строка 'я учу typescript!'. Проверить, есть ли данное слово в строке: если есть - вывести позицию подстроки 'учу', если нет - вывести строку Данной подстроки нет

let testStr2: string = 'я учу typescript!';

if (testStr2.includes('учу')) {
    console.log(testStr2.indexOf('учу'))
} else {
    console.log('Данной подстроки нет');
    
}




// Task 3 💻
// Дана произвольная строка. Реализуйте метод, который принимает позицию символа в строке. 
// Если переданное число больше длины строки, то должно отобразиться сообщение: Вы вышли за границу строки

let testStr3 : string = 'Hello';
let position : number = 6;
if (testStr3.charAt(position)) {
    console.log(testStr3.charAt(position)); 
} else {
    console.log('Вы вышли за границу строки');
}



// Task 4 💻
// Дана произвольная строка. Реализуйте метод, который проверяет заканчивается ли предложение точкой или нет. Если оканчивается, 
// вывести предложение - Данное предложение закончено, если нет, то В конце предложения не хватает точки

let testStr4 : string = 'Test string.';

console.log()
if (testStr4.endsWith('.')) {
    console.log('Данное предложение окончено');
} else {
    console.log('В конце предложения не хватает точки');
    
}


//Task 5 💻
//Дана строка 'я учу typescript!'. Вырежите из нее слово 'учу' и слово 'typescript' разными способами (через substring, slice).


let testStr5: string = 'я учу typescript!'
console.log(testStr5.substring(0,1));
console.log(testStr5.slice(0,1));
 

//Task 6 💻
//Дана строка 'я учу typescript!'. С помощью метода split запишите каждое слово этой строки в отдельный элемент массива.
let testStr6: string = 'Я Учу Typescript'
let varArray: any = testStr6.split(' ')
console.log(testStr6.split (' '));


//Task 7 💻
//Дана строка ' я учу typescript! '. Выведите строку, без начальных и пробелов в конце строки.
let testStr7: string = ' я учу typescript! '
console.log(testStr7.trim());


//Task 8 💻
//Дано число 8.829734872948. Выведите число с 3 значащами цифрами после точки

let varNum1: number = 8.829734872948;
console.log(varNum1.toFixed(3))


//Task 9 💻
//Дана произвольное число. Реализовать метод проверяющий является ли это число целочисленным или нет. Если является - вывести его, если нет - округлить до целой части.

let varNum2: number = 5.99

if(Number.isInteger(varNum2)) {
console.log(varNum2);
} else {
console.log(Math.round(varNum2));
}



//Task 10 💻
//Дано произвольное число с плавающей точкой. Реализовать методы округления данного числа до ближайшего меньшего, большего аргумента и ближайшего целого числа.


let varNum3 : number = 5.4998;

console.log(Math.floor(varNum3)); //округляет до ближайшего меньшего целого числа
console.log(Math.ceil(varNum3)); //округляет до ближайшего большего целого числа
console.log(Math.round(varNum3)); //округляет до ближайшего целого числа



//Task 11 💻
//Дана произвольное число с плавающей точкой. Реализовать методы округления данного числа до ближайшего меньшего, большего аргумента и ближайшего целого числа.

//------------------Такая же задача как и Task10---------------

let varNum4 : number = 1.09;

console.log(Math.floor(varNum4)); //округляет до ближайшего меньшего целого числа
console.log(Math.ceil(varNum4)); //округляет до ближайшего большего целого числа
console.log(Math.round(varNum4)); //округляет до ближайшего целого числа





//Task 12 💻
//Дана произвольное число. Реализовать метод возводящий число в степень. Степень возведения указывается как параметр к методу

let varNum5 : number = 10;
let step : number = 2;
console.log(Math.pow(varNum5,step)) // либо вместо step писать само число
 

// Task 13 💻
// Дана произвольное число. Реализовать метод возводящий число в степень. Степень возведения указывается как параметр к методу.

//-------------------Такое же как Task12-----------------------



// Task 14 💻
// Реализовать метод получения рандомного целочисленного числа в заданном диапазоне. Диапазон задается аргументами фунции

let minRange : number = Math.ceil(11.5);
let maxRange : number = Math.floor(20.1);
let rs : number = Math.floor(Math.random() * (maxRange-minRange))+minRange;

console.log(rs);
