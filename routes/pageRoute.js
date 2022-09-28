import express from 'express'
import * as pageController from "../controllers/pageController.js"

const router= express.Router()

router.route("/").get(pageController.getIndexPage)
router.route("/about").get(pageController.getAboutPage)
router.route("/contact").get(pageController.getContactPage)
router.route("/bird").get(pageController.getBirdPage)

export default router