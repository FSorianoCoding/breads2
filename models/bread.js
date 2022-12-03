// Require mongoose
const mongoose = require('mongoose')
// Creating shorthand for the Schema constructor
const { Schema } = mongoose

// Define our Schema using the Schema constructor and name it a variable
const breadSchema = new Schema({
    // We will write our schema here
    name: { type: String, required: true },
    hasGluten: Boolean,
    image: { type: String, default: 'https://place-puppy.com/300x300' },
    baker: {
        type: String,
        enum: ['Rachel', 'Monica', 'Joey', 'Chandler', 'Ross', 'Phoebe']
    }
})

// Create a model under schema to use schema
// Conventionally the variable should be capitalized.
// mongoose.model is a method that creates a model for us to pass arguments
// that allows us to interact with mongo database.
// First argument passed is the name of the collection.
// Second argument is the schema model we want to use.
const Bread = mongoose.model('Bread', breadSchema)

// Export the MODEL not the SCHEMA
module.exports = Bread

// module.exports = [
//     {
//       name: 'Rye',
//       hasGluten: true,
//       image: 'https://images.unsplash.com/photo-1595535873420-a599195b3f4a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
//     },
//     {
//       name: 'French',
//       hasGluten: true,
//        image: 'https://images.unsplash.com/photo-1534620808146-d33bb39128b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
//     },
//     {
//       name: 'Gluten-Free',
//       hasGluten: false,
//       image: 'https://images.unsplash.com/photo-1546538490-0fe0a8eba4e6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80',
//     },
//     {
//       name: 'Pumpernickel',
//       hasGluten: true,
//       image: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80',
//     }
//   ]
  