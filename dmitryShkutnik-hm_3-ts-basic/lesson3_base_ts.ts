//Type script tasks:

//Task 1. Создайте переменные, затем сложите их и выведите результат в консоль разработчика.

let x : number = 20;
let y : number = 58;
let z : number = 42;

console.log(x+y+z);




// //Task 2 
// Создайте переменные:
// - количество секунд в минуте
// - количество минут в часу
// - количество часов в сутках
// - количество суток в году
// Посчитайте ваш возраст в секундах и поместите результат в переменную myAgeInSeconds

let secInMin : number = 60;
let minInHour : number = 60;
let hoursInDay : number = 24;
let daysInYear : number = 365;

function ageInSec () {
   return 25 * daysInYear * hoursInDay * minInHour * secInMin;
}

let myAgeInSeconds = ageInSec();
console.log(myAgeInSeconds);





//Task 3 
// Создайте две переменные. Поместите в них переменную count и превратите в строку, 
// а userName наоборот в число. Попробуйте реализовать задачу двумя разными способами.

//1 вариант
let count : number = 42;
let countString : string = String(count);

let userName : string = "42";
let userNameNumber : number = Number(userName);

console.log(typeof countString);
console.log(typeof userNameNumber);

//2 вариант
let count2 : number = 42;
let countString2 : string = count2.toString();

let userName2 : string = "42";
let userNameNumber2 : number = parseInt(userName2);

console.log(typeof countString2);
console.log(typeof userNameNumber2);




// Task 4
// Имеется три переменны. Сложите переменные так, чтобы в результате получилось 
// выражение: 12 белых медведей и результат выведите в консоль.

let a : number = 1;
let aStr : string = String(a);


let b : number = 2;
let bStr : string = String(b);

let c : string = " белых медведей";

console.log(aStr+bStr+c);




//Task 5
// Создайте переменные и поместите в них нижеприведенные слова. Затем создайте еще одну переменную lengthWords 
// и посчитайте в ней длинну всех слов из списка (у строк есть свойство length):
// - доступ
// - морпех
// - наледь
// - попрек
// - рубило

let numA : string = 'доступ';
let numB : string = 'морпех';
let numC : string = 'наледь';
let numD : string = 'попрек';
let numF : string = 'рубило';


let lengthWords : string = numA + numB + numC + numD + numF;

console.log(lengthWords.length);





// Task 6 
// Создать 3 переменные разных типов и вывести в консоль для каждой из них строку следующего вида:
// `Variable: %variable name% have type: %type variable%`

let variableNum : number = 25;
let variableStr : string = 'Dmitry';
let variableBool : boolean = true;

console.log(`Varivable ${variableNum} have type: ${typeof variableNum}`)
console.log(`Varivable ${variableStr} have type: ${typeof variableStr}`)
console.log(`Varivable ${variableBool} have type: ${typeof variableBool}`)






// Task 7 
// Создайте переменные и присвойте им значения:
// Затем с помощью оператора typeof выведите в консоль все типы созданных значений переменных.

let num1 : string = "true";
let num2 : boolean = false;
let num3 : number = 17;
let num4 : undefined = undefined;
let num5 : null = null;

console.log(typeof num1, typeof num2, typeof num3, typeof num4, typeof num5);



// Task 8 
// Даны две переменные.
// С помощью условий выведите в консоль разработчика наибольшее число.

let height = 15;
let width = 20;

console.log(Math.max(height,width)); // вариант с помощью метода math.max - возвращает наибольшее из чисел