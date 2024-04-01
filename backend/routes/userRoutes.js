import express from 'express'
import {
    authUser,
    registerUser,
    updateProfilePicture,
    updateUserDetails
} from '../controllers/userController.js'


const router  = express.Router()

router.route('/login').post(authUser)
router.route('/create').post(registerUser)
router.route('update').post(updateUserDetails)
router.route('imageupdate').post(updateProfilePicture)

export default router