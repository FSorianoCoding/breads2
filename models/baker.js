// Dependencies
const mongoose = require('mongoose')
const { Schema } = mongoose
const Bread = require('./bread')

// Schema
const bakerSchema = new Schema ({
    name: {
        type: String,
        require: true,
        enum: ['Rachel', 'Monica', 'Joey', 'Chandler', 'Ross', 'Phoebe']
    },
    startDate: {
        type: Date,
        required: true
    },
    bio: String
}, { toJSON: { virtuals: true }})

// Virtuals
bakerSchema.virtual('breads', {
    ref: 'Bread',
    localField: '_id',
    foreignField: 'baker'
})

// Hooks
bakerSchema.post('findOneAndDelete', function() {
    Bread.deleteMany({ baker: this._conditions._id })
        .then(deleteStatus => {
            console.log(deleteStatus)
        })
})

// Model and Export
const Baker = mongoose.model('Baker', bakerSchema)
module.exports = Baker

// OR CAN BE WRITTEN AS and be called as Baker
// module.exports = mongoose.module('Baker', bakerSchema)