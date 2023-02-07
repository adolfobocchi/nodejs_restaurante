import { Prato } from '../models/Prato.js';
import {Op} from 'sequelize';

export const search = async (req, res) => {
    let query = req.query.q;
    let dados = await Prato.findAll({
        where: {
            [Op.or]: {
                nome: {
                
                    [Op.like]: `%${query}%`
                },
                ingredientes: {
                
                    [Op.like]: `%${query}%`
                },
            }
            
        }
    });

    res.render('pages/page', {
        menu: {
            all: false,
            carnes: false,
            saladas: false,
            bebidas: false
        },
        banner: {
            title: 'Todos os pratos',
            background: 'bg-all.jpg'
        },
        dados
    });
}