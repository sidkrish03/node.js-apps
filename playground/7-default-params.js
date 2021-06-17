const greeter =(name = 'user', age) => {
    console.log('Hello ' + name)
}

greeter('Sid') // Prints 'Hello Sid'
greeter() // Prints 'Hello undefined' if not given a default string value for name