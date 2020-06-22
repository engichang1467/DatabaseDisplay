const API_URL = 'http://localhost:5000/adduser'


var x = arr.every(function(val){
    return val > 3
})

console.log(x)

// -- Objects

// var person = { 
//     firstname: "Mike",
//     lastname: "Chang",
//     id: 555,
//     fullname: function(){
//         return this.firstname + " " + this.lastname
//     }
// }

// constructor that create its own objects
function Person(f,l,i,a){
    this.firstname = f
    this.lastname = l
    this.age = a
    this.id = i
}

// var per1 = new Person("Mike", "Doe", 1234, 44)

// -- event handlers
function runcommand(){
    document.getElementsByTagName("h1")[0].innerHTML = "ADD USERS"
}


var addingUser = document.getElementById("addUser")

var id = addingUser.elements.namedItem("id").value
var name = addingUser.elements.namedItem("name").value
var height = addingUser.elements.namedItem("height").value
var size = addingUser.elements.namedItem("size").value
var type = addingUser.elements.namedItem("type").value

document.getElementById("button").onclick = runcommand
