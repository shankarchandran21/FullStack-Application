import express from 'express'
import { createUsers,getAllUsers } from '../controller/userControllers.js'
const router = express.Router()

//http://localhost:5000/users/add
router.post('/add',createUsers)
//http://localhost:5000/users
router.get('/',getAllUsers)

export default router