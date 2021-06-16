
// Example 1 - Creating a square function
// Version 1 - Standard function
// const square = function (x) {
//     return x * x
// }

// Version 2 - Arrow function is similar to Lamba expression
// const square = (x) => {
//     return x * x
// }

// Version 3 - Concise Arrow function
const square = (x) => x * x

console.log(square(3))

// Example 2 - Event details
const event = {
    name: 'Birthday Party',
    guestList: ['Harry', 'Hermoinie', 'Ron'],
    // Version 1 - Standard function
    // printGuestList: function () {
    //     console.log('Guest list for ' + this.name)
    // }

    // Version 2 - Arrow function (Lamba expression)
    printGuestList() {
        console.log('Guest list for ' + this.name)

        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending the ' + this.name)
        })
    }
}

event.printGuestList()