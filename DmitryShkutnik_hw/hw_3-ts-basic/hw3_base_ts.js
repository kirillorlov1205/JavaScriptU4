//Type script tasks:
var _a;
//Task 1. Создайте переменные, затем сложите их и выведите результат в консоль разработчика.
var x = 20;
var y = 58;
var z = 42;
console.log(x + y + z);
// //Task 2
// Создайте переменные:
// - количество секунд в минуте
// - количество минут в часу
// - количество часов в сутках
// - количество суток в году
// Посчитайте ваш возраст в секундах и поместите результат в переменную myAgeInSeconds
var secInMin = 60;
var minInHour = 60;
var hoursInDay = 24;
var daysInYear = 365;
function ageInSec() {
    return 25 * daysInYear * hoursInDay * minInHour * secInMin;
}
var myAgeInSeconds = ageInSec();
console.log(myAgeInSeconds);
//Task 3
// Создайте две переменные. Поместите в них переменную count и превратите в строку,
// а userName наоборот в число. Попробуйте реализовать задачу двумя разными способами.
//1 вариант
var count = 42;
var countString = String(count);
var userName = "42";
var userNameNumber = Number(userName);
console.log(typeof countString);
console.log(typeof userNameNumber);
//2 вариант
var count2 = 42;
var countString2 = count2.toString();
var userName2 = "42";
var userNameNumber2 = parseInt(userName2);
console.log(typeof countString2);
console.log(typeof userNameNumber2);
// Task 4
// Имеется три переменны. Сложите переменные так, чтобы в результате получилось
// выражение: 12 белых медведей и результат выведите в консоль.
var a2 = 1;
var aStr = String(a2);
var b2 = 2;
var bStr = String(b2);
var c = " белых медведей";
console.log(aStr + bStr + c);
//Task 5
// Создайте переменные и поместите в них нижеприведенные слова. Затем создайте еще одну переменную lengthWords
// и посчитайте в ней длинну всех слов из списка (у строк есть свойство length):
// - доступ
// - морпех
// - наледь
// - попрек
// - рубило
var numA = "доступ";
var numB = "морпех";
var numC = "наледь";
var numD = "попрек";
var numF = "рубило";
var lengthWords = numA + numB + numC + numD + numF;
console.log(lengthWords.length);
// Task 6
// Создать 3 переменные разных типов и вывести в консоль для каждой из них строку следующего вида:
// `Variable: %variable name% have type: %type variable%`
var variableNum = 25;
var variableStr = "Dmitry";
var variableBool = true;
console.log("Varivable ".concat(variableNum, " have type: ").concat(typeof variableNum));
console.log("Varivable ".concat(variableStr, " have type: ").concat(typeof variableStr));
console.log("Varivable ".concat(variableBool, " have type: ").concat(typeof variableBool));
// Task 7
// Создайте переменные и присвойте им значения:
// Затем с помощью оператора typeof выведите в консоль все типы созданных значений переменных.
var num1 = "true";
var num2 = false;
var num3 = 17;
var num4 = undefined;
var num5 = null;
console.log(typeof num1, typeof num2, typeof num3, typeof num4, typeof num5);
// Task 8
// Даны две переменные.
// С помощью условий выведите в консоль разработчика наибольшее число.
var height = 15;
var width = 20;
console.log(Math.max(height, width)); // вариант с помощью метода math.max - возвращает наибольшее из чисел
//Второй способ с создание переменной max внутри условия
var height2 = 15;
var width2 = 20;
if (height2 > width2) {
    var max = height2;
}
else {
    var max = width2;
}
console.log(max);
// Task 9
// Написать перебор от 1 до 20, где выведутся все числа кратные трём.
// Для вычисления кратности обратите внимание на оператор %
for (var i = 1; i <= 20; i++) {
    if (i % 3 === 0) {
        console.log(i);
    }
}
// Task 10
// Нам надо идти на работу, но нужно проверить все ли мы взяли или нет?
// Нам точно нужны ключи документы и ручка, но из еды нам надо яблоко или апельсин.
// Для решения этой задачи нам помогут логические операторы || &&.
// Ответ поместите в переменную shouldGoToWork
var key = true;
var documents = true;
var pen = true;
var apple = false;
var orange = true;
var shouldGoToWork = function () {
    if (key == true && documents == true && pen == true && apple == true || orange == true) {
        return 'Task 10. Можем идти на работу, ничего не забыли';
    }
};
console.log(shouldGoToWork());
// Task 11
// Написать программу, которая принимает число:
// 1. Если число делится без остатка на 5 выводим сообщение Fiz
// 2. Если число делится без остатка на 3 выводим сообшение Buz
// 3. Если число делится без остатка и на 3 и на 5 выводим сообшение FizBuz
var acceptNumber = 15;
if (acceptNumber % 3 == 0 && acceptNumber % 5 == 0) {
    console.log("FizBuz");
}
else if (acceptNumber % 3 == 0) {
    console.log("Buz");
}
else {
    console.log("Fiz");
}
// //Task 12 💻
// Написать программу, которая выполняет следующие операции:
// Получает возраст пользователя, если он больше 18, то выводит сообщение - Попей пивка.
// Если меньше, то выводит сообщение - Пей колу.
// Добавить условие, что если возраст от 16-18, выводим сообщение - Можешь выкурить сигаретку, только маме не говори.
var userAge = 18;
if (userAge >= 16 && userAge <= 18) {
    console.log('Можешь выкурить сигаретку, только маме не говори');
}
else if (userAge > 18) {
    console.log('Попей пивка');
}
else {
    console.log('Пей колу');
}
// Task 13 💻
// Напишем программу для туристического терминала. Создат переменную для стороны света в которую
// пользовател хотел отправиться. После ввода данных мы должны вывести в консоль сообщение из списка.
// Если пользователь ввел неверные данные, выведите сообщение в консоль чтобы он попробовал еще раз.
// юг на юг пойдешь счастье найдешь
// север на север пойдешь много денег найдешь
// запад на запад пойдешь верного друга найдешь
// восток на восток пойдешь разработчиком станешь
// Используйте конструкцию switch
var compassPoints = 'west';
switch (compassPoints) {
    case 'south':
        console.log('на юг пойдешь счастье найдешь');
        break;
    case 'north':
        console.log('на север пойдешь много денег найдешь');
        break;
    case 'west':
        console.log('на запад пойдешь верного друга найдешь');
        break;
    case 'east':
        console.log('на восток пойдешь разработчиком станешь');
        break;
    default:
        console.log('Попробуйте ещё раз');
}
// ADVANCED level
// Task 1 👨‍🏫
// Поменяйте значение переменных местами не создавая дополнительной переменной:
//Вариант1
var a = 4;
var b = 3;
_a = [b, a], a = _a[0], b = _a[1];
console.log(a);
console.log(b);
//Вариант2
var a1 = 4;
var b1 = 3;
b1 = a1 + b1;
a1 = b1 - a1;
b1 = b1 - a1;
console.log(a);
console.log(b);
// Task 2 👨‍🏫
// Написать программу, которая выполняет следующие операции:
// -Запрашивает у пользователя число.
// -Последовательно задает вопрос: cколько отнять / прибавить / умножить /разделить от предыдущего результата?
// -По окончании вывести пользователю результат в консоль, содержащий формулу и результат например:
// ((((6 - 10) + 5) * 20) / 2 = 110)
var enterNumber = 5;
var minusVar = 5;
var sumVar = 5;
var multVar = 5;
var divisVar = 5;
var result = function () {
    return (((enterNumber - minusVar) + sumVar) * multVar) / divisVar;
};
console.log("(((".concat(enterNumber, " - ").concat(minusVar, ")+").concat(sumVar, ")*").concat(multVar, ")/").concat(divisVar, " = ").concat(result()));
// 2-й вариант в консоле браузера с функцией js prompt, которая запрашивает у юзера значения
// let enterNumber = prompt ('Введите число', '5');
// let minusVar = prompt ('Сколько отнять от предыдущего результата?', '5');
// let sumVar = prompt ('Сколько прибавить к предыдущему результату?', '5');
// let multVar = prompt ('На сколько умножить предыдущий результат?', '5');
// let divisVar = prompt ('На сколько поделить предыдущей результат?', '5');
// let result = function () {
//   return (((enterNumber - minusVar)+sumVar)*multVar)/divisVar
// }
// console.log(`(((${enterNumber} - ${minusVar})+${sumVar})*${multVar})/${divisVar} = ${result()}`)
// Task 3 👨‍🏫
// Написать программу, которая будет выводить в консоль лесенку.
//     #
//     ##
//     ###
//     ####
//     #####
//     ######
// Не забудьте вопспользоваться циклами
var id = '#';
while (id.length < 7) {
    console.log(id + '');
    id = id + '#';
}
