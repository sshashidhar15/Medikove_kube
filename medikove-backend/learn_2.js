const { data } = require('jquery')

// arrow functions
const event = {
    name:"birth day party",
    attendee:['s','d','f'],
    printGuestList() {
        console.log(this.name)       
        this.attendee.forEach((guest) => {
        console.log(guest + this.name)        
    })
    }
}

const tasks = {
    asks:[{
        name:"qwe",
        completed:true
    },
    {
        name:"rty",
        completed:false
    }
],
    getTaskToDo() {
        
        return this.asks.filter((task) => task.completed === false)
    }
}

//event.printGuestList()
//tasks.getTaskToDo()
//console.log(tasks.getTaskToDo())


// working with json data

fs = require('fs')

task = {
    name:"test",
    completed:21
}

// dataJSON = JSON.stringify(task)
// console.log(dataJSON.name)
// datass = JSON.parse(dataJSON)
// console.log(data.name)

const dataBuffer = fs.readFileSync('1-json.json')
dataJsons = dataBuffer.toString() 
const datas = JSON.parse(dataJsons)

console.log(datas.name)