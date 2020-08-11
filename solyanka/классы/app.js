class Books{
    static type = "BoOk"
    constructor(options){
        this.title = options.title
        this.year = options.year
        this.author = options.author
    }
    //you may add methods to class
    read(){
        console.log('I am reading!')
    }
}

const book = new Books ({
    title: 'Koralina',
    year: 2015,
    author: 'Nil Geiman'
})

class Philosophy extends Books {
    static type = 'Philosophy'
    //new options
    constructor(options){
        super(options) //to avoid an error
        this.edition = options.edition
    }
    read(){
        super.read() //to see parents method
        console.log('I am try to understand!')
    }
}

const PlatonDialogues = new Philosophy({
    title: 'PlatonDialogues',
    year: 'idontknow',
    author: 'Platon',
    edition: 'piter'
})


//обычно через доллар называют переменные, которые содержат домноду
class Component {
    constructor(selector){
        this.$el = document.querySelector(selector)
    }

    hide(){
        this.$el.style.display = 'none'
    }

    show(){
        this.$el.style.display = 'block'
    }
}

class Box extends Component{
    constructor(options){
        super(options.selector)
        this.$el.style.width = this.$el.style.height = options.size + 'px';
        this.$el.style.background = options.color
    }
}

const box1 = new Box({
    selector: '#box1',
    size: 200,
    color: 'green'
})
const box2 = new Box({
    selector: '#box2',
    size: 400,
    color: 'red'
})
