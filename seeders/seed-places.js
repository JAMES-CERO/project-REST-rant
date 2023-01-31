const db = require("../models/")
const { default: mongoose } = require("mongoose")

db.Place.create([{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: '../images/chifa-mateo.png',
    founded: 1989
}, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: "https://www.shutterstock.com/image-vector/cute-cat-hacker-operating-laptop-260nw-2235950657.jpg",
    founded: 2020
}])
.then(() => {
    console.log("Success")
    process.exit()
})
.catch(err => {
    console.log("Failure")
    process.exit()
})

