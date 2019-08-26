const mongoose = require('mongoose')

if ( process.argv.length<3 ) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]

const url =
  `mongodb+srv://fullstack:${password}@cluster0-gxcbr.mongodb.net/phonebook?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true })

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
  id: Number,
})

const Person = mongoose.model('Person', personSchema)

// Note.find({}).then(result => {
//     result.forEach(note => {
//       console.log(note)
//     })
//     mongoose.connection.close()
//   })

const generateId = () => {
    return Math.floor(Math.random() * Math.floor(100000));
  }



if (process.argv.length === 3)
{
    Person.find({}).then(result => {
        result.forEach(person => {
            console.log(person)
        })
        mongoose.connection.close()
    })
}
else
{
    const person = new Person({
    name: process.argv[3],
    number: process.argv[4],
    id: generateId(),
    })

    person.save().then(response => {
    console.log('Added ' +response.name +' ' +response.number +' to phonebook');
    mongoose.connection.close();
    })
}