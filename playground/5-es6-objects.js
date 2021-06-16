// Object property shorthand

const name = 'Sid'
const userAge = 27

const user = { 
    name, // shorthand syntax possible here in the case of name variable
    age: userAge,
    location: 'Aurora'
}

console.log(user)

// Object destructuring

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined,
    rating: 4.2
}

// const label = product.label
// const stock = product.stock

// While destructuring - we can do the following:
// 1. Rename a variable name 
// 2. Provide undefined variable names (non-existent ones) and run code (No errors will occur)

// const {label: productLabel, stock, rating = 5} = product 
// console.log(productLabel)
// console.log(stock)
// console.log(rating)

const transaction = (type, { label, stock }) => {
    console.log(type, label, stock)
}

transaction('order', product)

// ES6: Default Function Parameters
const greet = ( name = 'User' ) => {
    console.log('Hello, ' + name + '!')
}

greet('Sid') // Will print: Hello, Sid!
greet() // Will print: Hello, User!