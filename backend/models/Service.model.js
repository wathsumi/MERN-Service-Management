const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Databass Schema

const ServiceSchema = new Schema({
    ServiceID: { type: Number, required: true },
    ServiceName: { type: String, required: true },
    PackageType: { type: String, required: true },
    Price: { type: Number, required: true },
    NumberOfPeople : { type: Number, required: true },

}, {
    timestamps: true,
});


const Service  = mongoose.model('Service ', ServiceSchema);

module.exports = Service ;

