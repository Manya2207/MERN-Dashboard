import express from 'express';
import { insertData, getData } from '../controllers/dataController.js'

const router = express.Router();

router.post('/', insertData);    
router.get('/getData', getData);

export default router;