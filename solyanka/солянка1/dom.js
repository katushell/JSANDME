//работа с браузерными api  
//а всё, это другая тема


const person = Object.create(
    {},
    {
        name: {
            value: 'Diiiii',
            enumerable: true
        },
        birthDay: {
            value: 1999
        }
    }
)

for(let key in person){
    console.log('Key', key, person[key])
}
