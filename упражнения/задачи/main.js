function guess (){
   let message = prompt('Угадайте мой возраст', 'От 12 до 35 лет');
   if (message == 19){
    alert('true');
} else{
    alert('nope');
    guess();
}
}
guess()

