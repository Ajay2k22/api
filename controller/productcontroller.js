import CustomError from "../utils/CustomErrorHandler.js"
import { Product } from "../models/products.js"

const Productcontroller = {

    productcontroll(req, res, next) {
        const result = true
        if (result) {
            return next(CustomError.alreadyExist('exits not', 400, 'main honn'))
        }

        res.json({
            msg: "product controller"
        })
    },

    async productcontrollnew(req, res, next) {
        try {
            console.log(req.body)
            const created = await Product.create(req.body);
            console.log(created)
            res.status(200).json({
                success: true,
                msg: 'product created'
            })
        }
        catch (error) {
            next(new CustomError(error, 404, 'Product unable to create'))
        }
    },

    async productcontrollfetch(req, res, next) {
        try {
            const data = await Product.find({})
            console.log(data)
            res.status(200).json({
                sucess: "true"
            })
        } catch (error) {
            next(new CustomError(error, 404, 'unable to fetch data'))
        }
    },

    async productcontrollupdate(req, res, next) {
        try {
            const fetch = await Product.findById(req.params.id)
            const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
                new: true,
                useFindAndModify: true,
                runValidators: true
            })
            console.log(req.body)
            console.log(product)

            res.status(200).json({
                success: true,
                msg: "updated sucessfully"
            })
        } catch (e) {
            next(new CustomError(e, 404, 'unable to update'))
        }

    },

    async productcontrollDelete(req, res) {
        try {
            const product = await Product.findById(req.params.id)
            await product.remove()

            res.status(200).json({
                success: true,
                msg: "Deleted Sucesssully"
            })
        }
        catch (e) {
            next(new CustomError(e, 404, 'Unable to Delete'))
        }
    }
}
export default Productcontroller