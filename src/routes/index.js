import { Router } from 'express';
import { Auth } from '../middleware/auth.js';
import * as PageController from '../controllers/pageController.js';
import * as SearchController from '../controllers/searchController.js';
import * as PainelController from '../controllers/painelController.js';
import * as ApiController from '../controllers/apiController.js';

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

router.get('/painel', Auth.private, PainelController.painel)
router.post('/painel', Auth.private, PainelController.gravar_prato)
router.get('/painel/delete', Auth.private, PainelController.deletar_prato)

router.get('/login', ApiController.loginPage )
router.post('/login', ApiController.login )
router.get('/logout', ApiController.logout )
router.post('/register', ApiController.register )

export default router;