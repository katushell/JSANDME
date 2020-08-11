let foo = (a , b) => (a + b)

// То же самое, что

// let foo = (a, b){
//     return (a + b)
// }

console.log( foo(80, 2) )

//если только один элемент, то скобки можно опустить

let foo2 = d => (d * 2);
console.log(foo2(10))

//Если нет аргументов, указываются пустые круглые скобки

let sayHi = () => alert("Hello!");
sayHi();

//Функции-стрелки могут быть использованы так же, как и Function Expression.

let age = prompt('How old re u?', '')
let myAge = (age < 18)?
() => confirm('I love dicks'):
() => confirm('I am Big Boss!');

myAge();
//Стрелочные функции очень удобны для простых однострочных действий, когда лень писать много букв.

let sum = (a, b) => {  // фигурная скобка, открывающая тело многострочной функции
    let result = a + b;
    return result; // при фигурных скобках для возврата значения нужно явно вызвать return
  };
  
console.log( sum(12, 42) );

// Замените код Function Expression стрелочной функцией
// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
//   }
  
//   ask(
//     "Вы согласны?",
//     function() { alert("Вы согласились."); },
//     function() { alert("Вы отменили выполнение."); }
//   );



function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  
  ask(
    "Вы согласны?",
    () => alert("Вы согласились."),
    () => alert("Вы отменили выполнение.")
  );