import express from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express'
import path from 'path'
import { fileURLToPath } from 'url';
import rotas from './routes/index.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const server = express();

server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

server.use(express.static(path.join(__dirname, '../public')));

server.use(rotas)

server.use((req,res) => {
    res.send('Pagina nao encontrada');
});

server.listen(process.env.PORT);