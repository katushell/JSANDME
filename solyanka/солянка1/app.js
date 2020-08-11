//setTimeout

// console.log('Это выведется сразу же')
// window.setTimeout(function(){
//     console.log('А должна вывестись первой')
// }, 0) //даже если это в начале, выведется ниже обычных консоль логов

// console.log('И это тоже')

// function timeout2set(){
//     console.log('2sec')
// }

// window.setTimeout(function(){
//     console.log('Полежайкин убил человека')
// }, 5000) //выведется через 5 секунд

// setTimeout(timeout2set, 2000) //выведтся через 2 секунды

//за всю эту красоту отвечает eventLoop
//программа бежит по строчкам кода, доходит то таймаута
//его закидывает в стек
//стек видит что сеттаймаут это браузерный api
//выкидывает его из стека и регестрирует функцию
//стек ждёт, пока браузерный сторонний api выполнит сеттауймаут
//когда всё будет выполнено, функция попадает в очередь
//если цикл видит, что функция готова, он закидвыает её обратно в стек 
//и она выполняется


// Promise

 console.log('Request data...') 
// setTimeout(() => {
//     console.log('Preparing data...')
//     const backendData = {
//         server: "rersg",
//         port: 2000, 
//         status: 'working'
//     }
//     setTimeout(() => {
//         backendData.modified = true
//         console.log('Data received' , backendData)
//     }, 2500)
// }, 2000)


const p = new Promise(function(resolve, reject){ //resolve вызывается тогда, когда закончена синхронная операция (успешно закончена!)
    setTimeout(() => {
        console.log('Preparing data...')
        const backendData = {
            server: "rersg",
            port: 2000, 
            status: 'working'
        }
        resolve()
    }, 2000)
})
p.then(() => {
    console.log('lox')
})

const sleep = ms => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), ms)
    })
}

// sleep(2000).then(() => console.log('After 2 sec'))
// sleep(4000).then(() => console.log('After 4 sec'))

//методы Promise

//Promise all будет выполнен тогда, когда завершаться все промисы в этом массиве
Promise.all([sleep(2000), sleep(5000)]).then(() => {
    console.log('all promises')
})

//метод race принимает набор промисов, и когда выполнится первый промис, срабатывает race
Promise.race([sleep(2000), sleep(5000)]).then(() => {
    console.log('race promises')
})
