import { Router } from 'express';
import * as PageController from '../controllers/pageController.js';
import * as SearchController from '../controllers/searchController.js';
const router = Router();

/* 
router.get('/', (req, res) => {
    res.send('home');
});
 */

router.get('/', PageController.home)
router.get('/carnes', PageController.carnes)
router.get('/saladas', PageController.saladas)
router.get('/bebidas', PageController.bebidas)
export default router;