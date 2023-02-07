import { Prato } from '../models/Prato.js';

export const home = async (req, res) => {
    /* res.send('home') */
    /* try {
        await sequelize.authenticate();
        console.log('conexao mysql sucesso')    
    } catch (error) {
        console.log(error)
    } */
    let dados = await Prato.findAll();

    res.render('pages/page', {
        menu: {
            all: true,
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
export const carnes = async (req, res) => {
    /* res.send('carnes') */
    let dados = await Prato.findAll({
        where: {categoria: 'carnes'}
    })
    res.render('pages/page', {
        menu: {
            all: false,
            carnes: true,
            saladas: false,
            bebidas: false
        },
        banner: {
            title: 'Carnes',
            background: 'bg-carnes.jpg'
        },
        dados
    });
}
export const saladas = async (req, res) => {
    /* res.send('saladas') */
    let dados = await Prato.findAll({
        where: {categoria: 'saladas'}
    })
    res.render('pages/page', {
        menu: {
            all: false,
            carnes: false,
            saladas: true,
            bebidas: false
        },
        banner: {
            title: 'Saladas',
            background: 'bg-carnes.jpg'
        },
        dados
    });
}
export const bebidas = async (req, res) => {
    /*  res.send('bebidas') */
    let dados = await Prato.findAll({
        where: {categoria: 'bebidas'}
    })
    res.render('pages/page', {
        menu: {
            all: false,
            carnes: false,
            saladas: false,
            bebidas: true
        },
        banner: {
            title: 'Bebidas',
            background: 'bg-carnes.jpg'
        },
        dados
    });
}