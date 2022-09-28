import express from 'express';
import * as cariController from "../controllers/cariController.js";

const router= express.Router()

router.route("/").post(cariController.createCari)
router.route("/").get(cariController.getAllCaris)


export default router;