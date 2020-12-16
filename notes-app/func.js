// ? fs Module
const fs = require('fs');

// ? chalk Module
const chalk = require('chalk');

// ! Functions - Add, Read, Remove, List


// ? Function to list all notes
const listNotes = () => {
    const notes = load()
    if (notes.length !== 0) {
        console.log(chalk.blue.inverse(' All Notes '))
        console.log('')
        notes.forEach((note) => {
            console.log(`Title - ${note.title}`)
            console.log(`Body - ${note.body}`)
            console.log('')
        });
    } else {
        console.log('Error')
        console.log('No notes available')
    }
}
// ? Function to add a note
const addNote = (title, body) => {
    const notes = load()
    const noteExists = notes.filter((note) => {
        return note.title === title
    })
    if (noteExists.length === 0) {
        notes.push(
            {
                title,
                body
            }
        )
        save(notes)
        console.log(chalk.green.inverse(' SUCCESS '))
        console.log("New Note Added")
    } else {
        console.log(chalk.red.inverse(' ERROR '))
        console.log('Note Title already exists')
    }

}
// ? Function to remove a note
const removeNote = (title) => {
    const notes = load()
    const noteToKeep = notes.filter((note) => {
        return note.title !== title
    })
    if (noteToKeep.length < notes.length) {
        save(noteToKeep)
        console.log(chalk.green.inverse(' SUCCESS '))
        console.log('Note has been Removed')
    } else {
        console.log(chalk.red.inverse(' ERROR '))
        console.log('Note Does not exist')
    }
}
// ? Function to read a note
const readNote = (title) => {
    const notes = load()
    const noteToRead = notes.filter((note) => {
        return note.title === title
    })
    if (noteToRead.length !== 0) {
        console.log(chalk.green.inverse(' Your Note '))
        console.log(`Title - ${noteToRead[0].title}`)
        console.log(`Body - ${noteToRead[0].body}`)
    } else {
        console.log(chalk.red.inverse(' ERROR '))
        console.log('Note Does not exist! Try another Title')
    }
}

// ? function to Load our file
const load = () => {
    try {
        const dataJSON = fs.readFileSync('notes.json').toString()
        const data = JSON.parse(dataJSON)
        return data
    } catch (error) {
        return []
    }
}

// ? function to save our notes
const save = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

module.exports = {
    addNote,
    removeNote,
    readNote,
    listNotes
}