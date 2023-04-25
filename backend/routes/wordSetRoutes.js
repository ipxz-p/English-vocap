import express from 'express'
import { 
AddWordSet,
showAllWordSet,
showWordSetByUsername,
showWordSetNotThisUsername,
EditWordSet,
DeleteWordSetByID
} from '../controllers/wordSetController.js'
import { isWordsetOwner } from '../middleware/auth.js'
const router = express.Router()
router.get('/getAllWordSet', showAllWordSet)
router.post('/getWordSetByUsername', showWordSetByUsername)
router.post('/getWordSetNotThisUsername', showWordSetNotThisUsername)
router.put('/addWordSet', AddWordSet)
router.put('/editWordSet', isWordsetOwner, EditWordSet)
router.delete('/deleteWordSetByID', isWordsetOwner, DeleteWordSetByID)

export default router