import { Router } from 'express'
import authControllers from '../controllers/auth.controllers.js'
import authMiddleware from '../middleware/auth.middleware.js'

const router=Router()

router.get("/profile", authMiddleware, (req, res) => {
    res.json({
        message: "You are authenticated",
        user: req.user
    });
});


router.post('/register',authControllers.createUser)
router.post('/login',authControllers.loginUser)


export default router