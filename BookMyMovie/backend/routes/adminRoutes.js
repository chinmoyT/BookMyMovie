import express from 'express'
import { addAdmin, adminLogin, getAllAdmin } from '../controllers/adminController'
const adminRouter = express.Router()

adminRouter.post('/signup', addAdmin)
adminRouter.post('/login', adminLogin)
adminRouter.post('/', getAllAdmin)

export default adminRouter