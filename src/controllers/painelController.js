import { Prato } from '../models/Prato.js';
import {Op} from 'sequelize'

export const painel = async (req, res) => {
    let query = req.query.q;
    if(query)
        var dados = await Prato.findAll({
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
    else
        var dados = await Prato.findAll();

    res.render('pages/painel', {
        prato: {id: 0},
        dados
    });
}

export const gravar_prato = async (req, res) => {
    let {id,nome,ingredientes,rendimento,categoria,img} = req.body;
    if(req.file) {
        img = req.file.filename;
    }
    if(parseInt(id) > 0) {
        await Prato.update({
            nome,
            ingredientes,
            rendimento,
            categoria,
            img
        },{
            where: {id}
        });
    } else {
        var prato = Prato.build();
        prato.nome = nome;
        prato.ingredientes = ingredientes;
        prato.rendimento = rendimento;
        prato.categoria = categoria;
        prato.img = img;
        await prato.save();
    }
    res.redirect('/painel');
}


export const deletar_prato = async (req, res) => {
    
    let query = req.query.id;
    let prato = await Prato.findOne({
        where: {
            id: query
        }
    });

    if(prato) {
        await prato.destroy();
    }

    res.redirect('/painel');
}