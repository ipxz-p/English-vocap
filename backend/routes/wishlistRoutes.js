import express from 'express'
import { showWishlistByUsername, AddWishlist, RemoveWishlist } from '../controllers/wishlistController.js'

const router = express.Router();
router.post("/showWishlistByusername", showWishlistByUsername)
router.post("/addWishlist", AddWishlist)
router.post("/removeWishlist", RemoveWishlist)

export default router