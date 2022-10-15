import mongoose from "mongoose";

const {Schema} = mongoose;
const cariSchema = new Schema({
    name:{
        type: String,
        required: true,
        trim:true,
    },
    description: {
        type: String,
        required: true,
        trim:true,
    },

    amount: {
        type: String,
        required: true,
        trim:true,
    },

    uploadedAt: {
        type: Date,
        default: Date.now,
    },

});

const Cari = mongoose.model('Cari', cariSchema)

export default Cari;