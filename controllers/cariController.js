import Cari from "../models/cariModel.js";

const createCari = (req, res) => {
    const cari = Cari.create(req.body)
    res.status(201).json({
        succeded:true,
        cari,
    });
};

export {createCari};
