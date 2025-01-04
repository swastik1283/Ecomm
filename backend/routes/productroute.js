import express from 'express';
import { listproducts,addProduct,removeProduct,singleProduct } from '../controllers/productController.js';

const productRouter=express.Router()

productRouter.post('/add',addProduct)
productRouter.post('/list',listproducts)
productRouter.post('/remove',removeProduct)
productRouter.post('/single',singleProduct)

export default productRouter