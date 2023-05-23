import express from 'express'
import { 
AddWordSet,
showAllWordSet,
GetWordSetById,
showWordSetByUsername,
showAllWordSetByUsername,
showWordSetNotThisUsername,
showAllWordSetNotThisUsername,
showWordSetByKeyword,
EditWordSet,
DeleteWordSetByID
} from '../controllers/wordSetController.js'
import { isWordsetOwner } from '../middleware/auth.js'
const router = express.Router()
router.get('/getAllWordSet', showAllWordSet)
router.post('/getWordSetById', GetWordSetById)
router.post('/getWordSetByUsername', showWordSetByUsername)
router.post('/getAllWordSetByUsername', showAllWordSetByUsername)
router.post('/getWordSetNotThisUsername', showWordSetNotThisUsername)
router.post('/getAllWordSetNotThisUsername', showAllWordSetNotThisUsername)
router.post('/getWordSetByKeyword', showWordSetByKeyword)
router.put('/addWordSet', AddWordSet)
router.put('/editWordSet', isWordsetOwner, EditWordSet)
router.delete('/deleteWordSetByID', isWordsetOwner, DeleteWordSetByID)

export default router