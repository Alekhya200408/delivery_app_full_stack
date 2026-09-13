import { Router } from "express";
import deliveryControllers from "../controllers/delivery.controlers.js"
import authmiddleware from '../middleware/auth.middleware.js'




const router=Router()

router.post('/',authmiddleware,deliveryControllers.createDelivery)
router.get('/',authmiddleware,deliveryControllers.getDeliveries)
router.patch('/:id',authmiddleware,deliveryControllers.updateDelivery)
router.delete('/:id',authmiddleware,deliveryControllers.deleteDelivery)

export default router