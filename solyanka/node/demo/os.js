const os = require('os')
console.log('Операционная система: ', os.platform())
console.log('Архитектура процессора: ', os.arch())
console.log('Процессоры: ', os.cpus())
console.log('Свободной памяти: ', os.freemem())
console.log('Всего памяти: ', os.totalmem())
console.log('Домашняя директория: ', os.homedir())
console.log('Включен: ', os.uptime())