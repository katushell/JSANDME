const fs = require('fs')
const path = require('path')

// fs.mkdir(path.join(__dirname, 'test'), (err) => {
//     if(err){
//         throw err
//     }
//     console.log('Папка создана!')
// })

const filePath = path.join(__dirname, 'test', 'text.txt')

// fs.writeFile(filePath, 'Its NodeJs!', err => {
//     if(err){
//         throw err
//     }
//     console.log('Файл создан!')
// });
// fs.appendFile(filePath, '\nSecond Time!', err => {
//     if(err){
//         throw err
//     }
//     console.log('Файл создан!')
// })

// fs.readFile(filePath, (err, content) => {
//     if(err){
//         throw err
//     }
//     const data = Buffer.from(content)
//     console.log('Content: ', data.toString())
// })

//способ сделать то же самое, только быстрее

fs.readFile(filePath, 'utf-8' ,(err, content) => {
    if(err){
        throw err
    }
    console.log(content)
})
