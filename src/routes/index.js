import { Router } from 'express';
import * as PageController from '../controllers/pageController.js';
import * as SearchController from '../controllers/searchController.js';
import * as PainelController from '../controllers/painelController.js';
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

router.get('/search', SearchController.search)

router.get('/painel', PainelController.painel)
router.post('/painel', PainelController.gravar_prato)
router.get('/painel/delete', PainelController.deletar_prato)

export default router;