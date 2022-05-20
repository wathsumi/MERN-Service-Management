const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Databass Schema

const ServiceSchema = new Schema({
    ServiceID: { type: Number, required: true },
    ServiceName: { type: String, required: true },
    PackageType: { type: String, required: true },
    PostalCode: { type: String, required: true },
    Email: { type: String, required: true },
    Description: { type: String, required: true },
    Materials: { type: String, required: true },

}, {
    timestamps: true,
});

const Service  = mongoose.model('Service ', ServiceSchema);

module.exports = Service ;



