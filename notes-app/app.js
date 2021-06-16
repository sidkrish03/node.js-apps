const chalk = require('chalk') // Locally installed packages

const yargs = require('yargs')
const notes = require('./notes.js') // Object with four properties - 1. addNote 2. removeNote 3. listNotes 4. readNote
const { demandOption, argv } = require('yargs')
const command = process.argv[2]

if(command === 'add') {
    console.log('Adding note!')
} else if (command === 'remove') {
    console.log('Removing note!')
}

// Notes app contains - add, remove, read, list

// add command
yargs.command({
    command: 'add',
    describe: 'Adds a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true, 
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    // handler: function (argv) {
    handler(argv) { // ES6 short hand syntax
        console.log('Title: ', argv.title)
        console.log('Body:', argv.body)
        notes.addNote(argv.title, argv.body)
    }
})

// remove command

yargs.command({
    command: 'remove',
    describe: 'Removes a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    // handler: function (argv) {
    handler(argv) { // ES6 short hand syntax
        notes.removeNote(argv.title)
    }
})


// read command
yargs.command({
    command: 'read',
    describe: 'Reads a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(agrv) {
        // console.log('Reading a note')
        notes.readNote(argv.title)
    }
})

// list command

yargs.command({
    command: 'list',
    describe: 'Lists the notes',
    handler() {
        // console.log('Listing out all the notes')
        notes.listNotes()
    }
})

// console.log(process.argv)
// console.log(yargs.argv)
yargs.parse()

