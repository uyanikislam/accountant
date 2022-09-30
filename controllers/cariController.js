import Cari from "../models/cariModel.js";

const createCari = async (req, res) => {
    try{
        const cari = await Cari.create(req.body)
        res.status(201).json({
            succeded:true,
            cari,
        });
    } catch (error){
        res.status(500).json({
            succeded:false,
            error,
        });
    }
   
};

const getAllCaris= async (req,res)=> {
    try {
        const cari = await Cari.find({})
        res.status(200).render('cari',{
            Cari,
        });
    }catch(error){
        res.status(500).json({
        succeded:false,
        error,
    });
    }
}
export {createCari, getAllCaris};
