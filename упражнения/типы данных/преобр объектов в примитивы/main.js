// Преобразование объектов в примитивы
// Преобразование к примитивам
// Существуют три варианта преобразований («три хинта»)

// "string"
// Для преобразования объекта к строке, когда операция ожидает получить строку, например alert
// "number"
// Для преобразования объекта к числу, в случае математических операций
// "default"
// Происходит редко, когда оператор «не уверен», какой тип ожидать.

// Symbol.toPrimitive

let user = {
    name: "John",
    money: 1000,
  
    [Symbol.toPrimitive](hint) {
        console.log(`hint: ${hint}`);
      return hint == "string" ? `{name: "${this.name}"}` : this.money;
    }
  };
  
  // демонстрация результатов преобразований:
console.log(user); // hint: string -> {name: "John"}
console.log(+user); // hint: number -> 1000
console.log(user + 500); // hint: default -> 1500