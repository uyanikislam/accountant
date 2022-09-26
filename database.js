import mongoose from "mongoose";

const muh = () => {
    mongoose.connect(process.env.DB_URI,{
        dbName: 'accounting',
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log("mongi okey")
    }).catch((err) => {
        console.log(`mongi problem:, $(err)`)
    });
};

export default muh;