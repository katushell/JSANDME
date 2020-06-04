// // литеральный вид 
// new user = {};
// //сконструированный вид
// let user = new Object();

//при использовании литерального синтаксиса, можно сразу же поместить свойства
 let userKeys = {
     name: 'Kotya',
     age: '19',
 };

 // получаем свойства объекта:
console.log( userKeys.name ); // Kotya
console.log( userKeys.age ); // 19
//Значение может быть любого типа. Давайте добавим свойство с логическим значением:

userKeys.isAdmin = true;

console.log( userKeys.isAdmin);

//можно удалить свойство из объекта
 delete userKeys.name

 console.log( userKeys.name ); // undefined

 //если имя свойства больше одного слова, оно должно быть в кавычках

 let newObj = {
     name: 'Smosh',
     "what is it?": 'ball',
 }

 console.log(newObj['what is it?']) //вызываются длинные свойства через [квадратные скобки]
 
 newObj['what is it?'] = 'gandon';
 console.log(newObj['what is it?']);

 delete newObj['what is it?'];
 console.log(newObj['what is it?']);

 //Квадратные скобки также позволяют обратиться к свойству, имя которого может быть результатом выражения. 
 //Например, имя свойства может храниться в переменной:

 let thirdObj = {
     name: 'VJLink',
     age: 22,
 };
 let quest = prompt('Do you like Dota2?', 'name');

 alert(thirdObj[quest]);
//Запись «через точку» такого не позволяет!

//Мы можем использовать квадратные скобки в литеральной нотации для создания вычисляемого свойства.

let fruit = prompt('Какой фрукт купить?', 'pineapple');

let bag = {
    [fruit]: 'io',
}
console.log(bag.pineapple);

//===

// let fruit = prompt("Какой фрукт купить?", "pineapple");
// let bag = {};

// // имя свойства будет взято из переменной fruit
// bag[fruit] = 'io';

//===

// let fruit = 'apple';
// let bag = {
//   [fruit + 'Computers']: 5 // bag.appleComputers = 5
// };

//Свойство из переменной

function makeUser(name, age) {
    return {
      name: name,
      age: age
      // ...другие свойства
    };
  }
  
  let user = makeUser("John", 30);
 console.log(user.name); // John

  //вместо name:name можно писать просто name

//   function makeUser(name, age) {
//     return {
//       name, // то же самое, что и name: name
//       age   // то же самое, что и age: age
//       // ...
//     };
//   }

//Мы можем использовать как обычные свойства, так и короткие в одном и том же объекте:
// let user = {
//     name,  // тоже самое, что и name:name
//     age: 30
//   };

//все имена свойств являются строками, а если это не строка, то будет преведено к строке
//например 0: key, число 0 станет строкой '0'


// Как мы уже знаем, имя переменной не может совпадать с зарезервированными словами, такими как «for», «let», «return» и т.д.

let objFourth = {
    for: 1,
    let: 2,
    return: 3
  };
  
  console.log( objFourth.for + objFourth.let + objFourth.return );  // 6

  //Особенность объектов в том, что можно получить доступ к любому свойству!
//Также существует специальный оператор "in" для проверки существования свойства в объекте.

  let fiveObj = { name: "John", age: 30 };

console.log( "age" in fiveObj ); // true, user.age существует
console.log( "blabla" in fiveObj ); // false, user.blabla не существует

//Если мы опускаем кавычки, это значит, что мы указываем переменную, в которой находится имя свойства. Например:

//let user = { age: 30 };
// let key = "age";
// alert( key in user ); // true, имя свойства было взято из переменной key

//Обычно строгого сравнения "=== undefined" достаточно для проверки наличия свойства.
// Но есть особый случай, когда оно не подходит, и нужно использовать "in".
// Это когда свойство существует, но содержит значение undefined:

let sixObj = {
    key: undefined,
}
console.log(sixObj.key)
console.log('key' in sixObj);

// Цикл «for…in»
// Для перебора всех свойств объекта используется цикл for..in. Этот цикл отличается от изученного ранее цикла for(;;).

let sevenObj = {
    key1: 'fff',
    name,
    age: 30,
    isAdmin: true,
}
//можно называть любым образом (kkl, shit, key, car, apple)
for (let kkl in sevenObj){
    console.log(kkl);
    console.log(sevenObj[kkl])
}


//Упорядочение свойств объекта

let codes = {
    "49": "Германия",
    "41": "Швейцария",
    "44": "Великобритания",
    // ..,
    "1": "США"
  };
  
  for (let code in codes) {
    console.log(code); // 1, 41, 44, 49
  }

  // Math.trunc - встроенная функция, которая удаляет десятичную часть
  console.log( String(Math.trunc(Number("49"))) ); // "49", то же самое ⇒ свойство целочисленное
  console.log( String(Math.trunc(Number("+49"))) ); // "49", не то же самое, что "+49" ⇒ свойство не целочисленное
  console.log( String(Math.trunc(Number("1.2"))) ); // "1", не то же самое, что "1.2" ⇒ свойство не целочисленное

  //js упорядычевает только целочисленные значения, поэтому чтобы получить телефонные кода в объявленном порядке, нужно сделать так:


let codes2 = {
    "+49": "Германия",
    "+41": "Швейцария",
    "+44": "Великобритания",
    // ..,
    "+1": "США"
  };
  
  for (let code2 in codes2) {
    console.log(+code2); // 1, 41, 44, 49
  }

// Когда переменная объекта копируется – копируется ссылка, сам же объект не дублируется.
// Если мы представляем объект как ящик, то переменная – это ключ к нему. Копирование переменной дублирует ключ, но не сам ящик.

// let user = { name: "John" };
// let admin = user; // копируется ссылка

//Мы можем использовать любую из переменных для доступа к ящику и изменения его содержимого:

let userP = { name: 'John' };
let admin = userP;

admin.name = 'Pete'; // изменено по ссылке из переменной "admin"
console.log(userP.name); // 'Pete', изменения видны по ссылке из переменной "user"

//Приведённый выше пример демонстрирует, что объект только один. 
//Как если бы у нас был один ящик с двумя ключами и мы использовали один из них (admin), 
//чтобы войти в него и что-то изменить, а затем, открыв ящик другим ключом (user), мы бы увидели эти изменения.

//Операторы равенства == и строгого равенства === для объектов работают одинаково.
//Два объекта равны только в том случае, если это один и тот же объект.

let a = {};
let b = a; // копирование по ссылке

console.log( a == b ); // true, обе переменные ссылаются на один и тот же объект
console.log( a === b ); // true

let g = {};
let h = {};

console.log( g == h ); //false, несмотря на то что, g и h оба пустые

//Объект, объявленный через const, может быть изменён.

// const itsConst = {
//     name: 'Dima',
// }

// itsConst.isAdmin = true;
// console.log(itsConst.isAdmin)

// const itsConst2 = {
//     name: 'Kotya',
// }

// itsConst = {
//     name: 'Natya',
// }

//будет ошибка, потому что нельзя переопределять константу


let eightObj = {
    flag: 'white',
}

let clone = {}

for (let key in eightObj){
    clone[key] = eightObj[key];
}
// теперь в переменной clone находится абсолютно независимый клон объекта.

clone.flag = 'green'; // изменим в нём данные
console.log(clone.flag); //green
console.log(eightObj.flag); //white, т к мы просто скопировали, а не перепесали

//Object.assign

let o = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// копируем все свойства из permissions1 и permissions2 в user
Object.assign(o, permissions1, permissions2);
console.log('canView' in o)
// now o = { name: "John", canView: true, canEdit: true }

// Напишите код, выполнив задание из каждого пункта отдельной строкой:

// Создайте пустой объект user.
// Добавьте свойство name со значением John.
// Добавьте свойство surname со значением Smith.
// Измените значение свойства name на Pete.
// Удалите свойство name из объекта.

let taskObject = {
    name: 'John',
    surname: 'Smith',
}
console.log(taskObject.name);
taskObject.name = 'Pete';
console.log(taskObject.name);

delete taskObject.name;
console.log(taskObject.name);


// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.
// Должно работать так:

// let schedule = {};
// alert( isEmpty(schedule) ); // true
// schedule["8:30"] = "get up";
// alert( isEmpty(schedule) ); // false

// function isEmpty(obj) {
//     for (let key in obj) {
//       // если тело цикла начнет выполняться - значит в объекте есть свойства
//       return false;
//     }
//     return true;
//   }

//   У нас есть объект, в котором хранятся зарплаты нашей команды:

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }
// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.

// Если объект salaries пуст, то результат должен быть 0.

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
}
 let sum = 0;
  for (let key in salaries) {
    sum += salaries[key];
  }
  
  alert(sum); // 390


      

