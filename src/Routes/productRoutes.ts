import { Router } from "express";
import { deleteProducts, getProducts, postProducts, updateProducts } from "../controller/productController";

const router = Router()

router.get("/",getProducts)
router.post("/",postProducts)
router.put("/:id",updateProducts)
router.delete("/:id",deleteProducts)

export default router