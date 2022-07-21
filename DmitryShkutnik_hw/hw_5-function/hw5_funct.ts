// Task 1 💻
// Написать функцию getSum, которая будет высчитывать сумму чисел от нуля, до параметра, который мы в неё передаем.

// Если передадим число 100 то, надо вычислить сумму чисел от 0 до 100 (должно получится 5050)

function getSum (enterNum: number) {

    let result=0;
    for (var i=1; i <= enterNum; i++) {
        result += i;
    }
return result;
}
console.log(getSum(100));


// Task 2 💻
// Напишите функцию которая в качестве аргумента принимает в себя сумму кредита который хочет получить клиент и верните результат переплаты по кредиту:

// процентная ставка в год — 17%,
// количество лет — 5.
// Мы пишем функцию для хорошего банка, поэтому сумма кредита не увеличивается.
// Сумма ежемесячный платёжа по формуле: P = S x (r x (1+r)n) / ((1+r)n – 1), S – сумма долга, r – месячная процентная ставка, а n – срок, на который выдан кредит (в месяцах)
// Сумма переплаты: срок кредита в месяцах * ежемесячный платёж - сумма кредита
  

let monthDuration = 60;
let rPerc: number = 1.17;


function r () {
    return Math.pow(rPerc,monthDuration);
 }


function credit (sumCred:number){
    
   
function monthPay () {
    return sumCred * (0.17 * (r())) / ((r())-1);
 }
 

function sumOverpay () {
    return monthDuration * monthPay() - sumCred;
}

return sumOverpay();

}


console.log(credit(5000));

 




// Task 3 💻
// Написать функцию trimString которая в качестве аргумента принимает три параметра:

// строку
// значение от
// значение по
// После вызова функция должна вернуть переданную строку обрезанную по значениям от и по

function trimString (str: string, valFrom: number, valBy: number) {
    console.log (str.substring(valFrom,valBy));
}
trimString('test', 1, 3);



// Task 4 💻
// Написать функцию getSumNumbers, которая будет принимать число и вычислять сумму цифр из которых состоит число.

// Для 2021 это будет 5.

function getSumNumbers (valNum : number) {
    let sum = 0;
    let x = String(valNum);
    for (let i=0; i < x.length; i++ ){        
        sum += Number (x[i]);
        
    }
    return (sum)
}
console.log(getSumNumbers(2021))


// Task 5 💻
// Написать функцию getSum которая принимает два целых числа a и b, которые могут быть положительными или отрицательными, найти сумму всех чисел между ними, 
// включая их, и вернуть ее. Если два числа равны, верните a или b.

//     getSum(1, 0) == 1   // 1 + 0 = 1
//     getSum(1, 2) == 3   // 1 + 2 = 3
//     getSum(0, 1) == 1   // 0 + 1 = 1
//     getSum(1, 1) == 1   // 1 Since both are same
//     getSum(-1, 0) == -1 // -1 + 0 = -1
//     getSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2



// Task 6 💻
// Напишите функцию fooboo которая принимает в качестве аргумента три параметра:

// булевое значение
// функцию foo которая выводит в консоль свое имя
// функцию boo которая выводит в консоль свое имя
// Если переданное булевое значение true запускаем функцию foo иначе boo

// function fooboo (bol: boolean, foo:)




