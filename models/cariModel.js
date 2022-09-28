import mongoose from "mongoose";

const {Schema} = mongoose
const cariSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },

    amount: {
        type: Integer,
        required: true,
    },

    uploadedAt: {
        type: Date,
        default: Date.now,
    },

});

const Cari = mongoose.model("Photo", cariSchema)

export default Cari;