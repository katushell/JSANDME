// switch (browser) {
//     case 'Edge':
//       alert( "You've got the Edge!" );
//       break;
  
//     case 'Chrome':
//     case 'Firefox':
//     case 'Safari':
//     case 'Opera':
//       alert( 'Okay we support these browsers too' );
//       break;
  
//     default:
//       alert( 'We hope that this page looks ok!' );
//   }

// Напишите if..else, соответствующий следующему switch

//  if (browser == 'Edge'){
//     alert( "You've got the Edge!" ) break
//  } else if (browser == 'Chrome' || browser == 'Safari' || browser == 'Opera'){
//     alert( 'Okay we support these browsers too' ) break
//  } else {
//     alert( 'We hope that this page looks ok!' );
//  }

// const number = +prompt('Введите число между 0 и 3', '');

// if (number === 0) {
//   alert('Вы ввели число 0');
// }

// if (number === 1) {
//   alert('Вы ввели число 1');
// }

// if (number === 2 || number === 3) {
//   alert('Вы ввели число 2, а может и 3');
// }  

// поменять if на switch
// const number = +prompt('Введите число между 0 и 3', '');

// switch (number) {
//     case 0:
//         alert('Вы ввели число 0');
//         break;
//     case 1:
//         alert('Вы ввели число 1');
//         break;
//     case 2:
//     case 3:
//         alert('Вы ввели число 2, а может и 3');
//         break;
// }

// Логические операторы

// alert( true || true );   // true
// alert( false || true );  // true
// alert( true || false );  // true
// alert( false || false ); // false

// let hour = 12;
// let isWeekend = false;

// if (hour > 10 || hour < 18 || isWeekend) {
//   alert( 'Офис открыт!' ); // это будний день
// } else {
//     alert( 'Офис закрыт :( ' ); // это выходной
// }

// Оператор || выполняет следующие действия:
// Вычисляет операнды слева направо.
// Каждый операнд конвертирует в логическое значение. Если результат true, останавливается и возвращает исходное значение этого операнда.
// Если все операнды являются ложными (false), возвращает последний из них.

// alert( 1 || 0 ); // 1
// alert( true || 'no matter what' ); // true

// alert( null || 1 ); // 1 (первое истинное значение)
// alert( null || 0 || 1 ); // 1 (первое истинное значение)
// alert( undefined || null || 0 ); // 0 (поскольку все ложно, возвращается последнее значение)

// let currentUser = null;
// let defaultUser = "John";

// let name = currentUser || defaultUser || "unnamed";

// alert( name ); 



// let x;
// true || (x = 1); получится undefined, так как (x = 1) не вычисляется
// false || (x = 1);
// alert(x); // 1



// alert( true && true );   // true
// alert( false && true );  // false
// alert( true && false );  // false
// alert( false && false ); // false

// let hour = 12;
// let minute = 30;

// if (hour == 12 && minute == 30) {
//   alert( 'The time is 12:30' );
// }

// Оператор && выполняет следующие действия:
// Вычисляет операнды слева направо.
// Каждый операнд преобразует в логическое значение. Если результат false, останавливается и возвращает исходное значение этого операнда.
// Если все операнды были истинными, возвращается последний.


// В частности, двойное НЕ используют для преобразования значений к логическому типу
//Приоритет НЕ ! является наивысшим из всех логических операторов, поэтому он всегда выполняется первым, перед && или ||.

//alert( !!"non-empty string" ); // true
// alert( !!null ); // false

//то же самое, что Bollean(null) 

//Напишите условие if для проверки, что переменная age находится в диапазоне между 14 и 90 включительно.
// «Включительно» означает, что значение переменной age может быть равно 14 или 90.

// let age;
// if (age >= 14 && age <= 90){
//     alert('спина болит?')
// }

// Напишите условие if для проверки, что значение переменной age НЕ находится в диапазоне 14 и 90 включительно.
// Напишите два варианта: первый с использованием оператора НЕ !, второй – без этого оператора.

// let age;
// if (!(age >= 14 && age <= 90)){
//     alert('спина болит?')
// }
// if (age < 14 || age > 90);

// Какие из перечисленных ниже alert выполнятся?
// Какие конкретно значения будут результатами выражений в условиях if(...)?

// if (-1 || 0) alert( 'first' ); //Результат -1 || 0 = -1, в логическом контексте true
// if (-1 && 0) alert( 'second' );//-1 && 0 = 0,  в логическом контексте false
// if (null || -1 && 1) alert( 'third' );//оператор && имеет больший приоритет, чем ||
// так что -1 && 1 выполнится раньше
// вычисления: null || -1 && 1  ->  null || 1  ->  1


// Напишите код, который будет спрашивать логин с помощью prompt.
// Если посетитель вводит «Админ», то prompt запрашивает пароль, если ничего не введено или нажата клавиша Esc – показать «Отменено», 
//в противном случае отобразить «Я вас не знаю».

// Пароль проверять так:
// Если введён пароль «Я главный», то выводить «Здравствуйте!»,
// Иначе – «Неверный пароль»,
// При отмене – «Отменено».
// Для решения используйте вложенные блоки if. Обращайте внимание на стиль и читаемость кода.
// Подсказка: передача пустого ввода в приглашение prompt возвращает пустую строку ''. Нажатие клавиши Esc во время запроса возвращает null.

let login = prompt('Введите логин', '');
function enterPassword (){
    let password = prompt('Введите пароль', '');
    if (password == 'Я главный'){
        alert('Здравствуйте!')
    } else if (password == null){
        alert('Отменено')
    } else {
        alert('Неверный пароль')
    }
}

if (login === 'Админ'){
   enterPassword();
} else if (login == null || login == ''){
    alert('Отменено');
} else{
    alert('Я вас не знаю');
}


