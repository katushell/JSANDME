//spread and rest 
// оператор ... называется spread (распростанение, расширение) или rest (остаток) 

var children = function(eat, sleep, step){
    console.log(eat, sleep, step)
}
children(...['mir', 'trud', 'mai'])

let love = ['Dima' , 'Katya']
let chat = ['Heart', 'Smiles', 23, ...love]
console.log(chat)

//замыкания

function createHuman(name){
    return function(lastName){
        console.log(name + lastName)
    }
}
const logWithLastName = createHuman('Sofia')
console.log('Kirfovna')
console.log('Terehena')



//методы массивов

let colors = ['blue', 'white', 'black', 'yellow']
//добавить элемент в конец
colors.push('violet')
console.log(colors)
//добавить элемент в начало
colors.unshift('blya')
//удалить первый и последний элемент и поймать его
const firstItem = colors.shift()
const lastItem = colors.pop()
console.log(firstItem)//выведется этот первый элемент, но в массиве его уже не будет
console.log(lastItem) // выведется последний элемент, но в массиве его уже не будет

colors.reverse() //перевернёт в обратную сторону массив

const text = 'Сейчас поставлю запятую, а вот и она'
const reverseText = text.split('').reverse().join('')////фраза разделится по буквам . наоборот . соединяем всё 
console.log(reverseText) 
//ано и тов а ,юутяпаз юлватсоп сачйеС

//найти элемент по индексу и заменить его
const index = colors.indexOf('white')
colors[index] = 'aquamarine'
console.log(colors)

const people = [
    {name: 'Selena', budget: 1000},
    {name: 'Avelia', budget: 2000},
    {name: 'Gipokrat', budget: 800},
    {name: 'Jojo', budget: 3000000},
]
const indexPeople = people.findIndex(function(person){
    return person.budget === 2000
})

console.log(people[indexPeople])    //{name: "Maleha", budget: 2000}

//то же самое без indexpeople

const secondPerson = people.find(function(secondPerson){
    return secondPerson.budget === 800
})
console.log(secondPerson)   //{name: "Dutup", budget: 800}

//а теперь ещё то же самое, только через цикл

let findedPerson
for (const persons of people){
    console.log(persons)
    if(persons.budget === 1000){
        findedPerson = persons
    }
}
console.log(findedPerson)  //{name: "Selena", budget: 1000}

//'это другое'

const tiredToFindPerson = people.find(tiredToFindPerson => tiredToFindPerson.budget === 3000000)
console.log(tiredToFindPerson)   //{name: "Jojo", budget: 3000000}

//проверить на наличие элемента
console.log(colors.includes('yellow')) //true

//метод map 
const animals = ['elephant', 'doggy', 'kitty']
const upperCaseColors = animals.map( animal => {
    return animal.toUpperCase()
})
console.log(upperCaseColors) //["ELEPHANT", "DOGGY", "KITTY"]
console.log(animals)// массив будет без изменений, потому что метод map всегда возвращает новый массив

const nums = [1, 2, 3, 4, 5, 6]
const pow = nums.map(num => num ** 2)
console.log(pow) //) [1, 4, 9, 16, 25, 36]

//сделать то же самое, но изящнее
const samePow = num2 => num2 ** 3
const nextPow = nums.map(samePow)
console.log(nextPow) //[1, 8, 27, 64, 125, 216]

const filteredNumbers =  nextPow.filter(nums => nums > 20)
console.log(filteredNumbers)   //[27, 64, 125, 216]

//метод reduce

// Arr.reduce(function(){}, 0) сначала принимает функцию, потом начальное значение

// const people = [
//     {name: 'Selena', budget: 1000},
//     {name: 'Avelia', budget: 2000},
//     {name: 'Gipokrat', budget: 800},
//     {name: 'Jojo', budget: 3000000},

// const allBudget = people.reduce(function(acc, person){
//         acc += person.budget
//         return acc
// }, 0)
const allBudget = people
    .filter(person => person.budget > 800)
    .reduce((acc, person) => {
        acc += person.budget
        return acc
}, 0)
console.log(allBudget)


// let bodyPart = ['нога', 'спина', 'голова', 'рука']
// let prilag = ['красивая', 'милая', 'замечательная', 'чудесная', 'потрясающая']
// let petsBody = ['лапа', 'хвост', 'макшука']
// let pets = ['собаки', 'кота', 'лягушки','жирафа']

// // let bodyPart1 = bodyPart[Math.floor(Math.random() * bodyPart.length)]
// // let prilag2 = prilag[Math.floor(Math.random() * prilag.length)]
// // let petsBody3 = petsBody[Math.floor(Math.random() * petsBody.length)]
// // let pets4 = pets[Math.floor(Math.random() * pets.length)]
// // let resultt = 'У тебя ' + bodyPart1 + ' ещё более ' + prilag2 + ',чем ' + petsBody3 + ' у ' + pets4
// // console.log(resultt)
// let bodyPart1, prilag2, petsBody3, pets4
// let arrayValue = [
//     {value: bodyPart1, mainValue: bodyPart[Math.floor(Math.random() * bodyPart.length)]},
//     {value: prilag2, mainValue: prilag[Math.floor(Math.random() * prilag.length)]},
//     {value: petsBody3, mainValue: petsBody[Math.floor(Math.random() * petsBody.length)]},
//     {value: pets4, mainValue: pets[Math.floor(Math.random() * pets.length)]},
// ]
// let arrayJoke = [bodyPart1 , prilag2, petsBody3, pets4].join(' ')
// console.log(arrayJoke)

// let arre = [3 , 2 , 1]
// let arre2 = arre.join(' больше, чем ')
// console.log(arre2)

//Context 
const planet = {
    name: 'Pluton',
    next: 'Sun'
}
const logger = {
    keys(){
        console.log('Object keys: ', Object.keys(this))
    },
    keysAndValues() {
        // Object.keys(this).forEach(key => {
        //     console.log(`${key} : ${this[key]}`)
        // }) //нет никаких проблем, потому что стрелочная функция не создаёт контекст
        
        // Object.keys(this).forEach(function(key){
        //     console.log(`${key} : ${this[key]}`)
        // }) //теряется конткект 

        const self = this
        Object.keys(this).forEach(function(key){
            console.log(`${key} : ${self[key]}`)
        }) //теряется конткект 
    }
}
// let bound = logger.keys.bind(planet) //метод bind привязывет контекст, который мы сами выбираем
// bound()

//то же самое, только через call
// logger.keys.call(planet) //вызывает сразу же
logger.keysAndValues.call(planet)


let hello = hellofoo => console.log('Hello', this)
const someone = {
    name: 'Katya', 
    age: 19,
    sayHello: hello,
    sayHelloBind: hello.bind(this),
    logInfo: function(job, phone){
        console.group(`${this.name} info:`)
        console.log(`Name is: ${this.name}`)
        console.log(`Age is: ${this.age}`)
        console.log(`Job is: ${job}`)
        console.log(`Phone is ${phone}`)
        console.groupEnd()
    }
}
someone.sayHelloBind()
someone.logInfo()

const Dima = {
    name: 'Dima',
    age: 20,
    sex: 'VERY GOOD'
}

// someone.logInfo.bind(Lena)() //Name is: Elena Age is: 28

//bind - вызывается, когда нужно 

// const DimaInfo = someone.logInfo.bind(Dima, 'producer', '8-999-999-99-99')
// DimaInfo()

//call - вызывается сразу
// const DimaInfo = someone.logInfo.call(Dima, 'producer', '8-999-999-99-98') //нет вызова в конце

//apply - то же самое, что и call, но там можно передавать только два параметра 
someone.logInfo.apply(Dima, ['producer', '8-999-999-99-96'])

const numbersArray = [1,2,3,4,5]
//обращение к главному прототипу array - Array
Array.prototype.multBy = function(n) {
    return this.map(function(i){
        return i * n
    })
}

console.log(numbersArray.multBy(1283)) // [1283, 2566, 3849, 5132, 6415]