import { Router } from 'express';
import { Auth } from '../middleware/auth.js';
import multer from 'multer';
import crypto from 'crypto';
import * as PageController from '../controllers/pageController.js';
import * as SearchController from '../controllers/searchController.js';
import * as PainelController from '../controllers/painelController.js';
import * as ApiController from '../controllers/apiController.js';
import * as EmailController from '../controllers/emailController.js';

const router = Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/images/')
    },
    filename: function (req, file, cb) {
        // Extração da extensão do arquivo original:
        const extensaoArquivo = file.originalname.split('.')[1];

        // Cria um código randômico que será o nome do arquivo
        const novoNomeArquivo = crypto.randomBytes(16).toString('hex');

        // Indica o novo nome do arquivo:
        cb(null, `${novoNomeArquivo}.${extensaoArquivo}`)
    }
});

const upload = multer({ storage });

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
router.post('/painel', Auth.private, upload.single('img'), PainelController.gravar_prato)
router.get('/painel/delete', Auth.private, PainelController.deletar_prato)

router.get('/login', ApiController.loginPage )
router.post('/login', ApiController.login )
router.get('/logout', ApiController.logout )
router.post('/register', ApiController.register )

router.post('/contato', EmailController.sendEmail )

export default router;