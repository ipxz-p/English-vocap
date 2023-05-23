import express from 'express';
import { AddWord, GetAllWord, UpdateWord, DeleteWord } from '../controllers/wordController.js';


const router = express.Router()
router.put('/addWord', AddWord)
router.put('/editWord', UpdateWord)
router.delete('/deleteWord', DeleteWord)
router.post('/getAllWord', GetAllWord)
export default router