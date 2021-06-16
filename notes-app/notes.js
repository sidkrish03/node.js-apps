const fs = require('fs')
const chalk = require('chalk')

// addNote function
// const addNote = function(title, body) { // Standard function
    // addNote(title, body) { -> Invalid - Cannot use ES6 here since multiple statements inside this function
const addNote = (title, body) => {
    const notes = loadNotes()
    // const duplicateNotes = notes.filter(function (note) { // Standard function
    //     return note.title === title
    // })
    // const duplicateNotes = notes.filter((note) => note.title === title) // Concise Arrow function
    const duplicateNote = notes.find((note) => note.title === title) // find function

    // if(duplicateNotes.length === 0) {
    if(!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note created!'))
    } else {
        console.log(chalk.red.inverse('Note title has been taken!!'))
    }

    notes.push({
        title: title,
        body: body
    })
    // console.log(notes)
    // saveNotes(notes)
}

// removeNote function
// const removeNote = function(title) {
const removeNote = (title) => {
    const notes = loadNotes()
    // const notesToKeep = notes.filter(function (note) {
    //     return note.title !== title
    // })
    const notesToKeep = notes.filter((note) => note.title !== title) // Concise Arrow function

    if (notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse('Note removed!'))
        saveNotes(notesToKeep)
    } else {
        console.log(chalk.red.inverse('No such note found!'))
    }
    // saveNotes(notesToKeep)
    // console.log(notes)
}

// listNotes function
const listNotes = () => {
    const notes = loadNotes() 

    console.log(chalk.blue.inverse('Your Notes'))

    notes.forEach((note) => console.log(note.title))
}

// readNote function
const readNote = (title) => {
    const notes = loadNotes()
    const findNoteToRead = notes.find((note) => note.title === title)
    
    if(!findNoteToRead) {
        console.log(chalk.bold.red('Note not found!'))
    } else {
        console.log(chalk.yellow.bold.italic.inverse(findNoteToRead.title))
        console.log(findNoteToRead.body)
    }
}

// const saveNotes = function (notes) {
const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

// const loadNotes = function () {
const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}