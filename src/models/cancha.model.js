const { Schema, model } = require('mongoose')

const fieldSchema = new Schema({
    name:{type: String, require:true},
    adress:{type: String, require:true},
    location: [Object],
    img: {type: String, require:true},
    phone: {type: String, require:true},
    webSite: {type: String, require:true}
})

const Field = new model('Field', fieldSchema);

module.exports = Field