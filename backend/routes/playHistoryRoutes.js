import express from 'express'
import { AddPlayHistory, showPlayHistoryByUsername } from '../controllers/playHistoryController.js'

const router = express.Router();
router.post("/addPlayHistory", AddPlayHistory)
router.post("/showPlayHistoryByUsername", showPlayHistoryByUsername)

export default router