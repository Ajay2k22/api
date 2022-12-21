import express from "express";
import Productcontroller from "../controller/productcontroller.js";

const router = express.Router()

// router.get(`/`,Productcontroller.productcontroll)
router.get(`/`, (req, res) => {
    res.json({
        msg: 'i am here'
    })
})

router.post(`/product/new`, Productcontroller.productcontrollnew)

router.get(`/api/products/`, Productcontroller.productcontrollfetch)

router.put(`/api/products/:id`, Productcontroller.productcontrollupdate)

router.delete('/api/products/:id',Productcontroller.productcontrollDelete)

export default router;