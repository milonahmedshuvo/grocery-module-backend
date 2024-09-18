import  express  from "express";
import { userController } from "./user.controller";
import auth from "../../middleware/auth";
import { userRole } from "../../middleware/typeuserRole/typeuserRole";


const router = express.Router()



router.post('/create', userController.userCreate)
router.get('/currentUser',auth(userRole.user, userRole.admin), userController.currentUser)





export const userRoutes = router