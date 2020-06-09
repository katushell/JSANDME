 let wordsLang = ['One' , 'Schule' , 'Beresta'];


console.log( wordsLang[0], wordsLang[1] ); //One Schule
console.log( wordsLang[1] ); //Schule
console.log( wordsLang[2] ); //Beresta

wordsLang[2] = 'Pivo'

console.log(wordsLang[2])

wordsLang[3] = 'Xui';
console.log(wordsLang[3])

console.log(wordsLang.length)
wordsLang[4] = function() { console.log('это вот функция из массива'); } 
console.log(wordsLang[4])
wordsLang[4]()

//Методы, работающие с концом массива:
let fruits = ["Яблоко", "Апельсин", "Груша"];

console.log( fruits.pop() ); // удаляем "Груша" и выводим его

console.log( fruits ); // Яблоко, Апельсин
console.log( fruits.pop() ); //удалится Апельсин
console.log( fruits ); // Яблоко

fruits.push("Груша");
console.log( fruits ); // Яблоко

//Методы, работающие с началом массива:

let vegetables = ["Морковь", "Картошка", "Кабачок"];

console.log( vegetables.shift() ); // удаляем Морковь

console.log( vegetables ); //Картошка, Кабачок
vegetables.unshift('БАКЛАЖАН');
console.log( vegetables );

// Методы push и unshift могут добавлять сразу несколько элементов!

let fruity = ["Банан"]

let arr = fruity; // копируется по ссылке (две переменные ссылаются на один и тот же массив)

console.log( arr === fruity ); // true

arr.push("Груша"); // массив меняется по ссылке

console.log( fruity ); // Банан, Груша - теперь два элемента

let Arra = ["Яблоко", "Апельсин", "Груша"];

for (let i = 0; i < Arra.length; i++) {
  alert( Arra[i] );
}
let fruit = [];
fruit[123] = "Яблоко";

console.log( fruit.length ); // 124

// push(...items)добавляет items в конец массива.
// pop() удаляет элемент в конце массива и возвращает его.
// shift() удаляет элемент в начале массива и возвращает его.
// unshift(...items) добавляет items в начало массива.

// for (let i=0; i<arr.length; i++) – работает быстрее всего, совместим со старыми браузерами.
// for (let item of arr) – современный синтаксис только для значений элементов (к индексам нет доступа).



// Создайте массив styles с элементами «Джаз» и «Блюз».
// Добавьте «Рок-н-ролл» в конец.
// Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
// Удалите первый элемент массива и покажите его.
// Вставьте «Рэп» и «Регги» в начало массива.
let styles = ["Джаз", "Блюз"];
styles.push("Рок-н-ролл");
styles[Math.floor((styles.length - 1) / 2)] = "Классика";
console.log( styles.shift() );
styles.unshift("Рэп", "Регги");

let arrr = ["a", "b"];

arrr.push(function() {
  console.log( this );
})

arrr[2](); // "a","b",function


// Напишите функцию sumInput(), которая:
// Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
// Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
// Подсчитывает и возвращает сумму элементов массива.
// P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».


