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
        type: String,
        required: true,
    },

    uploadedAt: {
        type: Date,
        default: Date.now,
    },

});

const Cari = mongoose.model("Cari", cariSchema)

export default Cari;