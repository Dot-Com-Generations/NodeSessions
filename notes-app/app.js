// ? Taking Input from users using CLI

// ? How to read the Argument?

// !  process.argv

// const ag = process.argv[2]

// console.log(ag, ' Sangpriya')

const yargs = require('yargs');
const func = require('./func.js')


// console.log(process.argv)
// console.log('')
// console.log(yargs.argv)

// * Commands in a common Note Taking App - Add, Delete, Read, List

// Command (add) - Option (--Option)

// ? Creating a custom Command using yargs

// ? Command sets the command name.
// ? Describe - adds description to our command.
// ? Handler - What happens when the command is entered


// ? Add a Note Command
yargs.command({
    command: 'add',
    describe: 'Add a New Note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note Content',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        func.addNote(argv.title, argv.body)
    }
})

// ? Read a note
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        func.readNote(argv.title)
    }
})

// ? Remove a note
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        func.removeNote(argv.title)
    }
})

// ? List all notes
yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler: () => {
        func.listNotes()
    }
})


// console.log(yargs.argv)
yargs.parse()
