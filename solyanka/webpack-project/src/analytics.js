function createAnalytics(){
    let counter = 0
    let isDestroyed = false

    const listener = () => counter++

    document.addEventListener('click', listener)

    return{
        destroy(){
            document.removeEventListener('click', listener)
            isDestroyed = true
        },
        getClicks(){
            if(isDestroyed){
                return 'Analytics is destoyed'
            }else{
                return counter
            }
        }
    }
}

window.analytics = createAnalytics()

//так как тут не нужно работать с дом, можно подключить через head