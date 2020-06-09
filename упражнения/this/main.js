// Методы объекта, "this"
// Для доступа к информации внутри объекта метод может использовать ключевое слово this.
let userable = {
    name: "Джон",
    age: 30,
  
    sayHi() {
      // this - это "текущий объект"
      console.log(this.name);
      console.log(this.age);
    }
  
  };
  userable.sayHi(); // Джон

//   Значение this вычисляется во время выполнения кода и зависит от контекста.
//   Например, здесь одна и та же функция назначена двум разным объектам и имеет различное значение «this» при вызовах


let user = { name: "Hanna" };
let admin = { name: "Montana" };

function sayHi() {
  console.log( this.name );
}

// используем одну и ту же функцию в двух объектах
user.f = sayHi;
admin.f = sayHi;

// вызовы функции, приведённые ниже, имеют разное значение this
// "this" внутри функции является ссылкой на объект, который указан "перед точкой"
user.f(); // Джон  (this == user)
admin.f(); // Админ  (this == admin)

admin['f'](); // Админ (неважен способ доступа к методу - через точку или квадратные скобки)

// Правило простое: при вызове obj.f() значение this внутри f равно obj. Так что, в приведённом примере это user или admin.

// function makeUser() {
//     return {
//       name: "Джон",
//       ref() {
//         return this;
//       }
//     };
//   };
  
//   let user = makeUser();
  
//   alert( user.ref().name ); // Джон



// Создайте объект calculator (калькулятор) с тремя методами:

// read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
// sum() (суммировать) возвращает сумму сохранённых значений.
// mul() (умножить) перемножает сохранённые значения и возвращает результат.
// let calculator = {
//   // ... ваш код ...
// };

// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );

let calculator = {
    read(){
        this.a = +prompt('a?', 0);
        this.b = +prompt('b?', 0);
    },
    sum(){
        return this.a + this.b;
    },
    mul(){
        return this.a + this.b;
    }

};

// calculator.read();
// console.log( calculator.sum() );
// console.log( calculator.mul() );

// let schetcik = {
//    read(){
//     a = prompt('a?','');
//     b = prompt('b?','');
//    },
//    sum(){

//    },
//    mul(){

//    },
// }