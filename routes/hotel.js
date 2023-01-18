import express from "express";
import { Hotel } from "../models/hotel.js"

const router = express.Router()

// router.get(`/`,Productcontroller.productcontroll)


router.post(`/post1`, async (req, res, next) => {
    try {
        console.log(req.body)
        const created = await Hotel.create(req.body);
        console.log(created)
        res.status(200).json({
            success: true,
            msg: 'post added created'
        })
    }
    catch (error) {
        res.status(200).json({
            success: false,
            msg: `${error.message}`
        })
    }
})

export default router;